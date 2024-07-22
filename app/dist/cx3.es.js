/*@nomin*/
var vp = Object.defineProperty, Sp = Object.defineProperties;
var yp = Object.getOwnPropertyDescriptors;
var Kl = Object.getOwnPropertySymbols;
var Cp = Object.prototype.hasOwnProperty, kp = Object.prototype.propertyIsEnumerable;
var Yl = (e, t, n) => t in e ? vp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ce = (e, t) => {
  for (var n in t || (t = {}))
    Cp.call(t, n) && Yl(e, n, t[n]);
  if (Kl)
    for (var n of Kl(t))
      kp.call(t, n) && Yl(e, n, t[n]);
  return e;
}, Fe = (e, t) => Sp(e, yp(t));
var k = (e, t, n) => new Promise((o, s) => {
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
const B = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, xp = {
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
}, bp = window.Vue.toDisplayString, Wa = window.Vue.openBlock, Xa = window.Vue.createElementBlock, $p = window.Vue.createCommentVNode, Ql = window.Vue.createElementVNode, Vp = window.Vue.normalizeClass, Dp = ["width", "height", "aria-labelledby"], Ap = ["id"], Ep = ["fill"], Lp = ["d"];
function Tp(e, t, n, o, s, a) {
  return Wa(), Xa("span", {
    class: Vp(["mw-ui-icon notranslate", a.classes])
  }, [
    (Wa(), Xa("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Wa(), Xa("title", {
        key: 0,
        id: n.iconName
      }, bp(n.iconName), 9, Ap)) : $p("", !0),
      Ql("g", { fill: n.iconColor }, [
        Ql("path", { d: a.iconImagePath }, null, 8, Lp)
      ], 8, Ep)
    ], 8, Dp))
  ], 2);
}
const me = /* @__PURE__ */ B(xp, [["render", Tp]]);
const Bp = {
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
}, Pp = window.Vue.renderSlot, Fp = window.Vue.resolveComponent, Jl = window.Vue.normalizeClass, Ss = window.Vue.openBlock, Ka = window.Vue.createBlock, Ya = window.Vue.createCommentVNode, Mp = window.Vue.toDisplayString, Np = window.Vue.createElementBlock, Up = window.Vue.toHandlerKey, Ip = window.Vue.withModifiers, zp = window.Vue.mergeProps, Rp = window.Vue.createElementVNode, Op = window.Vue.resolveDynamicComponent, Hp = window.Vue.withCtx, jp = { class: "mw-ui-button__content" }, qp = ["textContent"];
function Gp(e, t, n, o, s, a) {
  const i = Fp("mw-icon");
  return Ss(), Ka(Op(a.component), {
    class: Jl(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Hp(() => [
      Pp(e.$slots, "default", {}, () => [
        Rp("span", jp, [
          n.icon ? (Ss(), Ka(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Jl(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Ya("", !0),
          !a.isIcon && n.label ? (Ss(), Np("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Mp(n.label)
          }, null, 8, qp)) : Ya("", !0),
          n.indicator ? (Ss(), Ka(i, zp({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Up(a.indicatorClickEvent)]: t[0] || (t[0] = Ip((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Ya("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const $e = /* @__PURE__ */ B(Bp, [["render", Gp]]);
const Wp = {
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
}, Xp = window.Vue.renderList, Kp = window.Vue.Fragment, Qa = window.Vue.openBlock, Zl = window.Vue.createElementBlock, Yp = window.Vue.resolveComponent, Qp = window.Vue.withModifiers, Jp = window.Vue.mergeProps, Zp = window.Vue.createBlock, eh = { class: "row mw-ui-button-group ma-0 pa-0" };
function th(e, t, n, o, s, a) {
  const i = Yp("mw-button");
  return Qa(), Zl("div", eh, [
    (Qa(!0), Zl(Kp, null, Xp(n.items, (l) => (Qa(), Zp(i, Jp({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Qp((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const es = /* @__PURE__ */ B(Wp, [["render", th]]);
const nh = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: es },
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
}, oh = window.Vue.renderSlot, sh = window.Vue.resolveComponent, ah = window.Vue.createVNode, ih = window.Vue.createElementVNode, rh = window.Vue.openBlock, lh = window.Vue.createElementBlock, ch = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, uh = { class: "col-12 ma-0 pa-0" };
function dh(e, t, n, o, s, a) {
  const i = sh("mw-button-group");
  return rh(), lh("footer", ch, [
    ih("div", uh, [
      oh(e.$slots, "default", {}, () => [
        ah(i, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (l) => e.$emit("update:active", l))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
const gh = /* @__PURE__ */ B(nh, [["render", dh]]);
const mh = {
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
}, ec = window.Vue.renderSlot, ph = window.Vue.toDisplayString, tc = window.Vue.openBlock, nc = window.Vue.createElementBlock, hh = window.Vue.createCommentVNode, wh = window.Vue.createElementVNode, fh = { class: "mw-ui-card" }, _h = ["textContent"], vh = { class: "mw-ui-card__content" };
function Sh(e, t, n, o, s, a) {
  return tc(), nc("div", fh, [
    ec(e.$slots, "header", {}, () => [
      n.title ? (tc(), nc("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: ph(n.title)
      }, null, 8, _h)) : hh("", !0)
    ]),
    wh("div", vh, [
      ec(e.$slots, "default")
    ])
  ]);
}
const He = /* @__PURE__ */ B(mh, [["render", Sh]]);
const yh = {}, Ch = window.Vue.openBlock, kh = window.Vue.createElementBlock, xh = { class: "mw-ui-divider row" };
function bh(e, t) {
  return Ch(), kh("div", xh);
}
const ts = /* @__PURE__ */ B(yh, [["render", bh]]);
const $h = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Vh = window.Vue.renderSlot, Dh = window.Vue.resolveDynamicComponent, Ah = window.Vue.withCtx, Eh = window.Vue.openBlock, Lh = window.Vue.createBlock;
function Th(e, t, n, o, s, a) {
  return Eh(), Lh(Dh(n.tag), { class: "mw-grid container" }, {
    default: Ah(() => [
      Vh(e.$slots, "default")
    ]),
    _: 3
  });
}
const Bh = /* @__PURE__ */ B($h, [["render", Th]]), Ph = {
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
}, Fh = window.Vue.renderSlot, Mh = window.Vue.resolveDynamicComponent, Nh = window.Vue.normalizeClass, Uh = window.Vue.withCtx, Ih = window.Vue.openBlock, zh = window.Vue.createBlock;
function Rh(e, t, n, o, s, a) {
  return Ih(), zh(Mh(n.tag), {
    class: Nh(a.classes)
  }, {
    default: Uh(() => [
      Fh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ B(Ph, [["render", Rh]]), Yr = ["mobile", "tablet", "desktop", "desktop-wide"], Oh = Yr.reduce(
  (e, t) => Fe(Ce({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Hh = {
  name: "MwCol",
  props: Fe(Ce({}, Oh), {
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
      for (let n = 0; n < Yr.length; n++) {
        let o = Yr[n], s = this.$props[o];
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
}, jh = window.Vue.renderSlot, qh = window.Vue.resolveDynamicComponent, Gh = window.Vue.normalizeClass, Wh = window.Vue.withCtx, Xh = window.Vue.openBlock, Kh = window.Vue.createBlock;
function Yh(e, t, n, o, s, a) {
  return Xh(), Kh(qh(n.tag), {
    class: Gh(a.classes)
  }, {
    default: Wh(() => [
      jh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const y = /* @__PURE__ */ B(Hh, [["render", Yh]]), Qh = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Jh = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Zh = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", La = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", ew = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, tw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", nw = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", zg = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Qr = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", ul = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", yn = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", ow = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", sw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", dl = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Rg = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", aw = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", iw = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", rw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Og = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Hg = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", lw = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", cw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", uw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", dw = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", gw = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Hn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, pw = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, gl = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, hw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, ml = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", ww = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", fw = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", _w = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Ja = window.Vue.computed, vw = window.Vue.watch, Sw = window.Vue.ref, yw = window.Vue.nextTick, Cw = {
  name: "MwDialog",
  components: {
    MwButton: $e,
    MwRow: P,
    MwCol: y,
    MwDivider: ts
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
    const n = Sw(null), o = Ja(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Ja(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    vw(
      () => e.value,
      (c) => {
        c ? (i(), yw(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Ja(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayStyles: s,
      mwIconClose: yn,
      root: n
    };
  }
}, oc = window.Vue.normalizeStyle, Za = window.Vue.createElementVNode, ei = window.Vue.renderSlot, ys = window.Vue.resolveComponent, eo = window.Vue.createVNode, ti = window.Vue.withCtx, sc = window.Vue.createCommentVNode, kw = window.Vue.withKeys, xw = window.Vue.normalizeClass, ac = window.Vue.openBlock, bw = window.Vue.createElementBlock, $w = window.Vue.Transition, Vw = window.Vue.createBlock, Dw = { class: "mw-ui-dialog__shell items-stretch" }, Aw = { class: "mw-ui-dialog__body" };
function Ew(e, t, n, o, s, a) {
  const i = ys("mw-col"), l = ys("mw-button"), c = ys("mw-row"), g = ys("mw-divider");
  return ac(), Vw($w, {
    name: `mw-ui-animation-${n.animation}`,
    style: oc(o.cssVars)
  }, {
    default: ti(() => [
      n.value ? (ac(), bw("div", {
        key: 0,
        ref: "root",
        class: xw(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = kw((r) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        Za("div", {
          class: "mw-ui-dialog__overlay",
          style: oc(o.overlayStyles),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close)
        }, null, 4),
        Za("div", Dw, [
          n.header ? ei(e.$slots, "header", { key: 0 }, () => [
            eo(c, { class: "mw-ui-dialog__header" }, {
              default: ti(() => [
                eo(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                eo(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: ti(() => [
                    eo(l, {
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
            eo(g)
          ]) : sc("", !0),
          Za("div", Aw, [
            ei(e.$slots, "default")
          ]),
          ei(e.$slots, "footer")
        ])
      ], 34)) : sc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const st = /* @__PURE__ */ B(Cw, [["render", Ew]]);
const Lw = {
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
      const t = Ce({}, e.$attrs);
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
}, ic = window.Vue.renderSlot, Tw = window.Vue.resolveComponent, Cs = window.Vue.openBlock, ni = window.Vue.createBlock, rc = window.Vue.createCommentVNode, Bw = window.Vue.resolveDynamicComponent, Pw = window.Vue.toDisplayString, Fw = window.Vue.mergeProps, Mw = window.Vue.withModifiers, Nw = window.Vue.createElementVNode, Uw = window.Vue.normalizeClass, Iw = window.Vue.createElementBlock, zw = { class: "mw-ui-input__content" };
function Rw(e, t, n, o, s, a) {
  const i = Tw("mw-icon");
  return Cs(), Iw("div", {
    class: Uw(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Nw("div", zw, [
      ic(e.$slots, "icon", {}, () => [
        n.icon ? (Cs(), ni(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : rc("", !0)
      ]),
      (Cs(), ni(Bw(n.type === "textarea" ? n.type : "input"), Fw({
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
        textContent: Pw(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      ic(e.$slots, "indicator", {}, () => [
        n.indicator ? (Cs(), ni(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Mw((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : rc("", !0)
      ])
    ])
  ], 2);
}
const pl = /* @__PURE__ */ B(Lw, [["render", Rw]]);
const Ow = {
  name: "MwMessage",
  components: { MwCol: y, MwRow: P, MwIcon: me, MwButton: $e },
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
    mwIconClose: yn,
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
      notice: gw,
      warning: gl,
      success: Hn,
      error: pw
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
}, oi = window.Vue.renderSlot, ks = window.Vue.resolveComponent, lc = window.Vue.createVNode, cc = window.Vue.withCtx, uc = window.Vue.openBlock, dc = window.Vue.createBlock, gc = window.Vue.createCommentVNode, Hw = window.Vue.normalizeClass;
function jw(e, t, n, o, s, a) {
  const i = ks("mw-icon"), l = ks("mw-col"), c = ks("mw-button"), g = ks("mw-row");
  return e.shown ? (uc(), dc(g, {
    key: 0,
    class: Hw([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: cc(() => [
      oi(e.$slots, "icon", {}, () => [
        lc(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      lc(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: cc(() => [
          oi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      oi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (uc(), dc(c, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : gc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : gc("", !0);
}
const qw = /* @__PURE__ */ B(Ow, [["render", jw]]);
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
const Gw = {}, Ww = window.Vue.createElementVNode, Xw = window.Vue.openBlock, Kw = window.Vue.createElementBlock, Yw = { class: "mw-ui-spinner" }, Qw = /* @__PURE__ */ Ww("div", { class: "mw-ui-spinner__bounce" }, null, -1), Jw = [
  Qw
];
function Zw(e, t) {
  return Xw(), Kw("div", Yw, Jw);
}
const ot = /* @__PURE__ */ B(Gw, [["render", Zw]]), Oe = {
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
const e0 = window.Vue.computed, t0 = {
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
      default: ml
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: Oe.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: Oe.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e0(() => {
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
}, mc = window.Vue.normalizeStyle, pc = window.Vue.openBlock, n0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const o0 = window.Vue.resolveComponent, s0 = window.Vue.createBlock;
function a0(e, t, n, o, s, a) {
  const i = o0("mw-ui-icon");
  return n.thumbnail ? (pc(), n0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: mc(o.style)
  }, null, 4)) : (pc(), s0(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: mc(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const hl = /* @__PURE__ */ B(t0, [["render", a0]]);
const i0 = {
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
}, r0 = window.Vue.vModelRadio, Da = window.Vue.createElementVNode, l0 = window.Vue.withDirectives, c0 = window.Vue.toDisplayString, u0 = window.Vue.resolveComponent, d0 = window.Vue.normalizeClass, g0 = window.Vue.withCtx, m0 = window.Vue.openBlock, p0 = window.Vue.createBlock, h0 = { class: "mw-ui-radio__controls" }, w0 = ["id", "disabled", "name", "value"], f0 = /* @__PURE__ */ Da("span", { class: "mw-ui-radio__controls__icon" }, null, -1), _0 = ["for", "textContent"];
function v0(e, t, n, o, s, a) {
  const i = u0("mw-row");
  return m0(), p0(i, {
    class: d0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: g0(() => [
      Da("div", h0, [
        l0(Da("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => a.inputModel = l),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, w0), [
          [r0, a.inputModel]
        ]),
        f0
      ]),
      Da("label", {
        for: n.id,
        class: "ps-2",
        textContent: c0(n.label)
      }, null, 8, _0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Aa = /* @__PURE__ */ B(i0, [["render", v0]]), hc = window.Vue.h, jg = {
  name: "MwRadioGroup",
  components: { MwRadio: Aa },
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
      (o) => hc(Aa, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), hc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const S0 = {
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
}, wc = window.Vue.normalizeClass, fc = window.Vue.normalizeStyle, y0 = window.Vue.createElementVNode, C0 = window.Vue.openBlock, k0 = window.Vue.createElementBlock, x0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function b0(e, t, n, o, s, a) {
  return C0(), k0("div", {
    class: wc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: fc(a.containerStyles)
  }, [
    y0("div", {
      class: wc(["mw-progress-bar__bar", a.barClass]),
      style: fc(a.barStyles)
    }, null, 6)
  ], 14, x0);
}
const qg = /* @__PURE__ */ B(S0, [["render", b0]]), $0 = (e, t, n, o) => (s) => {
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
}, V0 = (e, t, n, o) => ({ initiateDrag: $0(
  e,
  t,
  n,
  o
) }), D0 = window.Vue.ref, _c = window.Vue.computed, A0 = (e, t, n, o) => {
  const s = D0(0), a = _c(
    () => t.value > e.value
  ), i = _c(
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
const xs = window.Vue.ref, E0 = window.Vue.onMounted, vc = window.Vue.computed, L0 = window.Vue.nextTick, T0 = {
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
    const t = xs(!0), n = xs(null), o = vc(
      () => Math.min(e.minHeight, s.value)
    ), s = xs(1), { initiateDrag: a } = V0(
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
    } = A0(o, s, n, t), u = () => g(c.value + 1), d = xs(null), m = vc(() => ({
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
    return E0(() => k(this, null, function* () {
      var w;
      yield L0(), s.value = n.value.scrollHeight, (w = d.value) == null || w.addEventListener(
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
      mwIconCollapse: hw,
      mwIconExpand: Qr,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: u
    };
  }
}, B0 = window.Vue.renderSlot, P0 = window.Vue.normalizeClass, bs = window.Vue.createElementVNode, F0 = window.Vue.resolveComponent, M0 = window.Vue.createVNode, si = window.Vue.openBlock, N0 = window.Vue.createBlock, Sc = window.Vue.createCommentVNode, yc = window.Vue.createElementBlock, U0 = window.Vue.normalizeStyle, I0 = { class: "mw-ui-expandable-content__container" }, z0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, R0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function O0(e, t, n, o, s, a) {
  const i = F0("mw-button");
  return si(), yc("div", {
    class: "mw-ui-expandable-content",
    style: U0(o.cssVars)
  }, [
    bs("div", I0, [
      bs("div", {
        ref: "contentRef",
        class: P0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        B0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (si(), yc("div", z0, [
        M0(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (si(), N0(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Sc("", !0)
      ])) : Sc("", !0)
    ]),
    bs("div", R0, [
      bs("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const H0 = /* @__PURE__ */ B(T0, [["render", O0]]);
const $s = window.Vue.computed, j0 = {
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
      default: Oe.blue600
    },
    inactiveColor: {
      type: String,
      default: Oe.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = $s(() => e.size / 2 * 0.9), n = $s(() => Math.PI * (t.value * 2)), o = $s(
      () => (100 - e.percentage) / 100 * n.value
    ), s = $s(() => ({
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
}, Cc = window.Vue.createElementVNode, kc = window.Vue.normalizeStyle, q0 = window.Vue.openBlock, G0 = window.Vue.createElementBlock, W0 = ["width", "height", "viewport"], X0 = ["r", "cx", "cy", "stroke-dasharray"], K0 = ["r", "cx", "cy", "stroke-dasharray"];
function Y0(e, t, n, o, s, a) {
  return q0(), G0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: kc(o.cssVars)
  }, [
    Cc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, X0),
    Cc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: kc({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, K0)
  ], 12, W0);
}
const Gg = /* @__PURE__ */ B(j0, [["render", Y0]]), Q0 = window.Vue.ref, Bt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Pt = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Bt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Bt.tablet}px) and (max-width: ${Bt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Bt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Bt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Bt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Bt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Bt["desktop-wide"]}px)`
}, ai = {
  mobile: () => matchMedia(Pt.mobile).matches,
  tablet: () => matchMedia(Pt.tablet).matches,
  desktop: () => matchMedia(Pt.desktop).matches,
  desktopwide: () => matchMedia(Pt["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Pt["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Pt["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Pt["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Pt["desktop-and-down"]).matches
}, J0 = {
  install: (e) => {
    const t = () => {
      for (let o in ai)
        ai.hasOwnProperty(o) && (n.value[o] = ai[o]());
    }, n = Q0({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Fe(Ce({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, Z0 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Fe(Ce({}, e.config.globalProperties.$mwui || {}), {
      colors: Oe
    }), e.provide("colors", Oe);
  }
};
class Kn extends Error {
}
const ef = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Kn();
}), Wg = { assertUser: ef };
const tf = window.Vue.resolveDirective, to = window.Vue.createElementVNode, xc = window.Vue.withDirectives, nf = window.Vue.toDisplayString, of = window.Vue.unref, bc = window.Vue.withCtx, sf = window.Vue.openBlock, af = window.Vue.createBlock, rf = window.Vue.createCommentVNode, lf = { class: "pa-4 sx-login-dialog__header" }, cf = { class: "sx-login-dialog__body px-6 pb-4" }, uf = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, df = ["href"], gf = window.Vue.computed, mf = window.Vue.ref, pf = window.Vuex.useStore, hf = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = pf(), n = gf(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = mf(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const l = tf("i18n");
      return n.value ? (sf(), af(of(st), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: bc(() => [
          to("div", lf, [
            xc(to("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: bc(() => [
          xc(to("div", cf, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          to("div", uf, [
            to("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, nf(a.$i18n("cx-sx-login-dialog-button-label")), 9, df)
          ])
        ]),
        _: 1
      })) : rf("", !0);
    };
  }
}, j = new mw.cx.SiteMapper(), wf = mw.util.getUrl, ff = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class Ta {
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
const ii = "original", ri = "empty", _f = {
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
      ii,
      ri
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return _f[t] || t;
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
    return ii;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return ri;
  }
  static isUserMTProvider(t) {
    return [ii, ri].includes(
      t
    );
  }
}
class Yt {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Fe(Ce({}, a), {
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
const $c = (e) => {
  var n;
  const t = Ea(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Ea = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, Sn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Xg = (e) => {
  const t = Ea(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = vf(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, vf = (e) => {
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
}, Kg = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Yg = (e) => {
  const t = Kg(e);
  return t == null ? void 0 : t.targetExists;
};
class li {
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
      (a) => Sn(a)
    );
    s && Yg(s) && (this.blockTemplateAdaptationInfo[t] = Kg(s));
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
      (t) => Sn(t)
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
    const t = Ea(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? $c(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => Sn(o));
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
    return n && $c(n) || "";
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
    const o = Ea(n);
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
      (a) => Sn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new li({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new li({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new li({
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
        (s) => Sn(s)
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
const Sf = [
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
], yf = (e, t, n) => {
  let o, s, a, i, l;
  return !e || !t ? 0 : e === t ? 1 : (s = i = Vc(e, n), a = l = Vc(t, n), l.length > i.length && (s = l, a = i), o = s.filter(function(c) {
    return a.indexOf(c) >= 0;
  }), o.length / s.length);
}, Vc = function(e, t) {
  return e ? Sf.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Cf = 95, kf = 85, xf = [
  { status: "failure", value: 100 - Cf },
  { status: "warning", value: 100 - kf },
  { status: "success", value: 100 }
], Qg = (e, t, n) => {
  const o = Dc(e).textContent, s = Dc(t).textContent, a = 100 - 100 * yf(s, o, n);
  return Math.ceil(a);
}, bf = (e) => xf.find((t) => e <= t.value).status, $f = (e, t) => Qg(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Dc = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Jt = { calculateScore: Qg, getScoreStatus: bf, getMTScoreForPageSection: $f }, Vs = "__LEAD_SECTION__";
class Jr {
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
    return Vs;
  }
  static isSectionLead(t) {
    return !t || t === Vs;
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
    return n instanceof Te ? n.transclusionNode.outerHTML : n instanceof Yt ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Te ? t.blockTemplateSelected = !1 : t instanceof Yt && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Te ? n.blockTemplateSelected = !0 : n instanceof Yt && (n.selected = !0);
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
    if (o instanceof Yt)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Te ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Yt ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Te ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Yt && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Jt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Vs : this.originalTitle;
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
    return this.isLeadSection ? Vs : this.title;
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
class wl extends Ta {
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
    return Jr.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Jr.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const ns = window.Vue.ref, os = ns(null), ss = ns(null), Ba = ns(null), Yn = ns(null), Jg = ns(null), Vf = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), Ba.value = e == null ? void 0 : e.sourceTitle, os.value = e == null ? void 0 : e.sourceLanguage, ss.value = e == null ? void 0 : e.targetLanguage, e instanceof wl && (t.set("draft", !0), Jg.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), Yn.value = e.sourceSectionTitle)), t.delete("title"), as(Object.fromEntries(t));
}, Df = (e) => {
  Yn.value = e, Zg("section", e);
}, as = (e) => {
  history.replaceState(
    {},
    document.title,
    wf("Special:ContentTranslation", e)
  );
}, Af = () => {
  const e = new URLSearchParams(location.search);
  Ba.value = e.get("page"), os.value = e.get("from"), ss.value = e.get("to"), Yn.value = e.get("section");
}, Ef = () => {
  const e = new URLSearchParams(location.search);
  Yn.value = null, e.delete("section"), e.delete("title"), as(Object.fromEntries(e));
}, Zg = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), as(Object.fromEntries(n));
}, Lf = (e) => new URLSearchParams(location.search).get(e), Tf = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), os.value = e, ss.value = t, n.delete("title"), as(Object.fromEntries(n));
}, Bf = () => {
  os.value = null, ss.value = null, Ba.value = null, Yn.value = null, as(null);
}, G = () => ({
  setLanguageURLParams: Tf,
  setSectionURLParam: Df,
  setTranslationURLParams: Vf,
  initializeURLState: Af,
  clearURLParameters: Bf,
  clearSectionURLParameter: Ef,
  setUrlParam: Zg,
  getUrlParam: Lf,
  pageURLParameter: Ba,
  sourceLanguageURLParameter: os,
  targetLanguageURLParameter: ss,
  sectionURLParameter: Yn,
  draftURLParameter: Jg
});
const Pf = window.Vue.resolveDynamicComponent, Ac = window.Vue.openBlock, Ec = window.Vue.createBlock, Ff = window.Vue.Transition, no = window.Vue.withCtx, oo = window.Vue.createVNode, Mf = window.Vue.resolveComponent, ci = window.Vue.unref, Nf = window.Vuex.useStore, Uf = window.Vue.computed, If = window.Vue.onMounted, zf = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = G();
    t();
    const n = Nf(), o = Uf(
      () => n.state.application.autoSavePending
    );
    return If(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && Wg.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof Kn && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const i = Mf("router-view");
      return Ac(), Ec(ci(Bh), { id: "contenttranslation" }, {
        default: no(() => [
          oo(ci(P), { class: "cx-container" }, {
            default: no(() => [
              oo(ci(y), { cols: "12" }, {
                default: no(() => [
                  oo(i, null, {
                    default: no(({ Component: l, route: c }) => [
                      oo(Ff, {
                        name: c.meta.transitionName
                      }, {
                        default: no(() => [
                          (Ac(), Ec(Pf(l)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      oo(hf)
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
}, Rf = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, Of = {
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
class em {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class jn {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new em(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Lc = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Fe(Ce({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Hf {
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
    const t = Lc((s = this.user) == null ? void 0 : s.content), n = Lc((a = this.mt) == null ? void 0 : a.content);
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
class fl extends Ta {
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
const Pa = mw.user.isAnon() ? void 0 : "user", tm = (e) => {
  if (e === "assertuserfailed")
    throw new Kn();
};
function nm(e, t = null) {
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
      let i;
      if (e === "draft" ? i = a.map(
        (c) => new wl(Fe(Ce({}, c), { status: e }))
      ) : i = a.map(
        (c) => new fl(Fe(Ce({}, c), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const c = yield nm(
          e,
          s.continue.offset
        );
        i = i.concat(c);
      }
      return i;
    }));
  });
}
function jf(e) {
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
      (a) => new Hf(a)
    );
  });
}
function qf(e, t, n, o, s) {
  return k(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Y.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = j.getCXServerUrl(a);
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
const Gf = (e, t, n) => {
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
}, Wf = ({
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
    assert: Pa,
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
          publishFeedbackMessage: new jn({
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
    tm(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new jn({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Xf = ({
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
    assert: Pa,
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
    tm(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new jn({ text: h, status: "error" });
  });
}, Kf = (e) => {
  const t = {
    assert: Pa,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Yf = () => {
  const e = {
    assert: Pa,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new fl(n.cxcheckunreviewed.translation)
  );
}, Qf = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Jf = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Zf = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), je = {
  fetchTranslations: nm,
  fetchTranslationUnits: jf,
  fetchSegmentTranslation: qf,
  parseTemplateWikitext: Gf,
  publishTranslation: Wf,
  saveTranslation: Xf,
  deleteTranslation: Qf,
  fetchTranslatorStats: Zf,
  deleteCXTranslation: Jf,
  splitTranslation: Kf,
  checkUnreviewedTranslations: Yf
};
function e_(t) {
  return k(this, arguments, function* ({ commit: e }) {
    const n = yield je.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const t_ = {
  fetchTranslatorStats: e_
}, n_ = {
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
}, o_ = {
  namespaced: !0,
  state: Rf,
  getters: Of,
  actions: t_,
  mutations: n_
}, om = [
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
], s_ = [
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
], a_ = [
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
], i_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], r_ = [
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
], l_ = {
  en: om,
  es: s_,
  bn: a_,
  fr: i_,
  de: r_
}, c_ = {
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
  appendixSectionTitles: l_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, u_ = {
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
class _l {
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
class qn {
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
class Gn {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const d_ = om;
function g_(e, t, n, o = 24) {
  return k(this, null, function* () {
    var r;
    let a = `/data/recommendation/article/creation/translation/${j.getWikiDomainCode(e)}`;
    n && (a += `/${n}`);
    const i = j.getRestbaseUrl(t, a), l = new URLSearchParams({ count: `${o}` }), c = yield fetch(`${i}?${l}`);
    if (!c.ok)
      throw new Error("Failed to load data from server");
    return (((r = yield c.json()) == null ? void 0 : r.items) || []).map(
      (u) => new _l({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.sitelink_count)
      })
    );
  });
}
function m_(e, t, n) {
  return k(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = j.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new qn(a) : null;
  });
}
function p_(e, t) {
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
function h_(e) {
  const t = d_.map((o) => encodeURIComponent(o)).join("|"), n = j.getCXServerUrl(
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
const w_ = (e, t, n) => {
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
}, f_ = (e) => {
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
}, __ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((l) => new Gn(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, nt = {
  fetchFavorites: __,
  fetchPageSuggestions: g_,
  fetchSectionSuggestions: m_,
  fetchSuggestionSeeds: p_,
  fetchAppendixTargetSectionTitles: h_,
  markFavorite: w_,
  unmarkFavorite: f_
};
function v_(o, s) {
  return k(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield nt.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const S_ = {
  fetchAppendixSectionTitles: v_
}, y_ = {
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
}, C_ = {
  namespaced: !0,
  state: c_,
  getters: u_,
  actions: S_,
  mutations: y_
}, k_ = {
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
}, x_ = {
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
class Qn {
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
    pageprops: l,
    pageviews: c,
    thumbnail: g,
    title: r,
    _alias: u,
    content: d = null,
    sections: m = []
  } = {}) {
    this.language = i, this.title = r, this.pageId = a, this.description = t, this.image = s, this.pageprops = l, this.pageviews = c, this.thumbnail = g, this.langLinksCount = n, this.revision = o, this.alias = u, this.wikidataId = l == null ? void 0 : l.wikibase_item, this.content = d, this.sections = m;
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
class b_ {
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
function $_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const V_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), $_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, D_ = (e, t) => {
  let n, o;
  return t ? (n = V_(e), o = n.$element.find(
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
}, A_ = (e, t) => {
  const n = Array.from(
    D_(e, t)
  );
  return E_(n).map(
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
          sentences: L_(u),
          node: u
        })
      ), r = !l;
      return new Jr({ id: c, title: l, subSections: g, isLeadSection: r });
    }
  );
}, E_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, L_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Yt({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), sm = {
  convertSegmentedContentToPageSections: A_
}, vl = 120, T_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: vl,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return j.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (r, u) => Fe(Ce({}, r), { [u.to]: u.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, u) => Fe(Ce({}, r), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((r) => {
      const u = g[r.title] || l[r.title] || null;
      return new Qn(Fe(Ce({}, r), { _alias: u }));
    });
  });
}, B_ = (e, t) => {
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
  return j.getApi(e).get(n).then((s) => k(void 0, null, function* () {
    var c, g;
    const a = s.query.pages;
    if (!a || !a.length || (c = a[0]) != null && c.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return l ? Object.freeze(new b_(l, i)) : null;
  }));
}, P_ = (e, t, n, o = null) => am(
  e,
  t,
  n,
  o
).then(
  (s) => new Qn({
    sections: sm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), am = (e, t, n, o = null) => {
  const s = j.getWikiDomainCode(e), a = j.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, l += "/$revision");
  const c = j.getCXServerUrl(
    l,
    i
  );
  return fetch(c).then((g) => g.json()).then((g) => g.segmentedContent);
}, F_ = (e) => k(void 0, null, function* () {
  const t = ff();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: vl,
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
  return yield j.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Qn(s))).catch((o) => []);
}), M_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: vl,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return j.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, i) => a.index - i.index).map(
      (a) => new Qn(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, is = {
  fetchPages: T_,
  fetchLanguageTitles: B_,
  fetchPageContent: P_,
  fetchSegmentedContent: am,
  fetchNearbyPages: F_,
  searchPagesByTitlePrefix: M_
};
function N_() {
  return j.getLanguagePairs().then((e) => e.sourceLanguages);
}
function U_(e, t) {
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
function I_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function z_(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = j.getWikiDomainCode(e), i = j.getWikiDomainCode(t), l = {
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
const Fa = {
  fetchSupportedLanguageCodes: N_,
  fetchSupportedMTProviders: U_,
  fetchCXServerToken: I_,
  addWikibaseLink: z_
};
function R_({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const l = o.slice(i, i + s), c = is.fetchPages(n, l).then(
      (g) => g.forEach((r) => t("addPage", r))
    );
    a.push(c);
  }
  return Promise.all(a);
}
function O_(n) {
  return k(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Fa.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function H_(o) {
  return k(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield is.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const j_ = {
  fetchNearbyPages: H_,
  fetchPageMetadata: R_,
  fetchSupportedLanguageCodes: O_
}, q_ = {
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
}, G_ = {
  namespaced: !0,
  state: k_,
  getters: x_,
  actions: j_,
  mutations: q_
}, W_ = {
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
}, X_ = {
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
}, K_ = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => Sn(a)
  );
  return s && Yg(s) ? je.parseTemplateWikitext(
    Xg(s),
    n,
    t
  ) : Promise.resolve(null);
}, im = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => Sn(a)
  );
  return s ? je.parseTemplateWikitext(
    Xg(s),
    n,
    t
  ) : Promise.resolve(null);
}, Y_ = (o) => k(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield Fa.fetchCXServerToken().then(
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
}), Q_ = { getCXServerToken: Y_ }, J_ = {
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
}, Z_ = {
  namespaced: !0,
  state: W_,
  getters: X_,
  actions: Q_,
  mutations: J_
}, e1 = window.Vuex.createStore, t1 = e1({
  modules: { translator: o_, suggestions: C_, mediawiki: G_, application: Z_ }
});
function n1() {
  return rm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function rm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const o1 = typeof Proxy == "function", s1 = "devtools-plugin:setup", a1 = "plugin:settings:set";
let kn, Zr;
function i1() {
  var e;
  return kn !== void 0 || (typeof window != "undefined" && window.performance ? (kn = !0, Zr = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (kn = !0, Zr = global.perf_hooks.performance) : kn = !1), kn;
}
function r1() {
  return i1() ? Zr.now() : Date.now();
}
class l1 {
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
        return r1();
      }
    }, n && n.on(a1, (i, l) => {
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
    return k(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function c1(e, t) {
  const n = e, o = rm(), s = n1(), a = o1 && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(s1, e, t);
  else {
    const i = a ? new l1(n, s) : null;
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
const lm = window.Vue.getCurrentInstance, Wn = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const ut = window.Vue.computed, Xo = window.Vue.unref, u1 = window.Vue.watchEffect, cm = window.Vue.defineComponent, d1 = window.Vue.reactive, um = window.Vue.h, ui = window.Vue.provide, g1 = window.Vue.ref, dm = window.Vue.watch, m1 = window.Vue.shallowRef, p1 = window.Vue.shallowReactive, h1 = window.Vue.nextTick, Et = typeof window != "undefined";
function w1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const q = Object.assign;
function di(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Be(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ko = () => {
}, Be = Array.isArray;
function R(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const f1 = /\/$/, _1 = (e) => e.replace(f1, "");
function gi(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = y1(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function v1(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Tc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Bc(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Zt(t.matched[o], n.matched[s]) && gm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Zt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function gm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!S1(e[n], t[n]))
      return !1;
  return !0;
}
function S1(e, t) {
  return Be(e) ? Pc(e, t) : Be(t) ? Pc(t, e) : e === t;
}
function Pc(e, t) {
  return Be(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function y1(e, t) {
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
var Qo;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Qo || (Qo = {}));
var Yo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Yo || (Yo = {}));
function C1(e) {
  if (!e)
    if (Et) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), _1(e);
}
const k1 = /^[^#]+#/;
function x1(e, t) {
  return e.replace(k1, "#") + t;
}
function b1(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Ma = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function $1(e) {
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
    t = b1(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Fc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const el = /* @__PURE__ */ new Map();
function V1(e, t) {
  el.set(e, t);
}
function D1(e) {
  const t = el.get(e);
  return el.delete(e), t;
}
let A1 = () => location.protocol + "//" + location.host;
function mm(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), Tc(c, "");
  }
  return Tc(n, e) + o + s;
}
function E1(e, t, n, o) {
  let s = [], a = [], i = null;
  const l = ({ state: d }) => {
    const m = mm(e, location), p = n.value, h = t.value;
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
        type: Qo.pop,
        direction: w ? w > 0 ? Yo.forward : Yo.back : Yo.unknown
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
    d.state && d.replaceState(q({}, d.state, { scroll: Ma() }), "");
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
function Mc(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Ma() : null
  };
}
function L1(e) {
  const { history: t, location: n } = window, o = {
    value: mm(e, n)
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
    const u = e.indexOf("#"), d = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + c : A1() + e + c;
    try {
      t[r ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? R("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](d);
    }
  }
  function i(c, g) {
    const r = q({}, t.state, Mc(
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
        scroll: Ma()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && R(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const u = q({}, Mc(o.value, c, null), { position: r.position + 1 }, g);
    a(c, u, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: i
  };
}
function T1(e) {
  e = C1(e);
  const t = L1(e), n = E1(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = q({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: x1.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function B1(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && R(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), T1(e);
}
function P1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function pm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ft = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, tl = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Nc;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Nc || (Nc = {}));
const F1 = {
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
    return `Redirected from "${e.fullPath}" to "${N1(t)}" via a navigation guard.`;
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
function Xn(e, t) {
  return {}.NODE_ENV !== "production" ? q(new Error(F1[e](t)), {
    type: e,
    [tl]: !0
  }, t) : q(new Error(), {
    type: e,
    [tl]: !0
  }, t);
}
function ht(e, t) {
  return e instanceof Error && tl in e && (t == null || !!(e.type & t));
}
const M1 = ["params", "query", "hash"];
function N1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of M1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Uc = "[^/]+?", U1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, I1 = /[.+*?^${}()[\]/\\]/g;
function z1(e, t) {
  const n = q({}, U1, t), o = [];
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
        u || (s += "/"), s += d.value.replace(I1, "\\$&"), m += 40;
      else if (d.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: f } = d;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const _ = f || Uc;
        if (_ !== Uc) {
          m += 10;
          try {
            new RegExp(`(${_})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + b.message);
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
          if (Be(f) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = Be(f) ? f.join("/") : f;
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
function R1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function O1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = R1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Ic(o))
      return 1;
    if (Ic(s))
      return -1;
  }
  return s.length - o.length;
}
function Ic(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const H1 = {
  type: 0,
  value: ""
}, j1 = /[a-zA-Z0-9_]/;
function q1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[H1]];
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
        c === "(" ? n = 2 : j1.test(c) ? d() : (u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
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
function G1(e, t, n) {
  const o = z1(q1(e.path), n);
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
function W1(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Oc({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, u, d) {
    const m = !d, p = X1(r);
    ({}).NODE_ENV !== "production" && J1(p, u), p.aliasOf = d && d.record;
    const h = Oc(t, r), w = [
      p
    ];
    if ("alias" in r) {
      const S = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const b of S)
        w.push(q({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : p.components,
          path: b,
          // we might be the child of an alias
          aliasOf: d ? d.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, _;
    for (const S of w) {
      const { path: b } = S;
      if (u && b[0] !== "/") {
        const D = u.record.path, E = D[D.length - 1] === "/" ? "" : "/";
        S.path = u.record.path + (b && E + b);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = G1(S, u, h), {}.NODE_ENV !== "production" && u && b[0] === "/" && Z1(f, u), d ? (d.alias.push(f), {}.NODE_ENV !== "production" && Q1(d, f)) : (_ = _ || f, _ !== f && _.alias.push(f), m && r.name && !Rc(f) && i(r.name)), p.children) {
        const D = p.children;
        for (let E = 0; E < D.length; E++)
          a(D[E], f, d && d.children[E]);
      }
      d = d || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && c(f);
    }
    return _ ? () => {
      i(_);
    } : Ko;
  }
  function i(r) {
    if (pm(r)) {
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
    for (; u < n.length && O1(r, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[u].record.path || !hm(r, n[u])); )
      u++;
    n.splice(u, 0, r), r.record.name && !Rc(r) && o.set(r.record.name, r);
  }
  function g(r, u) {
    let d, m = {}, p, h;
    if ("name" in r && r.name) {
      if (d = o.get(r.name), !d)
        throw Xn(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(r.params || {}).filter((S) => !d.keys.find((b) => b.name === S));
        _.length && R(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = d.record.name, m = q(
        // paramsFromLocation is a new object
        zc(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && zc(r.params, d.keys.map((_) => _.name))
      ), p = d.stringify(m);
    } else if ("path" in r)
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && R(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((_) => _.re.test(p)), d && (m = d.parse(p), h = d.record.name);
    else {
      if (d = u.name ? o.get(u.name) : n.find((_) => _.re.test(u.path)), !d)
        throw Xn(1, {
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
      meta: Y1(w)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: g, removeRoute: i, getRoutes: l, getRecordMatcher: s };
}
function zc(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function X1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: K1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function K1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Rc(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Y1(e) {
  return e.reduce((t, n) => q(t, n.meta), {});
}
function Oc(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function nl(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Q1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(nl.bind(null, n)))
      return R(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(nl.bind(null, n)))
      return R(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function J1(e, t) {
  t && t.record.name && !e.name && !e.path && R(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Z1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(nl.bind(null, n)))
      return R(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function hm(e, t) {
  return t.children.some((n) => n === e || hm(e, n));
}
const wm = /#/g, ev = /&/g, tv = /\//g, nv = /=/g, ov = /\?/g, fm = /\+/g, sv = /%5B/g, av = /%5D/g, _m = /%5E/g, iv = /%60/g, vm = /%7B/g, rv = /%7C/g, Sm = /%7D/g, lv = /%20/g;
function Sl(e) {
  return encodeURI("" + e).replace(rv, "|").replace(sv, "[").replace(av, "]");
}
function cv(e) {
  return Sl(e).replace(vm, "{").replace(Sm, "}").replace(_m, "^");
}
function ol(e) {
  return Sl(e).replace(fm, "%2B").replace(lv, "+").replace(wm, "%23").replace(ev, "%26").replace(iv, "`").replace(vm, "{").replace(Sm, "}").replace(_m, "^");
}
function uv(e) {
  return ol(e).replace(nv, "%3D");
}
function dv(e) {
  return Sl(e).replace(wm, "%23").replace(ov, "%3F");
}
function gv(e) {
  return e == null ? "" : dv(e).replace(tv, "%2F");
}
function Jo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && R(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function mv(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(fm, " "), i = a.indexOf("="), l = Jo(i < 0 ? a : a.slice(0, i)), c = i < 0 ? null : Jo(a.slice(i + 1));
    if (l in t) {
      let g = t[l];
      Be(g) || (g = t[l] = [g]), g.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Hc(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = uv(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Be(o) ? o.map((a) => a && ol(a)) : [o && ol(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function pv(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Be(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const hv = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), jc = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Na = Symbol({}.NODE_ENV !== "production" ? "router" : ""), ym = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), sl = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function so() {
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
function Qt(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, l) => {
    const c = (u) => {
      u === !1 ? l(Xn(4, {
        from: n,
        to: t
      })) : u instanceof Error ? l(u) : P1(u) ? l(Xn(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? wv(c, t, n) : c);
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
function wv(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && R(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function mi(e, t, n, o) {
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
        if (fv(l)) {
          const g = (l.__vccOpts || l)[t];
          g && s.push(Qt(g, n, o, a, i));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (R(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = w1(g) ? g.default : g;
            a.components[i] = r;
            const d = (r.__vccOpts || r)[t];
            return d && Qt(d, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function fv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function qc(e) {
  const t = Wn(Na), n = Wn(ym), o = ut(() => t.resolve(Xo(e.to))), s = ut(() => {
    const { matched: c } = o.value, { length: g } = c, r = c[g - 1], u = n.matched;
    if (!r || !u.length)
      return -1;
    const d = u.findIndex(Zt.bind(null, r));
    if (d > -1)
      return d;
    const m = Gc(c[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Gc(r) === m && // avoid comparing the child with its parent
      u[u.length - 1].path !== m ? u.findIndex(Zt.bind(null, c[g - 2])) : d
    );
  }), a = ut(() => s.value > -1 && yv(n.params, o.value.params)), i = ut(() => s.value > -1 && s.value === n.matched.length - 1 && gm(n.params, o.value.params));
  function l(c = {}) {
    return Sv(c) ? t[Xo(e.replace) ? "replace" : "push"](
      Xo(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ko) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Et) {
    const c = lm();
    if (c) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(g), u1(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: ut(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: l
  };
}
const _v = /* @__PURE__ */ cm({
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
  useLink: qc,
  setup(e, { slots: t }) {
    const n = d1(qc(e)), { options: o } = Wn(Na), s = ut(() => ({
      [Wc(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Wc(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : um("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), vv = _v;
function Sv(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function yv(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Be(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function Gc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Wc = (e, t, n) => e != null ? e : t != null ? t : n, Cv = /* @__PURE__ */ cm({
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
    ({}).NODE_ENV !== "production" && xv();
    const o = Wn(sl), s = ut(() => e.route || o.value), a = Wn(jc, 0), i = ut(() => {
      let g = Xo(a);
      const { matched: r } = s.value;
      let u;
      for (; (u = r[g]) && !u.components; )
        g++;
      return g;
    }), l = ut(() => s.value.matched[i.value]);
    ui(jc, ut(() => i.value + 1)), ui(hv, l), ui(sl, s);
    const c = g1();
    return dm(() => [c.value, l.value, e.name], ([g, r, u], [d, m, p]) => {
      r && (r.instances[u] = g, m && m !== r && g && g === d && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !Zt(r, m) || !d) && (r.enterCallbacks[u] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, r = e.name, u = l.value, d = u && u.components[r];
      if (!d)
        return Xc(n.default, { Component: d, route: g });
      const m = u.props[r], p = m ? m === !0 ? g.params : typeof m == "function" ? m(g) : m : null, w = um(d, q({}, p, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (u.instances[r] = null);
        },
        ref: c
      }));
      if ({}.NODE_ENV !== "production" && Et && w.ref) {
        const f = {
          depth: i.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (Be(w.ref) ? w.ref.map((S) => S.i) : [w.ref.i]).forEach((S) => {
          S.__vrv_devtools = f;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Xc(n.default, { Component: w, route: g }) || w
      );
    };
  }
});
function Xc(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const kv = Cv;
function xv() {
  const e = lm(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function ao(e, t) {
  const n = q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Bv(o, ["instances", "children", "aliasOf"]))
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
function Ds(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let bv = 0;
function $v(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = bv++;
  c1({
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
        value: ao(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const d = u.__vrv_devtools;
        r.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Cm
        });
      }
      Be(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((d) => {
        let m = bm, p = "";
        d.isExactActive ? (m = xm, p = "This is exactly active") : d.isActive && (m = km, p = "This link is active"), r.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), dm(t.currentRoute, () => {
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
        guard: Ds("beforeEach"),
        from: ao(u, "Current Location during this navigation"),
        to: ao(r, "Target location")
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
        guard: Ds("afterEach")
      };
      d ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, m.status = Ds("❌")) : m.status = Ds("✅"), m.from = ao(u, "Current Location during this navigation"), m.to = ao(r, "Target location"), s.addTimelineEvent({
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
      u.forEach(Dm), r.filter && (u = u.filter((d) => (
        // save matches state based on the payload
        al(d, r.filter.toLowerCase())
      ))), u.forEach((d) => Vm(d, t.currentRoute.value)), r.rootNodes = u.map($m);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === l && c();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === l) {
        const d = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        d && (r.state = {
          options: Dv(d)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function Vv(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Dv(e) {
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
        display: e.keys.map((o) => `${o.name}${Vv(o)}`).join(" "),
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
const Cm = 15485081, km = 2450411, xm = 8702998, Av = 2282478, bm = 16486972, Ev = 6710886;
function $m(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Av
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: bm
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Cm
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: xm
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: km
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Ev
  });
  let o = n.__vd_id;
  return o == null && (o = String(Lv++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map($m)
  };
}
let Lv = 0;
const Tv = /^\/(.*)\/([a-z]*)$/;
function Vm(e, t) {
  const n = t.matched.length && Zt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Zt(o, e.record))), e.children.forEach((o) => Vm(o, t));
}
function Dm(e) {
  e.__vd_match = !1, e.children.forEach(Dm);
}
function al(e, t) {
  const n = String(e.re).match(Tv);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => al(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Jo(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => al(i, t));
}
function Bv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Pv(e) {
  const t = W1(e.routes, e), n = e.parseQuery || mv, o = e.stringifyQuery || Hc, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = so(), i = so(), l = so(), c = m1(Ft);
  let g = Ft;
  Et && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = di.bind(null, (v) => "" + v), u = di.bind(null, gv), d = (
    // @ts-expect-error: intentionally avoid the type check
    di.bind(null, Jo)
  );
  function m(v, V) {
    let x, T;
    return pm(v) ? (x = t.getRecordMatcher(v), T = V) : T = v, t.addRoute(T, x);
  }
  function p(v) {
    const V = t.getRecordMatcher(v);
    V ? t.removeRoute(V) : {}.NODE_ENV !== "production" && R(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function w(v) {
    return !!t.getRecordMatcher(v);
  }
  function f(v, V) {
    if (V = q({}, V || c.value), typeof v == "string") {
      const N = gi(n, v, V.path), Q = t.resolve({ path: N.path }, V), Ke = s.createHref(N.fullPath);
      return {}.NODE_ENV !== "production" && (Ke.startsWith("//") ? R(`Location "${v}" resolved to "${Ke}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || R(`No match found for location with path "${v}"`)), q(N, Q, {
        params: d(Q.params),
        hash: Jo(N.hash),
        redirectedFrom: void 0,
        href: Ke
      });
    }
    let x;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && R(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), x = q({}, v, {
        path: gi(n, v.path, V.path).path
      });
    else {
      const N = q({}, v.params);
      for (const Q in N)
        N[Q] == null && delete N[Q];
      x = q({}, v, {
        params: u(N)
      }), V.params = u(V.params);
    }
    const T = t.resolve(x, V), H = v.hash || "";
    ({}).NODE_ENV !== "production" && H && !H.startsWith("#") && R(`A \`hash\` should always start with the character "#". Replace "${H}" with "#${H}".`), T.params = r(d(T.params));
    const te = v1(o, q({}, v, {
      hash: cv(H),
      path: T.path
    })), z = s.createHref(te);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? R(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : T.matched.length || R(`No match found for location with path "${"path" in v ? v.path : v}"`)), q({
      fullPath: te,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: H,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Hc ? pv(v.query) : v.query || {}
      )
    }, T, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function _(v) {
    return typeof v == "string" ? gi(n, v, c.value.path) : q({}, v);
  }
  function S(v, V) {
    if (g !== v)
      return Xn(8, {
        from: V,
        to: v
      });
  }
  function b(v) {
    return F(v);
  }
  function D(v) {
    return b(q(_(v), { replace: !0 }));
  }
  function E(v) {
    const V = v.matched[v.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: x } = V;
      let T = typeof x == "function" ? x(v) : x;
      if (typeof T == "string" && (T = T.includes("?") || T.includes("#") ? T = _(T) : (
        // force empty params
        { path: T }
      ), T.params = {}), {}.NODE_ENV !== "production" && !("path" in T) && !("name" in T))
        throw R(`Invalid redirect found:
${JSON.stringify(T, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return q({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in T ? {} : v.params
      }, T);
    }
  }
  function F(v, V) {
    const x = g = f(v), T = c.value, H = v.state, te = v.force, z = v.replace === !0, N = E(x);
    if (N)
      return F(
        q(_(N), {
          state: typeof N == "object" ? q({}, H, N.state) : H,
          force: te,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        V || x
      );
    const Q = x;
    Q.redirectedFrom = V;
    let Ke;
    return !te && Bc(o, T, x) && (Ke = Xn(16, { to: Q, from: T }), Xe(
      T,
      T,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ke ? Promise.resolve(Ke) : se(Q, T)).catch((pe) => ht(pe) ? (
      // navigation redirects still mark the router as ready
      ht(
        pe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? pe : nn(pe)
    ) : (
      // reject any unknown error
      We(pe, Q, T)
    )).then((pe) => {
      if (pe) {
        if (ht(
          pe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Bc(o, f(pe.to), Q) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (R(`Detected a possibly infinite redirection in a navigation guard when going from "${T.fullPath}" to "${Q.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : F(
            // keep options
            q({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, _(pe.to), {
              state: typeof pe.to == "object" ? q({}, H, pe.to.state) : H,
              force: te
            }),
            // preserve the original redirectedFrom if any
            V || Q
          );
      } else
        pe = I(Q, T, !0, z, H);
      return W(Q, T, pe), pe;
    });
  }
  function A(v, V) {
    const x = S(v, V);
    return x ? Promise.reject(x) : Promise.resolve();
  }
  function L(v) {
    const V = ue.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(v) : v();
  }
  function se(v, V) {
    let x;
    const [T, H, te] = Fv(v, V);
    x = mi(T.reverse(), "beforeRouteLeave", v, V);
    for (const N of T)
      N.leaveGuards.forEach((Q) => {
        x.push(Qt(Q, v, V));
      });
    const z = A.bind(null, v, V);
    return x.push(z), ie(x).then(() => {
      x = [];
      for (const N of a.list())
        x.push(Qt(N, v, V));
      return x.push(z), ie(x);
    }).then(() => {
      x = mi(H, "beforeRouteUpdate", v, V);
      for (const N of H)
        N.updateGuards.forEach((Q) => {
          x.push(Qt(Q, v, V));
        });
      return x.push(z), ie(x);
    }).then(() => {
      x = [];
      for (const N of te)
        if (N.beforeEnter)
          if (Be(N.beforeEnter))
            for (const Q of N.beforeEnter)
              x.push(Qt(Q, v, V));
          else
            x.push(Qt(N.beforeEnter, v, V));
      return x.push(z), ie(x);
    }).then(() => (v.matched.forEach((N) => N.enterCallbacks = {}), x = mi(te, "beforeRouteEnter", v, V), x.push(z), ie(x))).then(() => {
      x = [];
      for (const N of i.list())
        x.push(Qt(N, v, V));
      return x.push(z), ie(x);
    }).catch((N) => ht(
      N,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? N : Promise.reject(N));
  }
  function W(v, V, x) {
    l.list().forEach((T) => L(() => T(v, V, x)));
  }
  function I(v, V, x, T, H) {
    const te = S(v, V);
    if (te)
      return te;
    const z = V === Ft, N = Et ? history.state : {};
    x && (T || z ? s.replace(v.fullPath, q({
      scroll: z && N && N.scroll
    }, H)) : s.push(v.fullPath, H)), c.value = v, Xe(v, V, x, z), nn();
  }
  let K;
  function ce() {
    K || (K = s.listen((v, V, x) => {
      if (!on.listening)
        return;
      const T = f(v), H = E(T);
      if (H) {
        F(q(H, { replace: !0 }), T).catch(Ko);
        return;
      }
      g = T;
      const te = c.value;
      Et && V1(Fc(te.fullPath, x.delta), Ma()), se(T, te).catch((z) => ht(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : ht(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (F(
        z.to,
        T
        // avoid an uncaught rejection, let push call triggerError
      ).then((N) => {
        ht(
          N,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !x.delta && x.type === Qo.pop && s.go(-1, !1);
      }).catch(Ko), Promise.reject()) : (x.delta && s.go(-x.delta, !1), We(z, T, te))).then((z) => {
        z = z || I(
          // after navigation, all matched components are resolved
          T,
          te,
          !1
        ), z && (x.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !ht(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-x.delta, !1) : x.type === Qo.pop && ht(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), W(T, te, z);
      }).catch(Ko);
    }));
  }
  let Ge = so(), Cn = so(), Tt;
  function We(v, V, x) {
    nn(v);
    const T = Cn.list();
    return T.length ? T.forEach((H) => H(v, V, x)) : ({}.NODE_ENV !== "production" && R("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function Zn() {
    return Tt && c.value !== Ft ? Promise.resolve() : new Promise((v, V) => {
      Ge.add([v, V]);
    });
  }
  function nn(v) {
    return Tt || (Tt = !v, ce(), Ge.list().forEach(([V, x]) => v ? x(v) : V()), Ge.reset()), v;
  }
  function Xe(v, V, x, T) {
    const { scrollBehavior: H } = e;
    if (!Et || !H)
      return Promise.resolve();
    const te = !x && D1(Fc(v.fullPath, 0)) || (T || !x) && history.state && history.state.scroll || null;
    return h1().then(() => H(v, V, te)).then((z) => z && $1(z)).catch((z) => We(z, v, V));
  }
  const Pe = (v) => s.go(v);
  let J;
  const ue = /* @__PURE__ */ new Set(), on = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: b,
    replace: D,
    go: Pe,
    back: () => Pe(-1),
    forward: () => Pe(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: Cn.add,
    isReady: Zn,
    install(v) {
      const V = this;
      v.component("RouterLink", vv), v.component("RouterView", kv), v.config.globalProperties.$router = V, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Xo(c)
      }), Et && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !J && c.value === Ft && (J = !0, b(s.location).catch((H) => {
        ({}).NODE_ENV !== "production" && R("Unexpected error when starting the router:", H);
      }));
      const x = {};
      for (const H in Ft)
        Object.defineProperty(x, H, {
          get: () => c.value[H],
          enumerable: !0
        });
      v.provide(Na, V), v.provide(ym, p1(x)), v.provide(sl, c);
      const T = v.unmount;
      ue.add(v), v.unmount = function() {
        ue.delete(v), ue.size < 1 && (g = Ft, K && K(), K = null, c.value = Ft, J = !1, Tt = !1), T();
      }, {}.NODE_ENV !== "production" && Et && $v(v, V, t);
    }
  };
  function ie(v) {
    return v.reduce((V, x) => V.then(() => L(x)), Promise.resolve());
  }
  return on;
}
function Fv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const l = t.matched[i];
    l && (e.matched.find((g) => Zt(g, l)) ? o.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((g) => Zt(g, c)) || s.push(c));
  }
  return [n, o, s];
}
function he() {
  return Wn(Na);
}
const Mv = {
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
}, Nv = {
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
}, Uv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], Iv = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, zv = {
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
}, Rv = {
  languages: Mv,
  scriptgroups: Nv,
  rtlscripts: Uv,
  regiongroups: Iv,
  territories: zv
};
var ye = Rv;
function rs(e) {
  return !!ye.languages[e];
}
function en(e) {
  return rs(e) && ye.languages[e].length === 1 ? ye.languages[e][0] : !1;
}
function Ov() {
  return ye.languages;
}
function ls(e) {
  var t = en(e);
  return t ? ls(t) : rs(e) ? ye.languages[e][0] : "Zyyy";
}
function yl(e) {
  var t = en(e);
  return t ? yl(t) : rs(e) && ye.languages[e][1] || "UNKNOWN";
}
function Zo(e) {
  var t = en(e);
  return t ? Zo(t) : rs(e) && ye.languages[e][2] || e;
}
function Hv() {
  var e, t = {};
  for (e in ye.languages)
    en(e) || (t[e] = Zo(e));
  return t;
}
function Am(e) {
  var t, n, o = [];
  for (t in ye.languages)
    if (!en(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ls(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function jv(e) {
  return Am([e]);
}
function Em(e) {
  var t;
  for (t in ye.scriptgroups)
    if (ye.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Cl(e) {
  return Em(ls(e));
}
function Lm(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = en(n) || n, a = Cl(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Tm(e) {
  var t, n, o, s = {};
  for (t in ye.languages)
    if (!en(t)) {
      for (n = 0; n < e.length; n++)
        if (yl(t).includes(e[n])) {
          o = Cl(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function qv(e) {
  return Tm([e]);
}
function Gv(e) {
  var t, n, o, s = [];
  for (t = Lm(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Wv(e, t) {
  var n = Zo(e) || e, o = Zo(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Bm(e) {
  return ye.rtlscripts.includes(ls(e));
}
function Xv(e) {
  return Bm(e) ? "rtl" : "ltr";
}
function Kv(e) {
  return ye.territories[e] || [];
}
function Yv(e, t) {
  t.target ? ye.languages[e] = [t.target] : ye.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: Yv,
  getAutonym: Zo,
  getAutonyms: Hv,
  getDir: Xv,
  getGroupOfScript: Em,
  getLanguages: Ov,
  getLanguagesByScriptGroup: Lm,
  getLanguagesByScriptGroupInRegion: qv,
  getLanguagesByScriptGroupInRegions: Tm,
  getLanguagesInScript: jv,
  getLanguagesInScripts: Am,
  getLanguagesInTerritory: Kv,
  getRegions: yl,
  getScript: ls,
  getScriptGroupOfLanguage: Cl,
  isKnown: rs,
  isRedirect: en,
  isRtl: Bm,
  sortByScriptGroup: Gv,
  sortByAutonym: Wv
};
const Qv = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, Jv = (e) => {
  const t = Qv(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
}, Zv = window.Vue.inject, eS = window.Vue.reactive;
var tS = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Pm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(tS, function() {
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
                  const ke = C[M]();
                  if (ke !== null)
                    return ke;
                }
                return null;
              };
            }
            function _(C) {
              const M = w, ke = [];
              for (let mt = 0; mt < C.length; mt++) {
                const pt = C[mt]();
                if (pt === null)
                  return w = M, null;
                ke.push(pt);
              }
              return ke;
            }
            function S(C, M) {
              return () => {
                const ke = w, mt = [];
                let pt = M();
                for (; pt !== null; )
                  mt.push(pt), pt = M();
                return mt.length < C ? (w = ke, null) : mt;
              };
            }
            function b(C) {
              const M = C.length;
              return () => {
                let ke = null;
                return p.slice(w, w + M) === C && (ke = C, w += M), ke;
              };
            }
            function D(C) {
              return () => {
                const M = p.slice(w).match(C);
                return M === null ? null : (w += M[0].length, M[0]);
              };
            }
            const E = D(/^\s+/), F = b("|"), A = b(":"), L = b("\\"), se = D(/^./), W = b("$"), I = D(/^\d+/), K = b('"'), ce = b("'"), Ge = D(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Cn = D(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Tt = f([We, D(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function We() {
              const C = _([L, se]);
              return C === null ? null : C[1];
            }
            const Zn = f([We, Cn]), nn = f([We, Ge]);
            function Xe() {
              const C = _([W, I]);
              return C === null ? null : ["REPLACE", parseInt(C[1], 10) - 1];
            }
            const Pe = (J = D(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), ue = function(C) {
              return C.toString();
            }, () => {
              const C = J();
              return C === null ? null : ue(C);
            });
            var J, ue;
            function on() {
              const C = _([F, S(0, fs)]);
              if (C === null)
                return null;
              const M = C[1];
              return M.length > 1 ? ["CONCAT"].concat(M) : M[0];
            }
            function ie() {
              const C = _([Pe, A, Xe]);
              return C === null ? null : [C[0], C[2]];
            }
            function v() {
              const C = _([Pe, A, fs]);
              return C === null ? null : [C[0], C[2]];
            }
            function V() {
              const C = _([Pe, A]);
              return C === null ? null : [C[0], ""];
            }
            const x = f([function() {
              const C = _([f([ie, v, V]), S(0, on)]);
              return C === null ? null : C[0].concat(C[1]);
            }, function() {
              const C = _([Pe, S(0, on)]);
              return C === null ? null : [C[0]].concat(C[1]);
            }]), T = b("{{"), H = b("}}"), te = b("[["), z = b("]]"), N = b("["), Q = b("]");
            function Ke() {
              const C = _([T, x, H]);
              return C === null ? null : C[1];
            }
            const pe = f([function() {
              const C = _([S(1, fs), F, S(1, ws)]);
              return C === null ? null : [["CONCAT"].concat(C[0]), ["CONCAT"].concat(C[2])];
            }, function() {
              const C = _([S(1, fs)]);
              return C === null ? null : [["CONCAT"].concat(C[0])];
            }]);
            function Ol() {
              let C = null;
              const M = _([te, pe, z]);
              if (M !== null) {
                const ke = M[1];
                C = ["WIKILINK"].concat(ke);
              }
              return C;
            }
            function Hl() {
              let C = null;
              const M = _([N, S(1, mp), E, S(1, ws), Q]);
              return M !== null && (C = ["EXTLINK", M[1].length === 1 ? M[1][0] : ["CONCAT"].concat(M[1]), ["CONCAT"].concat(M[3])]), C;
            }
            const Ra = D(/^[A-Za-z]+/);
            function cp() {
              const C = D(/^[^"]*/), M = _([K, C, K]);
              return M === null ? null : M[1];
            }
            function up() {
              const C = D(/^[^']*/), M = _([ce, C, ce]);
              return M === null ? null : M[1];
            }
            function dp() {
              const C = D(/^\s*=\s*/), M = _([E, Ra, C, f([cp, up])]);
              return M === null ? null : [M[1], M[3]];
            }
            function gp() {
              const C = S(0, dp)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], C);
            }
            const mp = f([Ke, Xe, Ol, Hl, function() {
              const C = S(1, Tt)();
              return C === null ? null : C.join("");
            }]), ws = f([Ke, Xe, Ol, Hl, function() {
              let C = null;
              const M = w, ke = b("<"), mt = D(/^\/?/), pt = D(/^\s*>/), Oa = _([ke, Ra, gp, mt, pt]);
              if (Oa === null)
                return null;
              const ql = w, Gl = Oa[1], Ha = S(0, ws)(), pp = w, Wl = _([b("</"), Ra, pt]);
              if (Wl === null)
                return ["CONCAT", p.slice(M, ql)].concat(Ha);
              const hp = w, wp = Wl[1], Xl = Oa[2];
              if (function(sn, _s, ja, qa = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((sn = sn.toLowerCase()) !== (_s = _s.toLowerCase()) || qa.allowedHtmlElements.indexOf(sn) === -1)
                  return !1;
                const fp = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let vs = 0, _p = ja.length; vs < _p; vs += 2) {
                  const Ga = ja[vs];
                  if (qa.allowedHtmlCommonAttributes.indexOf(Ga) === -1 && (qa.allowedHtmlAttributesByElement[sn] || []).indexOf(Ga) === -1 || Ga === "style" && ja[vs + 1].search(fp) !== -1)
                    return !1;
                }
                return !0;
              }(Gl, wp, Xl.slice(1)))
                C = ["HTMLELEMENT", Gl, Xl].concat(Ha);
              else {
                const sn = (_s) => _s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                C = ["CONCAT", sn(p.slice(M, ql))].concat(Ha, sn(p.slice(pp, hp)));
              }
              return C;
            }, function() {
              const C = S(1, nn)();
              return C === null ? null : C.join("");
            }]), fs = f([Ke, Xe, function() {
              const C = S(1, Zn)();
              return C === null ? null : C.join("");
            }]), jl = function() {
              const C = S(0, ws)();
              return C === null ? null : ["CONCAT"].concat(C);
            }();
            if (jl === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return jl;
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
})(Pm);
var nS = Pm.exports;
const Kc = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Fm = Symbol("banana-context");
function Ve() {
  const e = Zv(Fm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function oS(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = eS(new nS(e.locale, e));
  return {
    install: (n) => {
      n.provide(Fm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Kc(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Kc(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const sS = window.Vuex.useStore, aS = window.Vue.computed, iS = {
  name: "CxTranslationWork",
  components: { MwRow: P, MwCol: y, MwThumbnail: hl, MwIcon: me },
  props: {
    translation: {
      type: Ta,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = sS(), n = (a, i) => {
      const l = t.getters["mediawiki/getPage"](a, i);
      return l == null ? void 0 : l.thumbnail;
    }, o = Ve();
    return {
      timeagoMessage: aS(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, i = Jv(e.translation.startTimestamp);
        return o.i18n(
          a[i.postfix],
          i.value
        );
      }),
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      getImage: n,
      mwIconArrowForward: ul,
      mwIconArrowNext: dl
    };
  }
}, As = window.Vue.resolveComponent, xn = window.Vue.createVNode, wt = window.Vue.createElementVNode, Yc = window.Vue.renderSlot, Qc = window.Vue.withModifiers, pi = window.Vue.toDisplayString, hi = window.Vue.withCtx, rS = window.Vue.openBlock, lS = window.Vue.createElementBlock, cS = window.Vue.createCommentVNode, uS = { class: "col shrink pe-4" }, dS = { class: "col" }, gS = { class: "cx-translation__details column justify-between ma-0" }, mS = { class: "row ma-0" }, pS = { class: "col grow" }, hS = { class: "col shrink ps-2" }, wS = ["dir", "textContent"], fS = ["dir", "textContent"], _S = ["textContent"];
function vS(e, t, n, o, s, a) {
  const i = As("mw-thumbnail"), l = As("mw-icon"), c = As("mw-col"), g = As("mw-row");
  return n.translation ? (rS(), lS("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = Qc((r) => e.$emit("click"), ["stop"]))
  }, [
    wt("div", uS, [
      xn(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    wt("div", dS, [
      wt("div", gS, [
        wt("div", mS, [
          wt("div", pS, [
            Yc(e.$slots, "title")
          ]),
          wt("div", hS, [
            xn(l, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = Qc((r) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Yc(e.$slots, "mid-content"),
        xn(g, { class: "cx-translation__footer ma-0" }, {
          default: hi(() => [
            xn(c, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: hi(() => [
                wt("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: pi(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, wS),
                xn(l, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                wt("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: pi(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, fS)
              ]),
              _: 1
            }),
            xn(c, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: hi(() => [
                wt("span", {
                  textContent: pi(o.timeagoMessage)
                }, null, 8, _S)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : cS("", !0);
}
const Mm = /* @__PURE__ */ B(iS, [["render", vS]]);
const io = window.Vue.unref, Jc = window.Vue.toDisplayString, SS = window.Vue.normalizeClass, yS = window.Vue.createElementVNode, wi = window.Vue.openBlock, CS = window.Vue.createElementBlock, Zc = window.Vue.createCommentVNode, eu = window.Vue.createVNode, Es = window.Vue.withCtx, tu = window.Vue.createBlock, kS = ["lang", "textContent"], xS = ["lang", "textContent"], bS = window.Vue.computed, $S = window.Vue.inject, VS = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: wl,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = $S("colors").gray200, s = bS(
      () => {
        var a;
        return ((a = t.translation.progress) == null ? void 0 : a.any) * 100 || 0;
      }
    );
    return (a, i) => (wi(), tu(Mm, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": io(zg),
      onActionIconClicked: i[0] || (i[0] = (l) => a.$emit("delete-translation"))
    }, {
      title: Es(() => [
        yS("h5", {
          class: SS(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Jc(e.translation.sourceTitle)
        }, null, 10, kS),
        e.translation.isLeadSectionTranslation ? Zc("", !0) : (wi(), CS("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Jc(e.translation.sourceSectionTitle)
        }, null, 8, xS))
      ]),
      "mid-content": Es(() => [
        e.translation.progress ? (wi(), tu(io(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Es(() => [
            eu(io(y), null, {
              default: Es(() => [
                eu(io(qg), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: io(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Zc("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, DS = window.Vue.computed, AS = window.Vue.inject, cs = () => {
  const e = AS("breakpoints");
  return { isDesktop: DS(
    () => !j.isMobileDomain() && e.value.tabletAndUp
  ) };
}, ES = window.Vuex.useStore, kl = () => {
  const e = ES();
  return (t, n, o, s = !0) => k(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!a) {
      a = yield nt.fetchSectionSuggestions(
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
          a = new qn({
            sourceLanguage: t,
            targetLanguage: n,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: i.title
          }), s && e.commit(
            "suggestions/addPageSuggestion",
            new _l({
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
}, LS = window.Vuex.useStore, Ua = () => {
  const e = LS(), t = he(), n = kl(), { setTranslationURLParams: o } = G();
  return (s, a, i, l) => k(void 0, null, function* () {
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
}, bn = window.Vue.computed;
function U(e) {
  const t = bn(() => e.state.application.sourceLanguage), n = bn(() => e.state.application.targetLanguage), o = bn(
    () => e.state.application.currentMTProvider
  ), s = bn(
    () => O.getAutonym(t.value)
  ), a = bn(
    () => O.getAutonym(n.value)
  ), i = bn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: i,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const TS = window.Vuex.useStore, BS = window.Vue.computed, us = () => {
  const e = TS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = G();
  return { currentTranslation: BS(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, PS = window.Vuex.useStore, xl = () => {
  const e = Ua(), t = PS(), { sourceLanguage: n, targetLanguage: o } = U(t), s = (r, u) => e(
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
}, nu = window.Vue.computed, FS = window.Vuex.useStore;
function ds() {
  const e = FS(), t = nu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: nu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const MS = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = G(), s = j.getCurrentWikiLanguageCode(), a = (u) => !e || Array.isArray(e) && e.includes(u), i = (u) => t.includes(u), l = {
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
class NS {
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
const US = window.Vuex.useStore, IS = () => {
  const e = US();
  return () => k(void 0, null, function* () {
    const { sourceLanguage: t, targetLanguage: n } = U(e), o = yield nt.fetchSuggestionSeeds(
      t.value,
      n.value
    ), s = new NS({
      sourceLanguage: t,
      targetLanguage: n,
      seeds: o
    });
    return e.commit("suggestions/addSuggestionSeedCollection", s), s;
  });
}, zS = window.Vuex.useStore, bl = () => {
  const e = zS(), { sourceLanguage: t, targetLanguage: n } = U(e), o = (u) => {
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
  }, c = (u, d) => k(void 0, null, function* () {
    let m = e.getters["suggestions/findSuggestionSeedCollection"](u, d);
    return !m || !m.seeds.length ? (mw.log.error("No suggestion seed found! Suggestion fetching will fail!"), null) : m.shiftSeeds();
  });
  return {
    fetchNextSectionSuggestionsSlice: () => k(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const u = e.getters["suggestions/getNumberOfSectionSuggestionsToFetch"](t.value, n.value), d = [];
      for (; d.length < u; ) {
        const m = yield c(
          t.value,
          n.value
        );
        if (!m)
          break;
        const p = yield nt.fetchSectionSuggestions(
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
    fetchNextPageSuggestionsSlice: () => k(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const u = e.getters["suggestions/getNumberOfPageSuggestionsToFetch"](t.value, n.value), d = [];
      for (; d.length < u; ) {
        const m = yield c(
          t.value,
          n.value
        );
        if (!m)
          break;
        let p = yield nt.fetchPageSuggestions(
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
}, RS = window.Vuex.useStore, $l = () => {
  const e = RS(), t = IS(), { fetchNextSectionSuggestionsSlice: n, fetchNextPageSuggestionsSlice: o } = bl();
  return () => k(void 0, null, function* () {
    yield t();
    const { targetLanguage: s } = U(e), a = e.getters["application/getSectionSuggestionsSliceByIndex"](0), i = e.getters["application/getPageSuggestionsSliceByIndex"](0), { maxSuggestionsPerSlice: l } = e.state.suggestions, c = a.length === l, g = i.length === l;
    c && g || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      s.value
    ), n(), o());
  });
}, ou = window.Vue.computed, OS = window.Vuex.useStore, Lt = () => {
  const e = OS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = G(), s = ou(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = ou(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(c)
  };
}, gs = window.Vuex.useStore, ms = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = j.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = Ce({ sx: !0 }, s), o && (s.section = o), location.href = j.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: HS, pageURLParameter: jS, sectionURLParameter: qS } = G(), ps = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), HS(t, n);
}, Nm = () => {
  const e = gs(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = ds();
  return () => k(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = MS(
      t.value,
      n.value
    );
    ms(
      o,
      s,
      jS.value,
      qS.value
    ) || ps(e, o, s);
  });
}, Um = () => {
  const e = gs(), t = $l();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = U(e);
    n === o && (n = a.value, o = s.value), ms(
      n,
      o,
      null,
      null
    ) || (ps(e, n, o), t());
  };
}, GS = () => {
  const e = gs(), t = $l();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      ms(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (ps(e, o, s), t());
    }
  );
}, WS = () => {
  const e = gs();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    ms(
      n,
      o,
      s,
      null
    ) || ps(e, n, o);
  };
}, XS = () => {
  const e = gs(), t = kl(), { currentLanguageTitleGroup: n } = Lt();
  return (o, s) => k(void 0, null, function* () {
    const { sourceLanguage: a, targetLanguage: i } = U(e);
    o === s && (o = i.value, s = a.value);
    const l = n.value.getTitleForLanguage(o);
    ms(
      o,
      s,
      l,
      null
    ) || (ps(e, o, s), n.value.hasLanguage(i.value) && (yield t(
      a.value,
      i.value,
      l
    )), e.dispatch("application/getCXServerToken"));
  });
}, KS = window.Vuex.useStore, YS = () => {
  const e = KS();
  return (t, n, o) => k(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return s || (s = yield nt.fetchSectionSuggestions(
      t,
      o,
      n
    ), s || (s = new qn({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      isListable: !1
    })), e.commit("suggestions/addSectionSuggestion", s)), s;
  });
}, QS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', JS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', ZS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', ey = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', ty = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', ny = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', oy = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', sy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', ay = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', iy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', ry = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', ly = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', cy = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', uy = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', dy = '<path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z"/><path d="m11 1 3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z"/>', gy = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', my = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', py = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', hy = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', wy = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', fy = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', _y = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', vy = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', il = QS, Im = JS, zm = {
  ltr: ZS,
  shouldFlip: !0
}, Sy = ey, yy = ty, Cy = ny, ky = oy, Ia = sy, Vl = ay, Rm = iy, xy = ry, by = {
  langCodeMap: {
    ar: ly
  },
  default: cy
}, $y = uy, Dl = {
  ltr: dy,
  shouldFlip: !0
}, Vy = gy, hs = {
  ltr: my,
  shouldFlip: !0
}, Al = {
  ltr: py,
  shouldFlip: !0
}, Dy = {
  ltr: hy,
  shouldFlip: !0
}, Om = wy, Ay = fy, Ey = _y, Ly = vy;
const Ls = window.Vue.withModifiers, fi = window.Vue.toDisplayString, _i = window.Vue.createElementVNode, Me = window.Vue.unref, Ts = window.Vue.openBlock, su = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Mt = window.Vue.createVNode, an = window.Vue.withCtx, au = window.Vue.createElementBlock, Ty = ["lang", "href", "textContent"], By = {
  key: 1,
  class: "flex"
}, Py = { key: 2 }, Fy = window.Vuex.useStore, iu = window.Vue.computed, ru = window.Vue.ref, vi = window.Codex.CdxButton, Si = window.Codex.CdxIcon, My = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: fl,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Fy(), o = ru(!0), s = ru(null), a = iu(() => {
      var w;
      return (w = s.value) == null ? void 0 : w.missingSections;
    }), i = iu(
      () => a.value && Object.keys(a.value)[0]
    );
    YS()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((w) => s.value = w).catch((w) => console.log(w)).finally(() => o.value = !1);
    const c = he();
    cs();
    const { setTranslationURLParams: g, setSectionURLParam: r } = G(), u = (w) => {
      n.dispatch("application/getCXServerToken"), g(s.value), w && r(w), c.push({
        name: "sx-translation-confirmer"
      });
    }, d = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: m } = xl();
    U(n);
    const p = WS(), h = () => {
      p(t.translation), m(t.translation);
    };
    return (w, f) => (Ts(), su(Mm, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: d
    }, {
      title: an(() => [
        _i("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = Ls(() => {
          }, ["stop"])),
          textContent: fi(e.translation.sourceTitle)
        }, null, 8, Ty)
      ]),
      "mid-content": an(() => [
        Mt(Me(P), { class: "ma-0" }, {
          default: an(() => [
            Mt(Me(y), null, {
              default: an(() => [
                o.value ? (Ts(), su(Me(ot), { key: 0 })) : a.value ? (Ts(), au("div", By, [
                  Mt(Me(vi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = Ls((_) => u(i.value), ["stop"]))
                  }, {
                    default: an(() => [
                      Mt(Me(Si), {
                        class: "me-1",
                        icon: Me(il)
                      }, null, 8, ["icon"]),
                      _i("span", null, fi(i.value), 1)
                    ]),
                    _: 1
                  }),
                  Mt(Me(vi), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[2] || (f[2] = Ls((_) => u(null), ["stop"]))
                  }, {
                    default: an(() => [
                      Mt(Me(Si), { icon: Me(Rm) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])) : (Ts(), au("div", Py, [
                  Mt(Me(vi), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: Ls(h, ["stop"])
                  }, {
                    default: an(() => [
                      Mt(Me(Si), {
                        class: "me-1",
                        icon: Me(il)
                      }, null, 8, ["icon"]),
                      _i("span", null, fi(w.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Hm = "cx-translation-session-position-", jm = () => Hm + mw.user.sessionId(), qm = () => {
  const e = jm();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, Ny = function() {
  const e = qm();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Hm)).forEach((n) => mw.storage.remove(n));
  const t = jm();
  mw.storage.set(t, e + 1);
};
let rl = null;
function Uy(e) {
  if (rl)
    return Promise.resolve(rl);
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
function Iy(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function zy(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), l = qm(), c = {
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
  ) : g = Uy(i).then((r) => {
    rl = r, mw.eventLog.submit(
      s,
      Object.assign({}, c, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: Iy(r)
      })
    );
  }), g.then(() => {
    Ny();
  });
}
const Ry = window.Vue.inject, Gm = Symbol("event-logging-context"), dt = function() {
  const e = Ry(Gm);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, Oy = () => ({
  install: (e) => {
    e.provide(Gm, zy);
  }
}), lu = window.Vuex.useStore, Hy = () => {
  const e = lu(), { commit: t } = lu(), { sourceLanguage: n, targetLanguage: o } = U(e), s = dt();
  return (a) => k(void 0, null, function* () {
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
const jy = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: $e,
    MwDialog: st
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ta,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = Hy();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, qy = window.Vue.resolveDirective, yi = window.Vue.createElementVNode, Gy = window.Vue.withDirectives, cu = window.Vue.resolveComponent, uu = window.Vue.createVNode, du = window.Vue.withCtx, Wy = window.Vue.openBlock, Xy = window.Vue.createBlock, Ky = { class: "pa-4" }, Yy = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function Qy(e, t, n, o, s, a) {
  const i = cu("mw-button"), l = cu("mw-dialog"), c = qy("i18n");
  return Wy(), Xy(l, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: du(() => [
      yi("div", Yy, [
        uu(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        uu(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: du(() => [
      yi("div", Ky, [
        Gy(yi("span", null, null, 512), [
          [c, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const Jy = /* @__PURE__ */ B(jy, [["render", Qy]]);
function Zy(e, t, n) {
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
    return s.length ? s : n ? (yield eC(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function gu(e, t, n) {
  return k(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield Zy(e, t, n)).sort(O.sortByAutonym);
  });
}
function eC(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function tC() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function nC(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function oC(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const sC = window.Vue.computed;
function aC(e, t) {
  const n = sC(() => {
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
const Ci = window.Vue.ref, mu = window.Vue.watch, iC = window.Vue.computed;
function rC(e, t, n) {
  const o = Ci(""), s = Ci(-1), a = Ci(null), i = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = iC(
    () => e.value ? t.value : [...n, ...t.value]
  ), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return mu(e, () => {
    s.value = -1;
  }), mu(s, () => k(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: c, langSelectorContainer: a, selectedLanguage: o };
}
function El(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, l = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const ki = window.Vue.ref, lC = window.Vue.watch, cC = window.Vue.onMounted, pu = window.Vue.computed, uC = {
  name: "MwLanguageSelector",
  components: {
    MwInput: pl
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
      default: tC
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = ki(null), o = ki(""), s = ki([]), a = pu(
      () => nC(s.value)
    ), i = pu(
      () => oC(s.value)
    ), l = (f) => t.emit("select", f), c = () => t.emit("close"), { autocompletion: g, onTabSelect: r } = aC(
      o,
      s
    ), { next: u, prev: d, langSelectorContainer: m, selectedLanguage: p } = rC(o, s, e.suggestions), h = () => {
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
    return lC(o, El(() => k(this, null, function* () {
      s.value = yield gu(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), cC(() => k(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield gu(
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
      mwIconClose: yn,
      mwIconSearch: Rg,
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
}, Bs = window.Vue.renderSlot, dC = window.Vue.resolveComponent, hu = window.Vue.createVNode, ro = window.Vue.withModifiers, lo = window.Vue.withKeys, Nt = window.Vue.createElementVNode, gC = window.Vue.resolveDirective, Ps = window.Vue.withDirectives, xi = window.Vue.renderList, bi = window.Vue.Fragment, ft = window.Vue.openBlock, _t = window.Vue.createElementBlock, wu = window.Vue.toDisplayString, Fs = window.Vue.normalizeClass, $i = window.Vue.createCommentVNode, mC = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, pC = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, hC = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, wC = { class: "results px-3 pt-4" }, fC = { class: "results-header ps-8 pb-2" }, _C = { class: "results-languages--suggestions pa-0 ma-0" }, vC = ["lang", "dir", "aria-selected", "onClick", "textContent"], SC = { class: "results px-3 pt-4" }, yC = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, CC = ["lang", "dir", "aria-selected", "onClick", "textContent"], kC = ["aria-selected"], xC = { class: "no-results px-3 py-4" }, bC = { class: "ps-8" };
function $C(e, t, n, o, s, a) {
  const i = dC("mw-input"), l = gC("i18n");
  return ft(), _t("div", mC, [
    Bs(e.$slots, "search", {}, () => [
      Nt("div", pC, [
        hu(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (c) => o.autocompletion = c),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        hu(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (c) => o.searchQuery = c),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            lo(ro(o.onEnter, ["prevent"]), ["enter"]),
            lo(ro(o.next, ["stop", "prevent"]), ["down"]),
            lo(ro(o.prev, ["stop", "prevent"]), ["up"]),
            lo(ro(o.close, ["prevent"]), ["esc"]),
            lo(ro(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    Nt("section", hC, [
      n.suggestions.length && !o.searchQuery ? Bs(e.$slots, "suggestions", { key: 0 }, () => [
        Nt("section", wC, [
          Ps(Nt("p", fC, null, 512), [
            [l, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          Nt("ul", _C, [
            (ft(!0), _t(bi, null, xi(n.suggestions, (c) => (ft(), _t("li", {
              key: c,
              class: Fs(["language pa-2 ps-8 ma-0", c === o.selectedLanguage ? "language--selected" : ""]),
              lang: c,
              dir: o.getDir(c),
              "aria-selected": c === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (g) => o.select(c),
              textContent: wu(o.getAutonym(c))
            }, null, 10, vC))), 128))
          ])
        ])
      ]) : $i("", !0),
      o.searchResultsByScript.length ? Bs(e.$slots, "search", { key: 1 }, () => [
        Nt("section", SC, [
          n.suggestions.length && !o.searchQuery ? Ps((ft(), _t("p", yC, null, 512)), [
            [l, void 0, "cx-sx-language-selector-all-languages"]
          ]) : $i("", !0),
          (ft(!0), _t(bi, null, xi(o.searchResultsByScript, (c, g) => (ft(), _t("ul", {
            key: g,
            class: Fs(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (ft(!0), _t(bi, null, xi(c, (r) => (ft(), _t("li", {
              key: r,
              class: Fs(["language pa-2 ps-8 ma-0", r === o.selectedLanguage ? "language--selected" : ""]),
              lang: r,
              dir: o.getDir(r),
              role: "option",
              "aria-selected": r === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(r),
              textContent: wu(o.getAutonym(r))
            }, null, 10, CC))), 128)),
            n.allOptionEnabled && !o.searchQuery ? Ps((ft(), _t("li", {
              key: 0,
              class: Fs(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (r) => o.select("all"))
            }, null, 10, kC)), [
              [l, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : $i("", !0)
          ], 2))), 128))
        ])
      ]) : Bs(e.$slots, "noresults", { key: 2 }, () => [
        Nt("section", xC, [
          Ps(Nt("h3", bC, null, 512), [
            [l, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const Wm = /* @__PURE__ */ B(uC, [["render", $C]]);
const we = window.Vue.unref, VC = window.Vue.resolveDirective, fu = window.Vue.withDirectives, co = window.Vue.openBlock, uo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const _u = window.Vue.toDisplayString, vu = window.Vue.withModifiers, rn = window.Vue.withCtx, vt = window.Vue.createVNode, DC = { class: "sx-translation-list-language-selector" }, AC = {
  key: 0,
  class: "mw-ui-autonym"
}, EC = ["lang", "dir", "textContent"], LC = {
  key: 0,
  class: "mw-ui-autonym"
}, TC = ["lang", "dir", "textContent"], go = window.Vue.computed, BC = window.Vue.inject, PC = window.Vue.ref, Ll = {
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
    const n = e, o = t, s = BC("breakpoints"), a = go(() => s.value.mobile), i = PC(null), l = go(() => !!i.value), c = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, u = go(() => {
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
    }, m = go(
      () => n.selectedSourceLanguage === "all"
    ), p = go(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const f = VC("i18n");
      return co(), uo("div", DC, [
        vt(we(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: rn(() => [
            vt(we(y), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: rn(() => [
                vt(we($e), {
                  indicator: we(Qr),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: vu(c, ["stop"])
                }, {
                  default: rn(() => [
                    m.value ? fu((co(), uo("span", AC, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (co(), uo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: we(O.getDir)(e.selectedSourceLanguage),
                      textContent: _u(we(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, EC))
                  ]),
                  _: 1
                }, 8, ["indicator", "onClick"])
              ]),
              _: 1
            }),
            vt(we(y), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: rn(() => [
                vt(we(me), { icon: we(dl) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            vt(we(y), { cols: "5" }, {
              default: rn(() => [
                vt(we($e), {
                  indicator: we(Qr),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: vu(g, ["stop"])
                }, {
                  default: rn(() => [
                    p.value ? fu((co(), uo("span", LC, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (co(), uo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: we(O.getDir)(e.selectedTargetLanguage),
                      textContent: _u(we(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, TC))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vt(we(st), {
          value: l.value,
          "onUpdate:value": w[0] || (w[0] = (_) => l.value = _),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: r
        }, {
          default: rn(() => [
            vt(we(Wm), {
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
}, FC = window.Vue.toDisplayString, MC = window.Vue.createElementVNode, Su = window.Vue.createVNode, yu = window.Vue.unref, Ut = window.Vue.openBlock, Ms = window.Vue.createBlock, Cu = window.Vue.createCommentVNode, ku = window.Vue.renderList, xu = window.Vue.Fragment, Ns = window.Vue.createElementBlock, NC = window.Vue.normalizeClass, bu = window.Vue.withCtx, UC = ["textContent"], IC = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, zC = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Us = window.Vue.ref, St = window.Vue.computed, RC = window.Vuex.useStore, $u = {
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
    const t = e, n = Us("all"), o = Us("all"), s = RC(), a = St(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = ds(), l = Us(!1), c = Us(null), g = St(
      () => t.translationStatus === "draft"
    ), r = St(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), u = St(
      () => n.value === "all"
    ), d = St(
      () => o.value === "all"
    ), m = St(
      () => r.value.filter(
        (D) => (u.value || D.sourceLanguage === n.value) && (d.value || D.targetLanguage === o.value)
      ).sort((D, E) => D.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), p = St(() => {
      let D = r.value.map(
        (E) => E.targetLanguage
      );
      return i.value && (D = D.filter(
        (E) => i.value.includes(E)
      )), [...new Set(D)];
    }), h = St(() => {
      const D = r.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(D)];
    }), w = (D) => {
      c.value = D, l.value = !0;
    }, f = St(() => t.activeStatus === t.translationStatus), _ = he(), { setTranslationURLParams: S } = G(), b = (D) => {
      S(D), _.push({
        name: "sx-translation-confirmer"
      });
    };
    return (D, E) => f.value ? (Ut(), Ms(yu(He), {
      key: 0,
      class: NC(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: bu(() => [
        MC("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: FC(D.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, UC)
      ]),
      default: bu(() => [
        Su(Ll, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (F) => n.value = F),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (F) => o.value = F),
          "source-languages": h.value,
          "target-languages": p.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? Cu("", !0) : (Ut(), Ms(yu(ot), { key: 0 })),
        g.value ? (Ut(), Ns("div", IC, [
          (Ut(!0), Ns(xu, null, ku(m.value, (F) => (Ut(), Ms(VS, {
            key: `${e.translationStatus}-${F.key}`,
            translation: F,
            onClick: (A) => b(F),
            onDeleteTranslation: (A) => w(F)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (Ut(), Ns("div", zC, [
          (Ut(!0), Ns(xu, null, ku(m.value, (F) => (Ut(), Ms(My, {
            key: `${e.translationStatus}-${F.key}`,
            translation: F,
            onDeleteTranslation: (A) => w(F)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        Su(Jy, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (F) => l.value = F),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Cu("", !0);
  }
};
const Z = window.Vue.unref, De = window.Vue.createVNode, It = window.Vue.createElementVNode, Is = window.Vue.toDisplayString, Ae = window.Vue.withCtx, Vu = window.Vue.withModifiers, mo = window.Vue.openBlock, zs = window.Vue.createBlock, Rs = window.Vue.createCommentVNode, OC = window.Vue.resolveDirective, Du = window.Vue.withDirectives, HC = window.Vue.createElementBlock, jC = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, qC = { class: "col shrink pe-4" }, GC = { class: "col cx-suggestion__information-panel" }, WC = ["lang", "dir", "textContent"], XC = ["lang", "dir", "textContent"], KC = ["textContent"], YC = ["textContent"], yt = window.Vue.computed, QC = window.Vue.inject, JC = window.Vuex.useStore, ll = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [_l, qn, Gn],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = JC(), o = yt(() => t.suggestion), s = yt(
      () => o.value.sourceTitle || o.value.title
    ), a = yt(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), i = yt(
      () => {
        var h;
        return (h = o.value) == null ? void 0 : h.missingSectionsCount;
      }
    ), l = yt(() => {
      var h;
      return (h = a.value) == null ? void 0 : h.description;
    }), c = yt(
      () => o.value instanceof qn
    ), g = yt(
      () => o.value instanceof Gn
    ), { sourceLanguageAutonym: r, targetLanguageAutonym: u } = U(n), d = yt(
      () => g.value ? iw : aw
    ), m = QC("colors"), p = yt(
      () => g.value ? m.blue600 : "currentColor"
    );
    return (h, w) => {
      const f = OC("i18n");
      return o.value ? (mo(), HC("div", jC, [
        It("div", qC, [
          De(Z(hl), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        It("div", GC, [
          De(Z(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ae(() => [
              De(Z(y), {
                shrink: "",
                class: "cx-suggestion__information-panel__top pb-2"
              }, {
                default: Ae(() => [
                  De(Z(P), {
                    class: "ma-0",
                    align: "start",
                    justify: "between"
                  }, {
                    default: Ae(() => [
                      De(Z(y), {
                        grow: "",
                        class: "pe-2"
                      }, {
                        default: Ae(() => [
                          De(Z(P), {
                            direction: "column",
                            class: "ma-0",
                            align: "start"
                          }, {
                            default: Ae(() => [
                              De(Z(y), {
                                shrink: "",
                                class: "mb-2"
                              }, {
                                default: Ae(() => [
                                  It("h5", {
                                    class: "my-0 cx-suggestion__source-title",
                                    lang: o.value.sourceLanguage,
                                    dir: Z(O.getDir)(o.value.sourceLanguage),
                                    textContent: Is(s.value)
                                  }, null, 8, WC)
                                ]),
                                _: 1
                              }),
                              De(Z(y), { shrink: "" }, {
                                default: Ae(() => [
                                  It("p", {
                                    class: "ma-0 cx-suggestion__source-description complementary",
                                    lang: o.value.sourceLanguage,
                                    dir: Z(O.getDir)(o.value.sourceLanguage),
                                    textContent: Is(l.value)
                                  }, null, 8, XC)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      De(Z(y), { shrink: "" }, {
                        default: Ae(() => [
                          g.value ? Rs("", !0) : (mo(), zs(Z(me), {
                            key: 0,
                            icon: Z(yn),
                            size: "24",
                            class: "cx-suggestion__discard-button mb-4",
                            onClick: w[0] || (w[0] = Vu((_) => h.$emit("close"), ["stop"]))
                          }, null, 8, ["icon"])),
                          De(Z(me), {
                            class: "cx-suggestion__favorite-button",
                            icon: d.value,
                            size: "24",
                            "icon-color": p.value,
                            onClick: w[1] || (w[1] = Vu((_) => h.$emit("bookmark"), ["stop"]))
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
              c.value ? (mo(), zs(Z(y), {
                key: 0,
                class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                shrink: ""
              }, {
                default: Ae(() => [
                  Du(It("small", null, null, 512), [
                    [f, [i.value], "cx-sx-translation-suggestion-info"]
                  ])
                ]),
                _: 1
              })) : g.value ? (mo(), zs(Z(y), {
                key: 1,
                class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                shrink: ""
              }, {
                default: Ae(() => [
                  De(Z(P), {
                    justify: "between",
                    class: "ma-0"
                  }, {
                    default: Ae(() => [
                      De(Z(y), { grow: "" }, {
                        default: Ae(() => [
                          It("small", {
                            textContent: Is(Z(r))
                          }, null, 8, KC),
                          De(Z(me), {
                            icon: Z(dl),
                            size: "14",
                            class: "mx-1"
                          }, null, 8, ["icon"]),
                          It("small", {
                            textContent: Is(Z(u))
                          }, null, 8, YC)
                        ]),
                        _: 1
                      }),
                      i.value ? (mo(), zs(Z(y), {
                        key: 0,
                        shrink: "",
                        class: "cx-suggestion__favorite-missing-sections"
                      }, {
                        default: Ae(() => [
                          Du(It("small", null, null, 512), [
                            [f, [
                              i.value
                            ], "cx-sx-translation-suggestion-info"]
                          ])
                        ]),
                        _: 1
                      })) : Rs("", !0)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Rs("", !0)
            ]),
            _: 1
          })
        ])
      ])) : Rs("", !0);
    };
  }
}, ZC = window.Vue.computed, ek = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = ds(), n = ZC(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, po = window.Vue.computed, Au = window.Vue.ref, tk = window.Vuex.useStore, nk = () => {
  const e = tk(), { sourceLanguage: t, targetLanguage: n } = U(e), o = dt(), s = po(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = po(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = po(
    () => !s.value && !a.value
  ), l = Au(0), c = Au(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, r = 4, u = po(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      l.value
    )
  ), d = po(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      c.value
    )
  ), m = () => {
    f(), _();
  }, {
    fetchNextSectionSuggestionsSlice: p,
    fetchNextPageSuggestionsSlice: h
  } = bl(), w = (F) => F.length === g, f = () => {
    const F = w(
      u.value
    ), A = (l.value + 1) % r, L = w(
      e.getters["application/getSectionSuggestionsSliceByIndex"](A)
    );
    (!F || !L) && p(), F && D();
  }, _ = () => {
    const F = w(
      d.value
    ), A = (c.value + 1) % r, L = w(
      e.getters["application/getPageSuggestionsSliceByIndex"](A)
    );
    (!F || !L) && h(), F && E();
  }, S = (F) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", F), f();
  }, b = (F) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", F), _();
  }, D = () => l.value = (l.value + 1) % r, E = () => c.value = (c.value + 1) % r;
  return {
    currentPageSuggestionsSlice: d,
    currentSectionSuggestionsSlice: u,
    discardPageSuggestion: b,
    discardSectionSuggestion: S,
    onSuggestionRefresh: m,
    pageSuggestionsLoading: a,
    sectionSuggestionsLoading: s,
    showRefreshButton: i
  };
}, ok = window.Vuex.useStore, Tl = () => {
  const e = ok(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = bl(), o = (g, r, u) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === r && d.sourceTitle === u
  ), s = (g) => k(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: u, targetLanguage: d } = g;
    yield nt.markFavorite(r, u, d);
    const m = new Gn({
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
    markFavoriteSuggestion: (g, r, u) => k(void 0, null, function* () {
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
      ), t()), yield nt.markFavorite(
        g,
        r,
        u
      );
      const p = new Gn({
        title: g,
        sourceLanguage: r,
        targetLanguage: u
      });
      e.commit("suggestions/addFavoriteSuggestion", p);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), nt.unmarkFavorite(g))
  };
};
const Eu = window.Vue.toDisplayString, Os = window.Vue.createElementVNode, ne = window.Vue.unref, ho = window.Vue.createVNode, wo = window.Vue.withCtx, sk = window.Vue.resolveDirective, Vi = window.Vue.withDirectives, Lu = window.Vue.renderList, Tu = window.Vue.Fragment, zt = window.Vue.openBlock, Di = window.Vue.createElementBlock, fo = window.Vue.createBlock, Ai = window.Vue.createCommentVNode, ak = window.Vue.createTextVNode, ik = window.Vue.vShow, rk = ["textContent"], lk = { class: "cx-translation-list__division-title ma-0 pa-4" }, ck = { class: "cx-translation-list__division-title ma-0 pa-4" }, uk = { class: "cx-suggestion-list__refresh-button-container justify-center" }, dk = window.Vuex.useStore, gk = window.Vue.ref, mk = window.Codex.CdxButton, pk = window.Codex.CdxIcon, hk = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = dk(), { sourceLanguage: n, targetLanguage: o } = U(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = ek(), i = Um(), l = (L) => i(L, o.value), c = (L) => i(n.value, L), g = Ua(), r = (L) => g(
      L.sourceTitle,
      L.sourceLanguage,
      L.targetLanguage,
      "suggestion_no_seed"
    ), { startPageSuggestion: u } = xl(), {
      currentPageSuggestionsSlice: d,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: _,
      showRefreshButton: S
    } = nk(), b = gk(null), D = dt(), E = () => {
      D({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), b.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: F, markFavoritePageSuggestion: A } = Tl();
    return (L, se) => {
      const W = sk("i18n");
      return Vi((zt(), Di("div", null, [
        ho(ne(He), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: wo(() => [
            Os("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: Eu(L.$i18n("cx-suggestionlist-title"))
            }, null, 8, rk)
          ]),
          default: wo(() => [
            ho(Ll, {
              "source-languages": ne(s),
              "target-languages": ne(a),
              "selected-source-language": ne(n),
              "selected-target-language": ne(o),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": c
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        ho(ne(He), {
          ref_key: "pageSuggestionsList",
          ref: b,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: wo(() => [
            Vi(Os("h5", lk, null, 512), [
              [W, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (zt(!0), Di(Tu, null, Lu(ne(d), (I, K) => (zt(), fo(ll, {
              key: `page-suggestion-${K}`,
              suggestion: I,
              onClose: (ce) => ne(p)(I),
              onClick: (ce) => ne(u)(I),
              onBookmark: (ce) => ne(A)(I)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ne(f) ? (zt(), fo(ne(ot), { key: 0 })) : Ai("", !0)
          ]),
          _: 1
        }, 512),
        ho(ne(He), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: wo(() => [
            Vi(Os("h5", ck, null, 512), [
              [W, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (zt(!0), Di(Tu, null, Lu(ne(m), (I, K) => (zt(), fo(ll, {
              key: `section-suggestion-${K}`,
              class: "ma-0",
              suggestion: I,
              onClose: (ce) => ne(h)(I),
              onClick: (ce) => r(I),
              onBookmark: (ce) => ne(F)(I)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ne(_) ? (zt(), fo(ne(ot), { key: 0 })) : Ai("", !0)
          ]),
          _: 1
        }),
        Os("div", uk, [
          ne(S) ? (zt(), fo(ne(mk), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: E
          }, {
            default: wo(() => [
              ho(ne(pk), {
                class: "me-1",
                icon: ne(Om)
              }, null, 8, ["icon"]),
              ak(" " + Eu(L.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Ai("", !0)
        ])
      ], 512)), [
        [ik, e.active]
      ]);
    };
  }
}, wk = window.Vue.computed, fk = window.Vuex.useStore, _k = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: ll,
    MwCard: He
  },
  setup() {
    he();
    const e = fk(), t = wk(() => e.state.suggestions.favorites || []), n = Ua(), o = (a) => n(
      a.title,
      a.sourceLanguage,
      a.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: s } = Tl();
    return {
      favorites: t,
      startFavoriteTranslation: o,
      removeFavoriteSuggestion: s
    };
  }
}, vk = window.Vue.resolveDirective, Sk = window.Vue.createElementVNode, yk = window.Vue.withDirectives, Ck = window.Vue.renderList, kk = window.Vue.Fragment, Ei = window.Vue.openBlock, xk = window.Vue.createElementBlock, Bu = window.Vue.resolveComponent, Pu = window.Vue.createBlock, Fu = window.Vue.withCtx, bk = window.Vue.createCommentVNode, $k = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function Vk(e, t, n, o, s, a) {
  const i = Bu("cx-translation-suggestion"), l = Bu("mw-card"), c = vk("i18n");
  return o.favorites.length ? (Ei(), Pu(l, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: Fu(() => [
      yk(Sk("h3", $k, null, 512), [
        [c, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: Fu(() => [
      (Ei(!0), xk(kk, null, Ck(o.favorites, (g, r) => (Ei(), Pu(i, {
        key: `favorite-${r}`,
        suggestion: g,
        onClick: (u) => o.startFavoriteTranslation(g),
        onBookmark: (u) => o.removeFavoriteSuggestion(g)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : bk("", !0);
}
const Dk = /* @__PURE__ */ B(_k, [["render", Vk]]);
const Ak = {
  name: "CxHelpPanel",
  components: { MwIcon: me },
  setup() {
    const e = Ve();
    return { listItems: [
      {
        icon: fw,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Jh,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: _w,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, Ek = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, Lk = window.Vue.withDirectives, Tk = window.Vue.renderList, Bk = window.Vue.Fragment, Li = window.Vue.openBlock, Ti = window.Vue.createElementBlock, Pk = window.Vue.resolveComponent, Fk = window.Vue.createVNode, Mk = window.Vue.toDisplayString, Nk = { class: "cx-help-panel pa-4" }, Uk = { class: "cx-help-panel__item-list mt-6 ps-2" }, Ik = ["href"], zk = ["textContent"];
function Rk(e, t, n, o, s, a) {
  const i = Pk("mw-icon"), l = Ek("i18n");
  return Li(), Ti("div", Nk, [
    Lk(Hs("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    Hs("ul", Uk, [
      (Li(!0), Ti(Bk, null, Tk(o.listItems, (c, g) => (Li(), Ti("li", {
        key: g,
        class: "mt-4"
      }, [
        Hs("a", {
          href: c.href,
          target: "_blank"
        }, [
          Fk(i, {
            class: "me-2",
            icon: c.icon
          }, null, 8, ["icon"]),
          Hs("span", {
            textContent: Mk(c.label)
          }, null, 8, zk)
        ], 8, Ik)
      ]))), 128))
    ])
  ]);
}
const Ok = /* @__PURE__ */ B(Ak, [["render", Rk]]);
const Hk = window.Vue.ref, Mu = window.Vue.computed, jk = window.Vue.watch, qk = {
  name: "CxStatsPanel",
  components: { MwCol: y, MwRow: P },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = Mu(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = Mu(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = Hk(null);
    return jk(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), l = Object.keys(e.stats || {}).sort(), c = l.reduce(
          (S, b) => Math.max(S, a[b].delta),
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
        _.forEach((S, b) => {
          b === _.length - 1 && (i.fillStyle = "#36c");
          const D = p - S * h;
          i.fillRect(w, D, m, S * h), w += m + d;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, Gk = window.Vue.resolveDirective, $n = window.Vue.createElementVNode, Bi = window.Vue.withDirectives, Nu = window.Vue.toDisplayString, Uu = window.Vue.resolveComponent, Pi = window.Vue.withCtx, Fi = window.Vue.createVNode, Wk = window.Vue.openBlock, Xk = window.Vue.createElementBlock, Kk = { class: "cx-stats-panel pa-4" }, Yk = ["textContent"], Qk = { class: "cx-stats-panel__monthly-stats-label" }, Jk = ["textContent"], Zk = { class: "cx-stats-panel__total-stats-label" }, ex = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function tx(e, t, n, o, s, a) {
  const i = Uu("mw-col"), l = Uu("mw-row"), c = Gk("i18n");
  return Wk(), Xk("div", Kk, [
    Bi($n("h5", null, null, 512), [
      [c, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    Fi(l, null, {
      default: Pi(() => [
        Fi(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: Pi(() => [
            $n("h3", {
              textContent: Nu(o.thisMonthStats)
            }, null, 8, Yk),
            Bi($n("h5", Qk, null, 512), [
              [c, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        Fi(i, { class: "cx-stats-panel__total-stats" }, {
          default: Pi(() => [
            $n("h3", {
              textContent: Nu(o.total)
            }, null, 8, Jk),
            Bi($n("h5", Zk, null, 512), [
              [c, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    $n("canvas", ex, null, 512)
  ]);
}
const nx = /* @__PURE__ */ B(qk, [["render", tx]]);
const ox = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: y, MwRow: P, MwCard: He, MwIcon: me },
  data: () => ({
    mwIconLabFlask: Hg,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, js = window.Vue.resolveComponent, qs = window.Vue.createVNode, Gs = window.Vue.withCtx, sx = window.Vue.resolveDirective, Vn = window.Vue.createElementVNode, Ws = window.Vue.withDirectives, ax = window.Vue.openBlock, ix = window.Vue.createBlock, rx = { class: "complementary" }, lx = { class: "complementary mt-4" }, cx = ["href"], ux = { class: "complementary" }, dx = ["href"];
function gx(e, t, n, o, s, a) {
  const i = js("mw-icon"), l = js("mw-col"), c = js("mw-row"), g = js("mw-card"), r = sx("i18n");
  return ax(), ix(g, { class: "experimental-support-banner mb-1" }, {
    default: Gs(() => [
      qs(c, null, {
        default: Gs(() => [
          qs(l, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: Gs(() => [
              qs(i, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          qs(l, null, {
            default: Gs(() => [
              Ws(Vn("h5", null, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              Ws(Vn("p", rx, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              Vn("p", lx, [
                Ws(Vn("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, cx), [
                  [r, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              Vn("p", ux, [
                Ws(Vn("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, dx), [
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
const mx = /* @__PURE__ */ B(ox, [["render", gx]]), { getUrlParam: px } = G(), Xm = () => {
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
  }, t = px("campaign");
  return e[t];
}, hx = () => {
  const e = Ua(), t = dt(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s
  } = G();
  return () => k(void 0, null, function* () {
    const a = Xm() || "direct_preselect";
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
}, wx = window.Vuex.useStore, za = () => {
  const e = wx(), t = (o) => k(void 0, null, function* () {
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
          new Qn({ title: r, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, fx = window.Vuex.useStore, _x = () => {
  const e = fx();
  return () => k(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield nt.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), nt.fetchSectionSuggestions(
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
}, vx = window.Vuex.useStore, Sx = () => {
  const e = dt(), t = vx(), n = hx(), { fetchAllTranslations: o } = za(), s = $l(), a = _x(), { pageURLParameter: i, sectionURLParameter: l, draftURLParameter: c } = G();
  return () => k(void 0, null, function* () {
    if (yield Nm()(), i.value) {
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
        return h || Xm() || "direct";
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
}, Iu = window.Vue.computed, yx = window.Vue.ref, Cx = window.Vue.watch, kx = window.Vue.watchEffect, xx = window.Vuex.useStore, bx = ["suggestions", "draft", "published"], $x = () => {
  const e = xx(), { getUrlParam: t, setUrlParam: n } = G(), o = t("active-list"), s = yx(null);
  if (bx.includes(o))
    s.value = o;
  else {
    const a = Iu(
      () => e.state.translator.translationsLoaded.draft
    ), i = Iu(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", Cx(a, (l) => {
      l && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return kx(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, Vx = window.Vue.computed, Dx = () => {
  const e = Ve();
  return Vx(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: tw,
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
        icon: ew,
        type: "text"
      }
    }
  ]);
};
const Xs = window.Vue.openBlock, Mi = window.Vue.createBlock, Ni = window.Vue.createCommentVNode, re = window.Vue.unref, fe = window.Vue.createVNode, Ax = window.Vue.toDisplayString, Ex = window.Vue.createTextVNode, Ct = window.Vue.withCtx, Lx = window.Vue.isRef, Tx = window.Vue.createElementBlock, Bx = window.Vue.computed, Px = window.Vuex.useStore, Fx = window.Codex.CdxButton, Mx = window.Codex.CdxIcon, Nx = {
  __name: "CXDashboard",
  setup(e) {
    const t = he(), n = () => t.push({ name: "sx-article-search" });
    Sx()();
    const s = Px();
    s.dispatch("translator/fetchTranslatorStats");
    const a = Bx(() => s.state.translator.translatorStats), i = $x(), l = Dx();
    return (c, g) => (Xs(), Tx("div", null, [
      c.$incompleteVersion ? (Xs(), Mi(mx, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : Ni("", !0),
      fe(re(P), { class: "ma-0 py-4" }, {
        default: Ct(() => [
          fe(re(Fx), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-desktop-3 col-offset-desktop-2 col-offset-tablet-3 col-mobile-12",
            onClick: n
          }, {
            default: Ct(() => [
              fe(re(Mx), {
                class: "me-1",
                icon: re(il)
              }, null, 8, ["icon"]),
              Ex(" " + Ax(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      fe(re(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: Ct(() => [
          c.$mwui.breakpoint.tabletAndUp ? (Xs(), Mi(re(y), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: Ct(() => [
              fe(re(es), {
                id: "dashboard-list-selector--desktop",
                items: re(l),
                active: re(i),
                onSelect: g[0] || (g[0] = (r) => i.value = r)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Ni("", !0),
          fe(re(y), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: Ct(() => [
              fe(Dk),
              fe(hk, {
                active: re(i) === "suggestions"
              }, null, 8, ["active"]),
              fe($u, {
                "translation-status": "draft",
                "active-status": re(i)
              }, null, 8, ["active-status"]),
              fe($u, {
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
            default: Ct(() => [
              fe(re(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: Ct(() => [
                  fe(re(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: Ct(() => [
                      fe(nx, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  fe(re(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: Ct(() => [
                      fe(Ok)
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
      c.$mwui.breakpoint.mobile ? (Xs(), Mi(re(gh), {
        key: 1,
        active: re(i),
        "onUpdate:active": g[1] || (g[1] = (r) => Lx(i) ? i.value = r : null),
        items: re(l)
      }, null, 8, ["active", "items"])) : Ni("", !0)
    ]));
  }
}, Ux = {
  name: "DashboardView",
  components: { CxDashboard: Nx }
}, Ix = window.Vue.resolveComponent, zx = window.Vue.createVNode, Rx = window.Vue.openBlock, Ox = window.Vue.createElementBlock, Hx = { class: "cx-translation-dashboard" };
function jx(e, t, n, o, s, a) {
  const i = Ix("cx-dashboard");
  return Rx(), Ox("main", Hx, [
    zx(i, { class: "mb-4 pb-12" })
  ]);
}
const zu = /* @__PURE__ */ B(Ux, [["render", jx]]), qx = window.Vue.computed, Gx = window.Vuex.useStore, qe = () => {
  const e = Gx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = G();
  return { sectionSuggestion: qx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Dn = window.Vue.computed, Wx = () => {
  const { sectionSuggestion: e } = qe(), { targetLanguageURLParameter: t } = G(), { currentTranslation: n } = us(), o = Dn(
    () => {
      var d, m, p;
      return (p = (m = (d = e.value) == null ? void 0 : d.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = Dn(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.missingSectionsCount;
    }
  ), a = Dn(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: l } = Lt(), c = Dn(() => i ? j.getPageUrl(
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
  }, r = Dn(() => {
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
  }), u = Dn(
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
}, Km = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function Xx(e) {
  return e.$el = $(e), e;
}
function Kx(e, t, n, o) {
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
function Yx() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function Qx(e, t) {
  return k(this, null, function* () {
    yield Bl(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Xx(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const Jx = window.Vue.computed, Zx = window.Vue.onMounted, e8 = window.Vue.ref;
function t8(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const n8 = {
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
    const n = e8(null);
    let o = null;
    const s = Jx(() => o.getHtml()), a = () => {
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
    return Zx(() => k(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = t8;
      const r = yield Qx(c, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = Kx(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Yx, o.focus();
    })), { sxeditor: n };
  }
}, cl = window.Vue.createElementVNode, o8 = window.Vue.openBlock, s8 = window.Vue.createElementBlock, a8 = ["lang", "dir"], i8 = /* @__PURE__ */ cl("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ cl("div", { class: "toolbar" })
], -1), r8 = ["lang", "dir"];
function l8(e, t, n, o, s, a) {
  return o8(), s8("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    i8,
    cl("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, r8)
  ], 8, a8);
}
const c8 = /* @__PURE__ */ B(n8, [["render", l8]]);
function Bl() {
  return mw.loader.using("mw.cx3.ve");
}
const u8 = window.Vuex.useStore, Ym = () => {
  const e = u8();
  return (t, n) => k(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Bl(), new Promise((s) => {
      setTimeout(() => {
        const a = sm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, d8 = window.Vuex.useStore, Pl = () => {
  const e = d8();
  return (t, n, o, s = null) => k(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield is.fetchPageContent(
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
}, Ru = window.Vue.computed, g8 = window.Vuex.useStore, gt = () => {
  const e = g8(), { sectionSuggestion: t } = qe(), { currentTranslation: n } = us(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = G(), i = Ru(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Ru(() => {
    var g, r;
    const c = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      c
    );
  });
  return { currentSourcePage: i, currentTargetPage: l };
}, m8 = window.Vuex.useStore, Fl = () => {
  const e = m8(), { currentSourcePage: t } = gt(), n = Ym(), o = Pl(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: l
  } = G(), c = (u, d) => k(void 0, null, function* () {
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
}, Ml = () => (e, t, n, o = {}) => {
  j.setCXToken(e, t, n), location.href = j.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, p8 = (e, t, n, o) => k(void 0, null, function* () {
  var l, c, g;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, i = yield im(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), h8 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, w8 = (e, t, n, o) => k(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return p8(e, t, n, o);
  h8(e, t);
}), f8 = (e, t, n, o) => {
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
        const g = w8(
          l,
          c,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, _8 = { restoreCorporaDraft: f8 }, _o = window.Vue.computed, v8 = window.Vuex.useStore, X = () => {
  const e = v8(), { currentSourcePage: t, currentTargetPage: n } = gt(), { currentMTProvider: o } = U(e), { sectionURLParameter: s } = G(), a = _o(() => {
    var r, u;
    return s.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = _o(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), l = _o(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), c = _o(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = _o(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: c,
    targetPageTitleForPublishing: g
  };
}, S8 = window.Vuex.useStore, Qm = () => {
  const e = S8();
  return (t, n) => {
    if (!e.getters["mediawiki/getLanguageTitleGroup"](t, n))
      return is.fetchLanguageTitles(t, n).then(
        (o) => o && e.commit("mediawiki/addLanguageTitleGroup", o)
      );
  };
}, y8 = window.Vuex.useStore, Nl = () => {
  const e = dt(), t = y8(), n = he(), { currentSourcePage: o } = gt(), { sourceLanguage: s, targetLanguage: a } = U(t), i = GS(), l = Ym(), { isDesktop: c } = cs(), g = Ml(), r = Pl(), { sourceSection: u } = X(), d = Qm();
  return (m) => k(void 0, null, function* () {
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
      const E = {};
      S || (E.sourcesection = m.sourceSectionTitle), g(
        s.value,
        a.value,
        w,
        E
      );
      return;
    }
    j.unsetCXToken(
      p,
      h,
      w
    );
    const { setTranslationURLParams: b } = G();
    b(m), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== p || a.value !== h) && i(m), t.dispatch("application/getCXServerToken"), t.commit("application/setCurrentTranslation", m), e({
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
      (E) => _8.restoreCorporaDraft(
        o.value,
        f,
        a,
        E
      )
    ).then(() => m.restored = !0));
    let D;
    m.isLeadSectionTranslation ? (u.value.originalTitle = m.sourceTitle, D = m.targetTitle) : D = m.targetSectionTitle, u.value.translatedTitle = D, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, C8 = window.Vue.ref, k8 = window.Vuex.useStore, x8 = () => {
  const e = he(), t = k8(), { isDesktop: n } = cs(), {
    pageURLParameter: o,
    sectionURLParameter: s
  } = G(), { sourceLanguage: a, targetLanguage: i } = U(t), { targetPageExists: l } = Lt(), { selectPageSectionByIndex: c, selectPageSectionByTitle: g } = Fl(), r = Ml(), u = () => k(void 0, null, function* () {
    n.value ? r(
      a.value,
      i.value,
      o.value,
      { sourcesection: s.value }
    ) : (yield g(s.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), d = Nl(), m = C8(!1), { currentTranslation: p } = us(), h = () => {
    p.value ? p.value.isArticleTranslation ? m.value = !0 : d(p.value) : s.value ? u() : l.value ? e.push({ name: "sx-section-selector" }) : w();
  }, w = () => k(void 0, null, function* () {
    n.value ? r(
      a.value,
      i.value,
      o.value
    ) : (c(0), Km() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: w,
    handlePrimaryButtonClick: h,
    translationConfirmationDialogOn: m
  };
};
const b8 = window.Vue.resolveDirective, Ou = window.Vue.createElementVNode, Hu = window.Vue.withDirectives, $8 = window.Vue.unref, V8 = window.Vue.withCtx, D8 = window.Vue.openBlock, A8 = window.Vue.createBlock, E8 = {
  href: "",
  target: "_blank"
}, L8 = window.Codex.CdxDialog, T8 = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = Ve(), i = {
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
      const u = b8("i18n");
      return D8(), A8($8(L8), {
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
        default: V8(() => [
          Hu(Ou("p", null, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Hu(Ou("a", E8, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const oe = window.Vue.unref, B8 = window.Vue.resolveDirective, vo = window.Vue.createElementVNode, ju = window.Vue.withDirectives, So = window.Vue.toDisplayString, yo = window.Vue.openBlock, Ui = window.Vue.createElementBlock, Ii = window.Vue.createCommentVNode, Ne = window.Vue.createVNode, Ye = window.Vue.withCtx, zi = window.Vue.createTextVNode, P8 = window.Vue.withModifiers, qu = window.Vue.createBlock, F8 = window.Vue.Fragment, M8 = { class: "sx-translation-confirmer-body pb-4" }, N8 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, U8 = ["textContent"], I8 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, z8 = ["href"], R8 = ["textContent"], Ri = window.Vue.computed, O8 = window.Vue.inject, Gu = window.Vue.ref, H8 = window.Vue.watchEffect, j8 = window.Vuex.useStore, Oi = window.Codex.CdxButton, q8 = window.Codex.CdxIcon, G8 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = he(), o = j8();
    O8("colors");
    const { sectionSuggestion: s } = qe(), { targetLanguageAutonym: a } = U(o), { sectionURLParameter: i } = G(), {
      startNewTranslation: l,
      handlePrimaryButtonClick: c,
      translationConfirmationDialogOn: g
    } = x8(), r = Gu(!1), u = Gu(null), d = () => k(this, null, function* () {
      const W = yield je.checkUnreviewedTranslations();
      W !== !0 && (r.value = !0, u.value = W.targetUrl);
    }), m = () => k(this, null, function* () {
      yield d(), !r.value && l();
    }), p = () => k(this, null, function* () {
      yield d(), !r.value && c();
    }), h = t;
    H8(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: f,
      isProgressiveButton: _,
      targetArticlePath: S
    } = Wx(), b = Ve(), D = Ri(
      () => b.i18n(f(!!i.value))
    ), { isDesktop: E } = cs(), F = Ri(
      () => b.i18n(...w.value)
    ), A = () => k(this, null, function* () {
      yield d(), !r.value && n.push({ name: "sx-section-selector" });
    }), L = Ri(() => {
      var W, I;
      return i.value && !!((I = (W = s.value) == null ? void 0 : W.sourceSections) != null && I.length);
    }), { targetPageExists: se } = Lt();
    return (W, I) => {
      const K = B8("i18n");
      return yo(), Ui(F8, null, [
        vo("section", M8, [
          oe(i) ? (yo(), Ui("section", N8, [
            ju(vo("h6", null, null, 512), [
              [K, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            vo("h5", {
              class: "ma-0",
              textContent: So(oe(i))
            }, null, 8, U8)
          ])) : oe(se) ? (yo(), Ui("section", I8, [
            Ne(oe(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Ye(() => [
                ju(Ne(oe(y), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [K, [oe(a)], "cx-sx-existing-translation-status"]
                ]),
                Ne(oe(y), { shrink: "" }, {
                  default: Ye(() => [
                    vo("a", {
                      href: oe(S),
                      target: "_blank"
                    }, [
                      Ne(oe(q8), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: oe(Dl)
                      }, null, 8, ["icon"])
                    ], 8, z8)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ne(oe(P), { class: "ma-0" }, {
              default: Ye(() => [
                Ne(oe(y), null, {
                  default: Ye(() => [
                    vo("span", {
                      textContent: So(F.value)
                    }, null, 8, R8)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Ii("", !0),
          Ne(oe(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Ye(() => [
              L.value ? (yo(), qu(oe(y), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: Ye(() => [
                  Ne(oe(Oi), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: P8(A, ["stop"])
                  }, {
                    default: Ye(() => [
                      zi(So(W.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })) : Ii("", !0),
              oe(se) && oe(E) ? (yo(), qu(oe(y), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: Ye(() => [
                  Ne(oe(Oi), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Ye(() => [
                      zi(So(W.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Ii("", !0),
              Ne(oe(y), { shrink: "" }, {
                default: Ye(() => [
                  Ne(oe(Oi), {
                    weight: "primary",
                    size: "large",
                    action: oe(_) ? "progressive" : "default",
                    onClick: p
                  }, {
                    default: Ye(() => [
                      zi(So(D.value), 1)
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
        Ne(T8, {
          modelValue: r.value,
          "onUpdate:modelValue": I[0] || (I[0] = (ce) => r.value = ce),
          "target-url": u.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Wu = window.Vue.computed, W8 = window.Vuex.useStore, X8 = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: Ll
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = ds(), n = W8(), { sourceLanguage: o, targetLanguage: s } = U(n), { currentLanguageTitleGroup: a } = Lt(), i = Wu(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((d) => d.lang)) || [];
      }
    ), l = Wu(
      () => t.value || e.value
    ), c = XS();
    return {
      availableSourceLanguages: i,
      targetLanguages: l,
      onSourceLanguageSelected: (u) => c(u, s.value),
      onTargetLanguageSelected: (u) => c(o.value, u),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
}, K8 = window.Vue.resolveComponent, Y8 = window.Vue.openBlock, Q8 = window.Vue.createBlock;
function J8(e, t, n, o, s, a) {
  const i = K8("sx-translation-list-language-selector");
  return Y8(), Q8(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const Jm = /* @__PURE__ */ B(X8, [["render", J8]]);
const Ue = window.Vue.unref, Xu = window.Vue.toDisplayString, Ks = window.Vue.createElementVNode, Rt = window.Vue.createVNode, An = window.Vue.withCtx, Z8 = window.Vue.resolveDirective, eb = window.Vue.withDirectives, tb = window.Vue.openBlock, nb = window.Vue.createBlock, ob = ["textContent"], sb = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, ab = ["textContent"], ib = window.Codex.CdxButton, Hi = window.Codex.CdxIcon, ln = window.Vue.computed, rb = window.Vuex.useStore, lb = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = rb(), { currentSourcePage: n } = gt(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = G(), i = ln(() => t.state.suggestions.favorites || []), l = ln(
      () => i.value.some(
        (f) => a.value === f.title && o.value === f.sourceLanguage && s.value === f.targetLanguage
      )
    ), { markFavoriteSuggestion: c, removeFavoriteSuggestion: g } = Tl(), r = () => c(
      a.value,
      o.value,
      s.value
    ), u = () => g(
      new Gn({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), d = ln(
      () => l.value ? yy : Cy
    ), m = ln(
      () => l.value ? u : r
    ), p = ln(
      () => j.getPageUrl(o.value || "", a.value || "")
    ), h = ln(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.langLinksCount;
    }), w = ln(
      () => {
        var f;
        return Object.values(((f = n.value) == null ? void 0 : f.pageviews) || {}).reduce(
          (_, S) => _ + S,
          0
        );
      }
    );
    return (f, _) => {
      const S = Z8("i18n");
      return tb(), nb(Ue(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: An(() => [
          Rt(Ue(y), null, {
            default: An(() => [
              Rt(Ue(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: An(() => [
                  Rt(Ue(y), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: p.value,
                    target: "_blank"
                  }, {
                    default: An(() => [
                      Ks("h5", {
                        class: "ma-0 me-1",
                        textContent: Xu(Ue(a))
                      }, null, 8, ob),
                      Rt(Ue(Hi), {
                        size: "x-small",
                        icon: Ue(Dl)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Rt(Ue(y), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: An(() => [
                      Rt(Ue(ib), {
                        class: "px-0",
                        weight: "quiet",
                        action: l.value ? "progressive" : "default",
                        onClick: m.value
                      }, {
                        default: An(() => [
                          Rt(Ue(Hi), { icon: d.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Ks("p", sb, [
                Rt(Ue(Hi), {
                  icon: Ue($y),
                  size: "small",
                  class: "me-1"
                }, null, 8, ["icon"]),
                Ks("span", {
                  class: "pe-3",
                  textContent: Xu(h.value)
                }, null, 8, ab),
                eb(Ks("span", null, null, 512), [
                  [S, [w.value], "cx-sx-translation-confirmer-views-count"]
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
const cb = window.Vue.resolveDirective, cn = window.Vue.createElementVNode, Ys = window.Vue.withDirectives, ub = window.Vue.toDisplayString, db = window.Vue.createTextVNode, ji = window.Vue.unref, qi = window.Vue.withCtx, Gi = window.Vue.openBlock, Wi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const gb = { class: "pa-4" }, mb = { class: "flex pt-2" }, pb = window.Codex.CdxButton, hb = window.Vue.ref, wb = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Nl(), a = hb(!1), { currentTranslation: i } = us(), l = () => k(this, null, function* () {
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
      const r = cb("i18n");
      return Gi(), Wi(ji(st), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": c.$mwui.colors.gray700,
        "min-height": "unset",
        title: c.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: qi(() => [
          cn("div", mb, [
            a.value ? (Gi(), Wi(ji(ot), { key: 1 })) : (Gi(), Wi(ji(pb), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: l
            }, {
              default: qi(() => [
                db(ub(c.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: qi(() => [
          cn("div", gb, [
            Ys(cn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ys(cn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            cn("p", null, [
              Ys(cn("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ys(cn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
const Ku = window.Vue.resolveDirective, Qs = window.Vue.createElementVNode, Yu = window.Vue.withDirectives, Ot = window.Vue.unref, Js = window.Vue.withCtx, kt = window.Vue.createVNode, Xi = window.Vue.openBlock, Qu = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const fb = window.Vue.createBlock, _b = { class: "sx-translation-confirmer" }, vb = { class: "mb-0" }, Sb = { class: "sx-translation-confirmer__article-image flex justify-center" }, yb = ["src"], Cb = { class: "ma-3" }, kb = window.Vue.computed;
window.Vue.onBeforeMount;
window.Vue.onMounted;
const xb = window.Vue.ref, bb = window.Vuex.useStore, $b = {
  __name: "SXTranslationConfirmer",
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = bb(), { currentSourcePage: o } = gt(), { previousRoute: s } = U(n), {
      sourceLanguageURLParameter: a,
      targetLanguageURLParameter: i,
      pageURLParameter: l,
      sectionURLParameter: c,
      clearURLParameters: g
    } = G(), r = kb(
      () => {
        var _, S;
        return (S = (_ = o.value) == null ? void 0 : _.image) == null ? void 0 : S.source;
      }
    ), u = dt(), { fetchTranslationsByStatus: d } = za(), m = Qm(), p = kl();
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
    }), Bl(), n.dispatch("suggestions/fetchAppendixSectionTitles", i.value);
    const h = he(), w = () => {
      g(), h.push({ name: s.value });
    }, f = xb(!1);
    return (_, S) => {
      const b = Ku("i18n"), D = Ku("i18n-html");
      return Xi(), Qu("section", _b, [
        kt(Ot(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Js(() => [
            kt(Ot(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Js(() => [
                Yu(Qs("h5", vb, null, 512), [
                  [b, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            kt(Ot(y), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Js(() => [
                kt(Ot($e), {
                  class: "pa-0",
                  type: "icon",
                  icon: Ot(yn),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Qs("div", Sb, [
          r.value ? (Xi(), Qu("img", {
            key: 0,
            src: r.value
          }, null, 8, yb)) : (Xi(), fb(Ot(me), {
            key: 1,
            size: "120",
            icon: Ot(ml),
            "icon-color": _.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        kt(lb),
        kt(Jm),
        kt(G8, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (E) => f.value = !0)
        }),
        kt(Ot(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Js(() => [
            Qs("p", Cb, [
              Yu(Qs("small", null, null, 512), [
                [D, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        kt(wb, {
          modelValue: f.value,
          "onUpdate:modelValue": S[1] || (S[1] = (E) => f.value = E)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const Vb = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: $b
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
}, Db = window.Vue.resolveComponent, Ab = window.Vue.createVNode, Eb = window.Vue.normalizeClass, Lb = window.Vue.openBlock, Tb = window.Vue.createElementBlock;
function Bb(e, t, n, o, s, a) {
  const i = Db("sx-translation-confirmer");
  return Lb(), Tb("main", {
    class: Eb(["sx-translation-confirmer-view", a.classes])
  }, [
    Ab(i, { "event-source": n.eventSource }, null, 8, ["event-source"])
  ], 2);
}
const Pb = /* @__PURE__ */ B(Vb, [["render", Bb]]);
const Fb = window.Vue.toDisplayString, Ju = window.Vue.unref, Mb = window.Vue.createVNode, Nb = window.Vue.createTextVNode, Ub = window.Vue.createElementVNode, Ib = window.Vue.openBlock, zb = window.Vue.createElementBlock, Rb = { class: "sx-section-selector-view-article-item ma-0" }, Ob = ["href"], Hb = window.Codex.CdxIcon, jb = {
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
    return (t, n) => (Ib(), zb("li", Rb, [
      Ub("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        Nb(Fb(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        Mb(Ju(Hb), {
          size: "x-small",
          icon: Ju(Dl)
        }, null, 8, ["icon"])
      ], 8, Ob)
    ]));
  }
};
const qb = window.Vue.resolveDirective, Zs = window.Vue.createElementVNode, Ki = window.Vue.withDirectives, un = window.Vue.unref, Gb = window.Vue.toDisplayString, ea = window.Vue.withCtx, Co = window.Vue.createVNode, Wb = window.Vue.openBlock, Xb = window.Vue.createElementBlock, Kb = { class: "sx-section-selector__header pa-4" }, Yb = { class: "sx-section-selector__header-text ma-0" }, Qb = ["textContent"], Jb = { class: "pt-0 ma-0" }, Zb = { class: "ma-0" }, e2 = window.Codex.CdxButton, t2 = window.Codex.CdxIcon, n2 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = qe();
    return (n, o) => {
      const s = qb("i18n");
      return Wb(), Xb("div", Kb, [
        Co(un(P), { class: "ma-0 pb-3" }, {
          default: ea(() => [
            Co(un(y), null, {
              default: ea(() => {
                var a;
                return [
                  Ki(Zs("h6", Yb, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Zs("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: Gb((a = un(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, Qb)
                ];
              }),
              _: 1
            }),
            Co(un(y), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ea(() => [
                Co(un(e2), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ea(() => [
                    Co(un(t2), { icon: un(Ia) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ki(Zs("h4", Jb, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Ki(Zs("p", Zb, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, o2 = window.Vue.renderList, s2 = window.Vue.Fragment, Yi = window.Vue.openBlock, Zu = window.Vue.createElementBlock, a2 = window.Vue.renderSlot, ta = window.Vue.unref, ed = window.Vue.createVNode, td = window.Vue.withCtx, i2 = window.Vue.createBlock, r2 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, l2 = window.Codex.CdxButton, c2 = window.Codex.CdxIcon, Zm = {
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
    return (t, n) => (Yi(), Zu("ul", r2, [
      (Yi(!0), Zu(s2, null, o2(e.sections, (o) => (Yi(), i2(ta(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: td(() => [
          ed(ta(l2), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: td(() => [
              a2(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              ed(ta(c2), { icon: ta(hs) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, u2 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const d2 = window.Vue.resolveDirective, na = window.Vue.createElementVNode, Qi = window.Vue.withDirectives, Qe = window.Vue.unref, nd = window.Vue.toDisplayString, En = window.Vue.withCtx, Ji = window.Vue.openBlock, od = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ko = window.Vue.createVNode, g2 = window.Vue.createTextVNode, m2 = window.Vue.createElementBlock, p2 = { class: "sx-section-selector__missing-sections py-2" }, h2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, w2 = ["lang", "dir", "textContent"], sd = window.Vue.computed, f2 = window.Codex.CdxButton, _2 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = qe(), n = sd(
      () => {
        var s;
        return O.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = sd(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = d2("i18n");
      return Ji(), m2("section", p2, [
        Qi(na("h4", h2, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Ji(), od(Qe(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: En(() => [
            ko(Qe(y), {
              class: "py-6 justify-center",
              innerHTML: Qe(u2)
            }, null, 8, ["innerHTML"]),
            ko(Qe(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: En(() => [
                Qi(na("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            ko(Qe(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: En(() => [
                Qi(na("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            ko(Qe(y), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: En(() => [
                ko(Qe(f2), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (l) => s.$emit("close"))
                }, {
                  default: En(() => [
                    g2(nd(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Ji(), od(Zm, {
          key: 0,
          sections: Qe(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (l) => s.$emit("select-section", l))
        }, {
          default: En(({ sourceSection: l }) => {
            var c, g;
            return [
              na("h5", {
                class: "ma-0",
                lang: (c = Qe(t)) == null ? void 0 : c.sourceLanguage,
                dir: Qe(O.getDir)((g = Qe(t)) == null ? void 0 : g.sourceLanguage),
                textContent: nd(l)
              }, null, 8, w2)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const v2 = window.Vue.computed, S2 = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Zm
  },
  emits: ["select-section"],
  setup() {
    const { sectionSuggestion: e } = qe(), t = v2(
      () => {
        var n;
        return O.getAutonym((n = e.value) == null ? void 0 : n.targetLanguage);
      }
    );
    return {
      mwIconArrowForward: ul,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      suggestion: e,
      targetLanguageAutonym: t
    };
  }
}, y2 = window.Vue.resolveDirective, oa = window.Vue.createElementVNode, C2 = window.Vue.withDirectives, ad = window.Vue.toDisplayString, k2 = window.Vue.resolveComponent, x2 = window.Vue.withCtx, b2 = window.Vue.createVNode, $2 = window.Vue.openBlock, V2 = window.Vue.createElementBlock, D2 = { class: "sx-section-selector__present-sections py-2" }, A2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, E2 = { class: "sx-section-selector__present-section-button-content" }, L2 = ["lang", "dir", "textContent"], T2 = ["lang", "dir", "textContent"];
function B2(e, t, n, o, s, a) {
  var c;
  const i = k2("sx-section-selector-section-list"), l = y2("i18n");
  return $2(), V2("section", D2, [
    C2(oa("h4", A2, null, 512), [
      [l, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    b2(i, {
      sections: ((c = o.suggestion) == null ? void 0 : c.orderedPresentSections) || [],
      onSelectSection: t[0] || (t[0] = (g) => e.$emit("select-section", g))
    }, {
      default: x2(({ sourceSection: g, targetSection: r }) => {
        var u, d, m, p;
        return [
          oa("div", E2, [
            oa("h5", {
              class: "sx-section-selector__present-section-button-source",
              lang: (u = o.suggestion) == null ? void 0 : u.sourceLanguage,
              dir: o.getDir((d = o.suggestion) == null ? void 0 : d.sourceLanguage),
              textContent: ad(g)
            }, null, 8, L2),
            oa("h6", {
              class: "sx-section-selector__present-section-button-target",
              lang: (m = o.suggestion) == null ? void 0 : m.targetLanguage,
              dir: o.getDir((p = o.suggestion) == null ? void 0 : p.targetLanguage),
              textContent: ad(r)
            }, null, 8, T2)
          ])
        ];
      }),
      _: 1
    }, 8, ["sections"])
  ]);
}
const P2 = /* @__PURE__ */ B(S2, [["render", B2]]);
const Zi = window.Vue.computed, F2 = window.Vuex.useStore, M2 = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: P2,
    SxSectionSelectorSectionListMissing: _2,
    SxSectionSelectorHeader: n2,
    SxSectionSelectorViewArticleItem: jb,
    MwRow: P,
    MwCol: y,
    MwIcon: me,
    SxArticleLanguageSelector: Jm
  },
  setup() {
    const e = F2(), { sectionSuggestion: t } = qe(), {
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = U(e), i = Zi(
      () => {
        var _;
        return j.getPageUrl(n.value, (_ = t.value) == null ? void 0 : _.sourceTitle);
      }
    ), l = Zi(
      () => {
        var _;
        return j.getPageUrl(o.value, (_ = t.value) == null ? void 0 : _.targetTitle);
      }
    ), c = Zi(() => [
      { path: i.value, autonym: s.value },
      { path: l.value, autonym: a.value }
    ]), g = he(), { clearURLParameters: r, setSectionURLParam: u } = G(), d = () => {
      r(), g.push({ name: "dashboard" });
    }, m = Nl(), { selectPageSectionByTitle: p } = Fl(), { isDesktop: h } = cs(), w = Ml();
    return {
      goToDashboard: d,
      mwIconRobot: lw,
      mwIconLabFlask: Hg,
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
}, Ht = window.Vue.resolveComponent, xt = window.Vue.createVNode, N2 = window.Vue.resolveDirective, at = window.Vue.createElementVNode, xo = window.Vue.withDirectives, U2 = window.Vue.renderList, I2 = window.Vue.Fragment, er = window.Vue.openBlock, id = window.Vue.createElementBlock, z2 = window.Vue.createBlock, rd = window.Vue.toDisplayString, ld = window.Vue.createTextVNode, tr = window.Vue.withCtx, R2 = { class: "sx-section-selector" }, O2 = { class: "sx-section-selector__body" }, H2 = { class: "py-2" }, j2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, q2 = { class: "ma-0 pa-0" }, G2 = { class: "sx-section-selector__additional-consideration-title" }, W2 = { href: "#" }, X2 = { class: "sx-section-selector__additional-consideration-title" }, K2 = { href: "#" };
function Y2(e, t, n, o, s, a) {
  const i = Ht("sx-section-selector-header"), l = Ht("sx-article-language-selector"), c = Ht("sx-section-selector-section-list-missing"), g = Ht("sx-section-selector-section-list-present"), r = Ht("sx-section-selector-view-article-item"), u = Ht("mw-icon"), d = Ht("mw-col"), m = Ht("mw-row"), p = N2("i18n");
  return er(), id("section", R2, [
    xt(i, { onClose: o.goToDashboard }, null, 8, ["onClose"]),
    at("section", O2, [
      xt(l),
      xt(c, {
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["onSelectSection", "onClose"]),
      xt(g, { onSelectSection: o.selectSection }, null, 8, ["onSelectSection"]),
      at("section", H2, [
        xo(at("h4", j2, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        at("ul", q2, [
          (er(!0), id(I2, null, U2(o.viewArticleItems, (h, w) => (er(), z2(r, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      xt(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: tr(() => [
          xt(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: tr(() => [
              at("h6", G2, [
                xt(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                ld(" " + rd(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              xo(at("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              xo(at("a", W2, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          xt(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: tr(() => [
              at("h6", X2, [
                xt(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                ld(" " + rd(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              xo(at("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              xo(at("a", K2, null, 512), [
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
const Q2 = /* @__PURE__ */ B(M2, [["render", Y2]]);
const J2 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: Q2
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, Z2 = window.Vue.resolveComponent, e4 = window.Vue.createVNode, t4 = window.Vue.normalizeClass, n4 = window.Vue.openBlock, o4 = window.Vue.createElementBlock;
function s4(e, t, n, o, s, a) {
  const i = Z2("sx-section-selector");
  return n4(), o4("main", {
    class: t4(["sx-section-selector-view", a.classes])
  }, [
    e4(i)
  ], 2);
}
const a4 = /* @__PURE__ */ B(J2, [["render", s4]]), i4 = window.Vue.computed, r4 = window.Vuex.useStore, l4 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = U(
    r4()
  ), o = Ve();
  return i4(() => {
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
const c4 = window.Vue.watch, u4 = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: es },
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
    const n = (s) => t("update:selection", s), o = l4(e);
    return c4(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, d4 = window.Vue.resolveComponent, g4 = window.Vue.createVNode, m4 = window.Vue.openBlock, p4 = window.Vue.createElementBlock, h4 = { class: "sx-content-comparator__source-target-selector" };
function w4(e, t, n, o, s, a) {
  const i = d4("mw-button-group");
  return m4(), p4("div", h4, [
    g4(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const f4 = /* @__PURE__ */ B(u4, [["render", w4]]), dn = window.Vue.computed, _4 = window.Vue.ref, Ul = () => {
  const e = _4([]), { currentTargetPage: t } = gt(), { sectionSuggestion: n } = qe(), { sectionURLParameter: o } = G(), s = dn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = dn(
    () => {
      var d;
      return (((d = i.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), i = dn(
    () => {
      var d;
      return (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: l } = X(), c = dn(() => {
    var d;
    return (d = l.value) == null ? void 0 : d.html;
  }), g = dn(() => {
    var d;
    return (d = i.value) == null ? void 0 : d.html;
  }), r = dn(
    () => {
      var d;
      return (d = n.value) == null ? void 0 : d.missingSections.hasOwnProperty(o.value);
    }
  ), u = dn(
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
const cd = window.Vue.ref, nr = window.Vue.computed, v4 = window.Vue.onMounted, S4 = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: f4,
    MwRow: P,
    MwCol: y,
    MwButton: $e
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
    const n = cd(!1), { sectionSuggestion: o } = qe(), { sectionURLParameter: s } = G(), a = nr(
      () => (s.value || "").replace(/ /g, "_")
    ), i = (d) => t.emit("update:sourceVsTargetSelection", d), { activeSectionTargetTitle: l, targetSectionAnchor: c } = Ul(), g = nr(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: s.value,
            path: `${j.getPageUrl(
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
    }), r = nr(
      () => j.getPageUrl(
        o.value.targetLanguage,
        o.value.targetTitle
      )
    ), u = cd(null);
    return v4(() => {
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
      mwIconLinkExternal: Og,
      mwIconEdit: La,
      updateSelection: i
    };
  }
}, sa = window.Vue.resolveComponent, aa = window.Vue.createVNode, y4 = window.Vue.toDisplayString, C4 = window.Vue.createElementVNode, ia = window.Vue.withCtx, or = window.Vue.openBlock, sr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const k4 = window.Vue.normalizeClass, x4 = ["lang", "dir", "textContent"];
function b4(e, t, n, o, s, a) {
  const i = sa("sx-content-comparator-source-vs-target-selector"), l = sa("mw-col"), c = sa("mw-button"), g = sa("mw-row");
  return or(), sr(g, {
    ref: "contentHeader",
    class: k4(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: ia(() => [
      aa(i, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      aa(g, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: ia(() => [
          aa(l, null, {
            default: ia(() => [
              C4("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: y4(o.activeContent.title)
              }, null, 8, x4)
            ]),
            _: 1
          }),
          aa(l, { shrink: "" }, {
            default: ia(() => [
              o.isSticky ? (or(), sr(c, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (r) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (or(), sr(c, {
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
const $4 = /* @__PURE__ */ B(S4, [["render", b4]]), V4 = window.Vue.computed, D4 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: y,
    MwButton: $e
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const { sectionURLParameter: t } = G(), n = V4(
      () => e.sectionSourceTitles.indexOf(t.value)
    ), { selectPageSectionByTitle: o } = Fl();
    return {
      goToNextSection: () => {
        const i = (n.value + 1) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[i];
        o(l);
      },
      goToPreviousSection: () => {
        const i = (n.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[i];
        o(l);
      },
      mwIconPrevious: ow,
      mwIconArrowForward: ul
    };
  }
}, ud = window.Vue.resolveComponent, dd = window.Vue.createVNode, A4 = window.Vue.withCtx, E4 = window.Vue.openBlock, L4 = window.Vue.createBlock;
function T4(e, t, n, o, s, a) {
  const i = ud("mw-button"), l = ud("mw-col");
  return E4(), L4(l, {
    class: "justify-end",
    align: "center"
  }, {
    default: A4(() => [
      dd(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      dd(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const B4 = /* @__PURE__ */ B(D4, [["render", T4]]);
const P4 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: P,
    MwCol: y,
    MwButton: $e
  },
  props: {
    suggestion: {
      type: qn,
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
    mwIconTrash: zg,
    mwIconUndo: dw
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
}, gd = window.Vue.toDisplayString, F4 = window.Vue.resolveDirective, ar = window.Vue.withDirectives, Ln = window.Vue.openBlock, ra = window.Vue.createElementBlock, M4 = window.Vue.createCommentVNode, N4 = window.Vue.createTextVNode, md = window.Vue.createElementVNode, U4 = window.Vue.normalizeClass, ir = window.Vue.resolveComponent, rr = window.Vue.withCtx, lr = window.Vue.createVNode, pd = window.Vue.createBlock, I4 = { class: "sx-content-comparator-header__mapped-section" }, z4 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, R4 = { key: 0 }, O4 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, H4 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function j4(e, t, n, o, s, a) {
  const i = ir("mw-col"), l = ir("mw-button"), c = ir("mw-row"), g = F4("i18n");
  return Ln(), ra("div", I4, [
    lr(c, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: rr(() => [
        lr(i, { grow: "" }, {
          default: rr(() => [
            md("h6", z4, [
              N4(gd(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? ar((Ln(), ra("span", R4, null, 512)), [
                [g, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : M4("", !0)
            ]),
            md("h6", {
              class: U4(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, gd(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        lr(i, { shrink: "" }, {
          default: rr(() => [
            a.isDiscardedSection ? (Ln(), pd(l, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (Ln(), pd(l, {
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
    a.isDiscardedSection ? ar((Ln(), ra("p", H4, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : ar((Ln(), ra("p", O4, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const q4 = /* @__PURE__ */ B(P4, [["render", j4]]);
const la = window.Vue.computed, G4 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: q4,
    SxContentComparatorHeaderNavigation: B4,
    MwButton: $e,
    MwCol: y,
    MwRow: P,
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
    const { sectionURLParameter: e } = G(), { sourceSection: t } = X(), { sectionSuggestion: n } = qe(), o = la(
      () => {
        var c;
        return (c = n.value) == null ? void 0 : c.missingSections.hasOwnProperty(e.value);
      }
    ), s = la(
      () => {
        var c;
        return (c = n.value) == null ? void 0 : c.presentSections.hasOwnProperty(e.value);
      }
    ), { activeSectionTargetTitle: a } = Ul(), i = la(() => {
      var c;
      return (c = t.value) == null ? void 0 : c.html;
    }), l = la(() => [
      ...Object.keys(n.value.missingSections),
      ...Object.keys(n.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: sw,
      mwIconEdit: La,
      mwIconEye: cw,
      sectionSourceTitles: l,
      sourceSectionContent: i,
      sourceSectionTitle: e,
      suggestion: n,
      getDir: O.getDir
    };
  }
}, Tn = window.Vue.resolveComponent, bt = window.Vue.createVNode, hd = window.Vue.toDisplayString, Wo = window.Vue.createElementVNode, Bn = window.Vue.withCtx, W4 = window.Vue.resolveDirective, wd = window.Vue.withDirectives, cr = window.Vue.openBlock, fd = window.Vue.createBlock, _d = window.Vue.createCommentVNode, X4 = window.Vue.createElementBlock, K4 = { class: "sx-content-comparator__header pa-4" }, Y4 = ["lang", "dir"], Q4 = ["lang", "dir"], J4 = /* @__PURE__ */ Wo("br", null, null, -1);
function Z4(e, t, n, o, s, a) {
  const i = Tn("mw-button"), l = Tn("mw-col"), c = Tn("sx-content-comparator-header-navigation"), g = Tn("mw-row"), r = Tn("mw-icon"), u = Tn("sx-content-comparator-header-mapped-section"), d = W4("i18n");
  return cr(), X4("div", K4, [
    bt(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    bt(g, { class: "my-1 py-2 mx-0" }, {
      default: Bn(() => [
        bt(l, { grow: "" }, {
          default: Bn(() => [
            Wo("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, hd(o.suggestion.sourceTitle), 9, Y4),
            Wo("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, hd(o.sourceSectionTitle), 9, Q4)
          ]),
          _: 1
        }),
        bt(c, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        bt(l, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: Bn(() => [
            bt(i, {
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
    o.isCurrentSectionMissing ? (cr(), fd(g, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: Bn(() => [
        bt(l, {
          shrink: "",
          class: "pe-2"
        }, {
          default: Bn(() => [
            bt(r, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        bt(l, { class: "ma-0" }, {
          default: Bn(() => [
            wd(Wo("strong", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            J4,
            wd(Wo("span", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : _d("", !0),
    o.isCurrentSectionPresent ? (cr(), fd(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : _d("", !0)
  ]);
}
const e3 = /* @__PURE__ */ B(G4, [["render", Z4]]);
const t3 = {
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
}, vd = window.Vue.toDisplayString, n3 = window.Vue.createElementVNode, Sd = window.Vue.openBlock, yd = window.Vue.createElementBlock, o3 = window.Vue.createCommentVNode, s3 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, a3 = ["textContent"], i3 = ["textContent"];
function r3(e, t, n, o, s, a) {
  return Sd(), yd("section", s3, [
    n3("h5", {
      textContent: vd(n.placeholderTitle)
    }, null, 8, a3),
    n.placeholderSubtitle ? (Sd(), yd("p", {
      key: 0,
      textContent: vd(n.placeholderSubtitle)
    }, null, 8, i3)) : o3("", !0)
  ]);
}
const ep = /* @__PURE__ */ B(t3, [["render", r3]]), l3 = window.Vue.computed, c3 = window.Vue.createApp, u3 = window.Vuex.useStore, d3 = () => {
  const e = u3(), { sectionSuggestion: t } = qe(), { currentTargetPage: n } = gt(), o = Ve(), s = () => c3(
    ep,
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
  return l3(() => {
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
const g3 = window.Vue.ref, m3 = window.Vue.computed, p3 = window.Vue.watch, h3 = window.Vuex.useStore, w3 = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: ep,
    SxContentComparatorHeader: e3,
    SxContentComparatorContentHeader: $4,
    MwSpinner: ot
  },
  setup() {
    const e = h3(), t = he(), n = g3("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      Km() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: i,
      isCurrentSectionMapped: l,
      sourceSectionContent: c,
      targetSectionContent: g
    } = Ul(), r = d3(), { sectionSuggestion: u } = qe(), { sourceLanguage: d, targetLanguage: m } = U(e), p = m3(() => u.value.targetTitle), h = Pl();
    return p3(
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
}, ca = window.Vue.resolveComponent, ur = window.Vue.createVNode, Pn = window.Vue.openBlock, Cd = window.Vue.createBlock, kd = window.Vue.createCommentVNode, ua = window.Vue.createElementVNode, dr = window.Vue.Fragment, da = window.Vue.createElementBlock, f3 = { class: "sx-content-comparator" }, _3 = { class: "sx-content-comparator__source-content" }, v3 = ["lang", "dir", "innerHTML"], S3 = ["lang", "dir", "innerHTML"], y3 = ["innerHTML"];
function C3(e, t, n, o, s, a) {
  const i = ca("sx-content-comparator-header"), l = ca("sx-content-comparator-content-header"), c = ca("mw-spinner"), g = ca("sx-content-comparator-new-section-placeholder");
  return Pn(), da("section", f3, [
    ur(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (r) => o.discardedSections = r),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    ur(l, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (r) => o.sourceVsTargetSelection = r),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    ua("section", _3, [
      o.sourceVsTargetSelection === "source_section" ? (Pn(), da(dr, { key: 0 }, [
        o.sourceSectionContent ? kd("", !0) : (Pn(), Cd(c, { key: 0 })),
        ua("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, v3)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (Pn(), da(dr, { key: 1 }, [
        o.targetPageContent ? kd("", !0) : (Pn(), Cd(c, { key: 0 })),
        ua("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, S3)
      ], 64)) : (Pn(), da(dr, { key: 2 }, [
        ua("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, y3),
        ur(g, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const k3 = /* @__PURE__ */ B(w3, [["render", C3]]);
const x3 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: k3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, b3 = window.Vue.resolveComponent, $3 = window.Vue.createVNode, V3 = window.Vue.normalizeClass, D3 = window.Vue.openBlock, A3 = window.Vue.createElementBlock;
function E3(e, t, n, o, s, a) {
  const i = b3("sx-content-comparator");
  return D3(), A3("main", {
    class: V3(["sx-content-comparator-view", a.classes])
  }, [
    $3(i)
  ], 2);
}
const L3 = /* @__PURE__ */ B(x3, [["render", E3]]);
const T3 = window.Vue.resolveDirective, bo = window.Vue.createElementVNode, xd = window.Vue.withDirectives, ga = window.Vue.unref, gr = window.Vue.createVNode, bd = window.Vue.toDisplayString, $d = window.Vue.createTextVNode, $o = window.Vue.withCtx, B3 = window.Vue.openBlock, P3 = window.Vue.createBlock, F3 = { class: "mw-ui-dialog__header px-4 py-3" }, M3 = { class: "mw-ui-dialog__header-title" }, N3 = { class: "pa-4" }, U3 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Vd = window.Codex.CdxButton, I3 = {
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
      const c = T3("i18n");
      return B3(), P3(ga(st), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.gray700
      }, {
        header: $o(() => [
          bo("div", F3, [
            xd(bo("span", M3, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: $o(() => [
          bo("div", U3, [
            gr(ga(Vd), {
              weight: "quiet",
              onClick: s
            }, {
              default: $o(() => [
                $d(bd(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            gr(ga(Vd), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: $o(() => [
                $d(bd(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: $o(() => [
          gr(ga(ts)),
          bo("div", N3, [
            xd(bo("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, z3 = window.Vuex.useStore, Il = () => {
  const e = z3(), { sourceSection: t } = X(), { getCurrentTitleByLanguage: n } = Lt(), o = (l, c, g) => {
    if (l === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const r = t.value.getContentTranslationUnitById(l);
    r instanceof Te ? r.blockTemplateProposedTranslations[c] = g : r instanceof Yt && r.addProposedTranslation(c, g);
  }, s = (l, c) => k(void 0, null, function* () {
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
  }), a = (l, c) => k(void 0, null, function* () {
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
    ), m = (yield K_(
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
}, R3 = window.Vuex.useStore, O3 = () => {
  const { sourceSection: e } = X(), t = R3(), { translateTranslationUnitById: n } = Il();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const mr = window.Vue.computed, H3 = window.Vuex.useStore, j3 = {
  name: "SxTranslationSelector",
  components: { MwCard: He, MwButton: $e, MwDialog: st },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = Y.EMPTY_TEXT_PROVIDER_KEY, o = Y.ORIGINAL_TEXT_PROVIDER_KEY, s = H3(), {
      sourceSection: a,
      isSectionTitleSelected: i,
      selectedContentTranslationUnit: l
    } = X(), { sourceLanguage: c, targetLanguage: g } = U(s), r = mr(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        c.value,
        g.value
      )
    ), u = mr(() => {
      const f = [o, n];
      return r.value.filter(
        (_) => !f.includes(_)
      );
    }), d = mr(
      () => i.value ? a.value.proposedTitleTranslations : l.value.proposedTranslations
    ), m = O3(), p = (f) => {
      m(f), w();
    }, h = Y.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: w,
      emptyTextProviderKey: n,
      getDir: O.getDir,
      getMTProviderLabel: h,
      mwIconClose: yn,
      originalTextProviderKey: o,
      proposedTranslations: d,
      selectProvider: p,
      sourceLanguage: c
    };
  }
}, q3 = window.Vue.resolveDirective, Re = window.Vue.createElementVNode, ma = window.Vue.withDirectives, pr = window.Vue.resolveComponent, hr = window.Vue.createVNode, jt = window.Vue.withCtx, G3 = window.Vue.renderList, W3 = window.Vue.Fragment, wr = window.Vue.openBlock, X3 = window.Vue.createElementBlock, K3 = window.Vue.toDisplayString, Dd = window.Vue.createBlock, Y3 = window.Vue.createCommentVNode, Q3 = { class: "mw-ui-dialog__header pa-4" }, J3 = { class: "row ma-0 py-2" }, Z3 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, e$ = { class: "mb-0" }, t$ = { class: "col shrink justify-center" }, n$ = { class: "pb-2 mb-0" }, o$ = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, s$ = ["dir", "lang", "innerHTML"], a$ = ["textContent"], i$ = ["innerHTML"], r$ = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, l$ = /* @__PURE__ */ Re("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function c$(e, t, n, o, s, a) {
  const i = pr("mw-button"), l = pr("mw-card"), c = pr("mw-dialog"), g = q3("i18n");
  return n.active ? (wr(), Dd(c, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: jt(() => [
      Re("div", Q3, [
        Re("div", J3, [
          Re("div", Z3, [
            ma(Re("h4", e$, null, 512), [
              [g, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Re("div", t$, [
            hr(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        ma(Re("h6", n$, null, 512), [
          [g, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: jt(() => [
      hr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (r) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: jt(() => [
          ma(Re("h5", o$, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: jt(() => [
          Re("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, s$)
        ]),
        _: 1
      }),
      (wr(!0), X3(W3, null, G3(o.apiMtProviders, (r) => (wr(), Dd(l, {
        key: r,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(r)
      }, {
        header: jt(() => [
          Re("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: K3(o.getMTProviderLabel(r))
          }, null, 8, a$)
        ]),
        default: jt(() => [
          Re("p", {
            innerHTML: o.proposedTranslations[r]
          }, null, 8, i$)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      hr(l, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (r) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: jt(() => [
          ma(Re("h5", r$, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: jt(() => [
          l$
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : Y3("", !0);
}
const u$ = /* @__PURE__ */ B(j3, [["render", c$]]), d$ = window.Vuex.useStore, Jn = () => {
  const { sourceSection: e } = X(), t = d$(), { translateTranslationUnitById: n } = Il(), { currentMTProvider: o } = U(t), s = (l) => k(void 0, null, function* () {
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
const Fn = window.Vue.computed, g$ = window.Vuex.useStore, m$ = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: me, MwCol: y },
  setup() {
    const e = g$(), { sourceSection: t, isSectionTitleSelected: n } = X(), o = "sx-sentence-selector__section-title", { currentSourcePage: s } = gt(), { sourceLanguage: a } = U(e), i = Fn(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), l = Fn(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || i.value;
      }
    ), c = Fn(
      () => j.getPageUrl(a.value, i.value)
    ), g = Fn(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), r = Fn(
      () => g.value ? "translated" : "selected"
    ), u = Fn(() => {
      const p = [o];
      return n.value && p.push(`${o}--${r.value}`), p;
    }), { selectTranslationUnitById: d } = Jn();
    return {
      mwIconLinkExternal: Og,
      selectSectionTitle: () => d(0),
      sourceArticlePath: c,
      sourceArticleTitle: i,
      sourceSectionTitle: l,
      titleClasses: u
    };
  }
}, p$ = window.Vue.toDisplayString, fr = window.Vue.createElementVNode, Ad = window.Vue.resolveComponent, h$ = window.Vue.createVNode, w$ = window.Vue.normalizeClass, f$ = window.Vue.withCtx, _$ = window.Vue.openBlock, v$ = window.Vue.createBlock, S$ = ["href"], y$ = ["textContent"], C$ = ["innerHTML"];
function k$(e, t, n, o, s, a) {
  const i = Ad("mw-icon"), l = Ad("mw-col");
  return _$(), v$(l, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: f$(() => [
      fr("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        fr("strong", {
          textContent: p$(o.sourceArticleTitle)
        }, null, 8, y$),
        h$(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, S$),
      fr("h2", {
        class: w$(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...c) => o.selectSectionTitle && o.selectSectionTitle(...c)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, C$)
    ]),
    _: 1
  });
}
const x$ = /* @__PURE__ */ B(m$, [["render", k$]]);
const it = window.Vue.unref, Vo = window.Vue.createVNode, pa = window.Vue.withCtx, Ed = window.Vue.toDisplayString, Ld = window.Vue.createTextVNode, b$ = window.Vue.openBlock, $$ = window.Vue.createBlock, V$ = window.Vue.computed, _r = window.Codex.CdxButton, Td = window.Codex.CdxIcon, tp = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = X(), s = V$(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (b$(), $$(it(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: pa(() => [
        Vo(it(_r), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          disabled: it(n),
          onClick: i[0] || (i[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: pa(() => [
            Vo(it(Td), {
              class: "me-1",
              icon: it(Al)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        Vo(it(_r), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !it(o),
          onClick: i[1] || (i[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: pa(() => [
            Ld(Ed(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Vo(it(_r), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: pa(() => [
            Ld(Ed(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Vo(it(Td), {
              class: "ms-1",
              size: "small",
              icon: it(hs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const gn = window.Vue.unref, D$ = window.Vue.toDisplayString, Do = window.Vue.createVNode, ha = window.Vue.withCtx, A$ = window.Vue.openBlock, E$ = window.Vue.createBlock, vr = window.Vue.computed, L$ = window.Vuex.useStore, T$ = window.Codex.CdxButton, B$ = window.Codex.CdxIcon, P$ = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = L$(), n = vr(() => t.state.application.currentMTProvider), o = Ve(), s = vr(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = vr(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (i, l) => (A$(), E$(gn(y), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: ha(() => [
        Do(gn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: ha(() => [
            Do(gn(y), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: D$(a.value)
            }, null, 8, ["textContent"]),
            Do(gn(y), {
              shrink: "",
              class: "pe-5"
            }, {
              default: ha(() => [
                Do(gn(T$), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  onClick: l[0] || (l[0] = (c) => i.$emit("configure-options"))
                }, {
                  default: ha(() => [
                    Do(gn(B$), {
                      class: "pa-0",
                      icon: gn(Rm)
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
const Je = window.Vue.unref, qt = window.Vue.createVNode, F$ = window.Vue.resolveDirective, Bd = window.Vue.createElementVNode, M$ = window.Vue.withDirectives, Pd = window.Vue.toDisplayString, Fd = window.Vue.createTextVNode, Ao = window.Vue.withCtx, N$ = window.Vue.openBlock, U$ = window.Vue.createElementBlock, I$ = { class: "mt-retry-body pb-5" }, z$ = { class: "retry-body__message" }, Md = window.Codex.CdxButton, Sr = window.Codex.CdxIcon, R$ = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = F$("i18n");
      return N$(), U$("div", I$, [
        Bd("div", z$, [
          qt(Je(Sr), {
            class: "me-2",
            icon: Je(Im)
          }, null, 8, ["icon"]),
          M$(Bd("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        qt(Je(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Ao(() => [
            qt(Je(y), { cols: "6" }, {
              default: Ao(() => [
                qt(Je(Md), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Ao(() => [
                    qt(Je(Sr), {
                      class: "me-1",
                      icon: Je(Om)
                    }, null, 8, ["icon"]),
                    Fd(" " + Pd(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            qt(Je(y), { cols: "6" }, {
              default: Ao(() => [
                qt(Je(Md), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Ao(() => [
                    qt(Je(Sr), {
                      class: "me-1",
                      icon: Je(Vy)
                    }, null, 8, ["icon"]),
                    Fd(" " + Pd(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Mn = window.Vue.createVNode, Ee = window.Vue.unref, Eo = window.Vue.openBlock, O$ = window.Vue.createElementBlock, H$ = window.Vue.createCommentVNode, wa = window.Vue.createBlock, j$ = window.Vue.normalizeClass, q$ = window.Vue.normalizeStyle, Lo = window.Vue.withCtx, G$ = window.Vue.toDisplayString, W$ = window.Vue.createTextVNode, X$ = window.Vue.normalizeProps, K$ = window.Vue.guardReactiveProps, Y$ = ["lang", "dir", "innerHTML"], yr = window.Vue.ref, Q$ = window.Vue.onMounted, J$ = window.Vue.onBeforeUnmount, Cr = window.Vue.computed, Z$ = window.Vue.nextTick, eV = window.Vuex.useStore, tV = window.Codex.CdxButton, nV = window.Codex.CdxIcon, oV = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = yr(0), n = yr(null), o = yr(null), s = eV(), { currentMTProvider: a, targetLanguage: i } = U(s), { sourceSection: l, currentProposedTranslation: c } = X(), g = Cr(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), r = Cr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = Cr(
      () => !!c.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    Q$(() => k(this, null, function* () {
      yield Z$(), d(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), J$(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => d());
    return (p, h) => (Eo(), wa(Ee(He), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Lo(() => [
        Mn(Ee(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Lo(() => [
            Mn(P$, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => p.$emit("configure-options"))
            }, null, 512),
            Mn(Ee(y), {
              class: j$(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value && g.value
              }]),
              style: q$(u.value ? r.value : null)
            }, {
              default: Lo(() => [
                u.value ? (Eo(), O$("section", {
                  key: 0,
                  lang: Ee(i),
                  dir: Ee(O.getDir)(Ee(i)),
                  innerHTML: Ee(c)
                }, null, 8, Y$)) : g.value ? (Eo(), wa(Ee(ot), { key: 1 })) : (Eo(), wa(R$, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Mn(Ee(y), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Lo(() => [
                u.value || g.value ? (Eo(), wa(Ee(tV), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: h[3] || (h[3] = (w) => p.$emit("edit-translation", Ee(c)))
                }, {
                  default: Lo(() => [
                    Mn(Ee(nV), {
                      class: "me-1",
                      icon: Ee(Vl)
                    }, null, 8, ["icon"]),
                    W$(" " + G$(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : H$("", !0),
                Mn(tp, X$(K$(p.$attrs)), null, 16)
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
}, sV = window.Vue.computed, aV = (e) => sV(() => {
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
const iV = window.Vue.onMounted, rV = window.Vue.ref, lV = window.Vue.computed, cV = {
  name: "SubSection",
  props: {
    subSection: {
      type: Te,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = rV(null), o = aV(e.subSection);
    iV(() => {
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
    const { selectTranslationUnitById: s } = Jn(), a = (l) => {
      if (l.selected) {
        t("bounce-translation");
        return;
      }
      s(l.id);
    }, i = lV(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, uV = window.Vue.normalizeClass, dV = window.Vue.openBlock, gV = window.Vue.createElementBlock, mV = ["innerHTML"];
function pV(e, t, n, o, s, a) {
  return dV(), gV("div", {
    ref: "subSectionRoot",
    class: uV(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, mV);
}
const hV = /* @__PURE__ */ B(cV, [["render", pV]]);
const Nd = window.Vue.computed, wV = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: Gg,
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
    const t = Nd(() => ({ "--size": e.size })), n = Nd(
      () => !e.isTemplateAdapted || e.percentage === 0 ? gl : Hn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, Ud = window.Vue.resolveComponent, Id = window.Vue.createVNode, zd = window.Vue.normalizeStyle, fV = window.Vue.openBlock, _V = window.Vue.createElementBlock;
function vV(e, t, n, o, s, a) {
  const i = Ud("mw-circle-progress-bar"), l = Ud("mw-icon");
  return fV(), _V("div", {
    class: "block-template-status-indicator",
    style: zd(o.cssVars)
  }, [
    Id(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    Id(l, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: zd({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const np = /* @__PURE__ */ B(wV, [["render", vV]]), SV = window.Vuex.useStore, To = window.Vue.computed, yV = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: y,
    MwRow: P,
    MwButton: $e,
    MwIcon: me,
    MwRadioGroup: jg,
    MwRadio: Aa,
    MwDivider: ts,
    MwDialog: st,
    MwCircleProgressBar: Gg,
    BlockTemplateStatusIndicator: np
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
    const { targetLanguageAutonym: t } = U(SV()), n = To(
      () => !e.isTemplateAdapted || o.value === 0 ? gl : Hn
    ), o = To(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = Ve(), a = To(() => {
      let c;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? c = "cx-sx-block-template-mapping-status-title-partially-template" : c = "cx-sx-block-template-mapping-status-title-fully-template" : c = "cx-sx-block-template-mapping-status-title-unadapted-template" : c = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(c);
    }), i = To(() => {
      let c;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? c = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? c = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : c = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(c);
    }), l = To(() => {
      let c = [];
      if (!e.targetTemplateExists)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: ww,
          color: Oe.gray500
        });
      else if (!e.isTemplateAdapted)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: yn,
          color: Oe.gray500
        });
      else if (o.value < 100)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: Hn,
          color: Oe.blue600
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
          icon: Hn,
          color: Oe.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: La,
        color: Oe.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: Qh,
        color: Oe.gray500
      }), c;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: Hn,
      mwIconInfo: Zh,
      notes: l
    };
  }
}, Bo = window.Vue.resolveComponent, Po = window.Vue.openBlock, fa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Nn = window.Vue.withCtx, Fo = window.Vue.createVNode, kr = window.Vue.toDisplayString, xr = window.Vue.createElementVNode, CV = window.Vue.renderList, kV = window.Vue.Fragment, xV = window.Vue.createElementBlock, bV = { class: "pa-4" }, $V = ["textContent"], VV = ["textContent"];
function DV(e, t, n, o, s, a) {
  const i = Bo("block-template-status-indicator"), l = Bo("mw-icon"), c = Bo("mw-col"), g = Bo("mw-row"), r = Bo("mw-dialog");
  return Po(), fa(r, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: Nn(() => [
      Fo(g, {
        justify: "center",
        class: "mt-4"
      }, {
        default: Nn(() => [
          Fo(c, { shrink: "" }, {
            default: Nn(() => [
              n.targetTemplateExists ? (Po(), fa(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (Po(), fa(l, {
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
    default: Nn(() => [
      xr("div", bV, [
        xr("h3", {
          textContent: kr(o.statusText)
        }, null, 8, $V),
        xr("p", {
          class: "mt-6 text-small",
          textContent: kr(o.statusExplanation)
        }, null, 8, VV),
        (Po(!0), xV(kV, null, CV(o.notes, (u, d) => (Po(), fa(g, {
          key: d,
          align: "start",
          class: "mt-4"
        }, {
          default: Nn(() => [
            Fo(c, { shrink: "" }, {
              default: Nn(() => [
                Fo(l, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            Fo(c, {
              textContent: kr(u.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const AV = /* @__PURE__ */ B(yV, [["render", DV]]);
const de = window.Vue.unref, _e = window.Vue.createVNode, rt = window.Vue.withCtx, br = window.Vue.toDisplayString, Rd = window.Vue.createTextVNode, EV = window.Vue.resolveDirective, Od = window.Vue.withDirectives, Hd = window.Vue.createElementVNode, LV = window.Vue.normalizeClass, _a = window.Vue.openBlock, jd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const qd = window.Vue.createBlock, TV = window.Vue.normalizeProps, BV = window.Vue.guardReactiveProps, PV = { class: "block-template-adaptation-card__container pa-4" }, FV = ["textContent"], MV = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, xe = window.Vue.computed, NV = window.Vue.ref, UV = window.Vuex.useStore, Gd = window.Codex.CdxButton, Wd = window.Codex.CdxIcon, IV = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = UV(), { targetLanguageAutonym: n, currentMTProvider: o } = U(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = X(), i = xe(() => {
      var L;
      return ((L = s.value) == null ? void 0 : L.blockTemplateTranslatedContent) || a.value;
    }), l = xe(
      () => {
        var A;
        return (A = s.value) == null ? void 0 : A.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), c = xe(
      () => {
        var A;
        return !((A = t.state.application.mtRequestsPending) != null && A.includes(
          s.value.id
        ));
      }
    ), g = Ve(), r = xe(
      // Strip HTML comments and return
      () => {
        var A, L;
        return ((L = (A = s.value) == null ? void 0 : A.sourceBlockTemplateName) == null ? void 0 : L.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), u = xe(
      () => {
        var A;
        return (A = s.value.blockTemplateAdaptationInfo) == null ? void 0 : A[o.value];
      }
    ), d = xe(
      () => {
        var A, L;
        return ((A = u.value) == null ? void 0 : A.adapted) || !!((L = u.value) != null && L.partial);
      }
    ), m = xe(() => u.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), p = xe(() => u.value ? d.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = xe(
      () => {
        var A;
        return Object.keys(((A = s.value) == null ? void 0 : A.sourceTemplateParams) || {}).length;
      }
    ), w = xe(() => {
      var L;
      const A = (L = s.value) == null ? void 0 : L.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(A || {});
    }), f = xe(() => w.value.length), _ = xe(() => {
      const A = E.value;
      return h.value + A === 0 ? 100 : f.value / (h.value + A) * 100 || 0;
    }), S = NV(!1), b = () => {
      S.value = !0;
    }, D = (A) => A.filter((L) => !w.value.includes(L)), E = xe(() => {
      var L;
      const A = ((L = u.value) == null ? void 0 : L.mandatoryTargetParams) || [];
      return D(A).length;
    }), F = xe(() => {
      var L;
      const A = ((L = u.value) == null ? void 0 : L.optionalTargetParams) || [];
      return D(A).length;
    });
    return (A, L) => {
      const se = EV("i18n");
      return _a(), qd(de(He), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: rt(() => [
          Hd("div", PV, [
            _e(de(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: rt(() => [
                _e(de(y), { shrink: "" }, {
                  default: rt(() => [
                    _e(de(Wd), {
                      icon: de(Dy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                _e(de(y), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: rt(() => [
                    Rd(br(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            l.value ? (_a(), jd("div", {
              key: 0,
              class: LV(["pa-4 mb-4", m.value])
            }, [
              _e(de(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: rt(() => [
                  Od(_e(de(y), { tag: "h5" }, null, 512), [
                    [se, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  _e(de(y), { shrink: "" }, {
                    default: rt(() => [
                      _e(np, {
                        percentage: _.value,
                        size: 20,
                        "is-template-adapted": d.value,
                        "stroke-width": 2,
                        onClick: b
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Hd("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: br(l.value)
              }, null, 8, FV),
              _e(de(Gd), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: L[0] || (L[0] = (W) => A.$emit("edit-translation", i.value))
              }, {
                default: rt(() => [
                  Rd(br(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : c.value ? (_a(), jd("div", MV, [
              _e(de(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: rt(() => [
                  Od(_e(de(y), { tag: "h5" }, null, 512), [
                    [se, [
                      de(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  _e(de(y), { shrink: "" }, {
                    default: rt(() => [
                      _e(de(Gd), { weight: "quiet" }, {
                        default: rt(() => [
                          _e(de(Wd), {
                            icon: de(by),
                            onClick: b
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
            ])) : (_a(), qd(de(ot), { key: 2 }))
          ]),
          _e(tp, TV(BV(A.$attrs)), null, 16),
          _e(AV, {
            active: S.value,
            "onUpdate:active": L[1] || (L[1] = (W) => S.value = W),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": E.value,
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
const zV = window.Vue.computed, RV = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: es },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = X(), o = Ve();
    return { scopeOptions: zV(() => [
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
}, OV = window.Vue.resolveComponent, HV = window.Vue.createVNode, jV = window.Vue.openBlock, qV = window.Vue.createElementBlock, GV = { class: "translated-segment-card-header" };
function WV(e, t, n, o, s, a) {
  const i = OV("mw-button-group");
  return jV(), qV("div", GV, [
    HV(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const XV = /* @__PURE__ */ B(RV, [["render", WV]]);
const Gt = window.Vue.unref, va = window.Vue.createVNode, $r = window.Vue.withCtx, KV = window.Vue.openBlock, YV = window.Vue.createBlock, QV = window.Vue.computed, Xd = window.Codex.CdxButton, Kd = window.Codex.CdxIcon, JV = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = X(), o = QV(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (KV(), YV(Gt(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: $r(() => [
        va(Gt(Xd), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Gt(n),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: $r(() => [
            va(Gt(Kd), { icon: Gt(Al) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        va(Gt(Xd), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: $r(() => [
            va(Gt(Kd), { icon: Gt(hs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const ZV = window.Vue.useCssVars, Se = window.Vue.createVNode, Yd = window.Vue.resolveDirective, e5 = window.Vue.createElementVNode, Vr = window.Vue.withDirectives, ae = window.Vue.unref, t5 = window.Vue.normalizeStyle, Sa = window.Vue.openBlock, Qd = window.Vue.createElementBlock, n5 = window.Vue.createCommentVNode, o5 = window.Vue.normalizeClass, Ie = window.Vue.withCtx, s5 = window.Vue.toDisplayString, a5 = window.Vue.createTextVNode, Jd = window.Vue.createBlock, i5 = window.Vue.normalizeProps, r5 = window.Vue.guardReactiveProps, $t = window.Vue.computed, l5 = window.Vue.ref, c5 = window.Vue.inject, u5 = window.Vuex.useStore, d5 = window.Codex.CdxButton, Dr = window.Codex.CdxIcon, g5 = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    ZV((_) => ({
      "4929555c": f.value
    }));
    const t = l5("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = X(), { targetLanguage: a } = U(u5()), i = $t(() => t.value === "sentence"), l = $t(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (S) => {
            var b;
            return S.id === ((b = o.value) == null ? void 0 : b.id);
          }
        )
      )
    ), c = $t(() => {
      var _;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (_ = o.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), g = c5("colors"), r = g.gray200, u = g.red600, d = $t(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : l.value.translatedContent), m = $t(
      () => Jt.calculateScore(
        d.value,
        c.value,
        a.value
      )
    ), p = $t(
      () => Jt.getScoreStatus(m.value)
    ), h = $t(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = $t(() => ({
      failure: m.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), f = $t(
      () => w.value[p.value]
    );
    return (_, S) => {
      const b = Yd("i18n"), D = Yd("i18n-html");
      return Sa(), Jd(ae(He), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ie(() => [
          Se(ae(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ie(() => [
              Se(XV, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Se(ae(y), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ie(() => [
                  Se(ae(P), { class: "ma-0" }, {
                    default: Ie(() => [
                      Se(ae(y), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ie(() => [
                          Vr(e5("h5", null, null, 512), [
                            [b, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Vr((Sa(), Qd("p", {
                            key: 0,
                            style: t5({ color: ae(u) })
                          }, null, 4)), [
                            [b, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Vr((Sa(), Qd("p", {
                            key: 1,
                            class: o5(h.value)
                          }, null, 2)), [
                            [D, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Se(ae(y), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ie(() => [
                          Se(ae(P), { class: "ma-0 ms-2" }, {
                            default: Ie(() => [
                              Se(ae(y), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ie(() => [
                                  Se(ae(Dr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ae(Ly)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Se(ae(y), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ie(() => [
                                  Se(ae(qg), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: ae(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Se(ae(y), { shrink: "" }, {
                                default: Ie(() => [
                                  Se(ae(Dr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ae(Ay)
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
                  i.value ? (Sa(), Jd(ae(d5), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (E) => _.$emit("edit-translation", d.value))
                  }, {
                    default: Ie(() => [
                      Se(ae(Dr), {
                        class: "me-1",
                        icon: ae(Vl)
                      }, null, 8, ["icon"]),
                      a5(" " + s5(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : n5("", !0)
                ]),
                _: 1
              }),
              Se(ae(y), { class: "translated-segment-card__actions" }, {
                default: Ie(() => [
                  Se(JV, i5(r5(_.$attrs)), null, 16)
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
}, m5 = window.Vuex.useStore, p5 = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = X(), n = m5(), { selectNextTranslationUnit: o, selectTranslationUnitById: s } = Jn();
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
}, op = window.Vuex.useStore, h5 = () => {
  const e = op(), { sourceLanguage: t, targetLanguage: n } = U(e);
  return () => k(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Fa.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, w5 = () => {
  const e = op(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = U(e), s = h5();
  return () => k(void 0, null, function* () {
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
}, f5 = window.Vue.computed, _5 = (e) => {
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
}, v5 = () => {
  const { selectedContentTranslationUnit: e } = X(), t = f5(
    () => e.value instanceof Te
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && _5(o);
  };
}, S5 = (e, t) => {
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
}, y5 = window.Vue.computed, sp = () => {
  const { currentTranslation: e } = us(), { currentSourcePage: t } = gt();
  return y5(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, C5 = window.Vuex.useStore, zl = () => {
  const e = C5(), { sourceSection: t, targetPageTitleForPublishing: n } = X(), { pageURLParameter: o } = G(), { sourceLanguage: s, targetLanguage: a } = U(e), i = sp();
  return () => {
    const l = n.value, c = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (m) => S5(m, c)
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
}, k5 = window.Vue.effectScope, x5 = window.Vue.onScopeDispose, b5 = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = k5(!0), n = o.run(() => e(...a))), x5(s), n);
}, $5 = window.Vuex.useStore;
let Ar;
const V5 = () => {
  const e = $5(), t = zl();
  let n = 1e3, o = 0;
  return Ar = El(() => t().then((a) => {
    a instanceof jn ? (n *= o + 1, o++, setTimeout(Ar, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Kn)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Ar;
}, ap = b5(V5), D5 = window.Vuex.useStore, A5 = () => {
  const e = D5(), t = ap(), { currentMTProvider: n } = U(e), { sourceSection: o, currentProposedTranslation: s } = X(), { selectNextTranslationUnit: a } = Jn();
  return () => k(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, E5 = window.Vuex.useStore, L5 = () => {
  const e = E5(), t = ap();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
};
const ee = window.Vue.unref, ze = window.Vue.createVNode, Vt = window.Vue.withCtx, T5 = window.Vue.resolveDirective, Zd = window.Vue.createElementVNode, B5 = window.Vue.withDirectives, P5 = window.Vue.toDisplayString, F5 = window.Vue.createTextVNode, M5 = window.Vue.renderList, N5 = window.Vue.Fragment, Wt = window.Vue.openBlock, eg = window.Vue.createElementBlock, Un = window.Vue.createBlock;
window.Vue.createCommentVNode;
const U5 = window.Vue.normalizeClass, I5 = window.Vue.normalizeStyle, z5 = { class: "sx-sentence-selector__header-title mb-0" }, R5 = { class: "sx-sentence-selector__section-contents px-4" }, In = window.Vue.computed, O5 = window.Vue.nextTick, H5 = window.Vue.onMounted, ya = window.Vue.ref, tg = window.Vue.watch, j5 = window.Vuex.useStore, ng = window.Codex.CdxButton, q5 = window.Codex.CdxIcon, G5 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ya(!1), n = ya(!1), o = ya("100%"), s = j5(), { currentMTProvider: a, sourceLanguage: i, targetLanguage: l } = U(s), { sourceSection: c, selectedContentTranslationUnit: g } = X(), r = In(
      () => s.state.application.translationDataLoadingCounter === 0
    ), u = In(
      () => {
        var J;
        return (J = c.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), d = In(() => {
      var J;
      return (J = c.value) == null ? void 0 : J.subSections;
    }), m = In(
      () => {
        var J;
        return (J = c.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), p = In(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), h = dt(), w = p5();
    w5()();
    const _ = v5();
    H5(() => {
      tg(
        r,
        () => k(this, null, function* () {
          r.value && (yield O5(), w(), _());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), tg(g, _);
    const {
      selectNextTranslationUnit: S,
      selectPreviousTranslationUnit: b
    } = Jn(), D = A5(), E = () => {
      h({
        event_type: "editor_segment_add",
        translation_source_language: i.value,
        translation_target_language: l.value
      }), D();
    }, F = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, A = he(), L = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        Pe.value = !0;
        return;
      }
      K();
    }, { fetchTranslationsByStatus: se } = za(), W = L5(), { clearURLParameters: I } = G(), K = () => k(this, null, function* () {
      se("draft"), c.value.reset(), I(), W(), yield A.push({ name: "dashboard" });
      const { currentTranslation: J } = s.state.application;
      J && (s.commit("application/setCurrentTranslationRestored", !1), s.commit("application/setCurrentTranslation", null));
    }), {
      translateTranslationUnitById: ce,
      translateSelectedTranslationUnitForAllProviders: Ge
    } = Il(), Cn = () => {
      Xe.value || (t.value = !0, Ge());
    }, { getCurrentTitleByLanguage: Tt } = Lt(), We = (J, ue) => {
      A.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: m.value,
          title: Tt(
            l.value,
            i.value
          ),
          isInitialEdit: ue || null
        }
      });
    }, Zn = () => A.push({ name: "sx-publisher" }), nn = () => k(this, null, function* () {
      g.value ? yield ce(
        g.value.id,
        a.value
      ) : yield ce(0, a.value);
    }), Xe = In(
      () => g.value instanceof Te
    ), Pe = ya(!1);
    return (J, ue) => {
      const on = T5("i18n");
      return Wt(), eg("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: I5(p.value)
      }, [
        ze(ee(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Vt(() => [
            ze(ee(y), { shrink: "" }, {
              default: Vt(() => [
                ze(ee(ng), {
                  weight: "quiet",
                  class: "px-3",
                  onClick: L
                }, {
                  default: Vt(() => [
                    ze(ee(q5), { icon: ee(zm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ze(ee(y), {
              grow: "",
              class: "px-1"
            }, {
              default: Vt(() => [
                B5(Zd("h4", z5, null, 512), [
                  [on, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ze(ee(y), {
              shrink: "",
              class: "px-3"
            }, {
              default: Vt(() => [
                ze(ee(ng), {
                  disabled: !(ee(c) && ee(c).isTranslated),
                  onClick: Zn
                }, {
                  default: Vt(() => [
                    F5(P5(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? (Wt(), Un(ee(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Vt(() => [
            ze(ee(y), {
              dir: ee(O.getDir)(ee(i)),
              lang: ee(i),
              class: "sx-sentence-selector__section"
            }, {
              default: Vt(() => [
                ze(x$),
                Zd("div", R5, [
                  (Wt(!0), eg(N5, null, M5(d.value, (ie) => (Wt(), Un(hV, {
                    id: ie.id,
                    key: `sub-section-${ie.id}`,
                    "sub-section": ie,
                    onBounceTranslation: F
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Xe.value && u.value ? (Wt(), Un(g5, {
              key: 0,
              onEditTranslation: ue[0] || (ue[0] = (ie) => We(ie, !1)),
              onSkipTranslation: ee(S),
              onSelectPreviousSegment: ee(b)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : Xe.value ? (Wt(), Un(IV, {
              key: 2,
              onEditTranslation: We,
              onApplyTranslation: E,
              onSkipTranslation: ee(S),
              onSelectPreviousSegment: ee(b)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Wt(), Un(oV, {
              key: 1,
              class: U5({ "mb-0": !n.value }),
              onConfigureOptions: Cn,
              onEditTranslation: ue[1] || (ue[1] = (ie) => We(ie, !0)),
              onApplyTranslation: E,
              onSkipTranslation: ee(S),
              onSelectPreviousSegment: ee(b),
              onRetryTranslation: nn
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Wt(), Un(ee(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Vt(() => [
            ze(ee(ot), { class: "mt-0" })
          ]),
          _: 1
        })),
        ze(u$, {
          active: t.value,
          "onUpdate:active": ue[2] || (ue[2] = (ie) => t.value = ie)
        }, null, 8, ["active"]),
        ze(I3, {
          modelValue: Pe.value,
          "onUpdate:modelValue": ue[3] || (ue[3] = (ie) => Pe.value = ie),
          onDiscardTranslation: K
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const W5 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: G5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, X5 = window.Vue.resolveComponent, K5 = window.Vue.createVNode, Y5 = window.Vue.normalizeClass, Q5 = window.Vue.openBlock, J5 = window.Vue.createElementBlock;
function Z5(e, t, n, o, s, a) {
  const i = X5("sx-sentence-selector");
  return Q5(), J5("main", {
    class: Y5(["sx-sentence-selector-view", a.classes])
  }, [
    K5(i)
  ], 2);
}
const eD = /* @__PURE__ */ B(W5, [["render", Z5]]), tD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, nD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const oD = window.Vue.resolveDirective, Ca = window.Vue.withDirectives, Ze = window.Vue.openBlock, Dt = window.Vue.createElementBlock, ka = window.Vue.createCommentVNode, xa = window.Vue.Transition, mn = window.Vue.withCtx, zn = window.Vue.createVNode, Mo = window.Vue.createElementVNode, pn = window.Vue.unref, sD = window.Vue.renderList, aD = window.Vue.Fragment, iD = window.Vue.normalizeClass, og = window.Vue.createBlock, rD = window.Vue.toDisplayString, lD = window.Vue.createTextVNode, cD = { class: "sx-quick-tutorial" }, uD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, dD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, gD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, mD = { class: "sx-quick-tutorial__illustration" }, pD = ["innerHTML"], hD = ["innerHTML"], wD = { class: "sx-quick-tutorial__step-indicator py-3" }, fD = ["onClick"], _D = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, vD = {
  key: "secondary-point-1",
  class: "ma-0"
}, SD = {
  key: "secondary-point-2",
  class: "ma-0"
}, yD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, sg = window.Vue.ref, ag = window.Codex.CdxButton, CD = window.Codex.CdxIcon, kD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = sg(2), n = sg(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (l) => l === n.value, a = he(), i = () => a.push({ name: "sx-sentence-selector" });
    return (l, c) => {
      const g = oD("i18n");
      return Ze(), Dt("section", cD, [
        zn(pn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: mn(() => [
            Mo("section", uD, [
              zn(xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: mn(() => [
                  s(1) ? Ca((Ze(), Dt("h2", dD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Ca((Ze(), Dt("h2", gD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ka("", !0)
                ]),
                _: 1
              })
            ]),
            Mo("section", mD, [
              zn(xa, { name: "mw-ui-animation-slide-left" }, {
                default: mn(() => [
                  s(1) ? (Ze(), Dt("div", {
                    key: "illustration-1",
                    innerHTML: pn(nD)
                  }, null, 8, pD)) : s(2) ? (Ze(), Dt("div", {
                    key: "illustration-2",
                    innerHTML: pn(tD)
                  }, null, 8, hD)) : ka("", !0)
                ]),
                _: 1
              })
            ]),
            Mo("div", wD, [
              (Ze(!0), Dt(aD, null, sD(t.value, (r) => (Ze(), Dt("span", {
                key: `dot-${r}`,
                class: iD(["dot mx-1", { "dot-active": s(r) }]),
                role: "button",
                onClick: (u) => n.value = r
              }, null, 10, fD))), 128))
            ]),
            Mo("section", _D, [
              zn(xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: mn(() => [
                  s(1) ? Ca((Ze(), Dt("h3", vD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Ca((Ze(), Dt("h3", SD, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ka("", !0)
                ]),
                _: 1
              })
            ]),
            Mo("div", yD, [
              zn(xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: mn(() => [
                  s(1) ? (Ze(), og(pn(ag), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": l.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: mn(() => [
                      zn(pn(CD), { icon: pn(hs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Ze(), og(pn(ag), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: i
                  }, {
                    default: mn(() => [
                      lD(rD(l.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : ka("", !0)
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
const xD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: kD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, bD = window.Vue.resolveComponent, $D = window.Vue.createVNode, VD = window.Vue.normalizeClass, DD = window.Vue.openBlock, AD = window.Vue.createElementBlock;
function ED(e, t, n, o, s, a) {
  const i = bD("sx-quick-tutorial");
  return DD(), AD("main", {
    class: VD(["sx-quick-tutorial-view", a.classes])
  }, [
    $D(i)
  ], 2);
}
const LD = /* @__PURE__ */ B(xD, [["render", ED]]);
const ig = window.Vue.ref, TD = window.Vue.onMounted;
function BD(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = j.getPageUrl(t, o.title), o.target = "_blank";
}
const PD = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: H0 },
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
    const t = ig(null), n = ig(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return TD(() => {
      n.value = 2 * o(), BD(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, FD = window.Vue.resolveDirective, rg = window.Vue.createElementVNode, MD = window.Vue.withDirectives, ND = window.Vue.resolveComponent, UD = window.Vue.withCtx, ID = window.Vue.createVNode, zD = window.Vue.openBlock, RD = window.Vue.createElementBlock, OD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, HD = { class: "sx-editor__original-content-panel__header mb-2" }, jD = ["lang", "dir", "innerHTML"];
function qD(e, t, n, o, s, a) {
  const i = ND("mw-expandable-content"), l = FD("i18n");
  return zD(), RD("section", OD, [
    MD(rg("h5", HD, null, 512), [
      [l, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    ID(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: UD(() => [
        rg("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, jD)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const GD = /* @__PURE__ */ B(PD, [["render", qD]]), WD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const Er = window.Vue.computed, XD = window.Vuex.useStore, KD = {
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
    const { targetLanguage: t } = U(XD()), n = Er(
      () => Jt.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = Er(() => {
      const a = Jt.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = Er(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: WD,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, No = window.Vue.createElementVNode, lg = window.Vue.resolveDirective, Lr = window.Vue.withDirectives, YD = window.Vue.normalizeClass, QD = window.Vue.openBlock, JD = window.Vue.createElementBlock, ZD = window.Vue.createCommentVNode, eA = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, tA = { class: "sx-editor__feedback-overlay-content px-4" }, nA = ["innerHTML"], oA = { class: "sx-editor__feedback-overlay-content__title" }, sA = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function aA(e, t, n, o, s, a) {
  const i = lg("i18n"), l = lg("i18n-html");
  return n.showFeedback ? (QD(), JD("div", eA, [
    No("div", tA, [
      No("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, nA),
      Lr(No("h2", oA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      Lr(No("p", sA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      Lr(No("p", {
        class: YD(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [l, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : ZD("", !0);
}
const iA = /* @__PURE__ */ B(KD, [["render", aA]]), rA = window.Vuex.useStore, lA = () => {
  const e = rA(), t = zl(), { selectNextTranslationUnit: n } = Jn(), { sourceSection: o, selectedContentTranslationUnit: s } = X(), { getCurrentTitleByLanguage: a } = Lt();
  return (i) => k(void 0, null, function* () {
    const l = document.createElement("div");
    l.innerHTML = i, l.querySelectorAll(".sx-edit-dummy-node").forEach((u) => u.remove()), i = l.innerHTML;
    const { sourceLanguage: c, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof Te && (i = (yield im(
      i,
      a(g, c),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const Tr = window.Vue.ref, cA = window.Vue.computed, uA = window.Vuex.useStore, dA = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: iA,
    MwRow: P,
    SxEditorOriginalContent: GD,
    VisualEditor: c8,
    MwSpinner: ot
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Tr(!1), n = he(), o = uA(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: l, content: c, originalContent: g, title: r } = history.state, u = Tr(null), d = Tr(!1), m = dt(), { targetLanguage: p, sourceLanguage: h } = U(o), { sourceSection: w } = X(), f = cA(
      () => Jt.calculateScore(
        u.value,
        c,
        p.value
      )
    ), _ = lA(), S = (b) => k(this, null, function* () {
      u.value = b, d.value = !0;
      const D = new Promise((F) => setTimeout(F, 2e3));
      let E = Promise.resolve();
      i ? w.value.editedTranslation = b : (f.value === 0 && l && m({
        event_type: "editor_segment_add",
        translation_source_language: h.value,
        translation_target_language: p.value
      }), E = _(b)), yield Promise.all([D, E]), d.value = !1, a();
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
}, Uo = window.Vue.resolveComponent, Br = window.Vue.openBlock, Pr = window.Vue.createBlock, cg = window.Vue.createCommentVNode, ug = window.Vue.createVNode, gA = window.Vue.createElementVNode, mA = window.Vue.withCtx, pA = { class: "sx-editor__editing-surface-container grow" };
function hA(e, t, n, o, s, a) {
  const i = Uo("sx-editor-original-content"), l = Uo("mw-spinner"), c = Uo("edit-complete-feedback"), g = Uo("visual-editor"), r = Uo("mw-row");
  return Br(), Pr(r, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: mA(() => [
      o.originalContent ? (Br(), Pr(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : cg("", !0),
      o.editorReady ? cg("", !0) : (Br(), Pr(l, { key: 1 })),
      gA("div", pA, [
        ug(c, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        ug(g, {
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
const wA = /* @__PURE__ */ B(dA, [["render", hA]]);
const fA = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: wA
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
}, _A = window.Vue.resolveComponent, vA = window.Vue.createVNode, SA = window.Vue.normalizeClass, yA = window.Vue.openBlock, CA = window.Vue.createElementBlock;
function kA(e, t, n, o, s, a) {
  const i = _A("sx-editor");
  return yA(), CA("main", {
    class: SA(["sx-editor-view", a.classes])
  }, [
    vA(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const xA = /* @__PURE__ */ B(fA, [["render", kA]]);
const lt = window.Vue.unref, hn = window.Vue.createVNode, Io = window.Vue.withCtx, bA = window.Vue.resolveDirective, $A = window.Vue.withDirectives, VA = window.Vue.openBlock, DA = window.Vue.createBlock, dg = window.Codex.CdxButton, gg = window.Codex.CdxIcon, AA = {
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
      const a = bA("i18n");
      return VA(), DA(lt(P), { class: "ma-0 sx-publisher__header" }, {
        default: Io(() => [
          hn(lt(y), {
            shrink: "",
            class: "me-2"
          }, {
            default: Io(() => [
              hn(lt(dg), {
                class: "px-3",
                weight: "quiet",
                onClick: n
              }, {
                default: Io(() => [
                  hn(lt(gg), { icon: lt(Ia) }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          $A(hn(lt(y), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          hn(lt(y), { shrink: "" }, {
            default: Io(() => [
              hn(lt(dg), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: Io(() => [
                  hn(lt(gg), { icon: lt(ky) }, null, 8, ["icon"])
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
}, EA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, LA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, mg = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const TA = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: st, MwRow: P, MwCol: y },
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
        svg: EA,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: LA,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: mg,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: mg,
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
}, Fr = window.Vue.createElementVNode, pg = window.Vue.toDisplayString, Mr = window.Vue.resolveComponent, Nr = window.Vue.withCtx, hg = window.Vue.createVNode, BA = window.Vue.openBlock, PA = window.Vue.createBlock, FA = window.Vue.createCommentVNode, MA = ["innerHTML"], NA = ["textContent"], UA = ["textContent"];
function IA(e, t, n, o, s, a) {
  const i = Mr("mw-col"), l = Mr("mw-row"), c = Mr("mw-dialog");
  return n.active ? (BA(), PA(c, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: Nr(() => [
      hg(l, { class: "ma-4" }, {
        default: Nr(() => [
          hg(i, null, {
            default: Nr(() => [
              Fr("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, MA),
              Fr("h2", {
                textContent: pg(a.animationTitle)
              }, null, 8, NA),
              Fr("p", {
                class: "ma-0",
                textContent: pg(a.animationSubtitle)
              }, null, 8, UA)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : FA("", !0);
}
const zA = /* @__PURE__ */ B(TA, [["render", IA]]);
const Le = window.Vue.unref, et = window.Vue.createVNode, At = window.Vue.withCtx, RA = window.Vue.resolveDirective, OA = window.Vue.withDirectives, wg = window.Vue.toDisplayString, HA = window.Vue.createTextVNode, Ur = window.Vue.openBlock, fg = window.Vue.createElementBlock, jA = window.Vue.createCommentVNode, ip = window.Vue.createElementVNode, qA = window.Vue.createBlock, GA = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, WA = ["src"], XA = ["textContent"], KA = /* @__PURE__ */ ip("p", { class: "mt-0" }, null, -1), YA = window.Vue.computed, QA = window.Vue.inject, JA = window.Vue.ref, _g = window.Codex.CdxButton, ZA = window.Codex.CdxIcon, eE = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: em,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = JA(""), s = () => n("close"), a = () => n("publish", o.value), i = QA("breakpoints"), l = YA(() => i.value.mobile);
    return (c, g) => {
      const r = RA("i18n");
      return e.active && e.captchaDetails ? (Ur(), qA(Le(st), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: At(() => [
          et(Le(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: At(() => [
              et(Le(y), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: At(() => [
                  et(Le(_g), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    onClick: s
                  }, {
                    default: At(() => [
                      et(Le(ZA), { icon: Le(Ia) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              OA(et(Le(y), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              et(Le(y), {
                shrink: "",
                class: "justify-center"
              }, {
                default: At(() => [
                  et(Le(_g), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: At(() => [
                      HA(wg(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          et(Le(ts))
        ]),
        default: At(() => [
          ip("div", GA, [
            e.captchaDetails.type === "image" ? (Ur(), fg("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, WA)) : (Ur(), fg("p", {
              key: 1,
              textContent: wg(e.captchaDetails.question)
            }, null, 8, XA)),
            KA,
            et(Le(P), { class: "ma-0" }, {
              default: At(() => [
                et(Le(y), null, {
                  default: At(() => [
                    et(Le(pl), {
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
      }, 8, ["fullscreen"])) : jA("", !0);
    };
  }
};
const wn = window.Vue.unref, zo = window.Vue.createVNode, ba = window.Vue.withCtx, fn = window.Vue.createElementVNode, tE = window.Vue.resolveDirective, nE = window.Vue.withDirectives, oE = window.Vue.renderList, vg = window.Vue.Fragment, Ir = window.Vue.openBlock, Sg = window.Vue.createElementBlock, sE = window.Vue.toDisplayString, aE = window.Vue.normalizeClass, iE = window.Vue.createBlock, rE = { class: "mw-ui-dialog__header" }, lE = { class: "row ma-0 px-4 py-3" }, cE = { class: "col shrink justify-center" }, uE = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, dE = { class: "mb-0" }, gE = { class: "pa-4" }, mE = ["textContent"], pE = window.Vuex.useStore, Ro = window.Vue.computed, hE = window.Codex.CdxButton, wE = window.Codex.CdxIcon, fE = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = pE(), s = Ro(() => o.state.application.publishTarget), a = Ro(() => o.state.translator.isAnon), i = Ve(), { sourceSection: l } = X(), c = Ro(
      () => l.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = Ro(
      () => l.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = Ro(() => [
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
      const w = tE("i18n");
      return Ir(), iE(wn(st), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: d
      }, {
        header: ba(() => [
          fn("div", rE, [
            fn("div", lE, [
              fn("div", cE, [
                zo(wn(hE), {
                  class: "pa-0",
                  weight: "quiet",
                  onClick: d
                }, {
                  default: ba(() => [
                    zo(wn(wE), { icon: wn(zm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              fn("div", uE, [
                nE(fn("h4", dE, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            zo(wn(ts))
          ])
        ]),
        default: ba(() => [
          fn("div", gE, [
            zo(wn(jg), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: ba(() => [
                (Ir(!0), Sg(vg, null, oE(r.value, (f, _) => (Ir(), Sg(vg, {
                  key: f.label
                }, [
                  zo(wn(Aa), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  fn("p", {
                    class: aE(["complementary ms-7 mt-0", u(_)]),
                    textContent: sE(f.details)
                  }, null, 10, mE)
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
const tt = window.Vue.unref, _n = window.Vue.createVNode, _E = window.Vue.resolveDirective, yg = window.Vue.withDirectives, $a = window.Vue.openBlock, Cg = window.Vue.createElementBlock, vE = window.Vue.createCommentVNode, kg = window.Vue.toDisplayString, zr = window.Vue.createElementVNode, Rn = window.Vue.withCtx, xg = window.Vue.createBlock, SE = window.Vue.Fragment, yE = window.Vue.normalizeClass, CE = { class: "sx-publisher__review-info__content" }, kE = {
  key: 0,
  class: "complementary ma-0"
}, xE = ["textContent"], bE = ["textContent"], Xt = window.Vue.computed, bg = window.Vue.ref, $E = window.Vue.watch, $g = window.Codex.CdxButton, Rr = window.Codex.CdxIcon, VE = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = bg(0), o = bg(null);
    $E(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = Xt(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Xt(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Xt(() => {
      switch (a.value) {
        case "warning":
          return Im;
        case "error":
          return Sy;
        default:
          return xy;
      }
    }), l = Xt(() => a.value === "default"), c = Xt(
      () => l.value ? "notice" : a.value
    ), g = Xt(
      () => `sx-publisher__review-info--${c.value}`
    ), r = Ve(), u = Xt(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = Xt(
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
      const f = _E("i18n-html");
      return $a(), xg(tt(qw), {
        type: c.value,
        class: yE(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: l.value
      }, {
        icon: Rn(() => [
          _n(tt(Rr), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Rn(() => [
          zr("div", CE, [
            a.value === "default" ? yg(($a(), Cg("p", kE, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : ($a(), Cg(SE, { key: 1 }, [
              zr("h5", {
                textContent: kg(d.value)
              }, null, 8, xE),
              zr("p", {
                textContent: kg(u.value)
              }, null, 8, bE),
              _n(tt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Rn(() => [
                  yg(_n(tt(y), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? ($a(), xg(tt(y), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Rn(() => [
                      _n(tt($g), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        onClick: m
                      }, {
                        default: Rn(() => [
                          _n(tt(Rr), { icon: tt(Al) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      _n(tt($g), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        onClick: p
                      }, {
                        default: Rn(() => [
                          _n(tt(Rr), { icon: tt(hs) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : vE("", !0)
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
}, DE = (e) => {
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
}, Vg = window.Vue.ref, AE = window.Vuex.useStore, EE = () => {
  const e = AE(), { pageURLParameter: t } = G(), { sourceSection: n, targetPageTitleForPublishing: o } = X(), s = sp(), a = Vg(!1), i = Vg("pending"), l = () => a.value = !1, c = zl(), g = (u, d) => k(void 0, null, function* () {
    const m = yield c();
    if (m instanceof jn)
      return { publishFeedbackMessage: m, targetUrl: null };
    const p = m, {
      /** @type {PageSection} */
      sourceLanguage: h,
      targetLanguage: w
    } = e.state.application, f = o.value, _ = e.getters["application/isSandboxTarget"], S = {
      html: DE(n.value.translationHtml),
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
    doPublish: (u = null, d = null) => k(void 0, null, function* () {
      i.value = "pending", a.value = !0;
      let m;
      try {
        m = yield g(
          d == null ? void 0 : d.id,
          u
        );
      } catch (p) {
        if (p instanceof Kn)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw p;
      }
      return m;
    }),
    isPublishDialogActive: a,
    publishStatus: i
  };
}, LE = window.Vue.computed, TE = () => {
  const e = he(), { sourceSection: t } = X(), { getCurrentTitleByLanguage: n } = Lt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = G(), a = LE(
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
}, BE = window.Vuex.useStore, PE = () => {
  const e = BE(), { targetLanguage: t } = U(e), { sourceSection: n } = X();
  return () => {
    const o = Jt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = Jt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, i = s === "failure" ? "error" : "warning";
    let l, c;
    return i === "warning" ? (l = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (l = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new jn({
      title: l,
      text: c,
      status: i,
      type: "mt"
    });
  };
}, FE = window.Vue.ref, ME = window.Vue.computed, NE = () => {
  const e = PE(), t = FE([]), n = ME(
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
    initializePublishFeedbackMessages: () => k(void 0, null, function* () {
      const i = yield e();
      i && t.value.push(i);
    })
  };
}, UE = window.Vuex.useStore, IE = () => {
  const e = UE(), { currentSourcePage: t } = gt(), { sourceLanguage: n, targetLanguage: o } = U(e), { sourceSection: s, targetPageTitleForPublishing: a } = X();
  return (i) => k(void 0, null, function* () {
    const l = a.value, c = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), u = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !c && r.getNamespaceId() !== u.user)
      try {
        yield Fa.addWikibaseLink(
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
}, Dg = window.Vue.ref, zE = () => {
  const e = Dg(!1), t = Dg(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const le = window.Vue.unref, be = window.Vue.createVNode, RE = window.Vue.resolveDirective, Oo = window.Vue.createElementVNode, OE = window.Vue.withDirectives, On = window.Vue.withCtx, HE = window.Vue.openBlock, jE = window.Vue.createElementBlock, qE = { class: "sx-publisher" }, GE = { class: "sx-publisher__publish-panel pa-4" }, WE = { class: "mb-2" }, XE = ["innerHTML"], KE = { class: "sx-publisher__section-preview pa-5" }, YE = ["innerHTML"], Ag = window.Vue.computed, QE = window.Vue.onMounted, JE = window.Vue.ref, ZE = window.Vue.watch, eL = window.Vuex.useStore, Eg = window.Codex.CdxButton, Lg = window.Codex.CdxIcon, tL = {
  __name: "SXPublisher",
  setup(e) {
    const t = eL(), { sourceSection: n } = X(), o = Ag(() => {
      var A;
      return (A = n.value) == null ? void 0 : A.title;
    }), s = Ve(), a = Ag(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: l,
      handleCaptchaError: c,
      onCaptchaDialogClose: g
    } = zE(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: u,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: m,
      initializePublishFeedbackMessages: p
    } = NE(), h = IE(), { doPublish: w, isPublishDialogActive: f, publishStatus: _, closePublishDialog: S } = EE(), b = (A = null) => k(this, null, function* () {
      const L = yield w(A, i);
      if (!L)
        return;
      const { publishFeedbackMessage: se, targetUrl: W } = L;
      if (c(se)) {
        S();
        return;
      } else
        se && d(se);
      _.value = u.value ? "failure" : "success", setTimeout(() => {
        if (u.value) {
          S();
          return;
        }
        h(W);
      }, 1e3);
    });
    QE(() => p());
    const D = TE(), E = JE(!1), F = () => E.value = !0;
    return ZE(E, (A) => {
      A || m();
    }), (A, L) => {
      const se = RE("i18n");
      return HE(), jE("section", qE, [
        be(AA, {
          "is-publishing-disabled": le(u),
          onPublishTranslation: b
        }, null, 8, ["is-publishing-disabled"]),
        Oo("div", GE, [
          OE(Oo("h5", WE, null, 512), [
            [se, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Oo("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, XE),
          be(le(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: On(() => [
              be(le(y), { shrink: "" }, {
                default: On(() => [
                  be(le(Eg), {
                    weight: "quiet",
                    onClick: F
                  }, {
                    default: On(() => [
                      be(le(Lg), { icon: le(Ey) }, null, 8, ["icon"])
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
        be(VE, { "publish-feedback-messages": le(r) }, null, 8, ["publish-feedback-messages"]),
        Oo("section", KE, [
          be(le(P), { class: "pb-5 ma-0" }, {
            default: On(() => [
              be(le(y), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              be(le(y), { shrink: "" }, {
                default: On(() => [
                  be(le(Eg), {
                    weight: "quiet",
                    onClick: le(D)
                  }, {
                    default: On(() => [
                      be(le(Lg), { icon: le(Vl) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Oo("div", {
            innerHTML: le(n).translationHtml
          }, null, 8, YE)
        ]),
        be(fE, {
          active: E.value,
          "onUpdate:active": L[0] || (L[0] = (W) => E.value = W)
        }, null, 8, ["active"]),
        be(eE, {
          active: le(l),
          "captcha-details": le(i),
          onClose: le(g),
          onPublish: L[1] || (L[1] = (W) => b(W))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        be(zA, {
          active: le(f),
          status: le(_)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const nL = {
  name: "SxPublisherView",
  components: {
    SxPublisher: tL
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, oL = window.Vue.resolveComponent, sL = window.Vue.createVNode, aL = window.Vue.normalizeClass, iL = window.Vue.openBlock, rL = window.Vue.createElementBlock;
function lL(e, t, n, o, s, a) {
  const i = oL("sx-publisher");
  return iL(), rL("main", {
    class: aL(["sx-publisher-view", a.classes])
  }, [
    sL(i)
  ], 2);
}
const cL = /* @__PURE__ */ B(nL, [["render", lL]]);
const uL = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: hl, MwIcon: me, MwRow: P, MwCol: y },
  props: {
    suggestion: {
      type: Qn,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: nw, mwIconLanguage: rw, mwIconArticle: ml, getDir: O.getDir };
  }
}, Va = window.Vue.resolveComponent, Kt = window.Vue.createVNode, vn = window.Vue.withCtx, Or = window.Vue.toDisplayString, Hr = window.Vue.createElementVNode, dL = window.Vue.openBlock, gL = window.Vue.createBlock, mL = ["textContent"], pL = ["textContent"], hL = ["textContent"];
function wL(e, t, n, o, s, a) {
  const i = Va("mw-thumbnail"), l = Va("mw-col"), c = Va("mw-icon"), g = Va("mw-row");
  return dL(), gL(g, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: vn(() => [
      Kt(l, { shrink: "" }, {
        default: vn(() => [
          Kt(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      Kt(l, { class: "ms-4" }, {
        default: vn(() => [
          Kt(g, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: vn(() => [
              Kt(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: vn(() => [
                  Hr("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: Or(n.suggestion.title)
                  }, null, 8, mL)
                ]),
                _: 1
              }),
              Kt(l, {
                shrink: "",
                class: "mb-1"
              }, {
                default: vn(() => [
                  Hr("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: Or(n.suggestion.description)
                  }, null, 8, pL)
                ]),
                _: 1
              }),
              Kt(l, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: vn(() => [
                  Kt(c, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  Hr("small", {
                    textContent: Or(n.suggestion.langLinksCount)
                  }, null, 8, hL)
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
const rp = /* @__PURE__ */ B(uL, [["render", wL]]), fL = window.Vue.computed, Tg = window.Vue.ref, _L = window.Vue.watch, vL = (e, t) => {
  const o = Tg([]), s = Tg(!1), a = fL(
    () => o.value.slice(0, 4)
  ), i = El(() => k(void 0, null, function* () {
    try {
      o.value = yield is.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return _L(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const SL = window.Vue.computed, yL = window.Vuex.useStore, CL = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: rp, MwCard: He, MwSpinner: ot },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = U(
      yL()
    ), o = SL(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = vL(
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
}, jr = window.Vue.resolveComponent, Ho = window.Vue.openBlock, qr = window.Vue.createBlock, kL = window.Vue.createCommentVNode, xL = window.Vue.resolveDirective, bL = window.Vue.withDirectives, Bg = window.Vue.createElementBlock, $L = window.Vue.renderList, VL = window.Vue.Fragment, DL = window.Vue.withCtx, AL = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function EL(e, t, n, o, s, a) {
  const i = jr("mw-spinner"), l = jr("sx-search-article-suggestion"), c = jr("mw-card"), g = xL("i18n");
  return Ho(), qr(c, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: DL(() => [
      o.searchResultsLoading ? (Ho(), qr(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? bL((Ho(), Bg("p", AL, null, 512)), [
        [g, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : kL("", !0),
      (Ho(!0), Bg(VL, null, $L(o.searchResultsSlice, (r) => (Ho(), qr(l, {
        key: r.pageid,
        suggestion: r,
        onClick: (u) => e.$emit("suggestion-clicked", r)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const LL = /* @__PURE__ */ B(CL, [["render", EL]]);
const TL = window.Vuex.mapState, BL = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: rp, MwCard: He },
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
  computed: Ce({}, TL({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, PL = window.Vue.toDisplayString, FL = window.Vue.createElementVNode, ML = window.Vue.renderList, NL = window.Vue.Fragment, Gr = window.Vue.openBlock, UL = window.Vue.createElementBlock, Pg = window.Vue.resolveComponent, Fg = window.Vue.createBlock, Mg = window.Vue.withCtx, IL = ["textContent"];
function zL(e, t, n, o, s, a) {
  const i = Pg("sx-search-article-suggestion"), l = Pg("mw-card");
  return Gr(), Fg(l, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: Mg(() => [
      FL("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: PL(n.cardTitle)
      }, null, 8, IL)
    ]),
    default: Mg(() => [
      (Gr(!0), UL(NL, null, ML(n.suggestions, (c) => (Gr(), Fg(i, {
        key: c.pageid,
        suggestion: c,
        onClick: (g) => e.$emit("suggestion-clicked", c)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const Ng = /* @__PURE__ */ B(BL, [["render", zL]]), RL = window.Vue.computed, OL = (e, t) => RL(() => {
  const o = {
    value: "other",
    props: {
      icon: uw,
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
}), HL = window.Vue.computed, jL = (e, t, n) => HL(() => {
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
const qL = window.Vue.resolveDirective, GL = window.Vue.createElementVNode, Wr = window.Vue.withDirectives, ge = window.Vue.unref, jo = window.Vue.withCtx, ct = window.Vue.createVNode, qo = window.Vue.openBlock, Ug = window.Vue.createBlock, WL = window.Vue.createCommentVNode, Xr = window.Vue.createElementBlock, XL = window.Vue.Fragment, KL = window.Vue.vShow, YL = { class: "sx-article-search" }, QL = { class: "mb-0" }, JL = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, Go = window.Vue.ref, ZL = window.Vue.onMounted, Kr = window.Vue.computed, Ig = window.Vue.watch, eT = window.Vue.inject, tT = window.Vuex.useStore, nT = window.Codex.CdxButton, oT = window.Codex.CdxIcon, sT = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Go(""), n = Go(!1), o = Go(null), s = Go(!1), a = Go([]), i = tT(), { sourceLanguage: l, targetLanguage: c } = U(i), { supportedLanguageCodes: g } = ds(), r = jL(
      l,
      c,
      a
    ), u = OL(
      l,
      r
    ), d = he(), { fetchAllTranslations: m } = za();
    ZL(() => k(this, null, function* () {
      var K;
      yield Nm()(), m();
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
    }, h = Um(), w = (I) => h(I, c.value), f = (I) => {
      if (I === "other") {
        s.value = !0;
        return;
      }
      w(I);
    };
    Ig(l, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const _ = dt();
    Ig(t, () => {
      n.value || (n.value = !0, _({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: c.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, b = (I) => {
      s.value = !1, a.value.push(I), f(I);
    }, D = Kr(
      () => i.getters["mediawiki/getRecentlyEditedPages"]
    ), E = Kr(() => i.getters["mediawiki/getNearbyPages"]), F = eT("breakpoints"), A = Kr(() => F.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: L,
      startNearbySectionTranslation: se,
      startSearchResultSectionTranslation: W
    } = xl();
    return (I, K) => {
      const ce = qL("i18n");
      return qo(), Xr("section", YL, [
        ct(ge(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: jo(() => [
            ct(ge(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: jo(() => [
                Wr(GL("h5", QL, null, 512), [
                  [ce, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            ct(ge(y), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: jo(() => [
                ct(ge(nT), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  onClick: p
                }, {
                  default: jo(() => [
                    ct(ge(oT), { icon: ge(Ia) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ct(ge(pl), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": K[0] || (K[0] = (Ge) => t.value = Ge),
          "icon-size": 20,
          icon: ge(Rg),
          placeholder: I.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        ct(ge(es), {
          class: "sx-article-search__language-button-group",
          items: ge(u),
          active: ge(l),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? WL("", !0) : (qo(), Xr(XL, { key: 0 }, [
          D.value && D.value.length ? (qo(), Ug(Ng, {
            key: 0,
            "card-title": I.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: D.value,
            onSuggestionClicked: ge(L)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : E.value && E.value.length ? (qo(), Ug(Ng, {
            key: 1,
            "card-title": I.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: E.value,
            onSuggestionClicked: ge(se)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : Wr((qo(), Xr("p", JL, null, 512)), [
            [ce, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Wr(ct(LL, {
          "search-input": t.value,
          onSuggestionClicked: ge(W)
        }, null, 8, ["search-input", "onSuggestionClicked"]), [
          [KL, !!t.value]
        ]),
        ct(ge(st), {
          value: s.value,
          "onUpdate:value": K[1] || (K[1] = (Ge) => s.value = Ge),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: A.value,
          header: A.value,
          "overlay-opacity": 0,
          title: I.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: jo(() => [
            ct(ge(Wm), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ge(g),
              suggestions: ge(r),
              placeholder: I.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: b,
              onClose: S
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const aT = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: sT
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, iT = window.Vue.resolveComponent, rT = window.Vue.createVNode, lT = window.Vue.normalizeClass, cT = window.Vue.openBlock, uT = window.Vue.createElementBlock;
function dT(e, t, n, o, s, a) {
  const i = iT("sx-article-search");
  return cT(), uT("main", {
    class: lT(["sx-article-search-view", a.classes])
  }, [
    rT(i)
  ], 2);
}
const gT = /* @__PURE__ */ B(aT, [["render", dT]]), mT = window.Vuex.useStore, lp = [
  {
    path: "",
    name: "dashboard",
    component: zu,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: gT,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: Pb,
    props: (e) => ({
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: a4,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: L3,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: LD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: eD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: xA,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: cL,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: zu,
    meta: { workflowStep: 0 }
  }
], Rl = Pv({
  history: B1(),
  routes: lp
});
Rl.beforeEach((e, t, n) => {
  const o = mT();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || Wg.assertUser().catch((l) => {
    l instanceof Kn && o.commit("application/setIsLoginDialogOn", !0);
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
    const l = Math.ceil(a) - 1, c = lp.find(
      (g) => g.meta.workflowStep === l
    );
    n({ name: c.name });
    return;
  }
  n();
});
Rl.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const pT = window.Vue.createApp, hT = mw.config.get("wgUserLanguage"), wT = "en", fT = mw.messages.values || {}, tn = pT(zf);
tn.config.globalProperties.$incompleteVersion = !0;
const _T = Oy();
tn.use(_T);
tn.use(Rl);
tn.use(t1);
tn.use(Z0);
tn.use(J0);
const vT = oS({
  locale: hT,
  finalFallback: wT,
  messages: fT,
  wikilinks: !0
});
tn.use(vT);
tn.mount("#contenttranslation");
