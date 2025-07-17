var Jf = Object.defineProperty, Qf = Object.defineProperties;
var Zf = Object.getOwnPropertyDescriptors;
var Cu = Object.getOwnPropertySymbols;
var ew = Object.prototype.hasOwnProperty, tw = Object.prototype.propertyIsEnumerable;
var bu = (e, t, n) => t in e ? Jf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ae = (e, t) => {
  for (var n in t || (t = {}))
    ew.call(t, n) && bu(e, n, t[n]);
  if (Cu)
    for (var n of Cu(t))
      tw.call(t, n) && bu(e, n, t[n]);
  return e;
}, Ze = (e, t) => Qf(e, Zf(t));
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
}, nw = {
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
}, ow = window.Vue.toDisplayString, ir = window.Vue.openBlock, rr = window.Vue.createElementBlock, sw = window.Vue.createCommentVNode, ku = window.Vue.createElementVNode, aw = window.Vue.normalizeClass, iw = ["width", "height", "aria-labelledby"], rw = ["id"], lw = ["fill"], cw = ["d"];
function uw(e, t, n, o, s, a) {
  return ir(), rr("span", {
    class: aw(["mw-ui-icon notranslate", a.classes])
  }, [
    (ir(), rr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (ir(), rr("title", {
        key: 0,
        id: n.iconName
      }, ow(n.iconName), 9, rw)) : sw("", !0),
      ku("g", { fill: n.iconColor }, [
        ku("path", { d: a.iconImagePath }, null, 8, cw)
      ], 8, lw)
    ], 8, iw))
  ], 2);
}
const qe = /* @__PURE__ */ oe(nw, [["render", uw]]);
const dw = {
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
}, gw = window.Vue.renderSlot, pw = window.Vue.resolveComponent, $u = window.Vue.normalizeClass, ya = window.Vue.openBlock, lr = window.Vue.createBlock, cr = window.Vue.createCommentVNode, hw = window.Vue.toDisplayString, fw = window.Vue.createElementBlock, ww = window.Vue.toHandlerKey, _w = window.Vue.withModifiers, vw = window.Vue.mergeProps, Sw = window.Vue.createElementVNode, yw = window.Vue.resolveDynamicComponent, xw = window.Vue.withCtx, Cw = { class: "mw-ui-button__content" }, bw = ["textContent"];
function kw(e, t, n, o, s, a) {
  const r = pw("mw-icon");
  return ya(), lr(yw(a.component), {
    class: $u(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: xw(() => [
      gw(e.$slots, "default", {}, () => [
        Sw("span", Cw, [
          n.icon ? (ya(), lr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: $u(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : cr("", !0),
          !a.isIcon && n.label ? (ya(), fw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: hw(n.label)
          }, null, 8, bw)) : cr("", !0),
          n.indicator ? (ya(), lr(r, vw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [ww(a.indicatorClickEvent)]: t[0] || (t[0] = _w((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : cr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Me = /* @__PURE__ */ oe(dw, [["render", kw]]);
const $w = {
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
}, Vw = window.Vue.renderList, Ew = window.Vue.Fragment, ur = window.Vue.openBlock, Vu = window.Vue.createElementBlock, Lw = window.Vue.resolveComponent, Aw = window.Vue.withModifiers, Dw = window.Vue.mergeProps, Tw = window.Vue.createBlock, Bw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Pw(e, t, n, o, s, a) {
  const r = Lw("mw-button");
  return ur(), Vu("div", Bw, [
    (ur(!0), Vu(Ew, null, Vw(n.items, (l) => (ur(), Tw(r, Dw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Aw((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ra = /* @__PURE__ */ oe($w, [["render", Pw]]);
const Fw = {
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
}, Eu = window.Vue.renderSlot, Nw = window.Vue.toDisplayString, Lu = window.Vue.openBlock, Au = window.Vue.createElementBlock, Mw = window.Vue.createCommentVNode, Uw = window.Vue.createElementVNode, Iw = { class: "mw-ui-card" }, Rw = ["textContent"], zw = { class: "mw-ui-card__content" };
function Ow(e, t, n, o, s, a) {
  return Lu(), Au("div", Iw, [
    Eu(e.$slots, "header", {}, () => [
      n.title ? (Lu(), Au("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Nw(n.title)
      }, null, 8, Rw)) : Mw("", !0)
    ]),
    Uw("div", zw, [
      Eu(e.$slots, "default")
    ])
  ]);
}
const Qe = /* @__PURE__ */ oe(Fw, [["render", Ow]]);
const jw = {}, Hw = window.Vue.openBlock, qw = window.Vue.createElementBlock, Gw = { class: "mw-ui-divider row" };
function Xw(e, t) {
  return Hw(), qw("div", Gw);
}
const Ri = /* @__PURE__ */ oe(jw, [["render", Xw]]);
const Ww = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Kw = window.Vue.renderSlot, Yw = window.Vue.resolveDynamicComponent, Jw = window.Vue.withCtx, Qw = window.Vue.openBlock, Zw = window.Vue.createBlock;
function e0(e, t, n, o, s, a) {
  return Qw(), Zw(Yw(n.tag), { class: "mw-grid container" }, {
    default: Jw(() => [
      Kw(e.$slots, "default")
    ]),
    _: 3
  });
}
const t0 = /* @__PURE__ */ oe(Ww, [["render", e0]]), n0 = {
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
}, o0 = window.Vue.renderSlot, s0 = window.Vue.resolveDynamicComponent, a0 = window.Vue.normalizeClass, i0 = window.Vue.withCtx, r0 = window.Vue.openBlock, l0 = window.Vue.createBlock;
function c0(e, t, n, o, s, a) {
  return r0(), l0(s0(n.tag), {
    class: a0(a.classes)
  }, {
    default: i0(() => [
      o0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const N = /* @__PURE__ */ oe(n0, [["render", c0]]), yc = ["mobile", "tablet", "desktop", "desktop-wide"], u0 = yc.reduce(
  (e, t) => Ze(ae({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), d0 = {
  name: "MwCol",
  props: Ze(ae({}, u0), {
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
      for (let n = 0; n < yc.length; n++) {
        let o = yc[n], s = this.$props[o];
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
}, g0 = window.Vue.renderSlot, p0 = window.Vue.resolveDynamicComponent, m0 = window.Vue.normalizeClass, h0 = window.Vue.withCtx, f0 = window.Vue.openBlock, w0 = window.Vue.createBlock;
function _0(e, t, n, o, s, a) {
  return f0(), w0(p0(n.tag), {
    class: m0(a.classes)
  }, {
    default: h0(() => [
      g0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ oe(d0, [["render", _0]]), v0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", S0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", zi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", y0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, x0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", oh = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", C0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", b0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", la = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", k0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", $0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", V0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Du = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", E0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", sh = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", L0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", A0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", D0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", T0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", B0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", P0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Ni = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, F0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, ah = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, N0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, ih = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", M0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const dr = window.Vue.computed, U0 = window.Vue.watch, I0 = window.Vue.ref, R0 = window.Vue.nextTick, z0 = {
  name: "MwDialog",
  components: {
    MwButton: Me,
    MwRow: N,
    MwCol: k,
    MwDivider: Ri
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
    const n = I0(null), o = dr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = dr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    U0(
      () => e.value,
      (u) => {
        u ? (r(), R0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = dr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: la,
      root: n
    };
  }
}, Tu = window.Vue.normalizeClass, gr = window.Vue.createElementVNode, pr = window.Vue.renderSlot, xa = window.Vue.resolveComponent, ns = window.Vue.createVNode, mr = window.Vue.withCtx, Bu = window.Vue.createCommentVNode, O0 = window.Vue.withKeys, Pu = window.Vue.openBlock, j0 = window.Vue.createElementBlock, H0 = window.Vue.Transition, q0 = window.Vue.normalizeStyle, G0 = window.Vue.createBlock, X0 = { class: "mw-ui-dialog__shell items-stretch" }, W0 = { class: "mw-ui-dialog__body" };
function K0(e, t, n, o, s, a) {
  const r = xa("mw-col"), l = xa("mw-button"), u = xa("mw-row"), d = xa("mw-divider");
  return Pu(), G0(H0, {
    name: "mw-ui-animation-fade",
    style: q0(o.cssVars)
  }, {
    default: mr(() => [
      n.value ? (Pu(), j0("div", {
        key: 0,
        ref: "root",
        class: Tu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = O0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        gr("div", {
          class: Tu(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        gr("div", X0, [
          n.header ? pr(e.$slots, "header", { key: 0 }, () => [
            ns(u, { class: "mw-ui-dialog__header" }, {
              default: mr(() => [
                ns(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                ns(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: mr(() => [
                    ns(l, {
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
            ns(d)
          ]) : Bu("", !0),
          gr("div", W0, [
            pr(e.$slots, "default")
          ]),
          pr(e.$slots, "footer")
        ])
      ], 34)) : Bu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const St = /* @__PURE__ */ oe(z0, [["render", K0]]);
const Y0 = {
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
}, Fu = window.Vue.renderSlot, J0 = window.Vue.resolveComponent, Ca = window.Vue.openBlock, hr = window.Vue.createBlock, Nu = window.Vue.createCommentVNode, Q0 = window.Vue.resolveDynamicComponent, Z0 = window.Vue.toDisplayString, e1 = window.Vue.mergeProps, t1 = window.Vue.withModifiers, n1 = window.Vue.createElementVNode, o1 = window.Vue.normalizeClass, s1 = window.Vue.createElementBlock, a1 = { class: "mw-ui-input__content" };
function i1(e, t, n, o, s, a) {
  const r = J0("mw-icon");
  return Ca(), s1("div", {
    class: o1(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    n1("div", a1, [
      Fu(e.$slots, "icon", {}, () => [
        n.icon ? (Ca(), hr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Nu("", !0)
      ]),
      (Ca(), hr(Q0(n.type === "textarea" ? n.type : "input"), e1({
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
        textContent: Z0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Fu(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ca(), hr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = t1((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Nu("", !0)
      ])
    ])
  ], 2);
}
const xc = /* @__PURE__ */ oe(Y0, [["render", i1]]);
const r1 = {
  name: "MwMessage",
  components: { MwCol: k, MwRow: N, MwIcon: qe, MwButton: Me },
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
    mwIconClose: la,
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
      notice: P0,
      warning: ah,
      success: Ni,
      error: F0
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
}, fr = window.Vue.renderSlot, ba = window.Vue.resolveComponent, Mu = window.Vue.createVNode, Uu = window.Vue.withCtx, Iu = window.Vue.openBlock, Ru = window.Vue.createBlock, zu = window.Vue.createCommentVNode, l1 = window.Vue.normalizeClass;
function c1(e, t, n, o, s, a) {
  const r = ba("mw-icon"), l = ba("mw-col"), u = ba("mw-button"), d = ba("mw-row");
  return e.shown ? (Iu(), Ru(d, {
    key: 0,
    class: l1([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Uu(() => [
      fr(e.$slots, "icon", {}, () => [
        Mu(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Mu(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Uu(() => [
          fr(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      fr(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Iu(), Ru(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : zu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : zu("", !0);
}
const u1 = /* @__PURE__ */ oe(r1, [["render", c1]]);
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
const d1 = {}, g1 = window.Vue.createElementVNode, p1 = window.Vue.openBlock, m1 = window.Vue.createElementBlock, h1 = { class: "mw-ui-spinner" }, f1 = /* @__PURE__ */ g1("div", { class: "mw-ui-spinner__bounce" }, null, -1), w1 = [
  f1
];
function _1(e, t) {
  return p1(), m1("div", h1, w1);
}
const lt = /* @__PURE__ */ oe(d1, [["render", _1]]), wt = {
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
const v1 = window.Vue.computed, S1 = {
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
      default: ih
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
}, Ou = window.Vue.normalizeStyle, ju = window.Vue.openBlock, y1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const x1 = window.Vue.resolveComponent, C1 = window.Vue.createBlock;
function b1(e, t, n, o, s, a) {
  const r = x1("mw-ui-icon");
  return n.thumbnail ? (ju(), y1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Ou(o.style)
  }, null, 4)) : (ju(), C1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Ou(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Mc = /* @__PURE__ */ oe(S1, [["render", b1]]);
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
const k1 = {
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
}, Hu = window.Vue.normalizeClass, qu = window.Vue.normalizeStyle, $1 = window.Vue.createElementVNode, V1 = window.Vue.openBlock, E1 = window.Vue.createElementBlock, L1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function A1(e, t, n, o, s, a) {
  return V1(), E1("div", {
    class: Hu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: qu(a.containerStyles)
  }, [
    $1("div", {
      class: Hu(["mw-progress-bar__bar", a.barClass]),
      style: qu(a.barStyles)
    }, null, 6)
  ], 14, L1);
}
const rh = /* @__PURE__ */ oe(k1, [["render", A1]]), D1 = (e, t, n, o) => (s) => {
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
}, T1 = (e, t, n, o) => ({ initiateDrag: D1(
  e,
  t,
  n,
  o
) }), B1 = window.Vue.ref, Gu = window.Vue.computed, P1 = (e, t, n, o) => {
  const s = B1(0), a = Gu(
    () => t.value > e.value
  ), r = Gu(
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
const ka = window.Vue.ref, F1 = window.Vue.onMounted, Xu = window.Vue.computed, N1 = window.Vue.nextTick, M1 = {
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
    const t = ka(!0), n = ka(null), o = Xu(
      () => Math.min(e.minHeight, s.value)
    ), s = ka(1), { initiateDrag: a } = T1(
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
    } = P1(o, s, n, t), c = () => d(u.value + 1), g = ka(null), p = Xu(() => ({
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
    return F1(() => b(this, null, function* () {
      var f;
      yield N1(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: N0,
      mwIconExpand: C0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, U1 = window.Vue.renderSlot, I1 = window.Vue.normalizeClass, $a = window.Vue.createElementVNode, R1 = window.Vue.resolveComponent, z1 = window.Vue.createVNode, wr = window.Vue.openBlock, O1 = window.Vue.createBlock, Wu = window.Vue.createCommentVNode, Ku = window.Vue.createElementBlock, j1 = window.Vue.normalizeStyle, H1 = { class: "mw-ui-expandable-content__container" }, q1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, G1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function X1(e, t, n, o, s, a) {
  const r = R1("mw-button");
  return wr(), Ku("div", {
    class: "mw-ui-expandable-content",
    style: j1(o.cssVars)
  }, [
    $a("div", H1, [
      $a("div", {
        ref: "contentRef",
        class: I1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        U1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (wr(), Ku("div", q1, [
        z1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (wr(), O1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Wu("", !0)
      ])) : Wu("", !0)
    ]),
    $a("div", G1, [
      $a("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const W1 = /* @__PURE__ */ oe(M1, [["render", X1]]);
const Va = window.Vue.computed, K1 = {
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
    const t = Va(() => e.size / 2 * 0.9), n = Va(() => Math.PI * (t.value * 2)), o = Va(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Va(() => ({
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
}, Yu = window.Vue.createElementVNode, Ju = window.Vue.normalizeStyle, Y1 = window.Vue.openBlock, J1 = window.Vue.createElementBlock, Q1 = ["width", "height", "viewport"], Z1 = ["r", "cx", "cy", "stroke-dasharray"], e_ = ["r", "cx", "cy", "stroke-dasharray"];
function t_(e, t, n, o, s, a) {
  return Y1(), J1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Ju(o.cssVars)
  }, [
    Yu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Z1),
    Yu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Ju({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, e_)
  ], 12, Q1);
}
const n_ = /* @__PURE__ */ oe(K1, [["render", t_]]), o_ = window.Vue.ref, hn = {
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
  mobile: `only screen and (max-width: ${hn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${hn.tablet}px) and (max-width: ${hn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${hn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${hn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${hn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${hn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${hn["desktop-wide"]}px)`
}, _r = {
  mobile: () => matchMedia(yn.mobile).matches,
  tablet: () => matchMedia(yn.tablet).matches,
  desktop: () => matchMedia(yn.desktop).matches,
  desktopwide: () => matchMedia(yn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(yn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(yn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(yn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(yn["desktop-and-down"]).matches
}, s_ = (e) => {
  const t = Object.values(hn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, a_ = {
  install: (e) => {
    const t = o_({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in _r)
        _r.hasOwnProperty(s) && (t.value[s] = _r[s]());
      t.value.nextBreakpoint = s_(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ze(ae({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, i_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ze(ae({}, e.config.globalProperties.$mwui || {}), {
      colors: wt
    }), e.provide("colors", wt);
  }
};
class Go extends Error {
}
const r_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Go();
}), lh = { assertUser: r_ };
const l_ = window.Vue.resolveDirective, os = window.Vue.createElementVNode, Qu = window.Vue.withDirectives, c_ = window.Vue.toDisplayString, u_ = window.Vue.unref, Zu = window.Vue.withCtx, d_ = window.Vue.openBlock, g_ = window.Vue.createBlock, p_ = window.Vue.createCommentVNode, m_ = { class: "pa-4 sx-login-dialog__header" }, h_ = { class: "sx-login-dialog__body px-6 pb-4" }, f_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, w_ = ["href"], __ = window.Vue.computed, v_ = window.Vue.ref, S_ = window.Vuex.useStore, y_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = S_(), n = __(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = v_(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = l_("i18n");
      return n.value ? (d_(), g_(u_(St), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Zu(() => [
          os("div", m_, [
            Qu(os("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Zu(() => [
          Qu(os("div", h_, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          os("div", f_, [
            os("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, c_(a.$i18n("cx-sx-login-dialog-button-label")), 9, w_)
          ])
        ]),
        _: 1
      })) : p_("", !0);
    };
  }
}, Q = new mw.cx.SiteMapper(), x_ = mw.util.getUrl, C_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Xo = !mw.config.get("wgMFMode");
class Uc {
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
const Ea = "original", La = "empty", b_ = {
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
      Ea,
      La
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return b_[t] || t;
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
    return Ea;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return La;
  }
  static isUserMTProvider(t) {
    return [Ea, La].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === La ? "blank" : t === Ea ? "source" : t.toLowerCase();
  }
}
class Un {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ze(ae({}, a), {
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
const ed = (e) => {
  var n;
  const t = Mi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Mi = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, so = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), ch = (e) => {
  const t = Mi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = k_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, k_ = (e) => {
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
}, uh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, dh = (e) => {
  const t = uh(e);
  return t == null ? void 0 : t.targetExists;
};
class vr {
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
class rt {
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
    s && dh(s) && (this.blockTemplateAdaptationInfo[t] = uh(s));
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
    const t = Mi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ed(this.transclusionNode) : null;
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
    return n && ed(n) || "";
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
    const o = Mi(n);
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
      new vr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new vr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new vr({
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
const Ic = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), $_ = Ic - 10, V_ = [
  { status: "failure", value: 100 - Ic },
  { status: "warning", value: 100 - $_ },
  { status: "success", value: 100 }
], gh = (e, t, n) => {
  const o = td(e).textContent, s = td(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, E_ = (e) => V_.find((t) => e <= t.value).status, L_ = (e, t) => gh(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), A_ = () => (100 - Ic) / 100, td = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Wt = {
  calculateScore: gh,
  getScoreStatus: E_,
  getMTScoreForPageSection: L_,
  getMtModificationThreshold: A_
}, Aa = "__LEAD_SECTION__";
class zo {
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
    return Aa;
  }
  static isSectionLead(t) {
    return !t || t === Aa;
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
    return n instanceof rt ? n.transclusionNode.outerHTML : n instanceof Un ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof rt ? t.blockTemplateSelected = !1 : t instanceof Un && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof rt ? n.blockTemplateSelected = !0 : n instanceof Un && (n.selected = !0);
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
    if (o instanceof rt)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Un)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof rt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Un ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof rt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Un && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
    return this.isLeadSection ? Aa : this.originalTitle;
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
    return this.isLeadSection ? Aa : this.title;
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
class Oi extends Uc {
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
    return zo.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? zo.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Kt = "previous-edits", _n = "popular", Ge = "topic", Ce = "geography", Z = "collections", Je = "automatic", _t = "seed", nd = window.Vue.ref, { topics: D_, regions: T_ } = mw.loader.require(
  "ext.cx.articlefilters"
), Da = {
  type: Je,
  id: Kt
}, Rc = () => {
  const e = nd(
    D_.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = nd(!1), n = (l, u) => e.value.includes(u) ? { type: Ge, id: u } : null, o = (l, u) => T_.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (c) => c.id.toLowerCase() === u
    )
  ) ? { type: Ce, id: u } : null, s = (l, u, d) => d && !d.some((i) => i.name.toLowerCase() === u) ? null : { type: Z, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: u }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = u == null ? void 0 : u.toLowerCase();
    if (c === Kt)
      return {
        type: Je,
        id: Kt
      };
    if (c === _n)
      return {
        type: Je,
        id: _n
      };
    if (c === Z)
      return d && !d.length ? (t.value = !0, Da) : {
        type: Je,
        id: Z
      };
    if (i === Ge) {
      const g = n(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === Ce) {
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
    } else if (i === _t)
      return { type: _t, id: u };
    return Da;
  }, isDefaultFilter: ({ type: l, id: u }) => l === Da.type && u === Da.id };
}, B_ = window.Vue.inject, P_ = window.Vue.reactive;
var F_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, ph = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(F_, function() {
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
            function w(L) {
              return () => {
                for (let j = 0; j < L.length; j++) {
                  const Ke = L[j]();
                  if (Ke !== null)
                    return Ke;
                }
                return null;
              };
            }
            function _(L) {
              const j = f, Ke = [];
              for (let Qt = 0; Qt < L.length; Qt++) {
                const Zt = L[Qt]();
                if (Zt === null)
                  return f = j, null;
                Ke.push(Zt);
              }
              return Ke;
            }
            function y(L, j) {
              return () => {
                const Ke = f, Qt = [];
                let Zt = j();
                for (; Zt !== null; )
                  Qt.push(Zt), Zt = j();
                return Qt.length < L ? (f = Ke, null) : Qt;
              };
            }
            function S(L) {
              const j = L.length;
              return () => {
                let Ke = null;
                return m.slice(f, f + j) === L && (Ke = L, f += j), Ke;
              };
            }
            function x(L) {
              return () => {
                const j = m.slice(f).match(L);
                return j === null ? null : (f += j[0].length, j[0]);
              };
            }
            const A = x(/^\s+/), C = S("|"), U = S(":"), E = S("\\"), D = x(/^./), R = S("$"), q = x(/^\d+/), K = S('"'), be = S("'"), ue = x(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Ie = x(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Be = w([ke, x(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function ke() {
              const L = _([E, D]);
              return L === null ? null : L[1];
            }
            const De = w([ke, Ie]), Re = w([ke, ue]);
            function Te() {
              const L = _([R, q]);
              return L === null ? null : ["REPLACE", parseInt(L[1], 10) - 1];
            }
            const Y = (M = x(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), G = function(L) {
              return L.toString();
            }, () => {
              const L = M();
              return L === null ? null : G(L);
            });
            var M, G;
            function P() {
              const L = _([C, y(0, _a)]);
              if (L === null)
                return null;
              const j = L[1];
              return j.length > 1 ? ["CONCAT"].concat(j) : j[0];
            }
            function I() {
              const L = _([Y, U, Te]);
              return L === null ? null : [L[0], L[2]];
            }
            function v() {
              const L = _([Y, U, _a]);
              return L === null ? null : [L[0], L[2]];
            }
            function V() {
              const L = _([Y, U]);
              return L === null ? null : [L[0], ""];
            }
            const T = w([function() {
              const L = _([w([I, v, V]), y(0, P)]);
              return L === null ? null : L[0].concat(L[1]);
            }, function() {
              const L = _([Y, y(0, P)]);
              return L === null ? null : [L[0]].concat(L[1]);
            }]), F = S("{{"), X = S("}}"), se = S("[["), H = S("]]"), O = S("["), ne = S("]");
            function ze() {
              const L = _([F, T, X]);
              return L === null ? null : L[1];
            }
            const Se = w([function() {
              const L = _([y(1, _a), C, y(1, wa)]);
              return L === null ? null : [["CONCAT"].concat(L[0]), ["CONCAT"].concat(L[2])];
            }, function() {
              const L = _([y(1, _a)]);
              return L === null ? null : [["CONCAT"].concat(L[0])];
            }]);
            function fa() {
              let L = null;
              const j = _([se, Se, H]);
              if (j !== null) {
                const Ke = j[1];
                L = ["WIKILINK"].concat(Ke);
              }
              return L;
            }
            function co() {
              let L = null;
              const j = _([O, y(1, qf), A, y(1, wa), ne]);
              return j !== null && (L = ["EXTLINK", j[1].length === 1 ? j[1][0] : ["CONCAT"].concat(j[1]), ["CONCAT"].concat(j[3])]), L;
            }
            const jn = x(/^[A-Za-z]+/);
            function ye() {
              const L = x(/^[^"]*/), j = _([K, L, K]);
              return j === null ? null : j[1];
            }
            function uo() {
              const L = x(/^[^']*/), j = _([be, L, be]);
              return j === null ? null : j[1];
            }
            function er() {
              const L = x(/^\s*=\s*/), j = _([A, jn, L, w([ye, uo])]);
              return j === null ? null : [j[1], j[3]];
            }
            function Jt() {
              const L = y(0, er)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], L);
            }
            const qf = w([ze, Te, fa, co, function() {
              const L = y(1, Be)();
              return L === null ? null : L.join("");
            }]), wa = w([ze, Te, fa, co, function() {
              let L = null;
              const j = f, Ke = S("<"), Qt = x(/^\/?/), Zt = x(/^\s*>/), tr = _([Ke, jn, Jt, Qt, Zt]);
              if (tr === null)
                return null;
              const vu = f, Su = tr[1], nr = y(0, wa)(), Gf = f, yu = _([S("</"), jn, Zt]);
              if (yu === null)
                return ["CONCAT", m.slice(j, vu)].concat(nr);
              const Xf = f, Wf = yu[1], xu = tr[2];
              if (function(Hn, va, or, sr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Hn = Hn.toLowerCase()) !== (va = va.toLowerCase()) || sr.allowedHtmlElements.indexOf(Hn) === -1)
                  return !1;
                const Kf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Sa = 0, Yf = or.length; Sa < Yf; Sa += 2) {
                  const ar = or[Sa];
                  if (sr.allowedHtmlCommonAttributes.indexOf(ar) === -1 && (sr.allowedHtmlAttributesByElement[Hn] || []).indexOf(ar) === -1 || ar === "style" && or[Sa + 1].search(Kf) !== -1)
                    return !1;
                }
                return !0;
              }(Su, Wf, xu.slice(1)))
                L = ["HTMLELEMENT", Su, xu].concat(nr);
              else {
                const Hn = (va) => va.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                L = ["CONCAT", Hn(m.slice(j, vu))].concat(nr, Hn(m.slice(Gf, Xf)));
              }
              return L;
            }, function() {
              const L = y(1, Re)();
              return L === null ? null : L.join("");
            }]), _a = w([ze, Te, function() {
              const L = y(1, De)();
              return L === null ? null : L.join("");
            }]), _u = function() {
              const L = y(0, wa)();
              return L === null ? null : ["CONCAT"].concat(L);
            }();
            if (_u === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return _u;
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
})(ph);
var N_ = ph.exports;
const od = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, mh = Symbol("banana-context");
function ce() {
  const e = B_(mh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function M_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = P_(new N_(e.locale, e));
  return {
    install: (n) => {
      n.provide(mh, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = od(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = od(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const vn = window.Vue.ref, U_ = window.Vue.computed, ji = vn(null), Hi = vn(null), qi = vn(null), ca = vn(null), zc = vn(null), Gi = vn(null), hh = vn(null), fh = vn(null), Oc = vn(null), { validateFilters: I_, filtersValidatorError: R_ } = Rc(), wh = {
  from: ji,
  to: Hi,
  section: ca,
  draft: zc,
  page: qi,
  revision: Gi,
  "active-list": Oc
}, z_ = U_(() => ({
  type: hh.value,
  id: fh.value
})), _h = (e, t) => {
  hh.value = e, fh.value = t, Ui("filter-type", e), t && Ui("filter-id", t);
}, O_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Oi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), wh[o].value = s;
  }
  t.delete("title"), ua(Object.fromEntries(t));
}, jc = (e, t) => {
  wh[e].value = t, Ui(e, t);
}, j_ = (e) => {
  jc("section", e);
}, H_ = (e) => {
  jc("page", e);
}, q_ = (e) => {
  jc("active-list", e);
}, ua = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    x_(`Special:ContentTranslation${t}`, e)
  );
}, G_ = () => {
  const e = ce(), t = new URLSearchParams(location.search);
  qi.value = t.get("page"), ji.value = t.get("from"), Hi.value = t.get("to"), ca.value = t.get("section"), Gi.value = t.get("revision"), Oc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = I_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  _h(n.type, n.id), R_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, X_ = () => {
  const e = new URLSearchParams(location.search);
  ca.value = null, e.delete("section"), e.delete("title"), ua(Object.fromEntries(e));
}, Ui = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), ua(Object.fromEntries(n));
}, W_ = (e) => new URLSearchParams(location.search).get(e), K_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), ji.value = e, Hi.value = t, n.delete("title"), ua(Object.fromEntries(n));
}, Y_ = () => {
  const e = new URLSearchParams(location.search);
  qi.value = null, ca.value = null, zc.value = null, Gi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), ua(Object.fromEntries(e));
}, J_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), B = () => ({
  isQuickTutorialForced: J_,
  setLanguageURLParams: K_,
  setSectionURLParam: j_,
  setTranslationURLParams: O_,
  initializeURLState: G_,
  clearTranslationURLParameters: Y_,
  clearSectionURLParameter: X_,
  setUrlParam: Ui,
  getUrlParam: W_,
  pageURLParameter: qi,
  sourceLanguageURLParameter: ji,
  targetLanguageURLParameter: Hi,
  sectionURLParameter: ca,
  draftURLParameter: zc,
  revisionURLParameter: Gi,
  setPageURLParam: H_,
  currentSuggestionFilters: z_,
  setFilterURLParams: _h,
  activeDashboardTabParameter: Oc,
  setActiveDashboardTabParameter: q_
}), Q_ = () => Q.getLanguagePairs();
function Z_(e, t) {
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
function ev() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function tv(e, t, n, o) {
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
const Xi = {
  fetchSupportedLanguageCodes: Q_,
  fetchSupportedMTProviders: Z_,
  fetchCXServerToken: ev,
  addWikibaseLink: tv
}, Hc = window.Vue.ref, sd = Hc([]), ad = Hc([]), id = Hc(!1);
function da() {
  return {
    fetchSupportedLanguageCodes: () => b(this, null, function* () {
      if (!id.value) {
        id.value = !0;
        const t = yield Xi.fetchSupportedLanguageCodes();
        sd.value = t.sourceLanguages, ad.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: sd,
    supportedTargetLanguageCodes: ad
  };
}
const nv = {
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
}, ov = {
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
}, sv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], av = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, iv = {
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
}, rv = {
  languages: nv,
  scriptgroups: ov,
  rtlscripts: sv,
  regiongroups: av,
  territories: iv
};
var Ue = rv;
function ga(e) {
  return !!Ue.languages[e];
}
function On(e) {
  return ga(e) && Ue.languages[e].length === 1 ? Ue.languages[e][0] : !1;
}
function lv() {
  return Ue.languages;
}
function pa(e) {
  var t = On(e);
  return t ? pa(t) : ga(e) ? Ue.languages[e][0] : "Zyyy";
}
function qc(e) {
  var t = On(e);
  return t ? qc(t) : ga(e) && Ue.languages[e][1] || "UNKNOWN";
}
function sa(e) {
  var t = On(e);
  return t ? sa(t) : ga(e) && Ue.languages[e][2] || e;
}
function cv() {
  var e, t = {};
  for (e in Ue.languages)
    On(e) || (t[e] = sa(e));
  return t;
}
function vh(e) {
  var t, n, o = [];
  for (t in Ue.languages)
    if (!On(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === pa(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function uv(e) {
  return vh([e]);
}
function Sh(e) {
  var t;
  for (t in Ue.scriptgroups)
    if (Ue.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Gc(e) {
  return Sh(pa(e));
}
function yh(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = On(n) || n, a = Gc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function xh(e) {
  var t, n, o, s = {};
  for (t in Ue.languages)
    if (!On(t)) {
      for (n = 0; n < e.length; n++)
        if (qc(t).includes(e[n])) {
          o = Gc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function dv(e) {
  return xh([e]);
}
function gv(e) {
  var t, n, o, s = [];
  for (t = yh(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function pv(e, t) {
  var n = sa(e) || e, o = sa(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Ch(e) {
  return Ue.rtlscripts.includes(pa(e));
}
function mv(e) {
  return Ch(e) ? "rtl" : "ltr";
}
function hv(e) {
  return Ue.territories[e] || [];
}
function fv(e, t) {
  t.target ? Ue.languages[e] = [t.target] : Ue.languages[e] = [t.script, t.regions, t.autonym];
}
var z = {
  addLanguage: fv,
  getAutonym: sa,
  getAutonyms: cv,
  getDir: mv,
  getGroupOfScript: Sh,
  getLanguages: lv,
  getLanguagesByScriptGroup: yh,
  getLanguagesByScriptGroupInRegion: dv,
  getLanguagesByScriptGroupInRegions: xh,
  getLanguagesInScript: uv,
  getLanguagesInScripts: vh,
  getLanguagesInTerritory: hv,
  getRegions: qc,
  getScript: pa,
  getScriptGroupOfLanguage: Gc,
  isKnown: ga,
  isRedirect: On,
  isRtl: Ch,
  sortByScriptGroup: gv,
  sortByAutonym: pv
};
const go = window.Vue.computed;
function Ae(e) {
  const t = go(() => e.state.application.sourceLanguage), n = go(() => e.state.application.targetLanguage), o = go(
    () => e.state.application.currentMTProvider
  ), s = go(
    () => z.getAutonym(t.value)
  ), a = go(
    () => z.getAutonym(n.value)
  ), r = go(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Wo {
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
class wv {
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
function _v() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const vv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), _v();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, Sv = (e, t) => {
  let n, o;
  return t ? (n = vv(e), o = n.$element.find(
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
}, yv = (e, t) => {
  const n = Array.from(
    Sv(e, t)
  );
  return xv(n).map(
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
        (c) => new rt({
          sentences: Cv(c),
          node: c
        })
      ), i = !l;
      return new zo({ id: u, title: l, subSections: d, isLeadSection: i });
    }
  );
}, xv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, Cv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Un({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), bh = {
  convertSegmentedContentToPageSections: yv
}, Xc = 120, bv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Xc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => Ze(ae({}, i), { [c.to]: c.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, c) => Ze(ae({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new Wo(Ze(ae({}, i), { _alias: c }));
    });
  });
}, kv = (e, t) => {
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
    return l ? Object.freeze(new wv(l, r)) : null;
  });
}, $v = (e, t, n) => {
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
}, Vv = (e, t, n, o = null) => kh(
  e,
  t,
  n,
  o
).then(
  (s) => new Wo({
    sections: bh.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), kh = (e, t, n, o = null) => {
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
}, Ev = (e) => b(void 0, null, function* () {
  const t = C_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Xc,
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
  return yield Q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Wo(s))).catch((o) => []);
}), Lv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Xc,
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
      (a) => new Wo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, ro = {
  fetchPages: bv,
  fetchLanguageTitles: kv,
  fetchPageContent: Vv,
  fetchSegmentedContent: kh,
  fetchNearbyPages: Ev,
  searchPagesByTitlePrefix: Lv,
  fetchLanguageLinksForLanguage: $v
}, Av = window.Vuex.useStore, Ko = () => {
  const e = Av();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = ro.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, Dv = window.Vuex.useStore, Wc = () => {
  const e = Dv(), {
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
class lo {
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
class Rn {
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
const $h = [
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
], Tv = [
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
], Bv = [
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
], Pv = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Fv = [
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
], Nv = {
  en: $h,
  es: Tv,
  bn: Bv,
  fr: Pv,
  de: Fv
};
class Oo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Kc {
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
class Vh extends lo {
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
    }), this.collection = new Kc(u);
  }
}
class Eh extends Rn {
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
    }), this.collection = new Kc(c);
  }
}
const Mv = $h, Nt = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function Uv() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Nt({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new Kc(a)
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
function Iv(e, t, n = null, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield Nt({ urlParams: s })) || []).map(
      (r) => new lo({
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
const Rv = (e, t) => b(void 0, null, function* () {
  return ((yield Nt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new lo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), zv = (e, t) => b(void 0, null, function* () {
  const s = (yield Nt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new Rn({
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
}), Ov = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Nt({ urlParams: o })) || []).map(
    (a) => new Vh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), jv = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Nt({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new Eh({
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
function Hv(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = Q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new Rn(a) : null;
  });
}
function qv(e, t, n = null) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield Nt({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new Rn({
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
function Gv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Nt({ urlParams: s })) || []).map(
      (r) => new lo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function Xv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Nt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new Rn({
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
function Wv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield Nt({ urlParams: s })) || []).map(
      (r) => new lo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function Kv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    }, r = (yield Nt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new Rn({
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
function Yv(e) {
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
function Jv(e, t) {
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
function Qv(e) {
  const t = Mv.map((o) => encodeURIComponent(o)).join("|"), n = Q.getCXServerUrl(
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
const Zv = (e, t, n) => {
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
}, eS = (e) => {
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
}, tS = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new Oo(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ie = {
  fetchFavorites: tS,
  fetchPageSuggestions: Iv,
  fetchSectionSuggestion: Hv,
  fetchSectionSuggestions: qv,
  fetchAppendixTargetSectionTitles: Qv,
  fetchArticleSections: Jv,
  markFavorite: Zv,
  unmarkFavorite: eS,
  fetchUserEdits: Yv,
  fetchMostPopularPageSuggestions: Rv,
  fetchMostPopularSectionSuggestions: zv,
  fetchPageSuggestionsByTopics: Gv,
  fetchSectionSuggestionsByTopics: Xv,
  fetchPageSuggestionsByCountries: Wv,
  fetchSectionSuggestionsByCountries: Kv,
  fetchPageCollectionGroups: Uv,
  fetchPageSuggestionsByCollections: Ov,
  fetchSectionSuggestionsByCollections: jv
}, nS = window.Vuex.useStore, Yo = () => {
  const e = nS(), { sourceLanguage: t, targetLanguage: n } = Ae(e), o = (l) => {
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
class oS {
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
const sS = window.Vuex.useStore, Yc = window.Vue.ref, aS = Yc([]), iS = Yc([]);
let Sr = !1, yr = !1, rd = !1;
const Ta = Yc([]);
let ss = null;
const xr = {
  page: aS,
  section: iS
}, Lh = () => {
  const e = sS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = () => b(void 0, null, function* () {
    yr || (Ta.value = yield ie.fetchUserEdits(t.value).then((d) => (yr = !0, d)));
  }), s = () => b(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Sr)
      return Sr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Sr = !0, !yr && (yield o(), Ta.value.length > 0))
      return Ta.value;
    if (!rd) {
      const i = yield ie.fetchUserEdits(n.value).then((c) => (rd = !0, c));
      if (i.length)
        return ro.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = xr[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new oS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), xr[d].value.push(i)), i;
  }, r = () => b(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield s(), i || (d = !0);
      for (const c in xr) {
        const g = a(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => ss || (ss = r(), ss.finally(() => {
    ss = null;
  }));
  return {
    getSuggestionSeed: (d) => b(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Ta
  };
}, rS = 5;
function io(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < rS);
  });
}
const lS = window.Vuex.useStore, cS = () => {
  const e = lS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = Lh(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo(), l = {
    id: Kt,
    type: Je
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield io(() => b(void 0, null, function* () {
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
      return yield io(() => b(void 0, null, function* () {
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
}, uS = window.Vuex.useStore, dS = () => {
  const e = uS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: _n,
    type: Je
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo();
  return { fetchSectionSuggestionsPopular: (d) => b(void 0, null, function* () {
    const i = [];
    return yield io(() => b(void 0, null, function* () {
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
    return yield io(() => b(void 0, null, function* () {
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
}, Ah = window.Vue.ref, as = "ungrouped", ld = Ah({}), cd = Ah(!1), Jc = () => ({
  fetchPageCollectionGroups: () => b(void 0, null, function* () {
    try {
      const t = yield ie.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === as ? 1 : s === as ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[as] && (n[as] = n[as].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), ld.value = n, cd.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: cd,
  pageCollectionGroups: ld
});
class ea {
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
const gS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', pS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', mS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', hS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', fS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', wS = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', _S = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', vS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', SS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', yS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', xS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', CS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', bS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', kS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', $S = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', VS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', ES = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', LS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', AS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', DS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Dh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', TS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', BS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', PS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', FS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', NS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', MS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', US = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', IS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', RS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', zS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', OS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', jS = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', HS = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', qS = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', GS = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Cc = gS, Th = pS, Bh = {
  ltr: mS,
  shouldFlip: !0
}, Ph = {
  ltr: hS,
  shouldFlip: !0
}, Qc = {
  ltr: fS,
  shouldFlip: !0
}, XS = wS, Fh = _S, Nh = vS, WS = SS, KS = yS, YS = xS, Jo = CS, JS = bS, Zc = kS, eu = $S, bc = VS, QS = ES, ZS = {
  ltr: LS,
  shouldFlip: !0
}, ey = {
  ltr: AS,
  shouldFlip: !0
}, ty = DS, ny = {
  langCodeMap: {
    ar: Dh
  },
  default: TS
}, oy = {
  langCodeMap: {
    ar: Dh
  },
  default: BS
}, Mh = PS, tu = {
  ltr: FS,
  shouldFlip: !0
}, sy = NS, ay = MS, ma = {
  ltr: US,
  shouldFlip: !0
}, nu = {
  ltr: IS,
  shouldFlip: !0
}, iy = {
  ltr: RS,
  shouldFlip: !0
}, Uh = zS, ry = OS, kc = jS, ly = HS, cy = qS, uy = GS, dy = {
  [Kt]: uy,
  [_n]: ty,
  [Z]: Qc
}, gy = {
  [Z]: ey,
  [Ce]: sy
};
class Ft {
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
    return this.type === Je ? this.id : this.type;
  }
  get icon() {
    return dy[this.provider] || null;
  }
  get expandableIcon() {
    return gy[this.provider] || this.icon;
  }
}
const is = window.Vue.computed, { topics: ud, regions: dd } = mw.loader.require(
  "ext.cx.articlefilters"
), py = (e) => new ea({
  id: e.groupId,
  label: e.label,
  type: Ge,
  filters: e.topics.map(
    (t) => new Ft({
      id: t.topicId,
      label: t.label,
      type: Ge
    })
  )
}), Wi = () => {
  const e = ce(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), { validateFilters: o, filtersValidatorError: s } = Rc(), a = new Ft({
    id: Kt,
    type: Je,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Ft({
    id: _n,
    type: Je,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Ft({
    id: Z,
    type: Je,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = Jc(), i = is(() => {
    const C = new ea({
      id: Je,
      type: Je,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && C.filters.push(l), C;
  }), c = () => {
    const C = ae({}, u.value);
    delete C.ungrouped;
    const U = [];
    for (const D in C) {
      const R = C[D].map(
        (K) => new Ft({
          id: K.name,
          label: K.name,
          type: Z
        })
      ), q = new Ft({
        id: D,
        label: D,
        type: Z,
        subFilters: R
      });
      U.push(q);
    }
    const E = (u.value.ungrouped || []).map(
      (D) => new Ft({
        id: D.name,
        label: D.name,
        type: Z
      })
    );
    return [...U, ...E];
  }, g = is(
    () => new ea({
      id: Z,
      type: Z,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: c()
    })
  ), p = is(() => new ea({
    id: Ce,
    type: Ce,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: dd.map(
      (C) => new Ft({
        id: C.id,
        label: C.label,
        type: Ce,
        subFilters: C.countries.map(
          (U) => new Ft({
            id: U.id,
            label: U.label,
            type: Ce
          })
        )
      })
    )
  })), m = is(() => {
    const C = [
      i.value,
      ...ud.map(py),
      p.value
    ];
    return g.value.filters.length && C.splice(1, 0, g.value), C;
  }), h = is(
    () => [t.value.type, t.value.id].includes(
      Z
    ) && !d.value
  ), f = () => {
    if (h.value)
      return [];
    const C = _();
    return C.type === Ge || C.type === Ce || C.type === _t || C.type === Z || C.id === Z ? [C, a] : [a, r];
  }, w = (C) => {
    n(C.type, C.id);
  }, _ = () => t.value.type === _t ? new Ft({
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
      const E = ud.flatMap((D) => D.topics).find((D) => D.topicId === C);
      return E ? E.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: _,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const C = Object.values(u.value).flat(), U = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        C
      );
      n(U.type, U.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (C) => {
      const U = dd.find((E) => E.id === C);
      return U ? U.countries.map((E) => E.id) : [C];
    }
  };
}, my = window.Vuex.useStore, hy = () => {
  const e = my(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo(), { getArticleTopics: l } = Wi();
  return {
    fetchPageSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const c = o.value.id, g = {
        id: c,
        type: Ge
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
        type: Ge
      }, p = l(c), m = [];
      return yield io(() => b(void 0, null, function* () {
        const h = yield ie.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (_) => s(_)
        );
        const w = h.filter(
          (_) => !s(_)
        );
        return f = f.slice(0, i), m.push(...f), w.forEach((_) => {
          _ && !r(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
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
  } = Yo(), { getCountries: l } = Wi();
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
      return yield io(() => b(void 0, null, function* () {
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
}, _y = window.Vuex.useStore, vy = window.Vue.computed, Sy = () => {
  const e = _y(), {
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
  } = Yo();
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
}, yy = window.Vuex.useStore, xy = () => {
  const e = yy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Yo();
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
          type: _t
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = [], c = o.value.id;
      return yield io(() => b(void 0, null, function* () {
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
          type: _t
        }
      ), i;
    })
  };
}, Cy = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = cS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = dS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = hy(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: u
  } = wy(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = Sy(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = xy(), p = {
    [Kt]: t,
    [_n]: o,
    [Z]: d,
    [Ge]: a,
    [Ce]: l,
    [_t]: c
  }, m = {
    [Kt]: n,
    [_n]: s,
    [Z]: i,
    [Ge]: r,
    [Ce]: u,
    [_t]: g
  }, h = (_) => _.type === Je ? _.id : _.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, by = window.Vuex.useStore, ou = () => {
  const e = by(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Wc(), { sourceLanguageURLParameter: o } = B(), s = Ko(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = Cy(), d = (g) => {
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
}, ky = window.Vuex.useStore, Ih = () => {
  const e = ky();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ie.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, $y = window.Vuex.useStore, Rh = () => {
  const e = $y(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ou(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Wc(), { targetLanguageURLParameter: a } = B(), r = Ih();
  return () => b(void 0, null, function* () {
    const l = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, c = u.length === d;
    i && c || (yield r(a.value), t(), n());
  });
}, Vy = window.Vuex.useStore, su = () => {
  const e = Vy(), t = Ko();
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
          return new lo({
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
}, gd = window.Vue.computed, Ey = window.Vuex.useStore, Sn = () => {
  const e = Ey(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = gd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = gd(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, zh = window.Vuex.useStore, { setLanguageURLParams: Ly } = B(), au = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Ly(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Oh = () => {
  const e = zh(), t = Rh();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Ae(e);
    n === o && (n = a.value, o = s.value), au(e, n, o), t();
  };
}, Ay = () => {
  const e = zh(), t = su(), { currentLanguageTitleGroup: n, targetPageExists: o } = Sn(), s = Ko();
  return (a, r) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = B();
    a === r && (a = u.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    au(e, a, r), d(c), o.value ? (i(), yield t(
      l.value,
      u.value,
      c
    )) : yield s(l.value, [c]);
  });
}, Dy = window.Vuex.useStore, Ty = window.Vue.ref, pd = Ty(!1), jh = () => {
  const e = Dy(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = da(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = B(), r = () => {
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
    au(e, u, d), pd.value = !0;
  }), applicationLanguagesInitialized: pd };
};
const By = window.Vue.resolveDynamicComponent, md = window.Vue.openBlock, hd = window.Vue.createBlock, Py = window.Vue.Transition, rs = window.Vue.withCtx, ls = window.Vue.createVNode, Fy = window.Vue.resolveComponent, Cr = window.Vue.unref, Ny = window.Vuex.useStore, fd = window.Vue.computed, My = window.Vue.onMounted, Uy = window.Vue.inject, Iy = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = jh();
    t(), n();
    const o = Uy("breakpoints"), s = fd(() => o.value.mobile), a = Ny(), r = fd(
      () => a.state.application.autoSavePending
    );
    return My(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && lh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Go && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, u) => {
      const d = Fy("router-view");
      return md(), hd(Cr(t0), { id: "contenttranslation" }, {
        default: rs(() => [
          ls(Cr(N), { class: "cx-container" }, {
            default: rs(() => [
              ls(Cr(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: rs(() => [
                  ls(d, null, {
                    default: rs(({ Component: i, route: c }) => [
                      ls(Py, {
                        name: s.value ? c.meta.transitionName : ""
                      }, {
                        default: rs(() => [
                          (md(), hd(By(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      ls(y_)
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
}, Ry = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, zy = {
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
class Hh {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class jo {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Hh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const wd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Ze(ae({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Oy {
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
    const t = wd((s = this.user) == null ? void 0 : s.content), n = wd((a = this.mt) == null ? void 0 : a.content);
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
class iu extends Uc {
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
const Ki = mw.user.isAnon() ? void 0 : "user", qh = (e) => {
  if (e === "assertuserfailed")
    throw new Go();
};
function Gh(e, t = null) {
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
        (u) => new Oi(Ze(ae({}, u), { status: e }))
      ) : r = a.map(
        (u) => new iu(Ze(ae({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield Gh(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function jy(e) {
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
      (a) => new Oy(a)
    );
  });
}
function Hy(e, t, n, o, s) {
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
const qy = (e, t, n) => {
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
}, Gy = ({
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
    assert: Ki,
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
          publishFeedbackMessage: new jo({
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
    qh(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new jo({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Xy = ({
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
    assert: Ki,
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
    qh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new jo({ text: h, status: "error" });
  });
}, Wy = (e) => {
  const t = {
    assert: Ki,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Ky = () => {
  const e = {
    assert: Ki,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new iu(n.cxcheckunreviewed.translation)
  );
}, Yy = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Jy = (e) => {
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
  fetchTranslations: Gh,
  fetchTranslationUnits: jy,
  fetchSegmentTranslation: Hy,
  parseTemplateWikitext: qy,
  publishTranslation: Gy,
  saveTranslation: Xy,
  deleteTranslation: Yy,
  fetchTranslatorStats: Qy,
  deleteCXTranslation: Jy,
  splitTranslation: Wy,
  checkUnreviewedTranslations: Ky
};
function Zy(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield vt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const ex = {
  fetchTranslatorStats: Zy
}, tx = {
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
}, nx = {
  namespaced: !0,
  state: Ry,
  getters: zy,
  actions: ex,
  mutations: tx
}, ox = {
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
  appendixSectionTitles: Nv
}, sx = {
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
}, ax = {
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
}, ix = {
  namespaced: !0,
  state: ox,
  getters: sx,
  actions: {},
  mutations: ax
}, rx = {
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
}, lx = {
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
function cx(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield ro.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const ux = { fetchNearbyPages: cx }, dx = {
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
}, gx = {
  namespaced: !0,
  state: rx,
  getters: lx,
  actions: ux,
  mutations: dx
}, px = {
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
  state: px,
  mutations: mx
}, fx = window.Vuex.createStore, wx = fx({
  modules: { translator: nx, suggestions: ix, mediawiki: gx, application: hx }
});
function _x() {
  return Xh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Xh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const vx = typeof Proxy == "function", Sx = "devtools-plugin:setup", yx = "plugin:settings:set";
let po, $c;
function xx() {
  var e;
  return po !== void 0 || (typeof window != "undefined" && window.performance ? (po = !0, $c = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (po = !0, $c = global.perf_hooks.performance) : po = !1), po;
}
function Cx() {
  return xx() ? $c.now() : Date.now();
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
  const n = e, o = Xh(), s = _x(), a = vx && n.enableEarlyProxy;
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
const Wh = window.Vue.getCurrentInstance, Ho = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Xt = window.Vue.computed, ta = window.Vue.unref, $x = window.Vue.watchEffect, Kh = window.Vue.defineComponent, Vx = window.Vue.reactive, Yh = window.Vue.h, br = window.Vue.provide, Ex = window.Vue.ref, Jh = window.Vue.watch, Lx = window.Vue.shallowRef, Ax = window.Vue.shallowReactive, Dx = window.Vue.nextTick, wn = typeof window != "undefined";
function Tx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const J = Object.assign;
function kr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = ct(s) ? s.map(e) : e(s);
  }
  return n;
}
const na = () => {
}, ct = Array.isArray;
function W(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Bx = /\/$/, Px = (e) => e.replace(Bx, "");
function $r(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Mx(o != null ? o : t, n), {
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
function _d(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function vd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && zn(t.matched[o], n.matched[s]) && Qh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function zn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Qh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Nx(e[n], t[n]))
      return !1;
  return !0;
}
function Nx(e, t) {
  return ct(e) ? Sd(e, t) : ct(t) ? Sd(t, e) : e === t;
}
function Sd(e, t) {
  return ct(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Mx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return W(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var aa;
(function(e) {
  e.pop = "pop", e.push = "push";
})(aa || (aa = {}));
var oa;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(oa || (oa = {}));
function Ux(e) {
  if (!e)
    if (wn) {
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
const Yi = () => ({
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
          W(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        W(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && W(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = zx(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function yd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Vc = /* @__PURE__ */ new Map();
function jx(e, t) {
  Vc.set(e, t);
}
function Hx(e) {
  const t = Vc.get(e);
  return Vc.delete(e), t;
}
let qx = () => location.protocol + "//" + location.host;
function Zh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), _d(u, "");
  }
  return _d(n, e) + o + s;
}
function Gx(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = Zh(e, location), m = n.value, h = t.value;
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
        type: aa.pop,
        direction: f ? f > 0 ? oa.forward : oa.back : oa.unknown
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
    g.state && g.replaceState(J({}, g.state, { scroll: Yi() }), "");
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
function xd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Yi() : null
  };
}
function Xx(e) {
  const { history: t, location: n } = window, o = {
    value: Zh(e, n)
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
      ({}).NODE_ENV !== "production" ? W("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = J({}, t.state, xd(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function l(u, d) {
    const i = J(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Yi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && W(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = J({}, xd(o.value, u, null), { position: i.position + 1 }, d);
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
  const s = J({
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
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && W(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Wx(e);
}
function Yx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ef(e) {
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
}, Ec = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Cd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Cd || (Cd = {}));
const Jx = {
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
function qo(e, t) {
  return {}.NODE_ENV !== "production" ? J(new Error(Jx[e](t)), {
    type: e,
    [Ec]: !0
  }, t) : J(new Error(), {
    type: e,
    [Ec]: !0
  }, t);
}
function en(e, t) {
  return e instanceof Error && Ec in e && (t == null || !!(e.type & t));
}
const Qx = ["params", "query", "hash"];
function Zx(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Qx)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const bd = "[^/]+?", eC = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, tC = /[.+*?^${}()[\]/\\]/g;
function nC(e, t) {
  const n = J({}, eC, t), o = [];
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
        const _ = w || bd;
        if (_ !== bd) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + S.message);
          }
        }
        let y = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        c || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, p += 20, f && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
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
          if (ct(w) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = ct(w) ? w.join("/") : w;
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
    if (kd(o))
      return 1;
    if (kd(s))
      return -1;
  }
  return s.length - o.length;
}
function kd(e) {
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
      a.has(r.name) && W(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
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
function cC(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Ed({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = uC(i);
    ({}).NODE_ENV !== "production" && mC(m, c), m.aliasOf = g && g.record;
    const h = Ed(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const S of y)
        f.push(J({}, m, {
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
    for (const y of f) {
      const { path: S } = y;
      if (c && S[0] !== "/") {
        const x = c.record.path, A = x[x.length - 1] === "/" ? "" : "/";
        y.path = c.record.path + (S && A + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = lC(y, c, h), {}.NODE_ENV !== "production" && c && S[0] === "/" && hC(w, c), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && pC(g, w)) : (_ = _ || w, _ !== w && _.alias.push(w), p && i.name && !Vd(w) && r(i.name)), m.children) {
        const x = m.children;
        for (let A = 0; A < x.length; A++)
          a(x[A], w, g && g.children[A]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && u(w);
    }
    return _ ? () => {
      r(_);
    } : na;
  }
  function r(i) {
    if (ef(i)) {
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
    (i.record.path !== n[c].record.path || !tf(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Vd(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw qo(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((y) => !g.keys.find((S) => S.name === y));
        _.length && W(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = J(
        // paramsFromLocation is a new object
        $d(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && $d(i.params, g.keys.map((_) => _.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && W(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((_) => _.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((_) => _.re.test(c.path)), !g)
        throw qo(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, p = J({}, c.params, i.params), m = g.stringify(p);
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
function $d(e, t) {
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
function Vd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function gC(e) {
  return e.reduce((t, n) => J(t, n.meta), {});
}
function Ed(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Lc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function pC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Lc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Lc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function mC(e, t) {
  t && t.record.name && !e.name && !e.path && W(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function hC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Lc.bind(null, n)))
      return W(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function tf(e, t) {
  return t.children.some((n) => n === e || tf(e, n));
}
const nf = /#/g, fC = /&/g, wC = /\//g, _C = /=/g, vC = /\?/g, of = /\+/g, SC = /%5B/g, yC = /%5D/g, sf = /%5E/g, xC = /%60/g, af = /%7B/g, CC = /%7C/g, rf = /%7D/g, bC = /%20/g;
function ru(e) {
  return encodeURI("" + e).replace(CC, "|").replace(SC, "[").replace(yC, "]");
}
function kC(e) {
  return ru(e).replace(af, "{").replace(rf, "}").replace(sf, "^");
}
function Ac(e) {
  return ru(e).replace(of, "%2B").replace(bC, "+").replace(nf, "%23").replace(fC, "%26").replace(xC, "`").replace(af, "{").replace(rf, "}").replace(sf, "^");
}
function $C(e) {
  return Ac(e).replace(_C, "%3D");
}
function VC(e) {
  return ru(e).replace(nf, "%23").replace(vC, "%3F");
}
function EC(e) {
  return e == null ? "" : VC(e).replace(wC, "%2F");
}
function ia(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && W(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function LC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(of, " "), r = a.indexOf("="), l = ia(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : ia(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      ct(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Ld(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = $C(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ct(o) ? o.map((a) => a && Ac(a)) : [o && Ac(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function AC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = ct(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const DC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ad = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ji = Symbol({}.NODE_ENV !== "production" ? "router" : ""), lf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Dc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function cs() {
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
function In(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(qo(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : Yx(c) ? l(qo(2, {
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
        i = i.then((g) => u._called ? g : (W(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        W(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function TC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && W(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Vr(e, t, n, o) {
  const s = [];
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
        if (BC(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(In(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (W(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Tx(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && In(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function BC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Dd(e) {
  const t = Ho(Ji), n = Ho(lf), o = Xt(() => t.resolve(ta(e.to))), s = Xt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(zn.bind(null, i));
    if (g > -1)
      return g;
    const p = Td(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Td(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(zn.bind(null, u[d - 2])) : g
    );
  }), a = Xt(() => s.value > -1 && MC(n.params, o.value.params)), r = Xt(() => s.value > -1 && s.value === n.matched.length - 1 && Qh(n.params, o.value.params));
  function l(u = {}) {
    return NC(u) ? t[ta(e.replace) ? "replace" : "push"](
      ta(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(na) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && wn) {
    const u = Wh();
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
const PC = /* @__PURE__ */ Kh({
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
  useLink: Dd,
  setup(e, { slots: t }) {
    const n = Vx(Dd(e)), { options: o } = Ho(Ji), s = Xt(() => ({
      [Bd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Bd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Yh("a", {
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
function NC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function MC(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!ct(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Td(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Bd = (e, t, n) => e != null ? e : t != null ? t : n, UC = /* @__PURE__ */ Kh({
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
    const o = Ho(Dc), s = Xt(() => e.route || o.value), a = Ho(Ad, 0), r = Xt(() => {
      let d = ta(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Xt(() => s.value.matched[r.value]);
    br(Ad, Xt(() => r.value + 1)), br(DC, l), br(Dc, s);
    const u = Ex();
    return Jh(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !zn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Pd(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = Yh(g, J({}, m, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && wn && f.ref) {
        const w = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (ct(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Pd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Pd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const IC = UC;
function RC() {
  const e = Wh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    W(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function us(e, t) {
  const n = J({}, e, {
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
function Ba(e) {
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
        value: us(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: cf
        });
      }
      ct(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
        let p = gf, m = "";
        g.isExactActive ? (p = df, m = "This is exactly active") : g.isActive && (p = uf, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), Jh(t.currentRoute, () => {
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
        guard: Ba("beforeEach"),
        from: us(c, "Current Location during this navigation"),
        to: us(i, "Target location")
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
        guard: Ba("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = Ba("❌")) : p.status = Ba("✅"), p.from = us(c, "Current Location during this navigation"), p.to = us(i, "Target location"), s.addTimelineEvent({
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
      c.forEach(hf), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Tc(g, i.filter.toLowerCase())
      ))), c.forEach((g) => mf(g, t.currentRoute.value)), i.rootNodes = c.map(pf);
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
const cf = 15485081, uf = 2450411, df = 8702998, qC = 2282478, gf = 16486972, GC = 6710886;
function pf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: qC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: gf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: cf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: df
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: uf
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
    children: e.children.map(pf)
  };
}
let XC = 0;
const WC = /^\/(.*)\/([a-z]*)$/;
function mf(e, t) {
  const n = t.matched.length && zn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => zn(o, e.record))), e.children.forEach((o) => mf(o, t));
}
function hf(e) {
  e.__vd_match = !1, e.children.forEach(hf);
}
function Tc(e, t) {
  const n = String(e.re).match(WC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Tc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = ia(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Tc(r, t));
}
function KC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function YC(e) {
  const t = cC(e.routes, e), n = e.parseQuery || LC, o = e.stringifyQuery || Ld, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = cs(), r = cs(), l = cs(), u = Lx(xn);
  let d = xn;
  wn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = kr.bind(null, (v) => "" + v), c = kr.bind(null, EC), g = (
    // @ts-expect-error: intentionally avoid the type check
    kr.bind(null, ia)
  );
  function p(v, V) {
    let T, F;
    return ef(v) ? (T = t.getRecordMatcher(v), F = V) : F = v, t.addRoute(F, T);
  }
  function m(v) {
    const V = t.getRecordMatcher(v);
    V ? t.removeRoute(V) : {}.NODE_ENV !== "production" && W(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function w(v, V) {
    if (V = J({}, V || u.value), typeof v == "string") {
      const O = $r(n, v, V.path), ne = t.resolve({ path: O.path }, V), ze = s.createHref(O.fullPath);
      return {}.NODE_ENV !== "production" && (ze.startsWith("//") ? W(`Location "${v}" resolved to "${ze}". A resolved location cannot start with multiple slashes.`) : ne.matched.length || W(`No match found for location with path "${v}"`)), J(O, ne, {
        params: g(ne.params),
        hash: ia(O.hash),
        redirectedFrom: void 0,
        href: ze
      });
    }
    let T;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && W(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), T = J({}, v, {
        path: $r(n, v.path, V.path).path
      });
    else {
      const O = J({}, v.params);
      for (const ne in O)
        O[ne] == null && delete O[ne];
      T = J({}, v, {
        params: c(O)
      }), V.params = c(V.params);
    }
    const F = t.resolve(T, V), X = v.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && W(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), F.params = i(g(F.params));
    const se = Fx(o, J({}, v, {
      hash: kC(X),
      path: F.path
    })), H = s.createHref(se);
    return {}.NODE_ENV !== "production" && (H.startsWith("//") ? W(`Location "${v}" resolved to "${H}". A resolved location cannot start with multiple slashes.`) : F.matched.length || W(`No match found for location with path "${"path" in v ? v.path : v}"`)), J({
      fullPath: se,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: X,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Ld ? AC(v.query) : v.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: H
    });
  }
  function _(v) {
    return typeof v == "string" ? $r(n, v, u.value.path) : J({}, v);
  }
  function y(v, V) {
    if (d !== v)
      return qo(8, {
        from: V,
        to: v
      });
  }
  function S(v) {
    return C(v);
  }
  function x(v) {
    return S(J(_(v), { replace: !0 }));
  }
  function A(v) {
    const V = v.matched[v.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: T } = V;
      let F = typeof T == "function" ? T(v) : T;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = _(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw W(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return J({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : v.params
      }, F);
    }
  }
  function C(v, V) {
    const T = d = w(v), F = u.value, X = v.state, se = v.force, H = v.replace === !0, O = A(T);
    if (O)
      return C(
        J(_(O), {
          state: typeof O == "object" ? J({}, X, O.state) : X,
          force: se,
          replace: H
        }),
        // keep original redirectedFrom if it exists
        V || T
      );
    const ne = T;
    ne.redirectedFrom = V;
    let ze;
    return !se && vd(o, F, T) && (ze = qo(16, { to: ne, from: F }), Te(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (ze ? Promise.resolve(ze) : D(ne, F)).catch((Se) => en(Se) ? (
      // navigation redirects still mark the router as ready
      en(
        Se,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Se : Re(Se)
    ) : (
      // reject any unknown error
      ke(Se, ne, F)
    )).then((Se) => {
      if (Se) {
        if (en(
          Se,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          vd(o, w(Se.to), ne) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (W(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ne.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : C(
            // keep options
            J({
              // preserve an existing replacement but allow the redirect to override it
              replace: H
            }, _(Se.to), {
              state: typeof Se.to == "object" ? J({}, X, Se.to.state) : X,
              force: se
            }),
            // preserve the original redirectedFrom if any
            V || ne
          );
      } else
        Se = q(ne, F, !0, H, X);
      return R(ne, F, Se), Se;
    });
  }
  function U(v, V) {
    const T = y(v, V);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function E(v) {
    const V = G.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(v) : v();
  }
  function D(v, V) {
    let T;
    const [F, X, se] = JC(v, V);
    T = Vr(F.reverse(), "beforeRouteLeave", v, V);
    for (const O of F)
      O.leaveGuards.forEach((ne) => {
        T.push(In(ne, v, V));
      });
    const H = U.bind(null, v, V);
    return T.push(H), I(T).then(() => {
      T = [];
      for (const O of a.list())
        T.push(In(O, v, V));
      return T.push(H), I(T);
    }).then(() => {
      T = Vr(X, "beforeRouteUpdate", v, V);
      for (const O of X)
        O.updateGuards.forEach((ne) => {
          T.push(In(ne, v, V));
        });
      return T.push(H), I(T);
    }).then(() => {
      T = [];
      for (const O of se)
        if (O.beforeEnter)
          if (ct(O.beforeEnter))
            for (const ne of O.beforeEnter)
              T.push(In(ne, v, V));
          else
            T.push(In(O.beforeEnter, v, V));
      return T.push(H), I(T);
    }).then(() => (v.matched.forEach((O) => O.enterCallbacks = {}), T = Vr(se, "beforeRouteEnter", v, V), T.push(H), I(T))).then(() => {
      T = [];
      for (const O of r.list())
        T.push(In(O, v, V));
      return T.push(H), I(T);
    }).catch((O) => en(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function R(v, V, T) {
    l.list().forEach((F) => E(() => F(v, V, T)));
  }
  function q(v, V, T, F, X) {
    const se = y(v, V);
    if (se)
      return se;
    const H = V === xn, O = wn ? history.state : {};
    T && (F || H ? s.replace(v.fullPath, J({
      scroll: H && O && O.scroll
    }, X)) : s.push(v.fullPath, X)), u.value = v, Te(v, V, T, H), Re();
  }
  let K;
  function be() {
    K || (K = s.listen((v, V, T) => {
      if (!P.listening)
        return;
      const F = w(v), X = A(F);
      if (X) {
        C(J(X, { replace: !0 }), F).catch(na);
        return;
      }
      d = F;
      const se = u.value;
      wn && jx(yd(se.fullPath, T.delta), Yi()), D(F, se).catch((H) => en(
        H,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? H : en(
        H,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (C(
        H.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        en(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !T.delta && T.type === aa.pop && s.go(-1, !1);
      }).catch(na), Promise.reject()) : (T.delta && s.go(-T.delta, !1), ke(H, F, se))).then((H) => {
        H = H || q(
          // after navigation, all matched components are resolved
          F,
          se,
          !1
        ), H && (T.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !en(
          H,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-T.delta, !1) : T.type === aa.pop && en(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), R(F, se, H);
      }).catch(na);
    }));
  }
  let ue = cs(), Ie = cs(), Be;
  function ke(v, V, T) {
    Re(v);
    const F = Ie.list();
    return F.length ? F.forEach((X) => X(v, V, T)) : ({}.NODE_ENV !== "production" && W("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function De() {
    return Be && u.value !== xn ? Promise.resolve() : new Promise((v, V) => {
      ue.add([v, V]);
    });
  }
  function Re(v) {
    return Be || (Be = !v, be(), ue.list().forEach(([V, T]) => v ? T(v) : V()), ue.reset()), v;
  }
  function Te(v, V, T, F) {
    const { scrollBehavior: X } = e;
    if (!wn || !X)
      return Promise.resolve();
    const se = !T && Hx(yd(v.fullPath, 0)) || (F || !T) && history.state && history.state.scroll || null;
    return Dx().then(() => X(v, V, se)).then((H) => H && Ox(H)).catch((H) => ke(H, v, V));
  }
  const Y = (v) => s.go(v);
  let M;
  const G = /* @__PURE__ */ new Set(), P = {
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
    go: Y,
    back: () => Y(-1),
    forward: () => Y(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: Ie.add,
    isReady: De,
    install(v) {
      const V = this;
      v.component("RouterLink", FC), v.component("RouterView", IC), v.config.globalProperties.$router = V, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ta(u)
      }), wn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !M && u.value === xn && (M = !0, S(s.location).catch((X) => {
        ({}).NODE_ENV !== "production" && W("Unexpected error when starting the router:", X);
      }));
      const T = {};
      for (const X in xn)
        Object.defineProperty(T, X, {
          get: () => u.value[X],
          enumerable: !0
        });
      v.provide(Ji, V), v.provide(lf, Ax(T)), v.provide(Dc, u);
      const F = v.unmount;
      G.add(v), v.unmount = function() {
        G.delete(v), G.size < 1 && (d = xn, K && K(), K = null, u.value = xn, M = !1, Be = !1), F();
      }, {}.NODE_ENV !== "production" && wn && OC(v, V, t);
    }
  };
  function I(v) {
    return v.reduce((V, T) => V.then(() => E(T)), Promise.resolve());
  }
  return P;
}
function JC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => zn(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => zn(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function Xe() {
  return Ho(Ji);
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
const QC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, ZC = (e) => {
  const t = QC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const xt = window.Vue.unref, mo = window.Vue.createVNode, tn = window.Vue.createElementVNode, Fd = window.Vue.renderSlot, Nd = window.Vue.withModifiers, Er = window.Vue.toDisplayString, Lr = window.Vue.withCtx, eb = window.Vue.openBlock, tb = window.Vue.createElementBlock, nb = window.Vue.createCommentVNode, ob = { class: "col shrink pe-4" }, sb = { class: "col" }, ab = { class: "cx-translation__details column justify-between ma-0" }, ib = { class: "row ma-0" }, rb = { class: "col grow" }, lb = { class: "col shrink ps-2" }, cb = ["dir", "textContent"], ub = ["dir", "textContent"], db = ["textContent"], gb = window.Vuex.useStore, pb = window.Vue.computed, ff = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Uc,
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
      onClick: u[1] || (u[1] = Nd((d) => l.$emit("click"), ["stop"]))
    }, [
      tn("div", ob, [
        mo(xt(Mc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      tn("div", sb, [
        tn("div", ab, [
          tn("div", ib, [
            tn("div", rb, [
              Fd(l.$slots, "title")
            ]),
            tn("div", lb, [
              mo(xt(qe), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Nd((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Fd(l.$slots, "mid-content"),
          mo(xt(N), { class: "cx-translation__footer ma-0" }, {
            default: Lr(() => [
              mo(xt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Lr(() => [
                  tn("span", {
                    class: "mw-ui-autonym",
                    dir: xt(z.getDir)(e.translation.sourceLanguage),
                    textContent: Er(xt(z.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, cb),
                  mo(xt(qe), {
                    icon: xt(V0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  tn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: xt(z.getDir)(e.translation.targetLanguage),
                    textContent: Er(xt(z.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, ub)
                ]),
                _: 1
              }),
              mo(xt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Lr(() => [
                  tn("span", {
                    textContent: Er(r.value)
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
const ds = window.Vue.unref, Md = window.Vue.toDisplayString, mb = window.Vue.normalizeClass, hb = window.Vue.createElementVNode, Ar = window.Vue.openBlock, fb = window.Vue.createElementBlock, Ud = window.Vue.createCommentVNode, Id = window.Vue.createVNode, Pa = window.Vue.withCtx, Rd = window.Vue.createBlock, wb = ["lang", "textContent"], _b = ["lang", "textContent"], vb = window.Vue.computed, Sb = window.Vue.inject, yb = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Oi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Sb("colors").gray200, s = vb(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Xe(), { setTranslationURLParams: r } = B(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Ar(), Rd(ff, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": ds(oh),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Pa(() => [
        hb("h5", {
          class: mb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Md(e.translation.sourceTitle)
        }, null, 10, wb),
        e.translation.isLeadSectionTranslation ? Ud("", !0) : (Ar(), fb("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Md(e.translation.sourceSectionTitle)
        }, null, 8, _b))
      ]),
      "mid-content": Pa(() => [
        e.translation.progress ? (Ar(), Rd(ds(N), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Pa(() => [
            Id(ds(k), null, {
              default: Pa(() => [
                Id(ds(rh), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: ds(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ud("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, xb = window.Vuex.useStore, wf = [], Cb = (e, t, n) => wf.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), bb = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  wf.push(o);
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
}, _f = "cx-translation-session-position-", vf = () => _f + mw.user.sessionId(), $b = () => {
  const e = parseInt(
    mw.storage.get(vf())
  );
  return isNaN(e) ? 0 : e;
}, Vb = function(e) {
  const t = vf();
  mw.storage.set(t, e);
}, Eb = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(_f)).forEach((e) => mw.storage.remove(e));
}, Lb = () => {
  const e = $b();
  return e % 10 === 0 && Eb(), Vb(e + 1), e;
};
let Bc = null;
function Ab(e) {
  if (Bc)
    return Promise.resolve(Bc);
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
    Bc = u, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: Db(u)
      })
    );
  });
}
const yt = () => (e) => (e.access_method || (e.access_method = Xo ? "desktop" : "mobile web"), Tb(e)), Sf = window.Vue.ref, yf = Sf(null), Pc = Sf(null), Bb = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), yf.value = e;
}, Pb = (e) => {
  Pc.value = e;
}, Qi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = yt();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: yf.value,
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
      return Pc.value && (r.event_context = Pc.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: Bb,
    setStartTranslationEventContext: Pb
  };
}, ha = () => {
  const e = Xe(), t = su(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Qi();
  return (a, r, l, u, d = null, i = !0) => b(void 0, null, function* () {
    const c = yield t(
      r,
      l,
      a
    );
    c && (n(c), o(u), s(d), i && e.push({ name: "sx-translation-confirmer" }));
  });
};
const Fa = window.Vue.withModifiers, Dr = window.Vue.toDisplayString, Tr = window.Vue.createElementVNode, dt = window.Vue.unref, Na = window.Vue.openBlock, zd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Cn = window.Vue.createVNode, qn = window.Vue.withCtx, Od = window.Vue.createElementBlock, Fb = ["lang", "href", "textContent"], Nb = {
  key: 1,
  class: "flex"
}, Mb = { key: 2 }, jd = window.Vue.computed, Hd = window.Vue.ref, Br = window.Codex.CdxButton, Pr = window.Codex.CdxIcon, Ub = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: iu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Hd(!0), o = Hd(null), s = jd(() => {
      var c;
      return (c = o.value) == null ? void 0 : c.missingSections;
    }), a = jd(
      () => s.value && Object.keys(s.value)[0]
    );
    kb()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((c) => o.value = c).catch((c) => console.log(c)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = B(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = ha(), i = (c) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), c && l(c);
    };
    return (c, g) => (Na(), zd(ff, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: qn(() => [
        Tr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: g[0] || (g[0] = Fa(() => {
          }, ["stop"])),
          textContent: Dr(e.translation.sourceTitle)
        }, null, 8, Fb)
      ]),
      "mid-content": qn(() => [
        Cn(dt(N), { class: "ma-0" }, {
          default: qn(() => [
            Cn(dt(k), null, {
              default: qn(() => [
                n.value ? (Na(), zd(dt(lt), { key: 0 })) : s.value ? (Na(), Od("div", Nb, [
                  Cn(dt(Br), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[1] || (g[1] = Fa((p) => i(a.value), ["stop"]))
                  }, {
                    default: qn(() => [
                      Cn(dt(Pr), {
                        class: "me-1",
                        icon: dt(Cc)
                      }, null, 8, ["icon"]),
                      Tr("span", null, Dr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  Cn(dt(Br), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": c.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: g[2] || (g[2] = Fa((p) => i(null), ["stop"]))
                  }, {
                    default: qn(() => [
                      Cn(dt(Pr), { icon: dt(eu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Na(), Od("div", Mb, [
                  Cn(dt(Br), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[3] || (g[3] = Fa((p) => i(null), ["stop"]))
                  }, {
                    default: qn(() => [
                      Cn(dt(Pr), {
                        class: "me-1",
                        icon: dt(Cc)
                      }, null, 8, ["icon"]),
                      Tr("span", null, Dr(c.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
  const { commit: e } = Ib(), t = yt();
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
const zb = window.Vue.resolveDirective, Fr = window.Vue.createElementVNode, Ob = window.Vue.withDirectives, Nr = window.Vue.unref, qd = window.Vue.createVNode, Gd = window.Vue.withCtx, jb = window.Vue.openBlock, Hb = window.Vue.createBlock, qb = { class: "pa-4" }, Gb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Xb = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Oi,
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
      return jb(), Hb(Nr(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Gd(() => [
          Fr("div", Gb, [
            qd(Nr(Me), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            qd(Nr(Me), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Gd(() => [
          Fr("div", qb, [
            Ob(Fr("span", null, null, 512), [
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
function Xd(e, t, n) {
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
function Jb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Qb = window.Vue.computed;
function Zb(e, t) {
  const n = Qb(() => {
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
const Mr = window.Vue.ref, Ur = window.Vue.watch, ek = window.Vue.computed;
function xf(e, t, n) {
  const o = Mr(""), s = Mr(-1), a = Mr(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = ek(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Ur(e, () => {
    s.value = -1;
  }), Ur(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Ur(s, () => b(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function lu(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Ma = window.Vue.renderSlot, $e = window.Vue.unref, tk = window.Vue.isRef, Wd = window.Vue.createVNode, gs = window.Vue.withModifiers, ps = window.Vue.withKeys, bn = window.Vue.createElementVNode, nk = window.Vue.resolveDirective, Ua = window.Vue.withDirectives, Ir = window.Vue.renderList, Rr = window.Vue.Fragment, nn = window.Vue.openBlock, on = window.Vue.createElementBlock, Kd = window.Vue.toDisplayString, Ia = window.Vue.normalizeClass, zr = window.Vue.createCommentVNode, ok = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, sk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, ak = { class: "results px-3 pt-4" }, ik = { class: "results-header ps-8 pb-2" }, rk = { class: "results-languages--suggestions pa-0 ma-0" }, lk = ["lang", "dir", "aria-selected", "onClick", "textContent"], ck = { class: "results px-3 pt-4" }, uk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, dk = ["lang", "dir", "aria-selected", "onClick", "textContent"], gk = ["aria-selected"], pk = { class: "no-results px-3 py-4" }, mk = { class: "ps-8" }, Ra = window.Vue.ref, hk = window.Vue.watch, fk = window.Vue.onMounted, Yd = window.Vue.computed, Cf = {
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
    const n = e, o = t, s = Ra(null), a = Ra(""), r = Ra([]), l = Ra(n.suggestions), u = Yd(
      () => Jb(r.value)
    ), d = Yd(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => o("select", S), c = () => o("close"), { autocompletion: g, onTabSelect: p } = Zb(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: w } = xf(a, r, l), _ = () => {
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
    return hk(a, lu(() => b(this, null, function* () {
      r.value = yield Xd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), fk(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Xd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, x) => {
      const A = nk("i18n");
      return nn(), on("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Ma(S.$slots, "search", {}, () => [
          bn("div", ok, [
            Wd($e(xc), {
              value: $e(g),
              "onUpdate:value": x[0] || (x[0] = (C) => tk(g) ? g.value = C : null),
              icon: $e(Du),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Wd($e(xc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": x[1] || (x[1] = (C) => a.value = C),
              class: "mw-ui-language-selector__search pa-4",
              icon: $e(Du),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                ps(gs(_, ["prevent"]), ["enter"]),
                ps(gs($e(m), ["stop", "prevent"]), ["down"]),
                ps(gs($e(h), ["stop", "prevent"]), ["up"]),
                ps(gs(c, ["prevent"]), ["esc"]),
                ps(gs($e(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        bn("section", sk, [
          e.suggestions.length && !a.value ? Ma(S.$slots, "suggestions", { key: 0 }, () => [
            bn("section", ak, [
              Ua(bn("p", ik, null, 512), [
                [A, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              bn("ul", rk, [
                (nn(!0), on(Rr, null, Ir(e.suggestions, (C) => (nn(), on("li", {
                  key: C,
                  class: Ia(["language ma-0", { "language--selected": C === $e(w) }]),
                  lang: C,
                  dir: $e(z.getDir)(C),
                  "aria-selected": C === $e(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (U) => i(C),
                  textContent: Kd($e(z.getAutonym)(C))
                }, null, 10, lk))), 128))
              ])
            ])
          ]) : zr("", !0),
          u.value.length ? Ma(S.$slots, "search", { key: 1 }, () => [
            bn("section", ck, [
              e.suggestions.length && !a.value ? Ua((nn(), on("p", uk, null, 512)), [
                [A, void 0, "cx-sx-language-selector-all-languages"]
              ]) : zr("", !0),
              (nn(!0), on(Rr, null, Ir(u.value, (C, U) => (nn(), on("ul", {
                key: U,
                class: Ia(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (nn(!0), on(Rr, null, Ir(C, (E) => (nn(), on("li", {
                  key: E,
                  class: Ia(["language ma-0", { "language--selected": E === $e(w) }]),
                  lang: E,
                  dir: $e(z.getDir)(E),
                  role: "option",
                  "aria-selected": E === $e(w) || null,
                  tabindex: "-1",
                  onClick: (D) => i(E),
                  textContent: Kd($e(z.getAutonym)(E))
                }, null, 10, dk))), 128)),
                e.allOptionEnabled && !a.value ? Ua((nn(), on("li", {
                  key: 0,
                  class: Ia(["language ma-0", { "language--selected": $e(w) === "all" }]),
                  role: "option",
                  "aria-selected": $e(w) === "all" || null,
                  tabindex: "-1",
                  onClick: x[2] || (x[2] = (E) => i("all"))
                }, null, 10, gk)), [
                  [A, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : zr("", !0)
              ], 2))), 128))
            ])
          ]) : Ma(S.$slots, "noresults", { key: 2 }, () => [
            bn("section", pk, [
              Ua(bn("h3", mk, null, 512), [
                [A, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const wk = window.Vue.resolveDirective, Jd = window.Vue.withDirectives, ms = window.Vue.openBlock, hs = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ve = window.Vue.unref, Qd = window.Vue.toDisplayString, Ct = window.Vue.createVNode, Zd = window.Vue.withModifiers, Gn = window.Vue.withCtx, _k = window.Vue.normalizeClass, vk = {
  key: 0,
  class: "mw-ui-autonym"
}, Sk = ["lang", "dir", "textContent"], yk = {
  key: 0,
  class: "mw-ui-autonym"
}, xk = ["lang", "dir", "textContent"], fs = window.Vue.computed, Ck = window.Vue.inject, bk = window.Vue.ref, eg = window.Codex.CdxButton, Or = window.Codex.CdxIcon, Ii = {
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
    const n = e, o = t, s = Ck("breakpoints"), a = fs(() => s.value.mobile), r = bk(null), l = fs(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = fs(() => {
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
    }, p = fs(
      () => n.selectedSourceLanguage === "all"
    ), m = fs(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = wk("i18n");
      return ms(), hs("div", {
        class: _k(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Ct(Ve(N), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Gn(() => [
            Ct(Ve(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Gn(() => [
                Ct(Ve(eg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Zd(u, ["stop"])
                }, {
                  default: Gn(() => [
                    p.value ? Jd((ms(), hs("span", vk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (ms(), hs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ve(z.getDir)(e.selectedSourceLanguage),
                      textContent: Qd(Ve(z.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Sk)),
                    Ct(Ve(Or), {
                      size: "x-small",
                      icon: Ve(bc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Ct(Ve(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Gn(() => [
                Ct(Ve(Or), { icon: Ve(Bh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Ct(Ve(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Gn(() => [
                Ct(Ve(eg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Zd(d, ["stop"])
                }, {
                  default: Gn(() => [
                    m.value ? Jd((ms(), hs("span", yk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (ms(), hs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ve(z.getDir)(e.selectedTargetLanguage),
                      textContent: Qd(Ve(z.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, xk)),
                    Ct(Ve(Or), {
                      size: "x-small",
                      icon: Ve(bc)
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
        Ct(Ve(St), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (_) => l.value = _),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Gn(() => [
            Ct(Ve(Cf), {
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
const tg = window.Vue.unref, kk = window.Vue.createVNode, za = window.Vue.createElementVNode, ng = window.Vue.toDisplayString, $k = window.Vue.openBlock, Vk = window.Vue.createElementBlock, Ek = { class: "cx-list-empty-placeholder pa-4" }, Lk = { class: "cx-list-empty-placeholder__icon-container" }, Ak = { class: "cx-list-empty-placeholder__icon" }, Dk = ["textContent"], Tk = ["textContent"], Bk = window.Codex.CdxIcon, bf = {
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
      za("div", Lk, [
        za("div", Ak, [
          kk(tg(Bk), { icon: tg(Mh) }, null, 8, ["icon"])
        ])
      ]),
      za("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: ng(e.title)
      }, null, 8, Dk),
      za("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: ng(e.description)
      }, null, 8, Tk)
    ]));
  }
}, Pk = window.Vuex.useStore, Fk = window.Vue.ref, Oa = Fk({ draft: !1, published: !1 }), Qo = () => {
  const e = Pk(), t = Ko(), n = (s) => b(void 0, null, function* () {
    let a = yield vt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const u = l.sourceLanguage;
      r[u] = r[u] || [], r[u].push(l);
    }
    Oa.value[s] = !0;
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
          new Wo({ title: c, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Oa.value).filter(
        (r) => !Oa.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Oa
  };
};
const Nk = window.Vue.toDisplayString, jr = window.Vue.normalizeClass, og = window.Vue.createElementVNode, Ut = window.Vue.openBlock, ho = window.Vue.createBlock, ja = window.Vue.createCommentVNode, sg = window.Vue.unref, ag = window.Vue.renderList, ig = window.Vue.Fragment, Ha = window.Vue.createElementBlock, Mk = window.Vue.createVNode, rg = window.Vue.withCtx, Uk = ["textContent"], Ik = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Rk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, qa = window.Vue.ref, bt = window.Vue.computed, zk = window.Vue.inject, Ok = window.Vuex.useStore, lg = {
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
    const t = e, n = qa("all"), o = qa("all"), s = Ok(), { translationsFetched: a } = Qo(), r = bt(
      () => a.value[t.translationStatus]
    ), l = qa(!1), u = qa(null), d = bt(
      () => t.translationStatus === "draft"
    ), i = bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = bt(
      () => n.value === "all"
    ), g = bt(
      () => o.value === "all"
    ), p = bt(
      () => i.value.filter(
        (x) => (c.value || x.sourceLanguage === n.value) && (g.value || x.targetLanguage === o.value)
      ).sort((x, A) => x.lastUpdatedTimestamp < A.lastUpdatedTimestamp)
    ), m = bt(() => {
      const x = i.value.map(
        (A) => A.targetLanguage
      );
      return [...new Set(x)];
    }), h = bt(() => {
      const x = i.value.map(
        (A) => A.sourceLanguage
      );
      return [...new Set(x)];
    }), f = (x) => {
      u.value = x, l.value = !0;
    }, w = bt(() => t.activeStatus === t.translationStatus), _ = zk("breakpoints"), y = bt(() => _.value.mobile), S = bt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (x, A) => w.value ? (Ut(), ho(sg(Qe), {
      key: 0,
      class: jr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: rg(() => [
        og("div", {
          class: jr(["cx-translation-list__header", S.value])
        }, [
          og("h3", {
            class: jr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Nk(x.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Uk),
          p.value.length ? (Ut(), ho(Ii, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": A[0] || (A[0] = (C) => n.value = C),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": A[1] || (A[1] = (C) => o.value = C),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ja("", !0)
        ], 2)
      ]),
      default: rg(() => [
        r.value && !p.value.length ? (Ut(), ho(bf, {
          key: 0,
          title: x.$i18n("cx-sx-translation-list-empty-title"),
          description: x.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ja("", !0),
        r.value ? ja("", !0) : (Ut(), ho(sg(lt), { key: 1 })),
        d.value ? (Ut(), Ha("div", Ik, [
          (Ut(!0), Ha(ig, null, ag(p.value, (C) => (Ut(), ho(yb, {
            key: `${e.translationStatus}-${C.key}`,
            translation: C,
            onDeleteTranslation: (U) => f(C)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Ut(), Ha("div", Rk, [
          (Ut(!0), Ha(ig, null, ag(p.value, (C) => (Ut(), ho(Ub, {
            key: `${e.translationStatus}-${C.key}`,
            translation: C
          }, null, 8, ["translation"]))), 128))
        ])),
        Mk(Xb, {
          modelValue: l.value,
          "onUpdate:modelValue": A[2] || (A[2] = (C) => l.value = C),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ja("", !0);
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
    { [zo.LEAD_SECTION_DUMMY_TITLE]: r[0].byteoffset }
  );
  return t.length === 1 ? l[t[0]] : Object.keys(l).filter((u) => t.includes(u)).reduce((u, d) => u + l[d], 0);
}), kf = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Hk = (e, t = []) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  let s;
  if (t.length) {
    if (t.length === 1)
      return s = t[0] === zo.LEAD_SECTION_DUMMY_TITLE ? "cx-sx-translation-confirmer-translation-time-lead-section" : "cx-sx-translation-confirmer-translation-time-single-section", [s, o, e];
  } else
    return s = "cx-sx-translation-confirmer-translation-time-whole-article", [s, o, e];
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t.length
  ];
}, $f = (e) => kf(e) < 15;
const Hr = window.Vue.toDisplayString, qr = window.Vue.unref, ws = window.Vue.openBlock, Gr = window.Vue.createBlock, cg = window.Vue.createCommentVNode, qk = window.Vue.createTextVNode, Gk = window.Vue.Fragment, ug = window.Vue.createElementBlock, Fc = window.Vue.createElementVNode, Xk = window.Vue.withKeys, Wk = window.Vue.withCtx, Kk = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Yk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Jk = /* @__PURE__ */ Fc("span", null, "/", -1), Qk = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, dg = window.Codex.CdxIcon, Zk = window.Codex.CdxInfoChip, Ga = window.Vue.computed, ao = {
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
    const t = e, n = Ga(() => t.content.lastIndexOf("/")), o = Ga(() => t.content.slice(0, n.value)), s = Ga(() => t.content.slice(n.value + 1)), a = Ga(
      () => t.expanded ? JS : bc
    );
    return (r, l) => (ws(), Gr(qr(Zk), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = Xk((u) => r.$emit("click"), ["enter"]))
    }, {
      default: Wk(() => [
        n.value === -1 ? (ws(), ug(Gk, { key: 0 }, [
          qk(Hr(e.content) + " ", 1),
          e.expandable ? (ws(), Gr(qr(dg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : cg("", !0)
        ], 64)) : (ws(), ug("div", Kk, [
          Fc("span", Yk, Hr(o.value), 1),
          Jk,
          Fc("span", Qk, Hr(s.value), 1),
          e.expandable ? (ws(), Gr(qr(dg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : cg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const re = window.Vue.unref, kt = window.Vue.createVNode, kn = window.Vue.createElementVNode, Xa = window.Vue.toDisplayString, gt = window.Vue.withCtx, e8 = window.Vue.resolveDirective, Xr = window.Vue.withDirectives, Xn = window.Vue.openBlock, fo = window.Vue.createBlock, wo = window.Vue.createCommentVNode, gg = window.Vue.withModifiers, t8 = window.Vue.createElementBlock, n8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, o8 = { class: "col shrink pe-4" }, s8 = ["lang", "dir", "textContent"], a8 = ["lang", "dir", "textContent"], i8 = ["textContent"], r8 = ["textContent"], Wr = window.Codex.CdxIcon, $t = window.Vue.computed, l8 = window.Vue.inject, c8 = window.Vuex.useStore, Nc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [lo, Rn, Oo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = c8(), o = $t(() => t.suggestion), s = $t(
      () => o.value.sourceTitle || o.value.title
    ), a = $t(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = $t(
      () => {
        var w;
        return (w = o.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), l = $t(() => {
      var w;
      return (w = a.value) == null ? void 0 : w.description;
    }), u = $t(
      () => o.value instanceof Rn
    ), d = $t(
      () => o.value instanceof Oo
    ), { sourceLanguageAutonym: i, targetLanguageAutonym: c } = Ae(n), g = $t(
      () => d.value ? Fh : Nh
    ), p = l8("colors"), m = $t(
      () => d.value ? p.blue600 : "currentColor"
    ), h = $t(
      () => {
        var w;
        return $f((w = a.value) == null ? void 0 : w.articleSize);
      }
    ), f = $t(
      () => o.value instanceof Vh || o.value instanceof Eh
    );
    return (w, _) => {
      const y = e8("i18n");
      return o.value ? (Xn(), t8("div", n8, [
        kn("div", o8, [
          kt(re(Mc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        kt(re(N), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: gt(() => [
            kt(re(N), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: gt(() => [
                kt(re(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: gt(() => [
                    kn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: re(z.getDir)(o.value.sourceLanguage),
                      textContent: Xa(s.value)
                    }, null, 8, s8)
                  ]),
                  _: 1
                }),
                kt(re(k), { shrink: "" }, {
                  default: gt(() => [
                    kn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: re(z.getDir)(o.value.sourceLanguage),
                      textContent: Xa(l.value)
                    }, null, 8, a8)
                  ]),
                  _: 1
                }),
                h.value && !u.value && !f.value ? (Xn(), fo(re(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: gt(() => [
                    Xr(kn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : wo("", !0),
                u.value ? (Xn(), fo(re(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: gt(() => [
                    Xr(kn("small", null, null, 512), [
                      [y, [r.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : d.value ? (Xn(), fo(re(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: gt(() => [
                    kt(re(N), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: gt(() => [
                        kt(re(k), { grow: "" }, {
                          default: gt(() => [
                            kn("small", {
                              textContent: Xa(re(i))
                            }, null, 8, i8),
                            kt(re(Wr), {
                              icon: re(Bh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            kn("small", {
                              textContent: Xa(re(c))
                            }, null, 8, r8)
                          ]),
                          _: 1
                        }),
                        r.value ? (Xn(), fo(re(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: gt(() => [
                            Xr(kn("small", null, null, 512), [
                              [y, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : wo("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : wo("", !0),
                f.value ? (Xn(), fo(re(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: gt(() => [
                    kt(ao, {
                      icon: re(Qc),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : wo("", !0)
              ]),
              _: 1
            }),
            kt(re(k), { shrink: "" }, {
              default: gt(() => [
                d.value ? wo("", !0) : (Xn(), fo(re(Wr), {
                  key: 0,
                  icon: re(Jo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: _[0] || (_[0] = gg((S) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                kt(re(Wr), {
                  class: "cx-suggestion__favorite-button",
                  icon: g.value,
                  "icon-color": m.value,
                  onClick: _[1] || (_[1] = gg((S) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : wo("", !0);
    };
  }
};
const Kr = window.Vue.normalizeClass, pg = window.Vue.createVNode, u8 = window.Vue.renderList, mg = window.Vue.Fragment, _s = window.Vue.openBlock, Wa = window.Vue.createElementBlock, d8 = window.Vue.createBlock, g8 = window.Vue.toDisplayString, p8 = window.Vue.withKeys, hg = window.Vue.createCommentVNode, m8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Ka = window.Vue.computed, h8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: Ft,
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
    const n = e, o = Ka(() => n.filter.expandable ? n.isSelected(n.filter) ? !0 : n.filter.subFilters ? n.filter.subFilters.some(
      (c) => n.isSelected(c)
    ) : !1 : !1), s = t, a = () => {
      s("filter-selected", n.filter);
    }, r = Ka(() => n.filter.chipLabel), l = (c) => {
      const { label: g } = c, p = n.filter.label;
      return g.startsWith(`${p}/`) ? g.replace(`${p}/`, "") : g;
    }, u = Ka(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), d = Ka(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), i = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (c, g) => (_s(), Wa(mg, null, [
      pg(ao, {
        class: Kr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: r.value,
        expandable: !!e.filter.expandable,
        onClick: a
      }, null, 8, ["class", "icon", "content", "expandable"]),
      o.value ? (_s(), Wa("div", m8, [
        pg(ao, {
          class: Kr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: c.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: g[0] || (g[0] = (p) => c.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (_s(!0), Wa(mg, null, u8(u.value, (p) => (_s(), d8(ao, {
          key: p.id,
          class: Kr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: l(p),
          icon: p.icon,
          onClick: (m) => c.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        d.value ? (_s(), Wa("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: i,
          onKeyup: p8(i, ["enter"])
        }, g8(e.viewMoreConfig.label), 33)) : hg("", !0)
      ])) : hg("", !0)
    ], 64));
  }
};
const f8 = window.Vue.toDisplayString, fg = window.Vue.createElementVNode, w8 = window.Vue.renderList, wg = window.Vue.Fragment, Yr = window.Vue.openBlock, _g = window.Vue.createElementBlock, _8 = window.Vue.createBlock, v8 = { class: "sx-suggestions-filters__group-label mb-3" }, S8 = { class: "sx-suggestions-filters__group-filters mb-3" }, y8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: ea,
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
    return (o, s) => (Yr(), _g(wg, null, [
      fg("div", v8, f8(e.filterGroup.label), 1),
      fg("div", S8, [
        (Yr(!0), _g(wg, null, w8(n(), (a) => (Yr(), _8(h8, {
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
}, x8 = window.Vue.computed, vg = window.Vue.ref, Sg = window.Vue.watch, cu = (e, t) => {
  const o = vg([]), s = vg(!1), a = x8(
    () => o.value.slice(0, 4)
  ), r = lu(() => b(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield ro.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), l = () => {
    s.value = !0, o.value = [], r();
  };
  return Sg(t, l), Sg(e, l), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class Ya {
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
const Jr = window.Vue.ref, yg = window.Vue.watch, xg = window.Vue.computed, { topics: C8, regions: b8 } = mw.loader.require(
  "ext.cx.articlefilters"
), k8 = C8.flatMap(
  (e) => e.topics.map((t) => Ze(ae({}, t), {
    groupId: e.groupId
  }))
), $8 = () => {
  const e = Jr(""), t = Jr("all"), n = Jr({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = ce(), { pageCollectionGroups: s } = Jc(), { sourceLanguageURLParameter: a } = B(), r = (p) => (p = p.toLowerCase(), k8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), u = (p) => (p = p.toLowerCase(), b8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = xg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = cu(
    a,
    d
  );
  yg(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new Ya({
          label: p.title,
          value: p.title,
          description: p.description,
          thumbnail: { url: (m = p.thumbnail) == null ? void 0 : m.source },
          filterType: _t,
          filterId: p.title,
          showThumbnail: !0
        });
      }
    );
  }), yg([e, t], () => b(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new Ya({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? kc : null,
        filterType: Ge,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new Ya({
        label: p.name,
        value: p.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? Qc : null,
        filterType: Z,
        filterId: p.name
      })
    ), n.value.regions = u(e.value).map(
      (p) => new Ya({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? kc : null,
        filterType: Ce,
        filterId: p.id
      })
    );
  }));
  const g = xg(() => {
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
}, V8 = "suggestion_filter_topic_area", E8 = "suggestion_filter_search_result_seed", L8 = "suggestion_filter_collections", A8 = "suggestion_filter_previous_edits", D8 = "suggestion_filter_popular_articles", T8 = "suggestion_filter_region", Qr = (e) => {
  if (e.type === Ge || e.type === Ce || e.type === Z || e.type === _t)
    return e.id;
  if (e.id === Z)
    return "all-collections";
}, Zr = (e) => {
  if (e.type === Ge)
    return V8;
  if (e.type === Ce)
    return T8;
  if (e.type === _t)
    return E8;
  if (e.id === Z || e.type === Z)
    return L8;
  if (e.id === Kt)
    return A8;
  if (e.id === _n)
    return D8;
}, Vf = () => {
  const e = yt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: Zr(r),
      event_context: Qr(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Zr(r),
      event_context: Qr(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Zr(r),
      event_context: Qr(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const me = window.Vue.unref, pt = window.Vue.createVNode, Vt = window.Vue.withCtx, B8 = window.Vue.resolveDirective, It = window.Vue.createElementVNode, _o = window.Vue.withDirectives, Cg = window.Vue.toDisplayString, P8 = window.Vue.createTextVNode, F8 = window.Vue.vShow, bg = window.Vue.renderList, kg = window.Vue.Fragment, sn = window.Vue.openBlock, Wn = window.Vue.createElementBlock, $g = window.Vue.isRef, N8 = window.Vue.withKeys, Vg = window.Vue.createCommentVNode, Eg = window.Vue.createBlock, M8 = { class: "sx-suggestions-filters" }, U8 = { class: "mb-0" }, I8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, R8 = { class: "mb-3" }, z8 = { class: "px-4 pb-4 pt-7" }, O8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, j8 = ["onKeyup", "onClick"], H8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, q8 = { class: "sx-suggestions-filters__search-results-pending" }, G8 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, X8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, W8 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, Ja = window.Vue.ref, vo = window.Vue.computed, K8 = window.Vue.inject, Y8 = window.Vue.watch, Lg = window.Codex.CdxButton, J8 = window.Codex.CdxIcon, Q8 = window.Codex.CdxTextInput, Z8 = window.Codex.CdxMenu, e2 = window.Codex.CdxTabs, t2 = window.Codex.CdxTab, n2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = ce(), o = t, s = vo(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: g([
          Je,
          Z,
          Ce,
          Ge
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
        filterGroups: g([Ce])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: g([Ge])
      }
    ]), a = (M) => R.value = M, r = (M, G) => G === "all" && M.type === Ce ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          M.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, l = (M, G) => {
      if (M !== "all")
        return !1;
      if (G === Z) {
        const P = g([Z]);
        return P.length && P[0].filters.length > 6;
      }
      return G === Ce;
    }, { allFilters: u, isFilterSelected: d, selectFilter: i, findSelectedFilter: c } = Wi(), g = (M) => M.flatMap((G) => u.value.filter((P) => P.type === G)).filter(Boolean), p = () => {
      x(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: m,
      logSuggestionFiltersConfirm: h,
      logSuggestionFiltersSelect: f
    } = Vf(), w = () => {
      m(), p();
    }, _ = () => {
      S.value && (h(S.value), i(S.value)), p();
    }, y = Ja(!1), S = Ja(null), x = () => {
      S.value = null, y.value = !1;
    }, A = (M) => {
      f(M), S.value = M, y.value = !0;
    }, C = (M) => S.value ? S.value.id === M.id && S.value.type === M.type : d(M), U = K8("breakpoints"), E = vo(() => U.value.mobile), { searchInput: D, searchScope: R, searchResults: q, searchResultsLoading: K } = $8(), be = vo(
      () => S.value || c()
    ), ue = Ja(null);
    Y8(ue, () => {
      if (!ue.value)
        return;
      const M = Be.value.find(
        (G) => G.value === ue.value
      );
      A({
        type: M.filterType,
        id: M.filterId,
        label: M.label
      }), D.value = "";
    });
    const Ie = {
      [Z]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Ce]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, Be = vo(
      () => q.value.flatMap((M) => M.items)
    ), ke = Ja({}), De = vo(
      () => ke.value[R.value]
    ), Re = vo(() => {
      var G;
      const M = (G = De.value) == null ? void 0 : G.getHighlightedMenuItem();
      return M == null ? void 0 : M.id;
    }), Te = (M) => {
      M.key !== " " && De.value && De.value.delegateKeyNavigation(M);
    }, Y = (M, G) => {
      ke.value[G] = M;
    };
    return (M, G) => {
      const P = B8("i18n");
      return sn(), Eg(me(St), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: E.value,
        header: !1
      }, {
        default: Vt(() => [
          It("section", M8, [
            pt(me(N), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Vt(() => [
                pt(me(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Vt(() => [
                    pt(me(Lg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": M.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: Vt(() => [
                        pt(me(J8), { icon: me(Jo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                pt(me(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Vt(() => [
                    _o(It("h5", U8, null, 512), [
                      [P, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                pt(me(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Vt(() => [
                    _o(pt(me(Lg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: _
                    }, {
                      default: Vt(() => [
                        P8(Cg(M.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
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
            It("div", I8, [
              _o(It("h5", R8, null, 512), [
                [P, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              It("div", null, [
                pt(ao, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: be.value.label,
                  icon: be.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            pt(me(e2), {
              active: me(R),
              "onUpdate:active": [
                G[2] || (G[2] = (I) => $g(R) ? R.value = I : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Vt(() => [
                (sn(!0), Wn(kg, null, bg(s.value, (I, v) => (sn(), Eg(me(t2), {
                  key: v,
                  name: I.name,
                  label: I.label
                }, {
                  default: Vt(() => [
                    It("div", z8, [
                      pt(me(Q8), {
                        modelValue: me(D),
                        "onUpdate:modelValue": G[0] || (G[0] = (V) => $g(D) ? D.value = V : null),
                        role: "combobox",
                        "aria-activedescendant": Re.value,
                        "aria-controls": "sx-suggestions-filters__search-results__menu",
                        "aria-autocomplete": "none",
                        placeholder: I.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": me(kc),
                        clearable: !!me(D),
                        onKeydown: Te
                      }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
                    ]),
                    me(D) ? (sn(), Wn("div", H8, [
                      pt(me(Z8), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (V) => Y(V, I.name),
                        selected: ue.value,
                        "onUpdate:selected": G[1] || (G[1] = (V) => ue.value = V),
                        "show-pending": me(K),
                        expanded: "",
                        "menu-items": Be.value
                      }, {
                        pending: Vt(() => [
                          _o(It("div", q8, null, 512), [
                            [P, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Vt(() => [
                          me(K) ? Vg("", !0) : (sn(), Wn("div", G8, [
                            _o(It("span", X8, null, 512), [
                              [P, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            _o(It("span", W8, null, 512), [
                              [P, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (sn(), Wn("div", O8, [
                      (sn(!0), Wn(kg, null, bg(I.filterGroups, (V) => (sn(), Wn("div", {
                        key: V.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        pt(y8, {
                          "filter-group": V,
                          "tentatively-select-filter": A,
                          "is-selected": C,
                          limit: l(I.name, V.type) ? 4 : 0,
                          "get-sub-filter-config": (T) => r(T, I.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        l(I.name, V.type) ? (sn(), Wn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: N8((T) => a(V.id), ["enter"]),
                          onClick: (T) => a(V.id)
                        }, [
                          It("span", null, Cg(M.$i18n(Ie[V.id])), 1)
                        ], 40, j8)) : Vg("", !0)
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
const vs = window.Vue.unref, Qa = window.Vue.openBlock, Ag = window.Vue.createBlock;
window.Vue.createCommentVNode;
const o2 = window.Vue.renderList, s2 = window.Vue.Fragment, Dg = window.Vue.createElementBlock, a2 = window.Vue.normalizeClass, Tg = window.Vue.createVNode, i2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Bg = window.Vue.ref;
window.Vue.computed;
const Pg = window.Vue.watch, r2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ce(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Vf(), {
      getFiltersSummary: s,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: u
    } = Wi(), d = Bg(!1), i = () => {
      o(), d.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = Bg(s());
    return Pg(d, (p) => {
      p || (g.value = s());
    }), Pg(l, (p) => {
      p || (u(), g.value = s());
    }), (p, m) => vs(l) ? (Qa(), Ag(vs(lt), { key: 0 })) : (Qa(), Dg("div", i2, [
      (Qa(!0), Dg(s2, null, o2(g.value, (h) => (Qa(), Ag(ao, {
        key: h.label,
        class: a2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": vs(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Tg(ao, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: vs(eu),
        content: vs(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Tg(n2, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, So = window.Vue.computed, Fg = window.Vue.ref, l2 = window.Vue.watch, c2 = window.Vuex.useStore, u2 = () => {
  const e = c2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Wc(), r = yt(), l = So(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = So(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Fg(0), i = Fg(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = So(
    () => a(d.value)
  ), m = So(
    () => s(i.value)
  ), h = () => {
    x(), E(), A(), D();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = ou(), _ = (R) => R.length === c, y = So(
    () => _(m.value)
  ), S = So(
    () => _(p.value)
  ), x = () => {
    const R = (d.value + 1) % g, q = _(
      a(R)
    );
    (!S.value || !q) && f();
  }, A = () => {
    const R = (i.value + 1) % g, q = _(
      s(R)
    );
    (!y.value || !q) && w();
  }, C = (R) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", R), x();
  }, U = (R) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", R), A();
  }, E = () => d.value = (d.value + 1) % g, D = () => i.value = (i.value + 1) % g;
  return l2(
    o,
    () => {
      i.value = 0, A(), d.value = 0, x();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: U,
    discardSectionSuggestion: C,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, d2 = window.Vuex.useStore, uu = () => {
  const e = d2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ou(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), s = (d) => b(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield ie.markFavorite(i, c, g);
    const p = new Oo({
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
      const m = new Oo({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), ie.unmarkFavorite(d))
  };
}, g2 = "suggestion_no_seed", p2 = "suggestion_recent_edit", m2 = "suggestion_topic_area", h2 = "suggestion_search_result_seed", f2 = "suggestion_featured", w2 = "suggestion_collections", _2 = "suggestion_region", v2 = () => {
  const { currentSuggestionFilters: e } = B();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === Kt)
      return t ? p2 : g2;
    if (n === Ge)
      return m2;
    if (n === Ce)
      return _2;
    if (n === _t)
      return h2;
    if (o === _n)
      return f2;
    if (o === Z || n === Z)
      return w2;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const Ng = window.Vue.normalizeClass, S2 = window.Vue.resolveDirective, Ss = window.Vue.createElementVNode, Za = window.Vue.withDirectives, de = window.Vue.unref, et = window.Vue.openBlock, Rt = window.Vue.createBlock, $n = window.Vue.createCommentVNode, el = window.Vue.createVNode, ys = window.Vue.withCtx, Mg = window.Vue.renderList, Ug = window.Vue.Fragment, tl = window.Vue.createElementBlock, y2 = window.Vue.toDisplayString, x2 = window.Vue.createTextVNode, C2 = window.Vue.vShow, b2 = { class: "cx-suggestion-list" }, k2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, $2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, V2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, zt = window.Vue.computed, E2 = window.Vue.inject, L2 = window.Vue.ref, A2 = window.Codex.CdxButton, D2 = window.Codex.CdxIcon, T2 = window.Vuex.useStore, B2 = {
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
    } = B(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = da(), r = Oh(), l = (Y) => r(Y, n.value), u = (Y) => r(t.value, Y), d = v2(), i = ha(), c = (Y) => {
      i(
        Y.sourceTitle,
        Y.sourceLanguage,
        Y.targetLanguage,
        d(Y.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: w,
      sectionSuggestionsLoading: _,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = u2(), x = L2(null), A = yt(), C = () => {
      A({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), x.value && x.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: U, markFavoritePageSuggestion: E } = uu(), D = E2("breakpoints"), R = zt(() => D.value.mobile), q = zt(
      () => R.value ? null : "pb-2 flex justify-between items-center"
    ), K = T2(), be = zt(
      () => K.state.suggestions.isPageSuggestionsFetchPending
    ), ue = zt(
      () => K.state.suggestions.isSectionSuggestionsFetchPending
    ), Ie = zt(
      () => be.value || w.value && !y.value
    ), Be = zt(
      () => ue.value || _.value && !S.value
    ), ke = zt(
      () => be.value || w.value || g.value.length > 0
    ), De = zt(
      () => ue.value || _.value || p.value.length > 0
    ), Re = zt(
      () => !ke.value && !De.value
    ), Te = zt(
      () => !_.value && !w.value && !be.value && !ue.value && !Re.value
    );
    return (Y, M) => {
      const G = S2("i18n");
      return Za((et(), tl("div", b2, [
        el(de(Qe), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: ys(() => [
            Ss("div", {
              class: Ng(["cx-suggestion-list__header-card__header px-4", q.value])
            }, [
              Za(Ss("h3", {
                class: Ng(["mw-ui-card__title mb-0", { "py-3": R.value }])
              }, null, 2), [
                [G, void 0, "cx-suggestionlist-title"]
              ]),
              R.value ? $n("", !0) : (et(), Rt(Ii, {
                key: 0,
                "source-languages": de(s),
                "target-languages": de(a),
                "selected-source-language": de(t),
                "selected-target-language": de(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            el(r2)
          ]),
          default: ys(() => [
            R.value ? (et(), Rt(Ii, {
              key: 0,
              "source-languages": de(s),
              "target-languages": de(a),
              "selected-source-language": de(t),
              "selected-target-language": de(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : $n("", !0)
          ]),
          _: 1
        }),
        ke.value ? (et(), Rt(de(Qe), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: x,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: ys(() => [
            Za(Ss("h5", k2, null, 512), [
              [G, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (et(!0), tl(Ug, null, Mg(de(g), (P, I) => (et(), Rt(Nc, {
              key: `page-suggestion-${I}`,
              suggestion: P,
              onClose: (v) => de(m)(P),
              onClick: (v) => c(P),
              onBookmark: (v) => de(E)(P)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Ie.value ? (et(), Rt(de(lt), { key: 0 })) : $n("", !0)
          ]),
          _: 1
        }, 512)) : $n("", !0),
        De.value ? (et(), Rt(de(Qe), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: ys(() => [
            Za(Ss("h5", $2, null, 512), [
              [G, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (et(!0), tl(Ug, null, Mg(de(p), (P, I) => (et(), Rt(Nc, {
              key: `section-suggestion-${I}`,
              class: "ma-0",
              suggestion: P,
              onClose: (v) => de(h)(P),
              onClick: (v) => c(P),
              onBookmark: (v) => de(U)(P)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Be.value ? (et(), Rt(de(lt), { key: 0 })) : $n("", !0)
          ]),
          _: 1
        })) : $n("", !0),
        Re.value ? (et(), Rt(bf, {
          key: 2,
          title: Y.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Y.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : $n("", !0),
        Ss("div", V2, [
          Te.value ? (et(), Rt(de(A2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: C
          }, {
            default: ys(() => [
              el(de(D2), {
                class: "me-1",
                icon: de(Uh)
              }, null, 8, ["icon"]),
              x2(" " + y2(Y.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : $n("", !0)
        ])
      ], 512)), [
        [C2, e.active]
      ]);
    };
  }
}, P2 = window.Vue.resolveDirective, F2 = window.Vue.createElementVNode, N2 = window.Vue.withDirectives, M2 = window.Vue.renderList, U2 = window.Vue.Fragment, nl = window.Vue.openBlock, I2 = window.Vue.createElementBlock, Ig = window.Vue.unref, Rg = window.Vue.createBlock, zg = window.Vue.withCtx, R2 = window.Vue.createCommentVNode, z2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, O2 = window.Vue.computed, j2 = window.Vuex.useStore, H2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = j2(), n = O2(() => t.state.suggestions.favorites || []), o = ha(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = uu();
    return (r, l) => {
      const u = P2("i18n");
      return n.value.length ? (nl(), Rg(Ig(Qe), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: zg(() => [
          N2(F2("h3", z2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: zg(() => [
          (nl(!0), I2(U2, null, M2(n.value, (d, i) => (nl(), Rg(Nc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => s(d),
            onBookmark: (c) => Ig(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : R2("", !0);
    };
  }
};
const q2 = window.Vue.resolveDirective, xs = window.Vue.createElementVNode, G2 = window.Vue.withDirectives, X2 = window.Vue.renderList, W2 = window.Vue.Fragment, Og = window.Vue.openBlock, jg = window.Vue.createElementBlock, K2 = window.Vue.unref, Y2 = window.Vue.createVNode, J2 = window.Vue.toDisplayString, Q2 = { class: "cx-help-panel pa-4" }, Z2 = { class: "cx-help-panel__item-list mt-6 ps-2" }, e$ = ["href", "target"], t$ = ["textContent"], n$ = window.Codex.CdxIcon, o$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ce(), n = [
      {
        icon: oy,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: ZS,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = q2("i18n");
      return Og(), jg("div", Q2, [
        G2(xs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        xs("ul", Z2, [
          (Og(), jg(W2, null, X2(n, (r, l) => xs("li", {
            key: l,
            class: "mt-4"
          }, [
            xs("a", {
              href: r.href,
              target: r.target
            }, [
              Y2(K2(n$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              xs("span", {
                textContent: J2(r.label)
              }, null, 8, t$)
            ], 8, e$)
          ])), 64))
        ])
      ]);
    };
  }
};
const s$ = window.Vue.resolveDirective, yo = window.Vue.createElementVNode, ol = window.Vue.withDirectives, Hg = window.Vue.toDisplayString, sl = window.Vue.unref, al = window.Vue.withCtx, il = window.Vue.createVNode, a$ = window.Vue.openBlock, i$ = window.Vue.createElementBlock, r$ = { class: "cx-stats-panel pa-4" }, l$ = ["textContent"], c$ = { class: "cx-stats-panel__monthly-stats-label" }, u$ = ["textContent"], d$ = { class: "cx-stats-panel__total-stats-label" }, g$ = window.Vue.ref, qg = window.Vue.computed, p$ = window.Vue.watch, m$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = qg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = qg(() => {
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
        const _ = Math.floor(
          (c - p) / (m + p)
        ), y = i.slice(
          Math.max(i.length - _, 0)
        );
        y.forEach((S, x) => {
          x === y.length - 1 && (l.fillStyle = "#36c");
          const A = h - S * f;
          l.fillRect(w, A, m, S * f), w += m + p;
        });
      }
    ), (r, l) => {
      const u = s$("i18n");
      return a$(), i$("div", r$, [
        ol(yo("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        il(sl(N), null, {
          default: al(() => [
            il(sl(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: al(() => [
                yo("h3", {
                  textContent: Hg(s.value)
                }, null, 8, l$),
                ol(yo("h5", c$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            il(sl(k), { class: "cx-stats-panel__total-stats" }, {
              default: al(() => [
                yo("h3", {
                  textContent: Hg(o.value)
                }, null, 8, u$),
                ol(yo("h5", d$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        yo("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Ef = () => {
  const e = yt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const h$ = window.Vue.renderSlot, f$ = window.Vue.unref, w$ = window.Vue.createVNode, _$ = window.Vue.createElementVNode, v$ = window.Vue.openBlock, S$ = window.Vue.createElementBlock, y$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, x$ = { class: "col-12 ma-0 pa-0" }, C$ = {
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
    const n = t, o = Ef(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (v$(), S$("footer", y$, [
      _$("div", x$, [
        h$(a.$slots, "default", {}, () => [
          w$(f$(ra), {
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
  const e = b$(), t = Ko();
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
}, $$ = window.Vuex.useStore, Lf = () => {
  const e = $$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: r } = Rc(), { previousRoute: l } = Ae(e), u = yt(), d = () => {
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
  } };
}, Gg = window.Vue.computed, V$ = window.Vuex.useStore, We = () => {
  const e = V$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o,
    sectionURLParameter: s
  } = B(), a = Gg(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ), r = Gg(
    () => {
      var l;
      return !!((l = a.value) != null && l.presentSections.hasOwnProperty(
        s.value
      ));
    }
  );
  return { sectionSuggestion: a, isCurrentSectionPresent: r };
}, E$ = window.Vue.ref, ei = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, rl = E$(null), Yt = () => {
  const { isCurrentSectionPresent: e } = We(), t = () => {
    e.value ? o(ei.EXPAND) : o(ei.NEW_SECTION);
  }, n = () => {
    rl.value = null;
  }, o = (s) => {
    if (!Object.values(ei).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    rl.value = s;
  };
  return {
    target: rl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: ei
  };
}, L$ = window.Vue.watch, A$ = () => {
  const { fetchAllTranslations: e } = Qo(), t = Rh(), n = k$(), { fetchPageCollectionGroups: o } = Jc(), { logDashboardOpenEvent: s } = Lf(), { applicationLanguagesInitialized: a } = jh(), { clearPublishTarget: r } = Yt();
  return () => b(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), L$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Xg = window.Vue.computed, D$ = window.Vue.ref, T$ = window.Vue.watch, B$ = window.Vue.watchEffect, P$ = window.Vuex.useStore, F$ = ["suggestions", "draft", "published"], N$ = () => {
  const e = P$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), { translationsFetched: o } = Qo(), s = D$(null);
  if (F$.includes(t.value))
    s.value = t.value;
  else {
    const a = Xg(
      () => o.value.draft
    ), r = Xg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", T$(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return B$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, M$ = window.Vue.computed, U$ = () => {
  const e = ce();
  return M$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: x0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: zi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: y0,
        type: "text"
      }
    }
  ]);
};
const he = window.Vue.unref, Pe = window.Vue.createVNode, I$ = window.Vue.toDisplayString, R$ = window.Vue.createTextVNode, an = window.Vue.withCtx, ll = window.Vue.openBlock, Wg = window.Vue.createBlock, Kg = window.Vue.createCommentVNode, z$ = window.Vue.vShow, O$ = window.Vue.withDirectives, j$ = window.Vue.isRef, H$ = window.Vue.createElementBlock, q$ = window.Vue.computed, G$ = window.Vuex.useStore, X$ = window.Codex.CdxButton, W$ = window.Codex.CdxIcon, K$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Xe(), n = yt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    A$()();
    const a = G$();
    a.dispatch("translator/fetchTranslatorStats");
    const r = q$(() => a.state.translator.translatorStats), l = N$(), u = U$(), d = Ef(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (ll(), H$("div", null, [
      Pe(he(N), { class: "ma-0 pb-4" }, {
        default: an(() => [
          Pe(he(X$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: an(() => [
              Pe(he(W$), {
                class: "me-1",
                icon: he(Cc)
              }, null, 8, ["icon"]),
              R$(" " + I$(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Pe(he(N), {
        class: "ma-0",
        align: "start"
      }, {
        default: an(() => [
          c.$mwui.breakpoint.tabletAndUp ? (ll(), Wg(he(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: an(() => [
              Pe(he(ra), {
                id: "dashboard-list-selector--desktop",
                items: he(u),
                active: he(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Kg("", !0),
          Pe(he(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: an(() => [
              O$(Pe(H2, null, null, 512), [
                [z$, he(l) === "suggestions"]
              ]),
              Pe(B2, {
                active: he(l) === "suggestions"
              }, null, 8, ["active"]),
              Pe(lg, {
                "translation-status": "draft",
                "active-status": he(l)
              }, null, 8, ["active-status"]),
              Pe(lg, {
                "translation-status": "published",
                "active-status": he(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Pe(he(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: an(() => [
              Pe(he(N), {
                class: "ma-0",
                align: "start"
              }, {
                default: an(() => [
                  Pe(he(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: an(() => [
                      Pe(m$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Pe(he(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: an(() => [
                      Pe(o$)
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
      c.$mwui.breakpoint.mobile ? (ll(), Wg(C$, {
        key: 0,
        active: he(l),
        "onUpdate:active": g[0] || (g[0] = (p) => j$(l) ? l.value = p : null),
        items: he(u)
      }, null, 8, ["active", "items"])) : Kg("", !0)
    ]));
  }
}, Y$ = {
  name: "DashboardView",
  components: { CxDashboard: K$ }
}, J$ = window.Vue.resolveComponent, Q$ = window.Vue.createVNode, Z$ = window.Vue.openBlock, eV = window.Vue.createElementBlock, tV = { class: "cx-translation-dashboard" };
function nV(e, t, n, o, s, a) {
  const r = J$("cx-dashboard");
  return Z$(), eV("main", tV, [
    Q$(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Yg = /* @__PURE__ */ oe(Y$, [["render", nV]]), oV = window.Vuex.useStore, sV = window.Vue.computed, Mt = () => {
  const e = oV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: sV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, xo = window.Vue.computed, aV = () => {
  const { sectionSuggestion: e } = We(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Mt(), o = xo(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = xo(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = xo(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = Sn(), u = xo(() => r ? Q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = xo(() => {
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
  }), c = xo(
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
function iV(e) {
  return e.$el = $(e), e;
}
function rV(e, t, n, o) {
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
function lV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function cV(e, t) {
  return b(this, null, function* () {
    yield du(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = iV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const uV = window.Vue.computed, dV = window.Vue.onMounted, gV = window.Vue.ref;
function pV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const mV = {
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
    const n = gV(null);
    let o = null;
    const s = uV(() => o.getHtml()), a = () => {
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
    return dV(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = pV;
      const i = yield cV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = rV(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = lV, o.focus();
    })), { sxeditor: n };
  }
}, Fi = window.Vue.createElementVNode, hV = window.Vue.openBlock, fV = window.Vue.createElementBlock, wV = ["lang", "dir"], _V = /* @__PURE__ */ Fi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Fi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Fi("div", { class: "toolbar" })
  ])
], -1), vV = ["lang", "dir"];
function SV(e, t, n, o, s, a) {
  return hV(), fV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    _V,
    Fi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, vV)
  ], 8, wV);
}
const yV = /* @__PURE__ */ oe(mV, [["render", SV]]);
function du() {
  return mw.loader.using("mw.cx3.ve");
}
const xV = window.Vuex.useStore, CV = () => {
  const e = xV();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield du(), new Promise((s) => {
      setTimeout(() => {
        const a = bh.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, bV = window.Vuex.useStore, Af = () => {
  const e = bV();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield ro.fetchPageContent(
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
}, Jg = window.Vue.computed, kV = window.Vuex.useStore, ut = () => {
  const e = kV(), { sectionSuggestion: t } = We(), { currentTranslation: n } = Mt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), r = Jg(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Jg(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, Zi = () => {
  const { currentSourcePage: e } = ut(), t = CV(), n = Af(), {
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
    ), Xo || (yield t(
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
}, $V = window.Vuex.useStore, Zo = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = B(), a = $V(), r = Xe(), l = () => {
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
    ), Xo) {
      d();
      return;
    }
    if (u())
      return;
    const c = l();
    r.push({ name: c.name });
  };
}, gu = () => {
  const e = yt(), { currentTranslation: t } = Mt();
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
}, VV = window.Vue.ref, EV = () => {
  const e = Xe(), { logDashboardTranslationStartEvent: t } = Qi(), n = gu(), o = Zo(), { sectionURLParameter: s } = B(), { targetPageExists: a } = Sn(), { selectPageSectionByTitle: r } = Zi(), l = () => b(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = VV(!1), { currentTranslation: d } = Mt();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Xo ? u.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const LV = window.Vue.resolveDirective, Qg = window.Vue.createElementVNode, Zg = window.Vue.withDirectives, AV = window.Vue.unref, DV = window.Vue.withCtx, TV = window.Vue.openBlock, BV = window.Vue.createBlock, PV = {
  href: "",
  target: "_blank"
}, FV = window.Codex.CdxDialog, NV = {
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
      const c = LV("i18n");
      return TV(), BV(AV(FV), {
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
        default: DV(() => [
          Zg(Qg("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Zg(Qg("a", PV, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
};
const fe = window.Vue.unref, MV = window.Vue.resolveDirective, Cs = window.Vue.createElementVNode, ep = window.Vue.withDirectives, bs = window.Vue.toDisplayString, ks = window.Vue.openBlock, cl = window.Vue.createElementBlock, ul = window.Vue.createCommentVNode, mt = window.Vue.createVNode, Et = window.Vue.withCtx, dl = window.Vue.createTextVNode, UV = window.Vue.withModifiers, tp = window.Vue.createBlock, IV = window.Vue.Fragment, RV = { class: "sx-translation-confirmer-body pb-4" }, zV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, OV = ["textContent"], jV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, HV = ["href"], qV = ["textContent"], ti = window.Vue.computed, GV = window.Vue.inject, np = window.Vue.ref, XV = window.Vue.watchEffect, WV = window.Vuex.useStore, gl = window.Codex.CdxButton, KV = window.Codex.CdxIcon, YV = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Xe(), o = WV();
    GV("colors");
    const { sectionSuggestion: s } = We(), { targetLanguageAutonym: a } = Ae(o), { sectionURLParameter: r } = B(), { logDashboardTranslationStartEvent: l } = Qi(), u = Zo(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: i } = EV(), c = np(!1), g = np(null), p = () => b(this, null, function* () {
      let q = !0;
      try {
        q = yield vt.checkUnreviewedTranslations();
      } catch (K) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          K
        );
      }
      q !== !0 && (c.value = !0, g.value = q.targetUrl);
    }), m = () => b(this, null, function* () {
      yield p(), !c.value && (l(), u());
    }), h = () => b(this, null, function* () {
      yield p(), !c.value && d();
    }), f = t;
    XV(() => {
      i.value && (f("open-translation-confirmation-dialog"), i.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: _,
      isProgressiveButton: y,
      targetArticlePath: S
    } = aV(), x = ce(), A = ti(
      () => x.i18n(_(!!r.value))
    ), C = ti(
      () => x.i18n(...w.value)
    ), U = () => b(this, null, function* () {
      yield p(), !c.value && n.push({ name: "sx-section-selector" });
    }), E = ti(() => {
      var q, K;
      return r.value && !!((K = (q = s.value) == null ? void 0 : q.sourceSections) != null && K.length);
    }), { targetPageExists: D } = Sn(), R = ti(() => !r.value && D.value && Xo);
    return (q, K) => {
      const be = MV("i18n");
      return ks(), cl(IV, null, [
        Cs("section", RV, [
          fe(r) ? (ks(), cl("section", zV, [
            ep(Cs("h6", null, null, 512), [
              [be, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Cs("h5", {
              class: "ma-0",
              textContent: bs(fe(r))
            }, null, 8, OV)
          ])) : fe(D) ? (ks(), cl("section", jV, [
            mt(fe(N), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Et(() => [
                ep(mt(fe(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [be, [fe(a)], "cx-sx-existing-translation-status"]
                ]),
                mt(fe(k), { shrink: "" }, {
                  default: Et(() => [
                    Cs("a", {
                      href: fe(S),
                      target: "_blank"
                    }, [
                      mt(fe(KV), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: fe(tu)
                      }, null, 8, ["icon"])
                    ], 8, HV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            mt(fe(N), { class: "ma-0" }, {
              default: Et(() => [
                mt(fe(k), null, {
                  default: Et(() => [
                    Cs("span", {
                      textContent: bs(C.value)
                    }, null, 8, qV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : ul("", !0),
          mt(fe(N), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Et(() => [
              E.value ? (ks(), tp(fe(k), {
                key: 0,
                shrink: ""
              }, {
                default: Et(() => [
                  mt(fe(gl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: UV(U, ["stop"])
                  }, {
                    default: Et(() => [
                      dl(bs(q.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ul("", !0),
              R.value ? (ks(), tp(fe(k), {
                key: 1,
                shrink: ""
              }, {
                default: Et(() => [
                  mt(fe(gl), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Et(() => [
                      dl(bs(q.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ul("", !0),
              mt(fe(k), { shrink: "" }, {
                default: Et(() => [
                  mt(fe(gl), {
                    weight: "primary",
                    size: "large",
                    action: fe(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Et(() => [
                      dl(bs(A.value), 1)
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
        mt(NV, {
          modelValue: c.value,
          "onUpdate:modelValue": K[0] || (K[0] = (ue) => c.value = ue),
          "target-url": g.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const pl = window.Vue.unref, JV = window.Vue.openBlock, QV = window.Vue.createBlock, ZV = window.Vue.computed, Df = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = da(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = B(), { currentLanguageTitleGroup: s } = Sn(), a = ZV(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = Ay(), l = (d) => r(d, o.value), u = (d) => r(n.value, d);
    return (d, i) => (JV(), QV(Ii, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": pl(t),
      "selected-source-language": pl(n),
      "selected-target-language": pl(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, ml = window.Vue.computed, op = window.Vue.ref, e4 = window.Vue.watchEffect, t4 = () => {
  const { currentSourcePage: e } = ut(), { sectionSuggestion: t } = We(), n = ce(), { sectionURLParameter: o } = B(), s = op(null), a = op([]);
  e4(() => b(void 0, null, function* () {
    var d;
    if (t.value && o.value)
      a.value = [o.value];
    else if (t.value) {
      const { missingSections: i } = t.value;
      a.value = Object.keys(i);
    } else
      e.value && !Xo ? a.value = [zo.LEAD_SECTION_DUMMY_TITLE] : a.value = [];
    a.value.length ? s.value = yield jk(
      e.value,
      a.value
    ) : s.value = ((d = e.value) == null ? void 0 : d.articleSize) || null;
  }));
  const r = ml(() => kf(s.value || 0)), l = ml(() => {
    if (!t.value && !e.value || !r.value)
      return "";
    const d = Hk(
      r.value,
      a.value
    );
    return n.i18n(...d);
  }), u = ml(
    () => $f(s.value)
  );
  return { timeEstimateMessage: l, isQuickTranslation: u };
};
const xe = window.Vue.unref, hl = window.Vue.toDisplayString, Vn = window.Vue.createElementVNode, Ot = window.Vue.createVNode, Co = window.Vue.withCtx, n4 = window.Vue.resolveDirective, o4 = window.Vue.withDirectives, s4 = window.Vue.normalizeClass, sp = window.Vue.openBlock, a4 = window.Vue.createElementBlock, i4 = window.Vue.createCommentVNode, r4 = window.Vue.createBlock, l4 = ["textContent"], c4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, u4 = ["textContent"], d4 = { class: "pe-3" }, g4 = ["textContent"], p4 = window.Codex.CdxButton, $s = window.Codex.CdxIcon, Kn = window.Vue.computed, m4 = window.Vuex.useStore, h4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = m4(), { currentSourcePage: n } = ut(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = B(), r = Kn(() => t.state.suggestions.favorites || []), l = Kn(
      () => r.value.some(
        (S) => a.value === S.title && o.value === S.sourceLanguage && s.value === S.targetLanguage
      )
    ), { markFavoriteSuggestion: u, removeFavoriteSuggestion: d } = uu(), i = () => u(
      a.value,
      o.value,
      s.value
    ), c = () => d(
      new Oo({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), g = Kn(
      () => l.value ? Fh : Nh
    ), p = Kn(
      () => l.value ? c : i
    ), m = Kn(
      () => Q.getPageUrl(o.value || "", a.value || "")
    ), h = Kn(
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
      for (let A = 0; A < x.length; A++)
        if (S >= x[A].value)
          return (S / x[A].value).toFixed(1).replace(/\.0$/, "") + x[A].suffix;
      return S.toString();
    }, w = Kn(() => {
      var x;
      const S = Object.values(((x = n.value) == null ? void 0 : x.pageviews) || {}).reduce(
        (A, C) => A + C,
        0
      );
      return f(S);
    }), { timeEstimateMessage: _, isQuickTranslation: y } = t4();
    return (S, x) => {
      const A = n4("i18n");
      return sp(), r4(xe(N), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Co(() => [
          Ot(xe(k), null, {
            default: Co(() => [
              Ot(xe(N), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Co(() => [
                  Ot(xe(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: m.value,
                    target: "_blank"
                  }, {
                    default: Co(() => [
                      Vn("h5", {
                        class: "ma-0 me-1",
                        textContent: hl(xe(a))
                      }, null, 8, l4),
                      Ot(xe($s), {
                        size: "x-small",
                        icon: xe(tu)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Ot(xe(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Co(() => [
                      Ot(xe(p4), {
                        class: "px-0",
                        weight: "quiet",
                        action: l.value ? "progressive" : "default",
                        "aria-label": S.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: p.value
                      }, {
                        default: Co(() => [
                          Ot(xe($s), { icon: g.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Vn("div", c4, [
                Vn("div", null, [
                  Vn("span", null, [
                    Ot(xe($s), {
                      icon: xe(Mh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Vn("span", {
                      class: "pe-3",
                      textContent: hl(h.value)
                    }, null, 8, u4)
                  ]),
                  Vn("span", null, [
                    Ot(xe($s), {
                      icon: xe(WS),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    o4(Vn("span", d4, null, 512), [
                      [A, [w.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                xe(_) ? (sp(), a4("span", {
                  key: 0,
                  class: s4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": xe(y)
                  }])
                }, [
                  Ot(xe($s), {
                    icon: xe(YS),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Vn("span", {
                    textContent: hl(xe(_))
                  }, null, 8, g4)
                ], 2)) : i4("", !0)
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
const f4 = window.Vue.resolveDirective, Yn = window.Vue.createElementVNode, ni = window.Vue.withDirectives, w4 = window.Vue.toDisplayString, _4 = window.Vue.createTextVNode, fl = window.Vue.unref, wl = window.Vue.withCtx, _l = window.Vue.openBlock, vl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const v4 = { class: "pa-4" }, S4 = { class: "flex pt-2" }, y4 = window.Codex.CdxButton, x4 = window.Vue.ref, C4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Zo(), a = gu(), r = x4(!1), { currentTranslation: l } = Mt(), u = () => b(this, null, function* () {
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
      const c = f4("i18n");
      return _l(), vl(fl(St), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: wl(() => [
          Yn("div", S4, [
            r.value ? (_l(), vl(fl(lt), { key: 1 })) : (_l(), vl(fl(y4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: wl(() => [
                _4(w4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: wl(() => [
          Yn("div", v4, [
            ni(Yn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ni(Yn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Yn("p", null, [
              ni(Yn("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ni(Yn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, b4 = window.Vuex.useStore;
let oi = [];
const pu = () => {
  const e = b4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || oi.includes(o) ? Promise.resolve() : (oi.push(o), ro.fetchLanguageTitles(t, n).then((s) => {
      oi = oi.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, k4 = window.Vue.ref, bo = k4(null), Tf = () => {
  const e = () => b(void 0, null, function* () {
    var n, o;
    bo.value || (yield Xi.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, bo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        bo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = bo.value) == null ? void 0 : n.refreshAt) <= t ? (bo.value = null, e()) : (o = bo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const ap = window.Vue.resolveDirective, si = window.Vue.createElementVNode, ip = window.Vue.withDirectives, En = window.Vue.unref, ai = window.Vue.withCtx, rn = window.Vue.createVNode, Sl = window.Vue.openBlock, rp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const $4 = window.Vue.createBlock, V4 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, E4 = { class: "mb-0" }, L4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, A4 = ["src"], D4 = { class: "ma-3" }, lp = window.Vue.computed, T4 = window.Vue.inject, B4 = window.Vue.onBeforeUnmount, P4 = window.Vue.ref, F4 = window.Vuex.useStore, N4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = F4(), { currentSourcePage: n } = ut(), { previousRoute: o } = Ae(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: u
    } = B(), d = T4("breakpoints"), i = lp(() => d.value.nextBreakpoint), c = lp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Qo(), p = pu();
    g("draft"), p(s.value, r.value), du(), Tf()(), Ih()(a.value);
    const f = Xe(), w = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    B4(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const _ = P4(!1);
    return (y, S) => {
      const x = ap("i18n"), A = ap("i18n-html");
      return Sl(), rp("section", V4, [
        rn(En(N), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ai(() => [
            rn(En(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ai(() => [
                ip(si("h5", E4, null, 512), [
                  [x, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            rn(En(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ai(() => [
                rn(En(Me), {
                  class: "pa-0",
                  type: "icon",
                  icon: En(la),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        si("div", L4, [
          c.value ? (Sl(), rp("img", {
            key: 0,
            src: c.value
          }, null, 8, A4)) : (Sl(), $4(En(qe), {
            key: 1,
            size: "120",
            icon: En(ih),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        rn(h4),
        rn(Df),
        rn(YV, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (C) => _.value = !0)
        }),
        rn(En(N), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ai(() => [
            si("p", D4, [
              ip(si("small", null, null, 512), [
                [A, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        rn(C4, {
          modelValue: _.value,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => _.value = C)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const M4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: N4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, U4 = window.Vue.resolveComponent, I4 = window.Vue.createVNode, R4 = window.Vue.normalizeClass, z4 = window.Vue.openBlock, O4 = window.Vue.createElementBlock;
function j4(e, t, n, o, s, a) {
  const r = U4("sx-translation-confirmer");
  return z4(), O4("main", {
    class: R4(["sx-translation-confirmer-view", a.classes])
  }, [
    I4(r)
  ], 2);
}
const H4 = /* @__PURE__ */ oe(M4, [["render", j4]]);
const q4 = window.Vue.toDisplayString, cp = window.Vue.unref, G4 = window.Vue.createVNode, X4 = window.Vue.createTextVNode, W4 = window.Vue.createElementVNode, K4 = window.Vue.openBlock, Y4 = window.Vue.createElementBlock, J4 = { class: "sx-section-selector-view-article-item" }, Q4 = ["href"], Z4 = window.Codex.CdxIcon, up = {
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
    return (t, n) => (K4(), Y4("span", J4, [
      W4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        X4(q4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        G4(cp(Z4), {
          size: "x-small",
          icon: cp(tu)
        }, null, 8, ["icon"])
      ], 8, Q4)
    ]));
  }
};
const eE = window.Vue.resolveDirective, ii = window.Vue.createElementVNode, yl = window.Vue.withDirectives, Jn = window.Vue.unref, tE = window.Vue.toDisplayString, ri = window.Vue.withCtx, Vs = window.Vue.createVNode, nE = window.Vue.openBlock, oE = window.Vue.createElementBlock, sE = { class: "sx-section-selector__header pa-4" }, aE = { class: "sx-section-selector__header-text ma-0" }, iE = ["textContent"], rE = { class: "pt-0 ma-0" }, lE = { class: "ma-0" }, cE = window.Codex.CdxButton, uE = window.Codex.CdxIcon, dE = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = We();
    return (n, o) => {
      const s = eE("i18n");
      return nE(), oE("div", sE, [
        Vs(Jn(N), { class: "ma-0 pb-3" }, {
          default: ri(() => [
            Vs(Jn(k), null, {
              default: ri(() => {
                var a;
                return [
                  yl(ii("h6", aE, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ii("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: tE((a = Jn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, iE)
                ];
              }),
              _: 1
            }),
            Vs(Jn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ri(() => [
                Vs(Jn(cE), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ri(() => [
                    Vs(Jn(uE), { icon: Jn(Jo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        yl(ii("h4", rE, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        yl(ii("p", lE, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, gE = window.Vue.renderList, pE = window.Vue.Fragment, xl = window.Vue.openBlock, dp = window.Vue.createElementBlock, mE = window.Vue.renderSlot, li = window.Vue.unref, gp = window.Vue.createVNode, pp = window.Vue.withCtx, hE = window.Vue.createBlock, fE = { class: "sx-section-selector__sections-list ma-0 pa-0" }, wE = window.Codex.CdxButton, _E = window.Codex.CdxIcon, Bf = {
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
    return (t, n) => (xl(), dp("ul", fE, [
      (xl(!0), dp(pE, null, gE(e.sections, (o) => (xl(), hE(li(N), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: pp(() => [
          gp(li(wE), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: pp(() => [
              mE(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              gp(li(_E), { icon: li(ma) }, null, 8, ["icon"])
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
const SE = window.Vue.resolveDirective, ci = window.Vue.createElementVNode, Cl = window.Vue.withDirectives, Lt = window.Vue.unref, mp = window.Vue.toDisplayString, ko = window.Vue.withCtx, bl = window.Vue.openBlock, hp = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Es = window.Vue.createVNode, yE = window.Vue.createTextVNode, xE = window.Vue.createElementBlock, CE = { class: "sx-section-selector__missing-sections py-2" }, bE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, kE = ["lang", "dir", "textContent"], fp = window.Vue.computed, $E = window.Codex.CdxButton, VE = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = We(), { targetLanguageURLParameter: n } = B(), o = fp(() => z.getAutonym(n.value)), s = fp(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const l = SE("i18n");
      return bl(), xE("section", CE, [
        Cl(ci("h4", bE, null, 512), [
          [l, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (bl(), hp(Lt(N), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: ko(() => [
            Es(Lt(k), {
              class: "py-6 justify-center",
              innerHTML: Lt(vE)
            }, null, 8, ["innerHTML"]),
            Es(Lt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: ko(() => [
                Cl(ci("h6", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Es(Lt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: ko(() => [
                Cl(ci("p", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Es(Lt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: ko(() => [
                Es(Lt($E), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: ko(() => [
                    yE(mp(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (bl(), hp(Bf, {
          key: 0,
          sections: Lt(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: ko(({ sourceSection: u }) => {
            var d, i;
            return [
              ci("h5", {
                class: "ma-0",
                lang: (d = Lt(t)) == null ? void 0 : d.sourceLanguage,
                dir: Lt(z.getDir)((i = Lt(t)) == null ? void 0 : i.sourceLanguage),
                textContent: mp(u)
              }, null, 8, kE)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const EE = window.Vue.resolveDirective, ui = window.Vue.createElementVNode, LE = window.Vue.withDirectives, Qn = window.Vue.unref, wp = window.Vue.toDisplayString, AE = window.Vue.withCtx, DE = window.Vue.createVNode, TE = window.Vue.openBlock, BE = window.Vue.createElementBlock, PE = { class: "sx-section-selector__present-sections py-2" }, FE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, NE = { class: "sx-section-selector__present-section-button-content" }, ME = ["lang", "dir", "textContent"], UE = ["lang", "dir", "textContent"], IE = window.Vue.computed, _p = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = We(), { targetLanguageURLParameter: n } = B(), o = IE(() => z.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = EE("i18n");
      return TE(), BE("section", PE, [
        LE(ui("h4", FE, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        DE(Bf, {
          sections: ((l = Qn(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: AE(({ sourceSection: u, targetSection: d }) => {
            var i, c, g, p;
            return [
              ui("div", NE, [
                ui("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Qn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Qn(z.getDir)((c = Qn(t)) == null ? void 0 : c.sourceLanguage),
                  textContent: wp(u)
                }, null, 8, ME),
                ui("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = Qn(t)) == null ? void 0 : g.targetLanguage,
                  dir: Qn(z.getDir)((p = Qn(t)) == null ? void 0 : p.targetLanguage),
                  textContent: wp(d)
                }, null, 8, UE)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Fe = window.Vue.createVNode, kl = window.Vue.openBlock, vp = window.Vue.createBlock, Sp = window.Vue.createCommentVNode, RE = window.Vue.resolveDirective, Ln = window.Vue.createElementVNode, Ls = window.Vue.withDirectives, tt = window.Vue.unref, ln = window.Vue.withCtx, zE = window.Vue.normalizeClass, yp = window.Vue.toDisplayString, xp = window.Vue.createTextVNode, OE = window.Vue.createElementBlock, jE = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, HE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, qE = { class: "sx-section-selector__additional-consideration-title" }, GE = { href: "#" }, XE = { class: "sx-section-selector__additional-consideration-title" }, WE = { href: "#" }, As = window.Vue.computed, KE = window.Vue.inject, YE = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = KE("breakpoints"), n = As(() => t.value.desktopAndUp), { sectionSuggestion: o } = We(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = B(), u = As(() => z.getAutonym(s.value)), d = As(() => z.getAutonym(a.value)), i = As(
      () => {
        var y;
        return Q.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), c = As(
      () => {
        var y;
        return Q.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = Xe(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Mt(), h = Zo(), f = gu(), { selectPageSectionByTitle: w } = Zi(), _ = (y) => {
      l(y), m.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return (y, S) => {
      const x = RE("i18n");
      return kl(), OE("section", jE, [
        Fe(dE, { onClose: p }),
        Fe(Df),
        Fe(tt(N), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: ln(() => [
            Fe(tt(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Fe(VE, {
                  onSelectSection: _,
                  onClose: p
                }),
                n.value ? Sp("", !0) : (kl(), vp(_p, {
                  key: 0,
                  onSelectSection: _
                })),
                Ln("section", {
                  class: zE(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ls(Ln("h4", HE, null, 512), [
                    [x, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Fe(tt(N), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: ln(() => [
                      Fe(tt(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: ln(() => [
                          Fe(up, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Fe(tt(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: ln(() => [
                          Fe(up, {
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
                Fe(tt(N), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: ln(() => [
                    Fe(tt(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: ln(() => [
                        Ln("h6", qE, [
                          Fe(tt(qe), {
                            icon: tt(A0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          xp(" " + yp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ls(Ln("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ls(Ln("a", GE, null, 512), [
                          [x, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Fe(tt(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: ln(() => [
                        Ln("h6", XE, [
                          Fe(tt(qe), {
                            icon: tt(L0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          xp(" " + yp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ls(Ln("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ls(Ln("a", WE, null, 512), [
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
            n.value ? (kl(), vp(tt(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: ln(() => [
                Fe(_p, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: _
                })
              ]),
              _: 1
            })) : Sp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, JE = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: YE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, QE = window.Vue.resolveComponent, ZE = window.Vue.createVNode, e3 = window.Vue.normalizeClass, t3 = window.Vue.openBlock, n3 = window.Vue.createElementBlock;
function o3(e, t, n, o, s, a) {
  const r = QE("sx-section-selector");
  return t3(), n3("main", {
    class: e3(["sx-section-selector-view", a.classes])
  }, [
    ZE(r)
  ], 2);
}
const s3 = /* @__PURE__ */ oe(JE, [["render", o3]]), di = window.Vue.computed, a3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = B(), n = di(
    () => z.getAutonym(e.value)
  ), o = di(
    () => z.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Yt(), r = di(
    () => s.value === a.EXPAND
  ), l = ce();
  return di(() => {
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
    return r.value ? d = {
      value: "target_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-target-section-title",
          o.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    } : d = {
      value: "target_article",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-full-article-title",
          o.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    }, [u, d];
  });
};
const Cp = window.Vue.unref, i3 = window.Vue.createVNode, r3 = window.Vue.openBlock, l3 = window.Vue.createElementBlock, c3 = { class: "sx-content-comparator__content-type-selector" }, u3 = window.Vue.watchEffect, d3 = {
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
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (r3(), l3("div", c3, [
      i3(Cp(ra), {
        items: Cp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Ds = window.Vue.computed, g3 = window.Vuex.useStore, te = () => {
  const e = g3(), { currentSourcePage: t, currentTargetPage: n } = ut(), { currentMTProvider: o } = Ae(e), { sectionURLParameter: s } = B(), a = Ds(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Ds(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Ds(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Ds(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = Ds(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, Ts = window.Vue.computed, mu = () => {
  const { currentTargetPage: e } = ut(), { sectionSuggestion: t } = We(), { sectionURLParameter: n } = B(), o = Ts(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = Ts(
    () => {
      var d;
      return (((d = a.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), a = Ts(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.getSectionByTitle(o.value);
    }
  ), { sourceSection: r } = te(), l = Ts(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), u = Ts(() => {
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
const gi = window.Vue.createVNode, p3 = window.Vue.toDisplayString, m3 = window.Vue.createElementVNode, An = window.Vue.unref, pi = window.Vue.withCtx, $l = window.Vue.openBlock, Vl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const h3 = window.Vue.normalizeClass, f3 = ["lang", "dir", "textContent"], bp = window.Vue.ref, El = window.Vue.computed, w3 = window.Vue.onMounted, _3 = {
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
    const n = e, o = t, s = bp(!1), { sectionSuggestion: a } = We(), { sectionURLParameter: r } = B(), l = El(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = mu(), c = El(() => {
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
    }), g = El(
      () => Q.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = bp(null);
    return w3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => ($l(), Vl(An(N), {
      ref_key: "contentHeader",
      ref: p,
      class: h3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: pi(() => [
        gi(d3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        gi(An(N), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: pi(() => [
            gi(An(k), null, {
              default: pi(() => [
                m3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: p3(c.value.title)
                }, null, 8, f3)
              ]),
              _: 1
            }),
            gi(An(k), { shrink: "" }, {
              default: pi(() => [
                s.value ? ($l(), Vl(An(Me), {
                  key: 0,
                  icon: An(zi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : ($l(), Vl(An(Me), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: An(sh),
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
}, mi = window.Vue.unref, kp = window.Vue.createVNode, v3 = window.Vue.openBlock, S3 = window.Vue.createElementBlock, y3 = { class: "sx-content-comparator__header-navigation flex items-center" }, x3 = window.Vue.computed, C3 = {
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
    ), { selectPageSectionByTitle: s } = Zi(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (v3(), S3("div", y3, [
      kp(mi(Me), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: mi(k0),
        onClick: a
      }, null, 8, ["icon"]),
      kp(mi(Me), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: mi(b0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const $p = window.Vue.toDisplayString, we = window.Vue.unref, b3 = window.Vue.resolveDirective, Ll = window.Vue.withDirectives, $o = window.Vue.openBlock, hi = window.Vue.createElementBlock, k3 = window.Vue.createCommentVNode, $3 = window.Vue.createTextVNode, Vp = window.Vue.createElementVNode, V3 = window.Vue.normalizeClass, Al = window.Vue.withCtx, Dl = window.Vue.createVNode, Ep = window.Vue.createBlock, E3 = { class: "sx-content-comparator-header__mapped-section" }, L3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, A3 = { key: 0 }, D3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, T3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, B3 = window.Vue.computed, P3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = B(), { activeSectionTargetTitle: n } = mu(), o = ce(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Yt(), l = B3(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        z.getAutonym(t.value)
      )
    );
    return (u, d) => {
      const i = b3("i18n");
      return $o(), hi("div", E3, [
        Dl(we(N), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Al(() => [
            Dl(we(k), { grow: "" }, {
              default: Al(() => [
                Vp("h6", L3, [
                  $3($p(l.value) + " ", 1),
                  we(s) === we(a).NEW_SECTION ? Ll(($o(), hi("span", A3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : k3("", !0)
                ]),
                Vp("h6", {
                  class: V3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": we(s) === we(a).NEW_SECTION
                  }])
                }, $p(we(n)), 3)
              ]),
              _: 1
            }),
            Dl(we(k), { shrink: "" }, {
              default: Al(() => [
                we(s) === we(a).EXPAND ? ($o(), Ep(we(Me), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: we(oh),
                  type: "icon",
                  onClick: d[0] || (d[0] = (c) => we(r)(we(a).NEW_SECTION))
                }, null, 8, ["icon"])) : ($o(), Ep(we(Me), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: we(B0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (c) => we(r)(we(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        we(s) === we(a).EXPAND ? Ll(($o(), hi("p", D3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Ll(($o(), hi("p", T3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Ee = window.Vue.unref, Vo = window.Vue.createVNode, Lp = window.Vue.toDisplayString, fn = window.Vue.createElementVNode, Tl = window.Vue.withCtx, F3 = window.Vue.resolveDirective, Ap = window.Vue.withDirectives, Bl = window.Vue.openBlock, Dp = window.Vue.createBlock, Tp = window.Vue.createCommentVNode, N3 = window.Vue.createElementBlock, M3 = { class: "sx-content-comparator__header pa-4" }, U3 = { class: "row my-1 py-2 mx-0 gap-6" }, I3 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, R3 = { class: "sx-content-comparator-header__titles shrink" }, z3 = ["lang", "dir"], O3 = ["lang", "dir"], j3 = { class: "py-2 mb-1" }, H3 = /* @__PURE__ */ fn("br", null, null, -1), Pl = window.Vue.computed, q3 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = B(), { sourceSection: n } = te(), { sectionSuggestion: o, isCurrentSectionPresent: s } = We(), a = Pl(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Pl(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Pl(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (u, d) => {
      const i = F3("i18n");
      return Bl(), N3("div", M3, [
        Vo(Ee(Me), {
          class: "py-2 pa-0",
          icon: Ee($0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: d[0] || (d[0] = (c) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        fn("div", U3, [
          fn("div", I3, [
            fn("div", R3, [
              fn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Ee(o).sourceLanguage,
                dir: Ee(z.getDir)(Ee(o).sourceLanguage)
              }, Lp(Ee(o).sourceTitle), 9, z3),
              fn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Ee(o).sourceLanguage,
                dir: Ee(z.getDir)(Ee(o).sourceLanguage)
              }, Lp(Ee(t)), 9, O3)
            ]),
            Vo(C3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          fn("div", j3, [
            Vo(Ee(Me), {
              class: "sx-content-comparator-header__translation-button",
              icon: Ee(zi),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: d[1] || (d[1] = (c) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Bl(), Dp(Ee(N), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Tl(() => [
            Vo(Ee(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Tl(() => [
                Vo(Ee(qe), { icon: Ee(D0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Vo(Ee(k), { class: "ma-0" }, {
              default: Tl(() => [
                Ap(fn("strong", null, null, 512), [
                  [i, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                H3,
                Ap(fn("span", null, null, 512), [
                  [i, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Tp("", !0),
        Ee(s) ? (Bl(), Dp(P3, { key: 1 })) : Tp("", !0)
      ]);
    };
  }
};
const Bp = window.Vue.toDisplayString, G3 = window.Vue.createElementVNode, Pp = window.Vue.openBlock, Fp = window.Vue.createElementBlock, X3 = window.Vue.createCommentVNode, W3 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, K3 = ["textContent"], Y3 = ["textContent"], Pf = {
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
    return (t, n) => (Pp(), Fp("section", W3, [
      G3("h5", {
        textContent: Bp(e.placeholderTitle)
      }, null, 8, K3),
      e.placeholderSubtitle ? (Pp(), Fp("p", {
        key: 0,
        textContent: Bp(e.placeholderSubtitle)
      }, null, 8, Y3)) : X3("", !0)
    ]));
  }
}, J3 = window.Vue.computed, Q3 = window.Vue.createApp, Z3 = window.Vuex.useStore, e5 = () => {
  const e = Z3(), { sectionSuggestion: t } = We(), { currentTargetPage: n } = ut(), o = ce(), s = () => Q3(
    Pf,
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
  return J3(() => {
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
const Fl = window.Vue.createVNode, nt = window.Vue.unref, Eo = window.Vue.openBlock, Np = window.Vue.createBlock, Mp = window.Vue.createCommentVNode, fi = window.Vue.createElementVNode, Nl = window.Vue.Fragment, wi = window.Vue.createElementBlock, t5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, n5 = { class: "sx-content-comparator__source-content" }, o5 = ["lang", "dir", "innerHTML"], s5 = ["lang", "dir", "innerHTML"], a5 = ["innerHTML"], i5 = window.Vue.ref, r5 = window.Vue.computed, Up = window.Vue.watch, l5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Yt(), n = Xe(), o = i5("source_section"), { logDashboardTranslationStartEvent: s } = Qi(), a = Zo(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = B(), { sourceSectionContent: i, targetSectionContent: c } = mu(), g = e5(), { sectionSuggestion: p, isCurrentSectionPresent: m } = We(), h = r5(() => p.value.targetTitle), f = Af();
    return Up(
      h,
      () => f(
        d.value,
        u.value,
        h.value
      ),
      { immediate: !0 }
    ), Up(m, t, { immediate: !0 }), (w, _) => (Eo(), wi("section", t5, [
      Fl(q3, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Fl(_3, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": _[0] || (_[0] = (y) => o.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      fi("section", n5, [
        o.value === "source_section" ? (Eo(), wi(Nl, { key: 0 }, [
          nt(i) ? Mp("", !0) : (Eo(), Np(nt(lt), { key: 0 })),
          fi("section", {
            lang: nt(u),
            dir: nt(z.getDir)(nt(u)),
            class: "pt-2 px-4",
            innerHTML: nt(i)
          }, null, 8, o5)
        ], 64)) : o.value === "target_article" ? (Eo(), wi(Nl, { key: 1 }, [
          nt(g) ? Mp("", !0) : (Eo(), Np(nt(lt), { key: 0 })),
          fi("article", {
            lang: nt(d),
            dir: nt(z.getDir)(nt(d)),
            class: "px-4",
            innerHTML: nt(g)
          }, null, 8, s5)
        ], 64)) : (Eo(), wi(Nl, { key: 2 }, [
          fi("section", {
            class: "pa-4",
            innerHTML: nt(c)
          }, null, 8, a5),
          Fl(Pf, {
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
}, c5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: l5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, u5 = window.Vue.resolveComponent, d5 = window.Vue.createVNode, g5 = window.Vue.normalizeClass, p5 = window.Vue.openBlock, m5 = window.Vue.createElementBlock;
function h5(e, t, n, o, s, a) {
  const r = u5("sx-content-comparator");
  return p5(), m5("main", {
    class: g5(["sx-content-comparator-view", a.classes])
  }, [
    d5(r)
  ], 2);
}
const f5 = /* @__PURE__ */ oe(c5, [["render", h5]]);
const w5 = window.Vue.resolveDirective, Bs = window.Vue.createElementVNode, Ip = window.Vue.withDirectives, _i = window.Vue.unref, Ml = window.Vue.createVNode, Rp = window.Vue.toDisplayString, zp = window.Vue.createTextVNode, Ps = window.Vue.withCtx, _5 = window.Vue.openBlock, v5 = window.Vue.createBlock, S5 = { class: "mw-ui-dialog__header px-4 py-3" }, y5 = { class: "mw-ui-dialog__header-title" }, x5 = { class: "pa-4" }, C5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Op = window.Codex.CdxButton, b5 = {
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
      const u = w5("i18n");
      return _5(), v5(_i(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Ps(() => [
          Bs("div", S5, [
            Ip(Bs("span", y5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Ps(() => [
          Bs("div", C5, [
            Ml(_i(Op), {
              weight: "quiet",
              onClick: s
            }, {
              default: Ps(() => [
                zp(Rp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Ml(_i(Op), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Ps(() => [
                zp(Rp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Ps(() => [
          Ml(_i(Ri)),
          Bs("div", x5, [
            Ip(Bs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, k5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => so(a)
  );
  return s && dh(s) ? vt.parseTemplateWikitext(
    ch(s),
    n,
    t
  ) : Promise.resolve(null);
}, Ff = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => so(a)
  );
  return s ? vt.parseTemplateWikitext(
    ch(s),
    n,
    t
  ) : Promise.resolve(null);
}, $5 = window.Vuex.useStore, hu = () => {
  const e = $5(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = Tf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof rt ? p.blockTemplateProposedTranslations[c] = g : p instanceof Un && p.addProposedTranslation(c, g);
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
    p instanceof rt && (p.setBlockTemplateAdaptationInfoByHtml(
      c,
      m
    ), m = (yield k5(
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
}, V5 = window.Vuex.useStore, E5 = () => {
  const { sourceSection: e } = te(), t = V5(), { translateTranslationUnitById: n } = hu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function L5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const A5 = window.Vue.resolveDirective, it = window.Vue.createElementVNode, vi = window.Vue.withDirectives, Oe = window.Vue.unref, Ul = window.Vue.createVNode, cn = window.Vue.withCtx, D5 = window.Vue.renderList, T5 = window.Vue.Fragment, Si = window.Vue.openBlock, B5 = window.Vue.createElementBlock, P5 = window.Vue.toDisplayString, Il = window.Vue.createBlock, jp = window.Vue.createCommentVNode, F5 = { class: "mw-ui-dialog__header pa-4" }, N5 = { class: "row ma-0 py-2" }, M5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, U5 = { class: "mb-0" }, I5 = { class: "col shrink justify-center" }, R5 = { class: "pb-2 mb-0" }, z5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, O5 = ["dir", "lang", "innerHTML"], j5 = ["textContent"], H5 = ["innerHTML"], q5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, G5 = /* @__PURE__ */ it("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), X5 = ["innerHTML"], Rl = window.Vue.computed, W5 = window.Vuex.useStore, K5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ee.EMPTY_TEXT_PROVIDER_KEY, s = ee.ORIGINAL_TEXT_PROVIDER_KEY, a = W5(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = te(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = B(), c = Rl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Rl(() => {
      const S = [s, o];
      return c.value.filter(
        (x) => !S.includes(x)
      );
    }), p = Rl(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = E5(), h = (S) => {
      m(S), w();
    }, f = ee.getMTProviderLabel, w = () => n("update:active", !1), _ = ce(), y = L5(
      _.i18n("cx-tools-mt-noservices")
    );
    return (S, x) => {
      const A = A5("i18n");
      return e.active ? (Si(), Il(Oe(St), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: cn(() => [
          it("div", F5, [
            it("div", N5, [
              it("div", M5, [
                vi(it("h4", U5, null, 512), [
                  [A, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              it("div", I5, [
                Ul(Oe(Me), {
                  type: "icon",
                  icon: Oe(la),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            vi(it("h6", R5, null, 512), [
              [A, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: cn(() => [
          Ul(Oe(Qe), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: x[0] || (x[0] = (C) => h(Oe(s)))
          }, {
            header: cn(() => [
              vi(it("h5", z5, null, 512), [
                [A, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: cn(() => [
              it("p", {
                dir: Oe(z.getDir)(Oe(d)),
                lang: Oe(d),
                innerHTML: p.value[Oe(s)]
              }, null, 8, O5)
            ]),
            _: 1
          }),
          (Si(!0), B5(T5, null, D5(g.value, (C) => (Si(), Il(Oe(Qe), {
            key: C,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (U) => h(C)
          }, {
            header: cn(() => [
              it("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: P5(Oe(f)(C))
              }, null, 8, j5)
            ]),
            default: cn(() => [
              it("p", {
                innerHTML: p.value[C]
              }, null, 8, H5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Ul(Oe(Qe), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: x[1] || (x[1] = (C) => h(Oe(o)))
          }, {
            header: cn(() => [
              vi(it("h5", q5, null, 512), [
                [A, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: cn(() => [
              G5
            ]),
            _: 1
          }),
          g.value.length ? jp("", !0) : (Si(), Il(Oe(Qe), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: cn(() => [
              it("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Oe(y)
              }, null, 8, X5)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : jp("", !0);
    };
  }
}, Y5 = window.Vuex.useStore, es = () => {
  const { sourceSection: e } = te(), t = Y5(), { translateTranslationUnitById: n } = hu(), { currentMTProvider: o } = Ae(t), s = (l) => b(void 0, null, function* () {
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
const J5 = window.Vue.toDisplayString, zl = window.Vue.createElementVNode, Ol = window.Vue.unref, Q5 = window.Vue.createVNode, Z5 = window.Vue.normalizeClass, eL = window.Vue.withCtx, tL = window.Vue.openBlock, nL = window.Vue.createBlock, oL = ["href"], sL = ["textContent"], aL = ["innerHTML"], Lo = window.Vue.computed, Hp = "sx-sentence-selector__section-title", iL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), { currentSourcePage: o } = ut(), { sourceLanguageURLParameter: s } = B(), a = Lo(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.title;
    }), r = Lo(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), l = Lo(
      () => Q.getPageUrl(s.value, a.value)
    ), u = Lo(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), d = Lo(
      () => u.value ? "translated" : "selected"
    ), i = Lo(() => {
      const p = [Hp];
      return n.value && p.push(`${Hp}--${d.value}`), p;
    }), { selectTranslationUnitById: c } = es(), g = () => c(0);
    return (p, m) => (tL(), nL(Ol(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: eL(() => [
        zl("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          zl("strong", {
            textContent: J5(a.value)
          }, null, 8, sL),
          Q5(Ol(qe), {
            icon: Ol(sh),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, oL),
        zl("h2", {
          class: Z5(["pa-0 ma-0", i.value]),
          onClick: g,
          innerHTML: r.value
        }, null, 10, aL)
      ]),
      _: 1
    }));
  }
};
const jt = window.Vue.unref, Fs = window.Vue.createVNode, yi = window.Vue.withCtx, qp = window.Vue.toDisplayString, Gp = window.Vue.createTextVNode, rL = window.Vue.openBlock, lL = window.Vue.createBlock, cL = window.Vue.computed, jl = window.Codex.CdxButton, Xp = window.Codex.CdxIcon, Nf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = te(), s = cL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (rL(), lL(jt(N), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: yi(() => [
        Fs(jt(jl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: jt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: yi(() => [
            Fs(jt(Xp), {
              class: "me-1",
              icon: jt(nu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Fs(jt(jl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !jt(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: yi(() => [
            Gp(qp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Fs(jt(jl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: yi(() => [
            Gp(qp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Fs(jt(Xp), {
              class: "ms-1",
              size: "small",
              icon: jt(ma)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Zn = window.Vue.unref, uL = window.Vue.toDisplayString, Ns = window.Vue.createVNode, xi = window.Vue.withCtx, dL = window.Vue.openBlock, gL = window.Vue.createBlock, Hl = window.Vue.computed, pL = window.Vuex.useStore, mL = window.Codex.CdxButton, hL = window.Codex.CdxIcon, fL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = pL(), n = Hl(() => t.state.application.currentMTProvider), o = ce(), s = Hl(() => ({
      [ee.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ee.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Hl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ee.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (dL(), gL(Zn(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: xi(() => [
        Ns(Zn(N), { class: "ma-0 ps-5 pb-4" }, {
          default: xi(() => [
            Ns(Zn(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: uL(a.value)
            }, null, 8, ["textContent"]),
            Ns(Zn(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: xi(() => [
                Ns(Zn(mL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: xi(() => [
                    Ns(Zn(hL), {
                      class: "pa-0",
                      icon: Zn(eu)
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
const At = window.Vue.unref, Dn = window.Vue.createVNode, wL = window.Vue.resolveDirective, Wp = window.Vue.createElementVNode, _L = window.Vue.withDirectives, Kp = window.Vue.toDisplayString, Yp = window.Vue.createTextVNode, Ms = window.Vue.withCtx, vL = window.Vue.openBlock, SL = window.Vue.createElementBlock, yL = { class: "mt-retry-body pb-5" }, xL = { class: "retry-body__message" }, Jp = window.Codex.CdxButton, ql = window.Codex.CdxIcon, CL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = wL("i18n");
      return vL(), SL("div", yL, [
        Wp("div", xL, [
          Dn(At(ql), {
            class: "me-2",
            icon: At(Th)
          }, null, 8, ["icon"]),
          _L(Wp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Dn(At(N), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Ms(() => [
            Dn(At(k), { cols: "6" }, {
              default: Ms(() => [
                Dn(At(Jp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Ms(() => [
                    Dn(At(ql), {
                      class: "me-1",
                      icon: At(Uh)
                    }, null, 8, ["icon"]),
                    Yp(" " + Kp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Dn(At(k), { cols: "6" }, {
              default: Ms(() => [
                Dn(At(Jp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Ms(() => [
                    Dn(At(ql), {
                      class: "me-1",
                      icon: At(ay)
                    }, null, 8, ["icon"]),
                    Yp(" " + Kp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Ao = window.Vue.createVNode, ot = window.Vue.unref, Us = window.Vue.openBlock, bL = window.Vue.createElementBlock, kL = window.Vue.createCommentVNode, Ci = window.Vue.createBlock, $L = window.Vue.normalizeClass, VL = window.Vue.normalizeStyle, Is = window.Vue.withCtx, EL = window.Vue.toDisplayString, LL = window.Vue.createTextVNode, AL = window.Vue.normalizeProps, DL = window.Vue.guardReactiveProps, TL = ["lang", "dir", "innerHTML"], Gl = window.Vue.ref, BL = window.Vue.onMounted, PL = window.Vue.onBeforeUnmount, Xl = window.Vue.computed, FL = window.Vue.nextTick, NL = window.Vuex.useStore, ML = window.Codex.CdxButton, UL = window.Codex.CdxIcon, IL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Gl(0), n = Gl(null), o = Gl(null), s = NL(), { currentMTProvider: a } = Ae(s), { targetLanguageURLParameter: r } = B(), { sourceSection: l, currentProposedTranslation: u } = te(), d = Xl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Xl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = Xl(
      () => !!u.value || a.value === ee.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    BL(() => b(this, null, function* () {
      yield FL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), PL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Us(), Ci(ot(Qe), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Is(() => [
        Ao(ot(N), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Is(() => [
            Ao(fL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Ao(ot(k), {
              class: $L(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: VL(c.value ? i.value : null)
            }, {
              default: Is(() => [
                c.value ? (Us(), bL("section", {
                  key: 0,
                  lang: ot(r),
                  dir: ot(z.getDir)(ot(r)),
                  innerHTML: ot(u)
                }, null, 8, TL)) : d.value ? (Us(), Ci(ot(lt), { key: 1 })) : (Us(), Ci(CL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Ao(ot(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Is(() => [
                c.value || d.value ? (Us(), Ci(ot(ML), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", ot(u)))
                }, {
                  default: Is(() => [
                    Ao(ot(UL), {
                      class: "me-1",
                      icon: ot(Zc)
                    }, null, 8, ["icon"]),
                    LL(" " + EL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : kL("", !0),
                Ao(Nf, AL(DL(m.$attrs)), null, 16)
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
}, RL = window.Vue.computed, zL = (e) => RL(() => {
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
const OL = window.Vue.unref, jL = window.Vue.normalizeClass, HL = window.Vue.openBlock, qL = window.Vue.createElementBlock, GL = ["innerHTML"], XL = window.Vue.onMounted, WL = window.Vue.ref, KL = window.Vue.computed, YL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: rt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = WL(null), a = zL(n.subSection);
    XL(() => {
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
    const { selectTranslationUnitById: r } = es(), l = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, u = KL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (HL(), qL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: jL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: OL(a)
    }, null, 10, GL));
  }
};
const Qp = window.Vue.unref, Zp = window.Vue.createVNode, em = window.Vue.normalizeStyle, JL = window.Vue.openBlock, QL = window.Vue.createElementBlock, tm = window.Vue.computed, Mf = {
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
    const t = e, n = tm(() => ({ "--size": t.size })), o = tm(
      () => !t.isTemplateAdapted || t.percentage === 0 ? ah : Ni
    );
    return (s, a) => (JL(), QL("div", {
      class: "block-template-status-indicator",
      style: em(n.value)
    }, [
      Zp(Qp(n_), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Zp(Qp(qe), {
        icon: o.value,
        size: e.size / 2,
        style: em({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Tn = window.Vue.unref, bi = window.Vue.createVNode, Wl = window.Vue.withCtx, ZL = window.Vue.openBlock, eA = window.Vue.createBlock, tA = window.Vue.computed, nm = window.Codex.CdxButton, om = window.Codex.CdxIcon, Uf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), o = tA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (ZL(), eA(Tn(N), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Wl(() => [
        bi(Tn(nm), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Tn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Wl(() => [
            bi(Tn(om), { icon: Tn(nu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        bi(Tn(nm), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Wl(() => [
            bi(Tn(om), { icon: Tn(ma) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Rs = window.Vue.openBlock, ki = window.Vue.createBlock;
window.Vue.createCommentVNode;
const un = window.Vue.unref, Do = window.Vue.withCtx, zs = window.Vue.createVNode, Kl = window.Vue.toDisplayString, Yl = window.Vue.createElementVNode, nA = window.Vue.renderList, oA = window.Vue.Fragment, sA = window.Vue.createElementBlock, aA = { class: "pa-4" }, iA = ["textContent"], rA = ["textContent"], lA = window.Vuex.useStore, $i = window.Vue.computed, cA = {
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
    const t = e, { targetLanguageAutonym: n } = Ae(lA()), o = $i(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = ce(), a = $i(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = $i(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = $i(() => {
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
          icon: la,
          color: wt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Ni,
          color: wt.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
          icon: Ni,
          color: wt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: zi,
        color: wt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: v0,
        color: wt.gray500
      }), u;
    });
    return (u, d) => (Rs(), ki(un(St), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: Do(() => [
        zs(un(N), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Do(() => [
            zs(un(k), { shrink: "" }, {
              default: Do(() => [
                e.targetTemplateExists ? (Rs(), ki(Mf, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Rs(), ki(un(qe), {
                  key: 1,
                  icon: un(S0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Do(() => [
        Yl("div", aA, [
          Yl("h3", {
            textContent: Kl(a.value)
          }, null, 8, iA),
          Yl("p", {
            class: "mt-6 text-small",
            textContent: Kl(r.value)
          }, null, 8, rA),
          (Rs(!0), sA(oA, null, nA(l.value, (i, c) => (Rs(), ki(un(N), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Do(() => [
              zs(un(k), { shrink: "" }, {
                default: Do(() => [
                  zs(un(qe), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              zs(un(k), {
                textContent: Kl(i.text)
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
const Le = window.Vue.unref, je = window.Vue.createVNode, Ht = window.Vue.withCtx, Jl = window.Vue.toDisplayString, sm = window.Vue.createTextVNode, uA = window.Vue.resolveDirective, am = window.Vue.withDirectives, im = window.Vue.createElementVNode, dA = window.Vue.normalizeClass, To = window.Vue.openBlock, rm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Vi = window.Vue.createBlock, lm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const cm = window.Vue.mergeProps, gA = { class: "block-template-adaptation-card__container pa-4" }, pA = ["textContent"], mA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, He = window.Vue.computed, hA = window.Vue.ref, fA = window.Vuex.useStore, um = window.Codex.CdxButton, dm = window.Codex.CdxIcon, wA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = fA(), { targetLanguageAutonym: n, currentMTProvider: o } = Ae(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = te(), r = He(() => {
      var E;
      return (E = s.value) == null ? void 0 : E.isTranslated;
    }), l = He(() => {
      var D;
      return ((D = s.value) == null ? void 0 : D.blockTemplateTranslatedContent) || a.value;
    }), u = He(
      () => {
        var E;
        return (E = s.value) == null ? void 0 : E.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = He(
      () => {
        var E;
        return !((E = t.state.application.mtRequestsPending) != null && E.includes(
          s.value.id
        ));
      }
    ), i = ce(), c = He(
      // Strip HTML comments and return
      () => {
        var E, D;
        return ((D = (E = s.value) == null ? void 0 : E.sourceBlockTemplateName) == null ? void 0 : D.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = He(
      () => {
        var E, D;
        return (D = (E = s.value) == null ? void 0 : E.blockTemplateAdaptationInfo) == null ? void 0 : D[o.value];
      }
    ), p = He(
      () => {
        var E, D;
        return ((E = g.value) == null ? void 0 : E.adapted) || !!((D = g.value) != null && D.partial);
      }
    ), m = He(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = He(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = He(
      () => {
        var E;
        return Object.keys(((E = s.value) == null ? void 0 : E.sourceTemplateParams) || {}).length;
      }
    ), w = He(() => {
      var D;
      const E = (D = s.value) == null ? void 0 : D.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(E || {});
    }), _ = He(() => w.value.length), y = He(() => {
      const E = C.value;
      return f.value + E === 0 ? 100 : _.value / (f.value + E) * 100 || 0;
    }), S = hA(!1), x = () => {
      S.value = !0;
    }, A = (E) => E.filter((D) => !w.value.includes(D)), C = He(() => {
      var D;
      const E = ((D = g.value) == null ? void 0 : D.mandatoryTargetParams) || [];
      return A(E).length;
    }), U = He(() => {
      var D;
      const E = ((D = g.value) == null ? void 0 : D.optionalTargetParams) || [];
      return A(E).length;
    });
    return (E, D) => {
      const R = uA("i18n");
      return To(), Vi(Le(Qe), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Ht(() => [
          im("div", gA, [
            je(Le(N), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Ht(() => [
                je(Le(k), { shrink: "" }, {
                  default: Ht(() => [
                    je(Le(dm), {
                      icon: Le(iy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                je(Le(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Ht(() => [
                    sm(Jl(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (To(), rm("div", {
              key: 0,
              class: dA(["pa-4 mb-4", m.value])
            }, [
              je(Le(N), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Ht(() => [
                  am(je(Le(k), { tag: "h5" }, null, 512), [
                    [R, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  je(Le(k), { shrink: "" }, {
                    default: Ht(() => [
                      je(Mf, {
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
              im("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Jl(u.value)
              }, null, 8, pA),
              je(Le(um), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: D[0] || (D[0] = (q) => E.$emit("edit-translation", l.value))
              }, {
                default: Ht(() => [
                  sm(Jl(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (To(), rm("div", mA, [
              je(Le(N), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Ht(() => [
                  am(je(Le(k), { tag: "h5" }, null, 512), [
                    [R, [
                      Le(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  je(Le(k), { shrink: "" }, {
                    default: Ht(() => [
                      je(Le(um), {
                        weight: "quiet",
                        "aria-label": E.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Ht(() => [
                          je(Le(dm), {
                            icon: Le(ny),
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
            ])) : (To(), Vi(Le(lt), { key: 2 }))
          ]),
          r.value ? (To(), Vi(Uf, lm(cm({ key: 1 }, E.$attrs)), null, 16)) : (To(), Vi(Nf, lm(cm({ key: 0 }, E.$attrs)), null, 16)),
          je(cA, {
            active: S.value,
            "onUpdate:active": D[1] || (D[1] = (q) => S.value = q),
            "source-params-count": f.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": C.value,
            "optional-missing-params-count": U.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const _A = window.Vue.unref, vA = window.Vue.createVNode, SA = window.Vue.openBlock, yA = window.Vue.createElementBlock, xA = { class: "translated-segment-card-header" }, CA = window.Vue.computed, bA = {
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
    const n = t, { isSectionTitleSelected: o } = te(), s = ce(), a = CA(() => [
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
    return (l, u) => (SA(), yA("div", xA, [
      vA(_A(ra), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const kA = window.Vue.useCssVars, Ne = window.Vue.createVNode, gm = window.Vue.resolveDirective, $A = window.Vue.createElementVNode, Ql = window.Vue.withDirectives, pe = window.Vue.unref, VA = window.Vue.normalizeStyle, Ei = window.Vue.openBlock, pm = window.Vue.createElementBlock, EA = window.Vue.createCommentVNode, LA = window.Vue.normalizeClass, ht = window.Vue.withCtx, AA = window.Vue.toDisplayString, DA = window.Vue.createTextVNode, mm = window.Vue.createBlock, TA = window.Vue.normalizeProps, BA = window.Vue.guardReactiveProps, dn = window.Vue.computed, PA = window.Vue.ref, FA = window.Vue.inject, NA = window.Vuex.useStore, MA = window.Codex.CdxButton, Zl = window.Codex.CdxIcon, UA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    kA((_) => ({
      "4929555c": w.value
    }));
    const t = PA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = te(), { targetLanguage: a } = Ae(NA()), r = dn(() => t.value === "sentence"), l = dn(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = dn(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = FA("colors"), i = d.gray200, c = d.red600, g = dn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = dn(
      () => Wt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = dn(
      () => Wt.getScoreStatus(p.value)
    ), h = dn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = dn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), w = dn(
      () => f.value[m.value]
    );
    return (_, y) => {
      const S = gm("i18n"), x = gm("i18n-html");
      return Ei(), mm(pe(Qe), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ht(() => [
          Ne(pe(N), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ht(() => [
              Ne(bA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (A) => t.value = A)
              }, null, 8, ["selection"]),
              Ne(pe(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ht(() => [
                  Ne(pe(N), { class: "ma-0" }, {
                    default: ht(() => [
                      Ne(pe(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ht(() => [
                          Ql($A("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Ql((Ei(), pm("p", {
                            key: 0,
                            style: VA({ color: pe(c) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Ql((Ei(), pm("p", {
                            key: 1,
                            class: LA(h.value)
                          }, null, 2)), [
                            [x, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ne(pe(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ht(() => [
                          Ne(pe(N), { class: "ma-0 ms-2" }, {
                            default: ht(() => [
                              Ne(pe(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ht(() => [
                                  Ne(pe(Zl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: pe(cy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ne(pe(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ht(() => [
                                  Ne(pe(rh), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: pe(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ne(pe(k), { shrink: "" }, {
                                default: ht(() => [
                                  Ne(pe(Zl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: pe(ry)
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
                  r.value ? (Ei(), mm(pe(MA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (A) => _.$emit("edit-translation", g.value))
                  }, {
                    default: ht(() => [
                      Ne(pe(Zl), {
                        class: "me-1",
                        icon: pe(Zc)
                      }, null, 8, ["icon"]),
                      DA(" " + AA(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : EA("", !0)
                ]),
                _: 1
              }),
              Ne(pe(k), { class: "translated-segment-card__actions" }, {
                default: ht(() => [
                  Ne(Uf, TA(BA(_.$attrs)), null, 16)
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
}, IA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = te(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = es(), { currentTranslation: s } = Mt();
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
}, If = window.Vuex.useStore, RA = () => {
  const e = If(), {
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
    o ? s = yield Xi.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ee(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, zA = () => {
  const e = If(), { currentMTProvider: t } = Ae(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = RA();
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
}, OA = window.Vue.computed, jA = (e) => {
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
}, HA = () => {
  const { selectedContentTranslationUnit: e } = te(), t = OA(
    () => e.value instanceof rt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && jA(o);
  };
}, qA = (e, t) => {
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
}, GA = window.Vue.computed, Rf = () => {
  const { currentTranslation: e } = Mt(), { currentSourcePage: t } = ut();
  return GA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, XA = window.Vuex.useStore, fu = () => {
  const e = XA(), { sourceSection: t, targetPageTitleForPublishing: n } = te(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), r = Rf(), { target: l, PUBLISHING_TARGETS: u } = Yt();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => qA(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return vt.saveTranslation({
      sourceTitle: o.value,
      targetTitle: d,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: r.value,
      units: g.map((m) => m.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: c,
      isSandbox: l === u.SANDBOX,
      progress: p
    });
  };
}, WA = window.Vue.effectScope, KA = window.Vue.onScopeDispose, YA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = WA(!0), n = o.run(() => e(...a))), KA(s), n);
}, JA = window.Vuex.useStore;
let ec;
const QA = () => {
  const e = JA(), t = fu();
  let n = 1e3, o = 0;
  return ec = lu(() => t().then((a) => {
    a instanceof jo ? (n *= o + 1, o++, setTimeout(ec, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Go)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), ec;
}, zf = YA(QA), ZA = window.Vuex.useStore, eD = () => {
  const e = ZA(), t = zf(), { currentMTProvider: n } = Ae(e), { sourceSection: o, currentProposedTranslation: s } = te(), { selectNextTranslationUnit: a } = es();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, tD = window.Vuex.useStore, nD = () => {
  const e = tD(), t = zf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, oD = window.Vuex.useStore, sD = window.Vue.computed, Of = () => {
  const e = oD(), t = Xe(), { currentTranslation: n } = Mt(), { currentMTProvider: o, previousRoute: s } = Ae(e), { currentTargetPage: a } = ut(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: d
  } = B(), i = yt(), c = sD(() => {
    var S;
    const y = {
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
    if (d.value ? (y.translation_source_section = d.value, y.translation_type = "section") : y.translation_type = "article", n.value) {
      y.translation_id = n.value.translationId, y.translation_target_title = n.value.targetTitle;
      const x = n.value.targetSectionTitle;
      x && (y.translation_target_section = x);
    } else
      a.value && (y.translation_target_title = (S = a.value) == null ? void 0 : S.title);
    return o.value && (y.translation_provider = ee.getProviderForInstrumentation(o.value)), y;
  }), g = (y) => {
    if (!y.translation_source_title) {
      const S = new URL(window.location).searchParams;
      mw.errorLogger.logError(
        new Error(
          `Event ${y.event_type} is missing translation_source_title. Current URL params: ${JSON.stringify(
            Array.from(S.entries())
          )}`
        ),
        "error.contenttranslation"
      );
    }
  };
  return {
    logEditorOpenEvent: () => {
      var C;
      const y = t.currentRoute.value.meta.workflowStep, x = t.getRoutes().find(
        (U) => U.name === s.value
      ), A = ((C = x == null ? void 0 : x.meta) == null ? void 0 : C.workflowStep) || 0;
      if (y > A) {
        const U = ae({
          event_type: "editor_open"
        }, c.value);
        return g(U), i(U);
      }
      return Promise.resolve();
    },
    logEditorCloseEvent: () => {
      const y = ae({
        event_type: "editor_close"
      }, c.value);
      return g(y), i(y);
    },
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
}, aD = (e, t, n, o) => b(void 0, null, function* () {
  var l, u, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Ff(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), iD = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, rD = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return aD(e, t, n, o);
  iD(e, t);
}), lD = (e, t, n, o) => {
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
        const d = rD(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, cD = { restoreCorporaDraft: lD }, uD = () => {
  const { currentSourcePage: e } = ut(), { sourceSection: t } = te();
  return (n) => b(void 0, null, function* () {
    if (n.restored)
      return;
    const o = yield vt.fetchTranslationUnits(
      n.translationId
    );
    yield cD.restoreCorporaDraft(
      e.value,
      n.targetTitle,
      n.targetLanguage,
      o
    ), n.restored = !0;
    let s;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, s = n.targetTitle) : s = n.targetSectionTitle, t.value.translatedTitle = s;
  });
};
const ge = window.Vue.unref, ft = window.Vue.createVNode, gn = window.Vue.withCtx, dD = window.Vue.resolveDirective, hm = window.Vue.createElementVNode, gD = window.Vue.withDirectives, pD = window.Vue.toDisplayString, mD = window.Vue.createTextVNode, hD = window.Vue.renderList, fD = window.Vue.Fragment, Bn = window.Vue.openBlock, fm = window.Vue.createElementBlock, Bo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const wD = window.Vue.normalizeClass, _D = window.Vue.normalizeStyle, vD = { class: "sx-sentence-selector__header-title mb-0" }, SD = { class: "sx-sentence-selector__section-contents px-4" }, Po = window.Vue.computed, yD = window.Vue.nextTick, xD = window.Vue.onMounted, Os = window.Vue.ref, wm = window.Vue.watch, CD = window.Vuex.useStore, _m = window.Codex.CdxButton, bD = window.Codex.CdxIcon, kD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Os(!1), n = Os(!1), o = Os("100%"), s = CD(), { currentMTProvider: a } = Ae(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l,
      pageURLParameter: u,
      sectionURLParameter: d
    } = B(), { resetPublishTarget: i, target: c } = Yt(), g = su();
    c.value || g(
      r.value,
      l.value,
      u.value
    ).then(() => i());
    const { sourceSection: p, selectedContentTranslationUnit: m } = te(), h = Os({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), f = Po(
      () => Object.values(h.value).every(Boolean)
    ), w = Po(
      () => {
        var ye;
        return (ye = p.value) == null ? void 0 : ye.isSelectedTranslationUnitTranslated;
      }
    ), _ = Po(() => {
      var ye;
      return (ye = p.value) == null ? void 0 : ye.subSections;
    }), y = Po(
      () => {
        var ye;
        return (ye = p.value) == null ? void 0 : ye.selectedTranslationUnitOriginalContent;
      }
    ), S = Po(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: x,
      logEditorCloseEvent: A,
      logEditorCloseWarnEvent: C,
      logEditorSegmentAddEvent: U,
      logEditorSegmentSkipEvent: E
    } = Of(), D = IA();
    zA()().then(() => {
      x(), h.value.mtProviders = !0;
    });
    const q = HA(), { fetchTranslationsByStatus: K, translationsFetched: be } = Qo(), ue = uD(), { currentTranslation: Ie } = Mt(), { selectPageSectionByTitle: Be, selectPageSectionByIndex: ke } = Zi(), De = pu(), Re = Ko();
    xD(() => b(this, null, function* () {
      if (!be.value.draft) {
        const ye = [
          // required to get current draft translation (if exists)
          K("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          De(r.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Re(r.value, [u.value])
        ];
        yield Promise.all(ye);
      }
      h.value.pageMetadata = !0, d.value ? yield Be(d.value) : yield ke(0), h.value.pageContent = !0, Ie.value && (yield ue(Ie.value)), h.value.draftRestored = !0, wm(
        f,
        () => b(this, null, function* () {
          f.value && (yield yD(), D(), q());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), wm(m, q);
    const { selectNextTranslationUnit: Te, selectPreviousTranslationUnit: Y } = es(), M = () => (E(), Te()), G = eD(), P = () => {
      U(), G();
    }, I = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, v = Xe(), V = () => {
      const { autoSavePending: ye } = s.state.application;
      if (ye) {
        jn.value = !0, C();
        return;
      }
      X();
    }, T = nD(), { clearTranslationURLParameters: F } = B(), X = () => b(this, null, function* () {
      K("draft"), Ie.value && (p.value.reset(), Ie.value.restored = !1), A(), F(), T(), yield v.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: se,
      translateSelectedTranslationUnitForAllProviders: H
    } = hu(), O = () => {
      co.value || (t.value = !0, H());
    }, { getCurrentTitleByLanguage: ne } = Sn(), ze = (ye) => {
      v.push({
        name: "sx-editor",
        state: {
          content: ye,
          originalContent: y.value,
          title: ne(
            l.value,
            r.value
          ),
          isInitialEdit: !w.value || null
        }
      });
    }, Se = () => v.push({ name: "sx-publisher" }), fa = () => b(this, null, function* () {
      m.value ? yield se(
        m.value.id,
        a.value
      ) : yield se(0, a.value);
    }), co = Po(
      () => m.value instanceof rt
    ), jn = Os(!1);
    return (ye, uo) => {
      const er = dD("i18n");
      return Bn(), fm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: _D(S.value)
      }, [
        ft(ge(N), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: gn(() => [
            ft(ge(k), { shrink: "" }, {
              default: gn(() => [
                ft(ge(_m), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": ye.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: V
                }, {
                  default: gn(() => [
                    ft(ge(bD), { icon: ge(Ph) }, null, 8, ["icon"])
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
              default: gn(() => [
                gD(hm("h4", vD, null, 512), [
                  [er, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ft(ge(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: gn(() => [
                ft(ge(_m), {
                  disabled: !(ge(p) && ge(p).isTranslated),
                  onClick: Se
                }, {
                  default: gn(() => [
                    mD(pD(ye.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        f.value ? (Bn(), Bo(ge(N), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: gn(() => [
            ft(ge(k), {
              dir: ge(z.getDir)(ge(r)),
              lang: ge(r),
              class: "sx-sentence-selector__section"
            }, {
              default: gn(() => [
                ft(iL),
                hm("div", SD, [
                  (Bn(!0), fm(fD, null, hD(_.value, (Jt) => (Bn(), Bo(YL, {
                    id: Jt.id,
                    key: `sub-section-${Jt.id}`,
                    "sub-section": Jt,
                    onBounceTranslation: I
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !co.value && w.value ? (Bn(), Bo(UA, {
              key: 0,
              onEditTranslation: ze,
              onSelectNextSegment: ge(Te),
              onSelectPreviousSegment: ge(Y)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : co.value ? (Bn(), Bo(wA, {
              key: 2,
              onEditTranslation: ze,
              onApplyTranslation: P,
              onSkipTranslation: M,
              onSelectPreviousSegment: ge(Y),
              onSelectNextSegment: ge(Te)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Bn(), Bo(IL, {
              key: 1,
              class: wD({ "mb-0": !n.value }),
              onConfigureOptions: O,
              onEditTranslation: ze,
              onApplyTranslation: P,
              onSkipTranslation: M,
              onSelectPreviousSegment: ge(Y),
              onRetryTranslation: fa
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Bn(), Bo(ge(N), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: gn(() => [
            ft(ge(lt), { class: "mt-0" })
          ]),
          _: 1
        })),
        ft(K5, {
          active: t.value,
          "onUpdate:active": uo[0] || (uo[0] = (Jt) => t.value = Jt)
        }, null, 8, ["active"]),
        ft(b5, {
          modelValue: jn.value,
          "onUpdate:modelValue": uo[1] || (uo[1] = (Jt) => jn.value = Jt),
          onDiscardTranslation: X
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const $D = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: kD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, VD = window.Vue.resolveComponent, ED = window.Vue.createVNode, LD = window.Vue.normalizeClass, AD = window.Vue.openBlock, DD = window.Vue.createElementBlock;
function TD(e, t, n, o, s, a) {
  const r = VD("sx-sentence-selector");
  return AD(), DD("main", {
    class: LD(["sx-sentence-selector-view", a.classes])
  }, [
    ED(r)
  ], 2);
}
const BD = /* @__PURE__ */ oe($D, [["render", TD]]), PD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, FD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const ND = window.Vue.resolveDirective, Li = window.Vue.withDirectives, Dt = window.Vue.openBlock, pn = window.Vue.createElementBlock, Ai = window.Vue.createCommentVNode, Di = window.Vue.Transition, eo = window.Vue.withCtx, Fo = window.Vue.createVNode, js = window.Vue.createElementVNode, Pn = window.Vue.unref, MD = window.Vue.renderList, UD = window.Vue.Fragment, ID = window.Vue.normalizeClass, vm = window.Vue.createBlock, RD = window.Vue.toDisplayString, zD = window.Vue.createTextVNode, OD = { class: "sx-quick-tutorial" }, jD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, HD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, qD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, GD = { class: "sx-quick-tutorial__illustration" }, XD = ["innerHTML"], WD = ["innerHTML"], KD = { class: "sx-quick-tutorial__step-indicator py-3" }, YD = ["onClick"], JD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, QD = {
  key: "secondary-point-1",
  class: "ma-0"
}, ZD = {
  key: "secondary-point-2",
  class: "ma-0"
}, eT = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Sm = window.Vue.ref, ym = window.Codex.CdxButton, tT = window.Codex.CdxIcon, nT = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Sm(2), n = Sm(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = Zo();
    return (r, l) => {
      const u = ND("i18n");
      return Dt(), pn("section", OD, [
        Fo(Pn(N), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: eo(() => [
            js("section", jD, [
              Fo(Di, {
                name: "fade",
                mode: "out-in"
              }, {
                default: eo(() => [
                  s(1) ? Li((Dt(), pn("h2", HD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Li((Dt(), pn("h2", qD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ai("", !0)
                ]),
                _: 1
              })
            ]),
            js("section", GD, [
              Fo(Di, { name: "mw-ui-animation-slide-start" }, {
                default: eo(() => [
                  s(1) ? (Dt(), pn("div", {
                    key: "illustration-1",
                    innerHTML: Pn(FD)
                  }, null, 8, XD)) : s(2) ? (Dt(), pn("div", {
                    key: "illustration-2",
                    innerHTML: Pn(PD)
                  }, null, 8, WD)) : Ai("", !0)
                ]),
                _: 1
              })
            ]),
            js("div", KD, [
              (Dt(!0), pn(UD, null, MD(t.value, (d) => (Dt(), pn("span", {
                key: `dot-${d}`,
                class: ID(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, YD))), 128))
            ]),
            js("section", JD, [
              Fo(Di, {
                name: "fade",
                mode: "out-in"
              }, {
                default: eo(() => [
                  s(1) ? Li((Dt(), pn("h3", QD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Li((Dt(), pn("h3", ZD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ai("", !0)
                ]),
                _: 1
              })
            ]),
            js("div", eT, [
              Fo(Di, {
                name: "fade",
                mode: "out-in"
              }, {
                default: eo(() => [
                  s(1) ? (Dt(), vm(Pn(ym), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: eo(() => [
                      Fo(Pn(tT), { icon: Pn(ma) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Dt(), vm(Pn(ym), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Pn(a)
                  }, {
                    default: eo(() => [
                      zD(RD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Ai("", !0)
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
const oT = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: nT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, sT = window.Vue.resolveComponent, aT = window.Vue.createVNode, iT = window.Vue.normalizeClass, rT = window.Vue.openBlock, lT = window.Vue.createElementBlock;
function cT(e, t, n, o, s, a) {
  const r = sT("sx-quick-tutorial");
  return rT(), lT("main", {
    class: iT(["sx-quick-tutorial-view", a.classes])
  }, [
    aT(r)
  ], 2);
}
const uT = /* @__PURE__ */ oe(oT, [["render", cT]]);
const dT = window.Vue.resolveDirective, xm = window.Vue.createElementVNode, gT = window.Vue.withDirectives, pT = window.Vue.unref, mT = window.Vue.withCtx, hT = window.Vue.createVNode, fT = window.Vue.openBlock, wT = window.Vue.createElementBlock, _T = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, vT = { class: "sx-editor__original-content-panel__header mb-2" }, ST = ["lang", "dir", "innerHTML"], Cm = window.Vue.ref, yT = window.Vue.onMounted, xT = {
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
    }, o = Cm(null), s = Cm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return yT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const u = dT("i18n");
      return fT(), wT("section", _T, [
        gT(xm("h5", vT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        hT(pT(W1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: mT(() => [
            xm("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, ST)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, CT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const bT = window.Vue.unref, Hs = window.Vue.createElementVNode, bm = window.Vue.resolveDirective, tc = window.Vue.withDirectives, kT = window.Vue.normalizeClass, $T = window.Vue.openBlock, VT = window.Vue.createElementBlock, ET = window.Vue.createCommentVNode, LT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, AT = { class: "sx-editor__feedback-overlay-content px-4" }, DT = ["innerHTML"], TT = { class: "sx-editor__feedback-overlay-content__title" }, BT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, nc = window.Vue.computed, PT = {
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
    const t = e, { targetLanguageURLParameter: n } = B(), o = nc(
      () => Wt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = nc(() => {
      const r = Wt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = nc(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = bm("i18n"), d = bm("i18n-html");
      return e.showFeedback ? ($T(), VT("div", LT, [
        Hs("div", AT, [
          Hs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: bT(CT)
          }, null, 8, DT),
          tc(Hs("h2", TT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          tc(Hs("p", BT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          tc(Hs("p", {
            class: kT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : ET("", !0);
    };
  }
}, FT = window.Vuex.useStore, NT = () => {
  const e = FT(), t = fu(), { selectNextTranslationUnit: n } = es(), { sourceSection: o, selectedContentTranslationUnit: s } = te(), { getCurrentTitleByLanguage: a } = Sn(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l
  } = B(), { currentMTProvider: u } = Ae(e);
  return (d) => b(void 0, null, function* () {
    const i = document.createElement("div");
    i.innerHTML = d, i.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), d = i.innerHTML, s.value instanceof rt && (d = (yield Ff(
      d,
      a(l.value, r.value),
      l.value
    )) || d), o.value.setTranslationForSelectedTranslationUnit(
      d,
      u.value
    ), t(), n();
  });
};
const st = window.Vue.unref, oc = window.Vue.openBlock, sc = window.Vue.createBlock, km = window.Vue.createCommentVNode, $m = window.Vue.createVNode, MT = window.Vue.createElementVNode, UT = window.Vue.withCtx, IT = { class: "sx-editor__editing-surface-container grow" }, ac = window.Vue.ref, RT = window.Vue.computed, zT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ac(!1), o = Xe(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: u, originalContent: d, title: i } = history.state, c = ac(null), g = ac(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Of(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = B(), { sourceSection: w } = te(), _ = RT(
      () => Wt.calculateScore(
        c.value,
        u,
        f.value
      )
    ), y = NT(), S = (x) => b(this, null, function* () {
      c.value = x, g.value = !0;
      const A = new Promise((U) => setTimeout(U, 2e3));
      let C = Promise.resolve();
      r ? w.value.editedTranslation = x : C = y(x), _.value === 0 && l ? p() : _.value > 0 && m(), yield Promise.all([A, C]), g.value = !1, a();
    });
    return (x, A) => (oc(), sc(st(N), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: UT(() => [
        st(d) ? (oc(), sc(xT, {
          key: 0,
          language: st(h),
          dir: st(z.getDir)(st(h)),
          "original-content": st(d)
        }, null, 8, ["language", "dir", "original-content"])) : km("", !0),
        n.value ? km("", !0) : (oc(), sc(st(lt), { key: 1 })),
        MT("div", IT, [
          $m(PT, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": st(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          $m(yV, {
            content: st(u),
            language: st(f),
            dir: st(z.getDir)(st(f)),
            title: st(i),
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
const OT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: zT
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
}, jT = window.Vue.resolveComponent, HT = window.Vue.createVNode, qT = window.Vue.normalizeClass, GT = window.Vue.openBlock, XT = window.Vue.createElementBlock;
function WT(e, t, n, o, s, a) {
  const r = jT("sx-editor");
  return GT(), XT("main", {
    class: qT(["sx-editor-view", a.classes])
  }, [
    HT(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const KT = /* @__PURE__ */ oe(OT, [["render", WT]]);
const qt = window.Vue.unref, to = window.Vue.createVNode, qs = window.Vue.withCtx, YT = window.Vue.resolveDirective, JT = window.Vue.withDirectives, QT = window.Vue.openBlock, ZT = window.Vue.createBlock, Vm = window.Codex.CdxButton, Em = window.Codex.CdxIcon, e6 = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Xe(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = YT("i18n");
      return QT(), ZT(qt(N), { class: "ma-0 sx-publisher__header" }, {
        default: qs(() => [
          to(qt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: qs(() => [
              to(qt(Vm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: qs(() => [
                  to(qt(Em), { icon: qt(Jo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          JT(to(qt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          to(qt(k), { shrink: "" }, {
            default: qs(() => [
              to(qt(Vm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: qs(() => [
                  to(qt(Em), { icon: qt(KS) }, null, 8, ["icon"])
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
}, t6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, n6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Lm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const ic = window.Vue.createElementVNode, Am = window.Vue.toDisplayString, rc = window.Vue.unref, lc = window.Vue.withCtx, Dm = window.Vue.createVNode, o6 = window.Vue.openBlock, s6 = window.Vue.createBlock, a6 = window.Vue.createCommentVNode, i6 = ["innerHTML"], r6 = ["textContent"], l6 = ["textContent"], cc = window.Vue.computed, c6 = {
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
        svg: t6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: n6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Lm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Lm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = cc(() => o[n.status].svg), a = cc(() => o[n.status].title), r = cc(() => o[n.status].subtitle);
    return (l, u) => e.active ? (o6(), s6(rc(St), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: lc(() => [
        Dm(rc(N), { class: "ma-4" }, {
          default: lc(() => [
            Dm(rc(k), null, {
              default: lc(() => [
                ic("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, i6),
                ic("h2", {
                  textContent: Am(a.value)
                }, null, 8, r6),
                ic("p", {
                  class: "ma-0",
                  textContent: Am(r.value)
                }, null, 8, l6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : a6("", !0);
  }
};
const at = window.Vue.unref, Tt = window.Vue.createVNode, mn = window.Vue.withCtx, u6 = window.Vue.resolveDirective, d6 = window.Vue.withDirectives, Tm = window.Vue.toDisplayString, g6 = window.Vue.createTextVNode, uc = window.Vue.openBlock, Bm = window.Vue.createElementBlock, p6 = window.Vue.createCommentVNode, jf = window.Vue.createElementVNode, m6 = window.Vue.createBlock, h6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, f6 = ["src"], w6 = ["textContent"], _6 = /* @__PURE__ */ jf("p", { class: "mt-0" }, null, -1), v6 = window.Vue.computed, S6 = window.Vue.inject, y6 = window.Vue.ref, Pm = window.Codex.CdxButton, x6 = window.Codex.CdxIcon, C6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Hh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = y6(""), s = () => n("close"), a = () => n("publish", o.value), r = S6("breakpoints"), l = v6(() => r.value.mobile);
    return (u, d) => {
      const i = u6("i18n");
      return e.active && e.captchaDetails ? (uc(), m6(at(St), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: mn(() => [
          Tt(at(N), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: mn(() => [
              Tt(at(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: mn(() => [
                  Tt(at(Pm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: mn(() => [
                      Tt(at(x6), { icon: at(Jo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              d6(Tt(at(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Tt(at(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: mn(() => [
                  Tt(at(Pm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: mn(() => [
                      g6(Tm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Tt(at(Ri))
        ]),
        default: mn(() => [
          jf("div", h6, [
            e.captchaDetails.type === "image" ? (uc(), Bm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, f6)) : (uc(), Bm("p", {
              key: 1,
              textContent: Tm(e.captchaDetails.question)
            }, null, 8, w6)),
            _6,
            Tt(at(N), { class: "ma-0" }, {
              default: mn(() => [
                Tt(at(k), null, {
                  default: mn(() => [
                    Tt(at(xc), {
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
      }, 8, ["fullscreen"])) : p6("", !0);
    };
  }
};
const Fn = window.Vue.unref, Ti = window.Vue.createVNode, No = window.Vue.withCtx, Mo = window.Vue.createElementVNode, b6 = window.Vue.resolveDirective, k6 = window.Vue.withDirectives, $6 = window.Vue.renderList, V6 = window.Vue.Fragment, dc = window.Vue.openBlock, E6 = window.Vue.createElementBlock, Fm = window.Vue.toDisplayString, Nm = window.Vue.createTextVNode, L6 = window.Vue.isRef, A6 = window.Vue.normalizeClass, Mm = window.Vue.createBlock, D6 = { class: "mw-ui-dialog__header" }, T6 = { class: "row ma-0 px-4 py-3" }, B6 = { class: "col shrink justify-center" }, P6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, F6 = { class: "mb-0" }, N6 = { class: "pa-4" }, M6 = window.Codex.CdxField, U6 = window.Codex.CdxRadio, I6 = window.Vuex.useStore, Bi = window.Vue.computed, R6 = window.Codex.CdxButton, z6 = window.Codex.CdxIcon, O6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = I6(), { target: s, PUBLISHING_TARGETS: a } = Yt(), r = Bi(() => o.state.translator.isAnon), l = ce(), { sourceSection: u } = te(), d = Bi(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), i = Bi(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), c = Bi(() => [
      {
        label: d.value,
        description: i.value,
        value: a.NEW_SECTION,
        disabled: !1
      },
      {
        label: l.i18n("cx-sx-publisher-sandbox-option-label"),
        description: l.i18n("cx-sx-publisher-sandbox-option-details"),
        value: a.SANDBOX,
        disabled: r.value
      }
    ]), g = () => n("update:active", !1);
    return (p, m) => {
      const h = b6("i18n");
      return dc(), Mm(Fn(St), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: m[1] || (m[1] = (f) => p.$emit("update:active", f)),
        onClose: g
      }, {
        header: No(() => [
          Mo("div", D6, [
            Mo("div", T6, [
              Mo("div", B6, [
                Ti(Fn(R6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": p.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: No(() => [
                    Ti(Fn(z6), { icon: Fn(Ph) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Mo("div", P6, [
                k6(Mo("h4", F6, null, 512), [
                  [h, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ti(Fn(Ri))
          ])
        ]),
        default: No(() => [
          Mo("div", N6, [
            Ti(Fn(M6), { "is-fieldset": "" }, {
              default: No(() => [
                (dc(!0), E6(V6, null, $6(c.value, (f, w) => (dc(), Mm(Fn(U6), {
                  key: "publish-options-radio-" + f.value,
                  modelValue: Fn(s),
                  "onUpdate:modelValue": [
                    m[0] || (m[0] = (_) => L6(s) ? s.value = _ : null),
                    g
                  ],
                  class: A6(w < c.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": f.value,
                  disabled: f.disabled,
                  name: "publish-options"
                }, {
                  description: No(() => [
                    Nm(Fm(f.description), 1)
                  ]),
                  default: No(() => [
                    Nm(Fm(f.label) + " ", 1)
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
const Bt = window.Vue.unref, no = window.Vue.createVNode, Um = window.Vue.resolveDirective, Im = window.Vue.withDirectives, Pi = window.Vue.openBlock, Rm = window.Vue.createElementBlock, j6 = window.Vue.createCommentVNode, zm = window.Vue.toDisplayString, gc = window.Vue.createElementVNode, Uo = window.Vue.withCtx, Om = window.Vue.createBlock, H6 = window.Vue.Fragment, q6 = window.Vue.normalizeClass, G6 = { class: "sx-publisher__review-info__content" }, X6 = { key: 0 }, W6 = ["textContent"], K6 = ["textContent"], Nn = window.Vue.computed, jm = window.Vue.ref, Y6 = window.Vue.watch, Hm = window.Codex.CdxButton, pc = window.Codex.CdxIcon, J6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = jm(0), o = jm(null);
    Y6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const w = h.querySelector("a");
        w && w.setAttribute("target", "_blank");
      }
    });
    const s = Nn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Nn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = Nn(() => {
      switch (a.value) {
        case "warning":
          return Th;
        case "error":
          return XS;
        default:
          return QS;
      }
    }), l = Nn(() => a.value === "default"), u = Nn(
      () => l.value ? "notice" : a.value
    ), d = Nn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = ce(), c = Nn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Nn(
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
      const w = Um("i18n"), _ = Um("i18n-html");
      return Pi(), Om(Bt(u1), {
        type: u.value,
        class: q6(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: l.value
      }, {
        icon: Uo(() => [
          no(Bt(pc), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Uo(() => [
          gc("div", G6, [
            a.value === "default" ? Im((Pi(), Rm("h5", X6, null, 512)), [
              [w, void 0, "cx-sx-publisher-review-info"]
            ]) : (Pi(), Rm(H6, { key: 1 }, [
              gc("h5", {
                textContent: zm(g.value)
              }, null, 8, W6),
              gc("p", {
                textContent: zm(c.value)
              }, null, 8, K6),
              no(Bt(N), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Uo(() => [
                  Im(no(Bt(k), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Pi(), Om(Bt(k), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Uo(() => [
                      no(Bt(Hm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: Uo(() => [
                          no(Bt(pc), { icon: Bt(nu) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      no(Bt(Hm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: Uo(() => [
                          no(Bt(pc), { icon: Bt(ma) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : j6("", !0)
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
}, Q6 = (e) => {
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
}, Z6 = window.Vuex.useStore, e9 = window.Vue.computed, t9 = () => {
  const e = Z6(), { currentTranslation: t } = Mt(), { currentMTProvider: n, previousRoute: o } = Ae(e), { currentTargetPage: s } = ut(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = B(), { sourceSection: d } = te(), i = yt(), c = e9(() => {
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
}, n9 = window.Vue.computed, qm = window.Vue.ref, o9 = window.Vuex.useStore, s9 = () => {
  const e = o9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = te(), r = Rf(), { sectionSuggestion: l } = We(), u = n9(
    () => {
      var S, x;
      return (x = l.value) == null ? void 0 : x.presentSections[(S = s.value) == null ? void 0 : S.sourceSectionTitleForPublishing];
    }
  ), { target: d, PUBLISHING_TARGETS: i } = Yt(), c = qm(!1), g = qm("pending"), p = () => c.value = !1, m = fu(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: w
  } = t9(), _ = (S, x) => b(void 0, null, function* () {
    h();
    const A = yield m();
    if (A instanceof jo)
      return w(), { publishFeedbackMessage: A, targetUrl: null };
    const C = A, U = a.value, E = {
      html: Q6(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: U,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      isSandbox: d.value === i.SANDBOX,
      sectionTranslationId: C
    };
    u.value && d.value === i.EXPAND && (E.existingSectionTitle = u.value), S && (E.captchaId = S, E.captchaWord = x);
    const D = yield vt.publishTranslation(
      E
    );
    return D.publishFeedbackMessage === null ? f(D.pageId, D.revisionId) : w(), D;
  });
  return {
    closePublishDialog: p,
    doPublish: (S = null, x = null) => b(void 0, null, function* () {
      g.value = "pending", c.value = !0;
      let A;
      try {
        A = yield _(
          x == null ? void 0 : x.id,
          S
        );
      } catch (C) {
        if (C instanceof Go)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw C;
      }
      return A;
    }),
    isPublishDialogActive: c,
    publishStatus: g
  };
}, a9 = window.Vue.computed, i9 = () => {
  const e = Xe(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = Sn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = a9(
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
}, r9 = () => {
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
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new jo({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, l9 = window.Vue.ref, c9 = window.Vue.computed, u9 = () => {
  const e = r9(), t = l9([]), n = c9(
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
}, d9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Yt(), { currentSourcePage: n } = ut(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), { sourceSection: a, targetPageTitleForPublishing: r } = te();
  return (l) => b(void 0, null, function* () {
    const u = r.value, d = n.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield Xi.addWikibaseLink(
          o.value,
          s.value,
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
}, Gm = window.Vue.ref, g9 = () => {
  const e = Gm(!1), t = Gm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const _e = window.Vue.unref, Ye = window.Vue.createVNode, p9 = window.Vue.resolveDirective, Gs = window.Vue.createElementVNode, m9 = window.Vue.withDirectives, Io = window.Vue.withCtx, h9 = window.Vue.openBlock, f9 = window.Vue.createElementBlock, w9 = { class: "sx-publisher" }, _9 = { class: "sx-publisher__publish-panel pa-4" }, v9 = { class: "mb-2" }, S9 = ["innerHTML"], y9 = { class: "sx-publisher__section-preview pa-5" }, x9 = ["innerHTML"], Xm = window.Vue.computed, C9 = window.Vue.onMounted, b9 = window.Vue.ref, k9 = window.Vue.watch, Wm = window.Codex.CdxButton, Km = window.Codex.CdxIcon, $9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = te(), n = Xm(() => {
      var E;
      return (E = t.value) == null ? void 0 : E.title;
    }), o = ce(), { target: s, PUBLISHING_TARGETS: a } = Yt(), r = Xm(() => s.value === a.SANDBOX ? o.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : t.value.isLeadSection ? o.i18n("cx-sx-publisher-publish-panel-lead-section-result") : o.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: l,
      captchaDialogOn: u,
      handleCaptchaError: d,
      onCaptchaDialogClose: i
    } = g9(), {
      publishFeedbackMessages: c,
      isPublishingDisabled: g,
      addPublishFeedbackMessage: p,
      clearPublishFeedbackMessages: m,
      initializePublishFeedbackMessages: h
    } = u9(), f = d9(), { doPublish: w, isPublishDialogActive: _, publishStatus: y, closePublishDialog: S } = s9(), x = (E = null) => b(this, null, function* () {
      if (g.value)
        return;
      const D = yield w(E, l.value);
      if (!D)
        return;
      const { publishFeedbackMessage: R, targetUrl: q } = D;
      if (d(R)) {
        S();
        return;
      } else
        R && p(R);
      y.value = g.value ? "failure" : "success", setTimeout(() => {
        if (g.value) {
          S();
          return;
        }
        f(q);
      }, 1e3);
    });
    C9(() => h());
    const A = i9(), C = b9(!1), U = () => C.value = !0;
    return k9(C, (E) => {
      E || (m(), h());
    }), (E, D) => {
      const R = p9("i18n");
      return h9(), f9("section", w9, [
        Ye(e6, {
          "is-publishing-disabled": _e(g),
          onPublishTranslation: x
        }, null, 8, ["is-publishing-disabled"]),
        Gs("div", _9, [
          m9(Gs("h5", v9, null, 512), [
            [R, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Gs("h6", {
            class: "mb-2",
            innerHTML: r.value
          }, null, 8, S9),
          Ye(_e(N), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Io(() => [
              Ye(_e(k), { shrink: "" }, {
                default: Io(() => [
                  Ye(_e(Wm), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: U
                  }, {
                    default: Io(() => [
                      Ye(_e(Km), { icon: _e(ly) }, null, 8, ["icon"])
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
        Ye(J6, { "publish-feedback-messages": _e(c) }, null, 8, ["publish-feedback-messages"]),
        Gs("section", y9, [
          Ye(_e(N), { class: "pb-5 ma-0" }, {
            default: Io(() => [
              Ye(_e(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: n.value
              }, null, 8, ["innerHTML"]),
              Ye(_e(k), { shrink: "" }, {
                default: Io(() => [
                  Ye(_e(Wm), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: _e(A)
                  }, {
                    default: Io(() => [
                      Ye(_e(Km), { icon: _e(Zc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Gs("div", {
            innerHTML: _e(t).translationHtml
          }, null, 8, x9)
        ]),
        Ye(O6, {
          active: C.value,
          "onUpdate:active": D[0] || (D[0] = (q) => C.value = q)
        }, null, 8, ["active"]),
        Ye(C6, {
          active: _e(u),
          "captcha-details": _e(l),
          onClose: _e(i),
          onPublish: D[1] || (D[1] = (q) => x(q))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ye(c6, {
          active: _e(_),
          status: _e(y)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const V9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: $9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, E9 = window.Vue.resolveComponent, L9 = window.Vue.createVNode, A9 = window.Vue.normalizeClass, D9 = window.Vue.openBlock, T9 = window.Vue.createElementBlock;
function B9(e, t, n, o, s, a) {
  const r = E9("sx-publisher");
  return D9(), T9("main", {
    class: A9(["sx-publisher-view", a.classes])
  }, [
    L9(r)
  ], 2);
}
const P9 = /* @__PURE__ */ oe(V9, [["render", B9]]);
const Pt = window.Vue.unref, Mn = window.Vue.createVNode, oo = window.Vue.withCtx, mc = window.Vue.toDisplayString, hc = window.Vue.createElementVNode, F9 = window.Vue.openBlock, N9 = window.Vue.createBlock, M9 = ["textContent"], U9 = ["textContent"], I9 = ["textContent"], Hf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Wo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (F9(), N9(Pt(N), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Pt(z.getDir)(e.suggestion.language)
    }, {
      default: oo(() => [
        Mn(Pt(k), { shrink: "" }, {
          default: oo(() => [
            Mn(Pt(Mc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Mn(Pt(k), { class: "ms-4" }, {
          default: oo(() => [
            Mn(Pt(N), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: oo(() => [
                Mn(Pt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: oo(() => [
                    hc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: mc(e.suggestion.title)
                    }, null, 8, M9)
                  ]),
                  _: 1
                }),
                Mn(Pt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: oo(() => [
                    hc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: mc(e.suggestion.description)
                    }, null, 8, U9)
                  ]),
                  _: 1
                }),
                Mn(Pt(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: oo(() => [
                    Mn(Pt(qe), {
                      icon: Pt(E0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    hc("small", {
                      textContent: mc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, I9)
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
const Xs = window.Vue.unref, Ws = window.Vue.openBlock, fc = window.Vue.createBlock, R9 = window.Vue.createCommentVNode, z9 = window.Vue.resolveDirective, O9 = window.Vue.withDirectives, Ym = window.Vue.createElementBlock, j9 = window.Vue.renderList, H9 = window.Vue.Fragment, q9 = window.Vue.normalizeClass, G9 = window.Vue.withCtx, X9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Jm = window.Vue.computed, W9 = window.Vue.ref, K9 = {
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
    const { sourceLanguageURLParameter: t } = B(), n = Jm(() => z.getAutonym(t.value)), o = e, s = W9(null), a = (c) => s.value = c, r = () => s.value = null, l = (c) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === c.title && !s.value || s.value === c.pageId;
    }, u = Jm(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = cu(
      t,
      u
    );
    return (c, g) => {
      const p = z9("i18n");
      return Ws(), fc(Xs(Qe), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: G9(() => [
          Xs(d) ? (Ws(), fc(Xs(lt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Xs(i).length === 0 ? O9((Ws(), Ym("p", X9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : R9("", !0),
          (Ws(!0), Ym(H9, null, j9(Xs(i), (m) => (Ws(), fc(Hf, {
            key: m.pageId,
            suggestion: m,
            class: q9({
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
const Y9 = window.Vue.toDisplayString, J9 = window.Vue.createElementVNode, Q9 = window.Vue.renderList, Z9 = window.Vue.Fragment, wc = window.Vue.openBlock, eB = window.Vue.createElementBlock, tB = window.Vue.normalizeClass, Qm = window.Vue.createBlock, nB = window.Vue.unref, Zm = window.Vue.withCtx, oB = ["textContent"], sB = window.Vue.ref, eh = {
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
    const n = e, o = sB(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, u) => (wc(), Qm(nB(Qe), { class: "sx-article-search__suggestions pa-0" }, {
      header: Zm(() => [
        J9("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: Y9(e.cardTitle)
        }, null, 8, oB)
      ]),
      default: Zm(() => [
        (wc(!0), eB(Z9, null, Q9(e.suggestions, (d) => (wc(), Qm(Hf, {
          key: d.pageId,
          suggestion: d,
          class: tB({
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
}, aB = window.Vue.computed, iB = (e, t) => aB(() => {
  const o = [], s = {
    value: "other",
    props: {
      icon: T0,
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
}), rB = window.Vue.computed, lB = () => {
  const { supportedSourceLanguageCodes: e } = da(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return { getSuggestedSourceLanguages: (s) => rB(() => {
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
const cB = window.Vue.resolveDirective, uB = window.Vue.createElementVNode, _c = window.Vue.withDirectives, le = window.Vue.unref, Ks = window.Vue.withCtx, Gt = window.Vue.createVNode, Ys = window.Vue.openBlock, th = window.Vue.createBlock, dB = window.Vue.createCommentVNode, vc = window.Vue.createElementBlock, gB = window.Vue.Fragment, pB = window.Vue.vShow, Js = window.Vue.withModifiers, Qs = window.Vue.withKeys, mB = ["onKeydown"], hB = { class: "mb-0" }, fB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, Ro = window.Vue.ref, wB = window.Vue.onMounted, _B = window.Vue.onBeforeUnmount, Zs = window.Vue.computed, nh = window.Vue.watch, vB = window.Vue.inject, SB = window.Vuex.useStore, yB = window.Codex.CdxButton, xB = window.Codex.CdxIcon, CB = window.Codex.CdxSearchInput, bB = 3, kB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Ro(""), n = Ro(!1), o = Ro(null), s = Ro(!1), a = Ro([]), r = SB(), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u
    } = B(), { supportedSourceLanguageCodes: d } = da(), { searchResultsSlice: i } = cu(l, t), { getSuggestedSourceLanguages: c } = lB(), g = c(a), p = iB(
      l,
      g
    ), m = Xe(), { fetchAllTranslations: h } = Qo();
    wB(() => b(this, null, function* () {
      var P;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("cxPreviousLanguages"))
        ), y();
      } catch (I) {
      }
      (P = o.value) == null || P.focus(), window.addEventListener("beforeunload", S);
    })), _B(() => {
      window.removeEventListener("beforeunload", S), S();
    });
    const f = () => {
      m.push({ name: "dashboard" });
    }, w = Oh(), _ = (P) => {
      w(P, u.value), a.value.includes(P) || y();
    }, y = () => {
      a.value = [
        l.value,
        ...a.value.filter((P) => P !== l.value)
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
      _(P);
    };
    nh(
      l,
      () => {
        var P;
        r.dispatch("mediawiki/fetchNearbyPages"), (P = o.value) == null || P.focus();
      },
      { immediate: !0 }
    );
    const A = yt();
    nh(t, () => {
      n.value || (n.value = !0, A({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: u.value
      }));
    });
    const C = () => {
      s.value = !1;
    }, U = (P) => {
      s.value = !1, x(P);
    }, { fetchPreviousEditsInSource: E, previousEditsInSource: D } = Lh(), R = Ro([]);
    (() => E().then(() => D.value.length > 0 ? ro.fetchPages(
      l.value,
      D.value
    ) : []).then((P) => {
      P = P.slice(0, bB), P = P.sort(
        (I, v) => D.value.indexOf(I.title) - D.value.indexOf(v.title)
      ), R.value = P;
    }))();
    const K = Zs(() => r.getters["mediawiki/getNearbyPages"]), be = vB("breakpoints"), ue = Zs(() => be.value.mobile), Ie = ha(), Be = Zs(
      () => R.value && R.value.length
    ), ke = Zs(
      () => K.value && K.value.length
    ), { next: De, prev: Re, keyboardNavigationContainer: Te, selectedItem: Y } = xf(t, i, R), M = (P) => Ie(
      P.title,
      l.value,
      u.value,
      G.value
    ), G = Zs(() => t.value ? "search_result" : Be.value ? "suggestion_recent_edit" : ke.value ? "suggestion_nearby" : "");
    return (P, I) => {
      const v = cB("i18n");
      return Ys(), vc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Te,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          I[5] || (I[5] = Qs(Js((...V) => le(De) && le(De)(...V), ["stop", "prevent"]), ["tab"])),
          I[6] || (I[6] = Qs(Js((...V) => le(De) && le(De)(...V), ["stop", "prevent"]), ["down"])),
          I[7] || (I[7] = Qs(Js((...V) => le(Re) && le(Re)(...V), ["stop", "prevent"]), ["up"])),
          Qs(Js(f, ["stop", "prevent"]), ["esc"]),
          I[8] || (I[8] = Qs(Js((V) => M(le(Y)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Gt(le(N), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ks(() => [
            Gt(le(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ks(() => [
                _c(uB("h5", hB, null, 512), [
                  [v, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Gt(le(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ks(() => [
                Gt(le(yB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": P.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Ks(() => [
                    Gt(le(xB), { icon: le(Jo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Gt(le(CB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": I[0] || (I[0] = (V) => t.value = V),
          class: "sx-article-search__search-input",
          placeholder: P.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Gt(le(ra), {
          class: "sx-article-search__language-button-group",
          items: le(p),
          active: le(l),
          onSelect: x
        }, null, 8, ["items", "active"]),
        t.value ? dB("", !0) : (Ys(), vc(gB, { key: 0 }, [
          Be.value ? (Ys(), th(eh, {
            key: 0,
            "card-title": P.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: R.value,
            "selected-item": le(Y),
            onSuggestionClicked: I[1] || (I[1] = (V) => M(V))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : ke.value ? (Ys(), th(eh, {
            key: 1,
            "card-title": P.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: K.value,
            onSuggestionClicked: I[2] || (I[2] = (V) => M(V))
          }, null, 8, ["card-title", "suggestions"])) : _c((Ys(), vc("p", fB, null, 512)), [
            [v, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        _c(Gt(K9, {
          "search-input": t.value,
          "selected-item": le(Y),
          onSuggestionClicked: I[3] || (I[3] = (V) => M(V))
        }, null, 8, ["search-input", "selected-item"]), [
          [pB, !!t.value]
        ]),
        Gt(le(St), {
          value: s.value,
          "onUpdate:value": I[4] || (I[4] = (V) => s.value = V),
          class: "sx-article-search-language-selector",
          fullscreen: ue.value,
          header: ue.value,
          title: P.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: C
        }, {
          default: Ks(() => [
            Gt(le(Cf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: le(d),
              suggestions: le(g),
              placeholder: P.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: U,
              onClose: C
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, mB);
    };
  }
};
const $B = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: kB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, VB = window.Vue.resolveComponent, EB = window.Vue.createVNode, LB = window.Vue.normalizeClass, AB = window.Vue.openBlock, DB = window.Vue.createElementBlock;
function TB(e, t, n, o, s, a) {
  const r = VB("sx-article-search");
  return AB(), DB("main", {
    class: LB(["sx-article-search-view", a.classes])
  }, [
    EB(r)
  ], 2);
}
const BB = /* @__PURE__ */ oe($B, [["render", TB]]), PB = () => {
  const e = ha(), t = pu(), { logDashboardOpenEvent: n } = Lf(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = B();
  return () => b(void 0, null, function* () {
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
}, FB = window.Vuex.useStore, NB = [
  {
    path: "",
    name: "dashboard",
    component: Yg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: BB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: H4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: s3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: f5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: uT,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: BD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: KT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: P9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Yg,
    meta: { workflowStep: 0 }
  }
], wu = YC({
  history: Kx(),
  routes: NB
}), Sc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, MB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
wu.beforeEach((e, t, n) => {
  const o = FB();
  if (mw.user.isAnon() || lh.assertUser().catch((i) => {
    i instanceof Go && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = PB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: u
  } = B();
  if (!!(a.value && r.value && l.value)) {
    if (MB(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Sc(e.name, c, n);
    } else
      e.name === "sx-translation-confirmer" && s(), Sc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), Sc(e.name, "dashboard", n);
});
wu.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const UB = window.Vue.createApp, IB = mw.config.get("wgUserLanguage"), RB = "en", zB = mw.messages.values || {}, ts = UB(Iy);
ts.use(wu);
ts.use(wx);
ts.use(i_);
ts.use(a_);
const OB = M_({
  locale: IB,
  finalFallback: RB,
  messages: zB,
  wikilinks: !0
});
ts.use(OB);
ts.mount("#contenttranslation");
