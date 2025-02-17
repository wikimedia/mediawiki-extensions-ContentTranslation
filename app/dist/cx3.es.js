/*@nomin*/
var sf = Object.defineProperty, af = Object.defineProperties;
var rf = Object.getOwnPropertyDescriptors;
var qc = Object.getOwnPropertySymbols;
var lf = Object.prototype.hasOwnProperty, cf = Object.prototype.propertyIsEnumerable;
var Gc = (e, t, n) => t in e ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, le = (e, t) => {
  for (var n in t || (t = {}))
    lf.call(t, n) && Gc(e, n, t[n]);
  if (qc)
    for (var n of qc(t))
      cf.call(t, n) && Gc(e, n, t[n]);
  return e;
}, We = (e, t) => af(e, rf(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (d) => {
    try {
      l(n.next(d));
    } catch (g) {
      s(g);
    }
  }, r = (d) => {
    try {
      l(n.throw(d));
    } catch (g) {
      s(g);
    }
  }, l = (d) => d.done ? o(d.value) : Promise.resolve(d.value).then(a, r);
  l((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxTextInput: s,
    CdxMenu: a
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxTextInput: s,
    CdxMenu: a
  };
}
const Q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, uf = {
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
}, df = window.Vue.toDisplayString, Di = window.Vue.openBlock, Ai = window.Vue.createElementBlock, gf = window.Vue.createCommentVNode, Xc = window.Vue.createElementVNode, pf = window.Vue.normalizeClass, mf = ["width", "height", "aria-labelledby"], hf = ["id"], ff = ["fill"], wf = ["d"];
function _f(e, t, n, o, s, a) {
  return Di(), Ai("span", {
    class: pf(["mw-ui-icon notranslate", a.classes])
  }, [
    (Di(), Ai("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Di(), Ai("title", {
        key: 0,
        id: n.iconName
      }, df(n.iconName), 9, hf)) : gf("", !0),
      Xc("g", { fill: n.iconColor }, [
        Xc("path", { d: a.iconImagePath }, null, 8, wf)
      ], 8, ff)
    ], 8, mf))
  ], 2);
}
const xe = /* @__PURE__ */ Q(uf, [["render", _f]]);
const vf = {
  name: "MwButton",
  components: {
    MwIcon: xe
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
}, Sf = window.Vue.renderSlot, yf = window.Vue.resolveComponent, Wc = window.Vue.normalizeClass, ta = window.Vue.openBlock, Ti = window.Vue.createBlock, Bi = window.Vue.createCommentVNode, Cf = window.Vue.toDisplayString, kf = window.Vue.createElementBlock, bf = window.Vue.toHandlerKey, xf = window.Vue.withModifiers, $f = window.Vue.mergeProps, Vf = window.Vue.createElementVNode, Ef = window.Vue.resolveDynamicComponent, Lf = window.Vue.withCtx, Df = { class: "mw-ui-button__content" }, Af = ["textContent"];
function Tf(e, t, n, o, s, a) {
  const r = yf("mw-icon");
  return ta(), Ti(Ef(a.component), {
    class: Wc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Lf(() => [
      Sf(e.$slots, "default", {}, () => [
        Vf("span", Df, [
          n.icon ? (ta(), Ti(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Wc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Bi("", !0),
          !a.isIcon && n.label ? (ta(), kf("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Cf(n.label)
          }, null, 8, Af)) : Bi("", !0),
          n.indicator ? (ta(), Ti(r, $f({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [bf(a.indicatorClickEvent)]: t[0] || (t[0] = xf((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Bi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const $e = /* @__PURE__ */ Q(vf, [["render", Tf]]);
const Bf = {
  name: "MwButtonGroup",
  components: {
    MwButton: $e
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
}, Pf = window.Vue.renderList, Ff = window.Vue.Fragment, Pi = window.Vue.openBlock, Kc = window.Vue.createElementBlock, Mf = window.Vue.resolveComponent, Nf = window.Vue.withModifiers, Uf = window.Vue.mergeProps, If = window.Vue.createBlock, Rf = { class: "row mw-ui-button-group ma-0 pa-0" };
function zf(e, t, n, o, s, a) {
  const r = Mf("mw-button");
  return Pi(), Kc("div", Rf, [
    (Pi(!0), Kc(Ff, null, Pf(n.items, (l) => (Pi(), If(r, Uf({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Nf((d) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Is = /* @__PURE__ */ Q(Bf, [["render", zf]]);
const Of = {
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
}, Yc = window.Vue.renderSlot, jf = window.Vue.toDisplayString, Jc = window.Vue.openBlock, Qc = window.Vue.createElementBlock, Hf = window.Vue.createCommentVNode, qf = window.Vue.createElementVNode, Gf = { class: "mw-ui-card" }, Xf = ["textContent"], Wf = { class: "mw-ui-card__content" };
function Kf(e, t, n, o, s, a) {
  return Jc(), Qc("div", Gf, [
    Yc(e.$slots, "header", {}, () => [
      n.title ? (Jc(), Qc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: jf(n.title)
      }, null, 8, Xf)) : Hf("", !0)
    ]),
    qf("div", Wf, [
      Yc(e.$slots, "default")
    ])
  ]);
}
const Ie = /* @__PURE__ */ Q(Of, [["render", Kf]]);
const Yf = {}, Jf = window.Vue.openBlock, Qf = window.Vue.createElementBlock, Zf = { class: "mw-ui-divider row" };
function ew(e, t) {
  return Jf(), Qf("div", Zf);
}
const di = /* @__PURE__ */ Q(Yf, [["render", ew]]);
const tw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, nw = window.Vue.renderSlot, ow = window.Vue.resolveDynamicComponent, sw = window.Vue.withCtx, aw = window.Vue.openBlock, iw = window.Vue.createBlock;
function rw(e, t, n, o, s, a) {
  return aw(), iw(ow(n.tag), { class: "mw-grid container" }, {
    default: sw(() => [
      nw(e.$slots, "default")
    ]),
    _: 3
  });
}
const lw = /* @__PURE__ */ Q(tw, [["render", rw]]), cw = {
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
}, uw = window.Vue.renderSlot, dw = window.Vue.resolveDynamicComponent, gw = window.Vue.normalizeClass, pw = window.Vue.withCtx, hw = window.Vue.openBlock, fw = window.Vue.createBlock;
function ww(e, t, n, o, s, a) {
  return hw(), fw(dw(n.tag), {
    class: gw(a.classes)
  }, {
    default: pw(() => [
      uw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ Q(cw, [["render", ww]]), Rl = ["mobile", "tablet", "desktop", "desktop-wide"], _w = Rl.reduce(
  (e, t) => We(le({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), vw = {
  name: "MwCol",
  props: We(le({}, _w), {
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
      for (let n = 0; n < Rl.length; n++) {
        let o = Rl[n], s = this.$props[o];
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
}, Sw = window.Vue.renderSlot, yw = window.Vue.resolveDynamicComponent, Cw = window.Vue.normalizeClass, kw = window.Vue.withCtx, bw = window.Vue.openBlock, xw = window.Vue.createBlock;
function $w(e, t, n, o, s, a) {
  return bw(), xw(yw(n.tag), {
    class: Cw(a.classes)
  }, {
    default: kw(() => [
      Sw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ Q(vw, [["render", $w]]), Vw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Ew = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Lw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", gi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Dw = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Aw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", im = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Tw = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Bw = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Rs = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Pw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Fw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Mw = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", zl = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Nw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", rm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Uw = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Iw = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Rw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", zw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Ow = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", jw = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, ai = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Hw = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, lm = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, qw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, cm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", Gw = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", Xw = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Ww = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Fi = window.Vue.computed, Kw = window.Vue.watch, Yw = window.Vue.ref, Jw = window.Vue.nextTick, Qw = {
  name: "MwDialog",
  components: {
    MwButton: $e,
    MwRow: P,
    MwCol: C,
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
    const n = Yw(null), o = Fi(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Fi(() => ({
      "mw-ui-dialog__overlay--high_opacity": e.overlayOpacity === "high"
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    Kw(
      () => e.value,
      (d) => {
        d ? (r(), Jw(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Fi(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClasses: s,
      mwIconClose: Rs,
      root: n
    };
  }
}, Zc = window.Vue.normalizeClass, Mi = window.Vue.createElementVNode, Ni = window.Vue.renderSlot, na = window.Vue.resolveComponent, Fo = window.Vue.createVNode, Ui = window.Vue.withCtx, eu = window.Vue.createCommentVNode, Zw = window.Vue.withKeys, tu = window.Vue.openBlock, e0 = window.Vue.createElementBlock, t0 = window.Vue.Transition, n0 = window.Vue.normalizeStyle, o0 = window.Vue.createBlock, s0 = { class: "mw-ui-dialog__shell items-stretch" }, a0 = { class: "mw-ui-dialog__body" };
function i0(e, t, n, o, s, a) {
  const r = na("mw-col"), l = na("mw-button"), d = na("mw-row"), g = na("mw-divider");
  return tu(), o0(t0, {
    name: "mw-ui-animation-fade",
    style: n0(o.cssVars)
  }, {
    default: Ui(() => [
      n.value ? (tu(), e0("div", {
        key: 0,
        ref: "root",
        class: Zc(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Zw((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Mi("div", {
          class: Zc(["mw-ui-dialog__overlay", o.overlayClasses]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Mi("div", s0, [
          n.header ? Ni(e.$slots, "header", { key: 0 }, () => [
            Fo(d, { class: "mw-ui-dialog__header" }, {
              default: Ui(() => [
                Fo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Fo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Ui(() => [
                    Fo(l, {
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
            Fo(g)
          ]) : eu("", !0),
          Mi("div", a0, [
            Ni(e.$slots, "default")
          ]),
          Ni(e.$slots, "footer")
        ])
      ], 34)) : eu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const st = /* @__PURE__ */ Q(Qw, [["render", i0]]);
const r0 = {
  name: "MwInput",
  components: {
    MwIcon: xe
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
      const t = le({}, e.$attrs);
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
}, nu = window.Vue.renderSlot, l0 = window.Vue.resolveComponent, oa = window.Vue.openBlock, Ii = window.Vue.createBlock, ou = window.Vue.createCommentVNode, c0 = window.Vue.resolveDynamicComponent, u0 = window.Vue.toDisplayString, d0 = window.Vue.mergeProps, g0 = window.Vue.withModifiers, p0 = window.Vue.createElementVNode, m0 = window.Vue.normalizeClass, h0 = window.Vue.createElementBlock, f0 = { class: "mw-ui-input__content" };
function w0(e, t, n, o, s, a) {
  const r = l0("mw-icon");
  return oa(), h0("div", {
    class: m0(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    p0("div", f0, [
      nu(e.$slots, "icon", {}, () => [
        n.icon ? (oa(), Ii(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : ou("", !0)
      ]),
      (oa(), Ii(c0(n.type === "textarea" ? n.type : "input"), d0({
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
        textContent: u0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      nu(e.$slots, "indicator", {}, () => [
        n.indicator ? (oa(), Ii(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = g0((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : ou("", !0)
      ])
    ])
  ], 2);
}
const ii = /* @__PURE__ */ Q(r0, [["render", w0]]);
const _0 = {
  name: "MwMessage",
  components: { MwCol: C, MwRow: P, MwIcon: xe, MwButton: $e },
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
    mwIconClose: Rs,
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
      notice: jw,
      warning: lm,
      success: ai,
      error: Hw
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
}, Ri = window.Vue.renderSlot, sa = window.Vue.resolveComponent, su = window.Vue.createVNode, au = window.Vue.withCtx, iu = window.Vue.openBlock, ru = window.Vue.createBlock, lu = window.Vue.createCommentVNode, v0 = window.Vue.normalizeClass;
function S0(e, t, n, o, s, a) {
  const r = sa("mw-icon"), l = sa("mw-col"), d = sa("mw-button"), g = sa("mw-row");
  return e.shown ? (iu(), ru(g, {
    key: 0,
    class: v0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: au(() => [
      Ri(e.$slots, "icon", {}, () => [
        su(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      su(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: au(() => [
          Ri(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Ri(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (iu(), ru(d, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : lu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : lu("", !0);
}
const y0 = /* @__PURE__ */ Q(_0, [["render", S0]]);
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
const C0 = {}, k0 = window.Vue.createElementVNode, b0 = window.Vue.openBlock, x0 = window.Vue.createElementBlock, $0 = { class: "mw-ui-spinner" }, V0 = /* @__PURE__ */ k0("div", { class: "mw-ui-spinner__bounce" }, null, -1), E0 = [
  V0
];
function L0(e, t) {
  return b0(), x0("div", $0, E0);
}
const Re = /* @__PURE__ */ Q(C0, [["render", L0]]), tt = {
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
const D0 = window.Vue.computed, A0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: xe },
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
      default: cm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: tt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: tt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = D0(() => {
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
}, cu = window.Vue.normalizeStyle, uu = window.Vue.openBlock, T0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const B0 = window.Vue.resolveComponent, P0 = window.Vue.createBlock;
function F0(e, t, n, o, s, a) {
  const r = B0("mw-ui-icon");
  return n.thumbnail ? (uu(), T0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: cu(o.style)
  }, null, 4)) : (uu(), P0(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: cu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const ac = /* @__PURE__ */ Q(A0, [["render", F0]]);
const M0 = {
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
}, N0 = window.Vue.vModelRadio, si = window.Vue.createElementVNode, U0 = window.Vue.withDirectives, I0 = window.Vue.toDisplayString, R0 = window.Vue.resolveComponent, z0 = window.Vue.normalizeClass, O0 = window.Vue.withCtx, j0 = window.Vue.openBlock, H0 = window.Vue.createBlock, q0 = { class: "mw-ui-radio__controls" }, G0 = ["id", "disabled", "name", "value"], X0 = /* @__PURE__ */ si("span", { class: "mw-ui-radio__controls__icon" }, null, -1), W0 = ["for", "textContent"];
function K0(e, t, n, o, s, a) {
  const r = R0("mw-row");
  return j0(), H0(r, {
    class: z0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: O0(() => [
      si("div", q0, [
        U0(si("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, G0), [
          [N0, a.inputModel]
        ]),
        X0
      ]),
      si("label", {
        for: n.id,
        class: "ps-2",
        textContent: I0(n.label)
      }, null, 8, W0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Ol = /* @__PURE__ */ Q(M0, [["render", K0]]), du = window.Vue.h, Y0 = {
  name: "MwRadioGroup",
  components: { MwRadio: Ol },
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
      (o) => du(Ol, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), du("div", { class: "mw-ui-radio-group" }, n);
  }
};
const J0 = {
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
}, gu = window.Vue.normalizeClass, pu = window.Vue.normalizeStyle, Q0 = window.Vue.createElementVNode, Z0 = window.Vue.openBlock, e1 = window.Vue.createElementBlock, t1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function n1(e, t, n, o, s, a) {
  return Z0(), e1("div", {
    class: gu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: pu(a.containerStyles)
  }, [
    Q0("div", {
      class: gu(["mw-progress-bar__bar", a.barClass]),
      style: pu(a.barStyles)
    }, null, 6)
  ], 14, t1);
}
const um = /* @__PURE__ */ Q(J0, [["render", n1]]), o1 = (e, t, n, o) => (s) => {
  const a = s.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (g) => {
    o.value = !1;
    let i = Math.min(
      r + g.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
  }, d = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      l,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      d,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", l, !1), document.documentElement.addEventListener("pointerup", d, !1);
}, s1 = (e, t, n, o) => ({ initiateDrag: o1(
  e,
  t,
  n,
  o
) }), a1 = window.Vue.ref, mu = window.Vue.computed, i1 = (e, t, n, o) => {
  const s = a1(0), a = mu(
    () => t.value > e.value
  ), r = mu(
    () => t.value <= e.value * (s.value + 1)
  ), l = (g) => {
    s.value = g, n.value.scroll(0, e.value * s.value);
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
const aa = window.Vue.ref, r1 = window.Vue.onMounted, hu = window.Vue.computed, l1 = window.Vue.nextTick, c1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: $e
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
    const t = aa(!0), n = aa(null), o = hu(
      () => Math.min(e.minHeight, s.value)
    ), s = aa(1), { initiateDrag: a } = s1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: d,
      scrollToStepByIndex: g,
      handleArrowUpClick: i
    } = i1(o, s, n, t), c = () => g(d.value + 1), u = aa(null), p = hu(() => ({
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
    return r1(() => b(this, null, function* () {
      var f;
      yield l1(), s.value = n.value.scrollHeight, (f = u.value) == null || f.addEventListener(
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
      mwIconCollapse: qw,
      mwIconExpand: Tw,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: d,
      scrollToNextStep: c
    };
  }
}, u1 = window.Vue.renderSlot, d1 = window.Vue.normalizeClass, ia = window.Vue.createElementVNode, g1 = window.Vue.resolveComponent, p1 = window.Vue.createVNode, zi = window.Vue.openBlock, m1 = window.Vue.createBlock, fu = window.Vue.createCommentVNode, wu = window.Vue.createElementBlock, h1 = window.Vue.normalizeStyle, f1 = { class: "mw-ui-expandable-content__container" }, w1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, _1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function v1(e, t, n, o, s, a) {
  const r = g1("mw-button");
  return zi(), wu("div", {
    class: "mw-ui-expandable-content",
    style: h1(o.cssVars)
  }, [
    ia("div", f1, [
      ia("div", {
        ref: "contentRef",
        class: d1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        u1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (zi(), wu("div", w1, [
        p1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (zi(), m1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : fu("", !0)
      ])) : fu("", !0)
    ]),
    ia("div", _1, [
      ia("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const S1 = /* @__PURE__ */ Q(c1, [["render", v1]]);
const ra = window.Vue.computed, y1 = {
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
      default: tt.blue600
    },
    inactiveColor: {
      type: String,
      default: tt.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = ra(() => e.size / 2 * 0.9), n = ra(() => Math.PI * (t.value * 2)), o = ra(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ra(() => ({
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
}, _u = window.Vue.createElementVNode, vu = window.Vue.normalizeStyle, C1 = window.Vue.openBlock, k1 = window.Vue.createElementBlock, b1 = ["width", "height", "viewport"], x1 = ["r", "cx", "cy", "stroke-dasharray"], $1 = ["r", "cx", "cy", "stroke-dasharray"];
function V1(e, t, n, o, s, a) {
  return C1(), k1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: vu(o.cssVars)
  }, [
    _u("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, x1),
    _u("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: vu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, $1)
  ], 12, b1);
}
const E1 = /* @__PURE__ */ Q(y1, [["render", V1]]), L1 = window.Vue.ref, cn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, un = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${cn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${cn.tablet}px) and (max-width: ${cn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${cn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${cn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${cn.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${cn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${cn["desktop-wide"]}px)`
}, Oi = {
  mobile: () => matchMedia(un.mobile).matches,
  tablet: () => matchMedia(un.tablet).matches,
  desktop: () => matchMedia(un.desktop).matches,
  desktopwide: () => matchMedia(un["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(un["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(un["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(un["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(un["desktop-and-down"]).matches
}, D1 = {
  install: (e) => {
    const t = () => {
      for (let o in Oi)
        Oi.hasOwnProperty(o) && (n.value[o] = Oi[o]());
    }, n = L1({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = We(le({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, A1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = We(le({}, e.config.globalProperties.$mwui || {}), {
      colors: tt
    }), e.provide("colors", tt);
  }
};
class Vo extends Error {
}
const T1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Vo();
}), dm = { assertUser: T1 };
const B1 = window.Vue.resolveDirective, Mo = window.Vue.createElementVNode, Su = window.Vue.withDirectives, P1 = window.Vue.toDisplayString, F1 = window.Vue.unref, yu = window.Vue.withCtx, M1 = window.Vue.openBlock, N1 = window.Vue.createBlock, U1 = window.Vue.createCommentVNode, I1 = { class: "pa-4 sx-login-dialog__header" }, R1 = { class: "sx-login-dialog__body px-6 pb-4" }, z1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, O1 = ["href"], j1 = window.Vue.computed, H1 = window.Vue.ref, q1 = window.Vuex.useStore, G1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = q1(), n = j1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = H1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = B1("i18n");
      return n.value ? (M1(), N1(F1(st), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: yu(() => [
          Mo("div", I1, [
            Su(Mo("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: yu(() => [
          Su(Mo("div", R1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          Mo("div", z1, [
            Mo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, P1(a.$i18n("cx-sx-login-dialog-button-label")), 9, O1)
          ])
        ]),
        _: 1
      })) : U1("", !0);
    };
  }
}, q = new mw.cx.SiteMapper(), X1 = mw.util.getUrl, W1 = () => {
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
    pageRevision: l,
    status: d,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = d, this.targetTitle = g;
  }
}
const la = "original", ca = "empty", K1 = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class J {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      la,
      ca
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return K1[t] || t;
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
    return la;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return ca;
  }
  static isUserMTProvider(t) {
    return [la, ca].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === ca ? "blank" : t === la ? "source" : t.toLowerCase();
  }
}
class bn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = We(le({}, a), {
      [J.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [J.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [J.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [J.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[J.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Cu = (e) => {
  var n;
  const t = ri(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ri = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Qn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), gm = (e) => {
  const t = ri(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = Y1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, Y1 = (e) => {
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
}, pm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, mm = (e) => {
  const t = pm(e);
  return t == null ? void 0 : t.targetExists;
};
class ji {
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
class Ue {
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
      (a) => Qn(a)
    );
    s && mm(s) && (this.blockTemplateAdaptationInfo[t] = pm(s));
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
      (t) => Qn(t)
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
    return this.isBlockTemplate ? Cu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Qn(o));
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
    return n && Cu(n) || "";
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
      (a) => Qn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new ji({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new ji({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new ji({
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
    if (!t || J.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => Qn(s)
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
const J1 = [
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
], Q1 = (e, t, n) => {
  let o, s, a, r, l;
  return !e || !t ? 0 : e === t ? 1 : (s = r = ku(e, n), a = l = ku(t, n), l.length > r.length && (s = l, a = r), o = s.filter(function(d) {
    return a.indexOf(d) >= 0;
  }), o.length / s.length);
}, ku = function(e, t) {
  return e ? J1.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, hm = 95, Z1 = 85, e_ = [
  { status: "failure", value: 100 - hm },
  { status: "warning", value: 100 - Z1 },
  { status: "success", value: 100 }
], fm = (e, t, n) => {
  const o = bu(e).textContent, s = bu(t).textContent, a = 100 - 100 * Q1(s, o, n);
  return Math.ceil(a);
}, t_ = (e) => e_.find((t) => e <= t.value).status, n_ = (e, t) => fm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), o_ = () => (100 - hm) / 100, bu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Bt = {
  calculateScore: fm,
  getScoreStatus: t_,
  getMTScoreForPageSection: n_,
  getMtModificationThreshold: o_
}, ua = "__LEAD_SECTION__";
class jl {
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
      [J.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [J.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [J.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [J.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return ua;
  }
  static isSectionLead(t) {
    return !t || t === ua;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[J.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[J.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof Ue ? n.transclusionNode.outerHTML : n instanceof bn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ue ? t.blockTemplateSelected = !1 : t instanceof bn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ue ? n.blockTemplateSelected = !0 : n instanceof bn && (n.selected = !0);
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
    if (o instanceof Ue)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof bn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ue ? n.blockTemplateProposedTranslations[t] || "" : n instanceof bn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ue ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof bn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Bt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? ua : this.originalTitle;
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
    return this.isLeadSection ? ua : this.title;
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
class ic extends pi {
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
    startTimestamp: l,
    lastUpdatedTimestamp: d,
    status: g,
    pageRevision: i,
    targetTitle: c,
    sourceSectionTitle: u,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: l,
      lastUpdatedTimestamp: d,
      pageRevision: i,
      status: g,
      targetTitle: c
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
    return jl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? jl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Ct = "previous-edits", Pt = "popular", ze = "topic", pe = "collections", yt = "automatic", nt = "seed", xu = window.Vue.ref, s_ = mw.loader.require("ext.cx.articletopics"), da = {
  type: yt,
  id: Ct
}, wm = () => {
  const e = xu(
    s_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = xu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const r = s == null ? void 0 : s.toLowerCase(), l = a == null ? void 0 : a.toLowerCase();
    return r === ze ? e.value.some((d) => d === a) ? { type: r, id: l } : (t.value = !0, da) : r === pe || r === nt ? { type: r, id: a } : l === Ct ? {
      type: yt,
      id: Ct
    } : l === Pt ? {
      type: yt,
      id: Pt
    } : l === pe ? {
      type: yt,
      id: pe
    } : da;
  }, isDefaultFilter: ({ type: s, id: a }) => s === da.type && a === da.id };
}, a_ = window.Vue.inject, i_ = window.Vue.reactive;
var r_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, _m = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(r_, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(c) {
        this.locale = c;
      }
      convertPlural(c, u) {
        const p = /\d+=/i;
        if (!u || u.length === 0)
          return "";
        for (let h = 0; h < u.length; h++) {
          const f = u[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === c)
              return f.slice(f.indexOf("=") + 1);
            u[h] = void 0;
          }
        }
        u = u.filter((h) => !!h);
        let m = this.getPluralForm(c, this.locale);
        return m = Math.min(m, u.length - 1), u[m];
      }
      getPluralForm(c, u) {
        const p = new Intl.PluralRules(u), m = p.resolvedOptions().pluralCategories, h = p.select(c);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(c, u = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (u) {
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
      convertGrammar(c, u) {
        return c;
      }
      gender(c, u) {
        if (!u || u.length === 0)
          return "";
        for (; u.length < 2; )
          u.push(u[u.length - 1]);
        return c === "male" ? u[0] : c === "female" ? u[1] : u.length === 3 ? u[2] : u[0];
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
        let u = i.match(/[aou][^äöy]*$/i);
        const p = i;
        switch (i.match(/wiki$/i) && (u = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), c) {
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
        let u, p, m, h;
        switch (u = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), u = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), c) {
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
      emit(c, u) {
        let p, m, h;
        switch (typeof c) {
          case "string":
          case "number":
            p = c;
            break;
          case "object":
            if (m = c.slice(1).map((f) => this.emit(f, u)), h = c[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, u);
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
        let u = "";
        return c.forEach((p) => {
          u += p;
        }), u;
      }
      replace(c, u) {
        const p = parseInt(c[0], 10);
        return p < u.length ? u[p] : "$" + (p + 1);
      }
      plural(c) {
        const u = parseFloat(this.language.convertNumber(c[0], 10)), p = c.slice(1);
        return p.length ? this.language.convertPlural(u, p) : "";
      }
      gender(c) {
        const u = c[0], p = c.slice(1);
        return this.language.gender(u, p);
      }
      grammar(c) {
        const u = c[0], p = c[1];
        return p && u && this.language.convertGrammar(p, u);
      }
      wikilink(c) {
        let u, p = c[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return u = c.length === 1 ? p : c[1], `<a href="${m}" title="${p}">${u}</a>`;
      }
      extlink(c) {
        if (c.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${c[0]}">${c[1]}</a>`;
      }
      bidi(c) {
        const u = function(p) {
          const m = p.match(r);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(c[0]);
        return u === "ltr" ? "‪" + c[0] + "‬" : u === "rtl" ? "‫" + c[0] + "‬" : c[0];
      }
      formatnum(c) {
        const u = !!c[1] && c[1] === "R", p = c[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, u) : p;
      }
      htmlattributes(c) {
        const u = {};
        for (let p = 0, m = c.length; p < m; p += 2)
          u[c[p]] = c[p + 1];
        return u;
      }
      htmlelement(c) {
        const u = c.shift(), p = c.shift();
        let m = c, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${u}${h}>${m.join("")}</${u}>`;
      }
    }
    class d {
      constructor(c, { wikilinks: u = !1 } = {}) {
        this.locale = c, this.wikilinks = u, this.emitter = new l(this.locale);
      }
      parse(c, u) {
        if (c.includes("{{") || c.includes("<") || this.wikilinks && c.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function w(E) {
              return () => {
                for (let I = 0; I < E.length; I++) {
                  const Ae = E[I]();
                  if (Ae !== null)
                    return Ae;
                }
                return null;
              };
            }
            function _(E) {
              const I = f, Ae = [];
              for (let It = 0; It < E.length; It++) {
                const Rt = E[It]();
                if (Rt === null)
                  return f = I, null;
                Ae.push(Rt);
              }
              return Ae;
            }
            function S(E, I) {
              return () => {
                const Ae = f, It = [];
                let Rt = I();
                for (; Rt !== null; )
                  It.push(Rt), Rt = I();
                return It.length < E ? (f = Ae, null) : It;
              };
            }
            function y(E) {
              const I = E.length;
              return () => {
                let Ae = null;
                return m.slice(f, f + I) === E && (Ae = E, f += I), Ae;
              };
            }
            function k(E) {
              return () => {
                const I = m.slice(f).match(E);
                return I === null ? null : (f += I[0].length, I[0]);
              };
            }
            const V = k(/^\s+/), B = y("|"), x = y(":"), F = y("\\"), U = k(/^./), M = y("$"), N = k(/^\d+/), G = y('"'), H = y("'"), Ft = k(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), at = k(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), me = w([De, k(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function De() {
              const E = _([F, U]);
              return E === null ? null : E[1];
            }
            const it = w([De, at]), Dn = w([De, Ft]);
            function Mt() {
              const E = _([M, N]);
              return E === null ? null : ["REPLACE", parseInt(E[1], 10) - 1];
            }
            const Ge = (ln = k(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Nt = function(E) {
              return E.toString();
            }, () => {
              const E = ln();
              return E === null ? null : Nt(E);
            });
            var ln, Nt;
            function Ut() {
              const E = _([B, S(0, Qs)]);
              if (E === null)
                return null;
              const I = E[1];
              return I.length > 1 ? ["CONCAT"].concat(I) : I[0];
            }
            function Xe() {
              const E = _([Ge, x, Mt]);
              return E === null ? null : [E[0], E[2]];
            }
            function v() {
              const E = _([Ge, x, Qs]);
              return E === null ? null : [E[0], E[2]];
            }
            function L() {
              const E = _([Ge, x]);
              return E === null ? null : [E[0], ""];
            }
            const D = w([function() {
              const E = _([w([Xe, v, L]), S(0, Ut)]);
              return E === null ? null : E[0].concat(E[1]);
            }, function() {
              const E = _([Ge, S(0, Ut)]);
              return E === null ? null : [E[0]].concat(E[1]);
            }]), A = y("{{"), X = y("}}"), ae = y("[["), O = y("]]"), R = y("["), ee = y("]");
            function rt() {
              const E = _([A, D, X]);
              return E === null ? null : E[1];
            }
            const _e = w([function() {
              const E = _([S(1, Qs), B, S(1, Js)]);
              return E === null ? null : [["CONCAT"].concat(E[0]), ["CONCAT"].concat(E[2])];
            }, function() {
              const E = _([S(1, Qs)]);
              return E === null ? null : [["CONCAT"].concat(E[0])];
            }]);
            function Uc() {
              let E = null;
              const I = _([ae, _e, O]);
              if (I !== null) {
                const Ae = I[1];
                E = ["WIKILINK"].concat(Ae);
              }
              return E;
            }
            function Ic() {
              let E = null;
              const I = _([R, S(1, Qh), V, S(1, Js), ee]);
              return I !== null && (E = ["EXTLINK", I[1].length === 1 ? I[1][0] : ["CONCAT"].concat(I[1]), ["CONCAT"].concat(I[3])]), E;
            }
            const bi = k(/^[A-Za-z]+/);
            function Wh() {
              const E = k(/^[^"]*/), I = _([G, E, G]);
              return I === null ? null : I[1];
            }
            function Kh() {
              const E = k(/^[^']*/), I = _([H, E, H]);
              return I === null ? null : I[1];
            }
            function Yh() {
              const E = k(/^\s*=\s*/), I = _([V, bi, E, w([Wh, Kh])]);
              return I === null ? null : [I[1], I[3]];
            }
            function Jh() {
              const E = S(0, Yh)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], E);
            }
            const Qh = w([rt, Mt, Uc, Ic, function() {
              const E = S(1, me)();
              return E === null ? null : E.join("");
            }]), Js = w([rt, Mt, Uc, Ic, function() {
              let E = null;
              const I = f, Ae = y("<"), It = k(/^\/?/), Rt = k(/^\s*>/), xi = _([Ae, bi, Jh, It, Rt]);
              if (xi === null)
                return null;
              const zc = f, Oc = xi[1], $i = S(0, Js)(), Zh = f, jc = _([y("</"), bi, Rt]);
              if (jc === null)
                return ["CONCAT", m.slice(I, zc)].concat($i);
              const ef = f, tf = jc[1], Hc = xi[2];
              if (function(An, Zs, Vi, Ei = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((An = An.toLowerCase()) !== (Zs = Zs.toLowerCase()) || Ei.allowedHtmlElements.indexOf(An) === -1)
                  return !1;
                const nf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ea = 0, of = Vi.length; ea < of; ea += 2) {
                  const Li = Vi[ea];
                  if (Ei.allowedHtmlCommonAttributes.indexOf(Li) === -1 && (Ei.allowedHtmlAttributesByElement[An] || []).indexOf(Li) === -1 || Li === "style" && Vi[ea + 1].search(nf) !== -1)
                    return !1;
                }
                return !0;
              }(Oc, tf, Hc.slice(1)))
                E = ["HTMLELEMENT", Oc, Hc].concat($i);
              else {
                const An = (Zs) => Zs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                E = ["CONCAT", An(m.slice(I, zc))].concat($i, An(m.slice(Zh, ef)));
              }
              return E;
            }, function() {
              const E = S(1, Dn)();
              return E === null ? null : E.join("");
            }]), Qs = w([rt, Mt, function() {
              const E = S(1, it)();
              return E === null ? null : E.join("");
            }]), Rc = function() {
              const E = S(0, Js)();
              return E === null ? null : ["CONCAT"].concat(E);
            }();
            if (Rc === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return Rc;
          }(c, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, u);
        }
        return this.simpleParse(c, u);
      }
      simpleParse(c, u) {
        return c.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return u[h] !== void 0 ? u[h] : "$" + m;
        });
      }
    }
    class g {
      constructor(c) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(c, u) {
        if (typeof c != "object")
          throw new Error("Invalid message source. Must be an object");
        if (u) {
          if (!/^[a-zA-Z0-9-]+$/.test(u))
            throw new Error(`Invalid locale ${u}`);
          for (const p in c)
            if (p.indexOf("@") !== 0) {
              if (typeof c[p] == "object")
                return this.load(c);
              if (typeof c[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${u} locale.`);
              break;
            }
          this.sourceMap.has(u) ? this.sourceMap.set(u, Object.assign(this.sourceMap.get(u), c)) : this.sourceMap.set(u, c);
        } else
          for (u in c)
            this.load(c[u], u);
      }
      getMessage(c, u) {
        const p = this.sourceMap.get(u);
        return p ? p[c] : null;
      }
      hasLocale(c) {
        return this.sourceMap.has(c);
      }
    }
    return class {
      constructor(i, { finalFallback: c = "en", messages: u, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new d(this.locale, { wikilinks: p }), this.messageStore = new g(), u && this.load(u, this.locale), this.finalFallback = c, this.wikilinks = p;
      }
      load(i, c) {
        return this.messageStore.load(i, c || this.locale);
      }
      i18n(i, ...c) {
        return this.parser.parse(this.getMessage(i), c);
      }
      setLocale(i) {
        this.locale = i, this.parser = new d(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let c = this.locale, u = 0;
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
          c = p[u], u++;
        }
        return i;
      }
      registerParserPlugin(i, c) {
        l.prototype[i] = c;
      }
    };
  });
})(_m);
var l_ = _m.exports;
const $u = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, vm = Symbol("banana-context");
function ue() {
  const e = a_(vm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function c_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = i_(new l_(e.locale, e));
  return {
    install: (n) => {
      n.provide(vm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = $u(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = $u(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const En = window.Vue.ref, u_ = window.Vue.computed, mi = En(null), hi = En(null), fi = En(null), Eo = En(null), wi = En(null), Sm = En(null), ym = En(null), rc = En(null), { validateFilters: d_, filtersValidatorError: g_ } = wm(), Cm = {
  from: mi,
  to: hi,
  section: Eo,
  draft: wi,
  page: fi,
  "active-list": rc
}, p_ = u_(() => ({
  type: Sm.value,
  id: ym.value
})), km = (e, t) => {
  Sm.value = e, ym.value = t, li("filter-type", e), t && li("filter-id", t);
}, m_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Cm[o].value = s;
  }
  e instanceof ic && (t.set("draft", !0), wi.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), Eo.value = e.sourceSectionTitle)), t.delete("title"), zs(Object.fromEntries(t));
}, lc = (e, t) => {
  Cm[e].value = t, li(e, t);
}, h_ = (e) => {
  lc("section", e);
}, f_ = (e) => {
  lc("page", e);
}, w_ = (e) => {
  lc("active-list", e);
}, zs = (e) => {
  history.replaceState(
    {},
    document.title,
    X1("Special:ContentTranslation", e)
  );
}, __ = () => {
  const e = ue(), t = new URLSearchParams(location.search);
  fi.value = t.get("page"), mi.value = t.get("from"), hi.value = t.get("to"), Eo.value = t.get("section"), rc.value = t.get("active-list");
  const n = d_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  km(n.type, n.id), g_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, v_ = () => {
  const e = new URLSearchParams(location.search);
  Eo.value = null, e.delete("section"), e.delete("title"), zs(Object.fromEntries(e));
}, li = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), zs(Object.fromEntries(n));
}, S_ = (e) => new URLSearchParams(location.search).get(e), y_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), mi.value = e, hi.value = t, n.delete("title"), zs(Object.fromEntries(n));
}, C_ = () => {
  const e = new URLSearchParams(location.search);
  fi.value = null, Eo.value = null, wi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("title"), zs(Object.fromEntries(e));
}, T = () => ({
  setLanguageURLParams: y_,
  setSectionURLParam: h_,
  setTranslationURLParams: m_,
  initializeURLState: __,
  clearTranslationURLParameters: C_,
  clearSectionURLParameter: v_,
  setUrlParam: li,
  getUrlParam: S_,
  pageURLParameter: fi,
  sourceLanguageURLParameter: mi,
  targetLanguageURLParameter: hi,
  sectionURLParameter: Eo,
  draftURLParameter: wi,
  setPageURLParam: f_,
  currentSuggestionFilters: p_,
  setFilterURLParams: km,
  activeDashboardTabParameter: rc,
  setActiveDashboardTabParameter: w_
});
const k_ = window.Vue.resolveDynamicComponent, Vu = window.Vue.openBlock, Eu = window.Vue.createBlock, b_ = window.Vue.Transition, No = window.Vue.withCtx, Uo = window.Vue.createVNode, x_ = window.Vue.resolveComponent, Hi = window.Vue.unref, $_ = window.Vuex.useStore, V_ = window.Vue.computed, E_ = window.Vue.onMounted, L_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = T();
    t();
    const n = $_(), o = V_(
      () => n.state.application.autoSavePending
    );
    return E_(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && dm.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof Vo && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const r = x_("router-view");
      return Vu(), Eu(Hi(lw), { id: "contenttranslation" }, {
        default: No(() => [
          Uo(Hi(P), { class: "cx-container" }, {
            default: No(() => [
              Uo(Hi(C), { cols: "12" }, {
                default: No(() => [
                  Uo(r, null, {
                    default: No(({ Component: l, route: d }) => [
                      Uo(b_, {
                        name: d.meta.transitionName
                      }, {
                        default: No(() => [
                          (Vu(), Eu(k_(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Uo(G1)
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
}, D_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, A_ = {
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
  ),
  getDraftTranslation: (e) => (t, n, o, s) => e.translations.filter((a) => a.status === "draft").find(
    /** @param {DraftTranslation} translation */
    (a) => a.sourceTitle === t && a.sectionTitleMatches(n) && a.sourceLanguage === o && a.targetLanguage === s
  ),
  translationExists: (e) => (
    /**
     * @param {Translation} translation
     */
    (t) => {
      const n = e.translations.filter(
        (a) => a.status === t.status
      ), o = n.some(
        (a) => !!a.sectionTranslationId && a.sectionTranslationId === t.sectionTranslationId
      ), s = n.some(
        (a) => !a.sectionTranslationId && a.translationId === t.translationId
      );
      return o || s;
    }
  )
};
class bm {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Co {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new bm(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Lu = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => We(le({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class T_ {
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
    const t = Lu((s = this.user) == null ? void 0 : s.content), n = Lu((a = this.mt) == null ? void 0 : a.content);
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
class cc extends pi {
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
    pageRevision: l,
    status: d,
    targetTitle: g,
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
      status: d,
      targetTitle: g
    }), this.targetUrl = i, this.sectionTranslations = c;
  }
}
const _i = mw.user.isAnon() ? void 0 : "user", xm = (e) => {
  if (e === "assertuserfailed")
    throw new Vo();
};
function $m(e, t = null) {
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
        (d) => new ic(We(le({}, d), { status: e }))
      ) : r = a.map(
        (d) => new cc(We(le({}, d), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const d = yield $m(
          e,
          s.continue.offset
        );
        r = r.concat(d);
      }
      return r;
    }));
  });
}
function B_(e) {
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
      (a) => new T_(a)
    );
  });
}
function P_(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== J.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = q.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, d]) => {
      var i, c;
      if (!d) {
        const u = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(u);
      }
      return (c = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : c.content;
    }).catch((l) => Promise.reject(l));
  });
}
const F_ = (e, t, n) => {
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
}, M_ = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: l,
  captchaId: d,
  captchaWord: g,
  isSandbox: i,
  sectionTranslationId: c
}) => {
  const u = {
    assert: _i,
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
    sectiontranslationid: c
  };
  return d && (u.captchaid = d, u.captchaword = g), new mw.Api().postWithToken("csrf", u).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new Co({
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
    xm(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new Co({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, N_ = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: d,
  isSandbox: g,
  progress: i
}) => {
  const c = {
    assert: _i,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: d,
    issandbox: g,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", c).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    xm(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Co({ text: h, status: "error" });
  });
}, U_ = (e) => {
  const t = {
    assert: _i,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, I_ = () => {
  const e = {
    assert: _i,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new cc(n.cxcheckunreviewed.translation)
  );
}, R_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, z_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, O_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), ot = {
  fetchTranslations: $m,
  fetchTranslationUnits: B_,
  fetchSegmentTranslation: P_,
  parseTemplateWikitext: F_,
  publishTranslation: M_,
  saveTranslation: N_,
  deleteTranslation: R_,
  fetchTranslatorStats: O_,
  deleteCXTranslation: z_,
  splitTranslation: U_,
  checkUnreviewedTranslations: I_
};
function j_(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield ot.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const H_ = {
  fetchTranslatorStats: j_
}, q_ = {
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
}, G_ = {
  namespaced: !0,
  state: D_,
  getters: A_,
  actions: H_,
  mutations: q_
}, Vm = [
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
], X_ = [
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
], W_ = [
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
], K_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Y_ = [
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
], J_ = {
  en: Vm,
  es: X_,
  bn: W_,
  fr: K_,
  de: Y_
}, Q_ = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
  /** @type FavoriteSuggestion[] */
  favorites: [],
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
  appendixSectionTitles: J_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, Z_ = {
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
};
class Lo {
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
    suggestionProvider: l = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = l, this.isListable = !0;
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
class $n {
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
    sourceSections: l = [],
    targetSections: d = [],
    isListable: g = !0,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = l, this.targetSections = d, this.isListable = g, this.suggestionProvider = i;
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
class ko {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class uc {
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
class Em extends Lo {
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
    collection: d = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: r,
      suggestionProvider: l
    }), this.collection = new uc(d);
  }
}
class Lm extends $n {
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
    targetSections: d = [],
    isListable: g = !0,
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
      targetSections: d,
      isListable: g,
      suggestionProvider: i
    }), this.collection = new uc(c);
  }
}
const ev = Vm, sn = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function tv() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield sn({ urlPostfix: t, urlParams: e })) || []).map((o) => new uc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function nv(e, t, n, o = 24) {
  return b(this, null, function* () {
    return ((yield sn({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (r) => new Lo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
const ov = (e, t) => b(void 0, null, function* () {
  return ((yield sn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new Lo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), sv = (e, t) => b(void 0, null, function* () {
  const s = (yield sn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new $n({
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
}), av = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield sn({ urlParams: o })) || []).map(
    (a) => new Em({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), iv = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield sn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new Lm({
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
function rv(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new $n(a) : null;
  });
}
function lv(e, t, n) {
  return b(this, null, function* () {
    const a = (yield sn({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (r) => new $n({
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
function cv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield sn({ urlParams: s })) || []).map(
      (r) => new Lo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function uv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield sn({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new $n({
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
function dv(e) {
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
    }, n = q.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function gv(e, t) {
  return b(this, null, function* () {
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
function pv(e, t) {
  return b(this, null, function* () {
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
function mv(e) {
  const t = ev.map((o) => encodeURIComponent(o)).join("|"), n = q.getCXServerUrl(
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
const hv = (e, t, n) => {
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
}, wv = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new ko(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, se = {
  fetchFavorites: wv,
  fetchPageSuggestions: nv,
  fetchSectionSuggestion: rv,
  fetchSectionSuggestions: lv,
  fetchSuggestionSeeds: gv,
  fetchAppendixTargetSectionTitles: mv,
  fetchSuggestionSourceSections: pv,
  markFavorite: hv,
  unmarkFavorite: fv,
  fetchUserEdits: dv,
  fetchMostPopularPageSuggestions: ov,
  fetchMostPopularSectionSuggestions: sv,
  fetchPageSuggestionsByTopics: cv,
  fetchSectionSuggestionsByTopics: uv,
  fetchPageCollections: tv,
  fetchPageSuggestionsByCollections: av,
  fetchSectionSuggestionsByCollections: iv
};
function _v(o, s) {
  return b(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield se.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const vv = {
  fetchAppendixSectionTitles: _v
}, Sv = {
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
  }
}, yv = {
  namespaced: !0,
  state: Q_,
  getters: Z_,
  actions: vv,
  mutations: Sv
}, Cv = {
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
}, kv = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== J.EMPTY_TEXT_PROVIDER_KEY,
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
class Do {
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
    pageprops: l,
    pageviews: d,
    thumbnail: g,
    title: i,
    revisions: c,
    _alias: u,
    content: p = null,
    sections: m = []
  } = {}) {
    var h;
    this.language = r, this.title = i, this.pageId = a, this.description = t, this.image = s, this.pageprops = l, this.pageviews = d, this.thumbnail = g, this.langLinksCount = n, this.articleSize = (h = c == null ? void 0 : c[0]) == null ? void 0 : h.size, this.revision = o, this.alias = u, this.wikidataId = l == null ? void 0 : l.wikibase_item, this.content = p, this.sections = m;
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
class bv {
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
function xv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const $v = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), xv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, Vv = (e, t) => {
  let n, o;
  return t ? (n = $v(e), o = n.$element.find(
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
}, Ev = (e, t) => {
  const n = Array.from(
    Vv(e, t)
  );
  return Lv(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let l = "";
      const d = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = a.textContent.trim() : r.unshift(a);
      const g = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (c) => new Ue({
          sentences: Dv(c),
          node: c
        })
      ), i = !l;
      return new jl({ id: d, title: l, subSections: g, isLeadSection: i });
    }
  );
}, Lv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, Dv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new bn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Dm = {
  convertSegmentedContentToPageSections: Ev
}, dc = 120, Av = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: dc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => We(le({}, i), { [c.to]: c.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (i, c) => We(le({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = g[i.title] || l[i.title] || null;
      return new Do(We(le({}, i), { _alias: c }));
    });
  });
}, Tv = (e, t) => {
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
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return l ? Object.freeze(new bv(l, r)) : null;
  });
}, Bv = (e, t, n) => {
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
  return q.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((l) => {
    var d, g;
    return (g = (d = l.langlinks) == null ? void 0 : d[0]) == null ? void 0 : g["*"];
  }).filter((l) => !!l));
}, Pv = (e, t, n, o = null) => Am(
  e,
  t,
  n,
  o
).then(
  (s) => new Do({
    sections: Dm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Am = (e, t, n, o = null) => {
  const s = q.getWikiDomainCode(e), a = q.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const d = q.getCXServerUrl(
    l,
    r
  );
  return fetch(d).then((g) => g.json()).then((g) => g.segmentedContent);
}, Fv = (e) => b(void 0, null, function* () {
  const t = W1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: dc,
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
  return yield q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Do(s))).catch((o) => []);
}), Mv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: dc,
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
      (a) => new Do(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, Ao = {
  fetchPages: Av,
  fetchLanguageTitles: Tv,
  fetchPageContent: Pv,
  fetchSegmentedContent: Am,
  fetchNearbyPages: Fv,
  searchPagesByTitlePrefix: Mv,
  fetchLanguageLinksForLanguage: Bv
};
function Nv() {
  return q.getLanguagePairs().then((e) => e.sourceLanguages);
}
function Uv(e, t) {
  return b(this, null, function* () {
    const n = q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new J(e, t, o.mt)
      )
    );
  });
}
function Iv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Rv(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = q.getWikiDomainCode(e), r = q.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, d = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(d.postWithToken("csrf", l)).then((g) => {
    const c = {
      action: "tag",
      revid: g.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(d.postWithToken("csrf", c));
  });
}
const vi = {
  fetchSupportedLanguageCodes: Nv,
  fetchSupportedMTProviders: Uv,
  fetchCXServerToken: Iv,
  addWikibaseLink: Rv
};
function zv({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const l = o.slice(r, r + s), d = Ao.fetchPages(n, l).then(
      (g) => g.forEach((i) => t("addPage", i))
    );
    a.push(d);
  }
  return Promise.all(a);
}
function Ov(n) {
  return b(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield vi.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function jv(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield Ao.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const Hv = {
  fetchNearbyPages: jv,
  fetchPageMetadata: zv,
  fetchSupportedLanguageCodes: Ov
}, qv = {
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
}, Gv = {
  namespaced: !0,
  state: Cv,
  getters: kv,
  actions: Hv,
  mutations: qv
}, Xv = {
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
  previousRoute: null
}, Wv = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, Kv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Qn(a)
  );
  return s && mm(s) ? ot.parseTemplateWikitext(
    gm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Tm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Qn(a)
  );
  return s ? ot.parseTemplateWikitext(
    gm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Yv = (o) => b(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, r;
  t.cxServerToken || (yield vi.fetchCXServerToken().then(
    (l) => {
      l.age <= 30 && (l.age = 3600);
      const d = Math.floor(Date.now() / 1e3);
      l.refreshAt = d + l.age - 30, n("setCXServerToken", l);
    },
    (l) => {
      if (l === "token-impossible") {
        const d = Math.floor(Date.now() / 1e3);
        n("setCXServerToken", { jwt: "", refreshAt: d + 3600 * 10 });
      }
    }
  ));
  const s = Math.floor(Date.now() / 1e3);
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (r = t.cxServerToken) == null ? void 0 : r.jwt;
}), Jv = { getCXServerToken: Yv }, Qv = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = J.getStorageKey(
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
  }
}, Zv = {
  namespaced: !0,
  state: Xv,
  getters: Wv,
  actions: Jv,
  mutations: Qv
}, eS = window.Vuex.createStore, tS = eS({
  modules: { translator: G_, suggestions: yv, mediawiki: Gv, application: Zv }
});
function nS() {
  return Bm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Bm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const oS = typeof Proxy == "function", sS = "devtools-plugin:setup", aS = "plugin:settings:set";
let eo, Hl;
function iS() {
  var e;
  return eo !== void 0 || (typeof window != "undefined" && window.performance ? (eo = !0, Hl = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (eo = !0, Hl = global.perf_hooks.performance) : eo = !1), eo;
}
function rS() {
  return iS() ? Hl.now() : Date.now();
}
class lS {
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
        return rS();
      }
    }, n && n.on(aS, (r, l) => {
      r === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, l) => this.target ? this.target.on[l] : (...d) => {
        this.onQueue.push({
          method: l,
          args: d
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...d) => (this.targetQueue.push({
        method: l,
        args: d,
        resolve: () => {
        }
      }), this.fallbacks[l](...d)) : (...d) => new Promise((g) => {
        this.targetQueue.push({
          method: l,
          args: d,
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
function cS(e, t) {
  const n = e, o = Bm(), s = nS(), a = oS && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(sS, e, t);
  else {
    const r = a ? new lS(n, s) : null;
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
const Pm = window.Vue.getCurrentInstance, bo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Tt = window.Vue.computed, Ts = window.Vue.unref, uS = window.Vue.watchEffect, Fm = window.Vue.defineComponent, dS = window.Vue.reactive, Mm = window.Vue.h, qi = window.Vue.provide, gS = window.Vue.ref, Nm = window.Vue.watch, pS = window.Vue.shallowRef, mS = window.Vue.shallowReactive, hS = window.Vue.nextTick, on = typeof window != "undefined";
function fS(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const W = Object.assign;
function Gi(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Oe(s) ? s.map(e) : e(s);
  }
  return n;
}
const Bs = () => {
}, Oe = Array.isArray;
function j(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const wS = /\/$/, _S = (e) => e.replace(wS, "");
function Xi(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let d = t.indexOf("?");
  return l < d && l >= 0 && (d = -1), d > -1 && (o = t.slice(0, d), a = t.slice(d + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = yS(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function vS(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Du(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Au(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Vn(t.matched[o], n.matched[s]) && Um(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Vn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Um(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!SS(e[n], t[n]))
      return !1;
  return !0;
}
function SS(e, t) {
  return Oe(e) ? Tu(e, t) : Oe(t) ? Tu(t, e) : e === t;
}
function Tu(e, t) {
  return Oe(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function yS(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return j(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Fs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Fs || (Fs = {}));
var Ps;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Ps || (Ps = {}));
function CS(e) {
  if (!e)
    if (on) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), _S(e);
}
const kS = /^[^#]+#/;
function bS(e, t) {
  return e.replace(kS, "#") + t;
}
function xS(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Si = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function $S(e) {
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
    t = xS(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Bu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ql = /* @__PURE__ */ new Map();
function VS(e, t) {
  ql.set(e, t);
}
function ES(e) {
  const t = ql.get(e);
  return ql.delete(e), t;
}
let LS = () => location.protocol + "//" + location.host;
function Im(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, d = s.slice(l);
    return d[0] !== "/" && (d = "/" + d), Du(d, "");
  }
  return Du(n, e) + o + s;
}
function DS(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: u }) => {
    const p = Im(e, location), m = n.value, h = t.value;
    let f = 0;
    if (u) {
      if (n.value = p, t.value = u, r && r === m) {
        r = null;
        return;
      }
      f = h ? u.position - h.position : 0;
    } else
      o(p);
    s.forEach((w) => {
      w(n.value, m, {
        delta: f,
        type: Fs.pop,
        direction: f ? f > 0 ? Ps.forward : Ps.back : Ps.unknown
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
    u.state && u.replaceState(W({}, u.state, { scroll: Si() }), "");
  }
  function c() {
    for (const u of a)
      u();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: d,
    listen: g,
    destroy: c
  };
}
function Pu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Si() : null
  };
}
function AS(e) {
  const { history: t, location: n } = window, o = {
    value: Im(e, n)
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
    const c = e.indexOf("#"), u = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + d : LS() + e + d;
    try {
      t[i ? "replaceState" : "pushState"](g, "", u), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? j("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](u);
    }
  }
  function r(d, g) {
    const i = W({}, t.state, Pu(
      s.value.back,
      // keep back and forward entries but override current position
      d,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(d, i, !0), o.value = d;
  }
  function l(d, g) {
    const i = W(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: d,
        scroll: Si()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && j(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = W({}, Pu(o.value, d, null), { position: i.position + 1 }, g);
    a(d, c, !1), o.value = d;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function TS(e) {
  e = CS(e);
  const t = AS(e), n = DS(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = W({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: bS.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function BS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && j(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), TS(e);
}
function PS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Rm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const dn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Gl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Fu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Fu || (Fu = {}));
const FS = {
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
    return `Redirected from "${e.fullPath}" to "${NS(t)}" via a navigation guard.`;
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
function xo(e, t) {
  return {}.NODE_ENV !== "production" ? W(new Error(FS[e](t)), {
    type: e,
    [Gl]: !0
  }, t) : W(new Error(), {
    type: e,
    [Gl]: !0
  }, t);
}
function zt(e, t) {
  return e instanceof Error && Gl in e && (t == null || !!(e.type & t));
}
const MS = ["params", "query", "hash"];
function NS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of MS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Mu = "[^/]+?", US = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, IS = /[.+*?^${}()[\]/\\]/g;
function RS(e, t) {
  const n = W({}, US, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const i = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let c = 0; c < g.length; c++) {
      const u = g[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (u.type === 0)
        c || (s += "/"), s += u.value.replace(IS, "\\$&"), p += 40;
      else if (u.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: w } = u;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const _ = w || Mu;
        if (_ !== Mu) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + y.message);
          }
        }
        let S = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        c || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && g.length < 2 ? `(?:/${S})` : "/" + S), f && (S += "?"), s += S, p += 20, f && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
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
  function l(g) {
    const i = g.match(r), c = {};
    if (!i)
      return null;
    for (let u = 1; u < i.length; u++) {
      const p = i[u] || "", m = a[u - 1];
      c[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return c;
  }
  function d(g) {
    let i = "", c = !1;
    for (const u of e) {
      (!c || !i.endsWith("/")) && (i += "/"), c = !1;
      for (const p of u)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, w = m in g ? g[m] : "";
          if (Oe(w) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = Oe(w) ? w.join("/") : w;
          if (!_)
            if (f)
              u.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
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
    stringify: d
  };
}
function zS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function OS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = zS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Nu(o))
      return 1;
    if (Nu(s))
      return -1;
  }
  return s.length - o.length;
}
function Nu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const jS = {
  type: 0,
  value: ""
}, HS = /[a-zA-Z0-9_]/;
function qS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[jS]];
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
  let l = 0, d, g = "", i = "";
  function c() {
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
  for (; l < e.length; ) {
    if (d = e[l++], d === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        d === "/" ? (g && c(), r()) : d === ":" ? (c(), n = 1) : u();
        break;
      case 4:
        u(), n = o;
        break;
      case 1:
        d === "(" ? n = 2 : HS.test(d) ? u() : (c(), n = 0, d !== "*" && d !== "?" && d !== "+" && l--);
        break;
      case 2:
        d === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + d : n = 3 : i += d;
        break;
      case 3:
        c(), n = 0, d !== "*" && d !== "?" && d !== "+" && l--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), c(), r(), s;
}
function GS(e, t, n) {
  const o = RS(qS(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && j(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = W(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function XS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Ru({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, u) {
    const p = !u, m = WS(i);
    ({}).NODE_ENV !== "production" && QS(m, c), m.aliasOf = u && u.record;
    const h = Ru(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const S = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of S)
        f.push(W({}, m, {
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
    let w, _;
    for (const S of f) {
      const { path: y } = S;
      if (c && y[0] !== "/") {
        const k = c.record.path, V = k[k.length - 1] === "/" ? "" : "/";
        S.path = c.record.path + (y && V + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = GS(S, c, h), {}.NODE_ENV !== "production" && c && y[0] === "/" && ZS(w, c), u ? (u.alias.push(w), {}.NODE_ENV !== "production" && JS(u, w)) : (_ = _ || w, _ !== w && _.alias.push(w), p && i.name && !Iu(w) && r(i.name)), m.children) {
        const k = m.children;
        for (let V = 0; V < k.length; V++)
          a(k[V], w, u && u.children[V]);
      }
      u = u || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && d(w);
    }
    return _ ? () => {
      r(_);
    } : Bs;
  }
  function r(i) {
    if (Rm(i)) {
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
  function d(i) {
    let c = 0;
    for (; c < n.length && OS(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !zm(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Iu(i) && o.set(i.record.name, i);
  }
  function g(i, c) {
    let u, p = {}, m, h;
    if ("name" in i && i.name) {
      if (u = o.get(i.name), !u)
        throw xo(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((S) => !u.keys.find((y) => y.name === S));
        _.length && j(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = u.record.name, p = W(
        // paramsFromLocation is a new object
        Uu(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          u.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Uu(i.params, u.keys.map((_) => _.name))
      ), m = u.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && j(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), u = n.find((_) => _.re.test(m)), u && (p = u.parse(m), h = u.record.name);
    else {
      if (u = c.name ? o.get(c.name) : n.find((_) => _.re.test(c.path)), !u)
        throw xo(1, {
          location: i,
          currentLocation: c
        });
      h = u.record.name, p = W({}, c.params, i.params), m = u.stringify(p);
    }
    const f = [];
    let w = u;
    for (; w; )
      f.unshift(w.record), w = w.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: YS(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: g, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Uu(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function WS(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: KS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function KS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Iu(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function YS(e) {
  return e.reduce((t, n) => W(t, n.meta), {});
}
function Ru(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Xl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function JS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Xl.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Xl.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function QS(e, t) {
  t && t.record.name && !e.name && !e.path && j(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function ZS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Xl.bind(null, n)))
      return j(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function zm(e, t) {
  return t.children.some((n) => n === e || zm(e, n));
}
const Om = /#/g, ey = /&/g, ty = /\//g, ny = /=/g, oy = /\?/g, jm = /\+/g, sy = /%5B/g, ay = /%5D/g, Hm = /%5E/g, iy = /%60/g, qm = /%7B/g, ry = /%7C/g, Gm = /%7D/g, ly = /%20/g;
function gc(e) {
  return encodeURI("" + e).replace(ry, "|").replace(sy, "[").replace(ay, "]");
}
function cy(e) {
  return gc(e).replace(qm, "{").replace(Gm, "}").replace(Hm, "^");
}
function Wl(e) {
  return gc(e).replace(jm, "%2B").replace(ly, "+").replace(Om, "%23").replace(ey, "%26").replace(iy, "`").replace(qm, "{").replace(Gm, "}").replace(Hm, "^");
}
function uy(e) {
  return Wl(e).replace(ny, "%3D");
}
function dy(e) {
  return gc(e).replace(Om, "%23").replace(oy, "%3F");
}
function gy(e) {
  return e == null ? "" : dy(e).replace(ty, "%2F");
}
function Ms(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && j(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function py(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(jm, " "), r = a.indexOf("="), l = Ms(r < 0 ? a : a.slice(0, r)), d = r < 0 ? null : Ms(a.slice(r + 1));
    if (l in t) {
      let g = t[l];
      Oe(g) || (g = t[l] = [g]), g.push(d);
    } else
      t[l] = d;
  }
  return t;
}
function zu(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = uy(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Oe(o) ? o.map((a) => a && Wl(a)) : [o && Wl(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function my(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Oe(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const hy = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ou = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), yi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Xm = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Kl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Io() {
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
function xn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const d = (c) => {
      c === !1 ? l(xo(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : PS(c) ? l(xo(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? fy(d, t, n) : d);
    let i = Promise.resolve(g);
    if (e.length < 3 && (i = i.then(d)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        i = i.then((u) => d._called ? u : (j(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !d._called) {
        j(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function fy(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && j(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Wi(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && j(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw j(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          j(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const d = l;
          l = () => d;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, j(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (wy(l)) {
          const g = (l.__vccOpts || l)[t];
          g && s.push(xn(g, n, o, a, r));
        } else {
          let d = l();
          ({}).NODE_ENV !== "production" && !("catch" in d) && (j(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), d = Promise.resolve(d)), s.push(() => d.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = fS(g) ? g.default : g;
            a.components[r] = i;
            const u = (i.__vccOpts || i)[t];
            return u && xn(u, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function wy(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ju(e) {
  const t = bo(yi), n = bo(Xm), o = Tt(() => t.resolve(Ts(e.to))), s = Tt(() => {
    const { matched: d } = o.value, { length: g } = d, i = d[g - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const u = c.findIndex(Vn.bind(null, i));
    if (u > -1)
      return u;
    const p = Hu(d[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Hu(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(Vn.bind(null, d[g - 2])) : u
    );
  }), a = Tt(() => s.value > -1 && yy(n.params, o.value.params)), r = Tt(() => s.value > -1 && s.value === n.matched.length - 1 && Um(n.params, o.value.params));
  function l(d = {}) {
    return Sy(d) ? t[Ts(e.replace) ? "replace" : "push"](
      Ts(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Bs) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && on) {
    const d = Pm();
    if (d) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(g), uS(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Tt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const _y = /* @__PURE__ */ Fm({
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
  useLink: ju,
  setup(e, { slots: t }) {
    const n = dS(ju(e)), { options: o } = bo(yi), s = Tt(() => ({
      [qu(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [qu(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Mm("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), vy = _y;
function Sy(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function yy(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Oe(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Hu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const qu = (e, t, n) => e != null ? e : t != null ? t : n, Cy = /* @__PURE__ */ Fm({
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
    ({}).NODE_ENV !== "production" && by();
    const o = bo(Kl), s = Tt(() => e.route || o.value), a = bo(Ou, 0), r = Tt(() => {
      let g = Ts(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[g]) && !c.components; )
        g++;
      return g;
    }), l = Tt(() => s.value.matched[r.value]);
    qi(Ou, Tt(() => r.value + 1)), qi(hy, l), qi(Kl, s);
    const d = gS();
    return Nm(() => [d.value, l.value, e.name], ([g, i, c], [u, p, m]) => {
      i && (i.instances[c] = g, p && p !== i && g && g === u && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), g && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Vn(i, p) || !u) && (i.enterCallbacks[c] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, i = e.name, c = l.value, u = c && c.components[i];
      if (!u)
        return Gu(n.default, { Component: u, route: g });
      const p = c.props[i], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, f = Mm(u, W({}, m, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (c.instances[i] = null);
        },
        ref: d
      }));
      if ({}.NODE_ENV !== "production" && on && f.ref) {
        const w = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Oe(f.ref) ? f.ref.map((S) => S.i) : [f.ref.i]).forEach((S) => {
          S.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Gu(n.default, { Component: f, route: g }) || f
      );
    };
  }
});
function Gu(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const ky = Cy;
function by() {
  const e = Pm(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function Ro(e, t) {
  const n = W({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => By(o, ["instances", "children", "aliasOf"]))
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
function ga(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let xy = 0;
function $y(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = xy++;
  cS({
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
        value: Ro(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const u = c.__vrv_devtools;
        i.tags.push({
          label: (u.name ? `${u.name.toString()}: ` : "") + u.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Wm
        });
      }
      Oe(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((u) => {
        let p = Jm, m = "";
        u.isExactActive ? (p = Ym, m = "This is exactly active") : u.isActive && (p = Km, m = "This link is active"), i.tags.push({
          label: u.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), Nm(t.currentRoute, () => {
      d(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
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
      const u = {
        guard: ga("beforeEach"),
        from: Ro(c, "Current Location during this navigation"),
        to: Ro(i, "Target location")
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
    }), t.afterEach((i, c, u) => {
      const p = {
        guard: ga("afterEach")
      };
      u ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: u ? u.message : "",
          tooltip: "Navigation Failure",
          value: u
        }
      }, p.status = ga("❌")) : p.status = ga("✅"), p.from = Ro(c, "Current Location during this navigation"), p.to = Ro(i, "Target location"), s.addTimelineEvent({
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
    const l = "router-inspector:" + o;
    s.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function d() {
      if (!g)
        return;
      const i = g;
      let c = n.getRoutes().filter((u) => !u.parent);
      c.forEach(eh), i.filter && (c = c.filter((u) => (
        // save matches state based on the payload
        Yl(u, i.filter.toLowerCase())
      ))), c.forEach((u) => Zm(u, t.currentRoute.value)), i.rootNodes = c.map(Qm);
    }
    let g;
    s.on.getInspectorTree((i) => {
      g = i, i.app === e && i.inspectorId === l && d();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const u = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        u && (i.state = {
          options: Ey(u)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function Vy(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Ey(e) {
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
        display: e.keys.map((o) => `${o.name}${Vy(o)}`).join(" "),
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
const Wm = 15485081, Km = 2450411, Ym = 8702998, Ly = 2282478, Jm = 16486972, Dy = 6710886;
function Qm(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Ly
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Jm
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Wm
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Ym
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Km
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Dy
  });
  let o = n.__vd_id;
  return o == null && (o = String(Ay++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Qm)
  };
}
let Ay = 0;
const Ty = /^\/(.*)\/([a-z]*)$/;
function Zm(e, t) {
  const n = t.matched.length && Vn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Vn(o, e.record))), e.children.forEach((o) => Zm(o, t));
}
function eh(e) {
  e.__vd_match = !1, e.children.forEach(eh);
}
function Yl(e, t) {
  const n = String(e.re).match(Ty);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Yl(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ms(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Yl(r, t));
}
function By(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Py(e) {
  const t = XS(e.routes, e), n = e.parseQuery || py, o = e.stringifyQuery || zu, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Io(), r = Io(), l = Io(), d = pS(dn);
  let g = dn;
  on && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Gi.bind(null, (v) => "" + v), c = Gi.bind(null, gy), u = (
    // @ts-expect-error: intentionally avoid the type check
    Gi.bind(null, Ms)
  );
  function p(v, L) {
    let D, A;
    return Rm(v) ? (D = t.getRecordMatcher(v), A = L) : A = v, t.addRoute(A, D);
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
  function w(v, L) {
    if (L = W({}, L || d.value), typeof v == "string") {
      const R = Xi(n, v, L.path), ee = t.resolve({ path: R.path }, L), rt = s.createHref(R.fullPath);
      return {}.NODE_ENV !== "production" && (rt.startsWith("//") ? j(`Location "${v}" resolved to "${rt}". A resolved location cannot start with multiple slashes.`) : ee.matched.length || j(`No match found for location with path "${v}"`)), W(R, ee, {
        params: u(ee.params),
        hash: Ms(R.hash),
        redirectedFrom: void 0,
        href: rt
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && j(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = W({}, v, {
        path: Xi(n, v.path, L.path).path
      });
    else {
      const R = W({}, v.params);
      for (const ee in R)
        R[ee] == null && delete R[ee];
      D = W({}, v, {
        params: c(R)
      }), L.params = c(L.params);
    }
    const A = t.resolve(D, L), X = v.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && j(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), A.params = i(u(A.params));
    const ae = vS(o, W({}, v, {
      hash: cy(X),
      path: A.path
    })), O = s.createHref(ae);
    return {}.NODE_ENV !== "production" && (O.startsWith("//") ? j(`Location "${v}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : A.matched.length || j(`No match found for location with path "${"path" in v ? v.path : v}"`)), W({
      fullPath: ae,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: X,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === zu ? my(v.query) : v.query || {}
      )
    }, A, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function _(v) {
    return typeof v == "string" ? Xi(n, v, d.value.path) : W({}, v);
  }
  function S(v, L) {
    if (g !== v)
      return xo(8, {
        from: L,
        to: v
      });
  }
  function y(v) {
    return B(v);
  }
  function k(v) {
    return y(W(_(v), { replace: !0 }));
  }
  function V(v) {
    const L = v.matched[v.matched.length - 1];
    if (L && L.redirect) {
      const { redirect: D } = L;
      let A = typeof D == "function" ? D(v) : D;
      if (typeof A == "string" && (A = A.includes("?") || A.includes("#") ? A = _(A) : (
        // force empty params
        { path: A }
      ), A.params = {}), {}.NODE_ENV !== "production" && !("path" in A) && !("name" in A))
        throw j(`Invalid redirect found:
${JSON.stringify(A, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return W({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in A ? {} : v.params
      }, A);
    }
  }
  function B(v, L) {
    const D = g = w(v), A = d.value, X = v.state, ae = v.force, O = v.replace === !0, R = V(D);
    if (R)
      return B(
        W(_(R), {
          state: typeof R == "object" ? W({}, X, R.state) : X,
          force: ae,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        L || D
      );
    const ee = D;
    ee.redirectedFrom = L;
    let rt;
    return !ae && Au(o, A, D) && (rt = xo(16, { to: ee, from: A }), Mt(
      A,
      A,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (rt ? Promise.resolve(rt) : U(ee, A)).catch((_e) => zt(_e) ? (
      // navigation redirects still mark the router as ready
      zt(
        _e,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? _e : Dn(_e)
    ) : (
      // reject any unknown error
      De(_e, ee, A)
    )).then((_e) => {
      if (_e) {
        if (zt(
          _e,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Au(o, w(_e.to), ee) && // and we have done it a couple of times
          L && // @ts-expect-error: added only in dev
          (L._count = L._count ? (
            // @ts-expect-error
            L._count + 1
          ) : 1) > 30 ? (j(`Detected a possibly infinite redirection in a navigation guard when going from "${A.fullPath}" to "${ee.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : B(
            // keep options
            W({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, _(_e.to), {
              state: typeof _e.to == "object" ? W({}, X, _e.to.state) : X,
              force: ae
            }),
            // preserve the original redirectedFrom if any
            L || ee
          );
      } else
        _e = N(ee, A, !0, O, X);
      return M(ee, A, _e), _e;
    });
  }
  function x(v, L) {
    const D = S(v, L);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function F(v) {
    const L = Nt.values().next().value;
    return L && typeof L.runWithContext == "function" ? L.runWithContext(v) : v();
  }
  function U(v, L) {
    let D;
    const [A, X, ae] = Fy(v, L);
    D = Wi(A.reverse(), "beforeRouteLeave", v, L);
    for (const R of A)
      R.leaveGuards.forEach((ee) => {
        D.push(xn(ee, v, L));
      });
    const O = x.bind(null, v, L);
    return D.push(O), Xe(D).then(() => {
      D = [];
      for (const R of a.list())
        D.push(xn(R, v, L));
      return D.push(O), Xe(D);
    }).then(() => {
      D = Wi(X, "beforeRouteUpdate", v, L);
      for (const R of X)
        R.updateGuards.forEach((ee) => {
          D.push(xn(ee, v, L));
        });
      return D.push(O), Xe(D);
    }).then(() => {
      D = [];
      for (const R of ae)
        if (R.beforeEnter)
          if (Oe(R.beforeEnter))
            for (const ee of R.beforeEnter)
              D.push(xn(ee, v, L));
          else
            D.push(xn(R.beforeEnter, v, L));
      return D.push(O), Xe(D);
    }).then(() => (v.matched.forEach((R) => R.enterCallbacks = {}), D = Wi(ae, "beforeRouteEnter", v, L), D.push(O), Xe(D))).then(() => {
      D = [];
      for (const R of r.list())
        D.push(xn(R, v, L));
      return D.push(O), Xe(D);
    }).catch((R) => zt(
      R,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? R : Promise.reject(R));
  }
  function M(v, L, D) {
    l.list().forEach((A) => F(() => A(v, L, D)));
  }
  function N(v, L, D, A, X) {
    const ae = S(v, L);
    if (ae)
      return ae;
    const O = L === dn, R = on ? history.state : {};
    D && (A || O ? s.replace(v.fullPath, W({
      scroll: O && R && R.scroll
    }, X)) : s.push(v.fullPath, X)), d.value = v, Mt(v, L, D, O), Dn();
  }
  let G;
  function H() {
    G || (G = s.listen((v, L, D) => {
      if (!Ut.listening)
        return;
      const A = w(v), X = V(A);
      if (X) {
        B(W(X, { replace: !0 }), A).catch(Bs);
        return;
      }
      g = A;
      const ae = d.value;
      on && VS(Bu(ae.fullPath, D.delta), Si()), U(A, ae).catch((O) => zt(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : zt(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (B(
        O.to,
        A
        // avoid an uncaught rejection, let push call triggerError
      ).then((R) => {
        zt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === Fs.pop && s.go(-1, !1);
      }).catch(Bs), Promise.reject()) : (D.delta && s.go(-D.delta, !1), De(O, A, ae))).then((O) => {
        O = O || N(
          // after navigation, all matched components are resolved
          A,
          ae,
          !1
        ), O && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !zt(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === Fs.pop && zt(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), M(A, ae, O);
      }).catch(Bs);
    }));
  }
  let Ft = Io(), at = Io(), me;
  function De(v, L, D) {
    Dn(v);
    const A = at.list();
    return A.length ? A.forEach((X) => X(v, L, D)) : ({}.NODE_ENV !== "production" && j("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function it() {
    return me && d.value !== dn ? Promise.resolve() : new Promise((v, L) => {
      Ft.add([v, L]);
    });
  }
  function Dn(v) {
    return me || (me = !v, H(), Ft.list().forEach(([L, D]) => v ? D(v) : L()), Ft.reset()), v;
  }
  function Mt(v, L, D, A) {
    const { scrollBehavior: X } = e;
    if (!on || !X)
      return Promise.resolve();
    const ae = !D && ES(Bu(v.fullPath, 0)) || (A || !D) && history.state && history.state.scroll || null;
    return hS().then(() => X(v, L, ae)).then((O) => O && $S(O)).catch((O) => De(O, v, L));
  }
  const Ge = (v) => s.go(v);
  let ln;
  const Nt = /* @__PURE__ */ new Set(), Ut = {
    currentRoute: d,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: w,
    options: e,
    push: y,
    replace: k,
    go: Ge,
    back: () => Ge(-1),
    forward: () => Ge(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: at.add,
    isReady: it,
    install(v) {
      const L = this;
      v.component("RouterLink", vy), v.component("RouterView", ky), v.config.globalProperties.$router = L, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ts(d)
      }), on && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ln && d.value === dn && (ln = !0, y(s.location).catch((X) => {
        ({}).NODE_ENV !== "production" && j("Unexpected error when starting the router:", X);
      }));
      const D = {};
      for (const X in dn)
        Object.defineProperty(D, X, {
          get: () => d.value[X],
          enumerable: !0
        });
      v.provide(yi, L), v.provide(Xm, mS(D)), v.provide(Kl, d);
      const A = v.unmount;
      Nt.add(v), v.unmount = function() {
        Nt.delete(v), Nt.size < 1 && (g = dn, G && G(), G = null, d.value = dn, ln = !1, me = !1), A();
      }, {}.NODE_ENV !== "production" && on && $y(v, L, t);
    }
  };
  function Xe(v) {
    return v.reduce((L, D) => L.then(() => F(D)), Promise.resolve());
  }
  return Ut;
}
function Fy(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((g) => Vn(g, l)) ? o.push(l) : n.push(l));
    const d = e.matched[r];
    d && (t.matched.find((g) => Vn(g, d)) || s.push(d));
  }
  return [n, o, s];
}
function Se() {
  return bo(yi);
}
const My = {
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
}, Ny = {
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
}, Uy = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], Iy = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, Ry = {
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
}, zy = {
  languages: My,
  scriptgroups: Ny,
  rtlscripts: Uy,
  regiongroups: Iy,
  territories: Ry
};
var Ve = zy;
function Os(e) {
  return !!Ve.languages[e];
}
function Ln(e) {
  return Os(e) && Ve.languages[e].length === 1 ? Ve.languages[e][0] : !1;
}
function Oy() {
  return Ve.languages;
}
function js(e) {
  var t = Ln(e);
  return t ? js(t) : Os(e) ? Ve.languages[e][0] : "Zyyy";
}
function pc(e) {
  var t = Ln(e);
  return t ? pc(t) : Os(e) && Ve.languages[e][1] || "UNKNOWN";
}
function Ns(e) {
  var t = Ln(e);
  return t ? Ns(t) : Os(e) && Ve.languages[e][2] || e;
}
function jy() {
  var e, t = {};
  for (e in Ve.languages)
    Ln(e) || (t[e] = Ns(e));
  return t;
}
function th(e) {
  var t, n, o = [];
  for (t in Ve.languages)
    if (!Ln(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === js(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Hy(e) {
  return th([e]);
}
function nh(e) {
  var t;
  for (t in Ve.scriptgroups)
    if (Ve.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function mc(e) {
  return nh(js(e));
}
function oh(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Ln(n) || n, a = mc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function sh(e) {
  var t, n, o, s = {};
  for (t in Ve.languages)
    if (!Ln(t)) {
      for (n = 0; n < e.length; n++)
        if (pc(t).includes(e[n])) {
          o = mc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function qy(e) {
  return sh([e]);
}
function Gy(e) {
  var t, n, o, s = [];
  for (t = oh(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Xy(e, t) {
  var n = Ns(e) || e, o = Ns(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function ah(e) {
  return Ve.rtlscripts.includes(js(e));
}
function Wy(e) {
  return ah(e) ? "rtl" : "ltr";
}
function Ky(e) {
  return Ve.territories[e] || [];
}
function Yy(e, t) {
  t.target ? Ve.languages[e] = [t.target] : Ve.languages[e] = [t.script, t.regions, t.autonym];
}
var z = {
  addLanguage: Yy,
  getAutonym: Ns,
  getAutonyms: jy,
  getDir: Wy,
  getGroupOfScript: nh,
  getLanguages: Oy,
  getLanguagesByScriptGroup: oh,
  getLanguagesByScriptGroupInRegion: qy,
  getLanguagesByScriptGroupInRegions: sh,
  getLanguagesInScript: Hy,
  getLanguagesInScripts: th,
  getLanguagesInTerritory: Ky,
  getRegions: pc,
  getScript: js,
  getScriptGroupOfLanguage: mc,
  isKnown: Os,
  isRedirect: Ln,
  isRtl: ah,
  sortByScriptGroup: Gy,
  sortByAutonym: Xy
};
const Jy = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), g = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, Qy = (e) => {
  const t = Jy(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const lt = window.Vue.unref, to = window.Vue.createVNode, Ot = window.Vue.createElementVNode, Xu = window.Vue.renderSlot, Wu = window.Vue.withModifiers, Ki = window.Vue.toDisplayString, Yi = window.Vue.withCtx, Zy = window.Vue.openBlock, eC = window.Vue.createElementBlock, tC = window.Vue.createCommentVNode, nC = { class: "col shrink pe-4" }, oC = { class: "col" }, sC = { class: "cx-translation__details column justify-between ma-0" }, aC = { class: "row ma-0" }, iC = { class: "col grow" }, rC = { class: "col shrink ps-2" }, lC = ["dir", "textContent"], cC = ["dir", "textContent"], uC = ["textContent"], dC = window.Vuex.useStore, gC = window.Vue.computed, ih = {
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
    const n = e, o = dC(), s = (l, d) => {
      const g = o.getters["mediawiki/getPage"](l, d);
      return g == null ? void 0 : g.thumbnail;
    }, a = ue(), r = gC(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, d = Qy(n.translation.startTimestamp);
      return a.i18n(
        l[d.postfix],
        d.value
      );
    });
    return (l, d) => e.translation ? (Zy(), eC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: d[1] || (d[1] = Wu((g) => l.$emit("click"), ["stop"]))
    }, [
      Ot("div", nC, [
        to(lt(ac), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Ot("div", oC, [
        Ot("div", sC, [
          Ot("div", aC, [
            Ot("div", iC, [
              Xu(l.$slots, "title")
            ]),
            Ot("div", rC, [
              to(lt(xe), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: d[0] || (d[0] = Wu((g) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Xu(l.$slots, "mid-content"),
          to(lt(P), { class: "cx-translation__footer ma-0" }, {
            default: Yi(() => [
              to(lt(C), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Yi(() => [
                  Ot("span", {
                    class: "mw-ui-autonym",
                    dir: lt(z.getDir)(e.translation.sourceLanguage),
                    textContent: Ki(lt(z.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, lC),
                  to(lt(xe), {
                    icon: lt(Mw),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Ot("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: lt(z.getDir)(e.translation.targetLanguage),
                    textContent: Ki(lt(z.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, cC)
                ]),
                _: 1
              }),
              to(lt(C), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Yi(() => [
                  Ot("span", {
                    textContent: Ki(r.value)
                  }, null, 8, uC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : tC("", !0);
  }
};
const zo = window.Vue.unref, Ku = window.Vue.toDisplayString, pC = window.Vue.normalizeClass, mC = window.Vue.createElementVNode, Ji = window.Vue.openBlock, hC = window.Vue.createElementBlock, Yu = window.Vue.createCommentVNode, Ju = window.Vue.createVNode, pa = window.Vue.withCtx, Qu = window.Vue.createBlock, fC = ["lang", "textContent"], wC = ["lang", "textContent"], _C = window.Vue.computed, vC = window.Vue.inject, SC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: ic,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = vC("colors").gray200, s = _C(
      () => {
        var d;
        return ((d = t.translation.progress) == null ? void 0 : d.any) * 100 || 0;
      }
    ), a = Se(), { setTranslationURLParams: r } = T(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (d, g) => (Ji(), Qu(ih, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": zo(im),
      onActionIconClicked: g[0] || (g[0] = (i) => d.$emit("delete-translation")),
      onClick: l
    }, {
      title: pa(() => [
        mC("h5", {
          class: pC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Ku(e.translation.sourceTitle)
        }, null, 10, fC),
        e.translation.isLeadSectionTranslation ? Yu("", !0) : (Ji(), hC("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Ku(e.translation.sourceSectionTitle)
        }, null, 8, wC))
      ]),
      "mid-content": pa(() => [
        e.translation.progress ? (Ji(), Qu(zo(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: pa(() => [
            Ju(zo(C), null, {
              default: pa(() => [
                Ju(zo(um), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: zo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Yu("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Zu = window.Vue.computed, yC = window.Vuex.useStore;
function Hs() {
  const e = yC(), t = Zu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Zu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const no = window.Vue.computed;
function Z(e) {
  const t = no(() => e.state.application.sourceLanguage), n = no(() => e.state.application.targetLanguage), o = no(
    () => e.state.application.currentMTProvider
  ), s = no(
    () => z.getAutonym(t.value)
  ), a = no(
    () => z.getAutonym(n.value)
  ), r = no(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const CC = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = T(), s = q.getCurrentWikiLanguageCode(), a = (u) => !e || Array.isArray(e) && e.includes(u), r = (u) => t.includes(u), l = {
    sourceLanguage: "en",
    targetLanguage: "es"
  }, d = [
    o.value,
    mw.storage.get("cxTargetLanguage"),
    s,
    (e == null ? void 0 : e[0]) || l.targetLanguage
  ], g = [
    n.value,
    mw.storage.get("cxSourceLanguage"),
    l.sourceLanguage,
    s,
    l.targetLanguage
  ], i = d.find(
    (u) => a(u) && r(u)
  );
  return { sourceLanguage: g.find(
    (u) => r(u) && u !== i
  ), targetLanguage: i };
}, kC = window.Vuex.useStore, hc = () => {
  const e = kC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  ), r = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  );
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (g) => l().slice(
      s * g,
      s * (g + 1)
    ),
    getSectionSuggestionsSliceByIndex: r
  };
}, bC = window.Vuex.useStore, qs = () => {
  const e = bC(), { sourceLanguage: t, targetLanguage: n } = Z(e), o = (l) => {
    if (!l)
      return !1;
    const d = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((c) => c.sourceTitle);
    return !d.includes(l.sourceTitle) && !i.includes(l.sourceTitle);
  }, s = (l) => {
    const { pageSuggestions: d } = e.state.suggestions;
    return !d.some(
      (i) => i.sourceLanguage === l.sourceLanguage && i.targetLanguage === l.targetLanguage && i.sourceTitle === l.sourceTitle
    ) && o(l);
  }, a = (l) => e.state.suggestions.sectionSuggestions.some(
    (d) => d.sourceLanguage === l.sourceLanguage && d.targetLanguage === l.targetLanguage && d.sourceTitle === l.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (l) => {
      if (!l)
        return !1;
      const d = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(l) && o(l) && l.isValid(d);
    },
    sectionSuggestionExists: a
  };
};
class xC {
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
const $C = window.Vuex.useStore, VC = window.Vue.computed, fc = window.Vue.ref, EC = fc([]), LC = fc([]);
let Qi = !1, ed = !1, td = !1, rh = fc([]);
const DC = (e, t) => {
  rh.value.push({
    sourceLanguage: e,
    targetLanguage: t
  });
};
let Oo = null;
const ma = {
  page: EC,
  section: LC
}, lh = () => {
  const e = $C(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = VC(
    () => rh.value.some(
      (i) => i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ), s = () => b(void 0, null, function* () {
    let i = e.getters["translator/getTranslationsByStatus"]("published");
    if (i = i.filter(
      (c) => c.sourceLanguage === t.value
    ), i.length && !Qi)
      return Qi = !0, i.map(
        (c) => c.sourceTitle
      );
    if (Qi = !0, !ed) {
      const c = yield se.fetchUserEdits(t.value).then((u) => (ed = !0, u));
      if (c.length)
        return c;
    }
    if (!td) {
      const c = yield se.fetchUserEdits(t.value).then((u) => (td = !0, u));
      if (c.length)
        return Ao.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          c
        );
    }
    return null;
  }), a = (i) => {
    let c = ma[i].value.find(
      (u) => u.matchesLanguagePair(t.value, n.value)
    );
    return c || (c = new xC({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ma[i].value.push(c)), c;
  }, r = () => b(void 0, null, function* () {
    const i = yield se.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const c in ma) {
      const u = a(c);
      u.seeds = [...u.seeds, ...i || []];
    }
  }), l = () => b(void 0, null, function* () {
    let i = !1, c = [];
    do {
      c = yield s(), c || (i = !0);
      for (const u in ma) {
        const p = a(u);
        p.seeds = [
          ...p.seeds,
          ...c || []
        ];
      }
    } while (!i && !(c != null && c.length));
  }), d = () => Oo || (Oo = l(), Oo.finally(() => {
    Oo = null;
  }));
  return { getSuggestionSeed: (i) => b(void 0, null, function* () {
    let c = a(i);
    c.seeds.length || (yield d());
    let u = c.shiftSeeds();
    return !u && !o.value && (yield r(), u = c.shiftSeeds(), DC(
      t.value,
      n.value
    )), u;
  }), defaultSeedsFetched: o };
}, AC = 5;
function $o(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < AC);
  });
}
const TC = window.Vuex.useStore, BC = () => {
  const e = TC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), { getSuggestionSeed: o } = lh(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = qs(), l = {
    id: Ct,
    type: yt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield $o(() => b(void 0, null, function* () {
        const u = yield o("page");
        if (!u)
          return !0;
        let p = yield se.fetchPageSuggestions(
          t.value,
          n.value,
          u
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), c.push(...p), c.length >= i;
      })), c.forEach(
        (u) => u.suggestionProvider = l
      ), c;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield $o(() => b(void 0, null, function* () {
        const u = yield o("section");
        if (!u)
          return !0;
        const p = yield se.fetchSectionSuggestions(
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
        return m = m.slice(0, i), c.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), c.length >= i;
      })), c.forEach(
        (u) => u.suggestionProvider = l
      ), c;
    })
  };
}, PC = window.Vuex.useStore, FC = () => {
  const e = PC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T(), o = {
    id: Pt,
    type: yt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = qs();
  return { fetchSectionSuggestionsPopular: (g) => b(void 0, null, function* () {
    const i = [];
    return yield $o(() => b(void 0, null, function* () {
      const c = yield se.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let u = c.filter(
        (m) => s(m)
      );
      const p = c.filter(
        (m) => !s(m)
      );
      return u = u.slice(0, g), i.push(...u), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= g;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }), fetchPageSuggestionsPopular: (g) => b(void 0, null, function* () {
    const i = [];
    return yield $o(() => b(void 0, null, function* () {
      let c = yield se.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return c = c.filter(
        (u) => a(u)
      ), c = c.slice(0, g), i.push(...c), i.length >= g;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }) };
}, ch = window.Vue.ref, Zi = ch([]), nd = ch(!1), wc = () => ({ pageCollections: Zi, fetchPageCollections: () => b(void 0, null, function* () {
  try {
    Zi.value = yield se.fetchPageCollections(), Zi.value.sort((t, n) => t.name.localeCompare(n.name)), nd.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: nd });
class Jl {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const ha = window.Vue.computed, od = mw.loader.require("ext.cx.articletopics"), MC = (e) => new Jl({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: ze
  }))
}), _c = () => {
  const e = ue(), { currentSuggestionFilters: t, setFilterURLParams: n } = T(), o = {
    id: Ct,
    type: yt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: Pt,
    type: yt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: pe,
    type: yt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: r, pageCollectionsFetched: l } = wc(), d = ha(() => {
    const _ = new Jl({
      id: yt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return r.value.length && _.filters.push(a), _;
  }), g = (_) => ({
    id: _.name,
    label: _.name,
    type: pe
  }), i = ha(
    () => new Jl({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: r.value.map(
        (_) => g(_)
      )
    })
  ), c = ha(() => {
    const _ = [
      d.value,
      ...od.map(MC)
    ];
    return r.value.length && _.splice(1, 0, i.value), _;
  }), u = ha(
    () => [t.value.type, t.value.id].includes(
      pe
    ) && !l.value
  ), p = () => {
    if (u.value)
      return [];
    const _ = h();
    return _.type === ze || _.type === nt || _.type === pe || _.id === pe ? [_, o] : [o, s];
  }, m = (_) => {
    n(_.type, _.id);
  }, h = () => t.value.type === nt ? {
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  } : c.value.flatMap((_) => _.filters).find(f), f = (_) => t.value.type === _.type && t.value.id === _.id;
  return {
    allFilters: c,
    getFiltersSummary: p,
    selectFilter: m,
    isFilterSelected: f,
    getOresTopics: (_) => {
      const y = od.flatMap((k) => k.topics).find((k) => k.topicId === _);
      return y ? y.orestopics : [];
    },
    waitingForPageCollectionsFetch: u,
    findSelectedFilter: h
  };
}, NC = window.Vuex.useStore, UC = () => {
  const e = NC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = qs(), { getOresTopics: l } = _c();
  return {
    fetchPageSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const c = o.value.id, u = {
        id: c,
        type: ze
      }, p = l(c);
      let m = yield se.fetchPageSuggestionsByTopics(
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
    fetchSectionSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const c = o.value.id, u = {
        id: c,
        type: ze
      }, p = l(c), m = [];
      return yield $o(() => b(void 0, null, function* () {
        const h = yield se.fetchSectionSuggestionsByTopics(
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
        (h) => h.suggestionProvider = u
      ), m;
    })
  };
}, IC = window.Vuex.useStore, RC = window.Vue.computed, zC = () => {
  const e = IC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), s = RC(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== pe ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = qs();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [], c = yield se.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      let u = c.filter(
        (m) => a(m)
      );
      const p = c.filter(
        (m) => !a(m)
      );
      return i.push(...u), p.forEach((m) => {
        m && !l(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.forEach(
        (m) => m.suggestionProvider = o.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [];
      let c = yield se.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return c = c.filter(
        (u) => r(u)
      ), i.push(...c), i.forEach(
        (u) => u.suggestionProvider = o.value
      ), i;
    })
  };
}, OC = window.Vuex.useStore, jC = () => {
  const e = OC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = qs();
  return {
    fetchPageSuggestionsBySeed: (g) => b(void 0, null, function* () {
      const i = o.value.id;
      let c = yield se.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return c = c.filter(
        (u) => a(u)
      ), c = c.slice(0, g), c.forEach(
        (u) => u.suggestionProvider = {
          id: i,
          type: nt
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (g) => b(void 0, null, function* () {
      const i = [], c = o.value.id;
      return yield $o(() => b(void 0, null, function* () {
        const u = yield se.fetchSectionSuggestions(
          t.value,
          n.value,
          c
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
          id: c,
          type: nt
        }
      ), i;
    })
  };
}, vc = () => {
  const { currentSuggestionFilters: e } = T(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = BC(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = FC(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = UC(), {
    fetchPageSuggestionsByCollections: l,
    fetchSectionSuggestionsByCollections: d
  } = zC(), { fetchPageSuggestionsBySeed: g, fetchSectionSuggestionsBySeed: i } = jC(), c = {
    [Ct]: t,
    [Pt]: o,
    [pe]: l,
    [ze]: a,
    [nt]: g
  }, u = {
    [Ct]: n,
    [Pt]: s,
    [pe]: d,
    [ze]: r,
    [nt]: i
  }, p = (f) => f.type === yt ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => c[p(e.value)],
    getCurrentSectionSuggestionProvider: () => u[p(e.value)]
  };
}, HC = window.Vuex.useStore, Sc = () => {
  const e = HC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = hc(), { sourceLanguageURLParameter: o } = T(), s = () => {
    const c = t(), u = e.state.suggestions.maxSuggestionsPerSlice;
    return u - c.length % u;
  }, a = () => {
    const c = n(), u = e.state.suggestions.maxSuggestionsPerSlice;
    return u - c.length % u;
  }, {
    getCurrentPageSuggestionProvider: r,
    getCurrentSectionSuggestionProvider: l
  } = vc(), d = (c) => {
    try {
      const u = c.map((p) => p.sourceTitle);
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
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const c = s(), p = yield l()(
        c
      );
      p.forEach(
        (m) => e.commit("suggestions/addSectionSuggestion", m)
      ), d(p), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const c = a(), p = yield r()(
        c
      );
      p.forEach(
        (m) => e.commit("suggestions/addPageSuggestion", m)
      ), d(p), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, qC = window.Vuex.useStore, yc = () => {
  const e = qC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Sc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = hc(), { targetLanguageURLParameter: a } = T();
  return () => b(void 0, null, function* () {
    const r = s(0), l = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = r.length === d, i = l.length === d;
    g && i || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, GC = window.Vuex.useStore, Cc = () => {
  const e = GC();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!s) {
      s = yield se.fetchSectionSuggestion(
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
          return new Lo({
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
}, sd = window.Vue.computed, XC = window.Vuex.useStore, an = () => {
  const e = XC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T(), s = sd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = sd(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, d) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(d)
  };
}, Gs = window.Vuex.useStore, Xs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), r = q.getCurrentWikiLanguageCode();
  return a && t !== r ? (s = le({ sx: !0 }, s), o && (s.section = o), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: WC, pageURLParameter: KC, sectionURLParameter: YC } = T(), Ws = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), WC(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, uh = () => {
  const e = Gs(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Hs();
  return () => b(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = CC(
      t.value,
      n.value
    );
    Xs(
      o,
      s,
      KC.value,
      YC.value
    ) || Ws(e, o, s);
  });
}, dh = () => {
  const e = Gs(), t = yc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Z(e);
    n === o && (n = a.value, o = s.value), Xs(
      n,
      o,
      null,
      null
    ) || (Ws(e, n, o), t());
  };
}, JC = () => {
  const e = Gs(), t = yc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: r } = n;
      Xs(
        o,
        s,
        a,
        r,
        { draft: !0 }
      ) || (Ws(e, o, s), t());
    }
  );
}, QC = () => {
  const e = Gs();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Xs(
      n,
      o,
      s,
      null
    ) || Ws(e, n, o);
  };
}, ZC = () => {
  const e = Gs(), t = Cc(), { currentLanguageTitleGroup: n, targetPageExists: o } = an();
  return (s, a) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l,
      setPageURLParam: d,
      clearSectionURLParameter: g
    } = T();
    s === a && (s = l.value, a = r.value);
    const i = n.value.getTitleForLanguage(s);
    Xs(
      s,
      a,
      i,
      null
    ) || (Ws(e, s, a), d(i), o.value ? (g(), yield t(
      r.value,
      l.value,
      i
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: r.value,
      titles: [i]
    }), e.dispatch("application/getCXServerToken"));
  });
}, ek = window.Vuex.useStore, gh = [], tk = (e, t, n) => gh.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), nk = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  gh.push(o);
}, ok = () => {
  const e = ek();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !tk(t, n, o) && (s = yield se.fetchSectionSuggestion(
      t,
      o,
      n
    ), nk(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, sk = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', ak = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', ik = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', rk = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', lk = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', ck = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', uk = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', dk = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', gk = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', pk = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', mk = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', hk = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', fk = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', wk = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', _k = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', vk = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', Sk = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', yk = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', Ck = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', kk = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', bk = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', xk = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', $k = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', Vk = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', Ek = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', Lk = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', Dk = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', Ak = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', Tk = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', Bk = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', Pk = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Ql = sk, ph = ak, mh = {
  ltr: ik,
  shouldFlip: !0
}, hh = {
  ltr: rk,
  shouldFlip: !0
}, Us = {
  ltr: lk,
  shouldFlip: !0
}, Fk = ck, fh = uk, wh = dk, Mk = gk, Nk = pk, Uk = mk, To = hk, kc = fk, bc = wk, ad = _k, Ik = vk, _h = Sk, Rk = {
  langCodeMap: {
    ar: yk
  },
  default: Ck
}, vh = kk, xc = {
  ltr: bk,
  shouldFlip: !0
}, zk = xk, Ks = {
  ltr: $k,
  shouldFlip: !0
}, $c = {
  ltr: Vk,
  shouldFlip: !0
}, Ok = {
  ltr: Ek,
  shouldFlip: !0
}, Sh = Lk, jk = Dk, Hk = Ak, qk = Tk, Gk = Bk, yh = Pk, Ch = "cx-translation-session-position-", kh = () => Ch + mw.user.sessionId(), bh = () => {
  const e = kh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, Xk = function() {
  const e = bh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Ch)).forEach((n) => mw.storage.remove(n));
  const t = kh();
  mw.storage.set(t, e + 1);
};
let Zl = null;
function Wk(e) {
  if (Zl)
    return Promise.resolve(Zl);
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
function Kk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Yk(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = bh(), d = {
    $schema: "/analytics/mediawiki/content_translation_event/1.8.0",
    wiki_db: n,
    access_method: t,
    user_name: r,
    web_session_id: mw.user.sessionId(),
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: l
  };
  let g;
  return a ? g = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, d, e))
  ) : g = Wk(r).then((i) => {
    Zl = i, mw.eventLog.submit(
      s,
      Object.assign({}, d, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: Kk(i)
      })
    );
  }), g.then(() => {
    Xk();
  });
}
const je = () => Yk, xh = window.Vue.ref, $h = xh(null), ec = xh(null), Jk = (e) => {
  $h.value = e;
}, Qk = (e) => {
  ec.value = e;
}, Vc = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = T(), s = je();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: $h.value,
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
      return ec.value && (r.event_context = ec.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: Jk,
    setStartTranslationEventContext: Qk
  };
}, Zk = window.Vuex.useStore, Ys = () => {
  const e = Zk(), t = Se(), n = Cc(), { setTranslationURLParams: o } = T(), { setStartTranslationEventSource: s, setStartTranslationEventContext: a } = Vc();
  return (r, l, d, g, i = null) => b(void 0, null, function* () {
    const c = yield n(
      l,
      d,
      r
    );
    c && (e.dispatch("application/getCXServerToken"), o(c), s(g), a(i), t.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const fa = window.Vue.withModifiers, er = window.Vue.toDisplayString, tr = window.Vue.createElementVNode, Ke = window.Vue.unref, wa = window.Vue.openBlock, id = window.Vue.createBlock;
window.Vue.createCommentVNode;
const gn = window.Vue.createVNode, Tn = window.Vue.withCtx, rd = window.Vue.createElementBlock, eb = ["lang", "href", "textContent"], tb = {
  key: 1,
  class: "flex"
}, nb = { key: 2 }, ld = window.Vue.computed, cd = window.Vue.ref, nr = window.Codex.CdxButton, or = window.Codex.CdxIcon, ob = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: cc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = cd(!0), o = cd(null), s = ld(() => {
      var h;
      return (h = o.value) == null ? void 0 : h.missingSections;
    }), a = ld(
      () => s.value && Object.keys(s.value)[0]
    );
    ok()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((h) => o.value = h).catch((h) => console.log(h)).finally(() => n.value = !1), Se();
    const {
      setTranslationURLParams: l,
      setSectionURLParam: d,
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: i
    } = T(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Ys(), p = QC(), m = (h) => {
      p(t.translation), u(
        t.translation.sourceTitle,
        g.value,
        i.value,
        "continue_published"
      ), h && d(h);
    };
    return (h, f) => (wa(), id(ih, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Tn(() => [
        tr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = fa(() => {
          }, ["stop"])),
          textContent: er(e.translation.sourceTitle)
        }, null, 8, eb)
      ]),
      "mid-content": Tn(() => [
        gn(Ke(P), { class: "ma-0" }, {
          default: Tn(() => [
            gn(Ke(C), null, {
              default: Tn(() => [
                n.value ? (wa(), id(Ke(Re), { key: 0 })) : s.value ? (wa(), rd("div", tb, [
                  gn(Ke(nr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = fa((w) => m(a.value), ["stop"]))
                  }, {
                    default: Tn(() => [
                      gn(Ke(or), {
                        class: "me-1",
                        icon: Ke(Ql)
                      }, null, 8, ["icon"]),
                      tr("span", null, er(a.value), 1)
                    ]),
                    _: 1
                  }),
                  gn(Ke(nr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": h.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = fa((w) => m(null), ["stop"]))
                  }, {
                    default: Tn(() => [
                      gn(Ke(or), { icon: Ke(bc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (wa(), rd("div", nb, [
                  gn(Ke(nr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[3] || (f[3] = fa((w) => m(null), ["stop"]))
                  }, {
                    default: Tn(() => [
                      gn(Ke(or), {
                        class: "me-1",
                        icon: Ke(Ql)
                      }, null, 8, ["icon"]),
                      tr("span", null, er(h.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, ud = window.Vuex.useStore, sb = () => {
  const e = ud(), { commit: t } = ud(), { sourceLanguage: n, targetLanguage: o } = Z(e), s = je();
  return (a) => b(void 0, null, function* () {
    a.sectionTranslationId ? (yield ot.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield ot.deleteCXTranslation(
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
const ab = window.Vue.resolveDirective, sr = window.Vue.createElementVNode, ib = window.Vue.withDirectives, ar = window.Vue.unref, dd = window.Vue.createVNode, gd = window.Vue.withCtx, rb = window.Vue.openBlock, lb = window.Vue.createBlock, cb = { class: "pa-4" }, ub = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, db = {
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
    const n = e, o = t, s = () => o("update:modelValue", !1), a = sb(), r = () => {
      a(n.translation), s();
    };
    return (l, d) => {
      const g = ab("i18n");
      return rb(), lb(ar(st), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: gd(() => [
          sr("div", ub, [
            dd(ar($e), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            dd(ar($e), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: gd(() => [
          sr("div", cb, [
            ib(sr("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function gb(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield pb(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function pd(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(z.sortByAutonym) : (yield gb(e, t, n)).sort(z.sortByAutonym);
  });
}
function pb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function mb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function hb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const fb = window.Vue.computed;
function wb(e, t) {
  const n = fb(() => {
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
const ir = window.Vue.ref, md = window.Vue.watch, _b = window.Vue.computed;
function vb(e, t, n) {
  const o = ir(""), s = ir(-1), a = ir(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = _b(
    () => e.value ? t.value : [...n, ...t.value]
  ), d = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return md(e, () => {
    s.value = -1;
  }), md(s, () => b(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: r, prev: d, langSelectorContainer: a, selectedLanguage: o };
}
function Ec(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const _a = window.Vue.renderSlot, he = window.Vue.unref, Sb = window.Vue.isRef, hd = window.Vue.createVNode, jo = window.Vue.withModifiers, Ho = window.Vue.withKeys, pn = window.Vue.createElementVNode, yb = window.Vue.resolveDirective, va = window.Vue.withDirectives, rr = window.Vue.renderList, lr = window.Vue.Fragment, jt = window.Vue.openBlock, Ht = window.Vue.createElementBlock, fd = window.Vue.toDisplayString, Sa = window.Vue.normalizeClass, cr = window.Vue.createCommentVNode, Cb = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, kb = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, bb = { class: "results px-3 pt-4" }, xb = { class: "results-header ps-8 pb-2" }, $b = { class: "results-languages--suggestions pa-0 ma-0" }, Vb = ["lang", "dir", "aria-selected", "onClick", "textContent"], Eb = { class: "results px-3 pt-4" }, Lb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Db = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ab = ["aria-selected"], Tb = { class: "no-results px-3 py-4" }, Bb = { class: "ps-8" }, ur = window.Vue.ref, Pb = window.Vue.watch, Fb = window.Vue.onMounted, wd = window.Vue.computed, Vh = {
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
      default: mb
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ur(null), a = ur(""), r = ur([]), l = wd(
      () => hb(r.value)
    ), d = wd(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), g = (S) => o("select", S), i = () => o("close"), { autocompletion: c, onTabSelect: u } = wb(
      a,
      r
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: f } = vb(a, r, n.suggestions), w = () => {
      if (a.value && n.languages.includes(a.value)) {
        g(a.value);
        return;
      }
      if (f.value) {
        g(f.value);
        return;
      }
      if (r.value.length === 1) {
        g(r.value[0]);
        return;
      }
    };
    return Pb(a, Ec(() => b(this, null, function* () {
      r.value = yield pd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Fb(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield pd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, y) => {
      const k = yb("i18n");
      return jt(), Ht("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        _a(S.$slots, "search", {}, () => [
          pn("div", Cb, [
            hd(he(ii), {
              value: he(c),
              "onUpdate:value": y[0] || (y[0] = (V) => Sb(c) ? c.value = V : null),
              icon: he(zl),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            hd(he(ii), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (V) => a.value = V),
              class: "mw-ui-language-selector__search pa-4",
              icon: he(zl),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Ho(jo(w, ["prevent"]), ["enter"]),
                Ho(jo(he(p), ["stop", "prevent"]), ["down"]),
                Ho(jo(he(m), ["stop", "prevent"]), ["up"]),
                Ho(jo(i, ["prevent"]), ["esc"]),
                Ho(jo(he(u), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        pn("section", kb, [
          e.suggestions.length && !a.value ? _a(S.$slots, "suggestions", { key: 0 }, () => [
            pn("section", bb, [
              va(pn("p", xb, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              pn("ul", $b, [
                (jt(!0), Ht(lr, null, rr(e.suggestions, (V) => (jt(), Ht("li", {
                  key: V,
                  class: Sa(["language ma-0", V === he(f) ? "language--selected" : ""]),
                  lang: V,
                  dir: he(z.getDir)(V),
                  "aria-selected": V === he(f) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (B) => g(V),
                  textContent: fd(he(z.getAutonym)(V))
                }, null, 10, Vb))), 128))
              ])
            ])
          ]) : cr("", !0),
          l.value.length ? _a(S.$slots, "search", { key: 1 }, () => [
            pn("section", Eb, [
              e.suggestions.length && !a.value ? va((jt(), Ht("p", Lb, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : cr("", !0),
              (jt(!0), Ht(lr, null, rr(l.value, (V, B) => (jt(), Ht("ul", {
                key: B,
                class: Sa(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (jt(!0), Ht(lr, null, rr(V, (x) => (jt(), Ht("li", {
                  key: x,
                  class: Sa(["language ma-0", x === he(f) ? "language--selected" : ""]),
                  lang: x,
                  dir: he(z.getDir)(x),
                  role: "option",
                  "aria-selected": x === he(f) || null,
                  tabindex: "-1",
                  onClick: (F) => g(x),
                  textContent: fd(he(z.getAutonym)(x))
                }, null, 10, Db))), 128)),
                e.allOptionEnabled && !a.value ? va((jt(), Ht("li", {
                  key: 0,
                  class: Sa(["language ma-0", he(f) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": he(f) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (x) => g("all"))
                }, null, 10, Ab)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : cr("", !0)
              ], 2))), 128))
            ])
          ]) : _a(S.$slots, "noresults", { key: 2 }, () => [
            pn("section", Tb, [
              va(pn("h3", Bb, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Mb = window.Vue.resolveDirective, _d = window.Vue.withDirectives, qo = window.Vue.openBlock, Go = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const fe = window.Vue.unref, vd = window.Vue.toDisplayString, ct = window.Vue.createVNode, Sd = window.Vue.withModifiers, Bn = window.Vue.withCtx, Nb = window.Vue.normalizeClass, Ub = {
  key: 0,
  class: "mw-ui-autonym"
}, Ib = ["lang", "dir", "textContent"], Rb = {
  key: 0,
  class: "mw-ui-autonym"
}, zb = ["lang", "dir", "textContent"], Xo = window.Vue.computed, Ob = window.Vue.inject, jb = window.Vue.ref, yd = window.Codex.CdxButton, dr = window.Codex.CdxIcon, ci = {
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
    const n = e, o = t, s = Ob("breakpoints"), a = Xo(() => s.value.mobile), r = jb(null), l = Xo(() => !!r.value), d = () => r.value = "source", g = () => r.value = "target", i = () => r.value = null, c = Xo(() => {
      if (!l.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[f];
    }), u = (h) => {
      const w = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(w, h);
    }, p = Xo(
      () => n.selectedSourceLanguage === "all"
    ), m = Xo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = Mb("i18n");
      return qo(), Go("div", {
        class: Nb(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        ct(fe(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Bn(() => [
            ct(fe(C), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Bn(() => [
                ct(fe(yd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Sd(d, ["stop"])
                }, {
                  default: Bn(() => [
                    p.value ? _d((qo(), Go("span", Ub, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (qo(), Go("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: fe(z.getDir)(e.selectedSourceLanguage),
                      textContent: vd(fe(z.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Ib)),
                    ct(fe(dr), {
                      size: "x-small",
                      icon: fe(ad)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            ct(fe(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Bn(() => [
                ct(fe(dr), { icon: fe(mh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            ct(fe(C), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Bn(() => [
                ct(fe(yd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Sd(g, ["stop"])
                }, {
                  default: Bn(() => [
                    m.value ? _d((qo(), Go("span", Rb, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (qo(), Go("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: fe(z.getDir)(e.selectedTargetLanguage),
                      textContent: vd(fe(z.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, zb)),
                    ct(fe(dr), {
                      size: "x-small",
                      icon: fe(ad)
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
        ct(fe(st), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (_) => l.value = _),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: i
        }, {
          default: Bn(() => [
            ct(fe(Vh), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: c.value,
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
const Hb = window.Vue.toDisplayString, gr = window.Vue.normalizeClass, oo = window.Vue.createElementVNode, kt = window.Vue.openBlock, Wo = window.Vue.createBlock, ya = window.Vue.createCommentVNode, Ca = window.Vue.unref, Cd = window.Vue.createVNode, qb = window.Vue.resolveDirective, kd = window.Vue.withDirectives, Ko = window.Vue.createElementBlock, bd = window.Vue.renderList, xd = window.Vue.Fragment, $d = window.Vue.withCtx, Gb = ["textContent"], Xb = {
  key: 0,
  class: "cx-translation-list-empty-placeholder pa-4"
}, Wb = { class: "cx-translation-list-empty-placeholder__icon-container" }, Kb = { class: "cx-translation-list-empty-placeholder__icon" }, Yb = { class: "cx-translation-list-empty-placeholder__title mt-5" }, Jb = { class: "cx-translation-list-empty-placeholder__description mt-2" }, Qb = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Zb = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, ka = window.Vue.ref, ut = window.Vue.computed, ex = window.Vue.inject, tx = window.Vuex.useStore, nx = window.Codex.CdxIcon, Vd = {
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
    const t = e, n = ka("all"), o = ka("all"), s = tx(), a = ut(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = Hs(), l = ka(!1), d = ka(null), g = ut(
      () => t.translationStatus === "draft"
    ), i = ut(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = ut(
      () => n.value === "all"
    ), u = ut(
      () => o.value === "all"
    ), p = ut(
      () => i.value.filter(
        (k) => (c.value || k.sourceLanguage === n.value) && (u.value || k.targetLanguage === o.value)
      ).sort((k, V) => k.lastUpdatedTimestamp < V.lastUpdatedTimestamp)
    ), m = ut(() => {
      let k = i.value.map(
        (V) => V.targetLanguage
      );
      return r.value && (k = k.filter(
        (V) => r.value.includes(V)
      )), [...new Set(k)];
    }), h = ut(() => {
      const k = i.value.map(
        (V) => V.sourceLanguage
      );
      return [...new Set(k)];
    }), f = (k) => {
      d.value = k, l.value = !0;
    }, w = ut(() => t.activeStatus === t.translationStatus), _ = ex("breakpoints"), S = ut(() => _.value.mobile), y = ut(
      () => S.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (k, V) => {
      const B = qb("i18n");
      return w.value ? (kt(), Wo(Ca(Ie), {
        key: 0,
        class: gr(["px-0", `cx-translation-list--${e.translationStatus}`])
      }, {
        header: $d(() => [
          oo("div", {
            class: gr(["cx-translation-list__header", y.value])
          }, [
            oo("h3", {
              class: gr(["px-4 mw-ui-card__title mb-0", { "pb-4": S.value }]),
              textContent: Hb(k.$i18n(`cx-translation-label-${e.translationStatus}`))
            }, null, 10, Gb),
            p.value.length ? (kt(), Wo(ci, {
              key: 0,
              "selected-source-language": n.value,
              "onUpdate:selectedSourceLanguage": V[0] || (V[0] = (x) => n.value = x),
              "selected-target-language": o.value,
              "onUpdate:selectedTargetLanguage": V[1] || (V[1] = (x) => o.value = x),
              "source-languages": h.value,
              "target-languages": m.value,
              "all-option-enabled": ""
            }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ya("", !0)
          ], 2)
        ]),
        default: $d(() => [
          a.value && !p.value.length ? (kt(), Ko("div", Xb, [
            oo("div", Wb, [
              oo("div", Kb, [
                Cd(Ca(nx), { icon: Ca(vh) }, null, 8, ["icon"])
              ])
            ]),
            kd(oo("p", Yb, null, 512), [
              [B, void 0, "cx-sx-translation-list-empty-title"]
            ]),
            kd(oo("p", Jb, null, 512), [
              [B, void 0, "cx-sx-translation-list-empty-description"]
            ])
          ])) : ya("", !0),
          a.value ? ya("", !0) : (kt(), Wo(Ca(Re), { key: 1 })),
          g.value ? (kt(), Ko("div", Qb, [
            (kt(!0), Ko(xd, null, bd(p.value, (x) => (kt(), Wo(SC, {
              key: `${e.translationStatus}-${x.key}`,
              translation: x,
              onDeleteTranslation: (F) => f(x)
            }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
          ])) : (kt(), Ko("div", Zb, [
            (kt(!0), Ko(xd, null, bd(p.value, (x) => (kt(), Wo(ob, {
              key: `${e.translationStatus}-${x.key}`,
              translation: x,
              onDeleteTranslation: (F) => f(x)
            }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
          ])),
          Cd(db, {
            modelValue: l.value,
            "onUpdate:modelValue": V[2] || (V[2] = (x) => l.value = x),
            translation: d.value
          }, null, 8, ["modelValue", "translation"])
        ]),
        _: 1
      }, 8, ["class"])) : ya("", !0);
    };
  }
}, ox = window.Vue.computed, sx = window.Vuex.useStore, He = () => {
  const e = sx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = T();
  return { sectionSuggestion: ox(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, ax = window.Vuex.useStore, ix = window.Vue.computed, rn = () => {
  const e = ax(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = T();
  return { currentTranslation: ix(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, Ed = window.Vue.computed, rx = window.Vuex.useStore, qe = () => {
  const e = rx(), { sectionSuggestion: t } = He(), { currentTranslation: n } = rn(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Ed(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Ed(() => {
    var g, i;
    const d = ((g = t.value) == null ? void 0 : g.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      d
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, lx = window.Vue.ref, cx = window.Vue.watchEffect, ux = (e, t) => b(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield se.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((d) => d.level === "2").reduce((d, g, i, c) => {
    const u = i < c.length - 1 ? c[i + 1].byteoffset : s;
    return d[g.line] = u - g.byteoffset, d;
  }, {});
  return Object.keys(l).filter((d) => a[d]).reduce((d, g) => d + l[g], 0);
}), pr = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, dx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, gx = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Eh = () => {
  const { currentSourcePage: e } = qe(), { sectionSuggestion: t } = He(), n = lx(null);
  return cx(() => {
    if (t.value)
      ux(
        e.value,
        t.value
      ).then((o) => {
        n.value = gx(
          pr(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = pr(e.value.articleSize);
      n.value = dx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: pr };
};
const mr = window.Vue.toDisplayString, hr = window.Vue.openBlock, Ld = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const tc = window.Vue.createElementVNode, px = window.Vue.unref, mx = window.Vue.withCtx, hx = window.Vue.createBlock, fx = {
  key: 0,
  class: "custom-info-chip__without-slash"
}, wx = {
  key: 1,
  class: "custom-info-chip__with-slash"
}, _x = { class: "custom-info-chip__with-slash__first" }, vx = /* @__PURE__ */ tc("span", null, "/", -1), Sx = { class: "custom-info-chip__with-slash__second" }, yx = window.Codex.CdxInfoChip, fr = window.Vue.computed, ui = {
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
    const t = e, n = fr(() => t.content.lastIndexOf("/")), o = fr(() => t.content.slice(0, n.value)), s = fr(() => t.content.slice(n.value + 1));
    return (a, r) => (hr(), hx(px(yx), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: mx(() => [
        n.value === -1 ? (hr(), Ld("div", fx, mr(e.content), 1)) : (hr(), Ld("div", wx, [
          tc("span", _x, mr(o.value), 1),
          vx,
          tc("span", Sx, mr(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const te = window.Vue.unref, dt = window.Vue.createVNode, mn = window.Vue.createElementVNode, ba = window.Vue.toDisplayString, Ye = window.Vue.withCtx, Cx = window.Vue.resolveDirective, wr = window.Vue.withDirectives, Pn = window.Vue.openBlock, so = window.Vue.createBlock, ao = window.Vue.createCommentVNode, Dd = window.Vue.withModifiers, kx = window.Vue.createElementBlock, bx = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, xx = { class: "col shrink pe-4" }, $x = ["lang", "dir", "textContent"], Vx = ["lang", "dir", "textContent"], Ex = ["textContent"], Lx = ["textContent"], _r = window.Codex.CdxIcon, gt = window.Vue.computed, Dx = window.Vue.inject, Ax = window.Vuex.useStore, nc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Lo, $n, ko],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = Ax(), { bytesToMinutes: o } = Eh(), s = gt(() => t.suggestion), a = gt(
      () => s.value.sourceTitle || s.value.title
    ), r = gt(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), l = gt(
      () => {
        var _;
        return (_ = s.value) == null ? void 0 : _.missingSectionsCount;
      }
    ), d = gt(() => {
      var _;
      return (_ = r.value) == null ? void 0 : _.description;
    }), g = gt(
      () => s.value instanceof $n
    ), i = gt(
      () => s.value instanceof ko
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: u } = Z(n), p = gt(
      () => i.value ? fh : wh
    ), m = Dx("colors"), h = gt(
      () => i.value ? m.blue600 : "currentColor"
    ), f = gt(() => {
      var _;
      return o((_ = r.value) == null ? void 0 : _.articleSize) < 15;
    }), w = gt(
      () => s.value instanceof Em || s.value instanceof Lm
    );
    return (_, S) => {
      const y = Cx("i18n");
      return s.value ? (Pn(), kx("div", bx, [
        mn("div", xx, [
          dt(te(ac), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        dt(te(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Ye(() => [
            dt(te(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Ye(() => [
                dt(te(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Ye(() => [
                    mn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: te(z.getDir)(s.value.sourceLanguage),
                      textContent: ba(a.value)
                    }, null, 8, $x)
                  ]),
                  _: 1
                }),
                dt(te(C), { shrink: "" }, {
                  default: Ye(() => [
                    mn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: te(z.getDir)(s.value.sourceLanguage),
                      textContent: ba(d.value)
                    }, null, 8, Vx)
                  ]),
                  _: 1
                }),
                f.value && !g.value && !w.value ? (Pn(), so(te(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Ye(() => [
                    wr(mn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : ao("", !0),
                g.value ? (Pn(), so(te(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Ye(() => [
                    wr(mn("small", null, null, 512), [
                      [y, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (Pn(), so(te(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Ye(() => [
                    dt(te(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Ye(() => [
                        dt(te(C), { grow: "" }, {
                          default: Ye(() => [
                            mn("small", {
                              textContent: ba(te(c))
                            }, null, 8, Ex),
                            dt(te(_r), {
                              icon: te(mh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            mn("small", {
                              textContent: ba(te(u))
                            }, null, 8, Lx)
                          ]),
                          _: 1
                        }),
                        l.value ? (Pn(), so(te(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Ye(() => [
                            wr(mn("small", null, null, 512), [
                              [y, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : ao("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : ao("", !0),
                w.value ? (Pn(), so(te(C), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: Ye(() => [
                    dt(ui, {
                      icon: te(Us),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : ao("", !0)
              ]),
              _: 1
            }),
            dt(te(C), { shrink: "" }, {
              default: Ye(() => [
                i.value ? ao("", !0) : (Pn(), so(te(_r), {
                  key: 0,
                  icon: te(To),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = Dd((k) => _.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                dt(te(_r), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = Dd((k) => _.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : ao("", !0);
    };
  }
}, Tx = "suggestion_filter_topic_area", Bx = "suggestion_filter_search_result_seed", Px = "suggestion_filter_collections", Fx = "suggestion_filter_previous_edits", Mx = "suggestion_filter_popular_articles", Lh = (e) => {
  if (e.type === ze)
    return Tx;
  if (e.type === nt)
    return Bx;
  if (e.id === pe || e.type === pe)
    return Px;
  if (e.id === Ct)
    return Fx;
  if (e.id === Pt)
    return Mx;
}, oc = (e) => {
  if (e.type === ze || e.type === pe || e.type === nt)
    return e.id;
  if (e.id === pe)
    return "all-collections";
}, Nx = window.Vue.computed, Ad = window.Vue.ref, Td = window.Vue.watch, Dh = (e, t) => {
  const o = Ad([]), s = Ad(!1), a = Nx(
    () => o.value.slice(0, 4)
  ), r = Ec(() => b(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield Ao.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), l = () => {
    s.value = !0, o.value = [], r();
  };
  return Td(t, l), Td(e, l), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, vr = window.Vue.ref, Bd = window.Vue.watch, Ux = mw.loader.require("ext.cx.articletopics"), Ix = Ux.flatMap((e) => e.topics), Rx = () => {
  const e = vr(""), t = vr(!1), n = vr({ topics: [], areas: [] }), o = ue(), { pageCollections: s } = wc(), { sourceLanguageURLParameter: a } = T(), r = (g) => (g = g.toLowerCase(), Ix.filter(
    (i) => i.label.toLowerCase().includes(g)
  )), l = (g) => (g = g.toLowerCase(), s.value.filter(
    (i) => i.name.toLowerCase().includes(g)
  )), { searchResultsSlice: d } = Dh(a, e);
  return Bd(d, () => {
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
  }), Bd(e, () => b(void 0, null, function* () {
    t.value = !0, n.value.areas = [
      ...l(e.value).map((g) => ({
        label: g.name,
        value: g.name,
        description: g.description,
        icon: Us,
        filterType: pe,
        filterId: g.name
      })),
      ...r(e.value).map((g) => ({
        label: g.label,
        value: g.label,
        description: o.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: Us,
        filterType: ze,
        filterId: g.topicId
      }))
    ], t.value = !1;
  })), { searchInput: e, searchLoading: t, searchResults: n };
};
const ne = window.Vue.unref, pt = window.Vue.createVNode, Fn = window.Vue.withCtx, zx = window.Vue.resolveDirective, bt = window.Vue.createElementVNode, Yo = window.Vue.withDirectives, Pd = window.Vue.toDisplayString, Ox = window.Vue.createTextVNode, jx = window.Vue.vShow, Hx = window.Vue.isRef, Fd = window.Vue.renderList, Md = window.Vue.Fragment, qt = window.Vue.openBlock, Mn = window.Vue.createElementBlock, qx = window.Vue.normalizeClass, Nd = window.Vue.createBlock, Ud = window.Vue.createCommentVNode, Gx = { class: "sx-suggestions-filters" }, Xx = { class: "mb-0" }, Wx = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, Kx = { class: "mb-3" }, Yx = { class: "px-4 pb-4 pt-7" }, Jx = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, Qx = { class: "sx-suggestions-filters__group-label mb-3" }, Zx = { class: "sx-suggestions-filters__group-filters mb-3" }, e8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, t8 = { key: 0 }, n8 = { key: 1 }, Sr = window.Vue.ref, Id = window.Vue.computed, o8 = window.Vue.inject, Rd = window.Codex.CdxButton, s8 = window.Codex.CdxIcon, a8 = window.Codex.CdxTextInput, zd = window.Codex.CdxMenu, i8 = {
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
      [Ct]: yh,
      [Pt]: _h,
      [pe]: Us,
      [ze]: null,
      [nt]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r, findSelectedFilter: l } = _c(), d = je(), g = () => {
      m(), n("update:modelValue", !1);
    }, i = () => {
      d({ event_type: "suggestion_filters_close" }), g();
    }, c = () => {
      p.value && (d({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: oc(
          p.value
        )
      }), r(p.value)), g();
    }, u = Sr(!1), p = Sr(null), m = () => {
      p.value = null;
    }, h = (U) => {
      const M = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: Lh(U),
        event_context: oc(U)
      };
      d(M), p.value = U, u.value = !0;
    }, f = (U) => p.value ? p.value.id === U.id && p.value.type === U.type : a(U), w = o8("breakpoints"), _ = Id(() => w.value.mobile), { getFilterProvider: S } = vc(), { searchInput: y, searchResults: k } = Rx(), V = Id(
      () => p.value || l()
    ), B = Sr(null), x = (U) => {
      h({
        type: nt,
        id: U.label,
        label: U.label
      }), y.value = "";
    }, F = (U) => {
      h({
        type: U.filterType,
        id: U.filterId,
        label: U.label
      }), y.value = "";
    };
    return (U, M) => {
      const N = zx("i18n");
      return qt(), Nd(ne(st), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: _.value,
        header: !1
      }, {
        default: Fn(() => [
          bt("section", Gx, [
            pt(ne(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Fn(() => [
                pt(ne(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Fn(() => [
                    pt(ne(Rd), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": U.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: i
                    }, {
                      default: Fn(() => [
                        pt(ne(s8), { icon: ne(To) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                pt(ne(C), {
                  grow: "",
                  align: "center"
                }, {
                  default: Fn(() => [
                    Yo(bt("h5", Xx, null, 512), [
                      [N, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                pt(ne(C), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Fn(() => [
                    Yo(pt(ne(Rd), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: c
                    }, {
                      default: Fn(() => [
                        Ox(Pd(U.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [jx, u.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            bt("div", Wx, [
              Yo(bt("h5", Kx, null, 512), [
                [N, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              bt("div", null, [
                pt(ui, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: V.value.label,
                  icon: o[ne(S)(V.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            bt("div", Yx, [
              pt(ne(a8), {
                modelValue: ne(y),
                "onUpdate:modelValue": M[0] || (M[0] = (G) => Hx(y) ? y.value = G : null),
                placeholder: U.$i18n("cx-sx-suggestions-filter-search-input-placeholder"),
                "input-type": "search",
                "start-icon": ne(Hk),
                clearable: !!ne(y)
              }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
            ]),
            ne(y) ? (qt(), Mn("div", e8, [
              ne(k).topics.length ? (qt(), Mn("div", t8, [
                Yo(bt("h5", null, null, 512), [
                  [N, void 0, "cx-sx-suggestions-filter-search-results-topics-label"]
                ]),
                pt(ne(zd), {
                  selected: B.value,
                  "onUpdate:selected": M[1] || (M[1] = (G) => B.value = G),
                  expanded: !0,
                  "menu-items": ne(k).topics,
                  "show-thumbnail": "",
                  onMenuItemClick: x
                }, null, 8, ["selected", "menu-items"])
              ])) : Ud("", !0),
              ne(k).areas.length ? (qt(), Mn("div", n8, [
                Yo(bt("h5", null, null, 512), [
                  [N, void 0, "cx-sx-suggestions-filter-search-results-areas-label"]
                ]),
                pt(ne(zd), {
                  selected: B.value,
                  "onUpdate:selected": M[2] || (M[2] = (G) => B.value = G),
                  expanded: !0,
                  "menu-items": ne(k).areas,
                  onMenuItemClick: F
                }, null, 8, ["selected", "menu-items"])
              ])) : Ud("", !0)
            ])) : (qt(), Mn("div", Jx, [
              (qt(!0), Mn(Md, null, Fd(ne(s), (G) => (qt(), Mn("div", {
                key: G.id,
                class: "sx-suggestions-filters__group"
              }, [
                bt("div", Qx, Pd(G.label), 1),
                bt("div", Zx, [
                  (qt(!0), Mn(Md, null, Fd(G.filters, (H) => (qt(), Nd(ui, {
                    key: H.id,
                    class: qx(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                      "sx-suggestions-filters__filter--active": f(H)
                    }]),
                    icon: o[ne(S)(H)],
                    content: H.label,
                    onClick: (Ft) => h(H)
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
const yr = window.Vue.unref, xa = window.Vue.openBlock, Od = window.Vue.createBlock;
window.Vue.createCommentVNode;
const r8 = window.Vue.renderList, l8 = window.Vue.Fragment, jd = window.Vue.createElementBlock, c8 = window.Vue.normalizeClass, u8 = window.Vue.createVNode, d8 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Hd = window.Vue.ref, g8 = window.Vue.computed, qd = window.Vue.watch, p8 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ue(), n = je(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r
    } = _c(), l = Hd(!1), d = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), l.value = !0;
    }, g = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: Lh(h),
        event_context: oc(h)
      };
      n(f), s(h);
    }, i = {
      [Ct]: yh,
      [Pt]: _h,
      [pe]: Us,
      [ze]: null
    }, { getFilterProvider: c } = vc(), u = (h) => ({
      id: h.id,
      type: h.type,
      icon: i[c(h)],
      label: h.label,
      action: g
    }), p = Hd(o());
    qd(l, (h) => {
      h || (p.value = o());
    }), qd(r, (h) => {
      h || (p.value = o());
    });
    const m = g8(() => [
      ...p.value.map(u),
      {
        id: "more",
        icon: bc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: d
      }
    ]);
    return (h, f) => yr(r) ? (xa(), Od(yr(Re), { key: 0 })) : (xa(), jd("div", d8, [
      (xa(!0), jd(l8, null, r8(m.value, (w) => (xa(), Od(ui, {
        key: w.label,
        class: c8(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": yr(a)(w) }]),
        icon: w.icon,
        content: w.label,
        onClick: (_) => w.action(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      u8(i8, {
        modelValue: l.value,
        "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, m8 = window.Vue.computed, h8 = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Hs(), n = m8(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Nn = window.Vue.computed, Gd = window.Vue.ref, f8 = window.Vue.watch, w8 = window.Vuex.useStore, _8 = () => {
  const e = w8(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = T(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = hc(), r = je(), l = Nn(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), d = Nn(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = Nn(
    () => !l.value && !d.value
  ), i = Gd(0), c = Gd(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, p = 4, m = Nn(
    () => a(i.value)
  ), h = Nn(
    () => s(c.value)
  ), f = () => {
    V(), U(), B(), M();
  }, {
    fetchNextSectionSuggestionsSlice: w,
    fetchNextPageSuggestionsSlice: _
  } = Sc(), S = (N) => N.length === u, y = Nn(
    () => S(h.value)
  ), k = Nn(
    () => S(m.value)
  ), V = () => {
    const N = (i.value + 1) % p, G = S(
      a(N)
    );
    (!k.value || !G) && w();
  }, B = () => {
    const N = (c.value + 1) % p, G = S(
      s(N)
    );
    (!y.value || !G) && _();
  }, x = (N) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", N), V();
  }, F = (N) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", N), B();
  }, U = () => i.value = (i.value + 1) % p, M = () => c.value = (c.value + 1) % p;
  return f8(
    o,
    () => {
      c.value = 0, B(), i.value = 0, V();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: h,
    currentSectionSuggestionsSlice: m,
    discardPageSuggestion: F,
    discardSectionSuggestion: x,
    onSuggestionRefresh: f,
    pageSuggestionsLoading: d,
    sectionSuggestionsLoading: l,
    showRefreshButton: g,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: k
  };
}, v8 = window.Vuex.useStore, Lc = () => {
  const e = v8(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Sc(), o = (g, i, c) => e.state.suggestions.pageSuggestions.find(
    (u) => u.sourceLanguage === g && u.targetLanguage === i && u.sourceTitle === c
  ), s = (g) => b(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: u } = g;
    yield se.markFavorite(i, c, u);
    const p = new ko({
      title: i,
      sourceLanguage: c,
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
    markFavoriteSuggestion: (g, i, c) => b(void 0, null, function* () {
      const u = o(
        i,
        c,
        g
      );
      u && (e.commit(
        "suggestions/removePageSuggestionFromList",
        u
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, c, g);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield se.markFavorite(
        g,
        i,
        c
      );
      const m = new ko({
        title: g,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), se.unmarkFavorite(g))
  };
}, S8 = "suggestion_no_seed", y8 = "suggestion_recent_edit", C8 = "suggestion_topic_area", k8 = "suggestion_search_result_seed", b8 = "suggestion_featured", x8 = "suggestion_collections", $8 = () => {
  const { currentSuggestionFilters: e } = T(), { defaultSeedsFetched: t } = lh();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === Ct)
      return t.value ? S8 : y8;
    if (n === ze)
      return C8;
    if (n === nt)
      return k8;
    if (o === Pt)
      return b8;
    if (o === pe || n === pe)
      return x8;
    throw new Error("Event source cannot be empty");
  };
};
const Xd = window.Vue.normalizeClass, V8 = window.Vue.resolveDirective, Jo = window.Vue.createElementVNode, $a = window.Vue.withDirectives, Y = window.Vue.unref, xt = window.Vue.openBlock, Un = window.Vue.createBlock, Qo = window.Vue.createCommentVNode, Zo = window.Vue.createVNode, es = window.Vue.withCtx, Wd = window.Vue.renderList, Kd = window.Vue.Fragment, Cr = window.Vue.createElementBlock, E8 = window.Vue.toDisplayString, L8 = window.Vue.createTextVNode, D8 = window.Vue.vShow, A8 = { class: "cx-suggestion-list" }, T8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, B8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, P8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Yd = window.Vue.computed, F8 = window.Vue.inject, M8 = window.Vue.ref, N8 = window.Codex.CdxButton, U8 = window.Codex.CdxIcon, I8 = {
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
    } = T(), { supportedLanguageCodes: s, availableTargetLanguages: a } = h8(), r = dh(), l = (H) => r(H, n.value), d = (H) => r(t.value, H), g = $8(), i = Ys(), c = (H) => {
      i(
        H.sourceTitle,
        H.sourceLanguage,
        H.targetLanguage,
        g(),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: w,
      sectionSuggestionsLoading: _,
      showRefreshButton: S,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: k
    } = _8(), V = M8(null), B = je(), x = () => {
      B({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), V.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: F, markFavoritePageSuggestion: U } = Lc(), M = F8("breakpoints"), N = Yd(() => M.value.mobile), G = Yd(
      () => N.value ? null : "pb-2 flex justify-between items-center"
    );
    return (H, Ft) => {
      const at = V8("i18n");
      return $a((xt(), Cr("div", A8, [
        Zo(Y(Ie), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: es(() => [
            Jo("div", {
              class: Xd(["cx-suggestion-list__header-card__header px-4", G.value])
            }, [
              $a(Jo("h3", {
                class: Xd(["mw-ui-card__title mb-0", { "py-3": N.value }])
              }, null, 2), [
                [at, void 0, "cx-suggestionlist-title"]
              ]),
              N.value ? Qo("", !0) : (xt(), Un(ci, {
                key: 0,
                "source-languages": Y(s),
                "target-languages": Y(a),
                "selected-source-language": Y(t),
                "selected-target-language": Y(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": d
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Zo(p8)
          ]),
          default: es(() => [
            N.value ? (xt(), Un(ci, {
              key: 0,
              "source-languages": Y(s),
              "target-languages": Y(a),
              "selected-source-language": Y(t),
              "selected-target-language": Y(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": d
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Qo("", !0)
          ]),
          _: 1
        }),
        Zo(Y(Ie), {
          ref_key: "pageSuggestionsList",
          ref: V,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: es(() => [
            $a(Jo("h5", T8, null, 512), [
              [at, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (xt(!0), Cr(Kd, null, Wd(Y(u), (me, De) => (xt(), Un(nc, {
              key: `page-suggestion-${De}`,
              suggestion: me,
              onClose: (it) => Y(m)(me),
              onClick: (it) => c(me),
              onBookmark: (it) => Y(U)(me)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Y(w) && !Y(y) ? (xt(), Un(Y(Re), { key: 0 })) : Qo("", !0)
          ]),
          _: 1
        }, 512),
        Zo(Y(Ie), { class: "cx-suggestion-list__section-suggestions pa-0 mb-0" }, {
          default: es(() => [
            $a(Jo("h5", B8, null, 512), [
              [at, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (xt(!0), Cr(Kd, null, Wd(Y(p), (me, De) => (xt(), Un(nc, {
              key: `section-suggestion-${De}`,
              class: "ma-0",
              suggestion: me,
              onClose: (it) => Y(h)(me),
              onClick: (it) => c(me),
              onBookmark: (it) => Y(F)(me)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Y(_) && !Y(k) ? (xt(), Un(Y(Re), { key: 0 })) : Qo("", !0)
          ]),
          _: 1
        }),
        Jo("div", P8, [
          Y(S) ? (xt(), Un(Y(N8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: x
          }, {
            default: es(() => [
              Zo(Y(U8), {
                class: "me-1",
                icon: Y(Sh)
              }, null, 8, ["icon"]),
              L8(" " + E8(H.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Qo("", !0)
        ])
      ], 512)), [
        [D8, e.active]
      ]);
    };
  }
}, R8 = window.Vue.resolveDirective, z8 = window.Vue.createElementVNode, O8 = window.Vue.withDirectives, j8 = window.Vue.renderList, H8 = window.Vue.Fragment, kr = window.Vue.openBlock, q8 = window.Vue.createElementBlock, Jd = window.Vue.unref, Qd = window.Vue.createBlock, Zd = window.Vue.withCtx, G8 = window.Vue.createCommentVNode, X8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, W8 = window.Vue.computed, K8 = window.Vuex.useStore, Y8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = K8(), n = W8(() => t.state.suggestions.favorites || []), o = Ys(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Lc();
    return (r, l) => {
      const d = R8("i18n");
      return n.value.length ? (kr(), Qd(Jd(Ie), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Zd(() => [
          O8(z8("h3", X8, null, 512), [
            [d, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Zd(() => [
          (kr(!0), q8(H8, null, j8(n.value, (g, i) => (kr(), Qd(nc, {
            key: `favorite-${i}`,
            suggestion: g,
            onClick: (c) => s(g),
            onBookmark: (c) => Jd(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : G8("", !0);
    };
  }
};
const J8 = window.Vue.resolveDirective, ts = window.Vue.createElementVNode, Q8 = window.Vue.withDirectives, Z8 = window.Vue.renderList, e2 = window.Vue.Fragment, eg = window.Vue.openBlock, tg = window.Vue.createElementBlock, t2 = window.Vue.unref, n2 = window.Vue.createVNode, o2 = window.Vue.toDisplayString, s2 = { class: "cx-help-panel pa-4" }, a2 = { class: "cx-help-panel__item-list mt-6 ps-2" }, i2 = ["href"], r2 = ["textContent"], l2 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ue(), n = [
      {
        icon: Xw,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Ew,
        label: t.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Ww,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ];
    return (o, s) => {
      const a = J8("i18n");
      return eg(), tg("div", s2, [
        Q8(ts("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        ts("ul", a2, [
          (eg(), tg(e2, null, Z8(n, (r, l) => ts("li", {
            key: l,
            class: "mt-4"
          }, [
            ts("a", {
              href: r.href,
              target: "_blank"
            }, [
              n2(t2(xe), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              ts("span", {
                textContent: o2(r.label)
              }, null, 8, r2)
            ], 8, i2)
          ])), 64))
        ])
      ]);
    };
  }
};
const c2 = window.Vue.resolveDirective, io = window.Vue.createElementVNode, br = window.Vue.withDirectives, ng = window.Vue.toDisplayString, xr = window.Vue.unref, $r = window.Vue.withCtx, Vr = window.Vue.createVNode, u2 = window.Vue.openBlock, d2 = window.Vue.createElementBlock, g2 = { class: "cx-stats-panel pa-4" }, p2 = ["textContent"], m2 = { class: "cx-stats-panel__monthly-stats-label" }, h2 = ["textContent"], f2 = { class: "cx-stats-panel__total-stats-label" }, w2 = window.Vue.ref, og = window.Vue.computed, _2 = window.Vue.watch, v2 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = og(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = og(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = w2(null);
    return _2(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), d = Object.keys(t.stats || {}).sort(), g = d.reduce(
          (y, k) => Math.max(y, r[k].delta),
          0
        ), i = d.map((y) => r[y].delta), c = a.value.getBoundingClientRect().width, u = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = u;
        const p = 4, m = 6, h = 50, f = (h - p) / g;
        let w = p;
        const _ = Math.floor(
          (c - p) / (m + p)
        ), S = i.slice(
          Math.max(i.length - _, 0)
        );
        S.forEach((y, k) => {
          k === S.length - 1 && (l.fillStyle = "#36c");
          const V = h - y * f;
          l.fillRect(w, V, m, y * f), w += m + p;
        });
      }
    ), (r, l) => {
      const d = c2("i18n");
      return u2(), d2("div", g2, [
        br(io("h5", null, null, 512), [
          [d, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Vr(xr(P), null, {
          default: $r(() => [
            Vr(xr(C), { class: "cx-stats-panel__monthly-stats" }, {
              default: $r(() => [
                io("h3", {
                  textContent: ng(s.value)
                }, null, 8, p2),
                br(io("h5", m2, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Vr(xr(C), { class: "cx-stats-panel__total-stats" }, {
              default: $r(() => [
                io("h3", {
                  textContent: ng(o.value)
                }, null, 8, h2),
                br(io("h5", f2, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        io("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Ah = () => {
  const e = je();
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
const S2 = window.Vue.renderSlot, y2 = window.Vue.unref, C2 = window.Vue.createVNode, k2 = window.Vue.createElementVNode, b2 = window.Vue.openBlock, x2 = window.Vue.createElementBlock, $2 = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, V2 = { class: "col-12 ma-0 pa-0" }, E2 = {
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
    const n = t, o = Ah(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (b2(), x2("footer", $2, [
      k2("div", V2, [
        S2(a.$slots, "default", {}, () => [
          C2(y2(Is), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, L2 = window.Vuex.useStore;
let Va = [];
const Th = () => {
  const e = L2();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Va.includes(o) ? Promise.resolve() : (Va.push(o), Ao.fetchLanguageTitles(t, n).then((s) => {
      Va = Va.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, D2 = window.Vuex.useStore, Bh = () => {
  const e = D2(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), { isDefaultFilter: r } = wm(), { previousRoute: l } = Z(e), d = je(), g = () => {
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
    }[l.value];
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
}, A2 = () => {
  const e = Ys(), t = Th(), { logDashboardOpenEvent: n, getEventSource: o } = Bh(), {
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
      o()
    );
  });
}, T2 = window.Vuex.useStore, Ci = () => {
  const e = T2(), t = (o) => b(void 0, null, function* () {
    let s = yield ot.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), s.forEach(
      (r) => e.commit("translator/addTranslation", r)
    );
    const a = {};
    for (const r of s) {
      const l = r.sourceLanguage;
      a[l] = a[l] || [], a[l].push(r);
    }
    e.commit("translator/setTranslationsLoaded", { status: o, value: !0 });
    for (const [r, l] of Object.entries(a))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: r,
        titles: l.map((d) => d.sourceTitle)
      }), l.forEach((d) => {
        const { targetLanguage: g, targetTitle: i } = d, c = !!e.getters["mediawiki/getPage"](
          g,
          i
        );
        i && !c && e.commit(
          "mediawiki/addPage",
          new Do({ title: i, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, B2 = window.Vuex.useStore, P2 = () => {
  const e = B2();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield se.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), se.fetchSectionSuggestion(
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
}, F2 = () => {
  const e = A2(), { fetchAllTranslations: t } = Ci(), n = yc(), o = P2(), { fetchPageCollections: s } = wc(), { pageURLParameter: a, sectionURLParameter: r, draftURLParameter: l } = T(), { logDashboardOpenEvent: d } = Bh();
  return () => b(void 0, null, function* () {
    if (s(), yield uh()(), a.value) {
      e({
        pageTitle: a.value,
        isDraftTranslation: l.value,
        sectionTitle: r.value
      });
      return;
    }
    d();
    try {
      yield o();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield t(), n();
  });
}, sg = window.Vue.computed, M2 = window.Vue.ref, N2 = window.Vue.watch, U2 = window.Vue.watchEffect, I2 = window.Vuex.useStore, R2 = ["suggestions", "draft", "published"], z2 = () => {
  const e = I2(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = T(), o = M2(null);
  if (R2.includes(t.value))
    o.value = t.value;
  else {
    const s = sg(
      () => e.state.translator.translationsLoaded.draft
    ), a = sg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", N2(s, (r) => {
      r && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return U2(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, O2 = window.Vue.computed, j2 = () => {
  const e = ue();
  return O2(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Aw,
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
        icon: Dw,
        type: "text"
      }
    }
  ]);
};
const de = window.Vue.unref, ye = window.Vue.createVNode, H2 = window.Vue.toDisplayString, q2 = window.Vue.createTextVNode, Gt = window.Vue.withCtx, Er = window.Vue.openBlock, ag = window.Vue.createBlock, ig = window.Vue.createCommentVNode, G2 = window.Vue.vShow, X2 = window.Vue.withDirectives, W2 = window.Vue.isRef, K2 = window.Vue.createElementBlock, Y2 = window.Vue.computed, J2 = window.Vuex.useStore, Q2 = window.Codex.CdxButton, Z2 = window.Codex.CdxIcon, e$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Se(), n = je(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    F2()();
    const a = J2();
    a.dispatch("translator/fetchTranslatorStats");
    const r = Y2(() => a.state.translator.translatorStats), l = z2(), d = j2(), g = Ah(), i = (c) => {
      g(c), l.value = c;
    };
    return (c, u) => (Er(), K2("div", null, [
      ye(de(P), { class: "ma-0 py-4" }, {
        default: Gt(() => [
          ye(de(Q2), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: Gt(() => [
              ye(de(Z2), {
                class: "me-1",
                icon: de(Ql)
              }, null, 8, ["icon"]),
              q2(" " + H2(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      ye(de(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: Gt(() => [
          c.$mwui.breakpoint.tabletAndUp ? (Er(), ag(de(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: Gt(() => [
              ye(de(Is), {
                id: "dashboard-list-selector--desktop",
                items: de(d),
                active: de(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : ig("", !0),
          ye(de(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: Gt(() => [
              X2(ye(Y8, null, null, 512), [
                [G2, de(l) === "suggestions"]
              ]),
              ye(I8, {
                active: de(l) === "suggestions"
              }, null, 8, ["active"]),
              ye(Vd, {
                "translation-status": "draft",
                "active-status": de(l)
              }, null, 8, ["active-status"]),
              ye(Vd, {
                "translation-status": "published",
                "active-status": de(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          ye(de(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: Gt(() => [
              ye(de(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: Gt(() => [
                  ye(de(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: Gt(() => [
                      ye(v2, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  ye(de(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: Gt(() => [
                      ye(l2)
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
      c.$mwui.breakpoint.mobile ? (Er(), ag(E2, {
        key: 0,
        active: de(l),
        "onUpdate:active": u[0] || (u[0] = (p) => W2(l) ? l.value = p : null),
        items: de(d)
      }, null, 8, ["active", "items"])) : ig("", !0)
    ]));
  }
}, t$ = {
  name: "DashboardView",
  components: { CxDashboard: e$ }
}, n$ = window.Vue.resolveComponent, o$ = window.Vue.createVNode, s$ = window.Vue.openBlock, a$ = window.Vue.createElementBlock, i$ = { class: "cx-translation-dashboard" };
function r$(e, t, n, o, s, a) {
  const r = n$("cx-dashboard");
  return s$(), a$("main", i$, [
    o$(r, { class: "mb-4 pb-12" })
  ]);
}
const rg = /* @__PURE__ */ Q(t$, [["render", r$]]), ro = window.Vue.computed, l$ = () => {
  const { sectionSuggestion: e } = He(), { targetLanguageURLParameter: t } = T(), { currentTranslation: n } = rn(), o = ro(
    () => {
      var u, p, m;
      return (m = (p = (u = e.value) == null ? void 0 : u.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = ro(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.missingSectionsCount;
    }
  ), a = ro(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = an(), d = ro(() => r ? q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), g = (u) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : u ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = ro(() => {
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
  }), c = ro(
    () => {
      var u;
      return !r.value || ((u = e.value) == null ? void 0 : u.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: i,
    getActionButtonLabel: g,
    isProgressiveButton: c,
    targetArticlePath: d
  };
}, Ph = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function c$(e) {
  return e.$el = $(e), e;
}
function u$(e, t, n, o) {
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
function d$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function g$(e, t) {
  return b(this, null, function* () {
    yield Dc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = c$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const p$ = window.Vue.computed, m$ = window.Vue.onMounted, h$ = window.Vue.ref;
function f$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const w$ = {
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
    const n = h$(null);
    let o = null;
    const s = p$(() => o.getHtml()), a = () => {
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
    return m$(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = f$;
      const i = yield g$(d, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = u$(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = d$, o.focus();
    })), { sxeditor: n };
  }
}, sc = window.Vue.createElementVNode, _$ = window.Vue.openBlock, v$ = window.Vue.createElementBlock, S$ = ["lang", "dir"], y$ = /* @__PURE__ */ sc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ sc("div", { class: "toolbar" })
], -1), C$ = ["lang", "dir"];
function k$(e, t, n, o, s, a) {
  return _$(), v$("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    y$,
    sc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, C$)
  ], 8, S$);
}
const b$ = /* @__PURE__ */ Q(w$, [["render", k$]]);
function Dc() {
  return mw.loader.using("mw.cx3.ve");
}
const x$ = window.Vuex.useStore, Fh = () => {
  const e = x$();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Dc(), new Promise((s) => {
      setTimeout(() => {
        const a = Dm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, $$ = window.Vuex.useStore, Ac = () => {
  const e = $$();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield Ao.fetchPageContent(
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
}, V$ = window.Vue.computed, E$ = window.Vue.inject, Zn = () => {
  const e = E$("breakpoints");
  return { isDesktop: V$(
    () => !q.isMobileDomain() && e.value.tabletAndUp
  ) };
}, L$ = window.Vuex.useStore, Tc = () => {
  const e = L$(), { currentSourcePage: t } = qe(), n = Fh(), o = Ac(), { isDesktop: s } = Zn(), {
    setSectionURLParam: a,
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: d
  } = T(), g = (u, p) => b(void 0, null, function* () {
    u() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      r.value,
      l.value,
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
}, ki = () => (e, t, n, o = {}) => {
  q.setCXToken(e, t, n), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, D$ = (e, t, n, o) => b(void 0, null, function* () {
  var l, d, g;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((d = t.mt) == null ? void 0 : d.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, r = yield Tm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), A$ = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, T$ = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return D$(e, t, n, o);
  A$(e, t);
}), B$ = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const d = o.find(
          (i) => i.subSectionId === l.id
        );
        if (!d)
          continue;
        const g = T$(
          l,
          d,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, P$ = { restoreCorporaDraft: B$ }, ns = window.Vue.computed, F$ = window.Vuex.useStore, K = () => {
  const e = F$(), { currentSourcePage: t, currentTargetPage: n } = qe(), { currentMTProvider: o } = Z(e), { sectionURLParameter: s } = T(), a = ns(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = ns(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = ns(
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
    selectedContentTranslationUnit: l,
    currentProposedTranslation: d,
    targetPageTitleForPublishing: g
  };
}, M$ = window.Vuex.useStore, Bc = () => {
  const e = je(), t = M$(), n = Se(), { currentSourcePage: o } = qe(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = JC(), l = Fh(), { isDesktop: d } = Zn(), g = ki(), i = Ac(), { sourceSection: c } = K();
  return (u) => b(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: p,
      targetLanguage: m,
      sourceTitle: h,
      targetTitle: f,
      pageRevision: w,
      isLeadSectionTranslation: _
    } = u;
    if (d.value) {
      const k = {};
      _ || (k.sourcesection = u.sourceSectionTitle), g(
        s.value,
        a.value,
        h,
        k
      );
      return;
    }
    q.unsetCXToken(
      p,
      m,
      h
    );
    const { setTranslationURLParams: S } = T();
    S(u), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== m) && r(u), t.dispatch("application/getCXServerToken"), e({
      event_type: "dashboard_translation_continue",
      translation_id: u.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: h,
      translation_source_section: u.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: f,
      translation_target_section: u.targetSectionTitle,
      translation_type: _ ? "article" : "section"
    }), yield i(
      s.value,
      a.value,
      h,
      w
    ), yield l(s.value, h), u.restored || (yield ot.fetchTranslationUnits(u.translationId).then(
      (k) => P$.restoreCorporaDraft(
        o.value,
        f,
        a,
        k
      )
    ).then(() => u.restored = !0));
    let y;
    _ ? (c.value.originalTitle = h, y = f) : y = u.targetSectionTitle, c.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, N$ = window.Vue.ref, U$ = window.Vuex.useStore, I$ = () => {
  const e = Se(), t = U$(), { isDesktop: n } = Zn(), { logDashboardTranslationStartEvent: o } = Vc(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = T(), { sourceLanguage: r, targetLanguage: l } = Z(t), { targetPageExists: d } = an(), { selectPageSectionByIndex: g, selectPageSectionByTitle: i } = Tc(), c = ki(), u = () => b(void 0, null, function* () {
    yield i(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } });
  }), p = Bc(), m = N$(!1), { currentTranslation: h } = rn(), f = () => {
    h.value ? h.value.isArticleTranslation && !n.value ? m.value = !0 : p(h.value) : a.value ? u() : d.value ? e.push({ name: "sx-section-selector" }) : w();
  }, w = () => b(void 0, null, function* () {
    o(), n.value ? c(
      r.value,
      l.value,
      s.value
    ) : (g(0), Ph() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: w,
    handlePrimaryButtonClick: f,
    translationConfirmationDialogOn: m
  };
};
const R$ = window.Vue.resolveDirective, lg = window.Vue.createElementVNode, cg = window.Vue.withDirectives, z$ = window.Vue.unref, O$ = window.Vue.withCtx, j$ = window.Vue.openBlock, H$ = window.Vue.createBlock, q$ = {
  href: "",
  target: "_blank"
}, G$ = window.Codex.CdxDialog, X$ = {
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
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function d() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (g, i) => {
      const c = R$("i18n");
      return j$(), H$(z$(G$), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (u) => s(u)),
        onPrimary: d,
        onDefault: i[1] || (i[1] = (u) => s(!1))
      }, {
        default: O$(() => [
          cg(lg("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          cg(lg("a", q$, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ie = window.Vue.unref, W$ = window.Vue.resolveDirective, os = window.Vue.createElementVNode, ug = window.Vue.withDirectives, ss = window.Vue.toDisplayString, as = window.Vue.openBlock, Lr = window.Vue.createElementBlock, Dr = window.Vue.createCommentVNode, Je = window.Vue.createVNode, mt = window.Vue.withCtx, Ar = window.Vue.createTextVNode, K$ = window.Vue.withModifiers, dg = window.Vue.createBlock, Y$ = window.Vue.Fragment, J$ = { class: "sx-translation-confirmer-body pb-4" }, Q$ = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, Z$ = ["textContent"], e4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, t4 = ["href"], n4 = ["textContent"], Tr = window.Vue.computed, o4 = window.Vue.inject, gg = window.Vue.ref, s4 = window.Vue.watchEffect, a4 = window.Vuex.useStore, Br = window.Codex.CdxButton, i4 = window.Codex.CdxIcon, r4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Se(), o = a4();
    o4("colors");
    const { sectionSuggestion: s } = He(), { targetLanguageAutonym: a } = Z(o), { sectionURLParameter: r } = T(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: d,
      translationConfirmationDialogOn: g
    } = I$(), i = gg(!1), c = gg(null), u = () => b(this, null, function* () {
      const M = yield ot.checkUnreviewedTranslations();
      M !== !0 && (i.value = !0, c.value = M.targetUrl);
    }), p = () => b(this, null, function* () {
      yield u(), !i.value && l();
    }), m = () => b(this, null, function* () {
      yield u(), !i.value && d();
    }), h = t;
    s4(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: f,
      getActionButtonLabel: w,
      isProgressiveButton: _,
      targetArticlePath: S
    } = l$(), y = ue(), k = Tr(
      () => y.i18n(w(!!r.value))
    ), { isDesktop: V } = Zn(), B = Tr(
      () => y.i18n(...f.value)
    ), x = () => b(this, null, function* () {
      yield u(), !i.value && n.push({ name: "sx-section-selector" });
    }), F = Tr(() => {
      var M, N;
      return r.value && !!((N = (M = s.value) == null ? void 0 : M.sourceSections) != null && N.length);
    }), { targetPageExists: U } = an();
    return (M, N) => {
      const G = W$("i18n");
      return as(), Lr(Y$, null, [
        os("section", J$, [
          ie(r) ? (as(), Lr("section", Q$, [
            ug(os("h6", null, null, 512), [
              [G, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            os("h5", {
              class: "ma-0",
              textContent: ss(ie(r))
            }, null, 8, Z$)
          ])) : ie(U) ? (as(), Lr("section", e4, [
            Je(ie(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: mt(() => [
                ug(Je(ie(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [G, [ie(a)], "cx-sx-existing-translation-status"]
                ]),
                Je(ie(C), { shrink: "" }, {
                  default: mt(() => [
                    os("a", {
                      href: ie(S),
                      target: "_blank"
                    }, [
                      Je(ie(i4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ie(xc)
                      }, null, 8, ["icon"])
                    ], 8, t4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Je(ie(P), { class: "ma-0" }, {
              default: mt(() => [
                Je(ie(C), null, {
                  default: mt(() => [
                    os("span", {
                      textContent: ss(B.value)
                    }, null, 8, n4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Dr("", !0),
          Je(ie(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: mt(() => [
              F.value ? (as(), dg(ie(C), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: mt(() => [
                  Je(ie(Br), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: K$(x, ["stop"])
                  }, {
                    default: mt(() => [
                      Ar(ss(M.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Dr("", !0),
              ie(U) && ie(V) ? (as(), dg(ie(C), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: mt(() => [
                  Je(ie(Br), {
                    size: "large",
                    onClick: p
                  }, {
                    default: mt(() => [
                      Ar(ss(M.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Dr("", !0),
              Je(ie(C), { shrink: "" }, {
                default: mt(() => [
                  Je(ie(Br), {
                    weight: "primary",
                    size: "large",
                    action: ie(_) ? "progressive" : "default",
                    onClick: m
                  }, {
                    default: mt(() => [
                      Ar(ss(k.value), 1)
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
        Je(X$, {
          modelValue: i.value,
          "onUpdate:modelValue": N[0] || (N[0] = (H) => i.value = H),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const pg = window.Vue.unref, l4 = window.Vue.openBlock, c4 = window.Vue.createBlock, mg = window.Vue.computed, Mh = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Hs(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = T(), { currentLanguageTitleGroup: a } = an(), r = mg(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((u) => u.lang)) || [];
      }
    ), l = mg(
      () => n.value || t.value
    ), d = ZC(), g = (c) => d(c, s.value), i = (c) => d(o.value, c);
    return (c, u) => (l4(), c4(ci, {
      class: "sx-article-language-selector",
      "source-languages": r.value,
      "target-languages": l.value,
      "selected-source-language": pg(o),
      "selected-target-language": pg(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": i
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Ce = window.Vue.unref, Pr = window.Vue.toDisplayString, Xt = window.Vue.createElementVNode, $t = window.Vue.createVNode, lo = window.Vue.withCtx, u4 = window.Vue.resolveDirective, d4 = window.Vue.withDirectives, g4 = window.Vue.normalizeClass, p4 = window.Vue.openBlock, m4 = window.Vue.createBlock, h4 = ["textContent"], f4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, w4 = ["textContent"], _4 = { class: "pe-3" }, v4 = ["textContent"], S4 = window.Codex.CdxButton, is = window.Codex.CdxIcon, Wt = window.Vue.computed, y4 = window.Vuex.useStore, C4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = y4(), n = ue(), { currentSourcePage: o } = qe(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = T(), l = Wt(() => t.state.suggestions.favorites || []), d = Wt(
      () => l.value.some(
        (V) => r.value === V.title && s.value === V.sourceLanguage && a.value === V.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: i } = Lc(), { translationSizeMessageArgs: c } = Eh(), u = () => g(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new ko({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Wt(
      () => d.value ? fh : wh
    ), h = Wt(
      () => d.value ? p : u
    ), f = Wt(
      () => q.getPageUrl(s.value || "", r.value || "")
    ), w = Wt(() => {
      var V;
      return (V = o.value) == null ? void 0 : V.langLinksCount;
    }), _ = (V) => {
      const B = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let x = 0; x < B.length; x++)
        if (V >= B[x].value)
          return (V / B[x].value).toFixed(1).replace(/\.0$/, "") + B[x].suffix;
      return V.toString();
    }, S = Wt(() => {
      var B;
      const V = Object.values(((B = o.value) == null ? void 0 : B.pageviews) || {}).reduce(
        (x, F) => x + F,
        0
      );
      return _(V);
    }), y = Wt(() => c.value ? n.i18n(...c.value) : ""), k = Wt(() => c.value ? c.value[2] < 15 : !1);
    return (V, B) => {
      const x = u4("i18n");
      return p4(), m4(Ce(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: lo(() => [
          $t(Ce(C), null, {
            default: lo(() => [
              $t(Ce(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: lo(() => [
                  $t(Ce(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: lo(() => [
                      Xt("h5", {
                        class: "ma-0 me-1",
                        textContent: Pr(Ce(r))
                      }, null, 8, h4),
                      $t(Ce(is), {
                        size: "x-small",
                        icon: Ce(xc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  $t(Ce(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: lo(() => [
                      $t(Ce(S4), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": V.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: lo(() => [
                          $t(Ce(is), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Xt("div", f4, [
                Xt("div", null, [
                  Xt("span", null, [
                    $t(Ce(is), {
                      icon: Ce(vh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Xt("span", {
                      class: "pe-3",
                      textContent: Pr(w.value)
                    }, null, 8, w4)
                  ]),
                  Xt("span", null, [
                    $t(Ce(is), {
                      icon: Ce(Mk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    d4(Xt("span", _4, null, 512), [
                      [x, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Xt("span", {
                  class: g4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": k.value
                  }])
                }, [
                  $t(Ce(is), {
                    icon: Ce(Uk),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Xt("span", {
                    textContent: Pr(y.value)
                  }, null, 8, v4)
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
const k4 = window.Vue.resolveDirective, In = window.Vue.createElementVNode, Ea = window.Vue.withDirectives, b4 = window.Vue.toDisplayString, x4 = window.Vue.createTextVNode, Fr = window.Vue.unref, Mr = window.Vue.withCtx, Nr = window.Vue.openBlock, Ur = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $4 = { class: "pa-4" }, V4 = { class: "flex pt-2" }, E4 = window.Codex.CdxButton, L4 = window.Vue.ref, D4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Bc(), a = L4(!1), { currentTranslation: r } = rn(), l = () => b(this, null, function* () {
      a.value = !0;
      let d = !1;
      try {
        d = yield ot.splitTranslation(
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
      const i = k4("i18n");
      return Nr(), Ur(Fr(st), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Mr(() => [
          In("div", V4, [
            a.value ? (Nr(), Ur(Fr(Re), { key: 1 })) : (Nr(), Ur(Fr(E4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: Mr(() => [
                x4(b4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Mr(() => [
          In("div", $4, [
            Ea(In("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ea(In("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            In("p", null, [
              Ea(In("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ea(In("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const hg = window.Vue.resolveDirective, La = window.Vue.createElementVNode, fg = window.Vue.withDirectives, hn = window.Vue.unref, Da = window.Vue.withCtx, Kt = window.Vue.createVNode, Ir = window.Vue.openBlock, wg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const A4 = window.Vue.createBlock, T4 = { class: "sx-translation-confirmer" }, B4 = { class: "mb-0" }, P4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, F4 = ["src"], M4 = { class: "ma-3" }, N4 = window.Vue.computed, U4 = window.Vue.ref, I4 = window.Vuex.useStore, R4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = I4(), { currentSourcePage: n } = qe(), { previousRoute: o } = Z(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: d
    } = T(), g = N4(
      () => {
        var f, w;
        return (w = (f = n.value) == null ? void 0 : f.image) == null ? void 0 : w.source;
      }
    ), { fetchTranslationsByStatus: i } = Ci(), c = Th(), u = Cc();
    i("draft"), l.value && u(
      s.value,
      a.value,
      r.value
    ), c(s.value, r.value), Dc(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const p = Se(), m = () => {
      d(), p.push({ name: o.value });
    }, h = U4(!1);
    return (f, w) => {
      const _ = hg("i18n"), S = hg("i18n-html");
      return Ir(), wg("section", T4, [
        Kt(hn(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Da(() => [
            Kt(hn(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Da(() => [
                fg(La("h5", B4, null, 512), [
                  [_, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Kt(hn(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Da(() => [
                Kt(hn($e), {
                  class: "pa-0",
                  type: "icon",
                  icon: hn(Rs),
                  "icon-size": 20,
                  onClick: m
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        La("div", P4, [
          g.value ? (Ir(), wg("img", {
            key: 0,
            src: g.value
          }, null, 8, F4)) : (Ir(), A4(hn(xe), {
            key: 1,
            size: "120",
            icon: hn(cm),
            "icon-color": f.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Kt(C4),
        Kt(Mh),
        Kt(r4, {
          onOpenTranslationConfirmationDialog: w[0] || (w[0] = (y) => h.value = !0)
        }),
        Kt(hn(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Da(() => [
            La("p", M4, [
              fg(La("small", null, null, 512), [
                [S, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Kt(D4, {
          modelValue: h.value,
          "onUpdate:modelValue": w[1] || (w[1] = (y) => h.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const z4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: R4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, O4 = window.Vue.resolveComponent, j4 = window.Vue.createVNode, H4 = window.Vue.normalizeClass, q4 = window.Vue.openBlock, G4 = window.Vue.createElementBlock;
function X4(e, t, n, o, s, a) {
  const r = O4("sx-translation-confirmer");
  return q4(), G4("main", {
    class: H4(["sx-translation-confirmer-view", a.classes])
  }, [
    j4(r)
  ], 2);
}
const W4 = /* @__PURE__ */ Q(z4, [["render", X4]]);
const K4 = window.Vue.toDisplayString, _g = window.Vue.unref, Y4 = window.Vue.createVNode, J4 = window.Vue.createTextVNode, Q4 = window.Vue.createElementVNode, Z4 = window.Vue.openBlock, eV = window.Vue.createElementBlock, tV = { class: "sx-section-selector-view-article-item ma-0" }, nV = ["href"], oV = window.Codex.CdxIcon, sV = {
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
    return (t, n) => (Z4(), eV("li", tV, [
      Q4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        J4(K4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        Y4(_g(oV), {
          size: "x-small",
          icon: _g(xc)
        }, null, 8, ["icon"])
      ], 8, nV)
    ]));
  }
};
const aV = window.Vue.resolveDirective, Aa = window.Vue.createElementVNode, Rr = window.Vue.withDirectives, Rn = window.Vue.unref, iV = window.Vue.toDisplayString, Ta = window.Vue.withCtx, rs = window.Vue.createVNode, rV = window.Vue.openBlock, lV = window.Vue.createElementBlock, cV = { class: "sx-section-selector__header pa-4" }, uV = { class: "sx-section-selector__header-text ma-0" }, dV = ["textContent"], gV = { class: "pt-0 ma-0" }, pV = { class: "ma-0" }, mV = window.Codex.CdxButton, hV = window.Codex.CdxIcon, fV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = He();
    return (n, o) => {
      const s = aV("i18n");
      return rV(), lV("div", cV, [
        rs(Rn(P), { class: "ma-0 pb-3" }, {
          default: Ta(() => [
            rs(Rn(C), null, {
              default: Ta(() => {
                var a;
                return [
                  Rr(Aa("h6", uV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Aa("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: iV((a = Rn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, dV)
                ];
              }),
              _: 1
            }),
            rs(Rn(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ta(() => [
                rs(Rn(mV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ta(() => [
                    rs(Rn(hV), { icon: Rn(To) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Rr(Aa("h4", gV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Rr(Aa("p", pV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, wV = window.Vue.renderList, _V = window.Vue.Fragment, zr = window.Vue.openBlock, vg = window.Vue.createElementBlock, vV = window.Vue.renderSlot, Ba = window.Vue.unref, Sg = window.Vue.createVNode, yg = window.Vue.withCtx, SV = window.Vue.createBlock, yV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, CV = window.Codex.CdxButton, kV = window.Codex.CdxIcon, Nh = {
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
    return (t, n) => (zr(), vg("ul", yV, [
      (zr(!0), vg(_V, null, wV(e.sections, (o) => (zr(), SV(Ba(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: yg(() => [
          Sg(Ba(CV), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: yg(() => [
              vV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Sg(Ba(kV), { icon: Ba(Ks) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, bV = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const xV = window.Vue.resolveDirective, Pa = window.Vue.createElementVNode, Or = window.Vue.withDirectives, ht = window.Vue.unref, Cg = window.Vue.toDisplayString, co = window.Vue.withCtx, jr = window.Vue.openBlock, kg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ls = window.Vue.createVNode, $V = window.Vue.createTextVNode, VV = window.Vue.createElementBlock, EV = { class: "sx-section-selector__missing-sections py-2" }, LV = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, DV = ["lang", "dir", "textContent"], bg = window.Vue.computed, AV = window.Codex.CdxButton, TV = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = He(), n = bg(
      () => {
        var s;
        return z.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = bg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = xV("i18n");
      return jr(), VV("section", EV, [
        Or(Pa("h4", LV, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (jr(), kg(ht(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: co(() => [
            ls(ht(C), {
              class: "py-6 justify-center",
              innerHTML: ht(bV)
            }, null, 8, ["innerHTML"]),
            ls(ht(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: co(() => [
                Or(Pa("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            ls(ht(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: co(() => [
                Or(Pa("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            ls(ht(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: co(() => [
                ls(ht(AV), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: co(() => [
                    $V(Cg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (jr(), kg(Nh, {
          key: 0,
          sections: ht(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: co(({ sourceSection: l }) => {
            var d, g;
            return [
              Pa("h5", {
                class: "ma-0",
                lang: (d = ht(t)) == null ? void 0 : d.sourceLanguage,
                dir: ht(z.getDir)((g = ht(t)) == null ? void 0 : g.sourceLanguage),
                textContent: Cg(l)
              }, null, 8, DV)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const BV = window.Vue.resolveDirective, Fa = window.Vue.createElementVNode, PV = window.Vue.withDirectives, zn = window.Vue.unref, xg = window.Vue.toDisplayString, FV = window.Vue.withCtx, MV = window.Vue.createVNode, NV = window.Vue.openBlock, UV = window.Vue.createElementBlock, IV = { class: "sx-section-selector__present-sections py-2" }, RV = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, zV = { class: "sx-section-selector__present-section-button-content" }, OV = ["lang", "dir", "textContent"], jV = ["lang", "dir", "textContent"], HV = window.Vue.computed, qV = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = He(), n = HV(
      () => {
        var o;
        return z.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var r;
      const a = BV("i18n");
      return NV(), UV("section", IV, [
        PV(Fa("h4", RV, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        MV(Nh, {
          sections: ((r = zn(t)) == null ? void 0 : r.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (l) => o.$emit("select-section", l))
        }, {
          default: FV(({ sourceSection: l, targetSection: d }) => {
            var g, i, c, u;
            return [
              Fa("div", zV, [
                Fa("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (g = zn(t)) == null ? void 0 : g.sourceLanguage,
                  dir: zn(z.getDir)((i = zn(t)) == null ? void 0 : i.sourceLanguage),
                  textContent: xg(l)
                }, null, 8, OV),
                Fa("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (c = zn(t)) == null ? void 0 : c.targetLanguage,
                  dir: zn(z.getDir)((u = zn(t)) == null ? void 0 : u.targetLanguage),
                  textContent: xg(d)
                }, null, 8, jV)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Yt = window.Vue.createVNode, fn = window.Vue.unref, GV = window.Vue.resolveDirective, Vt = window.Vue.createElementVNode, cs = window.Vue.withDirectives, XV = window.Vue.renderList, WV = window.Vue.Fragment, Hr = window.Vue.openBlock, $g = window.Vue.createElementBlock, KV = window.Vue.createBlock, Vg = window.Vue.toDisplayString, Eg = window.Vue.createTextVNode, qr = window.Vue.withCtx, YV = { class: "sx-section-selector" }, JV = { class: "sx-section-selector__body" }, QV = { class: "py-2" }, ZV = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, e3 = { class: "ma-0 pa-0" }, t3 = { class: "sx-section-selector__additional-consideration-title" }, n3 = { href: "#" }, o3 = { class: "sx-section-selector__additional-consideration-title" }, s3 = { href: "#" }, Gr = window.Vue.computed, a3 = window.Vuex.useStore, i3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = a3(), { sectionSuggestion: n } = He(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: r
    } = Z(t), l = Gr(
      () => {
        var w;
        return q.getPageUrl(o.value, (w = n.value) == null ? void 0 : w.sourceTitle);
      }
    ), d = Gr(
      () => {
        var w;
        return q.getPageUrl(s.value, (w = n.value) == null ? void 0 : w.targetTitle);
      }
    ), g = Gr(() => [
      { path: l.value, autonym: a.value },
      { path: d.value, autonym: r.value }
    ]), i = Se(), { clearTranslationURLParameters: c, setSectionURLParam: u } = T(), p = () => {
      c(), i.push({ name: "dashboard" });
    }, m = Bc(), { selectPageSectionByTitle: h } = Tc();
    Zn();
    const f = (w) => {
      const _ = t.getters["translator/getDraftTranslation"](
        n.value.sourceTitle,
        w,
        o.value,
        s.value
      );
      _ ? m(_) : (h(w), u(w), i.push({ name: "sx-content-comparator" }));
    };
    return (w, _) => {
      const S = GV("i18n");
      return Hr(), $g("section", YV, [
        Yt(fV, { onClose: p }),
        Vt("section", JV, [
          Yt(Mh),
          Yt(TV, {
            onSelectSection: f,
            onClose: p
          }),
          Yt(qV, { onSelectSection: f }),
          Vt("section", QV, [
            cs(Vt("h4", ZV, null, 512), [
              [S, [
                fn(r)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            Vt("ul", e3, [
              (Hr(!0), $g(WV, null, XV(g.value, (y, k) => (Hr(), KV(sV, {
                key: `view-article-item-${k}`,
                path: y.path,
                autonym: y.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          Yt(fn(P), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: qr(() => [
              Yt(fn(C), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: qr(() => [
                  Vt("h6", t3, [
                    Yt(fn(xe), {
                      icon: fn(Iw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Eg(" " + Vg(w.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  cs(Vt("p", null, null, 512), [
                    [S, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  cs(Vt("a", n3, null, 512), [
                    [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              Yt(fn(C), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: qr(() => [
                  Vt("h6", o3, [
                    Yt(fn(xe), {
                      icon: fn(Uw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Eg(" " + Vg(w.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  cs(Vt("p", null, null, 512), [
                    [S, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  cs(Vt("a", s3, null, 512), [
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
const r3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: i3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, l3 = window.Vue.resolveComponent, c3 = window.Vue.createVNode, u3 = window.Vue.normalizeClass, d3 = window.Vue.openBlock, g3 = window.Vue.createElementBlock;
function p3(e, t, n, o, s, a) {
  const r = l3("sx-section-selector");
  return d3(), g3("main", {
    class: u3(["sx-section-selector-view", a.classes])
  }, [
    c3(r)
  ], 2);
}
const m3 = /* @__PURE__ */ Q(r3, [["render", p3]]), h3 = window.Vue.computed, f3 = window.Vuex.useStore, w3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = Z(
    f3()
  ), o = ue();
  return h3(() => {
    const s = {
      value: "source_section",
      props: {
        label: o.i18n(
          "cx-sx-content-comparator-source-selector-title",
          t.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let a;
    switch (!0) {
      case e.isMappedSection:
        a = {
          value: "target_section",
          props: {
            label: o.i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              n.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        a = {
          value: "target_article",
          props: {
            label: o.i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              n.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }
    return [s, a];
  });
};
const Lg = window.Vue.unref, _3 = window.Vue.createVNode, v3 = window.Vue.openBlock, S3 = window.Vue.createElementBlock, y3 = { class: "sx-content-comparator__source-target-selector" }, C3 = window.Vue.watch, k3 = {
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
    const n = e, o = t, s = (r) => o("update:selection", r), a = w3(n);
    return C3(
      () => n.isMappedSection,
      () => {
        a.value.map((r) => r.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (r, l) => (v3(), S3("div", y3, [
      _3(Lg(Is), {
        items: Lg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, On = window.Vue.computed, b3 = window.Vue.ref, Pc = () => {
  const e = b3([]), { currentTargetPage: t } = qe(), { sectionSuggestion: n } = He(), { sectionURLParameter: o } = T(), s = On(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = On(
    () => {
      var u;
      return (((u = r.value) == null ? void 0 : u.title) || "").replace(/ /g, "_");
    }
  ), r = On(
    () => {
      var u;
      return (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = K(), d = On(() => {
    var u;
    return (u = l.value) == null ? void 0 : u.html;
  }), g = On(() => {
    var u;
    return (u = r.value) == null ? void 0 : u.html;
  }), i = On(
    () => {
      var u;
      return (u = n.value) == null ? void 0 : u.missingSections.hasOwnProperty(o.value);
    }
  ), c = On(
    () => !i.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: c,
    sourceSectionContent: d,
    targetSectionAnchor: a,
    targetSectionContent: g
  };
};
const Ma = window.Vue.createVNode, x3 = window.Vue.toDisplayString, $3 = window.Vue.createElementVNode, wn = window.Vue.unref, Na = window.Vue.withCtx, Xr = window.Vue.openBlock, Wr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const V3 = window.Vue.normalizeClass, E3 = ["lang", "dir", "textContent"], Dg = window.Vue.ref, Kr = window.Vue.computed, L3 = window.Vue.onMounted, D3 = {
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
    const n = e, o = t, s = Dg(!1), { sectionSuggestion: a } = He(), { sectionURLParameter: r } = T(), l = Kr(
      () => (r.value || "").replace(/ /g, "_")
    ), d = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: i } = Pc(), c = Kr(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${q.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
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
    }), u = Kr(
      () => q.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Dg(null);
    return L3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Xr(), Wr(wn(P), {
      ref_key: "contentHeader",
      ref: p,
      class: V3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Na(() => [
        Ma(k3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": d
        }, null, 8, ["is-mapped-section", "selection"]),
        Ma(wn(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Na(() => [
            Ma(wn(C), null, {
              default: Na(() => [
                $3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: x3(c.value.title)
                }, null, 8, E3)
              ]),
              _: 1
            }),
            Ma(wn(C), { shrink: "" }, {
              default: Na(() => [
                s.value ? (Xr(), Wr(wn($e), {
                  key: 0,
                  icon: wn(gi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Xr(), Wr(wn($e), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: wn(rm),
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
}, us = window.Vue.unref, Ag = window.Vue.createVNode, A3 = window.Vue.withCtx, T3 = window.Vue.openBlock, B3 = window.Vue.createBlock, P3 = window.Vue.computed, F3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = T(), o = P3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Tc(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[l];
      s(d);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[l];
      s(d);
    };
    return (l, d) => (T3(), B3(us(C), {
      class: "justify-end",
      align: "center"
    }, {
      default: A3(() => [
        Ag(us($e), {
          class: "pa-0 pe-1",
          type: "icon",
          icon: us(Pw),
          onClick: a
        }, null, 8, ["icon"]),
        Ag(us($e), {
          class: "pa-0 ps-1",
          type: "icon",
          icon: us(Bw),
          onClick: r
        }, null, 8, ["icon"])
      ]),
      _: 1
    }));
  }
};
const Tg = window.Vue.toDisplayString, M3 = window.Vue.resolveDirective, Yr = window.Vue.withDirectives, uo = window.Vue.openBlock, Ua = window.Vue.createElementBlock, N3 = window.Vue.createCommentVNode, U3 = window.Vue.createTextVNode, Bg = window.Vue.createElementVNode, I3 = window.Vue.normalizeClass, jn = window.Vue.unref, Jr = window.Vue.withCtx, Qr = window.Vue.createVNode, Pg = window.Vue.createBlock, R3 = { class: "sx-content-comparator-header__mapped-section" }, z3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, O3 = { key: 0 }, j3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, H3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Fg = window.Vue.computed, q3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: $n,
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
    const n = ue(), o = e, s = t, a = Fg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), r = Fg(
      () => n.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        z.getAutonym(o.suggestion.targetLanguage)
      )
    ), l = () => {
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
      const c = M3("i18n");
      return uo(), Ua("div", R3, [
        Qr(jn(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Jr(() => [
            Qr(jn(C), { grow: "" }, {
              default: Jr(() => [
                Bg("h6", z3, [
                  U3(Tg(r.value) + " ", 1),
                  a.value ? Yr((uo(), Ua("span", O3, null, 512)), [
                    [c, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : N3("", !0)
                ]),
                Bg("h6", {
                  class: I3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, Tg(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            Qr(jn(C), { shrink: "" }, {
              default: Jr(() => [
                a.value ? (uo(), Pg(jn($e), {
                  key: 1,
                  class: "pa-0",
                  icon: jn(Ow),
                  type: "icon",
                  onClick: d
                }, null, 8, ["icon"])) : (uo(), Pg(jn($e), {
                  key: 0,
                  class: "pa-0",
                  icon: jn(im),
                  type: "icon",
                  onClick: l
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? Yr((uo(), Ua("p", H3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Yr((uo(), Ua("p", j3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const re = window.Vue.unref, Jt = window.Vue.createVNode, Mg = window.Vue.toDisplayString, As = window.Vue.createElementVNode, go = window.Vue.withCtx, G3 = window.Vue.resolveDirective, Ng = window.Vue.withDirectives, Zr = window.Vue.openBlock, Ug = window.Vue.createBlock, Ig = window.Vue.createCommentVNode, X3 = window.Vue.createElementBlock, W3 = { class: "sx-content-comparator__header pa-4" }, K3 = ["lang", "dir"], Y3 = ["lang", "dir"], J3 = /* @__PURE__ */ As("br", null, null, -1), Ia = window.Vue.computed, Q3 = {
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
    const { sectionURLParameter: t } = T(), { sourceSection: n } = K(), { sectionSuggestion: o } = He(), s = Ia(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.missingSections.hasOwnProperty(t.value);
      }
    ), a = Ia(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: r } = Pc(), l = Ia(() => {
      var g;
      return (g = n.value) == null ? void 0 : g.html;
    }), d = Ia(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (g, i) => {
      const c = G3("i18n");
      return Zr(), X3("div", W3, [
        Jt(re($e), {
          class: "py-2 pa-0",
          icon: re(Fw),
          label: g.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (u) => g.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Jt(re(P), { class: "my-1 py-2 mx-0" }, {
          default: go(() => [
            Jt(re(C), { grow: "" }, {
              default: go(() => [
                As("h4", {
                  class: "pa-0 sx-content-comparator-header__article-title",
                  lang: re(o).sourceLanguage,
                  dir: re(z.getDir)(re(o).sourceLanguage)
                }, Mg(re(o).sourceTitle), 9, K3),
                As("h2", {
                  class: "sx-content-comparator-header__section-title pa-0 ma-0",
                  lang: re(o).sourceLanguage,
                  dir: re(z.getDir)(re(o).sourceLanguage)
                }, Mg(re(t)), 9, Y3)
              ]),
              _: 1
            }),
            Jt(F3, {
              cols: "2",
              "section-source-titles": d.value
            }, null, 8, ["section-source-titles"]),
            Jt(re(C), {
              cols: "12",
              mobile: "12",
              tablet: "4",
              class: "py-2 mb-1"
            }, {
              default: go(() => [
                Jt(re($e), {
                  icon: re(gi),
                  progressive: "",
                  label: g.$i18n("cx-sx-content-comparator-translation-section-button-label"),
                  disabled: !l.value,
                  onClick: i[1] || (i[1] = (u) => g.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        s.value ? (Zr(), Ug(re(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: go(() => [
            Jt(re(C), {
              shrink: "",
              class: "pe-2"
            }, {
              default: go(() => [
                Jt(re(xe), { icon: re(Rw) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Jt(re(C), { class: "ma-0" }, {
              default: go(() => [
                Ng(As("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                J3,
                Ng(As("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ig("", !0),
        a.value ? (Zr(), Ug(q3, {
          key: 1,
          suggestion: re(o),
          "target-section-title": re(r),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": i[2] || (i[2] = (u) => g.$emit("update:discardedSections", u))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Ig("", !0)
      ]);
    };
  }
};
const Rg = window.Vue.toDisplayString, Z3 = window.Vue.createElementVNode, zg = window.Vue.openBlock, Og = window.Vue.createElementBlock, eE = window.Vue.createCommentVNode, tE = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, nE = ["textContent"], oE = ["textContent"], Uh = {
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
    return (t, n) => (zg(), Og("section", tE, [
      Z3("h5", {
        textContent: Rg(e.placeholderTitle)
      }, null, 8, nE),
      e.placeholderSubtitle ? (zg(), Og("p", {
        key: 0,
        textContent: Rg(e.placeholderSubtitle)
      }, null, 8, oE)) : eE("", !0)
    ]));
  }
}, sE = window.Vue.computed, aE = window.Vue.createApp, iE = window.Vuex.useStore, rE = () => {
  const e = iE(), { sectionSuggestion: t } = He(), { currentTargetPage: n } = qe(), o = ue(), s = () => aE(
    Uh,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (l) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    l
  ), r = (l) => {
    const d = l.getElementsByTagName("base");
    Array.from(d).forEach(
      (g) => g.parentNode.removeChild(g)
    );
  };
  return sE(() => {
    var i;
    const l = document.createElement("div");
    l.innerHTML = (i = n.value) == null ? void 0 : i.content, r(l);
    const d = s(), g = a(
      t.value
    );
    if (g) {
      const c = Array.from(
        l.querySelectorAll("h2")
      ).filter((u) => u.textContent.match(g));
      if (c && c.length) {
        const u = c[0].parentNode;
        u.parentNode.insertBefore(
          d,
          u
        );
      }
    } else
      l.appendChild(d);
    return l.innerHTML;
  });
};
const Ee = window.Vue.unref, lE = window.Vue.isRef, el = window.Vue.createVNode, po = window.Vue.openBlock, jg = window.Vue.createBlock, Hg = window.Vue.createCommentVNode, Ra = window.Vue.createElementVNode, tl = window.Vue.Fragment, za = window.Vue.createElementBlock, cE = { class: "sx-content-comparator" }, uE = { class: "sx-content-comparator__source-content" }, dE = ["lang", "dir", "innerHTML"], gE = ["lang", "dir", "innerHTML"], pE = ["innerHTML"], mE = window.Vue.ref, hE = window.Vue.computed, fE = window.Vue.watch, wE = window.Vuex.useStore, _E = {
  __name: "SXContentComparator",
  setup(e) {
    const t = wE(), n = Se(), o = mE("source_section"), { logDashboardTranslationStartEvent: s } = Vc(), a = () => n.push({ name: "sx-section-selector" }), { isDesktop: r } = Zn(), l = ki(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: g,
      pageURLParameter: i,
      sectionURLParameter: c
    } = T(), u = () => {
      if (s(), Ph() || !t.getters["translator/userHasSectionTranslations"])
        n.push({ name: "sx-quick-tutorial" });
      else if (r.value) {
        const B = { sourcesection: c.value };
        l(
          d.value,
          g.value,
          i.value,
          B
        );
      } else
        n.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: p,
      discardedSections: m,
      isCurrentSectionMapped: h,
      sourceSectionContent: f,
      targetSectionContent: w
    } = Pc(), _ = rE(), { sectionSuggestion: S } = He(), y = hE(() => S.value.targetTitle), k = Ac();
    return fE(
      y,
      () => k(
        g.value,
        d.value,
        y.value
      ),
      { immediate: !0 }
    ), (V, B) => (po(), za("section", cE, [
      el(Q3, {
        "discarded-sections": Ee(m),
        "onUpdate:discardedSections": B[0] || (B[0] = (x) => lE(m) ? m.value = x : null),
        onTranslationButtonClicked: u,
        onClose: a
      }, null, 8, ["discarded-sections"]),
      el(D3, {
        "source-vs-target-selection": o.value,
        "onUpdate:sourceVsTargetSelection": B[1] || (B[1] = (x) => o.value = x),
        "is-mapped-section": Ee(h),
        onTranslationButtonClicked: u
      }, null, 8, ["source-vs-target-selection", "is-mapped-section"]),
      Ra("section", uE, [
        o.value === "source_section" ? (po(), za(tl, { key: 0 }, [
          Ee(f) ? Hg("", !0) : (po(), jg(Ee(Re), { key: 0 })),
          Ra("section", {
            lang: Ee(d),
            dir: Ee(z.getDir)(Ee(d)),
            class: "pt-2 px-4",
            innerHTML: Ee(f)
          }, null, 8, dE)
        ], 64)) : o.value === "target_article" ? (po(), za(tl, { key: 1 }, [
          Ee(_) ? Hg("", !0) : (po(), jg(Ee(Re), { key: 0 })),
          Ra("article", {
            lang: Ee(g),
            dir: Ee(z.getDir)(Ee(g)),
            class: "px-4",
            innerHTML: Ee(_)
          }, null, 8, gE)
        ], 64)) : (po(), za(tl, { key: 2 }, [
          Ra("section", {
            class: "pa-4",
            innerHTML: Ee(w)
          }, null, 8, pE),
          el(Uh, {
            "placeholder-title": V.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": V.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
};
const vE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: _E
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, SE = window.Vue.resolveComponent, yE = window.Vue.createVNode, CE = window.Vue.normalizeClass, kE = window.Vue.openBlock, bE = window.Vue.createElementBlock;
function xE(e, t, n, o, s, a) {
  const r = SE("sx-content-comparator");
  return kE(), bE("main", {
    class: CE(["sx-content-comparator-view", a.classes])
  }, [
    yE(r)
  ], 2);
}
const $E = /* @__PURE__ */ Q(vE, [["render", xE]]);
const VE = window.Vue.resolveDirective, ds = window.Vue.createElementVNode, qg = window.Vue.withDirectives, Oa = window.Vue.unref, nl = window.Vue.createVNode, Gg = window.Vue.toDisplayString, Xg = window.Vue.createTextVNode, gs = window.Vue.withCtx, EE = window.Vue.openBlock, LE = window.Vue.createBlock, DE = { class: "mw-ui-dialog__header px-4 py-3" }, AE = { class: "mw-ui-dialog__header-title" }, TE = { class: "pa-4" }, BE = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Wg = window.Codex.CdxButton, PE = {
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
      const d = VE("i18n");
      return EE(), LE(Oa(st), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: gs(() => [
          ds("div", DE, [
            qg(ds("span", AE, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: gs(() => [
          ds("div", BE, [
            nl(Oa(Wg), {
              weight: "quiet",
              onClick: s
            }, {
              default: gs(() => [
                Xg(Gg(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            nl(Oa(Wg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: gs(() => [
                Xg(Gg(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: gs(() => [
          nl(Oa(di)),
          ds("div", TE, [
            qg(ds("span", null, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, FE = window.Vuex.useStore, Fc = () => {
  const e = FE(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = an(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = (g, i, c) => {
    if (g === 0) {
      t.value.proposedTitleTranslations[i] = c;
      return;
    }
    const u = t.value.getContentTranslationUnitById(g);
    u instanceof Ue ? u.blockTemplateProposedTranslations[i] = c : u instanceof bn && u.addProposedTranslation(i, c);
  }, r = (g, i) => b(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, g))
      return "";
    try {
      const u = yield e.dispatch("application/getCXServerToken");
      return yield ot.fetchSegmentTranslation(
        o.value,
        s.value,
        g,
        i,
        u
      );
    } catch (u) {
      return mw.log.error("Error while translating segment", u), "";
    }
  }), l = (g, i) => b(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      g,
      i
    ))
      return;
    let c = t.value.getOriginalContentByTranslationUnitId(g);
    const u = t.value.getContentTranslationUnitById(g);
    let p;
    if (e.commit("application/addMtRequestsPending", g), p = yield r(i, c), !p) {
      e.commit("application/removeMtRequestsPending", g);
      return;
    }
    u instanceof Ue && (u.setBlockTemplateAdaptationInfoByHtml(
      i,
      p
    ), p = (yield Kv(
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
    translateTranslationUnitById: l,
    translateSelectedTranslationUnitForAllProviders: () => {
      const g = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: i } = t.value;
      g.forEach(
        (c) => l(i, c)
      );
    }
  };
}, ME = window.Vuex.useStore, NE = () => {
  const { sourceSection: e } = K(), t = ME(), { translateTranslationUnitById: n } = Fc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const UE = window.Vue.resolveDirective, et = window.Vue.createElementVNode, ja = window.Vue.withDirectives, Pe = window.Vue.unref, ol = window.Vue.createVNode, _n = window.Vue.withCtx, IE = window.Vue.renderList, RE = window.Vue.Fragment, sl = window.Vue.openBlock, zE = window.Vue.createElementBlock, OE = window.Vue.toDisplayString, Kg = window.Vue.createBlock, jE = window.Vue.createCommentVNode, HE = { class: "mw-ui-dialog__header pa-4" }, qE = { class: "row ma-0 py-2" }, GE = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, XE = { class: "mb-0" }, WE = { class: "col shrink justify-center" }, KE = { class: "pb-2 mb-0" }, YE = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, JE = ["dir", "lang", "innerHTML"], QE = ["textContent"], ZE = ["innerHTML"], e5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, t5 = /* @__PURE__ */ et("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), al = window.Vue.computed, n5 = window.Vuex.useStore, o5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = J.EMPTY_TEXT_PROVIDER_KEY, s = J.ORIGINAL_TEXT_PROVIDER_KEY, a = n5(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = K(), {
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: i
    } = T(), c = al(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        i.value
      )
    ), u = al(() => {
      const _ = [s, o];
      return c.value.filter(
        (S) => !_.includes(S)
      );
    }), p = al(
      () => l.value ? r.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = NE(), h = (_) => {
      m(_), w();
    }, f = J.getMTProviderLabel, w = () => n("update:active", !1);
    return (_, S) => {
      const y = UE("i18n");
      return e.active ? (sl(), Kg(Pe(st), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: _n(() => [
          et("div", HE, [
            et("div", qE, [
              et("div", GE, [
                ja(et("h4", XE, null, 512), [
                  [y, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              et("div", WE, [
                ol(Pe($e), {
                  type: "icon",
                  icon: Pe(Rs),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            ja(et("h6", KE, null, 512), [
              [y, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: _n(() => [
          ol(Pe(Ie), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (k) => h(Pe(s)))
          }, {
            header: _n(() => [
              ja(et("h5", YE, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: _n(() => [
              et("p", {
                dir: Pe(z.getDir)(Pe(g)),
                lang: Pe(g),
                innerHTML: p.value[Pe(s)]
              }, null, 8, JE)
            ]),
            _: 1
          }),
          (sl(!0), zE(RE, null, IE(u.value, (k) => (sl(), Kg(Pe(Ie), {
            key: k,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (V) => h(k)
          }, {
            header: _n(() => [
              et("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: OE(Pe(f)(k))
              }, null, 8, QE)
            ]),
            default: _n(() => [
              et("p", {
                innerHTML: p.value[k]
              }, null, 8, ZE)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          ol(Pe(Ie), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (k) => h(Pe(o)))
          }, {
            header: _n(() => [
              ja(et("h5", e5, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: _n(() => [
              t5
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : jE("", !0);
    };
  }
}, s5 = window.Vuex.useStore, Bo = () => {
  const { sourceSection: e } = K(), t = s5(), { translateTranslationUnitById: n } = Fc(), { currentMTProvider: o } = Z(t), s = (l) => b(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, o.value);
    const { followingTranslationUnit: d } = e.value;
    d && (yield n(
      d.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? s(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: d } = e.value, g = l - 1;
      let i = 0;
      return g > -1 && (i = d[g].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const a5 = window.Vue.toDisplayString, il = window.Vue.createElementVNode, rl = window.Vue.unref, i5 = window.Vue.createVNode, r5 = window.Vue.normalizeClass, l5 = window.Vue.withCtx, c5 = window.Vue.openBlock, u5 = window.Vue.createBlock, d5 = ["href"], g5 = ["textContent"], p5 = ["innerHTML"], mo = window.Vue.computed, m5 = window.Vuex.useStore, Yg = "sx-sentence-selector__section-title", h5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = m5(), { sourceSection: n, isSectionTitleSelected: o } = K(), { currentSourcePage: s } = qe(), { sourceLanguage: a } = Z(t), r = mo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), l = mo(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), d = mo(
      () => q.getPageUrl(a.value, r.value)
    ), g = mo(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = mo(
      () => g.value ? "translated" : "selected"
    ), c = mo(() => {
      const m = [Yg];
      return o.value && m.push(`${Yg}--${i.value}`), m;
    }), { selectTranslationUnitById: u } = Bo(), p = () => u(0);
    return (m, h) => (c5(), u5(rl(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: l5(() => [
        il("a", {
          href: d.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          il("strong", {
            textContent: a5(r.value)
          }, null, 8, g5),
          i5(rl(xe), {
            icon: rl(rm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, d5),
        il("h2", {
          class: r5(["pa-0 ma-0", c.value]),
          onClick: p,
          innerHTML: l.value
        }, null, 10, p5)
      ]),
      _: 1
    }));
  }
};
const Et = window.Vue.unref, ps = window.Vue.createVNode, Ha = window.Vue.withCtx, Jg = window.Vue.toDisplayString, Qg = window.Vue.createTextVNode, f5 = window.Vue.openBlock, w5 = window.Vue.createBlock, _5 = window.Vue.computed, ll = window.Codex.CdxButton, Zg = window.Codex.CdxIcon, Ih = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = K(), s = _5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (f5(), w5(Et(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ha(() => [
        ps(Et(ll), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Et(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Ha(() => [
            ps(Et(Zg), {
              class: "me-1",
              icon: Et($c)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ps(Et(ll), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Et(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Ha(() => [
            Qg(Jg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ps(Et(ll), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Ha(() => [
            Qg(Jg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ps(Et(Zg), {
              class: "ms-1",
              size: "small",
              icon: Et(Ks)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Hn = window.Vue.unref, v5 = window.Vue.toDisplayString, ms = window.Vue.createVNode, qa = window.Vue.withCtx, S5 = window.Vue.openBlock, y5 = window.Vue.createBlock, cl = window.Vue.computed, C5 = window.Vuex.useStore, k5 = window.Codex.CdxButton, b5 = window.Codex.CdxIcon, x5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = C5(), n = cl(() => t.state.application.currentMTProvider), o = ue(), s = cl(() => ({
      [J.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [J.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = cl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        J.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (S5(), y5(Hn(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: qa(() => [
        ms(Hn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: qa(() => [
            ms(Hn(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: v5(a.value)
            }, null, 8, ["textContent"]),
            ms(Hn(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: qa(() => [
                ms(Hn(k5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (d) => r.$emit("configure-options"))
                }, {
                  default: qa(() => [
                    ms(Hn(b5), {
                      class: "pa-0",
                      icon: Hn(bc)
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
const ft = window.Vue.unref, vn = window.Vue.createVNode, $5 = window.Vue.resolveDirective, ep = window.Vue.createElementVNode, V5 = window.Vue.withDirectives, tp = window.Vue.toDisplayString, np = window.Vue.createTextVNode, hs = window.Vue.withCtx, E5 = window.Vue.openBlock, L5 = window.Vue.createElementBlock, D5 = { class: "mt-retry-body pb-5" }, A5 = { class: "retry-body__message" }, op = window.Codex.CdxButton, ul = window.Codex.CdxIcon, T5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = $5("i18n");
      return E5(), L5("div", D5, [
        ep("div", A5, [
          vn(ft(ul), {
            class: "me-2",
            icon: ft(ph)
          }, null, 8, ["icon"]),
          V5(ep("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        vn(ft(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: hs(() => [
            vn(ft(C), { cols: "6" }, {
              default: hs(() => [
                vn(ft(op), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: hs(() => [
                    vn(ft(ul), {
                      class: "me-1",
                      icon: ft(Sh)
                    }, null, 8, ["icon"]),
                    np(" " + tp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vn(ft(C), { cols: "6" }, {
              default: hs(() => [
                vn(ft(op), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: hs(() => [
                    vn(ft(ul), {
                      class: "me-1",
                      icon: ft(zk)
                    }, null, 8, ["icon"]),
                    np(" " + tp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const ho = window.Vue.createVNode, Fe = window.Vue.unref, fs = window.Vue.openBlock, B5 = window.Vue.createElementBlock, P5 = window.Vue.createCommentVNode, Ga = window.Vue.createBlock, F5 = window.Vue.normalizeClass, M5 = window.Vue.normalizeStyle, ws = window.Vue.withCtx, N5 = window.Vue.toDisplayString, U5 = window.Vue.createTextVNode, I5 = window.Vue.normalizeProps, R5 = window.Vue.guardReactiveProps, z5 = ["lang", "dir", "innerHTML"], dl = window.Vue.ref, O5 = window.Vue.onMounted, j5 = window.Vue.onBeforeUnmount, gl = window.Vue.computed, H5 = window.Vue.nextTick, q5 = window.Vuex.useStore, G5 = window.Codex.CdxButton, X5 = window.Codex.CdxIcon, W5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = dl(0), n = dl(null), o = dl(null), s = q5(), { currentMTProvider: a } = Z(s), { targetLanguageURLParameter: r } = T(), { sourceSection: l, currentProposedTranslation: d } = K(), g = gl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = gl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = gl(
      () => !!d.value || a.value === J.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    O5(() => b(this, null, function* () {
      yield H5(), u(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), j5(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => u());
    return (m, h) => (fs(), Ga(Fe(Ie), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ws(() => [
        ho(Fe(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ws(() => [
            ho(x5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            ho(Fe(C), {
              class: F5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && g.value
              }]),
              style: M5(c.value ? i.value : null)
            }, {
              default: ws(() => [
                c.value ? (fs(), B5("section", {
                  key: 0,
                  lang: Fe(r),
                  dir: Fe(z.getDir)(Fe(r)),
                  innerHTML: Fe(d)
                }, null, 8, z5)) : g.value ? (fs(), Ga(Fe(Re), { key: 1 })) : (fs(), Ga(T5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            ho(Fe(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ws(() => [
                c.value || g.value ? (fs(), Ga(Fe(G5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Fe(d)))
                }, {
                  default: ws(() => [
                    ho(Fe(X5), {
                      class: "me-1",
                      icon: Fe(kc)
                    }, null, 8, ["icon"]),
                    U5(" " + N5(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : P5("", !0),
                ho(Ih, I5(R5(m.$attrs)), null, 16)
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
}, K5 = window.Vue.computed, Y5 = (e) => K5(() => {
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
    const l = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${l}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const J5 = window.Vue.unref, Q5 = window.Vue.normalizeClass, Z5 = window.Vue.openBlock, eL = window.Vue.createElementBlock, tL = ["innerHTML"], nL = window.Vue.onMounted, oL = window.Vue.ref, sL = window.Vue.computed, aL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: Ue,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = oL(null), a = Y5(n.subSection);
    nL(() => {
      s.value.addEventListener("click", (g) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const c = g.composedPath().find(
            (u) => u instanceof Element && u.classList.contains("cx-segment")
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
    const { selectTranslationUnitById: r } = Bo(), l = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      r(g.id);
    }, d = sL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, i) => (Z5(), eL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: Q5(["sx-sentence-selector__subsection", d.value]),
      innerHTML: J5(a)
    }, null, 10, tL));
  }
};
const sp = window.Vue.unref, ap = window.Vue.createVNode, ip = window.Vue.normalizeStyle, iL = window.Vue.openBlock, rL = window.Vue.createElementBlock, rp = window.Vue.computed, Rh = {
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
    const t = e, n = rp(() => ({ "--size": t.size })), o = rp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? lm : ai
    );
    return (s, a) => (iL(), rL("div", {
      class: "block-template-status-indicator",
      style: ip(n.value)
    }, [
      ap(sp(E1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      ap(sp(xe), {
        icon: o.value,
        size: e.size / 2,
        style: ip({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, _s = window.Vue.openBlock, Xa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Qt = window.Vue.unref, fo = window.Vue.withCtx, vs = window.Vue.createVNode, pl = window.Vue.toDisplayString, ml = window.Vue.createElementVNode, lL = window.Vue.renderList, cL = window.Vue.Fragment, uL = window.Vue.createElementBlock, dL = { class: "pa-4" }, gL = ["textContent"], pL = ["textContent"], mL = window.Vuex.useStore, Wa = window.Vue.computed, hL = {
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
    const t = e, { targetLanguageAutonym: n } = Z(mL()), o = Wa(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = ue(), a = Wa(() => {
      let d;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? d = "cx-sx-block-template-mapping-status-title-partially-template" : d = "cx-sx-block-template-mapping-status-title-fully-template" : d = "cx-sx-block-template-mapping-status-title-unadapted-template" : d = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(d);
    }), r = Wa(() => {
      let d;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? d = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? d = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : d = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(d);
    }), l = Wa(() => {
      let d = [];
      if (!t.targetTemplateExists)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: Gw,
          color: tt.gray500
        });
      else if (!t.isTemplateAdapted)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Rs,
          color: tt.gray500
        });
      else if (o.value < 100)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: ai,
          color: tt.blue600
        });
      else {
        let g;
        t.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : g = s.i18n("cx-sx-block-template-no-source-params-text"), d.push({
          text: g,
          icon: ai,
          color: tt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: gi,
        color: tt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: Vw,
        color: tt.gray500
      }), d;
    });
    return (d, g) => (_s(), Xa(Qt(st), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: d.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (i) => d.$emit("update:active", i))
    }, {
      header: fo(() => [
        vs(Qt(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: fo(() => [
            vs(Qt(C), { shrink: "" }, {
              default: fo(() => [
                e.targetTemplateExists ? (_s(), Xa(Rh, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (_s(), Xa(Qt(xe), {
                  key: 1,
                  icon: Qt(Lw)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: fo(() => [
        ml("div", dL, [
          ml("h3", {
            textContent: pl(a.value)
          }, null, 8, gL),
          ml("p", {
            class: "mt-6 text-small",
            textContent: pl(r.value)
          }, null, 8, pL),
          (_s(!0), uL(cL, null, lL(l.value, (i, c) => (_s(), Xa(Qt(P), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: fo(() => [
              vs(Qt(C), { shrink: "" }, {
                default: fo(() => [
                  vs(Qt(xe), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              vs(Qt(C), {
                textContent: pl(i.text)
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
const we = window.Vue.unref, ke = window.Vue.createVNode, Lt = window.Vue.withCtx, hl = window.Vue.toDisplayString, lp = window.Vue.createTextVNode, fL = window.Vue.resolveDirective, cp = window.Vue.withDirectives, up = window.Vue.createElementVNode, wL = window.Vue.normalizeClass, Ka = window.Vue.openBlock, dp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const gp = window.Vue.createBlock, _L = window.Vue.normalizeProps, vL = window.Vue.guardReactiveProps, SL = { class: "block-template-adaptation-card__container pa-4" }, yL = ["textContent"], CL = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Te = window.Vue.computed, kL = window.Vue.ref, bL = window.Vuex.useStore, pp = window.Codex.CdxButton, mp = window.Codex.CdxIcon, xL = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = bL(), { targetLanguageAutonym: n, currentMTProvider: o } = Z(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = K(), r = Te(() => {
      var F;
      return ((F = s.value) == null ? void 0 : F.blockTemplateTranslatedContent) || a.value;
    }), l = Te(
      () => {
        var x;
        return (x = s.value) == null ? void 0 : x.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = Te(
      () => {
        var x;
        return !((x = t.state.application.mtRequestsPending) != null && x.includes(
          s.value.id
        ));
      }
    ), g = ue(), i = Te(
      // Strip HTML comments and return
      () => {
        var x, F;
        return ((F = (x = s.value) == null ? void 0 : x.sourceBlockTemplateName) == null ? void 0 : F.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = Te(
      () => {
        var x, F;
        return (F = (x = s.value) == null ? void 0 : x.blockTemplateAdaptationInfo) == null ? void 0 : F[o.value];
      }
    ), u = Te(
      () => {
        var x, F;
        return ((x = c.value) == null ? void 0 : x.adapted) || !!((F = c.value) != null && F.partial);
      }
    ), p = Te(() => c.value ? "block-template-adaptation-card__body--" + (u.value ? "success" : "warning") : null), m = Te(() => c.value ? u.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Te(
      () => {
        var x;
        return Object.keys(((x = s.value) == null ? void 0 : x.sourceTemplateParams) || {}).length;
      }
    ), f = Te(() => {
      var F;
      const x = (F = s.value) == null ? void 0 : F.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(x || {});
    }), w = Te(() => f.value.length), _ = Te(() => {
      const x = V.value;
      return h.value + x === 0 ? 100 : w.value / (h.value + x) * 100 || 0;
    }), S = kL(!1), y = () => {
      S.value = !0;
    }, k = (x) => x.filter((F) => !f.value.includes(F)), V = Te(() => {
      var F;
      const x = ((F = c.value) == null ? void 0 : F.mandatoryTargetParams) || [];
      return k(x).length;
    }), B = Te(() => {
      var F;
      const x = ((F = c.value) == null ? void 0 : F.optionalTargetParams) || [];
      return k(x).length;
    });
    return (x, F) => {
      const U = fL("i18n");
      return Ka(), gp(we(Ie), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Lt(() => [
          up("div", SL, [
            ke(we(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Lt(() => [
                ke(we(C), { shrink: "" }, {
                  default: Lt(() => [
                    ke(we(mp), {
                      icon: we(Ok),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ke(we(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Lt(() => [
                    lp(hl(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (Ka(), dp("div", {
              key: 0,
              class: wL(["pa-4 mb-4", p.value])
            }, [
              ke(we(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Lt(() => [
                  cp(ke(we(C), { tag: "h5" }, null, 512), [
                    [U, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ke(we(C), { shrink: "" }, {
                    default: Lt(() => [
                      ke(Rh, {
                        percentage: _.value,
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
              up("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: hl(l.value)
              }, null, 8, yL),
              ke(we(pp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: F[0] || (F[0] = (M) => x.$emit("edit-translation", r.value))
              }, {
                default: Lt(() => [
                  lp(hl(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Ka(), dp("div", CL, [
              ke(we(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Lt(() => [
                  cp(ke(we(C), { tag: "h5" }, null, 512), [
                    [U, [
                      we(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ke(we(C), { shrink: "" }, {
                    default: Lt(() => [
                      ke(we(pp), {
                        weight: "quiet",
                        "aria-label": x.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Lt(() => [
                          ke(we(mp), {
                            icon: we(Rk),
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
            ])) : (Ka(), gp(we(Re), { key: 2 }))
          ]),
          ke(Ih, _L(vL(x.$attrs)), null, 16),
          ke(hL, {
            active: S.value,
            "onUpdate:active": F[1] || (F[1] = (M) => S.value = M),
            "source-params-count": h.value,
            "target-params-count": w.value,
            "mandatory-missing-params-count": V.value,
            "optional-missing-params-count": B.value,
            "is-template-adapted": u.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const $L = window.Vue.unref, VL = window.Vue.createVNode, EL = window.Vue.openBlock, LL = window.Vue.createElementBlock, DL = { class: "translated-segment-card-header" }, AL = window.Vue.computed, TL = {
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
    const n = t, { isSectionTitleSelected: o } = K(), s = ue(), a = AL(() => [
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
    return (l, d) => (EL(), LL("div", DL, [
      VL($L(Is), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const Sn = window.Vue.unref, Ya = window.Vue.createVNode, fl = window.Vue.withCtx, BL = window.Vue.openBlock, PL = window.Vue.createBlock, FL = window.Vue.computed, hp = window.Codex.CdxButton, fp = window.Codex.CdxIcon, ML = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = K(), o = FL(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (BL(), PL(Sn(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: fl(() => [
        Ya(Sn(hp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Sn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: fl(() => [
            Ya(Sn(fp), { icon: Sn($c) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Ya(Sn(hp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: fl(() => [
            Ya(Sn(fp), { icon: Sn(Ks) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const NL = window.Vue.useCssVars, be = window.Vue.createVNode, wp = window.Vue.resolveDirective, UL = window.Vue.createElementVNode, wl = window.Vue.withDirectives, ce = window.Vue.unref, IL = window.Vue.normalizeStyle, Ja = window.Vue.openBlock, _p = window.Vue.createElementBlock, RL = window.Vue.createCommentVNode, zL = window.Vue.normalizeClass, Qe = window.Vue.withCtx, OL = window.Vue.toDisplayString, jL = window.Vue.createTextVNode, vp = window.Vue.createBlock, HL = window.Vue.normalizeProps, qL = window.Vue.guardReactiveProps, Zt = window.Vue.computed, GL = window.Vue.ref, XL = window.Vue.inject, WL = window.Vuex.useStore, KL = window.Codex.CdxButton, _l = window.Codex.CdxIcon, YL = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    NL((_) => ({
      "4929555c": w.value
    }));
    const t = GL("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = K(), { targetLanguage: a } = Z(WL()), r = Zt(() => t.value === "sentence"), l = Zt(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), d = Zt(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), g = XL("colors"), i = g.gray200, c = g.red600, u = Zt(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = Zt(
      () => Bt.calculateScore(
        u.value,
        d.value,
        a.value
      )
    ), m = Zt(
      () => Bt.getScoreStatus(p.value)
    ), h = Zt(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = Zt(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), w = Zt(
      () => f.value[m.value]
    );
    return (_, S) => {
      const y = wp("i18n"), k = wp("i18n-html");
      return Ja(), vp(ce(Ie), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Qe(() => [
          be(ce(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Qe(() => [
              be(TL, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (V) => t.value = V)
              }, null, 8, ["selection"]),
              be(ce(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Qe(() => [
                  be(ce(P), { class: "ma-0" }, {
                    default: Qe(() => [
                      be(ce(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Qe(() => [
                          wl(UL("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? wl((Ja(), _p("p", {
                            key: 0,
                            style: IL({ color: ce(c) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : wl((Ja(), _p("p", {
                            key: 1,
                            class: zL(h.value)
                          }, null, 2)), [
                            [k, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      be(ce(C), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Qe(() => [
                          be(ce(P), { class: "ma-0 ms-2" }, {
                            default: Qe(() => [
                              be(ce(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Qe(() => [
                                  be(ce(_l), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ce(Gk)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              be(ce(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Qe(() => [
                                  be(ce(um), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: ce(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              be(ce(C), { shrink: "" }, {
                                default: Qe(() => [
                                  be(ce(_l), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ce(jk)
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
                  r.value ? (Ja(), vp(ce(KL), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (V) => _.$emit("edit-translation", u.value))
                  }, {
                    default: Qe(() => [
                      be(ce(_l), {
                        class: "me-1",
                        icon: ce(kc)
                      }, null, 8, ["icon"]),
                      jL(" " + OL(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : RL("", !0)
                ]),
                _: 1
              }),
              be(ce(C), { class: "translated-segment-card__actions" }, {
                default: Qe(() => [
                  be(ML, HL(qL(_.$attrs)), null, 16)
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
}, JL = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = K(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Bo(), { currentTranslation: s } = rn();
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
}, zh = window.Vuex.useStore, QL = () => {
  const e = zh(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = T();
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield vi.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, ZL = () => {
  const e = zh(), { currentMTProvider: t } = Z(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = T(), s = QL();
  return () => b(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = J.getStorageKey(
        n.value,
        o.value
      ), l = mw.storage.get(r) || a[0];
      e.commit("application/setCurrentMTProvider", l);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, eD = window.Vue.computed, tD = (e) => {
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
}, nD = () => {
  const { selectedContentTranslationUnit: e } = K(), t = eD(
    () => e.value instanceof Ue
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && tD(o);
  };
}, oD = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !J.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, sD = window.Vue.computed, Oh = () => {
  const { currentTranslation: e } = rn(), { currentSourcePage: t } = qe();
  return sD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, aD = window.Vuex.useStore, Mc = () => {
  const e = aD(), { sourceSection: t, targetPageTitleForPublishing: n } = K(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = T(), r = Oh();
  return () => {
    const l = n.value, d = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(g);
    i.forEach(
      (p) => oD(p, d)
    );
    const c = t.value.getTranslationProgress(a), u = e.getters["application/isSandboxTarget"];
    return ot.saveTranslation({
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
      sectionId: g,
      isSandbox: u,
      progress: c
    });
  };
}, iD = window.Vue.effectScope, rD = window.Vue.onScopeDispose, lD = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = iD(!0), n = o.run(() => e(...a))), rD(s), n);
}, cD = window.Vuex.useStore;
let vl;
const uD = () => {
  const e = cD(), t = Mc();
  let n = 1e3, o = 0;
  return vl = Ec(() => t().then((a) => {
    a instanceof Co ? (n *= o + 1, o++, setTimeout(vl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Vo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), vl;
}, jh = lD(uD), dD = window.Vuex.useStore, gD = () => {
  const e = dD(), t = jh(), { currentMTProvider: n } = Z(e), { sourceSection: o, currentProposedTranslation: s } = K(), { selectNextTranslationUnit: a } = Bo();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, pD = window.Vuex.useStore, mD = () => {
  const e = pD(), t = jh();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, hD = window.Vuex.useStore, fD = window.Vue.computed, Hh = () => {
  const e = hD(), t = Se(), { currentTranslation: n } = rn(), { currentMTProvider: o, previousRoute: s } = Z(e), { currentTargetPage: a } = qe(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: d,
    sectionURLParameter: g
  } = T(), i = je(), c = fD(() => {
    var w;
    const f = {
      translation_source_language: r.value,
      translation_target_language: l.value,
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
      const _ = n.value.targetSectionTitle;
      _ && (f.translation_target_section = _);
    } else
      a.value && (f.translation_target_title = (w = a.value) == null ? void 0 : w.title);
    return o.value && (f.translation_provider = J.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var y;
      const f = t.currentRoute.value.meta.workflowStep, _ = t.getRoutes().find(
        (k) => k.name === s.value
      ), S = ((y = _ == null ? void 0 : _.meta) == null ? void 0 : y.workflowStep) || 0;
      return f > S ? i(le({
        event_type: "editor_open"
      }, c.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(le({
      event_type: "editor_close"
    }, c.value)),
    logEditorCloseWarnEvent: () => i(le({
      event_type: "editor_close_warn"
    }, c.value)),
    logEditorSegmentAddEvent: () => i(le({
      event_type: "editor_segment_add"
    }, c.value))
  };
};
const oe = window.Vue.unref, Ze = window.Vue.createVNode, en = window.Vue.withCtx, wD = window.Vue.resolveDirective, Sp = window.Vue.createElementVNode, _D = window.Vue.withDirectives, vD = window.Vue.toDisplayString, SD = window.Vue.createTextVNode, yD = window.Vue.renderList, CD = window.Vue.Fragment, yn = window.Vue.openBlock, yp = window.Vue.createElementBlock, wo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const kD = window.Vue.normalizeClass, bD = window.Vue.normalizeStyle, xD = { class: "sx-sentence-selector__header-title mb-0" }, $D = { class: "sx-sentence-selector__section-contents px-4" }, _o = window.Vue.computed, VD = window.Vue.nextTick, ED = window.Vue.onMounted, Qa = window.Vue.ref, Cp = window.Vue.watch, LD = window.Vuex.useStore, kp = window.Codex.CdxButton, DD = window.Codex.CdxIcon, AD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Qa(!1), n = Qa(!1), o = Qa("100%"), s = LD(), { currentMTProvider: a } = Z(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l
    } = T(), { sourceSection: d, selectedContentTranslationUnit: g } = K(), i = _o(
      () => s.state.application.translationDataLoadingCounter === 0
    ), c = _o(
      () => {
        var v;
        return (v = d.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), u = _o(() => {
      var v;
      return (v = d.value) == null ? void 0 : v.subSections;
    }), p = _o(
      () => {
        var v;
        return (v = d.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), m = _o(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: f,
      logEditorCloseWarnEvent: w,
      logEditorSegmentAddEvent: _
    } = Hh(), S = JL();
    ZL()().then(h);
    const k = nD();
    ED(() => {
      Cp(
        i,
        () => b(this, null, function* () {
          i.value && (yield VD(), S(), k());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Cp(g, k);
    const {
      selectNextTranslationUnit: V,
      selectPreviousTranslationUnit: B
    } = Bo(), x = gD(), F = () => {
      _(), x();
    }, U = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, M = Se(), N = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        Xe.value = !0, w();
        return;
      }
      me();
    }, { fetchTranslationsByStatus: G } = Ci(), H = mD(), { clearTranslationURLParameters: Ft } = T(), { currentTranslation: at } = rn(), me = () => b(this, null, function* () {
      G("draft"), at.value && (d.value.reset(), at.value.restored = !1), f(), Ft(), H(), yield M.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: De,
      translateSelectedTranslationUnitForAllProviders: it
    } = Fc(), Dn = () => {
      Ut.value || (t.value = !0, it());
    }, { getCurrentTitleByLanguage: Mt } = an(), Ge = (v, L) => {
      M.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: p.value,
          title: Mt(
            l.value,
            r.value
          ),
          isInitialEdit: L || null
        }
      });
    }, ln = () => M.push({ name: "sx-publisher" }), Nt = () => b(this, null, function* () {
      g.value ? yield De(
        g.value.id,
        a.value
      ) : yield De(0, a.value);
    }), Ut = _o(
      () => g.value instanceof Ue
    ), Xe = Qa(!1);
    return (v, L) => {
      const D = wD("i18n");
      return yn(), yp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: bD(m.value)
      }, [
        Ze(oe(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: en(() => [
            Ze(oe(C), { shrink: "" }, {
              default: en(() => [
                Ze(oe(kp), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: N
                }, {
                  default: en(() => [
                    Ze(oe(DD), { icon: oe(hh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            Ze(oe(C), {
              grow: "",
              class: "px-1"
            }, {
              default: en(() => [
                _D(Sp("h4", xD, null, 512), [
                  [D, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Ze(oe(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: en(() => [
                Ze(oe(kp), {
                  disabled: !(oe(d) && oe(d).isTranslated),
                  onClick: ln
                }, {
                  default: en(() => [
                    SD(vD(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? (yn(), wo(oe(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: en(() => [
            Ze(oe(C), {
              dir: oe(z.getDir)(oe(r)),
              lang: oe(r),
              class: "sx-sentence-selector__section"
            }, {
              default: en(() => [
                Ze(h5),
                Sp("div", $D, [
                  (yn(!0), yp(CD, null, yD(u.value, (A) => (yn(), wo(aL, {
                    id: A.id,
                    key: `sub-section-${A.id}`,
                    "sub-section": A,
                    onBounceTranslation: U
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Ut.value && c.value ? (yn(), wo(YL, {
              key: 0,
              onEditTranslation: L[0] || (L[0] = (A) => Ge(A, !1)),
              onSkipTranslation: oe(V),
              onSelectPreviousSegment: oe(B)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : Ut.value ? (yn(), wo(xL, {
              key: 2,
              onEditTranslation: Ge,
              onApplyTranslation: F,
              onSkipTranslation: oe(V),
              onSelectPreviousSegment: oe(B)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (yn(), wo(W5, {
              key: 1,
              class: kD({ "mb-0": !n.value }),
              onConfigureOptions: Dn,
              onEditTranslation: L[1] || (L[1] = (A) => Ge(A, !0)),
              onApplyTranslation: F,
              onSkipTranslation: oe(V),
              onSelectPreviousSegment: oe(B),
              onRetryTranslation: Nt
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (yn(), wo(oe(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: en(() => [
            Ze(oe(Re), { class: "mt-0" })
          ]),
          _: 1
        })),
        Ze(o5, {
          active: t.value,
          "onUpdate:active": L[2] || (L[2] = (A) => t.value = A)
        }, null, 8, ["active"]),
        Ze(PE, {
          modelValue: Xe.value,
          "onUpdate:modelValue": L[3] || (L[3] = (A) => Xe.value = A),
          onDiscardTranslation: me
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const TD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: AD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, BD = window.Vue.resolveComponent, PD = window.Vue.createVNode, FD = window.Vue.normalizeClass, MD = window.Vue.openBlock, ND = window.Vue.createElementBlock;
function UD(e, t, n, o, s, a) {
  const r = BD("sx-sentence-selector");
  return MD(), ND("main", {
    class: FD(["sx-sentence-selector-view", a.classes])
  }, [
    PD(r)
  ], 2);
}
const ID = /* @__PURE__ */ Q(TD, [["render", UD]]), RD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, zD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const OD = window.Vue.resolveDirective, Za = window.Vue.withDirectives, wt = window.Vue.openBlock, tn = window.Vue.createElementBlock, ei = window.Vue.createCommentVNode, ti = window.Vue.Transition, qn = window.Vue.withCtx, vo = window.Vue.createVNode, Ss = window.Vue.createElementVNode, Gn = window.Vue.unref, jD = window.Vue.renderList, HD = window.Vue.Fragment, qD = window.Vue.normalizeClass, bp = window.Vue.createBlock, GD = window.Vue.toDisplayString, XD = window.Vue.createTextVNode, WD = { class: "sx-quick-tutorial" }, KD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, YD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, JD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, QD = { class: "sx-quick-tutorial__illustration" }, ZD = ["innerHTML"], eA = ["innerHTML"], tA = { class: "sx-quick-tutorial__step-indicator py-3" }, nA = ["onClick"], oA = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, sA = {
  key: "secondary-point-1",
  class: "ma-0"
}, aA = {
  key: "secondary-point-2",
  class: "ma-0"
}, iA = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, xp = window.Vue.ref, $p = window.Codex.CdxButton, rA = window.Codex.CdxIcon, lA = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = xp(2), n = xp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (p) => p === n.value, a = Se(), { isDesktop: r } = Zn(), l = ki(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: g,
      pageURLParameter: i,
      sectionURLParameter: c
    } = T(), u = () => {
      if (r.value) {
        const p = { sourcesection: c.value };
        l(
          d.value,
          g.value,
          i.value,
          p
        );
      } else
        a.push({ name: "sx-sentence-selector" });
    };
    return (p, m) => {
      const h = OD("i18n");
      return wt(), tn("section", WD, [
        vo(Gn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: qn(() => [
            Ss("section", KD, [
              vo(ti, {
                name: "fade",
                mode: "out-in"
              }, {
                default: qn(() => [
                  s(1) ? Za((wt(), tn("h2", YD, null, 512)), [
                    [h, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Za((wt(), tn("h2", JD, null, 512)), [
                    [h, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ei("", !0)
                ]),
                _: 1
              })
            ]),
            Ss("section", QD, [
              vo(ti, { name: "mw-ui-animation-slide-start" }, {
                default: qn(() => [
                  s(1) ? (wt(), tn("div", {
                    key: "illustration-1",
                    innerHTML: Gn(zD)
                  }, null, 8, ZD)) : s(2) ? (wt(), tn("div", {
                    key: "illustration-2",
                    innerHTML: Gn(RD)
                  }, null, 8, eA)) : ei("", !0)
                ]),
                _: 1
              })
            ]),
            Ss("div", tA, [
              (wt(!0), tn(HD, null, jD(t.value, (f) => (wt(), tn("span", {
                key: `dot-${f}`,
                class: qD(["dot mx-1", { "dot-active": s(f) }]),
                role: "button",
                onClick: (w) => n.value = f
              }, null, 10, nA))), 128))
            ]),
            Ss("section", oA, [
              vo(ti, {
                name: "fade",
                mode: "out-in"
              }, {
                default: qn(() => [
                  s(1) ? Za((wt(), tn("h3", sA, null, 512)), [
                    [h, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Za((wt(), tn("h3", aA, null, 512)), [
                    [h, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ei("", !0)
                ]),
                _: 1
              })
            ]),
            Ss("div", iA, [
              vo(ti, {
                name: "fade",
                mode: "out-in"
              }, {
                default: qn(() => [
                  s(1) ? (wt(), bp(Gn($p), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": p.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: qn(() => [
                      vo(Gn(rA), { icon: Gn(Ks) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (wt(), bp(Gn($p), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: u
                  }, {
                    default: qn(() => [
                      XD(GD(p.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : ei("", !0)
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
const cA = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: lA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, uA = window.Vue.resolveComponent, dA = window.Vue.createVNode, gA = window.Vue.normalizeClass, pA = window.Vue.openBlock, mA = window.Vue.createElementBlock;
function hA(e, t, n, o, s, a) {
  const r = uA("sx-quick-tutorial");
  return pA(), mA("main", {
    class: gA(["sx-quick-tutorial-view", a.classes])
  }, [
    dA(r)
  ], 2);
}
const fA = /* @__PURE__ */ Q(cA, [["render", hA]]);
const wA = window.Vue.resolveDirective, Vp = window.Vue.createElementVNode, _A = window.Vue.withDirectives, vA = window.Vue.unref, SA = window.Vue.withCtx, yA = window.Vue.createVNode, CA = window.Vue.openBlock, kA = window.Vue.createElementBlock, bA = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, xA = { class: "sx-editor__original-content-panel__header mb-2" }, $A = ["lang", "dir", "innerHTML"], Ep = window.Vue.ref, VA = window.Vue.onMounted, EA = {
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
      const d = r.getElementsByTagName("a");
      for (const g of d)
        g.href = q.getPageUrl(l, g.title), g.target = "_blank";
    }, o = Ep(null), s = Ep(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return VA(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const d = wA("i18n");
      return CA(), kA("section", bA, [
        _A(Vp("h5", xA, null, 512), [
          [d, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        yA(vA(S1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: SA(() => [
            Vp("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, $A)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, LA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const DA = window.Vue.unref, ys = window.Vue.createElementVNode, Lp = window.Vue.resolveDirective, Sl = window.Vue.withDirectives, AA = window.Vue.normalizeClass, TA = window.Vue.openBlock, BA = window.Vue.createElementBlock, PA = window.Vue.createCommentVNode, FA = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, MA = { class: "sx-editor__feedback-overlay-content px-4" }, NA = ["innerHTML"], UA = { class: "sx-editor__feedback-overlay-content__title" }, IA = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, yl = window.Vue.computed, RA = window.Vuex.useStore, zA = {
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
    const t = e, { targetLanguage: n } = Z(RA()), o = yl(
      () => Bt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = yl(() => {
      const r = Bt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = yl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const d = Lp("i18n"), g = Lp("i18n-html");
      return e.showFeedback ? (TA(), BA("div", FA, [
        ys("div", MA, [
          ys("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: DA(LA)
          }, null, 8, NA),
          Sl(ys("h2", UA, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Sl(ys("p", IA, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Sl(ys("p", {
            class: AA(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : PA("", !0);
    };
  }
}, OA = window.Vuex.useStore, jA = () => {
  const e = OA(), t = Mc(), { selectNextTranslationUnit: n } = Bo(), { sourceSection: o, selectedContentTranslationUnit: s } = K(), { getCurrentTitleByLanguage: a } = an();
  return (r) => b(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = r, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), r = l.innerHTML;
    const { sourceLanguage: d, targetLanguage: g, currentMTProvider: i } = e.state.application;
    s.value instanceof Ue && (r = (yield Tm(
      r,
      a(g, d),
      g
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const Me = window.Vue.unref, Cl = window.Vue.openBlock, kl = window.Vue.createBlock, Dp = window.Vue.createCommentVNode, Ap = window.Vue.createVNode, HA = window.Vue.createElementVNode, qA = window.Vue.withCtx, GA = { class: "sx-editor__editing-surface-container grow" }, bl = window.Vue.ref, XA = window.Vue.computed, WA = window.Vuex.useStore, KA = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = bl(!1), o = Se(), s = WA(), a = () => n.value = !0, r = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: d, content: g, originalContent: i, title: c } = history.state, u = bl(null), p = bl(!1), { logEditorSegmentAddEvent: m } = Hh(), { targetLanguage: h, sourceLanguage: f } = Z(s), { sourceSection: w } = K(), _ = XA(
      () => Bt.calculateScore(
        u.value,
        g,
        h.value
      )
    ), S = jA(), y = (k) => b(this, null, function* () {
      u.value = k, p.value = !0;
      const V = new Promise((x) => setTimeout(x, 2e3));
      let B = Promise.resolve();
      l ? w.value.editedTranslation = k : (_.value === 0 && d && m(), B = S(k)), yield Promise.all([V, B]), p.value = !1, r();
    });
    return (k, V) => (Cl(), kl(Me(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: qA(() => [
        Me(i) ? (Cl(), kl(EA, {
          key: 0,
          language: Me(f),
          dir: Me(z.getDir)(Me(f)),
          "original-content": Me(i)
        }, null, 8, ["language", "dir", "original-content"])) : Dp("", !0),
        n.value ? Dp("", !0) : (Cl(), kl(Me(Re), { key: 1 })),
        HA("div", GA, [
          Ap(zA, {
            "edited-translation": u.value,
            "show-feedback": p.value,
            "proposed-translation": Me(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Ap(b$, {
            content: Me(g),
            language: Me(h),
            dir: Me(z.getDir)(Me(h)),
            title: Me(c),
            onReady: a,
            onClose: r,
            onEditCompleted: y
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const YA = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: KA
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
}, JA = window.Vue.resolveComponent, QA = window.Vue.createVNode, ZA = window.Vue.normalizeClass, eT = window.Vue.openBlock, tT = window.Vue.createElementBlock;
function nT(e, t, n, o, s, a) {
  const r = JA("sx-editor");
  return eT(), tT("main", {
    class: ZA(["sx-editor-view", a.classes])
  }, [
    QA(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const oT = /* @__PURE__ */ Q(YA, [["render", nT]]);
const Dt = window.Vue.unref, Xn = window.Vue.createVNode, Cs = window.Vue.withCtx, sT = window.Vue.resolveDirective, aT = window.Vue.withDirectives, iT = window.Vue.openBlock, rT = window.Vue.createBlock, Tp = window.Codex.CdxButton, Bp = window.Codex.CdxIcon, lT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Se(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = sT("i18n");
      return iT(), rT(Dt(P), { class: "ma-0 sx-publisher__header" }, {
        default: Cs(() => [
          Xn(Dt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: Cs(() => [
              Xn(Dt(Tp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Cs(() => [
                  Xn(Dt(Bp), { icon: Dt(To) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          aT(Xn(Dt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Xn(Dt(C), { shrink: "" }, {
            default: Cs(() => [
              Xn(Dt(Tp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: Cs(() => [
                  Xn(Dt(Bp), { icon: Dt(Nk) }, null, 8, ["icon"])
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
}, cT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, uT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Pp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const xl = window.Vue.createElementVNode, Fp = window.Vue.toDisplayString, $l = window.Vue.unref, Vl = window.Vue.withCtx, Mp = window.Vue.createVNode, dT = window.Vue.openBlock, gT = window.Vue.createBlock, pT = window.Vue.createCommentVNode, mT = ["innerHTML"], hT = ["textContent"], fT = ["textContent"], El = window.Vue.computed, wT = {
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
        svg: cT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: uT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Pp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Pp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = El(() => o[n.status].svg), a = El(() => o[n.status].title), r = El(() => o[n.status].subtitle);
    return (l, d) => e.active ? (dT(), gT($l(st), {
      key: 0,
      "overlay-opacity": "high",
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Vl(() => [
        Mp($l(P), { class: "ma-4" }, {
          default: Vl(() => [
            Mp($l(C), null, {
              default: Vl(() => [
                xl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, mT),
                xl("h2", {
                  textContent: Fp(a.value)
                }, null, 8, hT),
                xl("p", {
                  class: "ma-0",
                  textContent: Fp(r.value)
                }, null, 8, fT)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : pT("", !0);
  }
};
const Ne = window.Vue.unref, _t = window.Vue.createVNode, nn = window.Vue.withCtx, _T = window.Vue.resolveDirective, vT = window.Vue.withDirectives, Np = window.Vue.toDisplayString, ST = window.Vue.createTextVNode, Ll = window.Vue.openBlock, Up = window.Vue.createElementBlock, yT = window.Vue.createCommentVNode, qh = window.Vue.createElementVNode, CT = window.Vue.createBlock, kT = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, bT = ["src"], xT = ["textContent"], $T = /* @__PURE__ */ qh("p", { class: "mt-0" }, null, -1), VT = window.Vue.computed, ET = window.Vue.inject, LT = window.Vue.ref, Ip = window.Codex.CdxButton, DT = window.Codex.CdxIcon, AT = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: bm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = LT(""), s = () => n("close"), a = () => n("publish", o.value), r = ET("breakpoints"), l = VT(() => r.value.mobile);
    return (d, g) => {
      const i = _T("i18n");
      return e.active && e.captchaDetails ? (Ll(), CT(Ne(st), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: nn(() => [
          _t(Ne(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: nn(() => [
              _t(Ne(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: nn(() => [
                  _t(Ne(Ip), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": d.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: nn(() => [
                      _t(Ne(DT), { icon: Ne(To) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              vT(_t(Ne(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              _t(Ne(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: nn(() => [
                  _t(Ne(Ip), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: nn(() => [
                      ST(Np(d.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          _t(Ne(di))
        ]),
        default: nn(() => [
          qh("div", kT, [
            e.captchaDetails.type === "image" ? (Ll(), Up("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, bT)) : (Ll(), Up("p", {
              key: 1,
              textContent: Np(e.captchaDetails.question)
            }, null, 8, xT)),
            $T,
            _t(Ne(P), { class: "ma-0" }, {
              default: nn(() => [
                _t(Ne(C), null, {
                  default: nn(() => [
                    _t(Ne(ii), {
                      value: o.value,
                      "onUpdate:value": g[0] || (g[0] = (c) => o.value = c),
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
      }, 8, ["fullscreen"])) : yT("", !0);
    };
  }
};
const Wn = window.Vue.unref, ks = window.Vue.createVNode, ni = window.Vue.withCtx, Kn = window.Vue.createElementVNode, TT = window.Vue.resolveDirective, BT = window.Vue.withDirectives, PT = window.Vue.renderList, Rp = window.Vue.Fragment, Dl = window.Vue.openBlock, zp = window.Vue.createElementBlock, FT = window.Vue.toDisplayString, MT = window.Vue.normalizeClass, NT = window.Vue.createBlock, UT = { class: "mw-ui-dialog__header" }, IT = { class: "row ma-0 px-4 py-3" }, RT = { class: "col shrink justify-center" }, zT = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, OT = { class: "mb-0" }, jT = { class: "pa-4" }, HT = ["textContent"], qT = window.Vuex.useStore, bs = window.Vue.computed, GT = window.Codex.CdxButton, XT = window.Codex.CdxIcon, WT = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = qT(), s = bs(() => o.state.application.publishTarget), a = bs(() => o.state.translator.isAnon), r = ue(), { sourceSection: l } = K(), d = bs(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), g = bs(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
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
    ]), c = (m) => m === i.value.length - 1 ? "mb-1" : "mb-4", u = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), u();
    };
    return (m, h) => {
      const f = TT("i18n");
      return Dl(), NT(Wn(st), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (w) => m.$emit("update:active", w)),
        onClose: u
      }, {
        header: ni(() => [
          Kn("div", UT, [
            Kn("div", IT, [
              Kn("div", RT, [
                ks(Wn(GT), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: u
                }, {
                  default: ni(() => [
                    ks(Wn(XT), { icon: Wn(hh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Kn("div", zT, [
                BT(Kn("h4", OT, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ks(Wn(di))
          ])
        ]),
        default: ni(() => [
          Kn("div", jT, [
            ks(Wn(Y0), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: ni(() => [
                (Dl(!0), zp(Rp, null, PT(i.value, (w, _) => (Dl(), zp(Rp, {
                  key: w.label
                }, [
                  ks(Wn(Ol), {
                    class: "pa-0 my-1",
                    label: w.label,
                    "input-value": w.value,
                    disabled: w.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Kn("p", {
                    class: MT(["complementary ms-7 mt-0", c(_)]),
                    textContent: FT(w.details)
                  }, null, 10, HT)
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
const vt = window.Vue.unref, Yn = window.Vue.createVNode, KT = window.Vue.resolveDirective, Op = window.Vue.withDirectives, oi = window.Vue.openBlock, jp = window.Vue.createElementBlock, YT = window.Vue.createCommentVNode, Hp = window.Vue.toDisplayString, Al = window.Vue.createElementVNode, So = window.Vue.withCtx, qp = window.Vue.createBlock, JT = window.Vue.Fragment, QT = window.Vue.normalizeClass, ZT = { class: "sx-publisher__review-info__content" }, e6 = {
  key: 0,
  class: "complementary ma-0"
}, t6 = ["textContent"], n6 = ["textContent"], Cn = window.Vue.computed, Gp = window.Vue.ref, o6 = window.Vue.watch, Xp = window.Codex.CdxButton, Tl = window.Codex.CdxIcon, s6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Gp(0), o = Gp(null);
    o6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const w = h.querySelector("a");
        w && w.setAttribute("target", "_blank");
      }
    });
    const s = Cn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Cn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = Cn(() => {
      switch (a.value) {
        case "warning":
          return ph;
        case "error":
          return Fk;
        default:
          return Ik;
      }
    }), l = Cn(() => a.value === "default"), d = Cn(
      () => l.value ? "notice" : a.value
    ), g = Cn(
      () => `sx-publisher__review-info--${d.value}`
    ), i = ue(), c = Cn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), u = Cn(
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
      const w = KT("i18n-html");
      return oi(), qp(vt(y0), {
        type: d.value,
        class: QT(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: l.value
      }, {
        icon: So(() => [
          Yn(vt(Tl), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: So(() => [
          Al("div", ZT, [
            a.value === "default" ? Op((oi(), jp("p", e6, null, 512)), [
              [w, void 0, "cx-sx-publisher-review-info"]
            ]) : (oi(), jp(JT, { key: 1 }, [
              Al("h5", {
                textContent: Hp(u.value)
              }, null, 8, t6),
              Al("p", {
                textContent: Hp(c.value)
              }, null, 8, n6),
              Yn(vt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: So(() => [
                  Op(Yn(vt(C), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [w, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (oi(), qp(vt(C), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: So(() => [
                      Yn(vt(Xp), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: So(() => [
                          Yn(vt(Tl), { icon: vt($c) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Yn(vt(Xp), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: So(() => [
                          Yn(vt(Tl), { icon: vt(Ks) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : YT("", !0)
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
}, a6 = (e) => {
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
}, i6 = window.Vuex.useStore, r6 = window.Vue.computed, l6 = () => {
  const e = i6(), { currentTranslation: t } = rn(), { currentMTProvider: n, previousRoute: o } = Z(e), { currentTargetPage: s } = qe(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: d
  } = T(), { sourceSection: g } = K(), i = je(), c = r6(() => {
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
    if (d.value ? (h.translation_source_section = d.value, h.translation_type = "section") : h.translation_type = "article", t.value) {
      h.translation_id = t.value.translationId, h.translation_target_title = t.value.targetTitle;
      const w = t.value.targetSectionTitle;
      w && (h.translation_target_section = w);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = J.getProviderForInstrumentation(n.value)), h.human_modification_rate = Bt.getMTScoreForPageSection(
      g.value,
      r.value
    ) / 100, h.human_modification_threshold = Bt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(le({
      event_type: "publish_attempt"
    }, c.value)),
    logPublishSuccessEvent: (h, f) => i(le({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, c.value)),
    logPublishFailureEvent: () => i(le({
      event_type: "publish_failure"
    }, c.value))
  };
}, Wp = window.Vue.ref, c6 = window.Vuex.useStore, u6 = () => {
  const e = c6(), { pageURLParameter: t } = T(), { sourceSection: n, targetPageTitleForPublishing: o } = K(), s = Oh(), a = Wp(!1), r = Wp("pending"), l = () => a.value = !1, d = Mc(), {
    logPublishAttemptEvent: g,
    logPublishSuccessEvent: i,
    logPublishFailureEvent: c
  } = l6(), u = (m, h) => b(void 0, null, function* () {
    g();
    const f = yield d();
    if (f instanceof Co)
      return c(), { publishFeedbackMessage: f, targetUrl: null };
    const w = f, {
      /** @type {PageSection} */
      sourceLanguage: _,
      targetLanguage: S
    } = e.state.application, y = o.value, k = e.getters["application/isSandboxTarget"], V = {
      html: a6(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: y,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: _,
      targetLanguage: S,
      revision: s.value,
      isSandbox: k,
      sectionTranslationId: w
    };
    m && (V.captchaId = m, V.captchaWord = h);
    const B = yield ot.publishTranslation(
      V
    );
    return B.publishFeedbackMessage === null ? i(B.pageId, B.revisionId) : c(), B;
  });
  return {
    closePublishDialog: l,
    doPublish: (m = null, h = null) => b(void 0, null, function* () {
      r.value = "pending", a.value = !0;
      let f;
      try {
        f = yield u(
          h == null ? void 0 : h.id,
          m
        );
      } catch (w) {
        if (w instanceof Vo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw w;
      }
      return f;
    }),
    isPublishDialogActive: a,
    publishStatus: r
  };
}, d6 = window.Vue.computed, g6 = () => {
  const e = Se(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = an(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = T(), a = d6(
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
}, p6 = window.Vuex.useStore, m6 = () => {
  const e = p6(), { targetLanguage: t } = Z(e), { sourceSection: n } = K();
  return () => {
    const o = Bt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = Bt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, r = s === "failure" ? "error" : "warning";
    let l, d;
    return r === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Co({
      title: l,
      text: d,
      status: r,
      type: "mt"
    });
  };
}, h6 = window.Vue.ref, f6 = window.Vue.computed, w6 = () => {
  const e = m6(), t = h6([]), n = f6(
    () => t.value.some((r) => r.isError)
  );
  return {
    addPublishFeedbackMessage: (r) => {
      t.value.push(r), t.value.sort((l, d) => +d.isError - +l.isError);
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
}, _6 = window.Vuex.useStore, v6 = () => {
  const e = _6(), { currentSourcePage: t } = qe(), { sourceLanguage: n, targetLanguage: o } = Z(e), { sourceSection: s, targetPageTitleForPublishing: a } = K();
  return (r) => b(void 0, null, function* () {
    const l = a.value, d = e.getters["application/isSandboxTarget"], g = t.value.title, i = new mw.Title(g), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !d && i.getNamespaceId() !== c.user)
      try {
        yield vi.addWikibaseLink(
          n.value,
          o.value,
          g,
          l
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
}, Kp = window.Vue.ref, S6 = () => {
  const e = Kp(!1), t = Kp(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ge = window.Vue.unref, Be = window.Vue.createVNode, y6 = window.Vue.resolveDirective, xs = window.Vue.createElementVNode, C6 = window.Vue.withDirectives, yo = window.Vue.withCtx, k6 = window.Vue.openBlock, b6 = window.Vue.createElementBlock, x6 = { class: "sx-publisher" }, $6 = { class: "sx-publisher__publish-panel pa-4" }, V6 = { class: "mb-2" }, E6 = ["innerHTML"], L6 = { class: "sx-publisher__section-preview pa-5" }, D6 = ["innerHTML"], Yp = window.Vue.computed, A6 = window.Vue.onMounted, T6 = window.Vue.ref, B6 = window.Vue.watch, P6 = window.Vuex.useStore, Jp = window.Codex.CdxButton, Qp = window.Codex.CdxIcon, F6 = {
  __name: "SXPublisher",
  setup(e) {
    const t = P6(), { sourceSection: n } = K(), o = Yp(() => {
      var x;
      return (x = n.value) == null ? void 0 : x.title;
    }), s = ue(), a = Yp(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: l,
      handleCaptchaError: d,
      onCaptchaDialogClose: g
    } = S6(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: u,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = w6(), h = v6(), { doPublish: f, isPublishDialogActive: w, publishStatus: _, closePublishDialog: S } = u6(), y = (x = null) => b(this, null, function* () {
      if (c.value)
        return;
      const F = yield f(x, r);
      if (!F)
        return;
      const { publishFeedbackMessage: U, targetUrl: M } = F;
      if (d(U)) {
        S();
        return;
      } else
        U && u(U);
      _.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          S();
          return;
        }
        h(M);
      }, 1e3);
    });
    A6(() => m());
    const k = g6(), V = T6(!1), B = () => V.value = !0;
    return B6(V, (x) => {
      x || (p(), m());
    }), (x, F) => {
      const U = y6("i18n");
      return k6(), b6("section", x6, [
        Be(lT, {
          "is-publishing-disabled": ge(c),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        xs("div", $6, [
          C6(xs("h5", V6, null, 512), [
            [U, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          xs("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, E6),
          Be(ge(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: yo(() => [
              Be(ge(C), { shrink: "" }, {
                default: yo(() => [
                  Be(ge(Jp), {
                    weight: "quiet",
                    "aria-label": x.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: B
                  }, {
                    default: yo(() => [
                      Be(ge(Qp), { icon: ge(qk) }, null, 8, ["icon"])
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
        Be(s6, { "publish-feedback-messages": ge(i) }, null, 8, ["publish-feedback-messages"]),
        xs("section", L6, [
          Be(ge(P), { class: "pb-5 ma-0" }, {
            default: yo(() => [
              Be(ge(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Be(ge(C), { shrink: "" }, {
                default: yo(() => [
                  Be(ge(Jp), {
                    weight: "quiet",
                    "aria-label": x.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ge(k)
                  }, {
                    default: yo(() => [
                      Be(ge(Qp), { icon: ge(kc) }, null, 8, ["icon"])
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
            innerHTML: ge(n).translationHtml
          }, null, 8, D6)
        ]),
        Be(WT, {
          active: V.value,
          "onUpdate:active": F[0] || (F[0] = (M) => V.value = M)
        }, null, 8, ["active"]),
        Be(AT, {
          active: ge(l),
          "captcha-details": ge(r),
          onClose: ge(g),
          onPublish: F[1] || (F[1] = (M) => y(M))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Be(wT, {
          active: ge(w),
          status: ge(_)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const M6 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: F6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, N6 = window.Vue.resolveComponent, U6 = window.Vue.createVNode, I6 = window.Vue.normalizeClass, R6 = window.Vue.openBlock, z6 = window.Vue.createElementBlock;
function O6(e, t, n, o, s, a) {
  const r = N6("sx-publisher");
  return R6(), z6("main", {
    class: I6(["sx-publisher-view", a.classes])
  }, [
    U6(r)
  ], 2);
}
const j6 = /* @__PURE__ */ Q(M6, [["render", O6]]);
const St = window.Vue.unref, kn = window.Vue.createVNode, Jn = window.Vue.withCtx, Bl = window.Vue.toDisplayString, Pl = window.Vue.createElementVNode, H6 = window.Vue.openBlock, q6 = window.Vue.createBlock, G6 = ["textContent"], X6 = ["textContent"], W6 = ["textContent"], Gh = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Do,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (H6(), q6(St(P), {
      class: "cx-search-suggestion pt-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: St(z.getDir)(e.suggestion.language)
    }, {
      default: Jn(() => [
        kn(St(C), { shrink: "" }, {
          default: Jn(() => [
            kn(St(ac), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        kn(St(C), { class: "ms-4" }, {
          default: Jn(() => [
            kn(St(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Jn(() => [
                kn(St(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Jn(() => [
                    Pl("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Bl(e.suggestion.title)
                    }, null, 8, G6)
                  ]),
                  _: 1
                }),
                kn(St(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Jn(() => [
                    Pl("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Bl(e.suggestion.description)
                    }, null, 8, X6)
                  ]),
                  _: 1
                }),
                kn(St(C), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Jn(() => [
                    kn(St(xe), {
                      icon: St(Nw),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Pl("small", {
                      textContent: Bl(e.suggestion.langLinksCount)
                    }, null, 8, W6)
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
const $s = window.Vue.unref, Vs = window.Vue.openBlock, Fl = window.Vue.createBlock, K6 = window.Vue.createCommentVNode, Y6 = window.Vue.resolveDirective, J6 = window.Vue.withDirectives, Zp = window.Vue.createElementBlock, Q6 = window.Vue.renderList, Z6 = window.Vue.Fragment, e9 = window.Vue.withCtx, t9 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, em = window.Vue.computed, n9 = {
  __name: "SearchResultsCard",
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguageURLParameter: t } = T(), n = em(() => z.getAutonym(t)), o = e, s = em(() => o.searchInput), { searchResultsLoading: a, searchResultsSlice: r } = Dh(
      t,
      s
    );
    return (l, d) => {
      const g = Y6("i18n");
      return Vs(), Fl($s(Ie), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: e9(() => [
          $s(a) ? (Vs(), Fl($s(Re), { key: 0 })) : $s(r).length === 0 ? J6((Vs(), Zp("p", t9, null, 512)), [
            [g, [
              s.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : K6("", !0),
          (Vs(!0), Zp(Z6, null, Q6($s(r), (i) => (Vs(), Fl(Gh, {
            key: i.pageid,
            suggestion: i,
            onClick: (c) => l.$emit("suggestion-clicked", i)
          }, null, 8, ["suggestion", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const o9 = window.Vue.toDisplayString, s9 = window.Vue.createElementVNode, a9 = window.Vue.renderList, i9 = window.Vue.Fragment, Ml = window.Vue.openBlock, r9 = window.Vue.createElementBlock, tm = window.Vue.createBlock, l9 = window.Vue.unref, nm = window.Vue.withCtx, c9 = ["textContent"], om = {
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
    return (t, n) => (Ml(), tm(l9(Ie), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: nm(() => [
        s9("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: o9(e.cardTitle)
        }, null, 8, c9)
      ]),
      default: nm(() => [
        (Ml(!0), r9(i9, null, a9(e.suggestions, (o) => (Ml(), tm(Gh, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, u9 = window.Vue.computed, d9 = (e, t) => u9(() => {
  const o = {
    value: "other",
    props: {
      icon: zw,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (r, l) => s.findIndex((d) => d === r) === l
  ).map((r) => ({
    value: r,
    props: {
      label: z.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), g9 = window.Vue.computed, p9 = (e, t, n) => g9(() => {
  const o = (navigator.language || "").split("-")[0], s = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((r) => r.split("-")[0]), a = [
    // User's current interface language
    mw.config.get("wgUserLanguage"),
    // Current wiki's content language
    mw.config.get("wgContentLanguage"),
    o,
    ...n.value,
    ...s
  ];
  return [...new Set(a)].filter(
    (r) => r !== e.value && r !== t.value && z.getAutonym(r) !== r
  );
});
const m9 = window.Vue.resolveDirective, h9 = window.Vue.createElementVNode, Nl = window.Vue.withDirectives, Le = window.Vue.unref, Es = window.Vue.withCtx, At = window.Vue.createVNode, Ls = window.Vue.openBlock, sm = window.Vue.createBlock, f9 = window.Vue.createCommentVNode, Ul = window.Vue.createElementBlock, w9 = window.Vue.Fragment, _9 = window.Vue.vShow, v9 = { class: "sx-article-search" }, S9 = { class: "mb-0" }, y9 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, Ds = window.Vue.ref, C9 = window.Vue.onMounted, Il = window.Vue.computed, am = window.Vue.watch, k9 = window.Vue.inject, b9 = window.Vuex.useStore, x9 = window.Codex.CdxButton, $9 = window.Codex.CdxIcon, V9 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Ds(""), n = Ds(!1), o = Ds(null), s = Ds(!1), a = Ds([]), r = b9(), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: d
    } = T(), { supportedLanguageCodes: g } = Hs(), i = p9(
      l,
      d,
      a
    ), c = d9(
      l,
      i
    ), u = Se(), { fetchAllTranslations: p } = Ci();
    C9(() => b(this, null, function* () {
      var N;
      yield uh()(), p();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (G) {
      }
      (N = o.value) == null || N.focus();
    }));
    const m = () => {
      u.push({ name: "dashboard" });
    }, h = dh(), f = (M) => h(M, d.value), w = (M) => {
      if (M === "other") {
        s.value = !0;
        return;
      }
      f(M);
    };
    am(l, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const _ = je();
    am(t, () => {
      n.value || (n.value = !0, _({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: d.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, y = (M) => {
      s.value = !1, a.value.push(l.value), w(M);
    }, k = Il(
      () => r.getters["mediawiki/getRecentlyEditedPages"]
    ), V = Il(() => r.getters["mediawiki/getNearbyPages"]), B = k9("breakpoints"), x = Il(() => B.value.tabletAndDown), F = Ys(), U = (M, N) => F(
      M.title,
      l.value,
      d.value,
      N
    );
    return (M, N) => {
      const G = m9("i18n");
      return Ls(), Ul("section", v9, [
        At(Le(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Es(() => [
            At(Le(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Es(() => [
                Nl(h9("h5", S9, null, 512), [
                  [G, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            At(Le(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Es(() => [
                At(Le(x9), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": M.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: m
                }, {
                  default: Es(() => [
                    At(Le($9), { icon: Le(To) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        At(Le(ii), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": N[0] || (N[0] = (H) => t.value = H),
          "icon-size": 20,
          icon: Le(zl),
          placeholder: M.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        At(Le(Is), {
          class: "sx-article-search__language-button-group",
          items: Le(c),
          active: Le(l),
          onSelect: w
        }, null, 8, ["items", "active"]),
        t.value ? f9("", !0) : (Ls(), Ul(w9, { key: 0 }, [
          k.value && k.value.length ? (Ls(), sm(om, {
            key: 0,
            "card-title": M.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: k.value,
            onSuggestionClicked: N[1] || (N[1] = (H) => U(H, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : V.value && V.value.length ? (Ls(), sm(om, {
            key: 1,
            "card-title": M.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: V.value,
            onSuggestionClicked: N[2] || (N[2] = (H) => U(H, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : Nl((Ls(), Ul("p", y9, null, 512)), [
            [G, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Nl(At(n9, {
          "search-input": t.value,
          onSuggestionClicked: N[3] || (N[3] = (H) => U(H, "search_result"))
        }, null, 8, ["search-input"]), [
          [_9, !!t.value]
        ]),
        At(Le(st), {
          value: s.value,
          "onUpdate:value": N[4] || (N[4] = (H) => s.value = H),
          class: "sx-article-search-language-selector",
          fullscreen: x.value,
          header: x.value,
          title: M.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: Es(() => [
            At(Le(Vh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: Le(g),
              suggestions: Le(i),
              placeholder: M.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: y,
              onClose: S
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const E9 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: V9
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, L9 = window.Vue.resolveComponent, D9 = window.Vue.createVNode, A9 = window.Vue.normalizeClass, T9 = window.Vue.openBlock, B9 = window.Vue.createElementBlock;
function P9(e, t, n, o, s, a) {
  const r = L9("sx-article-search");
  return T9(), B9("main", {
    class: A9(["sx-article-search-view", a.classes])
  }, [
    D9(r)
  ], 2);
}
const F9 = /* @__PURE__ */ Q(E9, [["render", P9]]), M9 = window.Vuex.useStore, Xh = [
  {
    path: "",
    name: "dashboard",
    component: rg,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: F9,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: W4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: m3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: $E,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: fA,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: ID,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: oT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: j6,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: rg,
    meta: { workflowStep: 0 }
  }
], Nc = Py({
  history: BS(),
  routes: Xh
});
Nc.beforeEach((e, t, n) => {
  const o = M9();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || dm.assertUser().catch((l) => {
    l instanceof Vo && o.commit("application/setIsLoginDialogOn", !0);
  }), e.query.force) {
    n();
    return;
  }
  const s = t.meta.workflowStep, a = e.meta.workflowStep;
  if (isNaN(s) && a >= 1) {
    n({ name: "dashboard" });
    return;
  }
  if (Math.ceil(a) - Math.floor(s) > 1) {
    const l = Math.ceil(a) - 1, d = Xh.find(
      (g) => g.meta.workflowStep === l
    );
    n({ name: d.name });
    return;
  }
  n();
});
Nc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const N9 = window.Vue.createApp, U9 = mw.config.get("wgUserLanguage"), I9 = "en", R9 = mw.messages.values || {}, Po = N9(L_);
Po.use(Nc);
Po.use(tS);
Po.use(A1);
Po.use(D1);
const z9 = c_({
  locale: U9,
  finalFallback: I9,
  messages: R9,
  wikilinks: !0
});
Po.use(z9);
Po.mount("#contenttranslation");
