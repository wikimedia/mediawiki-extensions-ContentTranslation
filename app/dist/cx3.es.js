/*@nomin*/
var Xm = Object.defineProperty, Km = Object.defineProperties;
var Ym = Object.getOwnPropertyDescriptors;
var Fc = Object.getOwnPropertySymbols;
var Qm = Object.prototype.hasOwnProperty, Jm = Object.prototype.propertyIsEnumerable;
var Mc = (e, t, n) => t in e ? Xm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, le = (e, t) => {
  for (var n in t || (t = {}))
    Qm.call(t, n) && Mc(e, n, t[n]);
  if (Fc)
    for (var n of Fc(t))
      Jm.call(t, n) && Mc(e, n, t[n]);
  return e;
}, ke = (e, t) => Km(e, Ym(t));
var b = (e, t, n) => new Promise((o, s) => {
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
const E = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Zm = {
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
}, ep = window.Vue.toDisplayString, Fa = window.Vue.openBlock, Ma = window.Vue.createElementBlock, tp = window.Vue.createCommentVNode, Nc = window.Vue.createElementVNode, np = window.Vue.normalizeClass, op = ["width", "height", "aria-labelledby"], sp = ["id"], ap = ["fill"], ip = ["d"];
function rp(e, t, n, o, s, a) {
  return Fa(), Ma("span", {
    class: np(["mw-ui-icon notranslate", a.classes])
  }, [
    (Fa(), Ma("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Fa(), Ma("title", {
        key: 0,
        id: n.iconName
      }, ep(n.iconName), 9, sp)) : tp("", !0),
      Nc("g", { fill: n.iconColor }, [
        Nc("path", { d: a.iconImagePath }, null, 8, ip)
      ], 8, ap)
    ], 8, op))
  ], 2);
}
const he = /* @__PURE__ */ E(Zm, [["render", rp]]);
const cp = {
  name: "MwButton",
  components: {
    MwIcon: he
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
}, lp = window.Vue.renderSlot, up = window.Vue.resolveComponent, Ic = window.Vue.normalizeClass, us = window.Vue.openBlock, Na = window.Vue.createBlock, Ia = window.Vue.createCommentVNode, dp = window.Vue.toDisplayString, gp = window.Vue.createElementBlock, mp = window.Vue.toHandlerKey, pp = window.Vue.withModifiers, hp = window.Vue.mergeProps, wp = window.Vue.createElementVNode, fp = window.Vue.resolveDynamicComponent, _p = window.Vue.withCtx, vp = { class: "mw-ui-button__content" }, Sp = ["textContent"];
function yp(e, t, n, o, s, a) {
  const i = up("mw-icon");
  return us(), Na(fp(a.component), {
    class: Ic(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: _p(() => [
      lp(e.$slots, "default", {}, () => [
        wp("span", vp, [
          n.icon ? (us(), Na(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Ic(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Ia("", !0),
          !a.isIcon && n.label ? (us(), gp("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: dp(n.label)
          }, null, 8, Sp)) : Ia("", !0),
          n.indicator ? (us(), Na(i, hp({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [mp(a.indicatorClickEvent)]: t[0] || (t[0] = pp((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Ia("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ce = /* @__PURE__ */ E(cp, [["render", yp]]);
const Cp = {
  name: "MwButtonGroup",
  components: {
    MwButton: Ce
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
}, kp = window.Vue.renderList, xp = window.Vue.Fragment, za = window.Vue.openBlock, zc = window.Vue.createElementBlock, bp = window.Vue.resolveComponent, $p = window.Vue.withModifiers, Vp = window.Vue.mergeProps, Ap = window.Vue.createBlock, Dp = { class: "row mw-ui-button-group ma-0 pa-0" };
function Ep(e, t, n, o, s, a) {
  const i = bp("mw-button");
  return za(), zc("div", Dp, [
    (za(!0), zc(xp, null, kp(n.items, (c) => (za(), Ap(i, Vp({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: $p((l) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Wo = /* @__PURE__ */ E(Cp, [["render", Ep]]);
const Tp = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: Wo },
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
}, Lp = window.Vue.renderSlot, Bp = window.Vue.resolveComponent, Pp = window.Vue.createVNode, Fp = window.Vue.createElementVNode, Mp = window.Vue.openBlock, Np = window.Vue.createElementBlock, Ip = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, zp = { class: "col-12 ma-0 pa-0" };
function Up(e, t, n, o, s, a) {
  const i = Bp("mw-button-group");
  return Mp(), Np("footer", Ip, [
    Fp("div", zp, [
      Lp(e.$slots, "default", {}, () => [
        Pp(i, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (c) => e.$emit("update:active", c))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
const Rp = /* @__PURE__ */ E(Tp, [["render", Up]]);
const Op = {
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
}, Uc = window.Vue.renderSlot, Hp = window.Vue.toDisplayString, Rc = window.Vue.openBlock, Oc = window.Vue.createElementBlock, jp = window.Vue.createCommentVNode, qp = window.Vue.createElementVNode, Gp = { class: "mw-ui-card" }, Wp = ["textContent"], Xp = { class: "mw-ui-card__content" };
function Kp(e, t, n, o, s, a) {
  return Rc(), Oc("div", Gp, [
    Uc(e.$slots, "header", {}, () => [
      n.title ? (Rc(), Oc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Hp(n.title)
      }, null, 8, Wp)) : jp("", !0)
    ]),
    qp("div", Xp, [
      Uc(e.$slots, "default")
    ])
  ]);
}
const ze = /* @__PURE__ */ E(Op, [["render", Kp]]);
const Yp = {}, Qp = window.Vue.openBlock, Jp = window.Vue.createElementBlock, Zp = { class: "mw-ui-divider row" };
function eh(e, t) {
  return Qp(), Jp("div", Zp);
}
const Xo = /* @__PURE__ */ E(Yp, [["render", eh]]);
const th = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, nh = window.Vue.renderSlot, oh = window.Vue.resolveDynamicComponent, sh = window.Vue.withCtx, ah = window.Vue.openBlock, ih = window.Vue.createBlock;
function rh(e, t, n, o, s, a) {
  return ah(), ih(oh(n.tag), { class: "mw-grid container" }, {
    default: sh(() => [
      nh(e.$slots, "default")
    ]),
    _: 3
  });
}
const ch = /* @__PURE__ */ E(th, [["render", rh]]), lh = {
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
}, uh = window.Vue.renderSlot, dh = window.Vue.resolveDynamicComponent, gh = window.Vue.normalizeClass, mh = window.Vue.withCtx, ph = window.Vue.openBlock, hh = window.Vue.createBlock;
function wh(e, t, n, o, s, a) {
  return ph(), hh(dh(n.tag), {
    class: gh(a.classes)
  }, {
    default: mh(() => [
      uh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const L = /* @__PURE__ */ E(lh, [["render", wh]]), Ir = ["mobile", "tablet", "desktop", "desktop-wide"], fh = Ir.reduce(
  (e, t) => ke(le({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), _h = {
  name: "MwCol",
  props: ke(le({}, fh), {
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
      for (let n = 0; n < Ir.length; n++) {
        let o = Ir[n], s = this.$props[o];
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
}, vh = window.Vue.renderSlot, Sh = window.Vue.resolveDynamicComponent, yh = window.Vue.normalizeClass, Ch = window.Vue.withCtx, kh = window.Vue.openBlock, xh = window.Vue.createBlock;
function bh(e, t, n, o, s, a) {
  return kh(), xh(Sh(n.tag), {
    class: yh(a.classes)
  }, {
    default: Ch(() => [
      vh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const y = /* @__PURE__ */ E(_h, [["render", bh]]), $h = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Vh = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Ah = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", ka = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Dh = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Eh = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Th = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", vg = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", zr = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Jr = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", wn = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Lh = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Bh = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Zr = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Sg = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Ph = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", Fh = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", Mh = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", yg = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Cg = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Nh = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Ih = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", zh = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Uh = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Rh = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Rn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Oh = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, ec = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Hh = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, tc = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", jh = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", qh = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Gh = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Ua = window.Vue.computed, Wh = window.Vue.watch, Xh = window.Vue.ref, Kh = window.Vue.nextTick, Yh = {
  name: "MwDialog",
  components: {
    MwButton: Ce,
    MwRow: L,
    MwCol: y,
    MwDivider: Xo
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
    const n = Xh(null), o = Ua(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Ua(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    Wh(
      () => e.value,
      (l) => {
        l ? (i(), Kh(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Ua(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayStyles: s,
      mwIconClose: wn,
      root: n
    };
  }
}, Hc = window.Vue.normalizeStyle, Ra = window.Vue.createElementVNode, Oa = window.Vue.renderSlot, ds = window.Vue.resolveComponent, Xn = window.Vue.createVNode, Ha = window.Vue.withCtx, jc = window.Vue.createCommentVNode, Qh = window.Vue.withKeys, Jh = window.Vue.normalizeClass, qc = window.Vue.openBlock, Zh = window.Vue.createElementBlock, ew = window.Vue.Transition, tw = window.Vue.createBlock, nw = { class: "mw-ui-dialog__shell items-stretch" }, ow = { class: "mw-ui-dialog__body" };
function sw(e, t, n, o, s, a) {
  const i = ds("mw-col"), c = ds("mw-button"), l = ds("mw-row"), d = ds("mw-divider");
  return qc(), tw(ew, {
    name: `mw-ui-animation-${n.animation}`,
    style: Hc(o.cssVars)
  }, {
    default: Ha(() => [
      n.value ? (qc(), Zh("div", {
        key: 0,
        ref: "root",
        class: Jh(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Qh((r) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        Ra("div", {
          class: "mw-ui-dialog__overlay",
          style: Hc(o.overlayStyles),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close)
        }, null, 4),
        Ra("div", nw, [
          n.header ? Oa(e.$slots, "header", { key: 0 }, () => [
            Xn(l, { class: "mw-ui-dialog__header" }, {
              default: Ha(() => [
                Xn(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Xn(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Ha(() => [
                    Xn(c, {
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
            Xn(d)
          ]) : jc("", !0),
          Ra("div", ow, [
            Oa(e.$slots, "default")
          ]),
          Oa(e.$slots, "footer")
        ])
      ], 34)) : jc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const Ze = /* @__PURE__ */ E(Yh, [["render", sw]]);
const aw = {
  name: "MwInput",
  components: {
    MwIcon: he
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
}, Gc = window.Vue.renderSlot, iw = window.Vue.resolveComponent, gs = window.Vue.openBlock, ja = window.Vue.createBlock, Wc = window.Vue.createCommentVNode, rw = window.Vue.resolveDynamicComponent, cw = window.Vue.toDisplayString, lw = window.Vue.mergeProps, uw = window.Vue.withModifiers, dw = window.Vue.createElementVNode, gw = window.Vue.normalizeClass, pw = window.Vue.createElementBlock, hw = { class: "mw-ui-input__content" };
function ww(e, t, n, o, s, a) {
  const i = iw("mw-icon");
  return gs(), pw("div", {
    class: gw(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    dw("div", hw, [
      Gc(e.$slots, "icon", {}, () => [
        n.icon ? (gs(), ja(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Wc("", !0)
      ]),
      (gs(), ja(rw(n.type === "textarea" ? n.type : "input"), lw({
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
        textContent: cw(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Gc(e.$slots, "indicator", {}, () => [
        n.indicator ? (gs(), ja(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = uw((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Wc("", !0)
      ])
    ])
  ], 2);
}
const nc = /* @__PURE__ */ E(aw, [["render", ww]]);
const fw = {
  name: "MwMessage",
  components: { MwCol: y, MwRow: L, MwIcon: he, MwButton: Ce },
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
    mwIconClose: wn,
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
      notice: Rh,
      warning: ec,
      success: Rn,
      error: Oh
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
}, qa = window.Vue.renderSlot, ms = window.Vue.resolveComponent, Xc = window.Vue.createVNode, Kc = window.Vue.withCtx, Yc = window.Vue.openBlock, Qc = window.Vue.createBlock, Jc = window.Vue.createCommentVNode, _w = window.Vue.normalizeClass;
function vw(e, t, n, o, s, a) {
  const i = ms("mw-icon"), c = ms("mw-col"), l = ms("mw-button"), d = ms("mw-row");
  return e.shown ? (Yc(), Qc(d, {
    key: 0,
    class: _w([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Kc(() => [
      qa(e.$slots, "icon", {}, () => [
        Xc(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Xc(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Kc(() => [
          qa(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      qa(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Yc(), Qc(l, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Jc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Jc("", !0);
}
const Sw = /* @__PURE__ */ E(fw, [["render", vw]]);
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
const yw = {}, Cw = window.Vue.createElementVNode, kw = window.Vue.openBlock, xw = window.Vue.createElementBlock, bw = { class: "mw-ui-spinner" }, $w = /* @__PURE__ */ Cw("div", { class: "mw-ui-spinner__bounce" }, null, -1), Vw = [
  $w
];
function Aw(e, t) {
  return kw(), xw("div", bw, Vw);
}
const Ye = /* @__PURE__ */ E(yw, [["render", Aw]]), Ie = {
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
const Dw = window.Vue.computed, Ew = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: he },
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
      default: tc
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
    const n = Dw(() => {
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
}, Zc = window.Vue.normalizeStyle, el = window.Vue.openBlock, Tw = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Lw = window.Vue.resolveComponent, Bw = window.Vue.createBlock;
function Pw(e, t, n, o, s, a) {
  const i = Lw("mw-ui-icon");
  return n.thumbnail ? (el(), Tw("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Zc(o.style)
  }, null, 4)) : (el(), Bw(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Zc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const oc = /* @__PURE__ */ E(Ew, [["render", Pw]]);
const Fw = {
  name: "MwRadio",
  components: { MwRow: L },
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
}, Mw = window.Vue.vModelRadio, Sa = window.Vue.createElementVNode, Nw = window.Vue.withDirectives, Iw = window.Vue.toDisplayString, zw = window.Vue.resolveComponent, Uw = window.Vue.normalizeClass, Rw = window.Vue.withCtx, Ow = window.Vue.openBlock, Hw = window.Vue.createBlock, jw = { class: "mw-ui-radio__controls" }, qw = ["id", "disabled", "name", "value"], Gw = /* @__PURE__ */ Sa("span", { class: "mw-ui-radio__controls__icon" }, null, -1), Ww = ["for", "textContent"];
function Xw(e, t, n, o, s, a) {
  const i = zw("mw-row");
  return Ow(), Hw(i, {
    class: Uw(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: Rw(() => [
      Sa("div", jw, [
        Nw(Sa("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, qw), [
          [Mw, a.inputModel]
        ]),
        Gw
      ]),
      Sa("label", {
        for: n.id,
        class: "ps-2",
        textContent: Iw(n.label)
      }, null, 8, Ww)
    ]),
    _: 1
  }, 8, ["class"]);
}
const ya = /* @__PURE__ */ E(Fw, [["render", Xw]]), tl = window.Vue.h, kg = {
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
      (o) => tl(ya, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), tl("div", { class: "mw-ui-radio-group" }, n);
  }
};
const Kw = {
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
}, nl = window.Vue.normalizeClass, ol = window.Vue.normalizeStyle, Yw = window.Vue.createElementVNode, Qw = window.Vue.openBlock, Jw = window.Vue.createElementBlock, Zw = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function e0(e, t, n, o, s, a) {
  return Qw(), Jw("div", {
    class: nl(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: ol(a.containerStyles)
  }, [
    Yw("div", {
      class: nl(["mw-progress-bar__bar", a.barClass]),
      style: ol(a.barStyles)
    }, null, 6)
  ], 14, Zw);
}
const xg = /* @__PURE__ */ E(Kw, [["render", e0]]), t0 = (e, t, n, o) => (s) => {
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
}, n0 = (e, t, n, o) => ({ initiateDrag: t0(
  e,
  t,
  n,
  o
) }), o0 = window.Vue.ref, sl = window.Vue.computed, s0 = (e, t, n, o) => {
  const s = o0(0), a = sl(
    () => t.value > e.value
  ), i = sl(
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
const ps = window.Vue.ref, a0 = window.Vue.onMounted, al = window.Vue.computed, i0 = window.Vue.nextTick, r0 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Ce
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
    const t = ps(!0), n = ps(null), o = al(
      () => Math.min(e.minHeight, s.value)
    ), s = ps(1), { initiateDrag: a } = n0(
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
    } = s0(o, s, n, t), u = () => d(l.value + 1), g = ps(null), m = al(() => ({
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
    return a0(() => b(this, null, function* () {
      var w;
      yield i0(), s.value = n.value.scrollHeight, (w = g.value) == null || w.addEventListener(
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
      mwIconCollapse: Hh,
      mwIconExpand: zr,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, c0 = window.Vue.renderSlot, l0 = window.Vue.normalizeClass, hs = window.Vue.createElementVNode, u0 = window.Vue.resolveComponent, d0 = window.Vue.createVNode, Ga = window.Vue.openBlock, g0 = window.Vue.createBlock, il = window.Vue.createCommentVNode, rl = window.Vue.createElementBlock, m0 = window.Vue.normalizeStyle, p0 = { class: "mw-ui-expandable-content__container" }, h0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, w0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function f0(e, t, n, o, s, a) {
  const i = u0("mw-button");
  return Ga(), rl("div", {
    class: "mw-ui-expandable-content",
    style: m0(o.cssVars)
  }, [
    hs("div", p0, [
      hs("div", {
        ref: "contentRef",
        class: l0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        c0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Ga(), rl("div", h0, [
        d0(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Ga(), g0(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : il("", !0)
      ])) : il("", !0)
    ]),
    hs("div", w0, [
      hs("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const _0 = /* @__PURE__ */ E(r0, [["render", f0]]);
const ws = window.Vue.computed, v0 = {
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
    const t = ws(() => e.size / 2 * 0.9), n = ws(() => Math.PI * (t.value * 2)), o = ws(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ws(() => ({
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
}, cl = window.Vue.createElementVNode, ll = window.Vue.normalizeStyle, S0 = window.Vue.openBlock, y0 = window.Vue.createElementBlock, C0 = ["width", "height", "viewport"], k0 = ["r", "cx", "cy", "stroke-dasharray"], x0 = ["r", "cx", "cy", "stroke-dasharray"];
function b0(e, t, n, o, s, a) {
  return S0(), y0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: ll(o.cssVars)
  }, [
    cl("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, k0),
    cl("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: ll({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, x0)
  ], 12, C0);
}
const bg = /* @__PURE__ */ E(v0, [["render", b0]]), $0 = window.Vue.ref, Vt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, At = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Vt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Vt.tablet}px) and (max-width: ${Vt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Vt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Vt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Vt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Vt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Vt["desktop-wide"]}px)`
}, Wa = {
  mobile: () => matchMedia(At.mobile).matches,
  tablet: () => matchMedia(At.tablet).matches,
  desktop: () => matchMedia(At.desktop).matches,
  desktopwide: () => matchMedia(At["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(At["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(At["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(At["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(At["desktop-and-down"]).matches
}, V0 = {
  install: (e) => {
    const t = () => {
      for (let o in Wa)
        Wa.hasOwnProperty(o) && (n.value[o] = Wa[o]());
    }, n = $0({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = ke(le({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, A0 = {
  install: (e) => {
    e.config.globalProperties.$mwui = ke(le({}, e.config.globalProperties.$mwui || {}), {
      colors: Ie
    }), e.provide("colors", Ie);
  }
};
class qn extends Error {
}
const D0 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new qn();
}), $g = { assertUser: D0 };
const E0 = window.Vue.resolveDirective, Kn = window.Vue.createElementVNode, ul = window.Vue.withDirectives, T0 = window.Vue.toDisplayString, L0 = window.Vue.unref, dl = window.Vue.withCtx, B0 = window.Vue.openBlock, P0 = window.Vue.createBlock, F0 = window.Vue.createCommentVNode, M0 = { class: "pa-4 sx-login-dialog__header" }, N0 = { class: "sx-login-dialog__body px-6 pb-4" }, I0 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, z0 = ["href"], U0 = window.Vue.computed, R0 = window.Vue.ref, O0 = window.Vuex.useStore, H0 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = O0(), n = U0(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = R0(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = E0("i18n");
      return n.value ? (B0(), P0(L0(Ze), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: dl(() => [
          Kn("div", M0, [
            ul(Kn("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: dl(() => [
          ul(Kn("div", N0, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          Kn("div", I0, [
            Kn("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, T0(a.$i18n("cx-sx-login-dialog-button-label")), 9, z0)
          ])
        ]),
        _: 1
      })) : F0("", !0);
    };
  }
};
const j0 = window.Vue.resolveDynamicComponent, gl = window.Vue.openBlock, ml = window.Vue.createBlock, q0 = window.Vue.Transition, Yn = window.Vue.withCtx, Qn = window.Vue.createVNode, G0 = window.Vue.resolveComponent, Xa = window.Vue.unref, W0 = window.Vuex.useStore, X0 = window.Vue.computed, K0 = window.Vue.onMounted, Y0 = {
  __name: "App",
  setup(e) {
    const t = W0(), n = X0(
      () => t.state.application.autoSavePending
    );
    return K0(() => {
      window.addEventListener("beforeunload", (o) => {
        n.value && (o.preventDefault(), o.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (o) => {
        document.visibilityState === "visible" && $g.assertUser().then(() => t.commit("application/setIsLoginDialogOn", !1)).catch((s) => {
          s instanceof qn && t.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (o, s) => {
      const a = G0("router-view");
      return gl(), ml(Xa(ch), { id: "contenttranslation" }, {
        default: Yn(() => [
          Qn(Xa(L), { class: "cx-container" }, {
            default: Yn(() => [
              Qn(Xa(y), { cols: "12" }, {
                default: Yn(() => [
                  Qn(a, null, {
                    default: Yn(({ Component: i, route: c }) => [
                      Qn(q0, {
                        name: c.meta.transitionName
                      }, {
                        default: Yn(() => [
                          (gl(), ml(j0(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Qn(H0)
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
}, Q0 = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, J0 = {
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
}, Z0 = [
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
], ef = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = pl(e, n), a = c = pl(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, pl = function(e, t) {
  return e ? Z0.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, tf = 95, nf = 85, of = [
  { status: "failure", value: 100 - tf },
  { status: "warning", value: 100 - nf },
  { status: "success", value: 100 }
], Vg = (e, t, n) => {
  const o = hl(e).textContent, s = hl(t).textContent, a = 100 - 100 * ef(s, o, n);
  return Math.ceil(a);
}, sf = (e) => of.find((t) => e <= t.value).status, af = (e, t) => Vg(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), hl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Kt = { calculateScore: Vg, getScoreStatus: sf, getMTScoreForPageSection: af }, Ka = "original", Ya = "empty", rf = {
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
      Ka,
      Ya
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return rf[t] || t;
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
    return Ka;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ya;
  }
  static isUserMTProvider(t) {
    return [Ka, Ya].includes(
      t
    );
  }
}
const q = new mw.cx.SiteMapper(), cf = mw.util.getUrl, lf = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Ag {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class On {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Ag(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const wl = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => ke(le({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class uf {
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
    const t = wl((s = this.user) == null ? void 0 : s.content), n = wl((a = this.mt) == null ? void 0 : a.content);
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
class Ko {
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
class Wt {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = ke(le({}, a), {
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
const fl = (e) => {
  var n;
  const t = Ca(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Ca = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, hn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Dg = (e) => {
  const t = Ca(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = df(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, df = (e) => {
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
}, Eg = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Tg = (e) => {
  const t = Eg(e);
  return t == null ? void 0 : t.targetExists;
};
class Qa {
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
let De = class {
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
      (a) => hn(a)
    );
    s && Tg(s) && (this.blockTemplateAdaptationInfo[t] = Eg(s));
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
      (t) => hn(t)
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
    return this.isBlockTemplate ? fl(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => hn(o));
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
    return n && fl(n) || "";
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
      (a) => hn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Qa({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Qa({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Qa({
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
        (s) => hn(s)
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
const Ja = "__LEAD_SECTION__";
class sc {
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
    return Ja;
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
    return n instanceof De ? n.transclusionNode.outerHTML : n instanceof Wt ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof De ? t.blockTemplateSelected = !1 : t instanceof Wt && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof De ? n.blockTemplateSelected = !0 : n instanceof Wt && (n.selected = !0);
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
    if (o instanceof De)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Wt)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof De ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Wt ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof De ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Wt && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Kt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Ja : this.originalTitle;
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
    return this.isLeadSection ? Ja : this.title;
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
class ac extends Ko {
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
    return !this.sourceSectionTitle || this.sourceSectionTitle === sc.LEAD_SECTION_DUMMY_TITLE;
  }
}
class Lg extends Ko {
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
const ic = mw.user.isAnon() ? void 0 : "user", Bg = (e) => {
  if (e === "assertuserfailed")
    throw new qn();
};
function Pg(e, t = null) {
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
        (l) => new ac(ke(le({}, l), { status: e }))
      ) : i = a.map(
        (l) => new Lg(ke(le({}, l), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const l = yield Pg(
          e,
          s.continue.offset
        );
        i = i.concat(l);
      }
      return i;
    }));
  });
}
function gf(e) {
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
      (a) => new uf(a)
    );
  });
}
function mf(e, t, n, o, s) {
  return b(this, null, function* () {
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
const pf = (e, t, n) => {
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
}, hf = ({
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
    assert: ic,
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
          publishFeedbackMessage: new On({
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
    Bg(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new On({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, wf = ({
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
    assert: ic,
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
    Bg(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new On({ text: h, status: "error" });
  });
}, ff = (e) => {
  const t = {
    assert: ic,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, _f = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, vf = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Sf = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), Qe = {
  fetchTranslations: Pg,
  fetchTranslationUnits: gf,
  fetchSegmentTranslation: mf,
  parseTemplateWikitext: pf,
  publishTranslation: hf,
  saveTranslation: wf,
  deleteTranslation: _f,
  fetchTranslatorStats: Sf,
  deleteCXTranslation: vf,
  splitTranslation: ff
}, yf = (e, t) => {
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
}, Cf = (e) => {
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
function kf({ rootState: e }) {
  const { currentSourceSection: t, targetLanguage: n } = e.application, o = Kt.getMTScoreForPageSection(
    t,
    n
  ), s = Kt.getScoreStatus(o);
  if (s === "success")
    return null;
  const a = 100 - o, i = s === "failure" ? "error" : "warning";
  let c, l;
  return i === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new On({
    title: c,
    text: l,
    status: i,
    type: "mt"
  });
}
function xf({ rootState: e, rootGetters: t }) {
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
    (m) => yf(m, l)
  );
  const u = o.getTranslationProgress(a), g = t["application/isSandboxTarget"];
  return Qe.saveTranslation({
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
function bf(a) {
  return b(this, arguments, function* ({ rootState: e, rootGetters: t, dispatch: n }, { captchaId: o, captchaAnswer: s } = {}) {
    const i = yield n("saveTranslation");
    if (i instanceof On)
      return { publishFeedbackMessage: i, targetTitle: null };
    const c = i, l = t["application/getCurrentPage"], {
      /** @type {PageSection} */
      currentSourceSection: d,
      sourceLanguage: r,
      targetLanguage: u
    } = e.application, g = l.title, m = t["application/getTargetPageTitleForPublishing"], p = t["application/isSandboxTarget"], h = {
      html: Cf(d.translationHtml),
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
    return o && (h.captchaId = o, h.captchaWord = s), yield Qe.publishTranslation(h);
  });
}
function $f(a, i) {
  return b(this, arguments, function* ({ rootGetters: e, dispatch: t, rootState: n }, { provider: o, originalContent: s }) {
    const { sourceLanguage: c, targetLanguage: l } = n.application;
    if (!e["mediawiki/isValidProviderForTranslation"](c, l, o))
      return Promise.resolve();
    try {
      const r = yield t(
        "application/getCXServerToken",
        {},
        { root: !0 }
      );
      return yield Qe.fetchSegmentTranslation(
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
function Vf(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield Qe.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Af = {
  validateMT: kf,
  saveTranslation: xf,
  publishTranslation: bf,
  translateContent: $f,
  fetchTranslatorStats: Vf
}, Df = {
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
}, Ef = {
  namespaced: !0,
  state: Q0,
  getters: J0,
  actions: Af,
  mutations: Df
}, Fg = [
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
], Tf = [
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
], Lf = [
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
], Bf = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], Pf = [
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
], Ff = {
  en: Fg,
  es: Tf,
  bn: Lf,
  fr: Bf,
  de: Pf
}, Mf = {
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
  appendixSectionTitles: Ff,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, Nf = {
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
class rc {
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
class Je {
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
class Ho {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const If = Fg;
function zf(e, t, n, o = 24) {
  return b(this, null, function* () {
    var r;
    let a = `/data/recommendation/article/creation/translation/${q.getWikiDomainCode(e)}`;
    n && (a += `/${n}`);
    const i = q.getRestbaseUrl(t, a), c = new URLSearchParams({ count: `${o}` }), l = yield fetch(`${i}?${c}`);
    if (!l.ok)
      throw new Error("Failed to load data from server");
    return (((r = yield l.json()) == null ? void 0 : r.items) || []).map(
      (u) => new rc({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.sitelink_count)
      })
    );
  });
}
function Uf(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Je(a) : null;
  });
}
function Rf(e, t) {
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
function Of(e) {
  const t = If.map((o) => encodeURIComponent(o)).join("|"), n = q.getCXServerUrl(
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
const Hf = (e) => {
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
}, jf = (e) => {
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
}, qf = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((c) => new Ho(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, rt = {
  fetchFavorites: qf,
  fetchPageSuggestions: zf,
  fetchSectionSuggestions: Uf,
  fetchSuggestionSeeds: Rf,
  fetchAppendixTargetSectionTitles: Of,
  markFavorite: Hf,
  unmarkFavorite: jf
};
function Gf(c, l) {
  return b(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
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
          d = new Je({
            sourceLanguage: s,
            targetLanguage: a,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: r.title
          }), e(
            "addPageSuggestion",
            new rc({
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
function Wf(o, s) {
  return b(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield rt.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const Xf = {
  fetchAppendixSectionTitles: Wf,
  loadSectionSuggestion: Gf
}, Kf = {
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
}, Yf = {
  namespaced: !0,
  state: Mf,
  getters: Nf,
  actions: Xf,
  mutations: Kf
}, Qf = {
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
}, Jf = {
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
class Gn {
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
class Zf {
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
function e_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const t_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), e_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, n_ = (e, t) => {
  let n, o;
  return t ? (n = t_(e), o = n.$element.find(
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
}, o_ = (e, t) => {
  const n = Array.from(
    n_(e, t)
  );
  return s_(n).map(
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
        (u) => new De({
          sentences: a_(u),
          node: u
        })
      ), r = !c;
      return new sc({ id: l, title: c, subSections: d, isLeadSection: r });
    }
  );
}, s_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, a_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Wt({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Mg = {
  convertSegmentedContentToPageSections: o_
}, cc = 120, i_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: cc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, u) => ke(le({}, r), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (r, u) => ke(le({}, r), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((r) => {
      const u = d[r.title] || c[r.title] || null;
      return new Gn(ke(le({}, r), { _alias: u }));
    });
  });
}, r_ = (e, t) => {
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
  return q.getApi(e).get(n).then((s) => b(void 0, null, function* () {
    var l, d;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return c ? Object.freeze(new Zf(c, i)) : null;
  }));
}, c_ = (e, t, n, o = null) => Ng(
  e,
  t,
  n,
  o
).then(
  (s) => new Gn({
    sections: Mg.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), Ng = (e, t, n, o = null) => {
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
}, l_ = (e) => b(void 0, null, function* () {
  const t = lf();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: cc,
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
  return yield q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Gn(s))).catch((o) => []);
}), u_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: cc,
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
      (a) => new Gn(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, Yo = {
  fetchPages: i_,
  fetchLanguageTitles: r_,
  fetchPageContent: c_,
  fetchSegmentedContent: Ng,
  fetchNearbyPages: l_,
  searchPagesByTitlePrefix: u_
};
function d_() {
  return q.getLanguagePairs().then((e) => e.sourceLanguages);
}
function g_(e, t) {
  return b(this, null, function* () {
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
function m_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function p_(e, t, n, o) {
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
  fetchSupportedLanguageCodes: d_,
  fetchSupportedMTProviders: g_,
  fetchCXServerToken: m_,
  addWikibaseLink: p_
};
function h_({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const c = o.slice(i, i + s), l = Yo.fetchPages(n, c).then(
      (d) => d.forEach((r) => t("addPage", r))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function w_({ commit: e, getters: t }, { language: n, title: o }) {
  t.getLanguageTitleGroup(n, o) || Yo.fetchLanguageTitles(n, o).then(
    (s) => s && e("addLanguageTitleGroup", s)
  );
}
function f_(n) {
  return b(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield xa.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function __(c, l) {
  return b(this, arguments, function* ({ commit: e, getters: t, dispatch: n }, { sourceLanguage: o, targetLanguage: s, sourceTitle: a, revision: i = null }) {
    let d = t.getPage(o, a);
    if (d && d.content)
      return;
    const r = yield Yo.fetchPageContent(
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
function v_(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield Yo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const S_ = {
  fetchLanguageTitles: w_,
  fetchNearbyPages: v_,
  fetchPageContent: __,
  fetchPageMetadata: h_,
  fetchSupportedLanguageCodes: f_
}, y_ = {
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
}, C_ = {
  namespaced: !0,
  state: Qf,
  getters: Jf,
  actions: S_,
  mutations: y_
}, k_ = {
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
}, x_ = {
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
}, b_ = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => hn(a)
  );
  return s && Tg(s) ? Qe.parseTemplateWikitext(
    Dg(s),
    n,
    t
  ) : Promise.resolve(null);
}, Ig = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => hn(a)
  );
  return s ? Qe.parseTemplateWikitext(
    Dg(s),
    n,
    t
  ) : Promise.resolve(null);
};
function lc(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
let fs;
const uc = ({ dispatch: e, commit: t }) => {
  if (!fs) {
    let n = 1e3, o = 0;
    fs = lc(() => {
      e("translator/saveTranslation", {}, { root: !0 }).then((a) => {
        a instanceof On ? (n *= o + 1, o++, setTimeout(fs, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
      }).catch((a) => {
        if (a instanceof qn)
          t("setIsLoginDialogOn", !0);
        else
          throw a;
      });
    }, 3e3);
  }
  return fs;
}, $_ = ({ dispatch: e, commit: t }) => {
  t("setAutoSavePending", !1), uc({ dispatch: e, commit: t }).cancel();
}, V_ = (o) => b(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
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
function A_(n, o) {
  return b(this, arguments, function* ({ dispatch: e }, t) {
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
function D_({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentSectionSuggestion", n);
}
function E_({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentTranslation", n);
}
function T_(n) {
  return b(this, arguments, function* ({
    dispatch: e,
    state: t
  }) {
    const { sourceLanguage: o, sourceTitle: s } = t.currentSectionSuggestion;
    yield e("mediawiki/fetchLanguageTitles", { language: o, title: s }, { root: !0 });
  });
}
function L_(s, a) {
  return b(this, arguments, function* ({ commit: e, dispatch: t, state: n }, o) {
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
function B_({
  dispatch: e,
  getters: t,
  commit: n,
  state: o
}) {
  const s = t.getCurrentProposedTranslation, { currentSourceSection: a, currentMTProvider: i } = o;
  a.setTranslationForSelectedTranslationUnit(
    s,
    i
  ), uc({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
}
function P_(a, i) {
  return b(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
    const c = document.createElement("div");
    c.innerHTML = s, c.querySelectorAll(".sx-edit-dummy-node").forEach((m) => m.remove()), s = c.innerHTML;
    const { currentSourceSection: l, targetLanguage: d, currentMTProvider: r } = e, { selectedContentTranslationUnit: u } = l;
    if (u instanceof De) {
      const m = o.getCurrentPage, p = o.getCurrentTargetPage;
      s = (yield Ig(
        s,
        (p == null ? void 0 : p.title) || m.title,
        d
      )) || s;
    }
    l.setTranslationForSelectedTranslationUnit(
      s,
      r
    ), uc({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
  });
}
function F_({ state: e, dispatch: t }) {
  const { followingTranslationUnit: n } = e.currentSourceSection;
  n && t("selectTranslationUnitById", n.id);
}
function M_({ state: e, dispatch: t }) {
  const { selectedContentTranslationUnitIndex: n, contentTranslationUnits: o } = e.currentSourceSection, s = n - 1;
  let a = 0;
  s > -1 && (a = o[s].id), t("selectTranslationUnitById", a);
}
function N_({ commit: e, dispatch: t, state: n }, o) {
  e("setCurrentMTProvider", o);
  const { currentSourceSection: s } = n, { selectedTranslationUnitId: a } = s;
  t("translateTranslationUnitById", { id: a, provider: o });
}
function I_(i, c) {
  return b(this, arguments, function* ({ commit: e, state: t, dispatch: n, getters: o }, { id: s, provider: a }) {
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
    if (u instanceof De) {
      u.setBlockTemplateAdaptationInfoByHtml(
        a,
        g
      );
      const m = o.getCurrentPage, p = o.getCurrentTargetPage;
      g = (yield b_(
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
function z_({
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
function U_({ commit: e }) {
  e("setCurrentSectionSuggestion", null);
}
const R_ = {
  applyEditedTranslationToSelectedTranslationUnit: P_,
  applyProposedTranslationToSelectedTranslationUnit: B_,
  clearCurrentSectionSuggestion: U_,
  clearPendingSaveTranslationRequests: $_,
  fetchCurrentSectionSuggestionLanguageTitles: T_,
  getCXServerToken: V_,
  initializeSectionTranslation: D_,
  restoreSectionTranslation: E_,
  selectNextTranslationUnit: F_,
  selectPreviousTranslationUnit: M_,
  selectTranslationUnitById: L_,
  startFavoriteSectionTranslation: A_,
  translateTranslationUnitById: I_,
  translateSelectedTranslationUnitForAllProviders: z_,
  updateMTProvider: N_
}, O_ = {
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
    e.currentSectionSuggestion = t && new Je(ke(le({}, t), {
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
    s instanceof De ? s.blockTemplateProposedTranslations[n] = o : s instanceof Wt && s.addProposedTranslation(n, o);
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
}, H_ = {
  namespaced: !0,
  state: k_,
  getters: x_,
  actions: R_,
  mutations: O_
}, j_ = window.Vuex.createStore, q_ = j_({
  modules: { translator: Ef, suggestions: Yf, mediawiki: C_, application: H_ }
});
function G_() {
  return zg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zg() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const W_ = typeof Proxy == "function", X_ = "devtools-plugin:setup", K_ = "plugin:settings:set";
let Sn, Ur;
function Y_() {
  var e;
  return Sn !== void 0 || (typeof window != "undefined" && window.performance ? (Sn = !0, Ur = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Sn = !0, Ur = global.perf_hooks.performance) : Sn = !1), Sn;
}
function Q_() {
  return Y_() ? Ur.now() : Date.now();
}
class J_ {
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
        return Q_();
      }
    }, n && n.on(K_, (i, c) => {
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
    return b(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Z_(e, t) {
  const n = e, o = zg(), s = G_(), a = W_ && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(X_, e, t);
  else {
    const i = a ? new J_(n, s) : null;
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
const Ug = window.Vue.getCurrentInstance, Hn = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const it = window.Vue.computed, Uo = window.Vue.unref, e1 = window.Vue.watchEffect, Rg = window.Vue.defineComponent, t1 = window.Vue.reactive, Og = window.Vue.h, Za = window.Vue.provide, n1 = window.Vue.ref, Hg = window.Vue.watch, o1 = window.Vue.shallowRef, s1 = window.Vue.shallowReactive, a1 = window.Vue.nextTick, bt = typeof window != "undefined";
function i1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const j = Object.assign;
function ei(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Ee(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ro = () => {
}, Ee = Array.isArray;
function U(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const r1 = /\/$/, c1 = (e) => e.replace(r1, "");
function ti(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return c < l && c >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), a = t.slice(l + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = d1(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function l1(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function _l(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function vl(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Yt(t.matched[o], n.matched[s]) && jg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Yt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function jg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!u1(e[n], t[n]))
      return !1;
  return !0;
}
function u1(e, t) {
  return Ee(e) ? Sl(e, t) : Ee(t) ? Sl(t, e) : e === t;
}
function Sl(e, t) {
  return Ee(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function d1(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return U(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var jo;
(function(e) {
  e.pop = "pop", e.push = "push";
})(jo || (jo = {}));
var Oo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Oo || (Oo = {}));
function g1(e) {
  if (!e)
    if (bt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), c1(e);
}
const m1 = /^[^#]+#/;
function p1(e, t) {
  return e.replace(m1, "#") + t;
}
function h1(e, t) {
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
function w1(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          U(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        U(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && U(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = h1(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function yl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Rr = /* @__PURE__ */ new Map();
function f1(e, t) {
  Rr.set(e, t);
}
function _1(e) {
  const t = Rr.get(e);
  return Rr.delete(e), t;
}
let v1 = () => location.protocol + "//" + location.host;
function qg(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(c);
    return l[0] !== "/" && (l = "/" + l), _l(l, "");
  }
  return _l(n, e) + o + s;
}
function S1(e, t, n, o) {
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
        type: jo.pop,
        direction: w ? w > 0 ? Oo.forward : Oo.back : Oo.unknown
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
function Cl(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? ba() : null
  };
}
function y1(e) {
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
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : v1() + e + l;
    try {
      t[r ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? U("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](g);
    }
  }
  function i(l, d) {
    const r = j({}, t.state, Cl(
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
    ({}).NODE_ENV !== "production" && !t.state && U(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const u = j({}, Cl(o.value, l, null), { position: r.position + 1 }, d);
    a(l, u, !1), o.value = l;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function C1(e) {
  e = g1(e);
  const t = y1(e), n = S1(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = j({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: p1.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function k1(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && U(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), C1(e);
}
function x1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Gg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Dt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Or = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var kl;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(kl || (kl = {}));
const b1 = {
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
    return `Redirected from "${e.fullPath}" to "${V1(t)}" via a navigation guard.`;
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
function jn(e, t) {
  return {}.NODE_ENV !== "production" ? j(new Error(b1[e](t)), {
    type: e,
    [Or]: !0
  }, t) : j(new Error(), {
    type: e,
    [Or]: !0
  }, t);
}
function dt(e, t) {
  return e instanceof Error && Or in e && (t == null || !!(e.type & t));
}
const $1 = ["params", "query", "hash"];
function V1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of $1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const xl = "[^/]+?", A1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, D1 = /[.+*?^${}()[\]/\\]/g;
function E1(e, t) {
  const n = j({}, A1, t), o = [];
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
        u || (s += "/"), s += g.value.replace(D1, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: f } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const v = f || xl;
        if (v !== xl) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (A) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + A.message);
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
          if (Ee(f) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const v = Ee(f) ? f.join("/") : f;
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
function T1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function L1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = T1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (bl(o))
      return 1;
    if (bl(s))
      return -1;
  }
  return s.length - o.length;
}
function bl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const B1 = {
  type: 0,
  value: ""
}, P1 = /[a-zA-Z0-9_]/;
function F1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[B1]];
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
        l === "(" ? n = 2 : P1.test(l) ? g() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
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
function M1(e, t, n) {
  const o = E1(F1(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && U(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
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
function N1(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Al({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, u, g) {
    const m = !g, p = I1(r);
    ({}).NODE_ENV !== "production" && O1(p, u), p.aliasOf = g && g.record;
    const h = Al(t, r), w = [
      p
    ];
    if ("alias" in r) {
      const C = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const A of C)
        w.push(j({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : p.components,
          path: A,
          // we might be the child of an alias
          aliasOf: g ? g.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, v;
    for (const C of w) {
      const { path: A } = C;
      if (u && A[0] !== "/") {
        const P = u.record.path, D = P[P.length - 1] === "/" ? "" : "/";
        C.path = u.record.path + (A && D + A);
      }
      if ({}.NODE_ENV !== "production" && C.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = M1(C, u, h), {}.NODE_ENV !== "production" && u && A[0] === "/" && H1(f, u), g ? (g.alias.push(f), {}.NODE_ENV !== "production" && R1(g, f)) : (v = v || f, v !== f && v.alias.push(f), m && r.name && !Vl(f) && i(r.name)), p.children) {
        const P = p.children;
        for (let D = 0; D < P.length; D++)
          a(P[D], f, g && g.children[D]);
      }
      g = g || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && l(f);
    }
    return v ? () => {
      i(v);
    } : Ro;
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
    for (; u < n.length && L1(r, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[u].record.path || !Wg(r, n[u])); )
      u++;
    n.splice(u, 0, r), r.record.name && !Vl(r) && o.set(r.record.name, r);
  }
  function d(r, u) {
    let g, m = {}, p, h;
    if ("name" in r && r.name) {
      if (g = o.get(r.name), !g)
        throw jn(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(r.params || {}).filter((C) => !g.keys.find((A) => A.name === C));
        v.length && U(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = j(
        // paramsFromLocation is a new object
        $l(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && $l(r.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in r)
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && U(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((v) => v.re.test(u.path)), !g)
        throw jn(1, {
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
      meta: U1(w)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: d, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function $l(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function I1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: z1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function z1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Vl(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function U1(e) {
  return e.reduce((t, n) => j(t, n.meta), {});
}
function Al(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Hr(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function R1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Hr.bind(null, n)))
      return U(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Hr.bind(null, n)))
      return U(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function O1(e, t) {
  t && t.record.name && !e.name && !e.path && U(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function H1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Hr.bind(null, n)))
      return U(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Wg(e, t) {
  return t.children.some((n) => n === e || Wg(e, n));
}
const Xg = /#/g, j1 = /&/g, q1 = /\//g, G1 = /=/g, W1 = /\?/g, Kg = /\+/g, X1 = /%5B/g, K1 = /%5D/g, Yg = /%5E/g, Y1 = /%60/g, Qg = /%7B/g, Q1 = /%7C/g, Jg = /%7D/g, J1 = /%20/g;
function dc(e) {
  return encodeURI("" + e).replace(Q1, "|").replace(X1, "[").replace(K1, "]");
}
function Z1(e) {
  return dc(e).replace(Qg, "{").replace(Jg, "}").replace(Yg, "^");
}
function jr(e) {
  return dc(e).replace(Kg, "%2B").replace(J1, "+").replace(Xg, "%23").replace(j1, "%26").replace(Y1, "`").replace(Qg, "{").replace(Jg, "}").replace(Yg, "^");
}
function ev(e) {
  return jr(e).replace(G1, "%3D");
}
function tv(e) {
  return dc(e).replace(Xg, "%23").replace(W1, "%3F");
}
function nv(e) {
  return e == null ? "" : tv(e).replace(q1, "%2F");
}
function qo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && U(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function ov(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Kg, " "), i = a.indexOf("="), c = qo(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : qo(a.slice(i + 1));
    if (c in t) {
      let d = t[c];
      Ee(d) || (d = t[c] = [d]), d.push(l);
    } else
      t[c] = l;
  }
  return t;
}
function Dl(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = ev(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ee(o) ? o.map((a) => a && jr(a)) : [o && jr(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function sv(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ee(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const av = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), El = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), $a = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Zg = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), qr = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Jn() {
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
function Xt(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const l = (u) => {
      u === !1 ? c(jn(4, {
        from: n,
        to: t
      })) : u instanceof Error ? c(u) : x1(u) ? c(jn(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? iv(l, t, n) : l);
    let r = Promise.resolve(d);
    if (e.length < 3 && (r = r.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        r = r.then((g) => l._called ? g : (U(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !l._called) {
        U(u), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((u) => c(u));
  });
}
function iv(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && U(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ni(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && U(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let c = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw U(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          U(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = c;
          c = () => l;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, U(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (rv(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(Xt(d, n, o, a, i));
        } else {
          let l = c();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (U(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = i1(d) ? d.default : d;
            a.components[i] = r;
            const g = (r.__vccOpts || r)[t];
            return g && Xt(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function rv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Tl(e) {
  const t = Hn($a), n = Hn(Zg), o = it(() => t.resolve(Uo(e.to))), s = it(() => {
    const { matched: l } = o.value, { length: d } = l, r = l[d - 1], u = n.matched;
    if (!r || !u.length)
      return -1;
    const g = u.findIndex(Yt.bind(null, r));
    if (g > -1)
      return g;
    const m = Ll(l[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Ll(r) === m && // avoid comparing the child with its parent
      u[u.length - 1].path !== m ? u.findIndex(Yt.bind(null, l[d - 2])) : g
    );
  }), a = it(() => s.value > -1 && dv(n.params, o.value.params)), i = it(() => s.value > -1 && s.value === n.matched.length - 1 && jg(n.params, o.value.params));
  function c(l = {}) {
    return uv(l) ? t[Uo(e.replace) ? "replace" : "push"](
      Uo(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ro) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && bt) {
    const l = Ug();
    if (l) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), e1(() => {
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
const cv = /* @__PURE__ */ Rg({
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
  useLink: Tl,
  setup(e, { slots: t }) {
    const n = t1(Tl(e)), { options: o } = Hn($a), s = it(() => ({
      [Bl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Bl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), lv = cv;
function uv(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function dv(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Ee(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function Ll(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Bl = (e, t, n) => e != null ? e : t != null ? t : n, gv = /* @__PURE__ */ Rg({
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
    ({}).NODE_ENV !== "production" && pv();
    const o = Hn(qr), s = it(() => e.route || o.value), a = Hn(El, 0), i = it(() => {
      let d = Uo(a);
      const { matched: r } = s.value;
      let u;
      for (; (u = r[d]) && !u.components; )
        d++;
      return d;
    }), c = it(() => s.value.matched[i.value]);
    Za(El, it(() => i.value + 1)), Za(av, c), Za(qr, s);
    const l = n1();
    return Hg(() => [l.value, c.value, e.name], ([d, r, u], [g, m, p]) => {
      r && (r.instances[u] = d, m && m !== r && d && d === g && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), d && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !Yt(r, m) || !g) && (r.enterCallbacks[u] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, r = e.name, u = c.value, g = u && u.components[r];
      if (!g)
        return Pl(n.default, { Component: g, route: d });
      const m = u.props[r], p = m ? m === !0 ? d.params : typeof m == "function" ? m(d) : m : null, w = Og(g, j({}, p, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (u.instances[r] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && bt && w.ref) {
        const f = {
          depth: i.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (Ee(w.ref) ? w.ref.map((C) => C.i) : [w.ref.i]).forEach((C) => {
          C.__vrv_devtools = f;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Pl(n.default, { Component: w, route: d }) || w
      );
    };
  }
});
function Pl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const mv = gv;
function pv() {
  const e = Ug(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    U(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Zn(e, t) {
  const n = j({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => kv(o, ["instances", "children", "aliasOf"]))
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
function _s(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let hv = 0;
function wv(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = hv++;
  Z_({
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
        value: Zn(t.currentRoute.value, "Current Route")
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
      Ee(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
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
        guard: _s("beforeEach"),
        from: Zn(u, "Current Location during this navigation"),
        to: Zn(r, "Target location")
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
        guard: _s("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = _s("❌")) : m.status = _s("✅"), m.from = Zn(u, "Current Location during this navigation"), m.to = Zn(r, "Target location"), s.addTimelineEvent({
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
        Gr(g, r.filter.toLowerCase())
      ))), u.forEach((g) => am(g, t.currentRoute.value)), r.rootNodes = u.map(sm);
    }
    let d;
    s.on.getInspectorTree((r) => {
      d = r, r.app === e && r.inspectorId === c && l();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        g && (r.state = {
          options: _v(g)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function fv(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function _v(e) {
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
        display: e.keys.map((o) => `${o.name}${fv(o)}`).join(" "),
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
const em = 15485081, tm = 2450411, nm = 8702998, vv = 2282478, om = 16486972, Sv = 6710886;
function sm(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: vv
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
    backgroundColor: Sv
  });
  let o = n.__vd_id;
  return o == null && (o = String(yv++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(sm)
  };
}
let yv = 0;
const Cv = /^\/(.*)\/([a-z]*)$/;
function am(e, t) {
  const n = t.matched.length && Yt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Yt(o, e.record))), e.children.forEach((o) => am(o, t));
}
function im(e) {
  e.__vd_match = !1, e.children.forEach(im);
}
function Gr(e, t) {
  const n = String(e.re).match(Cv);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Gr(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = qo(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Gr(i, t));
}
function kv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function xv(e) {
  const t = N1(e.routes, e), n = e.parseQuery || ov, o = e.stringifyQuery || Dl, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Jn(), i = Jn(), c = Jn(), l = o1(Dt);
  let d = Dt;
  bt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = ei.bind(null, (_) => "" + _), u = ei.bind(null, nv), g = (
    // @ts-expect-error: intentionally avoid the type check
    ei.bind(null, qo)
  );
  function m(_, x) {
    let k, T;
    return Gg(_) ? (k = t.getRecordMatcher(_), T = x) : T = _, t.addRoute(T, k);
  }
  function p(_) {
    const x = t.getRecordMatcher(_);
    x ? t.removeRoute(x) : {}.NODE_ENV !== "production" && U(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function w(_) {
    return !!t.getRecordMatcher(_);
  }
  function f(_, x) {
    if (x = j({}, x || l.value), typeof _ == "string") {
      const N = ti(n, _, x.path), X = t.resolve({ path: N.path }, x), Oe = s.createHref(N.fullPath);
      return {}.NODE_ENV !== "production" && (Oe.startsWith("//") ? U(`Location "${_}" resolved to "${Oe}". A resolved location cannot start with multiple slashes.`) : X.matched.length || U(`No match found for location with path "${_}"`)), j(N, X, {
        params: g(X.params),
        hash: qo(N.hash),
        redirectedFrom: void 0,
        href: Oe
      });
    }
    let k;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && U(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), k = j({}, _, {
        path: ti(n, _.path, x.path).path
      });
    else {
      const N = j({}, _.params);
      for (const X in N)
        N[X] == null && delete N[X];
      k = j({}, _, {
        params: u(N)
      }), x.params = u(x.params);
    }
    const T = t.resolve(k, x), R = _.hash || "";
    ({}).NODE_ENV !== "production" && R && !R.startsWith("#") && U(`A \`hash\` should always start with the character "#". Replace "${R}" with "#${R}".`), T.params = r(g(T.params));
    const Q = l1(o, j({}, _, {
      hash: Z1(R),
      path: T.path
    })), z = s.createHref(Q);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? U(`Location "${_}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : T.matched.length || U(`No match found for location with path "${"path" in _ ? _.path : _}"`)), j({
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
        o === Dl ? sv(_.query) : _.query || {}
      )
    }, T, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function v(_) {
    return typeof _ == "string" ? ti(n, _, l.value.path) : j({}, _);
  }
  function C(_, x) {
    if (d !== _)
      return jn(8, {
        from: x,
        to: _
      });
  }
  function A(_) {
    return I(_);
  }
  function P(_) {
    return A(j(v(_), { replace: !0 }));
  }
  function D(_) {
    const x = _.matched[_.matched.length - 1];
    if (x && x.redirect) {
      const { redirect: k } = x;
      let T = typeof k == "function" ? k(_) : k;
      if (typeof T == "string" && (T = T.includes("?") || T.includes("#") ? T = v(T) : (
        // force empty params
        { path: T }
      ), T.params = {}), {}.NODE_ENV !== "production" && !("path" in T) && !("name" in T))
        throw U(`Invalid redirect found:
${JSON.stringify(T, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return j({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in T ? {} : _.params
      }, T);
    }
  }
  function I(_, x) {
    const k = d = f(_), T = l.value, R = _.state, Q = _.force, z = _.replace === !0, N = D(k);
    if (N)
      return I(
        j(v(N), {
          state: typeof N == "object" ? j({}, R, N.state) : R,
          force: Q,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        x || k
      );
    const X = k;
    X.redirectedFrom = x;
    let Oe;
    return !Q && vl(o, T, k) && (Oe = jn(16, { to: X, from: T }), Be(
      T,
      T,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Oe ? Promise.resolve(Oe) : Le(X, T)).catch((ie) => dt(ie) ? (
      // navigation redirects still mark the router as ready
      dt(
        ie,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ie : ce(ie)
    ) : (
      // reject any unknown error
      Re(ie, X, T)
    )).then((ie) => {
      if (ie) {
        if (dt(
          ie,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          vl(o, f(ie.to), X) && // and we have done it a couple of times
          x && // @ts-expect-error: added only in dev
          (x._count = x._count ? (
            // @ts-expect-error
            x._count + 1
          ) : 1) > 30 ? (U(`Detected a possibly infinite redirection in a navigation guard when going from "${T.fullPath}" to "${X.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : I(
            // keep options
            j({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, v(ie.to), {
              state: typeof ie.to == "object" ? j({}, R, ie.to.state) : R,
              force: Q
            }),
            // preserve the original redirectedFrom if any
            x || X
          );
      } else
        ie = H(X, T, !0, z, R);
      return fe(X, T, ie), ie;
    });
  }
  function V(_, x) {
    const k = C(_, x);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function F(_) {
    const x = Zt.values().next().value;
    return x && typeof x.runWithContext == "function" ? x.runWithContext(_) : _();
  }
  function Le(_, x) {
    let k;
    const [T, R, Q] = bv(_, x);
    k = ni(T.reverse(), "beforeRouteLeave", _, x);
    for (const N of T)
      N.leaveGuards.forEach((X) => {
        k.push(Xt(X, _, x));
      });
    const z = V.bind(null, _, x);
    return k.push(z), $t(k).then(() => {
      k = [];
      for (const N of a.list())
        k.push(Xt(N, _, x));
      return k.push(z), $t(k);
    }).then(() => {
      k = ni(R, "beforeRouteUpdate", _, x);
      for (const N of R)
        N.updateGuards.forEach((X) => {
          k.push(Xt(X, _, x));
        });
      return k.push(z), $t(k);
    }).then(() => {
      k = [];
      for (const N of Q)
        if (N.beforeEnter)
          if (Ee(N.beforeEnter))
            for (const X of N.beforeEnter)
              k.push(Xt(X, _, x));
          else
            k.push(Xt(N.beforeEnter, _, x));
      return k.push(z), $t(k);
    }).then(() => (_.matched.forEach((N) => N.enterCallbacks = {}), k = ni(Q, "beforeRouteEnter", _, x), k.push(z), $t(k))).then(() => {
      k = [];
      for (const N of i.list())
        k.push(Xt(N, _, x));
      return k.push(z), $t(k);
    }).catch((N) => dt(
      N,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? N : Promise.reject(N));
  }
  function fe(_, x, k) {
    c.list().forEach((T) => F(() => T(_, x, k)));
  }
  function H(_, x, k, T, R) {
    const Q = C(_, x);
    if (Q)
      return Q;
    const z = x === Dt, N = bt ? history.state : {};
    k && (T || z ? s.replace(_.fullPath, j({
      scroll: z && N && N.scroll
    }, R)) : s.push(_.fullPath, R)), l.value = _, Be(_, x, k, z), ce();
  }
  let Y;
  function oe() {
    Y || (Y = s.listen((_, x, k) => {
      if (!Wn.listening)
        return;
      const T = f(_), R = D(T);
      if (R) {
        I(j(R, { replace: !0 }), T).catch(Ro);
        return;
      }
      d = T;
      const Q = l.value;
      bt && f1(yl(Q.fullPath, k.delta), ba()), Le(T, Q).catch((z) => dt(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : dt(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (I(
        z.to,
        T
        // avoid an uncaught rejection, let push call triggerError
      ).then((N) => {
        dt(
          N,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !k.delta && k.type === jo.pop && s.go(-1, !1);
      }).catch(Ro), Promise.reject()) : (k.delta && s.go(-k.delta, !1), Re(z, T, Q))).then((z) => {
        z = z || H(
          // after navigation, all matched components are resolved
          T,
          Q,
          !1
        ), z && (k.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !dt(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-k.delta, !1) : k.type === jo.pop && dt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), fe(T, Q, z);
      }).catch(Ro);
    }));
  }
  let Ue = Jn(), _n = Jn(), et;
  function Re(_, x, k) {
    ce(_);
    const T = _n.list();
    return T.length ? T.forEach((R) => R(_, x, k)) : ({}.NODE_ENV !== "production" && U("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function ee() {
    return et && l.value !== Dt ? Promise.resolve() : new Promise((_, x) => {
      Ue.add([_, x]);
    });
  }
  function ce(_) {
    return et || (et = !_, oe(), Ue.list().forEach(([x, k]) => _ ? k(_) : x()), Ue.reset()), _;
  }
  function Be(_, x, k, T) {
    const { scrollBehavior: R } = e;
    if (!bt || !R)
      return Promise.resolve();
    const Q = !k && _1(yl(_.fullPath, 0)) || (T || !k) && history.state && history.state.scroll || null;
    return a1().then(() => R(_, x, Q)).then((z) => z && w1(z)).catch((z) => Re(z, _, x));
  }
  const te = (_) => s.go(_);
  let vn;
  const Zt = /* @__PURE__ */ new Set(), Wn = {
    currentRoute: l,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: A,
    replace: P,
    go: te,
    back: () => te(-1),
    forward: () => te(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: _n.add,
    isReady: ee,
    install(_) {
      const x = this;
      _.component("RouterLink", lv), _.component("RouterView", mv), _.config.globalProperties.$router = x, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Uo(l)
      }), bt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !vn && l.value === Dt && (vn = !0, A(s.location).catch((R) => {
        ({}).NODE_ENV !== "production" && U("Unexpected error when starting the router:", R);
      }));
      const k = {};
      for (const R in Dt)
        Object.defineProperty(k, R, {
          get: () => l.value[R],
          enumerable: !0
        });
      _.provide($a, x), _.provide(Zg, s1(k)), _.provide(qr, l);
      const T = _.unmount;
      Zt.add(_), _.unmount = function() {
        Zt.delete(_), Zt.size < 1 && (d = Dt, Y && Y(), Y = null, l.value = Dt, vn = !1, et = !1), T();
      }, {}.NODE_ENV !== "production" && bt && wv(_, x, t);
    }
  };
  function $t(_) {
    return _.reduce((x, k) => x.then(() => F(k)), Promise.resolve());
  }
  return Wn;
}
function bv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((d) => Yt(d, c)) ? o.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((d) => Yt(d, l)) || s.push(l));
  }
  return [n, o, s];
}
function we() {
  return Hn($a);
}
const $v = {
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
}, Vv = {
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
}, Av = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], Dv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, Ev = {
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
}, Tv = {
  languages: $v,
  scriptgroups: Vv,
  rtlscripts: Av,
  regiongroups: Dv,
  territories: Ev
};
var pe = Tv;
function Qo(e) {
  return !!pe.languages[e];
}
function Qt(e) {
  return Qo(e) && pe.languages[e].length === 1 ? pe.languages[e][0] : !1;
}
function Lv() {
  return pe.languages;
}
function Jo(e) {
  var t = Qt(e);
  return t ? Jo(t) : Qo(e) ? pe.languages[e][0] : "Zyyy";
}
function gc(e) {
  var t = Qt(e);
  return t ? gc(t) : Qo(e) && pe.languages[e][1] || "UNKNOWN";
}
function Go(e) {
  var t = Qt(e);
  return t ? Go(t) : Qo(e) && pe.languages[e][2] || e;
}
function Bv() {
  var e, t = {};
  for (e in pe.languages)
    Qt(e) || (t[e] = Go(e));
  return t;
}
function rm(e) {
  var t, n, o = [];
  for (t in pe.languages)
    if (!Qt(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Jo(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Pv(e) {
  return rm([e]);
}
function cm(e) {
  var t;
  for (t in pe.scriptgroups)
    if (pe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function mc(e) {
  return cm(Jo(e));
}
function lm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Qt(n) || n, a = mc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function um(e) {
  var t, n, o, s = {};
  for (t in pe.languages)
    if (!Qt(t)) {
      for (n = 0; n < e.length; n++)
        if (gc(t).includes(e[n])) {
          o = mc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Fv(e) {
  return um([e]);
}
function Mv(e) {
  var t, n, o, s = [];
  for (t = lm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Nv(e, t) {
  var n = Go(e) || e, o = Go(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function dm(e) {
  return pe.rtlscripts.includes(Jo(e));
}
function Iv(e) {
  return dm(e) ? "rtl" : "ltr";
}
function zv(e) {
  return pe.territories[e] || [];
}
function Uv(e, t) {
  t.target ? pe.languages[e] = [t.target] : pe.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: Uv,
  getAutonym: Go,
  getAutonyms: Bv,
  getDir: Iv,
  getGroupOfScript: cm,
  getLanguages: Lv,
  getLanguagesByScriptGroup: lm,
  getLanguagesByScriptGroupInRegion: Fv,
  getLanguagesByScriptGroupInRegions: um,
  getLanguagesInScript: Pv,
  getLanguagesInScripts: rm,
  getLanguagesInTerritory: zv,
  getRegions: gc,
  getScript: Jo,
  getScriptGroupOfLanguage: mc,
  isKnown: Qo,
  isRedirect: Qt,
  isRtl: dm,
  sortByScriptGroup: Mv,
  sortByAutonym: Nv
};
const Rv = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), d = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, Ov = (e) => {
  const t = Rv(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
}, Hv = window.Vue.inject, jv = window.Vue.reactive;
var qv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, gm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(qv, function() {
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
                  const _e = S[M]();
                  if (_e !== null)
                    return _e;
                }
                return null;
              };
            }
            function v(S) {
              const M = w, _e = [];
              for (let lt = 0; lt < S.length; lt++) {
                const ut = S[lt]();
                if (ut === null)
                  return w = M, null;
                _e.push(ut);
              }
              return _e;
            }
            function C(S, M) {
              return () => {
                const _e = w, lt = [];
                let ut = M();
                for (; ut !== null; )
                  lt.push(ut), ut = M();
                return lt.length < S ? (w = _e, null) : lt;
              };
            }
            function A(S) {
              const M = S.length;
              return () => {
                let _e = null;
                return p.slice(w, w + M) === S && (_e = S, w += M), _e;
              };
            }
            function P(S) {
              return () => {
                const M = p.slice(w).match(S);
                return M === null ? null : (w += M[0].length, M[0]);
              };
            }
            const D = P(/^\s+/), I = A("|"), V = A(":"), F = A("\\"), Le = P(/^./), fe = A("$"), H = P(/^\d+/), Y = A('"'), oe = A("'"), Ue = P(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), _n = P(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), et = f([Re, P(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Re() {
              const S = v([F, Le]);
              return S === null ? null : S[1];
            }
            const ee = f([Re, _n]), ce = f([Re, Ue]);
            function Be() {
              const S = v([fe, H]);
              return S === null ? null : ["REPLACE", parseInt(S[1], 10) - 1];
            }
            const te = (vn = P(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Zt = function(S) {
              return S.toString();
            }, () => {
              const S = vn();
              return S === null ? null : Zt(S);
            });
            var vn, Zt;
            function Wn() {
              const S = v([I, C(0, rs)]);
              if (S === null)
                return null;
              const M = S[1];
              return M.length > 1 ? ["CONCAT"].concat(M) : M[0];
            }
            function $t() {
              const S = v([te, V, Be]);
              return S === null ? null : [S[0], S[2]];
            }
            function _() {
              const S = v([te, V, rs]);
              return S === null ? null : [S[0], S[2]];
            }
            function x() {
              const S = v([te, V]);
              return S === null ? null : [S[0], ""];
            }
            const k = f([function() {
              const S = v([f([$t, _, x]), C(0, Wn)]);
              return S === null ? null : S[0].concat(S[1]);
            }, function() {
              const S = v([te, C(0, Wn)]);
              return S === null ? null : [S[0]].concat(S[1]);
            }]), T = A("{{"), R = A("}}"), Q = A("[["), z = A("]]"), N = A("["), X = A("]");
            function Oe() {
              const S = v([T, k, R]);
              return S === null ? null : S[1];
            }
            const ie = f([function() {
              const S = v([C(1, rs), I, C(1, is)]);
              return S === null ? null : [["CONCAT"].concat(S[0]), ["CONCAT"].concat(S[2])];
            }, function() {
              const S = v([C(1, rs)]);
              return S === null ? null : [["CONCAT"].concat(S[0])];
            }]);
            function Ac() {
              let S = null;
              const M = v([Q, ie, z]);
              if (M !== null) {
                const _e = M[1];
                S = ["WIKILINK"].concat(_e);
              }
              return S;
            }
            function Dc() {
              let S = null;
              const M = v([N, C(1, Om), D, C(1, is), X]);
              return M !== null && (S = ["EXTLINK", M[1].length === 1 ? M[1][0] : ["CONCAT"].concat(M[1]), ["CONCAT"].concat(M[3])]), S;
            }
            const Da = P(/^[A-Za-z]+/);
            function Im() {
              const S = P(/^[^"]*/), M = v([Y, S, Y]);
              return M === null ? null : M[1];
            }
            function zm() {
              const S = P(/^[^']*/), M = v([oe, S, oe]);
              return M === null ? null : M[1];
            }
            function Um() {
              const S = P(/^\s*=\s*/), M = v([D, Da, S, f([Im, zm])]);
              return M === null ? null : [M[1], M[3]];
            }
            function Rm() {
              const S = C(0, Um)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], S);
            }
            const Om = f([Oe, Be, Ac, Dc, function() {
              const S = C(1, et)();
              return S === null ? null : S.join("");
            }]), is = f([Oe, Be, Ac, Dc, function() {
              let S = null;
              const M = w, _e = A("<"), lt = P(/^\/?/), ut = P(/^\s*>/), Ea = v([_e, Da, Rm, lt, ut]);
              if (Ea === null)
                return null;
              const Tc = w, Lc = Ea[1], Ta = C(0, is)(), Hm = w, Bc = v([A("</"), Da, ut]);
              if (Bc === null)
                return ["CONCAT", p.slice(M, Tc)].concat(Ta);
              const jm = w, qm = Bc[1], Pc = Ea[2];
              if (function(en, cs, La, Ba = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((en = en.toLowerCase()) !== (cs = cs.toLowerCase()) || Ba.allowedHtmlElements.indexOf(en) === -1)
                  return !1;
                const Gm = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ls = 0, Wm = La.length; ls < Wm; ls += 2) {
                  const Pa = La[ls];
                  if (Ba.allowedHtmlCommonAttributes.indexOf(Pa) === -1 && (Ba.allowedHtmlAttributesByElement[en] || []).indexOf(Pa) === -1 || Pa === "style" && La[ls + 1].search(Gm) !== -1)
                    return !1;
                }
                return !0;
              }(Lc, qm, Pc.slice(1)))
                S = ["HTMLELEMENT", Lc, Pc].concat(Ta);
              else {
                const en = (cs) => cs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                S = ["CONCAT", en(p.slice(M, Tc))].concat(Ta, en(p.slice(Hm, jm)));
              }
              return S;
            }, function() {
              const S = C(1, ce)();
              return S === null ? null : S.join("");
            }]), rs = f([Oe, Be, function() {
              const S = C(1, ee)();
              return S === null ? null : S.join("");
            }]), Ec = function() {
              const S = C(0, is)();
              return S === null ? null : ["CONCAT"].concat(S);
            }();
            if (Ec === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return Ec;
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
var Gv = gm.exports;
const Fl = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, mm = Symbol("banana-context");
function Te() {
  const e = Hv(mm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Wv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = jv(new Gv(e.locale, e));
  return {
    install: (n) => {
      n.provide(mm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Fl(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Fl(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const Xv = window.Vuex.useStore, Kv = window.Vue.computed, Yv = {
  name: "CxTranslationWork",
  components: { MwRow: L, MwCol: y, MwThumbnail: oc, MwIcon: he },
  props: {
    translation: {
      type: Ko,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = Xv(), n = (a, i) => {
      const c = t.getters["mediawiki/getPage"](a, i);
      return c == null ? void 0 : c.thumbnail;
    }, o = Te();
    return {
      timeagoMessage: Kv(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, i = Ov(e.translation.startTimestamp);
        return o.i18n(
          a[i.postfix],
          i.value
        );
      }),
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      getImage: n,
      mwIconArrowForward: Jr,
      mwIconArrowNext: Zr
    };
  }
}, vs = window.Vue.resolveComponent, yn = window.Vue.createVNode, gt = window.Vue.createElementVNode, Ml = window.Vue.renderSlot, Nl = window.Vue.withModifiers, oi = window.Vue.toDisplayString, si = window.Vue.withCtx, Qv = window.Vue.openBlock, Jv = window.Vue.createElementBlock, Zv = window.Vue.createCommentVNode, eS = { class: "col shrink pe-4" }, tS = { class: "col" }, nS = { class: "cx-translation__details column justify-between ma-0" }, oS = { class: "row ma-0" }, sS = { class: "col grow" }, aS = { class: "col shrink ps-2" }, iS = ["dir", "textContent"], rS = ["dir", "textContent"], cS = ["textContent"];
function lS(e, t, n, o, s, a) {
  const i = vs("mw-thumbnail"), c = vs("mw-icon"), l = vs("mw-col"), d = vs("mw-row");
  return n.translation ? (Qv(), Jv("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = Nl((r) => e.$emit("click"), ["stop"]))
  }, [
    gt("div", eS, [
      yn(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    gt("div", tS, [
      gt("div", nS, [
        gt("div", oS, [
          gt("div", sS, [
            Ml(e.$slots, "title")
          ]),
          gt("div", aS, [
            yn(c, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = Nl((r) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Ml(e.$slots, "mid-content"),
        yn(d, { class: "cx-translation__footer ma-0" }, {
          default: si(() => [
            yn(l, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: si(() => [
                gt("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: oi(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, iS),
                yn(c, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                gt("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: oi(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, rS)
              ]),
              _: 1
            }),
            yn(l, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: si(() => [
                gt("span", {
                  textContent: oi(o.timeagoMessage)
                }, null, 8, cS)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : Zv("", !0);
}
const pm = /* @__PURE__ */ E(Yv, [["render", lS]]);
const eo = window.Vue.unref, Il = window.Vue.toDisplayString, uS = window.Vue.normalizeClass, dS = window.Vue.createElementVNode, ai = window.Vue.openBlock, gS = window.Vue.createElementBlock, zl = window.Vue.createCommentVNode, Ul = window.Vue.createVNode, Ss = window.Vue.withCtx, Rl = window.Vue.createBlock, mS = ["lang", "textContent"], pS = ["lang", "textContent"], hS = window.Vue.computed, wS = window.Vue.inject, fS = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: ac,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = wS("colors").gray200, s = hS(
      () => {
        var a;
        return ((a = t.translation.progress) == null ? void 0 : a.any) * 100 || 0;
      }
    );
    return (a, i) => (ai(), Rl(pm, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": eo(vg),
      onActionIconClicked: i[0] || (i[0] = (c) => a.$emit("delete-translation"))
    }, {
      title: Ss(() => [
        dS("h5", {
          class: uS(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Il(e.translation.sourceTitle)
        }, null, 10, mS),
        e.translation.isLeadSectionTranslation ? zl("", !0) : (ai(), gS("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Il(e.translation.sourceSectionTitle)
        }, null, 8, pS))
      ]),
      "mid-content": Ss(() => [
        e.translation.progress ? (ai(), Rl(eo(L), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ss(() => [
            Ul(eo(y), null, {
              default: Ss(() => [
                Ul(eo(xg), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: eo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : zl("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, _S = window.Vue.computed, vS = window.Vue.inject, Zo = () => {
  const e = vS("breakpoints");
  return { isDesktop: _S(
    () => !q.isMobileDomain() && e.value.tabletAndUp
  ) };
}, xe = window.Vue.computed;
function B(e) {
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
const SS = window.Vuex.useStore, pc = () => {
  const e = SS(), t = we();
  return (n, o) => b(void 0, null, function* () {
    const { sourceLanguage: s, targetLanguage: a } = B(e), i = yield e.dispatch(
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
}, Ol = window.Vue.computed, yS = window.Vuex.useStore;
function es() {
  const e = yS(), t = Ol(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Ol(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const CS = (e, t) => {
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
}, Wr = (e) => {
  if (!history.pushState)
    return;
  const t = e instanceof Ko, n = new URLSearchParams(location.search);
  n.set("page", e == null ? void 0 : e.sourceTitle), n.set("from", e == null ? void 0 : e.sourceLanguage), n.set("to", e == null ? void 0 : e.targetLanguage), n.set("sx", !0), t && n.set("draft", !0), n.delete("title"), fn(Object.fromEntries(n));
}, kS = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), fn(Object.fromEntries(n));
}, fn = (e) => {
  history.replaceState(
    {},
    document.title,
    cf("Special:ContentTranslation", e)
  );
}, hm = () => new URLSearchParams(location.search).get("force-quick-tutorial");
class xS {
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
const bS = window.Vuex.useStore, $S = () => {
  const e = bS();
  return () => b(void 0, null, function* () {
    const { sourceLanguage: t, targetLanguage: n } = B(e);
    let o = yield rt.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    const s = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getPublishedTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    o = o.filter(
      (l) => !s.includes(l) && !i.includes(l)
    );
    const c = new xS({
      sourceLanguage: t,
      targetLanguage: n,
      seeds: o
    });
    return e.commit("suggestions/addSuggestionSeedCollection", c), c;
  });
}, VS = window.Vuex.useStore, hc = () => {
  const e = VS(), { sourceLanguage: t, targetLanguage: n } = B(e), o = (i, c) => b(void 0, null, function* () {
    let l = e.getters["suggestions/findSuggestionSeedCollection"](i, c);
    return !l || !l.seeds.length ? (mw.log.error("No suggestion seed found! Suggestion fetching will fail!"), null) : l.shiftSeeds();
  });
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const i = e.getters["suggestions/getNumberOfSectionSuggestionsToFetch"](t.value, n.value);
      let c = 0;
      for (; c < i; ) {
        const d = yield o(
          t.value,
          n.value
        );
        if (!d)
          break;
        const r = yield rt.fetchSectionSuggestions(
          t.value,
          d,
          n.value
        ), u = e.state.suggestions.appendixSectionTitles[n.value] || [];
        r != null && r.isValid(u) && (c++, e.commit("suggestions/addSectionSuggestion", r));
      }
      e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
      const l = e.getters["suggestions/getSectionSuggestionsForPair"](
        t.value,
        n.value
      ).map((d) => d.sourceTitle);
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: t.value,
        titles: l
      });
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const i = yield o(
        t.value,
        n.value
      ), c = e.getters["suggestions/getNumberOfPageSuggestionsToFetch"](t.value, n.value);
      try {
        const l = yield rt.fetchPageSuggestions(
          t.value,
          n.value,
          i,
          c
        );
        l.forEach(
          (r) => e.commit("suggestions/addPageSuggestion", r)
        );
        const d = l.map((r) => r.sourceTitle);
        d.length && e.dispatch("mediawiki/fetchPageMetadata", {
          language: t.value,
          titles: d
        });
      } catch (l) {
        mw.log.error("Page suggestions fetching failed!");
      }
      e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, AS = window.Vuex.useStore, wc = () => {
  const e = AS(), t = $S(), { fetchNextSectionSuggestionsSlice: n, fetchNextPageSuggestionsSlice: o } = hc();
  return () => b(void 0, null, function* () {
    yield t();
    const { targetLanguage: s } = B(e), a = e.getters["application/getSectionSuggestionsSliceByIndex"](0), i = e.getters["application/getPageSuggestionsSliceByIndex"](0), { maxSuggestionsPerSlice: c } = e.state.suggestions, l = a.length === c, d = i.length === c;
    l && d || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      s.value
    ), n(), o());
  });
}, ts = window.Vuex.useStore, ns = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = q.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = le({ sx: !0 }, s), o && (s.section = o), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, os = (e, t, n) => {
  if (e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), !history.pushState)
    return;
  const o = new URLSearchParams(location.search);
  o.set("from", t), o.set("to", n), o.delete("title"), fn(Object.fromEntries(o));
}, wm = () => {
  const e = ts(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = es();
  return () => b(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = CS(
      t.value,
      n.value
    ), a = new URLSearchParams(location.search), i = a.get("page"), c = a.get("section");
    ns(
      o,
      s,
      i,
      c
    ) || os(e, o, s);
  });
}, fm = () => {
  const e = ts(), t = wc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = B(e);
    n === o && (n = a.value, o = s.value), ns(
      n,
      o,
      null,
      null
    ) || (os(e, n, o), t());
  };
}, DS = () => {
  const e = ts(), t = wc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      ns(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (os(e, o, s), t());
    }
  );
}, ES = () => {
  const e = ts();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    ns(
      n,
      o,
      s,
      null
    ) || os(e, n, o);
  };
}, TS = () => {
  const e = ts();
  return (t, n) => b(void 0, null, function* () {
    const { sourceLanguage: o, targetLanguage: s } = B(e);
    t === n && (t = s.value, n = o.value);
    const a = e.getters["application/getCurrentLanguageTitleGroup"], i = a.getTitleForLanguage(t);
    if (!ns(
      t,
      n,
      i,
      null
    )) {
      os(e, t, n);
      let l = new Je({
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
}, LS = function() {
  const e = Sm();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(_m)).forEach((n) => mw.storage.remove(n));
  const t = vm();
  mw.storage.set(t, e + 1);
};
let Xr = null;
function BS(e) {
  if (Xr)
    return Promise.resolve(Xr);
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
function PS(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function FS(e) {
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
  ) : d = BS(i).then((r) => {
    Xr = r, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: PS(r)
      })
    );
  }), d.then(() => {
    LS();
  });
}
const MS = window.Vue.inject, ym = Symbol("event-logging-context"), ct = function() {
  const e = MS(ym);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, NS = () => ({
  install: (e) => {
    e.provide(ym, FS);
  }
}), IS = (e, t, n, o) => b(void 0, null, function* () {
  var c, l, d;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((l = t.mt) == null ? void 0 : l.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, i = yield Ig(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), zS = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, US = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return IS(e, t, n, o);
  zS(e, t);
}), RS = (e, t, n) => {
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
        const l = US(
          i,
          c,
          (t == null ? void 0 : t.title) || e.title,
          t.language
        );
        o.push(l);
      }
  return Promise.all(o);
}, OS = { restoreCorporaDraft: RS }, fc = () => (e, t, n, o = {}) => {
  q.setCXToken(e, t, n), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
};
function HS(e) {
  return e.$el = $(e), e;
}
function jS(e, t, n, o) {
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
function qS() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function GS(e, t) {
  return b(this, null, function* () {
    yield _c(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = HS(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const WS = window.Vue.computed, XS = window.Vue.onMounted, KS = window.Vue.ref;
function YS(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const QS = {
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
    const n = KS(null);
    let o = null;
    const s = WS(() => o.getHtml()), a = () => {
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
    return XS(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = YS;
      const r = yield GS(l, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = jS(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = qS, o.focus();
    })), { sxeditor: n };
  }
}, Kr = window.Vue.createElementVNode, JS = window.Vue.openBlock, ZS = window.Vue.createElementBlock, ey = ["lang", "dir"], ty = /* @__PURE__ */ Kr("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ Kr("div", { class: "toolbar" })
], -1), ny = ["lang", "dir"];
function oy(e, t, n, o, s, a) {
  return JS(), ZS("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    ty,
    Kr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, ny)
  ], 8, ey);
}
const sy = /* @__PURE__ */ E(QS, [["render", oy]]);
function _c() {
  return mw.loader.using("mw.cx3.ve");
}
const ay = window.Vuex.useStore, Cm = () => {
  const e = ay();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield _c(), new Promise((s) => {
      setTimeout(() => {
        const a = Mg.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, iy = window.Vuex.useStore, ss = () => {
  const e = ct(), t = iy(), n = we(), {
    currentSourcePage: o,
    currentTargetPage: s,
    sourceLanguage: a,
    targetLanguage: i
  } = B(t), c = DS(), l = Cm(), { isDesktop: d } = Zo(), r = fc();
  return (u) => b(void 0, null, function* () {
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
    }), yield l(a.value, p), u.restored || (yield Qe.fetchTranslationUnits(u.translationId).then(
      (C) => OS.restoreCorporaDraft(
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
}, ry = window.Vuex.useStore, vc = () => {
  const e = pc(), t = ss(), n = ry(), { sourceLanguage: o, targetLanguage: s } = B(n), a = (u, g) => {
    const m = n.getters["translator/getDraftTranslation"](
      u,
      sc.LEAD_SECTION_DUMMY_TITLE,
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
}, cy = window.Vuex.useStore, ly = () => {
  const e = cy();
  return (t, n, o) => b(void 0, null, function* () {
    const s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o), a = e.getters["suggestions/getSectionSuggestionsForPublishedArticle"](t, n, o);
    let i = s || a;
    return i || (i = yield rt.fetchSectionSuggestions(
      t,
      o,
      n
    ), i || (i = new Je({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o
    })), e.commit("suggestions/addSectionSuggestionForPublished", i)), i;
  });
}, uy = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', dy = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', gy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', my = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', py = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', hy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', wy = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', fy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', _y = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', vy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', Sy = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', yy = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', Cy = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', ky = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', xy = '<path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z"/><path d="m11 1 3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z"/>', by = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', $y = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', Vy = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', Ay = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', Dy = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', Ey = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', Ty = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', Ly = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', Yr = uy, km = dy, xm = {
  ltr: gy,
  shouldFlip: !0
}, By = my, Py = py, Fy = hy, My = wy, Va = fy, Sc = _y, bm = vy, Ny = Sy, Iy = {
  langCodeMap: {
    ar: yy
  },
  default: Cy
}, zy = ky, yc = {
  ltr: xy,
  shouldFlip: !0
}, Uy = by, as = {
  ltr: $y,
  shouldFlip: !0
}, Cc = {
  ltr: Vy,
  shouldFlip: !0
}, Ry = {
  ltr: Ay,
  shouldFlip: !0
}, $m = Dy, Oy = Ey, Hy = Ty, jy = Ly;
const ys = window.Vue.withModifiers, ii = window.Vue.toDisplayString, ri = window.Vue.createElementVNode, Pe = window.Vue.unref, Cs = window.Vue.openBlock, Hl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Et = window.Vue.createVNode, tn = window.Vue.withCtx, jl = window.Vue.createElementBlock, qy = ["lang", "href", "textContent"], Gy = {
  key: 1,
  class: "flex"
}, Wy = { key: 2 }, Xy = window.Vuex.useStore, ql = window.Vue.computed, Gl = window.Vue.ref, ci = window.Codex.CdxButton, li = window.Codex.CdxIcon, Ky = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Lg,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Xy(), o = Gl(!0), s = Gl(null), a = ql(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), i = ql(
      () => a.value && Object.keys(a.value)[0]
    );
    ly()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => s.value = p).catch((p) => console.log(p)).finally(() => o.value = !1);
    const l = we();
    Zo();
    const d = () => {
      n.dispatch("application/initializeSectionTranslation", s.value), l.push({ name: "sx-section-selector", query: { force: !0 } });
    }, r = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: u } = vc();
    B(n);
    const g = ES(), m = () => {
      g(t.translation), u(t.translation);
    };
    return (p, h) => (Cs(), Hl(pm, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: r
    }, {
      title: tn(() => [
        ri("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: h[0] || (h[0] = ys(() => {
          }, ["stop"])),
          textContent: ii(e.translation.sourceTitle)
        }, null, 8, qy)
      ]),
      "mid-content": tn(() => [
        Et(Pe(L), { class: "ma-0" }, {
          default: tn(() => [
            Et(Pe(y), null, {
              default: tn(() => [
                o.value ? (Cs(), Hl(Pe(Ye), { key: 0 })) : a.value ? (Cs(), jl("div", Gy, [
                  Et(Pe(ci), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: ys(d, ["stop"])
                  }, {
                    default: tn(() => [
                      Et(Pe(li), {
                        class: "me-1",
                        icon: Pe(Yr)
                      }, null, 8, ["icon"]),
                      ri("span", null, ii(i.value), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  Et(Pe(ci), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    onClick: ys(d, ["stop"])
                  }, {
                    default: tn(() => [
                      Et(Pe(li), { icon: Pe(bm) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : (Cs(), jl("div", Wy, [
                  Et(Pe(ci), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: ys(m, ["stop"])
                  }, {
                    default: tn(() => [
                      Et(Pe(li), {
                        class: "me-1",
                        icon: Pe(Yr)
                      }, null, 8, ["icon"]),
                      ri("span", null, ii(p.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Wl = window.Vuex.useStore, Yy = () => {
  const e = Wl(), { commit: t } = Wl(), { sourceLanguage: n, targetLanguage: o } = B(e), s = ct();
  return (a) => b(void 0, null, function* () {
    a.sectionTranslationId ? (yield Qe.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield Qe.deleteCXTranslation(
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
const Qy = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: Ce,
    MwDialog: Ze
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ko,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = Yy();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, Jy = window.Vue.resolveDirective, ui = window.Vue.createElementVNode, Zy = window.Vue.withDirectives, Xl = window.Vue.resolveComponent, Kl = window.Vue.createVNode, Yl = window.Vue.withCtx, eC = window.Vue.openBlock, tC = window.Vue.createBlock, nC = { class: "pa-4" }, oC = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function sC(e, t, n, o, s, a) {
  const i = Xl("mw-button"), c = Xl("mw-dialog"), l = Jy("i18n");
  return eC(), tC(c, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: Yl(() => [
      ui("div", oC, [
        Kl(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        Kl(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: Yl(() => [
      ui("div", nC, [
        Zy(ui("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const aC = /* @__PURE__ */ E(Qy, [["render", sC]]);
const iC = window.Vue.resolveDirective, nn = window.Vue.createElementVNode, ks = window.Vue.withDirectives, rC = window.Vue.toDisplayString, cC = window.Vue.createTextVNode, di = window.Vue.unref, gi = window.Vue.withCtx, mi = window.Vue.openBlock, pi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const lC = { class: "pa-4" }, uC = { class: "flex pt-2" }, dC = window.Codex.CdxButton, gC = window.Vue.ref, mC = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: ac,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = ss(), i = gC(!1), c = () => b(this, null, function* () {
      i.value = !0;
      let l = !1;
      try {
        l = yield Qe.splitTranslation(
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
      const r = iC("i18n");
      return mi(), pi(di(Ze), {
        value: e.modelValue,
        persistent: i.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": l.$mwui.colors.gray700,
        "min-height": "unset",
        title: l.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: gi(() => [
          nn("div", uC, [
            i.value ? (mi(), pi(di(Ye), { key: 1 })) : (mi(), pi(di(dC), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: gi(() => [
                cC(rC(l.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: gi(() => [
          nn("div", lC, [
            ks(nn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ks(nn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            nn("p", null, [
              ks(nn("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ks(nn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
function pC(e, t, n) {
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
        O.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        O.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield hC(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function Ql(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield pC(e, t, n)).sort(O.sortByAutonym);
  });
}
function hC(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function wC() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function fC(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function _C(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const vC = window.Vue.computed;
function SC(e, t) {
  const n = vC(() => {
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
const hi = window.Vue.ref, Jl = window.Vue.watch, yC = window.Vue.computed;
function CC(e, t, n) {
  const o = hi(""), s = hi(-1), a = hi(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = yC(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Jl(e, () => {
    s.value = -1;
  }), Jl(s, () => b(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
const wi = window.Vue.ref, kC = window.Vue.watch, xC = window.Vue.onMounted, Zl = window.Vue.computed, bC = {
  name: "MwLanguageSelector",
  components: {
    MwInput: nc
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
      default: wC
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = wi(null), o = wi(""), s = wi([]), a = Zl(
      () => fC(s.value)
    ), i = Zl(
      () => _C(s.value)
    ), c = (f) => t.emit("select", f), l = () => t.emit("close"), { autocompletion: d, onTabSelect: r } = SC(
      o,
      s
    ), { next: u, prev: g, langSelectorContainer: m, selectedLanguage: p } = CC(o, s, e.suggestions), h = () => {
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
    return kC(o, lc(() => b(this, null, function* () {
      s.value = yield Ql(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), xC(() => b(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Ql(
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
      mwIconClose: wn,
      mwIconSearch: Sg,
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
}, xs = window.Vue.renderSlot, $C = window.Vue.resolveComponent, eu = window.Vue.createVNode, to = window.Vue.withModifiers, no = window.Vue.withKeys, Tt = window.Vue.createElementVNode, VC = window.Vue.resolveDirective, bs = window.Vue.withDirectives, fi = window.Vue.renderList, _i = window.Vue.Fragment, mt = window.Vue.openBlock, pt = window.Vue.createElementBlock, tu = window.Vue.toDisplayString, $s = window.Vue.normalizeClass, vi = window.Vue.createCommentVNode, AC = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, DC = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, EC = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, TC = { class: "results px-3 pt-4" }, LC = { class: "results-header ps-8 pb-2" }, BC = { class: "results-languages--suggestions pa-0 ma-0" }, PC = ["lang", "dir", "aria-selected", "onClick", "textContent"], FC = { class: "results px-3 pt-4" }, MC = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, NC = ["lang", "dir", "aria-selected", "onClick", "textContent"], IC = ["aria-selected"], zC = { class: "no-results px-3 py-4" }, UC = { class: "ps-8" };
function RC(e, t, n, o, s, a) {
  const i = $C("mw-input"), c = VC("i18n");
  return mt(), pt("div", AC, [
    xs(e.$slots, "search", {}, () => [
      Tt("div", DC, [
        eu(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (l) => o.autocompletion = l),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        eu(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (l) => o.searchQuery = l),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            no(to(o.onEnter, ["prevent"]), ["enter"]),
            no(to(o.next, ["stop", "prevent"]), ["down"]),
            no(to(o.prev, ["stop", "prevent"]), ["up"]),
            no(to(o.close, ["prevent"]), ["esc"]),
            no(to(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    Tt("section", EC, [
      n.suggestions.length && !o.searchQuery ? xs(e.$slots, "suggestions", { key: 0 }, () => [
        Tt("section", TC, [
          bs(Tt("p", LC, null, 512), [
            [c, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          Tt("ul", BC, [
            (mt(!0), pt(_i, null, fi(n.suggestions, (l) => (mt(), pt("li", {
              key: l,
              class: $s(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(l),
              textContent: tu(o.getAutonym(l))
            }, null, 10, PC))), 128))
          ])
        ])
      ]) : vi("", !0),
      o.searchResultsByScript.length ? xs(e.$slots, "search", { key: 1 }, () => [
        Tt("section", FC, [
          n.suggestions.length && !o.searchQuery ? bs((mt(), pt("p", MC, null, 512)), [
            [c, void 0, "cx-sx-language-selector-all-languages"]
          ]) : vi("", !0),
          (mt(!0), pt(_i, null, fi(o.searchResultsByScript, (l, d) => (mt(), pt("ul", {
            key: d,
            class: $s(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (mt(!0), pt(_i, null, fi(l, (r) => (mt(), pt("li", {
              key: r,
              class: $s(["language pa-2 ps-8 ma-0", r === o.selectedLanguage ? "language--selected" : ""]),
              lang: r,
              dir: o.getDir(r),
              role: "option",
              "aria-selected": r === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(r),
              textContent: tu(o.getAutonym(r))
            }, null, 10, NC))), 128)),
            n.allOptionEnabled && !o.searchQuery ? bs((mt(), pt("li", {
              key: 0,
              class: $s(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (r) => o.select("all"))
            }, null, 10, IC)), [
              [c, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : vi("", !0)
          ], 2))), 128))
        ])
      ]) : xs(e.$slots, "noresults", { key: 2 }, () => [
        Tt("section", zC, [
          bs(Tt("h3", UC, null, 512), [
            [c, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Vm = /* @__PURE__ */ E(bC, [["render", RC]]);
const ue = window.Vue.unref, OC = window.Vue.resolveDirective, nu = window.Vue.withDirectives, oo = window.Vue.openBlock, so = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ou = window.Vue.toDisplayString, su = window.Vue.withModifiers, on = window.Vue.withCtx, ht = window.Vue.createVNode, HC = { class: "sx-translation-list-language-selector" }, jC = {
  key: 0,
  class: "mw-ui-autonym"
}, qC = ["lang", "dir", "textContent"], GC = {
  key: 0,
  class: "mw-ui-autonym"
}, WC = ["lang", "dir", "textContent"], ao = window.Vue.computed, XC = window.Vue.inject, KC = window.Vue.ref, kc = {
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
    const n = e, o = t, s = XC("breakpoints"), a = ao(() => s.value.mobile), i = KC(null), c = ao(() => !!i.value), l = () => i.value = "source", d = () => i.value = "target", r = () => i.value = null, u = ao(() => {
      if (!c.value)
        return;
      const w = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[w];
    }), g = (h) => {
      const f = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(f, h);
    }, m = ao(
      () => n.selectedSourceLanguage === "all"
    ), p = ao(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const f = OC("i18n");
      return oo(), so("div", HC, [
        ht(ue(L), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: on(() => [
            ht(ue(y), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: on(() => [
                ht(ue(Ce), {
                  indicator: ue(zr),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: su(l, ["stop"])
                }, {
                  default: on(() => [
                    m.value ? nu((oo(), so("span", jC, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (oo(), so("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: ue(O.getDir)(e.selectedSourceLanguage),
                      textContent: ou(ue(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, qC))
                  ]),
                  _: 1
                }, 8, ["indicator", "onClick"])
              ]),
              _: 1
            }),
            ht(ue(y), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: on(() => [
                ht(ue(he), { icon: ue(Zr) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            ht(ue(y), { cols: "5" }, {
              default: on(() => [
                ht(ue(Ce), {
                  indicator: ue(zr),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: su(d, ["stop"])
                }, {
                  default: on(() => [
                    p.value ? nu((oo(), so("span", GC, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (oo(), so("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: ue(O.getDir)(e.selectedTargetLanguage),
                      textContent: ou(ue(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, WC))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ht(ue(Ze), {
          value: c.value,
          "onUpdate:value": w[0] || (w[0] = (v) => c.value = v),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: r
        }, {
          default: on(() => [
            ht(ue(Vm), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: u.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: g,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ]);
    };
  }
}, YC = window.Vue.toDisplayString, QC = window.Vue.createElementVNode, Si = window.Vue.createVNode, au = window.Vue.unref, Lt = window.Vue.openBlock, Vs = window.Vue.createBlock, iu = window.Vue.createCommentVNode, ru = window.Vue.renderList, cu = window.Vue.Fragment, As = window.Vue.createElementBlock, JC = window.Vue.normalizeClass, lu = window.Vue.withCtx, ZC = ["textContent"], ek = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, tk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Cn = window.Vue.ref, wt = window.Vue.computed, nk = window.Vuex.useStore, uu = {
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
    const t = e, n = Cn("all"), o = Cn("all"), s = nk(), a = wt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = es(), c = Cn(!1), l = Cn(!1), d = Cn(null), r = Cn(null), u = wt(
      () => t.translationStatus === "draft"
    ), g = wt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), m = wt(
      () => n.value === "all"
    ), p = wt(
      () => o.value === "all"
    ), h = wt(
      () => g.value.filter(
        (D) => (m.value || D.sourceLanguage === n.value) && (p.value || D.targetLanguage === o.value)
      ).sort((D, I) => D.lastUpdatedTimestamp < I.lastUpdatedTimestamp)
    ), w = wt(() => {
      let D = g.value.map(
        (I) => I.targetLanguage
      );
      return i.value && (D = D.filter(
        (I) => i.value.includes(I)
      )), [...new Set(D)];
    }), f = wt(() => {
      const D = g.value.map(
        (I) => I.sourceLanguage
      );
      return [...new Set(D)];
    }), v = (D) => {
      d.value = D, c.value = !0;
    }, C = wt(() => t.activeStatus === t.translationStatus), A = ss(), P = (D) => {
      D.isArticleTranslation ? (r.value = D, l.value = !0) : A(D);
    };
    return (D, I) => C.value ? (Lt(), Vs(au(ze), {
      key: 0,
      class: JC(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: lu(() => [
        QC("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: YC(D.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, ZC)
      ]),
      default: lu(() => [
        Si(kc, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": I[0] || (I[0] = (V) => n.value = V),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": I[1] || (I[1] = (V) => o.value = V),
          "source-languages": f.value,
          "target-languages": w.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? iu("", !0) : (Lt(), Vs(au(Ye), { key: 0 })),
        u.value ? (Lt(), As("div", ek, [
          (Lt(!0), As(cu, null, ru(h.value, (V) => (Lt(), Vs(fS, {
            key: `${e.translationStatus}-${V.key}`,
            translation: V,
            onClick: (F) => P(V),
            onDeleteTranslation: (F) => v(V)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (Lt(), As("div", tk, [
          (Lt(!0), As(cu, null, ru(h.value, (V) => (Lt(), Vs(Ky, {
            key: `${e.translationStatus}-${V.key}`,
            translation: V,
            onDeleteTranslation: (F) => v(V)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Si(aC, {
          modelValue: c.value,
          "onUpdate:modelValue": I[2] || (I[2] = (V) => c.value = V),
          translation: d.value
        }, null, 8, ["modelValue", "translation"]),
        Si(mC, {
          modelValue: l.value,
          "onUpdate:modelValue": I[3] || (I[3] = (V) => l.value = V),
          translation: r.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : iu("", !0);
  }
};
const ft = window.Vue.computed, ok = window.Vue.inject, sk = window.Vuex.useStore, ak = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: oc, MwIcon: he, MwRow: L, MwCol: y },
  props: {
    suggestion: {
      type: [rc, Je, Ho],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = sk(), n = ft(() => e.suggestion), o = ft(
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
      () => n.value instanceof Je
    ), l = ft(
      () => n.value instanceof Ho
    ), { sourceLanguageAutonym: d, targetLanguageAutonym: r } = B(t), u = ft(
      () => l.value ? Fh : Ph
    ), g = ok("colors"), m = ft(
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
      mwIconArrowNext: Zr,
      mwIconClose: wn,
      page: s,
      sourceLanguageAutonym: d,
      targetLanguageAutonym: r,
      title: o
    };
  }
}, Ds = window.Vue.resolveComponent, be = window.Vue.createVNode, Bt = window.Vue.createElementVNode, Es = window.Vue.toDisplayString, $e = window.Vue.withCtx, du = window.Vue.withModifiers, io = window.Vue.openBlock, Ts = window.Vue.createBlock, Ls = window.Vue.createCommentVNode, ik = window.Vue.resolveDirective, gu = window.Vue.withDirectives, rk = window.Vue.createElementBlock, ck = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, lk = { class: "col shrink pe-4" }, uk = { class: "col cx-suggestion__information-panel" }, dk = ["lang", "dir", "textContent"], gk = ["lang", "dir", "textContent"], mk = ["textContent"], pk = ["textContent"];
function hk(e, t, n, o, s, a) {
  const i = Ds("mw-thumbnail"), c = Ds("mw-col"), l = Ds("mw-row"), d = Ds("mw-icon"), r = ik("i18n");
  return n.suggestion ? (io(), rk("div", ck, [
    Bt("div", lk, [
      be(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    Bt("div", uk, [
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
                              Bt("h5", {
                                class: "my-0 cx-suggestion__source-title",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: Es(o.title)
                              }, null, 8, dk)
                            ]),
                            _: 1
                          }),
                          be(c, { shrink: "" }, {
                            default: $e(() => [
                              Bt("p", {
                                class: "ma-0 cx-suggestion__source-description complementary",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: Es(o.description)
                              }, null, 8, gk)
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
                      o.isFavoriteSuggestion ? Ls("", !0) : (io(), Ts(d, {
                        key: 0,
                        icon: o.mwIconClose,
                        size: "24",
                        class: "cx-suggestion__discard-button mb-4",
                        onClick: t[0] || (t[0] = du((u) => e.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])),
                      be(d, {
                        class: "cx-suggestion__favorite-button",
                        icon: o.bookmarkIcon,
                        size: "24",
                        "icon-color": o.bookmarkIconColor,
                        onClick: t[1] || (t[1] = du((u) => e.$emit("bookmark"), ["stop"]))
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
          o.isSectionSuggestion ? (io(), Ts(c, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: $e(() => [
              gu(Bt("small", null, null, 512), [
                [r, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ]),
            _: 1
          })) : o.isFavoriteSuggestion ? (io(), Ts(c, {
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
                      Bt("small", {
                        textContent: Es(o.sourceLanguageAutonym)
                      }, null, 8, mk),
                      be(d, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      Bt("small", {
                        textContent: Es(o.targetLanguageAutonym)
                      }, null, 8, pk)
                    ]),
                    _: 1
                  }),
                  o.missingSectionsCount ? (io(), Ts(c, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: $e(() => [
                      gu(Bt("small", null, null, 512), [
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
const Qr = /* @__PURE__ */ E(ak, [["render", hk]]), wk = window.Vue.computed, fk = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = es(), n = wk(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, ro = window.Vue.computed, mu = window.Vue.ref, _k = window.Vuex.useStore, vk = () => {
  const e = _k(), { sourceLanguage: t, targetLanguage: n } = B(e), o = ct(), s = ro(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = ro(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = ro(
    () => !s.value && !a.value
  ), c = mu(0), l = mu(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, r = 4, u = ro(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      c.value
    )
  ), g = ro(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), m = () => {
    w(), f();
  }, {
    fetchNextSectionSuggestionsSlice: p,
    fetchNextPageSuggestionsSlice: h
  } = hc(), w = () => {
    const D = u.value.length === d, I = (c.value + 1) % r, V = D && e.getters["application/getSectionSuggestionsSliceByIndex"](I).length > 0;
    (!D || !V) && p(), D && A();
  }, f = () => {
    const D = g.value.length === d, I = (l.value + 1) % r, V = D && e.getters["application/getPageSuggestionsSliceByIndex"](I).length > 0;
    (!D || !V) && h(), D && P();
  }, v = (D) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestion", D), w();
  }, C = (D) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", D), f();
  }, A = () => c.value = (c.value + 1) % r, P = () => l.value = (l.value + 1) % r;
  return {
    currentPageSuggestionsSlice: g,
    currentSectionSuggestionsSlice: u,
    discardPageSuggestion: C,
    discardSectionSuggestion: v,
    onSuggestionRefresh: m,
    pageSuggestionsLoading: a,
    sectionSuggestionsLoading: s,
    showRefreshButton: i
  };
}, Sk = window.Vuex.useStore, xc = () => {
  const e = Sk(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = hc(), o = (c) => b(void 0, null, function* () {
    yield rt.markFavorite(c);
    const { sourceTitle: l, sourceLanguage: d, targetLanguage: r } = c, u = new Ho({
      title: l,
      sourceLanguage: d,
      targetLanguage: r
    });
    e.commit("suggestions/addFavoriteSuggestion", u);
  });
  return {
    markFavoritePageSuggestion: (c) => {
      e.commit("suggestions/removePageSuggestion", c), n(), o(c);
    },
    markFavoriteSectionSuggestion: (c) => {
      e.commit("suggestions/removeSectionSuggestion", c), t(), o(c);
    },
    removeFavoriteSuggestion: (c) => (e.commit("suggestions/removeFavoriteSuggestion", c), rt.unmarkFavorite(c))
  };
};
const pu = window.Vue.toDisplayString, Bs = window.Vue.createElementVNode, J = window.Vue.unref, co = window.Vue.createVNode, lo = window.Vue.withCtx, yk = window.Vue.resolveDirective, yi = window.Vue.withDirectives, hu = window.Vue.renderList, wu = window.Vue.Fragment, Pt = window.Vue.openBlock, Ci = window.Vue.createElementBlock, uo = window.Vue.createBlock, ki = window.Vue.createCommentVNode, Ck = window.Vue.createTextVNode, kk = window.Vue.vShow, xk = ["textContent"], bk = { class: "cx-translation-list__division-title ma-0 pa-4" }, $k = { class: "cx-translation-list__division-title ma-0 pa-4" }, Vk = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Ak = window.Vuex.useStore, Dk = window.Vue.ref, Ek = window.Codex.CdxButton, Tk = window.Codex.CdxIcon, Lk = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Ak(), { sourceLanguage: n, targetLanguage: o } = B(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = fk(), i = fm(), c = (F) => i(F, o.value), l = (F) => i(n.value, F), d = pc(), r = (F) => d(F.sourceTitle, "suggestion_no_seed"), { startPageSuggestion: u } = vc(), {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: v,
      showRefreshButton: C
    } = vk(), A = Dk(null), P = ct(), D = () => {
      P({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), A.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: I, markFavoritePageSuggestion: V } = xc();
    return (F, Le) => {
      const fe = yk("i18n");
      return yi((Pt(), Ci("div", null, [
        co(J(ze), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: lo(() => [
            Bs("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: pu(F.$i18n("cx-suggestionlist-title"))
            }, null, 8, xk)
          ]),
          default: lo(() => [
            co(kc, {
              "source-languages": J(s),
              "target-languages": J(a),
              "selected-source-language": J(n),
              "selected-target-language": J(o),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        co(J(ze), {
          ref_key: "pageSuggestionsList",
          ref: A,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: lo(() => [
            yi(Bs("h5", bk, null, 512), [
              [fe, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Pt(!0), Ci(wu, null, hu(J(g), (H, Y) => (Pt(), uo(Qr, {
              key: `page-suggestion-${Y}`,
              suggestion: H,
              onClose: (oe) => J(p)(H),
              onClick: (oe) => J(u)(H),
              onBookmark: (oe) => J(V)(H)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            J(f) ? (Pt(), uo(J(Ye), { key: 0 })) : ki("", !0)
          ]),
          _: 1
        }, 512),
        co(J(ze), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: lo(() => [
            yi(Bs("h5", $k, null, 512), [
              [fe, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Pt(!0), Ci(wu, null, hu(J(m), (H, Y) => (Pt(), uo(Qr, {
              key: `section-suggestion-${Y}`,
              class: "ma-0",
              suggestion: H,
              onClose: (oe) => J(h)(H),
              onClick: (oe) => r(H),
              onBookmark: (oe) => J(I)(H)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            J(v) ? (Pt(), uo(J(Ye), { key: 0 })) : ki("", !0)
          ]),
          _: 1
        }),
        Bs("div", Vk, [
          J(C) ? (Pt(), uo(J(Ek), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: D
          }, {
            default: lo(() => [
              co(J(Tk), {
                class: "me-1",
                icon: J($m)
              }, null, 8, ["icon"]),
              Ck(" " + pu(F.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : ki("", !0)
        ])
      ], 512)), [
        [kk, e.active]
      ]);
    };
  }
}, Bk = window.Vue.computed, Pk = window.Vuex.useStore, Fk = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Qr,
    MwCard: ze
  },
  setup() {
    const e = we(), t = Pk(), n = Bk(() => t.state.suggestions.favorites || []), o = (a) => b(this, null, function* () {
      yield t.dispatch(
        "application/startFavoriteSectionTranslation",
        a
      ), e.push({ name: "sx-translation-confirmer" });
    }), { removeFavoriteSuggestion: s } = xc();
    return {
      favorites: n,
      startFavoriteTranslation: o,
      removeFavoriteSuggestion: s
    };
  }
}, Mk = window.Vue.resolveDirective, Nk = window.Vue.createElementVNode, Ik = window.Vue.withDirectives, zk = window.Vue.renderList, Uk = window.Vue.Fragment, xi = window.Vue.openBlock, Rk = window.Vue.createElementBlock, fu = window.Vue.resolveComponent, _u = window.Vue.createBlock, vu = window.Vue.withCtx, Ok = window.Vue.createCommentVNode, Hk = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function jk(e, t, n, o, s, a) {
  const i = fu("cx-translation-suggestion"), c = fu("mw-card"), l = Mk("i18n");
  return o.favorites.length ? (xi(), _u(c, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: vu(() => [
      Ik(Nk("h3", Hk, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: vu(() => [
      (xi(!0), Rk(Uk, null, zk(o.favorites, (d, r) => (xi(), _u(i, {
        key: `favorite-${r}`,
        suggestion: d,
        onClick: (u) => o.startFavoriteTranslation(d),
        onBookmark: (u) => o.removeFavoriteSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : Ok("", !0);
}
const qk = /* @__PURE__ */ E(Fk, [["render", jk]]);
const Gk = {
  name: "CxHelpPanel",
  components: { MwIcon: he },
  setup() {
    const e = Te();
    return { listItems: [
      {
        icon: qh,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Vh,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Gh,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, Wk = window.Vue.resolveDirective, Ps = window.Vue.createElementVNode, Xk = window.Vue.withDirectives, Kk = window.Vue.renderList, Yk = window.Vue.Fragment, bi = window.Vue.openBlock, $i = window.Vue.createElementBlock, Qk = window.Vue.resolveComponent, Jk = window.Vue.createVNode, Zk = window.Vue.toDisplayString, ex = { class: "cx-help-panel pa-4" }, tx = { class: "cx-help-panel__item-list mt-6 ps-2" }, nx = ["href"], ox = ["textContent"];
function sx(e, t, n, o, s, a) {
  const i = Qk("mw-icon"), c = Wk("i18n");
  return bi(), $i("div", ex, [
    Xk(Ps("h5", null, null, 512), [
      [c, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    Ps("ul", tx, [
      (bi(!0), $i(Yk, null, Kk(o.listItems, (l, d) => (bi(), $i("li", {
        key: d,
        class: "mt-4"
      }, [
        Ps("a", {
          href: l.href,
          target: "_blank"
        }, [
          Jk(i, {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Ps("span", {
            textContent: Zk(l.label)
          }, null, 8, ox)
        ], 8, nx)
      ]))), 128))
    ])
  ]);
}
const ax = /* @__PURE__ */ E(Gk, [["render", sx]]);
const ix = window.Vue.ref, Su = window.Vue.computed, rx = window.Vue.watch, cx = {
  name: "CxStatsPanel",
  components: { MwCol: y, MwRow: L },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = Su(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = Su(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = ix(null);
    return rx(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), c = Object.keys(e.stats || {}).sort(), l = c.reduce(
          (C, A) => Math.max(C, a[A].delta),
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
        v.forEach((C, A) => {
          A === v.length - 1 && (i.fillStyle = "#36c");
          const P = p - C * h;
          i.fillRect(w, P, m, C * h), w += m + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, lx = window.Vue.resolveDirective, kn = window.Vue.createElementVNode, Vi = window.Vue.withDirectives, yu = window.Vue.toDisplayString, Cu = window.Vue.resolveComponent, Ai = window.Vue.withCtx, Di = window.Vue.createVNode, ux = window.Vue.openBlock, dx = window.Vue.createElementBlock, gx = { class: "cx-stats-panel pa-4" }, mx = ["textContent"], px = { class: "cx-stats-panel__monthly-stats-label" }, hx = ["textContent"], wx = { class: "cx-stats-panel__total-stats-label" }, fx = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function _x(e, t, n, o, s, a) {
  const i = Cu("mw-col"), c = Cu("mw-row"), l = lx("i18n");
  return ux(), dx("div", gx, [
    Vi(kn("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    Di(c, null, {
      default: Ai(() => [
        Di(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: Ai(() => [
            kn("h3", {
              textContent: yu(o.thisMonthStats)
            }, null, 8, mx),
            Vi(kn("h5", px, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        Di(i, { class: "cx-stats-panel__total-stats" }, {
          default: Ai(() => [
            kn("h3", {
              textContent: yu(o.total)
            }, null, 8, hx),
            Vi(kn("h5", wx, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    kn("canvas", fx, null, 512)
  ]);
}
const vx = /* @__PURE__ */ E(cx, [["render", _x]]);
const Sx = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: y, MwRow: L, MwCard: ze, MwIcon: he },
  data: () => ({
    mwIconLabFlask: Cg,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, Fs = window.Vue.resolveComponent, Ms = window.Vue.createVNode, Ns = window.Vue.withCtx, yx = window.Vue.resolveDirective, xn = window.Vue.createElementVNode, Is = window.Vue.withDirectives, Cx = window.Vue.openBlock, kx = window.Vue.createBlock, xx = { class: "complementary" }, bx = { class: "complementary mt-4" }, $x = ["href"], Vx = { class: "complementary" }, Ax = ["href"];
function Dx(e, t, n, o, s, a) {
  const i = Fs("mw-icon"), c = Fs("mw-col"), l = Fs("mw-row"), d = Fs("mw-card"), r = yx("i18n");
  return Cx(), kx(d, { class: "experimental-support-banner mb-1" }, {
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
              Is(xn("p", xx, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              xn("p", bx, [
                Is(xn("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, $x), [
                  [r, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              xn("p", Vx, [
                Is(xn("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, Ax), [
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
const Ex = /* @__PURE__ */ E(Sx, [["render", Dx]]), Tx = window.Vuex.useStore, Aa = () => {
  const e = Tx(), t = (o) => b(void 0, null, function* () {
    let s = yield Qe.fetchTranslations(o);
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
          new Gn({ title: r, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, Lx = window.Vuex.useStore, Am = () => {
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
}, Bx = () => {
  const e = Lx(), t = pc(), n = ct(), o = ss(), { fetchAllTranslations: s } = Aa();
  return (l) => b(void 0, [l], function* ({ pageTitle: a, isDraftTranslation: i, sectionTitle: c }) {
    const d = Am() || "direct_preselect", { sourceLanguage: r, targetLanguage: u } = B(e);
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
}, Px = window.Vuex.useStore, Fx = () => {
  const e = Px();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield rt.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), rt.fetchSectionSuggestions(
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
}, Mx = window.Vuex.useStore, Nx = () => {
  const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
  if (!t || !n)
    return null;
  const o = e.get("section"), s = !!e.get("draft");
  return { pageTitle: n, isDraftTranslation: s, sectionTitle: o };
}, Ix = () => {
  const e = ct(), t = Mx(), n = Bx(), { fetchAllTranslations: o } = Aa(), s = wc(), a = Fx();
  return () => b(void 0, null, function* () {
    yield wm()();
    const c = Nx();
    if (c) {
      n(c);
      return;
    }
    const { sourceLanguage: l, targetLanguage: d, previousRoute: r } = B(t);
    e({
      event_type: "dashboard_open",
      event_source: (() => {
        const m = {
          "sx-article-search": "return_from_search",
          "sx-translation-confirmer": "return_from_confirmation",
          "sx-section-selector": "return_from_section_selection",
          "sx-sentence-selector": "editor_close"
        }[r.value];
        return m || Am() || "direct";
      })(),
      translation_source_language: l.value,
      translation_target_language: d.value
    });
    try {
      yield a();
    } catch (g) {
      mw.log.error("[CX] Error while fetching favorite suggestions", g);
    }
    yield o(), s();
  });
}, ku = window.Vue.computed, zx = window.Vue.ref, Ux = window.Vue.watch, Rx = window.Vue.watchEffect, Ox = window.Vuex.useStore, Hx = ["suggestions", "draft", "published"], jx = () => {
  const e = Ox(), n = new URLSearchParams(location.search).get("active-list"), o = zx(null);
  if (Hx.includes(n))
    o.value = n;
  else {
    const s = ku(
      () => e.state.translator.translationsLoaded.draft
    ), a = ku(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", Ux(s, (i) => {
      i && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return Rx(() => {
    kS("active-list", o.value), window.scrollTo(0, 0);
  }), o;
}, qx = window.Vue.computed, Gx = () => {
  const e = Te();
  return qx(() => [
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
const zs = window.Vue.openBlock, Ei = window.Vue.createBlock, Ti = window.Vue.createCommentVNode, ne = window.Vue.unref, de = window.Vue.createVNode, Wx = window.Vue.toDisplayString, Xx = window.Vue.createTextVNode, _t = window.Vue.withCtx, Kx = window.Vue.isRef, Yx = window.Vue.createElementBlock, Qx = window.Vue.computed, Jx = window.Vuex.useStore, Zx = window.Codex.CdxButton, e8 = window.Codex.CdxIcon, t8 = {
  __name: "CXDashboard",
  setup(e) {
    const t = we(), n = () => t.push({ name: "sx-article-search" });
    Ix()();
    const s = Jx();
    s.dispatch("translator/fetchTranslatorStats");
    const a = Qx(() => s.state.translator.translatorStats), i = jx(), c = Gx();
    return (l, d) => (zs(), Yx("div", null, [
      l.$incompleteVersion ? (zs(), Ei(Ex, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : Ti("", !0),
      de(ne(L), { class: "ma-0 py-4" }, {
        default: _t(() => [
          de(ne(Zx), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-desktop-3 col-offset-desktop-2 col-offset-tablet-3 col-mobile-12",
            onClick: n
          }, {
            default: _t(() => [
              de(ne(e8), {
                class: "me-1",
                icon: ne(Yr)
              }, null, 8, ["icon"]),
              Xx(" " + Wx(l.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      de(ne(L), {
        class: "ma-0",
        align: "start"
      }, {
        default: _t(() => [
          l.$mwui.breakpoint.tabletAndUp ? (zs(), Ei(ne(y), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _t(() => [
              de(ne(Wo), {
                id: "dashboard-list-selector--desktop",
                items: ne(c),
                active: ne(i),
                onSelect: d[0] || (d[0] = (r) => i.value = r)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Ti("", !0),
          de(ne(y), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _t(() => [
              de(qk),
              de(Lk, {
                active: ne(i) === "suggestions"
              }, null, 8, ["active"]),
              de(uu, {
                "translation-status": "draft",
                "active-status": ne(i)
              }, null, 8, ["active-status"]),
              de(uu, {
                "translation-status": "published",
                "active-status": ne(i)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          de(ne(y), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: _t(() => [
              de(ne(L), {
                class: "ma-0",
                align: "start"
              }, {
                default: _t(() => [
                  de(ne(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: _t(() => [
                      de(vx, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  de(ne(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: _t(() => [
                      de(ax)
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
      l.$mwui.breakpoint.mobile ? (zs(), Ei(ne(Rp), {
        key: 1,
        active: ne(i),
        "onUpdate:active": d[1] || (d[1] = (r) => Kx(i) ? i.value = r : null),
        items: ne(c)
      }, null, 8, ["active", "items"])) : Ti("", !0)
    ]));
  }
}, n8 = {
  name: "DashboardView",
  components: { CxDashboard: t8 }
}, o8 = window.Vue.resolveComponent, s8 = window.Vue.createVNode, a8 = window.Vue.openBlock, i8 = window.Vue.createElementBlock, r8 = { class: "cx-translation-dashboard" };
function c8(e, t, n, o, s, a) {
  const i = o8("cx-dashboard");
  return a8(), i8("main", r8, [
    s8(i, { class: "mb-4 pb-12" })
  ]);
}
const xu = /* @__PURE__ */ E(n8, [["render", c8]]), sn = window.Vue.computed, l8 = (e) => {
  const t = sn(
    () => {
      var d, r;
      return (r = (d = e.value.orderedMissingSections) == null ? void 0 : d[0]) == null ? void 0 : r.sourceTitle;
    }
  ), n = sn(
    () => e.value.missingSectionsCount
  ), o = sn(
    () => e.value.presentSectionsCount
  ), s = sn(
    () => {
      var d;
      return !!((d = e.value) != null && d.targetTitle);
    }
  ), a = sn(
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
  }, c = sn(() => {
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
  }), l = sn(
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
}, u8 = window.Vuex.useStore, bc = () => {
  const e = u8(), { currentSectionSuggestion: t, currentSourcePage: n } = B(e), o = Cm(), s = (c, l) => b(void 0, null, function* () {
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
}, d8 = window.Vue.computed, g8 = window.Vue.ref, m8 = window.Vuex.useStore, p8 = () => {
  const e = we(), t = m8(), { isDesktop: n } = Zo(), o = new URLSearchParams(location.search), s = g8(o.get("section")), {
    currentSourceSection: a,
    currentSectionSuggestion: i,
    sourceLanguage: c,
    targetLanguage: l
  } = B(t), d = d8(
    () => {
      var f;
      return !!((f = i.value) != null && f.targetTitle);
    }
  ), r = () => {
    s.value = null, o.delete("section"), fn(Object.fromEntries(o));
  }, { selectPageSectionByIndex: u, selectPageSectionByTitle: g } = bc(), m = fc(), p = () => b(void 0, null, function* () {
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
    s.value ? p() : d.value ? e.push({ name: "sx-section-selector" }) : w(), Wr(i.value);
  }, w = () => b(void 0, null, function* () {
    var f;
    if (n.value) {
      const v = (f = i.value) == null ? void 0 : f.sourceTitle;
      m(c.value, l.value, v);
    } else
      u(0), hm() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }), Wr(i.value);
  });
  return {
    clearPreFilledSection: r,
    startNewTranslation: w,
    onSectionSelectorClick: h,
    preFilledSectionTitle: s
  };
};
const G = window.Vue.unref, h8 = window.Vue.resolveDirective, Us = window.Vue.createElementVNode, bu = window.Vue.withDirectives, go = window.Vue.toDisplayString, mo = window.Vue.openBlock, Li = window.Vue.createElementBlock, Bi = window.Vue.createCommentVNode, He = window.Vue.createVNode, je = window.Vue.withCtx, Pi = window.Vue.createTextVNode, w8 = window.Vue.withModifiers, $u = window.Vue.createBlock, f8 = { class: "sx-translation-confirmer-body pb-4" }, _8 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, v8 = ["textContent"], S8 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, y8 = ["href"], C8 = ["textContent"], Vu = window.Vue.computed, k8 = window.Vue.inject, x8 = window.Vue.onMounted, b8 = window.Vuex.useStore, Fi = window.Codex.CdxButton, $8 = window.Codex.CdxIcon, V8 = {
  __name: "SXTranslationConfirmerActionPanel",
  setup(e) {
    const t = we(), n = b8();
    k8("colors");
    const { targetLanguageAutonym: o, currentSectionSuggestion: s } = B(n), {
      clearPreFilledSection: a,
      startNewTranslation: i,
      onSectionSelectorClick: c,
      preFilledSectionTitle: l
    } = p8(), {
      actionInformationMessageArgs: d,
      getActionButtonLabel: r,
      isProgressiveButton: u,
      targetArticlePath: g,
      targetPageExists: m
    } = l8(s), p = Te(), h = Vu(
      () => p.i18n(r(!!l.value))
    ), { isDesktop: w } = Zo(), f = Vu(
      () => p.i18n(...d.value)
    ), v = () => {
      t.push({ name: "sx-section-selector" }), Wr(s.value);
    };
    return x8(() => {
      const C = l.value;
      C && !s.value.hasSectionTitle(C) && a();
    }), (C, A) => {
      const P = h8("i18n");
      return mo(), Li("section", f8, [
        G(l) ? (mo(), Li("section", _8, [
          bu(Us("h6", null, null, 512), [
            [P, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
          ]),
          Us("h5", {
            class: "ma-0",
            textContent: go(G(l))
          }, null, 8, v8)
        ])) : G(m) ? (mo(), Li("section", S8, [
          He(G(L), {
            class: "sx-translation-confirmer__translation-status ma-0 pb-2",
            justify: "between"
          }, {
            default: je(() => [
              bu(He(G(y), {
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
                    He(G($8), {
                      class: "sx-translation-confirmer__existing-target-article-link-icon",
                      size: "small",
                      icon: G(yc)
                    }, null, 8, ["icon"])
                  ], 8, y8)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          He(G(L), { class: "ma-0" }, {
            default: je(() => [
              He(G(y), null, {
                default: je(() => [
                  Us("span", {
                    textContent: go(f.value)
                  }, null, 8, C8)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : Bi("", !0),
        He(G(L), {
          class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
          justify: "center"
        }, {
          default: je(() => [
            G(l) ? (mo(), $u(G(y), {
              key: 0,
              shrink: "",
              class: "me-4"
            }, {
              default: je(() => [
                He(G(Fi), {
                  size: "large",
                  weight: "quiet",
                  action: "progressive",
                  onClick: w8(v, ["stop"])
                }, {
                  default: je(() => [
                    Pi(go(C.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })) : Bi("", !0),
            G(m) && G(w) ? (mo(), $u(G(y), {
              key: 1,
              shrink: "",
              class: "me-4"
            }, {
              default: je(() => [
                He(G(Fi), {
                  size: "large",
                  onClick: G(i)
                }, {
                  default: je(() => [
                    Pi(go(C.$i18n(
                      "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                    )), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })) : Bi("", !0),
            He(G(y), { shrink: "" }, {
              default: je(() => [
                He(G(Fi), {
                  weight: "primary",
                  size: "large",
                  action: G(u) ? "progressive" : "default",
                  onClick: G(c)
                }, {
                  default: je(() => [
                    Pi(go(h.value), 1)
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
const Mi = window.Vue.computed, A8 = window.Vuex.useStore, D8 = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: kc
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = es(), n = A8(), { sourceLanguage: o, targetLanguage: s } = B(n), a = Mi(
      () => n.getters["application/getCurrentLanguageTitleGroup"]
    ), i = Mi(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((g) => g.lang)) || [];
      }
    ), c = Mi(
      () => t.value || e.value
    ), l = TS();
    return {
      availableSourceLanguages: i,
      targetLanguages: c,
      onSourceLanguageSelected: (u) => l(u, s.value),
      onTargetLanguageSelected: (u) => l(o.value, u),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
}, E8 = window.Vue.resolveComponent, T8 = window.Vue.openBlock, L8 = window.Vue.createBlock;
function B8(e, t, n, o, s, a) {
  const i = E8("sx-translation-list-language-selector");
  return T8(), L8(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const Dm = /* @__PURE__ */ E(D8, [["render", B8]]);
const Au = window.Vue.toDisplayString, Rs = window.Vue.createElementVNode, qe = window.Vue.unref, Ft = window.Vue.createVNode, bn = window.Vue.withCtx, P8 = window.Vue.resolveDirective, F8 = window.Vue.withDirectives, M8 = window.Vue.openBlock, N8 = window.Vue.createBlock, I8 = ["textContent"], z8 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, U8 = ["textContent"], R8 = window.Codex.CdxButton, Ni = window.Codex.CdxIcon, Mt = window.Vue.computed, O8 = window.Vuex.useStore, H8 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = O8(), {
      currentSectionSuggestion: n,
      currentSourcePage: o
    } = B(t), s = Mt(() => t.state.suggestions.favorites || []), a = Mt(
      () => !!n.value && s.value.some(
        (w) => n.value.sourceTitle === w.title && n.value.sourceLanguage === w.sourceLanguage && n.value.targetLanguage === w.targetLanguage
      )
    ), { markFavoriteSectionSuggestion: i, removeFavoriteSuggestion: c } = xc(), l = () => i(n.value), d = () => c(
      new Ho({
        title: n.value.sourceTitle,
        sourceLanguage: n.value.sourceLanguage,
        targetLanguage: n.value.targetLanguage
      })
    ), r = Mt(
      () => a.value ? Py : Fy
    ), u = Mt(
      () => a.value ? d : l
    ), g = Mt(() => {
      var w;
      return (w = n.value) == null ? void 0 : w.sourceTitle;
    }), m = Mt(
      () => {
        var w;
        return q.getPageUrl(
          ((w = n.value) == null ? void 0 : w.sourceLanguage) || "",
          g.value || ""
        );
      }
    ), p = Mt(() => {
      var w;
      return (w = o.value) == null ? void 0 : w.langLinksCount;
    }), h = Mt(
      () => {
        var w;
        return Object.values(((w = o.value) == null ? void 0 : w.pageviews) || {}).reduce(
          (f, v) => f + v,
          0
        );
      }
    );
    return (w, f) => {
      const v = P8("i18n");
      return M8(), N8(qe(L), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: bn(() => [
          Ft(qe(y), null, {
            default: bn(() => [
              Ft(qe(L), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: bn(() => [
                  Ft(qe(y), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: m.value,
                    target: "_blank"
                  }, {
                    default: bn(() => [
                      Rs("h5", {
                        class: "ma-0 me-1",
                        textContent: Au(g.value)
                      }, null, 8, I8),
                      Ft(qe(Ni), {
                        size: "x-small",
                        icon: qe(yc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Ft(qe(y), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: bn(() => [
                      Ft(qe(R8), {
                        class: "px-0",
                        weight: "quiet",
                        action: a.value ? "progressive" : "default",
                        onClick: u.value
                      }, {
                        default: bn(() => [
                          Ft(qe(Ni), { icon: r.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Rs("p", z8, [
                Ft(qe(Ni), {
                  icon: qe(zy),
                  size: "small",
                  class: "me-1"
                }, null, 8, ["icon"]),
                Rs("span", {
                  class: "pe-3",
                  textContent: Au(p.value)
                }, null, 8, U8),
                F8(Rs("span", null, null, 512), [
                  [v, [h.value], "cx-sx-translation-confirmer-views-count"]
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
const Du = window.Vue.resolveDirective, Os = window.Vue.createElementVNode, Eu = window.Vue.withDirectives, Nt = window.Vue.unref, Hs = window.Vue.withCtx, It = window.Vue.createVNode, Ii = window.Vue.openBlock, Tu = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const j8 = window.Vue.createBlock, q8 = { class: "sx-translation-confirmer" }, G8 = { class: "mb-0" }, W8 = { class: "sx-translation-confirmer__article-image flex justify-center" }, X8 = ["src"], K8 = { class: "ma-3" }, Y8 = window.Vue.computed, Q8 = window.Vue.onMounted, J8 = window.Vuex.useStore, Z8 = {
  __name: "SXTranslationConfirmer",
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = J8(), { sourceLanguage: o, targetLanguage: s, currentSourcePage: a, previousRoute: i } = B(n), c = Y8(
      () => {
        var u, g;
        return (g = (u = a.value) == null ? void 0 : u.image) == null ? void 0 : g.source;
      }
    ), l = ct();
    Q8(() => {
      n.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles"), l({
        event_type: "dashboard_translation_start",
        event_source: t.eventSource,
        translation_source_language: o.value,
        translation_target_language: s.value
      }), _c(), n.dispatch(
        "suggestions/fetchAppendixSectionTitles",
        s.value
      );
    });
    const d = we(), r = () => {
      n.dispatch("application/clearCurrentSectionSuggestion"), fn(null), d.push({ name: i.value });
    };
    return (u, g) => {
      const m = Du("i18n"), p = Du("i18n-html");
      return Ii(), Tu("section", q8, [
        It(Nt(L), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Hs(() => [
            It(Nt(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Hs(() => [
                Eu(Os("h5", G8, null, 512), [
                  [m, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            It(Nt(y), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Hs(() => [
                It(Nt(Ce), {
                  class: "pa-0",
                  type: "icon",
                  icon: Nt(wn),
                  "icon-size": 20,
                  onClick: r
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Os("div", W8, [
          c.value ? (Ii(), Tu("img", {
            key: 0,
            src: c.value
          }, null, 8, X8)) : (Ii(), j8(Nt(he), {
            key: 1,
            size: "120",
            icon: Nt(tc),
            "icon-color": u.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        It(H8),
        It(Dm),
        It(V8),
        It(Nt(L), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Hs(() => [
            Os("p", K8, [
              Eu(Os("small", null, null, 512), [
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
const e2 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: Z8
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
}, t2 = window.Vue.resolveComponent, n2 = window.Vue.createVNode, o2 = window.Vue.normalizeClass, s2 = window.Vue.openBlock, a2 = window.Vue.createElementBlock;
function i2(e, t, n, o, s, a) {
  const i = t2("sx-translation-confirmer");
  return s2(), a2("main", {
    class: o2(["sx-translation-confirmer-view", a.classes])
  }, [
    n2(i, { "event-source": n.eventSource }, null, 8, ["event-source"])
  ], 2);
}
const r2 = /* @__PURE__ */ E(e2, [["render", i2]]);
const c2 = window.Vue.toDisplayString, Lu = window.Vue.unref, l2 = window.Vue.createVNode, u2 = window.Vue.createTextVNode, d2 = window.Vue.createElementVNode, g2 = window.Vue.openBlock, m2 = window.Vue.createElementBlock, p2 = { class: "sx-section-selector-view-article-item ma-0" }, h2 = ["href"], w2 = window.Codex.CdxIcon, f2 = {
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
    return (t, n) => (g2(), m2("li", p2, [
      d2("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        u2(c2(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        l2(Lu(w2), {
          size: "x-small",
          icon: Lu(yc)
        }, null, 8, ["icon"])
      ], 8, h2)
    ]));
  }
};
const _2 = window.Vue.resolveDirective, js = window.Vue.createElementVNode, zi = window.Vue.withDirectives, v2 = window.Vue.toDisplayString, $n = window.Vue.unref, qs = window.Vue.withCtx, po = window.Vue.createVNode, S2 = window.Vue.openBlock, y2 = window.Vue.createElementBlock, C2 = { class: "sx-section-selector__header pa-4" }, k2 = { class: "sx-section-selector__header-text ma-0" }, x2 = ["textContent"], b2 = { class: "pt-0 ma-0" }, $2 = { class: "ma-0" }, V2 = window.Codex.CdxButton, A2 = window.Codex.CdxIcon, D2 = {
  __name: "SXSectionSelectorHeader",
  props: {
    suggestion: {
      type: Je,
      required: !0
    }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => {
      const o = _2("i18n");
      return S2(), y2("div", C2, [
        po($n(L), { class: "ma-0 pb-3" }, {
          default: qs(() => [
            po($n(y), null, {
              default: qs(() => [
                zi(js("h6", k2, null, 512), [
                  [o, void 0, "cx-sx-section-selector-title"]
                ]),
                js("h2", {
                  class: "sx-section-selector__title ma-0 py-0",
                  textContent: v2(e.suggestion.sourceTitle)
                }, null, 8, x2)
              ]),
              _: 1
            }),
            po($n(y), {
              shrink: "",
              class: "justify-end"
            }, {
              default: qs(() => [
                po($n(V2), {
                  weight: "quiet",
                  "aria-label": t.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: n[0] || (n[0] = (s) => t.$emit("close"))
                }, {
                  default: qs(() => [
                    po($n(A2), { icon: $n(Va) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        zi(js("h4", b2, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        zi(js("p", $2, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, E2 = window.Vue.renderList, T2 = window.Vue.Fragment, Ui = window.Vue.openBlock, Bu = window.Vue.createElementBlock, L2 = window.Vue.renderSlot, Gs = window.Vue.unref, Pu = window.Vue.createVNode, Fu = window.Vue.withCtx, B2 = window.Vue.createBlock, P2 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, F2 = window.Codex.CdxButton, M2 = window.Codex.CdxIcon, Em = {
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
    return (t, n) => (Ui(), Bu("ul", P2, [
      (Ui(!0), Bu(T2, null, E2(e.sections, (o) => (Ui(), B2(Gs(L), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Fu(() => [
          Pu(Gs(F2), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Fu(() => [
              L2(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Pu(Gs(M2), { icon: Gs(as) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, N2 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const I2 = window.Vue.resolveDirective, Ws = window.Vue.createElementVNode, Ri = window.Vue.withDirectives, zt = window.Vue.unref, Mu = window.Vue.toDisplayString, Vn = window.Vue.withCtx, Oi = window.Vue.openBlock, Nu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ho = window.Vue.createVNode, z2 = window.Vue.createTextVNode, U2 = window.Vue.createElementBlock, R2 = { class: "sx-section-selector__missing-sections py-2" }, O2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, H2 = ["lang", "dir", "textContent"], Iu = window.Vue.computed, j2 = window.Codex.CdxButton, q2 = {
  __name: "SXSectionSelectorSectionListMissing",
  props: {
    suggestion: {
      type: Je,
      required: !0
    }
  },
  emits: ["select-section", "close"],
  setup(e) {
    const t = e, n = Iu(
      () => O.getAutonym(t.suggestion.targetLanguage)
    ), o = Iu(
      () => Object.keys(t.suggestion.missingSections).length === 0
    );
    return (s, a) => {
      const i = I2("i18n");
      return Oi(), U2("section", R2, [
        Ri(Ws("h4", O2, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Oi(), Nu(zt(L), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Vn(() => [
            ho(zt(y), {
              class: "py-6 justify-center",
              innerHTML: zt(N2)
            }, null, 8, ["innerHTML"]),
            ho(zt(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Vn(() => [
                Ri(Ws("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            ho(zt(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Vn(() => [
                Ri(Ws("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            ho(zt(y), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Vn(() => [
                ho(zt(j2), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: Vn(() => [
                    z2(Mu(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Oi(), Nu(Em, {
          key: 0,
          sections: e.suggestion.orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: Vn(({ sourceSection: c }) => [
            Ws("h5", {
              class: "ma-0",
              lang: e.suggestion.sourceLanguage,
              dir: zt(O.getDir)(e.suggestion.sourceLanguage),
              textContent: Mu(c)
            }, null, 8, H2)
          ]),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const G2 = window.Vue.computed, W2 = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Em
  },
  props: {
    suggestion: {
      type: Je,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    const t = G2(
      () => O.getAutonym(e.suggestion.targetLanguage)
    );
    return { mwIconArrowForward: Jr, getAutonym: O.getAutonym, getDir: O.getDir, targetLanguageAutonym: t };
  }
}, X2 = window.Vue.resolveDirective, Xs = window.Vue.createElementVNode, K2 = window.Vue.withDirectives, zu = window.Vue.toDisplayString, Y2 = window.Vue.resolveComponent, Q2 = window.Vue.withCtx, J2 = window.Vue.createVNode, Z2 = window.Vue.openBlock, eb = window.Vue.createElementBlock, tb = { class: "sx-section-selector__present-sections py-2" }, nb = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, ob = { class: "sx-section-selector__present-section-button-content" }, sb = ["lang", "dir", "textContent"], ab = ["lang", "dir", "textContent"];
function ib(e, t, n, o, s, a) {
  const i = Y2("sx-section-selector-section-list"), c = X2("i18n");
  return Z2(), eb("section", tb, [
    K2(Xs("h4", nb, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    J2(i, {
      sections: n.suggestion.orderedPresentSections,
      onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
    }, {
      default: Q2(({ sourceSection: l, targetSection: d }) => [
        Xs("div", ob, [
          Xs("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: zu(l)
          }, null, 8, sb),
          Xs("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: n.suggestion.targetLanguage,
            dir: o.getDir(n.suggestion.targetLanguage),
            textContent: zu(d)
          }, null, 8, ab)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
const rb = /* @__PURE__ */ E(W2, [["render", ib]]);
const Hi = window.Vue.computed, cb = window.Vuex.useStore, lb = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: rb,
    SxSectionSelectorSectionListMissing: q2,
    SxSectionSelectorHeader: D2,
    SxSectionSelectorViewArticleItem: f2,
    MwRow: L,
    MwCol: y,
    MwIcon: he,
    SxArticleLanguageSelector: Dm
  },
  setup() {
    const e = cb(), {
      currentSectionSuggestion: t,
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = B(e), i = Hi(
      () => q.getPageUrl(n.value, t.value.sourceTitle)
    ), c = Hi(
      () => q.getPageUrl(o.value, t.value.targetTitle)
    ), l = Hi(() => [
      { path: i.value, autonym: s.value },
      { path: c.value, autonym: a.value }
    ]), d = we(), r = () => {
      fn(null), d.push({ name: "dashboard" });
    }, u = ss(), { selectPageSectionByTitle: g } = bc(), { isDesktop: m } = Zo(), p = fc();
    return {
      goToDashboard: r,
      mwIconRobot: Nh,
      mwIconLabFlask: Cg,
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
}, Ut = window.Vue.resolveComponent, vt = window.Vue.createVNode, ub = window.Vue.resolveDirective, tt = window.Vue.createElementVNode, wo = window.Vue.withDirectives, db = window.Vue.renderList, gb = window.Vue.Fragment, ji = window.Vue.openBlock, Uu = window.Vue.createElementBlock, mb = window.Vue.createBlock, Ru = window.Vue.toDisplayString, Ou = window.Vue.createTextVNode, qi = window.Vue.withCtx, pb = { class: "sx-section-selector" }, hb = { class: "sx-section-selector__body" }, wb = { class: "py-2" }, fb = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, _b = { class: "ma-0 pa-0" }, vb = { class: "sx-section-selector__additional-consideration-title" }, Sb = { href: "#" }, yb = { class: "sx-section-selector__additional-consideration-title" }, Cb = { href: "#" };
function kb(e, t, n, o, s, a) {
  const i = Ut("sx-section-selector-header"), c = Ut("sx-article-language-selector"), l = Ut("sx-section-selector-section-list-missing"), d = Ut("sx-section-selector-section-list-present"), r = Ut("sx-section-selector-view-article-item"), u = Ut("mw-icon"), g = Ut("mw-col"), m = Ut("mw-row"), p = ub("i18n");
  return ji(), Uu("section", pb, [
    vt(i, {
      suggestion: o.suggestion,
      onClose: o.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    tt("section", hb, [
      vt(c),
      vt(l, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["suggestion", "onSelectSection", "onClose"]),
      vt(d, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection
      }, null, 8, ["suggestion", "onSelectSection"]),
      tt("section", wb, [
        wo(tt("h4", fb, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        tt("ul", _b, [
          (ji(!0), Uu(gb, null, db(o.viewArticleItems, (h, w) => (ji(), mb(r, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      vt(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: qi(() => [
          vt(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: qi(() => [
              tt("h6", vb, [
                vt(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Ou(" " + Ru(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              wo(tt("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              wo(tt("a", Sb, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          vt(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: qi(() => [
              tt("h6", yb, [
                vt(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                Ou(" " + Ru(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              wo(tt("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              wo(tt("a", Cb, null, 512), [
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
const xb = /* @__PURE__ */ E(lb, [["render", kb]]);
const bb = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: xb
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, $b = window.Vue.resolveComponent, Vb = window.Vue.createVNode, Ab = window.Vue.normalizeClass, Db = window.Vue.openBlock, Eb = window.Vue.createElementBlock;
function Tb(e, t, n, o, s, a) {
  const i = $b("sx-section-selector");
  return Db(), Eb("main", {
    class: Ab(["sx-section-selector-view", a.classes])
  }, [
    Vb(i)
  ], 2);
}
const Lb = /* @__PURE__ */ E(bb, [["render", Tb]]), Bb = window.Vue.computed, Pb = window.Vuex.useStore, Fb = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = B(
    Pb()
  ), o = Te();
  return Bb(() => {
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
const Mb = window.Vue.watch, Nb = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: Wo },
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
    const n = (s) => t("update:selection", s), o = Fb(e);
    return Mb(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, Ib = window.Vue.resolveComponent, zb = window.Vue.createVNode, Ub = window.Vue.openBlock, Rb = window.Vue.createElementBlock, Ob = { class: "sx-content-comparator__source-target-selector" };
function Hb(e, t, n, o, s, a) {
  const i = Ib("mw-button-group");
  return Ub(), Rb("div", Ob, [
    zb(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const jb = /* @__PURE__ */ E(Nb, [["render", Hb]]), an = window.Vue.computed, qb = window.Vue.ref, $c = (e) => {
  const t = qb([]), {
    currentSectionSuggestion: n,
    currentSourceSection: o,
    currentTargetPage: s
  } = B(e), a = an(
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
const Hu = window.Vue.ref, Ks = window.Vue.computed, Gb = window.Vue.onMounted, Wb = window.Vuex.useStore, Xb = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: jb,
    MwRow: L,
    MwCol: y,
    MwButton: Ce
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
    const n = Wb(), o = Hu(!1), { currentSectionSuggestion: s } = B(n), a = Ks(
      () => n.getters["application/getCurrentSourceSectionTitle"]
    ), i = Ks(
      () => n.getters["application/getCurrentSourceSectionAnchor"]
    ), c = (m) => t.emit("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: l, targetSectionAnchor: d } = $c(n), r = Ks(() => {
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
    ), g = Hu(null);
    return Gb(() => {
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
      mwIconLinkExternal: yg,
      mwIconEdit: ka,
      updateSelection: c
    };
  }
}, Ys = window.Vue.resolveComponent, Qs = window.Vue.createVNode, Kb = window.Vue.toDisplayString, Yb = window.Vue.createElementVNode, Js = window.Vue.withCtx, Gi = window.Vue.openBlock, Wi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Qb = window.Vue.normalizeClass, Jb = ["lang", "dir", "textContent"];
function Zb(e, t, n, o, s, a) {
  const i = Ys("sx-content-comparator-source-vs-target-selector"), c = Ys("mw-col"), l = Ys("mw-button"), d = Ys("mw-row");
  return Gi(), Wi(d, {
    ref: "contentHeader",
    class: Qb(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
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
              Yb("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: Kb(o.activeContent.title)
              }, null, 8, Jb)
            ]),
            _: 1
          }),
          Qs(c, { shrink: "" }, {
            default: Js(() => [
              o.isSticky ? (Gi(), Wi(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (r) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (Gi(), Wi(l, {
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
const e4 = /* @__PURE__ */ E(Xb, [["render", Zb]]), ju = window.Vue.computed, t4 = window.Vuex.useStore, n4 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: y,
    MwButton: Ce
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = t4(), n = ju(
      () => t.getters["application/getCurrentSourceSectionTitle"]
    ), o = ju(
      () => e.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = bc();
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
      mwIconArrowForward: Jr
    };
  }
}, qu = window.Vue.resolveComponent, Gu = window.Vue.createVNode, o4 = window.Vue.withCtx, s4 = window.Vue.openBlock, a4 = window.Vue.createBlock;
function i4(e, t, n, o, s, a) {
  const i = qu("mw-button"), c = qu("mw-col");
  return s4(), a4(c, {
    class: "justify-end",
    align: "center"
  }, {
    default: o4(() => [
      Gu(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      Gu(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const r4 = /* @__PURE__ */ E(n4, [["render", i4]]);
const c4 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: L,
    MwCol: y,
    MwButton: Ce
  },
  props: {
    suggestion: {
      type: Je,
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
    mwIconTrash: vg,
    mwIconUndo: Uh
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
}, Wu = window.Vue.toDisplayString, l4 = window.Vue.resolveDirective, Xi = window.Vue.withDirectives, An = window.Vue.openBlock, Zs = window.Vue.createElementBlock, u4 = window.Vue.createCommentVNode, d4 = window.Vue.createTextVNode, Xu = window.Vue.createElementVNode, g4 = window.Vue.normalizeClass, Ki = window.Vue.resolveComponent, Yi = window.Vue.withCtx, Qi = window.Vue.createVNode, Ku = window.Vue.createBlock, m4 = { class: "sx-content-comparator-header__mapped-section" }, p4 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, h4 = { key: 0 }, w4 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, f4 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function _4(e, t, n, o, s, a) {
  const i = Ki("mw-col"), c = Ki("mw-button"), l = Ki("mw-row"), d = l4("i18n");
  return An(), Zs("div", m4, [
    Qi(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: Yi(() => [
        Qi(i, { grow: "" }, {
          default: Yi(() => [
            Xu("h6", p4, [
              d4(Wu(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? Xi((An(), Zs("span", h4, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : u4("", !0)
            ]),
            Xu("h6", {
              class: g4(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, Wu(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        Qi(i, { shrink: "" }, {
          default: Yi(() => [
            a.isDiscardedSection ? (An(), Ku(c, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (An(), Ku(c, {
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
    a.isDiscardedSection ? Xi((An(), Zs("p", f4, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : Xi((An(), Zs("p", w4, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const v4 = /* @__PURE__ */ E(c4, [["render", _4]]);
const ea = window.Vue.computed, S4 = window.Vuex.useStore, y4 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: v4,
    SxContentComparatorHeaderNavigation: r4,
    MwButton: Ce,
    MwCol: y,
    MwRow: L,
    MwIcon: he
  },
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const e = S4(), {
      currentSectionSuggestion: t,
      currentSourceSection: n
    } = B(e), o = ea(
      () => e.getters["application/isCurrentSourceSectionMissing"]
    ), s = ea(
      () => e.getters["application/isCurrentSourceSectionPresent"]
    ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = $c(e), c = ea(() => {
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
      mwIconEye: Ih,
      sectionSourceTitles: l,
      sourceSectionContent: c,
      sourceSectionTitle: i,
      suggestion: t,
      getDir: O.getDir
    };
  }
}, Dn = window.Vue.resolveComponent, St = window.Vue.createVNode, Yu = window.Vue.toDisplayString, zo = window.Vue.createElementVNode, En = window.Vue.withCtx, C4 = window.Vue.resolveDirective, Qu = window.Vue.withDirectives, Ji = window.Vue.openBlock, Ju = window.Vue.createBlock, Zu = window.Vue.createCommentVNode, k4 = window.Vue.createElementBlock, x4 = { class: "sx-content-comparator__header pa-4" }, b4 = ["lang", "dir"], $4 = ["lang", "dir"], V4 = /* @__PURE__ */ zo("br", null, null, -1);
function A4(e, t, n, o, s, a) {
  const i = Dn("mw-button"), c = Dn("mw-col"), l = Dn("sx-content-comparator-header-navigation"), d = Dn("mw-row"), r = Dn("mw-icon"), u = Dn("sx-content-comparator-header-mapped-section"), g = C4("i18n");
  return Ji(), k4("div", x4, [
    St(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    St(d, { class: "my-1 py-2 mx-0" }, {
      default: En(() => [
        St(c, { grow: "" }, {
          default: En(() => [
            zo("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Yu(o.suggestion.sourceTitle), 9, b4),
            zo("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Yu(o.sourceSectionTitle), 9, $4)
          ]),
          _: 1
        }),
        St(l, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        St(c, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: En(() => [
            St(i, {
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
    o.isCurrentSectionMissing ? (Ji(), Ju(d, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: En(() => [
        St(c, {
          shrink: "",
          class: "pe-2"
        }, {
          default: En(() => [
            St(r, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        St(c, { class: "ma-0" }, {
          default: En(() => [
            Qu(zo("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            V4,
            Qu(zo("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : Zu("", !0),
    o.isCurrentSectionPresent ? (Ji(), Ju(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Zu("", !0)
  ]);
}
const D4 = /* @__PURE__ */ E(y4, [["render", A4]]);
const E4 = {
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
}, ed = window.Vue.toDisplayString, T4 = window.Vue.createElementVNode, td = window.Vue.openBlock, nd = window.Vue.createElementBlock, L4 = window.Vue.createCommentVNode, B4 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, P4 = ["textContent"], F4 = ["textContent"];
function M4(e, t, n, o, s, a) {
  return td(), nd("section", B4, [
    T4("h5", {
      textContent: ed(n.placeholderTitle)
    }, null, 8, P4),
    n.placeholderSubtitle ? (td(), nd("p", {
      key: 0,
      textContent: ed(n.placeholderSubtitle)
    }, null, 8, F4)) : L4("", !0)
  ]);
}
const Tm = /* @__PURE__ */ E(E4, [["render", M4]]), N4 = window.Vue.computed, I4 = window.Vue.createApp, z4 = window.Vuex.useStore, U4 = () => {
  const e = z4(), {
    currentSectionSuggestion: t,
    currentTargetPage: n
  } = B(e), o = Te(), s = () => I4(
    Tm,
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
  return N4(() => {
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
const R4 = window.Vue.ref, O4 = window.Vue.computed, H4 = window.Vue.watch, j4 = window.Vuex.useStore, q4 = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Tm,
    SxContentComparatorHeader: D4,
    SxContentComparatorContentHeader: e4,
    MwSpinner: Ye
  },
  setup() {
    const e = j4(), t = we(), n = R4("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      hm() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: i,
      isCurrentSectionMapped: c,
      sourceSectionContent: l,
      targetSectionContent: d
    } = $c(e), r = U4(), {
      currentSectionSuggestion: u,
      sourceLanguage: g,
      targetLanguage: m
    } = B(e), p = O4(() => u.value.targetTitle);
    return H4(
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
}, ta = window.Vue.resolveComponent, Zi = window.Vue.createVNode, Tn = window.Vue.openBlock, od = window.Vue.createBlock, sd = window.Vue.createCommentVNode, na = window.Vue.createElementVNode, er = window.Vue.Fragment, oa = window.Vue.createElementBlock, G4 = { class: "sx-content-comparator" }, W4 = { class: "sx-content-comparator__source-content" }, X4 = ["lang", "dir", "innerHTML"], K4 = ["lang", "dir", "innerHTML"], Y4 = ["innerHTML"];
function Q4(e, t, n, o, s, a) {
  const i = ta("sx-content-comparator-header"), c = ta("sx-content-comparator-content-header"), l = ta("mw-spinner"), d = ta("sx-content-comparator-new-section-placeholder");
  return Tn(), oa("section", G4, [
    Zi(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (r) => o.discardedSections = r),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    Zi(c, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (r) => o.sourceVsTargetSelection = r),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    na("section", W4, [
      o.sourceVsTargetSelection === "source_section" ? (Tn(), oa(er, { key: 0 }, [
        o.sourceSectionContent ? sd("", !0) : (Tn(), od(l, { key: 0 })),
        na("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, X4)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (Tn(), oa(er, { key: 1 }, [
        o.targetPageContent ? sd("", !0) : (Tn(), od(l, { key: 0 })),
        na("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, K4)
      ], 64)) : (Tn(), oa(er, { key: 2 }, [
        na("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, Y4),
        Zi(d, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const J4 = /* @__PURE__ */ E(q4, [["render", Q4]]);
const Z4 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: J4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, e3 = window.Vue.resolveComponent, t3 = window.Vue.createVNode, n3 = window.Vue.normalizeClass, o3 = window.Vue.openBlock, s3 = window.Vue.createElementBlock;
function a3(e, t, n, o, s, a) {
  const i = e3("sx-content-comparator");
  return o3(), s3("main", {
    class: n3(["sx-content-comparator-view", a.classes])
  }, [
    t3(i)
  ], 2);
}
const i3 = /* @__PURE__ */ E(Z4, [["render", a3]]);
const r3 = window.Vue.resolveDirective, fo = window.Vue.createElementVNode, ad = window.Vue.withDirectives, sa = window.Vue.unref, tr = window.Vue.createVNode, id = window.Vue.toDisplayString, rd = window.Vue.createTextVNode, _o = window.Vue.withCtx, c3 = window.Vue.openBlock, l3 = window.Vue.createBlock, u3 = { class: "mw-ui-dialog__header px-4 py-3" }, d3 = { class: "mw-ui-dialog__header-title" }, g3 = { class: "pa-4" }, m3 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, cd = window.Codex.CdxButton, p3 = {
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
      const l = r3("i18n");
      return c3(), l3(sa(Ze), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.gray700
      }, {
        header: _o(() => [
          fo("div", u3, [
            ad(fo("span", d3, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: _o(() => [
          fo("div", m3, [
            tr(sa(cd), {
              weight: "quiet",
              onClick: s
            }, {
              default: _o(() => [
                rd(id(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            tr(sa(cd), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: _o(() => [
                rd(id(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: _o(() => [
          tr(sa(Xo)),
          fo("div", g3, [
            ad(fo("span", null, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
};
const nr = window.Vue.computed, h3 = window.Vuex.useStore, w3 = {
  name: "SxTranslationSelector",
  components: { MwCard: ze, MwButton: Ce, MwDialog: Ze },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = W.EMPTY_TEXT_PROVIDER_KEY, o = W.ORIGINAL_TEXT_PROVIDER_KEY, s = h3(), {
      sourceLanguage: a,
      targetLanguage: i,
      currentSourceSection: c,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = B(s), r = nr(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        a.value,
        i.value
      )
    ), u = nr(() => {
      const w = [o, n];
      return r.value.filter(
        (f) => !w.includes(f)
      );
    }), g = nr(
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
      mwIconClose: wn,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: m,
      sourceLanguage: a
    };
  }
}, f3 = window.Vue.resolveDirective, Ne = window.Vue.createElementVNode, aa = window.Vue.withDirectives, or = window.Vue.resolveComponent, sr = window.Vue.createVNode, Rt = window.Vue.withCtx, _3 = window.Vue.renderList, v3 = window.Vue.Fragment, ar = window.Vue.openBlock, S3 = window.Vue.createElementBlock, y3 = window.Vue.toDisplayString, ld = window.Vue.createBlock, C3 = window.Vue.createCommentVNode, k3 = { class: "mw-ui-dialog__header pa-4" }, x3 = { class: "row ma-0 py-2" }, b3 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, $3 = { class: "mb-0" }, V3 = { class: "col shrink justify-center" }, A3 = { class: "pb-2 mb-0" }, D3 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, E3 = ["dir", "lang", "innerHTML"], T3 = ["textContent"], L3 = ["innerHTML"], B3 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, P3 = /* @__PURE__ */ Ne("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function F3(e, t, n, o, s, a) {
  const i = or("mw-button"), c = or("mw-card"), l = or("mw-dialog"), d = f3("i18n");
  return n.active ? (ar(), ld(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: Rt(() => [
      Ne("div", k3, [
        Ne("div", x3, [
          Ne("div", b3, [
            aa(Ne("h4", $3, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Ne("div", V3, [
            sr(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        aa(Ne("h6", A3, null, 512), [
          [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: Rt(() => [
      sr(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (r) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: Rt(() => [
          aa(Ne("h5", D3, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: Rt(() => [
          Ne("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, E3)
        ]),
        _: 1
      }),
      (ar(!0), S3(v3, null, _3(o.apiMtProviders, (r) => (ar(), ld(c, {
        key: r,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(r)
      }, {
        header: Rt(() => [
          Ne("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: y3(o.getMTProviderLabel(r))
          }, null, 8, T3)
        ]),
        default: Rt(() => [
          Ne("p", {
            innerHTML: o.proposedTranslations[r]
          }, null, 8, L3)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      sr(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (r) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: Rt(() => [
          aa(Ne("h5", B3, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: Rt(() => [
          P3
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : C3("", !0);
}
const M3 = /* @__PURE__ */ E(w3, [["render", F3]]);
const Ln = window.Vue.computed, N3 = window.Vuex.useStore, I3 = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: he, MwCol: y },
  setup() {
    const e = N3(), t = "sx-sentence-selector__section-title", {
      currentSourceSection: n,
      isSectionTitleSelected: o,
      currentSourcePage: s,
      sourceLanguage: a
    } = B(e), i = Ln(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = Ln(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), l = Ln(
      () => q.getPageUrl(a.value, i.value)
    ), d = Ln(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = Ln(
      () => d.value ? "translated" : "selected"
    ), u = Ln(() => {
      const m = [t];
      return o.value && m.push(`${t}--${r.value}`), m;
    });
    return {
      mwIconLinkExternal: yg,
      selectSectionTitle: () => e.dispatch("application/selectTranslationUnitById", 0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: c,
      titleClasses: u
    };
  }
}, z3 = window.Vue.toDisplayString, ir = window.Vue.createElementVNode, ud = window.Vue.resolveComponent, U3 = window.Vue.createVNode, R3 = window.Vue.normalizeClass, O3 = window.Vue.withCtx, H3 = window.Vue.openBlock, j3 = window.Vue.createBlock, q3 = ["href"], G3 = ["textContent"], W3 = ["innerHTML"];
function X3(e, t, n, o, s, a) {
  const i = ud("mw-icon"), c = ud("mw-col");
  return H3(), j3(c, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: O3(() => [
      ir("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        ir("strong", {
          textContent: z3(o.sourceArticleTitle)
        }, null, 8, G3),
        U3(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, q3),
      ir("h2", {
        class: R3(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, W3)
    ]),
    _: 1
  });
}
const K3 = /* @__PURE__ */ E(I3, [["render", X3]]);
const nt = window.Vue.unref, vo = window.Vue.createVNode, ia = window.Vue.withCtx, dd = window.Vue.toDisplayString, gd = window.Vue.createTextVNode, Y3 = window.Vue.openBlock, Q3 = window.Vue.createBlock, J3 = window.Vue.computed, Z3 = window.Vuex.useStore, rr = window.Codex.CdxButton, md = window.Codex.CdxIcon, Lm = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { currentSourceSection: t, proposedTranslation: n, isSectionTitleSelected: o } = B(Z3()), s = J3(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (a, i) => (Y3(), Q3(nt(L), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: ia(() => [
        vo(nt(rr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          disabled: nt(o),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: ia(() => [
            vo(nt(md), {
              class: "me-1",
              icon: nt(Cc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        vo(nt(rr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !nt(n),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: ia(() => [
            gd(dd(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        vo(nt(rr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: ia(() => [
            gd(dd(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            vo(nt(md), {
              class: "ms-1",
              size: "small",
              icon: nt(as)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const rn = window.Vue.unref, e$ = window.Vue.toDisplayString, So = window.Vue.createVNode, ra = window.Vue.withCtx, t$ = window.Vue.openBlock, n$ = window.Vue.createBlock, cr = window.Vue.computed, o$ = window.Vuex.useStore, s$ = window.Codex.CdxButton, a$ = window.Codex.CdxIcon, i$ = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = o$(), n = cr(() => t.state.application.currentMTProvider), o = Te(), s = cr(() => ({
      [W.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [W.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = cr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        W.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (t$(), n$(rn(y), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: ra(() => [
        So(rn(L), { class: "ma-0 ps-5 pb-4" }, {
          default: ra(() => [
            So(rn(y), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: e$(a.value)
            }, null, 8, ["textContent"]),
            So(rn(y), {
              shrink: "",
              class: "pe-5"
            }, {
              default: ra(() => [
                So(rn(s$), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  onClick: c[0] || (c[0] = (l) => i.$emit("configure-options"))
                }, {
                  default: ra(() => [
                    So(rn(a$), {
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
const Ge = window.Vue.unref, Ot = window.Vue.createVNode, r$ = window.Vue.resolveDirective, pd = window.Vue.createElementVNode, c$ = window.Vue.withDirectives, hd = window.Vue.toDisplayString, wd = window.Vue.createTextVNode, yo = window.Vue.withCtx, l$ = window.Vue.openBlock, u$ = window.Vue.createElementBlock, d$ = { class: "mt-retry-body pb-5" }, g$ = { class: "retry-body__message" }, fd = window.Codex.CdxButton, lr = window.Codex.CdxIcon, m$ = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = r$("i18n");
      return l$(), u$("div", d$, [
        pd("div", g$, [
          Ot(Ge(lr), {
            class: "me-2",
            icon: Ge(km)
          }, null, 8, ["icon"]),
          c$(pd("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Ot(Ge(L), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: yo(() => [
            Ot(Ge(y), { cols: "6" }, {
              default: yo(() => [
                Ot(Ge(fd), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: yo(() => [
                    Ot(Ge(lr), {
                      class: "me-1",
                      icon: Ge($m)
                    }, null, 8, ["icon"]),
                    wd(" " + hd(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ot(Ge(y), { cols: "6" }, {
              default: yo(() => [
                Ot(Ge(fd), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: yo(() => [
                    Ot(Ge(lr), {
                      class: "me-1",
                      icon: Ge(Uy)
                    }, null, 8, ["icon"]),
                    wd(" " + hd(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Bn = window.Vue.createVNode, Ve = window.Vue.unref, Co = window.Vue.openBlock, p$ = window.Vue.createElementBlock, h$ = window.Vue.createCommentVNode, ca = window.Vue.createBlock, w$ = window.Vue.normalizeClass, f$ = window.Vue.normalizeStyle, ko = window.Vue.withCtx, _$ = window.Vue.toDisplayString, v$ = window.Vue.createTextVNode, S$ = window.Vue.normalizeProps, y$ = window.Vue.guardReactiveProps, C$ = ["lang", "dir", "innerHTML"], ur = window.Vue.ref, k$ = window.Vue.onMounted, dr = window.Vue.computed, x$ = window.Vue.watch, b$ = window.Vue.nextTick, $$ = window.Vuex.useStore, V$ = window.Codex.CdxButton, A$ = window.Codex.CdxIcon, D$ = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = ur(0), n = ur(null), o = ur(null), s = $$(), {
      currentMTProvider: a,
      targetLanguage: i,
      proposedTranslation: c,
      currentSourceSection: l
    } = B(s), d = dr(
      () => {
        var m;
        return (m = s.state.application.mtRequestsPending) == null ? void 0 : m.includes(
          l.value.selectedTranslationUnitId
        );
      }
    ), r = dr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = dr(
      () => !!c.value || a.value === W.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    return x$(a, g), k$(() => b(this, null, function* () {
      yield b$(), g();
    })), (m, p) => (Co(), ca(Ve(ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ko(() => [
        Bn(Ve(L), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ko(() => [
            Bn(i$, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: p[0] || (p[0] = (h) => m.$emit("configure-options"))
            }, null, 512),
            Bn(Ve(y), {
              class: w$(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value
              }]),
              style: f$(r.value)
            }, {
              default: ko(() => [
                u.value ? (Co(), p$("section", {
                  key: 0,
                  lang: Ve(i),
                  dir: Ve(O.getDir)(Ve(i)),
                  innerHTML: Ve(c)
                }, null, 8, C$)) : d.value ? (Co(), ca(Ve(Ye), { key: 1 })) : (Co(), ca(m$, {
                  key: 2,
                  onConfigureOptions: p[1] || (p[1] = (h) => m.$emit("configure-options")),
                  onRetryTranslation: p[2] || (p[2] = (h) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Bn(Ve(y), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ko(() => [
                u.value || d.value ? (Co(), ca(Ve(V$), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: p[3] || (p[3] = (h) => m.$emit("edit-translation", Ve(c)))
                }, {
                  default: ko(() => [
                    Bn(Ve(A$), {
                      class: "me-1",
                      icon: Ve(Sc)
                    }, null, 8, ["icon"]),
                    v$(" " + _$(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h$("", !0),
                Bn(Lm, S$(y$(m.$attrs)), null, 16)
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
}, E$ = window.Vue.computed, T$ = (e) => E$(() => {
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
const L$ = window.Vue.onMounted, B$ = window.Vue.ref, P$ = window.Vue.computed, F$ = window.Vuex.useStore, M$ = {
  name: "SubSection",
  props: {
    subSection: {
      type: De,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = B$(null), o = T$(e.subSection);
    L$(() => {
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
    const s = F$(), a = (c) => {
      if (c.selected) {
        t("bounce-translation");
        return;
      }
      s.dispatch(
        "application/selectTranslationUnitById",
        c.id
      );
    }, i = P$(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, N$ = window.Vue.normalizeClass, I$ = window.Vue.openBlock, z$ = window.Vue.createElementBlock, U$ = ["innerHTML"];
function R$(e, t, n, o, s, a) {
  return I$(), z$("div", {
    ref: "subSectionRoot",
    class: N$(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, U$);
}
const O$ = /* @__PURE__ */ E(M$, [["render", R$]]);
const _d = window.Vue.computed, H$ = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: bg,
    MwIcon: he
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
    const t = _d(() => ({ "--size": e.size })), n = _d(
      () => !e.isTemplateAdapted || e.percentage === 0 ? ec : Rn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, vd = window.Vue.resolveComponent, Sd = window.Vue.createVNode, yd = window.Vue.normalizeStyle, j$ = window.Vue.openBlock, q$ = window.Vue.createElementBlock;
function G$(e, t, n, o, s, a) {
  const i = vd("mw-circle-progress-bar"), c = vd("mw-icon");
  return j$(), q$("div", {
    class: "block-template-status-indicator",
    style: yd(o.cssVars)
  }, [
    Sd(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    Sd(c, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: yd({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const Bm = /* @__PURE__ */ E(H$, [["render", G$]]), W$ = window.Vuex.useStore, xo = window.Vue.computed, X$ = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: y,
    MwRow: L,
    MwButton: Ce,
    MwIcon: he,
    MwRadioGroup: kg,
    MwRadio: ya,
    MwDivider: Xo,
    MwDialog: Ze,
    MwCircleProgressBar: bg,
    BlockTemplateStatusIndicator: Bm
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
    const { targetLanguageAutonym: t } = B(W$()), n = xo(
      () => !e.isTemplateAdapted || o.value === 0 ? ec : Rn
    ), o = xo(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = Te(), a = xo(() => {
      let l;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? l = "cx-sx-block-template-mapping-status-title-partially-template" : l = "cx-sx-block-template-mapping-status-title-fully-template" : l = "cx-sx-block-template-mapping-status-title-unadapted-template" : l = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(l);
    }), i = xo(() => {
      let l;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? l = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? l = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : l = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(l);
    }), c = xo(() => {
      let l = [];
      if (!e.targetTemplateExists)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: jh,
          color: Ie.gray500
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: wn,
          color: Ie.gray500
        });
      else if (o.value < 100)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: Rn,
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
          icon: Rn,
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
        icon: $h,
        color: Ie.gray500
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: Rn,
      mwIconInfo: Ah,
      notes: c
    };
  }
}, bo = window.Vue.resolveComponent, $o = window.Vue.openBlock, la = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Pn = window.Vue.withCtx, Vo = window.Vue.createVNode, gr = window.Vue.toDisplayString, mr = window.Vue.createElementVNode, K$ = window.Vue.renderList, Y$ = window.Vue.Fragment, Q$ = window.Vue.createElementBlock, J$ = { class: "pa-4" }, Z$ = ["textContent"], e5 = ["textContent"];
function t5(e, t, n, o, s, a) {
  const i = bo("block-template-status-indicator"), c = bo("mw-icon"), l = bo("mw-col"), d = bo("mw-row"), r = bo("mw-dialog");
  return $o(), la(r, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: Pn(() => [
      Vo(d, {
        justify: "center",
        class: "mt-4"
      }, {
        default: Pn(() => [
          Vo(l, { shrink: "" }, {
            default: Pn(() => [
              n.targetTemplateExists ? ($o(), la(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : ($o(), la(c, {
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
    default: Pn(() => [
      mr("div", J$, [
        mr("h3", {
          textContent: gr(o.statusText)
        }, null, 8, Z$),
        mr("p", {
          class: "mt-6 text-small",
          textContent: gr(o.statusExplanation)
        }, null, 8, e5),
        ($o(!0), Q$(Y$, null, K$(o.notes, (u, g) => ($o(), la(d, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: Pn(() => [
            Vo(l, { shrink: "" }, {
              default: Pn(() => [
                Vo(c, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            Vo(l, {
              textContent: gr(u.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const n5 = /* @__PURE__ */ E(X$, [["render", t5]]);
const se = window.Vue.unref, ge = window.Vue.createVNode, ot = window.Vue.withCtx, pr = window.Vue.toDisplayString, Cd = window.Vue.createTextVNode, o5 = window.Vue.resolveDirective, kd = window.Vue.withDirectives, xd = window.Vue.createElementVNode, s5 = window.Vue.normalizeClass, ua = window.Vue.openBlock, bd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const $d = window.Vue.createBlock, a5 = window.Vue.normalizeProps, i5 = window.Vue.guardReactiveProps, r5 = { class: "block-template-adaptation-card__container pa-4" }, c5 = ["textContent"], l5 = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Se = window.Vue.computed, u5 = window.Vue.ref, d5 = window.Vuex.useStore, Vd = window.Codex.CdxButton, Ad = window.Codex.CdxIcon, g5 = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = d5(), {
      selectedContentTranslationUnit: n,
      targetLanguageAutonym: o,
      currentMTProvider: s,
      proposedTranslation: a
    } = B(t), i = Se(() => {
      var F;
      return ((F = n.value) == null ? void 0 : F.blockTemplateTranslatedContent) || a.value;
    }), c = Se(
      () => {
        var V;
        return (V = n.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          s.value
        );
      }
    ), l = Se(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          n.value.id
        ));
      }
    ), d = Te(), r = Se(
      // Strip HTML comments and return
      () => {
        var V, F;
        return ((F = (V = n.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : F.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), u = Se(
      () => {
        var V;
        return (V = n.value.blockTemplateAdaptationInfo) == null ? void 0 : V[s.value];
      }
    ), g = Se(
      () => {
        var V, F;
        return ((V = u.value) == null ? void 0 : V.adapted) || !!((F = u.value) != null && F.partial);
      }
    ), m = Se(() => u.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), p = Se(() => u.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Se(
      () => {
        var V;
        return Object.keys(((V = n.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), w = Se(() => {
      var F;
      const V = (F = n.value) == null ? void 0 : F.getTargetTemplateParamsByProvider(
        s.value
      );
      return Object.keys(V || {});
    }), f = Se(() => w.value.length), v = Se(() => {
      const V = D.value;
      return h.value + V === 0 ? 100 : f.value / (h.value + V) * 100 || 0;
    }), C = u5(!1), A = () => {
      C.value = !0;
    }, P = (V) => V.filter((F) => !w.value.includes(F)), D = Se(() => {
      var F;
      const V = ((F = u.value) == null ? void 0 : F.mandatoryTargetParams) || [];
      return P(V).length;
    }), I = Se(() => {
      var F;
      const V = ((F = u.value) == null ? void 0 : F.optionalTargetParams) || [];
      return P(V).length;
    });
    return (V, F) => {
      const Le = o5("i18n");
      return ua(), $d(se(ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: ot(() => [
          xd("div", r5, [
            ge(se(L), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: ot(() => [
                ge(se(y), { shrink: "" }, {
                  default: ot(() => [
                    ge(se(Ad), {
                      icon: se(Ry),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ge(se(y), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: ot(() => [
                    Cd(pr(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (ua(), bd("div", {
              key: 0,
              class: s5(["pa-4 mb-4", m.value])
            }, [
              ge(se(L), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: ot(() => [
                  kd(ge(se(y), { tag: "h5" }, null, 512), [
                    [Le, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ge(se(y), { shrink: "" }, {
                    default: ot(() => [
                      ge(Bm, {
                        percentage: v.value,
                        size: 20,
                        "is-template-adapted": g.value,
                        "stroke-width": 2,
                        onClick: A
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              xd("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: pr(c.value)
              }, null, 8, c5),
              ge(se(Vd), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: F[0] || (F[0] = (fe) => V.$emit("edit-translation", i.value))
              }, {
                default: ot(() => [
                  Cd(pr(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : l.value ? (ua(), bd("div", l5, [
              ge(se(L), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: ot(() => [
                  kd(ge(se(y), { tag: "h5" }, null, 512), [
                    [Le, [
                      se(o)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ge(se(y), { shrink: "" }, {
                    default: ot(() => [
                      ge(se(Vd), { weight: "quiet" }, {
                        default: ot(() => [
                          ge(se(Ad), {
                            icon: se(Iy),
                            onClick: A
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
            ])) : (ua(), $d(se(Ye), { key: 2 }))
          ]),
          ge(Lm, a5(i5(V.$attrs)), null, 16),
          ge(n5, {
            active: C.value,
            "onUpdate:active": F[1] || (F[1] = (fe) => C.value = fe),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": D.value,
            "optional-missing-params-count": I.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const m5 = window.Vue.computed, p5 = window.Vuex.useStore, h5 = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: Wo },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = B(p5()), o = Te();
    return { scopeOptions: m5(() => [
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
}, w5 = window.Vue.resolveComponent, f5 = window.Vue.createVNode, _5 = window.Vue.openBlock, v5 = window.Vue.createElementBlock, S5 = { class: "translated-segment-card-header" };
function y5(e, t, n, o, s, a) {
  const i = w5("mw-button-group");
  return _5(), v5("div", S5, [
    f5(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const C5 = /* @__PURE__ */ E(h5, [["render", y5]]);
const Ht = window.Vue.unref, da = window.Vue.createVNode, hr = window.Vue.withCtx, k5 = window.Vue.openBlock, x5 = window.Vue.createBlock, b5 = window.Vue.computed, $5 = window.Vuex.useStore, Dd = window.Codex.CdxButton, Ed = window.Codex.CdxIcon, V5 = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { currentSourceSection: t, isSectionTitleSelected: n } = B(
      $5()
    ), o = b5(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (k5(), x5(Ht(L), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: hr(() => [
        da(Ht(Dd), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Ht(n),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: hr(() => [
            da(Ht(Ed), { icon: Ht(Cc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        da(Ht(Dd), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: hr(() => [
            da(Ht(Ed), { icon: Ht(as) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const A5 = window.Vue.useCssVars, me = window.Vue.createVNode, Td = window.Vue.resolveDirective, D5 = window.Vue.createElementVNode, wr = window.Vue.withDirectives, Z = window.Vue.unref, E5 = window.Vue.normalizeStyle, ga = window.Vue.openBlock, Ld = window.Vue.createElementBlock, T5 = window.Vue.createCommentVNode, L5 = window.Vue.normalizeClass, Fe = window.Vue.withCtx, B5 = window.Vue.toDisplayString, P5 = window.Vue.createTextVNode, Bd = window.Vue.createBlock, F5 = window.Vue.normalizeProps, M5 = window.Vue.guardReactiveProps, yt = window.Vue.computed, N5 = window.Vue.ref, I5 = window.Vue.inject, z5 = window.Vuex.useStore, U5 = window.Codex.CdxButton, fr = window.Codex.CdxIcon, R5 = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    A5((v) => ({
      "7a6abbb9": f.value
    }));
    const t = N5("sentence"), {
      isSectionTitleSelected: n,
      currentSourceSection: o,
      selectedContentTranslationUnit: s,
      targetLanguage: a
    } = B(z5()), i = yt(() => t.value === "sentence"), c = yt(
      () => o.value.subSections.find(
        (v) => v.sentences.some(
          (C) => {
            var A;
            return C.id === ((A = s.value) == null ? void 0 : A.id);
          }
        )
      )
    ), l = yt(() => {
      var v;
      return n.value ? o.value.mtProposedTranslationUsedForTitle : i.value ? (v = s.value) == null ? void 0 : v.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), d = I5("colors"), r = d.gray200, u = d.red600, g = yt(() => n.value ? o.value.translatedTitle : i.value ? s.value.translatedContent : c.value.translatedContent), m = yt(
      () => Kt.calculateScore(
        g.value,
        l.value,
        a.value
      )
    ), p = yt(
      () => Kt.getScoreStatus(m.value)
    ), h = yt(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = yt(() => ({
      failure: m.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), f = yt(
      () => w.value[p.value]
    );
    return (v, C) => {
      const A = Td("i18n"), P = Td("i18n-html");
      return ga(), Bd(Z(ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Fe(() => [
          me(Z(L), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Fe(() => [
              me(C5, {
                selection: t.value,
                "onUpdate:selection": C[0] || (C[0] = (D) => t.value = D)
              }, null, 8, ["selection"]),
              me(Z(y), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Fe(() => [
                  me(Z(L), { class: "ma-0" }, {
                    default: Fe(() => [
                      me(Z(y), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Fe(() => [
                          wr(D5("h5", null, null, 512), [
                            [A, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? wr((ga(), Ld("p", {
                            key: 0,
                            style: E5({ color: Z(u) })
                          }, null, 4)), [
                            [A, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : wr((ga(), Ld("p", {
                            key: 1,
                            class: L5(h.value)
                          }, null, 2)), [
                            [P, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      me(Z(y), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Fe(() => [
                          me(Z(L), { class: "ma-0 ms-2" }, {
                            default: Fe(() => [
                              me(Z(y), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Fe(() => [
                                  me(Z(fr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Z(jy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              me(Z(y), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Fe(() => [
                                  me(Z(xg), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: Z(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              me(Z(y), { shrink: "" }, {
                                default: Fe(() => [
                                  me(Z(fr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Z(Oy)
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
                  i.value ? (ga(), Bd(Z(U5), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: C[1] || (C[1] = (D) => v.$emit("edit-translation", g.value))
                  }, {
                    default: Fe(() => [
                      me(Z(fr), {
                        class: "me-1",
                        icon: Z(Sc)
                      }, null, 8, ["icon"]),
                      P5(" " + B5(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : T5("", !0)
                ]),
                _: 1
              }),
              me(Z(y), { class: "translated-segment-card__actions" }, {
                default: Fe(() => [
                  me(V5, F5(M5(v.$attrs)), null, 16)
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
}, O5 = window.Vuex.useStore, H5 = () => {
  const e = O5();
  return () => {
    const { currentTranslation: t } = e.state.application, { currentSourceSection: n, selectedContentTranslationUnit: o } = B(e);
    if (n.value)
      if (t && !o.value) {
        const { lastTranslatedContentTranslationUnit: s } = n.value;
        n.value.selectTranslationUnitById(
          (s == null ? void 0 : s.id) || 0
        ), e.dispatch("application/selectNextTranslationUnit");
      } else
        o.value || e.dispatch("application/selectTranslationUnitById", 0);
  };
}, Pm = window.Vuex.useStore, j5 = () => {
  const e = Pm(), { sourceLanguage: t, targetLanguage: n } = B(e);
  return () => b(void 0, null, function* () {
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
}, q5 = () => {
  const e = Pm(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = B(e), s = j5();
  return () => b(void 0, null, function* () {
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
}, G5 = window.Vuex.useStore, W5 = window.Vue.computed, X5 = (e) => {
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
}, K5 = () => {
  const e = G5(), { selectedContentTranslationUnit: t } = B(e), n = W5(
    () => t.value instanceof De
  );
  return () => {
    if (!t.value)
      return;
    const o = t.value.id, s = n.value ? document.getElementById(o) : document.querySelector(`[data-segmentid='${o}']`);
    s && X5(s);
  };
};
const re = window.Vue.unref, Me = window.Vue.createVNode, Ct = window.Vue.withCtx, Y5 = window.Vue.resolveDirective, Pd = window.Vue.createElementVNode, Q5 = window.Vue.withDirectives, J5 = window.Vue.toDisplayString, Z5 = window.Vue.createTextVNode, eV = window.Vue.renderList, tV = window.Vue.Fragment, jt = window.Vue.openBlock, Fd = window.Vue.createElementBlock, Fn = window.Vue.createBlock;
window.Vue.createCommentVNode;
const nV = window.Vue.normalizeClass, oV = window.Vue.normalizeStyle, sV = { class: "sx-sentence-selector__header-title mb-0" }, aV = { class: "sx-sentence-selector__section-contents px-4" }, Mn = window.Vue.computed, iV = window.Vue.nextTick, rV = window.Vue.onMounted, ma = window.Vue.ref, Md = window.Vue.watch, cV = window.Vuex.useStore, Nd = window.Codex.CdxButton, lV = window.Codex.CdxIcon, uV = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ma(!1), n = ma(!1), o = ma("100%"), s = cV(), {
      currentSourcePage: a,
      currentTargetPage: i,
      currentSourceSection: c,
      selectedContentTranslationUnit: l,
      currentMTProvider: d,
      sourceLanguage: r,
      targetLanguage: u
    } = B(s), g = Mn(
      () => s.state.application.translationDataLoadingCounter === 0
    ), m = Mn(
      () => {
        var ee;
        return (ee = c.value) == null ? void 0 : ee.isSelectedTranslationUnitTranslated;
      }
    ), p = Mn(() => {
      var ee;
      return (ee = c.value) == null ? void 0 : ee.subSections;
    }), h = Mn(
      () => {
        var ee;
        return (ee = c.value) == null ? void 0 : ee.selectedTranslationUnitOriginalContent;
      }
    ), w = Mn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), f = ct(), v = H5();
    q5()();
    const A = K5();
    rV(() => {
      Md(
        g,
        () => b(this, null, function* () {
          g.value && (yield iV(), v(), A());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Md(l, A);
    const P = () => s.dispatch("application/selectNextTranslationUnit"), D = () => s.dispatch("application/selectPreviousTranslationUnit"), I = () => {
      f({
        event_type: "editor_segment_add",
        translation_source_language: r.value,
        translation_target_language: u.value
      }), s.dispatch(
        "application/applyProposedTranslationToSelectedTranslationUnit"
      );
    }, V = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = we(), Le = () => {
      const { autoSavePending: ee } = s.state.application;
      if (ee) {
        Re.value = !0;
        return;
      }
      H();
    }, { fetchTranslationsByStatus: fe } = Aa(), H = () => b(this, null, function* () {
      fe("draft"), fn(null), s.dispatch("application/clearPendingSaveTranslationRequests"), yield F.push({ name: "dashboard" }), c.value.reset(), s.commit("application/setCurrentSourceSection", null), s.commit("application/setCurrentSectionSuggestion", null);
      const { currentTranslation: ee } = s.state.application;
      ee && (s.commit("application/setCurrentTranslationRestored", !1), s.commit("application/setCurrentTranslation", null));
    }), Y = () => {
      et.value || (t.value = !0, s.dispatch("application/translateSelectedTranslationUnitForAllProviders"));
    }, oe = (ee, ce) => {
      var Be;
      F.push({
        name: "sx-editor",
        state: {
          content: ee,
          originalContent: h.value,
          title: ((Be = i.value) == null ? void 0 : Be.title) || a.value.title,
          isInitialEdit: ce || null
        }
      });
    }, Ue = () => F.push({ name: "sx-publisher" }), _n = () => b(this, null, function* () {
      l.value ? yield s.dispatch("application/translateTranslationUnitById", {
        id: l.value.id,
        provider: d.value
      }) : yield s.dispatch("application/translateTranslationUnitById", {
        id: 0,
        provider: d.value
      });
    }), et = Mn(
      () => l.value instanceof De
    ), Re = ma(!1);
    return (ee, ce) => {
      const Be = Y5("i18n");
      return jt(), Fd("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: oV(w.value)
      }, [
        Me(re(L), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Ct(() => [
            Me(re(y), { shrink: "" }, {
              default: Ct(() => [
                Me(re(Nd), {
                  weight: "quiet",
                  class: "px-3",
                  onClick: Le
                }, {
                  default: Ct(() => [
                    Me(re(lV), { icon: re(xm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Me(re(y), {
              grow: "",
              class: "px-1"
            }, {
              default: Ct(() => [
                Q5(Pd("h4", sV, null, 512), [
                  [Be, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Me(re(y), {
              shrink: "",
              class: "px-3"
            }, {
              default: Ct(() => [
                Me(re(Nd), {
                  disabled: !(re(c) && re(c).isTranslated),
                  onClick: Ue
                }, {
                  default: Ct(() => [
                    Z5(J5(ee.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        g.value ? (jt(), Fn(re(L), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Ct(() => [
            Me(re(y), {
              dir: re(O.getDir)(re(r)),
              lang: re(r),
              class: "sx-sentence-selector__section"
            }, {
              default: Ct(() => [
                Me(K3),
                Pd("div", aV, [
                  (jt(!0), Fd(tV, null, eV(p.value, (te) => (jt(), Fn(O$, {
                    id: te.id,
                    key: `sub-section-${te.id}`,
                    "sub-section": te,
                    onBounceTranslation: V
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !et.value && m.value ? (jt(), Fn(R5, {
              key: 0,
              onEditTranslation: ce[0] || (ce[0] = (te) => oe(te, !1)),
              onSkipTranslation: P,
              onSelectPreviousSegment: D
            })) : et.value ? (jt(), Fn(g5, {
              key: 2,
              onEditTranslation: oe,
              onApplyTranslation: I,
              onSkipTranslation: P,
              onSelectPreviousSegment: D
            })) : (jt(), Fn(D$, {
              key: 1,
              class: nV({ "mb-0": !n.value }),
              onConfigureOptions: Y,
              onEditTranslation: ce[1] || (ce[1] = (te) => oe(te, !0)),
              onApplyTranslation: I,
              onSkipTranslation: P,
              onSelectPreviousSegment: D,
              onRetryTranslation: _n
            }, null, 8, ["class"]))
          ]),
          _: 1
        })) : (jt(), Fn(re(L), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Ct(() => [
            Me(re(Ye), { class: "mt-0" })
          ]),
          _: 1
        })),
        Me(M3, {
          active: t.value,
          "onUpdate:active": ce[2] || (ce[2] = (te) => t.value = te)
        }, null, 8, ["active"]),
        Me(p3, {
          modelValue: Re.value,
          "onUpdate:modelValue": ce[3] || (ce[3] = (te) => Re.value = te),
          onDiscardTranslation: H
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const dV = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: uV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, gV = window.Vue.resolveComponent, mV = window.Vue.createVNode, pV = window.Vue.normalizeClass, hV = window.Vue.openBlock, wV = window.Vue.createElementBlock;
function fV(e, t, n, o, s, a) {
  const i = gV("sx-sentence-selector");
  return hV(), wV("main", {
    class: pV(["sx-sentence-selector-view", a.classes])
  }, [
    mV(i)
  ], 2);
}
const _V = /* @__PURE__ */ E(dV, [["render", fV]]), vV = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, SV = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const yV = window.Vue.resolveDirective, pa = window.Vue.withDirectives, We = window.Vue.openBlock, kt = window.Vue.createElementBlock, ha = window.Vue.createCommentVNode, wa = window.Vue.Transition, cn = window.Vue.withCtx, Nn = window.Vue.createVNode, Ao = window.Vue.createElementVNode, ln = window.Vue.unref, CV = window.Vue.renderList, kV = window.Vue.Fragment, xV = window.Vue.normalizeClass, Id = window.Vue.createBlock, bV = window.Vue.toDisplayString, $V = window.Vue.createTextVNode, VV = { class: "sx-quick-tutorial" }, AV = { class: "sx-quick-tutorial__main-point py-9 px-6" }, DV = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, EV = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, TV = { class: "sx-quick-tutorial__illustration" }, LV = ["innerHTML"], BV = ["innerHTML"], PV = { class: "sx-quick-tutorial__step-indicator py-3" }, FV = ["onClick"], MV = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, NV = {
  key: "secondary-point-1",
  class: "ma-0"
}, IV = {
  key: "secondary-point-2",
  class: "ma-0"
}, zV = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, zd = window.Vue.ref, Ud = window.Codex.CdxButton, UV = window.Codex.CdxIcon, RV = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = zd(2), n = zd(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (c) => c === n.value, a = we(), i = () => a.push({ name: "sx-sentence-selector" });
    return (c, l) => {
      const d = yV("i18n");
      return We(), kt("section", VV, [
        Nn(ln(L), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: cn(() => [
            Ao("section", AV, [
              Nn(wa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: cn(() => [
                  s(1) ? pa((We(), kt("h2", DV, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? pa((We(), kt("h2", EV, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ha("", !0)
                ]),
                _: 1
              })
            ]),
            Ao("section", TV, [
              Nn(wa, { name: "mw-ui-animation-slide-left" }, {
                default: cn(() => [
                  s(1) ? (We(), kt("div", {
                    key: "illustration-1",
                    innerHTML: ln(SV)
                  }, null, 8, LV)) : s(2) ? (We(), kt("div", {
                    key: "illustration-2",
                    innerHTML: ln(vV)
                  }, null, 8, BV)) : ha("", !0)
                ]),
                _: 1
              })
            ]),
            Ao("div", PV, [
              (We(!0), kt(kV, null, CV(t.value, (r) => (We(), kt("span", {
                key: `dot-${r}`,
                class: xV(["dot mx-1", { "dot-active": s(r) }]),
                role: "button",
                onClick: (u) => n.value = r
              }, null, 10, FV))), 128))
            ]),
            Ao("section", MV, [
              Nn(wa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: cn(() => [
                  s(1) ? pa((We(), kt("h3", NV, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? pa((We(), kt("h3", IV, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ha("", !0)
                ]),
                _: 1
              })
            ]),
            Ao("div", zV, [
              Nn(wa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: cn(() => [
                  s(1) ? (We(), Id(ln(Ud), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": c.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: cn(() => [
                      Nn(ln(UV), { icon: ln(as) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (We(), Id(ln(Ud), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: i
                  }, {
                    default: cn(() => [
                      $V(bV(c.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
const OV = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: RV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, HV = window.Vue.resolveComponent, jV = window.Vue.createVNode, qV = window.Vue.normalizeClass, GV = window.Vue.openBlock, WV = window.Vue.createElementBlock;
function XV(e, t, n, o, s, a) {
  const i = HV("sx-quick-tutorial");
  return GV(), WV("main", {
    class: qV(["sx-quick-tutorial-view", a.classes])
  }, [
    jV(i)
  ], 2);
}
const KV = /* @__PURE__ */ E(OV, [["render", XV]]);
const Rd = window.Vue.ref, YV = window.Vue.onMounted;
function QV(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = q.getPageUrl(t, o.title), o.target = "_blank";
}
const JV = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: _0 },
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
    const t = Rd(null), n = Rd(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return YV(() => {
      n.value = 2 * o(), QV(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, ZV = window.Vue.resolveDirective, Od = window.Vue.createElementVNode, eA = window.Vue.withDirectives, tA = window.Vue.resolveComponent, nA = window.Vue.withCtx, oA = window.Vue.createVNode, sA = window.Vue.openBlock, aA = window.Vue.createElementBlock, iA = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, rA = { class: "sx-editor__original-content-panel__header mb-2" }, cA = ["lang", "dir", "innerHTML"];
function lA(e, t, n, o, s, a) {
  const i = tA("mw-expandable-content"), c = ZV("i18n");
  return sA(), aA("section", iA, [
    eA(Od("h5", rA, null, 512), [
      [c, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    oA(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: nA(() => [
        Od("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, cA)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const uA = /* @__PURE__ */ E(JV, [["render", lA]]), dA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const _r = window.Vue.computed, gA = window.Vuex.useStore, mA = {
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
    const { targetLanguage: t } = B(gA()), n = _r(
      () => Kt.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = _r(() => {
      const a = Kt.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = _r(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: dA,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, Do = window.Vue.createElementVNode, Hd = window.Vue.resolveDirective, vr = window.Vue.withDirectives, pA = window.Vue.normalizeClass, hA = window.Vue.openBlock, wA = window.Vue.createElementBlock, fA = window.Vue.createCommentVNode, _A = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, vA = { class: "sx-editor__feedback-overlay-content px-4" }, SA = ["innerHTML"], yA = { class: "sx-editor__feedback-overlay-content__title" }, CA = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function kA(e, t, n, o, s, a) {
  const i = Hd("i18n"), c = Hd("i18n-html");
  return n.showFeedback ? (hA(), wA("div", _A, [
    Do("div", vA, [
      Do("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, SA),
      vr(Do("h2", yA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      vr(Do("p", CA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      vr(Do("p", {
        class: pA(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [c, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : fA("", !0);
}
const xA = /* @__PURE__ */ E(mA, [["render", kA]]);
const Sr = window.Vue.ref, bA = window.Vue.computed, $A = window.Vuex.useStore, VA = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: xA,
    MwRow: L,
    SxEditorOriginalContent: uA,
    VisualEditor: sy,
    MwSpinner: Ye
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Sr(!1), n = we(), o = $A(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: c, content: l, originalContent: d, title: r } = history.state, u = Sr(null), g = Sr(!1), m = ct(), { targetLanguage: p, sourceLanguage: h } = B(o), w = bA(
      () => Kt.calculateScore(
        u.value,
        l,
        p.value
      )
    ), f = (v) => b(this, null, function* () {
      u.value = v, g.value = !0;
      const C = new Promise((P) => setTimeout(P, 2e3));
      let A = Promise.resolve();
      i ? o.commit(
        "application/setCurrentSourceSectionEditedTranslation",
        v
      ) : (w.value === 0 && c && m({
        event_type: "editor_segment_add",
        translation_source_language: h.value,
        translation_target_language: p.value
      }), A = o.dispatch(
        "application/applyEditedTranslationToSelectedTranslationUnit",
        v
      )), yield Promise.all([C, A]), g.value = !1, a();
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
}, Eo = window.Vue.resolveComponent, yr = window.Vue.openBlock, Cr = window.Vue.createBlock, jd = window.Vue.createCommentVNode, qd = window.Vue.createVNode, AA = window.Vue.createElementVNode, DA = window.Vue.withCtx, EA = { class: "sx-editor__editing-surface-container grow" };
function TA(e, t, n, o, s, a) {
  const i = Eo("sx-editor-original-content"), c = Eo("mw-spinner"), l = Eo("edit-complete-feedback"), d = Eo("visual-editor"), r = Eo("mw-row");
  return yr(), Cr(r, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: DA(() => [
      o.originalContent ? (yr(), Cr(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : jd("", !0),
      o.editorReady ? jd("", !0) : (yr(), Cr(c, { key: 1 })),
      AA("div", EA, [
        qd(l, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        qd(d, {
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
const LA = /* @__PURE__ */ E(VA, [["render", TA]]);
const BA = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: LA
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
}, PA = window.Vue.resolveComponent, FA = window.Vue.createVNode, MA = window.Vue.normalizeClass, NA = window.Vue.openBlock, IA = window.Vue.createElementBlock;
function zA(e, t, n, o, s, a) {
  const i = PA("sx-editor");
  return NA(), IA("main", {
    class: MA(["sx-editor-view", a.classes])
  }, [
    FA(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const UA = /* @__PURE__ */ E(BA, [["render", zA]]);
const st = window.Vue.unref, un = window.Vue.createVNode, To = window.Vue.withCtx, RA = window.Vue.resolveDirective, OA = window.Vue.withDirectives, HA = window.Vue.openBlock, jA = window.Vue.createBlock, Gd = window.Codex.CdxButton, Wd = window.Codex.CdxIcon, qA = {
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
      const a = RA("i18n");
      return HA(), jA(st(L), { class: "ma-0 sx-publisher__header" }, {
        default: To(() => [
          un(st(y), {
            shrink: "",
            class: "me-2"
          }, {
            default: To(() => [
              un(st(Gd), {
                class: "px-3",
                weight: "quiet",
                onClick: n
              }, {
                default: To(() => [
                  un(st(Wd), { icon: st(Va) }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          OA(un(st(y), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          un(st(y), { shrink: "" }, {
            default: To(() => [
              un(st(Gd), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: To(() => [
                  un(st(Wd), { icon: st(My) }, null, 8, ["icon"])
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
}, GA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, WA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Xd = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const XA = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: Ze, MwRow: L, MwCol: y },
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
        svg: GA,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: WA,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Xd,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Xd,
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
}, kr = window.Vue.createElementVNode, Kd = window.Vue.toDisplayString, xr = window.Vue.resolveComponent, br = window.Vue.withCtx, Yd = window.Vue.createVNode, KA = window.Vue.openBlock, YA = window.Vue.createBlock, QA = window.Vue.createCommentVNode, JA = ["innerHTML"], ZA = ["textContent"], eD = ["textContent"];
function tD(e, t, n, o, s, a) {
  const i = xr("mw-col"), c = xr("mw-row"), l = xr("mw-dialog");
  return n.active ? (KA(), YA(l, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: br(() => [
      Yd(c, { class: "ma-4" }, {
        default: br(() => [
          Yd(i, null, {
            default: br(() => [
              kr("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, JA),
              kr("h2", {
                textContent: Kd(a.animationTitle)
              }, null, 8, ZA),
              kr("p", {
                class: "ma-0",
                textContent: Kd(a.animationSubtitle)
              }, null, 8, eD)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : QA("", !0);
}
const nD = /* @__PURE__ */ E(XA, [["render", tD]]);
const Ae = window.Vue.unref, Xe = window.Vue.createVNode, xt = window.Vue.withCtx, oD = window.Vue.resolveDirective, sD = window.Vue.withDirectives, Qd = window.Vue.toDisplayString, aD = window.Vue.createTextVNode, $r = window.Vue.openBlock, Jd = window.Vue.createElementBlock, iD = window.Vue.createCommentVNode, Fm = window.Vue.createElementVNode, rD = window.Vue.createBlock, cD = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, lD = ["src"], uD = ["textContent"], dD = /* @__PURE__ */ Fm("p", { class: "mt-0" }, null, -1), gD = window.Vue.computed, mD = window.Vue.inject, pD = window.Vue.ref, Zd = window.Codex.CdxButton, hD = window.Codex.CdxIcon, wD = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Ag,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = pD(""), s = () => n("close"), a = () => n("publish", o.value), i = mD("breakpoints"), c = gD(() => i.value.mobile);
    return (l, d) => {
      const r = oD("i18n");
      return e.active && e.captchaDetails ? ($r(), rD(Ae(Ze), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: xt(() => [
          Xe(Ae(L), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: xt(() => [
              Xe(Ae(y), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: xt(() => [
                  Xe(Ae(Zd), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    onClick: s
                  }, {
                    default: xt(() => [
                      Xe(Ae(hD), { icon: Ae(Va) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              sD(Xe(Ae(y), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Xe(Ae(y), {
                shrink: "",
                class: "justify-center"
              }, {
                default: xt(() => [
                  Xe(Ae(Zd), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: xt(() => [
                      aD(Qd(l.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Xe(Ae(Xo))
        ]),
        default: xt(() => [
          Fm("div", cD, [
            e.captchaDetails.type === "image" ? ($r(), Jd("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, lD)) : ($r(), Jd("p", {
              key: 1,
              textContent: Qd(e.captchaDetails.question)
            }, null, 8, uD)),
            dD,
            Xe(Ae(L), { class: "ma-0" }, {
              default: xt(() => [
                Xe(Ae(y), null, {
                  default: xt(() => [
                    Xe(Ae(nc), {
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
      }, 8, ["fullscreen"])) : iD("", !0);
    };
  }
};
const dn = window.Vue.unref, Lo = window.Vue.createVNode, fa = window.Vue.withCtx, gn = window.Vue.createElementVNode, fD = window.Vue.resolveDirective, _D = window.Vue.withDirectives, vD = window.Vue.renderList, eg = window.Vue.Fragment, Vr = window.Vue.openBlock, tg = window.Vue.createElementBlock, SD = window.Vue.toDisplayString, yD = window.Vue.normalizeClass, CD = window.Vue.createBlock, kD = { class: "mw-ui-dialog__header" }, xD = { class: "row ma-0 px-4 py-3" }, bD = { class: "col shrink justify-center" }, $D = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, VD = { class: "mb-0" }, AD = { class: "pa-4" }, DD = ["textContent"], ED = window.Vuex.useStore, Bo = window.Vue.computed, TD = window.Codex.CdxButton, LD = window.Codex.CdxIcon, BD = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ED(), s = Bo(() => o.state.application.publishTarget), a = Bo(() => o.state.translator.isAnon), i = Te(), { currentSourceSection: c } = B(o), l = Bo(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), d = Bo(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = Bo(() => [
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
      const w = fD("i18n");
      return Vr(), CD(dn(Ze), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: g
      }, {
        header: fa(() => [
          gn("div", kD, [
            gn("div", xD, [
              gn("div", bD, [
                Lo(dn(TD), {
                  class: "pa-0",
                  weight: "quiet",
                  onClick: g
                }, {
                  default: fa(() => [
                    Lo(dn(LD), { icon: dn(xm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              gn("div", $D, [
                _D(gn("h4", VD, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Lo(dn(Xo))
          ])
        ]),
        default: fa(() => [
          gn("div", AD, [
            Lo(dn(kg), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: fa(() => [
                (Vr(!0), tg(eg, null, vD(r.value, (f, v) => (Vr(), tg(eg, {
                  key: f.label
                }, [
                  Lo(dn(ya), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  gn("p", {
                    class: yD(["complementary ms-7 mt-0", u(v)]),
                    textContent: SD(f.details)
                  }, null, 10, DD)
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
const Ke = window.Vue.unref, mn = window.Vue.createVNode, PD = window.Vue.resolveDirective, ng = window.Vue.withDirectives, _a = window.Vue.openBlock, og = window.Vue.createElementBlock, FD = window.Vue.createCommentVNode, sg = window.Vue.toDisplayString, Ar = window.Vue.createElementVNode, In = window.Vue.withCtx, ag = window.Vue.createBlock, MD = window.Vue.Fragment, ND = window.Vue.normalizeClass, ID = { class: "sx-publisher__review-info__content" }, zD = {
  key: 0,
  class: "complementary ma-0"
}, UD = ["textContent"], RD = ["textContent"], qt = window.Vue.computed, ig = window.Vue.ref, OD = window.Vue.watch, rg = window.Codex.CdxButton, Dr = window.Codex.CdxIcon, HD = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ig(0), o = ig(null);
    OD(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = qt(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = qt(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = qt(() => {
      switch (a.value) {
        case "warning":
          return km;
        case "error":
          return By;
        default:
          return Ny;
      }
    }), c = qt(() => a.value === "default"), l = qt(
      () => c.value ? "notice" : a.value
    ), d = qt(
      () => `sx-publisher__review-info--${l.value}`
    ), r = Te(), u = qt(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = qt(
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
      const f = PD("i18n-html");
      return _a(), ag(Ke(Sw), {
        type: l.value,
        class: ND(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: c.value
      }, {
        icon: In(() => [
          mn(Ke(Dr), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: In(() => [
          Ar("div", ID, [
            a.value === "default" ? ng((_a(), og("p", zD, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : (_a(), og(MD, { key: 1 }, [
              Ar("h5", {
                textContent: sg(g.value)
              }, null, 8, UD),
              Ar("p", {
                textContent: sg(u.value)
              }, null, 8, RD),
              mn(Ke(L), {
                justify: "between",
                class: "ma-0"
              }, {
                default: In(() => [
                  ng(mn(Ke(y), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (_a(), ag(Ke(y), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: In(() => [
                      mn(Ke(rg), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        onClick: m
                      }, {
                        default: In(() => [
                          mn(Ke(Dr), { icon: Ke(Cc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      mn(Ke(rg), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        onClick: p
                      }, {
                        default: In(() => [
                          mn(Ke(Dr), { icon: Ke(as) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : FD("", !0)
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
}, jD = window.Vue.computed, zn = window.Vue.ref, qD = window.Vue.watch, GD = (e, t, n, o) => b(void 0, null, function* () {
  if (n.value) {
    t.value = !1;
    return;
  }
  const {
    currentSourceSection: s,
    sourceLanguage: a,
    targetLanguage: i,
    currentSourcePage: c
  } = B(e), l = e.getters["application/getTargetPageTitleForPublishing"], d = e.getters["application/isSandboxTarget"], r = c.value.title, u = new mw.Title(r), g = mw.config.get("wgNamespaceIds");
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
}), WD = (e) => {
  const t = zn(!1), n = zn("pending"), o = zn(!1), s = zn(!1), a = zn(null), i = zn([]), c = jD(
    () => i.value.some((u) => u.isError)
  );
  return qD(o, (u) => {
    u || (i.value = []);
  }), {
    captchaDetails: a,
    captchaDialogOn: s,
    configureTranslationOptions: () => o.value = !0,
    doPublish: (u = null) => b(void 0, null, function* () {
      var h;
      n.value = "pending", t.value = !0;
      let g;
      try {
        g = yield e.dispatch("translator/publishTranslation", {
          captchaId: (h = a.value) == null ? void 0 : h.id,
          captchaAnswer: u
        });
      } catch (w) {
        if (w instanceof qn) {
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
        () => GD(
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
}, XD = window.Vue.computed, KD = window.Vuex.useStore, YD = () => {
  const e = KD(), t = we(), {
    currentSourcePage: n,
    currentTargetPage: o,
    currentSourceSection: s
  } = B(e), a = XD(
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
const K = window.Vue.unref, ye = window.Vue.createVNode, QD = window.Vue.resolveDirective, Po = window.Vue.createElementVNode, JD = window.Vue.withDirectives, Un = window.Vue.withCtx, ZD = window.Vue.isRef, eE = window.Vue.openBlock, tE = window.Vue.createElementBlock, nE = { class: "sx-publisher" }, oE = { class: "sx-publisher__publish-panel pa-4" }, sE = { class: "mb-2" }, aE = ["innerHTML"], iE = { class: "sx-publisher__section-preview pa-5" }, rE = ["innerHTML"], cg = window.Vue.computed, cE = window.Vue.onMounted, lE = window.Vuex.useStore, lg = window.Codex.CdxButton, ug = window.Codex.CdxIcon, uE = {
  __name: "SXPublisher",
  setup(e) {
    const t = lE(), { currentSourceSection: n } = B(t), o = cg(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.title;
    }), s = Te(), a = cg(() => t.getters["application/isSandboxTarget"] ? s.i18n(
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
    } = WD(t);
    cE(() => b(this, null, function* () {
      const f = yield t.dispatch("translator/validateMT");
      f && p.value.push(f);
    }));
    const w = YD();
    return (f, v) => {
      const C = QD("i18n");
      return eE(), tE("section", nE, [
        ye(qA, {
          "is-publishing-disabled": K(u),
          onPublishTranslation: K(d)
        }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
        Po("div", oE, [
          JD(Po("h5", sE, null, 512), [
            [C, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Po("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, aE),
          ye(K(L), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Un(() => [
              ye(K(y), { shrink: "" }, {
                default: Un(() => [
                  ye(K(lg), {
                    weight: "quiet",
                    onClick: K(l)
                  }, {
                    default: Un(() => [
                      ye(K(ug), { icon: K(Hy) }, null, 8, ["icon"])
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
        ye(HD, { "publish-feedback-messages": K(p) }, null, 8, ["publish-feedback-messages"]),
        Po("section", iE, [
          ye(K(L), { class: "pb-5 ma-0" }, {
            default: Un(() => [
              ye(K(y), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              ye(K(y), { shrink: "" }, {
                default: Un(() => [
                  ye(K(lg), {
                    weight: "quiet",
                    onClick: K(w)
                  }, {
                    default: Un(() => [
                      ye(K(ug), { icon: K(Sc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Po("div", {
            innerHTML: K(n).translationHtml
          }, null, 8, rE)
        ]),
        ye(BD, {
          active: K(m),
          "onUpdate:active": v[0] || (v[0] = (A) => ZD(m) ? m.value = A : null)
        }, null, 8, ["active"]),
        ye(wD, {
          active: K(c),
          "captcha-details": K(i),
          onClose: K(g),
          onPublish: v[1] || (v[1] = (A) => K(d)(A))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        ye(nD, {
          active: K(r),
          status: K(h)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const dE = {
  name: "SxPublisherView",
  components: {
    SxPublisher: uE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, gE = window.Vue.resolveComponent, mE = window.Vue.createVNode, pE = window.Vue.normalizeClass, hE = window.Vue.openBlock, wE = window.Vue.createElementBlock;
function fE(e, t, n, o, s, a) {
  const i = gE("sx-publisher");
  return hE(), wE("main", {
    class: pE(["sx-publisher-view", a.classes])
  }, [
    mE(i)
  ], 2);
}
const _E = /* @__PURE__ */ E(dE, [["render", fE]]);
const vE = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: oc, MwIcon: he, MwRow: L, MwCol: y },
  props: {
    suggestion: {
      type: Gn,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Th, mwIconLanguage: Mh, mwIconArticle: tc, getDir: O.getDir };
  }
}, va = window.Vue.resolveComponent, Gt = window.Vue.createVNode, pn = window.Vue.withCtx, Er = window.Vue.toDisplayString, Tr = window.Vue.createElementVNode, SE = window.Vue.openBlock, yE = window.Vue.createBlock, CE = ["textContent"], kE = ["textContent"], xE = ["textContent"];
function bE(e, t, n, o, s, a) {
  const i = va("mw-thumbnail"), c = va("mw-col"), l = va("mw-icon"), d = va("mw-row");
  return SE(), yE(d, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: pn(() => [
      Gt(c, { shrink: "" }, {
        default: pn(() => [
          Gt(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      Gt(c, { class: "ms-4" }, {
        default: pn(() => [
          Gt(d, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: pn(() => [
              Gt(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: pn(() => [
                  Tr("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: Er(n.suggestion.title)
                  }, null, 8, CE)
                ]),
                _: 1
              }),
              Gt(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: pn(() => [
                  Tr("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: Er(n.suggestion.description)
                  }, null, 8, kE)
                ]),
                _: 1
              }),
              Gt(c, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: pn(() => [
                  Gt(l, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  Tr("small", {
                    textContent: Er(n.suggestion.langLinksCount)
                  }, null, 8, xE)
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
const Mm = /* @__PURE__ */ E(vE, [["render", bE]]), $E = window.Vue.computed, dg = window.Vue.ref, VE = window.Vue.watch, AE = (e, t) => {
  const o = dg([]), s = dg(!1), a = $E(
    () => o.value.slice(0, 4)
  ), i = lc(() => b(void 0, null, function* () {
    try {
      o.value = yield Yo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return VE(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const DE = window.Vue.computed, EE = window.Vuex.useStore, TE = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: Mm, MwCard: ze, MwSpinner: Ye },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = B(
      EE()
    ), o = DE(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = AE(
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
}, Lr = window.Vue.resolveComponent, Fo = window.Vue.openBlock, Br = window.Vue.createBlock, LE = window.Vue.createCommentVNode, BE = window.Vue.resolveDirective, PE = window.Vue.withDirectives, gg = window.Vue.createElementBlock, FE = window.Vue.renderList, ME = window.Vue.Fragment, NE = window.Vue.withCtx, IE = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function zE(e, t, n, o, s, a) {
  const i = Lr("mw-spinner"), c = Lr("sx-search-article-suggestion"), l = Lr("mw-card"), d = BE("i18n");
  return Fo(), Br(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: NE(() => [
      o.searchResultsLoading ? (Fo(), Br(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? PE((Fo(), gg("p", IE, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : LE("", !0),
      (Fo(!0), gg(ME, null, FE(o.searchResultsSlice, (r) => (Fo(), Br(c, {
        key: r.pageid,
        suggestion: r,
        onClick: (u) => e.$emit("suggestion-clicked", r)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const UE = /* @__PURE__ */ E(TE, [["render", zE]]);
const RE = window.Vuex.mapState, OE = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: Mm, MwCard: ze },
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
  computed: le({}, RE({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, HE = window.Vue.toDisplayString, jE = window.Vue.createElementVNode, qE = window.Vue.renderList, GE = window.Vue.Fragment, Pr = window.Vue.openBlock, WE = window.Vue.createElementBlock, mg = window.Vue.resolveComponent, pg = window.Vue.createBlock, hg = window.Vue.withCtx, XE = ["textContent"];
function KE(e, t, n, o, s, a) {
  const i = mg("sx-search-article-suggestion"), c = mg("mw-card");
  return Pr(), pg(c, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: hg(() => [
      jE("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: HE(n.cardTitle)
      }, null, 8, XE)
    ]),
    default: hg(() => [
      (Pr(!0), WE(GE, null, qE(n.suggestions, (l) => (Pr(), pg(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (d) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const wg = /* @__PURE__ */ E(OE, [["render", KE]]), YE = window.Vue.computed, QE = (e, t) => YE(() => {
  const o = {
    value: "other",
    props: {
      icon: zh,
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
}), JE = window.Vue.computed, ZE = (e, t, n) => JE(() => {
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
const eT = window.Vue.resolveDirective, tT = window.Vue.createElementVNode, Fr = window.Vue.withDirectives, ae = window.Vue.unref, Mo = window.Vue.withCtx, at = window.Vue.createVNode, No = window.Vue.openBlock, fg = window.Vue.createBlock, nT = window.Vue.createCommentVNode, Mr = window.Vue.createElementBlock, oT = window.Vue.Fragment, sT = window.Vue.vShow, aT = { class: "sx-article-search" }, iT = { class: "mb-0" }, rT = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, Io = window.Vue.ref, cT = window.Vue.onMounted, Nr = window.Vue.computed, _g = window.Vue.watch, lT = window.Vue.inject, uT = window.Vuex.useStore, dT = window.Codex.CdxButton, gT = window.Codex.CdxIcon, mT = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Io(""), n = Io(!1), o = Io(null), s = Io(!1), a = Io([]), i = uT(), { sourceLanguage: c, targetLanguage: l } = B(i), { supportedLanguageCodes: d } = es(), r = ZE(
      c,
      l,
      a
    ), u = QE(
      c,
      r
    ), g = we(), { fetchAllTranslations: m } = Aa();
    cT(() => b(this, null, function* () {
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
    _g(c, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const v = ct();
    _g(t, () => {
      n.value || (n.value = !0, v({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: l.value
      }));
    });
    const C = () => {
      s.value = !1;
    }, A = (H) => {
      s.value = !1, a.value.push(H), f(H);
    }, P = Nr(
      () => i.getters["mediawiki/getRecentlyEditedPages"]
    ), D = Nr(() => i.getters["mediawiki/getNearbyPages"]), I = lT("breakpoints"), V = Nr(() => I.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: F,
      startNearbySectionTranslation: Le,
      startSearchResultSectionTranslation: fe
    } = vc();
    return (H, Y) => {
      const oe = eT("i18n");
      return No(), Mr("section", aT, [
        at(ae(L), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Mo(() => [
            at(ae(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Mo(() => [
                Fr(tT("h5", iT, null, 512), [
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
              default: Mo(() => [
                at(ae(dT), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  onClick: p
                }, {
                  default: Mo(() => [
                    at(ae(gT), { icon: ae(Va) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        at(ae(nc), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": Y[0] || (Y[0] = (Ue) => t.value = Ue),
          "icon-size": 20,
          icon: ae(Sg),
          placeholder: H.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        at(ae(Wo), {
          class: "sx-article-search__language-button-group",
          items: ae(u),
          active: ae(c),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? nT("", !0) : (No(), Mr(oT, { key: 0 }, [
          P.value && P.value.length ? (No(), fg(wg, {
            key: 0,
            "card-title": H.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: P.value,
            onSuggestionClicked: ae(F)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : D.value && D.value.length ? (No(), fg(wg, {
            key: 1,
            "card-title": H.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: D.value,
            onSuggestionClicked: ae(Le)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : Fr((No(), Mr("p", rT, null, 512)), [
            [oe, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Fr(at(UE, {
          "search-input": t.value,
          onSuggestionClicked: ae(fe)
        }, null, 8, ["search-input", "onSuggestionClicked"]), [
          [sT, !!t.value]
        ]),
        at(ae(Ze), {
          value: s.value,
          "onUpdate:value": Y[1] || (Y[1] = (Ue) => s.value = Ue),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: V.value,
          header: V.value,
          "overlay-opacity": 0,
          title: H.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: C
        }, {
          default: Mo(() => [
            at(ae(Vm), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ae(d),
              suggestions: ae(r),
              placeholder: H.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: A,
              onClose: C
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const pT = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: mT
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, hT = window.Vue.resolveComponent, wT = window.Vue.createVNode, fT = window.Vue.normalizeClass, _T = window.Vue.openBlock, vT = window.Vue.createElementBlock;
function ST(e, t, n, o, s, a) {
  const i = hT("sx-article-search");
  return _T(), vT("main", {
    class: fT(["sx-article-search-view", a.classes])
  }, [
    wT(i)
  ], 2);
}
const yT = /* @__PURE__ */ E(pT, [["render", ST]]), CT = window.Vuex.useStore, Nm = [
  {
    path: "",
    name: "dashboard",
    component: xu,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: yT,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: r2,
    props: (e) => ({
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: Lb,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: i3,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: KV,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: _V,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: UA,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: _E,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: xu,
    meta: { workflowStep: 0 }
  }
], Vc = xv({
  history: k1(),
  routes: Nm
});
Vc.beforeEach((e, t, n) => {
  const o = CT();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || $g.assertUser().catch((c) => {
    c instanceof qn && o.commit("application/setIsLoginDialogOn", !0);
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
    const c = Math.ceil(a) - 1, l = Nm.find(
      (d) => d.meta.workflowStep === c
    );
    n({ name: l.name });
    return;
  }
  n();
});
Vc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const kT = window.Vue.createApp, xT = mw.config.get("wgUserLanguage"), bT = "en", $T = mw.messages.values || {}, Jt = kT(Y0);
Jt.config.globalProperties.$incompleteVersion = !0;
const VT = NS();
Jt.use(VT);
Jt.use(Vc);
Jt.use(q_);
Jt.use(A0);
Jt.use(V0);
const AT = Wv({
  locale: xT,
  finalFallback: bT,
  messages: $T,
  wikilinks: !0
});
Jt.use(AT);
Jt.mount("#contenttranslation");
