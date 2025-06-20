var Yf = Object.defineProperty, Jf = Object.defineProperties;
var Qf = Object.getOwnPropertyDescriptors;
var Su = Object.getOwnPropertySymbols;
var Zf = Object.prototype.hasOwnProperty, ew = Object.prototype.propertyIsEnumerable;
var yu = (e, t, n) => t in e ? Yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, re = (e, t) => {
  for (var n in t || (t = {}))
    Zf.call(t, n) && yu(e, n, t[n]);
  if (Su)
    for (var n of Su(t))
      ew.call(t, n) && yu(e, n, t[n]);
  return e;
}, Qe = (e, t) => Jf(e, Qf(t));
var b = (e, t, n) => new Promise((o, s) => {
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
    CdxTab: g
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
    CdxTab: g
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
}, nw = window.Vue.toDisplayString, er = window.Vue.openBlock, tr = window.Vue.createElementBlock, ow = window.Vue.createCommentVNode, xu = window.Vue.createElementVNode, sw = window.Vue.normalizeClass, aw = ["width", "height", "aria-labelledby"], iw = ["id"], rw = ["fill"], lw = ["d"];
function cw(e, t, n, o, s, a) {
  return er(), tr("span", {
    class: sw(["mw-ui-icon notranslate", a.classes])
  }, [
    (er(), tr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (er(), tr("title", {
        key: 0,
        id: n.iconName
      }, nw(n.iconName), 9, iw)) : ow("", !0),
      xu("g", { fill: n.iconColor }, [
        xu("path", { d: a.iconImagePath }, null, 8, lw)
      ], 8, rw)
    ], 8, aw))
  ], 2);
}
const He = /* @__PURE__ */ oe(tw, [["render", cw]]);
const uw = {
  name: "MwButton",
  components: {
    MwIcon: He
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
}, dw = window.Vue.renderSlot, gw = window.Vue.resolveComponent, bu = window.Vue.normalizeClass, _a = window.Vue.openBlock, nr = window.Vue.createBlock, or = window.Vue.createCommentVNode, pw = window.Vue.toDisplayString, hw = window.Vue.createElementBlock, fw = window.Vue.toHandlerKey, ww = window.Vue.withModifiers, _w = window.Vue.mergeProps, vw = window.Vue.createElementVNode, Sw = window.Vue.resolveDynamicComponent, yw = window.Vue.withCtx, xw = { class: "mw-ui-button__content" }, bw = ["textContent"];
function Cw(e, t, n, o, s, a) {
  const r = gw("mw-icon");
  return _a(), nr(Sw(a.component), {
    class: bu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: yw(() => [
      dw(e.$slots, "default", {}, () => [
        vw("span", xw, [
          n.icon ? (_a(), nr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: bu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : or("", !0),
          !a.isIcon && n.label ? (_a(), hw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: pw(n.label)
          }, null, 8, bw)) : or("", !0),
          n.indicator ? (_a(), nr(r, _w({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [fw(a.indicatorClickEvent)]: t[0] || (t[0] = ww((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : or("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ne = /* @__PURE__ */ oe(uw, [["render", Cw]]);
const kw = {
  name: "MwButtonGroup",
  components: {
    MwButton: Ne
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
}, $w = window.Vue.renderList, Vw = window.Vue.Fragment, sr = window.Vue.openBlock, Cu = window.Vue.createElementBlock, Ew = window.Vue.resolveComponent, Lw = window.Vue.withModifiers, Aw = window.Vue.mergeProps, Dw = window.Vue.createBlock, Tw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Bw(e, t, n, o, s, a) {
  const r = Ew("mw-button");
  return sr(), Cu("div", Tw, [
    (sr(!0), Cu(Vw, null, $w(n.items, (c) => (sr(), Dw(r, Aw({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: Lw((u) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const aa = /* @__PURE__ */ oe(kw, [["render", Bw]]);
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
}, ku = window.Vue.renderSlot, Fw = window.Vue.toDisplayString, $u = window.Vue.openBlock, Vu = window.Vue.createElementBlock, Mw = window.Vue.createCommentVNode, Nw = window.Vue.createElementVNode, Uw = { class: "mw-ui-card" }, Iw = ["textContent"], Rw = { class: "mw-ui-card__content" };
function zw(e, t, n, o, s, a) {
  return $u(), Vu("div", Uw, [
    ku(e.$slots, "header", {}, () => [
      n.title ? ($u(), Vu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Fw(n.title)
      }, null, 8, Iw)) : Mw("", !0)
    ]),
    Nw("div", Rw, [
      ku(e.$slots, "default")
    ])
  ]);
}
const Je = /* @__PURE__ */ oe(Pw, [["render", zw]]);
const Ow = {}, jw = window.Vue.openBlock, Hw = window.Vue.createElementBlock, qw = { class: "mw-ui-divider row" };
function Gw(e, t) {
  return jw(), Hw("div", qw);
}
const Pi = /* @__PURE__ */ oe(Ow, [["render", Gw]]);
const Xw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Ww = window.Vue.renderSlot, Kw = window.Vue.resolveDynamicComponent, Yw = window.Vue.withCtx, Jw = window.Vue.openBlock, Qw = window.Vue.createBlock;
function Zw(e, t, n, o, s, a) {
  return Jw(), Qw(Kw(n.tag), { class: "mw-grid container" }, {
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
const P = /* @__PURE__ */ oe(t0, [["render", l0]]), _c = ["mobile", "tablet", "desktop", "desktop-wide"], c0 = _c.reduce(
  (e, t) => Qe(re({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), u0 = {
  name: "MwCol",
  props: Qe(re({}, c0), {
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
      for (let n = 0; n < _c.length; n++) {
        let o = _c[n], s = this.$props[o];
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
const k = /* @__PURE__ */ oe(u0, [["render", w0]]), _0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", v0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Fi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", S0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, y0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Xm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", x0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", b0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", ia = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", C0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", k0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", $0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Eu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", V0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Wm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", E0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", L0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", A0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", D0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", T0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", B0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Ai = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, P0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Km = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, F0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Ym = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", M0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const ar = window.Vue.computed, N0 = window.Vue.watch, U0 = window.Vue.ref, I0 = window.Vue.nextTick, R0 = {
  name: "MwDialog",
  components: {
    MwButton: Ne,
    MwRow: P,
    MwCol: k,
    MwDivider: Pi
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
    const n = U0(null), o = ar(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = ar(
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
    const c = ar(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayClass: s,
      mwIconClose: ia,
      root: n
    };
  }
}, Lu = window.Vue.normalizeClass, ir = window.Vue.createElementVNode, rr = window.Vue.renderSlot, va = window.Vue.resolveComponent, Jo = window.Vue.createVNode, lr = window.Vue.withCtx, Au = window.Vue.createCommentVNode, z0 = window.Vue.withKeys, Du = window.Vue.openBlock, O0 = window.Vue.createElementBlock, j0 = window.Vue.Transition, H0 = window.Vue.normalizeStyle, q0 = window.Vue.createBlock, G0 = { class: "mw-ui-dialog__shell items-stretch" }, X0 = { class: "mw-ui-dialog__body" };
function W0(e, t, n, o, s, a) {
  const r = va("mw-col"), c = va("mw-button"), u = va("mw-row"), g = va("mw-divider");
  return Du(), q0(j0, {
    name: "mw-ui-animation-fade",
    style: H0(o.cssVars)
  }, {
    default: lr(() => [
      n.value ? (Du(), O0("div", {
        key: 0,
        ref: "root",
        class: Lu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = z0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        ir("div", {
          class: Lu(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        ir("div", G0, [
          n.header ? rr(e.$slots, "header", { key: 0 }, () => [
            Jo(u, { class: "mw-ui-dialog__header" }, {
              default: lr(() => [
                Jo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Jo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: lr(() => [
                    Jo(c, {
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
            Jo(g)
          ]) : Au("", !0),
          ir("div", X0, [
            rr(e.$slots, "default")
          ]),
          rr(e.$slots, "footer")
        ])
      ], 34)) : Au("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const St = /* @__PURE__ */ oe(R0, [["render", W0]]);
const K0 = {
  name: "MwInput",
  components: {
    MwIcon: He
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
      const t = re({}, e.$attrs);
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
}, Tu = window.Vue.renderSlot, Y0 = window.Vue.resolveComponent, Sa = window.Vue.openBlock, cr = window.Vue.createBlock, Bu = window.Vue.createCommentVNode, J0 = window.Vue.resolveDynamicComponent, Q0 = window.Vue.toDisplayString, Z0 = window.Vue.mergeProps, e1 = window.Vue.withModifiers, t1 = window.Vue.createElementVNode, n1 = window.Vue.normalizeClass, o1 = window.Vue.createElementBlock, s1 = { class: "mw-ui-input__content" };
function a1(e, t, n, o, s, a) {
  const r = Y0("mw-icon");
  return Sa(), o1("div", {
    class: n1(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    t1("div", s1, [
      Tu(e.$slots, "icon", {}, () => [
        n.icon ? (Sa(), cr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Bu("", !0)
      ]),
      (Sa(), cr(J0(n.type === "textarea" ? n.type : "input"), Z0({
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
        textContent: Q0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Tu(e.$slots, "indicator", {}, () => [
        n.indicator ? (Sa(), cr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = e1((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Bu("", !0)
      ])
    ])
  ], 2);
}
const vc = /* @__PURE__ */ oe(K0, [["render", a1]]);
const i1 = {
  name: "MwMessage",
  components: { MwCol: k, MwRow: P, MwIcon: He, MwButton: Ne },
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
    mwIconClose: ia,
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
      warning: Km,
      success: Ai,
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
}, ur = window.Vue.renderSlot, ya = window.Vue.resolveComponent, Pu = window.Vue.createVNode, Fu = window.Vue.withCtx, Mu = window.Vue.openBlock, Nu = window.Vue.createBlock, Uu = window.Vue.createCommentVNode, r1 = window.Vue.normalizeClass;
function l1(e, t, n, o, s, a) {
  const r = ya("mw-icon"), c = ya("mw-col"), u = ya("mw-button"), g = ya("mw-row");
  return e.shown ? (Mu(), Nu(g, {
    key: 0,
    class: r1([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Fu(() => [
      ur(e.$slots, "icon", {}, () => [
        Pu(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Pu(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Fu(() => [
          ur(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      ur(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Mu(), Nu(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Uu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Uu("", !0);
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
const rt = /* @__PURE__ */ oe(u1, [["render", w1]]), wt = {
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
const _1 = window.Vue.computed, v1 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: He },
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
      default: Ym
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
    const n = _1(() => {
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
}, Iu = window.Vue.normalizeStyle, Ru = window.Vue.openBlock, S1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const y1 = window.Vue.resolveComponent, x1 = window.Vue.createBlock;
function b1(e, t, n, o, s, a) {
  const r = y1("mw-ui-icon");
  return n.thumbnail ? (Ru(), S1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Iu(o.style)
  }, null, 4)) : (Ru(), x1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Iu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Mc = /* @__PURE__ */ oe(v1, [["render", b1]]);
const C1 = {
  name: "MwRadio",
  components: { MwRow: P },
  props: {
    /**
     * Id of current radio button. If not provided
     * an id will automatically created
     **/
    id: {
      type: String,
      required: !1,
      default() {
        return `radio-button-${Math.floor(Math.random() * 1e4)}`;
      }
    },
    /**
     * Represents the value of the currently checked button
     * inside a radio button group
     **/
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: !1,
      default: null
    },
    /**
     * Removes the ability to click or target the component.
     **/
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Sets radio button label
     **/
    label: {
      type: String,
      required: !0
    },
    /**
     * Sets value attribute of current radio button
     **/
    // eslint-disable-next-line vue/require-prop-types
    inputValue: {
      required: !0
    },
    /**
     * Sets the name of current radio button
     **/
    name: {
      type: String,
      required: !1,
      default: null
    }
  },
  emits: ["change"],
  computed: {
    isSelected: (e) => e.value ? e.value === e.inputValue : e.$parent.value === e.inputValue,
    widgetClass: (e) => ({
      "mw-ui-radio--selected": e.isSelected,
      "mw-ui-radio--disabled": e.disabled
    }),
    inputModel: {
      get() {
        return this.value || this.$parent.value;
      },
      set() {
        this.$emit("change", this.inputValue);
      }
    }
  }
}, k1 = window.Vue.vModelRadio, Ei = window.Vue.createElementVNode, $1 = window.Vue.withDirectives, V1 = window.Vue.toDisplayString, E1 = window.Vue.resolveComponent, L1 = window.Vue.normalizeClass, A1 = window.Vue.withCtx, D1 = window.Vue.openBlock, T1 = window.Vue.createBlock, B1 = { class: "mw-ui-radio__controls" }, P1 = ["id", "disabled", "name", "value"], F1 = /* @__PURE__ */ Ei("span", { class: "mw-ui-radio__controls__icon" }, null, -1), M1 = ["for", "textContent"];
function N1(e, t, n, o, s, a) {
  const r = E1("mw-row");
  return D1(), T1(r, {
    class: L1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: A1(() => [
      Ei("div", B1, [
        $1(Ei("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, P1), [
          [k1, a.inputModel]
        ]),
        F1
      ]),
      Ei("label", {
        for: n.id,
        class: "ps-2",
        textContent: V1(n.label)
      }, null, 8, M1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Sc = /* @__PURE__ */ oe(C1, [["render", N1]]), zu = window.Vue.h, U1 = {
  name: "MwRadioGroup",
  components: { MwRadio: Sc },
  props: {
    /**
     * The value of the currently checked radio button.
     **/
    // eslint-disable-next-line vue/no-unused-properties
    value: {
      type: [String, Number],
      required: !0
    },
    /**
     * An array of objects that corresponds to the radio button to be created,
     * in { value: "", text: "", disabled: false } format.
     * If not provided, radio buttons should be explicitly defined inside
     * default slot
     **/
    items: {
      type: Array,
      required: !1,
      default: () => [],
      validator: (e) => e.every((t) => t.hasOwnProperty("value"))
    },
    /**
     * Sets the name for radio buttons inside group.
     * If not provided, a name will automatically be created
     **/
    name: {
      type: String,
      required: !0,
      // See explanation inside MWRadio about default id
      default() {
        return `radio-group-${Math.floor(Math.random() * 1e4)}`;
      }
    }
  },
  render(e, t) {
    let n = [];
    return e.items.length ? n = e.items.map(
      (o) => zu(Sc, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), zu("div", { class: "mw-ui-radio-group" }, n);
  }
};
const I1 = {
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
}, Ou = window.Vue.normalizeClass, ju = window.Vue.normalizeStyle, R1 = window.Vue.createElementVNode, z1 = window.Vue.openBlock, O1 = window.Vue.createElementBlock, j1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function H1(e, t, n, o, s, a) {
  return z1(), O1("div", {
    class: Ou(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: ju(a.containerStyles)
  }, [
    R1("div", {
      class: Ou(["mw-progress-bar__bar", a.barClass]),
      style: ju(a.barStyles)
    }, null, 6)
  ], 14, j1);
}
const Jm = /* @__PURE__ */ oe(I1, [["render", H1]]), q1 = (e, t, n, o) => (s) => {
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
}, G1 = (e, t, n, o) => ({ initiateDrag: q1(
  e,
  t,
  n,
  o
) }), X1 = window.Vue.ref, Hu = window.Vue.computed, W1 = (e, t, n, o) => {
  const s = X1(0), a = Hu(
    () => t.value > e.value
  ), r = Hu(
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
const xa = window.Vue.ref, K1 = window.Vue.onMounted, qu = window.Vue.computed, Y1 = window.Vue.nextTick, J1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Ne
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
    const t = xa(!0), n = xa(null), o = qu(
      () => Math.min(e.minHeight, s.value)
    ), s = xa(1), { initiateDrag: a } = G1(
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
    } = W1(o, s, n, t), l = () => g(u.value + 1), d = xa(null), p = qu(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, f) {
        let _ = Math.min(f, s.value);
        _ = Math.max(_, o.value), _ === o.value && (t.value = !0), n.value.style.height = _ + "px";
      }
    };
    return K1(() => b(this, null, function* () {
      var f;
      yield Y1(), s.value = n.value.scrollHeight, (f = d.value) == null || f.addEventListener(
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
      mwIconCollapse: F0,
      mwIconExpand: x0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: u,
      scrollToNextStep: l
    };
  }
}, Q1 = window.Vue.renderSlot, Z1 = window.Vue.normalizeClass, ba = window.Vue.createElementVNode, e_ = window.Vue.resolveComponent, t_ = window.Vue.createVNode, dr = window.Vue.openBlock, n_ = window.Vue.createBlock, Gu = window.Vue.createCommentVNode, Xu = window.Vue.createElementBlock, o_ = window.Vue.normalizeStyle, s_ = { class: "mw-ui-expandable-content__container" }, a_ = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, i_ = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function r_(e, t, n, o, s, a) {
  const r = e_("mw-button");
  return dr(), Xu("div", {
    class: "mw-ui-expandable-content",
    style: o_(o.cssVars)
  }, [
    ba("div", s_, [
      ba("div", {
        ref: "contentRef",
        class: Z1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        Q1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (dr(), Xu("div", a_, [
        t_(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (dr(), n_(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Gu("", !0)
      ])) : Gu("", !0)
    ]),
    ba("div", i_, [
      ba("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const l_ = /* @__PURE__ */ oe(J1, [["render", r_]]);
const Ca = window.Vue.computed, c_ = {
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
    const t = Ca(() => e.size / 2 * 0.9), n = Ca(() => Math.PI * (t.value * 2)), o = Ca(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Ca(() => ({
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
}, Wu = window.Vue.createElementVNode, Ku = window.Vue.normalizeStyle, u_ = window.Vue.openBlock, d_ = window.Vue.createElementBlock, g_ = ["width", "height", "viewport"], p_ = ["r", "cx", "cy", "stroke-dasharray"], m_ = ["r", "cx", "cy", "stroke-dasharray"];
function h_(e, t, n, o, s, a) {
  return u_(), d_("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Ku(o.cssVars)
  }, [
    Wu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, p_),
    Wu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Ku({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, m_)
  ], 12, g_);
}
const f_ = /* @__PURE__ */ oe(c_, [["render", h_]]), w_ = window.Vue.ref, fn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, yn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${fn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${fn.tablet}px) and (max-width: ${fn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${fn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${fn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${fn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${fn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${fn["desktop-wide"]}px)`
}, gr = {
  mobile: () => matchMedia(yn.mobile).matches,
  tablet: () => matchMedia(yn.tablet).matches,
  desktop: () => matchMedia(yn.desktop).matches,
  desktopwide: () => matchMedia(yn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(yn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(yn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(yn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(yn["desktop-and-down"]).matches
}, __ = (e) => {
  const t = Object.values(fn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, v_ = {
  install: (e) => {
    const t = w_({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in gr)
        gr.hasOwnProperty(s) && (t.value[s] = gr[s]());
      t.value.nextBreakpoint = __(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Qe(re({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, S_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = Qe(re({}, e.config.globalProperties.$mwui || {}), {
      colors: wt
    }), e.provide("colors", wt);
  }
};
class Ro extends Error {
}
const y_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Ro();
}), Qm = { assertUser: y_ };
const x_ = window.Vue.resolveDirective, Qo = window.Vue.createElementVNode, Yu = window.Vue.withDirectives, b_ = window.Vue.toDisplayString, C_ = window.Vue.unref, Ju = window.Vue.withCtx, k_ = window.Vue.openBlock, $_ = window.Vue.createBlock, V_ = window.Vue.createCommentVNode, E_ = { class: "pa-4 sx-login-dialog__header" }, L_ = { class: "sx-login-dialog__body px-6 pb-4" }, A_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, D_ = ["href"], T_ = window.Vue.computed, B_ = window.Vue.ref, P_ = window.Vuex.useStore, F_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = P_(), n = T_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = B_(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const c = x_("i18n");
      return n.value ? (k_(), $_(C_(St), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Ju(() => [
          Qo("div", E_, [
            Yu(Qo("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Ju(() => [
          Yu(Qo("div", L_, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          Qo("div", A_, [
            Qo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, b_(a.$i18n("cx-sx-login-dialog-button-label")), 9, D_)
          ])
        ]),
        _: 1
      })) : V_("", !0);
    };
  }
}, J = new mw.cx.SiteMapper(), M_ = mw.util.getUrl, N_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, zo = !mw.config.get("wgMFMode");
class Nc {
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
const ka = "original", $a = "empty", U_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class Z {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      ka,
      $a
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return U_[t] || t;
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
    return ka;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return $a;
  }
  static isUserMTProvider(t) {
    return [ka, $a].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === $a ? "blank" : t === ka ? "source" : t.toLowerCase();
  }
}
class Nn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Qe(re({}, a), {
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Z.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [Z.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[Z.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Qu = (e) => {
  var n;
  const t = Di(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Di = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, so = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Zm = (e) => {
  const t = Di(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = I_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, I_ = (e) => {
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
}, eh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, th = (e) => {
  const t = eh(e);
  return t == null ? void 0 : t.targetExists;
};
class pr {
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
      (a) => so(a)
    );
    s && th(s) && (this.blockTemplateAdaptationInfo[t] = eh(s));
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
      (t) => so(t)
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
    const t = Di(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Qu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => so(o));
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
    return n && Qu(n) || "";
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
    const o = Di(n);
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
      (a) => so(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new pr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new pr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new pr({
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
    if (!t || Z.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => so(s)
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
const R_ = [
  "cjy-hans",
  "cjy-hant",
  "gan-hans",
  "gan",
  "hak-hans",
  "hak-hant",
  "hsn",
  "ii",
  "ja",
  "jje",
  "ko-kp",
  "ko",
  "lzh",
  "ryu",
  "wuu",
  "yue",
  "zh",
  "zh-cn",
  "zh-hans",
  "zh-hant",
  "zh-hk",
  "zh-mo",
  "zh-my",
  "zh-sg",
  "zh-tw"
], z_ = (e, t, n) => {
  if (!e || !t)
    return 0;
  if (e === t)
    return 1;
  const o = Zu(e, n), s = Zu(t, n), a = O_(o, s), r = Math.max(o.length, s.length);
  return a / r;
}, O_ = (e, t) => {
  const n = e.length, o = t.length, s = Array(n + 1).fill().map(() => Array(o + 1).fill(0));
  for (let a = 1; a <= n; a++)
    for (let r = 1; r <= o; r++)
      e[a - 1] === t[r - 1] ? s[a][r] = s[a - 1][r - 1] + 1 : s[a][r] = Math.max(s[a - 1][r], s[a][r - 1]);
  return s[n][o];
}, Zu = function(e, t) {
  return e ? R_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Uc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), j_ = Uc - 10, H_ = [
  { status: "failure", value: 100 - Uc },
  { status: "warning", value: 100 - j_ },
  { status: "success", value: 100 }
], nh = (e, t, n) => {
  const o = ed(e).textContent, s = ed(t).textContent, a = 100 - 100 * z_(s, o, n);
  return Math.ceil(a);
}, q_ = (e) => H_.find((t) => e <= t.value).status, G_ = (e, t) => nh(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), X_ = () => (100 - Uc) / 100, ed = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Kt = {
  calculateScore: nh,
  getScoreStatus: q_,
  getMTScoreForPageSection: G_,
  getMtModificationThreshold: X_
}, Va = "__LEAD_SECTION__";
class Fo {
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
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Z.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [Z.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Va;
  }
  static isSectionLead(t) {
    return !t || t === Va;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[Z.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[Z.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof it ? n.transclusionNode.outerHTML : n instanceof Nn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof it ? t.blockTemplateSelected = !1 : t instanceof Nn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof it ? n.blockTemplateSelected = !0 : n instanceof Nn && (n.selected = !0);
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
    if (o instanceof Nn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof it ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Nn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof it ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Nn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
    return this.isLeadSection ? Va : this.originalTitle;
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
    return this.isLeadSection ? Va : this.title;
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
class Mi extends Nc {
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
    return Fo.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Fo.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Ft = "previous-edits", Yt = "popular", Ue = "topic", Ce = "geography", Y = "collections", Ye = "automatic", _t = "seed", td = window.Vue.ref, { topics: W_, regions: K_ } = mw.loader.require(
  "ext.cx.articlefilters"
), Ea = {
  type: Ye,
  id: Ft
}, Ic = () => {
  const e = td(
    W_.flatMap((c) => c.topics).map((c) => c.topicId.toLowerCase())
  ), t = td(!1), n = (c, u) => e.value.includes(u) ? { type: Ue, id: u } : null, o = (c, u) => K_.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (l) => l.id.toLowerCase() === u
    )
  ) ? { type: Ce, id: u } : null, s = (c, u, g) => g && !g.some((i) => i.name.toLowerCase() === u) ? null : { type: Y, id: c };
  return { filtersValidatorError: t, validateFilters: ({ type: c, id: u }, g = !1) => {
    t.value = !1;
    const i = c == null ? void 0 : c.toLowerCase(), l = u == null ? void 0 : u.toLowerCase();
    if (l === Ft)
      return {
        type: Ye,
        id: Ft
      };
    if (l === Yt)
      return {
        type: Ye,
        id: Yt
      };
    if (l === Y)
      return g && !g.length ? (t.value = !0, Ea) : {
        type: Ye,
        id: Y
      };
    if (i === Ue) {
      const d = n(u, l);
      if (d)
        return d;
      t.value = !0;
    } else if (i === Ce) {
      const d = o(u, l);
      if (d)
        return d;
      t.value = !0;
    } else if (i === Y) {
      const d = s(
        u,
        l,
        g
      );
      if (d)
        return d;
      t.value = !0;
    } else if (i === _t)
      return { type: _t, id: u };
    return Ea;
  }, isDefaultFilter: ({ type: c, id: u }) => c === Ea.type && u === Ea.id };
}, Y_ = window.Vue.inject, J_ = window.Vue.reactive;
var Q_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, oh = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Q_, function() {
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
          for (const _ in p)
            h[p[_]] = _;
          p = h;
          const f = String(l);
          for (let _ = 0; _ < f.length; _++)
            m += p[f[_]] || f[_];
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
            function _(E) {
              return () => {
                for (let j = 0; j < E.length; j++) {
                  const We = E[j]();
                  if (We !== null)
                    return We;
                }
                return null;
              };
            }
            function w(E) {
              const j = f, We = [];
              for (let Qt = 0; Qt < E.length; Qt++) {
                const Zt = E[Qt]();
                if (Zt === null)
                  return f = j, null;
                We.push(Zt);
              }
              return We;
            }
            function y(E, j) {
              return () => {
                const We = f, Qt = [];
                let Zt = j();
                for (; Zt !== null; )
                  Qt.push(Zt), Zt = j();
                return Qt.length < E ? (f = We, null) : Qt;
              };
            }
            function S(E) {
              const j = E.length;
              return () => {
                let We = null;
                return m.slice(f, f + j) === E && (We = E, f += j), We;
              };
            }
            function C(E) {
              return () => {
                const j = m.slice(f).match(E);
                return j === null ? null : (f += j[0].length, j[0]);
              };
            }
            const L = C(/^\s+/), x = S("|"), M = S(":"), A = S("\\"), B = C(/^./), U = S("$"), W = C(/^\d+/), X = S('"'), Ae = S("'"), I = C(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), se = C(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), me = _([te, C(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function te() {
              const E = w([A, B]);
              return E === null ? null : E[1];
            }
            const De = _([te, se]), ne = _([te, I]);
            function ke() {
              const E = w([U, W]);
              return E === null ? null : ["REPLACE", parseInt(E[1], 10) - 1];
            }
            const Q = (Xe = C(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Te = function(E) {
              return E.toString();
            }, () => {
              const E = Xe();
              return E === null ? null : Te(E);
            });
            var Xe, Te;
            function N() {
              const E = w([x, y(0, ha)]);
              if (E === null)
                return null;
              const j = E[1];
              return j.length > 1 ? ["CONCAT"].concat(j) : j[0];
            }
            function H() {
              const E = w([Q, M, ke]);
              return E === null ? null : [E[0], E[2]];
            }
            function v() {
              const E = w([Q, M, ha]);
              return E === null ? null : [E[0], E[2]];
            }
            function V() {
              const E = w([Q, M]);
              return E === null ? null : [E[0], ""];
            }
            const D = _([function() {
              const E = w([_([H, v, V]), y(0, N)]);
              return E === null ? null : E[0].concat(E[1]);
            }, function() {
              const E = w([Q, y(0, N)]);
              return E === null ? null : [E[0]].concat(E[1]);
            }]), F = S("{{"), q = S("}}"), ie = S("[["), z = S("]]"), O = S("["), ae = S("]");
            function Re() {
              const E = w([F, D, q]);
              return E === null ? null : E[1];
            }
            const he = _([function() {
              const E = w([y(1, ha), x, y(1, ma)]);
              return E === null ? null : [["CONCAT"].concat(E[0]), ["CONCAT"].concat(E[2])];
            }, function() {
              const E = w([y(1, ha)]);
              return E === null ? null : [["CONCAT"].concat(E[0])];
            }]);
            function we() {
              let E = null;
              const j = w([ie, he, z]);
              if (j !== null) {
                const We = j[1];
                E = ["WIKILINK"].concat(We);
              }
              return E;
            }
            function On() {
              let E = null;
              const j = w([O, y(1, Hf), L, y(1, ma), ae]);
              return j !== null && (E = ["EXTLINK", j[1].length === 1 ? j[1][0] : ["CONCAT"].concat(j[1]), ["CONCAT"].concat(j[3])]), E;
            }
            const Yo = C(/^[A-Za-z]+/);
            function Jt() {
              const E = C(/^[^"]*/), j = w([X, E, X]);
              return j === null ? null : j[1];
            }
            function zf() {
              const E = C(/^[^']*/), j = w([Ae, E, Ae]);
              return j === null ? null : j[1];
            }
            function Of() {
              const E = C(/^\s*=\s*/), j = w([L, Yo, E, _([Jt, zf])]);
              return j === null ? null : [j[1], j[3]];
            }
            function jf() {
              const E = y(0, Of)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], E);
            }
            const Hf = _([Re, ke, we, On, function() {
              const E = y(1, me)();
              return E === null ? null : E.join("");
            }]), ma = _([Re, ke, we, On, function() {
              let E = null;
              const j = f, We = S("<"), Qt = C(/^\/?/), Zt = C(/^\s*>/), Ki = w([We, Yo, jf, Qt, Zt]);
              if (Ki === null)
                return null;
              const fu = f, wu = Ki[1], Yi = y(0, ma)(), qf = f, _u = w([S("</"), Yo, Zt]);
              if (_u === null)
                return ["CONCAT", m.slice(j, fu)].concat(Yi);
              const Gf = f, Xf = _u[1], vu = Ki[2];
              if (function(jn, fa, Ji, Qi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((jn = jn.toLowerCase()) !== (fa = fa.toLowerCase()) || Qi.allowedHtmlElements.indexOf(jn) === -1)
                  return !1;
                const Wf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let wa = 0, Kf = Ji.length; wa < Kf; wa += 2) {
                  const Zi = Ji[wa];
                  if (Qi.allowedHtmlCommonAttributes.indexOf(Zi) === -1 && (Qi.allowedHtmlAttributesByElement[jn] || []).indexOf(Zi) === -1 || Zi === "style" && Ji[wa + 1].search(Wf) !== -1)
                    return !1;
                }
                return !0;
              }(wu, Xf, vu.slice(1)))
                E = ["HTMLELEMENT", wu, vu].concat(Yi);
              else {
                const jn = (fa) => fa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                E = ["CONCAT", jn(m.slice(j, fu))].concat(Yi, jn(m.slice(qf, Gf)));
              }
              return E;
            }, function() {
              const E = y(1, ne)();
              return E === null ? null : E.join("");
            }]), ha = _([Re, ke, function() {
              const E = y(1, De)();
              return E === null ? null : E.join("");
            }]), hu = function() {
              const E = y(0, ma)();
              return E === null ? null : ["CONCAT"].concat(E);
            }();
            if (hu === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return hu;
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
            const f = m.slice(0, h).join("-"), _ = this.messageStore.getMessage(i, f);
            if (typeof _ == "string")
              return _;
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
})(oh);
var Z_ = oh.exports;
const nd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, sh = Symbol("banana-context");
function de() {
  const e = Y_(sh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function ev(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = J_(new Z_(e.locale, e));
  return {
    install: (n) => {
      n.provide(sh, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = nd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = nd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const vn = window.Vue.ref, tv = window.Vue.computed, Ni = vn(null), Ui = vn(null), Ii = vn(null), ra = vn(null), Rc = vn(null), Ri = vn(null), ah = vn(null), ih = vn(null), zc = vn(null), { validateFilters: nv, filtersValidatorError: ov } = Ic(), rh = {
  from: Ni,
  to: Ui,
  section: ra,
  draft: Rc,
  page: Ii,
  revision: Ri,
  "active-list": zc
}, sv = tv(() => ({
  type: ah.value,
  id: ih.value
})), lh = (e, t) => {
  ah.value = e, ih.value = t, Ti("filter-type", e), t && Ti("filter-id", t);
}, av = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Mi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), rh[o].value = s;
  }
  t.delete("title"), la(Object.fromEntries(t));
}, Oc = (e, t) => {
  rh[e].value = t, Ti(e, t);
}, iv = (e) => {
  Oc("section", e);
}, rv = (e) => {
  Oc("page", e);
}, lv = (e) => {
  Oc("active-list", e);
}, la = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    M_(`Special:ContentTranslation${t}`, e)
  );
}, cv = () => {
  const e = de(), t = new URLSearchParams(location.search);
  Ii.value = t.get("page"), Ni.value = t.get("from"), Ui.value = t.get("to"), ra.value = t.get("section"), Ri.value = t.get("revision"), zc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = nv({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  lh(n.type, n.id), ov.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, uv = () => {
  const e = new URLSearchParams(location.search);
  ra.value = null, e.delete("section"), e.delete("title"), la(Object.fromEntries(e));
}, Ti = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), la(Object.fromEntries(n));
}, dv = (e) => new URLSearchParams(location.search).get(e), gv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ni.value = e, Ui.value = t, n.delete("title"), la(Object.fromEntries(n));
}, pv = () => {
  const e = new URLSearchParams(location.search);
  Ii.value = null, ra.value = null, Rc.value = null, Ri.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), la(Object.fromEntries(e));
}, mv = () => new URLSearchParams(location.search).get("force-quick-tutorial"), T = () => ({
  isQuickTutorialForced: mv,
  setLanguageURLParams: gv,
  setSectionURLParam: iv,
  setTranslationURLParams: av,
  initializeURLState: cv,
  clearTranslationURLParameters: pv,
  clearSectionURLParameter: uv,
  setUrlParam: Ti,
  getUrlParam: dv,
  pageURLParameter: Ii,
  sourceLanguageURLParameter: Ni,
  targetLanguageURLParameter: Ui,
  sectionURLParameter: ra,
  draftURLParameter: Rc,
  revisionURLParameter: Ri,
  setPageURLParam: rv,
  currentSuggestionFilters: sv,
  setFilterURLParams: lh,
  activeDashboardTabParameter: zc,
  setActiveDashboardTabParameter: lv
}), hv = () => J.getLanguagePairs();
function fv(e, t) {
  return b(this, null, function* () {
    const n = J.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Z(e, t, o.mt)
      )
    );
  });
}
function wv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function _v(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = J.getWikiDomainCode(e), r = J.getWikiDomainCode(t), c = {
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
const zi = {
  fetchSupportedLanguageCodes: hv,
  fetchSupportedMTProviders: fv,
  fetchCXServerToken: wv,
  addWikibaseLink: _v
}, jc = window.Vue.ref, od = jc([]), sd = jc([]), ad = jc(!1);
function ca() {
  return {
    fetchSupportedLanguageCodes: () => b(this, null, function* () {
      if (!ad.value) {
        ad.value = !0;
        const t = yield zi.fetchSupportedLanguageCodes();
        od.value = t.sourceLanguages, sd.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: od,
    supportedTargetLanguageCodes: sd
  };
}
const vv = {
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
}, Sv = {
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
}, yv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], xv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, bv = {
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
}, Cv = {
  languages: vv,
  scriptgroups: Sv,
  rtlscripts: yv,
  regiongroups: xv,
  territories: bv
};
var Ie = Cv;
function ua(e) {
  return !!Ie.languages[e];
}
function zn(e) {
  return ua(e) && Ie.languages[e].length === 1 ? Ie.languages[e][0] : !1;
}
function kv() {
  return Ie.languages;
}
function da(e) {
  var t = zn(e);
  return t ? da(t) : ua(e) ? Ie.languages[e][0] : "Zyyy";
}
function Hc(e) {
  var t = zn(e);
  return t ? Hc(t) : ua(e) && Ie.languages[e][1] || "UNKNOWN";
}
function na(e) {
  var t = zn(e);
  return t ? na(t) : ua(e) && Ie.languages[e][2] || e;
}
function $v() {
  var e, t = {};
  for (e in Ie.languages)
    zn(e) || (t[e] = na(e));
  return t;
}
function ch(e) {
  var t, n, o = [];
  for (t in Ie.languages)
    if (!zn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === da(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Vv(e) {
  return ch([e]);
}
function uh(e) {
  var t;
  for (t in Ie.scriptgroups)
    if (Ie.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function qc(e) {
  return uh(da(e));
}
function dh(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = zn(n) || n, a = qc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function gh(e) {
  var t, n, o, s = {};
  for (t in Ie.languages)
    if (!zn(t)) {
      for (n = 0; n < e.length; n++)
        if (Hc(t).includes(e[n])) {
          o = qc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Ev(e) {
  return gh([e]);
}
function Lv(e) {
  var t, n, o, s = [];
  for (t = dh(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Av(e, t) {
  var n = na(e) || e, o = na(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function ph(e) {
  return Ie.rtlscripts.includes(da(e));
}
function Dv(e) {
  return ph(e) ? "rtl" : "ltr";
}
function Tv(e) {
  return Ie.territories[e] || [];
}
function Bv(e, t) {
  t.target ? Ie.languages[e] = [t.target] : Ie.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: Bv,
  getAutonym: na,
  getAutonyms: $v,
  getDir: Dv,
  getGroupOfScript: uh,
  getLanguages: kv,
  getLanguagesByScriptGroup: dh,
  getLanguagesByScriptGroupInRegion: Ev,
  getLanguagesByScriptGroupInRegions: gh,
  getLanguagesInScript: Vv,
  getLanguagesInScripts: ch,
  getLanguagesInTerritory: Tv,
  getRegions: Hc,
  getScript: da,
  getScriptGroupOfLanguage: qc,
  isKnown: ua,
  isRedirect: zn,
  isRtl: ph,
  sortByScriptGroup: Lv,
  sortByAutonym: Av
};
const lo = window.Vue.computed;
function Le(e) {
  const t = lo(() => e.state.application.sourceLanguage), n = lo(() => e.state.application.targetLanguage), o = lo(
    () => e.state.application.currentMTProvider
  ), s = lo(
    () => R.getAutonym(t.value)
  ), a = lo(
    () => R.getAutonym(n.value)
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
class Oo {
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
class Pv {
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
function Fv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const Mv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), Fv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, Nv = (e, t) => {
  let n, o;
  return t ? (n = Mv(e), o = n.$element.find(
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
}, Uv = (e, t) => {
  const n = Array.from(
    Nv(e, t)
  );
  return Iv(n).map(
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
          sentences: Rv(l),
          node: l
        })
      ), i = !c;
      return new Fo({ id: u, title: c, subSections: g, isLeadSection: i });
    }
  );
}, Iv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, Rv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Nn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), mh = {
  convertSegmentedContentToPageSections: Uv
}, Gc = 120, zv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Gc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return J.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (i, l) => Qe(re({}, i), { [l.to]: l.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (i, l) => Qe(re({}, i), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((i) => {
      const l = g[i.title] || c[i.title] || null;
      return new Oo(Qe(re({}, i), { _alias: l }));
    });
  });
}, Ov = (e, t) => {
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
    var u, g;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return c ? Object.freeze(new Pv(c, r)) : null;
  });
}, jv = (e, t, n) => {
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
  return J.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var u, g;
    return (g = (u = c.langlinks) == null ? void 0 : u[0]) == null ? void 0 : g["*"];
  }).filter((c) => !!c));
}, Hv = (e, t, n, o = null) => hh(
  e,
  t,
  n,
  o
).then(
  (s) => new Oo({
    sections: mh.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), hh = (e, t, n, o = null) => {
  const s = J.getWikiDomainCode(e), a = J.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, c += "/$revision");
  const u = J.getCXServerUrl(
    c,
    r
  );
  return fetch(u).then((g) => g.json()).then((g) => g.segmentedContent);
}, qv = (e) => b(void 0, null, function* () {
  const t = N_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Gc,
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
  return yield J.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Oo(s))).catch((o) => []);
}), Gv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Gc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return J.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new Oo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, io = {
  fetchPages: zv,
  fetchLanguageTitles: Ov,
  fetchPageContent: Hv,
  fetchSegmentedContent: hh,
  fetchNearbyPages: qv,
  searchPagesByTitlePrefix: Gv,
  fetchLanguageLinksForLanguage: jv
}, Xv = window.Vuex.useStore, jo = () => {
  const e = Xv();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), c = io.fetchPages(t, r).then(
        (u) => u.forEach(
          (g) => e.commit("mediawiki/addPage", g)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, Wv = window.Vuex.useStore, Xc = () => {
  const e = Wv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
class In {
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
const fh = [
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
], Kv = [
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
], Yv = [
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
], Jv = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Qv = [
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
], Zv = {
  en: fh,
  es: Kv,
  bn: Yv,
  fr: Jv,
  de: Qv
};
class Mo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Wc {
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
class wh extends ro {
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
    }), this.collection = new Wc(u);
  }
}
class _h extends In {
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
    }), this.collection = new Wc(l);
  }
}
const eS = fh, Mt = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function tS() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Mt({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new Wc(a)
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
function nS(e, t, n = null, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield Mt({ urlParams: s })) || []).map(
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
const oS = (e, t) => b(void 0, null, function* () {
  return ((yield Mt({ urlParams: {
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
}), sS = (e, t) => b(void 0, null, function* () {
  const s = (yield Mt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new In({
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
}), aS = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Mt({ urlParams: o })) || []).map(
    (a) => new wh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), iS = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Mt({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new _h({
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
function rS(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = J.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new In(a) : null;
  });
}
function lS(e, t, n = null) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield Mt({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new In({
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
function cS(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Mt({ urlParams: s })) || []).map(
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
function uS(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Mt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (c) => new In({
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
function dS(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield Mt({ urlParams: s })) || []).map(
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
function gS(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    }, r = (yield Mt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (c) => new In({
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
function pS(e) {
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
    }, n = J.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function mS(e, t) {
  return b(this, null, function* () {
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
function hS(e) {
  const t = eS.map((o) => encodeURIComponent(o)).join("|"), n = J.getCXServerUrl(
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
const fS = (e, t, n) => {
  const o = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "add",
    titles: e,
    from: t,
    to: n
  }, s = new mw.Api();
  return Promise.resolve(s.postWithToken("csrf", o)).catch((a) => {
    mw.log.error("Error while marking suggestion as favorite", a);
  });
}, wS = (e) => {
  const t = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "remove",
    titles: e.title,
    from: e.sourceLanguage,
    to: e.targetLanguage
  }, n = new mw.Api();
  return Promise.resolve(n.postWithToken("csrf", t)).catch((o) => {
    mw.log.error("Error while unmarking favorite suggestion", o);
  });
}, _S = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((c) => new Mo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, le = {
  fetchFavorites: _S,
  fetchPageSuggestions: nS,
  fetchSectionSuggestion: rS,
  fetchSectionSuggestions: lS,
  fetchAppendixTargetSectionTitles: hS,
  fetchArticleSections: mS,
  markFavorite: fS,
  unmarkFavorite: wS,
  fetchUserEdits: pS,
  fetchMostPopularPageSuggestions: oS,
  fetchMostPopularSectionSuggestions: sS,
  fetchPageSuggestionsByTopics: cS,
  fetchSectionSuggestionsByTopics: uS,
  fetchPageSuggestionsByCountries: dS,
  fetchSectionSuggestionsByCountries: gS,
  fetchPageCollectionGroups: tS,
  fetchPageSuggestionsByCollections: aS,
  fetchSectionSuggestionsByCollections: iS
}, vS = window.Vuex.useStore, Ho = () => {
  const e = vS(), { sourceLanguage: t, targetLanguage: n } = Le(e), o = (c) => {
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
class SS {
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
const yS = window.Vuex.useStore, Kc = window.Vue.ref, xS = Kc([]), bS = Kc([]);
let mr = !1, hr = !1, id = !1;
const La = Kc([]);
let Zo = null;
const fr = {
  page: xS,
  section: bS
}, vh = () => {
  const e = yS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = () => b(void 0, null, function* () {
    hr || (La.value = yield le.fetchUserEdits(t.value).then((g) => (hr = !0, g)));
  }), s = () => b(void 0, null, function* () {
    let g = e.getters["translator/getTranslationsByStatus"]("published");
    if (g = g.filter(
      (i) => i.sourceLanguage === t.value
    ), g.length && !mr)
      return mr = !0, g.map(
        (i) => i.sourceTitle
      );
    if (mr = !0, !hr && (yield o(), La.value.length > 0))
      return La.value;
    if (!id) {
      const i = yield le.fetchUserEdits(n.value).then((l) => (id = !0, l));
      if (i.length)
        return io.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (g) => {
    let i = fr[g].value.find(
      (l) => l.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new SS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), fr[g].value.push(i)), i;
  }, r = () => b(void 0, null, function* () {
    let g = !1, i = [];
    do {
      i = yield s(), i || (g = !0);
      for (const l in fr) {
        const d = a(l);
        d.seeds = [
          ...d.seeds,
          ...i || []
        ];
      }
    } while (!g && !(i != null && i.length));
  }), c = () => Zo || (Zo = r(), Zo.finally(() => {
    Zo = null;
  }));
  return {
    getSuggestionSeed: (g) => b(void 0, null, function* () {
      let i = a(g);
      return i.seeds.length || (yield c()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: La
  };
}, CS = 5;
function ao(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < CS);
  });
}
const kS = window.Vuex.useStore, $S = () => {
  const e = kS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), { getSuggestionSeed: o } = vh(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ho(), c = {
    id: Ft,
    type: Ye
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const l = [];
      return yield ao(() => b(void 0, null, function* () {
        const d = yield o("page");
        let p = yield le.fetchPageSuggestions(
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
    fetchSectionSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const l = [];
      return yield ao(() => b(void 0, null, function* () {
        const d = yield o("section"), p = yield le.fetchSectionSuggestions(
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
}, VS = window.Vuex.useStore, ES = () => {
  const e = VS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = {
    id: Yt,
    type: Ye
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ho();
  return { fetchSectionSuggestionsPopular: (g) => b(void 0, null, function* () {
    const i = [];
    return yield ao(() => b(void 0, null, function* () {
      const l = yield le.fetchMostPopularSectionSuggestions(
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
  }), fetchPageSuggestionsPopular: (g) => b(void 0, null, function* () {
    const i = [];
    return yield ao(() => b(void 0, null, function* () {
      let l = yield le.fetchMostPopularPageSuggestions(
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
}, Sh = window.Vue.ref, es = "ungrouped", rd = Sh({}), ld = Sh(!1), Yc = () => ({
  fetchPageCollectionGroups: () => b(void 0, null, function* () {
    try {
      const t = yield le.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === es ? 1 : s === es ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[es] && (n[es] = n[es].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), rd.value = n, ld.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: ld,
  pageCollectionGroups: rd
});
class Qs {
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
const LS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', AS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', DS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', TS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', BS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', PS = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', FS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', MS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', NS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', US = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', IS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', RS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', zS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', OS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', jS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', HS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', qS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', GS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', XS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', WS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', yh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', KS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', YS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', JS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', QS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', ZS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', ey = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', ty = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', ny = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', oy = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', sy = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', ay = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', iy = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', ry = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ly = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', cy = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', yc = LS, xh = AS, bh = {
  ltr: DS,
  shouldFlip: !0
}, Ch = {
  ltr: TS,
  shouldFlip: !0
}, Oi = {
  ltr: BS,
  shouldFlip: !0
}, uy = PS, kh = FS, $h = MS, dy = NS, gy = US, py = IS, qo = RS, my = zS, Jc = OS, Qc = jS, xc = HS, hy = qS, fy = {
  ltr: GS,
  shouldFlip: !0
}, wy = {
  ltr: XS,
  shouldFlip: !0
}, Vh = WS, _y = {
  langCodeMap: {
    ar: yh
  },
  default: KS
}, vy = {
  langCodeMap: {
    ar: yh
  },
  default: YS
}, Eh = JS, Zc = {
  ltr: QS,
  shouldFlip: !0
}, Sy = ZS, yy = ey, ga = {
  ltr: ty,
  shouldFlip: !0
}, eu = {
  ltr: ny,
  shouldFlip: !0
}, xy = {
  ltr: oy,
  shouldFlip: !0
}, Lh = sy, by = ay, bc = iy, Cy = ry, ky = ly, Ah = cy, $y = {
  [Ft]: Ah,
  [Yt]: Vh,
  [Y]: Oi
}, Vy = {
  [Y]: wy,
  [Ce]: Sy
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
    return this.type === Ye ? this.id : this.type;
  }
  get icon() {
    return $y[this.provider] || null;
  }
  get expandableIcon() {
    return Vy[this.provider] || this.icon;
  }
}
const ts = window.Vue.computed, { topics: cd, regions: ud } = mw.loader.require(
  "ext.cx.articlefilters"
), Ey = (e) => new Qs({
  id: e.groupId,
  label: e.label,
  type: Ue,
  filters: e.topics.map(
    (t) => new Pt({
      id: t.topicId,
      label: t.label,
      type: Ue
    })
  )
}), ji = () => {
  const e = de(), { currentSuggestionFilters: t, setFilterURLParams: n } = T(), { validateFilters: o, filtersValidatorError: s } = Ic(), a = new Pt({
    id: Ft,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Pt({
    id: Yt,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), c = new Pt({
    id: Y,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: g } = Yc(), i = ts(() => {
    const x = new Qs({
      id: Ye,
      type: Ye,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && x.filters.push(c), x;
  }), l = () => {
    const x = re({}, u.value);
    delete x.ungrouped;
    const M = [];
    for (const B in x) {
      const U = x[B].map(
        (X) => new Pt({
          id: X.name,
          label: X.name,
          type: Y
        })
      ), W = new Pt({
        id: B,
        label: B,
        type: Y,
        subFilters: U
      });
      M.push(W);
    }
    const A = (u.value.ungrouped || []).map(
      (B) => new Pt({
        id: B.name,
        label: B.name,
        type: Y
      })
    );
    return [...M, ...A];
  }, d = ts(
    () => new Qs({
      id: Y,
      type: Y,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: l()
    })
  ), p = ts(() => new Qs({
    id: Ce,
    type: Ce,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: ud.map(
      (x) => new Pt({
        id: x.id,
        label: x.label,
        type: Ce,
        subFilters: x.countries.map(
          (M) => new Pt({
            id: M.id,
            label: M.label,
            type: Ce
          })
        )
      })
    )
  })), m = ts(() => {
    const x = [
      i.value,
      ...cd.map(Ey),
      p.value
    ];
    return d.value.filters.length && x.splice(1, 0, d.value), x;
  }), h = ts(
    () => [t.value.type, t.value.id].includes(
      Y
    ) && !g.value
  ), f = () => {
    if (h.value)
      return [];
    const x = w();
    return x.type === Ue || x.type === Ce || x.type === _t || x.type === Y || x.id === Y ? [x, a] : [a, r];
  }, _ = (x) => {
    n(x.type, x.id);
  }, w = () => t.value.type === _t ? new Pt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : m.value.flatMap((x) => x.filters).flatMap((x) => [x, ...x.subFilters || []]).find(y), y = (x) => t.value.id === x.id;
  return {
    allFilters: m,
    getFiltersSummary: f,
    selectFilter: _,
    isFilterSelected: y,
    getArticleTopics: (x) => {
      const A = cd.flatMap((B) => B.topics).find((B) => B.topicId === x);
      return A ? A.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: w,
    validateURLFilterWithCollections: () => {
      if (!g.value)
        return;
      const x = Object.values(u.value).flat(), M = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        x
      );
      n(M.type, M.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (x) => {
      const M = ud.find((A) => A.id === x);
      return M ? M.countries.map((A) => A.id) : [x];
    }
  };
}, Ly = window.Vuex.useStore, Ay = () => {
  const e = Ly(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ho(), { getArticleTopics: c } = ji();
  return {
    fetchPageSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const l = o.value.id, d = {
        id: l,
        type: Ue
      }, p = c(l);
      let m = yield le.fetchPageSuggestionsByTopics(
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
    fetchSectionSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const l = o.value.id, d = {
        id: l,
        type: Ue
      }, p = c(l), m = [];
      return yield ao(() => b(void 0, null, function* () {
        const h = yield le.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (w) => s(w)
        );
        const _ = h.filter(
          (w) => !s(w)
        );
        return f = f.slice(0, i), m.push(...f), _.forEach((w) => {
          w && !r(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = d
      ), m;
    })
  };
}, Dy = window.Vuex.useStore, Ty = () => {
  const e = Dy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ho(), { getCountries: c } = ji();
  return {
    fetchPageSuggestionsByCountries: (i) => b(void 0, null, function* () {
      let l = yield le.fetchPageSuggestionsByCountries(
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
    fetchSectionSuggestionsByCountries: (i) => b(void 0, null, function* () {
      const l = [];
      return yield ao(() => b(void 0, null, function* () {
        const d = yield le.fetchSectionSuggestionsByCountries(
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
}, By = window.Vuex.useStore, Py = window.Vue.computed, Fy = () => {
  const e = By(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), s = Py(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== Y ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: c
  } = Ho();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [], l = yield le.fetchSectionSuggestionsByCollections(
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
    fetchPageSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [];
      let l = yield le.fetchPageSuggestionsByCollections(
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
}, My = window.Vuex.useStore, Ny = () => {
  const e = My(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ho();
  return {
    fetchPageSuggestionsBySeed: (g) => b(void 0, null, function* () {
      const i = o.value.id;
      let l = yield le.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return l = l.filter(
        (d) => a(d)
      ), l = l.slice(0, g), l.forEach(
        (d) => d.suggestionProvider = {
          id: i,
          type: _t
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (g) => b(void 0, null, function* () {
      const i = [], l = o.value.id;
      return yield ao(() => b(void 0, null, function* () {
        const d = yield le.fetchSectionSuggestions(
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
          type: _t
        }
      ), i;
    })
  };
}, Dh = () => {
  const { currentSuggestionFilters: e } = T(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = $S(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = ES(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = Ay(), {
    fetchPageSuggestionsByCountries: c,
    fetchSectionSuggestionsByCountries: u
  } = Ty(), {
    fetchPageSuggestionsByCollections: g,
    fetchSectionSuggestionsByCollections: i
  } = Fy(), { fetchPageSuggestionsBySeed: l, fetchSectionSuggestionsBySeed: d } = Ny(), p = {
    [Ft]: t,
    [Yt]: o,
    [Y]: g,
    [Ue]: a,
    [Ce]: c,
    [_t]: l
  }, m = {
    [Ft]: n,
    [Yt]: s,
    [Y]: i,
    [Ue]: r,
    [Ce]: u,
    [_t]: d
  }, h = (w) => w.type === Ye ? w.id : w.type;
  return {
    getFilterProvider: h,
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, Uy = window.Vuex.useStore, tu = () => {
  const e = Uy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Xc(), { sourceLanguageURLParameter: o } = T(), s = jo(), a = () => {
    const d = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - d.length % p;
  }, r = () => {
    const d = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - d.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = Dh(), g = (d) => {
    try {
      const p = d.map((m) => m.sourceTitle);
      if (p.length)
        return s(o.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const d = a(), m = yield u()(
        d
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), g(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const d = r(), m = yield c()(
        d
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), g(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Iy = window.Vuex.useStore, Th = () => {
  const e = Iy();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield le.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Ry = window.Vuex.useStore, Bh = () => {
  const e = Ry(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = tu(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Xc(), { targetLanguageURLParameter: a } = T(), r = Th();
  return () => b(void 0, null, function* () {
    const c = s(0), u = o(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, i = c.length === g, l = u.length === g;
    i && l || (yield r(a.value), t(), n());
  });
}, zy = window.Vuex.useStore, Ph = () => {
  const e = zy(), t = jo();
  return (n, o, s) => b(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield le.fetchSectionSuggestion(
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
}, dd = window.Vue.computed, Oy = window.Vuex.useStore, Sn = () => {
  const e = Oy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T(), s = dd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = dd(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, u) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(u)
  };
}, Fh = window.Vuex.useStore, { setLanguageURLParams: jy } = T(), nu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), jy(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Mh = () => {
  const e = Fh(), t = Bh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Le(e);
    n === o && (n = a.value, o = s.value), nu(e, n, o), t();
  };
}, Hy = () => {
  const e = Fh(), t = Ph(), { currentLanguageTitleGroup: n, targetPageExists: o } = Sn(), s = jo();
  return (a, r) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      setPageURLParam: g,
      clearSectionURLParameter: i
    } = T();
    a === r && (a = u.value, r = c.value);
    const l = n.value.getTitleForLanguage(a);
    nu(e, a, r), g(l), o.value ? (i(), yield t(
      c.value,
      u.value,
      l
    )) : yield s(c.value, [l]);
  });
}, qy = window.Vuex.useStore, Gy = window.Vue.ref, gd = Gy(!1), Nh = () => {
  const e = qy(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = ca(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = T(), r = () => {
    const u = J.getCurrentWikiLanguageCode(), g = (f) => t.value.includes(f), i = (f) => n.value.includes(f), l = {
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
  return { initializeApplicationLanguages: () => b(void 0, null, function* () {
    yield o();
    const { sourceLanguage: u, targetLanguage: g } = r();
    nu(e, u, g), gd.value = !0;
  }), applicationLanguagesInitialized: gd };
};
const Xy = window.Vue.resolveDynamicComponent, pd = window.Vue.openBlock, md = window.Vue.createBlock, Wy = window.Vue.Transition, ns = window.Vue.withCtx, os = window.Vue.createVNode, Ky = window.Vue.resolveComponent, wr = window.Vue.unref, Yy = window.Vuex.useStore, hd = window.Vue.computed, Jy = window.Vue.onMounted, Qy = window.Vue.inject, Zy = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = T(), { initializeApplicationLanguages: n } = Nh();
    t(), n();
    const o = Qy("breakpoints"), s = hd(() => o.value.mobile), a = Yy(), r = hd(
      () => a.state.application.autoSavePending
    );
    return Jy(() => {
      window.addEventListener("beforeunload", (c) => {
        r.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && Qm.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Ro && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, u) => {
      const g = Ky("router-view");
      return pd(), md(wr(e0), { id: "contenttranslation" }, {
        default: ns(() => [
          os(wr(P), { class: "cx-container" }, {
            default: ns(() => [
              os(wr(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: ns(() => [
                  os(g, null, {
                    default: ns(({ Component: i, route: l }) => [
                      os(Wy, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: ns(() => [
                          (pd(), md(Xy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      os(F_)
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
}, ex = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, tx = {
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
class Uh {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class No {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Uh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const fd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Qe(re({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class nx {
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
    const t = fd((s = this.user) == null ? void 0 : s.content), n = fd((a = this.mt) == null ? void 0 : a.content);
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
class ou extends Nc {
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
const Hi = mw.user.isAnon() ? void 0 : "user", Ih = (e) => {
  if (e === "assertuserfailed")
    throw new Ro();
};
function Rh(e, t = null) {
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
      var c;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new Mi(Qe(re({}, u), { status: e }))
      ) : r = a.map(
        (u) => new ou(Qe(re({}, u), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const u = yield Rh(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function ox(e) {
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
      (a) => new nx(a)
    );
  });
}
function sx(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Z.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = J.getCXServerUrl(a);
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
const ax = (e, t, n) => {
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
}, ix = ({
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
  sectionTranslationId: l
}) => {
  const d = {
    assert: Hi,
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
    sectiontranslationid: l
  };
  return u && (d.captchaid = u, d.captchaword = g), new mw.Api().postWithToken("csrf", d).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new No({
            type: "captcha",
            status: "error",
            details: m.edit.captcha
          }),
          targetTitle: null
        };
      throw new Error();
    }
    return {
      publishFeedbackMessage: null,
      targetUrl: m.targeturl,
      pageId: m.edit.pageid,
      revisionId: m.edit.newrevid
    };
  }).catch((m, h) => {
    Ih(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new No({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, rx = ({
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
    assert: Hi,
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
    Ih(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new No({ text: h, status: "error" });
  });
}, lx = (e) => {
  const t = {
    assert: Hi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, cx = () => {
  const e = {
    assert: Hi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new ou(n.cxcheckunreviewed.translation)
  );
}, ux = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, dx = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, gx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), vt = {
  fetchTranslations: Rh,
  fetchTranslationUnits: ox,
  fetchSegmentTranslation: sx,
  parseTemplateWikitext: ax,
  publishTranslation: ix,
  saveTranslation: rx,
  deleteTranslation: ux,
  fetchTranslatorStats: gx,
  deleteCXTranslation: dx,
  splitTranslation: lx,
  checkUnreviewedTranslations: cx
};
function px(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield vt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const mx = {
  fetchTranslatorStats: px
}, hx = {
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
}, fx = {
  namespaced: !0,
  state: ex,
  getters: tx,
  actions: mx,
  mutations: hx
}, wx = {
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
  appendixSectionTitles: Zv
}, _x = {
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
}, Sx = {
  namespaced: !0,
  state: wx,
  getters: _x,
  actions: {},
  mutations: vx
}, yx = {
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
}, xx = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== Z.EMPTY_TEXT_PROVIDER_KEY,
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
function bx(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield io.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const Cx = { fetchNearbyPages: bx }, kx = {
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
}, $x = {
  namespaced: !0,
  state: yx,
  getters: xx,
  actions: Cx,
  mutations: kx
}, Vx = {
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
}, Ex = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, Lx = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = Z.getStorageKey(
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
}, Ax = {
  namespaced: !0,
  state: Vx,
  getters: Ex,
  actions: {},
  mutations: Lx
}, Dx = window.Vuex.createStore, Tx = Dx({
  modules: { translator: fx, suggestions: Sx, mediawiki: $x, application: Ax }
});
function Bx() {
  return zh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Px = typeof Proxy == "function", Fx = "devtools-plugin:setup", Mx = "plugin:settings:set";
let co, Cc;
function Nx() {
  var e;
  return co !== void 0 || (typeof window != "undefined" && window.performance ? (co = !0, Cc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (co = !0, Cc = global.perf_hooks.performance) : co = !1), co;
}
function Ux() {
  return Nx() ? Cc.now() : Date.now();
}
class Ix {
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
        return Ux();
      }
    }, n && n.on(Mx, (r, c) => {
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
    return b(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Rx(e, t) {
  const n = e, o = zh(), s = Bx(), a = Px && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Fx, e, t);
  else {
    const r = a ? new Ix(n, s) : null;
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
const Oh = window.Vue.getCurrentInstance, Uo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Wt = window.Vue.computed, Zs = window.Vue.unref, zx = window.Vue.watchEffect, jh = window.Vue.defineComponent, Ox = window.Vue.reactive, Hh = window.Vue.h, _r = window.Vue.provide, jx = window.Vue.ref, qh = window.Vue.watch, Hx = window.Vue.shallowRef, qx = window.Vue.shallowReactive, Gx = window.Vue.nextTick, _n = typeof window != "undefined";
function Xx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const K = Object.assign;
function vr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = lt(s) ? s.map(e) : e(s);
  }
  return n;
}
const ea = () => {
}, lt = Array.isArray;
function G(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Wx = /\/$/, Kx = (e) => e.replace(Wx, "");
function Sr(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const c = t.indexOf("#");
  let u = t.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), r = t.slice(c, t.length)), o = Qx(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Yx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function wd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function _d(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Rn(t.matched[o], n.matched[s]) && Gh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Rn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Gh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Jx(e[n], t[n]))
      return !1;
  return !0;
}
function Jx(e, t) {
  return lt(e) ? vd(e, t) : lt(t) ? vd(t, e) : e === t;
}
function vd(e, t) {
  return lt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Qx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return G(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var oa;
(function(e) {
  e.pop = "pop", e.push = "push";
})(oa || (oa = {}));
var ta;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ta || (ta = {}));
function Zx(e) {
  if (!e)
    if (_n) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Kx(e);
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
const qi = () => ({
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
          G(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        G(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && G(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = nb(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Sd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const kc = /* @__PURE__ */ new Map();
function sb(e, t) {
  kc.set(e, t);
}
function ab(e) {
  const t = kc.get(e);
  return kc.delete(e), t;
}
let ib = () => location.protocol + "//" + location.host;
function Xh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), wd(u, "");
  }
  return wd(n, e) + o + s;
}
function rb(e, t, n, o) {
  let s = [], a = [], r = null;
  const c = ({ state: d }) => {
    const p = Xh(e, location), m = n.value, h = t.value;
    let f = 0;
    if (d) {
      if (n.value = p, t.value = d, r && r === m) {
        r = null;
        return;
      }
      f = h ? d.position - h.position : 0;
    } else
      o(p);
    s.forEach((_) => {
      _(n.value, m, {
        delta: f,
        type: oa.pop,
        direction: f ? f > 0 ? ta.forward : ta.back : ta.unknown
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
    d.state && d.replaceState(K({}, d.state, { scroll: qi() }), "");
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
function yd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? qi() : null
  };
}
function lb(e) {
  const { history: t, location: n } = window, o = {
    value: Xh(e, n)
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
    const l = e.indexOf("#"), d = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + u : ib() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? G("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](d);
    }
  }
  function r(u, g) {
    const i = K({}, t.state, yd(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function c(u, g) {
    const i = K(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: qi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && G(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const l = K({}, yd(o.value, u, null), { position: i.position + 1 }, g);
    a(u, l, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: r
  };
}
function cb(e) {
  e = Zx(e);
  const t = lb(e), n = rb(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = K({
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
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && G(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), cb(e);
}
function db(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Wh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const xn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, $c = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var xd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(xd || (xd = {}));
const gb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${mb(t)}" via a navigation guard.`;
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
function Io(e, t) {
  return {}.NODE_ENV !== "production" ? K(new Error(gb[e](t)), {
    type: e,
    [$c]: !0
  }, t) : K(new Error(), {
    type: e,
    [$c]: !0
  }, t);
}
function en(e, t) {
  return e instanceof Error && $c in e && (t == null || !!(e.type & t));
}
const pb = ["params", "query", "hash"];
function mb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of pb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const bd = "[^/]+?", hb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, fb = /[.+*?^${}()[\]/\\]/g;
function wb(e, t) {
  const n = K({}, hb, t), o = [];
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
        l || (s += "/"), s += d.value.replace(fb, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = d;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || bd;
        if (w !== bd) {
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
          const { value: m, repeatable: h, optional: f } = p, _ = m in g ? g[m] : "";
          if (lt(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = lt(_) ? _.join("/") : _;
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
function _b(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function vb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = _b(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Cd(o))
      return 1;
    if (Cd(s))
      return -1;
  }
  return s.length - o.length;
}
function Cd(e) {
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
        u === "(" ? n = 2 : yb.test(u) ? d() : (l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
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
function bb(e, t, n) {
  const o = wb(xb(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && G(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = K(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Cb(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Vd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, l, d) {
    const p = !d, m = kb(i);
    ({}).NODE_ENV !== "production" && Lb(m, l), m.aliasOf = d && d.record;
    const h = Vd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const S of y)
        f.push(K({}, m, {
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
    let _, w;
    for (const y of f) {
      const { path: S } = y;
      if (l && S[0] !== "/") {
        const C = l.record.path, L = C[C.length - 1] === "/" ? "" : "/";
        y.path = l.record.path + (S && L + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = bb(y, l, h), {}.NODE_ENV !== "production" && l && S[0] === "/" && Ab(_, l), d ? (d.alias.push(_), {}.NODE_ENV !== "production" && Eb(d, _)) : (w = w || _, w !== _ && w.alias.push(_), p && i.name && !$d(_) && r(i.name)), m.children) {
        const C = m.children;
        for (let L = 0; L < C.length; L++)
          a(C[L], _, d && d.children[L]);
      }
      d = d || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      r(w);
    } : ea;
  }
  function r(i) {
    if (Wh(i)) {
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
    for (; l < n.length && vb(i, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[l].record.path || !Kh(i, n[l])); )
      l++;
    n.splice(l, 0, i), i.record.name && !$d(i) && o.set(i.record.name, i);
  }
  function g(i, l) {
    let d, p = {}, m, h;
    if ("name" in i && i.name) {
      if (d = o.get(i.name), !d)
        throw Io(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((y) => !d.keys.find((S) => S.name === y));
        w.length && G(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = d.record.name, p = K(
        // paramsFromLocation is a new object
        kd(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && kd(i.params, d.keys.map((w) => w.name))
      ), m = d.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && G(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((w) => w.re.test(m)), d && (p = d.parse(m), h = d.record.name);
    else {
      if (d = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !d)
        throw Io(1, {
          location: i,
          currentLocation: l
        });
      h = d.record.name, p = K({}, l.params, i.params), m = d.stringify(p);
    }
    const f = [];
    let _ = d;
    for (; _; )
      f.unshift(_.record), _ = _.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: Vb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: g, removeRoute: r, getRoutes: c, getRecordMatcher: s };
}
function kd(e, t) {
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
function $d(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Vb(e) {
  return e.reduce((t, n) => K(t, n.meta), {});
}
function Vd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Vc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Eb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Vc.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Vc.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Lb(e, t) {
  t && t.record.name && !e.name && !e.path && G(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Ab(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Vc.bind(null, n)))
      return G(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Kh(e, t) {
  return t.children.some((n) => n === e || Kh(e, n));
}
const Yh = /#/g, Db = /&/g, Tb = /\//g, Bb = /=/g, Pb = /\?/g, Jh = /\+/g, Fb = /%5B/g, Mb = /%5D/g, Qh = /%5E/g, Nb = /%60/g, Zh = /%7B/g, Ub = /%7C/g, ef = /%7D/g, Ib = /%20/g;
function su(e) {
  return encodeURI("" + e).replace(Ub, "|").replace(Fb, "[").replace(Mb, "]");
}
function Rb(e) {
  return su(e).replace(Zh, "{").replace(ef, "}").replace(Qh, "^");
}
function Ec(e) {
  return su(e).replace(Jh, "%2B").replace(Ib, "+").replace(Yh, "%23").replace(Db, "%26").replace(Nb, "`").replace(Zh, "{").replace(ef, "}").replace(Qh, "^");
}
function zb(e) {
  return Ec(e).replace(Bb, "%3D");
}
function Ob(e) {
  return su(e).replace(Yh, "%23").replace(Pb, "%3F");
}
function jb(e) {
  return e == null ? "" : Ob(e).replace(Tb, "%2F");
}
function sa(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && G(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Hb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Jh, " "), r = a.indexOf("="), c = sa(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : sa(a.slice(r + 1));
    if (c in t) {
      let g = t[c];
      lt(g) || (g = t[c] = [g]), g.push(u);
    } else
      t[c] = u;
  }
  return t;
}
function Ed(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = zb(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (lt(o) ? o.map((a) => a && Ec(a)) : [o && Ec(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function qb(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = lt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const Gb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ld = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Gi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), tf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Lc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ss() {
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
function Un(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, c) => {
    const u = (l) => {
      l === !1 ? c(Io(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : db(l) ? c(Io(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), r());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Xb(u, t, n) : u);
    let i = Promise.resolve(g);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        i = i.then((d) => u._called ? d : (G(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !u._called) {
        G(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((l) => c(l));
  });
}
function Xb(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && G(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function yr(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && G(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let c = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw G(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          G(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, G(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (Wb(c)) {
          const g = (c.__vccOpts || c)[t];
          g && s.push(Un(g, n, o, a, r));
        } else {
          let u = c();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (G(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Xx(g) ? g.default : g;
            a.components[r] = i;
            const d = (i.__vccOpts || i)[t];
            return d && Un(d, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function Wb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ad(e) {
  const t = Uo(Gi), n = Uo(tf), o = Wt(() => t.resolve(Zs(e.to))), s = Wt(() => {
    const { matched: u } = o.value, { length: g } = u, i = u[g - 1], l = n.matched;
    if (!i || !l.length)
      return -1;
    const d = l.findIndex(Rn.bind(null, i));
    if (d > -1)
      return d;
    const p = Dd(u[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Dd(i) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Rn.bind(null, u[g - 2])) : d
    );
  }), a = Wt(() => s.value > -1 && Qb(n.params, o.value.params)), r = Wt(() => s.value > -1 && s.value === n.matched.length - 1 && Gh(n.params, o.value.params));
  function c(u = {}) {
    return Jb(u) ? t[Zs(e.replace) ? "replace" : "push"](
      Zs(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ea) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && _n) {
    const u = Oh();
    if (u) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(g), zx(() => {
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
const Kb = /* @__PURE__ */ jh({
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
  useLink: Ad,
  setup(e, { slots: t }) {
    const n = Ox(Ad(e)), { options: o } = Uo(Gi), s = Wt(() => ({
      [Td(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Td(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Hh("a", {
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
function Jb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Qb(e, t) {
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
function Dd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Td = (e, t, n) => e != null ? e : t != null ? t : n, Zb = /* @__PURE__ */ jh({
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
    ({}).NODE_ENV !== "production" && tC();
    const o = Uo(Lc), s = Wt(() => e.route || o.value), a = Uo(Ld, 0), r = Wt(() => {
      let g = Zs(a);
      const { matched: i } = s.value;
      let l;
      for (; (l = i[g]) && !l.components; )
        g++;
      return g;
    }), c = Wt(() => s.value.matched[r.value]);
    _r(Ld, Wt(() => r.value + 1)), _r(Gb, c), _r(Lc, s);
    const u = jx();
    return qh(() => [u.value, c.value, e.name], ([g, i, l], [d, p, m]) => {
      i && (i.instances[l] = g, p && p !== i && g && g === d && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), g && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Rn(i, p) || !d) && (i.enterCallbacks[l] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, i = e.name, l = c.value, d = l && l.components[i];
      if (!d)
        return Bd(n.default, { Component: d, route: g });
      const p = l.props[i], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, f = Hh(d, K({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && _n && f.ref) {
        const _ = {
          depth: r.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (lt(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Bd(n.default, { Component: f, route: g }) || f
      );
    };
  }
});
function Bd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const eC = Zb;
function tC() {
  const e = Oh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    G(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function as(e, t) {
  const n = K({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => uC(o, ["instances", "children", "aliasOf"]))
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
function Aa(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let nC = 0;
function oC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = nC++;
  Rx({
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
        value: as(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const d = l.__vrv_devtools;
        i.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: nf
        });
      }
      lt(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((d) => {
        let p = af, m = "";
        d.isExactActive ? (p = sf, m = "This is exactly active") : d.isActive && (p = of, m = "This link is active"), i.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), qh(t.currentRoute, () => {
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
        guard: Aa("beforeEach"),
        from: as(l, "Current Location during this navigation"),
        to: as(i, "Target location")
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
        guard: Aa("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = Aa("❌")) : p.status = Aa("✅"), p.from = as(l, "Current Location during this navigation"), p.to = as(i, "Target location"), s.addTimelineEvent({
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
      l.forEach(cf), i.filter && (l = l.filter((d) => (
        // save matches state based on the payload
        Ac(d, i.filter.toLowerCase())
      ))), l.forEach((d) => lf(d, t.currentRoute.value)), i.rootNodes = l.map(rf);
    }
    let g;
    s.on.getInspectorTree((i) => {
      g = i, i.app === e && i.inspectorId === c && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === c) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        d && (i.state = {
          options: aC(d)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function sC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function aC(e) {
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
        display: e.keys.map((o) => `${o.name}${sC(o)}`).join(" "),
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
const nf = 15485081, of = 2450411, sf = 8702998, iC = 2282478, af = 16486972, rC = 6710886;
function rf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: iC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: af
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: nf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: sf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: of
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: rC
  });
  let o = n.__vd_id;
  return o == null && (o = String(lC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(rf)
  };
}
let lC = 0;
const cC = /^\/(.*)\/([a-z]*)$/;
function lf(e, t) {
  const n = t.matched.length && Rn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Rn(o, e.record))), e.children.forEach((o) => lf(o, t));
}
function cf(e) {
  e.__vd_match = !1, e.children.forEach(cf);
}
function Ac(e, t) {
  const n = String(e.re).match(cC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Ac(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = sa(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Ac(r, t));
}
function uC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function dC(e) {
  const t = Cb(e.routes, e), n = e.parseQuery || Hb, o = e.stringifyQuery || Ed, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ss(), r = ss(), c = ss(), u = Hx(xn);
  let g = xn;
  _n && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = vr.bind(null, (v) => "" + v), l = vr.bind(null, jb), d = (
    // @ts-expect-error: intentionally avoid the type check
    vr.bind(null, sa)
  );
  function p(v, V) {
    let D, F;
    return Wh(v) ? (D = t.getRecordMatcher(v), F = V) : F = v, t.addRoute(F, D);
  }
  function m(v) {
    const V = t.getRecordMatcher(v);
    V ? t.removeRoute(V) : {}.NODE_ENV !== "production" && G(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, V) {
    if (V = K({}, V || u.value), typeof v == "string") {
      const O = Sr(n, v, V.path), ae = t.resolve({ path: O.path }, V), Re = s.createHref(O.fullPath);
      return {}.NODE_ENV !== "production" && (Re.startsWith("//") ? G(`Location "${v}" resolved to "${Re}". A resolved location cannot start with multiple slashes.`) : ae.matched.length || G(`No match found for location with path "${v}"`)), K(O, ae, {
        params: d(ae.params),
        hash: sa(O.hash),
        redirectedFrom: void 0,
        href: Re
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && G(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = K({}, v, {
        path: Sr(n, v.path, V.path).path
      });
    else {
      const O = K({}, v.params);
      for (const ae in O)
        O[ae] == null && delete O[ae];
      D = K({}, v, {
        params: l(O)
      }), V.params = l(V.params);
    }
    const F = t.resolve(D, V), q = v.hash || "";
    ({}).NODE_ENV !== "production" && q && !q.startsWith("#") && G(`A \`hash\` should always start with the character "#". Replace "${q}" with "#${q}".`), F.params = i(d(F.params));
    const ie = Yx(o, K({}, v, {
      hash: Rb(q),
      path: F.path
    })), z = s.createHref(ie);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? G(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : F.matched.length || G(`No match found for location with path "${"path" in v ? v.path : v}"`)), K({
      fullPath: ie,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: q,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Ed ? qb(v.query) : v.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function w(v) {
    return typeof v == "string" ? Sr(n, v, u.value.path) : K({}, v);
  }
  function y(v, V) {
    if (g !== v)
      return Io(8, {
        from: V,
        to: v
      });
  }
  function S(v) {
    return x(v);
  }
  function C(v) {
    return S(K(w(v), { replace: !0 }));
  }
  function L(v) {
    const V = v.matched[v.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: D } = V;
      let F = typeof D == "function" ? D(v) : D;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = w(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw G(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return K({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : v.params
      }, F);
    }
  }
  function x(v, V) {
    const D = g = _(v), F = u.value, q = v.state, ie = v.force, z = v.replace === !0, O = L(D);
    if (O)
      return x(
        K(w(O), {
          state: typeof O == "object" ? K({}, q, O.state) : q,
          force: ie,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        V || D
      );
    const ae = D;
    ae.redirectedFrom = V;
    let Re;
    return !ie && _d(o, F, D) && (Re = Io(16, { to: ae, from: F }), ke(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Re ? Promise.resolve(Re) : B(ae, F)).catch((he) => en(he) ? (
      // navigation redirects still mark the router as ready
      en(
        he,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? he : ne(he)
    ) : (
      // reject any unknown error
      te(he, ae, F)
    )).then((he) => {
      if (he) {
        if (en(
          he,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          _d(o, _(he.to), ae) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (G(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ae.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : x(
            // keep options
            K({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, w(he.to), {
              state: typeof he.to == "object" ? K({}, q, he.to.state) : q,
              force: ie
            }),
            // preserve the original redirectedFrom if any
            V || ae
          );
      } else
        he = W(ae, F, !0, z, q);
      return U(ae, F, he), he;
    });
  }
  function M(v, V) {
    const D = y(v, V);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function A(v) {
    const V = Te.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(v) : v();
  }
  function B(v, V) {
    let D;
    const [F, q, ie] = gC(v, V);
    D = yr(F.reverse(), "beforeRouteLeave", v, V);
    for (const O of F)
      O.leaveGuards.forEach((ae) => {
        D.push(Un(ae, v, V));
      });
    const z = M.bind(null, v, V);
    return D.push(z), H(D).then(() => {
      D = [];
      for (const O of a.list())
        D.push(Un(O, v, V));
      return D.push(z), H(D);
    }).then(() => {
      D = yr(q, "beforeRouteUpdate", v, V);
      for (const O of q)
        O.updateGuards.forEach((ae) => {
          D.push(Un(ae, v, V));
        });
      return D.push(z), H(D);
    }).then(() => {
      D = [];
      for (const O of ie)
        if (O.beforeEnter)
          if (lt(O.beforeEnter))
            for (const ae of O.beforeEnter)
              D.push(Un(ae, v, V));
          else
            D.push(Un(O.beforeEnter, v, V));
      return D.push(z), H(D);
    }).then(() => (v.matched.forEach((O) => O.enterCallbacks = {}), D = yr(ie, "beforeRouteEnter", v, V), D.push(z), H(D))).then(() => {
      D = [];
      for (const O of r.list())
        D.push(Un(O, v, V));
      return D.push(z), H(D);
    }).catch((O) => en(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function U(v, V, D) {
    c.list().forEach((F) => A(() => F(v, V, D)));
  }
  function W(v, V, D, F, q) {
    const ie = y(v, V);
    if (ie)
      return ie;
    const z = V === xn, O = _n ? history.state : {};
    D && (F || z ? s.replace(v.fullPath, K({
      scroll: z && O && O.scroll
    }, q)) : s.push(v.fullPath, q)), u.value = v, ke(v, V, D, z), ne();
  }
  let X;
  function Ae() {
    X || (X = s.listen((v, V, D) => {
      if (!N.listening)
        return;
      const F = _(v), q = L(F);
      if (q) {
        x(K(q, { replace: !0 }), F).catch(ea);
        return;
      }
      g = F;
      const ie = u.value;
      _n && sb(Sd(ie.fullPath, D.delta), qi()), B(F, ie).catch((z) => en(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : en(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (x(
        z.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        en(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === oa.pop && s.go(-1, !1);
      }).catch(ea), Promise.reject()) : (D.delta && s.go(-D.delta, !1), te(z, F, ie))).then((z) => {
        z = z || W(
          // after navigation, all matched components are resolved
          F,
          ie,
          !1
        ), z && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !en(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === oa.pop && en(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), U(F, ie, z);
      }).catch(ea);
    }));
  }
  let I = ss(), se = ss(), me;
  function te(v, V, D) {
    ne(v);
    const F = se.list();
    return F.length ? F.forEach((q) => q(v, V, D)) : ({}.NODE_ENV !== "production" && G("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function De() {
    return me && u.value !== xn ? Promise.resolve() : new Promise((v, V) => {
      I.add([v, V]);
    });
  }
  function ne(v) {
    return me || (me = !v, Ae(), I.list().forEach(([V, D]) => v ? D(v) : V()), I.reset()), v;
  }
  function ke(v, V, D, F) {
    const { scrollBehavior: q } = e;
    if (!_n || !q)
      return Promise.resolve();
    const ie = !D && ab(Sd(v.fullPath, 0)) || (F || !D) && history.state && history.state.scroll || null;
    return Gx().then(() => q(v, V, ie)).then((z) => z && ob(z)).catch((z) => te(z, v, V));
  }
  const Q = (v) => s.go(v);
  let Xe;
  const Te = /* @__PURE__ */ new Set(), N = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: S,
    replace: C,
    go: Q,
    back: () => Q(-1),
    forward: () => Q(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: c.add,
    onError: se.add,
    isReady: De,
    install(v) {
      const V = this;
      v.component("RouterLink", Yb), v.component("RouterView", eC), v.config.globalProperties.$router = V, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Zs(u)
      }), _n && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Xe && u.value === xn && (Xe = !0, S(s.location).catch((q) => {
        ({}).NODE_ENV !== "production" && G("Unexpected error when starting the router:", q);
      }));
      const D = {};
      for (const q in xn)
        Object.defineProperty(D, q, {
          get: () => u.value[q],
          enumerable: !0
        });
      v.provide(Gi, V), v.provide(tf, qx(D)), v.provide(Lc, u);
      const F = v.unmount;
      Te.add(v), v.unmount = function() {
        Te.delete(v), Te.size < 1 && (g = xn, X && X(), X = null, u.value = xn, Xe = !1, me = !1), F();
      }, {}.NODE_ENV !== "production" && _n && oC(v, V, t);
    }
  };
  function H(v) {
    return v.reduce((V, D) => V.then(() => A(D)), Promise.resolve());
  }
  return N;
}
function gC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const c = t.matched[r];
    c && (e.matched.find((g) => Rn(g, c)) ? o.push(c) : n.push(c));
    const u = e.matched[r];
    u && (t.matched.find((g) => Rn(g, u)) || s.push(u));
  }
  return [n, o, s];
}
function qe() {
  return Uo(Gi);
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
const pC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, r)), g = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, mC = (e) => {
  const t = pC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const yt = window.Vue.unref, uo = window.Vue.createVNode, tn = window.Vue.createElementVNode, Pd = window.Vue.renderSlot, Fd = window.Vue.withModifiers, xr = window.Vue.toDisplayString, br = window.Vue.withCtx, hC = window.Vue.openBlock, fC = window.Vue.createElementBlock, wC = window.Vue.createCommentVNode, _C = { class: "col shrink pe-4" }, vC = { class: "col" }, SC = { class: "cx-translation__details column justify-between ma-0" }, yC = { class: "row ma-0" }, xC = { class: "col grow" }, bC = { class: "col shrink ps-2" }, CC = ["dir", "textContent"], kC = ["dir", "textContent"], $C = ["textContent"], VC = window.Vuex.useStore, EC = window.Vue.computed, uf = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Nc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = VC(), s = (c, u) => {
      const g = o.getters["mediawiki/getPage"](c, u);
      return g == null ? void 0 : g.thumbnail;
    }, a = de(), r = EC(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = mC(n.translation.startTimestamp);
      return a.i18n(
        c[u.postfix],
        u.value
      );
    });
    return (c, u) => e.translation ? (hC(), fC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Fd((g) => c.$emit("click"), ["stop"]))
    }, [
      tn("div", _C, [
        uo(yt(Mc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      tn("div", vC, [
        tn("div", SC, [
          tn("div", yC, [
            tn("div", xC, [
              Pd(c.$slots, "title")
            ]),
            tn("div", bC, [
              uo(yt(He), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Fd((g) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Pd(c.$slots, "mid-content"),
          uo(yt(P), { class: "cx-translation__footer ma-0" }, {
            default: br(() => [
              uo(yt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: br(() => [
                  tn("span", {
                    class: "mw-ui-autonym",
                    dir: yt(R.getDir)(e.translation.sourceLanguage),
                    textContent: xr(yt(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, CC),
                  uo(yt(He), {
                    icon: yt($0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  tn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: yt(R.getDir)(e.translation.targetLanguage),
                    textContent: xr(yt(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, kC)
                ]),
                _: 1
              }),
              uo(yt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: br(() => [
                  tn("span", {
                    textContent: xr(r.value)
                  }, null, 8, $C)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : wC("", !0);
  }
};
const is = window.Vue.unref, Md = window.Vue.toDisplayString, LC = window.Vue.normalizeClass, AC = window.Vue.createElementVNode, Cr = window.Vue.openBlock, DC = window.Vue.createElementBlock, Nd = window.Vue.createCommentVNode, Ud = window.Vue.createVNode, Da = window.Vue.withCtx, Id = window.Vue.createBlock, TC = ["lang", "textContent"], BC = ["lang", "textContent"], PC = window.Vue.computed, FC = window.Vue.inject, MC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Mi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = FC("colors").gray200, s = PC(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = qe(), { setTranslationURLParams: r } = T(), c = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, g) => (Cr(), Id(uf, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": is(Xm),
      onActionIconClicked: g[0] || (g[0] = (i) => u.$emit("delete-translation")),
      onClick: c
    }, {
      title: Da(() => [
        AC("h5", {
          class: LC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Md(e.translation.sourceTitle)
        }, null, 10, TC),
        e.translation.isLeadSectionTranslation ? Nd("", !0) : (Cr(), DC("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Md(e.translation.sourceSectionTitle)
        }, null, 8, BC))
      ]),
      "mid-content": Da(() => [
        e.translation.progress ? (Cr(), Id(is(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Da(() => [
            Ud(is(k), null, {
              default: Da(() => [
                Ud(is(Jm), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: is(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Nd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, NC = window.Vuex.useStore, df = [], UC = (e, t, n) => df.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), IC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  df.push(o);
}, RC = () => {
  const e = NC();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !UC(t, n, o) && (s = yield le.fetchSectionSuggestion(
      t,
      o,
      n
    ), IC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, gf = "cx-translation-session-position-", pf = () => gf + mw.user.sessionId(), zC = () => {
  const e = parseInt(
    mw.storage.get(pf())
  );
  return isNaN(e) ? 0 : e;
}, OC = function(e) {
  const t = pf();
  mw.storage.set(t, e);
}, jC = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(gf)).forEach((e) => mw.storage.remove(e));
}, HC = () => {
  const e = zC();
  return e % 10 === 0 && jC(), OC(e + 1), e;
};
let Dc = null;
function qC(e) {
  if (Dc)
    return Promise.resolve(Dc);
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
function GC(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function XC(e) {
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
    content_translation_session_position: HC()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, c, e))
  ) : qC(r).then((u) => {
    Dc = u, mw.eventLog.submit(
      s,
      Object.assign({}, c, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: GC(u)
      })
    );
  });
}
const ct = () => (e) => (e.access_method || (e.access_method = zo ? "desktop" : "mobile web"), XC(e)), mf = window.Vue.ref, hf = mf(null), Tc = mf(null), WC = (e) => {
  hf.value = e;
}, KC = (e) => {
  Tc.value = e;
}, Xi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = T(), s = ct();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: hf.value,
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
      return Tc.value && (r.event_context = Tc.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: WC,
    setStartTranslationEventContext: KC
  };
}, pa = () => {
  const e = qe(), t = Ph(), { setTranslationURLParams: n } = T(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Xi();
  return (a, r, c, u, g = null, i = !0) => b(void 0, null, function* () {
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
const Ta = window.Vue.withModifiers, kr = window.Vue.toDisplayString, $r = window.Vue.createElementVNode, dt = window.Vue.unref, Ba = window.Vue.openBlock, Rd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const bn = window.Vue.createVNode, Hn = window.Vue.withCtx, zd = window.Vue.createElementBlock, YC = ["lang", "href", "textContent"], JC = {
  key: 1,
  class: "flex"
}, QC = { key: 2 }, Od = window.Vue.computed, jd = window.Vue.ref, Vr = window.Codex.CdxButton, Er = window.Codex.CdxIcon, ZC = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: ou,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = jd(!0), o = jd(null), s = Od(() => {
      var l;
      return (l = o.value) == null ? void 0 : l.missingSections;
    }), a = Od(
      () => s.value && Object.keys(s.value)[0]
    );
    RC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((l) => o.value = l).catch((l) => console.log(l)).finally(() => n.value = !1);
    const { setSectionURLParam: c } = T(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, g = pa(), i = (l) => {
      g(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), l && c(l);
    };
    return (l, d) => (Ba(), Rd(uf, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: Hn(() => [
        $r("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: d[0] || (d[0] = Ta(() => {
          }, ["stop"])),
          textContent: kr(e.translation.sourceTitle)
        }, null, 8, YC)
      ]),
      "mid-content": Hn(() => [
        bn(dt(P), { class: "ma-0" }, {
          default: Hn(() => [
            bn(dt(k), null, {
              default: Hn(() => [
                n.value ? (Ba(), Rd(dt(rt), { key: 0 })) : s.value ? (Ba(), zd("div", JC, [
                  bn(dt(Vr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: d[1] || (d[1] = Ta((p) => i(a.value), ["stop"]))
                  }, {
                    default: Hn(() => [
                      bn(dt(Er), {
                        class: "me-1",
                        icon: dt(yc)
                      }, null, 8, ["icon"]),
                      $r("span", null, kr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  bn(dt(Vr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": l.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: d[2] || (d[2] = Ta((p) => i(null), ["stop"]))
                  }, {
                    default: Hn(() => [
                      bn(dt(Er), { icon: dt(Qc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Ba(), zd("div", QC, [
                  bn(dt(Vr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: d[3] || (d[3] = Ta((p) => i(null), ["stop"]))
                  }, {
                    default: Hn(() => [
                      bn(dt(Er), {
                        class: "me-1",
                        icon: dt(yc)
                      }, null, 8, ["icon"]),
                      $r("span", null, kr(l.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, ek = window.Vuex.useStore, tk = () => {
  const { commit: e } = ek(), t = ct();
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
const nk = window.Vue.resolveDirective, Lr = window.Vue.createElementVNode, ok = window.Vue.withDirectives, Ar = window.Vue.unref, Hd = window.Vue.createVNode, qd = window.Vue.withCtx, sk = window.Vue.openBlock, ak = window.Vue.createBlock, ik = { class: "pa-4" }, rk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, lk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Mi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = tk(), r = () => {
      a(n.translation), s();
    };
    return (c, u) => {
      const g = nk("i18n");
      return sk(), ak(Ar(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: qd(() => [
          Lr("div", rk, [
            Hd(Ar(Ne), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Hd(Ar(Ne), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: qd(() => [
          Lr("div", ik, [
            ok(Lr("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function ck(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield uk(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Gd(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield ck(e, t, n)).sort(R.sortByAutonym);
  });
}
function uk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function dk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function gk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const pk = window.Vue.computed;
function mk(e, t) {
  const n = pk(() => {
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
const Dr = window.Vue.ref, Tr = window.Vue.watch, hk = window.Vue.computed;
function ff(e, t, n) {
  const o = Dr(""), s = Dr(-1), a = Dr(null), r = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = hk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Tr(e, () => {
    s.value = -1;
  }), Tr(t, () => {
    t.value && c.value.length > 0 && (s.value = 0);
  }), Tr(s, () => b(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function au(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, c = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Pa = window.Vue.renderSlot, $e = window.Vue.unref, fk = window.Vue.isRef, Xd = window.Vue.createVNode, rs = window.Vue.withModifiers, ls = window.Vue.withKeys, Cn = window.Vue.createElementVNode, wk = window.Vue.resolveDirective, Fa = window.Vue.withDirectives, Br = window.Vue.renderList, Pr = window.Vue.Fragment, nn = window.Vue.openBlock, on = window.Vue.createElementBlock, Wd = window.Vue.toDisplayString, Ma = window.Vue.normalizeClass, Fr = window.Vue.createCommentVNode, _k = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, vk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Sk = { class: "results px-3 pt-4" }, yk = { class: "results-header ps-8 pb-2" }, xk = { class: "results-languages--suggestions pa-0 ma-0" }, bk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ck = { class: "results px-3 pt-4" }, kk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, $k = ["lang", "dir", "aria-selected", "onClick", "textContent"], Vk = ["aria-selected"], Ek = { class: "no-results px-3 py-4" }, Lk = { class: "ps-8" }, Na = window.Vue.ref, Ak = window.Vue.watch, Dk = window.Vue.onMounted, Kd = window.Vue.computed, wf = {
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
      default: dk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Na(null), a = Na(""), r = Na([]), c = Na(n.suggestions), u = Kd(
      () => gk(r.value)
    ), g = Kd(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => o("select", S), l = () => o("close"), { autocompletion: d, onTabSelect: p } = mk(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: _ } = ff(a, r, c), w = () => {
      if (a.value && n.languages.includes(a.value)) {
        i(a.value);
        return;
      }
      if (_.value) {
        i(_.value);
        return;
      }
      if (r.value.length === 1) {
        i(r.value[0]);
        return;
      }
    };
    return Ak(a, au(() => b(this, null, function* () {
      r.value = yield Gd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Dk(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Gd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, C) => {
      const L = wk("i18n");
      return nn(), on("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Pa(S.$slots, "search", {}, () => [
          Cn("div", _k, [
            Xd($e(vc), {
              value: $e(d),
              "onUpdate:value": C[0] || (C[0] = (x) => fk(d) ? d.value = x : null),
              icon: $e(Eu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Xd($e(vc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": C[1] || (C[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: $e(Eu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                ls(rs(w, ["prevent"]), ["enter"]),
                ls(rs($e(m), ["stop", "prevent"]), ["down"]),
                ls(rs($e(h), ["stop", "prevent"]), ["up"]),
                ls(rs(l, ["prevent"]), ["esc"]),
                ls(rs($e(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Cn("section", vk, [
          e.suggestions.length && !a.value ? Pa(S.$slots, "suggestions", { key: 0 }, () => [
            Cn("section", Sk, [
              Fa(Cn("p", yk, null, 512), [
                [L, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Cn("ul", xk, [
                (nn(!0), on(Pr, null, Br(e.suggestions, (x) => (nn(), on("li", {
                  key: x,
                  class: Ma(["language ma-0", { "language--selected": x === $e(_) }]),
                  lang: x,
                  dir: $e(R.getDir)(x),
                  "aria-selected": x === $e(_) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (M) => i(x),
                  textContent: Wd($e(R.getAutonym)(x))
                }, null, 10, bk))), 128))
              ])
            ])
          ]) : Fr("", !0),
          u.value.length ? Pa(S.$slots, "search", { key: 1 }, () => [
            Cn("section", Ck, [
              e.suggestions.length && !a.value ? Fa((nn(), on("p", kk, null, 512)), [
                [L, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Fr("", !0),
              (nn(!0), on(Pr, null, Br(u.value, (x, M) => (nn(), on("ul", {
                key: M,
                class: Ma(["results-languages pa-0 ma-0 mb-6", g.value])
              }, [
                (nn(!0), on(Pr, null, Br(x, (A) => (nn(), on("li", {
                  key: A,
                  class: Ma(["language ma-0", { "language--selected": A === $e(_) }]),
                  lang: A,
                  dir: $e(R.getDir)(A),
                  role: "option",
                  "aria-selected": A === $e(_) || null,
                  tabindex: "-1",
                  onClick: (B) => i(A),
                  textContent: Wd($e(R.getAutonym)(A))
                }, null, 10, $k))), 128)),
                e.allOptionEnabled && !a.value ? Fa((nn(), on("li", {
                  key: 0,
                  class: Ma(["language ma-0", { "language--selected": $e(_) === "all" }]),
                  role: "option",
                  "aria-selected": $e(_) === "all" || null,
                  tabindex: "-1",
                  onClick: C[2] || (C[2] = (A) => i("all"))
                }, null, 10, Vk)), [
                  [L, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Fr("", !0)
              ], 2))), 128))
            ])
          ]) : Pa(S.$slots, "noresults", { key: 2 }, () => [
            Cn("section", Ek, [
              Fa(Cn("h3", Lk, null, 512), [
                [L, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Tk = window.Vue.resolveDirective, Yd = window.Vue.withDirectives, cs = window.Vue.openBlock, us = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ve = window.Vue.unref, Jd = window.Vue.toDisplayString, xt = window.Vue.createVNode, Qd = window.Vue.withModifiers, qn = window.Vue.withCtx, Bk = window.Vue.normalizeClass, Pk = {
  key: 0,
  class: "mw-ui-autonym"
}, Fk = ["lang", "dir", "textContent"], Mk = {
  key: 0,
  class: "mw-ui-autonym"
}, Nk = ["lang", "dir", "textContent"], ds = window.Vue.computed, Uk = window.Vue.inject, Ik = window.Vue.ref, Zd = window.Codex.CdxButton, Mr = window.Codex.CdxIcon, Bi = {
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
    const n = e, o = t, s = Uk("breakpoints"), a = ds(() => s.value.mobile), r = Ik(null), c = ds(() => !!r.value), u = () => r.value = "source", g = () => r.value = "target", i = () => r.value = null, l = ds(() => {
      if (!c.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[f];
    }), d = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(_, h);
    }, p = ds(
      () => n.selectedSourceLanguage === "all"
    ), m = ds(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = Tk("i18n");
      return cs(), us("div", {
        class: Bk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        xt(Ve(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: qn(() => [
            xt(Ve(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: qn(() => [
                xt(Ve(Zd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Qd(u, ["stop"])
                }, {
                  default: qn(() => [
                    p.value ? Yd((cs(), us("span", Pk, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (cs(), us("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ve(R.getDir)(e.selectedSourceLanguage),
                      textContent: Jd(Ve(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Fk)),
                    xt(Ve(Mr), {
                      size: "x-small",
                      icon: Ve(xc)
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
              default: qn(() => [
                xt(Ve(Mr), { icon: Ve(bh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            xt(Ve(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: qn(() => [
                xt(Ve(Zd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Qd(g, ["stop"])
                }, {
                  default: qn(() => [
                    m.value ? Yd((cs(), us("span", Mk, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (cs(), us("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ve(R.getDir)(e.selectedTargetLanguage),
                      textContent: Jd(Ve(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Nk)),
                    xt(Ve(Mr), {
                      size: "x-small",
                      icon: Ve(xc)
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
          default: qn(() => [
            xt(Ve(wf), {
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
const eg = window.Vue.unref, Rk = window.Vue.createVNode, Ua = window.Vue.createElementVNode, tg = window.Vue.toDisplayString, zk = window.Vue.openBlock, Ok = window.Vue.createElementBlock, jk = { class: "cx-list-empty-placeholder pa-4" }, Hk = { class: "cx-list-empty-placeholder__icon-container" }, qk = { class: "cx-list-empty-placeholder__icon" }, Gk = ["textContent"], Xk = ["textContent"], Wk = window.Codex.CdxIcon, _f = {
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
    return (t, n) => (zk(), Ok("div", jk, [
      Ua("div", Hk, [
        Ua("div", qk, [
          Rk(eg(Wk), { icon: eg(Eh) }, null, 8, ["icon"])
        ])
      ]),
      Ua("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: tg(e.title)
      }, null, 8, Gk),
      Ua("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: tg(e.description)
      }, null, 8, Xk)
    ]));
  }
}, Kk = window.Vuex.useStore, Yk = window.Vue.ref, Ia = Yk({ draft: !1, published: !1 }), Go = () => {
  const e = Kk(), t = jo(), n = (s) => b(void 0, null, function* () {
    let a = yield vt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const r = {};
    for (const c of a) {
      const u = c.sourceLanguage;
      r[u] = r[u] || [], r[u].push(c);
    }
    Ia.value[s] = !0;
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
          new Oo({ title: l, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Ia.value).filter(
        (r) => !Ia.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Ia
  };
};
const Jk = window.Vue.toDisplayString, Nr = window.Vue.normalizeClass, ng = window.Vue.createElementVNode, Ut = window.Vue.openBlock, go = window.Vue.createBlock, Ra = window.Vue.createCommentVNode, og = window.Vue.unref, sg = window.Vue.renderList, ag = window.Vue.Fragment, za = window.Vue.createElementBlock, Qk = window.Vue.createVNode, ig = window.Vue.withCtx, Zk = ["textContent"], e8 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, t8 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Oa = window.Vue.ref, bt = window.Vue.computed, n8 = window.Vue.inject, o8 = window.Vuex.useStore, rg = {
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
    const t = e, n = Oa("all"), o = Oa("all"), s = o8(), { translationsFetched: a } = Go(), r = bt(
      () => a.value[t.translationStatus]
    ), c = Oa(!1), u = Oa(null), g = bt(
      () => t.translationStatus === "draft"
    ), i = bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = bt(
      () => n.value === "all"
    ), d = bt(
      () => o.value === "all"
    ), p = bt(
      () => i.value.filter(
        (C) => (l.value || C.sourceLanguage === n.value) && (d.value || C.targetLanguage === o.value)
      ).sort((C, L) => C.lastUpdatedTimestamp < L.lastUpdatedTimestamp)
    ), m = bt(() => {
      const C = i.value.map(
        (L) => L.targetLanguage
      );
      return [...new Set(C)];
    }), h = bt(() => {
      const C = i.value.map(
        (L) => L.sourceLanguage
      );
      return [...new Set(C)];
    }), f = (C) => {
      u.value = C, c.value = !0;
    }, _ = bt(() => t.activeStatus === t.translationStatus), w = n8("breakpoints"), y = bt(() => w.value.mobile), S = bt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (C, L) => _.value ? (Ut(), go(og(Je), {
      key: 0,
      class: Nr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: ig(() => [
        ng("div", {
          class: Nr(["cx-translation-list__header", S.value])
        }, [
          ng("h3", {
            class: Nr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Jk(C.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Zk),
          p.value.length ? (Ut(), go(Bi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": L[0] || (L[0] = (x) => n.value = x),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": L[1] || (L[1] = (x) => o.value = x),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Ra("", !0)
        ], 2)
      ]),
      default: ig(() => [
        r.value && !p.value.length ? (Ut(), go(_f, {
          key: 0,
          title: C.$i18n("cx-sx-translation-list-empty-title"),
          description: C.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Ra("", !0),
        r.value ? Ra("", !0) : (Ut(), go(og(rt), { key: 1 })),
        g.value ? (Ut(), za("div", e8, [
          (Ut(!0), za(ag, null, sg(p.value, (x) => (Ut(), go(MC, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (M) => f(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Ut(), za("div", t8, [
          (Ut(!0), za(ag, null, sg(p.value, (x) => (Ut(), go(ZC, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x
          }, null, 8, ["translation"]))), 128))
        ])),
        Qk(lk, {
          modelValue: c.value,
          "onUpdate:modelValue": L[2] || (L[2] = (x) => c.value = x),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Ra("", !0);
  }
}, s8 = (e, t) => b(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, r = (yield le.fetchArticleSections(
    n,
    o
  )).sections.filter(
    (u) => u.level === "2"
  ), c = r.reduce(
    (u, g, i, l) => {
      const d = i < l.length - 1 ? l[i + 1].byteoffset : s;
      return u[g.line] = d - g.byteoffset, u;
    },
    { [Fo.LEAD_SECTION_DUMMY_TITLE]: r[0].byteoffset }
  );
  return t.length === 1 ? c[t[0]] : Object.keys(c).filter((u) => t.includes(u)).reduce((u, g) => u + c[g], 0);
}), vf = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, a8 = (e, t = []) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  let s;
  if (t.length) {
    if (t.length === 1)
      return s = t[0] === Fo.LEAD_SECTION_DUMMY_TITLE ? "cx-sx-translation-confirmer-translation-time-lead-section" : "cx-sx-translation-confirmer-translation-time-single-section", [s, o, e];
  } else
    return s = "cx-sx-translation-confirmer-translation-time-whole-article", [s, o, e];
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t.length
  ];
}, Sf = (e) => vf(e) < 15;
const Ur = window.Vue.toDisplayString, Ir = window.Vue.unref, gs = window.Vue.openBlock, Rr = window.Vue.createBlock, lg = window.Vue.createCommentVNode, i8 = window.Vue.createTextVNode, r8 = window.Vue.Fragment, cg = window.Vue.createElementBlock, Bc = window.Vue.createElementVNode, l8 = window.Vue.withCtx, c8 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, u8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, d8 = /* @__PURE__ */ Bc("span", null, "/", -1), g8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, ug = window.Codex.CdxIcon, p8 = window.Codex.CdxInfoChip, ja = window.Vue.computed, Po = {
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
    const t = e, n = ja(() => t.content.lastIndexOf("/")), o = ja(() => t.content.slice(0, n.value)), s = ja(() => t.content.slice(n.value + 1)), a = ja(
      () => t.expanded ? my : xc
    );
    return (r, c) => (gs(), Rr(Ir(p8), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: l8(() => [
        n.value === -1 ? (gs(), cg(r8, { key: 0 }, [
          i8(Ur(e.content) + " ", 1),
          e.expandable ? (gs(), Rr(Ir(ug), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : lg("", !0)
        ], 64)) : (gs(), cg("div", c8, [
          Bc("span", u8, Ur(o.value), 1),
          d8,
          Bc("span", g8, Ur(s.value), 1),
          e.expandable ? (gs(), Rr(Ir(ug), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : lg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ce = window.Vue.unref, Ct = window.Vue.createVNode, kn = window.Vue.createElementVNode, Ha = window.Vue.toDisplayString, gt = window.Vue.withCtx, m8 = window.Vue.resolveDirective, zr = window.Vue.withDirectives, Gn = window.Vue.openBlock, po = window.Vue.createBlock, mo = window.Vue.createCommentVNode, dg = window.Vue.withModifiers, h8 = window.Vue.createElementBlock, f8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, w8 = { class: "col shrink pe-4" }, _8 = ["lang", "dir", "textContent"], v8 = ["lang", "dir", "textContent"], S8 = ["textContent"], y8 = ["textContent"], Or = window.Codex.CdxIcon, kt = window.Vue.computed, x8 = window.Vue.inject, b8 = window.Vuex.useStore, Pc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [ro, In, Mo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = b8(), o = kt(() => t.suggestion), s = kt(
      () => o.value.sourceTitle || o.value.title
    ), a = kt(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = kt(
      () => {
        var _;
        return (_ = o.value) == null ? void 0 : _.missingSectionsCount;
      }
    ), c = kt(() => {
      var _;
      return (_ = a.value) == null ? void 0 : _.description;
    }), u = kt(
      () => o.value instanceof In
    ), g = kt(
      () => o.value instanceof Mo
    ), { sourceLanguageAutonym: i, targetLanguageAutonym: l } = Le(n), d = kt(
      () => g.value ? kh : $h
    ), p = x8("colors"), m = kt(
      () => g.value ? p.blue600 : "currentColor"
    ), h = kt(
      () => {
        var _;
        return Sf((_ = a.value) == null ? void 0 : _.articleSize);
      }
    ), f = kt(
      () => o.value instanceof wh || o.value instanceof _h
    );
    return (_, w) => {
      const y = m8("i18n");
      return o.value ? (Gn(), h8("div", f8, [
        kn("div", w8, [
          Ct(ce(Mc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Ct(ce(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: gt(() => [
            Ct(ce(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: gt(() => [
                Ct(ce(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: gt(() => [
                    kn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: ce(R.getDir)(o.value.sourceLanguage),
                      textContent: Ha(s.value)
                    }, null, 8, _8)
                  ]),
                  _: 1
                }),
                Ct(ce(k), { shrink: "" }, {
                  default: gt(() => [
                    kn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: ce(R.getDir)(o.value.sourceLanguage),
                      textContent: Ha(c.value)
                    }, null, 8, v8)
                  ]),
                  _: 1
                }),
                h.value && !u.value && !f.value ? (Gn(), po(ce(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: gt(() => [
                    zr(kn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : mo("", !0),
                u.value ? (Gn(), po(ce(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: gt(() => [
                    zr(kn("small", null, null, 512), [
                      [y, [r.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : g.value ? (Gn(), po(ce(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: gt(() => [
                    Ct(ce(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: gt(() => [
                        Ct(ce(k), { grow: "" }, {
                          default: gt(() => [
                            kn("small", {
                              textContent: Ha(ce(i))
                            }, null, 8, S8),
                            Ct(ce(Or), {
                              icon: ce(bh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            kn("small", {
                              textContent: Ha(ce(l))
                            }, null, 8, y8)
                          ]),
                          _: 1
                        }),
                        r.value ? (Gn(), po(ce(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: gt(() => [
                            zr(kn("small", null, null, 512), [
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
                f.value ? (Gn(), po(ce(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: gt(() => [
                    Ct(Po, {
                      icon: ce(Oi),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : mo("", !0)
              ]),
              _: 1
            }),
            Ct(ce(k), { shrink: "" }, {
              default: gt(() => [
                g.value ? mo("", !0) : (Gn(), po(ce(Or), {
                  key: 0,
                  icon: ce(qo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: w[0] || (w[0] = dg((S) => _.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Ct(ce(Or), {
                  class: "cx-suggestion__favorite-button",
                  icon: d.value,
                  "icon-color": m.value,
                  onClick: w[1] || (w[1] = dg((S) => _.$emit("bookmark"), ["stop"]))
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
}, C8 = "suggestion_filter_topic_area", k8 = "suggestion_filter_search_result_seed", $8 = "suggestion_filter_collections", V8 = "suggestion_filter_previous_edits", E8 = "suggestion_filter_popular_articles", L8 = "suggestion_filter_region", yf = (e) => {
  if (e.type === Ue)
    return C8;
  if (e.type === Ce)
    return L8;
  if (e.type === _t)
    return k8;
  if (e.id === Y || e.type === Y)
    return $8;
  if (e.id === Ft)
    return V8;
  if (e.id === Yt)
    return E8;
}, Fc = (e) => {
  if (e.type === Ue || e.type === Ce || e.type === Y || e.type === _t)
    return e.id;
  if (e.id === Y)
    return "all-collections";
};
const jr = window.Vue.normalizeClass, gg = window.Vue.createVNode, A8 = window.Vue.renderList, pg = window.Vue.Fragment, ps = window.Vue.openBlock, qa = window.Vue.createElementBlock, D8 = window.Vue.createBlock, T8 = window.Vue.toDisplayString, mg = window.Vue.createCommentVNode, B8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Ga = window.Vue.computed, P8 = {
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
    const n = e, o = Ga(() => n.filter.expandable ? n.isSelected(n.filter) ? !0 : n.filter.subFilters ? n.filter.subFilters.some(
      (l) => n.isSelected(l)
    ) : !1 : !1), s = t, a = () => {
      s("filter-selected", n.filter);
    }, r = Ga(() => n.filter.chipLabel), c = (l) => {
      const { label: d } = l, p = n.filter.label;
      return d.startsWith(`${p}/`) ? d.replace(`${p}/`, "") : d;
    }, u = Ga(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), g = Ga(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), i = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (l, d) => (ps(), qa(pg, null, [
      gg(Po, {
        class: jr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: r.value,
        expandable: !!e.filter.expandable,
        onClick: a
      }, null, 8, ["class", "icon", "content", "expandable"]),
      o.value ? (ps(), qa("div", B8, [
        gg(Po, {
          class: jr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: l.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: d[0] || (d[0] = (p) => l.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (ps(!0), qa(pg, null, A8(u.value, (p) => (ps(), D8(Po, {
          key: p.id,
          class: jr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (m) => l.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        g.value ? (ps(), qa("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          onClick: i
        }, T8(e.viewMoreConfig.label), 1)) : mg("", !0)
      ])) : mg("", !0)
    ], 64));
  }
};
const F8 = window.Vue.toDisplayString, hg = window.Vue.createElementVNode, M8 = window.Vue.renderList, fg = window.Vue.Fragment, Hr = window.Vue.openBlock, wg = window.Vue.createElementBlock, N8 = window.Vue.createBlock, U8 = { class: "sx-suggestions-filters__group-label mb-3" }, I8 = { class: "sx-suggestions-filters__group-filters mb-3" }, R8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: Qs,
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
    return (o, s) => (Hr(), wg(fg, null, [
      hg("div", U8, F8(e.filterGroup.label), 1),
      hg("div", I8, [
        (Hr(!0), wg(fg, null, M8(n(), (a) => (Hr(), N8(P8, {
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
}, z8 = window.Vue.computed, _g = window.Vue.ref, vg = window.Vue.watch, iu = (e, t) => {
  const o = _g([]), s = _g(!1), a = z8(
    () => o.value.slice(0, 4)
  ), r = au(() => b(void 0, null, function* () {
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
  }), 500), c = () => {
    s.value = !0, o.value = [], r();
  };
  return vg(t, c), vg(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, qr = window.Vue.ref, Sg = window.Vue.watch, O8 = window.Vue.computed, { topics: j8, regions: H8 } = mw.loader.require(
  "ext.cx.articlefilters"
), q8 = j8.flatMap(
  (e) => e.topics.map((t) => Qe(re({}, t), {
    groupId: e.groupId
  }))
), G8 = () => {
  const e = qr(""), t = qr("all"), n = qr({
    topics: [],
    topic_areas: [],
    collections: []
  }), o = de(), { pageCollectionGroups: s } = Yc(), { sourceLanguageURLParameter: a } = T(), r = (l) => (l = l.toLowerCase(), q8.filter(
    (d) => d.label.toLowerCase().includes(l)
  )), c = (l) => (l = l.toLowerCase(), Object.values(s.value).flat().filter(
    (p) => p.name.toLowerCase().includes(l)
  )), u = (l) => (l = l.toLowerCase(), H8.flatMap((d) => [d, ...d.countries]).filter(
    (d) => d.label.toLowerCase().includes(l)
  ).map((d) => ({
    label: d.label,
    id: d.id
  }))), { searchResultsSlice: g } = iu(a, e);
  Sg(g, () => {
    n.value.topics = g.value.map((l) => {
      var d;
      return {
        label: l.title,
        value: l.title,
        description: l.description,
        thumbnail: {
          url: (d = l.thumbnail) == null ? void 0 : d.source
        },
        filterType: _t,
        filterId: l.title
      };
    });
  }), Sg([e, t], () => b(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (l) => ({
        label: l.label,
        value: l.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? bc : null,
        filterType: Ue,
        filterId: l.topicId
      })
    ), n.value.collections = c(
      e.value
    ).map((l) => ({
      label: l.name,
      value: l.name,
      description: o.i18n(
        t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
        l.articlesCount
      ),
      icon: t.value === "all" ? Oi : null,
      filterType: Y,
      filterId: l.name
    })), n.value.regions = u(e.value).map(
      (l) => ({
        label: l.label,
        value: l.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? bc : null,
        filterType: Ce,
        filterId: l.id
      })
    );
  }));
  const i = O8(() => {
    const l = t.value === "all";
    return [
      {
        key: "topics",
        show: n.value.topics.length && l,
        items: n.value.topics,
        showThumbnail: !0
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
const _e = window.Vue.unref, $t = window.Vue.createVNode, sn = window.Vue.withCtx, X8 = window.Vue.resolveDirective, It = window.Vue.createElementVNode, Gr = window.Vue.withDirectives, Xa = window.Vue.toDisplayString, W8 = window.Vue.createTextVNode, K8 = window.Vue.vShow, Xr = window.Vue.renderList, Wr = window.Vue.Fragment, pt = window.Vue.openBlock, an = window.Vue.createElementBlock, yg = window.Vue.isRef, Y8 = window.Vue.createCommentVNode, Kr = window.Vue.createBlock, J8 = { class: "sx-suggestions-filters" }, Q8 = { class: "mb-0" }, Z8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, e2 = { class: "mb-3" }, t2 = { class: "px-4 pb-4 pt-7" }, n2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, o2 = ["onClick"], s2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, a2 = { key: 0 }, i2 = { key: 1 }, r2 = { class: "sx-suggestions-filters__search-results-empty" }, l2 = { class: "sx-suggestions-filters__search-results-empty-primary" }, c2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, Yr = window.Vue.ref, Jr = window.Vue.computed, u2 = window.Vue.inject, xg = window.Codex.CdxButton, d2 = window.Codex.CdxIcon, g2 = window.Codex.CdxTextInput, p2 = window.Codex.CdxMenu, m2 = window.Codex.CdxTabs, h2 = window.Codex.CdxTab, f2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = de(), o = t, s = Jr(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: d([
          Ye,
          Y,
          Ce,
          Ue
        ])
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: d([Y])
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
        filterGroups: d([Ue])
      }
    ]), a = (I) => A.value = I, r = (I, se) => se === "all" && I.type === Ce ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          I.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (I, se) => {
      if (I !== "all")
        return !1;
      if (se === Y) {
        const me = d([Y]);
        return me.length && me[0].filters.length > 6;
      }
      return se === Ce;
    }, { allFilters: u, isFilterSelected: g, selectFilter: i, findSelectedFilter: l } = ji(), d = (I) => I.flatMap((se) => u.value.filter((me) => me.type === se)).filter(Boolean), p = ct(), m = () => {
      y(), o("update:modelValue", !1);
    }, h = () => {
      p({ event_type: "suggestion_filters_close" }), m();
    }, f = () => {
      w.value && (p({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: Fc(
          w.value
        )
      }), i(w.value)), m();
    }, _ = Yr(!1), w = Yr(null), y = () => {
      w.value = null, _.value = !1;
    }, S = (I) => {
      const se = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: yf(I),
        event_context: Fc(I)
      };
      p(se), w.value = I, _.value = !0;
    }, C = (I) => w.value ? w.value.id === I.id && w.value.type === I.type : g(I), L = u2("breakpoints"), x = Jr(() => L.value.mobile), { searchInput: M, searchScope: A, searchResults: B } = G8(), U = Jr(
      () => w.value || l()
    ), W = Yr(null), X = (I) => {
      S({
        type: I.filterType,
        id: I.filterId,
        label: I.label
      }), M.value = "";
    }, Ae = {
      [Y]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Ce]: "cx-sx-suggestions-filters-view-all-regions-group"
    };
    return (I, se) => {
      const me = X8("i18n");
      return pt(), Kr(_e(St), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: x.value,
        header: !1
      }, {
        default: sn(() => [
          It("section", J8, [
            $t(_e(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: sn(() => [
                $t(_e(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: sn(() => [
                    $t(_e(xg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": I.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: h
                    }, {
                      default: sn(() => [
                        $t(_e(d2), { icon: _e(qo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                $t(_e(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: sn(() => [
                    Gr(It("h5", Q8, null, 512), [
                      [me, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                $t(_e(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: sn(() => [
                    Gr($t(_e(xg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: f
                    }, {
                      default: sn(() => [
                        W8(Xa(I.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [K8, _.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            It("div", Z8, [
              Gr(It("h5", e2, null, 512), [
                [me, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              It("div", null, [
                $t(Po, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: U.value.label,
                  icon: U.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            $t(_e(m2), {
              active: _e(A),
              "onUpdate:active": [
                se[2] || (se[2] = (te) => yg(A) ? A.value = te : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: sn(() => [
                (pt(!0), an(Wr, null, Xr(s.value, (te, De) => (pt(), Kr(_e(h2), {
                  key: De,
                  name: te.name,
                  label: te.label
                }, {
                  default: sn(() => [
                    It("div", t2, [
                      $t(_e(g2), {
                        modelValue: _e(M),
                        "onUpdate:modelValue": se[0] || (se[0] = (ne) => yg(M) ? M.value = ne : null),
                        placeholder: te.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": _e(bc),
                        clearable: !!_e(M)
                      }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
                    ]),
                    _e(M) ? (pt(), an("div", s2, [
                      _e(B).length ? (pt(), an("div", a2, [
                        (pt(!0), an(Wr, null, Xr(_e(B), (ne) => (pt(), Kr(_e(p2), {
                          key: ne.key,
                          selected: W.value,
                          "onUpdate:selected": se[1] || (se[1] = (ke) => W.value = ke),
                          expanded: !0,
                          "menu-items": ne.items,
                          "show-thumbnail": ne.showThumbnail || !1,
                          onMenuItemClick: X
                        }, null, 8, ["selected", "menu-items", "show-thumbnail"]))), 128))
                      ])) : (pt(), an("div", i2, [
                        It("div", r2, [
                          It("span", l2, Xa(I.$i18n(
                            "cx-sx-suggestions-filter-search-results-empty-primary"
                          )), 1),
                          It("span", c2, Xa(I.$i18n(
                            "cx-sx-suggestions-filter-search-results-empty-secondary"
                          )), 1)
                        ])
                      ]))
                    ])) : (pt(), an("div", n2, [
                      (pt(!0), an(Wr, null, Xr(te.filterGroups, (ne) => (pt(), an("div", {
                        key: ne.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        $t(R8, {
                          "filter-group": ne,
                          "tentatively-select-filter": S,
                          "is-selected": C,
                          limit: c(te.name, ne.type) ? 4 : 0,
                          "get-sub-filter-config": (ke) => r(ke, te.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(te.name, ne.type) ? (pt(), an("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          onClick: (ke) => a(ne.id)
                        }, [
                          It("span", null, Xa(I.$i18n(Ae[ne.id])), 1)
                        ], 8, o2)) : Y8("", !0)
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
const Qr = window.Vue.unref, Wa = window.Vue.openBlock, bg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const w2 = window.Vue.renderList, _2 = window.Vue.Fragment, Cg = window.Vue.createElementBlock, v2 = window.Vue.normalizeClass, S2 = window.Vue.createVNode, y2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, kg = window.Vue.ref, x2 = window.Vue.computed, $g = window.Vue.watch, b2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = de(), n = ct(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r,
      validateURLFilterWithCollections: c
    } = ji(), u = kg(!1), g = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), u.value = !0;
    }, i = (f) => {
      const _ = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: yf(f),
        event_context: Fc(f)
      };
      n(_), s(f);
    }, l = {
      [Ft]: Ah,
      [Yt]: Vh,
      [Y]: Oi,
      [Ue]: null
    }, { getFilterProvider: d } = Dh(), p = (f) => ({
      id: f.id,
      type: f.type,
      icon: l[d(f)],
      label: f.label,
      action: i
    }), m = kg(o());
    $g(u, (f) => {
      f || (m.value = o());
    }), $g(r, (f) => {
      f || (c(), m.value = o());
    });
    const h = x2(() => [
      ...m.value.map(p),
      {
        id: "more",
        icon: Qc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: g
      }
    ]);
    return (f, _) => Qr(r) ? (Wa(), bg(Qr(rt), { key: 0 })) : (Wa(), Cg("div", y2, [
      (Wa(!0), Cg(_2, null, w2(h.value, (w) => (Wa(), bg(Po, {
        key: w.label,
        class: v2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": Qr(a)(w) }]),
        icon: w.icon,
        content: w.label,
        onClick: (y) => w.action(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      S2(f2, {
        modelValue: u.value,
        "onUpdate:modelValue": _[0] || (_[0] = (w) => u.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, ho = window.Vue.computed, Vg = window.Vue.ref, C2 = window.Vue.watch, k2 = window.Vuex.useStore, $2 = () => {
  const e = k2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Xc(), r = ct(), c = ho(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = ho(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = Vg(0), i = Vg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, d = 4, p = ho(
    () => a(g.value)
  ), m = ho(
    () => s(i.value)
  ), h = () => {
    C(), A(), L(), B();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = tu(), w = (U) => U.length === l, y = ho(
    () => w(m.value)
  ), S = ho(
    () => w(p.value)
  ), C = () => {
    const U = (g.value + 1) % d, W = w(
      a(U)
    );
    (!S.value || !W) && f();
  }, L = () => {
    const U = (i.value + 1) % d, W = w(
      s(U)
    );
    (!y.value || !W) && _();
  }, x = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", U), C();
  }, M = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", U), L();
  }, A = () => g.value = (g.value + 1) % d, B = () => i.value = (i.value + 1) % d;
  return C2(
    o,
    () => {
      i.value = 0, L(), g.value = 0, C();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: M,
    discardSectionSuggestion: x,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, V2 = window.Vuex.useStore, ru = () => {
  const e = V2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = tu(), o = (g, i, l) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === i && d.sourceTitle === l
  ), s = (g) => b(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: l, targetLanguage: d } = g;
    yield le.markFavorite(i, l, d);
    const p = new Mo({
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
    markFavoriteSuggestion: (g, i, l) => b(void 0, null, function* () {
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
      ), t()), yield le.markFavorite(
        g,
        i,
        l
      );
      const m = new Mo({
        title: g,
        sourceLanguage: i,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), le.unmarkFavorite(g))
  };
}, E2 = "suggestion_no_seed", L2 = "suggestion_recent_edit", A2 = "suggestion_topic_area", D2 = "suggestion_search_result_seed", T2 = "suggestion_featured", B2 = "suggestion_collections", P2 = "suggestion_region", F2 = () => {
  const { currentSuggestionFilters: e } = T();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === Ft)
      return t ? L2 : E2;
    if (n === Ue)
      return A2;
    if (n === Ce)
      return P2;
    if (n === _t)
      return D2;
    if (o === Yt)
      return T2;
    if (o === Y || n === Y)
      return B2;
    throw new Error("Event source cannot be empty");
  };
};
const Eg = window.Vue.normalizeClass, M2 = window.Vue.resolveDirective, ms = window.Vue.createElementVNode, Ka = window.Vue.withDirectives, ge = window.Vue.unref, Ze = window.Vue.openBlock, Rt = window.Vue.createBlock, $n = window.Vue.createCommentVNode, Zr = window.Vue.createVNode, hs = window.Vue.withCtx, Lg = window.Vue.renderList, Ag = window.Vue.Fragment, el = window.Vue.createElementBlock, N2 = window.Vue.toDisplayString, U2 = window.Vue.createTextVNode, I2 = window.Vue.vShow, R2 = { class: "cx-suggestion-list" }, z2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, O2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, j2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, zt = window.Vue.computed, H2 = window.Vue.inject, q2 = window.Vue.ref, G2 = window.Codex.CdxButton, X2 = window.Codex.CdxIcon, W2 = window.Vuex.useStore, K2 = {
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
    } = T(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = ca(), r = Mh(), c = (Q) => r(Q, n.value), u = (Q) => r(t.value, Q), g = F2(), i = pa(), l = (Q) => {
      i(
        Q.sourceTitle,
        Q.sourceLanguage,
        Q.targetLanguage,
        g(Q.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: d,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: _,
      sectionSuggestionsLoading: w,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = $2(), C = q2(null), L = ct(), x = () => {
      L({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), C.value && C.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: M, markFavoritePageSuggestion: A } = ru(), B = H2("breakpoints"), U = zt(() => B.value.mobile), W = zt(
      () => U.value ? null : "pb-2 flex justify-between items-center"
    ), X = W2(), Ae = zt(
      () => X.state.suggestions.isPageSuggestionsFetchPending
    ), I = zt(
      () => X.state.suggestions.isSectionSuggestionsFetchPending
    ), se = zt(
      () => Ae.value || _.value && !y.value
    ), me = zt(
      () => I.value || w.value && !S.value
    ), te = zt(
      () => Ae.value || _.value || d.value.length > 0
    ), De = zt(
      () => I.value || w.value || p.value.length > 0
    ), ne = zt(
      () => !te.value && !De.value
    ), ke = zt(
      () => !w.value && !_.value && !Ae.value && !I.value && !ne.value
    );
    return (Q, Xe) => {
      const Te = M2("i18n");
      return Ka((Ze(), el("div", R2, [
        Zr(ge(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: hs(() => [
            ms("div", {
              class: Eg(["cx-suggestion-list__header-card__header px-4", W.value])
            }, [
              Ka(ms("h3", {
                class: Eg(["mw-ui-card__title mb-0", { "py-3": U.value }])
              }, null, 2), [
                [Te, void 0, "cx-suggestionlist-title"]
              ]),
              U.value ? $n("", !0) : (Ze(), Rt(Bi, {
                key: 0,
                "source-languages": ge(s),
                "target-languages": ge(a),
                "selected-source-language": ge(t),
                "selected-target-language": ge(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Zr(b2)
          ]),
          default: hs(() => [
            U.value ? (Ze(), Rt(Bi, {
              key: 0,
              "source-languages": ge(s),
              "target-languages": ge(a),
              "selected-source-language": ge(t),
              "selected-target-language": ge(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : $n("", !0)
          ]),
          _: 1
        }),
        te.value ? (Ze(), Rt(ge(Je), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: C,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: hs(() => [
            Ka(ms("h5", z2, null, 512), [
              [Te, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ze(!0), el(Ag, null, Lg(ge(d), (N, H) => (Ze(), Rt(Pc, {
              key: `page-suggestion-${H}`,
              suggestion: N,
              onClose: (v) => ge(m)(N),
              onClick: (v) => l(N),
              onBookmark: (v) => ge(A)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se.value ? (Ze(), Rt(ge(rt), { key: 0 })) : $n("", !0)
          ]),
          _: 1
        }, 512)) : $n("", !0),
        De.value ? (Ze(), Rt(ge(Je), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: hs(() => [
            Ka(ms("h5", O2, null, 512), [
              [Te, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ze(!0), el(Ag, null, Lg(ge(p), (N, H) => (Ze(), Rt(Pc, {
              key: `section-suggestion-${H}`,
              class: "ma-0",
              suggestion: N,
              onClose: (v) => ge(h)(N),
              onClick: (v) => l(N),
              onBookmark: (v) => ge(M)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            me.value ? (Ze(), Rt(ge(rt), { key: 0 })) : $n("", !0)
          ]),
          _: 1
        })) : $n("", !0),
        ne.value ? (Ze(), Rt(_f, {
          key: 2,
          title: Q.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Q.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : $n("", !0),
        ms("div", j2, [
          ke.value ? (Ze(), Rt(ge(G2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: x
          }, {
            default: hs(() => [
              Zr(ge(X2), {
                class: "me-1",
                icon: ge(Lh)
              }, null, 8, ["icon"]),
              U2(" " + N2(Q.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : $n("", !0)
        ])
      ], 512)), [
        [I2, e.active]
      ]);
    };
  }
}, Y2 = window.Vue.resolveDirective, J2 = window.Vue.createElementVNode, Q2 = window.Vue.withDirectives, Z2 = window.Vue.renderList, e$ = window.Vue.Fragment, tl = window.Vue.openBlock, t$ = window.Vue.createElementBlock, Dg = window.Vue.unref, Tg = window.Vue.createBlock, Bg = window.Vue.withCtx, n$ = window.Vue.createCommentVNode, o$ = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, s$ = window.Vue.computed, a$ = window.Vuex.useStore, i$ = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = a$(), n = s$(() => t.state.suggestions.favorites || []), o = pa(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ru();
    return (r, c) => {
      const u = Y2("i18n");
      return n.value.length ? (tl(), Tg(Dg(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Bg(() => [
          Q2(J2("h3", o$, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Bg(() => [
          (tl(!0), t$(e$, null, Z2(n.value, (g, i) => (tl(), Tg(Pc, {
            key: `favorite-${i}`,
            suggestion: g,
            onClick: (l) => s(g),
            onBookmark: (l) => Dg(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : n$("", !0);
    };
  }
};
const r$ = window.Vue.resolveDirective, fs = window.Vue.createElementVNode, l$ = window.Vue.withDirectives, c$ = window.Vue.renderList, u$ = window.Vue.Fragment, Pg = window.Vue.openBlock, Fg = window.Vue.createElementBlock, d$ = window.Vue.unref, g$ = window.Vue.createVNode, p$ = window.Vue.toDisplayString, m$ = { class: "cx-help-panel pa-4" }, h$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, f$ = ["href", "target"], w$ = ["textContent"], _$ = window.Codex.CdxIcon, v$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = de(), n = [
      {
        icon: vy,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: fy,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = r$("i18n");
      return Pg(), Fg("div", m$, [
        l$(fs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        fs("ul", h$, [
          (Pg(), Fg(u$, null, c$(n, (r, c) => fs("li", {
            key: c,
            class: "mt-4"
          }, [
            fs("a", {
              href: r.href,
              target: r.target
            }, [
              g$(d$(_$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              fs("span", {
                textContent: p$(r.label)
              }, null, 8, w$)
            ], 8, f$)
          ])), 64))
        ])
      ]);
    };
  }
};
const S$ = window.Vue.resolveDirective, fo = window.Vue.createElementVNode, nl = window.Vue.withDirectives, Mg = window.Vue.toDisplayString, ol = window.Vue.unref, sl = window.Vue.withCtx, al = window.Vue.createVNode, y$ = window.Vue.openBlock, x$ = window.Vue.createElementBlock, b$ = { class: "cx-stats-panel pa-4" }, C$ = ["textContent"], k$ = { class: "cx-stats-panel__monthly-stats-label" }, $$ = ["textContent"], V$ = { class: "cx-stats-panel__total-stats-label" }, E$ = window.Vue.ref, Ng = window.Vue.computed, L$ = window.Vue.watch, A$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Ng(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.count) || 0;
    }), s = Ng(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.delta) || 0;
    }), a = E$(null);
    return L$(
      () => t.stats,
      () => {
        const r = t.stats, c = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), g = u.reduce(
          (S, C) => Math.max(S, r[C].delta),
          0
        ), i = u.map((S) => r[S].delta), l = a.value.getBoundingClientRect().width, d = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = d;
        const p = 4, m = 6, h = 50, f = (h - p) / g;
        let _ = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), y = i.slice(
          Math.max(i.length - w, 0)
        );
        y.forEach((S, C) => {
          C === y.length - 1 && (c.fillStyle = "#36c");
          const L = h - S * f;
          c.fillRect(_, L, m, S * f), _ += m + p;
        });
      }
    ), (r, c) => {
      const u = S$("i18n");
      return y$(), x$("div", b$, [
        nl(fo("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        al(ol(P), null, {
          default: sl(() => [
            al(ol(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: sl(() => [
                fo("h3", {
                  textContent: Mg(s.value)
                }, null, 8, C$),
                nl(fo("h5", k$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            al(ol(k), { class: "cx-stats-panel__total-stats" }, {
              default: sl(() => [
                fo("h3", {
                  textContent: Mg(o.value)
                }, null, 8, $$),
                nl(fo("h5", V$, null, 512), [
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
}, xf = () => {
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
const D$ = window.Vue.renderSlot, T$ = window.Vue.unref, B$ = window.Vue.createVNode, P$ = window.Vue.createElementVNode, F$ = window.Vue.openBlock, M$ = window.Vue.createElementBlock, N$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, U$ = { class: "col-12 ma-0 pa-0" }, I$ = {
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
    const n = t, o = xf(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (F$(), M$("footer", N$, [
      P$("div", U$, [
        D$(a.$slots, "default", {}, () => [
          B$(T$(aa), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, R$ = window.Vuex.useStore, z$ = () => {
  const e = R$(), t = jo();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield le.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), le.fetchSectionSuggestion(
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
}, O$ = window.Vuex.useStore, bf = () => {
  const e = O$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), { isDefaultFilter: r } = Ic(), { previousRoute: c } = Le(e), u = ct(), g = () => {
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
}, j$ = window.Vue.watch, H$ = () => {
  const { fetchAllTranslations: e } = Go(), t = Bh(), n = z$(), { fetchPageCollectionGroups: o } = Yc(), { logDashboardOpenEvent: s } = bf(), { applicationLanguagesInitialized: a } = Nh();
  return () => b(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (r) {
      mw.log.error("[CX] Error while fetching favorite suggestions", r);
    }
    yield e(), j$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Ug = window.Vue.computed, q$ = window.Vue.ref, G$ = window.Vue.watch, X$ = window.Vue.watchEffect, W$ = window.Vuex.useStore, K$ = ["suggestions", "draft", "published"], Y$ = () => {
  const e = W$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = T(), { translationsFetched: o } = Go(), s = q$(null);
  if (K$.includes(t.value))
    s.value = t.value;
  else {
    const a = Ug(
      () => o.value.draft
    ), r = Ug(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", G$(a, (c) => {
      c && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return X$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, J$ = window.Vue.computed, Q$ = () => {
  const e = de();
  return J$(() => [
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
        icon: Fi,
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
const Se = window.Vue.unref, Pe = window.Vue.createVNode, Z$ = window.Vue.toDisplayString, eV = window.Vue.createTextVNode, rn = window.Vue.withCtx, il = window.Vue.openBlock, Ig = window.Vue.createBlock, Rg = window.Vue.createCommentVNode, tV = window.Vue.vShow, nV = window.Vue.withDirectives, oV = window.Vue.isRef, sV = window.Vue.createElementBlock, aV = window.Vue.computed, iV = window.Vuex.useStore, rV = window.Codex.CdxButton, lV = window.Codex.CdxIcon, cV = {
  __name: "CXDashboard",
  setup(e) {
    const t = qe(), n = ct(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    H$()();
    const a = iV();
    a.dispatch("translator/fetchTranslatorStats");
    const r = aV(() => a.state.translator.translatorStats), c = Y$(), u = Q$(), g = xf(), i = (l) => {
      g(l), c.value = l;
    };
    return (l, d) => (il(), sV("div", null, [
      Pe(Se(P), { class: "ma-0 pb-4" }, {
        default: rn(() => [
          Pe(Se(rV), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: rn(() => [
              Pe(Se(lV), {
                class: "me-1",
                icon: Se(yc)
              }, null, 8, ["icon"]),
              eV(" " + Z$(l.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Pe(Se(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: rn(() => [
          l.$mwui.breakpoint.tabletAndUp ? (il(), Ig(Se(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: rn(() => [
              Pe(Se(aa), {
                id: "dashboard-list-selector--desktop",
                items: Se(u),
                active: Se(c),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Rg("", !0),
          Pe(Se(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: rn(() => [
              nV(Pe(i$, null, null, 512), [
                [tV, Se(c) === "suggestions"]
              ]),
              Pe(K2, {
                active: Se(c) === "suggestions"
              }, null, 8, ["active"]),
              Pe(rg, {
                "translation-status": "draft",
                "active-status": Se(c)
              }, null, 8, ["active-status"]),
              Pe(rg, {
                "translation-status": "published",
                "active-status": Se(c)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Pe(Se(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: rn(() => [
              Pe(Se(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: rn(() => [
                  Pe(Se(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: rn(() => [
                      Pe(A$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Pe(Se(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: rn(() => [
                      Pe(v$)
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
      l.$mwui.breakpoint.mobile ? (il(), Ig(I$, {
        key: 0,
        active: Se(c),
        "onUpdate:active": d[0] || (d[0] = (p) => oV(c) ? c.value = p : null),
        items: Se(u)
      }, null, 8, ["active", "items"])) : Rg("", !0)
    ]));
  }
}, uV = {
  name: "DashboardView",
  components: { CxDashboard: cV }
}, dV = window.Vue.resolveComponent, gV = window.Vue.createVNode, pV = window.Vue.openBlock, mV = window.Vue.createElementBlock, hV = { class: "cx-translation-dashboard" };
function fV(e, t, n, o, s, a) {
  const r = dV("cx-dashboard");
  return pV(), mV("main", hV, [
    gV(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const zg = /* @__PURE__ */ oe(uV, [["render", fV]]), wV = window.Vue.computed, _V = window.Vuex.useStore, Ge = () => {
  const e = _V(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T();
  return { sectionSuggestion: wV(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, vV = window.Vuex.useStore, SV = window.Vue.computed, Nt = () => {
  const e = vV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = T();
  return { currentTranslation: SV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, wo = window.Vue.computed, yV = () => {
  const { sectionSuggestion: e } = Ge(), { targetLanguageURLParameter: t } = T(), { currentTranslation: n } = Nt(), o = wo(
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
  ), { targetPageExists: r, getCurrentTitleByLanguage: c } = Sn(), u = wo(() => r ? J.getPageUrl(
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
function xV(e) {
  return e.$el = $(e), e;
}
function bV(e, t, n, o) {
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
function CV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function kV(e, t) {
  return b(this, null, function* () {
    yield lu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = xV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const $V = window.Vue.computed, VV = window.Vue.onMounted, EV = window.Vue.ref;
function LV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const AV = {
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
    const n = EV(null);
    let o = null;
    const s = $V(() => o.getHtml()), a = () => {
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
    return VV(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = LV;
      const i = yield kV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = bV(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = CV, o.focus();
    })), { sxeditor: n };
  }
}, Li = window.Vue.createElementVNode, DV = window.Vue.openBlock, TV = window.Vue.createElementBlock, BV = ["lang", "dir"], PV = /* @__PURE__ */ Li("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Li("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Li("div", { class: "toolbar" })
  ])
], -1), FV = ["lang", "dir"];
function MV(e, t, n, o, s, a) {
  return DV(), TV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    PV,
    Li("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, FV)
  ], 8, BV);
}
const NV = /* @__PURE__ */ oe(AV, [["render", MV]]);
function lu() {
  return mw.loader.using("mw.cx3.ve");
}
const UV = window.Vuex.useStore, IV = () => {
  const e = UV();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield lu(), new Promise((s) => {
      setTimeout(() => {
        const a = mh.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, RV = window.Vuex.useStore, Cf = () => {
  const e = RV();
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
}, Og = window.Vue.computed, zV = window.Vuex.useStore, ut = () => {
  const e = zV(), { sectionSuggestion: t } = Ge(), { currentTranslation: n } = Nt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Og(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = Og(() => {
    var g, i;
    const u = ((g = t.value) == null ? void 0 : g.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: c };
}, Wi = () => {
  const { currentSourcePage: e } = ut(), t = IV(), n = Cf(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: c
  } = T(), u = (l, d) => b(void 0, null, function* () {
    l() || (yield n(
      s.value,
      a.value,
      r.value,
      c.value
    ), zo || (yield t(
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
}, OV = window.Vuex.useStore, Xo = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = T(), a = OV(), r = qe(), c = () => {
    const l = r.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((d) => d.name === l);
  }, u = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), l = J.getCurrentWikiLanguageCode();
    if (!i || t.value === l)
      return !1;
    const d = o.value ? { section: o.value } : {}, p = J.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      d
    );
    return location.href = p + "#" + c().path, !0;
  }, g = () => {
    location.href = J.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (J.setCXToken(
      e.value,
      t.value,
      n.value
    ), zo) {
      g();
      return;
    }
    if (u())
      return;
    const l = c();
    r.push({ name: l.name });
  };
}, cu = () => {
  const e = ct(), { currentTranslation: t } = Nt();
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
}, jV = window.Vue.ref, HV = () => {
  const e = qe(), { logDashboardTranslationStartEvent: t } = Xi(), n = cu(), o = Xo(), { sectionURLParameter: s } = T(), { targetPageExists: a } = Sn(), { selectPageSectionByTitle: r } = Wi(), c = () => b(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = jV(!1), { currentTranslation: g } = Nt();
  return {
    handlePrimaryButtonClick: () => {
      g.value ? g.value.isArticleTranslation && !zo ? u.value = !0 : (n(), o()) : s.value ? c() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const qV = window.Vue.resolveDirective, jg = window.Vue.createElementVNode, Hg = window.Vue.withDirectives, GV = window.Vue.unref, XV = window.Vue.withCtx, WV = window.Vue.openBlock, KV = window.Vue.createBlock, YV = {
  href: "",
  target: "_blank"
}, JV = window.Codex.CdxDialog, QV = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = de(), r = {
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
      const l = qV("i18n");
      return WV(), KV(GV(JV), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": r,
        "default-action": c,
        "onUpdate:open": i[0] || (i[0] = (d) => s(d)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (d) => s(!1))
      }, {
        default: XV(() => [
          Hg(jg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Hg(jg("a", YV, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ye = window.Vue.unref, ZV = window.Vue.resolveDirective, ws = window.Vue.createElementVNode, qg = window.Vue.withDirectives, _s = window.Vue.toDisplayString, vs = window.Vue.openBlock, rl = window.Vue.createElementBlock, ll = window.Vue.createCommentVNode, mt = window.Vue.createVNode, Vt = window.Vue.withCtx, cl = window.Vue.createTextVNode, e4 = window.Vue.withModifiers, Gg = window.Vue.createBlock, t4 = window.Vue.Fragment, n4 = { class: "sx-translation-confirmer-body pb-4" }, o4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, s4 = ["textContent"], a4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, i4 = ["href"], r4 = ["textContent"], Ya = window.Vue.computed, l4 = window.Vue.inject, Xg = window.Vue.ref, c4 = window.Vue.watchEffect, u4 = window.Vuex.useStore, ul = window.Codex.CdxButton, d4 = window.Codex.CdxIcon, g4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = qe(), o = u4();
    l4("colors");
    const { sectionSuggestion: s } = Ge(), { targetLanguageAutonym: a } = Le(o), { sectionURLParameter: r } = T(), { logDashboardTranslationStartEvent: c } = Xi(), u = Xo(), { handlePrimaryButtonClick: g, translationConfirmationDialogOn: i } = HV(), l = Xg(!1), d = Xg(null), p = () => b(this, null, function* () {
      let W = !0;
      try {
        W = yield vt.checkUnreviewedTranslations();
      } catch (X) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          X
        );
      }
      W !== !0 && (l.value = !0, d.value = W.targetUrl);
    }), m = () => b(this, null, function* () {
      yield p(), !l.value && (c(), u());
    }), h = () => b(this, null, function* () {
      yield p(), !l.value && g();
    }), f = t;
    c4(() => {
      i.value && (f("open-translation-confirmation-dialog"), i.value = !1);
    });
    const {
      actionInformationMessageArgs: _,
      getActionButtonLabel: w,
      isProgressiveButton: y,
      targetArticlePath: S
    } = yV(), C = de(), L = Ya(
      () => C.i18n(w(!!r.value))
    ), x = Ya(
      () => C.i18n(..._.value)
    ), M = () => b(this, null, function* () {
      yield p(), !l.value && n.push({ name: "sx-section-selector" });
    }), A = Ya(() => {
      var W, X;
      return r.value && !!((X = (W = s.value) == null ? void 0 : W.sourceSections) != null && X.length);
    }), { targetPageExists: B } = Sn(), U = Ya(() => !r.value && B.value && zo);
    return (W, X) => {
      const Ae = ZV("i18n");
      return vs(), rl(t4, null, [
        ws("section", n4, [
          ye(r) ? (vs(), rl("section", o4, [
            qg(ws("h6", null, null, 512), [
              [Ae, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ws("h5", {
              class: "ma-0",
              textContent: _s(ye(r))
            }, null, 8, s4)
          ])) : ye(B) ? (vs(), rl("section", a4, [
            mt(ye(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Vt(() => [
                qg(mt(ye(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [Ae, [ye(a)], "cx-sx-existing-translation-status"]
                ]),
                mt(ye(k), { shrink: "" }, {
                  default: Vt(() => [
                    ws("a", {
                      href: ye(S),
                      target: "_blank"
                    }, [
                      mt(ye(d4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ye(Zc)
                      }, null, 8, ["icon"])
                    ], 8, i4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            mt(ye(P), { class: "ma-0" }, {
              default: Vt(() => [
                mt(ye(k), null, {
                  default: Vt(() => [
                    ws("span", {
                      textContent: _s(x.value)
                    }, null, 8, r4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : ll("", !0),
          mt(ye(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Vt(() => [
              A.value ? (vs(), Gg(ye(k), {
                key: 0,
                shrink: ""
              }, {
                default: Vt(() => [
                  mt(ye(ul), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: e4(M, ["stop"])
                  }, {
                    default: Vt(() => [
                      cl(_s(W.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ll("", !0),
              U.value ? (vs(), Gg(ye(k), {
                key: 1,
                shrink: ""
              }, {
                default: Vt(() => [
                  mt(ye(ul), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Vt(() => [
                      cl(_s(W.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ll("", !0),
              mt(ye(k), { shrink: "" }, {
                default: Vt(() => [
                  mt(ye(ul), {
                    weight: "primary",
                    size: "large",
                    action: ye(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Vt(() => [
                      cl(_s(L.value), 1)
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
        mt(QV, {
          modelValue: l.value,
          "onUpdate:modelValue": X[0] || (X[0] = (I) => l.value = I),
          "target-url": d.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const dl = window.Vue.unref, p4 = window.Vue.openBlock, m4 = window.Vue.createBlock, h4 = window.Vue.computed, kf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = ca(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = T(), { currentLanguageTitleGroup: s } = Sn(), a = h4(
      () => {
        var g;
        return ((g = s.value) == null ? void 0 : g.titles.map((i) => i.lang)) || [];
      }
    ), r = Hy(), c = (g) => r(g, o.value), u = (g) => r(n.value, g);
    return (g, i) => (p4(), m4(Bi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": dl(t),
      "selected-source-language": dl(n),
      "selected-target-language": dl(o),
      "onUpdate:selectedSourceLanguage": c,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, gl = window.Vue.computed, Wg = window.Vue.ref, f4 = window.Vue.watchEffect, w4 = () => {
  const { currentSourcePage: e } = ut(), { sectionSuggestion: t } = Ge(), n = de(), { sectionURLParameter: o } = T(), s = Wg(null), a = Wg([]);
  f4(() => b(void 0, null, function* () {
    var g;
    if (t.value && o.value)
      a.value = [o.value];
    else if (t.value) {
      const { missingSections: i } = t.value;
      a.value = Object.keys(i);
    } else
      e.value && !zo ? a.value = [Fo.LEAD_SECTION_DUMMY_TITLE] : a.value = [];
    a.value.length ? s.value = yield s8(
      e.value,
      a.value
    ) : s.value = ((g = e.value) == null ? void 0 : g.articleSize) || null;
  }));
  const r = gl(() => vf(s.value || 0)), c = gl(() => {
    if (!t.value && !e.value || !r.value)
      return "";
    const g = a8(
      r.value,
      a.value
    );
    return n.i18n(...g);
  }), u = gl(
    () => Sf(s.value)
  );
  return { timeEstimateMessage: c, isQuickTranslation: u };
};
const be = window.Vue.unref, pl = window.Vue.toDisplayString, Vn = window.Vue.createElementVNode, Ot = window.Vue.createVNode, _o = window.Vue.withCtx, _4 = window.Vue.resolveDirective, v4 = window.Vue.withDirectives, S4 = window.Vue.normalizeClass, Kg = window.Vue.openBlock, y4 = window.Vue.createElementBlock, x4 = window.Vue.createCommentVNode, b4 = window.Vue.createBlock, C4 = ["textContent"], k4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, $4 = ["textContent"], V4 = { class: "pe-3" }, E4 = ["textContent"], L4 = window.Codex.CdxButton, Ss = window.Codex.CdxIcon, Xn = window.Vue.computed, A4 = window.Vuex.useStore, D4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = A4(), { currentSourcePage: n } = ut(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = T(), r = Xn(() => t.state.suggestions.favorites || []), c = Xn(
      () => r.value.some(
        (S) => a.value === S.title && o.value === S.sourceLanguage && s.value === S.targetLanguage
      )
    ), { markFavoriteSuggestion: u, removeFavoriteSuggestion: g } = ru(), i = () => u(
      a.value,
      o.value,
      s.value
    ), l = () => g(
      new Mo({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), d = Xn(
      () => c.value ? kh : $h
    ), p = Xn(
      () => c.value ? l : i
    ), m = Xn(
      () => J.getPageUrl(o.value || "", a.value || "")
    ), h = Xn(
      () => {
        var S;
        return (((S = n.value) == null ? void 0 : S.langLinksCount) || 0) + 1;
      }
    ), f = (S) => {
      const C = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let L = 0; L < C.length; L++)
        if (S >= C[L].value)
          return (S / C[L].value).toFixed(1).replace(/\.0$/, "") + C[L].suffix;
      return S.toString();
    }, _ = Xn(() => {
      var C;
      const S = Object.values(((C = n.value) == null ? void 0 : C.pageviews) || {}).reduce(
        (L, x) => L + x,
        0
      );
      return f(S);
    }), { timeEstimateMessage: w, isQuickTranslation: y } = w4();
    return (S, C) => {
      const L = _4("i18n");
      return Kg(), b4(be(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: _o(() => [
          Ot(be(k), null, {
            default: _o(() => [
              Ot(be(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: _o(() => [
                  Ot(be(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: m.value,
                    target: "_blank"
                  }, {
                    default: _o(() => [
                      Vn("h5", {
                        class: "ma-0 me-1",
                        textContent: pl(be(a))
                      }, null, 8, C4),
                      Ot(be(Ss), {
                        size: "x-small",
                        icon: be(Zc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Ot(be(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: _o(() => [
                      Ot(be(L4), {
                        class: "px-0",
                        weight: "quiet",
                        action: c.value ? "progressive" : "default",
                        "aria-label": S.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: p.value
                      }, {
                        default: _o(() => [
                          Ot(be(Ss), { icon: d.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Vn("div", k4, [
                Vn("div", null, [
                  Vn("span", null, [
                    Ot(be(Ss), {
                      icon: be(Eh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Vn("span", {
                      class: "pe-3",
                      textContent: pl(h.value)
                    }, null, 8, $4)
                  ]),
                  Vn("span", null, [
                    Ot(be(Ss), {
                      icon: be(dy),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    v4(Vn("span", V4, null, 512), [
                      [L, [_.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                be(w) ? (Kg(), y4("span", {
                  key: 0,
                  class: S4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": be(y)
                  }])
                }, [
                  Ot(be(Ss), {
                    icon: be(py),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Vn("span", {
                    textContent: pl(be(w))
                  }, null, 8, E4)
                ], 2)) : x4("", !0)
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
const T4 = window.Vue.resolveDirective, Wn = window.Vue.createElementVNode, Ja = window.Vue.withDirectives, B4 = window.Vue.toDisplayString, P4 = window.Vue.createTextVNode, ml = window.Vue.unref, hl = window.Vue.withCtx, fl = window.Vue.openBlock, wl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const F4 = { class: "pa-4" }, M4 = { class: "flex pt-2" }, N4 = window.Codex.CdxButton, U4 = window.Vue.ref, I4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Xo(), a = cu(), r = U4(!1), { currentTranslation: c } = Nt(), u = () => b(this, null, function* () {
      r.value = !0;
      let g = !1;
      try {
        g = yield vt.splitTranslation(
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
      const l = T4("i18n");
      return fl(), wl(ml(St), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: g.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: hl(() => [
          Wn("div", M4, [
            r.value ? (fl(), wl(ml(rt), { key: 1 })) : (fl(), wl(ml(N4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: hl(() => [
                P4(B4(g.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: hl(() => [
          Wn("div", F4, [
            Ja(Wn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ja(Wn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Wn("p", null, [
              Ja(Wn("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ja(Wn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, R4 = window.Vuex.useStore;
let Qa = [];
const uu = () => {
  const e = R4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Qa.includes(o) ? Promise.resolve() : (Qa.push(o), io.fetchLanguageTitles(t, n).then((s) => {
      Qa = Qa.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, z4 = window.Vue.ref, vo = z4(null), $f = () => {
  const e = () => b(void 0, null, function* () {
    var n, o;
    vo.value || (yield zi.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, vo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        vo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = vo.value) == null ? void 0 : n.refreshAt) <= t ? (vo.value = null, e()) : (o = vo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const Yg = window.Vue.resolveDirective, Za = window.Vue.createElementVNode, Jg = window.Vue.withDirectives, En = window.Vue.unref, ei = window.Vue.withCtx, ln = window.Vue.createVNode, _l = window.Vue.openBlock, Qg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const O4 = window.Vue.createBlock, j4 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, H4 = { class: "mb-0" }, q4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, G4 = ["src"], X4 = { class: "ma-3" }, Zg = window.Vue.computed, W4 = window.Vue.inject, K4 = window.Vue.onBeforeUnmount, Y4 = window.Vue.ref, J4 = window.Vuex.useStore, Q4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = J4(), { currentSourcePage: n } = ut(), { previousRoute: o } = Le(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: c,
      clearTranslationURLParameters: u
    } = T(), g = W4("breakpoints"), i = Zg(() => g.value.nextBreakpoint), l = Zg(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: d } = Go(), p = uu();
    d("draft"), p(s.value, r.value), lu(), $f()(), Th()(a.value);
    const f = qe(), _ = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    K4(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const w = Y4(!1);
    return (y, S) => {
      const C = Yg("i18n"), L = Yg("i18n-html");
      return _l(), Qg("section", j4, [
        ln(En(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ei(() => [
            ln(En(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ei(() => [
                Jg(Za("h5", H4, null, 512), [
                  [C, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            ln(En(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ei(() => [
                ln(En(Ne), {
                  class: "pa-0",
                  type: "icon",
                  icon: En(ia),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Za("div", q4, [
          l.value ? (_l(), Qg("img", {
            key: 0,
            src: l.value
          }, null, 8, G4)) : (_l(), O4(En(He), {
            key: 1,
            size: "120",
            icon: En(Ym),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        ln(D4),
        ln(kf),
        ln(g4, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (x) => w.value = !0)
        }),
        ln(En(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ei(() => [
            Za("p", X4, [
              Jg(Za("small", null, null, 512), [
                [L, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        ln(I4, {
          modelValue: w.value,
          "onUpdate:modelValue": S[1] || (S[1] = (x) => w.value = x)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const Z4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: Q4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, eE = window.Vue.resolveComponent, tE = window.Vue.createVNode, nE = window.Vue.normalizeClass, oE = window.Vue.openBlock, sE = window.Vue.createElementBlock;
function aE(e, t, n, o, s, a) {
  const r = eE("sx-translation-confirmer");
  return oE(), sE("main", {
    class: nE(["sx-translation-confirmer-view", a.classes])
  }, [
    tE(r)
  ], 2);
}
const iE = /* @__PURE__ */ oe(Z4, [["render", aE]]);
const rE = window.Vue.toDisplayString, ep = window.Vue.unref, lE = window.Vue.createVNode, cE = window.Vue.createTextVNode, uE = window.Vue.createElementVNode, dE = window.Vue.openBlock, gE = window.Vue.createElementBlock, pE = { class: "sx-section-selector-view-article-item" }, mE = ["href"], hE = window.Codex.CdxIcon, tp = {
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
    return (t, n) => (dE(), gE("span", pE, [
      uE("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        cE(rE(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        lE(ep(hE), {
          size: "x-small",
          icon: ep(Zc)
        }, null, 8, ["icon"])
      ], 8, mE)
    ]));
  }
};
const fE = window.Vue.resolveDirective, ti = window.Vue.createElementVNode, vl = window.Vue.withDirectives, Kn = window.Vue.unref, wE = window.Vue.toDisplayString, ni = window.Vue.withCtx, ys = window.Vue.createVNode, _E = window.Vue.openBlock, vE = window.Vue.createElementBlock, SE = { class: "sx-section-selector__header pa-4" }, yE = { class: "sx-section-selector__header-text ma-0" }, xE = ["textContent"], bE = { class: "pt-0 ma-0" }, CE = { class: "ma-0" }, kE = window.Codex.CdxButton, $E = window.Codex.CdxIcon, VE = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ge();
    return (n, o) => {
      const s = fE("i18n");
      return _E(), vE("div", SE, [
        ys(Kn(P), { class: "ma-0 pb-3" }, {
          default: ni(() => [
            ys(Kn(k), null, {
              default: ni(() => {
                var a;
                return [
                  vl(ti("h6", yE, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ti("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: wE((a = Kn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, xE)
                ];
              }),
              _: 1
            }),
            ys(Kn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ni(() => [
                ys(Kn(kE), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ni(() => [
                    ys(Kn($E), { icon: Kn(qo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vl(ti("h4", bE, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        vl(ti("p", CE, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, EE = window.Vue.renderList, LE = window.Vue.Fragment, Sl = window.Vue.openBlock, np = window.Vue.createElementBlock, AE = window.Vue.renderSlot, oi = window.Vue.unref, op = window.Vue.createVNode, sp = window.Vue.withCtx, DE = window.Vue.createBlock, TE = { class: "sx-section-selector__sections-list ma-0 pa-0" }, BE = window.Codex.CdxButton, PE = window.Codex.CdxIcon, Vf = {
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
    return (t, n) => (Sl(), np("ul", TE, [
      (Sl(!0), np(LE, null, EE(e.sections, (o) => (Sl(), DE(oi(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: sp(() => [
          op(oi(BE), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: sp(() => [
              AE(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              op(oi(PE), { icon: oi(ga) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, FE = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const ME = window.Vue.resolveDirective, si = window.Vue.createElementVNode, yl = window.Vue.withDirectives, Et = window.Vue.unref, ap = window.Vue.toDisplayString, So = window.Vue.withCtx, xl = window.Vue.openBlock, ip = window.Vue.createBlock;
window.Vue.createCommentVNode;
const xs = window.Vue.createVNode, NE = window.Vue.createTextVNode, UE = window.Vue.createElementBlock, IE = { class: "sx-section-selector__missing-sections py-2" }, RE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, zE = ["lang", "dir", "textContent"], rp = window.Vue.computed, OE = window.Codex.CdxButton, jE = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Ge(), { targetLanguageURLParameter: n } = T(), o = rp(() => R.getAutonym(n.value)), s = rp(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const c = ME("i18n");
      return xl(), UE("section", IE, [
        yl(si("h4", RE, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (xl(), ip(Et(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: So(() => [
            xs(Et(k), {
              class: "py-6 justify-center",
              innerHTML: Et(FE)
            }, null, 8, ["innerHTML"]),
            xs(Et(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: So(() => [
                yl(si("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            xs(Et(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: So(() => [
                yl(si("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            xs(Et(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: So(() => [
                xs(Et(OE), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: So(() => [
                    NE(ap(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (xl(), ip(Vf, {
          key: 0,
          sections: Et(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: So(({ sourceSection: u }) => {
            var g, i;
            return [
              si("h5", {
                class: "ma-0",
                lang: (g = Et(t)) == null ? void 0 : g.sourceLanguage,
                dir: Et(R.getDir)((i = Et(t)) == null ? void 0 : i.sourceLanguage),
                textContent: ap(u)
              }, null, 8, zE)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const HE = window.Vue.resolveDirective, ai = window.Vue.createElementVNode, qE = window.Vue.withDirectives, Yn = window.Vue.unref, lp = window.Vue.toDisplayString, GE = window.Vue.withCtx, XE = window.Vue.createVNode, WE = window.Vue.openBlock, KE = window.Vue.createElementBlock, YE = { class: "sx-section-selector__present-sections py-2" }, JE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, QE = { class: "sx-section-selector__present-section-button-content" }, ZE = ["lang", "dir", "textContent"], e3 = ["lang", "dir", "textContent"], t3 = window.Vue.computed, cp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Ge(), { targetLanguageURLParameter: n } = T(), o = t3(() => R.getAutonym(n.value));
    return (s, a) => {
      var c;
      const r = HE("i18n");
      return WE(), KE("section", YE, [
        qE(ai("h4", JE, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        XE(Vf, {
          sections: ((c = Yn(t)) == null ? void 0 : c.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: GE(({ sourceSection: u, targetSection: g }) => {
            var i, l, d, p;
            return [
              ai("div", QE, [
                ai("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Yn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Yn(R.getDir)((l = Yn(t)) == null ? void 0 : l.sourceLanguage),
                  textContent: lp(u)
                }, null, 8, ZE),
                ai("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (d = Yn(t)) == null ? void 0 : d.targetLanguage,
                  dir: Yn(R.getDir)((p = Yn(t)) == null ? void 0 : p.targetLanguage),
                  textContent: lp(g)
                }, null, 8, e3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Fe = window.Vue.createVNode, bl = window.Vue.openBlock, up = window.Vue.createBlock, dp = window.Vue.createCommentVNode, n3 = window.Vue.resolveDirective, Ln = window.Vue.createElementVNode, bs = window.Vue.withDirectives, et = window.Vue.unref, cn = window.Vue.withCtx, o3 = window.Vue.normalizeClass, gp = window.Vue.toDisplayString, pp = window.Vue.createTextVNode, s3 = window.Vue.createElementBlock, a3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, i3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, r3 = { class: "sx-section-selector__additional-consideration-title" }, l3 = { href: "#" }, c3 = { class: "sx-section-selector__additional-consideration-title" }, u3 = { href: "#" }, Cs = window.Vue.computed, d3 = window.Vue.inject, g3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = d3("breakpoints"), n = Cs(() => t.value.desktopAndUp), { sectionSuggestion: o } = Ge(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: c
    } = T(), u = Cs(() => R.getAutonym(s.value)), g = Cs(() => R.getAutonym(a.value)), i = Cs(
      () => {
        var y;
        return J.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), l = Cs(
      () => {
        var y;
        return J.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), d = qe(), p = () => {
      r(), d.push({ name: "dashboard" });
    }, { currentTranslation: m } = Nt(), h = Xo(), f = cu(), { selectPageSectionByTitle: _ } = Wi(), w = (y) => {
      c(y), m.value ? (f(), h()) : (_(y), d.push({ name: "sx-content-comparator" }));
    };
    return (y, S) => {
      const C = n3("i18n");
      return bl(), s3("section", a3, [
        Fe(VE, { onClose: p }),
        Fe(kf),
        Fe(et(P), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: cn(() => [
            Fe(et(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: cn(() => [
                Fe(jE, {
                  onSelectSection: w,
                  onClose: p
                }),
                n.value ? dp("", !0) : (bl(), up(cp, {
                  key: 0,
                  onSelectSection: w
                })),
                Ln("section", {
                  class: o3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  bs(Ln("h4", i3, null, 512), [
                    [C, [
                      g.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Fe(et(P), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: cn(() => [
                      Fe(et(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: cn(() => [
                          Fe(tp, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Fe(et(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: cn(() => [
                          Fe(tp, {
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
                Fe(et(P), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: cn(() => [
                    Fe(et(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: cn(() => [
                        Ln("h6", r3, [
                          Fe(et(He), {
                            icon: et(L0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          pp(" " + gp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        bs(Ln("p", null, null, 512), [
                          [C, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        bs(Ln("a", l3, null, 512), [
                          [C, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Fe(et(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: cn(() => [
                        Ln("h6", c3, [
                          Fe(et(He), {
                            icon: et(E0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          pp(" " + gp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        bs(Ln("p", null, null, 512), [
                          [C, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        bs(Ln("a", u3, null, 512), [
                          [C, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? (bl(), up(et(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: cn(() => [
                Fe(cp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: w
                })
              ]),
              _: 1
            })) : dp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, p3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: g3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, m3 = window.Vue.resolveComponent, h3 = window.Vue.createVNode, f3 = window.Vue.normalizeClass, w3 = window.Vue.openBlock, _3 = window.Vue.createElementBlock;
function v3(e, t, n, o, s, a) {
  const r = m3("sx-section-selector");
  return w3(), _3("main", {
    class: f3(["sx-section-selector-view", a.classes])
  }, [
    h3(r)
  ], 2);
}
const S3 = /* @__PURE__ */ oe(p3, [["render", v3]]), y3 = window.Vue.ref, Ef = y3("expand"), x3 = (e) => {
  Ef.value = e;
}, Lf = () => ({
  existingSectionPublishOption: Ef,
  setExistingSectionPublishOption: x3
}), ks = window.Vue.computed, b3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    sectionURLParameter: n
  } = T(), o = ks(
    () => R.getAutonym(e.value)
  ), s = ks(
    () => R.getAutonym(t.value)
  ), { sectionSuggestion: a } = Ge(), { existingSectionPublishOption: r } = Lf(), c = ks(
    () => {
      var i;
      return !!((i = a.value) != null && i.presentSections.hasOwnProperty(n.value));
    }
  ), u = ks(
    () => c.value && r.value === "expand"
  ), g = de();
  return ks(() => {
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
const mp = window.Vue.unref, C3 = window.Vue.createVNode, k3 = window.Vue.openBlock, $3 = window.Vue.createElementBlock, V3 = { class: "sx-content-comparator__content-type-selector" }, E3 = window.Vue.watchEffect, L3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = b3();
    return E3(() => {
      a.value.map((c) => c.value).includes(n.selection) || s(a.value[0].value);
    }), (r, c) => (k3(), $3("div", V3, [
      C3(mp(aa), {
        items: mp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, $s = window.Vue.computed, A3 = window.Vuex.useStore, ee = () => {
  const e = A3(), { currentSourcePage: t, currentTargetPage: n } = ut(), { currentMTProvider: o } = Le(e), { sectionURLParameter: s } = T(), a = $s(() => {
    var i, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = $s(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), c = $s(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = $s(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = $s(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: g
  };
}, Vs = window.Vue.computed, du = () => {
  const { currentTargetPage: e } = ut(), { sectionSuggestion: t } = Ge(), { sectionURLParameter: n } = T(), o = Vs(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = Vs(
    () => {
      var g;
      return (((g = a.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), a = Vs(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.getSectionByTitle(o.value);
    }
  ), { sourceSection: r } = ee(), c = Vs(() => {
    var g;
    return (g = r.value) == null ? void 0 : g.html;
  }), u = Vs(() => {
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
const ii = window.Vue.createVNode, D3 = window.Vue.toDisplayString, T3 = window.Vue.createElementVNode, An = window.Vue.unref, ri = window.Vue.withCtx, Cl = window.Vue.openBlock, kl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const B3 = window.Vue.normalizeClass, P3 = ["lang", "dir", "textContent"], hp = window.Vue.ref, $l = window.Vue.computed, F3 = window.Vue.onMounted, M3 = {
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
    const n = e, o = t, s = hp(!1), { sectionSuggestion: a } = Ge(), { sectionURLParameter: r } = T(), c = $l(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: i } = du(), l = $l(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${J.getPageUrl(
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
    }), d = $l(
      () => J.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = hp(null);
    return F3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Cl(), kl(An(P), {
      ref_key: "contentHeader",
      ref: p,
      class: B3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: ri(() => [
        ii(L3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        ii(An(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: ri(() => [
            ii(An(k), null, {
              default: ri(() => [
                T3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: D3(l.value.title)
                }, null, 8, P3)
              ]),
              _: 1
            }),
            ii(An(k), { shrink: "" }, {
              default: ri(() => [
                s.value ? (Cl(), kl(An(Ne), {
                  key: 0,
                  icon: An(Fi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Cl(), kl(An(Ne), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: An(Wm),
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
}, li = window.Vue.unref, fp = window.Vue.createVNode, N3 = window.Vue.openBlock, U3 = window.Vue.createElementBlock, I3 = { class: "sx-content-comparator__header-navigation flex items-center" }, R3 = window.Vue.computed, z3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = T(), o = R3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Wi(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    }, r = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    };
    return (c, u) => (N3(), U3("div", I3, [
      fp(li(Ne), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: li(C0),
        onClick: a
      }, null, 8, ["icon"]),
      fp(li(Ne), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: li(b0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const wp = window.Vue.toDisplayString, O3 = window.Vue.resolveDirective, Vl = window.Vue.withDirectives, yo = window.Vue.openBlock, ci = window.Vue.createElementBlock, j3 = window.Vue.createCommentVNode, H3 = window.Vue.createTextVNode, _p = window.Vue.createElementVNode, jt = window.Vue.unref, q3 = window.Vue.normalizeClass, El = window.Vue.withCtx, Ll = window.Vue.createVNode, vp = window.Vue.createBlock, G3 = { class: "sx-content-comparator-header__mapped-section" }, X3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, W3 = { key: 0 }, K3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Y3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Sp = window.Vue.computed, J3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { sectionSuggestion: t } = Ge(), { activeSectionTargetTitle: n } = du(), o = de(), { existingSectionPublishOption: s, setExistingSectionPublishOption: a } = Lf(), r = Sp(
      () => s.value === "new"
    ), c = Sp(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(t.value.targetLanguage)
      )
    );
    return (u, g) => {
      const i = O3("i18n");
      return yo(), ci("div", G3, [
        Ll(jt(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: El(() => [
            Ll(jt(k), { grow: "" }, {
              default: El(() => [
                _p("h6", X3, [
                  H3(wp(c.value) + " ", 1),
                  r.value ? Vl((yo(), ci("span", W3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : j3("", !0)
                ]),
                _p("h6", {
                  class: q3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": r.value
                  }])
                }, wp(jt(n)), 3)
              ]),
              _: 1
            }),
            Ll(jt(k), { shrink: "" }, {
              default: El(() => [
                r.value ? (yo(), vp(jt(Ne), {
                  key: 1,
                  class: "pa-0",
                  icon: jt(T0),
                  type: "icon",
                  onClick: g[1] || (g[1] = (l) => jt(a)("expand"))
                }, null, 8, ["icon"])) : (yo(), vp(jt(Ne), {
                  key: 0,
                  class: "pa-0",
                  icon: jt(Xm),
                  type: "icon",
                  onClick: g[0] || (g[0] = (l) => jt(a)("new"))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? Vl((yo(), ci("p", Y3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Vl((yo(), ci("p", K3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const Be = window.Vue.unref, xo = window.Vue.createVNode, yp = window.Vue.toDisplayString, wn = window.Vue.createElementVNode, Al = window.Vue.withCtx, Q3 = window.Vue.resolveDirective, xp = window.Vue.withDirectives, Dl = window.Vue.openBlock, bp = window.Vue.createBlock, Cp = window.Vue.createCommentVNode, Z3 = window.Vue.createElementBlock, e5 = { class: "sx-content-comparator__header pa-4" }, t5 = { class: "row my-1 py-2 mx-0 gap-6" }, n5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, o5 = { class: "sx-content-comparator-header__titles shrink" }, s5 = ["lang", "dir"], a5 = ["lang", "dir"], i5 = { class: "py-2 mb-1" }, r5 = /* @__PURE__ */ wn("br", null, null, -1), Es = window.Vue.computed, l5 = window.Vue.inject, c5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = T(), { sourceSection: n } = ee(), { sectionSuggestion: o } = Ge(), s = Es(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.missingSections.hasOwnProperty(t.value);
      }
    ), a = Es(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.presentSections.hasOwnProperty(t.value);
      }
    ), r = Es(() => {
      var g;
      return (g = n.value) == null ? void 0 : g.html;
    }), c = Es(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), u = l5("breakpoints");
    return Es(() => u.value.mobile), (g, i) => {
      const l = Q3("i18n");
      return Dl(), Z3("div", e5, [
        xo(Be(Ne), {
          class: "py-2 pa-0",
          icon: Be(k0),
          label: g.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (d) => g.$emit("close"))
        }, null, 8, ["icon", "label"]),
        wn("div", t5, [
          wn("div", n5, [
            wn("div", o5, [
              wn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Be(o).sourceLanguage,
                dir: Be(R.getDir)(Be(o).sourceLanguage)
              }, yp(Be(o).sourceTitle), 9, s5),
              wn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Be(o).sourceLanguage,
                dir: Be(R.getDir)(Be(o).sourceLanguage)
              }, yp(Be(t)), 9, a5)
            ]),
            xo(z3, { "section-source-titles": c.value }, null, 8, ["section-source-titles"])
          ]),
          wn("div", i5, [
            xo(Be(Ne), {
              icon: Be(Fi),
              progressive: "",
              label: g.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (d) => g.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (Dl(), bp(Be(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Al(() => [
            xo(Be(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Al(() => [
                xo(Be(He), { icon: Be(A0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            xo(Be(k), { class: "ma-0" }, {
              default: Al(() => [
                xp(wn("strong", null, null, 512), [
                  [l, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                r5,
                xp(wn("span", null, null, 512), [
                  [l, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Cp("", !0),
        a.value ? (Dl(), bp(J3, { key: 1 })) : Cp("", !0)
      ]);
    };
  }
};
const kp = window.Vue.toDisplayString, u5 = window.Vue.createElementVNode, $p = window.Vue.openBlock, Vp = window.Vue.createElementBlock, d5 = window.Vue.createCommentVNode, g5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, p5 = ["textContent"], m5 = ["textContent"], Af = {
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
    return (t, n) => ($p(), Vp("section", g5, [
      u5("h5", {
        textContent: kp(e.placeholderTitle)
      }, null, 8, p5),
      e.placeholderSubtitle ? ($p(), Vp("p", {
        key: 0,
        textContent: kp(e.placeholderSubtitle)
      }, null, 8, m5)) : d5("", !0)
    ]));
  }
}, h5 = window.Vue.computed, f5 = window.Vue.createApp, w5 = window.Vuex.useStore, _5 = () => {
  const e = w5(), { sectionSuggestion: t } = Ge(), { currentTargetPage: n } = ut(), o = de(), s = () => f5(
    Af,
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
  return h5(() => {
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
const Tl = window.Vue.createVNode, tt = window.Vue.unref, bo = window.Vue.openBlock, Ep = window.Vue.createBlock, Lp = window.Vue.createCommentVNode, ui = window.Vue.createElementVNode, Bl = window.Vue.Fragment, di = window.Vue.createElementBlock, v5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, S5 = { class: "sx-content-comparator__source-content" }, y5 = ["lang", "dir", "innerHTML"], x5 = ["lang", "dir", "innerHTML"], b5 = ["innerHTML"], C5 = window.Vue.ref, k5 = window.Vue.computed, $5 = window.Vue.watch, V5 = window.Vuex.useStore, E5 = {
  __name: "SXContentComparator",
  setup(e) {
    V5();
    const t = qe(), n = C5("source_section"), { logDashboardTranslationStartEvent: o } = Xi(), s = Xo(), a = () => t.push({ name: "sx-section-selector" }), r = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      pageURLParameter: g,
      sectionURLParameter: i
    } = T(), { activeSectionTargetTitle: l, sourceSectionContent: d, targetSectionContent: p } = du(), m = _5(), { sectionSuggestion: h } = Ge(), f = k5(() => h.value.targetTitle), _ = Cf();
    return $5(
      f,
      () => _(
        u.value,
        c.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, y) => (bo(), di("section", v5, [
      Tl(c5, {
        onTranslationButtonClicked: r,
        onClose: a
      }),
      Tl(M3, {
        "content-type-selection": n.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (S) => n.value = S),
        onTranslationButtonClicked: r
      }, null, 8, ["content-type-selection"]),
      ui("section", S5, [
        n.value === "source_section" ? (bo(), di(Bl, { key: 0 }, [
          tt(d) ? Lp("", !0) : (bo(), Ep(tt(rt), { key: 0 })),
          ui("section", {
            lang: tt(c),
            dir: tt(R.getDir)(tt(c)),
            class: "pt-2 px-4",
            innerHTML: tt(d)
          }, null, 8, y5)
        ], 64)) : n.value === "target_article" ? (bo(), di(Bl, { key: 1 }, [
          tt(m) ? Lp("", !0) : (bo(), Ep(tt(rt), { key: 0 })),
          ui("article", {
            lang: tt(u),
            dir: tt(R.getDir)(tt(u)),
            class: "px-4",
            innerHTML: tt(m)
          }, null, 8, x5)
        ], 64)) : (bo(), di(Bl, { key: 2 }, [
          ui("section", {
            class: "pa-4",
            innerHTML: tt(p)
          }, null, 8, b5),
          Tl(Af, {
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
}, A5 = window.Vue.resolveComponent, D5 = window.Vue.createVNode, T5 = window.Vue.normalizeClass, B5 = window.Vue.openBlock, P5 = window.Vue.createElementBlock;
function F5(e, t, n, o, s, a) {
  const r = A5("sx-content-comparator");
  return B5(), P5("main", {
    class: T5(["sx-content-comparator-view", a.classes])
  }, [
    D5(r)
  ], 2);
}
const M5 = /* @__PURE__ */ oe(L5, [["render", F5]]);
const N5 = window.Vue.resolveDirective, Ls = window.Vue.createElementVNode, Ap = window.Vue.withDirectives, gi = window.Vue.unref, Pl = window.Vue.createVNode, Dp = window.Vue.toDisplayString, Tp = window.Vue.createTextVNode, As = window.Vue.withCtx, U5 = window.Vue.openBlock, I5 = window.Vue.createBlock, R5 = { class: "mw-ui-dialog__header px-4 py-3" }, z5 = { class: "mw-ui-dialog__header-title" }, O5 = { class: "pa-4" }, j5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Bp = window.Codex.CdxButton, H5 = {
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
      const u = N5("i18n");
      return U5(), I5(gi(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: As(() => [
          Ls("div", R5, [
            Ap(Ls("span", z5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: As(() => [
          Ls("div", j5, [
            Pl(gi(Bp), {
              weight: "quiet",
              onClick: s
            }, {
              default: As(() => [
                Tp(Dp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Pl(gi(Bp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: As(() => [
                Tp(Dp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: As(() => [
          Pl(gi(Pi)),
          Ls("div", O5, [
            Ap(Ls("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, q5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => so(a)
  );
  return s && th(s) ? vt.parseTemplateWikitext(
    Zm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Df = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => so(a)
  );
  return s ? vt.parseTemplateWikitext(
    Zm(s),
    n,
    t
  ) : Promise.resolve(null);
}, G5 = window.Vuex.useStore, gu = () => {
  const e = G5(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = $f(), r = (i, l, d) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[l] = d;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof it ? p.blockTemplateProposedTranslations[l] = d : p instanceof Nn && p.addProposedTranslation(l, d);
  }, c = (i, l) => b(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const p = yield a();
      return yield vt.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        l,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (i, l) => b(void 0, null, function* () {
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
    ), m = (yield q5(
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
}, X5 = window.Vuex.useStore, W5 = () => {
  const { sourceSection: e } = ee(), t = X5(), { translateTranslationUnitById: n } = gu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function K5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const Y5 = window.Vue.resolveDirective, at = window.Vue.createElementVNode, pi = window.Vue.withDirectives, ze = window.Vue.unref, Fl = window.Vue.createVNode, un = window.Vue.withCtx, J5 = window.Vue.renderList, Q5 = window.Vue.Fragment, mi = window.Vue.openBlock, Z5 = window.Vue.createElementBlock, eL = window.Vue.toDisplayString, Ml = window.Vue.createBlock, Pp = window.Vue.createCommentVNode, tL = { class: "mw-ui-dialog__header pa-4" }, nL = { class: "row ma-0 py-2" }, oL = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, sL = { class: "mb-0" }, aL = { class: "col shrink justify-center" }, iL = { class: "pb-2 mb-0" }, rL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, lL = ["dir", "lang", "innerHTML"], cL = ["textContent"], uL = ["innerHTML"], dL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, gL = /* @__PURE__ */ at("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), pL = ["innerHTML"], Nl = window.Vue.computed, mL = window.Vuex.useStore, hL = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = Z.EMPTY_TEXT_PROVIDER_KEY, s = Z.ORIGINAL_TEXT_PROVIDER_KEY, a = mL(), {
      sourceSection: r,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: u
    } = ee(), {
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: i
    } = T(), l = Nl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        i.value
      )
    ), d = Nl(() => {
      const S = [s, o];
      return l.value.filter(
        (C) => !S.includes(C)
      );
    }), p = Nl(
      () => c.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = W5(), h = (S) => {
      m(S), _();
    }, f = Z.getMTProviderLabel, _ = () => n("update:active", !1), w = de(), y = K5(
      w.i18n("cx-tools-mt-noservices")
    );
    return (S, C) => {
      const L = Y5("i18n");
      return e.active ? (mi(), Ml(ze(St), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: un(() => [
          at("div", tL, [
            at("div", nL, [
              at("div", oL, [
                pi(at("h4", sL, null, 512), [
                  [L, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              at("div", aL, [
                Fl(ze(Ne), {
                  type: "icon",
                  icon: ze(ia),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            pi(at("h6", iL, null, 512), [
              [L, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: un(() => [
          Fl(ze(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: C[0] || (C[0] = (x) => h(ze(s)))
          }, {
            header: un(() => [
              pi(at("h5", rL, null, 512), [
                [L, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: un(() => [
              at("p", {
                dir: ze(R.getDir)(ze(g)),
                lang: ze(g),
                innerHTML: p.value[ze(s)]
              }, null, 8, lL)
            ]),
            _: 1
          }),
          (mi(!0), Z5(Q5, null, J5(d.value, (x) => (mi(), Ml(ze(Je), {
            key: x,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (M) => h(x)
          }, {
            header: un(() => [
              at("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: eL(ze(f)(x))
              }, null, 8, cL)
            ]),
            default: un(() => [
              at("p", {
                innerHTML: p.value[x]
              }, null, 8, uL)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Fl(ze(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: C[1] || (C[1] = (x) => h(ze(o)))
          }, {
            header: un(() => [
              pi(at("h5", dL, null, 512), [
                [L, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: un(() => [
              gL
            ]),
            _: 1
          }),
          d.value.length ? Pp("", !0) : (mi(), Ml(ze(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: un(() => [
              at("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: ze(y)
              }, null, 8, pL)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Pp("", !0);
    };
  }
}, fL = window.Vuex.useStore, Wo = () => {
  const { sourceSection: e } = ee(), t = fL(), { translateTranslationUnitById: n } = gu(), { currentMTProvider: o } = Le(t), s = (c) => b(void 0, null, function* () {
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
const wL = window.Vue.toDisplayString, Ul = window.Vue.createElementVNode, Il = window.Vue.unref, _L = window.Vue.createVNode, vL = window.Vue.normalizeClass, SL = window.Vue.withCtx, yL = window.Vue.openBlock, xL = window.Vue.createBlock, bL = ["href"], CL = ["textContent"], kL = ["innerHTML"], Co = window.Vue.computed, $L = window.Vuex.useStore, Fp = "sx-sentence-selector__section-title", VL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = $L(), { sourceSection: n, isSectionTitleSelected: o } = ee(), { currentSourcePage: s } = ut(), { sourceLanguage: a } = Le(t), r = Co(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = Co(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), u = Co(
      () => J.getPageUrl(a.value, r.value)
    ), g = Co(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = Co(
      () => g.value ? "translated" : "selected"
    ), l = Co(() => {
      const m = [Fp];
      return o.value && m.push(`${Fp}--${i.value}`), m;
    }), { selectTranslationUnitById: d } = Wo(), p = () => d(0);
    return (m, h) => (yL(), xL(Il(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: SL(() => [
        Ul("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Ul("strong", {
            textContent: wL(r.value)
          }, null, 8, CL),
          _L(Il(He), {
            icon: Il(Wm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, bL),
        Ul("h2", {
          class: vL(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, kL)
      ]),
      _: 1
    }));
  }
};
const Ht = window.Vue.unref, Ds = window.Vue.createVNode, hi = window.Vue.withCtx, Mp = window.Vue.toDisplayString, Np = window.Vue.createTextVNode, EL = window.Vue.openBlock, LL = window.Vue.createBlock, AL = window.Vue.computed, Rl = window.Codex.CdxButton, Up = window.Codex.CdxIcon, Tf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ee(), s = AL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (EL(), LL(Ht(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: hi(() => [
        Ds(Ht(Rl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Ht(n),
          onClick: r[0] || (r[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: hi(() => [
            Ds(Ht(Up), {
              class: "me-1",
              icon: Ht(eu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ds(Ht(Rl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Ht(o),
          onClick: r[1] || (r[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: hi(() => [
            Np(Mp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ds(Ht(Rl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: hi(() => [
            Np(Mp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ds(Ht(Up), {
              class: "ms-1",
              size: "small",
              icon: Ht(ga)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Jn = window.Vue.unref, DL = window.Vue.toDisplayString, Ts = window.Vue.createVNode, fi = window.Vue.withCtx, TL = window.Vue.openBlock, BL = window.Vue.createBlock, zl = window.Vue.computed, PL = window.Vuex.useStore, FL = window.Codex.CdxButton, ML = window.Codex.CdxIcon, NL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = PL(), n = zl(() => t.state.application.currentMTProvider), o = de(), s = zl(() => ({
      [Z.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Z.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = zl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Z.getMTProviderLabel(n.value)
      )
    );
    return (r, c) => (TL(), BL(Jn(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: fi(() => [
        Ts(Jn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: fi(() => [
            Ts(Jn(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: DL(a.value)
            }, null, 8, ["textContent"]),
            Ts(Jn(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: fi(() => [
                Ts(Jn(FL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: fi(() => [
                    Ts(Jn(ML), {
                      class: "pa-0",
                      icon: Jn(Qc)
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
const Lt = window.Vue.unref, Dn = window.Vue.createVNode, UL = window.Vue.resolveDirective, Ip = window.Vue.createElementVNode, IL = window.Vue.withDirectives, Rp = window.Vue.toDisplayString, zp = window.Vue.createTextVNode, Bs = window.Vue.withCtx, RL = window.Vue.openBlock, zL = window.Vue.createElementBlock, OL = { class: "mt-retry-body pb-5" }, jL = { class: "retry-body__message" }, Op = window.Codex.CdxButton, Ol = window.Codex.CdxIcon, HL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = UL("i18n");
      return RL(), zL("div", OL, [
        Ip("div", jL, [
          Dn(Lt(Ol), {
            class: "me-2",
            icon: Lt(xh)
          }, null, 8, ["icon"]),
          IL(Ip("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Dn(Lt(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Bs(() => [
            Dn(Lt(k), { cols: "6" }, {
              default: Bs(() => [
                Dn(Lt(Op), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Bs(() => [
                    Dn(Lt(Ol), {
                      class: "me-1",
                      icon: Lt(Lh)
                    }, null, 8, ["icon"]),
                    zp(" " + Rp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Dn(Lt(k), { cols: "6" }, {
              default: Bs(() => [
                Dn(Lt(Op), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Bs(() => [
                    Dn(Lt(Ol), {
                      class: "me-1",
                      icon: Lt(yy)
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
const ko = window.Vue.createVNode, nt = window.Vue.unref, Ps = window.Vue.openBlock, qL = window.Vue.createElementBlock, GL = window.Vue.createCommentVNode, wi = window.Vue.createBlock, XL = window.Vue.normalizeClass, WL = window.Vue.normalizeStyle, Fs = window.Vue.withCtx, KL = window.Vue.toDisplayString, YL = window.Vue.createTextVNode, JL = window.Vue.normalizeProps, QL = window.Vue.guardReactiveProps, ZL = ["lang", "dir", "innerHTML"], jl = window.Vue.ref, eA = window.Vue.onMounted, tA = window.Vue.onBeforeUnmount, Hl = window.Vue.computed, nA = window.Vue.nextTick, oA = window.Vuex.useStore, sA = window.Codex.CdxButton, aA = window.Codex.CdxIcon, iA = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = jl(0), n = jl(null), o = jl(null), s = oA(), { currentMTProvider: a } = Le(s), { targetLanguageURLParameter: r } = T(), { sourceSection: c, currentProposedTranslation: u } = ee(), g = Hl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Hl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = Hl(
      () => !!u.value || a.value === Z.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    eA(() => b(this, null, function* () {
      yield nA(), d(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), tA(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => d());
    return (m, h) => (Ps(), wi(nt(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Fs(() => [
        ko(nt(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Fs(() => [
            ko(NL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            ko(nt(k), {
              class: XL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && g.value
              }]),
              style: WL(l.value ? i.value : null)
            }, {
              default: Fs(() => [
                l.value ? (Ps(), qL("section", {
                  key: 0,
                  lang: nt(r),
                  dir: nt(R.getDir)(nt(r)),
                  innerHTML: nt(u)
                }, null, 8, ZL)) : g.value ? (Ps(), wi(nt(rt), { key: 1 })) : (Ps(), wi(HL, {
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
              default: Fs(() => [
                l.value || g.value ? (Ps(), wi(nt(sA), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", nt(u)))
                }, {
                  default: Fs(() => [
                    ko(nt(aA), {
                      class: "me-1",
                      icon: nt(Jc)
                    }, null, 8, ["icon"]),
                    YL(" " + KL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : GL("", !0),
                ko(Tf, JL(QL(m.$attrs)), null, 16)
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
}, rA = window.Vue.computed, lA = (e) => rA(() => {
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
const cA = window.Vue.unref, uA = window.Vue.normalizeClass, dA = window.Vue.openBlock, gA = window.Vue.createElementBlock, pA = ["innerHTML"], mA = window.Vue.onMounted, hA = window.Vue.ref, fA = window.Vue.computed, wA = {
  __name: "SubSection",
  props: {
    subSection: {
      type: it,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = hA(null), a = lA(n.subSection);
    mA(() => {
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
    const { selectTranslationUnitById: r } = Wo(), c = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      r(g.id);
    }, u = fA(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, i) => (dA(), gA("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: uA(["sx-sentence-selector__subsection", u.value]),
      innerHTML: cA(a)
    }, null, 10, pA));
  }
};
const jp = window.Vue.unref, Hp = window.Vue.createVNode, qp = window.Vue.normalizeStyle, _A = window.Vue.openBlock, vA = window.Vue.createElementBlock, Gp = window.Vue.computed, Bf = {
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
      () => !t.isTemplateAdapted || t.percentage === 0 ? Km : Ai
    );
    return (s, a) => (_A(), vA("div", {
      class: "block-template-status-indicator",
      style: qp(n.value)
    }, [
      Hp(jp(f_), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Hp(jp(He), {
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
const Tn = window.Vue.unref, _i = window.Vue.createVNode, ql = window.Vue.withCtx, SA = window.Vue.openBlock, yA = window.Vue.createBlock, xA = window.Vue.computed, Xp = window.Codex.CdxButton, Wp = window.Codex.CdxIcon, Pf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ee(), o = xA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (SA(), yA(Tn(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: ql(() => [
        _i(Tn(Xp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Tn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: ql(() => [
            _i(Tn(Wp), { icon: Tn(eu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        _i(Tn(Xp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: ql(() => [
            _i(Tn(Wp), { icon: Tn(ga) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Ms = window.Vue.openBlock, vi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const dn = window.Vue.unref, $o = window.Vue.withCtx, Ns = window.Vue.createVNode, Gl = window.Vue.toDisplayString, Xl = window.Vue.createElementVNode, bA = window.Vue.renderList, CA = window.Vue.Fragment, kA = window.Vue.createElementBlock, $A = { class: "pa-4" }, VA = ["textContent"], EA = ["textContent"], LA = window.Vuex.useStore, Si = window.Vue.computed, AA = {
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
    const t = e, { targetLanguageAutonym: n } = Le(LA()), o = Si(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = de(), a = Si(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = Si(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), c = Si(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: M0,
          color: wt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: ia,
          color: wt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Ai,
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
          icon: Ai,
          color: wt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Fi,
        color: wt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: _0,
        color: wt.gray500
      }), u;
    });
    return (u, g) => (Ms(), vi(dn(St), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (i) => u.$emit("update:active", i))
    }, {
      header: $o(() => [
        Ns(dn(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: $o(() => [
            Ns(dn(k), { shrink: "" }, {
              default: $o(() => [
                e.targetTemplateExists ? (Ms(), vi(Bf, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Ms(), vi(dn(He), {
                  key: 1,
                  icon: dn(v0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: $o(() => [
        Xl("div", $A, [
          Xl("h3", {
            textContent: Gl(a.value)
          }, null, 8, VA),
          Xl("p", {
            class: "mt-6 text-small",
            textContent: Gl(r.value)
          }, null, 8, EA),
          (Ms(!0), kA(CA, null, bA(c.value, (i, l) => (Ms(), vi(dn(P), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: $o(() => [
              Ns(dn(k), { shrink: "" }, {
                default: $o(() => [
                  Ns(dn(He), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Ns(dn(k), {
                textContent: Gl(i.text)
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
const Ee = window.Vue.unref, Oe = window.Vue.createVNode, qt = window.Vue.withCtx, Wl = window.Vue.toDisplayString, Kp = window.Vue.createTextVNode, DA = window.Vue.resolveDirective, Yp = window.Vue.withDirectives, Jp = window.Vue.createElementVNode, TA = window.Vue.normalizeClass, Vo = window.Vue.openBlock, Qp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const yi = window.Vue.createBlock, Zp = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const em = window.Vue.mergeProps, BA = { class: "block-template-adaptation-card__container pa-4" }, PA = ["textContent"], FA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, je = window.Vue.computed, MA = window.Vue.ref, NA = window.Vuex.useStore, tm = window.Codex.CdxButton, nm = window.Codex.CdxIcon, UA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = NA(), { targetLanguageAutonym: n, currentMTProvider: o } = Le(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = ee(), r = je(() => {
      var A;
      return (A = s.value) == null ? void 0 : A.isTranslated;
    }), c = je(() => {
      var B;
      return ((B = s.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), u = je(
      () => {
        var A;
        return (A = s.value) == null ? void 0 : A.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), g = je(
      () => {
        var A;
        return !((A = t.state.application.mtRequestsPending) != null && A.includes(
          s.value.id
        ));
      }
    ), i = de(), l = je(
      // Strip HTML comments and return
      () => {
        var A, B;
        return ((B = (A = s.value) == null ? void 0 : A.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), d = je(
      () => {
        var A, B;
        return (B = (A = s.value) == null ? void 0 : A.blockTemplateAdaptationInfo) == null ? void 0 : B[o.value];
      }
    ), p = je(
      () => {
        var A, B;
        return ((A = d.value) == null ? void 0 : A.adapted) || !!((B = d.value) != null && B.partial);
      }
    ), m = je(() => d.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = je(() => d.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = je(
      () => {
        var A;
        return Object.keys(((A = s.value) == null ? void 0 : A.sourceTemplateParams) || {}).length;
      }
    ), _ = je(() => {
      var B;
      const A = (B = s.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(A || {});
    }), w = je(() => _.value.length), y = je(() => {
      const A = x.value;
      return f.value + A === 0 ? 100 : w.value / (f.value + A) * 100 || 0;
    }), S = MA(!1), C = () => {
      S.value = !0;
    }, L = (A) => A.filter((B) => !_.value.includes(B)), x = je(() => {
      var B;
      const A = ((B = d.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return L(A).length;
    }), M = je(() => {
      var B;
      const A = ((B = d.value) == null ? void 0 : B.optionalTargetParams) || [];
      return L(A).length;
    });
    return (A, B) => {
      const U = DA("i18n");
      return Vo(), yi(Ee(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: qt(() => [
          Jp("div", BA, [
            Oe(Ee(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: qt(() => [
                Oe(Ee(k), { shrink: "" }, {
                  default: qt(() => [
                    Oe(Ee(nm), {
                      icon: Ee(xy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Oe(Ee(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: qt(() => [
                    Kp(Wl(l.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Vo(), Qp("div", {
              key: 0,
              class: TA(["pa-4 mb-4", m.value])
            }, [
              Oe(Ee(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: qt(() => [
                  Yp(Oe(Ee(k), { tag: "h5" }, null, 512), [
                    [U, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Oe(Ee(k), { shrink: "" }, {
                    default: qt(() => [
                      Oe(Bf, {
                        percentage: y.value,
                        size: 20,
                        "is-template-adapted": p.value,
                        "stroke-width": 2,
                        onClick: C
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Jp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Wl(u.value)
              }, null, 8, PA),
              Oe(Ee(tm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (W) => A.$emit("edit-translation", c.value))
              }, {
                default: qt(() => [
                  Kp(Wl(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : g.value ? (Vo(), Qp("div", FA, [
              Oe(Ee(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: qt(() => [
                  Yp(Oe(Ee(k), { tag: "h5" }, null, 512), [
                    [U, [
                      Ee(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Oe(Ee(k), { shrink: "" }, {
                    default: qt(() => [
                      Oe(Ee(tm), {
                        weight: "quiet",
                        "aria-label": A.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: qt(() => [
                          Oe(Ee(nm), {
                            icon: Ee(_y),
                            onClick: C
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
            ])) : (Vo(), yi(Ee(rt), { key: 2 }))
          ]),
          r.value ? (Vo(), yi(Pf, Zp(em({ key: 1 }, A.$attrs)), null, 16)) : (Vo(), yi(Tf, Zp(em({ key: 0 }, A.$attrs)), null, 16)),
          Oe(AA, {
            active: S.value,
            "onUpdate:active": B[1] || (B[1] = (W) => S.value = W),
            "source-params-count": f.value,
            "target-params-count": w.value,
            "mandatory-missing-params-count": x.value,
            "optional-missing-params-count": M.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const IA = window.Vue.unref, RA = window.Vue.createVNode, zA = window.Vue.openBlock, OA = window.Vue.createElementBlock, jA = { class: "translated-segment-card-header" }, HA = window.Vue.computed, qA = {
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
    const n = t, { isSectionTitleSelected: o } = ee(), s = de(), a = HA(() => [
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
    return (c, u) => (zA(), OA("div", jA, [
      RA(IA(aa), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const GA = window.Vue.useCssVars, Me = window.Vue.createVNode, om = window.Vue.resolveDirective, XA = window.Vue.createElementVNode, Kl = window.Vue.withDirectives, fe = window.Vue.unref, WA = window.Vue.normalizeStyle, xi = window.Vue.openBlock, sm = window.Vue.createElementBlock, KA = window.Vue.createCommentVNode, YA = window.Vue.normalizeClass, ht = window.Vue.withCtx, JA = window.Vue.toDisplayString, QA = window.Vue.createTextVNode, am = window.Vue.createBlock, ZA = window.Vue.normalizeProps, eD = window.Vue.guardReactiveProps, gn = window.Vue.computed, tD = window.Vue.ref, nD = window.Vue.inject, oD = window.Vuex.useStore, sD = window.Codex.CdxButton, Yl = window.Codex.CdxIcon, aD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    GA((w) => ({
      "4929555c": _.value
    }));
    const t = tD("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ee(), { targetLanguage: a } = Le(oD()), r = gn(() => t.value === "sentence"), c = gn(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = gn(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), g = nD("colors"), i = g.gray200, l = g.red600, d = gn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : c.value.translatedContent), p = gn(
      () => Kt.calculateScore(
        d.value,
        u.value,
        a.value
      )
    ), m = gn(
      () => Kt.getScoreStatus(p.value)
    ), h = gn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = gn(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), _ = gn(
      () => f.value[m.value]
    );
    return (w, y) => {
      const S = om("i18n"), C = om("i18n-html");
      return xi(), am(fe(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ht(() => [
          Me(fe(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ht(() => [
              Me(qA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (L) => t.value = L)
              }, null, 8, ["selection"]),
              Me(fe(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ht(() => [
                  Me(fe(P), { class: "ma-0" }, {
                    default: ht(() => [
                      Me(fe(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ht(() => [
                          Kl(XA("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Kl((xi(), sm("p", {
                            key: 0,
                            style: WA({ color: fe(l) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Kl((xi(), sm("p", {
                            key: 1,
                            class: YA(h.value)
                          }, null, 2)), [
                            [C, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Me(fe(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ht(() => [
                          Me(fe(P), { class: "ma-0 ms-2" }, {
                            default: ht(() => [
                              Me(fe(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ht(() => [
                                  Me(fe(Yl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: fe(ky)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Me(fe(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ht(() => [
                                  Me(fe(Jm), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: fe(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Me(fe(k), { shrink: "" }, {
                                default: ht(() => [
                                  Me(fe(Yl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: fe(by)
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
                  r.value ? (xi(), am(fe(sD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (L) => w.$emit("edit-translation", d.value))
                  }, {
                    default: ht(() => [
                      Me(fe(Yl), {
                        class: "me-1",
                        icon: fe(Jc)
                      }, null, 8, ["icon"]),
                      QA(" " + JA(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : KA("", !0)
                ]),
                _: 1
              }),
              Me(fe(k), { class: "translated-segment-card__actions" }, {
                default: ht(() => [
                  Me(Pf, ZA(eD(w.$attrs)), null, 16)
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
}, iD = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ee(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Wo(), { currentTranslation: s } = Nt();
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
}, Ff = window.Vuex.useStore, rD = () => {
  const e = Ff(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T();
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = mw.config.get("wgContentTranslationEnableMT");
    let s;
    o ? s = yield zi.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new Z(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, lD = () => {
  const e = Ff(), { currentMTProvider: t } = Le(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), s = rD();
  return () => b(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = Z.getStorageKey(
        n.value,
        o.value
      );
      let c = mw.storage.get(r);
      (!c || !a.includes(c)) && (c = a[0]), e.commit("application/setCurrentMTProvider", c);
    }
  });
}, cD = window.Vue.computed, uD = (e) => {
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
}, dD = () => {
  const { selectedContentTranslationUnit: e } = ee(), t = cD(
    () => e.value instanceof it
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && uD(o);
  };
}, gD = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (c) => !Z.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, pD = window.Vue.computed, Mf = () => {
  const { currentTranslation: e } = Nt(), { currentSourcePage: t } = ut();
  return pD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, mD = window.Vuex.useStore, pu = () => {
  const e = mD(), { sourceSection: t, targetPageTitleForPublishing: n } = ee(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Mf();
  return () => {
    const c = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(g);
    i.forEach(
      (p) => gD(p, u)
    );
    const l = t.value.getTranslationProgress(a), d = e.getters["application/isSandboxTarget"];
    return vt.saveTranslation({
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
}, hD = window.Vue.effectScope, fD = window.Vue.onScopeDispose, wD = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = hD(!0), n = o.run(() => e(...a))), fD(s), n);
}, _D = window.Vuex.useStore;
let Jl;
const vD = () => {
  const e = _D(), t = pu();
  let n = 1e3, o = 0;
  return Jl = au(() => t().then((a) => {
    a instanceof No ? (n *= o + 1, o++, setTimeout(Jl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Ro)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Jl;
}, Nf = wD(vD), SD = window.Vuex.useStore, yD = () => {
  const e = SD(), t = Nf(), { currentMTProvider: n } = Le(e), { sourceSection: o, currentProposedTranslation: s } = ee(), { selectNextTranslationUnit: a } = Wo();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, xD = window.Vuex.useStore, bD = () => {
  const e = xD(), t = Nf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, CD = window.Vuex.useStore, kD = window.Vue.computed, Uf = () => {
  const e = CD(), t = qe(), { currentTranslation: n } = Nt(), { currentMTProvider: o, previousRoute: s } = Le(e), { currentTargetPage: a } = ut(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: c,
    pageURLParameter: u,
    sectionURLParameter: g
  } = T(), i = ct(), l = kD(() => {
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
    return o.value && (w.translation_provider = Z.getProviderForInstrumentation(o.value)), w;
  });
  return {
    logEditorOpenEvent: () => {
      var L;
      const w = t.currentRoute.value.meta.workflowStep, S = t.getRoutes().find(
        (x) => x.name === s.value
      ), C = ((L = S == null ? void 0 : S.meta) == null ? void 0 : L.workflowStep) || 0;
      return w > C ? i(re({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(re({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => i(re({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => i(re({
      event_type: "editor_segment_add"
    }, l.value)),
    logEditorSegmentSkipEvent: () => i(re({
      event_type: "editor_segment_skip"
    }, l.value)),
    logEditorSegmentEditEvent: () => i(re({
      event_type: "editor_segment_edit"
    }, l.value))
  };
}, $D = (e, t, n, o) => b(void 0, null, function* () {
  var c, u, g;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((u = t.mt) == null ? void 0 : u.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, r = yield Df(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), VD = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, ED = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return $D(e, t, n, o);
  VD(e, t);
}), LD = (e, t, n, o) => {
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
        const g = ED(
          c,
          u,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, AD = { restoreCorporaDraft: LD }, DD = () => {
  const { currentSourcePage: e } = ut(), { sourceSection: t } = ee();
  return (n) => b(void 0, null, function* () {
    n.restored || (yield vt.fetchTranslationUnits(n.translationId).then(
      (s) => AD.restoreCorporaDraft(
        e.value,
        n.targetTitle,
        n.targetLanguage,
        s
      )
    ).then(() => n.restored = !0));
    let o;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, o = n.targetTitle) : o = n.targetSectionTitle, t.value.translatedTitle = o;
  });
};
const pe = window.Vue.unref, ft = window.Vue.createVNode, pn = window.Vue.withCtx, TD = window.Vue.resolveDirective, im = window.Vue.createElementVNode, BD = window.Vue.withDirectives, PD = window.Vue.toDisplayString, FD = window.Vue.createTextVNode, MD = window.Vue.renderList, ND = window.Vue.Fragment, Bn = window.Vue.openBlock, rm = window.Vue.createElementBlock, Eo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const UD = window.Vue.normalizeClass, ID = window.Vue.normalizeStyle, RD = { class: "sx-sentence-selector__header-title mb-0" }, zD = { class: "sx-sentence-selector__section-contents px-4" }, Lo = window.Vue.computed, OD = window.Vue.nextTick, jD = window.Vue.onMounted, Us = window.Vue.ref, lm = window.Vue.watch, HD = window.Vuex.useStore, cm = window.Codex.CdxButton, qD = window.Codex.CdxIcon, GD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Us(!1), n = Us(!1), o = Us("100%"), s = HD(), { currentMTProvider: a } = Le(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: g
    } = T(), { sourceSection: i, selectedContentTranslationUnit: l } = ee(), d = Us({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = Lo(
      () => Object.values(d.value).every(Boolean)
    ), m = Lo(
      () => {
        var we;
        return (we = i.value) == null ? void 0 : we.isSelectedTranslationUnitTranslated;
      }
    ), h = Lo(() => {
      var we;
      return (we = i.value) == null ? void 0 : we.subSections;
    }), f = Lo(
      () => {
        var we;
        return (we = i.value) == null ? void 0 : we.selectedTranslationUnitOriginalContent;
      }
    ), _ = Lo(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: w,
      logEditorCloseEvent: y,
      logEditorCloseWarnEvent: S,
      logEditorSegmentAddEvent: C,
      logEditorSegmentSkipEvent: L
    } = Uf(), x = iD();
    lD()().then(() => {
      w(), d.value.mtProviders = !0;
    });
    const A = dD(), { fetchTranslationsByStatus: B, translationsFetched: U } = Go(), W = DD(), { currentTranslation: X } = Nt(), { selectPageSectionByTitle: Ae, selectPageSectionByIndex: I } = Wi(), se = uu(), me = jo();
    jD(() => b(this, null, function* () {
      if (!U.value.draft) {
        const we = [
          // required to get current draft translation (if exists)
          B("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          se(r.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          me(r.value, [u.value])
        ];
        yield Promise.all(we);
      }
      d.value.pageMetadata = !0, g.value ? yield Ae(g.value) : yield I(0), d.value.pageContent = !0, X.value && (yield W(X.value)), d.value.draftRestored = !0, lm(
        p,
        () => b(this, null, function* () {
          p.value && (yield OD(), x(), A());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), lm(l, A);
    const { selectNextTranslationUnit: te, selectPreviousTranslationUnit: De } = Wo(), ne = () => (L(), te()), ke = yD(), Q = () => {
      C(), ke();
    }, Xe = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, Te = qe(), N = () => {
      const { autoSavePending: we } = s.state.application;
      if (we) {
        he.value = !0, S();
        return;
      }
      V();
    }, H = bD(), { clearTranslationURLParameters: v } = T(), V = () => b(this, null, function* () {
      B("draft"), X.value && (i.value.reset(), X.value.restored = !1), y(), v(), H(), yield Te.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: D,
      translateSelectedTranslationUnitForAllProviders: F
    } = gu(), q = () => {
      Re.value || (t.value = !0, F());
    }, { getCurrentTitleByLanguage: ie } = Sn(), z = (we) => {
      Te.push({
        name: "sx-editor",
        state: {
          content: we,
          originalContent: f.value,
          title: ie(
            c.value,
            r.value
          ),
          isInitialEdit: !m.value || null
        }
      });
    }, O = () => Te.push({ name: "sx-publisher" }), ae = () => b(this, null, function* () {
      l.value ? yield D(
        l.value.id,
        a.value
      ) : yield D(0, a.value);
    }), Re = Lo(
      () => l.value instanceof it
    ), he = Us(!1);
    return (we, On) => {
      const Yo = TD("i18n");
      return Bn(), rm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: ID(_.value)
      }, [
        ft(pe(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: pn(() => [
            ft(pe(k), { shrink: "" }, {
              default: pn(() => [
                ft(pe(cm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": we.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: N
                }, {
                  default: pn(() => [
                    ft(pe(qD), { icon: pe(Ch) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ft(pe(k), {
              grow: "",
              class: "px-1"
            }, {
              default: pn(() => [
                BD(im("h4", RD, null, 512), [
                  [Yo, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ft(pe(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: pn(() => [
                ft(pe(cm), {
                  disabled: !(pe(i) && pe(i).isTranslated),
                  onClick: O
                }, {
                  default: pn(() => [
                    FD(PD(we.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (Bn(), Eo(pe(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: pn(() => [
            ft(pe(k), {
              dir: pe(R.getDir)(pe(r)),
              lang: pe(r),
              class: "sx-sentence-selector__section"
            }, {
              default: pn(() => [
                ft(VL),
                im("div", zD, [
                  (Bn(!0), rm(ND, null, MD(h.value, (Jt) => (Bn(), Eo(wA, {
                    id: Jt.id,
                    key: `sub-section-${Jt.id}`,
                    "sub-section": Jt,
                    onBounceTranslation: Xe
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Re.value && m.value ? (Bn(), Eo(aD, {
              key: 0,
              onEditTranslation: z,
              onSelectNextSegment: pe(te),
              onSelectPreviousSegment: pe(De)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : Re.value ? (Bn(), Eo(UA, {
              key: 2,
              onEditTranslation: z,
              onApplyTranslation: Q,
              onSkipTranslation: ne,
              onSelectPreviousSegment: pe(De),
              onSelectNextSegment: pe(te)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Bn(), Eo(iA, {
              key: 1,
              class: UD({ "mb-0": !n.value }),
              onConfigureOptions: q,
              onEditTranslation: z,
              onApplyTranslation: Q,
              onSkipTranslation: ne,
              onSelectPreviousSegment: pe(De),
              onRetryTranslation: ae
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Bn(), Eo(pe(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: pn(() => [
            ft(pe(rt), { class: "mt-0" })
          ]),
          _: 1
        })),
        ft(hL, {
          active: t.value,
          "onUpdate:active": On[0] || (On[0] = (Jt) => t.value = Jt)
        }, null, 8, ["active"]),
        ft(H5, {
          modelValue: he.value,
          "onUpdate:modelValue": On[1] || (On[1] = (Jt) => he.value = Jt),
          onDiscardTranslation: V
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const XD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: GD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, WD = window.Vue.resolveComponent, KD = window.Vue.createVNode, YD = window.Vue.normalizeClass, JD = window.Vue.openBlock, QD = window.Vue.createElementBlock;
function ZD(e, t, n, o, s, a) {
  const r = WD("sx-sentence-selector");
  return JD(), QD("main", {
    class: YD(["sx-sentence-selector-view", a.classes])
  }, [
    KD(r)
  ], 2);
}
const eT = /* @__PURE__ */ oe(XD, [["render", ZD]]), tT = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, nT = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const oT = window.Vue.resolveDirective, bi = window.Vue.withDirectives, At = window.Vue.openBlock, mn = window.Vue.createElementBlock, Ci = window.Vue.createCommentVNode, ki = window.Vue.Transition, Qn = window.Vue.withCtx, Ao = window.Vue.createVNode, Is = window.Vue.createElementVNode, Pn = window.Vue.unref, sT = window.Vue.renderList, aT = window.Vue.Fragment, iT = window.Vue.normalizeClass, um = window.Vue.createBlock, rT = window.Vue.toDisplayString, lT = window.Vue.createTextVNode, cT = { class: "sx-quick-tutorial" }, uT = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, dT = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, gT = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, pT = { class: "sx-quick-tutorial__illustration" }, mT = ["innerHTML"], hT = ["innerHTML"], fT = { class: "sx-quick-tutorial__step-indicator py-3" }, wT = ["onClick"], _T = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, vT = {
  key: "secondary-point-1",
  class: "ma-0"
}, ST = {
  key: "secondary-point-2",
  class: "ma-0"
}, yT = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, dm = window.Vue.ref, gm = window.Codex.CdxButton, xT = window.Codex.CdxIcon, bT = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = dm(2), n = dm(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = Xo();
    return (r, c) => {
      const u = oT("i18n");
      return At(), mn("section", cT, [
        Ao(Pn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Qn(() => [
            Is("section", uT, [
              Ao(ki, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Qn(() => [
                  s(1) ? bi((At(), mn("h2", dT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? bi((At(), mn("h2", gT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ci("", !0)
                ]),
                _: 1
              })
            ]),
            Is("section", pT, [
              Ao(ki, { name: "mw-ui-animation-slide-start" }, {
                default: Qn(() => [
                  s(1) ? (At(), mn("div", {
                    key: "illustration-1",
                    innerHTML: Pn(nT)
                  }, null, 8, mT)) : s(2) ? (At(), mn("div", {
                    key: "illustration-2",
                    innerHTML: Pn(tT)
                  }, null, 8, hT)) : Ci("", !0)
                ]),
                _: 1
              })
            ]),
            Is("div", fT, [
              (At(!0), mn(aT, null, sT(t.value, (g) => (At(), mn("span", {
                key: `dot-${g}`,
                class: iT(["dot mx-1", { "dot-active": s(g) }]),
                role: "button",
                onClick: (i) => n.value = g
              }, null, 10, wT))), 128))
            ]),
            Is("section", _T, [
              Ao(ki, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Qn(() => [
                  s(1) ? bi((At(), mn("h3", vT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? bi((At(), mn("h3", ST, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ci("", !0)
                ]),
                _: 1
              })
            ]),
            Is("div", yT, [
              Ao(ki, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Qn(() => [
                  s(1) ? (At(), um(Pn(gm), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Qn(() => [
                      Ao(Pn(xT), { icon: Pn(ga) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (At(), um(Pn(gm), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Pn(a)
                  }, {
                    default: Qn(() => [
                      lT(rT(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Ci("", !0)
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
const CT = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: bT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, kT = window.Vue.resolveComponent, $T = window.Vue.createVNode, VT = window.Vue.normalizeClass, ET = window.Vue.openBlock, LT = window.Vue.createElementBlock;
function AT(e, t, n, o, s, a) {
  const r = kT("sx-quick-tutorial");
  return ET(), LT("main", {
    class: VT(["sx-quick-tutorial-view", a.classes])
  }, [
    $T(r)
  ], 2);
}
const DT = /* @__PURE__ */ oe(CT, [["render", AT]]);
const TT = window.Vue.resolveDirective, pm = window.Vue.createElementVNode, BT = window.Vue.withDirectives, PT = window.Vue.unref, FT = window.Vue.withCtx, MT = window.Vue.createVNode, NT = window.Vue.openBlock, UT = window.Vue.createElementBlock, IT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, RT = { class: "sx-editor__original-content-panel__header mb-2" }, zT = ["lang", "dir", "innerHTML"], mm = window.Vue.ref, OT = window.Vue.onMounted, jT = {
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
        g.href = J.getPageUrl(c, g.title), g.target = "_blank";
    }, o = mm(null), s = mm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return OT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, c) => {
      const u = TT("i18n");
      return NT(), UT("section", IT, [
        BT(pm("h5", RT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        MT(PT(l_), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: FT(() => [
            pm("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, zT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, HT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const qT = window.Vue.unref, Rs = window.Vue.createElementVNode, hm = window.Vue.resolveDirective, Ql = window.Vue.withDirectives, GT = window.Vue.normalizeClass, XT = window.Vue.openBlock, WT = window.Vue.createElementBlock, KT = window.Vue.createCommentVNode, YT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, JT = { class: "sx-editor__feedback-overlay-content px-4" }, QT = ["innerHTML"], ZT = { class: "sx-editor__feedback-overlay-content__title" }, e6 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Zl = window.Vue.computed, t6 = {
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
    const t = e, { targetLanguageURLParameter: n } = T(), o = Zl(
      () => Kt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Zl(() => {
      const r = Kt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = Zl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, c) => {
      const u = hm("i18n"), g = hm("i18n-html");
      return e.showFeedback ? (XT(), WT("div", YT, [
        Rs("div", JT, [
          Rs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: qT(HT)
          }, null, 8, QT),
          Ql(Rs("h2", ZT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Ql(Rs("p", e6, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Ql(Rs("p", {
            class: GT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : KT("", !0);
    };
  }
}, n6 = window.Vuex.useStore, o6 = () => {
  const e = n6(), t = pu(), { selectNextTranslationUnit: n } = Wo(), { sourceSection: o, selectedContentTranslationUnit: s } = ee(), { getCurrentTitleByLanguage: a } = Sn();
  return (r) => b(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = r, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), r = c.innerHTML;
    const { sourceLanguage: u, targetLanguage: g, currentMTProvider: i } = e.state.application;
    s.value instanceof it && (r = (yield Df(
      r,
      a(g, u),
      g
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const ot = window.Vue.unref, ec = window.Vue.openBlock, tc = window.Vue.createBlock, fm = window.Vue.createCommentVNode, wm = window.Vue.createVNode, s6 = window.Vue.createElementVNode, a6 = window.Vue.withCtx, i6 = { class: "sx-editor__editing-surface-container grow" }, nc = window.Vue.ref, r6 = window.Vue.computed, l6 = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = nc(!1), o = qe(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: c, content: u, originalContent: g, title: i } = history.state, l = nc(null), d = nc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Uf(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = T(), { sourceSection: _ } = ee(), w = r6(
      () => Kt.calculateScore(
        l.value,
        u,
        f.value
      )
    ), y = o6(), S = (C) => b(this, null, function* () {
      l.value = C, d.value = !0;
      const L = new Promise((M) => setTimeout(M, 2e3));
      let x = Promise.resolve();
      r ? _.value.editedTranslation = C : x = y(C), w.value === 0 && c ? p() : w.value > 0 && m(), yield Promise.all([L, x]), d.value = !1, a();
    });
    return (C, L) => (ec(), tc(ot(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: a6(() => [
        ot(g) ? (ec(), tc(jT, {
          key: 0,
          language: ot(h),
          dir: ot(R.getDir)(ot(h)),
          "original-content": ot(g)
        }, null, 8, ["language", "dir", "original-content"])) : fm("", !0),
        n.value ? fm("", !0) : (ec(), tc(ot(rt), { key: 1 })),
        s6("div", i6, [
          wm(t6, {
            "edited-translation": l.value,
            "show-feedback": d.value,
            "proposed-translation": ot(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          wm(NV, {
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
const c6 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: l6
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
}, u6 = window.Vue.resolveComponent, d6 = window.Vue.createVNode, g6 = window.Vue.normalizeClass, p6 = window.Vue.openBlock, m6 = window.Vue.createElementBlock;
function h6(e, t, n, o, s, a) {
  const r = u6("sx-editor");
  return p6(), m6("main", {
    class: g6(["sx-editor-view", a.classes])
  }, [
    d6(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const f6 = /* @__PURE__ */ oe(c6, [["render", h6]]);
const Gt = window.Vue.unref, Zn = window.Vue.createVNode, zs = window.Vue.withCtx, w6 = window.Vue.resolveDirective, _6 = window.Vue.withDirectives, v6 = window.Vue.openBlock, S6 = window.Vue.createBlock, _m = window.Codex.CdxButton, vm = window.Codex.CdxIcon, y6 = {
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
      const a = w6("i18n");
      return v6(), S6(Gt(P), { class: "ma-0 sx-publisher__header" }, {
        default: zs(() => [
          Zn(Gt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: zs(() => [
              Zn(Gt(_m), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: zs(() => [
                  Zn(Gt(vm), { icon: Gt(qo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          _6(Zn(Gt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Zn(Gt(k), { shrink: "" }, {
            default: zs(() => [
              Zn(Gt(_m), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: zs(() => [
                  Zn(Gt(vm), { icon: Gt(gy) }, null, 8, ["icon"])
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
}, x6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, b6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Sm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const oc = window.Vue.createElementVNode, ym = window.Vue.toDisplayString, sc = window.Vue.unref, ac = window.Vue.withCtx, xm = window.Vue.createVNode, C6 = window.Vue.openBlock, k6 = window.Vue.createBlock, $6 = window.Vue.createCommentVNode, V6 = ["innerHTML"], E6 = ["textContent"], L6 = ["textContent"], ic = window.Vue.computed, A6 = {
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
    const t = de(), n = e, o = {
      pending: {
        svg: x6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: b6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Sm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Sm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = ic(() => o[n.status].svg), a = ic(() => o[n.status].title), r = ic(() => o[n.status].subtitle);
    return (c, u) => e.active ? (C6(), k6(sc(St), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: ac(() => [
        xm(sc(P), { class: "ma-4" }, {
          default: ac(() => [
            xm(sc(k), null, {
              default: ac(() => [
                oc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, V6),
                oc("h2", {
                  textContent: ym(a.value)
                }, null, 8, E6),
                oc("p", {
                  class: "ma-0",
                  textContent: ym(r.value)
                }, null, 8, L6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : $6("", !0);
  }
};
const st = window.Vue.unref, Dt = window.Vue.createVNode, hn = window.Vue.withCtx, D6 = window.Vue.resolveDirective, T6 = window.Vue.withDirectives, bm = window.Vue.toDisplayString, B6 = window.Vue.createTextVNode, rc = window.Vue.openBlock, Cm = window.Vue.createElementBlock, P6 = window.Vue.createCommentVNode, If = window.Vue.createElementVNode, F6 = window.Vue.createBlock, M6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, N6 = ["src"], U6 = ["textContent"], I6 = /* @__PURE__ */ If("p", { class: "mt-0" }, null, -1), R6 = window.Vue.computed, z6 = window.Vue.inject, O6 = window.Vue.ref, km = window.Codex.CdxButton, j6 = window.Codex.CdxIcon, H6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Uh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = O6(""), s = () => n("close"), a = () => n("publish", o.value), r = z6("breakpoints"), c = R6(() => r.value.mobile);
    return (u, g) => {
      const i = D6("i18n");
      return e.active && e.captchaDetails ? (rc(), F6(st(St), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: hn(() => [
          Dt(st(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: hn(() => [
              Dt(st(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: hn(() => [
                  Dt(st(km), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: hn(() => [
                      Dt(st(j6), { icon: st(qo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              T6(Dt(st(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Dt(st(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: hn(() => [
                  Dt(st(km), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: hn(() => [
                      B6(bm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Dt(st(Pi))
        ]),
        default: hn(() => [
          If("div", M6, [
            e.captchaDetails.type === "image" ? (rc(), Cm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, N6)) : (rc(), Cm("p", {
              key: 1,
              textContent: bm(e.captchaDetails.question)
            }, null, 8, U6)),
            I6,
            Dt(st(P), { class: "ma-0" }, {
              default: hn(() => [
                Dt(st(k), null, {
                  default: hn(() => [
                    Dt(st(vc), {
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
      }, 8, ["fullscreen"])) : P6("", !0);
    };
  }
};
const eo = window.Vue.unref, Os = window.Vue.createVNode, $i = window.Vue.withCtx, to = window.Vue.createElementVNode, q6 = window.Vue.resolveDirective, G6 = window.Vue.withDirectives, X6 = window.Vue.renderList, $m = window.Vue.Fragment, lc = window.Vue.openBlock, Vm = window.Vue.createElementBlock, W6 = window.Vue.toDisplayString, K6 = window.Vue.normalizeClass, Y6 = window.Vue.createBlock, J6 = { class: "mw-ui-dialog__header" }, Q6 = { class: "row ma-0 px-4 py-3" }, Z6 = { class: "col shrink justify-center" }, e9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, t9 = { class: "mb-0" }, n9 = { class: "pa-4" }, o9 = ["textContent"], s9 = window.Vuex.useStore, js = window.Vue.computed, a9 = window.Codex.CdxButton, i9 = window.Codex.CdxIcon, r9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = s9(), s = js(() => o.state.application.publishTarget), a = js(() => o.state.translator.isAnon), r = de(), { sourceSection: c } = ee(), u = js(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), g = js(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = js(() => [
      {
        label: u.value,
        details: g.value,
        value: "NEW_SECTION",
        disabled: !1
      },
      {
        label: r.i18n("cx-sx-publisher-sandbox-option-label"),
        details: r.i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: a.value
      }
    ]), l = (m) => m === i.value.length - 1 ? "mb-1" : "mb-4", d = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), d();
    };
    return (m, h) => {
      const f = q6("i18n");
      return lc(), Y6(eo(St), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: d
      }, {
        header: $i(() => [
          to("div", J6, [
            to("div", Q6, [
              to("div", Z6, [
                Os(eo(a9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: d
                }, {
                  default: $i(() => [
                    Os(eo(i9), { icon: eo(Ch) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              to("div", e9, [
                G6(to("h4", t9, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Os(eo(Pi))
          ])
        ]),
        default: $i(() => [
          to("div", n9, [
            Os(eo(U1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: $i(() => [
                (lc(!0), Vm($m, null, X6(i.value, (_, w) => (lc(), Vm($m, {
                  key: _.label
                }, [
                  Os(eo(Sc), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  to("p", {
                    class: K6(["complementary ms-7 mt-0", l(w)]),
                    textContent: W6(_.details)
                  }, null, 10, o9)
                ], 64))), 128))
              ]),
              _: 1
            }, 8, ["value"])
          ])
        ]),
        _: 1
      }, 8, ["value", "title"]);
    };
  }
};
const Tt = window.Vue.unref, no = window.Vue.createVNode, Em = window.Vue.resolveDirective, Lm = window.Vue.withDirectives, Vi = window.Vue.openBlock, Am = window.Vue.createElementBlock, l9 = window.Vue.createCommentVNode, Dm = window.Vue.toDisplayString, cc = window.Vue.createElementVNode, Do = window.Vue.withCtx, Tm = window.Vue.createBlock, c9 = window.Vue.Fragment, u9 = window.Vue.normalizeClass, d9 = { class: "sx-publisher__review-info__content" }, g9 = { key: 0 }, p9 = ["textContent"], m9 = ["textContent"], Fn = window.Vue.computed, Bm = window.Vue.ref, h9 = window.Vue.watch, Pm = window.Codex.CdxButton, uc = window.Codex.CdxIcon, f9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Bm(0), o = Bm(null);
    h9(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = Fn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Fn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = Fn(() => {
      switch (a.value) {
        case "warning":
          return xh;
        case "error":
          return uy;
        default:
          return hy;
      }
    }), c = Fn(() => a.value === "default"), u = Fn(
      () => c.value ? "notice" : a.value
    ), g = Fn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = de(), l = Fn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = Fn(
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
      const _ = Em("i18n"), w = Em("i18n-html");
      return Vi(), Tm(Tt(c1), {
        type: u.value,
        class: u9(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: c.value
      }, {
        icon: Do(() => [
          no(Tt(uc), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Do(() => [
          cc("div", d9, [
            a.value === "default" ? Lm((Vi(), Am("h5", g9, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (Vi(), Am(c9, { key: 1 }, [
              cc("h5", {
                textContent: Dm(d.value)
              }, null, 8, p9),
              cc("p", {
                textContent: Dm(l.value)
              }, null, 8, m9),
              no(Tt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Do(() => [
                  Lm(no(Tt(k), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [w, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Vi(), Tm(Tt(k), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Do(() => [
                      no(Tt(Pm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: Do(() => [
                          no(Tt(uc), { icon: Tt(eu) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      no(Tt(Pm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: Do(() => [
                          no(Tt(uc), { icon: Tt(ga) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : l9("", !0)
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
}, w9 = (e) => {
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
}, _9 = window.Vuex.useStore, v9 = window.Vue.computed, S9 = () => {
  const e = _9(), { currentTranslation: t } = Nt(), { currentMTProvider: n, previousRoute: o } = Le(e), { currentTargetPage: s } = ut(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    sectionURLParameter: u
  } = T(), { sourceSection: g } = ee(), i = ct(), l = v9(() => {
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
      const _ = t.value.targetSectionTitle;
      _ && (h.translation_target_section = _);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = Z.getProviderForInstrumentation(n.value)), h.human_modification_rate = Kt.getMTScoreForPageSection(
      g.value,
      r.value
    ) / 100, h.human_modification_threshold = Kt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(re({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => i(re({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => i(re({
      event_type: "publish_failure"
    }, l.value))
  };
}, Fm = window.Vue.ref, y9 = window.Vuex.useStore, x9 = () => {
  const e = y9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), { sourceSection: s, targetPageTitleForPublishing: a } = ee(), r = Mf(), c = Fm(!1), u = Fm("pending"), g = () => c.value = !1, i = pu(), {
    logPublishAttemptEvent: l,
    logPublishSuccessEvent: d,
    logPublishFailureEvent: p
  } = S9(), m = (f, _) => b(void 0, null, function* () {
    l();
    const w = yield i();
    if (w instanceof No)
      return p(), { publishFeedbackMessage: w, targetUrl: null };
    const y = w, S = a.value, C = e.getters["application/isSandboxTarget"], L = {
      html: w9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: S,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      isSandbox: C,
      sectionTranslationId: y
    };
    f && (L.captchaId = f, L.captchaWord = _);
    const x = yield vt.publishTranslation(
      L
    );
    return x.publishFeedbackMessage === null ? d(x.pageId, x.revisionId) : p(), x;
  });
  return {
    closePublishDialog: g,
    doPublish: (f = null, _ = null) => b(void 0, null, function* () {
      u.value = "pending", c.value = !0;
      let w;
      try {
        w = yield m(
          _ == null ? void 0 : _.id,
          f
        );
      } catch (y) {
        if (y instanceof Ro)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw y;
      }
      return w;
    }),
    isPublishDialogActive: c,
    publishStatus: u
  };
}, b9 = window.Vue.computed, C9 = () => {
  const e = qe(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = b9(
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
}, k9 = () => {
  const { targetLanguageURLParameter: e } = T(), { sourceSection: t } = ee();
  return () => {
    const n = Kt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Kt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, c;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new No({
      title: r,
      text: c,
      status: a,
      type: "mt"
    });
  };
}, $9 = window.Vue.ref, V9 = window.Vue.computed, E9 = () => {
  const e = k9(), t = $9([]), n = V9(
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
}, L9 = window.Vuex.useStore, A9 = () => {
  const e = L9(), { currentSourcePage: t } = ut(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), { sourceSection: s, targetPageTitleForPublishing: a } = ee();
  return (r) => b(void 0, null, function* () {
    const c = a.value, u = e.getters["application/isSandboxTarget"], g = t.value.title, i = new mw.Title(g), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== l.user)
      try {
        yield zi.addWikibaseLink(
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
}, Mm = window.Vue.ref, D9 = () => {
  const e = Mm(!1), t = Mm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const xe = window.Vue.unref, Ke = window.Vue.createVNode, T9 = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, B9 = window.Vue.withDirectives, To = window.Vue.withCtx, P9 = window.Vue.openBlock, F9 = window.Vue.createElementBlock, M9 = { class: "sx-publisher" }, N9 = { class: "sx-publisher__publish-panel pa-4" }, U9 = { class: "mb-2" }, I9 = ["innerHTML"], R9 = { class: "sx-publisher__section-preview pa-5" }, z9 = ["innerHTML"], Nm = window.Vue.computed, O9 = window.Vue.onMounted, j9 = window.Vue.ref, H9 = window.Vue.watch, q9 = window.Vuex.useStore, Um = window.Codex.CdxButton, Im = window.Codex.CdxIcon, G9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = q9(), { sourceSection: n } = ee(), o = Nm(() => {
      var M;
      return (M = n.value) == null ? void 0 : M.title;
    }), s = de(), a = Nm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: c,
      handleCaptchaError: u,
      onCaptchaDialogClose: g
    } = D9(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = E9(), h = A9(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: y } = x9(), S = (M = null) => b(this, null, function* () {
      if (l.value)
        return;
      const A = yield f(M, r.value);
      if (!A)
        return;
      const { publishFeedbackMessage: B, targetUrl: U } = A;
      if (u(B)) {
        y();
        return;
      } else
        B && d(B);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          y();
          return;
        }
        h(U);
      }, 1e3);
    });
    O9(() => m());
    const C = C9(), L = j9(!1), x = () => L.value = !0;
    return H9(L, (M) => {
      M || (p(), m());
    }), (M, A) => {
      const B = T9("i18n");
      return P9(), F9("section", M9, [
        Ke(y6, {
          "is-publishing-disabled": xe(l),
          onPublishTranslation: S
        }, null, 8, ["is-publishing-disabled"]),
        Hs("div", N9, [
          B9(Hs("h5", U9, null, 512), [
            [B, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Hs("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, I9),
          Ke(xe(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: To(() => [
              Ke(xe(k), { shrink: "" }, {
                default: To(() => [
                  Ke(xe(Um), {
                    weight: "quiet",
                    "aria-label": M.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: x
                  }, {
                    default: To(() => [
                      Ke(xe(Im), { icon: xe(Cy) }, null, 8, ["icon"])
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
        Ke(f9, { "publish-feedback-messages": xe(i) }, null, 8, ["publish-feedback-messages"]),
        Hs("section", R9, [
          Ke(xe(P), { class: "pb-5 ma-0" }, {
            default: To(() => [
              Ke(xe(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ke(xe(k), { shrink: "" }, {
                default: To(() => [
                  Ke(xe(Um), {
                    weight: "quiet",
                    "aria-label": M.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: xe(C)
                  }, {
                    default: To(() => [
                      Ke(xe(Im), { icon: xe(Jc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Hs("div", {
            innerHTML: xe(n).translationHtml
          }, null, 8, z9)
        ]),
        Ke(r9, {
          active: L.value,
          "onUpdate:active": A[0] || (A[0] = (U) => L.value = U)
        }, null, 8, ["active"]),
        Ke(H6, {
          active: xe(c),
          "captcha-details": xe(r),
          onClose: xe(g),
          onPublish: A[1] || (A[1] = (U) => S(U))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ke(A6, {
          active: xe(_),
          status: xe(w)
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
}, W9 = window.Vue.resolveComponent, K9 = window.Vue.createVNode, Y9 = window.Vue.normalizeClass, J9 = window.Vue.openBlock, Q9 = window.Vue.createElementBlock;
function Z9(e, t, n, o, s, a) {
  const r = W9("sx-publisher");
  return J9(), Q9("main", {
    class: Y9(["sx-publisher-view", a.classes])
  }, [
    K9(r)
  ], 2);
}
const eB = /* @__PURE__ */ oe(X9, [["render", Z9]]);
const Bt = window.Vue.unref, Mn = window.Vue.createVNode, oo = window.Vue.withCtx, dc = window.Vue.toDisplayString, gc = window.Vue.createElementVNode, tB = window.Vue.openBlock, nB = window.Vue.createBlock, oB = ["textContent"], sB = ["textContent"], aB = ["textContent"], Rf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Oo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (tB(), nB(Bt(P), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Bt(R.getDir)(e.suggestion.language)
    }, {
      default: oo(() => [
        Mn(Bt(k), { shrink: "" }, {
          default: oo(() => [
            Mn(Bt(Mc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Mn(Bt(k), { class: "ms-4" }, {
          default: oo(() => [
            Mn(Bt(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: oo(() => [
                Mn(Bt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: oo(() => [
                    gc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: dc(e.suggestion.title)
                    }, null, 8, oB)
                  ]),
                  _: 1
                }),
                Mn(Bt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: oo(() => [
                    gc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: dc(e.suggestion.description)
                    }, null, 8, sB)
                  ]),
                  _: 1
                }),
                Mn(Bt(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: oo(() => [
                    Mn(Bt(He), {
                      icon: Bt(V0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    gc("small", {
                      textContent: dc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, aB)
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
const qs = window.Vue.unref, Gs = window.Vue.openBlock, pc = window.Vue.createBlock, iB = window.Vue.createCommentVNode, rB = window.Vue.resolveDirective, lB = window.Vue.withDirectives, Rm = window.Vue.createElementBlock, cB = window.Vue.renderList, uB = window.Vue.Fragment, dB = window.Vue.normalizeClass, gB = window.Vue.withCtx, pB = {
  key: 1,
  class: "sx-article-search__empty-state"
}, zm = window.Vue.computed, mB = window.Vue.ref, hB = {
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
    const { sourceLanguageURLParameter: t } = T(), n = zm(() => R.getAutonym(t.value)), o = e, s = mB(null), a = (l) => s.value = l, r = () => s.value = null, c = (l) => {
      var d;
      return ((d = o.selectedItem) == null ? void 0 : d.title) === l.title && !s.value || s.value === l.pageId;
    }, u = zm(() => o.searchInput), { searchResultsLoading: g, searchResultsSlice: i } = iu(
      t,
      u
    );
    return (l, d) => {
      const p = rB("i18n");
      return Gs(), pc(qs(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: gB(() => [
          qs(g) ? (Gs(), pc(qs(rt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : qs(i).length === 0 ? lB((Gs(), Rm("p", pB, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : iB("", !0),
          (Gs(!0), Rm(uB, null, cB(qs(i), (m) => (Gs(), pc(Rf, {
            key: m.pageId,
            suggestion: m,
            class: dB({
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
const fB = window.Vue.toDisplayString, wB = window.Vue.createElementVNode, _B = window.Vue.renderList, vB = window.Vue.Fragment, mc = window.Vue.openBlock, SB = window.Vue.createElementBlock, yB = window.Vue.normalizeClass, Om = window.Vue.createBlock, xB = window.Vue.unref, jm = window.Vue.withCtx, bB = ["textContent"], CB = window.Vue.ref, Hm = {
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
    const n = e, o = CB(null), s = (c) => o.value = c, a = () => o.value = null, r = (c) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === c.title && !o.value || o.value === c.pageId;
    };
    return (c, u) => (mc(), Om(xB(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: jm(() => [
        wB("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: fB(e.cardTitle)
        }, null, 8, bB)
      ]),
      default: jm(() => [
        (mc(!0), SB(vB, null, _B(e.suggestions, (g) => (mc(), Om(Rf, {
          key: g.pageId,
          suggestion: g,
          class: yB({
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
}, kB = window.Vue.computed, $B = (e, t) => kB(() => {
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
    (r, c) => o.findIndex((u) => u === r) === c
  ).map((r) => ({
    value: r,
    props: {
      label: R.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), VB = window.Vue.computed, EB = () => {
  const { supportedSourceLanguageCodes: e } = ca(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T();
  return { getSuggestedSourceLanguages: (s) => VB(() => {
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
const LB = window.Vue.resolveDirective, AB = window.Vue.createElementVNode, hc = window.Vue.withDirectives, ue = window.Vue.unref, Xs = window.Vue.withCtx, Xt = window.Vue.createVNode, Ws = window.Vue.openBlock, qm = window.Vue.createBlock, DB = window.Vue.createCommentVNode, fc = window.Vue.createElementBlock, TB = window.Vue.Fragment, BB = window.Vue.vShow, Ks = window.Vue.withModifiers, Ys = window.Vue.withKeys, PB = ["onKeydown"], FB = { class: "mb-0" }, MB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, Bo = window.Vue.ref, NB = window.Vue.onMounted, UB = window.Vue.onBeforeUnmount, Js = window.Vue.computed, Gm = window.Vue.watch, IB = window.Vue.inject, RB = window.Vuex.useStore, zB = window.Codex.CdxButton, OB = window.Codex.CdxIcon, jB = window.Codex.CdxSearchInput, HB = 3, qB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Bo(""), n = Bo(!1), o = Bo(null), s = Bo(!1), a = Bo([]), r = RB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = T(), { supportedSourceLanguageCodes: g } = ca(), { searchResultsSlice: i } = iu(c, t), { getSuggestedSourceLanguages: l } = EB(), d = l(a), p = $B(
      c,
      d
    ), m = qe(), { fetchAllTranslations: h } = Go();
    NB(() => b(this, null, function* () {
      var N;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("cxPreviousLanguages"))
        ), y();
      } catch (H) {
      }
      (N = o.value) == null || N.focus(), window.addEventListener("beforeunload", S);
    })), UB(() => {
      window.removeEventListener("beforeunload", S), S();
    });
    const f = () => {
      m.push({ name: "dashboard" });
    }, _ = Mh(), w = (N) => {
      _(N, u.value), a.value.includes(N) || y();
    }, y = () => {
      a.value = [
        c.value,
        ...a.value.filter((N) => N !== c.value)
      ];
    }, S = () => {
      mw.storage.set(
        "cxPreviousLanguages",
        JSON.stringify(a.value)
      );
    }, C = (N) => {
      if (N === "other") {
        s.value = !0;
        return;
      }
      w(N);
    };
    Gm(
      c,
      () => {
        var N;
        r.dispatch("mediawiki/fetchNearbyPages"), (N = o.value) == null || N.focus();
      },
      { immediate: !0 }
    );
    const L = ct();
    Gm(t, () => {
      n.value || (n.value = !0, L({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const x = () => {
      s.value = !1;
    }, M = (N) => {
      s.value = !1, C(N);
    }, { fetchPreviousEditsInSource: A, previousEditsInSource: B } = vh(), U = Bo([]);
    (() => A().then(() => B.value.length > 0 ? io.fetchPages(
      c.value,
      B.value
    ) : []).then((N) => {
      N = N.slice(0, HB), N = N.sort(
        (H, v) => B.value.indexOf(H.title) - B.value.indexOf(v.title)
      ), U.value = N;
    }))();
    const X = Js(() => r.getters["mediawiki/getNearbyPages"]), Ae = IB("breakpoints"), I = Js(() => Ae.value.mobile), se = pa(), me = Js(
      () => U.value && U.value.length
    ), te = Js(
      () => X.value && X.value.length
    ), { next: De, prev: ne, keyboardNavigationContainer: ke, selectedItem: Q } = ff(t, i, U), Xe = (N) => se(
      N.title,
      c.value,
      u.value,
      Te.value
    ), Te = Js(() => t.value ? "search_result" : me.value ? "suggestion_recent_edit" : te.value ? "suggestion_nearby" : "");
    return (N, H) => {
      const v = LB("i18n");
      return Ws(), fc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: ke,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          H[5] || (H[5] = Ys(Ks((...V) => ue(De) && ue(De)(...V), ["stop", "prevent"]), ["tab"])),
          H[6] || (H[6] = Ys(Ks((...V) => ue(De) && ue(De)(...V), ["stop", "prevent"]), ["down"])),
          H[7] || (H[7] = Ys(Ks((...V) => ue(ne) && ue(ne)(...V), ["stop", "prevent"]), ["up"])),
          Ys(Ks(f, ["stop", "prevent"]), ["esc"]),
          H[8] || (H[8] = Ys(Ks((V) => Xe(ue(Q)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Xt(ue(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Xs(() => [
            Xt(ue(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Xs(() => [
                hc(AB("h5", FB, null, 512), [
                  [v, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Xt(ue(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Xs(() => [
                Xt(ue(zB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": N.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Xs(() => [
                    Xt(ue(OB), { icon: ue(qo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Xt(ue(jB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": H[0] || (H[0] = (V) => t.value = V),
          class: "sx-article-search__search-input",
          placeholder: N.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Xt(ue(aa), {
          class: "sx-article-search__language-button-group",
          items: ue(p),
          active: ue(c),
          onSelect: C
        }, null, 8, ["items", "active"]),
        t.value ? DB("", !0) : (Ws(), fc(TB, { key: 0 }, [
          me.value ? (Ws(), qm(Hm, {
            key: 0,
            "card-title": N.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: U.value,
            "selected-item": ue(Q),
            onSuggestionClicked: H[1] || (H[1] = (V) => Xe(V))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : te.value ? (Ws(), qm(Hm, {
            key: 1,
            "card-title": N.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: X.value,
            onSuggestionClicked: H[2] || (H[2] = (V) => Xe(V))
          }, null, 8, ["card-title", "suggestions"])) : hc((Ws(), fc("p", MB, null, 512)), [
            [v, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        hc(Xt(hB, {
          "search-input": t.value,
          "selected-item": ue(Q),
          onSuggestionClicked: H[3] || (H[3] = (V) => Xe(V))
        }, null, 8, ["search-input", "selected-item"]), [
          [BB, !!t.value]
        ]),
        Xt(ue(St), {
          value: s.value,
          "onUpdate:value": H[4] || (H[4] = (V) => s.value = V),
          class: "sx-article-search-language-selector",
          fullscreen: I.value,
          header: I.value,
          title: N.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: x
        }, {
          default: Xs(() => [
            Xt(ue(wf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ue(g),
              suggestions: ue(d),
              placeholder: N.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: M,
              onClose: x
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, PB);
    };
  }
};
const GB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: qB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, XB = window.Vue.resolveComponent, WB = window.Vue.createVNode, KB = window.Vue.normalizeClass, YB = window.Vue.openBlock, JB = window.Vue.createElementBlock;
function QB(e, t, n, o, s, a) {
  const r = XB("sx-article-search");
  return YB(), JB("main", {
    class: KB(["sx-article-search-view", a.classes])
  }, [
    WB(r)
  ], 2);
}
const ZB = /* @__PURE__ */ oe(GB, [["render", QB]]), eP = () => {
  const e = pa(), t = uu(), { logDashboardOpenEvent: n, getEventSource: o } = bf(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = T();
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
}, tP = window.Vuex.useStore, nP = [
  {
    path: "",
    name: "dashboard",
    component: zg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: ZB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: iE,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: S3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: M5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: DT,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: eT,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: f6,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: eB,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: zg,
    meta: { workflowStep: 0 }
  }
], mu = dC({
  history: ub(),
  routes: nP
}), wc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, oP = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
mu.beforeEach((e, t, n) => {
  const o = tP();
  if (mw.user.isAnon() || Qm.assertUser().catch((i) => {
    i instanceof Ro && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = eP(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    clearTranslationURLParameters: u
  } = T();
  if (!!(a.value && r.value && c.value)) {
    if (oP(
      a.value,
      r.value,
      c.value
    )) {
      const l = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      wc(e.name, l, n);
    } else
      e.name === "sx-translation-confirmer" && s(), wc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), wc(e.name, "dashboard", n);
});
mu.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const sP = window.Vue.createApp, aP = mw.config.get("wgUserLanguage"), iP = "en", rP = mw.messages.values || {}, Ko = sP(Zy);
Ko.use(mu);
Ko.use(Tx);
Ko.use(S_);
Ko.use(v_);
const lP = ev({
  locale: aP,
  finalFallback: iP,
  messages: rP,
  wikilinks: !0
});
Ko.use(lP);
Ko.mount("#contenttranslation");
