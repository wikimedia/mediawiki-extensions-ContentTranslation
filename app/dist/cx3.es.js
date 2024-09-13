/*@nomin*/
var yp = Object.defineProperty, Cp = Object.defineProperties;
var kp = Object.getOwnPropertyDescriptors;
var Jl = Object.getOwnPropertySymbols;
var xp = Object.prototype.hasOwnProperty, bp = Object.prototype.propertyIsEnumerable;
var Zl = (e, t, n) => t in e ? yp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ke = (e, t) => {
  for (var n in t || (t = {}))
    xp.call(t, n) && Zl(e, n, t[n]);
  if (Jl)
    for (var n of Jl(t))
      bp.call(t, n) && Zl(e, n, t[n]);
  return e;
}, Fe = (e, t) => Cp(e, kp(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (c) => {
    try {
      l(n.next(c));
    } catch (g) {
      s(g);
    }
  }, i = (c) => {
    try {
      l(n.throw(c));
    } catch (g) {
      s(g);
    }
  }, l = (c) => c.done ? o(c.value) : Promise.resolve(c.value).then(a, i);
  l((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const { CdxButton: e, CdxIcon: t, CdxDialog: n } = require("../codex.js");
  window.Codex = { CdxButton: e, CdxIcon: t, CdxDialog: n };
}
const P = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, $p = {
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
}, Vp = window.Vue.toDisplayString, Xa = window.Vue.openBlock, Ka = window.Vue.createElementBlock, Dp = window.Vue.createCommentVNode, ec = window.Vue.createElementVNode, Ap = window.Vue.normalizeClass, Ep = ["width", "height", "aria-labelledby"], Tp = ["id"], Lp = ["fill"], Bp = ["d"];
function Pp(e, t, n, o, s, a) {
  return Xa(), Ka("span", {
    class: Ap(["mw-ui-icon notranslate", a.classes])
  }, [
    (Xa(), Ka("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Xa(), Ka("title", {
        key: 0,
        id: n.iconName
      }, Vp(n.iconName), 9, Tp)) : Dp("", !0),
      ec("g", { fill: n.iconColor }, [
        ec("path", { d: a.iconImagePath }, null, 8, Bp)
      ], 8, Lp)
    ], 8, Ep))
  ], 2);
}
const me = /* @__PURE__ */ P($p, [["render", Pp]]);
const Fp = {
  name: "MwButton",
  components: {
    MwIcon: me
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
}, Mp = window.Vue.renderSlot, Np = window.Vue.resolveComponent, tc = window.Vue.normalizeClass, xs = window.Vue.openBlock, Ya = window.Vue.createBlock, Qa = window.Vue.createCommentVNode, Up = window.Vue.toDisplayString, Ip = window.Vue.createElementBlock, zp = window.Vue.toHandlerKey, Rp = window.Vue.withModifiers, Op = window.Vue.mergeProps, Hp = window.Vue.createElementVNode, jp = window.Vue.resolveDynamicComponent, qp = window.Vue.withCtx, Gp = { class: "mw-ui-button__content" }, Wp = ["textContent"];
function Xp(e, t, n, o, s, a) {
  const i = Np("mw-icon");
  return xs(), Ya(jp(a.component), {
    class: tc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: qp(() => [
      Mp(e.$slots, "default", {}, () => [
        Hp("span", Gp, [
          n.icon ? (xs(), Ya(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: tc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Qa("", !0),
          !a.isIcon && n.label ? (xs(), Ip("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Up(n.label)
          }, null, 8, Wp)) : Qa("", !0),
          n.indicator ? (xs(), Ya(i, Op({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [zp(a.indicatorClickEvent)]: t[0] || (t[0] = Rp((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Qa("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const De = /* @__PURE__ */ P(Fp, [["render", Xp]]);
const Kp = {
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
}, Yp = window.Vue.renderList, Qp = window.Vue.Fragment, Ja = window.Vue.openBlock, nc = window.Vue.createElementBlock, Jp = window.Vue.resolveComponent, Zp = window.Vue.withModifiers, eh = window.Vue.mergeProps, th = window.Vue.createBlock, nh = { class: "row mw-ui-button-group ma-0 pa-0" };
function oh(e, t, n, o, s, a) {
  const i = Jp("mw-button");
  return Ja(), nc("div", nh, [
    (Ja(!0), nc(Qp, null, Yp(n.items, (l) => (Ja(), th(i, eh({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Zp((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ss = /* @__PURE__ */ P(Kp, [["render", oh]]);
const sh = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: ss },
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
}, ah = window.Vue.renderSlot, ih = window.Vue.resolveComponent, rh = window.Vue.createVNode, lh = window.Vue.createElementVNode, ch = window.Vue.openBlock, uh = window.Vue.createElementBlock, dh = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, gh = { class: "col-12 ma-0 pa-0" };
function mh(e, t, n, o, s, a) {
  const i = ih("mw-button-group");
  return ch(), uh("footer", dh, [
    lh("div", gh, [
      ah(e.$slots, "default", {}, () => [
        rh(i, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (l) => e.$emit("update:active", l))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
const ph = /* @__PURE__ */ P(sh, [["render", mh]]);
const hh = {
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
}, oc = window.Vue.renderSlot, wh = window.Vue.toDisplayString, sc = window.Vue.openBlock, ac = window.Vue.createElementBlock, fh = window.Vue.createCommentVNode, _h = window.Vue.createElementVNode, vh = { class: "mw-ui-card" }, Sh = ["textContent"], yh = { class: "mw-ui-card__content" };
function Ch(e, t, n, o, s, a) {
  return sc(), ac("div", vh, [
    oc(e.$slots, "header", {}, () => [
      n.title ? (sc(), ac("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: wh(n.title)
      }, null, 8, Sh)) : fh("", !0)
    ]),
    _h("div", yh, [
      oc(e.$slots, "default")
    ])
  ]);
}
const Oe = /* @__PURE__ */ P(hh, [["render", Ch]]);
const kh = {}, xh = window.Vue.openBlock, bh = window.Vue.createElementBlock, $h = { class: "mw-ui-divider row" };
function Vh(e, t) {
  return xh(), bh("div", $h);
}
const as = /* @__PURE__ */ P(kh, [["render", Vh]]);
const Dh = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Ah = window.Vue.renderSlot, Eh = window.Vue.resolveDynamicComponent, Th = window.Vue.withCtx, Lh = window.Vue.openBlock, Bh = window.Vue.createBlock;
function Ph(e, t, n, o, s, a) {
  return Lh(), Bh(Eh(n.tag), { class: "mw-grid container" }, {
    default: Th(() => [
      Ah(e.$slots, "default")
    ]),
    _: 3
  });
}
const Fh = /* @__PURE__ */ P(Dh, [["render", Ph]]), Mh = {
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
}, Nh = window.Vue.renderSlot, Uh = window.Vue.resolveDynamicComponent, Ih = window.Vue.normalizeClass, zh = window.Vue.withCtx, Rh = window.Vue.openBlock, Oh = window.Vue.createBlock;
function Hh(e, t, n, o, s, a) {
  return Rh(), Oh(Uh(n.tag), {
    class: Ih(a.classes)
  }, {
    default: zh(() => [
      Nh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const F = /* @__PURE__ */ P(Mh, [["render", Hh]]), Zr = ["mobile", "tablet", "desktop", "desktop-wide"], jh = Zr.reduce(
  (e, t) => Fe(ke({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), qh = {
  name: "MwCol",
  props: Fe(ke({}, jh), {
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
      for (let n = 0; n < Zr.length; n++) {
        let o = Zr[n], s = this.$props[o];
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
}, Gh = window.Vue.renderSlot, Wh = window.Vue.resolveDynamicComponent, Xh = window.Vue.normalizeClass, Kh = window.Vue.withCtx, Yh = window.Vue.openBlock, Qh = window.Vue.createBlock;
function Jh(e, t, n, o, s, a) {
  return Yh(), Qh(Wh(n.tag), {
    class: Xh(a.classes)
  }, {
    default: Kh(() => [
      Gh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const y = /* @__PURE__ */ P(qh, [["render", Jh]]), Zh = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", ew = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", tw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", La = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", nw = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, ow = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", sw = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Rg = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", el = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", ml = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Cn = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", aw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", iw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", pl = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Og = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", rw = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", lw = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", cw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Hg = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", jg = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", uw = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", dw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", gw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", pw = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", hw = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, qn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, ww = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, hl = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, fw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, wl = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", _w = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", vw = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", Sw = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Za = window.Vue.computed, yw = window.Vue.watch, Cw = window.Vue.ref, kw = window.Vue.nextTick, xw = {
  name: "MwDialog",
  components: {
    MwButton: De,
    MwRow: F,
    MwCol: y,
    MwDivider: as
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
    const n = Cw(null), o = Za(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Za(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    yw(
      () => e.value,
      (c) => {
        c ? (i(), kw(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Za(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayStyles: s,
      mwIconClose: Cn,
      root: n
    };
  }
}, ic = window.Vue.normalizeStyle, ei = window.Vue.createElementVNode, ti = window.Vue.renderSlot, bs = window.Vue.resolveComponent, no = window.Vue.createVNode, ni = window.Vue.withCtx, rc = window.Vue.createCommentVNode, bw = window.Vue.withKeys, $w = window.Vue.normalizeClass, lc = window.Vue.openBlock, Vw = window.Vue.createElementBlock, Dw = window.Vue.Transition, Aw = window.Vue.createBlock, Ew = { class: "mw-ui-dialog__shell items-stretch" }, Tw = { class: "mw-ui-dialog__body" };
function Lw(e, t, n, o, s, a) {
  const i = bs("mw-col"), l = bs("mw-button"), c = bs("mw-row"), g = bs("mw-divider");
  return lc(), Aw(Dw, {
    name: `mw-ui-animation-${n.animation}`,
    style: ic(o.cssVars)
  }, {
    default: ni(() => [
      n.value ? (lc(), Vw("div", {
        key: 0,
        ref: "root",
        class: $w(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = bw((r) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        ei("div", {
          class: "mw-ui-dialog__overlay",
          style: ic(o.overlayStyles),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close)
        }, null, 4),
        ei("div", Ew, [
          n.header ? ti(e.$slots, "header", { key: 0 }, () => [
            no(c, { class: "mw-ui-dialog__header" }, {
              default: ni(() => [
                no(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                no(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: ni(() => [
                    no(l, {
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
            no(g)
          ]) : rc("", !0),
          ei("div", Tw, [
            ti(e.$slots, "default")
          ]),
          ti(e.$slots, "footer")
        ])
      ], 34)) : rc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const ot = /* @__PURE__ */ P(xw, [["render", Lw]]);
const Bw = {
  name: "MwInput",
  components: {
    MwIcon: me
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
      const t = ke({}, e.$attrs);
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
}, cc = window.Vue.renderSlot, Pw = window.Vue.resolveComponent, $s = window.Vue.openBlock, oi = window.Vue.createBlock, uc = window.Vue.createCommentVNode, Fw = window.Vue.resolveDynamicComponent, Mw = window.Vue.toDisplayString, Nw = window.Vue.mergeProps, Uw = window.Vue.withModifiers, Iw = window.Vue.createElementVNode, zw = window.Vue.normalizeClass, Rw = window.Vue.createElementBlock, Ow = { class: "mw-ui-input__content" };
function Hw(e, t, n, o, s, a) {
  const i = Pw("mw-icon");
  return $s(), Rw("div", {
    class: zw(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Iw("div", Ow, [
      cc(e.$slots, "icon", {}, () => [
        n.icon ? ($s(), oi(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : uc("", !0)
      ]),
      ($s(), oi(Fw(n.type === "textarea" ? n.type : "input"), Nw({
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
        textContent: Mw(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      cc(e.$slots, "indicator", {}, () => [
        n.indicator ? ($s(), oi(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Uw((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : uc("", !0)
      ])
    ])
  ], 2);
}
const fl = /* @__PURE__ */ P(Bw, [["render", Hw]]);
const jw = {
  name: "MwMessage",
  components: { MwCol: y, MwRow: F, MwIcon: me, MwButton: De },
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
    mwIconClose: Cn,
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
      notice: hw,
      warning: hl,
      success: qn,
      error: ww
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
}, si = window.Vue.renderSlot, Vs = window.Vue.resolveComponent, dc = window.Vue.createVNode, gc = window.Vue.withCtx, mc = window.Vue.openBlock, pc = window.Vue.createBlock, hc = window.Vue.createCommentVNode, qw = window.Vue.normalizeClass;
function Gw(e, t, n, o, s, a) {
  const i = Vs("mw-icon"), l = Vs("mw-col"), c = Vs("mw-button"), g = Vs("mw-row");
  return e.shown ? (mc(), pc(g, {
    key: 0,
    class: qw([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: gc(() => [
      si(e.$slots, "icon", {}, () => [
        dc(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      dc(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: gc(() => [
          si(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      si(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (mc(), pc(c, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : hc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : hc("", !0);
}
const Ww = /* @__PURE__ */ P(jw, [["render", Gw]]);
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
const Xw = {}, Kw = window.Vue.createElementVNode, Yw = window.Vue.openBlock, Qw = window.Vue.createElementBlock, Jw = { class: "mw-ui-spinner" }, Zw = /* @__PURE__ */ Kw("div", { class: "mw-ui-spinner__bounce" }, null, -1), e0 = [
  Zw
];
function t0(e, t) {
  return Yw(), Qw("div", Jw, e0);
}
const nt = /* @__PURE__ */ P(Xw, [["render", t0]]), Re = {
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
const n0 = window.Vue.computed, o0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: me },
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
      default: wl
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: Re.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: Re.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = n0(() => {
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
}, wc = window.Vue.normalizeStyle, fc = window.Vue.openBlock, s0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const a0 = window.Vue.resolveComponent, i0 = window.Vue.createBlock;
function r0(e, t, n, o, s, a) {
  const i = a0("mw-ui-icon");
  return n.thumbnail ? (fc(), s0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: wc(o.style)
  }, null, 4)) : (fc(), i0(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: wc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const _l = /* @__PURE__ */ P(o0, [["render", r0]]);
const l0 = {
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
}, c0 = window.Vue.vModelRadio, Aa = window.Vue.createElementVNode, u0 = window.Vue.withDirectives, d0 = window.Vue.toDisplayString, g0 = window.Vue.resolveComponent, m0 = window.Vue.normalizeClass, p0 = window.Vue.withCtx, h0 = window.Vue.openBlock, w0 = window.Vue.createBlock, f0 = { class: "mw-ui-radio__controls" }, _0 = ["id", "disabled", "name", "value"], v0 = /* @__PURE__ */ Aa("span", { class: "mw-ui-radio__controls__icon" }, null, -1), S0 = ["for", "textContent"];
function y0(e, t, n, o, s, a) {
  const i = g0("mw-row");
  return h0(), w0(i, {
    class: m0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: p0(() => [
      Aa("div", f0, [
        u0(Aa("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, _0), [
          [c0, a.inputModel]
        ]),
        v0
      ]),
      Aa("label", {
        for: n.id,
        class: "ps-2",
        textContent: d0(n.label)
      }, null, 8, S0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Ea = /* @__PURE__ */ P(l0, [["render", y0]]), _c = window.Vue.h, qg = {
  name: "MwRadioGroup",
  components: { MwRadio: Ea },
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
      (o) => _c(Ea, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), _c("div", { class: "mw-ui-radio-group" }, n);
  }
};
const C0 = {
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
}, vc = window.Vue.normalizeClass, Sc = window.Vue.normalizeStyle, k0 = window.Vue.createElementVNode, x0 = window.Vue.openBlock, b0 = window.Vue.createElementBlock, $0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function V0(e, t, n, o, s, a) {
  return x0(), b0("div", {
    class: vc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Sc(a.containerStyles)
  }, [
    k0("div", {
      class: vc(["mw-progress-bar__bar", a.barClass]),
      style: Sc(a.barStyles)
    }, null, 6)
  ], 14, $0);
}
const Gg = /* @__PURE__ */ P(C0, [["render", V0]]), D0 = (e, t, n, o) => (s) => {
  const a = s.clientY, i = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (g) => {
    o.value = !1;
    let r = Math.min(
      i + g.clientY - a,
      e.value
    );
    r = Math.max(r, t.value), n.value.style.height = r + "px";
  }, c = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      l,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      c,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", l, !1), document.documentElement.addEventListener("pointerup", c, !1);
}, A0 = (e, t, n, o) => ({ initiateDrag: D0(
  e,
  t,
  n,
  o
) }), E0 = window.Vue.ref, yc = window.Vue.computed, T0 = (e, t, n, o) => {
  const s = E0(0), a = yc(
    () => t.value > e.value
  ), i = yc(
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
    isScrolledToEnd: i,
    scrollToStepByIndex: l,
    scrollable: a,
    scrollIndex: s
  };
};
const Ds = window.Vue.ref, L0 = window.Vue.onMounted, Cc = window.Vue.computed, B0 = window.Vue.nextTick, P0 = {
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
    const t = Ds(!0), n = Ds(null), o = Cc(
      () => Math.min(e.minHeight, s.value)
    ), s = Ds(1), { initiateDrag: a } = A0(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: l,
      scrollIndex: c,
      scrollToStepByIndex: g,
      handleArrowUpClick: r
    } = T0(o, s, n, t), u = () => g(c.value + 1), d = Ds(null), m = Cc(() => ({
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
    return L0(() => b(this, null, function* () {
      var w;
      yield B0(), s.value = n.value.scrollHeight, (w = d.value) == null || w.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", p);
    })), {
      contentRef: n,
      cssVars: m,
      dragIndicatorRef: d,
      handleArrowUpClick: r,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: fw,
      mwIconExpand: el,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: u
    };
  }
}, F0 = window.Vue.renderSlot, M0 = window.Vue.normalizeClass, As = window.Vue.createElementVNode, N0 = window.Vue.resolveComponent, U0 = window.Vue.createVNode, ai = window.Vue.openBlock, I0 = window.Vue.createBlock, kc = window.Vue.createCommentVNode, xc = window.Vue.createElementBlock, z0 = window.Vue.normalizeStyle, R0 = { class: "mw-ui-expandable-content__container" }, O0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, H0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function j0(e, t, n, o, s, a) {
  const i = N0("mw-button");
  return ai(), xc("div", {
    class: "mw-ui-expandable-content",
    style: z0(o.cssVars)
  }, [
    As("div", R0, [
      As("div", {
        ref: "contentRef",
        class: M0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        F0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (ai(), xc("div", O0, [
        U0(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (ai(), I0(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : kc("", !0)
      ])) : kc("", !0)
    ]),
    As("div", H0, [
      As("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const q0 = /* @__PURE__ */ P(P0, [["render", j0]]);
const Es = window.Vue.computed, G0 = {
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
      default: Re.blue600
    },
    inactiveColor: {
      type: String,
      default: Re.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Es(() => e.size / 2 * 0.9), n = Es(() => Math.PI * (t.value * 2)), o = Es(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Es(() => ({
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
}, bc = window.Vue.createElementVNode, $c = window.Vue.normalizeStyle, W0 = window.Vue.openBlock, X0 = window.Vue.createElementBlock, K0 = ["width", "height", "viewport"], Y0 = ["r", "cx", "cy", "stroke-dasharray"], Q0 = ["r", "cx", "cy", "stroke-dasharray"];
function J0(e, t, n, o, s, a) {
  return W0(), X0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: $c(o.cssVars)
  }, [
    bc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Y0),
    bc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: $c({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Q0)
  ], 12, K0);
}
const Wg = /* @__PURE__ */ P(G0, [["render", J0]]), Z0 = window.Vue.ref, Mt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Nt = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Mt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Mt.tablet}px) and (max-width: ${Mt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Mt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Mt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Mt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Mt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Mt["desktop-wide"]}px)`
}, ii = {
  mobile: () => matchMedia(Nt.mobile).matches,
  tablet: () => matchMedia(Nt.tablet).matches,
  desktop: () => matchMedia(Nt.desktop).matches,
  desktopwide: () => matchMedia(Nt["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Nt["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Nt["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Nt["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Nt["desktop-and-down"]).matches
}, ef = {
  install: (e) => {
    const t = () => {
      for (let o in ii)
        ii.hasOwnProperty(o) && (n.value[o] = ii[o]());
    }, n = Z0({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Fe(ke({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, tf = {
  install: (e) => {
    e.config.globalProperties.$mwui = Fe(ke({}, e.config.globalProperties.$mwui || {}), {
      colors: Re
    }), e.provide("colors", Re);
  }
};
class Qn extends Error {
}
const nf = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Qn();
}), Xg = { assertUser: nf };
const of = window.Vue.resolveDirective, oo = window.Vue.createElementVNode, Vc = window.Vue.withDirectives, sf = window.Vue.toDisplayString, af = window.Vue.unref, Dc = window.Vue.withCtx, rf = window.Vue.openBlock, lf = window.Vue.createBlock, cf = window.Vue.createCommentVNode, uf = { class: "pa-4 sx-login-dialog__header" }, df = { class: "sx-login-dialog__body px-6 pb-4" }, gf = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, mf = ["href"], pf = window.Vue.computed, hf = window.Vue.ref, wf = window.Vuex.useStore, ff = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = wf(), n = pf(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = hf(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const l = of("i18n");
      return n.value ? (rf(), lf(af(ot), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Dc(() => [
          oo("div", uf, [
            Vc(oo("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Dc(() => [
          Vc(oo("div", df, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          oo("div", gf, [
            oo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, sf(a.$i18n("cx-sx-login-dialog-button-label")), 9, mf)
          ])
        ]),
        _: 1
      })) : cf("", !0);
    };
  }
}, H = new mw.cx.SiteMapper(), _f = mw.util.getUrl, vf = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Ba {
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
    pageRevision: l,
    status: c,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = l, this.status = c, this.targetTitle = g;
  }
}
const ri = "original", li = "empty", Sf = {
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
      ri,
      li
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return Sf[t] || t;
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
    return ri;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return li;
  }
  static isUserMTProvider(t) {
    return [ri, li].includes(
      t
    );
  }
}
class Jt {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Fe(ke({}, a), {
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
const Ac = (e) => {
  var n;
  const t = Ta(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Ta = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, yn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Kg = (e) => {
  const t = Ta(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = yf(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, yf = (e) => {
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
      let l = !0;
      i[0] === "<nowiki>" ? (o = !0, l = !1) : i[0] === "</nowiki>" || i[0].match(/<nowiki\s*\/>/) ? l = !1 : i[0].match(/(?:\[\[)/) ? (a++, l = !1) : i[0].match(/(?:\]\])/) ? a > 0 && (a--, l = !1) : i[0].match(/(?:\{\{)/) ? (s++, l = !1) : i[0].match(/(?:\}\})/) ? s > 0 && (s--, l = !1) : i[0].match(/\|+/) && (s > 0 || a > 0) && (l = !1), l ? n += "<nowiki>" + i[0] + "</nowiki>" : n += i[0];
    }
  }
  return n;
}, Yg = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Qg = (e) => {
  const t = Yg(e);
  return t == null ? void 0 : t.targetExists;
};
class ci {
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
let Te = class {
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
      (a) => yn(a)
    );
    s && Qg(s) && (this.blockTemplateAdaptationInfo[t] = Yg(s));
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
      (t) => yn(t)
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
    const t = Ta(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Ac(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => yn(o));
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
    return n && Ac(n) || "";
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
    const o = Ta(n);
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
      (a) => yn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new ci({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new ci({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new ci({
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
        (s) => yn(s)
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
const Cf = [
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
], kf = (e, t, n) => {
  let o, s, a, i, l;
  return !e || !t ? 0 : e === t ? 1 : (s = i = Ec(e, n), a = l = Ec(t, n), l.length > i.length && (s = l, a = i), o = s.filter(function(c) {
    return a.indexOf(c) >= 0;
  }), o.length / s.length);
}, Ec = function(e, t) {
  return e ? Cf.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, xf = 95, bf = 85, $f = [
  { status: "failure", value: 100 - xf },
  { status: "warning", value: 100 - bf },
  { status: "success", value: 100 }
], Jg = (e, t, n) => {
  const o = Tc(e).textContent, s = Tc(t).textContent, a = 100 - 100 * kf(s, o, n);
  return Math.ceil(a);
}, Vf = (e) => $f.find((t) => e <= t.value).status, Df = (e, t) => Jg(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Tc = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, en = { calculateScore: Jg, getScoreStatus: Vf, getMTScoreForPageSection: Df }, Ts = "__LEAD_SECTION__";
class tl {
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
    return Ts;
  }
  static isSectionLead(t) {
    return !t || t === Ts;
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
      let l = "";
      i && (l = i.innerHTML), a.editedTranslation = l;
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
    return n instanceof Te ? n.transclusionNode.outerHTML : n instanceof Jt ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Te ? t.blockTemplateSelected = !1 : t instanceof Jt && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Te ? n.blockTemplateSelected = !0 : n instanceof Jt && (n.selected = !0);
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
    if (o instanceof Te)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Jt)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Te ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Jt ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Te ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Jt && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = en.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Ts : this.originalTitle;
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
    return this.isLeadSection ? Ts : this.title;
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
class vl extends Ba {
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
    startTimestamp: l,
    lastUpdatedTimestamp: c,
    status: g,
    pageRevision: r,
    targetTitle: u,
    sourceSectionTitle: d,
    targetSectionTitle: m,
    progress: p
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: l,
      lastUpdatedTimestamp: c,
      pageRevision: r,
      status: g,
      targetTitle: u
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = d, this.targetSectionTitle = m, this.progress = p, this.restored = !1;
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
    return tl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? tl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const is = window.Vue.ref, rs = is(null), ls = is(null), Pa = is(null), Jn = is(null), Zg = is(null), Af = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), Pa.value = e == null ? void 0 : e.sourceTitle, rs.value = e == null ? void 0 : e.sourceLanguage, ls.value = e == null ? void 0 : e.targetLanguage, e instanceof vl && (t.set("draft", !0), Zg.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), Jn.value = e.sourceSectionTitle)), t.delete("title"), cs(Object.fromEntries(t));
}, Ef = (e) => {
  Jn.value = e, em("section", e);
}, cs = (e) => {
  history.replaceState(
    {},
    document.title,
    _f("Special:ContentTranslation", e)
  );
}, Tf = () => {
  const e = new URLSearchParams(location.search);
  Pa.value = e.get("page"), rs.value = e.get("from"), ls.value = e.get("to"), Jn.value = e.get("section");
}, Lf = () => {
  const e = new URLSearchParams(location.search);
  Jn.value = null, e.delete("section"), e.delete("title"), cs(Object.fromEntries(e));
}, em = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), cs(Object.fromEntries(n));
}, Bf = (e) => new URLSearchParams(location.search).get(e), Pf = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), rs.value = e, ls.value = t, n.delete("title"), cs(Object.fromEntries(n));
}, Ff = () => {
  rs.value = null, ls.value = null, Pa.value = null, Jn.value = null, cs(null);
}, G = () => ({
  setLanguageURLParams: Pf,
  setSectionURLParam: Ef,
  setTranslationURLParams: Af,
  initializeURLState: Tf,
  clearURLParameters: Ff,
  clearSectionURLParameter: Lf,
  setUrlParam: em,
  getUrlParam: Bf,
  pageURLParameter: Pa,
  sourceLanguageURLParameter: rs,
  targetLanguageURLParameter: ls,
  sectionURLParameter: Jn,
  draftURLParameter: Zg
});
const Mf = window.Vue.resolveDynamicComponent, Lc = window.Vue.openBlock, Bc = window.Vue.createBlock, Nf = window.Vue.Transition, so = window.Vue.withCtx, ao = window.Vue.createVNode, Uf = window.Vue.resolveComponent, ui = window.Vue.unref, If = window.Vuex.useStore, zf = window.Vue.computed, Rf = window.Vue.onMounted, Of = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = G();
    t();
    const n = If(), o = zf(
      () => n.state.application.autoSavePending
    );
    return Rf(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && Xg.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof Qn && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const i = Uf("router-view");
      return Lc(), Bc(ui(Fh), { id: "contenttranslation" }, {
        default: so(() => [
          ao(ui(F), { class: "cx-container" }, {
            default: so(() => [
              ao(ui(y), { cols: "12" }, {
                default: so(() => [
                  ao(i, null, {
                    default: so(({ Component: l, route: c }) => [
                      ao(Nf, {
                        name: c.meta.transitionName
                      }, {
                        default: so(() => [
                          (Lc(), Bc(Mf(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      ao(ff)
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
}, Hf = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, jf = {
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
class tm {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Gn {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new tm(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Pc = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Fe(ke({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class qf {
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
    const t = Pc((s = this.user) == null ? void 0 : s.content), n = Pc((a = this.mt) == null ? void 0 : a.content);
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
class Sl extends Ba {
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
    pageRevision: l,
    status: c,
    targetTitle: g,
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
      pageRevision: l,
      status: c,
      targetTitle: g
    }), this.targetUrl = r, this.sectionTranslations = u;
  }
}
const Fa = mw.user.isAnon() ? void 0 : "user", nm = (e) => {
  if (e === "assertuserfailed")
    throw new Qn();
};
function om(e, t = null) {
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
      let i;
      if (e === "draft" ? i = a.map(
        (c) => new vl(Fe(ke({}, c), { status: e }))
      ) : i = a.map(
        (c) => new Sl(Fe(ke({}, c), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const c = yield om(
          e,
          s.continue.offset
        );
        i = i.concat(c);
      }
      return i;
    }));
  });
}
function Gf(e) {
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
      (a) => new qf(a)
    );
  });
}
function Wf(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Y.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = H.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, c]) => {
      var r, u;
      if (!c) {
        const d = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(d);
      }
      return (u = (r = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : r.groups) == null ? void 0 : u.content;
    }).catch((l) => Promise.reject(l));
  });
}
const Xf = (e, t, n) => {
  const o = H.getApi(t);
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
}, Kf = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: l,
  captchaId: c,
  captchaWord: g,
  isSandbox: r,
  sectionTranslationId: u
}) => {
  const d = {
    assert: Fa,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: i,
    issandbox: r,
    sectiontranslationid: u
  };
  return c && (d.captchaid = c, d.captchaword = g), new mw.Api().postWithToken("csrf", d).then((p) => {
    if (p = p.cxpublishsection, p.result === "error") {
      if (p.edit.captcha)
        return {
          publishFeedbackMessage: new Gn({
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
    nm(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Gn({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Yf = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: l,
  sectionId: c,
  isSandbox: g,
  progress: r
}) => {
  const u = {
    assert: Fa,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: c,
    issandbox: g,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", u).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    nm(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new Gn({ text: h, status: "error" });
  });
}, Qf = (e) => {
  const t = {
    assert: Fa,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Jf = () => {
  const e = {
    assert: Fa,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Sl(n.cxcheckunreviewed.translation)
  );
}, Zf = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, e_ = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, t_ = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), je = {
  fetchTranslations: om,
  fetchTranslationUnits: Gf,
  fetchSegmentTranslation: Wf,
  parseTemplateWikitext: Xf,
  publishTranslation: Kf,
  saveTranslation: Yf,
  deleteTranslation: Zf,
  fetchTranslatorStats: t_,
  deleteCXTranslation: e_,
  splitTranslation: Qf,
  checkUnreviewedTranslations: Jf
};
function n_(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield je.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const o_ = {
  fetchTranslatorStats: n_
}, s_ = {
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
}, a_ = {
  namespaced: !0,
  state: Hf,
  getters: jf,
  actions: o_,
  mutations: s_
}, sm = [
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
], i_ = [
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
], r_ = [
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
], l_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], c_ = [
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
], u_ = {
  en: sm,
  es: i_,
  bn: r_,
  fr: l_,
  de: c_
}, d_ = {
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
  appendixSectionTitles: u_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, g_ = {
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
class yl {
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
class Wn {
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
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    present: a,
    missing: i,
    sourceSections: l = [],
    targetSections: c = [],
    isListable: g = !0
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = l, this.targetSections = c, this.isListable = g;
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
class Xn {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const m_ = sm;
function p_(e, t, n, o = 24) {
  return b(this, null, function* () {
    var r;
    let a = `/data/recommendation/article/creation/translation/${H.getWikiDomainCode(e)}`;
    n && (a += `/${n}`);
    const i = H.getRestbaseUrl(t, a), l = new URLSearchParams({ count: `${o}` }), c = yield fetch(`${i}?${l}`);
    if (!c.ok)
      throw new Error("Failed to load data from server");
    return (((r = yield c.json()) == null ? void 0 : r.items) || []).map(
      (u) => new yl({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.sitelink_count)
      })
    );
  });
}
function h_(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = H.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Wn(a) : null;
  });
}
function w_(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "query",
      format: "json",
      list: "cxpublishedtranslations",
      from: e,
      to: t,
      limit: 200
    }, o = H.getApi(e);
    try {
      return (yield o.get(n)).result.translations.map((a) => a.sourceTitle);
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function f_(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = H.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function __(e) {
  const t = m_.map((o) => encodeURIComponent(o)).join("|"), n = H.getCXServerUrl(
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
const v_ = (e, t, n) => {
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
}, S_ = (e) => {
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
}, y_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((l) => new Xn(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, He = {
  fetchFavorites: y_,
  fetchPageSuggestions: p_,
  fetchSectionSuggestions: h_,
  fetchSuggestionSeeds: w_,
  fetchAppendixTargetSectionTitles: __,
  fetchSuggestionSourceSections: f_,
  markFavorite: v_,
  unmarkFavorite: S_
};
function C_(o, s) {
  return b(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield He.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const k_ = {
  fetchAppendixSectionTitles: C_
}, x_ = {
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
}, b_ = {
  namespaced: !0,
  state: d_,
  getters: g_,
  actions: k_,
  mutations: x_
}, $_ = {
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
}, V_ = {
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
      (c) => t.getPage(s, c.sourceTitle)
    ).filter((c) => !!c);
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
class Zn {
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
    pagelanguage: i,
    pageprops: l,
    pageviews: c,
    thumbnail: g,
    title: r,
    revisions: u,
    _alias: d,
    content: m = null,
    sections: p = []
  } = {}) {
    var h;
    this.language = i, this.title = r, this.pageId = a, this.description = t, this.image = s, this.pageprops = l, this.pageviews = c, this.thumbnail = g, this.langLinksCount = n, this.articleSize = (h = u == null ? void 0 : u[0]) == null ? void 0 : h.size, this.revision = o, this.alias = d, this.wikidataId = l == null ? void 0 : l.wikibase_item, this.content = m, this.sections = p;
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
class D_ {
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
function A_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const E_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), A_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, T_ = (e, t) => {
  let n, o;
  return t ? (n = E_(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, i) => {
    const l = $(i).data("view").getModel();
    if (l)
      return ve.dm.converter.getDomFromNode(
        l,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, L_ = (e, t) => {
  const n = Array.from(
    T_(e, t)
  );
  return B_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let l = "";
      const c = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = a.textContent.trim() : i.unshift(a);
      const g = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (u) => new Te({
          sentences: P_(u),
          node: u
        })
      ), r = !l;
      return new tl({ id: c, title: l, subSections: g, isLeadSection: r });
    }
  );
}, B_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, P_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Jt({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), am = {
  convertSegmentedContentToPageSections: L_
}, Cl = 120, F_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Cl,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return H.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (r, u) => Fe(ke({}, r), { [u.to]: u.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, u) => Fe(ke({}, r), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((r) => {
      const u = g[r.title] || l[r.title] || null;
      return new Zn(Fe(ke({}, r), { _alias: u }));
    });
  });
}, M_ = (e, t) => {
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
  return H.getApi(e).get(n).then((s) => b(void 0, null, function* () {
    var c, g;
    const a = s.query.pages;
    if (!a || !a.length || (c = a[0]) != null && c.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return l ? Object.freeze(new D_(l, i)) : null;
  }));
}, N_ = (e, t, n, o = null) => im(
  e,
  t,
  n,
  o
).then(
  (s) => new Zn({
    sections: am.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), im = (e, t, n, o = null) => {
  const s = H.getWikiDomainCode(e), a = H.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, l += "/$revision");
  const c = H.getCXServerUrl(
    l,
    i
  );
  return fetch(c).then((g) => g.json()).then((g) => g.segmentedContent);
}, U_ = (e) => b(void 0, null, function* () {
  const t = vf();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Cl,
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
  return yield H.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Zn(s))).catch((o) => []);
}), I_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Cl,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return H.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new Zn(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, us = {
  fetchPages: F_,
  fetchLanguageTitles: M_,
  fetchPageContent: N_,
  fetchSegmentedContent: im,
  fetchNearbyPages: U_,
  searchPagesByTitlePrefix: I_
};
function z_() {
  return H.getLanguagePairs().then((e) => e.sourceLanguages);
}
function R_(e, t) {
  return b(this, null, function* () {
    const n = H.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Y(e, t, o.mt)
      )
    );
  });
}
function O_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function H_(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = H.getWikiDomainCode(e), i = H.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(i, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, c = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(c.postWithToken("csrf", l)).then((g) => {
    const u = {
      action: "tag",
      revid: g.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(c.postWithToken("csrf", u));
  });
}
const Ma = {
  fetchSupportedLanguageCodes: z_,
  fetchSupportedMTProviders: R_,
  fetchCXServerToken: O_,
  addWikibaseLink: H_
};
function j_({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const l = o.slice(i, i + s), c = us.fetchPages(n, l).then(
      (g) => g.forEach((r) => t("addPage", r))
    );
    a.push(c);
  }
  return Promise.all(a);
}
function q_(n) {
  return b(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Ma.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function G_(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield us.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const W_ = {
  fetchNearbyPages: G_,
  fetchPageMetadata: j_,
  fetchSupportedLanguageCodes: q_
}, X_ = {
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
}, K_ = {
  namespaced: !0,
  state: $_,
  getters: V_,
  actions: W_,
  mutations: X_
}, Y_ = {
  /**@type Array */
  mtRequestsPending: [],
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
}, Q_ = {
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
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, J_ = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => yn(a)
  );
  return s && Qg(s) ? je.parseTemplateWikitext(
    Kg(s),
    n,
    t
  ) : Promise.resolve(null);
}, rm = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => yn(a)
  );
  return s ? je.parseTemplateWikitext(
    Kg(s),
    n,
    t
  ) : Promise.resolve(null);
}, Z_ = (o) => b(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield Ma.fetchCXServerToken().then(
    (l) => {
      l.age <= 30 && (l.age = 3600);
      const c = Math.floor(Date.now() / 1e3);
      l.refreshAt = c + l.age - 30, n("setCXServerToken", l);
    },
    (l) => {
      if (l === "token-impossible") {
        const c = Math.floor(Date.now() / 1e3);
        n("setCXServerToken", { jwt: "", refreshAt: c + 3600 * 10 });
      }
    }
  ));
  const s = Math.floor(Date.now() / 1e3);
  return ((a = t.cxServerToken) == null ? void 0 : a.refreshAt) <= s ? (n("setCXServerToken", null), e("getCXServerToken")) : (i = t.cxServerToken) == null ? void 0 : i.jwt;
}), e1 = { getCXServerToken: Z_ }, t1 = {
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
}, n1 = {
  namespaced: !0,
  state: Y_,
  getters: Q_,
  actions: e1,
  mutations: t1
}, o1 = window.Vuex.createStore, s1 = o1({
  modules: { translator: a_, suggestions: b_, mediawiki: K_, application: n1 }
});
function a1() {
  return lm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function lm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const i1 = typeof Proxy == "function", r1 = "devtools-plugin:setup", l1 = "plugin:settings:set";
let xn, nl;
function c1() {
  var e;
  return xn !== void 0 || (typeof window != "undefined" && window.performance ? (xn = !0, nl = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (xn = !0, nl = global.perf_hooks.performance) : xn = !1), xn;
}
function u1() {
  return c1() ? nl.now() : Date.now();
}
class d1 {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        o[i] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const i = localStorage.getItem(s), l = JSON.parse(i);
      Object.assign(a, l);
    } catch (i) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch (l) {
        }
        a = i;
      },
      now() {
        return u1();
      }
    }, n && n.on(l1, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...c) => {
        this.onQueue.push({
          method: l,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...c) => (this.targetQueue.push({
        method: l,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[l](...c)) : (...c) => new Promise((g) => {
        this.targetQueue.push({
          method: l,
          args: c,
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
function g1(e, t) {
  const n = e, o = lm(), s = a1(), a = i1 && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(r1, e, t);
  else {
    const i = a ? new d1(n, s) : null;
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
const cm = window.Vue.getCurrentInstance, Kn = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const mt = window.Vue.computed, Jo = window.Vue.unref, m1 = window.Vue.watchEffect, um = window.Vue.defineComponent, p1 = window.Vue.reactive, dm = window.Vue.h, di = window.Vue.provide, h1 = window.Vue.ref, gm = window.Vue.watch, w1 = window.Vue.shallowRef, f1 = window.Vue.shallowReactive, _1 = window.Vue.nextTick, Bt = typeof window != "undefined";
function v1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const q = Object.assign;
function gi(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Le(s) ? s.map(e) : e(s);
  }
  return n;
}
const Zo = () => {
}, Le = Array.isArray;
function R(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const S1 = /\/$/, y1 = (e) => e.replace(S1, "");
function mi(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = x1(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function C1(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Fc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Mc(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && tn(t.matched[o], n.matched[s]) && mm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function tn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function mm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!k1(e[n], t[n]))
      return !1;
  return !0;
}
function k1(e, t) {
  return Le(e) ? Nc(e, t) : Le(t) ? Nc(t, e) : e === t;
}
function Nc(e, t) {
  return Le(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function x1(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return R(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, i, l;
  for (i = 0; i < o.length; i++)
    if (l = o[i], l !== ".")
      if (l === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/");
}
var ts;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ts || (ts = {}));
var es;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(es || (es = {}));
function b1(e) {
  if (!e)
    if (Bt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), y1(e);
}
const $1 = /^[^#]+#/;
function V1(e, t) {
  return e.replace($1, "#") + t;
}
function D1(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Na = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function A1(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          R(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        R(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && R(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = D1(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Uc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ol = /* @__PURE__ */ new Map();
function E1(e, t) {
  ol.set(e, t);
}
function T1(e) {
  const t = ol.get(e);
  return ol.delete(e), t;
}
let L1 = () => location.protocol + "//" + location.host;
function pm(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), Fc(c, "");
  }
  return Fc(n, e) + o + s;
}
function B1(e, t, n, o) {
  let s = [], a = [], i = null;
  const l = ({ state: d }) => {
    const m = pm(e, location), p = n.value, h = t.value;
    let w = 0;
    if (d) {
      if (n.value = m, t.value = d, i && i === p) {
        i = null;
        return;
      }
      w = h ? d.position - h.position : 0;
    } else
      o(m);
    s.forEach((f) => {
      f(n.value, p, {
        delta: w,
        type: ts.pop,
        direction: w ? w > 0 ? es.forward : es.back : es.unknown
      });
    });
  };
  function c() {
    i = n.value;
  }
  function g(d) {
    s.push(d);
    const m = () => {
      const p = s.indexOf(d);
      p > -1 && s.splice(p, 1);
    };
    return a.push(m), m;
  }
  function r() {
    const { history: d } = window;
    d.state && d.replaceState(q({}, d.state, { scroll: Na() }), "");
  }
  function u() {
    for (const d of a)
      d();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", r, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: g,
    destroy: u
  };
}
function Ic(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Na() : null
  };
}
function P1(e) {
  const { history: t, location: n } = window, o = {
    value: pm(e, n)
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
  function a(c, g, r) {
    const u = e.indexOf("#"), d = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + c : L1() + e + c;
    try {
      t[r ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? R("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](d);
    }
  }
  function i(c, g) {
    const r = q({}, t.state, Ic(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(c, r, !0), o.value = c;
  }
  function l(c, g) {
    const r = q(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: c,
        scroll: Na()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && R(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const u = q({}, Ic(o.value, c, null), { position: r.position + 1 }, g);
    a(c, u, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: i
  };
}
function F1(e) {
  e = b1(e);
  const t = P1(e), n = B1(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = q({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: V1.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function M1(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && R(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), F1(e);
}
function N1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function hm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ut = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, sl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var zc;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(zc || (zc = {}));
const U1 = {
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
    return `Redirected from "${e.fullPath}" to "${z1(t)}" via a navigation guard.`;
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
function Yn(e, t) {
  return {}.NODE_ENV !== "production" ? q(new Error(U1[e](t)), {
    type: e,
    [sl]: !0
  }, t) : q(new Error(), {
    type: e,
    [sl]: !0
  }, t);
}
function ft(e, t) {
  return e instanceof Error && sl in e && (t == null || !!(e.type & t));
}
const I1 = ["params", "query", "hash"];
function z1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of I1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Rc = "[^/]+?", R1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, O1 = /[.+*?^${}()[\]/\\]/g;
function H1(e, t) {
  const n = q({}, R1, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const r = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let u = 0; u < g.length; u++) {
      const d = g[u];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        u || (s += "/"), s += d.value.replace(O1, "\\$&"), m += 40;
      else if (d.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: f } = d;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const _ = f || Rc;
        if (_ !== Rc) {
          m += 10;
          try {
            new RegExp(`(${_})`);
          } catch (V) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + V.message);
          }
        }
        let S = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        u || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && g.length < 2 ? `(?:/${S})` : "/" + S), w && (S += "?"), s += S, m += 20, w && (m += -8), h && (m += -20), _ === ".*" && (m += -50);
      }
      r.push(m);
    }
    o.push(r);
  }
  if (n.strict && n.end) {
    const g = o.length - 1;
    o[g][o[g].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function l(g) {
    const r = g.match(i), u = {};
    if (!r)
      return null;
    for (let d = 1; d < r.length; d++) {
      const m = r[d] || "", p = a[d - 1];
      u[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return u;
  }
  function c(g) {
    let r = "", u = !1;
    for (const d of e) {
      (!u || !r.endsWith("/")) && (r += "/"), u = !1;
      for (const m of d)
        if (m.type === 0)
          r += m.value;
        else if (m.type === 1) {
          const { value: p, repeatable: h, optional: w } = m, f = p in g ? g[p] : "";
          if (Le(f) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = Le(f) ? f.join("/") : f;
          if (!_)
            if (w)
              d.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : u = !0);
            else
              throw new Error(`Missing required param "${p}"`);
          r += _;
        }
    }
    return r || "/";
  }
  return {
    re: i,
    score: o,
    keys: a,
    parse: l,
    stringify: c
  };
}
function j1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function q1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = j1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Oc(o))
      return 1;
    if (Oc(s))
      return -1;
  }
  return s.length - o.length;
}
function Oc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const G1 = {
  type: 0,
  value: ""
}, W1 = /[a-zA-Z0-9_]/;
function X1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[G1]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${g}": ${m}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let l = 0, c, g = "", r = "";
  function u() {
    g && (n === 0 ? a.push({
      type: 0,
      value: g
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: g,
      regexp: r,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), g = "");
  }
  function d() {
    g += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (g && u(), i()) : c === ":" ? (u(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : W1.test(c) ? d() : (u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? r[r.length - 1] == "\\" ? r = r.slice(0, -1) + c : n = 3 : r += c;
        break;
      case 3:
        u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, r = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), u(), i(), s;
}
function K1(e, t, n) {
  const o = H1(X1(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && R(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = q(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Y1(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = qc({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, u, d) {
    const m = !d, p = Q1(r);
    ({}).NODE_ENV !== "production" && tv(p, u), p.aliasOf = d && d.record;
    const h = qc(t, r), w = [
      p
    ];
    if ("alias" in r) {
      const S = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const V of S)
        w.push(q({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : p.components,
          path: V,
          // we might be the child of an alias
          aliasOf: d ? d.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, _;
    for (const S of w) {
      const { path: V } = S;
      if (u && V[0] !== "/") {
        const A = u.record.path, k = A[A.length - 1] === "/" ? "" : "/";
        S.path = u.record.path + (V && k + V);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = K1(S, u, h), {}.NODE_ENV !== "production" && u && V[0] === "/" && nv(f, u), d ? (d.alias.push(f), {}.NODE_ENV !== "production" && ev(d, f)) : (_ = _ || f, _ !== f && _.alias.push(f), m && r.name && !jc(f) && i(r.name)), p.children) {
        const A = p.children;
        for (let k = 0; k < A.length; k++)
          a(A[k], f, d && d.children[k]);
      }
      d = d || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && c(f);
    }
    return _ ? () => {
      i(_);
    } : Zo;
  }
  function i(r) {
    if (hm(r)) {
      const u = o.get(r);
      u && (o.delete(r), n.splice(n.indexOf(u), 1), u.children.forEach(i), u.alias.forEach(i));
    } else {
      const u = n.indexOf(r);
      u > -1 && (n.splice(u, 1), r.record.name && o.delete(r.record.name), r.children.forEach(i), r.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(r) {
    let u = 0;
    for (; u < n.length && q1(r, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[u].record.path || !wm(r, n[u])); )
      u++;
    n.splice(u, 0, r), r.record.name && !jc(r) && o.set(r.record.name, r);
  }
  function g(r, u) {
    let d, m = {}, p, h;
    if ("name" in r && r.name) {
      if (d = o.get(r.name), !d)
        throw Yn(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(r.params || {}).filter((S) => !d.keys.find((V) => V.name === S));
        _.length && R(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = d.record.name, m = q(
        // paramsFromLocation is a new object
        Hc(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && Hc(r.params, d.keys.map((_) => _.name))
      ), p = d.stringify(m);
    } else if ("path" in r)
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && R(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((_) => _.re.test(p)), d && (m = d.parse(p), h = d.record.name);
    else {
      if (d = u.name ? o.get(u.name) : n.find((_) => _.re.test(u.path)), !d)
        throw Yn(1, {
          location: r,
          currentLocation: u
        });
      h = d.record.name, m = q({}, u.params, r.params), p = d.stringify(m);
    }
    const w = [];
    let f = d;
    for (; f; )
      w.unshift(f.record), f = f.parent;
    return {
      name: h,
      path: p,
      params: m,
      matched: w,
      meta: Z1(w)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: g, removeRoute: i, getRoutes: l, getRecordMatcher: s };
}
function Hc(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Q1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: J1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function J1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function jc(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Z1(e) {
  return e.reduce((t, n) => q(t, n.meta), {});
}
function qc(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function al(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function ev(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(al.bind(null, n)))
      return R(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(al.bind(null, n)))
      return R(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function tv(e, t) {
  t && t.record.name && !e.name && !e.path && R(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function nv(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(al.bind(null, n)))
      return R(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function wm(e, t) {
  return t.children.some((n) => n === e || wm(e, n));
}
const fm = /#/g, ov = /&/g, sv = /\//g, av = /=/g, iv = /\?/g, _m = /\+/g, rv = /%5B/g, lv = /%5D/g, vm = /%5E/g, cv = /%60/g, Sm = /%7B/g, uv = /%7C/g, ym = /%7D/g, dv = /%20/g;
function kl(e) {
  return encodeURI("" + e).replace(uv, "|").replace(rv, "[").replace(lv, "]");
}
function gv(e) {
  return kl(e).replace(Sm, "{").replace(ym, "}").replace(vm, "^");
}
function il(e) {
  return kl(e).replace(_m, "%2B").replace(dv, "+").replace(fm, "%23").replace(ov, "%26").replace(cv, "`").replace(Sm, "{").replace(ym, "}").replace(vm, "^");
}
function mv(e) {
  return il(e).replace(av, "%3D");
}
function pv(e) {
  return kl(e).replace(fm, "%23").replace(iv, "%3F");
}
function hv(e) {
  return e == null ? "" : pv(e).replace(sv, "%2F");
}
function ns(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && R(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function wv(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(_m, " "), i = a.indexOf("="), l = ns(i < 0 ? a : a.slice(0, i)), c = i < 0 ? null : ns(a.slice(i + 1));
    if (l in t) {
      let g = t[l];
      Le(g) || (g = t[l] = [g]), g.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Gc(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = mv(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Le(o) ? o.map((a) => a && il(a)) : [o && il(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function fv(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Le(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const _v = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Wc = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ua = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Cm = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), rl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function io() {
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
function Zt(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, l) => {
    const c = (u) => {
      u === !1 ? l(Yn(4, {
        from: n,
        to: t
      })) : u instanceof Error ? l(u) : N1(u) ? l(Yn(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? vv(c, t, n) : c);
    let r = Promise.resolve(g);
    if (e.length < 3 && (r = r.then(c)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        r = r.then((d) => c._called ? d : (R(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !c._called) {
        R(u), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((u) => l(u));
  });
}
function vv(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && R(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function pi(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && R(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let l = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw R(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          R(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const c = l;
          l = () => c;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, R(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (Sv(l)) {
          const g = (l.__vccOpts || l)[t];
          g && s.push(Zt(g, n, o, a, i));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (R(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = v1(g) ? g.default : g;
            a.components[i] = r;
            const d = (r.__vccOpts || r)[t];
            return d && Zt(d, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function Sv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Xc(e) {
  const t = Kn(Ua), n = Kn(Cm), o = mt(() => t.resolve(Jo(e.to))), s = mt(() => {
    const { matched: c } = o.value, { length: g } = c, r = c[g - 1], u = n.matched;
    if (!r || !u.length)
      return -1;
    const d = u.findIndex(tn.bind(null, r));
    if (d > -1)
      return d;
    const m = Kc(c[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Kc(r) === m && // avoid comparing the child with its parent
      u[u.length - 1].path !== m ? u.findIndex(tn.bind(null, c[g - 2])) : d
    );
  }), a = mt(() => s.value > -1 && xv(n.params, o.value.params)), i = mt(() => s.value > -1 && s.value === n.matched.length - 1 && mm(n.params, o.value.params));
  function l(c = {}) {
    return kv(c) ? t[Jo(e.replace) ? "replace" : "push"](
      Jo(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Zo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Bt) {
    const c = cm();
    if (c) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(g), m1(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: mt(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: l
  };
}
const yv = /* @__PURE__ */ um({
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
  useLink: Xc,
  setup(e, { slots: t }) {
    const n = p1(Xc(e)), { options: o } = Kn(Ua), s = mt(() => ({
      [Yc(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Yc(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : dm("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), Cv = yv;
function kv(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function xv(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Le(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function Kc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Yc = (e, t, n) => e != null ? e : t != null ? t : n, bv = /* @__PURE__ */ um({
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
    ({}).NODE_ENV !== "production" && Vv();
    const o = Kn(rl), s = mt(() => e.route || o.value), a = Kn(Wc, 0), i = mt(() => {
      let g = Jo(a);
      const { matched: r } = s.value;
      let u;
      for (; (u = r[g]) && !u.components; )
        g++;
      return g;
    }), l = mt(() => s.value.matched[i.value]);
    di(Wc, mt(() => i.value + 1)), di(_v, l), di(rl, s);
    const c = h1();
    return gm(() => [c.value, l.value, e.name], ([g, r, u], [d, m, p]) => {
      r && (r.instances[u] = g, m && m !== r && g && g === d && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !tn(r, m) || !d) && (r.enterCallbacks[u] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, r = e.name, u = l.value, d = u && u.components[r];
      if (!d)
        return Qc(n.default, { Component: d, route: g });
      const m = u.props[r], p = m ? m === !0 ? g.params : typeof m == "function" ? m(g) : m : null, w = dm(d, q({}, p, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (u.instances[r] = null);
        },
        ref: c
      }));
      if ({}.NODE_ENV !== "production" && Bt && w.ref) {
        const f = {
          depth: i.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (Le(w.ref) ? w.ref.map((S) => S.i) : [w.ref.i]).forEach((S) => {
          S.__vrv_devtools = f;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Qc(n.default, { Component: w, route: g }) || w
      );
    };
  }
});
function Qc(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const $v = bv;
function Vv() {
  const e = cm(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    R(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function ro(e, t) {
  const n = q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Mv(o, ["instances", "children", "aliasOf"]))
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
function Ls(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Dv = 0;
function Av(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Dv++;
  g1({
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
        value: ro(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const d = u.__vrv_devtools;
        r.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: km
        });
      }
      Le(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((d) => {
        let m = $m, p = "";
        d.isExactActive ? (m = bm, p = "This is exactly active") : d.isActive && (m = xm, p = "This link is active"), r.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), gm(t.currentRoute, () => {
      c(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
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
      const d = {
        guard: Ls("beforeEach"),
        from: ro(u, "Current Location during this navigation"),
        to: ro(r, "Target location")
      };
      Object.defineProperty(r.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: r.fullPath,
          data: d,
          groupId: r.meta.__navigationId
        }
      });
    }), t.afterEach((r, u, d) => {
      const m = {
        guard: Ls("afterEach")
      };
      d ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, m.status = Ls("❌")) : m.status = Ls("✅"), m.from = ro(u, "Current Location during this navigation"), m.to = ro(r, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: r.fullPath,
          time: s.now(),
          data: m,
          logType: d ? "warning" : "default",
          groupId: r.meta.__navigationId
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
    function c() {
      if (!g)
        return;
      const r = g;
      let u = n.getRoutes().filter((d) => !d.parent);
      u.forEach(Am), r.filter && (u = u.filter((d) => (
        // save matches state based on the payload
        ll(d, r.filter.toLowerCase())
      ))), u.forEach((d) => Dm(d, t.currentRoute.value)), r.rootNodes = u.map(Vm);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === l && c();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === l) {
        const d = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        d && (r.state = {
          options: Tv(d)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function Ev(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Tv(e) {
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
        display: e.keys.map((o) => `${o.name}${Ev(o)}`).join(" "),
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
const km = 15485081, xm = 2450411, bm = 8702998, Lv = 2282478, $m = 16486972, Bv = 6710886;
function Vm(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Lv
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: $m
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: km
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: bm
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: xm
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Bv
  });
  let o = n.__vd_id;
  return o == null && (o = String(Pv++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Vm)
  };
}
let Pv = 0;
const Fv = /^\/(.*)\/([a-z]*)$/;
function Dm(e, t) {
  const n = t.matched.length && tn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => tn(o, e.record))), e.children.forEach((o) => Dm(o, t));
}
function Am(e) {
  e.__vd_match = !1, e.children.forEach(Am);
}
function ll(e, t) {
  const n = String(e.re).match(Fv);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => ll(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = ns(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ll(i, t));
}
function Mv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Nv(e) {
  const t = Y1(e.routes, e), n = e.parseQuery || wv, o = e.stringifyQuery || Gc, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = io(), i = io(), l = io(), c = w1(Ut);
  let g = Ut;
  Bt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = gi.bind(null, (v) => "" + v), u = gi.bind(null, hv), d = (
    // @ts-expect-error: intentionally avoid the type check
    gi.bind(null, ns)
  );
  function m(v, E) {
    let D, B;
    return hm(v) ? (D = t.getRecordMatcher(v), B = E) : B = v, t.addRoute(B, D);
  }
  function p(v) {
    const E = t.getRecordMatcher(v);
    E ? t.removeRoute(E) : {}.NODE_ENV !== "production" && R(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function f(v, E) {
    if (E = q({}, E || c.value), typeof v == "string") {
      const N = mi(n, v, E.path), Q = t.resolve({ path: N.path }, E), Xe = s.createHref(N.fullPath);
      return {}.NODE_ENV !== "production" && (Xe.startsWith("//") ? R(`Location "${v}" resolved to "${Xe}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || R(`No match found for location with path "${v}"`)), q(N, Q, {
        params: d(Q.params),
        hash: ns(N.hash),
        redirectedFrom: void 0,
        href: Xe
      });
    }
    let D;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && R(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = q({}, v, {
        path: mi(n, v.path, E.path).path
      });
    else {
      const N = q({}, v.params);
      for (const Q in N)
        N[Q] == null && delete N[Q];
      D = q({}, v, {
        params: u(N)
      }), E.params = u(E.params);
    }
    const B = t.resolve(D, E), j = v.hash || "";
    ({}).NODE_ENV !== "production" && j && !j.startsWith("#") && R(`A \`hash\` should always start with the character "#". Replace "${j}" with "#${j}".`), B.params = r(d(B.params));
    const ee = C1(o, q({}, v, {
      hash: gv(j),
      path: B.path
    })), z = s.createHref(ee);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? R(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : B.matched.length || R(`No match found for location with path "${"path" in v ? v.path : v}"`)), q({
      fullPath: ee,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: j,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Gc ? fv(v.query) : v.query || {}
      )
    }, B, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function _(v) {
    return typeof v == "string" ? mi(n, v, c.value.path) : q({}, v);
  }
  function S(v, E) {
    if (g !== v)
      return Yn(8, {
        from: E,
        to: v
      });
  }
  function V(v) {
    return L(v);
  }
  function A(v) {
    return V(q(_(v), { replace: !0 }));
  }
  function k(v) {
    const E = v.matched[v.matched.length - 1];
    if (E && E.redirect) {
      const { redirect: D } = E;
      let B = typeof D == "function" ? D(v) : D;
      if (typeof B == "string" && (B = B.includes("?") || B.includes("#") ? B = _(B) : (
        // force empty params
        { path: B }
      ), B.params = {}), {}.NODE_ENV !== "production" && !("path" in B) && !("name" in B))
        throw R(`Invalid redirect found:
${JSON.stringify(B, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return q({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in B ? {} : v.params
      }, B);
    }
  }
  function L(v, E) {
    const D = g = f(v), B = c.value, j = v.state, ee = v.force, z = v.replace === !0, N = k(D);
    if (N)
      return L(
        q(_(N), {
          state: typeof N == "object" ? q({}, j, N.state) : j,
          force: ee,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        E || D
      );
    const Q = D;
    Q.redirectedFrom = E;
    let Xe;
    return !ee && Mc(o, B, D) && (Xe = Yn(16, { to: Q, from: B }), We(
      B,
      B,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Xe ? Promise.resolve(Xe) : oe(Q, B)).catch((pe) => ft(pe) ? (
      // navigation redirects still mark the router as ready
      ft(
        pe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? pe : sn(pe)
    ) : (
      // reject any unknown error
      Ge(pe, Q, B)
    )).then((pe) => {
      if (pe) {
        if (ft(
          pe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Mc(o, f(pe.to), Q) && // and we have done it a couple of times
          E && // @ts-expect-error: added only in dev
          (E._count = E._count ? (
            // @ts-expect-error
            E._count + 1
          ) : 1) > 30 ? (R(`Detected a possibly infinite redirection in a navigation guard when going from "${B.fullPath}" to "${Q.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            q({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, _(pe.to), {
              state: typeof pe.to == "object" ? q({}, j, pe.to.state) : j,
              force: ee
            }),
            // preserve the original redirectedFrom if any
            E || Q
          );
      } else
        pe = I(Q, B, !0, z, j);
      return W(Q, B, pe), pe;
    });
  }
  function x(v, E) {
    const D = S(v, E);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function T(v) {
    const E = ue.values().next().value;
    return E && typeof E.runWithContext == "function" ? E.runWithContext(v) : v();
  }
  function oe(v, E) {
    let D;
    const [B, j, ee] = Uv(v, E);
    D = pi(B.reverse(), "beforeRouteLeave", v, E);
    for (const N of B)
      N.leaveGuards.forEach((Q) => {
        D.push(Zt(Q, v, E));
      });
    const z = x.bind(null, v, E);
    return D.push(z), ie(D).then(() => {
      D = [];
      for (const N of a.list())
        D.push(Zt(N, v, E));
      return D.push(z), ie(D);
    }).then(() => {
      D = pi(j, "beforeRouteUpdate", v, E);
      for (const N of j)
        N.updateGuards.forEach((Q) => {
          D.push(Zt(Q, v, E));
        });
      return D.push(z), ie(D);
    }).then(() => {
      D = [];
      for (const N of ee)
        if (N.beforeEnter)
          if (Le(N.beforeEnter))
            for (const Q of N.beforeEnter)
              D.push(Zt(Q, v, E));
          else
            D.push(Zt(N.beforeEnter, v, E));
      return D.push(z), ie(D);
    }).then(() => (v.matched.forEach((N) => N.enterCallbacks = {}), D = pi(ee, "beforeRouteEnter", v, E), D.push(z), ie(D))).then(() => {
      D = [];
      for (const N of i.list())
        D.push(Zt(N, v, E));
      return D.push(z), ie(D);
    }).catch((N) => ft(
      N,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? N : Promise.reject(N));
  }
  function W(v, E, D) {
    l.list().forEach((B) => T(() => B(v, E, D)));
  }
  function I(v, E, D, B, j) {
    const ee = S(v, E);
    if (ee)
      return ee;
    const z = E === Ut, N = Bt ? history.state : {};
    D && (B || z ? s.replace(v.fullPath, q({
      scroll: z && N && N.scroll
    }, j)) : s.push(v.fullPath, j)), c.value = v, We(v, E, D, z), sn();
  }
  let K;
  function ce() {
    K || (K = s.listen((v, E, D) => {
      if (!an.listening)
        return;
      const B = f(v), j = k(B);
      if (j) {
        L(q(j, { replace: !0 }), B).catch(Zo);
        return;
      }
      g = B;
      const ee = c.value;
      Bt && E1(Uc(ee.fullPath, D.delta), Na()), oe(B, ee).catch((z) => ft(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : ft(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        z.to,
        B
        // avoid an uncaught rejection, let push call triggerError
      ).then((N) => {
        ft(
          N,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === ts.pop && s.go(-1, !1);
      }).catch(Zo), Promise.reject()) : (D.delta && s.go(-D.delta, !1), Ge(z, B, ee))).then((z) => {
        z = z || I(
          // after navigation, all matched components are resolved
          B,
          ee,
          !1
        ), z && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !ft(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === ts.pop && ft(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), W(B, ee, z);
      }).catch(Zo);
    }));
  }
  let qe = io(), kn = io(), Ft;
  function Ge(v, E, D) {
    sn(v);
    const B = kn.list();
    return B.length ? B.forEach((j) => j(v, E, D)) : ({}.NODE_ENV !== "production" && R("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function to() {
    return Ft && c.value !== Ut ? Promise.resolve() : new Promise((v, E) => {
      qe.add([v, E]);
    });
  }
  function sn(v) {
    return Ft || (Ft = !v, ce(), qe.list().forEach(([E, D]) => v ? D(v) : E()), qe.reset()), v;
  }
  function We(v, E, D, B) {
    const { scrollBehavior: j } = e;
    if (!Bt || !j)
      return Promise.resolve();
    const ee = !D && T1(Uc(v.fullPath, 0)) || (B || !D) && history.state && history.state.scroll || null;
    return _1().then(() => j(v, E, ee)).then((z) => z && A1(z)).catch((z) => Ge(z, v, E));
  }
  const Pe = (v) => s.go(v);
  let J;
  const ue = /* @__PURE__ */ new Set(), an = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: V,
    replace: A,
    go: Pe,
    back: () => Pe(-1),
    forward: () => Pe(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: kn.add,
    isReady: to,
    install(v) {
      const E = this;
      v.component("RouterLink", Cv), v.component("RouterView", $v), v.config.globalProperties.$router = E, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Jo(c)
      }), Bt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !J && c.value === Ut && (J = !0, V(s.location).catch((j) => {
        ({}).NODE_ENV !== "production" && R("Unexpected error when starting the router:", j);
      }));
      const D = {};
      for (const j in Ut)
        Object.defineProperty(D, j, {
          get: () => c.value[j],
          enumerable: !0
        });
      v.provide(Ua, E), v.provide(Cm, f1(D)), v.provide(rl, c);
      const B = v.unmount;
      ue.add(v), v.unmount = function() {
        ue.delete(v), ue.size < 1 && (g = Ut, K && K(), K = null, c.value = Ut, J = !1, Ft = !1), B();
      }, {}.NODE_ENV !== "production" && Bt && Av(v, E, t);
    }
  };
  function ie(v) {
    return v.reduce((E, D) => E.then(() => T(D)), Promise.resolve());
  }
  return an;
}
function Uv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const l = t.matched[i];
    l && (e.matched.find((g) => tn(g, l)) ? o.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((g) => tn(g, c)) || s.push(c));
  }
  return [n, o, s];
}
function he() {
  return Kn(Ua);
}
const Iv = {
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
}, zv = {
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
}, Rv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], Ov = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, Hv = {
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
}, jv = {
  languages: Iv,
  scriptgroups: zv,
  rtlscripts: Rv,
  regiongroups: Ov,
  territories: Hv
};
var Ce = jv;
function ds(e) {
  return !!Ce.languages[e];
}
function nn(e) {
  return ds(e) && Ce.languages[e].length === 1 ? Ce.languages[e][0] : !1;
}
function qv() {
  return Ce.languages;
}
function gs(e) {
  var t = nn(e);
  return t ? gs(t) : ds(e) ? Ce.languages[e][0] : "Zyyy";
}
function xl(e) {
  var t = nn(e);
  return t ? xl(t) : ds(e) && Ce.languages[e][1] || "UNKNOWN";
}
function os(e) {
  var t = nn(e);
  return t ? os(t) : ds(e) && Ce.languages[e][2] || e;
}
function Gv() {
  var e, t = {};
  for (e in Ce.languages)
    nn(e) || (t[e] = os(e));
  return t;
}
function Em(e) {
  var t, n, o = [];
  for (t in Ce.languages)
    if (!nn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === gs(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Wv(e) {
  return Em([e]);
}
function Tm(e) {
  var t;
  for (t in Ce.scriptgroups)
    if (Ce.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function bl(e) {
  return Tm(gs(e));
}
function Lm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = nn(n) || n, a = bl(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Bm(e) {
  var t, n, o, s = {};
  for (t in Ce.languages)
    if (!nn(t)) {
      for (n = 0; n < e.length; n++)
        if (xl(t).includes(e[n])) {
          o = bl(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Xv(e) {
  return Bm([e]);
}
function Kv(e) {
  var t, n, o, s = [];
  for (t = Lm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Yv(e, t) {
  var n = os(e) || e, o = os(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Pm(e) {
  return Ce.rtlscripts.includes(gs(e));
}
function Qv(e) {
  return Pm(e) ? "rtl" : "ltr";
}
function Jv(e) {
  return Ce.territories[e] || [];
}
function Zv(e, t) {
  t.target ? Ce.languages[e] = [t.target] : Ce.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: Zv,
  getAutonym: os,
  getAutonyms: Gv,
  getDir: Qv,
  getGroupOfScript: Tm,
  getLanguages: qv,
  getLanguagesByScriptGroup: Lm,
  getLanguagesByScriptGroupInRegion: Xv,
  getLanguagesByScriptGroupInRegions: Bm,
  getLanguagesInScript: Wv,
  getLanguagesInScripts: Em,
  getLanguagesInTerritory: Jv,
  getRegions: xl,
  getScript: gs,
  getScriptGroupOfLanguage: bl,
  isKnown: ds,
  isRedirect: nn,
  isRtl: Pm,
  sortByScriptGroup: Kv,
  sortByAutonym: Yv
};
const eS = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, tS = (e) => {
  const t = eS(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
}, nS = window.Vue.inject, oS = window.Vue.reactive;
var sS = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Fm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(sS, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(u) {
        this.locale = u;
      }
      convertPlural(u, d) {
        const m = /\d+=/i;
        if (!d || d.length === 0)
          return "";
        for (let h = 0; h < d.length; h++) {
          const w = d[h];
          if (m.test(w)) {
            if (parseInt(w.slice(0, w.indexOf("=")), 10) === u)
              return w.slice(w.indexOf("=") + 1);
            d[h] = void 0;
          }
        }
        d = d.filter((h) => !!h);
        let p = this.getPluralForm(u, this.locale);
        return p = Math.min(p, d.length - 1), d[p];
      }
      getPluralForm(u, d) {
        const m = new Intl.PluralRules(d), p = m.resolvedOptions().pluralCategories, h = m.select(u);
        return ["zero", "one", "two", "few", "many", "other"].filter((w) => p.includes(w)).indexOf(h);
      }
      convertNumber(u, d = !1) {
        let m = this.digitTransformTable(this.locale), p = "";
        if (d) {
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
      convertGrammar(u, d) {
        return u;
      }
      gender(u, d) {
        if (!d || d.length === 0)
          return "";
        for (; d.length < 2; )
          d.push(d[d.length - 1]);
        return u === "male" ? d[0] : u === "female" ? d[1] : d.length === 3 ? d[2] : d[0];
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
        let d = r.match(/[aou][^äöy]*$/i);
        const m = r;
        switch (r.match(/wiki$/i) && (d = !1), r.match(/[bcdfghjklmnpqrstvwxz]$/i) && (r += "i"), u) {
          case "genitive":
            r += "n";
            break;
          case "elative":
            r += d ? "sta" : "stä";
            break;
          case "partitive":
            r += d ? "a" : "ä";
            break;
          case "illative":
            r += r.slice(-1) + "n";
            break;
          case "inessive":
            r += d ? "ssa" : "ssä";
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
        let d, m, p, h;
        switch (d = "мæ", m = "", p = "", h = "", r.match(/тæ$/i) ? (r = r.slice(0, -1), d = "æм") : r.match(/[аæеёиоыэюя]$/i) ? m = "й" : r.match(/у$/i) ? r.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : r.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (p = "-"), u) {
          case "genitive":
            h = p + m + "ы";
            break;
          case "dative":
            h = p + m + "æн";
            break;
          case "allative":
            h = p + d;
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
    class l {
      constructor(u) {
        this.locale = u, this.language = new (a[u] || a.default)(u);
      }
      emit(u, d) {
        let m, p, h;
        switch (typeof u) {
          case "string":
          case "number":
            m = u;
            break;
          case "object":
            if (p = u.slice(1).map((w) => this.emit(w, d)), h = u[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            m = this[h](p, d);
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
        let d = "";
        return u.forEach((m) => {
          d += m;
        }), d;
      }
      replace(u, d) {
        const m = parseInt(u[0], 10);
        return m < d.length ? d[m] : "$" + (m + 1);
      }
      plural(u) {
        const d = parseFloat(this.language.convertNumber(u[0], 10)), m = u.slice(1);
        return m.length ? this.language.convertPlural(d, m) : "";
      }
      gender(u) {
        const d = u[0], m = u.slice(1);
        return this.language.gender(d, m);
      }
      grammar(u) {
        const d = u[0], m = u[1];
        return m && d && this.language.convertGrammar(m, d);
      }
      wikilink(u) {
        let d, m = u[0];
        m.charAt(0) === ":" && (m = m.slice(1));
        const p = `./${m}`;
        return d = u.length === 1 ? m : u[1], `<a href="${p}" title="${m}">${d}</a>`;
      }
      extlink(u) {
        if (u.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${u[0]}">${u[1]}</a>`;
      }
      bidi(u) {
        const d = function(m) {
          const p = m.match(i);
          return p ? p[2] === void 0 ? "ltr" : "rtl" : null;
        }(u[0]);
        return d === "ltr" ? "‪" + u[0] + "‬" : d === "rtl" ? "‫" + u[0] + "‬" : u[0];
      }
      formatnum(u) {
        const d = !!u[1] && u[1] === "R", m = u[0];
        return typeof m == "string" || typeof m == "number" ? this.language.convertNumber(m, d) : m;
      }
      htmlattributes(u) {
        const d = {};
        for (let m = 0, p = u.length; m < p; m += 2)
          d[u[m]] = u[m + 1];
        return d;
      }
      htmlelement(u) {
        const d = u.shift(), m = u.shift();
        let p = u, h = "";
        for (const w in m)
          h += ` ${w}="${m[w]}"`;
        return Array.isArray(p) || (p = [p]), `<${d}${h}>${p.join("")}</${d}>`;
      }
    }
    class c {
      constructor(u, { wikilinks: d = !1 } = {}) {
        this.locale = u, this.wikilinks = d, this.emitter = new l(this.locale);
      }
      parse(u, d) {
        if (u.includes("{{") || u.includes("<") || this.wikilinks && u.includes("[")) {
          const m = function(p, { wikilinks: h = !1 } = {}) {
            let w = 0;
            function f(C) {
              return () => {
                for (let M = 0; M < C.length; M++) {
                  const be = C[M]();
                  if (be !== null)
                    return be;
                }
                return null;
              };
            }
            function _(C) {
              const M = w, be = [];
              for (let ht = 0; ht < C.length; ht++) {
                const wt = C[ht]();
                if (wt === null)
                  return w = M, null;
                be.push(wt);
              }
              return be;
            }
            function S(C, M) {
              return () => {
                const be = w, ht = [];
                let wt = M();
                for (; wt !== null; )
                  ht.push(wt), wt = M();
                return ht.length < C ? (w = be, null) : ht;
              };
            }
            function V(C) {
              const M = C.length;
              return () => {
                let be = null;
                return p.slice(w, w + M) === C && (be = C, w += M), be;
              };
            }
            function A(C) {
              return () => {
                const M = p.slice(w).match(C);
                return M === null ? null : (w += M[0].length, M[0]);
              };
            }
            const k = A(/^\s+/), L = V("|"), x = V(":"), T = V("\\"), oe = A(/^./), W = V("$"), I = A(/^\d+/), K = V('"'), ce = V("'"), qe = A(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), kn = A(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Ft = f([Ge, A(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Ge() {
              const C = _([T, oe]);
              return C === null ? null : C[1];
            }
            const to = f([Ge, kn]), sn = f([Ge, qe]);
            function We() {
              const C = _([W, I]);
              return C === null ? null : ["REPLACE", parseInt(C[1], 10) - 1];
            }
            const Pe = (J = A(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), ue = function(C) {
              return C.toString();
            }, () => {
              const C = J();
              return C === null ? null : ue(C);
            });
            var J, ue;
            function an() {
              const C = _([L, S(0, ys)]);
              if (C === null)
                return null;
              const M = C[1];
              return M.length > 1 ? ["CONCAT"].concat(M) : M[0];
            }
            function ie() {
              const C = _([Pe, x, We]);
              return C === null ? null : [C[0], C[2]];
            }
            function v() {
              const C = _([Pe, x, ys]);
              return C === null ? null : [C[0], C[2]];
            }
            function E() {
              const C = _([Pe, x]);
              return C === null ? null : [C[0], ""];
            }
            const D = f([function() {
              const C = _([f([ie, v, E]), S(0, an)]);
              return C === null ? null : C[0].concat(C[1]);
            }, function() {
              const C = _([Pe, S(0, an)]);
              return C === null ? null : [C[0]].concat(C[1]);
            }]), B = V("{{"), j = V("}}"), ee = V("[["), z = V("]]"), N = V("["), Q = V("]");
            function Xe() {
              const C = _([B, D, j]);
              return C === null ? null : C[1];
            }
            const pe = f([function() {
              const C = _([S(1, ys), L, S(1, Ss)]);
              return C === null ? null : [["CONCAT"].concat(C[0]), ["CONCAT"].concat(C[2])];
            }, function() {
              const C = _([S(1, ys)]);
              return C === null ? null : [["CONCAT"].concat(C[0])];
            }]);
            function ql() {
              let C = null;
              const M = _([ee, pe, z]);
              if (M !== null) {
                const be = M[1];
                C = ["WIKILINK"].concat(be);
              }
              return C;
            }
            function Gl() {
              let C = null;
              const M = _([N, S(1, hp), k, S(1, Ss), Q]);
              return M !== null && (C = ["EXTLINK", M[1].length === 1 ? M[1][0] : ["CONCAT"].concat(M[1]), ["CONCAT"].concat(M[3])]), C;
            }
            const Oa = A(/^[A-Za-z]+/);
            function dp() {
              const C = A(/^[^"]*/), M = _([K, C, K]);
              return M === null ? null : M[1];
            }
            function gp() {
              const C = A(/^[^']*/), M = _([ce, C, ce]);
              return M === null ? null : M[1];
            }
            function mp() {
              const C = A(/^\s*=\s*/), M = _([k, Oa, C, f([dp, gp])]);
              return M === null ? null : [M[1], M[3]];
            }
            function pp() {
              const C = S(0, mp)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], C);
            }
            const hp = f([Xe, We, ql, Gl, function() {
              const C = S(1, Ft)();
              return C === null ? null : C.join("");
            }]), Ss = f([Xe, We, ql, Gl, function() {
              let C = null;
              const M = w, be = V("<"), ht = A(/^\/?/), wt = A(/^\s*>/), Ha = _([be, Oa, pp, ht, wt]);
              if (Ha === null)
                return null;
              const Xl = w, Kl = Ha[1], ja = S(0, Ss)(), wp = w, Yl = _([V("</"), Oa, wt]);
              if (Yl === null)
                return ["CONCAT", p.slice(M, Xl)].concat(ja);
              const fp = w, _p = Yl[1], Ql = Ha[2];
              if (function(rn, Cs, qa, Ga = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((rn = rn.toLowerCase()) !== (Cs = Cs.toLowerCase()) || Ga.allowedHtmlElements.indexOf(rn) === -1)
                  return !1;
                const vp = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ks = 0, Sp = qa.length; ks < Sp; ks += 2) {
                  const Wa = qa[ks];
                  if (Ga.allowedHtmlCommonAttributes.indexOf(Wa) === -1 && (Ga.allowedHtmlAttributesByElement[rn] || []).indexOf(Wa) === -1 || Wa === "style" && qa[ks + 1].search(vp) !== -1)
                    return !1;
                }
                return !0;
              }(Kl, _p, Ql.slice(1)))
                C = ["HTMLELEMENT", Kl, Ql].concat(ja);
              else {
                const rn = (Cs) => Cs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                C = ["CONCAT", rn(p.slice(M, Xl))].concat(ja, rn(p.slice(wp, fp)));
              }
              return C;
            }, function() {
              const C = S(1, sn)();
              return C === null ? null : C.join("");
            }]), ys = f([Xe, We, function() {
              const C = S(1, to)();
              return C === null ? null : C.join("");
            }]), Wl = function() {
              const C = S(0, Ss)();
              return C === null ? null : ["CONCAT"].concat(C);
            }();
            if (Wl === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return Wl;
          }(u, { wikilinks: this.wikilinks });
          return this.emitter.emit(m, d);
        }
        return this.simpleParse(u, d);
      }
      simpleParse(u, d) {
        return u.replace(/\$(\d+)/g, (m, p) => {
          const h = parseInt(p, 10) - 1;
          return d[h] !== void 0 ? d[h] : "$" + p;
        });
      }
    }
    class g {
      constructor(u) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(u, d) {
        if (typeof u != "object")
          throw new Error("Invalid message source. Must be an object");
        if (d) {
          if (!/^[a-zA-Z0-9-]+$/.test(d))
            throw new Error(`Invalid locale ${d}`);
          for (const m in u)
            if (m.indexOf("@") !== 0) {
              if (typeof u[m] == "object")
                return this.load(u);
              if (typeof u[m] != "string")
                throw new Error(`Invalid message for message ${m} in ${d} locale.`);
              break;
            }
          this.sourceMap.has(d) ? this.sourceMap.set(d, Object.assign(this.sourceMap.get(d), u)) : this.sourceMap.set(d, u);
        } else
          for (d in u)
            this.load(u[d], d);
      }
      getMessage(u, d) {
        const m = this.sourceMap.get(d);
        return m ? m[u] : null;
      }
      hasLocale(u) {
        return this.sourceMap.has(u);
      }
    }
    return class {
      constructor(r, { finalFallback: u = "en", messages: d, wikilinks: m = !1 } = {}) {
        this.locale = r, this.parser = new c(this.locale, { wikilinks: m }), this.messageStore = new g(), d && this.load(d, this.locale), this.finalFallback = u, this.wikilinks = m;
      }
      load(r, u) {
        return this.messageStore.load(r, u || this.locale);
      }
      i18n(r, ...u) {
        return this.parser.parse(this.getMessage(r), u);
      }
      setLocale(r) {
        this.locale = r, this.parser = new c(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(r) {
        let u = this.locale, d = 0;
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
          u = m[d], d++;
        }
        return r;
      }
      registerParserPlugin(r, u) {
        l.prototype[r] = u;
      }
    };
  });
})(Fm);
var aS = Fm.exports;
const Jc = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Mm = Symbol("banana-context");
function xe() {
  const e = nS(Mm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function iS(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = oS(new aS(e.locale, e));
  return {
    install: (n) => {
      n.provide(Mm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Jc(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Jc(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const rS = window.Vuex.useStore, lS = window.Vue.computed, cS = {
  name: "CxTranslationWork",
  components: { MwRow: F, MwCol: y, MwThumbnail: _l, MwIcon: me },
  props: {
    translation: {
      type: Ba,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = rS(), n = (a, i) => {
      const l = t.getters["mediawiki/getPage"](a, i);
      return l == null ? void 0 : l.thumbnail;
    }, o = xe();
    return {
      timeagoMessage: lS(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, i = tS(e.translation.startTimestamp);
        return o.i18n(
          a[i.postfix],
          i.value
        );
      }),
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      getImage: n,
      mwIconArrowForward: ml,
      mwIconArrowNext: pl
    };
  }
}, Bs = window.Vue.resolveComponent, bn = window.Vue.createVNode, _t = window.Vue.createElementVNode, Zc = window.Vue.renderSlot, eu = window.Vue.withModifiers, hi = window.Vue.toDisplayString, wi = window.Vue.withCtx, uS = window.Vue.openBlock, dS = window.Vue.createElementBlock, gS = window.Vue.createCommentVNode, mS = { class: "col shrink pe-4" }, pS = { class: "col" }, hS = { class: "cx-translation__details column justify-between ma-0" }, wS = { class: "row ma-0" }, fS = { class: "col grow" }, _S = { class: "col shrink ps-2" }, vS = ["dir", "textContent"], SS = ["dir", "textContent"], yS = ["textContent"];
function CS(e, t, n, o, s, a) {
  const i = Bs("mw-thumbnail"), l = Bs("mw-icon"), c = Bs("mw-col"), g = Bs("mw-row");
  return n.translation ? (uS(), dS("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = eu((r) => e.$emit("click"), ["stop"]))
  }, [
    _t("div", mS, [
      bn(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    _t("div", pS, [
      _t("div", hS, [
        _t("div", wS, [
          _t("div", fS, [
            Zc(e.$slots, "title")
          ]),
          _t("div", _S, [
            bn(l, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = eu((r) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Zc(e.$slots, "mid-content"),
        bn(g, { class: "cx-translation__footer ma-0" }, {
          default: wi(() => [
            bn(c, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: wi(() => [
                _t("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: hi(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, vS),
                bn(l, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                _t("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: hi(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, SS)
              ]),
              _: 1
            }),
            bn(c, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: wi(() => [
                _t("span", {
                  textContent: hi(o.timeagoMessage)
                }, null, 8, yS)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : gS("", !0);
}
const Nm = /* @__PURE__ */ P(cS, [["render", CS]]);
const lo = window.Vue.unref, tu = window.Vue.toDisplayString, kS = window.Vue.normalizeClass, xS = window.Vue.createElementVNode, fi = window.Vue.openBlock, bS = window.Vue.createElementBlock, nu = window.Vue.createCommentVNode, ou = window.Vue.createVNode, Ps = window.Vue.withCtx, su = window.Vue.createBlock, $S = ["lang", "textContent"], VS = ["lang", "textContent"], DS = window.Vue.computed, AS = window.Vue.inject, ES = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: vl,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = AS("colors").gray200, s = DS(
      () => {
        var a;
        return ((a = t.translation.progress) == null ? void 0 : a.any) * 100 || 0;
      }
    );
    return (a, i) => (fi(), su(Nm, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": lo(Rg),
      onActionIconClicked: i[0] || (i[0] = (l) => a.$emit("delete-translation"))
    }, {
      title: Ps(() => [
        xS("h5", {
          class: kS(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: tu(e.translation.sourceTitle)
        }, null, 10, $S),
        e.translation.isLeadSectionTranslation ? nu("", !0) : (fi(), bS("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: tu(e.translation.sourceSectionTitle)
        }, null, 8, VS))
      ]),
      "mid-content": Ps(() => [
        e.translation.progress ? (fi(), su(lo(F), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ps(() => [
            ou(lo(y), null, {
              default: Ps(() => [
                ou(lo(Gg), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: lo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : nu("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, TS = window.Vue.computed, LS = window.Vue.inject, ms = () => {
  const e = LS("breakpoints");
  return { isDesktop: TS(
    () => !H.isMobileDomain() && e.value.tabletAndUp
  ) };
}, BS = window.Vuex.useStore, $l = () => {
  const e = BS();
  return (t, n, o, s = !0) => b(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!a) {
      a = yield He.fetchSectionSuggestions(
        t,
        o,
        n
      );
      try {
        if (yield e.dispatch("mediawiki/fetchPageMetadata", {
          language: t,
          titles: [o]
        }), a)
          a.isListable = s, e.commit("suggestions/addSectionSuggestion", a);
        else {
          const i = e.getters["mediawiki/getPage"](
            t,
            o
          );
          a = new Wn({
            sourceLanguage: t,
            targetLanguage: n,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: i.title
          }), s && e.commit(
            "suggestions/addPageSuggestion",
            new yl({
              sourceLanguage: t,
              targetLanguage: n,
              sourceTitle: o,
              langLinksCount: i.langLinksCount,
              wikidataId: i.wikidataId
            })
          );
        }
      } catch (i) {
        throw new Error(
          `No page metadata found for title ${o} and language pair ${t}-${n}`
        );
      }
    }
    return a;
  });
}, PS = window.Vuex.useStore, Ia = () => {
  const e = PS(), t = he(), n = $l(), { setTranslationURLParams: o } = G();
  return (s, a, i, l) => b(void 0, null, function* () {
    const c = yield n(
      a,
      i,
      s
    );
    c && (e.dispatch("application/getCXServerToken"), o(c), t.push({
      name: "sx-translation-confirmer",
      query: { eventSource: l }
    }));
  });
}, $n = window.Vue.computed;
function U(e) {
  const t = $n(() => e.state.application.sourceLanguage), n = $n(() => e.state.application.targetLanguage), o = $n(
    () => e.state.application.currentMTProvider
  ), s = $n(
    () => O.getAutonym(t.value)
  ), a = $n(
    () => O.getAutonym(n.value)
  ), i = $n(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: i,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const FS = window.Vuex.useStore, MS = window.Vue.computed, ps = () => {
  const e = FS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = G();
  return { currentTranslation: MS(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, NS = window.Vuex.useStore, Vl = () => {
  const e = Ia(), t = NS(), { sourceLanguage: n, targetLanguage: o } = U(t), s = (r, u) => e(
    r,
    n.value,
    o.value,
    u
  );
  return {
    startRecentlyEditedSectionTranslation: (r) => s(r.title, "suggestion_recent_edit"),
    startNearbySectionTranslation: (r) => s(r.title, "suggestion_nearby"),
    startSearchResultSectionTranslation: (r) => s(r.title, "search_result"),
    startPageSuggestion: (r) => s(r.sourceTitle, "suggestion_no_seed"),
    startPublishedTranslation: (r) => s(r.sourceTitle, "continue_published")
  };
}, au = window.Vue.computed, US = window.Vuex.useStore;
function hs() {
  const e = US(), t = au(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: au(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const IS = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = G(), s = H.getCurrentWikiLanguageCode(), a = (u) => !e || Array.isArray(e) && e.includes(u), i = (u) => t.includes(u), l = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let c;
  return o.value && a(o.value) && i(o.value) ? c = o.value : a(s) && i(s) ? c = s : c = (e == null ? void 0 : e[0]) || l.targetLanguage, { sourceLanguage: [
    n.value,
    l.sourceLanguage,
    s,
    l.targetLanguage
  ].filter((u) => i(u)).find((u) => u !== c), targetLanguage: c };
};
class zS {
  /**
   * Creates an instance of SuggestionSeedCollection.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string[]} options.seeds
   */
  constructor({ sourceLanguage: t, targetLanguage: n, seeds: o = [] }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.seeds = o.sort(() => Math.random() - 0.5);
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
const RS = window.Vuex.useStore, OS = () => {
  const e = RS();
  return () => b(void 0, null, function* () {
    const { sourceLanguage: t, targetLanguage: n } = U(e), o = yield He.fetchSuggestionSeeds(
      t.value,
      n.value
    ), s = new zS({
      sourceLanguage: t,
      targetLanguage: n,
      seeds: o
    });
    return e.commit("suggestions/addSuggestionSeedCollection", s), s;
  });
}, HS = window.Vuex.useStore, Dl = () => {
  const e = HS(), { sourceLanguage: t, targetLanguage: n } = U(e), o = (u) => {
    if (!u)
      return !1;
    const d = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), p = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((h) => h.sourceTitle);
    return !d.includes(u.sourceTitle) && !p.includes(u.sourceTitle);
  }, s = (u) => {
    const { pageSuggestions: d } = e.state.suggestions;
    return !d.some(
      (p) => p.sourceLanguage === u.sourceLanguage && p.targetLanguage === u.targetLanguage && p.sourceTitle === u.sourceTitle
    ) && o(u);
  }, a = (u) => e.state.suggestions.sectionSuggestions.some(
    (d) => d.sourceLanguage === u.sourceLanguage && d.targetLanguage === u.targetLanguage && d.sourceTitle === u.sourceTitle
  ), i = (u) => {
    if (!u)
      return !1;
    const d = e.state.suggestions.appendixSectionTitles[n.value] || [];
    return !a(u) && o(u) && u.isValid(d);
  }, l = (u) => {
    try {
      const d = u.map((m) => m.sourceTitle);
      if (d.length)
        return e.dispatch("mediawiki/fetchPageMetadata", {
          language: t.value,
          titles: d
        });
    } catch (d) {
      mw.log.error("Page suggestions fetching failed!");
    }
  }, c = (u, d) => b(void 0, null, function* () {
    let m = e.getters["suggestions/findSuggestionSeedCollection"](u, d);
    return !m || !m.seeds.length ? (mw.log.error("No suggestion seed found! Suggestion fetching will fail!"), null) : m.shiftSeeds();
  });
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const u = e.getters["suggestions/getNumberOfSectionSuggestionsToFetch"](t.value, n.value), d = [];
      for (; d.length < u; ) {
        const m = yield c(
          t.value,
          n.value
        );
        if (!m)
          break;
        const p = yield He.fetchSectionSuggestions(
          t.value,
          m,
          n.value
        );
        i(p) ? d.push(p) : p && !a(p) && (p.isListable = !1, e.commit("suggestions/addSectionSuggestion", p));
      }
      d.forEach(
        (m) => e.commit("suggestions/addSectionSuggestion", m)
      ), l(d), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const u = e.getters["suggestions/getNumberOfPageSuggestionsToFetch"](t.value, n.value), d = [];
      for (; d.length < u; ) {
        const m = yield c(
          t.value,
          n.value
        );
        if (!m)
          break;
        let p = yield He.fetchPageSuggestions(
          t.value,
          n.value,
          m
        );
        p = p.filter(
          (h) => s(h)
        ), p = p.slice(0, u), d.push(...p);
      }
      d.forEach(
        (m) => e.commit("suggestions/addPageSuggestion", m)
      ), l(d), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, jS = window.Vuex.useStore, Al = () => {
  const e = jS(), t = OS(), { fetchNextSectionSuggestionsSlice: n, fetchNextPageSuggestionsSlice: o } = Dl();
  return () => b(void 0, null, function* () {
    yield t();
    const { targetLanguage: s } = U(e), a = e.getters["application/getSectionSuggestionsSliceByIndex"](0), i = e.getters["application/getPageSuggestionsSliceByIndex"](0), { maxSuggestionsPerSlice: l } = e.state.suggestions, c = a.length === l, g = i.length === l;
    c && g || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      s.value
    ), n(), o());
  });
}, iu = window.Vue.computed, qS = window.Vuex.useStore, Pt = () => {
  const e = qS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = G(), s = iu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = iu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(c)
  };
}, ws = window.Vuex.useStore, fs = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = H.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = ke({ sx: !0 }, s), o && (s.section = o), location.href = H.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: GS, pageURLParameter: WS, sectionURLParameter: XS } = G(), _s = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), GS(t, n);
}, Um = () => {
  const e = ws(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = hs();
  return () => b(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = IS(
      t.value,
      n.value
    );
    fs(
      o,
      s,
      WS.value,
      XS.value
    ) || _s(e, o, s);
  });
}, Im = () => {
  const e = ws(), t = Al();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = U(e);
    n === o && (n = a.value, o = s.value), fs(
      n,
      o,
      null,
      null
    ) || (_s(e, n, o), t());
  };
}, KS = () => {
  const e = ws(), t = Al();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      fs(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (_s(e, o, s), t());
    }
  );
}, YS = () => {
  const e = ws();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    fs(
      n,
      o,
      s,
      null
    ) || _s(e, n, o);
  };
}, QS = () => {
  const e = ws(), t = $l(), { currentLanguageTitleGroup: n } = Pt();
  return (o, s) => b(void 0, null, function* () {
    const { sourceLanguage: a, targetLanguage: i } = U(e);
    o === s && (o = i.value, s = a.value);
    const l = n.value.getTitleForLanguage(o);
    fs(
      o,
      s,
      l,
      null
    ) || (_s(e, o, s), n.value.hasLanguage(i.value) && (yield t(
      a.value,
      i.value,
      l
    )), e.dispatch("application/getCXServerToken"));
  });
}, JS = window.Vuex.useStore, ZS = () => {
  const e = JS();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return s || (s = yield He.fetchSectionSuggestions(
      t,
      o,
      n
    ), s || (s = new Wn({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      isListable: !1
    })), e.commit("suggestions/addSectionSuggestion", s)), s;
  });
}, ey = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', ty = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', ny = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', oy = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', sy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', ay = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', iy = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', ry = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', ly = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', cy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', uy = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', dy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', gy = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', my = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', py = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', hy = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', wy = '<path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z"/><path d="m11 1 3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z"/>', fy = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', _y = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', vy = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', Sy = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', yy = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', Cy = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', ky = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', xy = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', cl = ey, zm = ty, Rm = {
  ltr: ny,
  shouldFlip: !0
}, by = oy, $y = sy, Vy = ay, Dy = iy, Ay = ry, Ey = ly, za = cy, El = uy, Om = dy, Ty = gy, Ly = {
  langCodeMap: {
    ar: my
  },
  default: py
}, By = hy, Tl = {
  ltr: wy,
  shouldFlip: !0
}, Py = fy, vs = {
  ltr: _y,
  shouldFlip: !0
}, Ll = {
  ltr: vy,
  shouldFlip: !0
}, Fy = {
  ltr: Sy,
  shouldFlip: !0
}, Hm = yy, My = Cy, Ny = ky, Uy = xy;
const Fs = window.Vue.withModifiers, _i = window.Vue.toDisplayString, vi = window.Vue.createElementVNode, Me = window.Vue.unref, Ms = window.Vue.openBlock, ru = window.Vue.createBlock;
window.Vue.createCommentVNode;
const It = window.Vue.createVNode, ln = window.Vue.withCtx, lu = window.Vue.createElementBlock, Iy = ["lang", "href", "textContent"], zy = {
  key: 1,
  class: "flex"
}, Ry = { key: 2 }, Oy = window.Vuex.useStore, cu = window.Vue.computed, uu = window.Vue.ref, Si = window.Codex.CdxButton, yi = window.Codex.CdxIcon, Hy = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Sl,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Oy(), o = uu(!0), s = uu(null), a = cu(() => {
      var w;
      return (w = s.value) == null ? void 0 : w.missingSections;
    }), i = cu(
      () => a.value && Object.keys(a.value)[0]
    );
    ZS()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((w) => s.value = w).catch((w) => console.log(w)).finally(() => o.value = !1);
    const c = he();
    ms();
    const { setTranslationURLParams: g, setSectionURLParam: r } = G(), u = (w) => {
      n.dispatch("application/getCXServerToken"), g(s.value), w && r(w), c.push({
        name: "sx-translation-confirmer"
      });
    }, d = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: m } = Vl();
    U(n);
    const p = YS(), h = () => {
      p(t.translation), m(t.translation);
    };
    return (w, f) => (Ms(), ru(Nm, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: d
    }, {
      title: ln(() => [
        vi("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = Fs(() => {
          }, ["stop"])),
          textContent: _i(e.translation.sourceTitle)
        }, null, 8, Iy)
      ]),
      "mid-content": ln(() => [
        It(Me(F), { class: "ma-0" }, {
          default: ln(() => [
            It(Me(y), null, {
              default: ln(() => [
                o.value ? (Ms(), ru(Me(nt), { key: 0 })) : a.value ? (Ms(), lu("div", zy, [
                  It(Me(Si), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = Fs((_) => u(i.value), ["stop"]))
                  }, {
                    default: ln(() => [
                      It(Me(yi), {
                        class: "me-1",
                        icon: Me(cl)
                      }, null, 8, ["icon"]),
                      vi("span", null, _i(i.value), 1)
                    ]),
                    _: 1
                  }),
                  It(Me(Si), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": w.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = Fs((_) => u(null), ["stop"]))
                  }, {
                    default: ln(() => [
                      It(Me(yi), { icon: Me(Om) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Ms(), lu("div", Ry, [
                  It(Me(Si), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: Fs(h, ["stop"])
                  }, {
                    default: ln(() => [
                      It(Me(yi), {
                        class: "me-1",
                        icon: Me(cl)
                      }, null, 8, ["icon"]),
                      vi("span", null, _i(w.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, jm = "cx-translation-session-position-", qm = () => jm + mw.user.sessionId(), Gm = () => {
  const e = qm();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, jy = function() {
  const e = Gm();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(jm)).forEach((n) => mw.storage.remove(n));
  const t = qm();
  mw.storage.set(t, e + 1);
};
let ul = null;
function qy(e) {
  if (ul)
    return Promise.resolve(ul);
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
function Gy(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Wy(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), l = Gm(), c = {
    $schema: "/analytics/mediawiki/content_translation_event/1.4.0",
    translation_type: "section",
    wiki_db: n,
    access_method: t,
    user_name: i,
    web_session_id: mw.user.sessionId(),
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: l
  };
  let g;
  return a ? g = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, c, e))
  ) : g = qy(i).then((r) => {
    ul = r, mw.eventLog.submit(
      s,
      Object.assign({}, c, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: Gy(r)
      })
    );
  }), g.then(() => {
    jy();
  });
}
const Xy = window.Vue.inject, Wm = Symbol("event-logging-context"), pt = function() {
  const e = Xy(Wm);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, Ky = () => ({
  install: (e) => {
    e.provide(Wm, Wy);
  }
}), du = window.Vuex.useStore, Yy = () => {
  const e = du(), { commit: t } = du(), { sourceLanguage: n, targetLanguage: o } = U(e), s = pt();
  return (a) => b(void 0, null, function* () {
    a.sectionTranslationId ? (yield je.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield je.deleteCXTranslation(
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
    MwButton: De,
    MwDialog: ot
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ba,
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
}, Jy = window.Vue.resolveDirective, Ci = window.Vue.createElementVNode, Zy = window.Vue.withDirectives, gu = window.Vue.resolveComponent, mu = window.Vue.createVNode, pu = window.Vue.withCtx, eC = window.Vue.openBlock, tC = window.Vue.createBlock, nC = { class: "pa-4" }, oC = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function sC(e, t, n, o, s, a) {
  const i = gu("mw-button"), l = gu("mw-dialog"), c = Jy("i18n");
  return eC(), tC(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: pu(() => [
      Ci("div", oC, [
        mu(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        mu(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: pu(() => [
      Ci("div", nC, [
        Zy(Ci("span", null, null, 512), [
          [c, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const aC = /* @__PURE__ */ P(Qy, [["render", sC]]);
function iC(e, t, n) {
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
    return s.length ? s : n ? (yield rC(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function hu(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield iC(e, t, n)).sort(O.sortByAutonym);
  });
}
function rC(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function lC() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function cC(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function uC(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const dC = window.Vue.computed;
function gC(e, t) {
  const n = dC(() => {
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
const ki = window.Vue.ref, wu = window.Vue.watch, mC = window.Vue.computed;
function pC(e, t, n) {
  const o = ki(""), s = ki(-1), a = ki(null), i = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = mC(
    () => e.value ? t.value : [...n, ...t.value]
  ), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return wu(e, () => {
    s.value = -1;
  }), wu(s, () => b(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: c, langSelectorContainer: a, selectedLanguage: o };
}
function Bl(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, l = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const xi = window.Vue.ref, hC = window.Vue.watch, wC = window.Vue.onMounted, fu = window.Vue.computed, fC = {
  name: "MwLanguageSelector",
  components: {
    MwInput: fl
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
      default: lC
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = xi(null), o = xi(""), s = xi([]), a = fu(
      () => cC(s.value)
    ), i = fu(
      () => uC(s.value)
    ), l = (f) => t.emit("select", f), c = () => t.emit("close"), { autocompletion: g, onTabSelect: r } = gC(
      o,
      s
    ), { next: u, prev: d, langSelectorContainer: m, selectedLanguage: p } = pC(o, s, e.suggestions), h = () => {
      if (o.value && e.languages.includes(o.value)) {
        l(o.value);
        return;
      }
      if (p.value) {
        l(p.value);
        return;
      }
      if (s.value.length === 1) {
        l(s.value[0]);
        return;
      }
    };
    return hC(o, Bl(() => b(this, null, function* () {
      s.value = yield hu(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), wC(() => b(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield hu(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: g,
      close: c,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      langSelectorContainer: m,
      mwIconClose: Cn,
      mwIconSearch: Og,
      next: u,
      onEnter: h,
      onTabSelect: r,
      prev: d,
      resultsDisplayClass: i,
      searchInputElement: n,
      searchQuery: o,
      searchResultsByScript: a,
      select: l,
      selectedLanguage: p
    };
  }
}, Ns = window.Vue.renderSlot, _C = window.Vue.resolveComponent, _u = window.Vue.createVNode, co = window.Vue.withModifiers, uo = window.Vue.withKeys, zt = window.Vue.createElementVNode, vC = window.Vue.resolveDirective, Us = window.Vue.withDirectives, bi = window.Vue.renderList, $i = window.Vue.Fragment, vt = window.Vue.openBlock, St = window.Vue.createElementBlock, vu = window.Vue.toDisplayString, Is = window.Vue.normalizeClass, Vi = window.Vue.createCommentVNode, SC = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, yC = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, CC = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, kC = { class: "results px-3 pt-4" }, xC = { class: "results-header ps-8 pb-2" }, bC = { class: "results-languages--suggestions pa-0 ma-0" }, $C = ["lang", "dir", "aria-selected", "onClick", "textContent"], VC = { class: "results px-3 pt-4" }, DC = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, AC = ["lang", "dir", "aria-selected", "onClick", "textContent"], EC = ["aria-selected"], TC = { class: "no-results px-3 py-4" }, LC = { class: "ps-8" };
function BC(e, t, n, o, s, a) {
  const i = _C("mw-input"), l = vC("i18n");
  return vt(), St("div", SC, [
    Ns(e.$slots, "search", {}, () => [
      zt("div", yC, [
        _u(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (c) => o.autocompletion = c),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        _u(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (c) => o.searchQuery = c),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            uo(co(o.onEnter, ["prevent"]), ["enter"]),
            uo(co(o.next, ["stop", "prevent"]), ["down"]),
            uo(co(o.prev, ["stop", "prevent"]), ["up"]),
            uo(co(o.close, ["prevent"]), ["esc"]),
            uo(co(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    zt("section", CC, [
      n.suggestions.length && !o.searchQuery ? Ns(e.$slots, "suggestions", { key: 0 }, () => [
        zt("section", kC, [
          Us(zt("p", xC, null, 512), [
            [l, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          zt("ul", bC, [
            (vt(!0), St($i, null, bi(n.suggestions, (c) => (vt(), St("li", {
              key: c,
              class: Is(["language pa-2 ps-8 ma-0", c === o.selectedLanguage ? "language--selected" : ""]),
              lang: c,
              dir: o.getDir(c),
              "aria-selected": c === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (g) => o.select(c),
              textContent: vu(o.getAutonym(c))
            }, null, 10, $C))), 128))
          ])
        ])
      ]) : Vi("", !0),
      o.searchResultsByScript.length ? Ns(e.$slots, "search", { key: 1 }, () => [
        zt("section", VC, [
          n.suggestions.length && !o.searchQuery ? Us((vt(), St("p", DC, null, 512)), [
            [l, void 0, "cx-sx-language-selector-all-languages"]
          ]) : Vi("", !0),
          (vt(!0), St($i, null, bi(o.searchResultsByScript, (c, g) => (vt(), St("ul", {
            key: g,
            class: Is(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (vt(!0), St($i, null, bi(c, (r) => (vt(), St("li", {
              key: r,
              class: Is(["language pa-2 ps-8 ma-0", r === o.selectedLanguage ? "language--selected" : ""]),
              lang: r,
              dir: o.getDir(r),
              role: "option",
              "aria-selected": r === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(r),
              textContent: vu(o.getAutonym(r))
            }, null, 10, AC))), 128)),
            n.allOptionEnabled && !o.searchQuery ? Us((vt(), St("li", {
              key: 0,
              class: Is(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (r) => o.select("all"))
            }, null, 10, EC)), [
              [l, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : Vi("", !0)
          ], 2))), 128))
        ])
      ]) : Ns(e.$slots, "noresults", { key: 2 }, () => [
        zt("section", TC, [
          Us(zt("h3", LC, null, 512), [
            [l, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Xm = /* @__PURE__ */ P(fC, [["render", BC]]);
const we = window.Vue.unref, PC = window.Vue.resolveDirective, Su = window.Vue.withDirectives, go = window.Vue.openBlock, mo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const yu = window.Vue.toDisplayString, Cu = window.Vue.withModifiers, cn = window.Vue.withCtx, yt = window.Vue.createVNode, FC = { class: "sx-translation-list-language-selector" }, MC = {
  key: 0,
  class: "mw-ui-autonym"
}, NC = ["lang", "dir", "textContent"], UC = {
  key: 0,
  class: "mw-ui-autonym"
}, IC = ["lang", "dir", "textContent"], po = window.Vue.computed, zC = window.Vue.inject, RC = window.Vue.ref, Pl = {
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
    const n = e, o = t, s = zC("breakpoints"), a = po(() => s.value.mobile), i = RC(null), l = po(() => !!i.value), c = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, u = po(() => {
      if (!l.value)
        return;
      const w = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[w];
    }), d = (h) => {
      const f = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(f, h);
    }, m = po(
      () => n.selectedSourceLanguage === "all"
    ), p = po(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const f = PC("i18n");
      return go(), mo("div", FC, [
        yt(we(F), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: cn(() => [
            yt(we(y), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: cn(() => [
                yt(we(De), {
                  indicator: we(el),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: Cu(c, ["stop"])
                }, {
                  default: cn(() => [
                    m.value ? Su((go(), mo("span", MC, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (go(), mo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: we(O.getDir)(e.selectedSourceLanguage),
                      textContent: yu(we(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, NC))
                  ]),
                  _: 1
                }, 8, ["indicator", "onClick"])
              ]),
              _: 1
            }),
            yt(we(y), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: cn(() => [
                yt(we(me), { icon: we(pl) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            yt(we(y), { cols: "5" }, {
              default: cn(() => [
                yt(we(De), {
                  indicator: we(el),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Cu(g, ["stop"])
                }, {
                  default: cn(() => [
                    p.value ? Su((go(), mo("span", UC, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (go(), mo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: we(O.getDir)(e.selectedTargetLanguage),
                      textContent: yu(we(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, IC))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        yt(we(ot), {
          value: l.value,
          "onUpdate:value": w[0] || (w[0] = (_) => l.value = _),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: r
        }, {
          default: cn(() => [
            yt(we(Xm), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: u.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: d,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ]);
    };
  }
}, OC = window.Vue.toDisplayString, HC = window.Vue.createElementVNode, ku = window.Vue.createVNode, xu = window.Vue.unref, Rt = window.Vue.openBlock, zs = window.Vue.createBlock, bu = window.Vue.createCommentVNode, $u = window.Vue.renderList, Vu = window.Vue.Fragment, Rs = window.Vue.createElementBlock, jC = window.Vue.normalizeClass, Du = window.Vue.withCtx, qC = ["textContent"], GC = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, WC = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Os = window.Vue.ref, Ct = window.Vue.computed, XC = window.Vuex.useStore, Au = {
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
    const t = e, n = Os("all"), o = Os("all"), s = XC(), a = Ct(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = hs(), l = Os(!1), c = Os(null), g = Ct(
      () => t.translationStatus === "draft"
    ), r = Ct(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), u = Ct(
      () => n.value === "all"
    ), d = Ct(
      () => o.value === "all"
    ), m = Ct(
      () => r.value.filter(
        (A) => (u.value || A.sourceLanguage === n.value) && (d.value || A.targetLanguage === o.value)
      ).sort((A, k) => A.lastUpdatedTimestamp < k.lastUpdatedTimestamp)
    ), p = Ct(() => {
      let A = r.value.map(
        (k) => k.targetLanguage
      );
      return i.value && (A = A.filter(
        (k) => i.value.includes(k)
      )), [...new Set(A)];
    }), h = Ct(() => {
      const A = r.value.map(
        (k) => k.sourceLanguage
      );
      return [...new Set(A)];
    }), w = (A) => {
      c.value = A, l.value = !0;
    }, f = Ct(() => t.activeStatus === t.translationStatus), _ = he(), { setTranslationURLParams: S } = G(), V = (A) => {
      S(A), _.push({
        name: "sx-translation-confirmer"
      });
    };
    return (A, k) => f.value ? (Rt(), zs(xu(Oe), {
      key: 0,
      class: jC(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: Du(() => [
        HC("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: OC(A.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, qC)
      ]),
      default: Du(() => [
        ku(Pl, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": k[0] || (k[0] = (L) => n.value = L),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": k[1] || (k[1] = (L) => o.value = L),
          "source-languages": h.value,
          "target-languages": p.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? bu("", !0) : (Rt(), zs(xu(nt), { key: 0 })),
        g.value ? (Rt(), Rs("div", GC, [
          (Rt(!0), Rs(Vu, null, $u(m.value, (L) => (Rt(), zs(ES, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onClick: (x) => V(L),
            onDeleteTranslation: (x) => w(L)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (Rt(), Rs("div", WC, [
          (Rt(!0), Rs(Vu, null, $u(m.value, (L) => (Rt(), zs(Hy, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (x) => w(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        ku(aC, {
          modelValue: l.value,
          "onUpdate:modelValue": k[2] || (k[2] = (L) => l.value = L),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : bu("", !0);
  }
}, KC = window.Vue.computed, YC = window.Vuex.useStore, Be = () => {
  const e = YC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = G();
  return { sectionSuggestion: KC(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Eu = window.Vue.computed, QC = window.Vuex.useStore, st = () => {
  const e = QC(), { sectionSuggestion: t } = Be(), { currentTranslation: n } = ps(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = G(), i = Eu(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Eu(() => {
    var g, r;
    const c = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      c
    );
  });
  return { currentSourcePage: i, currentTargetPage: l };
}, JC = window.Vue.ref, ZC = (e, t) => b(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, l = (yield He.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((c) => c.level === "2").reduce((c, g, r, u) => {
    const d = r < u.length - 1 ? u[r + 1].byteoffset : s;
    return c[g.line] = d - g.byteoffset, c;
  }, {});
  return Object.keys(l).filter((c) => a[c]).reduce((c, g) => c + l[g], 0);
}), Di = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, ek = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, tk = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Km = () => {
  const { currentSourcePage: e } = st(), { sectionSuggestion: t } = Be(), n = JC(null);
  if (t.value)
    ZC(e.value, t.value).then(
      (o) => {
        n.value = tk(
          Di(o),
          Object.keys(t.value.missingSections).length
        );
      }
    );
  else if (e.value) {
    const o = Di(e.value.articleSize);
    n.value = ek(o);
  }
  return { translationSizeMessageArgs: n, bytesToMinutes: Di };
};
const se = window.Vue.unref, at = window.Vue.createVNode, Ot = window.Vue.createElementVNode, Hs = window.Vue.toDisplayString, Ke = window.Vue.withCtx, nk = window.Vue.resolveDirective, Ai = window.Vue.withDirectives, Vn = window.Vue.openBlock, ho = window.Vue.createBlock, wo = window.Vue.createCommentVNode, Tu = window.Vue.withModifiers, ok = window.Vue.createElementBlock, sk = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, ak = { class: "col shrink pe-4" }, ik = ["lang", "dir", "textContent"], rk = ["lang", "dir", "textContent"], lk = ["textContent"], ck = ["textContent"], it = window.Vue.computed, uk = window.Vue.inject, dk = window.Vuex.useStore, dl = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [yl, Wn, Xn],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = dk(), { bytesToMinutes: o } = Km(), s = it(() => t.suggestion), a = it(
      () => s.value.sourceTitle || s.value.title
    ), i = it(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), l = it(
      () => {
        var f;
        return (f = s.value) == null ? void 0 : f.missingSectionsCount;
      }
    ), c = it(() => {
      var f;
      return (f = i.value) == null ? void 0 : f.description;
    }), g = it(
      () => s.value instanceof Wn
    ), r = it(
      () => s.value instanceof Xn
    ), { sourceLanguageAutonym: u, targetLanguageAutonym: d } = U(n), m = it(
      () => r.value ? lw : rw
    ), p = uk("colors"), h = it(
      () => r.value ? p.blue600 : "currentColor"
    ), w = it(() => {
      var f;
      return o((f = i.value) == null ? void 0 : f.articleSize) < 15;
    });
    return (f, _) => {
      const S = nk("i18n");
      return s.value ? (Vn(), ok("div", sk, [
        Ot("div", ak, [
          at(se(_l), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        at(se(F), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: Ke(() => [
            at(se(F), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: Ke(() => [
                at(se(y), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: Ke(() => [
                    Ot("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: se(O.getDir)(s.value.sourceLanguage),
                      textContent: Hs(a.value)
                    }, null, 8, ik)
                  ]),
                  _: 1
                }),
                at(se(y), { shrink: "" }, {
                  default: Ke(() => [
                    Ot("p", {
                      class: "ma-0 cx-suggestion__source-description complementary",
                      lang: s.value.sourceLanguage,
                      dir: se(O.getDir)(s.value.sourceLanguage),
                      textContent: Hs(c.value)
                    }, null, 8, rk)
                  ]),
                  _: 1
                }),
                w.value && !g.value ? (Vn(), ho(se(y), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: Ke(() => [
                    Ai(Ot("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : wo("", !0),
                g.value ? (Vn(), ho(se(y), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: Ke(() => [
                    Ai(Ot("small", null, null, 512), [
                      [S, [l.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (Vn(), ho(se(y), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: Ke(() => [
                    at(se(F), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: Ke(() => [
                        at(se(y), { grow: "" }, {
                          default: Ke(() => [
                            Ot("small", {
                              textContent: Hs(se(u))
                            }, null, 8, lk),
                            at(se(me), {
                              icon: se(pl),
                              size: "14",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Ot("small", {
                              textContent: Hs(se(d))
                            }, null, 8, ck)
                          ]),
                          _: 1
                        }),
                        l.value ? (Vn(), ho(se(y), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: Ke(() => [
                            Ai(Ot("small", null, null, 512), [
                              [S, [
                                l.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : wo("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : wo("", !0)
              ]),
              _: 1
            }),
            at(se(y), { shrink: "" }, {
              default: Ke(() => [
                r.value ? wo("", !0) : (Vn(), ho(se(me), {
                  key: 0,
                  icon: se(Cn),
                  size: "24",
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: _[0] || (_[0] = Tu((V) => f.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                at(se(me), {
                  class: "cx-suggestion__favorite-button",
                  icon: m.value,
                  size: "24",
                  "icon-color": h.value,
                  onClick: _[1] || (_[1] = Tu((V) => f.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : wo("", !0);
    };
  }
}, gk = window.Vue.computed, mk = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = hs(), n = gk(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, fo = window.Vue.computed, Lu = window.Vue.ref, pk = window.Vuex.useStore, hk = () => {
  const e = pk(), { sourceLanguage: t, targetLanguage: n } = U(e), o = pt(), s = fo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = fo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = fo(
    () => !s.value && !a.value
  ), l = Lu(0), c = Lu(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, r = 4, u = fo(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      l.value
    )
  ), d = fo(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      c.value
    )
  ), m = () => {
    f(), _();
  }, {
    fetchNextSectionSuggestionsSlice: p,
    fetchNextPageSuggestionsSlice: h
  } = Dl(), w = (L) => L.length === g, f = () => {
    const L = w(
      u.value
    ), x = (l.value + 1) % r, T = w(
      e.getters["application/getSectionSuggestionsSliceByIndex"](x)
    );
    (!L || !T) && p(), L && A();
  }, _ = () => {
    const L = w(
      d.value
    ), x = (c.value + 1) % r, T = w(
      e.getters["application/getPageSuggestionsSliceByIndex"](x)
    );
    (!L || !T) && h(), L && k();
  }, S = (L) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", L), f();
  }, V = (L) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", L), _();
  }, A = () => l.value = (l.value + 1) % r, k = () => c.value = (c.value + 1) % r;
  return {
    currentPageSuggestionsSlice: d,
    currentSectionSuggestionsSlice: u,
    discardPageSuggestion: V,
    discardSectionSuggestion: S,
    onSuggestionRefresh: m,
    pageSuggestionsLoading: a,
    sectionSuggestionsLoading: s,
    showRefreshButton: i
  };
}, wk = window.Vuex.useStore, Fl = () => {
  const e = wk(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Dl(), o = (g, r, u) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === r && d.sourceTitle === u
  ), s = (g) => b(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: u, targetLanguage: d } = g;
    yield He.markFavorite(r, u, d);
    const m = new Xn({
      title: r,
      sourceLanguage: u,
      targetLanguage: d
    });
    e.commit("suggestions/addFavoriteSuggestion", m);
  });
  return {
    markFavoritePageSuggestion: (g) => {
      e.commit("suggestions/removePageSuggestion", g), n(), s(g);
    },
    markFavoriteSectionSuggestion: (g) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        g
      ), t(), s(g);
    },
    markFavoriteSuggestion: (g, r, u) => b(void 0, null, function* () {
      const d = o(
        r,
        u,
        g
      );
      d && (e.commit("suggestions/removePageSuggestion", d), n());
      const m = e.getters["suggestions/getSectionSuggestionsForArticle"](r, u, g);
      m != null && m.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        m
      ), t()), yield He.markFavorite(
        g,
        r,
        u
      );
      const p = new Xn({
        title: g,
        sourceLanguage: r,
        targetLanguage: u
      });
      e.commit("suggestions/addFavoriteSuggestion", p);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), He.unmarkFavorite(g))
  };
};
const Bu = window.Vue.toDisplayString, js = window.Vue.createElementVNode, te = window.Vue.unref, _o = window.Vue.createVNode, vo = window.Vue.withCtx, fk = window.Vue.resolveDirective, Ei = window.Vue.withDirectives, Pu = window.Vue.renderList, Fu = window.Vue.Fragment, Ht = window.Vue.openBlock, Ti = window.Vue.createElementBlock, So = window.Vue.createBlock, Li = window.Vue.createCommentVNode, _k = window.Vue.createTextVNode, vk = window.Vue.vShow, Sk = ["textContent"], yk = { class: "cx-translation-list__division-title ma-0 pa-4" }, Ck = { class: "cx-translation-list__division-title ma-0 pa-4" }, kk = { class: "cx-suggestion-list__refresh-button-container justify-center" }, xk = window.Vuex.useStore, bk = window.Vue.ref, $k = window.Codex.CdxButton, Vk = window.Codex.CdxIcon, Dk = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = xk(), { sourceLanguage: n, targetLanguage: o } = U(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = mk(), i = Im(), l = (T) => i(T, o.value), c = (T) => i(n.value, T), g = Ia(), r = (T) => g(
      T.sourceTitle,
      T.sourceLanguage,
      T.targetLanguage,
      "suggestion_no_seed"
    ), { startPageSuggestion: u } = Vl(), {
      currentPageSuggestionsSlice: d,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: _,
      showRefreshButton: S
    } = hk(), V = bk(null), A = pt(), k = () => {
      A({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), V.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: L, markFavoritePageSuggestion: x } = Fl();
    return (T, oe) => {
      const W = fk("i18n");
      return Ei((Ht(), Ti("div", null, [
        _o(te(Oe), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: vo(() => [
            js("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: Bu(T.$i18n("cx-suggestionlist-title"))
            }, null, 8, Sk)
          ]),
          default: vo(() => [
            _o(Pl, {
              "source-languages": te(s),
              "target-languages": te(a),
              "selected-source-language": te(n),
              "selected-target-language": te(o),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": c
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        _o(te(Oe), {
          ref_key: "pageSuggestionsList",
          ref: V,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: vo(() => [
            Ei(js("h5", yk, null, 512), [
              [W, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ht(!0), Ti(Fu, null, Pu(te(d), (I, K) => (Ht(), So(dl, {
              key: `page-suggestion-${K}`,
              suggestion: I,
              onClose: (ce) => te(p)(I),
              onClick: (ce) => te(u)(I),
              onBookmark: (ce) => te(x)(I)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(f) ? (Ht(), So(te(nt), { key: 0 })) : Li("", !0)
          ]),
          _: 1
        }, 512),
        _o(te(Oe), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: vo(() => [
            Ei(js("h5", Ck, null, 512), [
              [W, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ht(!0), Ti(Fu, null, Pu(te(m), (I, K) => (Ht(), So(dl, {
              key: `section-suggestion-${K}`,
              class: "ma-0",
              suggestion: I,
              onClose: (ce) => te(h)(I),
              onClick: (ce) => r(I),
              onBookmark: (ce) => te(L)(I)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(_) ? (Ht(), So(te(nt), { key: 0 })) : Li("", !0)
          ]),
          _: 1
        }),
        js("div", kk, [
          te(S) ? (Ht(), So(te($k), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: k
          }, {
            default: vo(() => [
              _o(te(Vk), {
                class: "me-1",
                icon: te(Hm)
              }, null, 8, ["icon"]),
              _k(" " + Bu(T.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Li("", !0)
        ])
      ], 512)), [
        [vk, e.active]
      ]);
    };
  }
}, Ak = window.Vue.computed, Ek = window.Vuex.useStore, Tk = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: dl,
    MwCard: Oe
  },
  setup() {
    he();
    const e = Ek(), t = Ak(() => e.state.suggestions.favorites || []), n = Ia(), o = (a) => n(
      a.title,
      a.sourceLanguage,
      a.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: s } = Fl();
    return {
      favorites: t,
      startFavoriteTranslation: o,
      removeFavoriteSuggestion: s
    };
  }
}, Lk = window.Vue.resolveDirective, Bk = window.Vue.createElementVNode, Pk = window.Vue.withDirectives, Fk = window.Vue.renderList, Mk = window.Vue.Fragment, Bi = window.Vue.openBlock, Nk = window.Vue.createElementBlock, Mu = window.Vue.resolveComponent, Nu = window.Vue.createBlock, Uu = window.Vue.withCtx, Uk = window.Vue.createCommentVNode, Ik = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function zk(e, t, n, o, s, a) {
  const i = Mu("cx-translation-suggestion"), l = Mu("mw-card"), c = Lk("i18n");
  return o.favorites.length ? (Bi(), Nu(l, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: Uu(() => [
      Pk(Bk("h3", Ik, null, 512), [
        [c, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: Uu(() => [
      (Bi(!0), Nk(Mk, null, Fk(o.favorites, (g, r) => (Bi(), Nu(i, {
        key: `favorite-${r}`,
        suggestion: g,
        onClick: (u) => o.startFavoriteTranslation(g),
        onBookmark: (u) => o.removeFavoriteSuggestion(g)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : Uk("", !0);
}
const Rk = /* @__PURE__ */ P(Tk, [["render", zk]]);
const Ok = {
  name: "CxHelpPanel",
  components: { MwIcon: me },
  setup() {
    const e = xe();
    return { listItems: [
      {
        icon: vw,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: ew,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: Sw,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, Hk = window.Vue.resolveDirective, qs = window.Vue.createElementVNode, jk = window.Vue.withDirectives, qk = window.Vue.renderList, Gk = window.Vue.Fragment, Pi = window.Vue.openBlock, Fi = window.Vue.createElementBlock, Wk = window.Vue.resolveComponent, Xk = window.Vue.createVNode, Kk = window.Vue.toDisplayString, Yk = { class: "cx-help-panel pa-4" }, Qk = { class: "cx-help-panel__item-list mt-6 ps-2" }, Jk = ["href"], Zk = ["textContent"];
function ex(e, t, n, o, s, a) {
  const i = Wk("mw-icon"), l = Hk("i18n");
  return Pi(), Fi("div", Yk, [
    jk(qs("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    qs("ul", Qk, [
      (Pi(!0), Fi(Gk, null, qk(o.listItems, (c, g) => (Pi(), Fi("li", {
        key: g,
        class: "mt-4"
      }, [
        qs("a", {
          href: c.href,
          target: "_blank"
        }, [
          Xk(i, {
            class: "me-2",
            icon: c.icon
          }, null, 8, ["icon"]),
          qs("span", {
            textContent: Kk(c.label)
          }, null, 8, Zk)
        ], 8, Jk)
      ]))), 128))
    ])
  ]);
}
const tx = /* @__PURE__ */ P(Ok, [["render", ex]]);
const nx = window.Vue.ref, Iu = window.Vue.computed, ox = window.Vue.watch, sx = {
  name: "CxStatsPanel",
  components: { MwCol: y, MwRow: F },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = Iu(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = Iu(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = nx(null);
    return ox(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), l = Object.keys(e.stats || {}).sort(), c = l.reduce(
          (S, V) => Math.max(S, a[V].delta),
          0
        ), g = l.map((S) => a[S].delta), r = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = r, s.value.height = u;
        const d = 4, m = 6, p = 50, h = (p - d) / c;
        let w = d;
        const f = Math.floor(
          (r - d) / (m + d)
        ), _ = g.slice(
          Math.max(g.length - f, 0)
        );
        _.forEach((S, V) => {
          V === _.length - 1 && (i.fillStyle = "#36c");
          const A = p - S * h;
          i.fillRect(w, A, m, S * h), w += m + d;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, ax = window.Vue.resolveDirective, Dn = window.Vue.createElementVNode, Mi = window.Vue.withDirectives, zu = window.Vue.toDisplayString, Ru = window.Vue.resolveComponent, Ni = window.Vue.withCtx, Ui = window.Vue.createVNode, ix = window.Vue.openBlock, rx = window.Vue.createElementBlock, lx = { class: "cx-stats-panel pa-4" }, cx = ["textContent"], ux = { class: "cx-stats-panel__monthly-stats-label" }, dx = ["textContent"], gx = { class: "cx-stats-panel__total-stats-label" }, mx = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function px(e, t, n, o, s, a) {
  const i = Ru("mw-col"), l = Ru("mw-row"), c = ax("i18n");
  return ix(), rx("div", lx, [
    Mi(Dn("h5", null, null, 512), [
      [c, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    Ui(l, null, {
      default: Ni(() => [
        Ui(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: Ni(() => [
            Dn("h3", {
              textContent: zu(o.thisMonthStats)
            }, null, 8, cx),
            Mi(Dn("h5", ux, null, 512), [
              [c, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        Ui(i, { class: "cx-stats-panel__total-stats" }, {
          default: Ni(() => [
            Dn("h3", {
              textContent: zu(o.total)
            }, null, 8, dx),
            Mi(Dn("h5", gx, null, 512), [
              [c, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    Dn("canvas", mx, null, 512)
  ]);
}
const hx = /* @__PURE__ */ P(sx, [["render", px]]);
const wx = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: y, MwRow: F, MwCard: Oe, MwIcon: me },
  data: () => ({
    mwIconLabFlask: jg,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, Gs = window.Vue.resolveComponent, Ws = window.Vue.createVNode, Xs = window.Vue.withCtx, fx = window.Vue.resolveDirective, An = window.Vue.createElementVNode, Ks = window.Vue.withDirectives, _x = window.Vue.openBlock, vx = window.Vue.createBlock, Sx = { class: "complementary" }, yx = { class: "complementary mt-4" }, Cx = ["href"], kx = { class: "complementary" }, xx = ["href"];
function bx(e, t, n, o, s, a) {
  const i = Gs("mw-icon"), l = Gs("mw-col"), c = Gs("mw-row"), g = Gs("mw-card"), r = fx("i18n");
  return _x(), vx(g, { class: "experimental-support-banner mb-1" }, {
    default: Xs(() => [
      Ws(c, null, {
        default: Xs(() => [
          Ws(l, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: Xs(() => [
              Ws(i, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          Ws(l, null, {
            default: Xs(() => [
              Ks(An("h5", null, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              Ks(An("p", Sx, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              An("p", yx, [
                Ks(An("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, Cx), [
                  [r, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              An("p", kx, [
                Ks(An("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, xx), [
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
const $x = /* @__PURE__ */ P(wx, [["render", bx]]), { getUrlParam: Vx } = G(), Ym = () => {
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
  }, t = Vx("campaign");
  return e[t];
}, Dx = () => {
  const e = Ia(), t = pt(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s
  } = G();
  return () => b(void 0, null, function* () {
    const a = Ym() || "direct_preselect";
    return t({
      event_type: "dashboard_open",
      event_source: a,
      translation_source_language: n.value,
      translation_target_language: o.value
    }), e(
      s.value,
      n.value,
      o.value,
      a
    );
  });
}, Ax = window.Vuex.useStore, Ra = () => {
  const e = Ax(), t = (o) => b(void 0, null, function* () {
    let s = yield je.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), s.forEach(
      (i) => e.commit("translator/addTranslation", i)
    );
    const a = {};
    for (const i of s) {
      const l = i.sourceLanguage;
      a[l] = a[l] || [], a[l].push(i);
    }
    e.commit("translator/setTranslationsLoaded", { status: o, value: !0 });
    for (const [i, l] of Object.entries(a))
      e.dispatch("mediawiki/fetchPageMetadata", {
        language: i,
        titles: l.map((c) => c.sourceTitle)
      }), l.forEach((c) => {
        const { targetLanguage: g, targetTitle: r } = c, u = !!e.getters["mediawiki/getPage"](
          g,
          r
        );
        r && !u && e.commit(
          "mediawiki/addPage",
          new Zn({ title: r, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, Ex = window.Vuex.useStore, Tx = () => {
  const e = Ex();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield He.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), He.fetchSectionSuggestions(
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
}, Lx = window.Vuex.useStore, Bx = () => {
  const e = pt(), t = Lx(), n = Dx(), { fetchAllTranslations: o } = Ra(), s = Al(), a = Tx(), { pageURLParameter: i, sectionURLParameter: l, draftURLParameter: c } = G();
  return () => b(void 0, null, function* () {
    if (yield Um()(), i.value) {
      n({
        pageTitle: i.value,
        isDraftTranslation: c.value,
        sectionTitle: l.value
      });
      return;
    }
    const { sourceLanguage: r, targetLanguage: u, previousRoute: d } = U(t);
    e({
      event_type: "dashboard_open",
      event_source: (() => {
        const h = {
          "sx-article-search": "return_from_search",
          "sx-translation-confirmer": "return_from_confirmation",
          "sx-section-selector": "return_from_section_selection",
          "sx-sentence-selector": "editor_close"
        }[d.value];
        return h || Ym() || "direct";
      })(),
      translation_source_language: r.value,
      translation_target_language: u.value
    });
    try {
      yield a();
    } catch (p) {
      mw.log.error("[CX] Error while fetching favorite suggestions", p);
    }
    yield o(), s();
  });
}, Ou = window.Vue.computed, Px = window.Vue.ref, Fx = window.Vue.watch, Mx = window.Vue.watchEffect, Nx = window.Vuex.useStore, Ux = ["suggestions", "draft", "published"], Ix = () => {
  const e = Nx(), { getUrlParam: t, setUrlParam: n } = G(), o = t("active-list"), s = Px(null);
  if (Ux.includes(o))
    s.value = o;
  else {
    const a = Ou(
      () => e.state.translator.translationsLoaded.draft
    ), i = Ou(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", Fx(a, (l) => {
      l && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return Mx(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, zx = window.Vue.computed, Rx = () => {
  const e = xe();
  return zx(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: ow,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: La,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: nw,
        type: "text"
      }
    }
  ]);
};
const Ys = window.Vue.openBlock, Ii = window.Vue.createBlock, zi = window.Vue.createCommentVNode, re = window.Vue.unref, fe = window.Vue.createVNode, Ox = window.Vue.toDisplayString, Hx = window.Vue.createTextVNode, kt = window.Vue.withCtx, jx = window.Vue.isRef, qx = window.Vue.createElementBlock, Gx = window.Vue.computed, Wx = window.Vuex.useStore, Xx = window.Codex.CdxButton, Kx = window.Codex.CdxIcon, Yx = {
  __name: "CXDashboard",
  setup(e) {
    const t = he(), n = () => t.push({ name: "sx-article-search" });
    Bx()();
    const s = Wx();
    s.dispatch("translator/fetchTranslatorStats");
    const a = Gx(() => s.state.translator.translatorStats), i = Ix(), l = Rx();
    return (c, g) => (Ys(), qx("div", null, [
      c.$incompleteVersion ? (Ys(), Ii($x, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : zi("", !0),
      fe(re(F), { class: "ma-0 py-4" }, {
        default: kt(() => [
          fe(re(Xx), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: n
          }, {
            default: kt(() => [
              fe(re(Kx), {
                class: "me-1",
                icon: re(cl)
              }, null, 8, ["icon"]),
              Hx(" " + Ox(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      fe(re(F), {
        class: "ma-0",
        align: "start"
      }, {
        default: kt(() => [
          c.$mwui.breakpoint.tabletAndUp ? (Ys(), Ii(re(y), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: kt(() => [
              fe(re(ss), {
                id: "dashboard-list-selector--desktop",
                items: re(l),
                active: re(i),
                onSelect: g[0] || (g[0] = (r) => i.value = r)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : zi("", !0),
          fe(re(y), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: kt(() => [
              fe(Rk),
              fe(Dk, {
                active: re(i) === "suggestions"
              }, null, 8, ["active"]),
              fe(Au, {
                "translation-status": "draft",
                "active-status": re(i)
              }, null, 8, ["active-status"]),
              fe(Au, {
                "translation-status": "published",
                "active-status": re(i)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          fe(re(y), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: kt(() => [
              fe(re(F), {
                class: "ma-0",
                align: "start"
              }, {
                default: kt(() => [
                  fe(re(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: kt(() => [
                      fe(hx, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  fe(re(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: kt(() => [
                      fe(tx)
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
      c.$mwui.breakpoint.mobile ? (Ys(), Ii(re(ph), {
        key: 1,
        active: re(i),
        "onUpdate:active": g[1] || (g[1] = (r) => jx(i) ? i.value = r : null),
        items: re(l)
      }, null, 8, ["active", "items"])) : zi("", !0)
    ]));
  }
}, Qx = {
  name: "DashboardView",
  components: { CxDashboard: Yx }
}, Jx = window.Vue.resolveComponent, Zx = window.Vue.createVNode, e8 = window.Vue.openBlock, t8 = window.Vue.createElementBlock, n8 = { class: "cx-translation-dashboard" };
function o8(e, t, n, o, s, a) {
  const i = Jx("cx-dashboard");
  return e8(), t8("main", n8, [
    Zx(i, { class: "mb-4 pb-12" })
  ]);
}
const Hu = /* @__PURE__ */ P(Qx, [["render", o8]]), En = window.Vue.computed, s8 = () => {
  const { sectionSuggestion: e } = Be(), { targetLanguageURLParameter: t } = G(), { currentTranslation: n } = ps(), o = En(
    () => {
      var d, m, p;
      return (p = (m = (d = e.value) == null ? void 0 : d.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = En(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.missingSectionsCount;
    }
  ), a = En(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: l } = Pt(), c = En(() => i ? H.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), g = (d) => {
    if (n.value)
      return "cx-sx-translation-confirmer-continue-translation-button-label";
    if (d)
      return "cx-sx-translation-confirmer-translate-prefilled-section-button-label";
    if (!i.value)
      return "cx-sx-start-translation-button-label";
    if (s.value > 1 || s.value === 1 && a.value > 0)
      return "cx-sx-select-section";
    if (s.value === 1 && a.value === 0)
      return "cx-sx-translation-confirmer-action-view-section";
    if (s.value === 0 && a.value > 0)
      return "cx-sx-select-section";
    if (s.value === 0 && a.value === 0)
      return "cx-sx-translation-confirmer-action-new-translation";
  }, r = En(() => {
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
  }), u = En(
    () => {
      var d;
      return !i.value || ((d = e.value) == null ? void 0 : d.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: g,
    isProgressiveButton: u,
    targetArticlePath: c
  };
}, Qm = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function a8(e) {
  return e.$el = $(e), e;
}
function i8(e, t, n, o) {
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
function r8() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function l8(e, t) {
  return b(this, null, function* () {
    yield Ml(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = a8(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const c8 = window.Vue.computed, u8 = window.Vue.onMounted, d8 = window.Vue.ref;
function g8(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const m8 = {
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
    const n = d8(null);
    let o = null;
    const s = c8(() => o.getHtml()), a = () => {
      o.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, c = {
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
    return u8(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = g8;
      const r = yield l8(c, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = i8(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = r8, o.focus();
    })), { sxeditor: n };
  }
}, gl = window.Vue.createElementVNode, p8 = window.Vue.openBlock, h8 = window.Vue.createElementBlock, w8 = ["lang", "dir"], f8 = /* @__PURE__ */ gl("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ gl("div", { class: "toolbar" })
], -1), _8 = ["lang", "dir"];
function v8(e, t, n, o, s, a) {
  return p8(), h8("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    f8,
    gl("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, _8)
  ], 8, w8);
}
const S8 = /* @__PURE__ */ P(m8, [["render", v8]]);
function Ml() {
  return mw.loader.using("mw.cx3.ve");
}
const y8 = window.Vuex.useStore, Jm = () => {
  const e = y8();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Ml(), new Promise((s) => {
      setTimeout(() => {
        const a = am.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, C8 = window.Vuex.useStore, Nl = () => {
  const e = C8();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield us.fetchPageContent(
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
}, k8 = window.Vuex.useStore, Ul = () => {
  const e = k8(), { currentSourcePage: t } = st(), n = Jm(), o = Nl(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: l
  } = G(), c = (u, d) => b(void 0, null, function* () {
    u() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      i.value,
      l.value
    ), yield n(
      a.value,
      l.value
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), d();
  });
  return {
    selectPageSectionByIndex: (u) => {
      const d = () => {
        var p;
        return (p = t.value.sections) == null ? void 0 : p[u];
      };
      return c(d, () => {
        const p = d();
        u === 0 ? p.originalTitle = t.value.title : s(p.originalTitle);
      });
    },
    selectPageSectionByTitle: (u) => c(() => t.value.getSectionByTitle(u), () => {
      s(u);
    })
  };
}, Il = () => (e, t, n, o = {}) => {
  H.setCXToken(e, t, n), location.href = H.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, x8 = (e, t, n, o) => b(void 0, null, function* () {
  var l, c, g;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, i = yield rm(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), b8 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, $8 = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return x8(e, t, n, o);
  b8(e, t);
}), V8 = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const c = o.find(
          (r) => r.subSectionId === l.id
        );
        if (!c)
          continue;
        const g = $8(
          l,
          c,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, D8 = { restoreCorporaDraft: V8 }, yo = window.Vue.computed, A8 = window.Vuex.useStore, X = () => {
  const e = A8(), { currentSourcePage: t, currentTargetPage: n } = st(), { currentMTProvider: o } = U(e), { sectionURLParameter: s } = G(), a = yo(() => {
    var r, u;
    return s.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = yo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), l = yo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), c = yo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = yo(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: c,
    targetPageTitleForPublishing: g
  };
}, E8 = window.Vuex.useStore, Zm = () => {
  const e = E8();
  return (t, n) => {
    if (!e.getters["mediawiki/getLanguageTitleGroup"](t, n))
      return us.fetchLanguageTitles(t, n).then(
        (o) => o && e.commit("mediawiki/addLanguageTitleGroup", o)
      );
  };
}, T8 = window.Vuex.useStore, zl = () => {
  const e = pt(), t = T8(), n = he(), { currentSourcePage: o } = st(), { sourceLanguage: s, targetLanguage: a } = U(t), i = KS(), l = Jm(), { isDesktop: c } = ms(), g = Il(), r = Nl(), { sourceSection: u } = X(), d = Zm();
  return (m) => b(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: p,
      targetLanguage: h,
      sourceTitle: w,
      targetTitle: f,
      pageRevision: _,
      isLeadSectionTranslation: S
    } = m;
    if (c.value) {
      const k = {};
      S || (k.sourcesection = m.sourceSectionTitle), g(
        s.value,
        a.value,
        w,
        k
      );
      return;
    }
    H.unsetCXToken(
      p,
      h,
      w
    );
    const { setTranslationURLParams: V } = G();
    V(m), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== h) && i(m), t.dispatch("application/getCXServerToken"), t.commit("application/setCurrentTranslation", m), e({
      event_type: "dashboard_translation_continue",
      translation_id: m.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: w,
      translation_source_section: m.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: m.targetTitle,
      translation_target_section: m.targetSectionTitle
    }), yield r(
      s.value,
      a.value,
      w,
      _
    ), yield l(s.value, w), yield d(s.value, w), m.restored || (yield je.fetchTranslationUnits(m.translationId).then(
      (k) => D8.restoreCorporaDraft(
        o.value,
        f,
        a,
        k
      )
    ).then(() => m.restored = !0));
    let A;
    m.isLeadSectionTranslation ? (u.value.originalTitle = m.sourceTitle, A = m.targetTitle) : A = m.targetSectionTitle, u.value.translatedTitle = A, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, L8 = window.Vue.ref, B8 = window.Vuex.useStore, P8 = () => {
  const e = he(), t = B8(), { isDesktop: n } = ms(), {
    pageURLParameter: o,
    sectionURLParameter: s
  } = G(), { sourceLanguage: a, targetLanguage: i } = U(t), { targetPageExists: l } = Pt(), { selectPageSectionByIndex: c, selectPageSectionByTitle: g } = Ul(), r = Il(), u = () => b(void 0, null, function* () {
    n.value ? r(
      a.value,
      i.value,
      o.value,
      { sourcesection: s.value }
    ) : (yield g(s.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), d = zl(), m = L8(!1), { currentTranslation: p } = ps(), h = () => {
    p.value ? p.value.isArticleTranslation ? m.value = !0 : d(p.value) : s.value ? u() : l.value ? e.push({ name: "sx-section-selector" }) : w();
  }, w = () => b(void 0, null, function* () {
    n.value ? r(
      a.value,
      i.value,
      o.value
    ) : (c(0), Qm() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: w,
    handlePrimaryButtonClick: h,
    translationConfirmationDialogOn: m
  };
};
const F8 = window.Vue.resolveDirective, ju = window.Vue.createElementVNode, qu = window.Vue.withDirectives, M8 = window.Vue.unref, N8 = window.Vue.withCtx, U8 = window.Vue.openBlock, I8 = window.Vue.createBlock, z8 = {
  href: "",
  target: "_blank"
}, R8 = window.Codex.CdxDialog, O8 = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = xe(), i = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function c() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (g, r) => {
      const u = F8("i18n");
      return U8(), I8(M8(R8), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": i,
        "default-action": l,
        "onUpdate:open": r[0] || (r[0] = (d) => s(d)),
        onPrimary: c,
        onDefault: r[1] || (r[1] = (d) => s(!1))
      }, {
        default: N8(() => [
          qu(ju("p", null, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          qu(ju("a", z8, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const ne = window.Vue.unref, H8 = window.Vue.resolveDirective, Co = window.Vue.createElementVNode, Gu = window.Vue.withDirectives, ko = window.Vue.toDisplayString, xo = window.Vue.openBlock, Ri = window.Vue.createElementBlock, Oi = window.Vue.createCommentVNode, Ne = window.Vue.createVNode, Ye = window.Vue.withCtx, Hi = window.Vue.createTextVNode, j8 = window.Vue.withModifiers, Wu = window.Vue.createBlock, q8 = window.Vue.Fragment, G8 = { class: "sx-translation-confirmer-body pb-4" }, W8 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, X8 = ["textContent"], K8 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, Y8 = ["href"], Q8 = ["textContent"], ji = window.Vue.computed, J8 = window.Vue.inject, Xu = window.Vue.ref, Z8 = window.Vue.watchEffect, eb = window.Vuex.useStore, qi = window.Codex.CdxButton, tb = window.Codex.CdxIcon, nb = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = he(), o = eb();
    J8("colors");
    const { sectionSuggestion: s } = Be(), { targetLanguageAutonym: a } = U(o), { sectionURLParameter: i } = G(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: c,
      translationConfirmationDialogOn: g
    } = P8(), r = Xu(!1), u = Xu(null), d = () => b(this, null, function* () {
      const W = yield je.checkUnreviewedTranslations();
      W !== !0 && (r.value = !0, u.value = W.targetUrl);
    }), m = () => b(this, null, function* () {
      yield d(), !r.value && l();
    }), p = () => b(this, null, function* () {
      yield d(), !r.value && c();
    }), h = t;
    Z8(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: f,
      isProgressiveButton: _,
      targetArticlePath: S
    } = s8(), V = xe(), A = ji(
      () => V.i18n(f(!!i.value))
    ), { isDesktop: k } = ms(), L = ji(
      () => V.i18n(...w.value)
    ), x = () => b(this, null, function* () {
      yield d(), !r.value && n.push({ name: "sx-section-selector" });
    }), T = ji(() => {
      var W, I;
      return i.value && !!((I = (W = s.value) == null ? void 0 : W.sourceSections) != null && I.length);
    }), { targetPageExists: oe } = Pt();
    return (W, I) => {
      const K = H8("i18n");
      return xo(), Ri(q8, null, [
        Co("section", G8, [
          ne(i) ? (xo(), Ri("section", W8, [
            Gu(Co("h6", null, null, 512), [
              [K, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Co("h5", {
              class: "ma-0",
              textContent: ko(ne(i))
            }, null, 8, X8)
          ])) : ne(oe) ? (xo(), Ri("section", K8, [
            Ne(ne(F), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Ye(() => [
                Gu(Ne(ne(y), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [K, [ne(a)], "cx-sx-existing-translation-status"]
                ]),
                Ne(ne(y), { shrink: "" }, {
                  default: Ye(() => [
                    Co("a", {
                      href: ne(S),
                      target: "_blank"
                    }, [
                      Ne(ne(tb), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ne(Tl)
                      }, null, 8, ["icon"])
                    ], 8, Y8)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ne(ne(F), { class: "ma-0" }, {
              default: Ye(() => [
                Ne(ne(y), null, {
                  default: Ye(() => [
                    Co("span", {
                      textContent: ko(L.value)
                    }, null, 8, Q8)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Oi("", !0),
          Ne(ne(F), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Ye(() => [
              T.value ? (xo(), Wu(ne(y), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: Ye(() => [
                  Ne(ne(qi), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: j8(x, ["stop"])
                  }, {
                    default: Ye(() => [
                      Hi(ko(W.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })) : Oi("", !0),
              ne(oe) && ne(k) ? (xo(), Wu(ne(y), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: Ye(() => [
                  Ne(ne(qi), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Ye(() => [
                      Hi(ko(W.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Oi("", !0),
              Ne(ne(y), { shrink: "" }, {
                default: Ye(() => [
                  Ne(ne(qi), {
                    weight: "primary",
                    size: "large",
                    action: ne(_) ? "progressive" : "default",
                    onClick: p
                  }, {
                    default: Ye(() => [
                      Hi(ko(A.value), 1)
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
        Ne(O8, {
          modelValue: r.value,
          "onUpdate:modelValue": I[0] || (I[0] = (ce) => r.value = ce),
          "target-url": u.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Ku = window.Vue.computed, ob = window.Vuex.useStore, sb = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: Pl
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = hs(), n = ob(), { sourceLanguage: o, targetLanguage: s } = U(n), { currentLanguageTitleGroup: a } = Pt(), i = Ku(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((d) => d.lang)) || [];
      }
    ), l = Ku(
      () => t.value || e.value
    ), c = QS();
    return {
      availableSourceLanguages: i,
      targetLanguages: l,
      onSourceLanguageSelected: (u) => c(u, s.value),
      onTargetLanguageSelected: (u) => c(o.value, u),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
}, ab = window.Vue.resolveComponent, ib = window.Vue.openBlock, rb = window.Vue.createBlock;
function lb(e, t, n, o, s, a) {
  const i = ab("sx-translation-list-language-selector");
  return ib(), rb(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const ep = /* @__PURE__ */ P(sb, [["render", lb]]);
const _e = window.Vue.unref, Gi = window.Vue.toDisplayString, xt = window.Vue.createElementVNode, rt = window.Vue.createVNode, Tn = window.Vue.withCtx, cb = window.Vue.resolveDirective, ub = window.Vue.withDirectives, db = window.Vue.normalizeClass, gb = window.Vue.openBlock, mb = window.Vue.createBlock, pb = ["textContent"], hb = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, wb = ["textContent"], fb = { class: "pe-3" }, _b = ["textContent"], vb = window.Codex.CdxButton, bo = window.Codex.CdxIcon, bt = window.Vue.computed, Sb = window.Vuex.useStore, yb = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = Sb(), n = xe(), { currentSourcePage: o } = st(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = G(), l = bt(() => t.state.suggestions.favorites || []), c = bt(
      () => l.value.some(
        (k) => i.value === k.title && s.value === k.sourceLanguage && a.value === k.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: r } = Fl(), { translationSizeMessageArgs: u } = Km(), d = () => g(
      i.value,
      s.value,
      a.value
    ), m = () => r(
      new Xn({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = bt(
      () => c.value ? $y : Vy
    ), h = bt(
      () => c.value ? m : d
    ), w = bt(
      () => H.getPageUrl(s.value || "", i.value || "")
    ), f = bt(() => {
      var k;
      return (k = o.value) == null ? void 0 : k.langLinksCount;
    }), _ = (k) => {
      const L = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let x = 0; x < L.length; x++)
        if (k >= L[x].value)
          return (k / L[x].value).toFixed(1).replace(/\.0$/, "") + L[x].suffix;
      return k.toString();
    }, S = bt(() => {
      var L;
      const k = Object.values(((L = o.value) == null ? void 0 : L.pageviews) || {}).reduce(
        (x, T) => x + T,
        0
      );
      return _(k);
    }), V = bt(() => {
      if (u.value)
        return n.i18n(...u.value);
    }), A = bt(() => {
      if (u.value)
        return u.value[2] < 15;
    });
    return (k, L) => {
      const x = cb("i18n");
      return gb(), mb(_e(F), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Tn(() => [
          rt(_e(y), null, {
            default: Tn(() => [
              rt(_e(F), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Tn(() => [
                  rt(_e(y), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: w.value,
                    target: "_blank"
                  }, {
                    default: Tn(() => [
                      xt("h5", {
                        class: "ma-0 me-1",
                        textContent: Gi(_e(i))
                      }, null, 8, pb),
                      rt(_e(bo), {
                        size: "x-small",
                        icon: _e(Tl)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  rt(_e(y), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Tn(() => [
                      rt(_e(vb), {
                        class: "px-0",
                        weight: "quiet",
                        action: c.value ? "progressive" : "default",
                        onClick: h.value
                      }, {
                        default: Tn(() => [
                          rt(_e(bo), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              xt("div", hb, [
                xt("div", null, [
                  xt("span", null, [
                    rt(_e(bo), {
                      icon: _e(By),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    xt("span", {
                      class: "pe-3",
                      textContent: Gi(f.value)
                    }, null, 8, wb)
                  ]),
                  xt("span", null, [
                    rt(_e(bo), {
                      icon: _e(Dy),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    ub(xt("span", fb, null, 512), [
                      [x, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                xt("span", {
                  class: db(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": A.value
                  }])
                }, [
                  rt(_e(bo), {
                    icon: _e(Ey),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  xt("span", {
                    textContent: Gi(V.value)
                  }, null, 8, _b)
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
const Cb = window.Vue.resolveDirective, un = window.Vue.createElementVNode, Qs = window.Vue.withDirectives, kb = window.Vue.toDisplayString, xb = window.Vue.createTextVNode, Wi = window.Vue.unref, Xi = window.Vue.withCtx, Ki = window.Vue.openBlock, Yi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const bb = { class: "pa-4" }, $b = { class: "flex pt-2" }, Vb = window.Codex.CdxButton, Db = window.Vue.ref, Ab = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = zl(), a = Db(!1), { currentTranslation: i } = ps(), l = () => b(this, null, function* () {
      a.value = !0;
      let c = !1;
      try {
        c = yield je.splitTranslation(
          i.value.translationId
        );
      } catch (g) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          g
        );
      }
      a.value = !1, c && (s(i.value), o());
    });
    return (c, g) => {
      const r = Cb("i18n");
      return Ki(), Yi(Wi(ot), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": c.$mwui.colors.gray700,
        "min-height": "unset",
        title: c.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Xi(() => [
          un("div", $b, [
            a.value ? (Ki(), Yi(Wi(nt), { key: 1 })) : (Ki(), Yi(Wi(Vb), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: Xi(() => [
                xb(kb(c.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Xi(() => [
          un("div", bb, [
            Qs(un("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Qs(un("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            un("p", null, [
              Qs(un("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Qs(un("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
const Yu = window.Vue.resolveDirective, Js = window.Vue.createElementVNode, Qu = window.Vue.withDirectives, jt = window.Vue.unref, Zs = window.Vue.withCtx, $t = window.Vue.createVNode, Qi = window.Vue.openBlock, Ju = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Eb = window.Vue.createBlock, Tb = { class: "sx-translation-confirmer" }, Lb = { class: "mb-0" }, Bb = { class: "sx-translation-confirmer__article-image flex justify-center" }, Pb = ["src"], Fb = { class: "ma-3" }, Mb = window.Vue.computed;
window.Vue.onBeforeMount;
window.Vue.onMounted;
const Nb = window.Vue.ref, Ub = window.Vuex.useStore, Ib = {
  __name: "SXTranslationConfirmer",
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = Ub(), { currentSourcePage: o } = st(), { previousRoute: s } = U(n), {
      sourceLanguageURLParameter: a,
      targetLanguageURLParameter: i,
      pageURLParameter: l,
      sectionURLParameter: c,
      clearURLParameters: g
    } = G(), r = Mb(
      () => {
        var _, S;
        return (S = (_ = o.value) == null ? void 0 : _.image) == null ? void 0 : S.source;
      }
    ), u = pt(), { fetchTranslationsByStatus: d } = Ra(), m = Zm(), p = $l();
    d("draft"), c.value && p(
      a.value,
      i.value,
      l.value,
      !1
    ), m(a.value, l.value), u({
      event_type: "dashboard_translation_start",
      event_source: t.eventSource,
      translation_source_language: a.value,
      translation_target_language: i.value
    }), Ml(), n.dispatch("suggestions/fetchAppendixSectionTitles", i.value);
    const h = he(), w = () => {
      g(), h.push({ name: s.value });
    }, f = Nb(!1);
    return (_, S) => {
      const V = Yu("i18n"), A = Yu("i18n-html");
      return Qi(), Ju("section", Tb, [
        $t(jt(F), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Zs(() => [
            $t(jt(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Zs(() => [
                Qu(Js("h5", Lb, null, 512), [
                  [V, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            $t(jt(y), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Zs(() => [
                $t(jt(De), {
                  class: "pa-0",
                  type: "icon",
                  icon: jt(Cn),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Js("div", Bb, [
          r.value ? (Qi(), Ju("img", {
            key: 0,
            src: r.value
          }, null, 8, Pb)) : (Qi(), Eb(jt(me), {
            key: 1,
            size: "120",
            icon: jt(wl),
            "icon-color": _.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        $t(yb),
        $t(ep),
        $t(nb, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (k) => f.value = !0)
        }),
        $t(jt(F), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Zs(() => [
            Js("p", Fb, [
              Qu(Js("small", null, null, 512), [
                [A, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        $t(Ab, {
          modelValue: f.value,
          "onUpdate:modelValue": S[1] || (S[1] = (k) => f.value = k)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const zb = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: Ib
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
}, Rb = window.Vue.resolveComponent, Ob = window.Vue.createVNode, Hb = window.Vue.normalizeClass, jb = window.Vue.openBlock, qb = window.Vue.createElementBlock;
function Gb(e, t, n, o, s, a) {
  const i = Rb("sx-translation-confirmer");
  return jb(), qb("main", {
    class: Hb(["sx-translation-confirmer-view", a.classes])
  }, [
    Ob(i, { "event-source": n.eventSource }, null, 8, ["event-source"])
  ], 2);
}
const Wb = /* @__PURE__ */ P(zb, [["render", Gb]]);
const Xb = window.Vue.toDisplayString, Zu = window.Vue.unref, Kb = window.Vue.createVNode, Yb = window.Vue.createTextVNode, Qb = window.Vue.createElementVNode, Jb = window.Vue.openBlock, Zb = window.Vue.createElementBlock, e2 = { class: "sx-section-selector-view-article-item ma-0" }, t2 = ["href"], n2 = window.Codex.CdxIcon, o2 = {
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
    return (t, n) => (Jb(), Zb("li", e2, [
      Qb("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        Yb(Xb(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        Kb(Zu(n2), {
          size: "x-small",
          icon: Zu(Tl)
        }, null, 8, ["icon"])
      ], 8, t2)
    ]));
  }
};
const s2 = window.Vue.resolveDirective, ea = window.Vue.createElementVNode, Ji = window.Vue.withDirectives, dn = window.Vue.unref, a2 = window.Vue.toDisplayString, ta = window.Vue.withCtx, $o = window.Vue.createVNode, i2 = window.Vue.openBlock, r2 = window.Vue.createElementBlock, l2 = { class: "sx-section-selector__header pa-4" }, c2 = { class: "sx-section-selector__header-text ma-0" }, u2 = ["textContent"], d2 = { class: "pt-0 ma-0" }, g2 = { class: "ma-0" }, m2 = window.Codex.CdxButton, p2 = window.Codex.CdxIcon, h2 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Be();
    return (n, o) => {
      const s = s2("i18n");
      return i2(), r2("div", l2, [
        $o(dn(F), { class: "ma-0 pb-3" }, {
          default: ta(() => [
            $o(dn(y), null, {
              default: ta(() => {
                var a;
                return [
                  Ji(ea("h6", c2, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ea("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: a2((a = dn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, u2)
                ];
              }),
              _: 1
            }),
            $o(dn(y), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ta(() => [
                $o(dn(m2), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ta(() => [
                    $o(dn(p2), { icon: dn(za) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ji(ea("h4", d2, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Ji(ea("p", g2, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, w2 = window.Vue.renderList, f2 = window.Vue.Fragment, Zi = window.Vue.openBlock, ed = window.Vue.createElementBlock, _2 = window.Vue.renderSlot, na = window.Vue.unref, td = window.Vue.createVNode, nd = window.Vue.withCtx, v2 = window.Vue.createBlock, S2 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, y2 = window.Codex.CdxButton, C2 = window.Codex.CdxIcon, tp = {
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
    return (t, n) => (Zi(), ed("ul", S2, [
      (Zi(!0), ed(f2, null, w2(e.sections, (o) => (Zi(), v2(na(F), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: nd(() => [
          td(na(y2), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: nd(() => [
              _2(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              td(na(C2), { icon: na(vs) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, k2 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const x2 = window.Vue.resolveDirective, oa = window.Vue.createElementVNode, er = window.Vue.withDirectives, Qe = window.Vue.unref, od = window.Vue.toDisplayString, Ln = window.Vue.withCtx, tr = window.Vue.openBlock, sd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Vo = window.Vue.createVNode, b2 = window.Vue.createTextVNode, $2 = window.Vue.createElementBlock, V2 = { class: "sx-section-selector__missing-sections py-2" }, D2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, A2 = ["lang", "dir", "textContent"], ad = window.Vue.computed, E2 = window.Codex.CdxButton, T2 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Be(), n = ad(
      () => {
        var s;
        return O.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = ad(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = x2("i18n");
      return tr(), $2("section", V2, [
        er(oa("h4", D2, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (tr(), sd(Qe(F), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Ln(() => [
            Vo(Qe(y), {
              class: "py-6 justify-center",
              innerHTML: Qe(k2)
            }, null, 8, ["innerHTML"]),
            Vo(Qe(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Ln(() => [
                er(oa("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Vo(Qe(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Ln(() => [
                er(oa("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Vo(Qe(y), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Ln(() => [
                Vo(Qe(E2), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: Ln(() => [
                    b2(od(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (tr(), sd(tp, {
          key: 0,
          sections: Qe(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: Ln(({ sourceSection: l }) => {
            var c, g;
            return [
              oa("h5", {
                class: "ma-0",
                lang: (c = Qe(t)) == null ? void 0 : c.sourceLanguage,
                dir: Qe(O.getDir)((g = Qe(t)) == null ? void 0 : g.sourceLanguage),
                textContent: od(l)
              }, null, 8, A2)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const L2 = window.Vue.computed, B2 = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: tp
  },
  emits: ["select-section"],
  setup() {
    const { sectionSuggestion: e } = Be(), t = L2(
      () => {
        var n;
        return O.getAutonym((n = e.value) == null ? void 0 : n.targetLanguage);
      }
    );
    return {
      mwIconArrowForward: ml,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      suggestion: e,
      targetLanguageAutonym: t
    };
  }
}, P2 = window.Vue.resolveDirective, sa = window.Vue.createElementVNode, F2 = window.Vue.withDirectives, id = window.Vue.toDisplayString, M2 = window.Vue.resolveComponent, N2 = window.Vue.withCtx, U2 = window.Vue.createVNode, I2 = window.Vue.openBlock, z2 = window.Vue.createElementBlock, R2 = { class: "sx-section-selector__present-sections py-2" }, O2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, H2 = { class: "sx-section-selector__present-section-button-content" }, j2 = ["lang", "dir", "textContent"], q2 = ["lang", "dir", "textContent"];
function G2(e, t, n, o, s, a) {
  var c;
  const i = M2("sx-section-selector-section-list"), l = P2("i18n");
  return I2(), z2("section", R2, [
    F2(sa("h4", O2, null, 512), [
      [l, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    U2(i, {
      sections: ((c = o.suggestion) == null ? void 0 : c.orderedPresentSections) || [],
      onSelectSection: t[0] || (t[0] = (g) => e.$emit("select-section", g))
    }, {
      default: N2(({ sourceSection: g, targetSection: r }) => {
        var u, d, m, p;
        return [
          sa("div", H2, [
            sa("h5", {
              class: "sx-section-selector__present-section-button-source",
              lang: (u = o.suggestion) == null ? void 0 : u.sourceLanguage,
              dir: o.getDir((d = o.suggestion) == null ? void 0 : d.sourceLanguage),
              textContent: id(g)
            }, null, 8, j2),
            sa("h6", {
              class: "sx-section-selector__present-section-button-target",
              lang: (m = o.suggestion) == null ? void 0 : m.targetLanguage,
              dir: o.getDir((p = o.suggestion) == null ? void 0 : p.targetLanguage),
              textContent: id(r)
            }, null, 8, q2)
          ])
        ];
      }),
      _: 1
    }, 8, ["sections"])
  ]);
}
const W2 = /* @__PURE__ */ P(B2, [["render", G2]]);
const nr = window.Vue.computed, X2 = window.Vuex.useStore, K2 = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: W2,
    SxSectionSelectorSectionListMissing: T2,
    SxSectionSelectorHeader: h2,
    SxSectionSelectorViewArticleItem: o2,
    MwRow: F,
    MwCol: y,
    MwIcon: me,
    SxArticleLanguageSelector: ep
  },
  setup() {
    const e = X2(), { sectionSuggestion: t } = Be(), {
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = U(e), i = nr(
      () => {
        var _;
        return H.getPageUrl(n.value, (_ = t.value) == null ? void 0 : _.sourceTitle);
      }
    ), l = nr(
      () => {
        var _;
        return H.getPageUrl(o.value, (_ = t.value) == null ? void 0 : _.targetTitle);
      }
    ), c = nr(() => [
      { path: i.value, autonym: s.value },
      { path: l.value, autonym: a.value }
    ]), g = he(), { clearURLParameters: r, setSectionURLParam: u } = G(), d = () => {
      r(), g.push({ name: "dashboard" });
    }, m = zl(), { selectPageSectionByTitle: p } = Ul(), { isDesktop: h } = ms(), w = Il();
    return {
      goToDashboard: d,
      mwIconRobot: uw,
      mwIconLabFlask: jg,
      selectSection: (_) => {
        if (h.value) {
          w(
            n.value,
            o.value,
            t.value.sourceTitle,
            { sourcesection: _ }
          );
          return;
        }
        const S = e.getters["translator/getDraftTranslation"](
          t.value.sourceTitle,
          _,
          n.value,
          o.value
        );
        S ? m(S) : (p(_), u(_), g.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: a,
      viewArticleItems: c
    };
  }
}, qt = window.Vue.resolveComponent, Vt = window.Vue.createVNode, Y2 = window.Vue.resolveDirective, lt = window.Vue.createElementVNode, Do = window.Vue.withDirectives, Q2 = window.Vue.renderList, J2 = window.Vue.Fragment, or = window.Vue.openBlock, rd = window.Vue.createElementBlock, Z2 = window.Vue.createBlock, ld = window.Vue.toDisplayString, cd = window.Vue.createTextVNode, sr = window.Vue.withCtx, e4 = { class: "sx-section-selector" }, t4 = { class: "sx-section-selector__body" }, n4 = { class: "py-2" }, o4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, s4 = { class: "ma-0 pa-0" }, a4 = { class: "sx-section-selector__additional-consideration-title" }, i4 = { href: "#" }, r4 = { class: "sx-section-selector__additional-consideration-title" }, l4 = { href: "#" };
function c4(e, t, n, o, s, a) {
  const i = qt("sx-section-selector-header"), l = qt("sx-article-language-selector"), c = qt("sx-section-selector-section-list-missing"), g = qt("sx-section-selector-section-list-present"), r = qt("sx-section-selector-view-article-item"), u = qt("mw-icon"), d = qt("mw-col"), m = qt("mw-row"), p = Y2("i18n");
  return or(), rd("section", e4, [
    Vt(i, { onClose: o.goToDashboard }, null, 8, ["onClose"]),
    lt("section", t4, [
      Vt(l),
      Vt(c, {
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["onSelectSection", "onClose"]),
      Vt(g, { onSelectSection: o.selectSection }, null, 8, ["onSelectSection"]),
      lt("section", n4, [
        Do(lt("h4", o4, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        lt("ul", s4, [
          (or(!0), rd(J2, null, Q2(o.viewArticleItems, (h, w) => (or(), Z2(r, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      Vt(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: sr(() => [
          Vt(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: sr(() => [
              lt("h6", a4, [
                Vt(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                cd(" " + ld(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              Do(lt("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              Do(lt("a", i4, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          Vt(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: sr(() => [
              lt("h6", r4, [
                Vt(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                cd(" " + ld(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              Do(lt("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              Do(lt("a", l4, null, 512), [
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
const u4 = /* @__PURE__ */ P(K2, [["render", c4]]);
const d4 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: u4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, g4 = window.Vue.resolveComponent, m4 = window.Vue.createVNode, p4 = window.Vue.normalizeClass, h4 = window.Vue.openBlock, w4 = window.Vue.createElementBlock;
function f4(e, t, n, o, s, a) {
  const i = g4("sx-section-selector");
  return h4(), w4("main", {
    class: p4(["sx-section-selector-view", a.classes])
  }, [
    m4(i)
  ], 2);
}
const _4 = /* @__PURE__ */ P(d4, [["render", f4]]), v4 = window.Vue.computed, S4 = window.Vuex.useStore, y4 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = U(
    S4()
  ), o = xe();
  return v4(() => {
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
const C4 = window.Vue.watch, k4 = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: ss },
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
    const n = (s) => t("update:selection", s), o = y4(e);
    return C4(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, x4 = window.Vue.resolveComponent, b4 = window.Vue.createVNode, $4 = window.Vue.openBlock, V4 = window.Vue.createElementBlock, D4 = { class: "sx-content-comparator__source-target-selector" };
function A4(e, t, n, o, s, a) {
  const i = x4("mw-button-group");
  return $4(), V4("div", D4, [
    b4(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const E4 = /* @__PURE__ */ P(k4, [["render", A4]]), gn = window.Vue.computed, T4 = window.Vue.ref, Rl = () => {
  const e = T4([]), { currentTargetPage: t } = st(), { sectionSuggestion: n } = Be(), { sectionURLParameter: o } = G(), s = gn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = gn(
    () => {
      var d;
      return (((d = i.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), i = gn(
    () => {
      var d;
      return (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = X(), c = gn(() => {
    var d;
    return (d = l.value) == null ? void 0 : d.html;
  }), g = gn(() => {
    var d;
    return (d = i.value) == null ? void 0 : d.html;
  }), r = gn(
    () => {
      var d;
      return (d = n.value) == null ? void 0 : d.missingSections.hasOwnProperty(o.value);
    }
  ), u = gn(
    () => !r.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: u,
    sourceSectionContent: c,
    targetSectionAnchor: a,
    targetSectionContent: g
  };
};
const ud = window.Vue.ref, ar = window.Vue.computed, L4 = window.Vue.onMounted, B4 = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: E4,
    MwRow: F,
    MwCol: y,
    MwButton: De
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
    const n = ud(!1), { sectionSuggestion: o } = Be(), { sectionURLParameter: s } = G(), a = ar(
      () => (s.value || "").replace(/ /g, "_")
    ), i = (d) => t.emit("update:sourceVsTargetSelection", d), { activeSectionTargetTitle: l, targetSectionAnchor: c } = Rl(), g = ar(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: s.value,
            path: `${H.getPageUrl(
              o.value.sourceLanguage,
              o.value.sourceTitle
            )}#${a.value}`,
            lang: o.value.sourceLanguage,
            dir: O.getDir(o.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: o.value.targetTitle,
            path: r.value,
            lang: o.value.targetLanguage,
            dir: O.getDir(o.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${r.value}#${c.value}`
          };
      }
    }), r = ar(
      () => H.getPageUrl(
        o.value.targetLanguage,
        o.value.targetTitle
      )
    ), u = ud(null);
    return L4(() => {
      new IntersectionObserver(
        ([m]) => {
          n.value = m.intersectionRect.height < m.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(u.value.$el);
    }), {
      activeContent: g,
      contentHeader: u,
      isSticky: n,
      mwIconLinkExternal: Hg,
      mwIconEdit: La,
      updateSelection: i
    };
  }
}, aa = window.Vue.resolveComponent, ia = window.Vue.createVNode, P4 = window.Vue.toDisplayString, F4 = window.Vue.createElementVNode, ra = window.Vue.withCtx, ir = window.Vue.openBlock, rr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const M4 = window.Vue.normalizeClass, N4 = ["lang", "dir", "textContent"];
function U4(e, t, n, o, s, a) {
  const i = aa("sx-content-comparator-source-vs-target-selector"), l = aa("mw-col"), c = aa("mw-button"), g = aa("mw-row");
  return ir(), rr(g, {
    ref: "contentHeader",
    class: M4(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: ra(() => [
      ia(i, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      ia(g, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: ra(() => [
          ia(l, null, {
            default: ra(() => [
              F4("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: P4(o.activeContent.title)
              }, null, 8, N4)
            ]),
            _: 1
          }),
          ia(l, { shrink: "" }, {
            default: ra(() => [
              o.isSticky ? (ir(), rr(c, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (r) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (ir(), rr(c, {
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
const I4 = /* @__PURE__ */ P(B4, [["render", U4]]), z4 = window.Vue.computed, R4 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: y,
    MwButton: De
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const { sectionURLParameter: t } = G(), n = z4(
      () => e.sectionSourceTitles.indexOf(t.value)
    ), { selectPageSectionByTitle: o } = Ul();
    return {
      goToNextSection: () => {
        const i = (n.value + 1) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[i];
        o(l);
      },
      goToPreviousSection: () => {
        const i = (n.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[i];
        o(l);
      },
      mwIconPrevious: aw,
      mwIconArrowForward: ml
    };
  }
}, dd = window.Vue.resolveComponent, gd = window.Vue.createVNode, O4 = window.Vue.withCtx, H4 = window.Vue.openBlock, j4 = window.Vue.createBlock;
function q4(e, t, n, o, s, a) {
  const i = dd("mw-button"), l = dd("mw-col");
  return H4(), j4(l, {
    class: "justify-end",
    align: "center"
  }, {
    default: O4(() => [
      gd(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      gd(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const G4 = /* @__PURE__ */ P(R4, [["render", q4]]);
const W4 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: F,
    MwCol: y,
    MwButton: De
  },
  props: {
    suggestion: {
      type: Wn,
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
    mwIconTrash: Rg,
    mwIconUndo: pw
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
}, md = window.Vue.toDisplayString, X4 = window.Vue.resolveDirective, lr = window.Vue.withDirectives, Bn = window.Vue.openBlock, la = window.Vue.createElementBlock, K4 = window.Vue.createCommentVNode, Y4 = window.Vue.createTextVNode, pd = window.Vue.createElementVNode, Q4 = window.Vue.normalizeClass, cr = window.Vue.resolveComponent, ur = window.Vue.withCtx, dr = window.Vue.createVNode, hd = window.Vue.createBlock, J4 = { class: "sx-content-comparator-header__mapped-section" }, Z4 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, e3 = { key: 0 }, t3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, n3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function o3(e, t, n, o, s, a) {
  const i = cr("mw-col"), l = cr("mw-button"), c = cr("mw-row"), g = X4("i18n");
  return Bn(), la("div", J4, [
    dr(c, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: ur(() => [
        dr(i, { grow: "" }, {
          default: ur(() => [
            pd("h6", Z4, [
              Y4(md(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? lr((Bn(), la("span", e3, null, 512)), [
                [g, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : K4("", !0)
            ]),
            pd("h6", {
              class: Q4(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, md(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        dr(i, { shrink: "" }, {
          default: ur(() => [
            a.isDiscardedSection ? (Bn(), hd(l, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (Bn(), hd(l, {
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
    a.isDiscardedSection ? lr((Bn(), la("p", n3, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : lr((Bn(), la("p", t3, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const s3 = /* @__PURE__ */ P(W4, [["render", o3]]);
const ca = window.Vue.computed, a3 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: s3,
    SxContentComparatorHeaderNavigation: G4,
    MwButton: De,
    MwCol: y,
    MwRow: F,
    MwIcon: me
  },
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const { sectionURLParameter: e } = G(), { sourceSection: t } = X(), { sectionSuggestion: n } = Be(), o = ca(
      () => {
        var c;
        return (c = n.value) == null ? void 0 : c.missingSections.hasOwnProperty(e.value);
      }
    ), s = ca(
      () => {
        var c;
        return (c = n.value) == null ? void 0 : c.presentSections.hasOwnProperty(e.value);
      }
    ), { activeSectionTargetTitle: a } = Rl(), i = ca(() => {
      var c;
      return (c = t.value) == null ? void 0 : c.html;
    }), l = ca(() => [
      ...Object.keys(n.value.missingSections),
      ...Object.keys(n.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: iw,
      mwIconEdit: La,
      mwIconEye: dw,
      sectionSourceTitles: l,
      sourceSectionContent: i,
      sourceSectionTitle: e,
      suggestion: n,
      getDir: O.getDir
    };
  }
}, Pn = window.Vue.resolveComponent, Dt = window.Vue.createVNode, wd = window.Vue.toDisplayString, Qo = window.Vue.createElementVNode, Fn = window.Vue.withCtx, i3 = window.Vue.resolveDirective, fd = window.Vue.withDirectives, gr = window.Vue.openBlock, _d = window.Vue.createBlock, vd = window.Vue.createCommentVNode, r3 = window.Vue.createElementBlock, l3 = { class: "sx-content-comparator__header pa-4" }, c3 = ["lang", "dir"], u3 = ["lang", "dir"], d3 = /* @__PURE__ */ Qo("br", null, null, -1);
function g3(e, t, n, o, s, a) {
  const i = Pn("mw-button"), l = Pn("mw-col"), c = Pn("sx-content-comparator-header-navigation"), g = Pn("mw-row"), r = Pn("mw-icon"), u = Pn("sx-content-comparator-header-mapped-section"), d = i3("i18n");
  return gr(), r3("div", l3, [
    Dt(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    Dt(g, { class: "my-1 py-2 mx-0" }, {
      default: Fn(() => [
        Dt(l, { grow: "" }, {
          default: Fn(() => [
            Qo("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, wd(o.suggestion.sourceTitle), 9, c3),
            Qo("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, wd(o.sourceSectionTitle), 9, u3)
          ]),
          _: 1
        }),
        Dt(c, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        Dt(l, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: Fn(() => [
            Dt(i, {
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
    o.isCurrentSectionMissing ? (gr(), _d(g, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: Fn(() => [
        Dt(l, {
          shrink: "",
          class: "pe-2"
        }, {
          default: Fn(() => [
            Dt(r, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        Dt(l, { class: "ma-0" }, {
          default: Fn(() => [
            fd(Qo("strong", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            d3,
            fd(Qo("span", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : vd("", !0),
    o.isCurrentSectionPresent ? (gr(), _d(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : vd("", !0)
  ]);
}
const m3 = /* @__PURE__ */ P(a3, [["render", g3]]);
const p3 = {
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
}, Sd = window.Vue.toDisplayString, h3 = window.Vue.createElementVNode, yd = window.Vue.openBlock, Cd = window.Vue.createElementBlock, w3 = window.Vue.createCommentVNode, f3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, _3 = ["textContent"], v3 = ["textContent"];
function S3(e, t, n, o, s, a) {
  return yd(), Cd("section", f3, [
    h3("h5", {
      textContent: Sd(n.placeholderTitle)
    }, null, 8, _3),
    n.placeholderSubtitle ? (yd(), Cd("p", {
      key: 0,
      textContent: Sd(n.placeholderSubtitle)
    }, null, 8, v3)) : w3("", !0)
  ]);
}
const np = /* @__PURE__ */ P(p3, [["render", S3]]), y3 = window.Vue.computed, C3 = window.Vue.createApp, k3 = window.Vuex.useStore, x3 = () => {
  const e = k3(), { sectionSuggestion: t } = Be(), { currentTargetPage: n } = st(), o = xe(), s = () => C3(
    np,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (l) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    l
  ), i = (l) => {
    const c = l.getElementsByTagName("base");
    Array.from(c).forEach(
      (g) => g.parentNode.removeChild(g)
    );
  };
  return y3(() => {
    var r;
    const l = document.createElement("div");
    l.innerHTML = (r = n.value) == null ? void 0 : r.content, i(l);
    const c = s(), g = a(
      t.value
    );
    if (g) {
      const u = Array.from(
        l.querySelectorAll("h2")
      ).filter((d) => d.textContent.match(g));
      if (u && u.length) {
        const d = u[0].parentNode;
        d.parentNode.insertBefore(
          c,
          d
        );
      }
    } else
      l.appendChild(c);
    return l.innerHTML;
  });
};
const b3 = window.Vue.ref, $3 = window.Vue.computed, V3 = window.Vue.watch, D3 = window.Vuex.useStore, A3 = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: np,
    SxContentComparatorHeader: m3,
    SxContentComparatorContentHeader: I4,
    MwSpinner: nt
  },
  setup() {
    const e = D3(), t = he(), n = b3("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      Qm() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: i,
      isCurrentSectionMapped: l,
      sourceSectionContent: c,
      targetSectionContent: g
    } = Rl(), r = x3(), { sectionSuggestion: u } = Be(), { sourceLanguage: d, targetLanguage: m } = U(e), p = $3(() => u.value.targetTitle), h = Nl();
    return V3(
      p,
      () => h(
        m.value,
        d.value,
        p.value
      ),
      { immediate: !0 }
    ), {
      getDir: O.getDir,
      activeSectionTargetTitle: a,
      discardedSections: i,
      goToSectionSelector: o,
      isCurrentSectionMapped: l,
      sourceSectionContent: c,
      sourceVsTargetSelection: n,
      targetPageContent: r,
      targetSectionContent: g,
      translateSection: s,
      sourceLanguage: d,
      targetLanguage: m
    };
  }
}, ua = window.Vue.resolveComponent, mr = window.Vue.createVNode, Mn = window.Vue.openBlock, kd = window.Vue.createBlock, xd = window.Vue.createCommentVNode, da = window.Vue.createElementVNode, pr = window.Vue.Fragment, ga = window.Vue.createElementBlock, E3 = { class: "sx-content-comparator" }, T3 = { class: "sx-content-comparator__source-content" }, L3 = ["lang", "dir", "innerHTML"], B3 = ["lang", "dir", "innerHTML"], P3 = ["innerHTML"];
function F3(e, t, n, o, s, a) {
  const i = ua("sx-content-comparator-header"), l = ua("sx-content-comparator-content-header"), c = ua("mw-spinner"), g = ua("sx-content-comparator-new-section-placeholder");
  return Mn(), ga("section", E3, [
    mr(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (r) => o.discardedSections = r),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    mr(l, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (r) => o.sourceVsTargetSelection = r),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    da("section", T3, [
      o.sourceVsTargetSelection === "source_section" ? (Mn(), ga(pr, { key: 0 }, [
        o.sourceSectionContent ? xd("", !0) : (Mn(), kd(c, { key: 0 })),
        da("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, L3)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (Mn(), ga(pr, { key: 1 }, [
        o.targetPageContent ? xd("", !0) : (Mn(), kd(c, { key: 0 })),
        da("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, B3)
      ], 64)) : (Mn(), ga(pr, { key: 2 }, [
        da("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, P3),
        mr(g, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const M3 = /* @__PURE__ */ P(A3, [["render", F3]]);
const N3 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: M3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, U3 = window.Vue.resolveComponent, I3 = window.Vue.createVNode, z3 = window.Vue.normalizeClass, R3 = window.Vue.openBlock, O3 = window.Vue.createElementBlock;
function H3(e, t, n, o, s, a) {
  const i = U3("sx-content-comparator");
  return R3(), O3("main", {
    class: z3(["sx-content-comparator-view", a.classes])
  }, [
    I3(i)
  ], 2);
}
const j3 = /* @__PURE__ */ P(N3, [["render", H3]]);
const q3 = window.Vue.resolveDirective, Ao = window.Vue.createElementVNode, bd = window.Vue.withDirectives, ma = window.Vue.unref, hr = window.Vue.createVNode, $d = window.Vue.toDisplayString, Vd = window.Vue.createTextVNode, Eo = window.Vue.withCtx, G3 = window.Vue.openBlock, W3 = window.Vue.createBlock, X3 = { class: "mw-ui-dialog__header px-4 py-3" }, K3 = { class: "mw-ui-dialog__header-title" }, Y3 = { class: "pa-4" }, Q3 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Dd = window.Codex.CdxButton, J3 = {
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
    return (i, l) => {
      const c = q3("i18n");
      return G3(), W3(ma(ot), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.gray700
      }, {
        header: Eo(() => [
          Ao("div", X3, [
            bd(Ao("span", K3, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Eo(() => [
          Ao("div", Q3, [
            hr(ma(Dd), {
              weight: "quiet",
              onClick: s
            }, {
              default: Eo(() => [
                Vd($d(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            hr(ma(Dd), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Eo(() => [
                Vd($d(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Eo(() => [
          hr(ma(as)),
          Ao("div", Y3, [
            bd(Ao("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, Z3 = window.Vuex.useStore, Ol = () => {
  const e = Z3(), { sourceSection: t } = X(), { getCurrentTitleByLanguage: n } = Pt(), o = (l, c, g) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const r = t.value.getContentTranslationUnitById(l);
    r instanceof Te ? r.blockTemplateProposedTranslations[c] = g : r instanceof Jt && r.addProposedTranslation(c, g);
  }, s = (l, c) => b(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: r } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](g, r, l))
      return "";
    try {
      const d = yield e.dispatch("application/getCXServerToken");
      return yield je.fetchSegmentTranslation(
        g,
        r,
        l,
        c,
        d
      );
    } catch (d) {
      return mw.log.error("Error while translating segment", d), "";
    }
  }), a = (l, c) => b(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: r } = e.state.application;
    if (t.value.hasProposedTranslationByTranslationUnitId(
      l,
      c
    ))
      return;
    let u = t.value.getOriginalContentByTranslationUnitId(l);
    const d = t.value.getContentTranslationUnitById(l);
    let m;
    if (e.commit("application/addMtRequestsPending", l), m = yield s(c, u), !m) {
      e.commit("application/removeMtRequestsPending", l);
      return;
    }
    d instanceof Te && (d.setBlockTemplateAdaptationInfoByHtml(
      c,
      m
    ), m = (yield J_(
      m,
      n(r, g),
      r
    )) || ""), o(
      l,
      c,
      m
    ), e.commit("application/removeMtRequestsPending", l);
  });
  return {
    translateTranslationUnitById: a,
    translateSelectedTranslationUnitForAllProviders: () => {
      const { sourceLanguage: l, targetLanguage: c } = e.state.application, g = e.getters["mediawiki/getSupportedMTProviders"](
        l,
        c
      ), { selectedTranslationUnitId: r } = t.value;
      g.forEach(
        (u) => a(r, u)
      );
    }
  };
}, e$ = window.Vuex.useStore, t$ = () => {
  const { sourceSection: e } = X(), t = e$(), { translateTranslationUnitById: n } = Ol();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const wr = window.Vue.computed, n$ = window.Vuex.useStore, o$ = {
  name: "SxTranslationSelector",
  components: { MwCard: Oe, MwButton: De, MwDialog: ot },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Y.EMPTY_TEXT_PROVIDER_KEY, o = Y.ORIGINAL_TEXT_PROVIDER_KEY, s = n$(), {
      sourceSection: a,
      isSectionTitleSelected: i,
      selectedContentTranslationUnit: l
    } = X(), { sourceLanguage: c, targetLanguage: g } = U(s), r = wr(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        c.value,
        g.value
      )
    ), u = wr(() => {
      const f = [o, n];
      return r.value.filter(
        (_) => !f.includes(_)
      );
    }), d = wr(
      () => i.value ? a.value.proposedTitleTranslations : l.value.proposedTranslations
    ), m = t$(), p = (f) => {
      m(f), w();
    }, h = Y.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: w,
      emptyTextProviderKey: n,
      getDir: O.getDir,
      getMTProviderLabel: h,
      mwIconClose: Cn,
      originalTextProviderKey: o,
      proposedTranslations: d,
      selectProvider: p,
      sourceLanguage: c
    };
  }
}, s$ = window.Vue.resolveDirective, ze = window.Vue.createElementVNode, pa = window.Vue.withDirectives, fr = window.Vue.resolveComponent, _r = window.Vue.createVNode, Gt = window.Vue.withCtx, a$ = window.Vue.renderList, i$ = window.Vue.Fragment, vr = window.Vue.openBlock, r$ = window.Vue.createElementBlock, l$ = window.Vue.toDisplayString, Ad = window.Vue.createBlock, c$ = window.Vue.createCommentVNode, u$ = { class: "mw-ui-dialog__header pa-4" }, d$ = { class: "row ma-0 py-2" }, g$ = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, m$ = { class: "mb-0" }, p$ = { class: "col shrink justify-center" }, h$ = { class: "pb-2 mb-0" }, w$ = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, f$ = ["dir", "lang", "innerHTML"], _$ = ["textContent"], v$ = ["innerHTML"], S$ = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, y$ = /* @__PURE__ */ ze("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function C$(e, t, n, o, s, a) {
  const i = fr("mw-button"), l = fr("mw-card"), c = fr("mw-dialog"), g = s$("i18n");
  return n.active ? (vr(), Ad(c, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: Gt(() => [
      ze("div", u$, [
        ze("div", d$, [
          ze("div", g$, [
            pa(ze("h4", m$, null, 512), [
              [g, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          ze("div", p$, [
            _r(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        pa(ze("h6", h$, null, 512), [
          [g, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: Gt(() => [
      _r(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (r) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: Gt(() => [
          pa(ze("h5", w$, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: Gt(() => [
          ze("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, f$)
        ]),
        _: 1
      }),
      (vr(!0), r$(i$, null, a$(o.apiMtProviders, (r) => (vr(), Ad(l, {
        key: r,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(r)
      }, {
        header: Gt(() => [
          ze("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: l$(o.getMTProviderLabel(r))
          }, null, 8, _$)
        ]),
        default: Gt(() => [
          ze("p", {
            innerHTML: o.proposedTranslations[r]
          }, null, 8, v$)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      _r(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (r) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: Gt(() => [
          pa(ze("h5", S$, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: Gt(() => [
          y$
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : c$("", !0);
}
const k$ = /* @__PURE__ */ P(o$, [["render", C$]]), x$ = window.Vuex.useStore, eo = () => {
  const { sourceSection: e } = X(), t = x$(), { translateTranslationUnitById: n } = Ol(), { currentMTProvider: o } = U(t), s = (l) => b(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, o.value);
    const { followingTranslationUnit: c } = e.value;
    c && (yield n(
      c.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? s(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: c } = e.value, g = l - 1;
      let r = 0;
      return g > -1 && (r = c[g].id), s(r);
    },
    selectTranslationUnitById: s
  };
};
const Nn = window.Vue.computed, b$ = window.Vuex.useStore, $$ = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: me, MwCol: y },
  setup() {
    const e = b$(), { sourceSection: t, isSectionTitleSelected: n } = X(), o = "sx-sentence-selector__section-title", { currentSourcePage: s } = st(), { sourceLanguage: a } = U(e), i = Nn(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), l = Nn(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || i.value;
      }
    ), c = Nn(
      () => H.getPageUrl(a.value, i.value)
    ), g = Nn(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), r = Nn(
      () => g.value ? "translated" : "selected"
    ), u = Nn(() => {
      const p = [o];
      return n.value && p.push(`${o}--${r.value}`), p;
    }), { selectTranslationUnitById: d } = eo();
    return {
      mwIconLinkExternal: Hg,
      selectSectionTitle: () => d(0),
      sourceArticlePath: c,
      sourceArticleTitle: i,
      sourceSectionTitle: l,
      titleClasses: u
    };
  }
}, V$ = window.Vue.toDisplayString, Sr = window.Vue.createElementVNode, Ed = window.Vue.resolveComponent, D$ = window.Vue.createVNode, A$ = window.Vue.normalizeClass, E$ = window.Vue.withCtx, T$ = window.Vue.openBlock, L$ = window.Vue.createBlock, B$ = ["href"], P$ = ["textContent"], F$ = ["innerHTML"];
function M$(e, t, n, o, s, a) {
  const i = Ed("mw-icon"), l = Ed("mw-col");
  return T$(), L$(l, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: E$(() => [
      Sr("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        Sr("strong", {
          textContent: V$(o.sourceArticleTitle)
        }, null, 8, P$),
        D$(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, B$),
      Sr("h2", {
        class: A$(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...c) => o.selectSectionTitle && o.selectSectionTitle(...c)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, F$)
    ]),
    _: 1
  });
}
const N$ = /* @__PURE__ */ P($$, [["render", M$]]);
const ct = window.Vue.unref, To = window.Vue.createVNode, ha = window.Vue.withCtx, Td = window.Vue.toDisplayString, Ld = window.Vue.createTextVNode, U$ = window.Vue.openBlock, I$ = window.Vue.createBlock, z$ = window.Vue.computed, yr = window.Codex.CdxButton, Bd = window.Codex.CdxIcon, op = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = X(), s = z$(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (U$(), I$(ct(F), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: ha(() => [
        To(ct(yr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          disabled: ct(n),
          onClick: i[0] || (i[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: ha(() => [
            To(ct(Bd), {
              class: "me-1",
              icon: ct(Ll)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        To(ct(yr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !ct(o),
          onClick: i[1] || (i[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: ha(() => [
            Ld(Td(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        To(ct(yr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: ha(() => [
            Ld(Td(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            To(ct(Bd), {
              class: "ms-1",
              size: "small",
              icon: ct(vs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const mn = window.Vue.unref, R$ = window.Vue.toDisplayString, Lo = window.Vue.createVNode, wa = window.Vue.withCtx, O$ = window.Vue.openBlock, H$ = window.Vue.createBlock, Cr = window.Vue.computed, j$ = window.Vuex.useStore, q$ = window.Codex.CdxButton, G$ = window.Codex.CdxIcon, W$ = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = j$(), n = Cr(() => t.state.application.currentMTProvider), o = xe(), s = Cr(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Cr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (i, l) => (O$(), H$(mn(y), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: wa(() => [
        Lo(mn(F), { class: "ma-0 ps-5 pb-4" }, {
          default: wa(() => [
            Lo(mn(y), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: R$(a.value)
            }, null, 8, ["textContent"]),
            Lo(mn(y), {
              shrink: "",
              class: "pe-5"
            }, {
              default: wa(() => [
                Lo(mn(q$), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  onClick: l[0] || (l[0] = (c) => i.$emit("configure-options"))
                }, {
                  default: wa(() => [
                    Lo(mn(G$), {
                      class: "pa-0",
                      icon: mn(Om)
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
const Je = window.Vue.unref, Wt = window.Vue.createVNode, X$ = window.Vue.resolveDirective, Pd = window.Vue.createElementVNode, K$ = window.Vue.withDirectives, Fd = window.Vue.toDisplayString, Md = window.Vue.createTextVNode, Bo = window.Vue.withCtx, Y$ = window.Vue.openBlock, Q$ = window.Vue.createElementBlock, J$ = { class: "mt-retry-body pb-5" }, Z$ = { class: "retry-body__message" }, Nd = window.Codex.CdxButton, kr = window.Codex.CdxIcon, eV = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = X$("i18n");
      return Y$(), Q$("div", J$, [
        Pd("div", Z$, [
          Wt(Je(kr), {
            class: "me-2",
            icon: Je(zm)
          }, null, 8, ["icon"]),
          K$(Pd("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Wt(Je(F), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Bo(() => [
            Wt(Je(y), { cols: "6" }, {
              default: Bo(() => [
                Wt(Je(Nd), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Bo(() => [
                    Wt(Je(kr), {
                      class: "me-1",
                      icon: Je(Hm)
                    }, null, 8, ["icon"]),
                    Md(" " + Fd(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Wt(Je(y), { cols: "6" }, {
              default: Bo(() => [
                Wt(Je(Nd), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Bo(() => [
                    Wt(Je(kr), {
                      class: "me-1",
                      icon: Je(Py)
                    }, null, 8, ["icon"]),
                    Md(" " + Fd(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Un = window.Vue.createVNode, Ae = window.Vue.unref, Po = window.Vue.openBlock, tV = window.Vue.createElementBlock, nV = window.Vue.createCommentVNode, fa = window.Vue.createBlock, oV = window.Vue.normalizeClass, sV = window.Vue.normalizeStyle, Fo = window.Vue.withCtx, aV = window.Vue.toDisplayString, iV = window.Vue.createTextVNode, rV = window.Vue.normalizeProps, lV = window.Vue.guardReactiveProps, cV = ["lang", "dir", "innerHTML"], xr = window.Vue.ref, uV = window.Vue.onMounted, dV = window.Vue.onBeforeUnmount, br = window.Vue.computed, gV = window.Vue.nextTick, mV = window.Vuex.useStore, pV = window.Codex.CdxButton, hV = window.Codex.CdxIcon, wV = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = xr(0), n = xr(null), o = xr(null), s = mV(), { currentMTProvider: a, targetLanguage: i } = U(s), { sourceSection: l, currentProposedTranslation: c } = X(), g = br(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), r = br(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = br(
      () => !!c.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    uV(() => b(this, null, function* () {
      yield gV(), d(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), dV(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => d());
    return (p, h) => (Po(), fa(Ae(Oe), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Fo(() => [
        Un(Ae(F), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Fo(() => [
            Un(W$, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => p.$emit("configure-options"))
            }, null, 512),
            Un(Ae(y), {
              class: oV(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value && g.value
              }]),
              style: sV(u.value ? r.value : null)
            }, {
              default: Fo(() => [
                u.value ? (Po(), tV("section", {
                  key: 0,
                  lang: Ae(i),
                  dir: Ae(O.getDir)(Ae(i)),
                  innerHTML: Ae(c)
                }, null, 8, cV)) : g.value ? (Po(), fa(Ae(nt), { key: 1 })) : (Po(), fa(eV, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Un(Ae(y), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Fo(() => [
                u.value || g.value ? (Po(), fa(Ae(pV), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: h[3] || (h[3] = (w) => p.$emit("edit-translation", Ae(c)))
                }, {
                  default: Fo(() => [
                    Un(Ae(hV), {
                      class: "me-1",
                      icon: Ae(El)
                    }, null, 8, ["icon"]),
                    iV(" " + aV(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : nV("", !0),
                Un(op, rV(lV(p.$attrs)), null, 16)
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
}, fV = window.Vue.computed, _V = (e) => fV(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const i = ["untranslated", "translated", "selected"].map(
      (c) => `${t}--${c}`
    );
    s.classList.remove(...i), a.selected && s.classList.add(`${t}--selected`);
    const l = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${l}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const vV = window.Vue.onMounted, SV = window.Vue.ref, yV = window.Vue.computed, CV = {
  name: "SubSection",
  props: {
    subSection: {
      type: Te,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = SV(null), o = _V(e.subSection);
    vV(() => {
      n.value.addEventListener("click", (l) => {
        let c;
        if (e.subSection.isBlockTemplate)
          c = e.subSection;
        else {
          const g = l.composedPath().find(
            (r) => r instanceof Element && r.classList.contains("cx-segment")
          );
          if (!g)
            return;
          c = e.subSection.getSentenceById(
            g.dataset.segmentid
          );
        }
        a(c);
      });
    });
    const { selectTranslationUnitById: s } = eo(), a = (l) => {
      if (l.selected) {
        t("bounce-translation");
        return;
      }
      s(l.id);
    }, i = yV(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, kV = window.Vue.normalizeClass, xV = window.Vue.openBlock, bV = window.Vue.createElementBlock, $V = ["innerHTML"];
function VV(e, t, n, o, s, a) {
  return xV(), bV("div", {
    ref: "subSectionRoot",
    class: kV(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, $V);
}
const DV = /* @__PURE__ */ P(CV, [["render", VV]]);
const Ud = window.Vue.computed, AV = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: Wg,
    MwIcon: me
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
    const t = Ud(() => ({ "--size": e.size })), n = Ud(
      () => !e.isTemplateAdapted || e.percentage === 0 ? hl : qn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, Id = window.Vue.resolveComponent, zd = window.Vue.createVNode, Rd = window.Vue.normalizeStyle, EV = window.Vue.openBlock, TV = window.Vue.createElementBlock;
function LV(e, t, n, o, s, a) {
  const i = Id("mw-circle-progress-bar"), l = Id("mw-icon");
  return EV(), TV("div", {
    class: "block-template-status-indicator",
    style: Rd(o.cssVars)
  }, [
    zd(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    zd(l, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: Rd({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const sp = /* @__PURE__ */ P(AV, [["render", LV]]), BV = window.Vuex.useStore, Mo = window.Vue.computed, PV = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: y,
    MwRow: F,
    MwButton: De,
    MwIcon: me,
    MwRadioGroup: qg,
    MwRadio: Ea,
    MwDivider: as,
    MwDialog: ot,
    MwCircleProgressBar: Wg,
    BlockTemplateStatusIndicator: sp
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
    const { targetLanguageAutonym: t } = U(BV()), n = Mo(
      () => !e.isTemplateAdapted || o.value === 0 ? hl : qn
    ), o = Mo(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = xe(), a = Mo(() => {
      let c;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? c = "cx-sx-block-template-mapping-status-title-partially-template" : c = "cx-sx-block-template-mapping-status-title-fully-template" : c = "cx-sx-block-template-mapping-status-title-unadapted-template" : c = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(c);
    }), i = Mo(() => {
      let c;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? c = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? c = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : c = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(c);
    }), l = Mo(() => {
      let c = [];
      if (!e.targetTemplateExists)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: _w,
          color: Re.gray500
        });
      else if (!e.isTemplateAdapted)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Cn,
          color: Re.gray500
        });
      else if (o.value < 100)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: qn,
          color: Re.blue600
        });
      else {
        let g;
        e.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : g = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), c.push({
          text: g,
          icon: qn,
          color: Re.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: La,
        color: Re.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: Zh,
        color: Re.gray500
      }), c;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: qn,
      mwIconInfo: tw,
      notes: l
    };
  }
}, No = window.Vue.resolveComponent, Uo = window.Vue.openBlock, _a = window.Vue.createBlock;
window.Vue.createCommentVNode;
const In = window.Vue.withCtx, Io = window.Vue.createVNode, $r = window.Vue.toDisplayString, Vr = window.Vue.createElementVNode, FV = window.Vue.renderList, MV = window.Vue.Fragment, NV = window.Vue.createElementBlock, UV = { class: "pa-4" }, IV = ["textContent"], zV = ["textContent"];
function RV(e, t, n, o, s, a) {
  const i = No("block-template-status-indicator"), l = No("mw-icon"), c = No("mw-col"), g = No("mw-row"), r = No("mw-dialog");
  return Uo(), _a(r, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: In(() => [
      Io(g, {
        justify: "center",
        class: "mt-4"
      }, {
        default: In(() => [
          Io(c, { shrink: "" }, {
            default: In(() => [
              n.targetTemplateExists ? (Uo(), _a(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (Uo(), _a(l, {
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
    default: In(() => [
      Vr("div", UV, [
        Vr("h3", {
          textContent: $r(o.statusText)
        }, null, 8, IV),
        Vr("p", {
          class: "mt-6 text-small",
          textContent: $r(o.statusExplanation)
        }, null, 8, zV),
        (Uo(!0), NV(MV, null, FV(o.notes, (u, d) => (Uo(), _a(g, {
          key: d,
          align: "start",
          class: "mt-4"
        }, {
          default: In(() => [
            Io(c, { shrink: "" }, {
              default: In(() => [
                Io(l, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            Io(c, {
              textContent: $r(u.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const OV = /* @__PURE__ */ P(PV, [["render", RV]]);
const de = window.Vue.unref, Se = window.Vue.createVNode, ut = window.Vue.withCtx, Dr = window.Vue.toDisplayString, Od = window.Vue.createTextVNode, HV = window.Vue.resolveDirective, Hd = window.Vue.withDirectives, jd = window.Vue.createElementVNode, jV = window.Vue.normalizeClass, va = window.Vue.openBlock, qd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Gd = window.Vue.createBlock, qV = window.Vue.normalizeProps, GV = window.Vue.guardReactiveProps, WV = { class: "block-template-adaptation-card__container pa-4" }, XV = ["textContent"], KV = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, $e = window.Vue.computed, YV = window.Vue.ref, QV = window.Vuex.useStore, Wd = window.Codex.CdxButton, Xd = window.Codex.CdxIcon, JV = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = QV(), { targetLanguageAutonym: n, currentMTProvider: o } = U(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = X(), i = $e(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), l = $e(
      () => {
        var x;
        return (x = s.value) == null ? void 0 : x.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), c = $e(
      () => {
        var x;
        return !((x = t.state.application.mtRequestsPending) != null && x.includes(
          s.value.id
        ));
      }
    ), g = xe(), r = $e(
      // Strip HTML comments and return
      () => {
        var x, T;
        return ((T = (x = s.value) == null ? void 0 : x.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), u = $e(
      () => {
        var x;
        return (x = s.value.blockTemplateAdaptationInfo) == null ? void 0 : x[o.value];
      }
    ), d = $e(
      () => {
        var x, T;
        return ((x = u.value) == null ? void 0 : x.adapted) || !!((T = u.value) != null && T.partial);
      }
    ), m = $e(() => u.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), p = $e(() => u.value ? d.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = $e(
      () => {
        var x;
        return Object.keys(((x = s.value) == null ? void 0 : x.sourceTemplateParams) || {}).length;
      }
    ), w = $e(() => {
      var T;
      const x = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(x || {});
    }), f = $e(() => w.value.length), _ = $e(() => {
      const x = k.value;
      return h.value + x === 0 ? 100 : f.value / (h.value + x) * 100 || 0;
    }), S = YV(!1), V = () => {
      S.value = !0;
    }, A = (x) => x.filter((T) => !w.value.includes(T)), k = $e(() => {
      var T;
      const x = ((T = u.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return A(x).length;
    }), L = $e(() => {
      var T;
      const x = ((T = u.value) == null ? void 0 : T.optionalTargetParams) || [];
      return A(x).length;
    });
    return (x, T) => {
      const oe = HV("i18n");
      return va(), Gd(de(Oe), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: ut(() => [
          jd("div", WV, [
            Se(de(F), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: ut(() => [
                Se(de(y), { shrink: "" }, {
                  default: ut(() => [
                    Se(de(Xd), {
                      icon: de(Fy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Se(de(y), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: ut(() => [
                    Od(Dr(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (va(), qd("div", {
              key: 0,
              class: jV(["pa-4 mb-4", m.value])
            }, [
              Se(de(F), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: ut(() => [
                  Hd(Se(de(y), { tag: "h5" }, null, 512), [
                    [oe, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Se(de(y), { shrink: "" }, {
                    default: ut(() => [
                      Se(sp, {
                        percentage: _.value,
                        size: 20,
                        "is-template-adapted": d.value,
                        "stroke-width": 2,
                        onClick: V
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              jd("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Dr(l.value)
              }, null, 8, XV),
              Se(de(Wd), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (W) => x.$emit("edit-translation", i.value))
              }, {
                default: ut(() => [
                  Od(Dr(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : c.value ? (va(), qd("div", KV, [
              Se(de(F), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: ut(() => [
                  Hd(Se(de(y), { tag: "h5" }, null, 512), [
                    [oe, [
                      de(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Se(de(y), { shrink: "" }, {
                    default: ut(() => [
                      Se(de(Wd), { weight: "quiet" }, {
                        default: ut(() => [
                          Se(de(Xd), {
                            icon: de(Ly),
                            onClick: V
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
            ])) : (va(), Gd(de(nt), { key: 2 }))
          ]),
          Se(op, qV(GV(x.$attrs)), null, 16),
          Se(OV, {
            active: S.value,
            "onUpdate:active": T[1] || (T[1] = (W) => S.value = W),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": k.value,
            "optional-missing-params-count": L.value,
            "is-template-adapted": d.value,
            "target-template-exists": !!l.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const ZV = window.Vue.computed, e5 = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: ss },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = X(), o = xe();
    return { scopeOptions: ZV(() => [
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
}, t5 = window.Vue.resolveComponent, n5 = window.Vue.createVNode, o5 = window.Vue.openBlock, s5 = window.Vue.createElementBlock, a5 = { class: "translated-segment-card-header" };
function i5(e, t, n, o, s, a) {
  const i = t5("mw-button-group");
  return o5(), s5("div", a5, [
    n5(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const r5 = /* @__PURE__ */ P(e5, [["render", i5]]);
const Xt = window.Vue.unref, Sa = window.Vue.createVNode, Ar = window.Vue.withCtx, l5 = window.Vue.openBlock, c5 = window.Vue.createBlock, u5 = window.Vue.computed, Kd = window.Codex.CdxButton, Yd = window.Codex.CdxIcon, d5 = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = X(), o = u5(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (l5(), c5(Xt(F), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Ar(() => [
        Sa(Xt(Kd), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Xt(n),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: Ar(() => [
            Sa(Xt(Yd), { icon: Xt(Ll) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        Sa(Xt(Kd), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: Ar(() => [
            Sa(Xt(Yd), { icon: Xt(vs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const g5 = window.Vue.useCssVars, ye = window.Vue.createVNode, Qd = window.Vue.resolveDirective, m5 = window.Vue.createElementVNode, Er = window.Vue.withDirectives, ae = window.Vue.unref, p5 = window.Vue.normalizeStyle, ya = window.Vue.openBlock, Jd = window.Vue.createElementBlock, h5 = window.Vue.createCommentVNode, w5 = window.Vue.normalizeClass, Ue = window.Vue.withCtx, f5 = window.Vue.toDisplayString, _5 = window.Vue.createTextVNode, Zd = window.Vue.createBlock, v5 = window.Vue.normalizeProps, S5 = window.Vue.guardReactiveProps, At = window.Vue.computed, y5 = window.Vue.ref, C5 = window.Vue.inject, k5 = window.Vuex.useStore, x5 = window.Codex.CdxButton, Tr = window.Codex.CdxIcon, b5 = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    g5((_) => ({
      "4929555c": f.value
    }));
    const t = y5("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = X(), { targetLanguage: a } = U(k5()), i = At(() => t.value === "sentence"), l = At(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (S) => {
            var V;
            return S.id === ((V = o.value) == null ? void 0 : V.id);
          }
        )
      )
    ), c = At(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), g = C5("colors"), r = g.gray200, u = g.red600, d = At(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : l.value.translatedContent), m = At(
      () => en.calculateScore(
        d.value,
        c.value,
        a.value
      )
    ), p = At(
      () => en.getScoreStatus(m.value)
    ), h = At(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = At(() => ({
      failure: m.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), f = At(
      () => w.value[p.value]
    );
    return (_, S) => {
      const V = Qd("i18n"), A = Qd("i18n-html");
      return ya(), Zd(ae(Oe), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ue(() => [
          ye(ae(F), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ue(() => [
              ye(r5, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (k) => t.value = k)
              }, null, 8, ["selection"]),
              ye(ae(y), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ue(() => [
                  ye(ae(F), { class: "ma-0" }, {
                    default: Ue(() => [
                      ye(ae(y), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ue(() => [
                          Er(m5("h5", null, null, 512), [
                            [V, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Er((ya(), Jd("p", {
                            key: 0,
                            style: p5({ color: ae(u) })
                          }, null, 4)), [
                            [V, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Er((ya(), Jd("p", {
                            key: 1,
                            class: w5(h.value)
                          }, null, 2)), [
                            [A, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      ye(ae(y), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ue(() => [
                          ye(ae(F), { class: "ma-0 ms-2" }, {
                            default: Ue(() => [
                              ye(ae(y), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ue(() => [
                                  ye(ae(Tr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ae(Uy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              ye(ae(y), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ue(() => [
                                  ye(ae(Gg), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: ae(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              ye(ae(y), { shrink: "" }, {
                                default: Ue(() => [
                                  ye(ae(Tr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ae(My)
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
                  i.value ? (ya(), Zd(ae(x5), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (k) => _.$emit("edit-translation", d.value))
                  }, {
                    default: Ue(() => [
                      ye(ae(Tr), {
                        class: "me-1",
                        icon: ae(El)
                      }, null, 8, ["icon"]),
                      _5(" " + f5(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : h5("", !0)
                ]),
                _: 1
              }),
              ye(ae(y), { class: "translated-segment-card__actions" }, {
                default: Ue(() => [
                  ye(d5, v5(S5(_.$attrs)), null, 16)
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
}, $5 = window.Vuex.useStore, V5 = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = X(), n = $5(), { selectNextTranslationUnit: o, selectTranslationUnitById: s } = eo();
  return () => {
    const { currentTranslation: a } = n.state.application;
    if (e.value)
      if (a && !t.value) {
        const { lastTranslatedContentTranslationUnit: i } = e.value;
        e.value.selectTranslationUnitById(
          (i == null ? void 0 : i.id) || 0
        ), o();
      } else
        t.value || s(0);
  };
}, ap = window.Vuex.useStore, D5 = () => {
  const e = ap(), { sourceLanguage: t, targetLanguage: n } = U(e);
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Ma.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, A5 = () => {
  const e = ap(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = U(e), s = D5();
  return () => b(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = Y.getStorageKey(
        n.value,
        o.value
      ), l = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", l);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, E5 = window.Vue.computed, T5 = (e) => {
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
}, L5 = () => {
  const { selectedContentTranslationUnit: e } = X(), t = E5(
    () => e.value instanceof Te
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && T5(o);
  };
}, B5 = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (l) => !Y.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, P5 = window.Vue.computed, ip = () => {
  const { currentTranslation: e } = ps(), { currentSourcePage: t } = st();
  return P5(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, F5 = window.Vuex.useStore, Hl = () => {
  const e = F5(), { sourceSection: t, targetPageTitleForPublishing: n } = X(), { pageURLParameter: o } = G(), { sourceLanguage: s, targetLanguage: a } = U(e), i = ip();
  return () => {
    const l = n.value, c = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (m) => B5(m, c)
    );
    const u = t.value.getTranslationProgress(a), d = e.getters["application/isSandboxTarget"];
    return je.saveTranslation({
      sourceTitle: o.value,
      targetTitle: l,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: i.value,
      units: r.map((m) => m.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: g,
      isSandbox: d,
      progress: u
    });
  };
}, M5 = window.Vue.effectScope, N5 = window.Vue.onScopeDispose, U5 = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = M5(!0), n = o.run(() => e(...a))), N5(s), n);
}, I5 = window.Vuex.useStore;
let Lr;
const z5 = () => {
  const e = I5(), t = Hl();
  let n = 1e3, o = 0;
  return Lr = Bl(() => t().then((a) => {
    a instanceof Gn ? (n *= o + 1, o++, setTimeout(Lr, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Qn)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Lr;
}, rp = U5(z5), R5 = window.Vuex.useStore, O5 = () => {
  const e = R5(), t = rp(), { currentMTProvider: n } = U(e), { sourceSection: o, currentProposedTranslation: s } = X(), { selectNextTranslationUnit: a } = eo();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, H5 = window.Vuex.useStore, j5 = () => {
  const e = H5(), t = rp();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
};
const Z = window.Vue.unref, Ie = window.Vue.createVNode, Et = window.Vue.withCtx, q5 = window.Vue.resolveDirective, eg = window.Vue.createElementVNode, G5 = window.Vue.withDirectives, W5 = window.Vue.toDisplayString, X5 = window.Vue.createTextVNode, K5 = window.Vue.renderList, Y5 = window.Vue.Fragment, Kt = window.Vue.openBlock, tg = window.Vue.createElementBlock, zn = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Q5 = window.Vue.normalizeClass, J5 = window.Vue.normalizeStyle, Z5 = { class: "sx-sentence-selector__header-title mb-0" }, eD = { class: "sx-sentence-selector__section-contents px-4" }, Rn = window.Vue.computed, tD = window.Vue.nextTick, nD = window.Vue.onMounted, Ca = window.Vue.ref, ng = window.Vue.watch, oD = window.Vuex.useStore, og = window.Codex.CdxButton, sD = window.Codex.CdxIcon, aD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Ca(!1), n = Ca(!1), o = Ca("100%"), s = oD(), { currentMTProvider: a, sourceLanguage: i, targetLanguage: l } = U(s), { sourceSection: c, selectedContentTranslationUnit: g } = X(), r = Rn(
      () => s.state.application.translationDataLoadingCounter === 0
    ), u = Rn(
      () => {
        var J;
        return (J = c.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), d = Rn(() => {
      var J;
      return (J = c.value) == null ? void 0 : J.subSections;
    }), m = Rn(
      () => {
        var J;
        return (J = c.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), p = Rn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), h = pt(), w = V5();
    A5()();
    const _ = L5();
    nD(() => {
      ng(
        r,
        () => b(this, null, function* () {
          r.value && (yield tD(), w(), _());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), ng(g, _);
    const {
      selectNextTranslationUnit: S,
      selectPreviousTranslationUnit: V
    } = eo(), A = O5(), k = () => {
      h({
        event_type: "editor_segment_add",
        translation_source_language: i.value,
        translation_target_language: l.value
      }), A();
    }, L = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, x = he(), T = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        Pe.value = !0;
        return;
      }
      K();
    }, { fetchTranslationsByStatus: oe } = Ra(), W = j5(), { clearURLParameters: I } = G(), K = () => b(this, null, function* () {
      oe("draft"), c.value.reset(), I(), W(), yield x.push({ name: "dashboard" });
      const { currentTranslation: J } = s.state.application;
      J && (s.commit("application/setCurrentTranslationRestored", !1), s.commit("application/setCurrentTranslation", null));
    }), {
      translateTranslationUnitById: ce,
      translateSelectedTranslationUnitForAllProviders: qe
    } = Ol(), kn = () => {
      We.value || (t.value = !0, qe());
    }, { getCurrentTitleByLanguage: Ft } = Pt(), Ge = (J, ue) => {
      x.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: m.value,
          title: Ft(
            l.value,
            i.value
          ),
          isInitialEdit: ue || null
        }
      });
    }, to = () => x.push({ name: "sx-publisher" }), sn = () => b(this, null, function* () {
      g.value ? yield ce(
        g.value.id,
        a.value
      ) : yield ce(0, a.value);
    }), We = Rn(
      () => g.value instanceof Te
    ), Pe = Ca(!1);
    return (J, ue) => {
      const an = q5("i18n");
      return Kt(), tg("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: J5(p.value)
      }, [
        Ie(Z(F), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Et(() => [
            Ie(Z(y), { shrink: "" }, {
              default: Et(() => [
                Ie(Z(og), {
                  weight: "quiet",
                  class: "px-3",
                  onClick: T
                }, {
                  default: Et(() => [
                    Ie(Z(sD), { icon: Z(Rm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ie(Z(y), {
              grow: "",
              class: "px-1"
            }, {
              default: Et(() => [
                G5(eg("h4", Z5, null, 512), [
                  [an, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Ie(Z(y), {
              shrink: "",
              class: "px-3"
            }, {
              default: Et(() => [
                Ie(Z(og), {
                  disabled: !(Z(c) && Z(c).isTranslated),
                  onClick: to
                }, {
                  default: Et(() => [
                    X5(W5(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? (Kt(), zn(Z(F), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Et(() => [
            Ie(Z(y), {
              dir: Z(O.getDir)(Z(i)),
              lang: Z(i),
              class: "sx-sentence-selector__section"
            }, {
              default: Et(() => [
                Ie(N$),
                eg("div", eD, [
                  (Kt(!0), tg(Y5, null, K5(d.value, (ie) => (Kt(), zn(DV, {
                    id: ie.id,
                    key: `sub-section-${ie.id}`,
                    "sub-section": ie,
                    onBounceTranslation: L
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !We.value && u.value ? (Kt(), zn(b5, {
              key: 0,
              onEditTranslation: ue[0] || (ue[0] = (ie) => Ge(ie, !1)),
              onSkipTranslation: Z(S),
              onSelectPreviousSegment: Z(V)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : We.value ? (Kt(), zn(JV, {
              key: 2,
              onEditTranslation: Ge,
              onApplyTranslation: k,
              onSkipTranslation: Z(S),
              onSelectPreviousSegment: Z(V)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Kt(), zn(wV, {
              key: 1,
              class: Q5({ "mb-0": !n.value }),
              onConfigureOptions: kn,
              onEditTranslation: ue[1] || (ue[1] = (ie) => Ge(ie, !0)),
              onApplyTranslation: k,
              onSkipTranslation: Z(S),
              onSelectPreviousSegment: Z(V),
              onRetryTranslation: sn
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Kt(), zn(Z(F), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Et(() => [
            Ie(Z(nt), { class: "mt-0" })
          ]),
          _: 1
        })),
        Ie(k$, {
          active: t.value,
          "onUpdate:active": ue[2] || (ue[2] = (ie) => t.value = ie)
        }, null, 8, ["active"]),
        Ie(J3, {
          modelValue: Pe.value,
          "onUpdate:modelValue": ue[3] || (ue[3] = (ie) => Pe.value = ie),
          onDiscardTranslation: K
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const iD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: aD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, rD = window.Vue.resolveComponent, lD = window.Vue.createVNode, cD = window.Vue.normalizeClass, uD = window.Vue.openBlock, dD = window.Vue.createElementBlock;
function gD(e, t, n, o, s, a) {
  const i = rD("sx-sentence-selector");
  return uD(), dD("main", {
    class: cD(["sx-sentence-selector-view", a.classes])
  }, [
    lD(i)
  ], 2);
}
const mD = /* @__PURE__ */ P(iD, [["render", gD]]), pD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, hD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const wD = window.Vue.resolveDirective, ka = window.Vue.withDirectives, Ze = window.Vue.openBlock, Tt = window.Vue.createElementBlock, xa = window.Vue.createCommentVNode, ba = window.Vue.Transition, pn = window.Vue.withCtx, On = window.Vue.createVNode, zo = window.Vue.createElementVNode, hn = window.Vue.unref, fD = window.Vue.renderList, _D = window.Vue.Fragment, vD = window.Vue.normalizeClass, sg = window.Vue.createBlock, SD = window.Vue.toDisplayString, yD = window.Vue.createTextVNode, CD = { class: "sx-quick-tutorial" }, kD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, xD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, bD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, $D = { class: "sx-quick-tutorial__illustration" }, VD = ["innerHTML"], DD = ["innerHTML"], AD = { class: "sx-quick-tutorial__step-indicator py-3" }, ED = ["onClick"], TD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, LD = {
  key: "secondary-point-1",
  class: "ma-0"
}, BD = {
  key: "secondary-point-2",
  class: "ma-0"
}, PD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, ag = window.Vue.ref, ig = window.Codex.CdxButton, FD = window.Codex.CdxIcon, MD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = ag(2), n = ag(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = he(), i = () => a.push({ name: "sx-sentence-selector" });
    return (l, c) => {
      const g = wD("i18n");
      return Ze(), Tt("section", CD, [
        On(hn(F), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: pn(() => [
            zo("section", kD, [
              On(ba, {
                name: "fade",
                mode: "out-in"
              }, {
                default: pn(() => [
                  s(1) ? ka((Ze(), Tt("h2", xD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? ka((Ze(), Tt("h2", bD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : xa("", !0)
                ]),
                _: 1
              })
            ]),
            zo("section", $D, [
              On(ba, { name: "mw-ui-animation-slide-left" }, {
                default: pn(() => [
                  s(1) ? (Ze(), Tt("div", {
                    key: "illustration-1",
                    innerHTML: hn(hD)
                  }, null, 8, VD)) : s(2) ? (Ze(), Tt("div", {
                    key: "illustration-2",
                    innerHTML: hn(pD)
                  }, null, 8, DD)) : xa("", !0)
                ]),
                _: 1
              })
            ]),
            zo("div", AD, [
              (Ze(!0), Tt(_D, null, fD(t.value, (r) => (Ze(), Tt("span", {
                key: `dot-${r}`,
                class: vD(["dot mx-1", { "dot-active": s(r) }]),
                role: "button",
                onClick: (u) => n.value = r
              }, null, 10, ED))), 128))
            ]),
            zo("section", TD, [
              On(ba, {
                name: "fade",
                mode: "out-in"
              }, {
                default: pn(() => [
                  s(1) ? ka((Ze(), Tt("h3", LD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? ka((Ze(), Tt("h3", BD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : xa("", !0)
                ]),
                _: 1
              })
            ]),
            zo("div", PD, [
              On(ba, {
                name: "fade",
                mode: "out-in"
              }, {
                default: pn(() => [
                  s(1) ? (Ze(), sg(hn(ig), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: pn(() => [
                      On(hn(FD), { icon: hn(vs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Ze(), sg(hn(ig), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: i
                  }, {
                    default: pn(() => [
                      yD(SD(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : xa("", !0)
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
const ND = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: MD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, UD = window.Vue.resolveComponent, ID = window.Vue.createVNode, zD = window.Vue.normalizeClass, RD = window.Vue.openBlock, OD = window.Vue.createElementBlock;
function HD(e, t, n, o, s, a) {
  const i = UD("sx-quick-tutorial");
  return RD(), OD("main", {
    class: zD(["sx-quick-tutorial-view", a.classes])
  }, [
    ID(i)
  ], 2);
}
const jD = /* @__PURE__ */ P(ND, [["render", HD]]);
const rg = window.Vue.ref, qD = window.Vue.onMounted;
function GD(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = H.getPageUrl(t, o.title), o.target = "_blank";
}
const WD = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: q0 },
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
    const t = rg(null), n = rg(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return qD(() => {
      n.value = 2 * o(), GD(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, XD = window.Vue.resolveDirective, lg = window.Vue.createElementVNode, KD = window.Vue.withDirectives, YD = window.Vue.resolveComponent, QD = window.Vue.withCtx, JD = window.Vue.createVNode, ZD = window.Vue.openBlock, eA = window.Vue.createElementBlock, tA = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, nA = { class: "sx-editor__original-content-panel__header mb-2" }, oA = ["lang", "dir", "innerHTML"];
function sA(e, t, n, o, s, a) {
  const i = YD("mw-expandable-content"), l = XD("i18n");
  return ZD(), eA("section", tA, [
    KD(lg("h5", nA, null, 512), [
      [l, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    JD(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: QD(() => [
        lg("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, oA)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const aA = /* @__PURE__ */ P(WD, [["render", sA]]), iA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const Br = window.Vue.computed, rA = window.Vuex.useStore, lA = {
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
    const { targetLanguage: t } = U(rA()), n = Br(
      () => en.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = Br(() => {
      const a = en.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = Br(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: iA,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, Ro = window.Vue.createElementVNode, cg = window.Vue.resolveDirective, Pr = window.Vue.withDirectives, cA = window.Vue.normalizeClass, uA = window.Vue.openBlock, dA = window.Vue.createElementBlock, gA = window.Vue.createCommentVNode, mA = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, pA = { class: "sx-editor__feedback-overlay-content px-4" }, hA = ["innerHTML"], wA = { class: "sx-editor__feedback-overlay-content__title" }, fA = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function _A(e, t, n, o, s, a) {
  const i = cg("i18n"), l = cg("i18n-html");
  return n.showFeedback ? (uA(), dA("div", mA, [
    Ro("div", pA, [
      Ro("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, hA),
      Pr(Ro("h2", wA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      Pr(Ro("p", fA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      Pr(Ro("p", {
        class: cA(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [l, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : gA("", !0);
}
const vA = /* @__PURE__ */ P(lA, [["render", _A]]), SA = window.Vuex.useStore, yA = () => {
  const e = SA(), t = Hl(), { selectNextTranslationUnit: n } = eo(), { sourceSection: o, selectedContentTranslationUnit: s } = X(), { getCurrentTitleByLanguage: a } = Pt();
  return (i) => b(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = i, l.querySelectorAll(".sx-edit-dummy-node").forEach((u) => u.remove()), i = l.innerHTML;
    const { sourceLanguage: c, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof Te && (i = (yield rm(
      i,
      a(g, c),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const Fr = window.Vue.ref, CA = window.Vue.computed, kA = window.Vuex.useStore, xA = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: vA,
    MwRow: F,
    SxEditorOriginalContent: aA,
    VisualEditor: S8,
    MwSpinner: nt
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Fr(!1), n = he(), o = kA(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: l, content: c, originalContent: g, title: r } = history.state, u = Fr(null), d = Fr(!1), m = pt(), { targetLanguage: p, sourceLanguage: h } = U(o), { sourceSection: w } = X(), f = CA(
      () => en.calculateScore(
        u.value,
        c,
        p.value
      )
    ), _ = yA(), S = (V) => b(this, null, function* () {
      u.value = V, d.value = !0;
      const A = new Promise((L) => setTimeout(L, 2e3));
      let k = Promise.resolve();
      i ? w.value.editedTranslation = V : (f.value === 0 && l && m({
        event_type: "editor_segment_add",
        translation_source_language: h.value,
        translation_target_language: p.value
      }), k = _(V)), yield Promise.all([A, k]), d.value = !1, a();
    });
    return {
      closeEditor: a,
      content: c,
      editedTranslation: u,
      editorReady: t,
      getDir: O.getDir,
      sourceLanguage: h,
      targetLanguage: p,
      onEditorReady: s,
      onEditCompleted: S,
      originalContent: g,
      showFeedback: d,
      title: r
    };
  }
}, Oo = window.Vue.resolveComponent, Mr = window.Vue.openBlock, Nr = window.Vue.createBlock, ug = window.Vue.createCommentVNode, dg = window.Vue.createVNode, bA = window.Vue.createElementVNode, $A = window.Vue.withCtx, VA = { class: "sx-editor__editing-surface-container grow" };
function DA(e, t, n, o, s, a) {
  const i = Oo("sx-editor-original-content"), l = Oo("mw-spinner"), c = Oo("edit-complete-feedback"), g = Oo("visual-editor"), r = Oo("mw-row");
  return Mr(), Nr(r, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: $A(() => [
      o.originalContent ? (Mr(), Nr(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : ug("", !0),
      o.editorReady ? ug("", !0) : (Mr(), Nr(l, { key: 1 })),
      bA("div", VA, [
        dg(c, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        dg(g, {
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
const AA = /* @__PURE__ */ P(xA, [["render", DA]]);
const EA = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: AA
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
}, TA = window.Vue.resolveComponent, LA = window.Vue.createVNode, BA = window.Vue.normalizeClass, PA = window.Vue.openBlock, FA = window.Vue.createElementBlock;
function MA(e, t, n, o, s, a) {
  const i = TA("sx-editor");
  return PA(), FA("main", {
    class: BA(["sx-editor-view", a.classes])
  }, [
    LA(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const NA = /* @__PURE__ */ P(EA, [["render", MA]]);
const dt = window.Vue.unref, wn = window.Vue.createVNode, Ho = window.Vue.withCtx, UA = window.Vue.resolveDirective, IA = window.Vue.withDirectives, zA = window.Vue.openBlock, RA = window.Vue.createBlock, gg = window.Codex.CdxButton, mg = window.Codex.CdxIcon, OA = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = he(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = UA("i18n");
      return zA(), RA(dt(F), { class: "ma-0 sx-publisher__header" }, {
        default: Ho(() => [
          wn(dt(y), {
            shrink: "",
            class: "me-2"
          }, {
            default: Ho(() => [
              wn(dt(gg), {
                class: "px-3",
                weight: "quiet",
                onClick: n
              }, {
                default: Ho(() => [
                  wn(dt(mg), { icon: dt(za) }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          IA(wn(dt(y), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          wn(dt(y), { shrink: "" }, {
            default: Ho(() => [
              wn(dt(gg), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: Ho(() => [
                  wn(dt(mg), { icon: dt(Ay) }, null, 8, ["icon"])
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
}, HA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, jA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, pg = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const qA = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: ot, MwRow: F, MwCol: y },
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
        svg: HA,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: jA,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: pg,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: pg,
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
}, Ur = window.Vue.createElementVNode, hg = window.Vue.toDisplayString, Ir = window.Vue.resolveComponent, zr = window.Vue.withCtx, wg = window.Vue.createVNode, GA = window.Vue.openBlock, WA = window.Vue.createBlock, XA = window.Vue.createCommentVNode, KA = ["innerHTML"], YA = ["textContent"], QA = ["textContent"];
function JA(e, t, n, o, s, a) {
  const i = Ir("mw-col"), l = Ir("mw-row"), c = Ir("mw-dialog");
  return n.active ? (GA(), WA(c, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: zr(() => [
      wg(l, { class: "ma-4" }, {
        default: zr(() => [
          wg(i, null, {
            default: zr(() => [
              Ur("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, KA),
              Ur("h2", {
                textContent: hg(a.animationTitle)
              }, null, 8, YA),
              Ur("p", {
                class: "ma-0",
                textContent: hg(a.animationSubtitle)
              }, null, 8, QA)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : XA("", !0);
}
const ZA = /* @__PURE__ */ P(qA, [["render", JA]]);
const Ee = window.Vue.unref, et = window.Vue.createVNode, Lt = window.Vue.withCtx, eE = window.Vue.resolveDirective, tE = window.Vue.withDirectives, fg = window.Vue.toDisplayString, nE = window.Vue.createTextVNode, Rr = window.Vue.openBlock, _g = window.Vue.createElementBlock, oE = window.Vue.createCommentVNode, lp = window.Vue.createElementVNode, sE = window.Vue.createBlock, aE = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, iE = ["src"], rE = ["textContent"], lE = /* @__PURE__ */ lp("p", { class: "mt-0" }, null, -1), cE = window.Vue.computed, uE = window.Vue.inject, dE = window.Vue.ref, vg = window.Codex.CdxButton, gE = window.Codex.CdxIcon, mE = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: tm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = dE(""), s = () => n("close"), a = () => n("publish", o.value), i = uE("breakpoints"), l = cE(() => i.value.mobile);
    return (c, g) => {
      const r = eE("i18n");
      return e.active && e.captchaDetails ? (Rr(), sE(Ee(ot), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Lt(() => [
          et(Ee(F), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Lt(() => [
              et(Ee(y), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Lt(() => [
                  et(Ee(vg), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    onClick: s
                  }, {
                    default: Lt(() => [
                      et(Ee(gE), { icon: Ee(za) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              tE(et(Ee(y), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              et(Ee(y), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Lt(() => [
                  et(Ee(vg), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Lt(() => [
                      nE(fg(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          et(Ee(as))
        ]),
        default: Lt(() => [
          lp("div", aE, [
            e.captchaDetails.type === "image" ? (Rr(), _g("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, iE)) : (Rr(), _g("p", {
              key: 1,
              textContent: fg(e.captchaDetails.question)
            }, null, 8, rE)),
            lE,
            et(Ee(F), { class: "ma-0" }, {
              default: Lt(() => [
                et(Ee(y), null, {
                  default: Lt(() => [
                    et(Ee(fl), {
                      value: o.value,
                      "onUpdate:value": g[0] || (g[0] = (u) => o.value = u),
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
      }, 8, ["fullscreen"])) : oE("", !0);
    };
  }
};
const fn = window.Vue.unref, jo = window.Vue.createVNode, $a = window.Vue.withCtx, _n = window.Vue.createElementVNode, pE = window.Vue.resolveDirective, hE = window.Vue.withDirectives, wE = window.Vue.renderList, Sg = window.Vue.Fragment, Or = window.Vue.openBlock, yg = window.Vue.createElementBlock, fE = window.Vue.toDisplayString, _E = window.Vue.normalizeClass, vE = window.Vue.createBlock, SE = { class: "mw-ui-dialog__header" }, yE = { class: "row ma-0 px-4 py-3" }, CE = { class: "col shrink justify-center" }, kE = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, xE = { class: "mb-0" }, bE = { class: "pa-4" }, $E = ["textContent"], VE = window.Vuex.useStore, qo = window.Vue.computed, DE = window.Codex.CdxButton, AE = window.Codex.CdxIcon, EE = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = VE(), s = qo(() => o.state.application.publishTarget), a = qo(() => o.state.translator.isAnon), i = xe(), { sourceSection: l } = X(), c = qo(
      () => l.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = qo(
      () => l.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = qo(() => [
      {
        label: c.value,
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
    ]), u = (p) => p === r.value.length - 1 ? "mb-1" : "mb-4", d = () => n("update:active", !1), m = (p) => {
      const h = p.target.value;
      o.commit("application/setPublishTarget", h), d();
    };
    return (p, h) => {
      const w = pE("i18n");
      return Or(), vE(fn(ot), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: d
      }, {
        header: $a(() => [
          _n("div", SE, [
            _n("div", yE, [
              _n("div", CE, [
                jo(fn(DE), {
                  class: "pa-0",
                  weight: "quiet",
                  onClick: d
                }, {
                  default: $a(() => [
                    jo(fn(AE), { icon: fn(Rm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _n("div", kE, [
                hE(_n("h4", xE, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            jo(fn(as))
          ])
        ]),
        default: $a(() => [
          _n("div", bE, [
            jo(fn(qg), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: $a(() => [
                (Or(!0), yg(Sg, null, wE(r.value, (f, _) => (Or(), yg(Sg, {
                  key: f.label
                }, [
                  jo(fn(Ea), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  _n("p", {
                    class: _E(["complementary ms-7 mt-0", u(_)]),
                    textContent: fE(f.details)
                  }, null, 10, $E)
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
const tt = window.Vue.unref, vn = window.Vue.createVNode, TE = window.Vue.resolveDirective, Cg = window.Vue.withDirectives, Va = window.Vue.openBlock, kg = window.Vue.createElementBlock, LE = window.Vue.createCommentVNode, xg = window.Vue.toDisplayString, Hr = window.Vue.createElementVNode, Hn = window.Vue.withCtx, bg = window.Vue.createBlock, BE = window.Vue.Fragment, PE = window.Vue.normalizeClass, FE = { class: "sx-publisher__review-info__content" }, ME = {
  key: 0,
  class: "complementary ma-0"
}, NE = ["textContent"], UE = ["textContent"], Yt = window.Vue.computed, $g = window.Vue.ref, IE = window.Vue.watch, Vg = window.Codex.CdxButton, jr = window.Codex.CdxIcon, zE = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = $g(0), o = $g(null);
    IE(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = Yt(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Yt(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Yt(() => {
      switch (a.value) {
        case "warning":
          return zm;
        case "error":
          return by;
        default:
          return Ty;
      }
    }), l = Yt(() => a.value === "default"), c = Yt(
      () => l.value ? "notice" : a.value
    ), g = Yt(
      () => `sx-publisher__review-info--${c.value}`
    ), r = xe(), u = Yt(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = Yt(
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
      const f = TE("i18n-html");
      return Va(), bg(tt(Ww), {
        type: c.value,
        class: PE(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: l.value
      }, {
        icon: Hn(() => [
          vn(tt(jr), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Hn(() => [
          Hr("div", FE, [
            a.value === "default" ? Cg((Va(), kg("p", ME, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : (Va(), kg(BE, { key: 1 }, [
              Hr("h5", {
                textContent: xg(d.value)
              }, null, 8, NE),
              Hr("p", {
                textContent: xg(u.value)
              }, null, 8, UE),
              vn(tt(F), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Hn(() => [
                  Cg(vn(tt(y), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Va(), bg(tt(y), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Hn(() => [
                      vn(tt(Vg), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        onClick: m
                      }, {
                        default: Hn(() => [
                          vn(tt(jr), { icon: tt(Ll) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      vn(tt(Vg), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        onClick: p
                      }, {
                        default: Hn(() => [
                          vn(tt(jr), { icon: tt(vs) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : LE("", !0)
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
}, RE = (e) => {
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
}, Dg = window.Vue.ref, OE = window.Vuex.useStore, HE = () => {
  const e = OE(), { pageURLParameter: t } = G(), { sourceSection: n, targetPageTitleForPublishing: o } = X(), s = ip(), a = Dg(!1), i = Dg("pending"), l = () => a.value = !1, c = Hl(), g = (u, d) => b(void 0, null, function* () {
    const m = yield c();
    if (m instanceof Gn)
      return { publishFeedbackMessage: m, targetUrl: null };
    const p = m, {
      /** @type {PageSection} */
      sourceLanguage: h,
      targetLanguage: w
    } = e.state.application, f = o.value, _ = e.getters["application/isSandboxTarget"], S = {
      html: RE(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: f,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: h,
      targetLanguage: w,
      revision: s.value,
      isSandbox: _,
      sectionTranslationId: p
    };
    return u && (S.captchaId = u, S.captchaWord = d), je.publishTranslation(S);
  });
  return {
    closePublishDialog: l,
    doPublish: (u = null, d = null) => b(void 0, null, function* () {
      i.value = "pending", a.value = !0;
      let m;
      try {
        m = yield g(
          d == null ? void 0 : d.id,
          u
        );
      } catch (p) {
        if (p instanceof Qn)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw p;
      }
      return m;
    }),
    isPublishDialogActive: a,
    publishStatus: i
  };
}, jE = window.Vue.computed, qE = () => {
  const e = he(), { sourceSection: t } = X(), { getCurrentTitleByLanguage: n } = Pt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = G(), a = jE(
    () => t.value.subSections.reduce(
      (i, l) => l.isTranslated ? `${i}<section rel="cx:Section" id="${l.targetSectionId}">${l.translatedContent}</section>` : i,
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
}, GE = window.Vuex.useStore, WE = () => {
  const e = GE(), { targetLanguage: t } = U(e), { sourceSection: n } = X();
  return () => {
    const o = en.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = en.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, i = s === "failure" ? "error" : "warning";
    let l, c;
    return i === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Gn({
      title: l,
      text: c,
      status: i,
      type: "mt"
    });
  };
}, XE = window.Vue.ref, KE = window.Vue.computed, YE = () => {
  const e = WE(), t = XE([]), n = KE(
    () => t.value.some((i) => i.isError)
  );
  return {
    addPublishFeedbackMessage: (i) => {
      t.value.push(i), t.value.sort((l, c) => +c.isError - +l.isError);
    },
    clearPublishFeedbackMessages: () => {
      t.value = [];
    },
    publishFeedbackMessages: t,
    isPublishingDisabled: n,
    initializePublishFeedbackMessages: () => b(void 0, null, function* () {
      const i = yield e();
      i && t.value.push(i);
    })
  };
}, QE = window.Vuex.useStore, JE = () => {
  const e = QE(), { currentSourcePage: t } = st(), { sourceLanguage: n, targetLanguage: o } = U(e), { sourceSection: s, targetPageTitleForPublishing: a } = X();
  return (i) => b(void 0, null, function* () {
    const l = a.value, c = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), u = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !c && r.getNamespaceId() !== u.user)
      try {
        yield Ma.addWikibaseLink(
          n.value,
          o.value,
          g,
          l
        );
      } catch (d) {
        mw.log.error("Error while adding wikibase link", d);
      }
    if (!i) {
      const d = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(d), new Error(d);
    }
    location.href = i;
  });
}, Ag = window.Vue.ref, ZE = () => {
  const e = Ag(!1), t = Ag(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const le = window.Vue.unref, Ve = window.Vue.createVNode, eT = window.Vue.resolveDirective, Go = window.Vue.createElementVNode, tT = window.Vue.withDirectives, jn = window.Vue.withCtx, nT = window.Vue.openBlock, oT = window.Vue.createElementBlock, sT = { class: "sx-publisher" }, aT = { class: "sx-publisher__publish-panel pa-4" }, iT = { class: "mb-2" }, rT = ["innerHTML"], lT = { class: "sx-publisher__section-preview pa-5" }, cT = ["innerHTML"], Eg = window.Vue.computed, uT = window.Vue.onMounted, dT = window.Vue.ref, gT = window.Vue.watch, mT = window.Vuex.useStore, Tg = window.Codex.CdxButton, Lg = window.Codex.CdxIcon, pT = {
  __name: "SXPublisher",
  setup(e) {
    const t = mT(), { sourceSection: n } = X(), o = Eg(() => {
      var x;
      return (x = n.value) == null ? void 0 : x.title;
    }), s = xe(), a = Eg(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: l,
      handleCaptchaError: c,
      onCaptchaDialogClose: g
    } = ZE(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: u,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: m,
      initializePublishFeedbackMessages: p
    } = YE(), h = JE(), { doPublish: w, isPublishDialogActive: f, publishStatus: _, closePublishDialog: S } = HE(), V = (x = null) => b(this, null, function* () {
      const T = yield w(x, i);
      if (!T)
        return;
      const { publishFeedbackMessage: oe, targetUrl: W } = T;
      if (c(oe)) {
        S();
        return;
      } else
        oe && d(oe);
      _.value = u.value ? "failure" : "success", setTimeout(() => {
        if (u.value) {
          S();
          return;
        }
        h(W);
      }, 1e3);
    });
    uT(() => p());
    const A = qE(), k = dT(!1), L = () => k.value = !0;
    return gT(k, (x) => {
      x || m();
    }), (x, T) => {
      const oe = eT("i18n");
      return nT(), oT("section", sT, [
        Ve(OA, {
          "is-publishing-disabled": le(u),
          onPublishTranslation: V
        }, null, 8, ["is-publishing-disabled"]),
        Go("div", aT, [
          tT(Go("h5", iT, null, 512), [
            [oe, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Go("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, rT),
          Ve(le(F), {
            justify: "end",
            class: "ma-0"
          }, {
            default: jn(() => [
              Ve(le(y), { shrink: "" }, {
                default: jn(() => [
                  Ve(le(Tg), {
                    weight: "quiet",
                    onClick: L
                  }, {
                    default: jn(() => [
                      Ve(le(Lg), { icon: le(Ny) }, null, 8, ["icon"])
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
        Ve(zE, { "publish-feedback-messages": le(r) }, null, 8, ["publish-feedback-messages"]),
        Go("section", lT, [
          Ve(le(F), { class: "pb-5 ma-0" }, {
            default: jn(() => [
              Ve(le(y), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ve(le(y), { shrink: "" }, {
                default: jn(() => [
                  Ve(le(Tg), {
                    weight: "quiet",
                    onClick: le(A)
                  }, {
                    default: jn(() => [
                      Ve(le(Lg), { icon: le(El) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Go("div", {
            innerHTML: le(n).translationHtml
          }, null, 8, cT)
        ]),
        Ve(EE, {
          active: k.value,
          "onUpdate:active": T[0] || (T[0] = (W) => k.value = W)
        }, null, 8, ["active"]),
        Ve(mE, {
          active: le(l),
          "captcha-details": le(i),
          onClose: le(g),
          onPublish: T[1] || (T[1] = (W) => V(W))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ve(ZA, {
          active: le(f),
          status: le(_)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const hT = {
  name: "SxPublisherView",
  components: {
    SxPublisher: pT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, wT = window.Vue.resolveComponent, fT = window.Vue.createVNode, _T = window.Vue.normalizeClass, vT = window.Vue.openBlock, ST = window.Vue.createElementBlock;
function yT(e, t, n, o, s, a) {
  const i = wT("sx-publisher");
  return vT(), ST("main", {
    class: _T(["sx-publisher-view", a.classes])
  }, [
    fT(i)
  ], 2);
}
const CT = /* @__PURE__ */ P(hT, [["render", yT]]);
const kT = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: _l, MwIcon: me, MwRow: F, MwCol: y },
  props: {
    suggestion: {
      type: Zn,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: sw, mwIconLanguage: cw, mwIconArticle: wl, getDir: O.getDir };
  }
}, Da = window.Vue.resolveComponent, Qt = window.Vue.createVNode, Sn = window.Vue.withCtx, qr = window.Vue.toDisplayString, Gr = window.Vue.createElementVNode, xT = window.Vue.openBlock, bT = window.Vue.createBlock, $T = ["textContent"], VT = ["textContent"], DT = ["textContent"];
function AT(e, t, n, o, s, a) {
  const i = Da("mw-thumbnail"), l = Da("mw-col"), c = Da("mw-icon"), g = Da("mw-row");
  return xT(), bT(g, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: Sn(() => [
      Qt(l, { shrink: "" }, {
        default: Sn(() => [
          Qt(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      Qt(l, { class: "ms-4" }, {
        default: Sn(() => [
          Qt(g, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Sn(() => [
              Qt(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: Sn(() => [
                  Gr("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: qr(n.suggestion.title)
                  }, null, 8, $T)
                ]),
                _: 1
              }),
              Qt(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: Sn(() => [
                  Gr("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: qr(n.suggestion.description)
                  }, null, 8, VT)
                ]),
                _: 1
              }),
              Qt(l, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: Sn(() => [
                  Qt(c, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  Gr("small", {
                    textContent: qr(n.suggestion.langLinksCount)
                  }, null, 8, DT)
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
const cp = /* @__PURE__ */ P(kT, [["render", AT]]), ET = window.Vue.computed, Bg = window.Vue.ref, TT = window.Vue.watch, LT = (e, t) => {
  const o = Bg([]), s = Bg(!1), a = ET(
    () => o.value.slice(0, 4)
  ), i = Bl(() => b(void 0, null, function* () {
    try {
      o.value = yield us.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return TT(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const BT = window.Vue.computed, PT = window.Vuex.useStore, FT = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: cp, MwCard: Oe, MwSpinner: nt },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = U(
      PT()
    ), o = BT(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = LT(
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
}, Wr = window.Vue.resolveComponent, Wo = window.Vue.openBlock, Xr = window.Vue.createBlock, MT = window.Vue.createCommentVNode, NT = window.Vue.resolveDirective, UT = window.Vue.withDirectives, Pg = window.Vue.createElementBlock, IT = window.Vue.renderList, zT = window.Vue.Fragment, RT = window.Vue.withCtx, OT = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function HT(e, t, n, o, s, a) {
  const i = Wr("mw-spinner"), l = Wr("sx-search-article-suggestion"), c = Wr("mw-card"), g = NT("i18n");
  return Wo(), Xr(c, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: RT(() => [
      o.searchResultsLoading ? (Wo(), Xr(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? UT((Wo(), Pg("p", OT, null, 512)), [
        [g, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : MT("", !0),
      (Wo(!0), Pg(zT, null, IT(o.searchResultsSlice, (r) => (Wo(), Xr(l, {
        key: r.pageid,
        suggestion: r,
        onClick: (u) => e.$emit("suggestion-clicked", r)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const jT = /* @__PURE__ */ P(FT, [["render", HT]]);
const qT = window.Vuex.mapState, GT = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: cp, MwCard: Oe },
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
  computed: ke({}, qT({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, WT = window.Vue.toDisplayString, XT = window.Vue.createElementVNode, KT = window.Vue.renderList, YT = window.Vue.Fragment, Kr = window.Vue.openBlock, QT = window.Vue.createElementBlock, Fg = window.Vue.resolveComponent, Mg = window.Vue.createBlock, Ng = window.Vue.withCtx, JT = ["textContent"];
function ZT(e, t, n, o, s, a) {
  const i = Fg("sx-search-article-suggestion"), l = Fg("mw-card");
  return Kr(), Mg(l, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: Ng(() => [
      XT("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: WT(n.cardTitle)
      }, null, 8, JT)
    ]),
    default: Ng(() => [
      (Kr(!0), QT(YT, null, KT(n.suggestions, (c) => (Kr(), Mg(i, {
        key: c.pageid,
        suggestion: c,
        onClick: (g) => e.$emit("suggestion-clicked", c)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const Ug = /* @__PURE__ */ P(GT, [["render", ZT]]), eL = window.Vue.computed, tL = (e, t) => eL(() => {
  const o = {
    value: "other",
    props: {
      icon: gw,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (i, l) => s.findIndex((c) => c === i) === l
  ).map((i) => ({
    value: i,
    props: {
      label: O.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), nL = window.Vue.computed, oL = (e, t, n) => nL(() => {
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
const sL = window.Vue.resolveDirective, aL = window.Vue.createElementVNode, Yr = window.Vue.withDirectives, ge = window.Vue.unref, Xo = window.Vue.withCtx, gt = window.Vue.createVNode, Ko = window.Vue.openBlock, Ig = window.Vue.createBlock, iL = window.Vue.createCommentVNode, Qr = window.Vue.createElementBlock, rL = window.Vue.Fragment, lL = window.Vue.vShow, cL = { class: "sx-article-search" }, uL = { class: "mb-0" }, dL = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, Yo = window.Vue.ref, gL = window.Vue.onMounted, Jr = window.Vue.computed, zg = window.Vue.watch, mL = window.Vue.inject, pL = window.Vuex.useStore, hL = window.Codex.CdxButton, wL = window.Codex.CdxIcon, fL = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Yo(""), n = Yo(!1), o = Yo(null), s = Yo(!1), a = Yo([]), i = pL(), { sourceLanguage: l, targetLanguage: c } = U(i), { supportedLanguageCodes: g } = hs(), r = oL(
      l,
      c,
      a
    ), u = tL(
      l,
      r
    ), d = he(), { fetchAllTranslations: m } = Ra();
    gL(() => b(this, null, function* () {
      var K;
      yield Um()(), m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (ce) {
      }
      (K = o.value) == null || K.focus();
    }));
    const p = () => {
      d.push({ name: "dashboard" });
    }, h = Im(), w = (I) => h(I, c.value), f = (I) => {
      if (I === "other") {
        s.value = !0;
        return;
      }
      w(I);
    };
    zg(l, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const _ = pt();
    zg(t, () => {
      n.value || (n.value = !0, _({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: c.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, V = (I) => {
      s.value = !1, a.value.push(I), f(I);
    }, A = Jr(
      () => i.getters["mediawiki/getRecentlyEditedPages"]
    ), k = Jr(() => i.getters["mediawiki/getNearbyPages"]), L = mL("breakpoints"), x = Jr(() => L.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: T,
      startNearbySectionTranslation: oe,
      startSearchResultSectionTranslation: W
    } = Vl();
    return (I, K) => {
      const ce = sL("i18n");
      return Ko(), Qr("section", cL, [
        gt(ge(F), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Xo(() => [
            gt(ge(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Xo(() => [
                Yr(aL("h5", uL, null, 512), [
                  [ce, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            gt(ge(y), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Xo(() => [
                gt(ge(hL), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  onClick: p
                }, {
                  default: Xo(() => [
                    gt(ge(wL), { icon: ge(za) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        gt(ge(fl), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": K[0] || (K[0] = (qe) => t.value = qe),
          "icon-size": 20,
          icon: ge(Og),
          placeholder: I.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        gt(ge(ss), {
          class: "sx-article-search__language-button-group",
          items: ge(u),
          active: ge(l),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? iL("", !0) : (Ko(), Qr(rL, { key: 0 }, [
          A.value && A.value.length ? (Ko(), Ig(Ug, {
            key: 0,
            "card-title": I.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: A.value,
            onSuggestionClicked: ge(T)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : k.value && k.value.length ? (Ko(), Ig(Ug, {
            key: 1,
            "card-title": I.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: k.value,
            onSuggestionClicked: ge(oe)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : Yr((Ko(), Qr("p", dL, null, 512)), [
            [ce, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Yr(gt(jT, {
          "search-input": t.value,
          onSuggestionClicked: ge(W)
        }, null, 8, ["search-input", "onSuggestionClicked"]), [
          [lL, !!t.value]
        ]),
        gt(ge(ot), {
          value: s.value,
          "onUpdate:value": K[1] || (K[1] = (qe) => s.value = qe),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: x.value,
          header: x.value,
          "overlay-opacity": 0,
          title: I.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: Xo(() => [
            gt(ge(Xm), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ge(g),
              suggestions: ge(r),
              placeholder: I.$i18n("cx-sx-language-selector-placeholder"),
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
const _L = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: fL
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, vL = window.Vue.resolveComponent, SL = window.Vue.createVNode, yL = window.Vue.normalizeClass, CL = window.Vue.openBlock, kL = window.Vue.createElementBlock;
function xL(e, t, n, o, s, a) {
  const i = vL("sx-article-search");
  return CL(), kL("main", {
    class: yL(["sx-article-search-view", a.classes])
  }, [
    SL(i)
  ], 2);
}
const bL = /* @__PURE__ */ P(_L, [["render", xL]]), $L = window.Vuex.useStore, up = [
  {
    path: "",
    name: "dashboard",
    component: Hu,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: bL,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: Wb,
    props: (e) => ({
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: _4,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: j3,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: jD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: mD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: NA,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: CT,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Hu,
    meta: { workflowStep: 0 }
  }
], jl = Nv({
  history: M1(),
  routes: up
});
jl.beforeEach((e, t, n) => {
  const o = $L();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || Xg.assertUser().catch((l) => {
    l instanceof Qn && o.commit("application/setIsLoginDialogOn", !0);
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
    const l = Math.ceil(a) - 1, c = up.find(
      (g) => g.meta.workflowStep === l
    );
    n({ name: c.name });
    return;
  }
  n();
});
jl.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const VL = window.Vue.createApp, DL = mw.config.get("wgUserLanguage"), AL = "en", EL = mw.messages.values || {}, on = VL(Of);
on.config.globalProperties.$incompleteVersion = !0;
const TL = Ky();
on.use(TL);
on.use(jl);
on.use(s1);
on.use(tf);
on.use(ef);
const LL = iS({
  locale: DL,
  finalFallback: AL,
  messages: EL,
  wikilinks: !0
});
on.use(LL);
on.mount("#contenttranslation");
