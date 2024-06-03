/*@nomin*/
var wp = Object.defineProperty, fp = Object.defineProperties;
var _p = Object.getOwnPropertyDescriptors;
var Xc = Object.getOwnPropertySymbols;
var vp = Object.prototype.hasOwnProperty, Sp = Object.prototype.propertyIsEnumerable;
var Kc = (e, t, n) => t in e ? wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ye = (e, t) => {
  for (var n in t || (t = {}))
    vp.call(t, n) && Kc(e, n, t[n]);
  if (Xc)
    for (var n of Xc(t))
      Sp.call(t, n) && Kc(e, n, t[n]);
  return e;
}, Pe = (e, t) => fp(e, _p(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (l) => {
    try {
      c(n.next(l));
    } catch (g) {
      s(g);
    }
  }, i = (l) => {
    try {
      c(n.throw(l));
    } catch (g) {
      s(g);
    }
  }, c = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, i);
  c((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const { CdxButton: e, CdxIcon: t } = require("../codex.js");
  window.Codex = { CdxButton: e, CdxIcon: t };
}
const L = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, yp = {
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
}, Cp = window.Vue.toDisplayString, Ga = window.Vue.openBlock, Wa = window.Vue.createElementBlock, kp = window.Vue.createCommentVNode, Yc = window.Vue.createElementVNode, xp = window.Vue.normalizeClass, bp = ["width", "height", "aria-labelledby"], $p = ["id"], Vp = ["fill"], Ap = ["d"];
function Dp(e, t, n, o, s, a) {
  return Ga(), Wa("span", {
    class: xp(["mw-ui-icon notranslate", a.classes])
  }, [
    (Ga(), Wa("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Ga(), Wa("title", {
        key: 0,
        id: n.iconName
      }, Cp(n.iconName), 9, $p)) : kp("", !0),
      Yc("g", { fill: n.iconColor }, [
        Yc("path", { d: a.iconImagePath }, null, 8, Ap)
      ], 8, Vp)
    ], 8, bp))
  ], 2);
}
const Se = /* @__PURE__ */ L(yp, [["render", Dp]]);
const Ep = {
  name: "MwButton",
  components: {
    MwIcon: Se
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
}, Lp = window.Vue.renderSlot, Tp = window.Vue.resolveComponent, Qc = window.Vue.normalizeClass, _s = window.Vue.openBlock, Xa = window.Vue.createBlock, Ka = window.Vue.createCommentVNode, Bp = window.Vue.toDisplayString, Pp = window.Vue.createElementBlock, Fp = window.Vue.toHandlerKey, Mp = window.Vue.withModifiers, Np = window.Vue.mergeProps, Up = window.Vue.createElementVNode, Ip = window.Vue.resolveDynamicComponent, zp = window.Vue.withCtx, Rp = { class: "mw-ui-button__content" }, Op = ["textContent"];
function Hp(e, t, n, o, s, a) {
  const i = Tp("mw-icon");
  return _s(), Xa(Ip(a.component), {
    class: Qc(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: zp(() => [
      Lp(e.$slots, "default", {}, () => [
        Up("span", Rp, [
          n.icon ? (_s(), Xa(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Qc(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Ka("", !0),
          !a.isIcon && n.label ? (_s(), Pp("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Bp(n.label)
          }, null, 8, Op)) : Ka("", !0),
          n.indicator ? (_s(), Xa(i, Np({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Fp(a.indicatorClickEvent)]: t[0] || (t[0] = Mp((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Ka("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const be = /* @__PURE__ */ L(Ep, [["render", Hp]]);
const jp = {
  name: "MwButtonGroup",
  components: {
    MwButton: be
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
}, qp = window.Vue.renderList, Gp = window.Vue.Fragment, Ya = window.Vue.openBlock, Jc = window.Vue.createElementBlock, Wp = window.Vue.resolveComponent, Xp = window.Vue.withModifiers, Kp = window.Vue.mergeProps, Yp = window.Vue.createBlock, Qp = { class: "row mw-ui-button-group ma-0 pa-0" };
function Jp(e, t, n, o, s, a) {
  const i = Wp("mw-button");
  return Ya(), Jc("div", Qp, [
    (Ya(!0), Jc(Gp, null, qp(n.items, (c) => (Ya(), Yp(i, Kp({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: Xp((l) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Jo = /* @__PURE__ */ L(jp, [["render", Jp]]);
const Zp = {
  name: "MwUiBottomNavigation",
  components: { MwButtonGroup: Jo },
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
}, eh = window.Vue.renderSlot, th = window.Vue.resolveComponent, nh = window.Vue.createVNode, oh = window.Vue.createElementVNode, sh = window.Vue.openBlock, ah = window.Vue.createElementBlock, ih = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, rh = { class: "col-12 ma-0 pa-0" };
function ch(e, t, n, o, s, a) {
  const i = th("mw-button-group");
  return sh(), ah("footer", ih, [
    oh("div", rh, [
      eh(e.$slots, "default", {}, () => [
        nh(i, {
          class: "mw-ui-bottom-navigation__button-group justify-around",
          active: n.active,
          items: n.items,
          onSelect: t[0] || (t[0] = (c) => e.$emit("update:active", c))
        }, null, 8, ["active", "items"])
      ])
    ])
  ]);
}
const lh = /* @__PURE__ */ L(Zp, [["render", ch]]);
const uh = {
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
}, Zc = window.Vue.renderSlot, dh = window.Vue.toDisplayString, el = window.Vue.openBlock, tl = window.Vue.createElementBlock, gh = window.Vue.createCommentVNode, mh = window.Vue.createElementVNode, ph = { class: "mw-ui-card" }, hh = ["textContent"], wh = { class: "mw-ui-card__content" };
function fh(e, t, n, o, s, a) {
  return el(), tl("div", ph, [
    Zc(e.$slots, "header", {}, () => [
      n.title ? (el(), tl("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: dh(n.title)
      }, null, 8, hh)) : gh("", !0)
    ]),
    mh("div", wh, [
      Zc(e.$slots, "default")
    ])
  ]);
}
const Re = /* @__PURE__ */ L(uh, [["render", fh]]);
const _h = {}, vh = window.Vue.openBlock, Sh = window.Vue.createElementBlock, yh = { class: "mw-ui-divider row" };
function Ch(e, t) {
  return vh(), Sh("div", yh);
}
const Zo = /* @__PURE__ */ L(_h, [["render", Ch]]);
const kh = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, xh = window.Vue.renderSlot, bh = window.Vue.resolveDynamicComponent, $h = window.Vue.withCtx, Vh = window.Vue.openBlock, Ah = window.Vue.createBlock;
function Dh(e, t, n, o, s, a) {
  return Vh(), Ah(bh(n.tag), { class: "mw-grid container" }, {
    default: $h(() => [
      xh(e.$slots, "default")
    ]),
    _: 3
  });
}
const Eh = /* @__PURE__ */ L(kh, [["render", Dh]]), Lh = {
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
}, Th = window.Vue.renderSlot, Bh = window.Vue.resolveDynamicComponent, Ph = window.Vue.normalizeClass, Fh = window.Vue.withCtx, Mh = window.Vue.openBlock, Nh = window.Vue.createBlock;
function Uh(e, t, n, o, s, a) {
  return Mh(), Nh(Bh(n.tag), {
    class: Ph(a.classes)
  }, {
    default: Fh(() => [
      Th(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ L(Lh, [["render", Uh]]), Kr = ["mobile", "tablet", "desktop", "desktop-wide"], Ih = Kr.reduce(
  (e, t) => Pe(ye({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), zh = {
  name: "MwCol",
  props: Pe(ye({}, Ih), {
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
      for (let n = 0; n < Kr.length; n++) {
        let o = Kr[n], s = this.$props[o];
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
}, Rh = window.Vue.renderSlot, Oh = window.Vue.resolveDynamicComponent, Hh = window.Vue.normalizeClass, jh = window.Vue.withCtx, qh = window.Vue.openBlock, Gh = window.Vue.createBlock;
function Wh(e, t, n, o, s, a) {
  return qh(), Gh(Oh(n.tag), {
    class: Hh(a.classes)
  }, {
    default: jh(() => [
      Rh(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ L(zh, [["render", Wh]]), Xh = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Kh = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Yh = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", La = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Qh = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Jh = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Zh = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Mg = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Yr = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", lc = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Sn = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", ew = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", tw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", uc = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Ng = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", nw = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", ow = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", sw = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Ug = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Ig = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", aw = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", iw = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", rw = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", cw = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", lw = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, On = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, uw = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, dc = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, dw = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, gc = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", gw = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", pw = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", hw = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z";
const Qa = window.Vue.computed, ww = window.Vue.watch, fw = window.Vue.ref, _w = window.Vue.nextTick, vw = {
  name: "MwDialog",
  components: {
    MwButton: be,
    MwRow: P,
    MwCol: C,
    MwDivider: Zo
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
    const n = fw(null), o = Qa(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Qa(() => ({
      "background-color": e.overlayColor,
      opacity: e.overlayOpacity
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    ww(
      () => e.value,
      (l) => {
        l ? (i(), _w(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Qa(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayStyles: s,
      mwIconClose: Sn,
      root: n
    };
  }
}, nl = window.Vue.normalizeStyle, Ja = window.Vue.createElementVNode, Za = window.Vue.renderSlot, vs = window.Vue.resolveComponent, Zn = window.Vue.createVNode, ei = window.Vue.withCtx, ol = window.Vue.createCommentVNode, Sw = window.Vue.withKeys, yw = window.Vue.normalizeClass, sl = window.Vue.openBlock, Cw = window.Vue.createElementBlock, kw = window.Vue.Transition, xw = window.Vue.createBlock, bw = { class: "mw-ui-dialog__shell items-stretch" }, $w = { class: "mw-ui-dialog__body" };
function Vw(e, t, n, o, s, a) {
  const i = vs("mw-col"), c = vs("mw-button"), l = vs("mw-row"), g = vs("mw-divider");
  return sl(), xw(kw, {
    name: `mw-ui-animation-${n.animation}`,
    style: nl(o.cssVars)
  }, {
    default: ei(() => [
      n.value ? (sl(), Cw("div", {
        key: 0,
        ref: "root",
        class: yw(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Sw((r) => n.closeOnEscapeKey && o.close, ["esc"]))
      }, [
        Ja("div", {
          class: "mw-ui-dialog__overlay",
          style: nl(o.overlayStyles),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close)
        }, null, 4),
        Ja("div", bw, [
          n.header ? Za(e.$slots, "header", { key: 0 }, () => [
            Zn(l, { class: "mw-ui-dialog__header" }, {
              default: ei(() => [
                Zn(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Zn(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: ei(() => [
                    Zn(c, {
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
            Zn(g)
          ]) : ol("", !0),
          Ja("div", $w, [
            Za(e.$slots, "default")
          ]),
          Za(e.$slots, "footer")
        ])
      ], 34)) : ol("", !0)
    ]),
    _: 3
  }, 8, ["name", "style"]);
}
const ot = /* @__PURE__ */ L(vw, [["render", Vw]]);
const Aw = {
  name: "MwInput",
  components: {
    MwIcon: Se
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
      const t = ye({}, e.$attrs);
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
}, al = window.Vue.renderSlot, Dw = window.Vue.resolveComponent, Ss = window.Vue.openBlock, ti = window.Vue.createBlock, il = window.Vue.createCommentVNode, Ew = window.Vue.resolveDynamicComponent, Lw = window.Vue.toDisplayString, Tw = window.Vue.mergeProps, Bw = window.Vue.withModifiers, Pw = window.Vue.createElementVNode, Fw = window.Vue.normalizeClass, Mw = window.Vue.createElementBlock, Nw = { class: "mw-ui-input__content" };
function Uw(e, t, n, o, s, a) {
  const i = Dw("mw-icon");
  return Ss(), Mw("div", {
    class: Fw(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    Pw("div", Nw, [
      al(e.$slots, "icon", {}, () => [
        n.icon ? (Ss(), ti(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : il("", !0)
      ]),
      (Ss(), ti(Ew(n.type === "textarea" ? n.type : "input"), Tw({
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
        textContent: Lw(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      al(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ss(), ti(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Bw((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : il("", !0)
      ])
    ])
  ], 2);
}
const mc = /* @__PURE__ */ L(Aw, [["render", Uw]]);
const Iw = {
  name: "MwMessage",
  components: { MwCol: C, MwRow: P, MwIcon: Se, MwButton: be },
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
    mwIconClose: Sn,
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
      notice: lw,
      warning: dc,
      success: On,
      error: uw
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
}, ni = window.Vue.renderSlot, ys = window.Vue.resolveComponent, rl = window.Vue.createVNode, cl = window.Vue.withCtx, ll = window.Vue.openBlock, ul = window.Vue.createBlock, dl = window.Vue.createCommentVNode, zw = window.Vue.normalizeClass;
function Rw(e, t, n, o, s, a) {
  const i = ys("mw-icon"), c = ys("mw-col"), l = ys("mw-button"), g = ys("mw-row");
  return e.shown ? (ll(), ul(g, {
    key: 0,
    class: zw([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: cl(() => [
      ni(e.$slots, "icon", {}, () => [
        rl(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      rl(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: cl(() => [
          ni(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      ni(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (ll(), ul(l, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : dl("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : dl("", !0);
}
const Ow = /* @__PURE__ */ L(Iw, [["render", Rw]]);
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
const Hw = {}, jw = window.Vue.createElementVNode, qw = window.Vue.openBlock, Gw = window.Vue.createElementBlock, Ww = { class: "mw-ui-spinner" }, Xw = /* @__PURE__ */ jw("div", { class: "mw-ui-spinner__bounce" }, null, -1), Kw = [
  Xw
];
function Yw(e, t) {
  return qw(), Gw("div", Ww, Kw);
}
const tt = /* @__PURE__ */ L(Hw, [["render", Yw]]), ze = {
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
const Qw = window.Vue.computed, Jw = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Se },
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
      default: gc
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: ze.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: ze.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = Qw(() => {
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
}, gl = window.Vue.normalizeStyle, ml = window.Vue.openBlock, Zw = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const e0 = window.Vue.resolveComponent, t0 = window.Vue.createBlock;
function n0(e, t, n, o, s, a) {
  const i = e0("mw-ui-icon");
  return n.thumbnail ? (ml(), Zw("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: gl(o.style)
  }, null, 4)) : (ml(), t0(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: gl(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const pc = /* @__PURE__ */ L(Jw, [["render", n0]]);
const o0 = {
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
}, s0 = window.Vue.vModelRadio, Aa = window.Vue.createElementVNode, a0 = window.Vue.withDirectives, i0 = window.Vue.toDisplayString, r0 = window.Vue.resolveComponent, c0 = window.Vue.normalizeClass, l0 = window.Vue.withCtx, u0 = window.Vue.openBlock, d0 = window.Vue.createBlock, g0 = { class: "mw-ui-radio__controls" }, m0 = ["id", "disabled", "name", "value"], p0 = /* @__PURE__ */ Aa("span", { class: "mw-ui-radio__controls__icon" }, null, -1), h0 = ["for", "textContent"];
function w0(e, t, n, o, s, a) {
  const i = r0("mw-row");
  return u0(), d0(i, {
    class: c0(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: l0(() => [
      Aa("div", g0, [
        a0(Aa("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, m0), [
          [s0, a.inputModel]
        ]),
        p0
      ]),
      Aa("label", {
        for: n.id,
        class: "ps-2",
        textContent: i0(n.label)
      }, null, 8, h0)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Da = /* @__PURE__ */ L(o0, [["render", w0]]), pl = window.Vue.h, zg = {
  name: "MwRadioGroup",
  components: { MwRadio: Da },
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
      (o) => pl(Da, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), pl("div", { class: "mw-ui-radio-group" }, n);
  }
};
const f0 = {
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
}, hl = window.Vue.normalizeClass, wl = window.Vue.normalizeStyle, _0 = window.Vue.createElementVNode, v0 = window.Vue.openBlock, S0 = window.Vue.createElementBlock, y0 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function C0(e, t, n, o, s, a) {
  return v0(), S0("div", {
    class: hl(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: wl(a.containerStyles)
  }, [
    _0("div", {
      class: hl(["mw-progress-bar__bar", a.barClass]),
      style: wl(a.barStyles)
    }, null, 6)
  ], 14, y0);
}
const Rg = /* @__PURE__ */ L(f0, [["render", C0]]), k0 = (e, t, n, o) => (s) => {
  const a = s.clientY, i = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), c = (g) => {
    o.value = !1;
    let r = Math.min(
      i + g.clientY - a,
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
}, x0 = (e, t, n, o) => ({ initiateDrag: k0(
  e,
  t,
  n,
  o
) }), b0 = window.Vue.ref, fl = window.Vue.computed, $0 = (e, t, n, o) => {
  const s = b0(0), a = fl(
    () => t.value > e.value
  ), i = fl(
    () => t.value <= e.value * (s.value + 1)
  ), c = (g) => {
    s.value = g, n.value.scroll(0, e.value * s.value);
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
const Cs = window.Vue.ref, V0 = window.Vue.onMounted, _l = window.Vue.computed, A0 = window.Vue.nextTick, D0 = {
  name: "MwExpandableContent",
  components: {
    MwButton: be
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
    const t = Cs(!0), n = Cs(null), o = _l(
      () => Math.min(e.minHeight, s.value)
    ), s = Cs(1), { initiateDrag: a } = x0(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: c,
      scrollIndex: l,
      scrollToStepByIndex: g,
      handleArrowUpClick: r
    } = $0(o, s, n, t), u = () => g(l.value + 1), d = Cs(null), m = _l(() => ({
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
    return V0(() => b(this, null, function* () {
      var w;
      yield A0(), s.value = n.value.scrollHeight, (w = d.value) == null || w.addEventListener(
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
      mwIconCollapse: dw,
      mwIconExpand: Yr,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: l,
      scrollToNextStep: u
    };
  }
}, E0 = window.Vue.renderSlot, L0 = window.Vue.normalizeClass, ks = window.Vue.createElementVNode, T0 = window.Vue.resolveComponent, B0 = window.Vue.createVNode, oi = window.Vue.openBlock, P0 = window.Vue.createBlock, vl = window.Vue.createCommentVNode, Sl = window.Vue.createElementBlock, F0 = window.Vue.normalizeStyle, M0 = { class: "mw-ui-expandable-content__container" }, N0 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, U0 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function I0(e, t, n, o, s, a) {
  const i = T0("mw-button");
  return oi(), Sl("div", {
    class: "mw-ui-expandable-content",
    style: F0(o.cssVars)
  }, [
    ks("div", M0, [
      ks("div", {
        ref: "contentRef",
        class: L0(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        E0(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (oi(), Sl("div", N0, [
        B0(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (oi(), P0(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : vl("", !0)
      ])) : vl("", !0)
    ]),
    ks("div", U0, [
      ks("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const z0 = /* @__PURE__ */ L(D0, [["render", I0]]);
const xs = window.Vue.computed, R0 = {
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
      default: ze.blue600
    },
    inactiveColor: {
      type: String,
      default: ze.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = xs(() => e.size / 2 * 0.9), n = xs(() => Math.PI * (t.value * 2)), o = xs(
      () => (100 - e.percentage) / 100 * n.value
    ), s = xs(() => ({
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
}, yl = window.Vue.createElementVNode, Cl = window.Vue.normalizeStyle, O0 = window.Vue.openBlock, H0 = window.Vue.createElementBlock, j0 = ["width", "height", "viewport"], q0 = ["r", "cx", "cy", "stroke-dasharray"], G0 = ["r", "cx", "cy", "stroke-dasharray"];
function W0(e, t, n, o, s, a) {
  return O0(), H0("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Cl(o.cssVars)
  }, [
    yl("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, q0),
    yl("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Cl({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, G0)
  ], 12, j0);
}
const Og = /* @__PURE__ */ L(R0, [["render", W0]]), X0 = window.Vue.ref, Tt = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Bt = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Tt.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Tt.tablet}px) and (max-width: ${Tt.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Tt.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Tt.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Tt.desktopwide - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Tt.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Tt["desktop-wide"]}px)`
}, si = {
  mobile: () => matchMedia(Bt.mobile).matches,
  tablet: () => matchMedia(Bt.tablet).matches,
  desktop: () => matchMedia(Bt.desktop).matches,
  desktopwide: () => matchMedia(Bt["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Bt["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Bt["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Bt["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Bt["desktop-and-down"]).matches
}, K0 = {
  install: (e) => {
    const t = () => {
      for (let o in si)
        si.hasOwnProperty(o) && (n.value[o] = si[o]());
    }, n = X0({});
    t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Pe(ye({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: n.value
    }), e.provide("breakpoints", n);
  }
}, Y0 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Pe(ye({}, e.config.globalProperties.$mwui || {}), {
      colors: ze
    }), e.provide("colors", ze);
  }
};
class Xn extends Error {
}
const Q0 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Xn();
}), Hg = { assertUser: Q0 };
const J0 = window.Vue.resolveDirective, eo = window.Vue.createElementVNode, kl = window.Vue.withDirectives, Z0 = window.Vue.toDisplayString, ef = window.Vue.unref, xl = window.Vue.withCtx, tf = window.Vue.openBlock, nf = window.Vue.createBlock, of = window.Vue.createCommentVNode, sf = { class: "pa-4 sx-login-dialog__header" }, af = { class: "sx-login-dialog__body px-6 pb-4" }, rf = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, cf = ["href"], lf = window.Vue.computed, uf = window.Vue.ref, df = window.Vuex.useStore, gf = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = df(), n = lf(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = uf(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = J0("i18n");
      return n.value ? (tf(), nf(ef(ot), {
        key: 0,
        "overlay-opacity": 0.25,
        "overlay-color": "#000",
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: xl(() => [
          eo("div", sf, [
            kl(eo("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: xl(() => [
          kl(eo("div", af, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          eo("div", rf, [
            eo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, Z0(a.$i18n("cx-sx-login-dialog-button-label")), 9, cf)
          ])
        ]),
        _: 1
      })) : of("", !0);
    };
  }
}, q = new mw.cx.SiteMapper(), mf = mw.util.getUrl, pf = () => {
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
    pageRevision: c,
    status: l,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = c, this.status = l, this.targetTitle = g;
  }
}
const ai = "original", ii = "empty", hf = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class X {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      ai,
      ii
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return hf[t] || t;
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
    return ai;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return ii;
  }
  static isUserMTProvider(t) {
    return [ai, ii].includes(
      t
    );
  }
}
class Kt {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Pe(ye({}, a), {
      [X.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [X.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [X.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [X.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[X.ORIGINAL_TEXT_PROVIDER_KEY];
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
const bl = (e) => {
  var n;
  const t = Ea(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Ea = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, vn = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), jg = (e) => {
  const t = Ea(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = wf(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, wf = (e) => {
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
}, qg = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Gg = (e) => {
  const t = qg(e);
  return t == null ? void 0 : t.targetExists;
};
class ri {
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
let Ee = class {
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
      (a) => vn(a)
    );
    s && Gg(s) && (this.blockTemplateAdaptationInfo[t] = qg(s));
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
      (t) => vn(t)
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
    return this.isBlockTemplate ? bl(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => vn(o));
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
    return n && bl(n) || "";
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
      (a) => vn(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new ri({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new ri({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new ri({
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
    if (!t || X.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => vn(s)
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
const ff = [
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
], _f = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = $l(e, n), a = c = $l(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(l) {
    return a.indexOf(l) >= 0;
  }), o.length / s.length);
}, $l = function(e, t) {
  return e ? ff.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, vf = 95, Sf = 85, yf = [
  { status: "failure", value: 100 - vf },
  { status: "warning", value: 100 - Sf },
  { status: "success", value: 100 }
], Wg = (e, t, n) => {
  const o = Vl(e).textContent, s = Vl(t).textContent, a = 100 - 100 * _f(s, o, n);
  return Math.ceil(a);
}, Cf = (e) => yf.find((t) => e <= t.value).status, kf = (e, t) => Wg(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Vl = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Qt = { calculateScore: Wg, getScoreStatus: Cf, getMTScoreForPageSection: kf }, bs = "__LEAD_SECTION__";
class Qr {
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
      [X.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [X.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [X.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [X.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return bs;
  }
  static isSectionLead(t) {
    return !t || t === bs;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[X.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[X.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof Ee ? n.transclusionNode.outerHTML : n instanceof Kt ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof Ee ? t.blockTemplateSelected = !1 : t instanceof Kt && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof Ee ? n.blockTemplateSelected = !0 : n instanceof Kt && (n.selected = !0);
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
    if (o instanceof Ee)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Kt)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof Ee ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Kt ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof Ee ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Kt && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Qt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? bs : this.originalTitle;
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
    return this.isLeadSection ? bs : this.title;
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
class hc extends Ta {
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
      startTimestamp: c,
      lastUpdatedTimestamp: l,
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
    return Qr.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Qr.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const es = window.Vue.ref, ts = es(null), ns = es(null), Ba = es(null), Kn = es(null), Xg = es(null), xf = (e) => {
  const t = new URLSearchParams(location.search);
  t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), Ba.value = e == null ? void 0 : e.sourceTitle, ts.value = e == null ? void 0 : e.sourceLanguage, ns.value = e == null ? void 0 : e.targetLanguage, e instanceof hc && (t.set("draft", !0), Xg.value = !0, e.isLeadSectionTranslation || (t.set("section", e.sourceSectionTitle), Kn.value = e.sourceSectionTitle)), t.delete("title"), os(Object.fromEntries(t));
}, bf = (e) => {
  Kn.value = e, Kg("section", e);
}, os = (e) => {
  history.replaceState(
    {},
    document.title,
    mf("Special:ContentTranslation", e)
  );
}, $f = () => {
  const e = new URLSearchParams(location.search);
  Ba.value = e.get("page"), ts.value = e.get("from"), ns.value = e.get("to"), Kn.value = e.get("section");
}, Vf = () => {
  const e = new URLSearchParams(location.search);
  Kn.value = null, e.delete("section"), e.delete("title"), os(Object.fromEntries(e));
}, Kg = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set(e, t), n.delete("title"), os(Object.fromEntries(n));
}, Af = (e) => new URLSearchParams(location.search).get(e), Df = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), ts.value = e, ns.value = t, n.delete("title"), os(Object.fromEntries(n));
}, Ef = () => {
  ts.value = null, ns.value = null, Ba.value = null, Kn.value = null, os(null);
}, G = () => ({
  setLanguageURLParams: Df,
  setSectionURLParam: bf,
  setTranslationURLParams: xf,
  initializeURLState: $f,
  clearURLParameters: Ef,
  clearSectionURLParameter: Vf,
  setUrlParam: Kg,
  getUrlParam: Af,
  pageURLParameter: Ba,
  sourceLanguageURLParameter: ts,
  targetLanguageURLParameter: ns,
  sectionURLParameter: Kn,
  draftURLParameter: Xg
});
const Lf = window.Vue.resolveDynamicComponent, Al = window.Vue.openBlock, Dl = window.Vue.createBlock, Tf = window.Vue.Transition, to = window.Vue.withCtx, no = window.Vue.createVNode, Bf = window.Vue.resolveComponent, ci = window.Vue.unref, Pf = window.Vuex.useStore, Ff = window.Vue.computed, Mf = window.Vue.onMounted, Nf = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = G();
    t();
    const n = Pf(), o = Ff(
      () => n.state.application.autoSavePending
    );
    return Mf(() => {
      window.addEventListener("beforeunload", (s) => {
        o.value && (s.preventDefault(), s.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (s) => {
        document.visibilityState === "visible" && Hg.assertUser().then(() => n.commit("application/setIsLoginDialogOn", !1)).catch((a) => {
          a instanceof Xn && n.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (s, a) => {
      const i = Bf("router-view");
      return Al(), Dl(ci(Eh), { id: "contenttranslation" }, {
        default: to(() => [
          no(ci(P), { class: "cx-container" }, {
            default: to(() => [
              no(ci(C), { cols: "12" }, {
                default: to(() => [
                  no(i, null, {
                    default: to(({ Component: c, route: l }) => [
                      no(Tf, {
                        name: l.meta.transitionName
                      }, {
                        default: to(() => [
                          (Al(), Dl(Lf(c)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      no(gf)
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
}, Uf = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, If = {
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
class Yg {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Hn {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Yg(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const El = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Pe(ye({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class zf {
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
    const t = El((s = this.user) == null ? void 0 : s.content), n = El((a = this.mt) == null ? void 0 : a.content);
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
class Qg extends Ta {
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
      pageRevision: c,
      status: l,
      targetTitle: g
    }), this.targetUrl = r, this.sectionTranslations = u;
  }
}
const wc = mw.user.isAnon() ? void 0 : "user", Jg = (e) => {
  if (e === "assertuserfailed")
    throw new Xn();
};
function Zg(e, t = null) {
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
        (l) => new hc(Pe(ye({}, l), { status: e }))
      ) : i = a.map(
        (l) => new Qg(Pe(ye({}, l), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const l = yield Zg(
          e,
          s.continue.offset
        );
        i = i.concat(l);
      }
      return i;
    }));
  });
}
function Rf(e) {
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
      (a) => new zf(a)
    );
  });
}
function Of(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== X.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = q.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, l]) => {
      var r, u;
      if (!l) {
        const d = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(d);
      }
      return (u = (r = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : r.groups) == null ? void 0 : u.content;
    }).catch((c) => Promise.reject(c));
  });
}
const Hf = (e, t, n) => {
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
}, jf = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: c,
  captchaId: l,
  captchaWord: g,
  isSandbox: r,
  sectionTranslationId: u
}) => {
  const d = {
    assert: wc,
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
  return l && (d.captchaid = l, d.captchaword = g), new mw.Api().postWithToken("csrf", d).then((p) => {
    if (p = p.cxpublishsection, p.result === "error") {
      if (p.edit.captcha)
        return {
          publishFeedbackMessage: new Hn({
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
    Jg(p);
    let w;
    return h = h || {}, h.exception ? w = h.exception.message : h.error ? w = h.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Hn({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, qf = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: c,
  sectionId: l,
  isSandbox: g,
  progress: r
}) => {
  const u = {
    assert: wc,
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
    issandbox: g,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", u).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    Jg(m);
    let h;
    return p.exception ? h = p.exception.message : p.error ? h = p.error.info : h = "Unknown error", new Hn({ text: h, status: "error" });
  });
}, Gf = (e) => {
  const t = {
    assert: wc,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Wf = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Xf = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Kf = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), nt = {
  fetchTranslations: Zg,
  fetchTranslationUnits: Rf,
  fetchSegmentTranslation: Of,
  parseTemplateWikitext: Hf,
  publishTranslation: jf,
  saveTranslation: qf,
  deleteTranslation: Wf,
  fetchTranslatorStats: Kf,
  deleteCXTranslation: Xf,
  splitTranslation: Gf
};
function Yf(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield nt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Qf = {
  fetchTranslatorStats: Yf
}, Jf = {
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
}, Zf = {
  namespaced: !0,
  state: Uf,
  getters: If,
  actions: Qf,
  mutations: Jf
}, em = [
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
], e_ = [
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
], t_ = [
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
], n_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], o_ = [
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
], s_ = {
  en: em,
  es: e_,
  bn: t_,
  fr: n_,
  de: o_
}, a_ = {
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
  appendixSectionTitles: s_,
  /**
   * Maximum number of suggestions based on user's recently edited translations,
   * to be displayed inside "search for an article" view
   */
  maxRecentlyEditedSuggestions: 3
}, i_ = {
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
class fc {
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
class jn {
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
    sourceSections: c = [],
    targetSections: l = [],
    isListable: g = !0
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = c, this.targetSections = l, this.isListable = g;
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
class qn {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
const r_ = em;
function c_(e, t, n, o = 24) {
  return b(this, null, function* () {
    var r;
    let a = `/data/recommendation/article/creation/translation/${q.getWikiDomainCode(e)}`;
    n && (a += `/${n}`);
    const i = q.getRestbaseUrl(t, a), c = new URLSearchParams({ count: `${o}` }), l = yield fetch(`${i}?${c}`);
    if (!l.ok)
      throw new Error("Failed to load data from server");
    return (((r = yield l.json()) == null ? void 0 : r.items) || []).map(
      (u) => new fc({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.sitelink_count)
      })
    );
  });
}
function l_(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new jn(a) : null;
  });
}
function u_(e, t) {
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
function d_(e) {
  const t = r_.map((o) => encodeURIComponent(o)).join("|"), n = q.getCXServerUrl(
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
const g_ = (e, t, n) => {
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
}, m_ = (e) => {
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
}, p_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((c) => new qn(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, et = {
  fetchFavorites: p_,
  fetchPageSuggestions: c_,
  fetchSectionSuggestions: l_,
  fetchSuggestionSeeds: u_,
  fetchAppendixTargetSectionTitles: d_,
  markFavorite: g_,
  unmarkFavorite: m_
};
function h_(o, s) {
  return b(this, arguments, function* ({ getters: e, commit: t }, n) {
    if (e.appendixTitlesExistForLanguage(n))
      return;
    const a = yield et.fetchAppendixTargetSectionTitles(n);
    t("addAppendixSectionTitlesForLanguage", {
      language: n,
      titles: a
    });
  });
}
const w_ = {
  fetchAppendixSectionTitles: h_
}, f_ = {
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
}, __ = {
  namespaced: !0,
  state: a_,
  getters: i_,
  actions: w_,
  mutations: f_
}, v_ = {
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
}, S_ = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== X.EMPTY_TEXT_PROVIDER_KEY,
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
class Yn {
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
    thumbnail: g,
    title: r,
    _alias: u,
    content: d = null,
    sections: m = []
  } = {}) {
    this.language = i, this.title = r, this.pageId = a, this.description = t, this.image = s, this.pageprops = c, this.pageviews = l, this.thumbnail = g, this.langLinksCount = n, this.revision = o, this.alias = u, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = d, this.sections = m;
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
class y_ {
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
function C_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const k_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), C_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, x_ = (e, t) => {
  let n, o;
  return t ? (n = k_(e), o = n.$element.find(
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
}, b_ = (e, t) => {
  const n = Array.from(
    x_(e, t)
  );
  return $_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let c = "";
      const l = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : i.unshift(a);
      const g = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (u) => new Ee({
          sentences: V_(u),
          node: u
        })
      ), r = !c;
      return new Qr({ id: l, title: c, subSections: g, isLeadSection: r });
    }
  );
}, $_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, V_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Kt({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), tm = {
  convertSegmentedContentToPageSections: b_
}, _c = 120, A_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: _c,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, u) => Pe(ye({}, r), { [u.to]: u.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, u) => Pe(ye({}, r), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((r) => {
      const u = g[r.title] || c[r.title] || null;
      return new Yn(Pe(ye({}, r), { _alias: u }));
    });
  });
}, D_ = (e, t) => {
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
    var l, g;
    const a = s.query.pages;
    if (!a || !a.length || (l = a[0]) != null && l.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return c ? Object.freeze(new y_(c, i)) : null;
  }));
}, E_ = (e, t, n, o = null) => nm(
  e,
  t,
  n,
  o
).then(
  (s) => new Yn({
    sections: tm.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), nm = (e, t, n, o = null) => {
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
  return fetch(l).then((g) => g.json()).then((g) => g.segmentedContent);
}, L_ = (e) => b(void 0, null, function* () {
  const t = pf();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: _c,
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
  return yield q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Yn(s))).catch((o) => []);
}), T_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: _c,
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
      (a) => new Yn(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, ss = {
  fetchPages: A_,
  fetchLanguageTitles: D_,
  fetchPageContent: E_,
  fetchSegmentedContent: nm,
  fetchNearbyPages: L_,
  searchPagesByTitlePrefix: T_
};
function B_() {
  return q.getLanguagePairs().then((e) => e.sourceLanguages);
}
function P_(e, t) {
  return b(this, null, function* () {
    const n = q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new X(e, t, o.mt)
      )
    );
  });
}
function F_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function M_(e, t, n, o) {
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
    const g = {
      action: "tag",
      revid: c.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(i.postWithToken("csrf", g));
  });
}
const Pa = {
  fetchSupportedLanguageCodes: B_,
  fetchSupportedMTProviders: P_,
  fetchCXServerToken: F_,
  addWikibaseLink: M_
};
function N_({ getters: e, commit: t }, { language: n, titles: o }) {
  o = o.filter((i) => !e.getPage(n, i));
  const s = 50, a = [];
  for (let i = 0; i < o.length; i += s) {
    const c = o.slice(i, i + s), l = ss.fetchPages(n, c).then(
      (g) => g.forEach((r) => t("addPage", r))
    );
    a.push(l);
  }
  return Promise.all(a);
}
function U_(n) {
  return b(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield Pa.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function I_(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield ss.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const z_ = {
  fetchNearbyPages: I_,
  fetchPageMetadata: N_,
  fetchSupportedLanguageCodes: U_
}, R_ = {
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
}, O_ = {
  namespaced: !0,
  state: v_,
  getters: S_,
  actions: z_,
  mutations: R_
}, H_ = {
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
}, j_ = {
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
}, q_ = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => vn(a)
  );
  return s && Gg(s) ? nt.parseTemplateWikitext(
    jg(s),
    n,
    t
  ) : Promise.resolve(null);
}, om = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => vn(a)
  );
  return s ? nt.parseTemplateWikitext(
    jg(s),
    n,
    t
  ) : Promise.resolve(null);
}, G_ = (o) => b(void 0, [o], function* ({ dispatch: e, state: t, commit: n }) {
  var a, i;
  t.cxServerToken || (yield Pa.fetchCXServerToken().then(
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
}), W_ = { getCXServerToken: G_ }, X_ = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = X.getStorageKey(
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
}, K_ = {
  namespaced: !0,
  state: H_,
  getters: j_,
  actions: W_,
  mutations: X_
}, Y_ = window.Vuex.createStore, Q_ = Y_({
  modules: { translator: Zf, suggestions: __, mediawiki: O_, application: K_ }
});
function J_() {
  return sm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function sm() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Z_ = typeof Proxy == "function", e1 = "devtools-plugin:setup", t1 = "plugin:settings:set";
let Cn, Jr;
function n1() {
  var e;
  return Cn !== void 0 || (typeof window != "undefined" && window.performance ? (Cn = !0, Jr = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Cn = !0, Jr = global.perf_hooks.performance) : Cn = !1), Cn;
}
function o1() {
  return n1() ? Jr.now() : Date.now();
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
      }), this.fallbacks[c](...l)) : (...l) => new Promise((g) => {
        this.targetQueue.push({
          method: c,
          args: l,
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
function a1(e, t) {
  const n = e, o = sm(), s = J_(), a = Z_ && n.enableEarlyProxy;
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
const am = window.Vue.getCurrentInstance, Gn = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const lt = window.Vue.computed, Go = window.Vue.unref, i1 = window.Vue.watchEffect, im = window.Vue.defineComponent, r1 = window.Vue.reactive, rm = window.Vue.h, li = window.Vue.provide, c1 = window.Vue.ref, cm = window.Vue.watch, l1 = window.Vue.shallowRef, u1 = window.Vue.shallowReactive, d1 = window.Vue.nextTick, Dt = typeof window != "undefined";
function g1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const j = Object.assign;
function ui(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Le(s) ? s.map(e) : e(s);
  }
  return n;
}
const Wo = () => {
}, Le = Array.isArray;
function z(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const m1 = /\/$/, p1 = (e) => e.replace(m1, "");
function di(e, t, n = "/") {
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
function Ll(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Tl(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Jt(t.matched[o], n.matched[s]) && lm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Jt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function lm(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!w1(e[n], t[n]))
      return !1;
  return !0;
}
function w1(e, t) {
  return Le(e) ? Bl(e, t) : Le(t) ? Bl(t, e) : e === t;
}
function Bl(e, t) {
  return Le(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
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
var Ko;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ko || (Ko = {}));
var Xo;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Xo || (Xo = {}));
function _1(e) {
  if (!e)
    if (Dt) {
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
const Fa = () => ({
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
function Pl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Zr = /* @__PURE__ */ new Map();
function k1(e, t) {
  Zr.set(e, t);
}
function x1(e) {
  const t = Zr.get(e);
  return Zr.delete(e), t;
}
let b1 = () => location.protocol + "//" + location.host;
function um(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(c);
    return l[0] !== "/" && (l = "/" + l), Ll(l, "");
  }
  return Ll(n, e) + o + s;
}
function $1(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: d }) => {
    const m = um(e, location), p = n.value, h = t.value;
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
        type: Ko.pop,
        direction: w ? w > 0 ? Xo.forward : Xo.back : Xo.unknown
      });
    });
  };
  function l() {
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
    d.state && d.replaceState(j({}, d.state, { scroll: Fa() }), "");
  }
  function u() {
    for (const d of a)
      d();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", r, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: g,
    destroy: u
  };
}
function Fl(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Fa() : null
  };
}
function V1(e) {
  const { history: t, location: n } = window, o = {
    value: um(e, n)
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
  function a(l, g, r) {
    const u = e.indexOf("#"), d = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : b1() + e + l;
    try {
      t[r ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? z("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](d);
    }
  }
  function i(l, g) {
    const r = j({}, t.state, Fl(
      s.value.back,
      // keep back and forward entries but override current position
      l,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(l, r, !0), o.value = l;
  }
  function c(l, g) {
    const r = j(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: l,
        scroll: Fa()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && z(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const u = j({}, Fl(o.value, l, null), { position: r.position + 1 }, g);
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
function dm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Pt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, ec = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Ml;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ml || (Ml = {}));
const L1 = {
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
function Wn(e, t) {
  return {}.NODE_ENV !== "production" ? j(new Error(L1[e](t)), {
    type: e,
    [ec]: !0
  }, t) : j(new Error(), {
    type: e,
    [ec]: !0
  }, t);
}
function pt(e, t) {
  return e instanceof Error && ec in e && (t == null || !!(e.type & t));
}
const T1 = ["params", "query", "hash"];
function B1(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of T1)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Nl = "[^/]+?", P1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, F1 = /[.+*?^${}()[\]/\\]/g;
function M1(e, t) {
  const n = j({}, P1, t), o = [];
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
        u || (s += "/"), s += d.value.replace(F1, "\\$&"), m += 40;
      else if (d.type === 1) {
        const { value: p, repeatable: h, optional: w, regexp: f } = d;
        a.push({
          name: p,
          repeatable: h,
          optional: w
        });
        const v = f || Nl;
        if (v !== Nl) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (V) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + V.message);
          }
        }
        let S = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        u || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && g.length < 2 ? `(?:/${S})` : "/" + S), w && (S += "?"), s += S, m += 20, w && (m += -8), h && (m += -20), v === ".*" && (m += -50);
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
  function c(g) {
    const r = g.match(i), u = {};
    if (!r)
      return null;
    for (let d = 1; d < r.length; d++) {
      const m = r[d] || "", p = a[d - 1];
      u[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return u;
  }
  function l(g) {
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
          const v = Le(f) ? f.join("/") : f;
          if (!v)
            if (w)
              d.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : u = !0);
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
function U1(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = N1(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Ul(o))
      return 1;
    if (Ul(s))
      return -1;
  }
  return s.length - o.length;
}
function Ul(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const I1 = {
  type: 0,
  value: ""
}, z1 = /[a-zA-Z0-9_]/;
function R1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[I1]];
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
  let c = 0, l, g = "", r = "";
  function u() {
    g && (n === 0 ? a.push({
      type: 0,
      value: g
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: g,
      regexp: r,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), g = "");
  }
  function d() {
    g += l;
  }
  for (; c < e.length; ) {
    if (l = e[c++], l === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (g && u(), i()) : l === ":" ? (u(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        l === "(" ? n = 2 : z1.test(l) ? d() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), u(), i(), s;
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
  t = Rl({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, u, d) {
    const m = !d, p = j1(r);
    ({}).NODE_ENV !== "production" && X1(p, u), p.aliasOf = d && d.record;
    const h = Rl(t, r), w = [
      p
    ];
    if ("alias" in r) {
      const S = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const V of S)
        w.push(j({}, p, {
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
    let f, v;
    for (const S of w) {
      const { path: V } = S;
      if (u && V[0] !== "/") {
        const A = u.record.path, E = A[A.length - 1] === "/" ? "" : "/";
        S.path = u.record.path + (V && E + V);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (f = O1(S, u, h), {}.NODE_ENV !== "production" && u && V[0] === "/" && K1(f, u), d ? (d.alias.push(f), {}.NODE_ENV !== "production" && W1(d, f)) : (v = v || f, v !== f && v.alias.push(f), m && r.name && !zl(f) && i(r.name)), p.children) {
        const A = p.children;
        for (let E = 0; E < A.length; E++)
          a(A[E], f, d && d.children[E]);
      }
      d = d || f, (f.record.components && Object.keys(f.record.components).length || f.record.name || f.record.redirect) && l(f);
    }
    return v ? () => {
      i(v);
    } : Wo;
  }
  function i(r) {
    if (dm(r)) {
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
    for (; u < n.length && U1(r, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[u].record.path || !gm(r, n[u])); )
      u++;
    n.splice(u, 0, r), r.record.name && !zl(r) && o.set(r.record.name, r);
  }
  function g(r, u) {
    let d, m = {}, p, h;
    if ("name" in r && r.name) {
      if (d = o.get(r.name), !d)
        throw Wn(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(r.params || {}).filter((S) => !d.keys.find((V) => V.name === S));
        v.length && z(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = d.record.name, m = j(
        // paramsFromLocation is a new object
        Il(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && Il(r.params, d.keys.map((v) => v.name))
      ), p = d.stringify(m);
    } else if ("path" in r)
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && z(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((v) => v.re.test(p)), d && (m = d.parse(p), h = d.record.name);
    else {
      if (d = u.name ? o.get(u.name) : n.find((v) => v.re.test(u.path)), !d)
        throw Wn(1, {
          location: r,
          currentLocation: u
        });
      h = d.record.name, m = j({}, u.params, r.params), p = d.stringify(m);
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
      meta: G1(w)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: g, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function Il(e, t) {
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
function zl(e) {
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
function Rl(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function tc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function W1(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(tc.bind(null, n)))
      return z(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(tc.bind(null, n)))
      return z(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function X1(e, t) {
  t && t.record.name && !e.name && !e.path && z(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function K1(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(tc.bind(null, n)))
      return z(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function gm(e, t) {
  return t.children.some((n) => n === e || gm(e, n));
}
const mm = /#/g, Y1 = /&/g, Q1 = /\//g, J1 = /=/g, Z1 = /\?/g, pm = /\+/g, ev = /%5B/g, tv = /%5D/g, hm = /%5E/g, nv = /%60/g, wm = /%7B/g, ov = /%7C/g, fm = /%7D/g, sv = /%20/g;
function vc(e) {
  return encodeURI("" + e).replace(ov, "|").replace(ev, "[").replace(tv, "]");
}
function av(e) {
  return vc(e).replace(wm, "{").replace(fm, "}").replace(hm, "^");
}
function nc(e) {
  return vc(e).replace(pm, "%2B").replace(sv, "+").replace(mm, "%23").replace(Y1, "%26").replace(nv, "`").replace(wm, "{").replace(fm, "}").replace(hm, "^");
}
function iv(e) {
  return nc(e).replace(J1, "%3D");
}
function rv(e) {
  return vc(e).replace(mm, "%23").replace(Z1, "%3F");
}
function cv(e) {
  return e == null ? "" : rv(e).replace(Q1, "%2F");
}
function Yo(e) {
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
    const a = o[s].replace(pm, " "), i = a.indexOf("="), c = Yo(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : Yo(a.slice(i + 1));
    if (c in t) {
      let g = t[c];
      Le(g) || (g = t[c] = [g]), g.push(l);
    } else
      t[c] = l;
  }
  return t;
}
function Ol(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = iv(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Le(o) ? o.map((a) => a && nc(a)) : [o && nc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function uv(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Le(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const dv = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Hl = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ma = Symbol({}.NODE_ENV !== "production" ? "router" : ""), _m = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), oc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function oo() {
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
function Yt(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const l = (u) => {
      u === !1 ? c(Wn(4, {
        from: n,
        to: t
      })) : u instanceof Error ? c(u) : E1(u) ? c(Wn(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? gv(l, t, n) : l);
    let r = Promise.resolve(g);
    if (e.length < 3 && (r = r.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        r = r.then((d) => l._called ? d : (z(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !l._called) {
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
function gi(e, t, n, o) {
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
          const g = (c.__vccOpts || c)[t];
          g && s.push(Yt(g, n, o, a, i));
        } else {
          let l = c();
          ({}).NODE_ENV !== "production" && !("catch" in l) && (z(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = g1(g) ? g.default : g;
            a.components[i] = r;
            const d = (r.__vccOpts || r)[t];
            return d && Yt(d, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function mv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function jl(e) {
  const t = Gn(Ma), n = Gn(_m), o = lt(() => t.resolve(Go(e.to))), s = lt(() => {
    const { matched: l } = o.value, { length: g } = l, r = l[g - 1], u = n.matched;
    if (!r || !u.length)
      return -1;
    const d = u.findIndex(Jt.bind(null, r));
    if (d > -1)
      return d;
    const m = ql(l[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      ql(r) === m && // avoid comparing the child with its parent
      u[u.length - 1].path !== m ? u.findIndex(Jt.bind(null, l[g - 2])) : d
    );
  }), a = lt(() => s.value > -1 && fv(n.params, o.value.params)), i = lt(() => s.value > -1 && s.value === n.matched.length - 1 && lm(n.params, o.value.params));
  function c(l = {}) {
    return wv(l) ? t[Go(e.replace) ? "replace" : "push"](
      Go(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Wo) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Dt) {
    const l = am();
    if (l) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(g), i1(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: lt(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const pv = /* @__PURE__ */ im({
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
  useLink: jl,
  setup(e, { slots: t }) {
    const n = r1(jl(e)), { options: o } = Gn(Ma), s = lt(() => ({
      [Gl(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Gl(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : rm("a", {
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
    } else if (!Le(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function ql(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Gl = (e, t, n) => e != null ? e : t != null ? t : n, _v = /* @__PURE__ */ im({
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
    const o = Gn(oc), s = lt(() => e.route || o.value), a = Gn(Hl, 0), i = lt(() => {
      let g = Go(a);
      const { matched: r } = s.value;
      let u;
      for (; (u = r[g]) && !u.components; )
        g++;
      return g;
    }), c = lt(() => s.value.matched[i.value]);
    li(Hl, lt(() => i.value + 1)), li(dv, c), li(oc, s);
    const l = c1();
    return cm(() => [l.value, c.value, e.name], ([g, r, u], [d, m, p]) => {
      r && (r.instances[u] = g, m && m !== r && g && g === d && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !Jt(r, m) || !d) && (r.enterCallbacks[u] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, r = e.name, u = c.value, d = u && u.components[r];
      if (!d)
        return Wl(n.default, { Component: d, route: g });
      const m = u.props[r], p = m ? m === !0 ? g.params : typeof m == "function" ? m(g) : m : null, w = rm(d, j({}, p, t, {
        onVnodeUnmounted: (f) => {
          f.component.isUnmounted && (u.instances[r] = null);
        },
        ref: l
      }));
      if ({}.NODE_ENV !== "production" && Dt && w.ref) {
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
        Wl(n.default, { Component: w, route: g }) || w
      );
    };
  }
});
function Wl(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const vv = _v;
function Sv() {
  const e = am(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function so(e, t) {
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
function $s(e) {
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
        value: so(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const d = u.__vrv_devtools;
        r.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: vm
        });
      }
      Le(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((d) => {
        let m = Cm, p = "";
        d.isExactActive ? (m = ym, p = "This is exactly active") : d.isActive && (m = Sm, p = "This link is active"), r.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), cm(t.currentRoute, () => {
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
      const d = {
        guard: $s("beforeEach"),
        from: so(u, "Current Location during this navigation"),
        to: so(r, "Target location")
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
        guard: $s("afterEach")
      };
      d ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, m.status = $s("❌")) : m.status = $s("✅"), m.from = so(u, "Current Location during this navigation"), m.to = so(r, "Target location"), s.addTimelineEvent({
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
    const c = "router-inspector:" + o;
    s.addInspector({
      id: c,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function l() {
      if (!g)
        return;
      const r = g;
      let u = n.getRoutes().filter((d) => !d.parent);
      u.forEach(bm), r.filter && (u = u.filter((d) => (
        // save matches state based on the payload
        sc(d, r.filter.toLowerCase())
      ))), u.forEach((d) => xm(d, t.currentRoute.value)), r.rootNodes = u.map(km);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === c && l();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const d = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        d && (r.state = {
          options: xv(d)
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
const vm = 15485081, Sm = 2450411, ym = 8702998, bv = 2282478, Cm = 16486972, $v = 6710886;
function km(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: bv
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Cm
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: vm
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: ym
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Sm
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
    children: e.children.map(km)
  };
}
let Vv = 0;
const Av = /^\/(.*)\/([a-z]*)$/;
function xm(e, t) {
  const n = t.matched.length && Jt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Jt(o, e.record))), e.children.forEach((o) => xm(o, t));
}
function bm(e) {
  e.__vd_match = !1, e.children.forEach(bm);
}
function sc(e, t) {
  const n = String(e.re).match(Av);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => sc(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Yo(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => sc(i, t));
}
function Dv(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Ev(e) {
  const t = H1(e.routes, e), n = e.parseQuery || lv, o = e.stringifyQuery || Ol, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = oo(), i = oo(), c = oo(), l = l1(Pt);
  let g = Pt;
  Dt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = ui.bind(null, (_) => "" + _), u = ui.bind(null, cv), d = (
    // @ts-expect-error: intentionally avoid the type check
    ui.bind(null, Yo)
  );
  function m(_, x) {
    let k, T;
    return dm(_) ? (k = t.getRecordMatcher(_), T = x) : T = _, t.addRoute(T, k);
  }
  function p(_) {
    const x = t.getRecordMatcher(_);
    x ? t.removeRoute(x) : {}.NODE_ENV !== "production" && z(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function w(_) {
    return !!t.getRecordMatcher(_);
  }
  function f(_, x) {
    if (x = j({}, x || l.value), typeof _ == "string") {
      const N = di(n, _, x.path), K = t.resolve({ path: N.path }, x), Ge = s.createHref(N.fullPath);
      return {}.NODE_ENV !== "production" && (Ge.startsWith("//") ? z(`Location "${_}" resolved to "${Ge}". A resolved location cannot start with multiple slashes.`) : K.matched.length || z(`No match found for location with path "${_}"`)), j(N, K, {
        params: d(K.params),
        hash: Yo(N.hash),
        redirectedFrom: void 0,
        href: Ge
      });
    }
    let k;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && z(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), k = j({}, _, {
        path: di(n, _.path, x.path).path
      });
    else {
      const N = j({}, _.params);
      for (const K in N)
        N[K] == null && delete N[K];
      k = j({}, _, {
        params: u(N)
      }), x.params = u(x.params);
    }
    const T = t.resolve(k, x), R = _.hash || "";
    ({}).NODE_ENV !== "production" && R && !R.startsWith("#") && z(`A \`hash\` should always start with the character "#". Replace "${R}" with "#${R}".`), T.params = r(d(T.params));
    const ee = h1(o, j({}, _, {
      hash: av(R),
      path: T.path
    })), I = s.createHref(ee);
    return {}.NODE_ENV !== "production" && (I.startsWith("//") ? z(`Location "${_}" resolved to "${I}". A resolved location cannot start with multiple slashes.`) : T.matched.length || z(`No match found for location with path "${"path" in _ ? _.path : _}"`)), j({
      fullPath: ee,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: R,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Ol ? uv(_.query) : _.query || {}
      )
    }, T, {
      redirectedFrom: void 0,
      href: I
    });
  }
  function v(_) {
    return typeof _ == "string" ? di(n, _, l.value.path) : j({}, _);
  }
  function S(_, x) {
    if (g !== _)
      return Wn(8, {
        from: x,
        to: _
      });
  }
  function V(_) {
    return F(_);
  }
  function A(_) {
    return V(j(v(_), { replace: !0 }));
  }
  function E(_) {
    const x = _.matched[_.matched.length - 1];
    if (x && x.redirect) {
      const { redirect: k } = x;
      let T = typeof k == "function" ? k(_) : k;
      if (typeof T == "string" && (T = T.includes("?") || T.includes("#") ? T = v(T) : (
        // force empty params
        { path: T }
      ), T.params = {}), {}.NODE_ENV !== "production" && !("path" in T) && !("name" in T))
        throw z(`Invalid redirect found:
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
  function F(_, x) {
    const k = g = f(_), T = l.value, R = _.state, ee = _.force, I = _.replace === !0, N = E(k);
    if (N)
      return F(
        j(v(N), {
          state: typeof N == "object" ? j({}, R, N.state) : R,
          force: ee,
          replace: I
        }),
        // keep original redirectedFrom if it exists
        x || k
      );
    const K = k;
    K.redirectedFrom = x;
    let Ge;
    return !ee && Tl(o, T, k) && (Ge = Wn(16, { to: K, from: T }), qe(
      T,
      T,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ge ? Promise.resolve(Ge) : re(K, T)).catch((ge) => pt(ge) ? (
      // navigation redirects still mark the router as ready
      pt(
        ge,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ge : tn(ge)
    ) : (
      // reject any unknown error
      je(ge, K, T)
    )).then((ge) => {
      if (ge) {
        if (pt(
          ge,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Tl(o, f(ge.to), K) && // and we have done it a couple of times
          x && // @ts-expect-error: added only in dev
          (x._count = x._count ? (
            // @ts-expect-error
            x._count + 1
          ) : 1) > 30 ? (z(`Detected a possibly infinite redirection in a navigation guard when going from "${T.fullPath}" to "${K.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : F(
            // keep options
            j({
              // preserve an existing replacement but allow the redirect to override it
              replace: I
            }, v(ge.to), {
              state: typeof ge.to == "object" ? j({}, R, ge.to.state) : R,
              force: ee
            }),
            // preserve the original redirectedFrom if any
            x || K
          );
      } else
        ge = H(K, T, !0, I, R);
      return oe(K, T, ge), ge;
    });
  }
  function D(_, x) {
    const k = S(_, x);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function B(_) {
    const x = ce.values().next().value;
    return x && typeof x.runWithContext == "function" ? x.runWithContext(_) : _();
  }
  function re(_, x) {
    let k;
    const [T, R, ee] = Lv(_, x);
    k = gi(T.reverse(), "beforeRouteLeave", _, x);
    for (const N of T)
      N.leaveGuards.forEach((K) => {
        k.push(Yt(K, _, x));
      });
    const I = D.bind(null, _, x);
    return k.push(I), se(k).then(() => {
      k = [];
      for (const N of a.list())
        k.push(Yt(N, _, x));
      return k.push(I), se(k);
    }).then(() => {
      k = gi(R, "beforeRouteUpdate", _, x);
      for (const N of R)
        N.updateGuards.forEach((K) => {
          k.push(Yt(K, _, x));
        });
      return k.push(I), se(k);
    }).then(() => {
      k = [];
      for (const N of ee)
        if (N.beforeEnter)
          if (Le(N.beforeEnter))
            for (const K of N.beforeEnter)
              k.push(Yt(K, _, x));
          else
            k.push(Yt(N.beforeEnter, _, x));
      return k.push(I), se(k);
    }).then(() => (_.matched.forEach((N) => N.enterCallbacks = {}), k = gi(ee, "beforeRouteEnter", _, x), k.push(I), se(k))).then(() => {
      k = [];
      for (const N of i.list())
        k.push(Yt(N, _, x));
      return k.push(I), se(k);
    }).catch((N) => pt(
      N,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? N : Promise.reject(N));
  }
  function oe(_, x, k) {
    c.list().forEach((T) => B(() => T(_, x, k)));
  }
  function H(_, x, k, T, R) {
    const ee = S(_, x);
    if (ee)
      return ee;
    const I = x === Pt, N = Dt ? history.state : {};
    k && (T || I ? s.replace(_.fullPath, j({
      scroll: I && N && N.scroll
    }, R)) : s.push(_.fullPath, R)), l.value = _, qe(_, x, k, I), tn();
  }
  let Q;
  function de() {
    Q || (Q = s.listen((_, x, k) => {
      if (!nn.listening)
        return;
      const T = f(_), R = E(T);
      if (R) {
        F(j(R, { replace: !0 }), T).catch(Wo);
        return;
      }
      g = T;
      const ee = l.value;
      Dt && k1(Pl(ee.fullPath, k.delta), Fa()), re(T, ee).catch((I) => pt(
        I,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? I : pt(
        I,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (F(
        I.to,
        T
        // avoid an uncaught rejection, let push call triggerError
      ).then((N) => {
        pt(
          N,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !k.delta && k.type === Ko.pop && s.go(-1, !1);
      }).catch(Wo), Promise.reject()) : (k.delta && s.go(-k.delta, !1), je(I, T, ee))).then((I) => {
        I = I || H(
          // after navigation, all matched components are resolved
          T,
          ee,
          !1
        ), I && (k.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !pt(
          I,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-k.delta, !1) : k.type === Ko.pop && pt(
          I,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), oe(T, ee, I);
      }).catch(Wo);
    }));
  }
  let He = oo(), yn = oo(), Lt;
  function je(_, x, k) {
    tn(_);
    const T = yn.list();
    return T.length ? T.forEach((R) => R(_, x, k)) : ({}.NODE_ENV !== "production" && z("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function Jn() {
    return Lt && l.value !== Pt ? Promise.resolve() : new Promise((_, x) => {
      He.add([_, x]);
    });
  }
  function tn(_) {
    return Lt || (Lt = !_, de(), He.list().forEach(([x, k]) => _ ? k(_) : x()), He.reset()), _;
  }
  function qe(_, x, k, T) {
    const { scrollBehavior: R } = e;
    if (!Dt || !R)
      return Promise.resolve();
    const ee = !k && x1(Pl(_.fullPath, 0)) || (T || !k) && history.state && history.state.scroll || null;
    return d1().then(() => R(_, x, ee)).then((I) => I && C1(I)).catch((I) => je(I, _, x));
  }
  const Be = (_) => s.go(_);
  let J;
  const ce = /* @__PURE__ */ new Set(), nn = {
    currentRoute: l,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: w,
    getRoutes: h,
    resolve: f,
    options: e,
    push: V,
    replace: A,
    go: Be,
    back: () => Be(-1),
    forward: () => Be(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: yn.add,
    isReady: Jn,
    install(_) {
      const x = this;
      _.component("RouterLink", hv), _.component("RouterView", vv), _.config.globalProperties.$router = x, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Go(l)
      }), Dt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !J && l.value === Pt && (J = !0, V(s.location).catch((R) => {
        ({}).NODE_ENV !== "production" && z("Unexpected error when starting the router:", R);
      }));
      const k = {};
      for (const R in Pt)
        Object.defineProperty(k, R, {
          get: () => l.value[R],
          enumerable: !0
        });
      _.provide(Ma, x), _.provide(_m, u1(k)), _.provide(oc, l);
      const T = _.unmount;
      ce.add(_), _.unmount = function() {
        ce.delete(_), ce.size < 1 && (g = Pt, Q && Q(), Q = null, l.value = Pt, J = !1, Lt = !1), T();
      }, {}.NODE_ENV !== "production" && Dt && Cv(_, x, t);
    }
  };
  function se(_) {
    return _.reduce((x, k) => x.then(() => B(k)), Promise.resolve());
  }
  return nn;
}
function Lv(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((g) => Jt(g, c)) ? o.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((g) => Jt(g, l)) || s.push(l));
  }
  return [n, o, s];
}
function me() {
  return Gn(Ma);
}
const Tv = {
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
  languages: Tv,
  scriptgroups: Bv,
  rtlscripts: Pv,
  regiongroups: Fv,
  territories: Mv
};
var _e = Nv;
function as(e) {
  return !!_e.languages[e];
}
function Zt(e) {
  return as(e) && _e.languages[e].length === 1 ? _e.languages[e][0] : !1;
}
function Uv() {
  return _e.languages;
}
function is(e) {
  var t = Zt(e);
  return t ? is(t) : as(e) ? _e.languages[e][0] : "Zyyy";
}
function Sc(e) {
  var t = Zt(e);
  return t ? Sc(t) : as(e) && _e.languages[e][1] || "UNKNOWN";
}
function Qo(e) {
  var t = Zt(e);
  return t ? Qo(t) : as(e) && _e.languages[e][2] || e;
}
function Iv() {
  var e, t = {};
  for (e in _e.languages)
    Zt(e) || (t[e] = Qo(e));
  return t;
}
function $m(e) {
  var t, n, o = [];
  for (t in _e.languages)
    if (!Zt(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === is(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function zv(e) {
  return $m([e]);
}
function Vm(e) {
  var t;
  for (t in _e.scriptgroups)
    if (_e.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function yc(e) {
  return Vm(is(e));
}
function Am(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Zt(n) || n, a = yc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Dm(e) {
  var t, n, o, s = {};
  for (t in _e.languages)
    if (!Zt(t)) {
      for (n = 0; n < e.length; n++)
        if (Sc(t).includes(e[n])) {
          o = yc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Rv(e) {
  return Dm([e]);
}
function Ov(e) {
  var t, n, o, s = [];
  for (t = Am(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function Hv(e, t) {
  var n = Qo(e) || e, o = Qo(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Em(e) {
  return _e.rtlscripts.includes(is(e));
}
function jv(e) {
  return Em(e) ? "rtl" : "ltr";
}
function qv(e) {
  return _e.territories[e] || [];
}
function Gv(e, t) {
  t.target ? _e.languages[e] = [t.target] : _e.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: Gv,
  getAutonym: Qo,
  getAutonyms: Iv,
  getDir: jv,
  getGroupOfScript: Vm,
  getLanguages: Uv,
  getLanguagesByScriptGroup: Am,
  getLanguagesByScriptGroupInRegion: Rv,
  getLanguagesByScriptGroupInRegions: Dm,
  getLanguagesInScript: zv,
  getLanguagesInScripts: $m,
  getLanguagesInTerritory: qv,
  getRegions: Sc,
  getScript: is,
  getScriptGroupOfLanguage: yc,
  isKnown: as,
  isRedirect: Zt,
  isRtl: Em,
  sortByScriptGroup: Ov,
  sortByAutonym: Hv
};
const Wv = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, Xv = (e) => {
  const t = Wv(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
}, Kv = window.Vue.inject, Yv = window.Vue.reactive;
var Qv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Lm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Qv, function() {
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
    class c {
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
    class l {
      constructor(u, { wikilinks: d = !1 } = {}) {
        this.locale = u, this.wikilinks = d, this.emitter = new c(this.locale);
      }
      parse(u, d) {
        if (u.includes("{{") || u.includes("<") || this.wikilinks && u.includes("[")) {
          const m = function(p, { wikilinks: h = !1 } = {}) {
            let w = 0;
            function f(y) {
              return () => {
                for (let M = 0; M < y.length; M++) {
                  const Ce = y[M]();
                  if (Ce !== null)
                    return Ce;
                }
                return null;
              };
            }
            function v(y) {
              const M = w, Ce = [];
              for (let gt = 0; gt < y.length; gt++) {
                const mt = y[gt]();
                if (mt === null)
                  return w = M, null;
                Ce.push(mt);
              }
              return Ce;
            }
            function S(y, M) {
              return () => {
                const Ce = w, gt = [];
                let mt = M();
                for (; mt !== null; )
                  gt.push(mt), mt = M();
                return gt.length < y ? (w = Ce, null) : gt;
              };
            }
            function V(y) {
              const M = y.length;
              return () => {
                let Ce = null;
                return p.slice(w, w + M) === y && (Ce = y, w += M), Ce;
              };
            }
            function A(y) {
              return () => {
                const M = p.slice(w).match(y);
                return M === null ? null : (w += M[0].length, M[0]);
              };
            }
            const E = A(/^\s+/), F = V("|"), D = V(":"), B = V("\\"), re = A(/^./), oe = V("$"), H = A(/^\d+/), Q = V('"'), de = V("'"), He = A(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), yn = A(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Lt = f([je, A(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function je() {
              const y = v([B, re]);
              return y === null ? null : y[1];
            }
            const Jn = f([je, yn]), tn = f([je, He]);
            function qe() {
              const y = v([oe, H]);
              return y === null ? null : ["REPLACE", parseInt(y[1], 10) - 1];
            }
            const Be = (J = A(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), ce = function(y) {
              return y.toString();
            }, () => {
              const y = J();
              return y === null ? null : ce(y);
            });
            var J, ce;
            function nn() {
              const y = v([F, S(0, hs)]);
              if (y === null)
                return null;
              const M = y[1];
              return M.length > 1 ? ["CONCAT"].concat(M) : M[0];
            }
            function se() {
              const y = v([Be, D, qe]);
              return y === null ? null : [y[0], y[2]];
            }
            function _() {
              const y = v([Be, D, hs]);
              return y === null ? null : [y[0], y[2]];
            }
            function x() {
              const y = v([Be, D]);
              return y === null ? null : [y[0], ""];
            }
            const k = f([function() {
              const y = v([f([se, _, x]), S(0, nn)]);
              return y === null ? null : y[0].concat(y[1]);
            }, function() {
              const y = v([Be, S(0, nn)]);
              return y === null ? null : [y[0]].concat(y[1]);
            }]), T = V("{{"), R = V("}}"), ee = V("[["), I = V("]]"), N = V("["), K = V("]");
            function Ge() {
              const y = v([T, k, R]);
              return y === null ? null : y[1];
            }
            const ge = f([function() {
              const y = v([S(1, hs), F, S(1, ps)]);
              return y === null ? null : [["CONCAT"].concat(y[0]), ["CONCAT"].concat(y[2])];
            }, function() {
              const y = v([S(1, hs)]);
              return y === null ? null : [["CONCAT"].concat(y[0])];
            }]);
            function Rc() {
              let y = null;
              const M = v([ee, ge, I]);
              if (M !== null) {
                const Ce = M[1];
                y = ["WIKILINK"].concat(Ce);
              }
              return y;
            }
            function Oc() {
              let y = null;
              const M = v([N, S(1, up), E, S(1, ps), K]);
              return M !== null && (y = ["EXTLINK", M[1].length === 1 ? M[1][0] : ["CONCAT"].concat(M[1]), ["CONCAT"].concat(M[3])]), y;
            }
            const za = A(/^[A-Za-z]+/);
            function ip() {
              const y = A(/^[^"]*/), M = v([Q, y, Q]);
              return M === null ? null : M[1];
            }
            function rp() {
              const y = A(/^[^']*/), M = v([de, y, de]);
              return M === null ? null : M[1];
            }
            function cp() {
              const y = A(/^\s*=\s*/), M = v([E, za, y, f([ip, rp])]);
              return M === null ? null : [M[1], M[3]];
            }
            function lp() {
              const y = S(0, cp)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], y);
            }
            const up = f([Ge, qe, Rc, Oc, function() {
              const y = S(1, Lt)();
              return y === null ? null : y.join("");
            }]), ps = f([Ge, qe, Rc, Oc, function() {
              let y = null;
              const M = w, Ce = V("<"), gt = A(/^\/?/), mt = A(/^\s*>/), Ra = v([Ce, za, lp, gt, mt]);
              if (Ra === null)
                return null;
              const jc = w, qc = Ra[1], Oa = S(0, ps)(), dp = w, Gc = v([V("</"), za, mt]);
              if (Gc === null)
                return ["CONCAT", p.slice(M, jc)].concat(Oa);
              const gp = w, mp = Gc[1], Wc = Ra[2];
              if (function(on, ws, Ha, ja = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((on = on.toLowerCase()) !== (ws = ws.toLowerCase()) || ja.allowedHtmlElements.indexOf(on) === -1)
                  return !1;
                const pp = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let fs = 0, hp = Ha.length; fs < hp; fs += 2) {
                  const qa = Ha[fs];
                  if (ja.allowedHtmlCommonAttributes.indexOf(qa) === -1 && (ja.allowedHtmlAttributesByElement[on] || []).indexOf(qa) === -1 || qa === "style" && Ha[fs + 1].search(pp) !== -1)
                    return !1;
                }
                return !0;
              }(qc, mp, Wc.slice(1)))
                y = ["HTMLELEMENT", qc, Wc].concat(Oa);
              else {
                const on = (ws) => ws.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                y = ["CONCAT", on(p.slice(M, jc))].concat(Oa, on(p.slice(dp, gp)));
              }
              return y;
            }, function() {
              const y = S(1, tn)();
              return y === null ? null : y.join("");
            }]), hs = f([Ge, qe, function() {
              const y = S(1, Jn)();
              return y === null ? null : y.join("");
            }]), Hc = function() {
              const y = S(0, ps)();
              return y === null ? null : ["CONCAT"].concat(y);
            }();
            if (Hc === null || w !== p.length)
              throw new Error("Parse error at position " + w.toString() + " in input: " + p);
            return Hc;
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
        this.locale = r, this.parser = new l(this.locale, { wikilinks: m }), this.messageStore = new g(), d && this.load(d, this.locale), this.finalFallback = u, this.wikilinks = m;
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
        c.prototype[r] = u;
      }
    };
  });
})(Lm);
var Jv = Lm.exports;
const Xl = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Tm = Symbol("banana-context");
function Te() {
  const e = Kv(Tm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Zv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Yv(new Jv(e.locale, e));
  return {
    install: (n) => {
      n.provide(Tm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Xl(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Xl(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const eS = window.Vuex.useStore, tS = window.Vue.computed, nS = {
  name: "CxTranslationWork",
  components: { MwRow: P, MwCol: C, MwThumbnail: pc, MwIcon: Se },
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
    const t = eS(), n = (a, i) => {
      const c = t.getters["mediawiki/getPage"](a, i);
      return c == null ? void 0 : c.thumbnail;
    }, o = Te();
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
      mwIconArrowForward: lc,
      mwIconArrowNext: uc
    };
  }
}, Vs = window.Vue.resolveComponent, kn = window.Vue.createVNode, ht = window.Vue.createElementVNode, Kl = window.Vue.renderSlot, Yl = window.Vue.withModifiers, mi = window.Vue.toDisplayString, pi = window.Vue.withCtx, oS = window.Vue.openBlock, sS = window.Vue.createElementBlock, aS = window.Vue.createCommentVNode, iS = { class: "col shrink pe-4" }, rS = { class: "col" }, cS = { class: "cx-translation__details column justify-between ma-0" }, lS = { class: "row ma-0" }, uS = { class: "col grow" }, dS = { class: "col shrink ps-2" }, gS = ["dir", "textContent"], mS = ["dir", "textContent"], pS = ["textContent"];
function hS(e, t, n, o, s, a) {
  const i = Vs("mw-thumbnail"), c = Vs("mw-icon"), l = Vs("mw-col"), g = Vs("mw-row");
  return n.translation ? (oS(), sS("div", {
    key: 0,
    class: "row cx-translation pa-4 ma-0",
    onClick: t[1] || (t[1] = Yl((r) => e.$emit("click"), ["stop"]))
  }, [
    ht("div", iS, [
      kn(i, {
        class: "cx-translation__thumbnail",
        thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
      }, null, 8, ["thumbnail"])
    ]),
    ht("div", rS, [
      ht("div", cS, [
        ht("div", lS, [
          ht("div", uS, [
            Kl(e.$slots, "title")
          ]),
          ht("div", dS, [
            kn(c, {
              class: "cx-translation__action-icon",
              icon: n.actionIcon,
              onClick: t[0] || (t[0] = Yl((r) => e.$emit("action-icon-clicked"), ["stop"]))
            }, null, 8, ["icon"])
          ])
        ]),
        Kl(e.$slots, "mid-content"),
        kn(g, { class: "cx-translation__footer ma-0" }, {
          default: pi(() => [
            kn(l, {
              class: "cx-translation__languages",
              grow: ""
            }, {
              default: pi(() => [
                ht("span", {
                  class: "mw-ui-autonym",
                  dir: o.getDir(n.translation.sourceLanguage),
                  textContent: mi(o.getAutonym(n.translation.sourceLanguage))
                }, null, 8, gS),
                kn(c, {
                  icon: o.mwIconArrowNext,
                  class: "mx-1",
                  size: 14
                }, null, 8, ["icon"]),
                ht("span", {
                  class: "mw-ui-autonym ma-0",
                  dir: o.getDir(n.translation.targetLanguage),
                  textContent: mi(o.getAutonym(n.translation.targetLanguage))
                }, null, 8, mS)
              ]),
              _: 1
            }),
            kn(l, {
              class: "cx-translation__days-since-started",
              shrink: ""
            }, {
              default: pi(() => [
                ht("span", {
                  textContent: mi(o.timeagoMessage)
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
const Bm = /* @__PURE__ */ L(nS, [["render", hS]]);
const ao = window.Vue.unref, Ql = window.Vue.toDisplayString, wS = window.Vue.normalizeClass, fS = window.Vue.createElementVNode, hi = window.Vue.openBlock, _S = window.Vue.createElementBlock, Jl = window.Vue.createCommentVNode, Zl = window.Vue.createVNode, As = window.Vue.withCtx, eu = window.Vue.createBlock, vS = ["lang", "textContent"], SS = ["lang", "textContent"], yS = window.Vue.computed, CS = window.Vue.inject, kS = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: hc,
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
    return (a, i) => (hi(), eu(Bm, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": ao(Mg),
      onActionIconClicked: i[0] || (i[0] = (c) => a.$emit("delete-translation"))
    }, {
      title: As(() => [
        fS("h5", {
          class: wS(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Ql(e.translation.sourceTitle)
        }, null, 10, vS),
        e.translation.isLeadSectionTranslation ? Jl("", !0) : (hi(), _S("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Ql(e.translation.sourceSectionTitle)
        }, null, 8, SS))
      ]),
      "mid-content": As(() => [
        e.translation.progress ? (hi(), eu(ao(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: As(() => [
            Zl(ao(C), null, {
              default: As(() => [
                Zl(ao(Rg), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: ao(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Jl("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, xS = window.Vue.computed, bS = window.Vue.inject, rs = () => {
  const e = bS("breakpoints");
  return { isDesktop: xS(
    () => !q.isMobileDomain() && e.value.tabletAndUp
  ) };
}, $S = window.Vuex.useStore, Cc = () => {
  const e = $S();
  return (t, n, o, s = !0) => b(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    if (!a) {
      a = yield et.fetchSectionSuggestions(
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
          a = new jn({
            sourceLanguage: t,
            targetLanguage: n,
            // suggestion source title is directly displayed to the user (it's used in v-text
            // directives in some SFCs), so use the normalized page title here
            sourceTitle: i.title
          }), s && e.commit(
            "suggestions/addPageSuggestion",
            new fc({
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
}, VS = window.Vuex.useStore, Na = () => {
  const e = VS(), t = me(), n = Cc(), { setTranslationURLParams: o } = G();
  return (s, a, i, c) => b(void 0, null, function* () {
    const l = yield n(
      a,
      i,
      s
    );
    l && (e.dispatch("application/getCXServerToken"), o(l), t.push({
      name: "sx-translation-confirmer",
      query: { eventSource: c }
    }));
  });
}, xn = window.Vue.computed;
function U(e) {
  const t = xn(() => e.state.application.sourceLanguage), n = xn(() => e.state.application.targetLanguage), o = xn(
    () => e.state.application.currentMTProvider
  ), s = xn(
    () => O.getAutonym(t.value)
  ), a = xn(
    () => O.getAutonym(n.value)
  ), i = xn(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: i,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
const AS = window.Vuex.useStore, DS = window.Vue.computed, cs = () => {
  const e = AS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = G();
  return { currentTranslation: DS(
    () => e.getters["translator/getDraftTranslation"](
      s.value,
      o.value,
      t.value,
      n.value
    )
  ) };
}, ES = window.Vuex.useStore, kc = () => {
  const e = Na(), t = ES(), { sourceLanguage: n, targetLanguage: o } = U(t), s = (r, u) => e(
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
}, tu = window.Vue.computed, LS = window.Vuex.useStore;
function ls() {
  const e = LS(), t = tu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: tu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const TS = (e, t) => {
  const { sourceLanguageURLParameter: n, targetLanguageURLParameter: o } = G(), s = q.getCurrentWikiLanguageCode(), a = (u) => !e || Array.isArray(e) && e.includes(u), i = (u) => t.includes(u), c = {
    sourceLanguage: "en",
    targetLanguage: "es"
  };
  let l;
  return o.value && a(o.value) && i(o.value) ? l = o.value : a(s) && i(s) ? l = s : l = (e == null ? void 0 : e[0]) || c.targetLanguage, { sourceLanguage: [
    n.value,
    c.sourceLanguage,
    s,
    c.targetLanguage
  ].filter((u) => i(u)).find((u) => u !== l), targetLanguage: l };
};
class BS {
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
const PS = window.Vuex.useStore, FS = () => {
  const e = PS();
  return () => b(void 0, null, function* () {
    const { sourceLanguage: t, targetLanguage: n } = U(e), o = yield et.fetchSuggestionSeeds(
      t.value,
      n.value
    ), s = new BS({
      sourceLanguage: t,
      targetLanguage: n,
      seeds: o
    });
    return e.commit("suggestions/addSuggestionSeedCollection", s), s;
  });
}, MS = window.Vuex.useStore, xc = () => {
  const e = MS(), { sourceLanguage: t, targetLanguage: n } = U(e), o = (u) => {
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
  }, c = (u) => {
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
  }, l = (u, d) => b(void 0, null, function* () {
    let m = e.getters["suggestions/findSuggestionSeedCollection"](u, d);
    return !m || !m.seeds.length ? (mw.log.error("No suggestion seed found! Suggestion fetching will fail!"), null) : m.shiftSeeds();
  });
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const u = e.getters["suggestions/getNumberOfSectionSuggestionsToFetch"](t.value, n.value), d = [];
      for (; d.length < u; ) {
        const m = yield l(
          t.value,
          n.value
        );
        if (!m)
          break;
        const p = yield et.fetchSectionSuggestions(
          t.value,
          m,
          n.value
        );
        i(p) ? d.push(p) : p && !a(p) && (p.isListable = !1, e.commit("suggestions/addSectionSuggestion", p));
      }
      d.forEach(
        (m) => e.commit("suggestions/addSectionSuggestion", m)
      ), c(d), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const u = e.getters["suggestions/getNumberOfPageSuggestionsToFetch"](t.value, n.value), d = [];
      for (; d.length < u; ) {
        const m = yield l(
          t.value,
          n.value
        );
        if (!m)
          break;
        let p = yield et.fetchPageSuggestions(
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
      ), c(d), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, NS = window.Vuex.useStore, bc = () => {
  const e = NS(), t = FS(), { fetchNextSectionSuggestionsSlice: n, fetchNextPageSuggestionsSlice: o } = xc();
  return () => b(void 0, null, function* () {
    yield t();
    const { targetLanguage: s } = U(e), a = e.getters["application/getSectionSuggestionsSliceByIndex"](0), i = e.getters["application/getPageSuggestionsSliceByIndex"](0), { maxSuggestionsPerSlice: c } = e.state.suggestions, l = a.length === c, g = i.length === c;
    l && g || (yield e.dispatch(
      "suggestions/fetchAppendixSectionTitles",
      s.value
    ), n(), o());
  });
}, nu = window.Vue.computed, US = window.Vuex.useStore, Et = () => {
  const e = US(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = G(), s = nu(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = nu(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, l) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(l)
  };
}, us = window.Vuex.useStore, ds = (e, t, n, o, s = {}) => {
  const a = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  ), i = q.getCurrentWikiLanguageCode();
  return a && t !== i ? (s = ye({ sx: !0 }, s), o && (s.section = o), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    s
  ), !0) : !1;
}, { setLanguageURLParams: IS, pageURLParameter: zS, sectionURLParameter: RS } = G(), gs = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), IS(t, n);
}, Pm = () => {
  const e = us(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = ls();
  return () => b(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: o, targetLanguage: s } = TS(
      t.value,
      n.value
    );
    ds(
      o,
      s,
      zS.value,
      RS.value
    ) || gs(e, o, s);
  });
}, Fm = () => {
  const e = us(), t = bc();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = U(e);
    n === o && (n = a.value, o = s.value), ds(
      n,
      o,
      null,
      null
    ) || (gs(e, n, o), t());
  };
}, OS = () => {
  const e = us(), t = bc();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      ds(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (gs(e, o, s), t());
    }
  );
}, HS = () => {
  const e = us();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    ds(
      n,
      o,
      s,
      null
    ) || gs(e, n, o);
  };
}, jS = () => {
  const e = us(), t = Cc(), { currentLanguageTitleGroup: n } = Et();
  return (o, s) => b(void 0, null, function* () {
    const { sourceLanguage: a, targetLanguage: i } = U(e);
    o === s && (o = i.value, s = a.value);
    const c = n.value.getTitleForLanguage(o);
    ds(
      o,
      s,
      c,
      null
    ) || (gs(e, o, s), n.value.hasLanguage(i.value) && (yield t(
      a.value,
      i.value,
      c
    )), e.dispatch("application/getCXServerToken"));
  });
}, qS = window.Vuex.useStore, GS = () => {
  const e = qS();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return s || (s = yield et.fetchSectionSuggestions(
      t,
      o,
      n
    ), s || (s = new jn({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      isListable: !1
    })), e.commit("suggestions/addSectionSuggestion", s)), s;
  });
}, WS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', XS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', KS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', YS = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', QS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', JS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', ZS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', ey = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', ty = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', ny = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', oy = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', sy = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', ay = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', iy = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', ry = '<path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z"/><path d="m11 1 3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z"/>', cy = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', ly = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', uy = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', dy = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', gy = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', my = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', py = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', hy = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', ac = WS, Mm = XS, Nm = {
  ltr: KS,
  shouldFlip: !0
}, wy = YS, fy = QS, _y = JS, vy = ZS, Ua = ey, $c = ty, Um = ny, Sy = oy, yy = {
  langCodeMap: {
    ar: sy
  },
  default: ay
}, Cy = iy, Vc = {
  ltr: ry,
  shouldFlip: !0
}, ky = cy, ms = {
  ltr: ly,
  shouldFlip: !0
}, Ac = {
  ltr: uy,
  shouldFlip: !0
}, xy = {
  ltr: dy,
  shouldFlip: !0
}, Im = gy, by = my, $y = py, Vy = hy;
const Ds = window.Vue.withModifiers, wi = window.Vue.toDisplayString, fi = window.Vue.createElementVNode, Fe = window.Vue.unref, Es = window.Vue.openBlock, ou = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Ft = window.Vue.createVNode, sn = window.Vue.withCtx, su = window.Vue.createElementBlock, Ay = ["lang", "href", "textContent"], Dy = {
  key: 1,
  class: "flex"
}, Ey = { key: 2 }, Ly = window.Vuex.useStore, au = window.Vue.computed, iu = window.Vue.ref, _i = window.Codex.CdxButton, vi = window.Codex.CdxIcon, Ty = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Qg,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Ly(), o = iu(!0), s = iu(null), a = au(() => {
      var w;
      return (w = s.value) == null ? void 0 : w.missingSections;
    }), i = au(
      () => a.value && Object.keys(a.value)[0]
    );
    GS()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((w) => s.value = w).catch((w) => console.log(w)).finally(() => o.value = !1);
    const l = me();
    rs();
    const { setTranslationURLParams: g, setSectionURLParam: r } = G(), u = (w) => {
      n.dispatch("application/getCXServerToken"), g(s.value), w && r(w), l.push({
        name: "sx-translation-confirmer"
      });
    }, d = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, { startPublishedTranslation: m } = kc();
    U(n);
    const p = HS(), h = () => {
      p(t.translation), m(t.translation);
    };
    return (w, f) => (Es(), ou(Bm, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: d
    }, {
      title: sn(() => [
        fi("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = Ds(() => {
          }, ["stop"])),
          textContent: wi(e.translation.sourceTitle)
        }, null, 8, Ay)
      ]),
      "mid-content": sn(() => [
        Ft(Fe(P), { class: "ma-0" }, {
          default: sn(() => [
            Ft(Fe(C), null, {
              default: sn(() => [
                o.value ? (Es(), ou(Fe(tt), { key: 0 })) : a.value ? (Es(), su("div", Dy, [
                  Ft(Fe(_i), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = Ds((v) => u(i.value), ["stop"]))
                  }, {
                    default: sn(() => [
                      Ft(Fe(vi), {
                        class: "me-1",
                        icon: Fe(ac)
                      }, null, 8, ["icon"]),
                      fi("span", null, wi(i.value), 1)
                    ]),
                    _: 1
                  }),
                  Ft(Fe(_i), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[2] || (f[2] = Ds((v) => u(null), ["stop"]))
                  }, {
                    default: sn(() => [
                      Ft(Fe(vi), { icon: Fe(Um) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])) : (Es(), su("div", Ey, [
                  Ft(Fe(_i), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: Ds(h, ["stop"])
                  }, {
                    default: sn(() => [
                      Ft(Fe(vi), {
                        class: "me-1",
                        icon: Fe(ac)
                      }, null, 8, ["icon"]),
                      fi("span", null, wi(w.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, zm = "cx-translation-session-position-", Rm = () => zm + mw.user.sessionId(), Om = () => {
  const e = Rm();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, By = function() {
  const e = Om();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(zm)).forEach((n) => mw.storage.remove(n));
  const t = Rm();
  mw.storage.set(t, e + 1);
};
let ic = null;
function Py(e) {
  if (ic)
    return Promise.resolve(ic);
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
function Fy(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function My(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = e.access_method || "mobile web", n = mw.config.get("wgDBname"), o = `cx_sx_${mw.user.sessionId()}_${t}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = Om(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.4.0",
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
  let g;
  return a ? g = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : g = Py(i).then((r) => {
    ic = r, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: Fy(r)
      })
    );
  }), g.then(() => {
    By();
  });
}
const Ny = window.Vue.inject, Hm = Symbol("event-logging-context"), ut = function() {
  const e = Ny(Hm);
  if (!e)
    throw new Error("No event logging method provided!!!");
  return e;
}, Uy = () => ({
  install: (e) => {
    e.provide(Hm, My);
  }
}), ru = window.Vuex.useStore, Iy = () => {
  const e = ru(), { commit: t } = ru(), { sourceLanguage: n, targetLanguage: o } = U(e), s = ut();
  return (a) => b(void 0, null, function* () {
    a.sectionTranslationId ? (yield nt.deleteTranslation(
      a.sectionTranslationId,
      a.translationId,
      a.sectionId
    )) && t(
      "translator/removeTranslationBySectionTranslationId",
      a.sectionTranslationId
    ) : (yield nt.deleteCXTranslation(
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
const zy = {
  name: "SxConfirmTranslationDeletionDialog",
  components: {
    MwButton: be,
    MwDialog: ot
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
    const n = () => t("update:modelValue", !1), o = Iy();
    return { closeDialog: n, deleteTranslation: () => {
      o(e.translation), n();
    } };
  }
}, Ry = window.Vue.resolveDirective, Si = window.Vue.createElementVNode, Oy = window.Vue.withDirectives, cu = window.Vue.resolveComponent, lu = window.Vue.createVNode, uu = window.Vue.withCtx, Hy = window.Vue.openBlock, jy = window.Vue.createBlock, qy = { class: "pa-4" }, Gy = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" };
function Wy(e, t, n, o, s, a) {
  const i = cu("mw-button"), c = cu("mw-dialog"), l = Ry("i18n");
  return Hy(), jy(c, {
    value: n.modelValue,
    class: "sx-confirm-back-navigation-dialog",
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    header: !1,
    "min-height": "unset"
  }, {
    footer: uu(() => [
      Si("div", Gy, [
        lu(i, {
          class: "grow py-3",
          large: "",
          label: e.$i18n("sx-translation-deletion-cancel-button-label"),
          onClick: o.closeDialog
        }, null, 8, ["label", "onClick"]),
        lu(i, {
          class: "grow py-3",
          large: "",
          destructive: "",
          label: e.$i18n("sx-translation-deletion-confirm-button-label"),
          onClick: o.deleteTranslation
        }, null, 8, ["label", "onClick"])
      ])
    ]),
    default: uu(() => [
      Si("div", qy, [
        Oy(Si("span", null, null, 512), [
          [l, void 0, "sx-confirm-translation-deletion-dialog-body"]
        ])
      ])
    ]),
    _: 1
  }, 8, ["value", "overlay-color"]);
}
const Xy = /* @__PURE__ */ L(zy, [["render", Wy]]);
function Ky(e, t, n) {
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
    return s.length ? s : n ? (yield Yy(t, n)).filter((i) => e.includes(i)) : [];
  });
}
function du(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield Ky(e, t, n)).sort(O.sortByAutonym);
  });
}
function Yy(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Qy() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Jy(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
function Zy(e) {
  const t = e.length;
  return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
}
const eC = window.Vue.computed;
function tC(e, t) {
  const n = eC(() => {
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
const yi = window.Vue.ref, gu = window.Vue.watch, nC = window.Vue.computed;
function oC(e, t, n) {
  const o = yi(""), s = yi(-1), a = yi(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = nC(
    () => e.value ? t.value : [...n, ...t.value]
  ), l = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return gu(e, () => {
    s.value = -1;
  }), gu(s, () => b(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
}
function Dc(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Ci = window.Vue.ref, sC = window.Vue.watch, aC = window.Vue.onMounted, mu = window.Vue.computed, iC = {
  name: "MwLanguageSelector",
  components: {
    MwInput: mc
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
      default: Qy
    }
  },
  emits: ["select", "close"],
  setup(e, t) {
    const n = Ci(null), o = Ci(""), s = Ci([]), a = mu(
      () => Jy(s.value)
    ), i = mu(
      () => Zy(s.value)
    ), c = (f) => t.emit("select", f), l = () => t.emit("close"), { autocompletion: g, onTabSelect: r } = tC(
      o,
      s
    ), { next: u, prev: d, langSelectorContainer: m, selectedLanguage: p } = oC(o, s, e.suggestions), h = () => {
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
    return sC(o, Dc(() => b(this, null, function* () {
      s.value = yield du(
        e.languages,
        o.value,
        e.searchAPI
      );
    }), 300)), aC(() => b(this, null, function* () {
      e.autofocus && setTimeout(() => n.value.focus(), 500), s.value = yield du(
        e.languages,
        "",
        e.searchAPI
      );
    })), {
      autocompletion: g,
      close: l,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      langSelectorContainer: m,
      mwIconClose: Sn,
      mwIconSearch: Ng,
      next: u,
      onEnter: h,
      onTabSelect: r,
      prev: d,
      resultsDisplayClass: i,
      searchInputElement: n,
      searchQuery: o,
      searchResultsByScript: a,
      select: c,
      selectedLanguage: p
    };
  }
}, Ls = window.Vue.renderSlot, rC = window.Vue.resolveComponent, pu = window.Vue.createVNode, io = window.Vue.withModifiers, ro = window.Vue.withKeys, Mt = window.Vue.createElementVNode, cC = window.Vue.resolveDirective, Ts = window.Vue.withDirectives, ki = window.Vue.renderList, xi = window.Vue.Fragment, wt = window.Vue.openBlock, ft = window.Vue.createElementBlock, hu = window.Vue.toDisplayString, Bs = window.Vue.normalizeClass, bi = window.Vue.createCommentVNode, lC = {
  ref: "langSelectorContainer",
  class: "mw-ui-language-selector"
}, uC = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, dC = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, gC = { class: "results px-3 pt-4" }, mC = { class: "results-header ps-8 pb-2" }, pC = { class: "results-languages--suggestions pa-0 ma-0" }, hC = ["lang", "dir", "aria-selected", "onClick", "textContent"], wC = { class: "results px-3 pt-4" }, fC = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, _C = ["lang", "dir", "aria-selected", "onClick", "textContent"], vC = ["aria-selected"], SC = { class: "no-results px-3 py-4" }, yC = { class: "ps-8" };
function CC(e, t, n, o, s, a) {
  const i = rC("mw-input"), c = cC("i18n");
  return wt(), ft("div", lC, [
    Ls(e.$slots, "search", {}, () => [
      Mt("div", uC, [
        pu(i, {
          value: o.autocompletion,
          "onUpdate:value": t[0] || (t[0] = (l) => o.autocompletion = l),
          icon: o.mwIconSearch,
          "icon-size": 20,
          class: "mw-ui-language-selector__autocomplete pa-4",
          disabled: ""
        }, null, 8, ["value", "icon"]),
        pu(i, {
          ref: "searchInputElement",
          value: o.searchQuery,
          "onUpdate:value": t[1] || (t[1] = (l) => o.searchQuery = l),
          class: "mw-ui-language-selector__search pa-4",
          icon: o.mwIconSearch,
          "icon-size": 20,
          placeholder: n.placeholder,
          autofocus: n.autofocus,
          onKeydown: [
            ro(io(o.onEnter, ["prevent"]), ["enter"]),
            ro(io(o.next, ["stop", "prevent"]), ["down"]),
            ro(io(o.prev, ["stop", "prevent"]), ["up"]),
            ro(io(o.close, ["prevent"]), ["esc"]),
            ro(io(o.onTabSelect, ["prevent"]), ["tab"])
          ]
        }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
      ])
    ]),
    Mt("section", dC, [
      n.suggestions.length && !o.searchQuery ? Ls(e.$slots, "suggestions", { key: 0 }, () => [
        Mt("section", gC, [
          Ts(Mt("p", mC, null, 512), [
            [c, void 0, "cx-sx-language-selector-suggestions"]
          ]),
          Mt("ul", pC, [
            (wt(!0), ft(xi, null, ki(n.suggestions, (l) => (wt(), ft("li", {
              key: l,
              class: Bs(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
              lang: l,
              dir: o.getDir(l),
              "aria-selected": l === o.selectedLanguage || null,
              tabindex: "-1",
              role: "option",
              onClick: (g) => o.select(l),
              textContent: hu(o.getAutonym(l))
            }, null, 10, hC))), 128))
          ])
        ])
      ]) : bi("", !0),
      o.searchResultsByScript.length ? Ls(e.$slots, "search", { key: 1 }, () => [
        Mt("section", wC, [
          n.suggestions.length && !o.searchQuery ? Ts((wt(), ft("p", fC, null, 512)), [
            [c, void 0, "cx-sx-language-selector-all-languages"]
          ]) : bi("", !0),
          (wt(!0), ft(xi, null, ki(o.searchResultsByScript, (l, g) => (wt(), ft("ul", {
            key: g,
            class: Bs(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
          }, [
            (wt(!0), ft(xi, null, ki(l, (r) => (wt(), ft("li", {
              key: r,
              class: Bs(["language pa-2 ps-8 ma-0", r === o.selectedLanguage ? "language--selected" : ""]),
              lang: r,
              dir: o.getDir(r),
              role: "option",
              "aria-selected": r === o.selectedLanguage || null,
              tabindex: "-1",
              onClick: (u) => o.select(r),
              textContent: hu(o.getAutonym(r))
            }, null, 10, _C))), 128)),
            n.allOptionEnabled && !o.searchQuery ? Ts((wt(), ft("li", {
              key: 0,
              class: Bs(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
              role: "option",
              "aria-selected": o.selectedLanguage === "all" || null,
              tabindex: "-1",
              onClick: t[2] || (t[2] = (r) => o.select("all"))
            }, null, 10, vC)), [
              [c, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : bi("", !0)
          ], 2))), 128))
        ])
      ]) : Ls(e.$slots, "noresults", { key: 2 }, () => [
        Mt("section", SC, [
          Ts(Mt("h3", yC, null, 512), [
            [c, void 0, "cx-sx-language-selector-no-search-results"]
          ])
        ])
      ])
    ])
  ], 512);
}
const jm = /* @__PURE__ */ L(iC, [["render", CC]]);
const pe = window.Vue.unref, kC = window.Vue.resolveDirective, wu = window.Vue.withDirectives, co = window.Vue.openBlock, lo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const fu = window.Vue.toDisplayString, _u = window.Vue.withModifiers, an = window.Vue.withCtx, _t = window.Vue.createVNode, xC = { class: "sx-translation-list-language-selector" }, bC = {
  key: 0,
  class: "mw-ui-autonym"
}, $C = ["lang", "dir", "textContent"], VC = {
  key: 0,
  class: "mw-ui-autonym"
}, AC = ["lang", "dir", "textContent"], uo = window.Vue.computed, DC = window.Vue.inject, EC = window.Vue.ref, Ec = {
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
    const n = e, o = t, s = DC("breakpoints"), a = uo(() => s.value.mobile), i = EC(null), c = uo(() => !!i.value), l = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, u = uo(() => {
      if (!c.value)
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
    }, m = uo(
      () => n.selectedSourceLanguage === "all"
    ), p = uo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, w) => {
      const f = kC("i18n");
      return co(), lo("div", xC, [
        _t(pe(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: an(() => [
            _t(pe(C), {
              class: "flex justify-end",
              cols: "5"
            }, {
              default: an(() => [
                _t(pe(be), {
                  indicator: pe(Yr),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  onClick: _u(l, ["stop"])
                }, {
                  default: an(() => [
                    m.value ? wu((co(), lo("span", bC, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (co(), lo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: pe(O.getDir)(e.selectedSourceLanguage),
                      textContent: fu(pe(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, $C))
                  ]),
                  _: 1
                }, 8, ["indicator", "onClick"])
              ]),
              _: 1
            }),
            _t(pe(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center",
              cols: "2"
            }, {
              default: an(() => [
                _t(pe(Se), { icon: pe(uc) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            _t(pe(C), { cols: "5" }, {
              default: an(() => [
                _t(pe(be), {
                  indicator: pe(Yr),
                  class: "pa-3 sx-translation-list-language-selector__button",
                  type: "text",
                  disabled: e.targetLanguages.length < 2,
                  onClick: _u(g, ["stop"])
                }, {
                  default: an(() => [
                    p.value ? wu((co(), lo("span", VC, null, 512)), [
                      [f, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (co(), lo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: pe(O.getDir)(e.selectedTargetLanguage),
                      textContent: fu(pe(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, AC))
                  ]),
                  _: 1
                }, 8, ["indicator", "disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _t(pe(ot), {
          value: c.value,
          "onUpdate:value": w[0] || (w[0] = (v) => c.value = v),
          animation: "slide-up",
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-opacity": 0,
          onClose: r
        }, {
          default: an(() => [
            _t(pe(jm), {
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
}, LC = window.Vue.toDisplayString, TC = window.Vue.createElementVNode, vu = window.Vue.createVNode, Su = window.Vue.unref, Nt = window.Vue.openBlock, Ps = window.Vue.createBlock, yu = window.Vue.createCommentVNode, Cu = window.Vue.renderList, ku = window.Vue.Fragment, Fs = window.Vue.createElementBlock, BC = window.Vue.normalizeClass, xu = window.Vue.withCtx, PC = ["textContent"], FC = {
  key: 1,
  class: "cx-translation-list-wrapper"
}, MC = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Ms = window.Vue.ref, vt = window.Vue.computed, NC = window.Vuex.useStore, bu = {
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
    const t = e, n = Ms("all"), o = Ms("all"), s = NC(), a = vt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = ls(), c = Ms(!1), l = Ms(null), g = vt(
      () => t.translationStatus === "draft"
    ), r = vt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), u = vt(
      () => n.value === "all"
    ), d = vt(
      () => o.value === "all"
    ), m = vt(
      () => r.value.filter(
        (A) => (u.value || A.sourceLanguage === n.value) && (d.value || A.targetLanguage === o.value)
      ).sort((A, E) => A.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), p = vt(() => {
      let A = r.value.map(
        (E) => E.targetLanguage
      );
      return i.value && (A = A.filter(
        (E) => i.value.includes(E)
      )), [...new Set(A)];
    }), h = vt(() => {
      const A = r.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(A)];
    }), w = (A) => {
      l.value = A, c.value = !0;
    }, f = vt(() => t.activeStatus === t.translationStatus), v = me(), { setTranslationURLParams: S } = G(), V = (A) => {
      S(A), v.push({
        name: "sx-translation-confirmer"
      });
    };
    return (A, E) => f.value ? (Nt(), Ps(Su(Re), {
      key: 0,
      class: BC(`cx-translation-list--${e.translationStatus}`)
    }, {
      header: xu(() => [
        TC("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: LC(A.$i18n(`cx-translation-label-${e.translationStatus}`))
        }, null, 8, PC)
      ]),
      default: xu(() => [
        vu(Ec, {
          "selected-source-language": n.value,
          "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (F) => n.value = F),
          "selected-target-language": o.value,
          "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (F) => o.value = F),
          "source-languages": h.value,
          "target-languages": p.value,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        a.value ? yu("", !0) : (Nt(), Ps(Su(tt), { key: 0 })),
        g.value ? (Nt(), Fs("div", FC, [
          (Nt(!0), Fs(ku, null, Cu(m.value, (F) => (Nt(), Ps(kS, {
            key: `${e.translationStatus}-${F.key}`,
            translation: F,
            onClick: (D) => V(F),
            onDeleteTranslation: (D) => w(F)
          }, null, 8, ["translation", "onClick", "onDeleteTranslation"]))), 128))
        ])) : (Nt(), Fs("div", MC, [
          (Nt(!0), Fs(ku, null, Cu(m.value, (F) => (Nt(), Ps(Ty, {
            key: `${e.translationStatus}-${F.key}`,
            translation: F,
            onDeleteTranslation: (D) => w(F)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        vu(Xy, {
          modelValue: c.value,
          "onUpdate:modelValue": E[2] || (E[2] = (F) => c.value = F),
          translation: l.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : yu("", !0);
  }
};
const St = window.Vue.computed, UC = window.Vue.inject, IC = window.Vuex.useStore, zC = {
  name: "CxTranslationSuggestion",
  components: { MwThumbnail: pc, MwIcon: Se, MwRow: P, MwCol: C },
  props: {
    suggestion: {
      type: [fc, jn, qn],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = IC(), n = St(() => e.suggestion), o = St(
      () => n.value.sourceTitle || n.value.title
    ), s = St(
      () => t.getters["mediawiki/getPage"](
        n.value.sourceLanguage,
        o.value
      )
    ), a = St(
      () => {
        var p;
        return (p = n.value) == null ? void 0 : p.missingSectionsCount;
      }
    ), i = St(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.description;
    }), c = St(
      () => n.value instanceof jn
    ), l = St(
      () => n.value instanceof qn
    ), { sourceLanguageAutonym: g, targetLanguageAutonym: r } = U(t), u = St(
      () => l.value ? ow : nw
    ), d = UC("colors"), m = St(
      () => l.value ? d.blue600 : "currentColor"
    );
    return {
      bookmarkIcon: u,
      bookmarkIconColor: m,
      description: i,
      getDir: O.getDir,
      isFavoriteSuggestion: l,
      isSectionSuggestion: c,
      missingSectionsCount: a,
      mwIconArrowNext: uc,
      mwIconClose: Sn,
      page: s,
      sourceLanguageAutonym: g,
      targetLanguageAutonym: r,
      title: o
    };
  }
}, Ns = window.Vue.resolveComponent, $e = window.Vue.createVNode, Ut = window.Vue.createElementVNode, Us = window.Vue.toDisplayString, Ve = window.Vue.withCtx, $u = window.Vue.withModifiers, go = window.Vue.openBlock, Is = window.Vue.createBlock, zs = window.Vue.createCommentVNode, RC = window.Vue.resolveDirective, Vu = window.Vue.withDirectives, OC = window.Vue.createElementBlock, HC = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, jC = { class: "col shrink pe-4" }, qC = { class: "col cx-suggestion__information-panel" }, GC = ["lang", "dir", "textContent"], WC = ["lang", "dir", "textContent"], XC = ["textContent"], KC = ["textContent"];
function YC(e, t, n, o, s, a) {
  const i = Ns("mw-thumbnail"), c = Ns("mw-col"), l = Ns("mw-row"), g = Ns("mw-icon"), r = RC("i18n");
  return n.suggestion ? (go(), OC("div", HC, [
    Ut("div", jC, [
      $e(i, {
        class: "cx-suggestion__thumbnail",
        thumbnail: o.page && o.page.thumbnail
      }, null, 8, ["thumbnail"])
    ]),
    Ut("div", qC, [
      $e(l, {
        direction: "column",
        align: "start",
        class: "ma-0 no-wrap fill-height"
      }, {
        default: Ve(() => [
          $e(c, {
            shrink: "",
            class: "cx-suggestion__information-panel__top pb-2"
          }, {
            default: Ve(() => [
              $e(l, {
                class: "ma-0",
                align: "start",
                justify: "between"
              }, {
                default: Ve(() => [
                  $e(c, {
                    grow: "",
                    class: "pe-2"
                  }, {
                    default: Ve(() => [
                      $e(l, {
                        direction: "column",
                        class: "ma-0",
                        align: "start"
                      }, {
                        default: Ve(() => [
                          $e(c, {
                            shrink: "",
                            class: "mb-2"
                          }, {
                            default: Ve(() => [
                              Ut("h5", {
                                class: "my-0 cx-suggestion__source-title",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: Us(o.title)
                              }, null, 8, GC)
                            ]),
                            _: 1
                          }),
                          $e(c, { shrink: "" }, {
                            default: Ve(() => [
                              Ut("p", {
                                class: "ma-0 cx-suggestion__source-description complementary",
                                lang: n.suggestion.sourceLanguage,
                                dir: o.getDir(n.suggestion.sourceLanguage),
                                textContent: Us(o.description)
                              }, null, 8, WC)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  $e(c, { shrink: "" }, {
                    default: Ve(() => [
                      o.isFavoriteSuggestion ? zs("", !0) : (go(), Is(g, {
                        key: 0,
                        icon: o.mwIconClose,
                        size: "24",
                        class: "cx-suggestion__discard-button mb-4",
                        onClick: t[0] || (t[0] = $u((u) => e.$emit("close"), ["stop"]))
                      }, null, 8, ["icon"])),
                      $e(g, {
                        class: "cx-suggestion__favorite-button",
                        icon: o.bookmarkIcon,
                        size: "24",
                        "icon-color": o.bookmarkIconColor,
                        onClick: t[1] || (t[1] = $u((u) => e.$emit("bookmark"), ["stop"]))
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
          o.isSectionSuggestion ? (go(), Is(c, {
            key: 0,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
            shrink: ""
          }, {
            default: Ve(() => [
              Vu(Ut("small", null, null, 512), [
                [r, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
              ])
            ]),
            _: 1
          })) : o.isFavoriteSuggestion ? (go(), Is(c, {
            key: 1,
            class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
            shrink: ""
          }, {
            default: Ve(() => [
              $e(l, {
                justify: "between",
                class: "ma-0"
              }, {
                default: Ve(() => [
                  $e(c, { grow: "" }, {
                    default: Ve(() => [
                      Ut("small", {
                        textContent: Us(o.sourceLanguageAutonym)
                      }, null, 8, XC),
                      $e(g, {
                        icon: o.mwIconArrowNext,
                        size: "14",
                        class: "mx-1"
                      }, null, 8, ["icon"]),
                      Ut("small", {
                        textContent: Us(o.targetLanguageAutonym)
                      }, null, 8, KC)
                    ]),
                    _: 1
                  }),
                  o.missingSectionsCount ? (go(), Is(c, {
                    key: 0,
                    shrink: "",
                    class: "cx-suggestion__favorite-missing-sections"
                  }, {
                    default: Ve(() => [
                      Vu(Ut("small", null, null, 512), [
                        [r, [
                          o.missingSectionsCount
                        ], "cx-sx-translation-suggestion-info"]
                      ])
                    ]),
                    _: 1
                  })) : zs("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : zs("", !0)
        ]),
        _: 1
      })
    ])
  ])) : zs("", !0);
}
const rc = /* @__PURE__ */ L(zC, [["render", YC]]), QC = window.Vue.computed, JC = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = ls(), n = QC(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, mo = window.Vue.computed, Au = window.Vue.ref, ZC = window.Vuex.useStore, ek = () => {
  const e = ZC(), { sourceLanguage: t, targetLanguage: n } = U(e), o = ut(), s = mo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), a = mo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), i = mo(
    () => !s.value && !a.value
  ), c = Au(0), l = Au(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, r = 4, u = mo(
    () => e.getters["application/getSectionSuggestionsSliceByIndex"](
      c.value
    )
  ), d = mo(
    () => e.getters["application/getPageSuggestionsSliceByIndex"](
      l.value
    )
  ), m = () => {
    f(), v();
  }, {
    fetchNextSectionSuggestionsSlice: p,
    fetchNextPageSuggestionsSlice: h
  } = xc(), w = (F) => F.length === g, f = () => {
    const F = w(
      u.value
    ), D = (c.value + 1) % r, B = w(
      e.getters["application/getSectionSuggestionsSliceByIndex"](D)
    );
    (!F || !B) && p(), F && A();
  }, v = () => {
    const F = w(
      d.value
    ), D = (l.value + 1) % r, B = w(
      e.getters["application/getPageSuggestionsSliceByIndex"](D)
    );
    (!F || !B) && h(), F && E();
  }, S = (F) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", F), f();
  }, V = (F) => {
    o({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestion", F), v();
  }, A = () => c.value = (c.value + 1) % r, E = () => l.value = (l.value + 1) % r;
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
}, tk = window.Vuex.useStore, Lc = () => {
  const e = tk(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = xc(), o = (g, r, u) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === r && d.sourceTitle === u
  ), s = (g) => b(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: u, targetLanguage: d } = g;
    yield et.markFavorite(r, u, d);
    const m = new qn({
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
      ), t()), yield et.markFavorite(
        g,
        r,
        u
      );
      const p = new qn({
        title: g,
        sourceLanguage: r,
        targetLanguage: u
      });
      e.commit("suggestions/addFavoriteSuggestion", p);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), et.unmarkFavorite(g))
  };
};
const Du = window.Vue.toDisplayString, Rs = window.Vue.createElementVNode, te = window.Vue.unref, po = window.Vue.createVNode, ho = window.Vue.withCtx, nk = window.Vue.resolveDirective, $i = window.Vue.withDirectives, Eu = window.Vue.renderList, Lu = window.Vue.Fragment, It = window.Vue.openBlock, Vi = window.Vue.createElementBlock, wo = window.Vue.createBlock, Ai = window.Vue.createCommentVNode, ok = window.Vue.createTextVNode, sk = window.Vue.vShow, ak = ["textContent"], ik = { class: "cx-translation-list__division-title ma-0 pa-4" }, rk = { class: "cx-translation-list__division-title ma-0 pa-4" }, ck = { class: "cx-suggestion-list__refresh-button-container justify-center" }, lk = window.Vuex.useStore, uk = window.Vue.ref, dk = window.Codex.CdxButton, gk = window.Codex.CdxIcon, mk = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = lk(), { sourceLanguage: n, targetLanguage: o } = U(t), { supportedLanguageCodes: s, availableTargetLanguages: a } = JC(), i = Fm(), c = (B) => i(B, o.value), l = (B) => i(n.value, B), g = Na(), r = (B) => g(
      B.sourceTitle,
      B.sourceLanguage,
      B.targetLanguage,
      "suggestion_no_seed"
    ), { startPageSuggestion: u } = kc(), {
      currentPageSuggestionsSlice: d,
      currentSectionSuggestionsSlice: m,
      discardPageSuggestion: p,
      discardSectionSuggestion: h,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: f,
      sectionSuggestionsLoading: v,
      showRefreshButton: S
    } = ek(), V = uk(null), A = ut(), E = () => {
      A({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: n.value,
        translation_target_language: o.value
      }), w(), V.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: F, markFavoritePageSuggestion: D } = Lc();
    return (B, re) => {
      const oe = nk("i18n");
      return $i((It(), Vi("div", null, [
        po(te(Re), { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
          header: ho(() => [
            Rs("h3", {
              class: "mw-ui-card__title pa-4 pt-5 mb-0",
              textContent: Du(B.$i18n("cx-suggestionlist-title"))
            }, null, 8, ak)
          ]),
          default: ho(() => [
            po(Ec, {
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
        po(te(Re), {
          ref_key: "pageSuggestionsList",
          ref: V,
          class: "cx-translation-list--page-suggestions pa-0 mb-0"
        }, {
          default: ho(() => [
            $i(Rs("h5", ik, null, 512), [
              [oe, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (It(!0), Vi(Lu, null, Eu(te(d), (H, Q) => (It(), wo(rc, {
              key: `page-suggestion-${Q}`,
              suggestion: H,
              onClose: (de) => te(p)(H),
              onClick: (de) => te(u)(H),
              onBookmark: (de) => te(D)(H)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(f) ? (It(), wo(te(tt), { key: 0 })) : Ai("", !0)
          ]),
          _: 1
        }, 512),
        po(te(Re), { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
          default: ho(() => [
            $i(Rs("h5", rk, null, 512), [
              [oe, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (It(!0), Vi(Lu, null, Eu(te(m), (H, Q) => (It(), wo(rc, {
              key: `section-suggestion-${Q}`,
              class: "ma-0",
              suggestion: H,
              onClose: (de) => te(h)(H),
              onClick: (de) => r(H),
              onBookmark: (de) => te(F)(H)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            te(v) ? (It(), wo(te(tt), { key: 0 })) : Ai("", !0)
          ]),
          _: 1
        }),
        Rs("div", ck, [
          te(S) ? (It(), wo(te(dk), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: E
          }, {
            default: ho(() => [
              po(te(gk), {
                class: "me-1",
                icon: te(Im)
              }, null, 8, ["icon"]),
              ok(" " + Du(B.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Ai("", !0)
        ])
      ], 512)), [
        [sk, e.active]
      ]);
    };
  }
}, pk = window.Vue.computed, hk = window.Vuex.useStore, wk = {
  name: "CxFavoriteList",
  components: {
    CxTranslationSuggestion: rc,
    MwCard: Re
  },
  setup() {
    me();
    const e = hk(), t = pk(() => e.state.suggestions.favorites || []), n = Na(), o = (a) => n(
      a.title,
      a.sourceLanguage,
      a.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: s } = Lc();
    return {
      favorites: t,
      startFavoriteTranslation: o,
      removeFavoriteSuggestion: s
    };
  }
}, fk = window.Vue.resolveDirective, _k = window.Vue.createElementVNode, vk = window.Vue.withDirectives, Sk = window.Vue.renderList, yk = window.Vue.Fragment, Di = window.Vue.openBlock, Ck = window.Vue.createElementBlock, Tu = window.Vue.resolveComponent, Bu = window.Vue.createBlock, Pu = window.Vue.withCtx, kk = window.Vue.createCommentVNode, xk = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
function bk(e, t, n, o, s, a) {
  const i = Tu("cx-translation-suggestion"), c = Tu("mw-card"), l = fk("i18n");
  return o.favorites.length ? (Di(), Bu(c, {
    key: 0,
    class: "cx-translation-list--favorites pa-0 mb-4"
  }, {
    header: Pu(() => [
      vk(_k("h3", xk, null, 512), [
        [l, void 0, "cx-suggestion-list-favorites-division"]
      ])
    ]),
    default: Pu(() => [
      (Di(!0), Ck(yk, null, Sk(o.favorites, (g, r) => (Di(), Bu(i, {
        key: `favorite-${r}`,
        suggestion: g,
        onClick: (u) => o.startFavoriteTranslation(g),
        onBookmark: (u) => o.removeFavoriteSuggestion(g)
      }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
    ]),
    _: 1
  })) : kk("", !0);
}
const $k = /* @__PURE__ */ L(wk, [["render", bk]]);
const Vk = {
  name: "CxHelpPanel",
  components: { MwIcon: Se },
  setup() {
    const e = Te();
    return { listItems: [
      {
        icon: pw,
        label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
      },
      {
        icon: Kh,
        label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats")
      },
      {
        icon: hw,
        label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
      }
    ] };
  }
}, Ak = window.Vue.resolveDirective, Os = window.Vue.createElementVNode, Dk = window.Vue.withDirectives, Ek = window.Vue.renderList, Lk = window.Vue.Fragment, Ei = window.Vue.openBlock, Li = window.Vue.createElementBlock, Tk = window.Vue.resolveComponent, Bk = window.Vue.createVNode, Pk = window.Vue.toDisplayString, Fk = { class: "cx-help-panel pa-4" }, Mk = { class: "cx-help-panel__item-list mt-6 ps-2" }, Nk = ["href"], Uk = ["textContent"];
function Ik(e, t, n, o, s, a) {
  const i = Tk("mw-icon"), c = Ak("i18n");
  return Ei(), Li("div", Fk, [
    Dk(Os("h5", null, null, 512), [
      [c, void 0, "cx-sx-dashboard-help-panel-title"]
    ]),
    Os("ul", Mk, [
      (Ei(!0), Li(Lk, null, Ek(o.listItems, (l, g) => (Ei(), Li("li", {
        key: g,
        class: "mt-4"
      }, [
        Os("a", {
          href: l.href,
          target: "_blank"
        }, [
          Bk(i, {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Os("span", {
            textContent: Pk(l.label)
          }, null, 8, Uk)
        ], 8, Nk)
      ]))), 128))
    ])
  ]);
}
const zk = /* @__PURE__ */ L(Vk, [["render", Ik]]);
const Rk = window.Vue.ref, Fu = window.Vue.computed, Ok = window.Vue.watch, Hk = {
  name: "CxStatsPanel",
  components: { MwCol: C, MwRow: P },
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", n = Fu(() => {
      var a, i;
      return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.count) || 0;
    }), o = Fu(
      () => {
        var a, i;
        return ((i = (a = e.stats) == null ? void 0 : a[t]) == null ? void 0 : i.delta) || 0;
      }
    ), s = Rk(null);
    return Ok(
      () => e.stats,
      () => {
        const a = e.stats, i = s.value.getContext("2d"), c = Object.keys(e.stats || {}).sort(), l = c.reduce(
          (S, V) => Math.max(S, a[V].delta),
          0
        ), g = c.map((S) => a[S].delta), r = s.value.getBoundingClientRect().width, u = s.value.getBoundingClientRect().height;
        s.value.width = r, s.value.height = u;
        const d = 4, m = 6, p = 50, h = (p - d) / l;
        let w = d;
        const f = Math.floor(
          (r - d) / (m + d)
        ), v = g.slice(
          Math.max(g.length - f, 0)
        );
        v.forEach((S, V) => {
          V === v.length - 1 && (i.fillStyle = "#36c");
          const A = p - S * h;
          i.fillRect(w, A, m, S * h), w += m + d;
        });
      }
    ), { canvasRef: s, thisMonthStats: o, total: n };
  }
}, jk = window.Vue.resolveDirective, bn = window.Vue.createElementVNode, Ti = window.Vue.withDirectives, Mu = window.Vue.toDisplayString, Nu = window.Vue.resolveComponent, Bi = window.Vue.withCtx, Pi = window.Vue.createVNode, qk = window.Vue.openBlock, Gk = window.Vue.createElementBlock, Wk = { class: "cx-stats-panel pa-4" }, Xk = ["textContent"], Kk = { class: "cx-stats-panel__monthly-stats-label" }, Yk = ["textContent"], Qk = { class: "cx-stats-panel__total-stats-label" }, Jk = {
  ref: "canvasRef",
  class: "cx-stats-panel__canvas"
};
function Zk(e, t, n, o, s, a) {
  const i = Nu("mw-col"), c = Nu("mw-row"), l = jk("i18n");
  return qk(), Gk("div", Wk, [
    Ti(bn("h5", null, null, 512), [
      [l, void 0, "cx-sx-dashboard-stats-panel-title"]
    ]),
    Pi(c, null, {
      default: Bi(() => [
        Pi(i, { class: "cx-stats-panel__monthly-stats" }, {
          default: Bi(() => [
            bn("h3", {
              textContent: Mu(o.thisMonthStats)
            }, null, 8, Xk),
            Ti(bn("h5", Kk, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
            ])
          ]),
          _: 1
        }),
        Pi(i, { class: "cx-stats-panel__total-stats" }, {
          default: Bi(() => [
            bn("h3", {
              textContent: Mu(o.total)
            }, null, 8, Yk),
            Ti(bn("h5", Qk, null, 512), [
              [l, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    bn("canvas", Jk, null, 512)
  ]);
}
const ex = /* @__PURE__ */ L(Hk, [["render", Zk]]);
const tx = {
  name: "ExperimentalSupportBanner",
  components: { MwCol: C, MwRow: P, MwCard: Re, MwIcon: Se },
  data: () => ({
    mwIconLabFlask: Ig,
    learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
    feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
  })
}, Hs = window.Vue.resolveComponent, js = window.Vue.createVNode, qs = window.Vue.withCtx, nx = window.Vue.resolveDirective, $n = window.Vue.createElementVNode, Gs = window.Vue.withDirectives, ox = window.Vue.openBlock, sx = window.Vue.createBlock, ax = { class: "complementary" }, ix = { class: "complementary mt-4" }, rx = ["href"], cx = { class: "complementary" }, lx = ["href"];
function ux(e, t, n, o, s, a) {
  const i = Hs("mw-icon"), c = Hs("mw-col"), l = Hs("mw-row"), g = Hs("mw-card"), r = nx("i18n");
  return ox(), sx(g, { class: "experimental-support-banner mb-1" }, {
    default: qs(() => [
      js(l, null, {
        default: qs(() => [
          js(c, {
            shrink: "",
            class: "experimental-support-banner__icon me-3"
          }, {
            default: qs(() => [
              js(i, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          js(c, null, {
            default: qs(() => [
              Gs($n("h5", null, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-title"]
              ]),
              Gs($n("p", ax, null, 512), [
                [r, void 0, "cx-dashboard-experimental-support-banner-description"]
              ]),
              $n("p", ix, [
                Gs($n("a", {
                  target: "_blank",
                  href: e.learnMoreUrl
                }, null, 8, rx), [
                  [r, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                ])
              ]),
              $n("p", cx, [
                Gs($n("a", {
                  target: "_blank",
                  href: e.feedbackUrl
                }, null, 8, lx), [
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
const dx = /* @__PURE__ */ L(tx, [["render", ux]]), { getUrlParam: gx } = G(), qm = () => {
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
  }, t = gx("campaign");
  return e[t];
}, mx = () => {
  const e = Na(), t = ut(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s
  } = G();
  return () => b(void 0, null, function* () {
    const a = qm() || "direct_preselect";
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
}, px = window.Vuex.useStore, Ia = () => {
  const e = px(), t = (o) => b(void 0, null, function* () {
    let s = yield nt.fetchTranslations(o);
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
        const { targetLanguage: g, targetTitle: r } = l, u = !!e.getters["mediawiki/getPage"](
          g,
          r
        );
        r && !u && e.commit(
          "mediawiki/addPage",
          new Yn({ title: r, pagelanguage: g })
        );
      });
  });
  return { fetchTranslationsByStatus: t, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    t("published"),
    t("draft")
  ]).catch((o) => {
    mw.log.error("[CX] Error while fetching translations", o);
  }) };
}, hx = window.Vuex.useStore, wx = () => {
  const e = hx();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const t = yield et.fetchFavorites();
    if (!t || !t.length)
      return;
    const n = {};
    for (const o of t)
      e.commit("suggestions/addFavoriteSuggestion", o), et.fetchSectionSuggestions(
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
}, fx = window.Vuex.useStore, _x = () => {
  const e = ut(), t = fx(), n = mx(), { fetchAllTranslations: o } = Ia(), s = bc(), a = wx(), { pageURLParameter: i, sectionURLParameter: c, draftURLParameter: l } = G();
  return () => b(void 0, null, function* () {
    if (yield Pm()(), i.value) {
      n({
        pageTitle: i.value,
        isDraftTranslation: l.value,
        sectionTitle: c.value
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
        return h || qm() || "direct";
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
}, Uu = window.Vue.computed, vx = window.Vue.ref, Sx = window.Vue.watch, yx = window.Vue.watchEffect, Cx = window.Vuex.useStore, kx = ["suggestions", "draft", "published"], xx = () => {
  const e = Cx(), { getUrlParam: t, setUrlParam: n } = G(), o = t("active-list"), s = vx(null);
  if (kx.includes(o))
    s.value = o;
  else {
    const a = Uu(
      () => e.state.translator.translationsLoaded.draft
    ), i = Uu(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", Sx(a, (c) => {
      c && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return yx(() => {
    n("active-list", s.value), window.scrollTo(0, 0);
  }), s;
}, bx = window.Vue.computed, $x = () => {
  const e = Te();
  return bx(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Jh,
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
        icon: Qh,
        type: "text"
      }
    }
  ]);
};
const Ws = window.Vue.openBlock, Fi = window.Vue.createBlock, Mi = window.Vue.createCommentVNode, ae = window.Vue.unref, he = window.Vue.createVNode, Vx = window.Vue.toDisplayString, Ax = window.Vue.createTextVNode, yt = window.Vue.withCtx, Dx = window.Vue.isRef, Ex = window.Vue.createElementBlock, Lx = window.Vue.computed, Tx = window.Vuex.useStore, Bx = window.Codex.CdxButton, Px = window.Codex.CdxIcon, Fx = {
  __name: "CXDashboard",
  setup(e) {
    const t = me(), n = () => t.push({ name: "sx-article-search" });
    _x()();
    const s = Tx();
    s.dispatch("translator/fetchTranslatorStats");
    const a = Lx(() => s.state.translator.translatorStats), i = xx(), c = $x();
    return (l, g) => (Ws(), Ex("div", null, [
      l.$incompleteVersion ? (Ws(), Fi(dx, {
        key: 0,
        class: "col-mobile-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2 mb-4"
      })) : Mi("", !0),
      he(ae(P), { class: "ma-0 py-4" }, {
        default: yt(() => [
          he(ae(Bx), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-desktop-3 col-offset-desktop-2 col-offset-tablet-3 col-mobile-12",
            onClick: n
          }, {
            default: yt(() => [
              he(ae(Px), {
                class: "me-1",
                icon: ae(ac)
              }, null, 8, ["icon"]),
              Ax(" " + Vx(l.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      he(ae(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: yt(() => [
          l.$mwui.breakpoint.tabletAndUp ? (Ws(), Fi(ae(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: yt(() => [
              he(ae(Jo), {
                id: "dashboard-list-selector--desktop",
                items: ae(c),
                active: ae(i),
                onSelect: g[0] || (g[0] = (r) => i.value = r)
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Mi("", !0),
          he(ae(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: yt(() => [
              he($k),
              he(mk, {
                active: ae(i) === "suggestions"
              }, null, 8, ["active"]),
              he(bu, {
                "translation-status": "draft",
                "active-status": ae(i)
              }, null, 8, ["active-status"]),
              he(bu, {
                "translation-status": "published",
                "active-status": ae(i)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          he(ae(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: yt(() => [
              he(ae(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: yt(() => [
                  he(ae(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: yt(() => [
                      he(ex, { stats: a.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  he(ae(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: yt(() => [
                      he(zk)
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
      l.$mwui.breakpoint.mobile ? (Ws(), Fi(ae(lh), {
        key: 1,
        active: ae(i),
        "onUpdate:active": g[1] || (g[1] = (r) => Dx(i) ? i.value = r : null),
        items: ae(c)
      }, null, 8, ["active", "items"])) : Mi("", !0)
    ]));
  }
}, Mx = {
  name: "DashboardView",
  components: { CxDashboard: Fx }
}, Nx = window.Vue.resolveComponent, Ux = window.Vue.createVNode, Ix = window.Vue.openBlock, zx = window.Vue.createElementBlock, Rx = { class: "cx-translation-dashboard" };
function Ox(e, t, n, o, s, a) {
  const i = Nx("cx-dashboard");
  return Ix(), zx("main", Rx, [
    Ux(i, { class: "mb-4 pb-12" })
  ]);
}
const Iu = /* @__PURE__ */ L(Mx, [["render", Ox]]), Hx = window.Vue.computed, jx = window.Vuex.useStore, Oe = () => {
  const e = jx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = G();
  return { sectionSuggestion: Hx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Vn = window.Vue.computed, qx = () => {
  const { sectionSuggestion: e } = Oe(), { targetLanguageURLParameter: t } = G(), { currentTranslation: n } = cs(), o = Vn(
    () => {
      var d, m, p;
      return (p = (m = (d = e.value) == null ? void 0 : d.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = Vn(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.missingSectionsCount;
    }
  ), a = Vn(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: c } = Et(), l = Vn(() => i ? q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
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
  }, r = Vn(() => {
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
  }), u = Vn(
    () => {
      var d;
      return !i.value || ((d = e.value) == null ? void 0 : d.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: g,
    isProgressiveButton: u,
    targetArticlePath: l
  };
}, Gm = () => new URLSearchParams(location.search).get("force-quick-tutorial");
function Gx(e) {
  return e.$el = $(e), e;
}
function Wx(e, t, n, o) {
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
function Xx() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function Kx(e, t) {
  return b(this, null, function* () {
    yield Tc(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = Gx(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const Yx = window.Vue.computed, Qx = window.Vue.onMounted, Jx = window.Vue.ref;
function Zx(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const e8 = {
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
    const n = Jx(null);
    let o = null;
    const s = Yx(() => o.getHtml()), a = () => {
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
    return Qx(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = Zx;
      const r = yield Kx(l, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = Wx(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = Xx, o.focus();
    })), { sxeditor: n };
  }
}, cc = window.Vue.createElementVNode, t8 = window.Vue.openBlock, n8 = window.Vue.createElementBlock, o8 = ["lang", "dir"], s8 = /* @__PURE__ */ cc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ cc("div", { class: "toolbar" })
], -1), a8 = ["lang", "dir"];
function i8(e, t, n, o, s, a) {
  return t8(), n8("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    s8,
    cc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, a8)
  ], 8, o8);
}
const r8 = /* @__PURE__ */ L(e8, [["render", i8]]);
function Tc() {
  return mw.loader.using("mw.cx3.ve");
}
const c8 = window.Vuex.useStore, Wm = () => {
  const e = c8();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Tc(), new Promise((s) => {
      setTimeout(() => {
        const a = tm.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, l8 = window.Vuex.useStore, Bc = () => {
  const e = l8();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield ss.fetchPageContent(
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
}, zu = window.Vue.computed, u8 = window.Vuex.useStore, dt = () => {
  const e = u8(), { sectionSuggestion: t } = Oe(), { currentTranslation: n } = cs(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = G(), i = zu(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = zu(() => {
    var g, r;
    const l = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      l
    );
  });
  return { currentSourcePage: i, currentTargetPage: c };
}, d8 = window.Vuex.useStore, Pc = () => {
  const e = d8(), { currentSourcePage: t } = dt(), n = Wm(), o = Bc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c
  } = G(), l = (u, d) => b(void 0, null, function* () {
    u() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      i.value,
      c.value
    ), yield n(
      a.value,
      c.value
    ), e.commit("application/decreaseTranslationDataLoadingCounter")), d();
  });
  return {
    selectPageSectionByIndex: (u) => {
      const d = () => {
        var p;
        return (p = t.value.sections) == null ? void 0 : p[u];
      };
      return l(d, () => {
        const p = d();
        u === 0 ? p.originalTitle = t.value.title : s(p.originalTitle);
      });
    },
    selectPageSectionByTitle: (u) => l(() => t.value.getSectionByTitle(u), () => {
      s(u);
    })
  };
}, Fc = () => (e, t, n, o = {}) => {
  q.setCXToken(e, t, n), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, g8 = (e, t, n, o) => b(void 0, null, function* () {
  var c, l, g;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((l = t.mt) == null ? void 0 : l.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, i = yield om(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), m8 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, p8 = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return g8(e, t, n, o);
  m8(e, t);
}), h8 = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const l = o.find(
          (r) => r.subSectionId === c.id
        );
        if (!l)
          continue;
        const g = p8(
          c,
          l,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, w8 = { restoreCorporaDraft: h8 }, fo = window.Vue.computed, f8 = window.Vuex.useStore, W = () => {
  const e = f8(), { currentSourcePage: t, currentTargetPage: n } = dt(), { currentMTProvider: o } = U(e), { sectionURLParameter: s } = G(), a = fo(() => {
    var r, u;
    return s.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = fo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), c = fo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), l = fo(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = fo(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: l,
    targetPageTitleForPublishing: g
  };
}, _8 = window.Vuex.useStore, Xm = () => {
  const e = _8();
  return (t, n) => {
    if (!e.getters["mediawiki/getLanguageTitleGroup"](t, n))
      return ss.fetchLanguageTitles(t, n).then(
        (o) => o && e.commit("mediawiki/addLanguageTitleGroup", o)
      );
  };
}, v8 = window.Vuex.useStore, Mc = () => {
  const e = ut(), t = v8(), n = me(), { currentSourcePage: o } = dt(), { sourceLanguage: s, targetLanguage: a } = U(t), i = OS(), c = Wm(), { isDesktop: l } = rs(), g = Fc(), r = Bc(), { sourceSection: u } = W(), d = Xm();
  return (m) => b(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: p,
      targetLanguage: h,
      sourceTitle: w,
      targetTitle: f,
      pageRevision: v,
      isLeadSectionTranslation: S
    } = m;
    if (l.value) {
      const E = {};
      S || (E.sourcesection = m.sourceSectionTitle), g(
        s.value,
        a.value,
        w,
        E
      );
      return;
    }
    q.unsetCXToken(
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
      v
    ), yield c(s.value, w), yield d(s.value, w), m.restored || (yield nt.fetchTranslationUnits(m.translationId).then(
      (E) => w8.restoreCorporaDraft(
        o.value,
        f,
        a,
        E
      )
    ).then(() => m.restored = !0));
    let A;
    m.isLeadSectionTranslation ? (u.value.originalTitle = m.sourceTitle, A = m.targetTitle) : A = m.targetSectionTitle, u.value.translatedTitle = A, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, S8 = window.Vue.ref, y8 = window.Vuex.useStore, C8 = () => {
  const e = me(), t = y8(), { isDesktop: n } = rs(), {
    pageURLParameter: o,
    sectionURLParameter: s
  } = G(), { sourceLanguage: a, targetLanguage: i } = U(t), { targetPageExists: c } = Et(), { selectPageSectionByIndex: l, selectPageSectionByTitle: g } = Pc(), r = Fc(), u = () => b(void 0, null, function* () {
    n.value ? r(
      a.value,
      i.value,
      o.value,
      { sourcesection: s.value }
    ) : (yield g(s.value), e.push({ name: "sx-content-comparator", query: { force: !0 } }));
  }), d = Mc(), m = S8(!1), { currentTranslation: p } = cs(), h = () => {
    p.value ? p.value.isArticleTranslation ? m.value = !0 : d(p.value) : s.value ? u() : c.value ? e.push({ name: "sx-section-selector" }) : w();
  }, w = () => b(void 0, null, function* () {
    n.value ? r(
      a.value,
      i.value,
      o.value
    ) : (l(0), Gm() || !t.getters["translator/userHasSectionTranslations"] ? e.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : e.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  });
  return {
    startNewTranslation: w,
    handlePrimaryButtonClick: h,
    translationConfirmationDialogOn: m
  };
};
const Y = window.Vue.unref, k8 = window.Vue.resolveDirective, Xs = window.Vue.createElementVNode, Ru = window.Vue.withDirectives, _o = window.Vue.toDisplayString, vo = window.Vue.openBlock, Ni = window.Vue.createElementBlock, Ui = window.Vue.createCommentVNode, We = window.Vue.createVNode, Xe = window.Vue.withCtx, Ii = window.Vue.createTextVNode, x8 = window.Vue.withModifiers, Ou = window.Vue.createBlock, b8 = { class: "sx-translation-confirmer-body pb-4" }, $8 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, V8 = ["textContent"], A8 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, D8 = ["href"], E8 = ["textContent"], zi = window.Vue.computed, L8 = window.Vue.inject, T8 = window.Vue.watchEffect, B8 = window.Vuex.useStore, Ri = window.Codex.CdxButton, P8 = window.Codex.CdxIcon, F8 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = me(), o = B8();
    L8("colors");
    const { sectionSuggestion: s } = Oe(), { targetLanguageAutonym: a } = U(o), { sectionURLParameter: i } = G(), {
      startNewTranslation: c,
      handlePrimaryButtonClick: l,
      translationConfirmationDialogOn: g
    } = C8(), r = t;
    T8(() => {
      g.value && (r("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: u,
      getActionButtonLabel: d,
      isProgressiveButton: m,
      targetArticlePath: p
    } = qx(), h = Te(), w = zi(
      () => h.i18n(d(!!i.value))
    ), { isDesktop: f } = rs(), v = zi(
      () => h.i18n(...u.value)
    ), S = () => n.push({ name: "sx-section-selector" }), V = zi(() => {
      var E, F;
      return i.value && !!((F = (E = s.value) == null ? void 0 : E.sourceSections) != null && F.length);
    }), { targetPageExists: A } = Et();
    return (E, F) => {
      const D = k8("i18n");
      return vo(), Ni("section", b8, [
        Y(i) ? (vo(), Ni("section", $8, [
          Ru(Xs("h6", null, null, 512), [
            [D, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
          ]),
          Xs("h5", {
            class: "ma-0",
            textContent: _o(Y(i))
          }, null, 8, V8)
        ])) : Y(A) ? (vo(), Ni("section", A8, [
          We(Y(P), {
            class: "sx-translation-confirmer__translation-status ma-0 pb-2",
            justify: "between"
          }, {
            default: Xe(() => [
              Ru(We(Y(C), {
                tag: "h5",
                class: "ma-0 pe-2"
              }, null, 512), [
                [D, [Y(a)], "cx-sx-existing-translation-status"]
              ]),
              We(Y(C), { shrink: "" }, {
                default: Xe(() => [
                  Xs("a", {
                    href: Y(p),
                    target: "_blank"
                  }, [
                    We(Y(P8), {
                      class: "sx-translation-confirmer__existing-target-article-link-icon",
                      size: "small",
                      icon: Y(Vc)
                    }, null, 8, ["icon"])
                  ], 8, D8)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          We(Y(P), { class: "ma-0" }, {
            default: Xe(() => [
              We(Y(C), null, {
                default: Xe(() => [
                  Xs("span", {
                    textContent: _o(v.value)
                  }, null, 8, E8)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : Ui("", !0),
        We(Y(P), {
          class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
          justify: "center"
        }, {
          default: Xe(() => [
            V.value ? (vo(), Ou(Y(C), {
              key: 0,
              shrink: "",
              class: "me-4"
            }, {
              default: Xe(() => [
                We(Y(Ri), {
                  size: "large",
                  weight: "quiet",
                  action: "progressive",
                  onClick: x8(S, ["stop"])
                }, {
                  default: Xe(() => [
                    Ii(_o(E.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })) : Ui("", !0),
            Y(A) && Y(f) ? (vo(), Ou(Y(C), {
              key: 1,
              shrink: "",
              class: "me-4"
            }, {
              default: Xe(() => [
                We(Y(Ri), {
                  size: "large",
                  onClick: Y(c)
                }, {
                  default: Xe(() => [
                    Ii(_o(E.$i18n(
                      "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                    )), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })) : Ui("", !0),
            We(Y(C), { shrink: "" }, {
              default: Xe(() => [
                We(Y(Ri), {
                  weight: "primary",
                  size: "large",
                  action: Y(m) ? "progressive" : "default",
                  onClick: Y(l)
                }, {
                  default: Xe(() => [
                    Ii(_o(w.value), 1)
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
const Hu = window.Vue.computed, M8 = window.Vuex.useStore, N8 = {
  name: "SxArticleLanguageSelector",
  components: {
    SxTranslationListLanguageSelector: Ec
  },
  setup() {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = ls(), n = M8(), { sourceLanguage: o, targetLanguage: s } = U(n), { currentLanguageTitleGroup: a } = Et(), i = Hu(
      () => {
        var u;
        return ((u = a.value) == null ? void 0 : u.titles.map((d) => d.lang)) || [];
      }
    ), c = Hu(
      () => t.value || e.value
    ), l = jS();
    return {
      availableSourceLanguages: i,
      targetLanguages: c,
      onSourceLanguageSelected: (u) => l(u, s.value),
      onTargetLanguageSelected: (u) => l(o.value, u),
      sourceLanguage: o,
      targetLanguage: s
    };
  }
}, U8 = window.Vue.resolveComponent, I8 = window.Vue.openBlock, z8 = window.Vue.createBlock;
function R8(e, t, n, o, s, a) {
  const i = U8("sx-translation-list-language-selector");
  return I8(), z8(i, {
    class: "sx-article-language-selector",
    "source-languages": o.availableSourceLanguages,
    "target-languages": o.targetLanguages,
    "selected-source-language": o.sourceLanguage,
    "selected-target-language": o.targetLanguage,
    "onUpdate:selectedSourceLanguage": o.onSourceLanguageSelected,
    "onUpdate:selectedTargetLanguage": o.onTargetLanguageSelected
  }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "onUpdate:selectedSourceLanguage", "onUpdate:selectedTargetLanguage"]);
}
const Km = /* @__PURE__ */ L(N8, [["render", R8]]);
const Me = window.Vue.unref, ju = window.Vue.toDisplayString, Ks = window.Vue.createElementVNode, zt = window.Vue.createVNode, An = window.Vue.withCtx, O8 = window.Vue.resolveDirective, H8 = window.Vue.withDirectives, j8 = window.Vue.openBlock, q8 = window.Vue.createBlock, G8 = ["textContent"], W8 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, X8 = ["textContent"], K8 = window.Codex.CdxButton, Oi = window.Codex.CdxIcon, rn = window.Vue.computed, Y8 = window.Vuex.useStore, Q8 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = Y8(), { currentSourcePage: n } = dt(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = G(), i = rn(() => t.state.suggestions.favorites || []), c = rn(
      () => i.value.some(
        (f) => a.value === f.title && o.value === f.sourceLanguage && s.value === f.targetLanguage
      )
    ), { markFavoriteSuggestion: l, removeFavoriteSuggestion: g } = Lc(), r = () => l(
      a.value,
      o.value,
      s.value
    ), u = () => g(
      new qn({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), d = rn(
      () => c.value ? fy : _y
    ), m = rn(
      () => c.value ? u : r
    ), p = rn(
      () => q.getPageUrl(o.value || "", a.value || "")
    ), h = rn(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.langLinksCount;
    }), w = rn(
      () => {
        var f;
        return Object.values(((f = n.value) == null ? void 0 : f.pageviews) || {}).reduce(
          (v, S) => v + S,
          0
        );
      }
    );
    return (f, v) => {
      const S = O8("i18n");
      return j8(), q8(Me(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: An(() => [
          zt(Me(C), null, {
            default: An(() => [
              zt(Me(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: An(() => [
                  zt(Me(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: p.value,
                    target: "_blank"
                  }, {
                    default: An(() => [
                      Ks("h5", {
                        class: "ma-0 me-1",
                        textContent: ju(Me(a))
                      }, null, 8, G8),
                      zt(Me(Oi), {
                        size: "x-small",
                        icon: Me(Vc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  zt(Me(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: An(() => [
                      zt(Me(K8), {
                        class: "px-0",
                        weight: "quiet",
                        action: c.value ? "progressive" : "default",
                        onClick: m.value
                      }, {
                        default: An(() => [
                          zt(Me(Oi), { icon: d.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Ks("p", W8, [
                zt(Me(Oi), {
                  icon: Me(Cy),
                  size: "small",
                  class: "me-1"
                }, null, 8, ["icon"]),
                Ks("span", {
                  class: "pe-3",
                  textContent: ju(h.value)
                }, null, 8, X8),
                H8(Ks("span", null, null, 512), [
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
const J8 = window.Vue.resolveDirective, cn = window.Vue.createElementVNode, Ys = window.Vue.withDirectives, Z8 = window.Vue.toDisplayString, eb = window.Vue.createTextVNode, Hi = window.Vue.unref, ji = window.Vue.withCtx, qi = window.Vue.openBlock, Gi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const tb = { class: "pa-4" }, nb = { class: "flex pt-2" }, ob = window.Codex.CdxButton, sb = window.Vue.ref, ab = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Mc(), a = sb(!1), { currentTranslation: i } = cs(), c = () => b(this, null, function* () {
      a.value = !0;
      let l = !1;
      try {
        l = yield nt.splitTranslation(
          i.value.translationId
        );
      } catch (g) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          g
        );
      }
      a.value = !1, l && (s(i.value), o());
    });
    return (l, g) => {
      const r = J8("i18n");
      return qi(), Gi(Hi(ot), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": l.$mwui.colors.gray700,
        "min-height": "unset",
        title: l.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: ji(() => [
          cn("div", nb, [
            a.value ? (qi(), Gi(Hi(tt), { key: 1 })) : (qi(), Gi(Hi(ob), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: ji(() => [
                eb(Z8(l.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: ji(() => [
          cn("div", tb, [
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
const qu = window.Vue.resolveDirective, Qs = window.Vue.createElementVNode, Gu = window.Vue.withDirectives, Rt = window.Vue.unref, Js = window.Vue.withCtx, Ct = window.Vue.createVNode, Wi = window.Vue.openBlock, Wu = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ib = window.Vue.createBlock, rb = { class: "sx-translation-confirmer" }, cb = { class: "mb-0" }, lb = { class: "sx-translation-confirmer__article-image flex justify-center" }, ub = ["src"], db = { class: "ma-3" }, gb = window.Vue.computed;
window.Vue.onBeforeMount;
window.Vue.onMounted;
const mb = window.Vue.ref, pb = window.Vuex.useStore, hb = {
  __name: "SXTranslationConfirmer",
  props: {
    eventSource: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, n = pb(), { currentSourcePage: o } = dt(), { previousRoute: s } = U(n), {
      sourceLanguageURLParameter: a,
      targetLanguageURLParameter: i,
      pageURLParameter: c,
      sectionURLParameter: l,
      clearURLParameters: g
    } = G(), r = gb(
      () => {
        var v, S;
        return (S = (v = o.value) == null ? void 0 : v.image) == null ? void 0 : S.source;
      }
    ), u = ut(), { fetchTranslationsByStatus: d } = Ia(), m = Xm(), p = Cc();
    d("draft"), l.value && p(
      a.value,
      i.value,
      c.value,
      !1
    ), m(a.value, c.value), u({
      event_type: "dashboard_translation_start",
      event_source: t.eventSource,
      translation_source_language: a.value,
      translation_target_language: i.value
    }), Tc(), n.dispatch("suggestions/fetchAppendixSectionTitles", i.value);
    const h = me(), w = () => {
      g(), h.push({ name: s.value });
    }, f = mb(!1);
    return (v, S) => {
      const V = qu("i18n"), A = qu("i18n-html");
      return Wi(), Wu("section", rb, [
        Ct(Rt(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Js(() => [
            Ct(Rt(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Js(() => [
                Gu(Qs("h5", cb, null, 512), [
                  [V, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Ct(Rt(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Js(() => [
                Ct(Rt(be), {
                  class: "pa-0",
                  type: "icon",
                  icon: Rt(Sn),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Qs("div", lb, [
          r.value ? (Wi(), Wu("img", {
            key: 0,
            src: r.value
          }, null, 8, ub)) : (Wi(), ib(Rt(Se), {
            key: 1,
            size: "120",
            icon: Rt(gc),
            "icon-color": v.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Ct(Q8),
        Ct(Km),
        Ct(F8, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (E) => f.value = !0)
        }),
        Ct(Rt(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Js(() => [
            Qs("p", db, [
              Gu(Qs("small", null, null, 512), [
                [A, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Ct(ab, {
          modelValue: f.value,
          "onUpdate:modelValue": S[1] || (S[1] = (E) => f.value = E)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const wb = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: hb
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
}, fb = window.Vue.resolveComponent, _b = window.Vue.createVNode, vb = window.Vue.normalizeClass, Sb = window.Vue.openBlock, yb = window.Vue.createElementBlock;
function Cb(e, t, n, o, s, a) {
  const i = fb("sx-translation-confirmer");
  return Sb(), yb("main", {
    class: vb(["sx-translation-confirmer-view", a.classes])
  }, [
    _b(i, { "event-source": n.eventSource }, null, 8, ["event-source"])
  ], 2);
}
const kb = /* @__PURE__ */ L(wb, [["render", Cb]]);
const xb = window.Vue.toDisplayString, Xu = window.Vue.unref, bb = window.Vue.createVNode, $b = window.Vue.createTextVNode, Vb = window.Vue.createElementVNode, Ab = window.Vue.openBlock, Db = window.Vue.createElementBlock, Eb = { class: "sx-section-selector-view-article-item ma-0" }, Lb = ["href"], Tb = window.Codex.CdxIcon, Bb = {
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
    return (t, n) => (Ab(), Db("li", Eb, [
      Vb("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        $b(xb(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        bb(Xu(Tb), {
          size: "x-small",
          icon: Xu(Vc)
        }, null, 8, ["icon"])
      ], 8, Lb)
    ]));
  }
};
const Pb = window.Vue.resolveDirective, Zs = window.Vue.createElementVNode, Xi = window.Vue.withDirectives, ln = window.Vue.unref, Fb = window.Vue.toDisplayString, ea = window.Vue.withCtx, So = window.Vue.createVNode, Mb = window.Vue.openBlock, Nb = window.Vue.createElementBlock, Ub = { class: "sx-section-selector__header pa-4" }, Ib = { class: "sx-section-selector__header-text ma-0" }, zb = ["textContent"], Rb = { class: "pt-0 ma-0" }, Ob = { class: "ma-0" }, Hb = window.Codex.CdxButton, jb = window.Codex.CdxIcon, qb = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Oe();
    return (n, o) => {
      const s = Pb("i18n");
      return Mb(), Nb("div", Ub, [
        So(ln(P), { class: "ma-0 pb-3" }, {
          default: ea(() => [
            So(ln(C), null, {
              default: ea(() => {
                var a;
                return [
                  Xi(Zs("h6", Ib, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Zs("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: Fb((a = ln(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, zb)
                ];
              }),
              _: 1
            }),
            So(ln(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ea(() => [
                So(ln(Hb), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ea(() => [
                    So(ln(jb), { icon: ln(Ua) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Xi(Zs("h4", Rb, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Xi(Zs("p", Ob, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, Gb = window.Vue.renderList, Wb = window.Vue.Fragment, Ki = window.Vue.openBlock, Ku = window.Vue.createElementBlock, Xb = window.Vue.renderSlot, ta = window.Vue.unref, Yu = window.Vue.createVNode, Qu = window.Vue.withCtx, Kb = window.Vue.createBlock, Yb = { class: "sx-section-selector__sections-list ma-0 pa-0" }, Qb = window.Codex.CdxButton, Jb = window.Codex.CdxIcon, Ym = {
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
    return (t, n) => (Ki(), Ku("ul", Yb, [
      (Ki(!0), Ku(Wb, null, Gb(e.sections, (o) => (Ki(), Kb(ta(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Qu(() => [
          Yu(ta(Qb), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Qu(() => [
              Xb(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Yu(ta(Jb), { icon: ta(ms) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, Zb = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const e2 = window.Vue.resolveDirective, na = window.Vue.createElementVNode, Yi = window.Vue.withDirectives, Ke = window.Vue.unref, Ju = window.Vue.toDisplayString, Dn = window.Vue.withCtx, Qi = window.Vue.openBlock, Zu = window.Vue.createBlock;
window.Vue.createCommentVNode;
const yo = window.Vue.createVNode, t2 = window.Vue.createTextVNode, n2 = window.Vue.createElementBlock, o2 = { class: "sx-section-selector__missing-sections py-2" }, s2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, a2 = ["lang", "dir", "textContent"], ed = window.Vue.computed, i2 = window.Codex.CdxButton, r2 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Oe(), n = ed(
      () => {
        var s;
        return O.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = ed(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = e2("i18n");
      return Qi(), n2("section", o2, [
        Yi(na("h4", s2, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Qi(), Zu(Ke(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Dn(() => [
            yo(Ke(C), {
              class: "py-6 justify-center",
              innerHTML: Ke(Zb)
            }, null, 8, ["innerHTML"]),
            yo(Ke(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Dn(() => [
                Yi(na("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            yo(Ke(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Dn(() => [
                Yi(na("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            yo(Ke(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Dn(() => [
                yo(Ke(i2), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: Dn(() => [
                    t2(Ju(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Qi(), Zu(Ym, {
          key: 0,
          sections: Ke(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: Dn(({ sourceSection: c }) => {
            var l, g;
            return [
              na("h5", {
                class: "ma-0",
                lang: (l = Ke(t)) == null ? void 0 : l.sourceLanguage,
                dir: Ke(O.getDir)((g = Ke(t)) == null ? void 0 : g.sourceLanguage),
                textContent: Ju(c)
              }, null, 8, a2)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const c2 = window.Vue.computed, l2 = {
  name: "SxSectionSelectorSectionListPresent",
  components: {
    SxSectionSelectorSectionList: Ym
  },
  emits: ["select-section"],
  setup() {
    const { sectionSuggestion: e } = Oe(), t = c2(
      () => {
        var n;
        return O.getAutonym((n = e.value) == null ? void 0 : n.targetLanguage);
      }
    );
    return {
      mwIconArrowForward: lc,
      getAutonym: O.getAutonym,
      getDir: O.getDir,
      suggestion: e,
      targetLanguageAutonym: t
    };
  }
}, u2 = window.Vue.resolveDirective, oa = window.Vue.createElementVNode, d2 = window.Vue.withDirectives, td = window.Vue.toDisplayString, g2 = window.Vue.resolveComponent, m2 = window.Vue.withCtx, p2 = window.Vue.createVNode, h2 = window.Vue.openBlock, w2 = window.Vue.createElementBlock, f2 = { class: "sx-section-selector__present-sections py-2" }, _2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, v2 = { class: "sx-section-selector__present-section-button-content" }, S2 = ["lang", "dir", "textContent"], y2 = ["lang", "dir", "textContent"];
function C2(e, t, n, o, s, a) {
  var l;
  const i = g2("sx-section-selector-section-list"), c = u2("i18n");
  return h2(), w2("section", f2, [
    d2(oa("h4", _2, null, 512), [
      [c, [
        o.targetLanguageAutonym
      ], "cx-sx-section-selector-present-sections-title"]
    ]),
    p2(i, {
      sections: ((l = o.suggestion) == null ? void 0 : l.orderedPresentSections) || [],
      onSelectSection: t[0] || (t[0] = (g) => e.$emit("select-section", g))
    }, {
      default: m2(({ sourceSection: g, targetSection: r }) => {
        var u, d, m, p;
        return [
          oa("div", v2, [
            oa("h5", {
              class: "sx-section-selector__present-section-button-source",
              lang: (u = o.suggestion) == null ? void 0 : u.sourceLanguage,
              dir: o.getDir((d = o.suggestion) == null ? void 0 : d.sourceLanguage),
              textContent: td(g)
            }, null, 8, S2),
            oa("h6", {
              class: "sx-section-selector__present-section-button-target",
              lang: (m = o.suggestion) == null ? void 0 : m.targetLanguage,
              dir: o.getDir((p = o.suggestion) == null ? void 0 : p.targetLanguage),
              textContent: td(r)
            }, null, 8, y2)
          ])
        ];
      }),
      _: 1
    }, 8, ["sections"])
  ]);
}
const k2 = /* @__PURE__ */ L(l2, [["render", C2]]);
const Ji = window.Vue.computed, x2 = window.Vuex.useStore, b2 = {
  name: "SxSectionSelector",
  components: {
    SxSectionSelectorSectionListPresent: k2,
    SxSectionSelectorSectionListMissing: r2,
    SxSectionSelectorHeader: qb,
    SxSectionSelectorViewArticleItem: Bb,
    MwRow: P,
    MwCol: C,
    MwIcon: Se,
    SxArticleLanguageSelector: Km
  },
  setup() {
    const e = x2(), { sectionSuggestion: t } = Oe(), {
      sourceLanguage: n,
      targetLanguage: o,
      sourceLanguageAutonym: s,
      targetLanguageAutonym: a
    } = U(e), i = Ji(
      () => {
        var v;
        return q.getPageUrl(n.value, (v = t.value) == null ? void 0 : v.sourceTitle);
      }
    ), c = Ji(
      () => {
        var v;
        return q.getPageUrl(o.value, (v = t.value) == null ? void 0 : v.targetTitle);
      }
    ), l = Ji(() => [
      { path: i.value, autonym: s.value },
      { path: c.value, autonym: a.value }
    ]), g = me(), { clearURLParameters: r, setSectionURLParam: u } = G(), d = () => {
      r(), g.push({ name: "dashboard" });
    }, m = Mc(), { selectPageSectionByTitle: p } = Pc(), { isDesktop: h } = rs(), w = Fc();
    return {
      goToDashboard: d,
      mwIconRobot: aw,
      mwIconLabFlask: Ig,
      selectSection: (v) => {
        if (h.value) {
          w(
            n.value,
            o.value,
            t.value.sourceTitle,
            { sourcesection: v }
          );
          return;
        }
        const S = e.getters["translator/getDraftTranslation"](
          t.value.sourceTitle,
          v,
          n.value,
          o.value
        );
        S ? m(S) : (p(v), u(v), g.push({ name: "sx-content-comparator" }));
      },
      suggestion: t,
      targetLanguageAutonym: a,
      viewArticleItems: l
    };
  }
}, Ot = window.Vue.resolveComponent, kt = window.Vue.createVNode, $2 = window.Vue.resolveDirective, st = window.Vue.createElementVNode, Co = window.Vue.withDirectives, V2 = window.Vue.renderList, A2 = window.Vue.Fragment, Zi = window.Vue.openBlock, nd = window.Vue.createElementBlock, D2 = window.Vue.createBlock, od = window.Vue.toDisplayString, sd = window.Vue.createTextVNode, er = window.Vue.withCtx, E2 = { class: "sx-section-selector" }, L2 = { class: "sx-section-selector__body" }, T2 = { class: "py-2" }, B2 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, P2 = { class: "ma-0 pa-0" }, F2 = { class: "sx-section-selector__additional-consideration-title" }, M2 = { href: "#" }, N2 = { class: "sx-section-selector__additional-consideration-title" }, U2 = { href: "#" };
function I2(e, t, n, o, s, a) {
  const i = Ot("sx-section-selector-header"), c = Ot("sx-article-language-selector"), l = Ot("sx-section-selector-section-list-missing"), g = Ot("sx-section-selector-section-list-present"), r = Ot("sx-section-selector-view-article-item"), u = Ot("mw-icon"), d = Ot("mw-col"), m = Ot("mw-row"), p = $2("i18n");
  return Zi(), nd("section", E2, [
    kt(i, { onClose: o.goToDashboard }, null, 8, ["onClose"]),
    st("section", L2, [
      kt(c),
      kt(l, {
        onSelectSection: o.selectSection,
        onClose: o.goToDashboard
      }, null, 8, ["onSelectSection", "onClose"]),
      kt(g, { onSelectSection: o.selectSection }, null, 8, ["onSelectSection"]),
      st("section", T2, [
        Co(st("h4", B2, null, 512), [
          [p, [
            o.targetLanguageAutonym
          ], "cx-sx-section-selector-more-details-title"]
        ]),
        st("ul", P2, [
          (Zi(!0), nd(A2, null, V2(o.viewArticleItems, (h, w) => (Zi(), D2(r, {
            key: `view-article-item-${w}`,
            path: h.path,
            autonym: h.autonym
          }, null, 8, ["path", "autonym"]))), 128))
        ])
      ]),
      kt(m, { class: "sx-section-selector__additional-considerations ma-0" }, {
        default: er(() => [
          kt(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 pt-5 pb-4"
          }, {
            default: er(() => [
              st("h6", F2, [
                kt(u, {
                  icon: o.mwIconRobot,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                sd(" " + od(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
              ]),
              Co(st("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
              ]),
              Co(st("a", M2, null, 512), [
                [p, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
              ])
            ]),
            _: 1
          }),
          kt(d, {
            cols: "12",
            tablet: "6",
            class: "px-4 py-5"
          }, {
            default: er(() => [
              st("h6", N2, [
                kt(u, {
                  icon: o.mwIconLabFlask,
                  class: "pe-2"
                }, null, 8, ["icon"]),
                sd(" " + od(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
              ]),
              Co(st("p", null, null, 512), [
                [p, void 0, "cx-sx-section-selector-unsupported-sections-description"]
              ]),
              Co(st("a", U2, null, 512), [
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
const z2 = /* @__PURE__ */ L(b2, [["render", I2]]);
const R2 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: z2
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, O2 = window.Vue.resolveComponent, H2 = window.Vue.createVNode, j2 = window.Vue.normalizeClass, q2 = window.Vue.openBlock, G2 = window.Vue.createElementBlock;
function W2(e, t, n, o, s, a) {
  const i = O2("sx-section-selector");
  return q2(), G2("main", {
    class: j2(["sx-section-selector-view", a.classes])
  }, [
    H2(i)
  ], 2);
}
const X2 = /* @__PURE__ */ L(R2, [["render", W2]]), K2 = window.Vue.computed, Y2 = window.Vuex.useStore, Q2 = (e) => {
  const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = U(
    Y2()
  ), o = Te();
  return K2(() => {
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
const J2 = window.Vue.watch, Z2 = {
  name: "SxContentComparatorSourceVsTargetSelector",
  components: { MwButtonGroup: Jo },
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
    const n = (s) => t("update:selection", s), o = Q2(e);
    return J2(
      () => e.isMappedSection,
      () => {
        o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
      }
    ), {
      listSelector: o,
      updateSelection: n
    };
  }
}, e4 = window.Vue.resolveComponent, t4 = window.Vue.createVNode, n4 = window.Vue.openBlock, o4 = window.Vue.createElementBlock, s4 = { class: "sx-content-comparator__source-target-selector" };
function a4(e, t, n, o, s, a) {
  const i = e4("mw-button-group");
  return n4(), o4("div", s4, [
    t4(i, {
      items: o.listSelector,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const i4 = /* @__PURE__ */ L(Z2, [["render", a4]]), un = window.Vue.computed, r4 = window.Vue.ref, Nc = () => {
  const e = r4([]), { currentTargetPage: t } = dt(), { sectionSuggestion: n } = Oe(), { sectionURLParameter: o } = G(), s = un(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = un(
    () => {
      var d;
      return (((d = i.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), i = un(
    () => {
      var d;
      return (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: c } = W(), l = un(() => {
    var d;
    return (d = c.value) == null ? void 0 : d.html;
  }), g = un(() => {
    var d;
    return (d = i.value) == null ? void 0 : d.html;
  }), r = un(
    () => {
      var d;
      return (d = n.value) == null ? void 0 : d.missingSections.hasOwnProperty(o.value);
    }
  ), u = un(
    () => !r.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: u,
    sourceSectionContent: l,
    targetSectionAnchor: a,
    targetSectionContent: g
  };
};
const ad = window.Vue.ref, tr = window.Vue.computed, c4 = window.Vue.onMounted, l4 = {
  name: "SxContentComparatorContentHeader",
  components: {
    SxContentComparatorSourceVsTargetSelector: i4,
    MwRow: P,
    MwCol: C,
    MwButton: be
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
    const n = ad(!1), { sectionSuggestion: o } = Oe(), { sectionURLParameter: s } = G(), a = tr(
      () => (s.value || "").replace(/ /g, "_")
    ), i = (d) => t.emit("update:sourceVsTargetSelection", d), { activeSectionTargetTitle: c, targetSectionAnchor: l } = Nc(), g = tr(() => {
      switch (e.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: s.value,
            path: `${q.getPageUrl(
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
            title: c.value,
            path: `${r.value}#${l.value}`
          };
      }
    }), r = tr(
      () => q.getPageUrl(
        o.value.targetLanguage,
        o.value.targetTitle
      )
    ), u = ad(null);
    return c4(() => {
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
      mwIconLinkExternal: Ug,
      mwIconEdit: La,
      updateSelection: i
    };
  }
}, sa = window.Vue.resolveComponent, aa = window.Vue.createVNode, u4 = window.Vue.toDisplayString, d4 = window.Vue.createElementVNode, ia = window.Vue.withCtx, nr = window.Vue.openBlock, or = window.Vue.createBlock;
window.Vue.createCommentVNode;
const g4 = window.Vue.normalizeClass, m4 = ["lang", "dir", "textContent"];
function p4(e, t, n, o, s, a) {
  const i = sa("sx-content-comparator-source-vs-target-selector"), c = sa("mw-col"), l = sa("mw-button"), g = sa("mw-row");
  return nr(), or(g, {
    ref: "contentHeader",
    class: g4(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
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
          aa(c, null, {
            default: ia(() => [
              d4("h3", {
                lang: o.activeContent.lang,
                dir: o.activeContent.dir,
                class: "ma-0 pa-0",
                textContent: u4(o.activeContent.title)
              }, null, 8, m4)
            ]),
            _: 1
          }),
          aa(c, { shrink: "" }, {
            default: ia(() => [
              o.isSticky ? (nr(), or(l, {
                key: 0,
                icon: o.mwIconEdit,
                progressive: "",
                label: e.$i18n(
                  "cx-sx-content-comparator-content-header-translate-button-label"
                ),
                onClick: t[0] || (t[0] = (r) => e.$emit("translation-button-clicked"))
              }, null, 8, ["icon", "label"])) : (nr(), or(l, {
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
const h4 = /* @__PURE__ */ L(l4, [["render", p4]]), w4 = window.Vue.computed, f4 = {
  name: "SxContentComparatorHeaderNavigation",
  components: {
    MwCol: C,
    MwButton: be
  },
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const { sectionURLParameter: t } = G(), n = w4(
      () => e.sectionSourceTitles.indexOf(t.value)
    ), { selectPageSectionByTitle: o } = Pc();
    return {
      goToNextSection: () => {
        const i = (n.value + 1) % e.sectionSourceTitles.length, c = e.sectionSourceTitles[i];
        o(c);
      },
      goToPreviousSection: () => {
        const i = (n.value - 1 + e.sectionSourceTitles.length) % e.sectionSourceTitles.length, c = e.sectionSourceTitles[i];
        o(c);
      },
      mwIconPrevious: ew,
      mwIconArrowForward: lc
    };
  }
}, id = window.Vue.resolveComponent, rd = window.Vue.createVNode, _4 = window.Vue.withCtx, v4 = window.Vue.openBlock, S4 = window.Vue.createBlock;
function y4(e, t, n, o, s, a) {
  const i = id("mw-button"), c = id("mw-col");
  return v4(), S4(c, {
    class: "justify-end",
    align: "center"
  }, {
    default: _4(() => [
      rd(i, {
        class: "pa-0 pe-1",
        type: "icon",
        icon: o.mwIconPrevious,
        onClick: o.goToPreviousSection
      }, null, 8, ["icon", "onClick"]),
      rd(i, {
        class: "pa-0 ps-1",
        type: "icon",
        icon: o.mwIconArrowForward,
        onClick: o.goToNextSection
      }, null, 8, ["icon", "onClick"])
    ]),
    _: 1
  });
}
const C4 = /* @__PURE__ */ L(f4, [["render", y4]]);
const k4 = {
  name: "SxContentComparatorHeaderMappedSection",
  components: {
    MwRow: P,
    MwCol: C,
    MwButton: be
  },
  props: {
    suggestion: {
      type: jn,
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
    mwIconTrash: Mg,
    mwIconUndo: cw
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
}, cd = window.Vue.toDisplayString, x4 = window.Vue.resolveDirective, sr = window.Vue.withDirectives, En = window.Vue.openBlock, ra = window.Vue.createElementBlock, b4 = window.Vue.createCommentVNode, $4 = window.Vue.createTextVNode, ld = window.Vue.createElementVNode, V4 = window.Vue.normalizeClass, ar = window.Vue.resolveComponent, ir = window.Vue.withCtx, rr = window.Vue.createVNode, ud = window.Vue.createBlock, A4 = { class: "sx-content-comparator-header__mapped-section" }, D4 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, E4 = { key: 0 }, L4 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, T4 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
};
function B4(e, t, n, o, s, a) {
  const i = ar("mw-col"), c = ar("mw-button"), l = ar("mw-row"), g = x4("i18n");
  return En(), ra("div", A4, [
    rr(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
      default: ir(() => [
        rr(i, { grow: "" }, {
          default: ir(() => [
            ld("h6", D4, [
              $4(cd(a.mappedSectionHeaderTitle) + " ", 1),
              a.isDiscardedSection ? sr((En(), ra("span", E4, null, 512)), [
                [g, void 0, "cx-sx-content-comparator-discarded-section-label"]
              ]) : b4("", !0)
            ]),
            ld("h6", {
              class: V4(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
              }])
            }, cd(n.targetSectionTitle), 3)
          ]),
          _: 1
        }),
        rr(i, { shrink: "" }, {
          default: ir(() => [
            a.isDiscardedSection ? (En(), ud(c, {
              key: 1,
              class: "pa-0",
              icon: e.mwIconUndo,
              type: "icon",
              onClick: a.undoDiscard
            }, null, 8, ["icon", "onClick"])) : (En(), ud(c, {
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
    a.isDiscardedSection ? sr((En(), ra("p", T4, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
    ]) : sr((En(), ra("p", L4, null, 512)), [
      [g, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
    ])
  ]);
}
const P4 = /* @__PURE__ */ L(k4, [["render", B4]]);
const ca = window.Vue.computed, F4 = {
  name: "SxContentComparatorHeader",
  components: {
    SxContentComparatorHeaderMappedSection: P4,
    SxContentComparatorHeaderNavigation: C4,
    MwButton: be,
    MwCol: C,
    MwRow: P,
    MwIcon: Se
  },
  props: {
    discardedSections: {
      type: Array,
      required: !0
    }
  },
  emits: ["close", "translation-button-clicked", "update:discardedSections"],
  setup() {
    const { sectionURLParameter: e } = G(), { sourceSection: t } = W(), { sectionSuggestion: n } = Oe(), o = ca(
      () => {
        var l;
        return (l = n.value) == null ? void 0 : l.missingSections.hasOwnProperty(e.value);
      }
    ), s = ca(
      () => {
        var l;
        return (l = n.value) == null ? void 0 : l.presentSections.hasOwnProperty(e.value);
      }
    ), { activeSectionTargetTitle: a } = Nc(), i = ca(() => {
      var l;
      return (l = t.value) == null ? void 0 : l.html;
    }), c = ca(() => [
      ...Object.keys(n.value.missingSections),
      ...Object.keys(n.value.presentSections)
    ]);
    return {
      activeSectionTargetTitle: a,
      isCurrentSectionMissing: o,
      isCurrentSectionPresent: s,
      mwIconArrowPrevious: tw,
      mwIconEdit: La,
      mwIconEye: iw,
      sectionSourceTitles: c,
      sourceSectionContent: i,
      sourceSectionTitle: e,
      suggestion: n,
      getDir: O.getDir
    };
  }
}, Ln = window.Vue.resolveComponent, xt = window.Vue.createVNode, dd = window.Vue.toDisplayString, qo = window.Vue.createElementVNode, Tn = window.Vue.withCtx, M4 = window.Vue.resolveDirective, gd = window.Vue.withDirectives, cr = window.Vue.openBlock, md = window.Vue.createBlock, pd = window.Vue.createCommentVNode, N4 = window.Vue.createElementBlock, U4 = { class: "sx-content-comparator__header pa-4" }, I4 = ["lang", "dir"], z4 = ["lang", "dir"], R4 = /* @__PURE__ */ qo("br", null, null, -1);
function O4(e, t, n, o, s, a) {
  const i = Ln("mw-button"), c = Ln("mw-col"), l = Ln("sx-content-comparator-header-navigation"), g = Ln("mw-row"), r = Ln("mw-icon"), u = Ln("sx-content-comparator-header-mapped-section"), d = M4("i18n");
  return cr(), N4("div", U4, [
    xt(i, {
      class: "py-2 pa-0",
      icon: o.mwIconArrowPrevious,
      label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
      type: "text",
      onClick: t[0] || (t[0] = (m) => e.$emit("close"))
    }, null, 8, ["icon", "label"]),
    xt(g, { class: "my-1 py-2 mx-0" }, {
      default: Tn(() => [
        xt(c, { grow: "" }, {
          default: Tn(() => [
            qo("h4", {
              class: "pa-0 sx-content-comparator-header__article-title",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, dd(o.suggestion.sourceTitle), 9, I4),
            qo("h2", {
              class: "sx-content-comparator-header__section-title pa-0 ma-0",
              lang: o.suggestion.sourceLanguage,
              dir: o.getDir(o.suggestion.sourceLanguage)
            }, dd(o.sourceSectionTitle), 9, z4)
          ]),
          _: 1
        }),
        xt(l, {
          cols: "2",
          "section-source-titles": o.sectionSourceTitles
        }, null, 8, ["section-source-titles"]),
        xt(c, {
          cols: "12",
          mobile: "12",
          tablet: "4",
          class: "py-2 mb-1"
        }, {
          default: Tn(() => [
            xt(i, {
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
    o.isCurrentSectionMissing ? (cr(), md(g, {
      key: 0,
      align: "start",
      class: "sx-content-comparator-header__review-contents mx-0"
    }, {
      default: Tn(() => [
        xt(c, {
          shrink: "",
          class: "pe-2"
        }, {
          default: Tn(() => [
            xt(r, { icon: o.mwIconEye }, null, 8, ["icon"])
          ]),
          _: 1
        }),
        xt(c, { class: "ma-0" }, {
          default: Tn(() => [
            gd(qo("strong", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-title"]
            ]),
            R4,
            gd(qo("span", null, null, 512), [
              [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : pd("", !0),
    o.isCurrentSectionPresent ? (cr(), md(u, {
      key: 1,
      suggestion: o.suggestion,
      "target-section-title": o.activeSectionTargetTitle,
      "discarded-sections": n.discardedSections,
      "onUpdate:discardedSections": t[2] || (t[2] = (m) => e.$emit("update:discardedSections", m))
    }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : pd("", !0)
  ]);
}
const H4 = /* @__PURE__ */ L(F4, [["render", O4]]);
const j4 = {
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
}, hd = window.Vue.toDisplayString, q4 = window.Vue.createElementVNode, wd = window.Vue.openBlock, fd = window.Vue.createElementBlock, G4 = window.Vue.createCommentVNode, W4 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, X4 = ["textContent"], K4 = ["textContent"];
function Y4(e, t, n, o, s, a) {
  return wd(), fd("section", W4, [
    q4("h5", {
      textContent: hd(n.placeholderTitle)
    }, null, 8, X4),
    n.placeholderSubtitle ? (wd(), fd("p", {
      key: 0,
      textContent: hd(n.placeholderSubtitle)
    }, null, 8, K4)) : G4("", !0)
  ]);
}
const Qm = /* @__PURE__ */ L(j4, [["render", Y4]]), Q4 = window.Vue.computed, J4 = window.Vue.createApp, Z4 = window.Vuex.useStore, e3 = () => {
  const e = Z4(), { sectionSuggestion: t } = Oe(), { currentTargetPage: n } = dt(), o = Te(), s = () => J4(
    Qm,
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
      (g) => g.parentNode.removeChild(g)
    );
  };
  return Q4(() => {
    var r;
    const c = document.createElement("div");
    c.innerHTML = (r = n.value) == null ? void 0 : r.content, i(c);
    const l = s(), g = a(
      t.value
    );
    if (g) {
      const u = Array.from(
        c.querySelectorAll("h2")
      ).filter((d) => d.textContent.match(g));
      if (u && u.length) {
        const d = u[0].parentNode;
        d.parentNode.insertBefore(
          l,
          d
        );
      }
    } else
      c.appendChild(l);
    return c.innerHTML;
  });
};
const t3 = window.Vue.ref, n3 = window.Vue.computed, o3 = window.Vue.watch, s3 = window.Vuex.useStore, a3 = {
  name: "SxContentComparator",
  components: {
    SxContentComparatorNewSectionPlaceholder: Qm,
    SxContentComparatorHeader: H4,
    SxContentComparatorContentHeader: h4,
    MwSpinner: tt
  },
  setup() {
    const e = s3(), t = me(), n = t3("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
      Gm() || !e.getters["translator/userHasSectionTranslations"] ? t.push({ name: "sx-quick-tutorial" }) : t.push({ name: "sx-sentence-selector" });
    }, {
      activeSectionTargetTitle: a,
      discardedSections: i,
      isCurrentSectionMapped: c,
      sourceSectionContent: l,
      targetSectionContent: g
    } = Nc(), r = e3(), { sectionSuggestion: u } = Oe(), { sourceLanguage: d, targetLanguage: m } = U(e), p = n3(() => u.value.targetTitle), h = Bc();
    return o3(
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
      isCurrentSectionMapped: c,
      sourceSectionContent: l,
      sourceVsTargetSelection: n,
      targetPageContent: r,
      targetSectionContent: g,
      translateSection: s,
      sourceLanguage: d,
      targetLanguage: m
    };
  }
}, la = window.Vue.resolveComponent, lr = window.Vue.createVNode, Bn = window.Vue.openBlock, _d = window.Vue.createBlock, vd = window.Vue.createCommentVNode, ua = window.Vue.createElementVNode, ur = window.Vue.Fragment, da = window.Vue.createElementBlock, i3 = { class: "sx-content-comparator" }, r3 = { class: "sx-content-comparator__source-content" }, c3 = ["lang", "dir", "innerHTML"], l3 = ["lang", "dir", "innerHTML"], u3 = ["innerHTML"];
function d3(e, t, n, o, s, a) {
  const i = la("sx-content-comparator-header"), c = la("sx-content-comparator-content-header"), l = la("mw-spinner"), g = la("sx-content-comparator-new-section-placeholder");
  return Bn(), da("section", i3, [
    lr(i, {
      "discarded-sections": o.discardedSections,
      "onUpdate:discardedSections": t[0] || (t[0] = (r) => o.discardedSections = r),
      onTranslationButtonClicked: o.translateSection,
      onClose: o.goToSectionSelector
    }, null, 8, ["discarded-sections", "onTranslationButtonClicked", "onClose"]),
    lr(c, {
      "source-vs-target-selection": o.sourceVsTargetSelection,
      "onUpdate:sourceVsTargetSelection": t[1] || (t[1] = (r) => o.sourceVsTargetSelection = r),
      "is-mapped-section": o.isCurrentSectionMapped,
      onTranslationButtonClicked: o.translateSection
    }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
    ua("section", r3, [
      o.sourceVsTargetSelection === "source_section" ? (Bn(), da(ur, { key: 0 }, [
        o.sourceSectionContent ? vd("", !0) : (Bn(), _d(l, { key: 0 })),
        ua("section", {
          lang: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          class: "pt-2 px-4",
          innerHTML: o.sourceSectionContent
        }, null, 8, c3)
      ], 64)) : o.sourceVsTargetSelection === "target_article" ? (Bn(), da(ur, { key: 1 }, [
        o.targetPageContent ? vd("", !0) : (Bn(), _d(l, { key: 0 })),
        ua("article", {
          lang: o.targetLanguage,
          dir: o.getDir(o.targetLanguage),
          class: "px-4",
          innerHTML: o.targetPageContent
        }, null, 8, l3)
      ], 64)) : (Bn(), da(ur, { key: 2 }, [
        ua("section", {
          class: "pa-4",
          innerHTML: o.targetSectionContent
        }, null, 8, u3),
        lr(g, {
          "placeholder-title": e.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
          "placeholder-subtitle": e.$i18n(
            "cx-sx-content-comparator-present-section-placeholder-subtitle"
          )
        }, null, 8, ["placeholder-title", "placeholder-subtitle"])
      ], 64))
    ])
  ]);
}
const g3 = /* @__PURE__ */ L(a3, [["render", d3]]);
const m3 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: g3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, p3 = window.Vue.resolveComponent, h3 = window.Vue.createVNode, w3 = window.Vue.normalizeClass, f3 = window.Vue.openBlock, _3 = window.Vue.createElementBlock;
function v3(e, t, n, o, s, a) {
  const i = p3("sx-content-comparator");
  return f3(), _3("main", {
    class: w3(["sx-content-comparator-view", a.classes])
  }, [
    h3(i)
  ], 2);
}
const S3 = /* @__PURE__ */ L(m3, [["render", v3]]);
const y3 = window.Vue.resolveDirective, ko = window.Vue.createElementVNode, Sd = window.Vue.withDirectives, ga = window.Vue.unref, dr = window.Vue.createVNode, yd = window.Vue.toDisplayString, Cd = window.Vue.createTextVNode, xo = window.Vue.withCtx, C3 = window.Vue.openBlock, k3 = window.Vue.createBlock, x3 = { class: "mw-ui-dialog__header px-4 py-3" }, b3 = { class: "mw-ui-dialog__header-title" }, $3 = { class: "pa-4" }, V3 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, kd = window.Codex.CdxButton, A3 = {
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
      const l = y3("i18n");
      return C3(), k3(ga(ot), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        "overlay-opacity": 0.7,
        "overlay-color": i.$mwui.colors.gray700
      }, {
        header: xo(() => [
          ko("div", x3, [
            Sd(ko("span", b3, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: xo(() => [
          ko("div", V3, [
            dr(ga(kd), {
              weight: "quiet",
              onClick: s
            }, {
              default: xo(() => [
                Cd(yd(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            dr(ga(kd), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: xo(() => [
                Cd(yd(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: xo(() => [
          dr(ga(Zo)),
          ko("div", $3, [
            Sd(ko("span", null, null, 512), [
              [l, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "overlay-color"]);
    };
  }
}, D3 = window.Vuex.useStore, Uc = () => {
  const e = D3(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = Et(), o = (c, l, g) => {
    if (c === 0) {
      t.value.proposedTitleTranslations[l] = g;
      return;
    }
    const r = t.value.getContentTranslationUnitById(c);
    r instanceof Ee ? r.blockTemplateProposedTranslations[l] = g : r instanceof Kt && r.addProposedTranslation(l, g);
  }, s = (c, l) => b(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: r } = e.state.application;
    if (!e.getters["mediawiki/isValidProviderForTranslation"](g, r, c))
      return "";
    try {
      const d = yield e.dispatch("application/getCXServerToken");
      return yield nt.fetchSegmentTranslation(
        g,
        r,
        c,
        l,
        d
      );
    } catch (d) {
      return mw.log.error("Error while translating segment", d), "";
    }
  }), a = (c, l) => b(void 0, null, function* () {
    const { sourceLanguage: g, targetLanguage: r } = e.state.application;
    if (t.value.hasProposedTranslationByTranslationUnitId(
      c,
      l
    ))
      return;
    let u = t.value.getOriginalContentByTranslationUnitId(c);
    const d = t.value.getContentTranslationUnitById(c);
    let m;
    if (e.commit("application/addMtRequestsPending", c), m = yield s(l, u), !m) {
      e.commit("application/removeMtRequestsPending", c);
      return;
    }
    d instanceof Ee && (d.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield q_(
      m,
      n(r, g),
      r
    )) || ""), o(
      c,
      l,
      m
    ), e.commit("application/removeMtRequestsPending", c);
  });
  return {
    translateTranslationUnitById: a,
    translateSelectedTranslationUnitForAllProviders: () => {
      const { sourceLanguage: c, targetLanguage: l } = e.state.application, g = e.getters["mediawiki/getSupportedMTProviders"](
        c,
        l
      ), { selectedTranslationUnitId: r } = t.value;
      g.forEach(
        (u) => a(r, u)
      );
    }
  };
}, E3 = window.Vuex.useStore, L3 = () => {
  const { sourceSection: e } = W(), t = E3(), { translateTranslationUnitById: n } = Uc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const gr = window.Vue.computed, T3 = window.Vuex.useStore, B3 = {
  name: "SxTranslationSelector",
  components: { MwCard: Re, MwButton: be, MwDialog: ot },
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, t) {
    const n = X.EMPTY_TEXT_PROVIDER_KEY, o = X.ORIGINAL_TEXT_PROVIDER_KEY, s = T3(), {
      sourceSection: a,
      isSectionTitleSelected: i,
      selectedContentTranslationUnit: c
    } = W(), { sourceLanguage: l, targetLanguage: g } = U(s), r = gr(
      () => s.getters["mediawiki/getSupportedMTProviders"](
        l.value,
        g.value
      )
    ), u = gr(() => {
      const f = [o, n];
      return r.value.filter(
        (v) => !f.includes(v)
      );
    }), d = gr(
      () => i.value ? a.value.proposedTitleTranslations : c.value.proposedTranslations
    ), m = L3(), p = (f) => {
      m(f), w();
    }, h = X.getMTProviderLabel, w = () => t.emit("update:active", !1);
    return {
      apiMtProviders: u,
      close: w,
      emptyTextProviderKey: n,
      getDir: O.getDir,
      getMTProviderLabel: h,
      mwIconClose: Sn,
      originalTextProviderKey: o,
      proposedTranslations: d,
      selectProvider: p,
      sourceLanguage: l
    };
  }
}, P3 = window.Vue.resolveDirective, Ie = window.Vue.createElementVNode, ma = window.Vue.withDirectives, mr = window.Vue.resolveComponent, pr = window.Vue.createVNode, Ht = window.Vue.withCtx, F3 = window.Vue.renderList, M3 = window.Vue.Fragment, hr = window.Vue.openBlock, N3 = window.Vue.createElementBlock, U3 = window.Vue.toDisplayString, xd = window.Vue.createBlock, I3 = window.Vue.createCommentVNode, z3 = { class: "mw-ui-dialog__header pa-4" }, R3 = { class: "row ma-0 py-2" }, O3 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, H3 = { class: "mb-0" }, j3 = { class: "col shrink justify-center" }, q3 = { class: "pb-2 mb-0" }, G3 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, W3 = ["dir", "lang", "innerHTML"], X3 = ["textContent"], K3 = ["innerHTML"], Y3 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, Q3 = /* @__PURE__ */ Ie("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
function J3(e, t, n, o, s, a) {
  const i = mr("mw-button"), c = mr("mw-card"), l = mr("mw-dialog"), g = P3("i18n");
  return n.active ? (hr(), xd(l, {
    key: 0,
    class: "sx-sentence-selector__translation-options",
    fullscreen: ""
  }, {
    header: Ht(() => [
      Ie("div", z3, [
        Ie("div", R3, [
          Ie("div", O3, [
            ma(Ie("h4", H3, null, 512), [
              [g, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
            ])
          ]),
          Ie("div", j3, [
            pr(i, {
              type: "icon",
              icon: o.mwIconClose,
              class: "pa-0",
              onClick: o.close
            }, null, 8, ["icon", "onClick"])
          ])
        ]),
        ma(Ie("h6", q3, null, 512), [
          [g, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
        ])
      ])
    ]),
    default: Ht(() => [
      pr(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[0] || (t[0] = (r) => o.selectProvider(o.originalTextProviderKey))
      }, {
        header: Ht(() => [
          ma(Ie("h5", G3, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
          ])
        ]),
        default: Ht(() => [
          Ie("p", {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            innerHTML: o.proposedTranslations[o.originalTextProviderKey]
          }, null, 8, W3)
        ]),
        _: 1
      }),
      (hr(!0), N3(M3, null, F3(o.apiMtProviders, (r) => (hr(), xd(c, {
        key: r,
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: (u) => o.selectProvider(r)
      }, {
        header: Ht(() => [
          Ie("h5", {
            class: "sx-sentence-selector__translation-options-card-title mb-4",
            textContent: U3(o.getMTProviderLabel(r))
          }, null, 8, X3)
        ]),
        default: Ht(() => [
          Ie("p", {
            innerHTML: o.proposedTranslations[r]
          }, null, 8, K3)
        ]),
        _: 2
      }, 1032, ["onClick"]))), 128)),
      pr(c, {
        class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
        role: "button",
        onClick: t[1] || (t[1] = (r) => o.selectProvider(o.emptyTextProviderKey))
      }, {
        header: Ht(() => [
          ma(Ie("h5", Y3, null, 512), [
            [g, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
          ])
        ]),
        default: Ht(() => [
          Q3
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : I3("", !0);
}
const Z3 = /* @__PURE__ */ L(B3, [["render", J3]]), e$ = window.Vuex.useStore, Qn = () => {
  const { sourceSection: e } = W(), t = e$(), { translateTranslationUnitById: n } = Uc(), { currentMTProvider: o } = U(t), s = (c) => b(void 0, null, function* () {
    e.value.selectTranslationUnitById(c), yield n(c, o.value);
    const { followingTranslationUnit: l } = e.value;
    l && (yield n(
      l.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: c } = e.value;
      return c ? s(c.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: c, contentTranslationUnits: l } = e.value, g = c - 1;
      let r = 0;
      return g > -1 && (r = l[g].id), s(r);
    },
    selectTranslationUnitById: s
  };
};
const Pn = window.Vue.computed, t$ = window.Vuex.useStore, n$ = {
  name: "SxSentenceSelectorContentHeader",
  components: { MwIcon: Se, MwCol: C },
  setup() {
    const e = t$(), { sourceSection: t, isSectionTitleSelected: n } = W(), o = "sx-sentence-selector__section-title", { currentSourcePage: s } = dt(), { sourceLanguage: a } = U(e), i = Pn(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), c = Pn(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || i.value;
      }
    ), l = Pn(
      () => q.getPageUrl(a.value, i.value)
    ), g = Pn(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), r = Pn(
      () => g.value ? "translated" : "selected"
    ), u = Pn(() => {
      const p = [o];
      return n.value && p.push(`${o}--${r.value}`), p;
    }), { selectTranslationUnitById: d } = Qn();
    return {
      mwIconLinkExternal: Ug,
      selectSectionTitle: () => d(0),
      sourceArticlePath: l,
      sourceArticleTitle: i,
      sourceSectionTitle: c,
      titleClasses: u
    };
  }
}, o$ = window.Vue.toDisplayString, wr = window.Vue.createElementVNode, bd = window.Vue.resolveComponent, s$ = window.Vue.createVNode, a$ = window.Vue.normalizeClass, i$ = window.Vue.withCtx, r$ = window.Vue.openBlock, c$ = window.Vue.createBlock, l$ = ["href"], u$ = ["textContent"], d$ = ["innerHTML"];
function g$(e, t, n, o, s, a) {
  const i = bd("mw-icon"), c = bd("mw-col");
  return r$(), c$(c, {
    shrink: "",
    class: "sx-sentence-selector__section-header pa-5"
  }, {
    default: i$(() => [
      wr("a", {
        href: o.sourceArticlePath,
        target: "_blank",
        class: "sx-sentence-selector__section-article-title mb-1"
      }, [
        wr("strong", {
          textContent: o$(o.sourceArticleTitle)
        }, null, 8, u$),
        s$(i, {
          icon: o.mwIconLinkExternal,
          class: "ms-1",
          size: "12"
        }, null, 8, ["icon"])
      ], 8, l$),
      wr("h2", {
        class: a$(["pa-0 ma-0", o.titleClasses]),
        onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
        innerHTML: o.sourceSectionTitle
      }, null, 10, d$)
    ]),
    _: 1
  });
}
const m$ = /* @__PURE__ */ L(n$, [["render", g$]]);
const at = window.Vue.unref, bo = window.Vue.createVNode, pa = window.Vue.withCtx, $d = window.Vue.toDisplayString, Vd = window.Vue.createTextVNode, p$ = window.Vue.openBlock, h$ = window.Vue.createBlock, w$ = window.Vue.computed, fr = window.Codex.CdxButton, Ad = window.Codex.CdxIcon, Jm = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = W(), s = w$(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (p$(), h$(at(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: pa(() => [
        bo(at(fr), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          disabled: at(n),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: pa(() => [
            bo(at(Ad), {
              class: "me-1",
              icon: at(Ac)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        bo(at(fr), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !at(o),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: pa(() => [
            Vd($d(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        bo(at(fr), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: pa(() => [
            Vd($d(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            bo(at(Ad), {
              class: "ms-1",
              size: "small",
              icon: at(ms)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const dn = window.Vue.unref, f$ = window.Vue.toDisplayString, $o = window.Vue.createVNode, ha = window.Vue.withCtx, _$ = window.Vue.openBlock, v$ = window.Vue.createBlock, _r = window.Vue.computed, S$ = window.Vuex.useStore, y$ = window.Codex.CdxButton, C$ = window.Codex.CdxIcon, k$ = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = S$(), n = _r(() => t.state.application.currentMTProvider), o = Te(), s = _r(() => ({
      [X.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [X.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = _r(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        X.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (_$(), v$(dn(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: ha(() => [
        $o(dn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: ha(() => [
            $o(dn(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: f$(a.value)
            }, null, 8, ["textContent"]),
            $o(dn(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: ha(() => [
                $o(dn(y$), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  onClick: c[0] || (c[0] = (l) => i.$emit("configure-options"))
                }, {
                  default: ha(() => [
                    $o(dn(C$), {
                      class: "pa-0",
                      icon: dn(Um)
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
const Ye = window.Vue.unref, jt = window.Vue.createVNode, x$ = window.Vue.resolveDirective, Dd = window.Vue.createElementVNode, b$ = window.Vue.withDirectives, Ed = window.Vue.toDisplayString, Ld = window.Vue.createTextVNode, Vo = window.Vue.withCtx, $$ = window.Vue.openBlock, V$ = window.Vue.createElementBlock, A$ = { class: "mt-retry-body pb-5" }, D$ = { class: "retry-body__message" }, Td = window.Codex.CdxButton, vr = window.Codex.CdxIcon, E$ = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = x$("i18n");
      return $$(), V$("div", A$, [
        Dd("div", D$, [
          jt(Ye(vr), {
            class: "me-2",
            icon: Ye(Mm)
          }, null, 8, ["icon"]),
          b$(Dd("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        jt(Ye(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Vo(() => [
            jt(Ye(C), { cols: "6" }, {
              default: Vo(() => [
                jt(Ye(Td), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Vo(() => [
                    jt(Ye(vr), {
                      class: "me-1",
                      icon: Ye(Im)
                    }, null, 8, ["icon"]),
                    Ld(" " + Ed(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            jt(Ye(C), { cols: "6" }, {
              default: Vo(() => [
                jt(Ye(Td), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Vo(() => [
                    jt(Ye(vr), {
                      class: "me-1",
                      icon: Ye(ky)
                    }, null, 8, ["icon"]),
                    Ld(" " + Ed(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Fn = window.Vue.createVNode, Ae = window.Vue.unref, Ao = window.Vue.openBlock, L$ = window.Vue.createElementBlock, T$ = window.Vue.createCommentVNode, wa = window.Vue.createBlock, B$ = window.Vue.normalizeClass, P$ = window.Vue.normalizeStyle, Do = window.Vue.withCtx, F$ = window.Vue.toDisplayString, M$ = window.Vue.createTextVNode, N$ = window.Vue.normalizeProps, U$ = window.Vue.guardReactiveProps, I$ = ["lang", "dir", "innerHTML"], Sr = window.Vue.ref, z$ = window.Vue.onMounted, R$ = window.Vue.onBeforeUnmount, yr = window.Vue.computed, O$ = window.Vue.nextTick, H$ = window.Vuex.useStore, j$ = window.Codex.CdxButton, q$ = window.Codex.CdxIcon, G$ = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Sr(0), n = Sr(null), o = Sr(null), s = H$(), { currentMTProvider: a, targetLanguage: i } = U(s), { sourceSection: c, currentProposedTranslation: l } = W(), g = yr(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = c.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), r = yr(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = yr(
      () => !!l.value || a.value === X.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    z$(() => b(this, null, function* () {
      yield O$(), d(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), R$(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => d());
    return (p, h) => (Ao(), wa(Ae(Re), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Do(() => [
        Fn(Ae(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Do(() => [
            Fn(k$, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (w) => p.$emit("configure-options"))
            }, null, 512),
            Fn(Ae(C), {
              class: B$(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value && g.value
              }]),
              style: P$(u.value ? r.value : null)
            }, {
              default: Do(() => [
                u.value ? (Ao(), L$("section", {
                  key: 0,
                  lang: Ae(i),
                  dir: Ae(O.getDir)(Ae(i)),
                  innerHTML: Ae(l)
                }, null, 8, I$)) : g.value ? (Ao(), wa(Ae(tt), { key: 1 })) : (Ao(), wa(E$, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (w) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (w) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Fn(Ae(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Do(() => [
                u.value || g.value ? (Ao(), wa(Ae(j$), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: h[3] || (h[3] = (w) => p.$emit("edit-translation", Ae(l)))
                }, {
                  default: Do(() => [
                    Fn(Ae(q$), {
                      class: "me-1",
                      icon: Ae($c)
                    }, null, 8, ["icon"]),
                    M$(" " + F$(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : T$("", !0),
                Fn(Jm, N$(U$(p.$attrs)), null, 16)
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
}, W$ = window.Vue.computed, X$ = (e) => W$(() => {
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
const K$ = window.Vue.onMounted, Y$ = window.Vue.ref, Q$ = window.Vue.computed, J$ = {
  name: "SubSection",
  props: {
    subSection: {
      type: Ee,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = Y$(null), o = X$(e.subSection);
    K$(() => {
      n.value.addEventListener("click", (c) => {
        let l;
        if (e.subSection.isBlockTemplate)
          l = e.subSection;
        else {
          const g = c.composedPath().find(
            (r) => r instanceof Element && r.classList.contains("cx-segment")
          );
          if (!g)
            return;
          l = e.subSection.getSentenceById(
            g.dataset.segmentid
          );
        }
        a(l);
      });
    });
    const { selectTranslationUnitById: s } = Qn(), a = (c) => {
      if (c.selected) {
        t("bounce-translation");
        return;
      }
      s(c.id);
    }, i = Q$(() => ({
      "sx-sentence-selector__subsection--block-selected": e.subSection.selected
    }));
    return {
      content: o,
      rootClasses: i,
      subSectionRoot: n
    };
  }
}, Z$ = window.Vue.normalizeClass, eV = window.Vue.openBlock, tV = window.Vue.createElementBlock, nV = ["innerHTML"];
function oV(e, t, n, o, s, a) {
  return eV(), tV("div", {
    ref: "subSectionRoot",
    class: Z$(["sx-sentence-selector__subsection", o.rootClasses]),
    innerHTML: o.content
  }, null, 10, nV);
}
const sV = /* @__PURE__ */ L(J$, [["render", oV]]);
const Bd = window.Vue.computed, aV = {
  name: "BlockTemplateStatusIndicator",
  components: {
    MwCircleProgressBar: Og,
    MwIcon: Se
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
    const t = Bd(() => ({ "--size": e.size })), n = Bd(
      () => !e.isTemplateAdapted || e.percentage === 0 ? dc : On
    );
    return {
      cssVars: t,
      statusIcon: n
    };
  }
}, Pd = window.Vue.resolveComponent, Fd = window.Vue.createVNode, Md = window.Vue.normalizeStyle, iV = window.Vue.openBlock, rV = window.Vue.createElementBlock;
function cV(e, t, n, o, s, a) {
  const i = Pd("mw-circle-progress-bar"), c = Pd("mw-icon");
  return iV(), rV("div", {
    class: "block-template-status-indicator",
    style: Md(o.cssVars)
  }, [
    Fd(i, {
      percentage: n.percentage,
      size: n.size,
      "stroke-width": n.strokeWidth
    }, null, 8, ["percentage", "size", "stroke-width"]),
    Fd(c, {
      icon: o.statusIcon,
      size: n.size / 2,
      style: Md({
        left: `calc(50% - ${n.size / 4}px)`,
        top: `calc(50% - ${n.size / 4}px)`
      })
    }, null, 8, ["icon", "size", "style"])
  ], 4);
}
const Zm = /* @__PURE__ */ L(aV, [["render", cV]]), lV = window.Vuex.useStore, Eo = window.Vue.computed, uV = {
  name: "SxBlockTemplateStatusDialog",
  components: {
    MwCol: C,
    MwRow: P,
    MwButton: be,
    MwIcon: Se,
    MwRadioGroup: zg,
    MwRadio: Da,
    MwDivider: Zo,
    MwDialog: ot,
    MwCircleProgressBar: Og,
    BlockTemplateStatusIndicator: Zm
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
    const { targetLanguageAutonym: t } = U(lV()), n = Eo(
      () => !e.isTemplateAdapted || o.value === 0 ? dc : On
    ), o = Eo(
      () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
    ), s = Te(), a = Eo(() => {
      let l;
      return e.targetTemplateExists ? e.isTemplateAdapted ? o.value < 100 ? l = "cx-sx-block-template-mapping-status-title-partially-template" : l = "cx-sx-block-template-mapping-status-title-fully-template" : l = "cx-sx-block-template-mapping-status-title-unadapted-template" : l = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(l);
    }), i = Eo(() => {
      let l;
      return !e.targetTemplateExists || !e.isTemplateAdapted ? l = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? l = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : l = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(l);
    }), c = Eo(() => {
      let l = [];
      if (!e.targetTemplateExists)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            t.value
          ),
          icon: gw,
          color: ze.gray500
        });
      else if (!e.isTemplateAdapted)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            e.sourceParamsCount
          ),
          icon: Sn,
          color: ze.gray500
        });
      else if (o.value < 100)
        l.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            e.targetParamsCount,
            e.sourceParamsCount
          ),
          icon: On,
          color: ze.blue600
        });
      else {
        let g;
        e.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          e.targetParamsCount,
          e.sourceParamsCount
        ) : g = s.i18n(
          "cx-sx-block-template-no-source-params-text"
        ), l.push({
          text: g,
          icon: On,
          color: ze.blue600
        });
      }
      return e.mandatoryMissingParamsCount ? l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          e.mandatoryMissingParamsCount,
          t.value
        ),
        icon: La,
        color: ze.gray500
      }) : e.targetTemplateExists && e.isTemplateAdapted && e.optionalMissingParamsCount && l.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          e.optionalMissingParamsCount,
          t.value
        ),
        icon: Xh,
        color: ze.gray500
      }), l;
    });
    return {
      adaptationRatio: o,
      statusIcon: n,
      statusExplanation: i,
      statusText: a,
      mwIconCheck: On,
      mwIconInfo: Yh,
      notes: c
    };
  }
}, Lo = window.Vue.resolveComponent, To = window.Vue.openBlock, fa = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Mn = window.Vue.withCtx, Bo = window.Vue.createVNode, Cr = window.Vue.toDisplayString, kr = window.Vue.createElementVNode, dV = window.Vue.renderList, gV = window.Vue.Fragment, mV = window.Vue.createElementBlock, pV = { class: "pa-4" }, hV = ["textContent"], wV = ["textContent"];
function fV(e, t, n, o, s, a) {
  const i = Lo("block-template-status-indicator"), c = Lo("mw-icon"), l = Lo("mw-col"), g = Lo("mw-row"), r = Lo("mw-dialog");
  return To(), fa(r, {
    value: n.active,
    class: "sx-block-template-status-dialog",
    title: e.$i18n("cx-sx-publisher-preview-options-title"),
    "overlay-opacity": 0.7,
    "overlay-color": e.$mwui.colors.gray700,
    onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
  }, {
    header: Mn(() => [
      Bo(g, {
        justify: "center",
        class: "mt-4"
      }, {
        default: Mn(() => [
          Bo(l, { shrink: "" }, {
            default: Mn(() => [
              n.targetTemplateExists ? (To(), fa(i, {
                key: 0,
                percentage: o.adaptationRatio,
                size: 40,
                "is-template-adapted": n.isTemplateAdapted,
                "stroke-width": 3
              }, null, 8, ["percentage", "is-template-adapted"])) : (To(), fa(c, {
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
    default: Mn(() => [
      kr("div", pV, [
        kr("h3", {
          textContent: Cr(o.statusText)
        }, null, 8, hV),
        kr("p", {
          class: "mt-6 text-small",
          textContent: Cr(o.statusExplanation)
        }, null, 8, wV),
        (To(!0), mV(gV, null, dV(o.notes, (u, d) => (To(), fa(g, {
          key: d,
          align: "start",
          class: "mt-4"
        }, {
          default: Mn(() => [
            Bo(l, { shrink: "" }, {
              default: Mn(() => [
                Bo(c, {
                  class: "me-2",
                  icon: u.icon,
                  "icon-color": u.color
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 2
            }, 1024),
            Bo(l, {
              textContent: Cr(u.text)
            }, null, 8, ["textContent"])
          ]),
          _: 2
        }, 1024))), 128))
      ])
    ]),
    _: 1
  }, 8, ["value", "title", "overlay-color"]);
}
const _V = /* @__PURE__ */ L(uV, [["render", fV]]);
const le = window.Vue.unref, we = window.Vue.createVNode, it = window.Vue.withCtx, xr = window.Vue.toDisplayString, Nd = window.Vue.createTextVNode, vV = window.Vue.resolveDirective, Ud = window.Vue.withDirectives, Id = window.Vue.createElementVNode, SV = window.Vue.normalizeClass, _a = window.Vue.openBlock, zd = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Rd = window.Vue.createBlock, yV = window.Vue.normalizeProps, CV = window.Vue.guardReactiveProps, kV = { class: "block-template-adaptation-card__container pa-4" }, xV = ["textContent"], bV = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, ke = window.Vue.computed, $V = window.Vue.ref, VV = window.Vuex.useStore, Od = window.Codex.CdxButton, Hd = window.Codex.CdxIcon, AV = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = VV(), { targetLanguageAutonym: n, currentMTProvider: o } = U(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = W(), i = ke(() => {
      var B;
      return ((B = s.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), c = ke(
      () => {
        var D;
        return (D = s.value) == null ? void 0 : D.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), l = ke(
      () => {
        var D;
        return !((D = t.state.application.mtRequestsPending) != null && D.includes(
          s.value.id
        ));
      }
    ), g = Te(), r = ke(
      // Strip HTML comments and return
      () => {
        var D, B;
        return ((B = (D = s.value) == null ? void 0 : D.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), u = ke(
      () => {
        var D;
        return (D = s.value.blockTemplateAdaptationInfo) == null ? void 0 : D[o.value];
      }
    ), d = ke(
      () => {
        var D, B;
        return ((D = u.value) == null ? void 0 : D.adapted) || !!((B = u.value) != null && B.partial);
      }
    ), m = ke(() => u.value ? "block-template-adaptation-card__body--" + (d.value ? "success" : "warning") : null), p = ke(() => u.value ? d.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = ke(
      () => {
        var D;
        return Object.keys(((D = s.value) == null ? void 0 : D.sourceTemplateParams) || {}).length;
      }
    ), w = ke(() => {
      var B;
      const D = (B = s.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(D || {});
    }), f = ke(() => w.value.length), v = ke(() => {
      const D = E.value;
      return h.value + D === 0 ? 100 : f.value / (h.value + D) * 100 || 0;
    }), S = $V(!1), V = () => {
      S.value = !0;
    }, A = (D) => D.filter((B) => !w.value.includes(B)), E = ke(() => {
      var B;
      const D = ((B = u.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return A(D).length;
    }), F = ke(() => {
      var B;
      const D = ((B = u.value) == null ? void 0 : B.optionalTargetParams) || [];
      return A(D).length;
    });
    return (D, B) => {
      const re = vV("i18n");
      return _a(), Rd(le(Re), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: it(() => [
          Id("div", kV, [
            we(le(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: it(() => [
                we(le(C), { shrink: "" }, {
                  default: it(() => [
                    we(le(Hd), {
                      icon: le(xy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                we(le(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: it(() => [
                    Nd(xr(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (_a(), zd("div", {
              key: 0,
              class: SV(["pa-4 mb-4", m.value])
            }, [
              we(le(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: it(() => [
                  Ud(we(le(C), { tag: "h5" }, null, 512), [
                    [re, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  we(le(C), { shrink: "" }, {
                    default: it(() => [
                      we(Zm, {
                        percentage: v.value,
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
              Id("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: xr(c.value)
              }, null, 8, xV),
              we(le(Od), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (oe) => D.$emit("edit-translation", i.value))
              }, {
                default: it(() => [
                  Nd(xr(p.value), 1)
                ]),
                _: 1
              })
            ], 2)) : l.value ? (_a(), zd("div", bV, [
              we(le(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: it(() => [
                  Ud(we(le(C), { tag: "h5" }, null, 512), [
                    [re, [
                      le(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  we(le(C), { shrink: "" }, {
                    default: it(() => [
                      we(le(Od), { weight: "quiet" }, {
                        default: it(() => [
                          we(le(Hd), {
                            icon: le(yy),
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
            ])) : (_a(), Rd(le(tt), { key: 2 }))
          ]),
          we(Jm, yV(CV(D.$attrs)), null, 16),
          we(_V, {
            active: S.value,
            "onUpdate:active": B[1] || (B[1] = (oe) => S.value = oe),
            "source-params-count": h.value,
            "target-params-count": f.value,
            "mandatory-missing-params-count": E.value,
            "optional-missing-params-count": F.value,
            "is-template-adapted": d.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const DV = window.Vue.computed, EV = {
  name: "TranslatedSegmentCardHeader",
  components: { MwButtonGroup: Jo },
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const { isSectionTitleSelected: n } = W(), o = Te();
    return { scopeOptions: DV(() => [
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
}, LV = window.Vue.resolveComponent, TV = window.Vue.createVNode, BV = window.Vue.openBlock, PV = window.Vue.createElementBlock, FV = { class: "translated-segment-card-header" };
function MV(e, t, n, o, s, a) {
  const i = LV("mw-button-group");
  return BV(), PV("div", FV, [
    TV(i, {
      items: o.scopeOptions,
      active: n.selection,
      onSelect: o.updateSelection
    }, null, 8, ["items", "active", "onSelect"])
  ]);
}
const NV = /* @__PURE__ */ L(EV, [["render", MV]]);
const qt = window.Vue.unref, va = window.Vue.createVNode, br = window.Vue.withCtx, UV = window.Vue.openBlock, IV = window.Vue.createBlock, zV = window.Vue.computed, jd = window.Codex.CdxButton, qd = window.Codex.CdxIcon, RV = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = W(), o = zV(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (UV(), IV(qt(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: br(() => [
        va(qt(jd), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: qt(n),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: br(() => [
            va(qt(qd), { icon: qt(Ac) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        va(qt(jd), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: br(() => [
            va(qt(qd), { icon: qt(ms) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const OV = window.Vue.useCssVars, fe = window.Vue.createVNode, Gd = window.Vue.resolveDirective, HV = window.Vue.createElementVNode, $r = window.Vue.withDirectives, ne = window.Vue.unref, jV = window.Vue.normalizeStyle, Sa = window.Vue.openBlock, Wd = window.Vue.createElementBlock, qV = window.Vue.createCommentVNode, GV = window.Vue.normalizeClass, Ne = window.Vue.withCtx, WV = window.Vue.toDisplayString, XV = window.Vue.createTextVNode, Xd = window.Vue.createBlock, KV = window.Vue.normalizeProps, YV = window.Vue.guardReactiveProps, bt = window.Vue.computed, QV = window.Vue.ref, JV = window.Vue.inject, ZV = window.Vuex.useStore, e5 = window.Codex.CdxButton, Vr = window.Codex.CdxIcon, t5 = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    OV((v) => ({
      "4929555c": f.value
    }));
    const t = QV("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = W(), { targetLanguage: a } = U(ZV()), i = bt(() => t.value === "sentence"), c = bt(
      () => n.value.subSections.find(
        (v) => v.sentences.some(
          (S) => {
            var V;
            return S.id === ((V = o.value) == null ? void 0 : V.id);
          }
        )
      )
    ), l = bt(() => {
      var v;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (v = o.value) == null ? void 0 : v.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), g = JV("colors"), r = g.gray200, u = g.red600, d = bt(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : c.value.translatedContent), m = bt(
      () => Qt.calculateScore(
        d.value,
        l.value,
        a.value
      )
    ), p = bt(
      () => Qt.getScoreStatus(m.value)
    ), h = bt(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), w = bt(() => ({
      failure: m.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), f = bt(
      () => w.value[p.value]
    );
    return (v, S) => {
      const V = Gd("i18n"), A = Gd("i18n-html");
      return Sa(), Xd(ne(Re), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ne(() => [
          fe(ne(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ne(() => [
              fe(NV, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              fe(ne(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ne(() => [
                  fe(ne(P), { class: "ma-0" }, {
                    default: Ne(() => [
                      fe(ne(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ne(() => [
                          $r(HV("h5", null, null, 512), [
                            [V, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? $r((Sa(), Wd("p", {
                            key: 0,
                            style: jV({ color: ne(u) })
                          }, null, 4)), [
                            [V, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : $r((Sa(), Wd("p", {
                            key: 1,
                            class: GV(h.value)
                          }, null, 2)), [
                            [A, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      fe(ne(C), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ne(() => [
                          fe(ne(P), { class: "ma-0 ms-2" }, {
                            default: Ne(() => [
                              fe(ne(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ne(() => [
                                  fe(ne(Vr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ne(Vy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              fe(ne(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ne(() => [
                                  fe(ne(Rg), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: f.value,
                                    background: ne(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              fe(ne(C), { shrink: "" }, {
                                default: Ne(() => [
                                  fe(ne(Vr), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ne(by)
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
                  i.value ? (Sa(), Xd(ne(e5), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (E) => v.$emit("edit-translation", d.value))
                  }, {
                    default: Ne(() => [
                      fe(ne(Vr), {
                        class: "me-1",
                        icon: ne($c)
                      }, null, 8, ["icon"]),
                      XV(" " + WV(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : qV("", !0)
                ]),
                _: 1
              }),
              fe(ne(C), { class: "translated-segment-card__actions" }, {
                default: Ne(() => [
                  fe(RV, KV(YV(v.$attrs)), null, 16)
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
}, n5 = window.Vuex.useStore, o5 = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = W(), n = n5(), { selectNextTranslationUnit: o, selectTranslationUnitById: s } = Qn();
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
}, ep = window.Vuex.useStore, s5 = () => {
  const e = ep(), { sourceLanguage: t, targetLanguage: n } = U(e);
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield Pa.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, a5 = () => {
  const e = ep(), { currentMTProvider: t, sourceLanguage: n, targetLanguage: o } = U(e), s = s5();
  return () => b(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = X.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, i5 = window.Vue.computed, r5 = (e) => {
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
}, c5 = () => {
  const { selectedContentTranslationUnit: e } = W(), t = i5(
    () => e.value instanceof Ee
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && r5(o);
  };
}, l5 = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (c) => !X.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, u5 = window.Vue.computed, tp = () => {
  const { currentTranslation: e } = cs(), { currentSourcePage: t } = dt();
  return u5(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, d5 = window.Vuex.useStore, Ic = () => {
  const e = d5(), { sourceSection: t, targetPageTitleForPublishing: n } = W(), { pageURLParameter: o } = G(), { sourceLanguage: s, targetLanguage: a } = U(e), i = tp();
  return () => {
    const c = n.value, l = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (m) => l5(m, l)
    );
    const u = t.value.getTranslationProgress(a), d = e.getters["application/isSandboxTarget"];
    return nt.saveTranslation({
      sourceTitle: o.value,
      targetTitle: c,
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
}, g5 = window.Vue.effectScope, m5 = window.Vue.onScopeDispose, p5 = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = g5(!0), n = o.run(() => e(...a))), m5(s), n);
}, h5 = window.Vuex.useStore;
let Ar;
const w5 = () => {
  const e = h5(), t = Ic();
  let n = 1e3, o = 0;
  return Ar = Dc(() => t().then((a) => {
    a instanceof Hn ? (n *= o + 1, o++, setTimeout(Ar, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Xn)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Ar;
}, np = p5(w5), f5 = window.Vuex.useStore, _5 = () => {
  const e = f5(), t = np(), { currentMTProvider: n } = U(e), { sourceSection: o, currentProposedTranslation: s } = W(), { selectNextTranslationUnit: a } = Qn();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, v5 = window.Vuex.useStore, S5 = () => {
  const e = v5(), t = np();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
};
const Z = window.Vue.unref, Ue = window.Vue.createVNode, $t = window.Vue.withCtx, y5 = window.Vue.resolveDirective, Kd = window.Vue.createElementVNode, C5 = window.Vue.withDirectives, k5 = window.Vue.toDisplayString, x5 = window.Vue.createTextVNode, b5 = window.Vue.renderList, $5 = window.Vue.Fragment, Gt = window.Vue.openBlock, Yd = window.Vue.createElementBlock, Nn = window.Vue.createBlock;
window.Vue.createCommentVNode;
const V5 = window.Vue.normalizeClass, A5 = window.Vue.normalizeStyle, D5 = { class: "sx-sentence-selector__header-title mb-0" }, E5 = { class: "sx-sentence-selector__section-contents px-4" }, Un = window.Vue.computed, L5 = window.Vue.nextTick, T5 = window.Vue.onMounted, ya = window.Vue.ref, Qd = window.Vue.watch, B5 = window.Vuex.useStore, Jd = window.Codex.CdxButton, P5 = window.Codex.CdxIcon, F5 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ya(!1), n = ya(!1), o = ya("100%"), s = B5(), { currentMTProvider: a, sourceLanguage: i, targetLanguage: c } = U(s), { sourceSection: l, selectedContentTranslationUnit: g } = W(), r = Un(
      () => s.state.application.translationDataLoadingCounter === 0
    ), u = Un(
      () => {
        var J;
        return (J = l.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), d = Un(() => {
      var J;
      return (J = l.value) == null ? void 0 : J.subSections;
    }), m = Un(
      () => {
        var J;
        return (J = l.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), p = Un(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), h = ut(), w = o5();
    a5()();
    const v = c5();
    T5(() => {
      Qd(
        r,
        () => b(this, null, function* () {
          r.value && (yield L5(), w(), v());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Qd(g, v);
    const {
      selectNextTranslationUnit: S,
      selectPreviousTranslationUnit: V
    } = Qn(), A = _5(), E = () => {
      h({
        event_type: "editor_segment_add",
        translation_source_language: i.value,
        translation_target_language: c.value
      }), A();
    }, F = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, D = me(), B = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        Be.value = !0;
        return;
      }
      Q();
    }, { fetchTranslationsByStatus: re } = Ia(), oe = S5(), { clearURLParameters: H } = G(), Q = () => b(this, null, function* () {
      re("draft"), l.value.reset(), H(), oe(), yield D.push({ name: "dashboard" });
      const { currentTranslation: J } = s.state.application;
      J && (s.commit("application/setCurrentTranslationRestored", !1), s.commit("application/setCurrentTranslation", null));
    }), {
      translateTranslationUnitById: de,
      translateSelectedTranslationUnitForAllProviders: He
    } = Uc(), yn = () => {
      qe.value || (t.value = !0, He());
    }, { getCurrentTitleByLanguage: Lt } = Et(), je = (J, ce) => {
      D.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: m.value,
          title: Lt(
            c.value,
            i.value
          ),
          isInitialEdit: ce || null
        }
      });
    }, Jn = () => D.push({ name: "sx-publisher" }), tn = () => b(this, null, function* () {
      g.value ? yield de(
        g.value.id,
        a.value
      ) : yield de(0, a.value);
    }), qe = Un(
      () => g.value instanceof Ee
    ), Be = ya(!1);
    return (J, ce) => {
      const nn = y5("i18n");
      return Gt(), Yd("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: A5(p.value)
      }, [
        Ue(Z(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: $t(() => [
            Ue(Z(C), { shrink: "" }, {
              default: $t(() => [
                Ue(Z(Jd), {
                  weight: "quiet",
                  class: "px-3",
                  onClick: B
                }, {
                  default: $t(() => [
                    Ue(Z(P5), { icon: Z(Nm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ue(Z(C), {
              grow: "",
              class: "px-1"
            }, {
              default: $t(() => [
                C5(Kd("h4", D5, null, 512), [
                  [nn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Ue(Z(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: $t(() => [
                Ue(Z(Jd), {
                  disabled: !(Z(l) && Z(l).isTranslated),
                  onClick: Jn
                }, {
                  default: $t(() => [
                    x5(k5(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? (Gt(), Nn(Z(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: $t(() => [
            Ue(Z(C), {
              dir: Z(O.getDir)(Z(i)),
              lang: Z(i),
              class: "sx-sentence-selector__section"
            }, {
              default: $t(() => [
                Ue(m$),
                Kd("div", E5, [
                  (Gt(!0), Yd($5, null, b5(d.value, (se) => (Gt(), Nn(sV, {
                    id: se.id,
                    key: `sub-section-${se.id}`,
                    "sub-section": se,
                    onBounceTranslation: F
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !qe.value && u.value ? (Gt(), Nn(t5, {
              key: 0,
              onEditTranslation: ce[0] || (ce[0] = (se) => je(se, !1)),
              onSkipTranslation: Z(S),
              onSelectPreviousSegment: Z(V)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : qe.value ? (Gt(), Nn(AV, {
              key: 2,
              onEditTranslation: je,
              onApplyTranslation: E,
              onSkipTranslation: Z(S),
              onSelectPreviousSegment: Z(V)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Gt(), Nn(G$, {
              key: 1,
              class: V5({ "mb-0": !n.value }),
              onConfigureOptions: yn,
              onEditTranslation: ce[1] || (ce[1] = (se) => je(se, !0)),
              onApplyTranslation: E,
              onSkipTranslation: Z(S),
              onSelectPreviousSegment: Z(V),
              onRetryTranslation: tn
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Gt(), Nn(Z(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: $t(() => [
            Ue(Z(tt), { class: "mt-0" })
          ]),
          _: 1
        })),
        Ue(Z3, {
          active: t.value,
          "onUpdate:active": ce[2] || (ce[2] = (se) => t.value = se)
        }, null, 8, ["active"]),
        Ue(A3, {
          modelValue: Be.value,
          "onUpdate:modelValue": ce[3] || (ce[3] = (se) => Be.value = se),
          onDiscardTranslation: Q
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const M5 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: F5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, N5 = window.Vue.resolveComponent, U5 = window.Vue.createVNode, I5 = window.Vue.normalizeClass, z5 = window.Vue.openBlock, R5 = window.Vue.createElementBlock;
function O5(e, t, n, o, s, a) {
  const i = N5("sx-sentence-selector");
  return z5(), R5("main", {
    class: I5(["sx-sentence-selector-view", a.classes])
  }, [
    U5(i)
  ], 2);
}
const H5 = /* @__PURE__ */ L(M5, [["render", O5]]), j5 = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, q5 = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const G5 = window.Vue.resolveDirective, Ca = window.Vue.withDirectives, Qe = window.Vue.openBlock, Vt = window.Vue.createElementBlock, ka = window.Vue.createCommentVNode, xa = window.Vue.Transition, gn = window.Vue.withCtx, In = window.Vue.createVNode, Po = window.Vue.createElementVNode, mn = window.Vue.unref, W5 = window.Vue.renderList, X5 = window.Vue.Fragment, K5 = window.Vue.normalizeClass, Zd = window.Vue.createBlock, Y5 = window.Vue.toDisplayString, Q5 = window.Vue.createTextVNode, J5 = { class: "sx-quick-tutorial" }, Z5 = { class: "sx-quick-tutorial__main-point py-9 px-6" }, eA = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, tA = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, nA = { class: "sx-quick-tutorial__illustration" }, oA = ["innerHTML"], sA = ["innerHTML"], aA = { class: "sx-quick-tutorial__step-indicator py-3" }, iA = ["onClick"], rA = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, cA = {
  key: "secondary-point-1",
  class: "ma-0"
}, lA = {
  key: "secondary-point-2",
  class: "ma-0"
}, uA = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, eg = window.Vue.ref, tg = window.Codex.CdxButton, dA = window.Codex.CdxIcon, gA = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = eg(2), n = eg(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (c) => c === n.value, a = me(), i = () => a.push({ name: "sx-sentence-selector" });
    return (c, l) => {
      const g = G5("i18n");
      return Qe(), Vt("section", J5, [
        In(mn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: gn(() => [
            Po("section", Z5, [
              In(xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: gn(() => [
                  s(1) ? Ca((Qe(), Vt("h2", eA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? Ca((Qe(), Vt("h2", tA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ka("", !0)
                ]),
                _: 1
              })
            ]),
            Po("section", nA, [
              In(xa, { name: "mw-ui-animation-slide-left" }, {
                default: gn(() => [
                  s(1) ? (Qe(), Vt("div", {
                    key: "illustration-1",
                    innerHTML: mn(q5)
                  }, null, 8, oA)) : s(2) ? (Qe(), Vt("div", {
                    key: "illustration-2",
                    innerHTML: mn(j5)
                  }, null, 8, sA)) : ka("", !0)
                ]),
                _: 1
              })
            ]),
            Po("div", aA, [
              (Qe(!0), Vt(X5, null, W5(t.value, (r) => (Qe(), Vt("span", {
                key: `dot-${r}`,
                class: K5(["dot mx-1", { "dot-active": s(r) }]),
                role: "button",
                onClick: (u) => n.value = r
              }, null, 10, iA))), 128))
            ]),
            Po("section", rA, [
              In(xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: gn(() => [
                  s(1) ? Ca((Qe(), Vt("h3", cA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? Ca((Qe(), Vt("h3", lA, null, 512)), [
                    [g, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ka("", !0)
                ]),
                _: 1
              })
            ]),
            Po("div", uA, [
              In(xa, {
                name: "fade",
                mode: "out-in"
              }, {
                default: gn(() => [
                  s(1) ? (Qe(), Zd(mn(tg), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": c.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: gn(() => [
                      In(mn(dA), { icon: mn(ms) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Qe(), Zd(mn(tg), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: i
                  }, {
                    default: gn(() => [
                      Q5(Y5(c.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
const mA = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: gA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, pA = window.Vue.resolveComponent, hA = window.Vue.createVNode, wA = window.Vue.normalizeClass, fA = window.Vue.openBlock, _A = window.Vue.createElementBlock;
function vA(e, t, n, o, s, a) {
  const i = pA("sx-quick-tutorial");
  return fA(), _A("main", {
    class: wA(["sx-quick-tutorial-view", a.classes])
  }, [
    hA(i)
  ], 2);
}
const SA = /* @__PURE__ */ L(mA, [["render", vA]]);
const ng = window.Vue.ref, yA = window.Vue.onMounted;
function CA(e, t) {
  const n = e.getElementsByTagName("a");
  for (const o of n)
    o.href = q.getPageUrl(t, o.title), o.target = "_blank";
}
const kA = {
  name: "SxEditorOriginalContent",
  components: { MwExpandableContent: z0 },
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
    const t = ng(null), n = ng(0), o = () => parseFloat(
      document.defaultView.getComputedStyle(t.value, null).getPropertyValue("line-height")
    );
    return yA(() => {
      n.value = 2 * o(), CA(t.value, e.language);
    }), {
      originalContentRef: t,
      twoLinesHeight: n
    };
  }
}, xA = window.Vue.resolveDirective, og = window.Vue.createElementVNode, bA = window.Vue.withDirectives, $A = window.Vue.resolveComponent, VA = window.Vue.withCtx, AA = window.Vue.createVNode, DA = window.Vue.openBlock, EA = window.Vue.createElementBlock, LA = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, TA = { class: "sx-editor__original-content-panel__header mb-2" }, BA = ["lang", "dir", "innerHTML"];
function PA(e, t, n, o, s, a) {
  const i = $A("mw-expandable-content"), c = xA("i18n");
  return DA(), EA("section", LA, [
    bA(og("h5", TA, null, 512), [
      [c, void 0, "cx-sx-editor-original-panel-label"]
    ]),
    AA(i, {
      "min-height": o.twoLinesHeight,
      scroll: ""
    }, {
      default: VA(() => [
        og("div", {
          ref: "originalContentRef",
          class: "sx-editor__original-content-panel__body",
          lang: n.language,
          dir: n.dir,
          innerHTML: n.originalContent
        }, null, 8, BA)
      ]),
      _: 1
    }, 8, ["min-height"])
  ]);
}
const FA = /* @__PURE__ */ L(kA, [["render", PA]]), MA = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const Dr = window.Vue.computed, NA = window.Vuex.useStore, UA = {
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
    const { targetLanguage: t } = U(NA()), n = Dr(
      () => Qt.calculateScore(
        e.editedTranslation,
        e.proposedTranslation,
        t.value
      )
    ), o = Dr(() => {
      const a = Qt.getScoreStatus(n.value);
      return a === "failure" ? n.value === 0 ? "failure" : "warning" : a;
    }), s = Dr(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return {
      happyRobotSVG: MA,
      modificationPercentageClass: s,
      mtScore: n
    };
  }
}, Fo = window.Vue.createElementVNode, sg = window.Vue.resolveDirective, Er = window.Vue.withDirectives, IA = window.Vue.normalizeClass, zA = window.Vue.openBlock, RA = window.Vue.createElementBlock, OA = window.Vue.createCommentVNode, HA = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, jA = { class: "sx-editor__feedback-overlay-content px-4" }, qA = ["innerHTML"], GA = { class: "sx-editor__feedback-overlay-content__title" }, WA = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
function XA(e, t, n, o, s, a) {
  const i = sg("i18n"), c = sg("i18n-html");
  return n.showFeedback ? (zA(), RA("div", HA, [
    Fo("div", jA, [
      Fo("div", {
        class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
        innerHTML: o.happyRobotSVG
      }, null, 8, qA),
      Er(Fo("h2", GA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-title"]
      ]),
      Er(Fo("p", WA, null, 512), [
        [i, void 0, "sx-editor-feedback-overlay-clarification"]
      ]),
      Er(Fo("p", {
        class: IA(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
      }, null, 2), [
        [c, [o.mtScore], "sx-editor-feedback-overlay-stats"]
      ])
    ])
  ])) : OA("", !0);
}
const KA = /* @__PURE__ */ L(UA, [["render", XA]]), YA = window.Vuex.useStore, QA = () => {
  const e = YA(), t = Ic(), { selectNextTranslationUnit: n } = Qn(), { sourceSection: o, selectedContentTranslationUnit: s } = W(), { getCurrentTitleByLanguage: a } = Et();
  return (i) => b(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((u) => u.remove()), i = c.innerHTML;
    const { sourceLanguage: l, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof Ee && (i = (yield om(
      i,
      a(g, l),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const Lr = window.Vue.ref, JA = window.Vue.computed, ZA = window.Vuex.useStore, eD = {
  name: "SxEditor",
  components: {
    EditCompleteFeedback: KA,
    MwRow: P,
    SxEditorOriginalContent: FA,
    VisualEditor: r8,
    MwSpinner: tt
  },
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Lr(!1), n = me(), o = ZA(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: c, content: l, originalContent: g, title: r } = history.state, u = Lr(null), d = Lr(!1), m = ut(), { targetLanguage: p, sourceLanguage: h } = U(o), { sourceSection: w } = W(), f = JA(
      () => Qt.calculateScore(
        u.value,
        l,
        p.value
      )
    ), v = QA(), S = (V) => b(this, null, function* () {
      u.value = V, d.value = !0;
      const A = new Promise((F) => setTimeout(F, 2e3));
      let E = Promise.resolve();
      i ? w.value.editedTranslation = V : (f.value === 0 && c && m({
        event_type: "editor_segment_add",
        translation_source_language: h.value,
        translation_target_language: p.value
      }), E = v(V)), yield Promise.all([A, E]), d.value = !1, a();
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
      onEditCompleted: S,
      originalContent: g,
      showFeedback: d,
      title: r
    };
  }
}, Mo = window.Vue.resolveComponent, Tr = window.Vue.openBlock, Br = window.Vue.createBlock, ag = window.Vue.createCommentVNode, ig = window.Vue.createVNode, tD = window.Vue.createElementVNode, nD = window.Vue.withCtx, oD = { class: "sx-editor__editing-surface-container grow" };
function sD(e, t, n, o, s, a) {
  const i = Mo("sx-editor-original-content"), c = Mo("mw-spinner"), l = Mo("edit-complete-feedback"), g = Mo("visual-editor"), r = Mo("mw-row");
  return Tr(), Br(r, {
    tag: "section",
    class: "sx-editor ma-0 no-wrap",
    direction: "column",
    align: "normal"
  }, {
    default: nD(() => [
      o.originalContent ? (Tr(), Br(i, {
        key: 0,
        language: o.sourceLanguage,
        dir: o.getDir(o.sourceLanguage),
        "original-content": o.originalContent
      }, null, 8, ["language", "dir", "original-content"])) : ag("", !0),
      o.editorReady ? ag("", !0) : (Tr(), Br(c, { key: 1 })),
      tD("div", oD, [
        ig(l, {
          "edited-translation": o.editedTranslation,
          "show-feedback": o.showFeedback,
          "proposed-translation": o.content
        }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
        ig(g, {
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
const aD = /* @__PURE__ */ L(eD, [["render", sD]]);
const iD = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: aD
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
}, rD = window.Vue.resolveComponent, cD = window.Vue.createVNode, lD = window.Vue.normalizeClass, uD = window.Vue.openBlock, dD = window.Vue.createElementBlock;
function gD(e, t, n, o, s, a) {
  const i = rD("sx-editor");
  return uD(), dD("main", {
    class: lD(["sx-editor-view", a.classes])
  }, [
    cD(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const mD = /* @__PURE__ */ L(iD, [["render", gD]]);
const rt = window.Vue.unref, pn = window.Vue.createVNode, No = window.Vue.withCtx, pD = window.Vue.resolveDirective, hD = window.Vue.withDirectives, wD = window.Vue.openBlock, fD = window.Vue.createBlock, rg = window.Codex.CdxButton, cg = window.Codex.CdxIcon, _D = {
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
      const a = pD("i18n");
      return wD(), fD(rt(P), { class: "ma-0 sx-publisher__header" }, {
        default: No(() => [
          pn(rt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: No(() => [
              pn(rt(rg), {
                class: "px-3",
                weight: "quiet",
                onClick: n
              }, {
                default: No(() => [
                  pn(rt(cg), { icon: rt(Ua) }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          hD(pn(rt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          pn(rt(C), { shrink: "" }, {
            default: No(() => [
              pn(rt(rg), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: No(() => [
                  pn(rt(cg), { icon: rt(vy) }, null, 8, ["icon"])
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
}, vD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, SD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, lg = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const yD = {
  name: "SxPublisherAnimationDialog",
  components: { MwDialog: ot, MwRow: P, MwCol: C },
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
        svg: vD,
        title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: SD,
        title: e.$i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: lg,
        title: e.$i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: e.$i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: lg,
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
}, Pr = window.Vue.createElementVNode, ug = window.Vue.toDisplayString, Fr = window.Vue.resolveComponent, Mr = window.Vue.withCtx, dg = window.Vue.createVNode, CD = window.Vue.openBlock, kD = window.Vue.createBlock, xD = window.Vue.createCommentVNode, bD = ["innerHTML"], $D = ["textContent"], VD = ["textContent"];
function AD(e, t, n, o, s, a) {
  const i = Fr("mw-col"), c = Fr("mw-row"), l = Fr("mw-dialog");
  return n.active ? (CD(), kD(l, {
    key: 0,
    "overlay-opacity": 0.85,
    header: !1,
    class: "sx-publisher__publish-animation"
  }, {
    default: Mr(() => [
      dg(c, { class: "ma-4" }, {
        default: Mr(() => [
          dg(i, null, {
            default: Mr(() => [
              Pr("div", {
                class: "sx-publisher__publish-animation-icon mb-4",
                innerHTML: a.animationSvg
              }, null, 8, bD),
              Pr("h2", {
                textContent: ug(a.animationTitle)
              }, null, 8, $D),
              Pr("p", {
                class: "ma-0",
                textContent: ug(a.animationSubtitle)
              }, null, 8, VD)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  })) : xD("", !0);
}
const DD = /* @__PURE__ */ L(yD, [["render", AD]]);
const De = window.Vue.unref, Je = window.Vue.createVNode, At = window.Vue.withCtx, ED = window.Vue.resolveDirective, LD = window.Vue.withDirectives, gg = window.Vue.toDisplayString, TD = window.Vue.createTextVNode, Nr = window.Vue.openBlock, mg = window.Vue.createElementBlock, BD = window.Vue.createCommentVNode, op = window.Vue.createElementVNode, PD = window.Vue.createBlock, FD = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, MD = ["src"], ND = ["textContent"], UD = /* @__PURE__ */ op("p", { class: "mt-0" }, null, -1), ID = window.Vue.computed, zD = window.Vue.inject, RD = window.Vue.ref, pg = window.Codex.CdxButton, OD = window.Codex.CdxIcon, HD = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Yg,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = RD(""), s = () => n("close"), a = () => n("publish", o.value), i = zD("breakpoints"), c = ID(() => i.value.mobile);
    return (l, g) => {
      const r = ED("i18n");
      return e.active && e.captchaDetails ? (Nr(), PD(De(ot), {
        key: 0,
        "overlay-opacity": 0.65,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: At(() => [
          Je(De(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: At(() => [
              Je(De(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: At(() => [
                  Je(De(pg), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    onClick: s
                  }, {
                    default: At(() => [
                      Je(De(OD), { icon: De(Ua) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              LD(Je(De(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Je(De(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: At(() => [
                  Je(De(pg), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: At(() => [
                      TD(gg(l.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Je(De(Zo))
        ]),
        default: At(() => [
          op("div", FD, [
            e.captchaDetails.type === "image" ? (Nr(), mg("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, MD)) : (Nr(), mg("p", {
              key: 1,
              textContent: gg(e.captchaDetails.question)
            }, null, 8, ND)),
            UD,
            Je(De(P), { class: "ma-0" }, {
              default: At(() => [
                Je(De(C), null, {
                  default: At(() => [
                    Je(De(mc), {
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
      }, 8, ["fullscreen"])) : BD("", !0);
    };
  }
};
const hn = window.Vue.unref, Uo = window.Vue.createVNode, ba = window.Vue.withCtx, wn = window.Vue.createElementVNode, jD = window.Vue.resolveDirective, qD = window.Vue.withDirectives, GD = window.Vue.renderList, hg = window.Vue.Fragment, Ur = window.Vue.openBlock, wg = window.Vue.createElementBlock, WD = window.Vue.toDisplayString, XD = window.Vue.normalizeClass, KD = window.Vue.createBlock, YD = { class: "mw-ui-dialog__header" }, QD = { class: "row ma-0 px-4 py-3" }, JD = { class: "col shrink justify-center" }, ZD = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, eE = { class: "mb-0" }, tE = { class: "pa-4" }, nE = ["textContent"], oE = window.Vuex.useStore, Io = window.Vue.computed, sE = window.Codex.CdxButton, aE = window.Codex.CdxIcon, iE = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = oE(), s = Io(() => o.state.application.publishTarget), a = Io(() => o.state.translator.isAnon), i = Te(), { sourceSection: c } = W(), l = Io(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = Io(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = Io(() => [
      {
        label: l.value,
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
      const w = jD("i18n");
      return Ur(), KD(hn(ot), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        "overlay-opacity": 0.7,
        "overlay-color": p.$mwui.colors.gray700,
        onInput: h[0] || (h[0] = (f) => p.$emit("update:active", f)),
        onClose: d
      }, {
        header: ba(() => [
          wn("div", YD, [
            wn("div", QD, [
              wn("div", JD, [
                Uo(hn(sE), {
                  class: "pa-0",
                  weight: "quiet",
                  onClick: d
                }, {
                  default: ba(() => [
                    Uo(hn(aE), { icon: hn(Nm) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              wn("div", ZD, [
                qD(wn("h4", eE, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Uo(hn(Zo))
          ])
        ]),
        default: ba(() => [
          wn("div", tE, [
            Uo(hn(zg), {
              value: s.value,
              name: "publish-options",
              onInput: m
            }, {
              default: ba(() => [
                (Ur(!0), wg(hg, null, GD(r.value, (f, v) => (Ur(), wg(hg, {
                  key: f.label
                }, [
                  Uo(hn(Da), {
                    class: "pa-0 my-1",
                    label: f.label,
                    "input-value": f.value,
                    disabled: f.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  wn("p", {
                    class: XD(["complementary ms-7 mt-0", u(v)]),
                    textContent: WD(f.details)
                  }, null, 10, nE)
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
const Ze = window.Vue.unref, fn = window.Vue.createVNode, rE = window.Vue.resolveDirective, fg = window.Vue.withDirectives, $a = window.Vue.openBlock, _g = window.Vue.createElementBlock, cE = window.Vue.createCommentVNode, vg = window.Vue.toDisplayString, Ir = window.Vue.createElementVNode, zn = window.Vue.withCtx, Sg = window.Vue.createBlock, lE = window.Vue.Fragment, uE = window.Vue.normalizeClass, dE = { class: "sx-publisher__review-info__content" }, gE = {
  key: 0,
  class: "complementary ma-0"
}, mE = ["textContent"], pE = ["textContent"], Wt = window.Vue.computed, yg = window.Vue.ref, hE = window.Vue.watch, Cg = window.Codex.CdxButton, zr = window.Codex.CdxIcon, wE = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = yg(0), o = yg(null);
    hE(o, () => {
      var w;
      const h = (w = o.value) == null ? void 0 : w.$el;
      if (h instanceof HTMLElement) {
        const f = h.querySelector("a");
        f && f.setAttribute("target", "_blank");
      }
    });
    const s = Wt(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Wt(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = Wt(() => {
      switch (a.value) {
        case "warning":
          return Mm;
        case "error":
          return wy;
        default:
          return Sy;
      }
    }), c = Wt(() => a.value === "default"), l = Wt(
      () => c.value ? "notice" : a.value
    ), g = Wt(
      () => `sx-publisher__review-info--${l.value}`
    ), r = Te(), u = Wt(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = Wt(
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
      const f = rE("i18n-html");
      return $a(), Sg(Ze(Ow), {
        type: l.value,
        class: uE(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: c.value
      }, {
        icon: zn(() => [
          fn(Ze(zr), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: zn(() => [
          Ir("div", dE, [
            a.value === "default" ? fg(($a(), _g("p", gE, null, 512)), [
              [f, void 0, "cx-sx-publisher-review-info"]
            ]) : ($a(), _g(lE, { key: 1 }, [
              Ir("h5", {
                textContent: vg(d.value)
              }, null, 8, mE),
              Ir("p", {
                textContent: vg(u.value)
              }, null, 8, pE),
              fn(Ze(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: zn(() => [
                  fg(fn(Ze(C), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? ($a(), Sg(Ze(C), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: zn(() => [
                      fn(Ze(Cg), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        onClick: m
                      }, {
                        default: zn(() => [
                          fn(Ze(zr), { icon: Ze(Ac) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }),
                      fn(Ze(Cg), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        onClick: p
                      }, {
                        default: zn(() => [
                          fn(Ze(zr), { icon: Ze(ms) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : cE("", !0)
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
}, fE = (e) => {
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
}, kg = window.Vue.ref, _E = window.Vuex.useStore, vE = () => {
  const e = _E(), { pageURLParameter: t } = G(), { sourceSection: n, targetPageTitleForPublishing: o } = W(), s = tp(), a = kg(!1), i = kg("pending"), c = () => a.value = !1, l = Ic(), g = (u, d) => b(void 0, null, function* () {
    const m = yield l();
    if (m instanceof Hn)
      return { publishFeedbackMessage: m, targetUrl: null };
    const p = m, {
      /** @type {PageSection} */
      sourceLanguage: h,
      targetLanguage: w
    } = e.state.application, f = o.value, v = e.getters["application/isSandboxTarget"], S = {
      html: fE(n.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: f,
      sourceSectionTitle: n.value.sourceSectionTitleForPublishing,
      targetSectionTitle: n.value.targetSectionTitleForPublishing,
      sourceLanguage: h,
      targetLanguage: w,
      revision: s.value,
      isSandbox: v,
      sectionTranslationId: p
    };
    return u && (S.captchaId = u, S.captchaWord = d), nt.publishTranslation(S);
  });
  return {
    closePublishDialog: c,
    doPublish: (u = null, d = null) => b(void 0, null, function* () {
      i.value = "pending", a.value = !0;
      let m;
      try {
        m = yield g(
          d == null ? void 0 : d.id,
          u
        );
      } catch (p) {
        if (p instanceof Xn)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw p;
      }
      return m;
    }),
    isPublishDialogActive: a,
    publishStatus: i
  };
}, SE = window.Vue.computed, yE = () => {
  const e = me(), { sourceSection: t } = W(), { getCurrentTitleByLanguage: n } = Et(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = G(), a = SE(
    () => t.value.subSections.reduce(
      (i, c) => c.isTranslated ? `${i}<section rel="cx:Section" id="${c.targetSectionId}">${c.translatedContent}</section>` : i,
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
}, CE = window.Vuex.useStore, kE = () => {
  const e = CE(), { targetLanguage: t } = U(e), { sourceSection: n } = W();
  return () => {
    const o = Qt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = Qt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, i = s === "failure" ? "error" : "warning";
    let c, l;
    return i === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Hn({
      title: c,
      text: l,
      status: i,
      type: "mt"
    });
  };
}, xE = window.Vue.ref, bE = window.Vue.computed, $E = () => {
  const e = kE(), t = xE([]), n = bE(
    () => t.value.some((i) => i.isError)
  );
  return {
    addPublishFeedbackMessage: (i) => {
      t.value.push(i), t.value.sort((c, l) => +l.isError - +c.isError);
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
}, VE = window.Vuex.useStore, AE = () => {
  const e = VE(), { currentSourcePage: t } = dt(), { sourceLanguage: n, targetLanguage: o } = U(e), { sourceSection: s, targetPageTitleForPublishing: a } = W();
  return (i) => b(void 0, null, function* () {
    const c = a.value, l = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), u = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !l && r.getNamespaceId() !== u.user)
      try {
        yield Pa.addWikibaseLink(
          n.value,
          o.value,
          g,
          c
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
}, xg = window.Vue.ref, DE = () => {
  const e = xg(!1), t = xg(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ie = window.Vue.unref, xe = window.Vue.createVNode, EE = window.Vue.resolveDirective, zo = window.Vue.createElementVNode, LE = window.Vue.withDirectives, Rn = window.Vue.withCtx, TE = window.Vue.openBlock, BE = window.Vue.createElementBlock, PE = { class: "sx-publisher" }, FE = { class: "sx-publisher__publish-panel pa-4" }, ME = { class: "mb-2" }, NE = ["innerHTML"], UE = { class: "sx-publisher__section-preview pa-5" }, IE = ["innerHTML"], bg = window.Vue.computed, zE = window.Vue.onMounted, RE = window.Vue.ref, OE = window.Vue.watch, HE = window.Vuex.useStore, $g = window.Codex.CdxButton, Vg = window.Codex.CdxIcon, jE = {
  __name: "SXPublisher",
  setup(e) {
    const t = HE(), { sourceSection: n } = W(), o = bg(() => {
      var D;
      return (D = n.value) == null ? void 0 : D.title;
    }), s = Te(), a = bg(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: c,
      handleCaptchaError: l,
      onCaptchaDialogClose: g
    } = DE(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: u,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: m,
      initializePublishFeedbackMessages: p
    } = $E(), h = AE(), { doPublish: w, isPublishDialogActive: f, publishStatus: v, closePublishDialog: S } = vE(), V = (D = null) => b(this, null, function* () {
      const B = yield w(D, i);
      if (!B)
        return;
      const { publishFeedbackMessage: re, targetUrl: oe } = B;
      if (l(re)) {
        S();
        return;
      } else
        re && d(re);
      v.value = u.value ? "failure" : "success", setTimeout(() => {
        if (u.value) {
          S();
          return;
        }
        h(oe);
      }, 1e3);
    });
    zE(() => p());
    const A = yE(), E = RE(!1), F = () => E.value = !0;
    return OE(E, (D) => {
      D || m();
    }), (D, B) => {
      const re = EE("i18n");
      return TE(), BE("section", PE, [
        xe(_D, {
          "is-publishing-disabled": ie(u),
          onPublishTranslation: V
        }, null, 8, ["is-publishing-disabled"]),
        zo("div", FE, [
          LE(zo("h5", ME, null, 512), [
            [re, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          zo("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, NE),
          xe(ie(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Rn(() => [
              xe(ie(C), { shrink: "" }, {
                default: Rn(() => [
                  xe(ie($g), {
                    weight: "quiet",
                    onClick: F
                  }, {
                    default: Rn(() => [
                      xe(ie(Vg), { icon: ie($y) }, null, 8, ["icon"])
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
        xe(wE, { "publish-feedback-messages": ie(r) }, null, 8, ["publish-feedback-messages"]),
        zo("section", UE, [
          xe(ie(P), { class: "pb-5 ma-0" }, {
            default: Rn(() => [
              xe(ie(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              xe(ie(C), { shrink: "" }, {
                default: Rn(() => [
                  xe(ie($g), {
                    weight: "quiet",
                    onClick: ie(A)
                  }, {
                    default: Rn(() => [
                      xe(ie(Vg), { icon: ie($c) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          zo("div", {
            innerHTML: ie(n).translationHtml
          }, null, 8, IE)
        ]),
        xe(iE, {
          active: E.value,
          "onUpdate:active": B[0] || (B[0] = (oe) => E.value = oe)
        }, null, 8, ["active"]),
        xe(HD, {
          active: ie(c),
          "captcha-details": ie(i),
          onClose: ie(g),
          onPublish: B[1] || (B[1] = (oe) => V(oe))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        xe(DD, {
          active: ie(f),
          status: ie(v)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const qE = {
  name: "SxPublisherView",
  components: {
    SxPublisher: jE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, GE = window.Vue.resolveComponent, WE = window.Vue.createVNode, XE = window.Vue.normalizeClass, KE = window.Vue.openBlock, YE = window.Vue.createElementBlock;
function QE(e, t, n, o, s, a) {
  const i = GE("sx-publisher");
  return KE(), YE("main", {
    class: XE(["sx-publisher-view", a.classes])
  }, [
    WE(i)
  ], 2);
}
const JE = /* @__PURE__ */ L(qE, [["render", QE]]);
const ZE = {
  name: "SxSearchArticleSuggestion",
  components: { MwThumbnail: pc, MwIcon: Se, MwRow: P, MwCol: C },
  props: {
    suggestion: {
      type: Yn,
      required: !0
    }
  },
  setup(e) {
    return { mwIconStar: Zh, mwIconLanguage: sw, mwIconArticle: gc, getDir: O.getDir };
  }
}, Va = window.Vue.resolveComponent, Xt = window.Vue.createVNode, _n = window.Vue.withCtx, Rr = window.Vue.toDisplayString, Or = window.Vue.createElementVNode, eL = window.Vue.openBlock, tL = window.Vue.createBlock, nL = ["textContent"], oL = ["textContent"], sL = ["textContent"];
function aL(e, t, n, o, s, a) {
  const i = Va("mw-thumbnail"), c = Va("mw-col"), l = Va("mw-icon"), g = Va("mw-row");
  return eL(), tL(g, {
    class: "cx-search-suggestion pt-3 ma-0",
    align: "normal",
    lang: n.suggestion.language,
    dir: o.getDir(n.suggestion.language)
  }, {
    default: _n(() => [
      Xt(c, { shrink: "" }, {
        default: _n(() => [
          Xt(i, {
            class: "cx-search-suggestion__thumbnail",
            thumbnail: n.suggestion.thumbnail,
            "thumbnail-size": 56,
            "placeholder-icon-size": 30
          }, null, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      Xt(c, { class: "ms-4" }, {
        default: _n(() => [
          Xt(g, {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: _n(() => [
              Xt(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: _n(() => [
                  Or("h5", {
                    class: "my-0 cx-search-suggestion__source-title",
                    textContent: Rr(n.suggestion.title)
                  }, null, 8, nL)
                ]),
                _: 1
              }),
              Xt(c, {
                shrink: "",
                class: "mb-1"
              }, {
                default: _n(() => [
                  Or("p", {
                    class: "ma-0 cx-search-suggestion__source-description complementary",
                    textContent: Rr(n.suggestion.description)
                  }, null, 8, oL)
                ]),
                _: 1
              }),
              Xt(c, {
                class: "cx-search-suggestion__languages",
                shrink: "",
                align: "center"
              }, {
                default: _n(() => [
                  Xt(l, {
                    icon: o.mwIconLanguage,
                    size: 16,
                    class: "me-2"
                  }, null, 8, ["icon"]),
                  Or("small", {
                    textContent: Rr(n.suggestion.langLinksCount)
                  }, null, 8, sL)
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
const sp = /* @__PURE__ */ L(ZE, [["render", aL]]), iL = window.Vue.computed, Ag = window.Vue.ref, rL = window.Vue.watch, cL = (e, t) => {
  const o = Ag([]), s = Ag(!1), a = iL(
    () => o.value.slice(0, 4)
  ), i = Dc(() => b(void 0, null, function* () {
    try {
      o.value = yield ss.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500);
  return rL(t, () => {
    s.value = !0, o.value = [], i();
  }), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
const lL = window.Vue.computed, uL = window.Vuex.useStore, dL = {
  name: "SearchResultsCard",
  components: { SxSearchArticleSuggestion: sp, MwCard: Re, MwSpinner: tt },
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguage: t, sourceLanguageAutonym: n } = U(
      uL()
    ), o = lL(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = cL(
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
}, Hr = window.Vue.resolveComponent, Ro = window.Vue.openBlock, jr = window.Vue.createBlock, gL = window.Vue.createCommentVNode, mL = window.Vue.resolveDirective, pL = window.Vue.withDirectives, Dg = window.Vue.createElementBlock, hL = window.Vue.renderList, wL = window.Vue.Fragment, fL = window.Vue.withCtx, _L = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
};
function vL(e, t, n, o, s, a) {
  const i = Hr("mw-spinner"), c = Hr("sx-search-article-suggestion"), l = Hr("mw-card"), g = mL("i18n");
  return Ro(), jr(l, { class: "sx-article-search__results mb-0 pa-4" }, {
    default: fL(() => [
      o.searchResultsLoading ? (Ro(), jr(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? pL((Ro(), Dg("p", _L, null, 512)), [
        [g, [
          n.searchInput,
          o.sourceLanguageAutonym
        ], "cx-sx-article-search-no-search-results-message"]
      ]) : gL("", !0),
      (Ro(!0), Dg(wL, null, hL(o.searchResultsSlice, (r) => (Ro(), jr(c, {
        key: r.pageid,
        suggestion: r,
        onClick: (u) => e.$emit("suggestion-clicked", r)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const SL = /* @__PURE__ */ L(dL, [["render", vL]]);
const yL = window.Vuex.mapState, CL = {
  name: "ArticleSuggestionsCard",
  components: { SxSearchArticleSuggestion: sp, MwCard: Re },
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
  computed: ye({}, yL({
    sourceLanguage: (e) => e.application.sourceLanguage
  }))
}, kL = window.Vue.toDisplayString, xL = window.Vue.createElementVNode, bL = window.Vue.renderList, $L = window.Vue.Fragment, qr = window.Vue.openBlock, VL = window.Vue.createElementBlock, Eg = window.Vue.resolveComponent, Lg = window.Vue.createBlock, Tg = window.Vue.withCtx, AL = ["textContent"];
function DL(e, t, n, o, s, a) {
  const i = Eg("sx-search-article-suggestion"), c = Eg("mw-card");
  return qr(), Lg(c, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
    header: Tg(() => [
      xL("h5", {
        class: "ma-0 pb-1 sx-article-search__suggestions-header",
        textContent: kL(n.cardTitle)
      }, null, 8, AL)
    ]),
    default: Tg(() => [
      (qr(!0), VL($L, null, bL(n.suggestions, (l) => (qr(), Lg(i, {
        key: l.pageid,
        suggestion: l,
        onClick: (g) => e.$emit("suggestion-clicked", l)
      }, null, 8, ["suggestion", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const Bg = /* @__PURE__ */ L(CL, [["render", DL]]), EL = window.Vue.computed, LL = (e, t) => EL(() => {
  const o = {
    value: "other",
    props: {
      icon: rw,
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
}), TL = window.Vue.computed, BL = (e, t, n) => TL(() => {
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
const PL = window.Vue.resolveDirective, FL = window.Vue.createElementVNode, Gr = window.Vue.withDirectives, ue = window.Vue.unref, Oo = window.Vue.withCtx, ct = window.Vue.createVNode, Ho = window.Vue.openBlock, Pg = window.Vue.createBlock, ML = window.Vue.createCommentVNode, Wr = window.Vue.createElementBlock, NL = window.Vue.Fragment, UL = window.Vue.vShow, IL = { class: "sx-article-search" }, zL = { class: "mb-0" }, RL = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, jo = window.Vue.ref, OL = window.Vue.onMounted, Xr = window.Vue.computed, Fg = window.Vue.watch, HL = window.Vue.inject, jL = window.Vuex.useStore, qL = window.Codex.CdxButton, GL = window.Codex.CdxIcon, WL = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = jo(""), n = jo(!1), o = jo(null), s = jo(!1), a = jo([]), i = jL(), { sourceLanguage: c, targetLanguage: l } = U(i), { supportedLanguageCodes: g } = ls(), r = BL(
      c,
      l,
      a
    ), u = LL(
      c,
      r
    ), d = me(), { fetchAllTranslations: m } = Ia();
    OL(() => b(this, null, function* () {
      var Q;
      yield Pm()(), m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (de) {
      }
      (Q = o.value) == null || Q.focus();
    }));
    const p = () => {
      d.push({ name: "dashboard" });
    }, h = Fm(), w = (H) => h(H, l.value), f = (H) => {
      if (H === "other") {
        s.value = !0;
        return;
      }
      w(H);
    };
    Fg(c, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const v = ut();
    Fg(t, () => {
      n.value || (n.value = !0, v({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: l.value
      }));
    });
    const S = () => {
      s.value = !1;
    }, V = (H) => {
      s.value = !1, a.value.push(H), f(H);
    }, A = Xr(
      () => i.getters["mediawiki/getRecentlyEditedPages"]
    ), E = Xr(() => i.getters["mediawiki/getNearbyPages"]), F = HL("breakpoints"), D = Xr(() => F.value.tabletAndDown), {
      startRecentlyEditedSectionTranslation: B,
      startNearbySectionTranslation: re,
      startSearchResultSectionTranslation: oe
    } = kc();
    return (H, Q) => {
      const de = PL("i18n");
      return Ho(), Wr("section", IL, [
        ct(ue(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Oo(() => [
            ct(ue(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Oo(() => [
                Gr(FL("h5", zL, null, 512), [
                  [de, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            ct(ue(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Oo(() => [
                ct(ue(qL), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  onClick: p
                }, {
                  default: Oo(() => [
                    ct(ue(GL), { icon: ue(Ua) }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ct(ue(mc), {
          ref_key: "searchInputRef",
          ref: o,
          value: t.value,
          "onUpdate:value": Q[0] || (Q[0] = (He) => t.value = He),
          "icon-size": 20,
          icon: ue(Ng),
          placeholder: H.$i18n("cx-sx-article-search-input-placeholder"),
          type: "search"
        }, null, 8, ["value", "icon", "placeholder"]),
        ct(ue(Jo), {
          class: "sx-article-search__language-button-group",
          items: ue(u),
          active: ue(c),
          onSelect: f
        }, null, 8, ["items", "active"]),
        t.value ? ML("", !0) : (Ho(), Wr(NL, { key: 0 }, [
          A.value && A.value.length ? (Ho(), Pg(Bg, {
            key: 0,
            "card-title": H.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: A.value,
            onSuggestionClicked: ue(B)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : E.value && E.value.length ? (Ho(), Pg(Bg, {
            key: 1,
            "card-title": H.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: E.value,
            onSuggestionClicked: ue(re)
          }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : Gr((Ho(), Wr("p", RL, null, 512)), [
            [de, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Gr(ct(SL, {
          "search-input": t.value,
          onSuggestionClicked: ue(oe)
        }, null, 8, ["search-input", "onSuggestionClicked"]), [
          [UL, !!t.value]
        ]),
        ct(ue(ot), {
          value: s.value,
          "onUpdate:value": Q[1] || (Q[1] = (He) => s.value = He),
          class: "sx-article-search-language-selector",
          animation: "slide-up",
          fullscreen: D.value,
          header: D.value,
          "overlay-opacity": 0,
          title: H.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: S
        }, {
          default: Oo(() => [
            ct(ue(jm), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ue(g),
              suggestions: ue(r),
              placeholder: H.$i18n("cx-sx-language-selector-placeholder"),
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
const XL = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: WL
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, KL = window.Vue.resolveComponent, YL = window.Vue.createVNode, QL = window.Vue.normalizeClass, JL = window.Vue.openBlock, ZL = window.Vue.createElementBlock;
function eT(e, t, n, o, s, a) {
  const i = KL("sx-article-search");
  return JL(), ZL("main", {
    class: QL(["sx-article-search-view", a.classes])
  }, [
    YL(i)
  ], 2);
}
const tT = /* @__PURE__ */ L(XL, [["render", eT]]), nT = window.Vuex.useStore, ap = [
  {
    path: "",
    name: "dashboard",
    component: Iu,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: tT,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: kb,
    props: (e) => ({
      eventSource: e.query.eventSource
    }),
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: X2,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: S3,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: SA,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: H5,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: mD,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: JE,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Iu,
    meta: { workflowStep: 0 }
  }
], zc = Ev({
  history: D1(),
  routes: ap
});
zc.beforeEach((e, t, n) => {
  const o = nT();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || Hg.assertUser().catch((c) => {
    c instanceof Xn && o.commit("application/setIsLoginDialogOn", !0);
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
    const c = Math.ceil(a) - 1, l = ap.find(
      (g) => g.meta.workflowStep === c
    );
    n({ name: l.name });
    return;
  }
  n();
});
zc.afterEach((e, t) => {
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const oT = window.Vue.createApp, sT = mw.config.get("wgUserLanguage"), aT = "en", iT = mw.messages.values || {}, en = oT(Nf);
en.config.globalProperties.$incompleteVersion = !0;
const rT = Uy();
en.use(rT);
en.use(zc);
en.use(Q_);
en.use(Y0);
en.use(K0);
const cT = Zv({
  locale: sT,
  finalFallback: aT,
  messages: iT,
  wikilinks: !0
});
en.use(cT);
en.mount("#contenttranslation");
