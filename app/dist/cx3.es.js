/*@nomin*/
var ef = Object.defineProperty, tf = Object.defineProperties;
var nf = Object.getOwnPropertyDescriptors;
var Gc = Object.getOwnPropertySymbols;
var of = Object.prototype.hasOwnProperty, sf = Object.prototype.propertyIsEnumerable;
var Xc = (e, t, n) => t in e ? ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ie = (e, t) => {
  for (var n in t || (t = {}))
    of.call(t, n) && Xc(e, n, t[n]);
  if (Gc)
    for (var n of Gc(t))
      sf.call(t, n) && Xc(e, n, t[n]);
  return e;
}, Be = (e, t) => tf(e, nf(t));
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
}, af = {
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
}, rf = window.Vue.toDisplayString, xi = window.Vue.openBlock, $i = window.Vue.createElementBlock, lf = window.Vue.createCommentVNode, Wc = window.Vue.createElementVNode, cf = window.Vue.normalizeClass, uf = ["width", "height", "aria-labelledby"], df = ["id"], gf = ["fill"], pf = ["d"];
function mf(e, t, n, o, s, a) {
  return xi(), $i("span", {
    class: cf(["mw-ui-icon notranslate", a.classes])
  }, [
    (xi(), $i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (xi(), $i("title", {
        key: 0,
        id: n.iconName
      }, rf(n.iconName), 9, df)) : lf("", !0),
      Wc("g", { fill: n.iconColor }, [
        Wc("path", { d: a.iconImagePath }, null, 8, pf)
      ], 8, gf)
    ], 8, uf))
  ], 2);
}
const _e = /* @__PURE__ */ Q(af, [["render", mf]]);
const hf = {
  name: "MwButton",
  components: {
    MwIcon: _e
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
}, ff = window.Vue.renderSlot, wf = window.Vue.resolveComponent, Kc = window.Vue.normalizeClass, ea = window.Vue.openBlock, Vi = window.Vue.createBlock, Ei = window.Vue.createCommentVNode, _f = window.Vue.toDisplayString, vf = window.Vue.createElementBlock, Sf = window.Vue.toHandlerKey, yf = window.Vue.withModifiers, Cf = window.Vue.mergeProps, kf = window.Vue.createElementVNode, bf = window.Vue.resolveDynamicComponent, xf = window.Vue.withCtx, $f = { class: "mw-ui-button__content" }, Vf = ["textContent"];
function Ef(e, t, n, o, s, a) {
  const r = wf("mw-icon");
  return ea(), Vi(bf(a.component), {
    class: Kc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: xf(() => [
      ff(e.$slots, "default", {}, () => [
        kf("span", $f, [
          n.icon ? (ea(), Vi(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Kc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Ei("", !0),
          !a.isIcon && n.label ? (ea(), vf("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: _f(n.label)
          }, null, 8, Vf)) : Ei("", !0),
          n.indicator ? (ea(), Vi(r, Cf({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Sf(a.indicatorClickEvent)]: t[0] || (t[0] = yf((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Ei("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const fe = /* @__PURE__ */ Q(hf, [["render", Ef]]);
const Df = {
  name: "MwButtonGroup",
  components: {
    MwButton: fe
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
}, Af = window.Vue.renderList, Lf = window.Vue.Fragment, Di = window.Vue.openBlock, Yc = window.Vue.createElementBlock, Tf = window.Vue.resolveComponent, Bf = window.Vue.withModifiers, Pf = window.Vue.mergeProps, Ff = window.Vue.createBlock, Mf = { class: "row mw-ui-button-group ma-0 pa-0" };
function Nf(e, t, n, o, s, a) {
  const r = Tf("mw-button");
  return Di(), Yc("div", Mf, [
    (Di(!0), Yc(Lf, null, Af(n.items, (l) => (Di(), Ff(r, Pf({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Bf((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Ms = /* @__PURE__ */ Q(Df, [["render", Nf]]);
const Uf = {
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
}, Jc = window.Vue.renderSlot, If = window.Vue.toDisplayString, Qc = window.Vue.openBlock, Zc = window.Vue.createElementBlock, Rf = window.Vue.createCommentVNode, zf = window.Vue.createElementVNode, Of = { class: "mw-ui-card" }, Hf = ["textContent"], jf = { class: "mw-ui-card__content" };
function qf(e, t, n, o, s, a) {
  return Qc(), Zc("div", Of, [
    Jc(e.$slots, "header", {}, () => [
      n.title ? (Qc(), Zc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: If(n.title)
      }, null, 8, Hf)) : Rf("", !0)
    ]),
    zf("div", jf, [
      Jc(e.$slots, "default")
    ])
  ]);
}
const Ie = /* @__PURE__ */ Q(Uf, [["render", qf]]);
const Gf = {}, Xf = window.Vue.openBlock, Wf = window.Vue.createElementBlock, Kf = { class: "mw-ui-divider row" };
function Yf(e, t) {
  return Xf(), Wf("div", Kf);
}
const ci = /* @__PURE__ */ Q(Gf, [["render", Yf]]);
const Jf = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Qf = window.Vue.renderSlot, Zf = window.Vue.resolveDynamicComponent, ew = window.Vue.withCtx, tw = window.Vue.openBlock, nw = window.Vue.createBlock;
function ow(e, t, n, o, s, a) {
  return tw(), nw(Zf(n.tag), { class: "mw-grid container" }, {
    default: ew(() => [
      Qf(e.$slots, "default")
    ]),
    _: 3
  });
}
const sw = /* @__PURE__ */ Q(Jf, [["render", ow]]), aw = {
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
}, iw = window.Vue.renderSlot, rw = window.Vue.resolveDynamicComponent, lw = window.Vue.normalizeClass, cw = window.Vue.withCtx, uw = window.Vue.openBlock, dw = window.Vue.createBlock;
function gw(e, t, n, o, s, a) {
  return uw(), dw(rw(n.tag), {
    class: lw(a.classes)
  }, {
    default: cw(() => [
      iw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const B = /* @__PURE__ */ Q(aw, [["render", gw]]), Ml = ["mobile", "tablet", "desktop", "desktop-wide"], pw = Ml.reduce(
  (e, t) => Be(ie({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), hw = {
  name: "MwCol",
  props: Be(ie({}, pw), {
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
      for (let n = 0; n < Ml.length; n++) {
        let o = Ml[n], s = this.$props[o];
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
}, fw = window.Vue.renderSlot, ww = window.Vue.resolveDynamicComponent, _w = window.Vue.normalizeClass, vw = window.Vue.withCtx, Sw = window.Vue.openBlock, yw = window.Vue.createBlock;
function Cw(e, t, n, o, s, a) {
  return Sw(), yw(ww(n.tag), {
    class: _w(a.classes)
  }, {
    default: vw(() => [
      fw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ Q(hw, [["render", Cw]]), kw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", bw = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", xw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", ui = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", $w = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Vw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", sm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Nl = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Ew = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Ns = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Dw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Aw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", am = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Ul = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Lw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", im = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Tw = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Bw = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Pw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Fw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Mw = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Nw = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, si = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Uw = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, rm = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Iw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, lm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", Rw = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", zw = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Ow = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Ai = window.Vue.computed, Hw = window.Vue.watch, jw = window.Vue.ref, qw = window.Vue.nextTick, Gw = {
  name: "MwDialog",
  components: {
    MwButton: fe,
    MwRow: B,
    MwCol: k,
    MwDivider: ci
  },
  props: {
    /**
     * Animation
     * @values slide-end, slide-start, slide-up, slide-down, fade
     **/
    animation: {
      type: String,
      default: "slide-start",
      validator: (e) => [
        "slide-end",
        "slide-start",
        "slide-up",
        "slide-down",
        "fade"
      ].indexOf(e) !== -1
    },
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
    const n = jw(null), o = Ai(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Ai(() => ({
      "mw-ui-dialog__overlay--high_opacity": e.overlayOpacity === "high"
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    Hw(
      () => e.value,
      (u) => {
        u ? (r(), qw(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Ai(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClasses: s,
      mwIconClose: Ns,
      root: n
    };
  }
}, eu = window.Vue.normalizeClass, Li = window.Vue.createElementVNode, Ti = window.Vue.renderSlot, ta = window.Vue.resolveComponent, To = window.Vue.createVNode, Bi = window.Vue.withCtx, tu = window.Vue.createCommentVNode, Xw = window.Vue.withKeys, nu = window.Vue.openBlock, Ww = window.Vue.createElementBlock, Kw = window.Vue.Transition, Yw = window.Vue.normalizeStyle, Jw = window.Vue.createBlock, Qw = { class: "mw-ui-dialog__shell items-stretch" }, Zw = { class: "mw-ui-dialog__body" };
function e0(e, t, n, o, s, a) {
  const r = ta("mw-col"), l = ta("mw-button"), u = ta("mw-row"), d = ta("mw-divider");
  return nu(), Jw(Kw, {
    name: `mw-ui-animation-${n.animation}`,
    style: Yw(o.cssVars)
  }, {
    default: Bi(() => [
      n.value ? (nu(), Ww("div", {
        key: 0,
        ref: "root",
        class: eu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Xw((i) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        Li("div", {
          class: eu(["mw-ui-dialog__overlay", o.overlayClasses]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close)
        }, null, 2),
        Li("div", Qw, [
          n.header ? Ti(e.$slots, "header", { key: 0 }, () => [
            To(u, { class: "mw-ui-dialog__header" }, {
              default: Bi(() => [
                To(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                To(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Bi(() => [
                    To(l, {
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
            To(d)
          ]) : tu("", !0),
          Li("div", Zw, [
            Ti(e.$slots, "default")
          ]),
          Ti(e.$slots, "footer")
        ])
      ], 34)) : tu("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const st = /* @__PURE__ */ Q(Gw, [["render", e0]]);
const t0 = {
  name: "MwInput",
  components: {
    MwIcon: _e
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
}, ou = window.Vue.renderSlot, n0 = window.Vue.resolveComponent, na = window.Vue.openBlock, Pi = window.Vue.createBlock, su = window.Vue.createCommentVNode, o0 = window.Vue.resolveDynamicComponent, s0 = window.Vue.toDisplayString, a0 = window.Vue.mergeProps, i0 = window.Vue.withModifiers, r0 = window.Vue.createElementVNode, l0 = window.Vue.normalizeClass, c0 = window.Vue.createElementBlock, u0 = { class: "mw-ui-input__content" };
function d0(e, t, n, o, s, a) {
  const r = n0("mw-icon");
  return na(), c0("div", {
    class: l0(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    r0("div", u0, [
      ou(e.$slots, "icon", {}, () => [
        n.icon ? (na(), Pi(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : su("", !0)
      ]),
      (na(), Pi(o0(n.type === "textarea" ? n.type : "input"), a0({
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
        textContent: s0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      ou(e.$slots, "indicator", {}, () => [
        n.indicator ? (na(), Pi(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = i0((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : su("", !0)
      ])
    ])
  ], 2);
}
const ai = /* @__PURE__ */ Q(t0, [["render", d0]]);
const g0 = {
  name: "MwMessage",
  components: { MwCol: k, MwRow: B, MwIcon: _e, MwButton: fe },
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
    mwIconClose: Ns,
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
      notice: Nw,
      warning: rm,
      success: si,
      error: Uw
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
}, Fi = window.Vue.renderSlot, oa = window.Vue.resolveComponent, au = window.Vue.createVNode, iu = window.Vue.withCtx, ru = window.Vue.openBlock, lu = window.Vue.createBlock, cu = window.Vue.createCommentVNode, p0 = window.Vue.normalizeClass;
function m0(e, t, n, o, s, a) {
  const r = oa("mw-icon"), l = oa("mw-col"), u = oa("mw-button"), d = oa("mw-row");
  return e.shown ? (ru(), lu(d, {
    key: 0,
    class: p0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: iu(() => [
      Fi(e.$slots, "icon", {}, () => [
        au(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      au(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: iu(() => [
          Fi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Fi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (ru(), lu(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : cu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : cu("", !0);
}
const h0 = /* @__PURE__ */ Q(g0, [["render", m0]]);
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
const f0 = {}, w0 = window.Vue.createElementVNode, _0 = window.Vue.openBlock, v0 = window.Vue.createElementBlock, S0 = { class: "mw-ui-spinner" }, y0 = /* @__PURE__ */ w0("div", { class: "mw-ui-spinner__bounce" }, null, -1), C0 = [
  y0
];
function k0(e, t) {
  return _0(), v0("div", S0, C0);
}
const Re = /* @__PURE__ */ Q(f0, [["render", k0]]), tt = {
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
const b0 = window.Vue.computed, x0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: _e },
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
      default: lm
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
    const n = b0(() => {
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
}, uu = window.Vue.normalizeStyle, du = window.Vue.openBlock, $0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const V0 = window.Vue.resolveComponent, E0 = window.Vue.createBlock;
function D0(e, t, n, o, s, a) {
  const r = V0("mw-ui-icon");
  return n.thumbnail ? (du(), $0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: uu(o.style)
  }, null, 4)) : (du(), E0(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: uu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const nc = /* @__PURE__ */ Q(x0, [["render", D0]]);
const A0 = {
  name: "MwRadio",
  components: { MwRow: B },
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
}, L0 = window.Vue.vModelRadio, oi = window.Vue.createElementVNode, T0 = window.Vue.withDirectives, B0 = window.Vue.toDisplayString, P0 = window.Vue.resolveComponent, F0 = window.Vue.normalizeClass, M0 = window.Vue.withCtx, N0 = window.Vue.openBlock, U0 = window.Vue.createBlock, I0 = { class: "mw-ui-radio__controls" }, R0 = ["id", "disabled", "name", "value"], z0 = /* @__PURE__ */ oi("span", { class: "mw-ui-radio__controls__icon" }, null, -1), O0 = ["for", "textContent"];
function H0(e, t, n, o, s, a) {
  const r = P0("mw-row");
  return N0(), U0(r, {
    class: F0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: M0(() => [
      oi("div", I0, [
        T0(oi("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, R0), [
          [L0, a.inputModel]
        ]),
        z0
      ]),
      oi("label", {
        for: n.id,
        class: "ps-2",
        textContent: B0(n.label)
      }, null, 8, O0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Il = /* @__PURE__ */ Q(A0, [["render", H0]]), gu = window.Vue.h, j0 = {
  name: "MwRadioGroup",
  components: { MwRadio: Il },
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
      (o) => gu(Il, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), gu("div", { class: "mw-ui-radio-group" }, n);
  }
};
const q0 = {
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
}, pu = window.Vue.normalizeClass, mu = window.Vue.normalizeStyle, G0 = window.Vue.createElementVNode, X0 = window.Vue.openBlock, W0 = window.Vue.createElementBlock, K0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function Y0(e, t, n, o, s, a) {
  return X0(), W0("div", {
    class: pu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: mu(a.containerStyles)
  }, [
    G0("div", {
      class: pu(["mw-progress-bar__bar", a.barClass]),
      style: mu(a.barStyles)
    }, null, 6)
  ], 14, K0);
}
const cm = /* @__PURE__ */ Q(q0, [["render", Y0]]), J0 = (e, t, n, o) => (s) => {
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
}, Q0 = (e, t, n, o) => ({ initiateDrag: J0(
  e,
  t,
  n,
  o
) }), Z0 = window.Vue.ref, hu = window.Vue.computed, e1 = (e, t, n, o) => {
  const s = Z0(0), a = hu(
    () => t.value > e.value
  ), r = hu(
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
const sa = window.Vue.ref, t1 = window.Vue.onMounted, fu = window.Vue.computed, n1 = window.Vue.nextTick, o1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: fe
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
    const t = sa(!0), n = sa(null), o = fu(
      () => Math.min(e.minHeight, s.value)
    ), s = sa(1), { initiateDrag: a } = Q0(
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
    } = e1(o, s, n, t), c = () => d(u.value + 1), g = sa(null), p = fu(() => ({
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
    return t1(() => b(this, null, function* () {
      var f;
      yield n1(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: Iw,
      mwIconExpand: Nl,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, s1 = window.Vue.renderSlot, a1 = window.Vue.normalizeClass, aa = window.Vue.createElementVNode, i1 = window.Vue.resolveComponent, r1 = window.Vue.createVNode, Mi = window.Vue.openBlock, l1 = window.Vue.createBlock, wu = window.Vue.createCommentVNode, _u = window.Vue.createElementBlock, c1 = window.Vue.normalizeStyle, u1 = { class: "mw-ui-expandable-content__container" }, d1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, g1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function p1(e, t, n, o, s, a) {
  const r = i1("mw-button");
  return Mi(), _u("div", {
    class: "mw-ui-expandable-content",
    style: c1(o.cssVars)
  }, [
    aa("div", u1, [
      aa("div", {
        ref: "contentRef",
        class: a1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        s1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Mi(), _u("div", d1, [
        r1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Mi(), l1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : wu("", !0)
      ])) : wu("", !0)
    ]),
    aa("div", g1, [
      aa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const m1 = /* @__PURE__ */ Q(o1, [["render", p1]]);
const ia = window.Vue.computed, h1 = {
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
}, vu = window.Vue.createElementVNode, Su = window.Vue.normalizeStyle, f1 = window.Vue.openBlock, w1 = window.Vue.createElementBlock, _1 = ["width", "height", "viewport"], v1 = ["r", "cx", "cy", "stroke-dasharray"], S1 = ["r", "cx", "cy", "stroke-dasharray"];
function y1(e, t, n, o, s, a) {
  return f1(), w1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Su(o.cssVars)
  }, [
    vu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, v1),
    vu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Su({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, S1)
  ], 12, _1);
}
const C1 = /* @__PURE__ */ Q(h1, [["render", y1]]), k1 = window.Vue.ref, rn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, ln = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${rn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${rn.tablet}px) and (max-width: ${rn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${rn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${rn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${rn.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${rn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${rn["desktop-wide"]}px)`
}, Ni = {
  mobile: () => matchMedia(ln.mobile).matches,
  tablet: () => matchMedia(ln.tablet).matches,
  desktop: () => matchMedia(ln.desktop).matches,
  desktopwide: () => matchMedia(ln["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(ln["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(ln["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(ln["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(ln["desktop-and-down"]).matches
}, b1 = {
  install: (e) => {
    const t = () => {
      for (let o in Ni)
        Ni.hasOwnProperty(o) && (n.value[o] = Ni[o]());
    }, n = k1({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Be(ie({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, x1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Be(ie({}, e.config.globalProperties.$mwui || {}), {
      colors: tt
    }), e.provide("colors", tt);
  }
};
class bo extends Error {
}
const $1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new bo();
}), um = { assertUser: $1 };
const V1 = window.Vue.resolveDirective, Bo = window.Vue.createElementVNode, yu = window.Vue.withDirectives, E1 = window.Vue.toDisplayString, D1 = window.Vue.unref, Cu = window.Vue.withCtx, A1 = window.Vue.openBlock, L1 = window.Vue.createBlock, T1 = window.Vue.createCommentVNode, B1 = { class: "pa-4 sx-login-dialog__header" }, P1 = { class: "sx-login-dialog__body px-6 pb-4" }, F1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, M1 = ["href"], N1 = window.Vue.computed, U1 = window.Vue.ref, I1 = window.Vuex.useStore, R1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = I1(), n = N1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = U1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = V1("i18n");
      return n.value ? (A1(), L1(D1(st), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Cu(() => [
          Bo("div", B1, [
            yu(Bo("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Cu(() => [
          yu(Bo("div", P1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          Bo("div", F1, [
            Bo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, E1(a.$i18n("cx-sx-login-dialog-button-label")), 9, M1)
          ])
        ]),
        _: 1
      })) : T1("", !0);
    };
  }
}, G = new mw.cx.SiteMapper(), z1 = mw.util.getUrl, O1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class di {
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
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = d;
  }
}
const ra = "original", la = "empty", H1 = {
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
class kn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Be(ie({}, a), {
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
const ku = (e) => {
  var n;
  const t = ii(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ii = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Yn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), dm = (e) => {
  const t = ii(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = j1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, j1 = (e) => {
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
}, gm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, pm = (e) => {
  const t = gm(e);
  return t == null ? void 0 : t.targetExists;
};
class Ui {
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
      (a) => Yn(a)
    );
    s && pm(s) && (this.blockTemplateAdaptationInfo[t] = gm(s));
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
      (t) => Yn(t)
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
    const t = ii(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ku(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Yn(o));
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
    return n && ku(n) || "";
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
    const o = ii(n);
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
      (a) => Yn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Ui({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Ui({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Ui({
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
        (s) => Yn(s)
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
const q1 = [
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
], G1 = (e, t, n) => {
  let o, s, a, r, l;
  return !e || !t ? 0 : e === t ? 1 : (s = r = bu(e, n), a = l = bu(t, n), l.length > r.length && (s = l, a = r), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, bu = function(e, t) {
  return e ? q1.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, mm = 95, X1 = 85, W1 = [
  { status: "failure", value: 100 - mm },
  { status: "warning", value: 100 - X1 },
  { status: "success", value: 100 }
], hm = (e, t, n) => {
  const o = xu(e).textContent, s = xu(t).textContent, a = 100 - 100 * G1(s, o, n);
  return Math.ceil(a);
}, K1 = (e) => W1.find((t) => e <= t.value).status, Y1 = (e, t) => hm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), J1 = () => (100 - mm) / 100, xu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Dt = {
  calculateScore: hm,
  getScoreStatus: K1,
  getMTScoreForPageSection: Y1,
  getMtModificationThreshold: J1
}, ca = "__LEAD_SECTION__";
class Rl {
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
    return ca;
  }
  static isSectionLead(t) {
    return !t || t === ca;
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
    return n instanceof Ue ? n.transclusionNode.outerHTML : n instanceof kn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ue ? t.blockTemplateSelected = !1 : t instanceof kn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ue ? n.blockTemplateSelected = !0 : n instanceof kn && (n.selected = !0);
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
    if (o instanceof kn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ue ? n.blockTemplateProposedTranslations[t] || "" : n instanceof kn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ue ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof kn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Dt.getMTScoreForPageSection(this, t) / 100;
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
class oc extends di {
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
    return Rl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Rl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const _t = "previous-edits", At = "popular", ze = "topic", pe = "collections", wt = "automatic", nt = "seed", $u = window.Vue.ref, Q1 = mw.loader.require("ext.cx.articletopics"), ua = {
  type: wt,
  id: _t
}, fm = () => {
  const e = $u(
    Q1.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = $u(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const r = s == null ? void 0 : s.toLowerCase(), l = a == null ? void 0 : a.toLowerCase();
    return r === ze ? e.value.some((u) => u === a) ? { type: r, id: l } : (t.value = !0, ua) : r === pe || r === nt ? { type: r, id: a } : l === _t ? {
      type: wt,
      id: _t
    } : l === At ? {
      type: wt,
      id: At
    } : l === pe ? {
      type: wt,
      id: pe
    } : ua;
  }, isDefaultFilter: ({ type: s, id: a }) => s === ua.type && a === ua.id };
}, Z1 = window.Vue.inject, e_ = window.Vue.reactive;
var t_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, wm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(t_, function() {
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
          for (const _ in p)
            h[p[_]] = _;
          p = h;
          const f = String(c);
          for (let _ = 0; _ < f.length; _++)
            m += p[f[_]] || f[_];
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
            function _(V) {
              return () => {
                for (let I = 0; I < V.length; I++) {
                  const De = V[I]();
                  if (De !== null)
                    return De;
                }
                return null;
              };
            }
            function w(V) {
              const I = f, De = [];
              for (let Ft = 0; Ft < V.length; Ft++) {
                const Mt = V[Ft]();
                if (Mt === null)
                  return f = I, null;
                De.push(Mt);
              }
              return De;
            }
            function v(V, I) {
              return () => {
                const De = f, Ft = [];
                let Mt = I();
                for (; Mt !== null; )
                  Ft.push(Mt), Mt = I();
                return Ft.length < V ? (f = De, null) : Ft;
              };
            }
            function y(V) {
              const I = V.length;
              return () => {
                let De = null;
                return m.slice(f, f + I) === V && (De = V, f += I), De;
              };
            }
            function C(V) {
              return () => {
                const I = m.slice(f).match(V);
                return I === null ? null : (f += I[0].length, I[0]);
              };
            }
            const x = C(/^\s+/), F = y("|"), E = y(":"), P = y("\\"), N = C(/^./), T = y("$"), U = C(/^\d+/), j = y('"'), q = y("'"), Ge = C(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Te = C(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Lt = _([vt, C(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function vt() {
              const V = w([P, N]);
              return V === null ? null : V[1];
            }
            const Lo = _([vt, Te]), Dn = _([vt, Ge]);
            function Tt() {
              const V = w([T, U]);
              return V === null ? null : ["REPLACE", parseInt(V[1], 10) - 1];
            }
            const Xe = (an = C(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Bt = function(V) {
              return V.toString();
            }, () => {
              const V = an();
              return V === null ? null : Bt(V);
            });
            var an, Bt;
            function Pt() {
              const V = w([F, v(0, Js)]);
              if (V === null)
                return null;
              const I = V[1];
              return I.length > 1 ? ["CONCAT"].concat(I) : I[0];
            }
            function We() {
              const V = w([Xe, E, Tt]);
              return V === null ? null : [V[0], V[2]];
            }
            function S() {
              const V = w([Xe, E, Js]);
              return V === null ? null : [V[0], V[2]];
            }
            function D() {
              const V = w([Xe, E]);
              return V === null ? null : [V[0], ""];
            }
            const A = _([function() {
              const V = w([_([We, S, D]), v(0, Pt)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = w([Xe, v(0, Pt)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), L = y("{{"), X = y("}}"), ae = y("[["), O = y("]]"), R = y("["), Z = y("]");
            function at() {
              const V = w([L, A, X]);
              return V === null ? null : V[1];
            }
            const we = _([function() {
              const V = w([v(1, Js), F, v(1, Ys)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = w([v(1, Js)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function Ic() {
              let V = null;
              const I = w([ae, we, O]);
              if (I !== null) {
                const De = I[1];
                V = ["WIKILINK"].concat(De);
              }
              return V;
            }
            function Rc() {
              let V = null;
              const I = w([R, v(1, Wh), x, v(1, Ys), Z]);
              return I !== null && (V = ["EXTLINK", I[1].length === 1 ? I[1][0] : ["CONCAT"].concat(I[1]), ["CONCAT"].concat(I[3])]), V;
            }
            const vi = C(/^[A-Za-z]+/);
            function jh() {
              const V = C(/^[^"]*/), I = w([j, V, j]);
              return I === null ? null : I[1];
            }
            function qh() {
              const V = C(/^[^']*/), I = w([q, V, q]);
              return I === null ? null : I[1];
            }
            function Gh() {
              const V = C(/^\s*=\s*/), I = w([x, vi, V, _([jh, qh])]);
              return I === null ? null : [I[1], I[3]];
            }
            function Xh() {
              const V = v(0, Gh)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const Wh = _([at, Tt, Ic, Rc, function() {
              const V = v(1, Lt)();
              return V === null ? null : V.join("");
            }]), Ys = _([at, Tt, Ic, Rc, function() {
              let V = null;
              const I = f, De = y("<"), Ft = C(/^\/?/), Mt = C(/^\s*>/), Si = w([De, vi, Xh, Ft, Mt]);
              if (Si === null)
                return null;
              const Oc = f, Hc = Si[1], yi = v(0, Ys)(), Kh = f, jc = w([y("</"), vi, Mt]);
              if (jc === null)
                return ["CONCAT", m.slice(I, Oc)].concat(yi);
              const Yh = f, Jh = jc[1], qc = Si[2];
              if (function(An, Qs, Ci, ki = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((An = An.toLowerCase()) !== (Qs = Qs.toLowerCase()) || ki.allowedHtmlElements.indexOf(An) === -1)
                  return !1;
                const Qh = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Zs = 0, Zh = Ci.length; Zs < Zh; Zs += 2) {
                  const bi = Ci[Zs];
                  if (ki.allowedHtmlCommonAttributes.indexOf(bi) === -1 && (ki.allowedHtmlAttributesByElement[An] || []).indexOf(bi) === -1 || bi === "style" && Ci[Zs + 1].search(Qh) !== -1)
                    return !1;
                }
                return !0;
              }(Hc, Jh, qc.slice(1)))
                V = ["HTMLELEMENT", Hc, qc].concat(yi);
              else {
                const An = (Qs) => Qs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", An(m.slice(I, Oc))].concat(yi, An(m.slice(Kh, Yh)));
              }
              return V;
            }, function() {
              const V = v(1, Dn)();
              return V === null ? null : V.join("");
            }]), Js = _([at, Tt, function() {
              const V = v(1, Lo)();
              return V === null ? null : V.join("");
            }]), zc = function() {
              const V = v(0, Ys)();
              return V === null ? null : ["CONCAT"].concat(V);
            }();
            if (zc === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return zc;
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
            const f = m.slice(0, h).join("-"), _ = this.messageStore.getMessage(i, f);
            if (typeof _ == "string")
              return _;
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
})(wm);
var n_ = wm.exports;
const Vu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, _m = Symbol("banana-context");
function ue() {
  const e = Z1(_m);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function o_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = e_(new n_(e.locale, e));
  return {
    install: (n) => {
      n.provide(_m, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Vu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Vu(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Vn = window.Vue.ref, s_ = window.Vue.computed, gi = Vn(null), pi = Vn(null), sc = Vn(null), Us = Vn(null), ac = Vn(null), vm = Vn(null), Sm = Vn(null), ic = Vn(null), { validateFilters: a_, filtersValidatorError: i_ } = fm(), Es = {
  from: gi,
  to: pi,
  section: Us,
  draft: ac,
  page: sc,
  "active-list": ic
}, r_ = s_(() => ({
  type: vm.value,
  id: Sm.value
})), ym = (e, t) => {
  vm.value = e, Sm.value = t, ri("filter-type", e), t && ri("filter-id", t);
}, l_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Es[o].value = s;
  }
  e instanceof oc && (t.set("draft", !0), ac.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), Us.value = e.sourceSectionTitle)), t.delete("title"), Is(Object.fromEntries(t));
}, rc = (e, t) => {
  Es[e].value = t, ri(e, t);
}, c_ = (e) => {
  rc("section", e);
}, u_ = (e) => {
  rc("page", e);
}, d_ = (e) => {
  rc("active-list", e);
}, Is = (e) => {
  history.replaceState(
    {},
    document.title,
    z1("Special:ContentTranslation", e)
  );
}, g_ = () => {
  const e = ue(), t = new URLSearchParams(location.search);
  sc.value = t.get("page"), gi.value = t.get("from"), pi.value = t.get("to"), Us.value = t.get("section"), ic.value = t.get("active-list");
  const n = a_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  ym(n.type, n.id), i_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, p_ = () => {
  const e = new URLSearchParams(location.search);
  Us.value = null, e.delete("section"), e.delete("title"), Is(Object.fromEntries(e));
}, ri = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), Is(Object.fromEntries(n));
}, m_ = (e) => new URLSearchParams(location.search).get(e), h_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), gi.value = e, pi.value = t, n.delete("title"), Is(Object.fromEntries(n));
}, f_ = (e = ["active-list"]) => {
  for (const n in Es)
    e.includes(n) || (Es[n].value = null);
  const t = e.reduce(
    (n, o) => Be(ie({}, n), {
      [o]: Es[o].value
    }),
    {}
  );
  Is(t);
}, M = () => ({
  setLanguageURLParams: h_,
  setSectionURLParam: c_,
  setTranslationURLParams: l_,
  initializeURLState: g_,
  clearURLParameters: f_,
  clearSectionURLParameter: p_,
  setUrlParam: ri,
  getUrlParam: m_,
  pageURLParameter: sc,
  sourceLanguageURLParameter: gi,
  targetLanguageURLParameter: pi,
  sectionURLParameter: Us,
  draftURLParameter: ac,
  setPageURLParam: u_,
  currentSuggestionFilters: r_,
  setFilterURLParams: ym,
  activeDashboardTabParameter: ic,
  setActiveDashboardTabParameter: d_
});
const w_ = window.Vue.resolveDynamicComponent, Eu = window.Vue.openBlock, Du = window.Vue.createBlock, __ = window.Vue.Transition, Po = window.Vue.withCtx, Fo = window.Vue.createVNode, v_ = window.Vue.resolveComponent, Ii = window.Vue.unref, S_ = window.Vuex.useStore, y_ = window.Vue.computed, C_ = window.Vue.onMounted, k_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = M();
    t();
    const n = S_(), o = y_(
      () => n.state.application.autoSavePending
    );
    return C_(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && um.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof bo && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const r = v_("router-view");
      return Eu(), Du(Ii(sw), { id: "contenttranslation" }, {
        default: Po(() => [
          Fo(Ii(B), { class: "cx-container" }, {
            default: Po(() => [
              Fo(Ii(k), { cols: "12" }, {
                default: Po(() => [
                  Fo(r, null, {
                    default: Po(({ Component: l, route: u }) => [
                      Fo(__, {
                        name: u.meta.transitionName
                      }, {
                        default: Po(() => [
                          (Eu(), Du(w_(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Fo(R1)
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
}, b_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, x_ = {
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
class Cm {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class vo {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Cm(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Au = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Be(ie({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class $_ {
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
    const t = Au((s = this.user) == null ? void 0 : s.content), n = Au((a = this.mt) == null ? void 0 : a.content);
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
class lc extends di {
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
const mi = mw.user.isAnon() ? void 0 : "user", km = (e) => {
  if (e === "assertuserfailed")
    throw new bo();
};
function bm(e, t = null) {
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
        (u) => new oc(Be(ie({}, u), { status: e }))
      ) : r = a.map(
        (u) => new lc(Be(ie({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield bm(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function V_(e) {
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
      (a) => new $_(a)
    );
  });
}
function E_(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== J.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = G.getCXServerUrl(a);
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
const D_ = (e, t, n) => {
  const o = G.getApi(t);
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
}, A_ = ({
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
  sectionTranslationId: c
}) => {
  const g = {
    assert: mi,
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
  return u && (g.captchaid = u, g.captchaword = d), new mw.Api().postWithToken("csrf", g).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new vo({
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
    km(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new vo({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, L_ = ({
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
    assert: mi,
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
    km(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new vo({ text: h, status: "error" });
  });
}, T_ = (e) => {
  const t = {
    assert: mi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, B_ = () => {
  const e = {
    assert: mi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new lc(n.cxcheckunreviewed.translation)
  );
}, P_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, F_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, M_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), ot = {
  fetchTranslations: bm,
  fetchTranslationUnits: V_,
  fetchSegmentTranslation: E_,
  parseTemplateWikitext: D_,
  publishTranslation: A_,
  saveTranslation: L_,
  deleteTranslation: P_,
  fetchTranslatorStats: M_,
  deleteCXTranslation: F_,
  splitTranslation: T_,
  checkUnreviewedTranslations: B_
};
function N_(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield ot.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const U_ = {
  fetchTranslatorStats: N_
}, I_ = {
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
}, R_ = {
  namespaced: !0,
  state: b_,
  getters: x_,
  actions: U_,
  mutations: I_
}, xm = [
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
], z_ = [
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
], O_ = [
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
], H_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], j_ = [
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
], q_ = {
  en: xm,
  es: z_,
  bn: O_,
  fr: H_,
  de: j_
}, G_ = {
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
  appendixSectionTitles: q_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, X_ = {
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
class xo {
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
class xn {
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
    targetSections: u = [],
    isListable: d = !0,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = l, this.targetSections = u, this.isListable = d, this.suggestionProvider = i;
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
class So {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class cc {
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
class $m extends xo {
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
    }), this.collection = new cc(u);
  }
}
class Vm extends xn {
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
    }), this.collection = new cc(c);
  }
}
const W_ = xm, nn = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function K_() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield nn({ urlPostfix: t, urlParams: e })) || []).map((o) => new cc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function Y_(e, t, n, o = 24) {
  return b(this, null, function* () {
    return ((yield nn({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (r) => new xo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
const J_ = (e, t) => b(void 0, null, function* () {
  return ((yield nn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new xo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), Q_ = (e, t) => b(void 0, null, function* () {
  const s = (yield nn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new xn({
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
}), Z_ = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield nn({ urlParams: o })) || []).map(
    (a) => new $m({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), ev = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield nn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new Vm({
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
function tv(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = G.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new xn(a) : null;
  });
}
function nv(e, t, n) {
  return b(this, null, function* () {
    const a = (yield nn({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (r) => new xn({
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
function ov(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield nn({ urlParams: s })) || []).map(
      (r) => new xo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function sv(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield nn({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new xn({
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
function av(e) {
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
    }, n = G.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function iv(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = G.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function rv(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = G.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function lv(e) {
  const t = W_.map((o) => encodeURIComponent(o)).join("|"), n = G.getCXServerUrl(
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
const cv = (e, t, n) => {
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
}, uv = (e) => {
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
}, dv = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new So(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, se = {
  fetchFavorites: dv,
  fetchPageSuggestions: Y_,
  fetchSectionSuggestion: tv,
  fetchSectionSuggestions: nv,
  fetchSuggestionSeeds: iv,
  fetchAppendixTargetSectionTitles: lv,
  fetchSuggestionSourceSections: rv,
  markFavorite: cv,
  unmarkFavorite: uv,
  fetchUserEdits: av,
  fetchMostPopularPageSuggestions: J_,
  fetchMostPopularSectionSuggestions: Q_,
  fetchPageSuggestionsByTopics: ov,
  fetchSectionSuggestionsByTopics: sv,
  fetchPageCollections: K_,
  fetchPageSuggestionsByCollections: Z_,
  fetchSectionSuggestionsByCollections: ev
};
function gv(o, s) {
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
const pv = {
  fetchAppendixSectionTitles: gv
}, mv = {
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
}, hv = {
  namespaced: !0,
  state: G_,
  getters: X_,
  actions: pv,
  mutations: mv
}, fv = {
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
}, wv = {
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
      (u) => t.getPage(s, u.sourceTitle)
    ).filter((u) => !!u);
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
class $o {
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
    pageviews: u,
    thumbnail: d,
    title: i,
    revisions: c,
    _alias: g,
    content: p = null,
    sections: m = []
  } = {}) {
    var h;
    this.language = r, this.title = i, this.pageId = a, this.description = t, this.image = s, this.pageprops = l, this.pageviews = u, this.thumbnail = d, this.langLinksCount = n, this.articleSize = (h = c == null ? void 0 : c[0]) == null ? void 0 : h.size, this.revision = o, this.alias = g, this.wikidataId = l == null ? void 0 : l.wikibase_item, this.content = p, this.sections = m;
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
class _v {
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
function vv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const Sv = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), vv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, yv = (e, t) => {
  let n, o;
  return t ? (n = Sv(e), o = n.$element.find(
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
}, Cv = (e, t) => {
  const n = Array.from(
    yv(e, t)
  );
  return kv(n).map(
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
        (c) => new Ue({
          sentences: bv(c),
          node: c
        })
      ), i = !l;
      return new Rl({ id: u, title: l, subSections: d, isLeadSection: i });
    }
  );
}, kv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, bv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new kn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Em = {
  convertSegmentedContentToPageSections: Cv
}, uc = 120, xv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: uc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return G.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => Be(ie({}, i), { [c.to]: c.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, c) => Be(ie({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new $o(Be(ie({}, i), { _alias: c }));
    });
  });
}, $v = (e, t) => {
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
  return G.getApi(e).get(n).then((s) => {
    var u, d;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new _v(l, r)) : null;
  });
}, Vv = (e, t, n) => {
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
  return G.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((l) => {
    var u, d;
    return (d = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((l) => !!l));
}, Ev = (e, t, n, o = null) => Dm(
  e,
  t,
  n,
  o
).then(
  (s) => new $o({
    sections: Em.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Dm = (e, t, n, o = null) => {
  const s = G.getWikiDomainCode(e), a = G.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const u = G.getCXServerUrl(
    l,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, Dv = (e) => b(void 0, null, function* () {
  const t = O1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: uc,
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
  return yield G.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new $o(s))).catch((o) => []);
}), Av = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: uc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return G.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new $o(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, Vo = {
  fetchPages: xv,
  fetchLanguageTitles: $v,
  fetchPageContent: Ev,
  fetchSegmentedContent: Dm,
  fetchNearbyPages: Dv,
  searchPagesByTitlePrefix: Av,
  fetchLanguageLinksForLanguage: Vv
};
function Lv() {
  return G.getLanguagePairs().then((e) => e.sourceLanguages);
}
function Tv(e, t) {
  return b(this, null, function* () {
    const n = G.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new J(e, t, o.mt)
      )
    );
  });
}
function Bv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Pv(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = G.getWikiDomainCode(e), r = G.getWikiDomainCode(t), l = {
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
const hi = {
  fetchSupportedLanguageCodes: Lv,
  fetchSupportedMTProviders: Tv,
  fetchCXServerToken: Bv,
  addWikibaseLink: Pv
};
function Fv({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const l = o.slice(r, r + s), u = Vo.fetchPages(n, l).then(
      (d) => d.forEach((i) => t("addPage", i))
    );
    a.push(u);
  }
  return Promise.all(a);
}
function Mv(n) {
  return b(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield hi.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function Nv(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield Vo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const Uv = {
  fetchNearbyPages: Nv,
  fetchPageMetadata: Fv,
  fetchSupportedLanguageCodes: Mv
}, Iv = {
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
}, Rv = {
  namespaced: !0,
  state: fv,
  getters: wv,
  actions: Uv,
  mutations: Iv
}, zv = {
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
}, Ov = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, Hv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Yn(a)
  );
  return s && pm(s) ? ot.parseTemplateWikitext(
    dm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Am = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Yn(a)
  );
  return s ? ot.parseTemplateWikitext(
    dm(s),
    n,
    t
  ) : Promise.resolve(null);
}, jv = (o) => b(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, r;
  t.cxServerToken || (yield hi.fetchCXServerToken().then(
    (l) => {
      l.age <= 30 && (l.age = 3600);
      const u = Math.floor(Date.now() / 1e3);
      l.refreshAt = u + l.age - 30, n("setCXServerToken", l);
    },
    (l) => {
      if (l === "token-impossible") {
        const u = Math.floor(Date.now() / 1e3);
        n("setCXServerToken", { jwt: "", refreshAt: u + 3600 * 10 });
      }
    }
  ));
  const s = Math.floor(Date.now() / 1e3);
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (r = t.cxServerToken) == null ? void 0 : r.jwt;
}), qv = { getCXServerToken: jv }, Gv = {
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
}, Xv = {
  namespaced: !0,
  state: zv,
  getters: Ov,
  actions: qv,
  mutations: Gv
}, Wv = window.Vuex.createStore, Kv = Wv({
  modules: { translator: R_, suggestions: hv, mediawiki: Rv, application: Xv }
});
function Yv() {
  return Lm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Lm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Jv = typeof Proxy == "function", Qv = "devtools-plugin:setup", Zv = "plugin:settings:set";
let Jn, zl;
function eS() {
  var e;
  return Jn !== void 0 || (typeof window != "undefined" && window.performance ? (Jn = !0, zl = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Jn = !0, zl = global.perf_hooks.performance) : Jn = !1), Jn;
}
function tS() {
  return eS() ? zl.now() : Date.now();
}
class nS {
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
        return tS();
      }
    }, n && n.on(Zv, (r, l) => {
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
function oS(e, t) {
  const n = e, o = Lm(), s = Yv(), a = Jv && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Qv, e, t);
  else {
    const r = a ? new nS(n, s) : null;
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
const Tm = window.Vue.getCurrentInstance, yo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Et = window.Vue.computed, Ds = window.Vue.unref, sS = window.Vue.watchEffect, Bm = window.Vue.defineComponent, aS = window.Vue.reactive, Pm = window.Vue.h, Ri = window.Vue.provide, iS = window.Vue.ref, Fm = window.Vue.watch, rS = window.Vue.shallowRef, lS = window.Vue.shallowReactive, cS = window.Vue.nextTick, tn = typeof window != "undefined";
function uS(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const K = Object.assign;
function zi(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Oe(s) ? s.map(e) : e(s);
  }
  return n;
}
const As = () => {
}, Oe = Array.isArray;
function H(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const dS = /\/$/, gS = (e) => e.replace(dS, "");
function Oi(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = hS(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function pS(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Lu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Tu(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && $n(t.matched[o], n.matched[s]) && Mm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function $n(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Mm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!mS(e[n], t[n]))
      return !1;
  return !0;
}
function mS(e, t) {
  return Oe(e) ? Bu(e, t) : Oe(t) ? Bu(t, e) : e === t;
}
function Bu(e, t) {
  return Oe(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function hS(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return H(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Ts;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ts || (Ts = {}));
var Ls;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Ls || (Ls = {}));
function fS(e) {
  if (!e)
    if (tn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), gS(e);
}
const wS = /^[^#]+#/;
function _S(e, t) {
  return e.replace(wS, "#") + t;
}
function vS(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const fi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function SS(e) {
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
    t = vS(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Pu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ol = /* @__PURE__ */ new Map();
function yS(e, t) {
  Ol.set(e, t);
}
function CS(e) {
  const t = Ol.get(e);
  return Ol.delete(e), t;
}
let kS = () => location.protocol + "//" + location.host;
function Nm(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), Lu(u, "");
  }
  return Lu(n, e) + o + s;
}
function bS(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = Nm(e, location), m = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = p, t.value = g, r && r === m) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      o(p);
    s.forEach((_) => {
      _(n.value, m, {
        delta: f,
        type: Ts.pop,
        direction: f ? f > 0 ? Ls.forward : Ls.back : Ls.unknown
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
    g.state && g.replaceState(K({}, g.state, { scroll: fi() }), "");
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
function Fu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? fi() : null
  };
}
function xS(e) {
  const { history: t, location: n } = window, o = {
    value: Nm(e, n)
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
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : kS() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? H("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = K({}, t.state, Fu(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function l(u, d) {
    const i = K(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: fi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && H(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = K({}, Fu(o.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function $S(e) {
  e = fS(e);
  const t = xS(e), n = bS(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = K({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: _S.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function VS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && H(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), $S(e);
}
function ES(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Um(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const cn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Hl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Mu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Mu || (Mu = {}));
const DS = {
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
    return `Redirected from "${e.fullPath}" to "${LS(t)}" via a navigation guard.`;
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
function Co(e, t) {
  return {}.NODE_ENV !== "production" ? K(new Error(DS[e](t)), {
    type: e,
    [Hl]: !0
  }, t) : K(new Error(), {
    type: e,
    [Hl]: !0
  }, t);
}
function Nt(e, t) {
  return e instanceof Error && Hl in e && (t == null || !!(e.type & t));
}
const AS = ["params", "query", "hash"];
function LS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of AS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Nu = "[^/]+?", TS = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, BS = /[.+*?^${}()[\]/\\]/g;
function PS(e, t) {
  const n = K({}, TS, t), o = [];
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
        c || (s += "/"), s += g.value.replace(BS, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || Nu;
        if (w !== Nu) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + y.message);
          }
        }
        let v = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        c || (v = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${v})` : "/" + v), f && (v += "?"), s += v, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
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
          const { value: m, repeatable: h, optional: f } = p, _ = m in d ? d[m] : "";
          if (Oe(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = Oe(_) ? _.join("/") : _;
          if (!w)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
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
    parse: l,
    stringify: u
  };
}
function FS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function MS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = FS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Uu(o))
      return 1;
    if (Uu(s))
      return -1;
  }
  return s.length - o.length;
}
function Uu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const NS = {
  type: 0,
  value: ""
}, US = /[a-zA-Z0-9_]/;
function IS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[NS]];
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
        u === "(" ? n = 2 : US.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function RS(e, t, n) {
  const o = PS(IS(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && H(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
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
function zS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = zu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = OS(i);
    ({}).NODE_ENV !== "production" && GS(m, c), m.aliasOf = g && g.record;
    const h = zu(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const v = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of v)
        f.push(K({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: y,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, w;
    for (const v of f) {
      const { path: y } = v;
      if (c && y[0] !== "/") {
        const C = c.record.path, x = C[C.length - 1] === "/" ? "" : "/";
        v.path = c.record.path + (y && x + y);
      }
      if ({}.NODE_ENV !== "production" && v.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = RS(v, c, h), {}.NODE_ENV !== "production" && c && y[0] === "/" && XS(_, c), g ? (g.alias.push(_), {}.NODE_ENV !== "production" && qS(g, _)) : (w = w || _, w !== _ && w.alias.push(_), p && i.name && !Ru(_) && r(i.name)), m.children) {
        const C = m.children;
        for (let x = 0; x < C.length; x++)
          a(C[x], _, g && g.children[x]);
      }
      g = g || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      r(w);
    } : As;
  }
  function r(i) {
    if (Um(i)) {
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
    for (; c < n.length && MS(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !Im(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Ru(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw Co(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((v) => !g.keys.find((y) => y.name === v));
        w.length && H(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = K(
        // paramsFromLocation is a new object
        Iu(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Iu(i.params, g.keys.map((w) => w.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && H(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((w) => w.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((w) => w.re.test(c.path)), !g)
        throw Co(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, p = K({}, c.params, i.params), m = g.stringify(p);
    }
    const f = [];
    let _ = g;
    for (; _; )
      f.unshift(_.record), _ = _.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: jS(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Iu(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function OS(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: HS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function HS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Ru(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function jS(e) {
  return e.reduce((t, n) => K(t, n.meta), {});
}
function zu(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function jl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function qS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(jl.bind(null, n)))
      return H(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(jl.bind(null, n)))
      return H(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function GS(e, t) {
  t && t.record.name && !e.name && !e.path && H(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function XS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(jl.bind(null, n)))
      return H(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Im(e, t) {
  return t.children.some((n) => n === e || Im(e, n));
}
const Rm = /#/g, WS = /&/g, KS = /\//g, YS = /=/g, JS = /\?/g, zm = /\+/g, QS = /%5B/g, ZS = /%5D/g, Om = /%5E/g, ey = /%60/g, Hm = /%7B/g, ty = /%7C/g, jm = /%7D/g, ny = /%20/g;
function dc(e) {
  return encodeURI("" + e).replace(ty, "|").replace(QS, "[").replace(ZS, "]");
}
function oy(e) {
  return dc(e).replace(Hm, "{").replace(jm, "}").replace(Om, "^");
}
function ql(e) {
  return dc(e).replace(zm, "%2B").replace(ny, "+").replace(Rm, "%23").replace(WS, "%26").replace(ey, "`").replace(Hm, "{").replace(jm, "}").replace(Om, "^");
}
function sy(e) {
  return ql(e).replace(YS, "%3D");
}
function ay(e) {
  return dc(e).replace(Rm, "%23").replace(JS, "%3F");
}
function iy(e) {
  return e == null ? "" : ay(e).replace(KS, "%2F");
}
function Bs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && H(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function ry(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(zm, " "), r = a.indexOf("="), l = Bs(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : Bs(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      Oe(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Ou(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = sy(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Oe(o) ? o.map((a) => a && ql(a)) : [o && ql(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function ly(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Oe(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const cy = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Hu = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), wi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), qm = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Gl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Mo() {
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
function bn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(Co(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : ES(c) ? l(Co(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? uy(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (H(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        H(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function uy(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && H(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Hi(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && H(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw H(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          H(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, H(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (dy(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(bn(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (H(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = uS(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && bn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function dy(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ju(e) {
  const t = yo(wi), n = yo(qm), o = Et(() => t.resolve(Ds(e.to))), s = Et(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex($n.bind(null, i));
    if (g > -1)
      return g;
    const p = qu(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      qu(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex($n.bind(null, u[d - 2])) : g
    );
  }), a = Et(() => s.value > -1 && hy(n.params, o.value.params)), r = Et(() => s.value > -1 && s.value === n.matched.length - 1 && Mm(n.params, o.value.params));
  function l(u = {}) {
    return my(u) ? t[Ds(e.replace) ? "replace" : "push"](
      Ds(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(As) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && tn) {
    const u = Tm();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), sS(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Et(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const gy = /* @__PURE__ */ Bm({
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
    const n = aS(ju(e)), { options: o } = yo(wi), s = Et(() => ({
      [Gu(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Gu(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Pm("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), py = gy;
function my(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function hy(e, t) {
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
function qu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Gu = (e, t, n) => e != null ? e : t != null ? t : n, fy = /* @__PURE__ */ Bm({
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
    ({}).NODE_ENV !== "production" && _y();
    const o = yo(Gl), s = Et(() => e.route || o.value), a = yo(Hu, 0), r = Et(() => {
      let d = Ds(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Et(() => s.value.matched[r.value]);
    Ri(Hu, Et(() => r.value + 1)), Ri(cy, l), Ri(Gl, s);
    const u = iS();
    return Fm(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !$n(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Xu(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = Pm(g, K({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && tn && f.ref) {
        const _ = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Oe(f.ref) ? f.ref.map((v) => v.i) : [f.ref.i]).forEach((v) => {
          v.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Xu(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Xu(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const wy = fy;
function _y() {
  const e = Tm(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function No(e, t) {
  const n = K({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Vy(o, ["instances", "children", "aliasOf"]))
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
let vy = 0;
function Sy(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = vy++;
  oS({
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
        value: No(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Gm
        });
      }
      Oe(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
        let p = Km, m = "";
        g.isExactActive ? (p = Wm, m = "This is exactly active") : g.isActive && (p = Xm, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), Fm(t.currentRoute, () => {
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
        guard: da("beforeEach"),
        from: No(c, "Current Location during this navigation"),
        to: No(i, "Target location")
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
        guard: da("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = da("❌")) : p.status = da("✅"), p.from = No(c, "Current Location during this navigation"), p.to = No(i, "Target location"), s.addTimelineEvent({
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
      c.forEach(Qm), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Xl(g, i.filter.toLowerCase())
      ))), c.forEach((g) => Jm(g, t.currentRoute.value)), i.rootNodes = c.map(Ym);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: Cy(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function yy(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Cy(e) {
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
        display: e.keys.map((o) => `${o.name}${yy(o)}`).join(" "),
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
const Gm = 15485081, Xm = 2450411, Wm = 8702998, ky = 2282478, Km = 16486972, by = 6710886;
function Ym(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: ky
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Km
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Gm
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Wm
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Xm
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: by
  });
  let o = n.__vd_id;
  return o == null && (o = String(xy++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Ym)
  };
}
let xy = 0;
const $y = /^\/(.*)\/([a-z]*)$/;
function Jm(e, t) {
  const n = t.matched.length && $n(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => $n(o, e.record))), e.children.forEach((o) => Jm(o, t));
}
function Qm(e) {
  e.__vd_match = !1, e.children.forEach(Qm);
}
function Xl(e, t) {
  const n = String(e.re).match($y);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Xl(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Bs(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Xl(r, t));
}
function Vy(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Ey(e) {
  const t = zS(e.routes, e), n = e.parseQuery || ry, o = e.stringifyQuery || Ou, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Mo(), r = Mo(), l = Mo(), u = rS(cn);
  let d = cn;
  tn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = zi.bind(null, (S) => "" + S), c = zi.bind(null, iy), g = (
    // @ts-expect-error: intentionally avoid the type check
    zi.bind(null, Bs)
  );
  function p(S, D) {
    let A, L;
    return Um(S) ? (A = t.getRecordMatcher(S), L = D) : L = S, t.addRoute(L, A);
  }
  function m(S) {
    const D = t.getRecordMatcher(S);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && H(`Cannot remove non-existent route "${String(S)}"`);
  }
  function h() {
    return t.getRoutes().map((S) => S.record);
  }
  function f(S) {
    return !!t.getRecordMatcher(S);
  }
  function _(S, D) {
    if (D = K({}, D || u.value), typeof S == "string") {
      const R = Oi(n, S, D.path), Z = t.resolve({ path: R.path }, D), at = s.createHref(R.fullPath);
      return {}.NODE_ENV !== "production" && (at.startsWith("//") ? H(`Location "${S}" resolved to "${at}". A resolved location cannot start with multiple slashes.`) : Z.matched.length || H(`No match found for location with path "${S}"`)), K(R, Z, {
        params: g(Z.params),
        hash: Bs(R.hash),
        redirectedFrom: void 0,
        href: at
      });
    }
    let A;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && H(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = K({}, S, {
        path: Oi(n, S.path, D.path).path
      });
    else {
      const R = K({}, S.params);
      for (const Z in R)
        R[Z] == null && delete R[Z];
      A = K({}, S, {
        params: c(R)
      }), D.params = c(D.params);
    }
    const L = t.resolve(A, D), X = S.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && H(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), L.params = i(g(L.params));
    const ae = pS(o, K({}, S, {
      hash: oy(X),
      path: L.path
    })), O = s.createHref(ae);
    return {}.NODE_ENV !== "production" && (O.startsWith("//") ? H(`Location "${S}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : L.matched.length || H(`No match found for location with path "${"path" in S ? S.path : S}"`)), K({
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
        o === Ou ? ly(S.query) : S.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function w(S) {
    return typeof S == "string" ? Oi(n, S, u.value.path) : K({}, S);
  }
  function v(S, D) {
    if (d !== S)
      return Co(8, {
        from: D,
        to: S
      });
  }
  function y(S) {
    return F(S);
  }
  function C(S) {
    return y(K(w(S), { replace: !0 }));
  }
  function x(S) {
    const D = S.matched[S.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: A } = D;
      let L = typeof A == "function" ? A(S) : A;
      if (typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = w(L) : (
        // force empty params
        { path: L }
      ), L.params = {}), {}.NODE_ENV !== "production" && !("path" in L) && !("name" in L))
        throw H(`Invalid redirect found:
${JSON.stringify(L, null, 2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return K({
        query: S.query,
        hash: S.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in L ? {} : S.params
      }, L);
    }
  }
  function F(S, D) {
    const A = d = _(S), L = u.value, X = S.state, ae = S.force, O = S.replace === !0, R = x(A);
    if (R)
      return F(
        K(w(R), {
          state: typeof R == "object" ? K({}, X, R.state) : X,
          force: ae,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        D || A
      );
    const Z = A;
    Z.redirectedFrom = D;
    let at;
    return !ae && Tu(o, L, A) && (at = Co(16, { to: Z, from: L }), Tt(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (at ? Promise.resolve(at) : N(Z, L)).catch((we) => Nt(we) ? (
      // navigation redirects still mark the router as ready
      Nt(
        we,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? we : Dn(we)
    ) : (
      // reject any unknown error
      vt(we, Z, L)
    )).then((we) => {
      if (we) {
        if (Nt(
          we,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Tu(o, _(we.to), Z) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (H(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${Z.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : F(
            // keep options
            K({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, w(we.to), {
              state: typeof we.to == "object" ? K({}, X, we.to.state) : X,
              force: ae
            }),
            // preserve the original redirectedFrom if any
            D || Z
          );
      } else
        we = U(Z, L, !0, O, X);
      return T(Z, L, we), we;
    });
  }
  function E(S, D) {
    const A = v(S, D);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function P(S) {
    const D = Bt.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(S) : S();
  }
  function N(S, D) {
    let A;
    const [L, X, ae] = Dy(S, D);
    A = Hi(L.reverse(), "beforeRouteLeave", S, D);
    for (const R of L)
      R.leaveGuards.forEach((Z) => {
        A.push(bn(Z, S, D));
      });
    const O = E.bind(null, S, D);
    return A.push(O), We(A).then(() => {
      A = [];
      for (const R of a.list())
        A.push(bn(R, S, D));
      return A.push(O), We(A);
    }).then(() => {
      A = Hi(X, "beforeRouteUpdate", S, D);
      for (const R of X)
        R.updateGuards.forEach((Z) => {
          A.push(bn(Z, S, D));
        });
      return A.push(O), We(A);
    }).then(() => {
      A = [];
      for (const R of ae)
        if (R.beforeEnter)
          if (Oe(R.beforeEnter))
            for (const Z of R.beforeEnter)
              A.push(bn(Z, S, D));
          else
            A.push(bn(R.beforeEnter, S, D));
      return A.push(O), We(A);
    }).then(() => (S.matched.forEach((R) => R.enterCallbacks = {}), A = Hi(ae, "beforeRouteEnter", S, D), A.push(O), We(A))).then(() => {
      A = [];
      for (const R of r.list())
        A.push(bn(R, S, D));
      return A.push(O), We(A);
    }).catch((R) => Nt(
      R,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? R : Promise.reject(R));
  }
  function T(S, D, A) {
    l.list().forEach((L) => P(() => L(S, D, A)));
  }
  function U(S, D, A, L, X) {
    const ae = v(S, D);
    if (ae)
      return ae;
    const O = D === cn, R = tn ? history.state : {};
    A && (L || O ? s.replace(S.fullPath, K({
      scroll: O && R && R.scroll
    }, X)) : s.push(S.fullPath, X)), u.value = S, Tt(S, D, A, O), Dn();
  }
  let j;
  function q() {
    j || (j = s.listen((S, D, A) => {
      if (!Pt.listening)
        return;
      const L = _(S), X = x(L);
      if (X) {
        F(K(X, { replace: !0 }), L).catch(As);
        return;
      }
      d = L;
      const ae = u.value;
      tn && yS(Pu(ae.fullPath, A.delta), fi()), N(L, ae).catch((O) => Nt(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : Nt(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (F(
        O.to,
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((R) => {
        Nt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === Ts.pop && s.go(-1, !1);
      }).catch(As), Promise.reject()) : (A.delta && s.go(-A.delta, !1), vt(O, L, ae))).then((O) => {
        O = O || U(
          // after navigation, all matched components are resolved
          L,
          ae,
          !1
        ), O && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Nt(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-A.delta, !1) : A.type === Ts.pop && Nt(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), T(L, ae, O);
      }).catch(As);
    }));
  }
  let Ge = Mo(), Te = Mo(), Lt;
  function vt(S, D, A) {
    Dn(S);
    const L = Te.list();
    return L.length ? L.forEach((X) => X(S, D, A)) : ({}.NODE_ENV !== "production" && H("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function Lo() {
    return Lt && u.value !== cn ? Promise.resolve() : new Promise((S, D) => {
      Ge.add([S, D]);
    });
  }
  function Dn(S) {
    return Lt || (Lt = !S, q(), Ge.list().forEach(([D, A]) => S ? A(S) : D()), Ge.reset()), S;
  }
  function Tt(S, D, A, L) {
    const { scrollBehavior: X } = e;
    if (!tn || !X)
      return Promise.resolve();
    const ae = !A && CS(Pu(S.fullPath, 0)) || (L || !A) && history.state && history.state.scroll || null;
    return cS().then(() => X(S, D, ae)).then((O) => O && SS(O)).catch((O) => vt(O, S, D));
  }
  const Xe = (S) => s.go(S);
  let an;
  const Bt = /* @__PURE__ */ new Set(), Pt = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: y,
    replace: C,
    go: Xe,
    back: () => Xe(-1),
    forward: () => Xe(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: Te.add,
    isReady: Lo,
    install(S) {
      const D = this;
      S.component("RouterLink", py), S.component("RouterView", wy), S.config.globalProperties.$router = D, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ds(u)
      }), tn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !an && u.value === cn && (an = !0, y(s.location).catch((X) => {
        ({}).NODE_ENV !== "production" && H("Unexpected error when starting the router:", X);
      }));
      const A = {};
      for (const X in cn)
        Object.defineProperty(A, X, {
          get: () => u.value[X],
          enumerable: !0
        });
      S.provide(wi, D), S.provide(qm, lS(A)), S.provide(Gl, u);
      const L = S.unmount;
      Bt.add(S), S.unmount = function() {
        Bt.delete(S), Bt.size < 1 && (d = cn, j && j(), j = null, u.value = cn, an = !1, Lt = !1), L();
      }, {}.NODE_ENV !== "production" && tn && Sy(S, D, t);
    }
  };
  function We(S) {
    return S.reduce((D, A) => D.then(() => P(A)), Promise.resolve());
  }
  return Pt;
}
function Dy(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => $n(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => $n(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function Se() {
  return yo(wi);
}
const Ay = {
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
}, Ly = {
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
}, Ty = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], By = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, Py = {
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
}, Fy = {
  languages: Ay,
  scriptgroups: Ly,
  rtlscripts: Ty,
  regiongroups: By,
  territories: Py
};
var $e = Fy;
function Rs(e) {
  return !!$e.languages[e];
}
function En(e) {
  return Rs(e) && $e.languages[e].length === 1 ? $e.languages[e][0] : !1;
}
function My() {
  return $e.languages;
}
function zs(e) {
  var t = En(e);
  return t ? zs(t) : Rs(e) ? $e.languages[e][0] : "Zyyy";
}
function gc(e) {
  var t = En(e);
  return t ? gc(t) : Rs(e) && $e.languages[e][1] || "UNKNOWN";
}
function Ps(e) {
  var t = En(e);
  return t ? Ps(t) : Rs(e) && $e.languages[e][2] || e;
}
function Ny() {
  var e, t = {};
  for (e in $e.languages)
    En(e) || (t[e] = Ps(e));
  return t;
}
function Zm(e) {
  var t, n, o = [];
  for (t in $e.languages)
    if (!En(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === zs(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Uy(e) {
  return Zm([e]);
}
function eh(e) {
  var t;
  for (t in $e.scriptgroups)
    if ($e.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function pc(e) {
  return eh(zs(e));
}
function th(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = En(n) || n, a = pc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function nh(e) {
  var t, n, o, s = {};
  for (t in $e.languages)
    if (!En(t)) {
      for (n = 0; n < e.length; n++)
        if (gc(t).includes(e[n])) {
          o = pc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Iy(e) {
  return nh([e]);
}
function Ry(e) {
  var t, n, o, s = [];
  for (t = th(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function zy(e, t) {
  var n = Ps(e) || e, o = Ps(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function oh(e) {
  return $e.rtlscripts.includes(zs(e));
}
function Oy(e) {
  return oh(e) ? "rtl" : "ltr";
}
function Hy(e) {
  return $e.territories[e] || [];
}
function jy(e, t) {
  t.target ? $e.languages[e] = [t.target] : $e.languages[e] = [t.script, t.regions, t.autonym];
}
var z = {
  addLanguage: jy,
  getAutonym: Ps,
  getAutonyms: Ny,
  getDir: Oy,
  getGroupOfScript: eh,
  getLanguages: My,
  getLanguagesByScriptGroup: th,
  getLanguagesByScriptGroupInRegion: Iy,
  getLanguagesByScriptGroupInRegions: nh,
  getLanguagesInScript: Uy,
  getLanguagesInScripts: Zm,
  getLanguagesInTerritory: Hy,
  getRegions: gc,
  getScript: zs,
  getScriptGroupOfLanguage: pc,
  isKnown: Rs,
  isRedirect: En,
  isRtl: oh,
  sortByScriptGroup: Ry,
  sortByAutonym: zy
};
const qy = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, Gy = (e) => {
  const t = qy(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const it = window.Vue.unref, Qn = window.Vue.createVNode, Ut = window.Vue.createElementVNode, Wu = window.Vue.renderSlot, Ku = window.Vue.withModifiers, ji = window.Vue.toDisplayString, qi = window.Vue.withCtx, Xy = window.Vue.openBlock, Wy = window.Vue.createElementBlock, Ky = window.Vue.createCommentVNode, Yy = { class: "col shrink pe-4" }, Jy = { class: "col" }, Qy = { class: "cx-translation__details column justify-between ma-0" }, Zy = { class: "row ma-0" }, eC = { class: "col grow" }, tC = { class: "col shrink ps-2" }, nC = ["dir", "textContent"], oC = ["dir", "textContent"], sC = ["textContent"], aC = window.Vuex.useStore, iC = window.Vue.computed, sh = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: di,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = aC(), s = (l, u) => {
      const d = o.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = ue(), r = iC(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = Gy(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (Xy(), Wy("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Ku((d) => l.$emit("click"), ["stop"]))
    }, [
      Ut("div", Yy, [
        Qn(it(nc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Ut("div", Jy, [
        Ut("div", Qy, [
          Ut("div", Zy, [
            Ut("div", eC, [
              Wu(l.$slots, "title")
            ]),
            Ut("div", tC, [
              Qn(it(_e), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Ku((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Wu(l.$slots, "mid-content"),
          Qn(it(B), { class: "cx-translation__footer ma-0" }, {
            default: qi(() => [
              Qn(it(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: qi(() => [
                  Ut("span", {
                    class: "mw-ui-autonym",
                    dir: it(z.getDir)(e.translation.sourceLanguage),
                    textContent: ji(it(z.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, nC),
                  Qn(it(_e), {
                    icon: it(am),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Ut("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: it(z.getDir)(e.translation.targetLanguage),
                    textContent: ji(it(z.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, oC)
                ]),
                _: 1
              }),
              Qn(it(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: qi(() => [
                  Ut("span", {
                    textContent: ji(r.value)
                  }, null, 8, sC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Ky("", !0);
  }
};
const Uo = window.Vue.unref, Yu = window.Vue.toDisplayString, rC = window.Vue.normalizeClass, lC = window.Vue.createElementVNode, Gi = window.Vue.openBlock, cC = window.Vue.createElementBlock, Ju = window.Vue.createCommentVNode, Qu = window.Vue.createVNode, ga = window.Vue.withCtx, Zu = window.Vue.createBlock, uC = ["lang", "textContent"], dC = ["lang", "textContent"], gC = window.Vue.computed, pC = window.Vue.inject, mC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: oc,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = pC("colors").gray200, s = gC(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Se(), { setTranslationURLParams: r } = M(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Gi(), Zu(sh, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Uo(sm),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: ga(() => [
        lC("h5", {
          class: rC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Yu(e.translation.sourceTitle)
        }, null, 10, uC),
        e.translation.isLeadSectionTranslation ? Ju("", !0) : (Gi(), cC("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Yu(e.translation.sourceSectionTitle)
        }, null, 8, dC))
      ]),
      "mid-content": ga(() => [
        e.translation.progress ? (Gi(), Zu(Uo(B), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: ga(() => [
            Qu(Uo(k), null, {
              default: ga(() => [
                Qu(Uo(cm), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Uo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ju("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, hC = window.Vue.computed, fC = window.Vue.inject, Os = () => {
  const e = fC("breakpoints");
  return { isDesktop: hC(
    () => !G.isMobileDomain() && e.value.tabletAndUp
  ) };
}, ed = window.Vue.computed, wC = window.Vuex.useStore;
function Hs() {
  const e = wC(), t = ed(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: ed(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const Zn = window.Vue.computed;
function W(e) {
  const t = Zn(() => e.state.application.sourceLanguage), n = Zn(() => e.state.application.targetLanguage), o = Zn(
    () => e.state.application.currentMTProvider
  ), s = Zn(
    () => z.getAutonym(t.value)
  ), a = Zn(
    () => z.getAutonym(n.value)
  ), r = Zn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const _C = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = M(), s = G.getCurrentWikiLanguageCode(), a = (c) => !e || Array.isArray(e) && e.includes(c), r = (c) => t.includes(c), l = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let u;
  return o.value && a(o.value) && r(o.value) ? u = o.value : a(s) && r(s) ? u = s : u = (e == null ? void 0 : e[0]) || l.targetLanguage, { sourceLanguage: [
    n.value,
    l.sourceLanguage,
    s,
    l.targetLanguage
  ].filter((c) => r(c)).find((c) => c !== u), targetLanguage: u };
}, vC = window.Vuex.useStore, mc = () => {
  const e = vC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
}, SC = window.Vuex.useStore, js = () => {
  const e = SC(), { sourceLanguage: t, targetLanguage: n } = W(e), o = (l) => {
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
class yC {
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
const CC = window.Vuex.useStore, hc = window.Vue.ref, kC = hc([]), bC = hc([]);
let Xi = !1, td = !1, nd = !1, Wi = hc(!1), Io = null;
const pa = {
  page: kC,
  section: bC
}, ah = () => {
  const e = CC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = () => b(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Xi)
      return Xi = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Xi = !0, !td) {
      const i = yield se.fetchUserEdits(t.value).then((c) => (td = !0, c));
      if (i.length)
        return i;
    }
    if (!nd) {
      const i = yield se.fetchUserEdits(t.value).then((c) => (nd = !0, c));
      if (i.length)
        return Vo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), s = (d) => {
    let i = pa[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new yC({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), pa[d].value.push(i)), i;
  }, a = () => b(void 0, null, function* () {
    const d = yield se.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const i in pa) {
      const c = s(i);
      c.seeds = [...c.seeds, ...d || []];
    }
  }), r = () => b(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const c in pa) {
        const g = s(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => Io || (Io = r(), Io.finally(() => {
    Io = null;
  }));
  return { getSuggestionSeed: (d) => b(void 0, null, function* () {
    let i = s(d);
    i.seeds.length || (yield l());
    let c = i.shiftSeeds();
    return !c && !Wi.value && (yield a(), c = i.shiftSeeds(), Wi.value = !0), c;
  }), defaultSeedsFetched: Wi };
}, xC = 5;
function ko(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < xC);
  });
}
const $C = window.Vuex.useStore, VC = () => {
  const e = $C(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), { getSuggestionSeed: o } = ah(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = js(), l = {
    id: _t,
    type: wt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield ko(() => b(void 0, null, function* () {
        const g = yield o("page");
        if (!g)
          return !0;
        let p = yield se.fetchPageSuggestions(
          t.value,
          n.value,
          g
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
      return yield ko(() => b(void 0, null, function* () {
        const g = yield o("section");
        if (!g)
          return !0;
        const p = yield se.fetchSectionSuggestions(
          t.value,
          n.value,
          g
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
}, EC = window.Vuex.useStore, DC = () => {
  const e = EC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = {
    id: At,
    type: wt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = js();
  return { fetchSectionSuggestionsPopular: (d) => b(void 0, null, function* () {
    const i = [];
    return yield ko(() => b(void 0, null, function* () {
      const c = yield se.fetchMostPopularSectionSuggestions(
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
    return yield ko(() => b(void 0, null, function* () {
      let c = yield se.fetchMostPopularPageSuggestions(
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
}, ih = window.Vue.ref, Ki = ih([]), od = ih(!1), fc = () => ({ pageCollections: Ki, fetchPageCollections: () => b(void 0, null, function* () {
  try {
    Ki.value = yield se.fetchPageCollections(), Ki.value.sort((t, n) => t.name.localeCompare(n.name)), od.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: od });
class Wl {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const ma = window.Vue.computed, sd = mw.loader.require("ext.cx.articletopics"), AC = (e) => new Wl({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: ze
  }))
}), wc = () => {
  const e = ue(), { currentSuggestionFilters: t, setFilterURLParams: n } = M(), o = {
    id: _t,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: At,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: pe,
    type: wt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: r, pageCollectionsFetched: l } = fc(), u = ma(() => {
    const w = new Wl({
      id: wt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return r.value.length && w.filters.push(a), w;
  }), d = (w) => ({
    id: w.name,
    label: w.name,
    type: pe
  }), i = ma(
    () => new Wl({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: r.value.map(
        (w) => d(w)
      )
    })
  ), c = ma(() => {
    const w = [
      u.value,
      ...sd.map(AC)
    ];
    return r.value.length && w.splice(1, 0, i.value), w;
  }), g = ma(
    () => [t.value.type, t.value.id].includes(
      pe
    ) && !l.value
  ), p = () => {
    if (g.value)
      return [];
    const w = h();
    return w.type === ze || w.type === nt || w.type === pe || w.id === pe ? [w, o] : [o, s];
  }, m = (w) => {
    n(w.type, w.id);
  }, h = () => t.value.type === nt ? {
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  } : c.value.flatMap((w) => w.filters).find(f), f = (w) => t.value.type === w.type && t.value.id === w.id;
  return {
    allFilters: c,
    getFiltersSummary: p,
    selectFilter: m,
    isFilterSelected: f,
    getOresTopics: (w) => {
      const y = sd.flatMap((C) => C.topics).find((C) => C.topicId === w);
      return y ? y.orestopics : [];
    },
    waitingForPageCollectionsFetch: g,
    findSelectedFilter: h
  };
}, LC = window.Vuex.useStore, TC = () => {
  const e = LC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = js(), { getOresTopics: l } = wc();
  return {
    fetchPageSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const c = o.value.id, g = {
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
        (h) => h.suggestionProvider = g
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const c = o.value.id, g = {
        id: c,
        type: ze
      }, p = l(c), m = [];
      return yield ko(() => b(void 0, null, function* () {
        const h = yield se.fetchSectionSuggestionsByTopics(
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
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, BC = window.Vuex.useStore, PC = window.Vue.computed, FC = () => {
  const e = BC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), s = PC(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== pe ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = js();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [], c = yield se.fetchSectionSuggestionsByCollections(
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
      let c = yield se.fetchPageSuggestionsByCollections(
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
}, MC = window.Vuex.useStore, NC = () => {
  const e = MC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = js();
  return {
    fetchPageSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = o.value.id;
      let c = yield se.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), c.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: nt
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = [], c = o.value.id;
      return yield ko(() => b(void 0, null, function* () {
        const g = yield se.fetchSectionSuggestions(
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
          type: nt
        }
      ), i;
    })
  };
}, _c = () => {
  const { currentSuggestionFilters: e } = M(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = VC(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = DC(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = TC(), {
    fetchPageSuggestionsByCollections: l,
    fetchSectionSuggestionsByCollections: u
  } = FC(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: i } = NC(), c = {
    [_t]: t,
    [At]: o,
    [pe]: l,
    [ze]: a,
    [nt]: d
  }, g = {
    [_t]: n,
    [At]: s,
    [pe]: u,
    [ze]: r,
    [nt]: i
  }, p = (f) => f.type === wt ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => c[p(e.value)],
    getCurrentSectionSuggestionProvider: () => g[p(e.value)]
  };
}, UC = window.Vuex.useStore, vc = () => {
  const e = UC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = mc(), { sourceLanguageURLParameter: o } = M(), s = () => {
    const c = t(), g = e.state.suggestions.maxSuggestionsPerSlice;
    return g - c.length % g;
  }, a = () => {
    const c = n(), g = e.state.suggestions.maxSuggestionsPerSlice;
    return g - c.length % g;
  }, {
    getCurrentPageSuggestionProvider: r,
    getCurrentSectionSuggestionProvider: l
  } = _c(), u = (c) => {
    try {
      const g = c.map((p) => p.sourceTitle);
      if (g.length)
        return e.dispatch("mediawiki/fetchPageMetadata", {
          language: o.value,
          titles: g
        });
    } catch (g) {
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
      ), u(p), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const c = a(), p = yield r()(
        c
      );
      p.forEach(
        (m) => e.commit("suggestions/addPageSuggestion", m)
      ), u(p), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, IC = window.Vuex.useStore, Sc = () => {
  const e = IC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = vc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = mc();
  return () => b(void 0, null, function* () {
    const { targetLanguage: a } = W(e), r = s(0), l = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, d = r.length === u, i = l.length === u;
    d && i || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, RC = window.Vuex.useStore, yc = () => {
  const e = RC();
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
          return new xo({
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
}, ad = window.Vue.computed, zC = window.Vuex.useStore, on = () => {
  const e = zC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M(), s = ad(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = ad(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, qs = window.Vuex.useStore, Gs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), r = G.getCurrentWikiLanguageCode();
  return a && t !== r ? (s = ie({ sx: !0 }, s), o && (s.section = o), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: OC, pageURLParameter: HC, sectionURLParameter: jC } = M(), Xs = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), OC(t, n);
}, rh = () => {
  const e = qs(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Hs();
  return () => b(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = _C(
      t.value,
      n.value
    );
    Gs(
      o,
      s,
      HC.value,
      jC.value
    ) || Xs(e, o, s);
  });
}, lh = () => {
  const e = qs(), t = Sc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = W(e);
    n === o && (n = a.value, o = s.value), Gs(
      n,
      o,
      null,
      null
    ) || (Xs(e, n, o), t());
  };
}, qC = () => {
  const e = qs(), t = Sc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: r } = n;
      Gs(
        o,
        s,
        a,
        r,
        { draft: !0 }
      ) || (Xs(e, o, s), t());
    }
  );
}, GC = () => {
  const e = qs();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Gs(
      n,
      o,
      s,
      null
    ) || Xs(e, n, o);
  };
}, XC = () => {
  const e = qs(), t = yc(), { currentLanguageTitleGroup: n, targetPageExists: o } = on();
  return (s, a) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l,
      setPageURLParam: u,
      clearSectionURLParameter: d
    } = M();
    s === a && (s = l.value, a = r.value);
    const i = n.value.getTitleForLanguage(s);
    Gs(
      s,
      a,
      i,
      null
    ) || (Xs(e, s, a), u(i), o.value ? (d(), yield t(
      r.value,
      l.value,
      i
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: r.value,
      titles: [i]
    }), e.dispatch("application/getCXServerToken"));
  });
}, WC = window.Vuex.useStore, ch = [], KC = (e, t, n) => ch.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), YC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  ch.push(o);
}, JC = () => {
  const e = WC();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !KC(t, n, o) && (s = yield se.fetchSectionSuggestion(
      t,
      o,
      n
    ), YC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, QC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', ZC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', ek = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', tk = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', nk = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', ok = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', sk = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', ak = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', ik = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', rk = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', lk = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', ck = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', uk = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', dk = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', gk = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', pk = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', mk = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', hk = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', fk = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', wk = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', _k = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', vk = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', Sk = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', yk = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', Ck = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', kk = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', bk = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', xk = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', $k = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', Vk = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Kl = QC, uh = ZC, Ek = {
  ltr: ek,
  shouldFlip: !0
}, dh = {
  ltr: tk,
  shouldFlip: !0
}, Fs = {
  ltr: nk,
  shouldFlip: !0
}, Dk = ok, gh = sk, ph = ak, Ak = ik, Lk = rk, Tk = lk, Eo = ck, Cc = uk, kc = dk, Bk = gk, mh = pk, Pk = {
  langCodeMap: {
    ar: mk
  },
  default: hk
}, hh = fk, bc = {
  ltr: wk,
  shouldFlip: !0
}, Fk = _k, Ws = {
  ltr: vk,
  shouldFlip: !0
}, xc = {
  ltr: Sk,
  shouldFlip: !0
}, Mk = {
  ltr: yk,
  shouldFlip: !0
}, fh = Ck, Nk = kk, Uk = bk, Ik = xk, Rk = $k, wh = Vk, _h = "cx-translation-session-position-", vh = () => _h + mw.user.sessionId(), Sh = () => {
  const e = vh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, zk = function() {
  const e = Sh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(_h)).forEach((n) => mw.storage.remove(n));
  const t = vh();
  mw.storage.set(t, e + 1);
};
let Yl = null;
function Ok(e) {
  if (Yl)
    return Promise.resolve(Yl);
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
function Hk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function jk(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = Sh(), u = {
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
  let d;
  return a ? d = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, u, e))
  ) : d = Ok(r).then((i) => {
    Yl = i, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: Hk(i)
      })
    );
  }), d.then(() => {
    zk();
  });
}
const He = () => jk, yh = window.Vue.ref, Ch = yh(null), Jl = yh(null), qk = (e) => {
  Ch.value = e;
}, Gk = (e) => {
  Jl.value = e;
}, $c = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = M(), s = He();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: Ch.value,
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
      return Jl.value && (r.event_context = Jl.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: qk,
    setStartTranslationEventContext: Gk
  };
}, Xk = window.Vuex.useStore, Ks = () => {
  const e = Xk(), t = Se(), n = yc(), { setTranslationURLParams: o } = M(), { setStartTranslationEventSource: s, setStartTranslationEventContext: a } = $c();
  return (r, l, u, d, i = null) => b(void 0, null, function* () {
    const c = yield n(
      l,
      u,
      r
    );
    c && (e.dispatch("application/getCXServerToken"), o(c), s(d), a(i), t.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const ha = window.Vue.withModifiers, Yi = window.Vue.toDisplayString, Ji = window.Vue.createElementVNode, Ke = window.Vue.unref, fa = window.Vue.openBlock, id = window.Vue.createBlock;
window.Vue.createCommentVNode;
const un = window.Vue.createVNode, Ln = window.Vue.withCtx, rd = window.Vue.createElementBlock, Wk = ["lang", "href", "textContent"], Kk = {
  key: 1,
  class: "flex"
}, Yk = { key: 2 }, ld = window.Vue.computed, cd = window.Vue.ref, Qi = window.Codex.CdxButton, Zi = window.Codex.CdxIcon, Jk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: lc,
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
    JC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((h) => o.value = h).catch((h) => console.log(h)).finally(() => n.value = !1), Se(), Os();
    const {
      setTranslationURLParams: l,
      setSectionURLParam: u,
      sourceLanguageURLParam: d,
      targetLanguageURLParam: i
    } = M(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, g = Ks(), p = GC(), m = (h) => {
      p(t.translation), g(
        t.translation.sourceTitle,
        d.value,
        i.value,
        "continue_published"
      ), h && u(h);
    };
    return (h, f) => (fa(), id(sh, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Ln(() => [
        Ji("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = ha(() => {
          }, ["stop"])),
          textContent: Yi(e.translation.sourceTitle)
        }, null, 8, Wk)
      ]),
      "mid-content": Ln(() => [
        un(Ke(B), { class: "ma-0" }, {
          default: Ln(() => [
            un(Ke(k), null, {
              default: Ln(() => [
                n.value ? (fa(), id(Ke(Re), { key: 0 })) : s.value ? (fa(), rd("div", Kk, [
                  un(Ke(Qi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = ha((_) => m(a.value), ["stop"]))
                  }, {
                    default: Ln(() => [
                      un(Ke(Zi), {
                        class: "me-1",
                        icon: Ke(Kl)
                      }, null, 8, ["icon"]),
                      Ji("span", null, Yi(a.value), 1)
                    ]),
                    _: 1
                  }),
                  un(Ke(Qi), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": h.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = ha((_) => m(null), ["stop"]))
                  }, {
                    default: Ln(() => [
                      un(Ke(Zi), { icon: Ke(kc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (fa(), rd("div", Yk, [
                  un(Ke(Qi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[3] || (f[3] = ha((_) => m(null), ["stop"]))
                  }, {
                    default: Ln(() => [
                      un(Ke(Zi), {
                        class: "me-1",
                        icon: Ke(Kl)
                      }, null, 8, ["icon"]),
                      Ji("span", null, Yi(h.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, ud = window.Vuex.useStore, Qk = () => {
  const e = ud(), { commit: t } = ud(), { sourceLanguage: n, targetLanguage: o } = W(e), s = He();
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
const Zk = window.Vue.resolveDirective, er = window.Vue.createElementVNode, eb = window.Vue.withDirectives, tr = window.Vue.unref, dd = window.Vue.createVNode, gd = window.Vue.withCtx, tb = window.Vue.openBlock, nb = window.Vue.createBlock, ob = { class: "pa-4" }, sb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, ab = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: di,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Qk(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const d = Zk("i18n");
      return tb(), nb(tr(st), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: gd(() => [
          er("div", sb, [
            dd(tr(fe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            dd(tr(fe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: gd(() => [
          er("div", ob, [
            eb(er("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function ib(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield rb(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function pd(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(z.sortByAutonym) : (yield ib(e, t, n)).sort(z.sortByAutonym);
  });
}
function rb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function lb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function cb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const ub = window.Vue.computed;
function db(e, t) {
  const n = ub(() => {
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
const nr = window.Vue.ref, md = window.Vue.watch, gb = window.Vue.computed;
function pb(e, t, n) {
  const o = nr(""), s = nr(-1), a = nr(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = gb(
    () => e.value ? t.value : [...n, ...t.value]
  ), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return md(e, () => {
    s.value = -1;
  }), md(s, () => b(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, langSelectorContainer: a, selectedLanguage: o };
}
function Vc(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const wa = window.Vue.renderSlot, me = window.Vue.unref, mb = window.Vue.isRef, hd = window.Vue.createVNode, Ro = window.Vue.withModifiers, zo = window.Vue.withKeys, dn = window.Vue.createElementVNode, hb = window.Vue.resolveDirective, _a = window.Vue.withDirectives, or = window.Vue.renderList, sr = window.Vue.Fragment, It = window.Vue.openBlock, Rt = window.Vue.createElementBlock, fd = window.Vue.toDisplayString, va = window.Vue.normalizeClass, ar = window.Vue.createCommentVNode, fb = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, wb = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, _b = { class: "results px-3 pt-4" }, vb = { class: "results-header ps-8 pb-2" }, Sb = { class: "results-languages--suggestions pa-0 ma-0" }, yb = ["lang", "dir", "aria-selected", "onClick", "textContent"], Cb = { class: "results px-3 pt-4" }, kb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, bb = ["lang", "dir", "aria-selected", "onClick", "textContent"], xb = ["aria-selected"], $b = { class: "no-results px-3 py-4" }, Vb = { class: "ps-8" }, ir = window.Vue.ref, Eb = window.Vue.watch, Db = window.Vue.onMounted, wd = window.Vue.computed, kh = {
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
      default: lb
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ir(null), a = ir(""), r = ir([]), l = wd(
      () => cb(r.value)
    ), u = wd(() => {
      const v = r.value.length;
      return v < 10 ? "few-results" : v < 30 ? "some-results" : "many-results";
    }), d = (v) => o("select", v), i = () => o("close"), { autocompletion: c, onTabSelect: g } = db(
      a,
      r
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: f } = pb(a, r, n.suggestions), _ = () => {
      if (a.value && n.languages.includes(a.value)) {
        d(a.value);
        return;
      }
      if (f.value) {
        d(f.value);
        return;
      }
      if (r.value.length === 1) {
        d(r.value[0]);
        return;
      }
    };
    return Eb(a, Vc(() => b(this, null, function* () {
      r.value = yield pd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Db(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield pd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (v, y) => {
      const C = hb("i18n");
      return It(), Rt("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        wa(v.$slots, "search", {}, () => [
          dn("div", fb, [
            hd(me(ai), {
              value: me(c),
              "onUpdate:value": y[0] || (y[0] = (x) => mb(c) ? c.value = x : null),
              icon: me(Ul),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            hd(me(ai), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: me(Ul),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                zo(Ro(_, ["prevent"]), ["enter"]),
                zo(Ro(me(p), ["stop", "prevent"]), ["down"]),
                zo(Ro(me(m), ["stop", "prevent"]), ["up"]),
                zo(Ro(i, ["prevent"]), ["esc"]),
                zo(Ro(me(g), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        dn("section", wb, [
          e.suggestions.length && !a.value ? wa(v.$slots, "suggestions", { key: 0 }, () => [
            dn("section", _b, [
              _a(dn("p", vb, null, 512), [
                [C, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              dn("ul", Sb, [
                (It(!0), Rt(sr, null, or(e.suggestions, (x) => (It(), Rt("li", {
                  key: x,
                  class: va(["language ma-0", x === me(f) ? "language--selected" : ""]),
                  lang: x,
                  dir: me(z.getDir)(x),
                  "aria-selected": x === me(f) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (F) => d(x),
                  textContent: fd(me(z.getAutonym)(x))
                }, null, 10, yb))), 128))
              ])
            ])
          ]) : ar("", !0),
          l.value.length ? wa(v.$slots, "search", { key: 1 }, () => [
            dn("section", Cb, [
              e.suggestions.length && !a.value ? _a((It(), Rt("p", kb, null, 512)), [
                [C, void 0, "cx-sx-language-selector-all-languages"]
              ]) : ar("", !0),
              (It(!0), Rt(sr, null, or(l.value, (x, F) => (It(), Rt("ul", {
                key: F,
                class: va(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (It(!0), Rt(sr, null, or(x, (E) => (It(), Rt("li", {
                  key: E,
                  class: va(["language ma-0", E === me(f) ? "language--selected" : ""]),
                  lang: E,
                  dir: me(z.getDir)(E),
                  role: "option",
                  "aria-selected": E === me(f) || null,
                  tabindex: "-1",
                  onClick: (P) => d(E),
                  textContent: fd(me(z.getAutonym)(E))
                }, null, 10, bb))), 128)),
                e.allOptionEnabled && !a.value ? _a((It(), Rt("li", {
                  key: 0,
                  class: va(["language ma-0", me(f) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": me(f) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (E) => d("all"))
                }, null, 10, xb)), [
                  [C, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : ar("", !0)
              ], 2))), 128))
            ])
          ]) : wa(v.$slots, "noresults", { key: 2 }, () => [
            dn("section", $b, [
              _a(dn("h3", Vb, null, 512), [
                [C, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const ye = window.Vue.unref, Ab = window.Vue.resolveDirective, _d = window.Vue.withDirectives, Oo = window.Vue.openBlock, Ho = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const vd = window.Vue.toDisplayString, Sd = window.Vue.withModifiers, Tn = window.Vue.withCtx, zt = window.Vue.createVNode, Lb = { class: "sx-translation-list-language-selector" }, Tb = {
  key: 0,
  class: "mw-ui-autonym"
}, Bb = ["lang", "dir", "textContent"], Pb = {
  key: 0,
  class: "mw-ui-autonym"
}, Fb = ["lang", "dir", "textContent"], jo = window.Vue.computed, Mb = window.Vue.inject, Nb = window.Vue.ref, Ec = {
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
    const n = e, o = t, s = Mb("breakpoints"), a = jo(() => s.value.mobile), r = Nb(null), l = jo(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = jo(() => {
      if (!l.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[f];
    }), g = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(_, h);
    }, p = jo(
      () => n.selectedSourceLanguage === "all"
    ), m = jo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = Ab("i18n");
      return Oo(), Ho("div", Lb, [
        zt(ye(B), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Tn(() => [
            zt(ye(k), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: Tn(() => [
                zt(ye(fe), {
                  indicator: ye(Nl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: Sd(u, ["stop"])
                }, {
                  default: Tn(() => [
                    p.value ? _d((Oo(), Ho("span", Tb, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Oo(), Ho("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: ye(z.getDir)(e.selectedSourceLanguage),
                      textContent: vd(ye(z.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Bb))
                  ]),
                  _: 1
                }, 8, ["indicator"])
              ]),
              _: 1
            }),
            zt(ye(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: Tn(() => [
                zt(ye(_e), { icon: ye(am) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            zt(ye(k), { cols: "5" }, {
              default: Tn(() => [
                zt(ye(fe), {
                  indicator: ye(Nl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Sd(d, ["stop"])
                }, {
                  default: Tn(() => [
                    m.value ? _d((Oo(), Ho("span", Pb, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Oo(), Ho("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: ye(z.getDir)(e.selectedTargetLanguage),
                      textContent: vd(ye(z.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Fb))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        zt(ye(st), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (w) => l.value = w),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: i
        }, {
          default: Tn(() => [
            zt(ye(kh), {
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
      ]);
    };
  }
};
const Ub = window.Vue.toDisplayString, qo = window.Vue.createElementVNode, St = window.Vue.openBlock, Go = window.Vue.createBlock, Sa = window.Vue.createCommentVNode, ya = window.Vue.unref, yd = window.Vue.createVNode, Ib = window.Vue.resolveDirective, Cd = window.Vue.withDirectives, Xo = window.Vue.createElementBlock, kd = window.Vue.renderList, bd = window.Vue.Fragment, Rb = window.Vue.normalizeClass, xd = window.Vue.withCtx, zb = ["textContent"], Ob = {
  key: 1,
  class: "cx-translation-list-empty-placeholder pa-4"
}, Hb = { class: "cx-translation-list-empty-placeholder__icon-container" }, jb = { class: "cx-translation-list-empty-placeholder__icon" }, qb = { class: "cx-translation-list-empty-placeholder__title mt-5" }, Gb = { class: "cx-translation-list-empty-placeholder__description mt-2" }, Xb = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Wb = {
  key: 4,
  class: "cx-translation-list-wrapper"
}, Ca = window.Vue.ref, Ot = window.Vue.computed, Kb = window.Vuex.useStore, Yb = window.Codex.CdxIcon, $d = {
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
    const t = e, n = Ca("all"), o = Ca("all"), s = Kb(), a = Ot(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = Hs(), l = Ca(!1), u = Ca(null), d = Ot(
      () => t.translationStatus === "draft"
    ), i = Ot(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Ot(
      () => n.value === "all"
    ), g = Ot(
      () => o.value === "all"
    ), p = Ot(
      () => i.value.filter(
        (w) => (c.value || w.sourceLanguage === n.value) && (g.value || w.targetLanguage === o.value)
      ).sort((w, v) => w.lastUpdatedTimestamp < v.lastUpdatedTimestamp)
    ), m = Ot(() => {
      let w = i.value.map(
        (v) => v.targetLanguage
      );
      return r.value && (w = w.filter(
        (v) => r.value.includes(v)
      )), [...new Set(w)];
    }), h = Ot(() => {
      const w = i.value.map(
        (v) => v.sourceLanguage
      );
      return [...new Set(w)];
    }), f = (w) => {
      u.value = w, l.value = !0;
    }, _ = Ot(() => t.activeStatus === t.translationStatus);
    return (w, v) => {
      const y = Ib("i18n");
      return _.value ? (St(), Go(ya(Ie), {
        key: 0,
        class: Rb(`cx-translation-list--${e.translationStatus}`)
      }, {
        header: xd(() => [
          qo("h3", {
            class: "mw-ui-card__title pa-4 pt-5 mb-0",
            textContent: Ub(w.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 8, zb)
        ]),
        default: xd(() => [
          p.value.length ? (St(), Go(Ec, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": v[0] || (v[0] = (C) => n.value = C),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": v[1] || (v[1] = (C) => o.value = C),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Sa("", !0),
          a.value && !p.value.length ? (St(), Xo("div", Ob, [
            qo("div", Hb, [
              qo("div", jb, [
                yd(ya(Yb), { icon: ya(hh) }, null, 8, ["icon"])
              ])
            ]),
            Cd(qo("p", qb, null, 512), [
              [y, void 0, "cx-sx-translation-list-empty-title"]
            ]),
            Cd(qo("p", Gb, null, 512), [
              [y, void 0, "cx-sx-translation-list-empty-description"]
            ])
          ])) : Sa("", !0),
          a.value ? Sa("", !0) : (St(), Go(ya(Re), { key: 2 })),
          d.value ? (St(), Xo("div", Xb, [
            (St(!0), Xo(bd, null, kd(p.value, (C) => (St(), Go(mC, {
              key: `${e.translationStatus}-${C.key}`,
              translation: C,
              onDeleteTranslation: (x) => f(C)
            }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
          ])) : (St(), Xo("div", Wb, [
            (St(!0), Xo(bd, null, kd(p.value, (C) => (St(), Go(Jk, {
              key: `${e.translationStatus}-${C.key}`,
              translation: C,
              onDeleteTranslation: (x) => f(C)
            }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
          ])),
          yd(ab, {
            modelValue: l.value,
            "onUpdate:modelValue": v[2] || (v[2] = (C) => l.value = C),
            translation: u.value
          }, null, 8, ["modelValue", "translation"])
        ]),
        _: 1
      }, 8, ["class"])) : Sa("", !0);
    };
  }
}, Jb = window.Vue.computed, Qb = window.Vuex.useStore, je = () => {
  const e = Qb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M();
  return { sectionSuggestion: Jb(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Zb = window.Vuex.useStore, ex = window.Vue.computed, sn = () => {
  const e = Zb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = M();
  return { currentTranslation: ex(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, Vd = window.Vue.computed, tx = window.Vuex.useStore, qe = () => {
  const e = tx(), { sectionSuggestion: t } = je(), { currentTranslation: n } = sn(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), r = Vd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Vd(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, nx = window.Vue.ref, ox = window.Vue.watchEffect, sx = (e, t) => b(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield se.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, d, i, c) => {
    const g = i < c.length - 1 ? c[i + 1].byteoffset : s;
    return u[d.line] = g - d.byteoffset, u;
  }, {});
  return Object.keys(l).filter((u) => a[u]).reduce((u, d) => u + l[d], 0);
}), rr = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, ax = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, ix = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, bh = () => {
  const { currentSourcePage: e } = qe(), { sectionSuggestion: t } = je(), n = nx(null);
  return ox(() => {
    if (t.value)
      sx(
        e.value,
        t.value
      ).then((o) => {
        n.value = ix(
          rr(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = rr(e.value.articleSize);
      n.value = ax(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: rr };
};
const lr = window.Vue.toDisplayString, cr = window.Vue.openBlock, Ed = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ql = window.Vue.createElementVNode, rx = window.Vue.unref, lx = window.Vue.withCtx, cx = window.Vue.createBlock, ux = {
  key: 0,
  class: "custom-info-chip__without-slash"
}, dx = {
  key: 1,
  class: "custom-info-chip__with-slash"
}, gx = { class: "custom-info-chip__with-slash__first" }, px = /* @__PURE__ */ Ql("span", null, "/", -1), mx = { class: "custom-info-chip__with-slash__second" }, hx = window.Codex.CdxInfoChip, ur = window.Vue.computed, li = {
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
    const t = e, n = ur(() => t.content.lastIndexOf("/")), o = ur(() => t.content.slice(0, n.value)), s = ur(() => t.content.slice(n.value + 1));
    return (a, r) => (cr(), cx(rx(hx), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: lx(() => [
        n.value === -1 ? (cr(), Ed("div", ux, lr(e.content), 1)) : (cr(), Ed("div", dx, [
          Ql("span", gx, lr(o.value), 1),
          px,
          Ql("span", mx, lr(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ee = window.Vue.unref, rt = window.Vue.createVNode, gn = window.Vue.createElementVNode, ka = window.Vue.toDisplayString, Ye = window.Vue.withCtx, fx = window.Vue.resolveDirective, dr = window.Vue.withDirectives, Bn = window.Vue.openBlock, eo = window.Vue.createBlock, to = window.Vue.createCommentVNode, Dd = window.Vue.withModifiers, wx = window.Vue.createElementBlock, _x = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, vx = { class: "col shrink pe-4" }, Sx = ["lang", "dir", "textContent"], yx = ["lang", "dir", "textContent"], Cx = ["textContent"], kx = ["textContent"], gr = window.Codex.CdxIcon, lt = window.Vue.computed, bx = window.Vue.inject, xx = window.Vuex.useStore, Zl = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [xo, xn, So],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = xx(), { bytesToMinutes: o } = bh(), s = lt(() => t.suggestion), a = lt(
      () => s.value.sourceTitle || s.value.title
    ), r = lt(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), l = lt(
      () => {
        var w;
        return (w = s.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), u = lt(() => {
      var w;
      return (w = r.value) == null ? void 0 : w.description;
    }), d = lt(
      () => s.value instanceof xn
    ), i = lt(
      () => s.value instanceof So
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: g } = W(n), p = lt(
      () => i.value ? gh : ph
    ), m = bx("colors"), h = lt(
      () => i.value ? m.blue600 : "currentColor"
    ), f = lt(() => {
      var w;
      return o((w = r.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = lt(
      () => s.value instanceof $m || s.value instanceof Vm
    );
    return (w, v) => {
      const y = fx("i18n");
      return s.value ? (Bn(), wx("div", _x, [
        gn("div", vx, [
          rt(ee(nc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        rt(ee(B), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Ye(() => [
            rt(ee(B), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Ye(() => [
                rt(ee(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Ye(() => [
                    gn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ee(z.getDir)(s.value.sourceLanguage),
                      textContent: ka(a.value)
                    }, null, 8, Sx)
                  ]),
                  _: 1
                }),
                rt(ee(k), { shrink: "" }, {
                  default: Ye(() => [
                    gn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ee(z.getDir)(s.value.sourceLanguage),
                      textContent: ka(u.value)
                    }, null, 8, yx)
                  ]),
                  _: 1
                }),
                f.value && !d.value && !_.value ? (Bn(), eo(ee(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Ye(() => [
                    dr(gn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : to("", !0),
                d.value ? (Bn(), eo(ee(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Ye(() => [
                    dr(gn("small", null, null, 512), [
                      [y, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (Bn(), eo(ee(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Ye(() => [
                    rt(ee(B), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Ye(() => [
                        rt(ee(k), { grow: "" }, {
                          default: Ye(() => [
                            gn("small", {
                              textContent: ka(ee(c))
                            }, null, 8, Cx),
                            rt(ee(gr), {
                              icon: ee(Ek),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            gn("small", {
                              textContent: ka(ee(g))
                            }, null, 8, kx)
                          ]),
                          _: 1
                        }),
                        l.value ? (Bn(), eo(ee(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Ye(() => [
                            dr(gn("small", null, null, 512), [
                              [y, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : to("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : to("", !0),
                _.value ? (Bn(), eo(ee(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: Ye(() => [
                    rt(li, {
                      icon: ee(Fs),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : to("", !0)
              ]),
              _: 1
            }),
            rt(ee(k), { shrink: "" }, {
              default: Ye(() => [
                i.value ? to("", !0) : (Bn(), eo(ee(gr), {
                  key: 0,
                  icon: ee(Eo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: v[0] || (v[0] = Dd((C) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                rt(ee(gr), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: v[1] || (v[1] = Dd((C) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : to("", !0);
    };
  }
}, $x = "suggestion_filter_topic_area", Vx = "suggestion_filter_search_result_seed", Ex = "suggestion_filter_collections", Dx = "suggestion_filter_previous_edits", Ax = "suggestion_filter_popular_articles", xh = (e) => {
  if (e.type === ze)
    return $x;
  if (e.type === nt)
    return Vx;
  if (e.id === pe || e.type === pe)
    return Ex;
  if (e.id === _t)
    return Dx;
  if (e.id === At)
    return Ax;
}, ec = (e) => {
  if (e.type === ze || e.type === pe || e.type === nt)
    return e.id;
  if (e.id === pe)
    return "all-collections";
}, Lx = window.Vue.computed, Ad = window.Vue.ref, Ld = window.Vue.watch, $h = (e, t) => {
  const o = Ad([]), s = Ad(!1), a = Lx(
    () => o.value.slice(0, 4)
  ), r = Vc(() => b(void 0, null, function* () {
    try {
      o.value = yield Vo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), l = () => {
    s.value = !0, o.value = [], r();
  };
  return Ld(t, l), Ld(e, l), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, pr = window.Vue.ref, Td = window.Vue.watch, Tx = mw.loader.require("ext.cx.articletopics"), Bx = Tx.flatMap((e) => e.topics), Px = () => {
  const e = pr(""), t = pr(!1), n = pr({ topics: [], areas: [] }), o = ue(), { pageCollections: s } = fc(), { sourceLanguageURLParameter: a } = M(), r = (d) => (d = d.toLowerCase(), Bx.filter(
    (i) => i.label.toLowerCase().includes(d)
  )), l = (d) => (d = d.toLowerCase(), s.value.filter(
    (i) => i.name.toLowerCase().includes(d)
  )), { searchResultsSlice: u } = $h(a, e);
  return Td(u, () => {
    n.value.topics = u.value.map((d) => {
      var i;
      return {
        label: d.title,
        value: d.title,
        description: d.description,
        thumbnail: {
          url: (i = d.thumbnail) == null ? void 0 : i.source
        }
      };
    });
  }), Td(e, () => b(void 0, null, function* () {
    t.value = !0, n.value.areas = [
      ...l(e.value).map((d) => ({
        label: d.name,
        value: d.name,
        description: d.description,
        icon: Fs,
        filterType: pe,
        filterId: d.name
      })),
      ...r(e.value).map((d) => ({
        label: d.label,
        value: d.label,
        description: o.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: Fs,
        filterType: ze,
        filterId: d.topicId
      }))
    ], t.value = !1;
  })), { searchInput: e, searchLoading: t, searchResults: n };
};
const te = window.Vue.unref, ct = window.Vue.createVNode, Pn = window.Vue.withCtx, Fx = window.Vue.resolveDirective, yt = window.Vue.createElementVNode, Wo = window.Vue.withDirectives, Bd = window.Vue.toDisplayString, Mx = window.Vue.createTextVNode, Nx = window.Vue.vShow, Ux = window.Vue.isRef, Pd = window.Vue.renderList, Fd = window.Vue.Fragment, Ht = window.Vue.openBlock, Fn = window.Vue.createElementBlock, Ix = window.Vue.normalizeClass, Md = window.Vue.createBlock, Nd = window.Vue.createCommentVNode, Rx = { class: "sx-suggestions-filters" }, zx = { class: "mb-0" }, Ox = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, Hx = { class: "mb-3" }, jx = { class: "px-4 pb-4 pt-7" }, qx = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, Gx = { class: "sx-suggestions-filters__group-label mb-3" }, Xx = { class: "sx-suggestions-filters__group-filters mb-3" }, Wx = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, Kx = { key: 0 }, Yx = { key: 1 }, mr = window.Vue.ref, Ud = window.Vue.computed, Jx = window.Vue.inject, Id = window.Codex.CdxButton, Qx = window.Codex.CdxIcon, Zx = window.Codex.CdxTextInput, Rd = window.Codex.CdxMenu, e8 = {
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
      [_t]: wh,
      [At]: mh,
      [pe]: Fs,
      [ze]: null,
      [nt]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r, findSelectedFilter: l } = wc(), u = He(), d = () => {
      m(), n("update:modelValue", !1);
    }, i = () => {
      u({ event_type: "suggestion_filters_close" }), d();
    }, c = () => {
      p.value && (u({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: ec(
          p.value
        )
      }), r(p.value)), d();
    }, g = mr(!1), p = mr(null), m = () => {
      p.value = null;
    }, h = (N) => {
      const T = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: xh(N),
        event_context: ec(N)
      };
      u(T), p.value = N, g.value = !0;
    }, f = (N) => p.value ? p.value.id === N.id && p.value.type === N.type : a(N), _ = Jx("breakpoints"), w = Ud(() => _.value.mobile), { getFilterProvider: v } = _c(), { searchInput: y, searchResults: C } = Px(), x = Ud(
      () => p.value || l()
    ), F = mr(null), E = (N) => {
      h({
        type: nt,
        id: N.label,
        label: N.label
      }), y.value = "";
    }, P = (N) => {
      h({
        type: N.filterType,
        id: N.filterId,
        label: N.label
      }), y.value = "";
    };
    return (N, T) => {
      const U = Fx("i18n");
      return Ht(), Md(te(st), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        animation: "fade",
        fullscreen: w.value,
        header: !1
      }, {
        default: Pn(() => [
          yt("section", Rx, [
            ct(te(B), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Pn(() => [
                ct(te(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Pn(() => [
                    ct(te(Id), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": N.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: i
                    }, {
                      default: Pn(() => [
                        ct(te(Qx), { icon: te(Eo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                ct(te(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Pn(() => [
                    Wo(yt("h5", zx, null, 512), [
                      [U, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                ct(te(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Pn(() => [
                    Wo(ct(te(Id), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: c
                    }, {
                      default: Pn(() => [
                        Mx(Bd(N.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [Nx, g.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            yt("div", Ox, [
              Wo(yt("h5", Hx, null, 512), [
                [U, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              yt("div", null, [
                ct(li, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: x.value.label,
                  icon: o[te(v)(x.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            yt("div", jx, [
              ct(te(Zx), {
                modelValue: te(y),
                "onUpdate:modelValue": T[0] || (T[0] = (j) => Ux(y) ? y.value = j : null),
                placeholder: N.$i18n("cx-sx-suggestions-filter-search-input-placeholder"),
                "input-type": "search",
                "start-icon": te(Uk),
                clearable: !!te(y)
              }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
            ]),
            te(y) ? (Ht(), Fn("div", Wx, [
              te(C).topics.length ? (Ht(), Fn("div", Kx, [
                Wo(yt("h5", null, null, 512), [
                  [U, void 0, "cx-sx-suggestions-filter-search-results-topics-label"]
                ]),
                ct(te(Rd), {
                  selected: F.value,
                  "onUpdate:selected": T[1] || (T[1] = (j) => F.value = j),
                  expanded: !0,
                  "menu-items": te(C).topics,
                  "show-thumbnail": "",
                  onMenuItemClick: E
                }, null, 8, ["selected", "menu-items"])
              ])) : Nd("", !0),
              te(C).areas.length ? (Ht(), Fn("div", Yx, [
                Wo(yt("h5", null, null, 512), [
                  [U, void 0, "cx-sx-suggestions-filter-search-results-areas-label"]
                ]),
                ct(te(Rd), {
                  selected: F.value,
                  "onUpdate:selected": T[2] || (T[2] = (j) => F.value = j),
                  expanded: !0,
                  "menu-items": te(C).areas,
                  onMenuItemClick: P
                }, null, 8, ["selected", "menu-items"])
              ])) : Nd("", !0)
            ])) : (Ht(), Fn("div", qx, [
              (Ht(!0), Fn(Fd, null, Pd(te(s), (j) => (Ht(), Fn("div", {
                key: j.id,
                class: "sx-suggestions-filters__group"
              }, [
                yt("div", Gx, Bd(j.label), 1),
                yt("div", Xx, [
                  (Ht(!0), Fn(Fd, null, Pd(j.filters, (q) => (Ht(), Md(li, {
                    key: q.id,
                    class: Ix(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                      "sx-suggestions-filters__filter--active": f(q)
                    }]),
                    icon: o[te(v)(q)],
                    content: q.label,
                    onClick: (Ge) => h(q)
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
const hr = window.Vue.unref, ba = window.Vue.openBlock, zd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const t8 = window.Vue.renderList, n8 = window.Vue.Fragment, Od = window.Vue.createElementBlock, o8 = window.Vue.normalizeClass, s8 = window.Vue.createVNode, a8 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Hd = window.Vue.ref, i8 = window.Vue.computed, jd = window.Vue.watch, r8 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ue(), n = He(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r
    } = wc(), l = Hd(!1), u = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), l.value = !0;
    }, d = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: xh(h),
        event_context: ec(h)
      };
      n(f), s(h);
    }, i = {
      [_t]: wh,
      [At]: mh,
      [pe]: Fs,
      [ze]: null
    }, { getFilterProvider: c } = _c(), g = (h) => ({
      id: h.id,
      type: h.type,
      icon: i[c(h)],
      label: h.label,
      action: d
    }), p = Hd(o());
    jd(l, (h) => {
      h || (p.value = o());
    }), jd(r, (h) => {
      h || (p.value = o());
    });
    const m = i8(() => [
      ...p.value.map(g),
      {
        id: "more",
        icon: kc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: u
      }
    ]);
    return (h, f) => hr(r) ? (ba(), zd(hr(Re), { key: 0 })) : (ba(), Od("div", a8, [
      (ba(!0), Od(n8, null, t8(m.value, (_) => (ba(), zd(li, {
        key: _.label,
        class: o8(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": hr(a)(_) }]),
        icon: _.icon,
        content: _.label,
        onClick: (w) => _.action(_)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      s8(e8, {
        modelValue: l.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, l8 = window.Vue.computed, c8 = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Hs(), n = l8(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Mn = window.Vue.computed, qd = window.Vue.ref, u8 = window.Vue.watch, d8 = window.Vuex.useStore, g8 = () => {
  const e = d8(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = mc(), r = He(), l = Mn(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = Mn(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Mn(
    () => !l.value && !u.value
  ), i = qd(0), c = qd(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, p = 4, m = Mn(
    () => a(i.value)
  ), h = Mn(
    () => s(c.value)
  ), f = () => {
    x(), N(), F(), T();
  }, {
    fetchNextSectionSuggestionsSlice: _,
    fetchNextPageSuggestionsSlice: w
  } = vc(), v = (U) => U.length === g, y = Mn(
    () => v(h.value)
  ), C = Mn(
    () => v(m.value)
  ), x = () => {
    const U = (i.value + 1) % p, j = v(
      a(U)
    );
    (!C.value || !j) && _();
  }, F = () => {
    const U = (c.value + 1) % p, j = v(
      s(U)
    );
    (!y.value || !j) && w();
  }, E = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", U), x();
  }, P = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", U), F();
  }, N = () => i.value = (i.value + 1) % p, T = () => c.value = (c.value + 1) % p;
  return u8(
    o,
    () => {
      c.value = 0, F(), i.value = 0, x();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: h,
    currentSectionSuggestionsSlice: m,
    discardPageSuggestion: P,
    discardSectionSuggestion: E,
    onSuggestionRefresh: f,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    showRefreshButton: d,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: C
  };
}, p8 = window.Vuex.useStore, Dc = () => {
  const e = p8(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = vc(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), s = (d) => b(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield se.markFavorite(i, c, g);
    const p = new So({
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
      ), t()), yield se.markFavorite(
        d,
        i,
        c
      );
      const m = new So({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), se.unmarkFavorite(d))
  };
}, m8 = "suggestion_no_seed", h8 = "suggestion_recent_edit", f8 = "suggestion_topic_area", w8 = "suggestion_search_result_seed", _8 = "suggestion_featured", v8 = "suggestion_collections", S8 = () => {
  const { currentSuggestionFilters: e } = M(), { defaultSeedsFetched: t } = ah();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === _t)
      return t.value ? m8 : h8;
    if (n === ze)
      return f8;
    if (n === nt)
      return w8;
    if (o === At)
      return _8;
    if (o === pe || n === pe)
      return v8;
    throw new Error("Event source cannot be empty");
  };
};
const Gd = window.Vue.toDisplayString, xa = window.Vue.createElementVNode, no = window.Vue.createVNode, ne = window.Vue.unref, Ko = window.Vue.withCtx, y8 = window.Vue.resolveDirective, fr = window.Vue.withDirectives, Xd = window.Vue.renderList, Wd = window.Vue.Fragment, pn = window.Vue.openBlock, wr = window.Vue.createElementBlock, Yo = window.Vue.createBlock, _r = window.Vue.createCommentVNode, C8 = window.Vue.createTextVNode, k8 = window.Vue.vShow, b8 = ["textContent"], x8 = { class: "cx-translation-list__division-title ma-0 pa-4" }, $8 = { class: "cx-translation-list__division-title ma-0 pa-4" }, V8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, E8 = window.Vue.ref, D8 = window.Codex.CdxButton, A8 = window.Codex.CdxIcon, L8 = {
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
    } = M(), { supportedLanguageCodes: s, availableTargetLanguages: a } = c8(), r = lh(), l = (T) => r(T, n.value), u = (T) => r(t.value, T), d = S8(), i = Ks(), c = (T) => {
      i(
        T.sourceTitle,
        T.sourceLanguage,
        T.targetLanguage,
        d(),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: _,
      sectionSuggestionsLoading: w,
      showRefreshButton: v,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: C
    } = g8(), x = E8(null), F = He(), E = () => {
      F({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), x.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: P, markFavoritePageSuggestion: N } = Dc();
    return (T, U) => {
      const j = y8("i18n");
      return fr((pn(), wr("div", null, [
        no(ne(Ie), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: Ko(() => [
            xa("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: Gd(T.$i18n("cx-suggestionlist-title"))
            }, null, 8, b8),
            no(r8)
          ]),
          default: Ko(() => [
            no(Ec, {
              "source-languages": ne(s),
              "target-languages": ne(a),
              "selected-source-language": ne(t),
              "selected-target-language": ne(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        no(ne(Ie), {
          ref_key: "pageSuggestionsList",
          ref: x,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: Ko(() => [
            fr(xa("h5", x8, null, 512), [
              [j, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (pn(!0), wr(Wd, null, Xd(ne(g), (q, Ge) => (pn(), Yo(Zl, {
              key: `page-suggestion-${Ge}`,
              suggestion: q,
              onClose: (Te) => ne(m)(q),
              onClick: (Te) => c(q),
              onBookmark: (Te) => ne(N)(q)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ne(_) && !ne(y) ? (pn(), Yo(ne(Re), { key: 0 })) : _r("", !0)
          ]),
          _: 1
        }, 512),
        no(ne(Ie), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: Ko(() => [
            fr(xa("h5", $8, null, 512), [
              [j, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (pn(!0), wr(Wd, null, Xd(ne(p), (q, Ge) => (pn(), Yo(Zl, {
              key: `section-suggestion-${Ge}`,
              class: "ma-0",
              suggestion: q,
              onClose: (Te) => ne(h)(q),
              onClick: (Te) => c(q),
              onBookmark: (Te) => ne(P)(q)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ne(w) && !ne(C) ? (pn(), Yo(ne(Re), { key: 0 })) : _r("", !0)
          ]),
          _: 1
        }),
        xa("div", V8, [
          ne(v) ? (pn(), Yo(ne(D8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: E
          }, {
            default: Ko(() => [
              no(ne(A8), {
                class: "me-1",
                icon: ne(fh)
              }, null, 8, ["icon"]),
              C8(" " + Gd(T.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : _r("", !0)
        ])
      ], 512)), [
        [k8, e.active]
      ]);
    };
  }
}, T8 = window.Vue.resolveDirective, B8 = window.Vue.createElementVNode, P8 = window.Vue.withDirectives, F8 = window.Vue.renderList, M8 = window.Vue.Fragment, vr = window.Vue.openBlock, N8 = window.Vue.createElementBlock, Kd = window.Vue.unref, Yd = window.Vue.createBlock, Jd = window.Vue.withCtx, U8 = window.Vue.createCommentVNode, I8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, R8 = window.Vue.computed, z8 = window.Vuex.useStore, O8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = z8(), n = R8(() => t.state.suggestions.favorites || []), o = Ks(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Dc();
    return (r, l) => {
      const u = T8("i18n");
      return n.value.length ? (vr(), Yd(Kd(Ie), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Jd(() => [
          P8(B8("h3", I8, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Jd(() => [
          (vr(!0), N8(M8, null, F8(n.value, (d, i) => (vr(), Yd(Zl, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => s(d),
            onBookmark: (c) => Kd(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : U8("", !0);
    };
  }
};
const H8 = window.Vue.resolveDirective, Jo = window.Vue.createElementVNode, j8 = window.Vue.withDirectives, q8 = window.Vue.renderList, G8 = window.Vue.Fragment, Qd = window.Vue.openBlock, Zd = window.Vue.createElementBlock, X8 = window.Vue.unref, W8 = window.Vue.createVNode, K8 = window.Vue.toDisplayString, Y8 = { class: "cx-help-panel pa-4" }, J8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, Q8 = ["href"], Z8 = ["textContent"], e2 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ue(), n = [
      {
        icon: zw,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: bw,
        label: t.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Ow,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ];
    return (o, s) => {
      const a = H8("i18n");
      return Qd(), Zd("div", Y8, [
        j8(Jo("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Jo("ul", J8, [
          (Qd(), Zd(G8, null, q8(n, (r, l) => Jo("li", {
            key: l,
            class: "mt-4"
          }, [
            Jo("a", {
              href: r.href,
              target: "_blank"
            }, [
              W8(X8(_e), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Jo("span", {
                textContent: K8(r.label)
              }, null, 8, Z8)
            ], 8, Q8)
          ])), 64))
        ])
      ]);
    };
  }
};
const t2 = window.Vue.resolveDirective, oo = window.Vue.createElementVNode, Sr = window.Vue.withDirectives, eg = window.Vue.toDisplayString, yr = window.Vue.unref, Cr = window.Vue.withCtx, kr = window.Vue.createVNode, n2 = window.Vue.openBlock, o2 = window.Vue.createElementBlock, s2 = { class: "cx-stats-panel pa-4" }, a2 = ["textContent"], i2 = { class: "cx-stats-panel__monthly-stats-label" }, r2 = ["textContent"], l2 = { class: "cx-stats-panel__total-stats-label" }, c2 = window.Vue.ref, tg = window.Vue.computed, u2 = window.Vue.watch, d2 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = tg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = tg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = c2(null);
    return u2(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (y, C) => Math.max(y, r[C].delta),
          0
        ), i = u.map((y) => r[y].delta), c = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let _ = p;
        const w = Math.floor(
          (c - p) / (m + p)
        ), v = i.slice(
          Math.max(i.length - w, 0)
        );
        v.forEach((y, C) => {
          C === v.length - 1 && (l.fillStyle = "#36c");
          const x = h - y * f;
          l.fillRect(_, x, m, y * f), _ += m + p;
        });
      }
    ), (r, l) => {
      const u = t2("i18n");
      return n2(), o2("div", s2, [
        Sr(oo("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        kr(yr(B), null, {
          default: Cr(() => [
            kr(yr(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: Cr(() => [
                oo("h3", {
                  textContent: eg(s.value)
                }, null, 8, a2),
                Sr(oo("h5", i2, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            kr(yr(k), { class: "cx-stats-panel__total-stats" }, {
              default: Cr(() => [
                oo("h3", {
                  textContent: eg(o.value)
                }, null, 8, r2),
                Sr(oo("h5", l2, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        oo("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Vh = () => {
  const e = He();
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
const g2 = window.Vue.renderSlot, p2 = window.Vue.unref, m2 = window.Vue.createVNode, h2 = window.Vue.createElementVNode, f2 = window.Vue.openBlock, w2 = window.Vue.createElementBlock, _2 = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, v2 = { class: "col-12 ma-0 pa-0" }, S2 = {
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
    const n = t, o = Vh(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (f2(), w2("footer", _2, [
      h2("div", v2, [
        g2(a.$slots, "default", {}, () => [
          m2(p2(Ms), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, y2 = window.Vuex.useStore;
let $a = [];
const Eh = () => {
  const e = y2();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || $a.includes(o) ? Promise.resolve() : ($a.push(o), Vo.fetchLanguageTitles(t, n).then((s) => {
      $a = $a.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, C2 = window.Vuex.useStore, Dh = () => {
  const e = C2(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), { isDefaultFilter: r } = fm(), { previousRoute: l } = W(e), u = He(), d = () => {
    const g = {
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
}, k2 = () => {
  const e = Ks(), t = Eh(), { logDashboardOpenEvent: n, getEventSource: o } = Dh(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = M();
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
}, b2 = window.Vuex.useStore, _i = () => {
  const e = b2(), t = (o) => b(void 0, null, function* () {
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
        titles: l.map((u) => u.sourceTitle)
      }), l.forEach((u) => {
        const { targetLanguage: d, targetTitle: i } = u, c = !!e.getters["mediawiki/getPage"](
          d,
          i
        );
        i && !c && e.commit(
          "mediawiki/addPage",
          new $o({ title: i, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, x2 = window.Vuex.useStore, $2 = () => {
  const e = x2();
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
}, V2 = () => {
  const e = k2(), { fetchAllTranslations: t } = _i(), n = Sc(), o = $2(), { fetchPageCollections: s } = fc(), { pageURLParameter: a, sectionURLParameter: r, draftURLParameter: l } = M(), { logDashboardOpenEvent: u } = Dh();
  return () => b(void 0, null, function* () {
    if (s(), yield rh()(), a.value) {
      e({
        pageTitle: a.value,
        isDraftTranslation: l.value,
        sectionTitle: r.value
      });
      return;
    }
    u();
    try {
      yield o();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield t(), n();
  });
}, ng = window.Vue.computed, E2 = window.Vue.ref, D2 = window.Vue.watch, A2 = window.Vue.watchEffect, L2 = window.Vuex.useStore, T2 = ["suggestions", "draft", "published"], B2 = () => {
  const e = L2(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = M(), o = E2(null);
  if (T2.includes(t.value))
    o.value = t.value;
  else {
    const s = ng(
      () => e.state.translator.translationsLoaded.draft
    ), a = ng(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", D2(s, (r) => {
      r && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return A2(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, P2 = window.Vue.computed, F2 = () => {
  const e = ue();
  return P2(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Vw,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: ui,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: $w,
        type: "text"
      }
    }
  ]);
};
const de = window.Vue.unref, Ce = window.Vue.createVNode, M2 = window.Vue.toDisplayString, N2 = window.Vue.createTextVNode, jt = window.Vue.withCtx, br = window.Vue.openBlock, og = window.Vue.createBlock, sg = window.Vue.createCommentVNode, U2 = window.Vue.vShow, I2 = window.Vue.withDirectives, R2 = window.Vue.isRef, z2 = window.Vue.createElementBlock, O2 = window.Vue.computed, H2 = window.Vuex.useStore, j2 = window.Codex.CdxButton, q2 = window.Codex.CdxIcon, G2 = {
  __name: "CXDashboard",
  setup(e) {
    const t = Se(), n = He(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    V2()();
    const a = H2();
    a.dispatch("translator/fetchTranslatorStats");
    const r = O2(() => a.state.translator.translatorStats), l = B2(), u = F2(), d = Vh(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (br(), z2("div", null, [
      Ce(de(B), { class: "ma-0 py-4" }, {
        default: jt(() => [
          Ce(de(j2), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: jt(() => [
              Ce(de(q2), {
                class: "me-1",
                icon: de(Kl)
              }, null, 8, ["icon"]),
              N2(" " + M2(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Ce(de(B), {
        class: "ma-0",
        align: "start"
      }, {
        default: jt(() => [
          c.$mwui.breakpoint.tabletAndUp ? (br(), og(de(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: jt(() => [
              Ce(de(Ms), {
                id: "dashboard-list-selector--desktop",
                items: de(u),
                active: de(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : sg("", !0),
          Ce(de(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: jt(() => [
              I2(Ce(O8, null, null, 512), [
                [U2, de(l) === "suggestions"]
              ]),
              Ce(L8, {
                active: de(l) === "suggestions"
              }, null, 8, ["active"]),
              Ce($d, {
                "translation-status": "draft",
                "active-status": de(l)
              }, null, 8, ["active-status"]),
              Ce($d, {
                "translation-status": "published",
                "active-status": de(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ce(de(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: jt(() => [
              Ce(de(B), {
                class: "ma-0",
                align: "start"
              }, {
                default: jt(() => [
                  Ce(de(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: jt(() => [
                      Ce(d2, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ce(de(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: jt(() => [
                      Ce(e2)
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
      c.$mwui.breakpoint.mobile ? (br(), og(S2, {
        key: 0,
        active: de(l),
        "onUpdate:active": g[0] || (g[0] = (p) => R2(l) ? l.value = p : null),
        items: de(u)
      }, null, 8, ["active", "items"])) : sg("", !0)
    ]));
  }
}, X2 = {
  name: "DashboardView",
  components: { CxDashboard: G2 }
}, W2 = window.Vue.resolveComponent, K2 = window.Vue.createVNode, Y2 = window.Vue.openBlock, J2 = window.Vue.createElementBlock, Q2 = { class: "cx-translation-dashboard" };
function Z2(e, t, n, o, s, a) {
  const r = W2("cx-dashboard");
  return Y2(), J2("main", Q2, [
    K2(r, { class: "mb-4 pb-12" })
  ]);
}
const ag = /* @__PURE__ */ Q(X2, [["render", Z2]]), so = window.Vue.computed, e$ = () => {
  const { sectionSuggestion: e } = je(), { targetLanguageURLParameter: t } = M(), { currentTranslation: n } = sn(), o = so(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = so(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = so(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = on(), u = so(() => r ? G.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = so(() => {
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
  }), c = so(
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
}, Ah = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function t$(e) {
  return e.$el = $(e), e;
}
function n$(e, t, n, o) {
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
function o$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function s$(e, t) {
  return b(this, null, function* () {
    yield Ac(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = t$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const a$ = window.Vue.computed, i$ = window.Vue.onMounted, r$ = window.Vue.ref;
function l$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const c$ = {
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
    const n = r$(null);
    let o = null;
    const s = a$(() => o.getHtml()), a = () => {
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
    return i$(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = l$;
      const i = yield s$(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = n$(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = o$, o.focus();
    })), { sxeditor: n };
  }
}, tc = window.Vue.createElementVNode, u$ = window.Vue.openBlock, d$ = window.Vue.createElementBlock, g$ = ["lang", "dir"], p$ = /* @__PURE__ */ tc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ tc("div", { class: "toolbar" })
], -1), m$ = ["lang", "dir"];
function h$(e, t, n, o, s, a) {
  return u$(), d$("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    p$,
    tc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, m$)
  ], 8, g$);
}
const f$ = /* @__PURE__ */ Q(c$, [["render", h$]]);
function Ac() {
  return mw.loader.using("mw.cx3.ve");
}
const w$ = window.Vuex.useStore, Lh = () => {
  const e = w$();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Ac(), new Promise((s) => {
      setTimeout(() => {
        const a = Em.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, _$ = window.Vuex.useStore, Lc = () => {
  const e = _$();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield Vo.fetchPageContent(
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
}, v$ = window.Vuex.useStore, Tc = () => {
  const e = v$(), { currentSourcePage: t } = qe(), n = Lh(), o = Lc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l
  } = M(), u = (c, g) => b(void 0, null, function* () {
    c() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      r.value,
      l.value
    ), yield n(
      a.value,
      l.value
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), g();
  });
  return {
    selectPageSectionByIndex: (c) => {
      const g = () => {
        var m;
        return (m = t.value.sections) == null ? void 0 : m[c];
      };
      return u(g, () => {
        const m = g();
        c === 0 ? m.originalTitle = t.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => t.value.getSectionByTitle(c), () => {
      s(c);
    })
  };
}, Bc = () => (e, t, n, o = {}) => {
  G.setCXToken(e, t, n), location.href = G.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, S$ = (e, t, n, o) => b(void 0, null, function* () {
  var l, u, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Am(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), y$ = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, C$ = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return S$(e, t, n, o);
  y$(e, t);
}), k$ = (e, t, n, o) => {
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
        const d = C$(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, b$ = { restoreCorporaDraft: k$ }, Qo = window.Vue.computed, x$ = window.Vuex.useStore, Y = () => {
  const e = x$(), { currentSourcePage: t, currentTargetPage: n } = qe(), { currentMTProvider: o } = W(e), { sectionURLParameter: s } = M(), a = Qo(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Qo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Qo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Qo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = Qo(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, $$ = window.Vuex.useStore, Pc = () => {
  const e = He(), t = $$(), n = Se(), { currentSourcePage: o } = qe(), { sourceLanguage: s, targetLanguage: a } = W(t), r = qC(), l = Lh(), { isDesktop: u } = Os(), d = Bc(), i = Lc(), { sourceSection: c } = Y();
  return (g) => b(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: p,
      targetLanguage: m,
      sourceTitle: h,
      targetTitle: f,
      pageRevision: _,
      isLeadSectionTranslation: w
    } = g;
    if (u.value) {
      const C = {};
      w || (C.sourcesection = g.sourceSectionTitle), d(
        s.value,
        a.value,
        h,
        C
      );
      return;
    }
    G.unsetCXToken(
      p,
      m,
      h
    );
    const { setTranslationURLParams: v } = M();
    v(g), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== m) && r(g), t.dispatch("application/getCXServerToken"), e({
      event_type: "dashboard_translation_continue",
      translation_id: g.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: h,
      translation_source_section: g.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: f,
      translation_target_section: g.targetSectionTitle,
      translation_type: w ? "article" : "section"
    }), yield i(
      s.value,
      a.value,
      h,
      _
    ), yield l(s.value, h), g.restored || (yield ot.fetchTranslationUnits(g.translationId).then(
      (C) => b$.restoreCorporaDraft(
        o.value,
        f,
        a,
        C
      )
    ).then(() => g.restored = !0));
    let y;
    w ? (c.value.originalTitle = h, y = f) : y = g.targetSectionTitle, c.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, V$ = window.Vue.ref, E$ = window.Vuex.useStore, D$ = () => {
  const e = Se(), t = E$(), { isDesktop: n } = Os(), { logDashboardTranslationStartEvent: o } = $c(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = M(), { sourceLanguage: r, targetLanguage: l } = W(t), { targetPageExists: u } = on(), { selectPageSectionByIndex: d, selectPageSectionByTitle: i } = Tc(), c = Bc(), g = () => b(void 0, null, function* () {
    n.value ? (o(), c(
      r.value,
      l.value,
      s.value,
      { sourcesection: a.value }
    )) : (yield i(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), p = Pc(), m = V$(!1), { currentTranslation: h } = sn(), f = () => {
    h.value ? h.value.isArticleTranslation ? m.value = !0 : p(h.value) : a.value ? g() : u.value ? e.push({ name: "sx-section-selector" }) : _();
  }, _ = () => b(void 0, null, function* () {
    o(), n.value ? c(
      r.value,
      l.value,
      s.value
    ) : (d(0), Ah() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: _,
    handlePrimaryButtonClick: f,
    translationConfirmationDialogOn: m
  };
};
const A$ = window.Vue.resolveDirective, ig = window.Vue.createElementVNode, rg = window.Vue.withDirectives, L$ = window.Vue.unref, T$ = window.Vue.withCtx, B$ = window.Vue.openBlock, P$ = window.Vue.createBlock, F$ = {
  href: "",
  target: "_blank"
}, M$ = window.Codex.CdxDialog, N$ = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = ue(), r = {
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
      const c = A$("i18n");
      return B$(), P$(L$(M$), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": d.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => s(g)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (g) => s(!1))
      }, {
        default: T$(() => [
          rg(ig("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          rg(ig("a", F$, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const re = window.Vue.unref, U$ = window.Vue.resolveDirective, Zo = window.Vue.createElementVNode, lg = window.Vue.withDirectives, es = window.Vue.toDisplayString, ts = window.Vue.openBlock, xr = window.Vue.createElementBlock, $r = window.Vue.createCommentVNode, Je = window.Vue.createVNode, ut = window.Vue.withCtx, Vr = window.Vue.createTextVNode, I$ = window.Vue.withModifiers, cg = window.Vue.createBlock, R$ = window.Vue.Fragment, z$ = { class: "sx-translation-confirmer-body pb-4" }, O$ = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, H$ = ["textContent"], j$ = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, q$ = ["href"], G$ = ["textContent"], Er = window.Vue.computed, X$ = window.Vue.inject, ug = window.Vue.ref, W$ = window.Vue.watchEffect, K$ = window.Vuex.useStore, Dr = window.Codex.CdxButton, Y$ = window.Codex.CdxIcon, J$ = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Se(), o = K$();
    X$("colors");
    const { sectionSuggestion: s } = je(), { targetLanguageAutonym: a } = W(o), { sectionURLParameter: r } = M(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: u,
      translationConfirmationDialogOn: d
    } = D$(), i = ug(!1), c = ug(null), g = () => b(this, null, function* () {
      const T = yield ot.checkUnreviewedTranslations();
      T !== !0 && (i.value = !0, c.value = T.targetUrl);
    }), p = () => b(this, null, function* () {
      yield g(), !i.value && l();
    }), m = () => b(this, null, function* () {
      yield g(), !i.value && u();
    }), h = t;
    W$(() => {
      d.value && (h("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessageArgs: f,
      getActionButtonLabel: _,
      isProgressiveButton: w,
      targetArticlePath: v
    } = e$(), y = ue(), C = Er(
      () => y.i18n(_(!!r.value))
    ), { isDesktop: x } = Os(), F = Er(
      () => y.i18n(...f.value)
    ), E = () => b(this, null, function* () {
      yield g(), !i.value && n.push({ name: "sx-section-selector" });
    }), P = Er(() => {
      var T, U;
      return r.value && !!((U = (T = s.value) == null ? void 0 : T.sourceSections) != null && U.length);
    }), { targetPageExists: N } = on();
    return (T, U) => {
      const j = U$("i18n");
      return ts(), xr(R$, null, [
        Zo("section", z$, [
          re(r) ? (ts(), xr("section", O$, [
            lg(Zo("h6", null, null, 512), [
              [j, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Zo("h5", {
              class: "ma-0",
              textContent: es(re(r))
            }, null, 8, H$)
          ])) : re(N) ? (ts(), xr("section", j$, [
            Je(re(B), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: ut(() => [
                lg(Je(re(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [j, [re(a)], "cx-sx-existing-translation-status"]
                ]),
                Je(re(k), { shrink: "" }, {
                  default: ut(() => [
                    Zo("a", {
                      href: re(v),
                      target: "_blank"
                    }, [
                      Je(re(Y$), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: re(bc)
                      }, null, 8, ["icon"])
                    ], 8, q$)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Je(re(B), { class: "ma-0" }, {
              default: ut(() => [
                Je(re(k), null, {
                  default: ut(() => [
                    Zo("span", {
                      textContent: es(F.value)
                    }, null, 8, G$)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : $r("", !0),
          Je(re(B), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: ut(() => [
              P.value ? (ts(), cg(re(k), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: ut(() => [
                  Je(re(Dr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: I$(E, ["stop"])
                  }, {
                    default: ut(() => [
                      Vr(es(T.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : $r("", !0),
              re(N) && re(x) ? (ts(), cg(re(k), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: ut(() => [
                  Je(re(Dr), {
                    size: "large",
                    onClick: p
                  }, {
                    default: ut(() => [
                      Vr(es(T.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : $r("", !0),
              Je(re(k), { shrink: "" }, {
                default: ut(() => [
                  Je(re(Dr), {
                    weight: "primary",
                    size: "large",
                    action: re(w) ? "progressive" : "default",
                    onClick: m
                  }, {
                    default: ut(() => [
                      Vr(es(C.value), 1)
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
        Je(N$, {
          modelValue: i.value,
          "onUpdate:modelValue": U[0] || (U[0] = (q) => i.value = q),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const dg = window.Vue.unref, Q$ = window.Vue.openBlock, Z$ = window.Vue.createBlock, gg = window.Vue.computed, e4 = window.Vuex.useStore, Th = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Hs();
    e4();
    const {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = M(), { currentLanguageTitleGroup: a } = on(), r = gg(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((g) => g.lang)) || [];
      }
    ), l = gg(
      () => n.value || t.value
    ), u = XC(), d = (c) => u(c, s.value), i = (c) => u(o.value, c);
    return (c, g) => (Q$(), Z$(Ec, {
      class: "sx-article-language-selector",
      "source-languages": r.value,
      "target-languages": l.value,
      "selected-source-language": dg(o),
      "selected-target-language": dg(s),
      "onUpdate:selectedSourceLanguage": d,
      "onUpdate:selectedTargetLanguage": i
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const ke = window.Vue.unref, Ar = window.Vue.toDisplayString, qt = window.Vue.createElementVNode, Ct = window.Vue.createVNode, ao = window.Vue.withCtx, t4 = window.Vue.resolveDirective, n4 = window.Vue.withDirectives, o4 = window.Vue.normalizeClass, s4 = window.Vue.openBlock, a4 = window.Vue.createBlock, i4 = ["textContent"], r4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, l4 = ["textContent"], c4 = { class: "pe-3" }, u4 = ["textContent"], d4 = window.Codex.CdxButton, ns = window.Codex.CdxIcon, Gt = window.Vue.computed, g4 = window.Vuex.useStore, p4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = g4(), n = ue(), { currentSourcePage: o } = qe(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = M(), l = Gt(() => t.state.suggestions.favorites || []), u = Gt(
      () => l.value.some(
        (x) => r.value === x.title && s.value === x.sourceLanguage && a.value === x.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: i } = Dc(), { translationSizeMessageArgs: c } = bh(), g = () => d(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new So({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Gt(
      () => u.value ? gh : ph
    ), h = Gt(
      () => u.value ? p : g
    ), f = Gt(
      () => G.getPageUrl(s.value || "", r.value || "")
    ), _ = Gt(() => {
      var x;
      return (x = o.value) == null ? void 0 : x.langLinksCount;
    }), w = (x) => {
      const F = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let E = 0; E < F.length; E++)
        if (x >= F[E].value)
          return (x / F[E].value).toFixed(1).replace(/\.0$/, "") + F[E].suffix;
      return x.toString();
    }, v = Gt(() => {
      var F;
      const x = Object.values(((F = o.value) == null ? void 0 : F.pageviews) || {}).reduce(
        (E, P) => E + P,
        0
      );
      return w(x);
    }), y = Gt(() => c.value ? n.i18n(...c.value) : ""), C = Gt(() => c.value ? c.value[2] < 15 : !1);
    return (x, F) => {
      const E = t4("i18n");
      return s4(), a4(ke(B), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: ao(() => [
          Ct(ke(k), null, {
            default: ao(() => [
              Ct(ke(B), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: ao(() => [
                  Ct(ke(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: ao(() => [
                      qt("h5", {
                        class: "ma-0 me-1",
                        textContent: Ar(ke(r))
                      }, null, 8, i4),
                      Ct(ke(ns), {
                        size: "x-small",
                        icon: ke(bc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Ct(ke(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: ao(() => [
                      Ct(ke(d4), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": x.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: ao(() => [
                          Ct(ke(ns), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              qt("div", r4, [
                qt("div", null, [
                  qt("span", null, [
                    Ct(ke(ns), {
                      icon: ke(hh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    qt("span", {
                      class: "pe-3",
                      textContent: Ar(_.value)
                    }, null, 8, l4)
                  ]),
                  qt("span", null, [
                    Ct(ke(ns), {
                      icon: ke(Ak),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    n4(qt("span", c4, null, 512), [
                      [E, [v.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                qt("span", {
                  class: o4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": C.value
                  }])
                }, [
                  Ct(ke(ns), {
                    icon: ke(Tk),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  qt("span", {
                    textContent: Ar(y.value)
                  }, null, 8, u4)
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
const m4 = window.Vue.resolveDirective, Nn = window.Vue.createElementVNode, Va = window.Vue.withDirectives, h4 = window.Vue.toDisplayString, f4 = window.Vue.createTextVNode, Lr = window.Vue.unref, Tr = window.Vue.withCtx, Br = window.Vue.openBlock, Pr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const w4 = { class: "pa-4" }, _4 = { class: "flex pt-2" }, v4 = window.Codex.CdxButton, S4 = window.Vue.ref, y4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Pc(), a = S4(!1), { currentTranslation: r } = sn(), l = () => b(this, null, function* () {
      a.value = !0;
      let u = !1;
      try {
        u = yield ot.splitTranslation(
          r.value.translationId
        );
      } catch (d) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          d
        );
      }
      a.value = !1, u && (s(r.value), o());
    });
    return (u, d) => {
      const i = m4("i18n");
      return Br(), Pr(Lr(st), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Tr(() => [
          Nn("div", _4, [
            a.value ? (Br(), Pr(Lr(Re), { key: 1 })) : (Br(), Pr(Lr(v4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: Tr(() => [
                f4(h4(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Tr(() => [
          Nn("div", w4, [
            Va(Nn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Va(Nn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Nn("p", null, [
              Va(Nn("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Va(Nn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const pg = window.Vue.resolveDirective, Ea = window.Vue.createElementVNode, mg = window.Vue.withDirectives, mn = window.Vue.unref, Da = window.Vue.withCtx, Xt = window.Vue.createVNode, Fr = window.Vue.openBlock, hg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const C4 = window.Vue.createBlock, k4 = { class: "sx-translation-confirmer" }, b4 = { class: "mb-0" }, x4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, $4 = ["src"], V4 = { class: "ma-3" }, E4 = window.Vue.computed, D4 = window.Vue.ref, A4 = window.Vuex.useStore, L4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = A4(), { currentSourcePage: n } = qe(), { previousRoute: o } = W(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      setPageURLParam: u
    } = M(), d = E4(
      () => {
        var f, _;
        return (_ = (f = n.value) == null ? void 0 : f.image) == null ? void 0 : _.source;
      }
    ), { fetchTranslationsByStatus: i } = _i(), c = Eh(), g = yc();
    i("draft"), l.value && g(
      s.value,
      a.value,
      r.value
    ), c(s.value, r.value), Ac(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const p = Se(), m = () => {
      u(null), p.push({ name: o.value });
    }, h = D4(!1);
    return (f, _) => {
      const w = pg("i18n"), v = pg("i18n-html");
      return Fr(), hg("section", k4, [
        Xt(mn(B), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Da(() => [
            Xt(mn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Da(() => [
                mg(Ea("h5", b4, null, 512), [
                  [w, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Xt(mn(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Da(() => [
                Xt(mn(fe), {
                  class: "pa-0",
                  type: "icon",
                  icon: mn(Ns),
                  "icon-size": 20,
                  onClick: m
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ea("div", x4, [
          d.value ? (Fr(), hg("img", {
            key: 0,
            src: d.value
          }, null, 8, $4)) : (Fr(), C4(mn(_e), {
            key: 1,
            size: "120",
            icon: mn(lm),
            "icon-color": f.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Xt(p4),
        Xt(Th),
        Xt(J$, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (y) => h.value = !0)
        }),
        Xt(mn(B), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Da(() => [
            Ea("p", V4, [
              mg(Ea("small", null, null, 512), [
                [v, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Xt(y4, {
          modelValue: h.value,
          "onUpdate:modelValue": _[1] || (_[1] = (y) => h.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const T4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: L4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, B4 = window.Vue.resolveComponent, P4 = window.Vue.createVNode, F4 = window.Vue.normalizeClass, M4 = window.Vue.openBlock, N4 = window.Vue.createElementBlock;
function U4(e, t, n, o, s, a) {
  const r = B4("sx-translation-confirmer");
  return M4(), N4("main", {
    class: F4(["sx-translation-confirmer-view", a.classes])
  }, [
    P4(r)
  ], 2);
}
const I4 = /* @__PURE__ */ Q(T4, [["render", U4]]);
const R4 = window.Vue.toDisplayString, fg = window.Vue.unref, z4 = window.Vue.createVNode, O4 = window.Vue.createTextVNode, H4 = window.Vue.createElementVNode, j4 = window.Vue.openBlock, q4 = window.Vue.createElementBlock, G4 = { class: "sx-section-selector-view-article-item ma-0" }, X4 = ["href"], W4 = window.Codex.CdxIcon, K4 = {
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
    return (t, n) => (j4(), q4("li", G4, [
      H4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        O4(R4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        z4(fg(W4), {
          size: "x-small",
          icon: fg(bc)
        }, null, 8, ["icon"])
      ], 8, X4)
    ]));
  }
};
const Y4 = window.Vue.resolveDirective, Aa = window.Vue.createElementVNode, Mr = window.Vue.withDirectives, Un = window.Vue.unref, J4 = window.Vue.toDisplayString, La = window.Vue.withCtx, os = window.Vue.createVNode, Q4 = window.Vue.openBlock, Z4 = window.Vue.createElementBlock, eV = { class: "sx-section-selector__header pa-4" }, tV = { class: "sx-section-selector__header-text ma-0" }, nV = ["textContent"], oV = { class: "pt-0 ma-0" }, sV = { class: "ma-0" }, aV = window.Codex.CdxButton, iV = window.Codex.CdxIcon, rV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = je();
    return (n, o) => {
      const s = Y4("i18n");
      return Q4(), Z4("div", eV, [
        os(Un(B), { class: "ma-0 pb-3" }, {
          default: La(() => [
            os(Un(k), null, {
              default: La(() => {
                var a;
                return [
                  Mr(Aa("h6", tV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Aa("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: J4((a = Un(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, nV)
                ];
              }),
              _: 1
            }),
            os(Un(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: La(() => [
                os(Un(aV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: La(() => [
                    os(Un(iV), { icon: Un(Eo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Mr(Aa("h4", oV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Mr(Aa("p", sV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, lV = window.Vue.renderList, cV = window.Vue.Fragment, Nr = window.Vue.openBlock, wg = window.Vue.createElementBlock, uV = window.Vue.renderSlot, Ta = window.Vue.unref, _g = window.Vue.createVNode, vg = window.Vue.withCtx, dV = window.Vue.createBlock, gV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, pV = window.Codex.CdxButton, mV = window.Codex.CdxIcon, Bh = {
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
    return (t, n) => (Nr(), wg("ul", gV, [
      (Nr(!0), wg(cV, null, lV(e.sections, (o) => (Nr(), dV(Ta(B), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: vg(() => [
          _g(Ta(pV), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: vg(() => [
              uV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              _g(Ta(mV), { icon: Ta(Ws) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, hV = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const fV = window.Vue.resolveDirective, Ba = window.Vue.createElementVNode, Ur = window.Vue.withDirectives, dt = window.Vue.unref, Sg = window.Vue.toDisplayString, io = window.Vue.withCtx, Ir = window.Vue.openBlock, yg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ss = window.Vue.createVNode, wV = window.Vue.createTextVNode, _V = window.Vue.createElementBlock, vV = { class: "sx-section-selector__missing-sections py-2" }, SV = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, yV = ["lang", "dir", "textContent"], Cg = window.Vue.computed, CV = window.Codex.CdxButton, kV = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = je(), n = Cg(
      () => {
        var s;
        return z.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Cg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = fV("i18n");
      return Ir(), _V("section", vV, [
        Ur(Ba("h4", SV, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Ir(), yg(dt(B), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: io(() => [
            ss(dt(k), {
              class: "py-6 justify-center",
              innerHTML: dt(hV)
            }, null, 8, ["innerHTML"]),
            ss(dt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: io(() => [
                Ur(Ba("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            ss(dt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: io(() => [
                Ur(Ba("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            ss(dt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: io(() => [
                ss(dt(CV), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: io(() => [
                    wV(Sg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Ir(), yg(Bh, {
          key: 0,
          sections: dt(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: io(({ sourceSection: l }) => {
            var u, d;
            return [
              Ba("h5", {
                class: "ma-0",
                lang: (u = dt(t)) == null ? void 0 : u.sourceLanguage,
                dir: dt(z.getDir)((d = dt(t)) == null ? void 0 : d.sourceLanguage),
                textContent: Sg(l)
              }, null, 8, yV)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const bV = window.Vue.resolveDirective, Pa = window.Vue.createElementVNode, xV = window.Vue.withDirectives, In = window.Vue.unref, kg = window.Vue.toDisplayString, $V = window.Vue.withCtx, VV = window.Vue.createVNode, EV = window.Vue.openBlock, DV = window.Vue.createElementBlock, AV = { class: "sx-section-selector__present-sections py-2" }, LV = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, TV = { class: "sx-section-selector__present-section-button-content" }, BV = ["lang", "dir", "textContent"], PV = ["lang", "dir", "textContent"], FV = window.Vue.computed, MV = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = je(), n = FV(
      () => {
        var o;
        return z.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var r;
      const a = bV("i18n");
      return EV(), DV("section", AV, [
        xV(Pa("h4", LV, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        VV(Bh, {
          sections: ((r = In(t)) == null ? void 0 : r.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (l) => o.$emit("select-section", l))
        }, {
          default: $V(({ sourceSection: l, targetSection: u }) => {
            var d, i, c, g;
            return [
              Pa("div", TV, [
                Pa("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (d = In(t)) == null ? void 0 : d.sourceLanguage,
                  dir: In(z.getDir)((i = In(t)) == null ? void 0 : i.sourceLanguage),
                  textContent: kg(l)
                }, null, 8, BV),
                Pa("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (c = In(t)) == null ? void 0 : c.targetLanguage,
                  dir: In(z.getDir)((g = In(t)) == null ? void 0 : g.targetLanguage),
                  textContent: kg(u)
                }, null, 8, PV)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Wt = window.Vue.createVNode, hn = window.Vue.unref, NV = window.Vue.resolveDirective, kt = window.Vue.createElementVNode, as = window.Vue.withDirectives, UV = window.Vue.renderList, IV = window.Vue.Fragment, Rr = window.Vue.openBlock, bg = window.Vue.createElementBlock, RV = window.Vue.createBlock, xg = window.Vue.toDisplayString, $g = window.Vue.createTextVNode, zr = window.Vue.withCtx, zV = { class: "sx-section-selector" }, OV = { class: "sx-section-selector__body" }, HV = { class: "py-2" }, jV = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, qV = { class: "ma-0 pa-0" }, GV = { class: "sx-section-selector__additional-consideration-title" }, XV = { href: "#" }, WV = { class: "sx-section-selector__additional-consideration-title" }, KV = { href: "#" }, Or = window.Vue.computed, YV = window.Vuex.useStore, JV = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = YV(), { sectionSuggestion: n } = je(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: r
    } = W(t), l = Or(
      () => {
        var v;
        return G.getPageUrl(o.value, (v = n.value) == null ? void 0 : v.sourceTitle);
      }
    ), u = Or(
      () => {
        var v;
        return G.getPageUrl(s.value, (v = n.value) == null ? void 0 : v.targetTitle);
      }
    ), d = Or(() => [
      { path: l.value, autonym: a.value },
      { path: u.value, autonym: r.value }
    ]), i = Se(), { clearURLParameters: c, setSectionURLParam: g } = M(), p = () => {
      c(), i.push({ name: "dashboard" });
    }, m = Pc(), { selectPageSectionByTitle: h } = Tc(), { isDesktop: f } = Os(), _ = Bc(), w = (v) => {
      if (f.value) {
        _(
          o.value,
          s.value,
          n.value.sourceTitle,
          { sourcesection: v }
        );
        return;
      }
      const y = t.getters["translator/getDraftTranslation"](
        n.value.sourceTitle,
        v,
        o.value,
        s.value
      );
      y ? m(y) : (h(v), g(v), i.push({ name: "sx-content-comparator" }));
    };
    return (v, y) => {
      const C = NV("i18n");
      return Rr(), bg("section", zV, [
        Wt(rV, { onClose: p }),
        kt("section", OV, [
          Wt(Th),
          Wt(kV, {
            onSelectSection: w,
            onClose: p
          }),
          Wt(MV, { onSelectSection: w }),
          kt("section", HV, [
            as(kt("h4", jV, null, 512), [
              [C, [
                hn(r)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            kt("ul", qV, [
              (Rr(!0), bg(IV, null, UV(d.value, (x, F) => (Rr(), RV(K4, {
                key: `view-article-item-${F}`,
                path: x.path,
                autonym: x.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          Wt(hn(B), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: zr(() => [
              Wt(hn(k), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: zr(() => [
                  kt("h6", GV, [
                    Wt(hn(_e), {
                      icon: hn(Bw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    $g(" " + xg(v.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  as(kt("p", null, null, 512), [
                    [C, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  as(kt("a", XV, null, 512), [
                    [C, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              Wt(hn(k), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: zr(() => [
                  kt("h6", WV, [
                    Wt(hn(_e), {
                      icon: hn(Tw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    $g(" " + xg(v.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  as(kt("p", null, null, 512), [
                    [C, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  as(kt("a", KV, null, 512), [
                    [C, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
const QV = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: JV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, ZV = window.Vue.resolveComponent, e3 = window.Vue.createVNode, t3 = window.Vue.normalizeClass, n3 = window.Vue.openBlock, o3 = window.Vue.createElementBlock;
function s3(e, t, n, o, s, a) {
  const r = ZV("sx-section-selector");
  return n3(), o3("main", {
    class: t3(["sx-section-selector-view", a.classes])
  }, [
    e3(r)
  ], 2);
}
const a3 = /* @__PURE__ */ Q(QV, [["render", s3]]), i3 = window.Vue.computed, r3 = window.Vuex.useStore, l3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = W(
    r3()
  ), o = ue();
  return i3(() => {
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
const Vg = window.Vue.unref, c3 = window.Vue.createVNode, u3 = window.Vue.openBlock, d3 = window.Vue.createElementBlock, g3 = { class: "sx-content-comparator__source-target-selector" }, p3 = window.Vue.watch, m3 = {
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
    const n = e, o = t, s = (r) => o("update:selection", r), a = l3(n);
    return p3(
      () => n.isMappedSection,
      () => {
        a.value.map((r) => r.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (r, l) => (u3(), d3("div", g3, [
      c3(Vg(Ms), {
        items: Vg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Rn = window.Vue.computed, h3 = window.Vue.ref, Fc = () => {
  const e = h3([]), { currentTargetPage: t } = qe(), { sectionSuggestion: n } = je(), { sectionURLParameter: o } = M(), s = Rn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Rn(
    () => {
      var g;
      return (((g = r.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), r = Rn(
    () => {
      var g;
      return (g = t.value) == null ? void 0 : g.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = Y(), u = Rn(() => {
    var g;
    return (g = l.value) == null ? void 0 : g.html;
  }), d = Rn(() => {
    var g;
    return (g = r.value) == null ? void 0 : g.html;
  }), i = Rn(
    () => {
      var g;
      return (g = n.value) == null ? void 0 : g.missingSections.hasOwnProperty(o.value);
    }
  ), c = Rn(
    () => !i.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: c,
    sourceSectionContent: u,
    targetSectionAnchor: a,
    targetSectionContent: d
  };
};
const Fa = window.Vue.createVNode, f3 = window.Vue.toDisplayString, w3 = window.Vue.createElementVNode, fn = window.Vue.unref, Ma = window.Vue.withCtx, Hr = window.Vue.openBlock, jr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const _3 = window.Vue.normalizeClass, v3 = ["lang", "dir", "textContent"], Eg = window.Vue.ref, qr = window.Vue.computed, S3 = window.Vue.onMounted, y3 = {
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
    const n = e, o = t, s = Eg(!1), { sectionSuggestion: a } = je(), { sectionURLParameter: r } = M(), l = qr(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = Fc(), c = qr(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${G.getPageUrl(
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
    }), g = qr(
      () => G.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Eg(null);
    return S3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Hr(), jr(fn(B), {
      ref_key: "contentHeader",
      ref: p,
      class: _3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Ma(() => [
        Fa(m3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": u
        }, null, 8, ["is-mapped-section", "selection"]),
        Fa(fn(B), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Ma(() => [
            Fa(fn(k), null, {
              default: Ma(() => [
                w3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: f3(c.value.title)
                }, null, 8, v3)
              ]),
              _: 1
            }),
            Fa(fn(k), { shrink: "" }, {
              default: Ma(() => [
                s.value ? (Hr(), jr(fn(fe), {
                  key: 0,
                  icon: fn(ui),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Hr(), jr(fn(fe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: fn(im),
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
}, is = window.Vue.unref, Dg = window.Vue.createVNode, C3 = window.Vue.withCtx, k3 = window.Vue.openBlock, b3 = window.Vue.createBlock, x3 = window.Vue.computed, $3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = M(), o = x3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Tc(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (k3(), b3(is(k), {
      class: "justify-end",
      align: "center"
    }, {
      default: C3(() => [
        Dg(is(fe), {
          class: "pa-0 pe-1",
          type: "icon",
          icon: is(Dw),
          onClick: a
        }, null, 8, ["icon"]),
        Dg(is(fe), {
          class: "pa-0 ps-1",
          type: "icon",
          icon: is(Ew),
          onClick: r
        }, null, 8, ["icon"])
      ]),
      _: 1
    }));
  }
};
const Ag = window.Vue.toDisplayString, V3 = window.Vue.resolveDirective, Gr = window.Vue.withDirectives, ro = window.Vue.openBlock, Na = window.Vue.createElementBlock, E3 = window.Vue.createCommentVNode, D3 = window.Vue.createTextVNode, Lg = window.Vue.createElementVNode, A3 = window.Vue.normalizeClass, zn = window.Vue.unref, Xr = window.Vue.withCtx, Wr = window.Vue.createVNode, Tg = window.Vue.createBlock, L3 = { class: "sx-content-comparator-header__mapped-section" }, T3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, B3 = { key: 0 }, P3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, F3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Bg = window.Vue.computed, M3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: xn,
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
    const n = ue(), o = e, s = t, a = Bg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), r = Bg(
      () => n.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        z.getAutonym(o.suggestion.targetLanguage)
      )
    ), l = () => {
      a.value || s("update:discardedSections", [
        ...o.discardedSections,
        o.targetSectionTitle
      ]);
    }, u = () => {
      a.value && s(
        "update:discardedSections",
        o.discardedSections.filter(
          (d) => d !== o.targetSectionTitle
        )
      );
    };
    return (d, i) => {
      const c = V3("i18n");
      return ro(), Na("div", L3, [
        Wr(zn(B), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Xr(() => [
            Wr(zn(k), { grow: "" }, {
              default: Xr(() => [
                Lg("h6", T3, [
                  D3(Ag(r.value) + " ", 1),
                  a.value ? Gr((ro(), Na("span", B3, null, 512)), [
                    [c, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : E3("", !0)
                ]),
                Lg("h6", {
                  class: A3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, Ag(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            Wr(zn(k), { shrink: "" }, {
              default: Xr(() => [
                a.value ? (ro(), Tg(zn(fe), {
                  key: 1,
                  class: "pa-0",
                  icon: zn(Mw),
                  type: "icon",
                  onClick: u
                }, null, 8, ["icon"])) : (ro(), Tg(zn(fe), {
                  key: 0,
                  class: "pa-0",
                  icon: zn(sm),
                  type: "icon",
                  onClick: l
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? Gr((ro(), Na("p", F3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Gr((ro(), Na("p", P3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const le = window.Vue.unref, Kt = window.Vue.createVNode, Pg = window.Vue.toDisplayString, Vs = window.Vue.createElementVNode, lo = window.Vue.withCtx, N3 = window.Vue.resolveDirective, Fg = window.Vue.withDirectives, Kr = window.Vue.openBlock, Mg = window.Vue.createBlock, Ng = window.Vue.createCommentVNode, U3 = window.Vue.createElementBlock, I3 = { class: "sx-content-comparator__header pa-4" }, R3 = ["lang", "dir"], z3 = ["lang", "dir"], O3 = /* @__PURE__ */ Vs("br", null, null, -1), Ua = window.Vue.computed, H3 = {
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
    const { sectionURLParameter: t } = M(), { sourceSection: n } = Y(), { sectionSuggestion: o } = je(), s = Ua(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), a = Ua(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: r } = Fc(), l = Ua(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), u = Ua(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (d, i) => {
      const c = N3("i18n");
      return Kr(), U3("div", I3, [
        Kt(le(fe), {
          class: "py-2 pa-0",
          icon: le(Aw),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Kt(le(B), { class: "my-1 py-2 mx-0" }, {
          default: lo(() => [
            Kt(le(k), { grow: "" }, {
              default: lo(() => [
                Vs("h4", {
                  class: "pa-0 sx-content-comparator-header__article-title",
                  lang: le(o).sourceLanguage,
                  dir: le(z.getDir)(le(o).sourceLanguage)
                }, Pg(le(o).sourceTitle), 9, R3),
                Vs("h2", {
                  class: "sx-content-comparator-header__section-title pa-0 ma-0",
                  lang: le(o).sourceLanguage,
                  dir: le(z.getDir)(le(o).sourceLanguage)
                }, Pg(le(t)), 9, z3)
              ]),
              _: 1
            }),
            Kt($3, {
              cols: "2",
              "section-source-titles": u.value
            }, null, 8, ["section-source-titles"]),
            Kt(le(k), {
              cols: "12",
              mobile: "12",
              tablet: "4",
              class: "py-2 mb-1"
            }, {
              default: lo(() => [
                Kt(le(fe), {
                  icon: le(ui),
                  progressive: "",
                  label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
                  disabled: !l.value,
                  onClick: i[1] || (i[1] = (g) => d.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        s.value ? (Kr(), Mg(le(B), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: lo(() => [
            Kt(le(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: lo(() => [
                Kt(le(_e), { icon: le(Pw) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Kt(le(k), { class: "ma-0" }, {
              default: lo(() => [
                Fg(Vs("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                O3,
                Fg(Vs("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ng("", !0),
        a.value ? (Kr(), Mg(M3, {
          key: 1,
          suggestion: le(o),
          "target-section-title": le(r),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": i[2] || (i[2] = (g) => d.$emit("update:discardedSections", g))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Ng("", !0)
      ]);
    };
  }
};
const Ug = window.Vue.toDisplayString, j3 = window.Vue.createElementVNode, Ig = window.Vue.openBlock, Rg = window.Vue.createElementBlock, q3 = window.Vue.createCommentVNode, G3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, X3 = ["textContent"], W3 = ["textContent"], Ph = {
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
    return (t, n) => (Ig(), Rg("section", G3, [
      j3("h5", {
        textContent: Ug(e.placeholderTitle)
      }, null, 8, X3),
      e.placeholderSubtitle ? (Ig(), Rg("p", {
        key: 0,
        textContent: Ug(e.placeholderSubtitle)
      }, null, 8, W3)) : q3("", !0)
    ]));
  }
}, K3 = window.Vue.computed, Y3 = window.Vue.createApp, J3 = window.Vuex.useStore, Q3 = () => {
  const e = J3(), { sectionSuggestion: t } = je(), { currentTargetPage: n } = qe(), o = ue(), s = () => Y3(
    Ph,
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
  return K3(() => {
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
const Ve = window.Vue.unref, Z3 = window.Vue.isRef, Yr = window.Vue.createVNode, co = window.Vue.openBlock, zg = window.Vue.createBlock, Og = window.Vue.createCommentVNode, Ia = window.Vue.createElementVNode, Jr = window.Vue.Fragment, Ra = window.Vue.createElementBlock, eE = { class: "sx-content-comparator" }, tE = { class: "sx-content-comparator__source-content" }, nE = ["lang", "dir", "innerHTML"], oE = ["lang", "dir", "innerHTML"], sE = ["innerHTML"], aE = window.Vue.ref, iE = window.Vue.computed, rE = window.Vue.watch, lE = window.Vuex.useStore, cE = {
  __name: "SXContentComparator",
  setup(e) {
    const t = lE(), n = Se(), o = aE("source_section"), { logDashboardTranslationStartEvent: s } = $c(), a = () => n.push({ name: "sx-section-selector" }), r = () => {
      s(), Ah() || !t.getters["translator/userHasSectionTranslations"] ? n.push({ name: "sx-quick-tutorial" }) : n.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: l,
      discardedSections: u,
      isCurrentSectionMapped: d,
      sourceSectionContent: i,
      targetSectionContent: c
    } = Fc(), g = Q3(), { sectionSuggestion: p } = je(), { sourceLanguage: m, targetLanguage: h } = W(t), f = iE(() => p.value.targetTitle), _ = Lc();
    return rE(
      f,
      () => _(
        h.value,
        m.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, v) => (co(), Ra("section", eE, [
      Yr(H3, {
        "discarded-sections": Ve(u),
        "onUpdate:discardedSections": v[0] || (v[0] = (y) => Z3(u) ? u.value = y : null),
        onTranslationButtonClicked: r,
        onClose: a
      }, null, 8, ["discarded-sections"]),
      Yr(y3, {
        "source-vs-target-selection": o.value,
        "onUpdate:sourceVsTargetSelection": v[1] || (v[1] = (y) => o.value = y),
        "is-mapped-section": Ve(d),
        onTranslationButtonClicked: r
      }, null, 8, ["source-vs-target-selection", "is-mapped-section"]),
      Ia("section", tE, [
        o.value === "source_section" ? (co(), Ra(Jr, { key: 0 }, [
          Ve(i) ? Og("", !0) : (co(), zg(Ve(Re), { key: 0 })),
          Ia("section", {
            lang: Ve(m),
            dir: Ve(z.getDir)(Ve(m)),
            class: "pt-2 px-4",
            innerHTML: Ve(i)
          }, null, 8, nE)
        ], 64)) : o.value === "target_article" ? (co(), Ra(Jr, { key: 1 }, [
          Ve(g) ? Og("", !0) : (co(), zg(Ve(Re), { key: 0 })),
          Ia("article", {
            lang: Ve(h),
            dir: Ve(z.getDir)(Ve(h)),
            class: "px-4",
            innerHTML: Ve(g)
          }, null, 8, oE)
        ], 64)) : (co(), Ra(Jr, { key: 2 }, [
          Ia("section", {
            class: "pa-4",
            innerHTML: Ve(c)
          }, null, 8, sE),
          Yr(Ph, {
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
const uE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: cE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, dE = window.Vue.resolveComponent, gE = window.Vue.createVNode, pE = window.Vue.normalizeClass, mE = window.Vue.openBlock, hE = window.Vue.createElementBlock;
function fE(e, t, n, o, s, a) {
  const r = dE("sx-content-comparator");
  return mE(), hE("main", {
    class: pE(["sx-content-comparator-view", a.classes])
  }, [
    gE(r)
  ], 2);
}
const wE = /* @__PURE__ */ Q(uE, [["render", fE]]);
const _E = window.Vue.resolveDirective, rs = window.Vue.createElementVNode, Hg = window.Vue.withDirectives, za = window.Vue.unref, Qr = window.Vue.createVNode, jg = window.Vue.toDisplayString, qg = window.Vue.createTextVNode, ls = window.Vue.withCtx, vE = window.Vue.openBlock, SE = window.Vue.createBlock, yE = { class: "mw-ui-dialog__header px-4 py-3" }, CE = { class: "mw-ui-dialog__header-title" }, kE = { class: "pa-4" }, bE = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Gg = window.Codex.CdxButton, xE = {
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
      const u = _E("i18n");
      return vE(), SE(za(st), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ls(() => [
          rs("div", yE, [
            Hg(rs("span", CE, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ls(() => [
          rs("div", bE, [
            Qr(za(Gg), {
              weight: "quiet",
              onClick: s
            }, {
              default: ls(() => [
                qg(jg(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Qr(za(Gg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ls(() => [
                qg(jg(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ls(() => [
          Qr(za(ci)),
          rs("div", kE, [
            Hg(rs("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, $E = window.Vuex.useStore, Mc = () => {
  const e = $E(), { sourceSection: t } = Y(), { getCurrentTitleByLanguage: n } = on(), o = (l, u, d) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[u] = d;
      return;
    }
    const i = t.value.getContentTranslationUnitById(l);
    i instanceof Ue ? i.blockTemplateProposedTranslations[u] = d : i instanceof kn && i.addProposedTranslation(u, d);
  }, s = (l, u) => b(void 0, null, function* () {
    const { sourceLanguage: d, targetLanguage: i } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](d, i, l))
      return "";
    try {
      const g = yield e.dispatch("application/getCXServerToken");
      return yield ot.fetchSegmentTranslation(
        d,
        i,
        l,
        u,
        g
      );
    } catch (g) {
      return mw.log.error("Error while translating segment", g), "";
    }
  }), a = (l, u) => b(void 0, null, function* () {
    const { sourceLanguage: d, targetLanguage: i } = e.state.application;
    if (t.value.hasProposedTranslationByTranslationUnitId(
      l,
      u
    ))
      return;
    let c = t.value.getOriginalContentByTranslationUnitId(l);
    const g = t.value.getContentTranslationUnitById(l);
    let p;
    if (e.commit("application/addMtRequestsPending", l), p = yield s(u, c), !p) {
      e.commit("application/removeMtRequestsPending", l);
      return;
    }
    g instanceof Ue && (g.setBlockTemplateAdaptationInfoByHtml(
      u,
      p
    ), p = (yield Hv(
      p,
      n(i, d),
      i
    )) || ""), o(
      l,
      u,
      p
    ), e.commit("application/removeMtRequestsPending", l);
  });
  return {
    translateTranslationUnitById: a,
    translateSelectedTranslationUnitForAllProviders: () => {
      const { sourceLanguage: l, targetLanguage: u } = e.state.application, d = e.getters["mediawiki/getSupportedMTProviders"](
        l,
        u
      ), { selectedTranslationUnitId: i } = t.value;
      d.forEach(
        (c) => a(i, c)
      );
    }
  };
}, VE = window.Vuex.useStore, EE = () => {
  const { sourceSection: e } = Y(), t = VE(), { translateTranslationUnitById: n } = Mc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const DE = window.Vue.resolveDirective, et = window.Vue.createElementVNode, Oa = window.Vue.withDirectives, Pe = window.Vue.unref, Zr = window.Vue.createVNode, wn = window.Vue.withCtx, AE = window.Vue.renderList, LE = window.Vue.Fragment, el = window.Vue.openBlock, TE = window.Vue.createElementBlock, BE = window.Vue.toDisplayString, Xg = window.Vue.createBlock, PE = window.Vue.createCommentVNode, FE = { class: "mw-ui-dialog__header pa-4" }, ME = { class: "row ma-0 py-2" }, NE = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, UE = { class: "mb-0" }, IE = { class: "col shrink justify-center" }, RE = { class: "pb-2 mb-0" }, zE = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, OE = ["dir", "lang", "innerHTML"], HE = ["textContent"], jE = ["innerHTML"], qE = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, GE = /* @__PURE__ */ et("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), tl = window.Vue.computed, XE = window.Vuex.useStore, WE = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = J.EMPTY_TEXT_PROVIDER_KEY, s = J.ORIGINAL_TEXT_PROVIDER_KEY, a = XE(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = Y(), { sourceLanguage: d, targetLanguage: i } = W(a), c = tl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = tl(() => {
      const w = [s, o];
      return c.value.filter(
        (v) => !w.includes(v)
      );
    }), p = tl(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = EE(), h = (w) => {
      m(w), _();
    }, f = J.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, v) => {
      const y = DE("i18n");
      return e.active ? (el(), Xg(Pe(st), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: wn(() => [
          et("div", FE, [
            et("div", ME, [
              et("div", NE, [
                Oa(et("h4", UE, null, 512), [
                  [y, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              et("div", IE, [
                Zr(Pe(fe), {
                  type: "icon",
                  icon: Pe(Ns),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            Oa(et("h6", RE, null, 512), [
              [y, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: wn(() => [
          Zr(Pe(Ie), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: v[0] || (v[0] = (C) => h(Pe(s)))
          }, {
            header: wn(() => [
              Oa(et("h5", zE, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: wn(() => [
              et("p", {
                dir: Pe(z.getDir)(Pe(d)),
                lang: Pe(d),
                innerHTML: p.value[Pe(s)]
              }, null, 8, OE)
            ]),
            _: 1
          }),
          (el(!0), TE(LE, null, AE(g.value, (C) => (el(), Xg(Pe(Ie), {
            key: C,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (x) => h(C)
          }, {
            header: wn(() => [
              et("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: BE(Pe(f)(C))
              }, null, 8, HE)
            ]),
            default: wn(() => [
              et("p", {
                innerHTML: p.value[C]
              }, null, 8, jE)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Zr(Pe(Ie), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: v[1] || (v[1] = (C) => h(Pe(o)))
          }, {
            header: wn(() => [
              Oa(et("h5", qE, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: wn(() => [
              GE
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : PE("", !0);
    };
  }
}, KE = window.Vuex.useStore, Do = () => {
  const { sourceSection: e } = Y(), t = KE(), { translateTranslationUnitById: n } = Mc(), { currentMTProvider: o } = W(t), s = (l) => b(void 0, null, function* () {
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
const YE = window.Vue.toDisplayString, nl = window.Vue.createElementVNode, ol = window.Vue.unref, JE = window.Vue.createVNode, QE = window.Vue.normalizeClass, ZE = window.Vue.withCtx, e5 = window.Vue.openBlock, t5 = window.Vue.createBlock, n5 = ["href"], o5 = ["textContent"], s5 = ["innerHTML"], uo = window.Vue.computed, a5 = window.Vuex.useStore, Wg = "sx-sentence-selector__section-title", i5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = a5(), { sourceSection: n, isSectionTitleSelected: o } = Y(), { currentSourcePage: s } = qe(), { sourceLanguage: a } = W(t), r = uo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), l = uo(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), u = uo(
      () => G.getPageUrl(a.value, r.value)
    ), d = uo(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = uo(
      () => d.value ? "translated" : "selected"
    ), c = uo(() => {
      const m = [Wg];
      return o.value && m.push(`${Wg}--${i.value}`), m;
    }), { selectTranslationUnitById: g } = Do(), p = () => g(0);
    return (m, h) => (e5(), t5(ol(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: ZE(() => [
        nl("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          nl("strong", {
            textContent: YE(r.value)
          }, null, 8, o5),
          JE(ol(_e), {
            icon: ol(im),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, n5),
        nl("h2", {
          class: QE(["pa-0 ma-0", c.value]),
          onClick: p,
          innerHTML: l.value
        }, null, 10, s5)
      ]),
      _: 1
    }));
  }
};
const bt = window.Vue.unref, cs = window.Vue.createVNode, Ha = window.Vue.withCtx, Kg = window.Vue.toDisplayString, Yg = window.Vue.createTextVNode, r5 = window.Vue.openBlock, l5 = window.Vue.createBlock, c5 = window.Vue.computed, sl = window.Codex.CdxButton, Jg = window.Codex.CdxIcon, Fh = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = Y(), s = c5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (r5(), l5(bt(B), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ha(() => [
        cs(bt(sl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: bt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Ha(() => [
            cs(bt(Jg), {
              class: "me-1",
              icon: bt(xc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        cs(bt(sl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !bt(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Ha(() => [
            Yg(Kg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        cs(bt(sl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Ha(() => [
            Yg(Kg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            cs(bt(Jg), {
              class: "ms-1",
              size: "small",
              icon: bt(Ws)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const On = window.Vue.unref, u5 = window.Vue.toDisplayString, us = window.Vue.createVNode, ja = window.Vue.withCtx, d5 = window.Vue.openBlock, g5 = window.Vue.createBlock, al = window.Vue.computed, p5 = window.Vuex.useStore, m5 = window.Codex.CdxButton, h5 = window.Codex.CdxIcon, f5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = p5(), n = al(() => t.state.application.currentMTProvider), o = ue(), s = al(() => ({
      [J.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [J.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = al(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        J.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (d5(), g5(On(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: ja(() => [
        us(On(B), { class: "ma-0 ps-5 pb-4" }, {
          default: ja(() => [
            us(On(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: u5(a.value)
            }, null, 8, ["textContent"]),
            us(On(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: ja(() => [
                us(On(m5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: ja(() => [
                    us(On(h5), {
                      class: "pa-0",
                      icon: On(kc)
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
const gt = window.Vue.unref, _n = window.Vue.createVNode, w5 = window.Vue.resolveDirective, Qg = window.Vue.createElementVNode, _5 = window.Vue.withDirectives, Zg = window.Vue.toDisplayString, ep = window.Vue.createTextVNode, ds = window.Vue.withCtx, v5 = window.Vue.openBlock, S5 = window.Vue.createElementBlock, y5 = { class: "mt-retry-body pb-5" }, C5 = { class: "retry-body__message" }, tp = window.Codex.CdxButton, il = window.Codex.CdxIcon, k5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = w5("i18n");
      return v5(), S5("div", y5, [
        Qg("div", C5, [
          _n(gt(il), {
            class: "me-2",
            icon: gt(uh)
          }, null, 8, ["icon"]),
          _5(Qg("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        _n(gt(B), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: ds(() => [
            _n(gt(k), { cols: "6" }, {
              default: ds(() => [
                _n(gt(tp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: ds(() => [
                    _n(gt(il), {
                      class: "me-1",
                      icon: gt(fh)
                    }, null, 8, ["icon"]),
                    ep(" " + Zg(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _n(gt(k), { cols: "6" }, {
              default: ds(() => [
                _n(gt(tp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: ds(() => [
                    _n(gt(il), {
                      class: "me-1",
                      icon: gt(Fk)
                    }, null, 8, ["icon"]),
                    ep(" " + Zg(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const go = window.Vue.createVNode, Fe = window.Vue.unref, gs = window.Vue.openBlock, b5 = window.Vue.createElementBlock, x5 = window.Vue.createCommentVNode, qa = window.Vue.createBlock, $5 = window.Vue.normalizeClass, V5 = window.Vue.normalizeStyle, ps = window.Vue.withCtx, E5 = window.Vue.toDisplayString, D5 = window.Vue.createTextVNode, A5 = window.Vue.normalizeProps, L5 = window.Vue.guardReactiveProps, T5 = ["lang", "dir", "innerHTML"], rl = window.Vue.ref, B5 = window.Vue.onMounted, P5 = window.Vue.onBeforeUnmount, ll = window.Vue.computed, F5 = window.Vue.nextTick, M5 = window.Vuex.useStore, N5 = window.Codex.CdxButton, U5 = window.Codex.CdxIcon, I5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = rl(0), n = rl(null), o = rl(null), s = M5(), { currentMTProvider: a, targetLanguage: r } = W(s), { sourceSection: l, currentProposedTranslation: u } = Y(), d = ll(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = ll(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = ll(
      () => !!u.value || a.value === J.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    B5(() => b(this, null, function* () {
      yield F5(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), P5(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (gs(), qa(Fe(Ie), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ps(() => [
        go(Fe(B), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ps(() => [
            go(f5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            go(Fe(k), {
              class: $5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: V5(c.value ? i.value : null)
            }, {
              default: ps(() => [
                c.value ? (gs(), b5("section", {
                  key: 0,
                  lang: Fe(r),
                  dir: Fe(z.getDir)(Fe(r)),
                  innerHTML: Fe(u)
                }, null, 8, T5)) : d.value ? (gs(), qa(Fe(Re), { key: 1 })) : (gs(), qa(k5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            go(Fe(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ps(() => [
                c.value || d.value ? (gs(), qa(Fe(N5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Fe(u)))
                }, {
                  default: ps(() => [
                    go(Fe(U5), {
                      class: "me-1",
                      icon: Fe(Cc)
                    }, null, 8, ["icon"]),
                    D5(" " + E5(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : x5("", !0),
                go(Fh, A5(L5(m.$attrs)), null, 16)
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
}, R5 = window.Vue.computed, z5 = (e) => R5(() => {
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
const O5 = window.Vue.unref, H5 = window.Vue.normalizeClass, j5 = window.Vue.openBlock, q5 = window.Vue.createElementBlock, G5 = ["innerHTML"], X5 = window.Vue.onMounted, W5 = window.Vue.ref, K5 = window.Vue.computed, Y5 = {
  __name: "SubSection",
  props: {
    subSection: {
      type: Ue,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = W5(null), a = z5(n.subSection);
    X5(() => {
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
    const { selectTranslationUnitById: r } = Do(), l = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, u = K5(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (j5(), q5("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: H5(["sx-sentence-selector__subsection", u.value]),
      innerHTML: O5(a)
    }, null, 10, G5));
  }
};
const np = window.Vue.unref, op = window.Vue.createVNode, sp = window.Vue.normalizeStyle, J5 = window.Vue.openBlock, Q5 = window.Vue.createElementBlock, ap = window.Vue.computed, Mh = {
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
    const t = e, n = ap(() => ({ "--size": t.size })), o = ap(
      () => !t.isTemplateAdapted || t.percentage === 0 ? rm : si
    );
    return (s, a) => (J5(), Q5("div", {
      class: "block-template-status-indicator",
      style: sp(n.value)
    }, [
      op(np(C1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      op(np(_e), {
        icon: o.value,
        size: e.size / 2,
        style: sp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, ms = window.Vue.openBlock, Ga = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Yt = window.Vue.unref, po = window.Vue.withCtx, hs = window.Vue.createVNode, cl = window.Vue.toDisplayString, ul = window.Vue.createElementVNode, Z5 = window.Vue.renderList, eD = window.Vue.Fragment, tD = window.Vue.createElementBlock, nD = { class: "pa-4" }, oD = ["textContent"], sD = ["textContent"], aD = window.Vuex.useStore, Xa = window.Vue.computed, iD = {
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
    const t = e, { targetLanguageAutonym: n } = W(aD()), o = Xa(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = ue(), a = Xa(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = Xa(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = Xa(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: Rw,
          color: tt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Ns,
          color: tt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: si,
          color: tt.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
          icon: si,
          color: tt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: ui,
        color: tt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: kw,
        color: tt.gray500
      }), u;
    });
    return (u, d) => (ms(), Ga(Yt(st), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: po(() => [
        hs(Yt(B), {
          justify: "center",
          class: "mt-4"
        }, {
          default: po(() => [
            hs(Yt(k), { shrink: "" }, {
              default: po(() => [
                e.targetTemplateExists ? (ms(), Ga(Mh, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ms(), Ga(Yt(_e), {
                  key: 1,
                  icon: Yt(xw)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: po(() => [
        ul("div", nD, [
          ul("h3", {
            textContent: cl(a.value)
          }, null, 8, oD),
          ul("p", {
            class: "mt-6 text-small",
            textContent: cl(r.value)
          }, null, 8, sD),
          (ms(!0), tD(eD, null, Z5(l.value, (i, c) => (ms(), Ga(Yt(B), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: po(() => [
              hs(Yt(k), { shrink: "" }, {
                default: po(() => [
                  hs(Yt(_e), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              hs(Yt(k), {
                textContent: cl(i.text)
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
const he = window.Vue.unref, be = window.Vue.createVNode, xt = window.Vue.withCtx, dl = window.Vue.toDisplayString, ip = window.Vue.createTextVNode, rD = window.Vue.resolveDirective, rp = window.Vue.withDirectives, lp = window.Vue.createElementVNode, lD = window.Vue.normalizeClass, Wa = window.Vue.openBlock, cp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const up = window.Vue.createBlock, cD = window.Vue.normalizeProps, uD = window.Vue.guardReactiveProps, dD = { class: "block-template-adaptation-card__container pa-4" }, gD = ["textContent"], pD = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ae = window.Vue.computed, mD = window.Vue.ref, hD = window.Vuex.useStore, dp = window.Codex.CdxButton, gp = window.Codex.CdxIcon, fD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = hD(), { targetLanguageAutonym: n, currentMTProvider: o } = W(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = Y(), r = Ae(() => {
      var P;
      return ((P = s.value) == null ? void 0 : P.blockTemplateTranslatedContent) || a.value;
    }), l = Ae(
      () => {
        var E;
        return (E = s.value) == null ? void 0 : E.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = Ae(
      () => {
        var E;
        return !((E = t.state.application.mtRequestsPending) != null && E.includes(
          s.value.id
        ));
      }
    ), d = ue(), i = Ae(
      // Strip HTML comments and return
      () => {
        var E, P;
        return ((P = (E = s.value) == null ? void 0 : E.sourceBlockTemplateName) == null ? void 0 : P.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = Ae(
      () => {
        var E, P;
        return (P = (E = s.value) == null ? void 0 : E.blockTemplateAdaptationInfo) == null ? void 0 : P[o.value];
      }
    ), g = Ae(
      () => {
        var E, P;
        return ((E = c.value) == null ? void 0 : E.adapted) || !!((P = c.value) != null && P.partial);
      }
    ), p = Ae(() => c.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), m = Ae(() => c.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Ae(
      () => {
        var E;
        return Object.keys(((E = s.value) == null ? void 0 : E.sourceTemplateParams) || {}).length;
      }
    ), f = Ae(() => {
      var P;
      const E = (P = s.value) == null ? void 0 : P.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(E || {});
    }), _ = Ae(() => f.value.length), w = Ae(() => {
      const E = x.value;
      return h.value + E === 0 ? 100 : _.value / (h.value + E) * 100 || 0;
    }), v = mD(!1), y = () => {
      v.value = !0;
    }, C = (E) => E.filter((P) => !f.value.includes(P)), x = Ae(() => {
      var P;
      const E = ((P = c.value) == null ? void 0 : P.mandatoryTargetParams) || [];
      return C(E).length;
    }), F = Ae(() => {
      var P;
      const E = ((P = c.value) == null ? void 0 : P.optionalTargetParams) || [];
      return C(E).length;
    });
    return (E, P) => {
      const N = rD("i18n");
      return Wa(), up(he(Ie), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: xt(() => [
          lp("div", dD, [
            be(he(B), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: xt(() => [
                be(he(k), { shrink: "" }, {
                  default: xt(() => [
                    be(he(gp), {
                      icon: he(Mk),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                be(he(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: xt(() => [
                    ip(dl(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (Wa(), cp("div", {
              key: 0,
              class: lD(["pa-4 mb-4", p.value])
            }, [
              be(he(B), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: xt(() => [
                  rp(be(he(k), { tag: "h5" }, null, 512), [
                    [N, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  be(he(k), { shrink: "" }, {
                    default: xt(() => [
                      be(Mh, {
                        percentage: w.value,
                        size: 20,
                        "is-template-adapted": g.value,
                        "stroke-width": 2,
                        onClick: y
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              lp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: dl(l.value)
              }, null, 8, gD),
              be(he(dp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: P[0] || (P[0] = (T) => E.$emit("edit-translation", r.value))
              }, {
                default: xt(() => [
                  ip(dl(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Wa(), cp("div", pD, [
              be(he(B), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: xt(() => [
                  rp(be(he(k), { tag: "h5" }, null, 512), [
                    [N, [
                      he(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  be(he(k), { shrink: "" }, {
                    default: xt(() => [
                      be(he(dp), {
                        weight: "quiet",
                        "aria-label": E.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: xt(() => [
                          be(he(gp), {
                            icon: he(Pk),
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
            ])) : (Wa(), up(he(Re), { key: 2 }))
          ]),
          be(Fh, cD(uD(E.$attrs)), null, 16),
          be(iD, {
            active: v.value,
            "onUpdate:active": P[1] || (P[1] = (T) => v.value = T),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": x.value,
            "optional-missing-params-count": F.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const wD = window.Vue.unref, _D = window.Vue.createVNode, vD = window.Vue.openBlock, SD = window.Vue.createElementBlock, yD = { class: "translated-segment-card-header" }, CD = window.Vue.computed, kD = {
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
    const n = t, { isSectionTitleSelected: o } = Y(), s = ue(), a = CD(() => [
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
    return (l, u) => (vD(), SD("div", yD, [
      _D(wD(Ms), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const vn = window.Vue.unref, Ka = window.Vue.createVNode, gl = window.Vue.withCtx, bD = window.Vue.openBlock, xD = window.Vue.createBlock, $D = window.Vue.computed, pp = window.Codex.CdxButton, mp = window.Codex.CdxIcon, VD = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = Y(), o = $D(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (bD(), xD(vn(B), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: gl(() => [
        Ka(vn(pp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: vn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: gl(() => [
            Ka(vn(mp), { icon: vn(xc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Ka(vn(pp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: gl(() => [
            Ka(vn(mp), { icon: vn(Ws) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const ED = window.Vue.useCssVars, xe = window.Vue.createVNode, hp = window.Vue.resolveDirective, DD = window.Vue.createElementVNode, pl = window.Vue.withDirectives, ce = window.Vue.unref, AD = window.Vue.normalizeStyle, Ya = window.Vue.openBlock, fp = window.Vue.createElementBlock, LD = window.Vue.createCommentVNode, TD = window.Vue.normalizeClass, Qe = window.Vue.withCtx, BD = window.Vue.toDisplayString, PD = window.Vue.createTextVNode, wp = window.Vue.createBlock, FD = window.Vue.normalizeProps, MD = window.Vue.guardReactiveProps, Jt = window.Vue.computed, ND = window.Vue.ref, UD = window.Vue.inject, ID = window.Vuex.useStore, RD = window.Codex.CdxButton, ml = window.Codex.CdxIcon, zD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    ED((w) => ({
      "4929555c": _.value
    }));
    const t = ND("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = Y(), { targetLanguage: a } = W(ID()), r = Jt(() => t.value === "sentence"), l = Jt(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (v) => {
            var y;
            return v.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), u = Jt(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = UD("colors"), i = d.gray200, c = d.red600, g = Jt(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = Jt(
      () => Dt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = Jt(
      () => Dt.getScoreStatus(p.value)
    ), h = Jt(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = Jt(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), _ = Jt(
      () => f.value[m.value]
    );
    return (w, v) => {
      const y = hp("i18n"), C = hp("i18n-html");
      return Ya(), wp(ce(Ie), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Qe(() => [
          xe(ce(B), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Qe(() => [
              xe(kD, {
                selection: t.value,
                "onUpdate:selection": v[0] || (v[0] = (x) => t.value = x)
              }, null, 8, ["selection"]),
              xe(ce(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Qe(() => [
                  xe(ce(B), { class: "ma-0" }, {
                    default: Qe(() => [
                      xe(ce(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Qe(() => [
                          pl(DD("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? pl((Ya(), fp("p", {
                            key: 0,
                            style: AD({ color: ce(c) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : pl((Ya(), fp("p", {
                            key: 1,
                            class: TD(h.value)
                          }, null, 2)), [
                            [C, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      xe(ce(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Qe(() => [
                          xe(ce(B), { class: "ma-0 ms-2" }, {
                            default: Qe(() => [
                              xe(ce(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Qe(() => [
                                  xe(ce(ml), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ce(Rk)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              xe(ce(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Qe(() => [
                                  xe(ce(cm), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: ce(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              xe(ce(k), { shrink: "" }, {
                                default: Qe(() => [
                                  xe(ce(ml), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ce(Nk)
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
                  r.value ? (Ya(), wp(ce(RD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: v[1] || (v[1] = (x) => w.$emit("edit-translation", g.value))
                  }, {
                    default: Qe(() => [
                      xe(ce(ml), {
                        class: "me-1",
                        icon: ce(Cc)
                      }, null, 8, ["icon"]),
                      PD(" " + BD(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : LD("", !0)
                ]),
                _: 1
              }),
              xe(ce(k), { class: "translated-segment-card__actions" }, {
                default: Qe(() => [
                  xe(VD, FD(MD(w.$attrs)), null, 16)
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
}, OD = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = Y(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Do(), { currentTranslation: s } = sn();
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
}, Nh = window.Vuex.useStore, HD = () => {
  const e = Nh(), { sourceLanguage: t, targetLanguage: n } = W(e);
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield hi.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, jD = () => {
  const e = Nh(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = W(e), s = HD();
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
}, qD = window.Vue.computed, GD = (e) => {
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
}, XD = () => {
  const { selectedContentTranslationUnit: e } = Y(), t = qD(
    () => e.value instanceof Ue
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && GD(o);
  };
}, WD = (e, t) => {
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
}, KD = window.Vue.computed, Uh = () => {
  const { currentTranslation: e } = sn(), { currentSourcePage: t } = qe();
  return KD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, YD = window.Vuex.useStore, Nc = () => {
  const e = YD(), { sourceSection: t, targetPageTitleForPublishing: n } = Y(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), r = Uh();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(d);
    i.forEach(
      (p) => WD(p, u)
    );
    const c = t.value.getTranslationProgress(a), g = e.getters["application/isSandboxTarget"];
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
      sectionId: d,
      isSandbox: g,
      progress: c
    });
  };
}, JD = window.Vue.effectScope, QD = window.Vue.onScopeDispose, ZD = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = JD(!0), n = o.run(() => e(...a))), QD(s), n);
}, eA = window.Vuex.useStore;
let hl;
const tA = () => {
  const e = eA(), t = Nc();
  let n = 1e3, o = 0;
  return hl = Vc(() => t().then((a) => {
    a instanceof vo ? (n *= o + 1, o++, setTimeout(hl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof bo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), hl;
}, Ih = ZD(tA), nA = window.Vuex.useStore, oA = () => {
  const e = nA(), t = Ih(), { currentMTProvider: n } = W(e), { sourceSection: o, currentProposedTranslation: s } = Y(), { selectNextTranslationUnit: a } = Do();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, sA = window.Vuex.useStore, aA = () => {
  const e = sA(), t = Ih();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, iA = window.Vuex.useStore, rA = window.Vue.computed, Rh = () => {
  const e = iA(), t = Se(), { currentTranslation: n } = sn(), { currentMTProvider: o, previousRoute: s } = W(e), { currentTargetPage: a } = qe(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: d
  } = M(), i = He(), c = rA(() => {
    var _;
    const f = {
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
    if (d.value ? (f.translation_source_section = d.value, f.translation_type = "section") : f.translation_type = "article", n.value) {
      f.translation_id = n.value.translationId, f.translation_target_title = n.value.targetTitle;
      const w = n.value.targetSectionTitle;
      w && (f.translation_target_section = w);
    } else
      a.value && (f.translation_target_title = (_ = a.value) == null ? void 0 : _.title);
    return o.value && (f.translation_provider = J.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var y;
      const f = t.currentRoute.value.meta.workflowStep, w = t.getRoutes().find(
        (C) => C.name === s.value
      ), v = ((y = w == null ? void 0 : w.meta) == null ? void 0 : y.workflowStep) || 0;
      return f > v ? i(ie({
        event_type: "editor_open"
      }, c.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(ie({
      event_type: "editor_close"
    }, c.value)),
    logEditorCloseWarnEvent: () => i(ie({
      event_type: "editor_close_warn"
    }, c.value)),
    logEditorSegmentAddEvent: () => i(ie({
      event_type: "editor_segment_add"
    }, c.value))
  };
};
const oe = window.Vue.unref, Ze = window.Vue.createVNode, Qt = window.Vue.withCtx, lA = window.Vue.resolveDirective, _p = window.Vue.createElementVNode, cA = window.Vue.withDirectives, uA = window.Vue.toDisplayString, dA = window.Vue.createTextVNode, gA = window.Vue.renderList, pA = window.Vue.Fragment, Sn = window.Vue.openBlock, vp = window.Vue.createElementBlock, mo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const mA = window.Vue.normalizeClass, hA = window.Vue.normalizeStyle, fA = { class: "sx-sentence-selector__header-title mb-0" }, wA = { class: "sx-sentence-selector__section-contents px-4" }, ho = window.Vue.computed, _A = window.Vue.nextTick, vA = window.Vue.onMounted, Ja = window.Vue.ref, Sp = window.Vue.watch, SA = window.Vuex.useStore, yp = window.Codex.CdxButton, yA = window.Codex.CdxIcon, CA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Ja(!1), n = Ja(!1), o = Ja("100%"), s = SA(), { currentMTProvider: a } = W(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l
    } = M(), { sourceSection: u, selectedContentTranslationUnit: d } = Y(), i = ho(
      () => s.state.application.translationDataLoadingCounter === 0
    ), c = ho(
      () => {
        var S;
        return (S = u.value) == null ? void 0 : S.isSelectedTranslationUnitTranslated;
      }
    ), g = ho(() => {
      var S;
      return (S = u.value) == null ? void 0 : S.subSections;
    }), p = ho(
      () => {
        var S;
        return (S = u.value) == null ? void 0 : S.selectedTranslationUnitOriginalContent;
      }
    ), m = ho(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: f,
      logEditorCloseWarnEvent: _,
      logEditorSegmentAddEvent: w
    } = Rh(), v = OD();
    jD()().then(h);
    const C = XD();
    vA(() => {
      Sp(
        i,
        () => b(this, null, function* () {
          i.value && (yield _A(), v(), C());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Sp(d, C);
    const {
      selectNextTranslationUnit: x,
      selectPreviousTranslationUnit: F
    } = Do(), E = oA(), P = () => {
      w(), E();
    }, N = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, T = Se(), U = () => {
      const { autoSavePending: S } = s.state.application;
      if (S) {
        We.value = !0, _();
        return;
      }
      Lt();
    }, { fetchTranslationsByStatus: j } = _i(), q = aA(), { clearURLParameters: Ge } = M(), { currentTranslation: Te } = sn(), Lt = () => b(this, null, function* () {
      j("draft"), Te.value && (u.value.reset(), Te.value.restored = !1), f(), Ge(), q(), yield T.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: vt,
      translateSelectedTranslationUnitForAllProviders: Lo
    } = Mc(), Dn = () => {
      Pt.value || (t.value = !0, Lo());
    }, { getCurrentTitleByLanguage: Tt } = on(), Xe = (S, D) => {
      T.push({
        name: "sx-editor",
        state: {
          content: S,
          originalContent: p.value,
          title: Tt(
            l.value,
            r.value
          ),
          isInitialEdit: D || null
        }
      });
    }, an = () => T.push({ name: "sx-publisher" }), Bt = () => b(this, null, function* () {
      d.value ? yield vt(
        d.value.id,
        a.value
      ) : yield vt(0, a.value);
    }), Pt = ho(
      () => d.value instanceof Ue
    ), We = Ja(!1);
    return (S, D) => {
      const A = lA("i18n");
      return Sn(), vp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: hA(m.value)
      }, [
        Ze(oe(B), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Qt(() => [
            Ze(oe(k), { shrink: "" }, {
              default: Qt(() => [
                Ze(oe(yp), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": S.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: U
                }, {
                  default: Qt(() => [
                    Ze(oe(yA), { icon: oe(dh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            Ze(oe(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Qt(() => [
                cA(_p("h4", fA, null, 512), [
                  [A, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Ze(oe(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Qt(() => [
                Ze(oe(yp), {
                  disabled: !(oe(u) && oe(u).isTranslated),
                  onClick: an
                }, {
                  default: Qt(() => [
                    dA(uA(S.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? (Sn(), mo(oe(B), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Qt(() => [
            Ze(oe(k), {
              dir: oe(z.getDir)(oe(r)),
              lang: oe(r),
              class: "sx-sentence-selector__section"
            }, {
              default: Qt(() => [
                Ze(i5),
                _p("div", wA, [
                  (Sn(!0), vp(pA, null, gA(g.value, (L) => (Sn(), mo(Y5, {
                    id: L.id,
                    key: `sub-section-${L.id}`,
                    "sub-section": L,
                    onBounceTranslation: N
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Pt.value && c.value ? (Sn(), mo(zD, {
              key: 0,
              onEditTranslation: D[0] || (D[0] = (L) => Xe(L, !1)),
              onSkipTranslation: oe(x),
              onSelectPreviousSegment: oe(F)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : Pt.value ? (Sn(), mo(fD, {
              key: 2,
              onEditTranslation: Xe,
              onApplyTranslation: P,
              onSkipTranslation: oe(x),
              onSelectPreviousSegment: oe(F)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Sn(), mo(I5, {
              key: 1,
              class: mA({ "mb-0": !n.value }),
              onConfigureOptions: Dn,
              onEditTranslation: D[1] || (D[1] = (L) => Xe(L, !0)),
              onApplyTranslation: P,
              onSkipTranslation: oe(x),
              onSelectPreviousSegment: oe(F),
              onRetryTranslation: Bt
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Sn(), mo(oe(B), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Qt(() => [
            Ze(oe(Re), { class: "mt-0" })
          ]),
          _: 1
        })),
        Ze(WE, {
          active: t.value,
          "onUpdate:active": D[2] || (D[2] = (L) => t.value = L)
        }, null, 8, ["active"]),
        Ze(xE, {
          modelValue: We.value,
          "onUpdate:modelValue": D[3] || (D[3] = (L) => We.value = L),
          onDiscardTranslation: Lt
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const kA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: CA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, bA = window.Vue.resolveComponent, xA = window.Vue.createVNode, $A = window.Vue.normalizeClass, VA = window.Vue.openBlock, EA = window.Vue.createElementBlock;
function DA(e, t, n, o, s, a) {
  const r = bA("sx-sentence-selector");
  return VA(), EA("main", {
    class: $A(["sx-sentence-selector-view", a.classes])
  }, [
    xA(r)
  ], 2);
}
const AA = /* @__PURE__ */ Q(kA, [["render", DA]]), LA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, TA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const BA = window.Vue.resolveDirective, Qa = window.Vue.withDirectives, pt = window.Vue.openBlock, Zt = window.Vue.createElementBlock, Za = window.Vue.createCommentVNode, ei = window.Vue.Transition, Hn = window.Vue.withCtx, fo = window.Vue.createVNode, fs = window.Vue.createElementVNode, jn = window.Vue.unref, PA = window.Vue.renderList, FA = window.Vue.Fragment, MA = window.Vue.normalizeClass, Cp = window.Vue.createBlock, NA = window.Vue.toDisplayString, UA = window.Vue.createTextVNode, IA = { class: "sx-quick-tutorial" }, RA = { class: "sx-quick-tutorial__main-point py-9 px-6" }, zA = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, OA = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, HA = { class: "sx-quick-tutorial__illustration" }, jA = ["innerHTML"], qA = ["innerHTML"], GA = { class: "sx-quick-tutorial__step-indicator py-3" }, XA = ["onClick"], WA = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, KA = {
  key: "secondary-point-1",
  class: "ma-0"
}, YA = {
  key: "secondary-point-2",
  class: "ma-0"
}, JA = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, kp = window.Vue.ref, bp = window.Codex.CdxButton, QA = window.Codex.CdxIcon, ZA = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = kp(2), n = kp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = Se(), r = () => a.push({ name: "sx-sentence-selector" });
    return (l, u) => {
      const d = BA("i18n");
      return pt(), Zt("section", IA, [
        fo(jn(B), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Hn(() => [
            fs("section", RA, [
              fo(ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Hn(() => [
                  s(1) ? Qa((pt(), Zt("h2", zA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Qa((pt(), Zt("h2", OA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Za("", !0)
                ]),
                _: 1
              })
            ]),
            fs("section", HA, [
              fo(ei, { name: "mw-ui-animation-slide-start" }, {
                default: Hn(() => [
                  s(1) ? (pt(), Zt("div", {
                    key: "illustration-1",
                    innerHTML: jn(TA)
                  }, null, 8, jA)) : s(2) ? (pt(), Zt("div", {
                    key: "illustration-2",
                    innerHTML: jn(LA)
                  }, null, 8, qA)) : Za("", !0)
                ]),
                _: 1
              })
            ]),
            fs("div", GA, [
              (pt(!0), Zt(FA, null, PA(t.value, (i) => (pt(), Zt("span", {
                key: `dot-${i}`,
                class: MA(["dot mx-1", { "dot-active": s(i) }]),
                role: "button",
                onClick: (c) => n.value = i
              }, null, 10, XA))), 128))
            ]),
            fs("section", WA, [
              fo(ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Hn(() => [
                  s(1) ? Qa((pt(), Zt("h3", KA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Qa((pt(), Zt("h3", YA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Za("", !0)
                ]),
                _: 1
              })
            ]),
            fs("div", JA, [
              fo(ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Hn(() => [
                  s(1) ? (pt(), Cp(jn(bp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Hn(() => [
                      fo(jn(QA), { icon: jn(Ws) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (pt(), Cp(jn(bp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: r
                  }, {
                    default: Hn(() => [
                      UA(NA(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : Za("", !0)
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
const eL = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: ZA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, tL = window.Vue.resolveComponent, nL = window.Vue.createVNode, oL = window.Vue.normalizeClass, sL = window.Vue.openBlock, aL = window.Vue.createElementBlock;
function iL(e, t, n, o, s, a) {
  const r = tL("sx-quick-tutorial");
  return sL(), aL("main", {
    class: oL(["sx-quick-tutorial-view", a.classes])
  }, [
    nL(r)
  ], 2);
}
const rL = /* @__PURE__ */ Q(eL, [["render", iL]]);
const lL = window.Vue.resolveDirective, xp = window.Vue.createElementVNode, cL = window.Vue.withDirectives, uL = window.Vue.unref, dL = window.Vue.withCtx, gL = window.Vue.createVNode, pL = window.Vue.openBlock, mL = window.Vue.createElementBlock, hL = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, fL = { class: "sx-editor__original-content-panel__header mb-2" }, wL = ["lang", "dir", "innerHTML"], $p = window.Vue.ref, _L = window.Vue.onMounted, vL = {
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
        d.href = G.getPageUrl(l, d.title), d.target = "_blank";
    }, o = $p(null), s = $p(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return _L(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const u = lL("i18n");
      return pL(), mL("section", hL, [
        cL(xp("h5", fL, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        gL(uL(m1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: dL(() => [
            xp("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, wL)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, SL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const yL = window.Vue.unref, ws = window.Vue.createElementVNode, Vp = window.Vue.resolveDirective, fl = window.Vue.withDirectives, CL = window.Vue.normalizeClass, kL = window.Vue.openBlock, bL = window.Vue.createElementBlock, xL = window.Vue.createCommentVNode, $L = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, VL = { class: "sx-editor__feedback-overlay-content px-4" }, EL = ["innerHTML"], DL = { class: "sx-editor__feedback-overlay-content__title" }, AL = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, wl = window.Vue.computed, LL = window.Vuex.useStore, TL = {
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
    const t = e, { targetLanguage: n } = W(LL()), o = wl(
      () => Dt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = wl(() => {
      const r = Dt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = wl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = Vp("i18n"), d = Vp("i18n-html");
      return e.showFeedback ? (kL(), bL("div", $L, [
        ws("div", VL, [
          ws("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: yL(SL)
          }, null, 8, EL),
          fl(ws("h2", DL, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          fl(ws("p", AL, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          fl(ws("p", {
            class: CL(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : xL("", !0);
    };
  }
}, BL = window.Vuex.useStore, PL = () => {
  const e = BL(), t = Nc(), { selectNextTranslationUnit: n } = Do(), { sourceSection: o, selectedContentTranslationUnit: s } = Y(), { getCurrentTitleByLanguage: a } = on();
  return (r) => b(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = r, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), r = l.innerHTML;
    const { sourceLanguage: u, targetLanguage: d, currentMTProvider: i } = e.state.application;
    s.value instanceof Ue && (r = (yield Am(
      r,
      a(d, u),
      d
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const Me = window.Vue.unref, _l = window.Vue.openBlock, vl = window.Vue.createBlock, Ep = window.Vue.createCommentVNode, Dp = window.Vue.createVNode, FL = window.Vue.createElementVNode, ML = window.Vue.withCtx, NL = { class: "sx-editor__editing-surface-container grow" }, Sl = window.Vue.ref, UL = window.Vue.computed, IL = window.Vuex.useStore, RL = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Sl(!1), o = Se(), s = IL(), a = () => n.value = !0, r = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: u, content: d, originalContent: i, title: c } = history.state, g = Sl(null), p = Sl(!1), { logEditorSegmentAddEvent: m } = Rh(), { targetLanguage: h, sourceLanguage: f } = W(s), { sourceSection: _ } = Y(), w = UL(
      () => Dt.calculateScore(
        g.value,
        d,
        h.value
      )
    ), v = PL(), y = (C) => b(this, null, function* () {
      g.value = C, p.value = !0;
      const x = new Promise((E) => setTimeout(E, 2e3));
      let F = Promise.resolve();
      l ? _.value.editedTranslation = C : (w.value === 0 && u && m(), F = v(C)), yield Promise.all([x, F]), p.value = !1, r();
    });
    return (C, x) => (_l(), vl(Me(B), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: ML(() => [
        Me(i) ? (_l(), vl(vL, {
          key: 0,
          language: Me(f),
          dir: Me(z.getDir)(Me(f)),
          "original-content": Me(i)
        }, null, 8, ["language", "dir", "original-content"])) : Ep("", !0),
        n.value ? Ep("", !0) : (_l(), vl(Me(Re), { key: 1 })),
        FL("div", NL, [
          Dp(TL, {
            "edited-translation": g.value,
            "show-feedback": p.value,
            "proposed-translation": Me(d)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Dp(f$, {
            content: Me(d),
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
const zL = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: RL
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
}, OL = window.Vue.resolveComponent, HL = window.Vue.createVNode, jL = window.Vue.normalizeClass, qL = window.Vue.openBlock, GL = window.Vue.createElementBlock;
function XL(e, t, n, o, s, a) {
  const r = OL("sx-editor");
  return qL(), GL("main", {
    class: jL(["sx-editor-view", a.classes])
  }, [
    HL(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const WL = /* @__PURE__ */ Q(zL, [["render", XL]]);
const $t = window.Vue.unref, qn = window.Vue.createVNode, _s = window.Vue.withCtx, KL = window.Vue.resolveDirective, YL = window.Vue.withDirectives, JL = window.Vue.openBlock, QL = window.Vue.createBlock, Ap = window.Codex.CdxButton, Lp = window.Codex.CdxIcon, ZL = {
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
      const a = KL("i18n");
      return JL(), QL($t(B), { class: "ma-0 sx-publisher__header" }, {
        default: _s(() => [
          qn($t(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: _s(() => [
              qn($t(Ap), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: _s(() => [
                  qn($t(Lp), { icon: $t(Eo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          YL(qn($t(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          qn($t(k), { shrink: "" }, {
            default: _s(() => [
              qn($t(Ap), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: _s(() => [
                  qn($t(Lp), { icon: $t(Lk) }, null, 8, ["icon"])
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
}, eT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, tT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Tp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const yl = window.Vue.createElementVNode, Bp = window.Vue.toDisplayString, Cl = window.Vue.unref, kl = window.Vue.withCtx, Pp = window.Vue.createVNode, nT = window.Vue.openBlock, oT = window.Vue.createBlock, sT = window.Vue.createCommentVNode, aT = ["innerHTML"], iT = ["textContent"], rT = ["textContent"], bl = window.Vue.computed, lT = {
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
        svg: eT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: tT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Tp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Tp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = bl(() => o[n.status].svg), a = bl(() => o[n.status].title), r = bl(() => o[n.status].subtitle);
    return (l, u) => e.active ? (nT(), oT(Cl(st), {
      key: 0,
      "overlay-opacity": "high",
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: kl(() => [
        Pp(Cl(B), { class: "ma-4" }, {
          default: kl(() => [
            Pp(Cl(k), null, {
              default: kl(() => [
                yl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, aT),
                yl("h2", {
                  textContent: Bp(a.value)
                }, null, 8, iT),
                yl("p", {
                  class: "ma-0",
                  textContent: Bp(r.value)
                }, null, 8, rT)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : sT("", !0);
  }
};
const Ne = window.Vue.unref, mt = window.Vue.createVNode, en = window.Vue.withCtx, cT = window.Vue.resolveDirective, uT = window.Vue.withDirectives, Fp = window.Vue.toDisplayString, dT = window.Vue.createTextVNode, xl = window.Vue.openBlock, Mp = window.Vue.createElementBlock, gT = window.Vue.createCommentVNode, zh = window.Vue.createElementVNode, pT = window.Vue.createBlock, mT = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, hT = ["src"], fT = ["textContent"], wT = /* @__PURE__ */ zh("p", { class: "mt-0" }, null, -1), _T = window.Vue.computed, vT = window.Vue.inject, ST = window.Vue.ref, Np = window.Codex.CdxButton, yT = window.Codex.CdxIcon, CT = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Cm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = ST(""), s = () => n("close"), a = () => n("publish", o.value), r = vT("breakpoints"), l = _T(() => r.value.mobile);
    return (u, d) => {
      const i = cT("i18n");
      return e.active && e.captchaDetails ? (xl(), pT(Ne(st), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: en(() => [
          mt(Ne(B), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: en(() => [
              mt(Ne(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: en(() => [
                  mt(Ne(Np), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: en(() => [
                      mt(Ne(yT), { icon: Ne(Eo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              uT(mt(Ne(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              mt(Ne(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: en(() => [
                  mt(Ne(Np), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: en(() => [
                      dT(Fp(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          mt(Ne(ci))
        ]),
        default: en(() => [
          zh("div", mT, [
            e.captchaDetails.type === "image" ? (xl(), Mp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, hT)) : (xl(), Mp("p", {
              key: 1,
              textContent: Fp(e.captchaDetails.question)
            }, null, 8, fT)),
            wT,
            mt(Ne(B), { class: "ma-0" }, {
              default: en(() => [
                mt(Ne(k), null, {
                  default: en(() => [
                    mt(Ne(ai), {
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
      }, 8, ["fullscreen"])) : gT("", !0);
    };
  }
};
const Gn = window.Vue.unref, vs = window.Vue.createVNode, ti = window.Vue.withCtx, Xn = window.Vue.createElementVNode, kT = window.Vue.resolveDirective, bT = window.Vue.withDirectives, xT = window.Vue.renderList, Up = window.Vue.Fragment, $l = window.Vue.openBlock, Ip = window.Vue.createElementBlock, $T = window.Vue.toDisplayString, VT = window.Vue.normalizeClass, ET = window.Vue.createBlock, DT = { class: "mw-ui-dialog__header" }, AT = { class: "row ma-0 px-4 py-3" }, LT = { class: "col shrink justify-center" }, TT = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, BT = { class: "mb-0" }, PT = { class: "pa-4" }, FT = ["textContent"], MT = window.Vuex.useStore, Ss = window.Vue.computed, NT = window.Codex.CdxButton, UT = window.Codex.CdxIcon, IT = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = MT(), s = Ss(() => o.state.application.publishTarget), a = Ss(() => o.state.translator.isAnon), r = ue(), { sourceSection: l } = Y(), u = Ss(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), d = Ss(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = Ss(() => [
      {
        label: u.value,
        details: d.value,
        value: "NEW_SECTION",
        disabled: !1
      },
      {
        label: r.i18n("cx-sx-publisher-sandbox-option-label"),
        details: r.i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: a.value
      }
    ]), c = (m) => m === i.value.length - 1 ? "mb-1" : "mb-4", g = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), g();
    };
    return (m, h) => {
      const f = kT("i18n");
      return $l(), ET(Gn(st), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: g
      }, {
        header: ti(() => [
          Xn("div", DT, [
            Xn("div", AT, [
              Xn("div", LT, [
                vs(Gn(NT), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: ti(() => [
                    vs(Gn(UT), { icon: Gn(dh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Xn("div", TT, [
                bT(Xn("h4", BT, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            vs(Gn(ci))
          ])
        ]),
        default: ti(() => [
          Xn("div", PT, [
            vs(Gn(j0), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: ti(() => [
                ($l(!0), Ip(Up, null, xT(i.value, (_, w) => ($l(), Ip(Up, {
                  key: _.label
                }, [
                  vs(Gn(Il), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Xn("p", {
                    class: VT(["complementary ms-7 mt-0", c(w)]),
                    textContent: $T(_.details)
                  }, null, 10, FT)
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
const ht = window.Vue.unref, Wn = window.Vue.createVNode, RT = window.Vue.resolveDirective, Rp = window.Vue.withDirectives, ni = window.Vue.openBlock, zp = window.Vue.createElementBlock, zT = window.Vue.createCommentVNode, Op = window.Vue.toDisplayString, Vl = window.Vue.createElementVNode, wo = window.Vue.withCtx, Hp = window.Vue.createBlock, OT = window.Vue.Fragment, HT = window.Vue.normalizeClass, jT = { class: "sx-publisher__review-info__content" }, qT = {
  key: 0,
  class: "complementary ma-0"
}, GT = ["textContent"], XT = ["textContent"], yn = window.Vue.computed, jp = window.Vue.ref, WT = window.Vue.watch, qp = window.Codex.CdxButton, El = window.Codex.CdxIcon, KT = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = jp(0), o = jp(null);
    WT(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = yn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = yn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = yn(() => {
      switch (a.value) {
        case "warning":
          return uh;
        case "error":
          return Dk;
        default:
          return Bk;
      }
    }), l = yn(() => a.value === "default"), u = yn(
      () => l.value ? "notice" : a.value
    ), d = yn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = ue(), c = yn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = yn(
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
      const _ = RT("i18n-html");
      return ni(), Hp(ht(h0), {
        type: u.value,
        class: HT(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: l.value
      }, {
        icon: wo(() => [
          Wn(ht(El), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: wo(() => [
          Vl("div", jT, [
            a.value === "default" ? Rp((ni(), zp("p", qT, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (ni(), zp(OT, { key: 1 }, [
              Vl("h5", {
                textContent: Op(g.value)
              }, null, 8, GT),
              Vl("p", {
                textContent: Op(c.value)
              }, null, 8, XT),
              Wn(ht(B), {
                justify: "between",
                class: "ma-0"
              }, {
                default: wo(() => [
                  Rp(Wn(ht(k), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (ni(), Hp(ht(k), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: wo(() => [
                      Wn(ht(qp), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: wo(() => [
                          Wn(ht(El), { icon: ht(xc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Wn(ht(qp), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: wo(() => [
                          Wn(ht(El), { icon: ht(Ws) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : zT("", !0)
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
}, YT = (e) => {
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
}, JT = window.Vuex.useStore, QT = window.Vue.computed, ZT = () => {
  const e = JT(), { currentTranslation: t } = sn(), { currentMTProvider: n, previousRoute: o } = W(e), { currentTargetPage: s } = qe(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = M(), { sourceSection: d } = Y(), i = He(), c = QT(() => {
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
      const _ = t.value.targetSectionTitle;
      _ && (h.translation_target_section = _);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = J.getProviderForInstrumentation(n.value)), h.human_modification_rate = Dt.getMTScoreForPageSection(
      d.value,
      r.value
    ) / 100, h.human_modification_threshold = Dt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(ie({
      event_type: "publish_attempt"
    }, c.value)),
    logPublishSuccessEvent: (h, f) => i(ie({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, c.value)),
    logPublishFailureEvent: () => i(ie({
      event_type: "publish_failure"
    }, c.value))
  };
}, Gp = window.Vue.ref, e6 = window.Vuex.useStore, t6 = () => {
  const e = e6(), { pageURLParameter: t } = M(), { sourceSection: n, targetPageTitleForPublishing: o } = Y(), s = Uh(), a = Gp(!1), r = Gp("pending"), l = () => a.value = !1, u = Nc(), {
    logPublishAttemptEvent: d,
    logPublishSuccessEvent: i,
    logPublishFailureEvent: c
  } = ZT(), g = (m, h) => b(void 0, null, function* () {
    d();
    const f = yield u();
    if (f instanceof vo)
      return c(), { publishFeedbackMessage: f, targetUrl: null };
    const _ = f, {
      /** @type {PageSection} */
      sourceLanguage: w,
      targetLanguage: v
    } = e.state.application, y = o.value, C = e.getters["application/isSandboxTarget"], x = {
      html: YT(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: y,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: w,
      targetLanguage: v,
      revision: s.value,
      isSandbox: C,
      sectionTranslationId: _
    };
    m && (x.captchaId = m, x.captchaWord = h);
    const F = yield ot.publishTranslation(
      x
    );
    return F.publishFeedbackMessage === null ? i(F.pageId, F.revisionId) : c(), F;
  });
  return {
    closePublishDialog: l,
    doPublish: (m = null, h = null) => b(void 0, null, function* () {
      r.value = "pending", a.value = !0;
      let f;
      try {
        f = yield g(
          h == null ? void 0 : h.id,
          m
        );
      } catch (_) {
        if (_ instanceof bo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw _;
      }
      return f;
    }),
    isPublishDialogActive: a,
    publishStatus: r
  };
}, n6 = window.Vue.computed, o6 = () => {
  const e = Se(), { sourceSection: t } = Y(), { getCurrentTitleByLanguage: n } = on(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = M(), a = n6(
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
}, s6 = window.Vuex.useStore, a6 = () => {
  const e = s6(), { targetLanguage: t } = W(e), { sourceSection: n } = Y();
  return () => {
    const o = Dt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = Dt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, r = s === "failure" ? "error" : "warning";
    let l, u;
    return r === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new vo({
      title: l,
      text: u,
      status: r,
      type: "mt"
    });
  };
}, i6 = window.Vue.ref, r6 = window.Vue.computed, l6 = () => {
  const e = a6(), t = i6([]), n = r6(
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
}, c6 = window.Vuex.useStore, u6 = () => {
  const e = c6(), { currentSourcePage: t } = qe(), { sourceLanguage: n, targetLanguage: o } = W(e), { sourceSection: s, targetPageTitleForPublishing: a } = Y();
  return (r) => b(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], d = t.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== c.user)
      try {
        yield hi.addWikibaseLink(
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
}, Xp = window.Vue.ref, d6 = () => {
  const e = Xp(!1), t = Xp(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ge = window.Vue.unref, Le = window.Vue.createVNode, g6 = window.Vue.resolveDirective, ys = window.Vue.createElementVNode, p6 = window.Vue.withDirectives, _o = window.Vue.withCtx, m6 = window.Vue.openBlock, h6 = window.Vue.createElementBlock, f6 = { class: "sx-publisher" }, w6 = { class: "sx-publisher__publish-panel pa-4" }, _6 = { class: "mb-2" }, v6 = ["innerHTML"], S6 = { class: "sx-publisher__section-preview pa-5" }, y6 = ["innerHTML"], Wp = window.Vue.computed, C6 = window.Vue.onMounted, k6 = window.Vue.ref, b6 = window.Vue.watch, x6 = window.Vuex.useStore, Kp = window.Codex.CdxButton, Yp = window.Codex.CdxIcon, $6 = {
  __name: "SXPublisher",
  setup(e) {
    const t = x6(), { sourceSection: n } = Y(), o = Wp(() => {
      var E;
      return (E = n.value) == null ? void 0 : E.title;
    }), s = ue(), a = Wp(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = d6(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = l6(), h = u6(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: v } = t6(), y = (E = null) => b(this, null, function* () {
      if (c.value)
        return;
      const P = yield f(E, r);
      if (!P)
        return;
      const { publishFeedbackMessage: N, targetUrl: T } = P;
      if (u(N)) {
        v();
        return;
      } else
        N && g(N);
      w.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          v();
          return;
        }
        h(T);
      }, 1e3);
    });
    C6(() => m());
    const C = o6(), x = k6(!1), F = () => x.value = !0;
    return b6(x, (E) => {
      E || (p(), m());
    }), (E, P) => {
      const N = g6("i18n");
      return m6(), h6("section", f6, [
        Le(ZL, {
          "is-publishing-disabled": ge(c),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        ys("div", w6, [
          p6(ys("h5", _6, null, 512), [
            [N, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ys("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, v6),
          Le(ge(B), {
            justify: "end",
            class: "ma-0"
          }, {
            default: _o(() => [
              Le(ge(k), { shrink: "" }, {
                default: _o(() => [
                  Le(ge(Kp), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: F
                  }, {
                    default: _o(() => [
                      Le(ge(Yp), { icon: ge(Ik) }, null, 8, ["icon"])
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
        Le(KT, { "publish-feedback-messages": ge(i) }, null, 8, ["publish-feedback-messages"]),
        ys("section", S6, [
          Le(ge(B), { class: "pb-5 ma-0" }, {
            default: _o(() => [
              Le(ge(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Le(ge(k), { shrink: "" }, {
                default: _o(() => [
                  Le(ge(Kp), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ge(C)
                  }, {
                    default: _o(() => [
                      Le(ge(Yp), { icon: ge(Cc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          ys("div", {
            innerHTML: ge(n).translationHtml
          }, null, 8, y6)
        ]),
        Le(IT, {
          active: x.value,
          "onUpdate:active": P[0] || (P[0] = (T) => x.value = T)
        }, null, 8, ["active"]),
        Le(CT, {
          active: ge(l),
          "captcha-details": ge(r),
          onClose: ge(d),
          onPublish: P[1] || (P[1] = (T) => y(T))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Le(lT, {
          active: ge(_),
          status: ge(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const V6 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: $6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, E6 = window.Vue.resolveComponent, D6 = window.Vue.createVNode, A6 = window.Vue.normalizeClass, L6 = window.Vue.openBlock, T6 = window.Vue.createElementBlock;
function B6(e, t, n, o, s, a) {
  const r = E6("sx-publisher");
  return L6(), T6("main", {
    class: A6(["sx-publisher-view", a.classes])
  }, [
    D6(r)
  ], 2);
}
const P6 = /* @__PURE__ */ Q(V6, [["render", B6]]);
const ft = window.Vue.unref, Cn = window.Vue.createVNode, Kn = window.Vue.withCtx, Dl = window.Vue.toDisplayString, Al = window.Vue.createElementVNode, F6 = window.Vue.openBlock, M6 = window.Vue.createBlock, N6 = ["textContent"], U6 = ["textContent"], I6 = ["textContent"], Oh = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: $o,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (F6(), M6(ft(B), {
      class: "cx-search-suggestion pt-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: ft(z.getDir)(e.suggestion.language)
    }, {
      default: Kn(() => [
        Cn(ft(k), { shrink: "" }, {
          default: Kn(() => [
            Cn(ft(nc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Cn(ft(k), { class: "ms-4" }, {
          default: Kn(() => [
            Cn(ft(B), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Kn(() => [
                Cn(ft(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Kn(() => [
                    Al("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Dl(e.suggestion.title)
                    }, null, 8, N6)
                  ]),
                  _: 1
                }),
                Cn(ft(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Kn(() => [
                    Al("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Dl(e.suggestion.description)
                    }, null, 8, U6)
                  ]),
                  _: 1
                }),
                Cn(ft(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Kn(() => [
                    Cn(ft(_e), {
                      icon: ft(Lw),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Al("small", {
                      textContent: Dl(e.suggestion.langLinksCount)
                    }, null, 8, I6)
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
const Cs = window.Vue.unref, ks = window.Vue.openBlock, Ll = window.Vue.createBlock, R6 = window.Vue.createCommentVNode, z6 = window.Vue.resolveDirective, O6 = window.Vue.withDirectives, Jp = window.Vue.createElementBlock, H6 = window.Vue.renderList, j6 = window.Vue.Fragment, q6 = window.Vue.withCtx, G6 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, Qp = window.Vue.computed, X6 = {
  __name: "SearchResultsCard",
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguageURLParameter: t } = M(), n = Qp(() => z.getAutonym(t)), o = e, s = Qp(() => o.searchInput), { searchResultsLoading: a, searchResultsSlice: r } = $h(
      t,
      s
    );
    return (l, u) => {
      const d = z6("i18n");
      return ks(), Ll(Cs(Ie), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: q6(() => [
          Cs(a) ? (ks(), Ll(Cs(Re), { key: 0 })) : Cs(r).length === 0 ? O6((ks(), Jp("p", G6, null, 512)), [
            [d, [
              s.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : R6("", !0),
          (ks(!0), Jp(j6, null, H6(Cs(r), (i) => (ks(), Ll(Oh, {
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
const W6 = window.Vue.toDisplayString, K6 = window.Vue.createElementVNode, Y6 = window.Vue.renderList, J6 = window.Vue.Fragment, Tl = window.Vue.openBlock, Q6 = window.Vue.createElementBlock, Zp = window.Vue.createBlock, Z6 = window.Vue.unref, em = window.Vue.withCtx, e9 = ["textContent"], tm = {
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
    return (t, n) => (Tl(), Zp(Z6(Ie), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: em(() => [
        K6("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: W6(e.cardTitle)
        }, null, 8, e9)
      ]),
      default: em(() => [
        (Tl(!0), Q6(J6, null, Y6(e.suggestions, (o) => (Tl(), Zp(Oh, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, t9 = window.Vue.computed, n9 = (e, t) => t9(() => {
  const o = {
    value: "other",
    props: {
      icon: Fw,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (r, l) => s.findIndex((u) => u === r) === l
  ).map((r) => ({
    value: r,
    props: {
      label: z.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), o9 = window.Vue.computed, s9 = (e, t, n) => o9(() => {
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
const a9 = window.Vue.resolveDirective, i9 = window.Vue.createElementVNode, Bl = window.Vue.withDirectives, Ee = window.Vue.unref, bs = window.Vue.withCtx, Vt = window.Vue.createVNode, xs = window.Vue.openBlock, nm = window.Vue.createBlock, r9 = window.Vue.createCommentVNode, Pl = window.Vue.createElementBlock, l9 = window.Vue.Fragment, c9 = window.Vue.vShow, u9 = { class: "sx-article-search" }, d9 = { class: "mb-0" }, g9 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, $s = window.Vue.ref, p9 = window.Vue.onMounted, Fl = window.Vue.computed, om = window.Vue.watch, m9 = window.Vue.inject, h9 = window.Vuex.useStore, f9 = window.Codex.CdxButton, w9 = window.Codex.CdxIcon, _9 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = $s(""), n = $s(!1), o = $s(null), s = $s(!1), a = $s([]), r = h9(), { sourceLanguage: l, targetLanguage: u } = W(r), { supportedLanguageCodes: d } = Hs(), i = s9(
      l,
      u,
      a
    ), c = n9(
      l,
      i
    ), g = Se(), { fetchAllTranslations: p } = _i();
    p9(() => b(this, null, function* () {
      var U;
      yield rh()(), p();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (j) {
      }
      (U = o.value) == null || U.focus();
    }));
    const m = () => {
      g.push({ name: "dashboard" });
    }, h = lh(), f = (T) => h(T, u.value), _ = (T) => {
      if (T === "other") {
        s.value = !0;
        return;
      }
      f(T);
    };
    om(l, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const w = He();
    om(t, () => {
      n.value || (n.value = !0, w({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: u.value
      }));
    });
    const v = () => {
      s.value = !1;
    }, y = (T) => {
      s.value = !1, a.value.push(T), _(T);
    }, C = Fl(
      () => r.getters["mediawiki/getRecentlyEditedPages"]
    ), x = Fl(() => r.getters["mediawiki/getNearbyPages"]), F = m9("breakpoints"), E = Fl(() => F.value.tabletAndDown), P = Ks(), N = (T, U) => P(
      T.title,
      l.value,
      u.value,
      U
    );
    return (T, U) => {
      const j = a9("i18n");
      return xs(), Pl("section", u9, [
        Vt(Ee(B), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: bs(() => [
            Vt(Ee(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: bs(() => [
                Bl(i9("h5", d9, null, 512), [
                  [j, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Vt(Ee(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: bs(() => [
                Vt(Ee(f9), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": T.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: m
                }, {
                  default: bs(() => [
                    Vt(Ee(w9), { icon: Ee(Eo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Vt(Ee(ai), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": U[0] || (U[0] = (q) => t.value = q),
          "icon-size": 20,
          icon: Ee(Ul),
          placeholder: T.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        Vt(Ee(Ms), {
          class: "sx-article-search__language-button-group",
          items: Ee(c),
          active: Ee(l),
          onSelect: _
        }, null, 8, ["items", "active"]),
        t.value ? r9("", !0) : (xs(), Pl(l9, { key: 0 }, [
          C.value && C.value.length ? (xs(), nm(tm, {
            key: 0,
            "card-title": T.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: C.value,
            onSuggestionClicked: U[1] || (U[1] = (q) => N(q, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : x.value && x.value.length ? (xs(), nm(tm, {
            key: 1,
            "card-title": T.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: x.value,
            onSuggestionClicked: U[2] || (U[2] = (q) => N(q, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : Bl((xs(), Pl("p", g9, null, 512)), [
            [j, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Bl(Vt(X6, {
          "search-input": t.value,
          onSuggestionClicked: U[3] || (U[3] = (q) => N(q, "search_result"))
        }, null, 8, ["search-input"]), [
          [c9, !!t.value]
        ]),
        Vt(Ee(st), {
          value: s.value,
          "onUpdate:value": U[4] || (U[4] = (q) => s.value = q),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: E.value,
          header: E.value,
          title: T.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: v
        }, {
          default: bs(() => [
            Vt(Ee(kh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: Ee(d),
              suggestions: Ee(i),
              placeholder: T.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: y,
              onClose: v
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const v9 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: _9
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, S9 = window.Vue.resolveComponent, y9 = window.Vue.createVNode, C9 = window.Vue.normalizeClass, k9 = window.Vue.openBlock, b9 = window.Vue.createElementBlock;
function x9(e, t, n, o, s, a) {
  const r = S9("sx-article-search");
  return k9(), b9("main", {
    class: C9(["sx-article-search-view", a.classes])
  }, [
    y9(r)
  ], 2);
}
const $9 = /* @__PURE__ */ Q(v9, [["render", x9]]), V9 = window.Vuex.useStore, Hh = [
  {
    path: "",
    name: "dashboard",
    component: ag,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: $9,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: I4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: a3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: wE,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: rL,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: AA,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: WL,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: P6,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: ag,
    meta: { workflowStep: 0 }
  }
], Uc = Ey({
  history: VS(),
  routes: Hh
});
Uc.beforeEach((e, t, n) => {
  const o = V9();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || um.assertUser().catch((l) => {
    l instanceof bo && o.commit("application/setIsLoginDialogOn", !0);
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
    const l = Math.ceil(a) - 1, u = Hh.find(
      (d) => d.meta.workflowStep === l
    );
    n({ name: u.name });
    return;
  }
  n();
});
Uc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const E9 = window.Vue.createApp, D9 = mw.config.get("wgUserLanguage"), A9 = "en", L9 = mw.messages.values || {}, Ao = E9(k_);
Ao.use(Uc);
Ao.use(Kv);
Ao.use(x1);
Ao.use(b1);
const T9 = o_({
  locale: D9,
  finalFallback: A9,
  messages: L9,
  wikilinks: !0
});
Ao.use(T9);
Ao.mount("#contenttranslation");
