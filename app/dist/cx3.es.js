var Ff = Object.defineProperty, Mf = Object.defineProperties;
var Nf = Object.getOwnPropertyDescriptors;
var du = Object.getOwnPropertySymbols;
var Uf = Object.prototype.hasOwnProperty, If = Object.prototype.propertyIsEnumerable;
var gu = (e, t, n) => t in e ? Ff(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fe = (e, t) => {
  for (var n in t || (t = {}))
    Uf.call(t, n) && gu(e, n, t[n]);
  if (du)
    for (var n of du(t))
      If.call(t, n) && gu(e, n, t[n]);
  return e;
}, at = (e, t) => Mf(e, Nf(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (u) => {
    try {
      c(n.next(u));
    } catch (g) {
      s(g);
    }
  }, i = (u) => {
    try {
      c(n.throw(u));
    } catch (g) {
      s(g);
    }
  }, c = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(a, i);
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
    CdxMenu: i,
    CdxMessage: c
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: i,
    CdxMessage: c
  };
}
const ne = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Rf = {
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
}, zf = window.Vue.toDisplayString, ji = window.Vue.openBlock, Hi = window.Vue.createElementBlock, Of = window.Vue.createCommentVNode, pu = window.Vue.createElementVNode, jf = window.Vue.normalizeClass, Hf = ["width", "height", "aria-labelledby"], qf = ["id"], Gf = ["fill"], Xf = ["d"];
function Wf(e, t, n, o, s, a) {
  return ji(), Hi("span", {
    class: jf(["mw-ui-icon notranslate", a.classes])
  }, [
    (ji(), Hi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (ji(), Hi("title", {
        key: 0,
        id: n.iconName
      }, zf(n.iconName), 9, qf)) : Of("", !0),
      pu("g", { fill: n.iconColor }, [
        pu("path", { d: a.iconImagePath }, null, 8, Xf)
      ], 8, Gf)
    ], 8, Hf))
  ], 2);
}
const Re = /* @__PURE__ */ ne(Rf, [["render", Wf]]);
const Kf = {
  name: "MwButton",
  components: {
    MwIcon: Re
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
}, Yf = window.Vue.renderSlot, Jf = window.Vue.resolveComponent, mu = window.Vue.normalizeClass, ia = window.Vue.openBlock, qi = window.Vue.createBlock, Gi = window.Vue.createCommentVNode, Qf = window.Vue.toDisplayString, Zf = window.Vue.createElementBlock, ew = window.Vue.toHandlerKey, tw = window.Vue.withModifiers, nw = window.Vue.mergeProps, ow = window.Vue.createElementVNode, sw = window.Vue.resolveDynamicComponent, aw = window.Vue.withCtx, iw = { class: "mw-ui-button__content" }, rw = ["textContent"];
function lw(e, t, n, o, s, a) {
  const i = Jf("mw-icon");
  return ia(), qi(sw(a.component), {
    class: mu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: aw(() => [
      Yf(e.$slots, "default", {}, () => [
        ow("span", iw, [
          n.icon ? (ia(), qi(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: mu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Gi("", !0),
          !a.isIcon && n.label ? (ia(), Zf("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Qf(n.label)
          }, null, 8, rw)) : Gi("", !0),
          n.indicator ? (ia(), qi(i, nw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [ew(a.indicatorClickEvent)]: t[0] || (t[0] = tw((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Gi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ne = /* @__PURE__ */ ne(Kf, [["render", lw]]);
const cw = {
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
}, uw = window.Vue.renderList, dw = window.Vue.Fragment, Xi = window.Vue.openBlock, hu = window.Vue.createElementBlock, gw = window.Vue.resolveComponent, pw = window.Vue.withModifiers, hw = window.Vue.mergeProps, fw = window.Vue.createBlock, ww = { class: "row mw-ui-button-group ma-0 pa-0" };
function _w(e, t, n, o, s, a) {
  const i = gw("mw-button");
  return Xi(), hu("div", ww, [
    (Xi(!0), hu(dw, null, uw(n.items, (c) => (Xi(), fw(i, hw({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: pw((u) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const qs = /* @__PURE__ */ ne(cw, [["render", _w]]);
const vw = {
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
}, fu = window.Vue.renderSlot, Sw = window.Vue.toDisplayString, wu = window.Vue.openBlock, _u = window.Vue.createElementBlock, yw = window.Vue.createCommentVNode, Cw = window.Vue.createElementVNode, bw = { class: "mw-ui-card" }, kw = ["textContent"], xw = { class: "mw-ui-card__content" };
function $w(e, t, n, o, s, a) {
  return wu(), _u("div", bw, [
    fu(e.$slots, "header", {}, () => [
      n.title ? (wu(), _u("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Sw(n.title)
      }, null, 8, kw)) : yw("", !0)
    ]),
    Cw("div", xw, [
      fu(e.$slots, "default")
    ])
  ]);
}
const Ze = /* @__PURE__ */ ne(vw, [["render", $w]]);
const Vw = {}, Ew = window.Vue.openBlock, Lw = window.Vue.createElementBlock, Aw = { class: "mw-ui-divider row" };
function Dw(e, t) {
  return Ew(), Lw("div", Aw);
}
const Ci = /* @__PURE__ */ ne(Vw, [["render", Dw]]);
const Tw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Bw = window.Vue.renderSlot, Pw = window.Vue.resolveDynamicComponent, Fw = window.Vue.withCtx, Mw = window.Vue.openBlock, Nw = window.Vue.createBlock;
function Uw(e, t, n, o, s, a) {
  return Mw(), Nw(Pw(n.tag), { class: "mw-grid container" }, {
    default: Fw(() => [
      Bw(e.$slots, "default")
    ]),
    _: 3
  });
}
const Iw = /* @__PURE__ */ ne(Tw, [["render", Uw]]), Rw = {
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
}, zw = window.Vue.renderSlot, Ow = window.Vue.resolveDynamicComponent, jw = window.Vue.normalizeClass, Hw = window.Vue.withCtx, qw = window.Vue.openBlock, Gw = window.Vue.createBlock;
function Xw(e, t, n, o, s, a) {
  return qw(), Gw(Ow(n.tag), {
    class: jw(a.classes)
  }, {
    default: Hw(() => [
      zw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ ne(Rw, [["render", Xw]]), rc = ["mobile", "tablet", "desktop", "desktop-wide"], Ww = rc.reduce(
  (e, t) => at(fe({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Kw = {
  name: "MwCol",
  props: at(fe({}, Ww), {
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
      for (let n = 0; n < rc.length; n++) {
        let o = rc[n], s = this.$props[o];
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
}, Yw = window.Vue.renderSlot, Jw = window.Vue.resolveDynamicComponent, Qw = window.Vue.normalizeClass, Zw = window.Vue.withCtx, e0 = window.Vue.openBlock, t0 = window.Vue.createBlock;
function n0(e, t, n, o, s, a) {
  return e0(), t0(Jw(n.tag), {
    class: Qw(a.classes)
  }, {
    default: Zw(() => [
      Yw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ ne(Kw, [["render", n0]]), o0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", s0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", bi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", a0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, i0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Em = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", r0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", l0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Gs = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", c0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", u0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", d0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", vu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", g0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Lm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", p0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", m0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", h0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", f0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", w0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", _0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, wi = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, v0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Am = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, S0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Dm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", y0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Wi = window.Vue.computed, C0 = window.Vue.watch, b0 = window.Vue.ref, k0 = window.Vue.nextTick, x0 = {
  name: "MwDialog",
  components: {
    MwButton: Ne,
    MwRow: P,
    MwCol: C,
    MwDivider: Ci
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
    const n = b0(null), o = Wi(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Wi(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    C0(
      () => e.value,
      (u) => {
        u ? (i(), k0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Wi(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayClass: s,
      mwIconClose: Gs,
      root: n
    };
  }
}, Su = window.Vue.normalizeClass, Ki = window.Vue.createElementVNode, Yi = window.Vue.renderSlot, ra = window.Vue.resolveComponent, jo = window.Vue.createVNode, Ji = window.Vue.withCtx, yu = window.Vue.createCommentVNode, $0 = window.Vue.withKeys, Cu = window.Vue.openBlock, V0 = window.Vue.createElementBlock, E0 = window.Vue.Transition, L0 = window.Vue.normalizeStyle, A0 = window.Vue.createBlock, D0 = { class: "mw-ui-dialog__shell items-stretch" }, T0 = { class: "mw-ui-dialog__body" };
function B0(e, t, n, o, s, a) {
  const i = ra("mw-col"), c = ra("mw-button"), u = ra("mw-row"), g = ra("mw-divider");
  return Cu(), A0(E0, {
    name: "mw-ui-animation-fade",
    style: L0(o.cssVars)
  }, {
    default: Ji(() => [
      n.value ? (Cu(), V0("div", {
        key: 0,
        ref: "root",
        class: Su(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = $0((r) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Ki("div", {
          class: Su(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close())
        }, null, 2),
        Ki("div", D0, [
          n.header ? Yi(e.$slots, "header", { key: 0 }, () => [
            jo(u, { class: "mw-ui-dialog__header" }, {
              default: Ji(() => [
                jo(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                jo(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Ji(() => [
                    jo(c, {
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
            jo(g)
          ]) : yu("", !0),
          Ki("div", T0, [
            Yi(e.$slots, "default")
          ]),
          Yi(e.$slots, "footer")
        ])
      ], 34)) : yu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const ft = /* @__PURE__ */ ne(x0, [["render", B0]]);
const P0 = {
  name: "MwInput",
  components: {
    MwIcon: Re
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
      const t = fe({}, e.$attrs);
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
}, bu = window.Vue.renderSlot, F0 = window.Vue.resolveComponent, la = window.Vue.openBlock, Qi = window.Vue.createBlock, ku = window.Vue.createCommentVNode, M0 = window.Vue.resolveDynamicComponent, N0 = window.Vue.toDisplayString, U0 = window.Vue.mergeProps, I0 = window.Vue.withModifiers, R0 = window.Vue.createElementVNode, z0 = window.Vue.normalizeClass, O0 = window.Vue.createElementBlock, j0 = { class: "mw-ui-input__content" };
function H0(e, t, n, o, s, a) {
  const i = F0("mw-icon");
  return la(), O0("div", {
    class: z0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    R0("div", j0, [
      bu(e.$slots, "icon", {}, () => [
        n.icon ? (la(), Qi(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : ku("", !0)
      ]),
      (la(), Qi(M0(n.type === "textarea" ? n.type : "input"), U0({
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
        textContent: N0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      bu(e.$slots, "indicator", {}, () => [
        n.indicator ? (la(), Qi(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = I0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : ku("", !0)
      ])
    ])
  ], 2);
}
const lc = /* @__PURE__ */ ne(P0, [["render", H0]]);
const q0 = {
  name: "MwMessage",
  components: { MwCol: C, MwRow: P, MwIcon: Re, MwButton: Ne },
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
    mwIconClose: Gs,
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
      notice: _0,
      warning: Am,
      success: wi,
      error: v0
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
}, Zi = window.Vue.renderSlot, ca = window.Vue.resolveComponent, xu = window.Vue.createVNode, $u = window.Vue.withCtx, Vu = window.Vue.openBlock, Eu = window.Vue.createBlock, Lu = window.Vue.createCommentVNode, G0 = window.Vue.normalizeClass;
function X0(e, t, n, o, s, a) {
  const i = ca("mw-icon"), c = ca("mw-col"), u = ca("mw-button"), g = ca("mw-row");
  return e.shown ? (Vu(), Eu(g, {
    key: 0,
    class: G0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: $u(() => [
      Zi(e.$slots, "icon", {}, () => [
        xu(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      xu(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: $u(() => [
          Zi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Zi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Vu(), Eu(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Lu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Lu("", !0);
}
const W0 = /* @__PURE__ */ ne(q0, [["render", X0]]);
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
const K0 = {}, Y0 = window.Vue.createElementVNode, J0 = window.Vue.openBlock, Q0 = window.Vue.createElementBlock, Z0 = { class: "mw-ui-spinner" }, e1 = /* @__PURE__ */ Y0("div", { class: "mw-ui-spinner__bounce" }, null, -1), t1 = [
  e1
];
function n1(e, t) {
  return J0(), Q0("div", Z0, t1);
}
const et = /* @__PURE__ */ ne(K0, [["render", n1]]), pt = {
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
const o1 = window.Vue.computed, s1 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Re },
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
      default: Dm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: pt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: pt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = o1(() => {
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
}, Au = window.Vue.normalizeStyle, Du = window.Vue.openBlock, a1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const i1 = window.Vue.resolveComponent, r1 = window.Vue.createBlock;
function l1(e, t, n, o, s, a) {
  const i = i1("mw-ui-icon");
  return n.thumbnail ? (Du(), a1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Au(o.style)
  }, null, 4)) : (Du(), r1(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Au(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const $c = /* @__PURE__ */ ne(s1, [["render", l1]]);
const c1 = {
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
}, u1 = window.Vue.vModelRadio, fi = window.Vue.createElementVNode, d1 = window.Vue.withDirectives, g1 = window.Vue.toDisplayString, p1 = window.Vue.resolveComponent, m1 = window.Vue.normalizeClass, h1 = window.Vue.withCtx, f1 = window.Vue.openBlock, w1 = window.Vue.createBlock, _1 = { class: "mw-ui-radio__controls" }, v1 = ["id", "disabled", "name", "value"], S1 = /* @__PURE__ */ fi("span", { class: "mw-ui-radio__controls__icon" }, null, -1), y1 = ["for", "textContent"];
function C1(e, t, n, o, s, a) {
  const i = p1("mw-row");
  return f1(), w1(i, {
    class: m1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: h1(() => [
      fi("div", _1, [
        d1(fi("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, v1), [
          [u1, a.inputModel]
        ]),
        S1
      ]),
      fi("label", {
        for: n.id,
        class: "ps-2",
        textContent: g1(n.label)
      }, null, 8, y1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const cc = /* @__PURE__ */ ne(c1, [["render", C1]]), Tu = window.Vue.h, b1 = {
  name: "MwRadioGroup",
  components: { MwRadio: cc },
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
      (o) => Tu(cc, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Tu("div", { class: "mw-ui-radio-group" }, n);
  }
};
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
}, Bu = window.Vue.normalizeClass, Pu = window.Vue.normalizeStyle, x1 = window.Vue.createElementVNode, $1 = window.Vue.openBlock, V1 = window.Vue.createElementBlock, E1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function L1(e, t, n, o, s, a) {
  return $1(), V1("div", {
    class: Bu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Pu(a.containerStyles)
  }, [
    x1("div", {
      class: Bu(["mw-progress-bar__bar", a.barClass]),
      style: Pu(a.barStyles)
    }, null, 6)
  ], 14, E1);
}
const Tm = /* @__PURE__ */ ne(k1, [["render", L1]]), A1 = (e, t, n, o) => (s) => {
  const a = s.clientY, i = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), c = (g) => {
    o.value = !1;
    let r = Math.min(
      i + g.clientY - a,
      e.value
    );
    r = Math.max(r, t.value), n.value.style.height = r + "px";
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
}, D1 = (e, t, n, o) => ({ initiateDrag: A1(
  e,
  t,
  n,
  o
) }), T1 = window.Vue.ref, Fu = window.Vue.computed, B1 = (e, t, n, o) => {
  const s = T1(0), a = Fu(
    () => t.value > e.value
  ), i = Fu(
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
    isScrolledToEnd: i,
    scrollToStepByIndex: c,
    scrollable: a,
    scrollIndex: s
  };
};
const ua = window.Vue.ref, P1 = window.Vue.onMounted, Mu = window.Vue.computed, F1 = window.Vue.nextTick, M1 = {
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
    const t = ua(!0), n = ua(null), o = Mu(
      () => Math.min(e.minHeight, s.value)
    ), s = ua(1), { initiateDrag: a } = D1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: c,
      scrollIndex: u,
      scrollToStepByIndex: g,
      handleArrowUpClick: r
    } = B1(o, s, n, t), l = () => g(u.value + 1), d = ua(null), p = Mu(() => ({
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
    return P1(() => b(this, null, function* () {
      var f;
      yield F1(), s.value = n.value.scrollHeight, (f = d.value) == null || f.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", m);
    })), {
      contentRef: n,
      cssVars: p,
      dragIndicatorRef: d,
      handleArrowUpClick: r,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: S0,
      mwIconExpand: r0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: u,
      scrollToNextStep: l
    };
  }
}, N1 = window.Vue.renderSlot, U1 = window.Vue.normalizeClass, da = window.Vue.createElementVNode, I1 = window.Vue.resolveComponent, R1 = window.Vue.createVNode, er = window.Vue.openBlock, z1 = window.Vue.createBlock, Nu = window.Vue.createCommentVNode, Uu = window.Vue.createElementBlock, O1 = window.Vue.normalizeStyle, j1 = { class: "mw-ui-expandable-content__container" }, H1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, q1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function G1(e, t, n, o, s, a) {
  const i = I1("mw-button");
  return er(), Uu("div", {
    class: "mw-ui-expandable-content",
    style: O1(o.cssVars)
  }, [
    da("div", j1, [
      da("div", {
        ref: "contentRef",
        class: U1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        N1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (er(), Uu("div", H1, [
        R1(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (er(), z1(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Nu("", !0)
      ])) : Nu("", !0)
    ]),
    da("div", q1, [
      da("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const X1 = /* @__PURE__ */ ne(M1, [["render", G1]]);
const ga = window.Vue.computed, W1 = {
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
      default: pt.blue600
    },
    inactiveColor: {
      type: String,
      default: pt.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = ga(() => e.size / 2 * 0.9), n = ga(() => Math.PI * (t.value * 2)), o = ga(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ga(() => ({
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
}, Iu = window.Vue.createElementVNode, Ru = window.Vue.normalizeStyle, K1 = window.Vue.openBlock, Y1 = window.Vue.createElementBlock, J1 = ["width", "height", "viewport"], Q1 = ["r", "cx", "cy", "stroke-dasharray"], Z1 = ["r", "cx", "cy", "stroke-dasharray"];
function e_(e, t, n, o, s, a) {
  return K1(), Y1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Ru(o.cssVars)
  }, [
    Iu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Q1),
    Iu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Ru({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Z1)
  ], 12, J1);
}
const t_ = /* @__PURE__ */ ne(W1, [["render", e_]]), n_ = window.Vue.ref, un = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, fn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${un.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${un.tablet}px) and (max-width: ${un.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${un.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${un.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${un["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${un.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${un["desktop-wide"]}px)`
}, tr = {
  mobile: () => matchMedia(fn.mobile).matches,
  tablet: () => matchMedia(fn.tablet).matches,
  desktop: () => matchMedia(fn.desktop).matches,
  desktopwide: () => matchMedia(fn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(fn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(fn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(fn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(fn["desktop-and-down"]).matches
}, o_ = (e) => {
  const t = Object.values(un);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, s_ = {
  install: (e) => {
    const t = n_({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in tr)
        tr.hasOwnProperty(s) && (t.value[s] = tr[s]());
      t.value.nextBreakpoint = o_(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = at(fe({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, a_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = at(fe({}, e.config.globalProperties.$mwui || {}), {
      colors: pt
    }), e.provide("colors", pt);
  }
};
class Po extends Error {
}
const i_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Po();
}), Bm = { assertUser: i_ };
const r_ = window.Vue.resolveDirective, Ho = window.Vue.createElementVNode, zu = window.Vue.withDirectives, l_ = window.Vue.toDisplayString, c_ = window.Vue.unref, Ou = window.Vue.withCtx, u_ = window.Vue.openBlock, d_ = window.Vue.createBlock, g_ = window.Vue.createCommentVNode, p_ = { class: "pa-4 sx-login-dialog__header" }, m_ = { class: "sx-login-dialog__body px-6 pb-4" }, h_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, f_ = ["href"], w_ = window.Vue.computed, __ = window.Vue.ref, v_ = window.Vuex.useStore, S_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = v_(), n = w_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = __(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = r_("i18n");
      return n.value ? (u_(), d_(c_(ft), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Ou(() => [
          Ho("div", p_, [
            zu(Ho("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Ou(() => [
          zu(Ho("div", m_, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          Ho("div", h_, [
            Ho("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, l_(a.$i18n("cx-sx-login-dialog-button-label")), 9, f_)
          ])
        ]),
        _: 1
      })) : g_("", !0);
    };
  }
}, W = new mw.cx.SiteMapper(), Pm = mw.util.getUrl, y_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, to = !mw.config.get("wgMFMode");
class ki {
  /**
   * @param {number} sectionTranslationId
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
    lastUpdatedTimestamp: i,
    pageRevision: c,
    status: u,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = c, this.status = u, this.targetTitle = g;
  }
}
const pa = "original", ma = "empty", C_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class te {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      pa,
      ma
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return C_[t] || t;
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
    return pa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return ma;
  }
  static isUserMTProvider(t) {
    return [pa, ma].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === ma ? "blank" : t === pa ? "source" : t.toLowerCase();
  }
}
class Pn {
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
    selected: i = !1
  } = {}) {
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = at(fe({}, a), {
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [te.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [te.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[te.ORIGINAL_TEXT_PROVIDER_KEY];
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
const ju = (e) => {
  var n;
  const t = _i(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, _i = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Zn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Fm = (e) => {
  const t = _i(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = b_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, b_ = (e) => {
  let t = e, n = "", o = !1, s = 0, a = 0;
  for (; t.length > 0; ) {
    const i = t.match(
      /(?:\[\[)|(?:\]\])|(?:\{\{)|(?:\}\})|\|+|<\/?nowiki>|<nowiki\s*\/>/
    );
    if (!i) {
      n += t;
      break;
    }
    if (n += t.slice(0, i.index), t = t.slice(i.index + i[0].length), o)
      i[0] === "</nowiki>" && (o = !1), n += i[0];
    else {
      let c = !0;
      i[0] === "<nowiki>" ? (o = !0, c = !1) : i[0] === "</nowiki>" || i[0].match(/<nowiki\s*\/>/) ? c = !1 : i[0].match(/(?:\[\[)/) ? (a++, c = !1) : i[0].match(/(?:\]\])/) ? a > 0 && (a--, c = !1) : i[0].match(/(?:\{\{)/) ? (s++, c = !1) : i[0].match(/(?:\}\})/) ? s > 0 && (s--, c = !1) : i[0].match(/\|+/) && (s > 0 || a > 0) && (c = !1), c ? n += "<nowiki>" + i[0] + "</nowiki>" : n += i[0];
    }
  }
  return n;
}, Mm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Nm = (e) => {
  const t = Mm(e);
  return t == null ? void 0 : t.targetExists;
};
class nr {
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
class Qe {
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
      (a) => Zn(a)
    );
    s && Nm(s) && (this.blockTemplateAdaptationInfo[t] = Mm(s));
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
      (t) => Zn(t)
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
    const t = _i(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ju(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Zn(o));
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
    return n && ju(n) || "";
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
    const o = _i(n);
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
      (a) => Zn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new nr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new nr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new nr({
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
    if (!t || te.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => Zn(s)
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
        const i = this.getSentenceById(a.dataset.segmentid);
        if (i.isTranslated) {
          a.innerHTML = i.mtProposedTranslationUsed;
          return;
        }
        a.parentNode.removeChild(a);
      });
    }
    return n.setAttribute("data-mw-cx-source", t), n.outerHTML;
  }
}
const k_ = [
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
], x_ = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = Hu(e, n), a = c = Hu(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, Hu = function(e, t) {
  return e ? k_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Vc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), $_ = Vc - 10, V_ = [
  { status: "failure", value: 100 - Vc },
  { status: "warning", value: 100 - $_ },
  { status: "success", value: 100 }
], Um = (e, t, n) => {
  const o = qu(e).textContent, s = qu(t).textContent, a = 100 - 100 * x_(s, o, n);
  return Math.ceil(a);
}, E_ = (e) => V_.find((t) => e <= t.value).status, L_ = (e, t) => Um(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), A_ = () => (100 - Vc) / 100, qu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Gt = {
  calculateScore: Um,
  getScoreStatus: E_,
  getMTScoreForPageSection: L_,
  getMtModificationThreshold: A_
}, ha = "__LEAD_SECTION__";
class uc {
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
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [te.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [te.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return ha;
  }
  static isSectionLead(t) {
    return !t || t === ha;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[te.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[te.ORIGINAL_TEXT_PROVIDER_KEY];
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
      (i) => i.id === a.targetSectionId
    );
    this.subSections.forEach((a) => {
      const i = s(a);
      let c = "";
      i && (c = i.innerHTML), a.editedTranslation = c;
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
    return n instanceof Qe ? n.transclusionNode.outerHTML : n instanceof Pn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Qe ? t.blockTemplateSelected = !1 : t instanceof Pn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Qe ? n.blockTemplateSelected = !0 : n instanceof Pn && (n.selected = !0);
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
    if (o instanceof Qe)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Pn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Qe ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Pn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Qe ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Pn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Gt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? ha : this.originalTitle;
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
    return this.isLeadSection ? ha : this.title;
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
class Ec extends ki {
  /**
   * @param {number} sectionTranslationId
   * @param {number} translationId
   * @param {string} sectionId
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
    targetLanguage: i,
    startTimestamp: c,
    lastUpdatedTimestamp: u,
    status: g,
    pageRevision: r,
    targetTitle: l,
    sourceSectionTitle: d,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: c,
      lastUpdatedTimestamp: u,
      pageRevision: r,
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
    return uc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? uc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Tt = "previous-edits", Xt = "popular", tt = "topic", Se = "collections", Dt = "automatic", mt = "seed", Gu = window.Vue.ref, D_ = mw.loader.require("ext.cx.articletopics"), fa = {
  type: Dt,
  id: Tt
}, Im = () => {
  const e = Gu(
    D_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = Gu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const i = s == null ? void 0 : s.toLowerCase(), c = a == null ? void 0 : a.toLowerCase();
    return i === tt ? e.value.some((u) => u === a) ? { type: i, id: c } : (t.value = !0, fa) : i === Se || i === mt ? { type: i, id: a } : c === Tt ? {
      type: Dt,
      id: Tt
    } : c === Xt ? {
      type: Dt,
      id: Xt
    } : c === Se ? {
      type: Dt,
      id: Se
    } : fa;
  }, isDefaultFilter: ({ type: s, id: a }) => s === fa.type && a === fa.id };
}, T_ = window.Vue.inject, B_ = window.Vue.reactive;
var P_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Rm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(P_, function() {
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
      convertGrammar(r, l) {
        switch (l) {
          case "instrumental":
            r = "s " + r;
            break;
          case "lokativ":
            r = "o " + r;
        }
        return r;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, fi: class extends s {
      convertGrammar(r, l) {
        let d = r.match(/[aou][^äöy]*$/i);
        const p = r;
        switch (r.match(/wiki$/i) && (d = !1), r.match(/[bcdfghjklmnpqrstvwxz]$/i) && (r += "i"), l) {
          case "genitive":
            r += "n";
            break;
          case "elative":
            r += d ? "sta" : "stä";
            break;
          case "partitive":
            r += d ? "a" : "ä";
            break;
          case "illative":
            r += r.slice(-1) + "n";
            break;
          case "inessive":
            r += d ? "ssa" : "ssä";
            break;
          default:
            r = p;
        }
        return r;
      }
    }, ga: class extends s {
      convertGrammar(r, l) {
        if (l === "ainmlae")
          switch (r) {
            case "an Domhnach":
              r = "Dé Domhnaigh";
              break;
            case "an Luan":
              r = "Dé Luain";
              break;
            case "an Mháirt":
              r = "Dé Mháirt";
              break;
            case "an Chéadaoin":
              r = "Dé Chéadaoin";
              break;
            case "an Déardaoin":
              r = "Déardaoin";
              break;
            case "an Aoine":
              r = "Dé hAoine";
              break;
            case "an Satharn":
              r = "Dé Sathairn";
          }
        return r;
      }
    }, he: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "prefixed":
          case "תחילית":
            r.slice(0, 1) === "ו" && r.slice(0, 2) !== "וו" && (r = "ו" + r), r.slice(0, 1) === "ה" && (r = r.slice(1)), (r.slice(0, 1) < "א" || r.slice(0, 1) > "ת") && (r = "־" + r);
        }
        return r;
      }
    }, hsb: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, hu: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "rol":
            r += "ról";
            break;
          case "ba":
            r += "ba";
            break;
          case "k":
            r += "k";
        }
        return r;
      }
    }, hy: class extends s {
      convertGrammar(r, l) {
        return l === "genitive" && (r.slice(-1) === "ա" ? r = r.slice(0, -1) + "այի" : r.slice(-1) === "ո" ? r = r.slice(0, -1) + "ոյի" : r.slice(-4) === "գիրք" ? r = r.slice(0, -4) + "գրքի" : r += "ի"), r;
      }
    }, la: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "genitive":
            r = (r = (r = (r = (r = (r = (r = (r = (r = r.replace(/u[ms]$/i, "i")).replace(/ommunia$/i, "ommunium")).replace(/a$/i, "ae")).replace(/libri$/i, "librorum")).replace(/nuntii$/i, "nuntiorum")).replace(/tio$/i, "tionis")).replace(/ns$/i, "ntis")).replace(/as$/i, "atis")).replace(/es$/i, "ei");
            break;
          case "accusative":
            r = (r = (r = (r = (r = (r = (r = (r = (r = r.replace(/u[ms]$/i, "um")).replace(/ommunia$/i, "am")).replace(/a$/i, "ommunia")).replace(/libri$/i, "libros")).replace(/nuntii$/i, "nuntios")).replace(/tio$/i, "tionem")).replace(/ns$/i, "ntem")).replace(/as$/i, "atem")).replace(/es$/i, "em");
            break;
          case "ablative":
            r = (r = (r = (r = (r = (r = (r = (r = (r = r.replace(/u[ms]$/i, "o")).replace(/ommunia$/i, "ommunibus")).replace(/a$/i, "a")).replace(/libri$/i, "libris")).replace(/nuntii$/i, "nuntiis")).replace(/tio$/i, "tione")).replace(/ns$/i, "nte")).replace(/as$/i, "ate")).replace(/es$/i, "e");
        }
        return r;
      }
    }, os: class extends s {
      convertGrammar(r, l) {
        let d, p, m, h;
        switch (d = "мæ", p = "", m = "", h = "", r.match(/тæ$/i) ? (r = r.slice(0, -1), d = "æм") : r.match(/[аæеёиоыэюя]$/i) ? p = "й" : r.match(/у$/i) ? r.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : r.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), l) {
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
        return r + h;
      }
    }, ru: class extends s {
      convertGrammar(r, l) {
        return l === "genitive" && (r.slice(-1) === "ь" ? r = r.slice(0, -1) + "я" : r.slice(-2) === "ия" ? r = r.slice(0, -2) + "ии" : r.slice(-2) === "ка" ? r = r.slice(0, -2) + "ки" : r.slice(-2) === "ти" ? r = r.slice(0, -2) + "тей" : r.slice(-2) === "ды" ? r = r.slice(0, -2) + "дов" : r.slice(-3) === "ник" && (r = r.slice(0, -3) + "ника")), r;
      }
    }, sl: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "mestnik":
            r = "o " + r;
            break;
          case "orodnik":
            r = "z " + r;
        }
        return r;
      }
    }, uk: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "genitive":
            r.slice(-1) === "ь" ? r = r.slice(0, -1) + "я" : r.slice(-2) === "ія" ? r = r.slice(0, -2) + "ії" : r.slice(-2) === "ка" ? r = r.slice(0, -2) + "ки" : r.slice(-2) === "ти" ? r = r.slice(0, -2) + "тей" : r.slice(-2) === "ды" ? r = r.slice(0, -2) + "дов" : r.slice(-3) === "ник" && (r = r.slice(0, -3) + "ника");
            break;
          case "accusative":
            r.slice(-2) === "ія" && (r = r.slice(0, -2) + "ію");
        }
        return r;
      }
    } };
    const i = new RegExp("(?:([A-Za-zªµºÀ-ÖØ-öø-ʸʻ-ˁːˑˠ-ˤˮͰ-ͳͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-҂Ҋ-ԯԱ-Ֆՙ-՟ա-և։ः-हऻऽ-ीॉ-ौॎ-ॐक़-ॡ।-ঀংঃঅ-ঌএঐও-নপ-রলশ-হঽ-ীেৈোৌৎৗড়ঢ়য়-ৡ০-ৱ৴-৺ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ીૉોૌૐૠૡ૦-૰ૹଂଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽାୀେୈୋୌୗଡ଼ଢ଼ୟ-ୡ୦-୷ஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹாிுூெ-ைொ-ௌௐௗ௦-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౚౠౡ౦-౯౿ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊೋೕೖೞೠೡ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ീെ-ൈൊ-ൌൎൗൟ-ൡ൦-൵൹-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-෴ก-ะาำเ-ๆ๏-๛ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆ໐-໙ໜ-ໟༀ-༗༚-༴༶༸༾-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿚က-ာေးျြဿ-ၗၚ-ၝၡ-ၰၵ-ႁႃႄႇ-ႌႎ-ႜ႞-ჅჇჍა-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፼ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙿᚁ-ᚚᚠ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះៈ។-៚ៜ០-៩᠐-᠙ᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸ᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧚ᨀ-ᨖᨙᨚ᨞-ᩕᩗᩡᩣᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪭ᬄ-ᬳᬵᬻᬽ-ᭁᭃ-ᭋ᭐-᭪᭴-᭼ᮂ-ᮡᮦᮧ᮪ᮮ-ᯥᯧᯪ-ᯬᯮ᯲᯳᯼-ᰫᰴᰵ᰻-᱉ᱍ-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〮〯〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎ㆐-ㆺㇰ-㈜㈠-㉏㉠-㉻㉿-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿕ꀀ-ꒌꓐ-ꘌꘐ-ꘫꙀ-ꙮꚀ-ꚝꚠ-ꛯ꛲-꛷Ꜣ-ꞇ꞉-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠤꠧ꠰-꠷ꡀ-ꡳꢀ-ꣃ꣎-꣙ꣲ-ꣽ꤀-ꤥ꤮-ꥆꥒ꥓꥟-ꥼꦃ-ꦲꦴꦵꦺꦻꦽ-꧍ꧏ-꧙꧞-ꧤꧦ-ꧾꨀ-ꨨꨯꨰꨳꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-ꩻꩽ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫫꫮ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭥꭰ-ꯤꯦꯧꯩ-꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|\uD800[\uDC00-\uDC0B]|\uD800[\uDC0D-\uDC26]|\uD800[\uDC28-\uDC3A]|𐀼|𐀽|\uD800[\uDC3F-\uDC4D]|\uD800[\uDC50-\uDC5D]|\uD800[\uDC80-\uDCFA]|𐄀|𐄂|\uD800[\uDD07-\uDD33]|\uD800[\uDD37-\uDD3F]|\uD800[\uDDD0-\uDDFC]|\uD800[\uDE80-\uDE9C]|\uD800[\uDEA0-\uDED0]|\uD800[\uDF00-\uDF23]|\uD800[\uDF30-\uDF4A]|\uD800[\uDF50-\uDF75]|\uD800[\uDF80-\uDF9D]|\uD800[\uDF9F-\uDFC3]|\uD800[\uDFC8-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD801[\uDCA0-\uDCA9]|\uD801[\uDD00-\uDD27]|\uD801[\uDD30-\uDD63]|𐕯|\uD801[\uDE00-\uDF36]|\uD801[\uDF40-\uDF55]|\uD801[\uDF60-\uDF67]|𑀀|\uD804[\uDC02-\uDC37]|\uD804[\uDC47-\uDC4D]|\uD804[\uDC66-\uDC6F]|\uD804[\uDC82-\uDCB2]|𑂷|𑂸|\uD804[\uDCBB-\uDCC1]|\uD804[\uDCD0-\uDCE8]|\uD804[\uDCF0-\uDCF9]|\uD804[\uDD03-\uDD26]|𑄬|\uD804[\uDD36-\uDD43]|\uD804[\uDD50-\uDD72]|\uD804[\uDD74-\uDD76]|\uD804[\uDD82-\uDDB5]|\uD804[\uDDBF-\uDDC9]|𑇍|\uD804[\uDDD0-\uDDDF]|\uD804[\uDDE1-\uDDF4]|\uD804[\uDE00-\uDE11]|\uD804[\uDE13-\uDE2E]|𑈲|𑈳|𑈵|\uD804[\uDE38-\uDE3D]|\uD804[\uDE80-\uDE86]|𑊈|\uD804[\uDE8A-\uDE8D]|\uD804[\uDE8F-\uDE9D]|\uD804[\uDE9F-\uDEA9]|\uD804[\uDEB0-\uDEDE]|\uD804[\uDEE0-\uDEE2]|\uD804[\uDEF0-\uDEF9]|𑌂|𑌃|\uD804[\uDF05-\uDF0C]|𑌏|𑌐|\uD804[\uDF13-\uDF28]|\uD804[\uDF2A-\uDF30]|𑌲|𑌳|\uD804[\uDF35-\uDF39]|\uD804[\uDF3D-\uDF3F]|\uD804[\uDF41-\uDF44]|𑍇|𑍈|\uD804[\uDF4B-\uDF4D]|𑍐|𑍗|\uD804[\uDF5D-\uDF63]|\uD805[\uDC80-\uDCB2]|𑒹|\uD805[\uDCBB-\uDCBE]|𑓁|\uD805[\uDCC4-\uDCC7]|\uD805[\uDCD0-\uDCD9]|\uD805[\uDD80-\uDDB1]|\uD805[\uDDB8-\uDDBB]|𑖾|\uD805[\uDDC1-\uDDDB]|\uD805[\uDE00-\uDE32]|𑘻|𑘼|𑘾|\uD805[\uDE41-\uDE44]|\uD805[\uDE50-\uDE59]|\uD805[\uDE80-\uDEAA]|𑚬|𑚮|𑚯|𑚶|\uD805[\uDEC0-\uDEC9]|\uD805[\uDF00-\uDF19]|𑜠|𑜡|𑜦|\uD805[\uDF30-\uDF3F]|\uD806[\uDCA0-\uDCF2]|𑣿|\uD806[\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E]|\uD809[\uDC70-\uDC74]|\uD809[\uDC80-\uDD43]|\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38]|\uD81A[\uDE40-\uDE5E]|\uD81A[\uDE60-\uDE69]|𖩮|𖩯|\uD81A[\uDED0-\uDEED]|𖫵|\uD81A[\uDF00-\uDF2F]|\uD81A[\uDF37-\uDF45]|\uD81A[\uDF50-\uDF59]|\uD81A[\uDF5B-\uDF61]|\uD81A[\uDF63-\uDF77]|\uD81A[\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44]|\uD81B[\uDF50-\uDF7E]|\uD81B[\uDF93-\uDF9F]|𛀀|𛀁|\uD82F[\uDC00-\uDC6A]|\uD82F[\uDC70-\uDC7C]|\uD82F[\uDC80-\uDC88]|\uD82F[\uDC90-\uDC99]|𛲜|𛲟|\uD834[\uDC00-\uDCF5]|\uD834[\uDD00-\uDD26]|\uD834[\uDD29-\uDD66]|\uD834[\uDD6A-\uDD72]|𝆃|𝆄|\uD834[\uDD8C-\uDDA9]|\uD834[\uDDAE-\uDDE8]|\uD834[\uDF60-\uDF71]|\uD835[\uDC00-\uDC54]|\uD835[\uDC56-\uDC9C]|𝒞|𝒟|𝒢|𝒥|𝒦|\uD835[\uDCA9-\uDCAC]|\uD835[\uDCAE-\uDCB9]|𝒻|\uD835[\uDCBD-\uDCC3]|\uD835[\uDCC5-\uDD05]|\uD835[\uDD07-\uDD0A]|\uD835[\uDD0D-\uDD14]|\uD835[\uDD16-\uDD1C]|\uD835[\uDD1E-\uDD39]|\uD835[\uDD3B-\uDD3E]|\uD835[\uDD40-\uDD44]|𝕆|\uD835[\uDD4A-\uDD50]|\uD835[\uDD52-\uDEA5]|\uD835[\uDEA8-\uDEDA]|\uD835[\uDEDC-\uDF14]|\uD835[\uDF16-\uDF4E]|\uD835[\uDF50-\uDF88]|\uD835[\uDF8A-\uDFC2]|\uD835[\uDFC4-\uDFCB]|\uD836[\uDC00-\uDDFF]|\uD836[\uDE37-\uDE3A]|\uD836[\uDE6D-\uDE74]|\uD836[\uDE76-\uDE83]|\uD836[\uDE85-\uDE8B]|\uD83C[\uDD10-\uDD2E]|\uD83C[\uDD30-\uDD69]|\uD83C[\uDD70-\uDD9A]|\uD83C[\uDDE6-\uDE02]|\uD83C[\uDE10-\uDE3A]|\uD83C[\uDE40-\uDE48]|🉐|🉑|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34]|\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|[\uDB80-\uDBBE][\uDC00-\uDFFF]|\uDBBF[\uDC00-\uDFFD]|[\uDBC0-\uDBFE][\uDC00-\uDFFF]|\uDBFF[\uDC00-\uDFFD])|([֐־׀׃׆׈-׿߀-ߪߴߵߺ-ࠕࠚࠤࠨ࠮-ࡘ࡜-࢟‏יִײַ-ﬨשׁ-ﭏ؈؋؍؛-ي٭-ٯٱ-ەۥۦۮۯۺ-ܐܒ-ܯ݋-ޥޱ-޿ࢠ-࣢ﭐ-ﴽ﵀-﷏ﷰ-﷼﷾﷿ﹰ-﻾]|\uD802[\uDC00-\uDD1E]|\uD802[\uDD20-\uDE00]|𐨄|\uD802[\uDE07-\uDE0B]|\uD802[\uDE10-\uDE37]|\uD802[\uDE3B-\uDE3E]|\uD802[\uDE40-\uDEE4]|\uD802[\uDEE7-\uDF38]|\uD802[\uDF40-\uDFFF]|\uD803[\uDC00-\uDE5F]|\uD803[\uDE7F-\uDFFF]|\uD83A[\uDC00-\uDCCF]|\uD83A[\uDCD7-\uDFFF]|\uD83B[\uDC00-\uDDFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDE00-\uDEEF]|\uD83B[\uDEF2-\uDEFF]))");
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
          const m = p.match(i);
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
            function _(V) {
              return () => {
                for (let I = 0; I < V.length; I++) {
                  const je = V[I]();
                  if (je !== null)
                    return je;
                }
                return null;
              };
            }
            function w(V) {
              const I = f, je = [];
              for (let Wt = 0; Wt < V.length; Wt++) {
                const Kt = V[Wt]();
                if (Kt === null)
                  return f = I, null;
                je.push(Kt);
              }
              return je;
            }
            function y(V, I) {
              return () => {
                const je = f, Wt = [];
                let Kt = I();
                for (; Kt !== null; )
                  Wt.push(Kt), Kt = I();
                return Wt.length < V ? (f = je, null) : Wt;
              };
            }
            function S(V) {
              const I = V.length;
              return () => {
                let je = null;
                return m.slice(f, f + I) === V && (je = V, f += I), je;
              };
            }
            function k(V) {
              return () => {
                const I = m.slice(f).match(V);
                return I === null ? null : (f += I[0].length, I[0]);
              };
            }
            const x = k(/^\s+/), L = S("|"), E = S(":"), T = S("\\"), U = k(/^./), M = S("$"), K = k(/^\d+/), H = S('"'), pe = S("'"), $e = k(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), wt = k(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Ve = _([Ee, k(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Ee() {
              const V = w([T, U]);
              return V === null ? null : V[1];
            }
            const Pt = _([Ee, wt]), Ie = _([Ee, $e]);
            function De() {
              const V = w([M, K]);
              return V === null ? null : ["REPLACE", parseInt(V[1], 10) - 1];
            }
            const oe = (O = k(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), q = function(V) {
              return V.toString();
            }, () => {
              const V = O();
              return V === null ? null : q(V);
            });
            var O, q;
            function de() {
              const V = w([L, y(0, oa)]);
              if (V === null)
                return null;
              const I = V[1];
              return I.length > 1 ? ["CONCAT"].concat(I) : I[0];
            }
            function X() {
              const V = w([oe, E, De]);
              return V === null ? null : [V[0], V[2]];
            }
            function v() {
              const V = w([oe, E, oa]);
              return V === null ? null : [V[0], V[2]];
            }
            function D() {
              const V = w([oe, E]);
              return V === null ? null : [V[0], ""];
            }
            const A = _([function() {
              const V = w([_([X, v, D]), y(0, de)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = w([oe, y(0, de)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), F = S("{{"), j = S("}}"), ae = S("[["), z = S("]]"), N = S("["), Q = S("]");
            function J() {
              const V = w([F, A, j]);
              return V === null ? null : V[1];
            }
            const Z = _([function() {
              const V = w([y(1, oa), L, y(1, na)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = w([y(1, oa)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function ta() {
              let V = null;
              const I = w([ae, Z, z]);
              if (I !== null) {
                const je = I[1];
                V = ["WIKILINK"].concat(je);
              }
              return V;
            }
            function Oe() {
              let V = null;
              const I = w([N, y(1, Lf), x, y(1, na), Q]);
              return I !== null && (V = ["EXTLINK", I[1].length === 1 ? I[1][0] : ["CONCAT"].concat(I[1]), ["CONCAT"].concat(I[3])]), V;
            }
            const Ni = k(/^[A-Za-z]+/);
            function xf() {
              const V = k(/^[^"]*/), I = w([H, V, H]);
              return I === null ? null : I[1];
            }
            function $f() {
              const V = k(/^[^']*/), I = w([pe, V, pe]);
              return I === null ? null : I[1];
            }
            function Vf() {
              const V = k(/^\s*=\s*/), I = w([x, Ni, V, _([xf, $f])]);
              return I === null ? null : [I[1], I[3]];
            }
            function Ef() {
              const V = y(0, Vf)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const Lf = _([J, De, ta, Oe, function() {
              const V = y(1, Ve)();
              return V === null ? null : V.join("");
            }]), na = _([J, De, ta, Oe, function() {
              let V = null;
              const I = f, je = S("<"), Wt = k(/^\/?/), Kt = k(/^\s*>/), Ui = w([je, Ni, Ef, Wt, Kt]);
              if (Ui === null)
                return null;
              const ru = f, lu = Ui[1], Ii = y(0, na)(), Af = f, cu = w([S("</"), Ni, Kt]);
              if (cu === null)
                return ["CONCAT", m.slice(I, ru)].concat(Ii);
              const Df = f, Tf = cu[1], uu = Ui[2];
              if (function(Un, sa, Ri, zi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Un = Un.toLowerCase()) !== (sa = sa.toLowerCase()) || zi.allowedHtmlElements.indexOf(Un) === -1)
                  return !1;
                const Bf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let aa = 0, Pf = Ri.length; aa < Pf; aa += 2) {
                  const Oi = Ri[aa];
                  if (zi.allowedHtmlCommonAttributes.indexOf(Oi) === -1 && (zi.allowedHtmlAttributesByElement[Un] || []).indexOf(Oi) === -1 || Oi === "style" && Ri[aa + 1].search(Bf) !== -1)
                    return !1;
                }
                return !0;
              }(lu, Tf, uu.slice(1)))
                V = ["HTMLELEMENT", lu, uu].concat(Ii);
              else {
                const Un = (sa) => sa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", Un(m.slice(I, ru))].concat(Ii, Un(m.slice(Af, Df)));
              }
              return V;
            }, function() {
              const V = y(1, Ie)();
              return V === null ? null : V.join("");
            }]), oa = _([J, De, function() {
              const V = y(1, Pt)();
              return V === null ? null : V.join("");
            }]), iu = function() {
              const V = y(0, na)();
              return V === null ? null : ["CONCAT"].concat(V);
            }();
            if (iu === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return iu;
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
      constructor(r, { finalFallback: l = "en", messages: d, wikilinks: p = !1 } = {}) {
        this.locale = r, this.parser = new u(this.locale, { wikilinks: p }), this.messageStore = new g(), d && this.load(d, this.locale), this.finalFallback = l, this.wikilinks = p;
      }
      load(r, l) {
        return this.messageStore.load(r, l || this.locale);
      }
      i18n(r, ...l) {
        return this.parser.parse(this.getMessage(r), l);
      }
      setLocale(r) {
        this.locale = r, this.parser = new u(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(r) {
        let l = this.locale, d = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; l; ) {
          const m = l.split("-");
          let h = m.length;
          do {
            const f = m.slice(0, h).join("-"), _ = this.messageStore.getMessage(r, f);
            if (typeof _ == "string")
              return _;
            h--;
          } while (h);
          l = p[d], d++;
        }
        return r;
      }
      registerParserPlugin(r, l) {
        c.prototype[r] = l;
      }
    };
  });
})(Rm);
var F_ = Rm.exports;
const Xu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, zm = Symbol("banana-context");
function he() {
  const e = T_(zm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function M_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = B_(new F_(e.locale, e));
  return {
    install: (n) => {
      n.provide(zm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Xu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Xu(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const pn = window.Vue.ref, N_ = window.Vue.computed, xi = pn(null), $i = pn(null), Vi = pn(null), Xs = pn(null), Lc = pn(null), Ei = pn(null), Om = pn(null), jm = pn(null), Ac = pn(null), { validateFilters: U_, filtersValidatorError: I_ } = Im(), Hm = {
  from: xi,
  to: $i,
  section: Xs,
  draft: Lc,
  page: Vi,
  revision: Ei,
  "active-list": Ac
}, R_ = N_(() => ({
  type: Om.value,
  id: jm.value
})), qm = (e, t) => {
  Om.value = e, jm.value = t, vi("filter-type", e), t && vi("filter-id", t);
}, z_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Ec && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Hm[o].value = s;
  }
  t.delete("title"), Ws(Object.fromEntries(t));
}, Dc = (e, t) => {
  Hm[e].value = t, vi(e, t);
}, O_ = (e) => {
  Dc("section", e);
}, j_ = (e) => {
  Dc("page", e);
}, H_ = (e) => {
  Dc("active-list", e);
}, Ws = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    Pm(`Special:ContentTranslation${t}`, e)
  );
}, q_ = () => {
  const e = he(), t = new URLSearchParams(location.search);
  Vi.value = t.get("page"), xi.value = t.get("from"), $i.value = t.get("to"), Xs.value = t.get("section"), Ei.value = t.get("revision"), Ac.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = U_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  qm(n.type, n.id), I_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, G_ = () => {
  const e = new URLSearchParams(location.search);
  Xs.value = null, e.delete("section"), e.delete("title"), Ws(Object.fromEntries(e));
}, vi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Ws(Object.fromEntries(n));
}, X_ = (e) => new URLSearchParams(location.search).get(e), W_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), xi.value = e, $i.value = t, n.delete("title"), Ws(Object.fromEntries(n));
}, K_ = () => {
  const e = new URLSearchParams(location.search);
  Vi.value = null, Xs.value = null, Lc.value = null, Ei.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ws(Object.fromEntries(e));
}, Y_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), B = () => ({
  isQuickTutorialForced: Y_,
  setLanguageURLParams: W_,
  setSectionURLParam: O_,
  setTranslationURLParams: z_,
  initializeURLState: q_,
  clearTranslationURLParameters: K_,
  clearSectionURLParameter: G_,
  setUrlParam: vi,
  getUrlParam: X_,
  pageURLParameter: Vi,
  sourceLanguageURLParameter: xi,
  targetLanguageURLParameter: $i,
  sectionURLParameter: Xs,
  draftURLParameter: Lc,
  revisionURLParameter: Ei,
  setPageURLParam: j_,
  currentSuggestionFilters: R_,
  setFilterURLParams: qm,
  activeDashboardTabParameter: Ac,
  setActiveDashboardTabParameter: H_
}), J_ = () => W.getLanguagePairs();
function Q_(e, t) {
  return b(this, null, function* () {
    const n = W.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new te(e, t, o.mt)
      )
    );
  });
}
function Z_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function ev(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = W.getWikiDomainCode(e), i = W.getWikiDomainCode(t), c = {
    action: "wblinktitles",
    fromsite: s.replace(i, a),
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
const Li = {
  fetchSupportedLanguageCodes: J_,
  fetchSupportedMTProviders: Q_,
  fetchCXServerToken: Z_,
  addWikibaseLink: ev
}, Tc = window.Vue.ref, Wu = Tc([]), Ku = Tc([]), Yu = Tc(!1);
function Ks() {
  return {
    fetchSupportedLanguageCodes: () => b(this, null, function* () {
      if (!Yu.value) {
        Yu.value = !0;
        const t = yield Li.fetchSupportedLanguageCodes();
        Wu.value = t.sourceLanguages, Ku.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: Wu,
    supportedTargetLanguageCodes: Ku
  };
}
const tv = {
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
}, nv = {
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
}, ov = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], sv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, av = {
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
}, iv = {
  languages: tv,
  scriptgroups: nv,
  rtlscripts: ov,
  regiongroups: sv,
  territories: av
};
var Ue = iv;
function Ys(e) {
  return !!Ue.languages[e];
}
function Nn(e) {
  return Ys(e) && Ue.languages[e].length === 1 ? Ue.languages[e][0] : !1;
}
function rv() {
  return Ue.languages;
}
function Js(e) {
  var t = Nn(e);
  return t ? Js(t) : Ys(e) ? Ue.languages[e][0] : "Zyyy";
}
function Bc(e) {
  var t = Nn(e);
  return t ? Bc(t) : Ys(e) && Ue.languages[e][1] || "UNKNOWN";
}
function zs(e) {
  var t = Nn(e);
  return t ? zs(t) : Ys(e) && Ue.languages[e][2] || e;
}
function lv() {
  var e, t = {};
  for (e in Ue.languages)
    Nn(e) || (t[e] = zs(e));
  return t;
}
function Gm(e) {
  var t, n, o = [];
  for (t in Ue.languages)
    if (!Nn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Js(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function cv(e) {
  return Gm([e]);
}
function Xm(e) {
  var t;
  for (t in Ue.scriptgroups)
    if (Ue.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Pc(e) {
  return Xm(Js(e));
}
function Wm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Nn(n) || n, a = Pc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Km(e) {
  var t, n, o, s = {};
  for (t in Ue.languages)
    if (!Nn(t)) {
      for (n = 0; n < e.length; n++)
        if (Bc(t).includes(e[n])) {
          o = Pc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function uv(e) {
  return Km([e]);
}
function dv(e) {
  var t, n, o, s = [];
  for (t = Wm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function gv(e, t) {
  var n = zs(e) || e, o = zs(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Ym(e) {
  return Ue.rtlscripts.includes(Js(e));
}
function pv(e) {
  return Ym(e) ? "rtl" : "ltr";
}
function mv(e) {
  return Ue.territories[e] || [];
}
function hv(e, t) {
  t.target ? Ue.languages[e] = [t.target] : Ue.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: hv,
  getAutonym: zs,
  getAutonyms: lv,
  getDir: pv,
  getGroupOfScript: Xm,
  getLanguages: rv,
  getLanguagesByScriptGroup: Wm,
  getLanguagesByScriptGroupInRegion: uv,
  getLanguagesByScriptGroupInRegions: Km,
  getLanguagesInScript: cv,
  getLanguagesInScripts: Gm,
  getLanguagesInTerritory: mv,
  getRegions: Bc,
  getScript: Js,
  getScriptGroupOfLanguage: Pc,
  isKnown: Ys,
  isRedirect: Nn,
  isRtl: Ym,
  sortByScriptGroup: dv,
  sortByAutonym: gv
};
const oo = window.Vue.computed;
function ye(e) {
  const t = oo(() => e.state.application.sourceLanguage), n = oo(() => e.state.application.targetLanguage), o = oo(
    () => e.state.application.currentMTProvider
  ), s = oo(
    () => R.getAutonym(t.value)
  ), a = oo(
    () => R.getAutonym(n.value)
  ), i = oo(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: i,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Fo {
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
    pageid: i,
    pagelanguage: c,
    pageprops: u,
    pageviews: g,
    thumbnail: r = null,
    title: l,
    revisions: d,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = c, this.title = l, this.pageId = i, this.description = t, this.image = s, this.imageName = a, this.pageprops = u, this.pageviews = g, this.thumbnail = r, this.langLinksCount = n, this.articleSize = (f = d == null ? void 0 : d[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = u == null ? void 0 : u.wikibase_item, this.content = m, this.sections = h;
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
class fv {
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
function wv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const _v = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), wv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, vv = (e, t) => {
  let n, o;
  return t ? (n = _v(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, i) => {
    const c = $(i).data("view").getModel();
    if (c)
      return ve.dm.converter.getDomFromNode(
        c,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, Sv = (e, t) => {
  const n = Array.from(
    vv(e, t)
  );
  return yv(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let c = "";
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : i.unshift(a);
      const g = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (l) => new Qe({
          sentences: Cv(l),
          node: l
        })
      ), r = !c;
      return new uc({ id: u, title: c, subSections: g, isLeadSection: r });
    }
  );
}, yv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, Cv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Pn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Jm = {
  convertSegmentedContentToPageSections: Sv
}, Fc = 120, bv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Fc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return W.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, l) => at(fe({}, r), { [l.to]: l.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, l) => at(fe({}, r), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((r) => {
      const l = g[r.title] || c[r.title] || null;
      return new Fo(at(fe({}, r), { _alias: l }));
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
  return W.getApi(e).get(n).then((s) => {
    var u, g;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return c ? Object.freeze(new fv(c, i)) : null;
  });
}, xv = (e, t, n) => {
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
  return W.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var u, g;
    return (g = (u = c.langlinks) == null ? void 0 : u[0]) == null ? void 0 : g["*"];
  }).filter((c) => !!c));
}, $v = (e, t, n, o = null) => Qm(
  e,
  t,
  n,
  o
).then(
  (s) => new Fo({
    sections: Jm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Qm = (e, t, n, o = null) => {
  const s = W.getWikiDomainCode(e), a = W.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, c += "/$revision");
  const u = W.getCXServerUrl(
    c,
    i
  );
  return fetch(u).then((g) => g.json()).then((g) => g.segmentedContent);
}, Vv = (e) => b(void 0, null, function* () {
  const t = y_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Fc,
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
  return yield W.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Fo(s))).catch((o) => []);
}), Ev = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Fc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return W.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new Fo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, no = {
  fetchPages: bv,
  fetchLanguageTitles: kv,
  fetchPageContent: $v,
  fetchSegmentedContent: Qm,
  fetchNearbyPages: Vv,
  searchPagesByTitlePrefix: Ev,
  fetchLanguageLinksForLanguage: xv
}, Lv = window.Vuex.useStore, Mo = () => {
  const e = Lv();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const i = n.slice(a, a + o), c = no.fetchPages(t, i).then(
        (u) => u.forEach(
          (g) => e.commit("mediawiki/addPage", g)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, Av = window.Vuex.useStore, Mc = () => {
  const e = Av(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (r) => r.matchesFilter(o.value)
  ), i = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), c = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (r) => r.matchesFilter(o.value)
  );
  return {
    getFilteredPageSuggestions: c,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (g) => c().slice(
      s * g,
      s * (g + 1)
    ),
    getSectionSuggestionsSliceByIndex: i
  };
};
class No {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    langLinksCount: a,
    wikidataId: i,
    suggestionProvider: c = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = i, this.langLinksCount = a, this.suggestionProvider = c, this.isListable = !0;
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
class eo {
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
   * @param {boolean} options.isListable A boolean indicating whether we should display this section suggestion inside dashboard suggestion list
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    present: a,
    missing: i,
    sourceSections: c = [],
    targetSections: u = [],
    isListable: g = !0,
    suggestionProvider: r = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = c, this.targetSections = u, this.isListable = g, this.suggestionProvider = r;
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
const Zm = [
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
], Dv = [
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
], Tv = [
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
], Bv = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Pv = [
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
], Fv = {
  en: Zm,
  es: Dv,
  bn: Tv,
  fr: Bv,
  de: Pv
};
class Lo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Nc {
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
class eh extends No {
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
    wikidataId: i,
    suggestionProvider: c = null,
    collection: u = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: i,
      suggestionProvider: c
    }), this.collection = new Nc(u);
  }
}
class th extends eo {
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
    missing: i,
    sourceSections: c = [],
    targetSections: u = [],
    isListable: g = !0,
    suggestionProvider: r = null,
    collection: l = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: i,
      sourceSections: c,
      targetSections: u,
      isListable: g,
      suggestionProvider: r
    }), this.collection = new Nc(l);
  }
}
const Mv = Zm, mn = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function Nv() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield mn({ urlPostfix: t, urlParams: e })) || []).map((o) => new Nc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function Uv(e, t, n, o = 24) {
  return b(this, null, function* () {
    return ((yield mn({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (i) => new No({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
const Iv = (e, t) => b(void 0, null, function* () {
  return ((yield mn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new No({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), Rv = (e, t) => b(void 0, null, function* () {
  const s = (yield mn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new eo({
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
}), zv = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield mn({ urlParams: o })) || []).map(
    (a) => new eh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), Ov = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield mn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (i) => new th({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: i.source_title,
      targetTitle: i.target_title,
      sourceSections: i.source_sections,
      targetSections: i.target_sections,
      present: i.present,
      missing: i.missing,
      collection: i.collection
    })
  );
});
function jv(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = W.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new eo(a) : null;
  });
}
function Hv(e, t, n) {
  return b(this, null, function* () {
    const a = (yield mn({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (i) => new eo({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: i.source_title,
        targetTitle: i.target_title,
        sourceSections: i.source_sections,
        targetSections: i.target_sections,
        present: i.present,
        missing: i.missing
      })
    );
  });
}
function qv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield mn({ urlParams: s })) || []).map(
      (i) => new No({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
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
    }, i = (yield mn({ urlPostfix: "/sections", urlParams: s })) || [];
    return i && i.map(
      (c) => new eo({
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
function Xv(e) {
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
    }, n = W.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function Wv(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = W.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function Kv(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = W.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function Yv(e) {
  const t = Mv.map((o) => encodeURIComponent(o)).join("|"), n = W.getCXServerUrl(
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
const Jv = (e, t, n) => {
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
}, Qv = (e) => {
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
}, Zv = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((c) => new Lo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ue = {
  fetchFavorites: Zv,
  fetchPageSuggestions: Uv,
  fetchSectionSuggestion: jv,
  fetchSectionSuggestions: Hv,
  fetchSuggestionSeeds: Wv,
  fetchAppendixTargetSectionTitles: Yv,
  fetchSuggestionSourceSections: Kv,
  markFavorite: Jv,
  unmarkFavorite: Qv,
  fetchUserEdits: Xv,
  fetchMostPopularPageSuggestions: Iv,
  fetchMostPopularSectionSuggestions: Rv,
  fetchPageSuggestionsByTopics: qv,
  fetchSectionSuggestionsByTopics: Gv,
  fetchPageCollections: Nv,
  fetchPageSuggestionsByCollections: zv,
  fetchSectionSuggestionsByCollections: Ov
}, eS = window.Vuex.useStore, Qs = () => {
  const e = eS(), { sourceLanguage: t, targetLanguage: n } = ye(e), o = (c) => {
    if (!c)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), r = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    return !u.includes(c.sourceTitle) && !r.includes(c.sourceTitle);
  }, s = (c) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (r) => r.sourceLanguage === c.sourceLanguage && r.targetLanguage === c.targetLanguage && r.sourceTitle === c.sourceTitle
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
class tS {
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
const nS = window.Vuex.useStore, oS = window.Vue.computed, Ai = window.Vue.ref, sS = Ai([]), aS = Ai([]);
let or = !1, sr = !1, Ju = !1, nh = Ai([]);
const wa = Ai([]), iS = (e, t) => {
  nh.value.push({
    sourceLanguage: e,
    targetLanguage: t
  });
};
let qo = null;
const _a = {
  page: sS,
  section: aS
}, Uc = () => {
  const e = nS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = oS(
    () => nh.value.some(
      (l) => l.sourceLanguage === t.value && l.targetLanguage === n.value
    )
  ), s = () => b(void 0, null, function* () {
    sr || (wa.value = yield ue.fetchUserEdits(t.value).then((l) => (sr = !0, l)));
  }), a = () => b(void 0, null, function* () {
    let l = e.getters["translator/getTranslationsByStatus"]("published");
    if (l = l.filter(
      (d) => d.sourceLanguage === t.value
    ), l.length && !or)
      return or = !0, l.map(
        (d) => d.sourceTitle
      );
    if (or = !0, !sr && (yield s(), wa.value.length > 0))
      return wa.value;
    if (!Ju) {
      const d = yield ue.fetchUserEdits(t.value).then((p) => (Ju = !0, p));
      if (d.length)
        return no.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          d
        );
    }
    return null;
  }), i = (l) => {
    let d = _a[l].value.find(
      (p) => p.matchesLanguagePair(t.value, n.value)
    );
    return d || (d = new tS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), _a[l].value.push(d)), d;
  }, c = () => b(void 0, null, function* () {
    const l = yield ue.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const d in _a) {
      const p = i(d);
      p.seeds = [...p.seeds, ...l || []];
    }
  }), u = () => b(void 0, null, function* () {
    let l = !1, d = [];
    do {
      d = yield a(), d || (l = !0);
      for (const p in _a) {
        const m = i(p);
        m.seeds = [
          ...m.seeds,
          ...d || []
        ];
      }
    } while (!l && !(d != null && d.length));
  }), g = () => qo || (qo = u(), qo.finally(() => {
    qo = null;
  }));
  return {
    getSuggestionSeed: (l) => b(void 0, null, function* () {
      let d = i(l);
      d.seeds.length || (yield g());
      let p = d.shiftSeeds();
      return !p && !o.value && (yield c(), p = d.shiftSeeds(), iS(
        t.value,
        n.value
      )), p;
    }),
    defaultSeedsFetched: o,
    fetchPreviousEditsInSource: s,
    previousEditsInSource: wa
  };
}, rS = 5;
function Ao(e) {
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
  } = B(), { getSuggestionSeed: o } = Uc(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Qs(), c = {
    id: Tt,
    type: Dt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => b(void 0, null, function* () {
      const l = [];
      return yield Ao(() => b(void 0, null, function* () {
        const d = yield o("page");
        if (!d)
          return !0;
        let p = yield ue.fetchPageSuggestions(
          t.value,
          n.value,
          d
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, r), l.push(...p), l.length >= r;
      })), l.forEach(
        (d) => d.suggestionProvider = c
      ), l;
    }),
    fetchSectionSuggestionsBasedOnEdits: (r) => b(void 0, null, function* () {
      const l = [];
      return yield Ao(() => b(void 0, null, function* () {
        const d = yield o("section");
        if (!d)
          return !0;
        const p = yield ue.fetchSectionSuggestions(
          t.value,
          n.value,
          d
        );
        if (!p)
          return !1;
        let m = p.filter(
          (f) => s(f)
        );
        const h = p.filter(
          (f) => !s(f)
        );
        return m = m.slice(0, r), l.push(...m), h.forEach((f) => {
          f && !i(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), l.length >= r;
      })), l.forEach(
        (d) => d.suggestionProvider = c
      ), l;
    })
  };
}, uS = window.Vuex.useStore, dS = () => {
  const e = uS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: Xt,
    type: Dt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Qs();
  return { fetchSectionSuggestionsPopular: (g) => b(void 0, null, function* () {
    const r = [];
    return yield Ao(() => b(void 0, null, function* () {
      const l = yield ue.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let d = l.filter(
        (m) => s(m)
      );
      const p = l.filter(
        (m) => !s(m)
      );
      return d = d.slice(0, g), r.push(...d), p.forEach((m) => {
        m && !i(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), r.length >= g;
    })), r.forEach(
      (l) => l.suggestionProvider = o
    ), r;
  }), fetchPageSuggestionsPopular: (g) => b(void 0, null, function* () {
    const r = [];
    return yield Ao(() => b(void 0, null, function* () {
      let l = yield ue.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return l = l.filter(
        (d) => a(d)
      ), l = l.slice(0, g), r.push(...l), r.length >= g;
    })), r.forEach(
      (l) => l.suggestionProvider = o
    ), r;
  }) };
}, oh = window.Vue.ref, ar = oh([]), Qu = oh(!1), Ic = () => ({ pageCollections: ar, fetchPageCollections: () => b(void 0, null, function* () {
  try {
    ar.value = yield ue.fetchPageCollections(), ar.value.sort((t, n) => t.name.localeCompare(n.name)), Qu.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Qu });
class dc {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const va = window.Vue.computed, Zu = mw.loader.require("ext.cx.articletopics"), gS = (e) => new dc({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: tt
  }))
}), Rc = () => {
  const e = he(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), o = {
    id: Tt,
    type: Dt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: Xt,
    type: Dt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: Se,
    type: Dt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: i, pageCollectionsFetched: c } = Ic(), u = va(() => {
    const w = new dc({
      id: Dt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return i.value.length && w.filters.push(a), w;
  }), g = (w) => ({
    id: w.name,
    label: w.name,
    type: Se
  }), r = va(
    () => new dc({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: i.value.map(
        (w) => g(w)
      )
    })
  ), l = va(() => {
    const w = [
      u.value,
      ...Zu.map(gS)
    ];
    return i.value.length && w.splice(1, 0, r.value), w;
  }), d = va(
    () => [t.value.type, t.value.id].includes(
      Se
    ) && !c.value
  ), p = () => {
    if (d.value)
      return [];
    const w = h();
    return w.type === tt || w.type === mt || w.type === Se || w.id === Se ? [w, o] : [o, s];
  }, m = (w) => {
    n(w.type, w.id);
  }, h = () => t.value.type === mt ? {
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  } : l.value.flatMap((w) => w.filters).find(f), f = (w) => t.value.type === w.type && t.value.id === w.id;
  return {
    allFilters: l,
    getFiltersSummary: p,
    selectFilter: m,
    isFilterSelected: f,
    getArticleTopics: (w) => {
      const S = Zu.flatMap((k) => k.topics).find((k) => k.topicId === w);
      return S ? S.articletopics : [];
    },
    waitingForPageCollectionsFetch: d,
    findSelectedFilter: h
  };
}, pS = window.Vuex.useStore, mS = () => {
  const e = pS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Qs(), { getArticleTopics: c } = Rc();
  return {
    fetchPageSuggestionsByTopics: (r) => b(void 0, null, function* () {
      const l = o.value.id, d = {
        id: l,
        type: tt
      }, p = c(l);
      let m = yield ue.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        p
      );
      return m = m.filter(
        (h) => a(h)
      ), m = m.slice(0, r), m.forEach(
        (h) => h.suggestionProvider = d
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (r) => b(void 0, null, function* () {
      const l = o.value.id, d = {
        id: l,
        type: tt
      }, p = c(l), m = [];
      return yield Ao(() => b(void 0, null, function* () {
        const h = yield ue.fetchSectionSuggestionsByTopics(
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
        return f = f.slice(0, r), m.push(...f), _.forEach((w) => {
          w && !i(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), m.length >= r;
      })), m.forEach(
        (h) => h.suggestionProvider = d
      ), m;
    })
  };
}, hS = window.Vuex.useStore, fS = window.Vue.computed, wS = () => {
  const e = hS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = fS(() => {
    var r;
    return ((r = o.value) == null ? void 0 : r.type) !== Se ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: i,
    sectionSuggestionExists: c
  } = Qs();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
      const r = [], l = yield ue.fetchSectionSuggestionsByCollections(
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
      return r.push(...d), p.forEach((m) => {
        m && !c(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), r.forEach(
        (m) => m.suggestionProvider = o.value
      ), r;
    }),
    fetchPageSuggestionsByCollections: () => b(void 0, null, function* () {
      const r = [];
      let l = yield ue.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return l = l.filter(
        (d) => i(d)
      ), r.push(...l), r.forEach(
        (d) => d.suggestionProvider = o.value
      ), r;
    })
  };
}, _S = window.Vuex.useStore, vS = () => {
  const e = _S(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Qs();
  return {
    fetchPageSuggestionsBySeed: (g) => b(void 0, null, function* () {
      const r = o.value.id;
      let l = yield ue.fetchPageSuggestions(
        t.value,
        n.value,
        r
      );
      return l = l.filter(
        (d) => a(d)
      ), l = l.slice(0, g), l.forEach(
        (d) => d.suggestionProvider = {
          id: r,
          type: mt
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (g) => b(void 0, null, function* () {
      const r = [], l = o.value.id;
      return yield Ao(() => b(void 0, null, function* () {
        const d = yield ue.fetchSectionSuggestions(
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
        return p = p.slice(0, g), r.push(...p), m.forEach((h) => {
          h && !i(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), r.length >= g;
      })), r.forEach(
        (d) => d.suggestionProvider = {
          id: l,
          type: mt
        }
      ), r;
    })
  };
}, zc = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = cS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = dS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = mS(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: u
  } = wS(), { fetchPageSuggestionsBySeed: g, fetchSectionSuggestionsBySeed: r } = vS(), l = {
    [Tt]: t,
    [Xt]: o,
    [Se]: c,
    [tt]: a,
    [mt]: g
  }, d = {
    [Tt]: n,
    [Xt]: s,
    [Se]: u,
    [tt]: i,
    [mt]: r
  }, p = (f) => f.type === Dt ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => d[p(e.value)]
  };
}, SS = window.Vuex.useStore, Oc = () => {
  const e = SS(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Mc(), { sourceLanguageURLParameter: o } = B(), s = Mo(), a = () => {
    const d = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - d.length % p;
  }, i = () => {
    const d = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - d.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = zc(), g = (d) => {
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
      const d = i(), m = yield c()(
        d
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), g(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, yS = window.Vuex.useStore, sh = () => {
  const e = yS();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ue.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, CS = window.Vuex.useStore, ah = () => {
  const e = CS(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Oc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Mc(), { targetLanguageURLParameter: a } = B(), i = sh();
  return () => b(void 0, null, function* () {
    const c = s(0), u = o(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, r = c.length === g, l = u.length === g;
    r && l || (yield i(a.value), t(), n());
  });
}, bS = window.Vuex.useStore, ih = () => {
  const e = bS(), t = Mo();
  return (n, o, s) => b(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield ue.fetchSectionSuggestion(
        n,
        s,
        o
      );
      try {
        if (yield t(n, [s]), a)
          a.isListable = !1, e.commit("suggestions/addSectionSuggestion", a);
        else {
          const i = e.getters["mediawiki/getPage"](
            n,
            s
          );
          return new No({
            sourceLanguage: n,
            targetLanguage: o,
            sourceTitle: s,
            langLinksCount: i.langLinksCount,
            wikidataId: i.wikidataId
          });
        }
      } catch (i) {
        throw new Error(
          `No page metadata found for title ${s} and language pair ${n}-${o}`
        );
      }
    }
    return a;
  });
}, ed = window.Vue.computed, kS = window.Vuex.useStore, hn = () => {
  const e = kS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = ed(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = ed(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, u) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(u)
  };
}, rh = window.Vuex.useStore, { setLanguageURLParams: xS } = B(), jc = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), xS(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, lh = () => {
  const e = rh(), t = ah();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = ye(e);
    n === o && (n = a.value, o = s.value), jc(e, n, o), t();
  };
}, $S = () => {
  const e = rh(), t = ih(), { currentLanguageTitleGroup: n, targetPageExists: o } = hn(), s = Mo();
  return (a, i) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      setPageURLParam: g,
      clearSectionURLParameter: r
    } = B();
    a === i && (a = u.value, i = c.value);
    const l = n.value.getTitleForLanguage(a);
    jc(e, a, i), g(l), o.value ? (r(), yield t(
      c.value,
      u.value,
      l
    )) : yield s(c.value, [l]);
  });
}, VS = window.Vuex.useStore, ES = window.Vue.ref, td = ES(!1), ch = () => {
  const e = VS(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = Ks(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = B(), i = () => {
    const u = W.getCurrentWikiLanguageCode(), g = (f) => t.value.includes(f), r = (f) => n.value.includes(f), l = {
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
      (f) => r(f)
    );
    return { sourceLanguage: p.find(
      (f) => g(f) && f !== m
    ), targetLanguage: m };
  };
  return { initializeApplicationLanguages: () => b(void 0, null, function* () {
    yield o();
    const { sourceLanguage: u, targetLanguage: g } = i();
    jc(e, u, g), td.value = !0;
  }), applicationLanguagesInitialized: td };
};
const LS = window.Vue.resolveDynamicComponent, nd = window.Vue.openBlock, od = window.Vue.createBlock, AS = window.Vue.Transition, Go = window.Vue.withCtx, Xo = window.Vue.createVNode, DS = window.Vue.resolveComponent, ir = window.Vue.unref, TS = window.Vuex.useStore, sd = window.Vue.computed, BS = window.Vue.onMounted, PS = window.Vue.inject, FS = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = ch();
    t(), n();
    const o = PS("breakpoints"), s = sd(() => o.value.mobile), a = TS(), i = sd(
      () => a.state.application.autoSavePending
    );
    return BS(() => {
      window.addEventListener("beforeunload", (c) => {
        i.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && Bm.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Po && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, u) => {
      const g = DS("router-view");
      return nd(), od(ir(Iw), { id: "contenttranslation" }, {
        default: Go(() => [
          Xo(ir(P), { class: "cx-container" }, {
            default: Go(() => [
              Xo(ir(C), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: Go(() => [
                  Xo(g, null, {
                    default: Go(({ Component: r, route: l }) => [
                      Xo(AS, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: Go(() => [
                          (nd(), od(LS(r)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Xo(S_)
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
}, MS = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, NS = {
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
class uh {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Do {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new uh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const ad = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => at(fe({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class US {
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
    const t = ad((s = this.user) == null ? void 0 : s.content), n = ad((a = this.mt) == null ? void 0 : a.content);
    return [
      .../* @__PURE__ */ new Set([
        ...Object.keys(t),
        ...Object.keys(n)
      ])
    ].map((i) => ({
      id: i,
      mt: n[i] || null,
      user: t[i] || null
    }));
  }
}
class Hc extends ki {
  /**
   * @param {number} sectionTranslationId
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
    lastUpdatedTimestamp: i,
    pageRevision: c,
    status: u,
    targetTitle: g,
    targetUrl: r,
    sectionTranslations: l
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: i,
      pageRevision: c,
      status: u,
      targetTitle: g
    }), this.targetUrl = r, this.sectionTranslations = l;
  }
}
const Di = mw.user.isAnon() ? void 0 : "user", dh = (e) => {
  if (e === "assertuserfailed")
    throw new Po();
};
function gh(e, t = null) {
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
      let i;
      if (e === "draft" ? i = a.map(
        (u) => new Ec(at(fe({}, u), { status: e }))
      ) : i = a.map(
        (u) => new Hc(at(fe({}, u), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const u = yield gh(
          e,
          s.continue.offset
        );
        i = i.concat(u);
      }
      return i;
    }));
  });
}
function IS(e) {
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
      (a) => new US(a)
    );
  });
}
function RS(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== te.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = W.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, u]) => {
      var r, l;
      if (!u) {
        const d = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(d);
      }
      return (l = (r = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : r.groups) == null ? void 0 : l.content;
    }).catch((c) => Promise.reject(c));
  });
}
const zS = (e, t, n) => {
  const o = W.getApi(t);
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
}, OS = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: c,
  captchaId: u,
  captchaWord: g,
  isSandbox: r,
  sectionTranslationId: l
}) => {
  const d = {
    assert: Di,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: c,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: i,
    issandbox: r,
    sectiontranslationid: l
  };
  return u && (d.captchaid = u, d.captchaword = g), new mw.Api().postWithToken("csrf", d).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new Do({
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
    dh(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new Do({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, jS = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: c,
  sectionId: u,
  isSandbox: g,
  progress: r
}) => {
  const l = {
    assert: Di,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: u,
    issandbox: g,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", l).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    dh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Do({ text: h, status: "error" });
  });
}, HS = (e) => {
  const t = {
    assert: Di,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, qS = () => {
  const e = {
    assert: Di,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Hc(n.cxcheckunreviewed.translation)
  );
}, GS = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, XS = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, WS = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), ht = {
  fetchTranslations: gh,
  fetchTranslationUnits: IS,
  fetchSegmentTranslation: RS,
  parseTemplateWikitext: zS,
  publishTranslation: OS,
  saveTranslation: jS,
  deleteTranslation: GS,
  fetchTranslatorStats: WS,
  deleteCXTranslation: XS,
  splitTranslation: HS,
  checkUnreviewedTranslations: qS
};
function KS(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield ht.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const YS = {
  fetchTranslatorStats: KS
}, JS = {
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
}, QS = {
  namespaced: !0,
  state: MS,
  getters: NS,
  actions: YS,
  mutations: JS
}, ZS = {
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
  appendixSectionTitles: Fv
}, ey = {
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
}, ty = {
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
}, ny = {
  namespaced: !0,
  state: ZS,
  getters: ey,
  actions: {},
  mutations: ty
}, oy = {
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
}, sy = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== te.EMPTY_TEXT_PROVIDER_KEY,
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
function ay(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield no.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const iy = { fetchNearbyPages: ay }, ry = {
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
}, ly = {
  namespaced: !0,
  state: oy,
  getters: sy,
  actions: iy,
  mutations: ry
}, cy = {
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
  previousRoute: null,
  /**
   * Whether the dashboard banner has been dismissed by the user
   */
  bannerDismissed: !1
}, uy = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, dy = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = te.getStorageKey(
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
  },
  dismissBanner: (e) => {
    e.bannerDismissed = !0;
  }
}, gy = {
  namespaced: !0,
  state: cy,
  getters: uy,
  actions: {},
  mutations: dy
}, py = window.Vuex.createStore, my = py({
  modules: { translator: QS, suggestions: ny, mediawiki: ly, application: gy }
});
function hy() {
  return ph().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ph() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const fy = typeof Proxy == "function", wy = "devtools-plugin:setup", _y = "plugin:settings:set";
let so, gc;
function vy() {
  var e;
  return so !== void 0 || (typeof window != "undefined" && window.performance ? (so = !0, gc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (so = !0, gc = global.perf_hooks.performance) : so = !1), so;
}
function Sy() {
  return vy() ? gc.now() : Date.now();
}
class yy {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const c = t.settings[i];
        o[i] = c.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const i = localStorage.getItem(s), c = JSON.parse(i);
      Object.assign(a, c);
    } catch (i) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch (c) {
        }
        a = i;
      },
      now() {
        return Sy();
      }
    }, n && n.on(_y, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...u) => {
        this.onQueue.push({
          method: c,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...u) => (this.targetQueue.push({
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
function Cy(e, t) {
  const n = e, o = ph(), s = hy(), a = fy && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(wy, e, t);
  else {
    const i = a ? new yy(n, s) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const mh = window.Vue.getCurrentInstance, To = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const qt = window.Vue.computed, Us = window.Vue.unref, by = window.Vue.watchEffect, hh = window.Vue.defineComponent, ky = window.Vue.reactive, fh = window.Vue.h, rr = window.Vue.provide, xy = window.Vue.ref, wh = window.Vue.watch, $y = window.Vue.shallowRef, Vy = window.Vue.shallowReactive, Ey = window.Vue.nextTick, gn = typeof window != "undefined";
function Ly(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Y = Object.assign;
function lr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = nt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Is = () => {
}, nt = Array.isArray;
function G(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Ay = /\/$/, Dy = (e) => e.replace(Ay, "");
function cr(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let u = t.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = Py(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function Ty(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function id(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function rd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Mn(t.matched[o], n.matched[s]) && _h(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Mn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function _h(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!By(e[n], t[n]))
      return !1;
  return !0;
}
function By(e, t) {
  return nt(e) ? ld(e, t) : nt(t) ? ld(t, e) : e === t;
}
function ld(e, t) {
  return nt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Py(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return G(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, i, c;
  for (i = 0; i < o.length; i++)
    if (c = o[i], c !== ".")
      if (c === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/");
}
var Os;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Os || (Os = {}));
var Rs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Rs || (Rs = {}));
function Fy(e) {
  if (!e)
    if (gn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Dy(e);
}
const My = /^[^#]+#/;
function Ny(e, t) {
  return e.replace(My, "#") + t;
}
function Uy(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Ti = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Iy(e) {
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
    t = Uy(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function cd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const pc = /* @__PURE__ */ new Map();
function Ry(e, t) {
  pc.set(e, t);
}
function zy(e) {
  const t = pc.get(e);
  return pc.delete(e), t;
}
let Oy = () => location.protocol + "//" + location.host;
function vh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), id(u, "");
  }
  return id(n, e) + o + s;
}
function jy(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: d }) => {
    const p = vh(e, location), m = n.value, h = t.value;
    let f = 0;
    if (d) {
      if (n.value = p, t.value = d, i && i === m) {
        i = null;
        return;
      }
      f = h ? d.position - h.position : 0;
    } else
      o(p);
    s.forEach((_) => {
      _(n.value, m, {
        delta: f,
        type: Os.pop,
        direction: f ? f > 0 ? Rs.forward : Rs.back : Rs.unknown
      });
    });
  };
  function u() {
    i = n.value;
  }
  function g(d) {
    s.push(d);
    const p = () => {
      const m = s.indexOf(d);
      m > -1 && s.splice(m, 1);
    };
    return a.push(p), p;
  }
  function r() {
    const { history: d } = window;
    d.state && d.replaceState(Y({}, d.state, { scroll: Ti() }), "");
  }
  function l() {
    for (const d of a)
      d();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", r, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: g,
    destroy: l
  };
}
function ud(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Ti() : null
  };
}
function Hy(e) {
  const { history: t, location: n } = window, o = {
    value: vh(e, n)
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
  function a(u, g, r) {
    const l = e.indexOf("#"), d = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + u : Oy() + e + u;
    try {
      t[r ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? G("Error with push/replace State", p) : console.error(p), n[r ? "replace" : "assign"](d);
    }
  }
  function i(u, g) {
    const r = Y({}, t.state, ud(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(u, r, !0), o.value = u;
  }
  function c(u, g) {
    const r = Y(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Ti()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && G(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const l = Y({}, ud(o.value, u, null), { position: r.position + 1 }, g);
    a(u, l, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function qy(e) {
  e = Fy(e);
  const t = Hy(e), n = jy(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = Y({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Ny.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Gy(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && G(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), qy(e);
}
function Xy(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Sh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const wn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, mc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var dd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(dd || (dd = {}));
const Wy = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Yy(t)}" via a navigation guard.`;
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
function Bo(e, t) {
  return {}.NODE_ENV !== "production" ? Y(new Error(Wy[e](t)), {
    type: e,
    [mc]: !0
  }, t) : Y(new Error(), {
    type: e,
    [mc]: !0
  }, t);
}
function Yt(e, t) {
  return e instanceof Error && mc in e && (t == null || !!(e.type & t));
}
const Ky = ["params", "query", "hash"];
function Yy(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Ky)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const gd = "[^/]+?", Jy = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Qy = /[.+*?^${}()[\]/\\]/g;
function Zy(e, t) {
  const n = Y({}, Jy, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const r = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let l = 0; l < g.length; l++) {
      const d = g[l];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        l || (s += "/"), s += d.value.replace(Qy, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = d;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || gd;
        if (w !== gd) {
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
      r.push(p);
    }
    o.push(r);
  }
  if (n.strict && n.end) {
    const g = o.length - 1;
    o[g][o[g].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function c(g) {
    const r = g.match(i), l = {};
    if (!r)
      return null;
    for (let d = 1; d < r.length; d++) {
      const p = r[d] || "", m = a[d - 1];
      l[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return l;
  }
  function u(g) {
    let r = "", l = !1;
    for (const d of e) {
      (!l || !r.endsWith("/")) && (r += "/"), l = !1;
      for (const p of d)
        if (p.type === 0)
          r += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, _ = m in g ? g[m] : "";
          if (nt(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = nt(_) ? _.join("/") : _;
          if (!w)
            if (f)
              d.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : l = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          r += w;
        }
    }
    return r || "/";
  }
  return {
    re: i,
    score: o,
    keys: a,
    parse: c,
    stringify: u
  };
}
function eC(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function tC(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = eC(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (pd(o))
      return 1;
    if (pd(s))
      return -1;
  }
  return s.length - o.length;
}
function pd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const nC = {
  type: 0,
  value: ""
}, oC = /[a-zA-Z0-9_]/;
function sC(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[nC]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${g}": ${p}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let c = 0, u, g = "", r = "";
  function l() {
    g && (n === 0 ? a.push({
      type: 0,
      value: g
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: g,
      regexp: r,
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
        u === "/" ? (g && l(), i()) : u === ":" ? (l(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : oC.test(u) ? d() : (l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
        break;
      case 2:
        u === ")" ? r[r.length - 1] == "\\" ? r = r.slice(0, -1) + u : n = 3 : r += u;
        break;
      case 3:
        l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--, r = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), l(), i(), s;
}
function aC(e, t, n) {
  const o = Zy(sC(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && G(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
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
function iC(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = fd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, l, d) {
    const p = !d, m = rC(r);
    ({}).NODE_ENV !== "production" && dC(m, l), m.aliasOf = d && d.record;
    const h = fd(t, r), f = [
      m
    ];
    if ("alias" in r) {
      const y = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const S of y)
        f.push(Y({}, m, {
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
        const k = l.record.path, x = k[k.length - 1] === "/" ? "" : "/";
        y.path = l.record.path + (S && x + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = aC(y, l, h), {}.NODE_ENV !== "production" && l && S[0] === "/" && gC(_, l), d ? (d.alias.push(_), {}.NODE_ENV !== "production" && uC(d, _)) : (w = w || _, w !== _ && w.alias.push(_), p && r.name && !hd(_) && i(r.name)), m.children) {
        const k = m.children;
        for (let x = 0; x < k.length; x++)
          a(k[x], _, d && d.children[x]);
      }
      d = d || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      i(w);
    } : Is;
  }
  function i(r) {
    if (Sh(r)) {
      const l = o.get(r);
      l && (o.delete(r), n.splice(n.indexOf(l), 1), l.children.forEach(i), l.alias.forEach(i));
    } else {
      const l = n.indexOf(r);
      l > -1 && (n.splice(l, 1), r.record.name && o.delete(r.record.name), r.children.forEach(i), r.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function u(r) {
    let l = 0;
    for (; l < n.length && tC(r, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[l].record.path || !yh(r, n[l])); )
      l++;
    n.splice(l, 0, r), r.record.name && !hd(r) && o.set(r.record.name, r);
  }
  function g(r, l) {
    let d, p = {}, m, h;
    if ("name" in r && r.name) {
      if (d = o.get(r.name), !d)
        throw Bo(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(r.params || {}).filter((y) => !d.keys.find((S) => S.name === y));
        w.length && G(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = d.record.name, p = Y(
        // paramsFromLocation is a new object
        md(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && md(r.params, d.keys.map((w) => w.name))
      ), m = d.stringify(p);
    } else if ("path" in r)
      m = r.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && G(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((w) => w.re.test(m)), d && (p = d.parse(m), h = d.record.name);
    else {
      if (d = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !d)
        throw Bo(1, {
          location: r,
          currentLocation: l
        });
      h = d.record.name, p = Y({}, l.params, r.params), m = d.stringify(p);
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
      meta: cC(f)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: g, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function md(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function rC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: lC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function lC(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function hd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function cC(e) {
  return e.reduce((t, n) => Y(t, n.meta), {});
}
function fd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function hc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function uC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(hc.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(hc.bind(null, n)))
      return G(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function dC(e, t) {
  t && t.record.name && !e.name && !e.path && G(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function gC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(hc.bind(null, n)))
      return G(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function yh(e, t) {
  return t.children.some((n) => n === e || yh(e, n));
}
const Ch = /#/g, pC = /&/g, mC = /\//g, hC = /=/g, fC = /\?/g, bh = /\+/g, wC = /%5B/g, _C = /%5D/g, kh = /%5E/g, vC = /%60/g, xh = /%7B/g, SC = /%7C/g, $h = /%7D/g, yC = /%20/g;
function qc(e) {
  return encodeURI("" + e).replace(SC, "|").replace(wC, "[").replace(_C, "]");
}
function CC(e) {
  return qc(e).replace(xh, "{").replace($h, "}").replace(kh, "^");
}
function fc(e) {
  return qc(e).replace(bh, "%2B").replace(yC, "+").replace(Ch, "%23").replace(pC, "%26").replace(vC, "`").replace(xh, "{").replace($h, "}").replace(kh, "^");
}
function bC(e) {
  return fc(e).replace(hC, "%3D");
}
function kC(e) {
  return qc(e).replace(Ch, "%23").replace(fC, "%3F");
}
function xC(e) {
  return e == null ? "" : kC(e).replace(mC, "%2F");
}
function js(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && G(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function $C(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(bh, " "), i = a.indexOf("="), c = js(i < 0 ? a : a.slice(0, i)), u = i < 0 ? null : js(a.slice(i + 1));
    if (c in t) {
      let g = t[c];
      nt(g) || (g = t[c] = [g]), g.push(u);
    } else
      t[c] = u;
  }
  return t;
}
function wd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = bC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (nt(o) ? o.map((a) => a && fc(a)) : [o && fc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function VC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = nt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const EC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), _d = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Bi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Vh = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), wc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Wo() {
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
function Fn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const u = (l) => {
      l === !1 ? c(Bo(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : Xy(l) ? c(Bo(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? LC(u, t, n) : u);
    let r = Promise.resolve(g);
    if (e.length < 3 && (r = r.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        r = r.then((d) => u._called ? d : (G(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !u._called) {
        G(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((l) => c(l));
  });
}
function LC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && G(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ur(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && G(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let c = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw G(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          G(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, G(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (AC(c)) {
          const g = (c.__vccOpts || c)[t];
          g && s.push(Fn(g, n, o, a, i));
        } else {
          let u = c();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (G(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = Ly(g) ? g.default : g;
            a.components[i] = r;
            const d = (r.__vccOpts || r)[t];
            return d && Fn(d, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function AC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function vd(e) {
  const t = To(Bi), n = To(Vh), o = qt(() => t.resolve(Us(e.to))), s = qt(() => {
    const { matched: u } = o.value, { length: g } = u, r = u[g - 1], l = n.matched;
    if (!r || !l.length)
      return -1;
    const d = l.findIndex(Mn.bind(null, r));
    if (d > -1)
      return d;
    const p = Sd(u[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Sd(r) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Mn.bind(null, u[g - 2])) : d
    );
  }), a = qt(() => s.value > -1 && PC(n.params, o.value.params)), i = qt(() => s.value > -1 && s.value === n.matched.length - 1 && _h(n.params, o.value.params));
  function c(u = {}) {
    return BC(u) ? t[Us(e.replace) ? "replace" : "push"](
      Us(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Is) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && gn) {
    const u = mh();
    if (u) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(g), by(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: qt(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const DC = /* @__PURE__ */ hh({
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
  useLink: vd,
  setup(e, { slots: t }) {
    const n = ky(vd(e)), { options: o } = To(Bi), s = qt(() => ({
      [yd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [yd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : fh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), TC = DC;
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
function PC(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!nt(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function Sd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const yd = (e, t, n) => e != null ? e : t != null ? t : n, FC = /* @__PURE__ */ hh({
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
    ({}).NODE_ENV !== "production" && NC();
    const o = To(wc), s = qt(() => e.route || o.value), a = To(_d, 0), i = qt(() => {
      let g = Us(a);
      const { matched: r } = s.value;
      let l;
      for (; (l = r[g]) && !l.components; )
        g++;
      return g;
    }), c = qt(() => s.value.matched[i.value]);
    rr(_d, qt(() => i.value + 1)), rr(EC, c), rr(wc, s);
    const u = xy();
    return wh(() => [u.value, c.value, e.name], ([g, r, l], [d, p, m]) => {
      r && (r.instances[l] = g, p && p !== r && g && g === d && (r.leaveGuards.size || (r.leaveGuards = p.leaveGuards), r.updateGuards.size || (r.updateGuards = p.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Mn(r, p) || !d) && (r.enterCallbacks[l] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, r = e.name, l = c.value, d = l && l.components[r];
      if (!d)
        return Cd(n.default, { Component: d, route: g });
      const p = l.props[r], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, f = fh(d, Y({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[r] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && gn && f.ref) {
        const _ = {
          depth: i.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (nt(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Cd(n.default, { Component: f, route: g }) || f
      );
    };
  }
});
function Cd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const MC = FC;
function NC() {
  const e = mh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function Ko(e, t) {
  const n = Y({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => GC(o, ["instances", "children", "aliasOf"]))
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
function Sa(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let UC = 0;
function IC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = UC++;
  Cy({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((r, l) => {
      r.instanceData && r.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Ko(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const d = l.__vrv_devtools;
        r.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Eh
        });
      }
      nt(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((d) => {
        let p = Dh, m = "";
        d.isExactActive ? (p = Ah, m = "This is exactly active") : d.isActive && (p = Lh, m = "This link is active"), r.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), wh(t.currentRoute, () => {
      u(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((r, l) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: r },
          groupId: l.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((r, l) => {
      const d = {
        guard: Sa("beforeEach"),
        from: Ko(l, "Current Location during this navigation"),
        to: Ko(r, "Target location")
      };
      Object.defineProperty(r.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: r.fullPath,
          data: d,
          groupId: r.meta.__navigationId
        }
      });
    }), t.afterEach((r, l, d) => {
      const p = {
        guard: Sa("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = Sa("❌")) : p.status = Sa("✅"), p.from = Ko(l, "Current Location during this navigation"), p.to = Ko(r, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: r.fullPath,
          time: s.now(),
          data: p,
          logType: d ? "warning" : "default",
          groupId: r.meta.__navigationId
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
      const r = g;
      let l = n.getRoutes().filter((d) => !d.parent);
      l.forEach(Ph), r.filter && (l = l.filter((d) => (
        // save matches state based on the payload
        _c(d, r.filter.toLowerCase())
      ))), l.forEach((d) => Bh(d, t.currentRoute.value)), r.rootNodes = l.map(Th);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === c && u();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === r.nodeId);
        d && (r.state = {
          options: zC(d)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function RC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function zC(e) {
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
        display: e.keys.map((o) => `${o.name}${RC(o)}`).join(" "),
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
const Eh = 15485081, Lh = 2450411, Ah = 8702998, OC = 2282478, Dh = 16486972, jC = 6710886;
function Th(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: OC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Dh
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Eh
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Ah
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Lh
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: jC
  });
  let o = n.__vd_id;
  return o == null && (o = String(HC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Th)
  };
}
let HC = 0;
const qC = /^\/(.*)\/([a-z]*)$/;
function Bh(e, t) {
  const n = t.matched.length && Mn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Mn(o, e.record))), e.children.forEach((o) => Bh(o, t));
}
function Ph(e) {
  e.__vd_match = !1, e.children.forEach(Ph);
}
function _c(e, t) {
  const n = String(e.re).match(qC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => _c(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = js(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => _c(i, t));
}
function GC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function XC(e) {
  const t = iC(e.routes, e), n = e.parseQuery || $C, o = e.stringifyQuery || wd, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Wo(), i = Wo(), c = Wo(), u = $y(wn);
  let g = wn;
  gn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = lr.bind(null, (v) => "" + v), l = lr.bind(null, xC), d = (
    // @ts-expect-error: intentionally avoid the type check
    lr.bind(null, js)
  );
  function p(v, D) {
    let A, F;
    return Sh(v) ? (A = t.getRecordMatcher(v), F = D) : F = v, t.addRoute(F, A);
  }
  function m(v) {
    const D = t.getRecordMatcher(v);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && G(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, D) {
    if (D = Y({}, D || u.value), typeof v == "string") {
      const N = cr(n, v, D.path), Q = t.resolve({ path: N.path }, D), J = s.createHref(N.fullPath);
      return {}.NODE_ENV !== "production" && (J.startsWith("//") ? G(`Location "${v}" resolved to "${J}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || G(`No match found for location with path "${v}"`)), Y(N, Q, {
        params: d(Q.params),
        hash: js(N.hash),
        redirectedFrom: void 0,
        href: J
      });
    }
    let A;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && G(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = Y({}, v, {
        path: cr(n, v.path, D.path).path
      });
    else {
      const N = Y({}, v.params);
      for (const Q in N)
        N[Q] == null && delete N[Q];
      A = Y({}, v, {
        params: l(N)
      }), D.params = l(D.params);
    }
    const F = t.resolve(A, D), j = v.hash || "";
    ({}).NODE_ENV !== "production" && j && !j.startsWith("#") && G(`A \`hash\` should always start with the character "#". Replace "${j}" with "#${j}".`), F.params = r(d(F.params));
    const ae = Ty(o, Y({}, v, {
      hash: CC(j),
      path: F.path
    })), z = s.createHref(ae);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? G(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : F.matched.length || G(`No match found for location with path "${"path" in v ? v.path : v}"`)), Y({
      fullPath: ae,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: j,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === wd ? VC(v.query) : v.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function w(v) {
    return typeof v == "string" ? cr(n, v, u.value.path) : Y({}, v);
  }
  function y(v, D) {
    if (g !== v)
      return Bo(8, {
        from: D,
        to: v
      });
  }
  function S(v) {
    return L(v);
  }
  function k(v) {
    return S(Y(w(v), { replace: !0 }));
  }
  function x(v) {
    const D = v.matched[v.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: A } = D;
      let F = typeof A == "function" ? A(v) : A;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = w(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw G(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Y({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : v.params
      }, F);
    }
  }
  function L(v, D) {
    const A = g = _(v), F = u.value, j = v.state, ae = v.force, z = v.replace === !0, N = x(A);
    if (N)
      return L(
        Y(w(N), {
          state: typeof N == "object" ? Y({}, j, N.state) : j,
          force: ae,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        D || A
      );
    const Q = A;
    Q.redirectedFrom = D;
    let J;
    return !ae && rd(o, F, A) && (J = Bo(16, { to: Q, from: F }), De(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (J ? Promise.resolve(J) : U(Q, F)).catch((Z) => Yt(Z) ? (
      // navigation redirects still mark the router as ready
      Yt(
        Z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Z : Ie(Z)
    ) : (
      // reject any unknown error
      Ee(Z, Q, F)
    )).then((Z) => {
      if (Z) {
        if (Yt(
          Z,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          rd(o, _(Z.to), Q) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (G(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${Q.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            Y({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, w(Z.to), {
              state: typeof Z.to == "object" ? Y({}, j, Z.to.state) : j,
              force: ae
            }),
            // preserve the original redirectedFrom if any
            D || Q
          );
      } else
        Z = K(Q, F, !0, z, j);
      return M(Q, F, Z), Z;
    });
  }
  function E(v, D) {
    const A = y(v, D);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function T(v) {
    const D = q.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(v) : v();
  }
  function U(v, D) {
    let A;
    const [F, j, ae] = WC(v, D);
    A = ur(F.reverse(), "beforeRouteLeave", v, D);
    for (const N of F)
      N.leaveGuards.forEach((Q) => {
        A.push(Fn(Q, v, D));
      });
    const z = E.bind(null, v, D);
    return A.push(z), X(A).then(() => {
      A = [];
      for (const N of a.list())
        A.push(Fn(N, v, D));
      return A.push(z), X(A);
    }).then(() => {
      A = ur(j, "beforeRouteUpdate", v, D);
      for (const N of j)
        N.updateGuards.forEach((Q) => {
          A.push(Fn(Q, v, D));
        });
      return A.push(z), X(A);
    }).then(() => {
      A = [];
      for (const N of ae)
        if (N.beforeEnter)
          if (nt(N.beforeEnter))
            for (const Q of N.beforeEnter)
              A.push(Fn(Q, v, D));
          else
            A.push(Fn(N.beforeEnter, v, D));
      return A.push(z), X(A);
    }).then(() => (v.matched.forEach((N) => N.enterCallbacks = {}), A = ur(ae, "beforeRouteEnter", v, D), A.push(z), X(A))).then(() => {
      A = [];
      for (const N of i.list())
        A.push(Fn(N, v, D));
      return A.push(z), X(A);
    }).catch((N) => Yt(
      N,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? N : Promise.reject(N));
  }
  function M(v, D, A) {
    c.list().forEach((F) => T(() => F(v, D, A)));
  }
  function K(v, D, A, F, j) {
    const ae = y(v, D);
    if (ae)
      return ae;
    const z = D === wn, N = gn ? history.state : {};
    A && (F || z ? s.replace(v.fullPath, Y({
      scroll: z && N && N.scroll
    }, j)) : s.push(v.fullPath, j)), u.value = v, De(v, D, A, z), Ie();
  }
  let H;
  function pe() {
    H || (H = s.listen((v, D, A) => {
      if (!de.listening)
        return;
      const F = _(v), j = x(F);
      if (j) {
        L(Y(j, { replace: !0 }), F).catch(Is);
        return;
      }
      g = F;
      const ae = u.value;
      gn && Ry(cd(ae.fullPath, A.delta), Ti()), U(F, ae).catch((z) => Yt(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : Yt(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        z.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((N) => {
        Yt(
          N,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === Os.pop && s.go(-1, !1);
      }).catch(Is), Promise.reject()) : (A.delta && s.go(-A.delta, !1), Ee(z, F, ae))).then((z) => {
        z = z || K(
          // after navigation, all matched components are resolved
          F,
          ae,
          !1
        ), z && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Yt(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-A.delta, !1) : A.type === Os.pop && Yt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), M(F, ae, z);
      }).catch(Is);
    }));
  }
  let $e = Wo(), wt = Wo(), Ve;
  function Ee(v, D, A) {
    Ie(v);
    const F = wt.list();
    return F.length ? F.forEach((j) => j(v, D, A)) : ({}.NODE_ENV !== "production" && G("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function Pt() {
    return Ve && u.value !== wn ? Promise.resolve() : new Promise((v, D) => {
      $e.add([v, D]);
    });
  }
  function Ie(v) {
    return Ve || (Ve = !v, pe(), $e.list().forEach(([D, A]) => v ? A(v) : D()), $e.reset()), v;
  }
  function De(v, D, A, F) {
    const { scrollBehavior: j } = e;
    if (!gn || !j)
      return Promise.resolve();
    const ae = !A && zy(cd(v.fullPath, 0)) || (F || !A) && history.state && history.state.scroll || null;
    return Ey().then(() => j(v, D, ae)).then((z) => z && Iy(z)).catch((z) => Ee(z, v, D));
  }
  const oe = (v) => s.go(v);
  let O;
  const q = /* @__PURE__ */ new Set(), de = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: S,
    replace: k,
    go: oe,
    back: () => oe(-1),
    forward: () => oe(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: wt.add,
    isReady: Pt,
    install(v) {
      const D = this;
      v.component("RouterLink", TC), v.component("RouterView", MC), v.config.globalProperties.$router = D, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Us(u)
      }), gn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !O && u.value === wn && (O = !0, S(s.location).catch((j) => {
        ({}).NODE_ENV !== "production" && G("Unexpected error when starting the router:", j);
      }));
      const A = {};
      for (const j in wn)
        Object.defineProperty(A, j, {
          get: () => u.value[j],
          enumerable: !0
        });
      v.provide(Bi, D), v.provide(Vh, Vy(A)), v.provide(wc, u);
      const F = v.unmount;
      q.add(v), v.unmount = function() {
        q.delete(v), q.size < 1 && (g = wn, H && H(), H = null, u.value = wn, O = !1, Ve = !1), F();
      }, {}.NODE_ENV !== "production" && gn && IC(v, D, t);
    }
  };
  function X(v) {
    return v.reduce((D, A) => D.then(() => T(A)), Promise.resolve());
  }
  return de;
}
function WC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((g) => Mn(g, c)) ? o.push(c) : n.push(c));
    const u = e.matched[i];
    u && (t.matched.find((g) => Mn(g, u)) || s.push(u));
  }
  return [n, o, s];
}
function Ae() {
  return To(Bi);
}
const KC = window.Vue.computed, Fh = () => {
  const { activeDashboardTabParameter: e } = B();
  return { desktopDashboardUrl: KC(() => Pm("Special:ContentTranslation", {
    "cx-dashboard": "desktop"
  }) + `#${e.value}`) };
}, YC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', JC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', QC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', ZC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', eb = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', tb = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', nb = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', ob = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', sb = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', ab = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', ib = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', rb = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', lb = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', cb = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', ub = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', db = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', gb = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', pb = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Mh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', mb = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', hb = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', fb = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', wb = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', _b = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', vb = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', Sb = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', yb = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', Cb = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', bb = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', kb = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', xb = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', $b = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20H4a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v13a2 2 0 01-2 2m-6.5-3.5.41-1.09L8 15l-1.09-.41-.41-1.09-.41 1.09L5 15l1.09.41zm2.982-.949.952-2.561 2.53-.964-2.53-.964L9.482 8.5l-.952 2.562-2.53.964 2.53.964zM6 10.5l.547-1.453L8 8.5l-1.453-.547L6 6.5l-.547 1.453L4 8.5l1.453.547z"/>', Vb = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', Eb = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', vc = YC, Nh = JC, Uh = {
  ltr: QC,
  shouldFlip: !0
}, Ih = {
  ltr: ZC,
  shouldFlip: !0
}, Pi = {
  ltr: eb,
  shouldFlip: !0
}, Lb = tb, Rh = nb, zh = ob, Ab = sb, Db = ab, Tb = ib, Uo = rb, Gc = lb, Xc = cb, bd = ub, Bb = db, Pb = {
  ltr: gb,
  shouldFlip: !0
}, Oh = pb, Fb = {
  langCodeMap: {
    ar: Mh
  },
  default: mb
}, Mb = {
  langCodeMap: {
    ar: Mh
  },
  default: hb
}, jh = fb, Wc = {
  ltr: wb,
  shouldFlip: !0
}, Nb = _b, Zs = {
  ltr: vb,
  shouldFlip: !0
}, Kc = {
  ltr: Sb,
  shouldFlip: !0
}, Ub = {
  ltr: yb,
  shouldFlip: !0
}, Hh = Cb, Ib = bb, qh = kb, Rb = xb, Gh = {
  ltr: $b,
  shouldFlip: !0
}, zb = Vb, Xh = Eb;
const dr = window.Vue.unref, Ob = window.Vue.resolveDirective, ao = window.Vue.createElementVNode, ya = window.Vue.withDirectives, jb = window.Vue.withCtx, Hb = window.Vue.openBlock, qb = window.Vue.createBlock, Gb = { class: "complementary" }, Xb = { class: "complementary mt-4" }, Wb = { class: "complementary" }, Kb = ["href"], Yb = window.Codex.CdxMessage, Jb = "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation", Qb = {
  __name: "CXDashboardBanner",
  setup(e) {
    const { desktopDashboardUrl: t } = Fh();
    return (n, o) => {
      const s = Ob("i18n");
      return Hb(), qb(dr(Yb), {
        icon: dr(Gh),
        class: "cx-dashboard-banner pa-4",
        "allow-user-dismiss": !0
      }, {
        default: jb(() => [
          ya(ao("h5", null, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-title"]
          ]),
          ya(ao("p", Gb, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-description"]
          ]),
          ao("p", Xb, [
            ya(ao("a", {
              target: "_blank",
              href: Jb
            }, null, 512), [
              [s, void 0, "cx-sx-dashboard-banner-learn-more"]
            ])
          ]),
          ao("p", Wb, [
            ya(ao("a", { href: dr(t) }, null, 8, Kb), [
              [s, void 0, "cx-sx-dashboard-banner-access-previous"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["icon"]);
    };
  }
}, Zb = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, ek = (e) => {
  const t = Zb(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const _t = window.Vue.unref, io = window.Vue.createVNode, Jt = window.Vue.createElementVNode, kd = window.Vue.renderSlot, xd = window.Vue.withModifiers, gr = window.Vue.toDisplayString, pr = window.Vue.withCtx, tk = window.Vue.openBlock, nk = window.Vue.createElementBlock, ok = window.Vue.createCommentVNode, sk = { class: "col shrink pe-4" }, ak = { class: "col" }, ik = { class: "cx-translation__details column justify-between ma-0" }, rk = { class: "row ma-0" }, lk = { class: "col grow" }, ck = { class: "col shrink ps-2" }, uk = ["dir", "textContent"], dk = ["dir", "textContent"], gk = ["textContent"], pk = window.Vuex.useStore, mk = window.Vue.computed, Wh = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: ki,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = pk(), s = (c, u) => {
      const g = o.getters["mediawiki/getPage"](c, u);
      return g == null ? void 0 : g.thumbnail;
    }, a = he(), i = mk(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = ek(n.translation.startTimestamp);
      return a.i18n(
        c[u.postfix],
        u.value
      );
    });
    return (c, u) => e.translation ? (tk(), nk("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = xd((g) => c.$emit("click"), ["stop"]))
    }, [
      Jt("div", sk, [
        io(_t($c), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Jt("div", ak, [
        Jt("div", ik, [
          Jt("div", rk, [
            Jt("div", lk, [
              kd(c.$slots, "title")
            ]),
            Jt("div", ck, [
              io(_t(Re), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = xd((g) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          kd(c.$slots, "mid-content"),
          io(_t(P), { class: "cx-translation__footer ma-0" }, {
            default: pr(() => [
              io(_t(C), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: pr(() => [
                  Jt("span", {
                    class: "mw-ui-autonym",
                    dir: _t(R.getDir)(e.translation.sourceLanguage),
                    textContent: gr(_t(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, uk),
                  io(_t(Re), {
                    icon: _t(d0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Jt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: _t(R.getDir)(e.translation.targetLanguage),
                    textContent: gr(_t(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, dk)
                ]),
                _: 1
              }),
              io(_t(C), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: pr(() => [
                  Jt("span", {
                    textContent: gr(i.value)
                  }, null, 8, gk)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : ok("", !0);
  }
};
const Yo = window.Vue.unref, $d = window.Vue.toDisplayString, hk = window.Vue.normalizeClass, fk = window.Vue.createElementVNode, mr = window.Vue.openBlock, wk = window.Vue.createElementBlock, Vd = window.Vue.createCommentVNode, Ed = window.Vue.createVNode, Ca = window.Vue.withCtx, Ld = window.Vue.createBlock, _k = ["lang", "textContent"], vk = ["lang", "textContent"], Sk = window.Vue.computed, yk = window.Vue.inject, Ck = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Ec,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = yk("colors").gray200, s = Sk(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Ae(), { setTranslationURLParams: i } = B(), c = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, g) => (mr(), Ld(Wh, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Yo(Em),
      onActionIconClicked: g[0] || (g[0] = (r) => u.$emit("delete-translation")),
      onClick: c
    }, {
      title: Ca(() => [
        fk("h5", {
          class: hk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: $d(e.translation.sourceTitle)
        }, null, 10, _k),
        e.translation.isLeadSectionTranslation ? Vd("", !0) : (mr(), wk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: $d(e.translation.sourceSectionTitle)
        }, null, 8, vk))
      ]),
      "mid-content": Ca(() => [
        e.translation.progress ? (mr(), Ld(Yo(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ca(() => [
            Ed(Yo(C), null, {
              default: Ca(() => [
                Ed(Yo(Tm), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Yo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Vd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, bk = window.Vuex.useStore, Kh = [], kk = (e, t, n) => Kh.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), xk = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Kh.push(o);
}, $k = () => {
  const e = bk();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !kk(t, n, o) && (s = yield ue.fetchSectionSuggestion(
      t,
      o,
      n
    ), xk(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Yh = "cx-translation-session-position-", Jh = () => Yh + mw.user.sessionId(), Qh = () => {
  const e = Jh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, Vk = function() {
  const e = Qh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Yh)).forEach((n) => mw.storage.remove(n));
  const t = Jh();
  mw.storage.set(t, e + 1);
};
let Sc = null;
function Ek(e) {
  if (Sc)
    return Promise.resolve(Sc);
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
function Lk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Ak(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = Qh(), u = {
    $schema: "/analytics/mediawiki/content_translation_event/1.8.0",
    wiki_db: n,
    user_name: i,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: c
  };
  let g;
  return a ? g = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, u, e))
  ) : g = Ek(i).then((r) => {
    Sc = r, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: Lk(r)
      })
    );
  }), g.then(() => {
    Vk();
  });
}
const ot = () => (e) => (e.access_method || (e.access_method = to ? "desktop" : "mobile web"), Ak(e)), Zh = window.Vue.ref, ef = Zh(null), yc = Zh(null), Dk = (e) => {
  ef.value = e;
}, Tk = (e) => {
  yc.value = e;
}, Fi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = ot();
  return {
    logDashboardTranslationStartEvent: () => {
      const i = {
        event_type: "dashboard_translation_start",
        event_source: ef.value,
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
      return yc.value && (i.event_context = yc.value), o.value ? (i.translation_source_section = o.value, i.translation_type = "section") : i.translation_type = "article", s(i);
    },
    setStartTranslationEventSource: Dk,
    setStartTranslationEventContext: Tk
  };
}, ea = () => {
  const e = Ae(), t = ih(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Fi();
  return (a, i, c, u, g = null, r = !0) => b(void 0, null, function* () {
    const l = yield t(
      i,
      c,
      a
    );
    l && (n(l), o(u), s(g), r && e.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const ba = window.Vue.withModifiers, hr = window.Vue.toDisplayString, fr = window.Vue.createElementVNode, it = window.Vue.unref, ka = window.Vue.openBlock, Ad = window.Vue.createBlock;
window.Vue.createCommentVNode;
const _n = window.Vue.createVNode, In = window.Vue.withCtx, Dd = window.Vue.createElementBlock, Bk = ["lang", "href", "textContent"], Pk = {
  key: 1,
  class: "flex"
}, Fk = { key: 2 }, Td = window.Vue.computed, Bd = window.Vue.ref, wr = window.Codex.CdxButton, _r = window.Codex.CdxIcon, Mk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Hc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Bd(!0), o = Bd(null), s = Td(() => {
      var l;
      return (l = o.value) == null ? void 0 : l.missingSections;
    }), a = Td(
      () => s.value && Object.keys(s.value)[0]
    );
    $k()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((l) => o.value = l).catch((l) => console.log(l)).finally(() => n.value = !1), Ae();
    const { setSectionURLParam: c } = B(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, g = ea(), r = (l) => {
      g(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), l && c(l);
    };
    return (l, d) => (ka(), Ad(Wh, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: In(() => [
        fr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: d[0] || (d[0] = ba(() => {
          }, ["stop"])),
          textContent: hr(e.translation.sourceTitle)
        }, null, 8, Bk)
      ]),
      "mid-content": In(() => [
        _n(it(P), { class: "ma-0" }, {
          default: In(() => [
            _n(it(C), null, {
              default: In(() => [
                n.value ? (ka(), Ad(it(et), { key: 0 })) : s.value ? (ka(), Dd("div", Pk, [
                  _n(it(wr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: d[1] || (d[1] = ba((p) => r(a.value), ["stop"]))
                  }, {
                    default: In(() => [
                      _n(it(_r), {
                        class: "me-1",
                        icon: it(vc)
                      }, null, 8, ["icon"]),
                      fr("span", null, hr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  _n(it(wr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": l.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: d[2] || (d[2] = ba((p) => r(null), ["stop"]))
                  }, {
                    default: In(() => [
                      _n(it(_r), { icon: it(Xc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (ka(), Dd("div", Fk, [
                  _n(it(wr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: d[3] || (d[3] = ba((p) => r(null), ["stop"]))
                  }, {
                    default: In(() => [
                      _n(it(_r), {
                        class: "me-1",
                        icon: it(vc)
                      }, null, 8, ["icon"]),
                      fr("span", null, hr(l.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Nk = window.Vuex.useStore, Uk = () => {
  const { commit: e } = Nk(), t = ot();
  return (n) => b(void 0, null, function* () {
    n.sectionTranslationId ? (yield ht.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    ) : (yield ht.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId), t({
      event_type: "dashboard_translation_discard",
      translation_id: n.sectionTranslationId,
      translation_source_language: n.sourceLanguage,
      translation_source_title: n.sourceTitle,
      translation_source_section: n.sourceSectionTitle,
      translation_target_language: n.targetLanguage,
      translation_target_title: n.targetTitle,
      translation_target_section: n.targetSectionTitle
    });
  });
};
const Ik = window.Vue.resolveDirective, vr = window.Vue.createElementVNode, Rk = window.Vue.withDirectives, Sr = window.Vue.unref, Pd = window.Vue.createVNode, Fd = window.Vue.withCtx, zk = window.Vue.openBlock, Ok = window.Vue.createBlock, jk = { class: "pa-4" }, Hk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, qk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: ki,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Uk(), i = () => {
      a(n.translation), s();
    };
    return (c, u) => {
      const g = Ik("i18n");
      return zk(), Ok(Sr(ft), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Fd(() => [
          vr("div", Hk, [
            Pd(Sr(Ne), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Pd(Sr(Ne), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: i
            }, null, 8, ["label"])
          ])
        ]),
        default: Fd(() => [
          vr("div", jk, [
            Rk(vr("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Gk(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Xk(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Md(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield Gk(e, t, n)).sort(R.sortByAutonym);
  });
}
function Xk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Wk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Kk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Yk = window.Vue.computed;
function Jk(e, t) {
  const n = Yk(() => {
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
const yr = window.Vue.ref, Cr = window.Vue.watch, Qk = window.Vue.computed;
function tf(e, t, n) {
  const o = yr(""), s = yr(-1), a = yr(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = Qk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Cr(e, () => {
    s.value = -1;
  }), Cr(t, () => {
    t.value && c.value.length > 0 && (s.value = 0);
  }), Cr(s, () => b(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function Yc(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const xa = window.Vue.renderSlot, Ce = window.Vue.unref, Zk = window.Vue.isRef, Nd = window.Vue.createVNode, Jo = window.Vue.withModifiers, Qo = window.Vue.withKeys, vn = window.Vue.createElementVNode, ex = window.Vue.resolveDirective, $a = window.Vue.withDirectives, br = window.Vue.renderList, kr = window.Vue.Fragment, Qt = window.Vue.openBlock, Zt = window.Vue.createElementBlock, Ud = window.Vue.toDisplayString, Va = window.Vue.normalizeClass, xr = window.Vue.createCommentVNode, tx = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, nx = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, ox = { class: "results px-3 pt-4" }, sx = { class: "results-header ps-8 pb-2" }, ax = { class: "results-languages--suggestions pa-0 ma-0" }, ix = ["lang", "dir", "aria-selected", "onClick", "textContent"], rx = { class: "results px-3 pt-4" }, lx = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, cx = ["lang", "dir", "aria-selected", "onClick", "textContent"], ux = ["aria-selected"], dx = { class: "no-results px-3 py-4" }, gx = { class: "ps-8" }, Ea = window.Vue.ref, px = window.Vue.watch, mx = window.Vue.onMounted, Id = window.Vue.computed, nf = {
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
      default: Wk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Ea(null), a = Ea(""), i = Ea([]), c = Ea(n.suggestions), u = Id(
      () => Kk(i.value)
    ), g = Id(() => {
      const S = i.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), r = (S) => o("select", S), l = () => o("close"), { autocompletion: d, onTabSelect: p } = Jk(
      a,
      i
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: _ } = tf(a, i, c), w = () => {
      if (a.value && n.languages.includes(a.value)) {
        r(a.value);
        return;
      }
      if (_.value) {
        r(_.value);
        return;
      }
      if (i.value.length === 1) {
        r(i.value[0]);
        return;
      }
    };
    return px(a, Yc(() => b(this, null, function* () {
      i.value = yield Md(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), mx(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), i.value = yield Md(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, k) => {
      const x = ex("i18n");
      return Qt(), Zt("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        xa(S.$slots, "search", {}, () => [
          vn("div", tx, [
            Nd(Ce(lc), {
              value: Ce(d),
              "onUpdate:value": k[0] || (k[0] = (L) => Zk(d) ? d.value = L : null),
              icon: Ce(vu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Nd(Ce(lc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": k[1] || (k[1] = (L) => a.value = L),
              class: "mw-ui-language-selector__search pa-4",
              icon: Ce(vu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Qo(Jo(w, ["prevent"]), ["enter"]),
                Qo(Jo(Ce(m), ["stop", "prevent"]), ["down"]),
                Qo(Jo(Ce(h), ["stop", "prevent"]), ["up"]),
                Qo(Jo(l, ["prevent"]), ["esc"]),
                Qo(Jo(Ce(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        vn("section", nx, [
          e.suggestions.length && !a.value ? xa(S.$slots, "suggestions", { key: 0 }, () => [
            vn("section", ox, [
              $a(vn("p", sx, null, 512), [
                [x, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              vn("ul", ax, [
                (Qt(!0), Zt(kr, null, br(e.suggestions, (L) => (Qt(), Zt("li", {
                  key: L,
                  class: Va(["language ma-0", { "language--selected": L === Ce(_) }]),
                  lang: L,
                  dir: Ce(R.getDir)(L),
                  "aria-selected": L === Ce(_) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (E) => r(L),
                  textContent: Ud(Ce(R.getAutonym)(L))
                }, null, 10, ix))), 128))
              ])
            ])
          ]) : xr("", !0),
          u.value.length ? xa(S.$slots, "search", { key: 1 }, () => [
            vn("section", rx, [
              e.suggestions.length && !a.value ? $a((Qt(), Zt("p", lx, null, 512)), [
                [x, void 0, "cx-sx-language-selector-all-languages"]
              ]) : xr("", !0),
              (Qt(!0), Zt(kr, null, br(u.value, (L, E) => (Qt(), Zt("ul", {
                key: E,
                class: Va(["results-languages pa-0 ma-0 mb-6", g.value])
              }, [
                (Qt(!0), Zt(kr, null, br(L, (T) => (Qt(), Zt("li", {
                  key: T,
                  class: Va(["language ma-0", { "language--selected": T === Ce(_) }]),
                  lang: T,
                  dir: Ce(R.getDir)(T),
                  role: "option",
                  "aria-selected": T === Ce(_) || null,
                  tabindex: "-1",
                  onClick: (U) => r(T),
                  textContent: Ud(Ce(R.getAutonym)(T))
                }, null, 10, cx))), 128)),
                e.allOptionEnabled && !a.value ? $a((Qt(), Zt("li", {
                  key: 0,
                  class: Va(["language ma-0", { "language--selected": Ce(_) === "all" }]),
                  role: "option",
                  "aria-selected": Ce(_) === "all" || null,
                  tabindex: "-1",
                  onClick: k[2] || (k[2] = (T) => r("all"))
                }, null, 10, ux)), [
                  [x, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : xr("", !0)
              ], 2))), 128))
            ])
          ]) : xa(S.$slots, "noresults", { key: 2 }, () => [
            vn("section", dx, [
              $a(vn("h3", gx, null, 512), [
                [x, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const hx = window.Vue.resolveDirective, Rd = window.Vue.withDirectives, Zo = window.Vue.openBlock, es = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const be = window.Vue.unref, zd = window.Vue.toDisplayString, vt = window.Vue.createVNode, Od = window.Vue.withModifiers, Rn = window.Vue.withCtx, fx = window.Vue.normalizeClass, wx = {
  key: 0,
  class: "mw-ui-autonym"
}, _x = ["lang", "dir", "textContent"], vx = {
  key: 0,
  class: "mw-ui-autonym"
}, Sx = ["lang", "dir", "textContent"], ts = window.Vue.computed, yx = window.Vue.inject, Cx = window.Vue.ref, jd = window.Codex.CdxButton, $r = window.Codex.CdxIcon, Si = {
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
    const n = e, o = t, s = yx("breakpoints"), a = ts(() => s.value.mobile), i = Cx(null), c = ts(() => !!i.value), u = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, l = ts(() => {
      if (!c.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[f];
    }), d = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(_, h);
    }, p = ts(
      () => n.selectedSourceLanguage === "all"
    ), m = ts(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = hx("i18n");
      return Zo(), es("div", {
        class: fx(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        vt(be(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Rn(() => [
            vt(be(C), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Rn(() => [
                vt(be(jd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Od(u, ["stop"])
                }, {
                  default: Rn(() => [
                    p.value ? Rd((Zo(), es("span", wx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Zo(), es("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: be(R.getDir)(e.selectedSourceLanguage),
                      textContent: zd(be(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, _x)),
                    vt(be($r), {
                      size: "x-small",
                      icon: be(bd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            vt(be(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Rn(() => [
                vt(be($r), { icon: be(Uh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            vt(be(C), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Rn(() => [
                vt(be(jd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Od(g, ["stop"])
                }, {
                  default: Rn(() => [
                    m.value ? Rd((Zo(), es("span", vx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Zo(), es("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: be(R.getDir)(e.selectedTargetLanguage),
                      textContent: zd(be(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Sx)),
                    vt(be($r), {
                      size: "x-small",
                      icon: be(bd)
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
        vt(be(ft), {
          value: c.value,
          "onUpdate:value": f[0] || (f[0] = (w) => c.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: r
        }, {
          default: Rn(() => [
            vt(be(nf), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: l.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: d,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const Hd = window.Vue.unref, bx = window.Vue.createVNode, La = window.Vue.createElementVNode, qd = window.Vue.toDisplayString, kx = window.Vue.openBlock, xx = window.Vue.createElementBlock, $x = { class: "cx-list-empty-placeholder pa-4" }, Vx = { class: "cx-list-empty-placeholder__icon-container" }, Ex = { class: "cx-list-empty-placeholder__icon" }, Lx = ["textContent"], Ax = ["textContent"], Dx = window.Codex.CdxIcon, of = {
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
    return (t, n) => (kx(), xx("div", $x, [
      La("div", Vx, [
        La("div", Ex, [
          bx(Hd(Dx), { icon: Hd(jh) }, null, 8, ["icon"])
        ])
      ]),
      La("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: qd(e.title)
      }, null, 8, Lx),
      La("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: qd(e.description)
      }, null, 8, Ax)
    ]));
  }
}, Tx = window.Vuex.useStore, Bx = window.Vue.ref, Aa = Bx({ draft: !1, published: !1 }), Io = () => {
  const e = Tx(), t = Mo(), n = (s) => b(void 0, null, function* () {
    let a = yield ht.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const i = {};
    for (const c of a) {
      const u = c.sourceLanguage;
      i[u] = i[u] || [], i[u].push(c);
    }
    Aa.value[s] = !0;
    for (const [c, u] of Object.entries(i))
      t(
        c,
        u.map((g) => g.sourceTitle)
      ), u.forEach((g) => {
        const { targetLanguage: r, targetTitle: l } = g, d = !!e.getters["mediawiki/getPage"](
          r,
          l
        );
        l && !d && e.commit(
          "mediawiki/addPage",
          new Fo({ title: l, pagelanguage: r })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Aa.value).filter(
        (i) => !Aa.value[i]
      ).map(
        (i) => n(i)
      );
      return Promise.all(a).catch((i) => {
        mw.log.error("[CX] Error while fetching translations", i);
      });
    },
    translationsFetched: Aa
  };
};
const Px = window.Vue.toDisplayString, Vr = window.Vue.normalizeClass, Gd = window.Vue.createElementVNode, Ft = window.Vue.openBlock, ro = window.Vue.createBlock, Da = window.Vue.createCommentVNode, Xd = window.Vue.unref, Wd = window.Vue.renderList, Kd = window.Vue.Fragment, Ta = window.Vue.createElementBlock, Fx = window.Vue.createVNode, Yd = window.Vue.withCtx, Mx = ["textContent"], Nx = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Ux = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ba = window.Vue.ref, St = window.Vue.computed, Ix = window.Vue.inject, Rx = window.Vuex.useStore, Jd = {
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
    const t = e, n = Ba("all"), o = Ba("all"), s = Rx(), { translationsFetched: a } = Io(), i = St(
      () => a.value[t.translationStatus]
    ), c = Ba(!1), u = Ba(null), g = St(
      () => t.translationStatus === "draft"
    ), r = St(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = St(
      () => n.value === "all"
    ), d = St(
      () => o.value === "all"
    ), p = St(
      () => r.value.filter(
        (k) => (l.value || k.sourceLanguage === n.value) && (d.value || k.targetLanguage === o.value)
      ).sort((k, x) => k.lastUpdatedTimestamp < x.lastUpdatedTimestamp)
    ), m = St(() => {
      const k = r.value.map(
        (x) => x.targetLanguage
      );
      return [...new Set(k)];
    }), h = St(() => {
      const k = r.value.map(
        (x) => x.sourceLanguage
      );
      return [...new Set(k)];
    }), f = (k) => {
      u.value = k, c.value = !0;
    }, _ = St(() => t.activeStatus === t.translationStatus), w = Ix("breakpoints"), y = St(() => w.value.mobile), S = St(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (k, x) => _.value ? (Ft(), ro(Xd(Ze), {
      key: 0,
      class: Vr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Yd(() => [
        Gd("div", {
          class: Vr(["cx-translation-list__header", S.value])
        }, [
          Gd("h3", {
            class: Vr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Px(k.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Mx),
          p.value.length ? (Ft(), ro(Si, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": x[0] || (x[0] = (L) => n.value = L),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": x[1] || (x[1] = (L) => o.value = L),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Da("", !0)
        ], 2)
      ]),
      default: Yd(() => [
        i.value && !p.value.length ? (Ft(), ro(of, {
          key: 0,
          title: k.$i18n("cx-sx-translation-list-empty-title"),
          description: k.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Da("", !0),
        i.value ? Da("", !0) : (Ft(), ro(Xd(et), { key: 1 })),
        g.value ? (Ft(), Ta("div", Nx, [
          (Ft(!0), Ta(Kd, null, Wd(p.value, (L) => (Ft(), ro(Ck, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (E) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Ft(), Ta("div", Ux, [
          (Ft(!0), Ta(Kd, null, Wd(p.value, (L) => (Ft(), ro(Mk, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (E) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Fx(qk, {
          modelValue: c.value,
          "onUpdate:modelValue": x[2] || (x[2] = (L) => c.value = L),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Da("", !0);
  }
}, zx = window.Vue.computed, Ox = window.Vuex.useStore, ze = () => {
  const e = Ox(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B();
  return { sectionSuggestion: zx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, jx = window.Vuex.useStore, Hx = window.Vue.computed, Bt = () => {
  const e = jx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: Hx(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (i) => i.status === "draft" && i.sourceTitle === s.value && i.sectionTitleMatches(o.value) && i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ) };
}, Qd = window.Vue.computed, qx = window.Vuex.useStore, st = () => {
  const e = qx(), { sectionSuggestion: t } = ze(), { currentTranslation: n } = Bt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = Qd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = Qd(() => {
    var g, r;
    const u = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: i, currentTargetPage: c };
}, Gx = window.Vue.ref, Xx = window.Vue.watchEffect, { sectionURLParameter: Hs } = B(), Wx = (e, t) => b(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield ue.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, g, r, l) => {
    const d = r < l.length - 1 ? l[r + 1].byteoffset : s;
    return u[g.line] = d - g.byteoffset, u;
  }, {});
  return Hs.value ? c[Hs.value] : Object.keys(c).filter((u) => a[u]).reduce((u, g) => u + c[g], 0);
}), Er = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Kx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Yx = (e, t) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  return Hs.value && o === 0 ? [
    "cx-sx-translation-confirmer-translation-time-single-section-minute",
    e
  ] : Hs.value && o > 0 ? [
    "cx-sx-translation-confirmer-translation-time-single-section-hour",
    o
  ] : [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t
  ];
}, sf = () => {
  const { currentSourcePage: e } = st(), { sectionSuggestion: t } = ze(), n = Gx(null);
  return Xx(() => {
    if (t.value)
      Wx(
        e.value,
        t.value
      ).then((o) => {
        const s = Hs.value ? 1 : Object.keys(t.value.missingSections).length;
        n.value = Yx(
          Er(o),
          s
        );
      });
    else if (e.value) {
      const o = Er(e.value.articleSize);
      n.value = Kx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Er };
};
const Lr = window.Vue.toDisplayString, Ar = window.Vue.openBlock, Zd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Cc = window.Vue.createElementVNode, Jx = window.Vue.unref, Qx = window.Vue.withCtx, Zx = window.Vue.createBlock, e2 = {
  key: 0,
  class: "cdx-info-chip__text"
}, t2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, n2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, o2 = /* @__PURE__ */ Cc("span", null, "/", -1), s2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, a2 = window.Codex.CdxInfoChip, Dr = window.Vue.computed, yi = {
  __name: "CustomInfoChip",
  props: {
    icon: {
      type: [Object, String],
      default: null
    },
    content: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, n = Dr(() => t.content.lastIndexOf("/")), o = Dr(() => t.content.slice(0, n.value)), s = Dr(() => t.content.slice(n.value + 1));
    return (a, i) => (Ar(), Zx(Jx(a2), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: Qx(() => [
        n.value === -1 ? (Ar(), Zd("div", e2, Lr(e.content), 1)) : (Ar(), Zd("div", t2, [
          Cc("span", n2, Lr(o.value), 1),
          o2,
          Cc("span", s2, Lr(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ie = window.Vue.unref, yt = window.Vue.createVNode, Sn = window.Vue.createElementVNode, Pa = window.Vue.toDisplayString, rt = window.Vue.withCtx, i2 = window.Vue.resolveDirective, Tr = window.Vue.withDirectives, zn = window.Vue.openBlock, lo = window.Vue.createBlock, co = window.Vue.createCommentVNode, eg = window.Vue.withModifiers, r2 = window.Vue.createElementBlock, l2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, c2 = { class: "col shrink pe-4" }, u2 = ["lang", "dir", "textContent"], d2 = ["lang", "dir", "textContent"], g2 = ["textContent"], p2 = ["textContent"], Br = window.Codex.CdxIcon, Ct = window.Vue.computed, m2 = window.Vue.inject, h2 = window.Vuex.useStore, bc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [No, eo, Lo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = h2(), { bytesToMinutes: o } = sf(), s = Ct(() => t.suggestion), a = Ct(
      () => s.value.sourceTitle || s.value.title
    ), i = Ct(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), c = Ct(
      () => {
        var w;
        return (w = s.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), u = Ct(() => {
      var w;
      return (w = i.value) == null ? void 0 : w.description;
    }), g = Ct(
      () => s.value instanceof eo
    ), r = Ct(
      () => s.value instanceof Lo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: d } = ye(n), p = Ct(
      () => r.value ? Rh : zh
    ), m = m2("colors"), h = Ct(
      () => r.value ? m.blue600 : "currentColor"
    ), f = Ct(() => {
      var w;
      return o((w = i.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = Ct(
      () => s.value instanceof eh || s.value instanceof th
    );
    return (w, y) => {
      const S = i2("i18n");
      return s.value ? (zn(), r2("div", l2, [
        Sn("div", c2, [
          yt(ie($c), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        yt(ie(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: rt(() => [
            yt(ie(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: rt(() => [
                yt(ie(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: rt(() => [
                    Sn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ie(R.getDir)(s.value.sourceLanguage),
                      textContent: Pa(a.value)
                    }, null, 8, u2)
                  ]),
                  _: 1
                }),
                yt(ie(C), { shrink: "" }, {
                  default: rt(() => [
                    Sn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ie(R.getDir)(s.value.sourceLanguage),
                      textContent: Pa(u.value)
                    }, null, 8, d2)
                  ]),
                  _: 1
                }),
                f.value && !g.value && !_.value ? (zn(), lo(ie(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: rt(() => [
                    Tr(Sn("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : co("", !0),
                g.value ? (zn(), lo(ie(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: rt(() => [
                    Tr(Sn("small", null, null, 512), [
                      [S, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (zn(), lo(ie(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: rt(() => [
                    yt(ie(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: rt(() => [
                        yt(ie(C), { grow: "" }, {
                          default: rt(() => [
                            Sn("small", {
                              textContent: Pa(ie(l))
                            }, null, 8, g2),
                            yt(ie(Br), {
                              icon: ie(Uh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Sn("small", {
                              textContent: Pa(ie(d))
                            }, null, 8, p2)
                          ]),
                          _: 1
                        }),
                        c.value ? (zn(), lo(ie(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: rt(() => [
                            Tr(Sn("small", null, null, 512), [
                              [S, [
                                c.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : co("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : co("", !0),
                _.value ? (zn(), lo(ie(C), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: rt(() => [
                    yt(yi, {
                      icon: ie(Pi),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : co("", !0)
              ]),
              _: 1
            }),
            yt(ie(C), { shrink: "" }, {
              default: rt(() => [
                r.value ? co("", !0) : (zn(), lo(ie(Br), {
                  key: 0,
                  icon: ie(Uo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = eg((k) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                yt(ie(Br), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: y[1] || (y[1] = eg((k) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : co("", !0);
    };
  }
}, f2 = "suggestion_filter_topic_area", w2 = "suggestion_filter_search_result_seed", _2 = "suggestion_filter_collections", v2 = "suggestion_filter_previous_edits", S2 = "suggestion_filter_popular_articles", af = (e) => {
  if (e.type === tt)
    return f2;
  if (e.type === mt)
    return w2;
  if (e.id === Se || e.type === Se)
    return _2;
  if (e.id === Tt)
    return v2;
  if (e.id === Xt)
    return S2;
}, kc = (e) => {
  if (e.type === tt || e.type === Se || e.type === mt)
    return e.id;
  if (e.id === Se)
    return "all-collections";
}, y2 = window.Vue.computed, tg = window.Vue.ref, ng = window.Vue.watch, Jc = (e, t) => {
  const o = tg([]), s = tg(!1), a = y2(
    () => o.value.slice(0, 4)
  ), i = Yc(() => b(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield no.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), c = () => {
    s.value = !0, o.value = [], i();
  };
  return ng(t, c), ng(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, og = window.Vue.ref, sg = window.Vue.watch, C2 = mw.loader.require("ext.cx.articletopics"), b2 = C2.flatMap((e) => e.topics), k2 = () => {
  const e = og(""), t = og({ topics: [], topic_areas: [], collections: [] }), n = he(), { pageCollections: o } = Ic(), { sourceLanguageURLParameter: s } = B(), a = (u) => (u = u.toLowerCase(), b2.filter(
    (g) => g.label.toLowerCase().includes(u)
  )), i = (u) => (u = u.toLowerCase(), o.value.filter(
    (g) => g.name.toLowerCase().includes(u)
  )), { searchResultsSlice: c } = Jc(s, e);
  return sg(c, () => {
    t.value.topics = c.value.map((u) => {
      var g;
      return {
        label: u.title,
        value: u.title,
        description: u.description,
        thumbnail: {
          url: (g = u.thumbnail) == null ? void 0 : g.source
        }
      };
    });
  }), sg(e, () => b(void 0, null, function* () {
    t.value.topic_areas = a(e.value).map(
      (u) => ({
        label: u.label,
        value: u.label,
        description: n.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: qh,
        filterType: tt,
        filterId: u.topicId
      })
    ), t.value.collections = i(e.value).map(
      (u) => ({
        label: u.name,
        value: u.name,
        description: n.i18n(
          "cx-sx-suggestions-filter-search-results-collections-default-description",
          u.articlesCount
        ),
        icon: Pi,
        filterType: Se,
        filterId: u.name
      })
    );
  })), { searchInput: e, searchResults: t };
};
const se = window.Vue.unref, lt = window.Vue.createVNode, On = window.Vue.withCtx, x2 = window.Vue.resolveDirective, yn = window.Vue.createElementVNode, Pr = window.Vue.withDirectives, ag = window.Vue.toDisplayString, $2 = window.Vue.createTextVNode, V2 = window.Vue.vShow, E2 = window.Vue.isRef, ig = window.Vue.renderList, rg = window.Vue.Fragment, Mt = window.Vue.openBlock, Cn = window.Vue.createElementBlock, L2 = window.Vue.normalizeClass, lg = window.Vue.createBlock, Fr = window.Vue.createCommentVNode, A2 = { class: "sx-suggestions-filters" }, D2 = { class: "mb-0" }, T2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, B2 = { class: "mb-3" }, P2 = { class: "px-4 pb-4 pt-7" }, F2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, M2 = { class: "sx-suggestions-filters__group-label mb-3" }, N2 = { class: "sx-suggestions-filters__group-filters mb-3" }, U2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, I2 = { key: 0 }, R2 = { key: 1 }, z2 = { key: 2 }, Mr = window.Vue.ref, cg = window.Vue.computed, O2 = window.Vue.inject, ug = window.Codex.CdxButton, j2 = window.Codex.CdxIcon, H2 = window.Codex.CdxTextInput, Nr = window.Codex.CdxMenu, q2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = {
      [Tt]: Xh,
      [Xt]: Oh,
      [Se]: Pi,
      [tt]: null,
      [mt]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: i, findSelectedFilter: c } = Rc(), u = ot(), g = () => {
      m(), n("update:modelValue", !1);
    }, r = () => {
      u({ event_type: "suggestion_filters_close" }), g();
    }, l = () => {
      p.value && (u({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: kc(
          p.value
        )
      }), i(p.value)), g();
    }, d = Mr(!1), p = Mr(null), m = () => {
      p.value = null, d.value = !1;
    }, h = (U) => {
      const M = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: af(U),
        event_context: kc(U)
      };
      u(M), p.value = U, d.value = !0;
    }, f = (U) => p.value ? p.value.id === U.id && p.value.type === U.type : a(U), _ = O2("breakpoints"), w = cg(() => _.value.mobile), { getFilterProvider: y } = zc(), { searchInput: S, searchResults: k } = k2(), x = cg(
      () => p.value || c()
    ), L = Mr(null), E = (U) => {
      h({
        type: mt,
        id: U.label,
        label: U.label
      }), S.value = "";
    }, T = (U) => {
      h({
        type: U.filterType,
        id: U.filterId,
        label: U.label
      }), S.value = "";
    };
    return (U, M) => {
      const K = x2("i18n");
      return Mt(), lg(se(ft), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: w.value,
        header: !1
      }, {
        default: On(() => [
          yn("section", A2, [
            lt(se(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: On(() => [
                lt(se(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: On(() => [
                    lt(se(ug), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": U.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: r
                    }, {
                      default: On(() => [
                        lt(se(j2), { icon: se(Uo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                lt(se(C), {
                  grow: "",
                  align: "center"
                }, {
                  default: On(() => [
                    Pr(yn("h5", D2, null, 512), [
                      [K, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                lt(se(C), {
                  shrink: "",
                  align: "start"
                }, {
                  default: On(() => [
                    Pr(lt(se(ug), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: l
                    }, {
                      default: On(() => [
                        $2(ag(U.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [V2, d.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            yn("div", T2, [
              Pr(yn("h5", B2, null, 512), [
                [K, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              yn("div", null, [
                lt(yi, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: x.value.label,
                  icon: o[se(y)(x.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            yn("div", P2, [
              lt(se(H2), {
                modelValue: se(S),
                "onUpdate:modelValue": M[0] || (M[0] = (H) => E2(S) ? S.value = H : null),
                placeholder: U.$i18n("cx-sx-suggestions-filter-search-input-placeholder"),
                "input-type": "search",
                "start-icon": se(qh),
                clearable: !!se(S)
              }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
            ]),
            se(S) ? (Mt(), Cn("div", U2, [
              se(k).topics.length ? (Mt(), Cn("div", I2, [
                lt(se(Nr), {
                  selected: L.value,
                  "onUpdate:selected": M[1] || (M[1] = (H) => L.value = H),
                  expanded: !0,
                  "menu-items": se(k).topics,
                  "show-thumbnail": "",
                  onMenuItemClick: E
                }, null, 8, ["selected", "menu-items"])
              ])) : Fr("", !0),
              se(k).topic_areas.length ? (Mt(), Cn("div", R2, [
                lt(se(Nr), {
                  selected: L.value,
                  "onUpdate:selected": M[2] || (M[2] = (H) => L.value = H),
                  expanded: !0,
                  "menu-items": se(k).topic_areas,
                  onMenuItemClick: T
                }, null, 8, ["selected", "menu-items"])
              ])) : Fr("", !0),
              se(k).collections.length ? (Mt(), Cn("div", z2, [
                lt(se(Nr), {
                  selected: L.value,
                  "onUpdate:selected": M[3] || (M[3] = (H) => L.value = H),
                  expanded: !0,
                  "menu-items": se(k).collections,
                  onMenuItemClick: T
                }, null, 8, ["selected", "menu-items"])
              ])) : Fr("", !0)
            ])) : (Mt(), Cn("div", F2, [
              (Mt(!0), Cn(rg, null, ig(se(s), (H) => (Mt(), Cn("div", {
                key: H.id,
                class: "sx-suggestions-filters__group"
              }, [
                yn("div", M2, ag(H.label), 1),
                yn("div", N2, [
                  (Mt(!0), Cn(rg, null, ig(H.filters, (pe) => (Mt(), lg(yi, {
                    key: pe.id,
                    class: L2(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                      "sx-suggestions-filters__filter--active": f(pe)
                    }]),
                    icon: o[se(y)(pe)],
                    content: pe.label,
                    onClick: ($e) => h(pe)
                  }, null, 8, ["class", "icon", "content", "onClick"]))), 128))
                ])
              ]))), 128))
            ]))
          ])
        ]),
        _: 1
      }, 8, ["value", "fullscreen"]);
    };
  }
};
const Ur = window.Vue.unref, Fa = window.Vue.openBlock, dg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const G2 = window.Vue.renderList, X2 = window.Vue.Fragment, gg = window.Vue.createElementBlock, W2 = window.Vue.normalizeClass, K2 = window.Vue.createVNode, Y2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, pg = window.Vue.ref, J2 = window.Vue.computed, mg = window.Vue.watch, Q2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = he(), n = ot(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: i
    } = Rc(), c = pg(!1), u = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), c.value = !0;
    }, g = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: af(h),
        event_context: kc(h)
      };
      n(f), s(h);
    }, r = {
      [Tt]: Xh,
      [Xt]: Oh,
      [Se]: Pi,
      [tt]: null
    }, { getFilterProvider: l } = zc(), d = (h) => ({
      id: h.id,
      type: h.type,
      icon: r[l(h)],
      label: h.label,
      action: g
    }), p = pg(o());
    mg(c, (h) => {
      h || (p.value = o());
    }), mg(i, (h) => {
      h || (p.value = o());
    });
    const m = J2(() => [
      ...p.value.map(d),
      {
        id: "more",
        icon: Xc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: u
      }
    ]);
    return (h, f) => Ur(i) ? (Fa(), dg(Ur(et), { key: 0 })) : (Fa(), gg("div", Y2, [
      (Fa(!0), gg(X2, null, G2(m.value, (_) => (Fa(), dg(yi, {
        key: _.label,
        class: W2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": Ur(a)(_) }]),
        icon: _.icon,
        content: _.label,
        onClick: (w) => _.action(_)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      K2(q2, {
        modelValue: c.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => c.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, uo = window.Vue.computed, hg = window.Vue.ref, Z2 = window.Vue.watch, e8 = window.Vuex.useStore, t8 = () => {
  const e = e8(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Mc(), i = ot(), c = uo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = uo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = hg(0), r = hg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, d = 4, p = uo(
    () => a(g.value)
  ), m = uo(
    () => s(r.value)
  ), h = () => {
    k(), T(), x(), U();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = Oc(), w = (M) => M.length === l, y = uo(
    () => w(m.value)
  ), S = uo(
    () => w(p.value)
  ), k = () => {
    const M = (g.value + 1) % d, K = w(
      a(M)
    );
    (!S.value || !K) && f();
  }, x = () => {
    const M = (r.value + 1) % d, K = w(
      s(M)
    );
    (!y.value || !K) && _();
  }, L = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", M), k();
  }, E = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", M), x();
  }, T = () => g.value = (g.value + 1) % d, U = () => r.value = (r.value + 1) % d;
  return Z2(
    o,
    () => {
      r.value = 0, x(), g.value = 0, k();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: E,
    discardSectionSuggestion: L,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, n8 = window.Vuex.useStore, Qc = () => {
  const e = n8(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Oc(), o = (g, r, l) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === r && d.sourceTitle === l
  ), s = (g) => b(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: l, targetLanguage: d } = g;
    yield ue.markFavorite(r, l, d);
    const p = new Lo({
      title: r,
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
    markFavoriteSuggestion: (g, r, l) => b(void 0, null, function* () {
      const d = o(
        r,
        l,
        g
      );
      d && (e.commit(
        "suggestions/removePageSuggestionFromList",
        d
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](r, l, g);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield ue.markFavorite(
        g,
        r,
        l
      );
      const m = new Lo({
        title: g,
        sourceLanguage: r,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), ue.unmarkFavorite(g))
  };
}, o8 = "suggestion_no_seed", s8 = "suggestion_recent_edit", a8 = "suggestion_topic_area", i8 = "suggestion_search_result_seed", r8 = "suggestion_featured", l8 = "suggestion_collections", c8 = () => {
  const { currentSuggestionFilters: e } = B(), { defaultSeedsFetched: t } = Uc();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === Tt)
      return t.value ? o8 : s8;
    if (n === tt)
      return a8;
    if (n === mt)
      return i8;
    if (o === Xt)
      return r8;
    if (o === Se || n === Se)
      return l8;
    throw new Error("Event source cannot be empty");
  };
};
const fg = window.Vue.normalizeClass, u8 = window.Vue.resolveDirective, ns = window.Vue.createElementVNode, Ma = window.Vue.withDirectives, ge = window.Vue.unref, Ge = window.Vue.openBlock, Nt = window.Vue.createBlock, bn = window.Vue.createCommentVNode, Ir = window.Vue.createVNode, os = window.Vue.withCtx, wg = window.Vue.renderList, _g = window.Vue.Fragment, Rr = window.Vue.createElementBlock, d8 = window.Vue.toDisplayString, g8 = window.Vue.createTextVNode, p8 = window.Vue.vShow, m8 = { class: "cx-suggestion-list" }, h8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, f8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, w8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Ut = window.Vue.computed, _8 = window.Vue.inject, v8 = window.Vue.ref, S8 = window.Codex.CdxButton, y8 = window.Codex.CdxIcon, C8 = window.Vuex.useStore, b8 = {
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
    } = B(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = Ks(), i = lh(), c = (oe) => i(oe, n.value), u = (oe) => i(t.value, oe), g = c8(), r = ea(), l = (oe) => {
      r(
        oe.sourceTitle,
        oe.sourceLanguage,
        oe.targetLanguage,
        g(),
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
    } = t8(), k = v8(null), x = ot(), L = () => {
      x({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), k.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: E, markFavoritePageSuggestion: T } = Qc(), U = _8("breakpoints"), M = Ut(() => U.value.mobile), K = Ut(
      () => M.value ? null : "pb-2 flex justify-between items-center"
    ), H = C8(), pe = Ut(
      () => H.state.suggestions.isPageSuggestionsFetchPending
    ), $e = Ut(
      () => H.state.suggestions.isSectionSuggestionsFetchPending
    ), wt = Ut(
      () => pe.value || _.value && !y.value
    ), Ve = Ut(
      () => $e.value || w.value && !S.value
    ), Ee = Ut(
      () => pe.value || _.value || d.value.length > 0
    ), Pt = Ut(
      () => $e.value || w.value || p.value.length > 0
    ), Ie = Ut(
      () => !Ee.value && !Pt.value
    ), De = Ut(
      () => !w.value && !_.value && !pe.value && !$e.value && !Ie.value
    );
    return (oe, O) => {
      const q = u8("i18n");
      return Ma((Ge(), Rr("div", m8, [
        Ir(ge(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: os(() => [
            ns("div", {
              class: fg(["cx-suggestion-list__header-card__header px-4", K.value])
            }, [
              Ma(ns("h3", {
                class: fg(["mw-ui-card__title mb-0", { "py-3": M.value }])
              }, null, 2), [
                [q, void 0, "cx-suggestionlist-title"]
              ]),
              M.value ? bn("", !0) : (Ge(), Nt(Si, {
                key: 0,
                "source-languages": ge(s),
                "target-languages": ge(a),
                "selected-source-language": ge(t),
                "selected-target-language": ge(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Ir(Q2)
          ]),
          default: os(() => [
            M.value ? (Ge(), Nt(Si, {
              key: 0,
              "source-languages": ge(s),
              "target-languages": ge(a),
              "selected-source-language": ge(t),
              "selected-target-language": ge(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : bn("", !0)
          ]),
          _: 1
        }),
        Ee.value ? (Ge(), Nt(ge(Ze), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: k,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: os(() => [
            Ma(ns("h5", h8, null, 512), [
              [q, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ge(!0), Rr(_g, null, wg(ge(d), (de, X) => (Ge(), Nt(bc, {
              key: `page-suggestion-${X}`,
              suggestion: de,
              onClose: (v) => ge(m)(de),
              onClick: (v) => l(de),
              onBookmark: (v) => ge(T)(de)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            wt.value ? (Ge(), Nt(ge(et), { key: 0 })) : bn("", !0)
          ]),
          _: 1
        }, 512)) : bn("", !0),
        Pt.value ? (Ge(), Nt(ge(Ze), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: os(() => [
            Ma(ns("h5", f8, null, 512), [
              [q, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ge(!0), Rr(_g, null, wg(ge(p), (de, X) => (Ge(), Nt(bc, {
              key: `section-suggestion-${X}`,
              class: "ma-0",
              suggestion: de,
              onClose: (v) => ge(h)(de),
              onClick: (v) => l(de),
              onBookmark: (v) => ge(E)(de)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Ve.value ? (Ge(), Nt(ge(et), { key: 0 })) : bn("", !0)
          ]),
          _: 1
        })) : bn("", !0),
        Ie.value ? (Ge(), Nt(of, {
          key: 2,
          title: oe.$i18n("cx-sx-suggestion-list-empty-title"),
          description: oe.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : bn("", !0),
        ns("div", w8, [
          De.value ? (Ge(), Nt(ge(S8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: L
          }, {
            default: os(() => [
              Ir(ge(y8), {
                class: "me-1",
                icon: ge(Hh)
              }, null, 8, ["icon"]),
              g8(" " + d8(oe.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : bn("", !0)
        ])
      ], 512)), [
        [p8, e.active]
      ]);
    };
  }
}, k8 = window.Vue.resolveDirective, x8 = window.Vue.createElementVNode, $8 = window.Vue.withDirectives, V8 = window.Vue.renderList, E8 = window.Vue.Fragment, zr = window.Vue.openBlock, L8 = window.Vue.createElementBlock, vg = window.Vue.unref, Sg = window.Vue.createBlock, yg = window.Vue.withCtx, A8 = window.Vue.createCommentVNode, D8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, T8 = window.Vue.computed, B8 = window.Vuex.useStore, P8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = B8(), n = T8(() => t.state.suggestions.favorites || []), o = ea(), s = (i) => o(
      i.title,
      i.sourceLanguage,
      i.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Qc();
    return (i, c) => {
      const u = k8("i18n");
      return n.value.length ? (zr(), Sg(vg(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: yg(() => [
          $8(x8("h3", D8, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: yg(() => [
          (zr(!0), L8(E8, null, V8(n.value, (g, r) => (zr(), Sg(bc, {
            key: `favorite-${r}`,
            suggestion: g,
            onClick: (l) => s(g),
            onBookmark: (l) => vg(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : A8("", !0);
    };
  }
};
const F8 = window.Vue.resolveDirective, Na = window.Vue.createElementVNode, M8 = window.Vue.withDirectives, N8 = window.Vue.renderList, U8 = window.Vue.Fragment, Or = window.Vue.openBlock, jr = window.Vue.createElementBlock, I8 = window.Vue.unref, R8 = window.Vue.createVNode, z8 = window.Vue.toDisplayString, O8 = { class: "cx-help-panel pa-4" }, j8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, H8 = ["href", "target"], q8 = ["textContent"], G8 = window.Vue.computed, X8 = window.Codex.CdxIcon, W8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const { desktopDashboardUrl: t } = Fh(), n = he(), o = G8(() => {
      const s = [
        {
          icon: Mb,
          label: n.i18n("cx-sx-dashboard-help-panel-more-info-label"),
          href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
          target: "_blank"
        },
        {
          icon: Pb,
          label: n.i18n("cx-sx-dashboard-help-panel-feedback-label"),
          href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
          target: "_blank"
        }
      ];
      return to && s.push({
        icon: Gh,
        label: n.i18n("cx-sx-dashboard-banner-access-previous"),
        href: t.value,
        target: "_self"
      }), s;
    });
    return (s, a) => {
      const i = F8("i18n");
      return Or(), jr("div", O8, [
        M8(Na("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Na("ul", j8, [
          (Or(!0), jr(U8, null, N8(o.value, (c, u) => (Or(), jr("li", {
            key: u,
            class: "mt-4"
          }, [
            Na("a", {
              href: c.href,
              target: c.target
            }, [
              R8(I8(X8), {
                class: "me-2",
                icon: c.icon
              }, null, 8, ["icon"]),
              Na("span", {
                textContent: z8(c.label)
              }, null, 8, q8)
            ], 8, H8)
          ]))), 128))
        ])
      ]);
    };
  }
};
const K8 = window.Vue.resolveDirective, go = window.Vue.createElementVNode, Hr = window.Vue.withDirectives, Cg = window.Vue.toDisplayString, qr = window.Vue.unref, Gr = window.Vue.withCtx, Xr = window.Vue.createVNode, Y8 = window.Vue.openBlock, J8 = window.Vue.createElementBlock, Q8 = { class: "cx-stats-panel pa-4" }, Z8 = ["textContent"], e$ = { class: "cx-stats-panel__monthly-stats-label" }, t$ = ["textContent"], n$ = { class: "cx-stats-panel__total-stats-label" }, o$ = window.Vue.ref, bg = window.Vue.computed, s$ = window.Vue.watch, a$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = bg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.count) || 0;
    }), s = bg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.delta) || 0;
    }), a = o$(null);
    return s$(
      () => t.stats,
      () => {
        const i = t.stats, c = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), g = u.reduce(
          (S, k) => Math.max(S, i[k].delta),
          0
        ), r = u.map((S) => i[S].delta), l = a.value.getBoundingClientRect().width, d = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = d;
        const p = 4, m = 6, h = 50, f = (h - p) / g;
        let _ = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), y = r.slice(
          Math.max(r.length - w, 0)
        );
        y.forEach((S, k) => {
          k === y.length - 1 && (c.fillStyle = "#36c");
          const x = h - S * f;
          c.fillRect(_, x, m, S * f), _ += m + p;
        });
      }
    ), (i, c) => {
      const u = K8("i18n");
      return Y8(), J8("div", Q8, [
        Hr(go("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Xr(qr(P), null, {
          default: Gr(() => [
            Xr(qr(C), { class: "cx-stats-panel__monthly-stats" }, {
              default: Gr(() => [
                go("h3", {
                  textContent: Cg(s.value)
                }, null, 8, Z8),
                Hr(go("h5", e$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Xr(qr(C), { class: "cx-stats-panel__total-stats" }, {
              default: Gr(() => [
                go("h3", {
                  textContent: Cg(o.value)
                }, null, 8, t$),
                Hr(go("h5", n$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        go("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, rf = () => {
  const e = ot();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const i$ = window.Vue.renderSlot, r$ = window.Vue.unref, l$ = window.Vue.createVNode, c$ = window.Vue.createElementVNode, u$ = window.Vue.openBlock, d$ = window.Vue.createElementBlock, g$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, p$ = { class: "col-12 ma-0 pa-0" }, m$ = {
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
    const n = t, o = rf(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, i) => (u$(), d$("footer", g$, [
      c$("div", p$, [
        i$(a.$slots, "default", {}, () => [
          l$(r$(qs), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, h$ = window.Vuex.useStore, f$ = () => {
  const e = h$(), t = Mo();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield ue.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), ue.fetchSectionSuggestion(
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
        a.map((i) => i.title)
      );
  });
}, w$ = window.Vuex.useStore, lf = () => {
  const e = w$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: i } = Im(), { previousRoute: c } = ye(e), u = ot(), g = () => {
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
      mintforreaders: "preselect_mint_for_readers"
    }, p = t("campaign");
    return d[p];
  }, r = () => {
    if (n.value)
      return g() || "direct_preselect";
    const p = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[c.value];
    return p || (i(o.value) ? g() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    const d = r(), p = {
      event_type: "dashboard_open",
      event_source: d,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return d === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), u(p);
  }, getEventSource: r };
}, _$ = window.Vue.watch, v$ = () => {
  const { fetchAllTranslations: e } = Io(), t = ah(), n = f$(), { fetchPageCollections: o } = Ic(), { logDashboardOpenEvent: s } = lf(), { applicationLanguagesInitialized: a } = ch();
  return () => b(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield e(), _$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, kg = window.Vue.computed, S$ = window.Vue.ref, y$ = window.Vue.watch, C$ = window.Vue.watchEffect, b$ = window.Vuex.useStore, k$ = ["suggestions", "draft", "published"], x$ = () => {
  const e = b$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), { translationsFetched: o } = Io(), s = S$(null);
  if (k$.includes(t.value))
    s.value = t.value;
  else {
    const a = kg(
      () => o.value.draft
    ), i = kg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", y$(a, (c) => {
      c && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return C$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, $$ = window.Vue.computed, V$ = () => {
  const e = he();
  return $$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: i0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: bi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: a0,
        type: "text"
      }
    }
  ]);
};
const re = window.Vue.unref, ke = window.Vue.createVNode, E$ = window.Vue.toDisplayString, L$ = window.Vue.createTextVNode, bt = window.Vue.withCtx, Ua = window.Vue.openBlock, Wr = window.Vue.createBlock, Kr = window.Vue.createCommentVNode, A$ = window.Vue.vShow, D$ = window.Vue.withDirectives, T$ = window.Vue.isRef, B$ = window.Vue.createElementBlock, xg = window.Vue.computed, P$ = window.Vuex.useStore, F$ = window.Codex.CdxButton, M$ = window.Codex.CdxIcon, N$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Ae(), n = ot(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    v$()();
    const a = P$();
    a.dispatch("translator/fetchTranslatorStats");
    const i = xg(() => a.state.translator.translatorStats), c = xg(() => a.state.application.bannerDismissed), u = () => {
      a.commit("application/dismissBanner");
    }, g = x$(), r = V$(), l = rf(), d = (p) => {
      l(p), g.value = p;
    };
    return (p, m) => (Ua(), B$("div", null, [
      ke(re(P), { class: "ma-0 pb-4" }, {
        default: bt(() => [
          ke(re(F$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: bt(() => [
              ke(re(M$), {
                class: "me-1",
                icon: re(vc)
              }, null, 8, ["icon"]),
              L$(" " + E$(p.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      re(to) && !c.value ? (Ua(), Wr(re(P), {
        key: 0,
        class: "ma-0",
        align: "start"
      }, {
        default: bt(() => [
          ke(re(C), { class: "col-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2" }, {
            default: bt(() => [
              ke(Qb, {
                class: "mb-4",
                onUserDismissed: m[0] || (m[0] = (h) => u())
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : Kr("", !0),
      ke(re(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: bt(() => [
          p.$mwui.breakpoint.tabletAndUp ? (Ua(), Wr(re(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: bt(() => [
              ke(re(qs), {
                id: "dashboard-list-selector--desktop",
                items: re(r),
                active: re(g),
                onSelect: d
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Kr("", !0),
          ke(re(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: bt(() => [
              D$(ke(P8, null, null, 512), [
                [A$, re(g) === "suggestions"]
              ]),
              ke(b8, {
                active: re(g) === "suggestions"
              }, null, 8, ["active"]),
              ke(Jd, {
                "translation-status": "draft",
                "active-status": re(g)
              }, null, 8, ["active-status"]),
              ke(Jd, {
                "translation-status": "published",
                "active-status": re(g)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          ke(re(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: bt(() => [
              ke(re(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: bt(() => [
                  ke(re(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: bt(() => [
                      ke(a$, { stats: i.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  ke(re(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: bt(() => [
                      ke(W8)
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
      p.$mwui.breakpoint.mobile ? (Ua(), Wr(m$, {
        key: 1,
        active: re(g),
        "onUpdate:active": m[1] || (m[1] = (h) => T$(g) ? g.value = h : null),
        items: re(r)
      }, null, 8, ["active", "items"])) : Kr("", !0)
    ]));
  }
}, U$ = {
  name: "DashboardView",
  components: { CxDashboard: N$ }
}, I$ = window.Vue.resolveComponent, R$ = window.Vue.createVNode, z$ = window.Vue.openBlock, O$ = window.Vue.createElementBlock, j$ = { class: "cx-translation-dashboard" };
function H$(e, t, n, o, s, a) {
  const i = I$("cx-dashboard");
  return z$(), O$("main", j$, [
    R$(i, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const $g = /* @__PURE__ */ ne(U$, [["render", H$]]), po = window.Vue.computed, q$ = () => {
  const { sectionSuggestion: e } = ze(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Bt(), o = po(
    () => {
      var d, p, m;
      return (m = (p = (d = e.value) == null ? void 0 : d.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = po(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.missingSectionsCount;
    }
  ), a = po(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: c } = hn(), u = po(() => i ? W.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), g = (d) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : d ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", r = po(() => {
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
  }), l = po(
    () => {
      var d;
      return !i.value || ((d = e.value) == null ? void 0 : d.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: g,
    isProgressiveButton: l,
    targetArticlePath: u
  };
};
function G$(e) {
  return e.$el = $(e), e;
}
function X$(e, t, n, o) {
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
function W$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function K$(e, t) {
  return b(this, null, function* () {
    yield Zc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = G$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const Y$ = window.Vue.computed, J$ = window.Vue.onMounted, Q$ = window.Vue.ref;
function Z$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const e4 = {
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
    const n = Q$(null);
    let o = null;
    const s = Y$(() => o.getHtml()), a = () => {
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
    return J$(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = Z$;
      const r = yield K$(u, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = X$(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = W$, o.focus();
    })), { sxeditor: n };
  }
}, xc = window.Vue.createElementVNode, t4 = window.Vue.openBlock, n4 = window.Vue.createElementBlock, o4 = ["lang", "dir"], s4 = /* @__PURE__ */ xc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ xc("div", { class: "toolbar" })
], -1), a4 = ["lang", "dir"];
function i4(e, t, n, o, s, a) {
  return t4(), n4("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    s4,
    xc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, a4)
  ], 8, o4);
}
const r4 = /* @__PURE__ */ ne(e4, [["render", i4]]);
function Zc() {
  return mw.loader.using("mw.cx3.ve");
}
const l4 = window.Vuex.useStore, c4 = () => {
  const e = l4();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Zc(), new Promise((s) => {
      setTimeout(() => {
        const a = Jm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, u4 = window.Vuex.useStore, cf = () => {
  const e = u4();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield no.fetchPageContent(
      t,
      n,
      o,
      s
    );
    a = e.getters["mediawiki/getPage"](
      t,
      o
    ), a ? a.content || (a.content = i.content, e.commit("mediawiki/setPageSections", {
      page: a,
      sections: i.sections
    })) : e.commit("mediawiki/addPage", i);
  });
}, Mi = () => {
  const { currentSourcePage: e } = st(), t = c4(), n = cf(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i,
    revisionURLParameter: c
  } = B(), u = (l, d) => b(void 0, null, function* () {
    l() || (yield n(
      s.value,
      a.value,
      i.value,
      c.value
    ), to || (yield t(
      s.value,
      i.value
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
}, d4 = window.Vuex.useStore, Ro = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = B(), a = d4(), i = Ae(), c = () => {
    const l = i.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return i.getRoutes().find((d) => d.name === l);
  }, u = () => {
    const r = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), l = W.getCurrentWikiLanguageCode();
    if (!r || t.value === l)
      return !1;
    const d = o.value ? { section: o.value } : {}, p = W.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      d
    );
    return location.href = p + "#" + c().path, !0;
  }, g = () => {
    location.href = W.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (W.setCXToken(
      e.value,
      t.value,
      n.value
    ), to) {
      g();
      return;
    }
    if (u())
      return;
    const l = c();
    i.push({ name: l.name });
  };
}, eu = () => {
  const e = ot(), { currentTranslation: t } = Bt();
  return () => {
    if (!t.value)
      return mw.log.error(
        "[CX Event Logging] No current draft translation to continue"
      ), Promise.resolve();
    const {
      sectionTranslationId: n,
      sourceLanguage: o,
      targetLanguage: s,
      sourceTitle: a,
      targetTitle: i,
      isLeadSectionTranslation: c,
      sourceSectionTitle: u,
      targetSectionTitle: g
    } = t.value;
    return e({
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_source_section: u,
      translation_target_language: s,
      translation_target_title: i,
      translation_target_section: g,
      translation_type: c ? "article" : "section"
    });
  };
}, g4 = window.Vue.ref, p4 = () => {
  const e = Ae(), { logDashboardTranslationStartEvent: t } = Fi(), n = eu(), o = Ro(), { sectionURLParameter: s } = B(), { targetPageExists: a } = hn(), { selectPageSectionByTitle: i } = Mi(), c = () => b(void 0, null, function* () {
    yield i(s.value), e.push({ name: "sx-content-comparator" });
  }), u = g4(!1), { currentTranslation: g } = Bt();
  return {
    handlePrimaryButtonClick: () => {
      g.value ? g.value.isArticleTranslation && !to ? u.value = !0 : (n(), o()) : s.value ? c() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const m4 = window.Vue.resolveDirective, Vg = window.Vue.createElementVNode, Eg = window.Vue.withDirectives, h4 = window.Vue.unref, f4 = window.Vue.withCtx, w4 = window.Vue.openBlock, _4 = window.Vue.createBlock, v4 = {
  href: "",
  target: "_blank"
}, S4 = window.Codex.CdxDialog, y4 = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = he(), i = {
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
    return (g, r) => {
      const l = m4("i18n");
      return w4(), _4(h4(S4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": i,
        "default-action": c,
        "onUpdate:open": r[0] || (r[0] = (d) => s(d)),
        onPrimary: u,
        onDefault: r[1] || (r[1] = (d) => s(!1))
      }, {
        default: f4(() => [
          Eg(Vg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Eg(Vg("a", v4, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const we = window.Vue.unref, C4 = window.Vue.resolveDirective, ss = window.Vue.createElementVNode, Lg = window.Vue.withDirectives, as = window.Vue.toDisplayString, is = window.Vue.openBlock, Yr = window.Vue.createElementBlock, Jr = window.Vue.createCommentVNode, ct = window.Vue.createVNode, kt = window.Vue.withCtx, Qr = window.Vue.createTextVNode, b4 = window.Vue.withModifiers, Ag = window.Vue.createBlock, k4 = window.Vue.Fragment, x4 = { class: "sx-translation-confirmer-body pb-4" }, $4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, V4 = ["textContent"], E4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, L4 = ["href"], A4 = ["textContent"], Ia = window.Vue.computed, D4 = window.Vue.inject, Dg = window.Vue.ref, T4 = window.Vue.watchEffect, B4 = window.Vuex.useStore, Zr = window.Codex.CdxButton, P4 = window.Codex.CdxIcon, F4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Ae(), o = B4();
    D4("colors");
    const { sectionSuggestion: s } = ze(), { targetLanguageAutonym: a } = ye(o), { sectionURLParameter: i } = B(), { logDashboardTranslationStartEvent: c } = Fi(), u = Ro(), { handlePrimaryButtonClick: g, translationConfirmationDialogOn: r } = p4(), l = Dg(!1), d = Dg(null), p = () => b(this, null, function* () {
      let K = !0;
      try {
        K = yield ht.checkUnreviewedTranslations();
      } catch (H) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          H
        );
      }
      K !== !0 && (l.value = !0, d.value = K.targetUrl);
    }), m = () => b(this, null, function* () {
      yield p(), !l.value && (c(), u());
    }), h = () => b(this, null, function* () {
      yield p(), !l.value && g();
    }), f = t;
    T4(() => {
      r.value && (f("open-translation-confirmation-dialog"), r.value = !1);
    });
    const {
      actionInformationMessageArgs: _,
      getActionButtonLabel: w,
      isProgressiveButton: y,
      targetArticlePath: S
    } = q$(), k = he(), x = Ia(
      () => k.i18n(w(!!i.value))
    ), L = Ia(
      () => k.i18n(..._.value)
    ), E = () => b(this, null, function* () {
      yield p(), !l.value && n.push({ name: "sx-section-selector" });
    }), T = Ia(() => {
      var K, H;
      return i.value && !!((H = (K = s.value) == null ? void 0 : K.sourceSections) != null && H.length);
    }), { targetPageExists: U } = hn(), M = Ia(() => !i.value && U.value && to);
    return (K, H) => {
      const pe = C4("i18n");
      return is(), Yr(k4, null, [
        ss("section", x4, [
          we(i) ? (is(), Yr("section", $4, [
            Lg(ss("h6", null, null, 512), [
              [pe, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ss("h5", {
              class: "ma-0",
              textContent: as(we(i))
            }, null, 8, V4)
          ])) : we(U) ? (is(), Yr("section", E4, [
            ct(we(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: kt(() => [
                Lg(ct(we(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [pe, [we(a)], "cx-sx-existing-translation-status"]
                ]),
                ct(we(C), { shrink: "" }, {
                  default: kt(() => [
                    ss("a", {
                      href: we(S),
                      target: "_blank"
                    }, [
                      ct(we(P4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: we(Wc)
                      }, null, 8, ["icon"])
                    ], 8, L4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ct(we(P), { class: "ma-0" }, {
              default: kt(() => [
                ct(we(C), null, {
                  default: kt(() => [
                    ss("span", {
                      textContent: as(L.value)
                    }, null, 8, A4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Jr("", !0),
          ct(we(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: kt(() => [
              T.value ? (is(), Ag(we(C), {
                key: 0,
                shrink: ""
              }, {
                default: kt(() => [
                  ct(we(Zr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: b4(E, ["stop"])
                  }, {
                    default: kt(() => [
                      Qr(as(K.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Jr("", !0),
              M.value ? (is(), Ag(we(C), {
                key: 1,
                shrink: ""
              }, {
                default: kt(() => [
                  ct(we(Zr), {
                    size: "large",
                    onClick: m
                  }, {
                    default: kt(() => [
                      Qr(as(K.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Jr("", !0),
              ct(we(C), { shrink: "" }, {
                default: kt(() => [
                  ct(we(Zr), {
                    weight: "primary",
                    size: "large",
                    action: we(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: kt(() => [
                      Qr(as(x.value), 1)
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
        ct(y4, {
          modelValue: l.value,
          "onUpdate:modelValue": H[0] || (H[0] = ($e) => l.value = $e),
          "target-url": d.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const el = window.Vue.unref, M4 = window.Vue.openBlock, N4 = window.Vue.createBlock, U4 = window.Vue.computed, uf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = Ks(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = B(), { currentLanguageTitleGroup: s } = hn(), a = U4(
      () => {
        var g;
        return ((g = s.value) == null ? void 0 : g.titles.map((r) => r.lang)) || [];
      }
    ), i = $S(), c = (g) => i(g, o.value), u = (g) => i(n.value, g);
    return (g, r) => (M4(), N4(Si, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": el(t),
      "selected-source-language": el(n),
      "selected-target-language": el(o),
      "onUpdate:selectedSourceLanguage": c,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Te = window.Vue.unref, tl = window.Vue.toDisplayString, en = window.Vue.createElementVNode, It = window.Vue.createVNode, mo = window.Vue.withCtx, I4 = window.Vue.resolveDirective, R4 = window.Vue.withDirectives, z4 = window.Vue.normalizeClass, O4 = window.Vue.openBlock, j4 = window.Vue.createBlock, H4 = ["textContent"], q4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, G4 = ["textContent"], X4 = { class: "pe-3" }, W4 = ["textContent"], K4 = window.Codex.CdxButton, rs = window.Codex.CdxIcon, tn = window.Vue.computed, Y4 = window.Vuex.useStore, J4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = Y4(), n = he(), { currentSourcePage: o } = st(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = B(), c = tn(() => t.state.suggestions.favorites || []), u = tn(
      () => c.value.some(
        (x) => i.value === x.title && s.value === x.sourceLanguage && a.value === x.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: r } = Qc(), { translationSizeMessageArgs: l } = sf(), d = () => g(
      i.value,
      s.value,
      a.value
    ), p = () => r(
      new Lo({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = tn(
      () => u.value ? Rh : zh
    ), h = tn(
      () => u.value ? p : d
    ), f = tn(
      () => W.getPageUrl(s.value || "", i.value || "")
    ), _ = tn(
      () => {
        var x;
        return (((x = o.value) == null ? void 0 : x.langLinksCount) || 0) + 1;
      }
    ), w = (x) => {
      const L = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let E = 0; E < L.length; E++)
        if (x >= L[E].value)
          return (x / L[E].value).toFixed(1).replace(/\.0$/, "") + L[E].suffix;
      return x.toString();
    }, y = tn(() => {
      var L;
      const x = Object.values(((L = o.value) == null ? void 0 : L.pageviews) || {}).reduce(
        (E, T) => E + T,
        0
      );
      return w(x);
    }), S = tn(() => l.value ? n.i18n(...l.value) : ""), k = tn(() => l.value ? l.value[2] < 15 : !1);
    return (x, L) => {
      const E = I4("i18n");
      return O4(), j4(Te(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: mo(() => [
          It(Te(C), null, {
            default: mo(() => [
              It(Te(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: mo(() => [
                  It(Te(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: mo(() => [
                      en("h5", {
                        class: "ma-0 me-1",
                        textContent: tl(Te(i))
                      }, null, 8, H4),
                      It(Te(rs), {
                        size: "x-small",
                        icon: Te(Wc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  It(Te(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: mo(() => [
                      It(Te(K4), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": x.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: mo(() => [
                          It(Te(rs), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              en("div", q4, [
                en("div", null, [
                  en("span", null, [
                    It(Te(rs), {
                      icon: Te(jh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    en("span", {
                      class: "pe-3",
                      textContent: tl(_.value)
                    }, null, 8, G4)
                  ]),
                  en("span", null, [
                    It(Te(rs), {
                      icon: Te(Ab),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    R4(en("span", X4, null, 512), [
                      [E, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                en("span", {
                  class: z4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": k.value
                  }])
                }, [
                  It(Te(rs), {
                    icon: Te(Tb),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  en("span", {
                    textContent: tl(S.value)
                  }, null, 8, W4)
                ], 2)
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
const Q4 = window.Vue.resolveDirective, jn = window.Vue.createElementVNode, Ra = window.Vue.withDirectives, Z4 = window.Vue.toDisplayString, eV = window.Vue.createTextVNode, nl = window.Vue.unref, ol = window.Vue.withCtx, sl = window.Vue.openBlock, al = window.Vue.createBlock;
window.Vue.createCommentVNode;
const tV = { class: "pa-4" }, nV = { class: "flex pt-2" }, oV = window.Codex.CdxButton, sV = window.Vue.ref, aV = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Ro(), a = eu(), i = sV(!1), { currentTranslation: c } = Bt(), u = () => b(this, null, function* () {
      i.value = !0;
      let g = !1;
      try {
        g = yield ht.splitTranslation(
          c.value.translationId
        );
      } catch (r) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          r
        );
      }
      i.value = !1, g && (a(), s(), o());
    });
    return (g, r) => {
      const l = Q4("i18n");
      return sl(), al(nl(ft), {
        value: e.modelValue,
        persistent: i.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: g.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: ol(() => [
          jn("div", nV, [
            i.value ? (sl(), al(nl(et), { key: 1 })) : (sl(), al(nl(oV), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: ol(() => [
                eV(Z4(g.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: ol(() => [
          jn("div", tV, [
            Ra(jn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ra(jn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            jn("p", null, [
              Ra(jn("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ra(jn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, iV = window.Vuex.useStore;
let za = [];
const tu = () => {
  const e = iV();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || za.includes(o) ? Promise.resolve() : (za.push(o), no.fetchLanguageTitles(t, n).then((s) => {
      za = za.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, rV = window.Vue.ref, ho = rV(null), df = () => {
  const e = () => b(void 0, null, function* () {
    var n, o;
    ho.value || (yield Li.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, ho.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        ho.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = ho.value) == null ? void 0 : n.refreshAt) <= t ? (ho.value = null, e()) : (o = ho.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const Tg = window.Vue.resolveDirective, Oa = window.Vue.createElementVNode, Bg = window.Vue.withDirectives, kn = window.Vue.unref, ja = window.Vue.withCtx, nn = window.Vue.createVNode, il = window.Vue.openBlock, Pg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const lV = window.Vue.createBlock, cV = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, uV = { class: "mb-0" }, dV = { class: "sx-translation-confirmer__article-image flex justify-center" }, gV = ["src"], pV = { class: "ma-3" }, Fg = window.Vue.computed, mV = window.Vue.inject, hV = window.Vue.onBeforeUnmount, fV = window.Vue.ref, wV = window.Vuex.useStore, _V = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = wV(), { currentSourcePage: n } = st(), { previousRoute: o } = ye(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: c,
      clearTranslationURLParameters: u
    } = B(), g = mV("breakpoints"), r = Fg(() => g.value.nextBreakpoint), l = Fg(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(r.value);
      }
    ), { fetchTranslationsByStatus: d } = Io(), p = tu();
    d("draft"), p(s.value, i.value), Zc(), df()(), sh()(a.value);
    const f = Ae(), _ = () => {
      o.value ? f.push({ name: o.value }) : f.push({ name: "dashboard" });
    };
    hV(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const w = fV(!1);
    return (y, S) => {
      const k = Tg("i18n"), x = Tg("i18n-html");
      return il(), Pg("section", cV, [
        nn(kn(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ja(() => [
            nn(kn(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ja(() => [
                Bg(Oa("h5", uV, null, 512), [
                  [k, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            nn(kn(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ja(() => [
                nn(kn(Ne), {
                  class: "pa-0",
                  type: "icon",
                  icon: kn(Gs),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Oa("div", dV, [
          l.value ? (il(), Pg("img", {
            key: 0,
            src: l.value
          }, null, 8, gV)) : (il(), lV(kn(Re), {
            key: 1,
            size: "120",
            icon: kn(Dm),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        nn(J4),
        nn(uf),
        nn(F4, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (L) => w.value = !0)
        }),
        nn(kn(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ja(() => [
            Oa("p", pV, [
              Bg(Oa("small", null, null, 512), [
                [x, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        nn(aV, {
          modelValue: w.value,
          "onUpdate:modelValue": S[1] || (S[1] = (L) => w.value = L)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const vV = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: _V
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, SV = window.Vue.resolveComponent, yV = window.Vue.createVNode, CV = window.Vue.normalizeClass, bV = window.Vue.openBlock, kV = window.Vue.createElementBlock;
function xV(e, t, n, o, s, a) {
  const i = SV("sx-translation-confirmer");
  return bV(), kV("main", {
    class: CV(["sx-translation-confirmer-view", a.classes])
  }, [
    yV(i)
  ], 2);
}
const $V = /* @__PURE__ */ ne(vV, [["render", xV]]);
const VV = window.Vue.toDisplayString, Mg = window.Vue.unref, EV = window.Vue.createVNode, LV = window.Vue.createTextVNode, AV = window.Vue.createElementVNode, DV = window.Vue.openBlock, TV = window.Vue.createElementBlock, BV = { class: "sx-section-selector-view-article-item" }, PV = ["href"], FV = window.Codex.CdxIcon, Ng = {
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
    return (t, n) => (DV(), TV("span", BV, [
      AV("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        LV(VV(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        EV(Mg(FV), {
          size: "x-small",
          icon: Mg(Wc)
        }, null, 8, ["icon"])
      ], 8, PV)
    ]));
  }
};
const MV = window.Vue.resolveDirective, Ha = window.Vue.createElementVNode, rl = window.Vue.withDirectives, Hn = window.Vue.unref, NV = window.Vue.toDisplayString, qa = window.Vue.withCtx, ls = window.Vue.createVNode, UV = window.Vue.openBlock, IV = window.Vue.createElementBlock, RV = { class: "sx-section-selector__header pa-4" }, zV = { class: "sx-section-selector__header-text ma-0" }, OV = ["textContent"], jV = { class: "pt-0 ma-0" }, HV = { class: "ma-0" }, qV = window.Codex.CdxButton, GV = window.Codex.CdxIcon, XV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = ze();
    return (n, o) => {
      const s = MV("i18n");
      return UV(), IV("div", RV, [
        ls(Hn(P), { class: "ma-0 pb-3" }, {
          default: qa(() => [
            ls(Hn(C), null, {
              default: qa(() => {
                var a;
                return [
                  rl(Ha("h6", zV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Ha("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: NV((a = Hn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, OV)
                ];
              }),
              _: 1
            }),
            ls(Hn(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: qa(() => [
                ls(Hn(qV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: qa(() => [
                    ls(Hn(GV), { icon: Hn(Uo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        rl(Ha("h4", jV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        rl(Ha("p", HV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, WV = window.Vue.renderList, KV = window.Vue.Fragment, ll = window.Vue.openBlock, Ug = window.Vue.createElementBlock, YV = window.Vue.renderSlot, Ga = window.Vue.unref, Ig = window.Vue.createVNode, Rg = window.Vue.withCtx, JV = window.Vue.createBlock, QV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, ZV = window.Codex.CdxButton, e3 = window.Codex.CdxIcon, gf = {
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
    return (t, n) => (ll(), Ug("ul", QV, [
      (ll(!0), Ug(KV, null, WV(e.sections, (o) => (ll(), JV(Ga(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Rg(() => [
          Ig(Ga(ZV), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Rg(() => [
              YV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Ig(Ga(e3), { icon: Ga(Zs) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, t3 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const n3 = window.Vue.resolveDirective, Xa = window.Vue.createElementVNode, cl = window.Vue.withDirectives, xt = window.Vue.unref, zg = window.Vue.toDisplayString, fo = window.Vue.withCtx, ul = window.Vue.openBlock, Og = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cs = window.Vue.createVNode, o3 = window.Vue.createTextVNode, s3 = window.Vue.createElementBlock, a3 = { class: "sx-section-selector__missing-sections py-2" }, i3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, r3 = ["lang", "dir", "textContent"], jg = window.Vue.computed, l3 = window.Codex.CdxButton, c3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = ze(), n = jg(
      () => {
        var s;
        return R.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = jg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = n3("i18n");
      return ul(), s3("section", a3, [
        cl(Xa("h4", i3, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (ul(), Og(xt(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: fo(() => [
            cs(xt(C), {
              class: "py-6 justify-center",
              innerHTML: xt(t3)
            }, null, 8, ["innerHTML"]),
            cs(xt(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: fo(() => [
                cl(Xa("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            cs(xt(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: fo(() => [
                cl(Xa("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            cs(xt(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: fo(() => [
                cs(xt(l3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: fo(() => [
                    o3(zg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (ul(), Og(gf, {
          key: 0,
          sections: xt(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: fo(({ sourceSection: c }) => {
            var u, g;
            return [
              Xa("h5", {
                class: "ma-0",
                lang: (u = xt(t)) == null ? void 0 : u.sourceLanguage,
                dir: xt(R.getDir)((g = xt(t)) == null ? void 0 : g.sourceLanguage),
                textContent: zg(c)
              }, null, 8, r3)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const u3 = window.Vue.resolveDirective, Wa = window.Vue.createElementVNode, d3 = window.Vue.withDirectives, qn = window.Vue.unref, Hg = window.Vue.toDisplayString, g3 = window.Vue.withCtx, p3 = window.Vue.createVNode, m3 = window.Vue.openBlock, h3 = window.Vue.createElementBlock, f3 = { class: "sx-section-selector__present-sections py-2" }, w3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, _3 = { class: "sx-section-selector__present-section-button-content" }, v3 = ["lang", "dir", "textContent"], S3 = ["lang", "dir", "textContent"], y3 = window.Vue.computed, qg = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = ze(), n = y3(
      () => {
        var o;
        return R.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var i;
      const a = u3("i18n");
      return m3(), h3("section", f3, [
        d3(Wa("h4", w3, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        p3(gf, {
          sections: ((i = qn(t)) == null ? void 0 : i.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (c) => o.$emit("select-section", c))
        }, {
          default: g3(({ sourceSection: c, targetSection: u }) => {
            var g, r, l, d;
            return [
              Wa("div", _3, [
                Wa("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (g = qn(t)) == null ? void 0 : g.sourceLanguage,
                  dir: qn(R.getDir)((r = qn(t)) == null ? void 0 : r.sourceLanguage),
                  textContent: Hg(c)
                }, null, 8, v3),
                Wa("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (l = qn(t)) == null ? void 0 : l.targetLanguage,
                  dir: qn(R.getDir)((d = qn(t)) == null ? void 0 : d.targetLanguage),
                  textContent: Hg(u)
                }, null, 8, S3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Be = window.Vue.createVNode, dl = window.Vue.openBlock, Gg = window.Vue.createBlock, Xg = window.Vue.createCommentVNode, Pe = window.Vue.unref, C3 = window.Vue.resolveDirective, xn = window.Vue.createElementVNode, us = window.Vue.withDirectives, on = window.Vue.withCtx, b3 = window.Vue.normalizeClass, Wg = window.Vue.toDisplayString, Kg = window.Vue.createTextVNode, k3 = window.Vue.createElementBlock, x3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, $3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, V3 = { class: "sx-section-selector__additional-consideration-title" }, E3 = { href: "#" }, L3 = { class: "sx-section-selector__additional-consideration-title" }, A3 = { href: "#" }, gl = window.Vue.computed, D3 = window.Vue.inject, T3 = window.Vuex.useStore, B3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = D3("breakpoints"), n = gl(() => t.value.desktopAndUp), o = T3(), { sectionSuggestion: s } = ze(), {
      sourceLanguage: a,
      targetLanguage: i,
      sourceLanguageAutonym: c,
      targetLanguageAutonym: u
    } = ye(o), g = gl(
      () => {
        var S;
        return W.getPageUrl(a.value, (S = s.value) == null ? void 0 : S.sourceTitle);
      }
    ), r = gl(
      () => {
        var S;
        return W.getPageUrl(i.value, (S = s.value) == null ? void 0 : S.targetTitle);
      }
    ), l = Ae(), { clearTranslationURLParameters: d, setSectionURLParam: p } = B(), m = () => {
      d(), l.push({ name: "dashboard" });
    }, { currentTranslation: h } = Bt(), f = Ro(), _ = eu(), { selectPageSectionByTitle: w } = Mi(), y = (S) => {
      p(S), h.value ? (_(), f()) : (w(S), l.push({ name: "sx-content-comparator" }));
    };
    return (S, k) => {
      const x = C3("i18n");
      return dl(), k3("section", x3, [
        Be(XV, { onClose: m }),
        Be(uf),
        Be(Pe(P), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: on(() => [
            Be(Pe(C), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: on(() => [
                Be(c3, {
                  onSelectSection: y,
                  onClose: m
                }),
                n.value ? Xg("", !0) : (dl(), Gg(qg, {
                  key: 0,
                  onSelectSection: y
                })),
                xn("section", {
                  class: b3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  us(xn("h4", $3, null, 512), [
                    [x, [
                      Pe(u)
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Be(Pe(P), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: on(() => [
                      Be(Pe(C), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: on(() => [
                          Be(Ng, {
                            path: g.value,
                            autonym: Pe(c)
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Be(Pe(C), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: on(() => [
                          Be(Ng, {
                            path: r.value,
                            autonym: Pe(u)
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Be(Pe(P), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: on(() => [
                    Be(Pe(C), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: on(() => [
                        xn("h6", V3, [
                          Be(Pe(Re), {
                            icon: Pe(m0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Kg(" " + Wg(S.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        us(xn("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        us(xn("a", E3, null, 512), [
                          [x, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Be(Pe(C), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: on(() => [
                        xn("h6", L3, [
                          Be(Pe(Re), {
                            icon: Pe(p0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Kg(" " + Wg(S.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        us(xn("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        us(xn("a", A3, null, 512), [
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
            n.value ? (dl(), Gg(Pe(C), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: on(() => [
                Be(qg, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: y
                })
              ]),
              _: 1
            })) : Xg("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, P3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: B3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, F3 = window.Vue.resolveComponent, M3 = window.Vue.createVNode, N3 = window.Vue.normalizeClass, U3 = window.Vue.openBlock, I3 = window.Vue.createElementBlock;
function R3(e, t, n, o, s, a) {
  const i = F3("sx-section-selector");
  return U3(), I3("main", {
    class: N3(["sx-section-selector-view", a.classes])
  }, [
    M3(i)
  ], 2);
}
const z3 = /* @__PURE__ */ ne(P3, [["render", R3]]), O3 = window.Vue.ref, pf = O3("expand"), j3 = (e) => {
  pf.value = e;
}, mf = () => ({
  existingSectionPublishOption: pf,
  setExistingSectionPublishOption: j3
}), ds = window.Vue.computed, H3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    sectionURLParameter: n
  } = B(), o = ds(
    () => R.getAutonym(e.value)
  ), s = ds(
    () => R.getAutonym(t.value)
  ), { sectionSuggestion: a } = ze(), { existingSectionPublishOption: i } = mf(), c = ds(
    () => {
      var r;
      return !!((r = a.value) != null && r.presentSections.hasOwnProperty(n.value));
    }
  ), u = ds(
    () => c.value && i.value === "expand"
  ), g = he();
  return ds(() => {
    const r = {
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
    return [r, l];
  });
};
const Yg = window.Vue.unref, q3 = window.Vue.createVNode, G3 = window.Vue.openBlock, X3 = window.Vue.createElementBlock, W3 = { class: "sx-content-comparator__content-type-selector" }, K3 = window.Vue.watchEffect, Y3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (i) => o("update:selection", i), a = H3();
    return K3(() => {
      a.value.map((c) => c.value).includes(n.selection) || s(a.value[0].value);
    }), (i, c) => (G3(), X3("div", W3, [
      q3(Yg(qs), {
        items: Yg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, gs = window.Vue.computed, J3 = window.Vuex.useStore, ee = () => {
  const e = J3(), { currentSourcePage: t, currentTargetPage: n } = st(), { currentMTProvider: o } = ye(e), { sectionURLParameter: s } = B(), a = gs(() => {
    var r, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = gs(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), c = gs(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), u = gs(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = gs(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: g
  };
}, ps = window.Vue.computed, nu = () => {
  const { currentTargetPage: e } = st(), { sectionSuggestion: t } = ze(), { sectionURLParameter: n } = B(), o = ps(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = ps(
    () => {
      var g;
      return (((g = a.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), a = ps(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.getSectionByTitle(o.value);
    }
  ), { sourceSection: i } = ee(), c = ps(() => {
    var g;
    return (g = i.value) == null ? void 0 : g.html;
  }), u = ps(() => {
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
const Ka = window.Vue.createVNode, Q3 = window.Vue.toDisplayString, Z3 = window.Vue.createElementVNode, $n = window.Vue.unref, Ya = window.Vue.withCtx, pl = window.Vue.openBlock, ml = window.Vue.createBlock;
window.Vue.createCommentVNode;
const eE = window.Vue.normalizeClass, tE = ["lang", "dir", "textContent"], Jg = window.Vue.ref, hl = window.Vue.computed, nE = window.Vue.onMounted, oE = {
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
    const n = e, o = t, s = Jg(!1), { sectionSuggestion: a } = ze(), { sectionURLParameter: i } = B(), c = hl(
      () => (i.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: r } = nu(), l = hl(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: i.value,
            path: `${W.getPageUrl(
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
            path: `${d.value}#${r.value}`
          };
      }
    }), d = hl(
      () => W.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Jg(null);
    return nE(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (pl(), ml($n(P), {
      ref_key: "contentHeader",
      ref: p,
      class: eE(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Ya(() => [
        Ka(Y3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        Ka($n(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Ya(() => [
            Ka($n(C), null, {
              default: Ya(() => [
                Z3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: Q3(l.value.title)
                }, null, 8, tE)
              ]),
              _: 1
            }),
            Ka($n(C), { shrink: "" }, {
              default: Ya(() => [
                s.value ? (pl(), ml($n(Ne), {
                  key: 0,
                  icon: $n(bi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (pl(), ml($n(Ne), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: $n(Lm),
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
}, Ja = window.Vue.unref, Qg = window.Vue.createVNode, sE = window.Vue.openBlock, aE = window.Vue.createElementBlock, iE = { class: "sx-content-comparator__header-navigation flex items-center" }, rE = window.Vue.computed, lE = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = rE(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Mi(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    }, i = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    };
    return (c, u) => (sE(), aE("div", iE, [
      Qg(Ja(Ne), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Ja(c0),
        onClick: a
      }, null, 8, ["icon"]),
      Qg(Ja(Ne), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Ja(l0),
        onClick: i
      }, null, 8, ["icon"])
    ]));
  }
};
const Zg = window.Vue.toDisplayString, cE = window.Vue.resolveDirective, fl = window.Vue.withDirectives, wo = window.Vue.openBlock, Qa = window.Vue.createElementBlock, uE = window.Vue.createCommentVNode, dE = window.Vue.createTextVNode, ep = window.Vue.createElementVNode, Rt = window.Vue.unref, gE = window.Vue.normalizeClass, wl = window.Vue.withCtx, _l = window.Vue.createVNode, tp = window.Vue.createBlock, pE = { class: "sx-content-comparator-header__mapped-section" }, mE = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, hE = { key: 0 }, fE = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, wE = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, np = window.Vue.computed, _E = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { sectionSuggestion: t } = ze(), { activeSectionTargetTitle: n } = nu(), o = he(), { existingSectionPublishOption: s, setExistingSectionPublishOption: a } = mf(), i = np(
      () => s.value === "new"
    ), c = np(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(t.value.targetLanguage)
      )
    );
    return (u, g) => {
      const r = cE("i18n");
      return wo(), Qa("div", pE, [
        _l(Rt(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: wl(() => [
            _l(Rt(C), { grow: "" }, {
              default: wl(() => [
                ep("h6", mE, [
                  dE(Zg(c.value) + " ", 1),
                  i.value ? fl((wo(), Qa("span", hE, null, 512)), [
                    [r, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : uE("", !0)
                ]),
                ep("h6", {
                  class: gE(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": i.value
                  }])
                }, Zg(Rt(n)), 3)
              ]),
              _: 1
            }),
            _l(Rt(C), { shrink: "" }, {
              default: wl(() => [
                i.value ? (wo(), tp(Rt(Ne), {
                  key: 1,
                  class: "pa-0",
                  icon: Rt(w0),
                  type: "icon",
                  onClick: g[1] || (g[1] = (l) => Rt(a)("expand"))
                }, null, 8, ["icon"])) : (wo(), tp(Rt(Ne), {
                  key: 0,
                  class: "pa-0",
                  icon: Rt(Em),
                  type: "icon",
                  onClick: g[0] || (g[0] = (l) => Rt(a)("new"))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? fl((wo(), Qa("p", wE, null, 512)), [
          [r, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : fl((wo(), Qa("p", fE, null, 512)), [
          [r, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const Le = window.Vue.unref, _o = window.Vue.createVNode, op = window.Vue.toDisplayString, dn = window.Vue.createElementVNode, vE = window.Vue.normalizeClass, vl = window.Vue.withCtx, SE = window.Vue.resolveDirective, sp = window.Vue.withDirectives, Sl = window.Vue.openBlock, ap = window.Vue.createBlock, ip = window.Vue.createCommentVNode, yE = window.Vue.createElementBlock, CE = { class: "sx-content-comparator__header pa-4" }, bE = { class: "row my-1 py-2 mx-0" }, kE = { class: "sx-content-comparator-header__titles grow" }, xE = ["lang", "dir"], $E = ["lang", "dir"], VE = { class: "py-2 mb-1" }, EE = /* @__PURE__ */ dn("br", null, null, -1), ms = window.Vue.computed, LE = window.Vue.inject, AE = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = B(), { sourceSection: n } = ee(), { sectionSuggestion: o } = ze(), s = ms(
      () => {
        var r;
        return (r = o.value) == null ? void 0 : r.missingSections.hasOwnProperty(t.value);
      }
    ), a = ms(
      () => {
        var r;
        return (r = o.value) == null ? void 0 : r.presentSections.hasOwnProperty(t.value);
      }
    ), i = ms(() => {
      var r;
      return (r = n.value) == null ? void 0 : r.html;
    }), c = ms(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), u = LE("breakpoints"), g = ms(() => u.value.mobile);
    return (r, l) => {
      const d = SE("i18n");
      return Sl(), yE("div", CE, [
        _o(Le(Ne), {
          class: "py-2 pa-0",
          icon: Le(u0),
          label: r.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: l[0] || (l[0] = (p) => r.$emit("close"))
        }, null, 8, ["icon", "label"]),
        dn("div", bE, [
          dn("div", {
            class: vE(["flex grow", g.value ? "col-12" : "me-6"])
          }, [
            dn("div", kE, [
              dn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Le(o).sourceLanguage,
                dir: Le(R.getDir)(Le(o).sourceLanguage)
              }, op(Le(o).sourceTitle), 9, xE),
              dn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Le(o).sourceLanguage,
                dir: Le(R.getDir)(Le(o).sourceLanguage)
              }, op(Le(t)), 9, $E)
            ]),
            _o(lE, { "section-source-titles": c.value }, null, 8, ["section-source-titles"])
          ], 2),
          dn("div", VE, [
            _o(Le(Ne), {
              icon: Le(bi),
              progressive: "",
              label: r.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !i.value,
              onClick: l[1] || (l[1] = (p) => r.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (Sl(), ap(Le(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: vl(() => [
            _o(Le(C), {
              shrink: "",
              class: "pe-2"
            }, {
              default: vl(() => [
                _o(Le(Re), { icon: Le(h0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            _o(Le(C), { class: "ma-0" }, {
              default: vl(() => [
                sp(dn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                EE,
                sp(dn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ip("", !0),
        a.value ? (Sl(), ap(_E, { key: 1 })) : ip("", !0)
      ]);
    };
  }
};
const rp = window.Vue.toDisplayString, DE = window.Vue.createElementVNode, lp = window.Vue.openBlock, cp = window.Vue.createElementBlock, TE = window.Vue.createCommentVNode, BE = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, PE = ["textContent"], FE = ["textContent"], hf = {
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
    return (t, n) => (lp(), cp("section", BE, [
      DE("h5", {
        textContent: rp(e.placeholderTitle)
      }, null, 8, PE),
      e.placeholderSubtitle ? (lp(), cp("p", {
        key: 0,
        textContent: rp(e.placeholderSubtitle)
      }, null, 8, FE)) : TE("", !0)
    ]));
  }
}, ME = window.Vue.computed, NE = window.Vue.createApp, UE = window.Vuex.useStore, IE = () => {
  const e = UE(), { sectionSuggestion: t } = ze(), { currentTargetPage: n } = st(), o = he(), s = () => NE(
    hf,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), i = (c) => {
    const u = c.getElementsByTagName("base");
    Array.from(u).forEach(
      (g) => g.parentNode.removeChild(g)
    );
  };
  return ME(() => {
    var r;
    const c = document.createElement("div");
    c.innerHTML = (r = n.value) == null ? void 0 : r.content, i(c);
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
const yl = window.Vue.createVNode, Xe = window.Vue.unref, vo = window.Vue.openBlock, up = window.Vue.createBlock, dp = window.Vue.createCommentVNode, Za = window.Vue.createElementVNode, Cl = window.Vue.Fragment, ei = window.Vue.createElementBlock, RE = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, zE = { class: "sx-content-comparator__source-content" }, OE = ["lang", "dir", "innerHTML"], jE = ["lang", "dir", "innerHTML"], HE = ["innerHTML"], qE = window.Vue.ref, GE = window.Vue.computed, XE = window.Vue.watch, WE = window.Vuex.useStore, KE = {
  __name: "SXContentComparator",
  setup(e) {
    WE();
    const t = Ae(), n = qE("source_section"), { logDashboardTranslationStartEvent: o } = Fi(), s = Ro(), a = () => t.push({ name: "sx-section-selector" }), i = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      pageURLParameter: g,
      sectionURLParameter: r
    } = B(), { activeSectionTargetTitle: l, sourceSectionContent: d, targetSectionContent: p } = nu(), m = IE(), { sectionSuggestion: h } = ze(), f = GE(() => h.value.targetTitle), _ = cf();
    return XE(
      f,
      () => _(
        u.value,
        c.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, y) => (vo(), ei("section", RE, [
      yl(AE, {
        onTranslationButtonClicked: i,
        onClose: a
      }),
      yl(oE, {
        "content-type-selection": n.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (S) => n.value = S),
        onTranslationButtonClicked: i
      }, null, 8, ["content-type-selection"]),
      Za("section", zE, [
        n.value === "source_section" ? (vo(), ei(Cl, { key: 0 }, [
          Xe(d) ? dp("", !0) : (vo(), up(Xe(et), { key: 0 })),
          Za("section", {
            lang: Xe(c),
            dir: Xe(R.getDir)(Xe(c)),
            class: "pt-2 px-4",
            innerHTML: Xe(d)
          }, null, 8, OE)
        ], 64)) : n.value === "target_article" ? (vo(), ei(Cl, { key: 1 }, [
          Xe(m) ? dp("", !0) : (vo(), up(Xe(et), { key: 0 })),
          Za("article", {
            lang: Xe(u),
            dir: Xe(R.getDir)(Xe(u)),
            class: "px-4",
            innerHTML: Xe(m)
          }, null, 8, jE)
        ], 64)) : (vo(), ei(Cl, { key: 2 }, [
          Za("section", {
            class: "pa-4",
            innerHTML: Xe(p)
          }, null, 8, HE),
          yl(hf, {
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
}, YE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: KE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, JE = window.Vue.resolveComponent, QE = window.Vue.createVNode, ZE = window.Vue.normalizeClass, e5 = window.Vue.openBlock, t5 = window.Vue.createElementBlock;
function n5(e, t, n, o, s, a) {
  const i = JE("sx-content-comparator");
  return e5(), t5("main", {
    class: ZE(["sx-content-comparator-view", a.classes])
  }, [
    QE(i)
  ], 2);
}
const o5 = /* @__PURE__ */ ne(YE, [["render", n5]]);
const s5 = window.Vue.resolveDirective, hs = window.Vue.createElementVNode, gp = window.Vue.withDirectives, ti = window.Vue.unref, bl = window.Vue.createVNode, pp = window.Vue.toDisplayString, mp = window.Vue.createTextVNode, fs = window.Vue.withCtx, a5 = window.Vue.openBlock, i5 = window.Vue.createBlock, r5 = { class: "mw-ui-dialog__header px-4 py-3" }, l5 = { class: "mw-ui-dialog__header-title" }, c5 = { class: "pa-4" }, u5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, hp = window.Codex.CdxButton, d5 = {
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
    return (i, c) => {
      const u = s5("i18n");
      return a5(), i5(ti(ft), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: fs(() => [
          hs("div", r5, [
            gp(hs("span", l5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: fs(() => [
          hs("div", u5, [
            bl(ti(hp), {
              weight: "quiet",
              onClick: s
            }, {
              default: fs(() => [
                mp(pp(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            bl(ti(hp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: fs(() => [
                mp(pp(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: fs(() => [
          bl(ti(Ci)),
          hs("div", c5, [
            gp(hs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, g5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Zn(a)
  );
  return s && Nm(s) ? ht.parseTemplateWikitext(
    Fm(s),
    n,
    t
  ) : Promise.resolve(null);
}, ff = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Zn(a)
  );
  return s ? ht.parseTemplateWikitext(
    Fm(s),
    n,
    t
  ) : Promise.resolve(null);
}, p5 = window.Vuex.useStore, ou = () => {
  const e = p5(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = hn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = df(), i = (r, l, d) => {
    if (r === 0) {
      t.value.proposedTitleTranslations[l] = d;
      return;
    }
    const p = t.value.getContentTranslationUnitById(r);
    p instanceof Qe ? p.blockTemplateProposedTranslations[l] = d : p instanceof Pn && p.addProposedTranslation(l, d);
  }, c = (r, l) => b(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, r))
      return "";
    try {
      const p = yield a();
      return yield ht.fetchSegmentTranslation(
        o.value,
        s.value,
        r,
        l,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (r, l) => b(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      r,
      l
    ))
      return;
    let d = t.value.getOriginalContentByTranslationUnitId(r);
    const p = t.value.getContentTranslationUnitById(r);
    let m;
    if (e.commit("application/addMtRequestsPending", r), m = yield c(l, d), !m) {
      e.commit("application/removeMtRequestsPending", r);
      return;
    }
    p instanceof Qe && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield g5(
      m,
      n(s.value, o.value),
      s.value
    )) || ""), i(
      r,
      l,
      m
    ), e.commit("application/removeMtRequestsPending", r);
  });
  return {
    translateTranslationUnitById: u,
    translateSelectedTranslationUnitForAllProviders: () => {
      const r = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: l } = t.value;
      r.forEach(
        (d) => u(l, d)
      );
    }
  };
}, m5 = window.Vuex.useStore, h5 = () => {
  const { sourceSection: e } = ee(), t = m5(), { translateTranslationUnitById: n } = ou();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const f5 = window.Vue.resolveDirective, gt = window.Vue.createElementVNode, ni = window.Vue.withDirectives, We = window.Vue.unref, kl = window.Vue.createVNode, Vn = window.Vue.withCtx, w5 = window.Vue.renderList, _5 = window.Vue.Fragment, xl = window.Vue.openBlock, v5 = window.Vue.createElementBlock, S5 = window.Vue.toDisplayString, fp = window.Vue.createBlock, y5 = window.Vue.createCommentVNode, C5 = { class: "mw-ui-dialog__header pa-4" }, b5 = { class: "row ma-0 py-2" }, k5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, x5 = { class: "mb-0" }, $5 = { class: "col shrink justify-center" }, V5 = { class: "pb-2 mb-0" }, E5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, L5 = ["dir", "lang", "innerHTML"], A5 = ["textContent"], D5 = ["innerHTML"], T5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, B5 = /* @__PURE__ */ gt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), $l = window.Vue.computed, P5 = window.Vuex.useStore, F5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = te.EMPTY_TEXT_PROVIDER_KEY, s = te.ORIGINAL_TEXT_PROVIDER_KEY, a = P5(), {
      sourceSection: i,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: u
    } = ee(), {
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: r
    } = B(), l = $l(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        r.value
      )
    ), d = $l(() => {
      const w = [s, o];
      return l.value.filter(
        (y) => !w.includes(y)
      );
    }), p = $l(
      () => c.value ? i.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = h5(), h = (w) => {
      m(w), _();
    }, f = te.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, y) => {
      const S = f5("i18n");
      return e.active ? (xl(), fp(We(ft), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: Vn(() => [
          gt("div", C5, [
            gt("div", b5, [
              gt("div", k5, [
                ni(gt("h4", x5, null, 512), [
                  [S, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              gt("div", $5, [
                kl(We(Ne), {
                  type: "icon",
                  icon: We(Gs),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            ni(gt("h6", V5, null, 512), [
              [S, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: Vn(() => [
          kl(We(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (k) => h(We(s)))
          }, {
            header: Vn(() => [
              ni(gt("h5", E5, null, 512), [
                [S, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: Vn(() => [
              gt("p", {
                dir: We(R.getDir)(We(g)),
                lang: We(g),
                innerHTML: p.value[We(s)]
              }, null, 8, L5)
            ]),
            _: 1
          }),
          (xl(!0), v5(_5, null, w5(d.value, (k) => (xl(), fp(We(Ze), {
            key: k,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (x) => h(k)
          }, {
            header: Vn(() => [
              gt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: S5(We(f)(k))
              }, null, 8, A5)
            ]),
            default: Vn(() => [
              gt("p", {
                innerHTML: p.value[k]
              }, null, 8, D5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          kl(We(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (k) => h(We(o)))
          }, {
            header: Vn(() => [
              ni(gt("h5", T5, null, 512), [
                [S, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: Vn(() => [
              B5
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : y5("", !0);
    };
  }
}, M5 = window.Vuex.useStore, zo = () => {
  const { sourceSection: e } = ee(), t = M5(), { translateTranslationUnitById: n } = ou(), { currentMTProvider: o } = ye(t), s = (c) => b(void 0, null, function* () {
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
      let r = 0;
      return g > -1 && (r = u[g].id), s(r);
    },
    selectTranslationUnitById: s
  };
};
const N5 = window.Vue.toDisplayString, Vl = window.Vue.createElementVNode, El = window.Vue.unref, U5 = window.Vue.createVNode, I5 = window.Vue.normalizeClass, R5 = window.Vue.withCtx, z5 = window.Vue.openBlock, O5 = window.Vue.createBlock, j5 = ["href"], H5 = ["textContent"], q5 = ["innerHTML"], So = window.Vue.computed, G5 = window.Vuex.useStore, wp = "sx-sentence-selector__section-title", X5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = G5(), { sourceSection: n, isSectionTitleSelected: o } = ee(), { currentSourcePage: s } = st(), { sourceLanguage: a } = ye(t), i = So(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = So(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), u = So(
      () => W.getPageUrl(a.value, i.value)
    ), g = So(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = So(
      () => g.value ? "translated" : "selected"
    ), l = So(() => {
      const m = [wp];
      return o.value && m.push(`${wp}--${r.value}`), m;
    }), { selectTranslationUnitById: d } = zo(), p = () => d(0);
    return (m, h) => (z5(), O5(El(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: R5(() => [
        Vl("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Vl("strong", {
            textContent: N5(i.value)
          }, null, 8, H5),
          U5(El(Re), {
            icon: El(Lm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, j5),
        Vl("h2", {
          class: I5(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, q5)
      ]),
      _: 1
    }));
  }
};
const zt = window.Vue.unref, ws = window.Vue.createVNode, oi = window.Vue.withCtx, _p = window.Vue.toDisplayString, vp = window.Vue.createTextVNode, W5 = window.Vue.openBlock, K5 = window.Vue.createBlock, Y5 = window.Vue.computed, Ll = window.Codex.CdxButton, Sp = window.Codex.CdxIcon, wf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ee(), s = Y5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (W5(), K5(zt(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: oi(() => [
        ws(zt(Ll), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: zt(n),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: oi(() => [
            ws(zt(Sp), {
              class: "me-1",
              icon: zt(Kc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ws(zt(Ll), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !zt(o),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: oi(() => [
            vp(_p(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ws(zt(Ll), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: oi(() => [
            vp(_p(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ws(zt(Sp), {
              class: "ms-1",
              size: "small",
              icon: zt(Zs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Gn = window.Vue.unref, J5 = window.Vue.toDisplayString, _s = window.Vue.createVNode, si = window.Vue.withCtx, Q5 = window.Vue.openBlock, Z5 = window.Vue.createBlock, Al = window.Vue.computed, eL = window.Vuex.useStore, tL = window.Codex.CdxButton, nL = window.Codex.CdxIcon, oL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = eL(), n = Al(() => t.state.application.currentMTProvider), o = he(), s = Al(() => ({
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [te.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Al(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        te.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (Q5(), Z5(Gn(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: si(() => [
        _s(Gn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: si(() => [
            _s(Gn(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: J5(a.value)
            }, null, 8, ["textContent"]),
            _s(Gn(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: si(() => [
                _s(Gn(tL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (u) => i.$emit("configure-options"))
                }, {
                  default: si(() => [
                    _s(Gn(nL), {
                      class: "pa-0",
                      icon: Gn(Xc)
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
const $t = window.Vue.unref, En = window.Vue.createVNode, sL = window.Vue.resolveDirective, yp = window.Vue.createElementVNode, aL = window.Vue.withDirectives, Cp = window.Vue.toDisplayString, bp = window.Vue.createTextVNode, vs = window.Vue.withCtx, iL = window.Vue.openBlock, rL = window.Vue.createElementBlock, lL = { class: "mt-retry-body pb-5" }, cL = { class: "retry-body__message" }, kp = window.Codex.CdxButton, Dl = window.Codex.CdxIcon, uL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = sL("i18n");
      return iL(), rL("div", lL, [
        yp("div", cL, [
          En($t(Dl), {
            class: "me-2",
            icon: $t(Nh)
          }, null, 8, ["icon"]),
          aL(yp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        En($t(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: vs(() => [
            En($t(C), { cols: "6" }, {
              default: vs(() => [
                En($t(kp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: vs(() => [
                    En($t(Dl), {
                      class: "me-1",
                      icon: $t(Hh)
                    }, null, 8, ["icon"]),
                    bp(" " + Cp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            En($t(C), { cols: "6" }, {
              default: vs(() => [
                En($t(kp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: vs(() => [
                    En($t(Dl), {
                      class: "me-1",
                      icon: $t(Nb)
                    }, null, 8, ["icon"]),
                    bp(" " + Cp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const yo = window.Vue.createVNode, Ke = window.Vue.unref, Ss = window.Vue.openBlock, dL = window.Vue.createElementBlock, gL = window.Vue.createCommentVNode, ai = window.Vue.createBlock, pL = window.Vue.normalizeClass, mL = window.Vue.normalizeStyle, ys = window.Vue.withCtx, hL = window.Vue.toDisplayString, fL = window.Vue.createTextVNode, wL = window.Vue.normalizeProps, _L = window.Vue.guardReactiveProps, vL = ["lang", "dir", "innerHTML"], Tl = window.Vue.ref, SL = window.Vue.onMounted, yL = window.Vue.onBeforeUnmount, Bl = window.Vue.computed, CL = window.Vue.nextTick, bL = window.Vuex.useStore, kL = window.Codex.CdxButton, xL = window.Codex.CdxIcon, $L = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Tl(0), n = Tl(null), o = Tl(null), s = bL(), { currentMTProvider: a } = ye(s), { targetLanguageURLParameter: i } = B(), { sourceSection: c, currentProposedTranslation: u } = ee(), g = Bl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), r = Bl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = Bl(
      () => !!u.value || a.value === te.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    SL(() => b(this, null, function* () {
      yield CL(), d(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), yL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => d());
    return (m, h) => (Ss(), ai(Ke(Ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ys(() => [
        yo(Ke(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ys(() => [
            yo(oL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            yo(Ke(C), {
              class: pL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && g.value
              }]),
              style: mL(l.value ? r.value : null)
            }, {
              default: ys(() => [
                l.value ? (Ss(), dL("section", {
                  key: 0,
                  lang: Ke(i),
                  dir: Ke(R.getDir)(Ke(i)),
                  innerHTML: Ke(u)
                }, null, 8, vL)) : g.value ? (Ss(), ai(Ke(et), { key: 1 })) : (Ss(), ai(uL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            yo(Ke(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ys(() => [
                l.value || g.value ? (Ss(), ai(Ke(kL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Ke(u)))
                }, {
                  default: ys(() => [
                    yo(Ke(xL), {
                      class: "me-1",
                      icon: Ke(Gc)
                    }, null, 8, ["icon"]),
                    fL(" " + hL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : gL("", !0),
                yo(wf, wL(_L(m.$attrs)), null, 16)
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
}, VL = window.Vue.computed, EL = (e) => VL(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const i = ["untranslated", "translated", "selected"].map(
      (u) => `${t}--${u}`
    );
    s.classList.remove(...i), a.selected && s.classList.add(`${t}--selected`);
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const LL = window.Vue.unref, AL = window.Vue.normalizeClass, DL = window.Vue.openBlock, TL = window.Vue.createElementBlock, BL = ["innerHTML"], PL = window.Vue.onMounted, FL = window.Vue.ref, ML = window.Vue.computed, NL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: Qe,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = FL(null), a = EL(n.subSection);
    PL(() => {
      s.value.addEventListener("click", (g) => {
        let r;
        if (n.subSection.isBlockTemplate)
          r = n.subSection;
        else {
          const l = g.composedPath().find(
            (d) => d instanceof Element && d.classList.contains("cx-segment")
          );
          if (!l)
            return;
          r = n.subSection.getSentenceById(
            l.dataset.segmentid
          );
        }
        c(r);
      });
    });
    const { selectTranslationUnitById: i } = zo(), c = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      i(g.id);
    }, u = ML(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, r) => (DL(), TL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: AL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: LL(a)
    }, null, 10, BL));
  }
};
const xp = window.Vue.unref, $p = window.Vue.createVNode, Vp = window.Vue.normalizeStyle, UL = window.Vue.openBlock, IL = window.Vue.createElementBlock, Ep = window.Vue.computed, _f = {
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
    const t = e, n = Ep(() => ({ "--size": t.size })), o = Ep(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Am : wi
    );
    return (s, a) => (UL(), IL("div", {
      class: "block-template-status-indicator",
      style: Vp(n.value)
    }, [
      $p(xp(t_), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      $p(xp(Re), {
        icon: o.value,
        size: e.size / 2,
        style: Vp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, Cs = window.Vue.openBlock, ii = window.Vue.createBlock;
window.Vue.createCommentVNode;
const sn = window.Vue.unref, Co = window.Vue.withCtx, bs = window.Vue.createVNode, Pl = window.Vue.toDisplayString, Fl = window.Vue.createElementVNode, RL = window.Vue.renderList, zL = window.Vue.Fragment, OL = window.Vue.createElementBlock, jL = { class: "pa-4" }, HL = ["textContent"], qL = ["textContent"], GL = window.Vuex.useStore, ri = window.Vue.computed, XL = {
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
    const t = e, { targetLanguageAutonym: n } = ye(GL()), o = ri(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = he(), a = ri(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), i = ri(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), c = ri(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: y0,
          color: pt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Gs,
          color: pt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: wi,
          color: pt.blue600
        });
      else {
        let g;
        t.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : g = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: g,
          icon: wi,
          color: pt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: bi,
        color: pt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: o0,
        color: pt.gray500
      }), u;
    });
    return (u, g) => (Cs(), ii(sn(ft), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (r) => u.$emit("update:active", r))
    }, {
      header: Co(() => [
        bs(sn(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Co(() => [
            bs(sn(C), { shrink: "" }, {
              default: Co(() => [
                e.targetTemplateExists ? (Cs(), ii(_f, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Cs(), ii(sn(Re), {
                  key: 1,
                  icon: sn(s0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Co(() => [
        Fl("div", jL, [
          Fl("h3", {
            textContent: Pl(a.value)
          }, null, 8, HL),
          Fl("p", {
            class: "mt-6 text-small",
            textContent: Pl(i.value)
          }, null, 8, qL),
          (Cs(!0), OL(zL, null, RL(c.value, (r, l) => (Cs(), ii(sn(P), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: Co(() => [
              bs(sn(C), { shrink: "" }, {
                default: Co(() => [
                  bs(sn(Re), {
                    class: "me-2",
                    icon: r.icon,
                    "icon-color": r.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              bs(sn(C), {
                textContent: Pl(r.text)
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
const xe = window.Vue.unref, Fe = window.Vue.createVNode, Ot = window.Vue.withCtx, Ml = window.Vue.toDisplayString, Lp = window.Vue.createTextVNode, WL = window.Vue.resolveDirective, Ap = window.Vue.withDirectives, Dp = window.Vue.createElementVNode, KL = window.Vue.normalizeClass, li = window.Vue.openBlock, Tp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Bp = window.Vue.createBlock, YL = window.Vue.normalizeProps, JL = window.Vue.guardReactiveProps, QL = { class: "block-template-adaptation-card__container pa-4" }, ZL = ["textContent"], eA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, He = window.Vue.computed, tA = window.Vue.ref, nA = window.Vuex.useStore, Pp = window.Codex.CdxButton, Fp = window.Codex.CdxIcon, oA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = nA(), { targetLanguageAutonym: n, currentMTProvider: o } = ye(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = ee(), i = He(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), c = He(
      () => {
        var E;
        return (E = s.value) == null ? void 0 : E.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = He(
      () => {
        var E;
        return !((E = t.state.application.mtRequestsPending) != null && E.includes(
          s.value.id
        ));
      }
    ), g = he(), r = He(
      // Strip HTML comments and return
      () => {
        var E, T;
        return ((T = (E = s.value) == null ? void 0 : E.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), l = He(
      () => {
        var E, T;
        return (T = (E = s.value) == null ? void 0 : E.blockTemplateAdaptationInfo) == null ? void 0 : T[o.value];
      }
    ), d = He(
      () => {
        var E, T;
        return ((E = l.value) == null ? void 0 : E.adapted) || !!((T = l.value) != null && T.partial);
      }
    ), p = He(() => l.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), m = He(() => l.value ? d.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = He(
      () => {
        var E;
        return Object.keys(((E = s.value) == null ? void 0 : E.sourceTemplateParams) || {}).length;
      }
    ), f = He(() => {
      var T;
      const E = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(E || {});
    }), _ = He(() => f.value.length), w = He(() => {
      const E = x.value;
      return h.value + E === 0 ? 100 : _.value / (h.value + E) * 100 || 0;
    }), y = tA(!1), S = () => {
      y.value = !0;
    }, k = (E) => E.filter((T) => !f.value.includes(T)), x = He(() => {
      var T;
      const E = ((T = l.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return k(E).length;
    }), L = He(() => {
      var T;
      const E = ((T = l.value) == null ? void 0 : T.optionalTargetParams) || [];
      return k(E).length;
    });
    return (E, T) => {
      const U = WL("i18n");
      return li(), Bp(xe(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Ot(() => [
          Dp("div", QL, [
            Fe(xe(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Ot(() => [
                Fe(xe(C), { shrink: "" }, {
                  default: Ot(() => [
                    Fe(xe(Fp), {
                      icon: xe(Ub),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Fe(xe(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Ot(() => [
                    Lp(Ml(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (li(), Tp("div", {
              key: 0,
              class: KL(["pa-4 mb-4", p.value])
            }, [
              Fe(xe(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Ot(() => [
                  Ap(Fe(xe(C), { tag: "h5" }, null, 512), [
                    [U, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Fe(xe(C), { shrink: "" }, {
                    default: Ot(() => [
                      Fe(_f, {
                        percentage: w.value,
                        size: 20,
                        "is-template-adapted": d.value,
                        "stroke-width": 2,
                        onClick: S
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Dp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Ml(c.value)
              }, null, 8, ZL),
              Fe(xe(Pp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (M) => E.$emit("edit-translation", i.value))
              }, {
                default: Ot(() => [
                  Lp(Ml(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (li(), Tp("div", eA, [
              Fe(xe(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Ot(() => [
                  Ap(Fe(xe(C), { tag: "h5" }, null, 512), [
                    [U, [
                      xe(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Fe(xe(C), { shrink: "" }, {
                    default: Ot(() => [
                      Fe(xe(Pp), {
                        weight: "quiet",
                        "aria-label": E.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Ot(() => [
                          Fe(xe(Fp), {
                            icon: xe(Fb),
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
            ])) : (li(), Bp(xe(et), { key: 2 }))
          ]),
          Fe(wf, YL(JL(E.$attrs)), null, 16),
          Fe(XL, {
            active: y.value,
            "onUpdate:active": T[1] || (T[1] = (M) => y.value = M),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": x.value,
            "optional-missing-params-count": L.value,
            "is-template-adapted": d.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const sA = window.Vue.unref, aA = window.Vue.createVNode, iA = window.Vue.openBlock, rA = window.Vue.createElementBlock, lA = { class: "translated-segment-card-header" }, cA = window.Vue.computed, uA = {
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
    const n = t, { isSectionTitleSelected: o } = ee(), s = he(), a = cA(() => [
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
    ]), i = (c) => n("update:selection", c);
    return (c, u) => (iA(), rA("div", lA, [
      aA(sA(qs), {
        items: a.value,
        active: e.selection,
        onSelect: i
      }, null, 8, ["items", "active"])
    ]));
  }
};
const Ln = window.Vue.unref, ci = window.Vue.createVNode, Nl = window.Vue.withCtx, dA = window.Vue.openBlock, gA = window.Vue.createBlock, pA = window.Vue.computed, Mp = window.Codex.CdxButton, Np = window.Codex.CdxIcon, mA = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ee(), o = pA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (dA(), gA(Ln(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Nl(() => [
        ci(Ln(Mp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Ln(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: Nl(() => [
            ci(Ln(Np), { icon: Ln(Kc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ci(Ln(Mp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: Nl(() => [
            ci(Ln(Np), { icon: Ln(Zs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const hA = window.Vue.useCssVars, Me = window.Vue.createVNode, Up = window.Vue.resolveDirective, fA = window.Vue.createElementVNode, Ul = window.Vue.withDirectives, me = window.Vue.unref, wA = window.Vue.normalizeStyle, ui = window.Vue.openBlock, Ip = window.Vue.createElementBlock, _A = window.Vue.createCommentVNode, vA = window.Vue.normalizeClass, ut = window.Vue.withCtx, SA = window.Vue.toDisplayString, yA = window.Vue.createTextVNode, Rp = window.Vue.createBlock, CA = window.Vue.normalizeProps, bA = window.Vue.guardReactiveProps, an = window.Vue.computed, kA = window.Vue.ref, xA = window.Vue.inject, $A = window.Vuex.useStore, VA = window.Codex.CdxButton, Il = window.Codex.CdxIcon, EA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    hA((w) => ({
      "4929555c": _.value
    }));
    const t = kA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ee(), { targetLanguage: a } = ye($A()), i = an(() => t.value === "sentence"), c = an(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = an(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), g = xA("colors"), r = g.gray200, l = g.red600, d = an(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : c.value.translatedContent), p = an(
      () => Gt.calculateScore(
        d.value,
        u.value,
        a.value
      )
    ), m = an(
      () => Gt.getScoreStatus(p.value)
    ), h = an(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = an(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), _ = an(
      () => f.value[m.value]
    );
    return (w, y) => {
      const S = Up("i18n"), k = Up("i18n-html");
      return ui(), Rp(me(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ut(() => [
          Me(me(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ut(() => [
              Me(uA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (x) => t.value = x)
              }, null, 8, ["selection"]),
              Me(me(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ut(() => [
                  Me(me(P), { class: "ma-0" }, {
                    default: ut(() => [
                      Me(me(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ut(() => [
                          Ul(fA("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Ul((ui(), Ip("p", {
                            key: 0,
                            style: wA({ color: me(l) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Ul((ui(), Ip("p", {
                            key: 1,
                            class: vA(h.value)
                          }, null, 2)), [
                            [k, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Me(me(C), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ut(() => [
                          Me(me(P), { class: "ma-0 ms-2" }, {
                            default: ut(() => [
                              Me(me(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ut(() => [
                                  Me(me(Il), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: me(zb)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Me(me(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ut(() => [
                                  Me(me(Tm), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: me(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Me(me(C), { shrink: "" }, {
                                default: ut(() => [
                                  Me(me(Il), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: me(Ib)
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
                  i.value ? (ui(), Rp(me(VA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (x) => w.$emit("edit-translation", d.value))
                  }, {
                    default: ut(() => [
                      Me(me(Il), {
                        class: "me-1",
                        icon: me(Gc)
                      }, null, 8, ["icon"]),
                      yA(" " + SA(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : _A("", !0)
                ]),
                _: 1
              }),
              Me(me(C), { class: "translated-segment-card__actions" }, {
                default: ut(() => [
                  Me(mA, CA(bA(w.$attrs)), null, 16)
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
}, LA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ee(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = zo(), { currentTranslation: s } = Bt();
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
}, vf = window.Vuex.useStore, AA = () => {
  const e = vf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Li.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, DA = () => {
  const e = vf(), { currentMTProvider: t } = ye(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = AA();
  return () => b(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = te.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
  });
}, TA = window.Vue.computed, BA = (e) => {
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
}, PA = () => {
  const { selectedContentTranslationUnit: e } = ee(), t = TA(
    () => e.value instanceof Qe
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && BA(o);
  };
}, FA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (c) => !te.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, MA = window.Vue.computed, Sf = () => {
  const { currentTranslation: e } = Bt(), { currentSourcePage: t } = st();
  return MA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, NA = window.Vuex.useStore, su = () => {
  const e = NA(), { sourceSection: t, targetPageTitleForPublishing: n } = ee(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = Sf();
  return () => {
    const c = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (p) => FA(p, u)
    );
    const l = t.value.getTranslationProgress(a), d = e.getters["application/isSandboxTarget"];
    return ht.saveTranslation({
      sourceTitle: o.value,
      targetTitle: c,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: i.value,
      units: r.map((p) => p.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: g,
      isSandbox: d,
      progress: l
    });
  };
}, UA = window.Vue.effectScope, IA = window.Vue.onScopeDispose, RA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = UA(!0), n = o.run(() => e(...a))), IA(s), n);
}, zA = window.Vuex.useStore;
let Rl;
const OA = () => {
  const e = zA(), t = su();
  let n = 1e3, o = 0;
  return Rl = Yc(() => t().then((a) => {
    a instanceof Do ? (n *= o + 1, o++, setTimeout(Rl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Po)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Rl;
}, yf = RA(OA), jA = window.Vuex.useStore, HA = () => {
  const e = jA(), t = yf(), { currentMTProvider: n } = ye(e), { sourceSection: o, currentProposedTranslation: s } = ee(), { selectNextTranslationUnit: a } = zo();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, qA = window.Vuex.useStore, GA = () => {
  const e = qA(), t = yf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, XA = window.Vuex.useStore, WA = window.Vue.computed, Cf = () => {
  const e = XA(), t = Ae(), { currentTranslation: n } = Bt(), { currentMTProvider: o, previousRoute: s } = ye(e), { currentTargetPage: a } = st(), {
    sourceLanguageURLParameter: i,
    targetLanguageURLParameter: c,
    pageURLParameter: u,
    sectionURLParameter: g
  } = B(), r = ot(), l = WA(() => {
    var _;
    const f = {
      translation_source_language: i.value,
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
    if (g.value ? (f.translation_source_section = g.value, f.translation_type = "section") : f.translation_type = "article", n.value) {
      f.translation_id = n.value.translationId, f.translation_target_title = n.value.targetTitle;
      const w = n.value.targetSectionTitle;
      w && (f.translation_target_section = w);
    } else
      a.value && (f.translation_target_title = (_ = a.value) == null ? void 0 : _.title);
    return o.value && (f.translation_provider = te.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var S;
      const f = t.currentRoute.value.meta.workflowStep, w = t.getRoutes().find(
        (k) => k.name === s.value
      ), y = ((S = w == null ? void 0 : w.meta) == null ? void 0 : S.workflowStep) || 0;
      return f > y ? r(fe({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => r(fe({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => r(fe({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => r(fe({
      event_type: "editor_segment_add"
    }, l.value))
  };
}, KA = (e, t, n, o) => b(void 0, null, function* () {
  var c, u, g;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((u = t.mt) == null ? void 0 : u.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, i = yield ff(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), YA = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, JA = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return KA(e, t, n, o);
  YA(e, t);
}), QA = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const u = o.find(
          (r) => r.subSectionId === c.id
        );
        if (!u)
          continue;
        const g = JA(
          c,
          u,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, ZA = { restoreCorporaDraft: QA }, eD = () => {
  const { currentSourcePage: e } = st(), { sourceSection: t } = ee();
  return (n) => b(void 0, null, function* () {
    n.restored || (yield ht.fetchTranslationUnits(n.translationId).then(
      (s) => ZA.restoreCorporaDraft(
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
const le = window.Vue.unref, dt = window.Vue.createVNode, rn = window.Vue.withCtx, tD = window.Vue.resolveDirective, zp = window.Vue.createElementVNode, nD = window.Vue.withDirectives, oD = window.Vue.toDisplayString, sD = window.Vue.createTextVNode, aD = window.Vue.renderList, iD = window.Vue.Fragment, An = window.Vue.openBlock, Op = window.Vue.createElementBlock, bo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const rD = window.Vue.normalizeClass, lD = window.Vue.normalizeStyle, cD = { class: "sx-sentence-selector__header-title mb-0" }, uD = { class: "sx-sentence-selector__section-contents px-4" }, ko = window.Vue.computed, dD = window.Vue.nextTick, gD = window.Vue.onMounted, ks = window.Vue.ref, jp = window.Vue.watch, pD = window.Vuex.useStore, Hp = window.Codex.CdxButton, mD = window.Codex.CdxIcon, hD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ks(!1), n = ks(!1), o = ks("100%"), s = pD(), { currentMTProvider: a } = ye(s), {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: g
    } = B(), { sourceSection: r, selectedContentTranslationUnit: l } = ee(), d = ks({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = ko(
      () => Object.values(d.value).every(Boolean)
    ), m = ko(
      () => {
        var J;
        return (J = r.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), h = ko(() => {
      var J;
      return (J = r.value) == null ? void 0 : J.subSections;
    }), f = ko(
      () => {
        var J;
        return (J = r.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), _ = ko(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: w,
      logEditorCloseEvent: y,
      logEditorCloseWarnEvent: S,
      logEditorSegmentAddEvent: k
    } = Cf(), x = LA();
    DA()().then(() => {
      w(), d.value.mtProviders = !0;
    });
    const E = PA(), { fetchTranslationsByStatus: T, translationsFetched: U } = Io(), M = eD(), { currentTranslation: K } = Bt(), { selectPageSectionByTitle: H, selectPageSectionByIndex: pe } = Mi(), $e = tu(), wt = Mo();
    gD(() => b(this, null, function* () {
      if (!U.value.draft) {
        const J = [
          // required to get current draft translation (if exists)
          T("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          $e(i.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          wt(i.value, [u.value])
        ];
        yield Promise.all(J);
      }
      d.value.pageMetadata = !0, g.value ? yield H(g.value) : yield pe(0), d.value.pageContent = !0, K.value && (yield M(K.value)), d.value.draftRestored = !0, jp(
        p,
        () => b(this, null, function* () {
          p.value && (yield dD(), x(), E());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), jp(l, E);
    const {
      selectNextTranslationUnit: Ve,
      selectPreviousTranslationUnit: Ee
    } = zo(), Pt = HA(), Ie = () => {
      k(), Pt();
    }, De = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, oe = Ae(), O = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        Q.value = !0, S();
        return;
      }
      X();
    }, q = GA(), { clearTranslationURLParameters: de } = B(), X = () => b(this, null, function* () {
      T("draft"), K.value && (r.value.reset(), K.value.restored = !1), y(), de(), q(), yield oe.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: v,
      translateSelectedTranslationUnitForAllProviders: D
    } = ou(), A = () => {
      N.value || (t.value = !0, D());
    }, { getCurrentTitleByLanguage: F } = hn(), j = (J, Z) => {
      oe.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: f.value,
          title: F(
            c.value,
            i.value
          ),
          isInitialEdit: Z || null
        }
      });
    }, ae = () => oe.push({ name: "sx-publisher" }), z = () => b(this, null, function* () {
      l.value ? yield v(
        l.value.id,
        a.value
      ) : yield v(0, a.value);
    }), N = ko(
      () => l.value instanceof Qe
    ), Q = ks(!1);
    return (J, Z) => {
      const ta = tD("i18n");
      return An(), Op("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: lD(_.value)
      }, [
        dt(le(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: rn(() => [
            dt(le(C), { shrink: "" }, {
              default: rn(() => [
                dt(le(Hp), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: O
                }, {
                  default: rn(() => [
                    dt(le(mD), { icon: le(Ih) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            dt(le(C), {
              grow: "",
              class: "px-1"
            }, {
              default: rn(() => [
                nD(zp("h4", cD, null, 512), [
                  [ta, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            dt(le(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: rn(() => [
                dt(le(Hp), {
                  disabled: !(le(r) && le(r).isTranslated),
                  onClick: ae
                }, {
                  default: rn(() => [
                    sD(oD(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (An(), bo(le(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: rn(() => [
            dt(le(C), {
              dir: le(R.getDir)(le(i)),
              lang: le(i),
              class: "sx-sentence-selector__section"
            }, {
              default: rn(() => [
                dt(X5),
                zp("div", uD, [
                  (An(!0), Op(iD, null, aD(h.value, (Oe) => (An(), bo(NL, {
                    id: Oe.id,
                    key: `sub-section-${Oe.id}`,
                    "sub-section": Oe,
                    onBounceTranslation: De
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !N.value && m.value ? (An(), bo(EA, {
              key: 0,
              onEditTranslation: Z[0] || (Z[0] = (Oe) => j(Oe, !1)),
              onSkipTranslation: le(Ve),
              onSelectPreviousSegment: le(Ee)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : N.value ? (An(), bo(oA, {
              key: 2,
              onEditTranslation: j,
              onApplyTranslation: Ie,
              onSkipTranslation: le(Ve),
              onSelectPreviousSegment: le(Ee)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (An(), bo($L, {
              key: 1,
              class: rD({ "mb-0": !n.value }),
              onConfigureOptions: A,
              onEditTranslation: Z[1] || (Z[1] = (Oe) => j(Oe, !0)),
              onApplyTranslation: Ie,
              onSkipTranslation: le(Ve),
              onSelectPreviousSegment: le(Ee),
              onRetryTranslation: z
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (An(), bo(le(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: rn(() => [
            dt(le(et), { class: "mt-0" })
          ]),
          _: 1
        })),
        dt(F5, {
          active: t.value,
          "onUpdate:active": Z[2] || (Z[2] = (Oe) => t.value = Oe)
        }, null, 8, ["active"]),
        dt(d5, {
          modelValue: Q.value,
          "onUpdate:modelValue": Z[3] || (Z[3] = (Oe) => Q.value = Oe),
          onDiscardTranslation: X
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const fD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: hD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, wD = window.Vue.resolveComponent, _D = window.Vue.createVNode, vD = window.Vue.normalizeClass, SD = window.Vue.openBlock, yD = window.Vue.createElementBlock;
function CD(e, t, n, o, s, a) {
  const i = wD("sx-sentence-selector");
  return SD(), yD("main", {
    class: vD(["sx-sentence-selector-view", a.classes])
  }, [
    _D(i)
  ], 2);
}
const bD = /* @__PURE__ */ ne(fD, [["render", CD]]), kD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, xD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const $D = window.Vue.resolveDirective, di = window.Vue.withDirectives, Vt = window.Vue.openBlock, ln = window.Vue.createElementBlock, gi = window.Vue.createCommentVNode, pi = window.Vue.Transition, Xn = window.Vue.withCtx, xo = window.Vue.createVNode, xs = window.Vue.createElementVNode, Dn = window.Vue.unref, VD = window.Vue.renderList, ED = window.Vue.Fragment, LD = window.Vue.normalizeClass, qp = window.Vue.createBlock, AD = window.Vue.toDisplayString, DD = window.Vue.createTextVNode, TD = { class: "sx-quick-tutorial" }, BD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, PD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, FD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, MD = { class: "sx-quick-tutorial__illustration" }, ND = ["innerHTML"], UD = ["innerHTML"], ID = { class: "sx-quick-tutorial__step-indicator py-3" }, RD = ["onClick"], zD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, OD = {
  key: "secondary-point-1",
  class: "ma-0"
}, jD = {
  key: "secondary-point-2",
  class: "ma-0"
}, HD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Gp = window.Vue.ref, Xp = window.Codex.CdxButton, qD = window.Codex.CdxIcon, GD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Gp(2), n = Gp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (i) => i === n.value;
    Ae();
    const a = Ro();
    return (i, c) => {
      const u = $D("i18n");
      return Vt(), ln("section", TD, [
        xo(Dn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Xn(() => [
            xs("section", BD, [
              xo(pi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? di((Vt(), ln("h2", PD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? di((Vt(), ln("h2", FD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : gi("", !0)
                ]),
                _: 1
              })
            ]),
            xs("section", MD, [
              xo(pi, { name: "mw-ui-animation-slide-start" }, {
                default: Xn(() => [
                  s(1) ? (Vt(), ln("div", {
                    key: "illustration-1",
                    innerHTML: Dn(xD)
                  }, null, 8, ND)) : s(2) ? (Vt(), ln("div", {
                    key: "illustration-2",
                    innerHTML: Dn(kD)
                  }, null, 8, UD)) : gi("", !0)
                ]),
                _: 1
              })
            ]),
            xs("div", ID, [
              (Vt(!0), ln(ED, null, VD(t.value, (g) => (Vt(), ln("span", {
                key: `dot-${g}`,
                class: LD(["dot mx-1", { "dot-active": s(g) }]),
                role: "button",
                onClick: (r) => n.value = g
              }, null, 10, RD))), 128))
            ]),
            xs("section", zD, [
              xo(pi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? di((Vt(), ln("h3", OD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? di((Vt(), ln("h3", jD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : gi("", !0)
                ]),
                _: 1
              })
            ]),
            xs("div", HD, [
              xo(pi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? (Vt(), qp(Dn(Xp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": i.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Xn(() => [
                      xo(Dn(qD), { icon: Dn(Zs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Vt(), qp(Dn(Xp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Dn(a)
                  }, {
                    default: Xn(() => [
                      DD(AD(i.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : gi("", !0)
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
const XD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: GD
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
  const i = WD("sx-quick-tutorial");
  return JD(), QD("main", {
    class: YD(["sx-quick-tutorial-view", a.classes])
  }, [
    KD(i)
  ], 2);
}
const eT = /* @__PURE__ */ ne(XD, [["render", ZD]]);
const tT = window.Vue.resolveDirective, Wp = window.Vue.createElementVNode, nT = window.Vue.withDirectives, oT = window.Vue.unref, sT = window.Vue.withCtx, aT = window.Vue.createVNode, iT = window.Vue.openBlock, rT = window.Vue.createElementBlock, lT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, cT = { class: "sx-editor__original-content-panel__header mb-2" }, uT = ["lang", "dir", "innerHTML"], Kp = window.Vue.ref, dT = window.Vue.onMounted, gT = {
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
    const t = e, n = (i, c) => {
      const u = i.getElementsByTagName("a");
      for (const g of u)
        g.href = W.getPageUrl(c, g.title), g.target = "_blank";
    }, o = Kp(null), s = Kp(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return dT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (i, c) => {
      const u = tT("i18n");
      return iT(), rT("section", lT, [
        nT(Wp("h5", cT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        aT(oT(X1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: sT(() => [
            Wp("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, uT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, pT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const mT = window.Vue.unref, $s = window.Vue.createElementVNode, Yp = window.Vue.resolveDirective, zl = window.Vue.withDirectives, hT = window.Vue.normalizeClass, fT = window.Vue.openBlock, wT = window.Vue.createElementBlock, _T = window.Vue.createCommentVNode, vT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, ST = { class: "sx-editor__feedback-overlay-content px-4" }, yT = ["innerHTML"], CT = { class: "sx-editor__feedback-overlay-content__title" }, bT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Ol = window.Vue.computed, kT = {
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
    const t = e, { targetLanguageURLParameter: n } = B(), o = Ol(
      () => Gt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Ol(() => {
      const i = Gt.getScoreStatus(o.value);
      return i === "failure" ? o.value === 0 ? "failure" : "warning" : i;
    }), a = Ol(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (i, c) => {
      const u = Yp("i18n"), g = Yp("i18n-html");
      return e.showFeedback ? (fT(), wT("div", vT, [
        $s("div", ST, [
          $s("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: mT(pT)
          }, null, 8, yT),
          zl($s("h2", CT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          zl($s("p", bT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          zl($s("p", {
            class: hT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : _T("", !0);
    };
  }
}, xT = window.Vuex.useStore, $T = () => {
  const e = xT(), t = su(), { selectNextTranslationUnit: n } = zo(), { sourceSection: o, selectedContentTranslationUnit: s } = ee(), { getCurrentTitleByLanguage: a } = hn();
  return (i) => b(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), i = c.innerHTML;
    const { sourceLanguage: u, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof Qe && (i = (yield ff(
      i,
      a(g, u),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const Ye = window.Vue.unref, jl = window.Vue.openBlock, Hl = window.Vue.createBlock, Jp = window.Vue.createCommentVNode, Qp = window.Vue.createVNode, VT = window.Vue.createElementVNode, ET = window.Vue.withCtx, LT = { class: "sx-editor__editing-surface-container grow" }, ql = window.Vue.ref, AT = window.Vue.computed, DT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ql(!1), o = Ae(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: i, isInitialEdit: c, content: u, originalContent: g, title: r } = history.state, l = ql(null), d = ql(!1), { logEditorSegmentAddEvent: p } = Cf(), {
      sourceLanguageURLParameter: m,
      targetLanguageURLParameter: h
    } = B(), { sourceSection: f } = ee(), _ = AT(
      () => Gt.calculateScore(
        l.value,
        u,
        h.value
      )
    ), w = $T(), y = (S) => b(this, null, function* () {
      l.value = S, d.value = !0;
      const k = new Promise((L) => setTimeout(L, 2e3));
      let x = Promise.resolve();
      i ? f.value.editedTranslation = S : (_.value === 0 && c && p(), x = w(S)), yield Promise.all([k, x]), d.value = !1, a();
    });
    return (S, k) => (jl(), Hl(Ye(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: ET(() => [
        Ye(g) ? (jl(), Hl(gT, {
          key: 0,
          language: Ye(m),
          dir: Ye(R.getDir)(Ye(m)),
          "original-content": Ye(g)
        }, null, 8, ["language", "dir", "original-content"])) : Jp("", !0),
        n.value ? Jp("", !0) : (jl(), Hl(Ye(et), { key: 1 })),
        VT("div", LT, [
          Qp(kT, {
            "edited-translation": l.value,
            "show-feedback": d.value,
            "proposed-translation": Ye(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Qp(r4, {
            content: Ye(u),
            language: Ye(h),
            dir: Ye(R.getDir)(Ye(h)),
            title: Ye(r),
            onReady: s,
            onClose: a,
            onEditCompleted: y
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const TT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: DT
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
}, BT = window.Vue.resolveComponent, PT = window.Vue.createVNode, FT = window.Vue.normalizeClass, MT = window.Vue.openBlock, NT = window.Vue.createElementBlock;
function UT(e, t, n, o, s, a) {
  const i = BT("sx-editor");
  return MT(), NT("main", {
    class: FT(["sx-editor-view", a.classes])
  }, [
    PT(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const IT = /* @__PURE__ */ ne(TT, [["render", UT]]);
const jt = window.Vue.unref, Wn = window.Vue.createVNode, Vs = window.Vue.withCtx, RT = window.Vue.resolveDirective, zT = window.Vue.withDirectives, OT = window.Vue.openBlock, jT = window.Vue.createBlock, Zp = window.Codex.CdxButton, em = window.Codex.CdxIcon, HT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Ae(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = RT("i18n");
      return OT(), jT(jt(P), { class: "ma-0 sx-publisher__header" }, {
        default: Vs(() => [
          Wn(jt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: Vs(() => [
              Wn(jt(Zp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Vs(() => [
                  Wn(jt(em), { icon: jt(Uo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          zT(Wn(jt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Wn(jt(C), { shrink: "" }, {
            default: Vs(() => [
              Wn(jt(Zp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: Vs(() => [
                  Wn(jt(em), { icon: jt(Db) }, null, 8, ["icon"])
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
}, qT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, GT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, tm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Gl = window.Vue.createElementVNode, nm = window.Vue.toDisplayString, Xl = window.Vue.unref, Wl = window.Vue.withCtx, om = window.Vue.createVNode, XT = window.Vue.openBlock, WT = window.Vue.createBlock, KT = window.Vue.createCommentVNode, YT = ["innerHTML"], JT = ["textContent"], QT = ["textContent"], Kl = window.Vue.computed, ZT = {
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
    const t = he(), n = e, o = {
      pending: {
        svg: qT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: GT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: tm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: tm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Kl(() => o[n.status].svg), a = Kl(() => o[n.status].title), i = Kl(() => o[n.status].subtitle);
    return (c, u) => e.active ? (XT(), WT(Xl(ft), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Wl(() => [
        om(Xl(P), { class: "ma-4" }, {
          default: Wl(() => [
            om(Xl(C), null, {
              default: Wl(() => [
                Gl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, YT),
                Gl("h2", {
                  textContent: nm(a.value)
                }, null, 8, JT),
                Gl("p", {
                  class: "ma-0",
                  textContent: nm(i.value)
                }, null, 8, QT)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : KT("", !0);
  }
};
const Je = window.Vue.unref, Et = window.Vue.createVNode, cn = window.Vue.withCtx, e6 = window.Vue.resolveDirective, t6 = window.Vue.withDirectives, sm = window.Vue.toDisplayString, n6 = window.Vue.createTextVNode, Yl = window.Vue.openBlock, am = window.Vue.createElementBlock, o6 = window.Vue.createCommentVNode, bf = window.Vue.createElementVNode, s6 = window.Vue.createBlock, a6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, i6 = ["src"], r6 = ["textContent"], l6 = /* @__PURE__ */ bf("p", { class: "mt-0" }, null, -1), c6 = window.Vue.computed, u6 = window.Vue.inject, d6 = window.Vue.ref, im = window.Codex.CdxButton, g6 = window.Codex.CdxIcon, p6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: uh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = d6(""), s = () => n("close"), a = () => n("publish", o.value), i = u6("breakpoints"), c = c6(() => i.value.mobile);
    return (u, g) => {
      const r = e6("i18n");
      return e.active && e.captchaDetails ? (Yl(), s6(Je(ft), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: cn(() => [
          Et(Je(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: cn(() => [
              Et(Je(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: cn(() => [
                  Et(Je(im), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: cn(() => [
                      Et(Je(g6), { icon: Je(Uo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              t6(Et(Je(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Et(Je(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: cn(() => [
                  Et(Je(im), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: cn(() => [
                      n6(sm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Et(Je(Ci))
        ]),
        default: cn(() => [
          bf("div", a6, [
            e.captchaDetails.type === "image" ? (Yl(), am("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, i6)) : (Yl(), am("p", {
              key: 1,
              textContent: sm(e.captchaDetails.question)
            }, null, 8, r6)),
            l6,
            Et(Je(P), { class: "ma-0" }, {
              default: cn(() => [
                Et(Je(C), null, {
                  default: cn(() => [
                    Et(Je(lc), {
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
      }, 8, ["fullscreen"])) : o6("", !0);
    };
  }
};
const Kn = window.Vue.unref, Es = window.Vue.createVNode, mi = window.Vue.withCtx, Yn = window.Vue.createElementVNode, m6 = window.Vue.resolveDirective, h6 = window.Vue.withDirectives, f6 = window.Vue.renderList, rm = window.Vue.Fragment, Jl = window.Vue.openBlock, lm = window.Vue.createElementBlock, w6 = window.Vue.toDisplayString, _6 = window.Vue.normalizeClass, v6 = window.Vue.createBlock, S6 = { class: "mw-ui-dialog__header" }, y6 = { class: "row ma-0 px-4 py-3" }, C6 = { class: "col shrink justify-center" }, b6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, k6 = { class: "mb-0" }, x6 = { class: "pa-4" }, $6 = ["textContent"], V6 = window.Vuex.useStore, Ls = window.Vue.computed, E6 = window.Codex.CdxButton, L6 = window.Codex.CdxIcon, A6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = V6(), s = Ls(() => o.state.application.publishTarget), a = Ls(() => o.state.translator.isAnon), i = he(), { sourceSection: c } = ee(), u = Ls(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = Ls(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = Ls(() => [
      {
        label: u.value,
        details: g.value,
        value: "NEW_SECTION",
        disabled: !1
      },
      {
        label: i.i18n("cx-sx-publisher-sandbox-option-label"),
        details: i.i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: a.value
      }
    ]), l = (m) => m === r.value.length - 1 ? "mb-1" : "mb-4", d = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), d();
    };
    return (m, h) => {
      const f = m6("i18n");
      return Jl(), v6(Kn(ft), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: d
      }, {
        header: mi(() => [
          Yn("div", S6, [
            Yn("div", y6, [
              Yn("div", C6, [
                Es(Kn(E6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: d
                }, {
                  default: mi(() => [
                    Es(Kn(L6), { icon: Kn(Ih) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Yn("div", b6, [
                h6(Yn("h4", k6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Es(Kn(Ci))
          ])
        ]),
        default: mi(() => [
          Yn("div", x6, [
            Es(Kn(b1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: mi(() => [
                (Jl(!0), lm(rm, null, f6(r.value, (_, w) => (Jl(), lm(rm, {
                  key: _.label
                }, [
                  Es(Kn(cc), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Yn("p", {
                    class: _6(["complementary ms-7 mt-0", l(w)]),
                    textContent: w6(_.details)
                  }, null, 10, $6)
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
const Lt = window.Vue.unref, Jn = window.Vue.createVNode, cm = window.Vue.resolveDirective, um = window.Vue.withDirectives, hi = window.Vue.openBlock, dm = window.Vue.createElementBlock, D6 = window.Vue.createCommentVNode, gm = window.Vue.toDisplayString, Ql = window.Vue.createElementVNode, $o = window.Vue.withCtx, pm = window.Vue.createBlock, T6 = window.Vue.Fragment, B6 = window.Vue.normalizeClass, P6 = { class: "sx-publisher__review-info__content" }, F6 = { key: 0 }, M6 = ["textContent"], N6 = ["textContent"], Tn = window.Vue.computed, mm = window.Vue.ref, U6 = window.Vue.watch, hm = window.Codex.CdxButton, Zl = window.Codex.CdxIcon, I6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = mm(0), o = mm(null);
    U6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = Tn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Tn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Tn(() => {
      switch (a.value) {
        case "warning":
          return Nh;
        case "error":
          return Lb;
        default:
          return Bb;
      }
    }), c = Tn(() => a.value === "default"), u = Tn(
      () => c.value ? "notice" : a.value
    ), g = Tn(
      () => `sx-publisher__review-info--${u.value}`
    ), r = he(), l = Tn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = Tn(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.title) || r.i18n("cx-sx-publisher-review-info-error");
      }
    ), p = () => {
      const h = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + h) % h;
    }, m = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (h, f) => {
      const _ = cm("i18n"), w = cm("i18n-html");
      return hi(), pm(Lt(W0), {
        type: u.value,
        class: B6(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: c.value
      }, {
        icon: $o(() => [
          Jn(Lt(Zl), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: $o(() => [
          Ql("div", P6, [
            a.value === "default" ? um((hi(), dm("h5", F6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (hi(), dm(T6, { key: 1 }, [
              Ql("h5", {
                textContent: gm(d.value)
              }, null, 8, M6),
              Ql("p", {
                textContent: gm(l.value)
              }, null, 8, N6),
              Jn(Lt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: $o(() => [
                  um(Jn(Lt(C), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [w, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (hi(), pm(Lt(C), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: $o(() => [
                      Jn(Lt(hm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: $o(() => [
                          Jn(Lt(Zl), { icon: Lt(Kc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Jn(Lt(hm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: $o(() => [
                          Jn(Lt(Zl), { icon: Lt(Zs) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : D6("", !0)
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
}, R6 = (e) => {
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
}, z6 = window.Vuex.useStore, O6 = window.Vue.computed, j6 = () => {
  const e = z6(), { currentTranslation: t } = Bt(), { currentMTProvider: n, previousRoute: o } = ye(e), { currentTargetPage: s } = st(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    sectionURLParameter: u
  } = B(), { sourceSection: g } = ee(), r = ot(), l = O6(() => {
    var f;
    const h = {
      translation_source_language: a.value,
      translation_target_language: i.value,
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
    return n.value && (h.translation_provider = te.getProviderForInstrumentation(n.value)), h.human_modification_rate = Gt.getMTScoreForPageSection(
      g.value,
      i.value
    ) / 100, h.human_modification_threshold = Gt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => r(fe({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => r(fe({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => r(fe({
      event_type: "publish_failure"
    }, l.value))
  };
}, fm = window.Vue.ref, H6 = window.Vuex.useStore, q6 = () => {
  const e = H6(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = ee(), i = Sf(), c = fm(!1), u = fm("pending"), g = () => c.value = !1, r = su(), {
    logPublishAttemptEvent: l,
    logPublishSuccessEvent: d,
    logPublishFailureEvent: p
  } = j6(), m = (f, _) => b(void 0, null, function* () {
    l();
    const w = yield r();
    if (w instanceof Do)
      return p(), { publishFeedbackMessage: w, targetUrl: null };
    const y = w, S = a.value, k = e.getters["application/isSandboxTarget"], x = {
      html: R6(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: S,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: i.value,
      isSandbox: k,
      sectionTranslationId: y
    };
    f && (x.captchaId = f, x.captchaWord = _);
    const L = yield ht.publishTranslation(
      x
    );
    return L.publishFeedbackMessage === null ? d(L.pageId, L.revisionId) : p(), L;
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
        if (y instanceof Po)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw y;
      }
      return w;
    }),
    isPublishDialogActive: c,
    publishStatus: u
  };
}, G6 = window.Vue.computed, X6 = () => {
  const e = Ae(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = hn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = G6(
    () => t.value.subSections.reduce(
      (i, c) => c.isTranslated ? `${i}<section rel="cx:Section" id="${c.targetSectionId}">${c.translatedContent}</section>` : i,
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
}, W6 = () => {
  const { targetLanguageURLParameter: e } = B(), { sourceSection: t } = ee();
  return () => {
    const n = Gt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Gt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let i, c;
    return a === "warning" ? (i = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (i = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Do({
      title: i,
      text: c,
      status: a,
      type: "mt"
    });
  };
}, K6 = window.Vue.ref, Y6 = window.Vue.computed, J6 = () => {
  const e = W6(), t = K6([]), n = Y6(
    () => t.value.some((i) => i.isError)
  );
  return {
    addPublishFeedbackMessage: (i) => {
      t.value.push(i), t.value.sort((c, u) => +u.isError - +c.isError);
    },
    clearPublishFeedbackMessages: () => {
      t.value = [];
    },
    publishFeedbackMessages: t,
    isPublishingDisabled: n,
    initializePublishFeedbackMessages: () => {
      const i = e();
      i && t.value.push(i);
    }
  };
}, Q6 = window.Vuex.useStore, Z6 = () => {
  const e = Q6(), { currentSourcePage: t } = st(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = ee();
  return (i) => b(void 0, null, function* () {
    const c = a.value, u = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && r.getNamespaceId() !== l.user)
      try {
        yield Li.addWikibaseLink(
          n.value,
          o.value,
          g,
          c
        );
      } catch (d) {
        mw.log.error("Error while adding wikibase link", d);
      }
    if (!i) {
      const d = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(d), new Error(d);
    }
    location.href = i;
  });
}, wm = window.Vue.ref, e9 = () => {
  const e = wm(!1), t = wm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const _e = window.Vue.unref, qe = window.Vue.createVNode, t9 = window.Vue.resolveDirective, As = window.Vue.createElementVNode, n9 = window.Vue.withDirectives, Vo = window.Vue.withCtx, o9 = window.Vue.openBlock, s9 = window.Vue.createElementBlock, a9 = { class: "sx-publisher" }, i9 = { class: "sx-publisher__publish-panel pa-4" }, r9 = { class: "mb-2" }, l9 = ["innerHTML"], c9 = { class: "sx-publisher__section-preview pa-5" }, u9 = ["innerHTML"], _m = window.Vue.computed, d9 = window.Vue.onMounted, g9 = window.Vue.ref, p9 = window.Vue.watch, m9 = window.Vuex.useStore, vm = window.Codex.CdxButton, Sm = window.Codex.CdxIcon, h9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = m9(), { sourceSection: n } = ee(), o = _m(() => {
      var E;
      return (E = n.value) == null ? void 0 : E.title;
    }), s = he(), a = _m(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: c,
      handleCaptchaError: u,
      onCaptchaDialogClose: g
    } = e9(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = J6(), h = Z6(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: y } = q6(), S = (E = null) => b(this, null, function* () {
      if (l.value)
        return;
      const T = yield f(E, i);
      if (!T)
        return;
      const { publishFeedbackMessage: U, targetUrl: M } = T;
      if (u(U)) {
        y();
        return;
      } else
        U && d(U);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          y();
          return;
        }
        h(M);
      }, 1e3);
    });
    d9(() => m());
    const k = X6(), x = g9(!1), L = () => x.value = !0;
    return p9(x, (E) => {
      E || (p(), m());
    }), (E, T) => {
      const U = t9("i18n");
      return o9(), s9("section", a9, [
        qe(HT, {
          "is-publishing-disabled": _e(l),
          onPublishTranslation: S
        }, null, 8, ["is-publishing-disabled"]),
        As("div", i9, [
          n9(As("h5", r9, null, 512), [
            [U, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          As("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, l9),
          qe(_e(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Vo(() => [
              qe(_e(C), { shrink: "" }, {
                default: Vo(() => [
                  qe(_e(vm), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: L
                  }, {
                    default: Vo(() => [
                      qe(_e(Sm), { icon: _e(Rb) }, null, 8, ["icon"])
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
        qe(I6, { "publish-feedback-messages": _e(r) }, null, 8, ["publish-feedback-messages"]),
        As("section", c9, [
          qe(_e(P), { class: "pb-5 ma-0" }, {
            default: Vo(() => [
              qe(_e(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              qe(_e(C), { shrink: "" }, {
                default: Vo(() => [
                  qe(_e(vm), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: _e(k)
                  }, {
                    default: Vo(() => [
                      qe(_e(Sm), { icon: _e(Gc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          As("div", {
            innerHTML: _e(n).translationHtml
          }, null, 8, u9)
        ]),
        qe(A6, {
          active: x.value,
          "onUpdate:active": T[0] || (T[0] = (M) => x.value = M)
        }, null, 8, ["active"]),
        qe(p6, {
          active: _e(c),
          "captcha-details": _e(i),
          onClose: _e(g),
          onPublish: T[1] || (T[1] = (M) => S(M))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(ZT, {
          active: _e(_),
          status: _e(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const f9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: h9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, w9 = window.Vue.resolveComponent, _9 = window.Vue.createVNode, v9 = window.Vue.normalizeClass, S9 = window.Vue.openBlock, y9 = window.Vue.createElementBlock;
function C9(e, t, n, o, s, a) {
  const i = w9("sx-publisher");
  return S9(), y9("main", {
    class: v9(["sx-publisher-view", a.classes])
  }, [
    _9(i)
  ], 2);
}
const b9 = /* @__PURE__ */ ne(f9, [["render", C9]]);
const At = window.Vue.unref, Bn = window.Vue.createVNode, Qn = window.Vue.withCtx, ec = window.Vue.toDisplayString, tc = window.Vue.createElementVNode, k9 = window.Vue.openBlock, x9 = window.Vue.createBlock, $9 = ["textContent"], V9 = ["textContent"], E9 = ["textContent"], kf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Fo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (k9(), x9(At(P), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: At(R.getDir)(e.suggestion.language)
    }, {
      default: Qn(() => [
        Bn(At(C), { shrink: "" }, {
          default: Qn(() => [
            Bn(At($c), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Bn(At(C), { class: "ms-4" }, {
          default: Qn(() => [
            Bn(At(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Qn(() => [
                Bn(At(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    tc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: ec(e.suggestion.title)
                    }, null, 8, $9)
                  ]),
                  _: 1
                }),
                Bn(At(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    tc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: ec(e.suggestion.description)
                    }, null, 8, V9)
                  ]),
                  _: 1
                }),
                Bn(At(C), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Qn(() => [
                    Bn(At(Re), {
                      icon: At(g0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    tc("small", {
                      textContent: ec(e.suggestion.langLinksCount)
                    }, null, 8, E9)
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
const Ds = window.Vue.unref, Ts = window.Vue.openBlock, nc = window.Vue.createBlock, L9 = window.Vue.createCommentVNode, A9 = window.Vue.resolveDirective, D9 = window.Vue.withDirectives, ym = window.Vue.createElementBlock, T9 = window.Vue.renderList, B9 = window.Vue.Fragment, P9 = window.Vue.normalizeClass, F9 = window.Vue.withCtx, M9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Cm = window.Vue.computed, N9 = window.Vue.ref, U9 = {
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
    const { sourceLanguageURLParameter: t } = B(), n = Cm(() => R.getAutonym(t.value)), o = e, s = N9(null), a = (l) => s.value = l, i = () => s.value = null, c = (l) => {
      var d;
      return ((d = o.selectedItem) == null ? void 0 : d.title) === l.title && !s.value || s.value === l.pageId;
    }, u = Cm(() => o.searchInput), { searchResultsLoading: g, searchResultsSlice: r } = Jc(
      t,
      u
    );
    return (l, d) => {
      const p = A9("i18n");
      return Ts(), nc(Ds(Ze), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: F9(() => [
          Ds(g) ? (Ts(), nc(Ds(et), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Ds(r).length === 0 ? D9((Ts(), ym("p", M9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : L9("", !0),
          (Ts(!0), ym(B9, null, T9(Ds(r), (m) => (Ts(), nc(kf, {
            key: m.pageId,
            suggestion: m,
            class: P9({
              "sx-article-search__results-selected": c(m)
            }),
            onMouseenter: (h) => a(m.pageId),
            onMouseleave: i,
            onClick: (h) => l.$emit("suggestion-clicked", m)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const I9 = window.Vue.toDisplayString, R9 = window.Vue.createElementVNode, z9 = window.Vue.renderList, O9 = window.Vue.Fragment, oc = window.Vue.openBlock, j9 = window.Vue.createElementBlock, H9 = window.Vue.normalizeClass, bm = window.Vue.createBlock, q9 = window.Vue.unref, km = window.Vue.withCtx, G9 = ["textContent"], X9 = window.Vue.ref, xm = {
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
    const n = e, o = X9(null), s = (c) => o.value = c, a = () => o.value = null, i = (c) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === c.title && !o.value || o.value === c.pageId;
    };
    return (c, u) => (oc(), bm(q9(Ze), { class: "sx-article-search__suggestions pa-0" }, {
      header: km(() => [
        R9("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: I9(e.cardTitle)
        }, null, 8, G9)
      ]),
      default: km(() => [
        (oc(!0), j9(O9, null, z9(e.suggestions, (g) => (oc(), bm(kf, {
          key: g.pageId,
          suggestion: g,
          class: H9({
            "sx-article-search__suggestions-selected": i(g)
          }),
          onMouseenter: (r) => s(g.pageId),
          onMouseleave: a,
          onClick: (r) => c.$emit("suggestion-clicked", g)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, W9 = window.Vue.computed, K9 = (e, t) => W9(() => {
  const o = {
    value: "other",
    props: {
      icon: f0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (i, c) => s.findIndex((u) => u === i) === c
  ).map((i) => ({
    value: i,
    props: {
      label: R.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), Y9 = window.Vue.computed, J9 = () => {
  const { supportedSourceLanguageCodes: e } = Ks(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return { getSuggestedSourceLanguages: (s) => Y9(() => {
    const a = (navigator.language || "").split("-")[0], i = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((u) => u.split("-")[0]), c = [
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      a,
      ...s.value,
      ...i
    ];
    return [...new Set(c)].filter(
      (u) => u !== t.value && u !== n.value && e.value.includes(u)
    );
  }) };
};
const Q9 = window.Vue.resolveDirective, Z9 = window.Vue.createElementVNode, sc = window.Vue.withDirectives, ce = window.Vue.unref, Bs = window.Vue.withCtx, Ht = window.Vue.createVNode, Ps = window.Vue.openBlock, $m = window.Vue.createBlock, eB = window.Vue.createCommentVNode, ac = window.Vue.createElementBlock, tB = window.Vue.Fragment, nB = window.Vue.vShow, Fs = window.Vue.withModifiers, Ms = window.Vue.withKeys, oB = ["onKeydown"], sB = { class: "mb-0" }, aB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, Eo = window.Vue.ref, iB = window.Vue.onMounted, Ns = window.Vue.computed, Vm = window.Vue.watch, rB = window.Vue.inject, lB = window.Vuex.useStore, cB = window.Codex.CdxButton, uB = window.Codex.CdxIcon, dB = window.Codex.CdxSearchInput, gB = 3, pB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Eo(""), n = Eo(!1), o = Eo(null), s = Eo(!1), a = Eo([]), i = lB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = B(), { supportedSourceLanguageCodes: g } = Ks(), { searchResultsSlice: r } = Jc(c, t), { getSuggestedSourceLanguages: l } = J9(), d = l(a), p = K9(
      c,
      d
    ), m = Ae(), { fetchAllTranslations: h } = Io();
    iB(() => b(this, null, function* () {
      var O;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (q) {
      }
      (O = o.value) == null || O.focus();
    }));
    const f = () => {
      m.push({ name: "dashboard" });
    }, _ = lh(), w = (O) => _(O, u.value), y = (O) => {
      if (O === "other") {
        s.value = !0;
        return;
      }
      w(O);
    };
    Vm(
      c,
      () => {
        var O;
        i.dispatch("mediawiki/fetchNearbyPages"), (O = o.value) == null || O.focus();
      },
      { immediate: !0 }
    );
    const S = ot();
    Vm(t, () => {
      n.value || (n.value = !0, S({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const k = () => {
      s.value = !1;
    }, x = (O) => {
      s.value = !1, a.value.push(c.value), y(O);
    }, { fetchPreviousEditsInSource: L, previousEditsInSource: E } = Uc(), T = Eo([]);
    (() => L().then(() => E.value.length > 0 ? no.fetchPages(
      c.value,
      E.value
    ) : []).then((O) => {
      O = O.slice(0, gB), O = O.sort(
        (q, de) => E.value.indexOf(q.title) - E.value.indexOf(de.title)
      ), T.value = O;
    }))();
    const M = Ns(() => i.getters["mediawiki/getNearbyPages"]), K = rB("breakpoints"), H = Ns(() => K.value.mobile), pe = ea(), $e = Ns(
      () => T.value && T.value.length
    ), wt = Ns(
      () => M.value && M.value.length
    ), { next: Ve, prev: Ee, keyboardNavigationContainer: Pt, selectedItem: Ie } = tf(t, r, T), De = (O) => pe(
      O.title,
      c.value,
      u.value,
      oe.value
    ), oe = Ns(() => t.value ? "search_result" : $e.value ? "suggestion_recent_edit" : wt.value ? "suggestion_nearby" : "");
    return (O, q) => {
      const de = Q9("i18n");
      return Ps(), ac("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Pt,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          q[5] || (q[5] = Ms(Fs((...X) => ce(Ve) && ce(Ve)(...X), ["stop", "prevent"]), ["tab"])),
          q[6] || (q[6] = Ms(Fs((...X) => ce(Ve) && ce(Ve)(...X), ["stop", "prevent"]), ["down"])),
          q[7] || (q[7] = Ms(Fs((...X) => ce(Ee) && ce(Ee)(...X), ["stop", "prevent"]), ["up"])),
          Ms(Fs(f, ["stop", "prevent"]), ["esc"]),
          q[8] || (q[8] = Ms(Fs((X) => De(ce(Ie)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Ht(ce(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Bs(() => [
            Ht(ce(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Bs(() => [
                sc(Z9("h5", sB, null, 512), [
                  [de, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Ht(ce(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Bs(() => [
                Ht(ce(cB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": O.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Bs(() => [
                    Ht(ce(uB), { icon: ce(Uo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ht(ce(dB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": q[0] || (q[0] = (X) => t.value = X),
          class: "sx-article-search__search-input",
          placeholder: O.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Ht(ce(qs), {
          class: "sx-article-search__language-button-group",
          items: ce(p),
          active: ce(c),
          onSelect: y
        }, null, 8, ["items", "active"]),
        t.value ? eB("", !0) : (Ps(), ac(tB, { key: 0 }, [
          $e.value ? (Ps(), $m(xm, {
            key: 0,
            "card-title": O.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: T.value,
            "selected-item": ce(Ie),
            onSuggestionClicked: q[1] || (q[1] = (X) => De(X))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : wt.value ? (Ps(), $m(xm, {
            key: 1,
            "card-title": O.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: M.value,
            onSuggestionClicked: q[2] || (q[2] = (X) => De(X))
          }, null, 8, ["card-title", "suggestions"])) : sc((Ps(), ac("p", aB, null, 512)), [
            [de, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        sc(Ht(U9, {
          "search-input": t.value,
          "selected-item": ce(Ie),
          onSuggestionClicked: q[3] || (q[3] = (X) => De(X))
        }, null, 8, ["search-input", "selected-item"]), [
          [nB, !!t.value]
        ]),
        Ht(ce(ft), {
          value: s.value,
          "onUpdate:value": q[4] || (q[4] = (X) => s.value = X),
          class: "sx-article-search-language-selector",
          fullscreen: H.value,
          header: H.value,
          title: O.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: k
        }, {
          default: Bs(() => [
            Ht(ce(nf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ce(g),
              suggestions: ce(d),
              placeholder: O.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: x,
              onClose: k
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, oB);
    };
  }
};
const mB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: pB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, hB = window.Vue.resolveComponent, fB = window.Vue.createVNode, wB = window.Vue.normalizeClass, _B = window.Vue.openBlock, vB = window.Vue.createElementBlock;
function SB(e, t, n, o, s, a) {
  const i = hB("sx-article-search");
  return _B(), vB("main", {
    class: wB(["sx-article-search-view", a.classes])
  }, [
    fB(i)
  ], 2);
}
const yB = /* @__PURE__ */ ne(mB, [["render", SB]]), CB = () => {
  const e = ea(), t = tu(), { logDashboardOpenEvent: n, getEventSource: o } = lf(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i
  } = B();
  return () => b(void 0, null, function* () {
    return t(s.value, i.value).then(
      () => n()
    ), e(
      i.value,
      s.value,
      a.value,
      o(),
      null,
      !1
    );
  });
}, bB = window.Vuex.useStore, kB = [
  {
    path: "",
    name: "dashboard",
    component: $g,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: yB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: $V,
    meta: { workflowStep: 1 }
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
    component: o5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: eT,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: bD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: IT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: b9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: $g,
    meta: { workflowStep: 0 }
  }
], au = XC({
  history: Gy(),
  routes: kB
}), ic = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, xB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
au.beforeEach((e, t, n) => {
  const o = bB();
  if (mw.user.isAnon() || Bm.assertUser().catch((r) => {
    r instanceof Po && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = CB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    clearTranslationURLParameters: u
  } = B();
  if (!!(a.value && i.value && c.value)) {
    if (xB(
      a.value,
      i.value,
      c.value
    )) {
      const l = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      ic(e.name, l, n);
    } else
      e.name === "sx-translation-confirmer" && s(), ic(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), ic(e.name, "dashboard", n);
});
au.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const $B = window.Vue.createApp, VB = mw.config.get("wgUserLanguage"), EB = "en", LB = mw.messages.values || {}, Oo = $B(FS);
Oo.use(au);
Oo.use(my);
Oo.use(a_);
Oo.use(s_);
const AB = M_({
  locale: VB,
  finalFallback: EB,
  messages: LB,
  wikilinks: !0
});
Oo.use(AB);
Oo.mount("#contenttranslation");
