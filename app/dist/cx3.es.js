var $f = Object.defineProperty, Vf = Object.defineProperties;
var Ef = Object.getOwnPropertyDescriptors;
var ou = Object.getOwnPropertySymbols;
var Lf = Object.prototype.hasOwnProperty, Af = Object.prototype.propertyIsEnumerable;
var su = (e, t, n) => t in e ? $f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t) => {
  for (var n in t || (t = {}))
    Lf.call(t, n) && su(e, n, t[n]);
  if (ou)
    for (var n of ou(t))
      Af.call(t, n) && su(e, n, t[n]);
  return e;
}, Qe = (e, t) => Vf(e, Ef(t));
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
const J = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Df = {
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
}, Tf = window.Vue.toDisplayString, Mi = window.Vue.openBlock, Ni = window.Vue.createElementBlock, Bf = window.Vue.createCommentVNode, au = window.Vue.createElementVNode, Pf = window.Vue.normalizeClass, Ff = ["width", "height", "aria-labelledby"], Mf = ["id"], Nf = ["fill"], Uf = ["d"];
function If(e, t, n, o, s, a) {
  return Mi(), Ni("span", {
    class: Pf(["mw-ui-icon notranslate", a.classes])
  }, [
    (Mi(), Ni("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Mi(), Ni("title", {
        key: 0,
        id: n.iconName
      }, Tf(n.iconName), 9, Mf)) : Bf("", !0),
      au("g", { fill: n.iconColor }, [
        au("path", { d: a.iconImagePath }, null, 8, Uf)
      ], 8, Nf)
    ], 8, Ff))
  ], 2);
}
const Pe = /* @__PURE__ */ J(Df, [["render", If]]);
const Rf = {
  name: "MwButton",
  components: {
    MwIcon: Pe
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
}, zf = window.Vue.renderSlot, Of = window.Vue.resolveComponent, iu = window.Vue.normalizeClass, ea = window.Vue.openBlock, Ui = window.Vue.createBlock, Ii = window.Vue.createCommentVNode, jf = window.Vue.toDisplayString, Hf = window.Vue.createElementBlock, qf = window.Vue.toHandlerKey, Gf = window.Vue.withModifiers, Xf = window.Vue.mergeProps, Wf = window.Vue.createElementVNode, Kf = window.Vue.resolveDynamicComponent, Yf = window.Vue.withCtx, Jf = { class: "mw-ui-button__content" }, Zf = ["textContent"];
function Qf(e, t, n, o, s, a) {
  const i = Of("mw-icon");
  return ea(), Ui(Kf(a.component), {
    class: iu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Yf(() => [
      zf(e.$slots, "default", {}, () => [
        Wf("span", Jf, [
          n.icon ? (ea(), Ui(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: iu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Ii("", !0),
          !a.isIcon && n.label ? (ea(), Hf("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: jf(n.label)
          }, null, 8, Zf)) : Ii("", !0),
          n.indicator ? (ea(), Ui(i, Xf({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [qf(a.indicatorClickEvent)]: t[0] || (t[0] = Gf((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Ii("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Te = /* @__PURE__ */ J(Rf, [["render", Qf]]);
const ew = {
  name: "MwButtonGroup",
  components: {
    MwButton: Te
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
}, tw = window.Vue.renderList, nw = window.Vue.Fragment, Ri = window.Vue.openBlock, ru = window.Vue.createElementBlock, ow = window.Vue.resolveComponent, sw = window.Vue.withModifiers, aw = window.Vue.mergeProps, iw = window.Vue.createBlock, rw = { class: "row mw-ui-button-group ma-0 pa-0" };
function lw(e, t, n, o, s, a) {
  const i = ow("mw-button");
  return Ri(), ru("div", rw, [
    (Ri(!0), ru(nw, null, tw(n.items, (c) => (Ri(), iw(i, aw({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: sw((d) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Us = /* @__PURE__ */ J(ew, [["render", lw]]);
const cw = {
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
}, lu = window.Vue.renderSlot, uw = window.Vue.toDisplayString, cu = window.Vue.openBlock, uu = window.Vue.createElementBlock, dw = window.Vue.createCommentVNode, gw = window.Vue.createElementVNode, pw = { class: "mw-ui-card" }, hw = ["textContent"], fw = { class: "mw-ui-card__content" };
function ww(e, t, n, o, s, a) {
  return cu(), uu("div", pw, [
    lu(e.$slots, "header", {}, () => [
      n.title ? (cu(), uu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: uw(n.title)
      }, null, 8, hw)) : dw("", !0)
    ]),
    gw("div", fw, [
      lu(e.$slots, "default")
    ])
  ]);
}
const Ge = /* @__PURE__ */ J(cw, [["render", ww]]);
const _w = {}, vw = window.Vue.openBlock, Sw = window.Vue.createElementBlock, yw = { class: "mw-ui-divider row" };
function Cw(e, t) {
  return vw(), Sw("div", yw);
}
const fi = /* @__PURE__ */ J(_w, [["render", Cw]]);
const bw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, kw = window.Vue.renderSlot, xw = window.Vue.resolveDynamicComponent, $w = window.Vue.withCtx, Vw = window.Vue.openBlock, Ew = window.Vue.createBlock;
function Lw(e, t, n, o, s, a) {
  return Vw(), Ew(xw(n.tag), { class: "mw-grid container" }, {
    default: $w(() => [
      kw(e.$slots, "default")
    ]),
    _: 3
  });
}
const Aw = /* @__PURE__ */ J(bw, [["render", Lw]]), Dw = {
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
}, Tw = window.Vue.renderSlot, Bw = window.Vue.resolveDynamicComponent, Pw = window.Vue.normalizeClass, Fw = window.Vue.withCtx, Mw = window.Vue.openBlock, Nw = window.Vue.createBlock;
function Uw(e, t, n, o, s, a) {
  return Mw(), Nw(Bw(n.tag), {
    class: Pw(a.classes)
  }, {
    default: Fw(() => [
      Tw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ J(Dw, [["render", Uw]]), Zl = ["mobile", "tablet", "desktop", "desktop-wide"], Iw = Zl.reduce(
  (e, t) => Qe(de({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Rw = {
  name: "MwCol",
  props: Qe(de({}, Iw), {
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
      for (let n = 0; n < Zl.length; n++) {
        let o = Zl[n], s = this.$props[o];
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
const b = /* @__PURE__ */ J(Rw, [["render", Xw]]), Ww = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Kw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", wi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Yw = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Jw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", vm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Zw = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Qw = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Is = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", e0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", t0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", n0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", du = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", o0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Sm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", s0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", a0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", i0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", r0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", l0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", c0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, di = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, u0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, ym = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, d0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Cm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", g0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const zi = window.Vue.computed, p0 = window.Vue.watch, m0 = window.Vue.ref, h0 = window.Vue.nextTick, f0 = {
  name: "MwDialog",
  components: {
    MwButton: Te,
    MwRow: P,
    MwCol: b,
    MwDivider: fi
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
    const n = m0(null), o = zi(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = zi(() => ({
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
    const c = zi(() => ({
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
}, gu = window.Vue.normalizeClass, Oi = window.Vue.createElementVNode, ji = window.Vue.renderSlot, ta = window.Vue.resolveComponent, zo = window.Vue.createVNode, Hi = window.Vue.withCtx, pu = window.Vue.createCommentVNode, w0 = window.Vue.withKeys, mu = window.Vue.openBlock, _0 = window.Vue.createElementBlock, v0 = window.Vue.Transition, S0 = window.Vue.normalizeStyle, y0 = window.Vue.createBlock, C0 = { class: "mw-ui-dialog__shell items-stretch" }, b0 = { class: "mw-ui-dialog__body" };
function k0(e, t, n, o, s, a) {
  const i = ta("mw-col"), c = ta("mw-button"), d = ta("mw-row"), g = ta("mw-divider");
  return mu(), y0(v0, {
    name: "mw-ui-animation-fade",
    style: S0(o.cssVars)
  }, {
    default: Hi(() => [
      n.value ? (mu(), _0("div", {
        key: 0,
        ref: "root",
        class: gu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = w0((r) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Oi("div", {
          class: gu(["mw-ui-dialog__overlay", o.overlayClasses]),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close())
        }, null, 2),
        Oi("div", C0, [
          n.header ? ji(e.$slots, "header", { key: 0 }, () => [
            zo(d, { class: "mw-ui-dialog__header" }, {
              default: Hi(() => [
                zo(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                zo(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Hi(() => [
                    zo(c, {
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
            zo(g)
          ]) : pu("", !0),
          Oi("div", b0, [
            ji(e.$slots, "default")
          ]),
          ji(e.$slots, "footer")
        ])
      ], 34)) : pu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const ct = /* @__PURE__ */ J(f0, [["render", k0]]);
const x0 = {
  name: "MwInput",
  components: {
    MwIcon: Pe
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
      const t = de({}, e.$attrs);
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
}, hu = window.Vue.renderSlot, $0 = window.Vue.resolveComponent, na = window.Vue.openBlock, qi = window.Vue.createBlock, fu = window.Vue.createCommentVNode, V0 = window.Vue.resolveDynamicComponent, E0 = window.Vue.toDisplayString, L0 = window.Vue.mergeProps, A0 = window.Vue.withModifiers, D0 = window.Vue.createElementVNode, T0 = window.Vue.normalizeClass, B0 = window.Vue.createElementBlock, P0 = { class: "mw-ui-input__content" };
function F0(e, t, n, o, s, a) {
  const i = $0("mw-icon");
  return na(), B0("div", {
    class: T0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    D0("div", P0, [
      hu(e.$slots, "icon", {}, () => [
        n.icon ? (na(), qi(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : fu("", !0)
      ]),
      (na(), qi(V0(n.type === "textarea" ? n.type : "input"), L0({
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
      hu(e.$slots, "indicator", {}, () => [
        n.indicator ? (na(), qi(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = A0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : fu("", !0)
      ])
    ])
  ], 2);
}
const Ql = /* @__PURE__ */ J(x0, [["render", F0]]);
const M0 = {
  name: "MwMessage",
  components: { MwCol: b, MwRow: P, MwIcon: Pe, MwButton: Te },
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
      notice: c0,
      warning: ym,
      success: di,
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
}, Gi = window.Vue.renderSlot, oa = window.Vue.resolveComponent, wu = window.Vue.createVNode, _u = window.Vue.withCtx, vu = window.Vue.openBlock, Su = window.Vue.createBlock, yu = window.Vue.createCommentVNode, N0 = window.Vue.normalizeClass;
function U0(e, t, n, o, s, a) {
  const i = oa("mw-icon"), c = oa("mw-col"), d = oa("mw-button"), g = oa("mw-row");
  return e.shown ? (vu(), Su(g, {
    key: 0,
    class: N0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: _u(() => [
      Gi(e.$slots, "icon", {}, () => [
        wu(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      wu(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: _u(() => [
          Gi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Gi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (vu(), Su(d, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : yu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : yu("", !0);
}
const I0 = /* @__PURE__ */ J(M0, [["render", U0]]);
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
const Xe = /* @__PURE__ */ J(R0, [["render", X0]]), it = {
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
  components: { MwUiIcon: Pe },
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
      default: Cm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: it.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: it.gray200
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
}, Cu = window.Vue.normalizeStyle, bu = window.Vue.openBlock, Y0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const J0 = window.Vue.resolveComponent, Z0 = window.Vue.createBlock;
function Q0(e, t, n, o, s, a) {
  const i = J0("mw-ui-icon");
  return n.thumbnail ? (bu(), Y0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Cu(o.style)
  }, null, 4)) : (bu(), Z0(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Cu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const wc = /* @__PURE__ */ J(K0, [["render", Q0]]);
const e1 = {
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
}, t1 = window.Vue.vModelRadio, ui = window.Vue.createElementVNode, n1 = window.Vue.withDirectives, o1 = window.Vue.toDisplayString, s1 = window.Vue.resolveComponent, a1 = window.Vue.normalizeClass, i1 = window.Vue.withCtx, r1 = window.Vue.openBlock, l1 = window.Vue.createBlock, c1 = { class: "mw-ui-radio__controls" }, u1 = ["id", "disabled", "name", "value"], d1 = /* @__PURE__ */ ui("span", { class: "mw-ui-radio__controls__icon" }, null, -1), g1 = ["for", "textContent"];
function p1(e, t, n, o, s, a) {
  const i = s1("mw-row");
  return r1(), l1(i, {
    class: a1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: i1(() => [
      ui("div", c1, [
        n1(ui("input", {
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
      ui("label", {
        for: n.id,
        class: "ps-2",
        textContent: o1(n.label)
      }, null, 8, g1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const ec = /* @__PURE__ */ J(e1, [["render", p1]]), ku = window.Vue.h, m1 = {
  name: "MwRadioGroup",
  components: { MwRadio: ec },
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
      (o) => ku(ec, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), ku("div", { class: "mw-ui-radio-group" }, n);
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
}, xu = window.Vue.normalizeClass, $u = window.Vue.normalizeStyle, f1 = window.Vue.createElementVNode, w1 = window.Vue.openBlock, _1 = window.Vue.createElementBlock, v1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function S1(e, t, n, o, s, a) {
  return w1(), _1("div", {
    class: xu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: $u(a.containerStyles)
  }, [
    f1("div", {
      class: xu(["mw-progress-bar__bar", a.barClass]),
      style: $u(a.barStyles)
    }, null, 6)
  ], 14, v1);
}
const bm = /* @__PURE__ */ J(h1, [["render", S1]]), y1 = (e, t, n, o) => (s) => {
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
) }), b1 = window.Vue.ref, Vu = window.Vue.computed, k1 = (e, t, n, o) => {
  const s = b1(0), a = Vu(
    () => t.value > e.value
  ), i = Vu(
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
const sa = window.Vue.ref, x1 = window.Vue.onMounted, Eu = window.Vue.computed, $1 = window.Vue.nextTick, V1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Te
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
    const t = sa(!0), n = sa(null), o = Eu(
      () => Math.min(e.minHeight, s.value)
    ), s = sa(1), { initiateDrag: a } = C1(
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
    } = k1(o, s, n, t), l = () => g(d.value + 1), u = sa(null), p = Eu(() => ({
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
    return x1(() => C(this, null, function* () {
      var f;
      yield $1(), s.value = n.value.scrollHeight, (f = u.value) == null || f.addEventListener(
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
      mwIconExpand: Zw,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: d,
      scrollToNextStep: l
    };
  }
}, E1 = window.Vue.renderSlot, L1 = window.Vue.normalizeClass, aa = window.Vue.createElementVNode, A1 = window.Vue.resolveComponent, D1 = window.Vue.createVNode, Xi = window.Vue.openBlock, T1 = window.Vue.createBlock, Lu = window.Vue.createCommentVNode, Au = window.Vue.createElementBlock, B1 = window.Vue.normalizeStyle, P1 = { class: "mw-ui-expandable-content__container" }, F1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, M1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function N1(e, t, n, o, s, a) {
  const i = A1("mw-button");
  return Xi(), Au("div", {
    class: "mw-ui-expandable-content",
    style: B1(o.cssVars)
  }, [
    aa("div", P1, [
      aa("div", {
        ref: "contentRef",
        class: L1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        E1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Xi(), Au("div", F1, [
        D1(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Xi(), T1(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Lu("", !0)
      ])) : Lu("", !0)
    ]),
    aa("div", M1, [
      aa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const U1 = /* @__PURE__ */ J(V1, [["render", N1]]);
const ia = window.Vue.computed, I1 = {
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
      default: it.blue600
    },
    inactiveColor: {
      type: String,
      default: it.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = ia(() => e.size / 2 * 0.9), n = ia(() => Math.PI * (t.value * 2)), o = ia(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ia(() => ({
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
}, Du = window.Vue.createElementVNode, Tu = window.Vue.normalizeStyle, R1 = window.Vue.openBlock, z1 = window.Vue.createElementBlock, O1 = ["width", "height", "viewport"], j1 = ["r", "cx", "cy", "stroke-dasharray"], H1 = ["r", "cx", "cy", "stroke-dasharray"];
function q1(e, t, n, o, s, a) {
  return R1(), z1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Tu(o.cssVars)
  }, [
    Du("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, j1),
    Du("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Tu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, H1)
  ], 12, O1);
}
const G1 = /* @__PURE__ */ J(I1, [["render", q1]]), X1 = window.Vue.ref, rn = {
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
  mobile: `only screen and (max-width: ${rn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${rn.tablet}px) and (max-width: ${rn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${rn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${rn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${rn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${rn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${rn["desktop-wide"]}px)`
}, Wi = {
  mobile: () => matchMedia(hn.mobile).matches,
  tablet: () => matchMedia(hn.tablet).matches,
  desktop: () => matchMedia(hn.desktop).matches,
  desktopwide: () => matchMedia(hn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(hn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(hn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(hn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(hn["desktop-and-down"]).matches
}, W1 = (e) => {
  const t = Object.values(rn);
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
      for (let s in Wi)
        Wi.hasOwnProperty(s) && (t.value[s] = Wi[s]());
      t.value.nextBreakpoint = W1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Qe(de({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, Y1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Qe(de({}, e.config.globalProperties.$mwui || {}), {
      colors: it
    }), e.provide("colors", it);
  }
};
class Bo extends Error {
}
const J1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Bo();
}), km = { assertUser: J1 };
const Z1 = window.Vue.resolveDirective, Oo = window.Vue.createElementVNode, Bu = window.Vue.withDirectives, Q1 = window.Vue.toDisplayString, e_ = window.Vue.unref, Pu = window.Vue.withCtx, t_ = window.Vue.openBlock, n_ = window.Vue.createBlock, o_ = window.Vue.createCommentVNode, s_ = { class: "pa-4 sx-login-dialog__header" }, a_ = { class: "sx-login-dialog__body px-6 pb-4" }, i_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, r_ = ["href"], l_ = window.Vue.computed, c_ = window.Vue.ref, u_ = window.Vuex.useStore, d_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = u_(), n = l_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = c_(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = Z1("i18n");
      return n.value ? (t_(), n_(e_(ct), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Pu(() => [
          Oo("div", s_, [
            Bu(Oo("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Pu(() => [
          Bu(Oo("div", a_, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          Oo("div", i_, [
            Oo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, Q1(a.$i18n("cx-sx-login-dialog-button-label")), 9, r_)
          ])
        ]),
        _: 1
      })) : o_("", !0);
    };
  }
}, q = new mw.cx.SiteMapper(), xm = mw.util.getUrl, g_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, un = !mw.config.get("wgMFMode");
class _i {
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
const ra = "original", la = "empty", p_ = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class Y {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      ra,
      la
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
    return ra;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return la;
  }
  static isUserMTProvider(t) {
    return [ra, la].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === la ? "blank" : t === ra ? "source" : t.toLowerCase();
  }
}
class An {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Qe(de({}, a), {
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Y.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [Y.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[Y.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Fu = (e) => {
  var n;
  const t = gi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, gi = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, eo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), $m = (e) => {
  const t = gi(e);
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
}, Vm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Em = (e) => {
  const t = Vm(e);
  return t == null ? void 0 : t.targetExists;
};
class Ki {
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
class qe {
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
    s && Em(s) && (this.blockTemplateAdaptationInfo[t] = Vm(s));
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
    const t = gi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Fu(this.transclusionNode) : null;
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
    return n && Fu(n) || "";
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
    const o = gi(n);
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
      new Ki({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Ki({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Ki({
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
    if (!t || Y.isUserMTProvider(t))
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
], f_ = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = Mu(e, n), a = c = Mu(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(d) {
    return a.indexOf(d) >= 0;
  }), o.length / s.length);
}, Mu = function(e, t) {
  return e ? h_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Lm = 95, w_ = 85, __ = [
  { status: "failure", value: 100 - Lm },
  { status: "warning", value: 100 - w_ },
  { status: "success", value: 100 }
], Am = (e, t, n) => {
  const o = Nu(e).textContent, s = Nu(t).textContent, a = 100 - 100 * f_(s, o, n);
  return Math.ceil(a);
}, v_ = (e) => __.find((t) => e <= t.value).status, S_ = (e, t) => Am(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), y_ = () => (100 - Lm) / 100, Nu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Rt = {
  calculateScore: Am,
  getScoreStatus: v_,
  getMTScoreForPageSection: S_,
  getMtModificationThreshold: y_
}, ca = "__LEAD_SECTION__";
class tc {
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
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Y.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [Y.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return ca;
  }
  static isSectionLead(t) {
    return !t || t === ca;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[Y.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[Y.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof qe ? n.transclusionNode.outerHTML : n instanceof An ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof qe ? t.blockTemplateSelected = !1 : t instanceof An && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof qe ? n.blockTemplateSelected = !0 : n instanceof An && (n.selected = !0);
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
    if (o instanceof qe)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof An)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof qe ? n.blockTemplateProposedTranslations[t] || "" : n instanceof An ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof qe ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof An && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Rt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? ca : this.originalTitle;
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
    return this.isLeadSection ? ca : this.title;
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
class _c extends _i {
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
    return tc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? tc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Vt = "previous-edits", zt = "popular", We = "topic", fe = "collections", $t = "automatic", rt = "seed", Uu = window.Vue.ref, C_ = mw.loader.require("ext.cx.articletopics"), ua = {
  type: $t,
  id: Vt
}, Dm = () => {
  const e = Uu(
    C_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = Uu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const i = s == null ? void 0 : s.toLowerCase(), c = a == null ? void 0 : a.toLowerCase();
    return i === We ? e.value.some((d) => d === a) ? { type: i, id: c } : (t.value = !0, ua) : i === fe || i === rt ? { type: i, id: a } : c === Vt ? {
      type: $t,
      id: Vt
    } : c === zt ? {
      type: $t,
      id: zt
    } : c === fe ? {
      type: $t,
      id: fe
    } : ua;
  }, isDefaultFilter: ({ type: s, id: a }) => s === ua.type && a === ua.id };
}, b_ = window.Vue.inject, k_ = window.Vue.reactive;
var x_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Tm = { exports: {} };
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
          const f = u[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === l)
              return f.slice(f.indexOf("=") + 1);
            u[h] = void 0;
          }
        }
        u = u.filter((h) => !!h);
        let m = this.getPluralForm(l, this.locale);
        return m = Math.min(m, u.length - 1), u[m];
      }
      getPluralForm(l, u) {
        const p = new Intl.PluralRules(u), m = p.resolvedOptions().pluralCategories, h = p.select(l);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
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
            if (m = l.slice(1).map((f) => this.emit(f, u)), h = l[0].toLowerCase(), typeof this[h] != "function")
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
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
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
            let f = 0;
            function _(E) {
              return () => {
                for (let U = 0; U < E.length; U++) {
                  const Fe = E[U]();
                  if (Fe !== null)
                    return Fe;
                }
                return null;
              };
            }
            function w(E) {
              const U = f, Fe = [];
              for (let Ht = 0; Ht < E.length; Ht++) {
                const qt = E[Ht]();
                if (qt === null)
                  return f = U, null;
                Fe.push(qt);
              }
              return Fe;
            }
            function y(E, U) {
              return () => {
                const Fe = f, Ht = [];
                let qt = U();
                for (; qt !== null; )
                  Ht.push(qt), qt = U();
                return Ht.length < E ? (f = Fe, null) : Ht;
              };
            }
            function S(E) {
              const U = E.length;
              return () => {
                let Fe = null;
                return m.slice(f, f + U) === E && (Fe = E, f += U), Fe;
              };
            }
            function V(E) {
              return () => {
                const U = m.slice(f).match(E);
                return U === null ? null : (f += U[0].length, U[0]);
              };
            }
            const k = V(/^\s+/), D = S("|"), x = S(":"), F = S("\\"), N = V(/^./), M = S("$"), X = V(/^\d+/), W = S('"'), re = S("'"), O = V(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Z = V(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Ve = _([te, V(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function te() {
              const E = w([F, N]);
              return E === null ? null : E[1];
            }
            const mn = _([te, Z]), Et = _([te, O]);
            function ut() {
              const E = w([M, X]);
              return E === null ? null : ["REPLACE", parseInt(E[1], 10) - 1];
            }
            const Q = (jt = V(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Ie = function(E) {
              return E.toString();
            }, () => {
              const E = jt();
              return E === null ? null : Ie(E);
            });
            var jt, Ie;
            function we() {
              const E = w([D, y(0, Js)]);
              if (E === null)
                return null;
              const U = E[1];
              return U.length > 1 ? ["CONCAT"].concat(U) : U[0];
            }
            function Ee() {
              const E = w([Q, x, ut]);
              return E === null ? null : [E[0], E[2]];
            }
            function v() {
              const E = w([Q, x, Js]);
              return E === null ? null : [E[0], E[2]];
            }
            function L() {
              const E = w([Q, x]);
              return E === null ? null : [E[0], ""];
            }
            const A = _([function() {
              const E = w([_([Ee, v, L]), y(0, we)]);
              return E === null ? null : E[0].concat(E[1]);
            }, function() {
              const E = w([Q, y(0, we)]);
              return E === null ? null : [E[0]].concat(E[1]);
            }]), T = S("{{"), H = S("}}"), le = S("[["), z = S("]]"), R = S("["), ee = S("]");
            function dt() {
              const E = w([T, A, H]);
              return E === null ? null : E[1];
            }
            const xe = _([function() {
              const E = w([y(1, Js), D, y(1, Ys)]);
              return E === null ? null : [["CONCAT"].concat(E[0]), ["CONCAT"].concat(E[2])];
            }, function() {
              const E = w([y(1, Js)]);
              return E === null ? null : [["CONCAT"].concat(E[0])];
            }]);
            function Yc() {
              let E = null;
              const U = w([le, xe, z]);
              if (U !== null) {
                const Fe = U[1];
                E = ["WIKILINK"].concat(Fe);
              }
              return E;
            }
            function Jc() {
              let E = null;
              const U = w([R, y(1, Sf), k, y(1, Ys), ee]);
              return U !== null && (E = ["EXTLINK", U[1].length === 1 ? U[1][0] : ["CONCAT"].concat(U[1]), ["CONCAT"].concat(U[3])]), E;
            }
            const Ai = V(/^[A-Za-z]+/);
            function ff() {
              const E = V(/^[^"]*/), U = w([W, E, W]);
              return U === null ? null : U[1];
            }
            function wf() {
              const E = V(/^[^']*/), U = w([re, E, re]);
              return U === null ? null : U[1];
            }
            function _f() {
              const E = V(/^\s*=\s*/), U = w([k, Ai, E, _([ff, wf])]);
              return U === null ? null : [U[1], U[3]];
            }
            function vf() {
              const E = y(0, _f)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], E);
            }
            const Sf = _([dt, ut, Yc, Jc, function() {
              const E = y(1, Ve)();
              return E === null ? null : E.join("");
            }]), Ys = _([dt, ut, Yc, Jc, function() {
              let E = null;
              const U = f, Fe = S("<"), Ht = V(/^\/?/), qt = V(/^\s*>/), Di = w([Fe, Ai, vf, Ht, qt]);
              if (Di === null)
                return null;
              const Qc = f, eu = Di[1], Ti = y(0, Ys)(), yf = f, tu = w([S("</"), Ai, qt]);
              if (tu === null)
                return ["CONCAT", m.slice(U, Qc)].concat(Ti);
              const Cf = f, bf = tu[1], nu = Di[2];
              if (function(Fn, Zs, Bi, Pi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Fn = Fn.toLowerCase()) !== (Zs = Zs.toLowerCase()) || Pi.allowedHtmlElements.indexOf(Fn) === -1)
                  return !1;
                const kf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Qs = 0, xf = Bi.length; Qs < xf; Qs += 2) {
                  const Fi = Bi[Qs];
                  if (Pi.allowedHtmlCommonAttributes.indexOf(Fi) === -1 && (Pi.allowedHtmlAttributesByElement[Fn] || []).indexOf(Fi) === -1 || Fi === "style" && Bi[Qs + 1].search(kf) !== -1)
                    return !1;
                }
                return !0;
              }(eu, bf, nu.slice(1)))
                E = ["HTMLELEMENT", eu, nu].concat(Ti);
              else {
                const Fn = (Zs) => Zs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                E = ["CONCAT", Fn(m.slice(U, Qc))].concat(Ti, Fn(m.slice(yf, Cf)));
              }
              return E;
            }, function() {
              const E = y(1, Et)();
              return E === null ? null : E.join("");
            }]), Js = _([dt, ut, function() {
              const E = y(1, mn)();
              return E === null ? null : E.join("");
            }]), Zc = function() {
              const E = y(0, Ys)();
              return E === null ? null : ["CONCAT"].concat(E);
            }();
            if (Zc === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return Zc;
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
            const f = m.slice(0, h).join("-"), _ = this.messageStore.getMessage(r, f);
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
})(Tm);
var $_ = Tm.exports;
const Iu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Bm = Symbol("banana-context");
function pe() {
  const e = b_(Bm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function V_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = k_(new $_(e.locale, e));
  return {
    install: (n) => {
      n.provide(Bm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Iu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Iu(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const dn = window.Vue.ref, E_ = window.Vue.computed, vi = dn(null), Si = dn(null), yi = dn(null), Rs = dn(null), vc = dn(null), Ci = dn(null), Pm = dn(null), Fm = dn(null), Sc = dn(null), { validateFilters: L_, filtersValidatorError: A_ } = Dm(), Mm = {
  from: vi,
  to: Si,
  section: Rs,
  draft: vc,
  page: yi,
  revision: Ci,
  "active-list": Sc
}, D_ = E_(() => ({
  type: Pm.value,
  id: Fm.value
})), Nm = (e, t) => {
  Pm.value = e, Fm.value = t, pi("filter-type", e), t && pi("filter-id", t);
}, T_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof _c && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Mm[o].value = s;
  }
  t.delete("title"), zs(Object.fromEntries(t));
}, yc = (e, t) => {
  Mm[e].value = t, pi(e, t);
}, B_ = (e) => {
  yc("section", e);
}, P_ = (e) => {
  yc("page", e);
}, F_ = (e) => {
  yc("active-list", e);
}, zs = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    xm(`Special:ContentTranslation${t}`, e)
  );
}, M_ = () => {
  const e = pe(), t = new URLSearchParams(location.search);
  yi.value = t.get("page"), vi.value = t.get("from"), Si.value = t.get("to"), Rs.value = t.get("section"), Ci.value = t.get("revision"), Sc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = L_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Nm(n.type, n.id), A_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, N_ = () => {
  const e = new URLSearchParams(location.search);
  Rs.value = null, e.delete("section"), e.delete("title"), zs(Object.fromEntries(e));
}, pi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), zs(Object.fromEntries(n));
}, U_ = (e) => new URLSearchParams(location.search).get(e), I_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), vi.value = e, Si.value = t, n.delete("title"), zs(Object.fromEntries(n));
}, R_ = () => {
  const e = new URLSearchParams(location.search);
  yi.value = null, Rs.value = null, vc.value = null, Ci.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), zs(Object.fromEntries(e));
}, B = () => ({
  setLanguageURLParams: I_,
  setSectionURLParam: B_,
  setTranslationURLParams: T_,
  initializeURLState: M_,
  clearTranslationURLParameters: R_,
  clearSectionURLParameter: N_,
  setUrlParam: pi,
  getUrlParam: U_,
  pageURLParameter: yi,
  sourceLanguageURLParameter: vi,
  targetLanguageURLParameter: Si,
  sectionURLParameter: Rs,
  draftURLParameter: vc,
  revisionURLParameter: Ci,
  setPageURLParam: P_,
  currentSuggestionFilters: D_,
  setFilterURLParams: Nm,
  activeDashboardTabParameter: Sc,
  setActiveDashboardTabParameter: F_
}), Ru = window.Vue.computed, z_ = window.Vuex.useStore;
function Po() {
  const e = z_(), t = Ru(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Ru(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const O_ = {
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
}, j_ = {
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
}, H_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], q_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, G_ = {
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
}, X_ = {
  languages: O_,
  scriptgroups: j_,
  rtlscripts: H_,
  regiongroups: q_,
  territories: G_
};
var Be = X_;
function Os(e) {
  return !!Be.languages[e];
}
function Pn(e) {
  return Os(e) && Be.languages[e].length === 1 ? Be.languages[e][0] : !1;
}
function W_() {
  return Be.languages;
}
function js(e) {
  var t = Pn(e);
  return t ? js(t) : Os(e) ? Be.languages[e][0] : "Zyyy";
}
function Cc(e) {
  var t = Pn(e);
  return t ? Cc(t) : Os(e) && Be.languages[e][1] || "UNKNOWN";
}
function Ps(e) {
  var t = Pn(e);
  return t ? Ps(t) : Os(e) && Be.languages[e][2] || e;
}
function K_() {
  var e, t = {};
  for (e in Be.languages)
    Pn(e) || (t[e] = Ps(e));
  return t;
}
function Um(e) {
  var t, n, o = [];
  for (t in Be.languages)
    if (!Pn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === js(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Y_(e) {
  return Um([e]);
}
function Im(e) {
  var t;
  for (t in Be.scriptgroups)
    if (Be.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function bc(e) {
  return Im(js(e));
}
function Rm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Pn(n) || n, a = bc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function zm(e) {
  var t, n, o, s = {};
  for (t in Be.languages)
    if (!Pn(t)) {
      for (n = 0; n < e.length; n++)
        if (Cc(t).includes(e[n])) {
          o = bc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function J_(e) {
  return zm([e]);
}
function Z_(e) {
  var t, n, o, s = [];
  for (t = Rm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Q_(e, t) {
  var n = Ps(e) || e, o = Ps(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Om(e) {
  return Be.rtlscripts.includes(js(e));
}
function ev(e) {
  return Om(e) ? "rtl" : "ltr";
}
function tv(e) {
  return Be.territories[e] || [];
}
function nv(e, t) {
  t.target ? Be.languages[e] = [t.target] : Be.languages[e] = [t.script, t.regions, t.autonym];
}
var I = {
  addLanguage: nv,
  getAutonym: Ps,
  getAutonyms: K_,
  getDir: ev,
  getGroupOfScript: Im,
  getLanguages: W_,
  getLanguagesByScriptGroup: Rm,
  getLanguagesByScriptGroupInRegion: J_,
  getLanguagesByScriptGroupInRegions: zm,
  getLanguagesInScript: Y_,
  getLanguagesInScripts: Um,
  getLanguagesInTerritory: tv,
  getRegions: Cc,
  getScript: js,
  getScriptGroupOfLanguage: bc,
  isKnown: Os,
  isRedirect: Pn,
  isRtl: Om,
  sortByScriptGroup: Z_,
  sortByAutonym: Q_
};
const no = window.Vue.computed;
function ue(e) {
  const t = no(() => e.state.application.sourceLanguage), n = no(() => e.state.application.targetLanguage), o = no(
    () => e.state.application.currentMTProvider
  ), s = no(
    () => I.getAutonym(t.value)
  ), a = no(
    () => I.getAutonym(n.value)
  ), i = no(() => e.state.application.previousRoute);
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
    pageprops: d,
    pageviews: g,
    thumbnail: r = null,
    title: l,
    revisions: u,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = c, this.title = l, this.pageId = i, this.description = t, this.image = s, this.imageName = a, this.pageprops = d, this.pageviews = g, this.thumbnail = r, this.langLinksCount = n, this.articleSize = (f = u == null ? void 0 : u[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = d == null ? void 0 : d.wikibase_item, this.content = m, this.sections = h;
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
class ov {
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
function sv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const av = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), sv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, iv = (e, t) => {
  let n, o;
  return t ? (n = av(e), o = n.$element.find(
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
}, rv = (e, t) => {
  const n = Array.from(
    iv(e, t)
  );
  return lv(n).map(
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
        (l) => new qe({
          sentences: cv(l),
          node: l
        })
      ), r = !c;
      return new tc({ id: d, title: c, subSections: g, isLeadSection: r });
    }
  );
}, lv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, cv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new An({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), jm = {
  convertSegmentedContentToPageSections: rv
}, kc = 120, uv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: kc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, l) => Qe(de({}, r), { [l.to]: l.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, l) => Qe(de({}, r), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((r) => {
      const l = g[r.title] || c[r.title] || null;
      return new Fo(Qe(de({}, r), { _alias: l }));
    });
  });
}, dv = (e, t) => {
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
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return c ? Object.freeze(new ov(c, i)) : null;
  });
}, gv = (e, t, n) => {
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
}, pv = (e, t, n, o = null) => Hm(
  e,
  t,
  n,
  o
).then(
  (s) => new Fo({
    sections: jm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Hm = (e, t, n, o = null) => {
  const s = q.getWikiDomainCode(e), a = q.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, c += "/$revision");
  const d = q.getCXServerUrl(
    c,
    i
  );
  return fetch(d).then((g) => g.json()).then((g) => g.segmentedContent);
}, mv = (e) => C(void 0, null, function* () {
  const t = g_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: kc,
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
  return yield q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Fo(s))).catch((o) => []);
}), hv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: kc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return q.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new Fo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, to = {
  fetchPages: uv,
  fetchLanguageTitles: dv,
  fetchPageContent: pv,
  fetchSegmentedContent: Hm,
  fetchNearbyPages: mv,
  searchPagesByTitlePrefix: hv,
  fetchLanguageLinksForLanguage: gv
}, fv = window.Vuex.useStore, Hs = () => {
  const e = fv();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const i = n.slice(a, a + o), c = to.fetchPages(t, i).then(
        (d) => d.forEach(
          (g) => e.commit("mediawiki/addPage", g)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, wv = window.Vuex.useStore, xc = () => {
  const e = wv(), {
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
class Mo {
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
class Tn {
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
const qm = [
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
], _v = [
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
], vv = [
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
], Sv = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], yv = [
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
], Cv = {
  en: qm,
  es: _v,
  bn: vv,
  fr: Sv,
  de: yv
};
class Eo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class $c {
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
class Gm extends Mo {
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
    }), this.collection = new $c(d);
  }
}
class Xm extends Tn {
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
    }), this.collection = new $c(l);
  }
}
const bv = qm, gn = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function kv() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield gn({ urlPostfix: t, urlParams: e })) || []).map((o) => new $c(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function xv(e, t, n, o = 24) {
  return C(this, null, function* () {
    return ((yield gn({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (i) => new Mo({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
const $v = (e, t) => C(void 0, null, function* () {
  return ((yield gn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new Mo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), Vv = (e, t) => C(void 0, null, function* () {
  const s = (yield gn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new Tn({
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
}), Ev = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield gn({ urlParams: o })) || []).map(
    (a) => new Gm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), Lv = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield gn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (i) => new Xm({
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
function Av(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Tn(a) : null;
  });
}
function Dv(e, t, n) {
  return C(this, null, function* () {
    const a = (yield gn({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (i) => new Tn({
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
function Tv(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield gn({ urlParams: s })) || []).map(
      (i) => new Mo({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
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
    }, i = (yield gn({ urlPostfix: "/sections", urlParams: s })) || [];
    return i && i.map(
      (c) => new Tn({
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
function Pv(e) {
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
    }, n = q.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function Fv(e, t) {
  return C(this, null, function* () {
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
function Mv(e, t) {
  return C(this, null, function* () {
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
function Nv(e) {
  const t = bv.map((o) => encodeURIComponent(o)).join("|"), n = q.getCXServerUrl(
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
const Uv = (e, t, n) => {
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
}, Iv = (e) => {
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
}, Rv = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((c) => new Eo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ie = {
  fetchFavorites: Rv,
  fetchPageSuggestions: xv,
  fetchSectionSuggestion: Av,
  fetchSectionSuggestions: Dv,
  fetchSuggestionSeeds: Fv,
  fetchAppendixTargetSectionTitles: Nv,
  fetchSuggestionSourceSections: Mv,
  markFavorite: Uv,
  unmarkFavorite: Iv,
  fetchUserEdits: Pv,
  fetchMostPopularPageSuggestions: $v,
  fetchMostPopularSectionSuggestions: Vv,
  fetchPageSuggestionsByTopics: Tv,
  fetchSectionSuggestionsByTopics: Bv,
  fetchPageCollections: kv,
  fetchPageSuggestionsByCollections: Ev,
  fetchSectionSuggestionsByCollections: Lv
}, zv = window.Vuex.useStore, qs = () => {
  const e = zv(), { sourceLanguage: t, targetLanguage: n } = ue(e), o = (c) => {
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
class Ov {
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
const jv = window.Vuex.useStore, Hv = window.Vue.computed, bi = window.Vue.ref, qv = bi([]), Gv = bi([]);
let Yi = !1, Ji = !1, zu = !1, Wm = bi([]);
const da = bi([]), Xv = (e, t) => {
  Wm.value.push({
    sourceLanguage: e,
    targetLanguage: t
  });
};
let jo = null;
const ga = {
  page: qv,
  section: Gv
}, Vc = () => {
  const e = jv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = Hv(
    () => Wm.value.some(
      (l) => l.sourceLanguage === t.value && l.targetLanguage === n.value
    )
  ), s = () => C(void 0, null, function* () {
    Ji || (da.value = yield ie.fetchUserEdits(t.value).then((l) => (Ji = !0, l)));
  }), a = () => C(void 0, null, function* () {
    let l = e.getters["translator/getTranslationsByStatus"]("published");
    if (l = l.filter(
      (u) => u.sourceLanguage === t.value
    ), l.length && !Yi)
      return Yi = !0, l.map(
        (u) => u.sourceTitle
      );
    if (Yi = !0, !Ji && (yield s(), da.value.length > 0))
      return da.value;
    if (!zu) {
      const u = yield ie.fetchUserEdits(t.value).then((p) => (zu = !0, p));
      if (u.length)
        return to.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          u
        );
    }
    return null;
  }), i = (l) => {
    let u = ga[l].value.find(
      (p) => p.matchesLanguagePair(t.value, n.value)
    );
    return u || (u = new Ov({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ga[l].value.push(u)), u;
  }, c = () => C(void 0, null, function* () {
    const l = yield ie.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const u in ga) {
      const p = i(u);
      p.seeds = [...p.seeds, ...l || []];
    }
  }), d = () => C(void 0, null, function* () {
    let l = !1, u = [];
    do {
      u = yield a(), u || (l = !0);
      for (const p in ga) {
        const m = i(p);
        m.seeds = [
          ...m.seeds,
          ...u || []
        ];
      }
    } while (!l && !(u != null && u.length));
  }), g = () => jo || (jo = d(), jo.finally(() => {
    jo = null;
  }));
  return {
    getSuggestionSeed: (l) => C(void 0, null, function* () {
      let u = i(l);
      u.seeds.length || (yield g());
      let p = u.shiftSeeds();
      return !p && !o.value && (yield c(), p = u.shiftSeeds(), Xv(
        t.value,
        n.value
      )), p;
    }),
    defaultSeedsFetched: o,
    fetchPreviousEditsInSource: s,
    previousEditsInSource: da
  };
}, Wv = 5;
function Lo(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < Wv);
  });
}
const Kv = window.Vuex.useStore, Yv = () => {
  const e = Kv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = Vc(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = qs(), c = {
    id: Vt,
    type: $t
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const l = [];
      return yield Lo(() => C(void 0, null, function* () {
        const u = yield o("page");
        if (!u)
          return !0;
        let p = yield ie.fetchPageSuggestions(
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
      return yield Lo(() => C(void 0, null, function* () {
        const u = yield o("section");
        if (!u)
          return !0;
        const p = yield ie.fetchSectionSuggestions(
          t.value,
          n.value,
          u
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
        (u) => u.suggestionProvider = c
      ), l;
    })
  };
}, Jv = window.Vuex.useStore, Zv = () => {
  const e = Jv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: zt,
    type: $t
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = qs();
  return { fetchSectionSuggestionsPopular: (g) => C(void 0, null, function* () {
    const r = [];
    return yield Lo(() => C(void 0, null, function* () {
      const l = yield ie.fetchMostPopularSectionSuggestions(
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
    return yield Lo(() => C(void 0, null, function* () {
      let l = yield ie.fetchMostPopularPageSuggestions(
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
}, Km = window.Vue.ref, Zi = Km([]), Ou = Km(!1), Ec = () => ({ pageCollections: Zi, fetchPageCollections: () => C(void 0, null, function* () {
  try {
    Zi.value = yield ie.fetchPageCollections(), Zi.value.sort((t, n) => t.name.localeCompare(n.name)), Ou.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Ou });
class nc {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const pa = window.Vue.computed, ju = mw.loader.require("ext.cx.articletopics"), Qv = (e) => new nc({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: We
  }))
}), Lc = () => {
  const e = pe(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), o = {
    id: Vt,
    type: $t,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: zt,
    type: $t,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: fe,
    type: $t,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: i, pageCollectionsFetched: c } = Ec(), d = pa(() => {
    const w = new nc({
      id: $t,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return i.value.length && w.filters.push(a), w;
  }), g = (w) => ({
    id: w.name,
    label: w.name,
    type: fe
  }), r = pa(
    () => new nc({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: i.value.map(
        (w) => g(w)
      )
    })
  ), l = pa(() => {
    const w = [
      d.value,
      ...ju.map(Qv)
    ];
    return i.value.length && w.splice(1, 0, r.value), w;
  }), u = pa(
    () => [t.value.type, t.value.id].includes(
      fe
    ) && !c.value
  ), p = () => {
    if (u.value)
      return [];
    const w = h();
    return w.type === We || w.type === rt || w.type === fe || w.id === fe ? [w, o] : [o, s];
  }, m = (w) => {
    n(w.type, w.id);
  }, h = () => t.value.type === rt ? {
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
      const S = ju.flatMap((V) => V.topics).find((V) => V.topicId === w);
      return S ? S.articletopics : [];
    },
    waitingForPageCollectionsFetch: u,
    findSelectedFilter: h
  };
}, eS = window.Vuex.useStore, tS = () => {
  const e = eS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = qs(), { getArticleTopics: c } = Lc();
  return {
    fetchPageSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const l = o.value.id, u = {
        id: l,
        type: We
      }, p = c(l);
      let m = yield ie.fetchPageSuggestionsByTopics(
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
        type: We
      }, p = c(l), m = [];
      return yield Lo(() => C(void 0, null, function* () {
        const h = yield ie.fetchSectionSuggestionsByTopics(
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
        (h) => h.suggestionProvider = u
      ), m;
    })
  };
}, nS = window.Vuex.useStore, oS = window.Vue.computed, sS = () => {
  const e = nS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = oS(() => {
    var r;
    return ((r = o.value) == null ? void 0 : r.type) !== fe ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: i,
    sectionSuggestionExists: c
  } = qs();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const r = [], l = yield ie.fetchSectionSuggestionsByCollections(
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
      let l = yield ie.fetchPageSuggestionsByCollections(
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
}, aS = window.Vuex.useStore, iS = () => {
  const e = aS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = qs();
  return {
    fetchPageSuggestionsBySeed: (g) => C(void 0, null, function* () {
      const r = o.value.id;
      let l = yield ie.fetchPageSuggestions(
        t.value,
        n.value,
        r
      );
      return l = l.filter(
        (u) => a(u)
      ), l = l.slice(0, g), l.forEach(
        (u) => u.suggestionProvider = {
          id: r,
          type: rt
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (g) => C(void 0, null, function* () {
      const r = [], l = o.value.id;
      return yield Lo(() => C(void 0, null, function* () {
        const u = yield ie.fetchSectionSuggestions(
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
          type: rt
        }
      ), r;
    })
  };
}, Ac = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Yv(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Zv(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = tS(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: d
  } = sS(), { fetchPageSuggestionsBySeed: g, fetchSectionSuggestionsBySeed: r } = iS(), l = {
    [Vt]: t,
    [zt]: o,
    [fe]: c,
    [We]: a,
    [rt]: g
  }, u = {
    [Vt]: n,
    [zt]: s,
    [fe]: d,
    [We]: i,
    [rt]: r
  }, p = (f) => f.type === $t ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => u[p(e.value)]
  };
}, rS = window.Vuex.useStore, Dc = () => {
  const e = rS(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = xc(), { sourceLanguageURLParameter: o } = B(), s = Hs(), a = () => {
    const u = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - u.length % p;
  }, i = () => {
    const u = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - u.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: d
  } = Ac(), g = (u) => {
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
}, lS = window.Vuex.useStore, Ym = () => {
  const e = lS();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ie.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, cS = window.Vuex.useStore, Tc = () => {
  const e = cS(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Dc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = xc(), { targetLanguageURLParameter: a } = B(), i = Ym();
  return () => C(void 0, null, function* () {
    const c = s(0), d = o(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, r = c.length === g, l = d.length === g;
    r && l || (yield i(a.value), t(), n());
  });
}, uS = window.Vuex.useStore, Jm = () => {
  const e = uS(), t = Hs();
  return (n, o, s) => C(void 0, null, function* () {
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
          const i = e.getters["mediawiki/getPage"](
            n,
            s
          );
          return new Mo({
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
}, Hu = window.Vue.computed, dS = window.Vuex.useStore, pn = () => {
  const e = dS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = Hu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Hu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, d) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(d)
  };
}, ki = window.Vuex.useStore, Gs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = q.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = de({ sx: !0 }, s), o && (s.section = o), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: gS } = B(), Xs = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), gS(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Zm = () => {
  const e = ki(), t = Tc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = ue(e);
    n === o && (n = a.value, o = s.value), Gs(
      n,
      o,
      null,
      null
    ) || (Xs(e, n, o), t());
  };
}, pS = () => {
  const e = ki(), t = Tc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      Gs(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (Xs(e, o, s), t());
    }
  );
}, mS = () => {
  const e = ki();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Gs(
      n,
      o,
      s,
      null
    ) || Xs(e, n, o);
  };
}, hS = () => {
  const e = ki(), t = Jm(), { currentLanguageTitleGroup: n, targetPageExists: o } = pn(), s = Hs();
  return (a, i) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d,
      setPageURLParam: g,
      clearSectionURLParameter: r
    } = B();
    a === i && (a = d.value, i = c.value);
    const l = n.value.getTitleForLanguage(a);
    Gs(
      a,
      i,
      l,
      null
    ) || (Xs(e, a, i), g(l), o.value ? (r(), yield t(
      c.value,
      d.value,
      l
    )) : yield s(c.value, [l]));
  });
}, fS = window.Vuex.useStore, wS = window.Vue.ref, qu = wS(!1), Qm = () => {
  const e = fS(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Po(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a,
    sectionURLParameter: i
  } = B(), c = () => {
    var _;
    const g = q.getCurrentWikiLanguageCode(), r = (w) => !t.value || Array.isArray(t.value) && t.value.includes(w), l = (w) => n.value.includes(w), u = {
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
      (w) => r(w) && l(w)
    );
    return { sourceLanguage: m.find(
      (w) => l(w) && w !== h
    ), targetLanguage: h };
  };
  return { initializeApplicationLanguages: () => C(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: g, targetLanguage: r } = c(
      t.value,
      n.value
    );
    Gs(
      g,
      r,
      a.value,
      i.value
    ) || Xs(e, g, r), qu.value = !0;
  }), applicationLanguagesInitialized: qu };
};
const _S = window.Vue.resolveDynamicComponent, Gu = window.Vue.openBlock, Xu = window.Vue.createBlock, vS = window.Vue.Transition, Ho = window.Vue.withCtx, qo = window.Vue.createVNode, SS = window.Vue.resolveComponent, Qi = window.Vue.unref, yS = window.Vuex.useStore, Wu = window.Vue.computed, CS = window.Vue.onMounted, bS = window.Vue.inject, kS = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = Qm();
    t(), n();
    const o = bS("breakpoints"), s = Wu(() => o.value.mobile), a = yS(), i = Wu(
      () => a.state.application.autoSavePending
    );
    return CS(() => {
      window.addEventListener("beforeunload", (c) => {
        i.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && km.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((d) => {
          d instanceof Bo && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, d) => {
      const g = SS("router-view");
      return Gu(), Xu(Qi(Aw), { id: "contenttranslation" }, {
        default: Ho(() => [
          qo(Qi(P), { class: "cx-container" }, {
            default: Ho(() => [
              qo(Qi(b), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: Ho(() => [
                  qo(g, null, {
                    default: Ho(({ Component: r, route: l }) => [
                      qo(vS, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: Ho(() => [
                          (Gu(), Xu(_S(r)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      qo(d_)
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
}, xS = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, $S = {
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
class eh {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Ao {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new eh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Ku = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Qe(de({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class VS {
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
    const t = Ku((s = this.user) == null ? void 0 : s.content), n = Ku((a = this.mt) == null ? void 0 : a.content);
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
class Bc extends _i {
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
const xi = mw.user.isAnon() ? void 0 : "user", th = (e) => {
  if (e === "assertuserfailed")
    throw new Bo();
};
function nh(e, t = null) {
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
        (d) => new _c(Qe(de({}, d), { status: e }))
      ) : i = a.map(
        (d) => new Bc(Qe(de({}, d), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const d = yield nh(
          e,
          s.continue.offset
        );
        i = i.concat(d);
      }
      return i;
    }));
  });
}
function ES(e) {
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
      (a) => new VS(a)
    );
  });
}
function LS(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Y.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = q.getCXServerUrl(a);
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
const AS = (e, t, n) => {
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
}, DS = ({
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
    assert: xi,
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
          publishFeedbackMessage: new Ao({
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
    th(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new Ao({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, TS = ({
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
    assert: xi,
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
    th(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Ao({ text: h, status: "error" });
  });
}, BS = (e) => {
  const t = {
    assert: xi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, PS = () => {
  const e = {
    assert: xi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Bc(n.cxcheckunreviewed.translation)
  );
}, FS = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, MS = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, NS = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), lt = {
  fetchTranslations: nh,
  fetchTranslationUnits: ES,
  fetchSegmentTranslation: LS,
  parseTemplateWikitext: AS,
  publishTranslation: DS,
  saveTranslation: TS,
  deleteTranslation: FS,
  fetchTranslatorStats: NS,
  deleteCXTranslation: MS,
  splitTranslation: BS,
  checkUnreviewedTranslations: PS
};
function US(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield lt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const IS = {
  fetchTranslatorStats: US
}, RS = {
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
}, zS = {
  namespaced: !0,
  state: xS,
  getters: $S,
  actions: IS,
  mutations: RS
}, OS = {
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
  appendixSectionTitles: Cv
}, jS = {
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
}, HS = {
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
}, qS = {
  namespaced: !0,
  state: OS,
  getters: jS,
  actions: {},
  mutations: HS
}, GS = {
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
}, XS = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== Y.EMPTY_TEXT_PROVIDER_KEY,
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
function WS() {
  return q.getLanguagePairs().then((e) => e.sourceLanguages);
}
function KS(e, t) {
  return C(this, null, function* () {
    const n = q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Y(e, t, o.mt)
      )
    );
  });
}
function YS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function JS(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = q.getWikiDomainCode(e), i = q.getWikiDomainCode(t), c = {
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
const $i = {
  fetchSupportedLanguageCodes: WS,
  fetchSupportedMTProviders: KS,
  fetchCXServerToken: YS,
  addWikibaseLink: JS
};
function ZS(n) {
  return C(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield $i.fetchSupportedLanguageCodes();
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
    const a = yield to.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const ey = {
  fetchNearbyPages: QS,
  fetchSupportedLanguageCodes: ZS
}, ty = {
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
}, ny = {
  namespaced: !0,
  state: GS,
  getters: XS,
  actions: ey,
  mutations: ty
}, oy = {
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
}, sy = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, ay = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = Y.getStorageKey(
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
}, iy = {
  namespaced: !0,
  state: oy,
  getters: sy,
  actions: {},
  mutations: ay
}, ry = window.Vuex.createStore, ly = ry({
  modules: { translator: zS, suggestions: qS, mediawiki: ny, application: iy }
});
function cy() {
  return oh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function oh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const uy = typeof Proxy == "function", dy = "devtools-plugin:setup", gy = "plugin:settings:set";
let oo, oc;
function py() {
  var e;
  return oo !== void 0 || (typeof window != "undefined" && window.performance ? (oo = !0, oc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (oo = !0, oc = global.perf_hooks.performance) : oo = !1), oo;
}
function my() {
  return py() ? oc.now() : Date.now();
}
class hy {
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
        return my();
      }
    }, n && n.on(gy, (i, c) => {
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
function fy(e, t) {
  const n = e, o = oh(), s = cy(), a = uy && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(dy, e, t);
  else {
    const i = a ? new hy(n, s) : null;
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
const sh = window.Vue.getCurrentInstance, Do = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const It = window.Vue.computed, Ds = window.Vue.unref, wy = window.Vue.watchEffect, ah = window.Vue.defineComponent, _y = window.Vue.reactive, ih = window.Vue.h, er = window.Vue.provide, vy = window.Vue.ref, rh = window.Vue.watch, Sy = window.Vue.shallowRef, yy = window.Vue.shallowReactive, Cy = window.Vue.nextTick, cn = typeof window != "undefined";
function by(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const G = Object.assign;
function tr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Ke(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ts = () => {
}, Ke = Array.isArray;
function j(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const ky = /\/$/, xy = (e) => e.replace(ky, "");
function nr(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let d = t.indexOf("?");
  return c < d && c >= 0 && (d = -1), d > -1 && (o = t.slice(0, d), a = t.slice(d + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = Ey(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function $y(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Yu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Ju(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Bn(t.matched[o], n.matched[s]) && lh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Bn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function lh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Vy(e[n], t[n]))
      return !1;
  return !0;
}
function Vy(e, t) {
  return Ke(e) ? Zu(e, t) : Ke(t) ? Zu(t, e) : e === t;
}
function Zu(e, t) {
  return Ke(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Ey(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return j(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Fs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Fs || (Fs = {}));
var Bs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Bs || (Bs = {}));
function Ly(e) {
  if (!e)
    if (cn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), xy(e);
}
const Ay = /^[^#]+#/;
function Dy(e, t) {
  return e.replace(Ay, "#") + t;
}
function Ty(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Vi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function By(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          j(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        j(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && j(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Ty(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Qu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const sc = /* @__PURE__ */ new Map();
function Py(e, t) {
  sc.set(e, t);
}
function Fy(e) {
  const t = sc.get(e);
  return sc.delete(e), t;
}
let My = () => location.protocol + "//" + location.host;
function ch(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, d = s.slice(c);
    return d[0] !== "/" && (d = "/" + d), Yu(d, "");
  }
  return Yu(n, e) + o + s;
}
function Ny(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: u }) => {
    const p = ch(e, location), m = n.value, h = t.value;
    let f = 0;
    if (u) {
      if (n.value = p, t.value = u, i && i === m) {
        i = null;
        return;
      }
      f = h ? u.position - h.position : 0;
    } else
      o(p);
    s.forEach((_) => {
      _(n.value, m, {
        delta: f,
        type: Fs.pop,
        direction: f ? f > 0 ? Bs.forward : Bs.back : Bs.unknown
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
    u.state && u.replaceState(G({}, u.state, { scroll: Vi() }), "");
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
function ed(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Vi() : null
  };
}
function Uy(e) {
  const { history: t, location: n } = window, o = {
    value: ch(e, n)
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
    const l = e.indexOf("#"), u = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + d : My() + e + d;
    try {
      t[r ? "replaceState" : "pushState"](g, "", u), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? j("Error with push/replace State", p) : console.error(p), n[r ? "replace" : "assign"](u);
    }
  }
  function i(d, g) {
    const r = G({}, t.state, ed(
      s.value.back,
      // keep back and forward entries but override current position
      d,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(d, r, !0), o.value = d;
  }
  function c(d, g) {
    const r = G(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: d,
        scroll: Vi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && j(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const l = G({}, ed(o.value, d, null), { position: r.position + 1 }, g);
    a(d, l, !1), o.value = d;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function Iy(e) {
  e = Ly(e);
  const t = Uy(e), n = Ny(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = G({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Dy.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Ry(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && j(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Iy(e);
}
function zy(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function uh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const fn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, ac = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var td;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(td || (td = {}));
const Oy = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Hy(t)}" via a navigation guard.`;
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
function To(e, t) {
  return {}.NODE_ENV !== "production" ? G(new Error(Oy[e](t)), {
    type: e,
    [ac]: !0
  }, t) : G(new Error(), {
    type: e,
    [ac]: !0
  }, t);
}
function Gt(e, t) {
  return e instanceof Error && ac in e && (t == null || !!(e.type & t));
}
const jy = ["params", "query", "hash"];
function Hy(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of jy)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const nd = "[^/]+?", qy = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Gy = /[.+*?^${}()[\]/\\]/g;
function Xy(e, t) {
  const n = G({}, qy, t), o = [];
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
        l || (s += "/"), s += u.value.replace(Gy, "\\$&"), p += 40;
      else if (u.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = u;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || nd;
        if (w !== nd) {
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
          const { value: m, repeatable: h, optional: f } = p, _ = m in g ? g[m] : "";
          if (Ke(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = Ke(_) ? _.join("/") : _;
          if (!w)
            if (f)
              u.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : l = !0);
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
    stringify: d
  };
}
function Wy(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Ky(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Wy(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (od(o))
      return 1;
    if (od(s))
      return -1;
  }
  return s.length - o.length;
}
function od(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Yy = {
  type: 0,
  value: ""
}, Jy = /[a-zA-Z0-9_]/;
function Zy(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Yy]];
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
        d === "(" ? n = 2 : Jy.test(d) ? u() : (l(), n = 0, d !== "*" && d !== "?" && d !== "+" && c--);
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
  const o = Xy(Zy(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && j(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = G(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function eC(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = id({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, l, u) {
    const p = !u, m = tC(r);
    ({}).NODE_ENV !== "production" && aC(m, l), m.aliasOf = u && u.record;
    const h = id(t, r), f = [
      m
    ];
    if ("alias" in r) {
      const y = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const S of y)
        f.push(G({}, m, {
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
    let _, w;
    for (const y of f) {
      const { path: S } = y;
      if (l && S[0] !== "/") {
        const V = l.record.path, k = V[V.length - 1] === "/" ? "" : "/";
        y.path = l.record.path + (S && k + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = Qy(y, l, h), {}.NODE_ENV !== "production" && l && S[0] === "/" && iC(_, l), u ? (u.alias.push(_), {}.NODE_ENV !== "production" && sC(u, _)) : (w = w || _, w !== _ && w.alias.push(_), p && r.name && !ad(_) && i(r.name)), m.children) {
        const V = m.children;
        for (let k = 0; k < V.length; k++)
          a(V[k], _, u && u.children[k]);
      }
      u = u || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && d(_);
    }
    return w ? () => {
      i(w);
    } : Ts;
  }
  function i(r) {
    if (uh(r)) {
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
    for (; l < n.length && Ky(r, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[l].record.path || !dh(r, n[l])); )
      l++;
    n.splice(l, 0, r), r.record.name && !ad(r) && o.set(r.record.name, r);
  }
  function g(r, l) {
    let u, p = {}, m, h;
    if ("name" in r && r.name) {
      if (u = o.get(r.name), !u)
        throw To(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(r.params || {}).filter((y) => !u.keys.find((S) => S.name === y));
        w.length && j(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = u.record.name, p = G(
        // paramsFromLocation is a new object
        sd(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          u.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && sd(r.params, u.keys.map((w) => w.name))
      ), m = u.stringify(p);
    } else if ("path" in r)
      m = r.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && j(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), u = n.find((w) => w.re.test(m)), u && (p = u.parse(m), h = u.record.name);
    else {
      if (u = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !u)
        throw To(1, {
          location: r,
          currentLocation: l
        });
      h = u.record.name, p = G({}, l.params, r.params), m = u.stringify(p);
    }
    const f = [];
    let _ = u;
    for (; _; )
      f.unshift(_.record), _ = _.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: oC(f)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: g, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function sd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function tC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: nC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function nC(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function ad(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function oC(e) {
  return e.reduce((t, n) => G(t, n.meta), {});
}
function id(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function ic(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function sC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(ic.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(ic.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function aC(e, t) {
  t && t.record.name && !e.name && !e.path && j(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function iC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(ic.bind(null, n)))
      return j(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function dh(e, t) {
  return t.children.some((n) => n === e || dh(e, n));
}
const gh = /#/g, rC = /&/g, lC = /\//g, cC = /=/g, uC = /\?/g, ph = /\+/g, dC = /%5B/g, gC = /%5D/g, mh = /%5E/g, pC = /%60/g, hh = /%7B/g, mC = /%7C/g, fh = /%7D/g, hC = /%20/g;
function Pc(e) {
  return encodeURI("" + e).replace(mC, "|").replace(dC, "[").replace(gC, "]");
}
function fC(e) {
  return Pc(e).replace(hh, "{").replace(fh, "}").replace(mh, "^");
}
function rc(e) {
  return Pc(e).replace(ph, "%2B").replace(hC, "+").replace(gh, "%23").replace(rC, "%26").replace(pC, "`").replace(hh, "{").replace(fh, "}").replace(mh, "^");
}
function wC(e) {
  return rc(e).replace(cC, "%3D");
}
function _C(e) {
  return Pc(e).replace(gh, "%23").replace(uC, "%3F");
}
function vC(e) {
  return e == null ? "" : _C(e).replace(lC, "%2F");
}
function Ms(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && j(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function SC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(ph, " "), i = a.indexOf("="), c = Ms(i < 0 ? a : a.slice(0, i)), d = i < 0 ? null : Ms(a.slice(i + 1));
    if (c in t) {
      let g = t[c];
      Ke(g) || (g = t[c] = [g]), g.push(d);
    } else
      t[c] = d;
  }
  return t;
}
function rd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = wC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ke(o) ? o.map((a) => a && rc(a)) : [o && rc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function yC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ke(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const CC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), ld = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ei = Symbol({}.NODE_ENV !== "production" ? "router" : ""), wh = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), lc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Go() {
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
function Dn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const d = (l) => {
      l === !1 ? c(To(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : zy(l) ? c(To(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? bC(d, t, n) : d);
    let r = Promise.resolve(g);
    if (e.length < 3 && (r = r.then(d)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        r = r.then((u) => d._called ? u : (j(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !d._called) {
        j(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((l) => c(l));
  });
}
function bC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && j(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function or(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && j(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let c = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw j(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          j(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const d = c;
          c = () => d;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, j(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (kC(c)) {
          const g = (c.__vccOpts || c)[t];
          g && s.push(Dn(g, n, o, a, i));
        } else {
          let d = c();
          ({}).NODE_ENV !== "production" && !("catch" in d) && (j(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), d = Promise.resolve(d)), s.push(() => d.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = by(g) ? g.default : g;
            a.components[i] = r;
            const u = (r.__vccOpts || r)[t];
            return u && Dn(u, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function kC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function cd(e) {
  const t = Do(Ei), n = Do(wh), o = It(() => t.resolve(Ds(e.to))), s = It(() => {
    const { matched: d } = o.value, { length: g } = d, r = d[g - 1], l = n.matched;
    if (!r || !l.length)
      return -1;
    const u = l.findIndex(Bn.bind(null, r));
    if (u > -1)
      return u;
    const p = ud(d[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      ud(r) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Bn.bind(null, d[g - 2])) : u
    );
  }), a = It(() => s.value > -1 && EC(n.params, o.value.params)), i = It(() => s.value > -1 && s.value === n.matched.length - 1 && lh(n.params, o.value.params));
  function c(d = {}) {
    return VC(d) ? t[Ds(e.replace) ? "replace" : "push"](
      Ds(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ts) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && cn) {
    const d = sh();
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
    href: It(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const xC = /* @__PURE__ */ ah({
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
  useLink: cd,
  setup(e, { slots: t }) {
    const n = _y(cd(e)), { options: o } = Do(Ei), s = It(() => ({
      [dd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [dd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : ih("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), $C = xC;
function VC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function EC(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Ke(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function ud(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const dd = (e, t, n) => e != null ? e : t != null ? t : n, LC = /* @__PURE__ */ ah({
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
    ({}).NODE_ENV !== "production" && DC();
    const o = Do(lc), s = It(() => e.route || o.value), a = Do(ld, 0), i = It(() => {
      let g = Ds(a);
      const { matched: r } = s.value;
      let l;
      for (; (l = r[g]) && !l.components; )
        g++;
      return g;
    }), c = It(() => s.value.matched[i.value]);
    er(ld, It(() => i.value + 1)), er(CC, c), er(lc, s);
    const d = vy();
    return rh(() => [d.value, c.value, e.name], ([g, r, l], [u, p, m]) => {
      r && (r.instances[l] = g, p && p !== r && g && g === u && (r.leaveGuards.size || (r.leaveGuards = p.leaveGuards), r.updateGuards.size || (r.updateGuards = p.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Bn(r, p) || !u) && (r.enterCallbacks[l] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, r = e.name, l = c.value, u = l && l.components[r];
      if (!u)
        return gd(n.default, { Component: u, route: g });
      const p = l.props[r], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, f = ih(u, G({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[r] = null);
        },
        ref: d
      }));
      if ({}.NODE_ENV !== "production" && cn && f.ref) {
        const _ = {
          depth: i.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (Ke(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        gd(n.default, { Component: f, route: g }) || f
      );
    };
  }
});
function gd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const AC = LC;
function DC() {
  const e = sh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    j(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Xo(e, t) {
  const n = G({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => RC(o, ["instances", "children", "aliasOf"]))
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
function ma(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let TC = 0;
function BC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = TC++;
  fy({
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
        value: Xo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const u = l.__vrv_devtools;
        r.tags.push({
          label: (u.name ? `${u.name.toString()}: ` : "") + u.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: _h
        });
      }
      Ke(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((u) => {
        let p = yh, m = "";
        u.isExactActive ? (p = Sh, m = "This is exactly active") : u.isActive && (p = vh, m = "This link is active"), r.tags.push({
          label: u.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), rh(t.currentRoute, () => {
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
        guard: ma("beforeEach"),
        from: Xo(l, "Current Location during this navigation"),
        to: Xo(r, "Target location")
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
        guard: ma("afterEach")
      };
      u ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: u ? u.message : "",
          tooltip: "Navigation Failure",
          value: u
        }
      }, p.status = ma("❌")) : p.status = ma("✅"), p.from = Xo(l, "Current Location during this navigation"), p.to = Xo(r, "Target location"), s.addTimelineEvent({
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
      l.forEach(kh), r.filter && (l = l.filter((u) => (
        // save matches state based on the payload
        cc(u, r.filter.toLowerCase())
      ))), l.forEach((u) => bh(u, t.currentRoute.value)), r.rootNodes = l.map(Ch);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === c && d();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const u = n.getRoutes().find((p) => p.record.__vd_id === r.nodeId);
        u && (r.state = {
          options: FC(u)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function PC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function FC(e) {
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
        display: e.keys.map((o) => `${o.name}${PC(o)}`).join(" "),
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
const _h = 15485081, vh = 2450411, Sh = 8702998, MC = 2282478, yh = 16486972, NC = 6710886;
function Ch(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: MC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: yh
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: _h
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Sh
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: vh
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: NC
  });
  let o = n.__vd_id;
  return o == null && (o = String(UC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Ch)
  };
}
let UC = 0;
const IC = /^\/(.*)\/([a-z]*)$/;
function bh(e, t) {
  const n = t.matched.length && Bn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Bn(o, e.record))), e.children.forEach((o) => bh(o, t));
}
function kh(e) {
  e.__vd_match = !1, e.children.forEach(kh);
}
function cc(e, t) {
  const n = String(e.re).match(IC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => cc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ms(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => cc(i, t));
}
function RC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function zC(e) {
  const t = eC(e.routes, e), n = e.parseQuery || SC, o = e.stringifyQuery || rd, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Go(), i = Go(), c = Go(), d = Sy(fn);
  let g = fn;
  cn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = tr.bind(null, (v) => "" + v), l = tr.bind(null, vC), u = (
    // @ts-expect-error: intentionally avoid the type check
    tr.bind(null, Ms)
  );
  function p(v, L) {
    let A, T;
    return uh(v) ? (A = t.getRecordMatcher(v), T = L) : T = v, t.addRoute(T, A);
  }
  function m(v) {
    const L = t.getRecordMatcher(v);
    L ? t.removeRoute(L) : {}.NODE_ENV !== "production" && j(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, L) {
    if (L = G({}, L || d.value), typeof v == "string") {
      const R = nr(n, v, L.path), ee = t.resolve({ path: R.path }, L), dt = s.createHref(R.fullPath);
      return {}.NODE_ENV !== "production" && (dt.startsWith("//") ? j(`Location "${v}" resolved to "${dt}". A resolved location cannot start with multiple slashes.`) : ee.matched.length || j(`No match found for location with path "${v}"`)), G(R, ee, {
        params: u(ee.params),
        hash: Ms(R.hash),
        redirectedFrom: void 0,
        href: dt
      });
    }
    let A;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && j(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = G({}, v, {
        path: nr(n, v.path, L.path).path
      });
    else {
      const R = G({}, v.params);
      for (const ee in R)
        R[ee] == null && delete R[ee];
      A = G({}, v, {
        params: l(R)
      }), L.params = l(L.params);
    }
    const T = t.resolve(A, L), H = v.hash || "";
    ({}).NODE_ENV !== "production" && H && !H.startsWith("#") && j(`A \`hash\` should always start with the character "#". Replace "${H}" with "#${H}".`), T.params = r(u(T.params));
    const le = $y(o, G({}, v, {
      hash: fC(H),
      path: T.path
    })), z = s.createHref(le);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? j(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : T.matched.length || j(`No match found for location with path "${"path" in v ? v.path : v}"`)), G({
      fullPath: le,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: H,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === rd ? yC(v.query) : v.query || {}
      )
    }, T, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function w(v) {
    return typeof v == "string" ? nr(n, v, d.value.path) : G({}, v);
  }
  function y(v, L) {
    if (g !== v)
      return To(8, {
        from: L,
        to: v
      });
  }
  function S(v) {
    return D(v);
  }
  function V(v) {
    return S(G(w(v), { replace: !0 }));
  }
  function k(v) {
    const L = v.matched[v.matched.length - 1];
    if (L && L.redirect) {
      const { redirect: A } = L;
      let T = typeof A == "function" ? A(v) : A;
      if (typeof T == "string" && (T = T.includes("?") || T.includes("#") ? T = w(T) : (
        // force empty params
        { path: T }
      ), T.params = {}), {}.NODE_ENV !== "production" && !("path" in T) && !("name" in T))
        throw j(`Invalid redirect found:
${JSON.stringify(T, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return G({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in T ? {} : v.params
      }, T);
    }
  }
  function D(v, L) {
    const A = g = _(v), T = d.value, H = v.state, le = v.force, z = v.replace === !0, R = k(A);
    if (R)
      return D(
        G(w(R), {
          state: typeof R == "object" ? G({}, H, R.state) : H,
          force: le,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        L || A
      );
    const ee = A;
    ee.redirectedFrom = L;
    let dt;
    return !le && Ju(o, T, A) && (dt = To(16, { to: ee, from: T }), ut(
      T,
      T,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (dt ? Promise.resolve(dt) : N(ee, T)).catch((xe) => Gt(xe) ? (
      // navigation redirects still mark the router as ready
      Gt(
        xe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? xe : Et(xe)
    ) : (
      // reject any unknown error
      te(xe, ee, T)
    )).then((xe) => {
      if (xe) {
        if (Gt(
          xe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Ju(o, _(xe.to), ee) && // and we have done it a couple of times
          L && // @ts-expect-error: added only in dev
          (L._count = L._count ? (
            // @ts-expect-error
            L._count + 1
          ) : 1) > 30 ? (j(`Detected a possibly infinite redirection in a navigation guard when going from "${T.fullPath}" to "${ee.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : D(
            // keep options
            G({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, w(xe.to), {
              state: typeof xe.to == "object" ? G({}, H, xe.to.state) : H,
              force: le
            }),
            // preserve the original redirectedFrom if any
            L || ee
          );
      } else
        xe = X(ee, T, !0, z, H);
      return M(ee, T, xe), xe;
    });
  }
  function x(v, L) {
    const A = y(v, L);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function F(v) {
    const L = Ie.values().next().value;
    return L && typeof L.runWithContext == "function" ? L.runWithContext(v) : v();
  }
  function N(v, L) {
    let A;
    const [T, H, le] = OC(v, L);
    A = or(T.reverse(), "beforeRouteLeave", v, L);
    for (const R of T)
      R.leaveGuards.forEach((ee) => {
        A.push(Dn(ee, v, L));
      });
    const z = x.bind(null, v, L);
    return A.push(z), Ee(A).then(() => {
      A = [];
      for (const R of a.list())
        A.push(Dn(R, v, L));
      return A.push(z), Ee(A);
    }).then(() => {
      A = or(H, "beforeRouteUpdate", v, L);
      for (const R of H)
        R.updateGuards.forEach((ee) => {
          A.push(Dn(ee, v, L));
        });
      return A.push(z), Ee(A);
    }).then(() => {
      A = [];
      for (const R of le)
        if (R.beforeEnter)
          if (Ke(R.beforeEnter))
            for (const ee of R.beforeEnter)
              A.push(Dn(ee, v, L));
          else
            A.push(Dn(R.beforeEnter, v, L));
      return A.push(z), Ee(A);
    }).then(() => (v.matched.forEach((R) => R.enterCallbacks = {}), A = or(le, "beforeRouteEnter", v, L), A.push(z), Ee(A))).then(() => {
      A = [];
      for (const R of i.list())
        A.push(Dn(R, v, L));
      return A.push(z), Ee(A);
    }).catch((R) => Gt(
      R,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? R : Promise.reject(R));
  }
  function M(v, L, A) {
    c.list().forEach((T) => F(() => T(v, L, A)));
  }
  function X(v, L, A, T, H) {
    const le = y(v, L);
    if (le)
      return le;
    const z = L === fn, R = cn ? history.state : {};
    A && (T || z ? s.replace(v.fullPath, G({
      scroll: z && R && R.scroll
    }, H)) : s.push(v.fullPath, H)), d.value = v, ut(v, L, A, z), Et();
  }
  let W;
  function re() {
    W || (W = s.listen((v, L, A) => {
      if (!we.listening)
        return;
      const T = _(v), H = k(T);
      if (H) {
        D(G(H, { replace: !0 }), T).catch(Ts);
        return;
      }
      g = T;
      const le = d.value;
      cn && Py(Qu(le.fullPath, A.delta), Vi()), N(T, le).catch((z) => Gt(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : Gt(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (D(
        z.to,
        T
        // avoid an uncaught rejection, let push call triggerError
      ).then((R) => {
        Gt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === Fs.pop && s.go(-1, !1);
      }).catch(Ts), Promise.reject()) : (A.delta && s.go(-A.delta, !1), te(z, T, le))).then((z) => {
        z = z || X(
          // after navigation, all matched components are resolved
          T,
          le,
          !1
        ), z && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Gt(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-A.delta, !1) : A.type === Fs.pop && Gt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), M(T, le, z);
      }).catch(Ts);
    }));
  }
  let O = Go(), Z = Go(), Ve;
  function te(v, L, A) {
    Et(v);
    const T = Z.list();
    return T.length ? T.forEach((H) => H(v, L, A)) : ({}.NODE_ENV !== "production" && j("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function mn() {
    return Ve && d.value !== fn ? Promise.resolve() : new Promise((v, L) => {
      O.add([v, L]);
    });
  }
  function Et(v) {
    return Ve || (Ve = !v, re(), O.list().forEach(([L, A]) => v ? A(v) : L()), O.reset()), v;
  }
  function ut(v, L, A, T) {
    const { scrollBehavior: H } = e;
    if (!cn || !H)
      return Promise.resolve();
    const le = !A && Fy(Qu(v.fullPath, 0)) || (T || !A) && history.state && history.state.scroll || null;
    return Cy().then(() => H(v, L, le)).then((z) => z && By(z)).catch((z) => te(z, v, L));
  }
  const Q = (v) => s.go(v);
  let jt;
  const Ie = /* @__PURE__ */ new Set(), we = {
    currentRoute: d,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: S,
    replace: V,
    go: Q,
    back: () => Q(-1),
    forward: () => Q(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: Z.add,
    isReady: mn,
    install(v) {
      const L = this;
      v.component("RouterLink", $C), v.component("RouterView", AC), v.config.globalProperties.$router = L, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ds(d)
      }), cn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !jt && d.value === fn && (jt = !0, S(s.location).catch((H) => {
        ({}).NODE_ENV !== "production" && j("Unexpected error when starting the router:", H);
      }));
      const A = {};
      for (const H in fn)
        Object.defineProperty(A, H, {
          get: () => d.value[H],
          enumerable: !0
        });
      v.provide(Ei, L), v.provide(wh, yy(A)), v.provide(lc, d);
      const T = v.unmount;
      Ie.add(v), v.unmount = function() {
        Ie.delete(v), Ie.size < 1 && (g = fn, W && W(), W = null, d.value = fn, jt = !1, Ve = !1), T();
      }, {}.NODE_ENV !== "production" && cn && BC(v, L, t);
    }
  };
  function Ee(v) {
    return v.reduce((L, A) => L.then(() => F(A)), Promise.resolve());
  }
  return we;
}
function OC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((g) => Bn(g, c)) ? o.push(c) : n.push(c));
    const d = e.matched[i];
    d && (t.matched.find((g) => Bn(g, d)) || s.push(d));
  }
  return [n, o, s];
}
function ke() {
  return Do(Ei);
}
const jC = window.Vue.computed, xh = () => {
  const { activeDashboardTabParameter: e } = B();
  return { desktopDashboardUrl: jC(() => xm("Special:ContentTranslation", {
    "cx-dashboard": "desktop"
  }) + `#${e.value}`) };
}, HC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', qC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', GC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', XC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', WC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', KC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', YC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', JC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', ZC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', QC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', eb = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', tb = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', nb = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', ob = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', sb = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', ab = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', ib = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', rb = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', $h = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', lb = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', cb = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', ub = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', db = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', gb = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', pb = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', mb = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', hb = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', fb = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', wb = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', _b = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', vb = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', Sb = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20H4a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v13a2 2 0 01-2 2m-6.5-3.5.41-1.09L8 15l-1.09-.41-.41-1.09-.41 1.09L5 15l1.09.41zm2.982-.949.952-2.561 2.53-.964-2.53-.964L9.482 8.5l-.952 2.562-2.53.964 2.53.964zM6 10.5l.547-1.453L8 8.5l-1.453-.547L6 6.5l-.547 1.453L4 8.5l1.453.547z"/>', yb = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', Cb = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', uc = HC, Vh = qC, Eh = {
  ltr: GC,
  shouldFlip: !0
}, Lh = {
  ltr: XC,
  shouldFlip: !0
}, Ns = {
  ltr: WC,
  shouldFlip: !0
}, bb = KC, Ah = YC, Dh = JC, Th = ZC, kb = QC, xb = eb, No = tb, Fc = nb, Mc = ob, pd = sb, $b = ab, Vb = {
  ltr: ib,
  shouldFlip: !0
}, Bh = rb, Eb = {
  langCodeMap: {
    ar: $h
  },
  default: lb
}, Lb = {
  langCodeMap: {
    ar: $h
  },
  default: cb
}, Ph = ub, Nc = {
  ltr: db,
  shouldFlip: !0
}, Ab = gb, Ws = {
  ltr: pb,
  shouldFlip: !0
}, Uc = {
  ltr: mb,
  shouldFlip: !0
}, Db = {
  ltr: hb,
  shouldFlip: !0
}, Fh = fb, Tb = wb, Bb = _b, Pb = vb, Mh = {
  ltr: Sb,
  shouldFlip: !0
}, Fb = yb, Nh = Cb;
const sr = window.Vue.unref, Mb = window.Vue.resolveDirective, so = window.Vue.createElementVNode, ha = window.Vue.withDirectives, Nb = window.Vue.withCtx, Ub = window.Vue.openBlock, Ib = window.Vue.createBlock, Rb = { class: "complementary" }, zb = { class: "complementary mt-4" }, Ob = { class: "complementary" }, jb = ["href"], Hb = window.Codex.CdxMessage, qb = "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation", Gb = {
  __name: "CXDashboardBanner",
  setup(e) {
    const { desktopDashboardUrl: t } = xh();
    return (n, o) => {
      const s = Mb("i18n");
      return Ub(), Ib(sr(Hb), {
        icon: sr(Mh),
        class: "cx-dashboard-banner pa-4",
        "allow-user-dismiss": !0
      }, {
        default: Nb(() => [
          ha(so("h5", null, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-title"]
          ]),
          ha(so("p", Rb, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-description"]
          ]),
          so("p", zb, [
            ha(so("a", {
              target: "_blank",
              href: qb
            }, null, 512), [
              [s, void 0, "cx-sx-dashboard-banner-learn-more"]
            ])
          ]),
          so("p", Ob, [
            ha(so("a", { href: sr(t) }, null, 8, jb), [
              [s, void 0, "cx-sx-dashboard-banner-access-previous"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["icon"]);
    };
  }
}, Xb = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
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
const gt = window.Vue.unref, ao = window.Vue.createVNode, Xt = window.Vue.createElementVNode, md = window.Vue.renderSlot, hd = window.Vue.withModifiers, ar = window.Vue.toDisplayString, ir = window.Vue.withCtx, Kb = window.Vue.openBlock, Yb = window.Vue.createElementBlock, Jb = window.Vue.createCommentVNode, Zb = { class: "col shrink pe-4" }, Qb = { class: "col" }, ek = { class: "cx-translation__details column justify-between ma-0" }, tk = { class: "row ma-0" }, nk = { class: "col grow" }, ok = { class: "col shrink ps-2" }, sk = ["dir", "textContent"], ak = ["dir", "textContent"], ik = ["textContent"], rk = window.Vuex.useStore, lk = window.Vue.computed, Uh = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: _i,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = rk(), s = (c, d) => {
      const g = o.getters["mediawiki/getPage"](c, d);
      return g == null ? void 0 : g.thumbnail;
    }, a = pe(), i = lk(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, d = Wb(n.translation.startTimestamp);
      return a.i18n(
        c[d.postfix],
        d.value
      );
    });
    return (c, d) => e.translation ? (Kb(), Yb("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: d[1] || (d[1] = hd((g) => c.$emit("click"), ["stop"]))
    }, [
      Xt("div", Zb, [
        ao(gt(wc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Xt("div", Qb, [
        Xt("div", ek, [
          Xt("div", tk, [
            Xt("div", nk, [
              md(c.$slots, "title")
            ]),
            Xt("div", ok, [
              ao(gt(Pe), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: d[0] || (d[0] = hd((g) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          md(c.$slots, "mid-content"),
          ao(gt(P), { class: "cx-translation__footer ma-0" }, {
            default: ir(() => [
              ao(gt(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: ir(() => [
                  Xt("span", {
                    class: "mw-ui-autonym",
                    dir: gt(I.getDir)(e.translation.sourceLanguage),
                    textContent: ar(gt(I.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, sk),
                  ao(gt(Pe), {
                    icon: gt(n0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Xt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: gt(I.getDir)(e.translation.targetLanguage),
                    textContent: ar(gt(I.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, ak)
                ]),
                _: 1
              }),
              ao(gt(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: ir(() => [
                  Xt("span", {
                    textContent: ar(i.value)
                  }, null, 8, ik)
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
const Wo = window.Vue.unref, fd = window.Vue.toDisplayString, ck = window.Vue.normalizeClass, uk = window.Vue.createElementVNode, rr = window.Vue.openBlock, dk = window.Vue.createElementBlock, wd = window.Vue.createCommentVNode, _d = window.Vue.createVNode, fa = window.Vue.withCtx, vd = window.Vue.createBlock, gk = ["lang", "textContent"], pk = ["lang", "textContent"], mk = window.Vue.computed, hk = window.Vue.inject, fk = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: _c,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = hk("colors").gray200, s = mk(
      () => {
        var d;
        return ((d = t.translation.progress) == null ? void 0 : d.any) * 100 || 0;
      }
    ), a = ke(), { setTranslationURLParams: i } = B(), c = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (d, g) => (rr(), vd(Uh, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Wo(vm),
      onActionIconClicked: g[0] || (g[0] = (r) => d.$emit("delete-translation")),
      onClick: c
    }, {
      title: fa(() => [
        uk("h5", {
          class: ck(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: fd(e.translation.sourceTitle)
        }, null, 10, gk),
        e.translation.isLeadSectionTranslation ? wd("", !0) : (rr(), dk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: fd(e.translation.sourceSectionTitle)
        }, null, 8, pk))
      ]),
      "mid-content": fa(() => [
        e.translation.progress ? (rr(), vd(Wo(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: fa(() => [
            _d(Wo(b), null, {
              default: fa(() => [
                _d(Wo(bm), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Wo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : wd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, wk = window.Vuex.useStore, Ih = [], _k = (e, t, n) => Ih.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), vk = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Ih.push(o);
}, Sk = () => {
  const e = wk();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !_k(t, n, o) && (s = yield ie.fetchSectionSuggestion(
      t,
      o,
      n
    ), vk(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Rh = "cx-translation-session-position-", zh = () => Rh + mw.user.sessionId(), Oh = () => {
  const e = zh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, yk = function() {
  const e = Oh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Rh)).forEach((n) => mw.storage.remove(n));
  const t = zh();
  mw.storage.set(t, e + 1);
};
let dc = null;
function Ck(e) {
  if (dc)
    return Promise.resolve(dc);
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
function bk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function kk(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = Oh(), d = {
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
  ) : g = Ck(i).then((r) => {
    dc = r, mw.eventLog.submit(
      s,
      Object.assign({}, d, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: bk(r)
      })
    );
  }), g.then(() => {
    yk();
  });
}
const Ye = () => (e) => (e.access_method || (e.access_method = un ? "desktop" : "mobile web"), kk(e)), jh = window.Vue.ref, Hh = jh(null), gc = jh(null), xk = (e) => {
  Hh.value = e;
}, $k = (e) => {
  gc.value = e;
}, qh = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = Ye();
  return {
    logDashboardTranslationStartEvent: () => {
      const i = {
        event_type: "dashboard_translation_start",
        event_source: Hh.value,
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
      return gc.value && (i.event_context = gc.value), o.value ? (i.translation_source_section = o.value, i.translation_type = "section") : i.translation_type = "article", s(i);
    },
    setStartTranslationEventSource: xk,
    setStartTranslationEventContext: $k
  };
}, Vk = window.Vuex.useStore, Ks = () => {
  Vk();
  const e = ke(), t = Jm(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = qh();
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
const wa = window.Vue.withModifiers, lr = window.Vue.toDisplayString, cr = window.Vue.createElementVNode, et = window.Vue.unref, _a = window.Vue.openBlock, Sd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const wn = window.Vue.createVNode, Mn = window.Vue.withCtx, yd = window.Vue.createElementBlock, Ek = ["lang", "href", "textContent"], Lk = {
  key: 1,
  class: "flex"
}, Ak = { key: 2 }, Cd = window.Vue.computed, bd = window.Vue.ref, ur = window.Codex.CdxButton, dr = window.Codex.CdxIcon, Dk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Bc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = bd(!0), o = bd(null), s = Cd(() => {
      var h;
      return (h = o.value) == null ? void 0 : h.missingSections;
    }), a = Cd(
      () => s.value && Object.keys(s.value)[0]
    );
    Sk()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((h) => o.value = h).catch((h) => console.log(h)).finally(() => n.value = !1), ke();
    const {
      setTranslationURLParams: c,
      setSectionURLParam: d,
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: r
    } = B(), l = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Ks(), p = mS(), m = (h) => {
      p(t.translation), u(
        t.translation.sourceTitle,
        g.value,
        r.value,
        "continue_published"
      ), h && d(h);
    };
    return (h, f) => (_a(), Sd(Uh, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: l
    }, {
      title: Mn(() => [
        cr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = wa(() => {
          }, ["stop"])),
          textContent: lr(e.translation.sourceTitle)
        }, null, 8, Ek)
      ]),
      "mid-content": Mn(() => [
        wn(et(P), { class: "ma-0" }, {
          default: Mn(() => [
            wn(et(b), null, {
              default: Mn(() => [
                n.value ? (_a(), Sd(et(Xe), { key: 0 })) : s.value ? (_a(), yd("div", Lk, [
                  wn(et(ur), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = wa((_) => m(a.value), ["stop"]))
                  }, {
                    default: Mn(() => [
                      wn(et(dr), {
                        class: "me-1",
                        icon: et(uc)
                      }, null, 8, ["icon"]),
                      cr("span", null, lr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  wn(et(ur), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": h.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = wa((_) => m(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      wn(et(dr), { icon: et(Mc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (_a(), yd("div", Ak, [
                  wn(et(ur), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[3] || (f[3] = wa((_) => m(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      wn(et(dr), {
                        class: "me-1",
                        icon: et(uc)
                      }, null, 8, ["icon"]),
                      cr("span", null, lr(h.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Tk = window.Vuex.useStore, Bk = () => {
  const { commit: e } = Tk(), t = Ye();
  return (n) => C(void 0, null, function* () {
    n.sectionTranslationId ? (yield lt.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    ) : (yield lt.deleteCXTranslation(
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
const Pk = window.Vue.resolveDirective, gr = window.Vue.createElementVNode, Fk = window.Vue.withDirectives, pr = window.Vue.unref, kd = window.Vue.createVNode, xd = window.Vue.withCtx, Mk = window.Vue.openBlock, Nk = window.Vue.createBlock, Uk = { class: "pa-4" }, Ik = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Rk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: _i,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Bk(), i = () => {
      a(n.translation), s();
    };
    return (c, d) => {
      const g = Pk("i18n");
      return Mk(), Nk(pr(ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: xd(() => [
          gr("div", Ik, [
            kd(pr(Te), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            kd(pr(Te), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: i
            }, null, 8, ["label"])
          ])
        ]),
        default: xd(() => [
          gr("div", Uk, [
            Fk(gr("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function zk(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Ok(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function $d(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(I.sortByAutonym) : (yield zk(e, t, n)).sort(I.sortByAutonym);
  });
}
function Ok(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function jk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Hk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const qk = window.Vue.computed;
function Gk(e, t) {
  const n = qk(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = I.getAutonym(t.value[s]);
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
const mr = window.Vue.ref, Vd = window.Vue.watch, Xk = window.Vue.computed;
function Wk(e, t, n) {
  const o = mr(""), s = mr(-1), a = mr(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = Xk(
    () => e.value ? t.value : [...n, ...t.value]
  ), d = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Vd(e, () => {
    s.value = -1;
  }), Vd(s, () => C(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: d, langSelectorContainer: a, selectedLanguage: o };
}
function Ic(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const va = window.Vue.renderSlot, Se = window.Vue.unref, Kk = window.Vue.isRef, Ed = window.Vue.createVNode, Ko = window.Vue.withModifiers, Yo = window.Vue.withKeys, _n = window.Vue.createElementVNode, Yk = window.Vue.resolveDirective, Sa = window.Vue.withDirectives, hr = window.Vue.renderList, fr = window.Vue.Fragment, Wt = window.Vue.openBlock, Kt = window.Vue.createElementBlock, Ld = window.Vue.toDisplayString, ya = window.Vue.normalizeClass, wr = window.Vue.createCommentVNode, Jk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Zk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Qk = { class: "results px-3 pt-4" }, ex = { class: "results-header ps-8 pb-2" }, tx = { class: "results-languages--suggestions pa-0 ma-0" }, nx = ["lang", "dir", "aria-selected", "onClick", "textContent"], ox = { class: "results px-3 pt-4" }, sx = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, ax = ["lang", "dir", "aria-selected", "onClick", "textContent"], ix = ["aria-selected"], rx = { class: "no-results px-3 py-4" }, lx = { class: "ps-8" }, _r = window.Vue.ref, cx = window.Vue.watch, ux = window.Vue.onMounted, Ad = window.Vue.computed, Gh = {
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
      default: jk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = _r(null), a = _r(""), i = _r([]), c = Ad(
      () => Hk(i.value)
    ), d = Ad(() => {
      const y = i.value.length;
      return y < 10 ? "few-results" : y < 30 ? "some-results" : "many-results";
    }), g = (y) => o("select", y), r = () => o("close"), { autocompletion: l, onTabSelect: u } = Gk(
      a,
      i
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: f } = Wk(a, i, n.suggestions), _ = () => {
      if (a.value && n.languages.includes(a.value)) {
        g(a.value);
        return;
      }
      if (f.value) {
        g(f.value);
        return;
      }
      if (i.value.length === 1) {
        g(i.value[0]);
        return;
      }
    };
    return cx(a, Ic(() => C(this, null, function* () {
      i.value = yield $d(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), ux(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), i.value = yield $d(
        n.languages,
        "",
        n.searchAPI
      );
    })), (y, S) => {
      const V = Yk("i18n");
      return Wt(), Kt("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        va(y.$slots, "search", {}, () => [
          _n("div", Jk, [
            Ed(Se(Ql), {
              value: Se(l),
              "onUpdate:value": S[0] || (S[0] = (k) => Kk(l) ? l.value = k : null),
              icon: Se(du),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Ed(Se(Ql), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": S[1] || (S[1] = (k) => a.value = k),
              class: "mw-ui-language-selector__search pa-4",
              icon: Se(du),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Yo(Ko(_, ["prevent"]), ["enter"]),
                Yo(Ko(Se(p), ["stop", "prevent"]), ["down"]),
                Yo(Ko(Se(m), ["stop", "prevent"]), ["up"]),
                Yo(Ko(r, ["prevent"]), ["esc"]),
                Yo(Ko(Se(u), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        _n("section", Zk, [
          e.suggestions.length && !a.value ? va(y.$slots, "suggestions", { key: 0 }, () => [
            _n("section", Qk, [
              Sa(_n("p", ex, null, 512), [
                [V, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              _n("ul", tx, [
                (Wt(!0), Kt(fr, null, hr(e.suggestions, (k) => (Wt(), Kt("li", {
                  key: k,
                  class: ya(["language ma-0", k === Se(f) ? "language--selected" : ""]),
                  lang: k,
                  dir: Se(I.getDir)(k),
                  "aria-selected": k === Se(f) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (D) => g(k),
                  textContent: Ld(Se(I.getAutonym)(k))
                }, null, 10, nx))), 128))
              ])
            ])
          ]) : wr("", !0),
          c.value.length ? va(y.$slots, "search", { key: 1 }, () => [
            _n("section", ox, [
              e.suggestions.length && !a.value ? Sa((Wt(), Kt("p", sx, null, 512)), [
                [V, void 0, "cx-sx-language-selector-all-languages"]
              ]) : wr("", !0),
              (Wt(!0), Kt(fr, null, hr(c.value, (k, D) => (Wt(), Kt("ul", {
                key: D,
                class: ya(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (Wt(!0), Kt(fr, null, hr(k, (x) => (Wt(), Kt("li", {
                  key: x,
                  class: ya(["language ma-0", x === Se(f) ? "language--selected" : ""]),
                  lang: x,
                  dir: Se(I.getDir)(x),
                  role: "option",
                  "aria-selected": x === Se(f) || null,
                  tabindex: "-1",
                  onClick: (F) => g(x),
                  textContent: Ld(Se(I.getAutonym)(x))
                }, null, 10, ax))), 128)),
                e.allOptionEnabled && !a.value ? Sa((Wt(), Kt("li", {
                  key: 0,
                  class: ya(["language ma-0", Se(f) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": Se(f) === "all" || null,
                  tabindex: "-1",
                  onClick: S[2] || (S[2] = (x) => g("all"))
                }, null, 10, ix)), [
                  [V, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : wr("", !0)
              ], 2))), 128))
            ])
          ]) : va(y.$slots, "noresults", { key: 2 }, () => [
            _n("section", rx, [
              Sa(_n("h3", lx, null, 512), [
                [V, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const dx = window.Vue.resolveDirective, Dd = window.Vue.withDirectives, Jo = window.Vue.openBlock, Zo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ye = window.Vue.unref, Td = window.Vue.toDisplayString, pt = window.Vue.createVNode, Bd = window.Vue.withModifiers, Nn = window.Vue.withCtx, gx = window.Vue.normalizeClass, px = {
  key: 0,
  class: "mw-ui-autonym"
}, mx = ["lang", "dir", "textContent"], hx = {
  key: 0,
  class: "mw-ui-autonym"
}, fx = ["lang", "dir", "textContent"], Qo = window.Vue.computed, wx = window.Vue.inject, _x = window.Vue.ref, Pd = window.Codex.CdxButton, vr = window.Codex.CdxIcon, mi = {
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
    const n = e, o = t, s = wx("breakpoints"), a = Qo(() => s.value.mobile), i = _x(null), c = Qo(() => !!i.value), d = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, l = Qo(() => {
      if (!c.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[f];
    }), u = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(_, h);
    }, p = Qo(
      () => n.selectedSourceLanguage === "all"
    ), m = Qo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = dx("i18n");
      return Jo(), Zo("div", {
        class: gx(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        pt(ye(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Nn(() => [
            pt(ye(b), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Nn(() => [
                pt(ye(Pd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Bd(d, ["stop"])
                }, {
                  default: Nn(() => [
                    p.value ? Dd((Jo(), Zo("span", px, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Jo(), Zo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: ye(I.getDir)(e.selectedSourceLanguage),
                      textContent: Td(ye(I.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, mx)),
                    pt(ye(vr), {
                      size: "x-small",
                      icon: ye(pd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            pt(ye(b), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Nn(() => [
                pt(ye(vr), { icon: ye(Eh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            pt(ye(b), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Nn(() => [
                pt(ye(Pd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Bd(g, ["stop"])
                }, {
                  default: Nn(() => [
                    m.value ? Dd((Jo(), Zo("span", hx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Jo(), Zo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: ye(I.getDir)(e.selectedTargetLanguage),
                      textContent: Td(ye(I.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, fx)),
                    pt(ye(vr), {
                      size: "x-small",
                      icon: ye(pd)
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
        pt(ye(ct), {
          value: c.value,
          "onUpdate:value": f[0] || (f[0] = (w) => c.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: r
        }, {
          default: Nn(() => [
            pt(ye(Gh), {
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
const Fd = window.Vue.unref, vx = window.Vue.createVNode, Ca = window.Vue.createElementVNode, Md = window.Vue.toDisplayString, Sx = window.Vue.openBlock, yx = window.Vue.createElementBlock, Cx = { class: "cx-list-empty-placeholder pa-4" }, bx = { class: "cx-list-empty-placeholder__icon-container" }, kx = { class: "cx-list-empty-placeholder__icon" }, xx = ["textContent"], $x = ["textContent"], Vx = window.Codex.CdxIcon, Xh = {
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
    return (t, n) => (Sx(), yx("div", Cx, [
      Ca("div", bx, [
        Ca("div", kx, [
          vx(Fd(Vx), { icon: Fd(Ph) }, null, 8, ["icon"])
        ])
      ]),
      Ca("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Md(e.title)
      }, null, 8, xx),
      Ca("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Md(e.description)
      }, null, 8, $x)
    ]));
  }
}, Ex = window.Vuex.useStore, Lx = window.Vue.ref, ba = Lx({ draft: !1, published: !1 }), Uo = () => {
  const e = Ex(), t = Hs(), n = (s) => C(void 0, null, function* () {
    let a = yield lt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const i = {};
    for (const c of a) {
      const d = c.sourceLanguage;
      i[d] = i[d] || [], i[d].push(c);
    }
    ba.value[s] = !0;
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
          new Fo({ title: l, pagelanguage: r })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(ba.value).filter(
        (i) => !ba.value[i]
      ).map(
        (i) => n(i)
      );
      return Promise.all(a).catch((i) => {
        mw.log.error("[CX] Error while fetching translations", i);
      });
    },
    translationsFetched: ba
  };
};
const Ax = window.Vue.toDisplayString, Sr = window.Vue.normalizeClass, Nd = window.Vue.createElementVNode, Lt = window.Vue.openBlock, io = window.Vue.createBlock, ka = window.Vue.createCommentVNode, Ud = window.Vue.unref, Id = window.Vue.renderList, Rd = window.Vue.Fragment, xa = window.Vue.createElementBlock, Dx = window.Vue.createVNode, zd = window.Vue.withCtx, Tx = ["textContent"], Bx = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Px = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, $a = window.Vue.ref, mt = window.Vue.computed, Fx = window.Vue.inject, Mx = window.Vuex.useStore, Od = {
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
    const t = e, n = $a("all"), o = $a("all"), s = Mx(), { translationsFetched: a } = Uo(), i = mt(
      () => a.value[t.translationStatus]
    ), { enabledTargetLanguages: c } = Po(), d = $a(!1), g = $a(null), r = mt(
      () => t.translationStatus === "draft"
    ), l = mt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), u = mt(
      () => n.value === "all"
    ), p = mt(
      () => o.value === "all"
    ), m = mt(
      () => l.value.filter(
        (k) => (u.value || k.sourceLanguage === n.value) && (p.value || k.targetLanguage === o.value)
      ).sort((k, D) => k.lastUpdatedTimestamp < D.lastUpdatedTimestamp)
    ), h = mt(() => {
      let k = l.value.map(
        (D) => D.targetLanguage
      );
      return c.value && (k = k.filter(
        (D) => c.value.includes(D)
      )), [...new Set(k)];
    }), f = mt(() => {
      const k = l.value.map(
        (D) => D.sourceLanguage
      );
      return [...new Set(k)];
    }), _ = (k) => {
      g.value = k, d.value = !0;
    }, w = mt(() => t.activeStatus === t.translationStatus), y = Fx("breakpoints"), S = mt(() => y.value.mobile), V = mt(
      () => S.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (k, D) => w.value ? (Lt(), io(Ud(Ge), {
      key: 0,
      class: Sr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: zd(() => [
        Nd("div", {
          class: Sr(["cx-translation-list__header", V.value])
        }, [
          Nd("h3", {
            class: Sr(["px-4 mw-ui-card__title mb-0", { "pb-4": S.value }]),
            textContent: Ax(k.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Tx),
          m.value.length ? (Lt(), io(mi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": D[0] || (D[0] = (x) => n.value = x),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": D[1] || (D[1] = (x) => o.value = x),
            "source-languages": f.value,
            "target-languages": h.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ka("", !0)
        ], 2)
      ]),
      default: zd(() => [
        i.value && !m.value.length ? (Lt(), io(Xh, {
          key: 0,
          title: k.$i18n("cx-sx-translation-list-empty-title"),
          description: k.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ka("", !0),
        i.value ? ka("", !0) : (Lt(), io(Ud(Xe), { key: 1 })),
        r.value ? (Lt(), xa("div", Bx, [
          (Lt(!0), xa(Rd, null, Id(m.value, (x) => (Lt(), io(fk, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (F) => _(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Lt(), xa("div", Px, [
          (Lt(!0), xa(Rd, null, Id(m.value, (x) => (Lt(), io(Dk, {
            key: `${e.translationStatus}-${x.key}`,
            translation: x,
            onDeleteTranslation: (F) => _(x)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Dx(Rk, {
          modelValue: d.value,
          "onUpdate:modelValue": D[2] || (D[2] = (x) => d.value = x),
          translation: g.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ka("", !0);
  }
}, Nx = window.Vue.computed, Ux = window.Vuex.useStore, Je = () => {
  const e = Ux(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B();
  return { sectionSuggestion: Nx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Ix = window.Vuex.useStore, Rx = window.Vue.computed, Ot = () => {
  const e = Ix(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: Rx(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (i) => i.status === "draft" && i.sourceTitle === s.value && i.sectionTitleMatches(o.value) && i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ) };
}, jd = window.Vue.computed, zx = window.Vuex.useStore, Ze = () => {
  const e = zx(), { sectionSuggestion: t } = Je(), { currentTranslation: n } = Ot(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = jd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = jd(() => {
    var g, r;
    const d = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      d
    );
  });
  return { currentSourcePage: i, currentTargetPage: c };
}, Ox = window.Vue.ref, jx = window.Vue.watchEffect, Hx = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield ie.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((d) => d.level === "2").reduce((d, g, r, l) => {
    const u = r < l.length - 1 ? l[r + 1].byteoffset : s;
    return d[g.line] = u - g.byteoffset, d;
  }, {});
  return Object.keys(c).filter((d) => a[d]).reduce((d, g) => d + c[g], 0);
}), yr = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, qx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Gx = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Wh = () => {
  const { currentSourcePage: e } = Ze(), { sectionSuggestion: t } = Je(), n = Ox(null);
  return jx(() => {
    if (t.value)
      Hx(
        e.value,
        t.value
      ).then((o) => {
        n.value = Gx(
          yr(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = yr(e.value.articleSize);
      n.value = qx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: yr };
};
const Cr = window.Vue.toDisplayString, br = window.Vue.openBlock, Hd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const pc = window.Vue.createElementVNode, Xx = window.Vue.unref, Wx = window.Vue.withCtx, Kx = window.Vue.createBlock, Yx = {
  key: 0,
  class: "cdx-info-chip__text"
}, Jx = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Zx = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Qx = /* @__PURE__ */ pc("span", null, "/", -1), e2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, t2 = window.Codex.CdxInfoChip, kr = window.Vue.computed, hi = {
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
    const t = e, n = kr(() => t.content.lastIndexOf("/")), o = kr(() => t.content.slice(0, n.value)), s = kr(() => t.content.slice(n.value + 1));
    return (a, i) => (br(), Kx(Xx(t2), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: Wx(() => [
        n.value === -1 ? (br(), Hd("div", Yx, Cr(e.content), 1)) : (br(), Hd("div", Jx, [
          pc("span", Zx, Cr(o.value), 1),
          Qx,
          pc("span", e2, Cr(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ne = window.Vue.unref, ht = window.Vue.createVNode, vn = window.Vue.createElementVNode, Va = window.Vue.toDisplayString, tt = window.Vue.withCtx, n2 = window.Vue.resolveDirective, xr = window.Vue.withDirectives, Un = window.Vue.openBlock, ro = window.Vue.createBlock, lo = window.Vue.createCommentVNode, qd = window.Vue.withModifiers, o2 = window.Vue.createElementBlock, s2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, a2 = { class: "col shrink pe-4" }, i2 = ["lang", "dir", "textContent"], r2 = ["lang", "dir", "textContent"], l2 = ["textContent"], c2 = ["textContent"], $r = window.Codex.CdxIcon, ft = window.Vue.computed, u2 = window.Vue.inject, d2 = window.Vuex.useStore, mc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Mo, Tn, Eo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = d2(), { bytesToMinutes: o } = Wh(), s = ft(() => t.suggestion), a = ft(
      () => s.value.sourceTitle || s.value.title
    ), i = ft(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), c = ft(
      () => {
        var w;
        return (w = s.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), d = ft(() => {
      var w;
      return (w = i.value) == null ? void 0 : w.description;
    }), g = ft(
      () => s.value instanceof Tn
    ), r = ft(
      () => s.value instanceof Eo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: u } = ue(n), p = ft(
      () => r.value ? Ah : Dh
    ), m = u2("colors"), h = ft(
      () => r.value ? m.blue600 : "currentColor"
    ), f = ft(() => {
      var w;
      return o((w = i.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = ft(
      () => s.value instanceof Gm || s.value instanceof Xm
    );
    return (w, y) => {
      const S = n2("i18n");
      return s.value ? (Un(), o2("div", s2, [
        vn("div", a2, [
          ht(ne(wc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        ht(ne(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: tt(() => [
            ht(ne(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: tt(() => [
                ht(ne(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: tt(() => [
                    vn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ne(I.getDir)(s.value.sourceLanguage),
                      textContent: Va(a.value)
                    }, null, 8, i2)
                  ]),
                  _: 1
                }),
                ht(ne(b), { shrink: "" }, {
                  default: tt(() => [
                    vn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ne(I.getDir)(s.value.sourceLanguage),
                      textContent: Va(d.value)
                    }, null, 8, r2)
                  ]),
                  _: 1
                }),
                f.value && !g.value && !_.value ? (Un(), ro(ne(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: tt(() => [
                    xr(vn("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : lo("", !0),
                g.value ? (Un(), ro(ne(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: tt(() => [
                    xr(vn("small", null, null, 512), [
                      [S, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (Un(), ro(ne(b), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: tt(() => [
                    ht(ne(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: tt(() => [
                        ht(ne(b), { grow: "" }, {
                          default: tt(() => [
                            vn("small", {
                              textContent: Va(ne(l))
                            }, null, 8, l2),
                            ht(ne($r), {
                              icon: ne(Eh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            vn("small", {
                              textContent: Va(ne(u))
                            }, null, 8, c2)
                          ]),
                          _: 1
                        }),
                        c.value ? (Un(), ro(ne(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: tt(() => [
                            xr(vn("small", null, null, 512), [
                              [S, [
                                c.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : lo("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : lo("", !0),
                _.value ? (Un(), ro(ne(b), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: tt(() => [
                    ht(hi, {
                      icon: ne(Ns),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : lo("", !0)
              ]),
              _: 1
            }),
            ht(ne(b), { shrink: "" }, {
              default: tt(() => [
                r.value ? lo("", !0) : (Un(), ro(ne($r), {
                  key: 0,
                  icon: ne(No),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = qd((V) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                ht(ne($r), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: y[1] || (y[1] = qd((V) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : lo("", !0);
    };
  }
}, g2 = "suggestion_filter_topic_area", p2 = "suggestion_filter_search_result_seed", m2 = "suggestion_filter_collections", h2 = "suggestion_filter_previous_edits", f2 = "suggestion_filter_popular_articles", Kh = (e) => {
  if (e.type === We)
    return g2;
  if (e.type === rt)
    return p2;
  if (e.id === fe || e.type === fe)
    return m2;
  if (e.id === Vt)
    return h2;
  if (e.id === zt)
    return f2;
}, hc = (e) => {
  if (e.type === We || e.type === fe || e.type === rt)
    return e.id;
  if (e.id === fe)
    return "all-collections";
}, w2 = window.Vue.computed, Gd = window.Vue.ref, Xd = window.Vue.watch, Yh = (e, t) => {
  const o = Gd([]), s = Gd(!1), a = w2(
    () => o.value.slice(0, 4)
  ), i = Ic(() => C(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield to.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), c = () => {
    s.value = !0, o.value = [], i();
  };
  return Xd(t, c), Xd(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, Vr = window.Vue.ref, Wd = window.Vue.watch, _2 = mw.loader.require("ext.cx.articletopics"), v2 = _2.flatMap((e) => e.topics), S2 = () => {
  const e = Vr(""), t = Vr(!1), n = Vr({ topics: [], areas: [] }), o = pe(), { pageCollections: s } = Ec(), { sourceLanguageURLParameter: a } = B(), i = (g) => (g = g.toLowerCase(), v2.filter(
    (r) => r.label.toLowerCase().includes(g)
  )), c = (g) => (g = g.toLowerCase(), s.value.filter(
    (r) => r.name.toLowerCase().includes(g)
  )), { searchResultsSlice: d } = Yh(a, e);
  return Wd(d, () => {
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
  }), Wd(e, () => C(void 0, null, function* () {
    t.value = !0, n.value.areas = [
      ...c(e.value).map((g) => ({
        label: g.name,
        value: g.name,
        description: g.description,
        icon: Ns,
        filterType: fe,
        filterId: g.name
      })),
      ...i(e.value).map((g) => ({
        label: g.label,
        value: g.label,
        description: o.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: Ns,
        filterType: We,
        filterId: g.topicId
      }))
    ], t.value = !1;
  })), { searchInput: e, searchLoading: t, searchResults: n };
};
const oe = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.withCtx, y2 = window.Vue.resolveDirective, At = window.Vue.createElementVNode, es = window.Vue.withDirectives, Kd = window.Vue.toDisplayString, C2 = window.Vue.createTextVNode, b2 = window.Vue.vShow, k2 = window.Vue.isRef, Yd = window.Vue.renderList, Jd = window.Vue.Fragment, Yt = window.Vue.openBlock, Rn = window.Vue.createElementBlock, x2 = window.Vue.normalizeClass, Zd = window.Vue.createBlock, Qd = window.Vue.createCommentVNode, $2 = { class: "sx-suggestions-filters" }, V2 = { class: "mb-0" }, E2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, L2 = { class: "mb-3" }, A2 = { class: "px-4 pb-4 pt-7" }, D2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, T2 = { class: "sx-suggestions-filters__group-label mb-3" }, B2 = { class: "sx-suggestions-filters__group-filters mb-3" }, P2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, F2 = { key: 0 }, M2 = { key: 1 }, Er = window.Vue.ref, eg = window.Vue.computed, N2 = window.Vue.inject, tg = window.Codex.CdxButton, U2 = window.Codex.CdxIcon, I2 = window.Codex.CdxTextInput, ng = window.Codex.CdxMenu, R2 = {
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
      [Vt]: Nh,
      [zt]: Bh,
      [fe]: Ns,
      [We]: null,
      [rt]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: i, findSelectedFilter: c } = Lc(), d = Ye(), g = () => {
      m(), n("update:modelValue", !1);
    }, r = () => {
      d({ event_type: "suggestion_filters_close" }), g();
    }, l = () => {
      p.value && (d({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: hc(
          p.value
        )
      }), i(p.value)), g();
    }, u = Er(!1), p = Er(null), m = () => {
      p.value = null;
    }, h = (N) => {
      const M = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: Kh(N),
        event_context: hc(N)
      };
      d(M), p.value = N, u.value = !0;
    }, f = (N) => p.value ? p.value.id === N.id && p.value.type === N.type : a(N), _ = N2("breakpoints"), w = eg(() => _.value.mobile), { getFilterProvider: y } = Ac(), { searchInput: S, searchResults: V } = S2(), k = eg(
      () => p.value || c()
    ), D = Er(null), x = (N) => {
      h({
        type: rt,
        id: N.label,
        label: N.label
      }), S.value = "";
    }, F = (N) => {
      h({
        type: N.filterType,
        id: N.filterId,
        label: N.label
      }), S.value = "";
    };
    return (N, M) => {
      const X = y2("i18n");
      return Yt(), Zd(oe(ct), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: w.value,
        header: !1
      }, {
        default: In(() => [
          At("section", $2, [
            wt(oe(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: In(() => [
                wt(oe(b), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: In(() => [
                    wt(oe(tg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": N.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: r
                    }, {
                      default: In(() => [
                        wt(oe(U2), { icon: oe(No) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                wt(oe(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: In(() => [
                    es(At("h5", V2, null, 512), [
                      [X, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                wt(oe(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: In(() => [
                    es(wt(oe(tg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: l
                    }, {
                      default: In(() => [
                        C2(Kd(N.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [b2, u.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            At("div", E2, [
              es(At("h5", L2, null, 512), [
                [X, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              At("div", null, [
                wt(hi, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: k.value.label,
                  icon: o[oe(y)(k.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            At("div", A2, [
              wt(oe(I2), {
                modelValue: oe(S),
                "onUpdate:modelValue": M[0] || (M[0] = (W) => k2(S) ? S.value = W : null),
                placeholder: N.$i18n("cx-sx-suggestions-filter-search-input-placeholder"),
                "input-type": "search",
                "start-icon": oe(Bb),
                clearable: !!oe(S)
              }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
            ]),
            oe(S) ? (Yt(), Rn("div", P2, [
              oe(V).topics.length ? (Yt(), Rn("div", F2, [
                es(At("h5", null, null, 512), [
                  [X, void 0, "cx-sx-suggestions-filter-search-results-topics-label"]
                ]),
                wt(oe(ng), {
                  selected: D.value,
                  "onUpdate:selected": M[1] || (M[1] = (W) => D.value = W),
                  expanded: !0,
                  "menu-items": oe(V).topics,
                  "show-thumbnail": "",
                  onMenuItemClick: x
                }, null, 8, ["selected", "menu-items"])
              ])) : Qd("", !0),
              oe(V).areas.length ? (Yt(), Rn("div", M2, [
                es(At("h5", null, null, 512), [
                  [X, void 0, "cx-sx-suggestions-filter-search-results-areas-label"]
                ]),
                wt(oe(ng), {
                  selected: D.value,
                  "onUpdate:selected": M[2] || (M[2] = (W) => D.value = W),
                  expanded: !0,
                  "menu-items": oe(V).areas,
                  onMenuItemClick: F
                }, null, 8, ["selected", "menu-items"])
              ])) : Qd("", !0)
            ])) : (Yt(), Rn("div", D2, [
              (Yt(!0), Rn(Jd, null, Yd(oe(s), (W) => (Yt(), Rn("div", {
                key: W.id,
                class: "sx-suggestions-filters__group"
              }, [
                At("div", T2, Kd(W.label), 1),
                At("div", B2, [
                  (Yt(!0), Rn(Jd, null, Yd(W.filters, (re) => (Yt(), Zd(hi, {
                    key: re.id,
                    class: x2(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                      "sx-suggestions-filters__filter--active": f(re)
                    }]),
                    icon: o[oe(y)(re)],
                    content: re.label,
                    onClick: (O) => h(re)
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
const Lr = window.Vue.unref, Ea = window.Vue.openBlock, og = window.Vue.createBlock;
window.Vue.createCommentVNode;
const z2 = window.Vue.renderList, O2 = window.Vue.Fragment, sg = window.Vue.createElementBlock, j2 = window.Vue.normalizeClass, H2 = window.Vue.createVNode, q2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, ag = window.Vue.ref, G2 = window.Vue.computed, ig = window.Vue.watch, X2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = pe(), n = Ye(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: i
    } = Lc(), c = ag(!1), d = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), c.value = !0;
    }, g = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: Kh(h),
        event_context: hc(h)
      };
      n(f), s(h);
    }, r = {
      [Vt]: Nh,
      [zt]: Bh,
      [fe]: Ns,
      [We]: null
    }, { getFilterProvider: l } = Ac(), u = (h) => ({
      id: h.id,
      type: h.type,
      icon: r[l(h)],
      label: h.label,
      action: g
    }), p = ag(o());
    ig(c, (h) => {
      h || (p.value = o());
    }), ig(i, (h) => {
      h || (p.value = o());
    });
    const m = G2(() => [
      ...p.value.map(u),
      {
        id: "more",
        icon: Mc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: d
      }
    ]);
    return (h, f) => Lr(i) ? (Ea(), og(Lr(Xe), { key: 0 })) : (Ea(), sg("div", q2, [
      (Ea(!0), sg(O2, null, z2(m.value, (_) => (Ea(), og(hi, {
        key: _.label,
        class: j2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": Lr(a)(_) }]),
        icon: _.icon,
        content: _.label,
        onClick: (w) => _.action(_)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      H2(R2, {
        modelValue: c.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => c.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, W2 = window.Vue.computed, K2 = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Po(), n = W2(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, co = window.Vue.computed, rg = window.Vue.ref, Y2 = window.Vue.watch, J2 = window.Vuex.useStore, Z2 = () => {
  const e = J2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = xc(), i = Ye(), c = co(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), d = co(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = rg(0), r = rg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, u = 4, p = co(
    () => a(g.value)
  ), m = co(
    () => s(r.value)
  ), h = () => {
    V(), F(), k(), N();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = Dc(), w = (M) => M.length === l, y = co(
    () => w(m.value)
  ), S = co(
    () => w(p.value)
  ), V = () => {
    const M = (g.value + 1) % u, X = w(
      a(M)
    );
    (!S.value || !X) && f();
  }, k = () => {
    const M = (r.value + 1) % u, X = w(
      s(M)
    );
    (!y.value || !X) && _();
  }, D = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", M), V();
  }, x = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", M), k();
  }, F = () => g.value = (g.value + 1) % u, N = () => r.value = (r.value + 1) % u;
  return Y2(
    o,
    () => {
      r.value = 0, k(), g.value = 0, V();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: x,
    discardSectionSuggestion: D,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: d,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, Q2 = window.Vuex.useStore, Rc = () => {
  const e = Q2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Dc(), o = (g, r, l) => e.state.suggestions.pageSuggestions.find(
    (u) => u.sourceLanguage === g && u.targetLanguage === r && u.sourceTitle === l
  ), s = (g) => C(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: l, targetLanguage: u } = g;
    yield ie.markFavorite(r, l, u);
    const p = new Eo({
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
      ), t()), yield ie.markFavorite(
        g,
        r,
        l
      );
      const m = new Eo({
        title: g,
        sourceLanguage: r,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), ie.unmarkFavorite(g))
  };
}, e8 = "suggestion_no_seed", t8 = "suggestion_recent_edit", n8 = "suggestion_topic_area", o8 = "suggestion_search_result_seed", s8 = "suggestion_featured", a8 = "suggestion_collections", i8 = () => {
  const { currentSuggestionFilters: e } = B(), { defaultSeedsFetched: t } = Vc();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === Vt)
      return t.value ? e8 : t8;
    if (n === We)
      return n8;
    if (n === rt)
      return o8;
    if (o === zt)
      return s8;
    if (o === fe || n === fe)
      return a8;
    throw new Error("Event source cannot be empty");
  };
};
const lg = window.Vue.normalizeClass, r8 = window.Vue.resolveDirective, ts = window.Vue.createElementVNode, La = window.Vue.withDirectives, ce = window.Vue.unref, Re = window.Vue.openBlock, Dt = window.Vue.createBlock, Sn = window.Vue.createCommentVNode, Ar = window.Vue.createVNode, ns = window.Vue.withCtx, cg = window.Vue.renderList, ug = window.Vue.Fragment, Dr = window.Vue.createElementBlock, l8 = window.Vue.toDisplayString, c8 = window.Vue.createTextVNode, u8 = window.Vue.vShow, d8 = { class: "cx-suggestion-list" }, g8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, p8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, m8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Tt = window.Vue.computed, h8 = window.Vue.inject, f8 = window.Vue.ref, w8 = window.Codex.CdxButton, _8 = window.Codex.CdxIcon, v8 = window.Vuex.useStore, S8 = {
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
    } = B(), { supportedLanguageCodes: s, availableTargetLanguages: a } = K2(), i = Zm(), c = (Q) => i(Q, n.value), d = (Q) => i(t.value, Q), g = i8(), r = Ks(), l = (Q) => {
      r(
        Q.sourceTitle,
        Q.sourceLanguage,
        Q.targetLanguage,
        g(),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: _,
      sectionSuggestionsLoading: w,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = Z2(), V = f8(null), k = Ye(), D = () => {
      k({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), V.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: x, markFavoritePageSuggestion: F } = Rc(), N = h8("breakpoints"), M = Tt(() => N.value.mobile), X = Tt(
      () => M.value ? null : "pb-2 flex justify-between items-center"
    ), W = v8(), re = Tt(
      () => W.state.suggestions.isPageSuggestionsFetchPending
    ), O = Tt(
      () => W.state.suggestions.isSectionSuggestionsFetchPending
    ), Z = Tt(
      () => re.value || _.value && !y.value
    ), Ve = Tt(
      () => O.value || w.value && !S.value
    ), te = Tt(
      () => re.value || _.value || u.value.length > 0
    ), mn = Tt(
      () => O.value || w.value || p.value.length > 0
    ), Et = Tt(
      () => !te.value && !mn.value
    ), ut = Tt(
      () => !w.value && !_.value && !re.value && !O.value && !Et.value
    );
    return (Q, jt) => {
      const Ie = r8("i18n");
      return La((Re(), Dr("div", d8, [
        Ar(ce(Ge), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: ns(() => [
            ts("div", {
              class: lg(["cx-suggestion-list__header-card__header px-4", X.value])
            }, [
              La(ts("h3", {
                class: lg(["mw-ui-card__title mb-0", { "py-3": M.value }])
              }, null, 2), [
                [Ie, void 0, "cx-suggestionlist-title"]
              ]),
              M.value ? Sn("", !0) : (Re(), Dt(mi, {
                key: 0,
                "source-languages": ce(s),
                "target-languages": ce(a),
                "selected-source-language": ce(t),
                "selected-target-language": ce(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": d
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Ar(X2)
          ]),
          default: ns(() => [
            M.value ? (Re(), Dt(mi, {
              key: 0,
              "source-languages": ce(s),
              "target-languages": ce(a),
              "selected-source-language": ce(t),
              "selected-target-language": ce(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": d
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Sn("", !0)
          ]),
          _: 1
        }),
        te.value ? (Re(), Dt(ce(Ge), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: V,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: ns(() => [
            La(ts("h5", g8, null, 512), [
              [Ie, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Re(!0), Dr(ug, null, cg(ce(u), (we, Ee) => (Re(), Dt(mc, {
              key: `page-suggestion-${Ee}`,
              suggestion: we,
              onClose: (v) => ce(m)(we),
              onClick: (v) => l(we),
              onBookmark: (v) => ce(F)(we)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Z.value ? (Re(), Dt(ce(Xe), { key: 0 })) : Sn("", !0)
          ]),
          _: 1
        }, 512)) : Sn("", !0),
        mn.value ? (Re(), Dt(ce(Ge), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: ns(() => [
            La(ts("h5", p8, null, 512), [
              [Ie, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Re(!0), Dr(ug, null, cg(ce(p), (we, Ee) => (Re(), Dt(mc, {
              key: `section-suggestion-${Ee}`,
              class: "ma-0",
              suggestion: we,
              onClose: (v) => ce(h)(we),
              onClick: (v) => l(we),
              onBookmark: (v) => ce(x)(we)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Ve.value ? (Re(), Dt(ce(Xe), { key: 0 })) : Sn("", !0)
          ]),
          _: 1
        })) : Sn("", !0),
        Et.value ? (Re(), Dt(Xh, {
          key: 2,
          title: Q.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Q.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : Sn("", !0),
        ts("div", m8, [
          ut.value ? (Re(), Dt(ce(w8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: D
          }, {
            default: ns(() => [
              Ar(ce(_8), {
                class: "me-1",
                icon: ce(Fh)
              }, null, 8, ["icon"]),
              c8(" " + l8(Q.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Sn("", !0)
        ])
      ], 512)), [
        [u8, e.active]
      ]);
    };
  }
}, y8 = window.Vue.resolveDirective, C8 = window.Vue.createElementVNode, b8 = window.Vue.withDirectives, k8 = window.Vue.renderList, x8 = window.Vue.Fragment, Tr = window.Vue.openBlock, $8 = window.Vue.createElementBlock, dg = window.Vue.unref, gg = window.Vue.createBlock, pg = window.Vue.withCtx, V8 = window.Vue.createCommentVNode, E8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, L8 = window.Vue.computed, A8 = window.Vuex.useStore, D8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = A8(), n = L8(() => t.state.suggestions.favorites || []), o = Ks(), s = (i) => o(
      i.title,
      i.sourceLanguage,
      i.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Rc();
    return (i, c) => {
      const d = y8("i18n");
      return n.value.length ? (Tr(), gg(dg(Ge), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: pg(() => [
          b8(C8("h3", E8, null, 512), [
            [d, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: pg(() => [
          (Tr(!0), $8(x8, null, k8(n.value, (g, r) => (Tr(), gg(mc, {
            key: `favorite-${r}`,
            suggestion: g,
            onClick: (l) => s(g),
            onBookmark: (l) => dg(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : V8("", !0);
    };
  }
};
const T8 = window.Vue.resolveDirective, Aa = window.Vue.createElementVNode, B8 = window.Vue.withDirectives, P8 = window.Vue.renderList, F8 = window.Vue.Fragment, Br = window.Vue.openBlock, Pr = window.Vue.createElementBlock, M8 = window.Vue.unref, N8 = window.Vue.createVNode, U8 = window.Vue.toDisplayString, I8 = { class: "cx-help-panel pa-4" }, R8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, z8 = ["href", "target"], O8 = ["textContent"], j8 = window.Vue.computed, H8 = window.Codex.CdxIcon, q8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const { desktopDashboardUrl: t } = xh(), n = pe(), o = j8(() => {
      const s = [
        {
          icon: Lb,
          label: n.i18n("cx-sx-dashboard-help-panel-more-info-label"),
          href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
          target: "_blank"
        },
        {
          icon: Th,
          label: n.i18n("cx-sx-dashboard-help-panel-stats-label"),
          href: mw.util.getUrl("Special:ContentTranslationStats"),
          target: "_blank"
        },
        {
          icon: Vb,
          label: n.i18n("cx-sx-dashboard-help-panel-feedback-label"),
          href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
          target: "_blank"
        }
      ];
      return un && s.push({
        icon: Mh,
        label: n.i18n("cx-sx-dashboard-banner-access-previous"),
        href: t.value,
        target: "_self"
      }), s;
    });
    return (s, a) => {
      const i = T8("i18n");
      return Br(), Pr("div", I8, [
        B8(Aa("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Aa("ul", R8, [
          (Br(!0), Pr(F8, null, P8(o.value, (c, d) => (Br(), Pr("li", {
            key: d,
            class: "mt-4"
          }, [
            Aa("a", {
              href: c.href,
              target: c.target
            }, [
              N8(M8(H8), {
                class: "me-2",
                icon: c.icon
              }, null, 8, ["icon"]),
              Aa("span", {
                textContent: U8(c.label)
              }, null, 8, O8)
            ], 8, z8)
          ]))), 128))
        ])
      ]);
    };
  }
};
const G8 = window.Vue.resolveDirective, uo = window.Vue.createElementVNode, Fr = window.Vue.withDirectives, mg = window.Vue.toDisplayString, Mr = window.Vue.unref, Nr = window.Vue.withCtx, Ur = window.Vue.createVNode, X8 = window.Vue.openBlock, W8 = window.Vue.createElementBlock, K8 = { class: "cx-stats-panel pa-4" }, Y8 = ["textContent"], J8 = { class: "cx-stats-panel__monthly-stats-label" }, Z8 = ["textContent"], Q8 = { class: "cx-stats-panel__total-stats-label" }, e$ = window.Vue.ref, hg = window.Vue.computed, t$ = window.Vue.watch, n$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = hg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.count) || 0;
    }), s = hg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.delta) || 0;
    }), a = e$(null);
    return t$(
      () => t.stats,
      () => {
        const i = t.stats, c = a.value.getContext("2d"), d = Object.keys(t.stats || {}).sort(), g = d.reduce(
          (S, V) => Math.max(S, i[V].delta),
          0
        ), r = d.map((S) => i[S].delta), l = a.value.getBoundingClientRect().width, u = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = u;
        const p = 4, m = 6, h = 50, f = (h - p) / g;
        let _ = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), y = r.slice(
          Math.max(r.length - w, 0)
        );
        y.forEach((S, V) => {
          V === y.length - 1 && (c.fillStyle = "#36c");
          const k = h - S * f;
          c.fillRect(_, k, m, S * f), _ += m + p;
        });
      }
    ), (i, c) => {
      const d = G8("i18n");
      return X8(), W8("div", K8, [
        Fr(uo("h5", null, null, 512), [
          [d, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Ur(Mr(P), null, {
          default: Nr(() => [
            Ur(Mr(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: Nr(() => [
                uo("h3", {
                  textContent: mg(s.value)
                }, null, 8, Y8),
                Fr(uo("h5", J8, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Ur(Mr(b), { class: "cx-stats-panel__total-stats" }, {
              default: Nr(() => [
                uo("h3", {
                  textContent: mg(o.value)
                }, null, 8, Z8),
                Fr(uo("h5", Q8, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        uo("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Jh = () => {
  const e = Ye();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const o$ = window.Vue.renderSlot, s$ = window.Vue.unref, a$ = window.Vue.createVNode, i$ = window.Vue.createElementVNode, r$ = window.Vue.openBlock, l$ = window.Vue.createElementBlock, c$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, u$ = { class: "col-12 ma-0 pa-0" }, d$ = {
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
    const n = t, o = Jh(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, i) => (r$(), l$("footer", c$, [
      i$("div", u$, [
        o$(a.$slots, "default", {}, () => [
          a$(s$(Us), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, g$ = window.Vuex.useStore, p$ = () => {
  const e = g$(), t = Hs();
  return () => C(void 0, null, function* () {
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
        a.map((i) => i.title)
      );
  });
}, m$ = window.Vuex.useStore, Zh = () => {
  const e = m$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: i } = Dm(), { previousRoute: c } = ue(e), d = Ye(), g = () => {
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
}, h$ = window.Vue.watch, f$ = () => {
  const { fetchAllTranslations: e } = Uo(), t = Tc(), n = p$(), { fetchPageCollections: o } = Ec(), { logDashboardOpenEvent: s } = Zh(), { applicationLanguagesInitialized: a } = Qm();
  return () => C(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield e(), h$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, fg = window.Vue.computed, w$ = window.Vue.ref, _$ = window.Vue.watch, v$ = window.Vue.watchEffect, S$ = window.Vuex.useStore, y$ = ["suggestions", "draft", "published"], C$ = () => {
  const e = S$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), { translationsFetched: o } = Uo(), s = w$(null);
  if (y$.includes(t.value))
    s.value = t.value;
  else {
    const a = fg(
      () => o.value.draft
    ), i = fg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", _$(a, (c) => {
      c && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return v$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, b$ = window.Vue.computed, k$ = () => {
  const e = pe();
  return b$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Jw,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: wi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: Yw,
        type: "text"
      }
    }
  ]);
};
const se = window.Vue.unref, Ce = window.Vue.createVNode, x$ = window.Vue.toDisplayString, $$ = window.Vue.createTextVNode, _t = window.Vue.withCtx, Da = window.Vue.openBlock, Ir = window.Vue.createBlock, Rr = window.Vue.createCommentVNode, V$ = window.Vue.vShow, E$ = window.Vue.withDirectives, L$ = window.Vue.isRef, A$ = window.Vue.createElementBlock, wg = window.Vue.computed, D$ = window.Vuex.useStore, T$ = window.Codex.CdxButton, B$ = window.Codex.CdxIcon, P$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = ke(), n = Ye(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    f$()();
    const a = D$();
    a.dispatch("translator/fetchTranslatorStats");
    const i = wg(() => a.state.translator.translatorStats), c = wg(() => a.state.application.bannerDismissed), d = () => {
      a.commit("application/dismissBanner");
    }, g = C$(), r = k$(), l = Jh(), u = (p) => {
      l(p), g.value = p;
    };
    return (p, m) => (Da(), A$("div", null, [
      Ce(se(P), { class: "ma-0 pb-4" }, {
        default: _t(() => [
          Ce(se(T$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: _t(() => [
              Ce(se(B$), {
                class: "me-1",
                icon: se(uc)
              }, null, 8, ["icon"]),
              $$(" " + x$(p.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      se(un) && !c.value ? (Da(), Ir(se(P), {
        key: 0,
        class: "ma-0",
        align: "start"
      }, {
        default: _t(() => [
          Ce(se(b), { class: "col-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2" }, {
            default: _t(() => [
              Ce(Gb, {
                class: "mb-4",
                onUserDismissed: m[0] || (m[0] = (h) => d())
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : Rr("", !0),
      Ce(se(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: _t(() => [
          p.$mwui.breakpoint.tabletAndUp ? (Da(), Ir(se(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _t(() => [
              Ce(se(Us), {
                id: "dashboard-list-selector--desktop",
                items: se(r),
                active: se(g),
                onSelect: u
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Rr("", !0),
          Ce(se(b), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _t(() => [
              E$(Ce(D8, null, null, 512), [
                [V$, se(g) === "suggestions"]
              ]),
              Ce(S8, {
                active: se(g) === "suggestions"
              }, null, 8, ["active"]),
              Ce(Od, {
                "translation-status": "draft",
                "active-status": se(g)
              }, null, 8, ["active-status"]),
              Ce(Od, {
                "translation-status": "published",
                "active-status": se(g)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ce(se(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: _t(() => [
              Ce(se(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: _t(() => [
                  Ce(se(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: _t(() => [
                      Ce(n$, { stats: i.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ce(se(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: _t(() => [
                      Ce(q8)
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
      p.$mwui.breakpoint.mobile ? (Da(), Ir(d$, {
        key: 1,
        active: se(g),
        "onUpdate:active": m[1] || (m[1] = (h) => L$(g) ? g.value = h : null),
        items: se(r)
      }, null, 8, ["active", "items"])) : Rr("", !0)
    ]));
  }
}, F$ = {
  name: "DashboardView",
  components: { CxDashboard: P$ }
}, M$ = window.Vue.resolveComponent, N$ = window.Vue.createVNode, U$ = window.Vue.openBlock, I$ = window.Vue.createElementBlock, R$ = { class: "cx-translation-dashboard" };
function z$(e, t, n, o, s, a) {
  const i = M$("cx-dashboard");
  return U$(), I$("main", R$, [
    N$(i, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const _g = /* @__PURE__ */ J(F$, [["render", z$]]), go = window.Vue.computed, O$ = () => {
  const { sectionSuggestion: e } = Je(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Ot(), o = go(
    () => {
      var u, p, m;
      return (m = (p = (u = e.value) == null ? void 0 : u.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = go(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.missingSectionsCount;
    }
  ), a = go(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: c } = pn(), d = go(() => i ? q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), g = (u) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : u ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", r = go(() => {
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
  }), l = go(
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
function j$(e) {
  return e.$el = $(e), e;
}
function H$(e, t, n, o) {
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
function q$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function G$(e, t) {
  return C(this, null, function* () {
    yield zc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = j$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const X$ = window.Vue.computed, W$ = window.Vue.onMounted, K$ = window.Vue.ref;
function Y$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const J$ = {
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
    const n = K$(null);
    let o = null;
    const s = X$(() => o.getHtml()), a = () => {
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
    return W$(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = Y$;
      const r = yield G$(d, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = H$(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = q$, o.focus();
    })), { sxeditor: n };
  }
}, fc = window.Vue.createElementVNode, Z$ = window.Vue.openBlock, Q$ = window.Vue.createElementBlock, e4 = ["lang", "dir"], t4 = /* @__PURE__ */ fc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ fc("div", { class: "toolbar" })
], -1), n4 = ["lang", "dir"];
function o4(e, t, n, o, s, a) {
  return Z$(), Q$("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    t4,
    fc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, n4)
  ], 8, e4);
}
const s4 = /* @__PURE__ */ J(J$, [["render", o4]]);
function zc() {
  return mw.loader.using("mw.cx3.ve");
}
const a4 = window.Vuex.useStore, Qh = () => {
  const e = a4();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield zc(), new Promise((s) => {
      setTimeout(() => {
        const a = jm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, i4 = window.Vuex.useStore, Oc = () => {
  const e = i4();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield to.fetchPageContent(
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
}, r4 = window.Vuex.useStore, Li = () => {
  const e = r4(), { currentSourcePage: t } = Ze(), n = Qh(), o = Oc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c
  } = B(), d = (l, u) => C(void 0, null, function* () {
    l() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      i.value,
      c.value
    ), un || (yield n(
      a.value,
      c.value
    )), e.commit("application/decreaseTranslationDataLoadingCounter")), u();
  });
  return {
    selectPageSectionByIndex: (l) => {
      const u = () => {
        var m;
        return (m = t.value.sections) == null ? void 0 : m[l];
      };
      return d(u, () => {
        const m = u();
        l === 0 ? m.originalTitle = t.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (l) => d(() => t.value.getSectionByTitle(l), () => {
      s(l);
    })
  };
}, l4 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s && Em(s) ? lt.parseTemplateWikitext(
    $m(s),
    n,
    t
  ) : Promise.resolve(null);
}, ef = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s ? lt.parseTemplateWikitext(
    $m(s),
    n,
    t
  ) : Promise.resolve(null);
}, c4 = (e, t, n, o) => C(void 0, null, function* () {
  var c, d, g;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((d = t.mt) == null ? void 0 : d.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, i = yield ef(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), u4 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, d4 = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return c4(e, t, n, o);
  u4(e, t);
}), g4 = (e, t, n, o) => {
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
        const g = d4(
          c,
          d,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, p4 = { restoreCorporaDraft: g4 }, jc = () => (e, t, n, o = {}) => {
  q.setCXToken(e, t, n), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, os = window.Vue.computed, m4 = window.Vuex.useStore, K = () => {
  const e = m4(), { currentSourcePage: t, currentTargetPage: n } = Ze(), { currentMTProvider: o } = ue(e), { sectionURLParameter: s } = B(), a = os(() => {
    var r, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = os(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), c = os(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), d = os(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = os(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: d,
    targetPageTitleForPublishing: g
  };
}, h4 = window.Vuex.useStore, Hc = () => {
  const e = Ye(), t = h4(), n = ke(), { currentSourcePage: o } = Ze(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = pS(), c = Qh(), d = jc(), g = Oc(), { sourceSection: r } = K();
  return (l) => C(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: u,
      targetLanguage: p,
      sourceTitle: m,
      targetTitle: h,
      pageRevision: f,
      isLeadSectionTranslation: _
    } = l;
    if (un) {
      const S = {};
      _ || (S.sourcesection = l.sourceSectionTitle), d(
        s.value,
        a.value,
        m,
        S
      );
      return;
    }
    q.unsetCXToken(
      u,
      p,
      m
    );
    const { setTranslationURLParams: w } = B();
    w(l), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== u || a.value !== p) && i(l), e({
      event_type: "dashboard_translation_continue",
      translation_id: l.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: m,
      translation_source_section: l.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: h,
      translation_target_section: l.targetSectionTitle,
      translation_type: _ ? "article" : "section"
    }), yield g(
      s.value,
      a.value,
      m,
      f
    ), yield c(s.value, m), l.restored || (yield lt.fetchTranslationUnits(l.translationId).then(
      (S) => p4.restoreCorporaDraft(
        o.value,
        h,
        a,
        S
      )
    ).then(() => l.restored = !0));
    let y;
    _ ? (r.value.originalTitle = m, y = h) : y = l.targetSectionTitle, r.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, f4 = () => new URLSearchParams(location.search).get("force-quick-tutorial"), w4 = window.Vuex.useStore, qc = () => {
  const { logDashboardTranslationStartEvent: e } = qh(), t = jc(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s,
    sectionURLParameter: a
  } = B(), i = w4(), c = ke(), { selectPageSectionByIndex: d } = Li();
  return () => {
    e(), un ? t(
      n.value,
      o.value,
      s.value,
      a.value ? { sourcesection: a.value } : {}
    ) : (a.value || d(0), f4() || !i.getters["translator/userHasSectionTranslations"] ? c.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : c.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  };
}, _4 = window.Vue.ref, v4 = () => {
  const e = ke(), t = qc(), { sectionURLParameter: n } = B(), { targetPageExists: o } = pn(), { selectPageSectionByTitle: s } = Li(), a = () => C(void 0, null, function* () {
    yield s(n.value), e.push({ name: "sx-content-comparator", query: { force: !0 } });
  }), i = Hc(), c = _4(!1), { currentTranslation: d } = Ot();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !un ? c.value = !0 : i(d.value) : n.value ? a() : o.value ? e.push({ name: "sx-section-selector" }) : t();
    },
    translationConfirmationDialogOn: c
  };
};
const S4 = window.Vue.resolveDirective, vg = window.Vue.createElementVNode, Sg = window.Vue.withDirectives, y4 = window.Vue.unref, C4 = window.Vue.withCtx, b4 = window.Vue.openBlock, k4 = window.Vue.createBlock, x4 = {
  href: "",
  target: "_blank"
}, $4 = window.Codex.CdxDialog, V4 = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = pe(), i = {
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
      const l = S4("i18n");
      return b4(), k4(y4($4), {
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
        default: C4(() => [
          Sg(vg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Sg(vg("a", x4, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const me = window.Vue.unref, E4 = window.Vue.resolveDirective, ss = window.Vue.createElementVNode, yg = window.Vue.withDirectives, as = window.Vue.toDisplayString, is = window.Vue.openBlock, zr = window.Vue.createElementBlock, Or = window.Vue.createCommentVNode, nt = window.Vue.createVNode, vt = window.Vue.withCtx, jr = window.Vue.createTextVNode, L4 = window.Vue.withModifiers, Cg = window.Vue.createBlock, A4 = window.Vue.Fragment, D4 = { class: "sx-translation-confirmer-body pb-4" }, T4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, B4 = ["textContent"], P4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, F4 = ["href"], M4 = ["textContent"], Ta = window.Vue.computed, N4 = window.Vue.inject, bg = window.Vue.ref, U4 = window.Vue.watchEffect, I4 = window.Vuex.useStore, Hr = window.Codex.CdxButton, R4 = window.Codex.CdxIcon, z4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = ke(), o = I4();
    N4("colors");
    const { sectionSuggestion: s } = Je(), { targetLanguageAutonym: a } = ue(o), { sectionURLParameter: i } = B(), c = qc(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: g } = v4(), r = bg(!1), l = bg(null), u = () => C(this, null, function* () {
      let M = !0;
      try {
        M = yield lt.checkUnreviewedTranslations();
      } catch (X) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          X
        );
      }
      M !== !0 && (r.value = !0, l.value = M.targetUrl);
    }), p = () => C(this, null, function* () {
      yield u(), !r.value && c();
    }), m = () => C(this, null, function* () {
      yield u(), !r.value && d();
    }), h = t;
    U4(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: f,
      getActionButtonLabel: _,
      isProgressiveButton: w,
      targetArticlePath: y
    } = O$(), S = pe(), V = Ta(
      () => S.i18n(_(!!i.value))
    ), k = Ta(
      () => S.i18n(...f.value)
    ), D = () => C(this, null, function* () {
      yield u(), !r.value && n.push({ name: "sx-section-selector" });
    }), x = Ta(() => {
      var M, X;
      return i.value && !!((X = (M = s.value) == null ? void 0 : M.sourceSections) != null && X.length);
    }), { targetPageExists: F } = pn(), N = Ta(() => !i.value && F.value && un);
    return (M, X) => {
      const W = E4("i18n");
      return is(), zr(A4, null, [
        ss("section", D4, [
          me(i) ? (is(), zr("section", T4, [
            yg(ss("h6", null, null, 512), [
              [W, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ss("h5", {
              class: "ma-0",
              textContent: as(me(i))
            }, null, 8, B4)
          ])) : me(F) ? (is(), zr("section", P4, [
            nt(me(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: vt(() => [
                yg(nt(me(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [W, [me(a)], "cx-sx-existing-translation-status"]
                ]),
                nt(me(b), { shrink: "" }, {
                  default: vt(() => [
                    ss("a", {
                      href: me(y),
                      target: "_blank"
                    }, [
                      nt(me(R4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: me(Nc)
                      }, null, 8, ["icon"])
                    ], 8, F4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            nt(me(P), { class: "ma-0" }, {
              default: vt(() => [
                nt(me(b), null, {
                  default: vt(() => [
                    ss("span", {
                      textContent: as(k.value)
                    }, null, 8, M4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Or("", !0),
          nt(me(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: vt(() => [
              x.value ? (is(), Cg(me(b), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: vt(() => [
                  nt(me(Hr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: L4(D, ["stop"])
                  }, {
                    default: vt(() => [
                      jr(as(M.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Or("", !0),
              N.value ? (is(), Cg(me(b), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: vt(() => [
                  nt(me(Hr), {
                    size: "large",
                    onClick: p
                  }, {
                    default: vt(() => [
                      jr(as(M.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Or("", !0),
              nt(me(b), { shrink: "" }, {
                default: vt(() => [
                  nt(me(Hr), {
                    weight: "primary",
                    size: "large",
                    action: me(w) ? "progressive" : "default",
                    onClick: m
                  }, {
                    default: vt(() => [
                      jr(as(V.value), 1)
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
        nt(V4, {
          modelValue: r.value,
          "onUpdate:modelValue": X[0] || (X[0] = (re) => r.value = re),
          "target-url": l.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const kg = window.Vue.unref, O4 = window.Vue.openBlock, j4 = window.Vue.createBlock, xg = window.Vue.computed, tf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Po(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = B(), { currentLanguageTitleGroup: a } = pn(), i = xg(
      () => {
        var l;
        return ((l = a.value) == null ? void 0 : l.titles.map((u) => u.lang)) || [];
      }
    ), c = xg(
      () => n.value || t.value
    ), d = hS(), g = (l) => d(l, s.value), r = (l) => d(o.value, l);
    return (l, u) => (O4(), j4(mi, {
      class: "sx-article-language-selector",
      "source-languages": i.value,
      "target-languages": c.value,
      "selected-source-language": kg(o),
      "selected-target-language": kg(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": r
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Le = window.Vue.unref, qr = window.Vue.toDisplayString, Jt = window.Vue.createElementVNode, Bt = window.Vue.createVNode, po = window.Vue.withCtx, H4 = window.Vue.resolveDirective, q4 = window.Vue.withDirectives, G4 = window.Vue.normalizeClass, X4 = window.Vue.openBlock, W4 = window.Vue.createBlock, K4 = ["textContent"], Y4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, J4 = ["textContent"], Z4 = { class: "pe-3" }, Q4 = ["textContent"], eV = window.Codex.CdxButton, rs = window.Codex.CdxIcon, Zt = window.Vue.computed, tV = window.Vuex.useStore, nV = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = tV(), n = pe(), { currentSourcePage: o } = Ze(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = B(), c = Zt(() => t.state.suggestions.favorites || []), d = Zt(
      () => c.value.some(
        (k) => i.value === k.title && s.value === k.sourceLanguage && a.value === k.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: r } = Rc(), { translationSizeMessageArgs: l } = Wh(), u = () => g(
      i.value,
      s.value,
      a.value
    ), p = () => r(
      new Eo({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Zt(
      () => d.value ? Ah : Dh
    ), h = Zt(
      () => d.value ? p : u
    ), f = Zt(
      () => q.getPageUrl(s.value || "", i.value || "")
    ), _ = Zt(() => {
      var k;
      return (k = o.value) == null ? void 0 : k.langLinksCount;
    }), w = (k) => {
      const D = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let x = 0; x < D.length; x++)
        if (k >= D[x].value)
          return (k / D[x].value).toFixed(1).replace(/\.0$/, "") + D[x].suffix;
      return k.toString();
    }, y = Zt(() => {
      var D;
      const k = Object.values(((D = o.value) == null ? void 0 : D.pageviews) || {}).reduce(
        (x, F) => x + F,
        0
      );
      return w(k);
    }), S = Zt(() => l.value ? n.i18n(...l.value) : ""), V = Zt(() => l.value ? l.value[2] < 15 : !1);
    return (k, D) => {
      const x = H4("i18n");
      return X4(), W4(Le(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: po(() => [
          Bt(Le(b), null, {
            default: po(() => [
              Bt(Le(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: po(() => [
                  Bt(Le(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: po(() => [
                      Jt("h5", {
                        class: "ma-0 me-1",
                        textContent: qr(Le(i))
                      }, null, 8, K4),
                      Bt(Le(rs), {
                        size: "x-small",
                        icon: Le(Nc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Bt(Le(b), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: po(() => [
                      Bt(Le(eV), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": k.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: po(() => [
                          Bt(Le(rs), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Jt("div", Y4, [
                Jt("div", null, [
                  Jt("span", null, [
                    Bt(Le(rs), {
                      icon: Le(Ph),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Jt("span", {
                      class: "pe-3",
                      textContent: qr(_.value)
                    }, null, 8, J4)
                  ]),
                  Jt("span", null, [
                    Bt(Le(rs), {
                      icon: Le(Th),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    q4(Jt("span", Z4, null, 512), [
                      [x, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Jt("span", {
                  class: G4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": V.value
                  }])
                }, [
                  Bt(Le(rs), {
                    icon: Le(xb),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Jt("span", {
                    textContent: qr(S.value)
                  }, null, 8, Q4)
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
const oV = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, Ba = window.Vue.withDirectives, sV = window.Vue.toDisplayString, aV = window.Vue.createTextVNode, Gr = window.Vue.unref, Xr = window.Vue.withCtx, Wr = window.Vue.openBlock, Kr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const iV = { class: "pa-4" }, rV = { class: "flex pt-2" }, lV = window.Codex.CdxButton, cV = window.Vue.ref, uV = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Hc(), a = cV(!1), { currentTranslation: i } = Ot(), c = () => C(this, null, function* () {
      a.value = !0;
      let d = !1;
      try {
        d = yield lt.splitTranslation(
          i.value.translationId
        );
      } catch (g) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          g
        );
      }
      a.value = !1, d && (s(i.value), o());
    });
    return (d, g) => {
      const r = oV("i18n");
      return Wr(), Kr(Gr(ct), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Xr(() => [
          zn("div", rV, [
            a.value ? (Wr(), Kr(Gr(Xe), { key: 1 })) : (Wr(), Kr(Gr(lV), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: Xr(() => [
                aV(sV(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Xr(() => [
          zn("div", iV, [
            Ba(zn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ba(zn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            zn("p", null, [
              Ba(zn("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ba(zn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, dV = window.Vuex.useStore;
let Pa = [];
const nf = () => {
  const e = dV();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Pa.includes(o) ? Promise.resolve() : (Pa.push(o), to.fetchLanguageTitles(t, n).then((s) => {
      Pa = Pa.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, gV = window.Vue.ref, mo = gV(null), of = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    mo.value || (yield $i.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, mo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        mo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = mo.value) == null ? void 0 : n.refreshAt) <= t ? (mo.value = null, e()) : (o = mo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const $g = window.Vue.resolveDirective, Fa = window.Vue.createElementVNode, Vg = window.Vue.withDirectives, yn = window.Vue.unref, Ma = window.Vue.withCtx, Qt = window.Vue.createVNode, Yr = window.Vue.openBlock, Eg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const pV = window.Vue.createBlock, mV = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, hV = { class: "mb-0" }, fV = { class: "sx-translation-confirmer__article-image flex justify-center" }, wV = ["src"], _V = { class: "ma-3" }, Lg = window.Vue.computed, vV = window.Vue.inject, SV = window.Vue.onBeforeUnmount, yV = window.Vue.ref, CV = window.Vuex.useStore, bV = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = CV(), { currentSourcePage: n } = Ze(), { previousRoute: o } = ue(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: c,
      clearTranslationURLParameters: d
    } = B(), g = vV("breakpoints"), r = Lg(() => g.value.nextBreakpoint), l = Lg(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(r.value);
      }
    ), { fetchTranslationsByStatus: u } = Uo(), p = nf();
    u("draft"), p(s.value, i.value), zc(), of()(), Ym()(a.value);
    const f = ke(), _ = () => {
      o.value ? f.push({ name: o.value }) : f.push({ name: "dashboard" });
    };
    SV(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && d();
    });
    const w = yV(!1);
    return (y, S) => {
      const V = $g("i18n"), k = $g("i18n-html");
      return Yr(), Eg("section", mV, [
        Qt(yn(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ma(() => [
            Qt(yn(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ma(() => [
                Vg(Fa("h5", hV, null, 512), [
                  [V, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Qt(yn(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ma(() => [
                Qt(yn(Te), {
                  class: "pa-0",
                  type: "icon",
                  icon: yn(Is),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Fa("div", fV, [
          l.value ? (Yr(), Eg("img", {
            key: 0,
            src: l.value
          }, null, 8, wV)) : (Yr(), pV(yn(Pe), {
            key: 1,
            size: "120",
            icon: yn(Cm),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Qt(nV),
        Qt(tf),
        Qt(z4, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (D) => w.value = !0)
        }),
        Qt(yn(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Ma(() => [
            Fa("p", _V, [
              Vg(Fa("small", null, null, 512), [
                [k, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Qt(uV, {
          modelValue: w.value,
          "onUpdate:modelValue": S[1] || (S[1] = (D) => w.value = D)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const kV = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: bV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, xV = window.Vue.resolveComponent, $V = window.Vue.createVNode, VV = window.Vue.normalizeClass, EV = window.Vue.openBlock, LV = window.Vue.createElementBlock;
function AV(e, t, n, o, s, a) {
  const i = xV("sx-translation-confirmer");
  return EV(), LV("main", {
    class: VV(["sx-translation-confirmer-view", a.classes])
  }, [
    $V(i)
  ], 2);
}
const DV = /* @__PURE__ */ J(kV, [["render", AV]]);
const TV = window.Vue.toDisplayString, Ag = window.Vue.unref, BV = window.Vue.createVNode, PV = window.Vue.createTextVNode, FV = window.Vue.createElementVNode, MV = window.Vue.openBlock, NV = window.Vue.createElementBlock, UV = { class: "sx-section-selector-view-article-item ma-0" }, IV = ["href"], RV = window.Codex.CdxIcon, zV = {
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
    return (t, n) => (MV(), NV("li", UV, [
      FV("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        PV(TV(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        BV(Ag(RV), {
          size: "x-small",
          icon: Ag(Nc)
        }, null, 8, ["icon"])
      ], 8, IV)
    ]));
  }
};
const OV = window.Vue.resolveDirective, Na = window.Vue.createElementVNode, Jr = window.Vue.withDirectives, On = window.Vue.unref, jV = window.Vue.toDisplayString, Ua = window.Vue.withCtx, ls = window.Vue.createVNode, HV = window.Vue.openBlock, qV = window.Vue.createElementBlock, GV = { class: "sx-section-selector__header pa-4" }, XV = { class: "sx-section-selector__header-text ma-0" }, WV = ["textContent"], KV = { class: "pt-0 ma-0" }, YV = { class: "ma-0" }, JV = window.Codex.CdxButton, ZV = window.Codex.CdxIcon, QV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Je();
    return (n, o) => {
      const s = OV("i18n");
      return HV(), qV("div", GV, [
        ls(On(P), { class: "ma-0 pb-3" }, {
          default: Ua(() => [
            ls(On(b), null, {
              default: Ua(() => {
                var a;
                return [
                  Jr(Na("h6", XV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Na("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: jV((a = On(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, WV)
                ];
              }),
              _: 1
            }),
            ls(On(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ua(() => [
                ls(On(JV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ua(() => [
                    ls(On(ZV), { icon: On(No) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Jr(Na("h4", KV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Jr(Na("p", YV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, e3 = window.Vue.renderList, t3 = window.Vue.Fragment, Zr = window.Vue.openBlock, Dg = window.Vue.createElementBlock, n3 = window.Vue.renderSlot, Ia = window.Vue.unref, Tg = window.Vue.createVNode, Bg = window.Vue.withCtx, o3 = window.Vue.createBlock, s3 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, a3 = window.Codex.CdxButton, i3 = window.Codex.CdxIcon, sf = {
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
    return (t, n) => (Zr(), Dg("ul", s3, [
      (Zr(!0), Dg(t3, null, e3(e.sections, (o) => (Zr(), o3(Ia(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Bg(() => [
          Tg(Ia(a3), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Bg(() => [
              n3(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Tg(Ia(i3), { icon: Ia(Ws) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, r3 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const l3 = window.Vue.resolveDirective, Ra = window.Vue.createElementVNode, Qr = window.Vue.withDirectives, St = window.Vue.unref, Pg = window.Vue.toDisplayString, ho = window.Vue.withCtx, el = window.Vue.openBlock, Fg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cs = window.Vue.createVNode, c3 = window.Vue.createTextVNode, u3 = window.Vue.createElementBlock, d3 = { class: "sx-section-selector__missing-sections py-2" }, g3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, p3 = ["lang", "dir", "textContent"], Mg = window.Vue.computed, m3 = window.Codex.CdxButton, h3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Je(), n = Mg(
      () => {
        var s;
        return I.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Mg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = l3("i18n");
      return el(), u3("section", d3, [
        Qr(Ra("h4", g3, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (el(), Fg(St(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: ho(() => [
            cs(St(b), {
              class: "py-6 justify-center",
              innerHTML: St(r3)
            }, null, 8, ["innerHTML"]),
            cs(St(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: ho(() => [
                Qr(Ra("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            cs(St(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: ho(() => [
                Qr(Ra("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            cs(St(b), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: ho(() => [
                cs(St(m3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: ho(() => [
                    c3(Pg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (el(), Fg(sf, {
          key: 0,
          sections: St(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: ho(({ sourceSection: c }) => {
            var d, g;
            return [
              Ra("h5", {
                class: "ma-0",
                lang: (d = St(t)) == null ? void 0 : d.sourceLanguage,
                dir: St(I.getDir)((g = St(t)) == null ? void 0 : g.sourceLanguage),
                textContent: Pg(c)
              }, null, 8, p3)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const f3 = window.Vue.resolveDirective, za = window.Vue.createElementVNode, w3 = window.Vue.withDirectives, jn = window.Vue.unref, Ng = window.Vue.toDisplayString, _3 = window.Vue.withCtx, v3 = window.Vue.createVNode, S3 = window.Vue.openBlock, y3 = window.Vue.createElementBlock, C3 = { class: "sx-section-selector__present-sections py-2" }, b3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, k3 = { class: "sx-section-selector__present-section-button-content" }, x3 = ["lang", "dir", "textContent"], $3 = ["lang", "dir", "textContent"], V3 = window.Vue.computed, E3 = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Je(), n = V3(
      () => {
        var o;
        return I.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var i;
      const a = f3("i18n");
      return S3(), y3("section", C3, [
        w3(za("h4", b3, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        v3(sf, {
          sections: ((i = jn(t)) == null ? void 0 : i.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (c) => o.$emit("select-section", c))
        }, {
          default: _3(({ sourceSection: c, targetSection: d }) => {
            var g, r, l, u;
            return [
              za("div", k3, [
                za("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (g = jn(t)) == null ? void 0 : g.sourceLanguage,
                  dir: jn(I.getDir)((r = jn(t)) == null ? void 0 : r.sourceLanguage),
                  textContent: Ng(c)
                }, null, 8, x3),
                za("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (l = jn(t)) == null ? void 0 : l.targetLanguage,
                  dir: jn(I.getDir)((u = jn(t)) == null ? void 0 : u.targetLanguage),
                  textContent: Ng(d)
                }, null, 8, $3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const en = window.Vue.createVNode, Cn = window.Vue.unref, L3 = window.Vue.resolveDirective, Pt = window.Vue.createElementVNode, us = window.Vue.withDirectives, A3 = window.Vue.renderList, D3 = window.Vue.Fragment, tl = window.Vue.openBlock, Ug = window.Vue.createElementBlock, T3 = window.Vue.createBlock, Ig = window.Vue.toDisplayString, Rg = window.Vue.createTextVNode, nl = window.Vue.withCtx, B3 = { class: "sx-section-selector" }, P3 = { class: "sx-section-selector__body" }, F3 = { class: "py-2" }, M3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, N3 = { class: "ma-0 pa-0" }, U3 = { class: "sx-section-selector__additional-consideration-title" }, I3 = { href: "#" }, R3 = { class: "sx-section-selector__additional-consideration-title" }, z3 = { href: "#" }, ol = window.Vue.computed, O3 = window.Vuex.useStore, j3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = O3(), { sectionSuggestion: n } = Je(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: i
    } = ue(t), c = ol(
      () => {
        var w;
        return q.getPageUrl(o.value, (w = n.value) == null ? void 0 : w.sourceTitle);
      }
    ), d = ol(
      () => {
        var w;
        return q.getPageUrl(s.value, (w = n.value) == null ? void 0 : w.targetTitle);
      }
    ), g = ol(() => [
      { path: c.value, autonym: a.value },
      { path: d.value, autonym: i.value }
    ]), r = ke(), { clearTranslationURLParameters: l, setSectionURLParam: u } = B(), p = () => {
      l(), r.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ot(), h = Hc(), { selectPageSectionByTitle: f } = Li(), _ = (w) => {
      u(w), m.value ? h(m.value) : (f(w), r.push({ name: "sx-content-comparator" }));
    };
    return (w, y) => {
      const S = L3("i18n");
      return tl(), Ug("section", B3, [
        en(QV, { onClose: p }),
        Pt("section", P3, [
          en(tf),
          en(h3, {
            onSelectSection: _,
            onClose: p
          }),
          en(E3, { onSelectSection: _ }),
          Pt("section", F3, [
            us(Pt("h4", M3, null, 512), [
              [S, [
                Cn(i)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            Pt("ul", N3, [
              (tl(!0), Ug(D3, null, A3(g.value, (V, k) => (tl(), T3(zV, {
                key: `view-article-item-${k}`,
                path: V.path,
                autonym: V.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          en(Cn(P), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: nl(() => [
              en(Cn(b), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: nl(() => [
                  Pt("h6", U3, [
                    en(Cn(Pe), {
                      icon: Cn(a0),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Rg(" " + Ig(w.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  us(Pt("p", null, null, 512), [
                    [S, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  us(Pt("a", I3, null, 512), [
                    [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              en(Cn(b), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: nl(() => [
                  Pt("h6", R3, [
                    en(Cn(Pe), {
                      icon: Cn(s0),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Rg(" " + Ig(w.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  us(Pt("p", null, null, 512), [
                    [S, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  us(Pt("a", z3, null, 512), [
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
const H3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: j3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, q3 = window.Vue.resolveComponent, G3 = window.Vue.createVNode, X3 = window.Vue.normalizeClass, W3 = window.Vue.openBlock, K3 = window.Vue.createElementBlock;
function Y3(e, t, n, o, s, a) {
  const i = q3("sx-section-selector");
  return W3(), K3("main", {
    class: X3(["sx-section-selector-view", a.classes])
  }, [
    G3(i)
  ], 2);
}
const J3 = /* @__PURE__ */ J(H3, [["render", Y3]]), sl = window.Vue.computed, Z3 = (e) => {
  const {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = sl(
    () => I.getAutonym(t.value)
  ), s = sl(
    () => I.getAutonym(n.value)
  ), a = pe();
  return sl(() => {
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
const zg = window.Vue.unref, Q3 = window.Vue.createVNode, e5 = window.Vue.openBlock, t5 = window.Vue.createElementBlock, n5 = { class: "sx-content-comparator__source-target-selector" }, o5 = window.Vue.watch, s5 = {
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
    const n = e, o = t, s = (i) => o("update:selection", i), a = Z3(n);
    return o5(
      () => n.isMappedSection,
      () => {
        a.value.map((i) => i.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (i, c) => (e5(), t5("div", n5, [
      Q3(zg(Us), {
        items: zg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Hn = window.Vue.computed, a5 = window.Vue.ref, Gc = () => {
  const e = a5([]), { currentTargetPage: t } = Ze(), { sectionSuggestion: n } = Je(), { sectionURLParameter: o } = B(), s = Hn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Hn(
    () => {
      var u;
      return (((u = i.value) == null ? void 0 : u.title) || "").replace(/ /g, "_");
    }
  ), i = Hn(
    () => {
      var u;
      return (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value);
    }
  ), { sourceSection: c } = K(), d = Hn(() => {
    var u;
    return (u = c.value) == null ? void 0 : u.html;
  }), g = Hn(() => {
    var u;
    return (u = i.value) == null ? void 0 : u.html;
  }), r = Hn(
    () => {
      var u;
      return (u = n.value) == null ? void 0 : u.missingSections.hasOwnProperty(o.value);
    }
  ), l = Hn(
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
const Oa = window.Vue.createVNode, i5 = window.Vue.toDisplayString, r5 = window.Vue.createElementVNode, bn = window.Vue.unref, ja = window.Vue.withCtx, al = window.Vue.openBlock, il = window.Vue.createBlock;
window.Vue.createCommentVNode;
const l5 = window.Vue.normalizeClass, c5 = ["lang", "dir", "textContent"], Og = window.Vue.ref, rl = window.Vue.computed, u5 = window.Vue.onMounted, d5 = {
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
    const n = e, o = t, s = Og(!1), { sectionSuggestion: a } = Je(), { sectionURLParameter: i } = B(), c = rl(
      () => (i.value || "").replace(/ /g, "_")
    ), d = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: r } = Gc(), l = rl(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: i.value,
            path: `${q.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${c.value}`,
            lang: a.value.sourceLanguage,
            dir: I.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: u.value,
            lang: a.value.targetLanguage,
            dir: I.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: g.value,
            path: `${u.value}#${r.value}`
          };
      }
    }), u = rl(
      () => q.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Og(null);
    return u5(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (al(), il(bn(P), {
      ref_key: "contentHeader",
      ref: p,
      class: l5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: ja(() => [
        Oa(s5, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": d
        }, null, 8, ["is-mapped-section", "selection"]),
        Oa(bn(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: ja(() => [
            Oa(bn(b), null, {
              default: ja(() => [
                r5("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: i5(l.value.title)
                }, null, 8, c5)
              ]),
              _: 1
            }),
            Oa(bn(b), { shrink: "" }, {
              default: ja(() => [
                s.value ? (al(), il(bn(Te), {
                  key: 0,
                  icon: bn(wi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (al(), il(bn(Te), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: bn(Sm),
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
}, Ha = window.Vue.unref, jg = window.Vue.createVNode, g5 = window.Vue.openBlock, p5 = window.Vue.createElementBlock, m5 = { class: "sx-content-comparator__header-navigation flex items-center" }, h5 = window.Vue.computed, f5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = h5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Li(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[c];
      s(d);
    }, i = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[c];
      s(d);
    };
    return (c, d) => (g5(), p5("div", m5, [
      jg(Ha(Te), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Ha(e0),
        onClick: a
      }, null, 8, ["icon"]),
      jg(Ha(Te), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Ha(Qw),
        onClick: i
      }, null, 8, ["icon"])
    ]));
  }
};
const Hg = window.Vue.toDisplayString, w5 = window.Vue.resolveDirective, ll = window.Vue.withDirectives, fo = window.Vue.openBlock, qa = window.Vue.createElementBlock, _5 = window.Vue.createCommentVNode, v5 = window.Vue.createTextVNode, qg = window.Vue.createElementVNode, S5 = window.Vue.normalizeClass, qn = window.Vue.unref, cl = window.Vue.withCtx, ul = window.Vue.createVNode, Gg = window.Vue.createBlock, y5 = { class: "sx-content-comparator-header__mapped-section" }, C5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, b5 = { key: 0 }, k5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, x5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Xg = window.Vue.computed, $5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: Tn,
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
    const n = pe(), o = e, s = t, a = Xg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), i = Xg(
      () => n.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        I.getAutonym(o.suggestion.targetLanguage)
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
      const l = w5("i18n");
      return fo(), qa("div", y5, [
        ul(qn(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: cl(() => [
            ul(qn(b), { grow: "" }, {
              default: cl(() => [
                qg("h6", C5, [
                  v5(Hg(i.value) + " ", 1),
                  a.value ? ll((fo(), qa("span", b5, null, 512)), [
                    [l, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : _5("", !0)
                ]),
                qg("h6", {
                  class: S5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, Hg(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            ul(qn(b), { shrink: "" }, {
              default: cl(() => [
                a.value ? (fo(), Gg(qn(Te), {
                  key: 1,
                  class: "pa-0",
                  icon: qn(l0),
                  type: "icon",
                  onClick: d
                }, null, 8, ["icon"])) : (fo(), Gg(qn(Te), {
                  key: 0,
                  class: "pa-0",
                  icon: qn(vm),
                  type: "icon",
                  onClick: c
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? ll((fo(), qa("p", x5, null, 512)), [
          [l, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : ll((fo(), qa("p", k5, null, 512)), [
          [l, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const _e = window.Vue.unref, wo = window.Vue.createVNode, Wg = window.Vue.toDisplayString, ln = window.Vue.createElementVNode, V5 = window.Vue.normalizeClass, dl = window.Vue.withCtx, E5 = window.Vue.resolveDirective, Kg = window.Vue.withDirectives, gl = window.Vue.openBlock, Yg = window.Vue.createBlock, Jg = window.Vue.createCommentVNode, L5 = window.Vue.createElementBlock, A5 = { class: "sx-content-comparator__header pa-4" }, D5 = { class: "row my-1 py-2 mx-0" }, T5 = { class: "sx-content-comparator-header__titles grow" }, B5 = ["lang", "dir"], P5 = ["lang", "dir"], F5 = { class: "py-2 mb-1" }, M5 = /* @__PURE__ */ ln("br", null, null, -1), ds = window.Vue.computed, N5 = window.Vue.inject, U5 = {
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
    const { sectionURLParameter: t } = B(), { sourceSection: n } = K(), { sectionSuggestion: o } = Je(), s = ds(
      () => {
        var l;
        return (l = o.value) == null ? void 0 : l.missingSections.hasOwnProperty(t.value);
      }
    ), a = ds(
      () => {
        var l;
        return (l = o.value) == null ? void 0 : l.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: i } = Gc(), c = ds(() => {
      var l;
      return (l = n.value) == null ? void 0 : l.html;
    }), d = ds(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), g = N5("breakpoints"), r = ds(() => g.value.mobile);
    return (l, u) => {
      const p = E5("i18n");
      return gl(), L5("div", A5, [
        wo(_e(Te), {
          class: "py-2 pa-0",
          icon: _e(t0),
          label: l.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: u[0] || (u[0] = (m) => l.$emit("close"))
        }, null, 8, ["icon", "label"]),
        ln("div", D5, [
          ln("div", {
            class: V5(["flex grow", r.value ? "col-12" : "me-6"])
          }, [
            ln("div", T5, [
              ln("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: _e(o).sourceLanguage,
                dir: _e(I.getDir)(_e(o).sourceLanguage)
              }, Wg(_e(o).sourceTitle), 9, B5),
              ln("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: _e(o).sourceLanguage,
                dir: _e(I.getDir)(_e(o).sourceLanguage)
              }, Wg(_e(t)), 9, P5)
            ]),
            wo(f5, { "section-source-titles": d.value }, null, 8, ["section-source-titles"])
          ], 2),
          ln("div", F5, [
            wo(_e(Te), {
              icon: _e(wi),
              progressive: "",
              label: l.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !c.value,
              onClick: u[1] || (u[1] = (m) => l.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (gl(), Yg(_e(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: dl(() => [
            wo(_e(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: dl(() => [
                wo(_e(Pe), { icon: _e(i0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            wo(_e(b), { class: "ma-0" }, {
              default: dl(() => [
                Kg(ln("strong", null, null, 512), [
                  [p, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                M5,
                Kg(ln("span", null, null, 512), [
                  [p, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Jg("", !0),
        a.value ? (gl(), Yg($5, {
          key: 1,
          suggestion: _e(o),
          "target-section-title": _e(i),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": u[2] || (u[2] = (m) => l.$emit("update:discardedSections", m))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Jg("", !0)
      ]);
    };
  }
};
const Zg = window.Vue.toDisplayString, I5 = window.Vue.createElementVNode, Qg = window.Vue.openBlock, ep = window.Vue.createElementBlock, R5 = window.Vue.createCommentVNode, z5 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, O5 = ["textContent"], j5 = ["textContent"], af = {
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
    return (t, n) => (Qg(), ep("section", z5, [
      I5("h5", {
        textContent: Zg(e.placeholderTitle)
      }, null, 8, O5),
      e.placeholderSubtitle ? (Qg(), ep("p", {
        key: 0,
        textContent: Zg(e.placeholderSubtitle)
      }, null, 8, j5)) : R5("", !0)
    ]));
  }
}, H5 = window.Vue.computed, q5 = window.Vue.createApp, G5 = window.Vuex.useStore, X5 = () => {
  const e = G5(), { sectionSuggestion: t } = Je(), { currentTargetPage: n } = Ze(), o = pe(), s = () => q5(
    af,
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
  return H5(() => {
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
const $e = window.Vue.unref, W5 = window.Vue.isRef, pl = window.Vue.createVNode, _o = window.Vue.openBlock, tp = window.Vue.createBlock, np = window.Vue.createCommentVNode, Ga = window.Vue.createElementVNode, ml = window.Vue.Fragment, Xa = window.Vue.createElementBlock, K5 = { class: "sx-content-comparator" }, Y5 = { class: "sx-content-comparator__source-content" }, J5 = ["lang", "dir", "innerHTML"], Z5 = ["lang", "dir", "innerHTML"], Q5 = ["innerHTML"], eE = window.Vue.ref, tE = window.Vue.computed, nE = window.Vue.watch, oE = window.Vuex.useStore, sE = {
  __name: "SXContentComparator",
  setup(e) {
    oE();
    const t = ke(), n = eE("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = qc(), {
      sourceLanguageURLParameter: a,
      targetLanguageURLParameter: i,
      pageURLParameter: c,
      sectionURLParameter: d
    } = B(), {
      activeSectionTargetTitle: g,
      discardedSections: r,
      isCurrentSectionMapped: l,
      sourceSectionContent: u,
      targetSectionContent: p
    } = Gc(), m = X5(), { sectionSuggestion: h } = Je(), f = tE(() => h.value.targetTitle), _ = Oc();
    return nE(
      f,
      () => _(
        i.value,
        a.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, y) => (_o(), Xa("section", K5, [
      pl(U5, {
        "discarded-sections": $e(r),
        "onUpdate:discardedSections": y[0] || (y[0] = (S) => W5(r) ? r.value = S : null),
        onTranslationButtonClicked: $e(s),
        onClose: o
      }, null, 8, ["discarded-sections", "onTranslationButtonClicked"]),
      pl(d5, {
        "source-vs-target-selection": n.value,
        "onUpdate:sourceVsTargetSelection": y[1] || (y[1] = (S) => n.value = S),
        "is-mapped-section": $e(l),
        onTranslationButtonClicked: $e(s)
      }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
      Ga("section", Y5, [
        n.value === "source_section" ? (_o(), Xa(ml, { key: 0 }, [
          $e(u) ? np("", !0) : (_o(), tp($e(Xe), { key: 0 })),
          Ga("section", {
            lang: $e(a),
            dir: $e(I.getDir)($e(a)),
            class: "pt-2 px-4",
            innerHTML: $e(u)
          }, null, 8, J5)
        ], 64)) : n.value === "target_article" ? (_o(), Xa(ml, { key: 1 }, [
          $e(m) ? np("", !0) : (_o(), tp($e(Xe), { key: 0 })),
          Ga("article", {
            lang: $e(i),
            dir: $e(I.getDir)($e(i)),
            class: "px-4",
            innerHTML: $e(m)
          }, null, 8, Z5)
        ], 64)) : (_o(), Xa(ml, { key: 2 }, [
          Ga("section", {
            class: "pa-4",
            innerHTML: $e(p)
          }, null, 8, Q5),
          pl(af, {
            "placeholder-title": w.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": w.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
};
const aE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: sE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, iE = window.Vue.resolveComponent, rE = window.Vue.createVNode, lE = window.Vue.normalizeClass, cE = window.Vue.openBlock, uE = window.Vue.createElementBlock;
function dE(e, t, n, o, s, a) {
  const i = iE("sx-content-comparator");
  return cE(), uE("main", {
    class: lE(["sx-content-comparator-view", a.classes])
  }, [
    rE(i)
  ], 2);
}
const gE = /* @__PURE__ */ J(aE, [["render", dE]]);
const pE = window.Vue.resolveDirective, gs = window.Vue.createElementVNode, op = window.Vue.withDirectives, Wa = window.Vue.unref, hl = window.Vue.createVNode, sp = window.Vue.toDisplayString, ap = window.Vue.createTextVNode, ps = window.Vue.withCtx, mE = window.Vue.openBlock, hE = window.Vue.createBlock, fE = { class: "mw-ui-dialog__header px-4 py-3" }, wE = { class: "mw-ui-dialog__header-title" }, _E = { class: "pa-4" }, vE = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, ip = window.Codex.CdxButton, SE = {
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
      const d = pE("i18n");
      return mE(), hE(Wa(ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ps(() => [
          gs("div", fE, [
            op(gs("span", wE, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ps(() => [
          gs("div", vE, [
            hl(Wa(ip), {
              weight: "quiet",
              onClick: s
            }, {
              default: ps(() => [
                ap(sp(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            hl(Wa(ip), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ps(() => [
                ap(sp(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ps(() => [
          hl(Wa(fi)),
          gs("div", _E, [
            op(gs("span", null, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, yE = window.Vuex.useStore, Xc = () => {
  const e = yE(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = pn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = of(), i = (r, l, u) => {
    if (r === 0) {
      t.value.proposedTitleTranslations[l] = u;
      return;
    }
    const p = t.value.getContentTranslationUnitById(r);
    p instanceof qe ? p.blockTemplateProposedTranslations[l] = u : p instanceof An && p.addProposedTranslation(l, u);
  }, c = (r, l) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, r))
      return "";
    try {
      const p = yield a();
      return yield lt.fetchSegmentTranslation(
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
    p instanceof qe && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield l4(
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
}, CE = window.Vuex.useStore, bE = () => {
  const { sourceSection: e } = K(), t = CE(), { translateTranslationUnitById: n } = Xc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const kE = window.Vue.resolveDirective, at = window.Vue.createElementVNode, Ka = window.Vue.withDirectives, ze = window.Vue.unref, fl = window.Vue.createVNode, kn = window.Vue.withCtx, xE = window.Vue.renderList, $E = window.Vue.Fragment, wl = window.Vue.openBlock, VE = window.Vue.createElementBlock, EE = window.Vue.toDisplayString, rp = window.Vue.createBlock, LE = window.Vue.createCommentVNode, AE = { class: "mw-ui-dialog__header pa-4" }, DE = { class: "row ma-0 py-2" }, TE = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, BE = { class: "mb-0" }, PE = { class: "col shrink justify-center" }, FE = { class: "pb-2 mb-0" }, ME = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, NE = ["dir", "lang", "innerHTML"], UE = ["textContent"], IE = ["innerHTML"], RE = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, zE = /* @__PURE__ */ at("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), _l = window.Vue.computed, OE = window.Vuex.useStore, jE = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = Y.EMPTY_TEXT_PROVIDER_KEY, s = Y.ORIGINAL_TEXT_PROVIDER_KEY, a = OE(), {
      sourceSection: i,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: d
    } = K(), {
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: r
    } = B(), l = _l(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        r.value
      )
    ), u = _l(() => {
      const w = [s, o];
      return l.value.filter(
        (y) => !w.includes(y)
      );
    }), p = _l(
      () => c.value ? i.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = bE(), h = (w) => {
      m(w), _();
    }, f = Y.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, y) => {
      const S = kE("i18n");
      return e.active ? (wl(), rp(ze(ct), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: kn(() => [
          at("div", AE, [
            at("div", DE, [
              at("div", TE, [
                Ka(at("h4", BE, null, 512), [
                  [S, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              at("div", PE, [
                fl(ze(Te), {
                  type: "icon",
                  icon: ze(Is),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            Ka(at("h6", FE, null, 512), [
              [S, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: kn(() => [
          fl(ze(Ge), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (V) => h(ze(s)))
          }, {
            header: kn(() => [
              Ka(at("h5", ME, null, 512), [
                [S, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: kn(() => [
              at("p", {
                dir: ze(I.getDir)(ze(g)),
                lang: ze(g),
                innerHTML: p.value[ze(s)]
              }, null, 8, NE)
            ]),
            _: 1
          }),
          (wl(!0), VE($E, null, xE(u.value, (V) => (wl(), rp(ze(Ge), {
            key: V,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (k) => h(V)
          }, {
            header: kn(() => [
              at("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: EE(ze(f)(V))
              }, null, 8, UE)
            ]),
            default: kn(() => [
              at("p", {
                innerHTML: p.value[V]
              }, null, 8, IE)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          fl(ze(Ge), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (V) => h(ze(o)))
          }, {
            header: kn(() => [
              Ka(at("h5", RE, null, 512), [
                [S, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: kn(() => [
              zE
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : LE("", !0);
    };
  }
}, HE = window.Vuex.useStore, Io = () => {
  const { sourceSection: e } = K(), t = HE(), { translateTranslationUnitById: n } = Xc(), { currentMTProvider: o } = ue(t), s = (c) => C(void 0, null, function* () {
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
const qE = window.Vue.toDisplayString, vl = window.Vue.createElementVNode, Sl = window.Vue.unref, GE = window.Vue.createVNode, XE = window.Vue.normalizeClass, WE = window.Vue.withCtx, KE = window.Vue.openBlock, YE = window.Vue.createBlock, JE = ["href"], ZE = ["textContent"], QE = ["innerHTML"], vo = window.Vue.computed, eL = window.Vuex.useStore, lp = "sx-sentence-selector__section-title", tL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = eL(), { sourceSection: n, isSectionTitleSelected: o } = K(), { currentSourcePage: s } = Ze(), { sourceLanguage: a } = ue(t), i = vo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = vo(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), d = vo(
      () => q.getPageUrl(a.value, i.value)
    ), g = vo(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = vo(
      () => g.value ? "translated" : "selected"
    ), l = vo(() => {
      const m = [lp];
      return o.value && m.push(`${lp}--${r.value}`), m;
    }), { selectTranslationUnitById: u } = Io(), p = () => u(0);
    return (m, h) => (KE(), YE(Sl(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: WE(() => [
        vl("a", {
          href: d.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          vl("strong", {
            textContent: qE(i.value)
          }, null, 8, ZE),
          GE(Sl(Pe), {
            icon: Sl(Sm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, JE),
        vl("h2", {
          class: XE(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, QE)
      ]),
      _: 1
    }));
  }
};
const Ft = window.Vue.unref, ms = window.Vue.createVNode, Ya = window.Vue.withCtx, cp = window.Vue.toDisplayString, up = window.Vue.createTextVNode, nL = window.Vue.openBlock, oL = window.Vue.createBlock, sL = window.Vue.computed, yl = window.Codex.CdxButton, dp = window.Codex.CdxIcon, rf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = K(), s = sL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (nL(), oL(Ft(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ya(() => [
        ms(Ft(yl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Ft(n),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: Ya(() => [
            ms(Ft(dp), {
              class: "me-1",
              icon: Ft(Uc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ms(Ft(yl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Ft(o),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: Ya(() => [
            up(cp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ms(Ft(yl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: Ya(() => [
            up(cp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ms(Ft(dp), {
              class: "ms-1",
              size: "small",
              icon: Ft(Ws)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Gn = window.Vue.unref, aL = window.Vue.toDisplayString, hs = window.Vue.createVNode, Ja = window.Vue.withCtx, iL = window.Vue.openBlock, rL = window.Vue.createBlock, Cl = window.Vue.computed, lL = window.Vuex.useStore, cL = window.Codex.CdxButton, uL = window.Codex.CdxIcon, dL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = lL(), n = Cl(() => t.state.application.currentMTProvider), o = pe(), s = Cl(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Cl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (iL(), rL(Gn(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ja(() => [
        hs(Gn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: Ja(() => [
            hs(Gn(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: aL(a.value)
            }, null, 8, ["textContent"]),
            hs(Gn(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ja(() => [
                hs(Gn(cL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (d) => i.$emit("configure-options"))
                }, {
                  default: Ja(() => [
                    hs(Gn(uL), {
                      class: "pa-0",
                      icon: Gn(Mc)
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
const yt = window.Vue.unref, xn = window.Vue.createVNode, gL = window.Vue.resolveDirective, gp = window.Vue.createElementVNode, pL = window.Vue.withDirectives, pp = window.Vue.toDisplayString, mp = window.Vue.createTextVNode, fs = window.Vue.withCtx, mL = window.Vue.openBlock, hL = window.Vue.createElementBlock, fL = { class: "mt-retry-body pb-5" }, wL = { class: "retry-body__message" }, hp = window.Codex.CdxButton, bl = window.Codex.CdxIcon, _L = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = gL("i18n");
      return mL(), hL("div", fL, [
        gp("div", wL, [
          xn(yt(bl), {
            class: "me-2",
            icon: yt(Vh)
          }, null, 8, ["icon"]),
          pL(gp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        xn(yt(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: fs(() => [
            xn(yt(b), { cols: "6" }, {
              default: fs(() => [
                xn(yt(hp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: fs(() => [
                    xn(yt(bl), {
                      class: "me-1",
                      icon: yt(Fh)
                    }, null, 8, ["icon"]),
                    mp(" " + pp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            xn(yt(b), { cols: "6" }, {
              default: fs(() => [
                xn(yt(hp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: fs(() => [
                    xn(yt(bl), {
                      class: "me-1",
                      icon: yt(Ab)
                    }, null, 8, ["icon"]),
                    mp(" " + pp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const So = window.Vue.createVNode, Oe = window.Vue.unref, ws = window.Vue.openBlock, vL = window.Vue.createElementBlock, SL = window.Vue.createCommentVNode, Za = window.Vue.createBlock, yL = window.Vue.normalizeClass, CL = window.Vue.normalizeStyle, _s = window.Vue.withCtx, bL = window.Vue.toDisplayString, kL = window.Vue.createTextVNode, xL = window.Vue.normalizeProps, $L = window.Vue.guardReactiveProps, VL = ["lang", "dir", "innerHTML"], kl = window.Vue.ref, EL = window.Vue.onMounted, LL = window.Vue.onBeforeUnmount, xl = window.Vue.computed, AL = window.Vue.nextTick, DL = window.Vuex.useStore, TL = window.Codex.CdxButton, BL = window.Codex.CdxIcon, PL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = kl(0), n = kl(null), o = kl(null), s = DL(), { currentMTProvider: a } = ue(s), { targetLanguageURLParameter: i } = B(), { sourceSection: c, currentProposedTranslation: d } = K(), g = xl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), r = xl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = xl(
      () => !!d.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    EL(() => C(this, null, function* () {
      yield AL(), u(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), LL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => u());
    return (m, h) => (ws(), Za(Oe(Ge), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: _s(() => [
        So(Oe(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: _s(() => [
            So(dL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            So(Oe(b), {
              class: yL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && g.value
              }]),
              style: CL(l.value ? r.value : null)
            }, {
              default: _s(() => [
                l.value ? (ws(), vL("section", {
                  key: 0,
                  lang: Oe(i),
                  dir: Oe(I.getDir)(Oe(i)),
                  innerHTML: Oe(d)
                }, null, 8, VL)) : g.value ? (ws(), Za(Oe(Xe), { key: 1 })) : (ws(), Za(_L, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            So(Oe(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: _s(() => [
                l.value || g.value ? (ws(), Za(Oe(TL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Oe(d)))
                }, {
                  default: _s(() => [
                    So(Oe(BL), {
                      class: "me-1",
                      icon: Oe(Fc)
                    }, null, 8, ["icon"]),
                    kL(" " + bL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : SL("", !0),
                So(rf, xL($L(m.$attrs)), null, 16)
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
}, FL = window.Vue.computed, ML = (e) => FL(() => {
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
const NL = window.Vue.unref, UL = window.Vue.normalizeClass, IL = window.Vue.openBlock, RL = window.Vue.createElementBlock, zL = ["innerHTML"], OL = window.Vue.onMounted, jL = window.Vue.ref, HL = window.Vue.computed, qL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: qe,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = jL(null), a = ML(n.subSection);
    OL(() => {
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
    const { selectTranslationUnitById: i } = Io(), c = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      i(g.id);
    }, d = HL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, r) => (IL(), RL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: UL(["sx-sentence-selector__subsection", d.value]),
      innerHTML: NL(a)
    }, null, 10, zL));
  }
};
const fp = window.Vue.unref, wp = window.Vue.createVNode, _p = window.Vue.normalizeStyle, GL = window.Vue.openBlock, XL = window.Vue.createElementBlock, vp = window.Vue.computed, lf = {
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
    const t = e, n = vp(() => ({ "--size": t.size })), o = vp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? ym : di
    );
    return (s, a) => (GL(), XL("div", {
      class: "block-template-status-indicator",
      style: _p(n.value)
    }, [
      wp(fp(G1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      wp(fp(Pe), {
        icon: o.value,
        size: e.size / 2,
        style: _p({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, vs = window.Vue.openBlock, Qa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const tn = window.Vue.unref, yo = window.Vue.withCtx, Ss = window.Vue.createVNode, $l = window.Vue.toDisplayString, Vl = window.Vue.createElementVNode, WL = window.Vue.renderList, KL = window.Vue.Fragment, YL = window.Vue.createElementBlock, JL = { class: "pa-4" }, ZL = ["textContent"], QL = ["textContent"], eA = window.Vuex.useStore, ei = window.Vue.computed, tA = {
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
    const t = e, { targetLanguageAutonym: n } = ue(eA()), o = ei(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = pe(), a = ei(() => {
      let d;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? d = "cx-sx-block-template-mapping-status-title-partially-template" : d = "cx-sx-block-template-mapping-status-title-fully-template" : d = "cx-sx-block-template-mapping-status-title-unadapted-template" : d = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(d);
    }), i = ei(() => {
      let d;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? d = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? d = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : d = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(d);
    }), c = ei(() => {
      let d = [];
      if (!t.targetTemplateExists)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: g0,
          color: it.gray500
        });
      else if (!t.isTemplateAdapted)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Is,
          color: it.gray500
        });
      else if (o.value < 100)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: di,
          color: it.blue600
        });
      else {
        let g;
        t.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : g = s.i18n("cx-sx-block-template-no-source-params-text"), d.push({
          text: g,
          icon: di,
          color: it.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: wi,
        color: it.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: Ww,
        color: it.gray500
      }), d;
    });
    return (d, g) => (vs(), Qa(tn(ct), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: d.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (r) => d.$emit("update:active", r))
    }, {
      header: yo(() => [
        Ss(tn(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: yo(() => [
            Ss(tn(b), { shrink: "" }, {
              default: yo(() => [
                e.targetTemplateExists ? (vs(), Qa(lf, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (vs(), Qa(tn(Pe), {
                  key: 1,
                  icon: tn(Kw)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: yo(() => [
        Vl("div", JL, [
          Vl("h3", {
            textContent: $l(a.value)
          }, null, 8, ZL),
          Vl("p", {
            class: "mt-6 text-small",
            textContent: $l(i.value)
          }, null, 8, QL),
          (vs(!0), YL(KL, null, WL(c.value, (r, l) => (vs(), Qa(tn(P), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: yo(() => [
              Ss(tn(b), { shrink: "" }, {
                default: yo(() => [
                  Ss(tn(Pe), {
                    class: "me-2",
                    icon: r.icon,
                    "icon-color": r.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Ss(tn(b), {
                textContent: $l(r.text)
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
const be = window.Vue.unref, Ae = window.Vue.createVNode, Mt = window.Vue.withCtx, El = window.Vue.toDisplayString, Sp = window.Vue.createTextVNode, nA = window.Vue.resolveDirective, yp = window.Vue.withDirectives, Cp = window.Vue.createElementVNode, oA = window.Vue.normalizeClass, ti = window.Vue.openBlock, bp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const kp = window.Vue.createBlock, sA = window.Vue.normalizeProps, aA = window.Vue.guardReactiveProps, iA = { class: "block-template-adaptation-card__container pa-4" }, rA = ["textContent"], lA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Me = window.Vue.computed, cA = window.Vue.ref, uA = window.Vuex.useStore, xp = window.Codex.CdxButton, $p = window.Codex.CdxIcon, dA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = uA(), { targetLanguageAutonym: n, currentMTProvider: o } = ue(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = K(), i = Me(() => {
      var F;
      return ((F = s.value) == null ? void 0 : F.blockTemplateTranslatedContent) || a.value;
    }), c = Me(
      () => {
        var x;
        return (x = s.value) == null ? void 0 : x.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = Me(
      () => {
        var x;
        return !((x = t.state.application.mtRequestsPending) != null && x.includes(
          s.value.id
        ));
      }
    ), g = pe(), r = Me(
      // Strip HTML comments and return
      () => {
        var x, F;
        return ((F = (x = s.value) == null ? void 0 : x.sourceBlockTemplateName) == null ? void 0 : F.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), l = Me(
      () => {
        var x, F;
        return (F = (x = s.value) == null ? void 0 : x.blockTemplateAdaptationInfo) == null ? void 0 : F[o.value];
      }
    ), u = Me(
      () => {
        var x, F;
        return ((x = l.value) == null ? void 0 : x.adapted) || !!((F = l.value) != null && F.partial);
      }
    ), p = Me(() => l.value ? "block-template-adaptation-card__body--" + (u.value ? "success" : "warning") : null), m = Me(() => l.value ? u.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Me(
      () => {
        var x;
        return Object.keys(((x = s.value) == null ? void 0 : x.sourceTemplateParams) || {}).length;
      }
    ), f = Me(() => {
      var F;
      const x = (F = s.value) == null ? void 0 : F.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(x || {});
    }), _ = Me(() => f.value.length), w = Me(() => {
      const x = k.value;
      return h.value + x === 0 ? 100 : _.value / (h.value + x) * 100 || 0;
    }), y = cA(!1), S = () => {
      y.value = !0;
    }, V = (x) => x.filter((F) => !f.value.includes(F)), k = Me(() => {
      var F;
      const x = ((F = l.value) == null ? void 0 : F.mandatoryTargetParams) || [];
      return V(x).length;
    }), D = Me(() => {
      var F;
      const x = ((F = l.value) == null ? void 0 : F.optionalTargetParams) || [];
      return V(x).length;
    });
    return (x, F) => {
      const N = nA("i18n");
      return ti(), kp(be(Ge), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Mt(() => [
          Cp("div", iA, [
            Ae(be(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Mt(() => [
                Ae(be(b), { shrink: "" }, {
                  default: Mt(() => [
                    Ae(be($p), {
                      icon: be(Db),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Ae(be(b), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Mt(() => [
                    Sp(El(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (ti(), bp("div", {
              key: 0,
              class: oA(["pa-4 mb-4", p.value])
            }, [
              Ae(be(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Mt(() => [
                  yp(Ae(be(b), { tag: "h5" }, null, 512), [
                    [N, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Ae(be(b), { shrink: "" }, {
                    default: Mt(() => [
                      Ae(lf, {
                        percentage: w.value,
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
              Cp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: El(c.value)
              }, null, 8, rA),
              Ae(be(xp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: F[0] || (F[0] = (M) => x.$emit("edit-translation", i.value))
              }, {
                default: Mt(() => [
                  Sp(El(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (ti(), bp("div", lA, [
              Ae(be(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Mt(() => [
                  yp(Ae(be(b), { tag: "h5" }, null, 512), [
                    [N, [
                      be(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Ae(be(b), { shrink: "" }, {
                    default: Mt(() => [
                      Ae(be(xp), {
                        weight: "quiet",
                        "aria-label": x.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Mt(() => [
                          Ae(be($p), {
                            icon: be(Eb),
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
            ])) : (ti(), kp(be(Xe), { key: 2 }))
          ]),
          Ae(rf, sA(aA(x.$attrs)), null, 16),
          Ae(tA, {
            active: y.value,
            "onUpdate:active": F[1] || (F[1] = (M) => y.value = M),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": k.value,
            "optional-missing-params-count": D.value,
            "is-template-adapted": u.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const gA = window.Vue.unref, pA = window.Vue.createVNode, mA = window.Vue.openBlock, hA = window.Vue.createElementBlock, fA = { class: "translated-segment-card-header" }, wA = window.Vue.computed, _A = {
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
    const n = t, { isSectionTitleSelected: o } = K(), s = pe(), a = wA(() => [
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
    return (c, d) => (mA(), hA("div", fA, [
      pA(gA(Us), {
        items: a.value,
        active: e.selection,
        onSelect: i
      }, null, 8, ["items", "active"])
    ]));
  }
};
const $n = window.Vue.unref, ni = window.Vue.createVNode, Ll = window.Vue.withCtx, vA = window.Vue.openBlock, SA = window.Vue.createBlock, yA = window.Vue.computed, Vp = window.Codex.CdxButton, Ep = window.Codex.CdxIcon, CA = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = K(), o = yA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (vA(), SA($n(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Ll(() => [
        ni($n(Vp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: $n(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: Ll(() => [
            ni($n(Ep), { icon: $n(Uc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ni($n(Vp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: Ll(() => [
            ni($n(Ep), { icon: $n(Ws) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const bA = window.Vue.useCssVars, De = window.Vue.createVNode, Lp = window.Vue.resolveDirective, kA = window.Vue.createElementVNode, Al = window.Vue.withDirectives, ge = window.Vue.unref, xA = window.Vue.normalizeStyle, oi = window.Vue.openBlock, Ap = window.Vue.createElementBlock, $A = window.Vue.createCommentVNode, VA = window.Vue.normalizeClass, ot = window.Vue.withCtx, EA = window.Vue.toDisplayString, LA = window.Vue.createTextVNode, Dp = window.Vue.createBlock, AA = window.Vue.normalizeProps, DA = window.Vue.guardReactiveProps, nn = window.Vue.computed, TA = window.Vue.ref, BA = window.Vue.inject, PA = window.Vuex.useStore, FA = window.Codex.CdxButton, Dl = window.Codex.CdxIcon, MA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    bA((w) => ({
      "4929555c": _.value
    }));
    const t = TA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = K(), { targetLanguage: a } = ue(PA()), i = nn(() => t.value === "sentence"), c = nn(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), d = nn(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), g = BA("colors"), r = g.gray200, l = g.red600, u = nn(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : c.value.translatedContent), p = nn(
      () => Rt.calculateScore(
        u.value,
        d.value,
        a.value
      )
    ), m = nn(
      () => Rt.getScoreStatus(p.value)
    ), h = nn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = nn(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), _ = nn(
      () => f.value[m.value]
    );
    return (w, y) => {
      const S = Lp("i18n"), V = Lp("i18n-html");
      return oi(), Dp(ge(Ge), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ot(() => [
          De(ge(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ot(() => [
              De(_A, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (k) => t.value = k)
              }, null, 8, ["selection"]),
              De(ge(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ot(() => [
                  De(ge(P), { class: "ma-0" }, {
                    default: ot(() => [
                      De(ge(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ot(() => [
                          Al(kA("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Al((oi(), Ap("p", {
                            key: 0,
                            style: xA({ color: ge(l) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Al((oi(), Ap("p", {
                            key: 1,
                            class: VA(h.value)
                          }, null, 2)), [
                            [V, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      De(ge(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ot(() => [
                          De(ge(P), { class: "ma-0 ms-2" }, {
                            default: ot(() => [
                              De(ge(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ot(() => [
                                  De(ge(Dl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ge(Fb)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              De(ge(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ot(() => [
                                  De(ge(bm), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: ge(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              De(ge(b), { shrink: "" }, {
                                default: ot(() => [
                                  De(ge(Dl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ge(Tb)
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
                  i.value ? (oi(), Dp(ge(FA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (k) => w.$emit("edit-translation", u.value))
                  }, {
                    default: ot(() => [
                      De(ge(Dl), {
                        class: "me-1",
                        icon: ge(Fc)
                      }, null, 8, ["icon"]),
                      LA(" " + EA(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : $A("", !0)
                ]),
                _: 1
              }),
              De(ge(b), { class: "translated-segment-card__actions" }, {
                default: ot(() => [
                  De(CA, AA(DA(w.$attrs)), null, 16)
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
}, NA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = K(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Io(), { currentTranslation: s } = Ot();
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
}, cf = window.Vuex.useStore, UA = () => {
  const e = cf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield $i.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, IA = () => {
  const e = cf(), { currentMTProvider: t } = ue(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = UA();
  return () => C(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = Y.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, RA = window.Vue.computed, zA = (e) => {
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
}, OA = () => {
  const { selectedContentTranslationUnit: e } = K(), t = RA(
    () => e.value instanceof qe
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && zA(o);
  };
}, jA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (c) => !Y.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, HA = window.Vue.computed, uf = () => {
  const { currentTranslation: e } = Ot(), { currentSourcePage: t } = Ze();
  return HA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, qA = window.Vuex.useStore, Wc = () => {
  const e = qA(), { sourceSection: t, targetPageTitleForPublishing: n } = K(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = uf();
  return () => {
    const c = n.value, d = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (p) => jA(p, d)
    );
    const l = t.value.getTranslationProgress(a), u = e.getters["application/isSandboxTarget"];
    return lt.saveTranslation({
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
}, GA = window.Vue.effectScope, XA = window.Vue.onScopeDispose, WA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = GA(!0), n = o.run(() => e(...a))), XA(s), n);
}, KA = window.Vuex.useStore;
let Tl;
const YA = () => {
  const e = KA(), t = Wc();
  let n = 1e3, o = 0;
  return Tl = Ic(() => t().then((a) => {
    a instanceof Ao ? (n *= o + 1, o++, setTimeout(Tl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Bo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Tl;
}, df = WA(YA), JA = window.Vuex.useStore, ZA = () => {
  const e = JA(), t = df(), { currentMTProvider: n } = ue(e), { sourceSection: o, currentProposedTranslation: s } = K(), { selectNextTranslationUnit: a } = Io();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, QA = window.Vuex.useStore, eD = () => {
  const e = QA(), t = df();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, tD = window.Vuex.useStore, nD = window.Vue.computed, gf = () => {
  const e = tD(), t = ke(), { currentTranslation: n } = Ot(), { currentMTProvider: o, previousRoute: s } = ue(e), { currentTargetPage: a } = Ze(), {
    sourceLanguageURLParameter: i,
    targetLanguageURLParameter: c,
    pageURLParameter: d,
    sectionURLParameter: g
  } = B(), r = Ye(), l = nD(() => {
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
    if (g.value ? (f.translation_source_section = g.value, f.translation_type = "section") : f.translation_type = "article", n.value) {
      f.translation_id = n.value.translationId, f.translation_target_title = n.value.targetTitle;
      const w = n.value.targetSectionTitle;
      w && (f.translation_target_section = w);
    } else
      a.value && (f.translation_target_title = (_ = a.value) == null ? void 0 : _.title);
    return o.value && (f.translation_provider = Y.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var S;
      const f = t.currentRoute.value.meta.workflowStep, w = t.getRoutes().find(
        (V) => V.name === s.value
      ), y = ((S = w == null ? void 0 : w.meta) == null ? void 0 : S.workflowStep) || 0;
      return f > y ? r(de({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => r(de({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => r(de({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => r(de({
      event_type: "editor_segment_add"
    }, l.value))
  };
};
const ae = window.Vue.unref, st = window.Vue.createVNode, on = window.Vue.withCtx, oD = window.Vue.resolveDirective, Tp = window.Vue.createElementVNode, sD = window.Vue.withDirectives, aD = window.Vue.toDisplayString, iD = window.Vue.createTextVNode, rD = window.Vue.renderList, lD = window.Vue.Fragment, Vn = window.Vue.openBlock, Bp = window.Vue.createElementBlock, Co = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cD = window.Vue.normalizeClass, uD = window.Vue.normalizeStyle, dD = { class: "sx-sentence-selector__header-title mb-0" }, gD = { class: "sx-sentence-selector__section-contents px-4" }, bo = window.Vue.computed, pD = window.Vue.nextTick, mD = window.Vue.onMounted, si = window.Vue.ref, Pp = window.Vue.watch, hD = window.Vuex.useStore, Fp = window.Codex.CdxButton, fD = window.Codex.CdxIcon, wD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = si(!1), n = si(!1), o = si("100%"), s = hD(), { currentMTProvider: a } = ue(s), {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: c
    } = B(), { sourceSection: d, selectedContentTranslationUnit: g } = K(), r = bo(
      () => s.state.application.translationDataLoadingCounter === 0
    ), l = bo(
      () => {
        var v;
        return (v = d.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), u = bo(() => {
      var v;
      return (v = d.value) == null ? void 0 : v.subSections;
    }), p = bo(
      () => {
        var v;
        return (v = d.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), m = bo(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: f,
      logEditorCloseWarnEvent: _,
      logEditorSegmentAddEvent: w
    } = gf(), y = NA();
    IA()().then(h);
    const V = OA();
    mD(() => {
      Pp(
        r,
        () => C(this, null, function* () {
          r.value && (yield pD(), y(), V());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Pp(g, V);
    const {
      selectNextTranslationUnit: k,
      selectPreviousTranslationUnit: D
    } = Io(), x = ZA(), F = () => {
      w(), x();
    }, N = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, M = ke(), X = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        Ee.value = !0, _();
        return;
      }
      Ve();
    }, { fetchTranslationsByStatus: W } = Uo(), re = eD(), { clearTranslationURLParameters: O } = B(), { currentTranslation: Z } = Ot(), Ve = () => C(this, null, function* () {
      W("draft"), Z.value && (d.value.reset(), Z.value.restored = !1), f(), O(), re(), yield M.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: te,
      translateSelectedTranslationUnitForAllProviders: mn
    } = Xc(), Et = () => {
      we.value || (t.value = !0, mn());
    }, { getCurrentTitleByLanguage: ut } = pn(), Q = (v, L) => {
      M.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: p.value,
          title: ut(
            c.value,
            i.value
          ),
          isInitialEdit: L || null
        }
      });
    }, jt = () => M.push({ name: "sx-publisher" }), Ie = () => C(this, null, function* () {
      g.value ? yield te(
        g.value.id,
        a.value
      ) : yield te(0, a.value);
    }), we = bo(
      () => g.value instanceof qe
    ), Ee = si(!1);
    return (v, L) => {
      const A = oD("i18n");
      return Vn(), Bp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: uD(m.value)
      }, [
        st(ae(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: on(() => [
            st(ae(b), { shrink: "" }, {
              default: on(() => [
                st(ae(Fp), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: X
                }, {
                  default: on(() => [
                    st(ae(fD), { icon: ae(Lh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            st(ae(b), {
              grow: "",
              class: "px-1"
            }, {
              default: on(() => [
                sD(Tp("h4", dD, null, 512), [
                  [A, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            st(ae(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: on(() => [
                st(ae(Fp), {
                  disabled: !(ae(d) && ae(d).isTranslated),
                  onClick: jt
                }, {
                  default: on(() => [
                    iD(aD(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? (Vn(), Co(ae(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: on(() => [
            st(ae(b), {
              dir: ae(I.getDir)(ae(i)),
              lang: ae(i),
              class: "sx-sentence-selector__section"
            }, {
              default: on(() => [
                st(tL),
                Tp("div", gD, [
                  (Vn(!0), Bp(lD, null, rD(u.value, (T) => (Vn(), Co(qL, {
                    id: T.id,
                    key: `sub-section-${T.id}`,
                    "sub-section": T,
                    onBounceTranslation: N
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !we.value && l.value ? (Vn(), Co(MA, {
              key: 0,
              onEditTranslation: L[0] || (L[0] = (T) => Q(T, !1)),
              onSkipTranslation: ae(k),
              onSelectPreviousSegment: ae(D)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : we.value ? (Vn(), Co(dA, {
              key: 2,
              onEditTranslation: Q,
              onApplyTranslation: F,
              onSkipTranslation: ae(k),
              onSelectPreviousSegment: ae(D)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Vn(), Co(PL, {
              key: 1,
              class: cD({ "mb-0": !n.value }),
              onConfigureOptions: Et,
              onEditTranslation: L[1] || (L[1] = (T) => Q(T, !0)),
              onApplyTranslation: F,
              onSkipTranslation: ae(k),
              onSelectPreviousSegment: ae(D),
              onRetryTranslation: Ie
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Vn(), Co(ae(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: on(() => [
            st(ae(Xe), { class: "mt-0" })
          ]),
          _: 1
        })),
        st(jE, {
          active: t.value,
          "onUpdate:active": L[2] || (L[2] = (T) => t.value = T)
        }, null, 8, ["active"]),
        st(SE, {
          modelValue: Ee.value,
          "onUpdate:modelValue": L[3] || (L[3] = (T) => Ee.value = T),
          onDiscardTranslation: Ve
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const _D = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: wD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, vD = window.Vue.resolveComponent, SD = window.Vue.createVNode, yD = window.Vue.normalizeClass, CD = window.Vue.openBlock, bD = window.Vue.createElementBlock;
function kD(e, t, n, o, s, a) {
  const i = vD("sx-sentence-selector");
  return CD(), bD("main", {
    class: yD(["sx-sentence-selector-view", a.classes])
  }, [
    SD(i)
  ], 2);
}
const xD = /* @__PURE__ */ J(_D, [["render", kD]]), $D = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, VD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const ED = window.Vue.resolveDirective, ai = window.Vue.withDirectives, Ct = window.Vue.openBlock, sn = window.Vue.createElementBlock, ii = window.Vue.createCommentVNode, ri = window.Vue.Transition, Xn = window.Vue.withCtx, ko = window.Vue.createVNode, ys = window.Vue.createElementVNode, Wn = window.Vue.unref, LD = window.Vue.renderList, AD = window.Vue.Fragment, DD = window.Vue.normalizeClass, Mp = window.Vue.createBlock, TD = window.Vue.toDisplayString, BD = window.Vue.createTextVNode, PD = { class: "sx-quick-tutorial" }, FD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, MD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, ND = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, UD = { class: "sx-quick-tutorial__illustration" }, ID = ["innerHTML"], RD = ["innerHTML"], zD = { class: "sx-quick-tutorial__step-indicator py-3" }, OD = ["onClick"], jD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, HD = {
  key: "secondary-point-1",
  class: "ma-0"
}, qD = {
  key: "secondary-point-2",
  class: "ma-0"
}, GD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Np = window.Vue.ref, Up = window.Codex.CdxButton, XD = window.Codex.CdxIcon, WD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Np(2), n = Np(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (u) => u === n.value, a = ke(), i = jc(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d,
      pageURLParameter: g,
      sectionURLParameter: r
    } = B(), l = () => {
      if (un) {
        const u = { sourcesection: r.value };
        i(
          c.value,
          d.value,
          g.value,
          u
        );
      } else
        a.push({ name: "sx-sentence-selector" });
    };
    return (u, p) => {
      const m = ED("i18n");
      return Ct(), sn("section", PD, [
        ko(Wn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Xn(() => [
            ys("section", FD, [
              ko(ri, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? ai((Ct(), sn("h2", MD, null, 512)), [
                    [m, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? ai((Ct(), sn("h2", ND, null, 512)), [
                    [m, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ii("", !0)
                ]),
                _: 1
              })
            ]),
            ys("section", UD, [
              ko(ri, { name: "mw-ui-animation-slide-start" }, {
                default: Xn(() => [
                  s(1) ? (Ct(), sn("div", {
                    key: "illustration-1",
                    innerHTML: Wn(VD)
                  }, null, 8, ID)) : s(2) ? (Ct(), sn("div", {
                    key: "illustration-2",
                    innerHTML: Wn($D)
                  }, null, 8, RD)) : ii("", !0)
                ]),
                _: 1
              })
            ]),
            ys("div", zD, [
              (Ct(!0), sn(AD, null, LD(t.value, (h) => (Ct(), sn("span", {
                key: `dot-${h}`,
                class: DD(["dot mx-1", { "dot-active": s(h) }]),
                role: "button",
                onClick: (f) => n.value = h
              }, null, 10, OD))), 128))
            ]),
            ys("section", jD, [
              ko(ri, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? ai((Ct(), sn("h3", HD, null, 512)), [
                    [m, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? ai((Ct(), sn("h3", qD, null, 512)), [
                    [m, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ii("", !0)
                ]),
                _: 1
              })
            ]),
            ys("div", GD, [
              ko(ri, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? (Ct(), Mp(Wn(Up), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": u.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Xn(() => [
                      ko(Wn(XD), { icon: Wn(Ws) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Ct(), Mp(Wn(Up), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: l
                  }, {
                    default: Xn(() => [
                      BD(TD(u.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : ii("", !0)
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
const KD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: WD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, YD = window.Vue.resolveComponent, JD = window.Vue.createVNode, ZD = window.Vue.normalizeClass, QD = window.Vue.openBlock, eT = window.Vue.createElementBlock;
function tT(e, t, n, o, s, a) {
  const i = YD("sx-quick-tutorial");
  return QD(), eT("main", {
    class: ZD(["sx-quick-tutorial-view", a.classes])
  }, [
    JD(i)
  ], 2);
}
const nT = /* @__PURE__ */ J(KD, [["render", tT]]);
const oT = window.Vue.resolveDirective, Ip = window.Vue.createElementVNode, sT = window.Vue.withDirectives, aT = window.Vue.unref, iT = window.Vue.withCtx, rT = window.Vue.createVNode, lT = window.Vue.openBlock, cT = window.Vue.createElementBlock, uT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, dT = { class: "sx-editor__original-content-panel__header mb-2" }, gT = ["lang", "dir", "innerHTML"], Rp = window.Vue.ref, pT = window.Vue.onMounted, mT = {
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
        g.href = q.getPageUrl(c, g.title), g.target = "_blank";
    }, o = Rp(null), s = Rp(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return pT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (i, c) => {
      const d = oT("i18n");
      return lT(), cT("section", uT, [
        sT(Ip("h5", dT, null, 512), [
          [d, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        rT(aT(U1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: iT(() => [
            Ip("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, gT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, hT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const fT = window.Vue.unref, Cs = window.Vue.createElementVNode, zp = window.Vue.resolveDirective, Bl = window.Vue.withDirectives, wT = window.Vue.normalizeClass, _T = window.Vue.openBlock, vT = window.Vue.createElementBlock, ST = window.Vue.createCommentVNode, yT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, CT = { class: "sx-editor__feedback-overlay-content px-4" }, bT = ["innerHTML"], kT = { class: "sx-editor__feedback-overlay-content__title" }, xT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Pl = window.Vue.computed, $T = {
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
    const t = e, { targetLanguageURLParameter: n } = B(), o = Pl(
      () => Rt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Pl(() => {
      const i = Rt.getScoreStatus(o.value);
      return i === "failure" ? o.value === 0 ? "failure" : "warning" : i;
    }), a = Pl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (i, c) => {
      const d = zp("i18n"), g = zp("i18n-html");
      return e.showFeedback ? (_T(), vT("div", yT, [
        Cs("div", CT, [
          Cs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: fT(hT)
          }, null, 8, bT),
          Bl(Cs("h2", kT, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Bl(Cs("p", xT, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Bl(Cs("p", {
            class: wT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : ST("", !0);
    };
  }
}, VT = window.Vuex.useStore, ET = () => {
  const e = VT(), t = Wc(), { selectNextTranslationUnit: n } = Io(), { sourceSection: o, selectedContentTranslationUnit: s } = K(), { getCurrentTitleByLanguage: a } = pn();
  return (i) => C(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), i = c.innerHTML;
    const { sourceLanguage: d, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof qe && (i = (yield ef(
      i,
      a(g, d),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const je = window.Vue.unref, Fl = window.Vue.openBlock, Ml = window.Vue.createBlock, Op = window.Vue.createCommentVNode, jp = window.Vue.createVNode, LT = window.Vue.createElementVNode, AT = window.Vue.withCtx, DT = { class: "sx-editor__editing-surface-container grow" }, Nl = window.Vue.ref, TT = window.Vue.computed, BT = window.Vuex.useStore, PT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Nl(!1), o = ke(), s = BT(), a = () => n.value = !0, i = () => o.replace({ name: t.fromRoute }), { isFinalEdit: c, isInitialEdit: d, content: g, originalContent: r, title: l } = history.state, u = Nl(null), p = Nl(!1), { logEditorSegmentAddEvent: m } = gf(), { targetLanguage: h, sourceLanguage: f } = ue(s), { sourceSection: _ } = K(), w = TT(
      () => Rt.calculateScore(
        u.value,
        g,
        h.value
      )
    ), y = ET(), S = (V) => C(this, null, function* () {
      u.value = V, p.value = !0;
      const k = new Promise((x) => setTimeout(x, 2e3));
      let D = Promise.resolve();
      c ? _.value.editedTranslation = V : (w.value === 0 && d && m(), D = y(V)), yield Promise.all([k, D]), p.value = !1, i();
    });
    return (V, k) => (Fl(), Ml(je(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: AT(() => [
        je(r) ? (Fl(), Ml(mT, {
          key: 0,
          language: je(f),
          dir: je(I.getDir)(je(f)),
          "original-content": je(r)
        }, null, 8, ["language", "dir", "original-content"])) : Op("", !0),
        n.value ? Op("", !0) : (Fl(), Ml(je(Xe), { key: 1 })),
        LT("div", DT, [
          jp($T, {
            "edited-translation": u.value,
            "show-feedback": p.value,
            "proposed-translation": je(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          jp(s4, {
            content: je(g),
            language: je(h),
            dir: je(I.getDir)(je(h)),
            title: je(l),
            onReady: a,
            onClose: i,
            onEditCompleted: S
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const FT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: PT
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
}, MT = window.Vue.resolveComponent, NT = window.Vue.createVNode, UT = window.Vue.normalizeClass, IT = window.Vue.openBlock, RT = window.Vue.createElementBlock;
function zT(e, t, n, o, s, a) {
  const i = MT("sx-editor");
  return IT(), RT("main", {
    class: UT(["sx-editor-view", a.classes])
  }, [
    NT(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const OT = /* @__PURE__ */ J(FT, [["render", zT]]);
const Nt = window.Vue.unref, Kn = window.Vue.createVNode, bs = window.Vue.withCtx, jT = window.Vue.resolveDirective, HT = window.Vue.withDirectives, qT = window.Vue.openBlock, GT = window.Vue.createBlock, Hp = window.Codex.CdxButton, qp = window.Codex.CdxIcon, XT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = ke(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = jT("i18n");
      return qT(), GT(Nt(P), { class: "ma-0 sx-publisher__header" }, {
        default: bs(() => [
          Kn(Nt(b), {
            shrink: "",
            class: "me-2"
          }, {
            default: bs(() => [
              Kn(Nt(Hp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: bs(() => [
                  Kn(Nt(qp), { icon: Nt(No) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          HT(Kn(Nt(b), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Kn(Nt(b), { shrink: "" }, {
            default: bs(() => [
              Kn(Nt(Hp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: bs(() => [
                  Kn(Nt(qp), { icon: Nt(kb) }, null, 8, ["icon"])
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
}, WT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, KT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Gp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Ul = window.Vue.createElementVNode, Xp = window.Vue.toDisplayString, Il = window.Vue.unref, Rl = window.Vue.withCtx, Wp = window.Vue.createVNode, YT = window.Vue.openBlock, JT = window.Vue.createBlock, ZT = window.Vue.createCommentVNode, QT = ["innerHTML"], e6 = ["textContent"], t6 = ["textContent"], zl = window.Vue.computed, n6 = {
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
    const t = pe(), n = e, o = {
      pending: {
        svg: WT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: KT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Gp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Gp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = zl(() => o[n.status].svg), a = zl(() => o[n.status].title), i = zl(() => o[n.status].subtitle);
    return (c, d) => e.active ? (YT(), JT(Il(ct), {
      key: 0,
      "overlay-opacity": "high",
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Rl(() => [
        Wp(Il(P), { class: "ma-4" }, {
          default: Rl(() => [
            Wp(Il(b), null, {
              default: Rl(() => [
                Ul("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, QT),
                Ul("h2", {
                  textContent: Xp(a.value)
                }, null, 8, e6),
                Ul("p", {
                  class: "ma-0",
                  textContent: Xp(i.value)
                }, null, 8, t6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : ZT("", !0);
  }
};
const He = window.Vue.unref, bt = window.Vue.createVNode, an = window.Vue.withCtx, o6 = window.Vue.resolveDirective, s6 = window.Vue.withDirectives, Kp = window.Vue.toDisplayString, a6 = window.Vue.createTextVNode, Ol = window.Vue.openBlock, Yp = window.Vue.createElementBlock, i6 = window.Vue.createCommentVNode, pf = window.Vue.createElementVNode, r6 = window.Vue.createBlock, l6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, c6 = ["src"], u6 = ["textContent"], d6 = /* @__PURE__ */ pf("p", { class: "mt-0" }, null, -1), g6 = window.Vue.computed, p6 = window.Vue.inject, m6 = window.Vue.ref, Jp = window.Codex.CdxButton, h6 = window.Codex.CdxIcon, f6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: eh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = m6(""), s = () => n("close"), a = () => n("publish", o.value), i = p6("breakpoints"), c = g6(() => i.value.mobile);
    return (d, g) => {
      const r = o6("i18n");
      return e.active && e.captchaDetails ? (Ol(), r6(He(ct), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: an(() => [
          bt(He(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: an(() => [
              bt(He(b), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: an(() => [
                  bt(He(Jp), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": d.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: an(() => [
                      bt(He(h6), { icon: He(No) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              s6(bt(He(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              bt(He(b), {
                shrink: "",
                class: "justify-center"
              }, {
                default: an(() => [
                  bt(He(Jp), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: an(() => [
                      a6(Kp(d.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          bt(He(fi))
        ]),
        default: an(() => [
          pf("div", l6, [
            e.captchaDetails.type === "image" ? (Ol(), Yp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, c6)) : (Ol(), Yp("p", {
              key: 1,
              textContent: Kp(e.captchaDetails.question)
            }, null, 8, u6)),
            d6,
            bt(He(P), { class: "ma-0" }, {
              default: an(() => [
                bt(He(b), null, {
                  default: an(() => [
                    bt(He(Ql), {
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
      }, 8, ["fullscreen"])) : i6("", !0);
    };
  }
};
const Yn = window.Vue.unref, ks = window.Vue.createVNode, li = window.Vue.withCtx, Jn = window.Vue.createElementVNode, w6 = window.Vue.resolveDirective, _6 = window.Vue.withDirectives, v6 = window.Vue.renderList, Zp = window.Vue.Fragment, jl = window.Vue.openBlock, Qp = window.Vue.createElementBlock, S6 = window.Vue.toDisplayString, y6 = window.Vue.normalizeClass, C6 = window.Vue.createBlock, b6 = { class: "mw-ui-dialog__header" }, k6 = { class: "row ma-0 px-4 py-3" }, x6 = { class: "col shrink justify-center" }, $6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, V6 = { class: "mb-0" }, E6 = { class: "pa-4" }, L6 = ["textContent"], A6 = window.Vuex.useStore, xs = window.Vue.computed, D6 = window.Codex.CdxButton, T6 = window.Codex.CdxIcon, B6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = A6(), s = xs(() => o.state.application.publishTarget), a = xs(() => o.state.translator.isAnon), i = pe(), { sourceSection: c } = K(), d = xs(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = xs(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = xs(() => [
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
      const f = w6("i18n");
      return jl(), C6(Yn(ct), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: u
      }, {
        header: li(() => [
          Jn("div", b6, [
            Jn("div", k6, [
              Jn("div", x6, [
                ks(Yn(D6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: u
                }, {
                  default: li(() => [
                    ks(Yn(T6), { icon: Yn(Lh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Jn("div", $6, [
                _6(Jn("h4", V6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ks(Yn(fi))
          ])
        ]),
        default: li(() => [
          Jn("div", E6, [
            ks(Yn(m1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: li(() => [
                (jl(!0), Qp(Zp, null, v6(r.value, (_, w) => (jl(), Qp(Zp, {
                  key: _.label
                }, [
                  ks(Yn(ec), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Jn("p", {
                    class: y6(["complementary ms-7 mt-0", l(w)]),
                    textContent: S6(_.details)
                  }, null, 10, L6)
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
const kt = window.Vue.unref, Zn = window.Vue.createVNode, P6 = window.Vue.resolveDirective, em = window.Vue.withDirectives, ci = window.Vue.openBlock, tm = window.Vue.createElementBlock, F6 = window.Vue.createCommentVNode, nm = window.Vue.toDisplayString, Hl = window.Vue.createElementVNode, xo = window.Vue.withCtx, om = window.Vue.createBlock, M6 = window.Vue.Fragment, N6 = window.Vue.normalizeClass, U6 = { class: "sx-publisher__review-info__content" }, I6 = {
  key: 0,
  class: "complementary ma-0"
}, R6 = ["textContent"], z6 = ["textContent"], En = window.Vue.computed, sm = window.Vue.ref, O6 = window.Vue.watch, am = window.Codex.CdxButton, ql = window.Codex.CdxIcon, j6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = sm(0), o = sm(null);
    O6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = En(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = En(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = En(() => {
      switch (a.value) {
        case "warning":
          return Vh;
        case "error":
          return bb;
        default:
          return $b;
      }
    }), c = En(() => a.value === "default"), d = En(
      () => c.value ? "notice" : a.value
    ), g = En(
      () => `sx-publisher__review-info--${d.value}`
    ), r = pe(), l = En(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), u = En(
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
      const _ = P6("i18n-html");
      return ci(), om(kt(I0), {
        type: d.value,
        class: N6(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: c.value
      }, {
        icon: xo(() => [
          Zn(kt(ql), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: xo(() => [
          Hl("div", U6, [
            a.value === "default" ? em((ci(), tm("p", I6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (ci(), tm(M6, { key: 1 }, [
              Hl("h5", {
                textContent: nm(u.value)
              }, null, 8, R6),
              Hl("p", {
                textContent: nm(l.value)
              }, null, 8, z6),
              Zn(kt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: xo(() => [
                  em(Zn(kt(b), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (ci(), om(kt(b), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: xo(() => [
                      Zn(kt(am), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: xo(() => [
                          Zn(kt(ql), { icon: kt(Uc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Zn(kt(am), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: xo(() => [
                          Zn(kt(ql), { icon: kt(Ws) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : F6("", !0)
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
}, H6 = (e) => {
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
}, q6 = window.Vuex.useStore, G6 = window.Vue.computed, X6 = () => {
  const e = q6(), { currentTranslation: t } = Ot(), { currentMTProvider: n, previousRoute: o } = ue(e), { currentTargetPage: s } = Ze(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    sectionURLParameter: d
  } = B(), { sourceSection: g } = K(), r = Ye(), l = G6(() => {
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
    if (d.value ? (h.translation_source_section = d.value, h.translation_type = "section") : h.translation_type = "article", t.value) {
      h.translation_id = t.value.translationId, h.translation_target_title = t.value.targetTitle;
      const _ = t.value.targetSectionTitle;
      _ && (h.translation_target_section = _);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = Y.getProviderForInstrumentation(n.value)), h.human_modification_rate = Rt.getMTScoreForPageSection(
      g.value,
      i.value
    ) / 100, h.human_modification_threshold = Rt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => r(de({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => r(de({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => r(de({
      event_type: "publish_failure"
    }, l.value))
  };
}, im = window.Vue.ref, W6 = window.Vuex.useStore, K6 = () => {
  const e = W6(), { pageURLParameter: t } = B(), { sourceSection: n, targetPageTitleForPublishing: o } = K(), s = uf(), a = im(!1), i = im("pending"), c = () => a.value = !1, d = Wc(), {
    logPublishAttemptEvent: g,
    logPublishSuccessEvent: r,
    logPublishFailureEvent: l
  } = X6(), u = (m, h) => C(void 0, null, function* () {
    g();
    const f = yield d();
    if (f instanceof Ao)
      return l(), { publishFeedbackMessage: f, targetUrl: null };
    const _ = f, {
      /** @type {PageSection} */
      sourceLanguage: w,
      targetLanguage: y
    } = e.state.application, S = o.value, V = e.getters["application/isSandboxTarget"], k = {
      html: H6(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: S,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: w,
      targetLanguage: y,
      revision: s.value,
      isSandbox: V,
      sectionTranslationId: _
    };
    m && (k.captchaId = m, k.captchaWord = h);
    const D = yield lt.publishTranslation(
      k
    );
    return D.publishFeedbackMessage === null ? r(D.pageId, D.revisionId) : l(), D;
  });
  return {
    closePublishDialog: c,
    doPublish: (m = null, h = null) => C(void 0, null, function* () {
      i.value = "pending", a.value = !0;
      let f;
      try {
        f = yield u(
          h == null ? void 0 : h.id,
          m
        );
      } catch (_) {
        if (_ instanceof Bo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw _;
      }
      return f;
    }),
    isPublishDialogActive: a,
    publishStatus: i
  };
}, Y6 = window.Vue.computed, J6 = () => {
  const e = ke(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = pn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = Y6(
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
}, Z6 = window.Vuex.useStore, Q6 = () => {
  const e = Z6(), { targetLanguage: t } = ue(e), { sourceSection: n } = K();
  return () => {
    const o = Rt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = Rt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, i = s === "failure" ? "error" : "warning";
    let c, d;
    return i === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Ao({
      title: c,
      text: d,
      status: i,
      type: "mt"
    });
  };
}, e9 = window.Vue.ref, t9 = window.Vue.computed, n9 = () => {
  const e = Q6(), t = e9([]), n = t9(
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
}, o9 = window.Vuex.useStore, s9 = () => {
  const e = o9(), { currentSourcePage: t } = Ze(), { sourceLanguage: n, targetLanguage: o } = ue(e), { sourceSection: s, targetPageTitleForPublishing: a } = K();
  return (i) => C(void 0, null, function* () {
    const c = a.value, d = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !d && r.getNamespaceId() !== l.user)
      try {
        yield $i.addWikibaseLink(
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
}, rm = window.Vue.ref, a9 = () => {
  const e = rm(!1), t = rm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const he = window.Vue.unref, Ne = window.Vue.createVNode, i9 = window.Vue.resolveDirective, $s = window.Vue.createElementVNode, r9 = window.Vue.withDirectives, $o = window.Vue.withCtx, l9 = window.Vue.openBlock, c9 = window.Vue.createElementBlock, u9 = { class: "sx-publisher" }, d9 = { class: "sx-publisher__publish-panel pa-4" }, g9 = { class: "mb-2" }, p9 = ["innerHTML"], m9 = { class: "sx-publisher__section-preview pa-5" }, h9 = ["innerHTML"], lm = window.Vue.computed, f9 = window.Vue.onMounted, w9 = window.Vue.ref, _9 = window.Vue.watch, v9 = window.Vuex.useStore, cm = window.Codex.CdxButton, um = window.Codex.CdxIcon, S9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = v9(), { sourceSection: n } = K(), o = lm(() => {
      var x;
      return (x = n.value) == null ? void 0 : x.title;
    }), s = pe(), a = lm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: c,
      handleCaptchaError: d,
      onCaptchaDialogClose: g
    } = a9(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: u,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = n9(), h = s9(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: y } = K6(), S = (x = null) => C(this, null, function* () {
      if (l.value)
        return;
      const F = yield f(x, i);
      if (!F)
        return;
      const { publishFeedbackMessage: N, targetUrl: M } = F;
      if (d(N)) {
        y();
        return;
      } else
        N && u(N);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          y();
          return;
        }
        h(M);
      }, 1e3);
    });
    f9(() => m());
    const V = J6(), k = w9(!1), D = () => k.value = !0;
    return _9(k, (x) => {
      x || (p(), m());
    }), (x, F) => {
      const N = i9("i18n");
      return l9(), c9("section", u9, [
        Ne(XT, {
          "is-publishing-disabled": he(l),
          onPublishTranslation: S
        }, null, 8, ["is-publishing-disabled"]),
        $s("div", d9, [
          r9($s("h5", g9, null, 512), [
            [N, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          $s("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, p9),
          Ne(he(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: $o(() => [
              Ne(he(b), { shrink: "" }, {
                default: $o(() => [
                  Ne(he(cm), {
                    weight: "quiet",
                    "aria-label": x.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: D
                  }, {
                    default: $o(() => [
                      Ne(he(um), { icon: he(Pb) }, null, 8, ["icon"])
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
        Ne(j6, { "publish-feedback-messages": he(r) }, null, 8, ["publish-feedback-messages"]),
        $s("section", m9, [
          Ne(he(P), { class: "pb-5 ma-0" }, {
            default: $o(() => [
              Ne(he(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ne(he(b), { shrink: "" }, {
                default: $o(() => [
                  Ne(he(cm), {
                    weight: "quiet",
                    "aria-label": x.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: he(V)
                  }, {
                    default: $o(() => [
                      Ne(he(um), { icon: he(Fc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          $s("div", {
            innerHTML: he(n).translationHtml
          }, null, 8, h9)
        ]),
        Ne(B6, {
          active: k.value,
          "onUpdate:active": F[0] || (F[0] = (M) => k.value = M)
        }, null, 8, ["active"]),
        Ne(f6, {
          active: he(c),
          "captcha-details": he(i),
          onClose: he(g),
          onPublish: F[1] || (F[1] = (M) => S(M))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ne(n6, {
          active: he(_),
          status: he(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const y9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: S9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, C9 = window.Vue.resolveComponent, b9 = window.Vue.createVNode, k9 = window.Vue.normalizeClass, x9 = window.Vue.openBlock, $9 = window.Vue.createElementBlock;
function V9(e, t, n, o, s, a) {
  const i = C9("sx-publisher");
  return x9(), $9("main", {
    class: k9(["sx-publisher-view", a.classes])
  }, [
    b9(i)
  ], 2);
}
const E9 = /* @__PURE__ */ J(y9, [["render", V9]]);
const xt = window.Vue.unref, Ln = window.Vue.createVNode, Qn = window.Vue.withCtx, Gl = window.Vue.toDisplayString, Xl = window.Vue.createElementVNode, L9 = window.Vue.openBlock, A9 = window.Vue.createBlock, D9 = ["textContent"], T9 = ["textContent"], B9 = ["textContent"], mf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Fo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (L9(), A9(xt(P), {
      class: "cx-search-suggestion pt-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: xt(I.getDir)(e.suggestion.language)
    }, {
      default: Qn(() => [
        Ln(xt(b), { shrink: "" }, {
          default: Qn(() => [
            Ln(xt(wc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Ln(xt(b), { class: "ms-4" }, {
          default: Qn(() => [
            Ln(xt(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Qn(() => [
                Ln(xt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    Xl("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Gl(e.suggestion.title)
                    }, null, 8, D9)
                  ]),
                  _: 1
                }),
                Ln(xt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    Xl("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Gl(e.suggestion.description)
                    }, null, 8, T9)
                  ]),
                  _: 1
                }),
                Ln(xt(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Qn(() => [
                    Ln(xt(Pe), {
                      icon: xt(o0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Xl("small", {
                      textContent: Gl(e.suggestion.langLinksCount)
                    }, null, 8, B9)
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
const Vs = window.Vue.unref, Es = window.Vue.openBlock, Wl = window.Vue.createBlock, P9 = window.Vue.createCommentVNode, F9 = window.Vue.resolveDirective, M9 = window.Vue.withDirectives, dm = window.Vue.createElementBlock, N9 = window.Vue.renderList, U9 = window.Vue.Fragment, I9 = window.Vue.withCtx, R9 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, gm = window.Vue.computed, z9 = {
  __name: "SearchResultsCard",
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguageURLParameter: t } = B(), n = gm(() => I.getAutonym(t.value)), o = e, s = gm(() => o.searchInput), { searchResultsLoading: a, searchResultsSlice: i } = Yh(
      t,
      s
    );
    return (c, d) => {
      const g = F9("i18n");
      return Es(), Wl(Vs(Ge), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: I9(() => [
          Vs(a) ? (Es(), Wl(Vs(Xe), { key: 0 })) : Vs(i).length === 0 ? M9((Es(), dm("p", R9, null, 512)), [
            [g, [
              s.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : P9("", !0),
          (Es(!0), dm(U9, null, N9(Vs(i), (r) => (Es(), Wl(mf, {
            key: r.pageid,
            suggestion: r,
            onClick: (l) => c.$emit("suggestion-clicked", r)
          }, null, 8, ["suggestion", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const O9 = window.Vue.toDisplayString, j9 = window.Vue.createElementVNode, H9 = window.Vue.renderList, q9 = window.Vue.Fragment, Kl = window.Vue.openBlock, G9 = window.Vue.createElementBlock, pm = window.Vue.createBlock, X9 = window.Vue.unref, mm = window.Vue.withCtx, W9 = ["textContent"], hm = {
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
    return (t, n) => (Kl(), pm(X9(Ge), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: mm(() => [
        j9("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: O9(e.cardTitle)
        }, null, 8, W9)
      ]),
      default: mm(() => [
        (Kl(!0), G9(q9, null, H9(e.suggestions, (o) => (Kl(), pm(mf, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
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
      label: I.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), J9 = window.Vue.computed, Z9 = () => {
  const { supportedLanguageCodes: e } = Po(), {
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
const Q9 = window.Vue.resolveDirective, eB = window.Vue.createElementVNode, Yl = window.Vue.withDirectives, Ue = window.Vue.unref, Ls = window.Vue.withCtx, Ut = window.Vue.createVNode, As = window.Vue.openBlock, fm = window.Vue.createBlock, tB = window.Vue.createCommentVNode, Jl = window.Vue.createElementBlock, nB = window.Vue.Fragment, oB = window.Vue.vShow, sB = { class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto" }, aB = { class: "mb-0" }, iB = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message my-0 px-4 py-16"
}, Vo = window.Vue.ref, rB = window.Vue.onMounted, wm = window.Vue.computed, _m = window.Vue.watch, lB = window.Vue.inject, cB = window.Vuex.useStore, uB = window.Codex.CdxButton, dB = window.Codex.CdxIcon, gB = window.Codex.CdxSearchInput, pB = 3, mB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Vo(""), n = Vo(!1), o = Vo(null), s = Vo(!1), a = Vo([]), i = cB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d
    } = B(), { supportedLanguageCodes: g } = Po(), { getSuggestedSourceLanguages: r } = Z9(), l = r(a), u = Y9(
      c,
      l
    ), p = ke(), { fetchAllTranslations: m } = Uo();
    rB(() => C(this, null, function* () {
      var O;
      m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (Z) {
      }
      (O = o.value) == null || O.focus();
    }));
    const h = () => {
      p.push({ name: "dashboard" });
    }, f = Zm(), _ = (O) => f(O, d.value), w = (O) => {
      if (O === "other") {
        s.value = !0;
        return;
      }
      _(O);
    };
    _m(c, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const y = Ye();
    _m(t, () => {
      n.value || (n.value = !0, y({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: d.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, V = (O) => {
      s.value = !1, a.value.push(c.value), w(O);
    }, { fetchPreviousEditsInSource: k, previousEditsInSource: D } = Vc(), x = Vo([]);
    (() => k().then(() => D.value.length > 0 ? to.fetchPages(
      c.value,
      D.value
    ) : []).then((O) => {
      O = O.slice(0, pB), O = O.sort(
        (Z, Ve) => D.value.indexOf(Z.title) - D.value.indexOf(Ve.title)
      ), x.value = O;
    }))();
    const N = wm(() => i.getters["mediawiki/getNearbyPages"]), M = lB("breakpoints"), X = wm(() => M.value.mobile), W = Ks(), re = (O, Z) => W(
      O.title,
      c.value,
      d.value,
      Z
    );
    return (O, Z) => {
      const Ve = Q9("i18n");
      return As(), Jl("section", sB, [
        Ut(Ue(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ls(() => [
            Ut(Ue(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ls(() => [
                Yl(eB("h5", aB, null, 512), [
                  [Ve, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Ut(Ue(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ls(() => [
                Ut(Ue(uB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": O.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: h
                }, {
                  default: Ls(() => [
                    Ut(Ue(dB), { icon: Ue(No) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ut(Ue(gB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": Z[0] || (Z[0] = (te) => t.value = te),
          class: "sx-article-search__search-input",
          placeholder: O.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Ut(Ue(Us), {
          class: "sx-article-search__language-button-group",
          items: Ue(u),
          active: Ue(c),
          onSelect: w
        }, null, 8, ["items", "active"]),
        t.value ? tB("", !0) : (As(), Jl(nB, { key: 0 }, [
          x.value && x.value.length ? (As(), fm(hm, {
            key: 0,
            "card-title": O.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: x.value,
            onSuggestionClicked: Z[1] || (Z[1] = (te) => re(te, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : N.value && N.value.length ? (As(), fm(hm, {
            key: 1,
            "card-title": O.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: N.value,
            onSuggestionClicked: Z[2] || (Z[2] = (te) => re(te, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : Yl((As(), Jl("p", iB, null, 512)), [
            [Ve, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Yl(Ut(z9, {
          "search-input": t.value,
          onSuggestionClicked: Z[3] || (Z[3] = (te) => re(te, "search_result"))
        }, null, 8, ["search-input"]), [
          [oB, !!t.value]
        ]),
        Ut(Ue(ct), {
          value: s.value,
          "onUpdate:value": Z[4] || (Z[4] = (te) => s.value = te),
          class: "sx-article-search-language-selector",
          fullscreen: X.value,
          header: X.value,
          title: O.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: Ls(() => [
            Ut(Ue(Gh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: Ue(g),
              suggestions: Ue(l),
              placeholder: O.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: V,
              onClose: S
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
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
}, fB = window.Vue.resolveComponent, wB = window.Vue.createVNode, _B = window.Vue.normalizeClass, vB = window.Vue.openBlock, SB = window.Vue.createElementBlock;
function yB(e, t, n, o, s, a) {
  const i = fB("sx-article-search");
  return vB(), SB("main", {
    class: _B(["sx-article-search-view", a.classes])
  }, [
    wB(i)
  ], 2);
}
const CB = /* @__PURE__ */ J(hB, [["render", yB]]), bB = () => {
  const e = Ks(), t = nf(), { logDashboardOpenEvent: n, getEventSource: o } = Zh(), {
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
}, kB = window.Vuex.useStore, hf = [
  {
    path: "",
    name: "dashboard",
    component: _g,
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
    component: DV,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: J3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: gE,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: nT,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: xD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: OT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: E9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: _g,
    meta: { workflowStep: 0 }
  }
], Kc = zC({
  history: Ry(),
  routes: hf
});
Kc.beforeEach((e, t, n) => {
  const o = kB(), s = bB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c
  } = B();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || km.assertUser().catch((u) => {
    u instanceof Bo && o.commit("application/setIsLoginDialogOn", !0);
  }), e.query.force) {
    n();
    return;
  }
  const d = !!(a.value && i.value && c.value);
  if (!t.name && d) {
    s(), e.name === "sx-translation-confirmer" ? n() : n({ name: "sx-translation-confirmer" });
    return;
  }
  const g = t.meta.workflowStep, r = e.meta.workflowStep;
  if (isNaN(g) && r >= 1) {
    n({ name: "dashboard" });
    return;
  }
  if (Math.ceil(r) - Math.floor(g) > 1) {
    const u = Math.ceil(r) - 1, p = hf.find(
      (m) => m.meta.workflowStep === u
    );
    n({ name: p.name });
    return;
  }
  n();
});
Kc.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const xB = window.Vue.createApp, $B = mw.config.get("wgUserLanguage"), VB = "en", EB = mw.messages.values || {}, Ro = xB(kS);
Ro.use(Kc);
Ro.use(ly);
Ro.use(Y1);
Ro.use(K1);
const LB = V_({
  locale: $B,
  finalFallback: VB,
  messages: EB,
  wikilinks: !0
});
Ro.use(LB);
Ro.mount("#contenttranslation");
