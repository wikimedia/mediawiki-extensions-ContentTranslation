var $w = Object.defineProperty, Vw = Object.defineProperties;
var Ew = Object.getOwnPropertyDescriptors;
var au = Object.getOwnPropertySymbols;
var Lw = Object.prototype.hasOwnProperty, Aw = Object.prototype.propertyIsEnumerable;
var iu = (e, t, n) => t in e ? $w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fe = (e, t) => {
  for (var n in t || (t = {}))
    Lw.call(t, n) && iu(e, n, t[n]);
  if (au)
    for (var n of au(t))
      Aw.call(t, n) && iu(e, n, t[n]);
  return e;
}, ot = (e, t) => Vw(e, Ew(t));
var C = (e, t, n) => new Promise((o, s) => {
  var a = (d) => {
    try {
      c(n.next(d));
    } catch (g) {
      s(g);
    }
  }, i = (d) => {
    try {
      c(n.throw(d));
    } catch (g) {
      s(g);
    }
  }, c = (d) => d.done ? o(d.value) : Promise.resolve(d.value).then(a, i);
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
}, Dw = {
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
}, Tw = window.Vue.toDisplayString, zi = window.Vue.openBlock, Oi = window.Vue.createElementBlock, Bw = window.Vue.createCommentVNode, ru = window.Vue.createElementVNode, Pw = window.Vue.normalizeClass, Fw = ["width", "height", "aria-labelledby"], Mw = ["id"], Nw = ["fill"], Uw = ["d"];
function Iw(e, t, n, o, s, a) {
  return zi(), Oi("span", {
    class: Pw(["mw-ui-icon notranslate", a.classes])
  }, [
    (zi(), Oi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (zi(), Oi("title", {
        key: 0,
        id: n.iconName
      }, Tw(n.iconName), 9, Mw)) : Bw("", !0),
      ru("g", { fill: n.iconColor }, [
        ru("path", { d: a.iconImagePath }, null, 8, Uw)
      ], 8, Nw)
    ], 8, Fw))
  ], 2);
}
const Ie = /* @__PURE__ */ ne(Dw, [["render", Iw]]);
const Rw = {
  name: "MwButton",
  components: {
    MwIcon: Ie
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
}, zw = window.Vue.renderSlot, Ow = window.Vue.resolveComponent, lu = window.Vue.normalizeClass, aa = window.Vue.openBlock, ji = window.Vue.createBlock, Hi = window.Vue.createCommentVNode, jw = window.Vue.toDisplayString, Hw = window.Vue.createElementBlock, qw = window.Vue.toHandlerKey, Gw = window.Vue.withModifiers, Xw = window.Vue.mergeProps, Ww = window.Vue.createElementVNode, Kw = window.Vue.resolveDynamicComponent, Yw = window.Vue.withCtx, Jw = { class: "mw-ui-button__content" }, Qw = ["textContent"];
function Zw(e, t, n, o, s, a) {
  const i = Ow("mw-icon");
  return aa(), ji(Kw(a.component), {
    class: lu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Yw(() => [
      zw(e.$slots, "default", {}, () => [
        Ww("span", Jw, [
          n.icon ? (aa(), ji(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: lu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Hi("", !0),
          !a.isIcon && n.label ? (aa(), Hw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: jw(n.label)
          }, null, 8, Qw)) : Hi("", !0),
          n.indicator ? (aa(), ji(i, Xw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [qw(a.indicatorClickEvent)]: t[0] || (t[0] = Gw((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Hi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Fe = /* @__PURE__ */ ne(Rw, [["render", Zw]]);
const ef = {
  name: "MwButtonGroup",
  components: {
    MwButton: Fe
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
}, tf = window.Vue.renderList, nf = window.Vue.Fragment, qi = window.Vue.openBlock, cu = window.Vue.createElementBlock, of = window.Vue.resolveComponent, sf = window.Vue.withModifiers, af = window.Vue.mergeProps, rf = window.Vue.createBlock, lf = { class: "row mw-ui-button-group ma-0 pa-0" };
function cf(e, t, n, o, s, a) {
  const i = of("mw-button");
  return qi(), cu("div", lf, [
    (qi(!0), cu(nf, null, tf(n.items, (c) => (qi(), rf(i, af({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: sf((d) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const qs = /* @__PURE__ */ ne(ef, [["render", cf]]);
const uf = {
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
}, uu = window.Vue.renderSlot, df = window.Vue.toDisplayString, du = window.Vue.openBlock, gu = window.Vue.createElementBlock, gf = window.Vue.createCommentVNode, pf = window.Vue.createElementVNode, mf = { class: "mw-ui-card" }, hf = ["textContent"], wf = { class: "mw-ui-card__content" };
function ff(e, t, n, o, s, a) {
  return du(), gu("div", mf, [
    uu(e.$slots, "header", {}, () => [
      n.title ? (du(), gu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: df(n.title)
      }, null, 8, hf)) : gf("", !0)
    ]),
    pf("div", wf, [
      uu(e.$slots, "default")
    ])
  ]);
}
const Ye = /* @__PURE__ */ ne(uf, [["render", ff]]);
const _f = {}, vf = window.Vue.openBlock, Sf = window.Vue.createElementBlock, yf = { class: "mw-ui-divider row" };
function Cf(e, t) {
  return vf(), Sf("div", yf);
}
const yi = /* @__PURE__ */ ne(_f, [["render", Cf]]);
const bf = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, kf = window.Vue.renderSlot, xf = window.Vue.resolveDynamicComponent, $f = window.Vue.withCtx, Vf = window.Vue.openBlock, Ef = window.Vue.createBlock;
function Lf(e, t, n, o, s, a) {
  return Vf(), Ef(xf(n.tag), { class: "mw-grid container" }, {
    default: $f(() => [
      kf(e.$slots, "default")
    ]),
    _: 3
  });
}
const Af = /* @__PURE__ */ ne(bf, [["render", Lf]]), Df = {
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
}, Tf = window.Vue.renderSlot, Bf = window.Vue.resolveDynamicComponent, Pf = window.Vue.normalizeClass, Ff = window.Vue.withCtx, Mf = window.Vue.openBlock, Nf = window.Vue.createBlock;
function Uf(e, t, n, o, s, a) {
  return Mf(), Nf(Bf(n.tag), {
    class: Pf(a.classes)
  }, {
    default: Ff(() => [
      Tf(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const F = /* @__PURE__ */ ne(Df, [["render", Uf]]), oc = ["mobile", "tablet", "desktop", "desktop-wide"], If = oc.reduce(
  (e, t) => ot(fe({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Rf = {
  name: "MwCol",
  props: ot(fe({}, If), {
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
      for (let n = 0; n < oc.length; n++) {
        let o = oc[n], s = this.$props[o];
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
}, zf = window.Vue.renderSlot, Of = window.Vue.resolveDynamicComponent, jf = window.Vue.normalizeClass, Hf = window.Vue.withCtx, qf = window.Vue.openBlock, Gf = window.Vue.createBlock;
function Xf(e, t, n, o, s, a) {
  return qf(), Gf(Of(n.tag), {
    class: jf(a.classes)
  }, {
    default: Hf(() => [
      zf(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const b = /* @__PURE__ */ ne(Rf, [["render", Xf]]), Wf = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Kf = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ci = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Yf = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Jf = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Sm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Qf = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Zf = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Gs = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", e0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", t0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", n0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", pu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", o0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", ym = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", s0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", a0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", i0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", r0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", l0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", c0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, wi = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, u0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Cm = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, d0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, bm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", g0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Gi = window.Vue.computed, p0 = window.Vue.watch, m0 = window.Vue.ref, h0 = window.Vue.nextTick, w0 = {
  name: "MwDialog",
  components: {
    MwButton: Fe,
    MwRow: F,
    MwCol: b,
    MwDivider: yi
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
    const n = m0(null), o = Gi(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Gi(() => ({
      "mw-ui-dialog__overlay--high_opacity": e.overlayOpacity === "high"
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    p0(
      () => e.value,
      (d) => {
        d ? (i(), h0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Gi(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayClasses: s,
      mwIconClose: Gs,
      root: n
    };
  }
}, mu = window.Vue.normalizeClass, Xi = window.Vue.createElementVNode, Wi = window.Vue.renderSlot, ia = window.Vue.resolveComponent, Ho = window.Vue.createVNode, Ki = window.Vue.withCtx, hu = window.Vue.createCommentVNode, f0 = window.Vue.withKeys, wu = window.Vue.openBlock, _0 = window.Vue.createElementBlock, v0 = window.Vue.Transition, S0 = window.Vue.normalizeStyle, y0 = window.Vue.createBlock, C0 = { class: "mw-ui-dialog__shell items-stretch" }, b0 = { class: "mw-ui-dialog__body" };
function k0(e, t, n, o, s, a) {
  const i = ia("mw-col"), c = ia("mw-button"), d = ia("mw-row"), g = ia("mw-divider");
  return wu(), y0(v0, {
    name: "mw-ui-animation-fade",
    style: S0(o.cssVars)
  }, {
    default: Ki(() => [
      n.value ? (wu(), _0("div", {
        key: 0,
        ref: "root",
        class: mu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = f0((r) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Xi("div", {
          class: mu(["mw-ui-dialog__overlay", o.overlayClasses]),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close())
        }, null, 2),
        Xi("div", C0, [
          n.header ? Wi(e.$slots, "header", { key: 0 }, () => [
            Ho(d, { class: "mw-ui-dialog__header" }, {
              default: Ki(() => [
                Ho(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Ho(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Ki(() => [
                    Ho(c, {
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
            Ho(g)
          ]) : hu("", !0),
          Xi("div", b0, [
            Wi(e.$slots, "default")
          ]),
          Wi(e.$slots, "footer")
        ])
      ], 34)) : hu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const pt = /* @__PURE__ */ ne(w0, [["render", k0]]);
const x0 = {
  name: "MwInput",
  components: {
    MwIcon: Ie
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
}, fu = window.Vue.renderSlot, $0 = window.Vue.resolveComponent, ra = window.Vue.openBlock, Yi = window.Vue.createBlock, _u = window.Vue.createCommentVNode, V0 = window.Vue.resolveDynamicComponent, E0 = window.Vue.toDisplayString, L0 = window.Vue.mergeProps, A0 = window.Vue.withModifiers, D0 = window.Vue.createElementVNode, T0 = window.Vue.normalizeClass, B0 = window.Vue.createElementBlock, P0 = { class: "mw-ui-input__content" };
function F0(e, t, n, o, s, a) {
  const i = $0("mw-icon");
  return ra(), B0("div", {
    class: T0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    D0("div", P0, [
      fu(e.$slots, "icon", {}, () => [
        n.icon ? (ra(), Yi(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : _u("", !0)
      ]),
      (ra(), Yi(V0(n.type === "textarea" ? n.type : "input"), L0({
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
        textContent: E0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      fu(e.$slots, "indicator", {}, () => [
        n.indicator ? (ra(), Yi(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = A0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : _u("", !0)
      ])
    ])
  ], 2);
}
const sc = /* @__PURE__ */ ne(x0, [["render", F0]]);
const M0 = {
  name: "MwMessage",
  components: { MwCol: b, MwRow: F, MwIcon: Ie, MwButton: Fe },
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
      notice: c0,
      warning: Cm,
      success: wi,
      error: u0
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
}, Ji = window.Vue.renderSlot, la = window.Vue.resolveComponent, vu = window.Vue.createVNode, Su = window.Vue.withCtx, yu = window.Vue.openBlock, Cu = window.Vue.createBlock, bu = window.Vue.createCommentVNode, N0 = window.Vue.normalizeClass;
function U0(e, t, n, o, s, a) {
  const i = la("mw-icon"), c = la("mw-col"), d = la("mw-button"), g = la("mw-row");
  return e.shown ? (yu(), Cu(g, {
    key: 0,
    class: N0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Su(() => [
      Ji(e.$slots, "icon", {}, () => [
        vu(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      vu(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Su(() => [
          Ji(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Ji(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (yu(), Cu(d, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : bu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : bu("", !0);
}
const I0 = /* @__PURE__ */ ne(M0, [["render", U0]]);
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
const R0 = {}, z0 = window.Vue.createElementVNode, O0 = window.Vue.openBlock, j0 = window.Vue.createElementBlock, H0 = { class: "mw-ui-spinner" }, q0 = /* @__PURE__ */ z0("div", { class: "mw-ui-spinner__bounce" }, null, -1), G0 = [
  q0
];
function X0(e, t) {
  return O0(), j0("div", H0, G0);
}
const Je = /* @__PURE__ */ ne(R0, [["render", X0]]), ut = {
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
const W0 = window.Vue.computed, K0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Ie },
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
      default: bm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: ut.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: ut.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = W0(() => {
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
}, ku = window.Vue.normalizeStyle, xu = window.Vue.openBlock, Y0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const J0 = window.Vue.resolveComponent, Q0 = window.Vue.createBlock;
function Z0(e, t, n, o, s, a) {
  const i = J0("mw-ui-icon");
  return n.thumbnail ? (xu(), Y0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: ku(o.style)
  }, null, 4)) : (xu(), Q0(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: ku(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Cc = /* @__PURE__ */ ne(K0, [["render", Z0]]);
const e1 = {
  name: "MwRadio",
  components: { MwRow: F },
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
}, t1 = window.Vue.vModelRadio, hi = window.Vue.createElementVNode, n1 = window.Vue.withDirectives, o1 = window.Vue.toDisplayString, s1 = window.Vue.resolveComponent, a1 = window.Vue.normalizeClass, i1 = window.Vue.withCtx, r1 = window.Vue.openBlock, l1 = window.Vue.createBlock, c1 = { class: "mw-ui-radio__controls" }, u1 = ["id", "disabled", "name", "value"], d1 = /* @__PURE__ */ hi("span", { class: "mw-ui-radio__controls__icon" }, null, -1), g1 = ["for", "textContent"];
function p1(e, t, n, o, s, a) {
  const i = s1("mw-row");
  return r1(), l1(i, {
    class: a1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: i1(() => [
      hi("div", c1, [
        n1(hi("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, u1), [
          [t1, a.inputModel]
        ]),
        d1
      ]),
      hi("label", {
        for: n.id,
        class: "ps-2",
        textContent: o1(n.label)
      }, null, 8, g1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const ac = /* @__PURE__ */ ne(e1, [["render", p1]]), $u = window.Vue.h, m1 = {
  name: "MwRadioGroup",
  components: { MwRadio: ac },
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
      (o) => $u(ac, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), $u("div", { class: "mw-ui-radio-group" }, n);
  }
};
const h1 = {
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
}, Vu = window.Vue.normalizeClass, Eu = window.Vue.normalizeStyle, w1 = window.Vue.createElementVNode, f1 = window.Vue.openBlock, _1 = window.Vue.createElementBlock, v1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function S1(e, t, n, o, s, a) {
  return f1(), _1("div", {
    class: Vu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Eu(a.containerStyles)
  }, [
    w1("div", {
      class: Vu(["mw-progress-bar__bar", a.barClass]),
      style: Eu(a.barStyles)
    }, null, 6)
  ], 14, v1);
}
const km = /* @__PURE__ */ ne(h1, [["render", S1]]), y1 = (e, t, n, o) => (s) => {
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
}, C1 = (e, t, n, o) => ({ initiateDrag: y1(
  e,
  t,
  n,
  o
) }), b1 = window.Vue.ref, Lu = window.Vue.computed, k1 = (e, t, n, o) => {
  const s = b1(0), a = Lu(
    () => t.value > e.value
  ), i = Lu(
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
const ca = window.Vue.ref, x1 = window.Vue.onMounted, Au = window.Vue.computed, $1 = window.Vue.nextTick, V1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Fe
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
    const t = ca(!0), n = ca(null), o = Au(
      () => Math.min(e.minHeight, s.value)
    ), s = ca(1), { initiateDrag: a } = C1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: c,
      scrollIndex: d,
      scrollToStepByIndex: g,
      handleArrowUpClick: r
    } = k1(o, s, n, t), l = () => g(d.value + 1), u = ca(null), p = Au(() => ({
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
    return x1(() => C(this, null, function* () {
      var w;
      yield $1(), s.value = n.value.scrollHeight, (w = u.value) == null || w.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", m);
    })), {
      contentRef: n,
      cssVars: p,
      dragIndicatorRef: u,
      handleArrowUpClick: r,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: d0,
      mwIconExpand: Qf,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: d,
      scrollToNextStep: l
    };
  }
}, E1 = window.Vue.renderSlot, L1 = window.Vue.normalizeClass, ua = window.Vue.createElementVNode, A1 = window.Vue.resolveComponent, D1 = window.Vue.createVNode, Qi = window.Vue.openBlock, T1 = window.Vue.createBlock, Du = window.Vue.createCommentVNode, Tu = window.Vue.createElementBlock, B1 = window.Vue.normalizeStyle, P1 = { class: "mw-ui-expandable-content__container" }, F1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, M1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function N1(e, t, n, o, s, a) {
  const i = A1("mw-button");
  return Qi(), Tu("div", {
    class: "mw-ui-expandable-content",
    style: B1(o.cssVars)
  }, [
    ua("div", P1, [
      ua("div", {
        ref: "contentRef",
        class: L1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        E1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Qi(), Tu("div", F1, [
        D1(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Qi(), T1(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Du("", !0)
      ])) : Du("", !0)
    ]),
    ua("div", M1, [
      ua("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const U1 = /* @__PURE__ */ ne(V1, [["render", N1]]);
const da = window.Vue.computed, I1 = {
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
      default: ut.blue600
    },
    inactiveColor: {
      type: String,
      default: ut.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = da(() => e.size / 2 * 0.9), n = da(() => Math.PI * (t.value * 2)), o = da(
      () => (100 - e.percentage) / 100 * n.value
    ), s = da(() => ({
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
}, Bu = window.Vue.createElementVNode, Pu = window.Vue.normalizeStyle, R1 = window.Vue.openBlock, z1 = window.Vue.createElementBlock, O1 = ["width", "height", "viewport"], j1 = ["r", "cx", "cy", "stroke-dasharray"], H1 = ["r", "cx", "cy", "stroke-dasharray"];
function q1(e, t, n, o, s, a) {
  return R1(), z1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Pu(o.cssVars)
  }, [
    Bu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, j1),
    Bu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Pu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, H1)
  ], 12, O1);
}
const G1 = /* @__PURE__ */ ne(I1, [["render", q1]]), X1 = window.Vue.ref, cn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, hn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${cn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${cn.tablet}px) and (max-width: ${cn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${cn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${cn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${cn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${cn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${cn["desktop-wide"]}px)`
}, Zi = {
  mobile: () => matchMedia(hn.mobile).matches,
  tablet: () => matchMedia(hn.tablet).matches,
  desktop: () => matchMedia(hn.desktop).matches,
  desktopwide: () => matchMedia(hn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(hn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(hn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(hn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(hn["desktop-and-down"]).matches
}, W1 = (e) => {
  const t = Object.values(cn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, K1 = {
  install: (e) => {
    const t = X1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in Zi)
        Zi.hasOwnProperty(s) && (t.value[s] = Zi[s]());
      t.value.nextBreakpoint = W1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = ot(fe({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, Y1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = ot(fe({}, e.config.globalProperties.$mwui || {}), {
      colors: ut
    }), e.provide("colors", ut);
  }
};
class Po extends Error {
}
const J1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Po();
}), xm = { assertUser: J1 };
const Q1 = window.Vue.resolveDirective, qo = window.Vue.createElementVNode, Fu = window.Vue.withDirectives, Z1 = window.Vue.toDisplayString, e_ = window.Vue.unref, Mu = window.Vue.withCtx, t_ = window.Vue.openBlock, n_ = window.Vue.createBlock, o_ = window.Vue.createCommentVNode, s_ = { class: "pa-4 sx-login-dialog__header" }, a_ = { class: "sx-login-dialog__body px-6 pb-4" }, i_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, r_ = ["href"], l_ = window.Vue.computed, c_ = window.Vue.ref, u_ = window.Vuex.useStore, d_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = u_(), n = l_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = c_(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = Q1("i18n");
      return n.value ? (t_(), n_(e_(pt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Mu(() => [
          qo("div", s_, [
            Fu(qo("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Mu(() => [
          Fu(qo("div", a_, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          qo("div", i_, [
            qo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, Z1(a.$i18n("cx-sx-login-dialog-button-label")), 9, r_)
          ])
        ]),
        _: 1
      })) : o_("", !0);
    };
  }
}, K = new mw.cx.SiteMapper(), $m = mw.util.getUrl, g_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, to = !mw.config.get("wgMFMode");
class bi {
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
    status: d,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = c, this.status = d, this.targetTitle = g;
  }
}
const ga = "original", pa = "empty", p_ = {
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
      ga,
      pa
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return p_[t] || t;
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
    return ga;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return pa;
  }
  static isUserMTProvider(t) {
    return [ga, pa].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === pa ? "blank" : t === ga ? "source" : t.toLowerCase();
  }
}
class Dn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = ot(fe({}, a), {
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
const Nu = (e) => {
  var n;
  const t = fi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, fi = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, eo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Vm = (e) => {
  const t = fi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = m_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, m_ = (e) => {
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
}, Em = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Lm = (e) => {
  const t = Em(e);
  return t == null ? void 0 : t.targetExists;
};
class er {
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
class Ke {
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
    s && Lm(s) && (this.blockTemplateAdaptationInfo[t] = Em(s));
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
    const t = fi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Nu(this.transclusionNode) : null;
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
    return n && Nu(n) || "";
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
    const o = fi(n);
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
      new er({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new er({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new er({
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
const h_ = [
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
], w_ = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = Uu(e, n), a = c = Uu(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(d) {
    return a.indexOf(d) >= 0;
  }), o.length / s.length);
}, Uu = function(e, t) {
  return e ? h_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Am = 95, f_ = 85, __ = [
  { status: "failure", value: 100 - Am },
  { status: "warning", value: 100 - f_ },
  { status: "success", value: 100 }
], Dm = (e, t, n) => {
  const o = Iu(e).textContent, s = Iu(t).textContent, a = 100 - 100 * w_(s, o, n);
  return Math.ceil(a);
}, v_ = (e) => __.find((t) => e <= t.value).status, S_ = (e, t) => Dm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), y_ = () => (100 - Am) / 100, Iu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Ht = {
  calculateScore: Dm,
  getScoreStatus: v_,
  getMTScoreForPageSection: S_,
  getMtModificationThreshold: y_
}, ma = "__LEAD_SECTION__";
class ic {
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
    return ma;
  }
  static isSectionLead(t) {
    return !t || t === ma;
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
    return n instanceof Ke ? n.transclusionNode.outerHTML : n instanceof Dn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ke ? t.blockTemplateSelected = !1 : t instanceof Dn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ke ? n.blockTemplateSelected = !0 : n instanceof Dn && (n.selected = !0);
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
    if (o instanceof Ke)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Dn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ke ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Dn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ke ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Dn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Ht.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? ma : this.originalTitle;
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
    return this.isLeadSection ? ma : this.title;
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
class bc extends bi {
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
    lastUpdatedTimestamp: d,
    status: g,
    pageRevision: r,
    targetTitle: l,
    sourceSectionTitle: u,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: c,
      lastUpdatedTimestamp: d,
      pageRevision: r,
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
    return ic.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? ic.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const At = "previous-edits", qt = "popular", Qe = "topic", ye = "collections", Lt = "automatic", dt = "seed", Ru = window.Vue.ref, C_ = mw.loader.require("ext.cx.articletopics"), ha = {
  type: Lt,
  id: At
}, Tm = () => {
  const e = Ru(
    C_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = Ru(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const i = s == null ? void 0 : s.toLowerCase(), c = a == null ? void 0 : a.toLowerCase();
    return i === Qe ? e.value.some((d) => d === a) ? { type: i, id: c } : (t.value = !0, ha) : i === ye || i === dt ? { type: i, id: a } : c === At ? {
      type: Lt,
      id: At
    } : c === qt ? {
      type: Lt,
      id: qt
    } : c === ye ? {
      type: Lt,
      id: ye
    } : ha;
  }, isDefaultFilter: ({ type: s, id: a }) => s === ha.type && a === ha.id };
}, b_ = window.Vue.inject, k_ = window.Vue.reactive;
var x_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Bm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(x_, function() {
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
        let u = r.match(/[aou][^äöy]*$/i);
        const p = r;
        switch (r.match(/wiki$/i) && (u = !1), r.match(/[bcdfghjklmnpqrstvwxz]$/i) && (r += "i"), l) {
          case "genitive":
            r += "n";
            break;
          case "elative":
            r += u ? "sta" : "stä";
            break;
          case "partitive":
            r += u ? "a" : "ä";
            break;
          case "illative":
            r += r.slice(-1) + "n";
            break;
          case "inessive":
            r += u ? "ssa" : "ssä";
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
        let u, p, m, h;
        switch (u = "мæ", p = "", m = "", h = "", r.match(/тæ$/i) ? (r = r.slice(0, -1), u = "æм") : r.match(/[аæеёиоыэюя]$/i) ? p = "й" : r.match(/у$/i) ? r.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : r.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), l) {
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
          const m = p.match(i);
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
                for (let I = 0; I < E.length; I++) {
                  const ze = E[I]();
                  if (ze !== null)
                    return ze;
                }
                return null;
              };
            }
            function f(E) {
              const I = w, ze = [];
              for (let Gt = 0; Gt < E.length; Gt++) {
                const Xt = E[Gt]();
                if (Xt === null)
                  return w = I, null;
                ze.push(Xt);
              }
              return ze;
            }
            function S(E, I) {
              return () => {
                const ze = w, Gt = [];
                let Xt = I();
                for (; Xt !== null; )
                  Gt.push(Xt), Xt = I();
                return Gt.length < E ? (w = ze, null) : Gt;
              };
            }
            function y(E) {
              const I = E.length;
              return () => {
                let ze = null;
                return m.slice(w, w + I) === E && (ze = E, w += I), ze;
              };
            }
            function k(E) {
              return () => {
                const I = m.slice(w).match(E);
                return I === null ? null : (w += I[0].length, I[0]);
              };
            }
            const V = k(/^\s+/), L = y("|"), x = y(":"), T = y("\\"), U = k(/^./), M = y("$"), X = k(/^\d+/), G = y('"'), me = y("'"), Ve = k(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), mt = k(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Ee = _([Le, k(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Le() {
              const E = f([T, U]);
              return E === null ? null : E[1];
            }
            const Tt = _([Le, mt]), Ne = _([Le, Ve]);
            function De() {
              const E = f([M, X]);
              return E === null ? null : ["REPLACE", parseInt(E[1], 10) - 1];
            }
            const oe = (O = k(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), H = function(E) {
              return E.toString();
            }, () => {
              const E = O();
              return E === null ? null : H(E);
            });
            var O, H;
            function de() {
              const E = f([L, S(0, na)]);
              if (E === null)
                return null;
              const I = E[1];
              return I.length > 1 ? ["CONCAT"].concat(I) : I[0];
            }
            function W() {
              const E = f([oe, x, De]);
              return E === null ? null : [E[0], E[2]];
            }
            function v() {
              const E = f([oe, x, na]);
              return E === null ? null : [E[0], E[2]];
            }
            function D() {
              const E = f([oe, x]);
              return E === null ? null : [E[0], ""];
            }
            const A = _([function() {
              const E = f([_([W, v, D]), S(0, de)]);
              return E === null ? null : E[0].concat(E[1]);
            }, function() {
              const E = f([oe, S(0, de)]);
              return E === null ? null : [E[0]].concat(E[1]);
            }]), P = y("{{"), j = y("}}"), se = y("[["), z = y("]]"), N = y("["), Q = y("]");
            function J() {
              const E = f([P, A, j]);
              return E === null ? null : E[1];
            }
            const Z = _([function() {
              const E = f([S(1, na), L, S(1, ta)]);
              return E === null ? null : [["CONCAT"].concat(E[0]), ["CONCAT"].concat(E[2])];
            }, function() {
              const E = f([S(1, na)]);
              return E === null ? null : [["CONCAT"].concat(E[0])];
            }]);
            function ea() {
              let E = null;
              const I = f([se, Z, z]);
              if (I !== null) {
                const ze = I[1];
                E = ["WIKILINK"].concat(ze);
              }
              return E;
            }
            function Re() {
              let E = null;
              const I = f([N, S(1, Sw), V, S(1, ta), Q]);
              return I !== null && (E = ["EXTLINK", I[1].length === 1 ? I[1][0] : ["CONCAT"].concat(I[1]), ["CONCAT"].concat(I[3])]), E;
            }
            const Fi = k(/^[A-Za-z]+/);
            function ww() {
              const E = k(/^[^"]*/), I = f([G, E, G]);
              return I === null ? null : I[1];
            }
            function fw() {
              const E = k(/^[^']*/), I = f([me, E, me]);
              return I === null ? null : I[1];
            }
            function _w() {
              const E = k(/^\s*=\s*/), I = f([V, Fi, E, _([ww, fw])]);
              return I === null ? null : [I[1], I[3]];
            }
            function vw() {
              const E = S(0, _w)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], E);
            }
            const Sw = _([J, De, ea, Re, function() {
              const E = S(1, Ee)();
              return E === null ? null : E.join("");
            }]), ta = _([J, De, ea, Re, function() {
              let E = null;
              const I = w, ze = y("<"), Gt = k(/^\/?/), Xt = k(/^\s*>/), Mi = f([ze, Fi, vw, Gt, Xt]);
              if (Mi === null)
                return null;
              const tu = w, nu = Mi[1], Ni = S(0, ta)(), yw = w, ou = f([y("</"), Fi, Xt]);
              if (ou === null)
                return ["CONCAT", m.slice(I, tu)].concat(Ni);
              const Cw = w, bw = ou[1], su = Mi[2];
              if (function(Mn, oa, Ui, Ii = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Mn = Mn.toLowerCase()) !== (oa = oa.toLowerCase()) || Ii.allowedHtmlElements.indexOf(Mn) === -1)
                  return !1;
                const kw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let sa = 0, xw = Ui.length; sa < xw; sa += 2) {
                  const Ri = Ui[sa];
                  if (Ii.allowedHtmlCommonAttributes.indexOf(Ri) === -1 && (Ii.allowedHtmlAttributesByElement[Mn] || []).indexOf(Ri) === -1 || Ri === "style" && Ui[sa + 1].search(kw) !== -1)
                    return !1;
                }
                return !0;
              }(nu, bw, su.slice(1)))
                E = ["HTMLELEMENT", nu, su].concat(Ni);
              else {
                const Mn = (oa) => oa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                E = ["CONCAT", Mn(m.slice(I, tu))].concat(Ni, Mn(m.slice(yw, Cw)));
              }
              return E;
            }, function() {
              const E = S(1, Ne)();
              return E === null ? null : E.join("");
            }]), na = _([J, De, function() {
              const E = S(1, Tt)();
              return E === null ? null : E.join("");
            }]), eu = function() {
              const E = S(0, ta)();
              return E === null ? null : ["CONCAT"].concat(E);
            }();
            if (eu === null || w !== m.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + m);
            return eu;
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
      constructor(r, { finalFallback: l = "en", messages: u, wikilinks: p = !1 } = {}) {
        this.locale = r, this.parser = new d(this.locale, { wikilinks: p }), this.messageStore = new g(), u && this.load(u, this.locale), this.finalFallback = l, this.wikilinks = p;
      }
      load(r, l) {
        return this.messageStore.load(r, l || this.locale);
      }
      i18n(r, ...l) {
        return this.parser.parse(this.getMessage(r), l);
      }
      setLocale(r) {
        this.locale = r, this.parser = new d(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(r) {
        let l = this.locale, u = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; l; ) {
          const m = l.split("-");
          let h = m.length;
          do {
            const w = m.slice(0, h).join("-"), _ = this.messageStore.getMessage(r, w);
            if (typeof _ == "string")
              return _;
            h--;
          } while (h);
          l = p[u], u++;
        }
        return r;
      }
      registerParserPlugin(r, l) {
        c.prototype[r] = l;
      }
    };
  });
})(Bm);
var $_ = Bm.exports;
const zu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Pm = Symbol("banana-context");
function we() {
  const e = b_(Pm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function V_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = k_(new $_(e.locale, e));
  return {
    install: (n) => {
      n.provide(Pm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = zu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = zu(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const gn = window.Vue.ref, E_ = window.Vue.computed, ki = gn(null), xi = gn(null), $i = gn(null), Xs = gn(null), kc = gn(null), Vi = gn(null), Fm = gn(null), Mm = gn(null), xc = gn(null), { validateFilters: L_, filtersValidatorError: A_ } = Tm(), Nm = {
  from: ki,
  to: xi,
  section: Xs,
  draft: kc,
  page: $i,
  revision: Vi,
  "active-list": xc
}, D_ = E_(() => ({
  type: Fm.value,
  id: Mm.value
})), Um = (e, t) => {
  Fm.value = e, Mm.value = t, _i("filter-type", e), t && _i("filter-id", t);
}, T_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof bc && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Nm[o].value = s;
  }
  t.delete("title"), Ws(Object.fromEntries(t));
}, $c = (e, t) => {
  Nm[e].value = t, _i(e, t);
}, B_ = (e) => {
  $c("section", e);
}, P_ = (e) => {
  $c("page", e);
}, F_ = (e) => {
  $c("active-list", e);
}, Ws = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    $m(`Special:ContentTranslation${t}`, e)
  );
}, M_ = () => {
  const e = we(), t = new URLSearchParams(location.search);
  $i.value = t.get("page"), ki.value = t.get("from"), xi.value = t.get("to"), Xs.value = t.get("section"), Vi.value = t.get("revision"), xc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = L_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Um(n.type, n.id), A_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, N_ = () => {
  const e = new URLSearchParams(location.search);
  Xs.value = null, e.delete("section"), e.delete("title"), Ws(Object.fromEntries(e));
}, _i = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Ws(Object.fromEntries(n));
}, U_ = (e) => new URLSearchParams(location.search).get(e), I_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), ki.value = e, xi.value = t, n.delete("title"), Ws(Object.fromEntries(n));
}, R_ = () => {
  const e = new URLSearchParams(location.search);
  $i.value = null, Xs.value = null, kc.value = null, Vi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ws(Object.fromEntries(e));
}, z_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), B = () => ({
  isQuickTutorialForced: z_,
  setLanguageURLParams: I_,
  setSectionURLParam: B_,
  setTranslationURLParams: T_,
  initializeURLState: M_,
  clearTranslationURLParameters: R_,
  clearSectionURLParameter: N_,
  setUrlParam: _i,
  getUrlParam: U_,
  pageURLParameter: $i,
  sourceLanguageURLParameter: ki,
  targetLanguageURLParameter: xi,
  sectionURLParameter: Xs,
  draftURLParameter: kc,
  revisionURLParameter: Vi,
  setPageURLParam: P_,
  currentSuggestionFilters: D_,
  setFilterURLParams: Um,
  activeDashboardTabParameter: xc,
  setActiveDashboardTabParameter: F_
}), Ou = window.Vue.computed, O_ = window.Vuex.useStore;
function Fo() {
  const e = O_(), t = Ou(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Ou(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const j_ = {
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
}, H_ = {
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
}, q_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], G_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, X_ = {
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
}, W_ = {
  languages: j_,
  scriptgroups: H_,
  rtlscripts: q_,
  regiongroups: G_,
  territories: X_
};
var Me = W_;
function Ks(e) {
  return !!Me.languages[e];
}
function Fn(e) {
  return Ks(e) && Me.languages[e].length === 1 ? Me.languages[e][0] : !1;
}
function K_() {
  return Me.languages;
}
function Ys(e) {
  var t = Fn(e);
  return t ? Ys(t) : Ks(e) ? Me.languages[e][0] : "Zyyy";
}
function Vc(e) {
  var t = Fn(e);
  return t ? Vc(t) : Ks(e) && Me.languages[e][1] || "UNKNOWN";
}
function zs(e) {
  var t = Fn(e);
  return t ? zs(t) : Ks(e) && Me.languages[e][2] || e;
}
function Y_() {
  var e, t = {};
  for (e in Me.languages)
    Fn(e) || (t[e] = zs(e));
  return t;
}
function Im(e) {
  var t, n, o = [];
  for (t in Me.languages)
    if (!Fn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Ys(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function J_(e) {
  return Im([e]);
}
function Rm(e) {
  var t;
  for (t in Me.scriptgroups)
    if (Me.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Ec(e) {
  return Rm(Ys(e));
}
function zm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Fn(n) || n, a = Ec(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Om(e) {
  var t, n, o, s = {};
  for (t in Me.languages)
    if (!Fn(t)) {
      for (n = 0; n < e.length; n++)
        if (Vc(t).includes(e[n])) {
          o = Ec(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Q_(e) {
  return Om([e]);
}
function Z_(e) {
  var t, n, o, s = [];
  for (t = zm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function ev(e, t) {
  var n = zs(e) || e, o = zs(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function jm(e) {
  return Me.rtlscripts.includes(Ys(e));
}
function tv(e) {
  return jm(e) ? "rtl" : "ltr";
}
function nv(e) {
  return Me.territories[e] || [];
}
function ov(e, t) {
  t.target ? Me.languages[e] = [t.target] : Me.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: ov,
  getAutonym: zs,
  getAutonyms: Y_,
  getDir: tv,
  getGroupOfScript: Rm,
  getLanguages: K_,
  getLanguagesByScriptGroup: zm,
  getLanguagesByScriptGroupInRegion: Q_,
  getLanguagesByScriptGroupInRegions: Om,
  getLanguagesInScript: J_,
  getLanguagesInScripts: Im,
  getLanguagesInTerritory: nv,
  getRegions: Vc,
  getScript: Ys,
  getScriptGroupOfLanguage: Ec,
  isKnown: Ks,
  isRedirect: Fn,
  isRtl: jm,
  sortByScriptGroup: Z_,
  sortByAutonym: ev
};
const oo = window.Vue.computed;
function pe(e) {
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
class Mo {
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
    pageprops: d,
    pageviews: g,
    thumbnail: r = null,
    title: l,
    revisions: u,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var w;
    this.language = c, this.title = l, this.pageId = i, this.description = t, this.image = s, this.imageName = a, this.pageprops = d, this.pageviews = g, this.thumbnail = r, this.langLinksCount = n, this.articleSize = (w = u == null ? void 0 : u[0]) == null ? void 0 : w.size, this.revision = o, this.alias = p, this.wikidataId = d == null ? void 0 : d.wikibase_item, this.content = m, this.sections = h;
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
class sv {
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
function av() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const iv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), av();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, rv = (e, t) => {
  let n, o;
  return t ? (n = iv(e), o = n.$element.find(
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
}, lv = (e, t) => {
  const n = Array.from(
    rv(e, t)
  );
  return cv(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let c = "";
      const d = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : i.unshift(a);
      const g = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (l) => new Ke({
          sentences: uv(l),
          node: l
        })
      ), r = !c;
      return new ic({ id: d, title: c, subSections: g, isLeadSection: r });
    }
  );
}, cv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, uv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Dn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Hm = {
  convertSegmentedContentToPageSections: lv
}, Lc = 120, dv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Lc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return K.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, l) => ot(fe({}, r), { [l.to]: l.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, l) => ot(fe({}, r), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((r) => {
      const l = g[r.title] || c[r.title] || null;
      return new Mo(ot(fe({}, r), { _alias: l }));
    });
  });
}, gv = (e, t) => {
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
  return K.getApi(e).get(n).then((s) => {
    var d, g;
    const a = s.query.pages;
    if (!a || !a.length || (d = a[0]) != null && d.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return c ? Object.freeze(new sv(c, i)) : null;
  });
}, pv = (e, t, n) => {
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
  return K.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var d, g;
    return (g = (d = c.langlinks) == null ? void 0 : d[0]) == null ? void 0 : g["*"];
  }).filter((c) => !!c));
}, mv = (e, t, n, o = null) => qm(
  e,
  t,
  n,
  o
).then(
  (s) => new Mo({
    sections: Hm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), qm = (e, t, n, o = null) => {
  const s = K.getWikiDomainCode(e), a = K.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, c += "/$revision");
  const d = K.getCXServerUrl(
    c,
    i
  );
  return fetch(d).then((g) => g.json()).then((g) => g.segmentedContent);
}, hv = (e) => C(void 0, null, function* () {
  const t = g_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Lc,
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
  return yield K.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Mo(s))).catch((o) => []);
}), wv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Lc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return K.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new Mo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, no = {
  fetchPages: dv,
  fetchLanguageTitles: gv,
  fetchPageContent: mv,
  fetchSegmentedContent: qm,
  fetchNearbyPages: hv,
  searchPagesByTitlePrefix: wv,
  fetchLanguageLinksForLanguage: pv
}, fv = window.Vuex.useStore, No = () => {
  const e = fv();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const i = n.slice(a, a + o), c = no.fetchPages(t, i).then(
        (d) => d.forEach(
          (g) => e.commit("mediawiki/addPage", g)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, _v = window.Vuex.useStore, Ac = () => {
  const e = _v(), {
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
class Uo {
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
class Bn {
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
    targetSections: d = [],
    isListable: g = !0,
    suggestionProvider: r = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = c, this.targetSections = d, this.isListable = g, this.suggestionProvider = r;
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
const Gm = [
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
], vv = [
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
], Sv = [
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
], yv = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Cv = [
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
], bv = {
  en: Gm,
  es: vv,
  bn: Sv,
  fr: yv,
  de: Cv
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
class Dc {
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
class Xm extends Uo {
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
    collection: d = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: i,
      suggestionProvider: c
    }), this.collection = new Dc(d);
  }
}
class Wm extends Bn {
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
    targetSections: d = [],
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
      targetSections: d,
      isListable: g,
      suggestionProvider: r
    }), this.collection = new Dc(l);
  }
}
const kv = Gm, pn = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function xv() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield pn({ urlPostfix: t, urlParams: e })) || []).map((o) => new Dc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function $v(e, t, n, o = 24) {
  return C(this, null, function* () {
    return ((yield pn({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (i) => new Uo({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
const Vv = (e, t) => C(void 0, null, function* () {
  return ((yield pn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new Uo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), Ev = (e, t) => C(void 0, null, function* () {
  const s = (yield pn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new Bn({
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
}), Lv = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield pn({ urlParams: o })) || []).map(
    (a) => new Xm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), Av = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield pn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (i) => new Wm({
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
function Dv(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = K.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Bn(a) : null;
  });
}
function Tv(e, t, n) {
  return C(this, null, function* () {
    const a = (yield pn({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (i) => new Bn({
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
function Bv(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield pn({ urlParams: s })) || []).map(
      (i) => new Uo({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
function Pv(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, i = (yield pn({ urlPostfix: "/sections", urlParams: s })) || [];
    return i && i.map(
      (c) => new Bn({
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
function Fv(e) {
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
    }, n = K.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function Mv(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = K.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function Nv(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = K.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function Uv(e) {
  const t = kv.map((o) => encodeURIComponent(o)).join("|"), n = K.getCXServerUrl(
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
const Iv = (e, t, n) => {
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
}, Rv = (e) => {
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
}, zv = () => {
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
  fetchFavorites: zv,
  fetchPageSuggestions: $v,
  fetchSectionSuggestion: Dv,
  fetchSectionSuggestions: Tv,
  fetchSuggestionSeeds: Mv,
  fetchAppendixTargetSectionTitles: Uv,
  fetchSuggestionSourceSections: Nv,
  markFavorite: Iv,
  unmarkFavorite: Rv,
  fetchUserEdits: Fv,
  fetchMostPopularPageSuggestions: Vv,
  fetchMostPopularSectionSuggestions: Ev,
  fetchPageSuggestionsByTopics: Bv,
  fetchSectionSuggestionsByTopics: Pv,
  fetchPageCollections: xv,
  fetchPageSuggestionsByCollections: Lv,
  fetchSectionSuggestionsByCollections: Av
}, Ov = window.Vuex.useStore, Js = () => {
  const e = Ov(), { sourceLanguage: t, targetLanguage: n } = pe(e), o = (c) => {
    if (!c)
      return !1;
    const d = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), r = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    return !d.includes(c.sourceTitle) && !r.includes(c.sourceTitle);
  }, s = (c) => {
    const { pageSuggestions: d } = e.state.suggestions;
    return !d.some(
      (r) => r.sourceLanguage === c.sourceLanguage && r.targetLanguage === c.targetLanguage && r.sourceTitle === c.sourceTitle
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
class jv {
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
const Hv = window.Vuex.useStore, qv = window.Vue.computed, Ei = window.Vue.ref, Gv = Ei([]), Xv = Ei([]);
let tr = !1, nr = !1, ju = !1, Km = Ei([]);
const wa = Ei([]), Wv = (e, t) => {
  Km.value.push({
    sourceLanguage: e,
    targetLanguage: t
  });
};
let Go = null;
const fa = {
  page: Gv,
  section: Xv
}, Tc = () => {
  const e = Hv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = qv(
    () => Km.value.some(
      (l) => l.sourceLanguage === t.value && l.targetLanguage === n.value
    )
  ), s = () => C(void 0, null, function* () {
    nr || (wa.value = yield ue.fetchUserEdits(t.value).then((l) => (nr = !0, l)));
  }), a = () => C(void 0, null, function* () {
    let l = e.getters["translator/getTranslationsByStatus"]("published");
    if (l = l.filter(
      (u) => u.sourceLanguage === t.value
    ), l.length && !tr)
      return tr = !0, l.map(
        (u) => u.sourceTitle
      );
    if (tr = !0, !nr && (yield s(), wa.value.length > 0))
      return wa.value;
    if (!ju) {
      const u = yield ue.fetchUserEdits(t.value).then((p) => (ju = !0, p));
      if (u.length)
        return no.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          u
        );
    }
    return null;
  }), i = (l) => {
    let u = fa[l].value.find(
      (p) => p.matchesLanguagePair(t.value, n.value)
    );
    return u || (u = new jv({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), fa[l].value.push(u)), u;
  }, c = () => C(void 0, null, function* () {
    const l = yield ue.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const u in fa) {
      const p = i(u);
      p.seeds = [...p.seeds, ...l || []];
    }
  }), d = () => C(void 0, null, function* () {
    let l = !1, u = [];
    do {
      u = yield a(), u || (l = !0);
      for (const p in fa) {
        const m = i(p);
        m.seeds = [
          ...m.seeds,
          ...u || []
        ];
      }
    } while (!l && !(u != null && u.length));
  }), g = () => Go || (Go = d(), Go.finally(() => {
    Go = null;
  }));
  return {
    getSuggestionSeed: (l) => C(void 0, null, function* () {
      let u = i(l);
      u.seeds.length || (yield g());
      let p = u.shiftSeeds();
      return !p && !o.value && (yield c(), p = u.shiftSeeds(), Wv(
        t.value,
        n.value
      )), p;
    }),
    defaultSeedsFetched: o,
    fetchPreviousEditsInSource: s,
    previousEditsInSource: wa
  };
}, Kv = 5;
function Ao(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < Kv);
  });
}
const Yv = window.Vuex.useStore, Jv = () => {
  const e = Yv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = Tc(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Js(), c = {
    id: At,
    type: Lt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const l = [];
      return yield Ao(() => C(void 0, null, function* () {
        const u = yield o("page");
        if (!u)
          return !0;
        let p = yield ue.fetchPageSuggestions(
          t.value,
          n.value,
          u
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, r), l.push(...p), l.length >= r;
      })), l.forEach(
        (u) => u.suggestionProvider = c
      ), l;
    }),
    fetchSectionSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const l = [];
      return yield Ao(() => C(void 0, null, function* () {
        const u = yield o("section");
        if (!u)
          return !0;
        const p = yield ue.fetchSectionSuggestions(
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
        return m = m.slice(0, r), l.push(...m), h.forEach((w) => {
          w && !i(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), l.length >= r;
      })), l.forEach(
        (u) => u.suggestionProvider = c
      ), l;
    })
  };
}, Qv = window.Vuex.useStore, Zv = () => {
  const e = Qv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: qt,
    type: Lt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Js();
  return { fetchSectionSuggestionsPopular: (g) => C(void 0, null, function* () {
    const r = [];
    return yield Ao(() => C(void 0, null, function* () {
      const l = yield ue.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let u = l.filter(
        (m) => s(m)
      );
      const p = l.filter(
        (m) => !s(m)
      );
      return u = u.slice(0, g), r.push(...u), p.forEach((m) => {
        m && !i(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), r.length >= g;
    })), r.forEach(
      (l) => l.suggestionProvider = o
    ), r;
  }), fetchPageSuggestionsPopular: (g) => C(void 0, null, function* () {
    const r = [];
    return yield Ao(() => C(void 0, null, function* () {
      let l = yield ue.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return l = l.filter(
        (u) => a(u)
      ), l = l.slice(0, g), r.push(...l), r.length >= g;
    })), r.forEach(
      (l) => l.suggestionProvider = o
    ), r;
  }) };
}, Ym = window.Vue.ref, or = Ym([]), Hu = Ym(!1), Bc = () => ({ pageCollections: or, fetchPageCollections: () => C(void 0, null, function* () {
  try {
    or.value = yield ue.fetchPageCollections(), or.value.sort((t, n) => t.name.localeCompare(n.name)), Hu.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Hu });
class rc {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const _a = window.Vue.computed, qu = mw.loader.require("ext.cx.articletopics"), eS = (e) => new rc({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: Qe
  }))
}), Pc = () => {
  const e = we(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), o = {
    id: At,
    type: Lt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: qt,
    type: Lt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: ye,
    type: Lt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: i, pageCollectionsFetched: c } = Bc(), d = _a(() => {
    const f = new rc({
      id: Lt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return i.value.length && f.filters.push(a), f;
  }), g = (f) => ({
    id: f.name,
    label: f.name,
    type: ye
  }), r = _a(
    () => new rc({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: i.value.map(
        (f) => g(f)
      )
    })
  ), l = _a(() => {
    const f = [
      d.value,
      ...qu.map(eS)
    ];
    return i.value.length && f.splice(1, 0, r.value), f;
  }), u = _a(
    () => [t.value.type, t.value.id].includes(
      ye
    ) && !c.value
  ), p = () => {
    if (u.value)
      return [];
    const f = h();
    return f.type === Qe || f.type === dt || f.type === ye || f.id === ye ? [f, o] : [o, s];
  }, m = (f) => {
    n(f.type, f.id);
  }, h = () => t.value.type === dt ? {
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  } : l.value.flatMap((f) => f.filters).find(w), w = (f) => t.value.type === f.type && t.value.id === f.id;
  return {
    allFilters: l,
    getFiltersSummary: p,
    selectFilter: m,
    isFilterSelected: w,
    getArticleTopics: (f) => {
      const y = qu.flatMap((k) => k.topics).find((k) => k.topicId === f);
      return y ? y.articletopics : [];
    },
    waitingForPageCollectionsFetch: u,
    findSelectedFilter: h
  };
}, tS = window.Vuex.useStore, nS = () => {
  const e = tS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Js(), { getArticleTopics: c } = Pc();
  return {
    fetchPageSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const l = o.value.id, u = {
        id: l,
        type: Qe
      }, p = c(l);
      let m = yield ue.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        p
      );
      return m = m.filter(
        (h) => a(h)
      ), m = m.slice(0, r), m.forEach(
        (h) => h.suggestionProvider = u
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const l = o.value.id, u = {
        id: l,
        type: Qe
      }, p = c(l), m = [];
      return yield Ao(() => C(void 0, null, function* () {
        const h = yield ue.fetchSectionSuggestionsByTopics(
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
        return w = w.slice(0, r), m.push(...w), _.forEach((f) => {
          f && !i(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), m.length >= r;
      })), m.forEach(
        (h) => h.suggestionProvider = u
      ), m;
    })
  };
}, oS = window.Vuex.useStore, sS = window.Vue.computed, aS = () => {
  const e = oS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = sS(() => {
    var r;
    return ((r = o.value) == null ? void 0 : r.type) !== ye ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: i,
    sectionSuggestionExists: c
  } = Js();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const r = [], l = yield ue.fetchSectionSuggestionsByCollections(
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
      return r.push(...u), p.forEach((m) => {
        m && !c(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), r.forEach(
        (m) => m.suggestionProvider = o.value
      ), r;
    }),
    fetchPageSuggestionsByCollections: () => C(void 0, null, function* () {
      const r = [];
      let l = yield ue.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return l = l.filter(
        (u) => i(u)
      ), r.push(...l), r.forEach(
        (u) => u.suggestionProvider = o.value
      ), r;
    })
  };
}, iS = window.Vuex.useStore, rS = () => {
  const e = iS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = Js();
  return {
    fetchPageSuggestionsBySeed: (g) => C(void 0, null, function* () {
      const r = o.value.id;
      let l = yield ue.fetchPageSuggestions(
        t.value,
        n.value,
        r
      );
      return l = l.filter(
        (u) => a(u)
      ), l = l.slice(0, g), l.forEach(
        (u) => u.suggestionProvider = {
          id: r,
          type: dt
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (g) => C(void 0, null, function* () {
      const r = [], l = o.value.id;
      return yield Ao(() => C(void 0, null, function* () {
        const u = yield ue.fetchSectionSuggestions(
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
        return p = p.slice(0, g), r.push(...p), m.forEach((h) => {
          h && !i(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), r.length >= g;
      })), r.forEach(
        (u) => u.suggestionProvider = {
          id: l,
          type: dt
        }
      ), r;
    })
  };
}, Fc = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Jv(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Zv(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = nS(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: d
  } = aS(), { fetchPageSuggestionsBySeed: g, fetchSectionSuggestionsBySeed: r } = rS(), l = {
    [At]: t,
    [qt]: o,
    [ye]: c,
    [Qe]: a,
    [dt]: g
  }, u = {
    [At]: n,
    [qt]: s,
    [ye]: d,
    [Qe]: i,
    [dt]: r
  }, p = (w) => w.type === Lt ? w.id : w.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => u[p(e.value)]
  };
}, lS = window.Vuex.useStore, Mc = () => {
  const e = lS(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Ac(), { sourceLanguageURLParameter: o } = B(), s = No(), a = () => {
    const u = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - u.length % p;
  }, i = () => {
    const u = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - u.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: d
  } = Fc(), g = (u) => {
    try {
      const p = u.map((m) => m.sourceTitle);
      if (p.length)
        return s(o.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const u = a(), m = yield d()(
        u
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), g(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const u = i(), m = yield c()(
        u
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), g(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, cS = window.Vuex.useStore, Jm = () => {
  const e = cS();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ue.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, uS = window.Vuex.useStore, Qm = () => {
  const e = uS(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Mc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Ac(), { targetLanguageURLParameter: a } = B(), i = Jm();
  return () => C(void 0, null, function* () {
    const c = s(0), d = o(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, r = c.length === g, l = d.length === g;
    r && l || (yield i(a.value), t(), n());
  });
}, dS = window.Vuex.useStore, Zm = () => {
  const e = dS(), t = No();
  return (n, o, s) => C(void 0, null, function* () {
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
          return new Uo({
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
}, Gu = window.Vue.computed, gS = window.Vuex.useStore, mn = () => {
  const e = gS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = Gu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Gu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, d) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(d)
  };
}, eh = window.Vuex.useStore, { setLanguageURLParams: pS } = B(), Nc = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), pS(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, th = () => {
  const e = eh(), t = Qm();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = pe(e);
    n === o && (n = a.value, o = s.value), Nc(e, n, o), t();
  };
}, mS = () => {
  const e = eh(), t = Zm(), { currentLanguageTitleGroup: n, targetPageExists: o } = mn(), s = No();
  return (a, i) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d,
      setPageURLParam: g,
      clearSectionURLParameter: r
    } = B();
    a === i && (a = d.value, i = c.value);
    const l = n.value.getTitleForLanguage(a);
    Nc(e, a, i), g(l), o.value ? (r(), yield t(
      c.value,
      d.value,
      l
    )) : yield s(c.value, [l]);
  });
}, hS = window.Vuex.useStore, wS = window.Vue.ref, Xu = wS(!1), nh = () => {
  const e = hS(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Fo(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = B(), a = () => {
    var h;
    const c = K.getCurrentWikiLanguageCode(), d = (w) => !t.value || Array.isArray(t.value) && t.value.includes(w), g = (w) => n.value.includes(w), r = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, l = [
      s.value,
      mw.storage.get("cxTargetLanguage"),
      c,
      ((h = t.value) == null ? void 0 : h[0]) || r.targetLanguage
    ], u = [
      o.value,
      mw.storage.get("cxSourceLanguage"),
      r.sourceLanguage,
      c,
      r.targetLanguage
    ], p = l.find(
      (w) => d(w) && g(w)
    );
    return { sourceLanguage: u.find(
      (w) => g(w) && w !== p
    ), targetLanguage: p };
  };
  return { initializeApplicationLanguages: () => C(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: c, targetLanguage: d } = a(
      t.value,
      n.value
    );
    Nc(e, c, d), Xu.value = !0;
  }), applicationLanguagesInitialized: Xu };
};
const fS = window.Vue.resolveDynamicComponent, Wu = window.Vue.openBlock, Ku = window.Vue.createBlock, _S = window.Vue.Transition, Xo = window.Vue.withCtx, Wo = window.Vue.createVNode, vS = window.Vue.resolveComponent, sr = window.Vue.unref, SS = window.Vuex.useStore, Yu = window.Vue.computed, yS = window.Vue.onMounted, CS = window.Vue.inject, bS = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = nh();
    t(), n();
    const o = CS("breakpoints"), s = Yu(() => o.value.mobile), a = SS(), i = Yu(
      () => a.state.application.autoSavePending
    );
    return yS(() => {
      window.addEventListener("beforeunload", (c) => {
        i.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && xm.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((d) => {
          d instanceof Po && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, d) => {
      const g = vS("router-view");
      return Wu(), Ku(sr(Af), { id: "contenttranslation" }, {
        default: Xo(() => [
          Wo(sr(F), { class: "cx-container" }, {
            default: Xo(() => [
              Wo(sr(b), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: Xo(() => [
                  Wo(g, null, {
                    default: Xo(({ Component: r, route: l }) => [
                      Wo(_S, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: Xo(() => [
                          (Wu(), Ku(fS(r)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Wo(d_)
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
}, kS = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, xS = {
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
class oh {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new oh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Ju = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => ot(fe({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class $S {
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
    const t = Ju((s = this.user) == null ? void 0 : s.content), n = Ju((a = this.mt) == null ? void 0 : a.content);
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
class Uc extends bi {
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
    status: d,
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
      status: d,
      targetTitle: g
    }), this.targetUrl = r, this.sectionTranslations = l;
  }
}
const Li = mw.user.isAnon() ? void 0 : "user", sh = (e) => {
  if (e === "assertuserfailed")
    throw new Po();
};
function ah(e, t = null) {
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
      let i;
      if (e === "draft" ? i = a.map(
        (d) => new bc(ot(fe({}, d), { status: e }))
      ) : i = a.map(
        (d) => new Uc(ot(fe({}, d), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const d = yield ah(
          e,
          s.continue.offset
        );
        i = i.concat(d);
      }
      return i;
    }));
  });
}
function VS(e) {
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
      (a) => new $S(a)
    );
  });
}
function ES(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== te.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = K.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, d]) => {
      var r, l;
      if (!d) {
        const u = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(u);
      }
      return (l = (r = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : r.groups) == null ? void 0 : l.content;
    }).catch((c) => Promise.reject(c));
  });
}
const LS = (e, t, n) => {
  const o = K.getApi(t);
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
}, AS = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: c,
  captchaId: d,
  captchaWord: g,
  isSandbox: r,
  sectionTranslationId: l
}) => {
  const u = {
    assert: Li,
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
  return d && (u.captchaid = d, u.captchaword = g), new mw.Api().postWithToken("csrf", u).then((m) => {
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
    sh(m);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Do({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, DS = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: c,
  sectionId: d,
  isSandbox: g,
  progress: r
}) => {
  const l = {
    assert: Li,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: d,
    issandbox: g,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", l).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    sh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Do({ text: h, status: "error" });
  });
}, TS = (e) => {
  const t = {
    assert: Li,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, BS = () => {
  const e = {
    assert: Li,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Uc(n.cxcheckunreviewed.translation)
  );
}, PS = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, FS = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, MS = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), gt = {
  fetchTranslations: ah,
  fetchTranslationUnits: VS,
  fetchSegmentTranslation: ES,
  parseTemplateWikitext: LS,
  publishTranslation: AS,
  saveTranslation: DS,
  deleteTranslation: PS,
  fetchTranslatorStats: MS,
  deleteCXTranslation: FS,
  splitTranslation: TS,
  checkUnreviewedTranslations: BS
};
function NS(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield gt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const US = {
  fetchTranslatorStats: NS
}, IS = {
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
}, RS = {
  namespaced: !0,
  state: kS,
  getters: xS,
  actions: US,
  mutations: IS
}, zS = {
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
  appendixSectionTitles: bv
}, OS = {
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
}, jS = {
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
}, HS = {
  namespaced: !0,
  state: zS,
  getters: OS,
  actions: {},
  mutations: jS
}, qS = {
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
}, GS = {
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
function XS() {
  return K.getLanguagePairs().then((e) => e.sourceLanguages);
}
function WS(e, t) {
  return C(this, null, function* () {
    const n = K.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new te(e, t, o.mt)
      )
    );
  });
}
function KS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function YS(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = K.getWikiDomainCode(e), i = K.getWikiDomainCode(t), c = {
    action: "wblinktitles",
    fromsite: s.replace(i, a),
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
const Ai = {
  fetchSupportedLanguageCodes: XS,
  fetchSupportedMTProviders: WS,
  fetchCXServerToken: KS,
  addWikibaseLink: YS
};
function JS(n) {
  return C(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Ai.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function QS(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield no.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const ZS = {
  fetchNearbyPages: QS,
  fetchSupportedLanguageCodes: JS
}, ey = {
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
}, ty = {
  namespaced: !0,
  state: qS,
  getters: GS,
  actions: ZS,
  mutations: ey
}, ny = {
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
}, oy = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, sy = {
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
}, ay = {
  namespaced: !0,
  state: ny,
  getters: oy,
  actions: {},
  mutations: sy
}, iy = window.Vuex.createStore, ry = iy({
  modules: { translator: RS, suggestions: HS, mediawiki: ty, application: ay }
});
function ly() {
  return ih().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ih() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const cy = typeof Proxy == "function", uy = "devtools-plugin:setup", dy = "plugin:settings:set";
let so, lc;
function gy() {
  var e;
  return so !== void 0 || (typeof window != "undefined" && window.performance ? (so = !0, lc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (so = !0, lc = global.perf_hooks.performance) : so = !1), so;
}
function py() {
  return gy() ? lc.now() : Date.now();
}
class my {
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
        return py();
      }
    }, n && n.on(dy, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...d) => {
        this.onQueue.push({
          method: c,
          args: d
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...d) => (this.targetQueue.push({
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
    return C(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function hy(e, t) {
  const n = e, o = ih(), s = ly(), a = cy && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(uy, e, t);
  else {
    const i = a ? new my(n, s) : null;
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
const rh = window.Vue.getCurrentInstance, To = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const jt = window.Vue.computed, Us = window.Vue.unref, wy = window.Vue.watchEffect, lh = window.Vue.defineComponent, fy = window.Vue.reactive, ch = window.Vue.h, ar = window.Vue.provide, _y = window.Vue.ref, uh = window.Vue.watch, vy = window.Vue.shallowRef, Sy = window.Vue.shallowReactive, yy = window.Vue.nextTick, dn = typeof window != "undefined";
function Cy(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Y = Object.assign;
function ir(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Ze(s) ? s.map(e) : e(s);
  }
  return n;
}
const Is = () => {
}, Ze = Array.isArray;
function q(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const by = /\/$/, ky = (e) => e.replace(by, "");
function rr(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let d = t.indexOf("?");
  return c < d && c >= 0 && (d = -1), d > -1 && (o = t.slice(0, d), a = t.slice(d + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = Vy(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function xy(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Qu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Zu(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Pn(t.matched[o], n.matched[s]) && dh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Pn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function dh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!$y(e[n], t[n]))
      return !1;
  return !0;
}
function $y(e, t) {
  return Ze(e) ? ed(e, t) : Ze(t) ? ed(t, e) : e === t;
}
function ed(e, t) {
  return Ze(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Vy(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return q(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
function Ey(e) {
  if (!e)
    if (dn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ky(e);
}
const Ly = /^[^#]+#/;
function Ay(e, t) {
  return e.replace(Ly, "#") + t;
}
function Dy(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Di = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Ty(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          q(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        q(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && q(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Dy(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function td(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const cc = /* @__PURE__ */ new Map();
function By(e, t) {
  cc.set(e, t);
}
function Py(e) {
  const t = cc.get(e);
  return cc.delete(e), t;
}
let Fy = () => location.protocol + "//" + location.host;
function gh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, d = s.slice(c);
    return d[0] !== "/" && (d = "/" + d), Qu(d, "");
  }
  return Qu(n, e) + o + s;
}
function My(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: u }) => {
    const p = gh(e, location), m = n.value, h = t.value;
    let w = 0;
    if (u) {
      if (n.value = p, t.value = u, i && i === m) {
        i = null;
        return;
      }
      w = h ? u.position - h.position : 0;
    } else
      o(p);
    s.forEach((_) => {
      _(n.value, m, {
        delta: w,
        type: Os.pop,
        direction: w ? w > 0 ? Rs.forward : Rs.back : Rs.unknown
      });
    });
  };
  function d() {
    i = n.value;
  }
  function g(u) {
    s.push(u);
    const p = () => {
      const m = s.indexOf(u);
      m > -1 && s.splice(m, 1);
    };
    return a.push(p), p;
  }
  function r() {
    const { history: u } = window;
    u.state && u.replaceState(Y({}, u.state, { scroll: Di() }), "");
  }
  function l() {
    for (const u of a)
      u();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", r, {
    passive: !0
  }), {
    pauseListeners: d,
    listen: g,
    destroy: l
  };
}
function nd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Di() : null
  };
}
function Ny(e) {
  const { history: t, location: n } = window, o = {
    value: gh(e, n)
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
  function a(d, g, r) {
    const l = e.indexOf("#"), u = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + d : Fy() + e + d;
    try {
      t[r ? "replaceState" : "pushState"](g, "", u), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? q("Error with push/replace State", p) : console.error(p), n[r ? "replace" : "assign"](u);
    }
  }
  function i(d, g) {
    const r = Y({}, t.state, nd(
      s.value.back,
      // keep back and forward entries but override current position
      d,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(d, r, !0), o.value = d;
  }
  function c(d, g) {
    const r = Y(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: d,
        scroll: Di()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && q(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const l = Y({}, nd(o.value, d, null), { position: r.position + 1 }, g);
    a(d, l, !1), o.value = d;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function Uy(e) {
  e = Ey(e);
  const t = Ny(e), n = My(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = Y({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Ay.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Iy(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && q(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Uy(e);
}
function Ry(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ph(e) {
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
}, uc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var od;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(od || (od = {}));
const zy = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${jy(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? Y(new Error(zy[e](t)), {
    type: e,
    [uc]: !0
  }, t) : Y(new Error(), {
    type: e,
    [uc]: !0
  }, t);
}
function Wt(e, t) {
  return e instanceof Error && uc in e && (t == null || !!(e.type & t));
}
const Oy = ["params", "query", "hash"];
function jy(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Oy)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const sd = "[^/]+?", Hy = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, qy = /[.+*?^${}()[\]/\\]/g;
function Gy(e, t) {
  const n = Y({}, Hy, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const r = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let l = 0; l < g.length; l++) {
      const u = g[l];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (u.type === 0)
        l || (s += "/"), s += u.value.replace(qy, "\\$&"), p += 40;
      else if (u.type === 1) {
        const { value: m, repeatable: h, optional: w, regexp: _ } = u;
        a.push({
          name: m,
          repeatable: h,
          optional: w
        });
        const f = _ || sd;
        if (f !== sd) {
          p += 10;
          try {
            new RegExp(`(${f})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${f}): ` + y.message);
          }
        }
        let S = h ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
        l || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && g.length < 2 ? `(?:/${S})` : "/" + S), w && (S += "?"), s += S, p += 20, w && (p += -8), h && (p += -20), f === ".*" && (p += -50);
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
    for (let u = 1; u < r.length; u++) {
      const p = r[u] || "", m = a[u - 1];
      l[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return l;
  }
  function d(g) {
    let r = "", l = !1;
    for (const u of e) {
      (!l || !r.endsWith("/")) && (r += "/"), l = !1;
      for (const p of u)
        if (p.type === 0)
          r += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: w } = p, _ = m in g ? g[m] : "";
          if (Ze(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const f = Ze(_) ? _.join("/") : _;
          if (!f)
            if (w)
              u.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : l = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          r += f;
        }
    }
    return r || "/";
  }
  return {
    re: i,
    score: o,
    keys: a,
    parse: c,
    stringify: d
  };
}
function Xy(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Wy(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Xy(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (ad(o))
      return 1;
    if (ad(s))
      return -1;
  }
  return s.length - o.length;
}
function ad(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ky = {
  type: 0,
  value: ""
}, Yy = /[a-zA-Z0-9_]/;
function Jy(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Ky]];
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
  let c = 0, d, g = "", r = "";
  function l() {
    g && (n === 0 ? a.push({
      type: 0,
      value: g
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (d === "*" || d === "+") && t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: g,
      regexp: r,
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
        d === "/" ? (g && l(), i()) : d === ":" ? (l(), n = 1) : u();
        break;
      case 4:
        u(), n = o;
        break;
      case 1:
        d === "(" ? n = 2 : Yy.test(d) ? u() : (l(), n = 0, d !== "*" && d !== "?" && d !== "+" && c--);
        break;
      case 2:
        d === ")" ? r[r.length - 1] == "\\" ? r = r.slice(0, -1) + d : n = 3 : r += d;
        break;
      case 3:
        l(), n = 0, d !== "*" && d !== "?" && d !== "+" && c--, r = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), l(), i(), s;
}
function Qy(e, t, n) {
  const o = Gy(Jy(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && q(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
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
function Zy(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = ld({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, l, u) {
    const p = !u, m = eC(r);
    ({}).NODE_ENV !== "production" && sC(m, l), m.aliasOf = u && u.record;
    const h = ld(t, r), w = [
      m
    ];
    if ("alias" in r) {
      const S = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const y of S)
        w.push(Y({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: u ? u.record.components : m.components,
          path: y,
          // we might be the child of an alias
          aliasOf: u ? u.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, f;
    for (const S of w) {
      const { path: y } = S;
      if (l && y[0] !== "/") {
        const k = l.record.path, V = k[k.length - 1] === "/" ? "" : "/";
        S.path = l.record.path + (y && V + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = Qy(S, l, h), {}.NODE_ENV !== "production" && l && y[0] === "/" && aC(_, l), u ? (u.alias.push(_), {}.NODE_ENV !== "production" && oC(u, _)) : (f = f || _, f !== _ && f.alias.push(_), p && r.name && !rd(_) && i(r.name)), m.children) {
        const k = m.children;
        for (let V = 0; V < k.length; V++)
          a(k[V], _, u && u.children[V]);
      }
      u = u || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && d(_);
    }
    return f ? () => {
      i(f);
    } : Is;
  }
  function i(r) {
    if (ph(r)) {
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
  function d(r) {
    let l = 0;
    for (; l < n.length && Wy(r, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[l].record.path || !mh(r, n[l])); )
      l++;
    n.splice(l, 0, r), r.record.name && !rd(r) && o.set(r.record.name, r);
  }
  function g(r, l) {
    let u, p = {}, m, h;
    if ("name" in r && r.name) {
      if (u = o.get(r.name), !u)
        throw Bo(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const f = Object.keys(r.params || {}).filter((S) => !u.keys.find((y) => y.name === S));
        f.length && q(`Discarded invalid param(s) "${f.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = u.record.name, p = Y(
        // paramsFromLocation is a new object
        id(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          u.keys.filter((f) => !f.optional).map((f) => f.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && id(r.params, u.keys.map((f) => f.name))
      ), m = u.stringify(p);
    } else if ("path" in r)
      m = r.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && q(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), u = n.find((f) => f.re.test(m)), u && (p = u.parse(m), h = u.record.name);
    else {
      if (u = l.name ? o.get(l.name) : n.find((f) => f.re.test(l.path)), !u)
        throw Bo(1, {
          location: r,
          currentLocation: l
        });
      h = u.record.name, p = Y({}, l.params, r.params), m = u.stringify(p);
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
      meta: nC(w)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: g, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function id(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function eC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: tC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function tC(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function rd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function nC(e) {
  return e.reduce((t, n) => Y(t, n.meta), {});
}
function ld(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function dc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function oC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(dc.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(dc.bind(null, n)))
      return q(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function sC(e, t) {
  t && t.record.name && !e.name && !e.path && q(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function aC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(dc.bind(null, n)))
      return q(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function mh(e, t) {
  return t.children.some((n) => n === e || mh(e, n));
}
const hh = /#/g, iC = /&/g, rC = /\//g, lC = /=/g, cC = /\?/g, wh = /\+/g, uC = /%5B/g, dC = /%5D/g, fh = /%5E/g, gC = /%60/g, _h = /%7B/g, pC = /%7C/g, vh = /%7D/g, mC = /%20/g;
function Ic(e) {
  return encodeURI("" + e).replace(pC, "|").replace(uC, "[").replace(dC, "]");
}
function hC(e) {
  return Ic(e).replace(_h, "{").replace(vh, "}").replace(fh, "^");
}
function gc(e) {
  return Ic(e).replace(wh, "%2B").replace(mC, "+").replace(hh, "%23").replace(iC, "%26").replace(gC, "`").replace(_h, "{").replace(vh, "}").replace(fh, "^");
}
function wC(e) {
  return gc(e).replace(lC, "%3D");
}
function fC(e) {
  return Ic(e).replace(hh, "%23").replace(cC, "%3F");
}
function _C(e) {
  return e == null ? "" : fC(e).replace(rC, "%2F");
}
function js(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && q(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function vC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(wh, " "), i = a.indexOf("="), c = js(i < 0 ? a : a.slice(0, i)), d = i < 0 ? null : js(a.slice(i + 1));
    if (c in t) {
      let g = t[c];
      Ze(g) || (g = t[c] = [g]), g.push(d);
    } else
      t[c] = d;
  }
  return t;
}
function cd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = wC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ze(o) ? o.map((a) => a && gc(a)) : [o && gc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function SC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ze(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const yC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), ud = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ti = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Sh = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), pc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Ko() {
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
function Tn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const d = (l) => {
      l === !1 ? c(Bo(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : Ry(l) ? c(Bo(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? CC(d, t, n) : d);
    let r = Promise.resolve(g);
    if (e.length < 3 && (r = r.then(d)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        r = r.then((u) => d._called ? u : (q(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !d._called) {
        q(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((l) => c(l));
  });
}
function CC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && q(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function lr(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && q(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let c = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw q(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          q(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const d = c;
          c = () => d;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, q(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (bC(c)) {
          const g = (c.__vccOpts || c)[t];
          g && s.push(Tn(g, n, o, a, i));
        } else {
          let d = c();
          ({}).NODE_ENV !== "production" && !("catch" in d) && (q(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), d = Promise.resolve(d)), s.push(() => d.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = Cy(g) ? g.default : g;
            a.components[i] = r;
            const u = (r.__vccOpts || r)[t];
            return u && Tn(u, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function bC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function dd(e) {
  const t = To(Ti), n = To(Sh), o = jt(() => t.resolve(Us(e.to))), s = jt(() => {
    const { matched: d } = o.value, { length: g } = d, r = d[g - 1], l = n.matched;
    if (!r || !l.length)
      return -1;
    const u = l.findIndex(Pn.bind(null, r));
    if (u > -1)
      return u;
    const p = gd(d[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      gd(r) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Pn.bind(null, d[g - 2])) : u
    );
  }), a = jt(() => s.value > -1 && VC(n.params, o.value.params)), i = jt(() => s.value > -1 && s.value === n.matched.length - 1 && dh(n.params, o.value.params));
  function c(d = {}) {
    return $C(d) ? t[Us(e.replace) ? "replace" : "push"](
      Us(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Is) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && dn) {
    const d = rh();
    if (d) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(g), wy(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: jt(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const kC = /* @__PURE__ */ lh({
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
  useLink: dd,
  setup(e, { slots: t }) {
    const n = fy(dd(e)), { options: o } = To(Ti), s = jt(() => ({
      [pd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [pd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : ch("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), xC = kC;
function $C(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function VC(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Ze(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function gd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const pd = (e, t, n) => e != null ? e : t != null ? t : n, EC = /* @__PURE__ */ lh({
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
    ({}).NODE_ENV !== "production" && AC();
    const o = To(pc), s = jt(() => e.route || o.value), a = To(ud, 0), i = jt(() => {
      let g = Us(a);
      const { matched: r } = s.value;
      let l;
      for (; (l = r[g]) && !l.components; )
        g++;
      return g;
    }), c = jt(() => s.value.matched[i.value]);
    ar(ud, jt(() => i.value + 1)), ar(yC, c), ar(pc, s);
    const d = _y();
    return uh(() => [d.value, c.value, e.name], ([g, r, l], [u, p, m]) => {
      r && (r.instances[l] = g, p && p !== r && g && g === u && (r.leaveGuards.size || (r.leaveGuards = p.leaveGuards), r.updateGuards.size || (r.updateGuards = p.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Pn(r, p) || !u) && (r.enterCallbacks[l] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, r = e.name, l = c.value, u = l && l.components[r];
      if (!u)
        return md(n.default, { Component: u, route: g });
      const p = l.props[r], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, w = ch(u, Y({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[r] = null);
        },
        ref: d
      }));
      if ({}.NODE_ENV !== "production" && dn && w.ref) {
        const _ = {
          depth: i.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (Ze(w.ref) ? w.ref.map((S) => S.i) : [w.ref.i]).forEach((S) => {
          S.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        md(n.default, { Component: w, route: g }) || w
      );
    };
  }
});
function md(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const LC = EC;
function AC() {
  const e = rh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    q(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Yo(e, t) {
  const n = Y({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => IC(o, ["instances", "children", "aliasOf"]))
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
function va(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let DC = 0;
function TC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = DC++;
  hy({
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
        value: Yo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const u = l.__vrv_devtools;
        r.tags.push({
          label: (u.name ? `${u.name.toString()}: ` : "") + u.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: yh
        });
      }
      Ze(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((u) => {
        let p = kh, m = "";
        u.isExactActive ? (p = bh, m = "This is exactly active") : u.isActive && (p = Ch, m = "This link is active"), r.tags.push({
          label: u.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), uh(t.currentRoute, () => {
      d(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
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
      const u = {
        guard: va("beforeEach"),
        from: Yo(l, "Current Location during this navigation"),
        to: Yo(r, "Target location")
      };
      Object.defineProperty(r.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: r.fullPath,
          data: u,
          groupId: r.meta.__navigationId
        }
      });
    }), t.afterEach((r, l, u) => {
      const p = {
        guard: va("afterEach")
      };
      u ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: u ? u.message : "",
          tooltip: "Navigation Failure",
          value: u
        }
      }, p.status = va("❌")) : p.status = va("✅"), p.from = Yo(l, "Current Location during this navigation"), p.to = Yo(r, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: r.fullPath,
          time: s.now(),
          data: p,
          logType: u ? "warning" : "default",
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
    function d() {
      if (!g)
        return;
      const r = g;
      let l = n.getRoutes().filter((u) => !u.parent);
      l.forEach(Vh), r.filter && (l = l.filter((u) => (
        // save matches state based on the payload
        mc(u, r.filter.toLowerCase())
      ))), l.forEach((u) => $h(u, t.currentRoute.value)), r.rootNodes = l.map(xh);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === c && d();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const u = n.getRoutes().find((p) => p.record.__vd_id === r.nodeId);
        u && (r.state = {
          options: PC(u)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function BC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function PC(e) {
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
        display: e.keys.map((o) => `${o.name}${BC(o)}`).join(" "),
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
const yh = 15485081, Ch = 2450411, bh = 8702998, FC = 2282478, kh = 16486972, MC = 6710886;
function xh(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: FC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: kh
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: yh
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: bh
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ch
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: MC
  });
  let o = n.__vd_id;
  return o == null && (o = String(NC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(xh)
  };
}
let NC = 0;
const UC = /^\/(.*)\/([a-z]*)$/;
function $h(e, t) {
  const n = t.matched.length && Pn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Pn(o, e.record))), e.children.forEach((o) => $h(o, t));
}
function Vh(e) {
  e.__vd_match = !1, e.children.forEach(Vh);
}
function mc(e, t) {
  const n = String(e.re).match(UC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => mc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = js(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => mc(i, t));
}
function IC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function RC(e) {
  const t = Zy(e.routes, e), n = e.parseQuery || vC, o = e.stringifyQuery || cd, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Ko(), i = Ko(), c = Ko(), d = vy(wn);
  let g = wn;
  dn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = ir.bind(null, (v) => "" + v), l = ir.bind(null, _C), u = (
    // @ts-expect-error: intentionally avoid the type check
    ir.bind(null, js)
  );
  function p(v, D) {
    let A, P;
    return ph(v) ? (A = t.getRecordMatcher(v), P = D) : P = v, t.addRoute(P, A);
  }
  function m(v) {
    const D = t.getRecordMatcher(v);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && q(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, D) {
    if (D = Y({}, D || d.value), typeof v == "string") {
      const N = rr(n, v, D.path), Q = t.resolve({ path: N.path }, D), J = s.createHref(N.fullPath);
      return {}.NODE_ENV !== "production" && (J.startsWith("//") ? q(`Location "${v}" resolved to "${J}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || q(`No match found for location with path "${v}"`)), Y(N, Q, {
        params: u(Q.params),
        hash: js(N.hash),
        redirectedFrom: void 0,
        href: J
      });
    }
    let A;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && q(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = Y({}, v, {
        path: rr(n, v.path, D.path).path
      });
    else {
      const N = Y({}, v.params);
      for (const Q in N)
        N[Q] == null && delete N[Q];
      A = Y({}, v, {
        params: l(N)
      }), D.params = l(D.params);
    }
    const P = t.resolve(A, D), j = v.hash || "";
    ({}).NODE_ENV !== "production" && j && !j.startsWith("#") && q(`A \`hash\` should always start with the character "#". Replace "${j}" with "#${j}".`), P.params = r(u(P.params));
    const se = xy(o, Y({}, v, {
      hash: hC(j),
      path: P.path
    })), z = s.createHref(se);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? q(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : P.matched.length || q(`No match found for location with path "${"path" in v ? v.path : v}"`)), Y({
      fullPath: se,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: j,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === cd ? SC(v.query) : v.query || {}
      )
    }, P, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function f(v) {
    return typeof v == "string" ? rr(n, v, d.value.path) : Y({}, v);
  }
  function S(v, D) {
    if (g !== v)
      return Bo(8, {
        from: D,
        to: v
      });
  }
  function y(v) {
    return L(v);
  }
  function k(v) {
    return y(Y(f(v), { replace: !0 }));
  }
  function V(v) {
    const D = v.matched[v.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: A } = D;
      let P = typeof A == "function" ? A(v) : A;
      if (typeof P == "string" && (P = P.includes("?") || P.includes("#") ? P = f(P) : (
        // force empty params
        { path: P }
      ), P.params = {}), {}.NODE_ENV !== "production" && !("path" in P) && !("name" in P))
        throw q(`Invalid redirect found:
${JSON.stringify(P, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Y({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in P ? {} : v.params
      }, P);
    }
  }
  function L(v, D) {
    const A = g = _(v), P = d.value, j = v.state, se = v.force, z = v.replace === !0, N = V(A);
    if (N)
      return L(
        Y(f(N), {
          state: typeof N == "object" ? Y({}, j, N.state) : j,
          force: se,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        D || A
      );
    const Q = A;
    Q.redirectedFrom = D;
    let J;
    return !se && Zu(o, P, A) && (J = Bo(16, { to: Q, from: P }), De(
      P,
      P,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (J ? Promise.resolve(J) : U(Q, P)).catch((Z) => Wt(Z) ? (
      // navigation redirects still mark the router as ready
      Wt(
        Z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Z : Ne(Z)
    ) : (
      // reject any unknown error
      Le(Z, Q, P)
    )).then((Z) => {
      if (Z) {
        if (Wt(
          Z,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Zu(o, _(Z.to), Q) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (q(`Detected a possibly infinite redirection in a navigation guard when going from "${P.fullPath}" to "${Q.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            Y({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, f(Z.to), {
              state: typeof Z.to == "object" ? Y({}, j, Z.to.state) : j,
              force: se
            }),
            // preserve the original redirectedFrom if any
            D || Q
          );
      } else
        Z = X(Q, P, !0, z, j);
      return M(Q, P, Z), Z;
    });
  }
  function x(v, D) {
    const A = S(v, D);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function T(v) {
    const D = H.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(v) : v();
  }
  function U(v, D) {
    let A;
    const [P, j, se] = zC(v, D);
    A = lr(P.reverse(), "beforeRouteLeave", v, D);
    for (const N of P)
      N.leaveGuards.forEach((Q) => {
        A.push(Tn(Q, v, D));
      });
    const z = x.bind(null, v, D);
    return A.push(z), W(A).then(() => {
      A = [];
      for (const N of a.list())
        A.push(Tn(N, v, D));
      return A.push(z), W(A);
    }).then(() => {
      A = lr(j, "beforeRouteUpdate", v, D);
      for (const N of j)
        N.updateGuards.forEach((Q) => {
          A.push(Tn(Q, v, D));
        });
      return A.push(z), W(A);
    }).then(() => {
      A = [];
      for (const N of se)
        if (N.beforeEnter)
          if (Ze(N.beforeEnter))
            for (const Q of N.beforeEnter)
              A.push(Tn(Q, v, D));
          else
            A.push(Tn(N.beforeEnter, v, D));
      return A.push(z), W(A);
    }).then(() => (v.matched.forEach((N) => N.enterCallbacks = {}), A = lr(se, "beforeRouteEnter", v, D), A.push(z), W(A))).then(() => {
      A = [];
      for (const N of i.list())
        A.push(Tn(N, v, D));
      return A.push(z), W(A);
    }).catch((N) => Wt(
      N,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? N : Promise.reject(N));
  }
  function M(v, D, A) {
    c.list().forEach((P) => T(() => P(v, D, A)));
  }
  function X(v, D, A, P, j) {
    const se = S(v, D);
    if (se)
      return se;
    const z = D === wn, N = dn ? history.state : {};
    A && (P || z ? s.replace(v.fullPath, Y({
      scroll: z && N && N.scroll
    }, j)) : s.push(v.fullPath, j)), d.value = v, De(v, D, A, z), Ne();
  }
  let G;
  function me() {
    G || (G = s.listen((v, D, A) => {
      if (!de.listening)
        return;
      const P = _(v), j = V(P);
      if (j) {
        L(Y(j, { replace: !0 }), P).catch(Is);
        return;
      }
      g = P;
      const se = d.value;
      dn && By(td(se.fullPath, A.delta), Di()), U(P, se).catch((z) => Wt(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : Wt(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        z.to,
        P
        // avoid an uncaught rejection, let push call triggerError
      ).then((N) => {
        Wt(
          N,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === Os.pop && s.go(-1, !1);
      }).catch(Is), Promise.reject()) : (A.delta && s.go(-A.delta, !1), Le(z, P, se))).then((z) => {
        z = z || X(
          // after navigation, all matched components are resolved
          P,
          se,
          !1
        ), z && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Wt(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-A.delta, !1) : A.type === Os.pop && Wt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), M(P, se, z);
      }).catch(Is);
    }));
  }
  let Ve = Ko(), mt = Ko(), Ee;
  function Le(v, D, A) {
    Ne(v);
    const P = mt.list();
    return P.length ? P.forEach((j) => j(v, D, A)) : ({}.NODE_ENV !== "production" && q("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function Tt() {
    return Ee && d.value !== wn ? Promise.resolve() : new Promise((v, D) => {
      Ve.add([v, D]);
    });
  }
  function Ne(v) {
    return Ee || (Ee = !v, me(), Ve.list().forEach(([D, A]) => v ? A(v) : D()), Ve.reset()), v;
  }
  function De(v, D, A, P) {
    const { scrollBehavior: j } = e;
    if (!dn || !j)
      return Promise.resolve();
    const se = !A && Py(td(v.fullPath, 0)) || (P || !A) && history.state && history.state.scroll || null;
    return yy().then(() => j(v, D, se)).then((z) => z && Ty(z)).catch((z) => Le(z, v, D));
  }
  const oe = (v) => s.go(v);
  let O;
  const H = /* @__PURE__ */ new Set(), de = {
    currentRoute: d,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: w,
    getRoutes: h,
    resolve: _,
    options: e,
    push: y,
    replace: k,
    go: oe,
    back: () => oe(-1),
    forward: () => oe(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: mt.add,
    isReady: Tt,
    install(v) {
      const D = this;
      v.component("RouterLink", xC), v.component("RouterView", LC), v.config.globalProperties.$router = D, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Us(d)
      }), dn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !O && d.value === wn && (O = !0, y(s.location).catch((j) => {
        ({}).NODE_ENV !== "production" && q("Unexpected error when starting the router:", j);
      }));
      const A = {};
      for (const j in wn)
        Object.defineProperty(A, j, {
          get: () => d.value[j],
          enumerable: !0
        });
      v.provide(Ti, D), v.provide(Sh, Sy(A)), v.provide(pc, d);
      const P = v.unmount;
      H.add(v), v.unmount = function() {
        H.delete(v), H.size < 1 && (g = wn, G && G(), G = null, d.value = wn, O = !1, Ee = !1), P();
      }, {}.NODE_ENV !== "production" && dn && TC(v, D, t);
    }
  };
  function W(v) {
    return v.reduce((D, A) => D.then(() => T(A)), Promise.resolve());
  }
  return de;
}
function zC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((g) => Pn(g, c)) ? o.push(c) : n.push(c));
    const d = e.matched[i];
    d && (t.matched.find((g) => Pn(g, d)) || s.push(d));
  }
  return [n, o, s];
}
function Ae() {
  return To(Ti);
}
const OC = window.Vue.computed, Eh = () => {
  const { activeDashboardTabParameter: e } = B();
  return { desktopDashboardUrl: OC(() => $m("Special:ContentTranslation", {
    "cx-dashboard": "desktop"
  }) + `#${e.value}`) };
}, jC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', HC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', qC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', GC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', XC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', WC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', KC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', YC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', JC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', QC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', ZC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', eb = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', tb = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', nb = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', ob = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', sb = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', ab = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', ib = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Lh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', rb = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', lb = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', cb = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', ub = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', db = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', gb = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', pb = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', mb = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', hb = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', wb = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', fb = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', _b = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', vb = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20H4a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v13a2 2 0 01-2 2m-6.5-3.5.41-1.09L8 15l-1.09-.41-.41-1.09-.41 1.09L5 15l1.09.41zm2.982-.949.952-2.561 2.53-.964-2.53-.964L9.482 8.5l-.952 2.562-2.53.964 2.53.964zM6 10.5l.547-1.453L8 8.5l-1.453-.547L6 6.5l-.547 1.453L4 8.5l1.453.547z"/>', Sb = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', yb = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', hc = jC, Ah = HC, Dh = {
  ltr: qC,
  shouldFlip: !0
}, Th = {
  ltr: GC,
  shouldFlip: !0
}, Hs = {
  ltr: XC,
  shouldFlip: !0
}, Cb = WC, Bh = KC, Ph = YC, Fh = JC, bb = QC, kb = ZC, Io = eb, Rc = tb, zc = nb, hd = ob, xb = sb, $b = {
  ltr: ab,
  shouldFlip: !0
}, Mh = ib, Vb = {
  langCodeMap: {
    ar: Lh
  },
  default: rb
}, Eb = {
  langCodeMap: {
    ar: Lh
  },
  default: lb
}, Nh = cb, Oc = {
  ltr: ub,
  shouldFlip: !0
}, Lb = db, Qs = {
  ltr: gb,
  shouldFlip: !0
}, jc = {
  ltr: pb,
  shouldFlip: !0
}, Ab = {
  ltr: mb,
  shouldFlip: !0
}, Uh = hb, Db = wb, Tb = fb, Bb = _b, Ih = {
  ltr: vb,
  shouldFlip: !0
}, Pb = Sb, Rh = yb;
const cr = window.Vue.unref, Fb = window.Vue.resolveDirective, ao = window.Vue.createElementVNode, Sa = window.Vue.withDirectives, Mb = window.Vue.withCtx, Nb = window.Vue.openBlock, Ub = window.Vue.createBlock, Ib = { class: "complementary" }, Rb = { class: "complementary mt-4" }, zb = { class: "complementary" }, Ob = ["href"], jb = window.Codex.CdxMessage, Hb = "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation", qb = {
  __name: "CXDashboardBanner",
  setup(e) {
    const { desktopDashboardUrl: t } = Eh();
    return (n, o) => {
      const s = Fb("i18n");
      return Nb(), Ub(cr(jb), {
        icon: cr(Ih),
        class: "cx-dashboard-banner pa-4",
        "allow-user-dismiss": !0
      }, {
        default: Mb(() => [
          Sa(ao("h5", null, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-title"]
          ]),
          Sa(ao("p", Ib, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-description"]
          ]),
          ao("p", Rb, [
            Sa(ao("a", {
              target: "_blank",
              href: Hb
            }, null, 512), [
              [s, void 0, "cx-sx-dashboard-banner-learn-more"]
            ])
          ]),
          ao("p", zb, [
            Sa(ao("a", { href: cr(t) }, null, 8, Ob), [
              [s, void 0, "cx-sx-dashboard-banner-access-previous"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["icon"]);
    };
  }
}, Gb = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, Xb = (e) => {
  const t = Gb(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const ht = window.Vue.unref, io = window.Vue.createVNode, Kt = window.Vue.createElementVNode, wd = window.Vue.renderSlot, fd = window.Vue.withModifiers, ur = window.Vue.toDisplayString, dr = window.Vue.withCtx, Wb = window.Vue.openBlock, Kb = window.Vue.createElementBlock, Yb = window.Vue.createCommentVNode, Jb = { class: "col shrink pe-4" }, Qb = { class: "col" }, Zb = { class: "cx-translation__details column justify-between ma-0" }, ek = { class: "row ma-0" }, tk = { class: "col grow" }, nk = { class: "col shrink ps-2" }, ok = ["dir", "textContent"], sk = ["dir", "textContent"], ak = ["textContent"], ik = window.Vuex.useStore, rk = window.Vue.computed, zh = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: bi,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = ik(), s = (c, d) => {
      const g = o.getters["mediawiki/getPage"](c, d);
      return g == null ? void 0 : g.thumbnail;
    }, a = we(), i = rk(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, d = Xb(n.translation.startTimestamp);
      return a.i18n(
        c[d.postfix],
        d.value
      );
    });
    return (c, d) => e.translation ? (Wb(), Kb("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: d[1] || (d[1] = fd((g) => c.$emit("click"), ["stop"]))
    }, [
      Kt("div", Jb, [
        io(ht(Cc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Kt("div", Qb, [
        Kt("div", Zb, [
          Kt("div", ek, [
            Kt("div", tk, [
              wd(c.$slots, "title")
            ]),
            Kt("div", nk, [
              io(ht(Ie), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: d[0] || (d[0] = fd((g) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          wd(c.$slots, "mid-content"),
          io(ht(F), { class: "cx-translation__footer ma-0" }, {
            default: dr(() => [
              io(ht(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: dr(() => [
                  Kt("span", {
                    class: "mw-ui-autonym",
                    dir: ht(R.getDir)(e.translation.sourceLanguage),
                    textContent: ur(ht(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, ok),
                  io(ht(Ie), {
                    icon: ht(n0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Kt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: ht(R.getDir)(e.translation.targetLanguage),
                    textContent: ur(ht(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, sk)
                ]),
                _: 1
              }),
              io(ht(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: dr(() => [
                  Kt("span", {
                    textContent: ur(i.value)
                  }, null, 8, ak)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Yb("", !0);
  }
};
const Jo = window.Vue.unref, _d = window.Vue.toDisplayString, lk = window.Vue.normalizeClass, ck = window.Vue.createElementVNode, gr = window.Vue.openBlock, uk = window.Vue.createElementBlock, vd = window.Vue.createCommentVNode, Sd = window.Vue.createVNode, ya = window.Vue.withCtx, yd = window.Vue.createBlock, dk = ["lang", "textContent"], gk = ["lang", "textContent"], pk = window.Vue.computed, mk = window.Vue.inject, hk = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: bc,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = mk("colors").gray200, s = pk(
      () => {
        var d;
        return ((d = t.translation.progress) == null ? void 0 : d.any) * 100 || 0;
      }
    ), a = Ae(), { setTranslationURLParams: i } = B(), c = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (d, g) => (gr(), yd(zh, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Jo(Sm),
      onActionIconClicked: g[0] || (g[0] = (r) => d.$emit("delete-translation")),
      onClick: c
    }, {
      title: ya(() => [
        ck("h5", {
          class: lk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: _d(e.translation.sourceTitle)
        }, null, 10, dk),
        e.translation.isLeadSectionTranslation ? vd("", !0) : (gr(), uk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: _d(e.translation.sourceSectionTitle)
        }, null, 8, gk))
      ]),
      "mid-content": ya(() => [
        e.translation.progress ? (gr(), yd(Jo(F), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: ya(() => [
            Sd(Jo(b), null, {
              default: ya(() => [
                Sd(Jo(km), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Jo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : vd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, wk = window.Vuex.useStore, Oh = [], fk = (e, t, n) => Oh.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), _k = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Oh.push(o);
}, vk = () => {
  const e = wk();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !fk(t, n, o) && (s = yield ue.fetchSectionSuggestion(
      t,
      o,
      n
    ), _k(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, jh = "cx-translation-session-position-", Hh = () => jh + mw.user.sessionId(), qh = () => {
  const e = Hh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, Sk = function() {
  const e = qh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(jh)).forEach((n) => mw.storage.remove(n));
  const t = Hh();
  mw.storage.set(t, e + 1);
};
let wc = null;
function yk(e) {
  if (wc)
    return Promise.resolve(wc);
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
function Ck(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function bk(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = qh(), d = {
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
    mw.eventLog.submit(s, Object.assign({}, d, e))
  ) : g = yk(i).then((r) => {
    wc = r, mw.eventLog.submit(
      s,
      Object.assign({}, d, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: Ck(r)
      })
    );
  }), g.then(() => {
    Sk();
  });
}
const et = () => (e) => (e.access_method || (e.access_method = to ? "desktop" : "mobile web"), bk(e)), Gh = window.Vue.ref, Xh = Gh(null), fc = Gh(null), kk = (e) => {
  Xh.value = e;
}, xk = (e) => {
  fc.value = e;
}, Bi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = et();
  return {
    logDashboardTranslationStartEvent: () => {
      const i = {
        event_type: "dashboard_translation_start",
        event_source: Xh.value,
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
      return fc.value && (i.event_context = fc.value), o.value ? (i.translation_source_section = o.value, i.translation_type = "section") : i.translation_type = "article", s(i);
    },
    setStartTranslationEventSource: kk,
    setStartTranslationEventContext: xk
  };
}, Zs = () => {
  const e = Ae(), t = Zm(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Bi();
  return (a, i, c, d, g = null, r = !0) => C(void 0, null, function* () {
    const l = yield t(
      i,
      c,
      a
    );
    l && (n(l), o(d), s(g), r && e.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const Ca = window.Vue.withModifiers, pr = window.Vue.toDisplayString, mr = window.Vue.createElementVNode, st = window.Vue.unref, ba = window.Vue.openBlock, Cd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const fn = window.Vue.createVNode, Nn = window.Vue.withCtx, bd = window.Vue.createElementBlock, $k = ["lang", "href", "textContent"], Vk = {
  key: 1,
  class: "flex"
}, Ek = { key: 2 }, kd = window.Vue.computed, xd = window.Vue.ref, hr = window.Codex.CdxButton, wr = window.Codex.CdxIcon, Lk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Uc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = xd(!0), o = xd(null), s = kd(() => {
      var l;
      return (l = o.value) == null ? void 0 : l.missingSections;
    }), a = kd(
      () => s.value && Object.keys(s.value)[0]
    );
    vk()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((l) => o.value = l).catch((l) => console.log(l)).finally(() => n.value = !1), Ae();
    const { setSectionURLParam: c } = B(), d = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, g = Zs(), r = (l) => {
      g(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), l && c(l);
    };
    return (l, u) => (ba(), Cd(zh, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: d
    }, {
      title: Nn(() => [
        mr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: u[0] || (u[0] = Ca(() => {
          }, ["stop"])),
          textContent: pr(e.translation.sourceTitle)
        }, null, 8, $k)
      ]),
      "mid-content": Nn(() => [
        fn(st(F), { class: "ma-0" }, {
          default: Nn(() => [
            fn(st(b), null, {
              default: Nn(() => [
                n.value ? (ba(), Cd(st(Je), { key: 0 })) : s.value ? (ba(), bd("div", Vk, [
                  fn(st(hr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: u[1] || (u[1] = Ca((p) => r(a.value), ["stop"]))
                  }, {
                    default: Nn(() => [
                      fn(st(wr), {
                        class: "me-1",
                        icon: st(hc)
                      }, null, 8, ["icon"]),
                      mr("span", null, pr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  fn(st(hr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": l.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: u[2] || (u[2] = Ca((p) => r(null), ["stop"]))
                  }, {
                    default: Nn(() => [
                      fn(st(wr), { icon: st(zc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (ba(), bd("div", Ek, [
                  fn(st(hr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: u[3] || (u[3] = Ca((p) => r(null), ["stop"]))
                  }, {
                    default: Nn(() => [
                      fn(st(wr), {
                        class: "me-1",
                        icon: st(hc)
                      }, null, 8, ["icon"]),
                      mr("span", null, pr(l.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Ak = window.Vuex.useStore, Dk = () => {
  const { commit: e } = Ak(), t = et();
  return (n) => C(void 0, null, function* () {
    n.sectionTranslationId ? (yield gt.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    ) : (yield gt.deleteCXTranslation(
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
const Tk = window.Vue.resolveDirective, fr = window.Vue.createElementVNode, Bk = window.Vue.withDirectives, _r = window.Vue.unref, $d = window.Vue.createVNode, Vd = window.Vue.withCtx, Pk = window.Vue.openBlock, Fk = window.Vue.createBlock, Mk = { class: "pa-4" }, Nk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Uk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: bi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Dk(), i = () => {
      a(n.translation), s();
    };
    return (c, d) => {
      const g = Tk("i18n");
      return Pk(), Fk(_r(pt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Vd(() => [
          fr("div", Nk, [
            $d(_r(Fe), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            $d(_r(Fe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: i
            }, null, 8, ["label"])
          ])
        ]),
        default: Vd(() => [
          fr("div", Mk, [
            Bk(fr("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Ik(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Rk(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Ed(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield Ik(e, t, n)).sort(R.sortByAutonym);
  });
}
function Rk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function zk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Ok(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const jk = window.Vue.computed;
function Hk(e, t) {
  const n = jk(() => {
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
const vr = window.Vue.ref, Ld = window.Vue.watch, qk = window.Vue.computed;
function Wh(e, t, n) {
  const o = vr(""), s = vr(-1), a = vr(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = qk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), d = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Ld(e, () => {
    s.value = -1;
  }), Ld(s, () => C(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: d, keyboardNavigationContainer: a, selectedItem: o };
}
function Hc(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const ka = window.Vue.renderSlot, be = window.Vue.unref, Gk = window.Vue.isRef, Ad = window.Vue.createVNode, Qo = window.Vue.withModifiers, Zo = window.Vue.withKeys, _n = window.Vue.createElementVNode, Xk = window.Vue.resolveDirective, xa = window.Vue.withDirectives, Sr = window.Vue.renderList, yr = window.Vue.Fragment, Yt = window.Vue.openBlock, Jt = window.Vue.createElementBlock, Dd = window.Vue.toDisplayString, $a = window.Vue.normalizeClass, Cr = window.Vue.createCommentVNode, Wk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Kk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Yk = { class: "results px-3 pt-4" }, Jk = { class: "results-header ps-8 pb-2" }, Qk = { class: "results-languages--suggestions pa-0 ma-0" }, Zk = ["lang", "dir", "aria-selected", "onClick", "textContent"], ex = { class: "results px-3 pt-4" }, tx = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, nx = ["lang", "dir", "aria-selected", "onClick", "textContent"], ox = ["aria-selected"], sx = { class: "no-results px-3 py-4" }, ax = { class: "ps-8" }, Va = window.Vue.ref, ix = window.Vue.watch, rx = window.Vue.onMounted, Td = window.Vue.computed, Kh = {
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
      default: zk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Va(null), a = Va(""), i = Va([]), c = Va(n.suggestions), d = Td(
      () => Ok(i.value)
    ), g = Td(() => {
      const y = i.value.length;
      return y < 10 ? "few-results" : y < 30 ? "some-results" : "many-results";
    }), r = (y) => o("select", y), l = () => o("close"), { autocompletion: u, onTabSelect: p } = Hk(
      a,
      i
    ), { next: m, prev: h, keyboardNavigationContainer: w, selectedItem: _ } = Wh(a, i, c), f = () => {
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
    return ix(a, Hc(() => C(this, null, function* () {
      i.value = yield Ed(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), rx(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), i.value = yield Ed(
        n.languages,
        "",
        n.searchAPI
      );
    })), (y, k) => {
      const V = Xk("i18n");
      return Yt(), Jt("div", {
        ref_key: "keyboardNavigationContainer",
        ref: w,
        class: "mw-ui-language-selector"
      }, [
        ka(y.$slots, "search", {}, () => [
          _n("div", Wk, [
            Ad(be(sc), {
              value: be(u),
              "onUpdate:value": k[0] || (k[0] = (L) => Gk(u) ? u.value = L : null),
              icon: be(pu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Ad(be(sc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": k[1] || (k[1] = (L) => a.value = L),
              class: "mw-ui-language-selector__search pa-4",
              icon: be(pu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Zo(Qo(f, ["prevent"]), ["enter"]),
                Zo(Qo(be(m), ["stop", "prevent"]), ["down"]),
                Zo(Qo(be(h), ["stop", "prevent"]), ["up"]),
                Zo(Qo(l, ["prevent"]), ["esc"]),
                Zo(Qo(be(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        _n("section", Kk, [
          e.suggestions.length && !a.value ? ka(y.$slots, "suggestions", { key: 0 }, () => [
            _n("section", Yk, [
              xa(_n("p", Jk, null, 512), [
                [V, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              _n("ul", Qk, [
                (Yt(!0), Jt(yr, null, Sr(e.suggestions, (L) => (Yt(), Jt("li", {
                  key: L,
                  class: $a(["language ma-0", { "language--selected": L === be(_) }]),
                  lang: L,
                  dir: be(R.getDir)(L),
                  "aria-selected": L === be(_) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (x) => r(L),
                  textContent: Dd(be(R.getAutonym)(L))
                }, null, 10, Zk))), 128))
              ])
            ])
          ]) : Cr("", !0),
          d.value.length ? ka(y.$slots, "search", { key: 1 }, () => [
            _n("section", ex, [
              e.suggestions.length && !a.value ? xa((Yt(), Jt("p", tx, null, 512)), [
                [V, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Cr("", !0),
              (Yt(!0), Jt(yr, null, Sr(d.value, (L, x) => (Yt(), Jt("ul", {
                key: x,
                class: $a(["results-languages pa-0 ma-0 mb-6", g.value])
              }, [
                (Yt(!0), Jt(yr, null, Sr(L, (T) => (Yt(), Jt("li", {
                  key: T,
                  class: $a(["language ma-0", { "language--selected": T === be(_) }]),
                  lang: T,
                  dir: be(R.getDir)(T),
                  role: "option",
                  "aria-selected": T === be(_) || null,
                  tabindex: "-1",
                  onClick: (U) => r(T),
                  textContent: Dd(be(R.getAutonym)(T))
                }, null, 10, nx))), 128)),
                e.allOptionEnabled && !a.value ? xa((Yt(), Jt("li", {
                  key: 0,
                  class: $a(["language ma-0", { "language--selected": be(_) === "all" }]),
                  role: "option",
                  "aria-selected": be(_) === "all" || null,
                  tabindex: "-1",
                  onClick: k[2] || (k[2] = (T) => r("all"))
                }, null, 10, ox)), [
                  [V, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Cr("", !0)
              ], 2))), 128))
            ])
          ]) : ka(y.$slots, "noresults", { key: 2 }, () => [
            _n("section", sx, [
              xa(_n("h3", ax, null, 512), [
                [V, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const lx = window.Vue.resolveDirective, Bd = window.Vue.withDirectives, es = window.Vue.openBlock, ts = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ke = window.Vue.unref, Pd = window.Vue.toDisplayString, wt = window.Vue.createVNode, Fd = window.Vue.withModifiers, Un = window.Vue.withCtx, cx = window.Vue.normalizeClass, ux = {
  key: 0,
  class: "mw-ui-autonym"
}, dx = ["lang", "dir", "textContent"], gx = {
  key: 0,
  class: "mw-ui-autonym"
}, px = ["lang", "dir", "textContent"], ns = window.Vue.computed, mx = window.Vue.inject, hx = window.Vue.ref, Md = window.Codex.CdxButton, br = window.Codex.CdxIcon, vi = {
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
    const n = e, o = t, s = mx("breakpoints"), a = ns(() => s.value.mobile), i = hx(null), c = ns(() => !!i.value), d = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, l = ns(() => {
      if (!c.value)
        return;
      const w = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[w];
    }), u = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(_, h);
    }, p = ns(
      () => n.selectedSourceLanguage === "all"
    ), m = ns(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const _ = lx("i18n");
      return es(), ts("div", {
        class: cx(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        wt(ke(F), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Un(() => [
            wt(ke(b), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Un(() => [
                wt(ke(Md), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Fd(d, ["stop"])
                }, {
                  default: Un(() => [
                    p.value ? Bd((es(), ts("span", ux, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (es(), ts("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: ke(R.getDir)(e.selectedSourceLanguage),
                      textContent: Pd(ke(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, dx)),
                    wt(ke(br), {
                      size: "x-small",
                      icon: ke(hd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            wt(ke(b), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Un(() => [
                wt(ke(br), { icon: ke(Dh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            wt(ke(b), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Un(() => [
                wt(ke(Md), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Fd(g, ["stop"])
                }, {
                  default: Un(() => [
                    m.value ? Bd((es(), ts("span", gx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (es(), ts("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: ke(R.getDir)(e.selectedTargetLanguage),
                      textContent: Pd(ke(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, px)),
                    wt(ke(br), {
                      size: "x-small",
                      icon: ke(hd)
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
        wt(ke(pt), {
          value: c.value,
          "onUpdate:value": w[0] || (w[0] = (f) => c.value = f),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: r
        }, {
          default: Un(() => [
            wt(ke(Kh), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: l.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: u,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const Nd = window.Vue.unref, wx = window.Vue.createVNode, Ea = window.Vue.createElementVNode, Ud = window.Vue.toDisplayString, fx = window.Vue.openBlock, _x = window.Vue.createElementBlock, vx = { class: "cx-list-empty-placeholder pa-4" }, Sx = { class: "cx-list-empty-placeholder__icon-container" }, yx = { class: "cx-list-empty-placeholder__icon" }, Cx = ["textContent"], bx = ["textContent"], kx = window.Codex.CdxIcon, Yh = {
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
    return (t, n) => (fx(), _x("div", vx, [
      Ea("div", Sx, [
        Ea("div", yx, [
          wx(Nd(kx), { icon: Nd(Nh) }, null, 8, ["icon"])
        ])
      ]),
      Ea("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Ud(e.title)
      }, null, 8, Cx),
      Ea("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Ud(e.description)
      }, null, 8, bx)
    ]));
  }
}, xx = window.Vuex.useStore, $x = window.Vue.ref, La = $x({ draft: !1, published: !1 }), Ro = () => {
  const e = xx(), t = No(), n = (s) => C(void 0, null, function* () {
    let a = yield gt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const i = {};
    for (const c of a) {
      const d = c.sourceLanguage;
      i[d] = i[d] || [], i[d].push(c);
    }
    La.value[s] = !0;
    for (const [c, d] of Object.entries(i))
      t(
        c,
        d.map((g) => g.sourceTitle)
      ), d.forEach((g) => {
        const { targetLanguage: r, targetTitle: l } = g, u = !!e.getters["mediawiki/getPage"](
          r,
          l
        );
        l && !u && e.commit(
          "mediawiki/addPage",
          new Mo({ title: l, pagelanguage: r })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(La.value).filter(
        (i) => !La.value[i]
      ).map(
        (i) => n(i)
      );
      return Promise.all(a).catch((i) => {
        mw.log.error("[CX] Error while fetching translations", i);
      });
    },
    translationsFetched: La
  };
};
const Vx = window.Vue.toDisplayString, kr = window.Vue.normalizeClass, Id = window.Vue.createElementVNode, Bt = window.Vue.openBlock, ro = window.Vue.createBlock, Aa = window.Vue.createCommentVNode, Rd = window.Vue.unref, zd = window.Vue.renderList, Od = window.Vue.Fragment, Da = window.Vue.createElementBlock, Ex = window.Vue.createVNode, jd = window.Vue.withCtx, Lx = ["textContent"], Ax = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Dx = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ta = window.Vue.ref, ft = window.Vue.computed, Tx = window.Vue.inject, Bx = window.Vuex.useStore, Hd = {
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
    const t = e, n = Ta("all"), o = Ta("all"), s = Bx(), { translationsFetched: a } = Ro(), i = ft(
      () => a.value[t.translationStatus]
    ), { enabledTargetLanguages: c } = Fo(), d = Ta(!1), g = Ta(null), r = ft(
      () => t.translationStatus === "draft"
    ), l = ft(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), u = ft(
      () => n.value === "all"
    ), p = ft(
      () => o.value === "all"
    ), m = ft(
      () => l.value.filter(
        (V) => (u.value || V.sourceLanguage === n.value) && (p.value || V.targetLanguage === o.value)
      ).sort((V, L) => V.lastUpdatedTimestamp < L.lastUpdatedTimestamp)
    ), h = ft(() => {
      let V = l.value.map(
        (L) => L.targetLanguage
      );
      return c.value && (V = V.filter(
        (L) => c.value.includes(L)
      )), [...new Set(V)];
    }), w = ft(() => {
      const V = l.value.map(
        (L) => L.sourceLanguage
      );
      return [...new Set(V)];
    }), _ = (V) => {
      g.value = V, d.value = !0;
    }, f = ft(() => t.activeStatus === t.translationStatus), S = Tx("breakpoints"), y = ft(() => S.value.mobile), k = ft(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (V, L) => f.value ? (Bt(), ro(Rd(Ye), {
      key: 0,
      class: kr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: jd(() => [
        Id("div", {
          class: kr(["cx-translation-list__header", k.value])
        }, [
          Id("h3", {
            class: kr(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Vx(V.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Lx),
          m.value.length ? (Bt(), ro(vi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": L[0] || (L[0] = (x) => n.value = x),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": L[1] || (L[1] = (x) => o.value = x),
            "source-languages": w.value,
            "target-languages": h.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Aa("", !0)
        ], 2)
      ]),
      default: jd(() => [
        i.value && !m.value.length ? (Bt(), ro(Yh, {
          key: 0,
          title: V.$i18n("cx-sx-translation-list-empty-title"),
          description: V.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Aa("", !0),
        i.value ? Aa("", !0) : (Bt(), ro(Rd(Je), { key: 1 })),
        r.value ? (Bt(), Da("div", Ax, [
          (Bt(!0), Da(Od, null, zd(m.value, (x) => (Bt(), ro(hk, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (T) => _(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Bt(), Da("div", Dx, [
          (Bt(!0), Da(Od, null, zd(m.value, (x) => (Bt(), ro(Lk, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (T) => _(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Ex(Uk, {
          modelValue: d.value,
          "onUpdate:modelValue": L[2] || (L[2] = (x) => d.value = x),
          translation: g.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Aa("", !0);
  }
}, Px = window.Vue.computed, Fx = window.Vuex.useStore, tt = () => {
  const e = Fx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B();
  return { sectionSuggestion: Px(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Mx = window.Vuex.useStore, Nx = window.Vue.computed, Dt = () => {
  const e = Mx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: Nx(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (i) => i.status === "draft" && i.sourceTitle === s.value && i.sectionTitleMatches(o.value) && i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ) };
}, qd = window.Vue.computed, Ux = window.Vuex.useStore, nt = () => {
  const e = Ux(), { sectionSuggestion: t } = tt(), { currentTranslation: n } = Dt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = qd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = qd(() => {
    var g, r;
    const d = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      d
    );
  });
  return { currentSourcePage: i, currentTargetPage: c };
}, Ix = window.Vue.ref, Rx = window.Vue.watchEffect, zx = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield ue.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((d) => d.level === "2").reduce((d, g, r, l) => {
    const u = r < l.length - 1 ? l[r + 1].byteoffset : s;
    return d[g.line] = u - g.byteoffset, d;
  }, {});
  return Object.keys(c).filter((d) => a[d]).reduce((d, g) => d + c[g], 0);
}), xr = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Ox = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, jx = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Jh = () => {
  const { currentSourcePage: e } = nt(), { sectionSuggestion: t } = tt(), n = Ix(null);
  return Rx(() => {
    if (t.value)
      zx(
        e.value,
        t.value
      ).then((o) => {
        n.value = jx(
          xr(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = xr(e.value.articleSize);
      n.value = Ox(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: xr };
};
const $r = window.Vue.toDisplayString, Vr = window.Vue.openBlock, Gd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const _c = window.Vue.createElementVNode, Hx = window.Vue.unref, qx = window.Vue.withCtx, Gx = window.Vue.createBlock, Xx = {
  key: 0,
  class: "cdx-info-chip__text"
}, Wx = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Kx = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Yx = /* @__PURE__ */ _c("span", null, "/", -1), Jx = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, Qx = window.Codex.CdxInfoChip, Er = window.Vue.computed, Si = {
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
    const t = e, n = Er(() => t.content.lastIndexOf("/")), o = Er(() => t.content.slice(0, n.value)), s = Er(() => t.content.slice(n.value + 1));
    return (a, i) => (Vr(), Gx(Hx(Qx), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: qx(() => [
        n.value === -1 ? (Vr(), Gd("div", Xx, $r(e.content), 1)) : (Vr(), Gd("div", Wx, [
          _c("span", Kx, $r(o.value), 1),
          Yx,
          _c("span", Jx, $r(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ae = window.Vue.unref, _t = window.Vue.createVNode, vn = window.Vue.createElementVNode, Ba = window.Vue.toDisplayString, at = window.Vue.withCtx, Zx = window.Vue.resolveDirective, Lr = window.Vue.withDirectives, In = window.Vue.openBlock, lo = window.Vue.createBlock, co = window.Vue.createCommentVNode, Xd = window.Vue.withModifiers, e2 = window.Vue.createElementBlock, t2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, n2 = { class: "col shrink pe-4" }, o2 = ["lang", "dir", "textContent"], s2 = ["lang", "dir", "textContent"], a2 = ["textContent"], i2 = ["textContent"], Ar = window.Codex.CdxIcon, vt = window.Vue.computed, r2 = window.Vue.inject, l2 = window.Vuex.useStore, vc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Uo, Bn, Lo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = l2(), { bytesToMinutes: o } = Jh(), s = vt(() => t.suggestion), a = vt(
      () => s.value.sourceTitle || s.value.title
    ), i = vt(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), c = vt(
      () => {
        var f;
        return (f = s.value) == null ? void 0 : f.missingSectionsCount;
      }
    ), d = vt(() => {
      var f;
      return (f = i.value) == null ? void 0 : f.description;
    }), g = vt(
      () => s.value instanceof Bn
    ), r = vt(
      () => s.value instanceof Lo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: u } = pe(n), p = vt(
      () => r.value ? Bh : Ph
    ), m = r2("colors"), h = vt(
      () => r.value ? m.blue600 : "currentColor"
    ), w = vt(() => {
      var f;
      return o((f = i.value) == null ? void 0 : f.articleSize) < 15;
    }), _ = vt(
      () => s.value instanceof Xm || s.value instanceof Wm
    );
    return (f, S) => {
      const y = Zx("i18n");
      return s.value ? (In(), e2("div", t2, [
        vn("div", n2, [
          _t(ae(Cc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        _t(ae(F), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: at(() => [
            _t(ae(F), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: at(() => [
                _t(ae(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: at(() => [
                    vn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ae(R.getDir)(s.value.sourceLanguage),
                      textContent: Ba(a.value)
                    }, null, 8, o2)
                  ]),
                  _: 1
                }),
                _t(ae(b), { shrink: "" }, {
                  default: at(() => [
                    vn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ae(R.getDir)(s.value.sourceLanguage),
                      textContent: Ba(d.value)
                    }, null, 8, s2)
                  ]),
                  _: 1
                }),
                w.value && !g.value && !_.value ? (In(), lo(ae(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: at(() => [
                    Lr(vn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : co("", !0),
                g.value ? (In(), lo(ae(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: at(() => [
                    Lr(vn("small", null, null, 512), [
                      [y, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (In(), lo(ae(b), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: at(() => [
                    _t(ae(F), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: at(() => [
                        _t(ae(b), { grow: "" }, {
                          default: at(() => [
                            vn("small", {
                              textContent: Ba(ae(l))
                            }, null, 8, a2),
                            _t(ae(Ar), {
                              icon: ae(Dh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            vn("small", {
                              textContent: Ba(ae(u))
                            }, null, 8, i2)
                          ]),
                          _: 1
                        }),
                        c.value ? (In(), lo(ae(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: at(() => [
                            Lr(vn("small", null, null, 512), [
                              [y, [
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
                _.value ? (In(), lo(ae(b), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: at(() => [
                    _t(Si, {
                      icon: ae(Hs),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : co("", !0)
              ]),
              _: 1
            }),
            _t(ae(b), { shrink: "" }, {
              default: at(() => [
                r.value ? co("", !0) : (In(), lo(ae(Ar), {
                  key: 0,
                  icon: ae(Io),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = Xd((k) => f.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                _t(ae(Ar), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = Xd((k) => f.$emit("bookmark"), ["stop"]))
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
}, c2 = "suggestion_filter_topic_area", u2 = "suggestion_filter_search_result_seed", d2 = "suggestion_filter_collections", g2 = "suggestion_filter_previous_edits", p2 = "suggestion_filter_popular_articles", Qh = (e) => {
  if (e.type === Qe)
    return c2;
  if (e.type === dt)
    return u2;
  if (e.id === ye || e.type === ye)
    return d2;
  if (e.id === At)
    return g2;
  if (e.id === qt)
    return p2;
}, Sc = (e) => {
  if (e.type === Qe || e.type === ye || e.type === dt)
    return e.id;
  if (e.id === ye)
    return "all-collections";
}, m2 = window.Vue.computed, Wd = window.Vue.ref, Kd = window.Vue.watch, qc = (e, t) => {
  const o = Wd([]), s = Wd(!1), a = m2(
    () => o.value.slice(0, 4)
  ), i = Hc(() => C(void 0, null, function* () {
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
  return Kd(t, c), Kd(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, Dr = window.Vue.ref, Yd = window.Vue.watch, h2 = mw.loader.require("ext.cx.articletopics"), w2 = h2.flatMap((e) => e.topics), f2 = () => {
  const e = Dr(""), t = Dr(!1), n = Dr({ topics: [], areas: [] }), o = we(), { pageCollections: s } = Bc(), { sourceLanguageURLParameter: a } = B(), i = (g) => (g = g.toLowerCase(), w2.filter(
    (r) => r.label.toLowerCase().includes(g)
  )), c = (g) => (g = g.toLowerCase(), s.value.filter(
    (r) => r.name.toLowerCase().includes(g)
  )), { searchResultsSlice: d } = qc(a, e);
  return Yd(d, () => {
    n.value.topics = d.value.map((g) => {
      var r;
      return {
        label: g.title,
        value: g.title,
        description: g.description,
        thumbnail: {
          url: (r = g.thumbnail) == null ? void 0 : r.source
        }
      };
    });
  }), Yd(e, () => C(void 0, null, function* () {
    t.value = !0, n.value.areas = [
      ...c(e.value).map((g) => ({
        label: g.name,
        value: g.name,
        description: g.description,
        icon: Hs,
        filterType: ye,
        filterId: g.name
      })),
      ...i(e.value).map((g) => ({
        label: g.label,
        value: g.label,
        description: o.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: Hs,
        filterType: Qe,
        filterId: g.topicId
      }))
    ], t.value = !1;
  })), { searchInput: e, searchLoading: t, searchResults: n };
};
const ie = window.Vue.unref, St = window.Vue.createVNode, Rn = window.Vue.withCtx, _2 = window.Vue.resolveDirective, Pt = window.Vue.createElementVNode, os = window.Vue.withDirectives, Jd = window.Vue.toDisplayString, v2 = window.Vue.createTextVNode, S2 = window.Vue.vShow, y2 = window.Vue.isRef, Qd = window.Vue.renderList, Zd = window.Vue.Fragment, Qt = window.Vue.openBlock, zn = window.Vue.createElementBlock, C2 = window.Vue.normalizeClass, eg = window.Vue.createBlock, tg = window.Vue.createCommentVNode, b2 = { class: "sx-suggestions-filters" }, k2 = { class: "mb-0" }, x2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, $2 = { class: "mb-3" }, V2 = { class: "px-4 pb-4 pt-7" }, E2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, L2 = { class: "sx-suggestions-filters__group-label mb-3" }, A2 = { class: "sx-suggestions-filters__group-filters mb-3" }, D2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, T2 = { key: 0 }, B2 = { key: 1 }, Tr = window.Vue.ref, ng = window.Vue.computed, P2 = window.Vue.inject, og = window.Codex.CdxButton, F2 = window.Codex.CdxIcon, M2 = window.Codex.CdxTextInput, sg = window.Codex.CdxMenu, N2 = {
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
      [At]: Rh,
      [qt]: Mh,
      [ye]: Hs,
      [Qe]: null,
      [dt]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: i, findSelectedFilter: c } = Pc(), d = et(), g = () => {
      m(), n("update:modelValue", !1);
    }, r = () => {
      d({ event_type: "suggestion_filters_close" }), g();
    }, l = () => {
      p.value && (d({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: Sc(
          p.value
        )
      }), i(p.value)), g();
    }, u = Tr(!1), p = Tr(null), m = () => {
      p.value = null;
    }, h = (U) => {
      const M = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: Qh(U),
        event_context: Sc(U)
      };
      d(M), p.value = U, u.value = !0;
    }, w = (U) => p.value ? p.value.id === U.id && p.value.type === U.type : a(U), _ = P2("breakpoints"), f = ng(() => _.value.mobile), { getFilterProvider: S } = Fc(), { searchInput: y, searchResults: k } = f2(), V = ng(
      () => p.value || c()
    ), L = Tr(null), x = (U) => {
      h({
        type: dt,
        id: U.label,
        label: U.label
      }), y.value = "";
    }, T = (U) => {
      h({
        type: U.filterType,
        id: U.filterId,
        label: U.label
      }), y.value = "";
    };
    return (U, M) => {
      const X = _2("i18n");
      return Qt(), eg(ie(pt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: f.value,
        header: !1
      }, {
        default: Rn(() => [
          Pt("section", b2, [
            St(ie(F), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Rn(() => [
                St(ie(b), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Rn(() => [
                    St(ie(og), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": U.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: r
                    }, {
                      default: Rn(() => [
                        St(ie(F2), { icon: ie(Io) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                St(ie(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: Rn(() => [
                    os(Pt("h5", k2, null, 512), [
                      [X, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                St(ie(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Rn(() => [
                    os(St(ie(og), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: l
                    }, {
                      default: Rn(() => [
                        v2(Jd(U.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [S2, u.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Pt("div", x2, [
              os(Pt("h5", $2, null, 512), [
                [X, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Pt("div", null, [
                St(Si, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: V.value.label,
                  icon: o[ie(S)(V.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Pt("div", V2, [
              St(ie(M2), {
                modelValue: ie(y),
                "onUpdate:modelValue": M[0] || (M[0] = (G) => y2(y) ? y.value = G : null),
                placeholder: U.$i18n("cx-sx-suggestions-filter-search-input-placeholder"),
                "input-type": "search",
                "start-icon": ie(Tb),
                clearable: !!ie(y)
              }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
            ]),
            ie(y) ? (Qt(), zn("div", D2, [
              ie(k).topics.length ? (Qt(), zn("div", T2, [
                os(Pt("h5", null, null, 512), [
                  [X, void 0, "cx-sx-suggestions-filter-search-results-topics-label"]
                ]),
                St(ie(sg), {
                  selected: L.value,
                  "onUpdate:selected": M[1] || (M[1] = (G) => L.value = G),
                  expanded: !0,
                  "menu-items": ie(k).topics,
                  "show-thumbnail": "",
                  onMenuItemClick: x
                }, null, 8, ["selected", "menu-items"])
              ])) : tg("", !0),
              ie(k).areas.length ? (Qt(), zn("div", B2, [
                os(Pt("h5", null, null, 512), [
                  [X, void 0, "cx-sx-suggestions-filter-search-results-areas-label"]
                ]),
                St(ie(sg), {
                  selected: L.value,
                  "onUpdate:selected": M[2] || (M[2] = (G) => L.value = G),
                  expanded: !0,
                  "menu-items": ie(k).areas,
                  onMenuItemClick: T
                }, null, 8, ["selected", "menu-items"])
              ])) : tg("", !0)
            ])) : (Qt(), zn("div", E2, [
              (Qt(!0), zn(Zd, null, Qd(ie(s), (G) => (Qt(), zn("div", {
                key: G.id,
                class: "sx-suggestions-filters__group"
              }, [
                Pt("div", L2, Jd(G.label), 1),
                Pt("div", A2, [
                  (Qt(!0), zn(Zd, null, Qd(G.filters, (me) => (Qt(), eg(Si, {
                    key: me.id,
                    class: C2(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                      "sx-suggestions-filters__filter--active": w(me)
                    }]),
                    icon: o[ie(S)(me)],
                    content: me.label,
                    onClick: (Ve) => h(me)
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
const Br = window.Vue.unref, Pa = window.Vue.openBlock, ag = window.Vue.createBlock;
window.Vue.createCommentVNode;
const U2 = window.Vue.renderList, I2 = window.Vue.Fragment, ig = window.Vue.createElementBlock, R2 = window.Vue.normalizeClass, z2 = window.Vue.createVNode, O2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, rg = window.Vue.ref, j2 = window.Vue.computed, lg = window.Vue.watch, H2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = we(), n = et(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: i
    } = Pc(), c = rg(!1), d = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), c.value = !0;
    }, g = (h) => {
      const w = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: Qh(h),
        event_context: Sc(h)
      };
      n(w), s(h);
    }, r = {
      [At]: Rh,
      [qt]: Mh,
      [ye]: Hs,
      [Qe]: null
    }, { getFilterProvider: l } = Fc(), u = (h) => ({
      id: h.id,
      type: h.type,
      icon: r[l(h)],
      label: h.label,
      action: g
    }), p = rg(o());
    lg(c, (h) => {
      h || (p.value = o());
    }), lg(i, (h) => {
      h || (p.value = o());
    });
    const m = j2(() => [
      ...p.value.map(u),
      {
        id: "more",
        icon: zc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: d
      }
    ]);
    return (h, w) => Br(i) ? (Pa(), ag(Br(Je), { key: 0 })) : (Pa(), ig("div", O2, [
      (Pa(!0), ig(I2, null, U2(m.value, (_) => (Pa(), ag(Si, {
        key: _.label,
        class: R2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": Br(a)(_) }]),
        icon: _.icon,
        content: _.label,
        onClick: (f) => _.action(_)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      z2(N2, {
        modelValue: c.value,
        "onUpdate:modelValue": w[0] || (w[0] = (_) => c.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, q2 = window.Vue.computed, G2 = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Fo(), n = q2(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, uo = window.Vue.computed, cg = window.Vue.ref, X2 = window.Vue.watch, W2 = window.Vuex.useStore, K2 = () => {
  const e = W2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Ac(), i = et(), c = uo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), d = uo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = cg(0), r = cg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, u = 4, p = uo(
    () => a(g.value)
  ), m = uo(
    () => s(r.value)
  ), h = () => {
    k(), T(), V(), U();
  }, {
    fetchNextSectionSuggestionsSlice: w,
    fetchNextPageSuggestionsSlice: _
  } = Mc(), f = (M) => M.length === l, S = uo(
    () => f(m.value)
  ), y = uo(
    () => f(p.value)
  ), k = () => {
    const M = (g.value + 1) % u, X = f(
      a(M)
    );
    (!y.value || !X) && w();
  }, V = () => {
    const M = (r.value + 1) % u, X = f(
      s(M)
    );
    (!S.value || !X) && _();
  }, L = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", M), k();
  }, x = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", M), V();
  }, T = () => g.value = (g.value + 1) % u, U = () => r.value = (r.value + 1) % u;
  return X2(
    o,
    () => {
      r.value = 0, V(), g.value = 0, k();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: x,
    discardSectionSuggestion: L,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: d,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: S,
    isCurrentSectionSuggestionsSliceFull: y
  };
}, Y2 = window.Vuex.useStore, Gc = () => {
  const e = Y2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Mc(), o = (g, r, l) => e.state.suggestions.pageSuggestions.find(
    (u) => u.sourceLanguage === g && u.targetLanguage === r && u.sourceTitle === l
  ), s = (g) => C(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: l, targetLanguage: u } = g;
    yield ue.markFavorite(r, l, u);
    const p = new Lo({
      title: r,
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
    markFavoriteSuggestion: (g, r, l) => C(void 0, null, function* () {
      const u = o(
        r,
        l,
        g
      );
      u && (e.commit(
        "suggestions/removePageSuggestionFromList",
        u
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
}, J2 = "suggestion_no_seed", Q2 = "suggestion_recent_edit", Z2 = "suggestion_topic_area", e8 = "suggestion_search_result_seed", t8 = "suggestion_featured", n8 = "suggestion_collections", o8 = () => {
  const { currentSuggestionFilters: e } = B(), { defaultSeedsFetched: t } = Tc();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === At)
      return t.value ? J2 : Q2;
    if (n === Qe)
      return Z2;
    if (n === dt)
      return e8;
    if (o === qt)
      return t8;
    if (o === ye || n === ye)
      return n8;
    throw new Error("Event source cannot be empty");
  };
};
const ug = window.Vue.normalizeClass, s8 = window.Vue.resolveDirective, ss = window.Vue.createElementVNode, Fa = window.Vue.withDirectives, ge = window.Vue.unref, He = window.Vue.openBlock, Ft = window.Vue.createBlock, Sn = window.Vue.createCommentVNode, Pr = window.Vue.createVNode, as = window.Vue.withCtx, dg = window.Vue.renderList, gg = window.Vue.Fragment, Fr = window.Vue.createElementBlock, a8 = window.Vue.toDisplayString, i8 = window.Vue.createTextVNode, r8 = window.Vue.vShow, l8 = { class: "cx-suggestion-list" }, c8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, u8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, d8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Mt = window.Vue.computed, g8 = window.Vue.inject, p8 = window.Vue.ref, m8 = window.Codex.CdxButton, h8 = window.Codex.CdxIcon, w8 = window.Vuex.useStore, f8 = {
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
    } = B(), { supportedLanguageCodes: s, availableTargetLanguages: a } = G2(), i = th(), c = (oe) => i(oe, n.value), d = (oe) => i(t.value, oe), g = o8(), r = Zs(), l = (oe) => {
      r(
        oe.sourceTitle,
        oe.sourceLanguage,
        oe.targetLanguage,
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
      isCurrentPageSuggestionsSliceFull: S,
      isCurrentSectionSuggestionsSliceFull: y
    } = K2(), k = p8(null), V = et(), L = () => {
      V({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), w(), k.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: x, markFavoritePageSuggestion: T } = Gc(), U = g8("breakpoints"), M = Mt(() => U.value.mobile), X = Mt(
      () => M.value ? null : "pb-2 flex justify-between items-center"
    ), G = w8(), me = Mt(
      () => G.state.suggestions.isPageSuggestionsFetchPending
    ), Ve = Mt(
      () => G.state.suggestions.isSectionSuggestionsFetchPending
    ), mt = Mt(
      () => me.value || _.value && !S.value
    ), Ee = Mt(
      () => Ve.value || f.value && !y.value
    ), Le = Mt(
      () => me.value || _.value || u.value.length > 0
    ), Tt = Mt(
      () => Ve.value || f.value || p.value.length > 0
    ), Ne = Mt(
      () => !Le.value && !Tt.value
    ), De = Mt(
      () => !f.value && !_.value && !me.value && !Ve.value && !Ne.value
    );
    return (oe, O) => {
      const H = s8("i18n");
      return Fa((He(), Fr("div", l8, [
        Pr(ge(Ye), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: as(() => [
            ss("div", {
              class: ug(["cx-suggestion-list__header-card__header px-4", X.value])
            }, [
              Fa(ss("h3", {
                class: ug(["mw-ui-card__title mb-0", { "py-3": M.value }])
              }, null, 2), [
                [H, void 0, "cx-suggestionlist-title"]
              ]),
              M.value ? Sn("", !0) : (He(), Ft(vi, {
                key: 0,
                "source-languages": ge(s),
                "target-languages": ge(a),
                "selected-source-language": ge(t),
                "selected-target-language": ge(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": d
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Pr(H2)
          ]),
          default: as(() => [
            M.value ? (He(), Ft(vi, {
              key: 0,
              "source-languages": ge(s),
              "target-languages": ge(a),
              "selected-source-language": ge(t),
              "selected-target-language": ge(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": d
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Sn("", !0)
          ]),
          _: 1
        }),
        Le.value ? (He(), Ft(ge(Ye), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: k,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: as(() => [
            Fa(ss("h5", c8, null, 512), [
              [H, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (He(!0), Fr(gg, null, dg(ge(u), (de, W) => (He(), Ft(vc, {
              key: `page-suggestion-${W}`,
              suggestion: de,
              onClose: (v) => ge(m)(de),
              onClick: (v) => l(de),
              onBookmark: (v) => ge(T)(de)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            mt.value ? (He(), Ft(ge(Je), { key: 0 })) : Sn("", !0)
          ]),
          _: 1
        }, 512)) : Sn("", !0),
        Tt.value ? (He(), Ft(ge(Ye), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: as(() => [
            Fa(ss("h5", u8, null, 512), [
              [H, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (He(!0), Fr(gg, null, dg(ge(p), (de, W) => (He(), Ft(vc, {
              key: `section-suggestion-${W}`,
              class: "ma-0",
              suggestion: de,
              onClose: (v) => ge(h)(de),
              onClick: (v) => l(de),
              onBookmark: (v) => ge(x)(de)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Ee.value ? (He(), Ft(ge(Je), { key: 0 })) : Sn("", !0)
          ]),
          _: 1
        })) : Sn("", !0),
        Ne.value ? (He(), Ft(Yh, {
          key: 2,
          title: oe.$i18n("cx-sx-suggestion-list-empty-title"),
          description: oe.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : Sn("", !0),
        ss("div", d8, [
          De.value ? (He(), Ft(ge(m8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: L
          }, {
            default: as(() => [
              Pr(ge(h8), {
                class: "me-1",
                icon: ge(Uh)
              }, null, 8, ["icon"]),
              i8(" " + a8(oe.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Sn("", !0)
        ])
      ], 512)), [
        [r8, e.active]
      ]);
    };
  }
}, _8 = window.Vue.resolveDirective, v8 = window.Vue.createElementVNode, S8 = window.Vue.withDirectives, y8 = window.Vue.renderList, C8 = window.Vue.Fragment, Mr = window.Vue.openBlock, b8 = window.Vue.createElementBlock, pg = window.Vue.unref, mg = window.Vue.createBlock, hg = window.Vue.withCtx, k8 = window.Vue.createCommentVNode, x8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, $8 = window.Vue.computed, V8 = window.Vuex.useStore, E8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = V8(), n = $8(() => t.state.suggestions.favorites || []), o = Zs(), s = (i) => o(
      i.title,
      i.sourceLanguage,
      i.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Gc();
    return (i, c) => {
      const d = _8("i18n");
      return n.value.length ? (Mr(), mg(pg(Ye), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: hg(() => [
          S8(v8("h3", x8, null, 512), [
            [d, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: hg(() => [
          (Mr(!0), b8(C8, null, y8(n.value, (g, r) => (Mr(), mg(vc, {
            key: `favorite-${r}`,
            suggestion: g,
            onClick: (l) => s(g),
            onBookmark: (l) => pg(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : k8("", !0);
    };
  }
};
const L8 = window.Vue.resolveDirective, Ma = window.Vue.createElementVNode, A8 = window.Vue.withDirectives, D8 = window.Vue.renderList, T8 = window.Vue.Fragment, Nr = window.Vue.openBlock, Ur = window.Vue.createElementBlock, B8 = window.Vue.unref, P8 = window.Vue.createVNode, F8 = window.Vue.toDisplayString, M8 = { class: "cx-help-panel pa-4" }, N8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, U8 = ["href", "target"], I8 = ["textContent"], R8 = window.Vue.computed, z8 = window.Codex.CdxIcon, O8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const { desktopDashboardUrl: t } = Eh(), n = we(), o = R8(() => {
      const s = [
        {
          icon: Eb,
          label: n.i18n("cx-sx-dashboard-help-panel-more-info-label"),
          href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
          target: "_blank"
        },
        {
          icon: Fh,
          label: n.i18n("cx-sx-dashboard-help-panel-stats-label"),
          href: mw.util.getUrl("Special:ContentTranslationStats"),
          target: "_blank"
        },
        {
          icon: $b,
          label: n.i18n("cx-sx-dashboard-help-panel-feedback-label"),
          href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
          target: "_blank"
        }
      ];
      return to && s.push({
        icon: Ih,
        label: n.i18n("cx-sx-dashboard-banner-access-previous"),
        href: t.value,
        target: "_self"
      }), s;
    });
    return (s, a) => {
      const i = L8("i18n");
      return Nr(), Ur("div", M8, [
        A8(Ma("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Ma("ul", N8, [
          (Nr(!0), Ur(T8, null, D8(o.value, (c, d) => (Nr(), Ur("li", {
            key: d,
            class: "mt-4"
          }, [
            Ma("a", {
              href: c.href,
              target: c.target
            }, [
              P8(B8(z8), {
                class: "me-2",
                icon: c.icon
              }, null, 8, ["icon"]),
              Ma("span", {
                textContent: F8(c.label)
              }, null, 8, I8)
            ], 8, U8)
          ]))), 128))
        ])
      ]);
    };
  }
};
const j8 = window.Vue.resolveDirective, go = window.Vue.createElementVNode, Ir = window.Vue.withDirectives, wg = window.Vue.toDisplayString, Rr = window.Vue.unref, zr = window.Vue.withCtx, Or = window.Vue.createVNode, H8 = window.Vue.openBlock, q8 = window.Vue.createElementBlock, G8 = { class: "cx-stats-panel pa-4" }, X8 = ["textContent"], W8 = { class: "cx-stats-panel__monthly-stats-label" }, K8 = ["textContent"], Y8 = { class: "cx-stats-panel__total-stats-label" }, J8 = window.Vue.ref, fg = window.Vue.computed, Q8 = window.Vue.watch, Z8 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = fg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.count) || 0;
    }), s = fg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.delta) || 0;
    }), a = J8(null);
    return Q8(
      () => t.stats,
      () => {
        const i = t.stats, c = a.value.getContext("2d"), d = Object.keys(t.stats || {}).sort(), g = d.reduce(
          (y, k) => Math.max(y, i[k].delta),
          0
        ), r = d.map((y) => i[y].delta), l = a.value.getBoundingClientRect().width, u = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = u;
        const p = 4, m = 6, h = 50, w = (h - p) / g;
        let _ = p;
        const f = Math.floor(
          (l - p) / (m + p)
        ), S = r.slice(
          Math.max(r.length - f, 0)
        );
        S.forEach((y, k) => {
          k === S.length - 1 && (c.fillStyle = "#36c");
          const V = h - y * w;
          c.fillRect(_, V, m, y * w), _ += m + p;
        });
      }
    ), (i, c) => {
      const d = j8("i18n");
      return H8(), q8("div", G8, [
        Ir(go("h5", null, null, 512), [
          [d, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Or(Rr(F), null, {
          default: zr(() => [
            Or(Rr(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: zr(() => [
                go("h3", {
                  textContent: wg(s.value)
                }, null, 8, X8),
                Ir(go("h5", W8, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Or(Rr(b), { class: "cx-stats-panel__total-stats" }, {
              default: zr(() => [
                go("h3", {
                  textContent: wg(o.value)
                }, null, 8, K8),
                Ir(go("h5", Y8, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
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
}, Zh = () => {
  const e = et();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const e$ = window.Vue.renderSlot, t$ = window.Vue.unref, n$ = window.Vue.createVNode, o$ = window.Vue.createElementVNode, s$ = window.Vue.openBlock, a$ = window.Vue.createElementBlock, i$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, r$ = { class: "col-12 ma-0 pa-0" }, l$ = {
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
    const n = t, o = Zh(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, i) => (s$(), a$("footer", i$, [
      o$("div", r$, [
        e$(a.$slots, "default", {}, () => [
          n$(t$(qs), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, c$ = window.Vuex.useStore, u$ = () => {
  const e = c$(), t = No();
  return () => C(void 0, null, function* () {
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
}, d$ = window.Vuex.useStore, ew = () => {
  const e = d$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: i } = Tm(), { previousRoute: c } = pe(e), d = et(), g = () => {
    const u = {
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
    return u[p];
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
    const u = r(), p = {
      event_type: "dashboard_open",
      event_source: u,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return u === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), d(p);
  }, getEventSource: r };
}, g$ = window.Vue.watch, p$ = () => {
  const { fetchAllTranslations: e } = Ro(), t = Qm(), n = u$(), { fetchPageCollections: o } = Bc(), { logDashboardOpenEvent: s } = ew(), { applicationLanguagesInitialized: a } = nh();
  return () => C(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield e(), g$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, _g = window.Vue.computed, m$ = window.Vue.ref, h$ = window.Vue.watch, w$ = window.Vue.watchEffect, f$ = window.Vuex.useStore, _$ = ["suggestions", "draft", "published"], v$ = () => {
  const e = f$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), { translationsFetched: o } = Ro(), s = m$(null);
  if (_$.includes(t.value))
    s.value = t.value;
  else {
    const a = _g(
      () => o.value.draft
    ), i = _g(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", h$(a, (c) => {
      c && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return w$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, S$ = window.Vue.computed, y$ = () => {
  const e = we();
  return S$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Jf,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Ci,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: Yf,
        type: "text"
      }
    }
  ]);
};
const re = window.Vue.unref, xe = window.Vue.createVNode, C$ = window.Vue.toDisplayString, b$ = window.Vue.createTextVNode, yt = window.Vue.withCtx, Na = window.Vue.openBlock, jr = window.Vue.createBlock, Hr = window.Vue.createCommentVNode, k$ = window.Vue.vShow, x$ = window.Vue.withDirectives, $$ = window.Vue.isRef, V$ = window.Vue.createElementBlock, vg = window.Vue.computed, E$ = window.Vuex.useStore, L$ = window.Codex.CdxButton, A$ = window.Codex.CdxIcon, D$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Ae(), n = et(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    p$()();
    const a = E$();
    a.dispatch("translator/fetchTranslatorStats");
    const i = vg(() => a.state.translator.translatorStats), c = vg(() => a.state.application.bannerDismissed), d = () => {
      a.commit("application/dismissBanner");
    }, g = v$(), r = y$(), l = Zh(), u = (p) => {
      l(p), g.value = p;
    };
    return (p, m) => (Na(), V$("div", null, [
      xe(re(F), { class: "ma-0 pb-4" }, {
        default: yt(() => [
          xe(re(L$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: yt(() => [
              xe(re(A$), {
                class: "me-1",
                icon: re(hc)
              }, null, 8, ["icon"]),
              b$(" " + C$(p.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      re(to) && !c.value ? (Na(), jr(re(F), {
        key: 0,
        class: "ma-0",
        align: "start"
      }, {
        default: yt(() => [
          xe(re(b), { class: "col-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2" }, {
            default: yt(() => [
              xe(qb, {
                class: "mb-4",
                onUserDismissed: m[0] || (m[0] = (h) => d())
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : Hr("", !0),
      xe(re(F), {
        class: "ma-0",
        align: "start"
      }, {
        default: yt(() => [
          p.$mwui.breakpoint.tabletAndUp ? (Na(), jr(re(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: yt(() => [
              xe(re(qs), {
                id: "dashboard-list-selector--desktop",
                items: re(r),
                active: re(g),
                onSelect: u
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Hr("", !0),
          xe(re(b), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: yt(() => [
              x$(xe(E8, null, null, 512), [
                [k$, re(g) === "suggestions"]
              ]),
              xe(f8, {
                active: re(g) === "suggestions"
              }, null, 8, ["active"]),
              xe(Hd, {
                "translation-status": "draft",
                "active-status": re(g)
              }, null, 8, ["active-status"]),
              xe(Hd, {
                "translation-status": "published",
                "active-status": re(g)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          xe(re(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: yt(() => [
              xe(re(F), {
                class: "ma-0",
                align: "start"
              }, {
                default: yt(() => [
                  xe(re(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: yt(() => [
                      xe(Z8, { stats: i.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  xe(re(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: yt(() => [
                      xe(O8)
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
      p.$mwui.breakpoint.mobile ? (Na(), jr(l$, {
        key: 1,
        active: re(g),
        "onUpdate:active": m[1] || (m[1] = (h) => $$(g) ? g.value = h : null),
        items: re(r)
      }, null, 8, ["active", "items"])) : Hr("", !0)
    ]));
  }
}, T$ = {
  name: "DashboardView",
  components: { CxDashboard: D$ }
}, B$ = window.Vue.resolveComponent, P$ = window.Vue.createVNode, F$ = window.Vue.openBlock, M$ = window.Vue.createElementBlock, N$ = { class: "cx-translation-dashboard" };
function U$(e, t, n, o, s, a) {
  const i = B$("cx-dashboard");
  return F$(), M$("main", N$, [
    P$(i, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Sg = /* @__PURE__ */ ne(T$, [["render", U$]]), po = window.Vue.computed, I$ = () => {
  const { sectionSuggestion: e } = tt(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Dt(), o = po(
    () => {
      var u, p, m;
      return (m = (p = (u = e.value) == null ? void 0 : u.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = po(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.missingSectionsCount;
    }
  ), a = po(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: c } = mn(), d = po(() => i ? K.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), g = (u) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : u ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", r = po(() => {
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
  }), l = po(
    () => {
      var u;
      return !i.value || ((u = e.value) == null ? void 0 : u.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: g,
    isProgressiveButton: l,
    targetArticlePath: d
  };
};
function R$(e) {
  return e.$el = $(e), e;
}
function z$(e, t, n, o) {
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
function O$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function j$(e, t) {
  return C(this, null, function* () {
    yield Xc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = R$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const H$ = window.Vue.computed, q$ = window.Vue.onMounted, G$ = window.Vue.ref;
function X$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const W$ = {
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
    const n = G$(null);
    let o = null;
    const s = H$(() => o.getHtml()), a = () => {
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
    return q$(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = X$;
      const r = yield j$(d, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = z$(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = O$, o.focus();
    })), { sxeditor: n };
  }
}, yc = window.Vue.createElementVNode, K$ = window.Vue.openBlock, Y$ = window.Vue.createElementBlock, J$ = ["lang", "dir"], Q$ = /* @__PURE__ */ yc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ yc("div", { class: "toolbar" })
], -1), Z$ = ["lang", "dir"];
function e4(e, t, n, o, s, a) {
  return K$(), Y$("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    Q$,
    yc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, Z$)
  ], 8, J$);
}
const t4 = /* @__PURE__ */ ne(W$, [["render", e4]]);
function Xc() {
  return mw.loader.using("mw.cx3.ve");
}
const n4 = window.Vuex.useStore, o4 = () => {
  const e = n4();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Xc(), new Promise((s) => {
      setTimeout(() => {
        const a = Hm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, s4 = window.Vuex.useStore, tw = () => {
  const e = s4();
  return (t, n, o, s = null) => C(void 0, null, function* () {
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
}, Pi = () => {
  const { currentSourcePage: e } = nt(), t = o4(), n = tw(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i,
    revisionURLParameter: c
  } = B(), d = (l, u) => C(void 0, null, function* () {
    l() || (yield n(
      s.value,
      a.value,
      i.value,
      c.value
    ), to || (yield t(
      s.value,
      i.value
    ))), u();
  });
  return {
    selectPageSectionByIndex: (l) => {
      const u = () => {
        var m;
        return (m = e.value.sections) == null ? void 0 : m[l];
      };
      return d(u, () => {
        const m = u();
        l === 0 ? m.originalTitle = e.value.title : o(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (l) => d(() => e.value.getSectionByTitle(l), () => {
      o(l);
    })
  };
}, a4 = window.Vuex.useStore, zo = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = B(), a = a4(), i = Ae(), c = () => {
    const l = i.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return i.getRoutes().find((u) => u.name === l);
  }, d = () => {
    const r = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), l = K.getCurrentWikiLanguageCode();
    if (!r || t.value === l)
      return !1;
    const u = o.value ? { section: o.value } : {}, p = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      u
    );
    return location.href = p + "#" + c().path, !0;
  }, g = () => {
    location.href = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (K.setCXToken(
      e.value,
      t.value,
      n.value
    ), to) {
      g();
      return;
    }
    if (d())
      return;
    const l = c();
    i.push({ name: l.name });
  };
}, Wc = () => {
  const e = et(), { currentTranslation: t } = Dt();
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
      sourceSectionTitle: d,
      targetSectionTitle: g
    } = t.value;
    return e({
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_source_section: d,
      translation_target_language: s,
      translation_target_title: i,
      translation_target_section: g,
      translation_type: c ? "article" : "section"
    });
  };
}, i4 = window.Vue.ref, r4 = () => {
  const e = Ae(), { logDashboardTranslationStartEvent: t } = Bi(), n = Wc(), o = zo(), { sectionURLParameter: s } = B(), { targetPageExists: a } = mn(), { selectPageSectionByTitle: i } = Pi(), c = () => C(void 0, null, function* () {
    yield i(s.value), e.push({ name: "sx-content-comparator" });
  }), d = i4(!1), { currentTranslation: g } = Dt();
  return {
    handlePrimaryButtonClick: () => {
      g.value ? g.value.isArticleTranslation && !to ? d.value = !0 : (n(), o()) : s.value ? c() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: d
  };
};
const l4 = window.Vue.resolveDirective, yg = window.Vue.createElementVNode, Cg = window.Vue.withDirectives, c4 = window.Vue.unref, u4 = window.Vue.withCtx, d4 = window.Vue.openBlock, g4 = window.Vue.createBlock, p4 = {
  href: "",
  target: "_blank"
}, m4 = window.Codex.CdxDialog, h4 = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = we(), i = {
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
    return (g, r) => {
      const l = l4("i18n");
      return d4(), g4(c4(m4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": i,
        "default-action": c,
        "onUpdate:open": r[0] || (r[0] = (u) => s(u)),
        onPrimary: d,
        onDefault: r[1] || (r[1] = (u) => s(!1))
      }, {
        default: u4(() => [
          Cg(yg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Cg(yg("a", p4, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const _e = window.Vue.unref, w4 = window.Vue.resolveDirective, is = window.Vue.createElementVNode, bg = window.Vue.withDirectives, rs = window.Vue.toDisplayString, ls = window.Vue.openBlock, qr = window.Vue.createElementBlock, Gr = window.Vue.createCommentVNode, it = window.Vue.createVNode, Ct = window.Vue.withCtx, Xr = window.Vue.createTextVNode, f4 = window.Vue.withModifiers, kg = window.Vue.createBlock, _4 = window.Vue.Fragment, v4 = { class: "sx-translation-confirmer-body pb-4" }, S4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, y4 = ["textContent"], C4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, b4 = ["href"], k4 = ["textContent"], Ua = window.Vue.computed, x4 = window.Vue.inject, xg = window.Vue.ref, $4 = window.Vue.watchEffect, V4 = window.Vuex.useStore, Wr = window.Codex.CdxButton, E4 = window.Codex.CdxIcon, L4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Ae(), o = V4();
    x4("colors");
    const { sectionSuggestion: s } = tt(), { targetLanguageAutonym: a } = pe(o), { sectionURLParameter: i } = B(), { logDashboardTranslationStartEvent: c } = Bi(), d = zo(), { handlePrimaryButtonClick: g, translationConfirmationDialogOn: r } = r4(), l = xg(!1), u = xg(null), p = () => C(this, null, function* () {
      let X = !0;
      try {
        X = yield gt.checkUnreviewedTranslations();
      } catch (G) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          G
        );
      }
      X !== !0 && (l.value = !0, u.value = X.targetUrl);
    }), m = () => C(this, null, function* () {
      yield p(), !l.value && (c(), d());
    }), h = () => C(this, null, function* () {
      yield p(), !l.value && g();
    }), w = t;
    $4(() => {
      r.value && (w("open-translation-confirmation-dialog"), r.value = !1);
    });
    const {
      actionInformationMessageArgs: _,
      getActionButtonLabel: f,
      isProgressiveButton: S,
      targetArticlePath: y
    } = I$(), k = we(), V = Ua(
      () => k.i18n(f(!!i.value))
    ), L = Ua(
      () => k.i18n(..._.value)
    ), x = () => C(this, null, function* () {
      yield p(), !l.value && n.push({ name: "sx-section-selector" });
    }), T = Ua(() => {
      var X, G;
      return i.value && !!((G = (X = s.value) == null ? void 0 : X.sourceSections) != null && G.length);
    }), { targetPageExists: U } = mn(), M = Ua(() => !i.value && U.value && to);
    return (X, G) => {
      const me = w4("i18n");
      return ls(), qr(_4, null, [
        is("section", v4, [
          _e(i) ? (ls(), qr("section", S4, [
            bg(is("h6", null, null, 512), [
              [me, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            is("h5", {
              class: "ma-0",
              textContent: rs(_e(i))
            }, null, 8, y4)
          ])) : _e(U) ? (ls(), qr("section", C4, [
            it(_e(F), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Ct(() => [
                bg(it(_e(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [me, [_e(a)], "cx-sx-existing-translation-status"]
                ]),
                it(_e(b), { shrink: "" }, {
                  default: Ct(() => [
                    is("a", {
                      href: _e(y),
                      target: "_blank"
                    }, [
                      it(_e(E4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: _e(Oc)
                      }, null, 8, ["icon"])
                    ], 8, b4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            it(_e(F), { class: "ma-0" }, {
              default: Ct(() => [
                it(_e(b), null, {
                  default: Ct(() => [
                    is("span", {
                      textContent: rs(L.value)
                    }, null, 8, k4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Gr("", !0),
          it(_e(F), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Ct(() => [
              T.value ? (ls(), kg(_e(b), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: Ct(() => [
                  it(_e(Wr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f4(x, ["stop"])
                  }, {
                    default: Ct(() => [
                      Xr(rs(X.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Gr("", !0),
              M.value ? (ls(), kg(_e(b), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: Ct(() => [
                  it(_e(Wr), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Ct(() => [
                      Xr(rs(X.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Gr("", !0),
              it(_e(b), { shrink: "" }, {
                default: Ct(() => [
                  it(_e(Wr), {
                    weight: "primary",
                    size: "large",
                    action: _e(S) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Ct(() => [
                      Xr(rs(V.value), 1)
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
        it(h4, {
          modelValue: l.value,
          "onUpdate:modelValue": G[0] || (G[0] = (Ve) => l.value = Ve),
          "target-url": u.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const $g = window.Vue.unref, A4 = window.Vue.openBlock, D4 = window.Vue.createBlock, Vg = window.Vue.computed, nw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Fo(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = B(), { currentLanguageTitleGroup: a } = mn(), i = Vg(
      () => {
        var l;
        return ((l = a.value) == null ? void 0 : l.titles.map((u) => u.lang)) || [];
      }
    ), c = Vg(
      () => n.value || t.value
    ), d = mS(), g = (l) => d(l, s.value), r = (l) => d(o.value, l);
    return (l, u) => (A4(), D4(vi, {
      class: "sx-article-language-selector",
      "source-languages": i.value,
      "target-languages": c.value,
      "selected-source-language": $g(o),
      "selected-target-language": $g(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": r
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Te = window.Vue.unref, Kr = window.Vue.toDisplayString, Zt = window.Vue.createElementVNode, Nt = window.Vue.createVNode, mo = window.Vue.withCtx, T4 = window.Vue.resolveDirective, B4 = window.Vue.withDirectives, P4 = window.Vue.normalizeClass, F4 = window.Vue.openBlock, M4 = window.Vue.createBlock, N4 = ["textContent"], U4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, I4 = ["textContent"], R4 = { class: "pe-3" }, z4 = ["textContent"], O4 = window.Codex.CdxButton, cs = window.Codex.CdxIcon, en = window.Vue.computed, j4 = window.Vuex.useStore, H4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = j4(), n = we(), { currentSourcePage: o } = nt(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = B(), c = en(() => t.state.suggestions.favorites || []), d = en(
      () => c.value.some(
        (V) => i.value === V.title && s.value === V.sourceLanguage && a.value === V.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: r } = Gc(), { translationSizeMessageArgs: l } = Jh(), u = () => g(
      i.value,
      s.value,
      a.value
    ), p = () => r(
      new Lo({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = en(
      () => d.value ? Bh : Ph
    ), h = en(
      () => d.value ? p : u
    ), w = en(
      () => K.getPageUrl(s.value || "", i.value || "")
    ), _ = en(() => {
      var V;
      return (V = o.value) == null ? void 0 : V.langLinksCount;
    }), f = (V) => {
      const L = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let x = 0; x < L.length; x++)
        if (V >= L[x].value)
          return (V / L[x].value).toFixed(1).replace(/\.0$/, "") + L[x].suffix;
      return V.toString();
    }, S = en(() => {
      var L;
      const V = Object.values(((L = o.value) == null ? void 0 : L.pageviews) || {}).reduce(
        (x, T) => x + T,
        0
      );
      return f(V);
    }), y = en(() => l.value ? n.i18n(...l.value) : ""), k = en(() => l.value ? l.value[2] < 15 : !1);
    return (V, L) => {
      const x = T4("i18n");
      return F4(), M4(Te(F), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: mo(() => [
          Nt(Te(b), null, {
            default: mo(() => [
              Nt(Te(F), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: mo(() => [
                  Nt(Te(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: w.value,
                    target: "_blank"
                  }, {
                    default: mo(() => [
                      Zt("h5", {
                        class: "ma-0 me-1",
                        textContent: Kr(Te(i))
                      }, null, 8, N4),
                      Nt(Te(cs), {
                        size: "x-small",
                        icon: Te(Oc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Nt(Te(b), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: mo(() => [
                      Nt(Te(O4), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": V.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: mo(() => [
                          Nt(Te(cs), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Zt("div", U4, [
                Zt("div", null, [
                  Zt("span", null, [
                    Nt(Te(cs), {
                      icon: Te(Nh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Zt("span", {
                      class: "pe-3",
                      textContent: Kr(_.value)
                    }, null, 8, I4)
                  ]),
                  Zt("span", null, [
                    Nt(Te(cs), {
                      icon: Te(Fh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    B4(Zt("span", R4, null, 512), [
                      [x, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Zt("span", {
                  class: P4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": k.value
                  }])
                }, [
                  Nt(Te(cs), {
                    icon: Te(kb),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Zt("span", {
                    textContent: Kr(y.value)
                  }, null, 8, z4)
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
const q4 = window.Vue.resolveDirective, On = window.Vue.createElementVNode, Ia = window.Vue.withDirectives, G4 = window.Vue.toDisplayString, X4 = window.Vue.createTextVNode, Yr = window.Vue.unref, Jr = window.Vue.withCtx, Qr = window.Vue.openBlock, Zr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const W4 = { class: "pa-4" }, K4 = { class: "flex pt-2" }, Y4 = window.Codex.CdxButton, J4 = window.Vue.ref, Q4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = zo(), a = Wc(), i = J4(!1), { currentTranslation: c } = Dt(), d = () => C(this, null, function* () {
      i.value = !0;
      let g = !1;
      try {
        g = yield gt.splitTranslation(
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
      const l = q4("i18n");
      return Qr(), Zr(Yr(pt), {
        value: e.modelValue,
        persistent: i.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: g.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Jr(() => [
          On("div", K4, [
            i.value ? (Qr(), Zr(Yr(Je), { key: 1 })) : (Qr(), Zr(Yr(Y4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: d
            }, {
              default: Jr(() => [
                X4(G4(g.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Jr(() => [
          On("div", W4, [
            Ia(On("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ia(On("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            On("p", null, [
              Ia(On("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ia(On("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, Z4 = window.Vuex.useStore;
let Ra = [];
const Kc = () => {
  const e = Z4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ra.includes(o) ? Promise.resolve() : (Ra.push(o), no.fetchLanguageTitles(t, n).then((s) => {
      Ra = Ra.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, eV = window.Vue.ref, ho = eV(null), ow = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    ho.value || (yield Ai.fetchCXServerToken().then((s) => {
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
const Eg = window.Vue.resolveDirective, za = window.Vue.createElementVNode, Lg = window.Vue.withDirectives, yn = window.Vue.unref, Oa = window.Vue.withCtx, tn = window.Vue.createVNode, el = window.Vue.openBlock, Ag = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const tV = window.Vue.createBlock, nV = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, oV = { class: "mb-0" }, sV = { class: "sx-translation-confirmer__article-image flex justify-center" }, aV = ["src"], iV = { class: "ma-3" }, Dg = window.Vue.computed, rV = window.Vue.inject, lV = window.Vue.onBeforeUnmount, cV = window.Vue.ref, uV = window.Vuex.useStore, dV = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = uV(), { currentSourcePage: n } = nt(), { previousRoute: o } = pe(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: c,
      clearTranslationURLParameters: d
    } = B(), g = rV("breakpoints"), r = Dg(() => g.value.nextBreakpoint), l = Dg(
      () => {
        var S;
        return (S = n.value) == null ? void 0 : S.getImage(r.value);
      }
    ), { fetchTranslationsByStatus: u } = Ro(), p = Kc();
    u("draft"), p(s.value, i.value), Xc(), ow()(), Jm()(a.value);
    const w = Ae(), _ = () => {
      o.value ? w.push({ name: o.value }) : w.push({ name: "dashboard" });
    };
    lV(() => {
      const S = w.currentRoute.value.name;
      (S === "dashboard" || S === "sx-article-search") && d();
    });
    const f = cV(!1);
    return (S, y) => {
      const k = Eg("i18n"), V = Eg("i18n-html");
      return el(), Ag("section", nV, [
        tn(yn(F), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Oa(() => [
            tn(yn(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Oa(() => [
                Lg(za("h5", oV, null, 512), [
                  [k, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            tn(yn(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Oa(() => [
                tn(yn(Fe), {
                  class: "pa-0",
                  type: "icon",
                  icon: yn(Gs),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        za("div", sV, [
          l.value ? (el(), Ag("img", {
            key: 0,
            src: l.value
          }, null, 8, aV)) : (el(), tV(yn(Ie), {
            key: 1,
            size: "120",
            icon: yn(bm),
            "icon-color": S.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        tn(H4),
        tn(nw),
        tn(L4, {
          onOpenTranslationConfirmationDialog: y[0] || (y[0] = (L) => f.value = !0)
        }),
        tn(yn(F), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Oa(() => [
            za("p", iV, [
              Lg(za("small", null, null, 512), [
                [V, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        tn(Q4, {
          modelValue: f.value,
          "onUpdate:modelValue": y[1] || (y[1] = (L) => f.value = L)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const gV = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: dV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, pV = window.Vue.resolveComponent, mV = window.Vue.createVNode, hV = window.Vue.normalizeClass, wV = window.Vue.openBlock, fV = window.Vue.createElementBlock;
function _V(e, t, n, o, s, a) {
  const i = pV("sx-translation-confirmer");
  return wV(), fV("main", {
    class: hV(["sx-translation-confirmer-view", a.classes])
  }, [
    mV(i)
  ], 2);
}
const vV = /* @__PURE__ */ ne(gV, [["render", _V]]);
const SV = window.Vue.toDisplayString, Tg = window.Vue.unref, yV = window.Vue.createVNode, CV = window.Vue.createTextVNode, bV = window.Vue.createElementVNode, kV = window.Vue.openBlock, xV = window.Vue.createElementBlock, $V = { class: "sx-section-selector-view-article-item ma-0" }, VV = ["href"], EV = window.Codex.CdxIcon, LV = {
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
    return (t, n) => (kV(), xV("li", $V, [
      bV("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        CV(SV(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        yV(Tg(EV), {
          size: "x-small",
          icon: Tg(Oc)
        }, null, 8, ["icon"])
      ], 8, VV)
    ]));
  }
};
const AV = window.Vue.resolveDirective, ja = window.Vue.createElementVNode, tl = window.Vue.withDirectives, jn = window.Vue.unref, DV = window.Vue.toDisplayString, Ha = window.Vue.withCtx, us = window.Vue.createVNode, TV = window.Vue.openBlock, BV = window.Vue.createElementBlock, PV = { class: "sx-section-selector__header pa-4" }, FV = { class: "sx-section-selector__header-text ma-0" }, MV = ["textContent"], NV = { class: "pt-0 ma-0" }, UV = { class: "ma-0" }, IV = window.Codex.CdxButton, RV = window.Codex.CdxIcon, zV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = tt();
    return (n, o) => {
      const s = AV("i18n");
      return TV(), BV("div", PV, [
        us(jn(F), { class: "ma-0 pb-3" }, {
          default: Ha(() => [
            us(jn(b), null, {
              default: Ha(() => {
                var a;
                return [
                  tl(ja("h6", FV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ja("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: DV((a = jn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, MV)
                ];
              }),
              _: 1
            }),
            us(jn(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ha(() => [
                us(jn(IV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ha(() => [
                    us(jn(RV), { icon: jn(Io) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        tl(ja("h4", NV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        tl(ja("p", UV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, OV = window.Vue.renderList, jV = window.Vue.Fragment, nl = window.Vue.openBlock, Bg = window.Vue.createElementBlock, HV = window.Vue.renderSlot, qa = window.Vue.unref, Pg = window.Vue.createVNode, Fg = window.Vue.withCtx, qV = window.Vue.createBlock, GV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, XV = window.Codex.CdxButton, WV = window.Codex.CdxIcon, sw = {
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
    return (t, n) => (nl(), Bg("ul", GV, [
      (nl(!0), Bg(jV, null, OV(e.sections, (o) => (nl(), qV(qa(F), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Fg(() => [
          Pg(qa(XV), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Fg(() => [
              HV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Pg(qa(WV), { icon: qa(Qs) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, KV = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const YV = window.Vue.resolveDirective, Ga = window.Vue.createElementVNode, ol = window.Vue.withDirectives, bt = window.Vue.unref, Mg = window.Vue.toDisplayString, wo = window.Vue.withCtx, sl = window.Vue.openBlock, Ng = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ds = window.Vue.createVNode, JV = window.Vue.createTextVNode, QV = window.Vue.createElementBlock, ZV = { class: "sx-section-selector__missing-sections py-2" }, e3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, t3 = ["lang", "dir", "textContent"], Ug = window.Vue.computed, n3 = window.Codex.CdxButton, o3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = tt(), n = Ug(
      () => {
        var s;
        return R.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Ug(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = YV("i18n");
      return sl(), QV("section", ZV, [
        ol(Ga("h4", e3, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (sl(), Ng(bt(F), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: wo(() => [
            ds(bt(b), {
              class: "py-6 justify-center",
              innerHTML: bt(KV)
            }, null, 8, ["innerHTML"]),
            ds(bt(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: wo(() => [
                ol(Ga("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            ds(bt(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: wo(() => [
                ol(Ga("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            ds(bt(b), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: wo(() => [
                ds(bt(n3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: wo(() => [
                    JV(Mg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (sl(), Ng(sw, {
          key: 0,
          sections: bt(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: wo(({ sourceSection: c }) => {
            var d, g;
            return [
              Ga("h5", {
                class: "ma-0",
                lang: (d = bt(t)) == null ? void 0 : d.sourceLanguage,
                dir: bt(R.getDir)((g = bt(t)) == null ? void 0 : g.sourceLanguage),
                textContent: Mg(c)
              }, null, 8, t3)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const s3 = window.Vue.resolveDirective, Xa = window.Vue.createElementVNode, a3 = window.Vue.withDirectives, Hn = window.Vue.unref, Ig = window.Vue.toDisplayString, i3 = window.Vue.withCtx, r3 = window.Vue.createVNode, l3 = window.Vue.openBlock, c3 = window.Vue.createElementBlock, u3 = { class: "sx-section-selector__present-sections py-2" }, d3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, g3 = { class: "sx-section-selector__present-section-button-content" }, p3 = ["lang", "dir", "textContent"], m3 = ["lang", "dir", "textContent"], h3 = window.Vue.computed, w3 = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = tt(), n = h3(
      () => {
        var o;
        return R.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var i;
      const a = s3("i18n");
      return l3(), c3("section", u3, [
        a3(Xa("h4", d3, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        r3(sw, {
          sections: ((i = Hn(t)) == null ? void 0 : i.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (c) => o.$emit("select-section", c))
        }, {
          default: i3(({ sourceSection: c, targetSection: d }) => {
            var g, r, l, u;
            return [
              Xa("div", g3, [
                Xa("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (g = Hn(t)) == null ? void 0 : g.sourceLanguage,
                  dir: Hn(R.getDir)((r = Hn(t)) == null ? void 0 : r.sourceLanguage),
                  textContent: Ig(c)
                }, null, 8, p3),
                Xa("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (l = Hn(t)) == null ? void 0 : l.targetLanguage,
                  dir: Hn(R.getDir)((u = Hn(t)) == null ? void 0 : u.targetLanguage),
                  textContent: Ig(d)
                }, null, 8, m3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const nn = window.Vue.createVNode, Cn = window.Vue.unref, f3 = window.Vue.resolveDirective, Ut = window.Vue.createElementVNode, gs = window.Vue.withDirectives, _3 = window.Vue.renderList, v3 = window.Vue.Fragment, al = window.Vue.openBlock, Rg = window.Vue.createElementBlock, S3 = window.Vue.createBlock, zg = window.Vue.toDisplayString, Og = window.Vue.createTextVNode, il = window.Vue.withCtx, y3 = { class: "sx-section-selector" }, C3 = { class: "sx-section-selector__body" }, b3 = { class: "py-2" }, k3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, x3 = { class: "ma-0 pa-0" }, $3 = { class: "sx-section-selector__additional-consideration-title" }, V3 = { href: "#" }, E3 = { class: "sx-section-selector__additional-consideration-title" }, L3 = { href: "#" }, rl = window.Vue.computed, A3 = window.Vuex.useStore, D3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = A3(), { sectionSuggestion: n } = tt(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: i
    } = pe(t), c = rl(
      () => {
        var S;
        return K.getPageUrl(o.value, (S = n.value) == null ? void 0 : S.sourceTitle);
      }
    ), d = rl(
      () => {
        var S;
        return K.getPageUrl(s.value, (S = n.value) == null ? void 0 : S.targetTitle);
      }
    ), g = rl(() => [
      { path: c.value, autonym: a.value },
      { path: d.value, autonym: i.value }
    ]), r = Ae(), { clearTranslationURLParameters: l, setSectionURLParam: u } = B(), p = () => {
      l(), r.push({ name: "dashboard" });
    }, { currentTranslation: m } = Dt(), h = zo(), w = Wc(), { selectPageSectionByTitle: _ } = Pi(), f = (S) => {
      u(S), m.value ? (w(), h()) : (_(S), r.push({ name: "sx-content-comparator" }));
    };
    return (S, y) => {
      const k = f3("i18n");
      return al(), Rg("section", y3, [
        nn(zV, { onClose: p }),
        Ut("section", C3, [
          nn(nw),
          nn(o3, {
            onSelectSection: f,
            onClose: p
          }),
          nn(w3, { onSelectSection: f }),
          Ut("section", b3, [
            gs(Ut("h4", k3, null, 512), [
              [k, [
                Cn(i)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            Ut("ul", x3, [
              (al(!0), Rg(v3, null, _3(g.value, (V, L) => (al(), S3(LV, {
                key: `view-article-item-${L}`,
                path: V.path,
                autonym: V.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          nn(Cn(F), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: il(() => [
              nn(Cn(b), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: il(() => [
                  Ut("h6", $3, [
                    nn(Cn(Ie), {
                      icon: Cn(a0),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Og(" " + zg(S.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  gs(Ut("p", null, null, 512), [
                    [k, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  gs(Ut("a", V3, null, 512), [
                    [k, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              nn(Cn(b), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: il(() => [
                  Ut("h6", E3, [
                    nn(Cn(Ie), {
                      icon: Cn(s0),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Og(" " + zg(S.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  gs(Ut("p", null, null, 512), [
                    [k, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  gs(Ut("a", L3, null, 512), [
                    [k, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
const T3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: D3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, B3 = window.Vue.resolveComponent, P3 = window.Vue.createVNode, F3 = window.Vue.normalizeClass, M3 = window.Vue.openBlock, N3 = window.Vue.createElementBlock;
function U3(e, t, n, o, s, a) {
  const i = B3("sx-section-selector");
  return M3(), N3("main", {
    class: F3(["sx-section-selector-view", a.classes])
  }, [
    P3(i)
  ], 2);
}
const I3 = /* @__PURE__ */ ne(T3, [["render", U3]]), ll = window.Vue.computed, R3 = (e) => {
  const {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = ll(
    () => R.getAutonym(t.value)
  ), s = ll(
    () => R.getAutonym(n.value)
  ), a = we();
  return ll(() => {
    const i = {
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
    return [i, c];
  });
};
const jg = window.Vue.unref, z3 = window.Vue.createVNode, O3 = window.Vue.openBlock, j3 = window.Vue.createElementBlock, H3 = { class: "sx-content-comparator__source-target-selector" }, q3 = window.Vue.watch, G3 = {
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
    const n = e, o = t, s = (i) => o("update:selection", i), a = R3(n);
    return q3(
      () => n.isMappedSection,
      () => {
        a.value.map((i) => i.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (i, c) => (O3(), j3("div", H3, [
      z3(jg(qs), {
        items: jg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, ps = window.Vue.computed, X3 = window.Vuex.useStore, ee = () => {
  const e = X3(), { currentSourcePage: t, currentTargetPage: n } = nt(), { currentMTProvider: o } = pe(e), { sectionURLParameter: s } = B(), a = ps(() => {
    var r, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = ps(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), c = ps(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), d = ps(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = ps(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: d,
    targetPageTitleForPublishing: g
  };
}, qn = window.Vue.computed, W3 = window.Vue.ref, Yc = () => {
  const e = W3([]), { currentTargetPage: t } = nt(), { sectionSuggestion: n } = tt(), { sectionURLParameter: o } = B(), s = qn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = qn(
    () => {
      var u;
      return (((u = i.value) == null ? void 0 : u.title) || "").replace(/ /g, "_");
    }
  ), i = qn(
    () => {
      var u;
      return (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value);
    }
  ), { sourceSection: c } = ee(), d = qn(() => {
    var u;
    return (u = c.value) == null ? void 0 : u.html;
  }), g = qn(() => {
    var u;
    return (u = i.value) == null ? void 0 : u.html;
  }), r = qn(
    () => {
      var u;
      return (u = n.value) == null ? void 0 : u.missingSections.hasOwnProperty(o.value);
    }
  ), l = qn(
    () => !r.value && !e.value.includes(s.value)
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
const Wa = window.Vue.createVNode, K3 = window.Vue.toDisplayString, Y3 = window.Vue.createElementVNode, bn = window.Vue.unref, Ka = window.Vue.withCtx, cl = window.Vue.openBlock, ul = window.Vue.createBlock;
window.Vue.createCommentVNode;
const J3 = window.Vue.normalizeClass, Q3 = ["lang", "dir", "textContent"], Hg = window.Vue.ref, dl = window.Vue.computed, Z3 = window.Vue.onMounted, eE = {
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
    const n = e, o = t, s = Hg(!1), { sectionSuggestion: a } = tt(), { sectionURLParameter: i } = B(), c = dl(
      () => (i.value || "").replace(/ /g, "_")
    ), d = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: r } = Yc(), l = dl(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: i.value,
            path: `${K.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${c.value}`,
            lang: a.value.sourceLanguage,
            dir: R.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: u.value,
            lang: a.value.targetLanguage,
            dir: R.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: g.value,
            path: `${u.value}#${r.value}`
          };
      }
    }), u = dl(
      () => K.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Hg(null);
    return Z3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (cl(), ul(bn(F), {
      ref_key: "contentHeader",
      ref: p,
      class: J3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Ka(() => [
        Wa(G3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": d
        }, null, 8, ["is-mapped-section", "selection"]),
        Wa(bn(F), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Ka(() => [
            Wa(bn(b), null, {
              default: Ka(() => [
                Y3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: K3(l.value.title)
                }, null, 8, Q3)
              ]),
              _: 1
            }),
            Wa(bn(b), { shrink: "" }, {
              default: Ka(() => [
                s.value ? (cl(), ul(bn(Fe), {
                  key: 0,
                  icon: bn(Ci),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (w) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (cl(), ul(bn(Fe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: bn(ym),
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
}, Ya = window.Vue.unref, qg = window.Vue.createVNode, tE = window.Vue.openBlock, nE = window.Vue.createElementBlock, oE = { class: "sx-content-comparator__header-navigation flex items-center" }, sE = window.Vue.computed, aE = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = sE(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Pi(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[c];
      s(d);
    }, i = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[c];
      s(d);
    };
    return (c, d) => (tE(), nE("div", oE, [
      qg(Ya(Fe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Ya(e0),
        onClick: a
      }, null, 8, ["icon"]),
      qg(Ya(Fe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Ya(Zf),
        onClick: i
      }, null, 8, ["icon"])
    ]));
  }
};
const Gg = window.Vue.toDisplayString, iE = window.Vue.resolveDirective, gl = window.Vue.withDirectives, fo = window.Vue.openBlock, Ja = window.Vue.createElementBlock, rE = window.Vue.createCommentVNode, lE = window.Vue.createTextVNode, Xg = window.Vue.createElementVNode, cE = window.Vue.normalizeClass, Gn = window.Vue.unref, pl = window.Vue.withCtx, ml = window.Vue.createVNode, Wg = window.Vue.createBlock, uE = { class: "sx-content-comparator-header__mapped-section" }, dE = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, gE = { key: 0 }, pE = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, mE = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Kg = window.Vue.computed, hE = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: Bn,
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
    const n = we(), o = e, s = t, a = Kg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), i = Kg(
      () => n.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(o.suggestion.targetLanguage)
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
    return (g, r) => {
      const l = iE("i18n");
      return fo(), Ja("div", uE, [
        ml(Gn(F), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: pl(() => [
            ml(Gn(b), { grow: "" }, {
              default: pl(() => [
                Xg("h6", dE, [
                  lE(Gg(i.value) + " ", 1),
                  a.value ? gl((fo(), Ja("span", gE, null, 512)), [
                    [l, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : rE("", !0)
                ]),
                Xg("h6", {
                  class: cE(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, Gg(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            ml(Gn(b), { shrink: "" }, {
              default: pl(() => [
                a.value ? (fo(), Wg(Gn(Fe), {
                  key: 1,
                  class: "pa-0",
                  icon: Gn(l0),
                  type: "icon",
                  onClick: d
                }, null, 8, ["icon"])) : (fo(), Wg(Gn(Fe), {
                  key: 0,
                  class: "pa-0",
                  icon: Gn(Sm),
                  type: "icon",
                  onClick: c
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? gl((fo(), Ja("p", mE, null, 512)), [
          [l, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : gl((fo(), Ja("p", pE, null, 512)), [
          [l, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const Ce = window.Vue.unref, _o = window.Vue.createVNode, Yg = window.Vue.toDisplayString, un = window.Vue.createElementVNode, wE = window.Vue.normalizeClass, hl = window.Vue.withCtx, fE = window.Vue.resolveDirective, Jg = window.Vue.withDirectives, wl = window.Vue.openBlock, Qg = window.Vue.createBlock, Zg = window.Vue.createCommentVNode, _E = window.Vue.createElementBlock, vE = { class: "sx-content-comparator__header pa-4" }, SE = { class: "row my-1 py-2 mx-0" }, yE = { class: "sx-content-comparator-header__titles grow" }, CE = ["lang", "dir"], bE = ["lang", "dir"], kE = { class: "py-2 mb-1" }, xE = /* @__PURE__ */ un("br", null, null, -1), ms = window.Vue.computed, $E = window.Vue.inject, VE = {
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
    const { sectionURLParameter: t } = B(), { sourceSection: n } = ee(), { sectionSuggestion: o } = tt(), s = ms(
      () => {
        var l;
        return (l = o.value) == null ? void 0 : l.missingSections.hasOwnProperty(t.value);
      }
    ), a = ms(
      () => {
        var l;
        return (l = o.value) == null ? void 0 : l.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: i } = Yc(), c = ms(() => {
      var l;
      return (l = n.value) == null ? void 0 : l.html;
    }), d = ms(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), g = $E("breakpoints"), r = ms(() => g.value.mobile);
    return (l, u) => {
      const p = fE("i18n");
      return wl(), _E("div", vE, [
        _o(Ce(Fe), {
          class: "py-2 pa-0",
          icon: Ce(t0),
          label: l.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: u[0] || (u[0] = (m) => l.$emit("close"))
        }, null, 8, ["icon", "label"]),
        un("div", SE, [
          un("div", {
            class: wE(["flex grow", r.value ? "col-12" : "me-6"])
          }, [
            un("div", yE, [
              un("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Ce(o).sourceLanguage,
                dir: Ce(R.getDir)(Ce(o).sourceLanguage)
              }, Yg(Ce(o).sourceTitle), 9, CE),
              un("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Ce(o).sourceLanguage,
                dir: Ce(R.getDir)(Ce(o).sourceLanguage)
              }, Yg(Ce(t)), 9, bE)
            ]),
            _o(aE, { "section-source-titles": d.value }, null, 8, ["section-source-titles"])
          ], 2),
          un("div", kE, [
            _o(Ce(Fe), {
              icon: Ce(Ci),
              progressive: "",
              label: l.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !c.value,
              onClick: u[1] || (u[1] = (m) => l.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (wl(), Qg(Ce(F), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: hl(() => [
            _o(Ce(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: hl(() => [
                _o(Ce(Ie), { icon: Ce(i0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            _o(Ce(b), { class: "ma-0" }, {
              default: hl(() => [
                Jg(un("strong", null, null, 512), [
                  [p, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                xE,
                Jg(un("span", null, null, 512), [
                  [p, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Zg("", !0),
        a.value ? (wl(), Qg(hE, {
          key: 1,
          suggestion: Ce(o),
          "target-section-title": Ce(i),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": u[2] || (u[2] = (m) => l.$emit("update:discardedSections", m))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Zg("", !0)
      ]);
    };
  }
};
const ep = window.Vue.toDisplayString, EE = window.Vue.createElementVNode, tp = window.Vue.openBlock, np = window.Vue.createElementBlock, LE = window.Vue.createCommentVNode, AE = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, DE = ["textContent"], TE = ["textContent"], aw = {
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
    return (t, n) => (tp(), np("section", AE, [
      EE("h5", {
        textContent: ep(e.placeholderTitle)
      }, null, 8, DE),
      e.placeholderSubtitle ? (tp(), np("p", {
        key: 0,
        textContent: ep(e.placeholderSubtitle)
      }, null, 8, TE)) : LE("", !0)
    ]));
  }
}, BE = window.Vue.computed, PE = window.Vue.createApp, FE = window.Vuex.useStore, ME = () => {
  const e = FE(), { sectionSuggestion: t } = tt(), { currentTargetPage: n } = nt(), o = we(), s = () => PE(
    aw,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), i = (c) => {
    const d = c.getElementsByTagName("base");
    Array.from(d).forEach(
      (g) => g.parentNode.removeChild(g)
    );
  };
  return BE(() => {
    var r;
    const c = document.createElement("div");
    c.innerHTML = (r = n.value) == null ? void 0 : r.content, i(c);
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
const Ue = window.Vue.unref, NE = window.Vue.isRef, fl = window.Vue.createVNode, vo = window.Vue.openBlock, op = window.Vue.createBlock, sp = window.Vue.createCommentVNode, Qa = window.Vue.createElementVNode, _l = window.Vue.Fragment, Za = window.Vue.createElementBlock, UE = { class: "sx-content-comparator" }, IE = { class: "sx-content-comparator__source-content" }, RE = ["lang", "dir", "innerHTML"], zE = ["lang", "dir", "innerHTML"], OE = ["innerHTML"], jE = window.Vue.ref, HE = window.Vue.computed, qE = window.Vue.watch, GE = window.Vuex.useStore, XE = {
  __name: "SXContentComparator",
  setup(e) {
    GE();
    const t = Ae(), n = jE("source_section"), { logDashboardTranslationStartEvent: o } = Bi(), s = zo(), a = () => t.push({ name: "sx-section-selector" }), i = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d,
      pageURLParameter: g,
      sectionURLParameter: r
    } = B(), {
      activeSectionTargetTitle: l,
      discardedSections: u,
      isCurrentSectionMapped: p,
      sourceSectionContent: m,
      targetSectionContent: h
    } = Yc(), w = ME(), { sectionSuggestion: _ } = tt(), f = HE(() => _.value.targetTitle), S = tw();
    return qE(
      f,
      () => S(
        d.value,
        c.value,
        f.value
      ),
      { immediate: !0 }
    ), (y, k) => (vo(), Za("section", UE, [
      fl(VE, {
        "discarded-sections": Ue(u),
        "onUpdate:discardedSections": k[0] || (k[0] = (V) => NE(u) ? u.value = V : null),
        onTranslationButtonClicked: i,
        onClose: a
      }, null, 8, ["discarded-sections"]),
      fl(eE, {
        "source-vs-target-selection": n.value,
        "onUpdate:sourceVsTargetSelection": k[1] || (k[1] = (V) => n.value = V),
        "is-mapped-section": Ue(p),
        onTranslationButtonClicked: i
      }, null, 8, ["source-vs-target-selection", "is-mapped-section"]),
      Qa("section", IE, [
        n.value === "source_section" ? (vo(), Za(_l, { key: 0 }, [
          Ue(m) ? sp("", !0) : (vo(), op(Ue(Je), { key: 0 })),
          Qa("section", {
            lang: Ue(c),
            dir: Ue(R.getDir)(Ue(c)),
            class: "pt-2 px-4",
            innerHTML: Ue(m)
          }, null, 8, RE)
        ], 64)) : n.value === "target_article" ? (vo(), Za(_l, { key: 1 }, [
          Ue(w) ? sp("", !0) : (vo(), op(Ue(Je), { key: 0 })),
          Qa("article", {
            lang: Ue(d),
            dir: Ue(R.getDir)(Ue(d)),
            class: "px-4",
            innerHTML: Ue(w)
          }, null, 8, zE)
        ], 64)) : (vo(), Za(_l, { key: 2 }, [
          Qa("section", {
            class: "pa-4",
            innerHTML: Ue(h)
          }, null, 8, OE),
          fl(aw, {
            "placeholder-title": y.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": y.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
};
const WE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: XE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, KE = window.Vue.resolveComponent, YE = window.Vue.createVNode, JE = window.Vue.normalizeClass, QE = window.Vue.openBlock, ZE = window.Vue.createElementBlock;
function e5(e, t, n, o, s, a) {
  const i = KE("sx-content-comparator");
  return QE(), ZE("main", {
    class: JE(["sx-content-comparator-view", a.classes])
  }, [
    YE(i)
  ], 2);
}
const t5 = /* @__PURE__ */ ne(WE, [["render", e5]]);
const n5 = window.Vue.resolveDirective, hs = window.Vue.createElementVNode, ap = window.Vue.withDirectives, ei = window.Vue.unref, vl = window.Vue.createVNode, ip = window.Vue.toDisplayString, rp = window.Vue.createTextVNode, ws = window.Vue.withCtx, o5 = window.Vue.openBlock, s5 = window.Vue.createBlock, a5 = { class: "mw-ui-dialog__header px-4 py-3" }, i5 = { class: "mw-ui-dialog__header-title" }, r5 = { class: "pa-4" }, l5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, lp = window.Codex.CdxButton, c5 = {
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
      const d = n5("i18n");
      return o5(), s5(ei(pt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ws(() => [
          hs("div", a5, [
            ap(hs("span", i5, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ws(() => [
          hs("div", l5, [
            vl(ei(lp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ws(() => [
                rp(ip(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            vl(ei(lp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ws(() => [
                rp(ip(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ws(() => [
          vl(ei(yi)),
          hs("div", r5, [
            ap(hs("span", null, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, u5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s && Lm(s) ? gt.parseTemplateWikitext(
    Vm(s),
    n,
    t
  ) : Promise.resolve(null);
}, iw = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s ? gt.parseTemplateWikitext(
    Vm(s),
    n,
    t
  ) : Promise.resolve(null);
}, d5 = window.Vuex.useStore, Jc = () => {
  const e = d5(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = mn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = ow(), i = (r, l, u) => {
    if (r === 0) {
      t.value.proposedTitleTranslations[l] = u;
      return;
    }
    const p = t.value.getContentTranslationUnitById(r);
    p instanceof Ke ? p.blockTemplateProposedTranslations[l] = u : p instanceof Dn && p.addProposedTranslation(l, u);
  }, c = (r, l) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, r))
      return "";
    try {
      const p = yield a();
      return yield gt.fetchSegmentTranslation(
        o.value,
        s.value,
        r,
        l,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), d = (r, l) => C(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      r,
      l
    ))
      return;
    let u = t.value.getOriginalContentByTranslationUnitId(r);
    const p = t.value.getContentTranslationUnitById(r);
    let m;
    if (e.commit("application/addMtRequestsPending", r), m = yield c(l, u), !m) {
      e.commit("application/removeMtRequestsPending", r);
      return;
    }
    p instanceof Ke && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield u5(
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
    translateTranslationUnitById: d,
    translateSelectedTranslationUnitForAllProviders: () => {
      const r = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: l } = t.value;
      r.forEach(
        (u) => d(l, u)
      );
    }
  };
}, g5 = window.Vuex.useStore, p5 = () => {
  const { sourceSection: e } = ee(), t = g5(), { translateTranslationUnitById: n } = Jc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const m5 = window.Vue.resolveDirective, ct = window.Vue.createElementVNode, ti = window.Vue.withDirectives, qe = window.Vue.unref, Sl = window.Vue.createVNode, kn = window.Vue.withCtx, h5 = window.Vue.renderList, w5 = window.Vue.Fragment, yl = window.Vue.openBlock, f5 = window.Vue.createElementBlock, _5 = window.Vue.toDisplayString, cp = window.Vue.createBlock, v5 = window.Vue.createCommentVNode, S5 = { class: "mw-ui-dialog__header pa-4" }, y5 = { class: "row ma-0 py-2" }, C5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, b5 = { class: "mb-0" }, k5 = { class: "col shrink justify-center" }, x5 = { class: "pb-2 mb-0" }, $5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, V5 = ["dir", "lang", "innerHTML"], E5 = ["textContent"], L5 = ["innerHTML"], A5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, D5 = /* @__PURE__ */ ct("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), Cl = window.Vue.computed, T5 = window.Vuex.useStore, B5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = te.EMPTY_TEXT_PROVIDER_KEY, s = te.ORIGINAL_TEXT_PROVIDER_KEY, a = T5(), {
      sourceSection: i,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: d
    } = ee(), {
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: r
    } = B(), l = Cl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        r.value
      )
    ), u = Cl(() => {
      const f = [s, o];
      return l.value.filter(
        (S) => !f.includes(S)
      );
    }), p = Cl(
      () => c.value ? i.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = p5(), h = (f) => {
      m(f), _();
    }, w = te.getMTProviderLabel, _ = () => n("update:active", !1);
    return (f, S) => {
      const y = m5("i18n");
      return e.active ? (yl(), cp(qe(pt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: kn(() => [
          ct("div", S5, [
            ct("div", y5, [
              ct("div", C5, [
                ti(ct("h4", b5, null, 512), [
                  [y, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              ct("div", k5, [
                Sl(qe(Fe), {
                  type: "icon",
                  icon: qe(Gs),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            ti(ct("h6", x5, null, 512), [
              [y, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: kn(() => [
          Sl(qe(Ye), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (k) => h(qe(s)))
          }, {
            header: kn(() => [
              ti(ct("h5", $5, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: kn(() => [
              ct("p", {
                dir: qe(R.getDir)(qe(g)),
                lang: qe(g),
                innerHTML: p.value[qe(s)]
              }, null, 8, V5)
            ]),
            _: 1
          }),
          (yl(!0), f5(w5, null, h5(u.value, (k) => (yl(), cp(qe(Ye), {
            key: k,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (V) => h(k)
          }, {
            header: kn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: _5(qe(w)(k))
              }, null, 8, E5)
            ]),
            default: kn(() => [
              ct("p", {
                innerHTML: p.value[k]
              }, null, 8, L5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Sl(qe(Ye), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (k) => h(qe(o)))
          }, {
            header: kn(() => [
              ti(ct("h5", A5, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: kn(() => [
              D5
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : v5("", !0);
    };
  }
}, P5 = window.Vuex.useStore, Oo = () => {
  const { sourceSection: e } = ee(), t = P5(), { translateTranslationUnitById: n } = Jc(), { currentMTProvider: o } = pe(t), s = (c) => C(void 0, null, function* () {
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
      let r = 0;
      return g > -1 && (r = d[g].id), s(r);
    },
    selectTranslationUnitById: s
  };
};
const F5 = window.Vue.toDisplayString, bl = window.Vue.createElementVNode, kl = window.Vue.unref, M5 = window.Vue.createVNode, N5 = window.Vue.normalizeClass, U5 = window.Vue.withCtx, I5 = window.Vue.openBlock, R5 = window.Vue.createBlock, z5 = ["href"], O5 = ["textContent"], j5 = ["innerHTML"], So = window.Vue.computed, H5 = window.Vuex.useStore, up = "sx-sentence-selector__section-title", q5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = H5(), { sourceSection: n, isSectionTitleSelected: o } = ee(), { currentSourcePage: s } = nt(), { sourceLanguage: a } = pe(t), i = So(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = So(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), d = So(
      () => K.getPageUrl(a.value, i.value)
    ), g = So(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = So(
      () => g.value ? "translated" : "selected"
    ), l = So(() => {
      const m = [up];
      return o.value && m.push(`${up}--${r.value}`), m;
    }), { selectTranslationUnitById: u } = Oo(), p = () => u(0);
    return (m, h) => (I5(), R5(kl(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: U5(() => [
        bl("a", {
          href: d.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          bl("strong", {
            textContent: F5(i.value)
          }, null, 8, O5),
          M5(kl(Ie), {
            icon: kl(ym),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, z5),
        bl("h2", {
          class: N5(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, j5)
      ]),
      _: 1
    }));
  }
};
const It = window.Vue.unref, fs = window.Vue.createVNode, ni = window.Vue.withCtx, dp = window.Vue.toDisplayString, gp = window.Vue.createTextVNode, G5 = window.Vue.openBlock, X5 = window.Vue.createBlock, W5 = window.Vue.computed, xl = window.Codex.CdxButton, pp = window.Codex.CdxIcon, rw = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ee(), s = W5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (G5(), X5(It(F), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: ni(() => [
        fs(It(xl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: It(n),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: ni(() => [
            fs(It(pp), {
              class: "me-1",
              icon: It(jc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        fs(It(xl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !It(o),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: ni(() => [
            gp(dp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        fs(It(xl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: ni(() => [
            gp(dp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            fs(It(pp), {
              class: "ms-1",
              size: "small",
              icon: It(Qs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Xn = window.Vue.unref, K5 = window.Vue.toDisplayString, _s = window.Vue.createVNode, oi = window.Vue.withCtx, Y5 = window.Vue.openBlock, J5 = window.Vue.createBlock, $l = window.Vue.computed, Q5 = window.Vuex.useStore, Z5 = window.Codex.CdxButton, eL = window.Codex.CdxIcon, tL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = Q5(), n = $l(() => t.state.application.currentMTProvider), o = we(), s = $l(() => ({
      [te.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [te.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = $l(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        te.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (Y5(), J5(Xn(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: oi(() => [
        _s(Xn(F), { class: "ma-0 ps-5 pb-4" }, {
          default: oi(() => [
            _s(Xn(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: K5(a.value)
            }, null, 8, ["textContent"]),
            _s(Xn(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: oi(() => [
                _s(Xn(Z5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (d) => i.$emit("configure-options"))
                }, {
                  default: oi(() => [
                    _s(Xn(eL), {
                      class: "pa-0",
                      icon: Xn(zc)
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
const kt = window.Vue.unref, xn = window.Vue.createVNode, nL = window.Vue.resolveDirective, mp = window.Vue.createElementVNode, oL = window.Vue.withDirectives, hp = window.Vue.toDisplayString, wp = window.Vue.createTextVNode, vs = window.Vue.withCtx, sL = window.Vue.openBlock, aL = window.Vue.createElementBlock, iL = { class: "mt-retry-body pb-5" }, rL = { class: "retry-body__message" }, fp = window.Codex.CdxButton, Vl = window.Codex.CdxIcon, lL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = nL("i18n");
      return sL(), aL("div", iL, [
        mp("div", rL, [
          xn(kt(Vl), {
            class: "me-2",
            icon: kt(Ah)
          }, null, 8, ["icon"]),
          oL(mp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        xn(kt(F), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: vs(() => [
            xn(kt(b), { cols: "6" }, {
              default: vs(() => [
                xn(kt(fp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: vs(() => [
                    xn(kt(Vl), {
                      class: "me-1",
                      icon: kt(Uh)
                    }, null, 8, ["icon"]),
                    wp(" " + hp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            xn(kt(b), { cols: "6" }, {
              default: vs(() => [
                xn(kt(fp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: vs(() => [
                    xn(kt(Vl), {
                      class: "me-1",
                      icon: kt(Lb)
                    }, null, 8, ["icon"]),
                    wp(" " + hp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const yo = window.Vue.createVNode, Ge = window.Vue.unref, Ss = window.Vue.openBlock, cL = window.Vue.createElementBlock, uL = window.Vue.createCommentVNode, si = window.Vue.createBlock, dL = window.Vue.normalizeClass, gL = window.Vue.normalizeStyle, ys = window.Vue.withCtx, pL = window.Vue.toDisplayString, mL = window.Vue.createTextVNode, hL = window.Vue.normalizeProps, wL = window.Vue.guardReactiveProps, fL = ["lang", "dir", "innerHTML"], El = window.Vue.ref, _L = window.Vue.onMounted, vL = window.Vue.onBeforeUnmount, Ll = window.Vue.computed, SL = window.Vue.nextTick, yL = window.Vuex.useStore, CL = window.Codex.CdxButton, bL = window.Codex.CdxIcon, kL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = El(0), n = El(null), o = El(null), s = yL(), { currentMTProvider: a } = pe(s), { targetLanguageURLParameter: i } = B(), { sourceSection: c, currentProposedTranslation: d } = ee(), g = Ll(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), r = Ll(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = Ll(
      () => !!d.value || a.value === te.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    _L(() => C(this, null, function* () {
      yield SL(), u(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), vL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => u());
    return (m, h) => (Ss(), si(Ge(Ye), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ys(() => [
        yo(Ge(F), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ys(() => [
            yo(tL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => m.$emit("configure-options"))
            }, null, 512),
            yo(Ge(b), {
              class: dL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && g.value
              }]),
              style: gL(l.value ? r.value : null)
            }, {
              default: ys(() => [
                l.value ? (Ss(), cL("section", {
                  key: 0,
                  lang: Ge(i),
                  dir: Ge(R.getDir)(Ge(i)),
                  innerHTML: Ge(d)
                }, null, 8, fL)) : g.value ? (Ss(), si(Ge(Je), { key: 1 })) : (Ss(), si(lL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            yo(Ge(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ys(() => [
                l.value || g.value ? (Ss(), si(Ge(CL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (w) => m.$emit("edit-translation", Ge(d)))
                }, {
                  default: ys(() => [
                    yo(Ge(bL), {
                      class: "me-1",
                      icon: Ge(Rc)
                    }, null, 8, ["icon"]),
                    mL(" " + pL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : uL("", !0),
                yo(rw, hL(wL(m.$attrs)), null, 16)
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
}, xL = window.Vue.computed, $L = (e) => xL(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const i = ["untranslated", "translated", "selected"].map(
      (d) => `${t}--${d}`
    );
    s.classList.remove(...i), a.selected && s.classList.add(`${t}--selected`);
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const VL = window.Vue.unref, EL = window.Vue.normalizeClass, LL = window.Vue.openBlock, AL = window.Vue.createElementBlock, DL = ["innerHTML"], TL = window.Vue.onMounted, BL = window.Vue.ref, PL = window.Vue.computed, FL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: Ke,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = BL(null), a = $L(n.subSection);
    TL(() => {
      s.value.addEventListener("click", (g) => {
        let r;
        if (n.subSection.isBlockTemplate)
          r = n.subSection;
        else {
          const l = g.composedPath().find(
            (u) => u instanceof Element && u.classList.contains("cx-segment")
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
    const { selectTranslationUnitById: i } = Oo(), c = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      i(g.id);
    }, d = PL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, r) => (LL(), AL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: EL(["sx-sentence-selector__subsection", d.value]),
      innerHTML: VL(a)
    }, null, 10, DL));
  }
};
const _p = window.Vue.unref, vp = window.Vue.createVNode, Sp = window.Vue.normalizeStyle, ML = window.Vue.openBlock, NL = window.Vue.createElementBlock, yp = window.Vue.computed, lw = {
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
    const t = e, n = yp(() => ({ "--size": t.size })), o = yp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Cm : wi
    );
    return (s, a) => (ML(), NL("div", {
      class: "block-template-status-indicator",
      style: Sp(n.value)
    }, [
      vp(_p(G1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      vp(_p(Ie), {
        icon: o.value,
        size: e.size / 2,
        style: Sp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, Cs = window.Vue.openBlock, ai = window.Vue.createBlock;
window.Vue.createCommentVNode;
const on = window.Vue.unref, Co = window.Vue.withCtx, bs = window.Vue.createVNode, Al = window.Vue.toDisplayString, Dl = window.Vue.createElementVNode, UL = window.Vue.renderList, IL = window.Vue.Fragment, RL = window.Vue.createElementBlock, zL = { class: "pa-4" }, OL = ["textContent"], jL = ["textContent"], HL = window.Vuex.useStore, ii = window.Vue.computed, qL = {
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
    const t = e, { targetLanguageAutonym: n } = pe(HL()), o = ii(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = we(), a = ii(() => {
      let d;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? d = "cx-sx-block-template-mapping-status-title-partially-template" : d = "cx-sx-block-template-mapping-status-title-fully-template" : d = "cx-sx-block-template-mapping-status-title-unadapted-template" : d = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(d);
    }), i = ii(() => {
      let d;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? d = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? d = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : d = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(d);
    }), c = ii(() => {
      let d = [];
      if (!t.targetTemplateExists)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: g0,
          color: ut.gray500
        });
      else if (!t.isTemplateAdapted)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Gs,
          color: ut.gray500
        });
      else if (o.value < 100)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: wi,
          color: ut.blue600
        });
      else {
        let g;
        t.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : g = s.i18n("cx-sx-block-template-no-source-params-text"), d.push({
          text: g,
          icon: wi,
          color: ut.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Ci,
        color: ut.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: Wf,
        color: ut.gray500
      }), d;
    });
    return (d, g) => (Cs(), ai(on(pt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: d.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (r) => d.$emit("update:active", r))
    }, {
      header: Co(() => [
        bs(on(F), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Co(() => [
            bs(on(b), { shrink: "" }, {
              default: Co(() => [
                e.targetTemplateExists ? (Cs(), ai(lw, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Cs(), ai(on(Ie), {
                  key: 1,
                  icon: on(Kf)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Co(() => [
        Dl("div", zL, [
          Dl("h3", {
            textContent: Al(a.value)
          }, null, 8, OL),
          Dl("p", {
            class: "mt-6 text-small",
            textContent: Al(i.value)
          }, null, 8, jL),
          (Cs(!0), RL(IL, null, UL(c.value, (r, l) => (Cs(), ai(on(F), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: Co(() => [
              bs(on(b), { shrink: "" }, {
                default: Co(() => [
                  bs(on(Ie), {
                    class: "me-2",
                    icon: r.icon,
                    "icon-color": r.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              bs(on(b), {
                textContent: Al(r.text)
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
const $e = window.Vue.unref, Be = window.Vue.createVNode, Rt = window.Vue.withCtx, Tl = window.Vue.toDisplayString, Cp = window.Vue.createTextVNode, GL = window.Vue.resolveDirective, bp = window.Vue.withDirectives, kp = window.Vue.createElementVNode, XL = window.Vue.normalizeClass, ri = window.Vue.openBlock, xp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const $p = window.Vue.createBlock, WL = window.Vue.normalizeProps, KL = window.Vue.guardReactiveProps, YL = { class: "block-template-adaptation-card__container pa-4" }, JL = ["textContent"], QL = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Oe = window.Vue.computed, ZL = window.Vue.ref, eA = window.Vuex.useStore, Vp = window.Codex.CdxButton, Ep = window.Codex.CdxIcon, tA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = eA(), { targetLanguageAutonym: n, currentMTProvider: o } = pe(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = ee(), i = Oe(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), c = Oe(
      () => {
        var x;
        return (x = s.value) == null ? void 0 : x.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = Oe(
      () => {
        var x;
        return !((x = t.state.application.mtRequestsPending) != null && x.includes(
          s.value.id
        ));
      }
    ), g = we(), r = Oe(
      // Strip HTML comments and return
      () => {
        var x, T;
        return ((T = (x = s.value) == null ? void 0 : x.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), l = Oe(
      () => {
        var x, T;
        return (T = (x = s.value) == null ? void 0 : x.blockTemplateAdaptationInfo) == null ? void 0 : T[o.value];
      }
    ), u = Oe(
      () => {
        var x, T;
        return ((x = l.value) == null ? void 0 : x.adapted) || !!((T = l.value) != null && T.partial);
      }
    ), p = Oe(() => l.value ? "block-template-adaptation-card__body--" + (u.value ? "success" : "warning") : null), m = Oe(() => l.value ? u.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Oe(
      () => {
        var x;
        return Object.keys(((x = s.value) == null ? void 0 : x.sourceTemplateParams) || {}).length;
      }
    ), w = Oe(() => {
      var T;
      const x = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(x || {});
    }), _ = Oe(() => w.value.length), f = Oe(() => {
      const x = V.value;
      return h.value + x === 0 ? 100 : _.value / (h.value + x) * 100 || 0;
    }), S = ZL(!1), y = () => {
      S.value = !0;
    }, k = (x) => x.filter((T) => !w.value.includes(T)), V = Oe(() => {
      var T;
      const x = ((T = l.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return k(x).length;
    }), L = Oe(() => {
      var T;
      const x = ((T = l.value) == null ? void 0 : T.optionalTargetParams) || [];
      return k(x).length;
    });
    return (x, T) => {
      const U = GL("i18n");
      return ri(), $p($e(Ye), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Rt(() => [
          kp("div", YL, [
            Be($e(F), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Rt(() => [
                Be($e(b), { shrink: "" }, {
                  default: Rt(() => [
                    Be($e(Ep), {
                      icon: $e(Ab),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Be($e(b), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Rt(() => [
                    Cp(Tl(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (ri(), xp("div", {
              key: 0,
              class: XL(["pa-4 mb-4", p.value])
            }, [
              Be($e(F), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Rt(() => [
                  bp(Be($e(b), { tag: "h5" }, null, 512), [
                    [U, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Be($e(b), { shrink: "" }, {
                    default: Rt(() => [
                      Be(lw, {
                        percentage: f.value,
                        size: 20,
                        "is-template-adapted": u.value,
                        "stroke-width": 2,
                        onClick: y
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              kp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Tl(c.value)
              }, null, 8, JL),
              Be($e(Vp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (M) => x.$emit("edit-translation", i.value))
              }, {
                default: Rt(() => [
                  Cp(Tl(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (ri(), xp("div", QL, [
              Be($e(F), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Rt(() => [
                  bp(Be($e(b), { tag: "h5" }, null, 512), [
                    [U, [
                      $e(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Be($e(b), { shrink: "" }, {
                    default: Rt(() => [
                      Be($e(Vp), {
                        weight: "quiet",
                        "aria-label": x.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Rt(() => [
                          Be($e(Ep), {
                            icon: $e(Vb),
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
            ])) : (ri(), $p($e(Je), { key: 2 }))
          ]),
          Be(rw, WL(KL(x.$attrs)), null, 16),
          Be(qL, {
            active: S.value,
            "onUpdate:active": T[1] || (T[1] = (M) => S.value = M),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": V.value,
            "optional-missing-params-count": L.value,
            "is-template-adapted": u.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const nA = window.Vue.unref, oA = window.Vue.createVNode, sA = window.Vue.openBlock, aA = window.Vue.createElementBlock, iA = { class: "translated-segment-card-header" }, rA = window.Vue.computed, lA = {
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
    const n = t, { isSectionTitleSelected: o } = ee(), s = we(), a = rA(() => [
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
    return (c, d) => (sA(), aA("div", iA, [
      oA(nA(qs), {
        items: a.value,
        active: e.selection,
        onSelect: i
      }, null, 8, ["items", "active"])
    ]));
  }
};
const $n = window.Vue.unref, li = window.Vue.createVNode, Bl = window.Vue.withCtx, cA = window.Vue.openBlock, uA = window.Vue.createBlock, dA = window.Vue.computed, Lp = window.Codex.CdxButton, Ap = window.Codex.CdxIcon, gA = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ee(), o = dA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (cA(), uA($n(F), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Bl(() => [
        li($n(Lp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: $n(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: Bl(() => [
            li($n(Ap), { icon: $n(jc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        li($n(Lp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: Bl(() => [
            li($n(Ap), { icon: $n(Qs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const pA = window.Vue.useCssVars, Pe = window.Vue.createVNode, Dp = window.Vue.resolveDirective, mA = window.Vue.createElementVNode, Pl = window.Vue.withDirectives, he = window.Vue.unref, hA = window.Vue.normalizeStyle, ci = window.Vue.openBlock, Tp = window.Vue.createElementBlock, wA = window.Vue.createCommentVNode, fA = window.Vue.normalizeClass, rt = window.Vue.withCtx, _A = window.Vue.toDisplayString, vA = window.Vue.createTextVNode, Bp = window.Vue.createBlock, SA = window.Vue.normalizeProps, yA = window.Vue.guardReactiveProps, sn = window.Vue.computed, CA = window.Vue.ref, bA = window.Vue.inject, kA = window.Vuex.useStore, xA = window.Codex.CdxButton, Fl = window.Codex.CdxIcon, $A = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    pA((f) => ({
      "4929555c": _.value
    }));
    const t = CA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ee(), { targetLanguage: a } = pe(kA()), i = sn(() => t.value === "sentence"), c = sn(
      () => n.value.subSections.find(
        (f) => f.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), d = sn(() => {
      var f;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (f = o.value) == null ? void 0 : f.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), g = bA("colors"), r = g.gray200, l = g.red600, u = sn(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : c.value.translatedContent), p = sn(
      () => Ht.calculateScore(
        u.value,
        d.value,
        a.value
      )
    ), m = sn(
      () => Ht.getScoreStatus(p.value)
    ), h = sn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), w = sn(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), _ = sn(
      () => w.value[m.value]
    );
    return (f, S) => {
      const y = Dp("i18n"), k = Dp("i18n-html");
      return ci(), Bp(he(Ye), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: rt(() => [
          Pe(he(F), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: rt(() => [
              Pe(lA, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (V) => t.value = V)
              }, null, 8, ["selection"]),
              Pe(he(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: rt(() => [
                  Pe(he(F), { class: "ma-0" }, {
                    default: rt(() => [
                      Pe(he(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: rt(() => [
                          Pl(mA("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Pl((ci(), Tp("p", {
                            key: 0,
                            style: hA({ color: he(l) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Pl((ci(), Tp("p", {
                            key: 1,
                            class: fA(h.value)
                          }, null, 2)), [
                            [k, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Pe(he(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: rt(() => [
                          Pe(he(F), { class: "ma-0 ms-2" }, {
                            default: rt(() => [
                              Pe(he(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: rt(() => [
                                  Pe(he(Fl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: he(Pb)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Pe(he(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: rt(() => [
                                  Pe(he(km), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: he(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Pe(he(b), { shrink: "" }, {
                                default: rt(() => [
                                  Pe(he(Fl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: he(Db)
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
                  i.value ? (ci(), Bp(he(xA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (V) => f.$emit("edit-translation", u.value))
                  }, {
                    default: rt(() => [
                      Pe(he(Fl), {
                        class: "me-1",
                        icon: he(Rc)
                      }, null, 8, ["icon"]),
                      vA(" " + _A(f.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : wA("", !0)
                ]),
                _: 1
              }),
              Pe(he(b), { class: "translated-segment-card__actions" }, {
                default: rt(() => [
                  Pe(gA, SA(yA(f.$attrs)), null, 16)
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
}, VA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ee(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Oo(), { currentTranslation: s } = Dt();
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
}, cw = window.Vuex.useStore, EA = () => {
  const e = cw(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Ai.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, LA = () => {
  const e = cw(), { currentMTProvider: t } = pe(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = EA();
  return () => C(void 0, null, function* () {
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
}, AA = window.Vue.computed, DA = (e) => {
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
}, TA = () => {
  const { selectedContentTranslationUnit: e } = ee(), t = AA(
    () => e.value instanceof Ke
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && DA(o);
  };
}, BA = (e, t) => {
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
}, PA = window.Vue.computed, uw = () => {
  const { currentTranslation: e } = Dt(), { currentSourcePage: t } = nt();
  return PA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, FA = window.Vuex.useStore, Qc = () => {
  const e = FA(), { sourceSection: t, targetPageTitleForPublishing: n } = ee(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = uw();
  return () => {
    const c = n.value, d = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (p) => BA(p, d)
    );
    const l = t.value.getTranslationProgress(a), u = e.getters["application/isSandboxTarget"];
    return gt.saveTranslation({
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
      isSandbox: u,
      progress: l
    });
  };
}, MA = window.Vue.effectScope, NA = window.Vue.onScopeDispose, UA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = MA(!0), n = o.run(() => e(...a))), NA(s), n);
}, IA = window.Vuex.useStore;
let Ml;
const RA = () => {
  const e = IA(), t = Qc();
  let n = 1e3, o = 0;
  return Ml = Hc(() => t().then((a) => {
    a instanceof Do ? (n *= o + 1, o++, setTimeout(Ml, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Po)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Ml;
}, dw = UA(RA), zA = window.Vuex.useStore, OA = () => {
  const e = zA(), t = dw(), { currentMTProvider: n } = pe(e), { sourceSection: o, currentProposedTranslation: s } = ee(), { selectNextTranslationUnit: a } = Oo();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, jA = window.Vuex.useStore, HA = () => {
  const e = jA(), t = dw();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, qA = window.Vuex.useStore, GA = window.Vue.computed, gw = () => {
  const e = qA(), t = Ae(), { currentTranslation: n } = Dt(), { currentMTProvider: o, previousRoute: s } = pe(e), { currentTargetPage: a } = nt(), {
    sourceLanguageURLParameter: i,
    targetLanguageURLParameter: c,
    pageURLParameter: d,
    sectionURLParameter: g
  } = B(), r = et(), l = GA(() => {
    var _;
    const w = {
      translation_source_language: i.value,
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
    return o.value && (w.translation_provider = te.getProviderForInstrumentation(o.value)), w;
  });
  return {
    logEditorOpenEvent: () => {
      var y;
      const w = t.currentRoute.value.meta.workflowStep, f = t.getRoutes().find(
        (k) => k.name === s.value
      ), S = ((y = f == null ? void 0 : f.meta) == null ? void 0 : y.workflowStep) || 0;
      return w > S ? r(fe({
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
}, XA = (e, t, n, o) => C(void 0, null, function* () {
  var c, d, g;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((d = t.mt) == null ? void 0 : d.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, i = yield iw(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), WA = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, KA = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return XA(e, t, n, o);
  WA(e, t);
}), YA = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const d = o.find(
          (r) => r.subSectionId === c.id
        );
        if (!d)
          continue;
        const g = KA(
          c,
          d,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, JA = { restoreCorporaDraft: YA }, QA = () => {
  const { currentSourcePage: e } = nt(), { sourceSection: t } = ee();
  return (n) => C(void 0, null, function* () {
    n.restored || (yield gt.fetchTranslationUnits(n.translationId).then(
      (s) => JA.restoreCorporaDraft(
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
const le = window.Vue.unref, lt = window.Vue.createVNode, an = window.Vue.withCtx, ZA = window.Vue.resolveDirective, Pp = window.Vue.createElementVNode, eD = window.Vue.withDirectives, tD = window.Vue.toDisplayString, nD = window.Vue.createTextVNode, oD = window.Vue.renderList, sD = window.Vue.Fragment, Vn = window.Vue.openBlock, Fp = window.Vue.createElementBlock, bo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const aD = window.Vue.normalizeClass, iD = window.Vue.normalizeStyle, rD = { class: "sx-sentence-selector__header-title mb-0" }, lD = { class: "sx-sentence-selector__section-contents px-4" }, ko = window.Vue.computed, cD = window.Vue.nextTick, uD = window.Vue.onMounted, ks = window.Vue.ref, Mp = window.Vue.watch, dD = window.Vuex.useStore, Np = window.Codex.CdxButton, gD = window.Codex.CdxIcon, pD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ks(!1), n = ks(!1), o = ks("100%"), s = dD(), { currentMTProvider: a } = pe(s), {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: c,
      pageURLParameter: d,
      sectionURLParameter: g
    } = B(), { sourceSection: r, selectedContentTranslationUnit: l } = ee(), u = ks({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = ko(
      () => Object.values(u.value).every(Boolean)
    ), m = ko(
      () => {
        var J;
        return (J = r.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), h = ko(() => {
      var J;
      return (J = r.value) == null ? void 0 : J.subSections;
    }), w = ko(
      () => {
        var J;
        return (J = r.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), _ = ko(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: f,
      logEditorCloseEvent: S,
      logEditorCloseWarnEvent: y,
      logEditorSegmentAddEvent: k
    } = gw(), V = VA();
    LA()().then(() => {
      f(), u.value.mtProviders = !0;
    });
    const x = TA(), { fetchTranslationsByStatus: T, translationsFetched: U } = Ro(), M = QA(), { currentTranslation: X } = Dt(), { selectPageSectionByTitle: G, selectPageSectionByIndex: me } = Pi(), Ve = Kc(), mt = No();
    uD(() => C(this, null, function* () {
      if (!U.value.draft) {
        const J = [
          // required to get current draft translation (if exists)
          T("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          Ve(i.value, d.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          mt(i.value, [d.value])
        ];
        yield Promise.all(J);
      }
      u.value.pageMetadata = !0, g.value ? yield G(g.value) : yield me(0), u.value.pageContent = !0, X.value && (yield M(X.value)), u.value.draftRestored = !0, Mp(
        p,
        () => C(this, null, function* () {
          p.value && (yield cD(), V(), x());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), Mp(l, x);
    const {
      selectNextTranslationUnit: Ee,
      selectPreviousTranslationUnit: Le
    } = Oo(), Tt = OA(), Ne = () => {
      k(), Tt();
    }, De = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, oe = Ae(), O = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        Q.value = !0, y();
        return;
      }
      W();
    }, H = HA(), { clearTranslationURLParameters: de } = B(), W = () => C(this, null, function* () {
      T("draft"), X.value && (r.value.reset(), X.value.restored = !1), S(), de(), H(), yield oe.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: v,
      translateSelectedTranslationUnitForAllProviders: D
    } = Jc(), A = () => {
      N.value || (t.value = !0, D());
    }, { getCurrentTitleByLanguage: P } = mn(), j = (J, Z) => {
      oe.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: w.value,
          title: P(
            c.value,
            i.value
          ),
          isInitialEdit: Z || null
        }
      });
    }, se = () => oe.push({ name: "sx-publisher" }), z = () => C(this, null, function* () {
      l.value ? yield v(
        l.value.id,
        a.value
      ) : yield v(0, a.value);
    }), N = ko(
      () => l.value instanceof Ke
    ), Q = ks(!1);
    return (J, Z) => {
      const ea = ZA("i18n");
      return Vn(), Fp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: iD(_.value)
      }, [
        lt(le(F), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: an(() => [
            lt(le(b), { shrink: "" }, {
              default: an(() => [
                lt(le(Np), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: O
                }, {
                  default: an(() => [
                    lt(le(gD), { icon: le(Th) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            lt(le(b), {
              grow: "",
              class: "px-1"
            }, {
              default: an(() => [
                eD(Pp("h4", rD, null, 512), [
                  [ea, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            lt(le(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: an(() => [
                lt(le(Np), {
                  disabled: !(le(r) && le(r).isTranslated),
                  onClick: se
                }, {
                  default: an(() => [
                    nD(tD(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (Vn(), bo(le(F), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: an(() => [
            lt(le(b), {
              dir: le(R.getDir)(le(i)),
              lang: le(i),
              class: "sx-sentence-selector__section"
            }, {
              default: an(() => [
                lt(q5),
                Pp("div", lD, [
                  (Vn(!0), Fp(sD, null, oD(h.value, (Re) => (Vn(), bo(FL, {
                    id: Re.id,
                    key: `sub-section-${Re.id}`,
                    "sub-section": Re,
                    onBounceTranslation: De
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !N.value && m.value ? (Vn(), bo($A, {
              key: 0,
              onEditTranslation: Z[0] || (Z[0] = (Re) => j(Re, !1)),
              onSkipTranslation: le(Ee),
              onSelectPreviousSegment: le(Le)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : N.value ? (Vn(), bo(tA, {
              key: 2,
              onEditTranslation: j,
              onApplyTranslation: Ne,
              onSkipTranslation: le(Ee),
              onSelectPreviousSegment: le(Le)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Vn(), bo(kL, {
              key: 1,
              class: aD({ "mb-0": !n.value }),
              onConfigureOptions: A,
              onEditTranslation: Z[1] || (Z[1] = (Re) => j(Re, !0)),
              onApplyTranslation: Ne,
              onSkipTranslation: le(Ee),
              onSelectPreviousSegment: le(Le),
              onRetryTranslation: z
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Vn(), bo(le(F), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: an(() => [
            lt(le(Je), { class: "mt-0" })
          ]),
          _: 1
        })),
        lt(B5, {
          active: t.value,
          "onUpdate:active": Z[2] || (Z[2] = (Re) => t.value = Re)
        }, null, 8, ["active"]),
        lt(c5, {
          modelValue: Q.value,
          "onUpdate:modelValue": Z[3] || (Z[3] = (Re) => Q.value = Re),
          onDiscardTranslation: W
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const mD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: pD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, hD = window.Vue.resolveComponent, wD = window.Vue.createVNode, fD = window.Vue.normalizeClass, _D = window.Vue.openBlock, vD = window.Vue.createElementBlock;
function SD(e, t, n, o, s, a) {
  const i = hD("sx-sentence-selector");
  return _D(), vD("main", {
    class: fD(["sx-sentence-selector-view", a.classes])
  }, [
    wD(i)
  ], 2);
}
const yD = /* @__PURE__ */ ne(mD, [["render", SD]]), CD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, bD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const kD = window.Vue.resolveDirective, ui = window.Vue.withDirectives, xt = window.Vue.openBlock, rn = window.Vue.createElementBlock, di = window.Vue.createCommentVNode, gi = window.Vue.Transition, Wn = window.Vue.withCtx, xo = window.Vue.createVNode, xs = window.Vue.createElementVNode, En = window.Vue.unref, xD = window.Vue.renderList, $D = window.Vue.Fragment, VD = window.Vue.normalizeClass, Up = window.Vue.createBlock, ED = window.Vue.toDisplayString, LD = window.Vue.createTextVNode, AD = { class: "sx-quick-tutorial" }, DD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, TD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, BD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, PD = { class: "sx-quick-tutorial__illustration" }, FD = ["innerHTML"], MD = ["innerHTML"], ND = { class: "sx-quick-tutorial__step-indicator py-3" }, UD = ["onClick"], ID = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, RD = {
  key: "secondary-point-1",
  class: "ma-0"
}, zD = {
  key: "secondary-point-2",
  class: "ma-0"
}, OD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Ip = window.Vue.ref, Rp = window.Codex.CdxButton, jD = window.Codex.CdxIcon, HD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Ip(2), n = Ip(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (i) => i === n.value;
    Ae();
    const a = zo();
    return (i, c) => {
      const d = kD("i18n");
      return xt(), rn("section", AD, [
        xo(En(F), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Wn(() => [
            xs("section", DD, [
              xo(gi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? ui((xt(), rn("h2", TD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? ui((xt(), rn("h2", BD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : di("", !0)
                ]),
                _: 1
              })
            ]),
            xs("section", PD, [
              xo(gi, { name: "mw-ui-animation-slide-start" }, {
                default: Wn(() => [
                  s(1) ? (xt(), rn("div", {
                    key: "illustration-1",
                    innerHTML: En(bD)
                  }, null, 8, FD)) : s(2) ? (xt(), rn("div", {
                    key: "illustration-2",
                    innerHTML: En(CD)
                  }, null, 8, MD)) : di("", !0)
                ]),
                _: 1
              })
            ]),
            xs("div", ND, [
              (xt(!0), rn($D, null, xD(t.value, (g) => (xt(), rn("span", {
                key: `dot-${g}`,
                class: VD(["dot mx-1", { "dot-active": s(g) }]),
                role: "button",
                onClick: (r) => n.value = g
              }, null, 10, UD))), 128))
            ]),
            xs("section", ID, [
              xo(gi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? ui((xt(), rn("h3", RD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? ui((xt(), rn("h3", zD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : di("", !0)
                ]),
                _: 1
              })
            ]),
            xs("div", OD, [
              xo(gi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Wn(() => [
                  s(1) ? (xt(), Up(En(Rp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": i.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Wn(() => [
                      xo(En(jD), { icon: En(Qs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (xt(), Up(En(Rp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: En(a)
                  }, {
                    default: Wn(() => [
                      LD(ED(i.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : di("", !0)
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
const qD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: HD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, GD = window.Vue.resolveComponent, XD = window.Vue.createVNode, WD = window.Vue.normalizeClass, KD = window.Vue.openBlock, YD = window.Vue.createElementBlock;
function JD(e, t, n, o, s, a) {
  const i = GD("sx-quick-tutorial");
  return KD(), YD("main", {
    class: WD(["sx-quick-tutorial-view", a.classes])
  }, [
    XD(i)
  ], 2);
}
const QD = /* @__PURE__ */ ne(qD, [["render", JD]]);
const ZD = window.Vue.resolveDirective, zp = window.Vue.createElementVNode, eT = window.Vue.withDirectives, tT = window.Vue.unref, nT = window.Vue.withCtx, oT = window.Vue.createVNode, sT = window.Vue.openBlock, aT = window.Vue.createElementBlock, iT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, rT = { class: "sx-editor__original-content-panel__header mb-2" }, lT = ["lang", "dir", "innerHTML"], Op = window.Vue.ref, cT = window.Vue.onMounted, uT = {
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
      const d = i.getElementsByTagName("a");
      for (const g of d)
        g.href = K.getPageUrl(c, g.title), g.target = "_blank";
    }, o = Op(null), s = Op(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return cT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (i, c) => {
      const d = ZD("i18n");
      return sT(), aT("section", iT, [
        eT(zp("h5", rT, null, 512), [
          [d, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        oT(tT(U1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: nT(() => [
            zp("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, lT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, dT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const gT = window.Vue.unref, $s = window.Vue.createElementVNode, jp = window.Vue.resolveDirective, Nl = window.Vue.withDirectives, pT = window.Vue.normalizeClass, mT = window.Vue.openBlock, hT = window.Vue.createElementBlock, wT = window.Vue.createCommentVNode, fT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, _T = { class: "sx-editor__feedback-overlay-content px-4" }, vT = ["innerHTML"], ST = { class: "sx-editor__feedback-overlay-content__title" }, yT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Ul = window.Vue.computed, CT = {
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
    const t = e, { targetLanguageURLParameter: n } = B(), o = Ul(
      () => Ht.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Ul(() => {
      const i = Ht.getScoreStatus(o.value);
      return i === "failure" ? o.value === 0 ? "failure" : "warning" : i;
    }), a = Ul(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (i, c) => {
      const d = jp("i18n"), g = jp("i18n-html");
      return e.showFeedback ? (mT(), hT("div", fT, [
        $s("div", _T, [
          $s("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: gT(dT)
          }, null, 8, vT),
          Nl($s("h2", ST, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Nl($s("p", yT, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Nl($s("p", {
            class: pT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : wT("", !0);
    };
  }
}, bT = window.Vuex.useStore, kT = () => {
  const e = bT(), t = Qc(), { selectNextTranslationUnit: n } = Oo(), { sourceSection: o, selectedContentTranslationUnit: s } = ee(), { getCurrentTitleByLanguage: a } = mn();
  return (i) => C(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), i = c.innerHTML;
    const { sourceLanguage: d, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof Ke && (i = (yield iw(
      i,
      a(g, d),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const Xe = window.Vue.unref, Il = window.Vue.openBlock, Rl = window.Vue.createBlock, Hp = window.Vue.createCommentVNode, qp = window.Vue.createVNode, xT = window.Vue.createElementVNode, $T = window.Vue.withCtx, VT = { class: "sx-editor__editing-surface-container grow" }, zl = window.Vue.ref, ET = window.Vue.computed, LT = window.Vuex.useStore, AT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = zl(!1), o = Ae(), s = LT(), a = () => n.value = !0, i = () => o.replace({ name: t.fromRoute }), { isFinalEdit: c, isInitialEdit: d, content: g, originalContent: r, title: l } = history.state, u = zl(null), p = zl(!1), { logEditorSegmentAddEvent: m } = gw(), { targetLanguage: h, sourceLanguage: w } = pe(s), { sourceSection: _ } = ee(), f = ET(
      () => Ht.calculateScore(
        u.value,
        g,
        h.value
      )
    ), S = kT(), y = (k) => C(this, null, function* () {
      u.value = k, p.value = !0;
      const V = new Promise((x) => setTimeout(x, 2e3));
      let L = Promise.resolve();
      c ? _.value.editedTranslation = k : (f.value === 0 && d && m(), L = S(k)), yield Promise.all([V, L]), p.value = !1, i();
    });
    return (k, V) => (Il(), Rl(Xe(F), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: $T(() => [
        Xe(r) ? (Il(), Rl(uT, {
          key: 0,
          language: Xe(w),
          dir: Xe(R.getDir)(Xe(w)),
          "original-content": Xe(r)
        }, null, 8, ["language", "dir", "original-content"])) : Hp("", !0),
        n.value ? Hp("", !0) : (Il(), Rl(Xe(Je), { key: 1 })),
        xT("div", VT, [
          qp(CT, {
            "edited-translation": u.value,
            "show-feedback": p.value,
            "proposed-translation": Xe(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          qp(t4, {
            content: Xe(g),
            language: Xe(h),
            dir: Xe(R.getDir)(Xe(h)),
            title: Xe(l),
            onReady: a,
            onClose: i,
            onEditCompleted: y
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const DT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: AT
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
}, TT = window.Vue.resolveComponent, BT = window.Vue.createVNode, PT = window.Vue.normalizeClass, FT = window.Vue.openBlock, MT = window.Vue.createElementBlock;
function NT(e, t, n, o, s, a) {
  const i = TT("sx-editor");
  return FT(), MT("main", {
    class: PT(["sx-editor-view", a.classes])
  }, [
    BT(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const UT = /* @__PURE__ */ ne(DT, [["render", NT]]);
const zt = window.Vue.unref, Kn = window.Vue.createVNode, Vs = window.Vue.withCtx, IT = window.Vue.resolveDirective, RT = window.Vue.withDirectives, zT = window.Vue.openBlock, OT = window.Vue.createBlock, Gp = window.Codex.CdxButton, Xp = window.Codex.CdxIcon, jT = {
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
      const a = IT("i18n");
      return zT(), OT(zt(F), { class: "ma-0 sx-publisher__header" }, {
        default: Vs(() => [
          Kn(zt(b), {
            shrink: "",
            class: "me-2"
          }, {
            default: Vs(() => [
              Kn(zt(Gp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Vs(() => [
                  Kn(zt(Xp), { icon: zt(Io) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          RT(Kn(zt(b), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Kn(zt(b), { shrink: "" }, {
            default: Vs(() => [
              Kn(zt(Gp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: Vs(() => [
                  Kn(zt(Xp), { icon: zt(bb) }, null, 8, ["icon"])
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
}, HT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, qT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Wp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Ol = window.Vue.createElementVNode, Kp = window.Vue.toDisplayString, jl = window.Vue.unref, Hl = window.Vue.withCtx, Yp = window.Vue.createVNode, GT = window.Vue.openBlock, XT = window.Vue.createBlock, WT = window.Vue.createCommentVNode, KT = ["innerHTML"], YT = ["textContent"], JT = ["textContent"], ql = window.Vue.computed, QT = {
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
    const t = we(), n = e, o = {
      pending: {
        svg: HT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: qT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Wp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Wp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = ql(() => o[n.status].svg), a = ql(() => o[n.status].title), i = ql(() => o[n.status].subtitle);
    return (c, d) => e.active ? (GT(), XT(jl(pt), {
      key: 0,
      "overlay-opacity": "high",
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Hl(() => [
        Yp(jl(F), { class: "ma-4" }, {
          default: Hl(() => [
            Yp(jl(b), null, {
              default: Hl(() => [
                Ol("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, KT),
                Ol("h2", {
                  textContent: Kp(a.value)
                }, null, 8, YT),
                Ol("p", {
                  class: "ma-0",
                  textContent: Kp(i.value)
                }, null, 8, JT)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : WT("", !0);
  }
};
const We = window.Vue.unref, $t = window.Vue.createVNode, ln = window.Vue.withCtx, ZT = window.Vue.resolveDirective, e6 = window.Vue.withDirectives, Jp = window.Vue.toDisplayString, t6 = window.Vue.createTextVNode, Gl = window.Vue.openBlock, Qp = window.Vue.createElementBlock, n6 = window.Vue.createCommentVNode, pw = window.Vue.createElementVNode, o6 = window.Vue.createBlock, s6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, a6 = ["src"], i6 = ["textContent"], r6 = /* @__PURE__ */ pw("p", { class: "mt-0" }, null, -1), l6 = window.Vue.computed, c6 = window.Vue.inject, u6 = window.Vue.ref, Zp = window.Codex.CdxButton, d6 = window.Codex.CdxIcon, g6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: oh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = u6(""), s = () => n("close"), a = () => n("publish", o.value), i = c6("breakpoints"), c = l6(() => i.value.mobile);
    return (d, g) => {
      const r = ZT("i18n");
      return e.active && e.captchaDetails ? (Gl(), o6(We(pt), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: ln(() => [
          $t(We(F), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: ln(() => [
              $t(We(b), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: ln(() => [
                  $t(We(Zp), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": d.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: ln(() => [
                      $t(We(d6), { icon: We(Io) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              e6($t(We(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              $t(We(b), {
                shrink: "",
                class: "justify-center"
              }, {
                default: ln(() => [
                  $t(We(Zp), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: ln(() => [
                      t6(Jp(d.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          $t(We(yi))
        ]),
        default: ln(() => [
          pw("div", s6, [
            e.captchaDetails.type === "image" ? (Gl(), Qp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, a6)) : (Gl(), Qp("p", {
              key: 1,
              textContent: Jp(e.captchaDetails.question)
            }, null, 8, i6)),
            r6,
            $t(We(F), { class: "ma-0" }, {
              default: ln(() => [
                $t(We(b), null, {
                  default: ln(() => [
                    $t(We(sc), {
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
      }, 8, ["fullscreen"])) : n6("", !0);
    };
  }
};
const Yn = window.Vue.unref, Es = window.Vue.createVNode, pi = window.Vue.withCtx, Jn = window.Vue.createElementVNode, p6 = window.Vue.resolveDirective, m6 = window.Vue.withDirectives, h6 = window.Vue.renderList, em = window.Vue.Fragment, Xl = window.Vue.openBlock, tm = window.Vue.createElementBlock, w6 = window.Vue.toDisplayString, f6 = window.Vue.normalizeClass, _6 = window.Vue.createBlock, v6 = { class: "mw-ui-dialog__header" }, S6 = { class: "row ma-0 px-4 py-3" }, y6 = { class: "col shrink justify-center" }, C6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, b6 = { class: "mb-0" }, k6 = { class: "pa-4" }, x6 = ["textContent"], $6 = window.Vuex.useStore, Ls = window.Vue.computed, V6 = window.Codex.CdxButton, E6 = window.Codex.CdxIcon, L6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = $6(), s = Ls(() => o.state.application.publishTarget), a = Ls(() => o.state.translator.isAnon), i = we(), { sourceSection: c } = ee(), d = Ls(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = Ls(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = Ls(() => [
      {
        label: d.value,
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
    ]), l = (m) => m === r.value.length - 1 ? "mb-1" : "mb-4", u = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), u();
    };
    return (m, h) => {
      const w = p6("i18n");
      return Xl(), _6(Yn(pt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: u
      }, {
        header: pi(() => [
          Jn("div", v6, [
            Jn("div", S6, [
              Jn("div", y6, [
                Es(Yn(V6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: u
                }, {
                  default: pi(() => [
                    Es(Yn(E6), { icon: Yn(Th) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Jn("div", C6, [
                m6(Jn("h4", b6, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Es(Yn(yi))
          ])
        ]),
        default: pi(() => [
          Jn("div", k6, [
            Es(Yn(m1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: pi(() => [
                (Xl(!0), tm(em, null, h6(r.value, (_, f) => (Xl(), tm(em, {
                  key: _.label
                }, [
                  Es(Yn(ac), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Jn("p", {
                    class: f6(["complementary ms-7 mt-0", l(f)]),
                    textContent: w6(_.details)
                  }, null, 10, x6)
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
const Vt = window.Vue.unref, Qn = window.Vue.createVNode, A6 = window.Vue.resolveDirective, nm = window.Vue.withDirectives, mi = window.Vue.openBlock, om = window.Vue.createElementBlock, D6 = window.Vue.createCommentVNode, sm = window.Vue.toDisplayString, Wl = window.Vue.createElementVNode, $o = window.Vue.withCtx, am = window.Vue.createBlock, T6 = window.Vue.Fragment, B6 = window.Vue.normalizeClass, P6 = { class: "sx-publisher__review-info__content" }, F6 = {
  key: 0,
  class: "complementary ma-0"
}, M6 = ["textContent"], N6 = ["textContent"], Ln = window.Vue.computed, im = window.Vue.ref, U6 = window.Vue.watch, rm = window.Codex.CdxButton, Kl = window.Codex.CdxIcon, I6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = im(0), o = im(null);
    U6(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = Ln(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Ln(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Ln(() => {
      switch (a.value) {
        case "warning":
          return Ah;
        case "error":
          return Cb;
        default:
          return xb;
      }
    }), c = Ln(() => a.value === "default"), d = Ln(
      () => c.value ? "notice" : a.value
    ), g = Ln(
      () => `sx-publisher__review-info--${d.value}`
    ), r = we(), l = Ln(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), u = Ln(
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
    return (h, w) => {
      const _ = A6("i18n-html");
      return mi(), am(Vt(I0), {
        type: d.value,
        class: B6(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: c.value
      }, {
        icon: $o(() => [
          Qn(Vt(Kl), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: $o(() => [
          Wl("div", P6, [
            a.value === "default" ? nm((mi(), om("p", F6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (mi(), om(T6, { key: 1 }, [
              Wl("h5", {
                textContent: sm(u.value)
              }, null, 8, M6),
              Wl("p", {
                textContent: sm(l.value)
              }, null, 8, N6),
              Qn(Vt(F), {
                justify: "between",
                class: "ma-0"
              }, {
                default: $o(() => [
                  nm(Qn(Vt(b), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (mi(), am(Vt(b), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: $o(() => [
                      Qn(Vt(rm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: $o(() => [
                          Qn(Vt(Kl), { icon: Vt(jc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Qn(Vt(rm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: $o(() => [
                          Qn(Vt(Kl), { icon: Vt(Qs) }, null, 8, ["icon"])
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
  const e = z6(), { currentTranslation: t } = Dt(), { currentMTProvider: n, previousRoute: o } = pe(e), { currentTargetPage: s } = nt(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    sectionURLParameter: d
  } = B(), { sourceSection: g } = ee(), r = et(), l = O6(() => {
    var w;
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
    if (d.value ? (h.translation_source_section = d.value, h.translation_type = "section") : h.translation_type = "article", t.value) {
      h.translation_id = t.value.translationId, h.translation_target_title = t.value.targetTitle;
      const _ = t.value.targetSectionTitle;
      _ && (h.translation_target_section = _);
    } else
      s.value && (h.translation_target_title = (w = s.value) == null ? void 0 : w.title);
    return n.value && (h.translation_provider = te.getProviderForInstrumentation(n.value)), h.human_modification_rate = Ht.getMTScoreForPageSection(
      g.value,
      i.value
    ) / 100, h.human_modification_threshold = Ht.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => r(fe({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, w) => r(fe({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: w
    }, l.value)),
    logPublishFailureEvent: () => r(fe({
      event_type: "publish_failure"
    }, l.value))
  };
}, lm = window.Vue.ref, H6 = window.Vuex.useStore, q6 = () => {
  const e = H6(), { pageURLParameter: t } = B(), { sourceSection: n, targetPageTitleForPublishing: o } = ee(), s = uw(), a = lm(!1), i = lm("pending"), c = () => a.value = !1, d = Qc(), {
    logPublishAttemptEvent: g,
    logPublishSuccessEvent: r,
    logPublishFailureEvent: l
  } = j6(), u = (m, h) => C(void 0, null, function* () {
    g();
    const w = yield d();
    if (w instanceof Do)
      return l(), { publishFeedbackMessage: w, targetUrl: null };
    const _ = w, {
      /** @type {PageSection} */
      sourceLanguage: f,
      targetLanguage: S
    } = e.state.application, y = o.value, k = e.getters["application/isSandboxTarget"], V = {
      html: R6(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: y,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: f,
      targetLanguage: S,
      revision: s.value,
      isSandbox: k,
      sectionTranslationId: _
    };
    m && (V.captchaId = m, V.captchaWord = h);
    const L = yield gt.publishTranslation(
      V
    );
    return L.publishFeedbackMessage === null ? r(L.pageId, L.revisionId) : l(), L;
  });
  return {
    closePublishDialog: c,
    doPublish: (m = null, h = null) => C(void 0, null, function* () {
      i.value = "pending", a.value = !0;
      let w;
      try {
        w = yield u(
          h == null ? void 0 : h.id,
          m
        );
      } catch (_) {
        if (_ instanceof Po)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw _;
      }
      return w;
    }),
    isPublishDialogActive: a,
    publishStatus: i
  };
}, G6 = window.Vue.computed, X6 = () => {
  const e = Ae(), { sourceSection: t } = ee(), { getCurrentTitleByLanguage: n } = mn(), {
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
}, W6 = window.Vuex.useStore, K6 = () => {
  const e = W6(), { targetLanguage: t } = pe(e), { sourceSection: n } = ee();
  return () => {
    const o = Ht.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = Ht.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, i = s === "failure" ? "error" : "warning";
    let c, d;
    return i === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Do({
      title: c,
      text: d,
      status: i,
      type: "mt"
    });
  };
}, Y6 = window.Vue.ref, J6 = window.Vue.computed, Q6 = () => {
  const e = K6(), t = Y6([]), n = J6(
    () => t.value.some((i) => i.isError)
  );
  return {
    addPublishFeedbackMessage: (i) => {
      t.value.push(i), t.value.sort((c, d) => +d.isError - +c.isError);
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
}, Z6 = window.Vuex.useStore, e9 = () => {
  const e = Z6(), { currentSourcePage: t } = nt(), { sourceLanguage: n, targetLanguage: o } = pe(e), { sourceSection: s, targetPageTitleForPublishing: a } = ee();
  return (i) => C(void 0, null, function* () {
    const c = a.value, d = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !d && r.getNamespaceId() !== l.user)
      try {
        yield Ai.addWikibaseLink(
          n.value,
          o.value,
          g,
          c
        );
      } catch (u) {
        mw.log.error("Error while adding wikibase link", u);
      }
    if (!i) {
      const u = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(u), new Error(u);
    }
    location.href = i;
  });
}, cm = window.Vue.ref, t9 = () => {
  const e = cm(!1), t = cm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const Se = window.Vue.unref, je = window.Vue.createVNode, n9 = window.Vue.resolveDirective, As = window.Vue.createElementVNode, o9 = window.Vue.withDirectives, Vo = window.Vue.withCtx, s9 = window.Vue.openBlock, a9 = window.Vue.createElementBlock, i9 = { class: "sx-publisher" }, r9 = { class: "sx-publisher__publish-panel pa-4" }, l9 = { class: "mb-2" }, c9 = ["innerHTML"], u9 = { class: "sx-publisher__section-preview pa-5" }, d9 = ["innerHTML"], um = window.Vue.computed, g9 = window.Vue.onMounted, p9 = window.Vue.ref, m9 = window.Vue.watch, h9 = window.Vuex.useStore, dm = window.Codex.CdxButton, gm = window.Codex.CdxIcon, w9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = h9(), { sourceSection: n } = ee(), o = um(() => {
      var x;
      return (x = n.value) == null ? void 0 : x.title;
    }), s = we(), a = um(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: c,
      handleCaptchaError: d,
      onCaptchaDialogClose: g
    } = t9(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: u,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = Q6(), h = e9(), { doPublish: w, isPublishDialogActive: _, publishStatus: f, closePublishDialog: S } = q6(), y = (x = null) => C(this, null, function* () {
      if (l.value)
        return;
      const T = yield w(x, i);
      if (!T)
        return;
      const { publishFeedbackMessage: U, targetUrl: M } = T;
      if (d(U)) {
        S();
        return;
      } else
        U && u(U);
      f.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          S();
          return;
        }
        h(M);
      }, 1e3);
    });
    g9(() => m());
    const k = X6(), V = p9(!1), L = () => V.value = !0;
    return m9(V, (x) => {
      x || (p(), m());
    }), (x, T) => {
      const U = n9("i18n");
      return s9(), a9("section", i9, [
        je(jT, {
          "is-publishing-disabled": Se(l),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        As("div", r9, [
          o9(As("h5", l9, null, 512), [
            [U, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          As("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, c9),
          je(Se(F), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Vo(() => [
              je(Se(b), { shrink: "" }, {
                default: Vo(() => [
                  je(Se(dm), {
                    weight: "quiet",
                    "aria-label": x.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: L
                  }, {
                    default: Vo(() => [
                      je(Se(gm), { icon: Se(Bb) }, null, 8, ["icon"])
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
        je(I6, { "publish-feedback-messages": Se(r) }, null, 8, ["publish-feedback-messages"]),
        As("section", u9, [
          je(Se(F), { class: "pb-5 ma-0" }, {
            default: Vo(() => [
              je(Se(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              je(Se(b), { shrink: "" }, {
                default: Vo(() => [
                  je(Se(dm), {
                    weight: "quiet",
                    "aria-label": x.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: Se(k)
                  }, {
                    default: Vo(() => [
                      je(Se(gm), { icon: Se(Rc) }, null, 8, ["icon"])
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
            innerHTML: Se(n).translationHtml
          }, null, 8, d9)
        ]),
        je(L6, {
          active: V.value,
          "onUpdate:active": T[0] || (T[0] = (M) => V.value = M)
        }, null, 8, ["active"]),
        je(g6, {
          active: Se(c),
          "captcha-details": Se(i),
          onClose: Se(g),
          onPublish: T[1] || (T[1] = (M) => y(M))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        je(QT, {
          active: Se(_),
          status: Se(f)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const f9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: w9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, _9 = window.Vue.resolveComponent, v9 = window.Vue.createVNode, S9 = window.Vue.normalizeClass, y9 = window.Vue.openBlock, C9 = window.Vue.createElementBlock;
function b9(e, t, n, o, s, a) {
  const i = _9("sx-publisher");
  return y9(), C9("main", {
    class: S9(["sx-publisher-view", a.classes])
  }, [
    v9(i)
  ], 2);
}
const k9 = /* @__PURE__ */ ne(f9, [["render", b9]]);
const Et = window.Vue.unref, An = window.Vue.createVNode, Zn = window.Vue.withCtx, Yl = window.Vue.toDisplayString, Jl = window.Vue.createElementVNode, x9 = window.Vue.openBlock, $9 = window.Vue.createBlock, V9 = ["textContent"], E9 = ["textContent"], L9 = ["textContent"], hw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Mo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (x9(), $9(Et(F), {
      class: "cx-search-suggestion pa-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Et(R.getDir)(e.suggestion.language)
    }, {
      default: Zn(() => [
        An(Et(b), { shrink: "" }, {
          default: Zn(() => [
            An(Et(Cc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        An(Et(b), { class: "ms-4" }, {
          default: Zn(() => [
            An(Et(F), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Zn(() => [
                An(Et(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Zn(() => [
                    Jl("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Yl(e.suggestion.title)
                    }, null, 8, V9)
                  ]),
                  _: 1
                }),
                An(Et(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Zn(() => [
                    Jl("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Yl(e.suggestion.description)
                    }, null, 8, E9)
                  ]),
                  _: 1
                }),
                An(Et(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Zn(() => [
                    An(Et(Ie), {
                      icon: Et(o0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Jl("small", {
                      textContent: Yl(e.suggestion.langLinksCount)
                    }, null, 8, L9)
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
const Ds = window.Vue.unref, Ts = window.Vue.openBlock, Ql = window.Vue.createBlock, A9 = window.Vue.createCommentVNode, D9 = window.Vue.resolveDirective, T9 = window.Vue.withDirectives, pm = window.Vue.createElementBlock, B9 = window.Vue.renderList, P9 = window.Vue.Fragment, F9 = window.Vue.normalizeClass, M9 = window.Vue.withCtx, N9 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, mm = window.Vue.computed, U9 = window.Vue.ref, I9 = {
  __name: "SearchResultsCard",
  props: {
    searchInput: {
      type: String,
      default: null
    },
    selectedItem: {
      type: [Object, String],
      required: !1
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguageURLParameter: t } = B(), n = mm(() => R.getAutonym(t.value)), o = e, s = U9(null), a = (l) => s.value = l, i = () => s.value = null, c = (l) => {
      var u;
      return ((u = o.selectedItem) == null ? void 0 : u.title) === l.title && !s.value || s.value === l.pageId;
    }, d = mm(() => o.searchInput), { searchResultsLoading: g, searchResultsSlice: r } = qc(
      t,
      d
    );
    return (l, u) => {
      const p = D9("i18n");
      return Ts(), Ql(Ds(Ye), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: M9(() => [
          Ds(g) ? (Ts(), Ql(Ds(Je), { key: 0 })) : Ds(r).length === 0 ? T9((Ts(), pm("p", N9, null, 512)), [
            [p, [
              d.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : A9("", !0),
          (Ts(!0), pm(P9, null, B9(Ds(r), (m) => (Ts(), Ql(hw, {
            key: m.pageId,
            suggestion: m,
            class: F9({
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
const R9 = window.Vue.toDisplayString, z9 = window.Vue.createElementVNode, O9 = window.Vue.renderList, j9 = window.Vue.Fragment, Zl = window.Vue.openBlock, H9 = window.Vue.createElementBlock, q9 = window.Vue.normalizeClass, hm = window.Vue.createBlock, G9 = window.Vue.unref, wm = window.Vue.withCtx, X9 = ["textContent"], W9 = window.Vue.ref, fm = {
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
      required: !1
    }
  },
  emits: ["suggestion-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = W9(null), s = (c) => o.value = c, a = () => o.value = null, i = (c) => {
      var d;
      return ((d = n.selectedItem) == null ? void 0 : d.title) === c.title && !o.value || o.value === c.pageId;
    };
    return (c, d) => (Zl(), hm(G9(Ye), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: wm(() => [
        z9("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: R9(e.cardTitle)
        }, null, 8, X9)
      ]),
      default: wm(() => [
        (Zl(!0), H9(j9, null, O9(e.suggestions, (g) => (Zl(), hm(hw, {
          key: g.pageId,
          suggestion: g,
          class: q9({
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
}, K9 = window.Vue.computed, Y9 = (e, t) => K9(() => {
  const o = {
    value: "other",
    props: {
      icon: r0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (i, c) => s.findIndex((d) => d === i) === c
  ).map((i) => ({
    value: i,
    props: {
      label: R.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), J9 = window.Vue.computed, Q9 = () => {
  const { supportedLanguageCodes: e } = Fo(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return { getSuggestedSourceLanguages: (s) => J9(() => {
    const a = (navigator.language || "").split("-")[0], i = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((d) => d.split("-")[0]), c = [
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      a,
      ...s.value,
      ...i
    ];
    return [...new Set(c)].filter(
      (d) => d !== t.value && d !== n.value && e.value.includes(d)
    );
  }) };
};
const Z9 = window.Vue.resolveDirective, eB = window.Vue.createElementVNode, ec = window.Vue.withDirectives, ce = window.Vue.unref, Bs = window.Vue.withCtx, Ot = window.Vue.createVNode, Ps = window.Vue.openBlock, _m = window.Vue.createBlock, tB = window.Vue.createCommentVNode, tc = window.Vue.createElementBlock, nB = window.Vue.Fragment, oB = window.Vue.vShow, Fs = window.Vue.withModifiers, Ms = window.Vue.withKeys, sB = ["onKeydown"], aB = { class: "mb-0" }, iB = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message my-0 px-4 py-16"
}, Eo = window.Vue.ref, rB = window.Vue.onMounted, Ns = window.Vue.computed, vm = window.Vue.watch, lB = window.Vue.inject, cB = window.Vuex.useStore, uB = window.Codex.CdxButton, dB = window.Codex.CdxIcon, gB = window.Codex.CdxSearchInput, pB = 3, mB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Eo(""), n = Eo(!1), o = Eo(null), s = Eo(!1), a = Eo([]), i = cB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d
    } = B(), { supportedLanguageCodes: g } = Fo(), { searchResultsSlice: r } = qc(c, t), { getSuggestedSourceLanguages: l } = Q9(), u = l(a), p = Y9(
      c,
      u
    ), m = Ae(), { fetchAllTranslations: h } = Ro();
    rB(() => C(this, null, function* () {
      var O;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (H) {
      }
      (O = o.value) == null || O.focus();
    }));
    const w = () => {
      m.push({ name: "dashboard" });
    }, _ = th(), f = (O) => _(O, d.value), S = (O) => {
      if (O === "other") {
        s.value = !0;
        return;
      }
      f(O);
    };
    vm(
      c,
      () => {
        var O;
        i.dispatch("mediawiki/fetchNearbyPages"), (O = o.value) == null || O.focus();
      },
      { immediate: !0 }
    );
    const y = et();
    vm(t, () => {
      n.value || (n.value = !0, y({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: d.value
      }));
    });
    const k = () => {
      s.value = !1;
    }, V = (O) => {
      s.value = !1, a.value.push(c.value), S(O);
    }, { fetchPreviousEditsInSource: L, previousEditsInSource: x } = Tc(), T = Eo([]);
    (() => L().then(() => x.value.length > 0 ? no.fetchPages(
      c.value,
      x.value
    ) : []).then((O) => {
      O = O.slice(0, pB), O = O.sort(
        (H, de) => x.value.indexOf(H.title) - x.value.indexOf(de.title)
      ), T.value = O;
    }))();
    const M = Ns(() => i.getters["mediawiki/getNearbyPages"]), X = lB("breakpoints"), G = Ns(() => X.value.mobile), me = Zs(), Ve = Ns(
      () => T.value && T.value.length
    ), mt = Ns(
      () => M.value && M.value.length
    ), { next: Ee, prev: Le, keyboardNavigationContainer: Tt, selectedItem: Ne } = Wh(t, r, T), De = (O) => me(
      O.title,
      c.value,
      d.value,
      oe.value
    ), oe = Ns(() => t.value ? "search_result" : Ve.value ? "suggestion_recent_edit" : mt.value ? "suggestion_nearby" : "");
    return (O, H) => {
      const de = Z9("i18n");
      return Ps(), tc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Tt,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          H[5] || (H[5] = Ms(Fs((...W) => ce(Ee) && ce(Ee)(...W), ["stop", "prevent"]), ["tab"])),
          H[6] || (H[6] = Ms(Fs((...W) => ce(Ee) && ce(Ee)(...W), ["stop", "prevent"]), ["down"])),
          H[7] || (H[7] = Ms(Fs((...W) => ce(Le) && ce(Le)(...W), ["stop", "prevent"]), ["up"])),
          Ms(Fs(w, ["stop", "prevent"]), ["esc"]),
          H[8] || (H[8] = Ms(Fs((W) => De(ce(Ne)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Ot(ce(F), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Bs(() => [
            Ot(ce(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Bs(() => [
                ec(eB("h5", aB, null, 512), [
                  [de, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Ot(ce(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Bs(() => [
                Ot(ce(uB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": O.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: w
                }, {
                  default: Bs(() => [
                    Ot(ce(dB), { icon: ce(Io) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ot(ce(gB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": H[0] || (H[0] = (W) => t.value = W),
          class: "sx-article-search__search-input",
          placeholder: O.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Ot(ce(qs), {
          class: "sx-article-search__language-button-group",
          items: ce(p),
          active: ce(c),
          onSelect: S
        }, null, 8, ["items", "active"]),
        t.value ? tB("", !0) : (Ps(), tc(nB, { key: 0 }, [
          Ve.value ? (Ps(), _m(fm, {
            key: 0,
            "card-title": O.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: T.value,
            "selected-item": ce(Ne),
            onSuggestionClicked: H[1] || (H[1] = (W) => De(W))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : mt.value ? (Ps(), _m(fm, {
            key: 1,
            "card-title": O.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: M.value,
            onSuggestionClicked: H[2] || (H[2] = (W) => De(W))
          }, null, 8, ["card-title", "suggestions"])) : ec((Ps(), tc("p", iB, null, 512)), [
            [de, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        ec(Ot(I9, {
          "search-input": t.value,
          "selected-item": ce(Ne),
          onSuggestionClicked: H[3] || (H[3] = (W) => De(W))
        }, null, 8, ["search-input", "selected-item"]), [
          [oB, !!t.value]
        ]),
        Ot(ce(pt), {
          value: s.value,
          "onUpdate:value": H[4] || (H[4] = (W) => s.value = W),
          class: "sx-article-search-language-selector",
          fullscreen: G.value,
          header: G.value,
          title: O.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: k
        }, {
          default: Bs(() => [
            Ot(ce(Kh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ce(g),
              suggestions: ce(u),
              placeholder: O.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: V,
              onClose: k
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, sB);
    };
  }
};
const hB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: mB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, wB = window.Vue.resolveComponent, fB = window.Vue.createVNode, _B = window.Vue.normalizeClass, vB = window.Vue.openBlock, SB = window.Vue.createElementBlock;
function yB(e, t, n, o, s, a) {
  const i = wB("sx-article-search");
  return vB(), SB("main", {
    class: _B(["sx-article-search-view", a.classes])
  }, [
    fB(i)
  ], 2);
}
const CB = /* @__PURE__ */ ne(hB, [["render", yB]]), bB = () => {
  const e = Zs(), t = Kc(), { logDashboardOpenEvent: n, getEventSource: o } = ew(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i
  } = B();
  return () => C(void 0, null, function* () {
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
}, kB = window.Vuex.useStore, xB = [
  {
    path: "",
    name: "dashboard",
    component: Sg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: CB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: vV,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: I3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: t5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: QD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: yD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: UT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: k9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Sg,
    meta: { workflowStep: 0 }
  }
], Zc = RC({
  history: Iy(),
  routes: xB
}), nc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, $B = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
Zc.beforeEach((e, t, n) => {
  const o = kB();
  if (mw.user.isAnon() || xm.assertUser().catch((r) => {
    r instanceof Po && o.commit("application/setIsLoginDialogOn", !0);
  }), t.name) {
    n();
    return;
  }
  const s = bB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    clearTranslationURLParameters: d
  } = B();
  if (o.commit("application/setPreviousRoute", t.name), !!(a.value && i.value && c.value)) {
    if ($B(
      a.value,
      i.value,
      c.value
    )) {
      const l = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      nc(e.name, l, n);
    } else
      s(), nc(e.name, "sx-translation-confirmer", n);
    return;
  }
  d(), nc(e.name, "dashboard", n);
});
Zc.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const VB = window.Vue.createApp, EB = mw.config.get("wgUserLanguage"), LB = "en", AB = mw.messages.values || {}, jo = VB(bS);
jo.use(Zc);
jo.use(ry);
jo.use(Y1);
jo.use(K1);
const DB = V_({
  locale: EB,
  finalFallback: LB,
  messages: AB,
  wikilinks: !0
});
jo.use(DB);
jo.mount("#contenttranslation");
