/*@nomin*/
var zh = Object.defineProperty, Rh = Object.defineProperties;
var Oh = Object.getOwnPropertyDescriptors;
var Mc = Object.getOwnPropertySymbols;
var Hh = Object.prototype.hasOwnProperty, jh = Object.prototype.propertyIsEnumerable;
var Nc = (e, t, n) => t in e ? zh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, se = (e, t) => {
  for (var n in t || (t = {}))
    Hh.call(t, n) && Nc(e, n, t[n]);
  if (Mc)
    for (var n of Mc(t))
      jh.call(t, n) && Nc(e, n, t[n]);
  return e;
}, Te = (e, t) => Rh(e, Oh(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (u) => {
    try {
      l(n.next(u));
    } catch (g) {
      s(g);
    }
  }, r = (u) => {
    try {
      l(n.throw(u));
    } catch (g) {
      s(g);
    }
  }, l = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(a, r);
  l((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const { CdxButton: e, CdxIcon: t, CdxDialog: n, CdxInfoChip: o } = require("../codex.js");
  window.Codex = { CdxButton: e, CdxIcon: t, CdxDialog: n, CdxInfoChip: o };
}
const Y = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, qh = {
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
}, Gh = window.Vue.toDisplayString, yi = window.Vue.openBlock, Ci = window.Vue.createElementBlock, Xh = window.Vue.createCommentVNode, Uc = window.Vue.createElementVNode, Wh = window.Vue.normalizeClass, Kh = ["width", "height", "aria-labelledby"], Yh = ["id"], Jh = ["fill"], Qh = ["d"];
function Zh(e, t, n, o, s, a) {
  return yi(), Ci("span", {
    class: Wh(["mw-ui-icon notranslate", a.classes])
  }, [
    (yi(), Ci("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (yi(), Ci("title", {
        key: 0,
        id: n.iconName
      }, Gh(n.iconName), 9, Yh)) : Xh("", !0),
      Uc("g", { fill: n.iconColor }, [
        Uc("path", { d: a.iconImagePath }, null, 8, Qh)
      ], 8, Jh)
    ], 8, Kh))
  ], 2);
}
const we = /* @__PURE__ */ Y(qh, [["render", Zh]]);
const ef = {
  name: "MwButton",
  components: {
    MwIcon: we
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
}, tf = window.Vue.renderSlot, nf = window.Vue.resolveComponent, Ic = window.Vue.normalizeClass, Ks = window.Vue.openBlock, ki = window.Vue.createBlock, bi = window.Vue.createCommentVNode, of = window.Vue.toDisplayString, sf = window.Vue.createElementBlock, af = window.Vue.toHandlerKey, rf = window.Vue.withModifiers, lf = window.Vue.mergeProps, cf = window.Vue.createElementVNode, uf = window.Vue.resolveDynamicComponent, df = window.Vue.withCtx, gf = { class: "mw-ui-button__content" }, pf = ["textContent"];
function mf(e, t, n, o, s, a) {
  const r = nf("mw-icon");
  return Ks(), ki(uf(a.component), {
    class: Ic(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: df(() => [
      tf(e.$slots, "default", {}, () => [
        cf("span", gf, [
          n.icon ? (Ks(), ki(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Ic(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : bi("", !0),
          !a.isIcon && n.label ? (Ks(), sf("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: of(n.label)
          }, null, 8, pf)) : bi("", !0),
          n.indicator ? (Ks(), ki(r, lf({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [af(a.indicatorClickEvent)]: t[0] || (t[0] = rf((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : bi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const he = /* @__PURE__ */ Y(ef, [["render", mf]]);
const hf = {
  name: "MwButtonGroup",
  components: {
    MwButton: he
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
}, ff = window.Vue.renderList, wf = window.Vue.Fragment, xi = window.Vue.openBlock, zc = window.Vue.createElementBlock, _f = window.Vue.resolveComponent, vf = window.Vue.withModifiers, Sf = window.Vue.mergeProps, yf = window.Vue.createBlock, Cf = { class: "row mw-ui-button-group ma-0 pa-0" };
function kf(e, t, n, o, s, a) {
  const r = _f("mw-button");
  return xi(), zc("div", Cf, [
    (xi(!0), zc(wf, null, ff(n.items, (l) => (xi(), yf(r, Sf({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: vf((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Ts = /* @__PURE__ */ Y(hf, [["render", kf]]);
const bf = {
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
}, Rc = window.Vue.renderSlot, xf = window.Vue.toDisplayString, Oc = window.Vue.openBlock, Hc = window.Vue.createElementBlock, $f = window.Vue.createCommentVNode, Vf = window.Vue.createElementVNode, Ef = { class: "mw-ui-card" }, Df = ["textContent"], Af = { class: "mw-ui-card__content" };
function Lf(e, t, n, o, s, a) {
  return Oc(), Hc("div", Ef, [
    Rc(e.$slots, "header", {}, () => [
      n.title ? (Oc(), Hc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: xf(n.title)
      }, null, 8, Df)) : $f("", !0)
    ]),
    Vf("div", Af, [
      Rc(e.$slots, "default")
    ])
  ]);
}
const ze = /* @__PURE__ */ Y(bf, [["render", Lf]]);
const Tf = {}, Bf = window.Vue.openBlock, Pf = window.Vue.createElementBlock, Ff = { class: "mw-ui-divider row" };
function Mf(e, t) {
  return Bf(), Pf("div", Ff);
}
const si = /* @__PURE__ */ Y(Tf, [["render", Mf]]);
const Nf = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Uf = window.Vue.renderSlot, If = window.Vue.resolveDynamicComponent, zf = window.Vue.withCtx, Rf = window.Vue.openBlock, Of = window.Vue.createBlock;
function Hf(e, t, n, o, s, a) {
  return Rf(), Of(If(n.tag), { class: "mw-grid container" }, {
    default: zf(() => [
      Uf(e.$slots, "default")
    ]),
    _: 3
  });
}
const jf = /* @__PURE__ */ Y(Nf, [["render", Hf]]), qf = {
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
}, Gf = window.Vue.renderSlot, Xf = window.Vue.resolveDynamicComponent, Wf = window.Vue.normalizeClass, Kf = window.Vue.withCtx, Yf = window.Vue.openBlock, Jf = window.Vue.createBlock;
function Qf(e, t, n, o, s, a) {
  return Yf(), Jf(Xf(n.tag), {
    class: Wf(a.classes)
  }, {
    default: Kf(() => [
      Gf(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const T = /* @__PURE__ */ Y(qf, [["render", Qf]]), El = ["mobile", "tablet", "desktop", "desktop-wide"], Zf = El.reduce(
  (e, t) => Te(se({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), ew = {
  name: "MwCol",
  props: Te(se({}, Zf), {
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
      for (let n = 0; n < El.length; n++) {
        let o = El[n], s = this.$props[o];
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
}, tw = window.Vue.renderSlot, nw = window.Vue.resolveDynamicComponent, ow = window.Vue.normalizeClass, sw = window.Vue.withCtx, aw = window.Vue.openBlock, iw = window.Vue.createBlock;
function rw(e, t, n, o, s, a) {
  return aw(), iw(nw(n.tag), {
    class: ow(a.classes)
  }, {
    default: sw(() => [
      tw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ Y(ew, [["render", rw]]), lw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", cw = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", uw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", ai = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", dw = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, gw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Hp = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Dl = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", pw = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Bs = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", hw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", fw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", jp = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Al = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", ww = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", qp = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", _w = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", vw = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Sw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", yw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Cw = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", kw = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, ei = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, bw = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Gp = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, xw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Xp = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", $w = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", Vw = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Ew = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const $i = window.Vue.computed, Dw = window.Vue.watch, Aw = window.Vue.ref, Lw = window.Vue.nextTick, Tw = {
  name: "MwDialog",
  components: {
    MwButton: he,
    MwRow: T,
    MwCol: C,
    MwDivider: si
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
    const n = Aw(null), o = $i(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = $i(() => ({
      "mw-ui-dialog__overlay--high_opacity": e.overlayOpacity === "high"
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    Dw(
      () => e.value,
      (u) => {
        u ? (r(), Lw(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = $i(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClasses: s,
      mwIconClose: Bs,
      root: n
    };
  }
}, jc = window.Vue.normalizeClass, Vi = window.Vue.createElementVNode, Ei = window.Vue.renderSlot, Ys = window.Vue.resolveComponent, Eo = window.Vue.createVNode, Di = window.Vue.withCtx, qc = window.Vue.createCommentVNode, Bw = window.Vue.withKeys, Gc = window.Vue.openBlock, Pw = window.Vue.createElementBlock, Fw = window.Vue.Transition, Mw = window.Vue.normalizeStyle, Nw = window.Vue.createBlock, Uw = { class: "mw-ui-dialog__shell items-stretch" }, Iw = { class: "mw-ui-dialog__body" };
function zw(e, t, n, o, s, a) {
  const r = Ys("mw-col"), l = Ys("mw-button"), u = Ys("mw-row"), g = Ys("mw-divider");
  return Gc(), Nw(Fw, {
    name: `mw-ui-animation-${n.animation}`,
    style: Mw(o.cssVars)
  }, {
    default: Di(() => [
      n.value ? (Gc(), Pw("div", {
        key: 0,
        ref: "root",
        class: jc(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Bw((i) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        Vi("div", {
          class: jc(["mw-ui-dialog__overlay", o.overlayClasses]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close)
        }, null, 2),
        Vi("div", Uw, [
          n.header ? Ei(e.$slots, "header", { key: 0 }, () => [
            Eo(u, { class: "mw-ui-dialog__header" }, {
              default: Di(() => [
                Eo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Eo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Di(() => [
                    Eo(l, {
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
            Eo(g)
          ]) : qc("", !0),
          Vi("div", Iw, [
            Ei(e.$slots, "default")
          ]),
          Ei(e.$slots, "footer")
        ])
      ], 34)) : qc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const nt = /* @__PURE__ */ Y(Tw, [["render", zw]]);
const Rw = {
  name: "MwInput",
  components: {
    MwIcon: we
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
      const t = se({}, e.$attrs);
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
}, Xc = window.Vue.renderSlot, Ow = window.Vue.resolveComponent, Js = window.Vue.openBlock, Ai = window.Vue.createBlock, Wc = window.Vue.createCommentVNode, Hw = window.Vue.resolveDynamicComponent, jw = window.Vue.toDisplayString, qw = window.Vue.mergeProps, Gw = window.Vue.withModifiers, Xw = window.Vue.createElementVNode, Ww = window.Vue.normalizeClass, Kw = window.Vue.createElementBlock, Yw = { class: "mw-ui-input__content" };
function Jw(e, t, n, o, s, a) {
  const r = Ow("mw-icon");
  return Js(), Kw("div", {
    class: Ww(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Xw("div", Yw, [
      Xc(e.$slots, "icon", {}, () => [
        n.icon ? (Js(), Ai(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Wc("", !0)
      ]),
      (Js(), Ai(Hw(n.type === "textarea" ? n.type : "input"), qw({
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
        textContent: jw(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Xc(e.$slots, "indicator", {}, () => [
        n.indicator ? (Js(), Ai(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Gw((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Wc("", !0)
      ])
    ])
  ], 2);
}
const ti = /* @__PURE__ */ Y(Rw, [["render", Jw]]);
const Qw = {
  name: "MwMessage",
  components: { MwCol: C, MwRow: T, MwIcon: we, MwButton: he },
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
    mwIconClose: Bs,
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
      notice: kw,
      warning: Gp,
      success: ei,
      error: bw
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
}, Li = window.Vue.renderSlot, Qs = window.Vue.resolveComponent, Kc = window.Vue.createVNode, Yc = window.Vue.withCtx, Jc = window.Vue.openBlock, Qc = window.Vue.createBlock, Zc = window.Vue.createCommentVNode, Zw = window.Vue.normalizeClass;
function e0(e, t, n, o, s, a) {
  const r = Qs("mw-icon"), l = Qs("mw-col"), u = Qs("mw-button"), g = Qs("mw-row");
  return e.shown ? (Jc(), Qc(g, {
    key: 0,
    class: Zw([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Yc(() => [
      Li(e.$slots, "icon", {}, () => [
        Kc(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Kc(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Yc(() => [
          Li(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Li(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Jc(), Qc(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Zc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Zc("", !0);
}
const t0 = /* @__PURE__ */ Y(Qw, [["render", e0]]);
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
const n0 = {}, o0 = window.Vue.createElementVNode, s0 = window.Vue.openBlock, a0 = window.Vue.createElementBlock, i0 = { class: "mw-ui-spinner" }, r0 = /* @__PURE__ */ o0("div", { class: "mw-ui-spinner__bounce" }, null, -1), l0 = [
  r0
];
function c0(e, t) {
  return s0(), a0("div", i0, l0);
}
const Re = /* @__PURE__ */ Y(n0, [["render", c0]]), Ze = {
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
const u0 = window.Vue.computed, d0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: we },
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
      default: Xp
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: Ze.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: Ze.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = u0(() => {
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
}, eu = window.Vue.normalizeStyle, tu = window.Vue.openBlock, g0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const p0 = window.Vue.resolveComponent, m0 = window.Vue.createBlock;
function h0(e, t, n, o, s, a) {
  const r = p0("mw-ui-icon");
  return n.thumbnail ? (tu(), g0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: eu(o.style)
  }, null, 4)) : (tu(), m0(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: eu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Xl = /* @__PURE__ */ Y(d0, [["render", h0]]);
const f0 = {
  name: "MwRadio",
  components: { MwRow: T },
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
}, w0 = window.Vue.vModelRadio, Za = window.Vue.createElementVNode, _0 = window.Vue.withDirectives, v0 = window.Vue.toDisplayString, S0 = window.Vue.resolveComponent, y0 = window.Vue.normalizeClass, C0 = window.Vue.withCtx, k0 = window.Vue.openBlock, b0 = window.Vue.createBlock, x0 = { class: "mw-ui-radio__controls" }, $0 = ["id", "disabled", "name", "value"], V0 = /* @__PURE__ */ Za("span", { class: "mw-ui-radio__controls__icon" }, null, -1), E0 = ["for", "textContent"];
function D0(e, t, n, o, s, a) {
  const r = S0("mw-row");
  return k0(), b0(r, {
    class: y0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: C0(() => [
      Za("div", x0, [
        _0(Za("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, $0), [
          [w0, a.inputModel]
        ]),
        V0
      ]),
      Za("label", {
        for: n.id,
        class: "ps-2",
        textContent: v0(n.label)
      }, null, 8, E0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Ll = /* @__PURE__ */ Y(f0, [["render", D0]]), nu = window.Vue.h, A0 = {
  name: "MwRadioGroup",
  components: { MwRadio: Ll },
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
      (o) => nu(Ll, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), nu("div", { class: "mw-ui-radio-group" }, n);
  }
};
const L0 = {
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
}, ou = window.Vue.normalizeClass, su = window.Vue.normalizeStyle, T0 = window.Vue.createElementVNode, B0 = window.Vue.openBlock, P0 = window.Vue.createElementBlock, F0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function M0(e, t, n, o, s, a) {
  return B0(), P0("div", {
    class: ou(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: su(a.containerStyles)
  }, [
    T0("div", {
      class: ou(["mw-progress-bar__bar", a.barClass]),
      style: su(a.barStyles)
    }, null, 6)
  ], 14, F0);
}
const Wp = /* @__PURE__ */ Y(L0, [["render", M0]]), N0 = (e, t, n, o) => (s) => {
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
}, U0 = (e, t, n, o) => ({ initiateDrag: N0(
  e,
  t,
  n,
  o
) }), I0 = window.Vue.ref, au = window.Vue.computed, z0 = (e, t, n, o) => {
  const s = I0(0), a = au(
    () => t.value > e.value
  ), r = au(
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
const Zs = window.Vue.ref, R0 = window.Vue.onMounted, iu = window.Vue.computed, O0 = window.Vue.nextTick, H0 = {
  name: "MwExpandableContent",
  components: {
    MwButton: he
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
    const t = Zs(!0), n = Zs(null), o = iu(
      () => Math.min(e.minHeight, s.value)
    ), s = Zs(1), { initiateDrag: a } = U0(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: u,
      scrollToStepByIndex: g,
      handleArrowUpClick: i
    } = z0(o, s, n, t), c = () => g(u.value + 1), d = Zs(null), p = iu(() => ({
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
    return R0(() => b(this, null, function* () {
      var f;
      yield O0(), s.value = n.value.scrollHeight, (f = d.value) == null || f.addEventListener(
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
      mwIconCollapse: xw,
      mwIconExpand: Dl,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, j0 = window.Vue.renderSlot, q0 = window.Vue.normalizeClass, ea = window.Vue.createElementVNode, G0 = window.Vue.resolveComponent, X0 = window.Vue.createVNode, Ti = window.Vue.openBlock, W0 = window.Vue.createBlock, ru = window.Vue.createCommentVNode, lu = window.Vue.createElementBlock, K0 = window.Vue.normalizeStyle, Y0 = { class: "mw-ui-expandable-content__container" }, J0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, Q0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function Z0(e, t, n, o, s, a) {
  const r = G0("mw-button");
  return Ti(), lu("div", {
    class: "mw-ui-expandable-content",
    style: K0(o.cssVars)
  }, [
    ea("div", Y0, [
      ea("div", {
        ref: "contentRef",
        class: q0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        j0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Ti(), lu("div", J0, [
        X0(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Ti(), W0(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : ru("", !0)
      ])) : ru("", !0)
    ]),
    ea("div", Q0, [
      ea("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const e1 = /* @__PURE__ */ Y(H0, [["render", Z0]]);
const ta = window.Vue.computed, t1 = {
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
      default: Ze.blue600
    },
    inactiveColor: {
      type: String,
      default: Ze.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = ta(() => e.size / 2 * 0.9), n = ta(() => Math.PI * (t.value * 2)), o = ta(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ta(() => ({
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
}, cu = window.Vue.createElementVNode, uu = window.Vue.normalizeStyle, n1 = window.Vue.openBlock, o1 = window.Vue.createElementBlock, s1 = ["width", "height", "viewport"], a1 = ["r", "cx", "cy", "stroke-dasharray"], i1 = ["r", "cx", "cy", "stroke-dasharray"];
function r1(e, t, n, o, s, a) {
  return n1(), o1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: uu(o.cssVars)
  }, [
    cu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, a1),
    cu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: uu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, i1)
  ], 12, s1);
}
const l1 = /* @__PURE__ */ Y(t1, [["render", r1]]), c1 = window.Vue.ref, on = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, sn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${on.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${on.tablet}px) and (max-width: ${on.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${on.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${on.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${on.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${on.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${on["desktop-wide"]}px)`
}, Bi = {
  mobile: () => matchMedia(sn.mobile).matches,
  tablet: () => matchMedia(sn.tablet).matches,
  desktop: () => matchMedia(sn.desktop).matches,
  desktopwide: () => matchMedia(sn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(sn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(sn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(sn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(sn["desktop-and-down"]).matches
}, u1 = {
  install: (e) => {
    const t = () => {
      for (let o in Bi)
        Bi.hasOwnProperty(o) && (n.value[o] = Bi[o]());
    }, n = c1({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Te(se({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, d1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Te(se({}, e.config.globalProperties.$mwui || {}), {
      colors: Ze
    }), e.provide("colors", Ze);
  }
};
class So extends Error {
}
const g1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new So();
}), Kp = { assertUser: g1 };
const p1 = window.Vue.resolveDirective, Do = window.Vue.createElementVNode, du = window.Vue.withDirectives, m1 = window.Vue.toDisplayString, h1 = window.Vue.unref, gu = window.Vue.withCtx, f1 = window.Vue.openBlock, w1 = window.Vue.createBlock, _1 = window.Vue.createCommentVNode, v1 = { class: "pa-4 sx-login-dialog__header" }, S1 = { class: "sx-login-dialog__body px-6 pb-4" }, y1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, C1 = ["href"], k1 = window.Vue.computed, b1 = window.Vue.ref, x1 = window.Vuex.useStore, $1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = x1(), n = k1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = b1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = p1("i18n");
      return n.value ? (f1(), w1(h1(nt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: gu(() => [
          Do("div", v1, [
            du(Do("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: gu(() => [
          du(Do("div", S1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          Do("div", y1, [
            Do("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, m1(a.$i18n("cx-sx-login-dialog-button-label")), 9, C1)
          ])
        ]),
        _: 1
      })) : _1("", !0);
    };
  }
}, j = new mw.cx.SiteMapper(), V1 = mw.util.getUrl, E1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class ii {
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
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = g;
  }
}
const na = "original", oa = "empty", D1 = {
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
      na,
      oa
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return D1[t] || t;
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
    return na;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return oa;
  }
  static isUserMTProvider(t) {
    return [na, oa].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === oa ? "blank" : t === na ? "source" : t.toLowerCase();
  }
}
class yn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Te(se({}, a), {
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
const pu = (e) => {
  var n;
  const t = ni(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ni = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Gn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Yp = (e) => {
  const t = ni(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = A1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, A1 = (e) => {
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
}, Jp = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Qp = (e) => {
  const t = Jp(e);
  return t == null ? void 0 : t.targetExists;
};
class Pi {
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
class Ie {
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
      (a) => Gn(a)
    );
    s && Qp(s) && (this.blockTemplateAdaptationInfo[t] = Jp(s));
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
      (t) => Gn(t)
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
    const t = ni(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? pu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Gn(o));
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
    return n && pu(n) || "";
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
    const o = ni(n);
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
      (a) => Gn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Pi({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Pi({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Pi({
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
        (s) => Gn(s)
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
const L1 = [
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
], T1 = (e, t, n) => {
  let o, s, a, r, l;
  return !e || !t ? 0 : e === t ? 1 : (s = r = mu(e, n), a = l = mu(t, n), l.length > r.length && (s = l, a = r), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, mu = function(e, t) {
  return e ? L1.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Zp = 95, B1 = 85, P1 = [
  { status: "failure", value: 100 - Zp },
  { status: "warning", value: 100 - B1 },
  { status: "success", value: 100 }
], em = (e, t, n) => {
  const o = hu(e).textContent, s = hu(t).textContent, a = 100 - 100 * T1(s, o, n);
  return Math.ceil(a);
}, F1 = (e) => P1.find((t) => e <= t.value).status, M1 = (e, t) => em(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), N1 = () => (100 - Zp) / 100, hu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, $t = {
  calculateScore: em,
  getScoreStatus: F1,
  getMTScoreForPageSection: M1,
  getMtModificationThreshold: N1
}, sa = "__LEAD_SECTION__";
class Tl {
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
    return sa;
  }
  static isSectionLead(t) {
    return !t || t === sa;
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
    return n instanceof Ie ? n.transclusionNode.outerHTML : n instanceof yn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ie ? t.blockTemplateSelected = !1 : t instanceof yn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ie ? n.blockTemplateSelected = !0 : n instanceof yn && (n.selected = !0);
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
    if (o instanceof Ie)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof yn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ie ? n.blockTemplateProposedTranslations[t] || "" : n instanceof yn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ie ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof yn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = $t.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? sa : this.originalTitle;
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
    return this.isLeadSection ? sa : this.title;
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
class Wl extends ii {
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
    status: g,
    pageRevision: i,
    targetTitle: c,
    sourceSectionTitle: d,
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
      status: g,
      targetTitle: c
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
    return Tl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Tl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const ft = "previous-edits", Vt = "popular", et = "topic", ge = "collections", ht = "automatic", fu = window.Vue.ref, U1 = mw.loader.require("ext.cx.articletopics"), aa = {
  type: ht,
  id: ft
}, tm = () => {
  const e = fu(
    U1.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = fu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const r = s == null ? void 0 : s.toLowerCase(), l = a == null ? void 0 : a.toLowerCase();
    return r === et ? e.value.some((u) => u === a) ? { type: r, id: l } : (t.value = !0, aa) : r === ge ? { type: r, id: a } : l === ft ? {
      type: ht,
      id: ft
    } : l === Vt ? {
      type: ht,
      id: Vt
    } : l === ge ? {
      type: ht,
      id: ge
    } : aa;
  }, isDefaultFilter: ({ type: s, id: a }) => s === aa.type && a === aa.id };
}, I1 = window.Vue.inject, z1 = window.Vue.reactive;
var R1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, nm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(R1, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(c) {
        this.locale = c;
      }
      convertPlural(c, d) {
        const p = /\d+=/i;
        if (!d || d.length === 0)
          return "";
        for (let h = 0; h < d.length; h++) {
          const f = d[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === c)
              return f.slice(f.indexOf("=") + 1);
            d[h] = void 0;
          }
        }
        d = d.filter((h) => !!h);
        let m = this.getPluralForm(c, this.locale);
        return m = Math.min(m, d.length - 1), d[m];
      }
      getPluralForm(c, d) {
        const p = new Intl.PluralRules(d), m = p.resolvedOptions().pluralCategories, h = p.select(c);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(c, d = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (d) {
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
      convertGrammar(c, d) {
        return c;
      }
      gender(c, d) {
        if (!d || d.length === 0)
          return "";
        for (; d.length < 2; )
          d.push(d[d.length - 1]);
        return c === "male" ? d[0] : c === "female" ? d[1] : d.length === 3 ? d[2] : d[0];
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
        let d = i.match(/[aou][^äöy]*$/i);
        const p = i;
        switch (i.match(/wiki$/i) && (d = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), c) {
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
        let d, p, m, h;
        switch (d = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), d = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), c) {
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
      emit(c, d) {
        let p, m, h;
        switch (typeof c) {
          case "string":
          case "number":
            p = c;
            break;
          case "object":
            if (m = c.slice(1).map((f) => this.emit(f, d)), h = c[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, d);
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
        let d = "";
        return c.forEach((p) => {
          d += p;
        }), d;
      }
      replace(c, d) {
        const p = parseInt(c[0], 10);
        return p < d.length ? d[p] : "$" + (p + 1);
      }
      plural(c) {
        const d = parseFloat(this.language.convertNumber(c[0], 10)), p = c.slice(1);
        return p.length ? this.language.convertPlural(d, p) : "";
      }
      gender(c) {
        const d = c[0], p = c.slice(1);
        return this.language.gender(d, p);
      }
      grammar(c) {
        const d = c[0], p = c[1];
        return p && d && this.language.convertGrammar(p, d);
      }
      wikilink(c) {
        let d, p = c[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return d = c.length === 1 ? p : c[1], `<a href="${m}" title="${p}">${d}</a>`;
      }
      extlink(c) {
        if (c.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${c[0]}">${c[1]}</a>`;
      }
      bidi(c) {
        const d = function(p) {
          const m = p.match(r);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(c[0]);
        return d === "ltr" ? "‪" + c[0] + "‬" : d === "rtl" ? "‫" + c[0] + "‬" : c[0];
      }
      formatnum(c) {
        const d = !!c[1] && c[1] === "R", p = c[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, d) : p;
      }
      htmlattributes(c) {
        const d = {};
        for (let p = 0, m = c.length; p < m; p += 2)
          d[c[p]] = c[p + 1];
        return d;
      }
      htmlelement(c) {
        const d = c.shift(), p = c.shift();
        let m = c, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${d}${h}>${m.join("")}</${d}>`;
      }
    }
    class u {
      constructor(c, { wikilinks: d = !1 } = {}) {
        this.locale = c, this.wikilinks = d, this.emitter = new l(this.locale);
      }
      parse(c, d) {
        if (c.includes("{{") || c.includes("<") || this.wikilinks && c.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function _(V) {
              return () => {
                for (let N = 0; N < V.length; N++) {
                  const Ee = V[N]();
                  if (Ee !== null)
                    return Ee;
                }
                return null;
              };
            }
            function w(V) {
              const N = f, Ee = [];
              for (let Tt = 0; Tt < V.length; Tt++) {
                const Bt = V[Tt]();
                if (Bt === null)
                  return f = N, null;
                Ee.push(Bt);
              }
              return Ee;
            }
            function S(V, N) {
              return () => {
                const Ee = f, Tt = [];
                let Bt = N();
                for (; Bt !== null; )
                  Tt.push(Bt), Bt = N();
                return Tt.length < V ? (f = Ee, null) : Tt;
              };
            }
            function y(V) {
              const N = V.length;
              return () => {
                let Ee = null;
                return m.slice(f, f + N) === V && (Ee = V, f += N), Ee;
              };
            }
            function k(V) {
              return () => {
                const N = m.slice(f).match(V);
                return N === null ? null : (f += N[0].length, N[0]);
              };
            }
            const x = k(/^\s+/), F = y("|"), E = y(":"), P = y("\\"), J = k(/^./), B = y("$"), I = k(/^\d+/), Q = y('"'), X = y("'"), ot = k(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Le = k(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Et = _([wt, k(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function wt() {
              const V = w([P, J]);
              return V === null ? null : V[1];
            }
            const Vo = _([wt, Le]), Vn = _([wt, ot]);
            function Dt() {
              const V = w([B, I]);
              return V === null ? null : ["REPLACE", parseInt(V[1], 10) - 1];
            }
            const Ge = (nn = k(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), At = function(V) {
              return V.toString();
            }, () => {
              const V = nn();
              return V === null ? null : At(V);
            });
            var nn, At;
            function Lt() {
              const V = w([F, S(0, Gs)]);
              if (V === null)
                return null;
              const N = V[1];
              return N.length > 1 ? ["CONCAT"].concat(N) : N[0];
            }
            function Xe() {
              const V = w([Ge, E, Dt]);
              return V === null ? null : [V[0], V[2]];
            }
            function v() {
              const V = w([Ge, E, Gs]);
              return V === null ? null : [V[0], V[2]];
            }
            function D() {
              const V = w([Ge, E]);
              return V === null ? null : [V[0], ""];
            }
            const A = _([function() {
              const V = w([_([Xe, v, D]), S(0, Lt)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = w([Ge, S(0, Lt)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), L = y("{{"), q = y("}}"), oe = y("[["), R = y("]]"), z = y("["), Z = y("]");
            function st() {
              const V = w([L, A, q]);
              return V === null ? null : V[1];
            }
            const fe = _([function() {
              const V = w([S(1, Gs), F, S(1, qs)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = w([S(1, Gs)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function Dc() {
              let V = null;
              const N = w([oe, fe, R]);
              if (N !== null) {
                const Ee = N[1];
                V = ["WIKILINK"].concat(Ee);
              }
              return V;
            }
            function Ac() {
              let V = null;
              const N = w([z, S(1, Ph), x, S(1, qs), Z]);
              return N !== null && (V = ["EXTLINK", N[1].length === 1 ? N[1][0] : ["CONCAT"].concat(N[1]), ["CONCAT"].concat(N[3])]), V;
            }
            const hi = k(/^[A-Za-z]+/);
            function Ah() {
              const V = k(/^[^"]*/), N = w([Q, V, Q]);
              return N === null ? null : N[1];
            }
            function Lh() {
              const V = k(/^[^']*/), N = w([X, V, X]);
              return N === null ? null : N[1];
            }
            function Th() {
              const V = k(/^\s*=\s*/), N = w([x, hi, V, _([Ah, Lh])]);
              return N === null ? null : [N[1], N[3]];
            }
            function Bh() {
              const V = S(0, Th)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const Ph = _([st, Dt, Dc, Ac, function() {
              const V = S(1, Et)();
              return V === null ? null : V.join("");
            }]), qs = _([st, Dt, Dc, Ac, function() {
              let V = null;
              const N = f, Ee = y("<"), Tt = k(/^\/?/), Bt = k(/^\s*>/), fi = w([Ee, hi, Bh, Tt, Bt]);
              if (fi === null)
                return null;
              const Tc = f, Bc = fi[1], wi = S(0, qs)(), Fh = f, Pc = w([y("</"), hi, Bt]);
              if (Pc === null)
                return ["CONCAT", m.slice(N, Tc)].concat(wi);
              const Mh = f, Nh = Pc[1], Fc = fi[2];
              if (function(En, Xs, _i, vi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((En = En.toLowerCase()) !== (Xs = Xs.toLowerCase()) || vi.allowedHtmlElements.indexOf(En) === -1)
                  return !1;
                const Uh = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Ws = 0, Ih = _i.length; Ws < Ih; Ws += 2) {
                  const Si = _i[Ws];
                  if (vi.allowedHtmlCommonAttributes.indexOf(Si) === -1 && (vi.allowedHtmlAttributesByElement[En] || []).indexOf(Si) === -1 || Si === "style" && _i[Ws + 1].search(Uh) !== -1)
                    return !1;
                }
                return !0;
              }(Bc, Nh, Fc.slice(1)))
                V = ["HTMLELEMENT", Bc, Fc].concat(wi);
              else {
                const En = (Xs) => Xs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", En(m.slice(N, Tc))].concat(wi, En(m.slice(Fh, Mh)));
              }
              return V;
            }, function() {
              const V = S(1, Vn)();
              return V === null ? null : V.join("");
            }]), Gs = _([st, Dt, function() {
              const V = S(1, Vo)();
              return V === null ? null : V.join("");
            }]), Lc = function() {
              const V = S(0, qs)();
              return V === null ? null : ["CONCAT"].concat(V);
            }();
            if (Lc === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return Lc;
          }(c, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, d);
        }
        return this.simpleParse(c, d);
      }
      simpleParse(c, d) {
        return c.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return d[h] !== void 0 ? d[h] : "$" + m;
        });
      }
    }
    class g {
      constructor(c) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(c, d) {
        if (typeof c != "object")
          throw new Error("Invalid message source. Must be an object");
        if (d) {
          if (!/^[a-zA-Z0-9-]+$/.test(d))
            throw new Error(`Invalid locale ${d}`);
          for (const p in c)
            if (p.indexOf("@") !== 0) {
              if (typeof c[p] == "object")
                return this.load(c);
              if (typeof c[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${d} locale.`);
              break;
            }
          this.sourceMap.has(d) ? this.sourceMap.set(d, Object.assign(this.sourceMap.get(d), c)) : this.sourceMap.set(d, c);
        } else
          for (d in c)
            this.load(c[d], d);
      }
      getMessage(c, d) {
        const p = this.sourceMap.get(d);
        return p ? p[c] : null;
      }
      hasLocale(c) {
        return this.sourceMap.has(c);
      }
    }
    return class {
      constructor(i, { finalFallback: c = "en", messages: d, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: p }), this.messageStore = new g(), d && this.load(d, this.locale), this.finalFallback = c, this.wikilinks = p;
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
        let c = this.locale, d = 0;
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
          c = p[d], d++;
        }
        return i;
      }
      registerParserPlugin(i, c) {
        l.prototype[i] = c;
      }
    };
  });
})(nm);
var O1 = nm.exports;
const wu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, om = Symbol("banana-context");
function de() {
  const e = I1(om);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function H1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = z1(new O1(e.locale, e));
  return {
    install: (n) => {
      n.provide(om, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = wu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = wu(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const xn = window.Vue.ref, j1 = window.Vue.computed, ri = xn(null), li = xn(null), Kl = xn(null), Ps = xn(null), Yl = xn(null), sm = xn(null), am = xn(null), im = xn(null), { validateFilters: q1, filtersValidatorError: G1 } = tm(), bs = {
  from: ri,
  to: li,
  section: Ps,
  draft: Yl,
  page: Kl,
  "active-list": im
}, X1 = j1(() => ({
  type: sm.value,
  id: am.value
})), rm = (e, t) => {
  sm.value = e, am.value = t, oi("filter-type", e), t && oi("filter-id", t);
}, W1 = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  for (const o in n) {
    const s = n[o];
    t.set(o, s), bs[o].value = s;
  }
  e instanceof Wl && (t.set("draft", !0), Yl.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), Ps.value = e.sourceSectionTitle)), t.delete("title"), Fs(Object.fromEntries(t));
}, Jl = (e, t) => {
  bs[e].value = t, oi(e, t);
}, K1 = (e) => {
  Jl("section", e);
}, Y1 = (e) => {
  Jl("page", e);
}, J1 = (e) => {
  Jl("active-list", e);
}, Fs = (e) => {
  history.replaceState(
    {},
    document.title,
    V1("Special:ContentTranslation", e)
  );
}, Q1 = () => {
  const e = de(), t = new URLSearchParams(location.search);
  Kl.value = t.get("page"), ri.value = t.get("from"), li.value = t.get("to"), Ps.value = t.get("section");
  const n = q1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  rm(n.type, n.id), G1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, Z1 = () => {
  const e = new URLSearchParams(location.search);
  Ps.value = null, e.delete("section"), e.delete("title"), Fs(Object.fromEntries(e));
}, oi = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), Fs(Object.fromEntries(n));
}, e_ = (e) => new URLSearchParams(location.search).get(e), t_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), ri.value = e, li.value = t, n.delete("title"), Fs(Object.fromEntries(n));
}, n_ = (e = ["active-list"]) => {
  for (const n in bs)
    e.includes(n) || (bs[n].value = null);
  const t = e.reduce(
    (n, o) => Te(se({}, n), {
      [o]: bs[o].value
    }),
    {}
  );
  Fs(t);
}, M = () => ({
  setLanguageURLParams: t_,
  setSectionURLParam: K1,
  setTranslationURLParams: W1,
  initializeURLState: Q1,
  clearURLParameters: n_,
  clearSectionURLParameter: Z1,
  setUrlParam: oi,
  getUrlParam: e_,
  pageURLParameter: Kl,
  sourceLanguageURLParameter: ri,
  targetLanguageURLParameter: li,
  sectionURLParameter: Ps,
  draftURLParameter: Yl,
  setPageURLParam: Y1,
  currentSuggestionFilters: X1,
  setFilterURLParams: rm,
  activeDashboardTabParameter: im,
  setActiveDashboardTabParameter: J1
});
const o_ = window.Vue.resolveDynamicComponent, _u = window.Vue.openBlock, vu = window.Vue.createBlock, s_ = window.Vue.Transition, Ao = window.Vue.withCtx, Lo = window.Vue.createVNode, a_ = window.Vue.resolveComponent, Fi = window.Vue.unref, i_ = window.Vuex.useStore, r_ = window.Vue.computed, l_ = window.Vue.onMounted, c_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = M();
    t();
    const n = i_(), o = r_(
      () => n.state.application.autoSavePending
    );
    return l_(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && Kp.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof So && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const r = a_("router-view");
      return _u(), vu(Fi(jf), { id: "contenttranslation" }, {
        default: Ao(() => [
          Lo(Fi(T), { class: "cx-container" }, {
            default: Ao(() => [
              Lo(Fi(C), { cols: "12" }, {
                default: Ao(() => [
                  Lo(r, null, {
                    default: Ao(({ Component: l, route: u }) => [
                      Lo(s_, {
                        name: u.meta.transitionName
                      }, {
                        default: Ao(() => [
                          (_u(), vu(o_(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Lo($1)
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
}, u_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, d_ = {
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
class lm {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class fo {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new lm(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Su = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Te(se({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class g_ {
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
    const t = Su((s = this.user) == null ? void 0 : s.content), n = Su((a = this.mt) == null ? void 0 : a.content);
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
class Ql extends ii {
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
      status: u,
      targetTitle: g
    }), this.targetUrl = i, this.sectionTranslations = c;
  }
}
const ci = mw.user.isAnon() ? void 0 : "user", cm = (e) => {
  if (e === "assertuserfailed")
    throw new So();
};
function um(e, t = null) {
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
        (u) => new Wl(Te(se({}, u), { status: e }))
      ) : r = a.map(
        (u) => new Ql(Te(se({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield um(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function p_(e) {
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
      (a) => new g_(a)
    );
  });
}
function m_(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== K.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = j.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, u]) => {
      var i, c;
      if (!u) {
        const d = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(d);
      }
      return (c = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : c.content;
    }).catch((l) => Promise.reject(l));
  });
}
const h_ = (e, t, n) => {
  const o = j.getApi(t);
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
}, f_ = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: l,
  captchaId: u,
  captchaWord: g,
  isSandbox: i,
  sectionTranslationId: c
}) => {
  const d = {
    assert: ci,
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
  return u && (d.captchaid = u, d.captchaword = g), new mw.Api().postWithToken("csrf", d).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new fo({
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
    cm(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new fo({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, w_ = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: u,
  isSandbox: g,
  progress: i
}) => {
  const c = {
    assert: ci,
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
    issandbox: g,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", c).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    cm(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new fo({ text: h, status: "error" });
  });
}, __ = (e) => {
  const t = {
    assert: ci,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, v_ = () => {
  const e = {
    assert: ci,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Ql(n.cxcheckunreviewed.translation)
  );
}, S_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, y_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, C_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), tt = {
  fetchTranslations: um,
  fetchTranslationUnits: p_,
  fetchSegmentTranslation: m_,
  parseTemplateWikitext: h_,
  publishTranslation: f_,
  saveTranslation: w_,
  deleteTranslation: S_,
  fetchTranslatorStats: C_,
  deleteCXTranslation: y_,
  splitTranslation: __,
  checkUnreviewedTranslations: v_
};
function k_(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield tt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const b_ = {
  fetchTranslatorStats: k_
}, x_ = {
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
}, $_ = {
  namespaced: !0,
  state: u_,
  getters: d_,
  actions: b_,
  mutations: x_
}, dm = [
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
], V_ = [
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
], E_ = [
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
], A_ = [
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
], L_ = {
  en: dm,
  es: V_,
  bn: E_,
  fr: D_,
  de: A_
}, T_ = {
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
  appendixSectionTitles: L_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, B_ = {
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
class yo {
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
class kn {
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
    isListable: g = !0,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = l, this.targetSections = u, this.isListable = g, this.suggestionProvider = i;
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
class wo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Zl {
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
class gm extends yo {
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
    }), this.collection = new Zl(u);
  }
}
class pm extends kn {
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
      targetSections: u,
      isListable: g,
      suggestionProvider: i
    }), this.collection = new Zl(c);
  }
}
const P_ = dm, Zt = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
  return b(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield Zt({ urlPostfix: t, urlParams: e })) || []).map((o) => new Zl(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function M_(e, t, n, o = 24) {
  return b(this, null, function* () {
    return ((yield Zt({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (r) => new yo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
const N_ = (e, t) => b(void 0, null, function* () {
  return ((yield Zt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new yo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), U_ = (e, t) => b(void 0, null, function* () {
  const s = (yield Zt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new kn({
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
}), I_ = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Zt({ urlParams: o })) || []).map(
    (a) => new gm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), z_ = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Zt({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new pm({
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
function R_(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = j.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new kn(a) : null;
  });
}
function O_(e, t, n) {
  return b(this, null, function* () {
    const a = (yield Zt({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (r) => new kn({
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
function H_(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Zt({ urlParams: s })) || []).map(
      (r) => new yo({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function j_(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Zt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new kn({
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
function q_(e) {
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
    }, n = j.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function G_(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = j.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function X_(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = j.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function W_(e) {
  const t = P_.map((o) => encodeURIComponent(o)).join("|"), n = j.getCXServerUrl(
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
const K_ = (e, t, n) => {
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
}, Y_ = (e) => {
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
}, J_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new wo(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, le = {
  fetchFavorites: J_,
  fetchPageSuggestions: M_,
  fetchSectionSuggestion: R_,
  fetchSectionSuggestions: O_,
  fetchSuggestionSeeds: G_,
  fetchAppendixTargetSectionTitles: W_,
  fetchSuggestionSourceSections: X_,
  markFavorite: K_,
  unmarkFavorite: Y_,
  fetchUserEdits: q_,
  fetchMostPopularPageSuggestions: N_,
  fetchMostPopularSectionSuggestions: U_,
  fetchPageSuggestionsByTopics: H_,
  fetchSectionSuggestionsByTopics: j_,
  fetchPageCollections: F_,
  fetchPageSuggestionsByCollections: I_,
  fetchSectionSuggestionsByCollections: z_
};
function Q_(o, s) {
  return b(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield le.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const Z_ = {
  fetchAppendixSectionTitles: Q_
}, ev = {
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
}, tv = {
  namespaced: !0,
  state: T_,
  getters: B_,
  actions: Z_,
  mutations: ev
}, nv = {
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
}, ov = {
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
class Co {
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
    thumbnail: g,
    title: i,
    revisions: c,
    _alias: d,
    content: p = null,
    sections: m = []
  } = {}) {
    var h;
    this.language = r, this.title = i, this.pageId = a, this.description = t, this.image = s, this.pageprops = l, this.pageviews = u, this.thumbnail = g, this.langLinksCount = n, this.articleSize = (h = c == null ? void 0 : c[0]) == null ? void 0 : h.size, this.revision = o, this.alias = d, this.wikidataId = l == null ? void 0 : l.wikibase_item, this.content = p, this.sections = m;
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
      const [a, ...r] = s;
      let l = "";
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = a.textContent.trim() : r.unshift(a);
      const g = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (c) => new Ie({
          sentences: uv(c),
          node: c
        })
      ), i = !l;
      return new Tl({ id: u, title: l, subSections: g, isLeadSection: i });
    }
  );
}, cv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, uv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new yn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), mm = {
  convertSegmentedContentToPageSections: lv
}, ec = 120, dv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: ec,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return j.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => Te(se({}, i), { [c.to]: c.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (i, c) => Te(se({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = g[i.title] || l[i.title] || null;
      return new Co(Te(se({}, i), { _alias: c }));
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
  return j.getApi(e).get(n).then((s) => {
    var u, g;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return l ? Object.freeze(new sv(l, r)) : null;
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
  return j.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((l) => {
    var u, g;
    return (g = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : g["*"];
  }).filter((l) => !!l));
}, mv = (e, t, n, o = null) => hm(
  e,
  t,
  n,
  o
).then(
  (s) => new Co({
    sections: mm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), hm = (e, t, n, o = null) => {
  const s = j.getWikiDomainCode(e), a = j.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const u = j.getCXServerUrl(
    l,
    r
  );
  return fetch(u).then((g) => g.json()).then((g) => g.segmentedContent);
}, hv = (e) => b(void 0, null, function* () {
  const t = E1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: ec,
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
  return yield j.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Co(s))).catch((o) => []);
}), fv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: ec,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return j.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new Co(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, ko = {
  fetchPages: dv,
  fetchLanguageTitles: gv,
  fetchPageContent: mv,
  fetchSegmentedContent: hm,
  fetchNearbyPages: hv,
  searchPagesByTitlePrefix: fv,
  fetchLanguageLinksForLanguage: pv
};
function wv() {
  return j.getLanguagePairs().then((e) => e.sourceLanguages);
}
function _v(e, t) {
  return b(this, null, function* () {
    const n = j.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new K(e, t, o.mt)
      )
    );
  });
}
function vv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Sv(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = j.getWikiDomainCode(e), r = j.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, u = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(u.postWithToken("csrf", l)).then((g) => {
    const c = {
      action: "tag",
      revid: g.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(u.postWithToken("csrf", c));
  });
}
const ui = {
  fetchSupportedLanguageCodes: wv,
  fetchSupportedMTProviders: _v,
  fetchCXServerToken: vv,
  addWikibaseLink: Sv
};
function yv({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const l = o.slice(r, r + s), u = ko.fetchPages(n, l).then(
      (g) => g.forEach((i) => t("addPage", i))
    );
    a.push(u);
  }
  return Promise.all(a);
}
function Cv(n) {
  return b(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield ui.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function kv(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield ko.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const bv = {
  fetchNearbyPages: kv,
  fetchPageMetadata: yv,
  fetchSupportedLanguageCodes: Cv
}, xv = {
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
}, $v = {
  namespaced: !0,
  state: nv,
  getters: ov,
  actions: bv,
  mutations: xv
}, Vv = {
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
}, Ev = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, Dv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Gn(a)
  );
  return s && Qp(s) ? tt.parseTemplateWikitext(
    Yp(s),
    n,
    t
  ) : Promise.resolve(null);
}, fm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Gn(a)
  );
  return s ? tt.parseTemplateWikitext(
    Yp(s),
    n,
    t
  ) : Promise.resolve(null);
}, Av = (o) => b(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, r;
  t.cxServerToken || (yield ui.fetchCXServerToken().then(
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
}), Lv = { getCXServerToken: Av }, Tv = {
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
  }
}, Bv = {
  namespaced: !0,
  state: Vv,
  getters: Ev,
  actions: Lv,
  mutations: Tv
}, Pv = window.Vuex.createStore, Fv = Pv({
  modules: { translator: $_, suggestions: tv, mediawiki: $v, application: Bv }
});
function Mv() {
  return wm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function wm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Nv = typeof Proxy == "function", Uv = "devtools-plugin:setup", Iv = "plugin:settings:set";
let Xn, Bl;
function zv() {
  var e;
  return Xn !== void 0 || (typeof window != "undefined" && window.performance ? (Xn = !0, Bl = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Xn = !0, Bl = global.perf_hooks.performance) : Xn = !1), Xn;
}
function Rv() {
  return zv() ? Bl.now() : Date.now();
}
class Ov {
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
        return Rv();
      }
    }, n && n.on(Iv, (r, l) => {
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
      }), this.fallbacks[l](...u)) : (...u) => new Promise((g) => {
        this.targetQueue.push({
          method: l,
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
function Hv(e, t) {
  const n = e, o = wm(), s = Mv(), a = Nv && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Uv, e, t);
  else {
    const r = a ? new Ov(n, s) : null;
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
const _m = window.Vue.getCurrentInstance, _o = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const xt = window.Vue.computed, xs = window.Vue.unref, jv = window.Vue.watchEffect, vm = window.Vue.defineComponent, qv = window.Vue.reactive, Sm = window.Vue.h, Mi = window.Vue.provide, Gv = window.Vue.ref, ym = window.Vue.watch, Xv = window.Vue.shallowRef, Wv = window.Vue.shallowReactive, Kv = window.Vue.nextTick, Qt = typeof window != "undefined";
function Yv(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const G = Object.assign;
function Ni(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Oe(s) ? s.map(e) : e(s);
  }
  return n;
}
const $s = () => {
}, Oe = Array.isArray;
function O(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Jv = /\/$/, Qv = (e) => e.replace(Jv, "");
function Ui(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = tS(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Zv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function yu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Cu(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && bn(t.matched[o], n.matched[s]) && Cm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function bn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Cm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!eS(e[n], t[n]))
      return !1;
  return !0;
}
function eS(e, t) {
  return Oe(e) ? ku(e, t) : Oe(t) ? ku(t, e) : e === t;
}
function ku(e, t) {
  return Oe(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function tS(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return O(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Es;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Es || (Es = {}));
var Vs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Vs || (Vs = {}));
function nS(e) {
  if (!e)
    if (Qt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Qv(e);
}
const oS = /^[^#]+#/;
function sS(e, t) {
  return e.replace(oS, "#") + t;
}
function aS(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const di = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function iS(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          O(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        O(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && O(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = aS(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function bu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Pl = /* @__PURE__ */ new Map();
function rS(e, t) {
  Pl.set(e, t);
}
function lS(e) {
  const t = Pl.get(e);
  return Pl.delete(e), t;
}
let cS = () => location.protocol + "//" + location.host;
function km(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), yu(u, "");
  }
  return yu(n, e) + o + s;
}
function uS(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: d }) => {
    const p = km(e, location), m = n.value, h = t.value;
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
        type: Es.pop,
        direction: f ? f > 0 ? Vs.forward : Vs.back : Vs.unknown
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
    d.state && d.replaceState(G({}, d.state, { scroll: di() }), "");
  }
  function c() {
    for (const d of a)
      d();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: g,
    destroy: c
  };
}
function xu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? di() : null
  };
}
function dS(e) {
  const { history: t, location: n } = window, o = {
    value: km(e, n)
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
    const c = e.indexOf("#"), d = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : cS() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? O("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](d);
    }
  }
  function r(u, g) {
    const i = G({}, t.state, xu(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function l(u, g) {
    const i = G(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: di()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && O(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = G({}, xu(o.value, u, null), { position: i.position + 1 }, g);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function gS(e) {
  e = nS(e);
  const t = dS(e), n = uS(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = G({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: sS.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function pS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && O(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), gS(e);
}
function mS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function bm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const an = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Fl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var $u;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})($u || ($u = {}));
const hS = {
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
    return `Redirected from "${e.fullPath}" to "${wS(t)}" via a navigation guard.`;
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
function vo(e, t) {
  return {}.NODE_ENV !== "production" ? G(new Error(hS[e](t)), {
    type: e,
    [Fl]: !0
  }, t) : G(new Error(), {
    type: e,
    [Fl]: !0
  }, t);
}
function Pt(e, t) {
  return e instanceof Error && Fl in e && (t == null || !!(e.type & t));
}
const fS = ["params", "query", "hash"];
function wS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of fS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Vu = "[^/]+?", _S = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, vS = /[.+*?^${}()[\]/\\]/g;
function SS(e, t) {
  const n = G({}, _S, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const i = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let c = 0; c < g.length; c++) {
      const d = g[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        c || (s += "/"), s += d.value.replace(vS, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = d;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || Vu;
        if (w !== Vu) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + y.message);
          }
        }
        let S = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        c || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && g.length < 2 ? `(?:/${S})` : "/" + S), f && (S += "?"), s += S, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
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
    for (let d = 1; d < i.length; d++) {
      const p = i[d] || "", m = a[d - 1];
      c[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return c;
  }
  function u(g) {
    let i = "", c = !1;
    for (const d of e) {
      (!c || !i.endsWith("/")) && (i += "/"), c = !1;
      for (const p of d)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, _ = m in g ? g[m] : "";
          if (Oe(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = Oe(_) ? _.join("/") : _;
          if (!w)
            if (f)
              d.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
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
function yS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function CS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = yS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Eu(o))
      return 1;
    if (Eu(s))
      return -1;
  }
  return s.length - o.length;
}
function Eu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const kS = {
  type: 0,
  value: ""
}, bS = /[a-zA-Z0-9_]/;
function xS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[kS]];
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
  let l = 0, u, g = "", i = "";
  function c() {
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
  for (; l < e.length; ) {
    if (u = e[l++], u === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (g && c(), r()) : u === ":" ? (c(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : bS.test(u) ? d() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), c(), r(), s;
}
function $S(e, t, n) {
  const o = SS(xS(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && O(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
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
function VS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Lu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, d) {
    const p = !d, m = ES(i);
    ({}).NODE_ENV !== "production" && TS(m, c), m.aliasOf = d && d.record;
    const h = Lu(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const S = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of S)
        f.push(G({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : m.components,
          path: y,
          // we might be the child of an alias
          aliasOf: d ? d.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, w;
    for (const S of f) {
      const { path: y } = S;
      if (c && y[0] !== "/") {
        const k = c.record.path, x = k[k.length - 1] === "/" ? "" : "/";
        S.path = c.record.path + (y && x + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = $S(S, c, h), {}.NODE_ENV !== "production" && c && y[0] === "/" && BS(_, c), d ? (d.alias.push(_), {}.NODE_ENV !== "production" && LS(d, _)) : (w = w || _, w !== _ && w.alias.push(_), p && i.name && !Au(_) && r(i.name)), m.children) {
        const k = m.children;
        for (let x = 0; x < k.length; x++)
          a(k[x], _, d && d.children[x]);
      }
      d = d || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      r(w);
    } : $s;
  }
  function r(i) {
    if (bm(i)) {
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
    for (; c < n.length && CS(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !xm(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Au(i) && o.set(i.record.name, i);
  }
  function g(i, c) {
    let d, p = {}, m, h;
    if ("name" in i && i.name) {
      if (d = o.get(i.name), !d)
        throw vo(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((S) => !d.keys.find((y) => y.name === S));
        w.length && O(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = d.record.name, p = G(
        // paramsFromLocation is a new object
        Du(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Du(i.params, d.keys.map((w) => w.name))
      ), m = d.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && O(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((w) => w.re.test(m)), d && (p = d.parse(m), h = d.record.name);
    else {
      if (d = c.name ? o.get(c.name) : n.find((w) => w.re.test(c.path)), !d)
        throw vo(1, {
          location: i,
          currentLocation: c
        });
      h = d.record.name, p = G({}, c.params, i.params), m = d.stringify(p);
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
      meta: AS(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: g, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Du(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function ES(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: DS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function DS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Au(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function AS(e) {
  return e.reduce((t, n) => G(t, n.meta), {});
}
function Lu(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Ml(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function LS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Ml.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Ml.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function TS(e, t) {
  t && t.record.name && !e.name && !e.path && O(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function BS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Ml.bind(null, n)))
      return O(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function xm(e, t) {
  return t.children.some((n) => n === e || xm(e, n));
}
const $m = /#/g, PS = /&/g, FS = /\//g, MS = /=/g, NS = /\?/g, Vm = /\+/g, US = /%5B/g, IS = /%5D/g, Em = /%5E/g, zS = /%60/g, Dm = /%7B/g, RS = /%7C/g, Am = /%7D/g, OS = /%20/g;
function tc(e) {
  return encodeURI("" + e).replace(RS, "|").replace(US, "[").replace(IS, "]");
}
function HS(e) {
  return tc(e).replace(Dm, "{").replace(Am, "}").replace(Em, "^");
}
function Nl(e) {
  return tc(e).replace(Vm, "%2B").replace(OS, "+").replace($m, "%23").replace(PS, "%26").replace(zS, "`").replace(Dm, "{").replace(Am, "}").replace(Em, "^");
}
function jS(e) {
  return Nl(e).replace(MS, "%3D");
}
function qS(e) {
  return tc(e).replace($m, "%23").replace(NS, "%3F");
}
function GS(e) {
  return e == null ? "" : qS(e).replace(FS, "%2F");
}
function Ds(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && O(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function XS(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Vm, " "), r = a.indexOf("="), l = Ds(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : Ds(a.slice(r + 1));
    if (l in t) {
      let g = t[l];
      Oe(g) || (g = t[l] = [g]), g.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Tu(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = jS(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Oe(o) ? o.map((a) => a && Nl(a)) : [o && Nl(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function WS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Oe(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const KS = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Bu = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), gi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Lm = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Ul = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function To() {
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
function Cn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(vo(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : mS(c) ? l(vo(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? YS(u, t, n) : u);
    let i = Promise.resolve(g);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        i = i.then((d) => u._called ? d : (O(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !u._called) {
        O(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function YS(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && O(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ii(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && O(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw O(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          O(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, O(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (JS(l)) {
          const g = (l.__vccOpts || l)[t];
          g && s.push(Cn(g, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (O(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Yv(g) ? g.default : g;
            a.components[r] = i;
            const d = (i.__vccOpts || i)[t];
            return d && Cn(d, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function JS(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Pu(e) {
  const t = _o(gi), n = _o(Lm), o = xt(() => t.resolve(xs(e.to))), s = xt(() => {
    const { matched: u } = o.value, { length: g } = u, i = u[g - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const d = c.findIndex(bn.bind(null, i));
    if (d > -1)
      return d;
    const p = Fu(u[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Fu(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(bn.bind(null, u[g - 2])) : d
    );
  }), a = xt(() => s.value > -1 && ty(n.params, o.value.params)), r = xt(() => s.value > -1 && s.value === n.matched.length - 1 && Cm(n.params, o.value.params));
  function l(u = {}) {
    return ey(u) ? t[xs(e.replace) ? "replace" : "push"](
      xs(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch($s) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Qt) {
    const u = _m();
    if (u) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(g), jv(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: xt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const QS = /* @__PURE__ */ vm({
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
  useLink: Pu,
  setup(e, { slots: t }) {
    const n = qv(Pu(e)), { options: o } = _o(gi), s = xt(() => ({
      [Mu(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Mu(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Sm("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), ZS = QS;
function ey(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ty(e, t) {
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
function Fu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Mu = (e, t, n) => e != null ? e : t != null ? t : n, ny = /* @__PURE__ */ vm({
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
    ({}).NODE_ENV !== "production" && sy();
    const o = _o(Ul), s = xt(() => e.route || o.value), a = _o(Bu, 0), r = xt(() => {
      let g = xs(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[g]) && !c.components; )
        g++;
      return g;
    }), l = xt(() => s.value.matched[r.value]);
    Mi(Bu, xt(() => r.value + 1)), Mi(KS, l), Mi(Ul, s);
    const u = Gv();
    return ym(() => [u.value, l.value, e.name], ([g, i, c], [d, p, m]) => {
      i && (i.instances[c] = g, p && p !== i && g && g === d && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), g && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !bn(i, p) || !d) && (i.enterCallbacks[c] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, i = e.name, c = l.value, d = c && c.components[i];
      if (!d)
        return Nu(n.default, { Component: d, route: g });
      const p = c.props[i], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, f = Sm(d, G({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && Qt && f.ref) {
        const _ = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Oe(f.ref) ? f.ref.map((S) => S.i) : [f.ref.i]).forEach((S) => {
          S.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Nu(n.default, { Component: f, route: g }) || f
      );
    };
  }
});
function Nu(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const oy = ny;
function sy() {
  const e = _m(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    O(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Bo(e, t) {
  const n = G({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => py(o, ["instances", "children", "aliasOf"]))
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
function ia(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let ay = 0;
function iy(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = ay++;
  Hv({
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
        value: Bo(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        i.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Tm
        });
      }
      Oe(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((d) => {
        let p = Fm, m = "";
        d.isExactActive ? (p = Pm, m = "This is exactly active") : d.isActive && (p = Bm, m = "This link is active"), i.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), ym(t.currentRoute, () => {
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
      const d = {
        guard: ia("beforeEach"),
        from: Bo(c, "Current Location during this navigation"),
        to: Bo(i, "Target location")
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
    }), t.afterEach((i, c, d) => {
      const p = {
        guard: ia("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = ia("❌")) : p.status = ia("✅"), p.from = Bo(c, "Current Location during this navigation"), p.to = Bo(i, "Target location"), s.addTimelineEvent({
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
    const l = "router-inspector:" + o;
    s.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function u() {
      if (!g)
        return;
      const i = g;
      let c = n.getRoutes().filter((d) => !d.parent);
      c.forEach(Um), i.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        Il(d, i.filter.toLowerCase())
      ))), c.forEach((d) => Nm(d, t.currentRoute.value)), i.rootNodes = c.map(Mm);
    }
    let g;
    s.on.getInspectorTree((i) => {
      g = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        d && (i.state = {
          options: ly(d)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function ry(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ly(e) {
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
        display: e.keys.map((o) => `${o.name}${ry(o)}`).join(" "),
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
const Tm = 15485081, Bm = 2450411, Pm = 8702998, cy = 2282478, Fm = 16486972, uy = 6710886;
function Mm(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: cy
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Fm
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Tm
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Pm
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Bm
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: uy
  });
  let o = n.__vd_id;
  return o == null && (o = String(dy++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Mm)
  };
}
let dy = 0;
const gy = /^\/(.*)\/([a-z]*)$/;
function Nm(e, t) {
  const n = t.matched.length && bn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => bn(o, e.record))), e.children.forEach((o) => Nm(o, t));
}
function Um(e) {
  e.__vd_match = !1, e.children.forEach(Um);
}
function Il(e, t) {
  const n = String(e.re).match(gy);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Il(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ds(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Il(r, t));
}
function py(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function my(e) {
  const t = VS(e.routes, e), n = e.parseQuery || XS, o = e.stringifyQuery || Tu, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = To(), r = To(), l = To(), u = Xv(an);
  let g = an;
  Qt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Ni.bind(null, (v) => "" + v), c = Ni.bind(null, GS), d = (
    // @ts-expect-error: intentionally avoid the type check
    Ni.bind(null, Ds)
  );
  function p(v, D) {
    let A, L;
    return bm(v) ? (A = t.getRecordMatcher(v), L = D) : L = v, t.addRoute(L, A);
  }
  function m(v) {
    const D = t.getRecordMatcher(v);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && O(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, D) {
    if (D = G({}, D || u.value), typeof v == "string") {
      const z = Ui(n, v, D.path), Z = t.resolve({ path: z.path }, D), st = s.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? O(`Location "${v}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : Z.matched.length || O(`No match found for location with path "${v}"`)), G(z, Z, {
        params: d(Z.params),
        hash: Ds(z.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let A;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && O(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = G({}, v, {
        path: Ui(n, v.path, D.path).path
      });
    else {
      const z = G({}, v.params);
      for (const Z in z)
        z[Z] == null && delete z[Z];
      A = G({}, v, {
        params: c(z)
      }), D.params = c(D.params);
    }
    const L = t.resolve(A, D), q = v.hash || "";
    ({}).NODE_ENV !== "production" && q && !q.startsWith("#") && O(`A \`hash\` should always start with the character "#". Replace "${q}" with "#${q}".`), L.params = i(d(L.params));
    const oe = Zv(o, G({}, v, {
      hash: HS(q),
      path: L.path
    })), R = s.createHref(oe);
    return {}.NODE_ENV !== "production" && (R.startsWith("//") ? O(`Location "${v}" resolved to "${R}". A resolved location cannot start with multiple slashes.`) : L.matched.length || O(`No match found for location with path "${"path" in v ? v.path : v}"`)), G({
      fullPath: oe,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: q,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Tu ? WS(v.query) : v.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: R
    });
  }
  function w(v) {
    return typeof v == "string" ? Ui(n, v, u.value.path) : G({}, v);
  }
  function S(v, D) {
    if (g !== v)
      return vo(8, {
        from: D,
        to: v
      });
  }
  function y(v) {
    return F(v);
  }
  function k(v) {
    return y(G(w(v), { replace: !0 }));
  }
  function x(v) {
    const D = v.matched[v.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: A } = D;
      let L = typeof A == "function" ? A(v) : A;
      if (typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = w(L) : (
        // force empty params
        { path: L }
      ), L.params = {}), {}.NODE_ENV !== "production" && !("path" in L) && !("name" in L))
        throw O(`Invalid redirect found:
${JSON.stringify(L, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return G({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in L ? {} : v.params
      }, L);
    }
  }
  function F(v, D) {
    const A = g = _(v), L = u.value, q = v.state, oe = v.force, R = v.replace === !0, z = x(A);
    if (z)
      return F(
        G(w(z), {
          state: typeof z == "object" ? G({}, q, z.state) : q,
          force: oe,
          replace: R
        }),
        // keep original redirectedFrom if it exists
        D || A
      );
    const Z = A;
    Z.redirectedFrom = D;
    let st;
    return !oe && Cu(o, L, A) && (st = vo(16, { to: Z, from: L }), Dt(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : J(Z, L)).catch((fe) => Pt(fe) ? (
      // navigation redirects still mark the router as ready
      Pt(
        fe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? fe : Vn(fe)
    ) : (
      // reject any unknown error
      wt(fe, Z, L)
    )).then((fe) => {
      if (fe) {
        if (Pt(
          fe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Cu(o, _(fe.to), Z) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (O(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${Z.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : F(
            // keep options
            G({
              // preserve an existing replacement but allow the redirect to override it
              replace: R
            }, w(fe.to), {
              state: typeof fe.to == "object" ? G({}, q, fe.to.state) : q,
              force: oe
            }),
            // preserve the original redirectedFrom if any
            D || Z
          );
      } else
        fe = I(Z, L, !0, R, q);
      return B(Z, L, fe), fe;
    });
  }
  function E(v, D) {
    const A = S(v, D);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function P(v) {
    const D = At.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(v) : v();
  }
  function J(v, D) {
    let A;
    const [L, q, oe] = hy(v, D);
    A = Ii(L.reverse(), "beforeRouteLeave", v, D);
    for (const z of L)
      z.leaveGuards.forEach((Z) => {
        A.push(Cn(Z, v, D));
      });
    const R = E.bind(null, v, D);
    return A.push(R), Xe(A).then(() => {
      A = [];
      for (const z of a.list())
        A.push(Cn(z, v, D));
      return A.push(R), Xe(A);
    }).then(() => {
      A = Ii(q, "beforeRouteUpdate", v, D);
      for (const z of q)
        z.updateGuards.forEach((Z) => {
          A.push(Cn(Z, v, D));
        });
      return A.push(R), Xe(A);
    }).then(() => {
      A = [];
      for (const z of oe)
        if (z.beforeEnter)
          if (Oe(z.beforeEnter))
            for (const Z of z.beforeEnter)
              A.push(Cn(Z, v, D));
          else
            A.push(Cn(z.beforeEnter, v, D));
      return A.push(R), Xe(A);
    }).then(() => (v.matched.forEach((z) => z.enterCallbacks = {}), A = Ii(oe, "beforeRouteEnter", v, D), A.push(R), Xe(A))).then(() => {
      A = [];
      for (const z of r.list())
        A.push(Cn(z, v, D));
      return A.push(R), Xe(A);
    }).catch((z) => Pt(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function B(v, D, A) {
    l.list().forEach((L) => P(() => L(v, D, A)));
  }
  function I(v, D, A, L, q) {
    const oe = S(v, D);
    if (oe)
      return oe;
    const R = D === an, z = Qt ? history.state : {};
    A && (L || R ? s.replace(v.fullPath, G({
      scroll: R && z && z.scroll
    }, q)) : s.push(v.fullPath, q)), u.value = v, Dt(v, D, A, R), Vn();
  }
  let Q;
  function X() {
    Q || (Q = s.listen((v, D, A) => {
      if (!Lt.listening)
        return;
      const L = _(v), q = x(L);
      if (q) {
        F(G(q, { replace: !0 }), L).catch($s);
        return;
      }
      g = L;
      const oe = u.value;
      Qt && rS(bu(oe.fullPath, A.delta), di()), J(L, oe).catch((R) => Pt(
        R,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? R : Pt(
        R,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (F(
        R.to,
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        Pt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === Es.pop && s.go(-1, !1);
      }).catch($s), Promise.reject()) : (A.delta && s.go(-A.delta, !1), wt(R, L, oe))).then((R) => {
        R = R || I(
          // after navigation, all matched components are resolved
          L,
          oe,
          !1
        ), R && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Pt(
          R,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-A.delta, !1) : A.type === Es.pop && Pt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), B(L, oe, R);
      }).catch($s);
    }));
  }
  let ot = To(), Le = To(), Et;
  function wt(v, D, A) {
    Vn(v);
    const L = Le.list();
    return L.length ? L.forEach((q) => q(v, D, A)) : ({}.NODE_ENV !== "production" && O("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function Vo() {
    return Et && u.value !== an ? Promise.resolve() : new Promise((v, D) => {
      ot.add([v, D]);
    });
  }
  function Vn(v) {
    return Et || (Et = !v, X(), ot.list().forEach(([D, A]) => v ? A(v) : D()), ot.reset()), v;
  }
  function Dt(v, D, A, L) {
    const { scrollBehavior: q } = e;
    if (!Qt || !q)
      return Promise.resolve();
    const oe = !A && lS(bu(v.fullPath, 0)) || (L || !A) && history.state && history.state.scroll || null;
    return Kv().then(() => q(v, D, oe)).then((R) => R && iS(R)).catch((R) => wt(R, v, D));
  }
  const Ge = (v) => s.go(v);
  let nn;
  const At = /* @__PURE__ */ new Set(), Lt = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: y,
    replace: k,
    go: Ge,
    back: () => Ge(-1),
    forward: () => Ge(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: Le.add,
    isReady: Vo,
    install(v) {
      const D = this;
      v.component("RouterLink", ZS), v.component("RouterView", oy), v.config.globalProperties.$router = D, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => xs(u)
      }), Qt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !nn && u.value === an && (nn = !0, y(s.location).catch((q) => {
        ({}).NODE_ENV !== "production" && O("Unexpected error when starting the router:", q);
      }));
      const A = {};
      for (const q in an)
        Object.defineProperty(A, q, {
          get: () => u.value[q],
          enumerable: !0
        });
      v.provide(gi, D), v.provide(Lm, Wv(A)), v.provide(Ul, u);
      const L = v.unmount;
      At.add(v), v.unmount = function() {
        At.delete(v), At.size < 1 && (g = an, Q && Q(), Q = null, u.value = an, nn = !1, Et = !1), L();
      }, {}.NODE_ENV !== "production" && Qt && iy(v, D, t);
    }
  };
  function Xe(v) {
    return v.reduce((D, A) => D.then(() => P(A)), Promise.resolve());
  }
  return Lt;
}
function hy(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((g) => bn(g, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((g) => bn(g, u)) || s.push(u));
  }
  return [n, o, s];
}
function _e() {
  return _o(gi);
}
const fy = {
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
}, wy = {
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
}, _y = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], vy = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, Sy = {
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
}, yy = {
  languages: fy,
  scriptgroups: wy,
  rtlscripts: _y,
  regiongroups: vy,
  territories: Sy
};
var xe = yy;
function Ms(e) {
  return !!xe.languages[e];
}
function $n(e) {
  return Ms(e) && xe.languages[e].length === 1 ? xe.languages[e][0] : !1;
}
function Cy() {
  return xe.languages;
}
function Ns(e) {
  var t = $n(e);
  return t ? Ns(t) : Ms(e) ? xe.languages[e][0] : "Zyyy";
}
function nc(e) {
  var t = $n(e);
  return t ? nc(t) : Ms(e) && xe.languages[e][1] || "UNKNOWN";
}
function As(e) {
  var t = $n(e);
  return t ? As(t) : Ms(e) && xe.languages[e][2] || e;
}
function ky() {
  var e, t = {};
  for (e in xe.languages)
    $n(e) || (t[e] = As(e));
  return t;
}
function Im(e) {
  var t, n, o = [];
  for (t in xe.languages)
    if (!$n(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Ns(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function by(e) {
  return Im([e]);
}
function zm(e) {
  var t;
  for (t in xe.scriptgroups)
    if (xe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function oc(e) {
  return zm(Ns(e));
}
function Rm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = $n(n) || n, a = oc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Om(e) {
  var t, n, o, s = {};
  for (t in xe.languages)
    if (!$n(t)) {
      for (n = 0; n < e.length; n++)
        if (nc(t).includes(e[n])) {
          o = oc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function xy(e) {
  return Om([e]);
}
function $y(e) {
  var t, n, o, s = [];
  for (t = Rm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Vy(e, t) {
  var n = As(e) || e, o = As(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Hm(e) {
  return xe.rtlscripts.includes(Ns(e));
}
function Ey(e) {
  return Hm(e) ? "rtl" : "ltr";
}
function Dy(e) {
  return xe.territories[e] || [];
}
function Ay(e, t) {
  t.target ? xe.languages[e] = [t.target] : xe.languages[e] = [t.script, t.regions, t.autonym];
}
var U = {
  addLanguage: Ay,
  getAutonym: As,
  getAutonyms: ky,
  getDir: Ey,
  getGroupOfScript: zm,
  getLanguages: Cy,
  getLanguagesByScriptGroup: Rm,
  getLanguagesByScriptGroupInRegion: xy,
  getLanguagesByScriptGroupInRegions: Om,
  getLanguagesInScript: by,
  getLanguagesInScripts: Im,
  getLanguagesInTerritory: Dy,
  getRegions: nc,
  getScript: Ns,
  getScriptGroupOfLanguage: oc,
  isKnown: Ms,
  isRedirect: $n,
  isRtl: Hm,
  sortByScriptGroup: $y,
  sortByAutonym: Vy
};
const Ly = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), g = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, Ty = (e) => {
  const t = Ly(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const at = window.Vue.unref, Wn = window.Vue.createVNode, Ft = window.Vue.createElementVNode, Uu = window.Vue.renderSlot, Iu = window.Vue.withModifiers, zi = window.Vue.toDisplayString, Ri = window.Vue.withCtx, By = window.Vue.openBlock, Py = window.Vue.createElementBlock, Fy = window.Vue.createCommentVNode, My = { class: "col shrink pe-4" }, Ny = { class: "col" }, Uy = { class: "cx-translation__details column justify-between ma-0" }, Iy = { class: "row ma-0" }, zy = { class: "col grow" }, Ry = { class: "col shrink ps-2" }, Oy = ["dir", "textContent"], Hy = ["dir", "textContent"], jy = ["textContent"], qy = window.Vuex.useStore, Gy = window.Vue.computed, jm = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: ii,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = qy(), s = (l, u) => {
      const g = o.getters["mediawiki/getPage"](l, u);
      return g == null ? void 0 : g.thumbnail;
    }, a = de(), r = Gy(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = Ty(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (By(), Py("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Iu((g) => l.$emit("click"), ["stop"]))
    }, [
      Ft("div", My, [
        Wn(at(Xl), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Ft("div", Ny, [
        Ft("div", Uy, [
          Ft("div", Iy, [
            Ft("div", zy, [
              Uu(l.$slots, "title")
            ]),
            Ft("div", Ry, [
              Wn(at(we), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Iu((g) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Uu(l.$slots, "mid-content"),
          Wn(at(T), { class: "cx-translation__footer ma-0" }, {
            default: Ri(() => [
              Wn(at(C), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Ri(() => [
                  Ft("span", {
                    class: "mw-ui-autonym",
                    dir: at(U.getDir)(e.translation.sourceLanguage),
                    textContent: zi(at(U.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Oy),
                  Wn(at(we), {
                    icon: at(jp),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Ft("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: at(U.getDir)(e.translation.targetLanguage),
                    textContent: zi(at(U.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, Hy)
                ]),
                _: 1
              }),
              Wn(at(C), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Ri(() => [
                  Ft("span", {
                    textContent: zi(r.value)
                  }, null, 8, jy)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Fy("", !0);
  }
};
const Po = window.Vue.unref, zu = window.Vue.toDisplayString, Xy = window.Vue.normalizeClass, Wy = window.Vue.createElementVNode, Oi = window.Vue.openBlock, Ky = window.Vue.createElementBlock, Ru = window.Vue.createCommentVNode, Ou = window.Vue.createVNode, ra = window.Vue.withCtx, Hu = window.Vue.createBlock, Yy = ["lang", "textContent"], Jy = ["lang", "textContent"], Qy = window.Vue.computed, Zy = window.Vue.inject, eC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Wl,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Zy("colors").gray200, s = Qy(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = _e(), { setTranslationURLParams: r } = M(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, g) => (Oi(), Hu(jm, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Po(Hp),
      onActionIconClicked: g[0] || (g[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: ra(() => [
        Wy("h5", {
          class: Xy(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: zu(e.translation.sourceTitle)
        }, null, 10, Yy),
        e.translation.isLeadSectionTranslation ? Ru("", !0) : (Oi(), Ky("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: zu(e.translation.sourceSectionTitle)
        }, null, 8, Jy))
      ]),
      "mid-content": ra(() => [
        e.translation.progress ? (Oi(), Hu(Po(T), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: ra(() => [
            Ou(Po(C), null, {
              default: ra(() => [
                Ou(Po(Wp), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Po(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ru("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, tC = window.Vue.computed, nC = window.Vue.inject, Us = () => {
  const e = nC("breakpoints");
  return { isDesktop: tC(
    () => !j.isMobileDomain() && e.value.tabletAndUp
  ) };
}, Kn = window.Vue.computed;
function H(e) {
  const t = Kn(() => e.state.application.sourceLanguage), n = Kn(() => e.state.application.targetLanguage), o = Kn(
    () => e.state.application.currentMTProvider
  ), s = Kn(
    () => U.getAutonym(t.value)
  ), a = Kn(
    () => U.getAutonym(n.value)
  ), r = Kn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const ju = window.Vue.computed, oC = window.Vuex.useStore;
function Is() {
  const e = oC(), t = ju(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: ju(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const sC = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = M(), s = j.getCurrentWikiLanguageCode(), a = (c) => !e || Array.isArray(e) && e.includes(c), r = (c) => t.includes(c), l = {
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
}, aC = window.Vuex.useStore, sc = () => {
  const e = aC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
}, iC = window.Vuex.useStore, pi = () => {
  const e = iC(), { sourceLanguage: t, targetLanguage: n } = H(e), o = (l) => {
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
class rC {
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
const lC = window.Vuex.useStore, ac = window.Vue.ref, cC = ac([]), uC = ac([]);
let Hi = !1, qu = !1, Gu = !1, ji = ac(!1), Fo = null;
const la = {
  page: cC,
  section: uC
}, qm = () => {
  const e = lC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = () => b(void 0, null, function* () {
    let g = e.getters["translator/getTranslationsByStatus"]("published");
    if (g = g.filter(
      (i) => i.sourceLanguage === t.value
    ), g.length && !Hi)
      return Hi = !0, g.map(
        (i) => i.sourceTitle
      );
    if (Hi = !0, !qu) {
      const i = yield le.fetchUserEdits(t.value).then((c) => (qu = !0, c));
      if (i.length)
        return i;
    }
    if (!Gu) {
      const i = yield le.fetchUserEdits(t.value).then((c) => (Gu = !0, c));
      if (i.length)
        return ko.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), s = (g) => {
    let i = la[g].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new rC({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), la[g].value.push(i)), i;
  }, a = () => b(void 0, null, function* () {
    const g = yield le.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const i in la) {
      const c = s(i);
      c.seeds = [...c.seeds, ...g || []];
    }
  }), r = () => b(void 0, null, function* () {
    let g = !1, i = [];
    do {
      i = yield o(), i || (g = !0);
      for (const c in la) {
        const d = s(c);
        d.seeds = [
          ...d.seeds,
          ...i || []
        ];
      }
    } while (!g && !(i != null && i.length));
  }), l = () => Fo || (Fo = r(), Fo.finally(() => {
    Fo = null;
  }));
  return { getSuggestionSeed: (g) => b(void 0, null, function* () {
    let i = s(g);
    i.seeds.length || (yield l());
    let c = i.shiftSeeds();
    return !c && !ji.value && (yield a(), c = i.shiftSeeds(), ji.value = !0), c;
  }), defaultSeedsFetched: ji };
}, dC = 5;
function Ls(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < dC);
  });
}
const gC = window.Vuex.useStore, pC = () => {
  const e = gC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), { getSuggestionSeed: o } = qm(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = pi(), l = {
    id: ft,
    type: ht
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield Ls(() => b(void 0, null, function* () {
        const d = yield o("page");
        if (!d)
          return !0;
        let p = yield le.fetchPageSuggestions(
          t.value,
          n.value,
          d
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), c.push(...p), c.length >= i;
      })), c.forEach(
        (d) => d.suggestionProvider = l
      ), c;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield Ls(() => b(void 0, null, function* () {
        const d = yield o("section");
        if (!d)
          return !0;
        const p = yield le.fetchSectionSuggestions(
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
        return m = m.slice(0, i), c.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), c.length >= i;
      })), c.forEach(
        (d) => d.suggestionProvider = l
      ), c;
    })
  };
}, mC = window.Vuex.useStore, hC = () => {
  const e = mC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = {
    id: Vt,
    type: ht
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = pi();
  return { fetchSectionSuggestionsPopular: (g) => b(void 0, null, function* () {
    const i = [];
    return yield Ls(() => b(void 0, null, function* () {
      const c = yield le.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let d = c.filter(
        (m) => s(m)
      );
      const p = c.filter(
        (m) => !s(m)
      );
      return d = d.slice(0, g), i.push(...d), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= g;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }), fetchPageSuggestionsPopular: (g) => b(void 0, null, function* () {
    const i = [];
    return yield Ls(() => b(void 0, null, function* () {
      let c = yield le.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return c = c.filter(
        (d) => a(d)
      ), c = c.slice(0, g), i.push(...c), i.length >= g;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }) };
}, Gm = window.Vue.ref, qi = Gm([]), Xu = Gm(!1), Xm = () => ({ pageCollections: qi, fetchPageCollections: () => b(void 0, null, function* () {
  try {
    qi.value = yield le.fetchPageCollections(), qi.value.sort((t, n) => t.name.localeCompare(n.name)), Xu.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Xu });
class zl {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const ca = window.Vue.computed, Wu = mw.loader.require("ext.cx.articletopics"), fC = (e) => new zl({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: et
  }))
}), ic = () => {
  const e = de(), { currentSuggestionFilters: t, setFilterURLParams: n } = M(), o = {
    id: ft,
    type: ht,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: Vt,
    type: ht,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: ge,
    type: ht,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: r, pageCollectionsFetched: l } = Xm(), u = ca(() => {
    const w = new zl({
      id: ht,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return r.value.length && w.filters.push(a), w;
  }), g = (w) => ({
    id: w.name,
    label: w.name,
    type: ge
  }), i = ca(
    () => new zl({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: r.value.map(
        (w) => g(w)
      )
    })
  ), c = ca(() => {
    const w = [
      u.value,
      ...Wu.map(fC)
    ];
    return r.value.length && w.splice(1, 0, i.value), w;
  }), d = ca(
    () => [t.value.type, t.value.id].includes(
      ge
    ) && !l.value
  ), p = () => {
    if (d.value)
      return [];
    const w = h();
    return w.type === et || w.type === ge || w.id === ge ? [w, o] : [o, s];
  }, m = (w) => {
    n(w.type, w.id);
  }, h = () => c.value.flatMap((w) => w.filters).find(f), f = (w) => t.value.type === w.type && t.value.id === w.id;
  return {
    allFilters: c,
    getFiltersSummary: p,
    selectFilter: m,
    isFilterSelected: f,
    getOresTopics: (w) => {
      const y = Wu.flatMap((k) => k.topics).find((k) => k.topicId === w);
      return y ? y.orestopics : [];
    },
    waitingForPageCollectionsFetch: d
  };
}, wC = window.Vuex.useStore, _C = () => {
  const e = wC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = pi(), { getOresTopics: l } = ic();
  return {
    fetchPageSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const c = o.value.id, d = {
        id: c,
        type: et
      }, p = l(c);
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
      const c = o.value.id, d = {
        id: c,
        type: et
      }, p = l(c), m = [];
      return yield Ls(() => b(void 0, null, function* () {
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
}, vC = window.Vuex.useStore, SC = window.Vue.computed, yC = () => {
  const e = vC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), s = SC(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== ge ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = pi();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [], c = yield le.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      let d = c.filter(
        (m) => a(m)
      );
      const p = c.filter(
        (m) => !a(m)
      );
      return i.push(...d), p.forEach((m) => {
        m && !l(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.forEach(
        (m) => m.suggestionProvider = o.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [];
      let c = yield le.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return c = c.filter(
        (d) => r(d)
      ), i.push(...c), i.forEach(
        (d) => d.suggestionProvider = o.value
      ), i;
    })
  };
};
window.Vue.computed;
const rc = () => {
  const { currentSuggestionFilters: e } = M(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = pC(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = hC(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = _C(), {
    fetchPageSuggestionsByCollections: l,
    fetchSectionSuggestionsByCollections: u
  } = yC(), g = {
    [ft]: t,
    [Vt]: o,
    [ge]: l,
    [et]: a
  }, i = {
    [ft]: n,
    [Vt]: s,
    [ge]: u,
    [et]: r
  }, c = (m) => m.type === ht ? m.id : m.type;
  return {
    getFilterProvider: c,
    getCurrentPageSuggestionProvider: () => g[c(e.value)],
    getCurrentSectionSuggestionProvider: () => i[c(e.value)]
  };
}, CC = window.Vuex.useStore, lc = () => {
  const e = CC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = sc(), { sourceLanguageURLParameter: o } = M(), s = () => {
    const c = t(), d = e.state.suggestions.maxSuggestionsPerSlice;
    return d - c.length % d;
  }, a = () => {
    const c = n(), d = e.state.suggestions.maxSuggestionsPerSlice;
    return d - c.length % d;
  }, {
    getCurrentPageSuggestionProvider: r,
    getCurrentSectionSuggestionProvider: l
  } = rc(), u = (c) => {
    try {
      const d = c.map((p) => p.sourceTitle);
      if (d.length)
        return e.dispatch("mediawiki/fetchPageMetadata", {
          language: o.value,
          titles: d
        });
    } catch (d) {
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
}, kC = window.Vuex.useStore, cc = () => {
  const e = kC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = lc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = sc();
  return () => b(void 0, null, function* () {
    const { targetLanguage: a } = H(e), r = s(0), l = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, g = r.length === u, i = l.length === u;
    g && i || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, bC = window.Vuex.useStore, uc = () => {
  const e = bC();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!s) {
      s = yield le.fetchSectionSuggestion(
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
          return new yo({
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
}, Ku = window.Vue.computed, xC = window.Vuex.useStore, en = () => {
  const e = xC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M(), s = Ku(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Ku(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, zs = window.Vuex.useStore, Rs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), r = j.getCurrentWikiLanguageCode();
  return a && t !== r ? (s = se({ sx: !0 }, s), o && (s.section = o), location.href = j.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: $C, pageURLParameter: VC, sectionURLParameter: EC } = M(), Os = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), $C(t, n);
}, Wm = () => {
  const e = zs(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Is();
  return () => b(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = sC(
      t.value,
      n.value
    );
    Rs(
      o,
      s,
      VC.value,
      EC.value
    ) || Os(e, o, s);
  });
}, Km = () => {
  const e = zs(), t = cc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = H(e);
    n === o && (n = a.value, o = s.value), Rs(
      n,
      o,
      null,
      null
    ) || (Os(e, n, o), t());
  };
}, DC = () => {
  const e = zs(), t = cc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: r } = n;
      Rs(
        o,
        s,
        a,
        r,
        { draft: !0 }
      ) || (Os(e, o, s), t());
    }
  );
}, AC = () => {
  const e = zs();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Rs(
      n,
      o,
      s,
      null
    ) || Os(e, n, o);
  };
}, LC = () => {
  const e = zs(), t = uc(), { currentLanguageTitleGroup: n, targetPageExists: o } = en();
  return (s, a) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l,
      setPageURLParam: u,
      clearSectionURLParameter: g
    } = M();
    s === a && (s = l.value, a = r.value);
    const i = n.value.getTitleForLanguage(s);
    Rs(
      s,
      a,
      i,
      null
    ) || (Os(e, s, a), u(i), o.value ? (g(), yield t(
      r.value,
      l.value,
      i
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: r.value,
      titles: [i]
    }), e.dispatch("application/getCXServerToken"));
  });
}, TC = window.Vuex.useStore, Ym = [], BC = (e, t, n) => Ym.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), PC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Ym.push(o);
}, FC = () => {
  const e = TC();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !BC(t, n, o) && (s = yield le.fetchSectionSuggestion(
      t,
      o,
      n
    ), PC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, MC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', NC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', UC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', IC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', zC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', RC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', OC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', HC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', jC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', qC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', GC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', XC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', WC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', KC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', YC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', JC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', QC = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', ZC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', ek = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', tk = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', nk = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', ok = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', sk = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', ak = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', ik = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', rk = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', lk = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ck = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', uk = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Rl = MC, Jm = NC, dk = {
  ltr: UC,
  shouldFlip: !0
}, Qm = {
  ltr: IC,
  shouldFlip: !0
}, dc = {
  ltr: zC,
  shouldFlip: !0
}, gk = RC, Zm = OC, eh = HC, pk = jC, mk = qC, hk = GC, bo = XC, gc = WC, pc = KC, fk = YC, th = JC, wk = {
  langCodeMap: {
    ar: QC
  },
  default: ZC
}, nh = ek, mc = {
  ltr: tk,
  shouldFlip: !0
}, _k = nk, Hs = {
  ltr: ok,
  shouldFlip: !0
}, hc = {
  ltr: sk,
  shouldFlip: !0
}, vk = {
  ltr: ak,
  shouldFlip: !0
}, oh = ik, Sk = rk, yk = lk, Ck = ck, sh = uk, ah = "cx-translation-session-position-", ih = () => ah + mw.user.sessionId(), rh = () => {
  const e = ih();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, kk = function() {
  const e = rh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(ah)).forEach((n) => mw.storage.remove(n));
  const t = ih();
  mw.storage.set(t, e + 1);
};
let Ol = null;
function bk(e) {
  if (Ol)
    return Promise.resolve(Ol);
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
function xk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function $k(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = rh(), u = {
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
    mw.eventLog.submit(s, Object.assign({}, u, e))
  ) : g = bk(r).then((i) => {
    Ol = i, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: xk(i)
      })
    );
  }), g.then(() => {
    kk();
  });
}
const He = () => $k, lh = window.Vue.ref, ch = lh(null), Hl = lh(null), Vk = (e) => {
  ch.value = e;
}, Ek = (e) => {
  Hl.value = e;
}, fc = () => {
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
        event_source: ch.value,
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
      return Hl.value && (r.event_context = Hl.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: Vk,
    setStartTranslationEventContext: Ek
  };
}, Dk = window.Vuex.useStore, js = () => {
  const e = Dk(), t = _e(), n = uc(), { setTranslationURLParams: o } = M(), { setStartTranslationEventSource: s, setStartTranslationEventContext: a } = fc();
  return (r, l, u, g, i = null) => b(void 0, null, function* () {
    const c = yield n(
      l,
      u,
      r
    );
    c && (e.dispatch("application/getCXServerToken"), o(c), s(g), a(i), t.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const ua = window.Vue.withModifiers, Gi = window.Vue.toDisplayString, Xi = window.Vue.createElementVNode, We = window.Vue.unref, da = window.Vue.openBlock, Yu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const rn = window.Vue.createVNode, Dn = window.Vue.withCtx, Ju = window.Vue.createElementBlock, Ak = ["lang", "href", "textContent"], Lk = {
  key: 1,
  class: "flex"
}, Tk = { key: 2 }, Bk = window.Vuex.useStore, Qu = window.Vue.computed, Zu = window.Vue.ref, Wi = window.Codex.CdxButton, Ki = window.Codex.CdxIcon, Pk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Ql,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Bk(), o = Zu(!0), s = Zu(null), a = Qu(() => {
      var f;
      return (f = s.value) == null ? void 0 : f.missingSections;
    }), r = Qu(
      () => a.value && Object.keys(a.value)[0]
    );
    FC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((f) => s.value = f).catch((f) => console.log(f)).finally(() => o.value = !1), _e(), Us();
    const { setTranslationURLParams: u, setSectionURLParam: g } = M(), i = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, c = js(), { sourceLanguage: d, targetLanguage: p } = H(n), m = AC(), h = (f) => {
      m(t.translation), c(
        t.translation.sourceTitle,
        d.value,
        p.value,
        "continue_published"
      ), f && g(f);
    };
    return (f, _) => (da(), Yu(jm, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: i
    }, {
      title: Dn(() => [
        Xi("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: _[0] || (_[0] = ua(() => {
          }, ["stop"])),
          textContent: Gi(e.translation.sourceTitle)
        }, null, 8, Ak)
      ]),
      "mid-content": Dn(() => [
        rn(We(T), { class: "ma-0" }, {
          default: Dn(() => [
            rn(We(C), null, {
              default: Dn(() => [
                o.value ? (da(), Yu(We(Re), { key: 0 })) : a.value ? (da(), Ju("div", Lk, [
                  rn(We(Wi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: _[1] || (_[1] = ua((w) => h(r.value), ["stop"]))
                  }, {
                    default: Dn(() => [
                      rn(We(Ki), {
                        class: "me-1",
                        icon: We(Rl)
                      }, null, 8, ["icon"]),
                      Xi("span", null, Gi(r.value), 1)
                    ]),
                    _: 1
                  }),
                  rn(We(Wi), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": f.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: _[2] || (_[2] = ua((w) => h(null), ["stop"]))
                  }, {
                    default: Dn(() => [
                      rn(We(Ki), { icon: We(pc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (da(), Ju("div", Tk, [
                  rn(We(Wi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: _[3] || (_[3] = ua((w) => h(null), ["stop"]))
                  }, {
                    default: Dn(() => [
                      rn(We(Ki), {
                        class: "me-1",
                        icon: We(Rl)
                      }, null, 8, ["icon"]),
                      Xi("span", null, Gi(f.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, ed = window.Vuex.useStore, Fk = () => {
  const e = ed(), { commit: t } = ed(), { sourceLanguage: n, targetLanguage: o } = H(e), s = He();
  return (a) => b(void 0, null, function* () {
    a.sectionTranslationId ? (yield tt.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield tt.deleteCXTranslation(
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
const Mk = window.Vue.resolveDirective, Yi = window.Vue.createElementVNode, Nk = window.Vue.withDirectives, Ji = window.Vue.unref, td = window.Vue.createVNode, nd = window.Vue.withCtx, Uk = window.Vue.openBlock, Ik = window.Vue.createBlock, zk = { class: "pa-4" }, Rk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Ok = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: ii,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Fk(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const g = Mk("i18n");
      return Uk(), Ik(Ji(nt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: nd(() => [
          Yi("div", Rk, [
            td(Ji(he), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            td(Ji(he), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: nd(() => [
          Yi("div", zk, [
            Nk(Yi("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Hk(e, t, n) {
  return b(this, null, function* () {
    if (!t || t.trim().length === 0)
      return e;
    const o = e.filter(
      (a) => t.toLowerCase() === a.toLowerCase()
    );
    if (o.length)
      return o;
    const s = e.filter(
      (a) => (
        // Search using autonym
        U.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        U.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield jk(t, n)).filter((r) => e.includes(r)) : [];
  });
}
function od(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(U.sortByAutonym) : (yield Hk(e, t, n)).sort(U.sortByAutonym);
  });
}
function jk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function qk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Gk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function Xk(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const Wk = window.Vue.computed;
function Kk(e, t) {
  const n = Wk(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = U.getAutonym(t.value[s]);
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
const Qi = window.Vue.ref, sd = window.Vue.watch, Yk = window.Vue.computed;
function Jk(e, t, n) {
  const o = Qi(""), s = Qi(-1), a = Qi(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = Yk(
    () => e.value ? t.value : [...n, ...t.value]
  ), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return sd(e, () => {
    s.value = -1;
  }), sd(s, () => b(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: r, prev: u, langSelectorContainer: a, selectedLanguage: o };
}
function wc(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const ga = window.Vue.renderSlot, pe = window.Vue.unref, Qk = window.Vue.isRef, ad = window.Vue.createVNode, Mo = window.Vue.withModifiers, No = window.Vue.withKeys, ln = window.Vue.createElementVNode, Zk = window.Vue.resolveDirective, pa = window.Vue.withDirectives, Zi = window.Vue.renderList, er = window.Vue.Fragment, Mt = window.Vue.openBlock, Nt = window.Vue.createElementBlock, id = window.Vue.toDisplayString, ma = window.Vue.normalizeClass, tr = window.Vue.createCommentVNode, eb = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, tb = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, nb = { class: "results px-3 pt-4" }, ob = { class: "results-header ps-8 pb-2" }, sb = { class: "results-languages--suggestions pa-0 ma-0" }, ab = ["lang", "dir", "aria-selected", "onClick", "textContent"], ib = { class: "results px-3 pt-4" }, rb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, lb = ["lang", "dir", "aria-selected", "onClick", "textContent"], cb = ["aria-selected"], ub = { class: "no-results px-3 py-4" }, db = { class: "ps-8" }, nr = window.Vue.ref, gb = window.Vue.watch, pb = window.Vue.onMounted, rd = window.Vue.computed, uh = {
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
      default: qk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = nr(null), a = nr(""), r = nr([]), l = rd(
      () => Gk(r.value)
    ), u = rd(
      () => Xk(r.value)
    ), g = (S) => o("select", S), i = () => o("close"), { autocompletion: c, onTabSelect: d } = Kk(
      a,
      r
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: f } = Jk(a, r, n.suggestions), _ = () => {
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
    return gb(a, wc(() => b(this, null, function* () {
      r.value = yield od(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), pb(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield od(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, y) => {
      const k = Zk("i18n");
      return Mt(), Nt("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        ga(S.$slots, "search", {}, () => [
          ln("div", eb, [
            ad(pe(ti), {
              value: pe(c),
              "onUpdate:value": y[0] || (y[0] = (x) => Qk(c) ? c.value = x : null),
              icon: pe(Al),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            ad(pe(ti), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: pe(Al),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                No(Mo(_, ["prevent"]), ["enter"]),
                No(Mo(pe(p), ["stop", "prevent"]), ["down"]),
                No(Mo(pe(m), ["stop", "prevent"]), ["up"]),
                No(Mo(i, ["prevent"]), ["esc"]),
                No(Mo(pe(d), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        ln("section", tb, [
          e.suggestions.length && !a.value ? ga(S.$slots, "suggestions", { key: 0 }, () => [
            ln("section", nb, [
              pa(ln("p", ob, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              ln("ul", sb, [
                (Mt(!0), Nt(er, null, Zi(e.suggestions, (x) => (Mt(), Nt("li", {
                  key: x,
                  class: ma(["language pa-2 ps-8 ma-0", x === pe(f) ? "language--selected" : ""]),
                  lang: x,
                  dir: pe(U.getDir)(x),
                  "aria-selected": x === pe(f) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (F) => g(x),
                  textContent: id(pe(U.getAutonym)(x))
                }, null, 10, ab))), 128))
              ])
            ])
          ]) : tr("", !0),
          l.value.length ? ga(S.$slots, "search", { key: 1 }, () => [
            ln("section", ib, [
              e.suggestions.length && !a.value ? pa((Mt(), Nt("p", rb, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : tr("", !0),
              (Mt(!0), Nt(er, null, Zi(l.value, (x, F) => (Mt(), Nt("ul", {
                key: F,
                class: ma(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (Mt(!0), Nt(er, null, Zi(x, (E) => (Mt(), Nt("li", {
                  key: E,
                  class: ma(["language pa-2 ps-8 ma-0", E === pe(f) ? "language--selected" : ""]),
                  lang: E,
                  dir: pe(U.getDir)(E),
                  role: "option",
                  "aria-selected": E === pe(f) || null,
                  tabindex: "-1",
                  onClick: (P) => g(E),
                  textContent: id(pe(U.getAutonym)(E))
                }, null, 10, lb))), 128)),
                e.allOptionEnabled && !a.value ? pa((Mt(), Nt("li", {
                  key: 0,
                  class: ma(["language pa-2 ps-8 ma-0", pe(f) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": pe(f) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (E) => g("all"))
                }, null, 10, cb)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : tr("", !0)
              ], 2))), 128))
            ])
          ]) : ga(S.$slots, "noresults", { key: 2 }, () => [
            ln("section", ub, [
              pa(ln("h3", db, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Se = window.Vue.unref, mb = window.Vue.resolveDirective, ld = window.Vue.withDirectives, Uo = window.Vue.openBlock, Io = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const cd = window.Vue.toDisplayString, ud = window.Vue.withModifiers, An = window.Vue.withCtx, Ut = window.Vue.createVNode, hb = { class: "sx-translation-list-language-selector" }, fb = {
  key: 0,
  class: "mw-ui-autonym"
}, wb = ["lang", "dir", "textContent"], _b = {
  key: 0,
  class: "mw-ui-autonym"
}, vb = ["lang", "dir", "textContent"], zo = window.Vue.computed, Sb = window.Vue.inject, yb = window.Vue.ref, _c = {
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
    const n = e, o = t, s = Sb("breakpoints"), a = zo(() => s.value.mobile), r = yb(null), l = zo(() => !!r.value), u = () => r.value = "source", g = () => r.value = "target", i = () => r.value = null, c = zo(() => {
      if (!l.value)
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
    }, p = zo(
      () => n.selectedSourceLanguage === "all"
    ), m = zo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = mb("i18n");
      return Uo(), Io("div", hb, [
        Ut(Se(T), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: An(() => [
            Ut(Se(C), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: An(() => [
                Ut(Se(he), {
                  indicator: Se(Dl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: ud(u, ["stop"])
                }, {
                  default: An(() => [
                    p.value ? ld((Uo(), Io("span", fb, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Uo(), Io("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Se(U.getDir)(e.selectedSourceLanguage),
                      textContent: cd(Se(U.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, wb))
                  ]),
                  _: 1
                }, 8, ["indicator"])
              ]),
              _: 1
            }),
            Ut(Se(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: An(() => [
                Ut(Se(we), { icon: Se(jp) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ut(Se(C), { cols: "5" }, {
              default: An(() => [
                Ut(Se(he), {
                  indicator: Se(Dl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: ud(g, ["stop"])
                }, {
                  default: An(() => [
                    m.value ? ld((Uo(), Io("span", _b, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Uo(), Io("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Se(U.getDir)(e.selectedTargetLanguage),
                      textContent: cd(Se(U.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, vb))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ut(Se(nt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (w) => l.value = w),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: i
        }, {
          default: An(() => [
            Ut(Se(uh), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: c.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: d,
              onClose: i
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ]);
    };
  }
};
const Cb = window.Vue.toDisplayString, Ro = window.Vue.createElementVNode, _t = window.Vue.openBlock, Oo = window.Vue.createBlock, ha = window.Vue.createCommentVNode, fa = window.Vue.unref, dd = window.Vue.createVNode, kb = window.Vue.resolveDirective, gd = window.Vue.withDirectives, Ho = window.Vue.createElementBlock, pd = window.Vue.renderList, md = window.Vue.Fragment, bb = window.Vue.normalizeClass, hd = window.Vue.withCtx, xb = ["textContent"], $b = {
  key: 1,
  class: "cx-translation-list-empty-placeholder pa-4"
}, Vb = { class: "cx-translation-list-empty-placeholder__icon-container" }, Eb = { class: "cx-translation-list-empty-placeholder__icon" }, Db = { class: "cx-translation-list-empty-placeholder__title mt-5" }, Ab = { class: "cx-translation-list-empty-placeholder__description mt-2" }, Lb = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Tb = {
  key: 4,
  class: "cx-translation-list-wrapper"
}, wa = window.Vue.ref, It = window.Vue.computed, Bb = window.Vuex.useStore, Pb = window.Codex.CdxIcon, fd = {
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
    const t = e, n = wa("all"), o = wa("all"), s = Bb(), a = It(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = Is(), l = wa(!1), u = wa(null), g = It(
      () => t.translationStatus === "draft"
    ), i = It(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = It(
      () => n.value === "all"
    ), d = It(
      () => o.value === "all"
    ), p = It(
      () => i.value.filter(
        (w) => (c.value || w.sourceLanguage === n.value) && (d.value || w.targetLanguage === o.value)
      ).sort((w, S) => w.lastUpdatedTimestamp < S.lastUpdatedTimestamp)
    ), m = It(() => {
      let w = i.value.map(
        (S) => S.targetLanguage
      );
      return r.value && (w = w.filter(
        (S) => r.value.includes(S)
      )), [...new Set(w)];
    }), h = It(() => {
      const w = i.value.map(
        (S) => S.sourceLanguage
      );
      return [...new Set(w)];
    }), f = (w) => {
      u.value = w, l.value = !0;
    }, _ = It(() => t.activeStatus === t.translationStatus);
    return (w, S) => {
      const y = kb("i18n");
      return _.value ? (_t(), Oo(fa(ze), {
        key: 0,
        class: bb(`cx-translation-list--${e.translationStatus}`)
      }, {
        header: hd(() => [
          Ro("h3", {
            class: "mw-ui-card__title pa-4 pt-5 mb-0",
            textContent: Cb(w.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 8, xb)
        ]),
        default: hd(() => [
          p.value.length ? (_t(), Oo(_c, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": S[0] || (S[0] = (k) => n.value = k),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": S[1] || (S[1] = (k) => o.value = k),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ha("", !0),
          a.value && !p.value.length ? (_t(), Ho("div", $b, [
            Ro("div", Vb, [
              Ro("div", Eb, [
                dd(fa(Pb), { icon: fa(nh) }, null, 8, ["icon"])
              ])
            ]),
            gd(Ro("p", Db, null, 512), [
              [y, void 0, "cx-sx-translation-list-empty-title"]
            ]),
            gd(Ro("p", Ab, null, 512), [
              [y, void 0, "cx-sx-translation-list-empty-description"]
            ])
          ])) : ha("", !0),
          a.value ? ha("", !0) : (_t(), Oo(fa(Re), { key: 2 })),
          g.value ? (_t(), Ho("div", Lb, [
            (_t(!0), Ho(md, null, pd(p.value, (k) => (_t(), Oo(eC, {
              key: `${e.translationStatus}-${k.key}`,
              translation: k,
              onDeleteTranslation: (x) => f(k)
            }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
          ])) : (_t(), Ho("div", Tb, [
            (_t(!0), Ho(md, null, pd(p.value, (k) => (_t(), Oo(Pk, {
              key: `${e.translationStatus}-${k.key}`,
              translation: k,
              onDeleteTranslation: (x) => f(k)
            }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
          ])),
          dd(Ok, {
            modelValue: l.value,
            "onUpdate:modelValue": S[2] || (S[2] = (k) => l.value = k),
            translation: u.value
          }, null, 8, ["modelValue", "translation"])
        ]),
        _: 1
      }, 8, ["class"])) : ha("", !0);
    };
  }
}, Fb = window.Vue.computed, Mb = window.Vuex.useStore, je = () => {
  const e = Mb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M();
  return { sectionSuggestion: Fb(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Nb = window.Vuex.useStore, Ub = window.Vue.computed, tn = () => {
  const e = Nb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = M();
  return { currentTranslation: Ub(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, wd = window.Vue.computed, Ib = window.Vuex.useStore, qe = () => {
  const e = Ib(), { sectionSuggestion: t } = je(), { currentTranslation: n } = tn(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), r = wd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = wd(() => {
    var g, i;
    const u = ((g = t.value) == null ? void 0 : g.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, zb = window.Vue.ref, Rb = window.Vue.watchEffect, Ob = (e, t) => b(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield le.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, g, i, c) => {
    const d = i < c.length - 1 ? c[i + 1].byteoffset : s;
    return u[g.line] = d - g.byteoffset, u;
  }, {});
  return Object.keys(l).filter((u) => a[u]).reduce((u, g) => u + l[g], 0);
}), or = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Hb = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, jb = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, dh = () => {
  const { currentSourcePage: e } = qe(), { sectionSuggestion: t } = je(), n = zb(null);
  return Rb(() => {
    if (t.value)
      Ob(
        e.value,
        t.value
      ).then((o) => {
        n.value = jb(
          or(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = or(e.value.articleSize);
      n.value = Hb(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: or };
};
const ee = window.Vue.unref, it = window.Vue.createVNode, cn = window.Vue.createElementVNode, jo = window.Vue.toDisplayString, Be = window.Vue.withCtx, qb = window.Vue.resolveDirective, sr = window.Vue.withDirectives, Ln = window.Vue.openBlock, Yn = window.Vue.createBlock, Jn = window.Vue.createCommentVNode, Gb = window.Vue.createTextVNode, _d = window.Vue.withModifiers, Xb = window.Vue.createElementBlock, Wb = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Kb = { class: "col shrink pe-4" }, Yb = ["lang", "dir", "textContent"], Jb = ["lang", "dir", "textContent"], Qb = ["textContent"], Zb = ["textContent"], ar = window.Codex.CdxIcon, rt = window.Vue.computed, ex = window.Vue.inject, tx = window.Vuex.useStore, nx = window.Codex.CdxInfoChip, jl = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [yo, kn, wo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = tx(), { bytesToMinutes: o } = dh(), s = rt(() => t.suggestion), a = rt(
      () => s.value.sourceTitle || s.value.title
    ), r = rt(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), l = rt(
      () => {
        var w;
        return (w = s.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), u = rt(() => {
      var w;
      return (w = r.value) == null ? void 0 : w.description;
    }), g = rt(
      () => s.value instanceof kn
    ), i = rt(
      () => s.value instanceof wo
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: d } = H(n), p = rt(
      () => i.value ? Zm : eh
    ), m = ex("colors"), h = rt(
      () => i.value ? m.blue600 : "currentColor"
    ), f = rt(() => {
      var w;
      return o((w = r.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = rt(
      () => s.value instanceof gm || s.value instanceof pm
    );
    return (w, S) => {
      const y = qb("i18n");
      return s.value ? (Ln(), Xb("div", Wb, [
        cn("div", Kb, [
          it(ee(Xl), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        it(ee(T), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Be(() => [
            it(ee(T), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Be(() => [
                it(ee(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Be(() => [
                    cn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ee(U.getDir)(s.value.sourceLanguage),
                      textContent: jo(a.value)
                    }, null, 8, Yb)
                  ]),
                  _: 1
                }),
                it(ee(C), { shrink: "" }, {
                  default: Be(() => [
                    cn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ee(U.getDir)(s.value.sourceLanguage),
                      textContent: jo(u.value)
                    }, null, 8, Jb)
                  ]),
                  _: 1
                }),
                f.value && !g.value && !_.value ? (Ln(), Yn(ee(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Be(() => [
                    sr(cn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Jn("", !0),
                g.value ? (Ln(), Yn(ee(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Be(() => [
                    sr(cn("small", null, null, 512), [
                      [y, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (Ln(), Yn(ee(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Be(() => [
                    it(ee(T), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Be(() => [
                        it(ee(C), { grow: "" }, {
                          default: Be(() => [
                            cn("small", {
                              textContent: jo(ee(c))
                            }, null, 8, Qb),
                            it(ee(ar), {
                              icon: ee(dk),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            cn("small", {
                              textContent: jo(ee(d))
                            }, null, 8, Zb)
                          ]),
                          _: 1
                        }),
                        l.value ? (Ln(), Yn(ee(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Be(() => [
                            sr(cn("small", null, null, 512), [
                              [y, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Jn("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Jn("", !0),
                _.value ? (Ln(), Yn(ee(C), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: Be(() => [
                    it(ee(nx), { icon: ee(dc) }, {
                      default: Be(() => [
                        Gb(jo(s.value.collection.name), 1)
                      ]),
                      _: 1
                    }, 8, ["icon"])
                  ]),
                  _: 1
                })) : Jn("", !0)
              ]),
              _: 1
            }),
            it(ee(C), { shrink: "" }, {
              default: Be(() => [
                i.value ? Jn("", !0) : (Ln(), Yn(ee(ar), {
                  key: 0,
                  icon: ee(bo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = _d((k) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                it(ee(ar), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = _d((k) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Jn("", !0);
    };
  }
}, gh = (e) => {
  if (e.type === et)
    return "suggestion_filter_topic_area";
  if (e.id === ge || e.type === ge)
    return "suggestion_filter_collections";
  if (e.id === ft)
    return "suggestion_filter_previous_edits";
  if (e.id === Vt)
    return "suggestion_filter_popular_articles";
}, ql = (e) => {
  if (e.type === et || e.type === ge)
    return e.id;
  if (e.id === ge)
    return "all-collections";
};
const Pe = window.Vue.unref, un = window.Vue.createVNode, zt = window.Vue.withCtx, ox = window.Vue.resolveDirective, _a = window.Vue.createElementVNode, vd = window.Vue.withDirectives, ir = window.Vue.toDisplayString, Sd = window.Vue.createTextVNode, sx = window.Vue.vShow, yd = window.Vue.renderList, Cd = window.Vue.Fragment, qo = window.Vue.openBlock, rr = window.Vue.createElementBlock, ax = window.Vue.normalizeClass, kd = window.Vue.createBlock, ix = { class: "sx-suggestions-filters" }, rx = { class: "mb-0" }, lx = { class: "sx-suggestions-filters__group-label mb-3" }, cx = { class: "sx-suggestions-filters__group-filters mb-3" }, bd = window.Vue.ref, ux = window.Vue.computed, dx = window.Vue.inject, xd = window.Codex.CdxButton, gx = window.Codex.CdxIcon, px = window.Codex.CdxInfoChip, mx = {
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
      [ft]: sh,
      [Vt]: th,
      [ge]: dc,
      [et]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r } = ic(), l = He(), u = () => n("update:modelValue", !1), g = () => {
      l({ event_type: "suggestion_filters_close" }), u();
    }, i = () => {
      d.value && (l({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: ql(
          d.value
        )
      }), r(d.value)), u();
    }, c = bd(!1), d = bd(null), p = (w) => {
      const S = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: gh(w),
        event_context: ql(w)
      };
      l(S), d.value = w, c.value = !0;
    }, m = (w) => d.value ? d.value.id === w.id && d.value.type === w.type : a(w), h = dx("breakpoints"), f = ux(() => h.value.mobile), { getFilterProvider: _ } = rc();
    return (w, S) => {
      const y = ox("i18n");
      return qo(), kd(Pe(nt), {
        value: e.modelValue,
        animation: "fade",
        fullscreen: f.value,
        header: !1
      }, {
        default: zt(() => [
          _a("section", ix, [
            un(Pe(T), {
              class: "sx-suggestions-filters__header ma-0 py-3",
              align: "stretch",
              justify: "start"
            }, {
              default: zt(() => [
                un(Pe(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: zt(() => [
                    un(Pe(xd), {
                      class: "pa-0 ms-4",
                      weight: "quiet",
                      "aria-label": w.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: g
                    }, {
                      default: zt(() => [
                        un(Pe(gx), { icon: Pe(bo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                un(Pe(C), {
                  grow: "",
                  align: "center"
                }, {
                  default: zt(() => [
                    vd(_a("h5", rx, null, 512), [
                      [y, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                un(Pe(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: zt(() => [
                    vd(un(Pe(xd), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: i
                    }, {
                      default: zt(() => [
                        Sd(ir(w.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [sx, c.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            un(Pe(C), { class: "px-4 py-4" }, {
              default: zt(() => [
                (qo(!0), rr(Cd, null, yd(Pe(s), (k) => (qo(), rr("div", {
                  key: k.id,
                  class: "sx-suggestions-filters__group"
                }, [
                  _a("div", lx, ir(k.label), 1),
                  _a("div", cx, [
                    (qo(!0), rr(Cd, null, yd(k.filters, (x) => (qo(), kd(Pe(px), {
                      key: x.id,
                      class: ax(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                        "sx-suggestions-filters__filter--active": m(x)
                      }]),
                      icon: o[Pe(_)(x)],
                      onClick: (F) => p(x)
                    }, {
                      default: zt(() => [
                        Sd(ir(x.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "icon", "onClick"]))), 128))
                  ])
                ]))), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["value", "fullscreen"]);
    };
  }
};
const va = window.Vue.unref, Sa = window.Vue.openBlock, $d = window.Vue.createBlock;
window.Vue.createCommentVNode;
const hx = window.Vue.renderList, fx = window.Vue.Fragment, Vd = window.Vue.createElementBlock, wx = window.Vue.toDisplayString, _x = window.Vue.createTextVNode, vx = window.Vue.normalizeClass, Sx = window.Vue.withCtx, yx = window.Vue.createVNode, Cx = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, kx = window.Codex.CdxInfoChip, Ed = window.Vue.ref, bx = window.Vue.computed, Dd = window.Vue.watch, xx = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = de(), n = He(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r
    } = ic(), l = Ed(!1), u = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), l.value = !0;
    }, g = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: gh(h),
        event_context: ql(h)
      };
      n(f), s(h);
    }, i = {
      [ft]: sh,
      [Vt]: th,
      [ge]: dc,
      [et]: null
    }, { getFilterProvider: c } = rc(), d = (h) => ({
      id: h.id,
      type: h.type,
      icon: i[c(h)],
      label: h.label,
      action: g
    }), p = Ed(o());
    Dd(l, (h) => {
      h || (p.value = o());
    }), Dd(r, (h) => {
      h || (p.value = o());
    });
    const m = bx(() => [
      ...p.value.map(d),
      {
        id: "more",
        icon: pc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: u
      }
    ]);
    return (h, f) => va(r) ? (Sa(), $d(va(Re), { key: 0 })) : (Sa(), Vd("div", Cx, [
      (Sa(!0), Vd(fx, null, hx(m.value, (_) => (Sa(), $d(va(kx), {
        key: _.label,
        class: vx(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": va(a)(_) }]),
        icon: _.icon,
        onClick: (w) => _.action(_)
      }, {
        default: Sx(() => [
          _x(wx(_.label), 1)
        ]),
        _: 2
      }, 1032, ["class", "icon", "onClick"]))), 128)),
      yx(mx, {
        modelValue: l.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, $x = window.Vue.computed, Vx = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Is(), n = $x(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Tn = window.Vue.computed, Ad = window.Vue.ref, Ex = window.Vue.watch, Dx = window.Vuex.useStore, Ax = () => {
  const e = Dx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = sc(), r = He(), l = Tn(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = Tn(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = Tn(
    () => !l.value && !u.value
  ), i = Ad(0), c = Ad(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, p = 4, m = Tn(
    () => a(i.value)
  ), h = Tn(
    () => s(c.value)
  ), f = () => {
    x(), J(), F(), B();
  }, {
    fetchNextSectionSuggestionsSlice: _,
    fetchNextPageSuggestionsSlice: w
  } = lc(), S = (I) => I.length === d, y = Tn(
    () => S(h.value)
  ), k = Tn(
    () => S(m.value)
  ), x = () => {
    const I = (i.value + 1) % p, Q = S(
      a(I)
    );
    (!k.value || !Q) && _();
  }, F = () => {
    const I = (c.value + 1) % p, Q = S(
      s(I)
    );
    (!y.value || !Q) && w();
  }, E = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", I), x();
  }, P = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", I), F();
  }, J = () => i.value = (i.value + 1) % p, B = () => c.value = (c.value + 1) % p;
  return Ex(
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
    showRefreshButton: g,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: k
  };
}, Lx = window.Vuex.useStore, vc = () => {
  const e = Lx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = lc(), o = (g, i, c) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === i && d.sourceTitle === c
  ), s = (g) => b(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: d } = g;
    yield le.markFavorite(i, c, d);
    const p = new wo({
      title: i,
      sourceLanguage: c,
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
    markFavoriteSuggestion: (g, i, c) => b(void 0, null, function* () {
      const d = o(
        i,
        c,
        g
      );
      d && (e.commit(
        "suggestions/removePageSuggestionFromList",
        d
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, c, g);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield le.markFavorite(
        g,
        i,
        c
      );
      const m = new wo({
        title: g,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), le.unmarkFavorite(g))
  };
}, Tx = () => {
  const { currentSuggestionFilters: e } = M(), { defaultSeedsFetched: t } = qm();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === ft)
      return t.value ? "suggestion_no_seed" : "suggestion_recent_edit";
    if (n === et)
      return "suggestion_topic_area";
    if (o === Vt)
      return "suggestion_featured";
    if (o === ge || n === ge)
      return "suggestion_filter_collections";
    throw new Error("Event source cannot be empty");
  };
};
const Ld = window.Vue.toDisplayString, ya = window.Vue.createElementVNode, Qn = window.Vue.createVNode, te = window.Vue.unref, Go = window.Vue.withCtx, Bx = window.Vue.resolveDirective, lr = window.Vue.withDirectives, Td = window.Vue.renderList, Bd = window.Vue.Fragment, dn = window.Vue.openBlock, cr = window.Vue.createElementBlock, Xo = window.Vue.createBlock, ur = window.Vue.createCommentVNode, Px = window.Vue.createTextVNode, Fx = window.Vue.vShow, Mx = ["textContent"], Nx = { class: "cx-translation-list__division-title ma-0 pa-4" }, Ux = { class: "cx-translation-list__division-title ma-0 pa-4" }, Ix = { class: "cx-suggestion-list__refresh-button-container justify-center" }, zx = window.Vue.ref, Rx = window.Codex.CdxButton, Ox = window.Codex.CdxIcon, Hx = {
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
    } = M(), { supportedLanguageCodes: s, availableTargetLanguages: a } = Vx(), r = Km(), l = (B) => r(B, n.value), u = (B) => r(t.value, B), g = Tx(), i = js(), c = (B) => {
      i(
        B.sourceTitle,
        B.sourceLanguage,
        B.targetLanguage,
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
      showRefreshButton: S,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: k
    } = Ax(), x = zx(null), F = He(), E = () => {
      F({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), x.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: P, markFavoritePageSuggestion: J } = vc();
    return (B, I) => {
      const Q = Bx("i18n");
      return lr((dn(), cr("div", null, [
        Qn(te(ze), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: Go(() => [
            ya("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: Ld(B.$i18n("cx-suggestionlist-title"))
            }, null, 8, Mx),
            Qn(xx)
          ]),
          default: Go(() => [
            Qn(_c, {
              "source-languages": te(s),
              "target-languages": te(a),
              "selected-source-language": te(t),
              "selected-target-language": te(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        Qn(te(ze), {
          ref_key: "pageSuggestionsList",
          ref: x,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: Go(() => [
            lr(ya("h5", Nx, null, 512), [
              [Q, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (dn(!0), cr(Bd, null, Td(te(d), (X, ot) => (dn(), Xo(jl, {
              key: `page-suggestion-${ot}`,
              suggestion: X,
              onClose: (Le) => te(m)(X),
              onClick: (Le) => c(X),
              onBookmark: (Le) => te(J)(X)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(_) && !te(y) ? (dn(), Xo(te(Re), { key: 0 })) : ur("", !0)
          ]),
          _: 1
        }, 512),
        Qn(te(ze), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: Go(() => [
            lr(ya("h5", Ux, null, 512), [
              [Q, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (dn(!0), cr(Bd, null, Td(te(p), (X, ot) => (dn(), Xo(jl, {
              key: `section-suggestion-${ot}`,
              class: "ma-0",
              suggestion: X,
              onClose: (Le) => te(h)(X),
              onClick: (Le) => c(X),
              onBookmark: (Le) => te(P)(X)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(w) && !te(k) ? (dn(), Xo(te(Re), { key: 0 })) : ur("", !0)
          ]),
          _: 1
        }),
        ya("div", Ix, [
          te(S) ? (dn(), Xo(te(Rx), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: E
          }, {
            default: Go(() => [
              Qn(te(Ox), {
                class: "me-1",
                icon: te(oh)
              }, null, 8, ["icon"]),
              Px(" " + Ld(B.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : ur("", !0)
        ])
      ], 512)), [
        [Fx, e.active]
      ]);
    };
  }
}, jx = window.Vue.resolveDirective, qx = window.Vue.createElementVNode, Gx = window.Vue.withDirectives, Xx = window.Vue.renderList, Wx = window.Vue.Fragment, dr = window.Vue.openBlock, Kx = window.Vue.createElementBlock, Pd = window.Vue.unref, Fd = window.Vue.createBlock, Md = window.Vue.withCtx, Yx = window.Vue.createCommentVNode, Jx = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, Qx = window.Vue.computed, Zx = window.Vuex.useStore, e8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = Zx(), n = Qx(() => t.state.suggestions.favorites || []), o = js(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = vc();
    return (r, l) => {
      const u = jx("i18n");
      return n.value.length ? (dr(), Fd(Pd(ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Md(() => [
          Gx(qx("h3", Jx, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Md(() => [
          (dr(!0), Kx(Wx, null, Xx(n.value, (g, i) => (dr(), Fd(jl, {
            key: `favorite-${i}`,
            suggestion: g,
            onClick: (c) => s(g),
            onBookmark: (c) => Pd(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : Yx("", !0);
    };
  }
};
const t8 = window.Vue.resolveDirective, Wo = window.Vue.createElementVNode, n8 = window.Vue.withDirectives, o8 = window.Vue.renderList, s8 = window.Vue.Fragment, Nd = window.Vue.openBlock, Ud = window.Vue.createElementBlock, a8 = window.Vue.unref, i8 = window.Vue.createVNode, r8 = window.Vue.toDisplayString, l8 = { class: "cx-help-panel pa-4" }, c8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, u8 = ["href"], d8 = ["textContent"], g8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = de(), n = [
      {
        icon: Vw,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: cw,
        label: t.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Ew,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ];
    return (o, s) => {
      const a = t8("i18n");
      return Nd(), Ud("div", l8, [
        n8(Wo("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Wo("ul", c8, [
          (Nd(), Ud(s8, null, o8(n, (r, l) => Wo("li", {
            key: l,
            class: "mt-4"
          }, [
            Wo("a", {
              href: r.href,
              target: "_blank"
            }, [
              i8(a8(we), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Wo("span", {
                textContent: r8(r.label)
              }, null, 8, d8)
            ], 8, u8)
          ])), 64))
        ])
      ]);
    };
  }
};
const p8 = window.Vue.resolveDirective, Zn = window.Vue.createElementVNode, gr = window.Vue.withDirectives, Id = window.Vue.toDisplayString, pr = window.Vue.unref, mr = window.Vue.withCtx, hr = window.Vue.createVNode, m8 = window.Vue.openBlock, h8 = window.Vue.createElementBlock, f8 = { class: "cx-stats-panel pa-4" }, w8 = ["textContent"], _8 = { class: "cx-stats-panel__monthly-stats-label" }, v8 = ["textContent"], S8 = { class: "cx-stats-panel__total-stats-label" }, y8 = window.Vue.ref, zd = window.Vue.computed, C8 = window.Vue.watch, k8 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = zd(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = zd(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = y8(null);
    return C8(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), g = u.reduce(
          (y, k) => Math.max(y, r[k].delta),
          0
        ), i = u.map((y) => r[y].delta), c = a.value.getBoundingClientRect().width, d = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = d;
        const p = 4, m = 6, h = 50, f = (h - p) / g;
        let _ = p;
        const w = Math.floor(
          (c - p) / (m + p)
        ), S = i.slice(
          Math.max(i.length - w, 0)
        );
        S.forEach((y, k) => {
          k === S.length - 1 && (l.fillStyle = "#36c");
          const x = h - y * f;
          l.fillRect(_, x, m, y * f), _ += m + p;
        });
      }
    ), (r, l) => {
      const u = p8("i18n");
      return m8(), h8("div", f8, [
        gr(Zn("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        hr(pr(T), null, {
          default: mr(() => [
            hr(pr(C), { class: "cx-stats-panel__monthly-stats" }, {
              default: mr(() => [
                Zn("h3", {
                  textContent: Id(s.value)
                }, null, 8, w8),
                gr(Zn("h5", _8, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            hr(pr(C), { class: "cx-stats-panel__total-stats" }, {
              default: mr(() => [
                Zn("h3", {
                  textContent: Id(o.value)
                }, null, 8, v8),
                gr(Zn("h5", S8, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Zn("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, ph = () => {
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
const b8 = window.Vue.renderSlot, x8 = window.Vue.unref, $8 = window.Vue.createVNode, V8 = window.Vue.createElementVNode, E8 = window.Vue.openBlock, D8 = window.Vue.createElementBlock, A8 = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, L8 = { class: "col-12 ma-0 pa-0" }, T8 = {
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
    const n = t, o = ph(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (E8(), D8("footer", A8, [
      V8("div", L8, [
        b8(a.$slots, "default", {}, () => [
          $8(x8(Ts), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, B8 = window.Vuex.useStore;
let Ca = [];
const mh = () => {
  const e = B8();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ca.includes(o) ? Promise.resolve() : (Ca.push(o), ko.fetchLanguageTitles(t, n).then((s) => {
      Ca = Ca.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, P8 = window.Vuex.useStore, hh = () => {
  const e = P8(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), { isDefaultFilter: r } = tm(), { previousRoute: l } = H(e), u = He(), g = () => {
    const d = {
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
    return d[p];
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
    const d = i(), p = {
      event_type: "dashboard_open",
      event_source: d,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return d === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), u(p);
  }, getEventSource: i };
}, F8 = () => {
  const e = js(), t = mh(), { logDashboardOpenEvent: n, getEventSource: o } = hh(), {
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
}, M8 = window.Vuex.useStore, mi = () => {
  const e = M8(), t = (o) => b(void 0, null, function* () {
    let s = yield tt.fetchTranslations(o);
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
        const { targetLanguage: g, targetTitle: i } = u, c = !!e.getters["mediawiki/getPage"](
          g,
          i
        );
        i && !c && e.commit(
          "mediawiki/addPage",
          new Co({ title: i, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, N8 = window.Vuex.useStore, U8 = () => {
  const e = N8();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield le.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), le.fetchSectionSuggestion(
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
}, I8 = () => {
  const e = F8(), { fetchAllTranslations: t } = mi(), n = cc(), o = U8(), { fetchPageCollections: s } = Xm(), { pageURLParameter: a, sectionURLParameter: r, draftURLParameter: l } = M(), { logDashboardOpenEvent: u } = hh();
  return () => b(void 0, null, function* () {
    if (s(), yield Wm()(), a.value) {
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
}, Rd = window.Vue.computed, z8 = window.Vue.ref, R8 = window.Vue.watch, O8 = window.Vue.watchEffect, H8 = window.Vuex.useStore, j8 = ["suggestions", "draft", "published"], q8 = () => {
  const e = H8(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = M(), o = z8(null);
  if (j8.includes(t.value))
    o.value = t.value;
  else {
    const s = Rd(
      () => e.state.translator.translationsLoaded.draft
    ), a = Rd(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", R8(s, (r) => {
      r && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return O8(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, G8 = window.Vue.computed, X8 = () => {
  const e = de();
  return G8(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: gw,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: ai,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: dw,
        type: "text"
      }
    }
  ]);
};
const ce = window.Vue.unref, ye = window.Vue.createVNode, W8 = window.Vue.toDisplayString, K8 = window.Vue.createTextVNode, Rt = window.Vue.withCtx, fr = window.Vue.openBlock, Od = window.Vue.createBlock, Hd = window.Vue.createCommentVNode, Y8 = window.Vue.vShow, J8 = window.Vue.withDirectives, Q8 = window.Vue.isRef, Z8 = window.Vue.createElementBlock, e2 = window.Vue.computed, t2 = window.Vuex.useStore, n2 = window.Codex.CdxButton, o2 = window.Codex.CdxIcon, s2 = {
  __name: "CXDashboard",
  setup(e) {
    const t = _e(), n = He(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    I8()();
    const a = t2();
    a.dispatch("translator/fetchTranslatorStats");
    const r = e2(() => a.state.translator.translatorStats), l = q8(), u = X8(), g = ph(), i = (c) => {
      g(c), l.value = c;
    };
    return (c, d) => (fr(), Z8("div", null, [
      ye(ce(T), { class: "ma-0 py-4" }, {
        default: Rt(() => [
          ye(ce(n2), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: Rt(() => [
              ye(ce(o2), {
                class: "me-1",
                icon: ce(Rl)
              }, null, 8, ["icon"]),
              K8(" " + W8(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      ye(ce(T), {
        class: "ma-0",
        align: "start"
      }, {
        default: Rt(() => [
          c.$mwui.breakpoint.tabletAndUp ? (fr(), Od(ce(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: Rt(() => [
              ye(ce(Ts), {
                id: "dashboard-list-selector--desktop",
                items: ce(u),
                active: ce(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Hd("", !0),
          ye(ce(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: Rt(() => [
              J8(ye(e8, null, null, 512), [
                [Y8, ce(l) === "suggestions"]
              ]),
              ye(Hx, {
                active: ce(l) === "suggestions"
              }, null, 8, ["active"]),
              ye(fd, {
                "translation-status": "draft",
                "active-status": ce(l)
              }, null, 8, ["active-status"]),
              ye(fd, {
                "translation-status": "published",
                "active-status": ce(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          ye(ce(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: Rt(() => [
              ye(ce(T), {
                class: "ma-0",
                align: "start"
              }, {
                default: Rt(() => [
                  ye(ce(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: Rt(() => [
                      ye(k8, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  ye(ce(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: Rt(() => [
                      ye(g8)
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
      c.$mwui.breakpoint.mobile ? (fr(), Od(T8, {
        key: 0,
        active: ce(l),
        "onUpdate:active": d[0] || (d[0] = (p) => Q8(l) ? l.value = p : null),
        items: ce(u)
      }, null, 8, ["active", "items"])) : Hd("", !0)
    ]));
  }
}, a2 = {
  name: "DashboardView",
  components: { CxDashboard: s2 }
}, i2 = window.Vue.resolveComponent, r2 = window.Vue.createVNode, l2 = window.Vue.openBlock, c2 = window.Vue.createElementBlock, u2 = { class: "cx-translation-dashboard" };
function d2(e, t, n, o, s, a) {
  const r = i2("cx-dashboard");
  return l2(), c2("main", u2, [
    r2(r, { class: "mb-4 pb-12" })
  ]);
}
const jd = /* @__PURE__ */ Y(a2, [["render", d2]]), eo = window.Vue.computed, g2 = () => {
  const { sectionSuggestion: e } = je(), { targetLanguageURLParameter: t } = M(), { currentTranslation: n } = tn(), o = eo(
    () => {
      var d, p, m;
      return (m = (p = (d = e.value) == null ? void 0 : d.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = eo(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.missingSectionsCount;
    }
  ), a = eo(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = en(), u = eo(() => r ? j.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), g = (d) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : d ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = eo(() => {
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
  }), c = eo(
    () => {
      var d;
      return !r.value || ((d = e.value) == null ? void 0 : d.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: i,
    getActionButtonLabel: g,
    isProgressiveButton: c,
    targetArticlePath: u
  };
}, fh = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function p2(e) {
  return e.$el = $(e), e;
}
function m2(e, t, n, o) {
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
function h2() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function f2(e, t) {
  return b(this, null, function* () {
    yield Sc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = p2(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const w2 = window.Vue.computed, _2 = window.Vue.onMounted, v2 = window.Vue.ref;
function S2(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const y2 = {
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
    const n = v2(null);
    let o = null;
    const s = w2(() => o.getHtml()), a = () => {
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
    return _2(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = S2;
      const i = yield f2(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = m2(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = h2, o.focus();
    })), { sxeditor: n };
  }
}, Gl = window.Vue.createElementVNode, C2 = window.Vue.openBlock, k2 = window.Vue.createElementBlock, b2 = ["lang", "dir"], x2 = /* @__PURE__ */ Gl("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Gl("div", { class: "toolbar" })
], -1), $2 = ["lang", "dir"];
function V2(e, t, n, o, s, a) {
  return C2(), k2("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    x2,
    Gl("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, $2)
  ], 8, b2);
}
const E2 = /* @__PURE__ */ Y(y2, [["render", V2]]);
function Sc() {
  return mw.loader.using("mw.cx3.ve");
}
const D2 = window.Vuex.useStore, wh = () => {
  const e = D2();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Sc(), new Promise((s) => {
      setTimeout(() => {
        const a = mm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, A2 = window.Vuex.useStore, yc = () => {
  const e = A2();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield ko.fetchPageContent(
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
}, L2 = window.Vuex.useStore, Cc = () => {
  const e = L2(), { currentSourcePage: t } = qe(), n = wh(), o = yc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l
  } = M(), u = (c, d) => b(void 0, null, function* () {
    c() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      r.value,
      l.value
    ), yield n(
      a.value,
      l.value
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), d();
  });
  return {
    selectPageSectionByIndex: (c) => {
      const d = () => {
        var m;
        return (m = t.value.sections) == null ? void 0 : m[c];
      };
      return u(d, () => {
        const m = d();
        c === 0 ? m.originalTitle = t.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => t.value.getSectionByTitle(c), () => {
      s(c);
    })
  };
}, kc = () => (e, t, n, o = {}) => {
  j.setCXToken(e, t, n), location.href = j.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, T2 = (e, t, n, o) => b(void 0, null, function* () {
  var l, u, g;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, r = yield fm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), B2 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, P2 = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return T2(e, t, n, o);
  B2(e, t);
}), F2 = (e, t, n, o) => {
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
        const g = P2(
          l,
          u,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, M2 = { restoreCorporaDraft: F2 }, Ko = window.Vue.computed, N2 = window.Vuex.useStore, W = () => {
  const e = N2(), { currentSourcePage: t, currentTargetPage: n } = qe(), { currentMTProvider: o } = H(e), { sectionURLParameter: s } = M(), a = Ko(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Ko(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Ko(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Ko(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = Ko(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: g
  };
}, U2 = window.Vuex.useStore, bc = () => {
  const e = He(), t = U2(), n = _e(), { currentSourcePage: o } = qe(), { sourceLanguage: s, targetLanguage: a } = H(t), r = DC(), l = wh(), { isDesktop: u } = Us(), g = kc(), i = yc(), { sourceSection: c } = W();
  return (d) => b(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: p,
      targetLanguage: m,
      sourceTitle: h,
      targetTitle: f,
      pageRevision: _,
      isLeadSectionTranslation: w
    } = d;
    if (u.value) {
      const k = {};
      w || (k.sourcesection = d.sourceSectionTitle), g(
        s.value,
        a.value,
        h,
        k
      );
      return;
    }
    j.unsetCXToken(
      p,
      m,
      h
    );
    const { setTranslationURLParams: S } = M();
    S(d), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== m) && r(d), t.dispatch("application/getCXServerToken"), e({
      event_type: "dashboard_translation_continue",
      translation_id: d.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: h,
      translation_source_section: d.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: f,
      translation_target_section: d.targetSectionTitle,
      translation_type: w ? "article" : "section"
    }), yield i(
      s.value,
      a.value,
      h,
      _
    ), yield l(s.value, h), d.restored || (yield tt.fetchTranslationUnits(d.translationId).then(
      (k) => M2.restoreCorporaDraft(
        o.value,
        f,
        a,
        k
      )
    ).then(() => d.restored = !0));
    let y;
    w ? (c.value.originalTitle = h, y = f) : y = d.targetSectionTitle, c.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, I2 = window.Vue.ref, z2 = window.Vuex.useStore, R2 = () => {
  const e = _e(), t = z2(), { isDesktop: n } = Us(), { logDashboardTranslationStartEvent: o } = fc(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = M(), { sourceLanguage: r, targetLanguage: l } = H(t), { targetPageExists: u } = en(), { selectPageSectionByIndex: g, selectPageSectionByTitle: i } = Cc(), c = kc(), d = () => b(void 0, null, function* () {
    n.value ? (o(), c(
      r.value,
      l.value,
      s.value,
      { sourcesection: a.value }
    )) : (yield i(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), p = bc(), m = I2(!1), { currentTranslation: h } = tn(), f = () => {
    h.value ? h.value.isArticleTranslation ? m.value = !0 : p(h.value) : a.value ? d() : u.value ? e.push({ name: "sx-section-selector" }) : _();
  }, _ = () => b(void 0, null, function* () {
    o(), n.value ? c(
      r.value,
      l.value,
      s.value
    ) : (g(0), fh() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: _,
    handlePrimaryButtonClick: f,
    translationConfirmationDialogOn: m
  };
};
const O2 = window.Vue.resolveDirective, qd = window.Vue.createElementVNode, Gd = window.Vue.withDirectives, H2 = window.Vue.unref, j2 = window.Vue.withCtx, q2 = window.Vue.openBlock, G2 = window.Vue.createBlock, X2 = {
  href: "",
  target: "_blank"
}, W2 = window.Codex.CdxDialog, K2 = {
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
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function u() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (g, i) => {
      const c = O2("i18n");
      return q2(), G2(H2(W2), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (d) => s(d)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (d) => s(!1))
      }, {
        default: j2(() => [
          Gd(qd("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Gd(qd("a", X2, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ae = window.Vue.unref, Y2 = window.Vue.resolveDirective, Yo = window.Vue.createElementVNode, Xd = window.Vue.withDirectives, Jo = window.Vue.toDisplayString, Qo = window.Vue.openBlock, wr = window.Vue.createElementBlock, _r = window.Vue.createCommentVNode, Ke = window.Vue.createVNode, lt = window.Vue.withCtx, vr = window.Vue.createTextVNode, J2 = window.Vue.withModifiers, Wd = window.Vue.createBlock, Q2 = window.Vue.Fragment, Z2 = { class: "sx-translation-confirmer-body pb-4" }, e$ = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, t$ = ["textContent"], n$ = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, o$ = ["href"], s$ = ["textContent"], Sr = window.Vue.computed, a$ = window.Vue.inject, Kd = window.Vue.ref, i$ = window.Vue.watchEffect, r$ = window.Vuex.useStore, yr = window.Codex.CdxButton, l$ = window.Codex.CdxIcon, c$ = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = _e(), o = r$();
    a$("colors");
    const { sectionSuggestion: s } = je(), { targetLanguageAutonym: a } = H(o), { sectionURLParameter: r } = M(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: u,
      translationConfirmationDialogOn: g
    } = R2(), i = Kd(!1), c = Kd(null), d = () => b(this, null, function* () {
      const B = yield tt.checkUnreviewedTranslations();
      B !== !0 && (i.value = !0, c.value = B.targetUrl);
    }), p = () => b(this, null, function* () {
      yield d(), !i.value && l();
    }), m = () => b(this, null, function* () {
      yield d(), !i.value && u();
    }), h = t;
    i$(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: f,
      getActionButtonLabel: _,
      isProgressiveButton: w,
      targetArticlePath: S
    } = g2(), y = de(), k = Sr(
      () => y.i18n(_(!!r.value))
    ), { isDesktop: x } = Us(), F = Sr(
      () => y.i18n(...f.value)
    ), E = () => b(this, null, function* () {
      yield d(), !i.value && n.push({ name: "sx-section-selector" });
    }), P = Sr(() => {
      var B, I;
      return r.value && !!((I = (B = s.value) == null ? void 0 : B.sourceSections) != null && I.length);
    }), { targetPageExists: J } = en();
    return (B, I) => {
      const Q = Y2("i18n");
      return Qo(), wr(Q2, null, [
        Yo("section", Z2, [
          ae(r) ? (Qo(), wr("section", e$, [
            Xd(Yo("h6", null, null, 512), [
              [Q, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Yo("h5", {
              class: "ma-0",
              textContent: Jo(ae(r))
            }, null, 8, t$)
          ])) : ae(J) ? (Qo(), wr("section", n$, [
            Ke(ae(T), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: lt(() => [
                Xd(Ke(ae(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [Q, [ae(a)], "cx-sx-existing-translation-status"]
                ]),
                Ke(ae(C), { shrink: "" }, {
                  default: lt(() => [
                    Yo("a", {
                      href: ae(S),
                      target: "_blank"
                    }, [
                      Ke(ae(l$), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ae(mc)
                      }, null, 8, ["icon"])
                    ], 8, o$)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ke(ae(T), { class: "ma-0" }, {
              default: lt(() => [
                Ke(ae(C), null, {
                  default: lt(() => [
                    Yo("span", {
                      textContent: Jo(F.value)
                    }, null, 8, s$)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : _r("", !0),
          Ke(ae(T), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: lt(() => [
              P.value ? (Qo(), Wd(ae(C), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: lt(() => [
                  Ke(ae(yr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: J2(E, ["stop"])
                  }, {
                    default: lt(() => [
                      vr(Jo(B.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _r("", !0),
              ae(J) && ae(x) ? (Qo(), Wd(ae(C), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: lt(() => [
                  Ke(ae(yr), {
                    size: "large",
                    onClick: p
                  }, {
                    default: lt(() => [
                      vr(Jo(B.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _r("", !0),
              Ke(ae(C), { shrink: "" }, {
                default: lt(() => [
                  Ke(ae(yr), {
                    weight: "primary",
                    size: "large",
                    action: ae(w) ? "progressive" : "default",
                    onClick: m
                  }, {
                    default: lt(() => [
                      vr(Jo(k.value), 1)
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
        Ke(K2, {
          modelValue: i.value,
          "onUpdate:modelValue": I[0] || (I[0] = (X) => i.value = X),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Yd = window.Vue.unref, u$ = window.Vue.openBlock, d$ = window.Vue.createBlock, Jd = window.Vue.computed, g$ = window.Vuex.useStore, _h = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Is();
    g$();
    const {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = M(), { currentLanguageTitleGroup: a } = en(), r = Jd(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((d) => d.lang)) || [];
      }
    ), l = Jd(
      () => n.value || t.value
    ), u = LC(), g = (c) => u(c, s.value), i = (c) => u(o.value, c);
    return (c, d) => (u$(), d$(_c, {
      class: "sx-article-language-selector",
      "source-languages": r.value,
      "target-languages": l.value,
      "selected-source-language": Yd(o),
      "selected-target-language": Yd(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": i
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Ce = window.Vue.unref, Cr = window.Vue.toDisplayString, Ot = window.Vue.createElementVNode, vt = window.Vue.createVNode, to = window.Vue.withCtx, p$ = window.Vue.resolveDirective, m$ = window.Vue.withDirectives, h$ = window.Vue.normalizeClass, f$ = window.Vue.openBlock, w$ = window.Vue.createBlock, _$ = ["textContent"], v$ = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, S$ = ["textContent"], y$ = { class: "pe-3" }, C$ = ["textContent"], k$ = window.Codex.CdxButton, Zo = window.Codex.CdxIcon, Ht = window.Vue.computed, b$ = window.Vuex.useStore, x$ = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = b$(), n = de(), { currentSourcePage: o } = qe(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = M(), l = Ht(() => t.state.suggestions.favorites || []), u = Ht(
      () => l.value.some(
        (x) => r.value === x.title && s.value === x.sourceLanguage && a.value === x.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: i } = vc(), { translationSizeMessageArgs: c } = dh(), d = () => g(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new wo({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Ht(
      () => u.value ? Zm : eh
    ), h = Ht(
      () => u.value ? p : d
    ), f = Ht(
      () => j.getPageUrl(s.value || "", r.value || "")
    ), _ = Ht(() => {
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
    }, S = Ht(() => {
      var F;
      const x = Object.values(((F = o.value) == null ? void 0 : F.pageviews) || {}).reduce(
        (E, P) => E + P,
        0
      );
      return w(x);
    }), y = Ht(() => c.value ? n.i18n(...c.value) : ""), k = Ht(() => c.value ? c.value[2] < 15 : !1);
    return (x, F) => {
      const E = p$("i18n");
      return f$(), w$(Ce(T), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: to(() => [
          vt(Ce(C), null, {
            default: to(() => [
              vt(Ce(T), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: to(() => [
                  vt(Ce(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: to(() => [
                      Ot("h5", {
                        class: "ma-0 me-1",
                        textContent: Cr(Ce(r))
                      }, null, 8, _$),
                      vt(Ce(Zo), {
                        size: "x-small",
                        icon: Ce(mc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  vt(Ce(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: to(() => [
                      vt(Ce(k$), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": x.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: to(() => [
                          vt(Ce(Zo), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Ot("div", v$, [
                Ot("div", null, [
                  Ot("span", null, [
                    vt(Ce(Zo), {
                      icon: Ce(nh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Ot("span", {
                      class: "pe-3",
                      textContent: Cr(_.value)
                    }, null, 8, S$)
                  ]),
                  Ot("span", null, [
                    vt(Ce(Zo), {
                      icon: Ce(pk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    m$(Ot("span", y$, null, 512), [
                      [E, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Ot("span", {
                  class: h$(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": k.value
                  }])
                }, [
                  vt(Ce(Zo), {
                    icon: Ce(hk),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Ot("span", {
                    textContent: Cr(y.value)
                  }, null, 8, C$)
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
const $$ = window.Vue.resolveDirective, Bn = window.Vue.createElementVNode, ka = window.Vue.withDirectives, V$ = window.Vue.toDisplayString, E$ = window.Vue.createTextVNode, kr = window.Vue.unref, br = window.Vue.withCtx, xr = window.Vue.openBlock, $r = window.Vue.createBlock;
window.Vue.createCommentVNode;
const D$ = { class: "pa-4" }, A$ = { class: "flex pt-2" }, L$ = window.Codex.CdxButton, T$ = window.Vue.ref, B$ = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = bc(), a = T$(!1), { currentTranslation: r } = tn(), l = () => b(this, null, function* () {
      a.value = !0;
      let u = !1;
      try {
        u = yield tt.splitTranslation(
          r.value.translationId
        );
      } catch (g) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          g
        );
      }
      a.value = !1, u && (s(r.value), o());
    });
    return (u, g) => {
      const i = $$("i18n");
      return xr(), $r(kr(nt), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: br(() => [
          Bn("div", A$, [
            a.value ? (xr(), $r(kr(Re), { key: 1 })) : (xr(), $r(kr(L$), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: br(() => [
                E$(V$(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: br(() => [
          Bn("div", D$, [
            ka(Bn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ka(Bn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Bn("p", null, [
              ka(Bn("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ka(Bn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const Qd = window.Vue.resolveDirective, ba = window.Vue.createElementVNode, Zd = window.Vue.withDirectives, gn = window.Vue.unref, xa = window.Vue.withCtx, jt = window.Vue.createVNode, Vr = window.Vue.openBlock, eg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const P$ = window.Vue.createBlock, F$ = { class: "sx-translation-confirmer" }, M$ = { class: "mb-0" }, N$ = { class: "sx-translation-confirmer__article-image flex justify-center" }, U$ = ["src"], I$ = { class: "ma-3" }, z$ = window.Vue.computed, R$ = window.Vue.ref, O$ = window.Vuex.useStore, H$ = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = O$(), { currentSourcePage: n } = qe(), { previousRoute: o } = H(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearURLParameters: u
    } = M(), g = z$(
      () => {
        var f, _;
        return (_ = (f = n.value) == null ? void 0 : f.image) == null ? void 0 : _.source;
      }
    ), { fetchTranslationsByStatus: i } = mi(), c = mh(), d = uc();
    i("draft"), l.value && d(
      s.value,
      a.value,
      r.value
    ), c(s.value, r.value), Sc(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const p = _e(), m = () => {
      u(), p.push({ name: o.value });
    }, h = R$(!1);
    return (f, _) => {
      const w = Qd("i18n"), S = Qd("i18n-html");
      return Vr(), eg("section", F$, [
        jt(gn(T), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: xa(() => [
            jt(gn(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: xa(() => [
                Zd(ba("h5", M$, null, 512), [
                  [w, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            jt(gn(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: xa(() => [
                jt(gn(he), {
                  class: "pa-0",
                  type: "icon",
                  icon: gn(Bs),
                  "icon-size": 20,
                  onClick: m
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ba("div", N$, [
          g.value ? (Vr(), eg("img", {
            key: 0,
            src: g.value
          }, null, 8, U$)) : (Vr(), P$(gn(we), {
            key: 1,
            size: "120",
            icon: gn(Xp),
            "icon-color": f.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        jt(x$),
        jt(_h),
        jt(c$, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (y) => h.value = !0)
        }),
        jt(gn(T), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: xa(() => [
            ba("p", I$, [
              Zd(ba("small", null, null, 512), [
                [S, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        jt(B$, {
          modelValue: h.value,
          "onUpdate:modelValue": _[1] || (_[1] = (y) => h.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const j$ = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: H$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, q$ = window.Vue.resolveComponent, G$ = window.Vue.createVNode, X$ = window.Vue.normalizeClass, W$ = window.Vue.openBlock, K$ = window.Vue.createElementBlock;
function Y$(e, t, n, o, s, a) {
  const r = q$("sx-translation-confirmer");
  return W$(), K$("main", {
    class: X$(["sx-translation-confirmer-view", a.classes])
  }, [
    G$(r)
  ], 2);
}
const J$ = /* @__PURE__ */ Y(j$, [["render", Y$]]);
const Q$ = window.Vue.toDisplayString, tg = window.Vue.unref, Z$ = window.Vue.createVNode, e4 = window.Vue.createTextVNode, t4 = window.Vue.createElementVNode, n4 = window.Vue.openBlock, o4 = window.Vue.createElementBlock, s4 = { class: "sx-section-selector-view-article-item ma-0" }, a4 = ["href"], i4 = window.Codex.CdxIcon, r4 = {
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
    return (t, n) => (n4(), o4("li", s4, [
      t4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        e4(Q$(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        Z$(tg(i4), {
          size: "x-small",
          icon: tg(mc)
        }, null, 8, ["icon"])
      ], 8, a4)
    ]));
  }
};
const l4 = window.Vue.resolveDirective, $a = window.Vue.createElementVNode, Er = window.Vue.withDirectives, Pn = window.Vue.unref, c4 = window.Vue.toDisplayString, Va = window.Vue.withCtx, es = window.Vue.createVNode, u4 = window.Vue.openBlock, d4 = window.Vue.createElementBlock, g4 = { class: "sx-section-selector__header pa-4" }, p4 = { class: "sx-section-selector__header-text ma-0" }, m4 = ["textContent"], h4 = { class: "pt-0 ma-0" }, f4 = { class: "ma-0" }, w4 = window.Codex.CdxButton, _4 = window.Codex.CdxIcon, v4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = je();
    return (n, o) => {
      const s = l4("i18n");
      return u4(), d4("div", g4, [
        es(Pn(T), { class: "ma-0 pb-3" }, {
          default: Va(() => [
            es(Pn(C), null, {
              default: Va(() => {
                var a;
                return [
                  Er($a("h6", p4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  $a("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: c4((a = Pn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, m4)
                ];
              }),
              _: 1
            }),
            es(Pn(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Va(() => [
                es(Pn(w4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Va(() => [
                    es(Pn(_4), { icon: Pn(bo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Er($a("h4", h4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Er($a("p", f4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, S4 = window.Vue.renderList, y4 = window.Vue.Fragment, Dr = window.Vue.openBlock, ng = window.Vue.createElementBlock, C4 = window.Vue.renderSlot, Ea = window.Vue.unref, og = window.Vue.createVNode, sg = window.Vue.withCtx, k4 = window.Vue.createBlock, b4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, x4 = window.Codex.CdxButton, $4 = window.Codex.CdxIcon, vh = {
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
    return (t, n) => (Dr(), ng("ul", b4, [
      (Dr(!0), ng(y4, null, S4(e.sections, (o) => (Dr(), k4(Ea(T), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: sg(() => [
          og(Ea(x4), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: sg(() => [
              C4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              og(Ea($4), { icon: Ea(Hs) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, V4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const E4 = window.Vue.resolveDirective, Da = window.Vue.createElementVNode, Ar = window.Vue.withDirectives, ct = window.Vue.unref, ag = window.Vue.toDisplayString, no = window.Vue.withCtx, Lr = window.Vue.openBlock, ig = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ts = window.Vue.createVNode, D4 = window.Vue.createTextVNode, A4 = window.Vue.createElementBlock, L4 = { class: "sx-section-selector__missing-sections py-2" }, T4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, B4 = ["lang", "dir", "textContent"], rg = window.Vue.computed, P4 = window.Codex.CdxButton, F4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = je(), n = rg(
      () => {
        var s;
        return U.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = rg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = E4("i18n");
      return Lr(), A4("section", L4, [
        Ar(Da("h4", T4, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Lr(), ig(ct(T), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: no(() => [
            ts(ct(C), {
              class: "py-6 justify-center",
              innerHTML: ct(V4)
            }, null, 8, ["innerHTML"]),
            ts(ct(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: no(() => [
                Ar(Da("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            ts(ct(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: no(() => [
                Ar(Da("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            ts(ct(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: no(() => [
                ts(ct(P4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: no(() => [
                    D4(ag(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Lr(), ig(vh, {
          key: 0,
          sections: ct(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: no(({ sourceSection: l }) => {
            var u, g;
            return [
              Da("h5", {
                class: "ma-0",
                lang: (u = ct(t)) == null ? void 0 : u.sourceLanguage,
                dir: ct(U.getDir)((g = ct(t)) == null ? void 0 : g.sourceLanguage),
                textContent: ag(l)
              }, null, 8, B4)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const M4 = window.Vue.resolveDirective, Aa = window.Vue.createElementVNode, N4 = window.Vue.withDirectives, Fn = window.Vue.unref, lg = window.Vue.toDisplayString, U4 = window.Vue.withCtx, I4 = window.Vue.createVNode, z4 = window.Vue.openBlock, R4 = window.Vue.createElementBlock, O4 = { class: "sx-section-selector__present-sections py-2" }, H4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, j4 = { class: "sx-section-selector__present-section-button-content" }, q4 = ["lang", "dir", "textContent"], G4 = ["lang", "dir", "textContent"], X4 = window.Vue.computed, W4 = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = je(), n = X4(
      () => {
        var o;
        return U.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var r;
      const a = M4("i18n");
      return z4(), R4("section", O4, [
        N4(Aa("h4", H4, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        I4(vh, {
          sections: ((r = Fn(t)) == null ? void 0 : r.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (l) => o.$emit("select-section", l))
        }, {
          default: U4(({ sourceSection: l, targetSection: u }) => {
            var g, i, c, d;
            return [
              Aa("div", j4, [
                Aa("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (g = Fn(t)) == null ? void 0 : g.sourceLanguage,
                  dir: Fn(U.getDir)((i = Fn(t)) == null ? void 0 : i.sourceLanguage),
                  textContent: lg(l)
                }, null, 8, q4),
                Aa("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (c = Fn(t)) == null ? void 0 : c.targetLanguage,
                  dir: Fn(U.getDir)((d = Fn(t)) == null ? void 0 : d.targetLanguage),
                  textContent: lg(u)
                }, null, 8, G4)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const qt = window.Vue.createVNode, pn = window.Vue.unref, K4 = window.Vue.resolveDirective, St = window.Vue.createElementVNode, ns = window.Vue.withDirectives, Y4 = window.Vue.renderList, J4 = window.Vue.Fragment, Tr = window.Vue.openBlock, cg = window.Vue.createElementBlock, Q4 = window.Vue.createBlock, ug = window.Vue.toDisplayString, dg = window.Vue.createTextVNode, Br = window.Vue.withCtx, Z4 = { class: "sx-section-selector" }, e3 = { class: "sx-section-selector__body" }, t3 = { class: "py-2" }, n3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, o3 = { class: "ma-0 pa-0" }, s3 = { class: "sx-section-selector__additional-consideration-title" }, a3 = { href: "#" }, i3 = { class: "sx-section-selector__additional-consideration-title" }, r3 = { href: "#" }, Pr = window.Vue.computed, l3 = window.Vuex.useStore, c3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = l3(), { sectionSuggestion: n } = je(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: r
    } = H(t), l = Pr(
      () => {
        var S;
        return j.getPageUrl(o.value, (S = n.value) == null ? void 0 : S.sourceTitle);
      }
    ), u = Pr(
      () => {
        var S;
        return j.getPageUrl(s.value, (S = n.value) == null ? void 0 : S.targetTitle);
      }
    ), g = Pr(() => [
      { path: l.value, autonym: a.value },
      { path: u.value, autonym: r.value }
    ]), i = _e(), { clearURLParameters: c, setSectionURLParam: d } = M(), p = () => {
      c(), i.push({ name: "dashboard" });
    }, m = bc(), { selectPageSectionByTitle: h } = Cc(), { isDesktop: f } = Us(), _ = kc(), w = (S) => {
      if (f.value) {
        _(
          o.value,
          s.value,
          n.value.sourceTitle,
          { sourcesection: S }
        );
        return;
      }
      const y = t.getters["translator/getDraftTranslation"](
        n.value.sourceTitle,
        S,
        o.value,
        s.value
      );
      y ? m(y) : (h(S), d(S), i.push({ name: "sx-content-comparator" }));
    };
    return (S, y) => {
      const k = K4("i18n");
      return Tr(), cg("section", Z4, [
        qt(v4, { onClose: p }),
        St("section", e3, [
          qt(_h),
          qt(F4, {
            onSelectSection: w,
            onClose: p
          }),
          qt(W4, { onSelectSection: w }),
          St("section", t3, [
            ns(St("h4", n3, null, 512), [
              [k, [
                pn(r)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            St("ul", o3, [
              (Tr(!0), cg(J4, null, Y4(g.value, (x, F) => (Tr(), Q4(r4, {
                key: `view-article-item-${F}`,
                path: x.path,
                autonym: x.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          qt(pn(T), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: Br(() => [
              qt(pn(C), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: Br(() => [
                  St("h6", s3, [
                    qt(pn(we), {
                      icon: pn(vw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    dg(" " + ug(S.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  ns(St("p", null, null, 512), [
                    [k, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  ns(St("a", a3, null, 512), [
                    [k, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              qt(pn(C), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: Br(() => [
                  St("h6", i3, [
                    qt(pn(we), {
                      icon: pn(_w),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    dg(" " + ug(S.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  ns(St("p", null, null, 512), [
                    [k, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  ns(St("a", r3, null, 512), [
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
const u3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: c3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, d3 = window.Vue.resolveComponent, g3 = window.Vue.createVNode, p3 = window.Vue.normalizeClass, m3 = window.Vue.openBlock, h3 = window.Vue.createElementBlock;
function f3(e, t, n, o, s, a) {
  const r = d3("sx-section-selector");
  return m3(), h3("main", {
    class: p3(["sx-section-selector-view", a.classes])
  }, [
    g3(r)
  ], 2);
}
const w3 = /* @__PURE__ */ Y(u3, [["render", f3]]), _3 = window.Vue.computed, v3 = window.Vuex.useStore, S3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = H(
    v3()
  ), o = de();
  return _3(() => {
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
const gg = window.Vue.unref, y3 = window.Vue.createVNode, C3 = window.Vue.openBlock, k3 = window.Vue.createElementBlock, b3 = { class: "sx-content-comparator__source-target-selector" }, x3 = window.Vue.watch, $3 = {
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
    const n = e, o = t, s = (r) => o("update:selection", r), a = S3(n);
    return x3(
      () => n.isMappedSection,
      () => {
        a.value.map((r) => r.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (r, l) => (C3(), k3("div", b3, [
      y3(gg(Ts), {
        items: gg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Mn = window.Vue.computed, V3 = window.Vue.ref, xc = () => {
  const e = V3([]), { currentTargetPage: t } = qe(), { sectionSuggestion: n } = je(), { sectionURLParameter: o } = M(), s = Mn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Mn(
    () => {
      var d;
      return (((d = r.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), r = Mn(
    () => {
      var d;
      return (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = W(), u = Mn(() => {
    var d;
    return (d = l.value) == null ? void 0 : d.html;
  }), g = Mn(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), i = Mn(
    () => {
      var d;
      return (d = n.value) == null ? void 0 : d.missingSections.hasOwnProperty(o.value);
    }
  ), c = Mn(
    () => !i.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: c,
    sourceSectionContent: u,
    targetSectionAnchor: a,
    targetSectionContent: g
  };
};
const La = window.Vue.createVNode, E3 = window.Vue.toDisplayString, D3 = window.Vue.createElementVNode, mn = window.Vue.unref, Ta = window.Vue.withCtx, Fr = window.Vue.openBlock, Mr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const A3 = window.Vue.normalizeClass, L3 = ["lang", "dir", "textContent"], pg = window.Vue.ref, Nr = window.Vue.computed, T3 = window.Vue.onMounted, B3 = {
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
    const n = e, o = t, s = pg(!1), { sectionSuggestion: a } = je(), { sectionURLParameter: r } = M(), l = Nr(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: i } = xc(), c = Nr(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${j.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
            lang: a.value.sourceLanguage,
            dir: U.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: d.value,
            lang: a.value.targetLanguage,
            dir: U.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: g.value,
            path: `${d.value}#${i.value}`
          };
      }
    }), d = Nr(
      () => j.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = pg(null);
    return T3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Fr(), Mr(mn(T), {
      ref_key: "contentHeader",
      ref: p,
      class: A3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Ta(() => [
        La($3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": u
        }, null, 8, ["is-mapped-section", "selection"]),
        La(mn(T), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: Ta(() => [
            La(mn(C), null, {
              default: Ta(() => [
                D3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: E3(c.value.title)
                }, null, 8, L3)
              ]),
              _: 1
            }),
            La(mn(C), { shrink: "" }, {
              default: Ta(() => [
                s.value ? (Fr(), Mr(mn(he), {
                  key: 0,
                  icon: mn(ai),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Fr(), Mr(mn(he), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: mn(qp),
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
}, os = window.Vue.unref, mg = window.Vue.createVNode, P3 = window.Vue.withCtx, F3 = window.Vue.openBlock, M3 = window.Vue.createBlock, N3 = window.Vue.computed, U3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = M(), o = N3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Cc(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (F3(), M3(os(C), {
      class: "justify-end",
      align: "center"
    }, {
      default: P3(() => [
        mg(os(he), {
          class: "pa-0 pe-1",
          type: "icon",
          icon: os(hw),
          onClick: a
        }, null, 8, ["icon"]),
        mg(os(he), {
          class: "pa-0 ps-1",
          type: "icon",
          icon: os(pw),
          onClick: r
        }, null, 8, ["icon"])
      ]),
      _: 1
    }));
  }
};
const hg = window.Vue.toDisplayString, I3 = window.Vue.resolveDirective, Ur = window.Vue.withDirectives, oo = window.Vue.openBlock, Ba = window.Vue.createElementBlock, z3 = window.Vue.createCommentVNode, R3 = window.Vue.createTextVNode, fg = window.Vue.createElementVNode, O3 = window.Vue.normalizeClass, Nn = window.Vue.unref, Ir = window.Vue.withCtx, zr = window.Vue.createVNode, wg = window.Vue.createBlock, H3 = { class: "sx-content-comparator-header__mapped-section" }, j3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, q3 = { key: 0 }, G3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, X3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, _g = window.Vue.computed, W3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: kn,
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
    const n = de(), o = e, s = t, a = _g(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), r = _g(
      () => n.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        U.getAutonym(o.suggestion.targetLanguage)
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
          (g) => g !== o.targetSectionTitle
        )
      );
    };
    return (g, i) => {
      const c = I3("i18n");
      return oo(), Ba("div", H3, [
        zr(Nn(T), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Ir(() => [
            zr(Nn(C), { grow: "" }, {
              default: Ir(() => [
                fg("h6", j3, [
                  R3(hg(r.value) + " ", 1),
                  a.value ? Ur((oo(), Ba("span", q3, null, 512)), [
                    [c, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : z3("", !0)
                ]),
                fg("h6", {
                  class: O3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, hg(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            zr(Nn(C), { shrink: "" }, {
              default: Ir(() => [
                a.value ? (oo(), wg(Nn(he), {
                  key: 1,
                  class: "pa-0",
                  icon: Nn(Cw),
                  type: "icon",
                  onClick: u
                }, null, 8, ["icon"])) : (oo(), wg(Nn(he), {
                  key: 0,
                  class: "pa-0",
                  icon: Nn(Hp),
                  type: "icon",
                  onClick: l
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? Ur((oo(), Ba("p", X3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Ur((oo(), Ba("p", G3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const ie = window.Vue.unref, Gt = window.Vue.createVNode, vg = window.Vue.toDisplayString, ks = window.Vue.createElementVNode, so = window.Vue.withCtx, K3 = window.Vue.resolveDirective, Sg = window.Vue.withDirectives, Rr = window.Vue.openBlock, yg = window.Vue.createBlock, Cg = window.Vue.createCommentVNode, Y3 = window.Vue.createElementBlock, J3 = { class: "sx-content-comparator__header pa-4" }, Q3 = ["lang", "dir"], Z3 = ["lang", "dir"], eV = /* @__PURE__ */ ks("br", null, null, -1), Pa = window.Vue.computed, tV = {
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
    const { sectionURLParameter: t } = M(), { sourceSection: n } = W(), { sectionSuggestion: o } = je(), s = Pa(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.missingSections.hasOwnProperty(t.value);
      }
    ), a = Pa(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: r } = xc(), l = Pa(() => {
      var g;
      return (g = n.value) == null ? void 0 : g.html;
    }), u = Pa(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (g, i) => {
      const c = K3("i18n");
      return Rr(), Y3("div", J3, [
        Gt(ie(he), {
          class: "py-2 pa-0",
          icon: ie(fw),
          label: g.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (d) => g.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Gt(ie(T), { class: "my-1 py-2 mx-0" }, {
          default: so(() => [
            Gt(ie(C), { grow: "" }, {
              default: so(() => [
                ks("h4", {
                  class: "pa-0 sx-content-comparator-header__article-title",
                  lang: ie(o).sourceLanguage,
                  dir: ie(U.getDir)(ie(o).sourceLanguage)
                }, vg(ie(o).sourceTitle), 9, Q3),
                ks("h2", {
                  class: "sx-content-comparator-header__section-title pa-0 ma-0",
                  lang: ie(o).sourceLanguage,
                  dir: ie(U.getDir)(ie(o).sourceLanguage)
                }, vg(ie(t)), 9, Z3)
              ]),
              _: 1
            }),
            Gt(U3, {
              cols: "2",
              "section-source-titles": u.value
            }, null, 8, ["section-source-titles"]),
            Gt(ie(C), {
              cols: "12",
              mobile: "12",
              tablet: "4",
              class: "py-2 mb-1"
            }, {
              default: so(() => [
                Gt(ie(he), {
                  icon: ie(ai),
                  progressive: "",
                  label: g.$i18n("cx-sx-content-comparator-translation-section-button-label"),
                  disabled: !l.value,
                  onClick: i[1] || (i[1] = (d) => g.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        s.value ? (Rr(), yg(ie(T), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: so(() => [
            Gt(ie(C), {
              shrink: "",
              class: "pe-2"
            }, {
              default: so(() => [
                Gt(ie(we), { icon: ie(Sw) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Gt(ie(C), { class: "ma-0" }, {
              default: so(() => [
                Sg(ks("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                eV,
                Sg(ks("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Cg("", !0),
        a.value ? (Rr(), yg(W3, {
          key: 1,
          suggestion: ie(o),
          "target-section-title": ie(r),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": i[2] || (i[2] = (d) => g.$emit("update:discardedSections", d))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Cg("", !0)
      ]);
    };
  }
};
const kg = window.Vue.toDisplayString, nV = window.Vue.createElementVNode, bg = window.Vue.openBlock, xg = window.Vue.createElementBlock, oV = window.Vue.createCommentVNode, sV = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, aV = ["textContent"], iV = ["textContent"], Sh = {
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
    return (t, n) => (bg(), xg("section", sV, [
      nV("h5", {
        textContent: kg(e.placeholderTitle)
      }, null, 8, aV),
      e.placeholderSubtitle ? (bg(), xg("p", {
        key: 0,
        textContent: kg(e.placeholderSubtitle)
      }, null, 8, iV)) : oV("", !0)
    ]));
  }
}, rV = window.Vue.computed, lV = window.Vue.createApp, cV = window.Vuex.useStore, uV = () => {
  const e = cV(), { sectionSuggestion: t } = je(), { currentTargetPage: n } = qe(), o = de(), s = () => lV(
    Sh,
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
      (g) => g.parentNode.removeChild(g)
    );
  };
  return rV(() => {
    var i;
    const l = document.createElement("div");
    l.innerHTML = (i = n.value) == null ? void 0 : i.content, r(l);
    const u = s(), g = a(
      t.value
    );
    if (g) {
      const c = Array.from(
        l.querySelectorAll("h2")
      ).filter((d) => d.textContent.match(g));
      if (c && c.length) {
        const d = c[0].parentNode;
        d.parentNode.insertBefore(
          u,
          d
        );
      }
    } else
      l.appendChild(u);
    return l.innerHTML;
  });
};
const $e = window.Vue.unref, dV = window.Vue.isRef, Or = window.Vue.createVNode, ao = window.Vue.openBlock, $g = window.Vue.createBlock, Vg = window.Vue.createCommentVNode, Fa = window.Vue.createElementVNode, Hr = window.Vue.Fragment, Ma = window.Vue.createElementBlock, gV = { class: "sx-content-comparator" }, pV = { class: "sx-content-comparator__source-content" }, mV = ["lang", "dir", "innerHTML"], hV = ["lang", "dir", "innerHTML"], fV = ["innerHTML"], wV = window.Vue.ref, _V = window.Vue.computed, vV = window.Vue.watch, SV = window.Vuex.useStore, yV = {
  __name: "SXContentComparator",
  setup(e) {
    const t = SV(), n = _e(), o = wV("source_section"), { logDashboardTranslationStartEvent: s } = fc(), a = () => n.push({ name: "sx-section-selector" }), r = () => {
      s(), fh() || !t.getters["translator/userHasSectionTranslations"] ? n.push({ name: "sx-quick-tutorial" }) : n.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: l,
      discardedSections: u,
      isCurrentSectionMapped: g,
      sourceSectionContent: i,
      targetSectionContent: c
    } = xc(), d = uV(), { sectionSuggestion: p } = je(), { sourceLanguage: m, targetLanguage: h } = H(t), f = _V(() => p.value.targetTitle), _ = yc();
    return vV(
      f,
      () => _(
        h.value,
        m.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, S) => (ao(), Ma("section", gV, [
      Or(tV, {
        "discarded-sections": $e(u),
        "onUpdate:discardedSections": S[0] || (S[0] = (y) => dV(u) ? u.value = y : null),
        onTranslationButtonClicked: r,
        onClose: a
      }, null, 8, ["discarded-sections"]),
      Or(B3, {
        "source-vs-target-selection": o.value,
        "onUpdate:sourceVsTargetSelection": S[1] || (S[1] = (y) => o.value = y),
        "is-mapped-section": $e(g),
        onTranslationButtonClicked: r
      }, null, 8, ["source-vs-target-selection", "is-mapped-section"]),
      Fa("section", pV, [
        o.value === "source_section" ? (ao(), Ma(Hr, { key: 0 }, [
          $e(i) ? Vg("", !0) : (ao(), $g($e(Re), { key: 0 })),
          Fa("section", {
            lang: $e(m),
            dir: $e(U.getDir)($e(m)),
            class: "pt-2 px-4",
            innerHTML: $e(i)
          }, null, 8, mV)
        ], 64)) : o.value === "target_article" ? (ao(), Ma(Hr, { key: 1 }, [
          $e(d) ? Vg("", !0) : (ao(), $g($e(Re), { key: 0 })),
          Fa("article", {
            lang: $e(h),
            dir: $e(U.getDir)($e(h)),
            class: "px-4",
            innerHTML: $e(d)
          }, null, 8, hV)
        ], 64)) : (ao(), Ma(Hr, { key: 2 }, [
          Fa("section", {
            class: "pa-4",
            innerHTML: $e(c)
          }, null, 8, fV),
          Or(Sh, {
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
const CV = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: yV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, kV = window.Vue.resolveComponent, bV = window.Vue.createVNode, xV = window.Vue.normalizeClass, $V = window.Vue.openBlock, VV = window.Vue.createElementBlock;
function EV(e, t, n, o, s, a) {
  const r = kV("sx-content-comparator");
  return $V(), VV("main", {
    class: xV(["sx-content-comparator-view", a.classes])
  }, [
    bV(r)
  ], 2);
}
const DV = /* @__PURE__ */ Y(CV, [["render", EV]]);
const AV = window.Vue.resolveDirective, ss = window.Vue.createElementVNode, Eg = window.Vue.withDirectives, Na = window.Vue.unref, jr = window.Vue.createVNode, Dg = window.Vue.toDisplayString, Ag = window.Vue.createTextVNode, as = window.Vue.withCtx, LV = window.Vue.openBlock, TV = window.Vue.createBlock, BV = { class: "mw-ui-dialog__header px-4 py-3" }, PV = { class: "mw-ui-dialog__header-title" }, FV = { class: "pa-4" }, MV = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Lg = window.Codex.CdxButton, NV = {
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
      const u = AV("i18n");
      return LV(), TV(Na(nt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: as(() => [
          ss("div", BV, [
            Eg(ss("span", PV, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: as(() => [
          ss("div", MV, [
            jr(Na(Lg), {
              weight: "quiet",
              onClick: s
            }, {
              default: as(() => [
                Ag(Dg(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            jr(Na(Lg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: as(() => [
                Ag(Dg(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: as(() => [
          jr(Na(si)),
          ss("div", FV, [
            Eg(ss("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, UV = window.Vuex.useStore, $c = () => {
  const e = UV(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = en(), o = (l, u, g) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[u] = g;
      return;
    }
    const i = t.value.getContentTranslationUnitById(l);
    i instanceof Ie ? i.blockTemplateProposedTranslations[u] = g : i instanceof yn && i.addProposedTranslation(u, g);
  }, s = (l, u) => b(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: i } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](g, i, l))
      return "";
    try {
      const d = yield e.dispatch("application/getCXServerToken");
      return yield tt.fetchSegmentTranslation(
        g,
        i,
        l,
        u,
        d
      );
    } catch (d) {
      return mw.log.error("Error while translating segment", d), "";
    }
  }), a = (l, u) => b(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: i } = e.state.application;
    if (t.value.hasProposedTranslationByTranslationUnitId(
      l,
      u
    ))
      return;
    let c = t.value.getOriginalContentByTranslationUnitId(l);
    const d = t.value.getContentTranslationUnitById(l);
    let p;
    if (e.commit("application/addMtRequestsPending", l), p = yield s(u, c), !p) {
      e.commit("application/removeMtRequestsPending", l);
      return;
    }
    d instanceof Ie && (d.setBlockTemplateAdaptationInfoByHtml(
      u,
      p
    ), p = (yield Dv(
      p,
      n(i, g),
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
      const { sourceLanguage: l, targetLanguage: u } = e.state.application, g = e.getters["mediawiki/getSupportedMTProviders"](
        l,
        u
      ), { selectedTranslationUnitId: i } = t.value;
      g.forEach(
        (c) => a(i, c)
      );
    }
  };
}, IV = window.Vuex.useStore, zV = () => {
  const { sourceSection: e } = W(), t = IV(), { translateTranslationUnitById: n } = $c();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const RV = window.Vue.resolveDirective, Qe = window.Vue.createElementVNode, Ua = window.Vue.withDirectives, Fe = window.Vue.unref, qr = window.Vue.createVNode, hn = window.Vue.withCtx, OV = window.Vue.renderList, HV = window.Vue.Fragment, Gr = window.Vue.openBlock, jV = window.Vue.createElementBlock, qV = window.Vue.toDisplayString, Tg = window.Vue.createBlock, GV = window.Vue.createCommentVNode, XV = { class: "mw-ui-dialog__header pa-4" }, WV = { class: "row ma-0 py-2" }, KV = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, YV = { class: "mb-0" }, JV = { class: "col shrink justify-center" }, QV = { class: "pb-2 mb-0" }, ZV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, e5 = ["dir", "lang", "innerHTML"], t5 = ["textContent"], n5 = ["innerHTML"], o5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, s5 = /* @__PURE__ */ Qe("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), Xr = window.Vue.computed, a5 = window.Vuex.useStore, i5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = K.EMPTY_TEXT_PROVIDER_KEY, s = K.ORIGINAL_TEXT_PROVIDER_KEY, a = a5(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = W(), { sourceLanguage: g, targetLanguage: i } = H(a), c = Xr(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        i.value
      )
    ), d = Xr(() => {
      const w = [s, o];
      return c.value.filter(
        (S) => !w.includes(S)
      );
    }), p = Xr(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = zV(), h = (w) => {
      m(w), _();
    }, f = K.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, S) => {
      const y = RV("i18n");
      return e.active ? (Gr(), Tg(Fe(nt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: hn(() => [
          Qe("div", XV, [
            Qe("div", WV, [
              Qe("div", KV, [
                Ua(Qe("h4", YV, null, 512), [
                  [y, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              Qe("div", JV, [
                qr(Fe(he), {
                  type: "icon",
                  icon: Fe(Bs),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            Ua(Qe("h6", QV, null, 512), [
              [y, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: hn(() => [
          qr(Fe(ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (k) => h(Fe(s)))
          }, {
            header: hn(() => [
              Ua(Qe("h5", ZV, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: hn(() => [
              Qe("p", {
                dir: Fe(U.getDir)(Fe(g)),
                lang: Fe(g),
                innerHTML: p.value[Fe(s)]
              }, null, 8, e5)
            ]),
            _: 1
          }),
          (Gr(!0), jV(HV, null, OV(d.value, (k) => (Gr(), Tg(Fe(ze), {
            key: k,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (x) => h(k)
          }, {
            header: hn(() => [
              Qe("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: qV(Fe(f)(k))
              }, null, 8, t5)
            ]),
            default: hn(() => [
              Qe("p", {
                innerHTML: p.value[k]
              }, null, 8, n5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          qr(Fe(ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (k) => h(Fe(o)))
          }, {
            header: hn(() => [
              Ua(Qe("h5", o5, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: hn(() => [
              s5
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : GV("", !0);
    };
  }
}, r5 = window.Vuex.useStore, xo = () => {
  const { sourceSection: e } = W(), t = r5(), { translateTranslationUnitById: n } = $c(), { currentMTProvider: o } = H(t), s = (l) => b(void 0, null, function* () {
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
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: u } = e.value, g = l - 1;
      let i = 0;
      return g > -1 && (i = u[g].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const l5 = window.Vue.toDisplayString, Wr = window.Vue.createElementVNode, Kr = window.Vue.unref, c5 = window.Vue.createVNode, u5 = window.Vue.normalizeClass, d5 = window.Vue.withCtx, g5 = window.Vue.openBlock, p5 = window.Vue.createBlock, m5 = ["href"], h5 = ["textContent"], f5 = ["innerHTML"], io = window.Vue.computed, w5 = window.Vuex.useStore, Bg = "sx-sentence-selector__section-title", _5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = w5(), { sourceSection: n, isSectionTitleSelected: o } = W(), { currentSourcePage: s } = qe(), { sourceLanguage: a } = H(t), r = io(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), l = io(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), u = io(
      () => j.getPageUrl(a.value, r.value)
    ), g = io(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = io(
      () => g.value ? "translated" : "selected"
    ), c = io(() => {
      const m = [Bg];
      return o.value && m.push(`${Bg}--${i.value}`), m;
    }), { selectTranslationUnitById: d } = xo(), p = () => d(0);
    return (m, h) => (g5(), p5(Kr(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: d5(() => [
        Wr("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Wr("strong", {
            textContent: l5(r.value)
          }, null, 8, h5),
          c5(Kr(we), {
            icon: Kr(qp),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, m5),
        Wr("h2", {
          class: u5(["pa-0 ma-0", c.value]),
          onClick: p,
          innerHTML: l.value
        }, null, 10, f5)
      ]),
      _: 1
    }));
  }
};
const yt = window.Vue.unref, is = window.Vue.createVNode, Ia = window.Vue.withCtx, Pg = window.Vue.toDisplayString, Fg = window.Vue.createTextVNode, v5 = window.Vue.openBlock, S5 = window.Vue.createBlock, y5 = window.Vue.computed, Yr = window.Codex.CdxButton, Mg = window.Codex.CdxIcon, yh = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = W(), s = y5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (v5(), S5(yt(T), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ia(() => [
        is(yt(Yr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: yt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Ia(() => [
            is(yt(Mg), {
              class: "me-1",
              icon: yt(hc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        is(yt(Yr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !yt(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Ia(() => [
            Fg(Pg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        is(yt(Yr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Ia(() => [
            Fg(Pg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            is(yt(Mg), {
              class: "ms-1",
              size: "small",
              icon: yt(Hs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Un = window.Vue.unref, C5 = window.Vue.toDisplayString, rs = window.Vue.createVNode, za = window.Vue.withCtx, k5 = window.Vue.openBlock, b5 = window.Vue.createBlock, Jr = window.Vue.computed, x5 = window.Vuex.useStore, $5 = window.Codex.CdxButton, V5 = window.Codex.CdxIcon, E5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = x5(), n = Jr(() => t.state.application.currentMTProvider), o = de(), s = Jr(() => ({
      [K.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [K.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Jr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        K.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (k5(), b5(Un(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: za(() => [
        rs(Un(T), { class: "ma-0 ps-5 pb-4" }, {
          default: za(() => [
            rs(Un(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: C5(a.value)
            }, null, 8, ["textContent"]),
            rs(Un(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: za(() => [
                rs(Un($5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: za(() => [
                    rs(Un(V5), {
                      class: "pa-0",
                      icon: Un(pc)
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
const ut = window.Vue.unref, fn = window.Vue.createVNode, D5 = window.Vue.resolveDirective, Ng = window.Vue.createElementVNode, A5 = window.Vue.withDirectives, Ug = window.Vue.toDisplayString, Ig = window.Vue.createTextVNode, ls = window.Vue.withCtx, L5 = window.Vue.openBlock, T5 = window.Vue.createElementBlock, B5 = { class: "mt-retry-body pb-5" }, P5 = { class: "retry-body__message" }, zg = window.Codex.CdxButton, Qr = window.Codex.CdxIcon, F5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = D5("i18n");
      return L5(), T5("div", B5, [
        Ng("div", P5, [
          fn(ut(Qr), {
            class: "me-2",
            icon: ut(Jm)
          }, null, 8, ["icon"]),
          A5(Ng("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        fn(ut(T), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: ls(() => [
            fn(ut(C), { cols: "6" }, {
              default: ls(() => [
                fn(ut(zg), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: ls(() => [
                    fn(ut(Qr), {
                      class: "me-1",
                      icon: ut(oh)
                    }, null, 8, ["icon"]),
                    Ig(" " + Ug(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            fn(ut(C), { cols: "6" }, {
              default: ls(() => [
                fn(ut(zg), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: ls(() => [
                    fn(ut(Qr), {
                      class: "me-1",
                      icon: ut(_k)
                    }, null, 8, ["icon"]),
                    Ig(" " + Ug(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const ro = window.Vue.createVNode, Me = window.Vue.unref, cs = window.Vue.openBlock, M5 = window.Vue.createElementBlock, N5 = window.Vue.createCommentVNode, Ra = window.Vue.createBlock, U5 = window.Vue.normalizeClass, I5 = window.Vue.normalizeStyle, us = window.Vue.withCtx, z5 = window.Vue.toDisplayString, R5 = window.Vue.createTextVNode, O5 = window.Vue.normalizeProps, H5 = window.Vue.guardReactiveProps, j5 = ["lang", "dir", "innerHTML"], Zr = window.Vue.ref, q5 = window.Vue.onMounted, G5 = window.Vue.onBeforeUnmount, el = window.Vue.computed, X5 = window.Vue.nextTick, W5 = window.Vuex.useStore, K5 = window.Codex.CdxButton, Y5 = window.Codex.CdxIcon, J5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Zr(0), n = Zr(null), o = Zr(null), s = W5(), { currentMTProvider: a, targetLanguage: r } = H(s), { sourceSection: l, currentProposedTranslation: u } = W(), g = el(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = el(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = el(
      () => !!u.value || a.value === K.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    q5(() => b(this, null, function* () {
      yield X5(), d(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), G5(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => d());
    return (m, h) => (cs(), Ra(Me(ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: us(() => [
        ro(Me(T), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: us(() => [
            ro(E5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            ro(Me(C), {
              class: U5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && g.value
              }]),
              style: I5(c.value ? i.value : null)
            }, {
              default: us(() => [
                c.value ? (cs(), M5("section", {
                  key: 0,
                  lang: Me(r),
                  dir: Me(U.getDir)(Me(r)),
                  innerHTML: Me(u)
                }, null, 8, j5)) : g.value ? (cs(), Ra(Me(Re), { key: 1 })) : (cs(), Ra(F5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            ro(Me(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: us(() => [
                c.value || g.value ? (cs(), Ra(Me(K5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Me(u)))
                }, {
                  default: us(() => [
                    ro(Me(Y5), {
                      class: "me-1",
                      icon: Me(gc)
                    }, null, 8, ["icon"]),
                    R5(" " + z5(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : N5("", !0),
                ro(yh, O5(H5(m.$attrs)), null, 16)
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
}, Q5 = window.Vue.computed, Z5 = (e) => Q5(() => {
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
const eE = window.Vue.unref, tE = window.Vue.normalizeClass, nE = window.Vue.openBlock, oE = window.Vue.createElementBlock, sE = ["innerHTML"], aE = window.Vue.onMounted, iE = window.Vue.ref, rE = window.Vue.computed, lE = {
  __name: "SubSection",
  props: {
    subSection: {
      type: Ie,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = iE(null), a = Z5(n.subSection);
    aE(() => {
      s.value.addEventListener("click", (g) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const c = g.composedPath().find(
            (d) => d instanceof Element && d.classList.contains("cx-segment")
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
    const { selectTranslationUnitById: r } = xo(), l = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      r(g.id);
    }, u = rE(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, i) => (nE(), oE("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: tE(["sx-sentence-selector__subsection", u.value]),
      innerHTML: eE(a)
    }, null, 10, sE));
  }
};
const Rg = window.Vue.unref, Og = window.Vue.createVNode, Hg = window.Vue.normalizeStyle, cE = window.Vue.openBlock, uE = window.Vue.createElementBlock, jg = window.Vue.computed, Ch = {
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
    const t = e, n = jg(() => ({ "--size": t.size })), o = jg(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Gp : ei
    );
    return (s, a) => (cE(), uE("div", {
      class: "block-template-status-indicator",
      style: Hg(n.value)
    }, [
      Og(Rg(l1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Og(Rg(we), {
        icon: o.value,
        size: e.size / 2,
        style: Hg({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, ds = window.Vue.openBlock, Oa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Xt = window.Vue.unref, lo = window.Vue.withCtx, gs = window.Vue.createVNode, tl = window.Vue.toDisplayString, nl = window.Vue.createElementVNode, dE = window.Vue.renderList, gE = window.Vue.Fragment, pE = window.Vue.createElementBlock, mE = { class: "pa-4" }, hE = ["textContent"], fE = ["textContent"], wE = window.Vuex.useStore, Ha = window.Vue.computed, _E = {
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
    const t = e, { targetLanguageAutonym: n } = H(wE()), o = Ha(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = de(), a = Ha(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = Ha(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = Ha(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: $w,
          color: Ze.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Bs,
          color: Ze.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: ei,
          color: Ze.blue600
        });
      else {
        let g;
        t.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : g = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: g,
          icon: ei,
          color: Ze.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: ai,
        color: Ze.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: lw,
        color: Ze.gray500
      }), u;
    });
    return (u, g) => (ds(), Oa(Xt(nt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (i) => u.$emit("update:active", i))
    }, {
      header: lo(() => [
        gs(Xt(T), {
          justify: "center",
          class: "mt-4"
        }, {
          default: lo(() => [
            gs(Xt(C), { shrink: "" }, {
              default: lo(() => [
                e.targetTemplateExists ? (ds(), Oa(Ch, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ds(), Oa(Xt(we), {
                  key: 1,
                  icon: Xt(uw)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: lo(() => [
        nl("div", mE, [
          nl("h3", {
            textContent: tl(a.value)
          }, null, 8, hE),
          nl("p", {
            class: "mt-6 text-small",
            textContent: tl(r.value)
          }, null, 8, fE),
          (ds(!0), pE(gE, null, dE(l.value, (i, c) => (ds(), Oa(Xt(T), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: lo(() => [
              gs(Xt(C), { shrink: "" }, {
                default: lo(() => [
                  gs(Xt(we), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              gs(Xt(C), {
                textContent: tl(i.text)
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
const me = window.Vue.unref, ke = window.Vue.createVNode, Ct = window.Vue.withCtx, ol = window.Vue.toDisplayString, qg = window.Vue.createTextVNode, vE = window.Vue.resolveDirective, Gg = window.Vue.withDirectives, Xg = window.Vue.createElementVNode, SE = window.Vue.normalizeClass, ja = window.Vue.openBlock, Wg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Kg = window.Vue.createBlock, yE = window.Vue.normalizeProps, CE = window.Vue.guardReactiveProps, kE = { class: "block-template-adaptation-card__container pa-4" }, bE = ["textContent"], xE = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, De = window.Vue.computed, $E = window.Vue.ref, VE = window.Vuex.useStore, Yg = window.Codex.CdxButton, Jg = window.Codex.CdxIcon, EE = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = VE(), { targetLanguageAutonym: n, currentMTProvider: o } = H(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = W(), r = De(() => {
      var P;
      return ((P = s.value) == null ? void 0 : P.blockTemplateTranslatedContent) || a.value;
    }), l = De(
      () => {
        var E;
        return (E = s.value) == null ? void 0 : E.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = De(
      () => {
        var E;
        return !((E = t.state.application.mtRequestsPending) != null && E.includes(
          s.value.id
        ));
      }
    ), g = de(), i = De(
      // Strip HTML comments and return
      () => {
        var E, P;
        return ((P = (E = s.value) == null ? void 0 : E.sourceBlockTemplateName) == null ? void 0 : P.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = De(
      () => {
        var E, P;
        return (P = (E = s.value) == null ? void 0 : E.blockTemplateAdaptationInfo) == null ? void 0 : P[o.value];
      }
    ), d = De(
      () => {
        var E, P;
        return ((E = c.value) == null ? void 0 : E.adapted) || !!((P = c.value) != null && P.partial);
      }
    ), p = De(() => c.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), m = De(() => c.value ? d.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = De(
      () => {
        var E;
        return Object.keys(((E = s.value) == null ? void 0 : E.sourceTemplateParams) || {}).length;
      }
    ), f = De(() => {
      var P;
      const E = (P = s.value) == null ? void 0 : P.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(E || {});
    }), _ = De(() => f.value.length), w = De(() => {
      const E = x.value;
      return h.value + E === 0 ? 100 : _.value / (h.value + E) * 100 || 0;
    }), S = $E(!1), y = () => {
      S.value = !0;
    }, k = (E) => E.filter((P) => !f.value.includes(P)), x = De(() => {
      var P;
      const E = ((P = c.value) == null ? void 0 : P.mandatoryTargetParams) || [];
      return k(E).length;
    }), F = De(() => {
      var P;
      const E = ((P = c.value) == null ? void 0 : P.optionalTargetParams) || [];
      return k(E).length;
    });
    return (E, P) => {
      const J = vE("i18n");
      return ja(), Kg(me(ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Ct(() => [
          Xg("div", kE, [
            ke(me(T), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Ct(() => [
                ke(me(C), { shrink: "" }, {
                  default: Ct(() => [
                    ke(me(Jg), {
                      icon: me(vk),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ke(me(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Ct(() => [
                    qg(ol(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (ja(), Wg("div", {
              key: 0,
              class: SE(["pa-4 mb-4", p.value])
            }, [
              ke(me(T), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Ct(() => [
                  Gg(ke(me(C), { tag: "h5" }, null, 512), [
                    [J, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ke(me(C), { shrink: "" }, {
                    default: Ct(() => [
                      ke(Ch, {
                        percentage: w.value,
                        size: 20,
                        "is-template-adapted": d.value,
                        "stroke-width": 2,
                        onClick: y
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Xg("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: ol(l.value)
              }, null, 8, bE),
              ke(me(Yg), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: P[0] || (P[0] = (B) => E.$emit("edit-translation", r.value))
              }, {
                default: Ct(() => [
                  qg(ol(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (ja(), Wg("div", xE, [
              ke(me(T), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Ct(() => [
                  Gg(ke(me(C), { tag: "h5" }, null, 512), [
                    [J, [
                      me(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ke(me(C), { shrink: "" }, {
                    default: Ct(() => [
                      ke(me(Yg), {
                        weight: "quiet",
                        "aria-label": E.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Ct(() => [
                          ke(me(Jg), {
                            icon: me(wk),
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
            ])) : (ja(), Kg(me(Re), { key: 2 }))
          ]),
          ke(yh, yE(CE(E.$attrs)), null, 16),
          ke(_E, {
            active: S.value,
            "onUpdate:active": P[1] || (P[1] = (B) => S.value = B),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": x.value,
            "optional-missing-params-count": F.value,
            "is-template-adapted": d.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const DE = window.Vue.unref, AE = window.Vue.createVNode, LE = window.Vue.openBlock, TE = window.Vue.createElementBlock, BE = { class: "translated-segment-card-header" }, PE = window.Vue.computed, FE = {
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
    const n = t, { isSectionTitleSelected: o } = W(), s = de(), a = PE(() => [
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
    return (l, u) => (LE(), TE("div", BE, [
      AE(DE(Ts), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const wn = window.Vue.unref, qa = window.Vue.createVNode, sl = window.Vue.withCtx, ME = window.Vue.openBlock, NE = window.Vue.createBlock, UE = window.Vue.computed, Qg = window.Codex.CdxButton, Zg = window.Codex.CdxIcon, IE = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = W(), o = UE(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (ME(), NE(wn(T), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: sl(() => [
        qa(wn(Qg), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: wn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: sl(() => [
            qa(wn(Zg), { icon: wn(hc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        qa(wn(Qg), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: sl(() => [
            qa(wn(Zg), { icon: wn(Hs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const zE = window.Vue.useCssVars, be = window.Vue.createVNode, ep = window.Vue.resolveDirective, RE = window.Vue.createElementVNode, al = window.Vue.withDirectives, re = window.Vue.unref, OE = window.Vue.normalizeStyle, Ga = window.Vue.openBlock, tp = window.Vue.createElementBlock, HE = window.Vue.createCommentVNode, jE = window.Vue.normalizeClass, Ye = window.Vue.withCtx, qE = window.Vue.toDisplayString, GE = window.Vue.createTextVNode, np = window.Vue.createBlock, XE = window.Vue.normalizeProps, WE = window.Vue.guardReactiveProps, Wt = window.Vue.computed, KE = window.Vue.ref, YE = window.Vue.inject, JE = window.Vuex.useStore, QE = window.Codex.CdxButton, il = window.Codex.CdxIcon, ZE = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    zE((w) => ({
      "4929555c": _.value
    }));
    const t = KE("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = W(), { targetLanguage: a } = H(JE()), r = Wt(() => t.value === "sentence"), l = Wt(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), u = Wt(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), g = YE("colors"), i = g.gray200, c = g.red600, d = Wt(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = Wt(
      () => $t.calculateScore(
        d.value,
        u.value,
        a.value
      )
    ), m = Wt(
      () => $t.getScoreStatus(p.value)
    ), h = Wt(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = Wt(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), _ = Wt(
      () => f.value[m.value]
    );
    return (w, S) => {
      const y = ep("i18n"), k = ep("i18n-html");
      return Ga(), np(re(ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ye(() => [
          be(re(T), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ye(() => [
              be(FE, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (x) => t.value = x)
              }, null, 8, ["selection"]),
              be(re(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ye(() => [
                  be(re(T), { class: "ma-0" }, {
                    default: Ye(() => [
                      be(re(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ye(() => [
                          al(RE("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? al((Ga(), tp("p", {
                            key: 0,
                            style: OE({ color: re(c) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : al((Ga(), tp("p", {
                            key: 1,
                            class: jE(h.value)
                          }, null, 2)), [
                            [k, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      be(re(C), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ye(() => [
                          be(re(T), { class: "ma-0 ms-2" }, {
                            default: Ye(() => [
                              be(re(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ye(() => [
                                  be(re(il), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: re(Ck)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              be(re(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ye(() => [
                                  be(re(Wp), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: re(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              be(re(C), { shrink: "" }, {
                                default: Ye(() => [
                                  be(re(il), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: re(Sk)
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
                  r.value ? (Ga(), np(re(QE), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (x) => w.$emit("edit-translation", d.value))
                  }, {
                    default: Ye(() => [
                      be(re(il), {
                        class: "me-1",
                        icon: re(gc)
                      }, null, 8, ["icon"]),
                      GE(" " + qE(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : HE("", !0)
                ]),
                _: 1
              }),
              be(re(C), { class: "translated-segment-card__actions" }, {
                default: Ye(() => [
                  be(IE, XE(WE(w.$attrs)), null, 16)
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
}, eD = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = W(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = xo(), { currentTranslation: s } = tn();
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
}, kh = window.Vuex.useStore, tD = () => {
  const e = kh(), { sourceLanguage: t, targetLanguage: n } = H(e);
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield ui.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, nD = () => {
  const e = kh(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = H(e), s = tD();
  return () => b(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = K.getStorageKey(
        n.value,
        o.value
      ), l = mw.storage.get(r) || a[0];
      e.commit("application/setCurrentMTProvider", l);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, oD = window.Vue.computed, sD = (e) => {
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
}, aD = () => {
  const { selectedContentTranslationUnit: e } = W(), t = oD(
    () => e.value instanceof Ie
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && sD(o);
  };
}, iD = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !K.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, rD = window.Vue.computed, bh = () => {
  const { currentTranslation: e } = tn(), { currentSourcePage: t } = qe();
  return rD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, lD = window.Vuex.useStore, Vc = () => {
  const e = lD(), { sourceSection: t, targetPageTitleForPublishing: n } = W(), { pageURLParameter: o } = M(), { sourceLanguage: s, targetLanguage: a } = H(e), r = bh();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(g);
    i.forEach(
      (p) => iD(p, u)
    );
    const c = t.value.getTranslationProgress(a), d = e.getters["application/isSandboxTarget"];
    return tt.saveTranslation({
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
      isSandbox: d,
      progress: c
    });
  };
}, cD = window.Vue.effectScope, uD = window.Vue.onScopeDispose, dD = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = cD(!0), n = o.run(() => e(...a))), uD(s), n);
}, gD = window.Vuex.useStore;
let rl;
const pD = () => {
  const e = gD(), t = Vc();
  let n = 1e3, o = 0;
  return rl = wc(() => t().then((a) => {
    a instanceof fo ? (n *= o + 1, o++, setTimeout(rl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof So)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), rl;
}, xh = dD(pD), mD = window.Vuex.useStore, hD = () => {
  const e = mD(), t = xh(), { currentMTProvider: n } = H(e), { sourceSection: o, currentProposedTranslation: s } = W(), { selectNextTranslationUnit: a } = xo();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, fD = window.Vuex.useStore, wD = () => {
  const e = fD(), t = xh();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, _D = window.Vuex.useStore, vD = window.Vue.computed, $h = () => {
  const e = _D(), t = _e(), { currentTranslation: n } = tn(), { currentMTProvider: o, previousRoute: s } = H(e), { currentTargetPage: a } = qe(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: g
  } = M(), i = He(), c = vD(() => {
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
    if (g.value ? (f.translation_source_section = g.value, f.translation_type = "section") : f.translation_type = "article", n.value) {
      f.translation_id = n.value.translationId, f.translation_target_title = n.value.targetTitle;
      const w = n.value.targetSectionTitle;
      w && (f.translation_target_section = w);
    } else
      a.value && (f.translation_target_title = (_ = a.value) == null ? void 0 : _.title);
    return o.value && (f.translation_provider = K.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var y;
      const f = t.currentRoute.value.meta.workflowStep, w = t.getRoutes().find(
        (k) => k.name === s.value
      ), S = ((y = w == null ? void 0 : w.meta) == null ? void 0 : y.workflowStep) || 0;
      return f > S ? i(se({
        event_type: "editor_open"
      }, c.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(se({
      event_type: "editor_close"
    }, c.value)),
    logEditorCloseWarnEvent: () => i(se({
      event_type: "editor_close_warn"
    }, c.value)),
    logEditorSegmentAddEvent: () => i(se({
      event_type: "editor_segment_add"
    }, c.value))
  };
};
const ne = window.Vue.unref, Je = window.Vue.createVNode, Kt = window.Vue.withCtx, SD = window.Vue.resolveDirective, op = window.Vue.createElementVNode, yD = window.Vue.withDirectives, CD = window.Vue.toDisplayString, kD = window.Vue.createTextVNode, bD = window.Vue.renderList, xD = window.Vue.Fragment, _n = window.Vue.openBlock, sp = window.Vue.createElementBlock, co = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $D = window.Vue.normalizeClass, VD = window.Vue.normalizeStyle, ED = { class: "sx-sentence-selector__header-title mb-0" }, DD = { class: "sx-sentence-selector__section-contents px-4" }, uo = window.Vue.computed, AD = window.Vue.nextTick, LD = window.Vue.onMounted, Xa = window.Vue.ref, ap = window.Vue.watch, TD = window.Vuex.useStore, ip = window.Codex.CdxButton, BD = window.Codex.CdxIcon, PD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Xa(!1), n = Xa(!1), o = Xa("100%"), s = TD(), { currentMTProvider: a } = H(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l
    } = M(), { sourceSection: u, selectedContentTranslationUnit: g } = W(), i = uo(
      () => s.state.application.translationDataLoadingCounter === 0
    ), c = uo(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), d = uo(() => {
      var v;
      return (v = u.value) == null ? void 0 : v.subSections;
    }), p = uo(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), m = uo(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: f,
      logEditorCloseWarnEvent: _,
      logEditorSegmentAddEvent: w
    } = $h(), S = eD();
    nD()().then(h);
    const k = aD();
    LD(() => {
      ap(
        i,
        () => b(this, null, function* () {
          i.value && (yield AD(), S(), k());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), ap(g, k);
    const {
      selectNextTranslationUnit: x,
      selectPreviousTranslationUnit: F
    } = xo(), E = hD(), P = () => {
      w(), E();
    }, J = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, B = _e(), I = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        Xe.value = !0, _();
        return;
      }
      Et();
    }, { fetchTranslationsByStatus: Q } = mi(), X = wD(), { clearURLParameters: ot } = M(), { currentTranslation: Le } = tn(), Et = () => b(this, null, function* () {
      Q("draft"), Le.value && (u.value.reset(), Le.value.restored = !1), f(), ot(), X(), yield B.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: wt,
      translateSelectedTranslationUnitForAllProviders: Vo
    } = $c(), Vn = () => {
      Lt.value || (t.value = !0, Vo());
    }, { getCurrentTitleByLanguage: Dt } = en(), Ge = (v, D) => {
      B.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: p.value,
          title: Dt(
            l.value,
            r.value
          ),
          isInitialEdit: D || null
        }
      });
    }, nn = () => B.push({ name: "sx-publisher" }), At = () => b(this, null, function* () {
      g.value ? yield wt(
        g.value.id,
        a.value
      ) : yield wt(0, a.value);
    }), Lt = uo(
      () => g.value instanceof Ie
    ), Xe = Xa(!1);
    return (v, D) => {
      const A = SD("i18n");
      return _n(), sp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: VD(m.value)
      }, [
        Je(ne(T), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Kt(() => [
            Je(ne(C), { shrink: "" }, {
              default: Kt(() => [
                Je(ne(ip), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: I
                }, {
                  default: Kt(() => [
                    Je(ne(BD), { icon: ne(Qm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            Je(ne(C), {
              grow: "",
              class: "px-1"
            }, {
              default: Kt(() => [
                yD(op("h4", ED, null, 512), [
                  [A, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Je(ne(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: Kt(() => [
                Je(ne(ip), {
                  disabled: !(ne(u) && ne(u).isTranslated),
                  onClick: nn
                }, {
                  default: Kt(() => [
                    kD(CD(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? (_n(), co(ne(T), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Kt(() => [
            Je(ne(C), {
              dir: ne(U.getDir)(ne(r)),
              lang: ne(r),
              class: "sx-sentence-selector__section"
            }, {
              default: Kt(() => [
                Je(_5),
                op("div", DD, [
                  (_n(!0), sp(xD, null, bD(d.value, (L) => (_n(), co(lE, {
                    id: L.id,
                    key: `sub-section-${L.id}`,
                    "sub-section": L,
                    onBounceTranslation: J
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Lt.value && c.value ? (_n(), co(ZE, {
              key: 0,
              onEditTranslation: D[0] || (D[0] = (L) => Ge(L, !1)),
              onSkipTranslation: ne(x),
              onSelectPreviousSegment: ne(F)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : Lt.value ? (_n(), co(EE, {
              key: 2,
              onEditTranslation: Ge,
              onApplyTranslation: P,
              onSkipTranslation: ne(x),
              onSelectPreviousSegment: ne(F)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (_n(), co(J5, {
              key: 1,
              class: $D({ "mb-0": !n.value }),
              onConfigureOptions: Vn,
              onEditTranslation: D[1] || (D[1] = (L) => Ge(L, !0)),
              onApplyTranslation: P,
              onSkipTranslation: ne(x),
              onSelectPreviousSegment: ne(F),
              onRetryTranslation: At
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (_n(), co(ne(T), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Kt(() => [
            Je(ne(Re), { class: "mt-0" })
          ]),
          _: 1
        })),
        Je(i5, {
          active: t.value,
          "onUpdate:active": D[2] || (D[2] = (L) => t.value = L)
        }, null, 8, ["active"]),
        Je(NV, {
          modelValue: Xe.value,
          "onUpdate:modelValue": D[3] || (D[3] = (L) => Xe.value = L),
          onDiscardTranslation: Et
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const FD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: PD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, MD = window.Vue.resolveComponent, ND = window.Vue.createVNode, UD = window.Vue.normalizeClass, ID = window.Vue.openBlock, zD = window.Vue.createElementBlock;
function RD(e, t, n, o, s, a) {
  const r = MD("sx-sentence-selector");
  return ID(), zD("main", {
    class: UD(["sx-sentence-selector-view", a.classes])
  }, [
    ND(r)
  ], 2);
}
const OD = /* @__PURE__ */ Y(FD, [["render", RD]]), HD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, jD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const qD = window.Vue.resolveDirective, Wa = window.Vue.withDirectives, dt = window.Vue.openBlock, Yt = window.Vue.createElementBlock, Ka = window.Vue.createCommentVNode, Ya = window.Vue.Transition, In = window.Vue.withCtx, go = window.Vue.createVNode, ps = window.Vue.createElementVNode, zn = window.Vue.unref, GD = window.Vue.renderList, XD = window.Vue.Fragment, WD = window.Vue.normalizeClass, rp = window.Vue.createBlock, KD = window.Vue.toDisplayString, YD = window.Vue.createTextVNode, JD = { class: "sx-quick-tutorial" }, QD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, ZD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, eA = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, tA = { class: "sx-quick-tutorial__illustration" }, nA = ["innerHTML"], oA = ["innerHTML"], sA = { class: "sx-quick-tutorial__step-indicator py-3" }, aA = ["onClick"], iA = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, rA = {
  key: "secondary-point-1",
  class: "ma-0"
}, lA = {
  key: "secondary-point-2",
  class: "ma-0"
}, cA = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, lp = window.Vue.ref, cp = window.Codex.CdxButton, uA = window.Codex.CdxIcon, dA = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = lp(2), n = lp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = _e(), r = () => a.push({ name: "sx-sentence-selector" });
    return (l, u) => {
      const g = qD("i18n");
      return dt(), Yt("section", JD, [
        go(zn(T), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: In(() => [
            ps("section", QD, [
              go(Ya, {
                name: "fade",
                mode: "out-in"
              }, {
                default: In(() => [
                  s(1) ? Wa((dt(), Yt("h2", ZD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Wa((dt(), Yt("h2", eA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ka("", !0)
                ]),
                _: 1
              })
            ]),
            ps("section", tA, [
              go(Ya, { name: "mw-ui-animation-slide-start" }, {
                default: In(() => [
                  s(1) ? (dt(), Yt("div", {
                    key: "illustration-1",
                    innerHTML: zn(jD)
                  }, null, 8, nA)) : s(2) ? (dt(), Yt("div", {
                    key: "illustration-2",
                    innerHTML: zn(HD)
                  }, null, 8, oA)) : Ka("", !0)
                ]),
                _: 1
              })
            ]),
            ps("div", sA, [
              (dt(!0), Yt(XD, null, GD(t.value, (i) => (dt(), Yt("span", {
                key: `dot-${i}`,
                class: WD(["dot mx-1", { "dot-active": s(i) }]),
                role: "button",
                onClick: (c) => n.value = i
              }, null, 10, aA))), 128))
            ]),
            ps("section", iA, [
              go(Ya, {
                name: "fade",
                mode: "out-in"
              }, {
                default: In(() => [
                  s(1) ? Wa((dt(), Yt("h3", rA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Wa((dt(), Yt("h3", lA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ka("", !0)
                ]),
                _: 1
              })
            ]),
            ps("div", cA, [
              go(Ya, {
                name: "fade",
                mode: "out-in"
              }, {
                default: In(() => [
                  s(1) ? (dt(), rp(zn(cp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: In(() => [
                      go(zn(uA), { icon: zn(Hs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (dt(), rp(zn(cp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: r
                  }, {
                    default: In(() => [
                      YD(KD(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : Ka("", !0)
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
const gA = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: dA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, pA = window.Vue.resolveComponent, mA = window.Vue.createVNode, hA = window.Vue.normalizeClass, fA = window.Vue.openBlock, wA = window.Vue.createElementBlock;
function _A(e, t, n, o, s, a) {
  const r = pA("sx-quick-tutorial");
  return fA(), wA("main", {
    class: hA(["sx-quick-tutorial-view", a.classes])
  }, [
    mA(r)
  ], 2);
}
const vA = /* @__PURE__ */ Y(gA, [["render", _A]]);
const SA = window.Vue.resolveDirective, up = window.Vue.createElementVNode, yA = window.Vue.withDirectives, CA = window.Vue.unref, kA = window.Vue.withCtx, bA = window.Vue.createVNode, xA = window.Vue.openBlock, $A = window.Vue.createElementBlock, VA = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, EA = { class: "sx-editor__original-content-panel__header mb-2" }, DA = ["lang", "dir", "innerHTML"], dp = window.Vue.ref, AA = window.Vue.onMounted, LA = {
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
      for (const g of u)
        g.href = j.getPageUrl(l, g.title), g.target = "_blank";
    }, o = dp(null), s = dp(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return AA(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const u = SA("i18n");
      return xA(), $A("section", VA, [
        yA(up("h5", EA, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        bA(CA(e1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: kA(() => [
            up("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, DA)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, TA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const BA = window.Vue.unref, ms = window.Vue.createElementVNode, gp = window.Vue.resolveDirective, ll = window.Vue.withDirectives, PA = window.Vue.normalizeClass, FA = window.Vue.openBlock, MA = window.Vue.createElementBlock, NA = window.Vue.createCommentVNode, UA = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, IA = { class: "sx-editor__feedback-overlay-content px-4" }, zA = ["innerHTML"], RA = { class: "sx-editor__feedback-overlay-content__title" }, OA = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, cl = window.Vue.computed, HA = window.Vuex.useStore, jA = {
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
    const t = e, { targetLanguage: n } = H(HA()), o = cl(
      () => $t.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = cl(() => {
      const r = $t.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = cl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = gp("i18n"), g = gp("i18n-html");
      return e.showFeedback ? (FA(), MA("div", UA, [
        ms("div", IA, [
          ms("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: BA(TA)
          }, null, 8, zA),
          ll(ms("h2", RA, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          ll(ms("p", OA, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          ll(ms("p", {
            class: PA(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : NA("", !0);
    };
  }
}, qA = window.Vuex.useStore, GA = () => {
  const e = qA(), t = Vc(), { selectNextTranslationUnit: n } = xo(), { sourceSection: o, selectedContentTranslationUnit: s } = W(), { getCurrentTitleByLanguage: a } = en();
  return (r) => b(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = r, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), r = l.innerHTML;
    const { sourceLanguage: u, targetLanguage: g, currentMTProvider: i } = e.state.application;
    s.value instanceof Ie && (r = (yield fm(
      r,
      a(g, u),
      g
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const Ne = window.Vue.unref, ul = window.Vue.openBlock, dl = window.Vue.createBlock, pp = window.Vue.createCommentVNode, mp = window.Vue.createVNode, XA = window.Vue.createElementVNode, WA = window.Vue.withCtx, KA = { class: "sx-editor__editing-surface-container grow" }, gl = window.Vue.ref, YA = window.Vue.computed, JA = window.Vuex.useStore, QA = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = gl(!1), o = _e(), s = JA(), a = () => n.value = !0, r = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: u, content: g, originalContent: i, title: c } = history.state, d = gl(null), p = gl(!1), { logEditorSegmentAddEvent: m } = $h(), { targetLanguage: h, sourceLanguage: f } = H(s), { sourceSection: _ } = W(), w = YA(
      () => $t.calculateScore(
        d.value,
        g,
        h.value
      )
    ), S = GA(), y = (k) => b(this, null, function* () {
      d.value = k, p.value = !0;
      const x = new Promise((E) => setTimeout(E, 2e3));
      let F = Promise.resolve();
      l ? _.value.editedTranslation = k : (w.value === 0 && u && m(), F = S(k)), yield Promise.all([x, F]), p.value = !1, r();
    });
    return (k, x) => (ul(), dl(Ne(T), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: WA(() => [
        Ne(i) ? (ul(), dl(LA, {
          key: 0,
          language: Ne(f),
          dir: Ne(U.getDir)(Ne(f)),
          "original-content": Ne(i)
        }, null, 8, ["language", "dir", "original-content"])) : pp("", !0),
        n.value ? pp("", !0) : (ul(), dl(Ne(Re), { key: 1 })),
        XA("div", KA, [
          mp(jA, {
            "edited-translation": d.value,
            "show-feedback": p.value,
            "proposed-translation": Ne(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          mp(E2, {
            content: Ne(g),
            language: Ne(h),
            dir: Ne(U.getDir)(Ne(h)),
            title: Ne(c),
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
const ZA = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: QA
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
}, eL = window.Vue.resolveComponent, tL = window.Vue.createVNode, nL = window.Vue.normalizeClass, oL = window.Vue.openBlock, sL = window.Vue.createElementBlock;
function aL(e, t, n, o, s, a) {
  const r = eL("sx-editor");
  return oL(), sL("main", {
    class: nL(["sx-editor-view", a.classes])
  }, [
    tL(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const iL = /* @__PURE__ */ Y(ZA, [["render", aL]]);
const kt = window.Vue.unref, Rn = window.Vue.createVNode, hs = window.Vue.withCtx, rL = window.Vue.resolveDirective, lL = window.Vue.withDirectives, cL = window.Vue.openBlock, uL = window.Vue.createBlock, hp = window.Codex.CdxButton, fp = window.Codex.CdxIcon, dL = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = _e(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = rL("i18n");
      return cL(), uL(kt(T), { class: "ma-0 sx-publisher__header" }, {
        default: hs(() => [
          Rn(kt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: hs(() => [
              Rn(kt(hp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: hs(() => [
                  Rn(kt(fp), { icon: kt(bo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          lL(Rn(kt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Rn(kt(C), { shrink: "" }, {
            default: hs(() => [
              Rn(kt(hp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: hs(() => [
                  Rn(kt(fp), { icon: kt(mk) }, null, 8, ["icon"])
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
}, gL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, pL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, wp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const pl = window.Vue.createElementVNode, _p = window.Vue.toDisplayString, ml = window.Vue.unref, hl = window.Vue.withCtx, vp = window.Vue.createVNode, mL = window.Vue.openBlock, hL = window.Vue.createBlock, fL = window.Vue.createCommentVNode, wL = ["innerHTML"], _L = ["textContent"], vL = ["textContent"], fl = window.Vue.computed, SL = {
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
        svg: gL,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: pL,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: wp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: wp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = fl(() => o[n.status].svg), a = fl(() => o[n.status].title), r = fl(() => o[n.status].subtitle);
    return (l, u) => e.active ? (mL(), hL(ml(nt), {
      key: 0,
      "overlay-opacity": "high",
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: hl(() => [
        vp(ml(T), { class: "ma-4" }, {
          default: hl(() => [
            vp(ml(C), null, {
              default: hl(() => [
                pl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, wL),
                pl("h2", {
                  textContent: _p(a.value)
                }, null, 8, _L),
                pl("p", {
                  class: "ma-0",
                  textContent: _p(r.value)
                }, null, 8, vL)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : fL("", !0);
  }
};
const Ue = window.Vue.unref, gt = window.Vue.createVNode, Jt = window.Vue.withCtx, yL = window.Vue.resolveDirective, CL = window.Vue.withDirectives, Sp = window.Vue.toDisplayString, kL = window.Vue.createTextVNode, wl = window.Vue.openBlock, yp = window.Vue.createElementBlock, bL = window.Vue.createCommentVNode, Vh = window.Vue.createElementVNode, xL = window.Vue.createBlock, $L = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, VL = ["src"], EL = ["textContent"], DL = /* @__PURE__ */ Vh("p", { class: "mt-0" }, null, -1), AL = window.Vue.computed, LL = window.Vue.inject, TL = window.Vue.ref, Cp = window.Codex.CdxButton, BL = window.Codex.CdxIcon, PL = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: lm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = TL(""), s = () => n("close"), a = () => n("publish", o.value), r = LL("breakpoints"), l = AL(() => r.value.mobile);
    return (u, g) => {
      const i = yL("i18n");
      return e.active && e.captchaDetails ? (wl(), xL(Ue(nt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Jt(() => [
          gt(Ue(T), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Jt(() => [
              gt(Ue(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Jt(() => [
                  gt(Ue(Cp), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Jt(() => [
                      gt(Ue(BL), { icon: Ue(bo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              CL(gt(Ue(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              gt(Ue(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Jt(() => [
                  gt(Ue(Cp), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Jt(() => [
                      kL(Sp(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          gt(Ue(si))
        ]),
        default: Jt(() => [
          Vh("div", $L, [
            e.captchaDetails.type === "image" ? (wl(), yp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, VL)) : (wl(), yp("p", {
              key: 1,
              textContent: Sp(e.captchaDetails.question)
            }, null, 8, EL)),
            DL,
            gt(Ue(T), { class: "ma-0" }, {
              default: Jt(() => [
                gt(Ue(C), null, {
                  default: Jt(() => [
                    gt(Ue(ti), {
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
      }, 8, ["fullscreen"])) : bL("", !0);
    };
  }
};
const On = window.Vue.unref, fs = window.Vue.createVNode, Ja = window.Vue.withCtx, Hn = window.Vue.createElementVNode, FL = window.Vue.resolveDirective, ML = window.Vue.withDirectives, NL = window.Vue.renderList, kp = window.Vue.Fragment, _l = window.Vue.openBlock, bp = window.Vue.createElementBlock, UL = window.Vue.toDisplayString, IL = window.Vue.normalizeClass, zL = window.Vue.createBlock, RL = { class: "mw-ui-dialog__header" }, OL = { class: "row ma-0 px-4 py-3" }, HL = { class: "col shrink justify-center" }, jL = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, qL = { class: "mb-0" }, GL = { class: "pa-4" }, XL = ["textContent"], WL = window.Vuex.useStore, ws = window.Vue.computed, KL = window.Codex.CdxButton, YL = window.Codex.CdxIcon, JL = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = WL(), s = ws(() => o.state.application.publishTarget), a = ws(() => o.state.translator.isAnon), r = de(), { sourceSection: l } = W(), u = ws(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), g = ws(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = ws(() => [
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
    ]), c = (m) => m === i.value.length - 1 ? "mb-1" : "mb-4", d = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), d();
    };
    return (m, h) => {
      const f = FL("i18n");
      return _l(), zL(On(nt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: d
      }, {
        header: Ja(() => [
          Hn("div", RL, [
            Hn("div", OL, [
              Hn("div", HL, [
                fs(On(KL), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: d
                }, {
                  default: Ja(() => [
                    fs(On(YL), { icon: On(Qm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Hn("div", jL, [
                ML(Hn("h4", qL, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            fs(On(si))
          ])
        ]),
        default: Ja(() => [
          Hn("div", GL, [
            fs(On(A0), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: Ja(() => [
                (_l(!0), bp(kp, null, NL(i.value, (_, w) => (_l(), bp(kp, {
                  key: _.label
                }, [
                  fs(On(Ll), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Hn("p", {
                    class: IL(["complementary ms-7 mt-0", c(w)]),
                    textContent: UL(_.details)
                  }, null, 10, XL)
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
const pt = window.Vue.unref, jn = window.Vue.createVNode, QL = window.Vue.resolveDirective, xp = window.Vue.withDirectives, Qa = window.Vue.openBlock, $p = window.Vue.createElementBlock, ZL = window.Vue.createCommentVNode, Vp = window.Vue.toDisplayString, vl = window.Vue.createElementVNode, po = window.Vue.withCtx, Ep = window.Vue.createBlock, eT = window.Vue.Fragment, tT = window.Vue.normalizeClass, nT = { class: "sx-publisher__review-info__content" }, oT = {
  key: 0,
  class: "complementary ma-0"
}, sT = ["textContent"], aT = ["textContent"], vn = window.Vue.computed, Dp = window.Vue.ref, iT = window.Vue.watch, Ap = window.Codex.CdxButton, Sl = window.Codex.CdxIcon, rT = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Dp(0), o = Dp(null);
    iT(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = vn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = vn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = vn(() => {
      switch (a.value) {
        case "warning":
          return Jm;
        case "error":
          return gk;
        default:
          return fk;
      }
    }), l = vn(() => a.value === "default"), u = vn(
      () => l.value ? "notice" : a.value
    ), g = vn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = de(), c = vn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = vn(
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
      const _ = QL("i18n-html");
      return Qa(), Ep(pt(t0), {
        type: u.value,
        class: tT(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: l.value
      }, {
        icon: po(() => [
          jn(pt(Sl), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: po(() => [
          vl("div", nT, [
            a.value === "default" ? xp((Qa(), $p("p", oT, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (Qa(), $p(eT, { key: 1 }, [
              vl("h5", {
                textContent: Vp(d.value)
              }, null, 8, sT),
              vl("p", {
                textContent: Vp(c.value)
              }, null, 8, aT),
              jn(pt(T), {
                justify: "between",
                class: "ma-0"
              }, {
                default: po(() => [
                  xp(jn(pt(C), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Qa(), Ep(pt(C), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: po(() => [
                      jn(pt(Ap), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: po(() => [
                          jn(pt(Sl), { icon: pt(hc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      jn(pt(Ap), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: po(() => [
                          jn(pt(Sl), { icon: pt(Hs) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : ZL("", !0)
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
}, lT = (e) => {
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
}, cT = window.Vuex.useStore, uT = window.Vue.computed, dT = () => {
  const e = cT(), { currentTranslation: t } = tn(), { currentMTProvider: n, previousRoute: o } = H(e), { currentTargetPage: s } = qe(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = M(), { sourceSection: g } = W(), i = He(), c = uT(() => {
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
    return n.value && (h.translation_provider = K.getProviderForInstrumentation(n.value)), h.human_modification_rate = $t.getMTScoreForPageSection(
      g.value,
      r.value
    ) / 100, h.human_modification_threshold = $t.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(se({
      event_type: "publish_attempt"
    }, c.value)),
    logPublishSuccessEvent: (h, f) => i(se({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, c.value)),
    logPublishFailureEvent: () => i(se({
      event_type: "publish_failure"
    }, c.value))
  };
}, Lp = window.Vue.ref, gT = window.Vuex.useStore, pT = () => {
  const e = gT(), { pageURLParameter: t } = M(), { sourceSection: n, targetPageTitleForPublishing: o } = W(), s = bh(), a = Lp(!1), r = Lp("pending"), l = () => a.value = !1, u = Vc(), {
    logPublishAttemptEvent: g,
    logPublishSuccessEvent: i,
    logPublishFailureEvent: c
  } = dT(), d = (m, h) => b(void 0, null, function* () {
    g();
    const f = yield u();
    if (f instanceof fo)
      return c(), { publishFeedbackMessage: f, targetUrl: null };
    const _ = f, {
      /** @type {PageSection} */
      sourceLanguage: w,
      targetLanguage: S
    } = e.state.application, y = o.value, k = e.getters["application/isSandboxTarget"], x = {
      html: lT(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: y,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: w,
      targetLanguage: S,
      revision: s.value,
      isSandbox: k,
      sectionTranslationId: _
    };
    m && (x.captchaId = m, x.captchaWord = h);
    const F = yield tt.publishTranslation(
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
        f = yield d(
          h == null ? void 0 : h.id,
          m
        );
      } catch (_) {
        if (_ instanceof So)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw _;
      }
      return f;
    }),
    isPublishDialogActive: a,
    publishStatus: r
  };
}, mT = window.Vue.computed, hT = () => {
  const e = _e(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = en(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = M(), a = mT(
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
}, fT = window.Vuex.useStore, wT = () => {
  const e = fT(), { targetLanguage: t } = H(e), { sourceSection: n } = W();
  return () => {
    const o = $t.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = $t.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, r = s === "failure" ? "error" : "warning";
    let l, u;
    return r === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new fo({
      title: l,
      text: u,
      status: r,
      type: "mt"
    });
  };
}, _T = window.Vue.ref, vT = window.Vue.computed, ST = () => {
  const e = wT(), t = _T([]), n = vT(
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
}, yT = window.Vuex.useStore, CT = () => {
  const e = yT(), { currentSourcePage: t } = qe(), { sourceLanguage: n, targetLanguage: o } = H(e), { sourceSection: s, targetPageTitleForPublishing: a } = W();
  return (r) => b(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], g = t.value.title, i = new mw.Title(g), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== c.user)
      try {
        yield ui.addWikibaseLink(
          n.value,
          o.value,
          g,
          l
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
}, Tp = window.Vue.ref, kT = () => {
  const e = Tp(!1), t = Tp(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ue = window.Vue.unref, Ae = window.Vue.createVNode, bT = window.Vue.resolveDirective, _s = window.Vue.createElementVNode, xT = window.Vue.withDirectives, mo = window.Vue.withCtx, $T = window.Vue.openBlock, VT = window.Vue.createElementBlock, ET = { class: "sx-publisher" }, DT = { class: "sx-publisher__publish-panel pa-4" }, AT = { class: "mb-2" }, LT = ["innerHTML"], TT = { class: "sx-publisher__section-preview pa-5" }, BT = ["innerHTML"], Bp = window.Vue.computed, PT = window.Vue.onMounted, FT = window.Vue.ref, MT = window.Vue.watch, NT = window.Vuex.useStore, Pp = window.Codex.CdxButton, Fp = window.Codex.CdxIcon, UT = {
  __name: "SXPublisher",
  setup(e) {
    const t = NT(), { sourceSection: n } = W(), o = Bp(() => {
      var E;
      return (E = n.value) == null ? void 0 : E.title;
    }), s = de(), a = Bp(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: g
    } = kT(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = ST(), h = CT(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: S } = pT(), y = (E = null) => b(this, null, function* () {
      if (c.value)
        return;
      const P = yield f(E, r);
      if (!P)
        return;
      const { publishFeedbackMessage: J, targetUrl: B } = P;
      if (u(J)) {
        S();
        return;
      } else
        J && d(J);
      w.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          S();
          return;
        }
        h(B);
      }, 1e3);
    });
    PT(() => m());
    const k = hT(), x = FT(!1), F = () => x.value = !0;
    return MT(x, (E) => {
      E || (p(), m());
    }), (E, P) => {
      const J = bT("i18n");
      return $T(), VT("section", ET, [
        Ae(dL, {
          "is-publishing-disabled": ue(c),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        _s("div", DT, [
          xT(_s("h5", AT, null, 512), [
            [J, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          _s("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, LT),
          Ae(ue(T), {
            justify: "end",
            class: "ma-0"
          }, {
            default: mo(() => [
              Ae(ue(C), { shrink: "" }, {
                default: mo(() => [
                  Ae(ue(Pp), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: F
                  }, {
                    default: mo(() => [
                      Ae(ue(Fp), { icon: ue(yk) }, null, 8, ["icon"])
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
        Ae(rT, { "publish-feedback-messages": ue(i) }, null, 8, ["publish-feedback-messages"]),
        _s("section", TT, [
          Ae(ue(T), { class: "pb-5 ma-0" }, {
            default: mo(() => [
              Ae(ue(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ae(ue(C), { shrink: "" }, {
                default: mo(() => [
                  Ae(ue(Pp), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ue(k)
                  }, {
                    default: mo(() => [
                      Ae(ue(Fp), { icon: ue(gc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          _s("div", {
            innerHTML: ue(n).translationHtml
          }, null, 8, BT)
        ]),
        Ae(JL, {
          active: x.value,
          "onUpdate:active": P[0] || (P[0] = (B) => x.value = B)
        }, null, 8, ["active"]),
        Ae(PL, {
          active: ue(l),
          "captcha-details": ue(r),
          onClose: ue(g),
          onPublish: P[1] || (P[1] = (B) => y(B))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ae(SL, {
          active: ue(_),
          status: ue(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const IT = {
  name: "SxPublisherView",
  components: {
    SxPublisher: UT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, zT = window.Vue.resolveComponent, RT = window.Vue.createVNode, OT = window.Vue.normalizeClass, HT = window.Vue.openBlock, jT = window.Vue.createElementBlock;
function qT(e, t, n, o, s, a) {
  const r = zT("sx-publisher");
  return HT(), jT("main", {
    class: OT(["sx-publisher-view", a.classes])
  }, [
    RT(r)
  ], 2);
}
const GT = /* @__PURE__ */ Y(IT, [["render", qT]]);
const mt = window.Vue.unref, Sn = window.Vue.createVNode, qn = window.Vue.withCtx, yl = window.Vue.toDisplayString, Cl = window.Vue.createElementVNode, XT = window.Vue.openBlock, WT = window.Vue.createBlock, KT = ["textContent"], YT = ["textContent"], JT = ["textContent"], Eh = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Co,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (XT(), WT(mt(T), {
      class: "cx-search-suggestion pt-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: mt(U.getDir)(e.suggestion.language)
    }, {
      default: qn(() => [
        Sn(mt(C), { shrink: "" }, {
          default: qn(() => [
            Sn(mt(Xl), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Sn(mt(C), { class: "ms-4" }, {
          default: qn(() => [
            Sn(mt(T), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: qn(() => [
                Sn(mt(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: qn(() => [
                    Cl("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: yl(e.suggestion.title)
                    }, null, 8, KT)
                  ]),
                  _: 1
                }),
                Sn(mt(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: qn(() => [
                    Cl("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: yl(e.suggestion.description)
                    }, null, 8, YT)
                  ]),
                  _: 1
                }),
                Sn(mt(C), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: qn(() => [
                    Sn(mt(we), {
                      icon: mt(ww),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Cl("small", {
                      textContent: yl(e.suggestion.langLinksCount)
                    }, null, 8, JT)
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
}, QT = window.Vue.computed, Mp = window.Vue.ref, ZT = window.Vue.watch, e6 = (e, t) => {
  const o = Mp([]), s = Mp(!1), a = QT(
    () => o.value.slice(0, 4)
  ), r = wc(() => b(void 0, null, function* () {
    try {
      o.value = yield ko.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return ZT(t, () => {
    s.value = !0, o.value = [], r();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const ho = window.Vue.unref, vs = window.Vue.openBlock, kl = window.Vue.createBlock, t6 = window.Vue.createCommentVNode, n6 = window.Vue.resolveDirective, o6 = window.Vue.withDirectives, Np = window.Vue.createElementBlock, s6 = window.Vue.renderList, a6 = window.Vue.Fragment, i6 = window.Vue.withCtx, r6 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, l6 = window.Vue.computed, c6 = window.Vuex.useStore, u6 = {
  __name: "SearchResultsCard",
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const t = e, { sourceLanguage: n, sourceLanguageAutonym: o } = H(
      c6()
    ), s = l6(() => t.searchInput), { searchResultsLoading: a, searchResultsSlice: r } = e6(
      n,
      s
    );
    return (l, u) => {
      const g = n6("i18n");
      return vs(), kl(ho(ze), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: i6(() => [
          ho(a) ? (vs(), kl(ho(Re), { key: 0 })) : ho(r).length === 0 ? o6((vs(), Np("p", r6, null, 512)), [
            [g, [
              s.value,
              ho(o)
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : t6("", !0),
          (vs(!0), Np(a6, null, s6(ho(r), (i) => (vs(), kl(Eh, {
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
const d6 = window.Vue.toDisplayString, g6 = window.Vue.createElementVNode, p6 = window.Vue.renderList, m6 = window.Vue.Fragment, bl = window.Vue.openBlock, h6 = window.Vue.createElementBlock, Up = window.Vue.createBlock, f6 = window.Vue.unref, Ip = window.Vue.withCtx, w6 = ["textContent"], zp = {
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
    return (t, n) => (bl(), Up(f6(ze), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: Ip(() => [
        g6("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: d6(e.cardTitle)
        }, null, 8, w6)
      ]),
      default: Ip(() => [
        (bl(!0), h6(m6, null, p6(e.suggestions, (o) => (bl(), Up(Eh, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, _6 = window.Vue.computed, v6 = (e, t) => _6(() => {
  const o = {
    value: "other",
    props: {
      icon: yw,
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
      label: U.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), S6 = window.Vue.computed, y6 = (e, t, n) => S6(() => {
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
    (r) => r !== e.value && r !== t.value && U.getAutonym(r) !== r
  );
});
const C6 = window.Vue.resolveDirective, k6 = window.Vue.createElementVNode, xl = window.Vue.withDirectives, Ve = window.Vue.unref, Ss = window.Vue.withCtx, bt = window.Vue.createVNode, ys = window.Vue.openBlock, Rp = window.Vue.createBlock, b6 = window.Vue.createCommentVNode, $l = window.Vue.createElementBlock, x6 = window.Vue.Fragment, $6 = window.Vue.vShow, V6 = { class: "sx-article-search" }, E6 = { class: "mb-0" }, D6 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, Cs = window.Vue.ref, A6 = window.Vue.onMounted, Vl = window.Vue.computed, Op = window.Vue.watch, L6 = window.Vue.inject, T6 = window.Vuex.useStore, B6 = window.Codex.CdxButton, P6 = window.Codex.CdxIcon, F6 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Cs(""), n = Cs(!1), o = Cs(null), s = Cs(!1), a = Cs([]), r = T6(), { sourceLanguage: l, targetLanguage: u } = H(r), { supportedLanguageCodes: g } = Is(), i = y6(
      l,
      u,
      a
    ), c = v6(
      l,
      i
    ), d = _e(), { fetchAllTranslations: p } = mi();
    A6(() => b(this, null, function* () {
      var I;
      yield Wm()(), p();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (Q) {
      }
      (I = o.value) == null || I.focus();
    }));
    const m = () => {
      d.push({ name: "dashboard" });
    }, h = Km(), f = (B) => h(B, u.value), _ = (B) => {
      if (B === "other") {
        s.value = !0;
        return;
      }
      f(B);
    };
    Op(l, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const w = He();
    Op(t, () => {
      n.value || (n.value = !0, w({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: u.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, y = (B) => {
      s.value = !1, a.value.push(B), _(B);
    }, k = Vl(
      () => r.getters["mediawiki/getRecentlyEditedPages"]
    ), x = Vl(() => r.getters["mediawiki/getNearbyPages"]), F = L6("breakpoints"), E = Vl(() => F.value.tabletAndDown), P = js(), J = (B, I) => P(
      B.title,
      l.value,
      u.value,
      I
    );
    return (B, I) => {
      const Q = C6("i18n");
      return ys(), $l("section", V6, [
        bt(Ve(T), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ss(() => [
            bt(Ve(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ss(() => [
                xl(k6("h5", E6, null, 512), [
                  [Q, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            bt(Ve(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ss(() => [
                bt(Ve(B6), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": B.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: m
                }, {
                  default: Ss(() => [
                    bt(Ve(P6), { icon: Ve(bo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        bt(Ve(ti), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": I[0] || (I[0] = (X) => t.value = X),
          "icon-size": 20,
          icon: Ve(Al),
          placeholder: B.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        bt(Ve(Ts), {
          class: "sx-article-search__language-button-group",
          items: Ve(c),
          active: Ve(l),
          onSelect: _
        }, null, 8, ["items", "active"]),
        t.value ? b6("", !0) : (ys(), $l(x6, { key: 0 }, [
          k.value && k.value.length ? (ys(), Rp(zp, {
            key: 0,
            "card-title": B.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: k.value,
            onSuggestionClicked: I[1] || (I[1] = (X) => J(X, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : x.value && x.value.length ? (ys(), Rp(zp, {
            key: 1,
            "card-title": B.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: x.value,
            onSuggestionClicked: I[2] || (I[2] = (X) => J(X, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : xl((ys(), $l("p", D6, null, 512)), [
            [Q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        xl(bt(u6, {
          "search-input": t.value,
          onSuggestionClicked: I[3] || (I[3] = (X) => J(X, "search_result"))
        }, null, 8, ["search-input"]), [
          [$6, !!t.value]
        ]),
        bt(Ve(nt), {
          value: s.value,
          "onUpdate:value": I[4] || (I[4] = (X) => s.value = X),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: E.value,
          header: E.value,
          title: B.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: Ss(() => [
            bt(Ve(uh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: Ve(g),
              suggestions: Ve(i),
              placeholder: B.$i18n("cx-sx-language-selector-placeholder"),
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
const M6 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: F6
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, N6 = window.Vue.resolveComponent, U6 = window.Vue.createVNode, I6 = window.Vue.normalizeClass, z6 = window.Vue.openBlock, R6 = window.Vue.createElementBlock;
function O6(e, t, n, o, s, a) {
  const r = N6("sx-article-search");
  return z6(), R6("main", {
    class: I6(["sx-article-search-view", a.classes])
  }, [
    U6(r)
  ], 2);
}
const H6 = /* @__PURE__ */ Y(M6, [["render", O6]]), j6 = window.Vuex.useStore, Dh = [
  {
    path: "",
    name: "dashboard",
    component: jd,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: H6,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: J$,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: w3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: DV,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: vA,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: OD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: iL,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: GT,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: jd,
    meta: { workflowStep: 0 }
  }
], Ec = my({
  history: pS(),
  routes: Dh
});
Ec.beforeEach((e, t, n) => {
  const o = j6();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || Kp.assertUser().catch((l) => {
    l instanceof So && o.commit("application/setIsLoginDialogOn", !0);
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
    const l = Math.ceil(a) - 1, u = Dh.find(
      (g) => g.meta.workflowStep === l
    );
    n({ name: u.name });
    return;
  }
  n();
});
Ec.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const q6 = window.Vue.createApp, G6 = mw.config.get("wgUserLanguage"), X6 = "en", W6 = mw.messages.values || {}, $o = q6(c_);
$o.use(Ec);
$o.use(Fv);
$o.use(d1);
$o.use(u1);
const K6 = H1({
  locale: G6,
  finalFallback: X6,
  messages: W6,
  wikilinks: !0
});
$o.use(K6);
$o.mount("#contenttranslation");
