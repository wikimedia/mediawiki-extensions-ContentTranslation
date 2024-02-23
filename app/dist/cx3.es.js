/*@nomin*/
var Km = Object.defineProperty, Ym = Object.defineProperties;
var Qm = Object.getOwnPropertyDescriptors;
var Tc = Object.getOwnPropertySymbols;
var Jm = Object.prototype.hasOwnProperty, Zm = Object.prototype.propertyIsEnumerable;
var Lc = (e, t, n) => t in e ? Km(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t) => {
  for (var n in t || (t = {}))
    Jm.call(t, n) && Lc(e, n, t[n]);
  if (Tc)
    for (var n of Tc(t))
      Zm.call(t, n) && Lc(e, n, t[n]);
  return e;
}, ke = (e, t) => Ym(e, Qm(t));
var k = (e, t, n) => new Promise((o, s) => {
  var a = (l) => {
    try {
      c(n.next(l));
    } catch (d) {
      s(d);
    }
  }, i = (l) => {
    try {
      c(n.throw(l));
    } catch (d) {
      s(d);
    }
  }, c = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  c((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const { CdxButton: e, CdxIcon: t } = require("../codex.js");
  window.Codex = { CdxButton: e, CdxIcon: t };
}
const D = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, ep = {
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
}, tp = window.Vue.toDisplayString, Pa = window.Vue.openBlock, Fa = window.Vue.createElementBlock, np = window.Vue.createCommentVNode, Bc = window.Vue.createElementVNode, op = window.Vue.normalizeClass, sp = ["width", "height", "aria-labelledby"], ap = ["id"], ip = ["fill"], rp = ["d"];
function cp(e, t, n, o, s, a) {
  return Pa(), Fa("span", {
    class: op(["mw-ui-icon notranslate", a.classes])
  }, [
    (Pa(), Fa("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Pa(), Fa("title", {
        key: 0,
        id: n.iconName
      }, tp(n.iconName), 9, ap)) : np("", !0),
      Bc("g", { fill: n.iconColor }, [
        Bc("path", { d: a.iconImagePath }, null, 8, rp)
      ], 8, ip)
    ], 8, sp))
  ], 2);
}
const ie = /* @__PURE__ */ D(ep, [["render", cp]]);
const lp = {
  name: "MwButton",
  components: {
    MwIcon: ie
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
}, up = window.Vue.renderSlot, dp = window.Vue.resolveComponent, Pc = window.Vue.normalizeClass, ls = window.Vue.openBlock, Ma = window.Vue.createBlock, Na = window.Vue.createCommentVNode, gp = window.Vue.toDisplayString, mp = window.Vue.createElementBlock, pp = window.Vue.toHandlerKey, hp = window.Vue.withModifiers, wp = window.Vue.mergeProps, fp = window.Vue.createElementVNode, _p = window.Vue.resolveDynamicComponent, vp = window.Vue.withCtx, Sp = { class: "mw-ui-button__content" }, yp = ["textContent"];
function Cp(e, t, n, o, s, a) {
  const i = dp("mw-icon");
  return ls(), Ma(_p(a.component), {
    class: Pc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: vp(() => [
      up(e.$slots, "default", {}, () => [
        fp("span", Sp, [
          n.icon ? (ls(), Ma(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Pc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Na("", !0),
          !a.isIcon && n.label ? (ls(), mp("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: gp(n.label)
          }, null, 8, yp)) : Na("", !0),
          n.indicator ? (ls(), Ma(i, wp({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [pp(a.indicatorClickEvent)]: t[0] || (t[0] = hp((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Na("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const re = /* @__PURE__ */ D(lp, [["render", Cp]]);
const kp = {
  name: "MwButtonGroup",
  components: {
    MwButton: re
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
}, xp = window.Vue.renderList, bp = window.Vue.Fragment, Ia = window.Vue.openBlock, Fc = window.Vue.createElementBlock, $p = window.Vue.resolveComponent, Vp = window.Vue.withModifiers, Ap = window.Vue.mergeProps, Dp = window.Vue.createBlock, Ep = { class: "row mw-ui-button-group ma-0 pa-0" };
function Tp(e, t, n, o, s, a) {
  const i = $p("mw-button");
  return Ia(), Fc("div", Ep, [
    (Ia(!0), Fc(bp, null, xp(n.items, (c) => (Ia(), Dp(i, Ap({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: Vp((l) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Go = /* @__PURE__ */ D(kp, [["render", Tp]]);
const Lp = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: Go },
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
  emits: ["update:active"]
}, Bp = window.Vue.renderSlot, Pp = window.Vue.resolveComponent, Fp = window.Vue.createVNode, Mp = window.Vue.createElementVNode, Np = window.Vue.openBlock, Ip = window.Vue.createElementBlock, zp = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, Up = { class: "col-12 ma-0 pa-0" };
function Rp(e, t, n, o, s, a) {
  const i = Pp("mw-button-group");
  return Np(), Ip("footer", zp, [
    Mp("div", Up, [
      Bp(e.$slots, "default", {}, () => [
        Fp(i, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (c) => e.$emit("update:active", c))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
const Op = /* @__PURE__ */ D(Lp, [["render", Rp]]);
const Hp = {
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
}, Mc = window.Vue.renderSlot, jp = window.Vue.toDisplayString, Nc = window.Vue.openBlock, Ic = window.Vue.createElementBlock, qp = window.Vue.createCommentVNode, Gp = window.Vue.createElementVNode, Wp = { class: "mw-ui-card" }, Xp = ["textContent"], Kp = { class: "mw-ui-card__content" };
function Yp(e, t, n, o, s, a) {
  return Nc(), Ic("div", Wp, [
    Mc(e.$slots, "header", {}, () => [
      n.title ? (Nc(), Ic("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: jp(n.title)
      }, null, 8, Xp)) : qp("", !0)
    ]),
    Gp("div", Kp, [
      Mc(e.$slots, "default")
    ])
  ]);
}
const ze = /* @__PURE__ */ D(Hp, [["render", Yp]]);
const Qp = {}, Jp = window.Vue.openBlock, Zp = window.Vue.createElementBlock, eh = { class: "mw-ui-divider row" };
function th(e, t) {
  return Jp(), Zp("div", eh);
}
const Wo = /* @__PURE__ */ D(Qp, [["render", th]]);
const nh = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, oh = window.Vue.renderSlot, sh = window.Vue.resolveDynamicComponent, ah = window.Vue.withCtx, ih = window.Vue.openBlock, rh = window.Vue.createBlock;
function ch(e, t, n, o, s, a) {
  return ih(), rh(sh(n.tag), { class: "mw-grid container" }, {
    default: ah(() => [
      oh(e.$slots, "default")
    ]),
    _: 3
  });
}
const lh = /* @__PURE__ */ D(nh, [["render", ch]]), uh = {
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
}, dh = window.Vue.renderSlot, gh = window.Vue.resolveDynamicComponent, mh = window.Vue.normalizeClass, ph = window.Vue.withCtx, hh = window.Vue.openBlock, wh = window.Vue.createBlock;
function fh(e, t, n, o, s, a) {
  return hh(), wh(gh(n.tag), {
    class: mh(a.classes)
  }, {
    default: ph(() => [
      dh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const T = /* @__PURE__ */ D(uh, [["render", fh]]), Mr = ["mobile", "tablet", "desktop", "desktop-wide"], _h = Mr.reduce(
  (e, t) => ke(de({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), vh = {
  name: "MwCol",
  props: ke(de({}, _h), {
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
      for (let n = 0; n < Mr.length; n++) {
        let o = Mr[n], s = this.$props[o];
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
}, Sh = window.Vue.renderSlot, yh = window.Vue.resolveDynamicComponent, Ch = window.Vue.normalizeClass, kh = window.Vue.withCtx, xh = window.Vue.openBlock, bh = window.Vue.createBlock;
function $h(e, t, n, o, s, a) {
  return xh(), bh(yh(n.tag), {
    class: Ch(a.classes)
  }, {
    default: kh(() => [
      Sh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const y = /* @__PURE__ */ D(vh, [["render", $h]]), hg = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Vh = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Ah = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", ka = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Dh = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Eh = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Th = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", wg = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Nr = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Kr = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Kt = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Lh = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Bh = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Yr = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", fg = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", _g = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", vg = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", Sg = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Qr = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", yg = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Ph = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Fh = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Mh = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Nh = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Ih = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Un = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, zh = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Jr = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Uh = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Zr = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", Rh = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", Oh = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Hh = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const za = window.Vue.computed, jh = window.Vue.watch, qh = window.Vue.ref, Gh = window.Vue.nextTick, Wh = {
  name: "MwDialog",
  components: {
    MwButton: re,
    MwRow: T,
    MwCol: y,
    MwDivider: Wo
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
    const n = qh(null), o = za(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = za(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    jh(
      () => e.value,
      (l) => {
        l ? (i(), Gh(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = za(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayStyles: s,
      mwIconClose: Kt,
      root: n
    };
  }
}, zc = window.Vue.normalizeStyle, Ua = window.Vue.createElementVNode, Ra = window.Vue.renderSlot, us = window.Vue.resolveComponent, Wn = window.Vue.createVNode, Oa = window.Vue.withCtx, Uc = window.Vue.createCommentVNode, Xh = window.Vue.withKeys, Kh = window.Vue.normalizeClass, Rc = window.Vue.openBlock, Yh = window.Vue.createElementBlock, Qh = window.Vue.Transition, Jh = window.Vue.createBlock, Zh = { class: "mw-ui-dialog__shell items-stretch" }, ew = { class: "mw-ui-dialog__body" };
function tw(e, t, n, o, s, a) {
  const i = us("mw-col"), c = us("mw-button"), l = us("mw-row"), d = us("mw-divider");
  return Rc(), Jh(Qh, {
    name: `mw-ui-animation-${n.animation}`,
    style: zc(o.cssVars)
  }, {
    default: Oa(() => [
      n.value ? (Rc(), Yh("div", {
        key: 0,
        ref: "root",
        class: Kh(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Xh((r) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        Ua("div", {
          class: "mw-ui-dialog__overlay",
          style: zc(o.overlayStyles),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close)
        }, null, 4),
        Ua("div", Zh, [
          n.header ? Ra(e.$slots, "header", { key: 0 }, () => [
            Wn(l, { class: "mw-ui-dialog__header" }, {
              default: Oa(() => [
                Wn(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Wn(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Oa(() => [
                    Wn(c, {
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
            Wn(d)
          ]) : Uc("", !0),
          Ua("div", ew, [
            Ra(e.$slots, "default")
          ]),
          Ra(e.$slots, "footer")
        ])
      ], 34)) : Uc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const Qe = /* @__PURE__ */ D(Wh, [["render", tw]]);
const nw = {
  name: "MwInput",
  components: {
    MwIcon: ie
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
  emits: ["click", "focus", "blur", "indicator-clicked"],
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
}, Oc = window.Vue.renderSlot, ow = window.Vue.resolveComponent, ds = window.Vue.openBlock, Ha = window.Vue.createBlock, Hc = window.Vue.createCommentVNode, sw = window.Vue.resolveDynamicComponent, aw = window.Vue.toDisplayString, iw = window.Vue.mergeProps, rw = window.Vue.withModifiers, cw = window.Vue.createElementVNode, lw = window.Vue.normalizeClass, uw = window.Vue.createElementBlock, dw = { class: "mw-ui-input__content" };
function gw(e, t, n, o, s, a) {
  const i = ow("mw-icon");
  return ds(), uw("div", {
    class: lw(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    cw("div", dw, [
      Oc(e.$slots, "icon", {}, () => [
        n.icon ? (ds(), Ha(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Hc("", !0)
      ]),
      (ds(), Ha(sw(n.type === "textarea" ? n.type : "input"), iw({
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
        textContent: aw(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Oc(e.$slots, "indicator", {}, () => [
        n.indicator ? (ds(), Ha(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = rw((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Hc("", !0)
      ])
    ])
  ], 2);
}
const ec = /* @__PURE__ */ D(nw, [["render", gw]]);
const pw = {
  name: "MwMessage",
  components: { MwCol: y, MwRow: T, MwIcon: ie, MwButton: re },
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
    mwIconClose: Kt,
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
      notice: Ih,
      warning: Jr,
      success: Un,
      error: zh
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
}, ja = window.Vue.renderSlot, gs = window.Vue.resolveComponent, jc = window.Vue.createVNode, qc = window.Vue.withCtx, Gc = window.Vue.openBlock, Wc = window.Vue.createBlock, Xc = window.Vue.createCommentVNode, hw = window.Vue.normalizeClass;
function ww(e, t, n, o, s, a) {
  const i = gs("mw-icon"), c = gs("mw-col"), l = gs("mw-button"), d = gs("mw-row");
  return e.shown ? (Gc(), Wc(d, {
    key: 0,
    class: hw([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: qc(() => [
      ja(e.$slots, "icon", {}, () => [
        jc(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      jc(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: qc(() => [
          ja(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      ja(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Gc(), Wc(l, {
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
const fw = /* @__PURE__ */ D(pw, [["render", ww]]);
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
const _w = {}, vw = window.Vue.createElementVNode, Sw = window.Vue.openBlock, yw = window.Vue.createElementBlock, Cw = { class: "mw-ui-spinner" }, kw = /* @__PURE__ */ vw("div", { class: "mw-ui-spinner__bounce" }, null, -1), xw = [
  kw
];
function bw(e, t) {
  return Sw(), yw("div", Cw, xw);
}
const Xe = /* @__PURE__ */ D(_w, [["render", bw]]), Ie = {
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
const $w = window.Vue.computed, Vw = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: ie },
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
      default: Zr
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: Ie.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: Ie.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = $w(() => {
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
}, Kc = window.Vue.normalizeStyle, Yc = window.Vue.openBlock, Aw = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Dw = window.Vue.resolveComponent, Ew = window.Vue.createBlock;
function Tw(e, t, n, o, s, a) {
  const i = Dw("mw-ui-icon");
  return n.thumbnail ? (Yc(), Aw("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Kc(o.style)
  }, null, 4)) : (Yc(), Ew(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Kc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const tc = /* @__PURE__ */ D(Vw, [["render", Tw]]);
const Lw = {
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
}, Bw = window.Vue.vModelRadio, Sa = window.Vue.createElementVNode, Pw = window.Vue.withDirectives, Fw = window.Vue.toDisplayString, Mw = window.Vue.resolveComponent, Nw = window.Vue.normalizeClass, Iw = window.Vue.withCtx, zw = window.Vue.openBlock, Uw = window.Vue.createBlock, Rw = { class: "mw-ui-radio__controls" }, Ow = ["id", "disabled", "name", "value"], Hw = /* @__PURE__ */ Sa("span", { class: "mw-ui-radio__controls__icon" }, null, -1), jw = ["for", "textContent"];
function qw(e, t, n, o, s, a) {
  const i = Mw("mw-row");
  return zw(), Uw(i, {
    class: Nw(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: Iw(() => [
      Sa("div", Rw, [
        Pw(Sa("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, Ow), [
          [Bw, a.inputModel]
        ]),
        Hw
      ]),
      Sa("label", {
        for: n.id,
        class: "ps-2",
        textContent: Fw(n.label)
      }, null, 8, jw)
    ]),
    _: 1
  }, 8, ["class"]);
}
const ya = /* @__PURE__ */ D(Lw, [["render", qw]]), Qc = window.Vue.h, Cg = {
  name: "MwRadioGroup",
  components: { MwRadio: ya },
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
      (o) => Qc(ya, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Qc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const Gw = {
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
}, Jc = window.Vue.normalizeClass, Zc = window.Vue.normalizeStyle, Ww = window.Vue.createElementVNode, Xw = window.Vue.openBlock, Kw = window.Vue.createElementBlock, Yw = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function Qw(e, t, n, o, s, a) {
  return Xw(), Kw("div", {
    class: Jc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Zc(a.containerStyles)
  }, [
    Ww("div", {
      class: Jc(["mw-progress-bar__bar", a.barClass]),
      style: Zc(a.barStyles)
    }, null, 6)
  ], 14, Yw);
}
const kg = /* @__PURE__ */ D(Gw, [["render", Qw]]), Jw = (e, t, n, o) => (s) => {
  const a = s.clientY, i = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), c = (d) => {
    o.value = !1;
    let r = Math.min(
      i + d.clientY - a,
      e.value
    );
    r = Math.max(r, t.value), n.value.style.height = r + "px";
  }, l = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      c,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      l,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", c, !1), document.documentElement.addEventListener("pointerup", l, !1);
}, Zw = (e, t, n, o) => ({ initiateDrag: Jw(
  e,
  t,
  n,
  o
) }), e0 = window.Vue.ref, el = window.Vue.computed, t0 = (e, t, n, o) => {
  const s = e0(0), a = el(
    () => t.value > e.value
  ), i = el(
    () => t.value <= e.value * (s.value + 1)
  ), c = (d) => {
    s.value = d, n.value.scroll(0, e.value * s.value);
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
const ms = window.Vue.ref, n0 = window.Vue.onMounted, tl = window.Vue.computed, o0 = window.Vue.nextTick, s0 = {
  name: "MwExpandableContent",
  components: {
    MwButton: re
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
    const t = ms(!0), n = ms(null), o = tl(
      () => Math.min(e.minHeight, s.value)
    ), s = ms(1), { initiateDrag: a } = Zw(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: c,
      scrollIndex: l,
      scrollToStepByIndex: d,
      handleArrowUpClick: r
    } = t0(o, s, n, t), u = () => d(l.value + 1), g = ms(null), m = tl(() => ({
      "--collapsed-height": o.value + "px"
    })), p = () => {
      if (!n.value)
        return;
      const w = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, w) {
        let f = Math.min(w, s.value);
        f = Math.max(f, o.value), f === o.value && (t.value = !0), n.value.style.height = f + "px";
      }
    };
    return n0(() => k(this, null, function* () {
      var w;
      yield o0(), s.value = n.value.scrollHeight, (w = g.value) == null || w.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", p);
    })), {
      contentRef: n,
      cssVars: m,
      dragIndicatorRef: g,
      handleArrowUpClick: r,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: Uh,
      mwIconExpand: Nr,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, a0 = window.Vue.renderSlot, i0 = window.Vue.normalizeClass, ps = window.Vue.createElementVNode, r0 = window.Vue.resolveComponent, c0 = window.Vue.createVNode, qa = window.Vue.openBlock, l0 = window.Vue.createBlock, nl = window.Vue.createCommentVNode, ol = window.Vue.createElementBlock, u0 = window.Vue.normalizeStyle, d0 = { class: "mw-ui-expandable-content__container" }, g0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, m0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function p0(e, t, n, o, s, a) {
  const i = r0("mw-button");
  return qa(), ol("div", {
    class: "mw-ui-expandable-content",
    style: u0(o.cssVars)
  }, [
    ps("div", d0, [
      ps("div", {
        ref: "contentRef",
        class: i0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        a0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (qa(), ol("div", g0, [
        c0(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (qa(), l0(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : nl("", !0)
      ])) : nl("", !0)
    ]),
    ps("div", m0, [
      ps("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const h0 = /* @__PURE__ */ D(s0, [["render", p0]]);
const hs = window.Vue.computed, w0 = {
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
      default: Ie.blue600
    },
    inactiveColor: {
      type: String,
      default: Ie.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = hs(() => e.size / 2 * 0.9), n = hs(() => Math.PI * (t.value * 2)), o = hs(
      () => (100 - e.percentage) / 100 * n.value
    ), s = hs(() => ({
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
}, sl = window.Vue.createElementVNode, al = window.Vue.normalizeStyle, f0 = window.Vue.openBlock, _0 = window.Vue.createElementBlock, v0 = ["width", "height", "viewport"], S0 = ["r", "cx", "cy", "stroke-dasharray"], y0 = ["r", "cx", "cy", "stroke-dasharray"];
function C0(e, t, n, o, s, a) {
  return f0(), _0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: al(o.cssVars)
  }, [
    sl("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, S0),
    sl("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: al({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, y0)
  ], 12, v0);
}
const xg = /* @__PURE__ */ D(w0, [["render", C0]]), k0 = window.Vue.ref, bt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, $t = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${bt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${bt.tablet}px) and (max-width: ${bt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${bt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${bt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${bt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${bt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${bt["desktop-wide"]}px)`
}, Ga = {
  mobile: () => matchMedia($t.mobile).matches,
  tablet: () => matchMedia($t.tablet).matches,
  desktop: () => matchMedia($t.desktop).matches,
  desktopwide: () => matchMedia($t["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia($t["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia($t["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia($t["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia($t["desktop-and-down"]).matches
}, x0 = {
  install: (e) => {
    const t = () => {
      for (let o in Ga)
        Ga.hasOwnProperty(o) && (n.value[o] = Ga[o]());
    }, n = k0({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = ke(de({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, b0 = {
  install: (e) => {
    e.config.globalProperties.$mwui = ke(de({}, e.config.globalProperties.$mwui || {}), {
      colors: Ie
    }), e.provide("colors", Ie);
  }
};
class jn extends Error {
}
const $0 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new jn();
}), bg = { assertUser: $0 };
const V0 = window.Vue.resolveDirective, Xn = window.Vue.createElementVNode, il = window.Vue.withDirectives, A0 = window.Vue.toDisplayString, D0 = window.Vue.unref, rl = window.Vue.withCtx, E0 = window.Vue.openBlock, T0 = window.Vue.createBlock, L0 = window.Vue.createCommentVNode, B0 = { class: "pa-4 sx-login-dialog__header" }, P0 = { class: "sx-login-dialog__body px-6 pb-4" }, F0 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, M0 = ["href"], N0 = window.Vue.computed, I0 = window.Vue.ref, z0 = window.Vuex.useStore, U0 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = z0(), n = N0(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = I0(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = V0("i18n");
      return n.value ? (E0(), T0(D0(Qe), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: rl(() => [
          Xn("div", B0, [
            il(Xn("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: rl(() => [
          il(Xn("div", P0, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          Xn("div", F0, [
            Xn("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, A0(a.$i18n("cx-sx-login-dialog-button-label")), 9, M0)
          ])
        ]),
        _: 1
      })) : L0("", !0);
    };
  }
};
const R0 = window.Vue.resolveDynamicComponent, cl = window.Vue.openBlock, ll = window.Vue.createBlock, O0 = window.Vue.Transition, Kn = window.Vue.withCtx, Yn = window.Vue.createVNode, H0 = window.Vue.resolveComponent, Wa = window.Vue.unref, j0 = window.Vuex.useStore, q0 = window.Vue.computed, G0 = window.Vue.onMounted, W0 = {
  __name: "App",
  setup(e) {
    const t = j0(), n = q0(
      () => t.state.application.autoSavePending
    );
    return G0(() => {
      window.addEventListener("beforeunload", (o) => {
        n.value && (o.preventDefault(), o.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (o) => {
        document.visibilityState === "visible" && bg.assertUser().then(() => t.commit("application/setIsLoginDialogOn", !1)).catch((s) => {
          s instanceof jn && t.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (o, s) => {
      const a = H0("router-view");
      return cl(), ll(Wa(lh), { id: "contenttranslation" }, {
        default: Kn(() => [
          Yn(Wa(T), { class: "cx-container" }, {
            default: Kn(() => [
              Yn(Wa(y), { cols: "12" }, {
                default: Kn(() => [
                  Yn(a, null, {
                    default: Kn(({ Component: i, route: c }) => [
                      Yn(O0, {
                        name: c.meta.transitionName
                      }, {
                        default: Kn(() => [
                          (cl(), ll(R0(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Yn(U0)
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
}, X0 = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, K0 = {
  /**
   * @param {Object} state
   * @return {function(string, string): Translation[]}
   */
  getPublishedTranslationsForLanguagePair: (e) => (t, n) => e.translations.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n && o.status === "published"
  ),
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
  getAllTranslationsForLanguagePair: (e) => (t, n) => e.translations.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ),
  getDraftTranslation: (e) => (t, n, o, s) => e.translations.filter((a) => a.status === "draft").find(
    /** @param {DraftTranslation} translation */
    (a) => a.sourceTitle === t && a.sourceSectionTitle === n && a.sourceLanguage === o && a.targetLanguage === s
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
}, Y0 = [
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
], Q0 = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = ul(e, n), a = c = ul(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, ul = function(e, t) {
  return e ? Y0.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, J0 = 95, Z0 = 85, ef = [
  { status: "failure", value: 100 - J0 },
  { status: "warning", value: 100 - Z0 },
  { status: "success", value: 100 }
], $g = (e, t, n) => {
  const o = dl(e).textContent, s = dl(t).textContent, a = 100 - 100 * Q0(s, o, n);
  return Math.ceil(a);
}, tf = (e) => ef.find((t) => e <= t.value).status, nf = (e, t) => $g(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), dl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Wt = { calculateScore: $g, getScoreStatus: tf, getMTScoreForPageSection: nf }, Xa = "original", Ka = "empty", of = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class W {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      Xa,
      Ka
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return of[t] || t;
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
    return Xa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ka;
  }
  static isUserMTProvider(t) {
    return [Xa, Ka].includes(
      t
    );
  }
}
const q = new mw.cx.SiteMapper(), sf = mw.util.getUrl, af = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Vg {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Rn {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Vg(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const gl = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => ke(de({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class rf {
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
    const t = gl((s = this.user) == null ? void 0 : s.content), n = gl((a = this.mt) == null ? void 0 : a.content);
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
class Xo {
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
    status: l,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = c, this.status = l, this.targetTitle = d;
  }
}
class qt {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = ke(de({}, a), {
      [W.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [W.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [W.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [W.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[W.ORIGINAL_TEXT_PROVIDER_KEY];
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
const ml = (e) => {
  var n;
  const t = Ca(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Ca = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, wn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Ag = (e) => {
  const t = Ca(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = cf(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, cf = (e) => {
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
}, Dg = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Eg = (e) => {
  const t = Dg(e);
  return t == null ? void 0 : t.targetExists;
};
class Ya {
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
let Ae = class {
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
      (a) => wn(a)
    );
    s && Eg(s) && (this.blockTemplateAdaptationInfo[t] = Dg(s));
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
      (t) => wn(t)
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
    const t = Ca(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ml(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => wn(o));
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
    return n && ml(n) || "";
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
    const o = Ca(n);
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
      (a) => wn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Ya({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Ya({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Ya({
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
    if (!t || W.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => wn(s)
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
};
const Qa = "__LEAD_SECTION__";
class nc {
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
      [W.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [W.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [W.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [W.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Qa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[W.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[W.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof Ae ? n.transclusionNode.outerHTML : n instanceof qt ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ae ? t.blockTemplateSelected = !1 : t instanceof qt && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ae ? n.blockTemplateSelected = !0 : n instanceof qt && (n.selected = !0);
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
    if (o instanceof Ae)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof qt)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ae ? n.blockTemplateProposedTranslations[t] || "" : n instanceof qt ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ae ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof qt && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
    return this.isLeadSection ? Qa : this.originalTitle;
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
    return this.isLeadSection ? Qa : this.title;
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
class oc extends Xo {
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
    lastUpdatedTimestamp: l,
    status: d,
    pageRevision: r,
    targetTitle: u,
    sourceSectionTitle: g,
    targetSectionTitle: m,
    progress: p
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: c,
      lastUpdatedTimestamp: l,
      pageRevision: r,
      status: d,
      targetTitle: u
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = g, this.targetSectionTitle = m, this.progress = p, this.restored = !1;
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
    return !this.sourceSectionTitle || this.sourceSectionTitle === nc.LEAD_SECTION_DUMMY_TITLE;
  }
}
class Tg extends Xo {
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
    status: l,
    targetTitle: d,
    targetUrl: r,
    sectionTranslations: u
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: i,
      pageRevision: c,
      status: l,
      targetTitle: d
    }), this.targetUrl = r, this.sectionTranslations = u;
  }
}
const sc = mw.user.isAnon() ? void 0 : "user", Lg = (e) => {
  if (e === "assertuserfailed")
    throw new jn();
};
function Bg(e, t = null) {
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
      let i;
      if (e === "draft" ? i = a.map(
        (l) => new oc(ke(de({}, l), { status: e }))
      ) : i = a.map(
        (l) => new Tg(ke(de({}, l), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const l = yield Bg(
          e,
          s.continue.offset
        );
        i = i.concat(l);
      }
      return i;
    }));
  });
}
function lf(e) {
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
      (a) => new rf(a)
    );
  });
}
function uf(e, t, n, o, s) {
  return k(this, null, function* () {
    if (!o)
      return;
    let a = `/translate/${e}/${t}`;
    n !== W.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = q.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then((c) => c.json()).then((c) => {
      var d, r;
      return (r = (d = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : d.groups) == null ? void 0 : r.content;
    }).catch((c) => Promise.reject(c));
  });
}
const df = (e, t, n) => {
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
}, gf = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: c,
  captchaId: l,
  captchaWord: d,
  isSandbox: r,
  sectionTranslationId: u
}) => {
  const g = {
    assert: sc,
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
    sectiontranslationid: u
  };
  return l && (g.captchaid = l, g.captchaword = d), new mw.Api().postWithToken("csrf", g).then((p) => {
    if (p = p.cxpublishsection, p.result === "error") {
      if (p.edit.captcha)
        return {
          publishFeedbackMessage: new Rn({
            type: "captcha",
            status: "error",
            details: p.edit.captcha
          }),
          targetTitle: null
        };
      throw new Error();
    }
    return {
      publishFeedbackMessage: null,
      targetUrl: p.targeturl
    };
  }).catch((p, h) => {
    Lg(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Rn({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, mf = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: c,
  sectionId: l,
  isSandbox: d,
  progress: r
}) => {
  const u = {
    assert: sc,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: l,
    issandbox: d,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", u).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    Lg(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new Rn({ text: h, status: "error" });
  });
}, pf = (e) => {
  const t = {
    assert: sc,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, hf = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, wf = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, ff = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), Ke = {
  fetchTranslations: Bg,
  fetchTranslationUnits: lf,
  fetchSegmentTranslation: uf,
  parseTemplateWikitext: df,
  publishTranslation: gf,
  saveTranslation: mf,
  deleteTranslation: hf,
  fetchTranslatorStats: ff,
  deleteCXTranslation: wf,
  splitTranslation: pf
}, _f = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (c) => !W.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, vf = (e) => {
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
};
function Sf({ rootState: e }) {
  const { currentSourceSection: t, targetLanguage: n } = e.application, o = Wt.getMTScoreForPageSection(
    t,
    n
  ), s = Wt.getScoreStatus(o);
  if (s === "success")
    return null;
  const a = 100 - o, i = s === "failure" ? "error" : "warning";
  let c, l;
  return i === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Rn({
    title: c,
    text: l,
    status: i,
    type: "mt"
  });
}
function yf({ rootState: e, rootGetters: t }) {
  const n = t["application/getCurrentPage"], {
    /** @type {PageSection} */
    currentSourceSection: o,
    /** @type {SectionSuggestion} */
    sourceLanguage: s,
    targetLanguage: a
  } = e.application, i = n.title, c = t["application/getTargetPageTitleForPublishing"], l = t["mediawiki/getSupportedMTProviders"](
    s,
    a
  ), d = t["application/getParallelCorporaBaseId"], r = o.getParallelCorporaUnits(d);
  r.forEach(
    (m) => _f(m, l)
  );
  const u = o.getTranslationProgress(a), g = t["application/isSandboxTarget"];
  return Ke.saveTranslation({
    sourceTitle: i,
    targetTitle: c,
    // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
    sourceSectionTitle: o.sourceSectionTitleForPublishing,
    // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
    targetSectionTitle: o.targetSectionTitleForPublishing,
    sourceLanguage: s,
    targetLanguage: a,
    revision: t["application/getCurrentRevision"],
    units: r.map((m) => m.payload),
    // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
    sectionId: d,
    isSandbox: g,
    progress: u
  });
}
function Cf(a) {
  return k(this, arguments, function* ({ rootState: e, rootGetters: t, dispatch: n }, { captchaId: o, captchaAnswer: s } = {}) {
    const i = yield n("saveTranslation");
    if (i instanceof Rn)
      return { publishFeedbackMessage: i, targetTitle: null };
    const c = i, l = t["application/getCurrentPage"], {
      /** @type {PageSection} */
      currentSourceSection: d,
      sourceLanguage: r,
      targetLanguage: u
    } = e.application, g = l.title, m = t["application/getTargetPageTitleForPublishing"], p = t["application/isSandboxTarget"], h = {
      html: vf(d.translationHtml),
      sourceTitle: g,
      targetTitle: m,
      sourceSectionTitle: d.sourceSectionTitleForPublishing,
      targetSectionTitle: d.targetSectionTitleForPublishing,
      sourceLanguage: r,
      targetLanguage: u,
      revision: t["application/getCurrentRevision"],
      isSandbox: p,
      sectionTranslationId: c
    };
    return o && (h.captchaId = o, h.captchaWord = s), yield Ke.publishTranslation(h);
  });
}
function kf(a, i) {
  return k(this, arguments, function* ({ rootGetters: e, dispatch: t, rootState: n }, { provider: o, originalContent: s }) {
    const { sourceLanguage: c, targetLanguage: l } = n.application;
    if (!e["mediawiki/isValidProviderForTranslation"](c, l, o))
      return Promise.resolve();
    try {
      const r = yield t(
        "application/getCXServerToken",
        {},
        { root: !0 }
      );
      return yield Ke.fetchSegmentTranslation(
        c,
        l,
        o,
        s,
        r
      );
    } catch (r) {
      return mw.log.error("Error while translating segment", r), s;
    }
  });
}
function xf(t) {
  return k(this, arguments, function* ({ commit: e }) {
    const n = yield Ke.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const bf = {
  validateMT: Sf,
  saveTranslation: yf,
  publishTranslation: Cf,
  translateContent: kf,
  fetchTranslatorStats: xf
}, $f = {
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
}, Vf = {
  namespaced: !0,
  state: X0,
  getters: K0,
  actions: bf,
  mutations: $f
}, Pg = [
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
], Af = [
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
], Df = [
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
], Ef = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Tf = [
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
], Lf = {
  en: Pg,
  es: Af,
  bn: Df,
  fr: Ef,
  de: Tf
}, Bf = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestionsForPublished: [],
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
   * Stores collections of seeds for different language pairs
   * Each seed collection corresponds to a specific language pair
   * and contains all available seeds to be used for suggestion fetching.
   * Having this information stored prevents unnecessary requests to fetch
   * seeds every time they are needed
   * @type {SuggestionSeedCollection[]}
   */
  suggestionSeedCollections: [],
  /**
   * Stores appendix section titles, grouped by language
   * @type Object - { language1: [titles1], ... }
   */
  appendixSectionTitles: Lf,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, Pf = {
  getFavoriteTitlesByLanguagePair: (e) => (t, n) => e.favorites.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ).map((o) => o.title),
  /**
   * @return {SuggestionSeedCollection|undefined}
   */
  findSuggestionSeedCollection: (e) => (t, n) => e.suggestionSeedCollections.find(
    (o) => o.matchesLanguagePair(t, n)
  ),
  getPageSuggestionsForPair: (e) => (t, n) => e.pageSuggestions.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ),
  getSectionSuggestionsForPair: (e) => (t, n) => e.sectionSuggestions.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ),
  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForArticle: (e) => (t, n, o) => e.sectionSuggestions.find(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.sourceTitle === o
  ),
  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForPublishedArticle: (e) => (t, n, o) => e.sectionSuggestionsForPublished.find(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.sourceTitle === o
  ),
  sectionSuggestionsForArticleExists: (e) => (t, n, o) => e.sectionSuggestions.some(
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
  },
  /**
   * This getter calculates and returns the number of section suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   *
   * @param {Object} state
   * @param {Object} getters
   * @return {function(sourceLanguage: string, targetLanguage: string): number}
   */
  getNumberOfSectionSuggestionsToFetch: (e, t) => (n, o) => {
    const s = t.getSectionSuggestionsForPair(n, o), a = e.maxSuggestionsPerSlice;
    return a - s.length % a;
  },
  /**
   * This getter calculates and returns the number of page suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   *
   * @param {Object} state
   * @param {Object} getters
   * @return {function(sourceLanguage: string, targetLanguage: string): number}
   */
  getNumberOfPageSuggestionsToFetch: (e, t) => (n, o) => {
    const s = t.getPageSuggestionsForPair(n, o), a = e.maxSuggestionsPerSlice;
    return a - s.length % a;
  }
};
class ac {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    langLinksCount: a,
    wikidataId: i
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = i, this.langLinksCount = a;
  }
  /**
   * @returns {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
}
class Ye {
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
   * @param {string[]} options.targetSections  Array of all section titles in target article  ordered by their order of appearance in the article
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    present: a,
    missing: i,
    sourceSections: c,
    targetSections: l
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = c, this.targetSections = l;
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
   * @param {string} sectionTitle
   * @return {boolean}
   */
  hasSectionTitle(t) {
    return this.sourceSections.includes(t);
  }
}
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
const Ff = Pg;
function Mf(e, t, n, o = 24) {
  return k(this, null, function* () {
    var r;
    let a = `/data/recommendation/article/creation/translation/${q.getWikiDomainCode(e)}`;
    n && (a += `/${n}`);
    const i = q.getRestbaseUrl(t, a), c = new URLSearchParams({ count: `${o}` }), l = yield fetch(`${i}?${c}`);
    if (!l.ok)
      throw new Error("Failed to load data from server");
    return (((r = yield l.json()) == null ? void 0 : r.items) || []).map(
      (u) => new ac({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.sitelink_count)
      })
    );
  });
}
function Nf(e, t, n) {
  return k(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Ye(a) : null;
  });
}
function If(e, t) {
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
function zf(e) {
  const t = Ff.map((o) => encodeURIComponent(o)).join("|"), n = q.getCXServerUrl(
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
const Uf = (e) => {
  const t = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "add",
    titles: e.sourceTitle,
    from: e.sourceLanguage,
    to: e.targetLanguage
  }, n = new mw.Api();
  return Promise.resolve(n.postWithToken("csrf", t)).catch((o) => {
    mw.log.error("Error while marking suggestion as favorite", o);
  });
}, Rf = (e) => {
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
}, Of = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((c) => new Oo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, rt = {
  fetchFavorites: Of,
  fetchPageSuggestions: Mf,
  fetchSectionSuggestions: Nf,
  fetchSuggestionSeeds: If,
  fetchAppendixTargetSectionTitles: zf,
  markFavorite: Uf,
  unmarkFavorite: Rf
};
class Hf {
  /**
   * Creates an instance of SuggestionSeedCollection.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string[]} options.seeds
   */
  constructor({ sourceLanguage: t, targetLanguage: n, seeds: o = [] }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.seeds = o;
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
function jf(c, l) {
  return k(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
    let d = n.getSectionSuggestionsForArticle(
      s,
      a,
      i
    );
    if (!d) {
      d = yield rt.fetchSectionSuggestions(
        s,
        i,
        a
      );
      try {
        if (yield t(
          "mediawiki/fetchPageMetadata",
          { language: s, titles: [i] },
          { root: !0 }
        ), d)
          e("addSectionSuggestion", d);
        else {
          const r = o["mediawiki/getPage"](
            s,
            i
          );
          d = new Ye({
            sourceLanguage: s,
            targetLanguage: a,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: r.title
          }), e(
            "addPageSuggestion",
            new ac({
              sourceLanguage: s,
              targetLanguage: a,
              sourceTitle: i,
              langLinksCount: r.langLinksCount,
              wikidataId: r.wikidataId
            })
          );
        }
      } catch (r) {
        throw new Error(
          `No page metadata found for title ${i} and language pair ${s}-${a}`
        );
      }
    }
    return d;
  });
}
function qf(o, s) {
  return k(this, arguments, function* ({ getters: e }, { sourceLanguage: t, targetLanguage: n }) {
    let a = e.findSuggestionSeedCollection(
      t,
      n
    );
    return !a || !a.seeds.length ? (mw.log.error("No suggestion seed found! Suggestion fetching will fail!"), null) : a.shiftSeeds();
  });
}
function Gf(s) {
  return k(this, arguments, function* ({
    rootGetters: e,
    dispatch: t,
    rootState: n,
    state: o
  }) {
    const { targetLanguage: a } = n.application, i = e["application/getSectionSuggestionsSliceByIndex"](0), c = e["application/getPageSuggestionsSliceByIndex"](0), l = i.length === o.maxSuggestionsPerSlice, d = c.length === o.maxSuggestionsPerSlice;
    l && d || (yield t("suggestions/fetchAppendixSectionTitles", a, {
      root: !0
    }), t("fetchNextSectionSuggestionsSlice"), t("fetchNextPageSuggestionsSlice"));
  });
}
function Wf(a) {
  return k(this, arguments, function* ({
    state: e,
    commit: t,
    getters: n,
    dispatch: o,
    rootState: s
  }) {
    const { sourceLanguage: i, targetLanguage: c } = s.application;
    t("increaseSectionSuggestionsLoadingCount");
    const l = n.getNumberOfSectionSuggestionsToFetch(
      i,
      c
    );
    let d = 0;
    for (; d < l; ) {
      const u = yield o("getSuggestionSeed", {
        sourceLanguage: i,
        targetLanguage: c
      });
      if (!u)
        break;
      const g = yield rt.fetchSectionSuggestions(
        i,
        u,
        c
      ), m = e.appendixSectionTitles[c] || [];
      g != null && g.isValid(m) && (d++, t("addSectionSuggestion", g));
    }
    t("decreaseSectionSuggestionsLoadingCount");
    const r = n.getSectionSuggestionsForPair(i, c).map((u) => u.sourceTitle);
    o(
      "mediawiki/fetchPageMetadata",
      { language: i, titles: r },
      { root: !0 }
    );
  });
}
function Xf(s) {
  return k(this, arguments, function* ({
    commit: e,
    dispatch: t,
    getters: n,
    rootState: o
  }) {
    e("increasePageSuggestionsLoadingCount");
    const { sourceLanguage: a, targetLanguage: i } = o.application, c = yield t("getSuggestionSeed", {
      sourceLanguage: a,
      targetLanguage: i
    }), l = n.getNumberOfPageSuggestionsToFetch(
      a,
      i
    );
    try {
      const d = yield rt.fetchPageSuggestions(
        a,
        i,
        c,
        l
      );
      d.forEach(
        (u) => e("addPageSuggestion", u)
      );
      const r = d.map((u) => u.sourceTitle);
      r.length && t(
        "mediawiki/fetchPageMetadata",
        { language: a, titles: r },
        { root: !0 }
      );
    } catch (d) {
      mw.log.error("Page suggestions fetching failed!");
    }
    e("decreasePageSuggestionsLoadingCount");
  });
}
function Kf(o, s) {
  return k(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield rt.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
function Yf(o, s) {
  return k(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removeSectionSuggestion", n), t("fetchNextSectionSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function Qf(o, s) {
  return k(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removePageSuggestion", n), t("fetchNextPageSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function Jf(o, s) {
  return k(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    yield rt.markFavorite(n);
    const { sourceTitle: a, sourceLanguage: i, targetLanguage: c } = n, l = new Oo({
      title: a,
      sourceLanguage: i,
      targetLanguage: c
    });
    e("addFavoriteSuggestion", l);
  });
}
function Zf(n, o) {
  return k(this, arguments, function* ({ commit: e }, t) {
    e("removeFavoriteSuggestion", t), yield rt.unmarkFavorite(t);
  });
}
function e_(o) {
  return k(this, arguments, function* ({ commit: e, dispatch: t, state: n }) {
    if (n.favorites.length)
      return;
    const s = yield rt.fetchFavorites();
    if (!s || !s.length)
      return;
    const a = {};
    for (const i of s)
      e("addFavoriteSuggestion", i), rt.fetchSectionSuggestions(
        i.sourceLanguage,
        i.title,
        i.targetLanguage
      ).then(
        (c) => i.missingSectionsCount = (c == null ? void 0 : c.missingSectionsCount) || 0
      ), a[i.sourceLanguage] = [
        ...a[i.sourceLanguage] || [],
        i
      ];
    for (const [i, c] of Object.entries(
      a
    ))
      t(
        "mediawiki/fetchPageMetadata",
        {
          language: i,
          titles: c.map((l) => l.title)
        },
        { root: !0 }
      );
  });
}
const t_ = {
  addPageSuggestionAsFavorite: Qf,
  addSectionSuggestionAsFavorite: Yf,
  doMarkSuggestionAsFavorite: Jf,
  fetchFavorites: e_,
  fetchAppendixSectionTitles: Kf,
  fetchNextPageSuggestionsSlice: Xf,
  fetchNextSectionSuggestionsSlice: Wf,
  getSuggestionSeed: qf,
  initializeSuggestions: Gf,
  loadSectionSuggestion: jf,
  removeFavoriteSuggestion: Zf
}, n_ = {
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
  addSectionSuggestionForPublished(e, t) {
    e.sectionSuggestionsForPublished.push(t);
  },
  /**
   * @param {Object} state
   * @param {SectionSuggestion} suggestionToRemove
   */
  removeSectionSuggestion(e, t) {
    e.sectionSuggestions = e.sectionSuggestions.filter(
      (n) => n.id !== t.id
    );
  },
  /**
   * @param {Object} state
   * @param {ArticleSuggestion} suggestionToRemove
   */
  removePageSuggestion(e, t) {
    e.pageSuggestions = e.pageSuggestions.filter(
      (n) => n.id !== t.id
    );
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
  /**
   * @param state
   * @param {SuggestionSeedCollection} collection
   */
  addSuggestionSeedCollection(e, t) {
    e.suggestionSeedCollections.push(t);
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
}, o_ = {
  namespaced: !0,
  state: Bf,
  getters: Pf,
  actions: t_,
  mutations: n_
}, s_ = {
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
}, a_ = {
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
  getLanguageTitleGroupByWikidataId: (e) => (t) => e.languageTitleGroups.find((n) => n.wikidataId === t),
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== W.EMPTY_TEXT_PROVIDER_KEY,
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
    return o["translator/getAllTranslationsForLanguagePair"](s, a).slice(
      0,
      n.suggestions.maxRecentlyEditedSuggestions
    ).map(
      (l) => t.getPage(s, l.sourceTitle)
    ).filter((l) => !!l);
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
class qn {
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
    pagelanguage: i,
    pageprops: c,
    pageviews: l,
    thumbnail: d,
    title: r,
    _alias: u,
    content: g = null,
    sections: m = []
  } = {}) {
    this.language = i, this.title = r, this.pageId = a, this.description = t, this.image = s, this.pageprops = c, this.pageviews = l, this.thumbnail = d, this.langLinksCount = n, this.revision = o, this.alias = u, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = g, this.sections = m;
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
class i_ {
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
function r_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const c_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), r_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, l_ = (e, t) => {
  let n, o;
  return t ? (n = c_(e), o = n.$element.find(
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
}, u_ = (e, t) => {
  const n = Array.from(
    l_(e, t)
  );
  return d_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let c = "";
      const l = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : i.unshift(a);
      const d = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (u) => new Ae({
          sentences: g_(u),
          node: u
        })
      ), r = !c;
      return new nc({ id: l, title: c, subSections: d, isLeadSection: r });
    }
  );
}, d_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, g_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new qt({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Fg = {
  convertSegmentedContentToPageSections: u_
}, ic = 120, m_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: ic,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, u) => ke(de({}, r), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (r, u) => ke(de({}, r), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((r) => {
      const u = d[r.title] || c[r.title] || null;
      return new qn(ke(de({}, r), { _alias: u }));
    });
  });
}, p_ = (e, t) => {
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
  return q.getApi(e).get(n).then((s) => k(void 0, null, function* () {
    var l, d;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return c ? Object.freeze(new i_(c, i)) : null;
  }));
}, h_ = (e, t, n, o = null) => Mg(
  e,
  t,
  n,
  o
).then(
  (s) => new qn({
    sections: Fg.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Mg = (e, t, n, o = null) => {
  const s = q.getWikiDomainCode(e), a = q.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, c += "/$revision");
  const l = q.getCXServerUrl(
    c,
    i
  );
  return fetch(l).then((d) => d.json()).then((d) => d.segmentedContent);
}, w_ = (e) => k(void 0, null, function* () {
  const t = af();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: ic,
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
  return yield q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new qn(s))).catch((o) => []);
}), f_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: ic,
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
      (a) => new qn(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, Ko = {
  fetchPages: m_,
  fetchLanguageTitles: p_,
  fetchPageContent: h_,
  fetchSegmentedContent: Mg,
  fetchNearbyPages: w_,
  searchPagesByTitlePrefix: f_
};
function __() {
  return q.getLanguagePairs().then((e) => e.sourceLanguages);
}
function v_(e, t) {
  return k(this, null, function* () {
    const n = q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new W(e, t, o.mt)
      )
    );
  });
}
function S_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function y_(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = {
    action: "wblinktitles",
    fromsite: s.replace(t, e),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, i = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(i.postWithToken("csrf", a)).then((c) => {
    const d = {
      action: "tag",
      revid: c.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(i.postWithToken("csrf", d));
  });
}
const xa = {
  fetchSupportedLanguageCodes: __,
  fetchSupportedMTProviders: v_,
  fetchCXServerToken: S_,
  addWikibaseLink: y_
};
function C_({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const c = o.slice(i, i + s), l = Ko.fetchPages(n, c).then(
      (d) => d.forEach((r) => t("addPage", r))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function k_({ commit: e, getters: t }, { language: n, title: o }) {
  t.getLanguageTitleGroup(n, o) || Ko.fetchLanguageTitles(n, o).then(
    (s) => s && e("addLanguageTitleGroup", s)
  );
}
function x_(n) {
  return k(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield xa.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function b_(c, l) {
  return k(this, arguments, function* ({ commit: e, getters: t, dispatch: n }, { sourceLanguage: o, targetLanguage: s, sourceTitle: a, revision: i = null }) {
    let d = t.getPage(o, a);
    if (d && d.content)
      return;
    const r = yield Ko.fetchPageContent(
      o,
      s,
      a,
      i
    );
    d = t.getPage(o, a), d ? d.content || (d.content = r.content, e("setPageSections", {
      page: d,
      sections: r.sections
    })) : e("addPage", r);
  });
}
function $_(o) {
  return k(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield Ko.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const V_ = {
  fetchLanguageTitles: k_,
  fetchNearbyPages: $_,
  fetchPageContent: b_,
  fetchPageMetadata: C_,
  fetchSupportedLanguageCodes: x_
}, A_ = {
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
}, D_ = {
  namespaced: !0,
  state: s_,
  getters: a_,
  actions: V_,
  mutations: A_
}, E_ = {
  /**@type Array */
  mtRequestsPending: [],
  /** @type SectionSuggestion */
  currentSectionSuggestion: null,
  /** @type PageSection */
  currentSourceSection: null,
  /** @type Translation */
  currentTranslation: null,
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
}, T_ = {
  /**
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   * @param {object} rootGetters
   * @return {Page|null}
   */
  getCurrentPage: (e, t, n, o) => {
    var a, i;
    const s = ((a = e.currentSectionSuggestion) == null ? void 0 : a.sourceTitle) || ((i = e.currentTranslation) == null ? void 0 : i.sourceTitle);
    return o["mediawiki/getPage"](e.sourceLanguage, s);
  },
  getCurrentTargetPage: (e, t, n, o) => {
    var a, i;
    const s = ((a = e.currentSectionSuggestion) == null ? void 0 : a.targetTitle) || ((i = e.currentTranslation) == null ? void 0 : i.targetTitle);
    return o["mediawiki/getPage"](e.targetLanguage, s);
  },
  getCurrentSourceSectionTitle: (e) => {
    var t;
    return ((t = e.currentSourceSection) == null ? void 0 : t.originalTitle) || "";
  },
  getCurrentSourceSectionAnchor: (e, t) => (t.getCurrentSourceSectionTitle || "").replace(/ /g, "_"),
  isCurrentSourceSectionMissing: (e, t) => {
    var n;
    return (n = e.currentSectionSuggestion) == null ? void 0 : n.missingSections.hasOwnProperty(
      t.getCurrentSourceSectionTitle
    );
  },
  isCurrentSourceSectionPresent: (e, t) => {
    var n;
    return (n = e.currentSectionSuggestion) == null ? void 0 : n.presentSections.hasOwnProperty(
      t.getCurrentSourceSectionTitle
    );
  },
  /**
   * Machine translation of currently selected translation unit (title or sentence)
   * for currently selected MT provider
   */
  getCurrentProposedTranslation: (e) => {
    const { currentSourceSection: t, currentMTProvider: n } = e;
    return t == null ? void 0 : t.getProposedTranslationByMtProvider(
      n
    );
  },
  /**
   * @return {LanguageTitleGroup|null}
   */
  getCurrentLanguageTitleGroup: (e, t, n, o) => {
    var s, a;
    return o["mediawiki/getLanguageTitleGroup"](
      (s = e.currentSectionSuggestion) == null ? void 0 : s.sourceLanguage,
      (a = e.currentSectionSuggestion) == null ? void 0 : a.sourceTitle
    );
  },
  /**
   * @return {ArticleSuggestion[]}
   */
  getCurrentPageSuggestions: (e, t, n, o) => o["suggestions/getPageSuggestionsForPair"](
    e.sourceLanguage,
    e.targetLanguage
  ),
  /**
   * @return {SectionSuggestion[]}
   */
  getCurrentSectionSuggestions: (e, t, n, o) => o["suggestions/getSectionSuggestionsForPair"](
    e.sourceLanguage,
    e.targetLanguage
  ),
  /**
   * @param state
   * @param getters
   * @param rootState
   * @return {function(number): SectionSuggestion[]}
   */
  getSectionSuggestionsSliceByIndex: (e, t, n) => (o) => t.getCurrentSectionSuggestions.slice(
    n.suggestions.maxSuggestionsPerSlice * o,
    n.suggestions.maxSuggestionsPerSlice * (o + 1)
  ),
  /**
   * @param state
   * @param getters
   * @param rootState
   * @return {function(number): ArticleSuggestion[]}
   */
  getPageSuggestionsSliceByIndex: (e, t, n) => (o) => t.getCurrentPageSuggestions.slice(
    n.suggestions.maxSuggestionsPerSlice * o,
    n.suggestions.maxSuggestionsPerSlice * (o + 1)
  ),
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION",
  /**
   * @param {object} state
   * @param {object} getters
   * @return {string}
   */
  getCurrentRevision: (e, t) => {
    var n;
    return ((n = e.currentTranslation) == null ? void 0 : n.pageRevision) || t.getCurrentPage.revision;
  },
  /**
   * @param {object} state
   * @param {object} getters
   * @return {string}
   */
  getParallelCorporaBaseId: (e, t) => `${t.getCurrentRevision}_${e.currentSourceSection.id}`,
  getTargetPageTitleForPublishing: (e, t) => {
    const { currentSourceSection: n } = e;
    return n.isLeadSection ? n.title : t.getCurrentTargetPage.title;
  }
}, L_ = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => wn(a)
  );
  return s && Eg(s) ? Ke.parseTemplateWikitext(
    Ag(s),
    n,
    t
  ) : Promise.resolve(null);
}, Ng = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => wn(a)
  );
  return s ? Ke.parseTemplateWikitext(
    Ag(s),
    n,
    t
  ) : Promise.resolve(null);
};
function rc(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
let ws;
const cc = ({ dispatch: e, commit: t }) => {
  if (!ws) {
    let n = 1e3, o = 0;
    ws = rc(() => {
      e("translator/saveTranslation", {}, { root: !0 }).then((a) => {
        a instanceof Rn ? (n *= o + 1, o++, setTimeout(ws, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
      }).catch((a) => {
        if (a instanceof jn)
          t("setIsLoginDialogOn", !0);
        else
          throw a;
      });
    }, 3e3);
  }
  return ws;
}, B_ = ({ dispatch: e, commit: t }) => {
  t("setAutoSavePending", !1), cc({ dispatch: e, commit: t }).cancel();
}, P_ = (o) => k(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield xa.fetchCXServerToken().then(
    (c) => {
      c.age <= 30 && (c.age = 3600);
      const l = Math.floor(Date.now() / 1e3);
      c.refreshAt = l + c.age - 30, n("setCXServerToken", c);
    },
    (c) => {
      if (c === "token-impossible") {
        const l = Math.floor(Date.now() / 1e3);
        n("setCXServerToken", { jwt: "", refreshAt: l + 3600 * 10 });
      }
    }
  ));
  const s = Math.floor(Date.now() / 1e3);
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (i = t.cxServerToken) == null ? void 0 : i.jwt;
});
function F_(n, o) {
  return k(this, arguments, function* ({ dispatch: e }, t) {
    const s = yield e(
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage: t.sourceLanguage,
        targetLanguage: t.targetLanguage,
        sourceTitle: t.title
      },
      { root: !0 }
    );
    e("initializeSectionTranslation", s);
  });
}
function M_({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentSectionSuggestion", n);
}
function N_({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentTranslation", n);
}
function I_(n) {
  return k(this, arguments, function* ({
    dispatch: e,
    state: t
  }) {
    const { sourceLanguage: o, sourceTitle: s } = t.currentSectionSuggestion;
    yield e("mediawiki/fetchLanguageTitles", { language: o, title: s }, { root: !0 });
  });
}
function z_(s, a) {
  return k(this, arguments, function* ({ commit: e, dispatch: t, state: n }, o) {
    const { currentSourceSection: i, currentMTProvider: c } = n;
    i.selectTranslationUnitById(o), yield t("translateTranslationUnitById", {
      id: o,
      provider: c
    });
    const { followingTranslationUnit: l } = i;
    l && (yield t("translateTranslationUnitById", {
      id: l.id,
      provider: c
    }));
  });
}
function U_({
  dispatch: e,
  getters: t,
  commit: n,
  state: o
}) {
  const s = t.getCurrentProposedTranslation, { currentSourceSection: a, currentMTProvider: i } = o;
  a.setTranslationForSelectedTranslationUnit(
    s,
    i
  ), cc({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
}
function R_(a, i) {
  return k(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
    const c = document.createElement("div");
    c.innerHTML = s, c.querySelectorAll(".sx-edit-dummy-node").forEach((m) => m.remove()), s = c.innerHTML;
    const { currentSourceSection: l, targetLanguage: d, currentMTProvider: r } = e, { selectedContentTranslationUnit: u } = l;
    if (u instanceof Ae) {
      const m = o.getCurrentPage, p = o.getCurrentTargetPage;
      s = (yield Ng(
        s,
        (p == null ? void 0 : p.title) || m.title,
        d
      )) || s;
    }
    l.setTranslationForSelectedTranslationUnit(
      s,
      r
    ), cc({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
  });
}
function O_({ state: e, dispatch: t }) {
  const { followingTranslationUnit: n } = e.currentSourceSection;
  n && t("selectTranslationUnitById", n.id);
}
function H_({ state: e, dispatch: t }) {
  const { selectedContentTranslationUnitIndex: n, contentTranslationUnits: o } = e.currentSourceSection, s = n - 1;
  let a = 0;
  s > -1 && (a = o[s].id), t("selectTranslationUnitById", a);
}
function j_({ commit: e, dispatch: t, state: n }, o) {
  e("setCurrentMTProvider", o);
  const { currentSourceSection: s } = n, { selectedTranslationUnitId: a } = s;
  t("translateTranslationUnitById", { id: a, provider: o });
}
function q_(i, c) {
  return k(this, arguments, function* ({ commit: e, state: t, dispatch: n, getters: o }, { id: s, provider: a }) {
    const { currentSourceSection: l, targetLanguage: d } = t;
    if (l.hasProposedTranslationByTranslationUnitId(s, a))
      return;
    let r = l.getOriginalContentByTranslationUnitId(s);
    const u = l.getContentTranslationUnitById(s);
    let g;
    if (e("addMtRequestsPending", s), g = yield n(
      "translator/translateContent",
      { originalContent: r, provider: a },
      { root: !0 }
    ), !g) {
      e("removeMtRequestsPending", s);
      return;
    }
    if (u instanceof Ae) {
      u.setBlockTemplateAdaptationInfoByHtml(
        a,
        g
      );
      const m = o.getCurrentPage, p = o.getCurrentTargetPage;
      g = (yield L_(
        g,
        (p == null ? void 0 : p.title) || m.title,
        d
      )) || "";
    }
    e("setProposedTranslationForTranslationUnitById", {
      id: s,
      provider: a,
      proposedTranslation: g
    }), e("removeMtRequestsPending", s);
  });
}
function G_({
  rootGetters: e,
  dispatch: t,
  state: n
}) {
  const { sourceLanguage: o, targetLanguage: s, currentSourceSection: a } = n, i = e["mediawiki/getSupportedMTProviders"](
    o,
    s
  ), { selectedTranslationUnitId: c } = a;
  i.forEach(
    (l) => t("translateTranslationUnitById", { id: c, provider: l })
  );
}
function W_({ commit: e }) {
  e("setCurrentSectionSuggestion", null);
}
const X_ = {
  applyEditedTranslationToSelectedTranslationUnit: R_,
  applyProposedTranslationToSelectedTranslationUnit: U_,
  clearCurrentSectionSuggestion: W_,
  clearPendingSaveTranslationRequests: B_,
  fetchCurrentSectionSuggestionLanguageTitles: I_,
  getCXServerToken: P_,
  initializeSectionTranslation: M_,
  restoreSectionTranslation: N_,
  selectNextTranslationUnit: O_,
  selectPreviousTranslationUnit: H_,
  selectTranslationUnitById: z_,
  startFavoriteSectionTranslation: F_,
  translateTranslationUnitById: q_,
  translateSelectedTranslationUnitForAllProviders: G_,
  updateMTProvider: j_
}, K_ = {
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
   * This mutation is being called both for section suggestions and for
   * page suggestions. However, "currentSectionSuggestion" state variable
   * should be a instance of SectionSuggestion class. For that reason, we should
   * cast the argument to SectionSuggestion object before setting it as
   * "currentSectionSuggestion", for type integrity.
   *
   * @param {object} state
   * @param {SectionSuggestion|ArticleSuggestion|null} suggestion
   */
  setCurrentSectionSuggestion(e, t) {
    e.currentSectionSuggestion = t && new Ye(ke(de({}, t), {
      missing: (t == null ? void 0 : t.missingSections) || {},
      present: (t == null ? void 0 : t.presentSections) || {}
    }));
  },
  /**
   * @param {object} state
   * @param {boolean} isRestored
   */
  setCurrentTranslationRestored(e, t) {
    e.currentTranslation.restored = t;
  },
  /**
   * @param {object} state
   * @param {Translation} translation
   */
  setCurrentTranslation(e, t) {
    e.currentTranslation = t;
  },
  /**
   * @param state
   * @param {PageSection} section
   */
  setCurrentSourceSection(e, t) {
    e.currentSourceSection = t;
  },
  /**
   * @param state
   * @param {String} translation
   */
  setCurrentSourceSectionTitleTranslation(e, t) {
    e.currentSourceSection.translatedTitle = t;
  },
  /**
   * @param state
   * @param {String} translation
   */
  setCurrentSourceSectionEditedTranslation(e, t) {
    e.currentSourceSection.editedTranslation = t;
  },
  setProposedTranslationForTranslationUnitById(e, { id: t, provider: n, proposedTranslation: o }) {
    if (t === 0) {
      e.currentSourceSection.proposedTitleTranslations[n] = o;
      return;
    }
    const s = e.currentSourceSection.getContentTranslationUnitById(t);
    s instanceof Ae ? s.blockTemplateProposedTranslations[n] = o : s instanceof qt && s.addProposedTranslation(n, o);
  },
  /**
   * @param state
   * @param provider
   */
  setCurrentMTProvider: (e, t) => {
    e.currentMTProvider = t;
    const { sourceLanguage: n, targetLanguage: o } = e, s = W.getStorageKey(
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
}, Y_ = {
  namespaced: !0,
  state: E_,
  getters: T_,
  actions: X_,
  mutations: K_
}, Q_ = window.Vuex.createStore, Ig = Q_({
  modules: { translator: Vf, suggestions: o_, mediawiki: D_, application: Y_ }
});
function J_() {
  return zg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zg() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Z_ = typeof Proxy == "function", e1 = "devtools-plugin:setup", t1 = "plugin:settings:set";
let Sn, Ir;
function n1() {
  var e;
  return Sn !== void 0 || (typeof window != "undefined" && window.performance ? (Sn = !0, Ir = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Sn = !0, Ir = global.perf_hooks.performance) : Sn = !1), Sn;
}
function o1() {
  return n1() ? Ir.now() : Date.now();
}
class s1 {
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
        return o1();
      }
    }, n && n.on(t1, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...l) => {
        this.onQueue.push({
          method: c,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...l) => (this.targetQueue.push({
        method: c,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[c](...l)) : (...l) => new Promise((d) => {
        this.targetQueue.push({
          method: c,
          args: l,
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
function a1(e, t) {
  const n = e, o = zg(), s = J_(), a = Z_ && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(e1, e, t);
  else {
    const i = a ? new s1(n, s) : null;
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
const Ug = window.Vue.getCurrentInstance, On = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const it = window.Vue.computed, zo = window.Vue.unref, i1 = window.Vue.watchEffect, Rg = window.Vue.defineComponent, r1 = window.Vue.reactive, Og = window.Vue.h, Ja = window.Vue.provide, c1 = window.Vue.ref, Hg = window.Vue.watch, l1 = window.Vue.shallowRef, u1 = window.Vue.shallowReactive, d1 = window.Vue.nextTick, kt = typeof window != "undefined";
function g1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const j = Object.assign;
function Za(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = De(s) ? s.map(e) : e(s);
  }
  return n;
}
const Uo = () => {
}, De = Array.isArray;
function z(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const m1 = /\/$/, p1 = (e) => e.replace(m1, "");
function ei(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return c < l && c >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), a = t.slice(l + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = f1(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function h1(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function pl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function hl(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Xt(t.matched[o], n.matched[s]) && jg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Xt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function jg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!w1(e[n], t[n]))
      return !1;
  return !0;
}
function w1(e, t) {
  return De(e) ? wl(e, t) : De(t) ? wl(t, e) : e === t;
}
function wl(e, t) {
  return De(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function f1(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return z(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Ho;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ho || (Ho = {}));
var Ro;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Ro || (Ro = {}));
function _1(e) {
  if (!e)
    if (kt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), p1(e);
}
const v1 = /^[^#]+#/;
function S1(e, t) {
  return e.replace(v1, "#") + t;
}
function y1(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const ba = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function C1(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          z(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        z(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && z(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = y1(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function fl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const zr = /* @__PURE__ */ new Map();
function k1(e, t) {
  zr.set(e, t);
}
function x1(e) {
  const t = zr.get(e);
  return zr.delete(e), t;
}
let b1 = () => location.protocol + "//" + location.host;
function qg(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(c);
    return l[0] !== "/" && (l = "/" + l), pl(l, "");
  }
  return pl(n, e) + o + s;
}
function $1(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: g }) => {
    const m = qg(e, location), p = n.value, h = t.value;
    let w = 0;
    if (g) {
      if (n.value = m, t.value = g, i && i === p) {
        i = null;
        return;
      }
      w = h ? g.position - h.position : 0;
    } else
      o(m);
    s.forEach((f) => {
      f(n.value, p, {
        delta: w,
        type: Ho.pop,
        direction: w ? w > 0 ? Ro.forward : Ro.back : Ro.unknown
      });
    });
  };
  function l() {
    i = n.value;
  }
  function d(g) {
    s.push(g);
    const m = () => {
      const p = s.indexOf(g);
      p > -1 && s.splice(p, 1);
    };
    return a.push(m), m;
  }
  function r() {
    const { history: g } = window;
    g.state && g.replaceState(j({}, g.state, { scroll: ba() }), "");
  }
  function u() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", r, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: d,
    destroy: u
  };
}
function _l(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? ba() : null
  };
}
function V1(e) {
  const { history: t, location: n } = window, o = {
    value: qg(e, n)
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
  function a(l, d, r) {
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : b1() + e + l;
    try {
      t[r ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? z("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](g);
    }
  }
  function i(l, d) {
    const r = j({}, t.state, _l(
      s.value.back,
      // keep back and forward entries but override current position
      l,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(l, r, !0), o.value = l;
  }
  function c(l, d) {
    const r = j(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: l,
        scroll: ba()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && z(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const u = j({}, _l(o.value, l, null), { position: r.position + 1 }, d);
    a(l, u, !1), o.value = l;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function A1(e) {
  e = _1(e);
  const t = V1(e), n = $1(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = j({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: S1.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function D1(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && z(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), A1(e);
}
function E1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Gg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Vt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Ur = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var vl;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(vl || (vl = {}));
const T1 = {
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
    return `Redirected from "${e.fullPath}" to "${B1(t)}" via a navigation guard.`;
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
function Hn(e, t) {
  return {}.NODE_ENV !== "production" ? j(new Error(T1[e](t)), {
    type: e,
    [Ur]: !0
  }, t) : j(new Error(), {
    type: e,
    [Ur]: !0
  }, t);
}
function dt(e, t) {
  return e instanceof Error && Ur in e && (t == null || !!(e.type & t));
}
const L1 = ["params", "query", "hash"];
function B1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of L1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Sl = "[^/]+?", P1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, F1 = /[.+*?^${}()[\]/\\]/g;
function M1(e, t) {
  const n = j({}, P1, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const r = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (s += "/");
    for (let u = 0; u < d.length; u++) {
      const g = d[u];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        u || (s += "/"), s += g.value.replace(F1, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: f } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const v = f || Sl;
        if (v !== Sl) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + x.message);
          }
        }
        let C = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        u || (C = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && d.length < 2 ? `(?:/${C})` : "/" + C), w && (C += "?"), s += C, m += 20, w && (m += -8), h && (m += -20), v === ".*" && (m += -50);
      }
      r.push(m);
    }
    o.push(r);
  }
  if (n.strict && n.end) {
    const d = o.length - 1;
    o[d][o[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function c(d) {
    const r = d.match(i), u = {};
    if (!r)
      return null;
    for (let g = 1; g < r.length; g++) {
      const m = r[g] || "", p = a[g - 1];
      u[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return u;
  }
  function l(d) {
    let r = "", u = !1;
    for (const g of e) {
      (!u || !r.endsWith("/")) && (r += "/"), u = !1;
      for (const m of g)
        if (m.type === 0)
          r += m.value;
        else if (m.type === 1) {
          const { value: p, repeatable: h, optional: w } = m, f = p in d ? d[p] : "";
          if (De(f) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const v = De(f) ? f.join("/") : f;
          if (!v)
            if (w)
              g.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : u = !0);
            else
              throw new Error(`Missing required param "${p}"`);
          r += v;
        }
    }
    return r || "/";
  }
  return {
    re: i,
    score: o,
    keys: a,
    parse: c,
    stringify: l
  };
}
function N1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function I1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = N1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (yl(o))
      return 1;
    if (yl(s))
      return -1;
  }
  return s.length - o.length;
}
function yl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const z1 = {
  type: 0,
  value: ""
}, U1 = /[a-zA-Z0-9_]/;
function R1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[z1]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${d}": ${m}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let c = 0, l, d = "", r = "";
  function u() {
    d && (n === 0 ? a.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: d,
      regexp: r,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function g() {
    d += l;
  }
  for (; c < e.length; ) {
    if (l = e[c++], l === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (d && u(), i()) : l === ":" ? (u(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        l === "(" ? n = 2 : U1.test(l) ? g() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")" ? r[r.length - 1] == "\\" ? r = r.slice(0, -1) + l : n = 3 : r += l;
        break;
      case 3:
        u(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--, r = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), u(), i(), s;
}
function O1(e, t, n) {
  const o = M1(R1(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && z(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = j(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function H1(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = xl({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, u, g) {
    const m = !g, p = j1(r);
    ({}).NODE_ENV !== "production" && X1(p, u), p.aliasOf = g && g.record;
    const h = xl(t, r), w = [
      p
    ];
    if ("alias" in r) {
      const C = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const x of C)
        w.push(j({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : p.components,
          path: x,
          // we might be the child of an alias
          aliasOf: g ? g.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, v;
    for (const C of w) {
      const { path: x } = C;
      if (u && x[0] !== "/") {
        const P = u.record.path, L = P[P.length - 1] === "/" ? "" : "/";
        C.path = u.record.path + (x && L + x);
      }
      if ({}.NODE_ENV !== "production" && C.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = O1(C, u, h), {}.NODE_ENV !== "production" && u && x[0] === "/" && K1(f, u), g ? (g.alias.push(f), {}.NODE_ENV !== "production" && W1(g, f)) : (v = v || f, v !== f && v.alias.push(f), m && r.name && !kl(f) && i(r.name)), p.children) {
        const P = p.children;
        for (let L = 0; L < P.length; L++)
          a(P[L], f, g && g.children[L]);
      }
      g = g || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && l(f);
    }
    return v ? () => {
      i(v);
    } : Uo;
  }
  function i(r) {
    if (Gg(r)) {
      const u = o.get(r);
      u && (o.delete(r), n.splice(n.indexOf(u), 1), u.children.forEach(i), u.alias.forEach(i));
    } else {
      const u = n.indexOf(r);
      u > -1 && (n.splice(u, 1), r.record.name && o.delete(r.record.name), r.children.forEach(i), r.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function l(r) {
    let u = 0;
    for (; u < n.length && I1(r, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[u].record.path || !Wg(r, n[u])); )
      u++;
    n.splice(u, 0, r), r.record.name && !kl(r) && o.set(r.record.name, r);
  }
  function d(r, u) {
    let g, m = {}, p, h;
    if ("name" in r && r.name) {
      if (g = o.get(r.name), !g)
        throw Hn(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(r.params || {}).filter((C) => !g.keys.find((x) => x.name === C));
        v.length && z(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = j(
        // paramsFromLocation is a new object
        Cl(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && Cl(r.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in r)
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && z(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((v) => v.re.test(u.path)), !g)
        throw Hn(1, {
          location: r,
          currentLocation: u
        });
      h = g.record.name, m = j({}, u.params, r.params), p = g.stringify(m);
    }
    const w = [];
    let f = g;
    for (; f; )
      w.unshift(f.record), f = f.parent;
    return {
      name: h,
      path: p,
      params: m,
      matched: w,
      meta: G1(w)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: d, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function Cl(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function j1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: q1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function q1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function kl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function G1(e) {
  return e.reduce((t, n) => j(t, n.meta), {});
}
function xl(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Rr(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function W1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Rr.bind(null, n)))
      return z(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Rr.bind(null, n)))
      return z(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function X1(e, t) {
  t && t.record.name && !e.name && !e.path && z(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function K1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Rr.bind(null, n)))
      return z(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Wg(e, t) {
  return t.children.some((n) => n === e || Wg(e, n));
}
const Xg = /#/g, Y1 = /&/g, Q1 = /\//g, J1 = /=/g, Z1 = /\?/g, Kg = /\+/g, ev = /%5B/g, tv = /%5D/g, Yg = /%5E/g, nv = /%60/g, Qg = /%7B/g, ov = /%7C/g, Jg = /%7D/g, sv = /%20/g;
function lc(e) {
  return encodeURI("" + e).replace(ov, "|").replace(ev, "[").replace(tv, "]");
}
function av(e) {
  return lc(e).replace(Qg, "{").replace(Jg, "}").replace(Yg, "^");
}
function Or(e) {
  return lc(e).replace(Kg, "%2B").replace(sv, "+").replace(Xg, "%23").replace(Y1, "%26").replace(nv, "`").replace(Qg, "{").replace(Jg, "}").replace(Yg, "^");
}
function iv(e) {
  return Or(e).replace(J1, "%3D");
}
function rv(e) {
  return lc(e).replace(Xg, "%23").replace(Z1, "%3F");
}
function cv(e) {
  return e == null ? "" : rv(e).replace(Q1, "%2F");
}
function jo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && z(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function lv(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Kg, " "), i = a.indexOf("="), c = jo(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : jo(a.slice(i + 1));
    if (c in t) {
      let d = t[c];
      De(d) || (d = t[c] = [d]), d.push(l);
    } else
      t[c] = l;
  }
  return t;
}
function bl(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = iv(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (De(o) ? o.map((a) => a && Or(a)) : [o && Or(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function uv(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = De(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const dv = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), $l = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), $a = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Zg = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Hr = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Qn() {
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
function Gt(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const l = (u) => {
      u === !1 ? c(Hn(4, {
        from: n,
        to: t
      })) : u instanceof Error ? c(u) : E1(u) ? c(Hn(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? gv(l, t, n) : l);
    let r = Promise.resolve(d);
    if (e.length < 3 && (r = r.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        r = r.then((g) => l._called ? g : (z(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !l._called) {
        z(u), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((u) => c(u));
  });
}
function gv(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && z(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ti(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && z(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let c = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw z(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          z(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = c;
          c = () => l;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, z(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (mv(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(Gt(d, n, o, a, i));
        } else {
          let l = c();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (z(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = g1(d) ? d.default : d;
            a.components[i] = r;
            const g = (r.__vccOpts || r)[t];
            return g && Gt(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function mv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Vl(e) {
  const t = On($a), n = On(Zg), o = it(() => t.resolve(zo(e.to))), s = it(() => {
    const { matched: l } = o.value, { length: d } = l, r = l[d - 1], u = n.matched;
    if (!r || !u.length)
      return -1;
    const g = u.findIndex(Xt.bind(null, r));
    if (g > -1)
      return g;
    const m = Al(l[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Al(r) === m && // avoid comparing the child with its parent
      u[u.length - 1].path !== m ? u.findIndex(Xt.bind(null, l[d - 2])) : g
    );
  }), a = it(() => s.value > -1 && fv(n.params, o.value.params)), i = it(() => s.value > -1 && s.value === n.matched.length - 1 && jg(n.params, o.value.params));
  function c(l = {}) {
    return wv(l) ? t[zo(e.replace) ? "replace" : "push"](
      zo(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Uo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && kt) {
    const l = Ug();
    if (l) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), i1(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: it(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const pv = /* @__PURE__ */ Rg({
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
  useLink: Vl,
  setup(e, { slots: t }) {
    const n = r1(Vl(e)), { options: o } = On($a), s = it(() => ({
      [Dl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Dl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Og("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), hv = pv;
function wv(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function fv(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!De(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function Al(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Dl = (e, t, n) => e != null ? e : t != null ? t : n, _v = /* @__PURE__ */ Rg({
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
    ({}).NODE_ENV !== "production" && Sv();
    const o = On(Hr), s = it(() => e.route || o.value), a = On($l, 0), i = it(() => {
      let d = zo(a);
      const { matched: r } = s.value;
      let u;
      for (; (u = r[d]) && !u.components; )
        d++;
      return d;
    }), c = it(() => s.value.matched[i.value]);
    Ja($l, it(() => i.value + 1)), Ja(dv, c), Ja(Hr, s);
    const l = c1();
    return Hg(() => [l.value, c.value, e.name], ([d, r, u], [g, m, p]) => {
      r && (r.instances[u] = d, m && m !== r && d && d === g && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), d && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !Xt(r, m) || !g) && (r.enterCallbacks[u] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, r = e.name, u = c.value, g = u && u.components[r];
      if (!g)
        return El(n.default, { Component: g, route: d });
      const m = u.props[r], p = m ? m === !0 ? d.params : typeof m == "function" ? m(d) : m : null, w = Og(g, j({}, p, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (u.instances[r] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && kt && w.ref) {
        const f = {
          depth: i.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (De(w.ref) ? w.ref.map((C) => C.i) : [w.ref.i]).forEach((C) => {
          C.__vrv_devtools = f;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        El(n.default, { Component: w, route: d }) || w
      );
    };
  }
});
function El(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const vv = _v;
function Sv() {
  const e = Ug(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    z(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Jn(e, t) {
  const n = j({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Dv(o, ["instances", "children", "aliasOf"]))
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
function fs(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let yv = 0;
function Cv(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = yv++;
  a1({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((r, u) => {
      r.instanceData && r.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Jn(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        r.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: em
        });
      }
      De(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
        let m = om, p = "";
        g.isExactActive ? (m = nm, p = "This is exactly active") : g.isActive && (m = tm, p = "This link is active"), r.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), Hg(t.currentRoute, () => {
      l(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((r, u) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: u.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: r },
          groupId: u.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((r, u) => {
      const g = {
        guard: fs("beforeEach"),
        from: Jn(u, "Current Location during this navigation"),
        to: Jn(r, "Target location")
      };
      Object.defineProperty(r.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: r.fullPath,
          data: g,
          groupId: r.meta.__navigationId
        }
      });
    }), t.afterEach((r, u, g) => {
      const m = {
        guard: fs("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = fs("❌")) : m.status = fs("✅"), m.from = Jn(u, "Current Location during this navigation"), m.to = Jn(r, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: r.fullPath,
          time: s.now(),
          data: m,
          logType: g ? "warning" : "default",
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
    function l() {
      if (!d)
        return;
      const r = d;
      let u = n.getRoutes().filter((g) => !g.parent);
      u.forEach(im), r.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        jr(g, r.filter.toLowerCase())
      ))), u.forEach((g) => am(g, t.currentRoute.value)), r.rootNodes = u.map(sm);
    }
    let d;
    s.on.getInspectorTree((r) => {
      d = r, r.app === e && r.inspectorId === c && l();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        g && (r.state = {
          options: xv(g)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function kv(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function xv(e) {
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
        display: e.keys.map((o) => `${o.name}${kv(o)}`).join(" "),
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
const em = 15485081, tm = 2450411, nm = 8702998, bv = 2282478, om = 16486972, $v = 6710886;
function sm(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: bv
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: om
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: em
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: nm
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: tm
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: $v
  });
  let o = n.__vd_id;
  return o == null && (o = String(Vv++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(sm)
  };
}
let Vv = 0;
const Av = /^\/(.*)\/([a-z]*)$/;
function am(e, t) {
  const n = t.matched.length && Xt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Xt(o, e.record))), e.children.forEach((o) => am(o, t));
}
function im(e) {
  e.__vd_match = !1, e.children.forEach(im);
}
function jr(e, t) {
  const n = String(e.re).match(Av);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => jr(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = jo(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => jr(i, t));
}
function Dv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Ev(e) {
  const t = H1(e.routes, e), n = e.parseQuery || lv, o = e.stringifyQuery || bl, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Qn(), i = Qn(), c = Qn(), l = l1(Vt);
  let d = Vt;
  kt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = Za.bind(null, (_) => "" + _), u = Za.bind(null, cv), g = (
    // @ts-expect-error: intentionally avoid the type check
    Za.bind(null, jo)
  );
  function m(_, V) {
    let b, E;
    return Gg(_) ? (b = t.getRecordMatcher(_), E = V) : E = _, t.addRoute(E, b);
  }
  function p(_) {
    const V = t.getRecordMatcher(_);
    V ? t.removeRoute(V) : {}.NODE_ENV !== "production" && z(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function w(_) {
    return !!t.getRecordMatcher(_);
  }
  function f(_, V) {
    if (V = j({}, V || l.value), typeof _ == "string") {
      const N = ei(n, _, V.path), X = t.resolve({ path: N.path }, V), Oe = s.createHref(N.fullPath);
      return {}.NODE_ENV !== "production" && (Oe.startsWith("//") ? z(`Location "${_}" resolved to "${Oe}". A resolved location cannot start with multiple slashes.`) : X.matched.length || z(`No match found for location with path "${_}"`)), j(N, X, {
        params: g(X.params),
        hash: jo(N.hash),
        redirectedFrom: void 0,
        href: Oe
      });
    }
    let b;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && z(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), b = j({}, _, {
        path: ei(n, _.path, V.path).path
      });
    else {
      const N = j({}, _.params);
      for (const X in N)
        N[X] == null && delete N[X];
      b = j({}, _, {
        params: u(N)
      }), V.params = u(V.params);
    }
    const E = t.resolve(b, V), R = _.hash || "";
    ({}).NODE_ENV !== "production" && R && !R.startsWith("#") && z(`A \`hash\` should always start with the character "#". Replace "${R}" with "#${R}".`), E.params = r(g(E.params));
    const Q = h1(o, j({}, _, {
      hash: av(R),
      path: E.path
    })), I = s.createHref(Q);
    return {}.NODE_ENV !== "production" && (I.startsWith("//") ? z(`Location "${_}" resolved to "${I}". A resolved location cannot start with multiple slashes.`) : E.matched.length || z(`No match found for location with path "${"path" in _ ? _.path : _}"`)), j({
      fullPath: Q,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: R,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === bl ? uv(_.query) : _.query || {}
      )
    }, E, {
      redirectedFrom: void 0,
      href: I
    });
  }
  function v(_) {
    return typeof _ == "string" ? ei(n, _, l.value.path) : j({}, _);
  }
  function C(_, V) {
    if (d !== _)
      return Hn(8, {
        from: V,
        to: _
      });
  }
  function x(_) {
    return U(_);
  }
  function P(_) {
    return x(j(v(_), { replace: !0 }));
  }
  function L(_) {
    const V = _.matched[_.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: b } = V;
      let E = typeof b == "function" ? b(_) : b;
      if (typeof E == "string" && (E = E.includes("?") || E.includes("#") ? E = v(E) : (
        // force empty params
        { path: E }
      ), E.params = {}), {}.NODE_ENV !== "production" && !("path" in E) && !("name" in E))
        throw z(`Invalid redirect found:
${JSON.stringify(E, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return j({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in E ? {} : _.params
      }, E);
    }
  }
  function U(_, V) {
    const b = d = f(_), E = l.value, R = _.state, Q = _.force, I = _.replace === !0, N = L(b);
    if (N)
      return U(
        j(v(N), {
          state: typeof N == "object" ? j({}, R, N.state) : R,
          force: Q,
          replace: I
        }),
        // keep original redirectedFrom if it exists
        V || b
      );
    const X = b;
    X.redirectedFrom = V;
    let Oe;
    return !Q && hl(o, E, b) && (Oe = Hn(16, { to: X, from: E }), Le(
      E,
      E,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Oe ? Promise.resolve(Oe) : Te(X, E)).catch((ce) => dt(ce) ? (
      // navigation redirects still mark the router as ready
      dt(
        ce,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ce : ue(ce)
    ) : (
      // reject any unknown error
      Re(ce, X, E)
    )).then((ce) => {
      if (ce) {
        if (dt(
          ce,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          hl(o, f(ce.to), X) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (z(`Detected a possibly infinite redirection in a navigation guard when going from "${E.fullPath}" to "${X.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : U(
            // keep options
            j({
              // preserve an existing replacement but allow the redirect to override it
              replace: I
            }, v(ce.to), {
              state: typeof ce.to == "object" ? j({}, R, ce.to.state) : R,
              force: Q
            }),
            // preserve the original redirectedFrom if any
            V || X
          );
      } else
        ce = H(X, E, !0, I, R);
      return _e(X, E, ce), ce;
    });
  }
  function A(_, V) {
    const b = C(_, V);
    return b ? Promise.reject(b) : Promise.resolve();
  }
  function B(_) {
    const V = Jt.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(_) : _();
  }
  function Te(_, V) {
    let b;
    const [E, R, Q] = Tv(_, V);
    b = ti(E.reverse(), "beforeRouteLeave", _, V);
    for (const N of E)
      N.leaveGuards.forEach((X) => {
        b.push(Gt(X, _, V));
      });
    const I = A.bind(null, _, V);
    return b.push(I), xt(b).then(() => {
      b = [];
      for (const N of a.list())
        b.push(Gt(N, _, V));
      return b.push(I), xt(b);
    }).then(() => {
      b = ti(R, "beforeRouteUpdate", _, V);
      for (const N of R)
        N.updateGuards.forEach((X) => {
          b.push(Gt(X, _, V));
        });
      return b.push(I), xt(b);
    }).then(() => {
      b = [];
      for (const N of Q)
        if (N.beforeEnter)
          if (De(N.beforeEnter))
            for (const X of N.beforeEnter)
              b.push(Gt(X, _, V));
          else
            b.push(Gt(N.beforeEnter, _, V));
      return b.push(I), xt(b);
    }).then(() => (_.matched.forEach((N) => N.enterCallbacks = {}), b = ti(Q, "beforeRouteEnter", _, V), b.push(I), xt(b))).then(() => {
      b = [];
      for (const N of i.list())
        b.push(Gt(N, _, V));
      return b.push(I), xt(b);
    }).catch((N) => dt(
      N,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? N : Promise.reject(N));
  }
  function _e(_, V, b) {
    c.list().forEach((E) => B(() => E(_, V, b)));
  }
  function H(_, V, b, E, R) {
    const Q = C(_, V);
    if (Q)
      return Q;
    const I = V === Vt, N = kt ? history.state : {};
    b && (E || I ? s.replace(_.fullPath, j({
      scroll: I && N && N.scroll
    }, R)) : s.push(_.fullPath, R)), l.value = _, Le(_, V, b, I), ue();
  }
  let Y;
  function oe() {
    Y || (Y = s.listen((_, V, b) => {
      if (!Gn.listening)
        return;
      const E = f(_), R = L(E);
      if (R) {
        U(j(R, { replace: !0 }), E).catch(Uo);
        return;
      }
      d = E;
      const Q = l.value;
      kt && k1(fl(Q.fullPath, b.delta), ba()), Te(E, Q).catch((I) => dt(
        I,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? I : dt(
        I,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (U(
        I.to,
        E
        // avoid an uncaught rejection, let push call triggerError
      ).then((N) => {
        dt(
          N,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !b.delta && b.type === Ho.pop && s.go(-1, !1);
      }).catch(Uo), Promise.reject()) : (b.delta && s.go(-b.delta, !1), Re(I, E, Q))).then((I) => {
        I = I || H(
          // after navigation, all matched components are resolved
          E,
          Q,
          !1
        ), I && (b.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !dt(
          I,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-b.delta, !1) : b.type === Ho.pop && dt(
          I,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), _e(E, Q, I);
      }).catch(Uo);
    }));
  }
  let Ue = Qn(), _n = Qn(), Je;
  function Re(_, V, b) {
    ue(_);
    const E = _n.list();
    return E.length ? E.forEach((R) => R(_, V, b)) : ({}.NODE_ENV !== "production" && z("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function Z() {
    return Je && l.value !== Vt ? Promise.resolve() : new Promise((_, V) => {
      Ue.add([_, V]);
    });
  }
  function ue(_) {
    return Je || (Je = !_, oe(), Ue.list().forEach(([V, b]) => _ ? b(_) : V()), Ue.reset()), _;
  }
  function Le(_, V, b, E) {
    const { scrollBehavior: R } = e;
    if (!kt || !R)
      return Promise.resolve();
    const Q = !b && x1(fl(_.fullPath, 0)) || (E || !b) && history.state && history.state.scroll || null;
    return d1().then(() => R(_, V, Q)).then((I) => I && C1(I)).catch((I) => Re(I, _, V));
  }
  const ee = (_) => s.go(_);
  let vn;
  const Jt = /* @__PURE__ */ new Set(), Gn = {
    currentRoute: l,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: x,
    replace: P,
    go: ee,
    back: () => ee(-1),
    forward: () => ee(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: _n.add,
    isReady: Z,
    install(_) {
      const V = this;
      _.component("RouterLink", hv), _.component("RouterView", vv), _.config.globalProperties.$router = V, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => zo(l)
      }), kt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !vn && l.value === Vt && (vn = !0, x(s.location).catch((R) => {
        ({}).NODE_ENV !== "production" && z("Unexpected error when starting the router:", R);
      }));
      const b = {};
      for (const R in Vt)
        Object.defineProperty(b, R, {
          get: () => l.value[R],
          enumerable: !0
        });
      _.provide($a, V), _.provide(Zg, u1(b)), _.provide(Hr, l);
      const E = _.unmount;
      Jt.add(_), _.unmount = function() {
        Jt.delete(_), Jt.size < 1 && (d = Vt, Y && Y(), Y = null, l.value = Vt, vn = !1, Je = !1), E();
      }, {}.NODE_ENV !== "production" && kt && Cv(_, V, t);
    }
  };
  function xt(_) {
    return _.reduce((V, b) => V.then(() => B(b)), Promise.resolve());
  }
  return Gn;
}
function Tv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((d) => Xt(d, c)) ? o.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((d) => Xt(d, l)) || s.push(l));
  }
  return [n, o, s];
}
function we() {
  return On($a);
}
const Lv = {
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
}, Bv = {
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
}, Pv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], Fv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, Mv = {
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
}, Nv = {
  languages: Lv,
  scriptgroups: Bv,
  rtlscripts: Pv,
  regiongroups: Fv,
  territories: Mv
};
var he = Nv;
function Yo(e) {
  return !!he.languages[e];
}
function Yt(e) {
  return Yo(e) && he.languages[e].length === 1 ? he.languages[e][0] : !1;
}
function Iv() {
  return he.languages;
}
function Qo(e) {
  var t = Yt(e);
  return t ? Qo(t) : Yo(e) ? he.languages[e][0] : "Zyyy";
}
function uc(e) {
  var t = Yt(e);
  return t ? uc(t) : Yo(e) && he.languages[e][1] || "UNKNOWN";
}
function qo(e) {
  var t = Yt(e);
  return t ? qo(t) : Yo(e) && he.languages[e][2] || e;
}
function zv() {
  var e, t = {};
  for (e in he.languages)
    Yt(e) || (t[e] = qo(e));
  return t;
}
function rm(e) {
  var t, n, o = [];
  for (t in he.languages)
    if (!Yt(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Qo(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Uv(e) {
  return rm([e]);
}
function cm(e) {
  var t;
  for (t in he.scriptgroups)
    if (he.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function dc(e) {
  return cm(Qo(e));
}
function lm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Yt(n) || n, a = dc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function um(e) {
  var t, n, o, s = {};
  for (t in he.languages)
    if (!Yt(t)) {
      for (n = 0; n < e.length; n++)
        if (uc(t).includes(e[n])) {
          o = dc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Rv(e) {
  return um([e]);
}
function Ov(e) {
  var t, n, o, s = [];
  for (t = lm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Hv(e, t) {
  var n = qo(e) || e, o = qo(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function dm(e) {
  return he.rtlscripts.includes(Qo(e));
}
function jv(e) {
  return dm(e) ? "rtl" : "ltr";
}
function qv(e) {
  return he.territories[e] || [];
}
function Gv(e, t) {
  t.target ? he.languages[e] = [t.target] : he.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: Gv,
  getAutonym: qo,
  getAutonyms: zv,
  getDir: jv,
  getGroupOfScript: cm,
  getLanguages: Iv,
  getLanguagesByScriptGroup: lm,
  getLanguagesByScriptGroupInRegion: Rv,
  getLanguagesByScriptGroupInRegions: um,
  getLanguagesInScript: Uv,
  getLanguagesInScripts: rm,
  getLanguagesInTerritory: qv,
  getRegions: uc,
  getScript: Qo,
  getScriptGroupOfLanguage: dc,
  isKnown: Yo,
  isRedirect: Yt,
  isRtl: dm,
  sortByScriptGroup: Ov,
  sortByAutonym: Hv
};
const Wv = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), d = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, Xv = (e) => {
  const t = Wv(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
}, Kv = window.Vue.inject, Yv = window.Vue.reactive;
var Qv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, gm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Qv, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(u) {
        this.locale = u;
      }
      convertPlural(u, g) {
        const m = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const w = g[h];
          if (m.test(w)) {
            if (parseInt(w.slice(0, w.indexOf("=")), 10) === u)
              return w.slice(w.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let p = this.getPluralForm(u, this.locale);
        return p = Math.min(p, g.length - 1), g[p];
      }
      getPluralForm(u, g) {
        const m = new Intl.PluralRules(g), p = m.resolvedOptions().pluralCategories, h = m.select(u);
        return ["zero", "one", "two", "few", "many", "other"].filter((w) => p.includes(w)).indexOf(h);
      }
      convertNumber(u, g = !1) {
        let m = this.digitTransformTable(this.locale), p = "";
        if (g) {
          if (parseFloat(u, 10) === u || !m)
            return u;
          const h = [];
          for (const f in m)
            h[m[f]] = f;
          m = h;
          const w = String(u);
          for (let f = 0; f < w.length; f++)
            p += m[w[f]] || w[f];
          return parseFloat(p, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const w = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : w, p = new Intl.NumberFormat(h).format(u), p === "NaN" && (p = u), p;
        }
      }
      convertGrammar(u, g) {
        return u;
      }
      gender(u, g) {
        if (!g || g.length === 0)
          return "";
        for (; g.length < 2; )
          g.push(g[g.length - 1]);
        return u === "male" ? g[0] : u === "female" ? g[1] : g.length === 3 ? g[2] : g[0];
      }
      digitTransformTable(u) {
        return !!n[u] && n[u].split("");
      }
    }
    var a = { bs: class extends s {
      convertGrammar(r, u) {
        switch (u) {
          case "instrumental":
            r = "s " + r;
            break;
          case "lokativ":
            r = "o " + r;
        }
        return r;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(r, u) {
        switch (u) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, fi: class extends s {
      convertGrammar(r, u) {
        let g = r.match(/[aou][^äöy]*$/i);
        const m = r;
        switch (r.match(/wiki$/i) && (g = !1), r.match(/[bcdfghjklmnpqrstvwxz]$/i) && (r += "i"), u) {
          case "genitive":
            r += "n";
            break;
          case "elative":
            r += g ? "sta" : "stä";
            break;
          case "partitive":
            r += g ? "a" : "ä";
            break;
          case "illative":
            r += r.slice(-1) + "n";
            break;
          case "inessive":
            r += g ? "ssa" : "ssä";
            break;
          default:
            r = m;
        }
        return r;
      }
    }, ga: class extends s {
      convertGrammar(r, u) {
        if (u === "ainmlae")
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
      convertGrammar(r, u) {
        switch (u) {
          case "prefixed":
          case "תחילית":
            r.slice(0, 1) === "ו" && r.slice(0, 2) !== "וו" && (r = "ו" + r), r.slice(0, 1) === "ה" && (r = r.slice(1)), (r.slice(0, 1) < "א" || r.slice(0, 1) > "ת") && (r = "־" + r);
        }
        return r;
      }
    }, hsb: class extends s {
      convertGrammar(r, u) {
        switch (u) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, hu: class extends s {
      convertGrammar(r, u) {
        switch (u) {
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
      convertGrammar(r, u) {
        return u === "genitive" && (r.slice(-1) === "ա" ? r = r.slice(0, -1) + "այի" : r.slice(-1) === "ո" ? r = r.slice(0, -1) + "ոյի" : r.slice(-4) === "գիրք" ? r = r.slice(0, -4) + "գրքի" : r += "ի"), r;
      }
    }, la: class extends s {
      convertGrammar(r, u) {
        switch (u) {
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
      convertGrammar(r, u) {
        let g, m, p, h;
        switch (g = "мæ", m = "", p = "", h = "", r.match(/тæ$/i) ? (r = r.slice(0, -1), g = "æм") : r.match(/[аæеёиоыэюя]$/i) ? m = "й" : r.match(/у$/i) ? r.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : r.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (p = "-"), u) {
          case "genitive":
            h = p + m + "ы";
            break;
          case "dative":
            h = p + m + "æн";
            break;
          case "allative":
            h = p + g;
            break;
          case "ablative":
            h = m === "й" ? p + m + "æ" : p + m + "æй";
            break;
          case "superessive":
            h = p + m + "ыл";
            break;
          case "equative":
            h = p + m + "ау";
            break;
          case "comitative":
            h = p + "имæ";
        }
        return r + h;
      }
    }, ru: class extends s {
      convertGrammar(r, u) {
        return u === "genitive" && (r.slice(-1) === "ь" ? r = r.slice(0, -1) + "я" : r.slice(-2) === "ия" ? r = r.slice(0, -2) + "ии" : r.slice(-2) === "ка" ? r = r.slice(0, -2) + "ки" : r.slice(-2) === "ти" ? r = r.slice(0, -2) + "тей" : r.slice(-2) === "ды" ? r = r.slice(0, -2) + "дов" : r.slice(-3) === "ник" && (r = r.slice(0, -3) + "ника")), r;
      }
    }, sl: class extends s {
      convertGrammar(r, u) {
        switch (u) {
          case "mestnik":
            r = "o " + r;
            break;
          case "orodnik":
            r = "z " + r;
        }
        return r;
      }
    }, uk: class extends s {
      convertGrammar(r, u) {
        switch (u) {
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
      constructor(u) {
        this.locale = u, this.language = new (a[u] || a.default)(u);
      }
      emit(u, g) {
        let m, p, h;
        switch (typeof u) {
          case "string":
          case "number":
            m = u;
            break;
          case "object":
            if (p = u.slice(1).map((w) => this.emit(w, g)), h = u[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            m = this[h](p, g);
            break;
          case "undefined":
            m = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof u);
        }
        return m;
      }
      concat(u) {
        let g = "";
        return u.forEach((m) => {
          g += m;
        }), g;
      }
      replace(u, g) {
        const m = parseInt(u[0], 10);
        return m < g.length ? g[m] : "$" + (m + 1);
      }
      plural(u) {
        const g = parseFloat(this.language.convertNumber(u[0], 10)), m = u.slice(1);
        return m.length ? this.language.convertPlural(g, m) : "";
      }
      gender(u) {
        const g = u[0], m = u.slice(1);
        return this.language.gender(g, m);
      }
      grammar(u) {
        const g = u[0], m = u[1];
        return m && g && this.language.convertGrammar(m, g);
      }
      wikilink(u) {
        let g, m = u[0];
        m.charAt(0) === ":" && (m = m.slice(1));
        const p = `./${m}`;
        return g = u.length === 1 ? m : u[1], `<a href="${p}" title="${m}">${g}</a>`;
      }
      extlink(u) {
        if (u.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${u[0]}">${u[1]}</a>`;
      }
      bidi(u) {
        const g = function(m) {
          const p = m.match(i);
          return p ? p[2] === void 0 ? "ltr" : "rtl" : null;
        }(u[0]);
        return g === "ltr" ? "‪" + u[0] + "‬" : g === "rtl" ? "‫" + u[0] + "‬" : u[0];
      }
      formatnum(u) {
        const g = !!u[1] && u[1] === "R", m = u[0];
        return typeof m == "string" || typeof m == "number" ? this.language.convertNumber(m, g) : m;
      }
      htmlattributes(u) {
        const g = {};
        for (let m = 0, p = u.length; m < p; m += 2)
          g[u[m]] = u[m + 1];
        return g;
      }
      htmlelement(u) {
        const g = u.shift(), m = u.shift();
        let p = u, h = "";
        for (const w in m)
          h += ` ${w}="${m[w]}"`;
        return Array.isArray(p) || (p = [p]), `<${g}${h}>${p.join("")}</${g}>`;
      }
    }
    class l {
      constructor(u, { wikilinks: g = !1 } = {}) {
        this.locale = u, this.wikilinks = g, this.emitter = new c(this.locale);
      }
      parse(u, g) {
        if (u.includes("{{") || u.includes("<") || this.wikilinks && u.includes("[")) {
          const m = function(p, { wikilinks: h = !1 } = {}) {
            let w = 0;
            function f(S) {
              return () => {
                for (let M = 0; M < S.length; M++) {
                  const Se = S[M]();
                  if (Se !== null)
                    return Se;
                }
                return null;
              };
            }
            function v(S) {
              const M = w, Se = [];
              for (let lt = 0; lt < S.length; lt++) {
                const ut = S[lt]();
                if (ut === null)
                  return w = M, null;
                Se.push(ut);
              }
              return Se;
            }
            function C(S, M) {
              return () => {
                const Se = w, lt = [];
                let ut = M();
                for (; ut !== null; )
                  lt.push(ut), ut = M();
                return lt.length < S ? (w = Se, null) : lt;
              };
            }
            function x(S) {
              const M = S.length;
              return () => {
                let Se = null;
                return p.slice(w, w + M) === S && (Se = S, w += M), Se;
              };
            }
            function P(S) {
              return () => {
                const M = p.slice(w).match(S);
                return M === null ? null : (w += M[0].length, M[0]);
              };
            }
            const L = P(/^\s+/), U = x("|"), A = x(":"), B = x("\\"), Te = P(/^./), _e = x("$"), H = P(/^\d+/), Y = x('"'), oe = x("'"), Ue = P(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), _n = P(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Je = f([Re, P(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Re() {
              const S = v([B, Te]);
              return S === null ? null : S[1];
            }
            const Z = f([Re, _n]), ue = f([Re, Ue]);
            function Le() {
              const S = v([_e, H]);
              return S === null ? null : ["REPLACE", parseInt(S[1], 10) - 1];
            }
            const ee = (vn = P(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Jt = function(S) {
              return S.toString();
            }, () => {
              const S = vn();
              return S === null ? null : Jt(S);
            });
            var vn, Jt;
            function Gn() {
              const S = v([U, C(0, is)]);
              if (S === null)
                return null;
              const M = S[1];
              return M.length > 1 ? ["CONCAT"].concat(M) : M[0];
            }
            function xt() {
              const S = v([ee, A, Le]);
              return S === null ? null : [S[0], S[2]];
            }
            function _() {
              const S = v([ee, A, is]);
              return S === null ? null : [S[0], S[2]];
            }
            function V() {
              const S = v([ee, A]);
              return S === null ? null : [S[0], ""];
            }
            const b = f([function() {
              const S = v([f([xt, _, V]), C(0, Gn)]);
              return S === null ? null : S[0].concat(S[1]);
            }, function() {
              const S = v([ee, C(0, Gn)]);
              return S === null ? null : [S[0]].concat(S[1]);
            }]), E = x("{{"), R = x("}}"), Q = x("[["), I = x("]]"), N = x("["), X = x("]");
            function Oe() {
              const S = v([E, b, R]);
              return S === null ? null : S[1];
            }
            const ce = f([function() {
              const S = v([C(1, is), U, C(1, as)]);
              return S === null ? null : [["CONCAT"].concat(S[0]), ["CONCAT"].concat(S[2])];
            }, function() {
              const S = v([C(1, is)]);
              return S === null ? null : [["CONCAT"].concat(S[0])];
            }]);
            function xc() {
              let S = null;
              const M = v([Q, ce, I]);
              if (M !== null) {
                const Se = M[1];
                S = ["WIKILINK"].concat(Se);
              }
              return S;
            }
            function bc() {
              let S = null;
              const M = v([N, C(1, Hm), L, C(1, as), X]);
              return M !== null && (S = ["EXTLINK", M[1].length === 1 ? M[1][0] : ["CONCAT"].concat(M[1]), ["CONCAT"].concat(M[3])]), S;
            }
            const Aa = P(/^[A-Za-z]+/);
            function zm() {
              const S = P(/^[^"]*/), M = v([Y, S, Y]);
              return M === null ? null : M[1];
            }
            function Um() {
              const S = P(/^[^']*/), M = v([oe, S, oe]);
              return M === null ? null : M[1];
            }
            function Rm() {
              const S = P(/^\s*=\s*/), M = v([L, Aa, S, f([zm, Um])]);
              return M === null ? null : [M[1], M[3]];
            }
            function Om() {
              const S = C(0, Rm)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], S);
            }
            const Hm = f([Oe, Le, xc, bc, function() {
              const S = C(1, Je)();
              return S === null ? null : S.join("");
            }]), as = f([Oe, Le, xc, bc, function() {
              let S = null;
              const M = w, Se = x("<"), lt = P(/^\/?/), ut = P(/^\s*>/), Da = v([Se, Aa, Om, lt, ut]);
              if (Da === null)
                return null;
              const Vc = w, Ac = Da[1], Ea = C(0, as)(), jm = w, Dc = v([x("</"), Aa, ut]);
              if (Dc === null)
                return ["CONCAT", p.slice(M, Vc)].concat(Ea);
              const qm = w, Gm = Dc[1], Ec = Da[2];
              if (function(Zt, rs, Ta, La = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Zt = Zt.toLowerCase()) !== (rs = rs.toLowerCase()) || La.allowedHtmlElements.indexOf(Zt) === -1)
                  return !1;
                const Wm = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let cs = 0, Xm = Ta.length; cs < Xm; cs += 2) {
                  const Ba = Ta[cs];
                  if (La.allowedHtmlCommonAttributes.indexOf(Ba) === -1 && (La.allowedHtmlAttributesByElement[Zt] || []).indexOf(Ba) === -1 || Ba === "style" && Ta[cs + 1].search(Wm) !== -1)
                    return !1;
                }
                return !0;
              }(Ac, Gm, Ec.slice(1)))
                S = ["HTMLELEMENT", Ac, Ec].concat(Ea);
              else {
                const Zt = (rs) => rs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                S = ["CONCAT", Zt(p.slice(M, Vc))].concat(Ea, Zt(p.slice(jm, qm)));
              }
              return S;
            }, function() {
              const S = C(1, ue)();
              return S === null ? null : S.join("");
            }]), is = f([Oe, Le, function() {
              const S = C(1, Z)();
              return S === null ? null : S.join("");
            }]), $c = function() {
              const S = C(0, as)();
              return S === null ? null : ["CONCAT"].concat(S);
            }();
            if ($c === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return $c;
          }(u, { wikilinks: this.wikilinks });
          return this.emitter.emit(m, g);
        }
        return this.simpleParse(u, g);
      }
      simpleParse(u, g) {
        return u.replace(/\$(\d+)/g, (m, p) => {
          const h = parseInt(p, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + p;
        });
      }
    }
    class d {
      constructor(u) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(u, g) {
        if (typeof u != "object")
          throw new Error("Invalid message source. Must be an object");
        if (g) {
          if (!/^[a-zA-Z0-9-]+$/.test(g))
            throw new Error(`Invalid locale ${g}`);
          for (const m in u)
            if (m.indexOf("@") !== 0) {
              if (typeof u[m] == "object")
                return this.load(u);
              if (typeof u[m] != "string")
                throw new Error(`Invalid message for message ${m} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), u)) : this.sourceMap.set(g, u);
        } else
          for (g in u)
            this.load(u[g], g);
      }
      getMessage(u, g) {
        const m = this.sourceMap.get(g);
        return m ? m[u] : null;
      }
      hasLocale(u) {
        return this.sourceMap.has(u);
      }
    }
    return class {
      constructor(r, { finalFallback: u = "en", messages: g, wikilinks: m = !1 } = {}) {
        this.locale = r, this.parser = new l(this.locale, { wikilinks: m }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = u, this.wikilinks = m;
      }
      load(r, u) {
        return this.messageStore.load(r, u || this.locale);
      }
      i18n(r, ...u) {
        return this.parser.parse(this.getMessage(r), u);
      }
      setLocale(r) {
        this.locale = r, this.parser = new l(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(r) {
        let u = this.locale, g = 0;
        const m = this.getFallbackLocales(this.locale);
        for (; u; ) {
          const p = u.split("-");
          let h = p.length;
          do {
            const w = p.slice(0, h).join("-"), f = this.messageStore.getMessage(r, w);
            if (typeof f == "string")
              return f;
            h--;
          } while (h);
          u = m[g], g++;
        }
        return r;
      }
      registerParserPlugin(r, u) {
        c.prototype[r] = u;
      }
    };
  });
})(gm);
var Jv = gm.exports;
const Tl = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, mm = Symbol("banana-context");
function Ee() {
  const e = Kv(mm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Zv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Yv(new Jv(e.locale, e));
  return {
    install: (n) => {
      n.provide(mm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Tl(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Tl(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const eS = window.Vuex.useStore, tS = window.Vue.computed, nS = {
  name: "CxTranslationWork",
  components: { MwRow: T, MwCol: y, MwThumbnail: tc, MwIcon: ie },
  props: {
    translation: {
      type: Xo,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = eS(), n = (a, i) => {
      const c = t.getters["mediawiki/getPage"](a, i);
      return c == null ? void 0 : c.thumbnail;
    }, o = Ee();
    return {
      timeagoMessage: tS(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, i = Xv(e.translation.startTimestamp);
        return o.i18n(
          a[i.postfix],
          i.value
        );
      }),
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      getImage: n,
      mwIconArrowForward: Kr,
      mwIconArrowNext: Yr
    };
  }
}, _s = window.Vue.resolveComponent, yn = window.Vue.createVNode, gt = window.Vue.createElementVNode, Ll = window.Vue.renderSlot, Bl = window.Vue.withModifiers, ni = window.Vue.toDisplayString, oi = window.Vue.withCtx, oS = window.Vue.openBlock, sS = window.Vue.createElementBlock, aS = window.Vue.createCommentVNode, iS = { class: "col shrink pe-4" }, rS = { class: "col" }, cS = { class: "cx-translation__details column justify-between ma-0" }, lS = { class: "row ma-0" }, uS = { class: "col grow" }, dS = { class: "col shrink ps-2" }, gS = ["dir", "textContent"], mS = ["dir", "textContent"], pS = ["textContent"];
function hS(e, t, n, o, s, a) {
  const i = _s("mw-thumbnail"), c = _s("mw-icon"), l = _s("mw-col"), d = _s("mw-row");
  return n.translation ? (oS(), sS("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = Bl((r) => e.$emit("click"), ["stop"]))
  }, [
    gt("div", iS, [
      yn(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    gt("div", rS, [
      gt("div", cS, [
        gt("div", lS, [
          gt("div", uS, [
            Ll(e.$slots, "title")
          ]),
          gt("div", dS, [
            yn(c, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = Bl((r) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Ll(e.$slots, "mid-content"),
        yn(d, { class: "cx-translation__footer ma-0" }, {
          default: oi(() => [
            yn(l, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: oi(() => [
                gt("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: ni(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, gS),
                yn(c, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                gt("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: ni(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, mS)
              ]),
              _: 1
            }),
            yn(l, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: oi(() => [
                gt("span", {
                  textContent: ni(o.timeagoMessage)
                }, null, 8, pS)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : aS("", !0);
}
const pm = /* @__PURE__ */ D(nS, [["render", hS]]);
const Zn = window.Vue.unref, Pl = window.Vue.toDisplayString, wS = window.Vue.normalizeClass, fS = window.Vue.createElementVNode, si = window.Vue.openBlock, _S = window.Vue.createElementBlock, Fl = window.Vue.createCommentVNode, Ml = window.Vue.createVNode, vs = window.Vue.withCtx, Nl = window.Vue.createBlock, vS = ["lang", "textContent"], SS = ["lang", "textContent"], yS = window.Vue.computed, CS = window.Vue.inject, kS = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: oc,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = CS("colors").gray200, s = yS(
      () => {
        var a;
        return ((a = t.translation.progress) == null ? void 0 : a.any) * 100 || 0;
      }
    );
    return (a, i) => (si(), Nl(pm, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Zn(wg),
      onActionIconClicked: i[0] || (i[0] = (c) => a.$emit("delete-translation"))
    }, {
      title: vs(() => [
        fS("h5", {
          class: wS(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Pl(e.translation.sourceTitle)
        }, null, 10, vS),
        e.translation.isLeadSectionTranslation ? Fl("", !0) : (si(), _S("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Pl(e.translation.sourceSectionTitle)
        }, null, 8, SS))
      ]),
      "mid-content": vs(() => [
        e.translation.progress ? (si(), Nl(Zn(T), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: vs(() => [
            Ml(Zn(y), null, {
              default: vs(() => [
                Ml(Zn(kg), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Zn(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Fl("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, xS = window.Vue.computed, bS = window.Vue.inject, Jo = () => {
  const e = bS("breakpoints");
  return { isDesktop: xS(
    () => !q.isMobileDomain() && e.value.tabletAndUp
  ) };
}, xe = window.Vue.computed;
function F(e) {
  const t = xe(() => e.state.application.sourceLanguage), n = xe(() => e.state.application.targetLanguage), o = xe(
    () => e.state.application.currentMTProvider
  ), s = xe(
    () => e.state.application.currentSectionSuggestion
  ), a = xe(
    () => e.state.application.currentSourceSection
  ), i = xe(
    () => O.getAutonym(t.value)
  ), c = xe(
    () => O.getAutonym(n.value)
  ), l = xe(
    () => {
      var p;
      return (p = a.value) == null ? void 0 : p.isTitleSelected;
    }
  ), d = xe(
    () => {
      var p;
      return (p = a.value) == null ? void 0 : p.selectedContentTranslationUnit;
    }
  ), r = xe(
    () => e.getters["application/getCurrentProposedTranslation"]
  ), u = xe(
    () => e.getters["application/getCurrentPage"]
  ), g = xe(
    () => e.getters["application/getCurrentTargetPage"]
  ), m = xe(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    currentSectionSuggestion: s,
    currentSourcePage: u,
    currentSourceSection: a,
    currentTargetPage: g,
    isSectionTitleSelected: l,
    previousRoute: m,
    proposedTranslation: r,
    selectedContentTranslationUnit: d,
    sourceLanguage: t,
    sourceLanguageAutonym: i,
    targetLanguage: n,
    targetLanguageAutonym: c
  };
}
const $S = window.Vuex.useStore, gc = () => {
  const e = $S(), t = we();
  return (n, o) => k(void 0, null, function* () {
    const { sourceLanguage: s, targetLanguage: a } = F(e), i = yield e.dispatch(
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage: s.value,
        targetLanguage: a.value,
        sourceTitle: n
      }
    );
    i && (e.dispatch("application/initializeSectionTranslation", i), t.push({
      name: "sx-translation-confirmer",
      query: { eventSource: o }
    }));
  });
}, Il = window.Vue.computed, VS = window.Vuex.useStore;
function Zo() {
  const e = VS(), t = Il(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Il(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const AS = (e, t) => {
  const n = new URLSearchParams(location.search), o = n.get("from"), s = n.get("to"), a = q.getCurrentWikiLanguageCode(), i = (g) => !e || Array.isArray(e) && e.includes(g), c = (g) => t.includes(g), l = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let d;
  return s && i(s) && c(s) ? d = s : i(a) && c(a) ? d = a : d = (e == null ? void 0 : e[0]) || l.targetLanguage, { sourceLanguage: [
    o,
    l.sourceLanguage,
    a,
    l.targetLanguage
  ].filter((g) => c(g)).find((g) => g !== d), targetLanguage: d };
}, qr = (e) => {
  if (!history.pushState)
    return;
  const t = e instanceof Xo, n = new URLSearchParams(location.search);
  n.set("page", e == null ? void 0 : e.sourceTitle), n.set("from", e == null ? void 0 : e.sourceLanguage), n.set("to", e == null ? void 0 : e.targetLanguage), n.set("sx", !0), t && n.set("draft", !0), n.delete("title"), fn(Object.fromEntries(n));
}, DS = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), fn(Object.fromEntries(n));
}, fn = (e) => {
  history.replaceState(
    {},
    document.title,
    sf("Special:ContentTranslation", e)
  );
}, hm = () => new URLSearchParams(location.search).get("force-quick-tutorial"), ES = window.Vuex.useStore, TS = () => {
  const e = ES();
  return () => k(void 0, null, function* () {
    const { sourceLanguage: t, targetLanguage: n } = F(e);
    let o = yield rt.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    const s = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getPublishedTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    o = o.filter(
      (l) => !s.includes(l) && !i.includes(l)
    );
    const c = new Hf({
      sourceLanguage: t,
      targetLanguage: n,
      seeds: o
    });
    return e.commit("suggestions/addSuggestionSeedCollection", c), c;
  });
}, LS = window.Vuex.useStore, mc = () => {
  const e = LS(), t = TS();
  return () => k(void 0, null, function* () {
    return yield t(), e.dispatch("suggestions/initializeSuggestions");
  });
}, es = window.Vuex.useStore, ts = (e, t, n, o, s = {}) => {
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
}, ns = (e, t, n) => {
  if (e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), !history.pushState)
    return;
  const o = new URLSearchParams(location.search);
  o.set("from", t), o.set("to", n), o.delete("title"), fn(Object.fromEntries(o));
}, wm = () => {
  const e = es(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Zo();
  return () => k(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = AS(
      t.value,
      n.value
    ), a = new URLSearchParams(location.search), i = a.get("page"), c = a.get("section");
    ts(
      o,
      s,
      i,
      c
    ) || ns(e, o, s);
  });
}, fm = () => {
  const e = es(), t = mc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = F(e);
    n === o && (n = a.value, o = s.value), ts(
      n,
      o,
      null,
      null
    ) || (ns(e, n, o), t());
  };
}, BS = () => {
  const e = es(), t = mc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      ts(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (ns(e, o, s), t());
    }
  );
}, PS = () => {
  const e = es();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    ts(
      n,
      o,
      s,
      null
    ) || ns(e, n, o);
  };
}, FS = () => {
  const e = es();
  return (t, n) => k(void 0, null, function* () {
    const { sourceLanguage: o, targetLanguage: s } = F(e);
    t === n && (t = s.value, n = o.value);
    const a = e.getters["application/getCurrentLanguageTitleGroup"], i = a.getTitleForLanguage(t);
    if (!ts(
      t,
      n,
      i,
      null
    )) {
      ns(e, t, n);
      let l = new Ye({
        sourceLanguage: o.value,
        targetLanguage: s.value,
        sourceTitle: i,
        missing: {}
      });
      a.hasLanguage(s.value) && (l = yield e.dispatch(
        "suggestions/loadSectionSuggestion",
        l
      )), e.dispatch("application/initializeSectionTranslation", l);
    }
  });
}, _m = "cx-translation-session-position-", vm = () => _m + mw.user.sessionId(), Sm = () => {
  const e = vm();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, MS = function() {
  const e = Sm();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(_m)).forEach((n) => mw.storage.remove(n));
  const t = vm();
  mw.storage.set(t, e + 1);
};
let Gr = null;
function NS(e) {
  if (Gr)
    return Promise.resolve(Gr);
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
function IS(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function zS(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = Sm(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.2.0",
    translation_type: "section",
    wiki_db: n,
    access_method: t,
    user_name: i,
    web_session_id: mw.user.sessionId(),
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: c
  };
  let d;
  return a ? d = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : d = NS(i).then((r) => {
    Gr = r, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: IS(r)
      })
    );
  }), d.then(() => {
    MS();
  });
}
const US = window.Vue.inject, ym = Symbol("event-logging-context"), ct = function() {
  const e = US(ym);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, RS = () => ({
  install: (e) => {
    e.provide(ym, zS);
  }
}), OS = (e, t, n, o) => k(void 0, null, function* () {
  var c, l, d;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((l = t.mt) == null ? void 0 : l.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, i = yield Ng(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), HS = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, jS = (e, t, n, o) => k(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return OS(e, t, n, o);
  HS(e, t);
}), qS = (e, t, n) => {
  const o = [];
  for (const s of e.sections || [])
    if (n.filter(
      (i) => i.pageSectionId === parseInt(s.id)
    ).length)
      for (const i of s.subSections) {
        const c = n.find(
          (d) => d.subSectionId === i.id
        );
        if (!c)
          continue;
        const l = jS(
          i,
          c,
          (t == null ? void 0 : t.title) || e.title,
          t.language
        );
        o.push(l);
      }
  return Promise.all(o);
}, GS = { restoreCorporaDraft: qS }, pc = () => (e, t, n, o = {}) => {
  q.setCXToken(e, t, n), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
};
function WS(e) {
  return e.$el = $(e), e;
}
function XS(e, t, n, o) {
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
function KS() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function YS(e, t) {
  return k(this, null, function* () {
    yield hc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = WS(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const QS = window.Vue.computed, JS = window.Vue.onMounted, ZS = window.Vue.ref;
function ey(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const ty = {
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
    const n = ZS(null);
    let o = null;
    const s = QS(() => o.getHtml()), a = () => {
      o.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, l = {
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
    return JS(() => k(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = ey;
      const r = yield YS(l, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = XS(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = KS, o.focus();
    })), { sxeditor: n };
  }
}, Wr = window.Vue.createElementVNode, ny = window.Vue.openBlock, oy = window.Vue.createElementBlock, sy = ["lang", "dir"], ay = /* @__PURE__ */ Wr("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Wr("div", { class: "toolbar" })
], -1), iy = ["lang", "dir"];
function ry(e, t, n, o, s, a) {
  return ny(), oy("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    ay,
    Wr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, iy)
  ], 8, sy);
}
const cy = /* @__PURE__ */ D(ty, [["render", ry]]);
function hc() {
  return mw.loader.using("mw.cx3.ve");
}
const ly = window.Vuex.useStore, Cm = () => {
  const e = ly();
  return (t, n) => k(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield hc(), new Promise((s) => {
      setTimeout(() => {
        const a = Fg.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, uy = window.Vuex.useStore, os = () => {
  const e = ct(), t = uy(), n = we(), {
    currentSourcePage: o,
    currentTargetPage: s,
    sourceLanguage: a,
    targetLanguage: i
  } = F(t), c = BS(), l = Cm(), { isDesktop: d } = Jo(), r = pc();
  return (u) => k(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: g,
      targetLanguage: m,
      sourceTitle: p,
      pageRevision: h,
      isLeadSectionTranslation: w
    } = u;
    if (d.value) {
      const C = {};
      w || (C.sourcesection = u.sourceSectionTitle), r(
        a.value,
        i.value,
        p,
        C
      );
      return;
    }
    q.unsetCXToken(
      g,
      m,
      p
    ), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (a.value !== g || i.value !== m) && c(u), t.dispatch("application/restoreSectionTranslation", u), e({
      event_type: "dashboard_translation_continue",
      translation_id: u.sectionTranslationId,
      translation_source_language: a.value,
      translation_source_title: p,
      translation_source_section: u.sourceSectionTitle,
      translation_target_language: i.value,
      translation_target_title: u.targetTitle,
      translation_target_section: u.targetSectionTitle
    }), yield t.dispatch("mediawiki/fetchPageContent", {
      sourceLanguage: a.value,
      targetLanguage: i.value,
      sourceTitle: p,
      revision: h
    }), yield l(a.value, p), u.restored || (yield Ke.fetchTranslationUnits(u.translationId).then(
      (C) => GS.restoreCorporaDraft(
        o.value,
        s.value,
        C
      )
    ).then(() => u.restored = !0));
    let f, v;
    u.isLeadSectionTranslation ? (f = o.value.leadSection, f.originalTitle = u.sourceTitle, v = u.targetTitle) : (f = o.value.getSectionByTitle(
      u.sourceSectionTitle
    ), v = u.targetSectionTitle), t.commit("application/setCurrentSourceSection", f), t.commit(
      "application/setCurrentSourceSectionTitleTranslation",
      v
    ), t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, dy = window.Vuex.useStore, wc = () => {
  const e = gc(), t = os(), n = dy(), { sourceLanguage: o, targetLanguage: s } = F(n), a = (u, g) => {
    const m = n.getters["translator/getDraftTranslation"](
      u,
      nc.LEAD_SECTION_DUMMY_TITLE,
      o.value,
      s.value
    );
    return m ? t(m) : e(u, g);
  };
  return {
    startRecentlyEditedSectionTranslation: (u) => a(u.title, "suggestion_recent_edit"),
    startNearbySectionTranslation: (u) => a(u.title, "suggestion_nearby"),
    startSearchResultSectionTranslation: (u) => a(u.title, "search_result"),
    startPageSuggestion: (u) => a(u.sourceTitle, "suggestion_no_seed"),
    startPublishedTranslation: (u) => a(u.sourceTitle, "continue_published")
  };
}, gy = window.Vuex.useStore, my = () => {
  const e = gy();
  return (t, n, o) => k(void 0, null, function* () {
    const s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o), a = e.getters["suggestions/getSectionSuggestionsForPublishedArticle"](t, n, o);
    let i = s || a;
    return i || (i = yield rt.fetchSectionSuggestions(
      t,
      o,
      n
    ), i || (i = new Ye({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o
    })), e.commit("suggestions/addSectionSuggestionForPublished", i)), i;
  });
}, py = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', hy = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', wy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', fy = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', _y = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', vy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', Sy = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', yy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', Cy = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', ky = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', xy = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', by = '<path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z"/><path d="m11 1 3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z"/>', $y = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', Vy = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', Ay = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', Dy = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', Ey = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', Ty = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', Ly = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', By = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', zl = py, km = hy, xm = {
  ltr: wy,
  shouldFlip: !0
}, Py = fy, Fy = _y, fc = vy, _c = Sy, bm = yy, My = Cy, Ny = {
  langCodeMap: {
    ar: ky
  },
  default: xy
}, $m = {
  ltr: by,
  shouldFlip: !0
}, Iy = $y, ss = {
  ltr: Vy,
  shouldFlip: !0
}, vc = {
  ltr: Ay,
  shouldFlip: !0
}, zy = {
  ltr: Dy,
  shouldFlip: !0
}, Vm = Ey, Uy = Ty, Ry = Ly, Oy = By;
const Ss = window.Vue.withModifiers, ai = window.Vue.toDisplayString, ii = window.Vue.createElementVNode, Be = window.Vue.unref, ys = window.Vue.openBlock, Ul = window.Vue.createBlock;
window.Vue.createCommentVNode;
const At = window.Vue.createVNode, en = window.Vue.withCtx, Rl = window.Vue.createElementBlock, Hy = ["lang", "href", "textContent"], jy = {
  key: 1,
  class: "flex"
}, qy = { key: 2 }, Gy = window.Vuex.useStore, Ol = window.Vue.computed, Hl = window.Vue.ref, ri = window.Codex.CdxButton, ci = window.Codex.CdxIcon, Wy = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Tg,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Gy(), o = Hl(!0), s = Hl(null), a = Ol(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), i = Ol(
      () => a.value && Object.keys(a.value)[0]
    );
    my()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => s.value = p).catch((p) => console.log(p)).finally(() => o.value = !1);
    const l = we();
    Jo();
    const d = () => {
      n.dispatch("application/initializeSectionTranslation", s.value), l.push({ name: "sx-section-selector", query: { force: !0 } });
    }, r = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: u } = wc();
    F(n);
    const g = PS(), m = () => {
      g(t.translation), u(t.translation);
    };
    return (p, h) => (ys(), Ul(pm, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: r
    }, {
      title: en(() => [
        ii("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: h[0] || (h[0] = Ss(() => {
          }, ["stop"])),
          textContent: ai(e.translation.sourceTitle)
        }, null, 8, Hy)
      ]),
      "mid-content": en(() => [
        At(Be(T), { class: "ma-0" }, {
          default: en(() => [
            At(Be(y), null, {
              default: en(() => [
                o.value ? (ys(), Ul(Be(Xe), { key: 0 })) : a.value ? (ys(), Rl("div", jy, [
                  At(Be(ri), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: Ss(d, ["stop"])
                  }, {
                    default: en(() => [
                      At(Be(ci), {
                        class: "me-1",
                        icon: Be(zl)
                      }, null, 8, ["icon"]),
                      ii("span", null, ai(i.value), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  At(Be(ri), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    onClick: Ss(d, ["stop"])
                  }, {
                    default: en(() => [
                      At(Be(ci), { icon: Be(bm) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : (ys(), Rl("div", qy, [
                  At(Be(ri), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: Ss(m, ["stop"])
                  }, {
                    default: en(() => [
                      At(Be(ci), {
                        class: "me-1",
                        icon: Be(zl)
                      }, null, 8, ["icon"]),
                      ii("span", null, ai(p.$i18n("sx-published-translation-new-translation-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
}, jl = window.Vuex.useStore, Xy = () => {
  const e = jl(), { commit: t } = jl(), { sourceLanguage: n, targetLanguage: o } = F(e), s = ct();
  return (a) => k(void 0, null, function* () {
    a.sectionTranslationId ? (yield Ke.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield Ke.deleteCXTranslation(
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
const Ky = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: re,
    MwDialog: Qe
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Xo,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = Xy();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, Yy = window.Vue.resolveDirective, li = window.Vue.createElementVNode, Qy = window.Vue.withDirectives, ql = window.Vue.resolveComponent, Gl = window.Vue.createVNode, Wl = window.Vue.withCtx, Jy = window.Vue.openBlock, Zy = window.Vue.createBlock, eC = { class: "pa-4" }, tC = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function nC(e, t, n, o, s, a) {
  const i = ql("mw-button"), c = ql("mw-dialog"), l = Yy("i18n");
  return Jy(), Zy(c, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: Wl(() => [
      li("div", tC, [
        Gl(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        Gl(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: Wl(() => [
      li("div", eC, [
        Qy(li("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const oC = /* @__PURE__ */ D(Ky, [["render", nC]]);
const sC = window.Vue.resolveDirective, tn = window.Vue.createElementVNode, Cs = window.Vue.withDirectives, aC = window.Vue.toDisplayString, iC = window.Vue.createTextVNode, ui = window.Vue.unref, di = window.Vue.withCtx, gi = window.Vue.openBlock, mi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const rC = { class: "pa-4" }, cC = { class: "flex pt-2" }, lC = window.Codex.CdxButton, uC = window.Vue.ref, dC = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: oc,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = os(), i = uC(!1), c = () => k(this, null, function* () {
      i.value = !0;
      let l = !1;
      try {
        l = yield Ke.splitTranslation(
          n.translation.translationId
        );
      } catch (d) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          d
        );
      }
      i.value = !1, l && (a(n.translation), s());
    });
    return (l, d) => {
      const r = sC("i18n");
      return gi(), mi(ui(Qe), {
        value: e.modelValue,
        persistent: i.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": l.$mwui.colors.gray700,
        "min-height": "unset",
        title: l.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: di(() => [
          tn("div", cC, [
            i.value ? (gi(), mi(ui(Xe), { key: 1 })) : (gi(), mi(ui(lC), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: di(() => [
                iC(aC(l.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: di(() => [
          tn("div", rC, [
            Cs(tn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Cs(tn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            tn("p", null, [
              Cs(tn("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Cs(tn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
function gC(e, t, n) {
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
        O.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        O.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield mC(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function Xl(e, t, n) {
  return k(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield gC(e, t, n)).sort(O.sortByAutonym);
  });
}
function mC(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function pC() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function hC(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function wC(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const fC = window.Vue.computed;
function _C(e, t) {
  const n = fC(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = O.getAutonym(t.value[s]);
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
const pi = window.Vue.ref, Kl = window.Vue.watch, vC = window.Vue.computed;
function SC(e, t, n) {
  const o = pi(""), s = pi(-1), a = pi(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = vC(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Kl(e, () => {
    s.value = -1;
  }), Kl(s, () => k(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
const hi = window.Vue.ref, yC = window.Vue.watch, CC = window.Vue.onMounted, Yl = window.Vue.computed, kC = {
  name: "MwLanguageSelector",
  components: {
    MwInput: ec
  },
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
      default: pC
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = hi(null), o = hi(""), s = hi([]), a = Yl(
      () => hC(s.value)
    ), i = Yl(
      () => wC(s.value)
    ), c = (f) => t.emit("select", f), l = () => t.emit("close"), { autocompletion: d, onTabSelect: r } = _C(
      o,
      s
    ), { next: u, prev: g, langSelectorContainer: m, selectedLanguage: p } = SC(o, s, e.suggestions), h = () => {
      if (o.value && e.languages.includes(o.value)) {
        c(o.value);
        return;
      }
      if (p.value) {
        c(p.value);
        return;
      }
      if (s.value.length === 1) {
        c(s.value[0]);
        return;
      }
    };
    return yC(o, rc(() => k(this, null, function* () {
      s.value = yield Xl(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), CC(() => k(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Xl(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: d,
      close: l,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      langSelectorContainer: m,
      mwIconClose: Kt,
      mwIconSearch: fg,
      next: u,
      onEnter: h,
      onTabSelect: r,
      prev: g,
      resultsDisplayClass: i,
      searchInputElement: n,
      searchQuery: o,
      searchResultsByScript: a,
      select: c,
      selectedLanguage: p
    };
  }
}, ks = window.Vue.renderSlot, xC = window.Vue.resolveComponent, Ql = window.Vue.createVNode, eo = window.Vue.withModifiers, to = window.Vue.withKeys, Dt = window.Vue.createElementVNode, bC = window.Vue.resolveDirective, xs = window.Vue.withDirectives, wi = window.Vue.renderList, fi = window.Vue.Fragment, mt = window.Vue.openBlock, pt = window.Vue.createElementBlock, Jl = window.Vue.toDisplayString, bs = window.Vue.normalizeClass, _i = window.Vue.createCommentVNode, $C = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, VC = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, AC = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, DC = { class: "results px-3 pt-4" }, EC = { class: "results-header ps-8 pb-2" }, TC = { class: "results-languages--suggestions pa-0 ma-0" }, LC = ["lang", "dir", "aria-selected", "onClick", "textContent"], BC = { class: "results px-3 pt-4" }, PC = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, FC = ["lang", "dir", "aria-selected", "onClick", "textContent"], MC = ["aria-selected"], NC = { class: "no-results px-3 py-4" }, IC = { class: "ps-8" };
function zC(e, t, n, o, s, a) {
  const i = xC("mw-input"), c = bC("i18n");
  return mt(), pt("div", $C, [
    ks(e.$slots, "search", {}, () => [
      Dt("div", VC, [
        Ql(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (l) => o.autocompletion = l),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        Ql(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (l) => o.searchQuery = l),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            to(eo(o.onEnter, ["prevent"]), ["enter"]),
            to(eo(o.next, ["stop", "prevent"]), ["down"]),
            to(eo(o.prev, ["stop", "prevent"]), ["up"]),
            to(eo(o.close, ["prevent"]), ["esc"]),
            to(eo(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    Dt("section", AC, [
      n.suggestions.length && !o.searchQuery ? ks(e.$slots, "suggestions", { key: 0 }, () => [
        Dt("section", DC, [
          xs(Dt("p", EC, null, 512), [
            [c, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          Dt("ul", TC, [
            (mt(!0), pt(fi, null, wi(n.suggestions, (l) => (mt(), pt("li", {
              key: l,
              class: bs(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(l),
              textContent: Jl(o.getAutonym(l))
            }, null, 10, LC))), 128))
          ])
        ])
      ]) : _i("", !0),
      o.searchResultsByScript.length ? ks(e.$slots, "search", { key: 1 }, () => [
        Dt("section", BC, [
          n.suggestions.length && !o.searchQuery ? xs((mt(), pt("p", PC, null, 512)), [
            [c, void 0, "cx-sx-language-selector-all-languages"]
          ]) : _i("", !0),
          (mt(!0), pt(fi, null, wi(o.searchResultsByScript, (l, d) => (mt(), pt("ul", {
            key: d,
            class: bs(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (mt(!0), pt(fi, null, wi(l, (r) => (mt(), pt("li", {
              key: r,
              class: bs(["language pa-2 ps-8 ma-0", r === o.selectedLanguage ? "language--selected" : ""]),
              lang: r,
              dir: o.getDir(r),
              role: "option",
              "aria-selected": r === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(r),
              textContent: Jl(o.getAutonym(r))
            }, null, 10, FC))), 128)),
            n.allOptionEnabled && !o.searchQuery ? xs((mt(), pt("li", {
              key: 0,
              class: bs(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (r) => o.select("all"))
            }, null, 10, MC)), [
              [c, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : _i("", !0)
          ], 2))), 128))
        ])
      ]) : ks(e.$slots, "noresults", { key: 2 }, () => [
        Dt("section", NC, [
          xs(Dt("h3", IC, null, 512), [
            [c, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Am = /* @__PURE__ */ D(kC, [["render", zC]]);
const ge = window.Vue.unref, UC = window.Vue.resolveDirective, Zl = window.Vue.withDirectives, no = window.Vue.openBlock, oo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const eu = window.Vue.toDisplayString, tu = window.Vue.withModifiers, nn = window.Vue.withCtx, ht = window.Vue.createVNode, RC = { class: "sx-translation-list-language-selector" }, OC = {
  key: 0,
  class: "mw-ui-autonym"
}, HC = ["lang", "dir", "textContent"], jC = {
  key: 0,
  class: "mw-ui-autonym"
}, qC = ["lang", "dir", "textContent"], $s = window.Vue.computed, GC = window.Vue.inject, WC = window.Vue.ref, Sc = {
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
      required: !0
    },
    selectedTargetLanguage: {
      type: String,
      required: !0
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
    const n = e, o = t, s = GC("breakpoints"), a = $s(() => s.value.mobile), i = WC(null), c = $s(() => !!i.value), l = () => i.value = "source", d = () => i.value = "target", r = () => i.value = null, u = (p) => {
      const w = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(w, p);
    }, g = $s(
      () => n.selectedSourceLanguage === "all"
    ), m = $s(
      () => n.selectedTargetLanguage === "all"
    );
    return (p, h) => {
      const w = UC("i18n");
      return no(), oo("div", RC, [
        ht(ge(T), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: nn(() => [
            ht(ge(y), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: nn(() => [
                ht(ge(re), {
                  indicator: ge(Nr),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: tu(l, ["stop"])
                }, {
                  default: nn(() => [
                    g.value ? Zl((no(), oo("span", OC, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (no(), oo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: ge(O.getDir)(e.selectedSourceLanguage),
                      textContent: eu(ge(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, HC))
                  ]),
                  _: 1
                }, 8, ["indicator", "onClick"])
              ]),
              _: 1
            }),
            ht(ge(y), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: nn(() => [
                ht(ge(ie), { icon: ge(Yr) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            ht(ge(y), { cols: "5" }, {
              default: nn(() => [
                ht(ge(re), {
                  indicator: ge(Nr),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: tu(d, ["stop"])
                }, {
                  default: nn(() => [
                    m.value ? Zl((no(), oo("span", jC, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (no(), oo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: ge(O.getDir)(e.selectedTargetLanguage),
                      textContent: eu(ge(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, qC))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ht(ge(Qe), {
          value: c.value,
          "onUpdate:value": h[0] || (h[0] = (f) => c.value = f),
          animation: "slide-up",
          title: p.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: r
        }, {
          default: nn(() => [
            ht(ge(Am), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: p.$i18n("cx-sx-language-selector-placeholder"),
              languages: e.sourceLanguages,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: u,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ]);
    };
  }
}, XC = window.Vue.toDisplayString, KC = window.Vue.createElementVNode, vi = window.Vue.createVNode, nu = window.Vue.unref, Et = window.Vue.openBlock, Vs = window.Vue.createBlock, ou = window.Vue.createCommentVNode, su = window.Vue.renderList, au = window.Vue.Fragment, As = window.Vue.createElementBlock, YC = window.Vue.normalizeClass, iu = window.Vue.withCtx, QC = ["textContent"], JC = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, ZC = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Cn = window.Vue.ref, wt = window.Vue.computed, ek = window.Vuex.useStore, ru = {
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
    const t = e, n = Cn("all"), o = Cn("all"), s = ek(), a = wt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = Zo(), c = Cn(!1), l = Cn(!1), d = Cn(null), r = Cn(null), u = wt(
      () => t.translationStatus === "draft"
    ), g = wt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), m = wt(
      () => n.value === "all"
    ), p = wt(
      () => o.value === "all"
    ), h = wt(
      () => g.value.filter(
        (L) => (m.value || L.sourceLanguage === n.value) && (p.value || L.targetLanguage === o.value)
      ).sort((L, U) => L.lastUpdatedTimestamp < U.lastUpdatedTimestamp)
    ), w = wt(() => {
      let L = g.value.map(
        (U) => U.targetLanguage
      );
      return i.value && (L = L.filter(
        (U) => i.value.includes(U)
      )), [...new Set(L)];
    }), f = wt(() => {
      const L = g.value.map(
        (U) => U.sourceLanguage
      );
      return [...new Set(L)];
    }), v = (L) => {
      d.value = L, c.value = !0;
    }, C = wt(() => t.activeStatus === t.translationStatus), x = os(), P = (L) => {
      L.isArticleTranslation ? (r.value = L, l.value = !0) : x(L);
    };
    return (L, U) => C.value ? (Et(), Vs(nu(ze), {
      key: 0,
      class: YC(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: iu(() => [
        KC("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: XC(L.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, QC)
      ]),
      default: iu(() => [
        vi(Sc, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": U[0] || (U[0] = (A) => n.value = A),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": U[1] || (U[1] = (A) => o.value = A),
          "source-languages": f.value,
          "target-languages": w.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? ou("", !0) : (Et(), Vs(nu(Xe), { key: 0 })),
        u.value ? (Et(), As("div", JC, [
          (Et(!0), As(au, null, su(h.value, (A) => (Et(), Vs(kS, {
            key: `${e.translationStatus}-${A.key}`,
            translation: A,
            onClick: (B) => P(A),
            onDeleteTranslation: (B) => v(A)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (Et(), As("div", ZC, [
          (Et(!0), As(au, null, su(h.value, (A) => (Et(), Vs(Wy, {
            key: `${e.translationStatus}-${A.key}`,
            translation: A,
            onDeleteTranslation: (B) => v(A)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        vi(oC, {
          modelValue: c.value,
          "onUpdate:modelValue": U[2] || (U[2] = (A) => c.value = A),
          translation: d.value
        }, null, 8, ["modelValue", "translation"]),
        vi(dC, {
          modelValue: l.value,
          "onUpdate:modelValue": U[3] || (U[3] = (A) => l.value = A),
          translation: r.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ou("", !0);
  }
};
const ft = window.Vue.computed, tk = window.Vue.inject, nk = window.Vuex.useStore, ok = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: tc, MwIcon: ie, MwRow: T, MwCol: y },
  props: {
    suggestion: {
      type: [ac, Ye, Oo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = nk(), n = ft(() => e.suggestion), o = ft(
      () => n.value.sourceTitle || n.value.title
    ), s = ft(
      () => t.getters["mediawiki/getPage"](
        n.value.sourceLanguage,
        o.value
      )
    ), a = ft(
      () => {
        var p;
        return (p = n.value) == null ? void 0 : p.missingSectionsCount;
      }
    ), i = ft(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.description;
    }), c = ft(
      () => n.value instanceof Ye
    ), l = ft(
      () => n.value instanceof Oo
    ), { sourceLanguageAutonym: d, targetLanguageAutonym: r } = F(t), u = ft(
      () => l.value ? vg : _g
    ), g = tk("colors"), m = ft(
      () => l.value ? g.blue600 : "currentColor"
    );
    return {
      bookmarkIcon: u,
      bookmarkIconColor: m,
      description: i,
      getDir: O.getDir,
      isFavoriteSuggestion: l,
      isSectionSuggestion: c,
      missingSectionsCount: a,
      mwIconArrowNext: Yr,
      mwIconClose: Kt,
      page: s,
      sourceLanguageAutonym: d,
      targetLanguageAutonym: r,
      title: o
    };
  }
}, Ds = window.Vue.resolveComponent, be = window.Vue.createVNode, Tt = window.Vue.createElementVNode, Es = window.Vue.toDisplayString, $e = window.Vue.withCtx, cu = window.Vue.withModifiers, so = window.Vue.openBlock, Ts = window.Vue.createBlock, Ls = window.Vue.createCommentVNode, sk = window.Vue.resolveDirective, lu = window.Vue.withDirectives, ak = window.Vue.createElementBlock, ik = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, rk = { class: "col shrink pe-4" }, ck = { class: "col cx-suggestion__information-panel" }, lk = ["lang", "dir", "textContent"], uk = ["lang", "dir", "textContent"], dk = ["textContent"], gk = ["textContent"];
function mk(e, t, n, o, s, a) {
  const i = Ds("mw-thumbnail"), c = Ds("mw-col"), l = Ds("mw-row"), d = Ds("mw-icon"), r = sk("i18n");
  return n.suggestion ? (so(), ak("div", ik, [
    Tt("div", rk, [
      be(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    Tt("div", ck, [
      be(l, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: $e(() => [
          be(c, {
            shrink: "",
            class: "cx-suggestion__information-panel__top pb-2"
          }, {
            default: $e(() => [
              be(l, {
                class: "ma-0",
                align: "start",
                justify: "between"
              }, {
                default: $e(() => [
                  be(c, {
                    grow: "",
                    class: "pe-2"
                  }, {
                    default: $e(() => [
                      be(l, {
                        direction: "column",
                        class: "ma-0",
                        align: "start"
                      }, {
                        default: $e(() => [
                          be(c, {
                            shrink: "",
                            class: "mb-2"
                          }, {
                            default: $e(() => [
                              Tt("h5", {
                                class: "my-0 cx-suggestion__source-title",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: Es(o.title)
                              }, null, 8, lk)
                            ]),
                            _: 1
                          }),
                          be(c, { shrink: "" }, {
                            default: $e(() => [
                              Tt("p", {
                                class: "ma-0 cx-suggestion__source-description complementary",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: Es(o.description)
                              }, null, 8, uk)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  be(c, { shrink: "" }, {
                    default: $e(() => [
                      o.isFavoriteSuggestion ? Ls("", !0) : (so(), Ts(d, {
                        key: 0,
                        icon: o.mwIconClose,
                        size: "24",
                        class: "cx-suggestion__discard-button mb-4",
                        onClick: t[0] || (t[0] = cu((u) => e.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])),
                      be(d, {
                        class: "cx-suggestion__favorite-button",
                        icon: o.bookmarkIcon,
                        size: "24",
                        "icon-color": o.bookmarkIconColor,
                        onClick: t[1] || (t[1] = cu((u) => e.$emit("bookmark"), ["stop"]))
                      }, null, 8, ["icon", "icon-color"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          o.isSectionSuggestion ? (so(), Ts(c, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: $e(() => [
              lu(Tt("small", null, null, 512), [
                [r, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ]),
            _: 1
          })) : o.isFavoriteSuggestion ? (so(), Ts(c, {
            key: 1,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
            shrink: ""
          }, {
            default: $e(() => [
              be(l, {
                justify: "between",
                class: "ma-0"
              }, {
                default: $e(() => [
                  be(c, { grow: "" }, {
                    default: $e(() => [
                      Tt("small", {
                        textContent: Es(o.sourceLanguageAutonym)
                      }, null, 8, dk),
                      be(d, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      Tt("small", {
                        textContent: Es(o.targetLanguageAutonym)
                      }, null, 8, gk)
                    ]),
                    _: 1
                  }),
                  o.missingSectionsCount ? (so(), Ts(c, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: $e(() => [
                      lu(Tt("small", null, null, 512), [
                        [r, [
                          o.missingSectionsCount
                        ], "cx-sx-translation-suggestion-info"]
                      ])
                    ]),
                    _: 1
                  })) : Ls("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : Ls("", !0)
        ]),
        _: 1
      })
    ])
  ])) : Ls("", !0);
}
const Xr = /* @__PURE__ */ D(ok, [["render", mk]]), pk = window.Vue.computed, hk = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Zo(), n = pk(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, ao = window.Vue.computed, uu = window.Vue.ref, wk = window.Vuex.useStore, fk = () => {
  const e = wk(), { sourceLanguage: t, targetLanguage: n } = F(e), o = ct(), s = ao(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = ao(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = ao(
    () => !s.value && !a.value
  ), c = uu(0), l = uu(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, r = 4, u = ao(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      c.value
    )
  ), g = ao(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), m = () => {
    p(), h();
  }, p = () => {
    const x = u.value.length === d, P = (c.value + 1) % r, L = x && e.getters["application/getSectionSuggestionsSliceByIndex"](P).length > 0;
    (!x || !L) && e.dispatch("suggestions/fetchNextSectionSuggestionsSlice"), x && v();
  }, h = () => {
    const x = g.value.length === d, P = (l.value + 1) % r, L = x && e.getters["application/getPageSuggestionsSliceByIndex"](P).length > 0;
    (!x || !L) && e.dispatch("suggestions/fetchNextPageSuggestionsSlice"), x && C();
  }, w = (x) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestion", x), p();
  }, f = (x) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", x), h();
  }, v = () => c.value = (c.value + 1) % r, C = () => l.value = (l.value + 1) % r;
  return {
    currentPageSuggestionsSlice: g,
    currentSectionSuggestionsSlice: u,
    discardPageSuggestion: f,
    discardSectionSuggestion: w,
    onSuggestionRefresh: m,
    pageSuggestionsLoading: a,
    sectionSuggestionsLoading: s,
    showRefreshButton: i
  };
};
const du = window.Vue.toDisplayString, Bs = window.Vue.createElementVNode, te = window.Vue.unref, io = window.Vue.createVNode, ro = window.Vue.withCtx, _k = window.Vue.resolveDirective, Si = window.Vue.withDirectives, gu = window.Vue.renderList, mu = window.Vue.Fragment, Lt = window.Vue.openBlock, yi = window.Vue.createElementBlock, co = window.Vue.createBlock, Ci = window.Vue.createCommentVNode, vk = window.Vue.createTextVNode, Sk = window.Vue.vShow, yk = ["textContent"], Ck = { class: "cx-translation-list__division-title ma-0 pa-4" }, kk = { class: "cx-translation-list__division-title ma-0 pa-4" }, xk = { class: "cx-suggestion-list__refresh-button-container justify-center" }, bk = window.Vuex.useStore, $k = window.Vue.ref, Vk = window.Codex.CdxButton, Ak = window.Codex.CdxIcon, Dk = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = bk(), { sourceLanguage: n, targetLanguage: o } = F(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = hk(), i = fm(), c = (B) => i(B, o.value), l = (B) => i(n.value, B), d = gc(), r = (B) => d(B.sourceTitle, "suggestion_no_seed"), { startPageSuggestion: u } = wc(), {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: v,
      showRefreshButton: C
    } = fk(), x = $k(null), P = ct(), L = () => {
      P({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), x.value.$el.scrollIntoView({ behavior: "smooth" });
    }, U = (B) => k(this, null, function* () {
      return t.dispatch("suggestions/addSectionSuggestionAsFavorite", B);
    }), A = (B) => k(this, null, function* () {
      return t.dispatch("suggestions/addPageSuggestionAsFavorite", B);
    });
    return (B, Te) => {
      const _e = _k("i18n");
      return Si((Lt(), yi("div", null, [
        io(te(ze), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: ro(() => [
            Bs("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: du(B.$i18n("cx-suggestionlist-title"))
            }, null, 8, yk)
          ]),
          default: ro(() => [
            io(Sc, {
              "source-languages": te(s),
              "target-languages": te(a),
              "selected-source-language": te(n),
              "selected-target-language": te(o),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        io(te(ze), {
          ref_key: "pageSuggestionsList",
          ref: x,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: ro(() => [
            Si(Bs("h5", Ck, null, 512), [
              [_e, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Lt(!0), yi(mu, null, gu(te(g), (H, Y) => (Lt(), co(Xr, {
              key: `page-suggestion-${Y}`,
              suggestion: H,
              onClose: (oe) => te(p)(H),
              onClick: (oe) => te(u)(H),
              onBookmark: (oe) => A(H)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(f) ? (Lt(), co(te(Xe), { key: 0 })) : Ci("", !0)
          ]),
          _: 1
        }, 512),
        io(te(ze), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: ro(() => [
            Si(Bs("h5", kk, null, 512), [
              [_e, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Lt(!0), yi(mu, null, gu(te(m), (H, Y) => (Lt(), co(Xr, {
              key: `section-suggestion-${Y}`,
              class: "ma-0",
              suggestion: H,
              onClose: (oe) => te(h)(H),
              onClick: (oe) => r(H),
              onBookmark: (oe) => U(H)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(v) ? (Lt(), co(te(Xe), { key: 0 })) : Ci("", !0)
          ]),
          _: 1
        }),
        Bs("div", xk, [
          te(C) ? (Lt(), co(te(Vk), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: L
          }, {
            default: ro(() => [
              io(te(Ak), {
                class: "me-1",
                icon: te(Vm)
              }, null, 8, ["icon"]),
              vk(" " + du(B.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Ci("", !0)
        ])
      ], 512)), [
        [Sk, e.active]
      ]);
    };
  }
}, Ek = (e) => k(void 0, null, function* () {
  return Ig.dispatch("suggestions/removeFavoriteSuggestion", e);
}), Tk = window.Vue.computed, Lk = window.Vuex.useStore, Bk = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Xr,
    MwCard: ze
  },
  setup() {
    const e = we(), t = Lk();
    return {
      favorites: Tk(() => t.state.suggestions.favorites || []),
      startFavoriteTranslation: (s) => k(this, null, function* () {
        yield t.dispatch(
          "application/startFavoriteSectionTranslation",
          s
        ), e.push({ name: "sx-translation-confirmer" });
      }),
      unmarkFavoriteSectionSuggestion: Ek
    };
  }
}, Pk = window.Vue.resolveDirective, Fk = window.Vue.createElementVNode, Mk = window.Vue.withDirectives, Nk = window.Vue.renderList, Ik = window.Vue.Fragment, ki = window.Vue.openBlock, zk = window.Vue.createElementBlock, pu = window.Vue.resolveComponent, hu = window.Vue.createBlock, wu = window.Vue.withCtx, Uk = window.Vue.createCommentVNode, Rk = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function Ok(e, t, n, o, s, a) {
  const i = pu("cx-translation-suggestion"), c = pu("mw-card"), l = Pk("i18n");
  return o.favorites.length ? (ki(), hu(c, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: wu(() => [
      Mk(Fk("h3", Rk, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: wu(() => [
      (ki(!0), zk(Ik, null, Nk(o.favorites, (d, r) => (ki(), hu(i, {
        key: `favorite-${r}`,
        suggestion: d,
        onClick: (u) => o.startFavoriteTranslation(d),
        onBookmark: (u) => o.unmarkFavoriteSectionSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : Uk("", !0);
}
const Hk = /* @__PURE__ */ D(Bk, [["render", Ok]]);
const jk = {
  name: "CxHelpPanel",
  components: { MwIcon: ie },
  setup() {
    const e = Ee();
    return { listItems: [
      {
        icon: Oh,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Vh,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Hh,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, qk = window.Vue.resolveDirective, Ps = window.Vue.createElementVNode, Gk = window.Vue.withDirectives, Wk = window.Vue.renderList, Xk = window.Vue.Fragment, xi = window.Vue.openBlock, bi = window.Vue.createElementBlock, Kk = window.Vue.resolveComponent, Yk = window.Vue.createVNode, Qk = window.Vue.toDisplayString, Jk = { class: "cx-help-panel pa-4" }, Zk = { class: "cx-help-panel__item-list mt-6 ps-2" }, ex = ["href"], tx = ["textContent"];
function nx(e, t, n, o, s, a) {
  const i = Kk("mw-icon"), c = qk("i18n");
  return xi(), bi("div", Jk, [
    Gk(Ps("h5", null, null, 512), [
      [c, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    Ps("ul", Zk, [
      (xi(!0), bi(Xk, null, Wk(o.listItems, (l, d) => (xi(), bi("li", {
        key: d,
        class: "mt-4"
      }, [
        Ps("a", {
          href: l.href,
          target: "_blank"
        }, [
          Yk(i, {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Ps("span", {
            textContent: Qk(l.label)
          }, null, 8, tx)
        ], 8, ex)
      ]))), 128))
    ])
  ]);
}
const ox = /* @__PURE__ */ D(jk, [["render", nx]]);
const sx = window.Vue.ref, fu = window.Vue.computed, ax = window.Vue.watch, ix = {
  name: "CxStatsPanel",
  components: { MwCol: y, MwRow: T },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = fu(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = fu(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = sx(null);
    return ax(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), c = Object.keys(e.stats || {}).sort(), l = c.reduce(
          (C, x) => Math.max(C, a[x].delta),
          0
        ), d = c.map((C) => a[C].delta), r = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = r, s.value.height = u;
        const g = 4, m = 6, p = 50, h = (p - g) / l;
        let w = g;
        const f = Math.floor(
          (r - g) / (m + g)
        ), v = d.slice(
          Math.max(d.length - f, 0)
        );
        v.forEach((C, x) => {
          x === v.length - 1 && (i.fillStyle = "#36c");
          const P = p - C * h;
          i.fillRect(w, P, m, C * h), w += m + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, rx = window.Vue.resolveDirective, kn = window.Vue.createElementVNode, $i = window.Vue.withDirectives, _u = window.Vue.toDisplayString, vu = window.Vue.resolveComponent, Vi = window.Vue.withCtx, Ai = window.Vue.createVNode, cx = window.Vue.openBlock, lx = window.Vue.createElementBlock, ux = { class: "cx-stats-panel pa-4" }, dx = ["textContent"], gx = { class: "cx-stats-panel__monthly-stats-label" }, mx = ["textContent"], px = { class: "cx-stats-panel__total-stats-label" }, hx = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function wx(e, t, n, o, s, a) {
  const i = vu("mw-col"), c = vu("mw-row"), l = rx("i18n");
  return cx(), lx("div", ux, [
    $i(kn("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    Ai(c, null, {
      default: Vi(() => [
        Ai(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: Vi(() => [
            kn("h3", {
              textContent: _u(o.thisMonthStats)
            }, null, 8, dx),
            $i(kn("h5", gx, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        Ai(i, { class: "cx-stats-panel__total-stats" }, {
          default: Vi(() => [
            kn("h3", {
              textContent: _u(o.total)
            }, null, 8, mx),
            $i(kn("h5", px, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    kn("canvas", hx, null, 512)
  ]);
}
const fx = /* @__PURE__ */ D(ix, [["render", wx]]);
const _x = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: y, MwRow: T, MwCard: ze, MwIcon: ie },
  data: () => ({
    mwIconLabFlask: yg,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, Fs = window.Vue.resolveComponent, Ms = window.Vue.createVNode, Ns = window.Vue.withCtx, vx = window.Vue.resolveDirective, xn = window.Vue.createElementVNode, Is = window.Vue.withDirectives, Sx = window.Vue.openBlock, yx = window.Vue.createBlock, Cx = { class: "complementary" }, kx = { class: "complementary mt-4" }, xx = ["href"], bx = { class: "complementary" }, $x = ["href"];
function Vx(e, t, n, o, s, a) {
  const i = Fs("mw-icon"), c = Fs("mw-col"), l = Fs("mw-row"), d = Fs("mw-card"), r = vx("i18n");
  return Sx(), yx(d, { class: "experimental-support-banner mb-1" }, {
    default: Ns(() => [
      Ms(l, null, {
        default: Ns(() => [
          Ms(c, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: Ns(() => [
              Ms(i, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          Ms(c, null, {
            default: Ns(() => [
              Is(xn("h5", null, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              Is(xn("p", Cx, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              xn("p", kx, [
                Is(xn("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, xx), [
                  [r, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              xn("p", bx, [
                Is(xn("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, $x), [
                  [r, void 0, "cx-dashboard-experimental-support-banner-share-feedback-anchor"]
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Ax = /* @__PURE__ */ D(_x, [["render", Vx]]), Dx = window.Vuex.useStore, Va = () => {
  const e = Dx(), t = (o) => k(void 0, null, function* () {
    let s = yield Ke.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), s.forEach(
      (i) => e.commit("translator/addTranslation", i)
    );
    const a = {};
    for (const i of s) {
      const c = i.sourceLanguage;
      a[c] = a[c] || [], a[c].push(i);
    }
    e.commit("translator/setTranslationsLoaded", { status: o, value: !0 });
    for (const [i, c] of Object.entries(a))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: i,
        titles: c.map((l) => l.sourceTitle)
      }), c.forEach((l) => {
        const { targetLanguage: d, targetTitle: r } = l, u = !!e.getters["mediawiki/getPage"](
          d,
          r
        );
        r && !u && e.commit(
          "mediawiki/addPage",
          new qn({ title: r, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, Ex = window.Vuex.useStore, Dm = () => {
  const e = {
    ulsmissinglanguages: "content_language_selector",
    mflanguagesearcher: "content_language_selector",
    mfrecenttranslation: "recent_translation",
    mfrecentedit: "recent_edit",
    mffrequentlanguages: "frequent_languages",
    newbytranslationmobile: "invite_new_article_creation",
    specialcontribute: "contributions_page",
    publishingfollowup: "followup_after_publishing",
    ulsaddlanguages: "language_selector_options"
  }, n = new URLSearchParams(location.search).get("campaign");
  return e[n];
}, Tx = () => {
  const e = Ex(), t = gc(), n = ct(), o = os(), { fetchAllTranslations: s } = Va();
  return (l) => k(void 0, [l], function* ({ pageTitle: a, isDraftTranslation: i, sectionTitle: c }) {
    const d = Dm() || "direct_preselect", { sourceLanguage: r, targetLanguage: u } = F(e);
    if (n({
      event_type: "dashboard_open",
      event_source: d,
      translation_source_language: r.value,
      translation_target_language: u.value
    }), i) {
      yield s();
      const g = e.getters["translator/getDraftTranslation"](
        a,
        c,
        r.value,
        u.value
      );
      if (!g)
        return;
      o(g);
    } else
      t(a, d);
  });
}, Lx = window.Vuex.useStore, Bx = () => {
  const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
  if (!t || !n)
    return null;
  const o = e.get("section"), s = !!e.get("draft");
  return { pageTitle: n, isDraftTranslation: s, sectionTitle: o };
}, Px = () => {
  const e = ct(), t = Lx(), n = Tx(), { fetchAllTranslations: o } = Va(), s = mc();
  return () => k(void 0, null, function* () {
    yield wm()();
    const i = Bx();
    if (i) {
      n(i);
      return;
    }
    const { sourceLanguage: c, targetLanguage: l, previousRoute: d } = F(t);
    e({
      event_type: "dashboard_open",
      event_source: (() => {
        const g = {
          "sx-article-search": "return_from_search",
          "sx-translation-confirmer": "return_from_confirmation",
          "sx-section-selector": "return_from_section_selection",
          "sx-sentence-selector": "editor_close"
        }[d.value];
        return g || Dm() || "direct";
      })(),
      translation_source_language: c.value,
      translation_target_language: l.value
    });
    try {
      yield t.dispatch("suggestions/fetchFavorites");
    } catch (u) {
      mw.log.error("[CX] Error while fetching favorite suggestions", u);
    }
    yield o(), s();
  });
}, Su = window.Vue.computed, Fx = window.Vue.ref, Mx = window.Vue.watch, Nx = window.Vue.watchEffect, Ix = window.Vuex.useStore, zx = ["suggestions", "draft", "published"], Ux = () => {
  const e = Ix(), n = new URLSearchParams(location.search).get("active-list"), o = Fx(null);
  if (zx.includes(n))
    o.value = n;
  else {
    const s = Su(
      () => e.state.translator.translationsLoaded.draft
    ), a = Su(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", Mx(s, (i) => {
      i && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return Nx(() => {
    DS("active-list", o.value), window.scrollTo(0, 0);
  }), o;
}, Rx = window.Vue.computed, Ox = () => {
  const e = Ee();
  return Rx(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Eh,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: ka,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: Dh,
        type: "text"
      }
    }
  ]);
};
const zs = window.Vue.openBlock, Di = window.Vue.createBlock, Ei = window.Vue.createCommentVNode, ne = window.Vue.unref, fe = window.Vue.createVNode, Bt = window.Vue.withCtx, Hx = window.Vue.isRef, jx = window.Vue.createElementBlock, qx = window.Vue.computed, Gx = window.Vuex.useStore, Wx = {
  __name: "CXDashboard",
  setup(e) {
    const t = we(), n = () => t.push({ name: "sx-article-search" });
    Px()();
    const s = Gx();
    s.dispatch("translator/fetchTranslatorStats");
    const a = qx(() => s.state.translator.translatorStats), i = Ux(), c = Ox();
    return (l, d) => (zs(), jx("div", null, [
      l.$incompleteVersion ? (zs(), Di(Ax, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : Ei("", !0),
      fe(ne(T), { class: "ma-0" }, {
        default: Bt(() => [
          fe(ne(re), {
            id: "dashboard-search-translation-button",
            progressive: "",
            icon: ne(hg),
            label: l.$i18n("cx-create-new-translation"),
            class: "col-desktop-3 col-offset-desktop-2 col-offset-tablet-3 col-mobile-12 my-4",
            onClick: n
          }, null, 8, ["icon", "label"])
        ]),
        _: 1
      }),
      fe(ne(T), {
        class: "ma-0",
        align: "start"
      }, {
        default: Bt(() => [
          l.$mwui.breakpoint.tabletAndUp ? (zs(), Di(ne(y), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: Bt(() => [
              fe(ne(Go), {
                id: "dashboard-list-selector--desktop",
                items: ne(c),
                active: ne(i),
                onSelect: d[0] || (d[0] = (r) => i.value = r)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Ei("", !0),
          fe(ne(y), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: Bt(() => [
              fe(Hk),
              fe(Dk, {
                active: ne(i) === "suggestions"
              }, null, 8, ["active"]),
              fe(ru, {
                "translation-status": "draft",
                "active-status": ne(i)
              }, null, 8, ["active-status"]),
              fe(ru, {
                "translation-status": "published",
                "active-status": ne(i)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          fe(ne(y), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: Bt(() => [
              fe(ne(T), {
                class: "ma-0",
                align: "start"
              }, {
                default: Bt(() => [
                  fe(ne(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: Bt(() => [
                      fe(fx, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  fe(ne(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: Bt(() => [
                      fe(ox)
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
      l.$mwui.breakpoint.mobile ? (zs(), Di(ne(Op), {
        key: 1,
        active: ne(i),
        "onUpdate:active": d[1] || (d[1] = (r) => Hx(i) ? i.value = r : null),
        items: ne(c)
      }, null, 8, ["active", "items"])) : Ei("", !0)
    ]));
  }
}, Xx = {
  name: "DashboardView",
  components: { CxDashboard: Wx }
}, Kx = window.Vue.resolveComponent, Yx = window.Vue.createVNode, Qx = window.Vue.openBlock, Jx = window.Vue.createElementBlock, Zx = { class: "cx-translation-dashboard" };
function e8(e, t, n, o, s, a) {
  const i = Kx("cx-dashboard");
  return Qx(), Jx("main", Zx, [
    Yx(i, { class: "mb-4 pb-12" })
  ]);
}
const yu = /* @__PURE__ */ D(Xx, [["render", e8]]), on = window.Vue.computed, t8 = (e) => {
  const t = on(
    () => {
      var d, r;
      return (r = (d = e.value.orderedMissingSections) == null ? void 0 : d[0]) == null ? void 0 : r.sourceTitle;
    }
  ), n = on(
    () => e.value.missingSectionsCount
  ), o = on(
    () => e.value.presentSectionsCount
  ), s = on(
    () => {
      var d;
      return !!((d = e.value) != null && d.targetTitle);
    }
  ), a = on(
    () => {
      var d, r;
      return q.getPageUrl(
        ((d = e.value) == null ? void 0 : d.targetLanguage) || "",
        ((r = e.value) == null ? void 0 : r.targetTitle) || ""
      );
    }
  ), i = (d) => {
    if (d)
      return "cx-sx-translation-confirmer-translate-prefilled-section-button-label";
    if (!s.value)
      return "cx-sx-start-translation-button-label";
    if (n.value > 1 || n.value === 1 && o.value > 0)
      return "cx-sx-select-section";
    if (n.value === 1 && o.value === 0)
      return "cx-sx-translation-confirmer-action-view-section";
    if (n.value === 0 && o.value > 0)
      return "cx-sx-select-section";
    if (n.value === 0 && o.value === 0)
      return "cx-sx-translation-confirmer-action-new-translation";
  }, c = on(() => {
    let d;
    return n.value > 1 ? d = [
      "cx-sx-existing-translation-additional-info",
      `"${t.value}"`,
      n.value - 1
    ] : n.value === 1 && o.value > 0 ? d = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${t.value}"`
    ] : n.value === 1 && o.value === 0 ? d = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${t.value}"`
    ] : o.value > 0 ? d = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ] : d = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ], d;
  }), l = on(
    () => {
      var d;
      return !s.value || ((d = e.value) == null ? void 0 : d.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: c,
    getActionButtonLabel: i,
    isProgressiveButton: l,
    targetArticlePath: a,
    targetPageExists: s
  };
}, n8 = window.Vuex.useStore, yc = () => {
  const e = n8(), { currentSectionSuggestion: t, currentSourcePage: n } = F(e), o = Cm(), s = (c, l) => k(void 0, null, function* () {
    c() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield e.dispatch("mediawiki/fetchPageContent", t.value), yield o(
      t.value.sourceLanguage,
      t.value.sourceTitle
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), l();
  });
  return {
    selectPageSectionByIndex: (c) => {
      const l = () => {
        var r;
        return (r = n.value.sections) == null ? void 0 : r[c];
      };
      return s(l, () => {
        const r = l();
        c === 0 && (r.originalTitle = n.value.title), e.commit("application/setCurrentSourceSection", r);
      });
    },
    selectPageSectionByTitle: (c) => {
      const l = () => n.value.getSectionByTitle(c);
      return s(l, () => e.commit("application/setCurrentSourceSection", l()));
    }
  };
}, o8 = window.Vue.computed, s8 = window.Vue.ref, a8 = window.Vuex.useStore, i8 = () => {
  const e = we(), t = a8(), { isDesktop: n } = Jo(), o = new URLSearchParams(location.search), s = s8(o.get("section")), {
    currentSourceSection: a,
    currentSectionSuggestion: i,
    sourceLanguage: c,
    targetLanguage: l
  } = F(t), d = o8(
    () => {
      var f;
      return !!((f = i.value) != null && f.targetTitle);
    }
  ), r = () => {
    s.value = null, o.delete("section"), fn(Object.fromEntries(o));
  }, { selectPageSectionByIndex: u, selectPageSectionByTitle: g } = yc(), m = pc(), p = () => k(void 0, null, function* () {
    if (!i.value.hasSectionTitle(s.value)) {
      r();
      return;
    }
    n.value ? m(
      c.value,
      l.value,
      i.value.sourceTitle,
      { sourcesection: s.value }
    ) : (yield g(s.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), h = () => {
    s.value ? p() : d.value ? e.push({ name: "sx-section-selector" }) : w(), qr(i.value);
  }, w = () => k(void 0, null, function* () {
    var f;
    if (n.value) {
      const v = (f = i.value) == null ? void 0 : f.sourceTitle;
      m(c.value, l.value, v);
    } else
      u(0), hm() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }), qr(i.value);
  });
  return {
    clearPreFilledSection: r,
    startNewTranslation: w,
    onSectionSelectorClick: h,
    preFilledSectionTitle: s
  };
};
const G = window.Vue.unref, r8 = window.Vue.resolveDirective, Us = window.Vue.createElementVNode, Cu = window.Vue.withDirectives, lo = window.Vue.toDisplayString, uo = window.Vue.openBlock, Ti = window.Vue.createElementBlock, Li = window.Vue.createCommentVNode, He = window.Vue.createVNode, je = window.Vue.withCtx, Bi = window.Vue.createTextVNode, c8 = window.Vue.withModifiers, ku = window.Vue.createBlock, l8 = { class: "sx-translation-confirmer-body pb-4" }, u8 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, d8 = ["textContent"], g8 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, m8 = ["href"], p8 = ["textContent"], xu = window.Vue.computed, h8 = window.Vue.inject, w8 = window.Vue.onMounted, f8 = window.Vuex.useStore, Pi = window.Codex.CdxButton, _8 = window.Codex.CdxIcon, v8 = {
  __name: "SXTranslationConfirmerActionPanel",
  setup(e) {
    const t = we(), n = f8();
    h8("colors");
    const { targetLanguageAutonym: o, currentSectionSuggestion: s } = F(n), {
      clearPreFilledSection: a,
      startNewTranslation: i,
      onSectionSelectorClick: c,
      preFilledSectionTitle: l
    } = i8(), {
      actionInformationMessageArgs: d,
      getActionButtonLabel: r,
      isProgressiveButton: u,
      targetArticlePath: g,
      targetPageExists: m
    } = t8(s), p = Ee(), h = xu(
      () => p.i18n(r(!!l.value))
    ), { isDesktop: w } = Jo(), f = xu(
      () => p.i18n(...d.value)
    ), v = () => {
      t.push({ name: "sx-section-selector" }), qr(s.value);
    };
    return w8(() => {
      const C = l.value;
      C && !s.value.hasSectionTitle(C) && a();
    }), (C, x) => {
      const P = r8("i18n");
      return uo(), Ti("section", l8, [
        G(l) ? (uo(), Ti("section", u8, [
          Cu(Us("h6", null, null, 512), [
            [P, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
          ]),
          Us("h5", {
            class: "ma-0",
            textContent: lo(G(l))
          }, null, 8, d8)
        ])) : G(m) ? (uo(), Ti("section", g8, [
          He(G(T), {
            class: "sx-translation-confirmer__translation-status ma-0 pb-2",
            justify: "between"
          }, {
            default: je(() => [
              Cu(He(G(y), {
                tag: "h5",
                class: "ma-0 pe-2"
              }, null, 512), [
                [P, [G(o)], "cx-sx-existing-translation-status"]
              ]),
              He(G(y), { shrink: "" }, {
                default: je(() => [
                  Us("a", {
                    href: G(g),
                    target: "_blank"
                  }, [
                    He(G(_8), {
                      class: "sx-translation-confirmer__existing-target-article-link-icon",
                      size: "small",
                      icon: G($m)
                    }, null, 8, ["icon"])
                  ], 8, m8)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          He(G(T), { class: "ma-0" }, {
            default: je(() => [
              He(G(y), null, {
                default: je(() => [
                  Us("span", {
                    textContent: lo(f.value)
                  }, null, 8, p8)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : Li("", !0),
        He(G(T), {
          class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
          justify: "center"
        }, {
          default: je(() => [
            G(l) ? (uo(), ku(G(y), {
              key: 0,
              shrink: "",
              class: "me-4"
            }, {
              default: je(() => [
                He(G(Pi), {
                  size: "large",
                  weight: "quiet",
                  action: "progressive",
                  onClick: c8(v, ["stop"])
                }, {
                  default: je(() => [
                    Bi(lo(C.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })) : Li("", !0),
            G(m) && G(w) ? (uo(), ku(G(y), {
              key: 1,
              shrink: "",
              class: "me-4"
            }, {
              default: je(() => [
                He(G(Pi), {
                  size: "large",
                  onClick: G(i)
                }, {
                  default: je(() => [
                    Bi(lo(C.$i18n(
                      "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                    )), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })) : Li("", !0),
            He(G(y), { shrink: "" }, {
              default: je(() => [
                He(G(Pi), {
                  weight: "primary",
                  size: "large",
                  action: G(u) ? "progressive" : "default",
                  onClick: G(c)
                }, {
                  default: je(() => [
                    Bi(lo(h.value), 1)
                  ]),
                  _: 1
                }, 8, ["action", "onClick"])
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
const Fi = window.Vue.computed, S8 = window.Vuex.useStore, y8 = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: Sc
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Zo(), n = S8(), { sourceLanguage: o, targetLanguage: s } = F(n), a = Fi(
      () => n.getters["application/getCurrentLanguageTitleGroup"]
    ), i = Fi(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((g) => g.lang)) || [];
      }
    ), c = Fi(
      () => t.value || e.value
    ), l = FS();
    return {
      availableSourceLanguages: i,
      targetLanguages: c,
      onSourceLanguageSelected: (u) => l(u, s.value),
      onTargetLanguageSelected: (u) => l(o.value, u),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
}, C8 = window.Vue.resolveComponent, k8 = window.Vue.openBlock, x8 = window.Vue.createBlock;
function b8(e, t, n, o, s, a) {
  const i = C8("sx-translation-list-language-selector");
  return k8(), x8(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const Em = /* @__PURE__ */ D(y8, [["render", b8]]);
const bu = window.Vue.toDisplayString, Rs = window.Vue.createElementVNode, Ze = window.Vue.unref, sn = window.Vue.createVNode, go = window.Vue.withCtx, $8 = window.Vue.resolveDirective, V8 = window.Vue.withDirectives, A8 = window.Vue.openBlock, D8 = window.Vue.createBlock, E8 = ["textContent"], T8 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, L8 = ["textContent"], Pt = window.Vue.computed, B8 = window.Vuex.useStore, P8 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = B8(), {
      currentSectionSuggestion: n,
      currentSourcePage: o
    } = F(t), s = Pt(() => t.state.suggestions.favorites || []), a = Pt(
      () => s.value.some(
        (p) => n.value.sourceTitle === p.title && n.value.sourceLanguage === p.sourceLanguage && n.value.targetLanguage === p.targetLanguage
      )
    ), i = () => k(this, null, function* () {
      return t.dispatch(
        "suggestions/removeFavoriteSuggestion",
        new Oo({
          title: n.value.sourceTitle,
          sourceLanguage: n.value.sourceLanguage,
          targetLanguage: n.value.targetLanguage
        })
      );
    }), c = () => k(this, null, function* () {
      return t.dispatch(
        "suggestions/doMarkSuggestionAsFavorite",
        n.value
      );
    }), l = Pt(
      () => a.value ? vg : _g
    ), d = Pt(
      () => a.value ? i : c
    ), r = Pt(() => {
      var p;
      return (p = n.value) == null ? void 0 : p.sourceTitle;
    }), u = Pt(
      () => {
        var p;
        return q.getPageUrl(
          ((p = n.value) == null ? void 0 : p.sourceLanguage) || "",
          r.value || ""
        );
      }
    ), g = Pt(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.langLinksCount;
    }), m = Pt(
      () => {
        var p;
        return Object.values(((p = o.value) == null ? void 0 : p.pageviews) || {}).reduce(
          (h, w) => h + w,
          0
        );
      }
    );
    return (p, h) => {
      const w = $8("i18n");
      return A8(), D8(Ze(T), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: go(() => [
          sn(Ze(y), null, {
            default: go(() => [
              sn(Ze(T), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: go(() => [
                  sn(Ze(y), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: u.value,
                    target: "_blank"
                  }, {
                    default: go(() => [
                      Rs("h5", {
                        class: "ma-0 me-1",
                        textContent: bu(r.value)
                      }, null, 8, E8),
                      sn(Ze(ie), {
                        icon: Ze(Qr),
                        size: "10",
                        "icon-color": p.$mwui.colors.gray500
                      }, null, 8, ["icon", "icon-color"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  sn(Ze(y), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: go(() => [
                      sn(Ze(re), {
                        class: "pa-0",
                        type: "icon",
                        icon: l.value,
                        progressive: a.value,
                        onClick: d.value
                      }, null, 8, ["icon", "progressive", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Rs("p", T8, [
                sn(Ze(ie), {
                  icon: Ze(Sg),
                  size: "16",
                  class: "me-1"
                }, null, 8, ["icon"]),
                Rs("span", {
                  class: "pe-3",
                  textContent: bu(g.value)
                }, null, 8, L8),
                V8(Rs("span", null, null, 512), [
                  [w, [m.value], "cx-sx-translation-confirmer-views-count"]
                ])
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
const $u = window.Vue.resolveDirective, Os = window.Vue.createElementVNode, Vu = window.Vue.withDirectives, Ft = window.Vue.unref, Hs = window.Vue.withCtx, Mt = window.Vue.createVNode, Mi = window.Vue.openBlock, Au = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const F8 = window.Vue.createBlock, M8 = { class: "sx-translation-confirmer" }, N8 = { class: "mb-0" }, I8 = { class: "sx-translation-confirmer__article-image flex justify-center" }, z8 = ["src"], U8 = { class: "ma-3" }, R8 = window.Vue.computed, O8 = window.Vue.onMounted, H8 = window.Vuex.useStore, j8 = {
  __name: "SXTranslationConfirmer",
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = H8(), { sourceLanguage: o, targetLanguage: s, currentSourcePage: a, previousRoute: i } = F(n), c = R8(
      () => {
        var u, g;
        return (g = (u = a.value) == null ? void 0 : u.image) == null ? void 0 : g.source;
      }
    ), l = ct();
    O8(() => {
      n.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles"), l({
        event_type: "dashboard_translation_start",
        event_source: t.eventSource,
        translation_source_language: o.value,
        translation_target_language: s.value
      }), hc(), n.dispatch(
        "suggestions/fetchAppendixSectionTitles",
        s.value
      );
    });
    const d = we(), r = () => {
      n.dispatch("application/clearCurrentSectionSuggestion"), fn(null), d.push({ name: i.value });
    };
    return (u, g) => {
      const m = $u("i18n"), p = $u("i18n-html");
      return Mi(), Au("section", M8, [
        Mt(Ft(T), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Hs(() => [
            Mt(Ft(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Hs(() => [
                Vu(Os("h5", N8, null, 512), [
                  [m, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Mt(Ft(y), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Hs(() => [
                Mt(Ft(re), {
                  class: "pa-0",
                  type: "icon",
                  icon: Ft(Kt),
                  "icon-size": 20,
                  onClick: r
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Os("div", I8, [
          c.value ? (Mi(), Au("img", {
            key: 0,
            src: c.value
          }, null, 8, z8)) : (Mi(), F8(Ft(ie), {
            key: 1,
            size: "120",
            icon: Ft(Zr),
            "icon-color": u.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Mt(P8),
        Mt(Em),
        Mt(v8),
        Mt(Ft(T), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Hs(() => [
            Os("p", U8, [
              Vu(Os("small", null, null, 512), [
                [p, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const q8 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: j8
  },
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, G8 = window.Vue.resolveComponent, W8 = window.Vue.createVNode, X8 = window.Vue.normalizeClass, K8 = window.Vue.openBlock, Y8 = window.Vue.createElementBlock;
function Q8(e, t, n, o, s, a) {
  const i = G8("sx-translation-confirmer");
  return K8(), Y8("main", {
    class: X8(["sx-translation-confirmer-view", a.classes])
  }, [
    W8(i, { "event-source": n.eventSource }, null, 8, ["event-source"])
  ], 2);
}
const J8 = /* @__PURE__ */ D(q8, [["render", Q8]]);
const Z8 = window.Vue.toDisplayString, Du = window.Vue.unref, eb = window.Vue.createVNode, tb = window.Vue.createTextVNode, nb = window.Vue.createElementVNode, ob = window.Vue.openBlock, sb = window.Vue.createElementBlock, ab = { class: "sx-section-selector-view-article-item ma-0" }, ib = ["href"], rb = window.Codex.CdxIcon, cb = {
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
    return (t, n) => (ob(), sb("li", ab, [
      nb("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        tb(Z8(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        eb(Du(rb), {
          size: "x-small",
          icon: Du($m)
        }, null, 8, ["icon"])
      ], 8, ib)
    ]));
  }
};
const lb = window.Vue.resolveDirective, js = window.Vue.createElementVNode, Ni = window.Vue.withDirectives, ub = window.Vue.toDisplayString, bn = window.Vue.unref, qs = window.Vue.withCtx, mo = window.Vue.createVNode, db = window.Vue.openBlock, gb = window.Vue.createElementBlock, mb = { class: "sx-section-selector__header pa-4" }, pb = { class: "sx-section-selector__header-text ma-0" }, hb = ["textContent"], wb = { class: "pt-0 ma-0" }, fb = { class: "ma-0" }, _b = window.Codex.CdxButton, vb = window.Codex.CdxIcon, Sb = {
  __name: "SXSectionSelectorHeader",
  props: {
    suggestion: {
      type: Ye,
      required: !0
    }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => {
      const o = lb("i18n");
      return db(), gb("div", mb, [
        mo(bn(T), { class: "ma-0 pb-3" }, {
          default: qs(() => [
            mo(bn(y), null, {
              default: qs(() => [
                Ni(js("h6", pb, null, 512), [
                  [o, void 0, "cx-sx-section-selector-title"]
                ]),
                js("h2", {
                  class: "sx-section-selector__title ma-0 py-0",
                  textContent: ub(e.suggestion.sourceTitle)
                }, null, 8, hb)
              ]),
              _: 1
            }),
            mo(bn(y), {
              shrink: "",
              class: "justify-end"
            }, {
              default: qs(() => [
                mo(bn(_b), {
                  weight: "quiet",
                  "aria-label": t.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: n[0] || (n[0] = (s) => t.$emit("close"))
                }, {
                  default: qs(() => [
                    mo(bn(vb), { icon: bn(fc) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ni(js("h4", wb, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Ni(js("p", fb, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, yb = window.Vue.renderList, Cb = window.Vue.Fragment, Ii = window.Vue.openBlock, Eu = window.Vue.createElementBlock, kb = window.Vue.renderSlot, Gs = window.Vue.unref, Tu = window.Vue.createVNode, Lu = window.Vue.withCtx, xb = window.Vue.createBlock, bb = { class: "sx-section-selector__sections-list ma-0 pa-0" }, $b = window.Codex.CdxButton, Vb = window.Codex.CdxIcon, Tm = {
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
    return (t, n) => (Ii(), Eu("ul", bb, [
      (Ii(!0), Eu(Cb, null, yb(e.sections, (o) => (Ii(), xb(Gs(T), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Lu(() => [
          Tu(Gs($b), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Lu(() => [
              kb(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Tu(Gs(Vb), { icon: Gs(ss) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, Ab = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const Db = window.Vue.resolveDirective, Ws = window.Vue.createElementVNode, zi = window.Vue.withDirectives, Nt = window.Vue.unref, Bu = window.Vue.toDisplayString, $n = window.Vue.withCtx, Ui = window.Vue.openBlock, Pu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const po = window.Vue.createVNode, Eb = window.Vue.createTextVNode, Tb = window.Vue.createElementBlock, Lb = { class: "sx-section-selector__missing-sections py-2" }, Bb = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Pb = ["lang", "dir", "textContent"], Fu = window.Vue.computed, Fb = window.Codex.CdxButton, Mb = {
  __name: "SXSectionSelectorSectionListMissing",
  props: {
    suggestion: {
      type: Ye,
      required: !0
    }
  },
  emits: ["select-section", "close"],
  setup(e) {
    const t = e, n = Fu(
      () => O.getAutonym(t.suggestion.targetLanguage)
    ), o = Fu(
      () => Object.keys(t.suggestion.missingSections).length === 0
    );
    return (s, a) => {
      const i = Db("i18n");
      return Ui(), Tb("section", Lb, [
        zi(Ws("h4", Bb, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Ui(), Pu(Nt(T), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: $n(() => [
            po(Nt(y), {
              class: "py-6 justify-center",
              innerHTML: Nt(Ab)
            }, null, 8, ["innerHTML"]),
            po(Nt(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: $n(() => [
                zi(Ws("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            po(Nt(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: $n(() => [
                zi(Ws("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            po(Nt(y), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: $n(() => [
                po(Nt(Fb), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: $n(() => [
                    Eb(Bu(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Ui(), Pu(Tm, {
          key: 0,
          sections: e.suggestion.orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: $n(({ sourceSection: c }) => [
            Ws("h5", {
              class: "ma-0",
              lang: e.suggestion.sourceLanguage,
              dir: Nt(O.getDir)(e.suggestion.sourceLanguage),
              textContent: Bu(c)
            }, null, 8, Pb)
          ]),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const Nb = window.Vue.computed, Ib = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Tm
  },
  props: {
    suggestion: {
      type: Ye,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    const t = Nb(
      () => O.getAutonym(e.suggestion.targetLanguage)
    );
    return { mwIconArrowForward: Kr, getAutonym: O.getAutonym, getDir: O.getDir, targetLanguageAutonym: t };
  }
}, zb = window.Vue.resolveDirective, Xs = window.Vue.createElementVNode, Ub = window.Vue.withDirectives, Mu = window.Vue.toDisplayString, Rb = window.Vue.resolveComponent, Ob = window.Vue.withCtx, Hb = window.Vue.createVNode, jb = window.Vue.openBlock, qb = window.Vue.createElementBlock, Gb = { class: "sx-section-selector__present-sections py-2" }, Wb = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, Xb = { class: "sx-section-selector__present-section-button-content" }, Kb = ["lang", "dir", "textContent"], Yb = ["lang", "dir", "textContent"];
function Qb(e, t, n, o, s, a) {
  const i = Rb("sx-section-selector-section-list"), c = zb("i18n");
  return jb(), qb("section", Gb, [
    Ub(Xs("h4", Wb, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    Hb(i, {
      sections: n.suggestion.orderedPresentSections,
      onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
    }, {
      default: Ob(({ sourceSection: l, targetSection: d }) => [
        Xs("div", Xb, [
          Xs("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: Mu(l)
          }, null, 8, Kb),
          Xs("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: n.suggestion.targetLanguage,
            dir: o.getDir(n.suggestion.targetLanguage),
            textContent: Mu(d)
          }, null, 8, Yb)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
const Jb = /* @__PURE__ */ D(Ib, [["render", Qb]]);
const Ri = window.Vue.computed, Zb = window.Vuex.useStore, e2 = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: Jb,
    SxSectionSelectorSectionListMissing: Mb,
    SxSectionSelectorHeader: Sb,
    SxSectionSelectorViewArticleItem: cb,
    MwRow: T,
    MwCol: y,
    MwIcon: ie,
    SxArticleLanguageSelector: Em
  },
  setup() {
    const e = Zb(), {
      currentSectionSuggestion: t,
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = F(e), i = Ri(
      () => q.getPageUrl(n.value, t.value.sourceTitle)
    ), c = Ri(
      () => q.getPageUrl(o.value, t.value.targetTitle)
    ), l = Ri(() => [
      { path: i.value, autonym: s.value },
      { path: c.value, autonym: a.value }
    ]), d = we(), r = () => {
      fn(null), d.push({ name: "dashboard" });
    }, u = os(), { selectPageSectionByTitle: g } = yc(), { isDesktop: m } = Jo(), p = pc();
    return {
      goToDashboard: r,
      mwIconRobot: Ph,
      mwIconLabFlask: yg,
      selectSection: (w) => {
        if (m.value) {
          p(
            n.value,
            o.value,
            t.value.sourceTitle,
            { sourcesection: w }
          );
          return;
        }
        const f = e.getters["translator/getDraftTranslation"](
          t.value.sourceTitle,
          w,
          n.value,
          o.value
        );
        f ? u(f) : (g(w), d.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: a,
      viewArticleItems: l
    };
  }
}, It = window.Vue.resolveComponent, _t = window.Vue.createVNode, t2 = window.Vue.resolveDirective, et = window.Vue.createElementVNode, ho = window.Vue.withDirectives, n2 = window.Vue.renderList, o2 = window.Vue.Fragment, Oi = window.Vue.openBlock, Nu = window.Vue.createElementBlock, s2 = window.Vue.createBlock, Iu = window.Vue.toDisplayString, zu = window.Vue.createTextVNode, Hi = window.Vue.withCtx, a2 = { class: "sx-section-selector" }, i2 = { class: "sx-section-selector__body" }, r2 = { class: "py-2" }, c2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, l2 = { class: "ma-0 pa-0" }, u2 = { class: "sx-section-selector__additional-consideration-title" }, d2 = { href: "#" }, g2 = { class: "sx-section-selector__additional-consideration-title" }, m2 = { href: "#" };
function p2(e, t, n, o, s, a) {
  const i = It("sx-section-selector-header"), c = It("sx-article-language-selector"), l = It("sx-section-selector-section-list-missing"), d = It("sx-section-selector-section-list-present"), r = It("sx-section-selector-view-article-item"), u = It("mw-icon"), g = It("mw-col"), m = It("mw-row"), p = t2("i18n");
  return Oi(), Nu("section", a2, [
    _t(i, {
      suggestion: o.suggestion,
      onClose: o.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    et("section", i2, [
      _t(c),
      _t(l, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["suggestion", "onSelectSection", "onClose"]),
      _t(d, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection
      }, null, 8, ["suggestion", "onSelectSection"]),
      et("section", r2, [
        ho(et("h4", c2, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        et("ul", l2, [
          (Oi(!0), Nu(o2, null, n2(o.viewArticleItems, (h, w) => (Oi(), s2(r, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      _t(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: Hi(() => [
          _t(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: Hi(() => [
              et("h6", u2, [
                _t(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                zu(" " + Iu(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              ho(et("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              ho(et("a", d2, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          _t(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: Hi(() => [
              et("h6", g2, [
                _t(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                zu(" " + Iu(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              ho(et("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              ho(et("a", m2, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ]);
}
const h2 = /* @__PURE__ */ D(e2, [["render", p2]]);
const w2 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: h2
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, f2 = window.Vue.resolveComponent, _2 = window.Vue.createVNode, v2 = window.Vue.normalizeClass, S2 = window.Vue.openBlock, y2 = window.Vue.createElementBlock;
function C2(e, t, n, o, s, a) {
  const i = f2("sx-section-selector");
  return S2(), y2("main", {
    class: v2(["sx-section-selector-view", a.classes])
  }, [
    _2(i)
  ], 2);
}
const k2 = /* @__PURE__ */ D(w2, [["render", C2]]), x2 = window.Vue.computed, b2 = window.Vuex.useStore, $2 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = F(
    b2()
  ), o = Ee();
  return x2(() => {
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
const V2 = window.Vue.watch, A2 = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: Go },
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
    const n = (s) => t("update:selection", s), o = $2(e);
    return V2(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, D2 = window.Vue.resolveComponent, E2 = window.Vue.createVNode, T2 = window.Vue.openBlock, L2 = window.Vue.createElementBlock, B2 = { class: "sx-content-comparator__source-target-selector" };
function P2(e, t, n, o, s, a) {
  const i = D2("mw-button-group");
  return T2(), L2("div", B2, [
    E2(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const F2 = /* @__PURE__ */ D(A2, [["render", P2]]), an = window.Vue.computed, M2 = window.Vue.ref, Cc = (e) => {
  const t = M2([]), {
    currentSectionSuggestion: n,
    currentSourceSection: o,
    currentTargetPage: s
  } = F(e), a = an(
    () => e.getters["application/getCurrentSourceSectionTitle"]
  ), i = an(
    () => n.value.missingSections[a.value] || n.value.presentSections[a.value] || ""
  ), c = an(
    () => {
      var g;
      return (((g = l.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), l = an(
    () => {
      var g;
      return (g = s.value) == null ? void 0 : g.getSectionByTitle(i.value);
    }
  ), d = an(() => {
    var g;
    return (g = o.value) == null ? void 0 : g.html;
  }), r = an(() => {
    var g;
    return (g = l.value) == null ? void 0 : g.html;
  }), u = an(
    () => !e.getters["application/isCurrentSourceSectionMissing"] && !t.value.includes(i.value)
  );
  return {
    activeSectionTargetTitle: i,
    discardedSections: t,
    isCurrentSectionMapped: u,
    sourceSectionContent: d,
    sourceSectionTitle: a,
    targetSectionAnchor: c,
    targetSectionContent: r
  };
};
const Uu = window.Vue.ref, Ks = window.Vue.computed, N2 = window.Vue.onMounted, I2 = window.Vuex.useStore, z2 = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: F2,
    MwRow: T,
    MwCol: y,
    MwButton: re
  },
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
  emits: ["update:sourceVsTargetSelection", "translation-button-clicked"],
  setup(e, t) {
    const n = I2(), o = Uu(!1), { currentSectionSuggestion: s } = F(n), a = Ks(
      () => n.getters["application/getCurrentSourceSectionTitle"]
    ), i = Ks(
      () => n.getters["application/getCurrentSourceSectionAnchor"]
    ), c = (m) => t.emit("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: l, targetSectionAnchor: d } = Cc(n), r = Ks(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: a.value,
            path: `${q.getPageUrl(
              s.value.sourceLanguage,
              s.value.sourceTitle
            )}#${i.value}`,
            lang: s.value.sourceLanguage,
            dir: O.getDir(s.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: s.value.targetTitle,
            path: u.value,
            lang: s.value.targetLanguage,
            dir: O.getDir(s.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${u.value}#${d.value}`
          };
      }
    }), u = Ks(
      () => q.getPageUrl(
        s.value.targetLanguage,
        s.value.targetTitle
      )
    ), g = Uu(null);
    return N2(() => {
      new IntersectionObserver(
        ([p]) => {
          o.value = p.intersectionRect.height < p.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(g.value.$el);
    }), {
      activeContent: r,
      contentHeader: g,
      isSticky: o,
      mwIconLinkExternal: Qr,
      mwIconEdit: ka,
      updateSelection: c
    };
  }
}, Ys = window.Vue.resolveComponent, Qs = window.Vue.createVNode, U2 = window.Vue.toDisplayString, R2 = window.Vue.createElementVNode, Js = window.Vue.withCtx, ji = window.Vue.openBlock, qi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const O2 = window.Vue.normalizeClass, H2 = ["lang", "dir", "textContent"];
function j2(e, t, n, o, s, a) {
  const i = Ys("sx-content-comparator-source-vs-target-selector"), c = Ys("mw-col"), l = Ys("mw-button"), d = Ys("mw-row");
  return ji(), qi(d, {
    ref: "contentHeader",
    class: O2(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: Js(() => [
      Qs(i, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      Qs(d, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: Js(() => [
          Qs(c, null, {
            default: Js(() => [
              R2("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: U2(o.activeContent.title)
              }, null, 8, H2)
            ]),
            _: 1
          }),
          Qs(c, { shrink: "" }, {
            default: Js(() => [
              o.isSticky ? (ji(), qi(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (r) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (ji(), qi(l, {
                key: 1,
                class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                icon: o.mwIconLinkExternal,
                type: "icon",
                href: o.activeContent.path,
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
  }, 8, ["class", "reverse"]);
}
const q2 = /* @__PURE__ */ D(z2, [["render", j2]]), Ru = window.Vue.computed, G2 = window.Vuex.useStore, W2 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: y,
    MwButton: re
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = G2(), n = Ru(
      () => t.getters["application/getCurrentSourceSectionTitle"]
    ), o = Ru(
      () => e.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = yc();
    return {
      goToNextSection: () => {
        const c = (o.value + 1) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[c];
        s(l);
      },
      goToPreviousSection: () => {
        const c = (o.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[c];
        s(l);
      },
      mwIconPrevious: Lh,
      mwIconArrowForward: Kr
    };
  }
}, Ou = window.Vue.resolveComponent, Hu = window.Vue.createVNode, X2 = window.Vue.withCtx, K2 = window.Vue.openBlock, Y2 = window.Vue.createBlock;
function Q2(e, t, n, o, s, a) {
  const i = Ou("mw-button"), c = Ou("mw-col");
  return K2(), Y2(c, {
    class: "justify-end",
    align: "center"
  }, {
    default: X2(() => [
      Hu(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      Hu(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const J2 = /* @__PURE__ */ D(W2, [["render", Q2]]);
const Z2 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: T,
    MwCol: y,
    MwButton: re
  },
  props: {
    suggestion: {
      type: Ye,
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
  data: () => ({
    mwIconTrash: wg,
    mwIconUndo: Nh
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(this.suggestion.targetLanguage)
      );
    }
  },
  methods: {
    discardMapping() {
      this.isDiscardedSection || this.$emit("update:discardedSections", [
        ...this.discardedSections,
        this.targetSectionTitle
      ]);
    },
    undoDiscard() {
      this.isDiscardedSection && this.$emit(
        "update:discardedSections",
        this.discardedSections.filter(
          (e) => e !== this.targetSectionTitle
        )
      );
    }
  }
}, ju = window.Vue.toDisplayString, e4 = window.Vue.resolveDirective, Gi = window.Vue.withDirectives, Vn = window.Vue.openBlock, Zs = window.Vue.createElementBlock, t4 = window.Vue.createCommentVNode, n4 = window.Vue.createTextVNode, qu = window.Vue.createElementVNode, o4 = window.Vue.normalizeClass, Wi = window.Vue.resolveComponent, Xi = window.Vue.withCtx, Ki = window.Vue.createVNode, Gu = window.Vue.createBlock, s4 = { class: "sx-content-comparator-header__mapped-section" }, a4 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, i4 = { key: 0 }, r4 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, c4 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function l4(e, t, n, o, s, a) {
  const i = Wi("mw-col"), c = Wi("mw-button"), l = Wi("mw-row"), d = e4("i18n");
  return Vn(), Zs("div", s4, [
    Ki(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: Xi(() => [
        Ki(i, { grow: "" }, {
          default: Xi(() => [
            qu("h6", a4, [
              n4(ju(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? Gi((Vn(), Zs("span", i4, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : t4("", !0)
            ]),
            qu("h6", {
              class: o4(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, ju(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        Ki(i, { shrink: "" }, {
          default: Xi(() => [
            a.isDiscardedSection ? (Vn(), Gu(c, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (Vn(), Gu(c, {
              key: 0,
              class: "pa-0",
              icon: e.mwIconTrash,
              type: "icon",
              onClick: a.discardMapping
            }, null, 8, ["icon", "onClick"]))
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    a.isDiscardedSection ? Gi((Vn(), Zs("p", c4, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : Gi((Vn(), Zs("p", r4, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const u4 = /* @__PURE__ */ D(Z2, [["render", l4]]);
const ea = window.Vue.computed, d4 = window.Vuex.useStore, g4 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: u4,
    SxContentComparatorHeaderNavigation: J2,
    MwButton: re,
    MwCol: y,
    MwRow: T,
    MwIcon: ie
  },
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const e = d4(), {
      currentSectionSuggestion: t,
      currentSourceSection: n
    } = F(e), o = ea(
      () => e.getters["application/isCurrentSourceSectionMissing"]
    ), s = ea(
      () => e.getters["application/isCurrentSourceSectionPresent"]
    ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = Cc(e), c = ea(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = ea(() => [
      ...Object.keys(t.value.missingSections),
      ...Object.keys(t.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: Bh,
      mwIconEdit: ka,
      mwIconEye: Fh,
      sectionSourceTitles: l,
      sourceSectionContent: c,
      sourceSectionTitle: i,
      suggestion: t,
      getDir: O.getDir
    };
  }
}, An = window.Vue.resolveComponent, vt = window.Vue.createVNode, Wu = window.Vue.toDisplayString, Io = window.Vue.createElementVNode, Dn = window.Vue.withCtx, m4 = window.Vue.resolveDirective, Xu = window.Vue.withDirectives, Yi = window.Vue.openBlock, Ku = window.Vue.createBlock, Yu = window.Vue.createCommentVNode, p4 = window.Vue.createElementBlock, h4 = { class: "sx-content-comparator__header pa-4" }, w4 = ["lang", "dir"], f4 = ["lang", "dir"], _4 = /* @__PURE__ */ Io("br", null, null, -1);
function v4(e, t, n, o, s, a) {
  const i = An("mw-button"), c = An("mw-col"), l = An("sx-content-comparator-header-navigation"), d = An("mw-row"), r = An("mw-icon"), u = An("sx-content-comparator-header-mapped-section"), g = m4("i18n");
  return Yi(), p4("div", h4, [
    vt(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    vt(d, { class: "my-1 py-2 mx-0" }, {
      default: Dn(() => [
        vt(c, { grow: "" }, {
          default: Dn(() => [
            Io("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Wu(o.suggestion.sourceTitle), 9, w4),
            Io("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Wu(o.sourceSectionTitle), 9, f4)
          ]),
          _: 1
        }),
        vt(l, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        vt(c, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: Dn(() => [
            vt(i, {
              icon: o.mwIconEdit,
              progressive: "",
              label: e.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !o.sourceSectionContent,
              onClick: t[1] || (t[1] = (m) => e.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    o.isCurrentSectionMissing ? (Yi(), Ku(d, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: Dn(() => [
        vt(c, {
          shrink: "",
          class: "pe-2"
        }, {
          default: Dn(() => [
            vt(r, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        vt(c, { class: "ma-0" }, {
          default: Dn(() => [
            Xu(Io("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            _4,
            Xu(Io("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : Yu("", !0),
    o.isCurrentSectionPresent ? (Yi(), Ku(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Yu("", !0)
  ]);
}
const S4 = /* @__PURE__ */ D(g4, [["render", v4]]);
const y4 = {
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
}, Qu = window.Vue.toDisplayString, C4 = window.Vue.createElementVNode, Ju = window.Vue.openBlock, Zu = window.Vue.createElementBlock, k4 = window.Vue.createCommentVNode, x4 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, b4 = ["textContent"], $4 = ["textContent"];
function V4(e, t, n, o, s, a) {
  return Ju(), Zu("section", x4, [
    C4("h5", {
      textContent: Qu(n.placeholderTitle)
    }, null, 8, b4),
    n.placeholderSubtitle ? (Ju(), Zu("p", {
      key: 0,
      textContent: Qu(n.placeholderSubtitle)
    }, null, 8, $4)) : k4("", !0)
  ]);
}
const Lm = /* @__PURE__ */ D(y4, [["render", V4]]), A4 = window.Vue.computed, D4 = window.Vue.createApp, E4 = window.Vuex.useStore, T4 = () => {
  const e = E4(), {
    currentSectionSuggestion: t,
    currentTargetPage: n
  } = F(e), o = Ee(), s = () => D4(
    Lm,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), i = (c) => {
    const l = c.getElementsByTagName("base");
    Array.from(l).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return A4(() => {
    var r;
    const c = document.createElement("div");
    c.innerHTML = (r = n.value) == null ? void 0 : r.content, i(c);
    const l = s(), d = a(
      t.value
    );
    if (d) {
      const u = Array.from(
        c.querySelectorAll("h2")
      ).filter((g) => g.textContent.match(d));
      if (u && u.length) {
        const g = u[0].parentNode;
        g.parentNode.insertBefore(
          l,
          g
        );
      }
    } else
      c.appendChild(l);
    return c.innerHTML;
  });
};
const L4 = window.Vue.ref, B4 = window.Vue.computed, P4 = window.Vue.watch, F4 = window.Vuex.useStore, M4 = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Lm,
    SxContentComparatorHeader: S4,
    SxContentComparatorContentHeader: q2,
    MwSpinner: Xe
  },
  setup() {
    const e = F4(), t = we(), n = L4("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      hm() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: i,
      isCurrentSectionMapped: c,
      sourceSectionContent: l,
      targetSectionContent: d
    } = Cc(e), r = T4(), {
      currentSectionSuggestion: u,
      sourceLanguage: g,
      targetLanguage: m
    } = F(e), p = B4(() => u.value.targetTitle);
    return P4(
      p,
      () => e.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: m.value,
        targetLanguage: g.value,
        sourceTitle: p.value
      }),
      { immediate: !0 }
    ), {
      getDir: O.getDir,
      activeSectionTargetTitle: a,
      discardedSections: i,
      goToSectionSelector: o,
      isCurrentSectionMapped: c,
      sourceSectionContent: l,
      sourceVsTargetSelection: n,
      targetPageContent: r,
      targetSectionContent: d,
      translateSection: s,
      sourceLanguage: g,
      targetLanguage: m
    };
  }
}, ta = window.Vue.resolveComponent, Qi = window.Vue.createVNode, En = window.Vue.openBlock, ed = window.Vue.createBlock, td = window.Vue.createCommentVNode, na = window.Vue.createElementVNode, Ji = window.Vue.Fragment, oa = window.Vue.createElementBlock, N4 = { class: "sx-content-comparator" }, I4 = { class: "sx-content-comparator__source-content" }, z4 = ["lang", "dir", "innerHTML"], U4 = ["lang", "dir", "innerHTML"], R4 = ["innerHTML"];
function O4(e, t, n, o, s, a) {
  const i = ta("sx-content-comparator-header"), c = ta("sx-content-comparator-content-header"), l = ta("mw-spinner"), d = ta("sx-content-comparator-new-section-placeholder");
  return En(), oa("section", N4, [
    Qi(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (r) => o.discardedSections = r),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    Qi(c, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (r) => o.sourceVsTargetSelection = r),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    na("section", I4, [
      o.sourceVsTargetSelection === "source_section" ? (En(), oa(Ji, { key: 0 }, [
        o.sourceSectionContent ? td("", !0) : (En(), ed(l, { key: 0 })),
        na("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, z4)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (En(), oa(Ji, { key: 1 }, [
        o.targetPageContent ? td("", !0) : (En(), ed(l, { key: 0 })),
        na("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, U4)
      ], 64)) : (En(), oa(Ji, { key: 2 }, [
        na("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, R4),
        Qi(d, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const H4 = /* @__PURE__ */ D(M4, [["render", O4]]);
const j4 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: H4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, q4 = window.Vue.resolveComponent, G4 = window.Vue.createVNode, W4 = window.Vue.normalizeClass, X4 = window.Vue.openBlock, K4 = window.Vue.createElementBlock;
function Y4(e, t, n, o, s, a) {
  const i = q4("sx-content-comparator");
  return X4(), K4("main", {
    class: W4(["sx-content-comparator-view", a.classes])
  }, [
    G4(i)
  ], 2);
}
const Q4 = /* @__PURE__ */ D(j4, [["render", Y4]]);
const J4 = window.Vue.resolveDirective, wo = window.Vue.createElementVNode, nd = window.Vue.withDirectives, sa = window.Vue.unref, Zi = window.Vue.createVNode, od = window.Vue.toDisplayString, sd = window.Vue.createTextVNode, fo = window.Vue.withCtx, Z4 = window.Vue.openBlock, e3 = window.Vue.createBlock, t3 = { class: "mw-ui-dialog__header px-4 py-3" }, n3 = { class: "mw-ui-dialog__header-title" }, o3 = { class: "pa-4" }, s3 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, ad = window.Codex.CdxButton, a3 = {
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
      const l = J4("i18n");
      return Z4(), e3(sa(Qe), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.gray700
      }, {
        header: fo(() => [
          wo("div", t3, [
            nd(wo("span", n3, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: fo(() => [
          wo("div", s3, [
            Zi(sa(ad), {
              weight: "quiet",
              onClick: s
            }, {
              default: fo(() => [
                sd(od(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Zi(sa(ad), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: fo(() => [
                sd(od(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: fo(() => [
          Zi(sa(Wo)),
          wo("div", o3, [
            nd(wo("span", null, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
};
const er = window.Vue.computed, i3 = window.Vuex.useStore, r3 = {
  name: "SxTranslationSelector",
  components: { MwCard: ze, MwButton: re, MwDialog: Qe },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = W.EMPTY_TEXT_PROVIDER_KEY, o = W.ORIGINAL_TEXT_PROVIDER_KEY, s = i3(), {
      sourceLanguage: a,
      targetLanguage: i,
      currentSourceSection: c,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = F(s), r = er(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        a.value,
        i.value
      )
    ), u = er(() => {
      const w = [o, n];
      return r.value.filter(
        (f) => !w.includes(f)
      );
    }), g = er(
      () => l.value ? c.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = (w) => {
      s.dispatch("application/updateMTProvider", w), h();
    }, p = W.getMTProviderLabel, h = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: h,
      emptyTextProviderKey: n,
      getDir: O.getDir,
      getMTProviderLabel: p,
      mwIconClose: Kt,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: m,
      sourceLanguage: a
    };
  }
}, c3 = window.Vue.resolveDirective, Ne = window.Vue.createElementVNode, aa = window.Vue.withDirectives, tr = window.Vue.resolveComponent, nr = window.Vue.createVNode, zt = window.Vue.withCtx, l3 = window.Vue.renderList, u3 = window.Vue.Fragment, or = window.Vue.openBlock, d3 = window.Vue.createElementBlock, g3 = window.Vue.toDisplayString, id = window.Vue.createBlock, m3 = window.Vue.createCommentVNode, p3 = { class: "mw-ui-dialog__header pa-4" }, h3 = { class: "row ma-0 py-2" }, w3 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, f3 = { class: "mb-0" }, _3 = { class: "col shrink justify-center" }, v3 = { class: "pb-2 mb-0" }, S3 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, y3 = ["dir", "lang", "innerHTML"], C3 = ["textContent"], k3 = ["innerHTML"], x3 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, b3 = /* @__PURE__ */ Ne("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function $3(e, t, n, o, s, a) {
  const i = tr("mw-button"), c = tr("mw-card"), l = tr("mw-dialog"), d = c3("i18n");
  return n.active ? (or(), id(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: zt(() => [
      Ne("div", p3, [
        Ne("div", h3, [
          Ne("div", w3, [
            aa(Ne("h4", f3, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Ne("div", _3, [
            nr(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        aa(Ne("h6", v3, null, 512), [
          [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: zt(() => [
      nr(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (r) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: zt(() => [
          aa(Ne("h5", S3, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: zt(() => [
          Ne("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, y3)
        ]),
        _: 1
      }),
      (or(!0), d3(u3, null, l3(o.apiMtProviders, (r) => (or(), id(c, {
        key: r,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(r)
      }, {
        header: zt(() => [
          Ne("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: g3(o.getMTProviderLabel(r))
          }, null, 8, C3)
        ]),
        default: zt(() => [
          Ne("p", {
            innerHTML: o.proposedTranslations[r]
          }, null, 8, k3)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      nr(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (r) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: zt(() => [
          aa(Ne("h5", x3, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: zt(() => [
          b3
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : m3("", !0);
}
const V3 = /* @__PURE__ */ D(r3, [["render", $3]]);
const Tn = window.Vue.computed, A3 = window.Vuex.useStore, D3 = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: ie, MwCol: y },
  setup() {
    const e = A3(), t = "sx-sentence-selector__section-title", {
      currentSourceSection: n,
      isSectionTitleSelected: o,
      currentSourcePage: s,
      sourceLanguage: a
    } = F(e), i = Tn(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = Tn(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), l = Tn(
      () => q.getPageUrl(a.value, i.value)
    ), d = Tn(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = Tn(
      () => d.value ? "translated" : "selected"
    ), u = Tn(() => {
      const m = [t];
      return o.value && m.push(`${t}--${r.value}`), m;
    });
    return {
      mwIconLinkExternal: Qr,
      selectSectionTitle: () => e.dispatch("application/selectTranslationUnitById", 0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: c,
      titleClasses: u
    };
  }
}, E3 = window.Vue.toDisplayString, sr = window.Vue.createElementVNode, rd = window.Vue.resolveComponent, T3 = window.Vue.createVNode, L3 = window.Vue.normalizeClass, B3 = window.Vue.withCtx, P3 = window.Vue.openBlock, F3 = window.Vue.createBlock, M3 = ["href"], N3 = ["textContent"], I3 = ["innerHTML"];
function z3(e, t, n, o, s, a) {
  const i = rd("mw-icon"), c = rd("mw-col");
  return P3(), F3(c, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: B3(() => [
      sr("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        sr("strong", {
          textContent: E3(o.sourceArticleTitle)
        }, null, 8, N3),
        T3(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, M3),
      sr("h2", {
        class: L3(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, I3)
    ]),
    _: 1
  });
}
const U3 = /* @__PURE__ */ D(D3, [["render", z3]]);
const tt = window.Vue.unref, _o = window.Vue.createVNode, ia = window.Vue.withCtx, cd = window.Vue.toDisplayString, ld = window.Vue.createTextVNode, R3 = window.Vue.openBlock, O3 = window.Vue.createBlock, H3 = window.Vue.computed, j3 = window.Vuex.useStore, ar = window.Codex.CdxButton, ud = window.Codex.CdxIcon, Bm = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { currentSourceSection: t, proposedTranslation: n, isSectionTitleSelected: o } = F(j3()), s = H3(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (a, i) => (R3(), O3(tt(T), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: ia(() => [
        _o(tt(ar), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          disabled: tt(o),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: ia(() => [
            _o(tt(ud), {
              class: "me-1",
              icon: tt(vc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        _o(tt(ar), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !tt(n),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: ia(() => [
            ld(cd(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        _o(tt(ar), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: ia(() => [
            ld(cd(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            _o(tt(ud), {
              class: "ms-1",
              size: "small",
              icon: tt(ss)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const rn = window.Vue.unref, q3 = window.Vue.toDisplayString, vo = window.Vue.createVNode, ra = window.Vue.withCtx, G3 = window.Vue.openBlock, W3 = window.Vue.createBlock, ir = window.Vue.computed, X3 = window.Vuex.useStore, K3 = window.Codex.CdxButton, Y3 = window.Codex.CdxIcon, Q3 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = X3(), n = ir(() => t.state.application.currentMTProvider), o = Ee(), s = ir(() => ({
      [W.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [W.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = ir(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        W.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (G3(), W3(rn(y), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: ra(() => [
        vo(rn(T), { class: "ma-0 ps-5 pb-4" }, {
          default: ra(() => [
            vo(rn(y), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: q3(a.value)
            }, null, 8, ["textContent"]),
            vo(rn(y), {
              shrink: "",
              class: "pe-5"
            }, {
              default: ra(() => [
                vo(rn(K3), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  onClick: c[0] || (c[0] = (l) => i.$emit("configure-options"))
                }, {
                  default: ra(() => [
                    vo(rn(Y3), {
                      class: "pa-0",
                      icon: rn(bm)
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
    }));
  }
};
const qe = window.Vue.unref, Ut = window.Vue.createVNode, J3 = window.Vue.resolveDirective, dd = window.Vue.createElementVNode, Z3 = window.Vue.withDirectives, gd = window.Vue.toDisplayString, md = window.Vue.createTextVNode, So = window.Vue.withCtx, e$ = window.Vue.openBlock, t$ = window.Vue.createElementBlock, n$ = { class: "mt-retry-body pb-5" }, o$ = { class: "retry-body__message" }, pd = window.Codex.CdxButton, rr = window.Codex.CdxIcon, s$ = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = J3("i18n");
      return e$(), t$("div", n$, [
        dd("div", o$, [
          Ut(qe(rr), {
            class: "me-2",
            icon: qe(km)
          }, null, 8, ["icon"]),
          Z3(dd("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Ut(qe(T), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: So(() => [
            Ut(qe(y), { cols: "6" }, {
              default: So(() => [
                Ut(qe(pd), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: So(() => [
                    Ut(qe(rr), {
                      class: "me-1",
                      icon: qe(Vm)
                    }, null, 8, ["icon"]),
                    md(" " + gd(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ut(qe(y), { cols: "6" }, {
              default: So(() => [
                Ut(qe(pd), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: So(() => [
                    Ut(qe(rr), {
                      class: "me-1",
                      icon: qe(Iy)
                    }, null, 8, ["icon"]),
                    md(" " + gd(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Ln = window.Vue.createVNode, Ve = window.Vue.unref, yo = window.Vue.openBlock, a$ = window.Vue.createElementBlock, i$ = window.Vue.createCommentVNode, ca = window.Vue.createBlock, r$ = window.Vue.normalizeClass, c$ = window.Vue.normalizeStyle, Co = window.Vue.withCtx, l$ = window.Vue.toDisplayString, u$ = window.Vue.createTextVNode, d$ = window.Vue.normalizeProps, g$ = window.Vue.guardReactiveProps, m$ = ["lang", "dir", "innerHTML"], cr = window.Vue.ref, p$ = window.Vue.onMounted, lr = window.Vue.computed, h$ = window.Vue.watch, w$ = window.Vue.nextTick, f$ = window.Vuex.useStore, _$ = window.Codex.CdxButton, v$ = window.Codex.CdxIcon, S$ = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = cr(0), n = cr(null), o = cr(null), s = f$(), {
      currentMTProvider: a,
      targetLanguage: i,
      proposedTranslation: c,
      currentSourceSection: l
    } = F(s), d = lr(
      () => {
        var m;
        return (m = s.state.application.mtRequestsPending) == null ? void 0 : m.includes(
          l.value.selectedTranslationUnitId
        );
      }
    ), r = lr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = lr(
      () => !!c.value || a.value === W.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    return h$(a, g), p$(() => k(this, null, function* () {
      yield w$(), g();
    })), (m, p) => (yo(), ca(Ve(ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Co(() => [
        Ln(Ve(T), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Co(() => [
            Ln(Q3, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: p[0] || (p[0] = (h) => m.$emit("configure-options"))
            }, null, 512),
            Ln(Ve(y), {
              class: r$(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value
              }]),
              style: c$(r.value)
            }, {
              default: Co(() => [
                u.value ? (yo(), a$("section", {
                  key: 0,
                  lang: Ve(i),
                  dir: Ve(O.getDir)(Ve(i)),
                  innerHTML: Ve(c)
                }, null, 8, m$)) : d.value ? (yo(), ca(Ve(Xe), { key: 1 })) : (yo(), ca(s$, {
                  key: 2,
                  onConfigureOptions: p[1] || (p[1] = (h) => m.$emit("configure-options")),
                  onRetryTranslation: p[2] || (p[2] = (h) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Ln(Ve(y), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Co(() => [
                u.value || d.value ? (yo(), ca(Ve(_$), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: p[3] || (p[3] = (h) => m.$emit("edit-translation", Ve(c)))
                }, {
                  default: Co(() => [
                    Ln(Ve(v$), {
                      class: "me-1",
                      icon: Ve(_c)
                    }, null, 8, ["icon"]),
                    u$(" " + l$(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : i$("", !0),
                Ln(Bm, d$(g$(m.$attrs)), null, 16)
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
}, y$ = window.Vue.computed, C$ = (e) => y$(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const i = ["untranslated", "translated", "selected"].map(
      (l) => `${t}--${l}`
    );
    s.classList.remove(...i), a.selected && s.classList.add(`${t}--selected`);
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const k$ = window.Vue.onMounted, x$ = window.Vue.ref, b$ = window.Vue.computed, $$ = window.Vuex.useStore, V$ = {
  name: "SubSection",
  props: {
    subSection: {
      type: Ae,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = x$(null), o = C$(e.subSection);
    k$(() => {
      n.value.addEventListener("click", (c) => {
        let l;
        if (e.subSection.isBlockTemplate)
          l = e.subSection;
        else {
          const d = c.composedPath().find(
            (r) => r instanceof Element && r.classList.contains("cx-segment")
          );
          if (!d)
            return;
          l = e.subSection.getSentenceById(
            d.dataset.segmentid
          );
        }
        a(l);
      });
    });
    const s = $$(), a = (c) => {
      if (c.selected) {
        t("bounce-translation");
        return;
      }
      s.dispatch(
        "application/selectTranslationUnitById",
        c.id
      );
    }, i = b$(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, A$ = window.Vue.normalizeClass, D$ = window.Vue.openBlock, E$ = window.Vue.createElementBlock, T$ = ["innerHTML"];
function L$(e, t, n, o, s, a) {
  return D$(), E$("div", {
    ref: "subSectionRoot",
    class: A$(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, T$);
}
const B$ = /* @__PURE__ */ D(V$, [["render", L$]]);
const hd = window.Vue.computed, P$ = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: xg,
    MwIcon: ie
  },
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
    const t = hd(() => ({ "--size": e.size })), n = hd(
      () => !e.isTemplateAdapted || e.percentage === 0 ? Jr : Un
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, wd = window.Vue.resolveComponent, fd = window.Vue.createVNode, _d = window.Vue.normalizeStyle, F$ = window.Vue.openBlock, M$ = window.Vue.createElementBlock;
function N$(e, t, n, o, s, a) {
  const i = wd("mw-circle-progress-bar"), c = wd("mw-icon");
  return F$(), M$("div", {
    class: "block-template-status-indicator",
    style: _d(o.cssVars)
  }, [
    fd(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    fd(c, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: _d({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const Pm = /* @__PURE__ */ D(P$, [["render", N$]]), I$ = window.Vuex.useStore, ko = window.Vue.computed, z$ = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: y,
    MwRow: T,
    MwButton: re,
    MwIcon: ie,
    MwRadioGroup: Cg,
    MwRadio: ya,
    MwDivider: Wo,
    MwDialog: Qe,
    MwCircleProgressBar: xg,
    BlockTemplateStatusIndicator: Pm
  },
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
    const { targetLanguageAutonym: t } = F(I$()), n = ko(
      () => !e.isTemplateAdapted || o.value === 0 ? Jr : Un
    ), o = ko(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = Ee(), a = ko(() => {
      let l;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? l = "cx-sx-block-template-mapping-status-title-partially-template" : l = "cx-sx-block-template-mapping-status-title-fully-template" : l = "cx-sx-block-template-mapping-status-title-unadapted-template" : l = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(l);
    }), i = ko(() => {
      let l;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? l = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? l = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : l = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(l);
    }), c = ko(() => {
      let l = [];
      if (!e.targetTemplateExists)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: Rh,
          color: Ie.gray500
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Kt,
          color: Ie.gray500
        });
      else if (o.value < 100)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: Un,
          color: Ie.blue600
        });
      else {
        let d;
        e.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : d = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), l.push({
          text: d,
          icon: Un,
          color: Ie.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: ka,
        color: Ie.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: hg,
        color: Ie.gray500
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: Un,
      mwIconInfo: Ah,
      notes: c
    };
  }
}, xo = window.Vue.resolveComponent, bo = window.Vue.openBlock, la = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Bn = window.Vue.withCtx, $o = window.Vue.createVNode, ur = window.Vue.toDisplayString, dr = window.Vue.createElementVNode, U$ = window.Vue.renderList, R$ = window.Vue.Fragment, O$ = window.Vue.createElementBlock, H$ = { class: "pa-4" }, j$ = ["textContent"], q$ = ["textContent"];
function G$(e, t, n, o, s, a) {
  const i = xo("block-template-status-indicator"), c = xo("mw-icon"), l = xo("mw-col"), d = xo("mw-row"), r = xo("mw-dialog");
  return bo(), la(r, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: Bn(() => [
      $o(d, {
        justify: "center",
        class: "mt-4"
      }, {
        default: Bn(() => [
          $o(l, { shrink: "" }, {
            default: Bn(() => [
              n.targetTemplateExists ? (bo(), la(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (bo(), la(c, {
                key: 1,
                icon: o.mwIconInfo
              }, null, 8, ["icon"]))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    default: Bn(() => [
      dr("div", H$, [
        dr("h3", {
          textContent: ur(o.statusText)
        }, null, 8, j$),
        dr("p", {
          class: "mt-6 text-small",
          textContent: ur(o.statusExplanation)
        }, null, 8, q$),
        (bo(!0), O$(R$, null, U$(o.notes, (u, g) => (bo(), la(d, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: Bn(() => [
            $o(l, { shrink: "" }, {
              default: Bn(() => [
                $o(c, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            $o(l, {
              textContent: ur(u.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const W$ = /* @__PURE__ */ D(z$, [["render", G$]]);
const se = window.Vue.unref, me = window.Vue.createVNode, nt = window.Vue.withCtx, gr = window.Vue.toDisplayString, vd = window.Vue.createTextVNode, X$ = window.Vue.resolveDirective, Sd = window.Vue.withDirectives, yd = window.Vue.createElementVNode, K$ = window.Vue.normalizeClass, ua = window.Vue.openBlock, Cd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const kd = window.Vue.createBlock, Y$ = window.Vue.normalizeProps, Q$ = window.Vue.guardReactiveProps, J$ = { class: "block-template-adaptation-card__container pa-4" }, Z$ = ["textContent"], eV = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, ye = window.Vue.computed, tV = window.Vue.ref, nV = window.Vuex.useStore, xd = window.Codex.CdxButton, bd = window.Codex.CdxIcon, oV = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = nV(), {
      selectedContentTranslationUnit: n,
      targetLanguageAutonym: o,
      currentMTProvider: s,
      proposedTranslation: a
    } = F(t), i = ye(() => {
      var B;
      return ((B = n.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), c = ye(
      () => {
        var A;
        return (A = n.value) == null ? void 0 : A.getTargetBlockTemplateNameByProvider(
          s.value
        );
      }
    ), l = ye(
      () => {
        var A;
        return !((A = t.state.application.mtRequestsPending) != null && A.includes(
          n.value.id
        ));
      }
    ), d = Ee(), r = ye(
      // Strip HTML comments and return
      () => {
        var A, B;
        return ((B = (A = n.value) == null ? void 0 : A.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), u = ye(
      () => {
        var A;
        return (A = n.value.blockTemplateAdaptationInfo) == null ? void 0 : A[s.value];
      }
    ), g = ye(
      () => {
        var A, B;
        return ((A = u.value) == null ? void 0 : A.adapted) || !!((B = u.value) != null && B.partial);
      }
    ), m = ye(() => u.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), p = ye(() => u.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = ye(
      () => {
        var A;
        return Object.keys(((A = n.value) == null ? void 0 : A.sourceTemplateParams) || {}).length;
      }
    ), w = ye(() => {
      var B;
      const A = (B = n.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        s.value
      );
      return Object.keys(A || {});
    }), f = ye(() => w.value.length), v = ye(() => {
      const A = L.value;
      return h.value + A === 0 ? 100 : f.value / (h.value + A) * 100 || 0;
    }), C = tV(!1), x = () => {
      C.value = !0;
    }, P = (A) => A.filter((B) => !w.value.includes(B)), L = ye(() => {
      var B;
      const A = ((B = u.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return P(A).length;
    }), U = ye(() => {
      var B;
      const A = ((B = u.value) == null ? void 0 : B.optionalTargetParams) || [];
      return P(A).length;
    });
    return (A, B) => {
      const Te = X$("i18n");
      return ua(), kd(se(ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: nt(() => [
          yd("div", J$, [
            me(se(T), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: nt(() => [
                me(se(y), { shrink: "" }, {
                  default: nt(() => [
                    me(se(bd), {
                      icon: se(zy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                me(se(y), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: nt(() => [
                    vd(gr(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (ua(), Cd("div", {
              key: 0,
              class: K$(["pa-4 mb-4", m.value])
            }, [
              me(se(T), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: nt(() => [
                  Sd(me(se(y), { tag: "h5" }, null, 512), [
                    [Te, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  me(se(y), { shrink: "" }, {
                    default: nt(() => [
                      me(Pm, {
                        percentage: v.value,
                        size: 20,
                        "is-template-adapted": g.value,
                        "stroke-width": 2,
                        onClick: x
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              yd("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: gr(c.value)
              }, null, 8, Z$),
              me(se(xd), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (_e) => A.$emit("edit-translation", i.value))
              }, {
                default: nt(() => [
                  vd(gr(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : l.value ? (ua(), Cd("div", eV, [
              me(se(T), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: nt(() => [
                  Sd(me(se(y), { tag: "h5" }, null, 512), [
                    [Te, [
                      se(o)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  me(se(y), { shrink: "" }, {
                    default: nt(() => [
                      me(se(xd), { weight: "quiet" }, {
                        default: nt(() => [
                          me(se(bd), {
                            icon: se(Ny),
                            onClick: x
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
            ])) : (ua(), kd(se(Xe), { key: 2 }))
          ]),
          me(Bm, Y$(Q$(A.$attrs)), null, 16),
          me(W$, {
            active: C.value,
            "onUpdate:active": B[1] || (B[1] = (_e) => C.value = _e),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": L.value,
            "optional-missing-params-count": U.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const sV = window.Vue.computed, aV = window.Vuex.useStore, iV = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: Go },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = F(aV()), o = Ee();
    return { scopeOptions: sV(() => [
      {
        value: "sentence",
        props: {
          label: o.i18n(
            "cx-sx-sentence-selector-translated-segment-sentence-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      },
      {
        value: "paragraph",
        props: {
          label: o.i18n(
            "cx-sx-sentence-selector-translated-segment-paragraph-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4",
          disabled: n.value
        }
      }
    ]), updateSelection: (i) => t("update:selection", i) };
  }
}, rV = window.Vue.resolveComponent, cV = window.Vue.createVNode, lV = window.Vue.openBlock, uV = window.Vue.createElementBlock, dV = { class: "translated-segment-card-header" };
function gV(e, t, n, o, s, a) {
  const i = rV("mw-button-group");
  return lV(), uV("div", dV, [
    cV(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const mV = /* @__PURE__ */ D(iV, [["render", gV]]);
const Rt = window.Vue.unref, da = window.Vue.createVNode, mr = window.Vue.withCtx, pV = window.Vue.openBlock, hV = window.Vue.createBlock, wV = window.Vue.computed, fV = window.Vuex.useStore, $d = window.Codex.CdxButton, Vd = window.Codex.CdxIcon, _V = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { currentSourceSection: t, isSectionTitleSelected: n } = F(
      fV()
    ), o = wV(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (pV(), hV(Rt(T), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: mr(() => [
        da(Rt($d), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Rt(n),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: mr(() => [
            da(Rt(Vd), { icon: Rt(vc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        da(Rt($d), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: mr(() => [
            da(Rt(Vd), { icon: Rt(ss) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const vV = window.Vue.useCssVars, pe = window.Vue.createVNode, Ad = window.Vue.resolveDirective, SV = window.Vue.createElementVNode, pr = window.Vue.withDirectives, J = window.Vue.unref, yV = window.Vue.normalizeStyle, ga = window.Vue.openBlock, Dd = window.Vue.createElementBlock, CV = window.Vue.createCommentVNode, kV = window.Vue.normalizeClass, Pe = window.Vue.withCtx, xV = window.Vue.toDisplayString, bV = window.Vue.createTextVNode, Ed = window.Vue.createBlock, $V = window.Vue.normalizeProps, VV = window.Vue.guardReactiveProps, St = window.Vue.computed, AV = window.Vue.ref, DV = window.Vue.inject, EV = window.Vuex.useStore, TV = window.Codex.CdxButton, hr = window.Codex.CdxIcon, LV = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    vV((v) => ({
      "7a6abbb9": f.value
    }));
    const t = AV("sentence"), {
      isSectionTitleSelected: n,
      currentSourceSection: o,
      selectedContentTranslationUnit: s,
      targetLanguage: a
    } = F(EV()), i = St(() => t.value === "sentence"), c = St(
      () => o.value.subSections.find(
        (v) => v.sentences.some(
          (C) => {
            var x;
            return C.id === ((x = s.value) == null ? void 0 : x.id);
          }
        )
      )
    ), l = St(() => {
      var v;
      return n.value ? o.value.mtProposedTranslationUsedForTitle : i.value ? (v = s.value) == null ? void 0 : v.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), d = DV("colors"), r = d.gray200, u = d.red600, g = St(() => n.value ? o.value.translatedTitle : i.value ? s.value.translatedContent : c.value.translatedContent), m = St(
      () => Wt.calculateScore(
        g.value,
        l.value,
        a.value
      )
    ), p = St(
      () => Wt.getScoreStatus(m.value)
    ), h = St(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = St(() => ({
      failure: m.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), f = St(
      () => w.value[p.value]
    );
    return (v, C) => {
      const x = Ad("i18n"), P = Ad("i18n-html");
      return ga(), Ed(J(ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Pe(() => [
          pe(J(T), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Pe(() => [
              pe(mV, {
                selection: t.value,
                "onUpdate:selection": C[0] || (C[0] = (L) => t.value = L)
              }, null, 8, ["selection"]),
              pe(J(y), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Pe(() => [
                  pe(J(T), { class: "ma-0" }, {
                    default: Pe(() => [
                      pe(J(y), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Pe(() => [
                          pr(SV("h5", null, null, 512), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? pr((ga(), Dd("p", {
                            key: 0,
                            style: yV({ color: J(u) })
                          }, null, 4)), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : pr((ga(), Dd("p", {
                            key: 1,
                            class: kV(h.value)
                          }, null, 2)), [
                            [P, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      pe(J(y), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Pe(() => [
                          pe(J(T), { class: "ma-0 ms-2" }, {
                            default: Pe(() => [
                              pe(J(y), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Pe(() => [
                                  pe(J(hr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: J(Oy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              pe(J(y), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Pe(() => [
                                  pe(J(kg), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: J(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              pe(J(y), { shrink: "" }, {
                                default: Pe(() => [
                                  pe(J(hr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: J(Uy)
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
                  i.value ? (ga(), Ed(J(TV), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: C[1] || (C[1] = (L) => v.$emit("edit-translation", g.value))
                  }, {
                    default: Pe(() => [
                      pe(J(hr), {
                        class: "me-1",
                        icon: J(_c)
                      }, null, 8, ["icon"]),
                      bV(" " + xV(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : CV("", !0)
                ]),
                _: 1
              }),
              pe(J(y), { class: "translated-segment-card__actions" }, {
                default: Pe(() => [
                  pe(_V, $V(VV(v.$attrs)), null, 16)
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
}, BV = window.Vuex.useStore, PV = () => {
  const e = BV();
  return () => {
    const { currentTranslation: t } = e.state.application, { currentSourceSection: n, selectedContentTranslationUnit: o } = F(e);
    if (n.value)
      if (t && !o.value) {
        const { lastTranslatedContentTranslationUnit: s } = n.value;
        n.value.selectTranslationUnitById(
          (s == null ? void 0 : s.id) || 0
        ), e.dispatch("application/selectNextTranslationUnit");
      } else
        o.value || e.dispatch("application/selectTranslationUnitById", 0);
  };
}, Fm = window.Vuex.useStore, FV = () => {
  const e = Fm(), { sourceLanguage: t, targetLanguage: n } = F(e);
  return () => k(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield xa.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, MV = () => {
  const e = Fm(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = F(e), s = FV();
  return () => k(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = W.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, NV = window.Vuex.useStore, IV = window.Vue.computed, zV = (e) => {
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
}, UV = () => {
  const e = NV(), { selectedContentTranslationUnit: t } = F(e), n = IV(
    () => t.value instanceof Ae
  );
  return () => {
    if (!t.value)
      return;
    const o = t.value.id, s = n.value ? document.getElementById(o) : document.querySelector(`[data-segmentid='${o}']`);
    s && zV(s);
  };
};
const le = window.Vue.unref, Fe = window.Vue.createVNode, yt = window.Vue.withCtx, RV = window.Vue.resolveDirective, Td = window.Vue.createElementVNode, OV = window.Vue.withDirectives, HV = window.Vue.toDisplayString, jV = window.Vue.createTextVNode, qV = window.Vue.renderList, GV = window.Vue.Fragment, Ot = window.Vue.openBlock, Ld = window.Vue.createElementBlock, Pn = window.Vue.createBlock;
window.Vue.createCommentVNode;
const WV = window.Vue.normalizeClass, XV = window.Vue.normalizeStyle, KV = { class: "sx-sentence-selector__header-title mb-0" }, YV = { class: "sx-sentence-selector__section-contents px-4" }, Fn = window.Vue.computed, QV = window.Vue.nextTick, JV = window.Vue.onMounted, ma = window.Vue.ref, Bd = window.Vue.watch, ZV = window.Vuex.useStore, Pd = window.Codex.CdxButton, e5 = window.Codex.CdxIcon, t5 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ma(!1), n = ma(!1), o = ma("100%"), s = ZV(), {
      currentSourcePage: a,
      currentTargetPage: i,
      currentSourceSection: c,
      selectedContentTranslationUnit: l,
      currentMTProvider: d,
      sourceLanguage: r,
      targetLanguage: u
    } = F(s), g = Fn(
      () => s.state.application.translationDataLoadingCounter === 0
    ), m = Fn(
      () => {
        var Z;
        return (Z = c.value) == null ? void 0 : Z.isSelectedTranslationUnitTranslated;
      }
    ), p = Fn(() => {
      var Z;
      return (Z = c.value) == null ? void 0 : Z.subSections;
    }), h = Fn(
      () => {
        var Z;
        return (Z = c.value) == null ? void 0 : Z.selectedTranslationUnitOriginalContent;
      }
    ), w = Fn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), f = ct(), v = PV();
    MV()();
    const x = UV();
    JV(() => {
      Bd(
        g,
        () => k(this, null, function* () {
          g.value && (yield QV(), v(), x());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Bd(l, x);
    const P = () => s.dispatch("application/selectNextTranslationUnit"), L = () => s.dispatch("application/selectPreviousTranslationUnit"), U = () => {
      f({
        event_type: "editor_segment_add",
        translation_source_language: r.value,
        translation_target_language: u.value
      }), s.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );
    }, A = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, B = we(), Te = () => {
      const { autoSavePending: Z } = s.state.application;
      if (Z) {
        Re.value = !0;
        return;
      }
      H();
    }, { fetchTranslationsByStatus: _e } = Va(), H = () => k(this, null, function* () {
      _e("draft"), fn(null), s.dispatch("application/clearPendingSaveTranslationRequests"), yield B.push({ name: "dashboard" }), c.value.reset(), s.commit("application/setCurrentSourceSection", null), s.commit("application/setCurrentSectionSuggestion", null);
      const { currentTranslation: Z } = s.state.application;
      Z && (s.commit("application/setCurrentTranslationRestored", !1), s.commit("application/setCurrentTranslation", null));
    }), Y = () => {
      Je.value || (t.value = !0, s.dispatch("application/translateSelectedTranslationUnitForAllProviders"));
    }, oe = (Z, ue) => {
      var Le;
      B.push({
        name: "sx-editor",
        state: {
          content: Z,
          originalContent: h.value,
          title: ((Le = i.value) == null ? void 0 : Le.title) || a.value.title,
          isInitialEdit: ue || null
        }
      });
    }, Ue = () => B.push({ name: "sx-publisher" }), _n = () => k(this, null, function* () {
      l.value ? yield s.dispatch("application/translateTranslationUnitById", {
        id: l.value.id,
        provider: d.value
      }) : yield s.dispatch("application/translateTranslationUnitById", {
        id: 0,
        provider: d.value
      });
    }), Je = Fn(
      () => l.value instanceof Ae
    ), Re = ma(!1);
    return (Z, ue) => {
      const Le = RV("i18n");
      return Ot(), Ld("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: XV(w.value)
      }, [
        Fe(le(T), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: yt(() => [
            Fe(le(y), { shrink: "" }, {
              default: yt(() => [
                Fe(le(Pd), {
                  weight: "quiet",
                  class: "px-3",
                  onClick: Te
                }, {
                  default: yt(() => [
                    Fe(le(e5), { icon: le(xm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Fe(le(y), {
              grow: "",
              class: "px-1"
            }, {
              default: yt(() => [
                OV(Td("h4", KV, null, 512), [
                  [Le, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Fe(le(y), {
              shrink: "",
              class: "px-3"
            }, {
              default: yt(() => [
                Fe(le(Pd), {
                  disabled: !(le(c) && le(c).isTranslated),
                  onClick: Ue
                }, {
                  default: yt(() => [
                    jV(HV(Z.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        g.value ? (Ot(), Pn(le(T), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: yt(() => [
            Fe(le(y), {
              dir: le(O.getDir)(le(r)),
              lang: le(r),
              class: "sx-sentence-selector__section"
            }, {
              default: yt(() => [
                Fe(U3),
                Td("div", YV, [
                  (Ot(!0), Ld(GV, null, qV(p.value, (ee) => (Ot(), Pn(B$, {
                    id: ee.id,
                    key: `sub-section-${ee.id}`,
                    "sub-section": ee,
                    onBounceTranslation: A
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Je.value && m.value ? (Ot(), Pn(LV, {
              key: 0,
              onEditTranslation: ue[0] || (ue[0] = (ee) => oe(ee, !1)),
              onSkipTranslation: P,
              onSelectPreviousSegment: L
            })) : Je.value ? (Ot(), Pn(oV, {
              key: 2,
              onEditTranslation: oe,
              onApplyTranslation: U,
              onSkipTranslation: P,
              onSelectPreviousSegment: L
            })) : (Ot(), Pn(S$, {
              key: 1,
              class: WV({ "mb-0": !n.value }),
              onConfigureOptions: Y,
              onEditTranslation: ue[1] || (ue[1] = (ee) => oe(ee, !0)),
              onApplyTranslation: U,
              onSkipTranslation: P,
              onSelectPreviousSegment: L,
              onRetryTranslation: _n
            }, null, 8, ["class"]))
          ]),
          _: 1
        })) : (Ot(), Pn(le(T), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: yt(() => [
            Fe(le(Xe), { class: "mt-0" })
          ]),
          _: 1
        })),
        Fe(V3, {
          active: t.value,
          "onUpdate:active": ue[2] || (ue[2] = (ee) => t.value = ee)
        }, null, 8, ["active"]),
        Fe(a3, {
          modelValue: Re.value,
          "onUpdate:modelValue": ue[3] || (ue[3] = (ee) => Re.value = ee),
          onDiscardTranslation: H
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const n5 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: t5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, o5 = window.Vue.resolveComponent, s5 = window.Vue.createVNode, a5 = window.Vue.normalizeClass, i5 = window.Vue.openBlock, r5 = window.Vue.createElementBlock;
function c5(e, t, n, o, s, a) {
  const i = o5("sx-sentence-selector");
  return i5(), r5("main", {
    class: a5(["sx-sentence-selector-view", a.classes])
  }, [
    s5(i)
  ], 2);
}
const l5 = /* @__PURE__ */ D(n5, [["render", c5]]), u5 = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, d5 = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const g5 = window.Vue.resolveDirective, pa = window.Vue.withDirectives, Ge = window.Vue.openBlock, Ct = window.Vue.createElementBlock, ha = window.Vue.createCommentVNode, wa = window.Vue.Transition, cn = window.Vue.withCtx, Mn = window.Vue.createVNode, Vo = window.Vue.createElementVNode, ln = window.Vue.unref, m5 = window.Vue.renderList, p5 = window.Vue.Fragment, h5 = window.Vue.normalizeClass, Fd = window.Vue.createBlock, w5 = window.Vue.toDisplayString, f5 = window.Vue.createTextVNode, _5 = { class: "sx-quick-tutorial" }, v5 = { class: "sx-quick-tutorial__main-point py-9 px-6" }, S5 = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, y5 = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, C5 = { class: "sx-quick-tutorial__illustration" }, k5 = ["innerHTML"], x5 = ["innerHTML"], b5 = { class: "sx-quick-tutorial__step-indicator py-3" }, $5 = ["onClick"], V5 = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, A5 = {
  key: "secondary-point-1",
  class: "ma-0"
}, D5 = {
  key: "secondary-point-2",
  class: "ma-0"
}, E5 = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Md = window.Vue.ref, Nd = window.Codex.CdxButton, T5 = window.Codex.CdxIcon, L5 = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Md(2), n = Md(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (c) => c === n.value, a = we(), i = () => a.push({ name: "sx-sentence-selector" });
    return (c, l) => {
      const d = g5("i18n");
      return Ge(), Ct("section", _5, [
        Mn(ln(T), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: cn(() => [
            Vo("section", v5, [
              Mn(wa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: cn(() => [
                  s(1) ? pa((Ge(), Ct("h2", S5, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? pa((Ge(), Ct("h2", y5, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ha("", !0)
                ]),
                _: 1
              })
            ]),
            Vo("section", C5, [
              Mn(wa, { name: "mw-ui-animation-slide-left" }, {
                default: cn(() => [
                  s(1) ? (Ge(), Ct("div", {
                    key: "illustration-1",
                    innerHTML: ln(d5)
                  }, null, 8, k5)) : s(2) ? (Ge(), Ct("div", {
                    key: "illustration-2",
                    innerHTML: ln(u5)
                  }, null, 8, x5)) : ha("", !0)
                ]),
                _: 1
              })
            ]),
            Vo("div", b5, [
              (Ge(!0), Ct(p5, null, m5(t.value, (r) => (Ge(), Ct("span", {
                key: `dot-${r}`,
                class: h5(["dot mx-1", { "dot-active": s(r) }]),
                role: "button",
                onClick: (u) => n.value = r
              }, null, 10, $5))), 128))
            ]),
            Vo("section", V5, [
              Mn(wa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: cn(() => [
                  s(1) ? pa((Ge(), Ct("h3", A5, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? pa((Ge(), Ct("h3", D5, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ha("", !0)
                ]),
                _: 1
              })
            ]),
            Vo("div", E5, [
              Mn(wa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: cn(() => [
                  s(1) ? (Ge(), Fd(ln(Nd), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": c.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: cn(() => [
                      Mn(ln(T5), { icon: ln(ss) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Ge(), Fd(ln(Nd), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: i
                  }, {
                    default: cn(() => [
                      f5(w5(c.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : ha("", !0)
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
const B5 = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: L5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, P5 = window.Vue.resolveComponent, F5 = window.Vue.createVNode, M5 = window.Vue.normalizeClass, N5 = window.Vue.openBlock, I5 = window.Vue.createElementBlock;
function z5(e, t, n, o, s, a) {
  const i = P5("sx-quick-tutorial");
  return N5(), I5("main", {
    class: M5(["sx-quick-tutorial-view", a.classes])
  }, [
    F5(i)
  ], 2);
}
const U5 = /* @__PURE__ */ D(B5, [["render", z5]]);
const Id = window.Vue.ref, R5 = window.Vue.onMounted;
function O5(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = q.getPageUrl(t, o.title), o.target = "_blank";
}
const H5 = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: h0 },
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
    const t = Id(null), n = Id(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return R5(() => {
      n.value = 2 * o(), O5(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, j5 = window.Vue.resolveDirective, zd = window.Vue.createElementVNode, q5 = window.Vue.withDirectives, G5 = window.Vue.resolveComponent, W5 = window.Vue.withCtx, X5 = window.Vue.createVNode, K5 = window.Vue.openBlock, Y5 = window.Vue.createElementBlock, Q5 = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, J5 = { class: "sx-editor__original-content-panel__header mb-2" }, Z5 = ["lang", "dir", "innerHTML"];
function eA(e, t, n, o, s, a) {
  const i = G5("mw-expandable-content"), c = j5("i18n");
  return K5(), Y5("section", Q5, [
    q5(zd("h5", J5, null, 512), [
      [c, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    X5(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: W5(() => [
        zd("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, Z5)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const tA = /* @__PURE__ */ D(H5, [["render", eA]]), nA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const wr = window.Vue.computed, oA = window.Vuex.useStore, sA = {
  name: "EditCompleteFeedback",
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
    const { targetLanguage: t } = F(oA()), n = wr(
      () => Wt.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = wr(() => {
      const a = Wt.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = wr(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: nA,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, Ao = window.Vue.createElementVNode, Ud = window.Vue.resolveDirective, fr = window.Vue.withDirectives, aA = window.Vue.normalizeClass, iA = window.Vue.openBlock, rA = window.Vue.createElementBlock, cA = window.Vue.createCommentVNode, lA = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, uA = { class: "sx-editor__feedback-overlay-content px-4" }, dA = ["innerHTML"], gA = { class: "sx-editor__feedback-overlay-content__title" }, mA = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function pA(e, t, n, o, s, a) {
  const i = Ud("i18n"), c = Ud("i18n-html");
  return n.showFeedback ? (iA(), rA("div", lA, [
    Ao("div", uA, [
      Ao("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, dA),
      fr(Ao("h2", gA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      fr(Ao("p", mA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      fr(Ao("p", {
        class: aA(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [c, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : cA("", !0);
}
const hA = /* @__PURE__ */ D(sA, [["render", pA]]);
const _r = window.Vue.ref, wA = window.Vue.computed, fA = window.Vuex.useStore, _A = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: hA,
    MwRow: T,
    SxEditorOriginalContent: tA,
    VisualEditor: cy,
    MwSpinner: Xe
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = _r(!1), n = we(), o = fA(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: c, content: l, originalContent: d, title: r } = history.state, u = _r(null), g = _r(!1), m = ct(), { targetLanguage: p, sourceLanguage: h } = F(o), w = wA(
      () => Wt.calculateScore(
        u.value,
        l,
        p.value
      )
    ), f = (v) => k(this, null, function* () {
      u.value = v, g.value = !0;
      const C = new Promise((P) => setTimeout(P, 2e3));
      let x = Promise.resolve();
      i ? o.commit(
        "application/setCurrentSourceSectionEditedTranslation",
        v
      ) : (w.value === 0 && c && m({
        event_type: "editor_segment_add",
        translation_source_language: h.value,
        translation_target_language: p.value
      }), x = o.dispatch(
        "application/applyEditedTranslationToSelectedTranslationUnit",
        v
      )), yield Promise.all([C, x]), g.value = !1, a();
    });
    return {
      closeEditor: a,
      content: l,
      editedTranslation: u,
      editorReady: t,
      getDir: O.getDir,
      sourceLanguage: h,
      targetLanguage: p,
      onEditorReady: s,
      onEditCompleted: f,
      originalContent: d,
      showFeedback: g,
      title: r
    };
  }
}, Do = window.Vue.resolveComponent, vr = window.Vue.openBlock, Sr = window.Vue.createBlock, Rd = window.Vue.createCommentVNode, Od = window.Vue.createVNode, vA = window.Vue.createElementVNode, SA = window.Vue.withCtx, yA = { class: "sx-editor__editing-surface-container grow" };
function CA(e, t, n, o, s, a) {
  const i = Do("sx-editor-original-content"), c = Do("mw-spinner"), l = Do("edit-complete-feedback"), d = Do("visual-editor"), r = Do("mw-row");
  return vr(), Sr(r, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: SA(() => [
      o.originalContent ? (vr(), Sr(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : Rd("", !0),
      o.editorReady ? Rd("", !0) : (vr(), Sr(c, { key: 1 })),
      vA("div", yA, [
        Od(l, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        Od(d, {
          content: o.content,
          language: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          title: o.title,
          onReady: o.onEditorReady,
          onClose: o.closeEditor,
          onEditCompleted: o.onEditCompleted
        }, null, 8, ["content", "language", "dir", "title", "onReady", "onClose", "onEditCompleted"])
      ])
    ]),
    _: 1
  });
}
const kA = /* @__PURE__ */ D(_A, [["render", CA]]);
const xA = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: kA
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
}, bA = window.Vue.resolveComponent, $A = window.Vue.createVNode, VA = window.Vue.normalizeClass, AA = window.Vue.openBlock, DA = window.Vue.createElementBlock;
function EA(e, t, n, o, s, a) {
  const i = bA("sx-editor");
  return AA(), DA("main", {
    class: VA(["sx-editor-view", a.classes])
  }, [
    $A(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const TA = /* @__PURE__ */ D(xA, [["render", EA]]);
const ot = window.Vue.unref, un = window.Vue.createVNode, Eo = window.Vue.withCtx, LA = window.Vue.resolveDirective, BA = window.Vue.withDirectives, PA = window.Vue.openBlock, FA = window.Vue.createBlock, Hd = window.Codex.CdxButton, jd = window.Codex.CdxIcon, MA = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = we(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = LA("i18n");
      return PA(), FA(ot(T), { class: "ma-0 sx-publisher__header" }, {
        default: Eo(() => [
          un(ot(y), {
            shrink: "",
            class: "me-2"
          }, {
            default: Eo(() => [
              un(ot(Hd), {
                class: "px-3",
                weight: "quiet",
                onClick: n
              }, {
                default: Eo(() => [
                  un(ot(jd), { icon: ot(fc) }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          BA(un(ot(y), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          un(ot(y), { shrink: "" }, {
            default: Eo(() => [
              un(ot(Hd), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: Eo(() => [
                  un(ot(jd), { icon: ot(Fy) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, NA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, IA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, qd = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const zA = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: Qe, MwRow: T, MwCol: y },
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
  data: (e) => ({
    animations: {
      pending: {
        svg: NA,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: IA,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: qd,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: qd,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }
  }),
  computed: {
    animationSvg: (e) => e.animations[e.status].svg,
    animationTitle: (e) => e.animations[e.status].title,
    animationSubtitle: (e) => e.animations[e.status].subtitle
  }
}, yr = window.Vue.createElementVNode, Gd = window.Vue.toDisplayString, Cr = window.Vue.resolveComponent, kr = window.Vue.withCtx, Wd = window.Vue.createVNode, UA = window.Vue.openBlock, RA = window.Vue.createBlock, OA = window.Vue.createCommentVNode, HA = ["innerHTML"], jA = ["textContent"], qA = ["textContent"];
function GA(e, t, n, o, s, a) {
  const i = Cr("mw-col"), c = Cr("mw-row"), l = Cr("mw-dialog");
  return n.active ? (UA(), RA(l, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: kr(() => [
      Wd(c, { class: "ma-4" }, {
        default: kr(() => [
          Wd(i, null, {
            default: kr(() => [
              yr("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, HA),
              yr("h2", {
                textContent: Gd(a.animationTitle)
              }, null, 8, jA),
              yr("p", {
                class: "ma-0",
                textContent: Gd(a.animationSubtitle)
              }, null, 8, qA)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : OA("", !0);
}
const WA = /* @__PURE__ */ D(zA, [["render", GA]]);
const Me = window.Vue.unref, st = window.Vue.createVNode, dn = window.Vue.withCtx, XA = window.Vue.resolveDirective, Xd = window.Vue.withDirectives, xr = window.Vue.openBlock, Kd = window.Vue.createElementBlock, KA = window.Vue.createCommentVNode, YA = window.Vue.toDisplayString, Mm = window.Vue.createElementVNode, QA = window.Vue.createBlock, JA = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, ZA = ["src"], eD = ["textContent"], tD = /* @__PURE__ */ Mm("p", { class: "mt-0" }, null, -1), nD = window.Vue.computed, oD = window.Vue.inject, sD = window.Vue.ref, aD = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Vg,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = sD(""), s = () => n("close"), a = () => n("publish", o.value), i = oD("breakpoints"), c = nD(() => i.value.mobile);
    return (l, d) => {
      const r = XA("i18n");
      return e.active && e.captchaDetails ? (xr(), QA(Me(Qe), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: dn(() => [
          st(Me(T), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: dn(() => [
              st(Me(y), { shrink: "" }, {
                default: dn(() => [
                  st(Me(re), {
                    class: "py-4 ps-6 pe-4",
                    type: "icon",
                    icon: Me(Kt),
                    onClick: s
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }),
              Xd(st(Me(y), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              st(Me(y), {
                shrink: "",
                class: "justify-center"
              }, {
                default: dn(() => [
                  Xd(st(Me(re), {
                    progressive: "",
                    onClick: a
                  }, null, 512), [
                    [r, void 0, "cx-sx-publisher-captcha-dialog-publish-button"]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          st(Me(Wo))
        ]),
        default: dn(() => [
          Mm("div", JA, [
            e.captchaDetails.type === "image" ? (xr(), Kd("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, ZA)) : (xr(), Kd("p", {
              key: 1,
              textContent: YA(e.captchaDetails.question)
            }, null, 8, eD)),
            tD,
            st(Me(T), { class: "ma-0" }, {
              default: dn(() => [
                st(Me(y), null, {
                  default: dn(() => [
                    st(Me(ec), {
                      value: o.value,
                      "onUpdate:value": d[0] || (d[0] = (u) => o.value = u),
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
      }, 8, ["fullscreen"])) : KA("", !0);
    };
  }
};
const gn = window.Vue.unref, To = window.Vue.createVNode, fa = window.Vue.withCtx, mn = window.Vue.createElementVNode, iD = window.Vue.resolveDirective, rD = window.Vue.withDirectives, cD = window.Vue.renderList, Yd = window.Vue.Fragment, br = window.Vue.openBlock, Qd = window.Vue.createElementBlock, lD = window.Vue.toDisplayString, uD = window.Vue.normalizeClass, dD = window.Vue.createBlock, gD = { class: "mw-ui-dialog__header" }, mD = { class: "row ma-0 px-4 py-3" }, pD = { class: "col shrink justify-center" }, hD = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, wD = { class: "mb-0" }, fD = { class: "pa-4" }, _D = ["textContent"], vD = window.Vuex.useStore, Lo = window.Vue.computed, SD = window.Codex.CdxButton, yD = window.Codex.CdxIcon, CD = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = vD(), s = Lo(() => o.state.application.publishTarget), a = Lo(() => o.state.translator.isAnon), i = Ee(), { currentSourceSection: c } = F(o), l = Lo(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), d = Lo(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = Lo(() => [
      {
        label: l.value,
        details: d.value,
        value: "NEW_SECTION",
        disabled: !1
      },
      {
        label: i.i18n("cx-sx-publisher-sandbox-option-label"),
        details: i.i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: a.value
      }
    ]), u = (p) => p === r.value.length - 1 ? "mb-1" : "mb-4", g = () => n("update:active", !1), m = (p) => {
      const h = p.target.value;
      o.commit("application/setPublishTarget", h), g();
    };
    return (p, h) => {
      const w = iD("i18n");
      return br(), dD(gn(Qe), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: g
      }, {
        header: fa(() => [
          mn("div", gD, [
            mn("div", mD, [
              mn("div", pD, [
                To(gn(SD), {
                  class: "pa-0",
                  weight: "quiet",
                  onClick: g
                }, {
                  default: fa(() => [
                    To(gn(yD), { icon: gn(xm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              mn("div", hD, [
                rD(mn("h4", wD, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            To(gn(Wo))
          ])
        ]),
        default: fa(() => [
          mn("div", fD, [
            To(gn(Cg), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: fa(() => [
                (br(!0), Qd(Yd, null, cD(r.value, (f, v) => (br(), Qd(Yd, {
                  key: f.label
                }, [
                  To(gn(ya), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  mn("p", {
                    class: uD(["complementary ms-7 mt-0", u(v)]),
                    textContent: lD(f.details)
                  }, null, 10, _D)
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
const We = window.Vue.unref, pn = window.Vue.createVNode, kD = window.Vue.resolveDirective, Jd = window.Vue.withDirectives, _a = window.Vue.openBlock, Zd = window.Vue.createElementBlock, xD = window.Vue.createCommentVNode, eg = window.Vue.toDisplayString, $r = window.Vue.createElementVNode, Nn = window.Vue.withCtx, tg = window.Vue.createBlock, bD = window.Vue.Fragment, $D = window.Vue.normalizeClass, VD = { class: "sx-publisher__review-info__content" }, AD = {
  key: 0,
  class: "complementary ma-0"
}, DD = ["textContent"], ED = ["textContent"], Ht = window.Vue.computed, ng = window.Vue.ref, TD = window.Vue.watch, og = window.Codex.CdxButton, Vr = window.Codex.CdxIcon, LD = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ng(0), o = ng(null);
    TD(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = Ht(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Ht(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Ht(() => {
      switch (a.value) {
        case "warning":
          return km;
        case "error":
          return Py;
        default:
          return My;
      }
    }), c = Ht(() => a.value === "default"), l = Ht(
      () => c.value ? "notice" : a.value
    ), d = Ht(
      () => `sx-publisher__review-info--${l.value}`
    ), r = Ee(), u = Ht(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Ht(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.title) || r.i18n("cx-sx-publisher-review-info-error");
      }
    ), m = () => {
      const h = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + h) % h;
    }, p = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (h, w) => {
      const f = kD("i18n-html");
      return _a(), tg(We(fw), {
        type: l.value,
        class: $D(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: c.value
      }, {
        icon: Nn(() => [
          pn(We(Vr), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Nn(() => [
          $r("div", VD, [
            a.value === "default" ? Jd((_a(), Zd("p", AD, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : (_a(), Zd(bD, { key: 1 }, [
              $r("h5", {
                textContent: eg(g.value)
              }, null, 8, DD),
              $r("p", {
                textContent: eg(u.value)
              }, null, 8, ED),
              pn(We(T), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Nn(() => [
                  Jd(pn(We(y), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (_a(), tg(We(y), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Nn(() => [
                      pn(We(og), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        onClick: m
                      }, {
                        default: Nn(() => [
                          pn(We(Vr), { icon: We(vc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      pn(We(og), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        onClick: p
                      }, {
                        default: Nn(() => [
                          pn(We(Vr), { icon: We(ss) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : xD("", !0)
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
}, BD = window.Vue.computed, In = window.Vue.ref, PD = window.Vue.watch, FD = (e, t, n, o) => k(void 0, null, function* () {
  if (n.value) {
    t.value = !1;
    return;
  }
  const {
    currentSourceSection: s,
    sourceLanguage: a,
    targetLanguage: i,
    currentSourcePage: c
  } = F(e), l = e.getters["application/getTargetPageTitleForPublishing"], d = e.getters["application/isSandboxTarget"], r = c.value.title, u = new mw.Title(r), g = mw.config.get("wgNamespaceIds");
  if (s.value.isLeadSection && !d && u.getNamespaceId() !== g.user)
    try {
      yield xa.addWikibaseLink(
        a.value,
        i.value,
        r,
        l
      );
    } catch (m) {
      mw.log.error("Error while adding wikibase link", m);
    }
  if (!o) {
    const m = "[CX] Target URL is empty after successful publishing";
    throw mw.log.error(m), new Error(m);
  }
  location.href = o;
}), MD = (e) => {
  const t = In(!1), n = In("pending"), o = In(!1), s = In(!1), a = In(null), i = In([]), c = BD(
    () => i.value.some((u) => u.isError)
  );
  return PD(o, (u) => {
    u || (i.value = []);
  }), {
    captchaDetails: a,
    captchaDialogOn: s,
    configureTranslationOptions: () => o.value = !0,
    doPublish: (u = null) => k(void 0, null, function* () {
      var h;
      n.value = "pending", t.value = !0;
      let g;
      try {
        g = yield e.dispatch("translator/publishTranslation", {
          captchaId: (h = a.value) == null ? void 0 : h.id,
          captchaAnswer: u
        });
      } catch (w) {
        if (w instanceof jn) {
          e.commit("application/setIsLoginDialogOn", !0);
          return;
        }
        throw w;
      }
      const { publishFeedbackMessage: m, targetUrl: p } = g;
      if (m && m.type === "captcha") {
        a.value = m.details, t.value = !1, s.value = !0;
        return;
      } else
        m && (i.value.push(m), i.value.sort((w, f) => +f.isError - +w.isError));
      a.value = null, n.value = c.value ? "failure" : "success", setTimeout(
        () => FD(
          e,
          t,
          c,
          p
        ),
        1e3
      );
    }),
    isPublishDialogActive: t,
    isPublishingDisabled: c,
    onCaptchaDialogClose: () => {
      s.value = !1, a.value = null;
    },
    publishOptionsOn: o,
    publishFeedbackMessages: i,
    publishStatus: n
  };
}, ND = window.Vue.computed, ID = window.Vuex.useStore, zD = () => {
  const e = ID(), t = we(), {
    currentSourcePage: n,
    currentTargetPage: o,
    currentSourceSection: s
  } = F(e), a = ND(
    () => s.value.subSections.reduce(
      (i, c) => c.isTranslated ? `${i}<section rel="cx:Section" id="${c.targetSectionId}">${c.translatedContent}</section>` : i,
      ""
    )
  );
  return () => {
    var i, c;
    return t.push({
      name: "sx-editor",
      state: {
        content: a.value,
        title: ((i = o.value) == null ? void 0 : i.title) || ((c = n.value) == null ? void 0 : c.title),
        isFinalEdit: !0
      }
    });
  };
};
const K = window.Vue.unref, Ce = window.Vue.createVNode, UD = window.Vue.resolveDirective, Bo = window.Vue.createElementVNode, RD = window.Vue.withDirectives, zn = window.Vue.withCtx, OD = window.Vue.isRef, HD = window.Vue.openBlock, jD = window.Vue.createElementBlock, qD = { class: "sx-publisher" }, GD = { class: "sx-publisher__publish-panel pa-4" }, WD = { class: "mb-2" }, XD = ["innerHTML"], KD = { class: "sx-publisher__section-preview pa-5" }, YD = ["innerHTML"], sg = window.Vue.computed, QD = window.Vue.onMounted, JD = window.Vuex.useStore, ag = window.Codex.CdxButton, ig = window.Codex.CdxIcon, ZD = {
  __name: "SXPublisher",
  setup(e) {
    const t = JD(), { currentSourceSection: n } = F(t), o = sg(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.title;
    }), s = Ee(), a = sg(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: c,
      configureTranslationOptions: l,
      doPublish: d,
      isPublishDialogActive: r,
      isPublishingDisabled: u,
      onCaptchaDialogClose: g,
      publishOptionsOn: m,
      publishFeedbackMessages: p,
      publishStatus: h
    } = MD(t);
    QD(() => k(this, null, function* () {
      const f = yield t.dispatch("translator/validateMT");
      f && p.value.push(f);
    }));
    const w = zD();
    return (f, v) => {
      const C = UD("i18n");
      return HD(), jD("section", qD, [
        Ce(MA, {
          "is-publishing-disabled": K(u),
          onPublishTranslation: K(d)
        }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
        Bo("div", GD, [
          RD(Bo("h5", WD, null, 512), [
            [C, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Bo("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, XD),
          Ce(K(T), {
            justify: "end",
            class: "ma-0"
          }, {
            default: zn(() => [
              Ce(K(y), { shrink: "" }, {
                default: zn(() => [
                  Ce(K(ag), {
                    weight: "quiet",
                    onClick: K(l)
                  }, {
                    default: zn(() => [
                      Ce(K(ig), { icon: K(Ry) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        Ce(LD, { "publish-feedback-messages": K(p) }, null, 8, ["publish-feedback-messages"]),
        Bo("section", KD, [
          Ce(K(T), { class: "pb-5 ma-0" }, {
            default: zn(() => [
              Ce(K(y), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ce(K(y), { shrink: "" }, {
                default: zn(() => [
                  Ce(K(ag), {
                    weight: "quiet",
                    onClick: K(w)
                  }, {
                    default: zn(() => [
                      Ce(K(ig), { icon: K(_c) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Bo("div", {
            innerHTML: K(n).translationHtml
          }, null, 8, YD)
        ]),
        Ce(CD, {
          active: K(m),
          "onUpdate:active": v[0] || (v[0] = (x) => OD(m) ? m.value = x : null)
        }, null, 8, ["active"]),
        Ce(aD, {
          active: K(c),
          "captcha-details": K(i),
          onClose: K(g),
          onPublish: v[1] || (v[1] = (x) => K(d)(x))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ce(WA, {
          active: K(r),
          status: K(h)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const eE = {
  name: "SxPublisherView",
  components: {
    SxPublisher: ZD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, tE = window.Vue.resolveComponent, nE = window.Vue.createVNode, oE = window.Vue.normalizeClass, sE = window.Vue.openBlock, aE = window.Vue.createElementBlock;
function iE(e, t, n, o, s, a) {
  const i = tE("sx-publisher");
  return sE(), aE("main", {
    class: oE(["sx-publisher-view", a.classes])
  }, [
    nE(i)
  ], 2);
}
const rE = /* @__PURE__ */ D(eE, [["render", iE]]);
const cE = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: tc, MwIcon: ie, MwRow: T, MwCol: y },
  props: {
    suggestion: {
      type: qn,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Th, mwIconLanguage: Sg, mwIconArticle: Zr, getDir: O.getDir };
  }
}, va = window.Vue.resolveComponent, jt = window.Vue.createVNode, hn = window.Vue.withCtx, Ar = window.Vue.toDisplayString, Dr = window.Vue.createElementVNode, lE = window.Vue.openBlock, uE = window.Vue.createBlock, dE = ["textContent"], gE = ["textContent"], mE = ["textContent"];
function pE(e, t, n, o, s, a) {
  const i = va("mw-thumbnail"), c = va("mw-col"), l = va("mw-icon"), d = va("mw-row");
  return lE(), uE(d, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: hn(() => [
      jt(c, { shrink: "" }, {
        default: hn(() => [
          jt(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      jt(c, { class: "ms-4" }, {
        default: hn(() => [
          jt(d, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: hn(() => [
              jt(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: hn(() => [
                  Dr("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: Ar(n.suggestion.title)
                  }, null, 8, dE)
                ]),
                _: 1
              }),
              jt(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: hn(() => [
                  Dr("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: Ar(n.suggestion.description)
                  }, null, 8, gE)
                ]),
                _: 1
              }),
              jt(c, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: hn(() => [
                  jt(l, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  Dr("small", {
                    textContent: Ar(n.suggestion.langLinksCount)
                  }, null, 8, mE)
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
const Nm = /* @__PURE__ */ D(cE, [["render", pE]]), hE = window.Vue.computed, rg = window.Vue.ref, wE = window.Vue.watch, fE = (e, t) => {
  const o = rg([]), s = rg(!1), a = hE(
    () => o.value.slice(0, 4)
  ), i = rc(() => k(void 0, null, function* () {
    try {
      o.value = yield Ko.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return wE(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const _E = window.Vue.computed, vE = window.Vuex.useStore, SE = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: Nm, MwCard: ze, MwSpinner: Xe },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = F(
      vE()
    ), o = _E(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = fE(
      t,
      o
    );
    return {
      searchResultsLoading: s,
      /** @type {ComputedRef<Page[]>} */
      searchResultsSlice: a,
      sourceLanguageAutonym: n
    };
  }
}, Er = window.Vue.resolveComponent, Po = window.Vue.openBlock, Tr = window.Vue.createBlock, yE = window.Vue.createCommentVNode, CE = window.Vue.resolveDirective, kE = window.Vue.withDirectives, cg = window.Vue.createElementBlock, xE = window.Vue.renderList, bE = window.Vue.Fragment, $E = window.Vue.withCtx, VE = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function AE(e, t, n, o, s, a) {
  const i = Er("mw-spinner"), c = Er("sx-search-article-suggestion"), l = Er("mw-card"), d = CE("i18n");
  return Po(), Tr(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: $E(() => [
      o.searchResultsLoading ? (Po(), Tr(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? kE((Po(), cg("p", VE, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : yE("", !0),
      (Po(!0), cg(bE, null, xE(o.searchResultsSlice, (r) => (Po(), Tr(c, {
        key: r.pageid,
        suggestion: r,
        onClick: (u) => e.$emit("suggestion-clicked", r)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const DE = /* @__PURE__ */ D(SE, [["render", AE]]);
const EE = window.Vuex.mapState, TE = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: Nm, MwCard: ze },
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
  computed: de({}, EE({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, LE = window.Vue.toDisplayString, BE = window.Vue.createElementVNode, PE = window.Vue.renderList, FE = window.Vue.Fragment, Lr = window.Vue.openBlock, ME = window.Vue.createElementBlock, lg = window.Vue.resolveComponent, ug = window.Vue.createBlock, dg = window.Vue.withCtx, NE = ["textContent"];
function IE(e, t, n, o, s, a) {
  const i = lg("sx-search-article-suggestion"), c = lg("mw-card");
  return Lr(), ug(c, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: dg(() => [
      BE("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: LE(n.cardTitle)
      }, null, 8, NE)
    ]),
    default: dg(() => [
      (Lr(!0), ME(FE, null, PE(n.suggestions, (l) => (Lr(), ug(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (d) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const gg = /* @__PURE__ */ D(TE, [["render", IE]]), zE = window.Vue.computed, UE = (e, t) => zE(() => {
  const o = {
    value: "other",
    props: {
      icon: Mh,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (i, c) => s.findIndex((l) => l === i) === c
  ).map((i) => ({
    value: i,
    props: {
      label: O.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), RE = window.Vue.computed, OE = (e, t, n) => RE(() => {
  const o = (navigator.language || "").split("-")[0], s = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((i) => i.split("-")[0]), a = [
    // User's current interface language
    mw.config.get("wgUserLanguage"),
    // Current wiki's content language
    mw.config.get("wgContentLanguage"),
    o,
    ...n.value,
    ...s
  ];
  return [...new Set(a)].filter(
    (i) => i !== e.value && i !== t.value && O.getAutonym(i) !== i
  );
});
const HE = window.Vue.resolveDirective, jE = window.Vue.createElementVNode, Br = window.Vue.withDirectives, ae = window.Vue.unref, Fo = window.Vue.withCtx, at = window.Vue.createVNode, Mo = window.Vue.openBlock, mg = window.Vue.createBlock, qE = window.Vue.createCommentVNode, Pr = window.Vue.createElementBlock, GE = window.Vue.Fragment, WE = window.Vue.vShow, XE = { class: "sx-article-search" }, KE = { class: "mb-0" }, YE = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, No = window.Vue.ref, QE = window.Vue.onMounted, Fr = window.Vue.computed, pg = window.Vue.watch, JE = window.Vue.inject, ZE = window.Vuex.useStore, eT = window.Codex.CdxButton, tT = window.Codex.CdxIcon, nT = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = No(""), n = No(!1), o = No(null), s = No(!1), a = No([]), i = ZE(), { sourceLanguage: c, targetLanguage: l } = F(i), { supportedLanguageCodes: d } = Zo(), r = OE(
      c,
      l,
      a
    ), u = UE(
      c,
      r
    ), g = we(), { fetchAllTranslations: m } = Va();
    QE(() => k(this, null, function* () {
      var Y;
      yield wm()(), m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (oe) {
      }
      (Y = o.value) == null || Y.focus();
    }));
    const p = () => {
      g.push({ name: "dashboard" });
    }, h = fm(), w = (H) => h(H, l.value), f = (H) => {
      if (H === "other") {
        s.value = !0;
        return;
      }
      w(H);
    };
    pg(c, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const v = ct();
    pg(t, () => {
      n.value || (n.value = !0, v({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: l.value
      }));
    });
    const C = () => {
      s.value = !1;
    }, x = (H) => {
      s.value = !1, a.value.push(H), f(H);
    }, P = Fr(
      () => i.getters["mediawiki/getRecentlyEditedPages"]
    ), L = Fr(() => i.getters["mediawiki/getNearbyPages"]), U = JE("breakpoints"), A = Fr(() => U.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: B,
      startNearbySectionTranslation: Te,
      startSearchResultSectionTranslation: _e
    } = wc();
    return (H, Y) => {
      const oe = HE("i18n");
      return Mo(), Pr("section", XE, [
        at(ae(T), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Fo(() => [
            at(ae(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Fo(() => [
                Br(jE("h5", KE, null, 512), [
                  [oe, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            at(ae(y), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Fo(() => [
                at(ae(eT), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  onClick: p
                }, {
                  default: Fo(() => [
                    at(ae(tT), { icon: ae(fc) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        at(ae(ec), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": Y[0] || (Y[0] = (Ue) => t.value = Ue),
          "icon-size": 20,
          icon: ae(fg),
          placeholder: H.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        at(ae(Go), {
          class: "sx-article-search__language-button-group",
          items: ae(u),
          active: ae(c),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? qE("", !0) : (Mo(), Pr(GE, { key: 0 }, [
          P.value && P.value.length ? (Mo(), mg(gg, {
            key: 0,
            "card-title": H.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: P.value,
            onSuggestionClicked: ae(B)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : L.value && L.value.length ? (Mo(), mg(gg, {
            key: 1,
            "card-title": H.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: L.value,
            onSuggestionClicked: ae(Te)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : Br((Mo(), Pr("p", YE, null, 512)), [
            [oe, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Br(at(DE, {
          "search-input": t.value,
          onSuggestionClicked: ae(_e)
        }, null, 8, ["search-input", "onSuggestionClicked"]), [
          [WE, !!t.value]
        ]),
        at(ae(Qe), {
          value: s.value,
          "onUpdate:value": Y[1] || (Y[1] = (Ue) => s.value = Ue),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: A.value,
          header: A.value,
          "overlay-opacity": 0,
          title: H.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: C
        }, {
          default: Fo(() => [
            at(ae(Am), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ae(d),
              suggestions: ae(r),
              placeholder: H.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: x,
              onClose: C
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const oT = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: nT
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, sT = window.Vue.resolveComponent, aT = window.Vue.createVNode, iT = window.Vue.normalizeClass, rT = window.Vue.openBlock, cT = window.Vue.createElementBlock;
function lT(e, t, n, o, s, a) {
  const i = sT("sx-article-search");
  return rT(), cT("main", {
    class: iT(["sx-article-search-view", a.classes])
  }, [
    aT(i)
  ], 2);
}
const uT = /* @__PURE__ */ D(oT, [["render", lT]]), dT = window.Vuex.useStore, Im = [
  {
    path: "",
    name: "dashboard",
    component: yu,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: uT,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: J8,
    props: (e) => ({
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: k2,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: Q4,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: U5,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: l5,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: TA,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: rE,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: yu,
    meta: { workflowStep: 0 }
  }
], kc = Ev({
  history: D1(),
  routes: Im
});
kc.beforeEach((e, t, n) => {
  const o = dT();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || bg.assertUser().catch((c) => {
    c instanceof jn && o.commit("application/setIsLoginDialogOn", !0);
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
    const c = Math.ceil(a) - 1, l = Im.find(
      (d) => d.meta.workflowStep === c
    );
    n({ name: l.name });
    return;
  }
  n();
});
kc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const gT = window.Vue.createApp, mT = mw.config.get("wgUserLanguage"), pT = "en", hT = mw.messages.values || {}, Qt = gT(W0);
Qt.config.globalProperties.$incompleteVersion = !0;
const wT = RS();
Qt.use(wT);
Qt.use(kc);
Qt.use(Ig);
Qt.use(b0);
Qt.use(x0);
const fT = Zv({
  locale: mT,
  finalFallback: pT,
  messages: hT,
  wikilinks: !0
});
Qt.use(fT);
Qt.mount("#contenttranslation");
