/*@nomin*/
var Ph = Object.defineProperty, Fh = Object.defineProperties;
var Mh = Object.getOwnPropertyDescriptors;
var Dc = Object.getOwnPropertySymbols;
var Nh = Object.prototype.hasOwnProperty, Uh = Object.prototype.propertyIsEnumerable;
var Lc = (e, t, n) => t in e ? Ph(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ie = (e, t) => {
  for (var n in t || (t = {}))
    Nh.call(t, n) && Lc(e, n, t[n]);
  if (Dc)
    for (var n of Dc(t))
      Uh.call(t, n) && Lc(e, n, t[n]);
  return e;
}, Xe = (e, t) => Fh(e, Mh(t));
var k = (e, t, n) => new Promise((o, s) => {
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
  const { CdxButton: e, CdxIcon: t, CdxDialog: n, CdxInfoChip: o } = require("../codex.js");
  window.Codex = { CdxButton: e, CdxIcon: t, CdxDialog: n, CdxInfoChip: o };
}
const X = (e, t) => {
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
}, zh = window.Vue.toDisplayString, _i = window.Vue.openBlock, vi = window.Vue.createElementBlock, Rh = window.Vue.createCommentVNode, Tc = window.Vue.createElementVNode, Oh = window.Vue.normalizeClass, Hh = ["width", "height", "aria-labelledby"], jh = ["id"], qh = ["fill"], Gh = ["d"];
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
      Tc("g", { fill: n.iconColor }, [
        Tc("path", { d: a.iconImagePath }, null, 8, Gh)
      ], 8, qh)
    ], 8, Hh))
  ], 2);
}
const we = /* @__PURE__ */ X(Ih, [["render", Xh]]);
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
}, Kh = window.Vue.renderSlot, Yh = window.Vue.resolveComponent, Bc = window.Vue.normalizeClass, Ws = window.Vue.openBlock, Si = window.Vue.createBlock, yi = window.Vue.createCommentVNode, Jh = window.Vue.toDisplayString, Qh = window.Vue.createElementBlock, Zh = window.Vue.toHandlerKey, ef = window.Vue.withModifiers, tf = window.Vue.mergeProps, nf = window.Vue.createElementVNode, of = window.Vue.resolveDynamicComponent, sf = window.Vue.withCtx, af = { class: "mw-ui-button__content" }, rf = ["textContent"];
function lf(e, t, n, o, s, a) {
  const r = Yh("mw-icon");
  return Ws(), Si(of(a.component), {
    class: Bc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: sf(() => [
      Kh(e.$slots, "default", {}, () => [
        nf("span", af, [
          n.icon ? (Ws(), Si(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Bc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : yi("", !0),
          !a.isIcon && n.label ? (Ws(), Qh("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Jh(n.label)
          }, null, 8, rf)) : yi("", !0),
          n.indicator ? (Ws(), Si(r, tf({
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
const he = /* @__PURE__ */ X(Wh, [["render", lf]]);
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
}, uf = window.Vue.renderList, df = window.Vue.Fragment, Ci = window.Vue.openBlock, Pc = window.Vue.createElementBlock, gf = window.Vue.resolveComponent, pf = window.Vue.withModifiers, mf = window.Vue.mergeProps, hf = window.Vue.createBlock, ff = { class: "row mw-ui-button-group ma-0 pa-0" };
function wf(e, t, n, o, s, a) {
  const r = gf("mw-button");
  return Ci(), Pc("div", ff, [
    (Ci(!0), Pc(df, null, uf(n.items, (l) => (Ci(), hf(r, mf({
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
const As = /* @__PURE__ */ X(cf, [["render", wf]]);
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
}, Fc = window.Vue.renderSlot, vf = window.Vue.toDisplayString, Mc = window.Vue.openBlock, Nc = window.Vue.createElementBlock, Sf = window.Vue.createCommentVNode, yf = window.Vue.createElementVNode, Cf = { class: "mw-ui-card" }, kf = ["textContent"], bf = { class: "mw-ui-card__content" };
function xf(e, t, n, o, s, a) {
  return Mc(), Nc("div", Cf, [
    Fc(e.$slots, "header", {}, () => [
      n.title ? (Mc(), Nc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: vf(n.title)
      }, null, 8, kf)) : Sf("", !0)
    ]),
    yf("div", bf, [
      Fc(e.$slots, "default")
    ])
  ]);
}
const Ie = /* @__PURE__ */ X(_f, [["render", xf]]);
const $f = {}, Vf = window.Vue.openBlock, Ef = window.Vue.createElementBlock, Af = { class: "mw-ui-divider row" };
function Df(e, t) {
  return Vf(), Ef("div", Af);
}
const oi = /* @__PURE__ */ X($f, [["render", Df]]);
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
const Uf = /* @__PURE__ */ X(Lf, [["render", Nf]]), If = {
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
const T = /* @__PURE__ */ X(If, [["render", Gf]]), bl = ["mobile", "tablet", "desktop", "desktop-wide"], Xf = bl.reduce(
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
const C = /* @__PURE__ */ X(Wf, [["render", tw]]), nw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", ow = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", sw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", si = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", aw = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, iw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", rw = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Ip = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", xl = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", lw = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Ds = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", cw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", uw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", zp = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", $l = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", dw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Rp = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", gw = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", pw = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", hw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", fw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", ww = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", _w = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, ei = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, vw = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Op = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Sw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Hl = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", yw = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", Cw = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", kw = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const ki = window.Vue.computed, bw = window.Vue.watch, xw = window.Vue.ref, $w = window.Vue.nextTick, Vw = {
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
     * @values slide-right, slide-left, slide-up, slide-down
     **/
    animation: {
      type: String,
      default: "slide-left",
      validator: (e) => ["slide-right", "slide-left", "slide-up", "slide-down"].indexOf(
        e
      ) !== -1
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
     * Color of the overlay
     **/
    overlayColor: {
      type: String,
      default: "#fff"
    },
    /**
     * Opacity of the overlay
     **/
    overlayOpacity: {
      type: Number,
      default: 1
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
    const n = xw(null), o = ki(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = ki(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    bw(
      () => e.value,
      (u) => {
        u ? (r(), $w(() => {
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
      overlayStyles: s,
      mwIconClose: Ds,
      root: n
    };
  }
}, Uc = window.Vue.normalizeStyle, bi = window.Vue.createElementVNode, xi = window.Vue.renderSlot, Ks = window.Vue.resolveComponent, Eo = window.Vue.createVNode, $i = window.Vue.withCtx, Ic = window.Vue.createCommentVNode, Ew = window.Vue.withKeys, Aw = window.Vue.normalizeClass, zc = window.Vue.openBlock, Dw = window.Vue.createElementBlock, Lw = window.Vue.Transition, Tw = window.Vue.createBlock, Bw = { class: "mw-ui-dialog__shell items-stretch" }, Pw = { class: "mw-ui-dialog__body" };
function Fw(e, t, n, o, s, a) {
  const r = Ks("mw-col"), l = Ks("mw-button"), u = Ks("mw-row"), d = Ks("mw-divider");
  return zc(), Tw(Lw, {
    name: `mw-ui-animation-${n.animation}`,
    style: Uc(o.cssVars)
  }, {
    default: $i(() => [
      n.value ? (zc(), Dw("div", {
        key: 0,
        ref: "root",
        class: Aw(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Ew((i) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        bi("div", {
          class: "mw-ui-dialog__overlay",
          style: Uc(o.overlayStyles),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close)
        }, null, 4),
        bi("div", Bw, [
          n.header ? xi(e.$slots, "header", { key: 0 }, () => [
            Eo(u, { class: "mw-ui-dialog__header" }, {
              default: $i(() => [
                Eo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Eo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: $i(() => [
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
            Eo(d)
          ]) : Ic("", !0),
          bi("div", Pw, [
            xi(e.$slots, "default")
          ]),
          xi(e.$slots, "footer")
        ])
      ], 34)) : Ic("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const nt = /* @__PURE__ */ X(Vw, [["render", Fw]]);
const Mw = {
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
}, Rc = window.Vue.renderSlot, Nw = window.Vue.resolveComponent, Ys = window.Vue.openBlock, Vi = window.Vue.createBlock, Oc = window.Vue.createCommentVNode, Uw = window.Vue.resolveDynamicComponent, Iw = window.Vue.toDisplayString, zw = window.Vue.mergeProps, Rw = window.Vue.withModifiers, Ow = window.Vue.createElementVNode, Hw = window.Vue.normalizeClass, jw = window.Vue.createElementBlock, qw = { class: "mw-ui-input__content" };
function Gw(e, t, n, o, s, a) {
  const r = Nw("mw-icon");
  return Ys(), jw("div", {
    class: Hw(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Ow("div", qw, [
      Rc(e.$slots, "icon", {}, () => [
        n.icon ? (Ys(), Vi(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Oc("", !0)
      ]),
      (Ys(), Vi(Uw(n.type === "textarea" ? n.type : "input"), zw({
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
        textContent: Iw(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Rc(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ys(), Vi(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Rw((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Oc("", !0)
      ])
    ])
  ], 2);
}
const ti = /* @__PURE__ */ X(Mw, [["render", Gw]]);
const Xw = {
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
    mwIconClose: Ds,
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
      notice: _w,
      warning: Op,
      success: ei,
      error: vw
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
}, Ei = window.Vue.renderSlot, Js = window.Vue.resolveComponent, Hc = window.Vue.createVNode, jc = window.Vue.withCtx, qc = window.Vue.openBlock, Gc = window.Vue.createBlock, Xc = window.Vue.createCommentVNode, Ww = window.Vue.normalizeClass;
function Kw(e, t, n, o, s, a) {
  const r = Js("mw-icon"), l = Js("mw-col"), u = Js("mw-button"), d = Js("mw-row");
  return e.shown ? (qc(), Gc(d, {
    key: 0,
    class: Ww([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: jc(() => [
      Ei(e.$slots, "icon", {}, () => [
        Hc(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Hc(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: jc(() => [
          Ei(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      Ei(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (qc(), Gc(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Xc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Xc("", !0);
}
const Yw = /* @__PURE__ */ X(Xw, [["render", Kw]]);
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
const Jw = {}, Qw = window.Vue.createElementVNode, Zw = window.Vue.openBlock, e0 = window.Vue.createElementBlock, t0 = { class: "mw-ui-spinner" }, n0 = /* @__PURE__ */ Qw("div", { class: "mw-ui-spinner__bounce" }, null, -1), o0 = [
  n0
];
function s0(e, t) {
  return Zw(), e0("div", t0, o0);
}
const ze = /* @__PURE__ */ X(Jw, [["render", s0]]), Ze = {
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
const a0 = window.Vue.computed, i0 = {
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
      default: Hl
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
    const n = a0(() => {
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
}, Wc = window.Vue.normalizeStyle, Kc = window.Vue.openBlock, r0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const l0 = window.Vue.resolveComponent, c0 = window.Vue.createBlock;
function u0(e, t, n, o, s, a) {
  const r = l0("mw-ui-icon");
  return n.thumbnail ? (Kc(), r0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Wc(o.style)
  }, null, 4)) : (Kc(), c0(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Wc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const jl = /* @__PURE__ */ X(i0, [["render", u0]]);
const d0 = {
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
}, g0 = window.Vue.vModelRadio, Za = window.Vue.createElementVNode, p0 = window.Vue.withDirectives, m0 = window.Vue.toDisplayString, h0 = window.Vue.resolveComponent, f0 = window.Vue.normalizeClass, w0 = window.Vue.withCtx, _0 = window.Vue.openBlock, v0 = window.Vue.createBlock, S0 = { class: "mw-ui-radio__controls" }, y0 = ["id", "disabled", "name", "value"], C0 = /* @__PURE__ */ Za("span", { class: "mw-ui-radio__controls__icon" }, null, -1), k0 = ["for", "textContent"];
function b0(e, t, n, o, s, a) {
  const r = h0("mw-row");
  return _0(), v0(r, {
    class: f0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: w0(() => [
      Za("div", S0, [
        p0(Za("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, y0), [
          [g0, a.inputModel]
        ]),
        C0
      ]),
      Za("label", {
        for: n.id,
        class: "ps-2",
        textContent: m0(n.label)
      }, null, 8, k0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Vl = /* @__PURE__ */ X(d0, [["render", b0]]), Yc = window.Vue.h, x0 = {
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
      (o) => Yc(Vl, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Yc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const $0 = {
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
}, Jc = window.Vue.normalizeClass, Qc = window.Vue.normalizeStyle, V0 = window.Vue.createElementVNode, E0 = window.Vue.openBlock, A0 = window.Vue.createElementBlock, D0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function L0(e, t, n, o, s, a) {
  return E0(), A0("div", {
    class: Jc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Qc(a.containerStyles)
  }, [
    V0("div", {
      class: Jc(["mw-progress-bar__bar", a.barClass]),
      style: Qc(a.barStyles)
    }, null, 6)
  ], 14, D0);
}
const Hp = /* @__PURE__ */ X($0, [["render", L0]]), T0 = (e, t, n, o) => (s) => {
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
}, B0 = (e, t, n, o) => ({ initiateDrag: T0(
  e,
  t,
  n,
  o
) }), P0 = window.Vue.ref, Zc = window.Vue.computed, F0 = (e, t, n, o) => {
  const s = P0(0), a = Zc(
    () => t.value > e.value
  ), r = Zc(
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
const Qs = window.Vue.ref, M0 = window.Vue.onMounted, eu = window.Vue.computed, N0 = window.Vue.nextTick, U0 = {
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
    const t = Qs(!0), n = Qs(null), o = eu(
      () => Math.min(e.minHeight, s.value)
    ), s = Qs(1), { initiateDrag: a } = B0(
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
    } = F0(o, s, n, t), c = () => d(u.value + 1), g = Qs(null), p = eu(() => ({
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
    return M0(() => k(this, null, function* () {
      var f;
      yield N0(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: Sw,
      mwIconExpand: xl,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, I0 = window.Vue.renderSlot, z0 = window.Vue.normalizeClass, Zs = window.Vue.createElementVNode, R0 = window.Vue.resolveComponent, O0 = window.Vue.createVNode, Ai = window.Vue.openBlock, H0 = window.Vue.createBlock, tu = window.Vue.createCommentVNode, nu = window.Vue.createElementBlock, j0 = window.Vue.normalizeStyle, q0 = { class: "mw-ui-expandable-content__container" }, G0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, X0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function W0(e, t, n, o, s, a) {
  const r = R0("mw-button");
  return Ai(), nu("div", {
    class: "mw-ui-expandable-content",
    style: j0(o.cssVars)
  }, [
    Zs("div", q0, [
      Zs("div", {
        ref: "contentRef",
        class: z0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        I0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Ai(), nu("div", G0, [
        O0(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Ai(), H0(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : tu("", !0)
      ])) : tu("", !0)
    ]),
    Zs("div", X0, [
      Zs("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const K0 = /* @__PURE__ */ X(U0, [["render", W0]]);
const ea = window.Vue.computed, Y0 = {
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
    const t = ea(() => e.size / 2 * 0.9), n = ea(() => Math.PI * (t.value * 2)), o = ea(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ea(() => ({
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
}, ou = window.Vue.createElementVNode, su = window.Vue.normalizeStyle, J0 = window.Vue.openBlock, Q0 = window.Vue.createElementBlock, Z0 = ["width", "height", "viewport"], e1 = ["r", "cx", "cy", "stroke-dasharray"], t1 = ["r", "cx", "cy", "stroke-dasharray"];
function n1(e, t, n, o, s, a) {
  return J0(), Q0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: su(o.cssVars)
  }, [
    ou("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, e1),
    ou("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: su({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, t1)
  ], 12, Z0);
}
const o1 = /* @__PURE__ */ X(Y0, [["render", n1]]), s1 = window.Vue.ref, tn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, nn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${tn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${tn.tablet}px) and (max-width: ${tn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${tn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${tn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${tn.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${tn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${tn["desktop-wide"]}px)`
}, Di = {
  mobile: () => matchMedia(nn.mobile).matches,
  tablet: () => matchMedia(nn.tablet).matches,
  desktop: () => matchMedia(nn.desktop).matches,
  desktopwide: () => matchMedia(nn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(nn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(nn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(nn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(nn["desktop-and-down"]).matches
}, a1 = {
  install: (e) => {
    const t = () => {
      for (let o in Di)
        Di.hasOwnProperty(o) && (n.value[o] = Di[o]());
    }, n = s1({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Xe(ie({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, i1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Xe(ie({}, e.config.globalProperties.$mwui || {}), {
      colors: Ze
    }), e.provide("colors", Ze);
  }
};
class vo extends Error {
}
const r1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new vo();
}), jp = { assertUser: r1 };
const l1 = window.Vue.resolveDirective, Ao = window.Vue.createElementVNode, au = window.Vue.withDirectives, c1 = window.Vue.toDisplayString, u1 = window.Vue.unref, iu = window.Vue.withCtx, d1 = window.Vue.openBlock, g1 = window.Vue.createBlock, p1 = window.Vue.createCommentVNode, m1 = { class: "pa-4 sx-login-dialog__header" }, h1 = { class: "sx-login-dialog__body px-6 pb-4" }, f1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, w1 = ["href"], _1 = window.Vue.computed, v1 = window.Vue.ref, S1 = window.Vuex.useStore, y1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = S1(), n = _1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = v1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = l1("i18n");
      return n.value ? (d1(), g1(u1(nt), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: iu(() => [
          Ao("div", m1, [
            au(Ao("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: iu(() => [
          au(Ao("div", h1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          Ao("div", f1, [
            Ao("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, c1(a.$i18n("cx-sx-login-dialog-button-label")), 9, w1)
          ])
        ]),
        _: 1
      })) : p1("", !0);
    };
  }
}, j = new mw.cx.SiteMapper(), C1 = mw.util.getUrl, k1 = () => {
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
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = d;
  }
}
const ta = "original", na = "empty", b1 = {
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
      ta,
      na
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return b1[t] || t;
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
    return ta;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return na;
  }
  static isUserMTProvider(t) {
    return [ta, na].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === na ? "blank" : t === ta ? "source" : t.toLowerCase();
  }
}
class Sn {
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
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [Y.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
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
const ru = (e) => {
  var n;
  const t = ni(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ni = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, jn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), qp = (e) => {
  const t = ni(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = x1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, x1 = (e) => {
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
      (a) => jn(a)
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
      (t) => jn(t)
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
    return this.isBlockTemplate ? ru(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => jn(o));
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
    return n && ru(n) || "";
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
      (a) => jn(a)
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
    if (!t || Y.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => jn(s)
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
const $1 = [
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
], V1 = (e, t, n) => {
  let o, s, a, r, l;
  return !e || !t ? 0 : e === t ? 1 : (s = r = lu(e, n), a = l = lu(t, n), l.length > r.length && (s = l, a = r), o = s.filter(function(u) {
    return a.indexOf(u) >= 0;
  }), o.length / s.length);
}, lu = function(e, t) {
  return e ? $1.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Wp = 95, E1 = 85, A1 = [
  { status: "failure", value: 100 - Wp },
  { status: "warning", value: 100 - E1 },
  { status: "success", value: 100 }
], Kp = (e, t, n) => {
  const o = cu(e).textContent, s = cu(t).textContent, a = 100 - 100 * V1(s, o, n);
  return Math.ceil(a);
}, D1 = (e) => A1.find((t) => e <= t.value).status, L1 = (e, t) => Kp(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), T1 = () => (100 - Wp) / 100, cu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, bt = {
  calculateScore: Kp,
  getScoreStatus: D1,
  getMTScoreForPageSection: L1,
  getMtModificationThreshold: T1
}, oa = "__LEAD_SECTION__";
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
    return oa;
  }
  static isSectionLead(t) {
    return !t || t === oa;
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
    return n instanceof Ue ? n.transclusionNode.outerHTML : n instanceof Sn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ue ? t.blockTemplateSelected = !1 : t instanceof Sn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ue ? n.blockTemplateSelected = !0 : n instanceof Sn && (n.selected = !0);
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
    if (o instanceof Sn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ue ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Sn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ue ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Sn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = bt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? oa : this.originalTitle;
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
    return this.isLeadSection ? oa : this.title;
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
class ql extends ai {
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
    return El.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? El.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const ht = "previous-edits", xt = "popular", et = "topic", ge = "collections", mt = "automatic", uu = window.Vue.ref, B1 = mw.loader.require("ext.cx.articletopics"), sa = {
  type: mt,
  id: ht
}, Yp = () => {
  const e = uu(
    B1.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = uu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const r = s == null ? void 0 : s.toLowerCase(), l = a == null ? void 0 : a.toLowerCase();
    return r === et ? e.value.some((u) => u === a) ? { type: r, id: l } : (t.value = !0, sa) : r === ge ? { type: r, id: a } : l === ht ? {
      type: mt,
      id: ht
    } : l === xt ? {
      type: mt,
      id: xt
    } : l === ge ? {
      type: mt,
      id: ge
    } : sa;
  }, isDefaultFilter: ({ type: s, id: a }) => s === sa.type && a === sa.id };
}, P1 = window.Vue.inject, F1 = window.Vue.reactive;
var M1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Jp = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(M1, function() {
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
            function _(x) {
              return () => {
                for (let N = 0; N < x.length; N++) {
                  const Ee = x[N]();
                  if (Ee !== null)
                    return Ee;
                }
                return null;
              };
            }
            function w(x) {
              const N = f, Ee = [];
              for (let Dt = 0; Dt < x.length; Dt++) {
                const Lt = x[Dt]();
                if (Lt === null)
                  return f = N, null;
                Ee.push(Lt);
              }
              return Ee;
            }
            function S(x, N) {
              return () => {
                const Ee = f, Dt = [];
                let Lt = N();
                for (; Lt !== null; )
                  Dt.push(Lt), Lt = N();
                return Dt.length < x ? (f = Ee, null) : Dt;
              };
            }
            function y(x) {
              const N = x.length;
              return () => {
                let Ee = null;
                return m.slice(f, f + N) === x && (Ee = x, f += N), Ee;
              };
            }
            function b(x) {
              return () => {
                const N = m.slice(f).match(x);
                return N === null ? null : (f += N[0].length, N[0]);
              };
            }
            const V = b(/^\s+/), M = y("|"), E = y(":"), P = y("\\"), J = b(/^./), B = y("$"), I = b(/^\d+/), Q = y('"'), W = y("'"), ot = b(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Le = b(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), $t = _([ft, b(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function ft() {
              const x = w([P, J]);
              return x === null ? null : x[1];
            }
            const Vo = _([ft, Le]), xn = _([ft, ot]);
            function Vt() {
              const x = w([B, I]);
              return x === null ? null : ["REPLACE", parseInt(x[1], 10) - 1];
            }
            const qe = (en = b(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Et = function(x) {
              return x.toString();
            }, () => {
              const x = en();
              return x === null ? null : Et(x);
            });
            var en, Et;
            function At() {
              const x = w([M, S(0, qs)]);
              if (x === null)
                return null;
              const N = x[1];
              return N.length > 1 ? ["CONCAT"].concat(N) : N[0];
            }
            function Ge() {
              const x = w([qe, E, Vt]);
              return x === null ? null : [x[0], x[2]];
            }
            function v() {
              const x = w([qe, E, qs]);
              return x === null ? null : [x[0], x[2]];
            }
            function A() {
              const x = w([qe, E]);
              return x === null ? null : [x[0], ""];
            }
            const D = _([function() {
              const x = w([_([Ge, v, A]), S(0, At)]);
              return x === null ? null : x[0].concat(x[1]);
            }, function() {
              const x = w([qe, S(0, At)]);
              return x === null ? null : [x[0]].concat(x[1]);
            }]), L = y("{{"), q = y("}}"), oe = y("[["), R = y("]]"), z = y("["), Z = y("]");
            function st() {
              const x = w([L, D, q]);
              return x === null ? null : x[1];
            }
            const fe = _([function() {
              const x = w([S(1, qs), M, S(1, js)]);
              return x === null ? null : [["CONCAT"].concat(x[0]), ["CONCAT"].concat(x[2])];
            }, function() {
              const x = w([S(1, qs)]);
              return x === null ? null : [["CONCAT"].concat(x[0])];
            }]);
            function kc() {
              let x = null;
              const N = w([oe, fe, R]);
              if (N !== null) {
                const Ee = N[1];
                x = ["WIKILINK"].concat(Ee);
              }
              return x;
            }
            function bc() {
              let x = null;
              const N = w([z, S(1, Eh), V, S(1, js), Z]);
              return N !== null && (x = ["EXTLINK", N[1].length === 1 ? N[1][0] : ["CONCAT"].concat(N[1]), ["CONCAT"].concat(N[3])]), x;
            }
            const gi = b(/^[A-Za-z]+/);
            function bh() {
              const x = b(/^[^"]*/), N = w([Q, x, Q]);
              return N === null ? null : N[1];
            }
            function xh() {
              const x = b(/^[^']*/), N = w([W, x, W]);
              return N === null ? null : N[1];
            }
            function $h() {
              const x = b(/^\s*=\s*/), N = w([V, gi, x, _([bh, xh])]);
              return N === null ? null : [N[1], N[3]];
            }
            function Vh() {
              const x = S(0, $h)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], x);
            }
            const Eh = _([st, Vt, kc, bc, function() {
              const x = S(1, $t)();
              return x === null ? null : x.join("");
            }]), js = _([st, Vt, kc, bc, function() {
              let x = null;
              const N = f, Ee = y("<"), Dt = b(/^\/?/), Lt = b(/^\s*>/), pi = w([Ee, gi, Vh, Dt, Lt]);
              if (pi === null)
                return null;
              const $c = f, Vc = pi[1], mi = S(0, js)(), Ah = f, Ec = w([y("</"), gi, Lt]);
              if (Ec === null)
                return ["CONCAT", m.slice(N, $c)].concat(mi);
              const Dh = f, Lh = Ec[1], Ac = pi[2];
              if (function($n, Gs, hi, fi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if (($n = $n.toLowerCase()) !== (Gs = Gs.toLowerCase()) || fi.allowedHtmlElements.indexOf($n) === -1)
                  return !1;
                const Th = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Xs = 0, Bh = hi.length; Xs < Bh; Xs += 2) {
                  const wi = hi[Xs];
                  if (fi.allowedHtmlCommonAttributes.indexOf(wi) === -1 && (fi.allowedHtmlAttributesByElement[$n] || []).indexOf(wi) === -1 || wi === "style" && hi[Xs + 1].search(Th) !== -1)
                    return !1;
                }
                return !0;
              }(Vc, Lh, Ac.slice(1)))
                x = ["HTMLELEMENT", Vc, Ac].concat(mi);
              else {
                const $n = (Gs) => Gs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                x = ["CONCAT", $n(m.slice(N, $c))].concat(mi, $n(m.slice(Ah, Dh)));
              }
              return x;
            }, function() {
              const x = S(1, xn)();
              return x === null ? null : x.join("");
            }]), qs = _([st, Vt, function() {
              const x = S(1, Vo)();
              return x === null ? null : x.join("");
            }]), xc = function() {
              const x = S(0, js)();
              return x === null ? null : ["CONCAT"].concat(x);
            }();
            if (xc === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return xc;
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
})(Jp);
var N1 = Jp.exports;
const du = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Qp = Symbol("banana-context");
function ue() {
  const e = P1(Qp);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function U1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = F1(new N1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Qp, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = du(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = du(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const qn = window.Vue.ref, I1 = window.Vue.computed, Ls = qn(null), Ts = qn(null), Bs = qn(null), So = qn(null), Zp = qn(null), em = qn(null), tm = qn(null), { validateFilters: z1, filtersValidatorError: R1 } = Yp(), O1 = I1(() => ({
  type: em.value,
  id: tm.value
})), nm = (e, t) => {
  em.value = e, tm.value = t, bs("filter-type", e), t && bs("filter-id", t);
}, H1 = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), Bs.value = e == null ? void 0 : e.sourceTitle, Ls.value = e == null ? void 0 : e.sourceLanguage, Ts.value = e == null ? void 0 : e.targetLanguage, e instanceof ql && (t.set("draft", !0), Zp.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), So.value = e.sourceSectionTitle)), t.delete("title"), Ps(Object.fromEntries(t));
}, j1 = (e) => {
  So.value = e, bs("section", e);
}, q1 = (e) => {
  Bs.value = e, bs("page", e);
}, Ps = (e) => {
  history.replaceState(
    {},
    document.title,
    C1("Special:ContentTranslation", e)
  );
}, G1 = () => {
  const e = ue(), t = new URLSearchParams(location.search);
  Bs.value = t.get("page"), Ls.value = t.get("from"), Ts.value = t.get("to"), So.value = t.get("section");
  const n = z1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  nm(n.type, n.id), R1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, X1 = () => {
  const e = new URLSearchParams(location.search);
  So.value = null, e.delete("section"), e.delete("title"), Ps(Object.fromEntries(e));
}, bs = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), Ps(Object.fromEntries(n));
}, W1 = (e) => new URLSearchParams(location.search).get(e), K1 = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ls.value = e, Ts.value = t, n.delete("title"), Ps(Object.fromEntries(n));
}, Y1 = () => {
  Ls.value = null, Ts.value = null, Bs.value = null, So.value = null, Ps(null);
}, F = () => ({
  setLanguageURLParams: K1,
  setSectionURLParam: j1,
  setTranslationURLParams: H1,
  initializeURLState: G1,
  clearURLParameters: Y1,
  clearSectionURLParameter: X1,
  setUrlParam: bs,
  getUrlParam: W1,
  pageURLParameter: Bs,
  sourceLanguageURLParameter: Ls,
  targetLanguageURLParameter: Ts,
  sectionURLParameter: So,
  draftURLParameter: Zp,
  setPageURLParam: q1,
  currentSuggestionFilters: O1,
  setFilterURLParams: nm
});
const J1 = window.Vue.resolveDynamicComponent, gu = window.Vue.openBlock, pu = window.Vue.createBlock, Q1 = window.Vue.Transition, Do = window.Vue.withCtx, Lo = window.Vue.createVNode, Z1 = window.Vue.resolveComponent, Ti = window.Vue.unref, e_ = window.Vuex.useStore, t_ = window.Vue.computed, n_ = window.Vue.onMounted, o_ = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = F();
    t();
    const n = e_(), o = t_(
      () => n.state.application.autoSavePending
    );
    return n_(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && jp.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof vo && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const r = Z1("router-view");
      return gu(), pu(Ti(Uf), { id: "contenttranslation" }, {
        default: Do(() => [
          Lo(Ti(T), { class: "cx-container" }, {
            default: Do(() => [
              Lo(Ti(C), { cols: "12" }, {
                default: Do(() => [
                  Lo(r, null, {
                    default: Do(({ Component: l, route: u }) => [
                      Lo(Q1, {
                        name: u.meta.transitionName
                      }, {
                        default: Do(() => [
                          (gu(), pu(J1(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Lo(y1)
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
}, s_ = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, a_ = {
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
class ho {
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
const mu = (e) => {
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
class i_ {
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
    const t = mu((s = this.user) == null ? void 0 : s.content), n = mu((a = this.mt) == null ? void 0 : a.content);
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
class Gl extends ai {
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
const ii = mw.user.isAnon() ? void 0 : "user", sm = (e) => {
  if (e === "assertuserfailed")
    throw new vo();
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
        (u) => new ql(Xe(ie({}, u), { status: e }))
      ) : r = a.map(
        (u) => new Gl(Xe(ie({}, u), { status: e }))
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
function r_(e) {
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
      (a) => new i_(a)
    );
  });
}
function l_(e, t, n, o, s) {
  return k(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Y.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
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
        const g = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (c = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : c.content;
    }).catch((l) => Promise.reject(l));
  });
}
const c_ = (e, t, n) => {
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
}, u_ = ({
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
  return u && (g.captchaid = u, g.captchaword = d), new mw.Api().postWithToken("csrf", g).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new ho({
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
      publishFeedbackMessage: new ho({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, d_ = ({
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
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", c).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    sm(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new ho({ text: h, status: "error" });
  });
}, g_ = (e) => {
  const t = {
    assert: ii,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, p_ = () => {
  const e = {
    assert: ii,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Gl(n.cxcheckunreviewed.translation)
  );
}, m_ = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, h_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, f_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), tt = {
  fetchTranslations: am,
  fetchTranslationUnits: r_,
  fetchSegmentTranslation: l_,
  parseTemplateWikitext: c_,
  publishTranslation: u_,
  saveTranslation: d_,
  deleteTranslation: m_,
  fetchTranslatorStats: f_,
  deleteCXTranslation: h_,
  splitTranslation: g_,
  checkUnreviewedTranslations: p_
};
function w_(t) {
  return k(this, arguments, function* ({ commit: e }) {
    const n = yield tt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const __ = {
  fetchTranslatorStats: w_
}, v_ = {
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
}, S_ = {
  namespaced: !0,
  state: s_,
  getters: a_,
  actions: __,
  mutations: v_
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
], y_ = [
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
], C_ = [
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
], k_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], b_ = [
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
], x_ = {
  en: im,
  es: y_,
  bn: C_,
  fr: k_,
  de: b_
}, $_ = {
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
  appendixSectionTitles: x_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, V_ = {
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
class Cn {
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
class fo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Xl {
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
class rm extends yo {
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
    }), this.collection = new Xl(u);
  }
}
class lm extends Cn {
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
    }), this.collection = new Xl(c);
  }
}
const E_ = im, Jt = (n) => k(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function A_() {
  return k(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield Jt({ urlPostfix: t, urlParams: e })) || []).map((o) => new Xl(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function D_(e, t, n, o = 24) {
  return k(this, null, function* () {
    return ((yield Jt({ urlParams: {
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
const L_ = (e, t) => k(void 0, null, function* () {
  return ((yield Jt({ urlParams: {
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
}), T_ = (e, t) => k(void 0, null, function* () {
  const s = (yield Jt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new Cn({
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
}), B_ = (e, t, n = null) => k(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Jt({ urlParams: o })) || []).map(
    (a) => new rm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), P_ = (e, t, n = null) => k(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Jt({ urlPostfix: "/sections", urlParams: o })) || [];
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
function F_(e, t, n) {
  return k(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = j.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new Cn(a) : null;
  });
}
function M_(e, t, n) {
  return k(this, null, function* () {
    const a = (yield Jt({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (r) => new Cn({
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
function N_(e, t, n, o = 24) {
  return k(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Jt({ urlParams: s })) || []).map(
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
function U_(e, t, n, o = 24) {
  return k(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Jt({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new Cn({
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
function I_(e) {
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
function z_(e, t) {
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
function R_(e, t) {
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
function O_(e) {
  const t = E_.map((o) => encodeURIComponent(o)).join("|"), n = j.getCXServerUrl(
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
const H_ = (e, t, n) => {
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
}, j_ = (e) => {
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
}, q_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new fo(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, le = {
  fetchFavorites: q_,
  fetchPageSuggestions: D_,
  fetchSectionSuggestion: F_,
  fetchSectionSuggestions: M_,
  fetchSuggestionSeeds: z_,
  fetchAppendixTargetSectionTitles: O_,
  fetchSuggestionSourceSections: R_,
  markFavorite: H_,
  unmarkFavorite: j_,
  fetchUserEdits: I_,
  fetchMostPopularPageSuggestions: L_,
  fetchMostPopularSectionSuggestions: T_,
  fetchPageSuggestionsByTopics: N_,
  fetchSectionSuggestionsByTopics: U_,
  fetchPageCollections: A_,
  fetchPageSuggestionsByCollections: B_,
  fetchSectionSuggestionsByCollections: P_
};
function G_(o, s) {
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
const X_ = {
  fetchAppendixSectionTitles: G_
}, W_ = {
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
}, K_ = {
  namespaced: !0,
  state: $_,
  getters: V_,
  actions: X_,
  mutations: W_
}, Y_ = {
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
}, J_ = {
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
class Q_ {
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
function Z_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const ev = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), Z_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, tv = (e, t) => {
  let n, o;
  return t ? (n = ev(e), o = n.$element.find(
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
}, nv = (e, t) => {
  const n = Array.from(
    tv(e, t)
  );
  return ov(n).map(
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
          sentences: sv(c),
          node: c
        })
      ), i = !l;
      return new El({ id: u, title: l, subSections: d, isLeadSection: i });
    }
  );
}, ov = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, sv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Sn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), cm = {
  convertSegmentedContentToPageSections: nv
}, Wl = 120, av = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Wl,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return j.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => Xe(ie({}, i), { [c.to]: c.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, c) => Xe(ie({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new Co(Xe(ie({}, i), { _alias: c }));
    });
  });
}, iv = (e, t) => {
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
    var u, d;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new Q_(l, r)) : null;
  });
}, rv = (e, t, n) => {
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
    var u, d;
    return (d = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((l) => !!l));
}, lv = (e, t, n, o = null) => um(
  e,
  t,
  n,
  o
).then(
  (s) => new Co({
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
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, cv = (e) => k(void 0, null, function* () {
  const t = k1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Wl,
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
}), uv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Wl,
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
  fetchPages: av,
  fetchLanguageTitles: iv,
  fetchPageContent: lv,
  fetchSegmentedContent: um,
  fetchNearbyPages: cv,
  searchPagesByTitlePrefix: uv,
  fetchLanguageLinksForLanguage: rv
};
function dv() {
  return j.getLanguagePairs().then((e) => e.sourceLanguages);
}
function gv(e, t) {
  return k(this, null, function* () {
    const n = j.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Y(e, t, o.mt)
      )
    );
  });
}
function pv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function mv(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = j.getWikiDomainCode(e), r = j.getWikiDomainCode(t), l = {
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
const ri = {
  fetchSupportedLanguageCodes: dv,
  fetchSupportedMTProviders: gv,
  fetchCXServerToken: pv,
  addWikibaseLink: mv
};
function hv({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((r) => !e.getPage(n, r));
  const s = 50, a = [];
  for (let r = 0; r < o.length; r += s) {
    const l = o.slice(r, r + s), u = ko.fetchPages(n, l).then(
      (d) => d.forEach((i) => t("addPage", i))
    );
    a.push(u);
  }
  return Promise.all(a);
}
function fv(n) {
  return k(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield ri.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function wv(o) {
  return k(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield ko.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const _v = {
  fetchNearbyPages: wv,
  fetchPageMetadata: hv,
  fetchSupportedLanguageCodes: fv
}, vv = {
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
}, Sv = {
  namespaced: !0,
  state: Y_,
  getters: J_,
  actions: _v,
  mutations: vv
}, yv = {
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
}, Cv = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, kv = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => jn(a)
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
    (a) => jn(a)
  );
  return s ? tt.parseTemplateWikitext(
    qp(s),
    n,
    t
  ) : Promise.resolve(null);
}, bv = (o) => k(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
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
}), xv = { getCXServerToken: bv }, $v = {
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
  }
}, Vv = {
  namespaced: !0,
  state: yv,
  getters: Cv,
  actions: xv,
  mutations: $v
}, Ev = window.Vuex.createStore, Av = Ev({
  modules: { translator: S_, suggestions: K_, mediawiki: Sv, application: Vv }
});
function Dv() {
  return gm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Lv = typeof Proxy == "function", Tv = "devtools-plugin:setup", Bv = "plugin:settings:set";
let Gn, Al;
function Pv() {
  var e;
  return Gn !== void 0 || (typeof window != "undefined" && window.performance ? (Gn = !0, Al = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Gn = !0, Al = global.perf_hooks.performance) : Gn = !1), Gn;
}
function Fv() {
  return Pv() ? Al.now() : Date.now();
}
class Mv {
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
        return Fv();
      }
    }, n && n.on(Bv, (r, l) => {
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
    return k(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Nv(e, t) {
  const n = e, o = gm(), s = Dv(), a = Lv && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Tv, e, t);
  else {
    const r = a ? new Mv(n, s) : null;
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
const pm = window.Vue.getCurrentInstance, wo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const kt = window.Vue.computed, ys = window.Vue.unref, Uv = window.Vue.watchEffect, mm = window.Vue.defineComponent, Iv = window.Vue.reactive, hm = window.Vue.h, Bi = window.Vue.provide, zv = window.Vue.ref, fm = window.Vue.watch, Rv = window.Vue.shallowRef, Ov = window.Vue.shallowReactive, Hv = window.Vue.nextTick, Yt = typeof window != "undefined";
function jv(e) {
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
const Cs = () => {
}, Re = Array.isArray;
function O(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const qv = /\/$/, Gv = (e) => e.replace(qv, "");
function Fi(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Kv(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Xv(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function hu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function fu(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && kn(t.matched[o], n.matched[s]) && wm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function kn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Wv(e[n], t[n]))
      return !1;
  return !0;
}
function Wv(e, t) {
  return Re(e) ? wu(e, t) : Re(t) ? wu(t, e) : e === t;
}
function wu(e, t) {
  return Re(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Kv(e, t) {
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
var xs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(xs || (xs = {}));
var ks;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ks || (ks = {}));
function Yv(e) {
  if (!e)
    if (Yt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Gv(e);
}
const Jv = /^[^#]+#/;
function Qv(e, t) {
  return e.replace(Jv, "#") + t;
}
function Zv(e, t) {
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
function eS(e) {
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
    t = Zv(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function _u(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Dl = /* @__PURE__ */ new Map();
function tS(e, t) {
  Dl.set(e, t);
}
function nS(e) {
  const t = Dl.get(e);
  return Dl.delete(e), t;
}
let oS = () => location.protocol + "//" + location.host;
function _m(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), hu(u, "");
  }
  return hu(n, e) + o + s;
}
function sS(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = _m(e, location), m = n.value, h = t.value;
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
        type: xs.pop,
        direction: f ? f > 0 ? ks.forward : ks.back : ks.unknown
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
    g.state && g.replaceState(G({}, g.state, { scroll: li() }), "");
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
function vu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? li() : null
  };
}
function aS(e) {
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
  function a(u, d, i) {
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : oS() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? O("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = G({}, t.state, vu(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function l(u, d) {
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
    const c = G({}, vu(o.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function iS(e) {
  e = Yv(e);
  const t = aS(e), n = sS(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = G({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Qv.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function rS(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && O(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), iS(e);
}
function lS(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function vm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const on = {
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
var Su;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Su || (Su = {}));
const cS = {
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
    return `Redirected from "${e.fullPath}" to "${dS(t)}" via a navigation guard.`;
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
function _o(e, t) {
  return {}.NODE_ENV !== "production" ? G(new Error(cS[e](t)), {
    type: e,
    [Ll]: !0
  }, t) : G(new Error(), {
    type: e,
    [Ll]: !0
  }, t);
}
function Tt(e, t) {
  return e instanceof Error && Ll in e && (t == null || !!(e.type & t));
}
const uS = ["params", "query", "hash"];
function dS(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of uS)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const yu = "[^/]+?", gS = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, pS = /[.+*?^${}()[\]/\\]/g;
function mS(e, t) {
  const n = G({}, gS, t), o = [];
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
        c || (s += "/"), s += g.value.replace(pS, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || yu;
        if (w !== yu) {
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
        f && d.length < 2 ? `(?:/${S})` : "/" + S), f && (S += "?"), s += S, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
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
          if (Re(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = Re(_) ? _.join("/") : _;
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
function hS(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function fS(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = hS(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Cu(o))
      return 1;
    if (Cu(s))
      return -1;
  }
  return s.length - o.length;
}
function Cu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const wS = {
  type: 0,
  value: ""
}, _S = /[a-zA-Z0-9_]/;
function vS(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[wS]];
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
        u === "(" ? n = 2 : _S.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function SS(e, t, n) {
  const o = mS(vS(e.path), n);
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
function yS(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = xu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = CS(i);
    ({}).NODE_ENV !== "production" && $S(m, c), m.aliasOf = g && g.record;
    const h = xu(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const S = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of S)
        f.push(G({}, m, {
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
    for (const S of f) {
      const { path: y } = S;
      if (c && y[0] !== "/") {
        const b = c.record.path, V = b[b.length - 1] === "/" ? "" : "/";
        S.path = c.record.path + (y && V + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = SS(S, c, h), {}.NODE_ENV !== "production" && c && y[0] === "/" && VS(_, c), g ? (g.alias.push(_), {}.NODE_ENV !== "production" && xS(g, _)) : (w = w || _, w !== _ && w.alias.push(_), p && i.name && !bu(_) && r(i.name)), m.children) {
        const b = m.children;
        for (let V = 0; V < b.length; V++)
          a(b[V], _, g && g.children[V]);
      }
      g = g || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && u(_);
    }
    return w ? () => {
      r(w);
    } : Cs;
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
    for (; c < n.length && fS(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !Sm(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !bu(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw _o(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((S) => !g.keys.find((y) => y.name === S));
        w.length && O(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = G(
        // paramsFromLocation is a new object
        ku(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && ku(i.params, g.keys.map((w) => w.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && O(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((w) => w.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((w) => w.re.test(c.path)), !g)
        throw _o(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, p = G({}, c.params, i.params), m = g.stringify(p);
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
      meta: bS(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function ku(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function CS(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: kS(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function kS(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function bu(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function bS(e) {
  return e.reduce((t, n) => G(t, n.meta), {});
}
function xu(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Tl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function xS(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Tl.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Tl.bind(null, n)))
      return O(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function $S(e, t) {
  t && t.record.name && !e.name && !e.path && O(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function VS(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Tl.bind(null, n)))
      return O(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Sm(e, t) {
  return t.children.some((n) => n === e || Sm(e, n));
}
const ym = /#/g, ES = /&/g, AS = /\//g, DS = /=/g, LS = /\?/g, Cm = /\+/g, TS = /%5B/g, BS = /%5D/g, km = /%5E/g, PS = /%60/g, bm = /%7B/g, FS = /%7C/g, xm = /%7D/g, MS = /%20/g;
function Kl(e) {
  return encodeURI("" + e).replace(FS, "|").replace(TS, "[").replace(BS, "]");
}
function NS(e) {
  return Kl(e).replace(bm, "{").replace(xm, "}").replace(km, "^");
}
function Bl(e) {
  return Kl(e).replace(Cm, "%2B").replace(MS, "+").replace(ym, "%23").replace(ES, "%26").replace(PS, "`").replace(bm, "{").replace(xm, "}").replace(km, "^");
}
function US(e) {
  return Bl(e).replace(DS, "%3D");
}
function IS(e) {
  return Kl(e).replace(ym, "%23").replace(LS, "%3F");
}
function zS(e) {
  return e == null ? "" : IS(e).replace(AS, "%2F");
}
function $s(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && O(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function RS(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Cm, " "), r = a.indexOf("="), l = $s(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : $s(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      Re(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function $u(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = US(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Re(o) ? o.map((a) => a && Bl(a)) : [o && Bl(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function OS(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Re(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const HS = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Vu = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ci = Symbol({}.NODE_ENV !== "production" ? "router" : ""), $m = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Pl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
function yn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(_o(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : lS(c) ? l(_o(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? jS(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (O(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        O(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function jS(e, t, n) {
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
        if (qS(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(yn(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (O(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = jv(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && yn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function qS(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Eu(e) {
  const t = wo(ci), n = wo($m), o = kt(() => t.resolve(ys(e.to))), s = kt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(kn.bind(null, i));
    if (g > -1)
      return g;
    const p = Au(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Au(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(kn.bind(null, u[d - 2])) : g
    );
  }), a = kt(() => s.value > -1 && KS(n.params, o.value.params)), r = kt(() => s.value > -1 && s.value === n.matched.length - 1 && wm(n.params, o.value.params));
  function l(u = {}) {
    return WS(u) ? t[ys(e.replace) ? "replace" : "push"](
      ys(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Cs) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Yt) {
    const u = pm();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Uv(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: kt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const GS = /* @__PURE__ */ mm({
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
  useLink: Eu,
  setup(e, { slots: t }) {
    const n = Iv(Eu(e)), { options: o } = wo(ci), s = kt(() => ({
      [Du(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Du(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), XS = GS;
function WS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function KS(e, t) {
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
function Au(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Du = (e, t, n) => e != null ? e : t != null ? t : n, YS = /* @__PURE__ */ mm({
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
    ({}).NODE_ENV !== "production" && QS();
    const o = wo(Pl), s = kt(() => e.route || o.value), a = wo(Vu, 0), r = kt(() => {
      let d = ys(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = kt(() => s.value.matched[r.value]);
    Bi(Vu, kt(() => r.value + 1)), Bi(HS, l), Bi(Pl, s);
    const u = zv();
    return fm(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !kn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Lu(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = hm(g, G({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && Yt && f.ref) {
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
        Lu(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Lu(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const JS = YS;
function QS() {
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
function Bo(e, t) {
  const n = G({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => ry(o, ["instances", "children", "aliasOf"]))
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
function aa(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let ZS = 0;
function ey(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = ZS++;
  Nv({
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
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Vm
        });
      }
      Re(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
        let p = Dm, m = "";
        g.isExactActive ? (p = Am, m = "This is exactly active") : g.isActive && (p = Em, m = "This link is active"), i.tags.push({
          label: g.route.path,
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
      const g = {
        guard: aa("beforeEach"),
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
          data: g,
          groupId: i.meta.__navigationId
        }
      });
    }), t.afterEach((i, c, g) => {
      const p = {
        guard: aa("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = aa("❌")) : p.status = aa("✅"), p.from = Bo(c, "Current Location during this navigation"), p.to = Bo(i, "Target location"), s.addTimelineEvent({
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
      c.forEach(Bm), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Fl(g, i.filter.toLowerCase())
      ))), c.forEach((g) => Tm(g, t.currentRoute.value)), i.rootNodes = c.map(Lm);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: ny(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function ty(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ny(e) {
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
        display: e.keys.map((o) => `${o.name}${ty(o)}`).join(" "),
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
const Vm = 15485081, Em = 2450411, Am = 8702998, oy = 2282478, Dm = 16486972, sy = 6710886;
function Lm(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: oy
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
    backgroundColor: sy
  });
  let o = n.__vd_id;
  return o == null && (o = String(ay++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Lm)
  };
}
let ay = 0;
const iy = /^\/(.*)\/([a-z]*)$/;
function Tm(e, t) {
  const n = t.matched.length && kn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => kn(o, e.record))), e.children.forEach((o) => Tm(o, t));
}
function Bm(e) {
  e.__vd_match = !1, e.children.forEach(Bm);
}
function Fl(e, t) {
  const n = String(e.re).match(iy);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Fl(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = $s(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Fl(r, t));
}
function ry(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function ly(e) {
  const t = yS(e.routes, e), n = e.parseQuery || RS, o = e.stringifyQuery || $u, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = To(), r = To(), l = To(), u = Rv(on);
  let d = on;
  Yt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Pi.bind(null, (v) => "" + v), c = Pi.bind(null, zS), g = (
    // @ts-expect-error: intentionally avoid the type check
    Pi.bind(null, $s)
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
        params: g(Z.params),
        hash: $s(z.hash),
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
    ({}).NODE_ENV !== "production" && q && !q.startsWith("#") && O(`A \`hash\` should always start with the character "#". Replace "${q}" with "#${q}".`), L.params = i(g(L.params));
    const oe = Xv(o, G({}, v, {
      hash: NS(q),
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
        o === $u ? OS(v.query) : v.query || {}
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
    if (d !== v)
      return _o(8, {
        from: A,
        to: v
      });
  }
  function y(v) {
    return M(v);
  }
  function b(v) {
    return y(G(w(v), { replace: !0 }));
  }
  function V(v) {
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
  function M(v, A) {
    const D = d = _(v), L = u.value, q = v.state, oe = v.force, R = v.replace === !0, z = V(D);
    if (z)
      return M(
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
    return !oe && fu(o, L, D) && (st = _o(16, { to: Z, from: L }), Vt(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : J(Z, L)).catch((fe) => Tt(fe) ? (
      // navigation redirects still mark the router as ready
      Tt(
        fe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? fe : xn(fe)
    ) : (
      // reject any unknown error
      ft(fe, Z, L)
    )).then((fe) => {
      if (fe) {
        if (Tt(
          fe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          fu(o, _(fe.to), Z) && // and we have done it a couple of times
          A && // @ts-expect-error: added only in dev
          (A._count = A._count ? (
            // @ts-expect-error
            A._count + 1
          ) : 1) > 30 ? (O(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${Z.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : M(
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
    const A = Et.values().next().value;
    return A && typeof A.runWithContext == "function" ? A.runWithContext(v) : v();
  }
  function J(v, A) {
    let D;
    const [L, q, oe] = cy(v, A);
    D = Mi(L.reverse(), "beforeRouteLeave", v, A);
    for (const z of L)
      z.leaveGuards.forEach((Z) => {
        D.push(yn(Z, v, A));
      });
    const R = E.bind(null, v, A);
    return D.push(R), Ge(D).then(() => {
      D = [];
      for (const z of a.list())
        D.push(yn(z, v, A));
      return D.push(R), Ge(D);
    }).then(() => {
      D = Mi(q, "beforeRouteUpdate", v, A);
      for (const z of q)
        z.updateGuards.forEach((Z) => {
          D.push(yn(Z, v, A));
        });
      return D.push(R), Ge(D);
    }).then(() => {
      D = [];
      for (const z of oe)
        if (z.beforeEnter)
          if (Re(z.beforeEnter))
            for (const Z of z.beforeEnter)
              D.push(yn(Z, v, A));
          else
            D.push(yn(z.beforeEnter, v, A));
      return D.push(R), Ge(D);
    }).then(() => (v.matched.forEach((z) => z.enterCallbacks = {}), D = Mi(oe, "beforeRouteEnter", v, A), D.push(R), Ge(D))).then(() => {
      D = [];
      for (const z of r.list())
        D.push(yn(z, v, A));
      return D.push(R), Ge(D);
    }).catch((z) => Tt(
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
    const R = A === on, z = Yt ? history.state : {};
    D && (L || R ? s.replace(v.fullPath, G({
      scroll: R && z && z.scroll
    }, q)) : s.push(v.fullPath, q)), u.value = v, Vt(v, A, D, R), xn();
  }
  let Q;
  function W() {
    Q || (Q = s.listen((v, A, D) => {
      if (!At.listening)
        return;
      const L = _(v), q = V(L);
      if (q) {
        M(G(q, { replace: !0 }), L).catch(Cs);
        return;
      }
      d = L;
      const oe = u.value;
      Yt && tS(_u(oe.fullPath, D.delta), li()), J(L, oe).catch((R) => Tt(
        R,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? R : Tt(
        R,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (M(
        R.to,
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        Tt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === xs.pop && s.go(-1, !1);
      }).catch(Cs), Promise.reject()) : (D.delta && s.go(-D.delta, !1), ft(R, L, oe))).then((R) => {
        R = R || I(
          // after navigation, all matched components are resolved
          L,
          oe,
          !1
        ), R && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Tt(
          R,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === xs.pop && Tt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), B(L, oe, R);
      }).catch(Cs);
    }));
  }
  let ot = To(), Le = To(), $t;
  function ft(v, A, D) {
    xn(v);
    const L = Le.list();
    return L.length ? L.forEach((q) => q(v, A, D)) : ({}.NODE_ENV !== "production" && O("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function Vo() {
    return $t && u.value !== on ? Promise.resolve() : new Promise((v, A) => {
      ot.add([v, A]);
    });
  }
  function xn(v) {
    return $t || ($t = !v, W(), ot.list().forEach(([A, D]) => v ? D(v) : A()), ot.reset()), v;
  }
  function Vt(v, A, D, L) {
    const { scrollBehavior: q } = e;
    if (!Yt || !q)
      return Promise.resolve();
    const oe = !D && nS(_u(v.fullPath, 0)) || (L || !D) && history.state && history.state.scroll || null;
    return Hv().then(() => q(v, A, oe)).then((R) => R && eS(R)).catch((R) => ft(R, v, A));
  }
  const qe = (v) => s.go(v);
  let en;
  const Et = /* @__PURE__ */ new Set(), At = {
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
    isReady: Vo,
    install(v) {
      const A = this;
      v.component("RouterLink", XS), v.component("RouterView", JS), v.config.globalProperties.$router = A, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ys(u)
      }), Yt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !en && u.value === on && (en = !0, y(s.location).catch((q) => {
        ({}).NODE_ENV !== "production" && O("Unexpected error when starting the router:", q);
      }));
      const D = {};
      for (const q in on)
        Object.defineProperty(D, q, {
          get: () => u.value[q],
          enumerable: !0
        });
      v.provide(ci, A), v.provide($m, Ov(D)), v.provide(Pl, u);
      const L = v.unmount;
      Et.add(v), v.unmount = function() {
        Et.delete(v), Et.size < 1 && (d = on, Q && Q(), Q = null, u.value = on, en = !1, $t = !1), L();
      }, {}.NODE_ENV !== "production" && Yt && ey(v, A, t);
    }
  };
  function Ge(v) {
    return v.reduce((A, D) => A.then(() => P(D)), Promise.resolve());
  }
  return At;
}
function cy(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => kn(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => kn(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function _e() {
  return wo(ci);
}
const uy = {
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
}, dy = {
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
}, gy = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], py = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, my = {
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
}, hy = {
  languages: uy,
  scriptgroups: dy,
  rtlscripts: gy,
  regiongroups: py,
  territories: my
};
var xe = hy;
function Fs(e) {
  return !!xe.languages[e];
}
function bn(e) {
  return Fs(e) && xe.languages[e].length === 1 ? xe.languages[e][0] : !1;
}
function fy() {
  return xe.languages;
}
function Ms(e) {
  var t = bn(e);
  return t ? Ms(t) : Fs(e) ? xe.languages[e][0] : "Zyyy";
}
function Yl(e) {
  var t = bn(e);
  return t ? Yl(t) : Fs(e) && xe.languages[e][1] || "UNKNOWN";
}
function Vs(e) {
  var t = bn(e);
  return t ? Vs(t) : Fs(e) && xe.languages[e][2] || e;
}
function wy() {
  var e, t = {};
  for (e in xe.languages)
    bn(e) || (t[e] = Vs(e));
  return t;
}
function Pm(e) {
  var t, n, o = [];
  for (t in xe.languages)
    if (!bn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Ms(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function _y(e) {
  return Pm([e]);
}
function Fm(e) {
  var t;
  for (t in xe.scriptgroups)
    if (xe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Jl(e) {
  return Fm(Ms(e));
}
function Mm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = bn(n) || n, a = Jl(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Nm(e) {
  var t, n, o, s = {};
  for (t in xe.languages)
    if (!bn(t)) {
      for (n = 0; n < e.length; n++)
        if (Yl(t).includes(e[n])) {
          o = Jl(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function vy(e) {
  return Nm([e]);
}
function Sy(e) {
  var t, n, o, s = [];
  for (t = Mm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function yy(e, t) {
  var n = Vs(e) || e, o = Vs(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Um(e) {
  return xe.rtlscripts.includes(Ms(e));
}
function Cy(e) {
  return Um(e) ? "rtl" : "ltr";
}
function ky(e) {
  return xe.territories[e] || [];
}
function by(e, t) {
  t.target ? xe.languages[e] = [t.target] : xe.languages[e] = [t.script, t.regions, t.autonym];
}
var U = {
  addLanguage: by,
  getAutonym: Vs,
  getAutonyms: wy,
  getDir: Cy,
  getGroupOfScript: Fm,
  getLanguages: fy,
  getLanguagesByScriptGroup: Mm,
  getLanguagesByScriptGroupInRegion: vy,
  getLanguagesByScriptGroupInRegions: Nm,
  getLanguagesInScript: _y,
  getLanguagesInScripts: Pm,
  getLanguagesInTerritory: ky,
  getRegions: Yl,
  getScript: Ms,
  getScriptGroupOfLanguage: Jl,
  isKnown: Fs,
  isRedirect: bn,
  isRtl: Um,
  sortByScriptGroup: Sy,
  sortByAutonym: yy
};
const xy = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, $y = (e) => {
  const t = xy(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const at = window.Vue.unref, Xn = window.Vue.createVNode, Bt = window.Vue.createElementVNode, Tu = window.Vue.renderSlot, Bu = window.Vue.withModifiers, Ni = window.Vue.toDisplayString, Ui = window.Vue.withCtx, Vy = window.Vue.openBlock, Ey = window.Vue.createElementBlock, Ay = window.Vue.createCommentVNode, Dy = { class: "col shrink pe-4" }, Ly = { class: "col" }, Ty = { class: "cx-translation__details column justify-between ma-0" }, By = { class: "row ma-0" }, Py = { class: "col grow" }, Fy = { class: "col shrink ps-2" }, My = ["dir", "textContent"], Ny = ["dir", "textContent"], Uy = ["textContent"], Iy = window.Vuex.useStore, zy = window.Vue.computed, Im = {
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
    const n = e, o = Iy(), s = (l, u) => {
      const d = o.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = ue(), r = zy(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = $y(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (Vy(), Ey("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Bu((d) => l.$emit("click"), ["stop"]))
    }, [
      Bt("div", Dy, [
        Xn(at(jl), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Bt("div", Ly, [
        Bt("div", Ty, [
          Bt("div", By, [
            Bt("div", Py, [
              Tu(l.$slots, "title")
            ]),
            Bt("div", Fy, [
              Xn(at(we), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Bu((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Tu(l.$slots, "mid-content"),
          Xn(at(T), { class: "cx-translation__footer ma-0" }, {
            default: Ui(() => [
              Xn(at(C), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Ui(() => [
                  Bt("span", {
                    class: "mw-ui-autonym",
                    dir: at(U.getDir)(e.translation.sourceLanguage),
                    textContent: Ni(at(U.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, My),
                  Xn(at(we), {
                    icon: at(zp),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Bt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: at(U.getDir)(e.translation.targetLanguage),
                    textContent: Ni(at(U.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, Ny)
                ]),
                _: 1
              }),
              Xn(at(C), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Ui(() => [
                  Bt("span", {
                    textContent: Ni(r.value)
                  }, null, 8, Uy)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Ay("", !0);
  }
};
const Po = window.Vue.unref, Pu = window.Vue.toDisplayString, Ry = window.Vue.normalizeClass, Oy = window.Vue.createElementVNode, Ii = window.Vue.openBlock, Hy = window.Vue.createElementBlock, Fu = window.Vue.createCommentVNode, Mu = window.Vue.createVNode, ia = window.Vue.withCtx, Nu = window.Vue.createBlock, jy = ["lang", "textContent"], qy = ["lang", "textContent"], Gy = window.Vue.computed, Xy = window.Vue.inject, Wy = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: ql,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Xy("colors").gray200, s = Gy(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = _e(), { setTranslationURLParams: r } = F(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Ii(), Nu(Im, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Po(Ip),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: ia(() => [
        Oy("h5", {
          class: Ry(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Pu(e.translation.sourceTitle)
        }, null, 10, jy),
        e.translation.isLeadSectionTranslation ? Fu("", !0) : (Ii(), Hy("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Pu(e.translation.sourceSectionTitle)
        }, null, 8, qy))
      ]),
      "mid-content": ia(() => [
        e.translation.progress ? (Ii(), Nu(Po(T), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: ia(() => [
            Mu(Po(C), null, {
              default: ia(() => [
                Mu(Po(Hp), {
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
        })) : Fu("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Ky = window.Vue.computed, Yy = window.Vue.inject, Ns = () => {
  const e = Yy("breakpoints");
  return { isDesktop: Ky(
    () => !j.isMobileDomain() && e.value.tabletAndUp
  ) };
}, Wn = window.Vue.computed;
function H(e) {
  const t = Wn(() => e.state.application.sourceLanguage), n = Wn(() => e.state.application.targetLanguage), o = Wn(
    () => e.state.application.currentMTProvider
  ), s = Wn(
    () => U.getAutonym(t.value)
  ), a = Wn(
    () => U.getAutonym(n.value)
  ), r = Wn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const Uu = window.Vue.computed, Jy = window.Vuex.useStore;
function Us() {
  const e = Jy(), t = Uu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Uu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const Qy = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = F(), s = j.getCurrentWikiLanguageCode(), a = (c) => !e || Array.isArray(e) && e.includes(c), r = (c) => t.includes(c), l = {
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
}, Zy = window.Vuex.useStore, Ql = () => {
  const e = Zy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
}, eC = window.Vuex.useStore, ui = () => {
  const e = eC(), { sourceLanguage: t, targetLanguage: n } = H(e), o = (l) => {
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
class tC {
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
const nC = window.Vuex.useStore, Zl = window.Vue.ref, oC = Zl([]), sC = Zl([]);
let zi = !1, Iu = !1, zu = !1, Ri = Zl(!1), Fo = null;
const ra = {
  page: oC,
  section: sC
}, zm = () => {
  const e = nC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), o = () => k(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !zi)
      return zi = !0, d.map(
        (i) => i.sourceTitle
      );
    if (zi = !0, !Iu) {
      const i = yield le.fetchUserEdits(t.value).then((c) => (Iu = !0, c));
      if (i.length)
        return i;
    }
    if (!zu) {
      const i = yield le.fetchUserEdits(t.value).then((c) => (zu = !0, c));
      if (i.length)
        return ko.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), s = (d) => {
    let i = ra[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new tC({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ra[d].value.push(i)), i;
  }, a = () => k(void 0, null, function* () {
    const d = yield le.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const i in ra) {
      const c = s(i);
      c.seeds = [...c.seeds, ...d || []];
    }
  }), r = () => k(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const c in ra) {
        const g = s(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => Fo || (Fo = r(), Fo.finally(() => {
    Fo = null;
  }));
  return { getSuggestionSeed: (d) => k(void 0, null, function* () {
    let i = s(d);
    i.seeds.length || (yield l());
    let c = i.shiftSeeds();
    return !c && !Ri.value && (yield a(), c = i.shiftSeeds(), Ri.value = !0), c;
  }), defaultSeedsFetched: Ri };
}, aC = 5;
function Es(e) {
  return k(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < aC);
  });
}
const iC = window.Vuex.useStore, rC = () => {
  const e = iC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), { getSuggestionSeed: o } = zm(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ui(), l = {
    id: ht,
    type: mt
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => k(void 0, null, function* () {
      const c = [];
      return yield Es(() => k(void 0, null, function* () {
        const g = yield o("page");
        if (!g)
          return !0;
        let p = yield le.fetchPageSuggestions(
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
    fetchSectionSuggestionsBasedOnEdits: (i) => k(void 0, null, function* () {
      const c = [];
      return yield Es(() => k(void 0, null, function* () {
        const g = yield o("section");
        if (!g)
          return !0;
        const p = yield le.fetchSectionSuggestions(
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
}, lC = window.Vuex.useStore, cC = () => {
  const e = lC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), o = {
    id: xt,
    type: mt
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ui();
  return { fetchSectionSuggestionsPopular: (d) => k(void 0, null, function* () {
    const i = [];
    return yield Es(() => k(void 0, null, function* () {
      const c = yield le.fetchMostPopularSectionSuggestions(
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
  }), fetchPageSuggestionsPopular: (d) => k(void 0, null, function* () {
    const i = [];
    return yield Es(() => k(void 0, null, function* () {
      let c = yield le.fetchMostPopularPageSuggestions(
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
}, Rm = window.Vue.ref, Ru = Rm([]), Ou = Rm(!1), Om = () => ({ pageCollections: Ru, fetchPageCollections: () => k(void 0, null, function* () {
  try {
    Ru.value = yield le.fetchPageCollections(), Ou.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Ou });
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
const la = window.Vue.computed, Hu = mw.loader.require("ext.cx.articletopics"), uC = (e) => new Ml({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: et
  }))
}), ec = () => {
  const e = ue(), { currentSuggestionFilters: t, setFilterURLParams: n } = F(), o = {
    id: ht,
    type: mt,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: xt,
    type: mt,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: ge,
    type: mt,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: r, pageCollectionsFetched: l } = Om(), u = la(() => {
    const w = new Ml({
      id: mt,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return r.value.length && w.filters.push(a), w;
  }), d = (w) => ({
    id: w.name,
    label: w.name,
    type: ge
  }), i = la(
    () => new Ml({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: r.value.map(
        (w) => d(w)
      )
    })
  ), c = la(() => {
    const w = [
      u.value,
      ...Hu.map(uC)
    ];
    return r.value.length && w.splice(1, 0, i.value), w;
  }), g = la(
    () => [t.value.type, t.value.id].includes(
      ge
    ) && !l.value
  ), p = () => {
    if (g.value)
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
      const y = Hu.flatMap((b) => b.topics).find((b) => b.topicId === w);
      return y ? y.orestopics : [];
    },
    waitingForPageCollectionsFetch: g
  };
}, dC = window.Vuex.useStore, gC = () => {
  const e = dC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ui(), { getOresTopics: l } = ec();
  return {
    fetchPageSuggestionsByTopics: (i) => k(void 0, null, function* () {
      const c = o.value.id, g = {
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
        (h) => h.suggestionProvider = g
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (i) => k(void 0, null, function* () {
      const c = o.value.id, g = {
        id: c,
        type: et
      }, p = l(c), m = [];
      return yield Es(() => k(void 0, null, function* () {
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
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, pC = window.Vuex.useStore, mC = window.Vue.computed, hC = () => {
  const e = pC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), s = mC(() => {
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
    fetchPageSuggestionsByCollections: () => k(void 0, null, function* () {
      const i = [];
      let c = yield le.fetchPageSuggestionsByCollections(
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
};
window.Vue.computed;
const tc = () => {
  const { currentSuggestionFilters: e } = F(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = rC(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = cC(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = gC(), {
    fetchPageSuggestionsByCollections: l,
    fetchSectionSuggestionsByCollections: u
  } = hC(), d = {
    [ht]: t,
    [xt]: o,
    [ge]: l,
    [et]: a
  }, i = {
    [ht]: n,
    [xt]: s,
    [ge]: u,
    [et]: r
  }, c = (m) => m.type === mt ? m.id : m.type;
  return {
    getFilterProvider: c,
    getCurrentPageSuggestionProvider: () => d[c(e.value)],
    getCurrentSectionSuggestionProvider: () => i[c(e.value)]
  };
}, fC = window.Vuex.useStore, nc = () => {
  const e = fC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Ql(), { sourceLanguageURLParameter: o } = F(), s = () => {
    const c = t(), g = e.state.suggestions.maxSuggestionsPerSlice;
    return g - c.length % g;
  }, a = () => {
    const c = n(), g = e.state.suggestions.maxSuggestionsPerSlice;
    return g - c.length % g;
  }, {
    getCurrentPageSuggestionProvider: r,
    getCurrentSectionSuggestionProvider: l
  } = tc(), u = (c) => {
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
}, wC = window.Vuex.useStore, oc = () => {
  const e = wC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = nc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Ql();
  return () => k(void 0, null, function* () {
    const { targetLanguage: a } = H(e), r = s(0), l = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, d = r.length === u, i = l.length === u;
    d && i || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      a.value
    ), t(), n());
  });
}, _C = window.Vuex.useStore, sc = () => {
  const e = _C();
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
}, ju = window.Vue.computed, vC = window.Vuex.useStore, Qt = () => {
  const e = vC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = F(), s = ju(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = ju(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, Is = window.Vuex.useStore, zs = (e, t, n, o, s = {}) => {
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
}, { setLanguageURLParams: SC, pageURLParameter: yC, sectionURLParameter: CC } = F(), Rs = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), SC(t, n);
}, Hm = () => {
  const e = Is(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Us();
  return () => k(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = Qy(
      t.value,
      n.value
    );
    zs(
      o,
      s,
      yC.value,
      CC.value
    ) || Rs(e, o, s);
  });
}, jm = () => {
  const e = Is(), t = oc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = H(e);
    n === o && (n = a.value, o = s.value), zs(
      n,
      o,
      null,
      null
    ) || (Rs(e, n, o), t());
  };
}, kC = () => {
  const e = Is(), t = oc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: r } = n;
      zs(
        o,
        s,
        a,
        r,
        { draft: !0 }
      ) || (Rs(e, o, s), t());
    }
  );
}, bC = () => {
  const e = Is();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    zs(
      n,
      o,
      s,
      null
    ) || Rs(e, n, o);
  };
}, xC = () => {
  const e = Is(), t = sc(), { currentLanguageTitleGroup: n, targetPageExists: o } = Qt();
  return (s, a) => k(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l,
      setPageURLParam: u,
      clearSectionURLParameter: d
    } = F();
    s === a && (s = l.value, a = r.value);
    const i = n.value.getTitleForLanguage(s);
    zs(
      s,
      a,
      i,
      null
    ) || (Rs(e, s, a), u(i), o.value ? (d(), yield t(
      r.value,
      l.value,
      i
    )) : yield e.dispatch("mediawiki/fetchPageMetadata", {
      language: r.value,
      titles: [i]
    }), e.dispatch("application/getCXServerToken"));
  });
}, $C = window.Vuex.useStore, qm = [], VC = (e, t, n) => qm.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), EC = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  qm.push(o);
}, AC = () => {
  const e = $C();
  return (t, n, o) => k(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !VC(t, n, o) && (s = yield le.fetchSectionSuggestion(
      t,
      o,
      n
    ), EC(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, DC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', LC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', TC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', BC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', PC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', FC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', MC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', NC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', UC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', IC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', zC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', RC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', OC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', HC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', jC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', qC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', GC = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', XC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', WC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', KC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', YC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', JC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', QC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', ZC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', ek = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', tk = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', nk = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ok = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', sk = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Nl = DC, Gm = LC, ak = {
  ltr: TC,
  shouldFlip: !0
}, Xm = {
  ltr: BC,
  shouldFlip: !0
}, ac = {
  ltr: PC,
  shouldFlip: !0
}, ik = FC, Wm = MC, Km = NC, rk = UC, lk = IC, ck = zC, bo = RC, ic = OC, rc = HC, uk = jC, Ym = qC, dk = {
  langCodeMap: {
    ar: GC
  },
  default: XC
}, gk = WC, lc = {
  ltr: KC,
  shouldFlip: !0
}, pk = YC, Os = {
  ltr: JC,
  shouldFlip: !0
}, cc = {
  ltr: QC,
  shouldFlip: !0
}, mk = {
  ltr: ZC,
  shouldFlip: !0
}, Jm = ek, hk = tk, fk = nk, wk = ok, Qm = sk, Zm = "cx-translation-session-position-", eh = () => Zm + mw.user.sessionId(), th = () => {
  const e = eh();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, _k = function() {
  const e = th();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Zm)).forEach((n) => mw.storage.remove(n));
  const t = eh();
  mw.storage.set(t, e + 1);
};
let Ul = null;
function vk(e) {
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
function Sk(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function yk(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = th(), u = {
    $schema: "/analytics/mediawiki/content_translation_event/1.7.0",
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
  ) : d = vk(r).then((i) => {
    Ul = i, mw.eventLog.submit(
      s,
      Object.assign({}, u, e, {
        user_global_edit_count: i,
        user_global_edit_count_bucket: Sk(i)
      })
    );
  }), d.then(() => {
    _k();
  });
}
const Oe = () => yk, nh = window.Vue.ref, oh = nh(null), Il = nh(null), Ck = (e) => {
  oh.value = e;
}, kk = (e) => {
  Il.value = e;
}, uc = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = F(), s = Oe();
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
    setStartTranslationEventSource: Ck,
    setStartTranslationEventContext: kk
  };
}, bk = window.Vuex.useStore, Hs = () => {
  const e = bk(), t = _e(), n = sc(), { setTranslationURLParams: o } = F(), { setStartTranslationEventSource: s, setStartTranslationEventContext: a } = uc();
  return (r, l, u, d, i = null) => k(void 0, null, function* () {
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
const ca = window.Vue.withModifiers, Oi = window.Vue.toDisplayString, Hi = window.Vue.createElementVNode, We = window.Vue.unref, ua = window.Vue.openBlock, qu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const sn = window.Vue.createVNode, Vn = window.Vue.withCtx, Gu = window.Vue.createElementBlock, xk = ["lang", "href", "textContent"], $k = {
  key: 1,
  class: "flex"
}, Vk = { key: 2 }, Ek = window.Vuex.useStore, Xu = window.Vue.computed, Wu = window.Vue.ref, ji = window.Codex.CdxButton, qi = window.Codex.CdxIcon, Ak = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Gl,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Ek(), o = Wu(!0), s = Wu(null), a = Xu(() => {
      var f;
      return (f = s.value) == null ? void 0 : f.missingSections;
    }), r = Xu(
      () => a.value && Object.keys(a.value)[0]
    );
    AC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((f) => s.value = f).catch((f) => console.log(f)).finally(() => o.value = !1), _e(), Ns();
    const { setTranslationURLParams: u, setSectionURLParam: d } = F(), i = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, c = Hs(), { sourceLanguage: g, targetLanguage: p } = H(n), m = bC(), h = (f) => {
      m(t.translation), c(
        t.translation.sourceTitle,
        g.value,
        p.value,
        "continue_published"
      ), f && d(f);
    };
    return (f, _) => (ua(), qu(Im, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: i
    }, {
      title: Vn(() => [
        Hi("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: _[0] || (_[0] = ca(() => {
          }, ["stop"])),
          textContent: Oi(e.translation.sourceTitle)
        }, null, 8, xk)
      ]),
      "mid-content": Vn(() => [
        sn(We(T), { class: "ma-0" }, {
          default: Vn(() => [
            sn(We(C), null, {
              default: Vn(() => [
                o.value ? (ua(), qu(We(ze), { key: 0 })) : a.value ? (ua(), Gu("div", $k, [
                  sn(We(ji), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: _[1] || (_[1] = ca((w) => h(r.value), ["stop"]))
                  }, {
                    default: Vn(() => [
                      sn(We(qi), {
                        class: "me-1",
                        icon: We(Nl)
                      }, null, 8, ["icon"]),
                      Hi("span", null, Oi(r.value), 1)
                    ]),
                    _: 1
                  }),
                  sn(We(ji), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": f.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: _[2] || (_[2] = ca((w) => h(null), ["stop"]))
                  }, {
                    default: Vn(() => [
                      sn(We(qi), { icon: We(rc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (ua(), Gu("div", Vk, [
                  sn(We(ji), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: _[3] || (_[3] = ca((w) => h(null), ["stop"]))
                  }, {
                    default: Vn(() => [
                      sn(We(qi), {
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
}, Ku = window.Vuex.useStore, Dk = () => {
  const e = Ku(), { commit: t } = Ku(), { sourceLanguage: n, targetLanguage: o } = H(e), s = Oe();
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
const Lk = window.Vue.resolveDirective, Gi = window.Vue.createElementVNode, Tk = window.Vue.withDirectives, Xi = window.Vue.unref, Yu = window.Vue.createVNode, Ju = window.Vue.withCtx, Bk = window.Vue.openBlock, Pk = window.Vue.createBlock, Fk = { class: "pa-4" }, Mk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Nk = {
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
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Dk(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const d = Lk("i18n");
      return Bk(), Pk(Xi(nt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": l.$mwui.colors.gray700,
        header: !1,
        "min-height": "unset"
      }, {
        footer: Ju(() => [
          Gi("div", Mk, [
            Yu(Xi(he), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Yu(Xi(he), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Ju(() => [
          Gi("div", Fk, [
            Tk(Gi("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
};
function Uk(e, t, n) {
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
    return s.length ? s : n ? (yield Ik(t, n)).filter((r) => e.includes(r)) : [];
  });
}
function Qu(e, t, n) {
  return k(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(U.sortByAutonym) : (yield Uk(e, t, n)).sort(U.sortByAutonym);
  });
}
function Ik(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function zk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Rk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function Ok(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const Hk = window.Vue.computed;
function jk(e, t) {
  const n = Hk(() => {
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
const Wi = window.Vue.ref, Zu = window.Vue.watch, qk = window.Vue.computed;
function Gk(e, t, n) {
  const o = Wi(""), s = Wi(-1), a = Wi(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = qk(
    () => e.value ? t.value : [...n, ...t.value]
  ), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Zu(e, () => {
    s.value = -1;
  }), Zu(s, () => k(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, langSelectorContainer: a, selectedLanguage: o };
}
function dc(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const da = window.Vue.renderSlot, pe = window.Vue.unref, Xk = window.Vue.isRef, ed = window.Vue.createVNode, Mo = window.Vue.withModifiers, No = window.Vue.withKeys, an = window.Vue.createElementVNode, Wk = window.Vue.resolveDirective, ga = window.Vue.withDirectives, Ki = window.Vue.renderList, Yi = window.Vue.Fragment, Pt = window.Vue.openBlock, Ft = window.Vue.createElementBlock, td = window.Vue.toDisplayString, pa = window.Vue.normalizeClass, Ji = window.Vue.createCommentVNode, Kk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Yk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Jk = { class: "results px-3 pt-4" }, Qk = { class: "results-header ps-8 pb-2" }, Zk = { class: "results-languages--suggestions pa-0 ma-0" }, eb = ["lang", "dir", "aria-selected", "onClick", "textContent"], tb = { class: "results px-3 pt-4" }, nb = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, ob = ["lang", "dir", "aria-selected", "onClick", "textContent"], sb = ["aria-selected"], ab = { class: "no-results px-3 py-4" }, ib = { class: "ps-8" }, Qi = window.Vue.ref, rb = window.Vue.watch, lb = window.Vue.onMounted, nd = window.Vue.computed, sh = {
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
    const n = e, o = t, s = Qi(null), a = Qi(""), r = Qi([]), l = nd(
      () => Rk(r.value)
    ), u = nd(
      () => Ok(r.value)
    ), d = (S) => o("select", S), i = () => o("close"), { autocompletion: c, onTabSelect: g } = jk(
      a,
      r
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: f } = Gk(a, r, n.suggestions), _ = () => {
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
    return rb(a, dc(() => k(this, null, function* () {
      r.value = yield Qu(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), lb(() => k(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Qu(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, y) => {
      const b = Wk("i18n");
      return Pt(), Ft("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        da(S.$slots, "search", {}, () => [
          an("div", Kk, [
            ed(pe(ti), {
              value: pe(c),
              "onUpdate:value": y[0] || (y[0] = (V) => Xk(c) ? c.value = V : null),
              icon: pe($l),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            ed(pe(ti), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (V) => a.value = V),
              class: "mw-ui-language-selector__search pa-4",
              icon: pe($l),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                No(Mo(_, ["prevent"]), ["enter"]),
                No(Mo(pe(p), ["stop", "prevent"]), ["down"]),
                No(Mo(pe(m), ["stop", "prevent"]), ["up"]),
                No(Mo(i, ["prevent"]), ["esc"]),
                No(Mo(pe(g), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        an("section", Yk, [
          e.suggestions.length && !a.value ? da(S.$slots, "suggestions", { key: 0 }, () => [
            an("section", Jk, [
              ga(an("p", Qk, null, 512), [
                [b, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              an("ul", Zk, [
                (Pt(!0), Ft(Yi, null, Ki(e.suggestions, (V) => (Pt(), Ft("li", {
                  key: V,
                  class: pa(["language pa-2 ps-8 ma-0", V === pe(f) ? "language--selected" : ""]),
                  lang: V,
                  dir: pe(U.getDir)(V),
                  "aria-selected": V === pe(f) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (M) => d(V),
                  textContent: td(pe(U.getAutonym)(V))
                }, null, 10, eb))), 128))
              ])
            ])
          ]) : Ji("", !0),
          l.value.length ? da(S.$slots, "search", { key: 1 }, () => [
            an("section", tb, [
              e.suggestions.length && !a.value ? ga((Pt(), Ft("p", nb, null, 512)), [
                [b, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Ji("", !0),
              (Pt(!0), Ft(Yi, null, Ki(l.value, (V, M) => (Pt(), Ft("ul", {
                key: M,
                class: pa(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (Pt(!0), Ft(Yi, null, Ki(V, (E) => (Pt(), Ft("li", {
                  key: E,
                  class: pa(["language pa-2 ps-8 ma-0", E === pe(f) ? "language--selected" : ""]),
                  lang: E,
                  dir: pe(U.getDir)(E),
                  role: "option",
                  "aria-selected": E === pe(f) || null,
                  tabindex: "-1",
                  onClick: (P) => d(E),
                  textContent: td(pe(U.getAutonym)(E))
                }, null, 10, ob))), 128)),
                e.allOptionEnabled && !a.value ? ga((Pt(), Ft("li", {
                  key: 0,
                  class: pa(["language pa-2 ps-8 ma-0", pe(f) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": pe(f) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (E) => d("all"))
                }, null, 10, sb)), [
                  [b, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Ji("", !0)
              ], 2))), 128))
            ])
          ]) : da(S.$slots, "noresults", { key: 2 }, () => [
            an("section", ab, [
              ga(an("h3", ib, null, 512), [
                [b, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Se = window.Vue.unref, cb = window.Vue.resolveDirective, od = window.Vue.withDirectives, Uo = window.Vue.openBlock, Io = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const sd = window.Vue.toDisplayString, ad = window.Vue.withModifiers, En = window.Vue.withCtx, Mt = window.Vue.createVNode, ub = { class: "sx-translation-list-language-selector" }, db = {
  key: 0,
  class: "mw-ui-autonym"
}, gb = ["lang", "dir", "textContent"], pb = {
  key: 0,
  class: "mw-ui-autonym"
}, mb = ["lang", "dir", "textContent"], zo = window.Vue.computed, hb = window.Vue.inject, fb = window.Vue.ref, gc = {
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
    const n = e, o = t, s = hb("breakpoints"), a = zo(() => s.value.mobile), r = fb(null), l = zo(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = zo(() => {
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
    }, p = zo(
      () => n.selectedSourceLanguage === "all"
    ), m = zo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = cb("i18n");
      return Uo(), Io("div", ub, [
        Mt(Se(T), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: En(() => [
            Mt(Se(C), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: En(() => [
                Mt(Se(he), {
                  indicator: Se(xl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: ad(u, ["stop"])
                }, {
                  default: En(() => [
                    p.value ? od((Uo(), Io("span", db, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Uo(), Io("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Se(U.getDir)(e.selectedSourceLanguage),
                      textContent: sd(Se(U.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, gb))
                  ]),
                  _: 1
                }, 8, ["indicator"])
              ]),
              _: 1
            }),
            Mt(Se(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: En(() => [
                Mt(Se(we), { icon: Se(zp) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Mt(Se(C), { cols: "5" }, {
              default: En(() => [
                Mt(Se(he), {
                  indicator: Se(xl),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: ad(d, ["stop"])
                }, {
                  default: En(() => [
                    m.value ? od((Uo(), Io("span", pb, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Uo(), Io("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Se(U.getDir)(e.selectedTargetLanguage),
                      textContent: sd(Se(U.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, mb))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Mt(Se(nt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (w) => l.value = w),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: i
        }, {
          default: En(() => [
            Mt(Se(sh), {
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
}, wb = window.Vue.toDisplayString, _b = window.Vue.createElementVNode, id = window.Vue.createVNode, rd = window.Vue.unref, rn = window.Vue.openBlock, ma = window.Vue.createBlock, ld = window.Vue.createCommentVNode, cd = window.Vue.renderList, ud = window.Vue.Fragment, ha = window.Vue.createElementBlock, vb = window.Vue.normalizeClass, dd = window.Vue.withCtx, Sb = ["textContent"], yb = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, Cb = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, fa = window.Vue.ref, Nt = window.Vue.computed, kb = window.Vuex.useStore, gd = {
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
    const t = e, n = fa("all"), o = fa("all"), s = kb(), a = Nt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: r } = Us(), l = fa(!1), u = fa(null), d = Nt(
      () => t.translationStatus === "draft"
    ), i = Nt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Nt(
      () => n.value === "all"
    ), g = Nt(
      () => o.value === "all"
    ), p = Nt(
      () => i.value.filter(
        (w) => (c.value || w.sourceLanguage === n.value) && (g.value || w.targetLanguage === o.value)
      ).sort((w, S) => w.lastUpdatedTimestamp < S.lastUpdatedTimestamp)
    ), m = Nt(() => {
      let w = i.value.map(
        (S) => S.targetLanguage
      );
      return r.value && (w = w.filter(
        (S) => r.value.includes(S)
      )), [...new Set(w)];
    }), h = Nt(() => {
      const w = i.value.map(
        (S) => S.sourceLanguage
      );
      return [...new Set(w)];
    }), f = (w) => {
      u.value = w, l.value = !0;
    }, _ = Nt(() => t.activeStatus === t.translationStatus);
    return (w, S) => _.value ? (rn(), ma(rd(Ie), {
      key: 0,
      class: vb(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: dd(() => [
        _b("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: wb(w.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, Sb)
      ]),
      default: dd(() => [
        id(gc, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": S[0] || (S[0] = (y) => n.value = y),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": S[1] || (S[1] = (y) => o.value = y),
          "source-languages": h.value,
          "target-languages": m.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? ld("", !0) : (rn(), ma(rd(ze), { key: 0 })),
        d.value ? (rn(), ha("div", yb, [
          (rn(!0), ha(ud, null, cd(p.value, (y) => (rn(), ma(Wy, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (b) => f(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (rn(), ha("div", Cb, [
          (rn(!0), ha(ud, null, cd(p.value, (y) => (rn(), ma(Ak, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (b) => f(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        id(Nk, {
          modelValue: l.value,
          "onUpdate:modelValue": S[2] || (S[2] = (y) => l.value = y),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ld("", !0);
  }
}, bb = window.Vue.computed, xb = window.Vuex.useStore, He = () => {
  const e = xb(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = F();
  return { sectionSuggestion: bb(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, $b = window.Vuex.useStore, Vb = window.Vue.computed, Zt = () => {
  const e = $b(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = F();
  return { currentTranslation: Vb(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, pd = window.Vue.computed, Eb = window.Vuex.useStore, je = () => {
  const e = Eb(), { sectionSuggestion: t } = He(), { currentTranslation: n } = Zt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), r = pd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = pd(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, Ab = window.Vue.ref, Db = window.Vue.watchEffect, Lb = (e, t) => k(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield le.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((u) => u.level === "2").reduce((u, d, i, c) => {
    const g = i < c.length - 1 ? c[i + 1].byteoffset : s;
    return u[d.line] = g - d.byteoffset, u;
  }, {});
  return Object.keys(l).filter((u) => a[u]).reduce((u, d) => u + l[d], 0);
}), Zi = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Tb = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, Bb = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, ah = () => {
  const { currentSourcePage: e } = je(), { sectionSuggestion: t } = He(), n = Ab(null);
  return Db(() => {
    if (t.value)
      Lb(
        e.value,
        t.value
      ).then((o) => {
        n.value = Bb(
          Zi(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = Zi(e.value.articleSize);
      n.value = Tb(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Zi };
};
const ee = window.Vue.unref, it = window.Vue.createVNode, ln = window.Vue.createElementVNode, Ro = window.Vue.toDisplayString, Te = window.Vue.withCtx, Pb = window.Vue.resolveDirective, er = window.Vue.withDirectives, An = window.Vue.openBlock, Kn = window.Vue.createBlock, Yn = window.Vue.createCommentVNode, Fb = window.Vue.createTextVNode, md = window.Vue.withModifiers, Mb = window.Vue.createElementBlock, Nb = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Ub = { class: "col shrink pe-4" }, Ib = ["lang", "dir", "textContent"], zb = ["lang", "dir", "textContent"], Rb = ["textContent"], Ob = ["textContent"], tr = window.Codex.CdxIcon, rt = window.Vue.computed, Hb = window.Vue.inject, jb = window.Vuex.useStore, qb = window.Codex.CdxInfoChip, zl = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [yo, Cn, fo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = jb(), { bytesToMinutes: o } = ah(), s = rt(() => t.suggestion), a = rt(
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
    }), d = rt(
      () => s.value instanceof Cn
    ), i = rt(
      () => s.value instanceof fo
    ), { sourceLanguageAutonym: c, targetLanguageAutonym: g } = H(n), p = rt(
      () => i.value ? Wm : Km
    ), m = Hb("colors"), h = rt(
      () => i.value ? m.blue600 : "currentColor"
    ), f = rt(() => {
      var w;
      return o((w = r.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = rt(
      () => s.value instanceof rm || s.value instanceof lm
    );
    return (w, S) => {
      const y = Pb("i18n");
      return s.value ? (An(), Mb("div", Nb, [
        ln("div", Ub, [
          it(ee(jl), {
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
                    ln("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ee(U.getDir)(s.value.sourceLanguage),
                      textContent: Ro(a.value)
                    }, null, 8, Ib)
                  ]),
                  _: 1
                }),
                it(ee(C), { shrink: "" }, {
                  default: Te(() => [
                    ln("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ee(U.getDir)(s.value.sourceLanguage),
                      textContent: Ro(u.value)
                    }, null, 8, zb)
                  ]),
                  _: 1
                }),
                f.value && !d.value && !_.value ? (An(), Kn(ee(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Te(() => [
                    er(ln("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Yn("", !0),
                d.value ? (An(), Kn(ee(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Te(() => [
                    er(ln("small", null, null, 512), [
                      [y, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : i.value ? (An(), Kn(ee(C), {
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
                            ln("small", {
                              textContent: Ro(ee(c))
                            }, null, 8, Rb),
                            it(ee(tr), {
                              icon: ee(ak),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            ln("small", {
                              textContent: Ro(ee(g))
                            }, null, 8, Ob)
                          ]),
                          _: 1
                        }),
                        l.value ? (An(), Kn(ee(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Te(() => [
                            er(ln("small", null, null, 512), [
                              [y, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Yn("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Yn("", !0),
                _.value ? (An(), Kn(ee(C), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: Te(() => [
                    it(ee(qb), { icon: ee(ac) }, {
                      default: Te(() => [
                        Fb(Ro(s.value.collection.name), 1)
                      ]),
                      _: 1
                    }, 8, ["icon"])
                  ]),
                  _: 1
                })) : Yn("", !0)
              ]),
              _: 1
            }),
            it(ee(C), { shrink: "" }, {
              default: Te(() => [
                i.value ? Yn("", !0) : (An(), Kn(ee(tr), {
                  key: 0,
                  icon: ee(bo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = md((b) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                it(ee(tr), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = md((b) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Yn("", !0);
    };
  }
}, ih = (e) => {
  if (e.type === et)
    return "suggestion_filter_topic_area";
  if (e.id === ge || e.type === ge)
    return "suggestion_filter_collections";
  if (e.id === ht)
    return "suggestion_filter_previous_edits";
  if (e.id === xt)
    return "suggestion_filter_popular_articles";
}, Rl = (e) => {
  if (e.type === et || e.type === ge)
    return e.id;
  if (e.id === ge)
    return "all-collections";
};
const Be = window.Vue.unref, cn = window.Vue.createVNode, Ut = window.Vue.withCtx, Gb = window.Vue.resolveDirective, wa = window.Vue.createElementVNode, hd = window.Vue.withDirectives, nr = window.Vue.toDisplayString, fd = window.Vue.createTextVNode, Xb = window.Vue.vShow, wd = window.Vue.renderList, _d = window.Vue.Fragment, Oo = window.Vue.openBlock, or = window.Vue.createElementBlock, Wb = window.Vue.normalizeClass, vd = window.Vue.createBlock, Kb = { class: "sx-suggestions-filters" }, Yb = { class: "mb-0" }, Jb = { class: "sx-suggestions-filters__group-label mb-3" }, Qb = { class: "sx-suggestions-filters__group-filters mb-3" }, Sd = window.Vue.ref, Zb = window.Vue.computed, ex = window.Vue.inject, yd = window.Codex.CdxButton, tx = window.Codex.CdxIcon, nx = window.Codex.CdxInfoChip, ox = {
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
      [ht]: Qm,
      [xt]: Ym,
      [ge]: ac,
      [et]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: r } = ec(), l = Oe(), u = () => n("update:modelValue", !1), d = () => {
      c.value && (l({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: Rl(
          c.value
        )
      }), r(c.value)), u();
    }, i = Sd(!1), c = Sd(null), g = (_) => {
      const w = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: ih(_),
        event_context: Rl(_)
      };
      l(w), c.value = _, i.value = !0;
    }, p = (_) => c.value ? c.value.id === _.id && c.value.type === _.type : a(_), m = ex("breakpoints"), h = Zb(() => m.value.mobile), { getFilterProvider: f } = tc();
    return (_, w) => {
      const S = Gb("i18n");
      return Oo(), vd(Be(nt), {
        value: e.modelValue,
        animation: "slide-up",
        fullscreen: h.value,
        header: !1,
        "overlay-opacity": 0
      }, {
        default: Ut(() => [
          wa("section", Kb, [
            cn(Be(T), {
              class: "sx-suggestions-filters__header ma-0 py-3",
              align: "stretch",
              justify: "start"
            }, {
              default: Ut(() => [
                cn(Be(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ut(() => [
                    cn(Be(yd), {
                      class: "pa-0 ms-4",
                      weight: "quiet",
                      "aria-label": _.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: u
                    }, {
                      default: Ut(() => [
                        cn(Be(tx), { icon: Be(bo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                cn(Be(C), {
                  grow: "",
                  class: "px-4",
                  align: "center"
                }, {
                  default: Ut(() => [
                    hd(wa("h5", Yb, null, 512), [
                      [S, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                cn(Be(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ut(() => [
                    hd(cn(Be(yd), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: d
                    }, {
                      default: Ut(() => [
                        fd(nr(_.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [Xb, i.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            cn(Be(C), { class: "px-4" }, {
              default: Ut(() => [
                (Oo(!0), or(_d, null, wd(Be(s), (y) => (Oo(), or("div", {
                  key: y.id,
                  class: "sx-suggestions-filters__group"
                }, [
                  wa("div", Jb, nr(y.label), 1),
                  wa("div", Qb, [
                    (Oo(!0), or(_d, null, wd(y.filters, (b) => (Oo(), vd(Be(nx), {
                      key: b.id,
                      class: Wb(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                        "sx-suggestions-filters__filter--active": p(b)
                      }]),
                      icon: o[Be(f)(b)],
                      onClick: (V) => g(b)
                    }, {
                      default: Ut(() => [
                        fd(nr(b.label), 1)
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
const _a = window.Vue.unref, va = window.Vue.openBlock, Cd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const sx = window.Vue.renderList, ax = window.Vue.Fragment, kd = window.Vue.createElementBlock, ix = window.Vue.toDisplayString, rx = window.Vue.createTextVNode, lx = window.Vue.normalizeClass, cx = window.Vue.withCtx, ux = window.Vue.createVNode, dx = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, gx = window.Codex.CdxInfoChip, bd = window.Vue.ref, px = window.Vue.computed, xd = window.Vue.watch, mx = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ue(), n = Oe(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r
    } = ec(), l = bd(!1), u = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), l.value = !0;
    }, d = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: ih(h),
        event_context: Rl(h)
      };
      n(f), s(h);
    }, i = {
      [ht]: Qm,
      [xt]: Ym,
      [ge]: ac,
      [et]: null
    }, { getFilterProvider: c } = tc(), g = (h) => ({
      id: h.id,
      type: h.type,
      icon: i[c(h)],
      label: h.label,
      action: d
    }), p = bd(o());
    xd(l, (h) => {
      h || (p.value = o());
    }), xd(r, (h) => {
      h || (p.value = o());
    });
    const m = px(() => [
      ...p.value.map(g),
      {
        id: "more",
        icon: rc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: u
      }
    ]);
    return (h, f) => _a(r) ? (va(), Cd(_a(ze), { key: 0 })) : (va(), kd("div", dx, [
      (va(!0), kd(ax, null, sx(m.value, (_) => (va(), Cd(_a(gx), {
        key: _.label,
        class: lx(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": _a(a)(_) }]),
        icon: _.icon,
        onClick: (w) => _.action(_)
      }, {
        default: cx(() => [
          rx(ix(_.label), 1)
        ]),
        _: 2
      }, 1032, ["class", "icon", "onClick"]))), 128)),
      ux(ox, {
        modelValue: l.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, hx = window.Vue.computed, fx = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Us(), n = hx(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Dn = window.Vue.computed, $d = window.Vue.ref, wx = window.Vue.watch, _x = window.Vuex.useStore, vx = () => {
  const e = _x(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Ql(), r = Oe(), l = Dn(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = Dn(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Dn(
    () => !l.value && !u.value
  ), i = $d(0), c = $d(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, p = 4, m = Dn(
    () => a(i.value)
  ), h = Dn(
    () => s(c.value)
  ), f = () => {
    V(), J(), M(), B();
  }, {
    fetchNextSectionSuggestionsSlice: _,
    fetchNextPageSuggestionsSlice: w
  } = nc(), S = (I) => I.length === g, y = Dn(
    () => S(h.value)
  ), b = Dn(
    () => S(m.value)
  ), V = () => {
    const I = (i.value + 1) % p, Q = S(
      a(I)
    );
    (!b.value || !Q) && _();
  }, M = () => {
    const I = (c.value + 1) % p, Q = S(
      s(I)
    );
    (!y.value || !Q) && w();
  }, E = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", I), V();
  }, P = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", I), M();
  }, J = () => i.value = (i.value + 1) % p, B = () => c.value = (c.value + 1) % p;
  return wx(
    o,
    () => {
      c.value = 0, M(), i.value = 0, V();
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
    isCurrentSectionSuggestionsSliceFull: b
  };
}, Sx = window.Vuex.useStore, pc = () => {
  const e = Sx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = nc(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), s = (d) => k(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield le.markFavorite(i, c, g);
    const p = new fo({
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
    markFavoriteSuggestion: (d, i, c) => k(void 0, null, function* () {
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
      ), t()), yield le.markFavorite(
        d,
        i,
        c
      );
      const m = new fo({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), le.unmarkFavorite(d))
  };
}, yx = () => {
  const { currentSuggestionFilters: e } = F(), { defaultSeedsFetched: t } = zm();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === ht)
      return t.value ? "suggestion_no_seed" : "suggestion_recent_edit";
    if (n === et)
      return "suggestion_topic_area";
    if (o === xt)
      return "suggestion_featured";
    if (o === ge || n === ge)
      return "suggestion_filter_collections";
    throw new Error("Event source cannot be empty");
  };
};
const Vd = window.Vue.toDisplayString, Sa = window.Vue.createElementVNode, Jn = window.Vue.createVNode, te = window.Vue.unref, Ho = window.Vue.withCtx, Cx = window.Vue.resolveDirective, sr = window.Vue.withDirectives, Ed = window.Vue.renderList, Ad = window.Vue.Fragment, un = window.Vue.openBlock, ar = window.Vue.createElementBlock, jo = window.Vue.createBlock, ir = window.Vue.createCommentVNode, kx = window.Vue.createTextVNode, bx = window.Vue.vShow, xx = ["textContent"], $x = { class: "cx-translation-list__division-title ma-0 pa-4" }, Vx = { class: "cx-translation-list__division-title ma-0 pa-4" }, Ex = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Ax = window.Vue.ref, Dx = window.Codex.CdxButton, Lx = window.Codex.CdxIcon, Tx = {
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
    } = F(), { supportedLanguageCodes: s, availableTargetLanguages: a } = fx(), r = jm(), l = (B) => r(B, n.value), u = (B) => r(t.value, B), d = yx(), i = Hs(), c = (B) => {
      i(
        B.sourceTitle,
        B.sourceLanguage,
        B.targetLanguage,
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
      showRefreshButton: S,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: b
    } = vx(), V = Ax(null), M = Oe(), E = () => {
      M({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), V.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: P, markFavoritePageSuggestion: J } = pc();
    return (B, I) => {
      const Q = Cx("i18n");
      return sr((un(), ar("div", null, [
        Jn(te(Ie), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: Ho(() => [
            Sa("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: Vd(B.$i18n("cx-suggestionlist-title"))
            }, null, 8, xx),
            Jn(mx)
          ]),
          default: Ho(() => [
            Jn(gc, {
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
        Jn(te(Ie), {
          ref_key: "pageSuggestionsList",
          ref: V,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: Ho(() => [
            sr(Sa("h5", $x, null, 512), [
              [Q, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (un(!0), ar(Ad, null, Ed(te(g), (W, ot) => (un(), jo(zl, {
              key: `page-suggestion-${ot}`,
              suggestion: W,
              onClose: (Le) => te(m)(W),
              onClick: (Le) => c(W),
              onBookmark: (Le) => te(J)(W)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(_) && !te(y) ? (un(), jo(te(ze), { key: 0 })) : ir("", !0)
          ]),
          _: 1
        }, 512),
        Jn(te(Ie), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: Ho(() => [
            sr(Sa("h5", Vx, null, 512), [
              [Q, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (un(!0), ar(Ad, null, Ed(te(p), (W, ot) => (un(), jo(zl, {
              key: `section-suggestion-${ot}`,
              class: "ma-0",
              suggestion: W,
              onClose: (Le) => te(h)(W),
              onClick: (Le) => c(W),
              onBookmark: (Le) => te(P)(W)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(w) && !te(b) ? (un(), jo(te(ze), { key: 0 })) : ir("", !0)
          ]),
          _: 1
        }),
        Sa("div", Ex, [
          te(S) ? (un(), jo(te(Dx), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: E
          }, {
            default: Ho(() => [
              Jn(te(Lx), {
                class: "me-1",
                icon: te(Jm)
              }, null, 8, ["icon"]),
              kx(" " + Vd(B.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : ir("", !0)
        ])
      ], 512)), [
        [bx, e.active]
      ]);
    };
  }
}, Bx = window.Vue.resolveDirective, Px = window.Vue.createElementVNode, Fx = window.Vue.withDirectives, Mx = window.Vue.renderList, Nx = window.Vue.Fragment, rr = window.Vue.openBlock, Ux = window.Vue.createElementBlock, Dd = window.Vue.unref, Ld = window.Vue.createBlock, Td = window.Vue.withCtx, Ix = window.Vue.createCommentVNode, zx = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, Rx = window.Vue.computed, Ox = window.Vuex.useStore, Hx = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = Ox(), n = Rx(() => t.state.suggestions.favorites || []), o = Hs(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = pc();
    return (r, l) => {
      const u = Bx("i18n");
      return n.value.length ? (rr(), Ld(Dd(Ie), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Td(() => [
          Fx(Px("h3", zx, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Td(() => [
          (rr(!0), Ux(Nx, null, Mx(n.value, (d, i) => (rr(), Ld(zl, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => s(d),
            onBookmark: (c) => Dd(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : Ix("", !0);
    };
  }
};
const jx = window.Vue.resolveDirective, qo = window.Vue.createElementVNode, qx = window.Vue.withDirectives, Gx = window.Vue.renderList, Xx = window.Vue.Fragment, Bd = window.Vue.openBlock, Pd = window.Vue.createElementBlock, Wx = window.Vue.unref, Kx = window.Vue.createVNode, Yx = window.Vue.toDisplayString, Jx = { class: "cx-help-panel pa-4" }, Qx = { class: "cx-help-panel__item-list mt-6 ps-2" }, Zx = ["href"], e8 = ["textContent"], t8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ue(), n = [
      {
        icon: Cw,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: ow,
        label: t.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: kw,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ];
    return (o, s) => {
      const a = jx("i18n");
      return Bd(), Pd("div", Jx, [
        qx(qo("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        qo("ul", Qx, [
          (Bd(), Pd(Xx, null, Gx(n, (r, l) => qo("li", {
            key: l,
            class: "mt-4"
          }, [
            qo("a", {
              href: r.href,
              target: "_blank"
            }, [
              Kx(Wx(we), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              qo("span", {
                textContent: Yx(r.label)
              }, null, 8, e8)
            ], 8, Zx)
          ])), 64))
        ])
      ]);
    };
  }
};
const n8 = window.Vue.resolveDirective, Qn = window.Vue.createElementVNode, lr = window.Vue.withDirectives, Fd = window.Vue.toDisplayString, cr = window.Vue.unref, ur = window.Vue.withCtx, dr = window.Vue.createVNode, o8 = window.Vue.openBlock, s8 = window.Vue.createElementBlock, a8 = { class: "cx-stats-panel pa-4" }, i8 = ["textContent"], r8 = { class: "cx-stats-panel__monthly-stats-label" }, l8 = ["textContent"], c8 = { class: "cx-stats-panel__total-stats-label" }, u8 = window.Vue.ref, Md = window.Vue.computed, d8 = window.Vue.watch, g8 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Md(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = Md(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = u8(null);
    return d8(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (y, b) => Math.max(y, r[b].delta),
          0
        ), i = u.map((y) => r[y].delta), c = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let _ = p;
        const w = Math.floor(
          (c - p) / (m + p)
        ), S = i.slice(
          Math.max(i.length - w, 0)
        );
        S.forEach((y, b) => {
          b === S.length - 1 && (l.fillStyle = "#36c");
          const V = h - y * f;
          l.fillRect(_, V, m, y * f), _ += m + p;
        });
      }
    ), (r, l) => {
      const u = n8("i18n");
      return o8(), s8("div", a8, [
        lr(Qn("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        dr(cr(T), null, {
          default: ur(() => [
            dr(cr(C), { class: "cx-stats-panel__monthly-stats" }, {
              default: ur(() => [
                Qn("h3", {
                  textContent: Fd(s.value)
                }, null, 8, i8),
                lr(Qn("h5", r8, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            dr(cr(C), { class: "cx-stats-panel__total-stats" }, {
              default: ur(() => [
                Qn("h3", {
                  textContent: Fd(o.value)
                }, null, 8, l8),
                lr(Qn("h5", c8, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Qn("canvas", {
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
const p8 = window.Vue.renderSlot, m8 = window.Vue.unref, h8 = window.Vue.createVNode, f8 = window.Vue.createElementVNode, w8 = window.Vue.openBlock, _8 = window.Vue.createElementBlock, v8 = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, S8 = { class: "col-12 ma-0 pa-0" }, y8 = {
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
    return (a, r) => (w8(), _8("footer", v8, [
      f8("div", S8, [
        p8(a.$slots, "default", {}, () => [
          h8(m8(As), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, C8 = window.Vuex.useStore;
let ya = [];
const lh = () => {
  const e = C8();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ya.includes(o) ? Promise.resolve() : (ya.push(o), ko.fetchLanguageTitles(t, n).then((s) => {
      ya = ya.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, k8 = window.Vuex.useStore, ch = () => {
  const e = k8(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), { isDefaultFilter: r } = Yp(), { previousRoute: l } = H(e), u = Oe(), d = () => {
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
}, b8 = () => {
  const e = Hs(), t = lh(), { logDashboardOpenEvent: n, getEventSource: o } = ch(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = F();
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
}, x8 = window.Vuex.useStore, di = () => {
  const e = x8(), t = (o) => k(void 0, null, function* () {
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
        const { targetLanguage: d, targetTitle: i } = u, c = !!e.getters["mediawiki/getPage"](
          d,
          i
        );
        i && !c && e.commit(
          "mediawiki/addPage",
          new Co({ title: i, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, $8 = window.Vuex.useStore, V8 = () => {
  const e = $8();
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
}, E8 = () => {
  const e = b8(), { fetchAllTranslations: t } = di(), n = oc(), o = V8(), { fetchPageCollections: s } = Om(), { pageURLParameter: a, sectionURLParameter: r, draftURLParameter: l } = F(), { logDashboardOpenEvent: u } = ch();
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
}, Nd = window.Vue.computed, A8 = window.Vue.ref, D8 = window.Vue.watch, L8 = window.Vue.watchEffect, T8 = window.Vuex.useStore, B8 = ["suggestions", "draft", "published"], P8 = () => {
  const e = T8(), { getUrlParam: t, setUrlParam: n } = F(), o = t("active-list"), s = A8(null);
  if (B8.includes(o))
    s.value = o;
  else {
    const a = Nd(
      () => e.state.translator.translationsLoaded.draft
    ), r = Nd(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", D8(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return L8(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, F8 = window.Vue.computed, M8 = () => {
  const e = ue();
  return F8(() => [
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
const de = window.Vue.unref, ye = window.Vue.createVNode, N8 = window.Vue.toDisplayString, U8 = window.Vue.createTextVNode, It = window.Vue.withCtx, gr = window.Vue.openBlock, Ud = window.Vue.createBlock, Id = window.Vue.createCommentVNode, I8 = window.Vue.isRef, z8 = window.Vue.createElementBlock, R8 = window.Vue.computed, O8 = window.Vuex.useStore, H8 = window.Codex.CdxButton, j8 = window.Codex.CdxIcon, q8 = {
  __name: "CXDashboard",
  setup(e) {
    const t = _e(), n = Oe(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    E8()();
    const a = O8();
    a.dispatch("translator/fetchTranslatorStats");
    const r = R8(() => a.state.translator.translatorStats), l = P8(), u = M8(), d = rh(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (gr(), z8("div", null, [
      ye(de(T), { class: "ma-0 py-4" }, {
        default: It(() => [
          ye(de(H8), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: It(() => [
              ye(de(j8), {
                class: "me-1",
                icon: de(Nl)
              }, null, 8, ["icon"]),
              U8(" " + N8(c.$i18n("cx-create-new-translation")), 1)
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
        default: It(() => [
          c.$mwui.breakpoint.tabletAndUp ? (gr(), Ud(de(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: It(() => [
              ye(de(As), {
                id: "dashboard-list-selector--desktop",
                items: de(u),
                active: de(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Id("", !0),
          ye(de(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: It(() => [
              ye(Hx),
              ye(Tx, {
                active: de(l) === "suggestions"
              }, null, 8, ["active"]),
              ye(gd, {
                "translation-status": "draft",
                "active-status": de(l)
              }, null, 8, ["active-status"]),
              ye(gd, {
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
            default: It(() => [
              ye(de(T), {
                class: "ma-0",
                align: "start"
              }, {
                default: It(() => [
                  ye(de(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: It(() => [
                      ye(g8, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  ye(de(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: It(() => [
                      ye(t8)
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
      c.$mwui.breakpoint.mobile ? (gr(), Ud(y8, {
        key: 0,
        active: de(l),
        "onUpdate:active": g[0] || (g[0] = (p) => I8(l) ? l.value = p : null),
        items: de(u)
      }, null, 8, ["active", "items"])) : Id("", !0)
    ]));
  }
}, G8 = {
  name: "DashboardView",
  components: { CxDashboard: q8 }
}, X8 = window.Vue.resolveComponent, W8 = window.Vue.createVNode, K8 = window.Vue.openBlock, Y8 = window.Vue.createElementBlock, J8 = { class: "cx-translation-dashboard" };
function Q8(e, t, n, o, s, a) {
  const r = X8("cx-dashboard");
  return K8(), Y8("main", J8, [
    W8(r, { class: "mb-4 pb-12" })
  ]);
}
const zd = /* @__PURE__ */ X(G8, [["render", Q8]]), Zn = window.Vue.computed, Z8 = () => {
  const { sectionSuggestion: e } = He(), { targetLanguageURLParameter: t } = F(), { currentTranslation: n } = Zt(), o = Zn(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = Zn(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = Zn(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = Qt(), u = Zn(() => r ? j.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = Zn(() => {
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
  }), c = Zn(
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
}, uh = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function e2(e) {
  return e.$el = $(e), e;
}
function t2(e, t, n, o) {
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
function n2() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function o2(e, t) {
  return k(this, null, function* () {
    yield mc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = e2(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const s2 = window.Vue.computed, a2 = window.Vue.onMounted, i2 = window.Vue.ref;
function r2(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const l2 = {
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
    const n = i2(null);
    let o = null;
    const s = s2(() => o.getHtml()), a = () => {
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
    return a2(() => k(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = r2;
      const i = yield o2(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = t2(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = n2, o.focus();
    })), { sxeditor: n };
  }
}, Ol = window.Vue.createElementVNode, c2 = window.Vue.openBlock, u2 = window.Vue.createElementBlock, d2 = ["lang", "dir"], g2 = /* @__PURE__ */ Ol("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Ol("div", { class: "toolbar" })
], -1), p2 = ["lang", "dir"];
function m2(e, t, n, o, s, a) {
  return c2(), u2("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    g2,
    Ol("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, p2)
  ], 8, d2);
}
const h2 = /* @__PURE__ */ X(l2, [["render", m2]]);
function mc() {
  return mw.loader.using("mw.cx3.ve");
}
const f2 = window.Vuex.useStore, dh = () => {
  const e = f2();
  return (t, n) => k(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield mc(), new Promise((s) => {
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
}, w2 = window.Vuex.useStore, hc = () => {
  const e = w2();
  return (t, n, o, s = null) => k(void 0, null, function* () {
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
}, _2 = window.Vuex.useStore, fc = () => {
  const e = _2(), { currentSourcePage: t } = je(), n = dh(), o = hc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l
  } = F(), u = (c, g) => k(void 0, null, function* () {
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
}, wc = () => (e, t, n, o = {}) => {
  j.setCXToken(e, t, n), location.href = j.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, v2 = (e, t, n, o) => k(void 0, null, function* () {
  var l, u, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield dm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), S2 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, y2 = (e, t, n, o) => k(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return v2(e, t, n, o);
  S2(e, t);
}), C2 = (e, t, n, o) => {
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
        const d = y2(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, k2 = { restoreCorporaDraft: C2 }, Go = window.Vue.computed, b2 = window.Vuex.useStore, K = () => {
  const e = b2(), { currentSourcePage: t, currentTargetPage: n } = je(), { currentMTProvider: o } = H(e), { sectionURLParameter: s } = F(), a = Go(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Go(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Go(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Go(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = Go(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, x2 = window.Vuex.useStore, _c = () => {
  const e = Oe(), t = x2(), n = _e(), { currentSourcePage: o } = je(), { sourceLanguage: s, targetLanguage: a } = H(t), r = kC(), l = dh(), { isDesktop: u } = Ns(), d = wc(), i = hc(), { sourceSection: c } = K();
  return (g) => k(void 0, null, function* () {
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
      const b = {};
      w || (b.sourcesection = g.sourceSectionTitle), d(
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
    const { setTranslationURLParams: S } = F();
    S(g), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== m) && r(g), t.dispatch("application/getCXServerToken"), e({
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
    ), yield l(s.value, h), g.restored || (yield tt.fetchTranslationUnits(g.translationId).then(
      (b) => k2.restoreCorporaDraft(
        o.value,
        f,
        a,
        b
      )
    ).then(() => g.restored = !0));
    let y;
    w ? (c.value.originalTitle = h, y = f) : y = g.targetSectionTitle, c.value.translatedTitle = y, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, $2 = window.Vue.ref, V2 = window.Vuex.useStore, E2 = () => {
  const e = _e(), t = V2(), { isDesktop: n } = Ns(), { logDashboardTranslationStartEvent: o } = uc(), {
    pageURLParameter: s,
    sectionURLParameter: a
  } = F(), { sourceLanguage: r, targetLanguage: l } = H(t), { targetPageExists: u } = Qt(), { selectPageSectionByIndex: d, selectPageSectionByTitle: i } = fc(), c = wc(), g = () => k(void 0, null, function* () {
    n.value ? (o(), c(
      r.value,
      l.value,
      s.value,
      { sourcesection: a.value }
    )) : (yield i(a.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), p = _c(), m = $2(!1), { currentTranslation: h } = Zt(), f = () => {
    h.value ? h.value.isArticleTranslation ? m.value = !0 : p(h.value) : a.value ? g() : u.value ? e.push({ name: "sx-section-selector" }) : _();
  }, _ = () => k(void 0, null, function* () {
    o(), n.value ? c(
      r.value,
      l.value,
      s.value
    ) : (d(0), uh() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: _,
    handlePrimaryButtonClick: f,
    translationConfirmationDialogOn: m
  };
};
const A2 = window.Vue.resolveDirective, Rd = window.Vue.createElementVNode, Od = window.Vue.withDirectives, D2 = window.Vue.unref, L2 = window.Vue.withCtx, T2 = window.Vue.openBlock, B2 = window.Vue.createBlock, P2 = {
  href: "",
  target: "_blank"
}, F2 = window.Codex.CdxDialog, M2 = {
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
      const c = A2("i18n");
      return T2(), B2(D2(F2), {
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
        default: L2(() => [
          Od(Rd("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Od(Rd("a", P2, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const se = window.Vue.unref, N2 = window.Vue.resolveDirective, Xo = window.Vue.createElementVNode, Hd = window.Vue.withDirectives, Wo = window.Vue.toDisplayString, Ko = window.Vue.openBlock, pr = window.Vue.createElementBlock, mr = window.Vue.createCommentVNode, Ke = window.Vue.createVNode, lt = window.Vue.withCtx, hr = window.Vue.createTextVNode, U2 = window.Vue.withModifiers, jd = window.Vue.createBlock, I2 = window.Vue.Fragment, z2 = { class: "sx-translation-confirmer-body pb-4" }, R2 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, O2 = ["textContent"], H2 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, j2 = ["href"], q2 = ["textContent"], fr = window.Vue.computed, G2 = window.Vue.inject, qd = window.Vue.ref, X2 = window.Vue.watchEffect, W2 = window.Vuex.useStore, wr = window.Codex.CdxButton, K2 = window.Codex.CdxIcon, Y2 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = _e(), o = W2();
    G2("colors");
    const { sectionSuggestion: s } = He(), { targetLanguageAutonym: a } = H(o), { sectionURLParameter: r } = F(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: u,
      translationConfirmationDialogOn: d
    } = E2(), i = qd(!1), c = qd(null), g = () => k(this, null, function* () {
      const B = yield tt.checkUnreviewedTranslations();
      B !== !0 && (i.value = !0, c.value = B.targetUrl);
    }), p = () => k(this, null, function* () {
      yield g(), !i.value && l();
    }), m = () => k(this, null, function* () {
      yield g(), !i.value && u();
    }), h = t;
    X2(() => {
      d.value && (h("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessageArgs: f,
      getActionButtonLabel: _,
      isProgressiveButton: w,
      targetArticlePath: S
    } = Z8(), y = ue(), b = fr(
      () => y.i18n(_(!!r.value))
    ), { isDesktop: V } = Ns(), M = fr(
      () => y.i18n(...f.value)
    ), E = () => k(this, null, function* () {
      yield g(), !i.value && n.push({ name: "sx-section-selector" });
    }), P = fr(() => {
      var B, I;
      return r.value && !!((I = (B = s.value) == null ? void 0 : B.sourceSections) != null && I.length);
    }), { targetPageExists: J } = Qt();
    return (B, I) => {
      const Q = N2("i18n");
      return Ko(), pr(I2, null, [
        Xo("section", z2, [
          se(r) ? (Ko(), pr("section", R2, [
            Hd(Xo("h6", null, null, 512), [
              [Q, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Xo("h5", {
              class: "ma-0",
              textContent: Wo(se(r))
            }, null, 8, O2)
          ])) : se(J) ? (Ko(), pr("section", H2, [
            Ke(se(T), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: lt(() => [
                Hd(Ke(se(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [Q, [se(a)], "cx-sx-existing-translation-status"]
                ]),
                Ke(se(C), { shrink: "" }, {
                  default: lt(() => [
                    Xo("a", {
                      href: se(S),
                      target: "_blank"
                    }, [
                      Ke(se(K2), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: se(lc)
                      }, null, 8, ["icon"])
                    ], 8, j2)
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
                    Xo("span", {
                      textContent: Wo(M.value)
                    }, null, 8, q2)
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
              P.value ? (Ko(), jd(se(C), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: lt(() => [
                  Ke(se(wr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: U2(E, ["stop"])
                  }, {
                    default: lt(() => [
                      hr(Wo(B.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : mr("", !0),
              se(J) && se(V) ? (Ko(), jd(se(C), {
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
                      hr(Wo(B.$i18n(
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
                      hr(Wo(b.value), 1)
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
        Ke(M2, {
          modelValue: i.value,
          "onUpdate:modelValue": I[0] || (I[0] = (W) => i.value = W),
          "target-url": c.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Gd = window.Vue.unref, J2 = window.Vue.openBlock, Q2 = window.Vue.createBlock, Xd = window.Vue.computed, Z2 = window.Vuex.useStore, gh = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Us();
    Z2();
    const {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = F(), { currentLanguageTitleGroup: a } = Qt(), r = Xd(
      () => {
        var c;
        return ((c = a.value) == null ? void 0 : c.titles.map((g) => g.lang)) || [];
      }
    ), l = Xd(
      () => n.value || t.value
    ), u = xC(), d = (c) => u(c, s.value), i = (c) => u(o.value, c);
    return (c, g) => (J2(), Q2(gc, {
      class: "sx-article-language-selector",
      "source-languages": r.value,
      "target-languages": l.value,
      "selected-source-language": Gd(o),
      "selected-target-language": Gd(s),
      "onUpdate:selectedSourceLanguage": d,
      "onUpdate:selectedTargetLanguage": i
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Ce = window.Vue.unref, _r = window.Vue.toDisplayString, zt = window.Vue.createElementVNode, wt = window.Vue.createVNode, eo = window.Vue.withCtx, e$ = window.Vue.resolveDirective, t$ = window.Vue.withDirectives, n$ = window.Vue.normalizeClass, o$ = window.Vue.openBlock, s$ = window.Vue.createBlock, a$ = ["textContent"], i$ = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, r$ = ["textContent"], l$ = { class: "pe-3" }, c$ = ["textContent"], u$ = window.Codex.CdxButton, Yo = window.Codex.CdxIcon, Rt = window.Vue.computed, d$ = window.Vuex.useStore, g$ = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = d$(), n = ue(), { currentSourcePage: o } = je(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r
    } = F(), l = Rt(() => t.state.suggestions.favorites || []), u = Rt(
      () => l.value.some(
        (V) => r.value === V.title && s.value === V.sourceLanguage && a.value === V.targetLanguage
      )
    ), { markFavoriteSuggestion: d, removeFavoriteSuggestion: i } = pc(), { translationSizeMessageArgs: c } = ah(), g = () => d(
      r.value,
      s.value,
      a.value
    ), p = () => i(
      new fo({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Rt(
      () => u.value ? Wm : Km
    ), h = Rt(
      () => u.value ? p : g
    ), f = Rt(
      () => j.getPageUrl(s.value || "", r.value || "")
    ), _ = Rt(() => {
      var V;
      return (V = o.value) == null ? void 0 : V.langLinksCount;
    }), w = (V) => {
      const M = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let E = 0; E < M.length; E++)
        if (V >= M[E].value)
          return (V / M[E].value).toFixed(1).replace(/\.0$/, "") + M[E].suffix;
      return V.toString();
    }, S = Rt(() => {
      var M;
      const V = Object.values(((M = o.value) == null ? void 0 : M.pageviews) || {}).reduce(
        (E, P) => E + P,
        0
      );
      return w(V);
    }), y = Rt(() => c.value ? n.i18n(...c.value) : ""), b = Rt(() => c.value ? c.value[2] < 15 : !1);
    return (V, M) => {
      const E = e$("i18n");
      return o$(), s$(Ce(T), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: eo(() => [
          wt(Ce(C), null, {
            default: eo(() => [
              wt(Ce(T), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: eo(() => [
                  wt(Ce(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: eo(() => [
                      zt("h5", {
                        class: "ma-0 me-1",
                        textContent: _r(Ce(r))
                      }, null, 8, a$),
                      wt(Ce(Yo), {
                        size: "x-small",
                        icon: Ce(lc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  wt(Ce(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: eo(() => [
                      wt(Ce(u$), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": V.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: eo(() => [
                          wt(Ce(Yo), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              zt("div", i$, [
                zt("div", null, [
                  zt("span", null, [
                    wt(Ce(Yo), {
                      icon: Ce(gk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    zt("span", {
                      class: "pe-3",
                      textContent: _r(_.value)
                    }, null, 8, r$)
                  ]),
                  zt("span", null, [
                    wt(Ce(Yo), {
                      icon: Ce(rk),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    t$(zt("span", l$, null, 512), [
                      [E, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                zt("span", {
                  class: n$(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": b.value
                  }])
                }, [
                  wt(Ce(Yo), {
                    icon: Ce(ck),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  zt("span", {
                    textContent: _r(y.value)
                  }, null, 8, c$)
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
const p$ = window.Vue.resolveDirective, Ln = window.Vue.createElementVNode, Ca = window.Vue.withDirectives, m$ = window.Vue.toDisplayString, h$ = window.Vue.createTextVNode, vr = window.Vue.unref, Sr = window.Vue.withCtx, yr = window.Vue.openBlock, Cr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const f$ = { class: "pa-4" }, w$ = { class: "flex pt-2" }, _$ = window.Codex.CdxButton, v$ = window.Vue.ref, S$ = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = _c(), a = v$(!1), { currentTranslation: r } = Zt(), l = () => k(this, null, function* () {
      a.value = !0;
      let u = !1;
      try {
        u = yield tt.splitTranslation(
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
      const i = p$("i18n");
      return yr(), Cr(vr(nt), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": u.$mwui.colors.gray700,
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Sr(() => [
          Ln("div", w$, [
            a.value ? (yr(), Cr(vr(ze), { key: 1 })) : (yr(), Cr(vr(_$), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: Sr(() => [
                h$(m$(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Sr(() => [
          Ln("div", f$, [
            Ca(Ln("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ca(Ln("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Ln("p", null, [
              Ca(Ln("strong", null, null, 512), [
                [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ca(Ln("p", null, null, 512), [
              [i, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
const Wd = window.Vue.resolveDirective, ka = window.Vue.createElementVNode, Kd = window.Vue.withDirectives, dn = window.Vue.unref, ba = window.Vue.withCtx, Ot = window.Vue.createVNode, kr = window.Vue.openBlock, Yd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const y$ = window.Vue.createBlock, C$ = { class: "sx-translation-confirmer" }, k$ = { class: "mb-0" }, b$ = { class: "sx-translation-confirmer__article-image flex justify-center" }, x$ = ["src"], $$ = { class: "ma-3" }, V$ = window.Vue.computed, E$ = window.Vue.ref, A$ = window.Vuex.useStore, D$ = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = A$(), { currentSourcePage: n } = je(), { previousRoute: o } = H(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearURLParameters: u
    } = F(), d = V$(
      () => {
        var f, _;
        return (_ = (f = n.value) == null ? void 0 : f.image) == null ? void 0 : _.source;
      }
    ), { fetchTranslationsByStatus: i } = di(), c = lh(), g = sc();
    i("draft"), l.value && g(
      s.value,
      a.value,
      r.value
    ), c(s.value, r.value), mc(), t.dispatch("suggestions/fetchAppendixSectionTitles", a.value);
    const p = _e(), m = () => {
      u(), p.push({ name: o.value });
    }, h = E$(!1);
    return (f, _) => {
      const w = Wd("i18n"), S = Wd("i18n-html");
      return kr(), Yd("section", C$, [
        Ot(dn(T), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ba(() => [
            Ot(dn(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ba(() => [
                Kd(ka("h5", k$, null, 512), [
                  [w, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Ot(dn(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ba(() => [
                Ot(dn(he), {
                  class: "pa-0",
                  type: "icon",
                  icon: dn(Ds),
                  "icon-size": 20,
                  onClick: m
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ka("div", b$, [
          d.value ? (kr(), Yd("img", {
            key: 0,
            src: d.value
          }, null, 8, x$)) : (kr(), y$(dn(we), {
            key: 1,
            size: "120",
            icon: dn(Hl),
            "icon-color": f.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Ot(g$),
        Ot(gh),
        Ot(Y2, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (y) => h.value = !0)
        }),
        Ot(dn(T), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ba(() => [
            ka("p", $$, [
              Kd(ka("small", null, null, 512), [
                [S, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Ot(S$, {
          modelValue: h.value,
          "onUpdate:modelValue": _[1] || (_[1] = (y) => h.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const L$ = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: D$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, T$ = window.Vue.resolveComponent, B$ = window.Vue.createVNode, P$ = window.Vue.normalizeClass, F$ = window.Vue.openBlock, M$ = window.Vue.createElementBlock;
function N$(e, t, n, o, s, a) {
  const r = T$("sx-translation-confirmer");
  return F$(), M$("main", {
    class: P$(["sx-translation-confirmer-view", a.classes])
  }, [
    B$(r)
  ], 2);
}
const U$ = /* @__PURE__ */ X(L$, [["render", N$]]);
const I$ = window.Vue.toDisplayString, Jd = window.Vue.unref, z$ = window.Vue.createVNode, R$ = window.Vue.createTextVNode, O$ = window.Vue.createElementVNode, H$ = window.Vue.openBlock, j$ = window.Vue.createElementBlock, q$ = { class: "sx-section-selector-view-article-item ma-0" }, G$ = ["href"], X$ = window.Codex.CdxIcon, W$ = {
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
    return (t, n) => (H$(), j$("li", q$, [
      O$("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        R$(I$(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        z$(Jd(X$), {
          size: "x-small",
          icon: Jd(lc)
        }, null, 8, ["icon"])
      ], 8, G$)
    ]));
  }
};
const K$ = window.Vue.resolveDirective, xa = window.Vue.createElementVNode, br = window.Vue.withDirectives, Tn = window.Vue.unref, Y$ = window.Vue.toDisplayString, $a = window.Vue.withCtx, Jo = window.Vue.createVNode, J$ = window.Vue.openBlock, Q$ = window.Vue.createElementBlock, Z$ = { class: "sx-section-selector__header pa-4" }, e4 = { class: "sx-section-selector__header-text ma-0" }, t4 = ["textContent"], n4 = { class: "pt-0 ma-0" }, o4 = { class: "ma-0" }, s4 = window.Codex.CdxButton, a4 = window.Codex.CdxIcon, i4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = He();
    return (n, o) => {
      const s = K$("i18n");
      return J$(), Q$("div", Z$, [
        Jo(Tn(T), { class: "ma-0 pb-3" }, {
          default: $a(() => [
            Jo(Tn(C), null, {
              default: $a(() => {
                var a;
                return [
                  br(xa("h6", e4, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  xa("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: Y$((a = Tn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, t4)
                ];
              }),
              _: 1
            }),
            Jo(Tn(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: $a(() => [
                Jo(Tn(s4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: $a(() => [
                    Jo(Tn(a4), { icon: Tn(bo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        br(xa("h4", n4, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        br(xa("p", o4, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, r4 = window.Vue.renderList, l4 = window.Vue.Fragment, xr = window.Vue.openBlock, Qd = window.Vue.createElementBlock, c4 = window.Vue.renderSlot, Va = window.Vue.unref, Zd = window.Vue.createVNode, eg = window.Vue.withCtx, u4 = window.Vue.createBlock, d4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, g4 = window.Codex.CdxButton, p4 = window.Codex.CdxIcon, ph = {
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
    return (t, n) => (xr(), Qd("ul", d4, [
      (xr(!0), Qd(l4, null, r4(e.sections, (o) => (xr(), u4(Va(T), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: eg(() => [
          Zd(Va(g4), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: eg(() => [
              c4(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Zd(Va(p4), { icon: Va(Os) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, m4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const h4 = window.Vue.resolveDirective, Ea = window.Vue.createElementVNode, $r = window.Vue.withDirectives, ct = window.Vue.unref, tg = window.Vue.toDisplayString, to = window.Vue.withCtx, Vr = window.Vue.openBlock, ng = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Qo = window.Vue.createVNode, f4 = window.Vue.createTextVNode, w4 = window.Vue.createElementBlock, _4 = { class: "sx-section-selector__missing-sections py-2" }, v4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, S4 = ["lang", "dir", "textContent"], og = window.Vue.computed, y4 = window.Codex.CdxButton, C4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = He(), n = og(
      () => {
        var s;
        return U.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = og(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const r = h4("i18n");
      return Vr(), w4("section", _4, [
        $r(Ea("h4", v4, null, 512), [
          [r, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Vr(), ng(ct(T), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: to(() => [
            Qo(ct(C), {
              class: "py-6 justify-center",
              innerHTML: ct(m4)
            }, null, 8, ["innerHTML"]),
            Qo(ct(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: to(() => [
                $r(Ea("h6", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Qo(ct(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: to(() => [
                $r(Ea("p", null, null, 512), [
                  [r, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Qo(ct(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: to(() => [
                Qo(ct(y4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: to(() => [
                    f4(tg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Vr(), ng(ph, {
          key: 0,
          sections: ct(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: to(({ sourceSection: l }) => {
            var u, d;
            return [
              Ea("h5", {
                class: "ma-0",
                lang: (u = ct(t)) == null ? void 0 : u.sourceLanguage,
                dir: ct(U.getDir)((d = ct(t)) == null ? void 0 : d.sourceLanguage),
                textContent: tg(l)
              }, null, 8, S4)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const k4 = window.Vue.resolveDirective, Aa = window.Vue.createElementVNode, b4 = window.Vue.withDirectives, Bn = window.Vue.unref, sg = window.Vue.toDisplayString, x4 = window.Vue.withCtx, $4 = window.Vue.createVNode, V4 = window.Vue.openBlock, E4 = window.Vue.createElementBlock, A4 = { class: "sx-section-selector__present-sections py-2" }, D4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, L4 = { class: "sx-section-selector__present-section-button-content" }, T4 = ["lang", "dir", "textContent"], B4 = ["lang", "dir", "textContent"], P4 = window.Vue.computed, F4 = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = He(), n = P4(
      () => {
        var o;
        return U.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var r;
      const a = k4("i18n");
      return V4(), E4("section", A4, [
        b4(Aa("h4", D4, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        $4(ph, {
          sections: ((r = Bn(t)) == null ? void 0 : r.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (l) => o.$emit("select-section", l))
        }, {
          default: x4(({ sourceSection: l, targetSection: u }) => {
            var d, i, c, g;
            return [
              Aa("div", L4, [
                Aa("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (d = Bn(t)) == null ? void 0 : d.sourceLanguage,
                  dir: Bn(U.getDir)((i = Bn(t)) == null ? void 0 : i.sourceLanguage),
                  textContent: sg(l)
                }, null, 8, T4),
                Aa("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (c = Bn(t)) == null ? void 0 : c.targetLanguage,
                  dir: Bn(U.getDir)((g = Bn(t)) == null ? void 0 : g.targetLanguage),
                  textContent: sg(u)
                }, null, 8, B4)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ht = window.Vue.createVNode, gn = window.Vue.unref, M4 = window.Vue.resolveDirective, _t = window.Vue.createElementVNode, Zo = window.Vue.withDirectives, N4 = window.Vue.renderList, U4 = window.Vue.Fragment, Er = window.Vue.openBlock, ag = window.Vue.createElementBlock, I4 = window.Vue.createBlock, ig = window.Vue.toDisplayString, rg = window.Vue.createTextVNode, Ar = window.Vue.withCtx, z4 = { class: "sx-section-selector" }, R4 = { class: "sx-section-selector__body" }, O4 = { class: "py-2" }, H4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, j4 = { class: "ma-0 pa-0" }, q4 = { class: "sx-section-selector__additional-consideration-title" }, G4 = { href: "#" }, X4 = { class: "sx-section-selector__additional-consideration-title" }, W4 = { href: "#" }, Dr = window.Vue.computed, K4 = window.Vuex.useStore, Y4 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = K4(), { sectionSuggestion: n } = He(), {
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
    ), d = Dr(() => [
      { path: l.value, autonym: a.value },
      { path: u.value, autonym: r.value }
    ]), i = _e(), { clearURLParameters: c, setSectionURLParam: g } = F(), p = () => {
      c(), i.push({ name: "dashboard" });
    }, m = _c(), { selectPageSectionByTitle: h } = fc(), { isDesktop: f } = Ns(), _ = wc(), w = (S) => {
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
      y ? m(y) : (h(S), g(S), i.push({ name: "sx-content-comparator" }));
    };
    return (S, y) => {
      const b = M4("i18n");
      return Er(), ag("section", z4, [
        Ht(i4, { onClose: p }),
        _t("section", R4, [
          Ht(gh),
          Ht(C4, {
            onSelectSection: w,
            onClose: p
          }),
          Ht(F4, { onSelectSection: w }),
          _t("section", O4, [
            Zo(_t("h4", H4, null, 512), [
              [b, [
                gn(r)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            _t("ul", j4, [
              (Er(!0), ag(U4, null, N4(d.value, (V, M) => (Er(), I4(W$, {
                key: `view-article-item-${M}`,
                path: V.path,
                autonym: V.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          Ht(gn(T), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: Ar(() => [
              Ht(gn(C), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: Ar(() => [
                  _t("h6", q4, [
                    Ht(gn(we), {
                      icon: gn(pw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    rg(" " + ig(S.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  Zo(_t("p", null, null, 512), [
                    [b, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  Zo(_t("a", G4, null, 512), [
                    [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              Ht(gn(C), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: Ar(() => [
                  _t("h6", X4, [
                    Ht(gn(we), {
                      icon: gn(gw),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    rg(" " + ig(S.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  Zo(_t("p", null, null, 512), [
                    [b, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  Zo(_t("a", W4, null, 512), [
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
const J4 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: Y4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, Q4 = window.Vue.resolveComponent, Z4 = window.Vue.createVNode, e3 = window.Vue.normalizeClass, t3 = window.Vue.openBlock, n3 = window.Vue.createElementBlock;
function o3(e, t, n, o, s, a) {
  const r = Q4("sx-section-selector");
  return t3(), n3("main", {
    class: e3(["sx-section-selector-view", a.classes])
  }, [
    Z4(r)
  ], 2);
}
const s3 = /* @__PURE__ */ X(J4, [["render", o3]]), a3 = window.Vue.computed, i3 = window.Vuex.useStore, r3 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = H(
    i3()
  ), o = ue();
  return a3(() => {
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
const lg = window.Vue.unref, l3 = window.Vue.createVNode, c3 = window.Vue.openBlock, u3 = window.Vue.createElementBlock, d3 = { class: "sx-content-comparator__source-target-selector" }, g3 = window.Vue.watch, p3 = {
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
    const n = e, o = t, s = (r) => o("update:selection", r), a = r3(n);
    return g3(
      () => n.isMappedSection,
      () => {
        a.value.map((r) => r.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (r, l) => (c3(), u3("div", d3, [
      l3(lg(As), {
        items: lg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Pn = window.Vue.computed, m3 = window.Vue.ref, vc = () => {
  const e = m3([]), { currentTargetPage: t } = je(), { sectionSuggestion: n } = He(), { sectionURLParameter: o } = F(), s = Pn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Pn(
    () => {
      var g;
      return (((g = r.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), r = Pn(
    () => {
      var g;
      return (g = t.value) == null ? void 0 : g.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = K(), u = Pn(() => {
    var g;
    return (g = l.value) == null ? void 0 : g.html;
  }), d = Pn(() => {
    var g;
    return (g = r.value) == null ? void 0 : g.html;
  }), i = Pn(
    () => {
      var g;
      return (g = n.value) == null ? void 0 : g.missingSections.hasOwnProperty(o.value);
    }
  ), c = Pn(
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
const Da = window.Vue.createVNode, h3 = window.Vue.toDisplayString, f3 = window.Vue.createElementVNode, pn = window.Vue.unref, La = window.Vue.withCtx, Lr = window.Vue.openBlock, Tr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const w3 = window.Vue.normalizeClass, _3 = ["lang", "dir", "textContent"], cg = window.Vue.ref, Br = window.Vue.computed, v3 = window.Vue.onMounted, S3 = {
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
    const n = e, o = t, s = cg(!1), { sectionSuggestion: a } = He(), { sectionURLParameter: r } = F(), l = Br(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = vc(), c = Br(() => {
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
            path: g.value,
            lang: a.value.targetLanguage,
            dir: U.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${g.value}#${i.value}`
          };
      }
    }), g = Br(
      () => j.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = cg(null);
    return v3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Lr(), Tr(pn(T), {
      ref_key: "contentHeader",
      ref: p,
      class: w3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: La(() => [
        Da(p3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": u
        }, null, 8, ["is-mapped-section", "selection"]),
        Da(pn(T), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: La(() => [
            Da(pn(C), null, {
              default: La(() => [
                f3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: h3(c.value.title)
                }, null, 8, _3)
              ]),
              _: 1
            }),
            Da(pn(C), { shrink: "" }, {
              default: La(() => [
                s.value ? (Lr(), Tr(pn(he), {
                  key: 0,
                  icon: pn(si),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Lr(), Tr(pn(he), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: pn(Rp),
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
}, es = window.Vue.unref, ug = window.Vue.createVNode, y3 = window.Vue.withCtx, C3 = window.Vue.openBlock, k3 = window.Vue.createBlock, b3 = window.Vue.computed, x3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = F(), o = b3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = fc(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (C3(), k3(es(C), {
      class: "justify-end",
      align: "center"
    }, {
      default: y3(() => [
        ug(es(he), {
          class: "pa-0 pe-1",
          type: "icon",
          icon: es(cw),
          onClick: a
        }, null, 8, ["icon"]),
        ug(es(he), {
          class: "pa-0 ps-1",
          type: "icon",
          icon: es(lw),
          onClick: r
        }, null, 8, ["icon"])
      ]),
      _: 1
    }));
  }
};
const dg = window.Vue.toDisplayString, $3 = window.Vue.resolveDirective, Pr = window.Vue.withDirectives, no = window.Vue.openBlock, Ta = window.Vue.createElementBlock, V3 = window.Vue.createCommentVNode, E3 = window.Vue.createTextVNode, gg = window.Vue.createElementVNode, A3 = window.Vue.normalizeClass, Fn = window.Vue.unref, Fr = window.Vue.withCtx, Mr = window.Vue.createVNode, pg = window.Vue.createBlock, D3 = { class: "sx-content-comparator-header__mapped-section" }, L3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, T3 = { key: 0 }, B3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, P3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, mg = window.Vue.computed, F3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: Cn,
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
    const n = ue(), o = e, s = t, a = mg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), r = mg(
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
          (d) => d !== o.targetSectionTitle
        )
      );
    };
    return (d, i) => {
      const c = $3("i18n");
      return no(), Ta("div", D3, [
        Mr(Fn(T), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Fr(() => [
            Mr(Fn(C), { grow: "" }, {
              default: Fr(() => [
                gg("h6", L3, [
                  E3(dg(r.value) + " ", 1),
                  a.value ? Pr((no(), Ta("span", T3, null, 512)), [
                    [c, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : V3("", !0)
                ]),
                gg("h6", {
                  class: A3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, dg(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            Mr(Fn(C), { shrink: "" }, {
              default: Fr(() => [
                a.value ? (no(), pg(Fn(he), {
                  key: 1,
                  class: "pa-0",
                  icon: Fn(ww),
                  type: "icon",
                  onClick: u
                }, null, 8, ["icon"])) : (no(), pg(Fn(he), {
                  key: 0,
                  class: "pa-0",
                  icon: Fn(Ip),
                  type: "icon",
                  onClick: l
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? Pr((no(), Ta("p", P3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Pr((no(), Ta("p", B3, null, 512)), [
          [c, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const ae = window.Vue.unref, jt = window.Vue.createVNode, hg = window.Vue.toDisplayString, Ss = window.Vue.createElementVNode, oo = window.Vue.withCtx, M3 = window.Vue.resolveDirective, fg = window.Vue.withDirectives, Nr = window.Vue.openBlock, wg = window.Vue.createBlock, _g = window.Vue.createCommentVNode, N3 = window.Vue.createElementBlock, U3 = { class: "sx-content-comparator__header pa-4" }, I3 = ["lang", "dir"], z3 = ["lang", "dir"], R3 = /* @__PURE__ */ Ss("br", null, null, -1), Ba = window.Vue.computed, O3 = {
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
    const { sectionURLParameter: t } = F(), { sourceSection: n } = K(), { sectionSuggestion: o } = He(), s = Ba(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), a = Ba(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: r } = vc(), l = Ba(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), u = Ba(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (d, i) => {
      const c = M3("i18n");
      return Nr(), N3("div", U3, [
        jt(ae(he), {
          class: "py-2 pa-0",
          icon: ae(uw),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        jt(ae(T), { class: "my-1 py-2 mx-0" }, {
          default: oo(() => [
            jt(ae(C), { grow: "" }, {
              default: oo(() => [
                Ss("h4", {
                  class: "pa-0 sx-content-comparator-header__article-title",
                  lang: ae(o).sourceLanguage,
                  dir: ae(U.getDir)(ae(o).sourceLanguage)
                }, hg(ae(o).sourceTitle), 9, I3),
                Ss("h2", {
                  class: "sx-content-comparator-header__section-title pa-0 ma-0",
                  lang: ae(o).sourceLanguage,
                  dir: ae(U.getDir)(ae(o).sourceLanguage)
                }, hg(ae(t)), 9, z3)
              ]),
              _: 1
            }),
            jt(x3, {
              cols: "2",
              "section-source-titles": u.value
            }, null, 8, ["section-source-titles"]),
            jt(ae(C), {
              cols: "12",
              mobile: "12",
              tablet: "4",
              class: "py-2 mb-1"
            }, {
              default: oo(() => [
                jt(ae(he), {
                  icon: ae(si),
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
        s.value ? (Nr(), wg(ae(T), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: oo(() => [
            jt(ae(C), {
              shrink: "",
              class: "pe-2"
            }, {
              default: oo(() => [
                jt(ae(we), { icon: ae(hw) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            jt(ae(C), { class: "ma-0" }, {
              default: oo(() => [
                fg(Ss("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                R3,
                fg(Ss("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : _g("", !0),
        a.value ? (Nr(), wg(F3, {
          key: 1,
          suggestion: ae(o),
          "target-section-title": ae(r),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": i[2] || (i[2] = (g) => d.$emit("update:discardedSections", g))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : _g("", !0)
      ]);
    };
  }
};
const H3 = {
  name: "SxContentComparatorNewSectionPlaceholder",
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
  }
}, vg = window.Vue.toDisplayString, j3 = window.Vue.createElementVNode, Sg = window.Vue.openBlock, yg = window.Vue.createElementBlock, q3 = window.Vue.createCommentVNode, G3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, X3 = ["textContent"], W3 = ["textContent"];
function K3(e, t, n, o, s, a) {
  return Sg(), yg("section", G3, [
    j3("h5", {
      textContent: vg(n.placeholderTitle)
    }, null, 8, X3),
    n.placeholderSubtitle ? (Sg(), yg("p", {
      key: 0,
      textContent: vg(n.placeholderSubtitle)
    }, null, 8, W3)) : q3("", !0)
  ]);
}
const mh = /* @__PURE__ */ X(H3, [["render", K3]]), Y3 = window.Vue.computed, J3 = window.Vue.createApp, Q3 = window.Vuex.useStore, Z3 = () => {
  const e = Q3(), { sectionSuggestion: t } = He(), { currentTargetPage: n } = je(), o = ue(), s = () => J3(
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
      (d) => d.parentNode.removeChild(d)
    );
  };
  return Y3(() => {
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
const $e = window.Vue.unref, eV = window.Vue.isRef, Ur = window.Vue.createVNode, so = window.Vue.openBlock, Cg = window.Vue.createBlock, kg = window.Vue.createCommentVNode, Pa = window.Vue.createElementVNode, Ir = window.Vue.Fragment, Fa = window.Vue.createElementBlock, tV = { class: "sx-content-comparator" }, nV = { class: "sx-content-comparator__source-content" }, oV = ["lang", "dir", "innerHTML"], sV = ["lang", "dir", "innerHTML"], aV = ["innerHTML"], iV = window.Vue.ref, rV = window.Vue.computed, lV = window.Vue.watch, cV = window.Vuex.useStore, uV = {
  __name: "SXContentComparator",
  setup(e) {
    const t = cV(), n = _e(), o = iV("source_section"), { logDashboardTranslationStartEvent: s } = uc(), a = () => n.push({ name: "sx-section-selector" }), r = () => {
      s(), uh() || !t.getters["translator/userHasSectionTranslations"] ? n.push({ name: "sx-quick-tutorial" }) : n.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: l,
      discardedSections: u,
      isCurrentSectionMapped: d,
      sourceSectionContent: i,
      targetSectionContent: c
    } = vc(), g = Z3(), { sectionSuggestion: p } = He(), { sourceLanguage: m, targetLanguage: h } = H(t), f = rV(() => p.value.targetTitle), _ = hc();
    return lV(
      f,
      () => _(
        h.value,
        m.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, S) => (so(), Fa("section", tV, [
      Ur(O3, {
        "discarded-sections": $e(u),
        "onUpdate:discardedSections": S[0] || (S[0] = (y) => eV(u) ? u.value = y : null),
        onTranslationButtonClicked: r,
        onClose: a
      }, null, 8, ["discarded-sections"]),
      Ur(S3, {
        "source-vs-target-selection": o.value,
        "onUpdate:sourceVsTargetSelection": S[1] || (S[1] = (y) => o.value = y),
        "is-mapped-section": $e(d),
        onTranslationButtonClicked: r
      }, null, 8, ["source-vs-target-selection", "is-mapped-section"]),
      Pa("section", nV, [
        o.value === "source_section" ? (so(), Fa(Ir, { key: 0 }, [
          $e(i) ? kg("", !0) : (so(), Cg($e(ze), { key: 0 })),
          Pa("section", {
            lang: $e(m),
            dir: $e(U.getDir)($e(m)),
            class: "pt-2 px-4",
            innerHTML: $e(i)
          }, null, 8, oV)
        ], 64)) : o.value === "target_article" ? (so(), Fa(Ir, { key: 1 }, [
          $e(g) ? kg("", !0) : (so(), Cg($e(ze), { key: 0 })),
          Pa("article", {
            lang: $e(h),
            dir: $e(U.getDir)($e(h)),
            class: "px-4",
            innerHTML: $e(g)
          }, null, 8, sV)
        ], 64)) : (so(), Fa(Ir, { key: 2 }, [
          Pa("section", {
            class: "pa-4",
            innerHTML: $e(c)
          }, null, 8, aV),
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
const dV = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: uV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, gV = window.Vue.resolveComponent, pV = window.Vue.createVNode, mV = window.Vue.normalizeClass, hV = window.Vue.openBlock, fV = window.Vue.createElementBlock;
function wV(e, t, n, o, s, a) {
  const r = gV("sx-content-comparator");
  return hV(), fV("main", {
    class: mV(["sx-content-comparator-view", a.classes])
  }, [
    pV(r)
  ], 2);
}
const _V = /* @__PURE__ */ X(dV, [["render", wV]]);
const vV = window.Vue.resolveDirective, ts = window.Vue.createElementVNode, bg = window.Vue.withDirectives, Ma = window.Vue.unref, zr = window.Vue.createVNode, xg = window.Vue.toDisplayString, $g = window.Vue.createTextVNode, ns = window.Vue.withCtx, SV = window.Vue.openBlock, yV = window.Vue.createBlock, CV = { class: "mw-ui-dialog__header px-4 py-3" }, kV = { class: "mw-ui-dialog__header-title" }, bV = { class: "pa-4" }, xV = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Vg = window.Codex.CdxButton, $V = {
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
      const u = vV("i18n");
      return SV(), yV(Ma(nt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": r.$mwui.colors.gray700
      }, {
        header: ns(() => [
          ts("div", CV, [
            bg(ts("span", kV, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ns(() => [
          ts("div", xV, [
            zr(Ma(Vg), {
              weight: "quiet",
              onClick: s
            }, {
              default: ns(() => [
                $g(xg(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            zr(Ma(Vg), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ns(() => [
                $g(xg(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ns(() => [
          zr(Ma(oi)),
          ts("div", bV, [
            bg(ts("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, VV = window.Vuex.useStore, Sc = () => {
  const e = VV(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = Qt(), o = (l, u, d) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[u] = d;
      return;
    }
    const i = t.value.getContentTranslationUnitById(l);
    i instanceof Ue ? i.blockTemplateProposedTranslations[u] = d : i instanceof Sn && i.addProposedTranslation(u, d);
  }, s = (l, u) => k(void 0, null, function* () {
    const { sourceLanguage: d, targetLanguage: i } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](d, i, l))
      return "";
    try {
      const g = yield e.dispatch("application/getCXServerToken");
      return yield tt.fetchSegmentTranslation(
        d,
        i,
        l,
        u,
        g
      );
    } catch (g) {
      return mw.log.error("Error while translating segment", g), "";
    }
  }), a = (l, u) => k(void 0, null, function* () {
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
    ), p = (yield kv(
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
}, EV = window.Vuex.useStore, AV = () => {
  const { sourceSection: e } = K(), t = EV(), { translateTranslationUnitById: n } = Sc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const DV = window.Vue.resolveDirective, Qe = window.Vue.createElementVNode, Na = window.Vue.withDirectives, Pe = window.Vue.unref, Rr = window.Vue.createVNode, mn = window.Vue.withCtx, LV = window.Vue.renderList, TV = window.Vue.Fragment, Or = window.Vue.openBlock, BV = window.Vue.createElementBlock, PV = window.Vue.toDisplayString, Eg = window.Vue.createBlock, FV = window.Vue.createCommentVNode, MV = { class: "mw-ui-dialog__header pa-4" }, NV = { class: "row ma-0 py-2" }, UV = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, IV = { class: "mb-0" }, zV = { class: "col shrink justify-center" }, RV = { class: "pb-2 mb-0" }, OV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, HV = ["dir", "lang", "innerHTML"], jV = ["textContent"], qV = ["innerHTML"], GV = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, XV = /* @__PURE__ */ Qe("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), Hr = window.Vue.computed, WV = window.Vuex.useStore, KV = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = Y.EMPTY_TEXT_PROVIDER_KEY, s = Y.ORIGINAL_TEXT_PROVIDER_KEY, a = WV(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = K(), { sourceLanguage: d, targetLanguage: i } = H(a), c = Hr(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Hr(() => {
      const w = [s, o];
      return c.value.filter(
        (S) => !w.includes(S)
      );
    }), p = Hr(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = AV(), h = (w) => {
      m(w), _();
    }, f = Y.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, S) => {
      const y = DV("i18n");
      return e.active ? (Or(), Eg(Pe(nt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: mn(() => [
          Qe("div", MV, [
            Qe("div", NV, [
              Qe("div", UV, [
                Na(Qe("h4", IV, null, 512), [
                  [y, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              Qe("div", zV, [
                Rr(Pe(he), {
                  type: "icon",
                  icon: Pe(Ds),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            Na(Qe("h6", RV, null, 512), [
              [y, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: mn(() => [
          Rr(Pe(Ie), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (b) => h(Pe(s)))
          }, {
            header: mn(() => [
              Na(Qe("h5", OV, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: mn(() => [
              Qe("p", {
                dir: Pe(U.getDir)(Pe(d)),
                lang: Pe(d),
                innerHTML: p.value[Pe(s)]
              }, null, 8, HV)
            ]),
            _: 1
          }),
          (Or(!0), BV(TV, null, LV(g.value, (b) => (Or(), Eg(Pe(Ie), {
            key: b,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (V) => h(b)
          }, {
            header: mn(() => [
              Qe("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: PV(Pe(f)(b))
              }, null, 8, jV)
            ]),
            default: mn(() => [
              Qe("p", {
                innerHTML: p.value[b]
              }, null, 8, qV)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Rr(Pe(Ie), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (b) => h(Pe(o)))
          }, {
            header: mn(() => [
              Na(Qe("h5", GV, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: mn(() => [
              XV
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : FV("", !0);
    };
  }
}, YV = window.Vuex.useStore, xo = () => {
  const { sourceSection: e } = K(), t = YV(), { translateTranslationUnitById: n } = Sc(), { currentMTProvider: o } = H(t), s = (l) => k(void 0, null, function* () {
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
const JV = window.Vue.toDisplayString, jr = window.Vue.createElementVNode, qr = window.Vue.unref, QV = window.Vue.createVNode, ZV = window.Vue.normalizeClass, e5 = window.Vue.withCtx, t5 = window.Vue.openBlock, n5 = window.Vue.createBlock, o5 = ["href"], s5 = ["textContent"], a5 = ["innerHTML"], ao = window.Vue.computed, i5 = window.Vuex.useStore, Ag = "sx-sentence-selector__section-title", r5 = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = i5(), { sourceSection: n, isSectionTitleSelected: o } = K(), { currentSourcePage: s } = je(), { sourceLanguage: a } = H(t), r = ao(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), l = ao(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || r.value;
      }
    ), u = ao(
      () => j.getPageUrl(a.value, r.value)
    ), d = ao(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), i = ao(
      () => d.value ? "translated" : "selected"
    ), c = ao(() => {
      const m = [Ag];
      return o.value && m.push(`${Ag}--${i.value}`), m;
    }), { selectTranslationUnitById: g } = xo(), p = () => g(0);
    return (m, h) => (t5(), n5(qr(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: e5(() => [
        jr("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          jr("strong", {
            textContent: JV(r.value)
          }, null, 8, s5),
          QV(qr(we), {
            icon: qr(Rp),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, o5),
        jr("h2", {
          class: ZV(["pa-0 ma-0", c.value]),
          onClick: p,
          innerHTML: l.value
        }, null, 10, a5)
      ]),
      _: 1
    }));
  }
};
const vt = window.Vue.unref, os = window.Vue.createVNode, Ua = window.Vue.withCtx, Dg = window.Vue.toDisplayString, Lg = window.Vue.createTextVNode, l5 = window.Vue.openBlock, c5 = window.Vue.createBlock, u5 = window.Vue.computed, Gr = window.Codex.CdxButton, Tg = window.Codex.CdxIcon, hh = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = K(), s = u5(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (l5(), c5(vt(T), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ua(() => [
        os(vt(Gr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: vt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Ua(() => [
            os(vt(Tg), {
              class: "me-1",
              icon: vt(cc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        os(vt(Gr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !vt(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Ua(() => [
            Lg(Dg(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        os(vt(Gr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Ua(() => [
            Lg(Dg(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            os(vt(Tg), {
              class: "ms-1",
              size: "small",
              icon: vt(Os)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Mn = window.Vue.unref, d5 = window.Vue.toDisplayString, ss = window.Vue.createVNode, Ia = window.Vue.withCtx, g5 = window.Vue.openBlock, p5 = window.Vue.createBlock, Xr = window.Vue.computed, m5 = window.Vuex.useStore, h5 = window.Codex.CdxButton, f5 = window.Codex.CdxIcon, w5 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = m5(), n = Xr(() => t.state.application.currentMTProvider), o = ue(), s = Xr(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Xr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (g5(), p5(Mn(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ia(() => [
        ss(Mn(T), { class: "ma-0 ps-5 pb-4" }, {
          default: Ia(() => [
            ss(Mn(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: d5(a.value)
            }, null, 8, ["textContent"]),
            ss(Mn(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ia(() => [
                ss(Mn(h5), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: Ia(() => [
                    ss(Mn(f5), {
                      class: "pa-0",
                      icon: Mn(rc)
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
const ut = window.Vue.unref, hn = window.Vue.createVNode, _5 = window.Vue.resolveDirective, Bg = window.Vue.createElementVNode, v5 = window.Vue.withDirectives, Pg = window.Vue.toDisplayString, Fg = window.Vue.createTextVNode, as = window.Vue.withCtx, S5 = window.Vue.openBlock, y5 = window.Vue.createElementBlock, C5 = { class: "mt-retry-body pb-5" }, k5 = { class: "retry-body__message" }, Mg = window.Codex.CdxButton, Wr = window.Codex.CdxIcon, b5 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = _5("i18n");
      return S5(), y5("div", C5, [
        Bg("div", k5, [
          hn(ut(Wr), {
            class: "me-2",
            icon: ut(Gm)
          }, null, 8, ["icon"]),
          v5(Bg("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        hn(ut(T), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: as(() => [
            hn(ut(C), { cols: "6" }, {
              default: as(() => [
                hn(ut(Mg), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: as(() => [
                    hn(ut(Wr), {
                      class: "me-1",
                      icon: ut(Jm)
                    }, null, 8, ["icon"]),
                    Fg(" " + Pg(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            hn(ut(C), { cols: "6" }, {
              default: as(() => [
                hn(ut(Mg), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: as(() => [
                    hn(ut(Wr), {
                      class: "me-1",
                      icon: ut(pk)
                    }, null, 8, ["icon"]),
                    Fg(" " + Pg(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const io = window.Vue.createVNode, Fe = window.Vue.unref, is = window.Vue.openBlock, x5 = window.Vue.createElementBlock, $5 = window.Vue.createCommentVNode, za = window.Vue.createBlock, V5 = window.Vue.normalizeClass, E5 = window.Vue.normalizeStyle, rs = window.Vue.withCtx, A5 = window.Vue.toDisplayString, D5 = window.Vue.createTextVNode, L5 = window.Vue.normalizeProps, T5 = window.Vue.guardReactiveProps, B5 = ["lang", "dir", "innerHTML"], Kr = window.Vue.ref, P5 = window.Vue.onMounted, F5 = window.Vue.onBeforeUnmount, Yr = window.Vue.computed, M5 = window.Vue.nextTick, N5 = window.Vuex.useStore, U5 = window.Codex.CdxButton, I5 = window.Codex.CdxIcon, z5 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Kr(0), n = Kr(null), o = Kr(null), s = N5(), { currentMTProvider: a, targetLanguage: r } = H(s), { sourceSection: l, currentProposedTranslation: u } = K(), d = Yr(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Yr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = Yr(
      () => !!u.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    P5(() => k(this, null, function* () {
      yield M5(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), F5(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (is(), za(Fe(Ie), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: rs(() => [
        io(Fe(T), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: rs(() => [
            io(w5, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            io(Fe(C), {
              class: V5(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: E5(c.value ? i.value : null)
            }, {
              default: rs(() => [
                c.value ? (is(), x5("section", {
                  key: 0,
                  lang: Fe(r),
                  dir: Fe(U.getDir)(Fe(r)),
                  innerHTML: Fe(u)
                }, null, 8, B5)) : d.value ? (is(), za(Fe(ze), { key: 1 })) : (is(), za(b5, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            io(Fe(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: rs(() => [
                c.value || d.value ? (is(), za(Fe(U5), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Fe(u)))
                }, {
                  default: rs(() => [
                    io(Fe(I5), {
                      class: "me-1",
                      icon: Fe(ic)
                    }, null, 8, ["icon"]),
                    D5(" " + A5(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : $5("", !0),
                io(hh, L5(T5(m.$attrs)), null, 16)
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
}, R5 = window.Vue.computed, O5 = (e) => R5(() => {
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
const H5 = window.Vue.unref, j5 = window.Vue.normalizeClass, q5 = window.Vue.openBlock, G5 = window.Vue.createElementBlock, X5 = ["innerHTML"], W5 = window.Vue.onMounted, K5 = window.Vue.ref, Y5 = window.Vue.computed, J5 = {
  __name: "SubSection",
  props: {
    subSection: {
      type: Ue,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = K5(null), a = O5(n.subSection);
    W5(() => {
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
    const { selectTranslationUnitById: r } = xo(), l = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, u = Y5(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (q5(), G5("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: j5(["sx-sentence-selector__subsection", u.value]),
      innerHTML: H5(a)
    }, null, 10, X5));
  }
};
const Ng = window.Vue.unref, Ug = window.Vue.createVNode, Ig = window.Vue.normalizeStyle, Q5 = window.Vue.openBlock, Z5 = window.Vue.createElementBlock, zg = window.Vue.computed, fh = {
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
    const t = e, n = zg(() => ({ "--size": t.size })), o = zg(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Op : ei
    );
    return (s, a) => (Q5(), Z5("div", {
      class: "block-template-status-indicator",
      style: Ig(n.value)
    }, [
      Ug(Ng(o1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Ug(Ng(we), {
        icon: o.value,
        size: e.size / 2,
        style: Ig({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, ls = window.Vue.openBlock, Ra = window.Vue.createBlock;
window.Vue.createCommentVNode;
const qt = window.Vue.unref, ro = window.Vue.withCtx, cs = window.Vue.createVNode, Jr = window.Vue.toDisplayString, Qr = window.Vue.createElementVNode, eE = window.Vue.renderList, tE = window.Vue.Fragment, nE = window.Vue.createElementBlock, oE = { class: "pa-4" }, sE = ["textContent"], aE = ["textContent"], iE = window.Vuex.useStore, Oa = window.Vue.computed, rE = {
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
    const t = e, { targetLanguageAutonym: n } = H(iE()), o = Oa(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = ue(), a = Oa(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = Oa(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = Oa(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: yw,
          color: Ze.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Ds,
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
        let d;
        t.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
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
    return (u, d) => (ls(), Ra(qt(nt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      "overlay-opacity": 0.7,
      "overlay-color": u.$mwui.colors.gray700,
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: ro(() => [
        cs(qt(T), {
          justify: "center",
          class: "mt-4"
        }, {
          default: ro(() => [
            cs(qt(C), { shrink: "" }, {
              default: ro(() => [
                e.targetTemplateExists ? (ls(), Ra(fh, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ls(), Ra(qt(we), {
                  key: 1,
                  icon: qt(sw)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: ro(() => [
        Qr("div", oE, [
          Qr("h3", {
            textContent: Jr(a.value)
          }, null, 8, sE),
          Qr("p", {
            class: "mt-6 text-small",
            textContent: Jr(r.value)
          }, null, 8, aE),
          (ls(!0), nE(tE, null, eE(l.value, (i, c) => (ls(), Ra(qt(T), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: ro(() => [
              cs(qt(C), { shrink: "" }, {
                default: ro(() => [
                  cs(qt(we), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              cs(qt(C), {
                textContent: Jr(i.text)
              }, null, 8, ["textContent"])
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ]),
      _: 1
    }, 8, ["value", "title", "overlay-color"]));
  }
};
const me = window.Vue.unref, ke = window.Vue.createVNode, St = window.Vue.withCtx, Zr = window.Vue.toDisplayString, Rg = window.Vue.createTextVNode, lE = window.Vue.resolveDirective, Og = window.Vue.withDirectives, Hg = window.Vue.createElementVNode, cE = window.Vue.normalizeClass, Ha = window.Vue.openBlock, jg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const qg = window.Vue.createBlock, uE = window.Vue.normalizeProps, dE = window.Vue.guardReactiveProps, gE = { class: "block-template-adaptation-card__container pa-4" }, pE = ["textContent"], mE = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ae = window.Vue.computed, hE = window.Vue.ref, fE = window.Vuex.useStore, Gg = window.Codex.CdxButton, Xg = window.Codex.CdxIcon, wE = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = fE(), { targetLanguageAutonym: n, currentMTProvider: o } = H(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = K(), r = Ae(() => {
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
      const E = V.value;
      return h.value + E === 0 ? 100 : _.value / (h.value + E) * 100 || 0;
    }), S = hE(!1), y = () => {
      S.value = !0;
    }, b = (E) => E.filter((P) => !f.value.includes(P)), V = Ae(() => {
      var P;
      const E = ((P = c.value) == null ? void 0 : P.mandatoryTargetParams) || [];
      return b(E).length;
    }), M = Ae(() => {
      var P;
      const E = ((P = c.value) == null ? void 0 : P.optionalTargetParams) || [];
      return b(E).length;
    });
    return (E, P) => {
      const J = lE("i18n");
      return Ha(), qg(me(Ie), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: St(() => [
          Hg("div", gE, [
            ke(me(T), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: St(() => [
                ke(me(C), { shrink: "" }, {
                  default: St(() => [
                    ke(me(Xg), {
                      icon: me(mk),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ke(me(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: St(() => [
                    Rg(Zr(i.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (Ha(), jg("div", {
              key: 0,
              class: cE(["pa-4 mb-4", p.value])
            }, [
              ke(me(T), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: St(() => [
                  Og(ke(me(C), { tag: "h5" }, null, 512), [
                    [J, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ke(me(C), { shrink: "" }, {
                    default: St(() => [
                      ke(fh, {
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
              Hg("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Zr(l.value)
              }, null, 8, pE),
              ke(me(Gg), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: P[0] || (P[0] = (B) => E.$emit("edit-translation", r.value))
              }, {
                default: St(() => [
                  Rg(Zr(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Ha(), jg("div", mE, [
              ke(me(T), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: St(() => [
                  Og(ke(me(C), { tag: "h5" }, null, 512), [
                    [J, [
                      me(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ke(me(C), { shrink: "" }, {
                    default: St(() => [
                      ke(me(Gg), {
                        weight: "quiet",
                        "aria-label": E.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: St(() => [
                          ke(me(Xg), {
                            icon: me(dk),
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
            ])) : (Ha(), qg(me(ze), { key: 2 }))
          ]),
          ke(hh, uE(dE(E.$attrs)), null, 16),
          ke(rE, {
            active: S.value,
            "onUpdate:active": P[1] || (P[1] = (B) => S.value = B),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": V.value,
            "optional-missing-params-count": M.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const _E = window.Vue.unref, vE = window.Vue.createVNode, SE = window.Vue.openBlock, yE = window.Vue.createElementBlock, CE = { class: "translated-segment-card-header" }, kE = window.Vue.computed, bE = {
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
    const n = t, { isSectionTitleSelected: o } = K(), s = ue(), a = kE(() => [
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
    return (l, u) => (SE(), yE("div", CE, [
      vE(_E(As), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const fn = window.Vue.unref, ja = window.Vue.createVNode, el = window.Vue.withCtx, xE = window.Vue.openBlock, $E = window.Vue.createBlock, VE = window.Vue.computed, Wg = window.Codex.CdxButton, Kg = window.Codex.CdxIcon, EE = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = K(), o = VE(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (xE(), $E(fn(T), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: el(() => [
        ja(fn(Wg), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: fn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: el(() => [
            ja(fn(Kg), { icon: fn(cc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ja(fn(Wg), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("skip-translation"))
        }, {
          default: el(() => [
            ja(fn(Kg), { icon: fn(Os) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const AE = window.Vue.useCssVars, be = window.Vue.createVNode, Yg = window.Vue.resolveDirective, DE = window.Vue.createElementVNode, tl = window.Vue.withDirectives, re = window.Vue.unref, LE = window.Vue.normalizeStyle, qa = window.Vue.openBlock, Jg = window.Vue.createElementBlock, TE = window.Vue.createCommentVNode, BE = window.Vue.normalizeClass, Ye = window.Vue.withCtx, PE = window.Vue.toDisplayString, FE = window.Vue.createTextVNode, Qg = window.Vue.createBlock, ME = window.Vue.normalizeProps, NE = window.Vue.guardReactiveProps, Gt = window.Vue.computed, UE = window.Vue.ref, IE = window.Vue.inject, zE = window.Vuex.useStore, RE = window.Codex.CdxButton, nl = window.Codex.CdxIcon, OE = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    AE((w) => ({
      "4929555c": _.value
    }));
    const t = UE("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = K(), { targetLanguage: a } = H(zE()), r = Gt(() => t.value === "sentence"), l = Gt(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), u = Gt(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = IE("colors"), i = d.gray200, c = d.red600, g = Gt(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = Gt(
      () => bt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = Gt(
      () => bt.getScoreStatus(p.value)
    ), h = Gt(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = Gt(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), _ = Gt(
      () => f.value[m.value]
    );
    return (w, S) => {
      const y = Yg("i18n"), b = Yg("i18n-html");
      return qa(), Qg(re(Ie), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ye(() => [
          be(re(T), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ye(() => [
              be(bE, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (V) => t.value = V)
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
                          tl(DE("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? tl((qa(), Jg("p", {
                            key: 0,
                            style: LE({ color: re(c) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : tl((qa(), Jg("p", {
                            key: 1,
                            class: BE(h.value)
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
                                    icon: re(wk)
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
                                    icon: re(hk)
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
                  r.value ? (qa(), Qg(re(RE), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (V) => w.$emit("edit-translation", g.value))
                  }, {
                    default: Ye(() => [
                      be(re(nl), {
                        class: "me-1",
                        icon: re(ic)
                      }, null, 8, ["icon"]),
                      FE(" " + PE(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : TE("", !0)
                ]),
                _: 1
              }),
              be(re(C), { class: "translated-segment-card__actions" }, {
                default: Ye(() => [
                  be(EE, ME(NE(w.$attrs)), null, 16)
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
}, HE = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = K(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = xo(), { currentTranslation: s } = Zt();
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
}, wh = window.Vuex.useStore, jE = () => {
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
}, qE = () => {
  const e = wh(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = H(e), s = jE();
  return () => k(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = Y.getStorageKey(
        n.value,
        o.value
      ), l = mw.storage.get(r) || a[0];
      e.commit("application/setCurrentMTProvider", l);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, GE = window.Vue.computed, XE = (e) => {
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
}, WE = () => {
  const { selectedContentTranslationUnit: e } = K(), t = GE(
    () => e.value instanceof Ue
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && XE(o);
  };
}, KE = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !Y.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, YE = window.Vue.computed, _h = () => {
  const { currentTranslation: e } = Zt(), { currentSourcePage: t } = je();
  return YE(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, JE = window.Vuex.useStore, yc = () => {
  const e = JE(), { sourceSection: t, targetPageTitleForPublishing: n } = K(), { pageURLParameter: o } = F(), { sourceLanguage: s, targetLanguage: a } = H(e), r = _h();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(d);
    i.forEach(
      (p) => KE(p, u)
    );
    const c = t.value.getTranslationProgress(a), g = e.getters["application/isSandboxTarget"];
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
      sectionId: d,
      isSandbox: g,
      progress: c
    });
  };
}, QE = window.Vue.effectScope, ZE = window.Vue.onScopeDispose, eA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = QE(!0), n = o.run(() => e(...a))), ZE(s), n);
}, tA = window.Vuex.useStore;
let ol;
const nA = () => {
  const e = tA(), t = yc();
  let n = 1e3, o = 0;
  return ol = dc(() => t().then((a) => {
    a instanceof ho ? (n *= o + 1, o++, setTimeout(ol, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof vo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), ol;
}, vh = eA(nA), oA = window.Vuex.useStore, sA = () => {
  const e = oA(), t = vh(), { currentMTProvider: n } = H(e), { sourceSection: o, currentProposedTranslation: s } = K(), { selectNextTranslationUnit: a } = xo();
  return () => k(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, aA = window.Vuex.useStore, iA = () => {
  const e = aA(), t = vh();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, rA = window.Vuex.useStore, lA = window.Vue.computed, Sh = () => {
  const e = rA(), t = _e(), { currentTranslation: n } = Zt(), { currentMTProvider: o, previousRoute: s } = H(e), { currentTargetPage: a } = je(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: d
  } = F(), i = Oe(), c = lA(() => {
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
    return o.value && (f.translation_provider = Y.getProviderForInstrumentation(o.value)), f;
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
const ne = window.Vue.unref, Je = window.Vue.createVNode, Xt = window.Vue.withCtx, cA = window.Vue.resolveDirective, Zg = window.Vue.createElementVNode, uA = window.Vue.withDirectives, dA = window.Vue.toDisplayString, gA = window.Vue.createTextVNode, pA = window.Vue.renderList, mA = window.Vue.Fragment, wn = window.Vue.openBlock, ep = window.Vue.createElementBlock, lo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const hA = window.Vue.normalizeClass, fA = window.Vue.normalizeStyle, wA = { class: "sx-sentence-selector__header-title mb-0" }, _A = { class: "sx-sentence-selector__section-contents px-4" }, co = window.Vue.computed, vA = window.Vue.nextTick, SA = window.Vue.onMounted, Ga = window.Vue.ref, tp = window.Vue.watch, yA = window.Vuex.useStore, np = window.Codex.CdxButton, CA = window.Codex.CdxIcon, kA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Ga(!1), n = Ga(!1), o = Ga("100%"), s = yA(), { currentMTProvider: a } = H(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l
    } = F(), { sourceSection: u, selectedContentTranslationUnit: d } = K(), i = co(
      () => s.state.application.translationDataLoadingCounter === 0
    ), c = co(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), g = co(() => {
      var v;
      return (v = u.value) == null ? void 0 : v.subSections;
    }), p = co(
      () => {
        var v;
        return (v = u.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), m = co(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: f,
      logEditorCloseWarnEvent: _,
      logEditorSegmentAddEvent: w
    } = Sh(), S = HE();
    qE()().then(h);
    const b = WE();
    SA(() => {
      tp(
        i,
        () => k(this, null, function* () {
          i.value && (yield vA(), S(), b());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), tp(d, b);
    const {
      selectNextTranslationUnit: V,
      selectPreviousTranslationUnit: M
    } = xo(), E = sA(), P = () => {
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
      $t();
    }, { fetchTranslationsByStatus: Q } = di(), W = iA(), { clearURLParameters: ot } = F(), { currentTranslation: Le } = Zt(), $t = () => k(this, null, function* () {
      Q("draft"), Le.value && (u.value.reset(), Le.value.restored = !1), f(), ot(), W(), yield B.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ft,
      translateSelectedTranslationUnitForAllProviders: Vo
    } = Sc(), xn = () => {
      At.value || (t.value = !0, Vo());
    }, { getCurrentTitleByLanguage: Vt } = Qt(), qe = (v, A) => {
      B.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: p.value,
          title: Vt(
            l.value,
            r.value
          ),
          isInitialEdit: A || null
        }
      });
    }, en = () => B.push({ name: "sx-publisher" }), Et = () => k(this, null, function* () {
      d.value ? yield ft(
        d.value.id,
        a.value
      ) : yield ft(0, a.value);
    }), At = co(
      () => d.value instanceof Ue
    ), Ge = Ga(!1);
    return (v, A) => {
      const D = cA("i18n");
      return wn(), ep("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: fA(m.value)
      }, [
        Je(ne(T), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Xt(() => [
            Je(ne(C), { shrink: "" }, {
              default: Xt(() => [
                Je(ne(np), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: I
                }, {
                  default: Xt(() => [
                    Je(ne(CA), { icon: ne(Xm) }, null, 8, ["icon"])
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
              default: Xt(() => [
                uA(Zg("h4", wA, null, 512), [
                  [D, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Je(ne(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: Xt(() => [
                Je(ne(np), {
                  disabled: !(ne(u) && ne(u).isTranslated),
                  onClick: en
                }, {
                  default: Xt(() => [
                    gA(dA(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i.value ? (wn(), lo(ne(T), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Xt(() => [
            Je(ne(C), {
              dir: ne(U.getDir)(ne(r)),
              lang: ne(r),
              class: "sx-sentence-selector__section"
            }, {
              default: Xt(() => [
                Je(r5),
                Zg("div", _A, [
                  (wn(!0), ep(mA, null, pA(g.value, (L) => (wn(), lo(J5, {
                    id: L.id,
                    key: `sub-section-${L.id}`,
                    "sub-section": L,
                    onBounceTranslation: J
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !At.value && c.value ? (wn(), lo(OE, {
              key: 0,
              onEditTranslation: A[0] || (A[0] = (L) => qe(L, !1)),
              onSkipTranslation: ne(V),
              onSelectPreviousSegment: ne(M)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : At.value ? (wn(), lo(wE, {
              key: 2,
              onEditTranslation: qe,
              onApplyTranslation: P,
              onSkipTranslation: ne(V),
              onSelectPreviousSegment: ne(M)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (wn(), lo(z5, {
              key: 1,
              class: hA({ "mb-0": !n.value }),
              onConfigureOptions: xn,
              onEditTranslation: A[1] || (A[1] = (L) => qe(L, !0)),
              onApplyTranslation: P,
              onSkipTranslation: ne(V),
              onSelectPreviousSegment: ne(M),
              onRetryTranslation: Et
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (wn(), lo(ne(T), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Xt(() => [
            Je(ne(ze), { class: "mt-0" })
          ]),
          _: 1
        })),
        Je(KV, {
          active: t.value,
          "onUpdate:active": A[2] || (A[2] = (L) => t.value = L)
        }, null, 8, ["active"]),
        Je($V, {
          modelValue: Ge.value,
          "onUpdate:modelValue": A[3] || (A[3] = (L) => Ge.value = L),
          onDiscardTranslation: $t
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const bA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: kA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, xA = window.Vue.resolveComponent, $A = window.Vue.createVNode, VA = window.Vue.normalizeClass, EA = window.Vue.openBlock, AA = window.Vue.createElementBlock;
function DA(e, t, n, o, s, a) {
  const r = xA("sx-sentence-selector");
  return EA(), AA("main", {
    class: VA(["sx-sentence-selector-view", a.classes])
  }, [
    $A(r)
  ], 2);
}
const LA = /* @__PURE__ */ X(bA, [["render", DA]]), TA = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, BA = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const PA = window.Vue.resolveDirective, Xa = window.Vue.withDirectives, dt = window.Vue.openBlock, Wt = window.Vue.createElementBlock, Wa = window.Vue.createCommentVNode, Ka = window.Vue.Transition, Nn = window.Vue.withCtx, uo = window.Vue.createVNode, us = window.Vue.createElementVNode, Un = window.Vue.unref, FA = window.Vue.renderList, MA = window.Vue.Fragment, NA = window.Vue.normalizeClass, op = window.Vue.createBlock, UA = window.Vue.toDisplayString, IA = window.Vue.createTextVNode, zA = { class: "sx-quick-tutorial" }, RA = { class: "sx-quick-tutorial__main-point py-9 px-6" }, OA = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, HA = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, jA = { class: "sx-quick-tutorial__illustration" }, qA = ["innerHTML"], GA = ["innerHTML"], XA = { class: "sx-quick-tutorial__step-indicator py-3" }, WA = ["onClick"], KA = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, YA = {
  key: "secondary-point-1",
  class: "ma-0"
}, JA = {
  key: "secondary-point-2",
  class: "ma-0"
}, QA = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, sp = window.Vue.ref, ap = window.Codex.CdxButton, ZA = window.Codex.CdxIcon, eD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = sp(2), n = sp(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = _e(), r = () => a.push({ name: "sx-sentence-selector" });
    return (l, u) => {
      const d = PA("i18n");
      return dt(), Wt("section", zA, [
        uo(Un(T), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Nn(() => [
            us("section", RA, [
              uo(Ka, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Nn(() => [
                  s(1) ? Xa((dt(), Wt("h2", OA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Xa((dt(), Wt("h2", HA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Wa("", !0)
                ]),
                _: 1
              })
            ]),
            us("section", jA, [
              uo(Ka, { name: "mw-ui-animation-slide-left" }, {
                default: Nn(() => [
                  s(1) ? (dt(), Wt("div", {
                    key: "illustration-1",
                    innerHTML: Un(BA)
                  }, null, 8, qA)) : s(2) ? (dt(), Wt("div", {
                    key: "illustration-2",
                    innerHTML: Un(TA)
                  }, null, 8, GA)) : Wa("", !0)
                ]),
                _: 1
              })
            ]),
            us("div", XA, [
              (dt(!0), Wt(MA, null, FA(t.value, (i) => (dt(), Wt("span", {
                key: `dot-${i}`,
                class: NA(["dot mx-1", { "dot-active": s(i) }]),
                role: "button",
                onClick: (c) => n.value = i
              }, null, 10, WA))), 128))
            ]),
            us("section", KA, [
              uo(Ka, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Nn(() => [
                  s(1) ? Xa((dt(), Wt("h3", YA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Xa((dt(), Wt("h3", JA, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Wa("", !0)
                ]),
                _: 1
              })
            ]),
            us("div", QA, [
              uo(Ka, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Nn(() => [
                  s(1) ? (dt(), op(Un(ap), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Nn(() => [
                      uo(Un(ZA), { icon: Un(Os) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (dt(), op(Un(ap), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: r
                  }, {
                    default: Nn(() => [
                      IA(UA(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : Wa("", !0)
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
const tD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: eD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, nD = window.Vue.resolveComponent, oD = window.Vue.createVNode, sD = window.Vue.normalizeClass, aD = window.Vue.openBlock, iD = window.Vue.createElementBlock;
function rD(e, t, n, o, s, a) {
  const r = nD("sx-quick-tutorial");
  return aD(), iD("main", {
    class: sD(["sx-quick-tutorial-view", a.classes])
  }, [
    oD(r)
  ], 2);
}
const lD = /* @__PURE__ */ X(tD, [["render", rD]]);
const ip = window.Vue.ref, cD = window.Vue.onMounted;
function uD(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = j.getPageUrl(t, o.title), o.target = "_blank";
}
const dD = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: K0 },
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
    const t = ip(null), n = ip(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return cD(() => {
      n.value = 2 * o(), uD(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, gD = window.Vue.resolveDirective, rp = window.Vue.createElementVNode, pD = window.Vue.withDirectives, mD = window.Vue.resolveComponent, hD = window.Vue.withCtx, fD = window.Vue.createVNode, wD = window.Vue.openBlock, _D = window.Vue.createElementBlock, vD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, SD = { class: "sx-editor__original-content-panel__header mb-2" }, yD = ["lang", "dir", "innerHTML"];
function CD(e, t, n, o, s, a) {
  const r = mD("mw-expandable-content"), l = gD("i18n");
  return wD(), _D("section", vD, [
    pD(rp("h5", SD, null, 512), [
      [l, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    fD(r, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: hD(() => [
        rp("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, yD)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const kD = /* @__PURE__ */ X(dD, [["render", CD]]), bD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const xD = window.Vue.unref, ds = window.Vue.createElementVNode, lp = window.Vue.resolveDirective, sl = window.Vue.withDirectives, $D = window.Vue.normalizeClass, VD = window.Vue.openBlock, ED = window.Vue.createElementBlock, AD = window.Vue.createCommentVNode, DD = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, LD = { class: "sx-editor__feedback-overlay-content px-4" }, TD = ["innerHTML"], BD = { class: "sx-editor__feedback-overlay-content__title" }, PD = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, al = window.Vue.computed, FD = window.Vuex.useStore, MD = {
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
    const t = e, { targetLanguage: n } = H(FD()), o = al(
      () => bt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = al(() => {
      const r = bt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = al(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = lp("i18n"), d = lp("i18n-html");
      return e.showFeedback ? (VD(), ED("div", DD, [
        ds("div", LD, [
          ds("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: xD(bD)
          }, null, 8, TD),
          sl(ds("h2", BD, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          sl(ds("p", PD, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          sl(ds("p", {
            class: $D(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : AD("", !0);
    };
  }
}, ND = window.Vuex.useStore, UD = () => {
  const e = ND(), t = yc(), { selectNextTranslationUnit: n } = xo(), { sourceSection: o, selectedContentTranslationUnit: s } = K(), { getCurrentTitleByLanguage: a } = Qt();
  return (r) => k(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = r, l.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), r = l.innerHTML;
    const { sourceLanguage: u, targetLanguage: d, currentMTProvider: i } = e.state.application;
    s.value instanceof Ue && (r = (yield dm(
      r,
      a(d, u),
      d
    )) || r), o.value.setTranslationForSelectedTranslationUnit(
      r,
      i
    ), t(), n();
  });
};
const Me = window.Vue.unref, il = window.Vue.openBlock, rl = window.Vue.createBlock, cp = window.Vue.createCommentVNode, up = window.Vue.createVNode, ID = window.Vue.createElementVNode, zD = window.Vue.withCtx, RD = { class: "sx-editor__editing-surface-container grow" }, ll = window.Vue.ref, OD = window.Vue.computed, HD = window.Vuex.useStore, jD = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ll(!1), o = _e(), s = HD(), a = () => n.value = !0, r = () => o.replace({ name: t.fromRoute }), { isFinalEdit: l, isInitialEdit: u, content: d, originalContent: i, title: c } = history.state, g = ll(null), p = ll(!1), { logEditorSegmentAddEvent: m } = Sh(), { targetLanguage: h, sourceLanguage: f } = H(s), { sourceSection: _ } = K(), w = OD(
      () => bt.calculateScore(
        g.value,
        d,
        h.value
      )
    ), S = UD(), y = (b) => k(this, null, function* () {
      g.value = b, p.value = !0;
      const V = new Promise((E) => setTimeout(E, 2e3));
      let M = Promise.resolve();
      l ? _.value.editedTranslation = b : (w.value === 0 && u && m(), M = S(b)), yield Promise.all([V, M]), p.value = !1, r();
    });
    return (b, V) => (il(), rl(Me(T), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: zD(() => [
        Me(i) ? (il(), rl(kD, {
          key: 0,
          language: Me(f),
          dir: Me(U.getDir)(Me(f)),
          "original-content": Me(i)
        }, null, 8, ["language", "dir", "original-content"])) : cp("", !0),
        n.value ? cp("", !0) : (il(), rl(Me(ze), { key: 1 })),
        ID("div", RD, [
          up(MD, {
            "edited-translation": g.value,
            "show-feedback": p.value,
            "proposed-translation": Me(d)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          up(h2, {
            content: Me(d),
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
const qD = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: jD
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
}, GD = window.Vue.resolveComponent, XD = window.Vue.createVNode, WD = window.Vue.normalizeClass, KD = window.Vue.openBlock, YD = window.Vue.createElementBlock;
function JD(e, t, n, o, s, a) {
  const r = GD("sx-editor");
  return KD(), YD("main", {
    class: WD(["sx-editor-view", a.classes])
  }, [
    XD(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const QD = /* @__PURE__ */ X(qD, [["render", JD]]);
const yt = window.Vue.unref, In = window.Vue.createVNode, gs = window.Vue.withCtx, ZD = window.Vue.resolveDirective, eL = window.Vue.withDirectives, tL = window.Vue.openBlock, nL = window.Vue.createBlock, dp = window.Codex.CdxButton, gp = window.Codex.CdxIcon, oL = {
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
      const a = ZD("i18n");
      return tL(), nL(yt(T), { class: "ma-0 sx-publisher__header" }, {
        default: gs(() => [
          In(yt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: gs(() => [
              In(yt(dp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: gs(() => [
                  In(yt(gp), { icon: yt(bo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          eL(In(yt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          In(yt(C), { shrink: "" }, {
            default: gs(() => [
              In(yt(dp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: gs(() => [
                  In(yt(gp), { icon: yt(lk) }, null, 8, ["icon"])
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
}, sL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, aL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, pp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const cl = window.Vue.createElementVNode, mp = window.Vue.toDisplayString, ul = window.Vue.unref, dl = window.Vue.withCtx, hp = window.Vue.createVNode, iL = window.Vue.openBlock, rL = window.Vue.createBlock, lL = window.Vue.createCommentVNode, cL = ["innerHTML"], uL = ["textContent"], dL = ["textContent"], gl = window.Vue.computed, gL = {
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
        svg: sL,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: aL,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: pp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: pp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = gl(() => o[n.status].svg), a = gl(() => o[n.status].title), r = gl(() => o[n.status].subtitle);
    return (l, u) => e.active ? (iL(), rL(ul(nt), {
      key: 0,
      "overlay-opacity": 0.85,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: dl(() => [
        hp(ul(T), { class: "ma-4" }, {
          default: dl(() => [
            hp(ul(C), null, {
              default: dl(() => [
                cl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, cL),
                cl("h2", {
                  textContent: mp(a.value)
                }, null, 8, uL),
                cl("p", {
                  class: "ma-0",
                  textContent: mp(r.value)
                }, null, 8, dL)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : lL("", !0);
  }
};
const Ne = window.Vue.unref, gt = window.Vue.createVNode, Kt = window.Vue.withCtx, pL = window.Vue.resolveDirective, mL = window.Vue.withDirectives, fp = window.Vue.toDisplayString, hL = window.Vue.createTextVNode, pl = window.Vue.openBlock, wp = window.Vue.createElementBlock, fL = window.Vue.createCommentVNode, yh = window.Vue.createElementVNode, wL = window.Vue.createBlock, _L = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, vL = ["src"], SL = ["textContent"], yL = /* @__PURE__ */ yh("p", { class: "mt-0" }, null, -1), CL = window.Vue.computed, kL = window.Vue.inject, bL = window.Vue.ref, _p = window.Codex.CdxButton, xL = window.Codex.CdxIcon, $L = {
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
    const n = t, o = bL(""), s = () => n("close"), a = () => n("publish", o.value), r = kL("breakpoints"), l = CL(() => r.value.mobile);
    return (u, d) => {
      const i = pL("i18n");
      return e.active && e.captchaDetails ? (pl(), wL(Ne(nt), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Kt(() => [
          gt(Ne(T), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Kt(() => [
              gt(Ne(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Kt(() => [
                  gt(Ne(_p), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Kt(() => [
                      gt(Ne(xL), { icon: Ne(bo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              mL(gt(Ne(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              gt(Ne(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Kt(() => [
                  gt(Ne(_p), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Kt(() => [
                      hL(fp(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
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
        default: Kt(() => [
          yh("div", _L, [
            e.captchaDetails.type === "image" ? (pl(), wp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, vL)) : (pl(), wp("p", {
              key: 1,
              textContent: fp(e.captchaDetails.question)
            }, null, 8, SL)),
            yL,
            gt(Ne(T), { class: "ma-0" }, {
              default: Kt(() => [
                gt(Ne(C), null, {
                  default: Kt(() => [
                    gt(Ne(ti), {
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
      }, 8, ["fullscreen"])) : fL("", !0);
    };
  }
};
const zn = window.Vue.unref, ps = window.Vue.createVNode, Ya = window.Vue.withCtx, Rn = window.Vue.createElementVNode, VL = window.Vue.resolveDirective, EL = window.Vue.withDirectives, AL = window.Vue.renderList, vp = window.Vue.Fragment, ml = window.Vue.openBlock, Sp = window.Vue.createElementBlock, DL = window.Vue.toDisplayString, LL = window.Vue.normalizeClass, TL = window.Vue.createBlock, BL = { class: "mw-ui-dialog__header" }, PL = { class: "row ma-0 px-4 py-3" }, FL = { class: "col shrink justify-center" }, ML = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, NL = { class: "mb-0" }, UL = { class: "pa-4" }, IL = ["textContent"], zL = window.Vuex.useStore, ms = window.Vue.computed, RL = window.Codex.CdxButton, OL = window.Codex.CdxIcon, HL = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = zL(), s = ms(() => o.state.application.publishTarget), a = ms(() => o.state.translator.isAnon), r = ue(), { sourceSection: l } = K(), u = ms(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), d = ms(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = ms(() => [
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
      const f = VL("i18n");
      return ml(), TL(zn(nt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": m.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: g
      }, {
        header: Ya(() => [
          Rn("div", BL, [
            Rn("div", PL, [
              Rn("div", FL, [
                ps(zn(RL), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: g
                }, {
                  default: Ya(() => [
                    ps(zn(OL), { icon: zn(Xm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Rn("div", ML, [
                EL(Rn("h4", NL, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ps(zn(oi))
          ])
        ]),
        default: Ya(() => [
          Rn("div", UL, [
            ps(zn(x0), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: Ya(() => [
                (ml(!0), Sp(vp, null, AL(i.value, (_, w) => (ml(), Sp(vp, {
                  key: _.label
                }, [
                  ps(zn(Vl), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Rn("p", {
                    class: LL(["complementary ms-7 mt-0", c(w)]),
                    textContent: DL(_.details)
                  }, null, 10, IL)
                ], 64))), 128))
              ]),
              _: 1
            }, 8, ["value"])
          ])
        ]),
        _: 1
      }, 8, ["value", "title", "overlay-color"]);
    };
  }
};
const pt = window.Vue.unref, On = window.Vue.createVNode, jL = window.Vue.resolveDirective, yp = window.Vue.withDirectives, Ja = window.Vue.openBlock, Cp = window.Vue.createElementBlock, qL = window.Vue.createCommentVNode, kp = window.Vue.toDisplayString, hl = window.Vue.createElementVNode, go = window.Vue.withCtx, bp = window.Vue.createBlock, GL = window.Vue.Fragment, XL = window.Vue.normalizeClass, WL = { class: "sx-publisher__review-info__content" }, KL = {
  key: 0,
  class: "complementary ma-0"
}, YL = ["textContent"], JL = ["textContent"], _n = window.Vue.computed, xp = window.Vue.ref, QL = window.Vue.watch, $p = window.Codex.CdxButton, fl = window.Codex.CdxIcon, ZL = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = xp(0), o = xp(null);
    QL(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = _n(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = _n(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = _n(() => {
      switch (a.value) {
        case "warning":
          return Gm;
        case "error":
          return ik;
        default:
          return uk;
      }
    }), l = _n(() => a.value === "default"), u = _n(
      () => l.value ? "notice" : a.value
    ), d = _n(
      () => `sx-publisher__review-info--${u.value}`
    ), i = ue(), c = _n(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = _n(
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
      const _ = jL("i18n-html");
      return Ja(), bp(pt(Yw), {
        type: u.value,
        class: XL(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: l.value
      }, {
        icon: go(() => [
          On(pt(fl), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: go(() => [
          hl("div", WL, [
            a.value === "default" ? yp((Ja(), Cp("p", KL, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (Ja(), Cp(GL, { key: 1 }, [
              hl("h5", {
                textContent: kp(g.value)
              }, null, 8, YL),
              hl("p", {
                textContent: kp(c.value)
              }, null, 8, JL),
              On(pt(T), {
                justify: "between",
                class: "ma-0"
              }, {
                default: go(() => [
                  yp(On(pt(C), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Ja(), bp(pt(C), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: go(() => [
                      On(pt($p), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: go(() => [
                          On(pt(fl), { icon: pt(cc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      On(pt($p), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: go(() => [
                          On(pt(fl), { icon: pt(Os) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : qL("", !0)
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
}, eT = (e) => {
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
}, tT = window.Vuex.useStore, nT = window.Vue.computed, oT = () => {
  const e = tT(), { currentTranslation: t } = Zt(), { currentMTProvider: n, previousRoute: o } = H(e), { currentTargetPage: s } = je(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = F(), { sourceSection: d } = K(), i = Oe(), c = nT(() => {
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
    return n.value && (h.translation_provider = Y.getProviderForInstrumentation(n.value)), h.human_modification_rate = bt.getMTScoreForPageSection(
      d.value,
      r.value
    ) / 100, h.human_modification_threshold = bt.getMtModificationThreshold(), h;
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
}, Vp = window.Vue.ref, sT = window.Vuex.useStore, aT = () => {
  const e = sT(), { pageURLParameter: t } = F(), { sourceSection: n, targetPageTitleForPublishing: o } = K(), s = _h(), a = Vp(!1), r = Vp("pending"), l = () => a.value = !1, u = yc(), {
    logPublishAttemptEvent: d,
    logPublishSuccessEvent: i,
    logPublishFailureEvent: c
  } = oT(), g = (m, h) => k(void 0, null, function* () {
    d();
    const f = yield u();
    if (f instanceof ho)
      return c(), { publishFeedbackMessage: f, targetUrl: null };
    const _ = f, {
      /** @type {PageSection} */
      sourceLanguage: w,
      targetLanguage: S
    } = e.state.application, y = o.value, b = e.getters["application/isSandboxTarget"], V = {
      html: eT(n.value.translationHtml),
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
    m && (V.captchaId = m, V.captchaWord = h);
    const M = yield tt.publishTranslation(
      V
    );
    return M.publishFeedbackMessage === null ? i(M.pageId, M.revisionId) : c(), M;
  });
  return {
    closePublishDialog: l,
    doPublish: (m = null, h = null) => k(void 0, null, function* () {
      r.value = "pending", a.value = !0;
      let f;
      try {
        f = yield g(
          h == null ? void 0 : h.id,
          m
        );
      } catch (_) {
        if (_ instanceof vo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw _;
      }
      return f;
    }),
    isPublishDialogActive: a,
    publishStatus: r
  };
}, iT = window.Vue.computed, rT = () => {
  const e = _e(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = Qt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), a = iT(
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
}, lT = window.Vuex.useStore, cT = () => {
  const e = lT(), { targetLanguage: t } = H(e), { sourceSection: n } = K();
  return () => {
    const o = bt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = bt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, r = s === "failure" ? "error" : "warning";
    let l, u;
    return r === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), u = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new ho({
      title: l,
      text: u,
      status: r,
      type: "mt"
    });
  };
}, uT = window.Vue.ref, dT = window.Vue.computed, gT = () => {
  const e = cT(), t = uT([]), n = dT(
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
}, pT = window.Vuex.useStore, mT = () => {
  const e = pT(), { currentSourcePage: t } = je(), { sourceLanguage: n, targetLanguage: o } = H(e), { sourceSection: s, targetPageTitleForPublishing: a } = K();
  return (r) => k(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], d = t.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== c.user)
      try {
        yield ri.addWikibaseLink(
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
}, Ep = window.Vue.ref, hT = () => {
  const e = Ep(!1), t = Ep(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ce = window.Vue.unref, De = window.Vue.createVNode, fT = window.Vue.resolveDirective, hs = window.Vue.createElementVNode, wT = window.Vue.withDirectives, po = window.Vue.withCtx, _T = window.Vue.openBlock, vT = window.Vue.createElementBlock, ST = { class: "sx-publisher" }, yT = { class: "sx-publisher__publish-panel pa-4" }, CT = { class: "mb-2" }, kT = ["innerHTML"], bT = { class: "sx-publisher__section-preview pa-5" }, xT = ["innerHTML"], Ap = window.Vue.computed, $T = window.Vue.onMounted, VT = window.Vue.ref, ET = window.Vue.watch, AT = window.Vuex.useStore, Dp = window.Codex.CdxButton, Lp = window.Codex.CdxIcon, DT = {
  __name: "SXPublisher",
  setup(e) {
    const t = AT(), { sourceSection: n } = K(), o = Ap(() => {
      var E;
      return (E = n.value) == null ? void 0 : E.title;
    }), s = ue(), a = Ap(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = hT(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = gT(), h = mT(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: S } = aT(), y = (E = null) => k(this, null, function* () {
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
        J && g(J);
      w.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          S();
          return;
        }
        h(B);
      }, 1e3);
    });
    $T(() => m());
    const b = rT(), V = VT(!1), M = () => V.value = !0;
    return ET(V, (E) => {
      E || (p(), m());
    }), (E, P) => {
      const J = fT("i18n");
      return _T(), vT("section", ST, [
        De(oL, {
          "is-publishing-disabled": ce(c),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        hs("div", yT, [
          wT(hs("h5", CT, null, 512), [
            [J, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          hs("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, kT),
          De(ce(T), {
            justify: "end",
            class: "ma-0"
          }, {
            default: po(() => [
              De(ce(C), { shrink: "" }, {
                default: po(() => [
                  De(ce(Dp), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: M
                  }, {
                    default: po(() => [
                      De(ce(Lp), { icon: ce(fk) }, null, 8, ["icon"])
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
        De(ZL, { "publish-feedback-messages": ce(i) }, null, 8, ["publish-feedback-messages"]),
        hs("section", bT, [
          De(ce(T), { class: "pb-5 ma-0" }, {
            default: po(() => [
              De(ce(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              De(ce(C), { shrink: "" }, {
                default: po(() => [
                  De(ce(Dp), {
                    weight: "quiet",
                    "aria-label": E.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ce(b)
                  }, {
                    default: po(() => [
                      De(ce(Lp), { icon: ce(ic) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          hs("div", {
            innerHTML: ce(n).translationHtml
          }, null, 8, xT)
        ]),
        De(HL, {
          active: V.value,
          "onUpdate:active": P[0] || (P[0] = (B) => V.value = B)
        }, null, 8, ["active"]),
        De($L, {
          active: ce(l),
          "captcha-details": ce(r),
          onClose: ce(d),
          onPublish: P[1] || (P[1] = (B) => y(B))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        De(gL, {
          active: ce(_),
          status: ce(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const LT = {
  name: "SxPublisherView",
  components: {
    SxPublisher: DT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, TT = window.Vue.resolveComponent, BT = window.Vue.createVNode, PT = window.Vue.normalizeClass, FT = window.Vue.openBlock, MT = window.Vue.createElementBlock;
function NT(e, t, n, o, s, a) {
  const r = TT("sx-publisher");
  return FT(), MT("main", {
    class: PT(["sx-publisher-view", a.classes])
  }, [
    BT(r)
  ], 2);
}
const UT = /* @__PURE__ */ X(LT, [["render", NT]]);
const IT = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: jl, MwIcon: we, MwRow: T, MwCol: C },
  props: {
    suggestion: {
      type: Co,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: rw, mwIconLanguage: dw, mwIconArticle: Hl, getDir: U.getDir };
  }
}, Qa = window.Vue.resolveComponent, vn = window.Vue.createVNode, Hn = window.Vue.withCtx, wl = window.Vue.toDisplayString, _l = window.Vue.createElementVNode, zT = window.Vue.openBlock, RT = window.Vue.createBlock, OT = ["textContent"], HT = ["textContent"], jT = ["textContent"];
function qT(e, t, n, o, s, a) {
  const r = Qa("mw-thumbnail"), l = Qa("mw-col"), u = Qa("mw-icon"), d = Qa("mw-row");
  return zT(), RT(d, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: Hn(() => [
      vn(l, { shrink: "" }, {
        default: Hn(() => [
          vn(r, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      vn(l, { class: "ms-4" }, {
        default: Hn(() => [
          vn(d, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Hn(() => [
              vn(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: Hn(() => [
                  _l("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: wl(n.suggestion.title)
                  }, null, 8, OT)
                ]),
                _: 1
              }),
              vn(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: Hn(() => [
                  _l("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: wl(n.suggestion.description)
                  }, null, 8, HT)
                ]),
                _: 1
              }),
              vn(l, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: Hn(() => [
                  vn(u, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  _l("small", {
                    textContent: wl(n.suggestion.langLinksCount)
                  }, null, 8, jT)
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
  }, 8, ["lang", "dir"]);
}
const Ch = /* @__PURE__ */ X(IT, [["render", qT]]), GT = window.Vue.computed, Tp = window.Vue.ref, XT = window.Vue.watch, WT = (e, t) => {
  const o = Tp([]), s = Tp(!1), a = GT(
    () => o.value.slice(0, 4)
  ), r = dc(() => k(void 0, null, function* () {
    try {
      o.value = yield ko.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return XT(t, () => {
    s.value = !0, o.value = [], r();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const mo = window.Vue.unref, fs = window.Vue.openBlock, vl = window.Vue.createBlock, KT = window.Vue.createCommentVNode, YT = window.Vue.resolveDirective, JT = window.Vue.withDirectives, Bp = window.Vue.createElementBlock, QT = window.Vue.renderList, ZT = window.Vue.Fragment, e6 = window.Vue.withCtx, t6 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, n6 = window.Vue.computed, o6 = window.Vuex.useStore, s6 = {
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
      o6()
    ), s = n6(() => t.searchInput), { searchResultsLoading: a, searchResultsSlice: r } = WT(
      n,
      s
    );
    return (l, u) => {
      const d = YT("i18n");
      return fs(), vl(mo(Ie), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: e6(() => [
          mo(a) ? (fs(), vl(mo(ze), { key: 0 })) : mo(r).length === 0 ? JT((fs(), Bp("p", t6, null, 512)), [
            [d, [
              s.value,
              mo(o)
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : KT("", !0),
          (fs(!0), Bp(ZT, null, QT(mo(r), (i) => (fs(), vl(Ch, {
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
const a6 = window.Vue.toDisplayString, i6 = window.Vue.createElementVNode, r6 = window.Vue.renderList, l6 = window.Vue.Fragment, Sl = window.Vue.openBlock, c6 = window.Vue.createElementBlock, Pp = window.Vue.createBlock, u6 = window.Vue.unref, Fp = window.Vue.withCtx, d6 = ["textContent"], Mp = {
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
    return (t, n) => (Sl(), Pp(u6(Ie), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: Fp(() => [
        i6("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: a6(e.cardTitle)
        }, null, 8, d6)
      ]),
      default: Fp(() => [
        (Sl(!0), c6(l6, null, r6(e.suggestions, (o) => (Sl(), Pp(Ch, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, g6 = window.Vue.computed, p6 = (e, t) => g6(() => {
  const o = {
    value: "other",
    props: {
      icon: fw,
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
}), m6 = window.Vue.computed, h6 = (e, t, n) => m6(() => {
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
const f6 = window.Vue.resolveDirective, w6 = window.Vue.createElementVNode, yl = window.Vue.withDirectives, Ve = window.Vue.unref, ws = window.Vue.withCtx, Ct = window.Vue.createVNode, _s = window.Vue.openBlock, Np = window.Vue.createBlock, _6 = window.Vue.createCommentVNode, Cl = window.Vue.createElementBlock, v6 = window.Vue.Fragment, S6 = window.Vue.vShow, y6 = { class: "sx-article-search" }, C6 = { class: "mb-0" }, k6 = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, vs = window.Vue.ref, b6 = window.Vue.onMounted, kl = window.Vue.computed, Up = window.Vue.watch, x6 = window.Vue.inject, $6 = window.Vuex.useStore, V6 = window.Codex.CdxButton, E6 = window.Codex.CdxIcon, A6 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = vs(""), n = vs(!1), o = vs(null), s = vs(!1), a = vs([]), r = $6(), { sourceLanguage: l, targetLanguage: u } = H(r), { supportedLanguageCodes: d } = Us(), i = h6(
      l,
      u,
      a
    ), c = p6(
      l,
      i
    ), g = _e(), { fetchAllTranslations: p } = di();
    b6(() => k(this, null, function* () {
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
      g.push({ name: "dashboard" });
    }, h = jm(), f = (B) => h(B, u.value), _ = (B) => {
      if (B === "other") {
        s.value = !0;
        return;
      }
      f(B);
    };
    Up(l, () => r.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const w = Oe();
    Up(t, () => {
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
    ), V = kl(() => r.getters["mediawiki/getNearbyPages"]), M = x6("breakpoints"), E = kl(() => M.value.tabletAndDown), P = Hs(), J = (B, I) => P(
      B.title,
      l.value,
      u.value,
      I
    );
    return (B, I) => {
      const Q = f6("i18n");
      return _s(), Cl("section", y6, [
        Ct(Ve(T), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ws(() => [
            Ct(Ve(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ws(() => [
                yl(w6("h5", C6, null, 512), [
                  [Q, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Ct(Ve(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ws(() => [
                Ct(Ve(V6), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": B.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: m
                }, {
                  default: ws(() => [
                    Ct(Ve(E6), { icon: Ve(bo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ct(Ve(ti), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": I[0] || (I[0] = (W) => t.value = W),
          "icon-size": 20,
          icon: Ve($l),
          placeholder: B.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        Ct(Ve(As), {
          class: "sx-article-search__language-button-group",
          items: Ve(c),
          active: Ve(l),
          onSelect: _
        }, null, 8, ["items", "active"]),
        t.value ? _6("", !0) : (_s(), Cl(v6, { key: 0 }, [
          b.value && b.value.length ? (_s(), Np(Mp, {
            key: 0,
            "card-title": B.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: b.value,
            onSuggestionClicked: I[1] || (I[1] = (W) => J(W, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : V.value && V.value.length ? (_s(), Np(Mp, {
            key: 1,
            "card-title": B.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: V.value,
            onSuggestionClicked: I[2] || (I[2] = (W) => J(W, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : yl((_s(), Cl("p", k6, null, 512)), [
            [Q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        yl(Ct(s6, {
          "search-input": t.value,
          onSuggestionClicked: I[3] || (I[3] = (W) => J(W, "search_result"))
        }, null, 8, ["search-input"]), [
          [S6, !!t.value]
        ]),
        Ct(Ve(nt), {
          value: s.value,
          "onUpdate:value": I[4] || (I[4] = (W) => s.value = W),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: E.value,
          header: E.value,
          "overlay-opacity": 0,
          title: B.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: ws(() => [
            Ct(Ve(sh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: Ve(d),
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
const D6 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: A6
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, L6 = window.Vue.resolveComponent, T6 = window.Vue.createVNode, B6 = window.Vue.normalizeClass, P6 = window.Vue.openBlock, F6 = window.Vue.createElementBlock;
function M6(e, t, n, o, s, a) {
  const r = L6("sx-article-search");
  return P6(), F6("main", {
    class: B6(["sx-article-search-view", a.classes])
  }, [
    T6(r)
  ], 2);
}
const N6 = /* @__PURE__ */ X(D6, [["render", M6]]), U6 = window.Vuex.useStore, kh = [
  {
    path: "",
    name: "dashboard",
    component: zd,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: N6,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: U$,
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
    component: _V,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: lD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: LA,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: QD,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: UT,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: zd,
    meta: { workflowStep: 0 }
  }
], Cc = ly({
  history: rS(),
  routes: kh
});
Cc.beforeEach((e, t, n) => {
  const o = U6();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || jp.assertUser().catch((l) => {
    l instanceof vo && o.commit("application/setIsLoginDialogOn", !0);
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
      (d) => d.meta.workflowStep === l
    );
    n({ name: u.name });
    return;
  }
  n();
});
Cc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const I6 = window.Vue.createApp, z6 = mw.config.get("wgUserLanguage"), R6 = "en", O6 = mw.messages.values || {}, $o = I6(o_);
$o.use(Cc);
$o.use(Av);
$o.use(i1);
$o.use(a1);
const H6 = U1({
  locale: z6,
  finalFallback: R6,
  messages: O6,
  wikilinks: !0
});
$o.use(H6);
$o.mount("#contenttranslation");
