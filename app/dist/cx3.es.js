/*@nomin*/
var Cm = Object.defineProperty, km = Object.defineProperties;
var bm = Object.getOwnPropertyDescriptors;
var Sc = Object.getOwnPropertySymbols;
var xm = Object.prototype.hasOwnProperty, Vm = Object.prototype.propertyIsEnumerable;
var yc = (e, t, n) => t in e ? Cm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ce = (e, t) => {
  for (var n in t || (t = {}))
    xm.call(t, n) && yc(e, n, t[n]);
  if (Sc)
    for (var n of Sc(t))
      Vm.call(t, n) && yc(e, n, t[n]);
  return e;
}, ye = (e, t) => km(e, bm(t));
var C = (e, t, n) => new Promise((o, s) => {
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
}, $m = {
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
}, Am = window.Vue.toDisplayString, Ba = window.Vue.openBlock, Pa = window.Vue.createElementBlock, Dm = window.Vue.createCommentVNode, Cc = window.Vue.createElementVNode, Em = window.Vue.normalizeClass, Tm = ["width", "height", "aria-labelledby"], Lm = ["id"], Bm = ["fill"], Pm = ["d"];
function Fm(e, t, n, o, s, a) {
  return Ba(), Pa("span", {
    class: Em(["mw-ui-icon notranslate", a.classes])
  }, [
    (Ba(), Pa("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Ba(), Pa("title", {
        key: 0,
        id: n.iconName
      }, Am(n.iconName), 9, Lm)) : Dm("", !0),
      Cc("g", { fill: n.iconColor }, [
        Cc("path", { d: a.iconImagePath }, null, 8, Pm)
      ], 8, Bm)
    ], 8, Tm))
  ], 2);
}
const K = /* @__PURE__ */ D($m, [["render", Fm]]);
const Mm = {
  name: "MwButton",
  components: {
    MwIcon: K
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
}, Nm = window.Vue.renderSlot, Im = window.Vue.resolveComponent, kc = window.Vue.normalizeClass, Zo = window.Vue.openBlock, Fa = window.Vue.createBlock, Ma = window.Vue.createCommentVNode, Um = window.Vue.toDisplayString, zm = window.Vue.createElementBlock, Rm = window.Vue.toHandlerKey, Om = window.Vue.withModifiers, jm = window.Vue.mergeProps, Hm = window.Vue.createElementVNode, qm = window.Vue.resolveDynamicComponent, Gm = window.Vue.withCtx, Wm = { class: "mw-ui-button__content" }, Xm = ["textContent"];
function Km(e, t, n, o, s, a) {
  const i = Im("mw-icon");
  return Zo(), Fa(qm(a.component), {
    class: kc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Gm(() => [
      Nm(e.$slots, "default", {}, () => [
        Hm("span", Wm, [
          n.icon ? (Zo(), Fa(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: kc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Ma("", !0),
          !a.isIcon && n.label ? (Zo(), zm("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Um(n.label)
          }, null, 8, Xm)) : Ma("", !0),
          n.indicator ? (Zo(), Fa(i, jm({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Rm(a.indicatorClickEvent)]: t[0] || (t[0] = Om((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Ma("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const P = /* @__PURE__ */ D(Mm, [["render", Km]]);
const Ym = {
  name: "MwButtonGroup",
  components: {
    MwButton: P
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
}, Qm = window.Vue.renderList, Jm = window.Vue.Fragment, Na = window.Vue.openBlock, bc = window.Vue.createElementBlock, Zm = window.Vue.resolveComponent, ep = window.Vue.withModifiers, tp = window.Vue.mergeProps, np = window.Vue.createBlock, op = { class: "row mw-ui-button-group ma-0 pa-0" };
function sp(e, t, n, o, s, a) {
  const i = Zm("mw-button");
  return Na(), bc("div", op, [
    (Na(!0), bc(Jm, null, Qm(n.items, (c) => (Na(), np(i, tp({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: ep((l) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Mo = /* @__PURE__ */ D(Ym, [["render", sp]]);
const ap = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: Mo },
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
}, ip = window.Vue.renderSlot, rp = window.Vue.resolveComponent, cp = window.Vue.createVNode, lp = window.Vue.createElementVNode, up = window.Vue.openBlock, dp = window.Vue.createElementBlock, gp = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, mp = { class: "col-12 ma-0 pa-0" };
function pp(e, t, n, o, s, a) {
  const i = rp("mw-button-group");
  return up(), dp("footer", gp, [
    lp("div", mp, [
      ip(e.$slots, "default", {}, () => [
        cp(i, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (c) => e.$emit("update:active", c))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
const hp = /* @__PURE__ */ D(ap, [["render", pp]]);
const wp = {
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
}, xc = window.Vue.renderSlot, fp = window.Vue.toDisplayString, Vc = window.Vue.openBlock, $c = window.Vue.createElementBlock, _p = window.Vue.createCommentVNode, vp = window.Vue.createElementVNode, Sp = { class: "mw-ui-card" }, yp = ["textContent"], Cp = { class: "mw-ui-card__content" };
function kp(e, t, n, o, s, a) {
  return Vc(), $c("div", Sp, [
    xc(e.$slots, "header", {}, () => [
      n.title ? (Vc(), $c("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: fp(n.title)
      }, null, 8, yp)) : _p("", !0)
    ]),
    vp("div", Cp, [
      xc(e.$slots, "default")
    ])
  ]);
}
const Fe = /* @__PURE__ */ D(wp, [["render", kp]]);
const bp = {}, xp = window.Vue.openBlock, Vp = window.Vue.createElementBlock, $p = { class: "mw-ui-divider row" };
function Ap(e, t) {
  return xp(), Vp("div", $p);
}
const No = /* @__PURE__ */ D(bp, [["render", Ap]]);
const Dp = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Ep = window.Vue.renderSlot, Tp = window.Vue.resolveDynamicComponent, Lp = window.Vue.withCtx, Bp = window.Vue.openBlock, Pp = window.Vue.createBlock;
function Fp(e, t, n, o, s, a) {
  return Bp(), Pp(Tp(n.tag), { class: "mw-grid container" }, {
    default: Lp(() => [
      Ep(e.$slots, "default")
    ]),
    _: 3
  });
}
const Mp = /* @__PURE__ */ D(Dp, [["render", Fp]]), Np = {
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
}, Ip = window.Vue.renderSlot, Up = window.Vue.resolveDynamicComponent, zp = window.Vue.normalizeClass, Rp = window.Vue.withCtx, Op = window.Vue.openBlock, jp = window.Vue.createBlock;
function Hp(e, t, n, o, s, a) {
  return Op(), jp(Up(n.tag), {
    class: zp(a.classes)
  }, {
    default: Rp(() => [
      Ip(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const T = /* @__PURE__ */ D(Np, [["render", Hp]]), Dr = ["mobile", "tablet", "desktop", "desktop-wide"], qp = Dr.reduce(
  (e, t) => ye(ce({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Gp = {
  name: "MwCol",
  props: ye(ce({}, qp), {
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
      for (let n = 0; n < Dr.length; n++) {
        let o = Dr[n], s = this.$props[o];
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
}, Wp = window.Vue.renderSlot, Xp = window.Vue.resolveDynamicComponent, Kp = window.Vue.normalizeClass, Yp = window.Vue.withCtx, Qp = window.Vue.openBlock, Jp = window.Vue.createBlock;
function Zp(e, t, n, o, s, a) {
  return Qp(), Jp(Xp(n.tag), {
    class: Kp(a.classes)
  }, {
    default: Yp(() => [
      Wp(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const y = /* @__PURE__ */ D(Gp, [["render", Zp]]), va = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", eh = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", th = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", nh = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Fn = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", oh = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, sh = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", ah = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", qd = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Er = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", ln = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", ih = "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z", Ge = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Or = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", jr = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Hr = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Gd = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Wd = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", Xd = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", Kd = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Io = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Yd = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Qd = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Jd = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Zd = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", rh = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", ch = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, cn = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, lh = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Ca = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, uh = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, dh = "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z", gh = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z", qr = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", mh = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", ph = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", hh = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Ia = window.Vue.computed, wh = window.Vue.watch, fh = window.Vue.ref, _h = window.Vue.nextTick, vh = {
  name: "MwDialog",
  components: {
    MwButton: P,
    MwRow: T,
    MwCol: y,
    MwDivider: No
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
    const n = fh(null), o = Ia(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Ia(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    wh(
      () => e.value,
      (l) => {
        l ? (i(), _h(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Ia(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayStyles: s,
      mwIconClose: Ge,
      root: n
    };
  }
}, Ac = window.Vue.normalizeStyle, Ua = window.Vue.createElementVNode, za = window.Vue.renderSlot, es = window.Vue.resolveComponent, Un = window.Vue.createVNode, Ra = window.Vue.withCtx, Dc = window.Vue.createCommentVNode, Sh = window.Vue.withKeys, yh = window.Vue.normalizeClass, Ec = window.Vue.openBlock, Ch = window.Vue.createElementBlock, kh = window.Vue.Transition, bh = window.Vue.createBlock, xh = { class: "mw-ui-dialog__shell items-stretch" }, Vh = { class: "mw-ui-dialog__body" };
function $h(e, t, n, o, s, a) {
  const i = es("mw-col"), c = es("mw-button"), l = es("mw-row"), d = es("mw-divider");
  return Ec(), bh(kh, {
    name: `mw-ui-animation-${n.animation}`,
    style: Ac(o.cssVars)
  }, {
    default: Ra(() => [
      n.value ? (Ec(), Ch("div", {
        key: 0,
        ref: "root",
        class: yh(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Sh((r) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        Ua("div", {
          class: "mw-ui-dialog__overlay",
          style: Ac(o.overlayStyles),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close)
        }, null, 4),
        Ua("div", xh, [
          n.header ? za(e.$slots, "header", { key: 0 }, () => [
            Un(l, { class: "mw-ui-dialog__header" }, {
              default: Ra(() => [
                Un(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Un(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Ra(() => [
                    Un(c, {
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
            Un(d)
          ]) : Dc("", !0),
          Ua("div", Vh, [
            za(e.$slots, "default")
          ]),
          za(e.$slots, "footer")
        ])
      ], 34)) : Dc("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const We = /* @__PURE__ */ D(vh, [["render", $h]]);
const Ah = {
  name: "MwInput",
  components: {
    MwIcon: K
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
      const t = ce({}, e.$attrs);
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
}, Tc = window.Vue.renderSlot, Dh = window.Vue.resolveComponent, ts = window.Vue.openBlock, Oa = window.Vue.createBlock, Lc = window.Vue.createCommentVNode, Eh = window.Vue.resolveDynamicComponent, Th = window.Vue.toDisplayString, Lh = window.Vue.mergeProps, Bh = window.Vue.withModifiers, Ph = window.Vue.createElementVNode, Fh = window.Vue.normalizeClass, Mh = window.Vue.createElementBlock, Nh = { class: "mw-ui-input__content" };
function Ih(e, t, n, o, s, a) {
  const i = Dh("mw-icon");
  return ts(), Mh("div", {
    class: Fh(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    Ph("div", Nh, [
      Tc(e.$slots, "icon", {}, () => [
        n.icon ? (ts(), Oa(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Lc("", !0)
      ]),
      (ts(), Oa(Eh(n.type === "textarea" ? n.type : "input"), Lh({
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
        textContent: Th(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Tc(e.$slots, "indicator", {}, () => [
        n.indicator ? (ts(), Oa(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Bh((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Lc("", !0)
      ])
    ])
  ], 2);
}
const Gr = /* @__PURE__ */ D(Ah, [["render", Ih]]);
const Uh = {
  name: "MwMessage",
  components: { MwCol: y, MwRow: T, MwIcon: K, MwButton: P },
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
    mwIconClose: Ge,
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
      notice: ch,
      warning: Ca,
      success: cn,
      error: lh
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
}, ja = window.Vue.renderSlot, ns = window.Vue.resolveComponent, Bc = window.Vue.createVNode, Pc = window.Vue.withCtx, Fc = window.Vue.openBlock, Mc = window.Vue.createBlock, Nc = window.Vue.createCommentVNode, zh = window.Vue.normalizeClass;
function Rh(e, t, n, o, s, a) {
  const i = ns("mw-icon"), c = ns("mw-col"), l = ns("mw-button"), d = ns("mw-row");
  return e.shown ? (Fc(), Mc(d, {
    key: 0,
    class: zh([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Pc(() => [
      ja(e.$slots, "icon", {}, () => [
        Bc(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Bc(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Pc(() => [
          ja(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      ja(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Fc(), Mc(l, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Nc("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Nc("", !0);
}
const Oh = /* @__PURE__ */ D(Uh, [["render", Rh]]);
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
const jh = {}, Hh = window.Vue.createElementVNode, qh = window.Vue.openBlock, Gh = window.Vue.createElementBlock, Wh = { class: "mw-ui-spinner" }, Xh = /* @__PURE__ */ Hh("div", { class: "mw-ui-spinner__bounce" }, null, -1), Kh = [
  Xh
];
function Yh(e, t) {
  return qh(), Gh("div", Wh, Kh);
}
const je = /* @__PURE__ */ D(jh, [["render", Yh]]), Pe = {
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
const Qh = window.Vue.computed, Jh = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: K },
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
      default: qr
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: Pe.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: Pe.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = Qh(() => {
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
}, Ic = window.Vue.normalizeStyle, Uc = window.Vue.openBlock, Zh = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ew = window.Vue.resolveComponent, tw = window.Vue.createBlock;
function nw(e, t, n, o, s, a) {
  const i = ew("mw-ui-icon");
  return n.thumbnail ? (Uc(), Zh("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Ic(o.style)
  }, null, 4)) : (Uc(), tw(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Ic(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Wr = /* @__PURE__ */ D(Jh, [["render", nw]]);
const ow = {
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
}, sw = window.Vue.vModelRadio, _a = window.Vue.createElementVNode, aw = window.Vue.withDirectives, iw = window.Vue.toDisplayString, rw = window.Vue.resolveComponent, cw = window.Vue.normalizeClass, lw = window.Vue.withCtx, uw = window.Vue.openBlock, dw = window.Vue.createBlock, gw = { class: "mw-ui-radio__controls" }, pw = ["id", "disabled", "name", "value"], hw = /* @__PURE__ */ _a("span", { class: "mw-ui-radio__controls__icon" }, null, -1), ww = ["for", "textContent"];
function fw(e, t, n, o, s, a) {
  const i = rw("mw-row");
  return uw(), dw(i, {
    class: cw(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: lw(() => [
      _a("div", gw, [
        aw(_a("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, pw), [
          [sw, a.inputModel]
        ]),
        hw
      ]),
      _a("label", {
        for: n.id,
        class: "ps-2",
        textContent: iw(n.label)
      }, null, 8, ww)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Sa = /* @__PURE__ */ D(ow, [["render", fw]]), zc = window.Vue.h, eg = {
  name: "MwRadioGroup",
  components: { MwRadio: Sa },
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
      (o) => zc(Sa, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), zc("div", { class: "mw-ui-radio-group" }, n);
  }
};
const _w = {
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
}, Rc = window.Vue.normalizeClass, Oc = window.Vue.normalizeStyle, vw = window.Vue.createElementVNode, Sw = window.Vue.openBlock, yw = window.Vue.createElementBlock, Cw = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function kw(e, t, n, o, s, a) {
  return Sw(), yw("div", {
    class: Rc(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Oc(a.containerStyles)
  }, [
    vw("div", {
      class: Rc(["mw-progress-bar__bar", a.barClass]),
      style: Oc(a.barStyles)
    }, null, 6)
  ], 14, Cw);
}
const tg = /* @__PURE__ */ D(_w, [["render", kw]]), bw = (e, t, n, o) => (s) => {
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
}, xw = (e, t, n, o) => ({ initiateDrag: bw(
  e,
  t,
  n,
  o
) }), Vw = window.Vue.ref, jc = window.Vue.computed, $w = (e, t, n, o) => {
  const s = Vw(0), a = jc(
    () => t.value > e.value
  ), i = jc(
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
const os = window.Vue.ref, Aw = window.Vue.onMounted, Hc = window.Vue.computed, Dw = window.Vue.nextTick, Ew = {
  name: "MwExpandableContent",
  components: {
    MwButton: P
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
    const t = os(!0), n = os(null), o = Hc(
      () => Math.min(e.minHeight, s.value)
    ), s = os(1), { initiateDrag: a } = xw(
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
    } = $w(o, s, n, t), u = () => d(l.value + 1), g = os(null), m = Hc(() => ({
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
    return Aw(() => C(this, null, function* () {
      var w;
      yield Dw(), s.value = n.value.scrollHeight, (w = g.value) == null || w.addEventListener(
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
      mwIconCollapse: uh,
      mwIconExpand: Er,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, Tw = window.Vue.renderSlot, Lw = window.Vue.normalizeClass, ss = window.Vue.createElementVNode, Bw = window.Vue.resolveComponent, Pw = window.Vue.createVNode, Ha = window.Vue.openBlock, Fw = window.Vue.createBlock, qc = window.Vue.createCommentVNode, Gc = window.Vue.createElementBlock, Mw = window.Vue.normalizeStyle, Nw = { class: "mw-ui-expandable-content__container" }, Iw = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, Uw = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function zw(e, t, n, o, s, a) {
  const i = Bw("mw-button");
  return Ha(), Gc("div", {
    class: "mw-ui-expandable-content",
    style: Mw(o.cssVars)
  }, [
    ss("div", Nw, [
      ss("div", {
        ref: "contentRef",
        class: Lw(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        Tw(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Ha(), Gc("div", Iw, [
        Pw(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Ha(), Fw(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : qc("", !0)
      ])) : qc("", !0)
    ]),
    ss("div", Uw, [
      ss("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const Rw = /* @__PURE__ */ D(Ew, [["render", zw]]);
const as = window.Vue.computed, Ow = {
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
      default: Pe.blue600
    },
    inactiveColor: {
      type: String,
      default: Pe.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = as(() => e.size / 2 * 0.9), n = as(() => Math.PI * (t.value * 2)), o = as(
      () => (100 - e.percentage) / 100 * n.value
    ), s = as(() => ({
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
}, Wc = window.Vue.createElementVNode, Xc = window.Vue.normalizeStyle, jw = window.Vue.openBlock, Hw = window.Vue.createElementBlock, qw = ["width", "height", "viewport"], Gw = ["r", "cx", "cy", "stroke-dasharray"], Ww = ["r", "cx", "cy", "stroke-dasharray"];
function Xw(e, t, n, o, s, a) {
  return jw(), Hw("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Xc(o.cssVars)
  }, [
    Wc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Gw),
    Wc("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Xc({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Ww)
  ], 12, qw);
}
const ng = /* @__PURE__ */ D(Ow, [["render", Xw]]), Kw = window.Vue.ref, yt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Ct = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${yt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${yt.tablet}px) and (max-width: ${yt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${yt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${yt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${yt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${yt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${yt["desktop-wide"]}px)`
}, qa = {
  mobile: () => matchMedia(Ct.mobile).matches,
  tablet: () => matchMedia(Ct.tablet).matches,
  desktop: () => matchMedia(Ct.desktop).matches,
  desktopwide: () => matchMedia(Ct["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Ct["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Ct["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Ct["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Ct["desktop-and-down"]).matches
}, Yw = {
  install: (e) => {
    const t = () => {
      for (let o in qa)
        qa.hasOwnProperty(o) && (n.value[o] = qa[o]());
    }, n = Kw({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = ye(ce({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, Qw = {
  install: (e) => {
    e.config.globalProperties.$mwui = ye(ce({}, e.config.globalProperties.$mwui || {}), {
      colors: Pe
    }), e.provide("colors", Pe);
  }
};
class Mn extends Error {
}
const Jw = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Mn();
}), og = { assertUser: Jw };
const Zw = window.Vue.resolveDirective, is = window.Vue.createElementVNode, Kc = window.Vue.withDirectives, Yc = window.Vue.unref, e0 = window.Vue.createVNode, Qc = window.Vue.withCtx, t0 = window.Vue.openBlock, n0 = window.Vue.createBlock, o0 = window.Vue.createCommentVNode, s0 = { class: "pa-4 sx-login-dialog__header" }, a0 = { class: "sx-login-dialog__body px-6 pb-4" }, i0 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, r0 = window.Vue.computed, c0 = window.Vue.ref, l0 = window.Vuex.useStore, u0 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = l0(), n = r0(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = c0(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = Zw("i18n");
      return n.value ? (t0(), n0(Yc(We), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Qc(() => [
          is("div", s0, [
            Kc(is("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Qc(() => [
          Kc(is("div", a0, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          is("div", i0, [
            e0(Yc(P), {
              type: "text",
              progressive: "",
              label: a.$i18n("cx-sx-login-dialog-button-label"),
              href: s.value,
              target: "_blank"
            }, null, 8, ["label", "href"])
          ])
        ]),
        _: 1
      })) : o0("", !0);
    };
  }
};
const d0 = window.Vue.resolveDynamicComponent, Jc = window.Vue.openBlock, Zc = window.Vue.createBlock, g0 = window.Vue.Transition, zn = window.Vue.withCtx, Rn = window.Vue.createVNode, m0 = window.Vue.resolveComponent, Ga = window.Vue.unref, p0 = window.Vuex.useStore, h0 = window.Vue.computed, w0 = window.Vue.onMounted, f0 = {
  __name: "App",
  setup(e) {
    const t = p0(), n = h0(
      () => t.state.application.autoSavePending
    );
    return w0(() => {
      window.addEventListener("beforeunload", (o) => {
        n.value && (o.preventDefault(), o.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (o) => {
        document.visibilityState === "visible" && og.assertUser().then(() => t.commit("application/setIsLoginDialogOn", !1)).catch((s) => {
          s instanceof Mn && t.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (o, s) => {
      const a = m0("router-view");
      return Jc(), Zc(Ga(Mp), { id: "contenttranslation" }, {
        default: zn(() => [
          Rn(Ga(T), { class: "cx-container" }, {
            default: zn(() => [
              Rn(Ga(y), { cols: "12" }, {
                default: zn(() => [
                  Rn(a, null, {
                    default: zn(({ Component: i, route: c }) => [
                      Rn(g0, {
                        name: c.meta.transitionName
                      }, {
                        default: zn(() => [
                          (Jc(), Zc(d0(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Rn(u0)
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
}, _0 = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, v0 = {
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
}, S0 = [
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
], y0 = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = el(e, n), a = c = el(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, el = function(e, t) {
  return e ? S0.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, C0 = 95, k0 = 85, b0 = [
  { status: "failure", value: 100 - C0 },
  { status: "warning", value: 100 - k0 },
  { status: "success", value: 100 }
], sg = (e, t, n) => {
  const o = tl(e).textContent, s = tl(t).textContent, a = 100 - 100 * y0(s, o, n);
  return Math.ceil(a);
}, x0 = (e) => b0.find((t) => e <= t.value).status, V0 = (e, t) => sg(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), tl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, jt = { calculateScore: sg, getScoreStatus: x0, getMTScoreForPageSection: V0 }, Wa = "original", Xa = "empty", $0 = {
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
      Wa,
      Xa
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return $0[t] || t;
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
    return Wa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Xa;
  }
  static isUserMTProvider(t) {
    return [Wa, Xa].includes(
      t
    );
  }
}
const q = new mw.cx.SiteMapper(), A0 = mw.util.getUrl, D0 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
};
class ag {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Ln {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new ag(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const nl = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => ye(ce({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class E0 {
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
    const t = nl((s = this.user) == null ? void 0 : s.content), n = nl((a = this.mt) == null ? void 0 : a.content);
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
class Uo {
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
class Rt {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = ye(ce({}, a), {
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
const ol = (e) => {
  var n;
  const t = ya(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ya = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, rn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), ig = (e) => {
  const t = ya(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = T0(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, T0 = (e) => {
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
}, rg = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, cg = (e) => {
  const t = rg(e);
  return t == null ? void 0 : t.targetExists;
};
class Ka {
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
let Ve = class {
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
      (a) => rn(a)
    );
    s && cg(s) && (this.blockTemplateAdaptationInfo[t] = rg(s));
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
      (t) => rn(t)
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
    const t = ya(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ol(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => rn(o));
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
    return n && ol(n) || "";
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
    const o = ya(n);
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
      (a) => rn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Ka({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Ka({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Ka({
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
        (s) => rn(s)
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
const Ya = "__LEAD_SECTION__";
class Xr {
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
    return Ya;
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
    return n instanceof Ve ? n.transclusionNode.outerHTML : n instanceof Rt ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ve ? t.blockTemplateSelected = !1 : t instanceof Rt && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ve ? n.blockTemplateSelected = !0 : n instanceof Rt && (n.selected = !0);
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
    if (o instanceof Ve)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Rt)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ve ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Rt ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ve ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Rt && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = jt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Ya : this.originalTitle;
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
    return this.isLeadSection ? Ya : this.title;
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
class Kr extends Uo {
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
    return !this.sourceSectionTitle || this.sourceSectionTitle === Xr.LEAD_SECTION_DUMMY_TITLE;
  }
}
class lg extends Uo {
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
const Yr = mw.user.isAnon() ? void 0 : "user", ug = (e) => {
  if (e === "assertuserfailed")
    throw new Mn();
};
function dg(e, t = null) {
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
        (l) => new Kr(ye(ce({}, l), { status: e }))
      ) : i = a.map(
        (l) => new lg(ye(ce({}, l), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const l = yield dg(
          e,
          s.continue.offset
        );
        i = i.concat(l);
      }
      return i;
    }));
  });
}
function L0(e) {
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
      (a) => new E0(a)
    );
  });
}
function B0(e, t, n, o, s) {
  return C(this, null, function* () {
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
const P0 = (e, t, n) => {
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
}, F0 = ({
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
    assert: Yr,
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
          publishFeedbackMessage: new Ln({
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
    ug(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Ln({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, M0 = ({
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
    assert: Yr,
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
    ug(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new Ln({ text: h, status: "error" });
  });
}, N0 = (e) => {
  const t = {
    assert: Yr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, I0 = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, U0 = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, z0 = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), He = {
  fetchTranslations: dg,
  fetchTranslationUnits: L0,
  fetchSegmentTranslation: B0,
  parseTemplateWikitext: P0,
  publishTranslation: F0,
  saveTranslation: M0,
  deleteTranslation: I0,
  fetchTranslatorStats: z0,
  deleteCXTranslation: U0,
  splitTranslation: N0
}, R0 = (e, t) => {
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
}, O0 = (e) => {
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
function j0({ rootState: e }) {
  const { currentSourceSection: t, targetLanguage: n } = e.application, o = jt.getMTScoreForPageSection(
    t,
    n
  ), s = jt.getScoreStatus(o);
  if (s === "success")
    return null;
  const a = 100 - o, i = s === "failure" ? "error" : "warning";
  let c, l;
  return i === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Ln({
    title: c,
    text: l,
    status: i,
    type: "mt"
  });
}
function H0({ rootState: e, rootGetters: t }) {
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
    (m) => R0(m, l)
  );
  const u = o.getTranslationProgress(a), g = t["application/isSandboxTarget"];
  return He.saveTranslation({
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
function q0(a) {
  return C(this, arguments, function* ({ rootState: e, rootGetters: t, dispatch: n }, { captchaId: o, captchaAnswer: s } = {}) {
    const i = yield n("saveTranslation");
    if (i instanceof Ln)
      return { publishFeedbackMessage: i, targetTitle: null };
    const c = i, l = t["application/getCurrentPage"], {
      /** @type {PageSection} */
      currentSourceSection: d,
      sourceLanguage: r,
      targetLanguage: u
    } = e.application, g = l.title, m = t["application/getTargetPageTitleForPublishing"], p = t["application/isSandboxTarget"], h = {
      html: O0(d.translationHtml),
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
    return o && (h.captchaId = o, h.captchaWord = s), yield He.publishTranslation(h);
  });
}
function G0(a, i) {
  return C(this, arguments, function* ({ rootGetters: e, dispatch: t, rootState: n }, { provider: o, originalContent: s }) {
    const { sourceLanguage: c, targetLanguage: l } = n.application;
    if (!e["mediawiki/isValidProviderForTranslation"](c, l, o))
      return Promise.resolve();
    try {
      const r = yield t(
        "application/getCXServerToken",
        {},
        { root: !0 }
      );
      return yield He.fetchSegmentTranslation(
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
function W0(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield He.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const X0 = {
  validateMT: j0,
  saveTranslation: H0,
  publishTranslation: q0,
  translateContent: G0,
  fetchTranslatorStats: W0
}, K0 = {
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
}, Y0 = {
  namespaced: !0,
  state: _0,
  getters: v0,
  actions: X0,
  mutations: K0
}, gg = [
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
], Q0 = [
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
], J0 = [
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
], Z0 = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], ef = [
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
], tf = {
  en: gg,
  es: Q0,
  bn: J0,
  fr: Z0,
  de: ef
}, nf = {
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
  appendixSectionTitles: tf,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, of = {
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
class Qr {
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
class qe {
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
class Lo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const sf = gg;
function af(e, t, n, o = 24) {
  return C(this, null, function* () {
    var r;
    let a = `/data/recommendation/article/creation/translation/${q.getWikiDomainCode(e)}`;
    n && (a += `/${n}`);
    const i = q.getRestbaseUrl(t, a), c = new URLSearchParams({ count: `${o}` }), l = yield fetch(`${i}?${c}`);
    if (!l.ok)
      throw new Error("Failed to load data from server");
    return (((r = yield l.json()) == null ? void 0 : r.items) || []).map(
      (u) => new Qr({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.sitelink_count)
      })
    );
  });
}
function rf(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new qe(a) : null;
  });
}
function cf(e, t) {
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
function lf(e) {
  const t = sf.map((o) => encodeURIComponent(o)).join("|"), n = q.getCXServerUrl(
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
const uf = (e) => {
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
}, df = (e) => {
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
}, gf = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((c) => new Lo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, tt = {
  fetchFavorites: gf,
  fetchPageSuggestions: af,
  fetchSectionSuggestions: rf,
  fetchSuggestionSeeds: cf,
  fetchAppendixTargetSectionTitles: lf,
  markFavorite: uf,
  unmarkFavorite: df
};
class mf {
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
function pf(c, l) {
  return C(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
    let d = n.getSectionSuggestionsForArticle(
      s,
      a,
      i
    );
    if (!d) {
      d = yield tt.fetchSectionSuggestions(
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
          d = new qe({
            sourceLanguage: s,
            targetLanguage: a,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: r.title
          }), e(
            "addPageSuggestion",
            new Qr({
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
function hf(o, s) {
  return C(this, arguments, function* ({ getters: e }, { sourceLanguage: t, targetLanguage: n }) {
    let a = e.findSuggestionSeedCollection(
      t,
      n
    );
    return !a || !a.seeds.length ? (mw.log.error("No suggestion seed found! Suggestion fetching will fail!"), null) : a.shiftSeeds();
  });
}
function wf(s) {
  return C(this, arguments, function* ({
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
function ff(a) {
  return C(this, arguments, function* ({
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
      const g = yield tt.fetchSectionSuggestions(
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
function _f(s) {
  return C(this, arguments, function* ({
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
      const d = yield tt.fetchPageSuggestions(
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
function vf(o, s) {
  return C(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield tt.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
function Sf(o, s) {
  return C(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removeSectionSuggestion", n), t("fetchNextSectionSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function yf(o, s) {
  return C(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    e("removePageSuggestion", n), t("fetchNextPageSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
  });
}
function Cf(o, s) {
  return C(this, arguments, function* ({ commit: e, dispatch: t }, n) {
    yield tt.markFavorite(n);
    const { sourceTitle: a, sourceLanguage: i, targetLanguage: c } = n, l = new Lo({
      title: a,
      sourceLanguage: i,
      targetLanguage: c
    });
    e("addFavoriteSuggestion", l);
  });
}
function kf(n, o) {
  return C(this, arguments, function* ({ commit: e }, t) {
    e("removeFavoriteSuggestion", t), yield tt.unmarkFavorite(t);
  });
}
function bf(o) {
  return C(this, arguments, function* ({ commit: e, dispatch: t, state: n }) {
    if (n.favorites.length)
      return;
    const s = yield tt.fetchFavorites();
    if (!s || !s.length)
      return;
    const a = {};
    for (const i of s)
      e("addFavoriteSuggestion", i), tt.fetchSectionSuggestions(
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
const xf = {
  addPageSuggestionAsFavorite: yf,
  addSectionSuggestionAsFavorite: Sf,
  doMarkSuggestionAsFavorite: Cf,
  fetchFavorites: bf,
  fetchAppendixSectionTitles: vf,
  fetchNextPageSuggestionsSlice: _f,
  fetchNextSectionSuggestionsSlice: ff,
  getSuggestionSeed: hf,
  initializeSuggestions: wf,
  loadSectionSuggestion: pf,
  removeFavoriteSuggestion: kf
}, Vf = {
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
}, $f = {
  namespaced: !0,
  state: nf,
  getters: of,
  actions: xf,
  mutations: Vf
}, Af = {
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
}, Df = {
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
class Nn {
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
class Ef {
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
function Tf() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const Lf = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), Tf();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, Bf = (e, t) => {
  let n, o;
  return t ? (n = Lf(e), o = n.$element.find(
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
}, Pf = (e, t) => {
  const n = Array.from(
    Bf(e, t)
  );
  return Ff(n).map(
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
        (u) => new Ve({
          sentences: Mf(u),
          node: u
        })
      ), r = !c;
      return new Xr({ id: l, title: c, subSections: d, isLeadSection: r });
    }
  );
}, Ff = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, Mf = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Rt({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), mg = {
  convertSegmentedContentToPageSections: Pf
}, Jr = 120, Nf = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: Jr,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, u) => ye(ce({}, r), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (r, u) => ye(ce({}, r), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((r) => {
      const u = d[r.title] || c[r.title] || null;
      return new Nn(ye(ce({}, r), { _alias: u }));
    });
  });
}, If = (e, t) => {
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
  return q.getApi(e).get(n).then((s) => C(void 0, null, function* () {
    var l, d;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return c ? Object.freeze(new Ef(c, i)) : null;
  }));
}, Uf = (e, t, n, o = null) => pg(
  e,
  t,
  n,
  o
).then(
  (s) => new Nn({
    sections: mg.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), pg = (e, t, n, o = null) => {
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
}, zf = (e) => C(void 0, null, function* () {
  const t = D0();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Jr,
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
  return yield q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Nn(s))).catch((o) => []);
}), Rf = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Jr,
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
      (a) => new Nn(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, zo = {
  fetchPages: Nf,
  fetchLanguageTitles: If,
  fetchPageContent: Uf,
  fetchSegmentedContent: pg,
  fetchNearbyPages: zf,
  searchPagesByTitlePrefix: Rf
};
function Of() {
  return q.getLanguagePairs().then((e) => e.sourceLanguages);
}
function jf(e, t) {
  return C(this, null, function* () {
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
function Hf() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function qf(e, t, n, o) {
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
const ka = {
  fetchSupportedLanguageCodes: Of,
  fetchSupportedMTProviders: jf,
  fetchCXServerToken: Hf,
  addWikibaseLink: qf
};
function Gf({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const c = o.slice(i, i + s), l = zo.fetchPages(n, c).then(
      (d) => d.forEach((r) => t("addPage", r))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function Wf({ commit: e, getters: t }, { language: n, title: o }) {
  t.getLanguageTitleGroup(n, o) || zo.fetchLanguageTitles(n, o).then(
    (s) => s && e("addLanguageTitleGroup", s)
  );
}
function Xf(n) {
  return C(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield ka.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function Kf(c, l) {
  return C(this, arguments, function* ({ commit: e, getters: t, dispatch: n }, { sourceLanguage: o, targetLanguage: s, sourceTitle: a, revision: i = null }) {
    let d = t.getPage(o, a);
    if (d && d.content)
      return;
    const r = yield zo.fetchPageContent(
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
function Yf(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield zo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const Qf = {
  fetchLanguageTitles: Wf,
  fetchNearbyPages: Yf,
  fetchPageContent: Kf,
  fetchPageMetadata: Gf,
  fetchSupportedLanguageCodes: Xf
}, Jf = {
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
}, Zf = {
  namespaced: !0,
  state: Af,
  getters: Df,
  actions: Qf,
  mutations: Jf
}, e_ = {
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
}, t_ = {
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
}, n_ = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => rn(a)
  );
  return s && cg(s) ? He.parseTemplateWikitext(
    ig(s),
    n,
    t
  ) : Promise.resolve(null);
}, hg = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => rn(a)
  );
  return s ? He.parseTemplateWikitext(
    ig(s),
    n,
    t
  ) : Promise.resolve(null);
};
function Zr(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
let rs;
const ec = ({ dispatch: e, commit: t }) => {
  if (!rs) {
    let n = 1e3, o = 0;
    rs = Zr(() => {
      e("translator/saveTranslation", {}, { root: !0 }).then((a) => {
        a instanceof Ln ? (n *= o + 1, o++, setTimeout(rs, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
      }).catch((a) => {
        if (a instanceof Mn)
          t("setIsLoginDialogOn", !0);
        else
          throw a;
      });
    }, 3e3);
  }
  return rs;
}, o_ = ({ dispatch: e, commit: t }) => {
  t("setAutoSavePending", !1), ec({ dispatch: e, commit: t }).cancel();
}, s_ = (o) => C(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield ka.fetchCXServerToken().then(
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
function a_(n, o) {
  return C(this, arguments, function* ({ dispatch: e }, t) {
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
function i_({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentSectionSuggestion", n);
}
function r_({ commit: e, dispatch: t }, n) {
  t("getCXServerToken"), e("setCurrentTranslation", n);
}
function c_(n) {
  return C(this, arguments, function* ({
    dispatch: e,
    state: t
  }) {
    const { sourceLanguage: o, sourceTitle: s } = t.currentSectionSuggestion;
    yield e("mediawiki/fetchLanguageTitles", { language: o, title: s }, { root: !0 });
  });
}
function l_(s, a) {
  return C(this, arguments, function* ({ commit: e, dispatch: t, state: n }, o) {
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
function u_({
  dispatch: e,
  getters: t,
  commit: n,
  state: o
}) {
  const s = t.getCurrentProposedTranslation, { currentSourceSection: a, currentMTProvider: i } = o;
  a.setTranslationForSelectedTranslationUnit(
    s,
    i
  ), ec({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
}
function d_(a, i) {
  return C(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
    const c = document.createElement("div");
    c.innerHTML = s, c.querySelectorAll(".sx-edit-dummy-node").forEach((m) => m.remove()), s = c.innerHTML;
    const { currentSourceSection: l, targetLanguage: d, currentMTProvider: r } = e, { selectedContentTranslationUnit: u } = l;
    if (u instanceof Ve) {
      const m = o.getCurrentPage, p = o.getCurrentTargetPage;
      s = (yield hg(
        s,
        (p == null ? void 0 : p.title) || m.title,
        d
      )) || s;
    }
    l.setTranslationForSelectedTranslationUnit(
      s,
      r
    ), ec({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
  });
}
function g_({ state: e, dispatch: t }) {
  const { followingTranslationUnit: n } = e.currentSourceSection;
  n && t("selectTranslationUnitById", n.id);
}
function m_({ state: e, dispatch: t }) {
  const { selectedContentTranslationUnitIndex: n, contentTranslationUnits: o } = e.currentSourceSection, s = n - 1;
  let a = 0;
  s > -1 && (a = o[s].id), t("selectTranslationUnitById", a);
}
function p_({ commit: e, dispatch: t, state: n }, o) {
  e("setCurrentMTProvider", o);
  const { currentSourceSection: s } = n, { selectedTranslationUnitId: a } = s;
  t("translateTranslationUnitById", { id: a, provider: o });
}
function h_(i, c) {
  return C(this, arguments, function* ({ commit: e, state: t, dispatch: n, getters: o }, { id: s, provider: a }) {
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
    if (u instanceof Ve) {
      u.setBlockTemplateAdaptationInfoByHtml(
        a,
        g
      );
      const m = o.getCurrentPage, p = o.getCurrentTargetPage;
      g = (yield n_(
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
function w_({
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
function f_({ commit: e }) {
  e("setCurrentSectionSuggestion", null);
}
const __ = {
  applyEditedTranslationToSelectedTranslationUnit: d_,
  applyProposedTranslationToSelectedTranslationUnit: u_,
  clearCurrentSectionSuggestion: f_,
  clearPendingSaveTranslationRequests: o_,
  fetchCurrentSectionSuggestionLanguageTitles: c_,
  getCXServerToken: s_,
  initializeSectionTranslation: i_,
  restoreSectionTranslation: r_,
  selectNextTranslationUnit: g_,
  selectPreviousTranslationUnit: m_,
  selectTranslationUnitById: l_,
  startFavoriteSectionTranslation: a_,
  translateTranslationUnitById: h_,
  translateSelectedTranslationUnitForAllProviders: w_,
  updateMTProvider: p_
}, v_ = {
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
    e.currentSectionSuggestion = t && new qe(ye(ce({}, t), {
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
    s instanceof Ve ? s.blockTemplateProposedTranslations[n] = o : s instanceof Rt && s.addProposedTranslation(n, o);
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
}, S_ = {
  namespaced: !0,
  state: e_,
  getters: t_,
  actions: __,
  mutations: v_
}, y_ = window.Vuex.createStore, wg = y_({
  modules: { translator: Y0, suggestions: $f, mediawiki: Zf, application: S_ }
});
function C_() {
  return fg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function fg() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const k_ = typeof Proxy == "function", b_ = "devtools-plugin:setup", x_ = "plugin:settings:set";
let mn, Tr;
function V_() {
  var e;
  return mn !== void 0 || (typeof window != "undefined" && window.performance ? (mn = !0, Tr = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (mn = !0, Tr = global.perf_hooks.performance) : mn = !1), mn;
}
function $_() {
  return V_() ? Tr.now() : Date.now();
}
class A_ {
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
        return $_();
      }
    }, n && n.on(x_, (i, c) => {
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
    return C(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function D_(e, t) {
  const n = e, o = fg(), s = C_(), a = k_ && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(b_, e, t);
  else {
    const i = a ? new A_(n, s) : null;
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
const _g = window.Vue.getCurrentInstance, Bn = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const et = window.Vue.computed, Do = window.Vue.unref, E_ = window.Vue.watchEffect, vg = window.Vue.defineComponent, T_ = window.Vue.reactive, Sg = window.Vue.h, Qa = window.Vue.provide, L_ = window.Vue.ref, yg = window.Vue.watch, B_ = window.Vue.shallowRef, P_ = window.Vue.shallowReactive, F_ = window.Vue.nextTick, vt = typeof window != "undefined";
function M_(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const H = Object.assign;
function Ja(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = $e(s) ? s.map(e) : e(s);
  }
  return n;
}
const Eo = () => {
}, $e = Array.isArray;
function z(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const N_ = /\/$/, I_ = (e) => e.replace(N_, "");
function Za(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return c < l && c >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), a = t.slice(l + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = R_(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function U_(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function sl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function al(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Ht(t.matched[o], n.matched[s]) && Cg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Ht(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Cg(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!z_(e[n], t[n]))
      return !1;
  return !0;
}
function z_(e, t) {
  return $e(e) ? il(e, t) : $e(t) ? il(t, e) : e === t;
}
function il(e, t) {
  return $e(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function R_(e, t) {
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
var Bo;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Bo || (Bo = {}));
var To;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(To || (To = {}));
function O_(e) {
  if (!e)
    if (vt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), I_(e);
}
const j_ = /^[^#]+#/;
function H_(e, t) {
  return e.replace(j_, "#") + t;
}
function q_(e, t) {
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
function G_(e) {
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
    t = q_(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function rl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Lr = /* @__PURE__ */ new Map();
function W_(e, t) {
  Lr.set(e, t);
}
function X_(e) {
  const t = Lr.get(e);
  return Lr.delete(e), t;
}
let K_ = () => location.protocol + "//" + location.host;
function kg(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(c);
    return l[0] !== "/" && (l = "/" + l), sl(l, "");
  }
  return sl(n, e) + o + s;
}
function Y_(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: g }) => {
    const m = kg(e, location), p = n.value, h = t.value;
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
        type: Bo.pop,
        direction: w ? w > 0 ? To.forward : To.back : To.unknown
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
    g.state && g.replaceState(H({}, g.state, { scroll: ba() }), "");
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
function cl(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? ba() : null
  };
}
function Q_(e) {
  const { history: t, location: n } = window, o = {
    value: kg(e, n)
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
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : K_() + e + l;
    try {
      t[r ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? z("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](g);
    }
  }
  function i(l, d) {
    const r = H({}, t.state, cl(
      s.value.back,
      // keep back and forward entries but override current position
      l,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(l, r, !0), o.value = l;
  }
  function c(l, d) {
    const r = H(
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
    const u = H({}, cl(o.value, l, null), { position: r.position + 1 }, d);
    a(l, u, !1), o.value = l;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function J_(e) {
  e = O_(e);
  const t = Q_(e), n = Y_(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = H({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: H_.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Z_(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && z(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), J_(e);
}
function e1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function bg(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const kt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Br = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var ll;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ll || (ll = {}));
const t1 = {
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
    return `Redirected from "${e.fullPath}" to "${o1(t)}" via a navigation guard.`;
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
function Pn(e, t) {
  return {}.NODE_ENV !== "production" ? H(new Error(t1[e](t)), {
    type: e,
    [Br]: !0
  }, t) : H(new Error(), {
    type: e,
    [Br]: !0
  }, t);
}
function at(e, t) {
  return e instanceof Error && Br in e && (t == null || !!(e.type & t));
}
const n1 = ["params", "query", "hash"];
function o1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of n1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const ul = "[^/]+?", s1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, a1 = /[.+*?^${}()[\]/\\]/g;
function i1(e, t) {
  const n = H({}, s1, t), o = [];
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
        u || (s += "/"), s += g.value.replace(a1, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: f } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const v = f || ul;
        if (v !== ul) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + k.message);
          }
        }
        let b = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        u || (b = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && d.length < 2 ? `(?:/${b})` : "/" + b), w && (b += "?"), s += b, m += 20, w && (m += -8), h && (m += -20), v === ".*" && (m += -50);
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
          if ($e(f) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const v = $e(f) ? f.join("/") : f;
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
function r1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function c1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = r1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (dl(o))
      return 1;
    if (dl(s))
      return -1;
  }
  return s.length - o.length;
}
function dl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const l1 = {
  type: 0,
  value: ""
}, u1 = /[a-zA-Z0-9_]/;
function d1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[l1]];
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
        l === "(" ? n = 2 : u1.test(l) ? g() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
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
function g1(e, t, n) {
  const o = i1(d1(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && z(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = H(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function m1(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = pl({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, u, g) {
    const m = !g, p = p1(r);
    ({}).NODE_ENV !== "production" && _1(p, u), p.aliasOf = g && g.record;
    const h = pl(t, r), w = [
      p
    ];
    if ("alias" in r) {
      const b = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const k of b)
        w.push(H({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : p.components,
          path: k,
          // we might be the child of an alias
          aliasOf: g ? g.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let f, v;
    for (const b of w) {
      const { path: k } = b;
      if (u && k[0] !== "/") {
        const M = u.record.path, L = M[M.length - 1] === "/" ? "" : "/";
        b.path = u.record.path + (k && L + k);
      }
      if ({}.NODE_ENV !== "production" && b.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = g1(b, u, h), {}.NODE_ENV !== "production" && u && k[0] === "/" && v1(f, u), g ? (g.alias.push(f), {}.NODE_ENV !== "production" && f1(g, f)) : (v = v || f, v !== f && v.alias.push(f), m && r.name && !ml(f) && i(r.name)), p.children) {
        const M = p.children;
        for (let L = 0; L < M.length; L++)
          a(M[L], f, g && g.children[L]);
      }
      g = g || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && l(f);
    }
    return v ? () => {
      i(v);
    } : Eo;
  }
  function i(r) {
    if (bg(r)) {
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
    for (; u < n.length && c1(r, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[u].record.path || !xg(r, n[u])); )
      u++;
    n.splice(u, 0, r), r.record.name && !ml(r) && o.set(r.record.name, r);
  }
  function d(r, u) {
    let g, m = {}, p, h;
    if ("name" in r && r.name) {
      if (g = o.get(r.name), !g)
        throw Pn(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(r.params || {}).filter((b) => !g.keys.find((k) => k.name === b));
        v.length && z(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = H(
        // paramsFromLocation is a new object
        gl(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && gl(r.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in r)
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && z(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((v) => v.re.test(u.path)), !g)
        throw Pn(1, {
          location: r,
          currentLocation: u
        });
      h = g.record.name, m = H({}, u.params, r.params), p = g.stringify(m);
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
      meta: w1(w)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: d, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function gl(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function p1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: h1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function h1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function ml(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function w1(e) {
  return e.reduce((t, n) => H(t, n.meta), {});
}
function pl(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Pr(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function f1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Pr.bind(null, n)))
      return z(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Pr.bind(null, n)))
      return z(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function _1(e, t) {
  t && t.record.name && !e.name && !e.path && z(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function v1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Pr.bind(null, n)))
      return z(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function xg(e, t) {
  return t.children.some((n) => n === e || xg(e, n));
}
const Vg = /#/g, S1 = /&/g, y1 = /\//g, C1 = /=/g, k1 = /\?/g, $g = /\+/g, b1 = /%5B/g, x1 = /%5D/g, Ag = /%5E/g, V1 = /%60/g, Dg = /%7B/g, $1 = /%7C/g, Eg = /%7D/g, A1 = /%20/g;
function tc(e) {
  return encodeURI("" + e).replace($1, "|").replace(b1, "[").replace(x1, "]");
}
function D1(e) {
  return tc(e).replace(Dg, "{").replace(Eg, "}").replace(Ag, "^");
}
function Fr(e) {
  return tc(e).replace($g, "%2B").replace(A1, "+").replace(Vg, "%23").replace(S1, "%26").replace(V1, "`").replace(Dg, "{").replace(Eg, "}").replace(Ag, "^");
}
function E1(e) {
  return Fr(e).replace(C1, "%3D");
}
function T1(e) {
  return tc(e).replace(Vg, "%23").replace(k1, "%3F");
}
function L1(e) {
  return e == null ? "" : T1(e).replace(y1, "%2F");
}
function Po(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && z(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function B1(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace($g, " "), i = a.indexOf("="), c = Po(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : Po(a.slice(i + 1));
    if (c in t) {
      let d = t[c];
      $e(d) || (d = t[c] = [d]), d.push(l);
    } else
      t[c] = l;
  }
  return t;
}
function hl(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = E1(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    ($e(o) ? o.map((a) => a && Fr(a)) : [o && Fr(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function P1(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = $e(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const F1 = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), wl = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), xa = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Tg = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Mr = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function On() {
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
function Ot(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const l = (u) => {
      u === !1 ? c(Pn(4, {
        from: n,
        to: t
      })) : u instanceof Error ? c(u) : e1(u) ? c(Pn(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? M1(l, t, n) : l);
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
function M1(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && z(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ei(e, t, n, o) {
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
        if (N1(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(Ot(d, n, o, a, i));
        } else {
          let l = c();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (z(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = M_(d) ? d.default : d;
            a.components[i] = r;
            const g = (r.__vccOpts || r)[t];
            return g && Ot(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function N1(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function fl(e) {
  const t = Bn(xa), n = Bn(Tg), o = et(() => t.resolve(Do(e.to))), s = et(() => {
    const { matched: l } = o.value, { length: d } = l, r = l[d - 1], u = n.matched;
    if (!r || !u.length)
      return -1;
    const g = u.findIndex(Ht.bind(null, r));
    if (g > -1)
      return g;
    const m = _l(l[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      _l(r) === m && // avoid comparing the child with its parent
      u[u.length - 1].path !== m ? u.findIndex(Ht.bind(null, l[d - 2])) : g
    );
  }), a = et(() => s.value > -1 && R1(n.params, o.value.params)), i = et(() => s.value > -1 && s.value === n.matched.length - 1 && Cg(n.params, o.value.params));
  function c(l = {}) {
    return z1(l) ? t[Do(e.replace) ? "replace" : "push"](
      Do(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Eo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && vt) {
    const l = _g();
    if (l) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), E_(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: et(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const I1 = /* @__PURE__ */ vg({
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
  useLink: fl,
  setup(e, { slots: t }) {
    const n = T_(fl(e)), { options: o } = Bn(xa), s = et(() => ({
      [vl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [vl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Sg("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), U1 = I1;
function z1(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function R1(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!$e(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function _l(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const vl = (e, t, n) => e != null ? e : t != null ? t : n, O1 = /* @__PURE__ */ vg({
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
    ({}).NODE_ENV !== "production" && H1();
    const o = Bn(Mr), s = et(() => e.route || o.value), a = Bn(wl, 0), i = et(() => {
      let d = Do(a);
      const { matched: r } = s.value;
      let u;
      for (; (u = r[d]) && !u.components; )
        d++;
      return d;
    }), c = et(() => s.value.matched[i.value]);
    Qa(wl, et(() => i.value + 1)), Qa(F1, c), Qa(Mr, s);
    const l = L_();
    return yg(() => [l.value, c.value, e.name], ([d, r, u], [g, m, p]) => {
      r && (r.instances[u] = d, m && m !== r && d && d === g && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), d && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !Ht(r, m) || !g) && (r.enterCallbacks[u] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, r = e.name, u = c.value, g = u && u.components[r];
      if (!g)
        return Sl(n.default, { Component: g, route: d });
      const m = u.props[r], p = m ? m === !0 ? d.params : typeof m == "function" ? m(d) : m : null, w = Sg(g, H({}, p, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (u.instances[r] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && vt && w.ref) {
        const f = {
          depth: i.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        ($e(w.ref) ? w.ref.map((b) => b.i) : [w.ref.i]).forEach((b) => {
          b.__vrv_devtools = f;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Sl(n.default, { Component: w, route: d }) || w
      );
    };
  }
});
function Sl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const j1 = O1;
function H1() {
  const e = _g(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function jn(e, t) {
  const n = H({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Z1(o, ["instances", "children", "aliasOf"]))
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
function cs(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let q1 = 0;
function G1(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = q1++;
  D_({
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
        value: jn(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        r.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Lg
        });
      }
      $e(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
        let m = Fg, p = "";
        g.isExactActive ? (m = Pg, p = "This is exactly active") : g.isActive && (m = Bg, p = "This link is active"), r.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), yg(t.currentRoute, () => {
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
        guard: cs("beforeEach"),
        from: jn(u, "Current Location during this navigation"),
        to: jn(r, "Target location")
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
        guard: cs("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = cs("❌")) : m.status = cs("✅"), m.from = jn(u, "Current Location during this navigation"), m.to = jn(r, "Target location"), s.addTimelineEvent({
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
      u.forEach(Ig), r.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        Nr(g, r.filter.toLowerCase())
      ))), u.forEach((g) => Ng(g, t.currentRoute.value)), r.rootNodes = u.map(Mg);
    }
    let d;
    s.on.getInspectorTree((r) => {
      d = r, r.app === e && r.inspectorId === c && l();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        g && (r.state = {
          options: X1(g)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function W1(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function X1(e) {
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
        display: e.keys.map((o) => `${o.name}${W1(o)}`).join(" "),
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
const Lg = 15485081, Bg = 2450411, Pg = 8702998, K1 = 2282478, Fg = 16486972, Y1 = 6710886;
function Mg(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: K1
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Fg
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Lg
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Pg
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Bg
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Y1
  });
  let o = n.__vd_id;
  return o == null && (o = String(Q1++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Mg)
  };
}
let Q1 = 0;
const J1 = /^\/(.*)\/([a-z]*)$/;
function Ng(e, t) {
  const n = t.matched.length && Ht(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Ht(o, e.record))), e.children.forEach((o) => Ng(o, t));
}
function Ig(e) {
  e.__vd_match = !1, e.children.forEach(Ig);
}
function Nr(e, t) {
  const n = String(e.re).match(J1);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Nr(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Po(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Nr(i, t));
}
function Z1(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function ev(e) {
  const t = m1(e.routes, e), n = e.parseQuery || B1, o = e.stringifyQuery || hl, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = On(), i = On(), c = On(), l = B_(kt);
  let d = kt;
  vt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = Ja.bind(null, (_) => "" + _), u = Ja.bind(null, L1), g = (
    // @ts-expect-error: intentionally avoid the type check
    Ja.bind(null, Po)
  );
  function m(_, V) {
    let x, E;
    return bg(_) ? (x = t.getRecordMatcher(_), E = V) : E = _, t.addRoute(E, x);
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
    if (V = H({}, V || l.value), typeof _ == "string") {
      const I = Za(n, _, V.path), X = t.resolve({ path: I.path }, V), Ne = s.createHref(I.fullPath);
      return {}.NODE_ENV !== "production" && (Ne.startsWith("//") ? z(`Location "${_}" resolved to "${Ne}". A resolved location cannot start with multiple slashes.`) : X.matched.length || z(`No match found for location with path "${_}"`)), H(I, X, {
        params: g(X.params),
        hash: Po(I.hash),
        redirectedFrom: void 0,
        href: Ne
      });
    }
    let x;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && z(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), x = H({}, _, {
        path: Za(n, _.path, V.path).path
      });
    else {
      const I = H({}, _.params);
      for (const X in I)
        I[X] == null && delete I[X];
      x = H({}, _, {
        params: u(I)
      }), V.params = u(V.params);
    }
    const E = t.resolve(x, V), O = _.hash || "";
    ({}).NODE_ENV !== "production" && O && !O.startsWith("#") && z(`A \`hash\` should always start with the character "#". Replace "${O}" with "#${O}".`), E.params = r(g(E.params));
    const Y = U_(o, H({}, _, {
      hash: D1(O),
      path: E.path
    })), U = s.createHref(Y);
    return {}.NODE_ENV !== "production" && (U.startsWith("//") ? z(`Location "${_}" resolved to "${U}". A resolved location cannot start with multiple slashes.`) : E.matched.length || z(`No match found for location with path "${"path" in _ ? _.path : _}"`)), H({
      fullPath: Y,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: O,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === hl ? P1(_.query) : _.query || {}
      )
    }, E, {
      redirectedFrom: void 0,
      href: U
    });
  }
  function v(_) {
    return typeof _ == "string" ? Za(n, _, l.value.path) : H({}, _);
  }
  function b(_, V) {
    if (d !== _)
      return Pn(8, {
        from: V,
        to: _
      });
  }
  function k(_) {
    return R(_);
  }
  function M(_) {
    return k(H(v(_), { replace: !0 }));
  }
  function L(_) {
    const V = _.matched[_.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: x } = V;
      let E = typeof x == "function" ? x(_) : x;
      if (typeof E == "string" && (E = E.includes("?") || E.includes("#") ? E = v(E) : (
        // force empty params
        { path: E }
      ), E.params = {}), {}.NODE_ENV !== "production" && !("path" in E) && !("name" in E))
        throw z(`Invalid redirect found:
${JSON.stringify(E, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return H({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in E ? {} : _.params
      }, E);
    }
  }
  function R(_, V) {
    const x = d = f(_), E = l.value, O = _.state, Y = _.force, U = _.replace === !0, I = L(x);
    if (I)
      return R(
        H(v(I), {
          state: typeof I == "object" ? H({}, O, I.state) : O,
          force: Y,
          replace: U
        }),
        // keep original redirectedFrom if it exists
        V || x
      );
    const X = x;
    X.redirectedFrom = V;
    let Ne;
    return !Y && al(o, E, x) && (Ne = Pn(16, { to: X, from: E }), Ee(
      E,
      E,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ne ? Promise.resolve(Ne) : De(X, E)).catch((ie) => at(ie) ? (
      // navigation redirects still mark the router as ready
      at(
        ie,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ie : re(ie)
    ) : (
      // reject any unknown error
      Me(ie, X, E)
    )).then((ie) => {
      if (ie) {
        if (at(
          ie,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          al(o, f(ie.to), X) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (z(`Detected a possibly infinite redirection in a navigation guard when going from "${E.fullPath}" to "${X.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : R(
            // keep options
            H({
              // preserve an existing replacement but allow the redirect to override it
              replace: U
            }, v(ie.to), {
              state: typeof ie.to == "object" ? H({}, O, ie.to.state) : O,
              force: Y
            }),
            // preserve the original redirectedFrom if any
            V || X
          );
      } else
        ie = Z(X, E, !0, U, O);
      return J(X, E, ie), ie;
    });
  }
  function A(_, V) {
    const x = b(_, V);
    return x ? Promise.reject(x) : Promise.resolve();
  }
  function B(_) {
    const V = Xt.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(_) : _();
  }
  function De(_, V) {
    let x;
    const [E, O, Y] = tv(_, V);
    x = ei(E.reverse(), "beforeRouteLeave", _, V);
    for (const I of E)
      I.leaveGuards.forEach((X) => {
        x.push(Ot(X, _, V));
      });
    const U = A.bind(null, _, V);
    return x.push(U), St(x).then(() => {
      x = [];
      for (const I of a.list())
        x.push(Ot(I, _, V));
      return x.push(U), St(x);
    }).then(() => {
      x = ei(O, "beforeRouteUpdate", _, V);
      for (const I of O)
        I.updateGuards.forEach((X) => {
          x.push(Ot(X, _, V));
        });
      return x.push(U), St(x);
    }).then(() => {
      x = [];
      for (const I of Y)
        if (I.beforeEnter)
          if ($e(I.beforeEnter))
            for (const X of I.beforeEnter)
              x.push(Ot(X, _, V));
          else
            x.push(Ot(I.beforeEnter, _, V));
      return x.push(U), St(x);
    }).then(() => (_.matched.forEach((I) => I.enterCallbacks = {}), x = ei(Y, "beforeRouteEnter", _, V), x.push(U), St(x))).then(() => {
      x = [];
      for (const I of i.list())
        x.push(Ot(I, _, V));
      return x.push(U), St(x);
    }).catch((I) => at(
      I,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? I : Promise.reject(I));
  }
  function J(_, V, x) {
    c.list().forEach((E) => B(() => E(_, V, x)));
  }
  function Z(_, V, x, E, O) {
    const Y = b(_, V);
    if (Y)
      return Y;
    const U = V === kt, I = vt ? history.state : {};
    x && (E || U ? s.replace(_.fullPath, H({
      scroll: U && I && I.scroll
    }, O)) : s.push(_.fullPath, O)), l.value = _, Ee(_, V, x, U), re();
  }
  let pe;
  function fe() {
    pe || (pe = s.listen((_, V, x) => {
      if (!In.listening)
        return;
      const E = f(_), O = L(E);
      if (O) {
        R(H(O, { replace: !0 }), E).catch(Eo);
        return;
      }
      d = E;
      const Y = l.value;
      vt && W_(rl(Y.fullPath, x.delta), ba()), De(E, Y).catch((U) => at(
        U,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? U : at(
        U,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (R(
        U.to,
        E
        // avoid an uncaught rejection, let push call triggerError
      ).then((I) => {
        at(
          I,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !x.delta && x.type === Bo.pop && s.go(-1, !1);
      }).catch(Eo), Promise.reject()) : (x.delta && s.go(-x.delta, !1), Me(U, E, Y))).then((U) => {
        U = U || Z(
          // after navigation, all matched components are resolved
          E,
          Y,
          !1
        ), U && (x.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !at(
          U,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-x.delta, !1) : x.type === Bo.pop && at(
          U,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), J(E, Y, U);
      }).catch(Eo);
    }));
  }
  let Wt = On(), dn = On(), Xe;
  function Me(_, V, x) {
    re(_);
    const E = dn.list();
    return E.length ? E.forEach((O) => O(_, V, x)) : ({}.NODE_ENV !== "production" && z("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function ee() {
    return Xe && l.value !== kt ? Promise.resolve() : new Promise((_, V) => {
      Wt.add([_, V]);
    });
  }
  function re(_) {
    return Xe || (Xe = !_, fe(), Wt.list().forEach(([V, x]) => _ ? x(_) : V()), Wt.reset()), _;
  }
  function Ee(_, V, x, E) {
    const { scrollBehavior: O } = e;
    if (!vt || !O)
      return Promise.resolve();
    const Y = !x && X_(rl(_.fullPath, 0)) || (E || !x) && history.state && history.state.scroll || null;
    return F_().then(() => O(_, V, Y)).then((U) => U && G_(U)).catch((U) => Me(U, _, V));
  }
  const te = (_) => s.go(_);
  let gn;
  const Xt = /* @__PURE__ */ new Set(), In = {
    currentRoute: l,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: k,
    replace: M,
    go: te,
    back: () => te(-1),
    forward: () => te(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: dn.add,
    isReady: ee,
    install(_) {
      const V = this;
      _.component("RouterLink", U1), _.component("RouterView", j1), _.config.globalProperties.$router = V, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Do(l)
      }), vt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !gn && l.value === kt && (gn = !0, k(s.location).catch((O) => {
        ({}).NODE_ENV !== "production" && z("Unexpected error when starting the router:", O);
      }));
      const x = {};
      for (const O in kt)
        Object.defineProperty(x, O, {
          get: () => l.value[O],
          enumerable: !0
        });
      _.provide(xa, V), _.provide(Tg, P_(x)), _.provide(Mr, l);
      const E = _.unmount;
      Xt.add(_), _.unmount = function() {
        Xt.delete(_), Xt.size < 1 && (d = kt, pe && pe(), pe = null, l.value = kt, gn = !1, Xe = !1), E();
      }, {}.NODE_ENV !== "production" && vt && G1(_, V, t);
    }
  };
  function St(_) {
    return _.reduce((V, x) => V.then(() => B(x)), Promise.resolve());
  }
  return In;
}
function tv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((d) => Ht(d, c)) ? o.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((d) => Ht(d, l)) || s.push(l));
  }
  return [n, o, s];
}
function me() {
  return Bn(xa);
}
const nv = {
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
}, ov = {
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
}, sv = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], av = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, iv = {
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
}, rv = {
  languages: nv,
  scriptgroups: ov,
  rtlscripts: sv,
  regiongroups: av,
  territories: iv
};
var ge = rv;
function Ro(e) {
  return !!ge.languages[e];
}
function qt(e) {
  return Ro(e) && ge.languages[e].length === 1 ? ge.languages[e][0] : !1;
}
function cv() {
  return ge.languages;
}
function Oo(e) {
  var t = qt(e);
  return t ? Oo(t) : Ro(e) ? ge.languages[e][0] : "Zyyy";
}
function nc(e) {
  var t = qt(e);
  return t ? nc(t) : Ro(e) && ge.languages[e][1] || "UNKNOWN";
}
function Fo(e) {
  var t = qt(e);
  return t ? Fo(t) : Ro(e) && ge.languages[e][2] || e;
}
function lv() {
  var e, t = {};
  for (e in ge.languages)
    qt(e) || (t[e] = Fo(e));
  return t;
}
function Ug(e) {
  var t, n, o = [];
  for (t in ge.languages)
    if (!qt(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Oo(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function uv(e) {
  return Ug([e]);
}
function zg(e) {
  var t;
  for (t in ge.scriptgroups)
    if (ge.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function oc(e) {
  return zg(Oo(e));
}
function Rg(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = qt(n) || n, a = oc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Og(e) {
  var t, n, o, s = {};
  for (t in ge.languages)
    if (!qt(t)) {
      for (n = 0; n < e.length; n++)
        if (nc(t).includes(e[n])) {
          o = oc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function dv(e) {
  return Og([e]);
}
function gv(e) {
  var t, n, o, s = [];
  for (t = Rg(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function mv(e, t) {
  var n = Fo(e) || e, o = Fo(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function jg(e) {
  return ge.rtlscripts.includes(Oo(e));
}
function pv(e) {
  return jg(e) ? "rtl" : "ltr";
}
function hv(e) {
  return ge.territories[e] || [];
}
function wv(e, t) {
  t.target ? ge.languages[e] = [t.target] : ge.languages[e] = [t.script, t.regions, t.autonym];
}
var j = {
  addLanguage: wv,
  getAutonym: Fo,
  getAutonyms: lv,
  getDir: pv,
  getGroupOfScript: zg,
  getLanguages: cv,
  getLanguagesByScriptGroup: Rg,
  getLanguagesByScriptGroupInRegion: dv,
  getLanguagesByScriptGroupInRegions: Og,
  getLanguagesInScript: uv,
  getLanguagesInScripts: Ug,
  getLanguagesInTerritory: hv,
  getRegions: nc,
  getScript: Oo,
  getScriptGroupOfLanguage: oc,
  isKnown: Ro,
  isRedirect: qt,
  isRtl: jg,
  sortByScriptGroup: gv,
  sortByAutonym: mv
};
const fv = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), d = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, _v = (e) => {
  const t = fv(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
}, vv = window.Vue.inject, Sv = window.Vue.reactive;
var yv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Hg = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(yv, function() {
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
                for (let N = 0; N < S.length; N++) {
                  const _e = S[N]();
                  if (_e !== null)
                    return _e;
                }
                return null;
              };
            }
            function v(S) {
              const N = w, _e = [];
              for (let ot = 0; ot < S.length; ot++) {
                const st = S[ot]();
                if (st === null)
                  return w = N, null;
                _e.push(st);
              }
              return _e;
            }
            function b(S, N) {
              return () => {
                const _e = w, ot = [];
                let st = N();
                for (; st !== null; )
                  ot.push(st), st = N();
                return ot.length < S ? (w = _e, null) : ot;
              };
            }
            function k(S) {
              const N = S.length;
              return () => {
                let _e = null;
                return p.slice(w, w + N) === S && (_e = S, w += N), _e;
              };
            }
            function M(S) {
              return () => {
                const N = p.slice(w).match(S);
                return N === null ? null : (w += N[0].length, N[0]);
              };
            }
            const L = M(/^\s+/), R = k("|"), A = k(":"), B = k("\\"), De = M(/^./), J = k("$"), Z = M(/^\d+/), pe = k('"'), fe = k("'"), Wt = M(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), dn = M(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Xe = f([Me, M(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Me() {
              const S = v([B, De]);
              return S === null ? null : S[1];
            }
            const ee = f([Me, dn]), re = f([Me, Wt]);
            function Ee() {
              const S = v([J, Z]);
              return S === null ? null : ["REPLACE", parseInt(S[1], 10) - 1];
            }
            const te = (gn = M(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Xt = function(S) {
              return S.toString();
            }, () => {
              const S = gn();
              return S === null ? null : Xt(S);
            });
            var gn, Xt;
            function In() {
              const S = v([R, b(0, Yo)]);
              if (S === null)
                return null;
              const N = S[1];
              return N.length > 1 ? ["CONCAT"].concat(N) : N[0];
            }
            function St() {
              const S = v([te, A, Ee]);
              return S === null ? null : [S[0], S[2]];
            }
            function _() {
              const S = v([te, A, Yo]);
              return S === null ? null : [S[0], S[2]];
            }
            function V() {
              const S = v([te, A]);
              return S === null ? null : [S[0], ""];
            }
            const x = f([function() {
              const S = v([f([St, _, V]), b(0, In)]);
              return S === null ? null : S[0].concat(S[1]);
            }, function() {
              const S = v([te, b(0, In)]);
              return S === null ? null : [S[0]].concat(S[1]);
            }]), E = k("{{"), O = k("}}"), Y = k("[["), U = k("]]"), I = k("["), X = k("]");
            function Ne() {
              const S = v([E, x, O]);
              return S === null ? null : S[1];
            }
            const ie = f([function() {
              const S = v([b(1, Yo), R, b(1, Ko)]);
              return S === null ? null : [["CONCAT"].concat(S[0]), ["CONCAT"].concat(S[2])];
            }, function() {
              const S = v([b(1, Yo)]);
              return S === null ? null : [["CONCAT"].concat(S[0])];
            }]);
            function mc() {
              let S = null;
              const N = v([Y, ie, U]);
              if (N !== null) {
                const _e = N[1];
                S = ["WIKILINK"].concat(_e);
              }
              return S;
            }
            function pc() {
              let S = null;
              const N = v([I, b(1, wm), L, b(1, Ko), X]);
              return N !== null && (S = ["EXTLINK", N[1].length === 1 ? N[1][0] : ["CONCAT"].concat(N[1]), ["CONCAT"].concat(N[3])]), S;
            }
            const $a = M(/^[A-Za-z]+/);
            function gm() {
              const S = M(/^[^"]*/), N = v([pe, S, pe]);
              return N === null ? null : N[1];
            }
            function mm() {
              const S = M(/^[^']*/), N = v([fe, S, fe]);
              return N === null ? null : N[1];
            }
            function pm() {
              const S = M(/^\s*=\s*/), N = v([L, $a, S, f([gm, mm])]);
              return N === null ? null : [N[1], N[3]];
            }
            function hm() {
              const S = b(0, pm)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], S);
            }
            const wm = f([Ne, Ee, mc, pc, function() {
              const S = b(1, Xe)();
              return S === null ? null : S.join("");
            }]), Ko = f([Ne, Ee, mc, pc, function() {
              let S = null;
              const N = w, _e = k("<"), ot = M(/^\/?/), st = M(/^\s*>/), Aa = v([_e, $a, hm, ot, st]);
              if (Aa === null)
                return null;
              const wc = w, fc = Aa[1], Da = b(0, Ko)(), fm = w, _c = v([k("</"), $a, st]);
              if (_c === null)
                return ["CONCAT", p.slice(N, wc)].concat(Da);
              const _m = w, vm = _c[1], vc = Aa[2];
              if (function(Kt, Qo, Ea, Ta = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Kt = Kt.toLowerCase()) !== (Qo = Qo.toLowerCase()) || Ta.allowedHtmlElements.indexOf(Kt) === -1)
                  return !1;
                const Sm = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Jo = 0, ym = Ea.length; Jo < ym; Jo += 2) {
                  const La = Ea[Jo];
                  if (Ta.allowedHtmlCommonAttributes.indexOf(La) === -1 && (Ta.allowedHtmlAttributesByElement[Kt] || []).indexOf(La) === -1 || La === "style" && Ea[Jo + 1].search(Sm) !== -1)
                    return !1;
                }
                return !0;
              }(fc, vm, vc.slice(1)))
                S = ["HTMLELEMENT", fc, vc].concat(Da);
              else {
                const Kt = (Qo) => Qo.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                S = ["CONCAT", Kt(p.slice(N, wc))].concat(Da, Kt(p.slice(fm, _m)));
              }
              return S;
            }, function() {
              const S = b(1, re)();
              return S === null ? null : S.join("");
            }]), Yo = f([Ne, Ee, function() {
              const S = b(1, ee)();
              return S === null ? null : S.join("");
            }]), hc = function() {
              const S = b(0, Ko)();
              return S === null ? null : ["CONCAT"].concat(S);
            }();
            if (hc === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return hc;
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
})(Hg);
var Cv = Hg.exports;
const yl = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, qg = Symbol("banana-context");
function Ae() {
  const e = vv(qg);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function kv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Sv(new Cv(e.locale, e));
  return {
    install: (n) => {
      n.provide(qg, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = yl(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = yl(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const bv = window.Vuex.useStore, xv = window.Vue.computed, Vv = {
  name: "CxTranslationWork",
  components: { MwRow: T, MwCol: y, MwThumbnail: Wr, MwIcon: K },
  props: {
    translation: {
      type: Uo,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e) {
    const t = bv(), n = (a, i) => {
      const c = t.getters["mediawiki/getPage"](a, i);
      return c == null ? void 0 : c.thumbnail;
    }, o = Ae();
    return {
      timeagoMessage: xv(() => {
        const a = {
          days: "cx-sx-translation-work-days-since-started",
          months: "cx-sx-translation-work-months-since-started",
          years: "cx-sx-translation-work-years-since-started"
        }, i = _v(e.translation.startTimestamp);
        return o.i18n(
          a[i.postfix],
          i.value
        );
      }),
      getAutonym: j.getAutonym,
      getDir: j.getDir,
      getImage: n,
      mwIconArrowForward: ln,
      mwIconArrowNext: Hr
    };
  }
}, ls = window.Vue.resolveComponent, pn = window.Vue.createVNode, it = window.Vue.createElementVNode, Cl = window.Vue.renderSlot, kl = window.Vue.withModifiers, ti = window.Vue.toDisplayString, ni = window.Vue.withCtx, $v = window.Vue.openBlock, Av = window.Vue.createElementBlock, Dv = window.Vue.createCommentVNode, Ev = { class: "col shrink pe-4" }, Tv = { class: "col" }, Lv = { class: "cx-translation__details column justify-between ma-0" }, Bv = { class: "row ma-0" }, Pv = { class: "col grow" }, Fv = { class: "col shrink ps-2" }, Mv = ["dir", "textContent"], Nv = ["dir", "textContent"], Iv = ["textContent"];
function Uv(e, t, n, o, s, a) {
  const i = ls("mw-thumbnail"), c = ls("mw-icon"), l = ls("mw-col"), d = ls("mw-row");
  return n.translation ? ($v(), Av("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = kl((r) => e.$emit("click"), ["stop"]))
  }, [
    it("div", Ev, [
      pn(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    it("div", Tv, [
      it("div", Lv, [
        it("div", Bv, [
          it("div", Pv, [
            Cl(e.$slots, "title")
          ]),
          it("div", Fv, [
            pn(c, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = kl((r) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Cl(e.$slots, "mid-content"),
        pn(d, { class: "cx-translation__footer ma-0" }, {
          default: ni(() => [
            pn(l, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: ni(() => [
                it("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: ti(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, Mv),
                pn(c, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                it("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: ti(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, Nv)
              ]),
              _: 1
            }),
            pn(l, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: ni(() => [
                it("span", {
                  textContent: ti(o.timeagoMessage)
                }, null, 8, Iv)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ])) : Dv("", !0);
}
const Gg = /* @__PURE__ */ D(Vv, [["render", Uv]]);
const Hn = window.Vue.unref, bl = window.Vue.toDisplayString, zv = window.Vue.normalizeClass, Rv = window.Vue.createElementVNode, oi = window.Vue.openBlock, Ov = window.Vue.createElementBlock, xl = window.Vue.createCommentVNode, Vl = window.Vue.createVNode, us = window.Vue.withCtx, $l = window.Vue.createBlock, jv = ["lang", "textContent"], Hv = ["lang", "textContent"], qv = window.Vue.computed, Gv = window.Vue.inject, Wv = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Kr,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Gv("colors").gray200, s = qv(
      () => {
        var a;
        return ((a = t.translation.progress) == null ? void 0 : a.any) * 100 || 0;
      }
    );
    return (a, i) => (oi(), $l(Gg, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Hn(qd),
      onActionIconClicked: i[0] || (i[0] = (c) => a.$emit("delete-translation"))
    }, {
      title: us(() => [
        Rv("h5", {
          class: zv(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: bl(e.translation.sourceTitle)
        }, null, 10, jv),
        e.translation.isLeadSectionTranslation ? xl("", !0) : (oi(), Ov("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: bl(e.translation.sourceSectionTitle)
        }, null, 8, Hv))
      ]),
      "mid-content": us(() => [
        e.translation.progress ? (oi(), $l(Hn(T), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: us(() => [
            Vl(Hn(y), null, {
              default: us(() => [
                Vl(Hn(tg), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Hn(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : xl("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Xv = window.Vue.computed, Kv = window.Vue.inject, jo = () => {
  const e = Kv("breakpoints");
  return { isDesktop: Xv(
    () => !q.isMobileDomain() && e.value.tabletAndUp
  ) };
}, Ce = window.Vue.computed;
function F(e) {
  const t = Ce(() => e.state.application.sourceLanguage), n = Ce(() => e.state.application.targetLanguage), o = Ce(
    () => e.state.application.currentMTProvider
  ), s = Ce(
    () => e.state.application.currentSectionSuggestion
  ), a = Ce(
    () => e.state.application.currentSourceSection
  ), i = Ce(
    () => j.getAutonym(t.value)
  ), c = Ce(
    () => j.getAutonym(n.value)
  ), l = Ce(
    () => {
      var p;
      return (p = a.value) == null ? void 0 : p.isTitleSelected;
    }
  ), d = Ce(
    () => {
      var p;
      return (p = a.value) == null ? void 0 : p.selectedContentTranslationUnit;
    }
  ), r = Ce(
    () => e.getters["application/getCurrentProposedTranslation"]
  ), u = Ce(
    () => e.getters["application/getCurrentPage"]
  ), g = Ce(
    () => e.getters["application/getCurrentTargetPage"]
  ), m = Ce(() => e.state.application.previousRoute);
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
const Yv = window.Vuex.useStore, sc = () => {
  const e = Yv(), t = me();
  return (n, o) => C(void 0, null, function* () {
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
}, Al = window.Vue.computed, Qv = window.Vuex.useStore;
function Ho() {
  const e = Qv(), t = Al(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Al(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const Jv = (e, t) => {
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
}, Ir = (e) => {
  if (!history.pushState)
    return;
  const t = e instanceof Uo, n = new URLSearchParams(location.search);
  n.set("page", e == null ? void 0 : e.sourceTitle), n.set("from", e == null ? void 0 : e.sourceLanguage), n.set("to", e == null ? void 0 : e.targetLanguage), n.set("sx", !0), t && n.set("draft", !0), n.delete("title"), un(Object.fromEntries(n));
}, Zv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), un(Object.fromEntries(n));
}, un = (e) => {
  history.replaceState(
    {},
    document.title,
    A0("Special:ContentTranslation", e)
  );
}, Wg = () => new URLSearchParams(location.search).get("force-quick-tutorial"), eS = window.Vuex.useStore, tS = () => {
  const e = eS();
  return () => C(void 0, null, function* () {
    const { sourceLanguage: t, targetLanguage: n } = F(e);
    let o = yield tt.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    const s = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getPublishedTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    o = o.filter(
      (l) => !s.includes(l) && !i.includes(l)
    );
    const c = new mf({
      sourceLanguage: t,
      targetLanguage: n,
      seeds: o
    });
    return e.commit("suggestions/addSuggestionSeedCollection", c), c;
  });
}, nS = window.Vuex.useStore, ac = () => {
  const e = nS(), t = tS();
  return () => C(void 0, null, function* () {
    return yield t(), e.dispatch("suggestions/initializeSuggestions");
  });
}, qo = window.Vuex.useStore, Go = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = q.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = ce({ sx: !0 }, s), o && (s.section = o), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, Wo = (e, t, n) => {
  if (e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), !history.pushState)
    return;
  const o = new URLSearchParams(location.search);
  o.set("from", t), o.set("to", n), o.delete("title"), un(Object.fromEntries(o));
}, Xg = () => {
  const e = qo(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Ho();
  return () => C(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = Jv(
      t.value,
      n.value
    ), a = new URLSearchParams(location.search), i = a.get("page"), c = a.get("section");
    Go(
      o,
      s,
      i,
      c
    ) || Wo(e, o, s);
  });
}, Kg = () => {
  const e = qo(), t = ac();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = F(e);
    n === o && (n = a.value, o = s.value), Go(
      n,
      o,
      null,
      null
    ) || (Wo(e, n, o), t());
  };
}, oS = () => {
  const e = qo(), t = ac();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      Go(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (Wo(e, o, s), t());
    }
  );
}, sS = () => {
  const e = qo();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Go(
      n,
      o,
      s,
      null
    ) || Wo(e, n, o);
  };
}, aS = () => {
  const e = qo();
  return (t, n) => C(void 0, null, function* () {
    const { sourceLanguage: o, targetLanguage: s } = F(e);
    t === n && (t = s.value, n = o.value);
    const a = e.getters["application/getCurrentLanguageTitleGroup"], i = a.getTitleForLanguage(t);
    if (!Go(
      t,
      n,
      i,
      null
    )) {
      Wo(e, t, n);
      let l = new qe({
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
}, Yg = "cx-translation-session-position-", Qg = () => Yg + mw.user.sessionId(), Jg = () => {
  const e = Qg();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, iS = function() {
  const e = Jg();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Yg)).forEach((n) => mw.storage.remove(n));
  const t = Qg();
  mw.storage.set(t, e + 1);
};
let Ur = null;
function rS(e) {
  if (Ur)
    return Promise.resolve(Ur);
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
function cS(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function lS(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = Jg(), l = {
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
  ) : d = rS(i).then((r) => {
    Ur = r, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: cS(r)
      })
    );
  }), d.then(() => {
    iS();
  });
}
const uS = window.Vue.inject, Zg = Symbol("event-logging-context"), nt = function() {
  const e = uS(Zg);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, dS = () => ({
  install: (e) => {
    e.provide(Zg, lS);
  }
}), gS = (e, t, n, o) => C(void 0, null, function* () {
  var c, l, d;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((l = t.mt) == null ? void 0 : l.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, i = yield hg(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), mS = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, pS = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return gS(e, t, n, o);
  mS(e, t);
}), hS = (e, t, n) => {
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
        const l = pS(
          i,
          c,
          (t == null ? void 0 : t.title) || e.title,
          t.language
        );
        o.push(l);
      }
  return Promise.all(o);
}, wS = { restoreCorporaDraft: hS }, ic = () => (e, t, n, o = {}) => {
  q.setCXToken(e, t, n), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
};
function fS(e) {
  return e.$el = $(e), e;
}
function _S(e, t, n, o) {
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
function vS() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function SS(e, t) {
  return C(this, null, function* () {
    yield rc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = fS(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const yS = window.Vue.computed, CS = window.Vue.onMounted, kS = window.Vue.ref;
function bS(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const xS = {
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
    const n = kS(null);
    let o = null;
    const s = yS(() => o.getHtml()), a = () => {
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
    return CS(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = bS;
      const r = yield SS(l, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = _S(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = vS, o.focus();
    })), { sxeditor: n };
  }
}, zr = window.Vue.createElementVNode, VS = window.Vue.openBlock, $S = window.Vue.createElementBlock, AS = ["lang", "dir"], DS = /* @__PURE__ */ zr("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ zr("div", { class: "toolbar" })
], -1), ES = ["lang", "dir"];
function TS(e, t, n, o, s, a) {
  return VS(), $S("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    DS,
    zr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, ES)
  ], 8, AS);
}
const LS = /* @__PURE__ */ D(xS, [["render", TS]]);
function rc() {
  return mw.loader.using("mw.cx3.ve");
}
const BS = window.Vuex.useStore, em = () => {
  const e = BS();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield rc(), new Promise((s) => {
      setTimeout(() => {
        const a = mg.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, PS = window.Vuex.useStore, Xo = () => {
  const e = nt(), t = PS(), n = me(), {
    currentSourcePage: o,
    currentTargetPage: s,
    sourceLanguage: a,
    targetLanguage: i
  } = F(t), c = oS(), l = em(), { isDesktop: d } = jo(), r = ic();
  return (u) => C(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: g,
      targetLanguage: m,
      sourceTitle: p,
      pageRevision: h,
      isLeadSectionTranslation: w
    } = u;
    if (d.value) {
      const b = {};
      w || (b.sourcesection = u.sourceSectionTitle), r(
        a.value,
        i.value,
        p,
        b
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
    }), yield l(a.value, p), u.restored || (yield He.fetchTranslationUnits(u.translationId).then(
      (b) => wS.restoreCorporaDraft(
        o.value,
        s.value,
        b
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
}, FS = window.Vuex.useStore, cc = () => {
  const e = sc(), t = Xo(), n = FS(), { sourceLanguage: o, targetLanguage: s } = F(n), a = (u, g) => {
    const m = n.getters["translator/getDraftTranslation"](
      u,
      Xr.LEAD_SECTION_DUMMY_TITLE,
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
}, MS = window.Vuex.useStore, NS = () => {
  const e = MS();
  return (t, n, o) => C(void 0, null, function* () {
    const s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o), a = e.getters["suggestions/getSectionSuggestionsForPublishedArticle"](t, n, o);
    let i = s || a;
    return i || (i = yield tt.fetchSectionSuggestions(
      t,
      o,
      n
    ), i || (i = new qe({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o
    })), e.commit("suggestions/addSectionSuggestionForPublished", i)), i;
  });
};
const ds = window.Vue.withModifiers, IS = window.Vue.toDisplayString, US = window.Vue.createElementVNode, hn = window.Vue.unref, gs = window.Vue.openBlock, Dl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const qn = window.Vue.createVNode, El = window.Vue.createElementBlock, ms = window.Vue.withCtx, zS = ["lang", "href", "textContent"], RS = { key: 1 }, OS = { key: 2 }, jS = window.Vuex.useStore, Tl = window.Vue.computed, Ll = window.Vue.ref, HS = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: lg,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = jS(), o = Ll(!0), s = Ll(null), a = Tl(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), i = Tl(
      () => a.value && Object.keys(a.value)[0]
    );
    NS()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => s.value = p).catch((p) => console.log(p)).finally(() => o.value = !1);
    const l = me();
    jo();
    const d = () => {
      n.dispatch("application/initializeSectionTranslation", s.value), l.push({ name: "sx-section-selector", query: { force: !0 } });
    }, r = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: u } = cc();
    F(n);
    const g = sS(), m = () => {
      g(t.translation), u(t.translation);
    };
    return (p, h) => (gs(), Dl(Gg, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: r
    }, {
      title: ms(() => [
        US("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: h[0] || (h[0] = ds(() => {
          }, ["stop"])),
          textContent: IS(e.translation.sourceTitle)
        }, null, 8, zS)
      ]),
      "mid-content": ms(() => [
        qn(hn(T), { class: "ma-0 py-2" }, {
          default: ms(() => [
            qn(hn(y), null, {
              default: ms(() => [
                o.value ? (gs(), Dl(hn(je), { key: 0 })) : a.value ? (gs(), El("div", RS, [
                  qn(P, {
                    class: "cx-published-translation__missing-sections-button pa-0",
                    icon: hn(va),
                    type: "text",
                    label: i.value,
                    progressive: "",
                    onClick: ds(d, ["stop"])
                  }, null, 8, ["icon", "label", "onClick"]),
                  qn(P, {
                    class: "cx-published-translation__missing-sections-button pa-0 ms-4",
                    icon: hn(Zd),
                    type: "icon",
                    progressive: "",
                    onClick: ds(d, ["stop"])
                  }, null, 8, ["icon", "onClick"])
                ])) : (gs(), El("div", OS, [
                  qn(P, {
                    class: "cx-published-translation__missing-sections-button pa-0",
                    icon: hn(va),
                    type: "text",
                    label: p.$i18n("sx-published-translation-new-translation-button-label"),
                    progressive: "",
                    onClick: ds(m, ["stop"])
                  }, null, 8, ["icon", "label", "onClick"])
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
}, Bl = window.Vuex.useStore, qS = () => {
  const e = Bl(), { commit: t } = Bl(), { sourceLanguage: n, targetLanguage: o } = F(e), s = nt();
  return (a) => C(void 0, null, function* () {
    a.sectionTranslationId ? (yield He.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield He.deleteCXTranslation(
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
const GS = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: P,
    MwDialog: We
  },
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Uo,
      default: null
    }
  },
  emits: ["update:modelValue", "continue-translation", "discard-translation"],
  setup(e, { emit: t }) {
    const n = () => t("update:modelValue", !1), o = qS();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, WS = window.Vue.resolveDirective, si = window.Vue.createElementVNode, XS = window.Vue.withDirectives, Pl = window.Vue.resolveComponent, Fl = window.Vue.createVNode, Ml = window.Vue.withCtx, KS = window.Vue.openBlock, YS = window.Vue.createBlock, QS = { class: "pa-4" }, JS = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function ZS(e, t, n, o, s, a) {
  const i = Pl("mw-button"), c = Pl("mw-dialog"), l = WS("i18n");
  return KS(), YS(c, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: Ml(() => [
      si("div", JS, [
        Fl(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        Fl(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: Ml(() => [
      si("div", QS, [
        XS(si("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const ey = /* @__PURE__ */ D(GS, [["render", ZS]]), ty = window.Vue.resolveDirective, Yt = window.Vue.createElementVNode, ps = window.Vue.withDirectives, ai = window.Vue.unref, ii = window.Vue.openBlock, ri = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Nl = window.Vue.withCtx, ny = { class: "pa-4" }, oy = { class: "flex pt-2" }, sy = window.Vue.ref, ay = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Kr,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Xo(), i = sy(!1), c = () => C(this, null, function* () {
      i.value = !0;
      let l = !1;
      try {
        l = yield He.splitTranslation(
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
      const r = ty("i18n");
      return ii(), ri(ai(We), {
        value: e.modelValue,
        persistent: i.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": l.$mwui.colors.gray700,
        "min-height": "unset",
        title: l.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: Nl(() => [
          Yt("div", oy, [
            i.value ? (ii(), ri(ai(je), { key: 1 })) : (ii(), ri(ai(P), {
              key: 0,
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-confirm-draft-translation-start-button-label"),
              onClick: c
            }, null, 8, ["label"]))
          ])
        ]),
        default: Nl(() => [
          Yt("div", ny, [
            ps(Yt("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ps(Yt("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Yt("p", null, [
              ps(Yt("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ps(Yt("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "overlay-color", "title"]);
    };
  }
};
function iy(e, t, n) {
  return C(this, null, function* () {
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
        j.getAutonym(a).toLowerCase().includes(t.toLowerCase()) || // Search using script name
        j.getScript(a).toLowerCase().includes(t.toLowerCase())
      )
    );
    return s.length ? s : n ? (yield ry(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function Il(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(j.sortByAutonym) : (yield iy(e, t, n)).sort(j.sortByAutonym);
  });
}
function ry(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function cy() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function ly(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function uy(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const dy = window.Vue.computed;
function gy(e, t) {
  const n = dy(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = j.getAutonym(t.value[s]);
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
const ci = window.Vue.ref, Ul = window.Vue.watch, my = window.Vue.computed;
function py(e, t, n) {
  const o = ci(""), s = ci(-1), a = ci(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = my(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Ul(e, () => {
    s.value = -1;
  }), Ul(s, () => C(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
const li = window.Vue.ref, hy = window.Vue.watch, wy = window.Vue.onMounted, zl = window.Vue.computed, fy = {
  name: "MwLanguageSelector",
  components: {
    MwInput: Gr
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
      default: cy
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = li(null), o = li(""), s = li([]), a = zl(
      () => ly(s.value)
    ), i = zl(
      () => uy(s.value)
    ), c = (f) => t.emit("select", f), l = () => t.emit("close"), { autocompletion: d, onTabSelect: r } = gy(
      o,
      s
    ), { next: u, prev: g, langSelectorContainer: m, selectedLanguage: p } = py(o, s, e.suggestions), h = () => {
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
    return hy(o, Zr(() => C(this, null, function* () {
      s.value = yield Il(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), wy(() => C(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield Il(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: d,
      close: l,
      getAutonym: j.getAutonym,
      getDir: j.getDir,
      langSelectorContainer: m,
      mwIconClose: Ge,
      mwIconSearch: Gd,
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
}, hs = window.Vue.renderSlot, _y = window.Vue.resolveComponent, Rl = window.Vue.createVNode, Gn = window.Vue.withModifiers, Wn = window.Vue.withKeys, bt = window.Vue.createElementVNode, vy = window.Vue.resolveDirective, ws = window.Vue.withDirectives, ui = window.Vue.renderList, di = window.Vue.Fragment, rt = window.Vue.openBlock, ct = window.Vue.createElementBlock, Ol = window.Vue.toDisplayString, fs = window.Vue.normalizeClass, gi = window.Vue.createCommentVNode, Sy = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, yy = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Cy = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, ky = { class: "results px-3 pt-4" }, by = { class: "results-header ps-8 pb-2" }, xy = { class: "results-languages--suggestions pa-0 ma-0" }, Vy = ["lang", "dir", "aria-selected", "onClick", "textContent"], $y = { class: "results px-3 pt-4" }, Ay = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Dy = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ey = ["aria-selected"], Ty = { class: "no-results px-3 py-4" }, Ly = { class: "ps-8" };
function By(e, t, n, o, s, a) {
  const i = _y("mw-input"), c = vy("i18n");
  return rt(), ct("div", Sy, [
    hs(e.$slots, "search", {}, () => [
      bt("div", yy, [
        Rl(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (l) => o.autocompletion = l),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        Rl(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (l) => o.searchQuery = l),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            Wn(Gn(o.onEnter, ["prevent"]), ["enter"]),
            Wn(Gn(o.next, ["stop", "prevent"]), ["down"]),
            Wn(Gn(o.prev, ["stop", "prevent"]), ["up"]),
            Wn(Gn(o.close, ["prevent"]), ["esc"]),
            Wn(Gn(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    bt("section", Cy, [
      n.suggestions.length && !o.searchQuery ? hs(e.$slots, "suggestions", { key: 0 }, () => [
        bt("section", ky, [
          ws(bt("p", by, null, 512), [
            [c, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          bt("ul", xy, [
            (rt(!0), ct(di, null, ui(n.suggestions, (l) => (rt(), ct("li", {
              key: l,
              class: fs(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (d) => o.select(l),
              textContent: Ol(o.getAutonym(l))
            }, null, 10, Vy))), 128))
          ])
        ])
      ]) : gi("", !0),
      o.searchResultsByScript.length ? hs(e.$slots, "search", { key: 1 }, () => [
        bt("section", $y, [
          n.suggestions.length && !o.searchQuery ? ws((rt(), ct("p", Ay, null, 512)), [
            [c, void 0, "cx-sx-language-selector-all-languages"]
          ]) : gi("", !0),
          (rt(!0), ct(di, null, ui(o.searchResultsByScript, (l, d) => (rt(), ct("ul", {
            key: d,
            class: fs(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (rt(!0), ct(di, null, ui(l, (r) => (rt(), ct("li", {
              key: r,
              class: fs(["language pa-2 ps-8 ma-0", r === o.selectedLanguage ? "language--selected" : ""]),
              lang: r,
              dir: o.getDir(r),
              role: "option",
              "aria-selected": r === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(r),
              textContent: Ol(o.getAutonym(r))
            }, null, 10, Dy))), 128)),
            n.allOptionEnabled && !o.searchQuery ? ws((rt(), ct("li", {
              key: 0,
              class: fs(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (r) => o.select("all"))
            }, null, 10, Ey)), [
              [c, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : gi("", !0)
          ], 2))), 128))
        ])
      ]) : hs(e.$slots, "noresults", { key: 2 }, () => [
        bt("section", Ty, [
          ws(bt("h3", Ly, null, 512), [
            [c, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const tm = /* @__PURE__ */ D(fy, [["render", By]]);
const le = window.Vue.unref, Py = window.Vue.resolveDirective, jl = window.Vue.withDirectives, Xn = window.Vue.openBlock, Kn = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Hl = window.Vue.toDisplayString, ql = window.Vue.withModifiers, Qt = window.Vue.withCtx, lt = window.Vue.createVNode, Fy = { class: "sx-translation-list-language-selector" }, My = {
  key: 0,
  class: "mw-ui-autonym"
}, Ny = ["lang", "dir", "textContent"], Iy = {
  key: 0,
  class: "mw-ui-autonym"
}, Uy = ["lang", "dir", "textContent"], _s = window.Vue.computed, zy = window.Vue.inject, Ry = window.Vue.ref, lc = {
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
    const n = e, o = t, s = zy("breakpoints"), a = _s(() => s.value.mobile), i = Ry(null), c = _s(() => !!i.value), l = () => i.value = "source", d = () => i.value = "target", r = () => i.value = null, u = (p) => {
      const w = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(w, p);
    }, g = _s(
      () => n.selectedSourceLanguage === "all"
    ), m = _s(
      () => n.selectedTargetLanguage === "all"
    );
    return (p, h) => {
      const w = Py("i18n");
      return Xn(), Kn("div", Fy, [
        lt(le(T), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Qt(() => [
            lt(le(y), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: Qt(() => [
                lt(le(P), {
                  indicator: le(Er),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: ql(l, ["stop"])
                }, {
                  default: Qt(() => [
                    g.value ? jl((Xn(), Kn("span", My, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Xn(), Kn("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: le(j.getDir)(e.selectedSourceLanguage),
                      textContent: Hl(le(j.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Ny))
                  ]),
                  _: 1
                }, 8, ["indicator", "onClick"])
              ]),
              _: 1
            }),
            lt(le(y), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: Qt(() => [
                lt(le(K), { icon: le(Hr) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            lt(le(y), { cols: "5" }, {
              default: Qt(() => [
                lt(le(P), {
                  indicator: le(Er),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: ql(d, ["stop"])
                }, {
                  default: Qt(() => [
                    m.value ? jl((Xn(), Kn("span", Iy, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Xn(), Kn("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: le(j.getDir)(e.selectedTargetLanguage),
                      textContent: Hl(le(j.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Uy))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        lt(le(We), {
          value: c.value,
          "onUpdate:value": h[0] || (h[0] = (f) => c.value = f),
          animation: "slide-up",
          title: p.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: r
        }, {
          default: Qt(() => [
            lt(le(tm), {
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
}, Oy = window.Vue.toDisplayString, jy = window.Vue.createElementVNode, mi = window.Vue.createVNode, Gl = window.Vue.unref, xt = window.Vue.openBlock, vs = window.Vue.createBlock, Wl = window.Vue.createCommentVNode, Xl = window.Vue.renderList, Kl = window.Vue.Fragment, Ss = window.Vue.createElementBlock, Hy = window.Vue.normalizeClass, Yl = window.Vue.withCtx, qy = ["textContent"], Gy = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, Wy = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, wn = window.Vue.ref, ut = window.Vue.computed, Xy = window.Vuex.useStore, Ql = {
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
    const t = e, n = wn("all"), o = wn("all"), s = Xy(), a = ut(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = Ho(), c = wn(!1), l = wn(!1), d = wn(null), r = wn(null), u = ut(
      () => t.translationStatus === "draft"
    ), g = ut(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), m = ut(
      () => n.value === "all"
    ), p = ut(
      () => o.value === "all"
    ), h = ut(
      () => g.value.filter(
        (L) => (m.value || L.sourceLanguage === n.value) && (p.value || L.targetLanguage === o.value)
      ).sort((L, R) => L.lastUpdatedTimestamp < R.lastUpdatedTimestamp)
    ), w = ut(() => {
      let L = g.value.map(
        (R) => R.targetLanguage
      );
      return i.value && (L = L.filter(
        (R) => i.value.includes(R)
      )), [...new Set(L)];
    }), f = ut(() => {
      const L = g.value.map(
        (R) => R.sourceLanguage
      );
      return [...new Set(L)];
    }), v = (L) => {
      d.value = L, c.value = !0;
    }, b = ut(() => t.activeStatus === t.translationStatus), k = Xo(), M = (L) => {
      L.isArticleTranslation ? (r.value = L, l.value = !0) : k(L);
    };
    return (L, R) => b.value ? (xt(), vs(Gl(Fe), {
      key: 0,
      class: Hy(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: Yl(() => [
        jy("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: Oy(L.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, qy)
      ]),
      default: Yl(() => [
        mi(lc, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": R[0] || (R[0] = (A) => n.value = A),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": R[1] || (R[1] = (A) => o.value = A),
          "source-languages": f.value,
          "target-languages": w.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? Wl("", !0) : (xt(), vs(Gl(je), { key: 0 })),
        u.value ? (xt(), Ss("div", Gy, [
          (xt(!0), Ss(Kl, null, Xl(h.value, (A) => (xt(), vs(Wv, {
            key: `${e.translationStatus}-${A.key}`,
            translation: A,
            onClick: (B) => M(A),
            onDeleteTranslation: (B) => v(A)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (xt(), Ss("div", Wy, [
          (xt(!0), Ss(Kl, null, Xl(h.value, (A) => (xt(), vs(HS, {
            key: `${e.translationStatus}-${A.key}`,
            translation: A,
            onDeleteTranslation: (B) => v(A)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        mi(ey, {
          modelValue: c.value,
          "onUpdate:modelValue": R[2] || (R[2] = (A) => c.value = A),
          translation: d.value
        }, null, 8, ["modelValue", "translation"]),
        mi(ay, {
          modelValue: l.value,
          "onUpdate:modelValue": R[3] || (R[3] = (A) => l.value = A),
          translation: r.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Wl("", !0);
  }
};
const dt = window.Vue.computed, Ky = window.Vue.inject, Yy = window.Vuex.useStore, Qy = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: Wr, MwIcon: K, MwRow: T, MwCol: y },
  props: {
    suggestion: {
      type: [Qr, qe, Lo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = Yy(), n = dt(() => e.suggestion), o = dt(
      () => n.value.sourceTitle || n.value.title
    ), s = dt(
      () => t.getters["mediawiki/getPage"](
        n.value.sourceLanguage,
        o.value
      )
    ), a = dt(
      () => {
        var p;
        return (p = n.value) == null ? void 0 : p.missingSectionsCount;
      }
    ), i = dt(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.description;
    }), c = dt(
      () => n.value instanceof qe
    ), l = dt(
      () => n.value instanceof Lo
    ), { sourceLanguageAutonym: d, targetLanguageAutonym: r } = F(t), u = dt(
      () => l.value ? Xd : Wd
    ), g = Ky("colors"), m = dt(
      () => l.value ? g.blue600 : "currentColor"
    );
    return {
      bookmarkIcon: u,
      bookmarkIconColor: m,
      description: i,
      getDir: j.getDir,
      isFavoriteSuggestion: l,
      isSectionSuggestion: c,
      missingSectionsCount: a,
      mwIconArrowNext: Hr,
      mwIconClose: Ge,
      page: s,
      sourceLanguageAutonym: d,
      targetLanguageAutonym: r,
      title: o
    };
  }
}, ys = window.Vue.resolveComponent, ke = window.Vue.createVNode, Vt = window.Vue.createElementVNode, Cs = window.Vue.toDisplayString, be = window.Vue.withCtx, Jl = window.Vue.withModifiers, Yn = window.Vue.openBlock, ks = window.Vue.createBlock, bs = window.Vue.createCommentVNode, Jy = window.Vue.resolveDirective, Zl = window.Vue.withDirectives, Zy = window.Vue.createElementBlock, eC = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, tC = { class: "col shrink pe-4" }, nC = { class: "col cx-suggestion__information-panel" }, oC = ["lang", "dir", "textContent"], sC = ["lang", "dir", "textContent"], aC = ["textContent"], iC = ["textContent"];
function rC(e, t, n, o, s, a) {
  const i = ys("mw-thumbnail"), c = ys("mw-col"), l = ys("mw-row"), d = ys("mw-icon"), r = Jy("i18n");
  return n.suggestion ? (Yn(), Zy("div", eC, [
    Vt("div", tC, [
      ke(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    Vt("div", nC, [
      ke(l, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: be(() => [
          ke(c, {
            shrink: "",
            class: "cx-suggestion__information-panel__top pb-2"
          }, {
            default: be(() => [
              ke(l, {
                class: "ma-0",
                align: "start",
                justify: "between"
              }, {
                default: be(() => [
                  ke(c, {
                    grow: "",
                    class: "pe-2"
                  }, {
                    default: be(() => [
                      ke(l, {
                        direction: "column",
                        class: "ma-0",
                        align: "start"
                      }, {
                        default: be(() => [
                          ke(c, {
                            shrink: "",
                            class: "mb-2"
                          }, {
                            default: be(() => [
                              Vt("h5", {
                                class: "my-0 cx-suggestion__source-title",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: Cs(o.title)
                              }, null, 8, oC)
                            ]),
                            _: 1
                          }),
                          ke(c, { shrink: "" }, {
                            default: be(() => [
                              Vt("p", {
                                class: "ma-0 cx-suggestion__source-description complementary",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: Cs(o.description)
                              }, null, 8, sC)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  ke(c, { shrink: "" }, {
                    default: be(() => [
                      o.isFavoriteSuggestion ? bs("", !0) : (Yn(), ks(d, {
                        key: 0,
                        icon: o.mwIconClose,
                        size: "24",
                        class: "cx-suggestion__discard-button mb-4",
                        onClick: t[0] || (t[0] = Jl((u) => e.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])),
                      ke(d, {
                        class: "cx-suggestion__favorite-button",
                        icon: o.bookmarkIcon,
                        size: "24",
                        "icon-color": o.bookmarkIconColor,
                        onClick: t[1] || (t[1] = Jl((u) => e.$emit("bookmark"), ["stop"]))
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
          o.isSectionSuggestion ? (Yn(), ks(c, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: be(() => [
              Zl(Vt("small", null, null, 512), [
                [r, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ]),
            _: 1
          })) : o.isFavoriteSuggestion ? (Yn(), ks(c, {
            key: 1,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
            shrink: ""
          }, {
            default: be(() => [
              ke(l, {
                justify: "between",
                class: "ma-0"
              }, {
                default: be(() => [
                  ke(c, { grow: "" }, {
                    default: be(() => [
                      Vt("small", {
                        textContent: Cs(o.sourceLanguageAutonym)
                      }, null, 8, aC),
                      ke(d, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      Vt("small", {
                        textContent: Cs(o.targetLanguageAutonym)
                      }, null, 8, iC)
                    ]),
                    _: 1
                  }),
                  o.missingSectionsCount ? (Yn(), ks(c, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: be(() => [
                      Zl(Vt("small", null, null, 512), [
                        [r, [
                          o.missingSectionsCount
                        ], "cx-sx-translation-suggestion-info"]
                      ])
                    ]),
                    _: 1
                  })) : bs("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : bs("", !0)
        ]),
        _: 1
      })
    ])
  ])) : bs("", !0);
}
const Rr = /* @__PURE__ */ D(Qy, [["render", rC]]), cC = window.Vue.computed, lC = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Ho(), n = cC(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, Qn = window.Vue.computed, eu = window.Vue.ref, uC = window.Vuex.useStore, dC = () => {
  const e = uC(), { sourceLanguage: t, targetLanguage: n } = F(e), o = nt(), s = Qn(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = Qn(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = Qn(
    () => !s.value && !a.value
  ), c = eu(0), l = eu(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, r = 4, u = Qn(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      c.value
    )
  ), g = Qn(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), m = () => {
    p(), h();
  }, p = () => {
    const k = u.value.length === d, M = (c.value + 1) % r, L = k && e.getters["application/getSectionSuggestionsSliceByIndex"](M).length > 0;
    (!k || !L) && e.dispatch("suggestions/fetchNextSectionSuggestionsSlice"), k && v();
  }, h = () => {
    const k = g.value.length === d, M = (l.value + 1) % r, L = k && e.getters["application/getPageSuggestionsSliceByIndex"](M).length > 0;
    (!k || !L) && e.dispatch("suggestions/fetchNextPageSuggestionsSlice"), k && b();
  }, w = (k) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestion", k), p();
  }, f = (k) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", k), h();
  }, v = () => c.value = (c.value + 1) % r, b = () => l.value = (l.value + 1) % r;
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
const gC = window.Vue.toDisplayString, xs = window.Vue.createElementVNode, oe = window.Vue.unref, Vs = window.Vue.createVNode, $s = window.Vue.withCtx, mC = window.Vue.resolveDirective, pi = window.Vue.withDirectives, tu = window.Vue.renderList, nu = window.Vue.Fragment, $t = window.Vue.openBlock, hi = window.Vue.createElementBlock, Jn = window.Vue.createBlock, wi = window.Vue.createCommentVNode, pC = window.Vue.vShow, hC = ["textContent"], wC = { class: "cx-translation-list__division-title ma-0 pa-4" }, fC = { class: "cx-translation-list__division-title ma-0 pa-4" }, _C = { class: "cx-suggestion-list__refresh-button-container justify-center" }, vC = window.Vuex.useStore, SC = window.Vue.ref, yC = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = vC(), { sourceLanguage: n, targetLanguage: o } = F(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = lC(), i = Kg(), c = (B) => i(B, o.value), l = (B) => i(n.value, B), d = sc(), r = (B) => d(B.sourceTitle, "suggestion_no_seed"), { startPageSuggestion: u } = cc(), {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: v,
      showRefreshButton: b
    } = dC(), k = SC(null), M = nt(), L = () => {
      M({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), k.value.$el.scrollIntoView({ behavior: "smooth" });
    }, R = (B) => C(this, null, function* () {
      return t.dispatch("suggestions/addSectionSuggestionAsFavorite", B);
    }), A = (B) => C(this, null, function* () {
      return t.dispatch("suggestions/addPageSuggestionAsFavorite", B);
    });
    return (B, De) => {
      const J = mC("i18n");
      return pi(($t(), hi("div", null, [
        Vs(oe(Fe), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: $s(() => [
            xs("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: gC(B.$i18n("cx-suggestionlist-title"))
            }, null, 8, hC)
          ]),
          default: $s(() => [
            Vs(lc, {
              "source-languages": oe(s),
              "target-languages": oe(a),
              "selected-source-language": oe(n),
              "selected-target-language": oe(o),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])
          ]),
          _: 1
        }),
        Vs(oe(Fe), {
          ref_key: "pageSuggestionsList",
          ref: k,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: $s(() => [
            pi(xs("h5", wC, null, 512), [
              [J, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            ($t(!0), hi(nu, null, tu(oe(g), (Z, pe) => ($t(), Jn(Rr, {
              key: `page-suggestion-${pe}`,
              suggestion: Z,
              onClose: (fe) => oe(p)(Z),
              onClick: (fe) => oe(u)(Z),
              onBookmark: (fe) => A(Z)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            oe(f) ? ($t(), Jn(oe(je), { key: 0 })) : wi("", !0)
          ]),
          _: 1
        }, 512),
        Vs(oe(Fe), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: $s(() => [
            pi(xs("h5", fC, null, 512), [
              [J, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            ($t(!0), hi(nu, null, tu(oe(m), (Z, pe) => ($t(), Jn(Rr, {
              key: `section-suggestion-${pe}`,
              class: "ma-0",
              suggestion: Z,
              onClose: (fe) => oe(h)(Z),
              onClick: (fe) => r(Z),
              onBookmark: (fe) => R(Z)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            oe(v) ? ($t(), Jn(oe(je), { key: 0 })) : wi("", !0)
          ]),
          _: 1
        }),
        xs("div", _C, [
          oe(b) ? ($t(), Jn(oe(P), {
            key: 0,
            class: "ma-0 pa-4",
            type: "text",
            label: B.$i18n("cx-suggestionlist-refresh"),
            icon: oe(ih),
            onClick: L
          }, null, 8, ["label", "icon"])) : wi("", !0)
        ])
      ], 512)), [
        [pC, e.active]
      ]);
    };
  }
}, CC = (e) => C(void 0, null, function* () {
  return wg.dispatch("suggestions/removeFavoriteSuggestion", e);
}), kC = window.Vue.computed, bC = window.Vuex.useStore, xC = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: Rr,
    MwCard: Fe
  },
  setup() {
    const e = me(), t = bC();
    return {
      favorites: kC(() => t.state.suggestions.favorites || []),
      startFavoriteTranslation: (s) => C(this, null, function* () {
        yield t.dispatch(
          "application/startFavoriteSectionTranslation",
          s
        ), e.push({ name: "sx-translation-confirmer" });
      }),
      unmarkFavoriteSectionSuggestion: CC
    };
  }
}, VC = window.Vue.resolveDirective, $C = window.Vue.createElementVNode, AC = window.Vue.withDirectives, DC = window.Vue.renderList, EC = window.Vue.Fragment, fi = window.Vue.openBlock, TC = window.Vue.createElementBlock, ou = window.Vue.resolveComponent, su = window.Vue.createBlock, au = window.Vue.withCtx, LC = window.Vue.createCommentVNode, BC = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function PC(e, t, n, o, s, a) {
  const i = ou("cx-translation-suggestion"), c = ou("mw-card"), l = VC("i18n");
  return o.favorites.length ? (fi(), su(c, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: au(() => [
      AC($C("h3", BC, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: au(() => [
      (fi(!0), TC(EC, null, DC(o.favorites, (d, r) => (fi(), su(i, {
        key: `favorite-${r}`,
        suggestion: d,
        onClick: (u) => o.startFavoriteTranslation(d),
        onBookmark: (u) => o.unmarkFavoriteSectionSuggestion(d)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : LC("", !0);
}
const FC = /* @__PURE__ */ D(xC, [["render", PC]]);
const MC = {
  name: "CxHelpPanel",
  components: { MwIcon: K },
  setup() {
    const e = Ae();
    return { listItems: [
      {
        icon: ph,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: th,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: hh,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, NC = window.Vue.resolveDirective, As = window.Vue.createElementVNode, IC = window.Vue.withDirectives, UC = window.Vue.renderList, zC = window.Vue.Fragment, _i = window.Vue.openBlock, vi = window.Vue.createElementBlock, RC = window.Vue.resolveComponent, OC = window.Vue.createVNode, jC = window.Vue.toDisplayString, HC = { class: "cx-help-panel pa-4" }, qC = { class: "cx-help-panel__item-list mt-6 ps-2" }, GC = ["href"], WC = ["textContent"];
function XC(e, t, n, o, s, a) {
  const i = RC("mw-icon"), c = NC("i18n");
  return _i(), vi("div", HC, [
    IC(As("h5", null, null, 512), [
      [c, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    As("ul", qC, [
      (_i(!0), vi(zC, null, UC(o.listItems, (l, d) => (_i(), vi("li", {
        key: d,
        class: "mt-4"
      }, [
        As("a", {
          href: l.href,
          target: "_blank"
        }, [
          OC(i, {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          As("span", {
            textContent: jC(l.label)
          }, null, 8, WC)
        ], 8, GC)
      ]))), 128))
    ])
  ]);
}
const KC = /* @__PURE__ */ D(MC, [["render", XC]]);
const YC = window.Vue.ref, iu = window.Vue.computed, QC = window.Vue.watch, JC = {
  name: "CxStatsPanel",
  components: { MwCol: y, MwRow: T },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = iu(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = iu(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = YC(null);
    return QC(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), c = Object.keys(e.stats || {}).sort(), l = c.reduce(
          (b, k) => Math.max(b, a[k].delta),
          0
        ), d = c.map((b) => a[b].delta), r = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = r, s.value.height = u;
        const g = 4, m = 6, p = 50, h = (p - g) / l;
        let w = g;
        const f = Math.floor(
          (r - g) / (m + g)
        ), v = d.slice(
          Math.max(d.length - f, 0)
        );
        v.forEach((b, k) => {
          k === v.length - 1 && (i.fillStyle = "#36c");
          const M = p - b * h;
          i.fillRect(w, M, m, b * h), w += m + g;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, ZC = window.Vue.resolveDirective, fn = window.Vue.createElementVNode, Si = window.Vue.withDirectives, ru = window.Vue.toDisplayString, cu = window.Vue.resolveComponent, yi = window.Vue.withCtx, Ci = window.Vue.createVNode, ek = window.Vue.openBlock, tk = window.Vue.createElementBlock, nk = { class: "cx-stats-panel pa-4" }, ok = ["textContent"], sk = { class: "cx-stats-panel__monthly-stats-label" }, ak = ["textContent"], ik = { class: "cx-stats-panel__total-stats-label" }, rk = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function ck(e, t, n, o, s, a) {
  const i = cu("mw-col"), c = cu("mw-row"), l = ZC("i18n");
  return ek(), tk("div", nk, [
    Si(fn("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    Ci(c, null, {
      default: yi(() => [
        Ci(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: yi(() => [
            fn("h3", {
              textContent: ru(o.thisMonthStats)
            }, null, 8, ok),
            Si(fn("h5", sk, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        Ci(i, { class: "cx-stats-panel__total-stats" }, {
          default: yi(() => [
            fn("h3", {
              textContent: ru(o.total)
            }, null, 8, ak),
            Si(fn("h5", ik, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    fn("canvas", rk, null, 512)
  ]);
}
const lk = /* @__PURE__ */ D(JC, [["render", ck]]);
const uk = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: y, MwRow: T, MwCard: Fe, MwIcon: K },
  data: () => ({
    mwIconLabFlask: Yd,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, Ds = window.Vue.resolveComponent, Es = window.Vue.createVNode, Ts = window.Vue.withCtx, dk = window.Vue.resolveDirective, _n = window.Vue.createElementVNode, Ls = window.Vue.withDirectives, gk = window.Vue.openBlock, mk = window.Vue.createBlock, pk = { class: "complementary" }, hk = { class: "complementary mt-4" }, wk = ["href"], fk = { class: "complementary" }, _k = ["href"];
function vk(e, t, n, o, s, a) {
  const i = Ds("mw-icon"), c = Ds("mw-col"), l = Ds("mw-row"), d = Ds("mw-card"), r = dk("i18n");
  return gk(), mk(d, { class: "experimental-support-banner mb-1" }, {
    default: Ts(() => [
      Es(l, null, {
        default: Ts(() => [
          Es(c, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: Ts(() => [
              Es(i, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          Es(c, null, {
            default: Ts(() => [
              Ls(_n("h5", null, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              Ls(_n("p", pk, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              _n("p", hk, [
                Ls(_n("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, wk), [
                  [r, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              _n("p", fk, [
                Ls(_n("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, _k), [
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
const Sk = /* @__PURE__ */ D(uk, [["render", vk]]), yk = window.Vuex.useStore, Va = () => {
  const e = yk(), t = (o) => C(void 0, null, function* () {
    let s = yield He.fetchTranslations(o);
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
          new Nn({ title: r, pagelanguage: d })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, Ck = window.Vuex.useStore, nm = () => {
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
}, kk = () => {
  const e = Ck(), t = sc(), n = nt(), o = Xo(), { fetchAllTranslations: s } = Va();
  return (l) => C(void 0, [l], function* ({ pageTitle: a, isDraftTranslation: i, sectionTitle: c }) {
    const d = nm() || "direct_preselect", { sourceLanguage: r, targetLanguage: u } = F(e);
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
}, bk = window.Vuex.useStore, xk = () => {
  const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
  if (!t || !n)
    return null;
  const o = e.get("section"), s = !!e.get("draft");
  return { pageTitle: n, isDraftTranslation: s, sectionTitle: o };
}, Vk = () => {
  const e = nt(), t = bk(), n = kk(), { fetchAllTranslations: o } = Va(), s = ac();
  return () => C(void 0, null, function* () {
    yield Xg()();
    const i = xk();
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
        return g || nm() || "direct";
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
}, lu = window.Vue.computed, $k = window.Vue.ref, Ak = window.Vue.watch, Dk = window.Vue.watchEffect, Ek = window.Vuex.useStore, Tk = ["suggestions", "draft", "published"], Lk = () => {
  const e = Ek(), n = new URLSearchParams(location.search).get("active-list"), o = $k(null);
  if (Tk.includes(n))
    o.value = n;
  else {
    const s = lu(
      () => e.state.translator.translationsLoaded.draft
    ), a = lu(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", Ak(s, (i) => {
      i && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return Dk(() => {
    Zv("active-list", o.value), window.scrollTo(0, 0);
  }), o;
}, Bk = window.Vue.computed, Pk = () => {
  const e = Ae();
  return Bk(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: sh,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Fn,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: oh,
        type: "text"
      }
    }
  ]);
};
const Bs = window.Vue.openBlock, ki = window.Vue.createBlock, bi = window.Vue.createCommentVNode, se = window.Vue.unref, he = window.Vue.createVNode, At = window.Vue.withCtx, Fk = window.Vue.isRef, Mk = window.Vue.createElementBlock, Nk = window.Vue.computed, Ik = window.Vuex.useStore, Uk = {
  __name: "CXDashboard",
  setup(e) {
    const t = me(), n = () => t.push({ name: "sx-article-search" });
    Vk()();
    const s = Ik();
    s.dispatch("translator/fetchTranslatorStats");
    const a = Nk(() => s.state.translator.translatorStats), i = Lk(), c = Pk();
    return (l, d) => (Bs(), Mk("div", null, [
      l.$incompleteVersion ? (Bs(), ki(Sk, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : bi("", !0),
      he(se(T), { class: "ma-0" }, {
        default: At(() => [
          he(se(P), {
            id: "dashboard-search-translation-button",
            progressive: "",
            icon: se(va),
            label: l.$i18n("cx-create-new-translation"),
            class: "col-desktop-3 col-offset-desktop-2 col-offset-tablet-3 col-mobile-12 my-4",
            onClick: n
          }, null, 8, ["icon", "label"])
        ]),
        _: 1
      }),
      he(se(T), {
        class: "ma-0",
        align: "start"
      }, {
        default: At(() => [
          l.$mwui.breakpoint.tabletAndUp ? (Bs(), ki(se(y), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: At(() => [
              he(se(Mo), {
                id: "dashboard-list-selector--desktop",
                items: se(c),
                active: se(i),
                onSelect: d[0] || (d[0] = (r) => i.value = r)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : bi("", !0),
          he(se(y), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: At(() => [
              he(FC),
              he(yC, {
                active: se(i) === "suggestions"
              }, null, 8, ["active"]),
              he(Ql, {
                "translation-status": "draft",
                "active-status": se(i)
              }, null, 8, ["active-status"]),
              he(Ql, {
                "translation-status": "published",
                "active-status": se(i)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          he(se(y), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: At(() => [
              he(se(T), {
                class: "ma-0",
                align: "start"
              }, {
                default: At(() => [
                  he(se(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: At(() => [
                      he(lk, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  he(se(y), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: At(() => [
                      he(KC)
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
      l.$mwui.breakpoint.mobile ? (Bs(), ki(se(hp), {
        key: 1,
        active: se(i),
        "onUpdate:active": d[1] || (d[1] = (r) => Fk(i) ? i.value = r : null),
        items: se(c)
      }, null, 8, ["active", "items"])) : bi("", !0)
    ]));
  }
}, zk = {
  name: "DashboardView",
  components: { CxDashboard: Uk }
}, Rk = window.Vue.resolveComponent, Ok = window.Vue.createVNode, jk = window.Vue.openBlock, Hk = window.Vue.createElementBlock, qk = { class: "cx-translation-dashboard" };
function Gk(e, t, n, o, s, a) {
  const i = Rk("cx-dashboard");
  return jk(), Hk("main", qk, [
    Ok(i, { class: "mb-4 pb-12" })
  ]);
}
const uu = /* @__PURE__ */ D(zk, [["render", Gk]]), Jt = window.Vue.computed, Wk = (e) => {
  const t = Jt(
    () => {
      var d, r;
      return (r = (d = e.value.orderedMissingSections) == null ? void 0 : d[0]) == null ? void 0 : r.sourceTitle;
    }
  ), n = Jt(
    () => e.value.missingSectionsCount
  ), o = Jt(
    () => e.value.presentSectionsCount
  ), s = Jt(
    () => {
      var d;
      return !!((d = e.value) != null && d.targetTitle);
    }
  ), a = Jt(
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
  }, c = Jt(() => {
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
  }), l = Jt(
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
}, Xk = window.Vuex.useStore, uc = () => {
  const e = Xk(), { currentSectionSuggestion: t, currentSourcePage: n } = F(e), o = em(), s = (c, l) => C(void 0, null, function* () {
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
}, Kk = window.Vue.computed, Yk = window.Vue.ref, Qk = window.Vuex.useStore, Jk = () => {
  const e = me(), t = Qk(), { isDesktop: n } = jo(), o = new URLSearchParams(location.search), s = Yk(o.get("section")), {
    currentSourceSection: a,
    currentSectionSuggestion: i,
    sourceLanguage: c,
    targetLanguage: l
  } = F(t), d = Kk(
    () => {
      var f;
      return !!((f = i.value) != null && f.targetTitle);
    }
  ), r = () => {
    s.value = null, o.delete("section"), un(Object.fromEntries(o));
  }, { selectPageSectionByIndex: u, selectPageSectionByTitle: g } = uc(), m = ic(), p = () => C(void 0, null, function* () {
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
    s.value ? p() : d.value ? e.push({ name: "sx-section-selector" }) : w(), Ir(i.value);
  }, w = () => C(void 0, null, function* () {
    var f;
    if (n.value) {
      const v = (f = i.value) == null ? void 0 : f.sourceTitle;
      m(c.value, l.value, v);
    } else
      u(0), Wg() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }), Ir(i.value);
  });
  return {
    clearPreFilledSection: r,
    startNewTranslation: w,
    onSectionSelectorClick: h,
    preFilledSectionTitle: s
  };
};
const G = window.Vue.unref, Zk = window.Vue.resolveDirective, Ps = window.Vue.createElementVNode, Fs = window.Vue.withDirectives, du = window.Vue.toDisplayString, Zn = window.Vue.openBlock, xi = window.Vue.createElementBlock, Vi = window.Vue.createCommentVNode, Ie = window.Vue.createVNode, Dt = window.Vue.withCtx, gu = window.Vue.createBlock, eb = { class: "sx-translation-confirmer-body pb-4" }, tb = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, nb = ["textContent"], ob = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, sb = ["href"], ab = ["textContent"], mu = window.Vue.computed, ib = window.Vue.inject, rb = window.Vue.onMounted, cb = window.Vuex.useStore, lb = {
  __name: "SXTranslationConfirmerActionPanel",
  setup(e) {
    const t = me(), n = cb(), o = ib("colors"), { targetLanguageAutonym: s, currentSectionSuggestion: a } = F(n), {
      clearPreFilledSection: i,
      startNewTranslation: c,
      onSectionSelectorClick: l,
      preFilledSectionTitle: d
    } = Jk(), {
      actionInformationMessageArgs: r,
      getActionButtonLabel: u,
      isProgressiveButton: g,
      targetArticlePath: m,
      targetPageExists: p
    } = Wk(a), h = Ae(), w = mu(
      () => h.i18n(u(!!d.value))
    ), { isDesktop: f } = jo(), v = mu(
      () => h.i18n(...r.value)
    ), b = () => {
      t.push({ name: "sx-section-selector" }), Ir(a.value);
    };
    return rb(() => {
      const k = d.value;
      k && !a.value.hasSectionTitle(k) && i();
    }), (k, M) => {
      const L = Zk("i18n");
      return Zn(), xi("section", eb, [
        G(d) ? (Zn(), xi("section", tb, [
          Fs(Ps("h6", null, null, 512), [
            [L, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
          ]),
          Ps("h5", {
            class: "ma-0",
            textContent: du(G(d))
          }, null, 8, nb)
        ])) : G(p) ? (Zn(), xi("section", ob, [
          Ie(G(T), {
            class: "sx-translation-confirmer__translation-status ma-0 pb-2",
            justify: "between"
          }, {
            default: Dt(() => [
              Fs(Ie(G(y), {
                tag: "h5",
                class: "ma-0 pe-2"
              }, null, 512), [
                [L, [G(s)], "cx-sx-existing-translation-status"]
              ]),
              Ie(G(y), { shrink: "" }, {
                default: Dt(() => [
                  Ps("a", {
                    href: G(m),
                    target: "_blank"
                  }, [
                    Ie(G(K), {
                      icon: G(Io),
                      size: "16",
                      "icon-color": G(o).gray500
                    }, null, 8, ["icon", "icon-color"])
                  ], 8, sb)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ie(G(T), { class: "ma-0" }, {
            default: Dt(() => [
              Ie(G(y), null, {
                default: Dt(() => [
                  Ps("span", {
                    textContent: du(v.value)
                  }, null, 8, ab)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : Vi("", !0),
        Ie(G(T), {
          class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
          justify: "center"
        }, {
          default: Dt(() => [
            G(d) ? (Zn(), gu(G(y), {
              key: 0,
              shrink: "",
              class: "me-4"
            }, {
              default: Dt(() => [
                Fs(Ie(G(P), {
                  large: "",
                  progressive: "",
                  type: "text",
                  onClick: b
                }, null, 512), [
                  [L, void 0, "cx-sx-translation-confirmer-more-sections-button-label"]
                ])
              ]),
              _: 1
            })) : Vi("", !0),
            G(p) && G(f) ? (Zn(), gu(G(y), {
              key: 1,
              shrink: "",
              class: "me-4"
            }, {
              default: Dt(() => [
                Fs(Ie(G(P), {
                  large: "",
                  onClick: G(c)
                }, null, 8, ["onClick"]), [
                  [L, void 0, "cx-sx-translation-confirmer-new-desktop-translation-button-label"]
                ])
              ]),
              _: 1
            })) : Vi("", !0),
            Ie(G(y), { shrink: "" }, {
              default: Dt(() => [
                Ie(G(P), {
                  large: "",
                  progressive: G(g),
                  label: w.value,
                  onClick: G(l)
                }, null, 8, ["progressive", "label", "onClick"])
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
const $i = window.Vue.computed, ub = window.Vuex.useStore, db = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: lc
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Ho(), n = ub(), { sourceLanguage: o, targetLanguage: s } = F(n), a = $i(
      () => n.getters["application/getCurrentLanguageTitleGroup"]
    ), i = $i(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((g) => g.lang)) || [];
      }
    ), c = $i(
      () => t.value || e.value
    ), l = aS();
    return {
      availableSourceLanguages: i,
      targetLanguages: c,
      onSourceLanguageSelected: (u) => l(u, s.value),
      onTargetLanguageSelected: (u) => l(o.value, u),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
}, gb = window.Vue.resolveComponent, mb = window.Vue.openBlock, pb = window.Vue.createBlock;
function hb(e, t, n, o, s, a) {
  const i = gb("sx-translation-list-language-selector");
  return mb(), pb(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const om = /* @__PURE__ */ D(db, [["render", hb]]);
const pu = window.Vue.toDisplayString, Ms = window.Vue.createElementVNode, Ke = window.Vue.unref, Zt = window.Vue.createVNode, eo = window.Vue.withCtx, wb = window.Vue.resolveDirective, fb = window.Vue.withDirectives, _b = window.Vue.openBlock, vb = window.Vue.createBlock, Sb = ["textContent"], yb = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, Cb = ["textContent"], Et = window.Vue.computed, kb = window.Vuex.useStore, bb = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = kb(), {
      currentSectionSuggestion: n,
      currentSourcePage: o
    } = F(t), s = Et(() => t.state.suggestions.favorites || []), a = Et(
      () => s.value.some(
        (p) => n.value.sourceTitle === p.title && n.value.sourceLanguage === p.sourceLanguage && n.value.targetLanguage === p.targetLanguage
      )
    ), i = () => C(this, null, function* () {
      return t.dispatch(
        "suggestions/removeFavoriteSuggestion",
        new Lo({
          title: n.value.sourceTitle,
          sourceLanguage: n.value.sourceLanguage,
          targetLanguage: n.value.targetLanguage
        })
      );
    }), c = () => C(this, null, function* () {
      return t.dispatch(
        "suggestions/doMarkSuggestionAsFavorite",
        n.value
      );
    }), l = Et(
      () => a.value ? Xd : Wd
    ), d = Et(
      () => a.value ? i : c
    ), r = Et(() => {
      var p;
      return (p = n.value) == null ? void 0 : p.sourceTitle;
    }), u = Et(
      () => {
        var p;
        return q.getPageUrl(
          ((p = n.value) == null ? void 0 : p.sourceLanguage) || "",
          r.value || ""
        );
      }
    ), g = Et(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.langLinksCount;
    }), m = Et(
      () => {
        var p;
        return Object.values(((p = o.value) == null ? void 0 : p.pageviews) || {}).reduce(
          (h, w) => h + w,
          0
        );
      }
    );
    return (p, h) => {
      const w = wb("i18n");
      return _b(), vb(Ke(T), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: eo(() => [
          Zt(Ke(y), null, {
            default: eo(() => [
              Zt(Ke(T), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: eo(() => [
                  Zt(Ke(y), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: u.value,
                    target: "_blank"
                  }, {
                    default: eo(() => [
                      Ms("h5", {
                        class: "ma-0 me-1",
                        textContent: pu(r.value)
                      }, null, 8, Sb),
                      Zt(Ke(K), {
                        icon: Ke(Io),
                        size: "10",
                        "icon-color": p.$mwui.colors.gray500
                      }, null, 8, ["icon", "icon-color"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Zt(Ke(y), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: eo(() => [
                      Zt(Ke(P), {
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
              Ms("p", yb, [
                Zt(Ke(K), {
                  icon: Ke(Kd),
                  size: "16",
                  class: "me-1"
                }, null, 8, ["icon"]),
                Ms("span", {
                  class: "pe-3",
                  textContent: pu(g.value)
                }, null, 8, Cb),
                fb(Ms("span", null, null, 512), [
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
const hu = window.Vue.resolveDirective, Ns = window.Vue.createElementVNode, wu = window.Vue.withDirectives, Tt = window.Vue.unref, Is = window.Vue.withCtx, Lt = window.Vue.createVNode, Ai = window.Vue.openBlock, fu = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const xb = window.Vue.createBlock, Vb = { class: "sx-translation-confirmer" }, $b = { class: "mb-0" }, Ab = { class: "sx-translation-confirmer__article-image flex justify-center" }, Db = ["src"], Eb = { class: "ma-3" }, Tb = window.Vue.computed, Lb = window.Vue.onMounted, Bb = window.Vuex.useStore, Pb = {
  __name: "SXTranslationConfirmer",
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = Bb(), { sourceLanguage: o, targetLanguage: s, currentSourcePage: a, previousRoute: i } = F(n), c = Tb(
      () => {
        var u, g;
        return (g = (u = a.value) == null ? void 0 : u.image) == null ? void 0 : g.source;
      }
    ), l = nt();
    Lb(() => {
      n.dispatch("application/fetchCurrentSectionSuggestionLanguageTitles"), l({
        event_type: "dashboard_translation_start",
        event_source: t.eventSource,
        translation_source_language: o.value,
        translation_target_language: s.value
      }), rc(), n.dispatch(
        "suggestions/fetchAppendixSectionTitles",
        s.value
      );
    });
    const d = me(), r = () => {
      n.dispatch("application/clearCurrentSectionSuggestion"), un(null), d.push({ name: i.value });
    };
    return (u, g) => {
      const m = hu("i18n"), p = hu("i18n-html");
      return Ai(), fu("section", Vb, [
        Lt(Tt(T), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Is(() => [
            Lt(Tt(y), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Is(() => [
                wu(Ns("h5", $b, null, 512), [
                  [m, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Lt(Tt(y), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Is(() => [
                Lt(Tt(P), {
                  class: "pa-0",
                  type: "icon",
                  icon: Tt(Ge),
                  "icon-size": 20,
                  onClick: r
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ns("div", Ab, [
          c.value ? (Ai(), fu("img", {
            key: 0,
            src: c.value
          }, null, 8, Db)) : (Ai(), xb(Tt(K), {
            key: 1,
            size: "120",
            icon: Tt(qr),
            "icon-color": u.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Lt(bb),
        Lt(om),
        Lt(lb),
        Lt(Tt(T), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Is(() => [
            Ns("p", Eb, [
              wu(Ns("small", null, null, 512), [
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
const Fb = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: Pb
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
}, Mb = window.Vue.resolveComponent, Nb = window.Vue.createVNode, Ib = window.Vue.normalizeClass, Ub = window.Vue.openBlock, zb = window.Vue.createElementBlock;
function Rb(e, t, n, o, s, a) {
  const i = Mb("sx-translation-confirmer");
  return Ub(), zb("main", {
    class: Ib(["sx-translation-confirmer-view", a.classes])
  }, [
    Nb(i, { "event-source": n.eventSource }, null, 8, ["event-source"])
  ], 2);
}
const Ob = /* @__PURE__ */ D(Fb, [["render", Rb]]), Di = window.Vue.unref, jb = window.Vue.createVNode, Hb = window.Vue.withCtx, qb = window.Vue.openBlock, Gb = window.Vue.createBlock, Wb = {
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
    return (t, n) => (qb(), Gb(Di(T), {
      tag: "li",
      class: "ma-0"
    }, {
      default: Hb(() => [
        jb(Di(P), {
          href: e.path,
          target: "_blank",
          class: "col justify-between py-3 px-4",
          indicator: Di(Io),
          label: t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym),
          type: "text"
        }, null, 8, ["href", "indicator", "label"])
      ]),
      _: 1
    }));
  }
};
const Xb = window.Vue.resolveDirective, Us = window.Vue.createElementVNode, Ei = window.Vue.withDirectives, Kb = window.Vue.toDisplayString, to = window.Vue.unref, Ti = window.Vue.withCtx, zs = window.Vue.createVNode, Yb = window.Vue.openBlock, Qb = window.Vue.createElementBlock, Jb = { class: "sx-section-selector__header pa-4" }, Zb = { class: "sx-section-selector__header-text ma-0" }, e8 = ["textContent"], t8 = { class: "pt-0 ma-0" }, n8 = { class: "ma-0" }, o8 = {
  __name: "SXSectionSelectorHeader",
  props: {
    suggestion: {
      type: qe,
      required: !0
    }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => {
      const o = Xb("i18n");
      return Yb(), Qb("div", Jb, [
        zs(to(T), { class: "ma-0 pb-3" }, {
          default: Ti(() => [
            zs(to(y), null, {
              default: Ti(() => [
                Ei(Us("h6", Zb, null, 512), [
                  [o, void 0, "cx-sx-section-selector-title"]
                ]),
                Us("h2", {
                  class: "sx-section-selector__title ma-0 py-0",
                  textContent: Kb(e.suggestion.sourceTitle)
                }, null, 8, e8)
              ]),
              _: 1
            }),
            zs(to(y), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ti(() => [
                zs(to(P), {
                  class: "pa-0",
                  large: !0,
                  type: "icon",
                  icon: to(Ge),
                  onClick: n[0] || (n[0] = (s) => t.$emit("close"))
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ei(Us("h4", t8, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Ei(Us("p", n8, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, s8 = window.Vue.renderList, a8 = window.Vue.Fragment, Li = window.Vue.openBlock, _u = window.Vue.createElementBlock, i8 = window.Vue.renderSlot, Rs = window.Vue.unref, vu = window.Vue.createVNode, Su = window.Vue.withCtx, r8 = window.Vue.createBlock, c8 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, sm = {
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
    return (t, n) => (Li(), _u("ul", c8, [
      (Li(!0), _u(a8, null, s8(e.sections, (o) => (Li(), r8(Rs(T), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Su(() => [
          vu(Rs(P), {
            class: "col justify-between py-3 px-4",
            label: o.sourceTitle,
            type: "text",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Su(() => [
              i8(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              vu(Rs(K), {
                icon: Rs(ln),
                class: "mw-ui-button__indicator"
              }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, l8 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const u8 = window.Vue.resolveDirective, Os = window.Vue.createElementVNode, js = window.Vue.withDirectives, Bt = window.Vue.unref, d8 = window.Vue.toDisplayString, no = window.Vue.withCtx, Bi = window.Vue.openBlock, yu = window.Vue.createBlock, Cu = window.Vue.createCommentVNode, oo = window.Vue.createVNode, g8 = window.Vue.createElementBlock, m8 = { class: "sx-section-selector__missing-sections py-2" }, p8 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, h8 = ["lang", "dir", "textContent"], ku = window.Vue.computed, w8 = {
  __name: "SXSectionSelectorSectionListMissing",
  props: {
    suggestion: {
      type: qe,
      required: !0
    }
  },
  emits: ["select-section", "close"],
  setup(e) {
    const t = e, n = ku(
      () => j.getAutonym(t.suggestion.targetLanguage)
    ), o = ku(
      () => Object.keys(t.suggestion.missingSections).length === 0
    );
    return (s, a) => {
      const i = u8("i18n");
      return Bi(), g8("section", m8, [
        js(Os("h4", p8, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? Cu("", !0) : (Bi(), yu(sm, {
          key: 0,
          sections: e.suggestion.orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: no(({ sourceSection: c }) => [
            Os("h5", {
              class: "ma-0",
              lang: e.suggestion.sourceLanguage,
              dir: Bt(j.getDir)(e.suggestion.sourceLanguage),
              textContent: d8(c)
            }, null, 8, h8)
          ]),
          _: 1
        }, 8, ["sections"])),
        o.value ? (Bi(), yu(Bt(T), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: no(() => [
            oo(Bt(y), {
              class: "py-6 justify-center",
              innerHTML: Bt(l8)
            }, null, 8, ["innerHTML"]),
            oo(Bt(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: no(() => [
                js(Os("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            oo(Bt(y), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: no(() => [
                js(Os("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            oo(Bt(y), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: no(() => [
                js(oo(Bt(P), {
                  class: "sx-section-selector__empty-missing-sections__close-button px-0",
                  type: "text",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, null, 512), [
                  [i, void 0, "cx-sx-section-selector-pick-other-translation-button-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Cu("", !0)
      ]);
    };
  }
};
const f8 = window.Vue.computed, _8 = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: sm
  },
  props: {
    suggestion: {
      type: qe,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    const t = f8(
      () => j.getAutonym(e.suggestion.targetLanguage)
    );
    return { mwIconArrowForward: ln, getAutonym: j.getAutonym, getDir: j.getDir, targetLanguageAutonym: t };
  }
}, v8 = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, S8 = window.Vue.withDirectives, bu = window.Vue.toDisplayString, y8 = window.Vue.resolveComponent, C8 = window.Vue.withCtx, k8 = window.Vue.createVNode, b8 = window.Vue.openBlock, x8 = window.Vue.createElementBlock, V8 = { class: "sx-section-selector__present-sections py-2" }, $8 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, A8 = { class: "sx-section-selector__present-section-button-content" }, D8 = ["lang", "dir", "textContent"], E8 = ["lang", "dir", "textContent"];
function T8(e, t, n, o, s, a) {
  const i = y8("sx-section-selector-section-list"), c = v8("i18n");
  return b8(), x8("section", V8, [
    S8(Hs("h4", $8, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    k8(i, {
      sections: n.suggestion.orderedPresentSections,
      onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
    }, {
      default: C8(({ sourceSection: l, targetSection: d }) => [
        Hs("div", A8, [
          Hs("h5", {
            class: "sx-section-selector__present-section-button-source",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: bu(l)
          }, null, 8, D8),
          Hs("h6", {
            class: "sx-section-selector__present-section-button-target",
            lang: n.suggestion.targetLanguage,
            dir: o.getDir(n.suggestion.targetLanguage),
            textContent: bu(d)
          }, null, 8, E8)
        ])
      ]),
      _: 1
    }, 8, ["sections"])
  ]);
}
const L8 = /* @__PURE__ */ D(_8, [["render", T8]]);
const Pi = window.Vue.computed, B8 = window.Vuex.useStore, P8 = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: L8,
    SxSectionSelectorSectionListMissing: w8,
    SxSectionSelectorHeader: o8,
    SxSectionSelectorViewArticleItem: Wb,
    MwRow: T,
    MwCol: y,
    MwIcon: K,
    SxArticleLanguageSelector: om
  },
  setup() {
    const e = B8(), {
      currentSectionSuggestion: t,
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = F(e), i = Pi(
      () => q.getPageUrl(n.value, t.value.sourceTitle)
    ), c = Pi(
      () => q.getPageUrl(o.value, t.value.targetTitle)
    ), l = Pi(() => [
      { path: i.value, autonym: s.value },
      { path: c.value, autonym: a.value }
    ]), d = me(), r = () => {
      un(null), d.push({ name: "dashboard" });
    }, u = Xo(), { selectPageSectionByTitle: g } = uc(), { isDesktop: m } = jo(), p = ic();
    return {
      goToDashboard: r,
      mwIconRobot: Qd,
      mwIconLabFlask: Yd,
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
}, Pt = window.Vue.resolveComponent, gt = window.Vue.createVNode, F8 = window.Vue.resolveDirective, Ye = window.Vue.createElementVNode, so = window.Vue.withDirectives, M8 = window.Vue.renderList, N8 = window.Vue.Fragment, Fi = window.Vue.openBlock, xu = window.Vue.createElementBlock, I8 = window.Vue.createBlock, Vu = window.Vue.toDisplayString, $u = window.Vue.createTextVNode, Mi = window.Vue.withCtx, U8 = { class: "sx-section-selector" }, z8 = { class: "sx-section-selector__body" }, R8 = { class: "py-2" }, O8 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, j8 = { class: "ma-0 pa-0" }, H8 = { class: "sx-section-selector__additional-consideration-title" }, q8 = { href: "#" }, G8 = { class: "sx-section-selector__additional-consideration-title" }, W8 = { href: "#" };
function X8(e, t, n, o, s, a) {
  const i = Pt("sx-section-selector-header"), c = Pt("sx-article-language-selector"), l = Pt("sx-section-selector-section-list-missing"), d = Pt("sx-section-selector-section-list-present"), r = Pt("sx-section-selector-view-article-item"), u = Pt("mw-icon"), g = Pt("mw-col"), m = Pt("mw-row"), p = F8("i18n");
  return Fi(), xu("section", U8, [
    gt(i, {
      suggestion: o.suggestion,
      onClose: o.goToDashboard
    }, null, 8, ["suggestion", "onClose"]),
    Ye("section", z8, [
      gt(c),
      gt(l, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["suggestion", "onSelectSection", "onClose"]),
      gt(d, {
        suggestion: o.suggestion,
        onSelectSection: o.selectSection
      }, null, 8, ["suggestion", "onSelectSection"]),
      Ye("section", R8, [
        so(Ye("h4", O8, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        Ye("ul", j8, [
          (Fi(!0), xu(N8, null, M8(o.viewArticleItems, (h, w) => (Fi(), I8(r, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      gt(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: Mi(() => [
          gt(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: Mi(() => [
              Ye("h6", H8, [
                gt(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                $u(" " + Vu(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              so(Ye("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              so(Ye("a", q8, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          gt(g, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: Mi(() => [
              Ye("h6", G8, [
                gt(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                $u(" " + Vu(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              so(Ye("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              so(Ye("a", W8, null, 512), [
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
const K8 = /* @__PURE__ */ D(P8, [["render", X8]]);
const Y8 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: K8
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, Q8 = window.Vue.resolveComponent, J8 = window.Vue.createVNode, Z8 = window.Vue.normalizeClass, e2 = window.Vue.openBlock, t2 = window.Vue.createElementBlock;
function n2(e, t, n, o, s, a) {
  const i = Q8("sx-section-selector");
  return e2(), t2("main", {
    class: Z8(["sx-section-selector-view", a.classes])
  }, [
    J8(i)
  ], 2);
}
const o2 = /* @__PURE__ */ D(Y8, [["render", n2]]), s2 = window.Vue.computed, a2 = window.Vuex.useStore, i2 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = F(
    a2()
  ), o = Ae();
  return s2(() => {
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
const r2 = window.Vue.watch, c2 = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: Mo },
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
    const n = (s) => t("update:selection", s), o = i2(e);
    return r2(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, l2 = window.Vue.resolveComponent, u2 = window.Vue.createVNode, d2 = window.Vue.openBlock, g2 = window.Vue.createElementBlock, m2 = { class: "sx-content-comparator__source-target-selector" };
function p2(e, t, n, o, s, a) {
  const i = l2("mw-button-group");
  return d2(), g2("div", m2, [
    u2(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const h2 = /* @__PURE__ */ D(c2, [["render", p2]]), en = window.Vue.computed, w2 = window.Vue.ref, dc = (e) => {
  const t = w2([]), {
    currentSectionSuggestion: n,
    currentSourceSection: o,
    currentTargetPage: s
  } = F(e), a = en(
    () => e.getters["application/getCurrentSourceSectionTitle"]
  ), i = en(
    () => n.value.missingSections[a.value] || n.value.presentSections[a.value] || ""
  ), c = en(
    () => {
      var g;
      return (((g = l.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), l = en(
    () => {
      var g;
      return (g = s.value) == null ? void 0 : g.getSectionByTitle(i.value);
    }
  ), d = en(() => {
    var g;
    return (g = o.value) == null ? void 0 : g.html;
  }), r = en(() => {
    var g;
    return (g = l.value) == null ? void 0 : g.html;
  }), u = en(
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
const Au = window.Vue.ref, qs = window.Vue.computed, f2 = window.Vue.onMounted, _2 = window.Vuex.useStore, v2 = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: h2,
    MwRow: T,
    MwCol: y,
    MwButton: P
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
    const n = _2(), o = Au(!1), { currentSectionSuggestion: s } = F(n), a = qs(
      () => n.getters["application/getCurrentSourceSectionTitle"]
    ), i = qs(
      () => n.getters["application/getCurrentSourceSectionAnchor"]
    ), c = (m) => t.emit("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: l, targetSectionAnchor: d } = dc(n), r = qs(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: a.value,
            path: `${q.getPageUrl(
              s.value.sourceLanguage,
              s.value.sourceTitle
            )}#${i.value}`,
            lang: s.value.sourceLanguage,
            dir: j.getDir(s.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: s.value.targetTitle,
            path: u.value,
            lang: s.value.targetLanguage,
            dir: j.getDir(s.value.targetLanguage)
          };
        default:
          return {
            title: l.value,
            path: `${u.value}#${d.value}`
          };
      }
    }), u = qs(
      () => q.getPageUrl(
        s.value.targetLanguage,
        s.value.targetTitle
      )
    ), g = Au(null);
    return f2(() => {
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
      mwIconLinkExternal: Io,
      mwIconEdit: Fn,
      updateSelection: c
    };
  }
}, Gs = window.Vue.resolveComponent, Ws = window.Vue.createVNode, S2 = window.Vue.toDisplayString, y2 = window.Vue.createElementVNode, Xs = window.Vue.withCtx, Ni = window.Vue.openBlock, Ii = window.Vue.createBlock;
window.Vue.createCommentVNode;
const C2 = window.Vue.normalizeClass, k2 = ["lang", "dir", "textContent"];
function b2(e, t, n, o, s, a) {
  const i = Gs("sx-content-comparator-source-vs-target-selector"), c = Gs("mw-col"), l = Gs("mw-button"), d = Gs("mw-row");
  return Ni(), Ii(d, {
    ref: "contentHeader",
    class: C2(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
    direction: "column",
    align: "stretch",
    reverse: o.isSticky
  }, {
    default: Xs(() => [
      Ws(i, {
        "is-mapped-section": n.isMappedSection,
        selection: n.sourceVsTargetSelection,
        "onUpdate:selection": o.updateSelection
      }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
      Ws(d, {
        justify: "between",
        class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
      }, {
        default: Xs(() => [
          Ws(c, null, {
            default: Xs(() => [
              y2("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: S2(o.activeContent.title)
              }, null, 8, k2)
            ]),
            _: 1
          }),
          Ws(c, { shrink: "" }, {
            default: Xs(() => [
              o.isSticky ? (Ni(), Ii(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (r) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (Ni(), Ii(l, {
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
const x2 = /* @__PURE__ */ D(v2, [["render", b2]]), Du = window.Vue.computed, V2 = window.Vuex.useStore, $2 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: y,
    MwButton: P
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = V2(), n = Du(
      () => t.getters["application/getCurrentSourceSectionTitle"]
    ), o = Du(
      () => e.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = uc();
    return {
      goToNextSection: () => {
        const c = (o.value + 1) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[c];
        s(l);
      },
      goToPreviousSection: () => {
        const c = (o.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, l = e.sectionSourceTitles[c];
        s(l);
      },
      mwIconPrevious: Or,
      mwIconArrowForward: ln
    };
  }
}, Eu = window.Vue.resolveComponent, Tu = window.Vue.createVNode, A2 = window.Vue.withCtx, D2 = window.Vue.openBlock, E2 = window.Vue.createBlock;
function T2(e, t, n, o, s, a) {
  const i = Eu("mw-button"), c = Eu("mw-col");
  return D2(), E2(c, {
    class: "justify-end",
    align: "center"
  }, {
    default: A2(() => [
      Tu(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      Tu(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const L2 = /* @__PURE__ */ D($2, [["render", T2]]);
const B2 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: T,
    MwCol: y,
    MwButton: P
  },
  props: {
    suggestion: {
      type: qe,
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
    mwIconTrash: qd,
    mwIconUndo: rh
  }),
  computed: {
    isDiscardedSection() {
      return this.discardedSections.includes(this.targetSectionTitle);
    },
    mappedSectionHeaderTitle() {
      return this.$i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        j.getAutonym(this.suggestion.targetLanguage)
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
}, Lu = window.Vue.toDisplayString, P2 = window.Vue.resolveDirective, Ui = window.Vue.withDirectives, vn = window.Vue.openBlock, Ks = window.Vue.createElementBlock, F2 = window.Vue.createCommentVNode, M2 = window.Vue.createTextVNode, Bu = window.Vue.createElementVNode, N2 = window.Vue.normalizeClass, zi = window.Vue.resolveComponent, Ri = window.Vue.withCtx, Oi = window.Vue.createVNode, Pu = window.Vue.createBlock, I2 = { class: "sx-content-comparator-header__mapped-section" }, U2 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, z2 = { key: 0 }, R2 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, O2 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function j2(e, t, n, o, s, a) {
  const i = zi("mw-col"), c = zi("mw-button"), l = zi("mw-row"), d = P2("i18n");
  return vn(), Ks("div", I2, [
    Oi(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: Ri(() => [
        Oi(i, { grow: "" }, {
          default: Ri(() => [
            Bu("h6", U2, [
              M2(Lu(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? Ui((vn(), Ks("span", z2, null, 512)), [
                [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : F2("", !0)
            ]),
            Bu("h6", {
              class: N2(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, Lu(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        Oi(i, { shrink: "" }, {
          default: Ri(() => [
            a.isDiscardedSection ? (vn(), Pu(c, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (vn(), Pu(c, {
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
    a.isDiscardedSection ? Ui((vn(), Ks("p", O2, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : Ui((vn(), Ks("p", R2, null, 512)), [
      [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const H2 = /* @__PURE__ */ D(B2, [["render", j2]]);
const Ys = window.Vue.computed, q2 = window.Vuex.useStore, G2 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: H2,
    SxContentComparatorHeaderNavigation: L2,
    MwButton: P,
    MwCol: y,
    MwRow: T,
    MwIcon: K
  },
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const e = q2(), {
      currentSectionSuggestion: t,
      currentSourceSection: n
    } = F(e), o = Ys(
      () => e.getters["application/isCurrentSourceSectionMissing"]
    ), s = Ys(
      () => e.getters["application/isCurrentSourceSectionPresent"]
    ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = dc(e), c = Ys(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = Ys(() => [
      ...Object.keys(t.value.missingSections),
      ...Object.keys(t.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: jr,
      mwIconEdit: Fn,
      mwIconEye: Jd,
      sectionSourceTitles: l,
      sourceSectionContent: c,
      sourceSectionTitle: i,
      suggestion: t,
      getDir: j.getDir
    };
  }
}, Sn = window.Vue.resolveComponent, mt = window.Vue.createVNode, Fu = window.Vue.toDisplayString, Ao = window.Vue.createElementVNode, yn = window.Vue.withCtx, W2 = window.Vue.resolveDirective, Mu = window.Vue.withDirectives, ji = window.Vue.openBlock, Nu = window.Vue.createBlock, Iu = window.Vue.createCommentVNode, X2 = window.Vue.createElementBlock, K2 = { class: "sx-content-comparator__header pa-4" }, Y2 = ["lang", "dir"], Q2 = ["lang", "dir"], J2 = /* @__PURE__ */ Ao("br", null, null, -1);
function Z2(e, t, n, o, s, a) {
  const i = Sn("mw-button"), c = Sn("mw-col"), l = Sn("sx-content-comparator-header-navigation"), d = Sn("mw-row"), r = Sn("mw-icon"), u = Sn("sx-content-comparator-header-mapped-section"), g = W2("i18n");
  return ji(), X2("div", K2, [
    mt(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    mt(d, { class: "my-1 py-2 mx-0" }, {
      default: yn(() => [
        mt(c, { grow: "" }, {
          default: yn(() => [
            Ao("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Fu(o.suggestion.sourceTitle), 9, Y2),
            Ao("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, Fu(o.sourceSectionTitle), 9, Q2)
          ]),
          _: 1
        }),
        mt(l, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        mt(c, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: yn(() => [
            mt(i, {
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
    o.isCurrentSectionMissing ? (ji(), Nu(d, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: yn(() => [
        mt(c, {
          shrink: "",
          class: "pe-2"
        }, {
          default: yn(() => [
            mt(r, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        mt(c, { class: "ma-0" }, {
          default: yn(() => [
            Mu(Ao("strong", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            J2,
            Mu(Ao("span", null, null, 512), [
              [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : Iu("", !0),
    o.isCurrentSectionPresent ? (ji(), Nu(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Iu("", !0)
  ]);
}
const ex = /* @__PURE__ */ D(G2, [["render", Z2]]);
const tx = {
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
}, Uu = window.Vue.toDisplayString, nx = window.Vue.createElementVNode, zu = window.Vue.openBlock, Ru = window.Vue.createElementBlock, ox = window.Vue.createCommentVNode, sx = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, ax = ["textContent"], ix = ["textContent"];
function rx(e, t, n, o, s, a) {
  return zu(), Ru("section", sx, [
    nx("h5", {
      textContent: Uu(n.placeholderTitle)
    }, null, 8, ax),
    n.placeholderSubtitle ? (zu(), Ru("p", {
      key: 0,
      textContent: Uu(n.placeholderSubtitle)
    }, null, 8, ix)) : ox("", !0)
  ]);
}
const am = /* @__PURE__ */ D(tx, [["render", rx]]), cx = window.Vue.computed, lx = window.Vue.createApp, ux = window.Vuex.useStore, dx = () => {
  const e = ux(), {
    currentSectionSuggestion: t,
    currentTargetPage: n
  } = F(e), o = Ae(), s = () => lx(
    am,
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
  return cx(() => {
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
const gx = window.Vue.ref, mx = window.Vue.computed, px = window.Vue.watch, hx = window.Vuex.useStore, wx = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: am,
    SxContentComparatorHeader: ex,
    SxContentComparatorContentHeader: x2,
    MwSpinner: je
  },
  setup() {
    const e = hx(), t = me(), n = gx("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      Wg() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: i,
      isCurrentSectionMapped: c,
      sourceSectionContent: l,
      targetSectionContent: d
    } = dc(e), r = dx(), {
      currentSectionSuggestion: u,
      sourceLanguage: g,
      targetLanguage: m
    } = F(e), p = mx(() => u.value.targetTitle);
    return px(
      p,
      () => e.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: m.value,
        targetLanguage: g.value,
        sourceTitle: p.value
      }),
      { immediate: !0 }
    ), {
      getDir: j.getDir,
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
}, Qs = window.Vue.resolveComponent, Hi = window.Vue.createVNode, Cn = window.Vue.openBlock, Ou = window.Vue.createBlock, ju = window.Vue.createCommentVNode, Js = window.Vue.createElementVNode, qi = window.Vue.Fragment, Zs = window.Vue.createElementBlock, fx = { class: "sx-content-comparator" }, _x = { class: "sx-content-comparator__source-content" }, vx = ["lang", "dir", "innerHTML"], Sx = ["lang", "dir", "innerHTML"], yx = ["innerHTML"];
function Cx(e, t, n, o, s, a) {
  const i = Qs("sx-content-comparator-header"), c = Qs("sx-content-comparator-content-header"), l = Qs("mw-spinner"), d = Qs("sx-content-comparator-new-section-placeholder");
  return Cn(), Zs("section", fx, [
    Hi(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (r) => o.discardedSections = r),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    Hi(c, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (r) => o.sourceVsTargetSelection = r),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    Js("section", _x, [
      o.sourceVsTargetSelection === "source_section" ? (Cn(), Zs(qi, { key: 0 }, [
        o.sourceSectionContent ? ju("", !0) : (Cn(), Ou(l, { key: 0 })),
        Js("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, vx)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (Cn(), Zs(qi, { key: 1 }, [
        o.targetPageContent ? ju("", !0) : (Cn(), Ou(l, { key: 0 })),
        Js("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, Sx)
      ], 64)) : (Cn(), Zs(qi, { key: 2 }, [
        Js("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, yx),
        Hi(d, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const kx = /* @__PURE__ */ D(wx, [["render", Cx]]);
const bx = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: kx
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, xx = window.Vue.resolveComponent, Vx = window.Vue.createVNode, $x = window.Vue.normalizeClass, Ax = window.Vue.openBlock, Dx = window.Vue.createElementBlock;
function Ex(e, t, n, o, s, a) {
  const i = xx("sx-content-comparator");
  return Ax(), Dx("main", {
    class: $x(["sx-content-comparator-view", a.classes])
  }, [
    Vx(i)
  ], 2);
}
const Tx = /* @__PURE__ */ D(bx, [["render", Ex]]);
const Lx = window.Vue.resolveDirective, ao = window.Vue.createElementVNode, Hu = window.Vue.withDirectives, ea = window.Vue.unref, Gi = window.Vue.createVNode, Wi = window.Vue.withCtx, Bx = window.Vue.openBlock, Px = window.Vue.createBlock, Fx = { class: "mw-ui-dialog__header px-4 py-3" }, Mx = { class: "mw-ui-dialog__header-title" }, Nx = { class: "pa-4" }, Ix = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Ux = {
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
      const l = Lx("i18n");
      return Bx(), Px(ea(We), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.gray700
      }, {
        header: Wi(() => [
          ao("div", Fx, [
            Hu(ao("span", Mx, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Wi(() => [
          ao("div", Ix, [
            Gi(ea(P), {
              type: "text",
              label: i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Gi(ea(P), {
              type: "text",
              destructive: "",
              label: i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label"),
              onClick: a
            }, null, 8, ["label"])
          ])
        ]),
        default: Wi(() => [
          Gi(ea(No)),
          ao("div", Nx, [
            Hu(ao("span", null, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
};
const Xi = window.Vue.computed, zx = window.Vuex.useStore, Rx = {
  name: "SxTranslationSelector",
  components: { MwCard: Fe, MwButton: P, MwDialog: We },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = W.EMPTY_TEXT_PROVIDER_KEY, o = W.ORIGINAL_TEXT_PROVIDER_KEY, s = zx(), {
      sourceLanguage: a,
      targetLanguage: i,
      currentSourceSection: c,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = F(s), r = Xi(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        a.value,
        i.value
      )
    ), u = Xi(() => {
      const w = [o, n];
      return r.value.filter(
        (f) => !w.includes(f)
      );
    }), g = Xi(
      () => l.value ? c.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = (w) => {
      s.dispatch("application/updateMTProvider", w), h();
    }, p = W.getMTProviderLabel, h = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: h,
      emptyTextProviderKey: n,
      getDir: j.getDir,
      getMTProviderLabel: p,
      mwIconClose: Ge,
      originalTextProviderKey: o,
      proposedTranslations: g,
      selectProvider: m,
      sourceLanguage: a
    };
  }
}, Ox = window.Vue.resolveDirective, Be = window.Vue.createElementVNode, ta = window.Vue.withDirectives, Ki = window.Vue.resolveComponent, Yi = window.Vue.createVNode, Ft = window.Vue.withCtx, jx = window.Vue.renderList, Hx = window.Vue.Fragment, Qi = window.Vue.openBlock, qx = window.Vue.createElementBlock, Gx = window.Vue.toDisplayString, qu = window.Vue.createBlock, Wx = window.Vue.createCommentVNode, Xx = { class: "mw-ui-dialog__header pa-4" }, Kx = { class: "row ma-0 py-2" }, Yx = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, Qx = { class: "mb-0" }, Jx = { class: "col shrink justify-center" }, Zx = { class: "pb-2 mb-0" }, e4 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, t4 = ["dir", "lang", "innerHTML"], n4 = ["textContent"], o4 = ["innerHTML"], s4 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, a4 = /* @__PURE__ */ Be("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function i4(e, t, n, o, s, a) {
  const i = Ki("mw-button"), c = Ki("mw-card"), l = Ki("mw-dialog"), d = Ox("i18n");
  return n.active ? (Qi(), qu(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: Ft(() => [
      Be("div", Xx, [
        Be("div", Kx, [
          Be("div", Yx, [
            ta(Be("h4", Qx, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Be("div", Jx, [
            Yi(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        ta(Be("h6", Zx, null, 512), [
          [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: Ft(() => [
      Yi(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (r) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: Ft(() => [
          ta(Be("h5", e4, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: Ft(() => [
          Be("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, t4)
        ]),
        _: 1
      }),
      (Qi(!0), qx(Hx, null, jx(o.apiMtProviders, (r) => (Qi(), qu(c, {
        key: r,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(r)
      }, {
        header: Ft(() => [
          Be("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: Gx(o.getMTProviderLabel(r))
          }, null, 8, n4)
        ]),
        default: Ft(() => [
          Be("p", {
            innerHTML: o.proposedTranslations[r]
          }, null, 8, o4)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      Yi(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (r) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: Ft(() => [
          ta(Be("h5", s4, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: Ft(() => [
          a4
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : Wx("", !0);
}
const r4 = /* @__PURE__ */ D(Rx, [["render", i4]]);
const kn = window.Vue.computed, c4 = window.Vuex.useStore, l4 = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: K, MwCol: y },
  setup() {
    const e = c4(), t = "sx-sentence-selector__section-title", {
      currentSourceSection: n,
      isSectionTitleSelected: o,
      currentSourcePage: s,
      sourceLanguage: a
    } = F(e), i = kn(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = kn(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), l = kn(
      () => q.getPageUrl(a.value, i.value)
    ), d = kn(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = kn(
      () => d.value ? "translated" : "selected"
    ), u = kn(() => {
      const m = [t];
      return o.value && m.push(`${t}--${r.value}`), m;
    });
    return {
      mwIconLinkExternal: Io,
      selectSectionTitle: () => e.dispatch("application/selectTranslationUnitById", 0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: c,
      titleClasses: u
    };
  }
}, u4 = window.Vue.toDisplayString, Ji = window.Vue.createElementVNode, Gu = window.Vue.resolveComponent, d4 = window.Vue.createVNode, g4 = window.Vue.normalizeClass, m4 = window.Vue.withCtx, p4 = window.Vue.openBlock, h4 = window.Vue.createBlock, w4 = ["href"], f4 = ["textContent"], _4 = ["innerHTML"];
function v4(e, t, n, o, s, a) {
  const i = Gu("mw-icon"), c = Gu("mw-col");
  return p4(), h4(c, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: m4(() => [
      Ji("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        Ji("strong", {
          textContent: u4(o.sourceArticleTitle)
        }, null, 8, f4),
        d4(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, w4),
      Ji("h2", {
        class: g4(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, _4)
    ]),
    _: 1
  });
}
const S4 = /* @__PURE__ */ D(l4, [["render", v4]]), y4 = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', C4 = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', k4 = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', b4 = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', x4 = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', V4 = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', $4 = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', A4 = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', D4 = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', E4 = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', T4 = y4, L4 = C4, B4 = k4, P4 = {
  langCodeMap: {
    ar: b4
  },
  default: x4
}, F4 = V4, M4 = {
  ltr: $4,
  shouldFlip: !0
}, N4 = {
  ltr: A4,
  shouldFlip: !0
}, I4 = {
  ltr: D4,
  shouldFlip: !0
}, U4 = E4;
const Qe = window.Vue.unref, io = window.Vue.createVNode, na = window.Vue.withCtx, Wu = window.Vue.toDisplayString, Xu = window.Vue.createTextVNode, z4 = window.Vue.openBlock, R4 = window.Vue.createBlock, O4 = window.Vue.computed, j4 = window.Vuex.useStore, Zi = window.Codex.CdxButton, Ku = window.Codex.CdxIcon, im = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { currentSourceSection: t, proposedTranslation: n, isSectionTitleSelected: o } = F(j4()), s = O4(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (a, i) => (z4(), R4(Qe(T), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: na(() => [
        io(Qe(Zi), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          disabled: Qe(o),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: na(() => [
            io(Qe(Ku), {
              class: "me-1",
              icon: Qe(N4)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        io(Qe(Zi), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Qe(n),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: na(() => [
            Xu(Wu(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        io(Qe(Zi), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: na(() => [
            Xu(Wu(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            io(Qe(Ku), {
              class: "ms-1",
              size: "small",
              icon: Qe(M4)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const tn = window.Vue.unref, H4 = window.Vue.toDisplayString, ro = window.Vue.createVNode, oa = window.Vue.withCtx, q4 = window.Vue.openBlock, G4 = window.Vue.createBlock, er = window.Vue.computed, W4 = window.Vuex.useStore, X4 = window.Codex.CdxButton, K4 = window.Codex.CdxIcon, Y4 = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = W4(), n = er(() => t.state.application.currentMTProvider), o = Ae(), s = er(() => ({
      [W.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [W.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = er(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        W.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (q4(), G4(tn(y), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: oa(() => [
        ro(tn(T), { class: "ma-0 ps-5 pb-4" }, {
          default: oa(() => [
            ro(tn(y), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: H4(a.value)
            }, null, 8, ["textContent"]),
            ro(tn(y), {
              shrink: "",
              class: "pe-5"
            }, {
              default: oa(() => [
                ro(tn(X4), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  onClick: c[0] || (c[0] = (l) => i.$emit("configure-options"))
                }, {
                  default: oa(() => [
                    ro(tn(K4), {
                      class: "pa-0",
                      icon: tn(B4)
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
const Ue = window.Vue.unref, Mt = window.Vue.createVNode, Q4 = window.Vue.resolveDirective, Yu = window.Vue.createElementVNode, J4 = window.Vue.withDirectives, Qu = window.Vue.toDisplayString, Ju = window.Vue.createTextVNode, co = window.Vue.withCtx, Z4 = window.Vue.openBlock, e3 = window.Vue.createElementBlock, t3 = { class: "mt-retry-body pb-5" }, n3 = { class: "retry-body__message" }, Zu = window.Codex.CdxButton, tr = window.Codex.CdxIcon, o3 = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = Q4("i18n");
      return Z4(), e3("div", t3, [
        Yu("div", n3, [
          Mt(Ue(tr), {
            class: "me-2",
            icon: Ue(T4)
          }, null, 8, ["icon"]),
          J4(Yu("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Mt(Ue(T), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: co(() => [
            Mt(Ue(y), { cols: "6" }, {
              default: co(() => [
                Mt(Ue(Zu), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: co(() => [
                    Mt(Ue(tr), {
                      class: "me-1",
                      icon: Ue(U4)
                    }, null, 8, ["icon"]),
                    Ju(" " + Qu(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Mt(Ue(y), { cols: "6" }, {
              default: co(() => [
                Mt(Ue(Zu), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: co(() => [
                    Mt(Ue(tr), {
                      class: "me-1",
                      icon: Ue(F4)
                    }, null, 8, ["icon"]),
                    Ju(" " + Qu(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const bn = window.Vue.createVNode, xe = window.Vue.unref, lo = window.Vue.openBlock, s3 = window.Vue.createElementBlock, a3 = window.Vue.createCommentVNode, sa = window.Vue.createBlock, i3 = window.Vue.normalizeClass, r3 = window.Vue.normalizeStyle, uo = window.Vue.withCtx, c3 = window.Vue.toDisplayString, l3 = window.Vue.createTextVNode, u3 = window.Vue.normalizeProps, d3 = window.Vue.guardReactiveProps, g3 = ["lang", "dir", "innerHTML"], nr = window.Vue.ref, m3 = window.Vue.onMounted, or = window.Vue.computed, p3 = window.Vue.watch, h3 = window.Vue.nextTick, w3 = window.Vuex.useStore, f3 = window.Codex.CdxButton, _3 = window.Codex.CdxIcon, v3 = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = nr(0), n = nr(null), o = nr(null), s = w3(), {
      currentMTProvider: a,
      targetLanguage: i,
      proposedTranslation: c,
      currentSourceSection: l
    } = F(s), d = or(
      () => {
        var m;
        return (m = s.state.application.mtRequestsPending) == null ? void 0 : m.includes(
          l.value.selectedTranslationUnitId
        );
      }
    ), r = or(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = or(
      () => !!c.value || a.value === W.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    return p3(a, g), m3(() => C(this, null, function* () {
      yield h3(), g();
    })), (m, p) => (lo(), sa(xe(Fe), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: uo(() => [
        bn(xe(T), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: uo(() => [
            bn(Y4, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: p[0] || (p[0] = (h) => m.$emit("configure-options"))
            }, null, 512),
            bn(xe(y), {
              class: i3(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value
              }]),
              style: r3(r.value)
            }, {
              default: uo(() => [
                u.value ? (lo(), s3("section", {
                  key: 0,
                  lang: xe(i),
                  dir: xe(j.getDir)(xe(i)),
                  innerHTML: xe(c)
                }, null, 8, g3)) : d.value ? (lo(), sa(xe(je), { key: 1 })) : (lo(), sa(o3, {
                  key: 2,
                  onConfigureOptions: p[1] || (p[1] = (h) => m.$emit("configure-options")),
                  onRetryTranslation: p[2] || (p[2] = (h) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            bn(xe(y), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: uo(() => [
                u.value || d.value ? (lo(), sa(xe(f3), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: p[3] || (p[3] = (h) => m.$emit("edit-translation", xe(c)))
                }, {
                  default: uo(() => [
                    bn(xe(_3), {
                      class: "me-1",
                      icon: xe(L4)
                    }, null, 8, ["icon"]),
                    l3(" " + c3(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : a3("", !0),
                bn(im, u3(d3(m.$attrs)), null, 16)
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
}, S3 = window.Vue.computed, y3 = (e) => S3(() => {
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
const C3 = window.Vue.onMounted, k3 = window.Vue.ref, b3 = window.Vue.computed, x3 = window.Vuex.useStore, V3 = {
  name: "SubSection",
  props: {
    subSection: {
      type: Ve,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = k3(null), o = y3(e.subSection);
    C3(() => {
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
    const s = x3(), a = (c) => {
      if (c.selected) {
        t("bounce-translation");
        return;
      }
      s.dispatch(
        "application/selectTranslationUnitById",
        c.id
      );
    }, i = b3(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, $3 = window.Vue.normalizeClass, A3 = window.Vue.openBlock, D3 = window.Vue.createElementBlock, E3 = ["innerHTML"];
function T3(e, t, n, o, s, a) {
  return A3(), D3("div", {
    ref: "subSectionRoot",
    class: $3(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, E3);
}
const L3 = /* @__PURE__ */ D(V3, [["render", T3]]);
const ed = window.Vue.computed, B3 = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: ng,
    MwIcon: K
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
    const t = ed(() => ({ "--size": e.size })), n = ed(
      () => !e.isTemplateAdapted || e.percentage === 0 ? Ca : cn
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, td = window.Vue.resolveComponent, nd = window.Vue.createVNode, od = window.Vue.normalizeStyle, P3 = window.Vue.openBlock, F3 = window.Vue.createElementBlock;
function M3(e, t, n, o, s, a) {
  const i = td("mw-circle-progress-bar"), c = td("mw-icon");
  return P3(), F3("div", {
    class: "block-template-status-indicator",
    style: od(o.cssVars)
  }, [
    nd(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    nd(c, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: od({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const rm = /* @__PURE__ */ D(B3, [["render", M3]]), N3 = window.Vuex.useStore, go = window.Vue.computed, I3 = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: y,
    MwRow: T,
    MwButton: P,
    MwIcon: K,
    MwRadioGroup: eg,
    MwRadio: Sa,
    MwDivider: No,
    MwDialog: We,
    MwCircleProgressBar: ng,
    BlockTemplateStatusIndicator: rm
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
    const { targetLanguageAutonym: t } = F(N3()), n = go(
      () => !e.isTemplateAdapted || o.value === 0 ? Ca : cn
    ), o = go(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = Ae(), a = go(() => {
      let l;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? l = "cx-sx-block-template-mapping-status-title-partially-template" : l = "cx-sx-block-template-mapping-status-title-fully-template" : l = "cx-sx-block-template-mapping-status-title-unadapted-template" : l = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(l);
    }), i = go(() => {
      let l;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? l = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? l = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : l = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(l);
    }), c = go(() => {
      let l = [];
      if (!e.targetTemplateExists)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: mh,
          color: Pe.gray500
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Ge,
          color: Pe.gray500
        });
      else if (o.value < 100)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: cn,
          color: Pe.blue600
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
          icon: cn,
          color: Pe.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: Fn,
        color: Pe.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: va,
        color: Pe.gray500
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: cn,
      mwIconInfo: nh,
      notes: c
    };
  }
}, mo = window.Vue.resolveComponent, po = window.Vue.openBlock, aa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const xn = window.Vue.withCtx, ho = window.Vue.createVNode, sr = window.Vue.toDisplayString, ar = window.Vue.createElementVNode, U3 = window.Vue.renderList, z3 = window.Vue.Fragment, R3 = window.Vue.createElementBlock, O3 = { class: "pa-4" }, j3 = ["textContent"], H3 = ["textContent"];
function q3(e, t, n, o, s, a) {
  const i = mo("block-template-status-indicator"), c = mo("mw-icon"), l = mo("mw-col"), d = mo("mw-row"), r = mo("mw-dialog");
  return po(), aa(r, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: xn(() => [
      ho(d, {
        justify: "center",
        class: "mt-4"
      }, {
        default: xn(() => [
          ho(l, { shrink: "" }, {
            default: xn(() => [
              n.targetTemplateExists ? (po(), aa(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (po(), aa(c, {
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
    default: xn(() => [
      ar("div", O3, [
        ar("h3", {
          textContent: sr(o.statusText)
        }, null, 8, j3),
        ar("p", {
          class: "mt-6 text-small",
          textContent: sr(o.statusExplanation)
        }, null, 8, H3),
        (po(!0), R3(z3, null, U3(o.notes, (u, g) => (po(), aa(d, {
          key: g,
          align: "start",
          class: "mt-4"
        }, {
          default: xn(() => [
            ho(l, { shrink: "" }, {
              default: xn(() => [
                ho(c, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            ho(l, {
              textContent: sr(u.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const G3 = /* @__PURE__ */ D(I3, [["render", q3]]);
const ae = window.Vue.unref, ue = window.Vue.createVNode, Je = window.Vue.withCtx, ir = window.Vue.toDisplayString, sd = window.Vue.createTextVNode, W3 = window.Vue.resolveDirective, ad = window.Vue.withDirectives, id = window.Vue.createElementVNode, X3 = window.Vue.normalizeClass, ia = window.Vue.openBlock, rd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const cd = window.Vue.createBlock, K3 = window.Vue.normalizeProps, Y3 = window.Vue.guardReactiveProps, Q3 = { class: "block-template-adaptation-card__container pa-4" }, J3 = ["textContent"], Z3 = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Se = window.Vue.computed, eV = window.Vue.ref, tV = window.Vuex.useStore, ld = window.Codex.CdxButton, ud = window.Codex.CdxIcon, nV = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = tV(), {
      selectedContentTranslationUnit: n,
      targetLanguageAutonym: o,
      currentMTProvider: s,
      proposedTranslation: a
    } = F(t), i = Se(() => {
      var B;
      return ((B = n.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), c = Se(
      () => {
        var A;
        return (A = n.value) == null ? void 0 : A.getTargetBlockTemplateNameByProvider(
          s.value
        );
      }
    ), l = Se(
      () => {
        var A;
        return !((A = t.state.application.mtRequestsPending) != null && A.includes(
          n.value.id
        ));
      }
    ), d = Ae(), r = Se(
      // Strip HTML comments and return
      () => {
        var A, B;
        return ((B = (A = n.value) == null ? void 0 : A.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), u = Se(
      () => {
        var A;
        return (A = n.value.blockTemplateAdaptationInfo) == null ? void 0 : A[s.value];
      }
    ), g = Se(
      () => {
        var A, B;
        return ((A = u.value) == null ? void 0 : A.adapted) || !!((B = u.value) != null && B.partial);
      }
    ), m = Se(() => u.value ? "block-template-adaptation-card__body--" + (g.value ? "success" : "warning") : null), p = Se(() => u.value ? g.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Se(
      () => {
        var A;
        return Object.keys(((A = n.value) == null ? void 0 : A.sourceTemplateParams) || {}).length;
      }
    ), w = Se(() => {
      var B;
      const A = (B = n.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        s.value
      );
      return Object.keys(A || {});
    }), f = Se(() => w.value.length), v = Se(() => {
      const A = L.value;
      return h.value + A === 0 ? 100 : f.value / (h.value + A) * 100 || 0;
    }), b = eV(!1), k = () => {
      b.value = !0;
    }, M = (A) => A.filter((B) => !w.value.includes(B)), L = Se(() => {
      var B;
      const A = ((B = u.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return M(A).length;
    }), R = Se(() => {
      var B;
      const A = ((B = u.value) == null ? void 0 : B.optionalTargetParams) || [];
      return M(A).length;
    });
    return (A, B) => {
      const De = W3("i18n");
      return ia(), cd(ae(Fe), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Je(() => [
          id("div", Q3, [
            ue(ae(T), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Je(() => [
                ue(ae(y), { shrink: "" }, {
                  default: Je(() => [
                    ue(ae(ud), {
                      icon: ae(I4),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ue(ae(y), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Je(() => [
                    sd(ir(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (ia(), rd("div", {
              key: 0,
              class: X3(["pa-4 mb-4", m.value])
            }, [
              ue(ae(T), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Je(() => [
                  ad(ue(ae(y), { tag: "h5" }, null, 512), [
                    [De, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ue(ae(y), { shrink: "" }, {
                    default: Je(() => [
                      ue(rm, {
                        percentage: v.value,
                        size: 20,
                        "is-template-adapted": g.value,
                        "stroke-width": 2,
                        onClick: k
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              id("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: ir(c.value)
              }, null, 8, J3),
              ue(ae(ld), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (J) => A.$emit("edit-translation", i.value))
              }, {
                default: Je(() => [
                  sd(ir(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : l.value ? (ia(), rd("div", Z3, [
              ue(ae(T), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Je(() => [
                  ad(ue(ae(y), { tag: "h5" }, null, 512), [
                    [De, [
                      ae(o)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ue(ae(y), { shrink: "" }, {
                    default: Je(() => [
                      ue(ae(ld), { weight: "quiet" }, {
                        default: Je(() => [
                          ue(ae(ud), {
                            icon: ae(P4),
                            onClick: k
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
            ])) : (ia(), cd(ae(je), { key: 2 }))
          ]),
          ue(im, K3(Y3(A.$attrs)), null, 16),
          ue(G3, {
            active: b.value,
            "onUpdate:active": B[1] || (B[1] = (J) => b.value = J),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": L.value,
            "optional-missing-params-count": R.value,
            "is-template-adapted": g.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const oV = window.Vue.computed, sV = window.Vuex.useStore, aV = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: Mo },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = F(sV()), o = Ae();
    return { scopeOptions: oV(() => [
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
}, iV = window.Vue.resolveComponent, rV = window.Vue.createVNode, cV = window.Vue.openBlock, lV = window.Vue.createElementBlock, uV = { class: "translated-segment-card-header" };
function dV(e, t, n, o, s, a) {
  const i = iV("mw-button-group");
  return cV(), lV("div", uV, [
    rV(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const gV = /* @__PURE__ */ D(aV, [["render", dV]]), Vn = window.Vue.unref, dd = window.Vue.createVNode, mV = window.Vue.withCtx, pV = window.Vue.openBlock, hV = window.Vue.createBlock, wV = window.Vue.computed, fV = window.Vuex.useStore, _V = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { currentSourceSection: t, isSectionTitleSelected: n } = F(
      fV()
    ), o = wV(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (pV(), hV(Vn(T), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: mV(() => [
        dd(Vn(P), {
          icon: Vn(Or),
          type: "icon",
          class: "sx-sentence-selector__previous-sentence-button col pa-4",
          disabled: Vn(n),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, null, 8, ["icon", "disabled"]),
        dd(Vn(P), {
          type: "icon",
          icon: Vn(ln),
          class: "sx-sentence-selector__skip-translation-button col pa-4 items-start",
          disabled: o.value,
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, null, 8, ["icon", "disabled"])
      ]),
      _: 1
    }));
  }
};
const we = window.Vue.createVNode, gd = window.Vue.resolveDirective, vV = window.Vue.createElementVNode, rr = window.Vue.withDirectives, ne = window.Vue.unref, SV = window.Vue.normalizeStyle, ra = window.Vue.openBlock, md = window.Vue.createElementBlock, yV = window.Vue.createCommentVNode, CV = window.Vue.normalizeClass, ze = window.Vue.withCtx, pd = window.Vue.createBlock, kV = window.Vue.normalizeProps, bV = window.Vue.guardReactiveProps, pt = window.Vue.computed, xV = window.Vue.ref, VV = window.Vue.inject, $V = window.Vuex.useStore, AV = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = xV("sentence"), {
      isSectionTitleSelected: n,
      currentSourceSection: o,
      selectedContentTranslationUnit: s,
      targetLanguage: a
    } = F($V()), i = pt(() => t.value === "sentence"), c = pt(
      () => o.value.subSections.find(
        (v) => v.sentences.some(
          (b) => {
            var k;
            return b.id === ((k = s.value) == null ? void 0 : k.id);
          }
        )
      )
    ), l = pt(() => {
      var v;
      return n.value ? o.value.mtProposedTranslationUsedForTitle : i.value ? (v = s.value) == null ? void 0 : v.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), d = VV("colors"), r = d.gray200, u = d.red600, g = pt(() => n.value ? o.value.translatedTitle : i.value ? s.value.translatedContent : c.value.translatedContent), m = pt(
      () => jt.calculateScore(
        g.value,
        l.value,
        a.value
      )
    ), p = pt(
      () => jt.getScoreStatus(m.value)
    ), h = pt(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = pt(() => ({
      failure: m.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), f = pt(
      () => w.value[p.value]
    );
    return (v, b) => {
      const k = gd("i18n"), M = gd("i18n-html");
      return ra(), pd(ne(Fe), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ze(() => [
          we(ne(T), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ze(() => [
              we(gV, {
                selection: t.value,
                "onUpdate:selection": b[0] || (b[0] = (L) => t.value = L)
              }, null, 8, ["selection"]),
              we(ne(y), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ze(() => [
                  we(ne(T), { class: "ma-0" }, {
                    default: ze(() => [
                      we(ne(y), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ze(() => [
                          rr(vV("h5", null, null, 512), [
                            [k, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? rr((ra(), md("p", {
                            key: 0,
                            style: SV({ color: ne(u) })
                          }, null, 4)), [
                            [k, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : rr((ra(), md("p", {
                            key: 1,
                            class: CV(h.value)
                          }, null, 2)), [
                            [M, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      we(ne(y), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ze(() => [
                          we(ne(T), { class: "ma-0 ms-2" }, {
                            default: ze(() => [
                              we(ne(y), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ze(() => [
                                  we(ne(K), {
                                    icon: ne(eh),
                                    "icon-color": f.value
                                  }, null, 8, ["icon", "icon-color"])
                                ]),
                                _: 1
                              }),
                              we(ne(y), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ze(() => [
                                  we(ne(tg), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: ne(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              we(ne(y), { shrink: "" }, {
                                default: ze(() => [
                                  we(ne(K), { icon: ne(Qd) }, null, 8, ["icon"])
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
                  i.value ? (ra(), pd(ne(P), {
                    key: 0,
                    icon: ne(Fn),
                    type: "text",
                    label: v.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                    class: "sx-sentence-selector__proposed-translation-edit-button pa-0 mt-4",
                    progressive: "",
                    onClick: b[1] || (b[1] = (L) => v.$emit("edit-translation", g.value))
                  }, null, 8, ["icon", "label"])) : yV("", !0)
                ]),
                _: 1
              }),
              we(ne(y), { class: "translated-segment-card__actions" }, {
                default: ze(() => [
                  we(_V, kV(bV(v.$attrs)), null, 16)
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
}, DV = window.Vuex.useStore, EV = () => {
  const e = DV();
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
}, cm = window.Vuex.useStore, TV = () => {
  const e = cm(), { sourceLanguage: t, targetLanguage: n } = F(e);
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield ka.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, LV = () => {
  const e = cm(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = F(e), s = TV();
  return () => C(void 0, null, function* () {
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
}, BV = window.Vuex.useStore, PV = window.Vue.computed, FV = (e) => {
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
}, MV = () => {
  const e = BV(), { selectedContentTranslationUnit: t } = F(e), n = PV(
    () => t.value instanceof Ve
  );
  return () => {
    if (!t.value)
      return;
    const o = t.value.id, s = n.value ? document.getElementById(o) : document.querySelector(`[data-segmentid='${o}']`);
    s && FV(s);
  };
};
const de = window.Vue.unref, Re = window.Vue.createVNode, nn = window.Vue.withCtx, NV = window.Vue.resolveDirective, hd = window.Vue.createElementVNode, IV = window.Vue.withDirectives, UV = window.Vue.renderList, zV = window.Vue.Fragment, Nt = window.Vue.openBlock, wd = window.Vue.createElementBlock, $n = window.Vue.createBlock;
window.Vue.createCommentVNode;
const RV = window.Vue.normalizeClass, OV = window.Vue.normalizeStyle, jV = { class: "sx-sentence-selector__header-title" }, HV = { class: "sx-sentence-selector__section-contents px-4" }, An = window.Vue.computed, qV = window.Vue.nextTick, GV = window.Vue.onMounted, ca = window.Vue.ref, fd = window.Vue.watch, WV = window.Vuex.useStore, XV = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ca(!1), n = ca(!1), o = ca("100%"), s = WV(), {
      currentSourcePage: a,
      currentTargetPage: i,
      currentSourceSection: c,
      selectedContentTranslationUnit: l,
      currentMTProvider: d,
      sourceLanguage: r,
      targetLanguage: u
    } = F(s), g = An(
      () => s.state.application.translationDataLoadingCounter === 0
    ), m = An(
      () => {
        var ee;
        return (ee = c.value) == null ? void 0 : ee.isSelectedTranslationUnitTranslated;
      }
    ), p = An(() => {
      var ee;
      return (ee = c.value) == null ? void 0 : ee.subSections;
    }), h = An(
      () => {
        var ee;
        return (ee = c.value) == null ? void 0 : ee.selectedTranslationUnitOriginalContent;
      }
    ), w = An(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), f = nt(), v = EV();
    LV()();
    const k = MV();
    GV(() => {
      fd(
        g,
        () => C(this, null, function* () {
          g.value && (yield qV(), v(), k());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), fd(l, k);
    const M = () => s.dispatch("application/selectNextTranslationUnit"), L = () => s.dispatch("application/selectPreviousTranslationUnit"), R = () => {
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
    }, B = me(), De = () => {
      const { autoSavePending: ee } = s.state.application;
      if (ee) {
        Me.value = !0;
        return;
      }
      Z();
    }, { fetchTranslationsByStatus: J } = Va(), Z = () => C(this, null, function* () {
      J("draft"), un(null), s.dispatch("application/clearPendingSaveTranslationRequests"), yield B.push({ name: "dashboard" }), c.value.reset(), s.commit("application/setCurrentSourceSection", null), s.commit("application/setCurrentSectionSuggestion", null);
      const { currentTranslation: ee } = s.state.application;
      ee && (s.commit("application/setCurrentTranslationRestored", !1), s.commit("application/setCurrentTranslation", null));
    }), pe = () => {
      Xe.value || (t.value = !0, s.dispatch("application/translateSelectedTranslationUnitForAllProviders"));
    }, fe = (ee, re) => {
      var Ee;
      B.push({
        name: "sx-editor",
        state: {
          content: ee,
          originalContent: h.value,
          title: ((Ee = i.value) == null ? void 0 : Ee.title) || a.value.title,
          isInitialEdit: re || null
        }
      });
    }, Wt = () => B.push({ name: "sx-publisher" }), dn = () => C(this, null, function* () {
      l.value ? yield s.dispatch("application/translateTranslationUnitById", {
        id: l.value.id,
        provider: d.value
      }) : yield s.dispatch("application/translateTranslationUnitById", {
        id: 0,
        provider: d.value
      });
    }), Xe = An(
      () => l.value instanceof Ve
    ), Me = ca(!1);
    return (ee, re) => {
      const Ee = NV("i18n");
      return Nt(), wd("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: OV(w.value)
      }, [
        Re(de(T), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: nn(() => [
            Re(de(y), { shrink: "" }, {
              default: nn(() => [
                Re(de(P), {
                  class: "px-3",
                  type: "icon",
                  icon: de(jr),
                  onClick: De
                }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Re(de(y), {
              grow: "",
              class: "px-1"
            }, {
              default: nn(() => [
                IV(hd("h4", jV, null, 512), [
                  [Ee, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Re(de(y), {
              shrink: "",
              class: "px-3"
            }, {
              default: nn(() => [
                Re(de(P), {
                  label: ee.$i18n("cx-sx-sentence-selector-done-button-label"),
                  disabled: !(de(c) && de(c).isTranslated),
                  onClick: Wt
                }, null, 8, ["label", "disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        g.value ? (Nt(), $n(de(T), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: nn(() => [
            Re(de(y), {
              dir: de(j.getDir)(de(r)),
              lang: de(r),
              class: "sx-sentence-selector__section"
            }, {
              default: nn(() => [
                Re(S4),
                hd("div", HV, [
                  (Nt(!0), wd(zV, null, UV(p.value, (te) => (Nt(), $n(L3, {
                    id: te.id,
                    key: `sub-section-${te.id}`,
                    "sub-section": te,
                    onBounceTranslation: A
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Xe.value && m.value ? (Nt(), $n(AV, {
              key: 0,
              onEditTranslation: re[0] || (re[0] = (te) => fe(te, !1)),
              onSkipTranslation: M,
              onSelectPreviousSegment: L
            })) : Xe.value ? (Nt(), $n(nV, {
              key: 2,
              onEditTranslation: fe,
              onApplyTranslation: R,
              onSkipTranslation: M,
              onSelectPreviousSegment: L
            })) : (Nt(), $n(v3, {
              key: 1,
              class: RV({ "mb-0": !n.value }),
              onConfigureOptions: pe,
              onEditTranslation: re[1] || (re[1] = (te) => fe(te, !0)),
              onApplyTranslation: R,
              onSkipTranslation: M,
              onSelectPreviousSegment: L,
              onRetryTranslation: dn
            }, null, 8, ["class"]))
          ]),
          _: 1
        })) : (Nt(), $n(de(T), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: nn(() => [
            Re(de(je), { class: "mt-0" })
          ]),
          _: 1
        })),
        Re(r4, {
          active: t.value,
          "onUpdate:active": re[2] || (re[2] = (te) => t.value = te)
        }, null, 8, ["active"]),
        Re(Ux, {
          modelValue: Me.value,
          "onUpdate:modelValue": re[3] || (re[3] = (te) => Me.value = te),
          onDiscardTranslation: Z
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const KV = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: XV
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, YV = window.Vue.resolveComponent, QV = window.Vue.createVNode, JV = window.Vue.normalizeClass, ZV = window.Vue.openBlock, e$ = window.Vue.createElementBlock;
function t$(e, t, n, o, s, a) {
  const i = YV("sx-sentence-selector");
  return ZV(), e$("main", {
    class: JV(["sx-sentence-selector-view", a.classes])
  }, [
    QV(i)
  ], 2);
}
const n$ = /* @__PURE__ */ D(KV, [["render", t$]]), o$ = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, s$ = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const a$ = window.Vue.resolveDirective, la = window.Vue.withDirectives, Oe = window.Vue.openBlock, ht = window.Vue.createElementBlock, ua = window.Vue.createCommentVNode, da = window.Vue.Transition, wo = window.Vue.withCtx, fo = window.Vue.createVNode, _o = window.Vue.createElementVNode, Dn = window.Vue.unref, i$ = window.Vue.renderList, r$ = window.Vue.Fragment, c$ = window.Vue.normalizeClass, _d = window.Vue.createBlock, l$ = { class: "sx-quick-tutorial" }, u$ = { class: "sx-quick-tutorial__main-point py-9 px-6" }, d$ = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, g$ = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, m$ = { class: "sx-quick-tutorial__illustration" }, p$ = ["innerHTML"], h$ = ["innerHTML"], w$ = { class: "sx-quick-tutorial__step-indicator py-3" }, f$ = ["onClick"], _$ = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, v$ = {
  key: "secondary-point-1",
  class: "ma-0"
}, S$ = {
  key: "secondary-point-2",
  class: "ma-0"
}, y$ = { class: "sx-quick-tutorial__action-button pt-4 pb-6" }, vd = window.Vue.ref, C$ = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = vd(2), n = vd(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (c) => c === n.value, a = me(), i = () => a.push({ name: "sx-sentence-selector" });
    return (c, l) => {
      const d = a$("i18n");
      return Oe(), ht("section", l$, [
        fo(Dn(T), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: wo(() => [
            _o("section", u$, [
              fo(da, {
                name: "fade",
                mode: "out-in"
              }, {
                default: wo(() => [
                  s(1) ? la((Oe(), ht("h2", d$, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? la((Oe(), ht("h2", g$, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ua("", !0)
                ]),
                _: 1
              })
            ]),
            _o("section", m$, [
              fo(da, { name: "mw-ui-animation-slide-left" }, {
                default: wo(() => [
                  s(1) ? (Oe(), ht("div", {
                    key: "illustration-1",
                    innerHTML: Dn(s$)
                  }, null, 8, p$)) : s(2) ? (Oe(), ht("div", {
                    key: "illustration-2",
                    innerHTML: Dn(o$)
                  }, null, 8, h$)) : ua("", !0)
                ]),
                _: 1
              })
            ]),
            _o("div", w$, [
              (Oe(!0), ht(r$, null, i$(t.value, (r) => (Oe(), ht("span", {
                key: `dot-${r}`,
                class: c$(["dot mx-1", { "dot-active": s(r) }]),
                role: "button",
                onClick: (u) => n.value = r
              }, null, 10, f$))), 128))
            ]),
            _o("section", _$, [
              fo(da, {
                name: "fade",
                mode: "out-in"
              }, {
                default: wo(() => [
                  s(1) ? la((Oe(), ht("h3", v$, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? la((Oe(), ht("h3", S$, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ua("", !0)
                ]),
                _: 1
              })
            ]),
            _o("div", y$, [
              fo(da, {
                name: "fade",
                mode: "out-in"
              }, {
                default: wo(() => [
                  s(1) ? (Oe(), _d(Dn(P), {
                    key: "quick-tutorial-action-button-1",
                    class: "px-8 mx-4",
                    icon: Dn(ln),
                    progressive: !0,
                    onClick: o
                  }, null, 8, ["icon"])) : s(2) ? (Oe(), _d(Dn(P), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    label: c.$i18n("sx-quick-tutorial-translate-button-label"),
                    progressive: !0,
                    onClick: i
                  }, null, 8, ["label"])) : ua("", !0)
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
const k$ = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: C$
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, b$ = window.Vue.resolveComponent, x$ = window.Vue.createVNode, V$ = window.Vue.normalizeClass, $$ = window.Vue.openBlock, A$ = window.Vue.createElementBlock;
function D$(e, t, n, o, s, a) {
  const i = b$("sx-quick-tutorial");
  return $$(), A$("main", {
    class: V$(["sx-quick-tutorial-view", a.classes])
  }, [
    x$(i)
  ], 2);
}
const E$ = /* @__PURE__ */ D(k$, [["render", D$]]);
const Sd = window.Vue.ref, T$ = window.Vue.onMounted;
function L$(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = q.getPageUrl(t, o.title), o.target = "_blank";
}
const B$ = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: Rw },
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
    const t = Sd(null), n = Sd(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return T$(() => {
      n.value = 2 * o(), L$(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, P$ = window.Vue.resolveDirective, yd = window.Vue.createElementVNode, F$ = window.Vue.withDirectives, M$ = window.Vue.resolveComponent, N$ = window.Vue.withCtx, I$ = window.Vue.createVNode, U$ = window.Vue.openBlock, z$ = window.Vue.createElementBlock, R$ = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, O$ = { class: "sx-editor__original-content-panel__header mb-2" }, j$ = ["lang", "dir", "innerHTML"];
function H$(e, t, n, o, s, a) {
  const i = M$("mw-expandable-content"), c = P$("i18n");
  return U$(), z$("section", R$, [
    F$(yd("h5", O$, null, 512), [
      [c, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    I$(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: N$(() => [
        yd("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, j$)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const q$ = /* @__PURE__ */ D(B$, [["render", H$]]), G$ = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const cr = window.Vue.computed, W$ = window.Vuex.useStore, X$ = {
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
    const { targetLanguage: t } = F(W$()), n = cr(
      () => jt.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = cr(() => {
      const a = jt.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = cr(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: G$,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, vo = window.Vue.createElementVNode, Cd = window.Vue.resolveDirective, lr = window.Vue.withDirectives, K$ = window.Vue.normalizeClass, Y$ = window.Vue.openBlock, Q$ = window.Vue.createElementBlock, J$ = window.Vue.createCommentVNode, Z$ = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, eA = { class: "sx-editor__feedback-overlay-content px-4" }, tA = ["innerHTML"], nA = { class: "sx-editor__feedback-overlay-content__title" }, oA = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function sA(e, t, n, o, s, a) {
  const i = Cd("i18n"), c = Cd("i18n-html");
  return n.showFeedback ? (Y$(), Q$("div", Z$, [
    vo("div", eA, [
      vo("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, tA),
      lr(vo("h2", nA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      lr(vo("p", oA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      lr(vo("p", {
        class: K$(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [c, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : J$("", !0);
}
const aA = /* @__PURE__ */ D(X$, [["render", sA]]);
const ur = window.Vue.ref, iA = window.Vue.computed, rA = window.Vuex.useStore, cA = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: aA,
    MwRow: T,
    SxEditorOriginalContent: q$,
    VisualEditor: LS,
    MwSpinner: je
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = ur(!1), n = me(), o = rA(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: c, content: l, originalContent: d, title: r } = history.state, u = ur(null), g = ur(!1), m = nt(), { targetLanguage: p, sourceLanguage: h } = F(o), w = iA(
      () => jt.calculateScore(
        u.value,
        l,
        p.value
      )
    ), f = (v) => C(this, null, function* () {
      u.value = v, g.value = !0;
      const b = new Promise((M) => setTimeout(M, 2e3));
      let k = Promise.resolve();
      i ? o.commit(
        "application/setCurrentSourceSectionEditedTranslation",
        v
      ) : (w.value === 0 && c && m({
        event_type: "editor_segment_add",
        translation_source_language: h.value,
        translation_target_language: p.value
      }), k = o.dispatch(
        "application/applyEditedTranslationToSelectedTranslationUnit",
        v
      )), yield Promise.all([b, k]), g.value = !1, a();
    });
    return {
      closeEditor: a,
      content: l,
      editedTranslation: u,
      editorReady: t,
      getDir: j.getDir,
      sourceLanguage: h,
      targetLanguage: p,
      onEditorReady: s,
      onEditCompleted: f,
      originalContent: d,
      showFeedback: g,
      title: r
    };
  }
}, So = window.Vue.resolveComponent, dr = window.Vue.openBlock, gr = window.Vue.createBlock, kd = window.Vue.createCommentVNode, bd = window.Vue.createVNode, lA = window.Vue.createElementVNode, uA = window.Vue.withCtx, dA = { class: "sx-editor__editing-surface-container grow" };
function gA(e, t, n, o, s, a) {
  const i = So("sx-editor-original-content"), c = So("mw-spinner"), l = So("edit-complete-feedback"), d = So("visual-editor"), r = So("mw-row");
  return dr(), gr(r, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: uA(() => [
      o.originalContent ? (dr(), gr(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : kd("", !0),
      o.editorReady ? kd("", !0) : (dr(), gr(c, { key: 1 })),
      lA("div", dA, [
        bd(l, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        bd(d, {
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
const mA = /* @__PURE__ */ D(cA, [["render", gA]]);
const pA = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: mA
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
}, hA = window.Vue.resolveComponent, wA = window.Vue.createVNode, fA = window.Vue.normalizeClass, _A = window.Vue.openBlock, vA = window.Vue.createElementBlock;
function SA(e, t, n, o, s, a) {
  const i = hA("sx-editor");
  return _A(), vA("main", {
    class: fA(["sx-editor-view", a.classes])
  }, [
    wA(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const yA = /* @__PURE__ */ D(pA, [["render", SA]]);
const It = window.Vue.unref, yo = window.Vue.createVNode, mr = window.Vue.withCtx, CA = window.Vue.resolveDirective, kA = window.Vue.withDirectives, bA = window.Vue.openBlock, xA = window.Vue.createBlock, VA = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = me(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = CA("i18n");
      return bA(), xA(It(T), { class: "ma-0 sx-publisher__header" }, {
        default: mr(() => [
          yo(It(y), { shrink: "" }, {
            default: mr(() => [
              yo(It(P), {
                icon: It(Ge),
                type: "icon",
                onClick: n
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          kA(yo(It(y), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          yo(It(y), { shrink: "" }, {
            default: mr(() => [
              yo(It(P), {
                progressive: "",
                type: "button",
                icon: It(cn),
                disabled: e.isPublishingDisabled,
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, null, 8, ["icon", "disabled"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, $A = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, AA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, xd = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const DA = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: We, MwRow: T, MwCol: y },
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
        svg: $A,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: AA,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: xd,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: xd,
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
}, pr = window.Vue.createElementVNode, Vd = window.Vue.toDisplayString, hr = window.Vue.resolveComponent, wr = window.Vue.withCtx, $d = window.Vue.createVNode, EA = window.Vue.openBlock, TA = window.Vue.createBlock, LA = window.Vue.createCommentVNode, BA = ["innerHTML"], PA = ["textContent"], FA = ["textContent"];
function MA(e, t, n, o, s, a) {
  const i = hr("mw-col"), c = hr("mw-row"), l = hr("mw-dialog");
  return n.active ? (EA(), TA(l, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: wr(() => [
      $d(c, { class: "ma-4" }, {
        default: wr(() => [
          $d(i, null, {
            default: wr(() => [
              pr("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, BA),
              pr("h2", {
                textContent: Vd(a.animationTitle)
              }, null, 8, PA),
              pr("p", {
                class: "ma-0",
                textContent: Vd(a.animationSubtitle)
              }, null, 8, FA)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : LA("", !0);
}
const NA = /* @__PURE__ */ D(DA, [["render", MA]]);
const Te = window.Vue.unref, Ze = window.Vue.createVNode, on = window.Vue.withCtx, IA = window.Vue.resolveDirective, Ad = window.Vue.withDirectives, fr = window.Vue.openBlock, Dd = window.Vue.createElementBlock, UA = window.Vue.createCommentVNode, zA = window.Vue.toDisplayString, lm = window.Vue.createElementVNode, RA = window.Vue.createBlock, OA = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, jA = ["src"], HA = ["textContent"], qA = /* @__PURE__ */ lm("p", { class: "mt-0" }, null, -1), GA = window.Vue.computed, WA = window.Vue.inject, XA = window.Vue.ref, KA = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: ag,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = XA(""), s = () => n("close"), a = () => n("publish", o.value), i = WA("breakpoints"), c = GA(() => i.value.mobile);
    return (l, d) => {
      const r = IA("i18n");
      return e.active && e.captchaDetails ? (fr(), RA(Te(We), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: on(() => [
          Ze(Te(T), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: on(() => [
              Ze(Te(y), { shrink: "" }, {
                default: on(() => [
                  Ze(Te(P), {
                    class: "py-4 ps-6 pe-4",
                    type: "icon",
                    icon: Te(Ge),
                    onClick: s
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }),
              Ad(Ze(Te(y), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ze(Te(y), {
                shrink: "",
                class: "justify-center"
              }, {
                default: on(() => [
                  Ad(Ze(Te(P), {
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
          Ze(Te(No))
        ]),
        default: on(() => [
          lm("div", OA, [
            e.captchaDetails.type === "image" ? (fr(), Dd("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, jA)) : (fr(), Dd("p", {
              key: 1,
              textContent: zA(e.captchaDetails.question)
            }, null, 8, HA)),
            qA,
            Ze(Te(T), { class: "ma-0" }, {
              default: on(() => [
                Ze(Te(y), null, {
                  default: on(() => [
                    Ze(Te(Gr), {
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
      }, 8, ["fullscreen"])) : UA("", !0);
    };
  }
};
const En = window.Vue.unref, ga = window.Vue.createVNode, sn = window.Vue.createElementVNode, YA = window.Vue.resolveDirective, QA = window.Vue.withDirectives, JA = window.Vue.renderList, Ed = window.Vue.Fragment, _r = window.Vue.openBlock, Td = window.Vue.createElementBlock, ZA = window.Vue.toDisplayString, e5 = window.Vue.normalizeClass, vr = window.Vue.withCtx, t5 = window.Vue.createBlock, n5 = { class: "mw-ui-dialog__header" }, o5 = { class: "row ma-0 pa-4" }, s5 = { class: "col shrink justify-center" }, a5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, i5 = { class: "mb-0" }, r5 = { class: "pa-4" }, c5 = ["textContent"], l5 = window.Vuex.useStore, Co = window.Vue.computed, u5 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = l5(), s = Co(() => o.state.application.publishTarget), a = Co(() => o.state.translator.isAnon), i = Ae(), { currentSourceSection: c } = F(o), l = Co(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), d = Co(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = Co(() => [
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
      const w = YA("i18n");
      return _r(), t5(En(We), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: g
      }, {
        header: vr(() => [
          sn("div", n5, [
            sn("div", o5, [
              sn("div", s5, [
                ga(En(P), {
                  class: "pa-0",
                  type: "icon",
                  icon: En(jr),
                  onClick: g
                }, null, 8, ["icon"])
              ]),
              sn("div", a5, [
                QA(sn("h4", i5, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ga(En(No))
          ])
        ]),
        default: vr(() => [
          sn("div", r5, [
            ga(En(eg), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: vr(() => [
                (_r(!0), Td(Ed, null, JA(r.value, (f, v) => (_r(), Td(Ed, {
                  key: f.label
                }, [
                  ga(En(Sa), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  sn("p", {
                    class: e5(["complementary ms-7 mt-0", u(v)]),
                    textContent: ZA(f.details)
                  }, null, 10, c5)
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
const wt = window.Vue.unref, ko = window.Vue.createVNode, d5 = window.Vue.resolveDirective, Ld = window.Vue.withDirectives, ma = window.Vue.openBlock, Bd = window.Vue.createElementBlock, g5 = window.Vue.createCommentVNode, Pd = window.Vue.toDisplayString, Sr = window.Vue.createElementVNode, pa = window.Vue.withCtx, Fd = window.Vue.createBlock, m5 = window.Vue.Fragment, p5 = window.Vue.normalizeClass, h5 = { class: "sx-publisher__review-info__content" }, w5 = {
  key: 0,
  class: "complementary ma-0"
}, f5 = ["textContent"], _5 = ["textContent"], Ut = window.Vue.computed, Md = window.Vue.ref, v5 = window.Vue.watch, S5 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Md(0), o = Md(null);
    v5(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = Ut(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Ut(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Ut(() => {
      switch (a.value) {
        case "warning":
          return Ca;
        case "error":
          return gh;
        default:
          return Jd;
      }
    }), c = Ut(() => a.value === "default"), l = Ut(
      () => c.value ? "notice" : a.value
    ), d = Ut(
      () => `sx-publisher__review-info--${l.value}`
    ), r = Ae(), u = Ut(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Ut(
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
      const f = d5("i18n-html");
      return ma(), Fd(wt(Oh), {
        type: l.value,
        class: p5(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: c.value
      }, {
        icon: pa(() => [
          ko(wt(K), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start"
          }, null, 8, ["icon"])
        ]),
        default: pa(() => [
          Sr("div", h5, [
            a.value === "default" ? Ld((ma(), Bd("p", w5, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : (ma(), Bd(m5, { key: 1 }, [
              Sr("h5", {
                textContent: Pd(g.value)
              }, null, 8, f5),
              Sr("p", {
                textContent: Pd(u.value)
              }, null, 8, _5),
              ko(wt(T), {
                justify: "between",
                class: "ma-0"
              }, {
                default: pa(() => [
                  Ld(ko(wt(y), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (ma(), Fd(wt(y), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: pa(() => [
                      ko(wt(P), {
                        class: "pa-0 pe-1",
                        type: "icon",
                        icon: wt(Or),
                        onClick: m
                      }, null, 8, ["icon"]),
                      ko(wt(P), {
                        class: "pa-0 ps-1",
                        type: "icon",
                        icon: wt(ln),
                        onClick: p
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })) : g5("", !0)
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
}, y5 = window.Vue.computed, Tn = window.Vue.ref, C5 = window.Vue.watch, k5 = (e, t, n, o) => C(void 0, null, function* () {
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
      yield ka.addWikibaseLink(
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
}), b5 = (e) => {
  const t = Tn(!1), n = Tn("pending"), o = Tn(!1), s = Tn(!1), a = Tn(null), i = Tn([]), c = y5(
    () => i.value.some((u) => u.isError)
  );
  return C5(o, (u) => {
    u || (i.value = []);
  }), {
    captchaDetails: a,
    captchaDialogOn: s,
    configureTranslationOptions: () => o.value = !0,
    doPublish: (u = null) => C(void 0, null, function* () {
      var h;
      n.value = "pending", t.value = !0;
      let g;
      try {
        g = yield e.dispatch("translator/publishTranslation", {
          captchaId: (h = a.value) == null ? void 0 : h.id,
          captchaAnswer: u
        });
      } catch (w) {
        if (w instanceof Mn) {
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
        () => k5(
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
}, x5 = window.Vue.computed, V5 = window.Vuex.useStore, $5 = () => {
  const e = V5(), t = me(), {
    currentSourcePage: n,
    currentTargetPage: o,
    currentSourceSection: s
  } = F(e), a = x5(
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
const Q = window.Vue.unref, Le = window.Vue.createVNode, A5 = window.Vue.resolveDirective, bo = window.Vue.createElementVNode, D5 = window.Vue.withDirectives, ha = window.Vue.withCtx, E5 = window.Vue.isRef, T5 = window.Vue.openBlock, L5 = window.Vue.createElementBlock, B5 = { class: "sx-publisher" }, P5 = { class: "sx-publisher__publish-panel pa-4" }, F5 = { class: "mb-2" }, M5 = ["innerHTML"], N5 = { class: "sx-publisher__section-preview pa-5" }, I5 = ["innerHTML"], Nd = window.Vue.computed, U5 = window.Vue.onMounted, z5 = window.Vuex.useStore, R5 = {
  __name: "SXPublisher",
  setup(e) {
    const t = z5(), { currentSourceSection: n } = F(t), o = Nd(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.title;
    }), s = Ae(), a = Nd(() => t.getters["application/isSandboxTarget"] ? s.i18n(
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
    } = b5(t);
    U5(() => C(this, null, function* () {
      const f = yield t.dispatch("translator/validateMT");
      f && p.value.push(f);
    }));
    const w = $5();
    return (f, v) => {
      const b = A5("i18n");
      return T5(), L5("section", B5, [
        Le(VA, {
          "is-publishing-disabled": Q(u),
          onPublishTranslation: Q(d)
        }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
        bo("div", P5, [
          D5(bo("h5", F5, null, 512), [
            [b, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          bo("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, M5),
          Le(Q(T), {
            justify: "end",
            class: "ma-0"
          }, {
            default: ha(() => [
              Le(Q(y), { shrink: "" }, {
                default: ha(() => [
                  Le(Q(P), {
                    type: "icon",
                    icon: Q(dh),
                    class: "pa-0 mx-1",
                    onClick: Q(l)
                  }, null, 8, ["icon", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        Le(S5, { "publish-feedback-messages": Q(p) }, null, 8, ["publish-feedback-messages"]),
        bo("section", N5, [
          Le(Q(T), { class: "pb-5 ma-0" }, {
            default: ha(() => [
              Le(Q(y), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Le(Q(y), { shrink: "" }, {
                default: ha(() => [
                  Le(Q(P), {
                    icon: Q(Fn),
                    type: "icon",
                    onClick: Q(w)
                  }, null, 8, ["icon", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          bo("div", {
            innerHTML: Q(n).translationHtml
          }, null, 8, I5)
        ]),
        Le(u5, {
          active: Q(m),
          "onUpdate:active": v[0] || (v[0] = (k) => E5(m) ? m.value = k : null)
        }, null, 8, ["active"]),
        Le(KA, {
          active: Q(c),
          "captcha-details": Q(i),
          onClose: Q(g),
          onPublish: v[1] || (v[1] = (k) => Q(d)(k))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Le(NA, {
          active: Q(r),
          status: Q(h)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const O5 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: R5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, j5 = window.Vue.resolveComponent, H5 = window.Vue.createVNode, q5 = window.Vue.normalizeClass, G5 = window.Vue.openBlock, W5 = window.Vue.createElementBlock;
function X5(e, t, n, o, s, a) {
  const i = j5("sx-publisher");
  return G5(), W5("main", {
    class: q5(["sx-publisher-view", a.classes])
  }, [
    H5(i)
  ], 2);
}
const K5 = /* @__PURE__ */ D(O5, [["render", X5]]);
const Y5 = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: Wr, MwIcon: K, MwRow: T, MwCol: y },
  props: {
    suggestion: {
      type: Nn,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: ah, mwIconLanguage: Kd, mwIconArticle: qr, getDir: j.getDir };
  }
}, wa = window.Vue.resolveComponent, zt = window.Vue.createVNode, an = window.Vue.withCtx, yr = window.Vue.toDisplayString, Cr = window.Vue.createElementVNode, Q5 = window.Vue.openBlock, J5 = window.Vue.createBlock, Z5 = ["textContent"], eD = ["textContent"], tD = ["textContent"];
function nD(e, t, n, o, s, a) {
  const i = wa("mw-thumbnail"), c = wa("mw-col"), l = wa("mw-icon"), d = wa("mw-row");
  return Q5(), J5(d, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: an(() => [
      zt(c, { shrink: "" }, {
        default: an(() => [
          zt(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      zt(c, { class: "ms-4" }, {
        default: an(() => [
          zt(d, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: an(() => [
              zt(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: an(() => [
                  Cr("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: yr(n.suggestion.title)
                  }, null, 8, Z5)
                ]),
                _: 1
              }),
              zt(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: an(() => [
                  Cr("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: yr(n.suggestion.description)
                  }, null, 8, eD)
                ]),
                _: 1
              }),
              zt(c, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: an(() => [
                  zt(l, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  Cr("small", {
                    textContent: yr(n.suggestion.langLinksCount)
                  }, null, 8, tD)
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
const um = /* @__PURE__ */ D(Y5, [["render", nD]]), oD = window.Vue.computed, Id = window.Vue.ref, sD = window.Vue.watch, aD = (e, t) => {
  const o = Id([]), s = Id(!1), a = oD(
    () => o.value.slice(0, 4)
  ), i = Zr(() => C(void 0, null, function* () {
    try {
      o.value = yield zo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return sD(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const iD = window.Vue.computed, rD = window.Vuex.useStore, cD = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: um, MwCard: Fe, MwSpinner: je },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = F(
      rD()
    ), o = iD(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = aD(
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
}, kr = window.Vue.resolveComponent, xo = window.Vue.openBlock, br = window.Vue.createBlock, lD = window.Vue.createCommentVNode, uD = window.Vue.resolveDirective, dD = window.Vue.withDirectives, Ud = window.Vue.createElementBlock, gD = window.Vue.renderList, mD = window.Vue.Fragment, pD = window.Vue.withCtx, hD = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function wD(e, t, n, o, s, a) {
  const i = kr("mw-spinner"), c = kr("sx-search-article-suggestion"), l = kr("mw-card"), d = uD("i18n");
  return xo(), br(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: pD(() => [
      o.searchResultsLoading ? (xo(), br(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? dD((xo(), Ud("p", hD, null, 512)), [
        [d, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : lD("", !0),
      (xo(!0), Ud(mD, null, gD(o.searchResultsSlice, (r) => (xo(), br(c, {
        key: r.pageid,
        suggestion: r,
        onClick: (u) => e.$emit("suggestion-clicked", r)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const fD = /* @__PURE__ */ D(cD, [["render", wD]]);
const _D = window.Vuex.mapState, vD = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: um, MwCard: Fe },
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
  computed: ce({}, _D({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, SD = window.Vue.toDisplayString, yD = window.Vue.createElementVNode, CD = window.Vue.renderList, kD = window.Vue.Fragment, xr = window.Vue.openBlock, bD = window.Vue.createElementBlock, zd = window.Vue.resolveComponent, Rd = window.Vue.createBlock, Od = window.Vue.withCtx, xD = ["textContent"];
function VD(e, t, n, o, s, a) {
  const i = zd("sx-search-article-suggestion"), c = zd("mw-card");
  return xr(), Rd(c, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: Od(() => [
      yD("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: SD(n.cardTitle)
      }, null, 8, xD)
    ]),
    default: Od(() => [
      (xr(!0), bD(kD, null, CD(n.suggestions, (l) => (xr(), Rd(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (d) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const $D = /* @__PURE__ */ D(vD, [["render", VD]]), AD = window.Vue.computed, DD = (e, t) => AD(() => {
  const o = {
    value: "other",
    props: {
      icon: Zd,
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
      label: j.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), ED = window.Vue.computed, TD = (e, t, n) => ED(() => {
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
    (i) => i !== e.value && i !== t.value && j.getAutonym(i) !== i
  );
});
const Vo = window.Vue.ref, LD = window.Vue.onMounted, Vr = window.Vue.computed, jd = window.Vue.watch, BD = window.Vue.inject, PD = window.Vuex.useStore, FD = {
  name: "SxArticleSearch",
  components: {
    ArticleSuggestionsCard: $D,
    SearchResultsCard: fD,
    MwInput: Gr,
    MwDialog: We,
    MwLanguageSelector: tm,
    MwButtonGroup: Mo,
    MwRow: T,
    MwCol: y,
    MwButton: P
  },
  setup() {
    const e = Vo(""), t = Vo(!1), n = Vo(null), o = Vo(!1), s = Vo([]), a = PD(), { sourceLanguage: i, targetLanguage: c } = F(a), { supportedLanguageCodes: l } = Ho(), d = TD(
      i,
      c,
      s
    ), r = DD(
      i,
      d
    ), u = me(), { fetchAllTranslations: g } = Va();
    LD(() => C(this, null, function* () {
      var Z;
      yield Xg()(), g();
      try {
        s.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (pe) {
      }
      (Z = n.value) == null || Z.focus();
    }));
    const m = () => {
      u.push({ name: "dashboard" });
    }, p = Kg(), h = (J) => p(J, c.value), w = (J) => {
      if (J === "other") {
        o.value = !0;
        return;
      }
      h(J);
    };
    jd(i, () => a.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const f = nt();
    jd(e, () => {
      t.value || (t.value = !0, f({
        event_type: "dashboard_search",
        translation_source_language: i.value,
        translation_target_language: c.value
      }));
    });
    const v = () => {
      o.value = !1;
    }, b = (J) => {
      o.value = !1, s.value.push(J), w(J);
    }, k = Vr(
      () => a.getters["mediawiki/getRecentlyEditedPages"]
    ), M = Vr(
      () => a.getters["mediawiki/getNearbyPages"]
    ), L = BD("breakpoints"), R = Vr(() => L.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: A,
      startNearbySectionTranslation: B,
      startSearchResultSectionTranslation: De
    } = cc();
    return {
      supportedLanguageCodes: l,
      close: m,
      fullscreen: R,
      mwIconClose: Ge,
      mwIconSearch: Gd,
      nearbyPages: M,
      onSourceLanguageDialogClose: v,
      onSourceLanguageSelected: b,
      recentlyEditedPages: k,
      searchInput: e,
      searchInputRef: n,
      sourceLanguage: i,
      sourceLanguageOptions: r,
      sourceLanguageSelectOn: o,
      startNearbySectionTranslation: B,
      startRecentlyEditedSectionTranslation: A,
      startSearchResultSectionTranslation: De,
      suggestedSourceLanguages: d,
      updateSelection: w
    };
  }
}, MD = window.Vue.resolveDirective, ND = window.Vue.createElementVNode, $r = window.Vue.withDirectives, ft = window.Vue.resolveComponent, fa = window.Vue.withCtx, _t = window.Vue.createVNode, $o = window.Vue.openBlock, Hd = window.Vue.createBlock, ID = window.Vue.createCommentVNode, Ar = window.Vue.createElementBlock, UD = window.Vue.Fragment, zD = window.Vue.vShow, RD = { class: "sx-article-search" }, OD = { class: "mb-0" }, jD = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
};
function HD(e, t, n, o, s, a) {
  const i = ft("mw-col"), c = ft("mw-button"), l = ft("mw-row"), d = ft("mw-input"), r = ft("mw-button-group"), u = ft("article-suggestions-card"), g = ft("search-results-card"), m = ft("mw-language-selector"), p = ft("mw-dialog"), h = MD("i18n");
  return $o(), Ar("section", RD, [
    _t(l, {
      class: "sx-article-search__header ma-0 py-3",
      align: "stretch",
      justify: "start"
    }, {
      default: fa(() => [
        _t(i, {
          grow: "",
          class: "px-4",
          align: "center"
        }, {
          default: fa(() => [
            $r(ND("h5", OD, null, 512), [
              [h, void 0, "cx-sx-article-search-header"]
            ])
          ]),
          _: 1
        }),
        _t(i, {
          shrink: "",
          align: "start",
          class: "pe-4"
        }, {
          default: fa(() => [
            _t(c, {
              class: "pa-0",
              type: "icon",
              icon: o.mwIconClose,
              "icon-size": 20,
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    _t(d, {
      ref: "searchInputRef",
      value: o.searchInput,
      "onUpdate:value": t[0] || (t[0] = (w) => o.searchInput = w),
      "icon-size": 20,
      icon: o.mwIconSearch,
      placeholder: e.$i18n("cx-sx-article-search-input-placeholder"),
      type: "search"
    }, null, 8, ["value", "icon", "placeholder"]),
    _t(r, {
      class: "sx-article-search__language-button-group",
      items: o.sourceLanguageOptions,
      active: o.sourceLanguage,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"]),
    o.searchInput ? ID("", !0) : ($o(), Ar(UD, { key: 0 }, [
      o.recentlyEditedPages && o.recentlyEditedPages.length ? ($o(), Hd(u, {
        key: 0,
        "card-title": e.$i18n("cx-sx-article-search-recently-edited-title"),
        suggestions: o.recentlyEditedPages,
        onSuggestionClicked: o.startRecentlyEditedSectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : o.nearbyPages && o.nearbyPages.length ? ($o(), Hd(u, {
        key: 1,
        "card-title": e.$i18n("cx-sx-article-search-nearby-title"),
        suggestions: o.nearbyPages,
        onSuggestionClicked: o.startNearbySectionTranslation
      }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : $r(($o(), Ar("p", jD, null, 512)), [
        [h, void 0, "cx-sx-article-search-no-suggestions-message"]
      ])
    ], 64)),
    $r(_t(g, {
      "search-input": o.searchInput,
      onSuggestionClicked: o.startSearchResultSectionTranslation
    }, null, 8, ["search-input", "onSuggestionClicked"]), [
      [zD, !!o.searchInput]
    ]),
    _t(p, {
      value: o.sourceLanguageSelectOn,
      "onUpdate:value": t[1] || (t[1] = (w) => o.sourceLanguageSelectOn = w),
      class: "sx-article-search-language-selector",
      animation: "slide-up",
      fullscreen: o.fullscreen,
      header: o.fullscreen,
      "overlay-opacity": 0,
      title: e.$i18n("sx-article-search-language-selector-dialog-title"),
      onClose: o.onSourceLanguageDialogClose
    }, {
      default: fa(() => [
        _t(m, {
          class: "sx-article-search-language-selector__widget col-12",
          languages: o.supportedLanguageCodes,
          suggestions: o.suggestedSourceLanguages,
          placeholder: e.$i18n("cx-sx-language-selector-placeholder"),
          onSelect: o.onSourceLanguageSelected,
          onClose: o.onSourceLanguageDialogClose
        }, null, 8, ["languages", "suggestions", "placeholder", "onSelect", "onClose"])
      ]),
      _: 1
    }, 8, ["value", "fullscreen", "header", "title", "onClose"])
  ]);
}
const qD = /* @__PURE__ */ D(FD, [["render", HD]]);
const GD = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: qD
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, WD = window.Vue.resolveComponent, XD = window.Vue.createVNode, KD = window.Vue.normalizeClass, YD = window.Vue.openBlock, QD = window.Vue.createElementBlock;
function JD(e, t, n, o, s, a) {
  const i = WD("sx-article-search");
  return YD(), QD("main", {
    class: KD(["sx-article-search-view", a.classes])
  }, [
    XD(i)
  ], 2);
}
const ZD = /* @__PURE__ */ D(GD, [["render", JD]]), eE = window.Vuex.useStore, dm = [
  {
    path: "",
    name: "dashboard",
    component: uu,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: ZD,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: Ob,
    props: (e) => ({
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: o2,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: Tx,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: E$,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: n$,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: yA,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: K5,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: uu,
    meta: { workflowStep: 0 }
  }
], gc = ev({
  history: Z_(),
  routes: dm
});
gc.beforeEach((e, t, n) => {
  const o = eE();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || og.assertUser().catch((c) => {
    c instanceof Mn && o.commit("application/setIsLoginDialogOn", !0);
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
    const c = Math.ceil(a) - 1, l = dm.find(
      (d) => d.meta.workflowStep === c
    );
    n({ name: l.name });
    return;
  }
  n();
});
gc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const tE = window.Vue.createApp, nE = mw.config.get("wgUserLanguage"), oE = "en", sE = mw.messages.values || {}, Gt = tE(f0);
Gt.config.globalProperties.$incompleteVersion = !0;
const aE = dS();
Gt.use(aE);
Gt.use(gc);
Gt.use(wg);
Gt.use(Qw);
Gt.use(Yw);
const iE = kv({
  locale: nE,
  finalFallback: oE,
  messages: sE,
  wikilinks: !0
});
Gt.use(iE);
Gt.mount("#contenttranslation");
