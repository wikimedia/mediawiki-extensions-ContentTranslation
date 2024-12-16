/*@nomin*/
var Ph = Object.defineProperty, Fh = Object.defineProperties;
var Mh = Object.getOwnPropertyDescriptors;
var Ac = Object.getOwnPropertySymbols;
var Nh = Object.prototype.hasOwnProperty, Uh = Object.prototype.propertyIsEnumerable;
var Dc = (e, t, n) => t in e ? Ph(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ie = (e, t) => {
  for (var n in t || (t = {}))
    Nh.call(t, n) && Dc(e, n, t[n]);
  if (Ac)
    for (var n of Ac(t))
      Uh.call(t, n) && Dc(e, n, t[n]);
  return e;
}, Xe = (e, t) => Fh(e, Mh(t));
var k = (e, t, n) => new Promise((o, s) => {
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
}, Ih = {
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
}, zh = window.Vue.toDisplayString, _i = window.Vue.openBlock, vi = window.Vue.createElementBlock, Rh = window.Vue.createCommentVNode, Lc = window.Vue.createElementVNode, Oh = window.Vue.normalizeClass, Hh = ["width", "height", "aria-labelledby"], jh = ["id"], qh = ["fill"], Gh = ["d"];
function Xh(e, t, n, o, s, a) {
  return _i(), vi("span", {
    class: Oh(["mw-ui-icon notranslate", a.classes])
  }, [
    (_i(), vi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (_i(), vi("title", {
        key: 0,
        id: n.iconName
      }, zh(n.iconName), 9, jh)) : Rh("", !0),
      Lc("g", { fill: n.iconColor }, [
        Lc("path", { d: a.iconImagePath }, null, 8, Gh)
      ], 8, qh)
    ], 8, Hh))
  ], 2);
}
const we = /* @__PURE__ */ Y(Ih, [["render", Xh]]);
const Wh = {
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
}, Kh = window.Vue.renderSlot, Yh = window.Vue.resolveComponent, Tc = window.Vue.normalizeClass, Ks = window.Vue.openBlock, Si = window.Vue.createBlock, yi = window.Vue.createCommentVNode, Jh = window.Vue.toDisplayString, Qh = window.Vue.createElementBlock, Zh = window.Vue.toHandlerKey, ef = window.Vue.withModifiers, tf = window.Vue.mergeProps, nf = window.Vue.createElementVNode, of = window.Vue.resolveDynamicComponent, sf = window.Vue.withCtx, af = { class: "mw-ui-button__content" }, rf = ["textContent"];
function lf(e, t, n, o, s, a) {
  const r = Yh("mw-icon");
  return Ks(), Si(of(a.component), {
    class: Tc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: sf(() => [
      Kh(e.$slots, "default", {}, () => [
        nf("span", af, [
          n.icon ? (Ks(), Si(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Tc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : yi("", !0),
          !a.isIcon && n.label ? (Ks(), Qh("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Jh(n.label)
          }, null, 8, rf)) : yi("", !0),
          n.indicator ? (Ks(), Si(r, tf({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Zh(a.indicatorClickEvent)]: t[0] || (t[0] = ef((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : yi("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const he = /* @__PURE__ */ Y(Wh, [["render", lf]]);
const cf = {
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
}, uf = window.Vue.renderList, df = window.Vue.Fragment, Ci = window.Vue.openBlock, Bc = window.Vue.createElementBlock, gf = window.Vue.resolveComponent, pf = window.Vue.withModifiers, mf = window.Vue.mergeProps, hf = window.Vue.createBlock, ff = { class: "row mw-ui-button-group ma-0 pa-0" };
function wf(e, t, n, o, s, a) {
  const r = gf("mw-button");
  return Ci(), Bc("div", ff, [
    (Ci(!0), Bc(df, null, uf(n.items, (l) => (Ci(), hf(r, mf({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: pf((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Ds = /* @__PURE__ */ Y(cf, [["render", wf]]);
const _f = {
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
}, Pc = window.Vue.renderSlot, vf = window.Vue.toDisplayString, Fc = window.Vue.openBlock, Mc = window.Vue.createElementBlock, Sf = window.Vue.createCommentVNode, yf = window.Vue.createElementVNode, Cf = { class: "mw-ui-card" }, kf = ["textContent"], bf = { class: "mw-ui-card__content" };
function xf(e, t, n, o, s, a) {
  return Fc(), Mc("div", Cf, [
    Pc(e.$slots, "header", {}, () => [
      n.title ? (Fc(), Mc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: vf(n.title)
      }, null, 8, kf)) : Sf("", !0)
    ]),
    yf("div", bf, [
      Pc(e.$slots, "default")
    ])
  ]);
}
const Ie = /* @__PURE__ */ Y(_f, [["render", xf]]);
const $f = {}, Vf = window.Vue.openBlock, Ef = window.Vue.createElementBlock, Af = { class: "mw-ui-divider row" };
function Df(e, t) {
  return Vf(), Ef("div", Af);
}
const oi = /* @__PURE__ */ Y($f, [["render", Df]]);
const Lf = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Tf = window.Vue.renderSlot, Bf = window.Vue.resolveDynamicComponent, Pf = window.Vue.withCtx, Ff = window.Vue.openBlock, Mf = window.Vue.createBlock;
function Nf(e, t, n, o, s, a) {
  return Ff(), Mf(Bf(n.tag), { class: "mw-grid container" }, {
    default: Pf(() => [
      Tf(e.$slots, "default")
    ]),
    _: 3
  });
}
const Uf = /* @__PURE__ */ Y(Lf, [["render", Nf]]), If = {
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
}, zf = window.Vue.renderSlot, Rf = window.Vue.resolveDynamicComponent, Of = window.Vue.normalizeClass, Hf = window.Vue.withCtx, jf = window.Vue.openBlock, qf = window.Vue.createBlock;
function Gf(e, t, n, o, s, a) {
  return jf(), qf(Rf(n.tag), {
    class: Of(a.classes)
  }, {
    default: Hf(() => [
      zf(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const T = /* @__PURE__ */ Y(If, [["render", Gf]]), bl = ["mobile", "tablet", "desktop", "desktop-wide"], Xf = bl.reduce(
  (e, t) => Xe(ie({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Wf = {
  name: "MwCol",
  props: Xe(ie({}, Xf), {
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
      for (let n = 0; n < bl.length; n++) {
        let o = bl[n], s = this.$props[o];
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
}, Kf = window.Vue.renderSlot, Yf = window.Vue.resolveDynamicComponent, Jf = window.Vue.normalizeClass, Qf = window.Vue.withCtx, Zf = window.Vue.openBlock, ew = window.Vue.createBlock;
function tw(e, t, n, o, s, a) {
  return Zf(), ew(Yf(n.tag), {
    class: Jf(a.classes)
  }, {
    default: Qf(() => [
      Kf(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ Y(Wf, [["render", tw]]), nw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", ow = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", sw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", si = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", aw = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, iw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Up = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", xl = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", rw = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Ls = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", lw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", cw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Ip = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", $l = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", uw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", zp = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", dw = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", gw = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", pw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", hw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", fw = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", ww = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, ei = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, _w = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Rp = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, vw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Op = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", Sw = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", yw = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Cw = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const ki = window.Vue.computed, kw = window.Vue.watch, bw = window.Vue.ref, xw = window.Vue.nextTick, $w = {
  name: "MwDialog",
  components: {
    MwButton: he,
    MwRow: T,
    MwCol: C,
    MwDivider: oi
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
    const n = bw(null), o = ki(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = ki(() => ({
      "mw-ui-dialog__overlay--high_opacity": e.overlayOpacity === "high"
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    kw(
      () => e.value,
      (u) => {
        u ? (r(), xw(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = ki(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClasses: s,
      mwIconClose: Ls,
      root: n
    };
  }
}, Nc = window.Vue.normalizeClass, bi = window.Vue.createElementVNode, xi = window.Vue.renderSlot, Ys = window.Vue.resolveComponent, Ao = window.Vue.createVNode, $i = window.Vue.withCtx, Uc = window.Vue.createCommentVNode, Vw = window.Vue.withKeys, Ic = window.Vue.openBlock, Ew = window.Vue.createElementBlock, Aw = window.Vue.Transition, Dw = window.Vue.normalizeStyle, Lw = window.Vue.createBlock, Tw = { class: "mw-ui-dialog__shell items-stretch" }, Bw = { class: "mw-ui-dialog__body" };
function Pw(e, t, n, o, s, a) {
  const r = Ys("mw-col"), l = Ys("mw-button"), u = Ys("mw-row"), g = Ys("mw-divider");
  return Ic(), Lw(Aw, {
    name: `mw-ui-animation-${n.animation}`,
    style: Dw(o.cssVars)
  }, {
    default: $i(() => [
      n.value ? (Ic(), Ew("div", {
        key: 0,
        ref: "root",
        class: Nc(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Vw((i) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        bi("div", {
          class: Nc(["mw-ui-dialog__overlay", o.overlayClasses]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close)
        }, null, 2),
        bi("div", Tw, [
          n.header ? xi(e.$slots, "header", { key: 0 }, () => [
            Ao(u, { class: "mw-ui-dialog__header" }, {
              default: $i(() => [
                Ao(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Ao(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: $i(() => [
                    Ao(l, {
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
            Ao(g)
          ]) : Uc("", !0),
          bi("div", Bw, [
            xi(e.$slots, "default")
          ]),
          xi(e.$slots, "footer")
        ])
      ], 34)) : Uc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const nt = /* @__PURE__ */ Y($w, [["render", Pw]]);
const Fw = {
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
}, zc = window.Vue.renderSlot, Mw = window.Vue.resolveComponent, Js = window.Vue.openBlock, Vi = window.Vue.createBlock, Rc = window.Vue.createCommentVNode, Nw = window.Vue.resolveDynamicComponent, Uw = window.Vue.toDisplayString, Iw = window.Vue.mergeProps, zw = window.Vue.withModifiers, Rw = window.Vue.createElementVNode, Ow = window.Vue.normalizeClass, Hw = window.Vue.createElementBlock, jw = { class: "mw-ui-input__content" };
function qw(e, t, n, o, s, a) {
  const r = Mw("mw-icon");
  return Js(), Hw("div", {
    class: Ow(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Rw("div", jw, [
      zc(e.$slots, "icon", {}, () => [
        n.icon ? (Js(), Vi(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Rc("", !0)
      ]),
      (Js(), Vi(Nw(n.type === "textarea" ? n.type : "input"), Iw({
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
        textContent: Uw(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      zc(e.$slots, "indicator", {}, () => [
        n.indicator ? (Js(), Vi(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = zw((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Rc("", !0)
      ])
    ])
  ], 2);
}
const ti = /* @__PURE__ */ Y(Fw, [["render", qw]]);
const Gw = {
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
    mwIconClose: Ls,
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
      notice: ww,
      warning: Rp,
      success: ei,
      error: _w
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
}, Ei = window.Vue.renderSlot, Qs = window.Vue.resolveComponent, Oc = window.Vue.createVNode, Hc = window.Vue.withCtx, jc = window.Vue.openBlock, qc = window.Vue.createBlock, Gc = window.Vue.createCommentVNode, Xw = window.Vue.normalizeClass;
function Ww(e, t, n, o, s, a) {
  const r = Qs("mw-icon"), l = Qs("mw-col"), u = Qs("mw-button"), g = Qs("mw-row");
  return e.shown ? (jc(), qc(g, {
    key: 0,
    class: Xw([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Hc(() => [
      Ei(e.$slots, "icon", {}, () => [
        Oc(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Oc(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Hc(() => [
          Ei(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Ei(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (jc(), qc(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Gc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Gc("", !0);
}
const Kw = /* @__PURE__ */ Y(Gw, [["render", Ww]]);
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
const Yw = {}, Jw = window.Vue.createElementVNode, Qw = window.Vue.openBlock, Zw = window.Vue.createElementBlock, e0 = { class: "mw-ui-spinner" }, t0 = /* @__PURE__ */ Jw("div", { class: "mw-ui-spinner__bounce" }, null, -1), n0 = [
  t0
];
function o0(e, t) {
  return Qw(), Zw("div", e0, n0);
}
const ze = /* @__PURE__ */ Y(Yw, [["render", o0]]), Ze = {
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
const s0 = window.Vue.computed, a0 = {
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
      default: Op
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
    const n = s0(() => {
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
}, Xc = window.Vue.normalizeStyle, Wc = window.Vue.openBlock, i0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const r0 = window.Vue.resolveComponent, l0 = window.Vue.createBlock;
function c0(e, t, n, o, s, a) {
  const r = r0("mw-ui-icon");
  return n.thumbnail ? (Wc(), i0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Xc(o.style)
  }, null, 4)) : (Wc(), l0(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Xc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Hl = /* @__PURE__ */ Y(a0, [["render", c0]]);
const u0 = {
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
}, d0 = window.Vue.vModelRadio, Za = window.Vue.createElementVNode, g0 = window.Vue.withDirectives, p0 = window.Vue.toDisplayString, m0 = window.Vue.resolveComponent, h0 = window.Vue.normalizeClass, f0 = window.Vue.withCtx, w0 = window.Vue.openBlock, _0 = window.Vue.createBlock, v0 = { class: "mw-ui-radio__controls" }, S0 = ["id", "disabled", "name", "value"], y0 = /* @__PURE__ */ Za("span", { class: "mw-ui-radio__controls__icon" }, null, -1), C0 = ["for", "textContent"];
function k0(e, t, n, o, s, a) {
  const r = m0("mw-row");
  return w0(), _0(r, {
    class: h0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: f0(() => [
      Za("div", v0, [
        g0(Za("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, S0), [
          [d0, a.inputModel]
        ]),
        y0
      ]),
      Za("label", {
        for: n.id,
        class: "ps-2",
        textContent: p0(n.label)
      }, null, 8, C0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Vl = /* @__PURE__ */ Y(u0, [["render", k0]]), Kc = window.Vue.h, b0 = {
  name: "MwRadioGroup",
  components: { MwRadio: Vl },
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
      (o) => Kc(Vl, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Kc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const x0 = {
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
}, Yc = window.Vue.normalizeClass, Jc = window.Vue.normalizeStyle, $0 = window.Vue.createElementVNode, V0 = window.Vue.openBlock, E0 = window.Vue.createElementBlock, A0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function D0(e, t, n, o, s, a) {
  return V0(), E0("div", {
    class: Yc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Jc(a.containerStyles)
  }, [
    $0("div", {
      class: Yc(["mw-progress-bar__bar", a.barClass]),
      style: Jc(a.barStyles)
    }, null, 6)
  ], 14, A0);
}
const Hp = /* @__PURE__ */ Y(x0, [["render", D0]]), L0 = (e, t, n, o) => (s) => {
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
}, T0 = (e, t, n, o) => ({ initiateDrag: L0(
  e,
  t,
  n,
  o
) }), B0 = window.Vue.ref, Qc = window.Vue.computed, P0 = (e, t, n, o) => {
  const s = B0(0), a = Qc(
    () => t.value > e.value
  ), r = Qc(
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
const Zs = window.Vue.ref, F0 = window.Vue.onMounted, Zc = window.Vue.computed, M0 = window.Vue.nextTick, N0 = {
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
    const t = Zs(!0), n = Zs(null), o = Zc(
      () => Math.min(e.minHeight, s.value)
    ), s = Zs(1), { initiateDrag: a } = T0(
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
    } = P0(o, s, n, t), c = () => g(u.value + 1), d = Zs(null), p = Zc(() => ({
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
    return F0(() => k(this, null, function* () {
      var f;
      yield M0(), s.value = n.value.scrollHeight, (f = d.value) == null || f.addEventListener(
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
      mwIconCollapse: vw,
      mwIconExpand: xl,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, U0 = window.Vue.renderSlot, I0 = window.Vue.normalizeClass, ea = window.Vue.createElementVNode, z0 = window.Vue.resolveComponent, R0 = window.Vue.createVNode, Ai = window.Vue.openBlock, O0 = window.Vue.createBlock, eu = window.Vue.createCommentVNode, tu = window.Vue.createElementBlock, H0 = window.Vue.normalizeStyle, j0 = { class: "mw-ui-expandable-content__container" }, q0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, G0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function X0(e, t, n, o, s, a) {
  const r = z0("mw-button");
  return Ai(), tu("div", {
    class: "mw-ui-expandable-content",
    style: H0(o.cssVars)
  }, [
    ea("div", j0, [
      ea("div", {
        ref: "contentRef",
        class: I0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        U0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Ai(), tu("div", q0, [
        R0(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Ai(), O0(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : eu("", !0)
      ])) : eu("", !0)
    ]),
    ea("div", G0, [
      ea("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const W0 = /* @__PURE__ */ Y(N0, [["render", X0]]);
const ta = window.Vue.computed, K0 = {
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
}, nu = window.Vue.createElementVNode, ou = window.Vue.normalizeStyle, Y0 = window.Vue.openBlock, J0 = window.Vue.createElementBlock, Q0 = ["width", "height", "viewport"], Z0 = ["r", "cx", "cy", "stroke-dasharray"], e1 = ["r", "cx", "cy", "stroke-dasharray"];
function t1(e, t, n, o, s, a) {
  return Y0(), J0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: ou(o.cssVars)
  }, [
    nu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Z0),
    nu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: ou({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, e1)
  ], 12, Q0);
}
const n1 = /* @__PURE__ */ Y(K0, [["render", t1]]), o1 = window.Vue.ref, nn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, on = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${nn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${nn.tablet}px) and (max-width: ${nn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${nn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${nn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${nn.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${nn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${nn["desktop-wide"]}px)`
}, Di = {
  mobile: () => matchMedia(on.mobile).matches,
  tablet: () => matchMedia(on.tablet).matches,
  desktop: () => matchMedia(on.desktop).matches,
  desktopwide: () => matchMedia(on["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(on["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(on["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(on["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(on["desktop-and-down"]).matches
}, s1 = {
  install: (e) => {
    const t = () => {
      for (let o in Di)
        Di.hasOwnProperty(o) && (n.value[o] = Di[o]());
    }, n = o1({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Xe(ie({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, a1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Xe(ie({}, e.config.globalProperties.$mwui || {}), {
      colors: Ze
    }), e.provide("colors", Ze);
  }
};
class So extends Error {
}
const i1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new So();
}), jp = { assertUser: i1 };
const r1 = window.Vue.resolveDirective, Do = window.Vue.createElementVNode, su = window.Vue.withDirectives, l1 = window.Vue.toDisplayString, c1 = window.Vue.unref, au = window.Vue.withCtx, u1 = window.Vue.openBlock, d1 = window.Vue.createBlock, g1 = window.Vue.createCommentVNode, p1 = { class: "pa-4 sx-login-dialog__header" }, m1 = { class: "sx-login-dialog__body px-6 pb-4" }, h1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, f1 = ["href"], w1 = window.Vue.computed, _1 = window.Vue.ref, v1 = window.Vuex.useStore, S1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = v1(), n = w1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = _1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = r1("i18n");
      return n.value ? (u1(), d1(c1(nt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: au(() => [
          Do("div", p1, [
            su(Do("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: au(() => [
          su(Do("div", m1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          Do("div", h1, [
            Do("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, l1(a.$i18n("cx-sx-login-dialog-button-label")), 9, f1)
          ])
        ]),
        _: 1
      })) : g1("", !0);
    };
  }
}, j = new mw.cx.SiteMapper(), y1 = mw.util.getUrl, C1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class ai {
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
const na = "original", oa = "empty", k1 = {
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
    return k1[t] || t;
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Xe(ie({}, a), {
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
const iu = (e) => {
  var n;
  const t = ni(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ni = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, qn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), qp = (e) => {
  const t = ni(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = b1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, b1 = (e) => {
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
}, Gp = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Xp = (e) => {
  const t = Gp(e);
  return t == null ? void 0 : t.targetExists;
};
class Li {
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
      (a) => qn(a)
    );
    s && Xp(s) && (this.blockTemplateAdaptationInfo[t] = Gp(s));
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
      (t) => qn(t)
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
    return this.isBlockTemplate ? iu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => qn(o));
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
    return n && iu(n) || "";
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
      (a) => qn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Li({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Li({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Li({
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
        (s) => qn(s)
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
const x1 = [
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
], $1 = (e, t, n) => {
  let o, s, a, r, l;
  return !e || !t ? 0 : e === t ? 1 : (s = r = ru(e, n), a = l = ru(t, n), l.length > r.length && (s = l, a = r), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, ru = function(e, t) {
  return e ? x1.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Wp = 95, V1 = 85, E1 = [
  { status: "failure", value: 100 - Wp },
  { status: "warning", value: 100 - V1 },
  { status: "success", value: 100 }
], Kp = (e, t, n) => {
  const o = lu(e).textContent, s = lu(t).textContent, a = 100 - 100 * $1(s, o, n);
  return Math.ceil(a);
}, A1 = (e) => E1.find((t) => e <= t.value).status, D1 = (e, t) => Kp(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), L1 = () => (100 - Wp) / 100, lu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, xt = {
  calculateScore: Kp,
  getScoreStatus: A1,
  getMTScoreForPageSection: D1,
  getMtModificationThreshold: L1
}, sa = "__LEAD_SECTION__";
class El {
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
    return n instanceof Ue ? n.transclusionNode.outerHTML : n instanceof yn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ue ? t.blockTemplateSelected = !1 : t instanceof yn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ue ? n.blockTemplateSelected = !0 : n instanceof yn && (n.selected = !0);
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ue ? n.blockTemplateProposedTranslations[t] || "" : n instanceof yn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ue ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof yn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = xt.getMTScoreForPageSection(this, t) / 100;
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
class jl extends ai {
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
    return El.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? El.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const ft = "previous-edits", $t = "popular", et = "topic", ge = "collections", ht = "automatic", cu = window.Vue.ref, T1 = mw.loader.require("ext.cx.articletopics"), aa = {
  type: ht,
  id: ft
}, Yp = () => {
  const e = cu(
    T1.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = cu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const r = s == null ? void 0 : s.toLowerCase(), l = a == null ? void 0 : a.toLowerCase();
    return r === et ? e.value.some((u) => u === a) ? { type: r, id: l } : (t.value = !0, aa) : r === ge ? { type: r, id: a } : l === ft ? {
      type: ht,
      id: ft
    } : l === $t ? {
      type: ht,
      id: $t
    } : l === ge ? {
      type: ht,
      id: ge
    } : aa;
  }, isDefaultFilter: ({ type: s, id: a }) => s === aa.type && a === aa.id };
}, B1 = window.Vue.inject, P1 = window.Vue.reactive;
var F1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Jp = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(F1, function() {
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
              for (let Lt = 0; Lt < V.length; Lt++) {
                const Tt = V[Lt]();
                if (Tt === null)
                  return f = N, null;
                Ee.push(Tt);
              }
              return Ee;
            }
            function S(V, N) {
              return () => {
                const Ee = f, Lt = [];
                let Tt = N();
                for (; Tt !== null; )
                  Lt.push(Tt), Tt = N();
                return Lt.length < V ? (f = Ee, null) : Lt;
              };
            }
            function y(V) {
              const N = V.length;
              return () => {
                let Ee = null;
                return m.slice(f, f + N) === V && (Ee = V, f += N), Ee;
              };
            }
            function b(V) {
              return () => {
                const N = m.slice(f).match(V);
                return N === null ? null : (f += N[0].length, N[0]);
              };
            }
            const x = b(/^\s+/), F = y("|"), E = y(":"), P = y("\\"), J = b(/^./), B = y("$"), I = b(/^\d+/), Q = y('"'), X = y("'"), ot = b(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Le = b(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Vt = _([wt, b(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function wt() {
              const V = w([P, J]);
              return V === null ? null : V[1];
            }
            const Eo = _([wt, Le]), $n = _([wt, ot]);
            function Et() {
              const V = w([B, I]);
              return V === null ? null : ["REPLACE", parseInt(V[1], 10) - 1];
            }
            const qe = (tn = b(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), At = function(V) {
              return V.toString();
            }, () => {
              const V = tn();
              return V === null ? null : At(V);
            });
            var tn, At;
            function Dt() {
              const V = w([F, S(0, Gs)]);
              if (V === null)
                return null;
              const N = V[1];
              return N.length > 1 ? ["CONCAT"].concat(N) : N[0];
            }
            function Ge() {
              const V = w([qe, E, Et]);
              return V === null ? null : [V[0], V[2]];
            }
            function v() {
              const V = w([qe, E, Gs]);
              return V === null ? null : [V[0], V[2]];
            }
            function A() {
              const V = w([qe, E]);
              return V === null ? null : [V[0], ""];
            }
            const D = _([function() {
              const V = w([_([Ge, v, A]), S(0, Dt)]);
              return V === null ? null : V[0].concat(V[1]);
            }, function() {
              const V = w([qe, S(0, Dt)]);
              return V === null ? null : [V[0]].concat(V[1]);
            }]), L = y("{{"), q = y("}}"), oe = y("[["), R = y("]]"), z = y("["), Z = y("]");
            function st() {
              const V = w([L, D, q]);
              return V === null ? null : V[1];
            }
            const fe = _([function() {
              const V = w([S(1, Gs), F, S(1, qs)]);
              return V === null ? null : [["CONCAT"].concat(V[0]), ["CONCAT"].concat(V[2])];
            }, function() {
              const V = w([S(1, Gs)]);
              return V === null ? null : [["CONCAT"].concat(V[0])];
            }]);
            function Cc() {
              let V = null;
              const N = w([oe, fe, R]);
              if (N !== null) {
                const Ee = N[1];
                V = ["WIKILINK"].concat(Ee);
              }
              return V;
            }
            function kc() {
              let V = null;
              const N = w([z, S(1, Eh), x, S(1, qs), Z]);
              return N !== null && (V = ["EXTLINK", N[1].length === 1 ? N[1][0] : ["CONCAT"].concat(N[1]), ["CONCAT"].concat(N[3])]), V;
            }
            const gi = b(/^[A-Za-z]+/);
            function bh() {
              const V = b(/^[^"]*/), N = w([Q, V, Q]);
              return N === null ? null : N[1];
            }
            function xh() {
              const V = b(/^[^']*/), N = w([X, V, X]);
              return N === null ? null : N[1];
            }
            function $h() {
              const V = b(/^\s*=\s*/), N = w([x, gi, V, _([bh, xh])]);
              return N === null ? null : [N[1], N[3]];
            }
            function Vh() {
              const V = S(0, $h)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], V);
            }
            const Eh = _([st, Et, Cc, kc, function() {
              const V = S(1, Vt)();
              return V === null ? null : V.join("");
            }]), qs = _([st, Et, Cc, kc, function() {
              let V = null;
              const N = f, Ee = y("<"), Lt = b(/^\/?/), Tt = b(/^\s*>/), pi = w([Ee, gi, Vh, Lt, Tt]);
              if (pi === null)
                return null;
              const xc = f, $c = pi[1], mi = S(0, qs)(), Ah = f, Vc = w([y("</"), gi, Tt]);
              if (Vc === null)
                return ["CONCAT", m.slice(N, xc)].concat(mi);
              const Dh = f, Lh = Vc[1], Ec = pi[2];
              if (function(Vn, Xs, hi, fi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Vn = Vn.toLowerCase()) !== (Xs = Xs.toLowerCase()) || fi.allowedHtmlElements.indexOf(Vn) === -1)
                  return !1;
                const Th = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Ws = 0, Bh = hi.length; Ws < Bh; Ws += 2) {
                  const wi = hi[Ws];
                  if (fi.allowedHtmlCommonAttributes.indexOf(wi) === -1 && (fi.allowedHtmlAttributesByElement[Vn] || []).indexOf(wi) === -1 || wi === "style" && hi[Ws + 1].search(Th) !== -1)
                    return !1;
                }
                return !0;
              }($c, Lh, Ec.slice(1)))
                V = ["HTMLELEMENT", $c, Ec].concat(mi);
              else {
                const Vn = (Xs) => Xs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                V = ["CONCAT", Vn(m.slice(N, xc))].concat(mi, Vn(m.slice(Ah, Dh)));
              }
              return V;
            }, function() {
              const V = S(1, $n)();
              return V === null ? null : V.join("");
            }]), Gs = _([st, Et, function() {
              const V = S(1, Eo)();
              return V === null ? null : V.join("");
            }]), bc = function() {
              const V = S(0, qs)();
              return V === null ? null : ["CONCAT"].concat(V);
            }();
            if (bc === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return bc;
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
})(Jp);
var M1 = Jp.exports;
const uu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Qp = Symbol("banana-context");
function ue() {
  const e = B1(Qp);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function N1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = P1(new M1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Qp, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = uu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = uu(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Gn = window.Vue.ref, U1 = window.Vue.computed, Ts = Gn(null), Bs = Gn(null), Ps = Gn(null), yo = Gn(null), Zp = Gn(null), em = Gn(null), tm = Gn(null), { validateFilters: I1, filtersValidatorError: z1 } = Yp(), R1 = U1(() => ({
  type: em.value,
  id: tm.value
})), nm = (e, t) => {
  em.value = e, tm.value = t, xs("filter-type", e), t && xs("filter-id", t);
}, O1 = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), Ps.value = e == null ? void 0 : e.sourceTitle, Ts.value = e == null ? void 0 : e.sourceLanguage, Bs.value = e == null ? void 0 : e.targetLanguage, e instanceof jl && (t.set("draft", !0), Zp.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), yo.value = e.sourceSectionTitle)), t.delete("title"), Fs(Object.fromEntries(t));
}, H1 = (e) => {
  yo.value = e, xs("section", e);
}, j1 = (e) => {
  Ps.value = e, xs("page", e);
}, Fs = (e) => {
  history.replaceState(
    {},
    document.title,
    y1("Special:ContentTranslation", e)
  );
}, q1 = () => {
  const e = ue(), t = new URLSearchParams(location.search);
  Ps.value = t.get("page"), Ts.value = t.get("from"), Bs.value = t.get("to"), yo.value = t.get("section");
  const n = I1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  nm(n.type, n.id), z1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, G1 = () => {
  const e = new URLSearchParams(location.search);
  yo.value = null, e.delete("section"), e.delete("title"), Fs(Object.fromEntries(e));
}, xs = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), Fs(Object.fromEntries(n));
}, X1 = (e) => new URLSearchParams(location.search).get(e), W1 = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ts.value = e, Bs.value = t, n.delete("title"), Fs(Object.fromEntries(n));
}, K1 = () => {
  Ts.value = null, Bs.value = null, Ps.value = null, yo.value = null, Fs(null);
}, M = () => ({
  setLanguageURLParams: W1,
  setSectionURLParam: H1,
  setTranslationURLParams: O1,
  initializeURLState: q1,
  clearURLParameters: K1,
  clearSectionURLParameter: G1,
  setUrlParam: xs,
  getUrlParam: X1,
  pageURLParameter: Ps,
  sourceLanguageURLParameter: Ts,
  targetLanguageURLParameter: Bs,
  sectionURLParameter: yo,
  draftURLParameter: Zp,
  setPageURLParam: j1,
  currentSuggestionFilters: R1,
  setFilterURLParams: nm
});
const Y1 = window.Vue.resolveDynamicComponent, du = window.Vue.openBlock, gu = window.Vue.createBlock, J1 = window.Vue.Transition, Lo = window.Vue.withCtx, To = window.Vue.createVNode, Q1 = window.Vue.resolveComponent, Ti = window.Vue.unref, Z1 = window.Vuex.useStore, e_ = window.Vue.computed, t_ = window.Vue.onMounted, n_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = M();
    t();
    const n = Z1(), o = e_(
      () => n.state.application.autoSavePending
    );
    return t_(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && jp.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof So && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const r = Q1("router-view");
      return du(), gu(Ti(Uf), { id: "contenttranslation" }, {
        default: Lo(() => [
          To(Ti(T), { class: "cx-container" }, {
            default: Lo(() => [
              To(Ti(C), { cols: "12" }, {
                default: Lo(() => [
                  To(r, null, {
                    default: Lo(({ Component: l, route: u }) => [
                      To(J1, {
                        name: u.meta.transitionName
                      }, {
                        default: Lo(() => [
                          (du(), gu(Y1(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      To(S1)
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
}, o_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, s_ = {
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
class om {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new om(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const pu = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Xe(ie({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class a_ {
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
    const t = pu((s = this.user) == null ? void 0 : s.content), n = pu((a = this.mt) == null ? void 0 : a.content);
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
class ql extends ai {
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
const ii = mw.user.isAnon() ? void 0 : "user", sm = (e) => {
  if (e === "assertuserfailed")
    throw new So();
};
function am(e, t = null) {
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
      var l;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new jl(Xe(ie({}, u), { status: e }))
      ) : r = a.map(
        (u) => new ql(Xe(ie({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield am(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function i_(e) {
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
      (a) => new a_(a)
    );
  });
}
function r_(e, t, n, o, s) {
  return k(this, null, function* () {
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
const l_ = (e, t, n) => {
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
}, c_ = ({
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
    assert: ii,
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
    sm(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new fo({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, u_ = ({
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
    assert: ii,
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
    sm(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new fo({ text: h, status: "error" });
  });
}, d_ = (e) => {
  const t = {
    assert: ii,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, g_ = () => {
  const e = {
    assert: ii,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new ql(n.cxcheckunreviewed.translation)
  );
}, p_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, m_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, h_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), tt = {
  fetchTranslations: am,
  fetchTranslationUnits: i_,
  fetchSegmentTranslation: r_,
  parseTemplateWikitext: l_,
  publishTranslation: c_,
  saveTranslation: u_,
  deleteTranslation: p_,
  fetchTranslatorStats: h_,
  deleteCXTranslation: m_,
  splitTranslation: d_,
  checkUnreviewedTranslations: g_
};
function f_(t) {
  return k(this, arguments, function* ({ commit: e }) {
    const n = yield tt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const w_ = {
  fetchTranslatorStats: f_
}, __ = {
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
}, v_ = {
  namespaced: !0,
  state: o_,
  getters: s_,
  actions: w_,
  mutations: __
}, im = [
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
], S_ = [
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
], y_ = [
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
], C_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], k_ = [
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
], b_ = {
  en: im,
  es: S_,
  bn: y_,
  fr: C_,
  de: k_
}, x_ = {
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
  appendixSectionTitles: b_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, $_ = {
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
class Co {
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
class Gl {
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
class rm extends Co {
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
    }), this.collection = new Gl(u);
  }
}
class lm extends kn {
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
    }), this.collection = new Gl(c);
  }
}
const V_ = im, Qt = (n) => k(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function E_() {
  return k(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield Qt({ urlPostfix: t, urlParams: e })) || []).map((o) => new Gl(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function A_(e, t, n, o = 24) {
  return k(this, null, function* () {
    return ((yield Qt({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (r) => new Co({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
const D_ = (e, t) => k(void 0, null, function* () {
  return ((yield Qt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new Co({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), L_ = (e, t) => k(void 0, null, function* () {
  const s = (yield Qt({ urlParams: {
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
}), T_ = (e, t, n = null) => k(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Qt({ urlParams: o })) || []).map(
    (a) => new rm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), B_ = (e, t, n = null) => k(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Qt({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new lm({
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
function P_(e, t, n) {
  return k(this, null, function* () {
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
function F_(e, t, n) {
  return k(this, null, function* () {
    const a = (yield Qt({ urlPostfix: "/sections", urlParams: {
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
function M_(e, t, n, o = 24) {
  return k(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Qt({ urlParams: s })) || []).map(
      (r) => new Co({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function N_(e, t, n, o = 24) {
  return k(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Qt({ urlPostfix: "/sections", urlParams: s })) || [];
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
function U_(e) {
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
    }, n = j.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function I_(e, t) {
  return k(this, null, function* () {
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
function z_(e, t) {
  return k(this, null, function* () {
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
function R_(e) {
  const t = V_.map((o) => encodeURIComponent(o)).join("|"), n = j.getCXServerUrl(
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
const O_ = (e, t, n) => {
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
}, H_ = (e) => {
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
}, j_ = () => {
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
  fetchFavorites: j_,
  fetchPageSuggestions: A_,
  fetchSectionSuggestion: P_,
  fetchSectionSuggestions: F_,
  fetchSuggestionSeeds: I_,
  fetchAppendixTargetSectionTitles: R_,
  fetchSuggestionSourceSections: z_,
  markFavorite: O_,
  unmarkFavorite: H_,
  fetchUserEdits: U_,
  fetchMostPopularPageSuggestions: D_,
  fetchMostPopularSectionSuggestions: L_,
  fetchPageSuggestionsByTopics: M_,
  fetchSectionSuggestionsByTopics: N_,
  fetchPageCollections: E_,
  fetchPageSuggestionsByCollections: T_,
  fetchSectionSuggestionsByCollections: B_
};
function q_(o, s) {
  return k(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield le.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const G_ = {
  fetchAppendixSectionTitles: q_
}, X_ = {
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
}, W_ = {
  namespaced: !0,
  state: x_,
  getters: $_,
  actions: G_,
  mutations: X_
}, K_ = {
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
}, Y_ = {
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
class ko {
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
class J_ {
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
function Q_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const Z_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), Q_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, ev = (e, t) => {
  let n, o;
  return t ? (n = Z_(e), o = n.$element.find(
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
}, tv = (e, t) => {
  const n = Array.from(
    ev(e, t)
  );
  return nv(n).map(
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
        (c) => new Ue({
          sentences: ov(c),
          node: c
        })
      ), i = !l;
      return new El({ id: u, title: l, subSections: g, isLeadSection: i });
    }
  );
}, nv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, ov = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new yn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), cm = {
  convertSegmentedContentToPageSections: tv
}, Xl = 120, sv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Xl,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return j.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => Xe(ie({}, i), { [c.to]: c.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (i, c) => Xe(ie({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = g[i.title] || l[i.title] || null;
      return new ko(Xe(ie({}, i), { _alias: c }));
    });
  });
}, av = (e, t) => {
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
    return l ? Object.freeze(new J_(l, r)) : null;
  });
}, iv = (e, t, n) => {
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
}, rv = (e, t, n, o = null) => um(
  e,
  t,
  n,
  o
).then(
  (s) => new ko({
    sections: cm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), um = (e, t, n, o = null) => {
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
}, lv = (e) => k(void 0, null, function* () {
  const t = C1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Xl,
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
  return yield j.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new ko(s))).catch((o) => []);
}), cv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Xl,
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
      (a) => new ko(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, bo = {
  fetchPages: sv,
  fetchLanguageTitles: av,
  fetchPageContent: rv,
  fetchSegmentedContent: um,
  fetchNearbyPages: lv,
  searchPagesByTitlePrefix: cv,
  fetchLanguageLinksForLanguage: iv
};
function uv() {
  return j.getLanguagePairs().then((e) => e.sourceLanguages);
}
function dv(e, t) {
  return k(this, null, function* () {
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
function gv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function pv(e, t, n, o) {
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
const ri = {
  fetchSupportedLanguageCodes: uv,
  fetchSupportedMTProviders: dv,
  fetchCXServerToken: gv,
  addWikibaseLink: pv
};
function mv({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const l = o.slice(r, r + s), u = bo.fetchPages(n, l).then(
      (g) => g.forEach((i) => t("addPage", i))
    );
    a.push(u);
  }
  return Promise.all(a);
}
function hv(n) {
  return k(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield ri.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function fv(o) {
  return k(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield bo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const wv = {
  fetchNearbyPages: fv,
  fetchPageMetadata: mv,
  fetchSupportedLanguageCodes: hv
}, _v = {
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
}, vv = {
  namespaced: !0,
  state: K_,
  getters: Y_,
  actions: wv,
  mutations: _v
}, Sv = {
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
}, yv = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, Cv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => qn(a)
  );
  return s && Xp(s) ? tt.parseTemplateWikitext(
    qp(s),
    n,
    t
  ) : Promise.resolve(null);
}, dm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => qn(a)
  );
  return s ? tt.parseTemplateWikitext(
    qp(s),
    n,
    t
  ) : Promise.resolve(null);
}, kv = (o) => k(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, r;
  t.cxServerToken || (yield ri.fetchCXServerToken().then(
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
}), bv = { getCXServerToken: kv }, xv = {
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
}, $v = {
  namespaced: !0,
  state: Sv,
  getters: yv,
  actions: bv,
  mutations: xv
}, Vv = window.Vuex.createStore, Ev = Vv({
  modules: { translator: v_, suggestions: W_, mediawiki: vv, application: $v }
});
function Av() {
  return gm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Dv = typeof Proxy == "function", Lv = "devtools-plugin:setup", Tv = "plugin:settings:set";
let Xn, Al;
function Bv() {
  var e;
  return Xn !== void 0 || (typeof window != "undefined" && window.performance ? (Xn = !0, Al = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Xn = !0, Al = global.perf_hooks.performance) : Xn = !1), Xn;
}
function Pv() {
  return Bv() ? Al.now() : Date.now();
}
class Fv {
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
        return Pv();
      }
    }, n && n.on(Tv, (r, l) => {
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
    return k(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Mv(e, t) {
  const n = e, o = gm(), s = Av(), a = Dv && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Lv, e, t);
  else {
    const r = a ? new Fv(n, s) : null;
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
const pm = window.Vue.getCurrentInstance, _o = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const bt = window.Vue.computed, Cs = window.Vue.unref, Nv = window.Vue.watchEffect, mm = window.Vue.defineComponent, Uv = window.Vue.reactive, hm = window.Vue.h, Bi = window.Vue.provide, Iv = window.Vue.ref, fm = window.Vue.watch, zv = window.Vue.shallowRef, Rv = window.Vue.shallowReactive, Ov = window.Vue.nextTick, Jt = typeof window != "undefined";
function Hv(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const G = Object.assign;
function Pi(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Re(s) ? s.map(e) : e(s);
  }
  return n;
}
const ks = () => {
}, Re = Array.isArray;
function O(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const jv = /\/$/, qv = (e) => e.replace(jv, "");
function Fi(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Wv(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Gv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function mu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function hu(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && bn(t.matched[o], n.matched[s]) && wm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function bn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Xv(e[n], t[n]))
      return !1;
  return !0;
}
function Xv(e, t) {
  return Re(e) ? fu(e, t) : Re(t) ? fu(t, e) : e === t;
}
function fu(e, t) {
  return Re(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Wv(e, t) {
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
var $s;
(function(e) {
  e.pop = "pop", e.push = "push";
})($s || ($s = {}));
var bs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(bs || (bs = {}));
function Kv(e) {
  if (!e)
    if (Jt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), qv(e);
}
const Yv = /^[^#]+#/;
function Jv(e, t) {
  return e.replace(Yv, "#") + t;
}
function Qv(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const li = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Zv(e) {
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
    t = Qv(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function wu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Dl = /* @__PURE__ */ new Map();
function eS(e, t) {
  Dl.set(e, t);
}
function tS(e) {
  const t = Dl.get(e);
  return Dl.delete(e), t;
}
let nS = () => location.protocol + "//" + location.host;
function _m(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), mu(u, "");
  }
  return mu(n, e) + o + s;
}
function oS(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: d }) => {
    const p = _m(e, location), m = n.value, h = t.value;
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
        type: $s.pop,
        direction: f ? f > 0 ? bs.forward : bs.back : bs.unknown
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
    d.state && d.replaceState(G({}, d.state, { scroll: li() }), "");
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
function _u(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? li() : null
  };
}
function sS(e) {
  const { history: t, location: n } = window, o = {
    value: _m(e, n)
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
    const c = e.indexOf("#"), d = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : nS() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? O("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](d);
    }
  }
  function r(u, g) {
    const i = G({}, t.state, _u(
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
        scroll: li()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && O(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = G({}, _u(o.value, u, null), { position: i.position + 1 }, g);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function aS(e) {
  e = Kv(e);
  const t = sS(e), n = oS(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = G({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Jv.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function iS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && O(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), aS(e);
}
function rS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function vm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const sn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Ll = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var vu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(vu || (vu = {}));
const lS = {
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
    return `Redirected from "${e.fullPath}" to "${uS(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? G(new Error(lS[e](t)), {
    type: e,
    [Ll]: !0
  }, t) : G(new Error(), {
    type: e,
    [Ll]: !0
  }, t);
}
function Bt(e, t) {
  return e instanceof Error && Ll in e && (t == null || !!(e.type & t));
}
const cS = ["params", "query", "hash"];
function uS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of cS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Su = "[^/]+?", dS = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, gS = /[.+*?^${}()[\]/\\]/g;
function pS(e, t) {
  const n = G({}, dS, t), o = [];
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
        c || (s += "/"), s += d.value.replace(gS, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = d;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || Su;
        if (w !== Su) {
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
          if (Re(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = Re(_) ? _.join("/") : _;
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
function mS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function hS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = mS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (yu(o))
      return 1;
    if (yu(s))
      return -1;
  }
  return s.length - o.length;
}
function yu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const fS = {
  type: 0,
  value: ""
}, wS = /[a-zA-Z0-9_]/;
function _S(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[fS]];
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
        u === "(" ? n = 2 : wS.test(u) ? d() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function vS(e, t, n) {
  const o = pS(_S(e.path), n);
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
function SS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = bu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, d) {
    const p = !d, m = yS(i);
    ({}).NODE_ENV !== "production" && xS(m, c), m.aliasOf = d && d.record;
    const h = bu(t, i), f = [
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
        const b = c.record.path, x = b[b.length - 1] === "/" ? "" : "/";
        S.path = c.record.path + (y && x + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = vS(S, c, h), {}.NODE_ENV !== "production" && c && y[0] === "/" && $S(_, c), d ? (d.alias.push(_), {}.NODE_ENV !== "production" && bS(d, _)) : (w = w || _, w !== _ && w.alias.push(_), p && i.name && !ku(_) && r(i.name)), m.children) {
        const b = m.children;
        for (let x = 0; x < b.length; x++)
          a(b[x], _, d && d.children[x]);
      }
      d = d || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      r(w);
    } : ks;
  }
  function r(i) {
    if (vm(i)) {
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
    for (; c < n.length && hS(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !Sm(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !ku(i) && o.set(i.record.name, i);
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
        Cu(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Cu(i.params, d.keys.map((w) => w.name))
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
      meta: kS(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: g, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Cu(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function yS(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: CS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function CS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function ku(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function kS(e) {
  return e.reduce((t, n) => G(t, n.meta), {});
}
function bu(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Tl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function bS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Tl.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Tl.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function xS(e, t) {
  t && t.record.name && !e.name && !e.path && O(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function $S(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Tl.bind(null, n)))
      return O(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Sm(e, t) {
  return t.children.some((n) => n === e || Sm(e, n));
}
const ym = /#/g, VS = /&/g, ES = /\//g, AS = /=/g, DS = /\?/g, Cm = /\+/g, LS = /%5B/g, TS = /%5D/g, km = /%5E/g, BS = /%60/g, bm = /%7B/g, PS = /%7C/g, xm = /%7D/g, FS = /%20/g;
function Wl(e) {
  return encodeURI("" + e).replace(PS, "|").replace(LS, "[").replace(TS, "]");
}
function MS(e) {
  return Wl(e).replace(bm, "{").replace(xm, "}").replace(km, "^");
}
function Bl(e) {
  return Wl(e).replace(Cm, "%2B").replace(FS, "+").replace(ym, "%23").replace(VS, "%26").replace(BS, "`").replace(bm, "{").replace(xm, "}").replace(km, "^");
}
function NS(e) {
  return Bl(e).replace(AS, "%3D");
}
function US(e) {
  return Wl(e).replace(ym, "%23").replace(DS, "%3F");
}
function IS(e) {
  return e == null ? "" : US(e).replace(ES, "%2F");
}
function Vs(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && O(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function zS(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Cm, " "), r = a.indexOf("="), l = Vs(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : Vs(a.slice(r + 1));
    if (l in t) {
      let g = t[l];
      Re(g) || (g = t[l] = [g]), g.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function xu(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = NS(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Re(o) ? o.map((a) => a && Bl(a)) : [o && Bl(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function RS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Re(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const OS = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), $u = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ci = Symbol({}.NODE_ENV !== "production" ? "router" : ""), $m = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Pl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Bo() {
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
      })) : c instanceof Error ? l(c) : rS(c) ? l(vo(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? HS(u, t, n) : u);
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
function HS(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && O(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Mi(e, t, n, o) {
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
        if (jS(l)) {
          const g = (l.__vccOpts || l)[t];
          g && s.push(Cn(g, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (O(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Hv(g) ? g.default : g;
            a.components[r] = i;
            const d = (i.__vccOpts || i)[t];
            return d && Cn(d, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function jS(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Vu(e) {
  const t = _o(ci), n = _o($m), o = bt(() => t.resolve(Cs(e.to))), s = bt(() => {
    const { matched: u } = o.value, { length: g } = u, i = u[g - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const d = c.findIndex(bn.bind(null, i));
    if (d > -1)
      return d;
    const p = Eu(u[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Eu(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(bn.bind(null, u[g - 2])) : d
    );
  }), a = bt(() => s.value > -1 && WS(n.params, o.value.params)), r = bt(() => s.value > -1 && s.value === n.matched.length - 1 && wm(n.params, o.value.params));
  function l(u = {}) {
    return XS(u) ? t[Cs(e.replace) ? "replace" : "push"](
      Cs(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ks) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Jt) {
    const u = pm();
    if (u) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(g), Nv(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: bt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const qS = /* @__PURE__ */ mm({
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
  useLink: Vu,
  setup(e, { slots: t }) {
    const n = Uv(Vu(e)), { options: o } = _o(ci), s = bt(() => ({
      [Au(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Au(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : hm("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), GS = qS;
function XS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function WS(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Re(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Eu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Au = (e, t, n) => e != null ? e : t != null ? t : n, KS = /* @__PURE__ */ mm({
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
    ({}).NODE_ENV !== "production" && JS();
    const o = _o(Pl), s = bt(() => e.route || o.value), a = _o($u, 0), r = bt(() => {
      let g = Cs(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[g]) && !c.components; )
        g++;
      return g;
    }), l = bt(() => s.value.matched[r.value]);
    Bi($u, bt(() => r.value + 1)), Bi(OS, l), Bi(Pl, s);
    const u = Iv();
    return fm(() => [u.value, l.value, e.name], ([g, i, c], [d, p, m]) => {
      i && (i.instances[c] = g, p && p !== i && g && g === d && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), g && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !bn(i, p) || !d) && (i.enterCallbacks[c] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, i = e.name, c = l.value, d = c && c.components[i];
      if (!d)
        return Du(n.default, { Component: d, route: g });
      const p = c.props[i], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, f = hm(d, G({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && Jt && f.ref) {
        const _ = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Re(f.ref) ? f.ref.map((S) => S.i) : [f.ref.i]).forEach((S) => {
          S.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Du(n.default, { Component: f, route: g }) || f
      );
    };
  }
});
function Du(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const YS = KS;
function JS() {
  const e = pm(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function Po(e, t) {
  const n = G({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => iy(o, ["instances", "children", "aliasOf"]))
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
let QS = 0;
function ZS(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = QS++;
  Mv({
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
        value: Po(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const d = c.__vrv_devtools;
        i.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Vm
        });
      }
      Re(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((d) => {
        let p = Dm, m = "";
        d.isExactActive ? (p = Am, m = "This is exactly active") : d.isActive && (p = Em, m = "This link is active"), i.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), fm(t.currentRoute, () => {
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
        from: Po(c, "Current Location during this navigation"),
        to: Po(i, "Target location")
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
      }, p.status = ia("❌")) : p.status = ia("✅"), p.from = Po(c, "Current Location during this navigation"), p.to = Po(i, "Target location"), s.addTimelineEvent({
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
      c.forEach(Bm), i.filter && (c = c.filter((d) => (
        // save matches state based on the payload
        Fl(d, i.filter.toLowerCase())
      ))), c.forEach((d) => Tm(d, t.currentRoute.value)), i.rootNodes = c.map(Lm);
    }
    let g;
    s.on.getInspectorTree((i) => {
      g = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        d && (i.state = {
          options: ty(d)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function ey(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ty(e) {
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
        display: e.keys.map((o) => `${o.name}${ey(o)}`).join(" "),
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
const Vm = 15485081, Em = 2450411, Am = 8702998, ny = 2282478, Dm = 16486972, oy = 6710886;
function Lm(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: ny
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Dm
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Vm
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Am
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Em
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: oy
  });
  let o = n.__vd_id;
  return o == null && (o = String(sy++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Lm)
  };
}
let sy = 0;
const ay = /^\/(.*)\/([a-z]*)$/;
function Tm(e, t) {
  const n = t.matched.length && bn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => bn(o, e.record))), e.children.forEach((o) => Tm(o, t));
}
function Bm(e) {
  e.__vd_match = !1, e.children.forEach(Bm);
}
function Fl(e, t) {
  const n = String(e.re).match(ay);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Fl(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Vs(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Fl(r, t));
}
function iy(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function ry(e) {
  const t = SS(e.routes, e), n = e.parseQuery || zS, o = e.stringifyQuery || xu, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Bo(), r = Bo(), l = Bo(), u = zv(sn);
  let g = sn;
  Jt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Pi.bind(null, (v) => "" + v), c = Pi.bind(null, IS), d = (
    // @ts-expect-error: intentionally avoid the type check
    Pi.bind(null, Vs)
  );
  function p(v, A) {
    let D, L;
    return vm(v) ? (D = t.getRecordMatcher(v), L = A) : L = v, t.addRoute(L, D);
  }
  function m(v) {
    const A = t.getRecordMatcher(v);
    A ? t.removeRoute(A) : {}.NODE_ENV !== "production" && O(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, A) {
    if (A = G({}, A || u.value), typeof v == "string") {
      const z = Fi(n, v, A.path), Z = t.resolve({ path: z.path }, A), st = s.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? O(`Location "${v}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : Z.matched.length || O(`No match found for location with path "${v}"`)), G(z, Z, {
        params: d(Z.params),
        hash: Vs(z.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && O(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = G({}, v, {
        path: Fi(n, v.path, A.path).path
      });
    else {
      const z = G({}, v.params);
      for (const Z in z)
        z[Z] == null && delete z[Z];
      D = G({}, v, {
        params: c(z)
      }), A.params = c(A.params);
    }
    const L = t.resolve(D, A), q = v.hash || "";
    ({}).NODE_ENV !== "production" && q && !q.startsWith("#") && O(`A \`hash\` should always start with the character "#". Replace "${q}" with "#${q}".`), L.params = i(d(L.params));
    const oe = Gv(o, G({}, v, {
      hash: MS(q),
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
        o === xu ? RS(v.query) : v.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: R
    });
  }
  function w(v) {
    return typeof v == "string" ? Fi(n, v, u.value.path) : G({}, v);
  }
  function S(v, A) {
    if (g !== v)
      return vo(8, {
        from: A,
        to: v
      });
  }
  function y(v) {
    return F(v);
  }
  function b(v) {
    return y(G(w(v), { replace: !0 }));
  }
  function x(v) {
    const A = v.matched[v.matched.length - 1];
    if (A && A.redirect) {
      const { redirect: D } = A;
      let L = typeof D == "function" ? D(v) : D;
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
  function F(v, A) {
    const D = g = _(v), L = u.value, q = v.state, oe = v.force, R = v.replace === !0, z = x(D);
    if (z)
      return F(
        G(w(z), {
          state: typeof z == "object" ? G({}, q, z.state) : q,
          force: oe,
          replace: R
        }),
        // keep original redirectedFrom if it exists
        A || D
      );
    const Z = D;
    Z.redirectedFrom = A;
    let st;
    return !oe && hu(o, L, D) && (st = vo(16, { to: Z, from: L }), Et(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : J(Z, L)).catch((fe) => Bt(fe) ? (
      // navigation redirects still mark the router as ready
      Bt(
        fe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? fe : $n(fe)
    ) : (
      // reject any unknown error
      wt(fe, Z, L)
    )).then((fe) => {
      if (fe) {
        if (Bt(
          fe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          hu(o, _(fe.to), Z) && // and we have done it a couple of times
          A && // @ts-expect-error: added only in dev
          (A._count = A._count ? (
            // @ts-expect-error
            A._count + 1
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
            A || Z
          );
      } else
        fe = I(Z, L, !0, R, q);
      return B(Z, L, fe), fe;
    });
  }
  function E(v, A) {
    const D = S(v, A);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function P(v) {
    const A = At.values().next().value;
    return A && typeof A.runWithContext == "function" ? A.runWithContext(v) : v();
  }
  function J(v, A) {
    let D;
    const [L, q, oe] = ly(v, A);
    D = Mi(L.reverse(), "beforeRouteLeave", v, A);
    for (const z of L)
      z.leaveGuards.forEach((Z) => {
        D.push(Cn(Z, v, A));
      });
    const R = E.bind(null, v, A);
    return D.push(R), Ge(D).then(() => {
      D = [];
      for (const z of a.list())
        D.push(Cn(z, v, A));
      return D.push(R), Ge(D);
    }).then(() => {
      D = Mi(q, "beforeRouteUpdate", v, A);
      for (const z of q)
        z.updateGuards.forEach((Z) => {
          D.push(Cn(Z, v, A));
        });
      return D.push(R), Ge(D);
    }).then(() => {
      D = [];
      for (const z of oe)
        if (z.beforeEnter)
          if (Re(z.beforeEnter))
            for (const Z of z.beforeEnter)
              D.push(Cn(Z, v, A));
          else
            D.push(Cn(z.beforeEnter, v, A));
      return D.push(R), Ge(D);
    }).then(() => (v.matched.forEach((z) => z.enterCallbacks = {}), D = Mi(oe, "beforeRouteEnter", v, A), D.push(R), Ge(D))).then(() => {
      D = [];
      for (const z of r.list())
        D.push(Cn(z, v, A));
      return D.push(R), Ge(D);
    }).catch((z) => Bt(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function B(v, A, D) {
    l.list().forEach((L) => P(() => L(v, A, D)));
  }
  function I(v, A, D, L, q) {
    const oe = S(v, A);
    if (oe)
      return oe;
    const R = A === sn, z = Jt ? history.state : {};
    D && (L || R ? s.replace(v.fullPath, G({
      scroll: R && z && z.scroll
    }, q)) : s.push(v.fullPath, q)), u.value = v, Et(v, A, D, R), $n();
  }
  let Q;
  function X() {
    Q || (Q = s.listen((v, A, D) => {
      if (!Dt.listening)
        return;
      const L = _(v), q = x(L);
      if (q) {
        F(G(q, { replace: !0 }), L).catch(ks);
        return;
      }
      g = L;
      const oe = u.value;
      Jt && eS(wu(oe.fullPath, D.delta), li()), J(L, oe).catch((R) => Bt(
        R,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? R : Bt(
        R,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (F(
        R.to,
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        Bt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === $s.pop && s.go(-1, !1);
      }).catch(ks), Promise.reject()) : (D.delta && s.go(-D.delta, !1), wt(R, L, oe))).then((R) => {
        R = R || I(
          // after navigation, all matched components are resolved
          L,
          oe,
          !1
        ), R && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Bt(
          R,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === $s.pop && Bt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), B(L, oe, R);
      }).catch(ks);
    }));
  }
  let ot = Bo(), Le = Bo(), Vt;
  function wt(v, A, D) {
    $n(v);
    const L = Le.list();
    return L.length ? L.forEach((q) => q(v, A, D)) : ({}.NODE_ENV !== "production" && O("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function Eo() {
    return Vt && u.value !== sn ? Promise.resolve() : new Promise((v, A) => {
      ot.add([v, A]);
    });
  }
  function $n(v) {
    return Vt || (Vt = !v, X(), ot.list().forEach(([A, D]) => v ? D(v) : A()), ot.reset()), v;
  }
  function Et(v, A, D, L) {
    const { scrollBehavior: q } = e;
    if (!Jt || !q)
      return Promise.resolve();
    const oe = !D && tS(wu(v.fullPath, 0)) || (L || !D) && history.state && history.state.scroll || null;
    return Ov().then(() => q(v, A, oe)).then((R) => R && Zv(R)).catch((R) => wt(R, v, A));
  }
  const qe = (v) => s.go(v);
  let tn;
  const At = /* @__PURE__ */ new Set(), Dt = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: y,
    replace: b,
    go: qe,
    back: () => qe(-1),
    forward: () => qe(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: Le.add,
    isReady: Eo,
    install(v) {
      const A = this;
      v.component("RouterLink", GS), v.component("RouterView", YS), v.config.globalProperties.$router = A, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Cs(u)
      }), Jt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !tn && u.value === sn && (tn = !0, y(s.location).catch((q) => {
        ({}).NODE_ENV !== "production" && O("Unexpected error when starting the router:", q);
      }));
      const D = {};
      for (const q in sn)
        Object.defineProperty(D, q, {
          get: () => u.value[q],
          enumerable: !0
        });
      v.provide(ci, A), v.provide($m, Rv(D)), v.provide(Pl, u);
      const L = v.unmount;
      At.add(v), v.unmount = function() {
        At.delete(v), At.size < 1 && (g = sn, Q && Q(), Q = null, u.value = sn, tn = !1, Vt = !1), L();
      }, {}.NODE_ENV !== "production" && Jt && ZS(v, A, t);
    }
  };
  function Ge(v) {
    return v.reduce((A, D) => A.then(() => P(D)), Promise.resolve());
  }
  return Dt;
}
function ly(e, t) {
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
  return _o(ci);
}
const cy = {
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
}, uy = {
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
}, dy = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], gy = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, py = {
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
}, my = {
  languages: cy,
  scriptgroups: uy,
  rtlscripts: dy,
  regiongroups: gy,
  territories: py
};
var xe = my;
function Ms(e) {
  return !!xe.languages[e];
}
function xn(e) {
  return Ms(e) && xe.languages[e].length === 1 ? xe.languages[e][0] : !1;
}
function hy() {
  return xe.languages;
}
function Ns(e) {
  var t = xn(e);
  return t ? Ns(t) : Ms(e) ? xe.languages[e][0] : "Zyyy";
}
function Kl(e) {
  var t = xn(e);
  return t ? Kl(t) : Ms(e) && xe.languages[e][1] || "UNKNOWN";
}
function Es(e) {
  var t = xn(e);
  return t ? Es(t) : Ms(e) && xe.languages[e][2] || e;
}
function fy() {
  var e, t = {};
  for (e in xe.languages)
    xn(e) || (t[e] = Es(e));
  return t;
}
function Pm(e) {
  var t, n, o = [];
  for (t in xe.languages)
    if (!xn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Ns(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function wy(e) {
  return Pm([e]);
}
function Fm(e) {
  var t;
  for (t in xe.scriptgroups)
    if (xe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Yl(e) {
  return Fm(Ns(e));
}
function Mm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = xn(n) || n, a = Yl(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Nm(e) {
  var t, n, o, s = {};
  for (t in xe.languages)
    if (!xn(t)) {
      for (n = 0; n < e.length; n++)
        if (Kl(t).includes(e[n])) {
          o = Yl(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function _y(e) {
  return Nm([e]);
}
function vy(e) {
  var t, n, o, s = [];
  for (t = Mm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Sy(e, t) {
  var n = Es(e) || e, o = Es(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Um(e) {
  return xe.rtlscripts.includes(Ns(e));
}
function yy(e) {
  return Um(e) ? "rtl" : "ltr";
}
function Cy(e) {
  return xe.territories[e] || [];
}
function ky(e, t) {
  t.target ? xe.languages[e] = [t.target] : xe.languages[e] = [t.script, t.regions, t.autonym];
}
var U = {
  addLanguage: ky,
  getAutonym: Es,
  getAutonyms: fy,
  getDir: yy,
  getGroupOfScript: Fm,
  getLanguages: hy,
  getLanguagesByScriptGroup: Mm,
  getLanguagesByScriptGroupInRegion: _y,
  getLanguagesByScriptGroupInRegions: Nm,
  getLanguagesInScript: wy,
  getLanguagesInScripts: Pm,
  getLanguagesInTerritory: Cy,
  getRegions: Kl,
  getScript: Ns,
  getScriptGroupOfLanguage: Yl,
  isKnown: Ms,
  isRedirect: xn,
  isRtl: Um,
  sortByScriptGroup: vy,
  sortByAutonym: Sy
};
const by = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), g = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, xy = (e) => {
  const t = by(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const at = window.Vue.unref, Wn = window.Vue.createVNode, Pt = window.Vue.createElementVNode, Lu = window.Vue.renderSlot, Tu = window.Vue.withModifiers, Ni = window.Vue.toDisplayString, Ui = window.Vue.withCtx, $y = window.Vue.openBlock, Vy = window.Vue.createElementBlock, Ey = window.Vue.createCommentVNode, Ay = { class: "col shrink pe-4" }, Dy = { class: "col" }, Ly = { class: "cx-translation__details column justify-between ma-0" }, Ty = { class: "row ma-0" }, By = { class: "col grow" }, Py = { class: "col shrink ps-2" }, Fy = ["dir", "textContent"], My = ["dir", "textContent"], Ny = ["textContent"], Uy = window.Vuex.useStore, Iy = window.Vue.computed, Im = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: ai,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = Uy(), s = (l, u) => {
      const g = o.getters["mediawiki/getPage"](l, u);
      return g == null ? void 0 : g.thumbnail;
    }, a = ue(), r = Iy(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = xy(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? ($y(), Vy("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Tu((g) => l.$emit("click"), ["stop"]))
    }, [
      Pt("div", Ay, [
        Wn(at(Hl), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Pt("div", Dy, [
        Pt("div", Ly, [
          Pt("div", Ty, [
            Pt("div", By, [
              Lu(l.$slots, "title")
            ]),
            Pt("div", Py, [
              Wn(at(we), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Tu((g) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Lu(l.$slots, "mid-content"),
          Wn(at(T), { class: "cx-translation__footer ma-0" }, {
            default: Ui(() => [
              Wn(at(C), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Ui(() => [
                  Pt("span", {
                    class: "mw-ui-autonym",
                    dir: at(U.getDir)(e.translation.sourceLanguage),
                    textContent: Ni(at(U.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Fy),
                  Wn(at(we), {
                    icon: at(Ip),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Pt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: at(U.getDir)(e.translation.targetLanguage),
                    textContent: Ni(at(U.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, My)
                ]),
                _: 1
              }),
              Wn(at(C), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Ui(() => [
                  Pt("span", {
                    textContent: Ni(r.value)
                  }, null, 8, Ny)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Ey("", !0);
  }
};
const Fo = window.Vue.unref, Bu = window.Vue.toDisplayString, zy = window.Vue.normalizeClass, Ry = window.Vue.createElementVNode, Ii = window.Vue.openBlock, Oy = window.Vue.createElementBlock, Pu = window.Vue.createCommentVNode, Fu = window.Vue.createVNode, ra = window.Vue.withCtx, Mu = window.Vue.createBlock, Hy = ["lang", "textContent"], jy = ["lang", "textContent"], qy = window.Vue.computed, Gy = window.Vue.inject, Xy = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: jl,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Gy("colors").gray200, s = qy(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = _e(), { setTranslationURLParams: r } = M(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, g) => (Ii(), Mu(Im, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Fo(Up),
      onActionIconClicked: g[0] || (g[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: ra(() => [
        Ry("h5", {
          class: zy(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Bu(e.translation.sourceTitle)
        }, null, 10, Hy),
        e.translation.isLeadSectionTranslation ? Pu("", !0) : (Ii(), Oy("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Bu(e.translation.sourceSectionTitle)
        }, null, 8, jy))
      ]),
      "mid-content": ra(() => [
        e.translation.progress ? (Ii(), Mu(Fo(T), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: ra(() => [
            Fu(Fo(C), null, {
              default: ra(() => [
                Fu(Fo(Hp), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Fo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Pu("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Wy = window.Vue.computed, Ky = window.Vue.inject, Us = () => {
  const e = Ky("breakpoints");
  return { isDesktop: Wy(
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
const Nu = window.Vue.computed, Yy = window.Vuex.useStore;
function Is() {
  const e = Yy(), t = Nu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Nu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const Jy = (e, t) => {
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
}, Qy = window.Vuex.useStore, Jl = () => {
  const e = Qy(), {
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
}, Zy = window.Vuex.useStore, ui = () => {
  const e = Zy(), { sourceLanguage: t, targetLanguage: n } = H(e), o = (l) => {
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
class eC {
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
const tC = window.Vuex.useStore, Ql = window.Vue.ref, nC = Ql([]), oC = Ql([]);
let zi = !1, Uu = !1, Iu = !1, Ri = Ql(!1), Mo = null;
const la = {
  page: nC,
  section: oC
}, zm = () => {
  const e = tC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = () => k(void 0, null, function* () {
    let g = e.getters["translator/getTranslationsByStatus"]("published");
    if (g = g.filter(
      (i) => i.sourceLanguage === t.value
    ), g.length && !zi)
      return zi = !0, g.map(
        (i) => i.sourceTitle
      );
    if (zi = !0, !Uu) {
      const i = yield le.fetchUserEdits(t.value).then((c) => (Uu = !0, c));
      if (i.length)
        return i;
    }
    if (!Iu) {
      const i = yield le.fetchUserEdits(t.value).then((c) => (Iu = !0, c));
      if (i.length)
        return bo.fetchLanguageLinksForLanguage(
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
    return i || (i = new eC({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), la[g].value.push(i)), i;
  }, a = () => k(void 0, null, function* () {
    const g = yield le.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const i in la) {
      const c = s(i);
      c.seeds = [...c.seeds, ...g || []];
    }
  }), r = () => k(void 0, null, function* () {
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
  }), l = () => Mo || (Mo = r(), Mo.finally(() => {
    Mo = null;
  }));
  return { getSuggestionSeed: (g) => k(void 0, null, function* () {
    let i = s(g);
    i.seeds.length || (yield l());
    let c = i.shiftSeeds();
    return !c && !Ri.value && (yield a(), c = i.shiftSeeds(), Ri.value = !0), c;
  }), defaultSeedsFetched: Ri };
}, sC = 5;
function As(e) {
  return k(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < sC);
  });
}
const aC = window.Vuex.useStore, iC = () => {
  const e = aC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), { getSuggestionSeed: o } = zm(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ui(), l = {
    id: ft,
    type: ht
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => k(void 0, null, function* () {
      const c = [];
      return yield As(() => k(void 0, null, function* () {
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
    fetchSectionSuggestionsBasedOnEdits: (i) => k(void 0, null, function* () {
      const c = [];
      return yield As(() => k(void 0, null, function* () {
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
}, rC = window.Vuex.useStore, lC = () => {
  const e = rC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = M(), o = {
    id: $t,
    type: ht
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ui();
  return { fetchSectionSuggestionsPopular: (g) => k(void 0, null, function* () {
    const i = [];
    return yield As(() => k(void 0, null, function* () {
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
  }), fetchPageSuggestionsPopular: (g) => k(void 0, null, function* () {
    const i = [];
    return yield As(() => k(void 0, null, function* () {
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
}, Rm = window.Vue.ref, zu = Rm([]), Ru = Rm(!1), Om = () => ({ pageCollections: zu, fetchPageCollections: () => k(void 0, null, function* () {
  try {
    zu.value = yield le.fetchPageCollections(), Ru.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Ru });
class Ml {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const ca = window.Vue.computed, Ou = mw.loader.require("ext.cx.articletopics"), cC = (e) => new Ml({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: et
  }))
}), Zl = () => {
  const e = ue(), { currentSuggestionFilters: t, setFilterURLParams: n } = M(), o = {
    id: ft,
    type: ht,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: $t,
    type: ht,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: ge,
    type: ht,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: r, pageCollectionsFetched: l } = Om(), u = ca(() => {
    const w = new Ml({
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
    () => new Ml({
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
      ...Ou.map(cC)
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
      const y = Ou.flatMap((b) => b.topics).find((b) => b.topicId === w);
      return y ? y.orestopics : [];
    },
    waitingForPageCollectionsFetch: d
  };
}, uC = window.Vuex.useStore, dC = () => {
  const e = uC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ui(), { getOresTopics: l } = Zl();
  return {
    fetchPageSuggestionsByTopics: (i) => k(void 0, null, function* () {
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
    fetchSectionSuggestionsByTopics: (i) => k(void 0, null, function* () {
      const c = o.value.id, d = {
        id: c,
        type: et
      }, p = l(c), m = [];
      return yield As(() => k(void 0, null, function* () {
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
}, gC = window.Vuex.useStore, pC = window.Vue.computed, mC = () => {
  const e = gC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), s = pC(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== ge ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = ui();
  return {
    fetchSectionSuggestionsByCollections: () => k(void 0, null, function* () {
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
    fetchPageSuggestionsByCollections: () => k(void 0, null, function* () {
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
const ec = () => {
  const { currentSuggestionFilters: e } = M(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = iC(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = lC(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = dC(), {
    fetchPageSuggestionsByCollections: l,
    fetchSectionSuggestionsByCollections: u
  } = mC(), g = {
    [ft]: t,
    [$t]: o,
    [ge]: l,
    [et]: a
  }, i = {
    [ft]: n,
    [$t]: s,
    [ge]: u,
    [et]: r
  }, c = (m) => m.type === ht ? m.id : m.type;
  return {
    getFilterProvider: c,
    getCurrentPageSuggestionProvider: () => g[c(e.value)],
    getCurrentSectionSuggestionProvider: () => i[c(e.value)]
  };
}, hC = window.Vuex.useStore, tc = () => {
  const e = hC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Jl(), { sourceLanguageURLParameter: o } = M(), s = () => {
    const c = t(), d = e.state.suggestions.maxSuggestionsPerSlice;
    return d - c.length % d;
  }, a = () => {
    const c = n(), d = e.state.suggestions.maxSuggestionsPerSlice;
    return d - c.length % d;
  }, {
    getCurrentPageSuggestionProvider: r,
    getCurrentSectionSuggestionProvider: l
  } = ec(), u = (c) => {
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
    fetchNextSectionSuggestionsSlice: () => k(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const c = s(), p = yield l()(
        c
      );
      p.forEach(
        (m) => e.commit("suggestions/addSectionSuggestion", m)
      ), u(p), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => k(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const c = a(), p = yield r()(
        c
      );
      p.forEach(
        (m) => e.commit("suggestions/addPageSuggestion", m)
      ), u(p), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, fC = window.Vuex.useStore, nc = () => {
  const e = fC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = tc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Jl();
  return () => k(void 0, null, function* () {
    const { targetLanguage: a } = H(e), r = s(0), l = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, g = r.length === u, i = l.length === u;
    g && i || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, wC = window.Vuex.useStore, oc = () => {
  const e = wC();
  return (t, n, o) => k(void 0, null, function* () {
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
          return new Co({
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
}, Hu = window.Vue.computed, _C = window.Vuex.useStore, Zt = () => {
  const e = _C(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M(), s = Hu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Hu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, zs = window.Vuex.useStore, Rs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), r = j.getCurrentWikiLanguageCode();
  return a && t !== r ? (s = ie({ sx: !0 }, s), o && (s.section = o), location.href = j.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: vC, pageURLParameter: SC, sectionURLParameter: yC } = M(), Os = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), vC(t, n);
}, Hm = () => {
  const e = zs(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Is();
  return () => k(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = Jy(
      t.value,
      n.value
    );
    Rs(
      o,
      s,
      SC.value,
      yC.value
    ) || Os(e, o, s);
  });
}, jm = () => {
  const e = zs(), t = nc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = H(e);
    n === o && (n = a.value, o = s.value), Rs(
      n,
      o,
      null,
      null
    ) || (Os(e, n, o), t());
  };
}, CC = () => {
  const e = zs(), t = nc();
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
}, kC = () => {
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
}, bC = () => {
  const e = zs(), t = oc(), { currentLanguageTitleGroup: n, targetPageExists: o } = Zt();
  return (s, a) => k(void 0, null, function* () {
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
}, xC = window.Vuex.useStore, qm = [], $C = (e, t, n) => qm.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), VC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  qm.push(o);
}, EC = () => {
  const e = xC();
  return (t, n, o) => k(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !$C(t, n, o) && (s = yield le.fetchSectionSuggestion(
      t,
      o,
      n
    ), VC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, AC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', DC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', LC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', TC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', BC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', PC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', FC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', MC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', NC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', UC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', IC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', zC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', RC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', OC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', HC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', jC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', qC = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', GC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', XC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', WC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', KC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', YC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', JC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', QC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', ZC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', ek = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', tk = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', nk = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', ok = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Nl = AC, Gm = DC, sk = {
  ltr: LC,
  shouldFlip: !0
}, Xm = {
  ltr: TC,
  shouldFlip: !0
}, sc = {
  ltr: BC,
  shouldFlip: !0
}, ak = PC, Wm = FC, Km = MC, ik = NC, rk = UC, lk = IC, xo = zC, ac = RC, ic = OC, ck = HC, Ym = jC, uk = {
  langCodeMap: {
    ar: qC
  },
  default: GC
}, dk = XC, rc = {
  ltr: WC,
  shouldFlip: !0
}, gk = KC, Hs = {
  ltr: YC,
  shouldFlip: !0
}, lc = {
  ltr: JC,
  shouldFlip: !0
}, pk = {
  ltr: QC,
  shouldFlip: !0
}, Jm = ZC, mk = ek, hk = tk, fk = nk, Qm = ok, Zm = "cx-translation-session-position-", eh = () => Zm + mw.user.sessionId(), th = () => {
  const e = eh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, wk = function() {
  const e = th();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Zm)).forEach((n) => mw.storage.remove(n));
  const t = eh();
  mw.storage.set(t, e + 1);
};
let Ul = null;
function _k(e) {
  if (Ul)
    return Promise.resolve(Ul);
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
function vk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Sk(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = th(), u = {
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
  ) : g = _k(r).then((i) => {
    Ul = i, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: vk(i)
      })
    );
  }), g.then(() => {
    wk();
  });
}
const Oe = () => Sk, nh = window.Vue.ref, oh = nh(null), Il = nh(null), yk = (e) => {
  oh.value = e;
}, Ck = (e) => {
  Il.value = e;
}, cc = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = M(), s = Oe();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: oh.value,
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
      return Il.value && (r.event_context = Il.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: yk,
    setStartTranslationEventContext: Ck
  };
}, kk = window.Vuex.useStore, js = () => {
  const e = kk(), t = _e(), n = oc(), { setTranslationURLParams: o } = M(), { setStartTranslationEventSource: s, setStartTranslationEventContext: a } = cc();
  return (r, l, u, g, i = null) => k(void 0, null, function* () {
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
const ua = window.Vue.withModifiers, Oi = window.Vue.toDisplayString, Hi = window.Vue.createElementVNode, We = window.Vue.unref, da = window.Vue.openBlock, ju = window.Vue.createBlock;
window.Vue.createCommentVNode;
const an = window.Vue.createVNode, En = window.Vue.withCtx, qu = window.Vue.createElementBlock, bk = ["lang", "href", "textContent"], xk = {
  key: 1,
  class: "flex"
}, $k = { key: 2 }, Vk = window.Vuex.useStore, Gu = window.Vue.computed, Xu = window.Vue.ref, ji = window.Codex.CdxButton, qi = window.Codex.CdxIcon, Ek = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: ql,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Vk(), o = Xu(!0), s = Xu(null), a = Gu(() => {
      var f;
      return (f = s.value) == null ? void 0 : f.missingSections;
    }), r = Gu(
      () => a.value && Object.keys(a.value)[0]
    );
    EC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((f) => s.value = f).catch((f) => console.log(f)).finally(() => o.value = !1), _e(), Us();
    const { setTranslationURLParams: u, setSectionURLParam: g } = M(), i = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, c = js(), { sourceLanguage: d, targetLanguage: p } = H(n), m = kC(), h = (f) => {
      m(t.translation), c(
        t.translation.sourceTitle,
        d.value,
        p.value,
        "continue_published"
      ), f && g(f);
    };
    return (f, _) => (da(), ju(Im, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: i
    }, {
      title: En(() => [
        Hi("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: _[0] || (_[0] = ua(() => {
          }, ["stop"])),
          textContent: Oi(e.translation.sourceTitle)
        }, null, 8, bk)
      ]),
      "mid-content": En(() => [
        an(We(T), { class: "ma-0" }, {
          default: En(() => [
            an(We(C), null, {
              default: En(() => [
                o.value ? (da(), ju(We(ze), { key: 0 })) : a.value ? (da(), qu("div", xk, [
                  an(We(ji), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: _[1] || (_[1] = ua((w) => h(r.value), ["stop"]))
                  }, {
                    default: En(() => [
                      an(We(qi), {
                        class: "me-1",
                        icon: We(Nl)
                      }, null, 8, ["icon"]),
                      Hi("span", null, Oi(r.value), 1)
                    ]),
                    _: 1
                  }),
                  an(We(ji), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": f.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: _[2] || (_[2] = ua((w) => h(null), ["stop"]))
                  }, {
                    default: En(() => [
                      an(We(qi), { icon: We(ic) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (da(), qu("div", $k, [
                  an(We(ji), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: _[3] || (_[3] = ua((w) => h(null), ["stop"]))
                  }, {
                    default: En(() => [
                      an(We(qi), {
                        class: "me-1",
                        icon: We(Nl)
                      }, null, 8, ["icon"]),
                      Hi("span", null, Oi(f.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Wu = window.Vuex.useStore, Ak = () => {
  const e = Wu(), { commit: t } = Wu(), { sourceLanguage: n, targetLanguage: o } = H(e), s = Oe();
  return (a) => k(void 0, null, function* () {
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
const Dk = window.Vue.resolveDirective, Gi = window.Vue.createElementVNode, Lk = window.Vue.withDirectives, Xi = window.Vue.unref, Ku = window.Vue.createVNode, Yu = window.Vue.withCtx, Tk = window.Vue.openBlock, Bk = window.Vue.createBlock, Pk = { class: "pa-4" }, Fk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Mk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: ai,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Ak(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const g = Dk("i18n");
      return Tk(), Bk(Xi(nt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Yu(() => [
          Gi("div", Fk, [
            Ku(Xi(he), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Ku(Xi(he), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Yu(() => [
          Gi("div", Pk, [
            Lk(Gi("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Nk(e, t, n) {
  return k(this, null, function* () {
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
    return s.length ? s : n ? (yield Uk(t, n)).filter((r) => e.includes(r)) : [];
  });
}
function Ju(e, t, n) {
  return k(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(U.sortByAutonym) : (yield Nk(e, t, n)).sort(U.sortByAutonym);
  });
}
function Uk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Ik() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function zk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function Rk(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const Ok = window.Vue.computed;
function Hk(e, t) {
  const n = Ok(() => {
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
const Wi = window.Vue.ref, Qu = window.Vue.watch, jk = window.Vue.computed;
function qk(e, t, n) {
  const o = Wi(""), s = Wi(-1), a = Wi(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = jk(
    () => e.value ? t.value : [...n, ...t.value]
  ), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Qu(e, () => {
    s.value = -1;
  }), Qu(s, () => k(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: r, prev: u, langSelectorContainer: a, selectedLanguage: o };
}
function uc(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const ga = window.Vue.renderSlot, pe = window.Vue.unref, Gk = window.Vue.isRef, Zu = window.Vue.createVNode, No = window.Vue.withModifiers, Uo = window.Vue.withKeys, rn = window.Vue.createElementVNode, Xk = window.Vue.resolveDirective, pa = window.Vue.withDirectives, Ki = window.Vue.renderList, Yi = window.Vue.Fragment, Ft = window.Vue.openBlock, Mt = window.Vue.createElementBlock, ed = window.Vue.toDisplayString, ma = window.Vue.normalizeClass, Ji = window.Vue.createCommentVNode, Wk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Kk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Yk = { class: "results px-3 pt-4" }, Jk = { class: "results-header ps-8 pb-2" }, Qk = { class: "results-languages--suggestions pa-0 ma-0" }, Zk = ["lang", "dir", "aria-selected", "onClick", "textContent"], eb = { class: "results px-3 pt-4" }, tb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, nb = ["lang", "dir", "aria-selected", "onClick", "textContent"], ob = ["aria-selected"], sb = { class: "no-results px-3 py-4" }, ab = { class: "ps-8" }, Qi = window.Vue.ref, ib = window.Vue.watch, rb = window.Vue.onMounted, td = window.Vue.computed, sh = {
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
      default: Ik
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Qi(null), a = Qi(""), r = Qi([]), l = td(
      () => zk(r.value)
    ), u = td(
      () => Rk(r.value)
    ), g = (S) => o("select", S), i = () => o("close"), { autocompletion: c, onTabSelect: d } = Hk(
      a,
      r
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: f } = qk(a, r, n.suggestions), _ = () => {
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
    return ib(a, uc(() => k(this, null, function* () {
      r.value = yield Ju(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), rb(() => k(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Ju(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, y) => {
      const b = Xk("i18n");
      return Ft(), Mt("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        ga(S.$slots, "search", {}, () => [
          rn("div", Wk, [
            Zu(pe(ti), {
              value: pe(c),
              "onUpdate:value": y[0] || (y[0] = (x) => Gk(c) ? c.value = x : null),
              icon: pe($l),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Zu(pe(ti), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: pe($l),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Uo(No(_, ["prevent"]), ["enter"]),
                Uo(No(pe(p), ["stop", "prevent"]), ["down"]),
                Uo(No(pe(m), ["stop", "prevent"]), ["up"]),
                Uo(No(i, ["prevent"]), ["esc"]),
                Uo(No(pe(d), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        rn("section", Kk, [
          e.suggestions.length && !a.value ? ga(S.$slots, "suggestions", { key: 0 }, () => [
            rn("section", Yk, [
              pa(rn("p", Jk, null, 512), [
                [b, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              rn("ul", Qk, [
                (Ft(!0), Mt(Yi, null, Ki(e.suggestions, (x) => (Ft(), Mt("li", {
                  key: x,
                  class: ma(["language pa-2 ps-8 ma-0", x === pe(f) ? "language--selected" : ""]),
                  lang: x,
                  dir: pe(U.getDir)(x),
                  "aria-selected": x === pe(f) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (F) => g(x),
                  textContent: ed(pe(U.getAutonym)(x))
                }, null, 10, Zk))), 128))
              ])
            ])
          ]) : Ji("", !0),
          l.value.length ? ga(S.$slots, "search", { key: 1 }, () => [
            rn("section", eb, [
              e.suggestions.length && !a.value ? pa((Ft(), Mt("p", tb, null, 512)), [
                [b, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Ji("", !0),
              (Ft(!0), Mt(Yi, null, Ki(l.value, (x, F) => (Ft(), Mt("ul", {
                key: F,
                class: ma(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (Ft(!0), Mt(Yi, null, Ki(x, (E) => (Ft(), Mt("li", {
                  key: E,
                  class: ma(["language pa-2 ps-8 ma-0", E === pe(f) ? "language--selected" : ""]),
                  lang: E,
                  dir: pe(U.getDir)(E),
                  role: "option",
                  "aria-selected": E === pe(f) || null,
                  tabindex: "-1",
                  onClick: (P) => g(E),
                  textContent: ed(pe(U.getAutonym)(E))
                }, null, 10, nb))), 128)),
                e.allOptionEnabled && !a.value ? pa((Ft(), Mt("li", {
                  key: 0,
                  class: ma(["language pa-2 ps-8 ma-0", pe(f) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": pe(f) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (E) => g("all"))
                }, null, 10, ob)), [
                  [b, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Ji("", !0)
              ], 2))), 128))
            ])
          ]) : ga(S.$slots, "noresults", { key: 2 }, () => [
            rn("section", sb, [
              pa(rn("h3", ab, null, 512), [
                [b, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Se = window.Vue.unref, lb = window.Vue.resolveDirective, nd = window.Vue.withDirectives, Io = window.Vue.openBlock, zo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const od = window.Vue.toDisplayString, sd = window.Vue.withModifiers, An = window.Vue.withCtx, Nt = window.Vue.createVNode, cb = { class: "sx-translation-list-language-selector" }, ub = {
  key: 0,
  class: "mw-ui-autonym"
}, db = ["lang", "dir", "textContent"], gb = {
  key: 0,
  class: "mw-ui-autonym"
}, pb = ["lang", "dir", "textContent"], Ro = window.Vue.computed, mb = window.Vue.inject, hb = window.Vue.ref, dc = {
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
    const n = e, o = t, s = mb("breakpoints"), a = Ro(() => s.value.mobile), r = hb(null), l = Ro(() => !!r.value), u = () => r.value = "source", g = () => r.value = "target", i = () => r.value = null, c = Ro(() => {
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
    }, p = Ro(
      () => n.selectedSourceLanguage === "all"
    ), m = Ro(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = lb("i18n");
      return Io(), zo("div", cb, [
        Nt(Se(T), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: An(() => [
            Nt(Se(C), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: An(() => [
                Nt(Se(he), {
                  indicator: Se(xl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: sd(u, ["stop"])
                }, {
                  default: An(() => [
                    p.value ? nd((Io(), zo("span", ub, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Io(), zo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Se(U.getDir)(e.selectedSourceLanguage),
                      textContent: od(Se(U.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, db))
                  ]),
                  _: 1
                }, 8, ["indicator"])
              ]),
              _: 1
            }),
            Nt(Se(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: An(() => [
                Nt(Se(we), { icon: Se(Ip) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Nt(Se(C), { cols: "5" }, {
              default: An(() => [
                Nt(Se(he), {
                  indicator: Se(xl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: sd(g, ["stop"])
                }, {
                  default: An(() => [
                    m.value ? nd((Io(), zo("span", gb, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Io(), zo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Se(U.getDir)(e.selectedTargetLanguage),
                      textContent: od(Se(U.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, pb))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Nt(Se(nt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (w) => l.value = w),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: i
        }, {
          default: An(() => [
            Nt(Se(sh), {
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
}, fb = window.Vue.toDisplayString, wb = window.Vue.createElementVNode, ad = window.Vue.createVNode, id = window.Vue.unref, ln = window.Vue.openBlock, ha = window.Vue.createBlock, rd = window.Vue.createCommentVNode, ld = window.Vue.renderList, cd = window.Vue.Fragment, fa = window.Vue.createElementBlock, _b = window.Vue.normalizeClass, ud = window.Vue.withCtx, vb = ["textContent"], Sb = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, yb = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, wa = window.Vue.ref, Ut = window.Vue.computed, Cb = window.Vuex.useStore, dd = {
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
    const t = e, n = wa("all"), o = wa("all"), s = Cb(), a = Ut(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = Is(), l = wa(!1), u = wa(null), g = Ut(
      () => t.translationStatus === "draft"
    ), i = Ut(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Ut(
      () => n.value === "all"
    ), d = Ut(
      () => o.value === "all"
    ), p = Ut(
      () => i.value.filter(
        (w) => (c.value || w.sourceLanguage === n.value) && (d.value || w.targetLanguage === o.value)
      ).sort((w, S) => w.lastUpdatedTimestamp < S.lastUpdatedTimestamp)
    ), m = Ut(() => {
      let w = i.value.map(
        (S) => S.targetLanguage
      );
      return r.value && (w = w.filter(
        (S) => r.value.includes(S)
      )), [...new Set(w)];
    }), h = Ut(() => {
      const w = i.value.map(
        (S) => S.sourceLanguage
      );
      return [...new Set(w)];
    }), f = (w) => {
      u.value = w, l.value = !0;
    }, _ = Ut(() => t.activeStatus === t.translationStatus);
    return (w, S) => _.value ? (ln(), ha(id(Ie), {
      key: 0,
      class: _b(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: ud(() => [
        wb("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: fb(w.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, vb)
      ]),
      default: ud(() => [
        ad(dc, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": S[0] || (S[0] = (y) => n.value = y),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": S[1] || (S[1] = (y) => o.value = y),
          "source-languages": h.value,
          "target-languages": m.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? rd("", !0) : (ln(), ha(id(ze), { key: 0 })),
        g.value ? (ln(), fa("div", Sb, [
          (ln(!0), fa(cd, null, ld(p.value, (y) => (ln(), ha(Xy, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (b) => f(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (ln(), fa("div", yb, [
          (ln(!0), fa(cd, null, ld(p.value, (y) => (ln(), ha(Ek, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (b) => f(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        ad(Mk, {
          modelValue: l.value,
          "onUpdate:modelValue": S[2] || (S[2] = (y) => l.value = y),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : rd("", !0);
  }
}, kb = window.Vue.computed, bb = window.Vuex.useStore, He = () => {
  const e = bb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = M();
  return { sectionSuggestion: kb(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, xb = window.Vuex.useStore, $b = window.Vue.computed, en = () => {
  const e = xb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = M();
  return { currentTranslation: $b(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, gd = window.Vue.computed, Vb = window.Vuex.useStore, je = () => {
  const e = Vb(), { sectionSuggestion: t } = He(), { currentTranslation: n } = en(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), r = gd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = gd(() => {
    var g, i;
    const u = ((g = t.value) == null ? void 0 : g.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, Eb = window.Vue.ref, Ab = window.Vue.watchEffect, Db = (e, t) => k(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield le.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, g, i, c) => {
    const d = i < c.length - 1 ? c[i + 1].byteoffset : s;
    return u[g.line] = d - g.byteoffset, u;
  }, {});
  return Object.keys(l).filter((u) => a[u]).reduce((u, g) => u + l[g], 0);
}), Zi = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Lb = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Tb = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, ah = () => {
  const { currentSourcePage: e } = je(), { sectionSuggestion: t } = He(), n = Eb(null);
  return Ab(() => {
    if (t.value)
      Db(
        e.value,
        t.value
      ).then((o) => {
        n.value = Tb(
          Zi(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = Zi(e.value.articleSize);
      n.value = Lb(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Zi };
};
const ee = window.Vue.unref, it = window.Vue.createVNode, cn = window.Vue.createElementVNode, Oo = window.Vue.toDisplayString, Te = window.Vue.withCtx, Bb = window.Vue.resolveDirective, er = window.Vue.withDirectives, Dn = window.Vue.openBlock, Yn = window.Vue.createBlock, Jn = window.Vue.createCommentVNode, Pb = window.Vue.createTextVNode, pd = window.Vue.withModifiers, Fb = window.Vue.createElementBlock, Mb = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Nb = { class: "col shrink pe-4" }, Ub = ["lang", "dir", "textContent"], Ib = ["lang", "dir", "textContent"], zb = ["textContent"], Rb = ["textContent"], tr = window.Codex.CdxIcon, rt = window.Vue.computed, Ob = window.Vue.inject, Hb = window.Vuex.useStore, jb = window.Codex.CdxInfoChip, zl = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Co, kn, wo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = Hb(), { bytesToMinutes: o } = ah(), s = rt(() => t.suggestion), a = rt(
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
      () => i.value ? Wm : Km
    ), m = Ob("colors"), h = rt(
      () => i.value ? m.blue600 : "currentColor"
    ), f = rt(() => {
      var w;
      return o((w = r.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = rt(
      () => s.value instanceof rm || s.value instanceof lm
    );
    return (w, S) => {
      const y = Bb("i18n");
      return s.value ? (Dn(), Fb("div", Mb, [
        cn("div", Nb, [
          it(ee(Hl), {
            class: "cx-suggestion__thumbnail",
            thumbnail: r.value && r.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        it(ee(T), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Te(() => [
            it(ee(T), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Te(() => [
                it(ee(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Te(() => [
                    cn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ee(U.getDir)(s.value.sourceLanguage),
                      textContent: Oo(a.value)
                    }, null, 8, Ub)
                  ]),
                  _: 1
                }),
                it(ee(C), { shrink: "" }, {
                  default: Te(() => [
                    cn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ee(U.getDir)(s.value.sourceLanguage),
                      textContent: Oo(u.value)
                    }, null, 8, Ib)
                  ]),
                  _: 1
                }),
                f.value && !g.value && !_.value ? (Dn(), Yn(ee(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Te(() => [
                    er(cn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Jn("", !0),
                g.value ? (Dn(), Yn(ee(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Te(() => [
                    er(cn("small", null, null, 512), [
                      [y, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (Dn(), Yn(ee(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Te(() => [
                    it(ee(T), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Te(() => [
                        it(ee(C), { grow: "" }, {
                          default: Te(() => [
                            cn("small", {
                              textContent: Oo(ee(c))
                            }, null, 8, zb),
                            it(ee(tr), {
                              icon: ee(sk),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            cn("small", {
                              textContent: Oo(ee(d))
                            }, null, 8, Rb)
                          ]),
                          _: 1
                        }),
                        l.value ? (Dn(), Yn(ee(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Te(() => [
                            er(cn("small", null, null, 512), [
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
                _.value ? (Dn(), Yn(ee(C), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: Te(() => [
                    it(ee(jb), { icon: ee(sc) }, {
                      default: Te(() => [
                        Pb(Oo(s.value.collection.name), 1)
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
              default: Te(() => [
                i.value ? Jn("", !0) : (Dn(), Yn(ee(tr), {
                  key: 0,
                  icon: ee(xo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = pd((b) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                it(ee(tr), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = pd((b) => w.$emit("bookmark"), ["stop"]))
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
}, ih = (e) => {
  if (e.type === et)
    return "suggestion_filter_topic_area";
  if (e.id === ge || e.type === ge)
    return "suggestion_filter_collections";
  if (e.id === ft)
    return "suggestion_filter_previous_edits";
  if (e.id === $t)
    return "suggestion_filter_popular_articles";
}, Rl = (e) => {
  if (e.type === et || e.type === ge)
    return e.id;
  if (e.id === ge)
    return "all-collections";
};
const Be = window.Vue.unref, un = window.Vue.createVNode, It = window.Vue.withCtx, qb = window.Vue.resolveDirective, _a = window.Vue.createElementVNode, md = window.Vue.withDirectives, nr = window.Vue.toDisplayString, hd = window.Vue.createTextVNode, Gb = window.Vue.vShow, fd = window.Vue.renderList, wd = window.Vue.Fragment, Ho = window.Vue.openBlock, or = window.Vue.createElementBlock, Xb = window.Vue.normalizeClass, _d = window.Vue.createBlock, Wb = { class: "sx-suggestions-filters" }, Kb = { class: "mb-0" }, Yb = { class: "sx-suggestions-filters__group-label mb-3" }, Jb = { class: "sx-suggestions-filters__group-filters mb-3" }, vd = window.Vue.ref, Qb = window.Vue.computed, Zb = window.Vue.inject, Sd = window.Codex.CdxButton, ex = window.Codex.CdxIcon, tx = window.Codex.CdxInfoChip, nx = {
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
      [ft]: Qm,
      [$t]: Ym,
      [ge]: sc,
      [et]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r } = Zl(), l = Oe(), u = () => n("update:modelValue", !1), g = () => {
      l({ event_type: "suggestion_filters_close" }), u();
    }, i = () => {
      d.value && (l({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: Rl(
          d.value
        )
      }), r(d.value)), u();
    }, c = vd(!1), d = vd(null), p = (w) => {
      const S = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: ih(w),
        event_context: Rl(w)
      };
      l(S), d.value = w, c.value = !0;
    }, m = (w) => d.value ? d.value.id === w.id && d.value.type === w.type : a(w), h = Zb("breakpoints"), f = Qb(() => h.value.mobile), { getFilterProvider: _ } = ec();
    return (w, S) => {
      const y = qb("i18n");
      return Ho(), _d(Be(nt), {
        value: e.modelValue,
        animation: "fade",
        fullscreen: f.value,
        header: !1
      }, {
        default: It(() => [
          _a("section", Wb, [
            un(Be(T), {
              class: "sx-suggestions-filters__header ma-0 py-3",
              align: "stretch",
              justify: "start"
            }, {
              default: It(() => [
                un(Be(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: It(() => [
                    un(Be(Sd), {
                      class: "pa-0 ms-4",
                      weight: "quiet",
                      "aria-label": w.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: g
                    }, {
                      default: It(() => [
                        un(Be(ex), { icon: Be(xo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                un(Be(C), {
                  grow: "",
                  align: "center"
                }, {
                  default: It(() => [
                    md(_a("h5", Kb, null, 512), [
                      [y, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                un(Be(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: It(() => [
                    md(un(Be(Sd), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: i
                    }, {
                      default: It(() => [
                        hd(nr(w.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [Gb, c.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            un(Be(C), { class: "px-4 py-4" }, {
              default: It(() => [
                (Ho(!0), or(wd, null, fd(Be(s), (b) => (Ho(), or("div", {
                  key: b.id,
                  class: "sx-suggestions-filters__group"
                }, [
                  _a("div", Yb, nr(b.label), 1),
                  _a("div", Jb, [
                    (Ho(!0), or(wd, null, fd(b.filters, (x) => (Ho(), _d(Be(tx), {
                      key: x.id,
                      class: Xb(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                        "sx-suggestions-filters__filter--active": m(x)
                      }]),
                      icon: o[Be(_)(x)],
                      onClick: (F) => p(x)
                    }, {
                      default: It(() => [
                        hd(nr(x.label), 1)
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
const va = window.Vue.unref, Sa = window.Vue.openBlock, yd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ox = window.Vue.renderList, sx = window.Vue.Fragment, Cd = window.Vue.createElementBlock, ax = window.Vue.toDisplayString, ix = window.Vue.createTextVNode, rx = window.Vue.normalizeClass, lx = window.Vue.withCtx, cx = window.Vue.createVNode, ux = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, dx = window.Codex.CdxInfoChip, kd = window.Vue.ref, gx = window.Vue.computed, bd = window.Vue.watch, px = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ue(), n = Oe(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r
    } = Zl(), l = kd(!1), u = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), l.value = !0;
    }, g = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: ih(h),
        event_context: Rl(h)
      };
      n(f), s(h);
    }, i = {
      [ft]: Qm,
      [$t]: Ym,
      [ge]: sc,
      [et]: null
    }, { getFilterProvider: c } = ec(), d = (h) => ({
      id: h.id,
      type: h.type,
      icon: i[c(h)],
      label: h.label,
      action: g
    }), p = kd(o());
    bd(l, (h) => {
      h || (p.value = o());
    }), bd(r, (h) => {
      h || (p.value = o());
    });
    const m = gx(() => [
      ...p.value.map(d),
      {
        id: "more",
        icon: ic,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: u
      }
    ]);
    return (h, f) => va(r) ? (Sa(), yd(va(ze), { key: 0 })) : (Sa(), Cd("div", ux, [
      (Sa(!0), Cd(sx, null, ox(m.value, (_) => (Sa(), yd(va(dx), {
        key: _.label,
        class: rx(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": va(a)(_) }]),
        icon: _.icon,
        onClick: (w) => _.action(_)
      }, {
        default: lx(() => [
          ix(ax(_.label), 1)
        ]),
        _: 2
      }, 1032, ["class", "icon", "onClick"]))), 128)),
      cx(nx, {
        modelValue: l.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, mx = window.Vue.computed, hx = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Is(), n = mx(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Ln = window.Vue.computed, xd = window.Vue.ref, fx = window.Vue.watch, wx = window.Vuex.useStore, _x = () => {
  const e = wx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = M(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Jl(), r = Oe(), l = Ln(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = Ln(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = Ln(
    () => !l.value && !u.value
  ), i = xd(0), c = xd(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, p = 4, m = Ln(
    () => a(i.value)
  ), h = Ln(
    () => s(c.value)
  ), f = () => {
    x(), J(), F(), B();
  }, {
    fetchNextSectionSuggestionsSlice: _,
    fetchNextPageSuggestionsSlice: w
  } = tc(), S = (I) => I.length === d, y = Ln(
    () => S(h.value)
  ), b = Ln(
    () => S(m.value)
  ), x = () => {
    const I = (i.value + 1) % p, Q = S(
      a(I)
    );
    (!b.value || !Q) && _();
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
  return fx(
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
    isCurrentSectionSuggestionsSliceFull: b
  };
}, vx = window.Vuex.useStore, gc = () => {
  const e = vx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = tc(), o = (g, i, c) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === i && d.sourceTitle === c
  ), s = (g) => k(void 0, null, function* () {
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
    markFavoriteSuggestion: (g, i, c) => k(void 0, null, function* () {
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
}, Sx = () => {
  const { currentSuggestionFilters: e } = M(), { defaultSeedsFetched: t } = zm();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === ft)
      return t.value ? "suggestion_no_seed" : "suggestion_recent_edit";
    if (n === et)
      return "suggestion_topic_area";
    if (o === $t)
      return "suggestion_featured";
    if (o === ge || n === ge)
      return "suggestion_filter_collections";
    throw new Error("Event source cannot be empty");
  };
};
const $d = window.Vue.toDisplayString, ya = window.Vue.createElementVNode, Qn = window.Vue.createVNode, te = window.Vue.unref, jo = window.Vue.withCtx, yx = window.Vue.resolveDirective, sr = window.Vue.withDirectives, Vd = window.Vue.renderList, Ed = window.Vue.Fragment, dn = window.Vue.openBlock, ar = window.Vue.createElementBlock, qo = window.Vue.createBlock, ir = window.Vue.createCommentVNode, Cx = window.Vue.createTextVNode, kx = window.Vue.vShow, bx = ["textContent"], xx = { class: "cx-translation-list__division-title ma-0 pa-4" }, $x = { class: "cx-translation-list__division-title ma-0 pa-4" }, Vx = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Ex = window.Vue.ref, Ax = window.Codex.CdxButton, Dx = window.Codex.CdxIcon, Lx = {
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
    } = M(), { supportedLanguageCodes: s, availableTargetLanguages: a } = hx(), r = jm(), l = (B) => r(B, n.value), u = (B) => r(t.value, B), g = Sx(), i = js(), c = (B) => {
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
      isCurrentSectionSuggestionsSliceFull: b
    } = _x(), x = Ex(null), F = Oe(), E = () => {
      F({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), x.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: P, markFavoritePageSuggestion: J } = gc();
    return (B, I) => {
      const Q = yx("i18n");
      return sr((dn(), ar("div", null, [
        Qn(te(Ie), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: jo(() => [
            ya("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: $d(B.$i18n("cx-suggestionlist-title"))
            }, null, 8, bx),
            Qn(px)
          ]),
          default: jo(() => [
            Qn(dc, {
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
        Qn(te(Ie), {
          ref_key: "pageSuggestionsList",
          ref: x,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: jo(() => [
            sr(ya("h5", xx, null, 512), [
              [Q, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (dn(!0), ar(Ed, null, Vd(te(d), (X, ot) => (dn(), qo(zl, {
              key: `page-suggestion-${ot}`,
              suggestion: X,
              onClose: (Le) => te(m)(X),
              onClick: (Le) => c(X),
              onBookmark: (Le) => te(J)(X)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(_) && !te(y) ? (dn(), qo(te(ze), { key: 0 })) : ir("", !0)
          ]),
          _: 1
        }, 512),
        Qn(te(Ie), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: jo(() => [
            sr(ya("h5", $x, null, 512), [
              [Q, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (dn(!0), ar(Ed, null, Vd(te(p), (X, ot) => (dn(), qo(zl, {
              key: `section-suggestion-${ot}`,
              class: "ma-0",
              suggestion: X,
              onClose: (Le) => te(h)(X),
              onClick: (Le) => c(X),
              onBookmark: (Le) => te(P)(X)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(w) && !te(b) ? (dn(), qo(te(ze), { key: 0 })) : ir("", !0)
          ]),
          _: 1
        }),
        ya("div", Vx, [
          te(S) ? (dn(), qo(te(Ax), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: E
          }, {
            default: jo(() => [
              Qn(te(Dx), {
                class: "me-1",
                icon: te(Jm)
              }, null, 8, ["icon"]),
              Cx(" " + $d(B.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : ir("", !0)
        ])
      ], 512)), [
        [kx, e.active]
      ]);
    };
  }
}, Tx = window.Vue.resolveDirective, Bx = window.Vue.createElementVNode, Px = window.Vue.withDirectives, Fx = window.Vue.renderList, Mx = window.Vue.Fragment, rr = window.Vue.openBlock, Nx = window.Vue.createElementBlock, Ad = window.Vue.unref, Dd = window.Vue.createBlock, Ld = window.Vue.withCtx, Ux = window.Vue.createCommentVNode, Ix = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, zx = window.Vue.computed, Rx = window.Vuex.useStore, Ox = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = Rx(), n = zx(() => t.state.suggestions.favorites || []), o = js(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = gc();
    return (r, l) => {
      const u = Tx("i18n");
      return n.value.length ? (rr(), Dd(Ad(Ie), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Ld(() => [
          Px(Bx("h3", Ix, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Ld(() => [
          (rr(!0), Nx(Mx, null, Fx(n.value, (g, i) => (rr(), Dd(zl, {
            key: `favorite-${i}`,
            suggestion: g,
            onClick: (c) => s(g),
            onBookmark: (c) => Ad(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : Ux("", !0);
    };
  }
};
const Hx = window.Vue.resolveDirective, Go = window.Vue.createElementVNode, jx = window.Vue.withDirectives, qx = window.Vue.renderList, Gx = window.Vue.Fragment, Td = window.Vue.openBlock, Bd = window.Vue.createElementBlock, Xx = window.Vue.unref, Wx = window.Vue.createVNode, Kx = window.Vue.toDisplayString, Yx = { class: "cx-help-panel pa-4" }, Jx = { class: "cx-help-panel__item-list mt-6 ps-2" }, Qx = ["href"], Zx = ["textContent"], e8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ue(), n = [
      {
        icon: yw,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: ow,
        label: t.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Cw,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ];
    return (o, s) => {
      const a = Hx("i18n");
      return Td(), Bd("div", Yx, [
        jx(Go("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Go("ul", Jx, [
          (Td(), Bd(Gx, null, qx(n, (r, l) => Go("li", {
            key: l,
            class: "mt-4"
          }, [
            Go("a", {
              href: r.href,
              target: "_blank"
            }, [
              Wx(Xx(we), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Go("span", {
                textContent: Kx(r.label)
              }, null, 8, Zx)
            ], 8, Qx)
          ])), 64))
        ])
      ]);
    };
  }
};
const t8 = window.Vue.resolveDirective, Zn = window.Vue.createElementVNode, lr = window.Vue.withDirectives, Pd = window.Vue.toDisplayString, cr = window.Vue.unref, ur = window.Vue.withCtx, dr = window.Vue.createVNode, n8 = window.Vue.openBlock, o8 = window.Vue.createElementBlock, s8 = { class: "cx-stats-panel pa-4" }, a8 = ["textContent"], i8 = { class: "cx-stats-panel__monthly-stats-label" }, r8 = ["textContent"], l8 = { class: "cx-stats-panel__total-stats-label" }, c8 = window.Vue.ref, Fd = window.Vue.computed, u8 = window.Vue.watch, d8 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Fd(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = Fd(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = c8(null);
    return u8(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), g = u.reduce(
          (y, b) => Math.max(y, r[b].delta),
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
        S.forEach((y, b) => {
          b === S.length - 1 && (l.fillStyle = "#36c");
          const x = h - y * f;
          l.fillRect(_, x, m, y * f), _ += m + p;
        });
      }
    ), (r, l) => {
      const u = t8("i18n");
      return n8(), o8("div", s8, [
        lr(Zn("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        dr(cr(T), null, {
          default: ur(() => [
            dr(cr(C), { class: "cx-stats-panel__monthly-stats" }, {
              default: ur(() => [
                Zn("h3", {
                  textContent: Pd(s.value)
                }, null, 8, a8),
                lr(Zn("h5", i8, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            dr(cr(C), { class: "cx-stats-panel__total-stats" }, {
              default: ur(() => [
                Zn("h3", {
                  textContent: Pd(o.value)
                }, null, 8, r8),
                lr(Zn("h5", l8, null, 512), [
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
}, rh = () => {
  const e = Oe();
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
const g8 = window.Vue.renderSlot, p8 = window.Vue.unref, m8 = window.Vue.createVNode, h8 = window.Vue.createElementVNode, f8 = window.Vue.openBlock, w8 = window.Vue.createElementBlock, _8 = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, v8 = { class: "col-12 ma-0 pa-0" }, S8 = {
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
    const n = t, o = rh(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (f8(), w8("footer", _8, [
      h8("div", v8, [
        g8(a.$slots, "default", {}, () => [
          m8(p8(Ds), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, y8 = window.Vuex.useStore;
let Ca = [];
const lh = () => {
  const e = y8();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ca.includes(o) ? Promise.resolve() : (Ca.push(o), bo.fetchLanguageTitles(t, n).then((s) => {
      Ca = Ca.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, C8 = window.Vuex.useStore, ch = () => {
  const e = C8(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = M(), { isDefaultFilter: r } = Yp(), { previousRoute: l } = H(e), u = Oe(), g = () => {
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
}, k8 = () => {
  const e = js(), t = lh(), { logDashboardOpenEvent: n, getEventSource: o } = ch(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = M();
  return () => k(void 0, null, function* () {
    return t(s.value, r.value).then(
      () => n()
    ), e(
      r.value,
      s.value,
      a.value,
      o()
    );
  });
}, b8 = window.Vuex.useStore, di = () => {
  const e = b8(), t = (o) => k(void 0, null, function* () {
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
          new ko({ title: i, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, x8 = window.Vuex.useStore, $8 = () => {
  const e = x8();
  return () => k(void 0, null, function* () {
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
}, V8 = () => {
  const e = k8(), { fetchAllTranslations: t } = di(), n = nc(), o = $8(), { fetchPageCollections: s } = Om(), { pageURLParameter: a, sectionURLParameter: r, draftURLParameter: l } = M(), { logDashboardOpenEvent: u } = ch();
  return () => k(void 0, null, function* () {
    if (s(), yield Hm()(), a.value) {
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
}, Md = window.Vue.computed, E8 = window.Vue.ref, A8 = window.Vue.watch, D8 = window.Vue.watchEffect, L8 = window.Vuex.useStore, T8 = ["suggestions", "draft", "published"], B8 = () => {
  const e = L8(), { getUrlParam: t, setUrlParam: n } = M(), o = t("active-list"), s = E8(null);
  if (T8.includes(o))
    s.value = o;
  else {
    const a = Md(
      () => e.state.translator.translationsLoaded.draft
    ), r = Md(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", A8(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return D8(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, P8 = window.Vue.computed, F8 = () => {
  const e = ue();
  return P8(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: iw,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: si,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: aw,
        type: "text"
      }
    }
  ]);
};
const de = window.Vue.unref, ye = window.Vue.createVNode, M8 = window.Vue.toDisplayString, N8 = window.Vue.createTextVNode, zt = window.Vue.withCtx, gr = window.Vue.openBlock, Nd = window.Vue.createBlock, Ud = window.Vue.createCommentVNode, U8 = window.Vue.isRef, I8 = window.Vue.createElementBlock, z8 = window.Vue.computed, R8 = window.Vuex.useStore, O8 = window.Codex.CdxButton, H8 = window.Codex.CdxIcon, j8 = {
  __name: "CXDashboard",
  setup(e) {
    const t = _e(), n = Oe(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    V8()();
    const a = R8();
    a.dispatch("translator/fetchTranslatorStats");
    const r = z8(() => a.state.translator.translatorStats), l = B8(), u = F8(), g = rh(), i = (c) => {
      g(c), l.value = c;
    };
    return (c, d) => (gr(), I8("div", null, [
      ye(de(T), { class: "ma-0 py-4" }, {
        default: zt(() => [
          ye(de(O8), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: zt(() => [
              ye(de(H8), {
                class: "me-1",
                icon: de(Nl)
              }, null, 8, ["icon"]),
              N8(" " + M8(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      ye(de(T), {
        class: "ma-0",
        align: "start"
      }, {
        default: zt(() => [
          c.$mwui.breakpoint.tabletAndUp ? (gr(), Nd(de(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: zt(() => [
              ye(de(Ds), {
                id: "dashboard-list-selector--desktop",
                items: de(u),
                active: de(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Ud("", !0),
          ye(de(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: zt(() => [
              ye(Ox),
              ye(Lx, {
                active: de(l) === "suggestions"
              }, null, 8, ["active"]),
              ye(dd, {
                "translation-status": "draft",
                "active-status": de(l)
              }, null, 8, ["active-status"]),
              ye(dd, {
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
            default: zt(() => [
              ye(de(T), {
                class: "ma-0",
                align: "start"
              }, {
                default: zt(() => [
                  ye(de(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: zt(() => [
                      ye(d8, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  ye(de(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: zt(() => [
                      ye(e8)
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
      c.$mwui.breakpoint.mobile ? (gr(), Nd(S8, {
        key: 0,
        active: de(l),
        "onUpdate:active": d[0] || (d[0] = (p) => U8(l) ? l.value = p : null),
        items: de(u)
      }, null, 8, ["active", "items"])) : Ud("", !0)
    ]));
  }
}, q8 = {
  name: "DashboardView",
  components: { CxDashboard: j8 }
}, G8 = window.Vue.resolveComponent, X8 = window.Vue.createVNode, W8 = window.Vue.openBlock, K8 = window.Vue.createElementBlock, Y8 = { class: "cx-translation-dashboard" };
function J8(e, t, n, o, s, a) {
  const r = G8("cx-dashboard");
  return W8(), K8("main", Y8, [
    X8(r, { class: "mb-4 pb-12" })
  ]);
}
const Id = /* @__PURE__ */ Y(q8, [["render", J8]]), eo = window.Vue.computed, Q8 = () => {
  const { sectionSuggestion: e } = He(), { targetLanguageURLParameter: t } = M(), { currentTranslation: n } = en(), o = eo(
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
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = Zt(), u = eo(() => r ? j.getPageUrl(
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
}, uh = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function Z8(e) {
  return e.$el = $(e), e;
}
function e2(e, t, n, o) {
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
function t2() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function n2(e, t) {
  return k(this, null, function* () {
    yield pc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Z8(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const o2 = window.Vue.computed, s2 = window.Vue.onMounted, a2 = window.Vue.ref;
function i2(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const r2 = {
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
    const n = a2(null);
    let o = null;
    const s = o2(() => o.getHtml()), a = () => {
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
    return s2(() => k(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = i2;
      const i = yield n2(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = e2(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = t2, o.focus();
    })), { sxeditor: n };
  }
}, Ol = window.Vue.createElementVNode, l2 = window.Vue.openBlock, c2 = window.Vue.createElementBlock, u2 = ["lang", "dir"], d2 = /* @__PURE__ */ Ol("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Ol("div", { class: "toolbar" })
], -1), g2 = ["lang", "dir"];
function p2(e, t, n, o, s, a) {
  return l2(), c2("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    d2,
    Ol("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, g2)
  ], 8, u2);
}
const m2 = /* @__PURE__ */ Y(r2, [["render", p2]]);
function pc() {
  return mw.loader.using("mw.cx3.ve");
}
const h2 = window.Vuex.useStore, dh = () => {
  const e = h2();
  return (t, n) => k(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield pc(), new Promise((s) => {
      setTimeout(() => {
        const a = cm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, f2 = window.Vuex.useStore, mc = () => {
  const e = f2();
  return (t, n, o, s = null) => k(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield bo.fetchPageContent(
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
}, w2 = window.Vuex.useStore, hc = () => {
  const e = w2(), { currentSourcePage: t } = je(), n = dh(), o = mc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l
  } = M(), u = (c, d) => k(void 0, null, function* () {
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
}, fc = () => (e, t, n, o = {}) => {
  j.setCXToken(e, t, n), location.href = j.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, _2 = (e, t, n, o) => k(void 0, null, function* () {
  var l, u, g;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, r = yield dm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), v2 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, S2 = (e, t, n, o) => k(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return _2(e, t, n, o);
  v2(e, t);
}), y2 = (e, t, n, o) => {
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
        const g = S2(
          l,
          u,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, C2 = { restoreCorporaDraft: y2 }, Xo = window.Vue.computed, k2 = window.Vuex.useStore, W = () => {
  const e = k2(), { currentSourcePage: t, currentTargetPage: n } = je(), { currentMTProvider: o } = H(e), { sectionURLParameter: s } = M(), a = Xo(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Xo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Xo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Xo(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = Xo(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: g
  };
}, b2 = window.Vuex.useStore, wc = () => {
  const e = Oe(), t = b2(), n = _e(), { currentSourcePage: o } = je(), { sourceLanguage: s, targetLanguage: a } = H(t), r = CC(), l = dh(), { isDesktop: u } = Us(), g = fc(), i = mc(), { sourceSection: c } = W();
  return (d) => k(void 0, null, function* () {
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
      const b = {};
      w || (b.sourcesection = d.sourceSectionTitle), g(
        s.value,
        a.value,
        h,
        b
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
      (b) => C2.restoreCorporaDraft(
        o.value,
        f,
        a,
        b
      )
    ).then(() => d.restored = !0));
    let y;
    w ? (c.value.originalTitle = h, y = f) : y = d.targetSectionTitle, c.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, x2 = window.Vue.ref, $2 = window.Vuex.useStore, V2 = () => {
  const e = _e(), t = $2(), { isDesktop: n } = Us(), { logDashboardTranslationStartEvent: o } = cc(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = M(), { sourceLanguage: r, targetLanguage: l } = H(t), { targetPageExists: u } = Zt(), { selectPageSectionByIndex: g, selectPageSectionByTitle: i } = hc(), c = fc(), d = () => k(void 0, null, function* () {
    n.value ? (o(), c(
      r.value,
      l.value,
      s.value,
      { sourcesection: a.value }
    )) : (yield i(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), p = wc(), m = x2(!1), { currentTranslation: h } = en(), f = () => {
    h.value ? h.value.isArticleTranslation ? m.value = !0 : p(h.value) : a.value ? d() : u.value ? e.push({ name: "sx-section-selector" }) : _();
  }, _ = () => k(void 0, null, function* () {
    o(), n.value ? c(
      r.value,
      l.value,
      s.value
    ) : (g(0), uh() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: _,
    handlePrimaryButtonClick: f,
    translationConfirmationDialogOn: m
  };
};
const E2 = window.Vue.resolveDirective, zd = window.Vue.createElementVNode, Rd = window.Vue.withDirectives, A2 = window.Vue.unref, D2 = window.Vue.withCtx, L2 = window.Vue.openBlock, T2 = window.Vue.createBlock, B2 = {
  href: "",
  target: "_blank"
}, P2 = window.Codex.CdxDialog, F2 = {
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
    function u() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (g, i) => {
      const c = E2("i18n");
      return L2(), T2(A2(P2), {
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
        default: D2(() => [
          Rd(zd("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Rd(zd("a", B2, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const se = window.Vue.unref, M2 = window.Vue.resolveDirective, Wo = window.Vue.createElementVNode, Od = window.Vue.withDirectives, Ko = window.Vue.toDisplayString, Yo = window.Vue.openBlock, pr = window.Vue.createElementBlock, mr = window.Vue.createCommentVNode, Ke = window.Vue.createVNode, lt = window.Vue.withCtx, hr = window.Vue.createTextVNode, N2 = window.Vue.withModifiers, Hd = window.Vue.createBlock, U2 = window.Vue.Fragment, I2 = { class: "sx-translation-confirmer-body pb-4" }, z2 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, R2 = ["textContent"], O2 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, H2 = ["href"], j2 = ["textContent"], fr = window.Vue.computed, q2 = window.Vue.inject, jd = window.Vue.ref, G2 = window.Vue.watchEffect, X2 = window.Vuex.useStore, wr = window.Codex.CdxButton, W2 = window.Codex.CdxIcon, K2 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = _e(), o = X2();
    q2("colors");
    const { sectionSuggestion: s } = He(), { targetLanguageAutonym: a } = H(o), { sectionURLParameter: r } = M(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: u,
      translationConfirmationDialogOn: g
    } = V2(), i = jd(!1), c = jd(null), d = () => k(this, null, function* () {
      const B = yield tt.checkUnreviewedTranslations();
      B !== !0 && (i.value = !0, c.value = B.targetUrl);
    }), p = () => k(this, null, function* () {
      yield d(), !i.value && l();
    }), m = () => k(this, null, function* () {
      yield d(), !i.value && u();
    }), h = t;
    G2(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: f,
      getActionButtonLabel: _,
      isProgressiveButton: w,
      targetArticlePath: S
    } = Q8(), y = ue(), b = fr(
      () => y.i18n(_(!!r.value))
    ), { isDesktop: x } = Us(), F = fr(
      () => y.i18n(...f.value)
    ), E = () => k(this, null, function* () {
      yield d(), !i.value && n.push({ name: "sx-section-selector" });
    }), P = fr(() => {
      var B, I;
      return r.value && !!((I = (B = s.value) == null ? void 0 : B.sourceSections) != null && I.length);
    }), { targetPageExists: J } = Zt();
    return (B, I) => {
      const Q = M2("i18n");
      return Yo(), pr(U2, null, [
        Wo("section", I2, [
          se(r) ? (Yo(), pr("section", z2, [
            Od(Wo("h6", null, null, 512), [
              [Q, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Wo("h5", {
              class: "ma-0",
              textContent: Ko(se(r))
            }, null, 8, R2)
          ])) : se(J) ? (Yo(), pr("section", O2, [
            Ke(se(T), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: lt(() => [
                Od(Ke(se(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [Q, [se(a)], "cx-sx-existing-translation-status"]
                ]),
                Ke(se(C), { shrink: "" }, {
                  default: lt(() => [
                    Wo("a", {
                      href: se(S),
                      target: "_blank"
                    }, [
                      Ke(se(W2), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: se(rc)
                      }, null, 8, ["icon"])
                    ], 8, H2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ke(se(T), { class: "ma-0" }, {
              default: lt(() => [
                Ke(se(C), null, {
                  default: lt(() => [
                    Wo("span", {
                      textContent: Ko(F.value)
                    }, null, 8, j2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : mr("", !0),
          Ke(se(T), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: lt(() => [
              P.value ? (Yo(), Hd(se(C), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: lt(() => [
                  Ke(se(wr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: N2(E, ["stop"])
                  }, {
                    default: lt(() => [
                      hr(Ko(B.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : mr("", !0),
              se(J) && se(x) ? (Yo(), Hd(se(C), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: lt(() => [
                  Ke(se(wr), {
                    size: "large",
                    onClick: p
                  }, {
                    default: lt(() => [
                      hr(Ko(B.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : mr("", !0),
              Ke(se(C), { shrink: "" }, {
                default: lt(() => [
                  Ke(se(wr), {
                    weight: "primary",
                    size: "large",
                    action: se(w) ? "progressive" : "default",
                    onClick: m
                  }, {
                    default: lt(() => [
                      hr(Ko(b.value), 1)
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
        Ke(F2, {
          modelValue: i.value,
          "onUpdate:modelValue": I[0] || (I[0] = (X) => i.value = X),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const qd = window.Vue.unref, Y2 = window.Vue.openBlock, J2 = window.Vue.createBlock, Gd = window.Vue.computed, Q2 = window.Vuex.useStore, gh = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Is();
    Q2();
    const {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = M(), { currentLanguageTitleGroup: a } = Zt(), r = Gd(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((d) => d.lang)) || [];
      }
    ), l = Gd(
      () => n.value || t.value
    ), u = bC(), g = (c) => u(c, s.value), i = (c) => u(o.value, c);
    return (c, d) => (Y2(), J2(dc, {
      class: "sx-article-language-selector",
      "source-languages": r.value,
      "target-languages": l.value,
      "selected-source-language": qd(o),
      "selected-target-language": qd(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": i
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Ce = window.Vue.unref, _r = window.Vue.toDisplayString, Rt = window.Vue.createElementVNode, _t = window.Vue.createVNode, to = window.Vue.withCtx, Z2 = window.Vue.resolveDirective, e$ = window.Vue.withDirectives, t$ = window.Vue.normalizeClass, n$ = window.Vue.openBlock, o$ = window.Vue.createBlock, s$ = ["textContent"], a$ = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, i$ = ["textContent"], r$ = { class: "pe-3" }, l$ = ["textContent"], c$ = window.Codex.CdxButton, Jo = window.Codex.CdxIcon, Ot = window.Vue.computed, u$ = window.Vuex.useStore, d$ = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = u$(), n = ue(), { currentSourcePage: o } = je(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = M(), l = Ot(() => t.state.suggestions.favorites || []), u = Ot(
      () => l.value.some(
        (x) => r.value === x.title && s.value === x.sourceLanguage && a.value === x.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: i } = gc(), { translationSizeMessageArgs: c } = ah(), d = () => g(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new wo({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Ot(
      () => u.value ? Wm : Km
    ), h = Ot(
      () => u.value ? p : d
    ), f = Ot(
      () => j.getPageUrl(s.value || "", r.value || "")
    ), _ = Ot(() => {
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
    }, S = Ot(() => {
      var F;
      const x = Object.values(((F = o.value) == null ? void 0 : F.pageviews) || {}).reduce(
        (E, P) => E + P,
        0
      );
      return w(x);
    }), y = Ot(() => c.value ? n.i18n(...c.value) : ""), b = Ot(() => c.value ? c.value[2] < 15 : !1);
    return (x, F) => {
      const E = Z2("i18n");
      return n$(), o$(Ce(T), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: to(() => [
          _t(Ce(C), null, {
            default: to(() => [
              _t(Ce(T), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: to(() => [
                  _t(Ce(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: to(() => [
                      Rt("h5", {
                        class: "ma-0 me-1",
                        textContent: _r(Ce(r))
                      }, null, 8, s$),
                      _t(Ce(Jo), {
                        size: "x-small",
                        icon: Ce(rc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  _t(Ce(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: to(() => [
                      _t(Ce(c$), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": x.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: to(() => [
                          _t(Ce(Jo), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Rt("div", a$, [
                Rt("div", null, [
                  Rt("span", null, [
                    _t(Ce(Jo), {
                      icon: Ce(dk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Rt("span", {
                      class: "pe-3",
                      textContent: _r(_.value)
                    }, null, 8, i$)
                  ]),
                  Rt("span", null, [
                    _t(Ce(Jo), {
                      icon: Ce(ik),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    e$(Rt("span", r$, null, 512), [
                      [E, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Rt("span", {
                  class: t$(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": b.value
                  }])
                }, [
                  _t(Ce(Jo), {
                    icon: Ce(lk),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Rt("span", {
                    textContent: _r(y.value)
                  }, null, 8, l$)
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
const g$ = window.Vue.resolveDirective, Tn = window.Vue.createElementVNode, ka = window.Vue.withDirectives, p$ = window.Vue.toDisplayString, m$ = window.Vue.createTextVNode, vr = window.Vue.unref, Sr = window.Vue.withCtx, yr = window.Vue.openBlock, Cr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const h$ = { class: "pa-4" }, f$ = { class: "flex pt-2" }, w$ = window.Codex.CdxButton, _$ = window.Vue.ref, v$ = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = wc(), a = _$(!1), { currentTranslation: r } = en(), l = () => k(this, null, function* () {
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
      const i = g$("i18n");
      return yr(), Cr(vr(nt), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Sr(() => [
          Tn("div", f$, [
            a.value ? (yr(), Cr(vr(ze), { key: 1 })) : (yr(), Cr(vr(w$), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: Sr(() => [
                m$(p$(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Sr(() => [
          Tn("div", h$, [
            ka(Tn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ka(Tn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Tn("p", null, [
              ka(Tn("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ka(Tn("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const Xd = window.Vue.resolveDirective, ba = window.Vue.createElementVNode, Wd = window.Vue.withDirectives, gn = window.Vue.unref, xa = window.Vue.withCtx, Ht = window.Vue.createVNode, kr = window.Vue.openBlock, Kd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const S$ = window.Vue.createBlock, y$ = { class: "sx-translation-confirmer" }, C$ = { class: "mb-0" }, k$ = { class: "sx-translation-confirmer__article-image flex justify-center" }, b$ = ["src"], x$ = { class: "ma-3" }, $$ = window.Vue.computed, V$ = window.Vue.ref, E$ = window.Vuex.useStore, A$ = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = E$(), { currentSourcePage: n } = je(), { previousRoute: o } = H(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearURLParameters: u
    } = M(), g = $$(
      () => {
        var f, _;
        return (_ = (f = n.value) == null ? void 0 : f.image) == null ? void 0 : _.source;
      }
    ), { fetchTranslationsByStatus: i } = di(), c = lh(), d = oc();
    i("draft"), l.value && d(
      s.value,
      a.value,
      r.value
    ), c(s.value, r.value), pc(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const p = _e(), m = () => {
      u(), p.push({ name: o.value });
    }, h = V$(!1);
    return (f, _) => {
      const w = Xd("i18n"), S = Xd("i18n-html");
      return kr(), Kd("section", y$, [
        Ht(gn(T), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: xa(() => [
            Ht(gn(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: xa(() => [
                Wd(ba("h5", C$, null, 512), [
                  [w, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Ht(gn(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: xa(() => [
                Ht(gn(he), {
                  class: "pa-0",
                  type: "icon",
                  icon: gn(Ls),
                  "icon-size": 20,
                  onClick: m
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ba("div", k$, [
          g.value ? (kr(), Kd("img", {
            key: 0,
            src: g.value
          }, null, 8, b$)) : (kr(), S$(gn(we), {
            key: 1,
            size: "120",
            icon: gn(Op),
            "icon-color": f.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Ht(d$),
        Ht(gh),
        Ht(K2, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (y) => h.value = !0)
        }),
        Ht(gn(T), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: xa(() => [
            ba("p", x$, [
              Wd(ba("small", null, null, 512), [
                [S, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Ht(v$, {
          modelValue: h.value,
          "onUpdate:modelValue": _[1] || (_[1] = (y) => h.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const D$ = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: A$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, L$ = window.Vue.resolveComponent, T$ = window.Vue.createVNode, B$ = window.Vue.normalizeClass, P$ = window.Vue.openBlock, F$ = window.Vue.createElementBlock;
function M$(e, t, n, o, s, a) {
  const r = L$("sx-translation-confirmer");
  return P$(), F$("main", {
    class: B$(["sx-translation-confirmer-view", a.classes])
  }, [
    T$(r)
  ], 2);
}
const N$ = /* @__PURE__ */ Y(D$, [["render", M$]]);
const U$ = window.Vue.toDisplayString, Yd = window.Vue.unref, I$ = window.Vue.createVNode, z$ = window.Vue.createTextVNode, R$ = window.Vue.createElementVNode, O$ = window.Vue.openBlock, H$ = window.Vue.createElementBlock, j$ = { class: "sx-section-selector-view-article-item ma-0" }, q$ = ["href"], G$ = window.Codex.CdxIcon, X$ = {
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
    return (t, n) => (O$(), H$("li", j$, [
      R$("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        z$(U$(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        I$(Yd(G$), {
          size: "x-small",
          icon: Yd(rc)
        }, null, 8, ["icon"])
      ], 8, q$)
    ]));
  }
};
const W$ = window.Vue.resolveDirective, $a = window.Vue.createElementVNode, br = window.Vue.withDirectives, Bn = window.Vue.unref, K$ = window.Vue.toDisplayString, Va = window.Vue.withCtx, Qo = window.Vue.createVNode, Y$ = window.Vue.openBlock, J$ = window.Vue.createElementBlock, Q$ = { class: "sx-section-selector__header pa-4" }, Z$ = { class: "sx-section-selector__header-text ma-0" }, e4 = ["textContent"], t4 = { class: "pt-0 ma-0" }, n4 = { class: "ma-0" }, o4 = window.Codex.CdxButton, s4 = window.Codex.CdxIcon, a4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = He();
    return (n, o) => {
      const s = W$("i18n");
      return Y$(), J$("div", Q$, [
        Qo(Bn(T), { class: "ma-0 pb-3" }, {
          default: Va(() => [
            Qo(Bn(C), null, {
              default: Va(() => {
                var a;
                return [
                  br($a("h6", Z$, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  $a("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: K$((a = Bn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, e4)
                ];
              }),
              _: 1
            }),
            Qo(Bn(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Va(() => [
                Qo(Bn(o4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Va(() => [
                    Qo(Bn(s4), { icon: Bn(xo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        br($a("h4", t4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        br($a("p", n4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, i4 = window.Vue.renderList, r4 = window.Vue.Fragment, xr = window.Vue.openBlock, Jd = window.Vue.createElementBlock, l4 = window.Vue.renderSlot, Ea = window.Vue.unref, Qd = window.Vue.createVNode, Zd = window.Vue.withCtx, c4 = window.Vue.createBlock, u4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, d4 = window.Codex.CdxButton, g4 = window.Codex.CdxIcon, ph = {
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
    return (t, n) => (xr(), Jd("ul", u4, [
      (xr(!0), Jd(r4, null, i4(e.sections, (o) => (xr(), c4(Ea(T), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Zd(() => [
          Qd(Ea(d4), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Zd(() => [
              l4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Qd(Ea(g4), { icon: Ea(Hs) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, p4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const m4 = window.Vue.resolveDirective, Aa = window.Vue.createElementVNode, $r = window.Vue.withDirectives, ct = window.Vue.unref, eg = window.Vue.toDisplayString, no = window.Vue.withCtx, Vr = window.Vue.openBlock, tg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Zo = window.Vue.createVNode, h4 = window.Vue.createTextVNode, f4 = window.Vue.createElementBlock, w4 = { class: "sx-section-selector__missing-sections py-2" }, _4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, v4 = ["lang", "dir", "textContent"], ng = window.Vue.computed, S4 = window.Codex.CdxButton, y4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = He(), n = ng(
      () => {
        var s;
        return U.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = ng(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = m4("i18n");
      return Vr(), f4("section", w4, [
        $r(Aa("h4", _4, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Vr(), tg(ct(T), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: no(() => [
            Zo(ct(C), {
              class: "py-6 justify-center",
              innerHTML: ct(p4)
            }, null, 8, ["innerHTML"]),
            Zo(ct(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: no(() => [
                $r(Aa("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Zo(ct(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: no(() => [
                $r(Aa("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Zo(ct(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: no(() => [
                Zo(ct(S4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: no(() => [
                    h4(eg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Vr(), tg(ph, {
          key: 0,
          sections: ct(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: no(({ sourceSection: l }) => {
            var u, g;
            return [
              Aa("h5", {
                class: "ma-0",
                lang: (u = ct(t)) == null ? void 0 : u.sourceLanguage,
                dir: ct(U.getDir)((g = ct(t)) == null ? void 0 : g.sourceLanguage),
                textContent: eg(l)
              }, null, 8, v4)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const C4 = window.Vue.resolveDirective, Da = window.Vue.createElementVNode, k4 = window.Vue.withDirectives, Pn = window.Vue.unref, og = window.Vue.toDisplayString, b4 = window.Vue.withCtx, x4 = window.Vue.createVNode, $4 = window.Vue.openBlock, V4 = window.Vue.createElementBlock, E4 = { class: "sx-section-selector__present-sections py-2" }, A4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, D4 = { class: "sx-section-selector__present-section-button-content" }, L4 = ["lang", "dir", "textContent"], T4 = ["lang", "dir", "textContent"], B4 = window.Vue.computed, P4 = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = He(), n = B4(
      () => {
        var o;
        return U.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var r;
      const a = C4("i18n");
      return $4(), V4("section", E4, [
        k4(Da("h4", A4, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        x4(ph, {
          sections: ((r = Pn(t)) == null ? void 0 : r.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (l) => o.$emit("select-section", l))
        }, {
          default: b4(({ sourceSection: l, targetSection: u }) => {
            var g, i, c, d;
            return [
              Da("div", D4, [
                Da("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (g = Pn(t)) == null ? void 0 : g.sourceLanguage,
                  dir: Pn(U.getDir)((i = Pn(t)) == null ? void 0 : i.sourceLanguage),
                  textContent: og(l)
                }, null, 8, L4),
                Da("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (c = Pn(t)) == null ? void 0 : c.targetLanguage,
                  dir: Pn(U.getDir)((d = Pn(t)) == null ? void 0 : d.targetLanguage),
                  textContent: og(u)
                }, null, 8, T4)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const jt = window.Vue.createVNode, pn = window.Vue.unref, F4 = window.Vue.resolveDirective, vt = window.Vue.createElementVNode, es = window.Vue.withDirectives, M4 = window.Vue.renderList, N4 = window.Vue.Fragment, Er = window.Vue.openBlock, sg = window.Vue.createElementBlock, U4 = window.Vue.createBlock, ag = window.Vue.toDisplayString, ig = window.Vue.createTextVNode, Ar = window.Vue.withCtx, I4 = { class: "sx-section-selector" }, z4 = { class: "sx-section-selector__body" }, R4 = { class: "py-2" }, O4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, H4 = { class: "ma-0 pa-0" }, j4 = { class: "sx-section-selector__additional-consideration-title" }, q4 = { href: "#" }, G4 = { class: "sx-section-selector__additional-consideration-title" }, X4 = { href: "#" }, Dr = window.Vue.computed, W4 = window.Vuex.useStore, K4 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = W4(), { sectionSuggestion: n } = He(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: r
    } = H(t), l = Dr(
      () => {
        var S;
        return j.getPageUrl(o.value, (S = n.value) == null ? void 0 : S.sourceTitle);
      }
    ), u = Dr(
      () => {
        var S;
        return j.getPageUrl(s.value, (S = n.value) == null ? void 0 : S.targetTitle);
      }
    ), g = Dr(() => [
      { path: l.value, autonym: a.value },
      { path: u.value, autonym: r.value }
    ]), i = _e(), { clearURLParameters: c, setSectionURLParam: d } = M(), p = () => {
      c(), i.push({ name: "dashboard" });
    }, m = wc(), { selectPageSectionByTitle: h } = hc(), { isDesktop: f } = Us(), _ = fc(), w = (S) => {
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
      const b = F4("i18n");
      return Er(), sg("section", I4, [
        jt(a4, { onClose: p }),
        vt("section", z4, [
          jt(gh),
          jt(y4, {
            onSelectSection: w,
            onClose: p
          }),
          jt(P4, { onSelectSection: w }),
          vt("section", R4, [
            es(vt("h4", O4, null, 512), [
              [b, [
                pn(r)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            vt("ul", H4, [
              (Er(!0), sg(N4, null, M4(g.value, (x, F) => (Er(), U4(X$, {
                key: `view-article-item-${F}`,
                path: x.path,
                autonym: x.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          jt(pn(T), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: Ar(() => [
              jt(pn(C), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: Ar(() => [
                  vt("h6", j4, [
                    jt(pn(we), {
                      icon: pn(gw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    ig(" " + ag(S.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  es(vt("p", null, null, 512), [
                    [b, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  es(vt("a", q4, null, 512), [
                    [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              jt(pn(C), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: Ar(() => [
                  vt("h6", G4, [
                    jt(pn(we), {
                      icon: pn(dw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    ig(" " + ag(S.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  es(vt("p", null, null, 512), [
                    [b, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  es(vt("a", X4, null, 512), [
                    [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
const Y4 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: K4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, J4 = window.Vue.resolveComponent, Q4 = window.Vue.createVNode, Z4 = window.Vue.normalizeClass, e3 = window.Vue.openBlock, t3 = window.Vue.createElementBlock;
function n3(e, t, n, o, s, a) {
  const r = J4("sx-section-selector");
  return e3(), t3("main", {
    class: Z4(["sx-section-selector-view", a.classes])
  }, [
    Q4(r)
  ], 2);
}
const o3 = /* @__PURE__ */ Y(Y4, [["render", n3]]), s3 = window.Vue.computed, a3 = window.Vuex.useStore, i3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = H(
    a3()
  ), o = ue();
  return s3(() => {
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
const rg = window.Vue.unref, r3 = window.Vue.createVNode, l3 = window.Vue.openBlock, c3 = window.Vue.createElementBlock, u3 = { class: "sx-content-comparator__source-target-selector" }, d3 = window.Vue.watch, g3 = {
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
    const n = e, o = t, s = (r) => o("update:selection", r), a = i3(n);
    return d3(
      () => n.isMappedSection,
      () => {
        a.value.map((r) => r.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (r, l) => (l3(), c3("div", u3, [
      r3(rg(Ds), {
        items: rg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Fn = window.Vue.computed, p3 = window.Vue.ref, _c = () => {
  const e = p3([]), { currentTargetPage: t } = je(), { sectionSuggestion: n } = He(), { sectionURLParameter: o } = M(), s = Fn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Fn(
    () => {
      var d;
      return (((d = r.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), r = Fn(
    () => {
      var d;
      return (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = W(), u = Fn(() => {
    var d;
    return (d = l.value) == null ? void 0 : d.html;
  }), g = Fn(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), i = Fn(
    () => {
      var d;
      return (d = n.value) == null ? void 0 : d.missingSections.hasOwnProperty(o.value);
    }
  ), c = Fn(
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
const La = window.Vue.createVNode, m3 = window.Vue.toDisplayString, h3 = window.Vue.createElementVNode, mn = window.Vue.unref, Ta = window.Vue.withCtx, Lr = window.Vue.openBlock, Tr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const f3 = window.Vue.normalizeClass, w3 = ["lang", "dir", "textContent"], lg = window.Vue.ref, Br = window.Vue.computed, _3 = window.Vue.onMounted, v3 = {
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
    const n = e, o = t, s = lg(!1), { sectionSuggestion: a } = He(), { sectionURLParameter: r } = M(), l = Br(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: i } = _c(), c = Br(() => {
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
    }), d = Br(
      () => j.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = lg(null);
    return _3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Lr(), Tr(mn(T), {
      ref_key: "contentHeader",
      ref: p,
      class: f3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: Ta(() => [
        La(g3, {
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
                h3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: m3(c.value.title)
                }, null, 8, w3)
              ]),
              _: 1
            }),
            La(mn(C), { shrink: "" }, {
              default: Ta(() => [
                s.value ? (Lr(), Tr(mn(he), {
                  key: 0,
                  icon: mn(si),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Lr(), Tr(mn(he), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: mn(zp),
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
}, ts = window.Vue.unref, cg = window.Vue.createVNode, S3 = window.Vue.withCtx, y3 = window.Vue.openBlock, C3 = window.Vue.createBlock, k3 = window.Vue.computed, b3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = M(), o = k3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = hc(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (y3(), C3(ts(C), {
      class: "justify-end",
      align: "center"
    }, {
      default: S3(() => [
        cg(ts(he), {
          class: "pa-0 pe-1",
          type: "icon",
          icon: ts(lw),
          onClick: a
        }, null, 8, ["icon"]),
        cg(ts(he), {
          class: "pa-0 ps-1",
          type: "icon",
          icon: ts(rw),
          onClick: r
        }, null, 8, ["icon"])
      ]),
      _: 1
    }));
  }
};
const ug = window.Vue.toDisplayString, x3 = window.Vue.resolveDirective, Pr = window.Vue.withDirectives, oo = window.Vue.openBlock, Ba = window.Vue.createElementBlock, $3 = window.Vue.createCommentVNode, V3 = window.Vue.createTextVNode, dg = window.Vue.createElementVNode, E3 = window.Vue.normalizeClass, Mn = window.Vue.unref, Fr = window.Vue.withCtx, Mr = window.Vue.createVNode, gg = window.Vue.createBlock, A3 = { class: "sx-content-comparator-header__mapped-section" }, D3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, L3 = { key: 0 }, T3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, B3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, pg = window.Vue.computed, P3 = {
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
    const n = ue(), o = e, s = t, a = pg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), r = pg(
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
      const c = x3("i18n");
      return oo(), Ba("div", A3, [
        Mr(Mn(T), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Fr(() => [
            Mr(Mn(C), { grow: "" }, {
              default: Fr(() => [
                dg("h6", D3, [
                  V3(ug(r.value) + " ", 1),
                  a.value ? Pr((oo(), Ba("span", L3, null, 512)), [
                    [c, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : $3("", !0)
                ]),
                dg("h6", {
                  class: E3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, ug(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            Mr(Mn(C), { shrink: "" }, {
              default: Fr(() => [
                a.value ? (oo(), gg(Mn(he), {
                  key: 1,
                  class: "pa-0",
                  icon: Mn(fw),
                  type: "icon",
                  onClick: u
                }, null, 8, ["icon"])) : (oo(), gg(Mn(he), {
                  key: 0,
                  class: "pa-0",
                  icon: Mn(Up),
                  type: "icon",
                  onClick: l
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? Pr((oo(), Ba("p", B3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Pr((oo(), Ba("p", T3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const ae = window.Vue.unref, qt = window.Vue.createVNode, mg = window.Vue.toDisplayString, ys = window.Vue.createElementVNode, so = window.Vue.withCtx, F3 = window.Vue.resolveDirective, hg = window.Vue.withDirectives, Nr = window.Vue.openBlock, fg = window.Vue.createBlock, wg = window.Vue.createCommentVNode, M3 = window.Vue.createElementBlock, N3 = { class: "sx-content-comparator__header pa-4" }, U3 = ["lang", "dir"], I3 = ["lang", "dir"], z3 = /* @__PURE__ */ ys("br", null, null, -1), Pa = window.Vue.computed, R3 = {
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
    const { sectionURLParameter: t } = M(), { sourceSection: n } = W(), { sectionSuggestion: o } = He(), s = Pa(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.missingSections.hasOwnProperty(t.value);
      }
    ), a = Pa(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: r } = _c(), l = Pa(() => {
      var g;
      return (g = n.value) == null ? void 0 : g.html;
    }), u = Pa(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (g, i) => {
      const c = F3("i18n");
      return Nr(), M3("div", N3, [
        qt(ae(he), {
          class: "py-2 pa-0",
          icon: ae(cw),
          label: g.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (d) => g.$emit("close"))
        }, null, 8, ["icon", "label"]),
        qt(ae(T), { class: "my-1 py-2 mx-0" }, {
          default: so(() => [
            qt(ae(C), { grow: "" }, {
              default: so(() => [
                ys("h4", {
                  class: "pa-0 sx-content-comparator-header__article-title",
                  lang: ae(o).sourceLanguage,
                  dir: ae(U.getDir)(ae(o).sourceLanguage)
                }, mg(ae(o).sourceTitle), 9, U3),
                ys("h2", {
                  class: "sx-content-comparator-header__section-title pa-0 ma-0",
                  lang: ae(o).sourceLanguage,
                  dir: ae(U.getDir)(ae(o).sourceLanguage)
                }, mg(ae(t)), 9, I3)
              ]),
              _: 1
            }),
            qt(b3, {
              cols: "2",
              "section-source-titles": u.value
            }, null, 8, ["section-source-titles"]),
            qt(ae(C), {
              cols: "12",
              mobile: "12",
              tablet: "4",
              class: "py-2 mb-1"
            }, {
              default: so(() => [
                qt(ae(he), {
                  icon: ae(si),
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
        s.value ? (Nr(), fg(ae(T), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: so(() => [
            qt(ae(C), {
              shrink: "",
              class: "pe-2"
            }, {
              default: so(() => [
                qt(ae(we), { icon: ae(pw) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            qt(ae(C), { class: "ma-0" }, {
              default: so(() => [
                hg(ys("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                z3,
                hg(ys("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : wg("", !0),
        a.value ? (Nr(), fg(P3, {
          key: 1,
          suggestion: ae(o),
          "target-section-title": ae(r),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": i[2] || (i[2] = (d) => g.$emit("update:discardedSections", d))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : wg("", !0)
      ]);
    };
  }
};
const _g = window.Vue.toDisplayString, O3 = window.Vue.createElementVNode, vg = window.Vue.openBlock, Sg = window.Vue.createElementBlock, H3 = window.Vue.createCommentVNode, j3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, q3 = ["textContent"], G3 = ["textContent"], mh = {
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
    return (t, n) => (vg(), Sg("section", j3, [
      O3("h5", {
        textContent: _g(e.placeholderTitle)
      }, null, 8, q3),
      e.placeholderSubtitle ? (vg(), Sg("p", {
        key: 0,
        textContent: _g(e.placeholderSubtitle)
      }, null, 8, G3)) : H3("", !0)
    ]));
  }
}, X3 = window.Vue.computed, W3 = window.Vue.createApp, K3 = window.Vuex.useStore, Y3 = () => {
  const e = K3(), { sectionSuggestion: t } = He(), { currentTargetPage: n } = je(), o = ue(), s = () => W3(
    mh,
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
  return X3(() => {
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
const $e = window.Vue.unref, J3 = window.Vue.isRef, Ur = window.Vue.createVNode, ao = window.Vue.openBlock, yg = window.Vue.createBlock, Cg = window.Vue.createCommentVNode, Fa = window.Vue.createElementVNode, Ir = window.Vue.Fragment, Ma = window.Vue.createElementBlock, Q3 = { class: "sx-content-comparator" }, Z3 = { class: "sx-content-comparator__source-content" }, eV = ["lang", "dir", "innerHTML"], tV = ["lang", "dir", "innerHTML"], nV = ["innerHTML"], oV = window.Vue.ref, sV = window.Vue.computed, aV = window.Vue.watch, iV = window.Vuex.useStore, rV = {
  __name: "SXContentComparator",
  setup(e) {
    const t = iV(), n = _e(), o = oV("source_section"), { logDashboardTranslationStartEvent: s } = cc(), a = () => n.push({ name: "sx-section-selector" }), r = () => {
      s(), uh() || !t.getters["translator/userHasSectionTranslations"] ? n.push({ name: "sx-quick-tutorial" }) : n.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: l,
      discardedSections: u,
      isCurrentSectionMapped: g,
      sourceSectionContent: i,
      targetSectionContent: c
    } = _c(), d = Y3(), { sectionSuggestion: p } = He(), { sourceLanguage: m, targetLanguage: h } = H(t), f = sV(() => p.value.targetTitle), _ = mc();
    return aV(
      f,
      () => _(
        h.value,
        m.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, S) => (ao(), Ma("section", Q3, [
      Ur(R3, {
        "discarded-sections": $e(u),
        "onUpdate:discardedSections": S[0] || (S[0] = (y) => J3(u) ? u.value = y : null),
        onTranslationButtonClicked: r,
        onClose: a
      }, null, 8, ["discarded-sections"]),
      Ur(v3, {
        "source-vs-target-selection": o.value,
        "onUpdate:sourceVsTargetSelection": S[1] || (S[1] = (y) => o.value = y),
        "is-mapped-section": $e(g),
        onTranslationButtonClicked: r
      }, null, 8, ["source-vs-target-selection", "is-mapped-section"]),
      Fa("section", Z3, [
        o.value === "source_section" ? (ao(), Ma(Ir, { key: 0 }, [
          $e(i) ? Cg("", !0) : (ao(), yg($e(ze), { key: 0 })),
          Fa("section", {
            lang: $e(m),
            dir: $e(U.getDir)($e(m)),
            class: "pt-2 px-4",
            innerHTML: $e(i)
          }, null, 8, eV)
        ], 64)) : o.value === "target_article" ? (ao(), Ma(Ir, { key: 1 }, [
          $e(d) ? Cg("", !0) : (ao(), yg($e(ze), { key: 0 })),
          Fa("article", {
            lang: $e(h),
            dir: $e(U.getDir)($e(h)),
            class: "px-4",
            innerHTML: $e(d)
          }, null, 8, tV)
        ], 64)) : (ao(), Ma(Ir, { key: 2 }, [
          Fa("section", {
            class: "pa-4",
            innerHTML: $e(c)
          }, null, 8, nV),
          Ur(mh, {
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
const lV = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: rV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, cV = window.Vue.resolveComponent, uV = window.Vue.createVNode, dV = window.Vue.normalizeClass, gV = window.Vue.openBlock, pV = window.Vue.createElementBlock;
function mV(e, t, n, o, s, a) {
  const r = cV("sx-content-comparator");
  return gV(), pV("main", {
    class: dV(["sx-content-comparator-view", a.classes])
  }, [
    uV(r)
  ], 2);
}
const hV = /* @__PURE__ */ Y(lV, [["render", mV]]);
const fV = window.Vue.resolveDirective, ns = window.Vue.createElementVNode, kg = window.Vue.withDirectives, Na = window.Vue.unref, zr = window.Vue.createVNode, bg = window.Vue.toDisplayString, xg = window.Vue.createTextVNode, os = window.Vue.withCtx, wV = window.Vue.openBlock, _V = window.Vue.createBlock, vV = { class: "mw-ui-dialog__header px-4 py-3" }, SV = { class: "mw-ui-dialog__header-title" }, yV = { class: "pa-4" }, CV = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, $g = window.Codex.CdxButton, kV = {
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
      const u = fV("i18n");
      return wV(), _V(Na(nt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: os(() => [
          ns("div", vV, [
            kg(ns("span", SV, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: os(() => [
          ns("div", CV, [
            zr(Na($g), {
              weight: "quiet",
              onClick: s
            }, {
              default: os(() => [
                xg(bg(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            zr(Na($g), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: os(() => [
                xg(bg(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: os(() => [
          zr(Na(oi)),
          ns("div", yV, [
            kg(ns("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, bV = window.Vuex.useStore, vc = () => {
  const e = bV(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = Zt(), o = (l, u, g) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[u] = g;
      return;
    }
    const i = t.value.getContentTranslationUnitById(l);
    i instanceof Ue ? i.blockTemplateProposedTranslations[u] = g : i instanceof yn && i.addProposedTranslation(u, g);
  }, s = (l, u) => k(void 0, null, function* () {
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
  }), a = (l, u) => k(void 0, null, function* () {
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
    d instanceof Ue && (d.setBlockTemplateAdaptationInfoByHtml(
      u,
      p
    ), p = (yield Cv(
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
}, xV = window.Vuex.useStore, $V = () => {
  const { sourceSection: e } = W(), t = xV(), { translateTranslationUnitById: n } = vc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const VV = window.Vue.resolveDirective, Qe = window.Vue.createElementVNode, Ua = window.Vue.withDirectives, Pe = window.Vue.unref, Rr = window.Vue.createVNode, hn = window.Vue.withCtx, EV = window.Vue.renderList, AV = window.Vue.Fragment, Or = window.Vue.openBlock, DV = window.Vue.createElementBlock, LV = window.Vue.toDisplayString, Vg = window.Vue.createBlock, TV = window.Vue.createCommentVNode, BV = { class: "mw-ui-dialog__header pa-4" }, PV = { class: "row ma-0 py-2" }, FV = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, MV = { class: "mb-0" }, NV = { class: "col shrink justify-center" }, UV = { class: "pb-2 mb-0" }, IV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, zV = ["dir", "lang", "innerHTML"], RV = ["textContent"], OV = ["innerHTML"], HV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, jV = /* @__PURE__ */ Qe("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), Hr = window.Vue.computed, qV = window.Vuex.useStore, GV = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = K.EMPTY_TEXT_PROVIDER_KEY, s = K.ORIGINAL_TEXT_PROVIDER_KEY, a = qV(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = W(), { sourceLanguage: g, targetLanguage: i } = H(a), c = Hr(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        i.value
      )
    ), d = Hr(() => {
      const w = [s, o];
      return c.value.filter(
        (S) => !w.includes(S)
      );
    }), p = Hr(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = $V(), h = (w) => {
      m(w), _();
    }, f = K.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, S) => {
      const y = VV("i18n");
      return e.active ? (Or(), Vg(Pe(nt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: hn(() => [
          Qe("div", BV, [
            Qe("div", PV, [
              Qe("div", FV, [
                Ua(Qe("h4", MV, null, 512), [
                  [y, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              Qe("div", NV, [
                Rr(Pe(he), {
                  type: "icon",
                  icon: Pe(Ls),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            Ua(Qe("h6", UV, null, 512), [
              [y, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: hn(() => [
          Rr(Pe(Ie), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (b) => h(Pe(s)))
          }, {
            header: hn(() => [
              Ua(Qe("h5", IV, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: hn(() => [
              Qe("p", {
                dir: Pe(U.getDir)(Pe(g)),
                lang: Pe(g),
                innerHTML: p.value[Pe(s)]
              }, null, 8, zV)
            ]),
            _: 1
          }),
          (Or(!0), DV(AV, null, EV(d.value, (b) => (Or(), Vg(Pe(Ie), {
            key: b,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (x) => h(b)
          }, {
            header: hn(() => [
              Qe("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: LV(Pe(f)(b))
              }, null, 8, RV)
            ]),
            default: hn(() => [
              Qe("p", {
                innerHTML: p.value[b]
              }, null, 8, OV)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Rr(Pe(Ie), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (b) => h(Pe(o)))
          }, {
            header: hn(() => [
              Ua(Qe("h5", HV, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: hn(() => [
              jV
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : TV("", !0);
    };
  }
}, XV = window.Vuex.useStore, $o = () => {
  const { sourceSection: e } = W(), t = XV(), { translateTranslationUnitById: n } = vc(), { currentMTProvider: o } = H(t), s = (l) => k(void 0, null, function* () {
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
const WV = window.Vue.toDisplayString, jr = window.Vue.createElementVNode, qr = window.Vue.unref, KV = window.Vue.createVNode, YV = window.Vue.normalizeClass, JV = window.Vue.withCtx, QV = window.Vue.openBlock, ZV = window.Vue.createBlock, e5 = ["href"], t5 = ["textContent"], n5 = ["innerHTML"], io = window.Vue.computed, o5 = window.Vuex.useStore, Eg = "sx-sentence-selector__section-title", s5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = o5(), { sourceSection: n, isSectionTitleSelected: o } = W(), { currentSourcePage: s } = je(), { sourceLanguage: a } = H(t), r = io(() => {
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
      const m = [Eg];
      return o.value && m.push(`${Eg}--${i.value}`), m;
    }), { selectTranslationUnitById: d } = $o(), p = () => d(0);
    return (m, h) => (QV(), ZV(qr(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: JV(() => [
        jr("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          jr("strong", {
            textContent: WV(r.value)
          }, null, 8, t5),
          KV(qr(we), {
            icon: qr(zp),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, e5),
        jr("h2", {
          class: YV(["pa-0 ma-0", c.value]),
          onClick: p,
          innerHTML: l.value
        }, null, 10, n5)
      ]),
      _: 1
    }));
  }
};
const St = window.Vue.unref, ss = window.Vue.createVNode, Ia = window.Vue.withCtx, Ag = window.Vue.toDisplayString, Dg = window.Vue.createTextVNode, a5 = window.Vue.openBlock, i5 = window.Vue.createBlock, r5 = window.Vue.computed, Gr = window.Codex.CdxButton, Lg = window.Codex.CdxIcon, hh = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = W(), s = r5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (a5(), i5(St(T), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ia(() => [
        ss(St(Gr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: St(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Ia(() => [
            ss(St(Lg), {
              class: "me-1",
              icon: St(lc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ss(St(Gr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !St(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Ia(() => [
            Dg(Ag(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ss(St(Gr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Ia(() => [
            Dg(Ag(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ss(St(Lg), {
              class: "ms-1",
              size: "small",
              icon: St(Hs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Nn = window.Vue.unref, l5 = window.Vue.toDisplayString, as = window.Vue.createVNode, za = window.Vue.withCtx, c5 = window.Vue.openBlock, u5 = window.Vue.createBlock, Xr = window.Vue.computed, d5 = window.Vuex.useStore, g5 = window.Codex.CdxButton, p5 = window.Codex.CdxIcon, m5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = d5(), n = Xr(() => t.state.application.currentMTProvider), o = ue(), s = Xr(() => ({
      [K.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [K.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Xr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        K.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (c5(), u5(Nn(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: za(() => [
        as(Nn(T), { class: "ma-0 ps-5 pb-4" }, {
          default: za(() => [
            as(Nn(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: l5(a.value)
            }, null, 8, ["textContent"]),
            as(Nn(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: za(() => [
                as(Nn(g5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: za(() => [
                    as(Nn(p5), {
                      class: "pa-0",
                      icon: Nn(ic)
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
const ut = window.Vue.unref, fn = window.Vue.createVNode, h5 = window.Vue.resolveDirective, Tg = window.Vue.createElementVNode, f5 = window.Vue.withDirectives, Bg = window.Vue.toDisplayString, Pg = window.Vue.createTextVNode, is = window.Vue.withCtx, w5 = window.Vue.openBlock, _5 = window.Vue.createElementBlock, v5 = { class: "mt-retry-body pb-5" }, S5 = { class: "retry-body__message" }, Fg = window.Codex.CdxButton, Wr = window.Codex.CdxIcon, y5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = h5("i18n");
      return w5(), _5("div", v5, [
        Tg("div", S5, [
          fn(ut(Wr), {
            class: "me-2",
            icon: ut(Gm)
          }, null, 8, ["icon"]),
          f5(Tg("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        fn(ut(T), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: is(() => [
            fn(ut(C), { cols: "6" }, {
              default: is(() => [
                fn(ut(Fg), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: is(() => [
                    fn(ut(Wr), {
                      class: "me-1",
                      icon: ut(Jm)
                    }, null, 8, ["icon"]),
                    Pg(" " + Bg(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            fn(ut(C), { cols: "6" }, {
              default: is(() => [
                fn(ut(Fg), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: is(() => [
                    fn(ut(Wr), {
                      class: "me-1",
                      icon: ut(gk)
                    }, null, 8, ["icon"]),
                    Pg(" " + Bg(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const ro = window.Vue.createVNode, Fe = window.Vue.unref, rs = window.Vue.openBlock, C5 = window.Vue.createElementBlock, k5 = window.Vue.createCommentVNode, Ra = window.Vue.createBlock, b5 = window.Vue.normalizeClass, x5 = window.Vue.normalizeStyle, ls = window.Vue.withCtx, $5 = window.Vue.toDisplayString, V5 = window.Vue.createTextVNode, E5 = window.Vue.normalizeProps, A5 = window.Vue.guardReactiveProps, D5 = ["lang", "dir", "innerHTML"], Kr = window.Vue.ref, L5 = window.Vue.onMounted, T5 = window.Vue.onBeforeUnmount, Yr = window.Vue.computed, B5 = window.Vue.nextTick, P5 = window.Vuex.useStore, F5 = window.Codex.CdxButton, M5 = window.Codex.CdxIcon, N5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Kr(0), n = Kr(null), o = Kr(null), s = P5(), { currentMTProvider: a, targetLanguage: r } = H(s), { sourceSection: l, currentProposedTranslation: u } = W(), g = Yr(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Yr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = Yr(
      () => !!u.value || a.value === K.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    L5(() => k(this, null, function* () {
      yield B5(), d(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), T5(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => d());
    return (m, h) => (rs(), Ra(Fe(Ie), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ls(() => [
        ro(Fe(T), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ls(() => [
            ro(m5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            ro(Fe(C), {
              class: b5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && g.value
              }]),
              style: x5(c.value ? i.value : null)
            }, {
              default: ls(() => [
                c.value ? (rs(), C5("section", {
                  key: 0,
                  lang: Fe(r),
                  dir: Fe(U.getDir)(Fe(r)),
                  innerHTML: Fe(u)
                }, null, 8, D5)) : g.value ? (rs(), Ra(Fe(ze), { key: 1 })) : (rs(), Ra(y5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            ro(Fe(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ls(() => [
                c.value || g.value ? (rs(), Ra(Fe(F5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Fe(u)))
                }, {
                  default: ls(() => [
                    ro(Fe(M5), {
                      class: "me-1",
                      icon: Fe(ac)
                    }, null, 8, ["icon"]),
                    V5(" " + $5(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : k5("", !0),
                ro(hh, E5(A5(m.$attrs)), null, 16)
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
}, U5 = window.Vue.computed, I5 = (e) => U5(() => {
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
const z5 = window.Vue.unref, R5 = window.Vue.normalizeClass, O5 = window.Vue.openBlock, H5 = window.Vue.createElementBlock, j5 = ["innerHTML"], q5 = window.Vue.onMounted, G5 = window.Vue.ref, X5 = window.Vue.computed, W5 = {
  __name: "SubSection",
  props: {
    subSection: {
      type: Ue,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = G5(null), a = I5(n.subSection);
    q5(() => {
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
    const { selectTranslationUnitById: r } = $o(), l = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      r(g.id);
    }, u = X5(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, i) => (O5(), H5("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: R5(["sx-sentence-selector__subsection", u.value]),
      innerHTML: z5(a)
    }, null, 10, j5));
  }
};
const Mg = window.Vue.unref, Ng = window.Vue.createVNode, Ug = window.Vue.normalizeStyle, K5 = window.Vue.openBlock, Y5 = window.Vue.createElementBlock, Ig = window.Vue.computed, fh = {
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
    const t = e, n = Ig(() => ({ "--size": t.size })), o = Ig(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Rp : ei
    );
    return (s, a) => (K5(), Y5("div", {
      class: "block-template-status-indicator",
      style: Ug(n.value)
    }, [
      Ng(Mg(n1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Ng(Mg(we), {
        icon: o.value,
        size: e.size / 2,
        style: Ug({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, cs = window.Vue.openBlock, Oa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Gt = window.Vue.unref, lo = window.Vue.withCtx, us = window.Vue.createVNode, Jr = window.Vue.toDisplayString, Qr = window.Vue.createElementVNode, J5 = window.Vue.renderList, Q5 = window.Vue.Fragment, Z5 = window.Vue.createElementBlock, eE = { class: "pa-4" }, tE = ["textContent"], nE = ["textContent"], oE = window.Vuex.useStore, Ha = window.Vue.computed, sE = {
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
    const t = e, { targetLanguageAutonym: n } = H(oE()), o = Ha(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = ue(), a = Ha(() => {
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
          icon: Sw,
          color: Ze.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Ls,
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
        icon: si,
        color: Ze.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: nw,
        color: Ze.gray500
      }), u;
    });
    return (u, g) => (cs(), Oa(Gt(nt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (i) => u.$emit("update:active", i))
    }, {
      header: lo(() => [
        us(Gt(T), {
          justify: "center",
          class: "mt-4"
        }, {
          default: lo(() => [
            us(Gt(C), { shrink: "" }, {
              default: lo(() => [
                e.targetTemplateExists ? (cs(), Oa(fh, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (cs(), Oa(Gt(we), {
                  key: 1,
                  icon: Gt(sw)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: lo(() => [
        Qr("div", eE, [
          Qr("h3", {
            textContent: Jr(a.value)
          }, null, 8, tE),
          Qr("p", {
            class: "mt-6 text-small",
            textContent: Jr(r.value)
          }, null, 8, nE),
          (cs(!0), Z5(Q5, null, J5(l.value, (i, c) => (cs(), Oa(Gt(T), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: lo(() => [
              us(Gt(C), { shrink: "" }, {
                default: lo(() => [
                  us(Gt(we), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              us(Gt(C), {
                textContent: Jr(i.text)
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
const me = window.Vue.unref, ke = window.Vue.createVNode, yt = window.Vue.withCtx, Zr = window.Vue.toDisplayString, zg = window.Vue.createTextVNode, aE = window.Vue.resolveDirective, Rg = window.Vue.withDirectives, Og = window.Vue.createElementVNode, iE = window.Vue.normalizeClass, ja = window.Vue.openBlock, Hg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const jg = window.Vue.createBlock, rE = window.Vue.normalizeProps, lE = window.Vue.guardReactiveProps, cE = { class: "block-template-adaptation-card__container pa-4" }, uE = ["textContent"], dE = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ae = window.Vue.computed, gE = window.Vue.ref, pE = window.Vuex.useStore, qg = window.Codex.CdxButton, Gg = window.Codex.CdxIcon, mE = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = pE(), { targetLanguageAutonym: n, currentMTProvider: o } = H(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = W(), r = Ae(() => {
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
    ), g = ue(), i = Ae(
      // Strip HTML comments and return
      () => {
        var E, P;
        return ((P = (E = s.value) == null ? void 0 : E.sourceBlockTemplateName) == null ? void 0 : P.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), c = Ae(
      () => {
        var E, P;
        return (P = (E = s.value) == null ? void 0 : E.blockTemplateAdaptationInfo) == null ? void 0 : P[o.value];
      }
    ), d = Ae(
      () => {
        var E, P;
        return ((E = c.value) == null ? void 0 : E.adapted) || !!((P = c.value) != null && P.partial);
      }
    ), p = Ae(() => c.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), m = Ae(() => c.value ? d.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
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
    }), S = gE(!1), y = () => {
      S.value = !0;
    }, b = (E) => E.filter((P) => !f.value.includes(P)), x = Ae(() => {
      var P;
      const E = ((P = c.value) == null ? void 0 : P.mandatoryTargetParams) || [];
      return b(E).length;
    }), F = Ae(() => {
      var P;
      const E = ((P = c.value) == null ? void 0 : P.optionalTargetParams) || [];
      return b(E).length;
    });
    return (E, P) => {
      const J = aE("i18n");
      return ja(), jg(me(Ie), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: yt(() => [
          Og("div", cE, [
            ke(me(T), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: yt(() => [
                ke(me(C), { shrink: "" }, {
                  default: yt(() => [
                    ke(me(Gg), {
                      icon: me(pk),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ke(me(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: yt(() => [
                    zg(Zr(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (ja(), Hg("div", {
              key: 0,
              class: iE(["pa-4 mb-4", p.value])
            }, [
              ke(me(T), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: yt(() => [
                  Rg(ke(me(C), { tag: "h5" }, null, 512), [
                    [J, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ke(me(C), { shrink: "" }, {
                    default: yt(() => [
                      ke(fh, {
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
              Og("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Zr(l.value)
              }, null, 8, uE),
              ke(me(qg), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: P[0] || (P[0] = (B) => E.$emit("edit-translation", r.value))
              }, {
                default: yt(() => [
                  zg(Zr(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (ja(), Hg("div", dE, [
              ke(me(T), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: yt(() => [
                  Rg(ke(me(C), { tag: "h5" }, null, 512), [
                    [J, [
                      me(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ke(me(C), { shrink: "" }, {
                    default: yt(() => [
                      ke(me(qg), {
                        weight: "quiet",
                        "aria-label": E.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: yt(() => [
                          ke(me(Gg), {
                            icon: me(uk),
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
            ])) : (ja(), jg(me(ze), { key: 2 }))
          ]),
          ke(hh, rE(lE(E.$attrs)), null, 16),
          ke(sE, {
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
const hE = window.Vue.unref, fE = window.Vue.createVNode, wE = window.Vue.openBlock, _E = window.Vue.createElementBlock, vE = { class: "translated-segment-card-header" }, SE = window.Vue.computed, yE = {
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
    const n = t, { isSectionTitleSelected: o } = W(), s = ue(), a = SE(() => [
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
    return (l, u) => (wE(), _E("div", vE, [
      fE(hE(Ds), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const wn = window.Vue.unref, qa = window.Vue.createVNode, el = window.Vue.withCtx, CE = window.Vue.openBlock, kE = window.Vue.createBlock, bE = window.Vue.computed, Xg = window.Codex.CdxButton, Wg = window.Codex.CdxIcon, xE = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = W(), o = bE(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (CE(), kE(wn(T), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: el(() => [
        qa(wn(Xg), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: wn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: el(() => [
            qa(wn(Wg), { icon: wn(lc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        qa(wn(Xg), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: el(() => [
            qa(wn(Wg), { icon: wn(Hs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const $E = window.Vue.useCssVars, be = window.Vue.createVNode, Kg = window.Vue.resolveDirective, VE = window.Vue.createElementVNode, tl = window.Vue.withDirectives, re = window.Vue.unref, EE = window.Vue.normalizeStyle, Ga = window.Vue.openBlock, Yg = window.Vue.createElementBlock, AE = window.Vue.createCommentVNode, DE = window.Vue.normalizeClass, Ye = window.Vue.withCtx, LE = window.Vue.toDisplayString, TE = window.Vue.createTextVNode, Jg = window.Vue.createBlock, BE = window.Vue.normalizeProps, PE = window.Vue.guardReactiveProps, Xt = window.Vue.computed, FE = window.Vue.ref, ME = window.Vue.inject, NE = window.Vuex.useStore, UE = window.Codex.CdxButton, nl = window.Codex.CdxIcon, IE = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    $E((w) => ({
      "4929555c": _.value
    }));
    const t = FE("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = W(), { targetLanguage: a } = H(NE()), r = Xt(() => t.value === "sentence"), l = Xt(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), u = Xt(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), g = ME("colors"), i = g.gray200, c = g.red600, d = Xt(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = Xt(
      () => xt.calculateScore(
        d.value,
        u.value,
        a.value
      )
    ), m = Xt(
      () => xt.getScoreStatus(p.value)
    ), h = Xt(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = Xt(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), _ = Xt(
      () => f.value[m.value]
    );
    return (w, S) => {
      const y = Kg("i18n"), b = Kg("i18n-html");
      return Ga(), Jg(re(Ie), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ye(() => [
          be(re(T), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ye(() => [
              be(yE, {
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
                          tl(VE("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? tl((Ga(), Yg("p", {
                            key: 0,
                            style: EE({ color: re(c) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : tl((Ga(), Yg("p", {
                            key: 1,
                            class: DE(h.value)
                          }, null, 2)), [
                            [b, [
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
                                  be(re(nl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: re(fk)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              be(re(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ye(() => [
                                  be(re(Hp), {
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
                                  be(re(nl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: re(mk)
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
                  r.value ? (Ga(), Jg(re(UE), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (x) => w.$emit("edit-translation", d.value))
                  }, {
                    default: Ye(() => [
                      be(re(nl), {
                        class: "me-1",
                        icon: re(ac)
                      }, null, 8, ["icon"]),
                      TE(" " + LE(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : AE("", !0)
                ]),
                _: 1
              }),
              be(re(C), { class: "translated-segment-card__actions" }, {
                default: Ye(() => [
                  be(xE, BE(PE(w.$attrs)), null, 16)
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
}, zE = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = W(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = $o(), { currentTranslation: s } = en();
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
}, wh = window.Vuex.useStore, RE = () => {
  const e = wh(), { sourceLanguage: t, targetLanguage: n } = H(e);
  return () => k(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield ri.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, OE = () => {
  const e = wh(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = H(e), s = RE();
  return () => k(void 0, null, function* () {
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
}, HE = window.Vue.computed, jE = (e) => {
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
}, qE = () => {
  const { selectedContentTranslationUnit: e } = W(), t = HE(
    () => e.value instanceof Ue
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && jE(o);
  };
}, GE = (e, t) => {
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
}, XE = window.Vue.computed, _h = () => {
  const { currentTranslation: e } = en(), { currentSourcePage: t } = je();
  return XE(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, WE = window.Vuex.useStore, Sc = () => {
  const e = WE(), { sourceSection: t, targetPageTitleForPublishing: n } = W(), { pageURLParameter: o } = M(), { sourceLanguage: s, targetLanguage: a } = H(e), r = _h();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(g);
    i.forEach(
      (p) => GE(p, u)
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
}, KE = window.Vue.effectScope, YE = window.Vue.onScopeDispose, JE = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = KE(!0), n = o.run(() => e(...a))), YE(s), n);
}, QE = window.Vuex.useStore;
let ol;
const ZE = () => {
  const e = QE(), t = Sc();
  let n = 1e3, o = 0;
  return ol = uc(() => t().then((a) => {
    a instanceof fo ? (n *= o + 1, o++, setTimeout(ol, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof So)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), ol;
}, vh = JE(ZE), eA = window.Vuex.useStore, tA = () => {
  const e = eA(), t = vh(), { currentMTProvider: n } = H(e), { sourceSection: o, currentProposedTranslation: s } = W(), { selectNextTranslationUnit: a } = $o();
  return () => k(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, nA = window.Vuex.useStore, oA = () => {
  const e = nA(), t = vh();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, sA = window.Vuex.useStore, aA = window.Vue.computed, Sh = () => {
  const e = sA(), t = _e(), { currentTranslation: n } = en(), { currentMTProvider: o, previousRoute: s } = H(e), { currentTargetPage: a } = je(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: g
  } = M(), i = Oe(), c = aA(() => {
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
        (b) => b.name === s.value
      ), S = ((y = w == null ? void 0 : w.meta) == null ? void 0 : y.workflowStep) || 0;
      return f > S ? i(ie({
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
const ne = window.Vue.unref, Je = window.Vue.createVNode, Wt = window.Vue.withCtx, iA = window.Vue.resolveDirective, Qg = window.Vue.createElementVNode, rA = window.Vue.withDirectives, lA = window.Vue.toDisplayString, cA = window.Vue.createTextVNode, uA = window.Vue.renderList, dA = window.Vue.Fragment, _n = window.Vue.openBlock, Zg = window.Vue.createElementBlock, co = window.Vue.createBlock;
window.Vue.createCommentVNode;
const gA = window.Vue.normalizeClass, pA = window.Vue.normalizeStyle, mA = { class: "sx-sentence-selector__header-title mb-0" }, hA = { class: "sx-sentence-selector__section-contents px-4" }, uo = window.Vue.computed, fA = window.Vue.nextTick, wA = window.Vue.onMounted, Xa = window.Vue.ref, ep = window.Vue.watch, _A = window.Vuex.useStore, tp = window.Codex.CdxButton, vA = window.Codex.CdxIcon, SA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Xa(!1), n = Xa(!1), o = Xa("100%"), s = _A(), { currentMTProvider: a } = H(s), {
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
    } = Sh(), S = zE();
    OE()().then(h);
    const b = qE();
    wA(() => {
      ep(
        i,
        () => k(this, null, function* () {
          i.value && (yield fA(), S(), b());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), ep(g, b);
    const {
      selectNextTranslationUnit: x,
      selectPreviousTranslationUnit: F
    } = $o(), E = tA(), P = () => {
      w(), E();
    }, J = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, B = _e(), I = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        Ge.value = !0, _();
        return;
      }
      Vt();
    }, { fetchTranslationsByStatus: Q } = di(), X = oA(), { clearURLParameters: ot } = M(), { currentTranslation: Le } = en(), Vt = () => k(this, null, function* () {
      Q("draft"), Le.value && (u.value.reset(), Le.value.restored = !1), f(), ot(), X(), yield B.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: wt,
      translateSelectedTranslationUnitForAllProviders: Eo
    } = vc(), $n = () => {
      Dt.value || (t.value = !0, Eo());
    }, { getCurrentTitleByLanguage: Et } = Zt(), qe = (v, A) => {
      B.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: p.value,
          title: Et(
            l.value,
            r.value
          ),
          isInitialEdit: A || null
        }
      });
    }, tn = () => B.push({ name: "sx-publisher" }), At = () => k(this, null, function* () {
      g.value ? yield wt(
        g.value.id,
        a.value
      ) : yield wt(0, a.value);
    }), Dt = uo(
      () => g.value instanceof Ue
    ), Ge = Xa(!1);
    return (v, A) => {
      const D = iA("i18n");
      return _n(), Zg("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: pA(m.value)
      }, [
        Je(ne(T), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Wt(() => [
            Je(ne(C), { shrink: "" }, {
              default: Wt(() => [
                Je(ne(tp), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: I
                }, {
                  default: Wt(() => [
                    Je(ne(vA), { icon: ne(Xm) }, null, 8, ["icon"])
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
              default: Wt(() => [
                rA(Qg("h4", mA, null, 512), [
                  [D, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Je(ne(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: Wt(() => [
                Je(ne(tp), {
                  disabled: !(ne(u) && ne(u).isTranslated),
                  onClick: tn
                }, {
                  default: Wt(() => [
                    cA(lA(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
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
          default: Wt(() => [
            Je(ne(C), {
              dir: ne(U.getDir)(ne(r)),
              lang: ne(r),
              class: "sx-sentence-selector__section"
            }, {
              default: Wt(() => [
                Je(s5),
                Qg("div", hA, [
                  (_n(!0), Zg(dA, null, uA(d.value, (L) => (_n(), co(W5, {
                    id: L.id,
                    key: `sub-section-${L.id}`,
                    "sub-section": L,
                    onBounceTranslation: J
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Dt.value && c.value ? (_n(), co(IE, {
              key: 0,
              onEditTranslation: A[0] || (A[0] = (L) => qe(L, !1)),
              onSkipTranslation: ne(x),
              onSelectPreviousSegment: ne(F)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : Dt.value ? (_n(), co(mE, {
              key: 2,
              onEditTranslation: qe,
              onApplyTranslation: P,
              onSkipTranslation: ne(x),
              onSelectPreviousSegment: ne(F)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (_n(), co(N5, {
              key: 1,
              class: gA({ "mb-0": !n.value }),
              onConfigureOptions: $n,
              onEditTranslation: A[1] || (A[1] = (L) => qe(L, !0)),
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
          default: Wt(() => [
            Je(ne(ze), { class: "mt-0" })
          ]),
          _: 1
        })),
        Je(GV, {
          active: t.value,
          "onUpdate:active": A[2] || (A[2] = (L) => t.value = L)
        }, null, 8, ["active"]),
        Je(kV, {
          modelValue: Ge.value,
          "onUpdate:modelValue": A[3] || (A[3] = (L) => Ge.value = L),
          onDiscardTranslation: Vt
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const yA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: SA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, CA = window.Vue.resolveComponent, kA = window.Vue.createVNode, bA = window.Vue.normalizeClass, xA = window.Vue.openBlock, $A = window.Vue.createElementBlock;
function VA(e, t, n, o, s, a) {
  const r = CA("sx-sentence-selector");
  return xA(), $A("main", {
    class: bA(["sx-sentence-selector-view", a.classes])
  }, [
    kA(r)
  ], 2);
}
const EA = /* @__PURE__ */ Y(yA, [["render", VA]]), AA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, DA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const LA = window.Vue.resolveDirective, Wa = window.Vue.withDirectives, dt = window.Vue.openBlock, Kt = window.Vue.createElementBlock, Ka = window.Vue.createCommentVNode, Ya = window.Vue.Transition, Un = window.Vue.withCtx, go = window.Vue.createVNode, ds = window.Vue.createElementVNode, In = window.Vue.unref, TA = window.Vue.renderList, BA = window.Vue.Fragment, PA = window.Vue.normalizeClass, np = window.Vue.createBlock, FA = window.Vue.toDisplayString, MA = window.Vue.createTextVNode, NA = { class: "sx-quick-tutorial" }, UA = { class: "sx-quick-tutorial__main-point py-9 px-6" }, IA = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, zA = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, RA = { class: "sx-quick-tutorial__illustration" }, OA = ["innerHTML"], HA = ["innerHTML"], jA = { class: "sx-quick-tutorial__step-indicator py-3" }, qA = ["onClick"], GA = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, XA = {
  key: "secondary-point-1",
  class: "ma-0"
}, WA = {
  key: "secondary-point-2",
  class: "ma-0"
}, KA = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, op = window.Vue.ref, sp = window.Codex.CdxButton, YA = window.Codex.CdxIcon, JA = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = op(2), n = op(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = _e(), r = () => a.push({ name: "sx-sentence-selector" });
    return (l, u) => {
      const g = LA("i18n");
      return dt(), Kt("section", NA, [
        go(In(T), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Un(() => [
            ds("section", UA, [
              go(Ya, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Un(() => [
                  s(1) ? Wa((dt(), Kt("h2", IA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Wa((dt(), Kt("h2", zA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ka("", !0)
                ]),
                _: 1
              })
            ]),
            ds("section", RA, [
              go(Ya, { name: "mw-ui-animation-slide-start" }, {
                default: Un(() => [
                  s(1) ? (dt(), Kt("div", {
                    key: "illustration-1",
                    innerHTML: In(DA)
                  }, null, 8, OA)) : s(2) ? (dt(), Kt("div", {
                    key: "illustration-2",
                    innerHTML: In(AA)
                  }, null, 8, HA)) : Ka("", !0)
                ]),
                _: 1
              })
            ]),
            ds("div", jA, [
              (dt(!0), Kt(BA, null, TA(t.value, (i) => (dt(), Kt("span", {
                key: `dot-${i}`,
                class: PA(["dot mx-1", { "dot-active": s(i) }]),
                role: "button",
                onClick: (c) => n.value = i
              }, null, 10, qA))), 128))
            ]),
            ds("section", GA, [
              go(Ya, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Un(() => [
                  s(1) ? Wa((dt(), Kt("h3", XA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Wa((dt(), Kt("h3", WA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ka("", !0)
                ]),
                _: 1
              })
            ]),
            ds("div", KA, [
              go(Ya, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Un(() => [
                  s(1) ? (dt(), np(In(sp), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Un(() => [
                      go(In(YA), { icon: In(Hs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (dt(), np(In(sp), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: r
                  }, {
                    default: Un(() => [
                      MA(FA(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
const QA = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: JA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, ZA = window.Vue.resolveComponent, eD = window.Vue.createVNode, tD = window.Vue.normalizeClass, nD = window.Vue.openBlock, oD = window.Vue.createElementBlock;
function sD(e, t, n, o, s, a) {
  const r = ZA("sx-quick-tutorial");
  return nD(), oD("main", {
    class: tD(["sx-quick-tutorial-view", a.classes])
  }, [
    eD(r)
  ], 2);
}
const aD = /* @__PURE__ */ Y(QA, [["render", sD]]);
const iD = window.Vue.resolveDirective, ap = window.Vue.createElementVNode, rD = window.Vue.withDirectives, lD = window.Vue.unref, cD = window.Vue.withCtx, uD = window.Vue.createVNode, dD = window.Vue.openBlock, gD = window.Vue.createElementBlock, pD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, mD = { class: "sx-editor__original-content-panel__header mb-2" }, hD = ["lang", "dir", "innerHTML"], ip = window.Vue.ref, fD = window.Vue.onMounted, wD = {
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
    }, o = ip(null), s = ip(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return fD(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const u = iD("i18n");
      return dD(), gD("section", pD, [
        rD(ap("h5", mD, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        uD(lD(W0), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: cD(() => [
            ap("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, hD)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, _D = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const vD = window.Vue.unref, gs = window.Vue.createElementVNode, rp = window.Vue.resolveDirective, sl = window.Vue.withDirectives, SD = window.Vue.normalizeClass, yD = window.Vue.openBlock, CD = window.Vue.createElementBlock, kD = window.Vue.createCommentVNode, bD = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, xD = { class: "sx-editor__feedback-overlay-content px-4" }, $D = ["innerHTML"], VD = { class: "sx-editor__feedback-overlay-content__title" }, ED = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, al = window.Vue.computed, AD = window.Vuex.useStore, DD = {
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
    const t = e, { targetLanguage: n } = H(AD()), o = al(
      () => xt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = al(() => {
      const r = xt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = al(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = rp("i18n"), g = rp("i18n-html");
      return e.showFeedback ? (yD(), CD("div", bD, [
        gs("div", xD, [
          gs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: vD(_D)
          }, null, 8, $D),
          sl(gs("h2", VD, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          sl(gs("p", ED, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          sl(gs("p", {
            class: SD(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : kD("", !0);
    };
  }
}, LD = window.Vuex.useStore, TD = () => {
  const e = LD(), t = Sc(), { selectNextTranslationUnit: n } = $o(), { sourceSection: o, selectedContentTranslationUnit: s } = W(), { getCurrentTitleByLanguage: a } = Zt();
  return (r) => k(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = r, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), r = l.innerHTML;
    const { sourceLanguage: u, targetLanguage: g, currentMTProvider: i } = e.state.application;
    s.value instanceof Ue && (r = (yield dm(
      r,
      a(g, u),
      g
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const Me = window.Vue.unref, il = window.Vue.openBlock, rl = window.Vue.createBlock, lp = window.Vue.createCommentVNode, cp = window.Vue.createVNode, BD = window.Vue.createElementVNode, PD = window.Vue.withCtx, FD = { class: "sx-editor__editing-surface-container grow" }, ll = window.Vue.ref, MD = window.Vue.computed, ND = window.Vuex.useStore, UD = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ll(!1), o = _e(), s = ND(), a = () => n.value = !0, r = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: u, content: g, originalContent: i, title: c } = history.state, d = ll(null), p = ll(!1), { logEditorSegmentAddEvent: m } = Sh(), { targetLanguage: h, sourceLanguage: f } = H(s), { sourceSection: _ } = W(), w = MD(
      () => xt.calculateScore(
        d.value,
        g,
        h.value
      )
    ), S = TD(), y = (b) => k(this, null, function* () {
      d.value = b, p.value = !0;
      const x = new Promise((E) => setTimeout(E, 2e3));
      let F = Promise.resolve();
      l ? _.value.editedTranslation = b : (w.value === 0 && u && m(), F = S(b)), yield Promise.all([x, F]), p.value = !1, r();
    });
    return (b, x) => (il(), rl(Me(T), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: PD(() => [
        Me(i) ? (il(), rl(wD, {
          key: 0,
          language: Me(f),
          dir: Me(U.getDir)(Me(f)),
          "original-content": Me(i)
        }, null, 8, ["language", "dir", "original-content"])) : lp("", !0),
        n.value ? lp("", !0) : (il(), rl(Me(ze), { key: 1 })),
        BD("div", FD, [
          cp(DD, {
            "edited-translation": d.value,
            "show-feedback": p.value,
            "proposed-translation": Me(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          cp(m2, {
            content: Me(g),
            language: Me(h),
            dir: Me(U.getDir)(Me(h)),
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
const ID = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: UD
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
}, zD = window.Vue.resolveComponent, RD = window.Vue.createVNode, OD = window.Vue.normalizeClass, HD = window.Vue.openBlock, jD = window.Vue.createElementBlock;
function qD(e, t, n, o, s, a) {
  const r = zD("sx-editor");
  return HD(), jD("main", {
    class: OD(["sx-editor-view", a.classes])
  }, [
    RD(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const GD = /* @__PURE__ */ Y(ID, [["render", qD]]);
const Ct = window.Vue.unref, zn = window.Vue.createVNode, ps = window.Vue.withCtx, XD = window.Vue.resolveDirective, WD = window.Vue.withDirectives, KD = window.Vue.openBlock, YD = window.Vue.createBlock, up = window.Codex.CdxButton, dp = window.Codex.CdxIcon, JD = {
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
      const a = XD("i18n");
      return KD(), YD(Ct(T), { class: "ma-0 sx-publisher__header" }, {
        default: ps(() => [
          zn(Ct(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: ps(() => [
              zn(Ct(up), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ps(() => [
                  zn(Ct(dp), { icon: Ct(xo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          WD(zn(Ct(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          zn(Ct(C), { shrink: "" }, {
            default: ps(() => [
              zn(Ct(up), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: ps(() => [
                  zn(Ct(dp), { icon: Ct(rk) }, null, 8, ["icon"])
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
}, QD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, ZD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, gp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const cl = window.Vue.createElementVNode, pp = window.Vue.toDisplayString, ul = window.Vue.unref, dl = window.Vue.withCtx, mp = window.Vue.createVNode, eL = window.Vue.openBlock, tL = window.Vue.createBlock, nL = window.Vue.createCommentVNode, oL = ["innerHTML"], sL = ["textContent"], aL = ["textContent"], gl = window.Vue.computed, iL = {
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
        svg: QD,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: ZD,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: gp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: gp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = gl(() => o[n.status].svg), a = gl(() => o[n.status].title), r = gl(() => o[n.status].subtitle);
    return (l, u) => e.active ? (eL(), tL(ul(nt), {
      key: 0,
      "overlay-opacity": "high",
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: dl(() => [
        mp(ul(T), { class: "ma-4" }, {
          default: dl(() => [
            mp(ul(C), null, {
              default: dl(() => [
                cl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, oL),
                cl("h2", {
                  textContent: pp(a.value)
                }, null, 8, sL),
                cl("p", {
                  class: "ma-0",
                  textContent: pp(r.value)
                }, null, 8, aL)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : nL("", !0);
  }
};
const Ne = window.Vue.unref, gt = window.Vue.createVNode, Yt = window.Vue.withCtx, rL = window.Vue.resolveDirective, lL = window.Vue.withDirectives, hp = window.Vue.toDisplayString, cL = window.Vue.createTextVNode, pl = window.Vue.openBlock, fp = window.Vue.createElementBlock, uL = window.Vue.createCommentVNode, yh = window.Vue.createElementVNode, dL = window.Vue.createBlock, gL = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, pL = ["src"], mL = ["textContent"], hL = /* @__PURE__ */ yh("p", { class: "mt-0" }, null, -1), fL = window.Vue.computed, wL = window.Vue.inject, _L = window.Vue.ref, wp = window.Codex.CdxButton, vL = window.Codex.CdxIcon, SL = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: om,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = _L(""), s = () => n("close"), a = () => n("publish", o.value), r = wL("breakpoints"), l = fL(() => r.value.mobile);
    return (u, g) => {
      const i = rL("i18n");
      return e.active && e.captchaDetails ? (pl(), dL(Ne(nt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Yt(() => [
          gt(Ne(T), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Yt(() => [
              gt(Ne(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Yt(() => [
                  gt(Ne(wp), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Yt(() => [
                      gt(Ne(vL), { icon: Ne(xo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              lL(gt(Ne(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              gt(Ne(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Yt(() => [
                  gt(Ne(wp), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Yt(() => [
                      cL(hp(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          gt(Ne(oi))
        ]),
        default: Yt(() => [
          yh("div", gL, [
            e.captchaDetails.type === "image" ? (pl(), fp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, pL)) : (pl(), fp("p", {
              key: 1,
              textContent: hp(e.captchaDetails.question)
            }, null, 8, mL)),
            hL,
            gt(Ne(T), { class: "ma-0" }, {
              default: Yt(() => [
                gt(Ne(C), null, {
                  default: Yt(() => [
                    gt(Ne(ti), {
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
      }, 8, ["fullscreen"])) : uL("", !0);
    };
  }
};
const Rn = window.Vue.unref, ms = window.Vue.createVNode, Ja = window.Vue.withCtx, On = window.Vue.createElementVNode, yL = window.Vue.resolveDirective, CL = window.Vue.withDirectives, kL = window.Vue.renderList, _p = window.Vue.Fragment, ml = window.Vue.openBlock, vp = window.Vue.createElementBlock, bL = window.Vue.toDisplayString, xL = window.Vue.normalizeClass, $L = window.Vue.createBlock, VL = { class: "mw-ui-dialog__header" }, EL = { class: "row ma-0 px-4 py-3" }, AL = { class: "col shrink justify-center" }, DL = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, LL = { class: "mb-0" }, TL = { class: "pa-4" }, BL = ["textContent"], PL = window.Vuex.useStore, hs = window.Vue.computed, FL = window.Codex.CdxButton, ML = window.Codex.CdxIcon, NL = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = PL(), s = hs(() => o.state.application.publishTarget), a = hs(() => o.state.translator.isAnon), r = ue(), { sourceSection: l } = W(), u = hs(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), g = hs(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = hs(() => [
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
      const f = yL("i18n");
      return ml(), $L(Rn(nt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: d
      }, {
        header: Ja(() => [
          On("div", VL, [
            On("div", EL, [
              On("div", AL, [
                ms(Rn(FL), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: d
                }, {
                  default: Ja(() => [
                    ms(Rn(ML), { icon: Rn(Xm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              On("div", DL, [
                CL(On("h4", LL, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ms(Rn(oi))
          ])
        ]),
        default: Ja(() => [
          On("div", TL, [
            ms(Rn(b0), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: Ja(() => [
                (ml(!0), vp(_p, null, kL(i.value, (_, w) => (ml(), vp(_p, {
                  key: _.label
                }, [
                  ms(Rn(Vl), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  On("p", {
                    class: xL(["complementary ms-7 mt-0", c(w)]),
                    textContent: bL(_.details)
                  }, null, 10, BL)
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
const pt = window.Vue.unref, Hn = window.Vue.createVNode, UL = window.Vue.resolveDirective, Sp = window.Vue.withDirectives, Qa = window.Vue.openBlock, yp = window.Vue.createElementBlock, IL = window.Vue.createCommentVNode, Cp = window.Vue.toDisplayString, hl = window.Vue.createElementVNode, po = window.Vue.withCtx, kp = window.Vue.createBlock, zL = window.Vue.Fragment, RL = window.Vue.normalizeClass, OL = { class: "sx-publisher__review-info__content" }, HL = {
  key: 0,
  class: "complementary ma-0"
}, jL = ["textContent"], qL = ["textContent"], vn = window.Vue.computed, bp = window.Vue.ref, GL = window.Vue.watch, xp = window.Codex.CdxButton, fl = window.Codex.CdxIcon, XL = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = bp(0), o = bp(null);
    GL(o, () => {
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
          return Gm;
        case "error":
          return ak;
        default:
          return ck;
      }
    }), l = vn(() => a.value === "default"), u = vn(
      () => l.value ? "notice" : a.value
    ), g = vn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = ue(), c = vn(() => {
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
      const _ = UL("i18n-html");
      return Qa(), kp(pt(Kw), {
        type: u.value,
        class: RL(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: l.value
      }, {
        icon: po(() => [
          Hn(pt(fl), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: po(() => [
          hl("div", OL, [
            a.value === "default" ? Sp((Qa(), yp("p", HL, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (Qa(), yp(zL, { key: 1 }, [
              hl("h5", {
                textContent: Cp(d.value)
              }, null, 8, jL),
              hl("p", {
                textContent: Cp(c.value)
              }, null, 8, qL),
              Hn(pt(T), {
                justify: "between",
                class: "ma-0"
              }, {
                default: po(() => [
                  Sp(Hn(pt(C), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Qa(), kp(pt(C), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: po(() => [
                      Hn(pt(xp), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: po(() => [
                          Hn(pt(fl), { icon: pt(lc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Hn(pt(xp), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: po(() => [
                          Hn(pt(fl), { icon: pt(Hs) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : IL("", !0)
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
}, WL = (e) => {
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
}, KL = window.Vuex.useStore, YL = window.Vue.computed, JL = () => {
  const e = KL(), { currentTranslation: t } = en(), { currentMTProvider: n, previousRoute: o } = H(e), { currentTargetPage: s } = je(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = M(), { sourceSection: g } = W(), i = Oe(), c = YL(() => {
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
    return n.value && (h.translation_provider = K.getProviderForInstrumentation(n.value)), h.human_modification_rate = xt.getMTScoreForPageSection(
      g.value,
      r.value
    ) / 100, h.human_modification_threshold = xt.getMtModificationThreshold(), h;
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
}, $p = window.Vue.ref, QL = window.Vuex.useStore, ZL = () => {
  const e = QL(), { pageURLParameter: t } = M(), { sourceSection: n, targetPageTitleForPublishing: o } = W(), s = _h(), a = $p(!1), r = $p("pending"), l = () => a.value = !1, u = Sc(), {
    logPublishAttemptEvent: g,
    logPublishSuccessEvent: i,
    logPublishFailureEvent: c
  } = JL(), d = (m, h) => k(void 0, null, function* () {
    g();
    const f = yield u();
    if (f instanceof fo)
      return c(), { publishFeedbackMessage: f, targetUrl: null };
    const _ = f, {
      /** @type {PageSection} */
      sourceLanguage: w,
      targetLanguage: S
    } = e.state.application, y = o.value, b = e.getters["application/isSandboxTarget"], x = {
      html: WL(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: y,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: w,
      targetLanguage: S,
      revision: s.value,
      isSandbox: b,
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
    doPublish: (m = null, h = null) => k(void 0, null, function* () {
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
}, eT = window.Vue.computed, tT = () => {
  const e = _e(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = Zt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = M(), a = eT(
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
}, nT = window.Vuex.useStore, oT = () => {
  const e = nT(), { targetLanguage: t } = H(e), { sourceSection: n } = W();
  return () => {
    const o = xt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = xt.getScoreStatus(o);
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
}, sT = window.Vue.ref, aT = window.Vue.computed, iT = () => {
  const e = oT(), t = sT([]), n = aT(
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
}, rT = window.Vuex.useStore, lT = () => {
  const e = rT(), { currentSourcePage: t } = je(), { sourceLanguage: n, targetLanguage: o } = H(e), { sourceSection: s, targetPageTitleForPublishing: a } = W();
  return (r) => k(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], g = t.value.title, i = new mw.Title(g), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== c.user)
      try {
        yield ri.addWikibaseLink(
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
}, Vp = window.Vue.ref, cT = () => {
  const e = Vp(!1), t = Vp(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ce = window.Vue.unref, De = window.Vue.createVNode, uT = window.Vue.resolveDirective, fs = window.Vue.createElementVNode, dT = window.Vue.withDirectives, mo = window.Vue.withCtx, gT = window.Vue.openBlock, pT = window.Vue.createElementBlock, mT = { class: "sx-publisher" }, hT = { class: "sx-publisher__publish-panel pa-4" }, fT = { class: "mb-2" }, wT = ["innerHTML"], _T = { class: "sx-publisher__section-preview pa-5" }, vT = ["innerHTML"], Ep = window.Vue.computed, ST = window.Vue.onMounted, yT = window.Vue.ref, CT = window.Vue.watch, kT = window.Vuex.useStore, Ap = window.Codex.CdxButton, Dp = window.Codex.CdxIcon, bT = {
  __name: "SXPublisher",
  setup(e) {
    const t = kT(), { sourceSection: n } = W(), o = Ep(() => {
      var E;
      return (E = n.value) == null ? void 0 : E.title;
    }), s = ue(), a = Ep(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: g
    } = cT(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = iT(), h = lT(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: S } = ZL(), y = (E = null) => k(this, null, function* () {
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
    ST(() => m());
    const b = tT(), x = yT(!1), F = () => x.value = !0;
    return CT(x, (E) => {
      E || (p(), m());
    }), (E, P) => {
      const J = uT("i18n");
      return gT(), pT("section", mT, [
        De(JD, {
          "is-publishing-disabled": ce(c),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        fs("div", hT, [
          dT(fs("h5", fT, null, 512), [
            [J, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          fs("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, wT),
          De(ce(T), {
            justify: "end",
            class: "ma-0"
          }, {
            default: mo(() => [
              De(ce(C), { shrink: "" }, {
                default: mo(() => [
                  De(ce(Ap), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: F
                  }, {
                    default: mo(() => [
                      De(ce(Dp), { icon: ce(hk) }, null, 8, ["icon"])
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
        De(XL, { "publish-feedback-messages": ce(i) }, null, 8, ["publish-feedback-messages"]),
        fs("section", _T, [
          De(ce(T), { class: "pb-5 ma-0" }, {
            default: mo(() => [
              De(ce(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              De(ce(C), { shrink: "" }, {
                default: mo(() => [
                  De(ce(Ap), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ce(b)
                  }, {
                    default: mo(() => [
                      De(ce(Dp), { icon: ce(ac) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          fs("div", {
            innerHTML: ce(n).translationHtml
          }, null, 8, vT)
        ]),
        De(NL, {
          active: x.value,
          "onUpdate:active": P[0] || (P[0] = (B) => x.value = B)
        }, null, 8, ["active"]),
        De(SL, {
          active: ce(l),
          "captcha-details": ce(r),
          onClose: ce(g),
          onPublish: P[1] || (P[1] = (B) => y(B))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        De(iL, {
          active: ce(_),
          status: ce(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const xT = {
  name: "SxPublisherView",
  components: {
    SxPublisher: bT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, $T = window.Vue.resolveComponent, VT = window.Vue.createVNode, ET = window.Vue.normalizeClass, AT = window.Vue.openBlock, DT = window.Vue.createElementBlock;
function LT(e, t, n, o, s, a) {
  const r = $T("sx-publisher");
  return AT(), DT("main", {
    class: ET(["sx-publisher-view", a.classes])
  }, [
    VT(r)
  ], 2);
}
const TT = /* @__PURE__ */ Y(xT, [["render", LT]]);
const mt = window.Vue.unref, Sn = window.Vue.createVNode, jn = window.Vue.withCtx, wl = window.Vue.toDisplayString, _l = window.Vue.createElementVNode, BT = window.Vue.openBlock, PT = window.Vue.createBlock, FT = ["textContent"], MT = ["textContent"], NT = ["textContent"], Ch = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: ko,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (BT(), PT(mt(T), {
      class: "cx-search-suggestion pt-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: mt(U.getDir)(e.suggestion.language)
    }, {
      default: jn(() => [
        Sn(mt(C), { shrink: "" }, {
          default: jn(() => [
            Sn(mt(Hl), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Sn(mt(C), { class: "ms-4" }, {
          default: jn(() => [
            Sn(mt(T), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: jn(() => [
                Sn(mt(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: jn(() => [
                    _l("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: wl(e.suggestion.title)
                    }, null, 8, FT)
                  ]),
                  _: 1
                }),
                Sn(mt(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: jn(() => [
                    _l("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: wl(e.suggestion.description)
                    }, null, 8, MT)
                  ]),
                  _: 1
                }),
                Sn(mt(C), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: jn(() => [
                    Sn(mt(we), {
                      icon: mt(uw),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    _l("small", {
                      textContent: wl(e.suggestion.langLinksCount)
                    }, null, 8, NT)
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
}, UT = window.Vue.computed, Lp = window.Vue.ref, IT = window.Vue.watch, zT = (e, t) => {
  const o = Lp([]), s = Lp(!1), a = UT(
    () => o.value.slice(0, 4)
  ), r = uc(() => k(void 0, null, function* () {
    try {
      o.value = yield bo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return IT(t, () => {
    s.value = !0, o.value = [], r();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const ho = window.Vue.unref, ws = window.Vue.openBlock, vl = window.Vue.createBlock, RT = window.Vue.createCommentVNode, OT = window.Vue.resolveDirective, HT = window.Vue.withDirectives, Tp = window.Vue.createElementBlock, jT = window.Vue.renderList, qT = window.Vue.Fragment, GT = window.Vue.withCtx, XT = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, WT = window.Vue.computed, KT = window.Vuex.useStore, YT = {
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
      KT()
    ), s = WT(() => t.searchInput), { searchResultsLoading: a, searchResultsSlice: r } = zT(
      n,
      s
    );
    return (l, u) => {
      const g = OT("i18n");
      return ws(), vl(ho(Ie), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: GT(() => [
          ho(a) ? (ws(), vl(ho(ze), { key: 0 })) : ho(r).length === 0 ? HT((ws(), Tp("p", XT, null, 512)), [
            [g, [
              s.value,
              ho(o)
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : RT("", !0),
          (ws(!0), Tp(qT, null, jT(ho(r), (i) => (ws(), vl(Ch, {
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
const JT = window.Vue.toDisplayString, QT = window.Vue.createElementVNode, ZT = window.Vue.renderList, e6 = window.Vue.Fragment, Sl = window.Vue.openBlock, t6 = window.Vue.createElementBlock, Bp = window.Vue.createBlock, n6 = window.Vue.unref, Pp = window.Vue.withCtx, o6 = ["textContent"], Fp = {
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
    return (t, n) => (Sl(), Bp(n6(Ie), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: Pp(() => [
        QT("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: JT(e.cardTitle)
        }, null, 8, o6)
      ]),
      default: Pp(() => [
        (Sl(!0), t6(e6, null, ZT(e.suggestions, (o) => (Sl(), Bp(Ch, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, s6 = window.Vue.computed, a6 = (e, t) => s6(() => {
  const o = {
    value: "other",
    props: {
      icon: hw,
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
}), i6 = window.Vue.computed, r6 = (e, t, n) => i6(() => {
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
const l6 = window.Vue.resolveDirective, c6 = window.Vue.createElementVNode, yl = window.Vue.withDirectives, Ve = window.Vue.unref, _s = window.Vue.withCtx, kt = window.Vue.createVNode, vs = window.Vue.openBlock, Mp = window.Vue.createBlock, u6 = window.Vue.createCommentVNode, Cl = window.Vue.createElementBlock, d6 = window.Vue.Fragment, g6 = window.Vue.vShow, p6 = { class: "sx-article-search" }, m6 = { class: "mb-0" }, h6 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, Ss = window.Vue.ref, f6 = window.Vue.onMounted, kl = window.Vue.computed, Np = window.Vue.watch, w6 = window.Vue.inject, _6 = window.Vuex.useStore, v6 = window.Codex.CdxButton, S6 = window.Codex.CdxIcon, y6 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Ss(""), n = Ss(!1), o = Ss(null), s = Ss(!1), a = Ss([]), r = _6(), { sourceLanguage: l, targetLanguage: u } = H(r), { supportedLanguageCodes: g } = Is(), i = r6(
      l,
      u,
      a
    ), c = a6(
      l,
      i
    ), d = _e(), { fetchAllTranslations: p } = di();
    f6(() => k(this, null, function* () {
      var I;
      yield Hm()(), p();
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
    }, h = jm(), f = (B) => h(B, u.value), _ = (B) => {
      if (B === "other") {
        s.value = !0;
        return;
      }
      f(B);
    };
    Np(l, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const w = Oe();
    Np(t, () => {
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
    }, b = kl(
      () => r.getters["mediawiki/getRecentlyEditedPages"]
    ), x = kl(() => r.getters["mediawiki/getNearbyPages"]), F = w6("breakpoints"), E = kl(() => F.value.tabletAndDown), P = js(), J = (B, I) => P(
      B.title,
      l.value,
      u.value,
      I
    );
    return (B, I) => {
      const Q = l6("i18n");
      return vs(), Cl("section", p6, [
        kt(Ve(T), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: _s(() => [
            kt(Ve(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: _s(() => [
                yl(c6("h5", m6, null, 512), [
                  [Q, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            kt(Ve(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: _s(() => [
                kt(Ve(v6), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": B.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: m
                }, {
                  default: _s(() => [
                    kt(Ve(S6), { icon: Ve(xo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        kt(Ve(ti), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": I[0] || (I[0] = (X) => t.value = X),
          "icon-size": 20,
          icon: Ve($l),
          placeholder: B.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        kt(Ve(Ds), {
          class: "sx-article-search__language-button-group",
          items: Ve(c),
          active: Ve(l),
          onSelect: _
        }, null, 8, ["items", "active"]),
        t.value ? u6("", !0) : (vs(), Cl(d6, { key: 0 }, [
          b.value && b.value.length ? (vs(), Mp(Fp, {
            key: 0,
            "card-title": B.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: b.value,
            onSuggestionClicked: I[1] || (I[1] = (X) => J(X, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : x.value && x.value.length ? (vs(), Mp(Fp, {
            key: 1,
            "card-title": B.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: x.value,
            onSuggestionClicked: I[2] || (I[2] = (X) => J(X, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : yl((vs(), Cl("p", h6, null, 512)), [
            [Q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        yl(kt(YT, {
          "search-input": t.value,
          onSuggestionClicked: I[3] || (I[3] = (X) => J(X, "search_result"))
        }, null, 8, ["search-input"]), [
          [g6, !!t.value]
        ]),
        kt(Ve(nt), {
          value: s.value,
          "onUpdate:value": I[4] || (I[4] = (X) => s.value = X),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: E.value,
          header: E.value,
          title: B.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: _s(() => [
            kt(Ve(sh), {
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
const C6 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: y6
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, k6 = window.Vue.resolveComponent, b6 = window.Vue.createVNode, x6 = window.Vue.normalizeClass, $6 = window.Vue.openBlock, V6 = window.Vue.createElementBlock;
function E6(e, t, n, o, s, a) {
  const r = k6("sx-article-search");
  return $6(), V6("main", {
    class: x6(["sx-article-search-view", a.classes])
  }, [
    b6(r)
  ], 2);
}
const A6 = /* @__PURE__ */ Y(C6, [["render", E6]]), D6 = window.Vuex.useStore, kh = [
  {
    path: "",
    name: "dashboard",
    component: Id,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: A6,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: N$,
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
    component: hV,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: aD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: EA,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: GD,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: TT,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Id,
    meta: { workflowStep: 0 }
  }
], yc = ry({
  history: iS(),
  routes: kh
});
yc.beforeEach((e, t, n) => {
  const o = D6();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || jp.assertUser().catch((l) => {
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
    const l = Math.ceil(a) - 1, u = kh.find(
      (g) => g.meta.workflowStep === l
    );
    n({ name: u.name });
    return;
  }
  n();
});
yc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const L6 = window.Vue.createApp, T6 = mw.config.get("wgUserLanguage"), B6 = "en", P6 = mw.messages.values || {}, Vo = L6(n_);
Vo.use(yc);
Vo.use(Ev);
Vo.use(a1);
Vo.use(s1);
const F6 = N1({
  locale: T6,
  finalFallback: B6,
  messages: P6,
  wikilinks: !0
});
Vo.use(F6);
Vo.mount("#contenttranslation");
