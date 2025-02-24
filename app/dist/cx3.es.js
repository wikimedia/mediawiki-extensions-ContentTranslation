/*@nomin*/
var ww = Object.defineProperty, fw = Object.defineProperties;
var _w = Object.getOwnPropertyDescriptors;
var Yc = Object.getOwnPropertySymbols;
var vw = Object.prototype.hasOwnProperty, Sw = Object.prototype.propertyIsEnumerable;
var Jc = (e, t, n) => t in e ? ww(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ce = (e, t) => {
  for (var n in t || (t = {}))
    vw.call(t, n) && Jc(e, n, t[n]);
  if (Yc)
    for (var n of Yc(t))
      Sw.call(t, n) && Jc(e, n, t[n]);
  return e;
}, Je = (e, t) => fw(e, _w(t));
var k = (e, t, n) => new Promise((o, s) => {
  var a = (d) => {
    try {
      c(n.next(d));
    } catch (g) {
      s(g);
    }
  }, r = (d) => {
    try {
      c(n.throw(d));
    } catch (g) {
      s(g);
    }
  }, c = (d) => d.done ? o(d.value) : Promise.resolve(d.value).then(a, r);
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
    CdxMessage: c
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: r,
    CdxMessage: c
  };
}
const Y = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
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
}, Cw = window.Vue.toDisplayString, Ai = window.Vue.openBlock, Ti = window.Vue.createElementBlock, kw = window.Vue.createCommentVNode, Zc = window.Vue.createElementVNode, bw = window.Vue.normalizeClass, xw = ["width", "height", "aria-labelledby"], $w = ["id"], Vw = ["fill"], Ew = ["d"];
function Lw(e, t, n, o, s, a) {
  return Ai(), Ti("span", {
    class: bw(["mw-ui-icon notranslate", a.classes])
  }, [
    (Ai(), Ti("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Ai(), Ti("title", {
        key: 0,
        id: n.iconName
      }, Cw(n.iconName), 9, $w)) : kw("", !0),
      Zc("g", { fill: n.iconColor }, [
        Zc("path", { d: a.iconImagePath }, null, 8, Ew)
      ], 8, Vw)
    ], 8, xw))
  ], 2);
}
const Le = /* @__PURE__ */ Y(yw, [["render", Lw]]);
const Dw = {
  name: "MwButton",
  components: {
    MwIcon: Le
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
}, Aw = window.Vue.renderSlot, Tw = window.Vue.resolveComponent, Qc = window.Vue.normalizeClass, Zs = window.Vue.openBlock, Bi = window.Vue.createBlock, Pi = window.Vue.createCommentVNode, Bw = window.Vue.toDisplayString, Pw = window.Vue.createElementBlock, Fw = window.Vue.toHandlerKey, Mw = window.Vue.withModifiers, Nw = window.Vue.mergeProps, Uw = window.Vue.createElementVNode, Iw = window.Vue.resolveDynamicComponent, Rw = window.Vue.withCtx, zw = { class: "mw-ui-button__content" }, Ow = ["textContent"];
function jw(e, t, n, o, s, a) {
  const r = Tw("mw-icon");
  return Zs(), Bi(Iw(a.component), {
    class: Qc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Rw(() => [
      Aw(e.$slots, "default", {}, () => [
        Uw("span", zw, [
          n.icon ? (Zs(), Bi(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Qc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Pi("", !0),
          !a.isIcon && n.label ? (Zs(), Pw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Bw(n.label)
          }, null, 8, Ow)) : Pi("", !0),
          n.indicator ? (Zs(), Bi(r, Nw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Fw(a.indicatorClickEvent)]: t[0] || (t[0] = Mw((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Pi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const De = /* @__PURE__ */ Y(Dw, [["render", jw]]);
const Hw = {
  name: "MwButtonGroup",
  components: {
    MwButton: De
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
}, qw = window.Vue.renderList, Gw = window.Vue.Fragment, Fi = window.Vue.openBlock, eu = window.Vue.createElementBlock, Xw = window.Vue.resolveComponent, Ww = window.Vue.withModifiers, Kw = window.Vue.mergeProps, Yw = window.Vue.createBlock, Jw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Zw(e, t, n, o, s, a) {
  const r = Xw("mw-button");
  return Fi(), eu("div", Jw, [
    (Fi(!0), eu(Gw, null, qw(n.items, (c) => (Fi(), Yw(r, Kw({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: Ww((d) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Us = /* @__PURE__ */ Y(Hw, [["render", Zw]]);
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
}, tu = window.Vue.renderSlot, ef = window.Vue.toDisplayString, nu = window.Vue.openBlock, ou = window.Vue.createElementBlock, tf = window.Vue.createCommentVNode, nf = window.Vue.createElementVNode, of = { class: "mw-ui-card" }, sf = ["textContent"], af = { class: "mw-ui-card__content" };
function rf(e, t, n, o, s, a) {
  return nu(), ou("div", of, [
    tu(e.$slots, "header", {}, () => [
      n.title ? (nu(), ou("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: ef(n.title)
      }, null, 8, sf)) : tf("", !0)
    ]),
    nf("div", af, [
      tu(e.$slots, "default")
    ])
  ]);
}
const He = /* @__PURE__ */ Y(Qw, [["render", rf]]);
const lf = {}, cf = window.Vue.openBlock, uf = window.Vue.createElementBlock, df = { class: "mw-ui-divider row" };
function gf(e, t) {
  return cf(), uf("div", df);
}
const di = /* @__PURE__ */ Y(lf, [["render", gf]]);
const pf = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, mf = window.Vue.renderSlot, hf = window.Vue.resolveDynamicComponent, wf = window.Vue.withCtx, ff = window.Vue.openBlock, _f = window.Vue.createBlock;
function vf(e, t, n, o, s, a) {
  return ff(), _f(hf(n.tag), { class: "mw-grid container" }, {
    default: wf(() => [
      mf(e.$slots, "default")
    ]),
    _: 3
  });
}
const Sf = /* @__PURE__ */ Y(pf, [["render", vf]]), yf = {
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
}, Cf = window.Vue.renderSlot, kf = window.Vue.resolveDynamicComponent, bf = window.Vue.normalizeClass, xf = window.Vue.withCtx, $f = window.Vue.openBlock, Vf = window.Vue.createBlock;
function Ef(e, t, n, o, s, a) {
  return $f(), Vf(kf(n.tag), {
    class: bf(a.classes)
  }, {
    default: xf(() => [
      Cf(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ Y(yf, [["render", Ef]]), ql = ["mobile", "tablet", "desktop", "desktop-wide"], Lf = ql.reduce(
  (e, t) => Je(ce({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Df = {
  name: "MwCol",
  props: Je(ce({}, Lf), {
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
      for (let n = 0; n < ql.length; n++) {
        let o = ql[n], s = this.$props[o];
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
}, Af = window.Vue.renderSlot, Tf = window.Vue.resolveDynamicComponent, Bf = window.Vue.normalizeClass, Pf = window.Vue.withCtx, Ff = window.Vue.openBlock, Mf = window.Vue.createBlock;
function Nf(e, t, n, o, s, a) {
  return Ff(), Mf(Tf(n.tag), {
    class: Bf(a.classes)
  }, {
    default: Pf(() => [
      Af(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const b = /* @__PURE__ */ Y(Df, [["render", Nf]]), Uf = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", If = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Rf = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", gi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", zf = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Of = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", mm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", jf = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Hf = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Is = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", qf = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Gf = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Xf = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", su = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Wf = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", hm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Kf = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Yf = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Jf = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Zf = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Qf = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", e0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, ii = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, t0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, wm = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, n0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, fm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", o0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", s0 = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", a0 = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Mi = window.Vue.computed, i0 = window.Vue.watch, r0 = window.Vue.ref, l0 = window.Vue.nextTick, c0 = {
  name: "MwDialog",
  components: {
    MwButton: De,
    MwRow: P,
    MwCol: b,
    MwDivider: di
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
     * Opacity of the overlay
     * @values medium (0.65), high (0.95)
     **/
    overlayOpacity: {
      type: String,
      default: "medium",
      validator: (e) => ["medium", "high"].indexOf(e) !== -1
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
    const n = r0(null), o = Mi(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Mi(() => ({
      "mw-ui-dialog__overlay--high_opacity": e.overlayOpacity === "high"
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    i0(
      () => e.value,
      (d) => {
        d ? (r(), l0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Mi(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayClasses: s,
      mwIconClose: Is,
      root: n
    };
  }
}, au = window.Vue.normalizeClass, Ni = window.Vue.createElementVNode, Ui = window.Vue.renderSlot, Qs = window.Vue.resolveComponent, Io = window.Vue.createVNode, Ii = window.Vue.withCtx, iu = window.Vue.createCommentVNode, u0 = window.Vue.withKeys, ru = window.Vue.openBlock, d0 = window.Vue.createElementBlock, g0 = window.Vue.Transition, p0 = window.Vue.normalizeStyle, m0 = window.Vue.createBlock, h0 = { class: "mw-ui-dialog__shell items-stretch" }, w0 = { class: "mw-ui-dialog__body" };
function f0(e, t, n, o, s, a) {
  const r = Qs("mw-col"), c = Qs("mw-button"), d = Qs("mw-row"), g = Qs("mw-divider");
  return ru(), m0(g0, {
    name: "mw-ui-animation-fade",
    style: p0(o.cssVars)
  }, {
    default: Ii(() => [
      n.value ? (ru(), d0("div", {
        key: 0,
        ref: "root",
        class: au(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = u0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Ni("div", {
          class: au(["mw-ui-dialog__overlay", o.overlayClasses]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Ni("div", h0, [
          n.header ? Ui(e.$slots, "header", { key: 0 }, () => [
            Io(d, { class: "mw-ui-dialog__header" }, {
              default: Ii(() => [
                Io(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Io(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Ii(() => [
                    Io(c, {
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
            Io(g)
          ]) : iu("", !0),
          Ni("div", w0, [
            Ui(e.$slots, "default")
          ]),
          Ui(e.$slots, "footer")
        ])
      ], 34)) : iu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const rt = /* @__PURE__ */ Y(c0, [["render", f0]]);
const _0 = {
  name: "MwInput",
  components: {
    MwIcon: Le
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
}, lu = window.Vue.renderSlot, v0 = window.Vue.resolveComponent, ea = window.Vue.openBlock, Ri = window.Vue.createBlock, cu = window.Vue.createCommentVNode, S0 = window.Vue.resolveDynamicComponent, y0 = window.Vue.toDisplayString, C0 = window.Vue.mergeProps, k0 = window.Vue.withModifiers, b0 = window.Vue.createElementVNode, x0 = window.Vue.normalizeClass, $0 = window.Vue.createElementBlock, V0 = { class: "mw-ui-input__content" };
function E0(e, t, n, o, s, a) {
  const r = v0("mw-icon");
  return ea(), $0("div", {
    class: x0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    b0("div", V0, [
      lu(e.$slots, "icon", {}, () => [
        n.icon ? (ea(), Ri(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : cu("", !0)
      ]),
      (ea(), Ri(S0(n.type === "textarea" ? n.type : "input"), C0({
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
        textContent: y0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      lu(e.$slots, "indicator", {}, () => [
        n.indicator ? (ea(), Ri(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = k0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : cu("", !0)
      ])
    ])
  ], 2);
}
const Gl = /* @__PURE__ */ Y(_0, [["render", E0]]);
const L0 = {
  name: "MwMessage",
  components: { MwCol: b, MwRow: P, MwIcon: Le, MwButton: De },
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
    mwIconClose: Is,
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
      notice: e0,
      warning: wm,
      success: ii,
      error: t0
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
}, zi = window.Vue.renderSlot, ta = window.Vue.resolveComponent, uu = window.Vue.createVNode, du = window.Vue.withCtx, gu = window.Vue.openBlock, pu = window.Vue.createBlock, mu = window.Vue.createCommentVNode, D0 = window.Vue.normalizeClass;
function A0(e, t, n, o, s, a) {
  const r = ta("mw-icon"), c = ta("mw-col"), d = ta("mw-button"), g = ta("mw-row");
  return e.shown ? (gu(), pu(g, {
    key: 0,
    class: D0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: du(() => [
      zi(e.$slots, "icon", {}, () => [
        uu(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      uu(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: du(() => [
          zi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      zi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (gu(), pu(d, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : mu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : mu("", !0);
}
const T0 = /* @__PURE__ */ Y(L0, [["render", A0]]);
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
const B0 = {}, P0 = window.Vue.createElementVNode, F0 = window.Vue.openBlock, M0 = window.Vue.createElementBlock, N0 = { class: "mw-ui-spinner" }, U0 = /* @__PURE__ */ P0("div", { class: "mw-ui-spinner__bounce" }, null, -1), I0 = [
  U0
];
function R0(e, t) {
  return F0(), M0("div", N0, I0);
}
const qe = /* @__PURE__ */ Y(B0, [["render", R0]]), st = {
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
const z0 = window.Vue.computed, O0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Le },
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
      default: fm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: st.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: st.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = z0(() => {
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
}, hu = window.Vue.normalizeStyle, wu = window.Vue.openBlock, j0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const H0 = window.Vue.resolveComponent, q0 = window.Vue.createBlock;
function G0(e, t, n, o, s, a) {
  const r = H0("mw-ui-icon");
  return n.thumbnail ? (wu(), j0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: hu(o.style)
  }, null, 4)) : (wu(), q0(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: hu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const uc = /* @__PURE__ */ Y(O0, [["render", G0]]);
const X0 = {
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
}, W0 = window.Vue.vModelRadio, ai = window.Vue.createElementVNode, K0 = window.Vue.withDirectives, Y0 = window.Vue.toDisplayString, J0 = window.Vue.resolveComponent, Z0 = window.Vue.normalizeClass, Q0 = window.Vue.withCtx, e1 = window.Vue.openBlock, t1 = window.Vue.createBlock, n1 = { class: "mw-ui-radio__controls" }, o1 = ["id", "disabled", "name", "value"], s1 = /* @__PURE__ */ ai("span", { class: "mw-ui-radio__controls__icon" }, null, -1), a1 = ["for", "textContent"];
function i1(e, t, n, o, s, a) {
  const r = J0("mw-row");
  return e1(), t1(r, {
    class: Z0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: Q0(() => [
      ai("div", n1, [
        K0(ai("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, o1), [
          [W0, a.inputModel]
        ]),
        s1
      ]),
      ai("label", {
        for: n.id,
        class: "ps-2",
        textContent: Y0(n.label)
      }, null, 8, a1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Xl = /* @__PURE__ */ Y(X0, [["render", i1]]), fu = window.Vue.h, r1 = {
  name: "MwRadioGroup",
  components: { MwRadio: Xl },
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
      (o) => fu(Xl, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), fu("div", { class: "mw-ui-radio-group" }, n);
  }
};
const l1 = {
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
}, _u = window.Vue.normalizeClass, vu = window.Vue.normalizeStyle, c1 = window.Vue.createElementVNode, u1 = window.Vue.openBlock, d1 = window.Vue.createElementBlock, g1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function p1(e, t, n, o, s, a) {
  return u1(), d1("div", {
    class: _u(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: vu(a.containerStyles)
  }, [
    c1("div", {
      class: _u(["mw-progress-bar__bar", a.barClass]),
      style: vu(a.barStyles)
    }, null, 6)
  ], 14, g1);
}
const _m = /* @__PURE__ */ Y(l1, [["render", p1]]), m1 = (e, t, n, o) => (s) => {
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
  }, d = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      c,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      d,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", c, !1), document.documentElement.addEventListener("pointerup", d, !1);
}, h1 = (e, t, n, o) => ({ initiateDrag: m1(
  e,
  t,
  n,
  o
) }), w1 = window.Vue.ref, Su = window.Vue.computed, f1 = (e, t, n, o) => {
  const s = w1(0), a = Su(
    () => t.value > e.value
  ), r = Su(
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
const na = window.Vue.ref, _1 = window.Vue.onMounted, yu = window.Vue.computed, v1 = window.Vue.nextTick, S1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: De
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
    const t = na(!0), n = na(null), o = yu(
      () => Math.min(e.minHeight, s.value)
    ), s = na(1), { initiateDrag: a } = h1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: c,
      scrollIndex: d,
      scrollToStepByIndex: g,
      handleArrowUpClick: i
    } = f1(o, s, n, t), l = () => g(d.value + 1), u = na(null), p = yu(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const w = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, w) {
        let _ = Math.min(w, s.value);
        _ = Math.max(_, o.value), _ === o.value && (t.value = !0), n.value.style.height = _ + "px";
      }
    };
    return _1(() => k(this, null, function* () {
      var w;
      yield v1(), s.value = n.value.scrollHeight, (w = u.value) == null || w.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", m);
    })), {
      contentRef: n,
      cssVars: p,
      dragIndicatorRef: u,
      handleArrowUpClick: i,
      isCollapsed: t,
      isScrolledToEnd: r,
      mwIconCollapse: n0,
      mwIconExpand: jf,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: d,
      scrollToNextStep: l
    };
  }
}, y1 = window.Vue.renderSlot, C1 = window.Vue.normalizeClass, oa = window.Vue.createElementVNode, k1 = window.Vue.resolveComponent, b1 = window.Vue.createVNode, Oi = window.Vue.openBlock, x1 = window.Vue.createBlock, Cu = window.Vue.createCommentVNode, ku = window.Vue.createElementBlock, $1 = window.Vue.normalizeStyle, V1 = { class: "mw-ui-expandable-content__container" }, E1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, L1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function D1(e, t, n, o, s, a) {
  const r = k1("mw-button");
  return Oi(), ku("div", {
    class: "mw-ui-expandable-content",
    style: $1(o.cssVars)
  }, [
    oa("div", V1, [
      oa("div", {
        ref: "contentRef",
        class: C1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        y1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Oi(), ku("div", E1, [
        b1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Oi(), x1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Cu("", !0)
      ])) : Cu("", !0)
    ]),
    oa("div", L1, [
      oa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const A1 = /* @__PURE__ */ Y(S1, [["render", D1]]);
const sa = window.Vue.computed, T1 = {
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
      default: st.blue600
    },
    inactiveColor: {
      type: String,
      default: st.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = sa(() => e.size / 2 * 0.9), n = sa(() => Math.PI * (t.value * 2)), o = sa(
      () => (100 - e.percentage) / 100 * n.value
    ), s = sa(() => ({
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
}, bu = window.Vue.createElementVNode, xu = window.Vue.normalizeStyle, B1 = window.Vue.openBlock, P1 = window.Vue.createElementBlock, F1 = ["width", "height", "viewport"], M1 = ["r", "cx", "cy", "stroke-dasharray"], N1 = ["r", "cx", "cy", "stroke-dasharray"];
function U1(e, t, n, o, s, a) {
  return B1(), P1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: xu(o.cssVars)
  }, [
    bu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, M1),
    bu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: xu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, N1)
  ], 12, F1);
}
const I1 = /* @__PURE__ */ Y(T1, [["render", U1]]), R1 = window.Vue.ref, gn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, pn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${gn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${gn.tablet}px) and (max-width: ${gn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${gn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${gn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${gn.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${gn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${gn["desktop-wide"]}px)`
}, ji = {
  mobile: () => matchMedia(pn.mobile).matches,
  tablet: () => matchMedia(pn.tablet).matches,
  desktop: () => matchMedia(pn.desktop).matches,
  desktopwide: () => matchMedia(pn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(pn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(pn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(pn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(pn["desktop-and-down"]).matches
}, z1 = {
  install: (e) => {
    const t = () => {
      for (let o in ji)
        ji.hasOwnProperty(o) && (n.value[o] = ji[o]());
    }, n = R1({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Je(ce({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, O1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Je(ce({}, e.config.globalProperties.$mwui || {}), {
      colors: st
    }), e.provide("colors", st);
  }
};
class Do extends Error {
}
const j1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Do();
}), vm = { assertUser: j1 };
const H1 = window.Vue.resolveDirective, Ro = window.Vue.createElementVNode, $u = window.Vue.withDirectives, q1 = window.Vue.toDisplayString, G1 = window.Vue.unref, Vu = window.Vue.withCtx, X1 = window.Vue.openBlock, W1 = window.Vue.createBlock, K1 = window.Vue.createCommentVNode, Y1 = { class: "pa-4 sx-login-dialog__header" }, J1 = { class: "sx-login-dialog__body px-6 pb-4" }, Z1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, Q1 = ["href"], e_ = window.Vue.computed, t_ = window.Vue.ref, n_ = window.Vuex.useStore, o_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = n_(), n = e_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = t_(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const c = H1("i18n");
      return n.value ? (X1(), W1(G1(rt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Vu(() => [
          Ro("div", Y1, [
            $u(Ro("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Vu(() => [
          $u(Ro("div", J1, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          Ro("div", Z1, [
            Ro("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, q1(a.$i18n("cx-sx-login-dialog-button-label")), 9, Q1)
          ])
        ]),
        _: 1
      })) : K1("", !0);
    };
  }
}, q = new mw.cx.SiteMapper(), Sm = mw.util.getUrl, s_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class pi {
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
    lastUpdatedTimestamp: r,
    pageRevision: c,
    status: d,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = c, this.status = d, this.targetTitle = g;
  }
}
const aa = "original", ia = "empty", a_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class K {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      aa,
      ia
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return a_[t] || t;
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
    return aa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return ia;
  }
  static isUserMTProvider(t) {
    return [aa, ia].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === ia ? "blank" : t === aa ? "source" : t.toLowerCase();
  }
}
class En {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Je(ce({}, a), {
      [K.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [K.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [K.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [K.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[K.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Eu = (e) => {
  var n;
  const t = ri(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ri = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, eo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), ym = (e) => {
  const t = ri(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = i_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, i_ = (e) => {
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
}, Cm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, km = (e) => {
  const t = Cm(e);
  return t == null ? void 0 : t.targetExists;
};
class Hi {
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
class je {
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
      (a) => eo(a)
    );
    s && km(s) && (this.blockTemplateAdaptationInfo[t] = Cm(s));
  }
  /**
   * @return {boolean}
   */
  get isHeadingSection() {
    return this.node.firstElementChild instanceof HTMLHeadingElement;
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
      (t) => eo(t)
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
    const t = ri(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Eu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => eo(o));
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
    return n && Eu(n) || "";
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
    const o = ri(n);
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
      (a) => eo(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Hi({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Hi({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Hi({
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
    if (!t || K.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => eo(s)
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
const r_ = [
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
], l_ = (e, t, n) => {
  let o, s, a, r, c;
  return !e || !t ? 0 : e === t ? 1 : (s = r = Lu(e, n), a = c = Lu(t, n), c.length > r.length && (s = c, a = r), o = s.filter(function(d) {
    return a.indexOf(d) >= 0;
  }), o.length / s.length);
}, Lu = function(e, t) {
  return e ? r_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, bm = 95, c_ = 85, u_ = [
  { status: "failure", value: 100 - bm },
  { status: "warning", value: 100 - c_ },
  { status: "success", value: 100 }
], xm = (e, t, n) => {
  const o = Du(e).textContent, s = Du(t).textContent, a = 100 - 100 * l_(s, o, n);
  return Math.ceil(a);
}, d_ = (e) => u_.find((t) => e <= t.value).status, g_ = (e, t) => xm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), p_ = () => (100 - bm) / 100, Du = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, It = {
  calculateScore: xm,
  getScoreStatus: d_,
  getMTScoreForPageSection: g_,
  getMtModificationThreshold: p_
}, ra = "__LEAD_SECTION__";
class Wl {
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
      [K.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [K.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [K.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [K.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return ra;
  }
  static isSectionLead(t) {
    return !t || t === ra;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[K.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[K.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof je ? n.transclusionNode.outerHTML : n instanceof En ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof je ? t.blockTemplateSelected = !1 : t instanceof En && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof je ? n.blockTemplateSelected = !0 : n instanceof En && (n.selected = !0);
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
    if (o instanceof je)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof En)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof je ? n.blockTemplateProposedTranslations[t] || "" : n instanceof En ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof je ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof En && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = It.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? ra : this.originalTitle;
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
    return this.isLeadSection ? ra : this.title;
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
class dc extends pi {
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
    targetLanguage: r,
    startTimestamp: c,
    lastUpdatedTimestamp: d,
    status: g,
    pageRevision: i,
    targetTitle: l,
    sourceSectionTitle: u,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: c,
      lastUpdatedTimestamp: d,
      pageRevision: i,
      status: g,
      targetTitle: l
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = u, this.targetSectionTitle = p, this.progress = m, this.restored = !1;
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
    return Wl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Wl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const $t = "previous-edits", Rt = "popular", Ge = "topic", me = "collections", xt = "automatic", at = "seed", Au = window.Vue.ref, m_ = mw.loader.require("ext.cx.articletopics"), la = {
  type: xt,
  id: $t
}, $m = () => {
  const e = Au(
    m_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = Au(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const r = s == null ? void 0 : s.toLowerCase(), c = a == null ? void 0 : a.toLowerCase();
    return r === Ge ? e.value.some((d) => d === a) ? { type: r, id: c } : (t.value = !0, la) : r === me || r === at ? { type: r, id: a } : c === $t ? {
      type: xt,
      id: $t
    } : c === Rt ? {
      type: xt,
      id: Rt
    } : c === me ? {
      type: xt,
      id: me
    } : la;
  }, isDefaultFilter: ({ type: s, id: a }) => s === la.type && a === la.id };
}, h_ = window.Vue.inject, w_ = window.Vue.reactive;
var f_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Vm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(f_, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(l) {
        this.locale = l;
      }
      convertPlural(l, u) {
        const p = /\d+=/i;
        if (!u || u.length === 0)
          return "";
        for (let h = 0; h < u.length; h++) {
          const w = u[h];
          if (p.test(w)) {
            if (parseInt(w.slice(0, w.indexOf("=")), 10) === l)
              return w.slice(w.indexOf("=") + 1);
            u[h] = void 0;
          }
        }
        u = u.filter((h) => !!h);
        let m = this.getPluralForm(l, this.locale);
        return m = Math.min(m, u.length - 1), u[m];
      }
      getPluralForm(l, u) {
        const p = new Intl.PluralRules(u), m = p.resolvedOptions().pluralCategories, h = p.select(l);
        return ["zero", "one", "two", "few", "many", "other"].filter((w) => m.includes(w)).indexOf(h);
      }
      convertNumber(l, u = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (u) {
          if (parseFloat(l, 10) === l || !p)
            return l;
          const h = [];
          for (const _ in p)
            h[p[_]] = _;
          p = h;
          const w = String(l);
          for (let _ = 0; _ < w.length; _++)
            m += p[w[_]] || w[_];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const w = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : w, m = new Intl.NumberFormat(h).format(l), m === "NaN" && (m = l), m;
        }
      }
      convertGrammar(l, u) {
        return l;
      }
      gender(l, u) {
        if (!u || u.length === 0)
          return "";
        for (; u.length < 2; )
          u.push(u[u.length - 1]);
        return l === "male" ? u[0] : l === "female" ? u[1] : u.length === 3 ? u[2] : u[0];
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
        let u = i.match(/[aou][^äöy]*$/i);
        const p = i;
        switch (i.match(/wiki$/i) && (u = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), l) {
          case "genitive":
            i += "n";
            break;
          case "elative":
            i += u ? "sta" : "stä";
            break;
          case "partitive":
            i += u ? "a" : "ä";
            break;
          case "illative":
            i += i.slice(-1) + "n";
            break;
          case "inessive":
            i += u ? "ssa" : "ssä";
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
        let u, p, m, h;
        switch (u = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), u = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), l) {
          case "genitive":
            h = m + p + "ы";
            break;
          case "dative":
            h = m + p + "æн";
            break;
          case "allative":
            h = m + u;
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
      emit(l, u) {
        let p, m, h;
        switch (typeof l) {
          case "string":
          case "number":
            p = l;
            break;
          case "object":
            if (m = l.slice(1).map((w) => this.emit(w, u)), h = l[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, u);
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
        let u = "";
        return l.forEach((p) => {
          u += p;
        }), u;
      }
      replace(l, u) {
        const p = parseInt(l[0], 10);
        return p < u.length ? u[p] : "$" + (p + 1);
      }
      plural(l) {
        const u = parseFloat(this.language.convertNumber(l[0], 10)), p = l.slice(1);
        return p.length ? this.language.convertPlural(u, p) : "";
      }
      gender(l) {
        const u = l[0], p = l.slice(1);
        return this.language.gender(u, p);
      }
      grammar(l) {
        const u = l[0], p = l[1];
        return p && u && this.language.convertGrammar(p, u);
      }
      wikilink(l) {
        let u, p = l[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return u = l.length === 1 ? p : l[1], `<a href="${m}" title="${p}">${u}</a>`;
      }
      extlink(l) {
        if (l.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${l[0]}">${l[1]}</a>`;
      }
      bidi(l) {
        const u = function(p) {
          const m = p.match(r);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(l[0]);
        return u === "ltr" ? "‪" + l[0] + "‬" : u === "rtl" ? "‫" + l[0] + "‬" : l[0];
      }
      formatnum(l) {
        const u = !!l[1] && l[1] === "R", p = l[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, u) : p;
      }
      htmlattributes(l) {
        const u = {};
        for (let p = 0, m = l.length; p < m; p += 2)
          u[l[p]] = l[p + 1];
        return u;
      }
      htmlelement(l) {
        const u = l.shift(), p = l.shift();
        let m = l, h = "";
        for (const w in p)
          h += ` ${w}="${p[w]}"`;
        return Array.isArray(m) || (m = [m]), `<${u}${h}>${m.join("")}</${u}>`;
      }
    }
    class d {
      constructor(l, { wikilinks: u = !1 } = {}) {
        this.locale = l, this.wikilinks = u, this.emitter = new c(this.locale);
      }
      parse(l, u) {
        if (l.includes("{{") || l.includes("<") || this.wikilinks && l.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let w = 0;
            function _(E) {
              return () => {
                for (let R = 0; R < E.length; R++) {
                  const Te = E[R]();
                  if (Te !== null)
                    return Te;
                }
                return null;
              };
            }
            function f(E) {
              const R = w, Te = [];
              for (let Ht = 0; Ht < E.length; Ht++) {
                const qt = E[Ht]();
                if (qt === null)
                  return w = R, null;
                Te.push(qt);
              }
              return Te;
            }
            function y(E, R) {
              return () => {
                const Te = w, Ht = [];
                let qt = R();
                for (; qt !== null; )
                  Ht.push(qt), qt = R();
                return Ht.length < E ? (w = Te, null) : Ht;
              };
            }
            function S(E) {
              const R = E.length;
              return () => {
                let Te = null;
                return m.slice(w, w + R) === E && (Te = E, w += R), Te;
              };
            }
            function C(E) {
              return () => {
                const R = m.slice(w).match(E);
                return R === null ? null : (w += R[0].length, R[0]);
              };
            }
            const x = C(/^\s+/), T = S("|"), V = S(":"), F = S("\\"), I = C(/^./), M = S("$"), N = C(/^\d+/), U = S('"'), ie = S("'"), J = C(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Ot = C(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), lt = _([Me, C(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Me() {
              const E = f([F, I]);
              return E === null ? null : E[1];
            }
            const dn = _([Me, Ot]), Vt = _([Me, J]);
            function ct() {
              const E = f([M, N]);
              return E === null ? null : ["REPLACE", parseInt(E[1], 10) - 1];
            }
            const Z = (jt = C(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Ne = function(E) {
              return E.toString();
            }, () => {
              const E = jt();
              return E === null ? null : Ne(E);
            });
            var jt, Ne;
            function he() {
              const E = f([T, y(0, Ks)]);
              if (E === null)
                return null;
              const R = E[1];
              return R.length > 1 ? ["CONCAT"].concat(R) : R[0];
            }
            function xe() {
              const E = f([Z, V, ct]);
              return E === null ? null : [E[0], E[2]];
            }
            function v() {
              const E = f([Z, V, Ks]);
              return E === null ? null : [E[0], E[2]];
            }
            function L() {
              const E = f([Z, V]);
              return E === null ? null : [E[0], ""];
            }
            const D = _([function() {
              const E = f([_([xe, v, L]), y(0, he)]);
              return E === null ? null : E[0].concat(E[1]);
            }, function() {
              const E = f([Z, y(0, he)]);
              return E === null ? null : [E[0]].concat(E[1]);
            }]), A = S("{{"), G = S("}}"), re = S("[["), j = S("]]"), O = S("["), Q = S("]");
            function ut() {
              const E = f([A, D, G]);
              return E === null ? null : E[1];
            }
            const ke = _([function() {
              const E = f([y(1, Ks), T, y(1, Ws)]);
              return E === null ? null : [["CONCAT"].concat(E[0]), ["CONCAT"].concat(E[2])];
            }, function() {
              const E = f([y(1, Ks)]);
              return E === null ? null : [["CONCAT"].concat(E[0])];
            }]);
            function jc() {
              let E = null;
              const R = f([re, ke, j]);
              if (R !== null) {
                const Te = R[1];
                E = ["WIKILINK"].concat(Te);
              }
              return E;
            }
            function Hc() {
              let E = null;
              const R = f([O, y(1, cw), x, y(1, Ws), Q]);
              return R !== null && (E = ["EXTLINK", R[1].length === 1 ? R[1][0] : ["CONCAT"].concat(R[1]), ["CONCAT"].concat(R[3])]), E;
            }
            const xi = C(/^[A-Za-z]+/);
            function aw() {
              const E = C(/^[^"]*/), R = f([U, E, U]);
              return R === null ? null : R[1];
            }
            function iw() {
              const E = C(/^[^']*/), R = f([ie, E, ie]);
              return R === null ? null : R[1];
            }
            function rw() {
              const E = C(/^\s*=\s*/), R = f([x, xi, E, _([aw, iw])]);
              return R === null ? null : [R[1], R[3]];
            }
            function lw() {
              const E = y(0, rw)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], E);
            }
            const cw = _([ut, ct, jc, Hc, function() {
              const E = y(1, lt)();
              return E === null ? null : E.join("");
            }]), Ws = _([ut, ct, jc, Hc, function() {
              let E = null;
              const R = w, Te = S("<"), Ht = C(/^\/?/), qt = C(/^\s*>/), $i = f([Te, xi, lw, Ht, qt]);
              if ($i === null)
                return null;
              const Gc = w, Xc = $i[1], Vi = y(0, Ws)(), uw = w, Wc = f([S("</"), xi, qt]);
              if (Wc === null)
                return ["CONCAT", m.slice(R, Gc)].concat(Vi);
              const dw = w, gw = Wc[1], Kc = $i[2];
              if (function(Fn, Ys, Ei, Li = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Fn = Fn.toLowerCase()) !== (Ys = Ys.toLowerCase()) || Li.allowedHtmlElements.indexOf(Fn) === -1)
                  return !1;
                const pw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Js = 0, hw = Ei.length; Js < hw; Js += 2) {
                  const Di = Ei[Js];
                  if (Li.allowedHtmlCommonAttributes.indexOf(Di) === -1 && (Li.allowedHtmlAttributesByElement[Fn] || []).indexOf(Di) === -1 || Di === "style" && Ei[Js + 1].search(pw) !== -1)
                    return !1;
                }
                return !0;
              }(Xc, gw, Kc.slice(1)))
                E = ["HTMLELEMENT", Xc, Kc].concat(Vi);
              else {
                const Fn = (Ys) => Ys.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                E = ["CONCAT", Fn(m.slice(R, Gc))].concat(Vi, Fn(m.slice(uw, dw)));
              }
              return E;
            }, function() {
              const E = y(1, Vt)();
              return E === null ? null : E.join("");
            }]), Ks = _([ut, ct, function() {
              const E = y(1, dn)();
              return E === null ? null : E.join("");
            }]), qc = function() {
              const E = y(0, Ws)();
              return E === null ? null : ["CONCAT"].concat(E);
            }();
            if (qc === null || w !== m.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + m);
            return qc;
          }(l, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, u);
        }
        return this.simpleParse(l, u);
      }
      simpleParse(l, u) {
        return l.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return u[h] !== void 0 ? u[h] : "$" + m;
        });
      }
    }
    class g {
      constructor(l) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(l, u) {
        if (typeof l != "object")
          throw new Error("Invalid message source. Must be an object");
        if (u) {
          if (!/^[a-zA-Z0-9-]+$/.test(u))
            throw new Error(`Invalid locale ${u}`);
          for (const p in l)
            if (p.indexOf("@") !== 0) {
              if (typeof l[p] == "object")
                return this.load(l);
              if (typeof l[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${u} locale.`);
              break;
            }
          this.sourceMap.has(u) ? this.sourceMap.set(u, Object.assign(this.sourceMap.get(u), l)) : this.sourceMap.set(u, l);
        } else
          for (u in l)
            this.load(l[u], u);
      }
      getMessage(l, u) {
        const p = this.sourceMap.get(u);
        return p ? p[l] : null;
      }
      hasLocale(l) {
        return this.sourceMap.has(l);
      }
    }
    return class {
      constructor(i, { finalFallback: l = "en", messages: u, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new d(this.locale, { wikilinks: p }), this.messageStore = new g(), u && this.load(u, this.locale), this.finalFallback = l, this.wikilinks = p;
      }
      load(i, l) {
        return this.messageStore.load(i, l || this.locale);
      }
      i18n(i, ...l) {
        return this.parser.parse(this.getMessage(i), l);
      }
      setLocale(i) {
        this.locale = i, this.parser = new d(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let l = this.locale, u = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; l; ) {
          const m = l.split("-");
          let h = m.length;
          do {
            const w = m.slice(0, h).join("-"), _ = this.messageStore.getMessage(i, w);
            if (typeof _ == "string")
              return _;
            h--;
          } while (h);
          l = p[u], u++;
        }
        return i;
      }
      registerParserPlugin(i, l) {
        c.prototype[i] = l;
      }
    };
  });
})(Vm);
var __ = Vm.exports;
const Tu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Em = Symbol("banana-context");
function de() {
  const e = h_(Em);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function v_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = w_(new __(e.locale, e));
  return {
    install: (n) => {
      n.provide(Em, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Tu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Tu(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Tn = window.Vue.ref, S_ = window.Vue.computed, mi = Tn(null), hi = Tn(null), wi = Tn(null), Ao = Tn(null), fi = Tn(null), Lm = Tn(null), Dm = Tn(null), gc = Tn(null), { validateFilters: y_, filtersValidatorError: C_ } = $m(), Am = {
  from: mi,
  to: hi,
  section: Ao,
  draft: fi,
  page: wi,
  "active-list": gc
}, k_ = S_(() => ({
  type: Lm.value,
  id: Dm.value
})), Tm = (e, t) => {
  Lm.value = e, Dm.value = t, li("filter-type", e), t && li("filter-id", t);
}, b_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Am[o].value = s;
  }
  e instanceof dc && (t.set("draft", !0), fi.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), Ao.value = e.sourceSectionTitle)), t.delete("title"), Rs(Object.fromEntries(t));
}, pc = (e, t) => {
  Am[e].value = t, li(e, t);
}, x_ = (e) => {
  pc("section", e);
}, $_ = (e) => {
  pc("page", e);
}, V_ = (e) => {
  pc("active-list", e);
}, Rs = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    Sm(`Special:ContentTranslation${t}`, e)
  );
}, E_ = () => {
  const e = de(), t = new URLSearchParams(location.search);
  wi.value = t.get("page"), mi.value = t.get("from"), hi.value = t.get("to"), Ao.value = t.get("section"), gc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = y_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Tm(n.type, n.id), C_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, L_ = () => {
  const e = new URLSearchParams(location.search);
  Ao.value = null, e.delete("section"), e.delete("title"), Rs(Object.fromEntries(e));
}, li = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Rs(Object.fromEntries(n));
}, D_ = (e) => new URLSearchParams(location.search).get(e), A_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), mi.value = e, hi.value = t, n.delete("title"), Rs(Object.fromEntries(n));
}, T_ = () => {
  const e = new URLSearchParams(location.search);
  wi.value = null, Ao.value = null, fi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("title"), Rs(Object.fromEntries(e));
}, B = () => ({
  setLanguageURLParams: A_,
  setSectionURLParam: x_,
  setTranslationURLParams: b_,
  initializeURLState: E_,
  clearTranslationURLParameters: T_,
  clearSectionURLParameter: L_,
  setUrlParam: li,
  getUrlParam: D_,
  pageURLParameter: wi,
  sourceLanguageURLParameter: mi,
  targetLanguageURLParameter: hi,
  sectionURLParameter: Ao,
  draftURLParameter: fi,
  setPageURLParam: $_,
  currentSuggestionFilters: k_,
  setFilterURLParams: Tm,
  activeDashboardTabParameter: gc,
  setActiveDashboardTabParameter: V_
}), Bu = window.Vue.computed, B_ = window.Vuex.useStore;
function To() {
  const e = B_(), t = Bu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Bu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const P_ = {
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
}, F_ = {
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
}, M_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], N_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, U_ = {
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
}, I_ = {
  languages: P_,
  scriptgroups: F_,
  rtlscripts: M_,
  regiongroups: N_,
  territories: U_
};
var Ae = I_;
function zs(e) {
  return !!Ae.languages[e];
}
function Bn(e) {
  return zs(e) && Ae.languages[e].length === 1 ? Ae.languages[e][0] : !1;
}
function R_() {
  return Ae.languages;
}
function Os(e) {
  var t = Bn(e);
  return t ? Os(t) : zs(e) ? Ae.languages[e][0] : "Zyyy";
}
function mc(e) {
  var t = Bn(e);
  return t ? mc(t) : zs(e) && Ae.languages[e][1] || "UNKNOWN";
}
function Ps(e) {
  var t = Bn(e);
  return t ? Ps(t) : zs(e) && Ae.languages[e][2] || e;
}
function z_() {
  var e, t = {};
  for (e in Ae.languages)
    Bn(e) || (t[e] = Ps(e));
  return t;
}
function Bm(e) {
  var t, n, o = [];
  for (t in Ae.languages)
    if (!Bn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Os(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function O_(e) {
  return Bm([e]);
}
function Pm(e) {
  var t;
  for (t in Ae.scriptgroups)
    if (Ae.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function hc(e) {
  return Pm(Os(e));
}
function Fm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Bn(n) || n, a = hc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Mm(e) {
  var t, n, o, s = {};
  for (t in Ae.languages)
    if (!Bn(t)) {
      for (n = 0; n < e.length; n++)
        if (mc(t).includes(e[n])) {
          o = hc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function j_(e) {
  return Mm([e]);
}
function H_(e) {
  var t, n, o, s = [];
  for (t = Fm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function q_(e, t) {
  var n = Ps(e) || e, o = Ps(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Nm(e) {
  return Ae.rtlscripts.includes(Os(e));
}
function G_(e) {
  return Nm(e) ? "rtl" : "ltr";
}
function X_(e) {
  return Ae.territories[e] || [];
}
function W_(e, t) {
  t.target ? Ae.languages[e] = [t.target] : Ae.languages[e] = [t.script, t.regions, t.autonym];
}
var z = {
  addLanguage: W_,
  getAutonym: Ps,
  getAutonyms: z_,
  getDir: G_,
  getGroupOfScript: Pm,
  getLanguages: R_,
  getLanguagesByScriptGroup: Fm,
  getLanguagesByScriptGroupInRegion: j_,
  getLanguagesByScriptGroupInRegions: Mm,
  getLanguagesInScript: O_,
  getLanguagesInScripts: Bm,
  getLanguagesInTerritory: X_,
  getRegions: mc,
  getScript: Os,
  getScriptGroupOfLanguage: hc,
  isKnown: zs,
  isRedirect: Bn,
  isRtl: Nm,
  sortByScriptGroup: H_,
  sortByAutonym: q_
};
const to = window.Vue.computed;
function ee(e) {
  const t = to(() => e.state.application.sourceLanguage), n = to(() => e.state.application.targetLanguage), o = to(
    () => e.state.application.currentMTProvider
  ), s = to(
    () => z.getAutonym(t.value)
  ), a = to(
    () => z.getAutonym(n.value)
  ), r = to(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const K_ = window.Vuex.useStore, wc = () => {
  const e = K_(), {
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
class Bo {
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
    wikidataId: r,
    suggestionProvider: c = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = c, this.isListable = !0;
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
class Dn {
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
    missing: r,
    sourceSections: c = [],
    targetSections: d = [],
    isListable: g = !0,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = c, this.targetSections = d, this.isListable = g, this.suggestionProvider = i;
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
const Um = [
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
], Y_ = [
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
], J_ = [
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
], Z_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Q_ = [
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
], ev = {
  en: Um,
  es: Y_,
  bn: J_,
  fr: Z_,
  de: Q_
};
class xo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class fc {
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
class Im extends Bo {
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
    collection: d = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: r,
      suggestionProvider: c
    }), this.collection = new fc(d);
  }
}
class Rm extends Dn {
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
    targetSections: d = [],
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
      targetSections: d,
      isListable: g,
      suggestionProvider: i
    }), this.collection = new fc(l);
  }
}
const tv = Um, cn = (n) => k(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function nv() {
  return k(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield cn({ urlPostfix: t, urlParams: e })) || []).map((o) => new fc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function ov(e, t, n, o = 24) {
  return k(this, null, function* () {
    return ((yield cn({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (r) => new Bo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
const sv = (e, t) => k(void 0, null, function* () {
  return ((yield cn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new Bo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), av = (e, t) => k(void 0, null, function* () {
  const s = (yield cn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new Dn({
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
}), iv = (e, t, n = null) => k(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield cn({ urlParams: o })) || []).map(
    (a) => new Im({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), rv = (e, t, n = null) => k(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield cn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new Rm({
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
function lv(e, t, n) {
  return k(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new Dn(a) : null;
  });
}
function cv(e, t, n) {
  return k(this, null, function* () {
    const a = (yield cn({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (r) => new Dn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: r.source_title,
        targetTitle: r.target_title,
        sourceSections: r.source_sections,
        targetSections: r.target_sections,
        present: r.present,
        missing: r.missing
      })
    );
  });
}
function uv(e, t, n, o = 24) {
  return k(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield cn({ urlParams: s })) || []).map(
      (r) => new Bo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function dv(e, t, n, o = 24) {
  return k(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield cn({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (c) => new Dn({
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
function gv(e) {
  return k(this, null, function* () {
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
    }, n = q.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function pv(e, t) {
  return k(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = q.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function mv(e, t) {
  return k(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = q.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function hv(e) {
  const t = tv.map((o) => encodeURIComponent(o)).join("|"), n = q.getCXServerUrl(
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
const wv = (e, t, n) => {
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
}, fv = (e) => {
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
}, _v = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((c) => new xo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ae = {
  fetchFavorites: _v,
  fetchPageSuggestions: ov,
  fetchSectionSuggestion: lv,
  fetchSectionSuggestions: cv,
  fetchSuggestionSeeds: pv,
  fetchAppendixTargetSectionTitles: hv,
  fetchSuggestionSourceSections: mv,
  markFavorite: wv,
  unmarkFavorite: fv,
  fetchUserEdits: gv,
  fetchMostPopularPageSuggestions: sv,
  fetchMostPopularSectionSuggestions: av,
  fetchPageSuggestionsByTopics: uv,
  fetchSectionSuggestionsByTopics: dv,
  fetchPageCollections: nv,
  fetchPageSuggestionsByCollections: iv,
  fetchSectionSuggestionsByCollections: rv
}, vv = window.Vuex.useStore, js = () => {
  const e = vv(), { sourceLanguage: t, targetLanguage: n } = ee(e), o = (c) => {
    if (!c)
      return !1;
    const d = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    return !d.includes(c.sourceTitle) && !i.includes(c.sourceTitle);
  }, s = (c) => {
    const { pageSuggestions: d } = e.state.suggestions;
    return !d.some(
      (i) => i.sourceLanguage === c.sourceLanguage && i.targetLanguage === c.targetLanguage && i.sourceTitle === c.sourceTitle
    ) && o(c);
  }, a = (c) => e.state.suggestions.sectionSuggestions.some(
    (d) => d.sourceLanguage === c.sourceLanguage && d.targetLanguage === c.targetLanguage && d.sourceTitle === c.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (c) => {
      if (!c)
        return !1;
      const d = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(c) && o(c) && c.isValid(d);
    },
    sectionSuggestionExists: a
  };
};
class Po {
  /**
   * @param {Object} options
   * @param {string} [options.description]
   * @param {string|number} [options.langlinkscount]
   * @param {string} [options.lastrevid]
   * @param {string} [options.original]
   * @param {string} [options.pageid]
   * @param {string} [options.pagelanguage]
   * @param {{wikibase_item: string}} [options.pageprops]
   * @param {string} [options.pageviews]
   * @param {string} [options.thumbnail]
   * @param {string} [options.title]
   * @param {{size}[]} [options.revisions]
   * @param {string|null} [options._alias] The normalized page title or the title from which this page is a redirection, if any. See mw/api/page.js#fetchMetadata
   * @param {string|null} [options.content]
   * @param {PageSection[]} [options.sections]
   */
  constructor({
    description: t,
    langlinkscount: n,
    lastrevid: o,
    original: s,
    pageid: a,
    pagelanguage: r,
    pageprops: c,
    pageviews: d,
    thumbnail: g,
    title: i,
    revisions: l,
    _alias: u,
    content: p = null,
    sections: m = []
  } = {}) {
    var h;
    this.language = r, this.title = i, this.pageId = a, this.description = t, this.image = s, this.pageprops = c, this.pageviews = d, this.thumbnail = g, this.langLinksCount = n, this.articleSize = (h = l == null ? void 0 : l[0]) == null ? void 0 : h.size, this.revision = o, this.alias = u, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = p, this.sections = m;
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
}
class Sv {
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
function yv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const Cv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), yv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, kv = (e, t) => {
  let n, o;
  return t ? (n = Cv(e), o = n.$element.find(
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
}, bv = (e, t) => {
  const n = Array.from(
    kv(e, t)
  );
  return xv(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let c = "";
      const d = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : r.unshift(a);
      const g = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (l) => new je({
          sentences: $v(l),
          node: l
        })
      ), i = !c;
      return new Wl({ id: d, title: c, subSections: g, isLeadSection: i });
    }
  );
}, xv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, $v = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new En({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), zm = {
  convertSegmentedContentToPageSections: bv
}, _c = 120, Vv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: _c,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (i, l) => Je(ce({}, i), { [l.to]: l.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (i, l) => Je(ce({}, i), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((i) => {
      const l = g[i.title] || c[i.title] || null;
      return new Po(Je(ce({}, i), { _alias: l }));
    });
  });
}, Ev = (e, t) => {
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
  return q.getApi(e).get(n).then((s) => {
    var d, g;
    const a = s.query.pages;
    if (!a || !a.length || (d = a[0]) != null && d.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return c ? Object.freeze(new Sv(c, r)) : null;
  });
}, Lv = (e, t, n) => {
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
  return q.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var d, g;
    return (g = (d = c.langlinks) == null ? void 0 : d[0]) == null ? void 0 : g["*"];
  }).filter((c) => !!c));
}, Dv = (e, t, n, o = null) => Om(
  e,
  t,
  n,
  o
).then(
  (s) => new Po({
    sections: zm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Om = (e, t, n, o = null) => {
  const s = q.getWikiDomainCode(e), a = q.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, c += "/$revision");
  const d = q.getCXServerUrl(
    c,
    r
  );
  return fetch(d).then((g) => g.json()).then((g) => g.segmentedContent);
}, Av = (e) => k(void 0, null, function* () {
  const t = s_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: _c,
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
  return yield q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Po(s))).catch((o) => []);
}), Tv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: _c,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return q.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new Po(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, Fo = {
  fetchPages: Vv,
  fetchLanguageTitles: Ev,
  fetchPageContent: Dv,
  fetchSegmentedContent: Om,
  fetchNearbyPages: Av,
  searchPagesByTitlePrefix: Tv,
  fetchLanguageLinksForLanguage: Lv
};
class Bv {
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
const Pv = window.Vuex.useStore, Fv = window.Vue.computed, vc = window.Vue.ref, Mv = vc([]), Nv = vc([]);
let qi = !1, Pu = !1, Fu = !1, jm = vc([]);
const Uv = (e, t) => {
  jm.value.push({
    sourceLanguage: e,
    targetLanguage: t
  });
};
let zo = null;
const ca = {
  page: Mv,
  section: Nv
}, Hm = () => {
  const e = Pv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = Fv(
    () => jm.value.some(
      (i) => i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ), s = () => k(void 0, null, function* () {
    let i = e.getters["translator/getTranslationsByStatus"]("published");
    if (i = i.filter(
      (l) => l.sourceLanguage === t.value
    ), i.length && !qi)
      return qi = !0, i.map(
        (l) => l.sourceTitle
      );
    if (qi = !0, !Pu) {
      const l = yield ae.fetchUserEdits(t.value).then((u) => (Pu = !0, u));
      if (l.length)
        return l;
    }
    if (!Fu) {
      const l = yield ae.fetchUserEdits(t.value).then((u) => (Fu = !0, u));
      if (l.length)
        return Fo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          l
        );
    }
    return null;
  }), a = (i) => {
    let l = ca[i].value.find(
      (u) => u.matchesLanguagePair(t.value, n.value)
    );
    return l || (l = new Bv({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ca[i].value.push(l)), l;
  }, r = () => k(void 0, null, function* () {
    const i = yield ae.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const l in ca) {
      const u = a(l);
      u.seeds = [...u.seeds, ...i || []];
    }
  }), c = () => k(void 0, null, function* () {
    let i = !1, l = [];
    do {
      l = yield s(), l || (i = !0);
      for (const u in ca) {
        const p = a(u);
        p.seeds = [
          ...p.seeds,
          ...l || []
        ];
      }
    } while (!i && !(l != null && l.length));
  }), d = () => zo || (zo = c(), zo.finally(() => {
    zo = null;
  }));
  return { getSuggestionSeed: (i) => k(void 0, null, function* () {
    let l = a(i);
    l.seeds.length || (yield d());
    let u = l.shiftSeeds();
    return !u && !o.value && (yield r(), u = l.shiftSeeds(), Uv(
      t.value,
      n.value
    )), u;
  }), defaultSeedsFetched: o };
}, Iv = 5;
function $o(e) {
  return k(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < Iv);
  });
}
const Rv = window.Vuex.useStore, zv = () => {
  const e = Rv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = Hm(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = js(), c = {
    id: $t,
    type: xt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => k(void 0, null, function* () {
      const l = [];
      return yield $o(() => k(void 0, null, function* () {
        const u = yield o("page");
        if (!u)
          return !0;
        let p = yield ae.fetchPageSuggestions(
          t.value,
          n.value,
          u
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), l.push(...p), l.length >= i;
      })), l.forEach(
        (u) => u.suggestionProvider = c
      ), l;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => k(void 0, null, function* () {
      const l = [];
      return yield $o(() => k(void 0, null, function* () {
        const u = yield o("section");
        if (!u)
          return !0;
        const p = yield ae.fetchSectionSuggestions(
          t.value,
          n.value,
          u
        );
        if (!p)
          return !1;
        let m = p.filter(
          (w) => s(w)
        );
        const h = p.filter(
          (w) => !s(w)
        );
        return m = m.slice(0, i), l.push(...m), h.forEach((w) => {
          w && !r(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), l.length >= i;
      })), l.forEach(
        (u) => u.suggestionProvider = c
      ), l;
    })
  };
}, Ov = window.Vuex.useStore, jv = () => {
  const e = Ov(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: Rt,
    type: xt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = js();
  return { fetchSectionSuggestionsPopular: (g) => k(void 0, null, function* () {
    const i = [];
    return yield $o(() => k(void 0, null, function* () {
      const l = yield ae.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let u = l.filter(
        (m) => s(m)
      );
      const p = l.filter(
        (m) => !s(m)
      );
      return u = u.slice(0, g), i.push(...u), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= g;
    })), i.forEach(
      (l) => l.suggestionProvider = o
    ), i;
  }), fetchPageSuggestionsPopular: (g) => k(void 0, null, function* () {
    const i = [];
    return yield $o(() => k(void 0, null, function* () {
      let l = yield ae.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return l = l.filter(
        (u) => a(u)
      ), l = l.slice(0, g), i.push(...l), i.length >= g;
    })), i.forEach(
      (l) => l.suggestionProvider = o
    ), i;
  }) };
}, qm = window.Vue.ref, Gi = qm([]), Mu = qm(!1), Sc = () => ({ pageCollections: Gi, fetchPageCollections: () => k(void 0, null, function* () {
  try {
    Gi.value = yield ae.fetchPageCollections(), Gi.value.sort((t, n) => t.name.localeCompare(n.name)), Mu.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Mu });
class Kl {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const ua = window.Vue.computed, Nu = mw.loader.require("ext.cx.articletopics"), Hv = (e) => new Kl({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: Ge
  }))
}), yc = () => {
  const e = de(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), o = {
    id: $t,
    type: xt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: Rt,
    type: xt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: me,
    type: xt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: r, pageCollectionsFetched: c } = Sc(), d = ua(() => {
    const f = new Kl({
      id: xt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return r.value.length && f.filters.push(a), f;
  }), g = (f) => ({
    id: f.name,
    label: f.name,
    type: me
  }), i = ua(
    () => new Kl({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: r.value.map(
        (f) => g(f)
      )
    })
  ), l = ua(() => {
    const f = [
      d.value,
      ...Nu.map(Hv)
    ];
    return r.value.length && f.splice(1, 0, i.value), f;
  }), u = ua(
    () => [t.value.type, t.value.id].includes(
      me
    ) && !c.value
  ), p = () => {
    if (u.value)
      return [];
    const f = h();
    return f.type === Ge || f.type === at || f.type === me || f.id === me ? [f, o] : [o, s];
  }, m = (f) => {
    n(f.type, f.id);
  }, h = () => t.value.type === at ? {
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  } : l.value.flatMap((f) => f.filters).find(w), w = (f) => t.value.type === f.type && t.value.id === f.id;
  return {
    allFilters: l,
    getFiltersSummary: p,
    selectFilter: m,
    isFilterSelected: w,
    getOresTopics: (f) => {
      const S = Nu.flatMap((C) => C.topics).find((C) => C.topicId === f);
      return S ? S.orestopics : [];
    },
    waitingForPageCollectionsFetch: u,
    findSelectedFilter: h
  };
}, qv = window.Vuex.useStore, Gv = () => {
  const e = qv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = js(), { getOresTopics: c } = yc();
  return {
    fetchPageSuggestionsByTopics: (i) => k(void 0, null, function* () {
      const l = o.value.id, u = {
        id: l,
        type: Ge
      }, p = c(l);
      let m = yield ae.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        p
      );
      return m = m.filter(
        (h) => a(h)
      ), m = m.slice(0, i), m.forEach(
        (h) => h.suggestionProvider = u
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (i) => k(void 0, null, function* () {
      const l = o.value.id, u = {
        id: l,
        type: Ge
      }, p = c(l), m = [];
      return yield $o(() => k(void 0, null, function* () {
        const h = yield ae.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let w = h.filter(
          (f) => s(f)
        );
        const _ = h.filter(
          (f) => !s(f)
        );
        return w = w.slice(0, i), m.push(...w), _.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = u
      ), m;
    })
  };
}, Xv = window.Vuex.useStore, Wv = window.Vue.computed, Kv = () => {
  const e = Xv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = Wv(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== me ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: c
  } = js();
  return {
    fetchSectionSuggestionsByCollections: () => k(void 0, null, function* () {
      const i = [], l = yield ae.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      let u = l.filter(
        (m) => a(m)
      );
      const p = l.filter(
        (m) => !a(m)
      );
      return i.push(...u), p.forEach((m) => {
        m && !c(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.forEach(
        (m) => m.suggestionProvider = o.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => k(void 0, null, function* () {
      const i = [];
      let l = yield ae.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return l = l.filter(
        (u) => r(u)
      ), i.push(...l), i.forEach(
        (u) => u.suggestionProvider = o.value
      ), i;
    })
  };
}, Yv = window.Vuex.useStore, Jv = () => {
  const e = Yv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = js();
  return {
    fetchPageSuggestionsBySeed: (g) => k(void 0, null, function* () {
      const i = o.value.id;
      let l = yield ae.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return l = l.filter(
        (u) => a(u)
      ), l = l.slice(0, g), l.forEach(
        (u) => u.suggestionProvider = {
          id: i,
          type: at
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (g) => k(void 0, null, function* () {
      const i = [], l = o.value.id;
      return yield $o(() => k(void 0, null, function* () {
        const u = yield ae.fetchSectionSuggestions(
          t.value,
          n.value,
          l
        );
        if (!u)
          return !1;
        let p = u.filter(
          (h) => s(h)
        );
        const m = u.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, g), i.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= g;
      })), i.forEach(
        (u) => u.suggestionProvider = {
          id: l,
          type: at
        }
      ), i;
    })
  };
}, Cc = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = zv(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = jv(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = Gv(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: d
  } = Kv(), { fetchPageSuggestionsBySeed: g, fetchSectionSuggestionsBySeed: i } = Jv(), l = {
    [$t]: t,
    [Rt]: o,
    [me]: c,
    [Ge]: a,
    [at]: g
  }, u = {
    [$t]: n,
    [Rt]: s,
    [me]: d,
    [Ge]: r,
    [at]: i
  }, p = (w) => w.type === xt ? w.id : w.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => u[p(e.value)]
  };
}, Zv = window.Vuex.useStore, kc = () => {
  const e = Zv(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = wc(), { sourceLanguageURLParameter: o } = B(), s = () => {
    const l = t(), u = e.state.suggestions.maxSuggestionsPerSlice;
    return u - l.length % u;
  }, a = () => {
    const l = n(), u = e.state.suggestions.maxSuggestionsPerSlice;
    return u - l.length % u;
  }, {
    getCurrentPageSuggestionProvider: r,
    getCurrentSectionSuggestionProvider: c
  } = Cc(), d = (l) => {
    try {
      const u = l.map((p) => p.sourceTitle);
      if (u.length)
        return e.dispatch("mediawiki/fetchPageMetadata", {
          language: o.value,
          titles: u
        });
    } catch (u) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => k(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const l = s(), p = yield c()(
        l
      );
      p.forEach(
        (m) => e.commit("suggestions/addSectionSuggestion", m)
      ), d(p), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => k(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const l = a(), p = yield r()(
        l
      );
      p.forEach(
        (m) => e.commit("suggestions/addPageSuggestion", m)
      ), d(p), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Qv = window.Vuex.useStore, Gm = () => {
  const e = Qv();
  return (t) => k(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ae.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, eS = window.Vuex.useStore, bc = () => {
  const e = eS(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = kc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = wc(), { targetLanguageURLParameter: a } = B(), r = Gm();
  return () => k(void 0, null, function* () {
    const c = s(0), d = o(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, i = c.length === g, l = d.length === g;
    i && l || (yield r(a.value), t(), n());
  });
}, tS = window.Vuex.useStore, Xm = () => {
  const e = tS();
  return (t, n, o) => k(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!s) {
      s = yield ae.fetchSectionSuggestion(
        t,
        o,
        n
      );
      try {
        if (yield e.dispatch("mediawiki/fetchPageMetadata", {
          language: t,
          titles: [o]
        }), s)
          s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s);
        else {
          const a = e.getters["mediawiki/getPage"](
            t,
            o
          );
          return new Bo({
            sourceLanguage: t,
            targetLanguage: n,
            sourceTitle: o,
            langLinksCount: a.langLinksCount,
            wikidataId: a.wikidataId
          });
        }
      } catch (a) {
        throw new Error(
          `No page metadata found for title ${o} and language pair ${t}-${n}`
        );
      }
    }
    return s;
  });
}, Uu = window.Vue.computed, nS = window.Vuex.useStore, un = () => {
  const e = nS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = Uu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Uu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, d) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(d)
  };
}, _i = window.Vuex.useStore, Hs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), r = q.getCurrentWikiLanguageCode();
  return a && t !== r ? (s = ce({ sx: !0 }, s), o && (s.section = o), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: oS } = B(), qs = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), oS(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Wm = () => {
  const e = _i(), t = bc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = ee(e);
    n === o && (n = a.value, o = s.value), Hs(
      n,
      o,
      null,
      null
    ) || (qs(e, n, o), t());
  };
}, sS = () => {
  const e = _i(), t = bc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: r } = n;
      Hs(
        o,
        s,
        a,
        r,
        { draft: !0 }
      ) || (qs(e, o, s), t());
    }
  );
}, aS = () => {
  const e = _i();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Hs(
      n,
      o,
      s,
      null
    ) || qs(e, n, o);
  };
}, iS = () => {
  const e = _i(), t = Xm(), { currentLanguageTitleGroup: n, targetPageExists: o } = un();
  return (s, a) => k(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: c,
      setPageURLParam: d,
      clearSectionURLParameter: g
    } = B();
    s === a && (s = c.value, a = r.value);
    const i = n.value.getTitleForLanguage(s);
    Hs(
      s,
      a,
      i,
      null
    ) || (qs(e, s, a), d(i), o.value ? (g(), yield t(
      r.value,
      c.value,
      i
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: r.value,
      titles: [i]
    }), e.dispatch("application/getCXServerToken"));
  });
}, rS = window.Vuex.useStore, lS = window.Vue.ref, Iu = lS(!1), Km = () => {
  const e = rS(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = To(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a,
    sectionURLParameter: r
  } = B(), c = () => {
    var _;
    const g = q.getCurrentWikiLanguageCode(), i = (f) => !t.value || Array.isArray(t.value) && t.value.includes(f), l = (f) => n.value.includes(f), u = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, p = [
      s.value,
      mw.storage.get("cxTargetLanguage"),
      g,
      ((_ = t.value) == null ? void 0 : _[0]) || u.targetLanguage
    ], m = [
      o.value,
      mw.storage.get("cxSourceLanguage"),
      u.sourceLanguage,
      g,
      u.targetLanguage
    ], h = p.find(
      (f) => i(f) && l(f)
    );
    return { sourceLanguage: m.find(
      (f) => l(f) && f !== h
    ), targetLanguage: h };
  };
  return { initializeApplicationLanguages: () => k(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: g, targetLanguage: i } = c(
      t.value,
      n.value
    );
    Hs(
      g,
      i,
      a.value,
      r.value
    ) || qs(e, g, i), Iu.value = !0;
  }), applicationLanguagesInitialized: Iu };
};
const cS = window.Vue.resolveDynamicComponent, Ru = window.Vue.openBlock, zu = window.Vue.createBlock, uS = window.Vue.Transition, Oo = window.Vue.withCtx, jo = window.Vue.createVNode, dS = window.Vue.resolveComponent, Xi = window.Vue.unref, gS = window.Vuex.useStore, Ou = window.Vue.computed, pS = window.Vue.onMounted, mS = window.Vue.inject, hS = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = Km();
    t(), n();
    const o = mS("breakpoints"), s = Ou(() => o.value.mobile), a = gS(), r = Ou(
      () => a.state.application.autoSavePending
    );
    return pS(() => {
      window.addEventListener("beforeunload", (c) => {
        r.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && vm.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((d) => {
          d instanceof Do && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, d) => {
      const g = dS("router-view");
      return Ru(), zu(Xi(Sf), { id: "contenttranslation" }, {
        default: Oo(() => [
          jo(Xi(P), { class: "cx-container" }, {
            default: Oo(() => [
              jo(Xi(b), { cols: "12" }, {
                default: Oo(() => [
                  jo(g, null, {
                    default: Oo(({ Component: i, route: l }) => [
                      jo(uS, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: Oo(() => [
                          (Ru(), zu(cS(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      jo(o_)
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
}, wS = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, fS = {
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
class Ym {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Vo {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Ym(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const ju = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Je(ce({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class _S {
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
    const t = ju((s = this.user) == null ? void 0 : s.content), n = ju((a = this.mt) == null ? void 0 : a.content);
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
class xc extends pi {
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
    lastUpdatedTimestamp: r,
    pageRevision: c,
    status: d,
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
      status: d,
      targetTitle: g
    }), this.targetUrl = i, this.sectionTranslations = l;
  }
}
const vi = mw.user.isAnon() ? void 0 : "user", Jm = (e) => {
  if (e === "assertuserfailed")
    throw new Do();
};
function Zm(e, t = null) {
  return k(this, null, function* () {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => k(this, null, function* () {
      var c;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (d) => new dc(Je(ce({}, d), { status: e }))
      ) : r = a.map(
        (d) => new xc(Je(ce({}, d), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const d = yield Zm(
          e,
          s.continue.offset
        );
        r = r.concat(d);
      }
      return r;
    }));
  });
}
function vS(e) {
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
      (a) => new _S(a)
    );
  });
}
function SS(e, t, n, o, s) {
  return k(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== K.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = q.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, d]) => {
      var i, l;
      if (!d) {
        const u = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(u);
      }
      return (l = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : i.groups) == null ? void 0 : l.content;
    }).catch((c) => Promise.reject(c));
  });
}
const yS = (e, t, n) => {
  const o = q.getApi(t);
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
}, CS = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: c,
  captchaId: d,
  captchaWord: g,
  isSandbox: i,
  sectionTranslationId: l
}) => {
  const u = {
    assert: vi,
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
  return d && (u.captchaid = d, u.captchaword = g), new mw.Api().postWithToken("csrf", u).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new Vo({
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
    Jm(m);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Vo({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, kS = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: c,
  sectionId: d,
  isSandbox: g,
  progress: i
}) => {
  const l = {
    assert: vi,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: d,
    issandbox: g,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", l).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    Jm(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Vo({ text: h, status: "error" });
  });
}, bS = (e) => {
  const t = {
    assert: vi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, xS = () => {
  const e = {
    assert: vi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new xc(n.cxcheckunreviewed.translation)
  );
}, $S = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, VS = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, ES = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), it = {
  fetchTranslations: Zm,
  fetchTranslationUnits: vS,
  fetchSegmentTranslation: SS,
  parseTemplateWikitext: yS,
  publishTranslation: CS,
  saveTranslation: kS,
  deleteTranslation: $S,
  fetchTranslatorStats: ES,
  deleteCXTranslation: VS,
  splitTranslation: bS,
  checkUnreviewedTranslations: xS
};
function LS(t) {
  return k(this, arguments, function* ({ commit: e }) {
    const n = yield it.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const DS = {
  fetchTranslatorStats: LS
}, AS = {
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
  /**
   * @param state
   * @param {"draft"|"published"} status
   * @param {boolean} value
   */
  setTranslationsLoaded: (e, { status: t, value: n }) => {
    e.translationsLoaded[t] = n;
  },
  setTranslatorStats: (e, t) => {
    e.translatorStats = t;
  }
}, TS = {
  namespaced: !0,
  state: wS,
  getters: fS,
  actions: DS,
  mutations: AS
}, BS = {
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
  appendixSectionTitles: ev,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, PS = {
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
}, FS = {
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
}, MS = {
  namespaced: !0,
  state: BS,
  getters: PS,
  actions: {},
  mutations: FS
}, NS = {
  /** @type {Page[]} */
  pages: [],
  /** @type {Boolean} */
  languagesRequested: !1,
  languageTitleGroups: [],
  /**
   * All language codes that are supported by cxserver
   * and can be used as source/target languages
   * @type {string[]}
   */
  supportedLanguageCodes: [],
  /** @type {Boolean} */
  supportedLanguageCodesRequested: !1,
  supportedMTProviderGroups: [],
  /**
   * Stores nearby pages to be used as suggestions for section translation
   * Format: {{ en: Page[], es: Page[], ... }}
   * @type {Object}
   */
  nearbyPages: {},
  enabledTargetLanguages: mw.config.get("wgSectionTranslationTargetLanguages")
}, US = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== K.EMPTY_TEXT_PROVIDER_KEY,
  /**
   * Get recently edited cx translations by current user if any,
   * for the current language pair.
   *
   * @param {Object} state
   * @param {Object} rootGetters
   * @param {Object} getters
   * @param {Object} rootState
   * @return {Page[]}
   */
  getRecentlyEditedPages: (e, t, n, o) => {
    const s = n.application.sourceLanguage, a = n.application.targetLanguage;
    return o["translator/getTranslationsForLanguagePair"](s, a).slice(
      0,
      n.suggestions.maxRecentlyEditedSuggestions
    ).map(
      (d) => t.getPage(s, d.sourceTitle)
    ).filter((d) => !!d);
  },
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
function IS() {
  return q.getLanguagePairs().then((e) => e.sourceLanguages);
}
function RS(e, t) {
  return k(this, null, function* () {
    const n = q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new K(e, t, o.mt)
      )
    );
  });
}
function zS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function OS(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = q.getWikiDomainCode(e), r = q.getWikiDomainCode(t), c = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, d = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(d.postWithToken("csrf", c)).then((g) => {
    const l = {
      action: "tag",
      revid: g.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(d.postWithToken("csrf", l));
  });
}
const Si = {
  fetchSupportedLanguageCodes: IS,
  fetchSupportedMTProviders: RS,
  fetchCXServerToken: zS,
  addWikibaseLink: OS
};
function jS({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const c = o.slice(r, r + s), d = Fo.fetchPages(n, c).then(
      (g) => g.forEach((i) => t("addPage", i))
    );
    a.push(d);
  }
  return Promise.all(a);
}
function HS(n) {
  return k(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Si.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function qS(o) {
  return k(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield Fo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const GS = {
  fetchNearbyPages: qS,
  fetchPageMetadata: jS,
  fetchSupportedLanguageCodes: HS
}, XS = {
  addPage(e, t) {
    e.pages.push(t);
  },
  addLanguageTitleGroup(e, t) {
    e.languageTitleGroups.push(t);
  },
  setSupportedLanguageCodes(e, t) {
    e.supportedLanguageCodes = t;
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
  setLanguagesRequested(e, t) {
    e.languagesRequested = t;
  },
  setSupportedLanguageCodesRequested(e, t) {
    e.supportedLanguageCodesRequested = t;
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
}, WS = {
  namespaced: !0,
  state: NS,
  getters: US,
  actions: GS,
  mutations: XS
}, KS = {
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
  /**
   * The cxserver token, mainly used for accessing external machine translation services.
   * @type String
   */
  cxServerToken: null,
  translationDataLoadingCounter: 0,
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
}, YS = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, JS = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s && km(s) ? it.parseTemplateWikitext(
    ym(s),
    n,
    t
  ) : Promise.resolve(null);
}, Qm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s ? it.parseTemplateWikitext(
    ym(s),
    n,
    t
  ) : Promise.resolve(null);
}, ZS = (o) => k(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, r;
  t.cxServerToken || (yield Si.fetchCXServerToken().then(
    (c) => {
      c.age <= 30 && (c.age = 3600);
      const d = Math.floor(Date.now() / 1e3);
      c.refreshAt = d + c.age - 30, n("setCXServerToken", c);
    },
    (c) => {
      if (c === "token-impossible") {
        const d = Math.floor(Date.now() / 1e3);
        n("setCXServerToken", { jwt: "", refreshAt: d + 3600 * 10 });
      }
    }
  ));
  const s = Math.floor(Date.now() / 1e3);
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (r = t.cxServerToken) == null ? void 0 : r.jwt;
}), QS = { getCXServerToken: ZS }, ey = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = K.getStorageKey(
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
   */
  increaseTranslationDataLoadingCounter(e) {
    e.translationDataLoadingCounter++;
  },
  /**
   * @param {object} state
   */
  decreaseTranslationDataLoadingCounter(e) {
    e.translationDataLoadingCounter--;
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
}, ty = {
  namespaced: !0,
  state: KS,
  getters: YS,
  actions: QS,
  mutations: ey
}, ny = window.Vuex.createStore, oy = ny({
  modules: { translator: TS, suggestions: MS, mediawiki: WS, application: ty }
});
function sy() {
  return eh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function eh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const ay = typeof Proxy == "function", iy = "devtools-plugin:setup", ry = "plugin:settings:set";
let no, Yl;
function ly() {
  var e;
  return no !== void 0 || (typeof window != "undefined" && window.performance ? (no = !0, Yl = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (no = !0, Yl = global.perf_hooks.performance) : no = !1), no;
}
function cy() {
  return ly() ? Yl.now() : Date.now();
}
class uy {
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
        return cy();
      }
    }, n && n.on(ry, (r, c) => {
      r === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, c) => this.target ? this.target.on[c] : (...d) => {
        this.onQueue.push({
          method: c,
          args: d
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...d) => (this.targetQueue.push({
        method: c,
        args: d,
        resolve: () => {
        }
      }), this.fallbacks[c](...d)) : (...d) => new Promise((g) => {
        this.targetQueue.push({
          method: c,
          args: d,
          resolve: g
        });
      })
    });
  }
  setRealTarget(t) {
    return k(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function dy(e, t) {
  const n = e, o = eh(), s = sy(), a = ay && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(iy, e, t);
  else {
    const r = a ? new uy(n, s) : null;
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
const th = window.Vue.getCurrentInstance, Eo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Ut = window.Vue.computed, As = window.Vue.unref, gy = window.Vue.watchEffect, nh = window.Vue.defineComponent, py = window.Vue.reactive, oh = window.Vue.h, Wi = window.Vue.provide, my = window.Vue.ref, sh = window.Vue.watch, hy = window.Vue.shallowRef, wy = window.Vue.shallowReactive, fy = window.Vue.nextTick, ln = typeof window != "undefined";
function _y(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const X = Object.assign;
function Ki(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Xe(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ts = () => {
}, Xe = Array.isArray;
function H(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const vy = /\/$/, Sy = (e) => e.replace(vy, "");
function Yi(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const c = t.indexOf("#");
  let d = t.indexOf("?");
  return c < d && c >= 0 && (d = -1), d > -1 && (o = t.slice(0, d), a = t.slice(d + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), r = t.slice(c, t.length)), o = ky(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function yy(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Hu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function qu(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && An(t.matched[o], n.matched[s]) && ah(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function An(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ah(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Cy(e[n], t[n]))
      return !1;
  return !0;
}
function Cy(e, t) {
  return Xe(e) ? Gu(e, t) : Xe(t) ? Gu(t, e) : e === t;
}
function Gu(e, t) {
  return Xe(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function ky(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return H(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Fs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Fs || (Fs = {}));
var Bs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Bs || (Bs = {}));
function by(e) {
  if (!e)
    if (ln) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Sy(e);
}
const xy = /^[^#]+#/;
function $y(e, t) {
  return e.replace(xy, "#") + t;
}
function Vy(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const yi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Ey(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          H(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        H(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && H(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Vy(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Xu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Jl = /* @__PURE__ */ new Map();
function Ly(e, t) {
  Jl.set(e, t);
}
function Dy(e) {
  const t = Jl.get(e);
  return Jl.delete(e), t;
}
let Ay = () => location.protocol + "//" + location.host;
function ih(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, d = s.slice(c);
    return d[0] !== "/" && (d = "/" + d), Hu(d, "");
  }
  return Hu(n, e) + o + s;
}
function Ty(e, t, n, o) {
  let s = [], a = [], r = null;
  const c = ({ state: u }) => {
    const p = ih(e, location), m = n.value, h = t.value;
    let w = 0;
    if (u) {
      if (n.value = p, t.value = u, r && r === m) {
        r = null;
        return;
      }
      w = h ? u.position - h.position : 0;
    } else
      o(p);
    s.forEach((_) => {
      _(n.value, m, {
        delta: w,
        type: Fs.pop,
        direction: w ? w > 0 ? Bs.forward : Bs.back : Bs.unknown
      });
    });
  };
  function d() {
    r = n.value;
  }
  function g(u) {
    s.push(u);
    const p = () => {
      const m = s.indexOf(u);
      m > -1 && s.splice(m, 1);
    };
    return a.push(p), p;
  }
  function i() {
    const { history: u } = window;
    u.state && u.replaceState(X({}, u.state, { scroll: yi() }), "");
  }
  function l() {
    for (const u of a)
      u();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: d,
    listen: g,
    destroy: l
  };
}
function Wu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? yi() : null
  };
}
function By(e) {
  const { history: t, location: n } = window, o = {
    value: ih(e, n)
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
  function a(d, g, i) {
    const l = e.indexOf("#"), u = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + d : Ay() + e + d;
    try {
      t[i ? "replaceState" : "pushState"](g, "", u), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? H("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](u);
    }
  }
  function r(d, g) {
    const i = X({}, t.state, Wu(
      s.value.back,
      // keep back and forward entries but override current position
      d,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(d, i, !0), o.value = d;
  }
  function c(d, g) {
    const i = X(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: d,
        scroll: yi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && H(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const l = X({}, Wu(o.value, d, null), { position: i.position + 1 }, g);
    a(d, l, !1), o.value = d;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: r
  };
}
function Py(e) {
  e = by(e);
  const t = By(e), n = Ty(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = X({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: $y.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Fy(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && H(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Py(e);
}
function My(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function rh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const mn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Zl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Ku;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ku || (Ku = {}));
const Ny = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Iy(t)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function Lo(e, t) {
  return {}.NODE_ENV !== "production" ? X(new Error(Ny[e](t)), {
    type: e,
    [Zl]: !0
  }, t) : X(new Error(), {
    type: e,
    [Zl]: !0
  }, t);
}
function Gt(e, t) {
  return e instanceof Error && Zl in e && (t == null || !!(e.type & t));
}
const Uy = ["params", "query", "hash"];
function Iy(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Uy)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Yu = "[^/]+?", Ry = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, zy = /[.+*?^${}()[\]/\\]/g;
function Oy(e, t) {
  const n = X({}, Ry, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const i = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let l = 0; l < g.length; l++) {
      const u = g[l];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (u.type === 0)
        l || (s += "/"), s += u.value.replace(zy, "\\$&"), p += 40;
      else if (u.type === 1) {
        const { value: m, repeatable: h, optional: w, regexp: _ } = u;
        a.push({
          name: m,
          repeatable: h,
          optional: w
        });
        const f = _ || Yu;
        if (f !== Yu) {
          p += 10;
          try {
            new RegExp(`(${f})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${f}): ` + S.message);
          }
        }
        let y = h ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
        l || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && g.length < 2 ? `(?:/${y})` : "/" + y), w && (y += "?"), s += y, p += 20, w && (p += -8), h && (p += -20), f === ".*" && (p += -50);
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
    for (let u = 1; u < i.length; u++) {
      const p = i[u] || "", m = a[u - 1];
      l[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return l;
  }
  function d(g) {
    let i = "", l = !1;
    for (const u of e) {
      (!l || !i.endsWith("/")) && (i += "/"), l = !1;
      for (const p of u)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: w } = p, _ = m in g ? g[m] : "";
          if (Xe(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const f = Xe(_) ? _.join("/") : _;
          if (!f)
            if (w)
              u.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : l = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          i += f;
        }
    }
    return i || "/";
  }
  return {
    re: r,
    score: o,
    keys: a,
    parse: c,
    stringify: d
  };
}
function jy(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Hy(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = jy(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Ju(o))
      return 1;
    if (Ju(s))
      return -1;
  }
  return s.length - o.length;
}
function Ju(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const qy = {
  type: 0,
  value: ""
}, Gy = /[a-zA-Z0-9_]/;
function Xy(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[qy]];
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
  let c = 0, d, g = "", i = "";
  function l() {
    g && (n === 0 ? a.push({
      type: 0,
      value: g
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (d === "*" || d === "+") && t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: g,
      regexp: i,
      repeatable: d === "*" || d === "+",
      optional: d === "*" || d === "?"
    })) : t("Invalid state to consume buffer"), g = "");
  }
  function u() {
    g += d;
  }
  for (; c < e.length; ) {
    if (d = e[c++], d === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        d === "/" ? (g && l(), r()) : d === ":" ? (l(), n = 1) : u();
        break;
      case 4:
        u(), n = o;
        break;
      case 1:
        d === "(" ? n = 2 : Gy.test(d) ? u() : (l(), n = 0, d !== "*" && d !== "?" && d !== "+" && c--);
        break;
      case 2:
        d === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + d : n = 3 : i += d;
        break;
      case 3:
        l(), n = 0, d !== "*" && d !== "?" && d !== "+" && c--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), l(), r(), s;
}
function Wy(e, t, n) {
  const o = Oy(Xy(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && H(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = X(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Ky(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = ed({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, l, u) {
    const p = !u, m = Yy(i);
    ({}).NODE_ENV !== "production" && eC(m, l), m.aliasOf = u && u.record;
    const h = ed(t, i), w = [
      m
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const S of y)
        w.push(X({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: u ? u.record.components : m.components,
          path: S,
          // we might be the child of an alias
          aliasOf: u ? u.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, f;
    for (const y of w) {
      const { path: S } = y;
      if (l && S[0] !== "/") {
        const C = l.record.path, x = C[C.length - 1] === "/" ? "" : "/";
        y.path = l.record.path + (S && x + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = Wy(y, l, h), {}.NODE_ENV !== "production" && l && S[0] === "/" && tC(_, l), u ? (u.alias.push(_), {}.NODE_ENV !== "production" && Qy(u, _)) : (f = f || _, f !== _ && f.alias.push(_), p && i.name && !Qu(_) && r(i.name)), m.children) {
        const C = m.children;
        for (let x = 0; x < C.length; x++)
          a(C[x], _, u && u.children[x]);
      }
      u = u || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && d(_);
    }
    return f ? () => {
      r(f);
    } : Ts;
  }
  function r(i) {
    if (rh(i)) {
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
  function d(i) {
    let l = 0;
    for (; l < n.length && Hy(i, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[l].record.path || !lh(i, n[l])); )
      l++;
    n.splice(l, 0, i), i.record.name && !Qu(i) && o.set(i.record.name, i);
  }
  function g(i, l) {
    let u, p = {}, m, h;
    if ("name" in i && i.name) {
      if (u = o.get(i.name), !u)
        throw Lo(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const f = Object.keys(i.params || {}).filter((y) => !u.keys.find((S) => S.name === y));
        f.length && H(`Discarded invalid param(s) "${f.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = u.record.name, p = X(
        // paramsFromLocation is a new object
        Zu(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          u.keys.filter((f) => !f.optional).map((f) => f.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Zu(i.params, u.keys.map((f) => f.name))
      ), m = u.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && H(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), u = n.find((f) => f.re.test(m)), u && (p = u.parse(m), h = u.record.name);
    else {
      if (u = l.name ? o.get(l.name) : n.find((f) => f.re.test(l.path)), !u)
        throw Lo(1, {
          location: i,
          currentLocation: l
        });
      h = u.record.name, p = X({}, l.params, i.params), m = u.stringify(p);
    }
    const w = [];
    let _ = u;
    for (; _; )
      w.unshift(_.record), _ = _.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: w,
      meta: Zy(w)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: g, removeRoute: r, getRoutes: c, getRecordMatcher: s };
}
function Zu(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Yy(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Jy(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Jy(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Qu(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Zy(e) {
  return e.reduce((t, n) => X(t, n.meta), {});
}
function ed(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Ql(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Qy(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ql.bind(null, n)))
      return H(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ql.bind(null, n)))
      return H(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function eC(e, t) {
  t && t.record.name && !e.name && !e.path && H(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function tC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ql.bind(null, n)))
      return H(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function lh(e, t) {
  return t.children.some((n) => n === e || lh(e, n));
}
const ch = /#/g, nC = /&/g, oC = /\//g, sC = /=/g, aC = /\?/g, uh = /\+/g, iC = /%5B/g, rC = /%5D/g, dh = /%5E/g, lC = /%60/g, gh = /%7B/g, cC = /%7C/g, ph = /%7D/g, uC = /%20/g;
function $c(e) {
  return encodeURI("" + e).replace(cC, "|").replace(iC, "[").replace(rC, "]");
}
function dC(e) {
  return $c(e).replace(gh, "{").replace(ph, "}").replace(dh, "^");
}
function ec(e) {
  return $c(e).replace(uh, "%2B").replace(uC, "+").replace(ch, "%23").replace(nC, "%26").replace(lC, "`").replace(gh, "{").replace(ph, "}").replace(dh, "^");
}
function gC(e) {
  return ec(e).replace(sC, "%3D");
}
function pC(e) {
  return $c(e).replace(ch, "%23").replace(aC, "%3F");
}
function mC(e) {
  return e == null ? "" : pC(e).replace(oC, "%2F");
}
function Ms(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && H(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function hC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(uh, " "), r = a.indexOf("="), c = Ms(r < 0 ? a : a.slice(0, r)), d = r < 0 ? null : Ms(a.slice(r + 1));
    if (c in t) {
      let g = t[c];
      Xe(g) || (g = t[c] = [g]), g.push(d);
    } else
      t[c] = d;
  }
  return t;
}
function td(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = gC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Xe(o) ? o.map((a) => a && ec(a)) : [o && ec(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function wC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Xe(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const fC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), nd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ci = Symbol({}.NODE_ENV !== "production" ? "router" : ""), mh = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), tc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Ho() {
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
function Ln(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, c) => {
    const d = (l) => {
      l === !1 ? c(Lo(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : My(l) ? c(Lo(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), r());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? _C(d, t, n) : d);
    let i = Promise.resolve(g);
    if (e.length < 3 && (i = i.then(d)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        i = i.then((u) => d._called ? u : (H(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !d._called) {
        H(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((l) => c(l));
  });
}
function _C(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && H(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ji(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && H(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let c = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw H(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          H(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const d = c;
          c = () => d;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, H(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (vC(c)) {
          const g = (c.__vccOpts || c)[t];
          g && s.push(Ln(g, n, o, a, r));
        } else {
          let d = c();
          ({}).NODE_ENV !== "production" && !("catch" in d) && (H(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), d = Promise.resolve(d)), s.push(() => d.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = _y(g) ? g.default : g;
            a.components[r] = i;
            const u = (i.__vccOpts || i)[t];
            return u && Ln(u, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function vC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function od(e) {
  const t = Eo(Ci), n = Eo(mh), o = Ut(() => t.resolve(As(e.to))), s = Ut(() => {
    const { matched: d } = o.value, { length: g } = d, i = d[g - 1], l = n.matched;
    if (!i || !l.length)
      return -1;
    const u = l.findIndex(An.bind(null, i));
    if (u > -1)
      return u;
    const p = sd(d[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      sd(i) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(An.bind(null, d[g - 2])) : u
    );
  }), a = Ut(() => s.value > -1 && kC(n.params, o.value.params)), r = Ut(() => s.value > -1 && s.value === n.matched.length - 1 && ah(n.params, o.value.params));
  function c(d = {}) {
    return CC(d) ? t[As(e.replace) ? "replace" : "push"](
      As(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ts) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && ln) {
    const d = th();
    if (d) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(g), gy(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Ut(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: c
  };
}
const SC = /* @__PURE__ */ nh({
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
  useLink: od,
  setup(e, { slots: t }) {
    const n = py(od(e)), { options: o } = Eo(Ci), s = Ut(() => ({
      [ad(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [ad(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : oh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), yC = SC;
function CC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function kC(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Xe(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function sd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ad = (e, t, n) => e != null ? e : t != null ? t : n, bC = /* @__PURE__ */ nh({
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
    ({}).NODE_ENV !== "production" && $C();
    const o = Eo(tc), s = Ut(() => e.route || o.value), a = Eo(nd, 0), r = Ut(() => {
      let g = As(a);
      const { matched: i } = s.value;
      let l;
      for (; (l = i[g]) && !l.components; )
        g++;
      return g;
    }), c = Ut(() => s.value.matched[r.value]);
    Wi(nd, Ut(() => r.value + 1)), Wi(fC, c), Wi(tc, s);
    const d = my();
    return sh(() => [d.value, c.value, e.name], ([g, i, l], [u, p, m]) => {
      i && (i.instances[l] = g, p && p !== i && g && g === u && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), g && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !An(i, p) || !u) && (i.enterCallbacks[l] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, i = e.name, l = c.value, u = l && l.components[i];
      if (!u)
        return id(n.default, { Component: u, route: g });
      const p = l.props[i], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, w = oh(u, X({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[i] = null);
        },
        ref: d
      }));
      if ({}.NODE_ENV !== "production" && ln && w.ref) {
        const _ = {
          depth: r.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (Xe(w.ref) ? w.ref.map((y) => y.i) : [w.ref.i]).forEach((y) => {
          y.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        id(n.default, { Component: w, route: g }) || w
      );
    };
  }
});
function id(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const xC = bC;
function $C() {
  const e = th(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    H(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function qo(e, t) {
  const n = X({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => FC(o, ["instances", "children", "aliasOf"]))
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
function da(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let VC = 0;
function EC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = VC++;
  dy({
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
        value: qo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const u = l.__vrv_devtools;
        i.tags.push({
          label: (u.name ? `${u.name.toString()}: ` : "") + u.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: hh
        });
      }
      Xe(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((u) => {
        let p = _h, m = "";
        u.isExactActive ? (p = fh, m = "This is exactly active") : u.isActive && (p = wh, m = "This link is active"), i.tags.push({
          label: u.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), sh(t.currentRoute, () => {
      d(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
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
      const u = {
        guard: da("beforeEach"),
        from: qo(l, "Current Location during this navigation"),
        to: qo(i, "Target location")
      };
      Object.defineProperty(i.meta, "__navigationId", {
        value: r++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: i.fullPath,
          data: u,
          groupId: i.meta.__navigationId
        }
      });
    }), t.afterEach((i, l, u) => {
      const p = {
        guard: da("afterEach")
      };
      u ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: u ? u.message : "",
          tooltip: "Navigation Failure",
          value: u
        }
      }, p.status = da("❌")) : p.status = da("✅"), p.from = qo(l, "Current Location during this navigation"), p.to = qo(i, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: s.now(),
          data: p,
          logType: u ? "warning" : "default",
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
    function d() {
      if (!g)
        return;
      const i = g;
      let l = n.getRoutes().filter((u) => !u.parent);
      l.forEach(yh), i.filter && (l = l.filter((u) => (
        // save matches state based on the payload
        nc(u, i.filter.toLowerCase())
      ))), l.forEach((u) => Sh(u, t.currentRoute.value)), i.rootNodes = l.map(vh);
    }
    let g;
    s.on.getInspectorTree((i) => {
      g = i, i.app === e && i.inspectorId === c && d();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === c) {
        const u = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        u && (i.state = {
          options: DC(u)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function LC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function DC(e) {
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
        display: e.keys.map((o) => `${o.name}${LC(o)}`).join(" "),
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
const hh = 15485081, wh = 2450411, fh = 8702998, AC = 2282478, _h = 16486972, TC = 6710886;
function vh(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: AC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: _h
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: hh
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: fh
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: wh
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: TC
  });
  let o = n.__vd_id;
  return o == null && (o = String(BC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(vh)
  };
}
let BC = 0;
const PC = /^\/(.*)\/([a-z]*)$/;
function Sh(e, t) {
  const n = t.matched.length && An(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => An(o, e.record))), e.children.forEach((o) => Sh(o, t));
}
function yh(e) {
  e.__vd_match = !1, e.children.forEach(yh);
}
function nc(e, t) {
  const n = String(e.re).match(PC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => nc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ms(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => nc(r, t));
}
function FC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function MC(e) {
  const t = Ky(e.routes, e), n = e.parseQuery || hC, o = e.stringifyQuery || td, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Ho(), r = Ho(), c = Ho(), d = hy(mn);
  let g = mn;
  ln && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Ki.bind(null, (v) => "" + v), l = Ki.bind(null, mC), u = (
    // @ts-expect-error: intentionally avoid the type check
    Ki.bind(null, Ms)
  );
  function p(v, L) {
    let D, A;
    return rh(v) ? (D = t.getRecordMatcher(v), A = L) : A = v, t.addRoute(A, D);
  }
  function m(v) {
    const L = t.getRecordMatcher(v);
    L ? t.removeRoute(L) : {}.NODE_ENV !== "production" && H(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, L) {
    if (L = X({}, L || d.value), typeof v == "string") {
      const O = Yi(n, v, L.path), Q = t.resolve({ path: O.path }, L), ut = s.createHref(O.fullPath);
      return {}.NODE_ENV !== "production" && (ut.startsWith("//") ? H(`Location "${v}" resolved to "${ut}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || H(`No match found for location with path "${v}"`)), X(O, Q, {
        params: u(Q.params),
        hash: Ms(O.hash),
        redirectedFrom: void 0,
        href: ut
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && H(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = X({}, v, {
        path: Yi(n, v.path, L.path).path
      });
    else {
      const O = X({}, v.params);
      for (const Q in O)
        O[Q] == null && delete O[Q];
      D = X({}, v, {
        params: l(O)
      }), L.params = l(L.params);
    }
    const A = t.resolve(D, L), G = v.hash || "";
    ({}).NODE_ENV !== "production" && G && !G.startsWith("#") && H(`A \`hash\` should always start with the character "#". Replace "${G}" with "#${G}".`), A.params = i(u(A.params));
    const re = yy(o, X({}, v, {
      hash: dC(G),
      path: A.path
    })), j = s.createHref(re);
    return {}.NODE_ENV !== "production" && (j.startsWith("//") ? H(`Location "${v}" resolved to "${j}". A resolved location cannot start with multiple slashes.`) : A.matched.length || H(`No match found for location with path "${"path" in v ? v.path : v}"`)), X({
      fullPath: re,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: G,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === td ? wC(v.query) : v.query || {}
      )
    }, A, {
      redirectedFrom: void 0,
      href: j
    });
  }
  function f(v) {
    return typeof v == "string" ? Yi(n, v, d.value.path) : X({}, v);
  }
  function y(v, L) {
    if (g !== v)
      return Lo(8, {
        from: L,
        to: v
      });
  }
  function S(v) {
    return T(v);
  }
  function C(v) {
    return S(X(f(v), { replace: !0 }));
  }
  function x(v) {
    const L = v.matched[v.matched.length - 1];
    if (L && L.redirect) {
      const { redirect: D } = L;
      let A = typeof D == "function" ? D(v) : D;
      if (typeof A == "string" && (A = A.includes("?") || A.includes("#") ? A = f(A) : (
        // force empty params
        { path: A }
      ), A.params = {}), {}.NODE_ENV !== "production" && !("path" in A) && !("name" in A))
        throw H(`Invalid redirect found:
${JSON.stringify(A, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return X({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in A ? {} : v.params
      }, A);
    }
  }
  function T(v, L) {
    const D = g = _(v), A = d.value, G = v.state, re = v.force, j = v.replace === !0, O = x(D);
    if (O)
      return T(
        X(f(O), {
          state: typeof O == "object" ? X({}, G, O.state) : G,
          force: re,
          replace: j
        }),
        // keep original redirectedFrom if it exists
        L || D
      );
    const Q = D;
    Q.redirectedFrom = L;
    let ut;
    return !re && qu(o, A, D) && (ut = Lo(16, { to: Q, from: A }), ct(
      A,
      A,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (ut ? Promise.resolve(ut) : I(Q, A)).catch((ke) => Gt(ke) ? (
      // navigation redirects still mark the router as ready
      Gt(
        ke,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ke : Vt(ke)
    ) : (
      // reject any unknown error
      Me(ke, Q, A)
    )).then((ke) => {
      if (ke) {
        if (Gt(
          ke,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          qu(o, _(ke.to), Q) && // and we have done it a couple of times
          L && // @ts-expect-error: added only in dev
          (L._count = L._count ? (
            // @ts-expect-error
            L._count + 1
          ) : 1) > 30 ? (H(`Detected a possibly infinite redirection in a navigation guard when going from "${A.fullPath}" to "${Q.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : T(
            // keep options
            X({
              // preserve an existing replacement but allow the redirect to override it
              replace: j
            }, f(ke.to), {
              state: typeof ke.to == "object" ? X({}, G, ke.to.state) : G,
              force: re
            }),
            // preserve the original redirectedFrom if any
            L || Q
          );
      } else
        ke = N(Q, A, !0, j, G);
      return M(Q, A, ke), ke;
    });
  }
  function V(v, L) {
    const D = y(v, L);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function F(v) {
    const L = Ne.values().next().value;
    return L && typeof L.runWithContext == "function" ? L.runWithContext(v) : v();
  }
  function I(v, L) {
    let D;
    const [A, G, re] = NC(v, L);
    D = Ji(A.reverse(), "beforeRouteLeave", v, L);
    for (const O of A)
      O.leaveGuards.forEach((Q) => {
        D.push(Ln(Q, v, L));
      });
    const j = V.bind(null, v, L);
    return D.push(j), xe(D).then(() => {
      D = [];
      for (const O of a.list())
        D.push(Ln(O, v, L));
      return D.push(j), xe(D);
    }).then(() => {
      D = Ji(G, "beforeRouteUpdate", v, L);
      for (const O of G)
        O.updateGuards.forEach((Q) => {
          D.push(Ln(Q, v, L));
        });
      return D.push(j), xe(D);
    }).then(() => {
      D = [];
      for (const O of re)
        if (O.beforeEnter)
          if (Xe(O.beforeEnter))
            for (const Q of O.beforeEnter)
              D.push(Ln(Q, v, L));
          else
            D.push(Ln(O.beforeEnter, v, L));
      return D.push(j), xe(D);
    }).then(() => (v.matched.forEach((O) => O.enterCallbacks = {}), D = Ji(re, "beforeRouteEnter", v, L), D.push(j), xe(D))).then(() => {
      D = [];
      for (const O of r.list())
        D.push(Ln(O, v, L));
      return D.push(j), xe(D);
    }).catch((O) => Gt(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function M(v, L, D) {
    c.list().forEach((A) => F(() => A(v, L, D)));
  }
  function N(v, L, D, A, G) {
    const re = y(v, L);
    if (re)
      return re;
    const j = L === mn, O = ln ? history.state : {};
    D && (A || j ? s.replace(v.fullPath, X({
      scroll: j && O && O.scroll
    }, G)) : s.push(v.fullPath, G)), d.value = v, ct(v, L, D, j), Vt();
  }
  let U;
  function ie() {
    U || (U = s.listen((v, L, D) => {
      if (!he.listening)
        return;
      const A = _(v), G = x(A);
      if (G) {
        T(X(G, { replace: !0 }), A).catch(Ts);
        return;
      }
      g = A;
      const re = d.value;
      ln && Ly(Xu(re.fullPath, D.delta), yi()), I(A, re).catch((j) => Gt(
        j,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? j : Gt(
        j,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (T(
        j.to,
        A
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        Gt(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === Fs.pop && s.go(-1, !1);
      }).catch(Ts), Promise.reject()) : (D.delta && s.go(-D.delta, !1), Me(j, A, re))).then((j) => {
        j = j || N(
          // after navigation, all matched components are resolved
          A,
          re,
          !1
        ), j && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Gt(
          j,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === Fs.pop && Gt(
          j,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), M(A, re, j);
      }).catch(Ts);
    }));
  }
  let J = Ho(), Ot = Ho(), lt;
  function Me(v, L, D) {
    Vt(v);
    const A = Ot.list();
    return A.length ? A.forEach((G) => G(v, L, D)) : ({}.NODE_ENV !== "production" && H("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function dn() {
    return lt && d.value !== mn ? Promise.resolve() : new Promise((v, L) => {
      J.add([v, L]);
    });
  }
  function Vt(v) {
    return lt || (lt = !v, ie(), J.list().forEach(([L, D]) => v ? D(v) : L()), J.reset()), v;
  }
  function ct(v, L, D, A) {
    const { scrollBehavior: G } = e;
    if (!ln || !G)
      return Promise.resolve();
    const re = !D && Dy(Xu(v.fullPath, 0)) || (A || !D) && history.state && history.state.scroll || null;
    return fy().then(() => G(v, L, re)).then((j) => j && Ey(j)).catch((j) => Me(j, v, L));
  }
  const Z = (v) => s.go(v);
  let jt;
  const Ne = /* @__PURE__ */ new Set(), he = {
    currentRoute: d,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: w,
    getRoutes: h,
    resolve: _,
    options: e,
    push: S,
    replace: C,
    go: Z,
    back: () => Z(-1),
    forward: () => Z(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: c.add,
    onError: Ot.add,
    isReady: dn,
    install(v) {
      const L = this;
      v.component("RouterLink", yC), v.component("RouterView", xC), v.config.globalProperties.$router = L, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => As(d)
      }), ln && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !jt && d.value === mn && (jt = !0, S(s.location).catch((G) => {
        ({}).NODE_ENV !== "production" && H("Unexpected error when starting the router:", G);
      }));
      const D = {};
      for (const G in mn)
        Object.defineProperty(D, G, {
          get: () => d.value[G],
          enumerable: !0
        });
      v.provide(Ci, L), v.provide(mh, wy(D)), v.provide(tc, d);
      const A = v.unmount;
      Ne.add(v), v.unmount = function() {
        Ne.delete(v), Ne.size < 1 && (g = mn, U && U(), U = null, d.value = mn, jt = !1, lt = !1), A();
      }, {}.NODE_ENV !== "production" && ln && EC(v, L, t);
    }
  };
  function xe(v) {
    return v.reduce((L, D) => L.then(() => F(D)), Promise.resolve());
  }
  return he;
}
function NC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const c = t.matched[r];
    c && (e.matched.find((g) => An(g, c)) ? o.push(c) : n.push(c));
    const d = e.matched[r];
    d && (t.matched.find((g) => An(g, d)) || s.push(d));
  }
  return [n, o, s];
}
function Ce() {
  return Eo(Ci);
}
const UC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', IC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', RC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', zC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', OC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', jC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', HC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', qC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', GC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', XC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', WC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', KC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', YC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', JC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', ZC = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', QC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', ek = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', tk = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', nk = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', ok = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', sk = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', ak = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', ik = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', rk = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', lk = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', ck = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', uk = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', dk = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', gk = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', pk = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20H4a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v13a2 2 0 01-2 2m-6.5-3.5.41-1.09L8 15l-1.09-.41-.41-1.09-.41 1.09L5 15l1.09.41zm2.982-.949.952-2.561 2.53-.964-2.53-.964L9.482 8.5l-.952 2.562-2.53.964 2.53.964zM6 10.5l.547-1.453L8 8.5l-1.453-.547L6 6.5l-.547 1.453L4 8.5l1.453.547z"/>', mk = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', hk = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', oc = UC, Ch = IC, kh = {
  ltr: RC,
  shouldFlip: !0
}, bh = {
  ltr: zC,
  shouldFlip: !0
}, Ns = {
  ltr: OC,
  shouldFlip: !0
}, wk = jC, xh = HC, $h = qC, fk = GC, _k = XC, vk = WC, Mo = KC, Vc = YC, Ec = JC, rd = ZC, Sk = QC, Vh = ek, yk = {
  langCodeMap: {
    ar: tk
  },
  default: nk
}, Eh = ok, Lc = {
  ltr: sk,
  shouldFlip: !0
}, Ck = ak, Gs = {
  ltr: ik,
  shouldFlip: !0
}, Dc = {
  ltr: rk,
  shouldFlip: !0
}, kk = {
  ltr: lk,
  shouldFlip: !0
}, Lh = ck, bk = uk, xk = dk, $k = gk, Vk = {
  ltr: pk,
  shouldFlip: !0
}, Ek = mk, Dh = hk;
const Zi = window.Vue.unref, Lk = window.Vue.resolveDirective, oo = window.Vue.createElementVNode, ga = window.Vue.withDirectives, Dk = window.Vue.withCtx, Ak = window.Vue.openBlock, Tk = window.Vue.createBlock, Bk = { class: "complementary" }, Pk = { class: "complementary mt-4" }, Fk = { class: "complementary" }, Mk = ["href"], Nk = window.Codex.CdxMessage, Uk = "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation", Ik = {
  __name: "CXDashboardBanner",
  setup(e) {
    const t = Sm("Special:CX", {
      "cx-dashboard": "desktop"
    });
    return (n, o) => {
      const s = Lk("i18n");
      return Ak(), Tk(Zi(Nk), {
        icon: Zi(Vk),
        class: "cx-dashboard-banner pa-4",
        "allow-user-dismiss": !0
      }, {
        default: Dk(() => [
          ga(oo("h5", null, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-title"]
          ]),
          ga(oo("p", Bk, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-description"]
          ]),
          oo("p", Pk, [
            ga(oo("a", {
              target: "_blank",
              href: Uk
            }, null, 512), [
              [s, void 0, "cx-sx-dashboard-banner-learn-more"]
            ])
          ]),
          oo("p", Fk, [
            ga(oo("a", { href: Zi(t) }, null, 8, Mk), [
              [s, void 0, "cx-sx-dashboard-banner-access-previous"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["icon"]);
    };
  }
}, Rk = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, r)), g = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, zk = (e) => {
  const t = Rk(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const dt = window.Vue.unref, so = window.Vue.createVNode, Xt = window.Vue.createElementVNode, ld = window.Vue.renderSlot, cd = window.Vue.withModifiers, Qi = window.Vue.toDisplayString, er = window.Vue.withCtx, Ok = window.Vue.openBlock, jk = window.Vue.createElementBlock, Hk = window.Vue.createCommentVNode, qk = { class: "col shrink pe-4" }, Gk = { class: "col" }, Xk = { class: "cx-translation__details column justify-between ma-0" }, Wk = { class: "row ma-0" }, Kk = { class: "col grow" }, Yk = { class: "col shrink ps-2" }, Jk = ["dir", "textContent"], Zk = ["dir", "textContent"], Qk = ["textContent"], eb = window.Vuex.useStore, tb = window.Vue.computed, Ah = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: pi,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = eb(), s = (c, d) => {
      const g = o.getters["mediawiki/getPage"](c, d);
      return g == null ? void 0 : g.thumbnail;
    }, a = de(), r = tb(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, d = zk(n.translation.startTimestamp);
      return a.i18n(
        c[d.postfix],
        d.value
      );
    });
    return (c, d) => e.translation ? (Ok(), jk("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: d[1] || (d[1] = cd((g) => c.$emit("click"), ["stop"]))
    }, [
      Xt("div", qk, [
        so(dt(uc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Xt("div", Gk, [
        Xt("div", Xk, [
          Xt("div", Wk, [
            Xt("div", Kk, [
              ld(c.$slots, "title")
            ]),
            Xt("div", Yk, [
              so(dt(Le), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: d[0] || (d[0] = cd((g) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          ld(c.$slots, "mid-content"),
          so(dt(P), { class: "cx-translation__footer ma-0" }, {
            default: er(() => [
              so(dt(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: er(() => [
                  Xt("span", {
                    class: "mw-ui-autonym",
                    dir: dt(z.getDir)(e.translation.sourceLanguage),
                    textContent: Qi(dt(z.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Jk),
                  so(dt(Le), {
                    icon: dt(Xf),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Xt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: dt(z.getDir)(e.translation.targetLanguage),
                    textContent: Qi(dt(z.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, Zk)
                ]),
                _: 1
              }),
              so(dt(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: er(() => [
                  Xt("span", {
                    textContent: Qi(r.value)
                  }, null, 8, Qk)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Hk("", !0);
  }
};
const Go = window.Vue.unref, ud = window.Vue.toDisplayString, nb = window.Vue.normalizeClass, ob = window.Vue.createElementVNode, tr = window.Vue.openBlock, sb = window.Vue.createElementBlock, dd = window.Vue.createCommentVNode, gd = window.Vue.createVNode, pa = window.Vue.withCtx, pd = window.Vue.createBlock, ab = ["lang", "textContent"], ib = ["lang", "textContent"], rb = window.Vue.computed, lb = window.Vue.inject, cb = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: dc,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = lb("colors").gray200, s = rb(
      () => {
        var d;
        return ((d = t.translation.progress) == null ? void 0 : d.any) * 100 || 0;
      }
    ), a = Ce(), { setTranslationURLParams: r } = B(), c = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (d, g) => (tr(), pd(Ah, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Go(mm),
      onActionIconClicked: g[0] || (g[0] = (i) => d.$emit("delete-translation")),
      onClick: c
    }, {
      title: pa(() => [
        ob("h5", {
          class: nb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: ud(e.translation.sourceTitle)
        }, null, 10, ab),
        e.translation.isLeadSectionTranslation ? dd("", !0) : (tr(), sb("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: ud(e.translation.sourceSectionTitle)
        }, null, 8, ib))
      ]),
      "mid-content": pa(() => [
        e.translation.progress ? (tr(), pd(Go(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: pa(() => [
            gd(Go(b), null, {
              default: pa(() => [
                gd(Go(_m), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Go(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : dd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, ub = window.Vuex.useStore, Th = [], db = (e, t, n) => Th.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), gb = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Th.push(o);
}, pb = () => {
  const e = ub();
  return (t, n, o) => k(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !db(t, n, o) && (s = yield ae.fetchSectionSuggestion(
      t,
      o,
      n
    ), gb(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Bh = "cx-translation-session-position-", Ph = () => Bh + mw.user.sessionId(), Fh = () => {
  const e = Ph();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, mb = function() {
  const e = Fh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Bh)).forEach((n) => mw.storage.remove(n));
  const t = Ph();
  mw.storage.set(t, e + 1);
};
let sc = null;
function hb(e) {
  if (sc)
    return Promise.resolve(sc);
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
function wb(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function fb(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), c = Fh(), d = {
    $schema: "/analytics/mediawiki/content_translation_event/1.8.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: c
  };
  let g;
  return a ? g = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, d, e))
  ) : g = hb(r).then((i) => {
    sc = i, mw.eventLog.submit(
      s,
      Object.assign({}, d, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: wb(i)
      })
    );
  }), g.then(() => {
    mb();
  });
}
const _b = window.Vue.computed, vb = window.Vue.inject, Pn = () => {
  const e = vb("breakpoints");
  return { isDesktop: _b(
    () => !q.isMobileDomain() && e.value.tabletAndUp
  ) };
}, We = () => {
  const { isDesktop: e } = Pn();
  return (t) => (t.access_method || (t.access_method = e.value ? "desktop" : "mobile web"), fb(t));
}, Mh = window.Vue.ref, Nh = Mh(null), ac = Mh(null), Sb = (e) => {
  Nh.value = e;
}, yb = (e) => {
  ac.value = e;
}, Ac = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = We();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: Nh.value,
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
      return ac.value && (r.event_context = ac.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: Sb,
    setStartTranslationEventContext: yb
  };
}, Cb = window.Vuex.useStore, Xs = () => {
  const e = Cb(), t = Ce(), n = Xm(), { setTranslationURLParams: o } = B(), { setStartTranslationEventSource: s, setStartTranslationEventContext: a } = Ac();
  return (r, c, d, g, i = null, l = !0) => k(void 0, null, function* () {
    const u = yield n(
      c,
      d,
      r
    );
    u && (e.dispatch("application/getCXServerToken"), o(u), s(g), a(i), l && t.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const ma = window.Vue.withModifiers, nr = window.Vue.toDisplayString, or = window.Vue.createElementVNode, Ze = window.Vue.unref, ha = window.Vue.openBlock, md = window.Vue.createBlock;
window.Vue.createCommentVNode;
const hn = window.Vue.createVNode, Mn = window.Vue.withCtx, hd = window.Vue.createElementBlock, kb = ["lang", "href", "textContent"], bb = {
  key: 1,
  class: "flex"
}, xb = { key: 2 }, wd = window.Vue.computed, fd = window.Vue.ref, sr = window.Codex.CdxButton, ar = window.Codex.CdxIcon, $b = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: xc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = fd(!0), o = fd(null), s = wd(() => {
      var h;
      return (h = o.value) == null ? void 0 : h.missingSections;
    }), a = wd(
      () => s.value && Object.keys(s.value)[0]
    );
    pb()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((h) => o.value = h).catch((h) => console.log(h)).finally(() => n.value = !1), Ce();
    const {
      setTranslationURLParams: c,
      setSectionURLParam: d,
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: i
    } = B(), l = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Xs(), p = aS(), m = (h) => {
      p(t.translation), u(
        t.translation.sourceTitle,
        g.value,
        i.value,
        "continue_published"
      ), h && d(h);
    };
    return (h, w) => (ha(), md(Ah, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: l
    }, {
      title: Mn(() => [
        or("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: w[0] || (w[0] = ma(() => {
          }, ["stop"])),
          textContent: nr(e.translation.sourceTitle)
        }, null, 8, kb)
      ]),
      "mid-content": Mn(() => [
        hn(Ze(P), { class: "ma-0" }, {
          default: Mn(() => [
            hn(Ze(b), null, {
              default: Mn(() => [
                n.value ? (ha(), md(Ze(qe), { key: 0 })) : s.value ? (ha(), hd("div", bb, [
                  hn(Ze(sr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: w[1] || (w[1] = ma((_) => m(a.value), ["stop"]))
                  }, {
                    default: Mn(() => [
                      hn(Ze(ar), {
                        class: "me-1",
                        icon: Ze(oc)
                      }, null, 8, ["icon"]),
                      or("span", null, nr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  hn(Ze(sr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": h.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: w[2] || (w[2] = ma((_) => m(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      hn(Ze(ar), { icon: Ze(Ec) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (ha(), hd("div", xb, [
                  hn(Ze(sr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: w[3] || (w[3] = ma((_) => m(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      hn(Ze(ar), {
                        class: "me-1",
                        icon: Ze(oc)
                      }, null, 8, ["icon"]),
                      or("span", null, nr(h.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, _d = window.Vuex.useStore, Vb = () => {
  const e = _d(), { commit: t } = _d(), { sourceLanguage: n, targetLanguage: o } = ee(e), s = We();
  return (a) => k(void 0, null, function* () {
    a.sectionTranslationId ? (yield it.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield it.deleteCXTranslation(
      a
    )) && t("translator/removeCXTranslation", a.translationId), s({
      event_type: "dashboard_translation_discard",
      translation_id: a.sectionTranslationId,
      translation_source_language: n.value,
      translation_source_title: a.sourceTitle,
      translation_source_section: a.sourceSectionTitle,
      translation_target_language: o.value,
      translation_target_title: a.targetTitle,
      translation_target_section: a.targetSectionTitle
    });
  });
};
const Eb = window.Vue.resolveDirective, ir = window.Vue.createElementVNode, Lb = window.Vue.withDirectives, rr = window.Vue.unref, vd = window.Vue.createVNode, Sd = window.Vue.withCtx, Db = window.Vue.openBlock, Ab = window.Vue.createBlock, Tb = { class: "pa-4" }, Bb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Pb = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: pi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Vb(), r = () => {
      a(n.translation), s();
    };
    return (c, d) => {
      const g = Eb("i18n");
      return Db(), Ab(rr(rt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Sd(() => [
          ir("div", Bb, [
            vd(rr(De), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            vd(rr(De), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Sd(() => [
          ir("div", Tb, [
            Lb(ir("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Fb(e, t, n) {
  return k(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Mb(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function yd(e, t, n) {
  return k(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(z.sortByAutonym) : (yield Fb(e, t, n)).sort(z.sortByAutonym);
  });
}
function Mb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Nb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Ub(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Ib = window.Vue.computed;
function Rb(e, t) {
  const n = Ib(() => {
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
const lr = window.Vue.ref, Cd = window.Vue.watch, zb = window.Vue.computed;
function Ob(e, t, n) {
  const o = lr(""), s = lr(-1), a = lr(null), r = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = zb(
    () => e.value ? t.value : [...n, ...t.value]
  ), d = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Cd(e, () => {
    s.value = -1;
  }), Cd(s, () => k(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: r, prev: d, langSelectorContainer: a, selectedLanguage: o };
}
function Tc(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, c = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const wa = window.Vue.renderSlot, fe = window.Vue.unref, jb = window.Vue.isRef, kd = window.Vue.createVNode, Xo = window.Vue.withModifiers, Wo = window.Vue.withKeys, wn = window.Vue.createElementVNode, Hb = window.Vue.resolveDirective, fa = window.Vue.withDirectives, cr = window.Vue.renderList, ur = window.Vue.Fragment, Wt = window.Vue.openBlock, Kt = window.Vue.createElementBlock, bd = window.Vue.toDisplayString, _a = window.Vue.normalizeClass, dr = window.Vue.createCommentVNode, qb = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Gb = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Xb = { class: "results px-3 pt-4" }, Wb = { class: "results-header ps-8 pb-2" }, Kb = { class: "results-languages--suggestions pa-0 ma-0" }, Yb = ["lang", "dir", "aria-selected", "onClick", "textContent"], Jb = { class: "results px-3 pt-4" }, Zb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Qb = ["lang", "dir", "aria-selected", "onClick", "textContent"], ex = ["aria-selected"], tx = { class: "no-results px-3 py-4" }, nx = { class: "ps-8" }, gr = window.Vue.ref, ox = window.Vue.watch, sx = window.Vue.onMounted, xd = window.Vue.computed, Uh = {
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
      default: Nb
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = gr(null), a = gr(""), r = gr([]), c = xd(
      () => Ub(r.value)
    ), d = xd(() => {
      const y = r.value.length;
      return y < 10 ? "few-results" : y < 30 ? "some-results" : "many-results";
    }), g = (y) => o("select", y), i = () => o("close"), { autocompletion: l, onTabSelect: u } = Rb(
      a,
      r
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: w } = Ob(a, r, n.suggestions), _ = () => {
      if (a.value && n.languages.includes(a.value)) {
        g(a.value);
        return;
      }
      if (w.value) {
        g(w.value);
        return;
      }
      if (r.value.length === 1) {
        g(r.value[0]);
        return;
      }
    };
    return ox(a, Tc(() => k(this, null, function* () {
      r.value = yield yd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), sx(() => k(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield yd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (y, S) => {
      const C = Hb("i18n");
      return Wt(), Kt("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        wa(y.$slots, "search", {}, () => [
          wn("div", qb, [
            kd(fe(Gl), {
              value: fe(l),
              "onUpdate:value": S[0] || (S[0] = (x) => jb(l) ? l.value = x : null),
              icon: fe(su),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            kd(fe(Gl), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": S[1] || (S[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: fe(su),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Wo(Xo(_, ["prevent"]), ["enter"]),
                Wo(Xo(fe(p), ["stop", "prevent"]), ["down"]),
                Wo(Xo(fe(m), ["stop", "prevent"]), ["up"]),
                Wo(Xo(i, ["prevent"]), ["esc"]),
                Wo(Xo(fe(u), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        wn("section", Gb, [
          e.suggestions.length && !a.value ? wa(y.$slots, "suggestions", { key: 0 }, () => [
            wn("section", Xb, [
              fa(wn("p", Wb, null, 512), [
                [C, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              wn("ul", Kb, [
                (Wt(!0), Kt(ur, null, cr(e.suggestions, (x) => (Wt(), Kt("li", {
                  key: x,
                  class: _a(["language ma-0", x === fe(w) ? "language--selected" : ""]),
                  lang: x,
                  dir: fe(z.getDir)(x),
                  "aria-selected": x === fe(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (T) => g(x),
                  textContent: bd(fe(z.getAutonym)(x))
                }, null, 10, Yb))), 128))
              ])
            ])
          ]) : dr("", !0),
          c.value.length ? wa(y.$slots, "search", { key: 1 }, () => [
            wn("section", Jb, [
              e.suggestions.length && !a.value ? fa((Wt(), Kt("p", Zb, null, 512)), [
                [C, void 0, "cx-sx-language-selector-all-languages"]
              ]) : dr("", !0),
              (Wt(!0), Kt(ur, null, cr(c.value, (x, T) => (Wt(), Kt("ul", {
                key: T,
                class: _a(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (Wt(!0), Kt(ur, null, cr(x, (V) => (Wt(), Kt("li", {
                  key: V,
                  class: _a(["language ma-0", V === fe(w) ? "language--selected" : ""]),
                  lang: V,
                  dir: fe(z.getDir)(V),
                  role: "option",
                  "aria-selected": V === fe(w) || null,
                  tabindex: "-1",
                  onClick: (F) => g(V),
                  textContent: bd(fe(z.getAutonym)(V))
                }, null, 10, Qb))), 128)),
                e.allOptionEnabled && !a.value ? fa((Wt(), Kt("li", {
                  key: 0,
                  class: _a(["language ma-0", fe(w) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": fe(w) === "all" || null,
                  tabindex: "-1",
                  onClick: S[2] || (S[2] = (V) => g("all"))
                }, null, 10, ex)), [
                  [C, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : dr("", !0)
              ], 2))), 128))
            ])
          ]) : wa(y.$slots, "noresults", { key: 2 }, () => [
            wn("section", tx, [
              fa(wn("h3", nx, null, 512), [
                [C, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const ax = window.Vue.resolveDirective, $d = window.Vue.withDirectives, Ko = window.Vue.openBlock, Yo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const _e = window.Vue.unref, Vd = window.Vue.toDisplayString, gt = window.Vue.createVNode, Ed = window.Vue.withModifiers, Nn = window.Vue.withCtx, ix = window.Vue.normalizeClass, rx = {
  key: 0,
  class: "mw-ui-autonym"
}, lx = ["lang", "dir", "textContent"], cx = {
  key: 0,
  class: "mw-ui-autonym"
}, ux = ["lang", "dir", "textContent"], Jo = window.Vue.computed, dx = window.Vue.inject, gx = window.Vue.ref, Ld = window.Codex.CdxButton, pr = window.Codex.CdxIcon, ci = {
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
    const n = e, o = t, s = dx("breakpoints"), a = Jo(() => s.value.mobile), r = gx(null), c = Jo(() => !!r.value), d = () => r.value = "source", g = () => r.value = "target", i = () => r.value = null, l = Jo(() => {
      if (!c.value)
        return;
      const w = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[w];
    }), u = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(_, h);
    }, p = Jo(
      () => n.selectedSourceLanguage === "all"
    ), m = Jo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const _ = ax("i18n");
      return Ko(), Yo("div", {
        class: ix(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        gt(_e(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Nn(() => [
            gt(_e(b), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Nn(() => [
                gt(_e(Ld), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Ed(d, ["stop"])
                }, {
                  default: Nn(() => [
                    p.value ? $d((Ko(), Yo("span", rx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ko(), Yo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: _e(z.getDir)(e.selectedSourceLanguage),
                      textContent: Vd(_e(z.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, lx)),
                    gt(_e(pr), {
                      size: "x-small",
                      icon: _e(rd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            gt(_e(b), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Nn(() => [
                gt(_e(pr), { icon: _e(kh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            gt(_e(b), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Nn(() => [
                gt(_e(Ld), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Ed(g, ["stop"])
                }, {
                  default: Nn(() => [
                    m.value ? $d((Ko(), Yo("span", cx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ko(), Yo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: _e(z.getDir)(e.selectedTargetLanguage),
                      textContent: Vd(_e(z.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, ux)),
                    gt(_e(pr), {
                      size: "x-small",
                      icon: _e(rd)
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
        gt(_e(rt), {
          value: c.value,
          "onUpdate:value": w[0] || (w[0] = (f) => c.value = f),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: i
        }, {
          default: Nn(() => [
            gt(_e(Uh), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: l.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: u,
              onClose: i
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const Dd = window.Vue.unref, px = window.Vue.createVNode, va = window.Vue.createElementVNode, Ad = window.Vue.toDisplayString, mx = window.Vue.openBlock, hx = window.Vue.createElementBlock, wx = { class: "cx-list-empty-placeholder pa-4" }, fx = { class: "cx-list-empty-placeholder__icon-container" }, _x = { class: "cx-list-empty-placeholder__icon" }, vx = ["textContent"], Sx = ["textContent"], yx = window.Codex.CdxIcon, Ih = {
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
    return (t, n) => (mx(), hx("div", wx, [
      va("div", fx, [
        va("div", _x, [
          px(Dd(yx), { icon: Dd(Eh) }, null, 8, ["icon"])
        ])
      ]),
      va("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Ad(e.title)
      }, null, 8, vx),
      va("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Ad(e.description)
      }, null, 8, Sx)
    ]));
  }
};
const Cx = window.Vue.toDisplayString, mr = window.Vue.normalizeClass, Td = window.Vue.createElementVNode, Et = window.Vue.openBlock, ao = window.Vue.createBlock, Sa = window.Vue.createCommentVNode, Bd = window.Vue.unref, Pd = window.Vue.renderList, Fd = window.Vue.Fragment, ya = window.Vue.createElementBlock, kx = window.Vue.createVNode, Md = window.Vue.withCtx, bx = ["textContent"], xx = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, $x = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ca = window.Vue.ref, pt = window.Vue.computed, Vx = window.Vue.inject, Ex = window.Vuex.useStore, Nd = {
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
    const t = e, n = Ca("all"), o = Ca("all"), s = Ex(), a = pt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = To(), c = Ca(!1), d = Ca(null), g = pt(
      () => t.translationStatus === "draft"
    ), i = pt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = pt(
      () => n.value === "all"
    ), u = pt(
      () => o.value === "all"
    ), p = pt(
      () => i.value.filter(
        (C) => (l.value || C.sourceLanguage === n.value) && (u.value || C.targetLanguage === o.value)
      ).sort((C, x) => C.lastUpdatedTimestamp < x.lastUpdatedTimestamp)
    ), m = pt(() => {
      let C = i.value.map(
        (x) => x.targetLanguage
      );
      return r.value && (C = C.filter(
        (x) => r.value.includes(x)
      )), [...new Set(C)];
    }), h = pt(() => {
      const C = i.value.map(
        (x) => x.sourceLanguage
      );
      return [...new Set(C)];
    }), w = (C) => {
      d.value = C, c.value = !0;
    }, _ = pt(() => t.activeStatus === t.translationStatus), f = Vx("breakpoints"), y = pt(() => f.value.mobile), S = pt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (C, x) => _.value ? (Et(), ao(Bd(He), {
      key: 0,
      class: mr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Md(() => [
        Td("div", {
          class: mr(["cx-translation-list__header", S.value])
        }, [
          Td("h3", {
            class: mr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Cx(C.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, bx),
          p.value.length ? (Et(), ao(ci, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": x[0] || (x[0] = (T) => n.value = T),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": x[1] || (x[1] = (T) => o.value = T),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Sa("", !0)
        ], 2)
      ]),
      default: Md(() => [
        a.value && !p.value.length ? (Et(), ao(Ih, {
          key: 0,
          title: C.$i18n("cx-sx-translation-list-empty-title"),
          description: C.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Sa("", !0),
        a.value ? Sa("", !0) : (Et(), ao(Bd(qe), { key: 1 })),
        g.value ? (Et(), ya("div", xx, [
          (Et(!0), ya(Fd, null, Pd(p.value, (T) => (Et(), ao(cb, {
            key: `${e.translationStatus}-${T.key}`,
            translation: T,
            onDeleteTranslation: (V) => w(T)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Et(), ya("div", $x, [
          (Et(!0), ya(Fd, null, Pd(p.value, (T) => (Et(), ao($b, {
            key: `${e.translationStatus}-${T.key}`,
            translation: T,
            onDeleteTranslation: (V) => w(T)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        kx(Pb, {
          modelValue: c.value,
          "onUpdate:modelValue": x[2] || (x[2] = (T) => c.value = T),
          translation: d.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Sa("", !0);
  }
}, Lx = window.Vue.computed, Dx = window.Vuex.useStore, Ke = () => {
  const e = Dx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B();
  return { sectionSuggestion: Lx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Ax = window.Vuex.useStore, Tx = window.Vue.computed, zt = () => {
  const e = Ax(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: Tx(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, Ud = window.Vue.computed, Bx = window.Vuex.useStore, Ye = () => {
  const e = Bx(), { sectionSuggestion: t } = Ke(), { currentTranslation: n } = zt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), r = Ud(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = Ud(() => {
    var g, i;
    const d = ((g = t.value) == null ? void 0 : g.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      d
    );
  });
  return { currentSourcePage: r, currentTargetPage: c };
}, Px = window.Vue.ref, Fx = window.Vue.watchEffect, Mx = (e, t) => k(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield ae.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((d) => d.level === "2").reduce((d, g, i, l) => {
    const u = i < l.length - 1 ? l[i + 1].byteoffset : s;
    return d[g.line] = u - g.byteoffset, d;
  }, {});
  return Object.keys(c).filter((d) => a[d]).reduce((d, g) => d + c[g], 0);
}), hr = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Nx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Ux = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Rh = () => {
  const { currentSourcePage: e } = Ye(), { sectionSuggestion: t } = Ke(), n = Px(null);
  return Fx(() => {
    if (t.value)
      Mx(
        e.value,
        t.value
      ).then((o) => {
        n.value = Ux(
          hr(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = hr(e.value.articleSize);
      n.value = Nx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: hr };
};
const wr = window.Vue.toDisplayString, fr = window.Vue.openBlock, Id = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ic = window.Vue.createElementVNode, Ix = window.Vue.unref, Rx = window.Vue.withCtx, zx = window.Vue.createBlock, Ox = {
  key: 0,
  class: "custom-info-chip__without-slash"
}, jx = {
  key: 1,
  class: "custom-info-chip__with-slash"
}, Hx = { class: "custom-info-chip__with-slash__first" }, qx = /* @__PURE__ */ ic("span", null, "/", -1), Gx = { class: "custom-info-chip__with-slash__second" }, Xx = window.Codex.CdxInfoChip, _r = window.Vue.computed, ui = {
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
    const t = e, n = _r(() => t.content.lastIndexOf("/")), o = _r(() => t.content.slice(0, n.value)), s = _r(() => t.content.slice(n.value + 1));
    return (a, r) => (fr(), zx(Ix(Xx), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: Rx(() => [
        n.value === -1 ? (fr(), Id("div", Ox, wr(e.content), 1)) : (fr(), Id("div", jx, [
          ic("span", Hx, wr(o.value), 1),
          qx,
          ic("span", Gx, wr(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const te = window.Vue.unref, mt = window.Vue.createVNode, fn = window.Vue.createElementVNode, ka = window.Vue.toDisplayString, Qe = window.Vue.withCtx, Wx = window.Vue.resolveDirective, vr = window.Vue.withDirectives, Un = window.Vue.openBlock, io = window.Vue.createBlock, ro = window.Vue.createCommentVNode, Rd = window.Vue.withModifiers, Kx = window.Vue.createElementBlock, Yx = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Jx = { class: "col shrink pe-4" }, Zx = ["lang", "dir", "textContent"], Qx = ["lang", "dir", "textContent"], e2 = ["textContent"], t2 = ["textContent"], Sr = window.Codex.CdxIcon, ht = window.Vue.computed, n2 = window.Vue.inject, o2 = window.Vuex.useStore, rc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Bo, Dn, xo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = o2(), { bytesToMinutes: o } = Rh(), s = ht(() => t.suggestion), a = ht(
      () => s.value.sourceTitle || s.value.title
    ), r = ht(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), c = ht(
      () => {
        var f;
        return (f = s.value) == null ? void 0 : f.missingSectionsCount;
      }
    ), d = ht(() => {
      var f;
      return (f = r.value) == null ? void 0 : f.description;
    }), g = ht(
      () => s.value instanceof Dn
    ), i = ht(
      () => s.value instanceof xo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: u } = ee(n), p = ht(
      () => i.value ? xh : $h
    ), m = n2("colors"), h = ht(
      () => i.value ? m.blue600 : "currentColor"
    ), w = ht(() => {
      var f;
      return o((f = r.value) == null ? void 0 : f.articleSize) < 15;
    }), _ = ht(
      () => s.value instanceof Im || s.value instanceof Rm
    );
    return (f, y) => {
      const S = Wx("i18n");
      return s.value ? (Un(), Kx("div", Yx, [
        fn("div", Jx, [
          mt(te(uc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        mt(te(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Qe(() => [
            mt(te(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Qe(() => [
                mt(te(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Qe(() => [
                    fn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: te(z.getDir)(s.value.sourceLanguage),
                      textContent: ka(a.value)
                    }, null, 8, Zx)
                  ]),
                  _: 1
                }),
                mt(te(b), { shrink: "" }, {
                  default: Qe(() => [
                    fn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: te(z.getDir)(s.value.sourceLanguage),
                      textContent: ka(d.value)
                    }, null, 8, Qx)
                  ]),
                  _: 1
                }),
                w.value && !g.value && !_.value ? (Un(), io(te(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Qe(() => [
                    vr(fn("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : ro("", !0),
                g.value ? (Un(), io(te(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Qe(() => [
                    vr(fn("small", null, null, 512), [
                      [S, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (Un(), io(te(b), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Qe(() => [
                    mt(te(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Qe(() => [
                        mt(te(b), { grow: "" }, {
                          default: Qe(() => [
                            fn("small", {
                              textContent: ka(te(l))
                            }, null, 8, e2),
                            mt(te(Sr), {
                              icon: te(kh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            fn("small", {
                              textContent: ka(te(u))
                            }, null, 8, t2)
                          ]),
                          _: 1
                        }),
                        c.value ? (Un(), io(te(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Qe(() => [
                            vr(fn("small", null, null, 512), [
                              [S, [
                                c.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : ro("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : ro("", !0),
                _.value ? (Un(), io(te(b), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: Qe(() => [
                    mt(ui, {
                      icon: te(Ns),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : ro("", !0)
              ]),
              _: 1
            }),
            mt(te(b), { shrink: "" }, {
              default: Qe(() => [
                i.value ? ro("", !0) : (Un(), io(te(Sr), {
                  key: 0,
                  icon: te(Mo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = Rd((C) => f.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                mt(te(Sr), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: y[1] || (y[1] = Rd((C) => f.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : ro("", !0);
    };
  }
}, s2 = "suggestion_filter_topic_area", a2 = "suggestion_filter_search_result_seed", i2 = "suggestion_filter_collections", r2 = "suggestion_filter_previous_edits", l2 = "suggestion_filter_popular_articles", zh = (e) => {
  if (e.type === Ge)
    return s2;
  if (e.type === at)
    return a2;
  if (e.id === me || e.type === me)
    return i2;
  if (e.id === $t)
    return r2;
  if (e.id === Rt)
    return l2;
}, lc = (e) => {
  if (e.type === Ge || e.type === me || e.type === at)
    return e.id;
  if (e.id === me)
    return "all-collections";
}, c2 = window.Vue.computed, zd = window.Vue.ref, Od = window.Vue.watch, Oh = (e, t) => {
  const o = zd([]), s = zd(!1), a = c2(
    () => o.value.slice(0, 4)
  ), r = Tc(() => k(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield Fo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), c = () => {
    s.value = !0, o.value = [], r();
  };
  return Od(t, c), Od(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, yr = window.Vue.ref, jd = window.Vue.watch, u2 = mw.loader.require("ext.cx.articletopics"), d2 = u2.flatMap((e) => e.topics), g2 = () => {
  const e = yr(""), t = yr(!1), n = yr({ topics: [], areas: [] }), o = de(), { pageCollections: s } = Sc(), { sourceLanguageURLParameter: a } = B(), r = (g) => (g = g.toLowerCase(), d2.filter(
    (i) => i.label.toLowerCase().includes(g)
  )), c = (g) => (g = g.toLowerCase(), s.value.filter(
    (i) => i.name.toLowerCase().includes(g)
  )), { searchResultsSlice: d } = Oh(a, e);
  return jd(d, () => {
    n.value.topics = d.value.map((g) => {
      var i;
      return {
        label: g.title,
        value: g.title,
        description: g.description,
        thumbnail: {
          url: (i = g.thumbnail) == null ? void 0 : i.source
        }
      };
    });
  }), jd(e, () => k(void 0, null, function* () {
    t.value = !0, n.value.areas = [
      ...c(e.value).map((g) => ({
        label: g.name,
        value: g.name,
        description: g.description,
        icon: Ns,
        filterType: me,
        filterId: g.name
      })),
      ...r(e.value).map((g) => ({
        label: g.label,
        value: g.label,
        description: o.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: Ns,
        filterType: Ge,
        filterId: g.topicId
      }))
    ], t.value = !1;
  })), { searchInput: e, searchLoading: t, searchResults: n };
};
const ne = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.withCtx, p2 = window.Vue.resolveDirective, Lt = window.Vue.createElementVNode, Zo = window.Vue.withDirectives, Hd = window.Vue.toDisplayString, m2 = window.Vue.createTextVNode, h2 = window.Vue.vShow, w2 = window.Vue.isRef, qd = window.Vue.renderList, Gd = window.Vue.Fragment, Yt = window.Vue.openBlock, Rn = window.Vue.createElementBlock, f2 = window.Vue.normalizeClass, Xd = window.Vue.createBlock, Wd = window.Vue.createCommentVNode, _2 = { class: "sx-suggestions-filters" }, v2 = { class: "mb-0" }, S2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, y2 = { class: "mb-3" }, C2 = { class: "px-4 pb-4 pt-7" }, k2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, b2 = { class: "sx-suggestions-filters__group-label mb-3" }, x2 = { class: "sx-suggestions-filters__group-filters mb-3" }, $2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, V2 = { key: 0 }, E2 = { key: 1 }, Cr = window.Vue.ref, Kd = window.Vue.computed, L2 = window.Vue.inject, Yd = window.Codex.CdxButton, D2 = window.Codex.CdxIcon, A2 = window.Codex.CdxTextInput, Jd = window.Codex.CdxMenu, T2 = {
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
      [$t]: Dh,
      [Rt]: Vh,
      [me]: Ns,
      [Ge]: null,
      [at]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r, findSelectedFilter: c } = yc(), d = We(), g = () => {
      m(), n("update:modelValue", !1);
    }, i = () => {
      d({ event_type: "suggestion_filters_close" }), g();
    }, l = () => {
      p.value && (d({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: lc(
          p.value
        )
      }), r(p.value)), g();
    }, u = Cr(!1), p = Cr(null), m = () => {
      p.value = null;
    }, h = (I) => {
      const M = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: zh(I),
        event_context: lc(I)
      };
      d(M), p.value = I, u.value = !0;
    }, w = (I) => p.value ? p.value.id === I.id && p.value.type === I.type : a(I), _ = L2("breakpoints"), f = Kd(() => _.value.mobile), { getFilterProvider: y } = Cc(), { searchInput: S, searchResults: C } = g2(), x = Kd(
      () => p.value || c()
    ), T = Cr(null), V = (I) => {
      h({
        type: at,
        id: I.label,
        label: I.label
      }), S.value = "";
    }, F = (I) => {
      h({
        type: I.filterType,
        id: I.filterId,
        label: I.label
      }), S.value = "";
    };
    return (I, M) => {
      const N = p2("i18n");
      return Yt(), Xd(ne(rt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: f.value,
        header: !1
      }, {
        default: In(() => [
          Lt("section", _2, [
            wt(ne(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: In(() => [
                wt(ne(b), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: In(() => [
                    wt(ne(Yd), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": I.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: i
                    }, {
                      default: In(() => [
                        wt(ne(D2), { icon: ne(Mo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                wt(ne(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: In(() => [
                    Zo(Lt("h5", v2, null, 512), [
                      [N, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                wt(ne(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: In(() => [
                    Zo(wt(ne(Yd), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: l
                    }, {
                      default: In(() => [
                        m2(Hd(I.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [h2, u.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Lt("div", S2, [
              Zo(Lt("h5", y2, null, 512), [
                [N, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Lt("div", null, [
                wt(ui, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: x.value.label,
                  icon: o[ne(y)(x.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Lt("div", C2, [
              wt(ne(A2), {
                modelValue: ne(S),
                "onUpdate:modelValue": M[0] || (M[0] = (U) => w2(S) ? S.value = U : null),
                placeholder: I.$i18n("cx-sx-suggestions-filter-search-input-placeholder"),
                "input-type": "search",
                "start-icon": ne(xk),
                clearable: !!ne(S)
              }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
            ]),
            ne(S) ? (Yt(), Rn("div", $2, [
              ne(C).topics.length ? (Yt(), Rn("div", V2, [
                Zo(Lt("h5", null, null, 512), [
                  [N, void 0, "cx-sx-suggestions-filter-search-results-topics-label"]
                ]),
                wt(ne(Jd), {
                  selected: T.value,
                  "onUpdate:selected": M[1] || (M[1] = (U) => T.value = U),
                  expanded: !0,
                  "menu-items": ne(C).topics,
                  "show-thumbnail": "",
                  onMenuItemClick: V
                }, null, 8, ["selected", "menu-items"])
              ])) : Wd("", !0),
              ne(C).areas.length ? (Yt(), Rn("div", E2, [
                Zo(Lt("h5", null, null, 512), [
                  [N, void 0, "cx-sx-suggestions-filter-search-results-areas-label"]
                ]),
                wt(ne(Jd), {
                  selected: T.value,
                  "onUpdate:selected": M[2] || (M[2] = (U) => T.value = U),
                  expanded: !0,
                  "menu-items": ne(C).areas,
                  onMenuItemClick: F
                }, null, 8, ["selected", "menu-items"])
              ])) : Wd("", !0)
            ])) : (Yt(), Rn("div", k2, [
              (Yt(!0), Rn(Gd, null, qd(ne(s), (U) => (Yt(), Rn("div", {
                key: U.id,
                class: "sx-suggestions-filters__group"
              }, [
                Lt("div", b2, Hd(U.label), 1),
                Lt("div", x2, [
                  (Yt(!0), Rn(Gd, null, qd(U.filters, (ie) => (Yt(), Xd(ui, {
                    key: ie.id,
                    class: f2(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                      "sx-suggestions-filters__filter--active": w(ie)
                    }]),
                    icon: o[ne(y)(ie)],
                    content: ie.label,
                    onClick: (J) => h(ie)
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
const kr = window.Vue.unref, ba = window.Vue.openBlock, Zd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const B2 = window.Vue.renderList, P2 = window.Vue.Fragment, Qd = window.Vue.createElementBlock, F2 = window.Vue.normalizeClass, M2 = window.Vue.createVNode, N2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, eg = window.Vue.ref, U2 = window.Vue.computed, tg = window.Vue.watch, I2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = de(), n = We(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r
    } = yc(), c = eg(!1), d = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), c.value = !0;
    }, g = (h) => {
      const w = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: zh(h),
        event_context: lc(h)
      };
      n(w), s(h);
    }, i = {
      [$t]: Dh,
      [Rt]: Vh,
      [me]: Ns,
      [Ge]: null
    }, { getFilterProvider: l } = Cc(), u = (h) => ({
      id: h.id,
      type: h.type,
      icon: i[l(h)],
      label: h.label,
      action: g
    }), p = eg(o());
    tg(c, (h) => {
      h || (p.value = o());
    }), tg(r, (h) => {
      h || (p.value = o());
    });
    const m = U2(() => [
      ...p.value.map(u),
      {
        id: "more",
        icon: Ec,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: d
      }
    ]);
    return (h, w) => kr(r) ? (ba(), Zd(kr(qe), { key: 0 })) : (ba(), Qd("div", N2, [
      (ba(!0), Qd(P2, null, B2(m.value, (_) => (ba(), Zd(ui, {
        key: _.label,
        class: F2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": kr(a)(_) }]),
        icon: _.icon,
        content: _.label,
        onClick: (f) => _.action(_)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      M2(T2, {
        modelValue: c.value,
        "onUpdate:modelValue": w[0] || (w[0] = (_) => c.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, R2 = window.Vue.computed, z2 = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = To(), n = R2(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, lo = window.Vue.computed, ng = window.Vue.ref, O2 = window.Vue.watch, j2 = window.Vuex.useStore, H2 = () => {
  const e = j2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = wc(), r = We(), c = lo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), d = lo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = ng(0), i = ng(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, u = 4, p = lo(
    () => a(g.value)
  ), m = lo(
    () => s(i.value)
  ), h = () => {
    C(), F(), x(), I();
  }, {
    fetchNextSectionSuggestionsSlice: w,
    fetchNextPageSuggestionsSlice: _
  } = kc(), f = (M) => M.length === l, y = lo(
    () => f(m.value)
  ), S = lo(
    () => f(p.value)
  ), C = () => {
    const M = (g.value + 1) % u, N = f(
      a(M)
    );
    (!S.value || !N) && w();
  }, x = () => {
    const M = (i.value + 1) % u, N = f(
      s(M)
    );
    (!y.value || !N) && _();
  }, T = (M) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", M), C();
  }, V = (M) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", M), x();
  }, F = () => g.value = (g.value + 1) % u, I = () => i.value = (i.value + 1) % u;
  return O2(
    o,
    () => {
      i.value = 0, x(), g.value = 0, C();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: V,
    discardSectionSuggestion: T,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: d,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, q2 = window.Vuex.useStore, Bc = () => {
  const e = q2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = kc(), o = (g, i, l) => e.state.suggestions.pageSuggestions.find(
    (u) => u.sourceLanguage === g && u.targetLanguage === i && u.sourceTitle === l
  ), s = (g) => k(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: l, targetLanguage: u } = g;
    yield ae.markFavorite(i, l, u);
    const p = new xo({
      title: i,
      sourceLanguage: l,
      targetLanguage: u
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
    markFavoriteSuggestion: (g, i, l) => k(void 0, null, function* () {
      const u = o(
        i,
        l,
        g
      );
      u && (e.commit(
        "suggestions/removePageSuggestionFromList",
        u
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, l, g);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield ae.markFavorite(
        g,
        i,
        l
      );
      const m = new xo({
        title: g,
        sourceLanguage: i,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), ae.unmarkFavorite(g))
  };
}, G2 = "suggestion_no_seed", X2 = "suggestion_recent_edit", W2 = "suggestion_topic_area", K2 = "suggestion_search_result_seed", Y2 = "suggestion_featured", J2 = "suggestion_collections", Z2 = () => {
  const { currentSuggestionFilters: e } = B(), { defaultSeedsFetched: t } = Hm();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === $t)
      return t.value ? G2 : X2;
    if (n === Ge)
      return W2;
    if (n === at)
      return K2;
    if (o === Rt)
      return Y2;
    if (o === me || n === me)
      return J2;
    throw new Error("Event source cannot be empty");
  };
};
const og = window.Vue.normalizeClass, Q2 = window.Vue.resolveDirective, Qo = window.Vue.createElementVNode, xa = window.Vue.withDirectives, le = window.Vue.unref, Ue = window.Vue.openBlock, Dt = window.Vue.createBlock, _n = window.Vue.createCommentVNode, br = window.Vue.createVNode, es = window.Vue.withCtx, sg = window.Vue.renderList, ag = window.Vue.Fragment, xr = window.Vue.createElementBlock, e8 = window.Vue.toDisplayString, t8 = window.Vue.createTextVNode, n8 = window.Vue.vShow, o8 = { class: "cx-suggestion-list" }, s8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, a8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, i8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, At = window.Vue.computed, r8 = window.Vue.inject, l8 = window.Vue.ref, c8 = window.Codex.CdxButton, u8 = window.Codex.CdxIcon, d8 = window.Vuex.useStore, g8 = {
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
    } = B(), { supportedLanguageCodes: s, availableTargetLanguages: a } = z2(), r = Wm(), c = (Z) => r(Z, n.value), d = (Z) => r(t.value, Z), g = Z2(), i = Xs(), l = (Z) => {
      i(
        Z.sourceTitle,
        Z.sourceLanguage,
        Z.targetLanguage,
        g(),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: _,
      sectionSuggestionsLoading: f,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = H2(), C = l8(null), x = We(), T = () => {
      x({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), w(), C.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: V, markFavoritePageSuggestion: F } = Bc(), I = r8("breakpoints"), M = At(() => I.value.mobile), N = At(
      () => M.value ? null : "pb-2 flex justify-between items-center"
    ), U = d8(), ie = At(
      () => U.state.suggestions.isPageSuggestionsFetchPending
    ), J = At(
      () => U.state.suggestions.isSectionSuggestionsFetchPending
    ), Ot = At(
      () => ie.value || _.value && !y.value
    ), lt = At(
      () => J.value || f.value && !S.value
    ), Me = At(
      () => ie.value || _.value || u.value.length > 0
    ), dn = At(
      () => J.value || f.value || p.value.length > 0
    ), Vt = At(
      () => !Me.value && !dn.value
    ), ct = At(
      () => !f.value && !_.value && !ie.value && !J.value && !Vt.value
    );
    return (Z, jt) => {
      const Ne = Q2("i18n");
      return xa((Ue(), xr("div", o8, [
        br(le(He), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: es(() => [
            Qo("div", {
              class: og(["cx-suggestion-list__header-card__header px-4", N.value])
            }, [
              xa(Qo("h3", {
                class: og(["mw-ui-card__title mb-0", { "py-3": M.value }])
              }, null, 2), [
                [Ne, void 0, "cx-suggestionlist-title"]
              ]),
              M.value ? _n("", !0) : (Ue(), Dt(ci, {
                key: 0,
                "source-languages": le(s),
                "target-languages": le(a),
                "selected-source-language": le(t),
                "selected-target-language": le(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": d
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            br(I2)
          ]),
          default: es(() => [
            M.value ? (Ue(), Dt(ci, {
              key: 0,
              "source-languages": le(s),
              "target-languages": le(a),
              "selected-source-language": le(t),
              "selected-target-language": le(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": d
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : _n("", !0)
          ]),
          _: 1
        }),
        Me.value ? (Ue(), Dt(le(He), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: C,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: es(() => [
            xa(Qo("h5", s8, null, 512), [
              [Ne, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ue(!0), xr(ag, null, sg(le(u), (he, xe) => (Ue(), Dt(rc, {
              key: `page-suggestion-${xe}`,
              suggestion: he,
              onClose: (v) => le(m)(he),
              onClick: (v) => l(he),
              onBookmark: (v) => le(F)(he)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Ot.value ? (Ue(), Dt(le(qe), { key: 0 })) : _n("", !0)
          ]),
          _: 1
        }, 512)) : _n("", !0),
        dn.value ? (Ue(), Dt(le(He), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: es(() => [
            xa(Qo("h5", a8, null, 512), [
              [Ne, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ue(!0), xr(ag, null, sg(le(p), (he, xe) => (Ue(), Dt(rc, {
              key: `section-suggestion-${xe}`,
              class: "ma-0",
              suggestion: he,
              onClose: (v) => le(h)(he),
              onClick: (v) => l(he),
              onBookmark: (v) => le(V)(he)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            lt.value ? (Ue(), Dt(le(qe), { key: 0 })) : _n("", !0)
          ]),
          _: 1
        })) : _n("", !0),
        Vt.value ? (Ue(), Dt(Ih, {
          key: 2,
          title: Z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : _n("", !0),
        Qo("div", i8, [
          ct.value ? (Ue(), Dt(le(c8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: T
          }, {
            default: es(() => [
              br(le(u8), {
                class: "me-1",
                icon: le(Lh)
              }, null, 8, ["icon"]),
              t8(" " + e8(Z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : _n("", !0)
        ])
      ], 512)), [
        [n8, e.active]
      ]);
    };
  }
}, p8 = window.Vue.resolveDirective, m8 = window.Vue.createElementVNode, h8 = window.Vue.withDirectives, w8 = window.Vue.renderList, f8 = window.Vue.Fragment, $r = window.Vue.openBlock, _8 = window.Vue.createElementBlock, ig = window.Vue.unref, rg = window.Vue.createBlock, lg = window.Vue.withCtx, v8 = window.Vue.createCommentVNode, S8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, y8 = window.Vue.computed, C8 = window.Vuex.useStore, k8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = C8(), n = y8(() => t.state.suggestions.favorites || []), o = Xs(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Bc();
    return (r, c) => {
      const d = p8("i18n");
      return n.value.length ? ($r(), rg(ig(He), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: lg(() => [
          h8(m8("h3", S8, null, 512), [
            [d, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: lg(() => [
          ($r(!0), _8(f8, null, w8(n.value, (g, i) => ($r(), rg(rc, {
            key: `favorite-${i}`,
            suggestion: g,
            onClick: (l) => s(g),
            onBookmark: (l) => ig(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : v8("", !0);
    };
  }
};
const b8 = window.Vue.resolveDirective, ts = window.Vue.createElementVNode, x8 = window.Vue.withDirectives, $8 = window.Vue.renderList, V8 = window.Vue.Fragment, cg = window.Vue.openBlock, ug = window.Vue.createElementBlock, E8 = window.Vue.unref, L8 = window.Vue.createVNode, D8 = window.Vue.toDisplayString, A8 = { class: "cx-help-panel pa-4" }, T8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, B8 = ["href"], P8 = ["textContent"], F8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = de(), n = [
      {
        icon: s0,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: If,
        label: t.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: a0,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ];
    return (o, s) => {
      const a = b8("i18n");
      return cg(), ug("div", A8, [
        x8(ts("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        ts("ul", T8, [
          (cg(), ug(V8, null, $8(n, (r, c) => ts("li", {
            key: c,
            class: "mt-4"
          }, [
            ts("a", {
              href: r.href,
              target: "_blank"
            }, [
              L8(E8(Le), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              ts("span", {
                textContent: D8(r.label)
              }, null, 8, P8)
            ], 8, B8)
          ])), 64))
        ])
      ]);
    };
  }
};
const M8 = window.Vue.resolveDirective, co = window.Vue.createElementVNode, Vr = window.Vue.withDirectives, dg = window.Vue.toDisplayString, Er = window.Vue.unref, Lr = window.Vue.withCtx, Dr = window.Vue.createVNode, N8 = window.Vue.openBlock, U8 = window.Vue.createElementBlock, I8 = { class: "cx-stats-panel pa-4" }, R8 = ["textContent"], z8 = { class: "cx-stats-panel__monthly-stats-label" }, O8 = ["textContent"], j8 = { class: "cx-stats-panel__total-stats-label" }, H8 = window.Vue.ref, gg = window.Vue.computed, q8 = window.Vue.watch, G8 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = gg(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.count) || 0;
    }), s = gg(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.delta) || 0;
    }), a = H8(null);
    return q8(
      () => t.stats,
      () => {
        const r = t.stats, c = a.value.getContext("2d"), d = Object.keys(t.stats || {}).sort(), g = d.reduce(
          (S, C) => Math.max(S, r[C].delta),
          0
        ), i = d.map((S) => r[S].delta), l = a.value.getBoundingClientRect().width, u = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = u;
        const p = 4, m = 6, h = 50, w = (h - p) / g;
        let _ = p;
        const f = Math.floor(
          (l - p) / (m + p)
        ), y = i.slice(
          Math.max(i.length - f, 0)
        );
        y.forEach((S, C) => {
          C === y.length - 1 && (c.fillStyle = "#36c");
          const x = h - S * w;
          c.fillRect(_, x, m, S * w), _ += m + p;
        });
      }
    ), (r, c) => {
      const d = M8("i18n");
      return N8(), U8("div", I8, [
        Vr(co("h5", null, null, 512), [
          [d, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Dr(Er(P), null, {
          default: Lr(() => [
            Dr(Er(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: Lr(() => [
                co("h3", {
                  textContent: dg(s.value)
                }, null, 8, R8),
                Vr(co("h5", z8, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Dr(Er(b), { class: "cx-stats-panel__total-stats" }, {
              default: Lr(() => [
                co("h3", {
                  textContent: dg(o.value)
                }, null, 8, O8),
                Vr(co("h5", j8, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        co("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, jh = () => {
  const e = We();
  return (n) => {
    e({
      event_type: "dashboard_tab_select",
      event_source: {
        draft: "dashboard_inprogress_tab",
        published: "dashboard_published_tab",
        suggestions: "dashboard_suggestions_tab"
      }[n]
    });
  };
};
const X8 = window.Vue.renderSlot, W8 = window.Vue.unref, K8 = window.Vue.createVNode, Y8 = window.Vue.createElementVNode, J8 = window.Vue.openBlock, Z8 = window.Vue.createElementBlock, Q8 = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, e$ = { class: "col-12 ma-0 pa-0" }, t$ = {
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
    const n = t, o = jh(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (J8(), Z8("footer", Q8, [
      Y8("div", e$, [
        X8(a.$slots, "default", {}, () => [
          K8(W8(Us), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, n$ = window.Vuex.useStore, ki = () => {
  const e = n$(), t = (o) => k(void 0, null, function* () {
    let s = yield it.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), s.forEach(
      (r) => e.commit("translator/addTranslation", r)
    );
    const a = {};
    for (const r of s) {
      const c = r.sourceLanguage;
      a[c] = a[c] || [], a[c].push(r);
    }
    e.commit("translator/setTranslationsLoaded", { status: o, value: !0 });
    for (const [r, c] of Object.entries(a))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: r,
        titles: c.map((d) => d.sourceTitle)
      }), c.forEach((d) => {
        const { targetLanguage: g, targetTitle: i } = d, l = !!e.getters["mediawiki/getPage"](
          g,
          i
        );
        i && !l && e.commit(
          "mediawiki/addPage",
          new Po({ title: i, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, o$ = window.Vuex.useStore, s$ = () => {
  const e = o$();
  return () => k(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield ae.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), ae.fetchSectionSuggestion(
        o.sourceLanguage,
        o.title,
        o.targetLanguage
      ).then(
        (s) => o.missingSectionsCount = (s == null ? void 0 : s.missingSectionsCount) || 0
      ), n[o.sourceLanguage] = [
        ...n[o.sourceLanguage] || [],
        o
      ];
    for (const [o, s] of Object.entries(
      n
    ))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: o,
        titles: s.map((a) => a.title)
      });
  });
}, a$ = window.Vuex.useStore, Hh = () => {
  const e = a$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: r } = $m(), { previousRoute: c } = ee(e), d = We(), g = () => {
    const u = {
      ulsmissinglanguages: "content_language_selector",
      mflanguagesearcher: "content_language_selector",
      mfrecenttranslation: "recent_translation",
      mfrecentedit: "recent_edit",
      mffrequentlanguages: "frequent_languages",
      newbytranslationmobile: "invite_new_article_creation",
      specialcontribute: "contributions_page",
      publishingfollowup: "followup_after_publishing",
      ulsaddlanguages: "language_selector_options"
    }, p = t("campaign");
    return u[p];
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
    const u = i(), p = {
      event_type: "dashboard_open",
      event_source: u,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return u === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), d(p);
  }, getEventSource: i };
}, i$ = window.Vue.watch, r$ = () => {
  const { fetchAllTranslations: e } = ki(), t = bc(), n = s$(), { fetchPageCollections: o } = Sc(), { logDashboardOpenEvent: s } = Hh(), { applicationLanguagesInitialized: a } = Km();
  return () => k(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (r) {
      mw.log.error("[CX] Error while fetching favorite suggestions", r);
    }
    yield e(), i$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, pg = window.Vue.computed, l$ = window.Vue.ref, c$ = window.Vue.watch, u$ = window.Vue.watchEffect, d$ = window.Vuex.useStore, g$ = ["suggestions", "draft", "published"], p$ = () => {
  const e = d$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), o = l$(null);
  if (g$.includes(t.value))
    o.value = t.value;
  else {
    const s = pg(
      () => e.state.translator.translationsLoaded.draft
    ), a = pg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", c$(s, (r) => {
      r && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return u$(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, m$ = window.Vue.computed, h$ = () => {
  const e = de();
  return m$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Of,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: gi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: zf,
        type: "text"
      }
    }
  ]);
};
const oe = window.Vue.unref, Se = window.Vue.createVNode, w$ = window.Vue.toDisplayString, f$ = window.Vue.createTextVNode, ft = window.Vue.withCtx, $a = window.Vue.openBlock, Ar = window.Vue.createBlock, Tr = window.Vue.createCommentVNode, _$ = window.Vue.vShow, v$ = window.Vue.withDirectives, S$ = window.Vue.isRef, y$ = window.Vue.createElementBlock, mg = window.Vue.computed, C$ = window.Vuex.useStore, k$ = window.Codex.CdxButton, b$ = window.Codex.CdxIcon, x$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Ce(), n = We(), { isDesktop: o } = Pn(), s = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    r$()();
    const r = C$();
    r.dispatch("translator/fetchTranslatorStats");
    const c = mg(() => r.state.translator.translatorStats), d = mg(() => r.state.application.bannerDismissed), g = () => {
      r.commit("application/dismissBanner");
    }, i = p$(), l = h$(), u = jh(), p = (m) => {
      u(m), i.value = m;
    };
    return (m, h) => ($a(), y$("div", null, [
      Se(oe(P), { class: "ma-0 py-4" }, {
        default: ft(() => [
          Se(oe(k$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: s
          }, {
            default: ft(() => [
              Se(oe(b$), {
                class: "me-1",
                icon: oe(oc)
              }, null, 8, ["icon"]),
              f$(" " + w$(m.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      oe(o) && !d.value ? ($a(), Ar(oe(P), {
        key: 0,
        class: "ma-0",
        align: "start"
      }, {
        default: ft(() => [
          Se(oe(b), { class: "col-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2" }, {
            default: ft(() => [
              Se(Ik, {
                class: "mb-4",
                onUserDismissed: h[0] || (h[0] = (w) => g())
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : Tr("", !0),
      Se(oe(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: ft(() => [
          m.$mwui.breakpoint.tabletAndUp ? ($a(), Ar(oe(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: ft(() => [
              Se(oe(Us), {
                id: "dashboard-list-selector--desktop",
                items: oe(l),
                active: oe(i),
                onSelect: p
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Tr("", !0),
          Se(oe(b), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: ft(() => [
              v$(Se(k8, null, null, 512), [
                [_$, oe(i) === "suggestions"]
              ]),
              Se(g8, {
                active: oe(i) === "suggestions"
              }, null, 8, ["active"]),
              Se(Nd, {
                "translation-status": "draft",
                "active-status": oe(i)
              }, null, 8, ["active-status"]),
              Se(Nd, {
                "translation-status": "published",
                "active-status": oe(i)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Se(oe(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: ft(() => [
              Se(oe(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: ft(() => [
                  Se(oe(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: ft(() => [
                      Se(G8, { stats: c.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Se(oe(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: ft(() => [
                      Se(F8)
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
      m.$mwui.breakpoint.mobile ? ($a(), Ar(t$, {
        key: 1,
        active: oe(i),
        "onUpdate:active": h[1] || (h[1] = (w) => S$(i) ? i.value = w : null),
        items: oe(l)
      }, null, 8, ["active", "items"])) : Tr("", !0)
    ]));
  }
}, $$ = {
  name: "DashboardView",
  components: { CxDashboard: x$ }
}, V$ = window.Vue.resolveComponent, E$ = window.Vue.createVNode, L$ = window.Vue.openBlock, D$ = window.Vue.createElementBlock, A$ = { class: "cx-translation-dashboard" };
function T$(e, t, n, o, s, a) {
  const r = V$("cx-dashboard");
  return L$(), D$("main", A$, [
    E$(r, { class: "mb-4 pb-12" })
  ]);
}
const hg = /* @__PURE__ */ Y($$, [["render", T$]]), uo = window.Vue.computed, B$ = () => {
  const { sectionSuggestion: e } = Ke(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = zt(), o = uo(
    () => {
      var u, p, m;
      return (m = (p = (u = e.value) == null ? void 0 : u.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = uo(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.missingSectionsCount;
    }
  ), a = uo(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: c } = un(), d = uo(() => r ? q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), g = (u) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : u ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = uo(() => {
    let u;
    return s.value > 1 ? u = [
      "cx-sx-existing-translation-additional-info",
      `"${o.value}"`,
      s.value - 1
    ] : s.value === 1 && a.value > 0 ? u = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${o.value}"`
    ] : s.value === 1 && a.value === 0 ? u = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${o.value}"`
    ] : a.value > 0 ? u = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ] : u = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ], u;
  }), l = uo(
    () => {
      var u;
      return !r.value || ((u = e.value) == null ? void 0 : u.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: i,
    getActionButtonLabel: g,
    isProgressiveButton: l,
    targetArticlePath: d
  };
};
function P$(e) {
  return e.$el = $(e), e;
}
function F$(e, t, n, o) {
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
function M$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function N$(e, t) {
  return k(this, null, function* () {
    yield Pc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = P$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const U$ = window.Vue.computed, I$ = window.Vue.onMounted, R$ = window.Vue.ref;
function z$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const O$ = {
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
    const n = R$(null);
    let o = null;
    const s = U$(() => o.getHtml()), a = () => {
      o.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, d = {
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
    return I$(() => k(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = z$;
      const i = yield N$(d, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = F$(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = M$, o.focus();
    })), { sxeditor: n };
  }
}, cc = window.Vue.createElementVNode, j$ = window.Vue.openBlock, H$ = window.Vue.createElementBlock, q$ = ["lang", "dir"], G$ = /* @__PURE__ */ cc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ cc("div", { class: "toolbar" })
], -1), X$ = ["lang", "dir"];
function W$(e, t, n, o, s, a) {
  return j$(), H$("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    G$,
    cc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, X$)
  ], 8, q$);
}
const K$ = /* @__PURE__ */ Y(O$, [["render", W$]]);
function Pc() {
  return mw.loader.using("mw.cx3.ve");
}
const Y$ = window.Vuex.useStore, qh = () => {
  const e = Y$();
  return (t, n) => k(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Pc(), new Promise((s) => {
      setTimeout(() => {
        const a = zm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, J$ = window.Vuex.useStore, Fc = () => {
  const e = J$();
  return (t, n, o, s = null) => k(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield Fo.fetchPageContent(
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
}, Z$ = window.Vuex.useStore, bi = () => {
  const e = Z$(), { currentSourcePage: t } = Ye(), n = qh(), o = Fc(), { isDesktop: s } = Pn(), {
    setSectionURLParam: a,
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: c,
    pageURLParameter: d
  } = B(), g = (u, p) => k(void 0, null, function* () {
    u() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      r.value,
      c.value,
      d.value
    ), s.value || (yield n(
      r.value,
      d.value
    )), e.commit("application/decreaseTranslationDataLoadingCounter")), p();
  });
  return {
    selectPageSectionByIndex: (u) => {
      const p = () => {
        var h;
        return (h = t.value.sections) == null ? void 0 : h[u];
      };
      return g(p, () => {
        const h = p();
        u === 0 ? h.originalTitle = t.value.title : a(h.originalTitle);
      });
    },
    selectPageSectionByTitle: (u) => g(() => t.value.getSectionByTitle(u), () => {
      a(u);
    })
  };
}, Q$ = (e, t, n, o) => k(void 0, null, function* () {
  var c, d, g;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((d = t.mt) == null ? void 0 : d.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, r = yield Qm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), e4 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, t4 = (e, t, n, o) => k(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return Q$(e, t, n, o);
  e4(e, t);
}), n4 = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const d = o.find(
          (i) => i.subSectionId === c.id
        );
        if (!d)
          continue;
        const g = t4(
          c,
          d,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, o4 = { restoreCorporaDraft: n4 }, Mc = () => (e, t, n, o = {}) => {
  q.setCXToken(e, t, n), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, ns = window.Vue.computed, s4 = window.Vuex.useStore, W = () => {
  const e = s4(), { currentSourcePage: t, currentTargetPage: n } = Ye(), { currentMTProvider: o } = ee(e), { sectionURLParameter: s } = B(), a = ns(() => {
    var i, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = ns(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), c = ns(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), d = ns(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = ns(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: d,
    targetPageTitleForPublishing: g
  };
}, a4 = window.Vuex.useStore, Nc = () => {
  const e = We(), t = a4(), n = Ce(), { currentSourcePage: o } = Ye(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), r = sS(), c = qh(), { isDesktop: d } = Pn(), g = Mc(), i = Fc(), { sourceSection: l } = W();
  return (u) => k(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: p,
      targetLanguage: m,
      sourceTitle: h,
      targetTitle: w,
      pageRevision: _,
      isLeadSectionTranslation: f
    } = u;
    if (d.value) {
      const C = {};
      f || (C.sourcesection = u.sourceSectionTitle), g(
        s.value,
        a.value,
        h,
        C
      );
      return;
    }
    q.unsetCXToken(
      p,
      m,
      h
    );
    const { setTranslationURLParams: y } = B();
    y(u), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== m) && r(u), t.dispatch("application/getCXServerToken"), e({
      event_type: "dashboard_translation_continue",
      translation_id: u.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: h,
      translation_source_section: u.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: w,
      translation_target_section: u.targetSectionTitle,
      translation_type: f ? "article" : "section"
    }), yield i(
      s.value,
      a.value,
      h,
      _
    ), yield c(s.value, h), u.restored || (yield it.fetchTranslationUnits(u.translationId).then(
      (C) => o4.restoreCorporaDraft(
        o.value,
        w,
        a,
        C
      )
    ).then(() => u.restored = !0));
    let S;
    f ? (l.value.originalTitle = h, S = w) : S = u.targetSectionTitle, l.value.translatedTitle = S, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, i4 = () => new URLSearchParams(location.search).get("force-quick-tutorial"), r4 = window.Vuex.useStore, Uc = () => {
  const { logDashboardTranslationStartEvent: e } = Ac(), t = Mc(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s,
    sectionURLParameter: a
  } = B(), { isDesktop: r } = Pn(), c = r4(), d = Ce(), { selectPageSectionByIndex: g } = bi();
  return () => {
    e(), r.value ? t(
      n.value,
      o.value,
      s.value,
      a.value ? { sourcesection: a.value } : {}
    ) : (a.value || g(0), i4() || !c.getters["translator/userHasSectionTranslations"] ? d.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : d.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  };
}, l4 = window.Vue.ref, c4 = () => {
  const e = Ce(), t = Uc(), { isDesktop: n } = Pn(), { sectionURLParameter: o } = B(), { targetPageExists: s } = un(), { selectPageSectionByTitle: a } = bi(), r = () => k(void 0, null, function* () {
    yield a(o.value), e.push({ name: "sx-content-comparator", query: { force: !0 } });
  }), c = Nc(), d = l4(!1), { currentTranslation: g } = zt();
  return {
    handlePrimaryButtonClick: () => {
      g.value ? g.value.isArticleTranslation && !n.value ? d.value = !0 : c(g.value) : o.value ? r() : s.value ? e.push({ name: "sx-section-selector" }) : t();
    },
    translationConfirmationDialogOn: d
  };
};
const u4 = window.Vue.resolveDirective, wg = window.Vue.createElementVNode, fg = window.Vue.withDirectives, d4 = window.Vue.unref, g4 = window.Vue.withCtx, p4 = window.Vue.openBlock, m4 = window.Vue.createBlock, h4 = {
  href: "",
  target: "_blank"
}, w4 = window.Codex.CdxDialog, f4 = {
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
    function d() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (g, i) => {
      const l = u4("i18n");
      return p4(), m4(d4(w4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": r,
        "default-action": c,
        "onUpdate:open": i[0] || (i[0] = (u) => s(u)),
        onPrimary: d,
        onDefault: i[1] || (i[1] = (u) => s(!1))
      }, {
        default: g4(() => [
          fg(wg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          fg(wg("a", h4, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ge = window.Vue.unref, _4 = window.Vue.resolveDirective, os = window.Vue.createElementVNode, _g = window.Vue.withDirectives, ss = window.Vue.toDisplayString, as = window.Vue.openBlock, Br = window.Vue.createElementBlock, Pr = window.Vue.createCommentVNode, et = window.Vue.createVNode, _t = window.Vue.withCtx, Fr = window.Vue.createTextVNode, v4 = window.Vue.withModifiers, vg = window.Vue.createBlock, S4 = window.Vue.Fragment, y4 = { class: "sx-translation-confirmer-body pb-4" }, C4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, k4 = ["textContent"], b4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, x4 = ["href"], $4 = ["textContent"], Va = window.Vue.computed, V4 = window.Vue.inject, Sg = window.Vue.ref, E4 = window.Vue.watchEffect, L4 = window.Vuex.useStore, Mr = window.Codex.CdxButton, D4 = window.Codex.CdxIcon, A4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Ce(), o = L4();
    V4("colors");
    const { sectionSuggestion: s } = Ke(), { targetLanguageAutonym: a } = ee(o), { sectionURLParameter: r } = B(), c = Uc(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: g } = c4(), i = Sg(!1), l = Sg(null), u = () => k(this, null, function* () {
      let N = !0;
      try {
        N = yield it.checkUnreviewedTranslations();
      } catch (U) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          U
        );
      }
      N !== !0 && (i.value = !0, l.value = N.targetUrl);
    }), p = () => k(this, null, function* () {
      yield u(), !i.value && c();
    }), m = () => k(this, null, function* () {
      yield u(), !i.value && d();
    }), h = t;
    E4(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: _,
      isProgressiveButton: f,
      targetArticlePath: y
    } = B$(), S = de(), C = Va(
      () => S.i18n(_(!!r.value))
    ), { isDesktop: x } = Pn(), T = Va(
      () => S.i18n(...w.value)
    ), V = () => k(this, null, function* () {
      yield u(), !i.value && n.push({ name: "sx-section-selector" });
    }), F = Va(() => {
      var N, U;
      return r.value && !!((U = (N = s.value) == null ? void 0 : N.sourceSections) != null && U.length);
    }), { targetPageExists: I } = un(), M = Va(() => !r.value && I.value && x.value);
    return (N, U) => {
      const ie = _4("i18n");
      return as(), Br(S4, null, [
        os("section", y4, [
          ge(r) ? (as(), Br("section", C4, [
            _g(os("h6", null, null, 512), [
              [ie, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            os("h5", {
              class: "ma-0",
              textContent: ss(ge(r))
            }, null, 8, k4)
          ])) : ge(I) ? (as(), Br("section", b4, [
            et(ge(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: _t(() => [
                _g(et(ge(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [ie, [ge(a)], "cx-sx-existing-translation-status"]
                ]),
                et(ge(b), { shrink: "" }, {
                  default: _t(() => [
                    os("a", {
                      href: ge(y),
                      target: "_blank"
                    }, [
                      et(ge(D4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ge(Lc)
                      }, null, 8, ["icon"])
                    ], 8, x4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            et(ge(P), { class: "ma-0" }, {
              default: _t(() => [
                et(ge(b), null, {
                  default: _t(() => [
                    os("span", {
                      textContent: ss(T.value)
                    }, null, 8, $4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Pr("", !0),
          et(ge(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: _t(() => [
              F.value ? (as(), vg(ge(b), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: _t(() => [
                  et(ge(Mr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: v4(V, ["stop"])
                  }, {
                    default: _t(() => [
                      Fr(ss(N.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Pr("", !0),
              M.value ? (as(), vg(ge(b), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: _t(() => [
                  et(ge(Mr), {
                    size: "large",
                    onClick: p
                  }, {
                    default: _t(() => [
                      Fr(ss(N.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Pr("", !0),
              et(ge(b), { shrink: "" }, {
                default: _t(() => [
                  et(ge(Mr), {
                    weight: "primary",
                    size: "large",
                    action: ge(f) ? "progressive" : "default",
                    onClick: m
                  }, {
                    default: _t(() => [
                      Fr(ss(C.value), 1)
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
        et(f4, {
          modelValue: i.value,
          "onUpdate:modelValue": U[0] || (U[0] = (J) => i.value = J),
          "target-url": l.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const yg = window.Vue.unref, T4 = window.Vue.openBlock, B4 = window.Vue.createBlock, Cg = window.Vue.computed, Gh = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = To(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = B(), { currentLanguageTitleGroup: a } = un(), r = Cg(
      () => {
        var l;
        return ((l = a.value) == null ? void 0 : l.titles.map((u) => u.lang)) || [];
      }
    ), c = Cg(
      () => n.value || t.value
    ), d = iS(), g = (l) => d(l, s.value), i = (l) => d(o.value, l);
    return (l, u) => (T4(), B4(ci, {
      class: "sx-article-language-selector",
      "source-languages": r.value,
      "target-languages": c.value,
      "selected-source-language": yg(o),
      "selected-target-language": yg(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": i
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const $e = window.Vue.unref, Nr = window.Vue.toDisplayString, Jt = window.Vue.createElementVNode, Tt = window.Vue.createVNode, go = window.Vue.withCtx, P4 = window.Vue.resolveDirective, F4 = window.Vue.withDirectives, M4 = window.Vue.normalizeClass, N4 = window.Vue.openBlock, U4 = window.Vue.createBlock, I4 = ["textContent"], R4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, z4 = ["textContent"], O4 = { class: "pe-3" }, j4 = ["textContent"], H4 = window.Codex.CdxButton, is = window.Codex.CdxIcon, Zt = window.Vue.computed, q4 = window.Vuex.useStore, G4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = q4(), n = de(), { currentSourcePage: o } = Ye(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = B(), c = Zt(() => t.state.suggestions.favorites || []), d = Zt(
      () => c.value.some(
        (x) => r.value === x.title && s.value === x.sourceLanguage && a.value === x.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: i } = Bc(), { translationSizeMessageArgs: l } = Rh(), u = () => g(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new xo({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Zt(
      () => d.value ? xh : $h
    ), h = Zt(
      () => d.value ? p : u
    ), w = Zt(
      () => q.getPageUrl(s.value || "", r.value || "")
    ), _ = Zt(() => {
      var x;
      return (x = o.value) == null ? void 0 : x.langLinksCount;
    }), f = (x) => {
      const T = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let V = 0; V < T.length; V++)
        if (x >= T[V].value)
          return (x / T[V].value).toFixed(1).replace(/\.0$/, "") + T[V].suffix;
      return x.toString();
    }, y = Zt(() => {
      var T;
      const x = Object.values(((T = o.value) == null ? void 0 : T.pageviews) || {}).reduce(
        (V, F) => V + F,
        0
      );
      return f(x);
    }), S = Zt(() => l.value ? n.i18n(...l.value) : ""), C = Zt(() => l.value ? l.value[2] < 15 : !1);
    return (x, T) => {
      const V = P4("i18n");
      return N4(), U4($e(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: go(() => [
          Tt($e(b), null, {
            default: go(() => [
              Tt($e(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: go(() => [
                  Tt($e(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: w.value,
                    target: "_blank"
                  }, {
                    default: go(() => [
                      Jt("h5", {
                        class: "ma-0 me-1",
                        textContent: Nr($e(r))
                      }, null, 8, I4),
                      Tt($e(is), {
                        size: "x-small",
                        icon: $e(Lc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Tt($e(b), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: go(() => [
                      Tt($e(H4), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": x.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: go(() => [
                          Tt($e(is), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Jt("div", R4, [
                Jt("div", null, [
                  Jt("span", null, [
                    Tt($e(is), {
                      icon: $e(Eh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Jt("span", {
                      class: "pe-3",
                      textContent: Nr(_.value)
                    }, null, 8, z4)
                  ]),
                  Jt("span", null, [
                    Tt($e(is), {
                      icon: $e(fk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    F4(Jt("span", O4, null, 512), [
                      [V, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Jt("span", {
                  class: M4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": C.value
                  }])
                }, [
                  Tt($e(is), {
                    icon: $e(vk),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Jt("span", {
                    textContent: Nr(S.value)
                  }, null, 8, j4)
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
}, X4 = window.Vuex.useStore;
let Ea = [];
const Xh = () => {
  const e = X4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ea.includes(o) ? Promise.resolve() : (Ea.push(o), Fo.fetchLanguageTitles(t, n).then((s) => {
      Ea = Ea.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
};
const W4 = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, La = window.Vue.withDirectives, K4 = window.Vue.toDisplayString, Y4 = window.Vue.createTextVNode, Ur = window.Vue.unref, Ir = window.Vue.withCtx, Rr = window.Vue.openBlock, zr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const J4 = { class: "pa-4" }, Z4 = { class: "flex pt-2" }, Q4 = window.Codex.CdxButton, eV = window.Vue.ref, tV = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Nc(), a = eV(!1), { currentTranslation: r } = zt(), c = () => k(this, null, function* () {
      a.value = !0;
      let d = !1;
      try {
        d = yield it.splitTranslation(
          r.value.translationId
        );
      } catch (g) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          g
        );
      }
      a.value = !1, d && (s(r.value), o());
    });
    return (d, g) => {
      const i = W4("i18n");
      return Rr(), zr(Ur(rt), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Ir(() => [
          zn("div", Z4, [
            a.value ? (Rr(), zr(Ur(qe), { key: 1 })) : (Rr(), zr(Ur(Q4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: Ir(() => [
                Y4(K4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Ir(() => [
          zn("div", J4, [
            La(zn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            La(zn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            zn("p", null, [
              La(zn("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            La(zn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const kg = window.Vue.resolveDirective, Da = window.Vue.createElementVNode, bg = window.Vue.withDirectives, vn = window.Vue.unref, Aa = window.Vue.withCtx, Qt = window.Vue.createVNode, Or = window.Vue.openBlock, xg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const nV = window.Vue.createBlock, oV = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, sV = { class: "mb-0" }, aV = { class: "sx-translation-confirmer__article-image flex justify-center" }, iV = ["src"], rV = { class: "ma-3" }, lV = window.Vue.computed, cV = window.Vue.onBeforeUnmount, uV = window.Vue.ref, dV = window.Vuex.useStore, gV = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = dV(), { currentSourcePage: n } = Ye(), { previousRoute: o } = ee(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: c,
      clearTranslationURLParameters: d
    } = B(), g = lV(
      () => {
        var w, _;
        return (_ = (w = n.value) == null ? void 0 : w.image) == null ? void 0 : _.source;
      }
    ), { fetchTranslationsByStatus: i } = ki(), l = Xh();
    i("draft"), l(s.value, r.value), Pc(), Gm()(a.value);
    const p = Ce(), m = () => {
      p.push({ name: o.value });
    };
    cV(() => {
      const w = p.currentRoute.value.name;
      (w === "dashboard" || w === "sx-article-search") && d();
    });
    const h = uV(!1);
    return (w, _) => {
      const f = kg("i18n"), y = kg("i18n-html");
      return Or(), xg("section", oV, [
        Qt(vn(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Aa(() => [
            Qt(vn(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Aa(() => [
                bg(Da("h5", sV, null, 512), [
                  [f, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Qt(vn(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Aa(() => [
                Qt(vn(De), {
                  class: "pa-0",
                  type: "icon",
                  icon: vn(Is),
                  "icon-size": 20,
                  onClick: m
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Da("div", aV, [
          g.value ? (Or(), xg("img", {
            key: 0,
            src: g.value
          }, null, 8, iV)) : (Or(), nV(vn(Le), {
            key: 1,
            size: "120",
            icon: vn(fm),
            "icon-color": w.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Qt(G4),
        Qt(Gh),
        Qt(A4, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (S) => h.value = !0)
        }),
        Qt(vn(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Aa(() => [
            Da("p", rV, [
              bg(Da("small", null, null, 512), [
                [y, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Qt(tV, {
          modelValue: h.value,
          "onUpdate:modelValue": _[1] || (_[1] = (S) => h.value = S)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const pV = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: gV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, mV = window.Vue.resolveComponent, hV = window.Vue.createVNode, wV = window.Vue.normalizeClass, fV = window.Vue.openBlock, _V = window.Vue.createElementBlock;
function vV(e, t, n, o, s, a) {
  const r = mV("sx-translation-confirmer");
  return fV(), _V("main", {
    class: wV(["sx-translation-confirmer-view", a.classes])
  }, [
    hV(r)
  ], 2);
}
const SV = /* @__PURE__ */ Y(pV, [["render", vV]]);
const yV = window.Vue.toDisplayString, $g = window.Vue.unref, CV = window.Vue.createVNode, kV = window.Vue.createTextVNode, bV = window.Vue.createElementVNode, xV = window.Vue.openBlock, $V = window.Vue.createElementBlock, VV = { class: "sx-section-selector-view-article-item ma-0" }, EV = ["href"], LV = window.Codex.CdxIcon, DV = {
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
    return (t, n) => (xV(), $V("li", VV, [
      bV("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        kV(yV(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        CV($g(LV), {
          size: "x-small",
          icon: $g(Lc)
        }, null, 8, ["icon"])
      ], 8, EV)
    ]));
  }
};
const AV = window.Vue.resolveDirective, Ta = window.Vue.createElementVNode, jr = window.Vue.withDirectives, On = window.Vue.unref, TV = window.Vue.toDisplayString, Ba = window.Vue.withCtx, rs = window.Vue.createVNode, BV = window.Vue.openBlock, PV = window.Vue.createElementBlock, FV = { class: "sx-section-selector__header pa-4" }, MV = { class: "sx-section-selector__header-text ma-0" }, NV = ["textContent"], UV = { class: "pt-0 ma-0" }, IV = { class: "ma-0" }, RV = window.Codex.CdxButton, zV = window.Codex.CdxIcon, OV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ke();
    return (n, o) => {
      const s = AV("i18n");
      return BV(), PV("div", FV, [
        rs(On(P), { class: "ma-0 pb-3" }, {
          default: Ba(() => [
            rs(On(b), null, {
              default: Ba(() => {
                var a;
                return [
                  jr(Ta("h6", MV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Ta("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: TV((a = On(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, NV)
                ];
              }),
              _: 1
            }),
            rs(On(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ba(() => [
                rs(On(RV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ba(() => [
                    rs(On(zV), { icon: On(Mo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        jr(Ta("h4", UV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        jr(Ta("p", IV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, jV = window.Vue.renderList, HV = window.Vue.Fragment, Hr = window.Vue.openBlock, Vg = window.Vue.createElementBlock, qV = window.Vue.renderSlot, Pa = window.Vue.unref, Eg = window.Vue.createVNode, Lg = window.Vue.withCtx, GV = window.Vue.createBlock, XV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, WV = window.Codex.CdxButton, KV = window.Codex.CdxIcon, Wh = {
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
    return (t, n) => (Hr(), Vg("ul", XV, [
      (Hr(!0), Vg(HV, null, jV(e.sections, (o) => (Hr(), GV(Pa(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Lg(() => [
          Eg(Pa(WV), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Lg(() => [
              qV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Eg(Pa(KV), { icon: Pa(Gs) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, YV = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const JV = window.Vue.resolveDirective, Fa = window.Vue.createElementVNode, qr = window.Vue.withDirectives, vt = window.Vue.unref, Dg = window.Vue.toDisplayString, po = window.Vue.withCtx, Gr = window.Vue.openBlock, Ag = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ls = window.Vue.createVNode, ZV = window.Vue.createTextVNode, QV = window.Vue.createElementBlock, e3 = { class: "sx-section-selector__missing-sections py-2" }, t3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, n3 = ["lang", "dir", "textContent"], Tg = window.Vue.computed, o3 = window.Codex.CdxButton, s3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Ke(), n = Tg(
      () => {
        var s;
        return z.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Tg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = JV("i18n");
      return Gr(), QV("section", e3, [
        qr(Fa("h4", t3, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Gr(), Ag(vt(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: po(() => [
            ls(vt(b), {
              class: "py-6 justify-center",
              innerHTML: vt(YV)
            }, null, 8, ["innerHTML"]),
            ls(vt(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: po(() => [
                qr(Fa("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            ls(vt(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: po(() => [
                qr(Fa("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            ls(vt(b), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: po(() => [
                ls(vt(o3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: po(() => [
                    ZV(Dg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Gr(), Ag(Wh, {
          key: 0,
          sections: vt(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: po(({ sourceSection: c }) => {
            var d, g;
            return [
              Fa("h5", {
                class: "ma-0",
                lang: (d = vt(t)) == null ? void 0 : d.sourceLanguage,
                dir: vt(z.getDir)((g = vt(t)) == null ? void 0 : g.sourceLanguage),
                textContent: Dg(c)
              }, null, 8, n3)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const a3 = window.Vue.resolveDirective, Ma = window.Vue.createElementVNode, i3 = window.Vue.withDirectives, jn = window.Vue.unref, Bg = window.Vue.toDisplayString, r3 = window.Vue.withCtx, l3 = window.Vue.createVNode, c3 = window.Vue.openBlock, u3 = window.Vue.createElementBlock, d3 = { class: "sx-section-selector__present-sections py-2" }, g3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, p3 = { class: "sx-section-selector__present-section-button-content" }, m3 = ["lang", "dir", "textContent"], h3 = ["lang", "dir", "textContent"], w3 = window.Vue.computed, f3 = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Ke(), n = w3(
      () => {
        var o;
        return z.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var r;
      const a = a3("i18n");
      return c3(), u3("section", d3, [
        i3(Ma("h4", g3, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        l3(Wh, {
          sections: ((r = jn(t)) == null ? void 0 : r.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (c) => o.$emit("select-section", c))
        }, {
          default: r3(({ sourceSection: c, targetSection: d }) => {
            var g, i, l, u;
            return [
              Ma("div", p3, [
                Ma("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (g = jn(t)) == null ? void 0 : g.sourceLanguage,
                  dir: jn(z.getDir)((i = jn(t)) == null ? void 0 : i.sourceLanguage),
                  textContent: Bg(c)
                }, null, 8, m3),
                Ma("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (l = jn(t)) == null ? void 0 : l.targetLanguage,
                  dir: jn(z.getDir)((u = jn(t)) == null ? void 0 : u.targetLanguage),
                  textContent: Bg(d)
                }, null, 8, h3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const en = window.Vue.createVNode, Sn = window.Vue.unref, _3 = window.Vue.resolveDirective, Bt = window.Vue.createElementVNode, cs = window.Vue.withDirectives, v3 = window.Vue.renderList, S3 = window.Vue.Fragment, Xr = window.Vue.openBlock, Pg = window.Vue.createElementBlock, y3 = window.Vue.createBlock, Fg = window.Vue.toDisplayString, Mg = window.Vue.createTextVNode, Wr = window.Vue.withCtx, C3 = { class: "sx-section-selector" }, k3 = { class: "sx-section-selector__body" }, b3 = { class: "py-2" }, x3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, $3 = { class: "ma-0 pa-0" }, V3 = { class: "sx-section-selector__additional-consideration-title" }, E3 = { href: "#" }, L3 = { class: "sx-section-selector__additional-consideration-title" }, D3 = { href: "#" }, Kr = window.Vue.computed, A3 = window.Vuex.useStore, T3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = A3(), { sectionSuggestion: n } = Ke(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: r
    } = ee(t), c = Kr(
      () => {
        var f;
        return q.getPageUrl(o.value, (f = n.value) == null ? void 0 : f.sourceTitle);
      }
    ), d = Kr(
      () => {
        var f;
        return q.getPageUrl(s.value, (f = n.value) == null ? void 0 : f.targetTitle);
      }
    ), g = Kr(() => [
      { path: c.value, autonym: a.value },
      { path: d.value, autonym: r.value }
    ]), i = Ce(), { clearTranslationURLParameters: l, setSectionURLParam: u } = B(), p = () => {
      l(), i.push({ name: "dashboard" });
    }, { currentTranslation: m } = zt(), h = Nc(), { selectPageSectionByTitle: w } = bi(), _ = (f) => {
      u(f), m.value ? h(m.value) : (w(f), i.push({ name: "sx-content-comparator" }));
    };
    return (f, y) => {
      const S = _3("i18n");
      return Xr(), Pg("section", C3, [
        en(OV, { onClose: p }),
        Bt("section", k3, [
          en(Gh),
          en(s3, {
            onSelectSection: _,
            onClose: p
          }),
          en(f3, { onSelectSection: _ }),
          Bt("section", b3, [
            cs(Bt("h4", x3, null, 512), [
              [S, [
                Sn(r)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            Bt("ul", $3, [
              (Xr(!0), Pg(S3, null, v3(g.value, (C, x) => (Xr(), y3(DV, {
                key: `view-article-item-${x}`,
                path: C.path,
                autonym: C.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          en(Sn(P), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: Wr(() => [
              en(Sn(b), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: Wr(() => [
                  Bt("h6", V3, [
                    en(Sn(Le), {
                      icon: Sn(Yf),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Mg(" " + Fg(f.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  cs(Bt("p", null, null, 512), [
                    [S, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  cs(Bt("a", E3, null, 512), [
                    [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              en(Sn(b), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: Wr(() => [
                  Bt("h6", L3, [
                    en(Sn(Le), {
                      icon: Sn(Kf),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Mg(" " + Fg(f.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  cs(Bt("p", null, null, 512), [
                    [S, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  cs(Bt("a", D3, null, 512), [
                    [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const B3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: T3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, P3 = window.Vue.resolveComponent, F3 = window.Vue.createVNode, M3 = window.Vue.normalizeClass, N3 = window.Vue.openBlock, U3 = window.Vue.createElementBlock;
function I3(e, t, n, o, s, a) {
  const r = P3("sx-section-selector");
  return N3(), U3("main", {
    class: M3(["sx-section-selector-view", a.classes])
  }, [
    F3(r)
  ], 2);
}
const R3 = /* @__PURE__ */ Y(B3, [["render", I3]]), Yr = window.Vue.computed, z3 = (e) => {
  const {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = Yr(
    () => z.getAutonym(t.value)
  ), s = Yr(
    () => z.getAutonym(n.value)
  ), a = de();
  return Yr(() => {
    const r = {
      value: "source_section",
      props: {
        label: a.i18n(
          "cx-sx-content-comparator-source-selector-title",
          o.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let c;
    switch (!0) {
      case e.isMappedSection:
        c = {
          value: "target_section",
          props: {
            label: a.i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              s.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        c = {
          value: "target_article",
          props: {
            label: a.i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              s.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }
    return [r, c];
  });
};
const Ng = window.Vue.unref, O3 = window.Vue.createVNode, j3 = window.Vue.openBlock, H3 = window.Vue.createElementBlock, q3 = { class: "sx-content-comparator__source-target-selector" }, G3 = window.Vue.watch, X3 = {
  __name: "SourceVsTargetSelector",
  props: {
    selection: {
      type: String,
      required: !0
    },
    isMappedSection: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = z3(n);
    return G3(
      () => n.isMappedSection,
      () => {
        a.value.map((r) => r.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (r, c) => (j3(), H3("div", q3, [
      O3(Ng(Us), {
        items: Ng(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Hn = window.Vue.computed, W3 = window.Vue.ref, Ic = () => {
  const e = W3([]), { currentTargetPage: t } = Ye(), { sectionSuggestion: n } = Ke(), { sectionURLParameter: o } = B(), s = Hn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Hn(
    () => {
      var u;
      return (((u = r.value) == null ? void 0 : u.title) || "").replace(/ /g, "_");
    }
  ), r = Hn(
    () => {
      var u;
      return (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value);
    }
  ), { sourceSection: c } = W(), d = Hn(() => {
    var u;
    return (u = c.value) == null ? void 0 : u.html;
  }), g = Hn(() => {
    var u;
    return (u = r.value) == null ? void 0 : u.html;
  }), i = Hn(
    () => {
      var u;
      return (u = n.value) == null ? void 0 : u.missingSections.hasOwnProperty(o.value);
    }
  ), l = Hn(
    () => !i.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: l,
    sourceSectionContent: d,
    targetSectionAnchor: a,
    targetSectionContent: g
  };
};
const Na = window.Vue.createVNode, K3 = window.Vue.toDisplayString, Y3 = window.Vue.createElementVNode, yn = window.Vue.unref, Ua = window.Vue.withCtx, Jr = window.Vue.openBlock, Zr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const J3 = window.Vue.normalizeClass, Z3 = ["lang", "dir", "textContent"], Ug = window.Vue.ref, Qr = window.Vue.computed, Q3 = window.Vue.onMounted, e5 = {
  __name: "SXContentComparatorContentHeader",
  props: {
    sourceVsTargetSelection: {
      type: String,
      required: !0
    },
    isMappedSection: {
      type: Boolean,
      required: !0
    }
  },
  emits: [
    "update:sourceVsTargetSelection",
    "translation-button-clicked"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Ug(!1), { sectionSuggestion: a } = Ke(), { sectionURLParameter: r } = B(), c = Qr(
      () => (r.value || "").replace(/ /g, "_")
    ), d = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: i } = Ic(), l = Qr(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${q.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${c.value}`,
            lang: a.value.sourceLanguage,
            dir: z.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: u.value,
            lang: a.value.targetLanguage,
            dir: z.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: g.value,
            path: `${u.value}#${i.value}`
          };
      }
    }), u = Qr(
      () => q.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Ug(null);
    return Q3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Jr(), Zr(yn(P), {
      ref_key: "contentHeader",
      ref: p,
      class: J3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Ua(() => [
        Na(X3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": d
        }, null, 8, ["is-mapped-section", "selection"]),
        Na(yn(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Ua(() => [
            Na(yn(b), null, {
              default: Ua(() => [
                Y3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: K3(l.value.title)
                }, null, 8, Z3)
              ]),
              _: 1
            }),
            Na(yn(b), { shrink: "" }, {
              default: Ua(() => [
                s.value ? (Jr(), Zr(yn(De), {
                  key: 0,
                  icon: yn(gi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (w) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Jr(), Zr(yn(De), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: yn(hm),
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
}, Ia = window.Vue.unref, Ig = window.Vue.createVNode, t5 = window.Vue.openBlock, n5 = window.Vue.createElementBlock, o5 = { class: "sx-content-comparator__header-navigation flex items-center" }, s5 = window.Vue.computed, a5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = s5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = bi(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[c];
      s(d);
    }, r = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[c];
      s(d);
    };
    return (c, d) => (t5(), n5("div", o5, [
      Ig(Ia(De), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Ia(qf),
        onClick: a
      }, null, 8, ["icon"]),
      Ig(Ia(De), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Ia(Hf),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Rg = window.Vue.toDisplayString, i5 = window.Vue.resolveDirective, el = window.Vue.withDirectives, mo = window.Vue.openBlock, Ra = window.Vue.createElementBlock, r5 = window.Vue.createCommentVNode, l5 = window.Vue.createTextVNode, zg = window.Vue.createElementVNode, c5 = window.Vue.normalizeClass, qn = window.Vue.unref, tl = window.Vue.withCtx, nl = window.Vue.createVNode, Og = window.Vue.createBlock, u5 = { class: "sx-content-comparator-header__mapped-section" }, d5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, g5 = { key: 0 }, p5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, m5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, jg = window.Vue.computed, h5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: Dn,
      required: !0
    },
    targetSectionTitle: {
      type: String,
      required: !0
    },
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["update:discardedSections"],
  setup(e, { emit: t }) {
    const n = de(), o = e, s = t, a = jg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), r = jg(
      () => n.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        z.getAutonym(o.suggestion.targetLanguage)
      )
    ), c = () => {
      a.value || s("update:discardedSections", [
        ...o.discardedSections,
        o.targetSectionTitle
      ]);
    }, d = () => {
      a.value && s(
        "update:discardedSections",
        o.discardedSections.filter(
          (g) => g !== o.targetSectionTitle
        )
      );
    };
    return (g, i) => {
      const l = i5("i18n");
      return mo(), Ra("div", u5, [
        nl(qn(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: tl(() => [
            nl(qn(b), { grow: "" }, {
              default: tl(() => [
                zg("h6", d5, [
                  l5(Rg(r.value) + " ", 1),
                  a.value ? el((mo(), Ra("span", g5, null, 512)), [
                    [l, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : r5("", !0)
                ]),
                zg("h6", {
                  class: c5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, Rg(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            nl(qn(b), { shrink: "" }, {
              default: tl(() => [
                a.value ? (mo(), Og(qn(De), {
                  key: 1,
                  class: "pa-0",
                  icon: qn(Qf),
                  type: "icon",
                  onClick: d
                }, null, 8, ["icon"])) : (mo(), Og(qn(De), {
                  key: 0,
                  class: "pa-0",
                  icon: qn(mm),
                  type: "icon",
                  onClick: c
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? el((mo(), Ra("p", m5, null, 512)), [
          [l, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : el((mo(), Ra("p", p5, null, 512)), [
          [l, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const we = window.Vue.unref, ho = window.Vue.createVNode, Hg = window.Vue.toDisplayString, rn = window.Vue.createElementVNode, w5 = window.Vue.normalizeClass, ol = window.Vue.withCtx, f5 = window.Vue.resolveDirective, qg = window.Vue.withDirectives, sl = window.Vue.openBlock, Gg = window.Vue.createBlock, Xg = window.Vue.createCommentVNode, _5 = window.Vue.createElementBlock, v5 = { class: "sx-content-comparator__header pa-4" }, S5 = { class: "row my-1 py-2 mx-0" }, y5 = { class: "sx-content-comparator-header__titles grow" }, C5 = ["lang", "dir"], k5 = ["lang", "dir"], b5 = { class: "py-2 mb-1" }, x5 = /* @__PURE__ */ rn("br", null, null, -1), us = window.Vue.computed, $5 = window.Vue.inject, V5 = {
  __name: "SXContentComparatorHeader",
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: [
    "close",
    "translation-button-clicked",
    "update:discardedSections"
  ],
  setup(e) {
    const { sectionURLParameter: t } = B(), { sourceSection: n } = W(), { sectionSuggestion: o } = Ke(), s = us(
      () => {
        var l;
        return (l = o.value) == null ? void 0 : l.missingSections.hasOwnProperty(t.value);
      }
    ), a = us(
      () => {
        var l;
        return (l = o.value) == null ? void 0 : l.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: r } = Ic(), c = us(() => {
      var l;
      return (l = n.value) == null ? void 0 : l.html;
    }), d = us(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), g = $5("breakpoints"), i = us(() => g.value.mobile);
    return (l, u) => {
      const p = f5("i18n");
      return sl(), _5("div", v5, [
        ho(we(De), {
          class: "py-2 pa-0",
          icon: we(Gf),
          label: l.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: u[0] || (u[0] = (m) => l.$emit("close"))
        }, null, 8, ["icon", "label"]),
        rn("div", S5, [
          rn("div", {
            class: w5(["flex grow", i.value ? "col-12" : "me-6"])
          }, [
            rn("div", y5, [
              rn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: we(o).sourceLanguage,
                dir: we(z.getDir)(we(o).sourceLanguage)
              }, Hg(we(o).sourceTitle), 9, C5),
              rn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: we(o).sourceLanguage,
                dir: we(z.getDir)(we(o).sourceLanguage)
              }, Hg(we(t)), 9, k5)
            ]),
            ho(a5, { "section-source-titles": d.value }, null, 8, ["section-source-titles"])
          ], 2),
          rn("div", b5, [
            ho(we(De), {
              icon: we(gi),
              progressive: "",
              label: l.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !c.value,
              onClick: u[1] || (u[1] = (m) => l.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (sl(), Gg(we(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: ol(() => [
            ho(we(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: ol(() => [
                ho(we(Le), { icon: we(Jf) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            ho(we(b), { class: "ma-0" }, {
              default: ol(() => [
                qg(rn("strong", null, null, 512), [
                  [p, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                x5,
                qg(rn("span", null, null, 512), [
                  [p, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Xg("", !0),
        a.value ? (sl(), Gg(h5, {
          key: 1,
          suggestion: we(o),
          "target-section-title": we(r),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": u[2] || (u[2] = (m) => l.$emit("update:discardedSections", m))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Xg("", !0)
      ]);
    };
  }
};
const Wg = window.Vue.toDisplayString, E5 = window.Vue.createElementVNode, Kg = window.Vue.openBlock, Yg = window.Vue.createElementBlock, L5 = window.Vue.createCommentVNode, D5 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, A5 = ["textContent"], T5 = ["textContent"], Kh = {
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
    return (t, n) => (Kg(), Yg("section", D5, [
      E5("h5", {
        textContent: Wg(e.placeholderTitle)
      }, null, 8, A5),
      e.placeholderSubtitle ? (Kg(), Yg("p", {
        key: 0,
        textContent: Wg(e.placeholderSubtitle)
      }, null, 8, T5)) : L5("", !0)
    ]));
  }
}, B5 = window.Vue.computed, P5 = window.Vue.createApp, F5 = window.Vuex.useStore, M5 = () => {
  const e = F5(), { sectionSuggestion: t } = Ke(), { currentTargetPage: n } = Ye(), o = de(), s = () => P5(
    Kh,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), r = (c) => {
    const d = c.getElementsByTagName("base");
    Array.from(d).forEach(
      (g) => g.parentNode.removeChild(g)
    );
  };
  return B5(() => {
    var i;
    const c = document.createElement("div");
    c.innerHTML = (i = n.value) == null ? void 0 : i.content, r(c);
    const d = s(), g = a(
      t.value
    );
    if (g) {
      const l = Array.from(
        c.querySelectorAll("h2")
      ).filter((u) => u.textContent.match(g));
      if (l && l.length) {
        const u = l[0].parentNode;
        u.parentNode.insertBefore(
          d,
          u
        );
      }
    } else
      c.appendChild(d);
    return c.innerHTML;
  });
};
const be = window.Vue.unref, N5 = window.Vue.isRef, al = window.Vue.createVNode, wo = window.Vue.openBlock, Jg = window.Vue.createBlock, Zg = window.Vue.createCommentVNode, za = window.Vue.createElementVNode, il = window.Vue.Fragment, Oa = window.Vue.createElementBlock, U5 = { class: "sx-content-comparator" }, I5 = { class: "sx-content-comparator__source-content" }, R5 = ["lang", "dir", "innerHTML"], z5 = ["lang", "dir", "innerHTML"], O5 = ["innerHTML"], j5 = window.Vue.ref, H5 = window.Vue.computed, q5 = window.Vue.watch, G5 = window.Vuex.useStore, X5 = {
  __name: "SXContentComparator",
  setup(e) {
    G5();
    const t = Ce(), n = j5("source_section");
    Ac();
    const o = () => t.push({ name: "sx-section-selector" }), s = Uc(), {
      sourceLanguageURLParameter: a,
      targetLanguageURLParameter: r,
      pageURLParameter: c,
      sectionURLParameter: d
    } = B(), {
      activeSectionTargetTitle: g,
      discardedSections: i,
      isCurrentSectionMapped: l,
      sourceSectionContent: u,
      targetSectionContent: p
    } = Ic(), m = M5(), { sectionSuggestion: h } = Ke(), w = H5(() => h.value.targetTitle), _ = Fc();
    return q5(
      w,
      () => _(
        r.value,
        a.value,
        w.value
      ),
      { immediate: !0 }
    ), (f, y) => (wo(), Oa("section", U5, [
      al(V5, {
        "discarded-sections": be(i),
        "onUpdate:discardedSections": y[0] || (y[0] = (S) => N5(i) ? i.value = S : null),
        onTranslationButtonClicked: be(s),
        onClose: o
      }, null, 8, ["discarded-sections", "onTranslationButtonClicked"]),
      al(e5, {
        "source-vs-target-selection": n.value,
        "onUpdate:sourceVsTargetSelection": y[1] || (y[1] = (S) => n.value = S),
        "is-mapped-section": be(l),
        onTranslationButtonClicked: be(s)
      }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
      za("section", I5, [
        n.value === "source_section" ? (wo(), Oa(il, { key: 0 }, [
          be(u) ? Zg("", !0) : (wo(), Jg(be(qe), { key: 0 })),
          za("section", {
            lang: be(a),
            dir: be(z.getDir)(be(a)),
            class: "pt-2 px-4",
            innerHTML: be(u)
          }, null, 8, R5)
        ], 64)) : n.value === "target_article" ? (wo(), Oa(il, { key: 1 }, [
          be(m) ? Zg("", !0) : (wo(), Jg(be(qe), { key: 0 })),
          za("article", {
            lang: be(r),
            dir: be(z.getDir)(be(r)),
            class: "px-4",
            innerHTML: be(m)
          }, null, 8, z5)
        ], 64)) : (wo(), Oa(il, { key: 2 }, [
          za("section", {
            class: "pa-4",
            innerHTML: be(p)
          }, null, 8, O5),
          al(Kh, {
            "placeholder-title": f.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": f.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
};
const W5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: X5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, K5 = window.Vue.resolveComponent, Y5 = window.Vue.createVNode, J5 = window.Vue.normalizeClass, Z5 = window.Vue.openBlock, Q5 = window.Vue.createElementBlock;
function eE(e, t, n, o, s, a) {
  const r = K5("sx-content-comparator");
  return Z5(), Q5("main", {
    class: J5(["sx-content-comparator-view", a.classes])
  }, [
    Y5(r)
  ], 2);
}
const tE = /* @__PURE__ */ Y(W5, [["render", eE]]);
const nE = window.Vue.resolveDirective, ds = window.Vue.createElementVNode, Qg = window.Vue.withDirectives, ja = window.Vue.unref, rl = window.Vue.createVNode, ep = window.Vue.toDisplayString, tp = window.Vue.createTextVNode, gs = window.Vue.withCtx, oE = window.Vue.openBlock, sE = window.Vue.createBlock, aE = { class: "mw-ui-dialog__header px-4 py-3" }, iE = { class: "mw-ui-dialog__header-title" }, rE = { class: "pa-4" }, lE = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, np = window.Codex.CdxButton, cE = {
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
      const d = nE("i18n");
      return oE(), sE(ja(rt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: gs(() => [
          ds("div", aE, [
            Qg(ds("span", iE, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: gs(() => [
          ds("div", lE, [
            rl(ja(np), {
              weight: "quiet",
              onClick: s
            }, {
              default: gs(() => [
                tp(ep(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            rl(ja(np), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: gs(() => [
                tp(ep(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: gs(() => [
          rl(ja(di)),
          ds("div", rE, [
            Qg(ds("span", null, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, uE = window.Vuex.useStore, Rc = () => {
  const e = uE(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = un(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = (g, i, l) => {
    if (g === 0) {
      t.value.proposedTitleTranslations[i] = l;
      return;
    }
    const u = t.value.getContentTranslationUnitById(g);
    u instanceof je ? u.blockTemplateProposedTranslations[i] = l : u instanceof En && u.addProposedTranslation(i, l);
  }, r = (g, i) => k(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, g))
      return "";
    try {
      const u = yield e.dispatch("application/getCXServerToken");
      return yield it.fetchSegmentTranslation(
        o.value,
        s.value,
        g,
        i,
        u
      );
    } catch (u) {
      return mw.log.error("Error while translating segment", u), "";
    }
  }), c = (g, i) => k(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      g,
      i
    ))
      return;
    let l = t.value.getOriginalContentByTranslationUnitId(g);
    const u = t.value.getContentTranslationUnitById(g);
    let p;
    if (e.commit("application/addMtRequestsPending", g), p = yield r(i, l), !p) {
      e.commit("application/removeMtRequestsPending", g);
      return;
    }
    u instanceof je && (u.setBlockTemplateAdaptationInfoByHtml(
      i,
      p
    ), p = (yield JS(
      p,
      n(s.value, o.value),
      s.value
    )) || ""), a(
      g,
      i,
      p
    ), e.commit("application/removeMtRequestsPending", g);
  });
  return {
    translateTranslationUnitById: c,
    translateSelectedTranslationUnitForAllProviders: () => {
      const g = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: i } = t.value;
      g.forEach(
        (l) => c(i, l)
      );
    }
  };
}, dE = window.Vuex.useStore, gE = () => {
  const { sourceSection: e } = W(), t = dE(), { translateTranslationUnitById: n } = Rc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const pE = window.Vue.resolveDirective, ot = window.Vue.createElementVNode, Ha = window.Vue.withDirectives, Ie = window.Vue.unref, ll = window.Vue.createVNode, Cn = window.Vue.withCtx, mE = window.Vue.renderList, hE = window.Vue.Fragment, cl = window.Vue.openBlock, wE = window.Vue.createElementBlock, fE = window.Vue.toDisplayString, op = window.Vue.createBlock, _E = window.Vue.createCommentVNode, vE = { class: "mw-ui-dialog__header pa-4" }, SE = { class: "row ma-0 py-2" }, yE = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, CE = { class: "mb-0" }, kE = { class: "col shrink justify-center" }, bE = { class: "pb-2 mb-0" }, xE = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, $E = ["dir", "lang", "innerHTML"], VE = ["textContent"], EE = ["innerHTML"], LE = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, DE = /* @__PURE__ */ ot("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), ul = window.Vue.computed, AE = window.Vuex.useStore, TE = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = K.EMPTY_TEXT_PROVIDER_KEY, s = K.ORIGINAL_TEXT_PROVIDER_KEY, a = AE(), {
      sourceSection: r,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: d
    } = W(), {
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: i
    } = B(), l = ul(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        i.value
      )
    ), u = ul(() => {
      const f = [s, o];
      return l.value.filter(
        (y) => !f.includes(y)
      );
    }), p = ul(
      () => c.value ? r.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = gE(), h = (f) => {
      m(f), _();
    }, w = K.getMTProviderLabel, _ = () => n("update:active", !1);
    return (f, y) => {
      const S = pE("i18n");
      return e.active ? (cl(), op(Ie(rt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: Cn(() => [
          ot("div", vE, [
            ot("div", SE, [
              ot("div", yE, [
                Ha(ot("h4", CE, null, 512), [
                  [S, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              ot("div", kE, [
                ll(Ie(De), {
                  type: "icon",
                  icon: Ie(Is),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            Ha(ot("h6", bE, null, 512), [
              [S, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: Cn(() => [
          ll(Ie(He), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (C) => h(Ie(s)))
          }, {
            header: Cn(() => [
              Ha(ot("h5", xE, null, 512), [
                [S, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: Cn(() => [
              ot("p", {
                dir: Ie(z.getDir)(Ie(g)),
                lang: Ie(g),
                innerHTML: p.value[Ie(s)]
              }, null, 8, $E)
            ]),
            _: 1
          }),
          (cl(!0), wE(hE, null, mE(u.value, (C) => (cl(), op(Ie(He), {
            key: C,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (x) => h(C)
          }, {
            header: Cn(() => [
              ot("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: fE(Ie(w)(C))
              }, null, 8, VE)
            ]),
            default: Cn(() => [
              ot("p", {
                innerHTML: p.value[C]
              }, null, 8, EE)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          ll(Ie(He), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (C) => h(Ie(o)))
          }, {
            header: Cn(() => [
              Ha(ot("h5", LE, null, 512), [
                [S, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: Cn(() => [
              DE
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : _E("", !0);
    };
  }
}, BE = window.Vuex.useStore, No = () => {
  const { sourceSection: e } = W(), t = BE(), { translateTranslationUnitById: n } = Rc(), { currentMTProvider: o } = ee(t), s = (c) => k(void 0, null, function* () {
    e.value.selectTranslationUnitById(c), yield n(c, o.value);
    const { followingTranslationUnit: d } = e.value;
    d && (yield n(
      d.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: c } = e.value;
      return c ? s(c.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: c, contentTranslationUnits: d } = e.value, g = c - 1;
      let i = 0;
      return g > -1 && (i = d[g].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const PE = window.Vue.toDisplayString, dl = window.Vue.createElementVNode, gl = window.Vue.unref, FE = window.Vue.createVNode, ME = window.Vue.normalizeClass, NE = window.Vue.withCtx, UE = window.Vue.openBlock, IE = window.Vue.createBlock, RE = ["href"], zE = ["textContent"], OE = ["innerHTML"], fo = window.Vue.computed, jE = window.Vuex.useStore, sp = "sx-sentence-selector__section-title", HE = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = jE(), { sourceSection: n, isSectionTitleSelected: o } = W(), { currentSourcePage: s } = Ye(), { sourceLanguage: a } = ee(t), r = fo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = fo(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), d = fo(
      () => q.getPageUrl(a.value, r.value)
    ), g = fo(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = fo(
      () => g.value ? "translated" : "selected"
    ), l = fo(() => {
      const m = [sp];
      return o.value && m.push(`${sp}--${i.value}`), m;
    }), { selectTranslationUnitById: u } = No(), p = () => u(0);
    return (m, h) => (UE(), IE(gl(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: NE(() => [
        dl("a", {
          href: d.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          dl("strong", {
            textContent: PE(r.value)
          }, null, 8, zE),
          FE(gl(Le), {
            icon: gl(hm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, RE),
        dl("h2", {
          class: ME(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, OE)
      ]),
      _: 1
    }));
  }
};
const Pt = window.Vue.unref, ps = window.Vue.createVNode, qa = window.Vue.withCtx, ap = window.Vue.toDisplayString, ip = window.Vue.createTextVNode, qE = window.Vue.openBlock, GE = window.Vue.createBlock, XE = window.Vue.computed, pl = window.Codex.CdxButton, rp = window.Codex.CdxIcon, Yh = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = W(), s = XE(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (qE(), GE(Pt(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: qa(() => [
        ps(Pt(pl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Pt(n),
          onClick: r[0] || (r[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: qa(() => [
            ps(Pt(rp), {
              class: "me-1",
              icon: Pt(Dc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ps(Pt(pl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Pt(o),
          onClick: r[1] || (r[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: qa(() => [
            ip(ap(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ps(Pt(pl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: qa(() => [
            ip(ap(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ps(Pt(rp), {
              class: "ms-1",
              size: "small",
              icon: Pt(Gs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Gn = window.Vue.unref, WE = window.Vue.toDisplayString, ms = window.Vue.createVNode, Ga = window.Vue.withCtx, KE = window.Vue.openBlock, YE = window.Vue.createBlock, ml = window.Vue.computed, JE = window.Vuex.useStore, ZE = window.Codex.CdxButton, QE = window.Codex.CdxIcon, eL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = JE(), n = ml(() => t.state.application.currentMTProvider), o = de(), s = ml(() => ({
      [K.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [K.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = ml(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        K.getMTProviderLabel(n.value)
      )
    );
    return (r, c) => (KE(), YE(Gn(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ga(() => [
        ms(Gn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: Ga(() => [
            ms(Gn(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: WE(a.value)
            }, null, 8, ["textContent"]),
            ms(Gn(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ga(() => [
                ms(Gn(ZE), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (d) => r.$emit("configure-options"))
                }, {
                  default: Ga(() => [
                    ms(Gn(QE), {
                      class: "pa-0",
                      icon: Gn(Ec)
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
const St = window.Vue.unref, kn = window.Vue.createVNode, tL = window.Vue.resolveDirective, lp = window.Vue.createElementVNode, nL = window.Vue.withDirectives, cp = window.Vue.toDisplayString, up = window.Vue.createTextVNode, hs = window.Vue.withCtx, oL = window.Vue.openBlock, sL = window.Vue.createElementBlock, aL = { class: "mt-retry-body pb-5" }, iL = { class: "retry-body__message" }, dp = window.Codex.CdxButton, hl = window.Codex.CdxIcon, rL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = tL("i18n");
      return oL(), sL("div", aL, [
        lp("div", iL, [
          kn(St(hl), {
            class: "me-2",
            icon: St(Ch)
          }, null, 8, ["icon"]),
          nL(lp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        kn(St(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: hs(() => [
            kn(St(b), { cols: "6" }, {
              default: hs(() => [
                kn(St(dp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: hs(() => [
                    kn(St(hl), {
                      class: "me-1",
                      icon: St(Lh)
                    }, null, 8, ["icon"]),
                    up(" " + cp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            kn(St(b), { cols: "6" }, {
              default: hs(() => [
                kn(St(dp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: hs(() => [
                    kn(St(hl), {
                      class: "me-1",
                      icon: St(Ck)
                    }, null, 8, ["icon"]),
                    up(" " + cp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const _o = window.Vue.createVNode, Re = window.Vue.unref, ws = window.Vue.openBlock, lL = window.Vue.createElementBlock, cL = window.Vue.createCommentVNode, Xa = window.Vue.createBlock, uL = window.Vue.normalizeClass, dL = window.Vue.normalizeStyle, fs = window.Vue.withCtx, gL = window.Vue.toDisplayString, pL = window.Vue.createTextVNode, mL = window.Vue.normalizeProps, hL = window.Vue.guardReactiveProps, wL = ["lang", "dir", "innerHTML"], wl = window.Vue.ref, fL = window.Vue.onMounted, _L = window.Vue.onBeforeUnmount, fl = window.Vue.computed, vL = window.Vue.nextTick, SL = window.Vuex.useStore, yL = window.Codex.CdxButton, CL = window.Codex.CdxIcon, kL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = wl(0), n = wl(null), o = wl(null), s = SL(), { currentMTProvider: a } = ee(s), { targetLanguageURLParameter: r } = B(), { sourceSection: c, currentProposedTranslation: d } = W(), g = fl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = fl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = fl(
      () => !!d.value || a.value === K.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    fL(() => k(this, null, function* () {
      yield vL(), u(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), _L(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => u());
    return (m, h) => (ws(), Xa(Re(He), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: fs(() => [
        _o(Re(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: fs(() => [
            _o(eL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => m.$emit("configure-options"))
            }, null, 512),
            _o(Re(b), {
              class: uL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && g.value
              }]),
              style: dL(l.value ? i.value : null)
            }, {
              default: fs(() => [
                l.value ? (ws(), lL("section", {
                  key: 0,
                  lang: Re(r),
                  dir: Re(z.getDir)(Re(r)),
                  innerHTML: Re(d)
                }, null, 8, wL)) : g.value ? (ws(), Xa(Re(qe), { key: 1 })) : (ws(), Xa(rL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            _o(Re(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: fs(() => [
                l.value || g.value ? (ws(), Xa(Re(yL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (w) => m.$emit("edit-translation", Re(d)))
                }, {
                  default: fs(() => [
                    _o(Re(CL), {
                      class: "me-1",
                      icon: Re(Vc)
                    }, null, 8, ["icon"]),
                    pL(" " + gL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : cL("", !0),
                _o(Yh, mL(hL(m.$attrs)), null, 16)
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
}, bL = window.Vue.computed, xL = (e) => bL(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const r = ["untranslated", "translated", "selected"].map(
      (d) => `${t}--${d}`
    );
    s.classList.remove(...r), a.selected && s.classList.add(`${t}--selected`);
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const $L = window.Vue.unref, VL = window.Vue.normalizeClass, EL = window.Vue.openBlock, LL = window.Vue.createElementBlock, DL = ["innerHTML"], AL = window.Vue.onMounted, TL = window.Vue.ref, BL = window.Vue.computed, PL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: je,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = TL(null), a = xL(n.subSection);
    AL(() => {
      s.value.addEventListener("click", (g) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const l = g.composedPath().find(
            (u) => u instanceof Element && u.classList.contains("cx-segment")
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
    const { selectTranslationUnitById: r } = No(), c = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      r(g.id);
    }, d = BL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, i) => (EL(), LL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: VL(["sx-sentence-selector__subsection", d.value]),
      innerHTML: $L(a)
    }, null, 10, DL));
  }
};
const gp = window.Vue.unref, pp = window.Vue.createVNode, mp = window.Vue.normalizeStyle, FL = window.Vue.openBlock, ML = window.Vue.createElementBlock, hp = window.Vue.computed, Jh = {
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
    const t = e, n = hp(() => ({ "--size": t.size })), o = hp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? wm : ii
    );
    return (s, a) => (FL(), ML("div", {
      class: "block-template-status-indicator",
      style: mp(n.value)
    }, [
      pp(gp(I1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      pp(gp(Le), {
        icon: o.value,
        size: e.size / 2,
        style: mp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, _s = window.Vue.openBlock, Wa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const tn = window.Vue.unref, vo = window.Vue.withCtx, vs = window.Vue.createVNode, _l = window.Vue.toDisplayString, vl = window.Vue.createElementVNode, NL = window.Vue.renderList, UL = window.Vue.Fragment, IL = window.Vue.createElementBlock, RL = { class: "pa-4" }, zL = ["textContent"], OL = ["textContent"], jL = window.Vuex.useStore, Ka = window.Vue.computed, HL = {
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
    const t = e, { targetLanguageAutonym: n } = ee(jL()), o = Ka(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = de(), a = Ka(() => {
      let d;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? d = "cx-sx-block-template-mapping-status-title-partially-template" : d = "cx-sx-block-template-mapping-status-title-fully-template" : d = "cx-sx-block-template-mapping-status-title-unadapted-template" : d = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(d);
    }), r = Ka(() => {
      let d;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? d = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? d = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : d = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(d);
    }), c = Ka(() => {
      let d = [];
      if (!t.targetTemplateExists)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: o0,
          color: st.gray500
        });
      else if (!t.isTemplateAdapted)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Is,
          color: st.gray500
        });
      else if (o.value < 100)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: ii,
          color: st.blue600
        });
      else {
        let g;
        t.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : g = s.i18n("cx-sx-block-template-no-source-params-text"), d.push({
          text: g,
          icon: ii,
          color: st.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: gi,
        color: st.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: Uf,
        color: st.gray500
      }), d;
    });
    return (d, g) => (_s(), Wa(tn(rt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: d.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (i) => d.$emit("update:active", i))
    }, {
      header: vo(() => [
        vs(tn(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: vo(() => [
            vs(tn(b), { shrink: "" }, {
              default: vo(() => [
                e.targetTemplateExists ? (_s(), Wa(Jh, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (_s(), Wa(tn(Le), {
                  key: 1,
                  icon: tn(Rf)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: vo(() => [
        vl("div", RL, [
          vl("h3", {
            textContent: _l(a.value)
          }, null, 8, zL),
          vl("p", {
            class: "mt-6 text-small",
            textContent: _l(r.value)
          }, null, 8, OL),
          (_s(!0), IL(UL, null, NL(c.value, (i, l) => (_s(), Wa(tn(P), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: vo(() => [
              vs(tn(b), { shrink: "" }, {
                default: vo(() => [
                  vs(tn(Le), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              vs(tn(b), {
                textContent: _l(i.text)
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
const ye = window.Vue.unref, Ve = window.Vue.createVNode, Ft = window.Vue.withCtx, Sl = window.Vue.toDisplayString, wp = window.Vue.createTextVNode, qL = window.Vue.resolveDirective, fp = window.Vue.withDirectives, _p = window.Vue.createElementVNode, GL = window.Vue.normalizeClass, Ya = window.Vue.openBlock, vp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Sp = window.Vue.createBlock, XL = window.Vue.normalizeProps, WL = window.Vue.guardReactiveProps, KL = { class: "block-template-adaptation-card__container pa-4" }, YL = ["textContent"], JL = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Be = window.Vue.computed, ZL = window.Vue.ref, QL = window.Vuex.useStore, yp = window.Codex.CdxButton, Cp = window.Codex.CdxIcon, eD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = QL(), { targetLanguageAutonym: n, currentMTProvider: o } = ee(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = W(), r = Be(() => {
      var F;
      return ((F = s.value) == null ? void 0 : F.blockTemplateTranslatedContent) || a.value;
    }), c = Be(
      () => {
        var V;
        return (V = s.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = Be(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          s.value.id
        ));
      }
    ), g = de(), i = Be(
      // Strip HTML comments and return
      () => {
        var V, F;
        return ((F = (V = s.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : F.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), l = Be(
      () => {
        var V, F;
        return (F = (V = s.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : F[o.value];
      }
    ), u = Be(
      () => {
        var V, F;
        return ((V = l.value) == null ? void 0 : V.adapted) || !!((F = l.value) != null && F.partial);
      }
    ), p = Be(() => l.value ? "block-template-adaptation-card__body--" + (u.value ? "success" : "warning") : null), m = Be(() => l.value ? u.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Be(
      () => {
        var V;
        return Object.keys(((V = s.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), w = Be(() => {
      var F;
      const V = (F = s.value) == null ? void 0 : F.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(V || {});
    }), _ = Be(() => w.value.length), f = Be(() => {
      const V = x.value;
      return h.value + V === 0 ? 100 : _.value / (h.value + V) * 100 || 0;
    }), y = ZL(!1), S = () => {
      y.value = !0;
    }, C = (V) => V.filter((F) => !w.value.includes(F)), x = Be(() => {
      var F;
      const V = ((F = l.value) == null ? void 0 : F.mandatoryTargetParams) || [];
      return C(V).length;
    }), T = Be(() => {
      var F;
      const V = ((F = l.value) == null ? void 0 : F.optionalTargetParams) || [];
      return C(V).length;
    });
    return (V, F) => {
      const I = qL("i18n");
      return Ya(), Sp(ye(He), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Ft(() => [
          _p("div", KL, [
            Ve(ye(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Ft(() => [
                Ve(ye(b), { shrink: "" }, {
                  default: Ft(() => [
                    Ve(ye(Cp), {
                      icon: ye(kk),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Ve(ye(b), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Ft(() => [
                    wp(Sl(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Ya(), vp("div", {
              key: 0,
              class: GL(["pa-4 mb-4", p.value])
            }, [
              Ve(ye(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Ft(() => [
                  fp(Ve(ye(b), { tag: "h5" }, null, 512), [
                    [I, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Ve(ye(b), { shrink: "" }, {
                    default: Ft(() => [
                      Ve(Jh, {
                        percentage: f.value,
                        size: 20,
                        "is-template-adapted": u.value,
                        "stroke-width": 2,
                        onClick: S
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _p("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Sl(c.value)
              }, null, 8, YL),
              Ve(ye(yp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: F[0] || (F[0] = (M) => V.$emit("edit-translation", r.value))
              }, {
                default: Ft(() => [
                  wp(Sl(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Ya(), vp("div", JL, [
              Ve(ye(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Ft(() => [
                  fp(Ve(ye(b), { tag: "h5" }, null, 512), [
                    [I, [
                      ye(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Ve(ye(b), { shrink: "" }, {
                    default: Ft(() => [
                      Ve(ye(yp), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Ft(() => [
                          Ve(ye(Cp), {
                            icon: ye(yk),
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
            ])) : (Ya(), Sp(ye(qe), { key: 2 }))
          ]),
          Ve(Yh, XL(WL(V.$attrs)), null, 16),
          Ve(HL, {
            active: y.value,
            "onUpdate:active": F[1] || (F[1] = (M) => y.value = M),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": x.value,
            "optional-missing-params-count": T.value,
            "is-template-adapted": u.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const tD = window.Vue.unref, nD = window.Vue.createVNode, oD = window.Vue.openBlock, sD = window.Vue.createElementBlock, aD = { class: "translated-segment-card-header" }, iD = window.Vue.computed, rD = {
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
    const n = t, { isSectionTitleSelected: o } = W(), s = de(), a = iD(() => [
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
    return (c, d) => (oD(), sD("div", aD, [
      nD(tD(Us), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const bn = window.Vue.unref, Ja = window.Vue.createVNode, yl = window.Vue.withCtx, lD = window.Vue.openBlock, cD = window.Vue.createBlock, uD = window.Vue.computed, kp = window.Codex.CdxButton, bp = window.Codex.CdxIcon, dD = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = W(), o = uD(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (lD(), cD(bn(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: yl(() => [
        Ja(bn(kp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: bn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: yl(() => [
            Ja(bn(bp), { icon: bn(Dc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Ja(bn(kp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: yl(() => [
            Ja(bn(bp), { icon: bn(Gs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const gD = window.Vue.useCssVars, Ee = window.Vue.createVNode, xp = window.Vue.resolveDirective, pD = window.Vue.createElementVNode, Cl = window.Vue.withDirectives, ue = window.Vue.unref, mD = window.Vue.normalizeStyle, Za = window.Vue.openBlock, $p = window.Vue.createElementBlock, hD = window.Vue.createCommentVNode, wD = window.Vue.normalizeClass, tt = window.Vue.withCtx, fD = window.Vue.toDisplayString, _D = window.Vue.createTextVNode, Vp = window.Vue.createBlock, vD = window.Vue.normalizeProps, SD = window.Vue.guardReactiveProps, nn = window.Vue.computed, yD = window.Vue.ref, CD = window.Vue.inject, kD = window.Vuex.useStore, bD = window.Codex.CdxButton, kl = window.Codex.CdxIcon, xD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    gD((f) => ({
      "4929555c": _.value
    }));
    const t = yD("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = W(), { targetLanguage: a } = ee(kD()), r = nn(() => t.value === "sentence"), c = nn(
      () => n.value.subSections.find(
        (f) => f.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), d = nn(() => {
      var f;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (f = o.value) == null ? void 0 : f.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), g = CD("colors"), i = g.gray200, l = g.red600, u = nn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : c.value.translatedContent), p = nn(
      () => It.calculateScore(
        u.value,
        d.value,
        a.value
      )
    ), m = nn(
      () => It.getScoreStatus(p.value)
    ), h = nn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), w = nn(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), _ = nn(
      () => w.value[m.value]
    );
    return (f, y) => {
      const S = xp("i18n"), C = xp("i18n-html");
      return Za(), Vp(ue(He), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: tt(() => [
          Ee(ue(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: tt(() => [
              Ee(rD, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (x) => t.value = x)
              }, null, 8, ["selection"]),
              Ee(ue(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: tt(() => [
                  Ee(ue(P), { class: "ma-0" }, {
                    default: tt(() => [
                      Ee(ue(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: tt(() => [
                          Cl(pD("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Cl((Za(), $p("p", {
                            key: 0,
                            style: mD({ color: ue(l) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Cl((Za(), $p("p", {
                            key: 1,
                            class: wD(h.value)
                          }, null, 2)), [
                            [C, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ee(ue(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: tt(() => [
                          Ee(ue(P), { class: "ma-0 ms-2" }, {
                            default: tt(() => [
                              Ee(ue(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: tt(() => [
                                  Ee(ue(kl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ue(Ek)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ee(ue(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: tt(() => [
                                  Ee(ue(_m), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: ue(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ee(ue(b), { shrink: "" }, {
                                default: tt(() => [
                                  Ee(ue(kl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ue(bk)
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
                  r.value ? (Za(), Vp(ue(bD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (x) => f.$emit("edit-translation", u.value))
                  }, {
                    default: tt(() => [
                      Ee(ue(kl), {
                        class: "me-1",
                        icon: ue(Vc)
                      }, null, 8, ["icon"]),
                      _D(" " + fD(f.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : hD("", !0)
                ]),
                _: 1
              }),
              Ee(ue(b), { class: "translated-segment-card__actions" }, {
                default: tt(() => [
                  Ee(dD, vD(SD(f.$attrs)), null, 16)
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
}, $D = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = W(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = No(), { currentTranslation: s } = zt();
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
}, Zh = window.Vuex.useStore, VD = () => {
  const e = Zh(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => k(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Si.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, ED = () => {
  const e = Zh(), { currentMTProvider: t } = ee(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = VD();
  return () => k(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = K.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(r) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, LD = window.Vue.computed, DD = (e) => {
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
}, AD = () => {
  const { selectedContentTranslationUnit: e } = W(), t = LD(
    () => e.value instanceof je
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && DD(o);
  };
}, TD = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (c) => !K.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, BD = window.Vue.computed, Qh = () => {
  const { currentTranslation: e } = zt(), { currentSourcePage: t } = Ye();
  return BD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, PD = window.Vuex.useStore, zc = () => {
  const e = PD(), { sourceSection: t, targetPageTitleForPublishing: n } = W(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), r = Qh();
  return () => {
    const c = n.value, d = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(g);
    i.forEach(
      (p) => TD(p, d)
    );
    const l = t.value.getTranslationProgress(a), u = e.getters["application/isSandboxTarget"];
    return it.saveTranslation({
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
      isSandbox: u,
      progress: l
    });
  };
}, FD = window.Vue.effectScope, MD = window.Vue.onScopeDispose, ND = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = FD(!0), n = o.run(() => e(...a))), MD(s), n);
}, UD = window.Vuex.useStore;
let bl;
const ID = () => {
  const e = UD(), t = zc();
  let n = 1e3, o = 0;
  return bl = Tc(() => t().then((a) => {
    a instanceof Vo ? (n *= o + 1, o++, setTimeout(bl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Do)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), bl;
}, ew = ND(ID), RD = window.Vuex.useStore, zD = () => {
  const e = RD(), t = ew(), { currentMTProvider: n } = ee(e), { sourceSection: o, currentProposedTranslation: s } = W(), { selectNextTranslationUnit: a } = No();
  return () => k(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, OD = window.Vuex.useStore, jD = () => {
  const e = OD(), t = ew();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, HD = window.Vuex.useStore, qD = window.Vue.computed, tw = () => {
  const e = HD(), t = Ce(), { currentTranslation: n } = zt(), { currentMTProvider: o, previousRoute: s } = ee(e), { currentTargetPage: a } = Ye(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: c,
    pageURLParameter: d,
    sectionURLParameter: g
  } = B(), i = We(), l = qD(() => {
    var _;
    const w = {
      translation_source_language: r.value,
      translation_target_language: c.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: d.value
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
      const f = n.value.targetSectionTitle;
      f && (w.translation_target_section = f);
    } else
      a.value && (w.translation_target_title = (_ = a.value) == null ? void 0 : _.title);
    return o.value && (w.translation_provider = K.getProviderForInstrumentation(o.value)), w;
  });
  return {
    logEditorOpenEvent: () => {
      var S;
      const w = t.currentRoute.value.meta.workflowStep, f = t.getRoutes().find(
        (C) => C.name === s.value
      ), y = ((S = f == null ? void 0 : f.meta) == null ? void 0 : S.workflowStep) || 0;
      return w > y ? i(ce({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(ce({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => i(ce({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => i(ce({
      event_type: "editor_segment_add"
    }, l.value))
  };
};
const se = window.Vue.unref, nt = window.Vue.createVNode, on = window.Vue.withCtx, GD = window.Vue.resolveDirective, Ep = window.Vue.createElementVNode, XD = window.Vue.withDirectives, WD = window.Vue.toDisplayString, KD = window.Vue.createTextVNode, YD = window.Vue.renderList, JD = window.Vue.Fragment, xn = window.Vue.openBlock, Lp = window.Vue.createElementBlock, So = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ZD = window.Vue.normalizeClass, QD = window.Vue.normalizeStyle, eA = { class: "sx-sentence-selector__header-title mb-0" }, tA = { class: "sx-sentence-selector__section-contents px-4" }, yo = window.Vue.computed, nA = window.Vue.nextTick, oA = window.Vue.onMounted, Qa = window.Vue.ref, Dp = window.Vue.watch, sA = window.Vuex.useStore, Ap = window.Codex.CdxButton, aA = window.Codex.CdxIcon, iA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Qa(!1), n = Qa(!1), o = Qa("100%"), s = sA(), { currentMTProvider: a } = ee(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: c
    } = B(), { sourceSection: d, selectedContentTranslationUnit: g } = W(), i = yo(
      () => s.state.application.translationDataLoadingCounter === 0
    ), l = yo(
      () => {
        var v;
        return (v = d.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), u = yo(() => {
      var v;
      return (v = d.value) == null ? void 0 : v.subSections;
    }), p = yo(
      () => {
        var v;
        return (v = d.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), m = yo(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: w,
      logEditorCloseWarnEvent: _,
      logEditorSegmentAddEvent: f
    } = tw(), y = $D();
    ED()().then(h);
    const C = AD();
    oA(() => {
      Dp(
        i,
        () => k(this, null, function* () {
          i.value && (yield nA(), y(), C());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Dp(g, C);
    const {
      selectNextTranslationUnit: x,
      selectPreviousTranslationUnit: T
    } = No(), V = zD(), F = () => {
      f(), V();
    }, I = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, M = Ce(), N = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        xe.value = !0, _();
        return;
      }
      lt();
    }, { fetchTranslationsByStatus: U } = ki(), ie = jD(), { clearTranslationURLParameters: J } = B(), { currentTranslation: Ot } = zt(), lt = () => k(this, null, function* () {
      U("draft"), Ot.value && (d.value.reset(), Ot.value.restored = !1), w(), J(), ie(), yield M.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: Me,
      translateSelectedTranslationUnitForAllProviders: dn
    } = Rc(), Vt = () => {
      he.value || (t.value = !0, dn());
    }, { getCurrentTitleByLanguage: ct } = un(), Z = (v, L) => {
      M.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: p.value,
          title: ct(
            c.value,
            r.value
          ),
          isInitialEdit: L || null
        }
      });
    }, jt = () => M.push({ name: "sx-publisher" }), Ne = () => k(this, null, function* () {
      g.value ? yield Me(
        g.value.id,
        a.value
      ) : yield Me(0, a.value);
    }), he = yo(
      () => g.value instanceof je
    ), xe = Qa(!1);
    return (v, L) => {
      const D = GD("i18n");
      return xn(), Lp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: QD(m.value)
      }, [
        nt(se(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: on(() => [
            nt(se(b), { shrink: "" }, {
              default: on(() => [
                nt(se(Ap), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: N
                }, {
                  default: on(() => [
                    nt(se(aA), { icon: se(bh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            nt(se(b), {
              grow: "",
              class: "px-1"
            }, {
              default: on(() => [
                XD(Ep("h4", eA, null, 512), [
                  [D, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            nt(se(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: on(() => [
                nt(se(Ap), {
                  disabled: !(se(d) && se(d).isTranslated),
                  onClick: jt
                }, {
                  default: on(() => [
                    KD(WD(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? (xn(), So(se(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: on(() => [
            nt(se(b), {
              dir: se(z.getDir)(se(r)),
              lang: se(r),
              class: "sx-sentence-selector__section"
            }, {
              default: on(() => [
                nt(HE),
                Ep("div", tA, [
                  (xn(!0), Lp(JD, null, YD(u.value, (A) => (xn(), So(PL, {
                    id: A.id,
                    key: `sub-section-${A.id}`,
                    "sub-section": A,
                    onBounceTranslation: I
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !he.value && l.value ? (xn(), So(xD, {
              key: 0,
              onEditTranslation: L[0] || (L[0] = (A) => Z(A, !1)),
              onSkipTranslation: se(x),
              onSelectPreviousSegment: se(T)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : he.value ? (xn(), So(eD, {
              key: 2,
              onEditTranslation: Z,
              onApplyTranslation: F,
              onSkipTranslation: se(x),
              onSelectPreviousSegment: se(T)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (xn(), So(kL, {
              key: 1,
              class: ZD({ "mb-0": !n.value }),
              onConfigureOptions: Vt,
              onEditTranslation: L[1] || (L[1] = (A) => Z(A, !0)),
              onApplyTranslation: F,
              onSkipTranslation: se(x),
              onSelectPreviousSegment: se(T),
              onRetryTranslation: Ne
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (xn(), So(se(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: on(() => [
            nt(se(qe), { class: "mt-0" })
          ]),
          _: 1
        })),
        nt(TE, {
          active: t.value,
          "onUpdate:active": L[2] || (L[2] = (A) => t.value = A)
        }, null, 8, ["active"]),
        nt(cE, {
          modelValue: xe.value,
          "onUpdate:modelValue": L[3] || (L[3] = (A) => xe.value = A),
          onDiscardTranslation: lt
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const rA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: iA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, lA = window.Vue.resolveComponent, cA = window.Vue.createVNode, uA = window.Vue.normalizeClass, dA = window.Vue.openBlock, gA = window.Vue.createElementBlock;
function pA(e, t, n, o, s, a) {
  const r = lA("sx-sentence-selector");
  return dA(), gA("main", {
    class: uA(["sx-sentence-selector-view", a.classes])
  }, [
    cA(r)
  ], 2);
}
const mA = /* @__PURE__ */ Y(rA, [["render", pA]]), hA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, wA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const fA = window.Vue.resolveDirective, ei = window.Vue.withDirectives, yt = window.Vue.openBlock, sn = window.Vue.createElementBlock, ti = window.Vue.createCommentVNode, ni = window.Vue.Transition, Xn = window.Vue.withCtx, Co = window.Vue.createVNode, Ss = window.Vue.createElementVNode, Wn = window.Vue.unref, _A = window.Vue.renderList, vA = window.Vue.Fragment, SA = window.Vue.normalizeClass, Tp = window.Vue.createBlock, yA = window.Vue.toDisplayString, CA = window.Vue.createTextVNode, kA = { class: "sx-quick-tutorial" }, bA = { class: "sx-quick-tutorial__main-point py-9 px-6" }, xA = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, $A = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, VA = { class: "sx-quick-tutorial__illustration" }, EA = ["innerHTML"], LA = ["innerHTML"], DA = { class: "sx-quick-tutorial__step-indicator py-3" }, AA = ["onClick"], TA = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, BA = {
  key: "secondary-point-1",
  class: "ma-0"
}, PA = {
  key: "secondary-point-2",
  class: "ma-0"
}, FA = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Bp = window.Vue.ref, Pp = window.Codex.CdxButton, MA = window.Codex.CdxIcon, NA = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Bp(2), n = Bp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (p) => p === n.value, a = Ce(), { isDesktop: r } = Pn(), c = Mc(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: g,
      pageURLParameter: i,
      sectionURLParameter: l
    } = B(), u = () => {
      if (r.value) {
        const p = { sourcesection: l.value };
        c(
          d.value,
          g.value,
          i.value,
          p
        );
      } else
        a.push({ name: "sx-sentence-selector" });
    };
    return (p, m) => {
      const h = fA("i18n");
      return yt(), sn("section", kA, [
        Co(Wn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Xn(() => [
            Ss("section", bA, [
              Co(ni, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? ei((yt(), sn("h2", xA, null, 512)), [
                    [h, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? ei((yt(), sn("h2", $A, null, 512)), [
                    [h, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ti("", !0)
                ]),
                _: 1
              })
            ]),
            Ss("section", VA, [
              Co(ni, { name: "mw-ui-animation-slide-start" }, {
                default: Xn(() => [
                  s(1) ? (yt(), sn("div", {
                    key: "illustration-1",
                    innerHTML: Wn(wA)
                  }, null, 8, EA)) : s(2) ? (yt(), sn("div", {
                    key: "illustration-2",
                    innerHTML: Wn(hA)
                  }, null, 8, LA)) : ti("", !0)
                ]),
                _: 1
              })
            ]),
            Ss("div", DA, [
              (yt(!0), sn(vA, null, _A(t.value, (w) => (yt(), sn("span", {
                key: `dot-${w}`,
                class: SA(["dot mx-1", { "dot-active": s(w) }]),
                role: "button",
                onClick: (_) => n.value = w
              }, null, 10, AA))), 128))
            ]),
            Ss("section", TA, [
              Co(ni, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? ei((yt(), sn("h3", BA, null, 512)), [
                    [h, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? ei((yt(), sn("h3", PA, null, 512)), [
                    [h, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ti("", !0)
                ]),
                _: 1
              })
            ]),
            Ss("div", FA, [
              Co(ni, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? (yt(), Tp(Wn(Pp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": p.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Xn(() => [
                      Co(Wn(MA), { icon: Wn(Gs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (yt(), Tp(Wn(Pp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: u
                  }, {
                    default: Xn(() => [
                      CA(yA(p.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : ti("", !0)
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
const UA = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: NA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, IA = window.Vue.resolveComponent, RA = window.Vue.createVNode, zA = window.Vue.normalizeClass, OA = window.Vue.openBlock, jA = window.Vue.createElementBlock;
function HA(e, t, n, o, s, a) {
  const r = IA("sx-quick-tutorial");
  return OA(), jA("main", {
    class: zA(["sx-quick-tutorial-view", a.classes])
  }, [
    RA(r)
  ], 2);
}
const qA = /* @__PURE__ */ Y(UA, [["render", HA]]);
const GA = window.Vue.resolveDirective, Fp = window.Vue.createElementVNode, XA = window.Vue.withDirectives, WA = window.Vue.unref, KA = window.Vue.withCtx, YA = window.Vue.createVNode, JA = window.Vue.openBlock, ZA = window.Vue.createElementBlock, QA = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, eT = { class: "sx-editor__original-content-panel__header mb-2" }, tT = ["lang", "dir", "innerHTML"], Mp = window.Vue.ref, nT = window.Vue.onMounted, oT = {
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
      const d = r.getElementsByTagName("a");
      for (const g of d)
        g.href = q.getPageUrl(c, g.title), g.target = "_blank";
    }, o = Mp(null), s = Mp(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return nT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, c) => {
      const d = GA("i18n");
      return JA(), ZA("section", QA, [
        XA(Fp("h5", eT, null, 512), [
          [d, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        YA(WA(A1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: KA(() => [
            Fp("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, tT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, sT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const aT = window.Vue.unref, ys = window.Vue.createElementVNode, Np = window.Vue.resolveDirective, xl = window.Vue.withDirectives, iT = window.Vue.normalizeClass, rT = window.Vue.openBlock, lT = window.Vue.createElementBlock, cT = window.Vue.createCommentVNode, uT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, dT = { class: "sx-editor__feedback-overlay-content px-4" }, gT = ["innerHTML"], pT = { class: "sx-editor__feedback-overlay-content__title" }, mT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, $l = window.Vue.computed, hT = window.Vuex.useStore, wT = {
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
    const t = e, { targetLanguage: n } = ee(hT()), o = $l(
      () => It.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = $l(() => {
      const r = It.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = $l(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, c) => {
      const d = Np("i18n"), g = Np("i18n-html");
      return e.showFeedback ? (rT(), lT("div", uT, [
        ys("div", dT, [
          ys("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: aT(sT)
          }, null, 8, gT),
          xl(ys("h2", pT, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          xl(ys("p", mT, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          xl(ys("p", {
            class: iT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : cT("", !0);
    };
  }
}, fT = window.Vuex.useStore, _T = () => {
  const e = fT(), t = zc(), { selectNextTranslationUnit: n } = No(), { sourceSection: o, selectedContentTranslationUnit: s } = W(), { getCurrentTitleByLanguage: a } = un();
  return (r) => k(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = r, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), r = c.innerHTML;
    const { sourceLanguage: d, targetLanguage: g, currentMTProvider: i } = e.state.application;
    s.value instanceof je && (r = (yield Qm(
      r,
      a(g, d),
      g
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const ze = window.Vue.unref, Vl = window.Vue.openBlock, El = window.Vue.createBlock, Up = window.Vue.createCommentVNode, Ip = window.Vue.createVNode, vT = window.Vue.createElementVNode, ST = window.Vue.withCtx, yT = { class: "sx-editor__editing-surface-container grow" }, Ll = window.Vue.ref, CT = window.Vue.computed, kT = window.Vuex.useStore, bT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Ll(!1), o = Ce(), s = kT(), a = () => n.value = !0, r = () => o.replace({ name: t.fromRoute }), { isFinalEdit: c, isInitialEdit: d, content: g, originalContent: i, title: l } = history.state, u = Ll(null), p = Ll(!1), { logEditorSegmentAddEvent: m } = tw(), { targetLanguage: h, sourceLanguage: w } = ee(s), { sourceSection: _ } = W(), f = CT(
      () => It.calculateScore(
        u.value,
        g,
        h.value
      )
    ), y = _T(), S = (C) => k(this, null, function* () {
      u.value = C, p.value = !0;
      const x = new Promise((V) => setTimeout(V, 2e3));
      let T = Promise.resolve();
      c ? _.value.editedTranslation = C : (f.value === 0 && d && m(), T = y(C)), yield Promise.all([x, T]), p.value = !1, r();
    });
    return (C, x) => (Vl(), El(ze(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: ST(() => [
        ze(i) ? (Vl(), El(oT, {
          key: 0,
          language: ze(w),
          dir: ze(z.getDir)(ze(w)),
          "original-content": ze(i)
        }, null, 8, ["language", "dir", "original-content"])) : Up("", !0),
        n.value ? Up("", !0) : (Vl(), El(ze(qe), { key: 1 })),
        vT("div", yT, [
          Ip(wT, {
            "edited-translation": u.value,
            "show-feedback": p.value,
            "proposed-translation": ze(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Ip(K$, {
            content: ze(g),
            language: ze(h),
            dir: ze(z.getDir)(ze(h)),
            title: ze(l),
            onReady: a,
            onClose: r,
            onEditCompleted: S
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const xT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: bT
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
}, $T = window.Vue.resolveComponent, VT = window.Vue.createVNode, ET = window.Vue.normalizeClass, LT = window.Vue.openBlock, DT = window.Vue.createElementBlock;
function AT(e, t, n, o, s, a) {
  const r = $T("sx-editor");
  return LT(), DT("main", {
    class: ET(["sx-editor-view", a.classes])
  }, [
    VT(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const TT = /* @__PURE__ */ Y(xT, [["render", AT]]);
const Mt = window.Vue.unref, Kn = window.Vue.createVNode, Cs = window.Vue.withCtx, BT = window.Vue.resolveDirective, PT = window.Vue.withDirectives, FT = window.Vue.openBlock, MT = window.Vue.createBlock, Rp = window.Codex.CdxButton, zp = window.Codex.CdxIcon, NT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Ce(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = BT("i18n");
      return FT(), MT(Mt(P), { class: "ma-0 sx-publisher__header" }, {
        default: Cs(() => [
          Kn(Mt(b), {
            shrink: "",
            class: "me-2"
          }, {
            default: Cs(() => [
              Kn(Mt(Rp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Cs(() => [
                  Kn(Mt(zp), { icon: Mt(Mo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          PT(Kn(Mt(b), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Kn(Mt(b), { shrink: "" }, {
            default: Cs(() => [
              Kn(Mt(Rp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: Cs(() => [
                  Kn(Mt(zp), { icon: Mt(_k) }, null, 8, ["icon"])
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
}, UT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, IT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Op = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Dl = window.Vue.createElementVNode, jp = window.Vue.toDisplayString, Al = window.Vue.unref, Tl = window.Vue.withCtx, Hp = window.Vue.createVNode, RT = window.Vue.openBlock, zT = window.Vue.createBlock, OT = window.Vue.createCommentVNode, jT = ["innerHTML"], HT = ["textContent"], qT = ["textContent"], Bl = window.Vue.computed, GT = {
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
        svg: UT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: IT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Op,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Op,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Bl(() => o[n.status].svg), a = Bl(() => o[n.status].title), r = Bl(() => o[n.status].subtitle);
    return (c, d) => e.active ? (RT(), zT(Al(rt), {
      key: 0,
      "overlay-opacity": "high",
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Tl(() => [
        Hp(Al(P), { class: "ma-4" }, {
          default: Tl(() => [
            Hp(Al(b), null, {
              default: Tl(() => [
                Dl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, jT),
                Dl("h2", {
                  textContent: jp(a.value)
                }, null, 8, HT),
                Dl("p", {
                  class: "ma-0",
                  textContent: jp(r.value)
                }, null, 8, qT)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : OT("", !0);
  }
};
const Oe = window.Vue.unref, Ct = window.Vue.createVNode, an = window.Vue.withCtx, XT = window.Vue.resolveDirective, WT = window.Vue.withDirectives, qp = window.Vue.toDisplayString, KT = window.Vue.createTextVNode, Pl = window.Vue.openBlock, Gp = window.Vue.createElementBlock, YT = window.Vue.createCommentVNode, nw = window.Vue.createElementVNode, JT = window.Vue.createBlock, ZT = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, QT = ["src"], e6 = ["textContent"], t6 = /* @__PURE__ */ nw("p", { class: "mt-0" }, null, -1), n6 = window.Vue.computed, o6 = window.Vue.inject, s6 = window.Vue.ref, Xp = window.Codex.CdxButton, a6 = window.Codex.CdxIcon, i6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Ym,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = s6(""), s = () => n("close"), a = () => n("publish", o.value), r = o6("breakpoints"), c = n6(() => r.value.mobile);
    return (d, g) => {
      const i = XT("i18n");
      return e.active && e.captchaDetails ? (Pl(), JT(Oe(rt), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: an(() => [
          Ct(Oe(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: an(() => [
              Ct(Oe(b), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: an(() => [
                  Ct(Oe(Xp), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": d.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: an(() => [
                      Ct(Oe(a6), { icon: Oe(Mo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              WT(Ct(Oe(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ct(Oe(b), {
                shrink: "",
                class: "justify-center"
              }, {
                default: an(() => [
                  Ct(Oe(Xp), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: an(() => [
                      KT(qp(d.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ct(Oe(di))
        ]),
        default: an(() => [
          nw("div", ZT, [
            e.captchaDetails.type === "image" ? (Pl(), Gp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, QT)) : (Pl(), Gp("p", {
              key: 1,
              textContent: qp(e.captchaDetails.question)
            }, null, 8, e6)),
            t6,
            Ct(Oe(P), { class: "ma-0" }, {
              default: an(() => [
                Ct(Oe(b), null, {
                  default: an(() => [
                    Ct(Oe(Gl), {
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
      }, 8, ["fullscreen"])) : YT("", !0);
    };
  }
};
const Yn = window.Vue.unref, ks = window.Vue.createVNode, oi = window.Vue.withCtx, Jn = window.Vue.createElementVNode, r6 = window.Vue.resolveDirective, l6 = window.Vue.withDirectives, c6 = window.Vue.renderList, Wp = window.Vue.Fragment, Fl = window.Vue.openBlock, Kp = window.Vue.createElementBlock, u6 = window.Vue.toDisplayString, d6 = window.Vue.normalizeClass, g6 = window.Vue.createBlock, p6 = { class: "mw-ui-dialog__header" }, m6 = { class: "row ma-0 px-4 py-3" }, h6 = { class: "col shrink justify-center" }, w6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, f6 = { class: "mb-0" }, _6 = { class: "pa-4" }, v6 = ["textContent"], S6 = window.Vuex.useStore, bs = window.Vue.computed, y6 = window.Codex.CdxButton, C6 = window.Codex.CdxIcon, k6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = S6(), s = bs(() => o.state.application.publishTarget), a = bs(() => o.state.translator.isAnon), r = de(), { sourceSection: c } = W(), d = bs(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), g = bs(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = bs(() => [
      {
        label: d.value,
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
    ]), l = (m) => m === i.value.length - 1 ? "mb-1" : "mb-4", u = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), u();
    };
    return (m, h) => {
      const w = r6("i18n");
      return Fl(), g6(Yn(rt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: u
      }, {
        header: oi(() => [
          Jn("div", p6, [
            Jn("div", m6, [
              Jn("div", h6, [
                ks(Yn(y6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: u
                }, {
                  default: oi(() => [
                    ks(Yn(C6), { icon: Yn(bh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Jn("div", w6, [
                l6(Jn("h4", f6, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ks(Yn(di))
          ])
        ]),
        default: oi(() => [
          Jn("div", _6, [
            ks(Yn(r1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: oi(() => [
                (Fl(!0), Kp(Wp, null, c6(i.value, (_, f) => (Fl(), Kp(Wp, {
                  key: _.label
                }, [
                  ks(Yn(Xl), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Jn("p", {
                    class: d6(["complementary ms-7 mt-0", l(f)]),
                    textContent: u6(_.details)
                  }, null, 10, v6)
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
const kt = window.Vue.unref, Zn = window.Vue.createVNode, b6 = window.Vue.resolveDirective, Yp = window.Vue.withDirectives, si = window.Vue.openBlock, Jp = window.Vue.createElementBlock, x6 = window.Vue.createCommentVNode, Zp = window.Vue.toDisplayString, Ml = window.Vue.createElementVNode, ko = window.Vue.withCtx, Qp = window.Vue.createBlock, $6 = window.Vue.Fragment, V6 = window.Vue.normalizeClass, E6 = { class: "sx-publisher__review-info__content" }, L6 = {
  key: 0,
  class: "complementary ma-0"
}, D6 = ["textContent"], A6 = ["textContent"], $n = window.Vue.computed, em = window.Vue.ref, T6 = window.Vue.watch, tm = window.Codex.CdxButton, Nl = window.Codex.CdxIcon, B6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = em(0), o = em(null);
    T6(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = $n(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = $n(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = $n(() => {
      switch (a.value) {
        case "warning":
          return Ch;
        case "error":
          return wk;
        default:
          return Sk;
      }
    }), c = $n(() => a.value === "default"), d = $n(
      () => c.value ? "notice" : a.value
    ), g = $n(
      () => `sx-publisher__review-info--${d.value}`
    ), i = de(), l = $n(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), u = $n(
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
    return (h, w) => {
      const _ = b6("i18n-html");
      return si(), Qp(kt(T0), {
        type: d.value,
        class: V6(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: c.value
      }, {
        icon: ko(() => [
          Zn(kt(Nl), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: ko(() => [
          Ml("div", E6, [
            a.value === "default" ? Yp((si(), Jp("p", L6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (si(), Jp($6, { key: 1 }, [
              Ml("h5", {
                textContent: Zp(u.value)
              }, null, 8, D6),
              Ml("p", {
                textContent: Zp(l.value)
              }, null, 8, A6),
              Zn(kt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: ko(() => [
                  Yp(Zn(kt(b), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (si(), Qp(kt(b), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: ko(() => [
                      Zn(kt(tm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: ko(() => [
                          Zn(kt(Nl), { icon: kt(Dc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Zn(kt(tm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: ko(() => [
                          Zn(kt(Nl), { icon: kt(Gs) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : x6("", !0)
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
}, P6 = (e) => {
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
}, F6 = window.Vuex.useStore, M6 = window.Vue.computed, N6 = () => {
  const e = F6(), { currentTranslation: t } = zt(), { currentMTProvider: n, previousRoute: o } = ee(e), { currentTargetPage: s } = Ye(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    sectionURLParameter: d
  } = B(), { sourceSection: g } = W(), i = We(), l = M6(() => {
    var w;
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
    if (d.value ? (h.translation_source_section = d.value, h.translation_type = "section") : h.translation_type = "article", t.value) {
      h.translation_id = t.value.translationId, h.translation_target_title = t.value.targetTitle;
      const _ = t.value.targetSectionTitle;
      _ && (h.translation_target_section = _);
    } else
      s.value && (h.translation_target_title = (w = s.value) == null ? void 0 : w.title);
    return n.value && (h.translation_provider = K.getProviderForInstrumentation(n.value)), h.human_modification_rate = It.getMTScoreForPageSection(
      g.value,
      r.value
    ) / 100, h.human_modification_threshold = It.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(ce({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, w) => i(ce({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: w
    }, l.value)),
    logPublishFailureEvent: () => i(ce({
      event_type: "publish_failure"
    }, l.value))
  };
}, nm = window.Vue.ref, U6 = window.Vuex.useStore, I6 = () => {
  const e = U6(), { pageURLParameter: t } = B(), { sourceSection: n, targetPageTitleForPublishing: o } = W(), s = Qh(), a = nm(!1), r = nm("pending"), c = () => a.value = !1, d = zc(), {
    logPublishAttemptEvent: g,
    logPublishSuccessEvent: i,
    logPublishFailureEvent: l
  } = N6(), u = (m, h) => k(void 0, null, function* () {
    g();
    const w = yield d();
    if (w instanceof Vo)
      return l(), { publishFeedbackMessage: w, targetUrl: null };
    const _ = w, {
      /** @type {PageSection} */
      sourceLanguage: f,
      targetLanguage: y
    } = e.state.application, S = o.value, C = e.getters["application/isSandboxTarget"], x = {
      html: P6(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: S,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: f,
      targetLanguage: y,
      revision: s.value,
      isSandbox: C,
      sectionTranslationId: _
    };
    m && (x.captchaId = m, x.captchaWord = h);
    const T = yield it.publishTranslation(
      x
    );
    return T.publishFeedbackMessage === null ? i(T.pageId, T.revisionId) : l(), T;
  });
  return {
    closePublishDialog: c,
    doPublish: (m = null, h = null) => k(void 0, null, function* () {
      r.value = "pending", a.value = !0;
      let w;
      try {
        w = yield u(
          h == null ? void 0 : h.id,
          m
        );
      } catch (_) {
        if (_ instanceof Do)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw _;
      }
      return w;
    }),
    isPublishDialogActive: a,
    publishStatus: r
  };
}, R6 = window.Vue.computed, z6 = () => {
  const e = Ce(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = un(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = R6(
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
}, O6 = window.Vuex.useStore, j6 = () => {
  const e = O6(), { targetLanguage: t } = ee(e), { sourceSection: n } = W();
  return () => {
    const o = It.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = It.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, r = s === "failure" ? "error" : "warning";
    let c, d;
    return r === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Vo({
      title: c,
      text: d,
      status: r,
      type: "mt"
    });
  };
}, H6 = window.Vue.ref, q6 = window.Vue.computed, G6 = () => {
  const e = j6(), t = H6([]), n = q6(
    () => t.value.some((r) => r.isError)
  );
  return {
    addPublishFeedbackMessage: (r) => {
      t.value.push(r), t.value.sort((c, d) => +d.isError - +c.isError);
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
}, X6 = window.Vuex.useStore, W6 = () => {
  const e = X6(), { currentSourcePage: t } = Ye(), { sourceLanguage: n, targetLanguage: o } = ee(e), { sourceSection: s, targetPageTitleForPublishing: a } = W();
  return (r) => k(void 0, null, function* () {
    const c = a.value, d = e.getters["application/isSandboxTarget"], g = t.value.title, i = new mw.Title(g), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !d && i.getNamespaceId() !== l.user)
      try {
        yield Si.addWikibaseLink(
          n.value,
          o.value,
          g,
          c
        );
      } catch (u) {
        mw.log.error("Error while adding wikibase link", u);
      }
    if (!r) {
      const u = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(u), new Error(u);
    }
    location.href = r;
  });
}, om = window.Vue.ref, K6 = () => {
  const e = om(!1), t = om(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const pe = window.Vue.unref, Pe = window.Vue.createVNode, Y6 = window.Vue.resolveDirective, xs = window.Vue.createElementVNode, J6 = window.Vue.withDirectives, bo = window.Vue.withCtx, Z6 = window.Vue.openBlock, Q6 = window.Vue.createElementBlock, e9 = { class: "sx-publisher" }, t9 = { class: "sx-publisher__publish-panel pa-4" }, n9 = { class: "mb-2" }, o9 = ["innerHTML"], s9 = { class: "sx-publisher__section-preview pa-5" }, a9 = ["innerHTML"], sm = window.Vue.computed, i9 = window.Vue.onMounted, r9 = window.Vue.ref, l9 = window.Vue.watch, c9 = window.Vuex.useStore, am = window.Codex.CdxButton, im = window.Codex.CdxIcon, u9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = c9(), { sourceSection: n } = W(), o = sm(() => {
      var V;
      return (V = n.value) == null ? void 0 : V.title;
    }), s = de(), a = sm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: c,
      handleCaptchaError: d,
      onCaptchaDialogClose: g
    } = K6(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: u,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = G6(), h = W6(), { doPublish: w, isPublishDialogActive: _, publishStatus: f, closePublishDialog: y } = I6(), S = (V = null) => k(this, null, function* () {
      if (l.value)
        return;
      const F = yield w(V, r);
      if (!F)
        return;
      const { publishFeedbackMessage: I, targetUrl: M } = F;
      if (d(I)) {
        y();
        return;
      } else
        I && u(I);
      f.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          y();
          return;
        }
        h(M);
      }, 1e3);
    });
    i9(() => m());
    const C = z6(), x = r9(!1), T = () => x.value = !0;
    return l9(x, (V) => {
      V || (p(), m());
    }), (V, F) => {
      const I = Y6("i18n");
      return Z6(), Q6("section", e9, [
        Pe(NT, {
          "is-publishing-disabled": pe(l),
          onPublishTranslation: S
        }, null, 8, ["is-publishing-disabled"]),
        xs("div", t9, [
          J6(xs("h5", n9, null, 512), [
            [I, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          xs("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, o9),
          Pe(pe(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: bo(() => [
              Pe(pe(b), { shrink: "" }, {
                default: bo(() => [
                  Pe(pe(am), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: T
                  }, {
                    default: bo(() => [
                      Pe(pe(im), { icon: pe($k) }, null, 8, ["icon"])
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
        Pe(B6, { "publish-feedback-messages": pe(i) }, null, 8, ["publish-feedback-messages"]),
        xs("section", s9, [
          Pe(pe(P), { class: "pb-5 ma-0" }, {
            default: bo(() => [
              Pe(pe(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Pe(pe(b), { shrink: "" }, {
                default: bo(() => [
                  Pe(pe(am), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: pe(C)
                  }, {
                    default: bo(() => [
                      Pe(pe(im), { icon: pe(Vc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          xs("div", {
            innerHTML: pe(n).translationHtml
          }, null, 8, a9)
        ]),
        Pe(k6, {
          active: x.value,
          "onUpdate:active": F[0] || (F[0] = (M) => x.value = M)
        }, null, 8, ["active"]),
        Pe(i6, {
          active: pe(c),
          "captcha-details": pe(r),
          onClose: pe(g),
          onPublish: F[1] || (F[1] = (M) => S(M))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Pe(GT, {
          active: pe(_),
          status: pe(f)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const d9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: u9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, g9 = window.Vue.resolveComponent, p9 = window.Vue.createVNode, m9 = window.Vue.normalizeClass, h9 = window.Vue.openBlock, w9 = window.Vue.createElementBlock;
function f9(e, t, n, o, s, a) {
  const r = g9("sx-publisher");
  return h9(), w9("main", {
    class: m9(["sx-publisher-view", a.classes])
  }, [
    p9(r)
  ], 2);
}
const _9 = /* @__PURE__ */ Y(d9, [["render", f9]]);
const bt = window.Vue.unref, Vn = window.Vue.createVNode, Qn = window.Vue.withCtx, Ul = window.Vue.toDisplayString, Il = window.Vue.createElementVNode, v9 = window.Vue.openBlock, S9 = window.Vue.createBlock, y9 = ["textContent"], C9 = ["textContent"], k9 = ["textContent"], ow = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Po,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (v9(), S9(bt(P), {
      class: "cx-search-suggestion pt-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: bt(z.getDir)(e.suggestion.language)
    }, {
      default: Qn(() => [
        Vn(bt(b), { shrink: "" }, {
          default: Qn(() => [
            Vn(bt(uc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Vn(bt(b), { class: "ms-4" }, {
          default: Qn(() => [
            Vn(bt(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Qn(() => [
                Vn(bt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    Il("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Ul(e.suggestion.title)
                    }, null, 8, y9)
                  ]),
                  _: 1
                }),
                Vn(bt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    Il("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Ul(e.suggestion.description)
                    }, null, 8, C9)
                  ]),
                  _: 1
                }),
                Vn(bt(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Qn(() => [
                    Vn(bt(Le), {
                      icon: bt(Wf),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Il("small", {
                      textContent: Ul(e.suggestion.langLinksCount)
                    }, null, 8, k9)
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
const $s = window.Vue.unref, Vs = window.Vue.openBlock, Rl = window.Vue.createBlock, b9 = window.Vue.createCommentVNode, x9 = window.Vue.resolveDirective, $9 = window.Vue.withDirectives, rm = window.Vue.createElementBlock, V9 = window.Vue.renderList, E9 = window.Vue.Fragment, L9 = window.Vue.withCtx, D9 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, lm = window.Vue.computed, A9 = {
  __name: "SearchResultsCard",
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguageURLParameter: t } = B(), n = lm(() => z.getAutonym(t.value)), o = e, s = lm(() => o.searchInput), { searchResultsLoading: a, searchResultsSlice: r } = Oh(
      t,
      s
    );
    return (c, d) => {
      const g = x9("i18n");
      return Vs(), Rl($s(He), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: L9(() => [
          $s(a) ? (Vs(), Rl($s(qe), { key: 0 })) : $s(r).length === 0 ? $9((Vs(), rm("p", D9, null, 512)), [
            [g, [
              s.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : b9("", !0),
          (Vs(!0), rm(E9, null, V9($s(r), (i) => (Vs(), Rl(ow, {
            key: i.pageid,
            suggestion: i,
            onClick: (l) => c.$emit("suggestion-clicked", i)
          }, null, 8, ["suggestion", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const T9 = window.Vue.toDisplayString, B9 = window.Vue.createElementVNode, P9 = window.Vue.renderList, F9 = window.Vue.Fragment, zl = window.Vue.openBlock, M9 = window.Vue.createElementBlock, cm = window.Vue.createBlock, N9 = window.Vue.unref, um = window.Vue.withCtx, U9 = ["textContent"], dm = {
  __name: "ArticleSuggestionsCard",
  props: {
    cardTitle: {
      type: String,
      required: !0
    },
    suggestions: {
      type: Array,
      required: !0
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    return (t, n) => (zl(), cm(N9(He), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: um(() => [
        B9("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: T9(e.cardTitle)
        }, null, 8, U9)
      ]),
      default: um(() => [
        (zl(!0), M9(F9, null, P9(e.suggestions, (o) => (zl(), cm(ow, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, I9 = window.Vue.computed, R9 = (e, t) => I9(() => {
  const o = {
    value: "other",
    props: {
      icon: Zf,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (r, c) => s.findIndex((d) => d === r) === c
  ).map((r) => ({
    value: r,
    props: {
      label: z.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), z9 = window.Vue.computed, O9 = () => {
  const { supportedLanguageCodes: e } = To(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return { getSuggestedSourceLanguages: (s) => z9(() => {
    const a = (navigator.language || "").split("-")[0], r = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((d) => d.split("-")[0]), c = [
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      a,
      ...s.value,
      ...r
    ];
    return [...new Set(c)].filter(
      (d) => d !== t.value && d !== n.value && e.value.includes(d)
    );
  }) };
};
const j9 = window.Vue.resolveDirective, H9 = window.Vue.createElementVNode, Ol = window.Vue.withDirectives, Fe = window.Vue.unref, Es = window.Vue.withCtx, Nt = window.Vue.createVNode, Ls = window.Vue.openBlock, gm = window.Vue.createBlock, q9 = window.Vue.createCommentVNode, jl = window.Vue.createElementBlock, G9 = window.Vue.Fragment, X9 = window.Vue.vShow, W9 = { class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto" }, K9 = { class: "mb-0" }, Y9 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, Ds = window.Vue.ref, J9 = window.Vue.onMounted, Hl = window.Vue.computed, pm = window.Vue.watch, Z9 = window.Vue.inject, Q9 = window.Vuex.useStore, eB = window.Codex.CdxButton, tB = window.Codex.CdxIcon, nB = window.Codex.CdxSearchInput, oB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Ds(""), n = Ds(!1), o = Ds(null), s = Ds(!1), a = Ds([]), r = Q9(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d
    } = B(), { supportedLanguageCodes: g } = To(), { getSuggestedSourceLanguages: i } = O9(), l = i(a), u = R9(
      c,
      l
    ), p = Ce(), { fetchAllTranslations: m } = ki();
    J9(() => k(this, null, function* () {
      var N;
      m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (U) {
      }
      (N = o.value) == null || N.focus();
    }));
    const h = () => {
      p.push({ name: "dashboard" });
    }, w = Wm(), _ = (N) => w(N, d.value), f = (N) => {
      if (N === "other") {
        s.value = !0;
        return;
      }
      _(N);
    };
    pm(c, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const y = We();
    pm(t, () => {
      n.value || (n.value = !0, y({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: d.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, C = (N) => {
      s.value = !1, a.value.push(c.value), f(N);
    }, x = Hl(
      () => r.getters["mediawiki/getRecentlyEditedPages"]
    ), T = Hl(() => r.getters["mediawiki/getNearbyPages"]), V = Z9("breakpoints"), F = Hl(() => V.value.tabletAndDown), I = Xs(), M = (N, U) => I(
      N.title,
      c.value,
      d.value,
      U
    );
    return (N, U) => {
      const ie = j9("i18n");
      return Ls(), jl("section", W9, [
        Nt(Fe(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Es(() => [
            Nt(Fe(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Es(() => [
                Ol(H9("h5", K9, null, 512), [
                  [ie, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Nt(Fe(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Es(() => [
                Nt(Fe(eB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": N.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: h
                }, {
                  default: Es(() => [
                    Nt(Fe(tB), { icon: Fe(Mo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Nt(Fe(nB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": U[0] || (U[0] = (J) => t.value = J),
          class: "sx-article-search__search-input",
          placeholder: N.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Nt(Fe(Us), {
          class: "sx-article-search__language-button-group",
          items: Fe(u),
          active: Fe(c),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? q9("", !0) : (Ls(), jl(G9, { key: 0 }, [
          x.value && x.value.length ? (Ls(), gm(dm, {
            key: 0,
            "card-title": N.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: x.value,
            onSuggestionClicked: U[1] || (U[1] = (J) => M(J, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : T.value && T.value.length ? (Ls(), gm(dm, {
            key: 1,
            "card-title": N.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: T.value,
            onSuggestionClicked: U[2] || (U[2] = (J) => M(J, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : Ol((Ls(), jl("p", Y9, null, 512)), [
            [ie, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Ol(Nt(A9, {
          "search-input": t.value,
          onSuggestionClicked: U[3] || (U[3] = (J) => M(J, "search_result"))
        }, null, 8, ["search-input"]), [
          [X9, !!t.value]
        ]),
        Nt(Fe(rt), {
          value: s.value,
          "onUpdate:value": U[4] || (U[4] = (J) => s.value = J),
          class: "sx-article-search-language-selector",
          fullscreen: F.value,
          header: F.value,
          title: N.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: Es(() => [
            Nt(Fe(Uh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: Fe(g),
              suggestions: Fe(l),
              placeholder: N.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: C,
              onClose: S
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const sB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: oB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, aB = window.Vue.resolveComponent, iB = window.Vue.createVNode, rB = window.Vue.normalizeClass, lB = window.Vue.openBlock, cB = window.Vue.createElementBlock;
function uB(e, t, n, o, s, a) {
  const r = aB("sx-article-search");
  return lB(), cB("main", {
    class: rB(["sx-article-search-view", a.classes])
  }, [
    iB(r)
  ], 2);
}
const dB = /* @__PURE__ */ Y(sB, [["render", uB]]), gB = () => {
  const e = Xs(), t = Xh(), { logDashboardOpenEvent: n, getEventSource: o } = Hh(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = B();
  return () => k(void 0, null, function* () {
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
}, pB = window.Vuex.useStore, sw = [
  {
    path: "",
    name: "dashboard",
    component: hg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: dB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: SV,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: R3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: tE,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: qA,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: mA,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: TT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: _9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: hg,
    meta: { workflowStep: 0 }
  }
], Oc = MC({
  history: Fy(),
  routes: sw
});
Oc.beforeEach((e, t, n) => {
  const o = pB(), s = gB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c
  } = B();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || vm.assertUser().catch((u) => {
    u instanceof Do && o.commit("application/setIsLoginDialogOn", !0);
  }), e.query.force) {
    n();
    return;
  }
  const d = !!(a.value && r.value && c.value);
  if (!t.name && d) {
    s(), e.name === "sx-translation-confirmer" ? n() : n({ name: "sx-translation-confirmer" });
    return;
  }
  const g = t.meta.workflowStep, i = e.meta.workflowStep;
  if (isNaN(g) && i >= 1) {
    n({ name: "dashboard" });
    return;
  }
  if (Math.ceil(i) - Math.floor(g) > 1) {
    const u = Math.ceil(i) - 1, p = sw.find(
      (m) => m.meta.workflowStep === u
    );
    n({ name: p.name });
    return;
  }
  n();
});
Oc.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const mB = window.Vue.createApp, hB = mw.config.get("wgUserLanguage"), wB = "en", fB = mw.messages.values || {}, Uo = mB(hS);
Uo.use(Oc);
Uo.use(oy);
Uo.use(O1);
Uo.use(z1);
const _B = v_({
  locale: hB,
  finalFallback: wB,
  messages: fB,
  wikilinks: !0
});
Uo.use(_B);
Uo.mount("#contenttranslation");
