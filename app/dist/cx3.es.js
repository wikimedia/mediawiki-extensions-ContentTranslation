/*@nomin*/
var kf = Object.defineProperty, xf = Object.defineProperties;
var $f = Object.getOwnPropertyDescriptors;
var tu = Object.getOwnPropertySymbols;
var Vf = Object.prototype.hasOwnProperty, Ef = Object.prototype.propertyIsEnumerable;
var nu = (e, t, n) => t in e ? kf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t) => {
  for (var n in t || (t = {}))
    Vf.call(t, n) && nu(e, n, t[n]);
  if (tu)
    for (var n of tu(t))
      Ef.call(t, n) && nu(e, n, t[n]);
  return e;
}, Qe = (e, t) => xf(e, $f(t));
var C = (e, t, n) => new Promise((o, s) => {
  var a = (d) => {
    try {
      c(n.next(d));
    } catch (g) {
      s(g);
    }
  }, i = (d) => {
    try {
      c(n.throw(d));
    } catch (g) {
      s(g);
    }
  }, c = (d) => d.done ? o(d.value) : Promise.resolve(d.value).then(a, i);
  c((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: i,
    CdxMessage: c
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: i,
    CdxMessage: c
  };
}
const J = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Lf = {
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
}, Af = window.Vue.toDisplayString, Fi = window.Vue.openBlock, Mi = window.Vue.createElementBlock, Df = window.Vue.createCommentVNode, ou = window.Vue.createElementVNode, Tf = window.Vue.normalizeClass, Bf = ["width", "height", "aria-labelledby"], Pf = ["id"], Ff = ["fill"], Mf = ["d"];
function Nf(e, t, n, o, s, a) {
  return Fi(), Mi("span", {
    class: Tf(["mw-ui-icon notranslate", a.classes])
  }, [
    (Fi(), Mi("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Fi(), Mi("title", {
        key: 0,
        id: n.iconName
      }, Af(n.iconName), 9, Pf)) : Df("", !0),
      ou("g", { fill: n.iconColor }, [
        ou("path", { d: a.iconImagePath }, null, 8, Mf)
      ], 8, Ff)
    ], 8, Bf))
  ], 2);
}
const Pe = /* @__PURE__ */ J(Lf, [["render", Nf]]);
const Uf = {
  name: "MwButton",
  components: {
    MwIcon: Pe
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
}, If = window.Vue.renderSlot, Rf = window.Vue.resolveComponent, su = window.Vue.normalizeClass, ea = window.Vue.openBlock, Ni = window.Vue.createBlock, Ui = window.Vue.createCommentVNode, zf = window.Vue.toDisplayString, Of = window.Vue.createElementBlock, jf = window.Vue.toHandlerKey, Hf = window.Vue.withModifiers, qf = window.Vue.mergeProps, Gf = window.Vue.createElementVNode, Xf = window.Vue.resolveDynamicComponent, Wf = window.Vue.withCtx, Kf = { class: "mw-ui-button__content" }, Yf = ["textContent"];
function Jf(e, t, n, o, s, a) {
  const i = Rf("mw-icon");
  return ea(), Ni(Xf(a.component), {
    class: su(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Wf(() => [
      If(e.$slots, "default", {}, () => [
        Gf("span", Kf, [
          n.icon ? (ea(), Ni(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: su(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Ui("", !0),
          !a.isIcon && n.label ? (ea(), Of("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: zf(n.label)
          }, null, 8, Yf)) : Ui("", !0),
          n.indicator ? (ea(), Ni(i, qf({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [jf(a.indicatorClickEvent)]: t[0] || (t[0] = Hf((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Ui("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Te = /* @__PURE__ */ J(Uf, [["render", Jf]]);
const Zf = {
  name: "MwButtonGroup",
  components: {
    MwButton: Te
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
}, Qf = window.Vue.renderList, ew = window.Vue.Fragment, Ii = window.Vue.openBlock, au = window.Vue.createElementBlock, tw = window.Vue.resolveComponent, nw = window.Vue.withModifiers, ow = window.Vue.mergeProps, sw = window.Vue.createBlock, aw = { class: "row mw-ui-button-group ma-0 pa-0" };
function iw(e, t, n, o, s, a) {
  const i = tw("mw-button");
  return Ii(), au("div", aw, [
    (Ii(!0), au(ew, null, Qf(n.items, (c) => (Ii(), sw(i, ow({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: nw((d) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Us = /* @__PURE__ */ J(Zf, [["render", iw]]);
const rw = {
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
}, iu = window.Vue.renderSlot, lw = window.Vue.toDisplayString, ru = window.Vue.openBlock, lu = window.Vue.createElementBlock, cw = window.Vue.createCommentVNode, uw = window.Vue.createElementVNode, dw = { class: "mw-ui-card" }, gw = ["textContent"], pw = { class: "mw-ui-card__content" };
function hw(e, t, n, o, s, a) {
  return ru(), lu("div", dw, [
    iu(e.$slots, "header", {}, () => [
      n.title ? (ru(), lu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: lw(n.title)
      }, null, 8, gw)) : cw("", !0)
    ]),
    uw("div", pw, [
      iu(e.$slots, "default")
    ])
  ]);
}
const Ge = /* @__PURE__ */ J(rw, [["render", hw]]);
const fw = {}, ww = window.Vue.openBlock, _w = window.Vue.createElementBlock, vw = { class: "mw-ui-divider row" };
function Sw(e, t) {
  return ww(), _w("div", vw);
}
const mi = /* @__PURE__ */ J(fw, [["render", Sw]]);
const yw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Cw = window.Vue.renderSlot, bw = window.Vue.resolveDynamicComponent, kw = window.Vue.withCtx, xw = window.Vue.openBlock, $w = window.Vue.createBlock;
function Vw(e, t, n, o, s, a) {
  return xw(), $w(bw(n.tag), { class: "mw-grid container" }, {
    default: kw(() => [
      Cw(e.$slots, "default")
    ]),
    _: 3
  });
}
const Ew = /* @__PURE__ */ J(yw, [["render", Vw]]), Lw = {
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
}, Aw = window.Vue.renderSlot, Dw = window.Vue.resolveDynamicComponent, Tw = window.Vue.normalizeClass, Bw = window.Vue.withCtx, Pw = window.Vue.openBlock, Fw = window.Vue.createBlock;
function Mw(e, t, n, o, s, a) {
  return Pw(), Fw(Dw(n.tag), {
    class: Tw(a.classes)
  }, {
    default: Bw(() => [
      Aw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const P = /* @__PURE__ */ J(Lw, [["render", Mw]]), Kl = ["mobile", "tablet", "desktop", "desktop-wide"], Nw = Kl.reduce(
  (e, t) => Qe(de({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Uw = {
  name: "MwCol",
  props: Qe(de({}, Nw), {
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
      for (let n = 0; n < Kl.length; n++) {
        let o = Kl[n], s = this.$props[o];
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
}, Iw = window.Vue.renderSlot, Rw = window.Vue.resolveDynamicComponent, zw = window.Vue.normalizeClass, Ow = window.Vue.withCtx, jw = window.Vue.openBlock, Hw = window.Vue.createBlock;
function qw(e, t, n, o, s, a) {
  return jw(), Hw(Rw(n.tag), {
    class: zw(a.classes)
  }, {
    default: Ow(() => [
      Iw(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const b = /* @__PURE__ */ J(Uw, [["render", qw]]), Gw = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", Xw = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", hi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", Ww = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, Kw = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", vm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Yw = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", Jw = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Is = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Zw = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Qw = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", e0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", cu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", t0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Sm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", n0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", o0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", s0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", a0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", i0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", r0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, ci = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, l0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, ym = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, c0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Cm = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", u0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Ri = window.Vue.computed, d0 = window.Vue.watch, g0 = window.Vue.ref, p0 = window.Vue.nextTick, m0 = {
  name: "MwDialog",
  components: {
    MwButton: Te,
    MwRow: P,
    MwCol: b,
    MwDivider: mi
  },
  props: {
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
    const n = g0(null), o = Ri(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Ri(() => ({
      "mw-ui-dialog__overlay--high_opacity": e.overlayOpacity === "high"
    })), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    d0(
      () => e.value,
      (d) => {
        d ? (i(), p0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = Ri(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayClasses: s,
      mwIconClose: Is,
      root: n
    };
  }
}, uu = window.Vue.normalizeClass, zi = window.Vue.createElementVNode, Oi = window.Vue.renderSlot, ta = window.Vue.resolveComponent, Ro = window.Vue.createVNode, ji = window.Vue.withCtx, du = window.Vue.createCommentVNode, h0 = window.Vue.withKeys, gu = window.Vue.openBlock, f0 = window.Vue.createElementBlock, w0 = window.Vue.Transition, _0 = window.Vue.normalizeStyle, v0 = window.Vue.createBlock, S0 = { class: "mw-ui-dialog__shell items-stretch" }, y0 = { class: "mw-ui-dialog__body" };
function C0(e, t, n, o, s, a) {
  const i = ta("mw-col"), c = ta("mw-button"), d = ta("mw-row"), g = ta("mw-divider");
  return gu(), v0(w0, {
    name: "mw-ui-animation-fade",
    style: _0(o.cssVars)
  }, {
    default: ji(() => [
      n.value ? (gu(), f0("div", {
        key: 0,
        ref: "root",
        class: uu(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = h0((r) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        zi("div", {
          class: uu(["mw-ui-dialog__overlay", o.overlayClasses]),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close())
        }, null, 2),
        zi("div", S0, [
          n.header ? Oi(e.$slots, "header", { key: 0 }, () => [
            Ro(d, { class: "mw-ui-dialog__header" }, {
              default: ji(() => [
                Ro(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Ro(i, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: ji(() => [
                    Ro(c, {
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
            Ro(g)
          ]) : du("", !0),
          zi("div", y0, [
            Oi(e.$slots, "default")
          ]),
          Oi(e.$slots, "footer")
        ])
      ], 34)) : du("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const ct = /* @__PURE__ */ J(m0, [["render", C0]]);
const b0 = {
  name: "MwInput",
  components: {
    MwIcon: Pe
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
}, pu = window.Vue.renderSlot, k0 = window.Vue.resolveComponent, na = window.Vue.openBlock, Hi = window.Vue.createBlock, mu = window.Vue.createCommentVNode, x0 = window.Vue.resolveDynamicComponent, $0 = window.Vue.toDisplayString, V0 = window.Vue.mergeProps, E0 = window.Vue.withModifiers, L0 = window.Vue.createElementVNode, A0 = window.Vue.normalizeClass, D0 = window.Vue.createElementBlock, T0 = { class: "mw-ui-input__content" };
function B0(e, t, n, o, s, a) {
  const i = k0("mw-icon");
  return na(), D0("div", {
    class: A0(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    L0("div", T0, [
      pu(e.$slots, "icon", {}, () => [
        n.icon ? (na(), Hi(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : mu("", !0)
      ]),
      (na(), Hi(x0(n.type === "textarea" ? n.type : "input"), V0({
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
        textContent: $0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      pu(e.$slots, "indicator", {}, () => [
        n.indicator ? (na(), Hi(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = E0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : mu("", !0)
      ])
    ])
  ], 2);
}
const Yl = /* @__PURE__ */ J(b0, [["render", B0]]);
const P0 = {
  name: "MwMessage",
  components: { MwCol: b, MwRow: P, MwIcon: Pe, MwButton: Te },
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
    mwIconClose: Is,
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
      notice: r0,
      warning: ym,
      success: ci,
      error: l0
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
}, qi = window.Vue.renderSlot, oa = window.Vue.resolveComponent, hu = window.Vue.createVNode, fu = window.Vue.withCtx, wu = window.Vue.openBlock, _u = window.Vue.createBlock, vu = window.Vue.createCommentVNode, F0 = window.Vue.normalizeClass;
function M0(e, t, n, o, s, a) {
  const i = oa("mw-icon"), c = oa("mw-col"), d = oa("mw-button"), g = oa("mw-row");
  return e.shown ? (wu(), _u(g, {
    key: 0,
    class: F0([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: fu(() => [
      qi(e.$slots, "icon", {}, () => [
        hu(i, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      hu(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: fu(() => [
          qi(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      qi(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (wu(), _u(d, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : vu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : vu("", !0);
}
const N0 = /* @__PURE__ */ J(P0, [["render", M0]]);
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
const U0 = {}, I0 = window.Vue.createElementVNode, R0 = window.Vue.openBlock, z0 = window.Vue.createElementBlock, O0 = { class: "mw-ui-spinner" }, j0 = /* @__PURE__ */ I0("div", { class: "mw-ui-spinner__bounce" }, null, -1), H0 = [
  j0
];
function q0(e, t) {
  return R0(), z0("div", O0, H0);
}
const Xe = /* @__PURE__ */ J(U0, [["render", q0]]), it = {
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
const G0 = window.Vue.computed, X0 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Pe },
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
      default: Cm
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: it.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: it.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = G0(() => {
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
}, Su = window.Vue.normalizeStyle, yu = window.Vue.openBlock, W0 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const K0 = window.Vue.resolveComponent, Y0 = window.Vue.createBlock;
function J0(e, t, n, o, s, a) {
  const i = K0("mw-ui-icon");
  return n.thumbnail ? (yu(), W0("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Su(o.style)
  }, null, 4)) : (yu(), Y0(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Su(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const mc = /* @__PURE__ */ J(X0, [["render", J0]]);
const Z0 = {
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
}, Q0 = window.Vue.vModelRadio, li = window.Vue.createElementVNode, e1 = window.Vue.withDirectives, t1 = window.Vue.toDisplayString, n1 = window.Vue.resolveComponent, o1 = window.Vue.normalizeClass, s1 = window.Vue.withCtx, a1 = window.Vue.openBlock, i1 = window.Vue.createBlock, r1 = { class: "mw-ui-radio__controls" }, l1 = ["id", "disabled", "name", "value"], c1 = /* @__PURE__ */ li("span", { class: "mw-ui-radio__controls__icon" }, null, -1), u1 = ["for", "textContent"];
function d1(e, t, n, o, s, a) {
  const i = n1("mw-row");
  return a1(), i1(i, {
    class: o1(["mw-ui-radio flex items-center py-2", a.widgetClass])
  }, {
    default: s1(() => [
      li("div", r1, [
        e1(li("input", {
          id: n.id,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => a.inputModel = c),
          type: "radio",
          disabled: n.disabled || null,
          name: n.name,
          value: n.inputValue
        }, null, 8, l1), [
          [Q0, a.inputModel]
        ]),
        c1
      ]),
      li("label", {
        for: n.id,
        class: "ps-2",
        textContent: t1(n.label)
      }, null, 8, u1)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Jl = /* @__PURE__ */ J(Z0, [["render", d1]]), Cu = window.Vue.h, g1 = {
  name: "MwRadioGroup",
  components: { MwRadio: Jl },
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
      (o) => Cu(Jl, {
        key: o.value,
        disabled: o.disabled,
        label: o.text,
        inputValue: o.value,
        name: e.name
      })
    ) : n = this.$slots.default(), Cu("div", { class: "mw-ui-radio-group" }, n);
  }
};
const p1 = {
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
}, bu = window.Vue.normalizeClass, ku = window.Vue.normalizeStyle, m1 = window.Vue.createElementVNode, h1 = window.Vue.openBlock, f1 = window.Vue.createElementBlock, w1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function _1(e, t, n, o, s, a) {
  return h1(), f1("div", {
    class: bu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: ku(a.containerStyles)
  }, [
    m1("div", {
      class: bu(["mw-progress-bar__bar", a.barClass]),
      style: ku(a.barStyles)
    }, null, 6)
  ], 14, w1);
}
const bm = /* @__PURE__ */ J(p1, [["render", _1]]), v1 = (e, t, n, o) => (s) => {
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
  }, d = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      c,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      d,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", c, !1), document.documentElement.addEventListener("pointerup", d, !1);
}, S1 = (e, t, n, o) => ({ initiateDrag: v1(
  e,
  t,
  n,
  o
) }), y1 = window.Vue.ref, xu = window.Vue.computed, C1 = (e, t, n, o) => {
  const s = y1(0), a = xu(
    () => t.value > e.value
  ), i = xu(
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
const sa = window.Vue.ref, b1 = window.Vue.onMounted, $u = window.Vue.computed, k1 = window.Vue.nextTick, x1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Te
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
    const t = sa(!0), n = sa(null), o = $u(
      () => Math.min(e.minHeight, s.value)
    ), s = sa(1), { initiateDrag: a } = S1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: c,
      scrollIndex: d,
      scrollToStepByIndex: g,
      handleArrowUpClick: r
    } = C1(o, s, n, t), l = () => g(d.value + 1), u = sa(null), p = $u(() => ({
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
    return b1(() => C(this, null, function* () {
      var f;
      yield k1(), s.value = n.value.scrollHeight, (f = u.value) == null || f.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", m);
    })), {
      contentRef: n,
      cssVars: p,
      dragIndicatorRef: u,
      handleArrowUpClick: r,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: c0,
      mwIconExpand: Yw,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: d,
      scrollToNextStep: l
    };
  }
}, $1 = window.Vue.renderSlot, V1 = window.Vue.normalizeClass, aa = window.Vue.createElementVNode, E1 = window.Vue.resolveComponent, L1 = window.Vue.createVNode, Gi = window.Vue.openBlock, A1 = window.Vue.createBlock, Vu = window.Vue.createCommentVNode, Eu = window.Vue.createElementBlock, D1 = window.Vue.normalizeStyle, T1 = { class: "mw-ui-expandable-content__container" }, B1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, P1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function F1(e, t, n, o, s, a) {
  const i = E1("mw-button");
  return Gi(), Eu("div", {
    class: "mw-ui-expandable-content",
    style: D1(o.cssVars)
  }, [
    aa("div", T1, [
      aa("div", {
        ref: "contentRef",
        class: V1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        $1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Gi(), Eu("div", B1, [
        L1(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Gi(), A1(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Vu("", !0)
      ])) : Vu("", !0)
    ]),
    aa("div", P1, [
      aa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const M1 = /* @__PURE__ */ J(x1, [["render", F1]]);
const ia = window.Vue.computed, N1 = {
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
      default: it.blue600
    },
    inactiveColor: {
      type: String,
      default: it.gray300
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
}, Lu = window.Vue.createElementVNode, Au = window.Vue.normalizeStyle, U1 = window.Vue.openBlock, I1 = window.Vue.createElementBlock, R1 = ["width", "height", "viewport"], z1 = ["r", "cx", "cy", "stroke-dasharray"], O1 = ["r", "cx", "cy", "stroke-dasharray"];
function j1(e, t, n, o, s, a) {
  return U1(), I1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Au(o.cssVars)
  }, [
    Lu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, z1),
    Lu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Au({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, O1)
  ], 12, R1);
}
const H1 = /* @__PURE__ */ J(N1, [["render", j1]]), q1 = window.Vue.ref, rn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, hn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${rn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${rn.tablet}px) and (max-width: ${rn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${rn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${rn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${rn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${rn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${rn["desktop-wide"]}px)`
}, Xi = {
  mobile: () => matchMedia(hn.mobile).matches,
  tablet: () => matchMedia(hn.tablet).matches,
  desktop: () => matchMedia(hn.desktop).matches,
  desktopwide: () => matchMedia(hn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(hn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(hn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(hn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(hn["desktop-and-down"]).matches
}, G1 = (e) => {
  const t = Object.values(rn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, X1 = {
  install: (e) => {
    const t = q1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in Xi)
        Xi.hasOwnProperty(s) && (t.value[s] = Xi[s]());
      t.value.nextBreakpoint = G1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Qe(de({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, W1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Qe(de({}, e.config.globalProperties.$mwui || {}), {
      colors: it
    }), e.provide("colors", it);
  }
};
class Bo extends Error {
}
const K1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Bo();
}), km = { assertUser: K1 };
const Y1 = window.Vue.resolveDirective, zo = window.Vue.createElementVNode, Du = window.Vue.withDirectives, J1 = window.Vue.toDisplayString, Z1 = window.Vue.unref, Tu = window.Vue.withCtx, Q1 = window.Vue.openBlock, e_ = window.Vue.createBlock, t_ = window.Vue.createCommentVNode, n_ = { class: "pa-4 sx-login-dialog__header" }, o_ = { class: "sx-login-dialog__body px-6 pb-4" }, s_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, a_ = ["href"], i_ = window.Vue.computed, r_ = window.Vue.ref, l_ = window.Vuex.useStore, c_ = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = l_(), n = i_(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = r_(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const c = Y1("i18n");
      return n.value ? (Q1(), e_(Z1(ct), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Tu(() => [
          zo("div", n_, [
            Du(zo("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Tu(() => [
          Du(zo("div", o_, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          zo("div", s_, [
            zo("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, J1(a.$i18n("cx-sx-login-dialog-button-label")), 9, a_)
          ])
        ]),
        _: 1
      })) : t_("", !0);
    };
  }
}, q = new mw.cx.SiteMapper(), hc = mw.util.getUrl, u_ = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, un = !mw.config.get("wgMFMode");
class fi {
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
    status: d,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = c, this.status = d, this.targetTitle = g;
  }
}
const ra = "original", la = "empty", d_ = {
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
    return d_[t] || t;
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
class An {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Qe(de({}, a), {
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
const Bu = (e) => {
  var n;
  const t = ui(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, ui = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, eo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), xm = (e) => {
  const t = ui(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = g_(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, g_ = (e) => {
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
}, $m = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Vm = (e) => {
  const t = $m(e);
  return t == null ? void 0 : t.targetExists;
};
class Wi {
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
class qe {
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
      (a) => eo(a)
    );
    s && Vm(s) && (this.blockTemplateAdaptationInfo[t] = $m(s));
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
      (t) => eo(t)
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
    const t = ui(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Bu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => eo(o));
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
    return n && Bu(n) || "";
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
    const o = ui(n);
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
      (a) => eo(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Wi({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Wi({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Wi({
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
        (s) => eo(s)
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
}
const p_ = [
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
], m_ = (e, t, n) => {
  let o, s, a, i, c;
  return !e || !t ? 0 : e === t ? 1 : (s = i = Pu(e, n), a = c = Pu(t, n), c.length > i.length && (s = c, a = i), o = s.filter(function(d) {
    return a.indexOf(d) >= 0;
  }), o.length / s.length);
}, Pu = function(e, t) {
  return e ? p_.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
}, Em = 95, h_ = 85, f_ = [
  { status: "failure", value: 100 - Em },
  { status: "warning", value: 100 - h_ },
  { status: "success", value: 100 }
], Lm = (e, t, n) => {
  const o = Fu(e).textContent, s = Fu(t).textContent, a = 100 - 100 * m_(s, o, n);
  return Math.ceil(a);
}, w_ = (e) => f_.find((t) => e <= t.value).status, __ = (e, t) => Lm(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), v_ = () => (100 - Em) / 100, Fu = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Rt = {
  calculateScore: Lm,
  getScoreStatus: w_,
  getMTScoreForPageSection: __,
  getMtModificationThreshold: v_
}, ca = "__LEAD_SECTION__";
class Zl {
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
    return ca;
  }
  static isSectionLead(t) {
    return !t || t === ca;
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
    return n instanceof qe ? n.transclusionNode.outerHTML : n instanceof An ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof qe ? t.blockTemplateSelected = !1 : t instanceof An && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof qe ? n.blockTemplateSelected = !0 : n instanceof An && (n.selected = !0);
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
    if (o instanceof qe)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof An)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof qe ? n.blockTemplateProposedTranslations[t] || "" : n instanceof An ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof qe ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof An && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Rt.getMTScoreForPageSection(this, t) / 100;
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
class fc extends fi {
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
    lastUpdatedTimestamp: d,
    status: g,
    pageRevision: r,
    targetTitle: l,
    sourceSectionTitle: u,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: c,
      lastUpdatedTimestamp: d,
      pageRevision: r,
      status: g,
      targetTitle: l
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = u, this.targetSectionTitle = p, this.progress = m, this.restored = !1;
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
    return Zl.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Zl.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Vt = "previous-edits", zt = "popular", We = "topic", fe = "collections", $t = "automatic", rt = "seed", Mu = window.Vue.ref, S_ = mw.loader.require("ext.cx.articletopics"), ua = {
  type: $t,
  id: Vt
}, Am = () => {
  const e = Mu(
    S_.flatMap((s) => s.topics).map((s) => s.topicId.toLowerCase())
  ), t = Mu(!1);
  return { filtersValidatorError: t, validateFilters: ({ type: s, id: a }) => {
    t.value = !1;
    const i = s == null ? void 0 : s.toLowerCase(), c = a == null ? void 0 : a.toLowerCase();
    return i === We ? e.value.some((d) => d === a) ? { type: i, id: c } : (t.value = !0, ua) : i === fe || i === rt ? { type: i, id: a } : c === Vt ? {
      type: $t,
      id: Vt
    } : c === zt ? {
      type: $t,
      id: zt
    } : c === fe ? {
      type: $t,
      id: fe
    } : ua;
  }, isDefaultFilter: ({ type: s, id: a }) => s === ua.type && a === ua.id };
}, y_ = window.Vue.inject, C_ = window.Vue.reactive;
var b_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Dm = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(b_, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(l) {
        this.locale = l;
      }
      convertPlural(l, u) {
        const p = /\d+=/i;
        if (!u || u.length === 0)
          return "";
        for (let h = 0; h < u.length; h++) {
          const f = u[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === l)
              return f.slice(f.indexOf("=") + 1);
            u[h] = void 0;
          }
        }
        u = u.filter((h) => !!h);
        let m = this.getPluralForm(l, this.locale);
        return m = Math.min(m, u.length - 1), u[m];
      }
      getPluralForm(l, u) {
        const p = new Intl.PluralRules(u), m = p.resolvedOptions().pluralCategories, h = p.select(l);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(l, u = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (u) {
          if (parseFloat(l, 10) === l || !p)
            return l;
          const h = [];
          for (const _ in p)
            h[p[_]] = _;
          p = h;
          const f = String(l);
          for (let _ = 0; _ < f.length; _++)
            m += p[f[_]] || f[_];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const f = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : f, m = new Intl.NumberFormat(h).format(l), m === "NaN" && (m = l), m;
        }
      }
      convertGrammar(l, u) {
        return l;
      }
      gender(l, u) {
        if (!u || u.length === 0)
          return "";
        for (; u.length < 2; )
          u.push(u[u.length - 1]);
        return l === "male" ? u[0] : l === "female" ? u[1] : u.length === 3 ? u[2] : u[0];
      }
      digitTransformTable(l) {
        return !!n[l] && n[l].split("");
      }
    }
    var a = { bs: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "instrumental":
            r = "s " + r;
            break;
          case "lokativ":
            r = "o " + r;
        }
        return r;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, fi: class extends s {
      convertGrammar(r, l) {
        let u = r.match(/[aou][^äöy]*$/i);
        const p = r;
        switch (r.match(/wiki$/i) && (u = !1), r.match(/[bcdfghjklmnpqrstvwxz]$/i) && (r += "i"), l) {
          case "genitive":
            r += "n";
            break;
          case "elative":
            r += u ? "sta" : "stä";
            break;
          case "partitive":
            r += u ? "a" : "ä";
            break;
          case "illative":
            r += r.slice(-1) + "n";
            break;
          case "inessive":
            r += u ? "ssa" : "ssä";
            break;
          default:
            r = p;
        }
        return r;
      }
    }, ga: class extends s {
      convertGrammar(r, l) {
        if (l === "ainmlae")
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
      convertGrammar(r, l) {
        switch (l) {
          case "prefixed":
          case "תחילית":
            r.slice(0, 1) === "ו" && r.slice(0, 2) !== "וו" && (r = "ו" + r), r.slice(0, 1) === "ה" && (r = r.slice(1)), (r.slice(0, 1) < "א" || r.slice(0, 1) > "ת") && (r = "־" + r);
        }
        return r;
      }
    }, hsb: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, hu: class extends s {
      convertGrammar(r, l) {
        switch (l) {
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
      convertGrammar(r, l) {
        return l === "genitive" && (r.slice(-1) === "ա" ? r = r.slice(0, -1) + "այի" : r.slice(-1) === "ո" ? r = r.slice(0, -1) + "ոյի" : r.slice(-4) === "գիրք" ? r = r.slice(0, -4) + "գրքի" : r += "ի"), r;
      }
    }, la: class extends s {
      convertGrammar(r, l) {
        switch (l) {
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
      convertGrammar(r, l) {
        let u, p, m, h;
        switch (u = "мæ", p = "", m = "", h = "", r.match(/тæ$/i) ? (r = r.slice(0, -1), u = "æм") : r.match(/[аæеёиоыэюя]$/i) ? p = "й" : r.match(/у$/i) ? r.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : r.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), l) {
          case "genitive":
            h = m + p + "ы";
            break;
          case "dative":
            h = m + p + "æн";
            break;
          case "allative":
            h = m + u;
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
        return r + h;
      }
    }, ru: class extends s {
      convertGrammar(r, l) {
        return l === "genitive" && (r.slice(-1) === "ь" ? r = r.slice(0, -1) + "я" : r.slice(-2) === "ия" ? r = r.slice(0, -2) + "ии" : r.slice(-2) === "ка" ? r = r.slice(0, -2) + "ки" : r.slice(-2) === "ти" ? r = r.slice(0, -2) + "тей" : r.slice(-2) === "ды" ? r = r.slice(0, -2) + "дов" : r.slice(-3) === "ник" && (r = r.slice(0, -3) + "ника")), r;
      }
    }, sl: class extends s {
      convertGrammar(r, l) {
        switch (l) {
          case "mestnik":
            r = "o " + r;
            break;
          case "orodnik":
            r = "z " + r;
        }
        return r;
      }
    }, uk: class extends s {
      convertGrammar(r, l) {
        switch (l) {
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
      constructor(l) {
        this.locale = l, this.language = new (a[l] || a.default)(l);
      }
      emit(l, u) {
        let p, m, h;
        switch (typeof l) {
          case "string":
          case "number":
            p = l;
            break;
          case "object":
            if (m = l.slice(1).map((f) => this.emit(f, u)), h = l[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, u);
            break;
          case "undefined":
            p = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof l);
        }
        return p;
      }
      concat(l) {
        let u = "";
        return l.forEach((p) => {
          u += p;
        }), u;
      }
      replace(l, u) {
        const p = parseInt(l[0], 10);
        return p < u.length ? u[p] : "$" + (p + 1);
      }
      plural(l) {
        const u = parseFloat(this.language.convertNumber(l[0], 10)), p = l.slice(1);
        return p.length ? this.language.convertPlural(u, p) : "";
      }
      gender(l) {
        const u = l[0], p = l.slice(1);
        return this.language.gender(u, p);
      }
      grammar(l) {
        const u = l[0], p = l[1];
        return p && u && this.language.convertGrammar(p, u);
      }
      wikilink(l) {
        let u, p = l[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return u = l.length === 1 ? p : l[1], `<a href="${m}" title="${p}">${u}</a>`;
      }
      extlink(l) {
        if (l.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${l[0]}">${l[1]}</a>`;
      }
      bidi(l) {
        const u = function(p) {
          const m = p.match(i);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(l[0]);
        return u === "ltr" ? "‪" + l[0] + "‬" : u === "rtl" ? "‫" + l[0] + "‬" : l[0];
      }
      formatnum(l) {
        const u = !!l[1] && l[1] === "R", p = l[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, u) : p;
      }
      htmlattributes(l) {
        const u = {};
        for (let p = 0, m = l.length; p < m; p += 2)
          u[l[p]] = l[p + 1];
        return u;
      }
      htmlelement(l) {
        const u = l.shift(), p = l.shift();
        let m = l, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${u}${h}>${m.join("")}</${u}>`;
      }
    }
    class d {
      constructor(l, { wikilinks: u = !1 } = {}) {
        this.locale = l, this.wikilinks = u, this.emitter = new c(this.locale);
      }
      parse(l, u) {
        if (l.includes("{{") || l.includes("<") || this.wikilinks && l.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function _(E) {
              return () => {
                for (let U = 0; U < E.length; U++) {
                  const Fe = E[U]();
                  if (Fe !== null)
                    return Fe;
                }
                return null;
              };
            }
            function w(E) {
              const U = f, Fe = [];
              for (let Ht = 0; Ht < E.length; Ht++) {
                const qt = E[Ht]();
                if (qt === null)
                  return f = U, null;
                Fe.push(qt);
              }
              return Fe;
            }
            function S(E, U) {
              return () => {
                const Fe = f, Ht = [];
                let qt = U();
                for (; qt !== null; )
                  Ht.push(qt), qt = U();
                return Ht.length < E ? (f = Fe, null) : Ht;
              };
            }
            function y(E) {
              const U = E.length;
              return () => {
                let Fe = null;
                return m.slice(f, f + U) === E && (Fe = E, f += U), Fe;
              };
            }
            function k(E) {
              return () => {
                const U = m.slice(f).match(E);
                return U === null ? null : (f += U[0].length, U[0]);
              };
            }
            const x = k(/^\s+/), T = y("|"), V = y(":"), F = y("\\"), N = k(/^./), M = y("$"), X = k(/^\d+/), W = y('"'), re = y("'"), O = k(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Z = k(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Ve = _([te, k(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function te() {
              const E = w([F, N]);
              return E === null ? null : E[1];
            }
            const mn = _([te, Z]), Et = _([te, O]);
            function ut() {
              const E = w([M, X]);
              return E === null ? null : ["REPLACE", parseInt(E[1], 10) - 1];
            }
            const Q = (jt = k(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Ie = function(E) {
              return E.toString();
            }, () => {
              const E = jt();
              return E === null ? null : Ie(E);
            });
            var jt, Ie;
            function we() {
              const E = w([T, S(0, Js)]);
              if (E === null)
                return null;
              const U = E[1];
              return U.length > 1 ? ["CONCAT"].concat(U) : U[0];
            }
            function Ee() {
              const E = w([Q, V, ut]);
              return E === null ? null : [E[0], E[2]];
            }
            function v() {
              const E = w([Q, V, Js]);
              return E === null ? null : [E[0], E[2]];
            }
            function L() {
              const E = w([Q, V]);
              return E === null ? null : [E[0], ""];
            }
            const A = _([function() {
              const E = w([_([Ee, v, L]), S(0, we)]);
              return E === null ? null : E[0].concat(E[1]);
            }, function() {
              const E = w([Q, S(0, we)]);
              return E === null ? null : [E[0]].concat(E[1]);
            }]), D = y("{{"), H = y("}}"), le = y("[["), z = y("]]"), R = y("["), ee = y("]");
            function dt() {
              const E = w([D, A, H]);
              return E === null ? null : E[1];
            }
            const xe = _([function() {
              const E = w([S(1, Js), T, S(1, Ys)]);
              return E === null ? null : [["CONCAT"].concat(E[0]), ["CONCAT"].concat(E[2])];
            }, function() {
              const E = w([S(1, Js)]);
              return E === null ? null : [["CONCAT"].concat(E[0])];
            }]);
            function Wc() {
              let E = null;
              const U = w([le, xe, z]);
              if (U !== null) {
                const Fe = U[1];
                E = ["WIKILINK"].concat(Fe);
              }
              return E;
            }
            function Kc() {
              let E = null;
              const U = w([R, S(1, _f), x, S(1, Ys), ee]);
              return U !== null && (E = ["EXTLINK", U[1].length === 1 ? U[1][0] : ["CONCAT"].concat(U[1]), ["CONCAT"].concat(U[3])]), E;
            }
            const Li = k(/^[A-Za-z]+/);
            function mf() {
              const E = k(/^[^"]*/), U = w([W, E, W]);
              return U === null ? null : U[1];
            }
            function hf() {
              const E = k(/^[^']*/), U = w([re, E, re]);
              return U === null ? null : U[1];
            }
            function ff() {
              const E = k(/^\s*=\s*/), U = w([x, Li, E, _([mf, hf])]);
              return U === null ? null : [U[1], U[3]];
            }
            function wf() {
              const E = S(0, ff)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], E);
            }
            const _f = _([dt, ut, Wc, Kc, function() {
              const E = S(1, Ve)();
              return E === null ? null : E.join("");
            }]), Ys = _([dt, ut, Wc, Kc, function() {
              let E = null;
              const U = f, Fe = y("<"), Ht = k(/^\/?/), qt = k(/^\s*>/), Ai = w([Fe, Li, wf, Ht, qt]);
              if (Ai === null)
                return null;
              const Jc = f, Zc = Ai[1], Di = S(0, Ys)(), vf = f, Qc = w([y("</"), Li, qt]);
              if (Qc === null)
                return ["CONCAT", m.slice(U, Jc)].concat(Di);
              const Sf = f, yf = Qc[1], eu = Ai[2];
              if (function(Fn, Zs, Ti, Bi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Fn = Fn.toLowerCase()) !== (Zs = Zs.toLowerCase()) || Bi.allowedHtmlElements.indexOf(Fn) === -1)
                  return !1;
                const Cf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Qs = 0, bf = Ti.length; Qs < bf; Qs += 2) {
                  const Pi = Ti[Qs];
                  if (Bi.allowedHtmlCommonAttributes.indexOf(Pi) === -1 && (Bi.allowedHtmlAttributesByElement[Fn] || []).indexOf(Pi) === -1 || Pi === "style" && Ti[Qs + 1].search(Cf) !== -1)
                    return !1;
                }
                return !0;
              }(Zc, yf, eu.slice(1)))
                E = ["HTMLELEMENT", Zc, eu].concat(Di);
              else {
                const Fn = (Zs) => Zs.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                E = ["CONCAT", Fn(m.slice(U, Jc))].concat(Di, Fn(m.slice(vf, Sf)));
              }
              return E;
            }, function() {
              const E = S(1, Et)();
              return E === null ? null : E.join("");
            }]), Js = _([dt, ut, function() {
              const E = S(1, mn)();
              return E === null ? null : E.join("");
            }]), Yc = function() {
              const E = S(0, Ys)();
              return E === null ? null : ["CONCAT"].concat(E);
            }();
            if (Yc === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return Yc;
          }(l, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, u);
        }
        return this.simpleParse(l, u);
      }
      simpleParse(l, u) {
        return l.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return u[h] !== void 0 ? u[h] : "$" + m;
        });
      }
    }
    class g {
      constructor(l) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(l, u) {
        if (typeof l != "object")
          throw new Error("Invalid message source. Must be an object");
        if (u) {
          if (!/^[a-zA-Z0-9-]+$/.test(u))
            throw new Error(`Invalid locale ${u}`);
          for (const p in l)
            if (p.indexOf("@") !== 0) {
              if (typeof l[p] == "object")
                return this.load(l);
              if (typeof l[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${u} locale.`);
              break;
            }
          this.sourceMap.has(u) ? this.sourceMap.set(u, Object.assign(this.sourceMap.get(u), l)) : this.sourceMap.set(u, l);
        } else
          for (u in l)
            this.load(l[u], u);
      }
      getMessage(l, u) {
        const p = this.sourceMap.get(u);
        return p ? p[l] : null;
      }
      hasLocale(l) {
        return this.sourceMap.has(l);
      }
    }
    return class {
      constructor(r, { finalFallback: l = "en", messages: u, wikilinks: p = !1 } = {}) {
        this.locale = r, this.parser = new d(this.locale, { wikilinks: p }), this.messageStore = new g(), u && this.load(u, this.locale), this.finalFallback = l, this.wikilinks = p;
      }
      load(r, l) {
        return this.messageStore.load(r, l || this.locale);
      }
      i18n(r, ...l) {
        return this.parser.parse(this.getMessage(r), l);
      }
      setLocale(r) {
        this.locale = r, this.parser = new d(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(r) {
        let l = this.locale, u = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; l; ) {
          const m = l.split("-");
          let h = m.length;
          do {
            const f = m.slice(0, h).join("-"), _ = this.messageStore.getMessage(r, f);
            if (typeof _ == "string")
              return _;
            h--;
          } while (h);
          l = p[u], u++;
        }
        return r;
      }
      registerParserPlugin(r, l) {
        c.prototype[r] = l;
      }
    };
  });
})(Dm);
var k_ = Dm.exports;
const Nu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Tm = Symbol("banana-context");
function pe() {
  const e = y_(Tm);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function x_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = C_(new k_(e.locale, e));
  return {
    install: (n) => {
      n.provide(Tm, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Nu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Nu(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const dn = window.Vue.ref, $_ = window.Vue.computed, wi = dn(null), _i = dn(null), vi = dn(null), Rs = dn(null), wc = dn(null), Si = dn(null), Bm = dn(null), Pm = dn(null), _c = dn(null), { validateFilters: V_, filtersValidatorError: E_ } = Am(), Fm = {
  from: wi,
  to: _i,
  section: Rs,
  draft: wc,
  page: vi,
  revision: Si,
  "active-list": _c
}, L_ = $_(() => ({
  type: Bm.value,
  id: Pm.value
})), Mm = (e, t) => {
  Bm.value = e, Pm.value = t, di("filter-type", e), t && di("filter-id", t);
}, A_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof fc && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Fm[o].value = s;
  }
  t.delete("title"), zs(Object.fromEntries(t));
}, vc = (e, t) => {
  Fm[e].value = t, di(e, t);
}, D_ = (e) => {
  vc("section", e);
}, T_ = (e) => {
  vc("page", e);
}, B_ = (e) => {
  vc("active-list", e);
}, zs = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    hc(`Special:ContentTranslation${t}`, e)
  );
}, P_ = () => {
  const e = pe(), t = new URLSearchParams(location.search);
  vi.value = t.get("page"), wi.value = t.get("from"), _i.value = t.get("to"), Rs.value = t.get("section"), Si.value = t.get("revision"), _c.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = V_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Mm(n.type, n.id), E_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, F_ = () => {
  const e = new URLSearchParams(location.search);
  Rs.value = null, e.delete("section"), e.delete("title"), zs(Object.fromEntries(e));
}, di = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), zs(Object.fromEntries(n));
}, M_ = (e) => new URLSearchParams(location.search).get(e), N_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), wi.value = e, _i.value = t, n.delete("title"), zs(Object.fromEntries(n));
}, U_ = () => {
  const e = new URLSearchParams(location.search);
  vi.value = null, Rs.value = null, wc.value = null, Si.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), zs(Object.fromEntries(e));
}, B = () => ({
  setLanguageURLParams: N_,
  setSectionURLParam: D_,
  setTranslationURLParams: A_,
  initializeURLState: P_,
  clearTranslationURLParameters: U_,
  clearSectionURLParameter: F_,
  setUrlParam: di,
  getUrlParam: M_,
  pageURLParameter: vi,
  sourceLanguageURLParameter: wi,
  targetLanguageURLParameter: _i,
  sectionURLParameter: Rs,
  draftURLParameter: wc,
  revisionURLParameter: Si,
  setPageURLParam: T_,
  currentSuggestionFilters: L_,
  setFilterURLParams: Mm,
  activeDashboardTabParameter: _c,
  setActiveDashboardTabParameter: B_
}), Uu = window.Vue.computed, I_ = window.Vuex.useStore;
function Po() {
  const e = I_(), t = Uu(
    () => e.state.mediawiki.supportedLanguageCodes || []
  );
  return {
    enabledTargetLanguages: Uu(
      () => e.state.mediawiki.enabledTargetLanguages
    ),
    supportedLanguageCodes: t
  };
}
const R_ = {
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
}, z_ = {
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
}, O_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], j_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, H_ = {
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
}, q_ = {
  languages: R_,
  scriptgroups: z_,
  rtlscripts: O_,
  regiongroups: j_,
  territories: H_
};
var Be = q_;
function Os(e) {
  return !!Be.languages[e];
}
function Pn(e) {
  return Os(e) && Be.languages[e].length === 1 ? Be.languages[e][0] : !1;
}
function G_() {
  return Be.languages;
}
function js(e) {
  var t = Pn(e);
  return t ? js(t) : Os(e) ? Be.languages[e][0] : "Zyyy";
}
function Sc(e) {
  var t = Pn(e);
  return t ? Sc(t) : Os(e) && Be.languages[e][1] || "UNKNOWN";
}
function Ps(e) {
  var t = Pn(e);
  return t ? Ps(t) : Os(e) && Be.languages[e][2] || e;
}
function X_() {
  var e, t = {};
  for (e in Be.languages)
    Pn(e) || (t[e] = Ps(e));
  return t;
}
function Nm(e) {
  var t, n, o = [];
  for (t in Be.languages)
    if (!Pn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === js(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function W_(e) {
  return Nm([e]);
}
function Um(e) {
  var t;
  for (t in Be.scriptgroups)
    if (Be.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function yc(e) {
  return Um(js(e));
}
function Im(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Pn(n) || n, a = yc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Rm(e) {
  var t, n, o, s = {};
  for (t in Be.languages)
    if (!Pn(t)) {
      for (n = 0; n < e.length; n++)
        if (Sc(t).includes(e[n])) {
          o = yc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function K_(e) {
  return Rm([e]);
}
function Y_(e) {
  var t, n, o, s = [];
  for (t = Im(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function J_(e, t) {
  var n = Ps(e) || e, o = Ps(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function zm(e) {
  return Be.rtlscripts.includes(js(e));
}
function Z_(e) {
  return zm(e) ? "rtl" : "ltr";
}
function Q_(e) {
  return Be.territories[e] || [];
}
function ev(e, t) {
  t.target ? Be.languages[e] = [t.target] : Be.languages[e] = [t.script, t.regions, t.autonym];
}
var I = {
  addLanguage: ev,
  getAutonym: Ps,
  getAutonyms: X_,
  getDir: Z_,
  getGroupOfScript: Um,
  getLanguages: G_,
  getLanguagesByScriptGroup: Im,
  getLanguagesByScriptGroupInRegion: K_,
  getLanguagesByScriptGroupInRegions: Rm,
  getLanguagesInScript: W_,
  getLanguagesInScripts: Nm,
  getLanguagesInTerritory: Q_,
  getRegions: Sc,
  getScript: js,
  getScriptGroupOfLanguage: yc,
  isKnown: Os,
  isRedirect: Pn,
  isRtl: zm,
  sortByScriptGroup: Y_,
  sortByAutonym: J_
};
const no = window.Vue.computed;
function ue(e) {
  const t = no(() => e.state.application.sourceLanguage), n = no(() => e.state.application.targetLanguage), o = no(
    () => e.state.application.currentMTProvider
  ), s = no(
    () => I.getAutonym(t.value)
  ), a = no(
    () => I.getAutonym(n.value)
  ), i = no(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: i,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Fo {
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
    pageimage: a,
    pageid: i,
    pagelanguage: c,
    pageprops: d,
    pageviews: g,
    thumbnail: r,
    title: l,
    revisions: u,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = c, this.title = l, this.pageId = i, this.description = t, this.image = s, this.imageName = a, this.pageprops = d, this.pageviews = g, this.thumbnail = r, this.langLinksCount = n, this.articleSize = (f = u == null ? void 0 : u[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = d == null ? void 0 : d.wikibase_item, this.content = m, this.sections = h;
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
  /**
   * @param {number} width
   * @returns {string}
   */
  getImage(t) {
    if (!t)
      return this.image.source;
    const n = this.thumbnail.source;
    return `${n.substring(
      0,
      n.lastIndexOf("/")
    )}/${t}px-${this.imageName}`;
  }
}
class tv {
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
function nv() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const ov = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), nv();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, sv = (e, t) => {
  let n, o;
  return t ? (n = ov(e), o = n.$element.find(
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
}, av = (e, t) => {
  const n = Array.from(
    sv(e, t)
  );
  return iv(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let c = "";
      const d = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : i.unshift(a);
      const g = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (l) => new qe({
          sentences: rv(l),
          node: l
        })
      ), r = !c;
      return new Zl({ id: d, title: c, subSections: g, isLeadSection: r });
    }
  );
}, iv = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, rv = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new An({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Om = {
  convertSegmentedContentToPageSections: av
}, Cc = 120, lv = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Cc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (r, l) => Qe(de({}, r), { [l.to]: l.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (r, l) => Qe(de({}, r), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((r) => {
      const l = g[r.title] || c[r.title] || null;
      return new Fo(Qe(de({}, r), { _alias: l }));
    });
  });
}, cv = (e, t) => {
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
  return q.getApi(e).get(n).then((s) => {
    var d, g;
    const a = s.query.pages;
    if (!a || !a.length || (d = a[0]) != null && d.missing)
      return null;
    const i = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return c ? Object.freeze(new tv(c, i)) : null;
  });
}, uv = (e, t, n) => {
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
  return q.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var d, g;
    return (g = (d = c.langlinks) == null ? void 0 : d[0]) == null ? void 0 : g["*"];
  }).filter((c) => !!c));
}, dv = (e, t, n, o = null) => jm(
  e,
  t,
  n,
  o
).then(
  (s) => new Fo({
    sections: Om.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), jm = (e, t, n, o = null) => {
  const s = q.getWikiDomainCode(e), a = q.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, c += "/$revision");
  const d = q.getCXServerUrl(
    c,
    i
  );
  return fetch(d).then((g) => g.json()).then((g) => g.segmentedContent);
}, gv = (e) => C(void 0, null, function* () {
  const t = u_();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Cc,
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
  return yield q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Fo(s))).catch((o) => []);
}), pv = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Cc,
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
      (a) => new Fo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, to = {
  fetchPages: lv,
  fetchLanguageTitles: cv,
  fetchPageContent: dv,
  fetchSegmentedContent: jm,
  fetchNearbyPages: gv,
  searchPagesByTitlePrefix: pv,
  fetchLanguageLinksForLanguage: uv
}, mv = window.Vuex.useStore, Hs = () => {
  const e = mv();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const i = n.slice(a, a + o), c = to.fetchPages(t, i).then(
        (d) => d.forEach(
          (g) => e.commit("mediawiki/addPage", g)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, hv = window.Vuex.useStore, bc = () => {
  const e = hv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (r) => r.matchesFilter(o.value)
  ), i = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), c = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (r) => r.matchesFilter(o.value)
  );
  return {
    getFilteredPageSuggestions: c,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (g) => c().slice(
      s * g,
      s * (g + 1)
    ),
    getSectionSuggestionsSliceByIndex: i
  };
};
class Mo {
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
    wikidataId: i,
    suggestionProvider: c = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = i, this.langLinksCount = a, this.suggestionProvider = c, this.isListable = !0;
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
class Tn {
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
    missing: i,
    sourceSections: c = [],
    targetSections: d = [],
    isListable: g = !0,
    suggestionProvider: r = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSections = c, this.targetSections = d, this.isListable = g, this.suggestionProvider = r;
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
const Hm = [
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
], fv = [
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
], wv = [
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
], _v = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], vv = [
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
], Sv = {
  en: Hm,
  es: fv,
  bn: wv,
  fr: _v,
  de: vv
};
class Eo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class kc {
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
class qm extends Mo {
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
    wikidataId: i,
    suggestionProvider: c = null,
    collection: d = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: i,
      suggestionProvider: c
    }), this.collection = new kc(d);
  }
}
class Gm extends Tn {
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
    missing: i,
    sourceSections: c = [],
    targetSections: d = [],
    isListable: g = !0,
    suggestionProvider: r = null,
    collection: l = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: i,
      sourceSections: c,
      targetSections: d,
      isListable: g,
      suggestionProvider: r
    }), this.collection = new kc(l);
  }
}
const yv = Hm, gn = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function Cv() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collections";
    try {
      return ((yield gn({ urlPostfix: t, urlParams: e })) || []).map((o) => new kc(o));
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), [];
    }
  });
}
function bv(e, t, n, o = 24) {
  return C(this, null, function* () {
    return ((yield gn({ urlParams: {
      source: e,
      target: t,
      seed: n,
      count: o
    } })) || []).map(
      (i) => new Mo({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
const kv = (e, t) => C(void 0, null, function* () {
  return ((yield gn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new Mo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), xv = (e, t) => C(void 0, null, function* () {
  const s = (yield gn({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new Tn({
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
}), $v = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield gn({ urlParams: o })) || []).map(
    (a) => new qm({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), Vv = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield gn({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (i) => new Gm({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: i.source_title,
      targetTitle: i.target_title,
      sourceSections: i.source_sections,
      targetSections: i.target_sections,
      present: i.present,
      missing: i.missing,
      collection: i.collection
    })
  );
});
function Ev(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new Tn(a) : null;
  });
}
function Lv(e, t, n) {
  return C(this, null, function* () {
    const a = (yield gn({ urlPostfix: "/sections", urlParams: {
      source: e,
      target: t,
      seed: n,
      count: 24
    } })) || [];
    return a && a.map(
      (i) => new Tn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: i.source_title,
        targetTitle: i.target_title,
        sourceSections: i.source_sections,
        targetSections: i.target_sections,
        present: i.present,
        missing: i.missing
      })
    );
  });
}
function Av(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield gn({ urlParams: s })) || []).map(
      (i) => new Mo({
        sourceTitle: i.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: i.wikidata_id,
        langLinksCount: parseInt(i.sitelink_count)
      })
    );
  });
}
function Dv(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, i = (yield gn({ urlPostfix: "/sections", urlParams: s })) || [];
    return i && i.map(
      (c) => new Tn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: c.source_title,
        targetTitle: c.target_title,
        sourceSections: c.source_sections,
        targetSections: c.target_sections,
        present: c.present,
        missing: c.missing
      })
    );
  });
}
function Tv(e) {
  return C(this, null, function* () {
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
    }, n = q.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function Bv(e, t) {
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
function Pv(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = q.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function Fv(e) {
  const t = yv.map((o) => encodeURIComponent(o)).join("|"), n = q.getCXServerUrl(
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
const Mv = (e, t, n) => {
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
}, Nv = (e) => {
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
}, Uv = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, i;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((i = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : i.suggestions) || []).map((c) => new Eo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ie = {
  fetchFavorites: Uv,
  fetchPageSuggestions: bv,
  fetchSectionSuggestion: Ev,
  fetchSectionSuggestions: Lv,
  fetchSuggestionSeeds: Bv,
  fetchAppendixTargetSectionTitles: Fv,
  fetchSuggestionSourceSections: Pv,
  markFavorite: Mv,
  unmarkFavorite: Nv,
  fetchUserEdits: Tv,
  fetchMostPopularPageSuggestions: kv,
  fetchMostPopularSectionSuggestions: xv,
  fetchPageSuggestionsByTopics: Av,
  fetchSectionSuggestionsByTopics: Dv,
  fetchPageCollections: Cv,
  fetchPageSuggestionsByCollections: $v,
  fetchSectionSuggestionsByCollections: Vv
}, Iv = window.Vuex.useStore, qs = () => {
  const e = Iv(), { sourceLanguage: t, targetLanguage: n } = ue(e), o = (c) => {
    if (!c)
      return !1;
    const d = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), r = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    return !d.includes(c.sourceTitle) && !r.includes(c.sourceTitle);
  }, s = (c) => {
    const { pageSuggestions: d } = e.state.suggestions;
    return !d.some(
      (r) => r.sourceLanguage === c.sourceLanguage && r.targetLanguage === c.targetLanguage && r.sourceTitle === c.sourceTitle
    ) && o(c);
  }, a = (c) => e.state.suggestions.sectionSuggestions.some(
    (d) => d.sourceLanguage === c.sourceLanguage && d.targetLanguage === c.targetLanguage && d.sourceTitle === c.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (c) => {
      if (!c)
        return !1;
      const d = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(c) && o(c) && c.isValid(d);
    },
    sectionSuggestionExists: a
  };
};
class Rv {
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
const zv = window.Vuex.useStore, Ov = window.Vue.computed, yi = window.Vue.ref, jv = yi([]), Hv = yi([]);
let Ki = !1, Yi = !1, Iu = !1, Xm = yi([]);
const da = yi([]), qv = (e, t) => {
  Xm.value.push({
    sourceLanguage: e,
    targetLanguage: t
  });
};
let Oo = null;
const ga = {
  page: jv,
  section: Hv
}, xc = () => {
  const e = zv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = Ov(
    () => Xm.value.some(
      (l) => l.sourceLanguage === t.value && l.targetLanguage === n.value
    )
  ), s = () => C(void 0, null, function* () {
    Yi || (da.value = yield ie.fetchUserEdits(t.value).then((l) => (Yi = !0, l)));
  }), a = () => C(void 0, null, function* () {
    let l = e.getters["translator/getTranslationsByStatus"]("published");
    if (l = l.filter(
      (u) => u.sourceLanguage === t.value
    ), l.length && !Ki)
      return Ki = !0, l.map(
        (u) => u.sourceTitle
      );
    if (Ki = !0, !Yi && (yield s(), da.value.length > 0))
      return da.value;
    if (!Iu) {
      const u = yield ie.fetchUserEdits(t.value).then((p) => (Iu = !0, p));
      if (u.length)
        return to.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          u
        );
    }
    return null;
  }), i = (l) => {
    let u = ga[l].value.find(
      (p) => p.matchesLanguagePair(t.value, n.value)
    );
    return u || (u = new Rv({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ga[l].value.push(u)), u;
  }, c = () => C(void 0, null, function* () {
    const l = yield ie.fetchSuggestionSeeds(
      t.value,
      n.value
    );
    for (const u in ga) {
      const p = i(u);
      p.seeds = [...p.seeds, ...l || []];
    }
  }), d = () => C(void 0, null, function* () {
    let l = !1, u = [];
    do {
      u = yield a(), u || (l = !0);
      for (const p in ga) {
        const m = i(p);
        m.seeds = [
          ...m.seeds,
          ...u || []
        ];
      }
    } while (!l && !(u != null && u.length));
  }), g = () => Oo || (Oo = d(), Oo.finally(() => {
    Oo = null;
  }));
  return {
    getSuggestionSeed: (l) => C(void 0, null, function* () {
      let u = i(l);
      u.seeds.length || (yield g());
      let p = u.shiftSeeds();
      return !p && !o.value && (yield c(), p = u.shiftSeeds(), qv(
        t.value,
        n.value
      )), p;
    }),
    defaultSeedsFetched: o,
    fetchPreviousEditsInSource: s,
    previousEditsInSource: da
  };
}, Gv = 5;
function Lo(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < Gv);
  });
}
const Xv = window.Vuex.useStore, Wv = () => {
  const e = Xv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = xc(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = qs(), c = {
    id: Vt,
    type: $t
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const l = [];
      return yield Lo(() => C(void 0, null, function* () {
        const u = yield o("page");
        if (!u)
          return !0;
        let p = yield ie.fetchPageSuggestions(
          t.value,
          n.value,
          u
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, r), l.push(...p), l.length >= r;
      })), l.forEach(
        (u) => u.suggestionProvider = c
      ), l;
    }),
    fetchSectionSuggestionsBasedOnEdits: (r) => C(void 0, null, function* () {
      const l = [];
      return yield Lo(() => C(void 0, null, function* () {
        const u = yield o("section");
        if (!u)
          return !0;
        const p = yield ie.fetchSectionSuggestions(
          t.value,
          n.value,
          u
        );
        if (!p)
          return !1;
        let m = p.filter(
          (f) => s(f)
        );
        const h = p.filter(
          (f) => !s(f)
        );
        return m = m.slice(0, r), l.push(...m), h.forEach((f) => {
          f && !i(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), l.length >= r;
      })), l.forEach(
        (u) => u.suggestionProvider = c
      ), l;
    })
  };
}, Kv = window.Vuex.useStore, Yv = () => {
  const e = Kv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: zt,
    type: $t
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = qs();
  return { fetchSectionSuggestionsPopular: (g) => C(void 0, null, function* () {
    const r = [];
    return yield Lo(() => C(void 0, null, function* () {
      const l = yield ie.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let u = l.filter(
        (m) => s(m)
      );
      const p = l.filter(
        (m) => !s(m)
      );
      return u = u.slice(0, g), r.push(...u), p.forEach((m) => {
        m && !i(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), r.length >= g;
    })), r.forEach(
      (l) => l.suggestionProvider = o
    ), r;
  }), fetchPageSuggestionsPopular: (g) => C(void 0, null, function* () {
    const r = [];
    return yield Lo(() => C(void 0, null, function* () {
      let l = yield ie.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return l = l.filter(
        (u) => a(u)
      ), l = l.slice(0, g), r.push(...l), r.length >= g;
    })), r.forEach(
      (l) => l.suggestionProvider = o
    ), r;
  }) };
}, Wm = window.Vue.ref, Ji = Wm([]), Ru = Wm(!1), $c = () => ({ pageCollections: Ji, fetchPageCollections: () => C(void 0, null, function* () {
  try {
    Ji.value = yield ie.fetchPageCollections(), Ji.value.sort((t, n) => t.name.localeCompare(n.name)), Ru.value = !0;
  } catch (t) {
    mw.log.error("Failed to fetch page collections", t);
  }
}), pageCollectionsFetched: Ru });
class Ql {
  /**
   * @param {string} id
   * @param {string} label
   * @param {{ id: string, label: string, type: string }[]} filters
   */
  constructor({ id: t, label: n, filters: o }) {
    this.id = t, this.label = n, this.filters = o;
  }
}
const pa = window.Vue.computed, zu = mw.loader.require("ext.cx.articletopics"), Jv = (e) => new Ql({
  id: e.groupId,
  label: e.label,
  filters: e.topics.map((t) => ({
    id: t.topicId,
    label: t.label,
    type: We
  }))
}), Vc = () => {
  const e = pe(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), o = {
    id: Vt,
    type: $t,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }, s = {
    id: zt,
    type: $t,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }, a = {
    id: fe,
    type: $t,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }, { pageCollections: i, pageCollectionsFetched: c } = $c(), d = pa(() => {
    const w = new Ql({
      id: $t,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [o, s]
    });
    return i.value.length && w.filters.push(a), w;
  }), g = (w) => ({
    id: w.name,
    label: w.name,
    type: fe
  }), r = pa(
    () => new Ql({
      id: "collections",
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: i.value.map(
        (w) => g(w)
      )
    })
  ), l = pa(() => {
    const w = [
      d.value,
      ...zu.map(Jv)
    ];
    return i.value.length && w.splice(1, 0, r.value), w;
  }), u = pa(
    () => [t.value.type, t.value.id].includes(
      fe
    ) && !c.value
  ), p = () => {
    if (u.value)
      return [];
    const w = h();
    return w.type === We || w.type === rt || w.type === fe || w.id === fe ? [w, o] : [o, s];
  }, m = (w) => {
    n(w.type, w.id);
  }, h = () => t.value.type === rt ? {
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  } : l.value.flatMap((w) => w.filters).find(f), f = (w) => t.value.type === w.type && t.value.id === w.id;
  return {
    allFilters: l,
    getFiltersSummary: p,
    selectFilter: m,
    isFilterSelected: f,
    getArticleTopics: (w) => {
      const y = zu.flatMap((k) => k.topics).find((k) => k.topicId === w);
      return y ? y.articletopics : [];
    },
    waitingForPageCollectionsFetch: u,
    findSelectedFilter: h
  };
}, Zv = window.Vuex.useStore, Qv = () => {
  const e = Zv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = qs(), { getArticleTopics: c } = Vc();
  return {
    fetchPageSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const l = o.value.id, u = {
        id: l,
        type: We
      }, p = c(l);
      let m = yield ie.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        p
      );
      return m = m.filter(
        (h) => a(h)
      ), m = m.slice(0, r), m.forEach(
        (h) => h.suggestionProvider = u
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (r) => C(void 0, null, function* () {
      const l = o.value.id, u = {
        id: l,
        type: We
      }, p = c(l), m = [];
      return yield Lo(() => C(void 0, null, function* () {
        const h = yield ie.fetchSectionSuggestionsByTopics(
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
        return f = f.slice(0, r), m.push(...f), _.forEach((w) => {
          w && !i(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), m.length >= r;
      })), m.forEach(
        (h) => h.suggestionProvider = u
      ), m;
    })
  };
}, eS = window.Vuex.useStore, tS = window.Vue.computed, nS = () => {
  const e = eS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = tS(() => {
    var r;
    return ((r = o.value) == null ? void 0 : r.type) !== fe ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: i,
    sectionSuggestionExists: c
  } = qs();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const r = [], l = yield ie.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      let u = l.filter(
        (m) => a(m)
      );
      const p = l.filter(
        (m) => !a(m)
      );
      return r.push(...u), p.forEach((m) => {
        m && !c(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), r.forEach(
        (m) => m.suggestionProvider = o.value
      ), r;
    }),
    fetchPageSuggestionsByCollections: () => C(void 0, null, function* () {
      const r = [];
      let l = yield ie.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return l = l.filter(
        (u) => i(u)
      ), r.push(...l), r.forEach(
        (u) => u.suggestionProvider = o.value
      ), r;
    })
  };
}, oS = window.Vuex.useStore, sS = () => {
  const e = oS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = qs();
  return {
    fetchPageSuggestionsBySeed: (g) => C(void 0, null, function* () {
      const r = o.value.id;
      let l = yield ie.fetchPageSuggestions(
        t.value,
        n.value,
        r
      );
      return l = l.filter(
        (u) => a(u)
      ), l = l.slice(0, g), l.forEach(
        (u) => u.suggestionProvider = {
          id: r,
          type: rt
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (g) => C(void 0, null, function* () {
      const r = [], l = o.value.id;
      return yield Lo(() => C(void 0, null, function* () {
        const u = yield ie.fetchSectionSuggestions(
          t.value,
          n.value,
          l
        );
        if (!u)
          return !1;
        let p = u.filter(
          (h) => s(h)
        );
        const m = u.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, g), r.push(...p), m.forEach((h) => {
          h && !i(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), r.length >= g;
      })), r.forEach(
        (u) => u.suggestionProvider = {
          id: l,
          type: rt
        }
      ), r;
    })
  };
}, Ec = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Wv(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Yv(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = Qv(), {
    fetchPageSuggestionsByCollections: c,
    fetchSectionSuggestionsByCollections: d
  } = nS(), { fetchPageSuggestionsBySeed: g, fetchSectionSuggestionsBySeed: r } = sS(), l = {
    [Vt]: t,
    [zt]: o,
    [fe]: c,
    [We]: a,
    [rt]: g
  }, u = {
    [Vt]: n,
    [zt]: s,
    [fe]: d,
    [We]: i,
    [rt]: r
  }, p = (f) => f.type === $t ? f.id : f.type;
  return {
    getFilterProvider: p,
    getCurrentPageSuggestionProvider: () => l[p(e.value)],
    getCurrentSectionSuggestionProvider: () => u[p(e.value)]
  };
}, aS = window.Vuex.useStore, Lc = () => {
  const e = aS(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = bc(), { sourceLanguageURLParameter: o } = B(), s = Hs(), a = () => {
    const u = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - u.length % p;
  }, i = () => {
    const u = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - u.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: d
  } = Ec(), g = (u) => {
    try {
      const p = u.map((m) => m.sourceTitle);
      if (p.length)
        return s(o.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const u = a(), m = yield d()(
        u
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), g(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const u = i(), m = yield c()(
        u
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), g(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, iS = window.Vuex.useStore, Km = () => {
  const e = iS();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ie.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, rS = window.Vuex.useStore, Ac = () => {
  const e = rS(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Lc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = bc(), { targetLanguageURLParameter: a } = B(), i = Km();
  return () => C(void 0, null, function* () {
    const c = s(0), d = o(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, r = c.length === g, l = d.length === g;
    r && l || (yield i(a.value), t(), n());
  });
}, lS = window.Vuex.useStore, Ym = () => {
  const e = lS(), t = Hs();
  return (n, o, s) => C(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield ie.fetchSectionSuggestion(
        n,
        s,
        o
      );
      try {
        if (yield t(n, [s]), a)
          a.isListable = !1, e.commit("suggestions/addSectionSuggestion", a);
        else {
          const i = e.getters["mediawiki/getPage"](
            n,
            s
          );
          return new Mo({
            sourceLanguage: n,
            targetLanguage: o,
            sourceTitle: s,
            langLinksCount: i.langLinksCount,
            wikidataId: i.wikidataId
          });
        }
      } catch (i) {
        throw new Error(
          `No page metadata found for title ${s} and language pair ${n}-${o}`
        );
      }
    }
    return a;
  });
}, Ou = window.Vue.computed, cS = window.Vuex.useStore, pn = () => {
  const e = cS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = Ou(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Ou(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, d) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(d)
  };
}, Ci = window.Vuex.useStore, Gs = (e, t, n, o, s = {}) => {
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
}, { setLanguageURLParams: uS } = B(), Xs = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), uS(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Jm = () => {
  const e = Ci(), t = Ac();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = ue(e);
    n === o && (n = a.value, o = s.value), Gs(
      n,
      o,
      null,
      null
    ) || (Xs(e, n, o), t());
  };
}, dS = () => {
  const e = Ci(), t = Ac();
  return (
    /** @param {Translation} translation */
    (n) => {
      const { sourceLanguage: o, targetLanguage: s, sourceTitle: a, sourceSectionTitle: i } = n;
      Gs(
        o,
        s,
        a,
        i,
        { draft: !0 }
      ) || (Xs(e, o, s), t());
    }
  );
}, gS = () => {
  const e = Ci();
  return (t) => {
    const { sourceLanguage: n, targetLanguage: o, sourceTitle: s } = t;
    Gs(
      n,
      o,
      s,
      null
    ) || Xs(e, n, o);
  };
}, pS = () => {
  const e = Ci(), t = Ym(), { currentLanguageTitleGroup: n, targetPageExists: o } = pn(), s = Hs();
  return (a, i) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d,
      setPageURLParam: g,
      clearSectionURLParameter: r
    } = B();
    a === i && (a = d.value, i = c.value);
    const l = n.value.getTitleForLanguage(a);
    Gs(
      a,
      i,
      l,
      null
    ) || (Xs(e, a, i), g(l), o.value ? (r(), yield t(
      c.value,
      d.value,
      l
    )) : yield s(c.value, [l]));
  });
}, mS = window.Vuex.useStore, hS = window.Vue.ref, ju = hS(!1), Zm = () => {
  const e = mS(), { enabledTargetLanguages: t, supportedLanguageCodes: n } = Po(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a,
    sectionURLParameter: i
  } = B(), c = () => {
    var _;
    const g = q.getCurrentWikiLanguageCode(), r = (w) => !t.value || Array.isArray(t.value) && t.value.includes(w), l = (w) => n.value.includes(w), u = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, p = [
      s.value,
      mw.storage.get("cxTargetLanguage"),
      g,
      ((_ = t.value) == null ? void 0 : _[0]) || u.targetLanguage
    ], m = [
      o.value,
      mw.storage.get("cxSourceLanguage"),
      u.sourceLanguage,
      g,
      u.targetLanguage
    ], h = p.find(
      (w) => r(w) && l(w)
    );
    return { sourceLanguage: m.find(
      (w) => l(w) && w !== h
    ), targetLanguage: h };
  };
  return { initializeApplicationLanguages: () => C(void 0, null, function* () {
    yield e.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { sourceLanguage: g, targetLanguage: r } = c(
      t.value,
      n.value
    );
    Gs(
      g,
      r,
      a.value,
      i.value
    ) || Xs(e, g, r), ju.value = !0;
  }), applicationLanguagesInitialized: ju };
};
const fS = window.Vue.resolveDynamicComponent, Hu = window.Vue.openBlock, qu = window.Vue.createBlock, wS = window.Vue.Transition, jo = window.Vue.withCtx, Ho = window.Vue.createVNode, _S = window.Vue.resolveComponent, Zi = window.Vue.unref, vS = window.Vuex.useStore, Gu = window.Vue.computed, SS = window.Vue.onMounted, yS = window.Vue.inject, CS = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = Zm();
    t(), n();
    const o = yS("breakpoints"), s = Gu(() => o.value.mobile), a = vS(), i = Gu(
      () => a.state.application.autoSavePending
    );
    return SS(() => {
      window.addEventListener("beforeunload", (c) => {
        i.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && km.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((d) => {
          d instanceof Bo && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, d) => {
      const g = _S("router-view");
      return Hu(), qu(Zi(Ew), { id: "contenttranslation" }, {
        default: jo(() => [
          Ho(Zi(P), { class: "cx-container" }, {
            default: jo(() => [
              Ho(Zi(b), { cols: "12" }, {
                default: jo(() => [
                  Ho(g, null, {
                    default: jo(({ Component: r, route: l }) => [
                      Ho(wS, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: jo(() => [
                          (Hu(), qu(fS(r)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Ho(c_)
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
}, bS = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translationsLoaded: { draft: !1, published: !1 },
  translatorStats: null
}, kS = {
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
  )
};
class Qm {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Ao {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Qm(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Xu = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Qe(de({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class xS {
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
    const t = Xu((s = this.user) == null ? void 0 : s.content), n = Xu((a = this.mt) == null ? void 0 : a.content);
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
class Dc extends fi {
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
    status: d,
    targetTitle: g,
    targetUrl: r,
    sectionTranslations: l
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: i,
      pageRevision: c,
      status: d,
      targetTitle: g
    }), this.targetUrl = r, this.sectionTranslations = l;
  }
}
const bi = mw.user.isAnon() ? void 0 : "user", eh = (e) => {
  if (e === "assertuserfailed")
    throw new Bo();
};
function th(e, t = null) {
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
        (d) => new fc(Qe(de({}, d), { status: e }))
      ) : i = a.map(
        (d) => new Dc(Qe(de({}, d), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const d = yield th(
          e,
          s.continue.offset
        );
        i = i.concat(d);
      }
      return i;
    }));
  });
}
function $S(e) {
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
      (a) => new xS(a)
    );
  });
}
function VS(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== Y.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = q.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, d]) => {
      var r, l;
      if (!d) {
        const u = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(u);
      }
      return (l = (r = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : r.groups) == null ? void 0 : l.content;
    }).catch((c) => Promise.reject(c));
  });
}
const ES = (e, t, n) => {
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
}, LS = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: c,
  captchaId: d,
  captchaWord: g,
  isSandbox: r,
  sectionTranslationId: l
}) => {
  const u = {
    assert: bi,
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
    sectiontranslationid: l
  };
  return d && (u.captchaid = d, u.captchaword = g), new mw.Api().postWithToken("csrf", u).then((m) => {
    if (m = m.cxpublishsection, m.result === "error") {
      if (m.edit.captcha)
        return {
          publishFeedbackMessage: new Ao({
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
    eh(m);
    let f;
    return h = h || {}, h.exception ? f = h.exception.message : h.error ? f = h.error.info : f = "Unknown error", {
      publishFeedbackMessage: new Ao({
        text: f,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, AS = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: c,
  sectionId: d,
  isSandbox: g,
  progress: r
}) => {
  const l = {
    assert: bi,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: d,
    issandbox: g,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", l).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    eh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Ao({ text: h, status: "error" });
  });
}, DS = (e) => {
  const t = {
    assert: bi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, TS = () => {
  const e = {
    assert: bi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Dc(n.cxcheckunreviewed.translation)
  );
}, BS = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, PS = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, FS = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), lt = {
  fetchTranslations: th,
  fetchTranslationUnits: $S,
  fetchSegmentTranslation: VS,
  parseTemplateWikitext: ES,
  publishTranslation: LS,
  saveTranslation: AS,
  deleteTranslation: BS,
  fetchTranslatorStats: FS,
  deleteCXTranslation: PS,
  splitTranslation: DS,
  checkUnreviewedTranslations: TS
};
function MS(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield lt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const NS = {
  fetchTranslatorStats: MS
}, US = {
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
}, IS = {
  namespaced: !0,
  state: bS,
  getters: kS,
  actions: NS,
  mutations: US
}, RS = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
  /** @type FavoriteSuggestion[] */
  favorites: [],
  /**
   * Boolean indicating that the page suggestions fetching is pending.
   * This means we expect the fetching process to begin shortly, but
   * it has not started yet.
   *
   * Useful during dashboard initialization or language pair update.
   * @type {boolean}
   */
  isPageSuggestionsFetchPending: !0,
  /**
   * Boolean indicating that the section suggestions fetching is pending.
   * This means we expect the fetching process to begin shortly, but
   * it has not started yet.
   *
   * Useful during dashboard initialization or language pair update.
   * @type {boolean}
   */
  isSectionSuggestionsFetchPending: !0,
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
  appendixSectionTitles: Sv
}, zS = {
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
}, OS = {
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
  },
  setIsPageSuggestionsFetchPending(e, t) {
    e.isPageSuggestionsFetchPending = t;
  },
  setIsSectionSuggestionsFetchPending(e, t) {
    e.isSectionSuggestionsFetchPending = t;
  }
}, jS = {
  namespaced: !0,
  state: RS,
  getters: zS,
  actions: {},
  mutations: OS
}, HS = {
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
}, qS = {
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
function GS() {
  return q.getLanguagePairs().then((e) => e.sourceLanguages);
}
function XS(e, t) {
  return C(this, null, function* () {
    const n = q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new Y(e, t, o.mt)
      )
    );
  });
}
function WS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function KS(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = q.getWikiDomainCode(e), i = q.getWikiDomainCode(t), c = {
    action: "wblinktitles",
    fromsite: s.replace(i, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, d = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(d.postWithToken("csrf", c)).then((g) => {
    const l = {
      action: "tag",
      revid: g.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(d.postWithToken("csrf", l));
  });
}
const ki = {
  fetchSupportedLanguageCodes: GS,
  fetchSupportedMTProviders: XS,
  fetchCXServerToken: WS,
  addWikibaseLink: KS
};
function YS(n) {
  return C(this, arguments, function* ({ commit: e, state: t }) {
    if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
      e("setSupportedLanguageCodesRequested", !0);
      const o = yield ki.fetchSupportedLanguageCodes();
      e("setSupportedLanguageCodes", o);
    }
  });
}
function JS(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var i;
    const { sourceLanguage: s } = t.application;
    if ((i = n.nearbyPages[s]) != null && i.length)
      return;
    const a = yield to.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const ZS = {
  fetchNearbyPages: JS,
  fetchSupportedLanguageCodes: YS
}, QS = {
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
}, ey = {
  namespaced: !0,
  state: HS,
  getters: qS,
  actions: ZS,
  mutations: QS
}, ty = {
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
  translationDataLoadingCounter: 0,
  isLoginDialogOn: !1,
  /**
   * The name of the previous route (as defined in vue-router config)
   * @type String
   */
  previousRoute: null,
  /**
   * Whether the dashboard banner has been dismissed by the user
   */
  bannerDismissed: !1
}, ny = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, oy = {
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
  },
  dismissBanner: (e) => {
    e.bannerDismissed = !0;
  }
}, sy = {
  namespaced: !0,
  state: ty,
  getters: ny,
  actions: {},
  mutations: oy
}, ay = window.Vuex.createStore, iy = ay({
  modules: { translator: IS, suggestions: jS, mediawiki: ey, application: sy }
});
function ry() {
  return nh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function nh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const ly = typeof Proxy == "function", cy = "devtools-plugin:setup", uy = "plugin:settings:set";
let oo, ec;
function dy() {
  var e;
  return oo !== void 0 || (typeof window != "undefined" && window.performance ? (oo = !0, ec = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (oo = !0, ec = global.perf_hooks.performance) : oo = !1), oo;
}
function gy() {
  return dy() ? ec.now() : Date.now();
}
class py {
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
        return gy();
      }
    }, n && n.on(uy, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...d) => {
        this.onQueue.push({
          method: c,
          args: d
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...d) => (this.targetQueue.push({
        method: c,
        args: d,
        resolve: () => {
        }
      }), this.fallbacks[c](...d)) : (...d) => new Promise((g) => {
        this.targetQueue.push({
          method: c,
          args: d,
          resolve: g
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
function my(e, t) {
  const n = e, o = nh(), s = ry(), a = ly && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(cy, e, t);
  else {
    const i = a ? new py(n, s) : null;
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
const oh = window.Vue.getCurrentInstance, Do = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const It = window.Vue.computed, Ds = window.Vue.unref, hy = window.Vue.watchEffect, sh = window.Vue.defineComponent, fy = window.Vue.reactive, ah = window.Vue.h, Qi = window.Vue.provide, wy = window.Vue.ref, ih = window.Vue.watch, _y = window.Vue.shallowRef, vy = window.Vue.shallowReactive, Sy = window.Vue.nextTick, cn = typeof window != "undefined";
function yy(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const G = Object.assign;
function er(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Ke(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ts = () => {
}, Ke = Array.isArray;
function j(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Cy = /\/$/, by = (e) => e.replace(Cy, "");
function tr(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const c = t.indexOf("#");
  let d = t.indexOf("?");
  return c < d && c >= 0 && (d = -1), d > -1 && (o = t.slice(0, d), a = t.slice(d + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), i = t.slice(c, t.length)), o = $y(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function ky(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Wu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Ku(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Bn(t.matched[o], n.matched[s]) && rh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Bn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function rh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!xy(e[n], t[n]))
      return !1;
  return !0;
}
function xy(e, t) {
  return Ke(e) ? Yu(e, t) : Ke(t) ? Yu(t, e) : e === t;
}
function Yu(e, t) {
  return Ke(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function $y(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return j(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var Fs;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Fs || (Fs = {}));
var Bs;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Bs || (Bs = {}));
function Vy(e) {
  if (!e)
    if (cn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), by(e);
}
const Ey = /^[^#]+#/;
function Ly(e, t) {
  return e.replace(Ey, "#") + t;
}
function Ay(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const xi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Dy(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          j(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        j(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && j(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Ay(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Ju(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const tc = /* @__PURE__ */ new Map();
function Ty(e, t) {
  tc.set(e, t);
}
function By(e) {
  const t = tc.get(e);
  return tc.delete(e), t;
}
let Py = () => location.protocol + "//" + location.host;
function lh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, d = s.slice(c);
    return d[0] !== "/" && (d = "/" + d), Wu(d, "");
  }
  return Wu(n, e) + o + s;
}
function Fy(e, t, n, o) {
  let s = [], a = [], i = null;
  const c = ({ state: u }) => {
    const p = lh(e, location), m = n.value, h = t.value;
    let f = 0;
    if (u) {
      if (n.value = p, t.value = u, i && i === m) {
        i = null;
        return;
      }
      f = h ? u.position - h.position : 0;
    } else
      o(p);
    s.forEach((_) => {
      _(n.value, m, {
        delta: f,
        type: Fs.pop,
        direction: f ? f > 0 ? Bs.forward : Bs.back : Bs.unknown
      });
    });
  };
  function d() {
    i = n.value;
  }
  function g(u) {
    s.push(u);
    const p = () => {
      const m = s.indexOf(u);
      m > -1 && s.splice(m, 1);
    };
    return a.push(p), p;
  }
  function r() {
    const { history: u } = window;
    u.state && u.replaceState(G({}, u.state, { scroll: xi() }), "");
  }
  function l() {
    for (const u of a)
      u();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", r, {
    passive: !0
  }), {
    pauseListeners: d,
    listen: g,
    destroy: l
  };
}
function Zu(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? xi() : null
  };
}
function My(e) {
  const { history: t, location: n } = window, o = {
    value: lh(e, n)
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
  function a(d, g, r) {
    const l = e.indexOf("#"), u = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + d : Py() + e + d;
    try {
      t[r ? "replaceState" : "pushState"](g, "", u), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? j("Error with push/replace State", p) : console.error(p), n[r ? "replace" : "assign"](u);
    }
  }
  function i(d, g) {
    const r = G({}, t.state, Zu(
      s.value.back,
      // keep back and forward entries but override current position
      d,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(d, r, !0), o.value = d;
  }
  function c(d, g) {
    const r = G(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: d,
        scroll: xi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && j(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const l = G({}, Zu(o.value, d, null), { position: r.position + 1 }, g);
    a(d, l, !1), o.value = d;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: i
  };
}
function Ny(e) {
  e = Vy(e);
  const t = My(e), n = Fy(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = G({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Ly.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Uy(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && j(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Ny(e);
}
function Iy(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ch(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const fn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, nc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Qu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Qu || (Qu = {}));
const Ry = {
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
    return `Redirected from "${e.fullPath}" to "${Oy(t)}" via a navigation guard.`;
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
function To(e, t) {
  return {}.NODE_ENV !== "production" ? G(new Error(Ry[e](t)), {
    type: e,
    [nc]: !0
  }, t) : G(new Error(), {
    type: e,
    [nc]: !0
  }, t);
}
function Gt(e, t) {
  return e instanceof Error && nc in e && (t == null || !!(e.type & t));
}
const zy = ["params", "query", "hash"];
function Oy(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of zy)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const ed = "[^/]+?", jy = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Hy = /[.+*?^${}()[\]/\\]/g;
function qy(e, t) {
  const n = G({}, jy, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const r = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let l = 0; l < g.length; l++) {
      const u = g[l];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (u.type === 0)
        l || (s += "/"), s += u.value.replace(Hy, "\\$&"), p += 40;
      else if (u.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: _ } = u;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = _ || ed;
        if (w !== ed) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + y.message);
          }
        }
        let S = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        l || (S = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && g.length < 2 ? `(?:/${S})` : "/" + S), f && (S += "?"), s += S, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
      }
      r.push(p);
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
    const r = g.match(i), l = {};
    if (!r)
      return null;
    for (let u = 1; u < r.length; u++) {
      const p = r[u] || "", m = a[u - 1];
      l[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return l;
  }
  function d(g) {
    let r = "", l = !1;
    for (const u of e) {
      (!l || !r.endsWith("/")) && (r += "/"), l = !1;
      for (const p of u)
        if (p.type === 0)
          r += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, _ = m in g ? g[m] : "";
          if (Ke(_) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = Ke(_) ? _.join("/") : _;
          if (!w)
            if (f)
              u.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : l = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          r += w;
        }
    }
    return r || "/";
  }
  return {
    re: i,
    score: o,
    keys: a,
    parse: c,
    stringify: d
  };
}
function Gy(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Xy(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Gy(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (td(o))
      return 1;
    if (td(s))
      return -1;
  }
  return s.length - o.length;
}
function td(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Wy = {
  type: 0,
  value: ""
}, Ky = /[a-zA-Z0-9_]/;
function Yy(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Wy]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${g}": ${p}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let c = 0, d, g = "", r = "";
  function l() {
    g && (n === 0 ? a.push({
      type: 0,
      value: g
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (d === "*" || d === "+") && t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: g,
      regexp: r,
      repeatable: d === "*" || d === "+",
      optional: d === "*" || d === "?"
    })) : t("Invalid state to consume buffer"), g = "");
  }
  function u() {
    g += d;
  }
  for (; c < e.length; ) {
    if (d = e[c++], d === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        d === "/" ? (g && l(), i()) : d === ":" ? (l(), n = 1) : u();
        break;
      case 4:
        u(), n = o;
        break;
      case 1:
        d === "(" ? n = 2 : Ky.test(d) ? u() : (l(), n = 0, d !== "*" && d !== "?" && d !== "+" && c--);
        break;
      case 2:
        d === ")" ? r[r.length - 1] == "\\" ? r = r.slice(0, -1) + d : n = 3 : r += d;
        break;
      case 3:
        l(), n = 0, d !== "*" && d !== "?" && d !== "+" && c--, r = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), l(), i(), s;
}
function Jy(e, t, n) {
  const o = qy(Yy(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && j(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
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
function Zy(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = sd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, l, u) {
    const p = !u, m = Qy(r);
    ({}).NODE_ENV !== "production" && oC(m, l), m.aliasOf = u && u.record;
    const h = sd(t, r), f = [
      m
    ];
    if ("alias" in r) {
      const S = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const y of S)
        f.push(G({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: u ? u.record.components : m.components,
          path: y,
          // we might be the child of an alias
          aliasOf: u ? u.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let _, w;
    for (const S of f) {
      const { path: y } = S;
      if (l && y[0] !== "/") {
        const k = l.record.path, x = k[k.length - 1] === "/" ? "" : "/";
        S.path = l.record.path + (y && x + y);
      }
      if ({}.NODE_ENV !== "production" && S.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (_ = Jy(S, l, h), {}.NODE_ENV !== "production" && l && y[0] === "/" && sC(_, l), u ? (u.alias.push(_), {}.NODE_ENV !== "production" && nC(u, _)) : (w = w || _, w !== _ && w.alias.push(_), p && r.name && !od(_) && i(r.name)), m.children) {
        const k = m.children;
        for (let x = 0; x < k.length; x++)
          a(k[x], _, u && u.children[x]);
      }
      u = u || _, (_.record.components && Object.keys(_.record.components).length || _.record.name || _.record.redirect) && d(_);
    }
    return w ? () => {
      i(w);
    } : Ts;
  }
  function i(r) {
    if (ch(r)) {
      const l = o.get(r);
      l && (o.delete(r), n.splice(n.indexOf(l), 1), l.children.forEach(i), l.alias.forEach(i));
    } else {
      const l = n.indexOf(r);
      l > -1 && (n.splice(l, 1), r.record.name && o.delete(r.record.name), r.children.forEach(i), r.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function d(r) {
    let l = 0;
    for (; l < n.length && Xy(r, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[l].record.path || !uh(r, n[l])); )
      l++;
    n.splice(l, 0, r), r.record.name && !od(r) && o.set(r.record.name, r);
  }
  function g(r, l) {
    let u, p = {}, m, h;
    if ("name" in r && r.name) {
      if (u = o.get(r.name), !u)
        throw To(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(r.params || {}).filter((S) => !u.keys.find((y) => y.name === S));
        w.length && j(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = u.record.name, p = G(
        // paramsFromLocation is a new object
        nd(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          u.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && nd(r.params, u.keys.map((w) => w.name))
      ), m = u.stringify(p);
    } else if ("path" in r)
      m = r.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && j(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), u = n.find((w) => w.re.test(m)), u && (p = u.parse(m), h = u.record.name);
    else {
      if (u = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !u)
        throw To(1, {
          location: r,
          currentLocation: l
        });
      h = u.record.name, p = G({}, l.params, r.params), m = u.stringify(p);
    }
    const f = [];
    let _ = u;
    for (; _; )
      f.unshift(_.record), _ = _.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: tC(f)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: g, removeRoute: i, getRoutes: c, getRecordMatcher: s };
}
function nd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Qy(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: eC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function eC(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function od(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function tC(e) {
  return e.reduce((t, n) => G(t, n.meta), {});
}
function sd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function oc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function nC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(oc.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(oc.bind(null, n)))
      return j(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function oC(e, t) {
  t && t.record.name && !e.name && !e.path && j(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function sC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(oc.bind(null, n)))
      return j(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function uh(e, t) {
  return t.children.some((n) => n === e || uh(e, n));
}
const dh = /#/g, aC = /&/g, iC = /\//g, rC = /=/g, lC = /\?/g, gh = /\+/g, cC = /%5B/g, uC = /%5D/g, ph = /%5E/g, dC = /%60/g, mh = /%7B/g, gC = /%7C/g, hh = /%7D/g, pC = /%20/g;
function Tc(e) {
  return encodeURI("" + e).replace(gC, "|").replace(cC, "[").replace(uC, "]");
}
function mC(e) {
  return Tc(e).replace(mh, "{").replace(hh, "}").replace(ph, "^");
}
function sc(e) {
  return Tc(e).replace(gh, "%2B").replace(pC, "+").replace(dh, "%23").replace(aC, "%26").replace(dC, "`").replace(mh, "{").replace(hh, "}").replace(ph, "^");
}
function hC(e) {
  return sc(e).replace(rC, "%3D");
}
function fC(e) {
  return Tc(e).replace(dh, "%23").replace(lC, "%3F");
}
function wC(e) {
  return e == null ? "" : fC(e).replace(iC, "%2F");
}
function Ms(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && j(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function _C(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(gh, " "), i = a.indexOf("="), c = Ms(i < 0 ? a : a.slice(0, i)), d = i < 0 ? null : Ms(a.slice(i + 1));
    if (c in t) {
      let g = t[c];
      Ke(g) || (g = t[c] = [g]), g.push(d);
    } else
      t[c] = d;
  }
  return t;
}
function ad(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = hC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ke(o) ? o.map((a) => a && sc(a)) : [o && sc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function vC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ke(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const SC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), id = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), $i = Symbol({}.NODE_ENV !== "production" ? "router" : ""), fh = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), ac = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function qo() {
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
function Dn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, c) => {
    const d = (l) => {
      l === !1 ? c(To(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : Iy(l) ? c(To(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), i());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? yC(d, t, n) : d);
    let r = Promise.resolve(g);
    if (e.length < 3 && (r = r.then(d)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        r = r.then((u) => d._called ? u : (j(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !d._called) {
        j(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((l) => c(l));
  });
}
function yC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && j(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function nr(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && j(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let c = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw j(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          j(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const d = c;
          c = () => d;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, j(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (CC(c)) {
          const g = (c.__vccOpts || c)[t];
          g && s.push(Dn(g, n, o, a, i));
        } else {
          let d = c();
          ({}).NODE_ENV !== "production" && !("catch" in d) && (j(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), d = Promise.resolve(d)), s.push(() => d.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = yy(g) ? g.default : g;
            a.components[i] = r;
            const u = (r.__vccOpts || r)[t];
            return u && Dn(u, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function CC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function rd(e) {
  const t = Do($i), n = Do(fh), o = It(() => t.resolve(Ds(e.to))), s = It(() => {
    const { matched: d } = o.value, { length: g } = d, r = d[g - 1], l = n.matched;
    if (!r || !l.length)
      return -1;
    const u = l.findIndex(Bn.bind(null, r));
    if (u > -1)
      return u;
    const p = ld(d[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      ld(r) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(Bn.bind(null, d[g - 2])) : u
    );
  }), a = It(() => s.value > -1 && $C(n.params, o.value.params)), i = It(() => s.value > -1 && s.value === n.matched.length - 1 && rh(n.params, o.value.params));
  function c(d = {}) {
    return xC(d) ? t[Ds(e.replace) ? "replace" : "push"](
      Ds(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ts) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && cn) {
    const d = oh();
    if (d) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(g), hy(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: It(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const bC = /* @__PURE__ */ sh({
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
  useLink: rd,
  setup(e, { slots: t }) {
    const n = fy(rd(e)), { options: o } = Do($i), s = It(() => ({
      [cd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [cd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : ah("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), kC = bC;
function xC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function $C(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Ke(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function ld(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const cd = (e, t, n) => e != null ? e : t != null ? t : n, VC = /* @__PURE__ */ sh({
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
    ({}).NODE_ENV !== "production" && LC();
    const o = Do(ac), s = It(() => e.route || o.value), a = Do(id, 0), i = It(() => {
      let g = Ds(a);
      const { matched: r } = s.value;
      let l;
      for (; (l = r[g]) && !l.components; )
        g++;
      return g;
    }), c = It(() => s.value.matched[i.value]);
    Qi(id, It(() => i.value + 1)), Qi(SC, c), Qi(ac, s);
    const d = wy();
    return ih(() => [d.value, c.value, e.name], ([g, r, l], [u, p, m]) => {
      r && (r.instances[l] = g, p && p !== r && g && g === u && (r.leaveGuards.size || (r.leaveGuards = p.leaveGuards), r.updateGuards.size || (r.updateGuards = p.updateGuards))), g && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Bn(r, p) || !u) && (r.enterCallbacks[l] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, r = e.name, l = c.value, u = l && l.components[r];
      if (!u)
        return ud(n.default, { Component: u, route: g });
      const p = l.props[r], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, f = ah(u, G({}, m, t, {
        onVnodeUnmounted: (_) => {
          _.component.isUnmounted && (l.instances[r] = null);
        },
        ref: d
      }));
      if ({}.NODE_ENV !== "production" && cn && f.ref) {
        const _ = {
          depth: i.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (Ke(f.ref) ? f.ref.map((S) => S.i) : [f.ref.i]).forEach((S) => {
          S.__vrv_devtools = _;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        ud(n.default, { Component: f, route: g }) || f
      );
    };
  }
});
function ud(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const EC = VC;
function LC() {
  const e = oh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    j(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Go(e, t) {
  const n = G({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => UC(o, ["instances", "children", "aliasOf"]))
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
function ma(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let AC = 0;
function DC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = AC++;
  my({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((r, l) => {
      r.instanceData && r.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Go(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const u = l.__vrv_devtools;
        r.tags.push({
          label: (u.name ? `${u.name.toString()}: ` : "") + u.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: wh
        });
      }
      Ke(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((u) => {
        let p = Sh, m = "";
        u.isExactActive ? (p = vh, m = "This is exactly active") : u.isActive && (p = _h, m = "This link is active"), r.tags.push({
          label: u.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), ih(t.currentRoute, () => {
      d(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((r, l) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: r },
          groupId: l.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((r, l) => {
      const u = {
        guard: ma("beforeEach"),
        from: Go(l, "Current Location during this navigation"),
        to: Go(r, "Target location")
      };
      Object.defineProperty(r.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: r.fullPath,
          data: u,
          groupId: r.meta.__navigationId
        }
      });
    }), t.afterEach((r, l, u) => {
      const p = {
        guard: ma("afterEach")
      };
      u ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: u ? u.message : "",
          tooltip: "Navigation Failure",
          value: u
        }
      }, p.status = ma("❌")) : p.status = ma("✅"), p.from = Go(l, "Current Location during this navigation"), p.to = Go(r, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: r.fullPath,
          time: s.now(),
          data: p,
          logType: u ? "warning" : "default",
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
    function d() {
      if (!g)
        return;
      const r = g;
      let l = n.getRoutes().filter((u) => !u.parent);
      l.forEach(bh), r.filter && (l = l.filter((u) => (
        // save matches state based on the payload
        ic(u, r.filter.toLowerCase())
      ))), l.forEach((u) => Ch(u, t.currentRoute.value)), r.rootNodes = l.map(yh);
    }
    let g;
    s.on.getInspectorTree((r) => {
      g = r, r.app === e && r.inspectorId === c && d();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === c) {
        const u = n.getRoutes().find((p) => p.record.__vd_id === r.nodeId);
        u && (r.state = {
          options: BC(u)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function TC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function BC(e) {
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
        display: e.keys.map((o) => `${o.name}${TC(o)}`).join(" "),
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
const wh = 15485081, _h = 2450411, vh = 8702998, PC = 2282478, Sh = 16486972, FC = 6710886;
function yh(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: PC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Sh
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: wh
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: vh
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: _h
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: FC
  });
  let o = n.__vd_id;
  return o == null && (o = String(MC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(yh)
  };
}
let MC = 0;
const NC = /^\/(.*)\/([a-z]*)$/;
function Ch(e, t) {
  const n = t.matched.length && Bn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Bn(o, e.record))), e.children.forEach((o) => Ch(o, t));
}
function bh(e) {
  e.__vd_match = !1, e.children.forEach(bh);
}
function ic(e, t) {
  const n = String(e.re).match(NC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => ic(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ms(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ic(i, t));
}
function UC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function IC(e) {
  const t = Zy(e.routes, e), n = e.parseQuery || _C, o = e.stringifyQuery || ad, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = qo(), i = qo(), c = qo(), d = _y(fn);
  let g = fn;
  cn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = er.bind(null, (v) => "" + v), l = er.bind(null, wC), u = (
    // @ts-expect-error: intentionally avoid the type check
    er.bind(null, Ms)
  );
  function p(v, L) {
    let A, D;
    return ch(v) ? (A = t.getRecordMatcher(v), D = L) : D = v, t.addRoute(D, A);
  }
  function m(v) {
    const L = t.getRecordMatcher(v);
    L ? t.removeRoute(L) : {}.NODE_ENV !== "production" && j(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function _(v, L) {
    if (L = G({}, L || d.value), typeof v == "string") {
      const R = tr(n, v, L.path), ee = t.resolve({ path: R.path }, L), dt = s.createHref(R.fullPath);
      return {}.NODE_ENV !== "production" && (dt.startsWith("//") ? j(`Location "${v}" resolved to "${dt}". A resolved location cannot start with multiple slashes.`) : ee.matched.length || j(`No match found for location with path "${v}"`)), G(R, ee, {
        params: u(ee.params),
        hash: Ms(R.hash),
        redirectedFrom: void 0,
        href: dt
      });
    }
    let A;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && j(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = G({}, v, {
        path: tr(n, v.path, L.path).path
      });
    else {
      const R = G({}, v.params);
      for (const ee in R)
        R[ee] == null && delete R[ee];
      A = G({}, v, {
        params: l(R)
      }), L.params = l(L.params);
    }
    const D = t.resolve(A, L), H = v.hash || "";
    ({}).NODE_ENV !== "production" && H && !H.startsWith("#") && j(`A \`hash\` should always start with the character "#". Replace "${H}" with "#${H}".`), D.params = r(u(D.params));
    const le = ky(o, G({}, v, {
      hash: mC(H),
      path: D.path
    })), z = s.createHref(le);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? j(`Location "${v}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : D.matched.length || j(`No match found for location with path "${"path" in v ? v.path : v}"`)), G({
      fullPath: le,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: H,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === ad ? vC(v.query) : v.query || {}
      )
    }, D, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function w(v) {
    return typeof v == "string" ? tr(n, v, d.value.path) : G({}, v);
  }
  function S(v, L) {
    if (g !== v)
      return To(8, {
        from: L,
        to: v
      });
  }
  function y(v) {
    return T(v);
  }
  function k(v) {
    return y(G(w(v), { replace: !0 }));
  }
  function x(v) {
    const L = v.matched[v.matched.length - 1];
    if (L && L.redirect) {
      const { redirect: A } = L;
      let D = typeof A == "function" ? A(v) : A;
      if (typeof D == "string" && (D = D.includes("?") || D.includes("#") ? D = w(D) : (
        // force empty params
        { path: D }
      ), D.params = {}), {}.NODE_ENV !== "production" && !("path" in D) && !("name" in D))
        throw j(`Invalid redirect found:
${JSON.stringify(D, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return G({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in D ? {} : v.params
      }, D);
    }
  }
  function T(v, L) {
    const A = g = _(v), D = d.value, H = v.state, le = v.force, z = v.replace === !0, R = x(A);
    if (R)
      return T(
        G(w(R), {
          state: typeof R == "object" ? G({}, H, R.state) : H,
          force: le,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        L || A
      );
    const ee = A;
    ee.redirectedFrom = L;
    let dt;
    return !le && Ku(o, D, A) && (dt = To(16, { to: ee, from: D }), ut(
      D,
      D,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (dt ? Promise.resolve(dt) : N(ee, D)).catch((xe) => Gt(xe) ? (
      // navigation redirects still mark the router as ready
      Gt(
        xe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? xe : Et(xe)
    ) : (
      // reject any unknown error
      te(xe, ee, D)
    )).then((xe) => {
      if (xe) {
        if (Gt(
          xe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Ku(o, _(xe.to), ee) && // and we have done it a couple of times
          L && // @ts-expect-error: added only in dev
          (L._count = L._count ? (
            // @ts-expect-error
            L._count + 1
          ) : 1) > 30 ? (j(`Detected a possibly infinite redirection in a navigation guard when going from "${D.fullPath}" to "${ee.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : T(
            // keep options
            G({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, w(xe.to), {
              state: typeof xe.to == "object" ? G({}, H, xe.to.state) : H,
              force: le
            }),
            // preserve the original redirectedFrom if any
            L || ee
          );
      } else
        xe = X(ee, D, !0, z, H);
      return M(ee, D, xe), xe;
    });
  }
  function V(v, L) {
    const A = S(v, L);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function F(v) {
    const L = Ie.values().next().value;
    return L && typeof L.runWithContext == "function" ? L.runWithContext(v) : v();
  }
  function N(v, L) {
    let A;
    const [D, H, le] = RC(v, L);
    A = nr(D.reverse(), "beforeRouteLeave", v, L);
    for (const R of D)
      R.leaveGuards.forEach((ee) => {
        A.push(Dn(ee, v, L));
      });
    const z = V.bind(null, v, L);
    return A.push(z), Ee(A).then(() => {
      A = [];
      for (const R of a.list())
        A.push(Dn(R, v, L));
      return A.push(z), Ee(A);
    }).then(() => {
      A = nr(H, "beforeRouteUpdate", v, L);
      for (const R of H)
        R.updateGuards.forEach((ee) => {
          A.push(Dn(ee, v, L));
        });
      return A.push(z), Ee(A);
    }).then(() => {
      A = [];
      for (const R of le)
        if (R.beforeEnter)
          if (Ke(R.beforeEnter))
            for (const ee of R.beforeEnter)
              A.push(Dn(ee, v, L));
          else
            A.push(Dn(R.beforeEnter, v, L));
      return A.push(z), Ee(A);
    }).then(() => (v.matched.forEach((R) => R.enterCallbacks = {}), A = nr(le, "beforeRouteEnter", v, L), A.push(z), Ee(A))).then(() => {
      A = [];
      for (const R of i.list())
        A.push(Dn(R, v, L));
      return A.push(z), Ee(A);
    }).catch((R) => Gt(
      R,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? R : Promise.reject(R));
  }
  function M(v, L, A) {
    c.list().forEach((D) => F(() => D(v, L, A)));
  }
  function X(v, L, A, D, H) {
    const le = S(v, L);
    if (le)
      return le;
    const z = L === fn, R = cn ? history.state : {};
    A && (D || z ? s.replace(v.fullPath, G({
      scroll: z && R && R.scroll
    }, H)) : s.push(v.fullPath, H)), d.value = v, ut(v, L, A, z), Et();
  }
  let W;
  function re() {
    W || (W = s.listen((v, L, A) => {
      if (!we.listening)
        return;
      const D = _(v), H = x(D);
      if (H) {
        T(G(H, { replace: !0 }), D).catch(Ts);
        return;
      }
      g = D;
      const le = d.value;
      cn && Ty(Ju(le.fullPath, A.delta), xi()), N(D, le).catch((z) => Gt(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : Gt(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (T(
        z.to,
        D
        // avoid an uncaught rejection, let push call triggerError
      ).then((R) => {
        Gt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === Fs.pop && s.go(-1, !1);
      }).catch(Ts), Promise.reject()) : (A.delta && s.go(-A.delta, !1), te(z, D, le))).then((z) => {
        z = z || X(
          // after navigation, all matched components are resolved
          D,
          le,
          !1
        ), z && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Gt(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-A.delta, !1) : A.type === Fs.pop && Gt(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), M(D, le, z);
      }).catch(Ts);
    }));
  }
  let O = qo(), Z = qo(), Ve;
  function te(v, L, A) {
    Et(v);
    const D = Z.list();
    return D.length ? D.forEach((H) => H(v, L, A)) : ({}.NODE_ENV !== "production" && j("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function mn() {
    return Ve && d.value !== fn ? Promise.resolve() : new Promise((v, L) => {
      O.add([v, L]);
    });
  }
  function Et(v) {
    return Ve || (Ve = !v, re(), O.list().forEach(([L, A]) => v ? A(v) : L()), O.reset()), v;
  }
  function ut(v, L, A, D) {
    const { scrollBehavior: H } = e;
    if (!cn || !H)
      return Promise.resolve();
    const le = !A && By(Ju(v.fullPath, 0)) || (D || !A) && history.state && history.state.scroll || null;
    return Sy().then(() => H(v, L, le)).then((z) => z && Dy(z)).catch((z) => te(z, v, L));
  }
  const Q = (v) => s.go(v);
  let jt;
  const Ie = /* @__PURE__ */ new Set(), we = {
    currentRoute: d,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: _,
    options: e,
    push: y,
    replace: k,
    go: Q,
    back: () => Q(-1),
    forward: () => Q(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: Z.add,
    isReady: mn,
    install(v) {
      const L = this;
      v.component("RouterLink", kC), v.component("RouterView", EC), v.config.globalProperties.$router = L, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ds(d)
      }), cn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !jt && d.value === fn && (jt = !0, y(s.location).catch((H) => {
        ({}).NODE_ENV !== "production" && j("Unexpected error when starting the router:", H);
      }));
      const A = {};
      for (const H in fn)
        Object.defineProperty(A, H, {
          get: () => d.value[H],
          enumerable: !0
        });
      v.provide($i, L), v.provide(fh, vy(A)), v.provide(ac, d);
      const D = v.unmount;
      Ie.add(v), v.unmount = function() {
        Ie.delete(v), Ie.size < 1 && (g = fn, W && W(), W = null, d.value = fn, jt = !1, Ve = !1), D();
      }, {}.NODE_ENV !== "production" && cn && DC(v, L, t);
    }
  };
  function Ee(v) {
    return v.reduce((L, A) => L.then(() => F(A)), Promise.resolve());
  }
  return we;
}
function RC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((g) => Bn(g, c)) ? o.push(c) : n.push(c));
    const d = e.matched[i];
    d && (t.matched.find((g) => Bn(g, d)) || s.push(d));
  }
  return [n, o, s];
}
function ke() {
  return Do($i);
}
const zC = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', OC = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', jC = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', HC = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', qC = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', GC = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', XC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', WC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', KC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', YC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', JC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', ZC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', QC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', eb = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', tb = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', nb = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', ob = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', sb = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', kh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', ab = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', ib = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', rb = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', lb = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', cb = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', ub = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', db = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', gb = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', pb = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', mb = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', hb = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', fb = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', wb = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20H4a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v13a2 2 0 01-2 2m-6.5-3.5.41-1.09L8 15l-1.09-.41-.41-1.09-.41 1.09L5 15l1.09.41zm2.982-.949.952-2.561 2.53-.964-2.53-.964L9.482 8.5l-.952 2.562-2.53.964 2.53.964zM6 10.5l.547-1.453L8 8.5l-1.453-.547L6 6.5l-.547 1.453L4 8.5l1.453.547z"/>', _b = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', vb = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', rc = zC, xh = OC, $h = {
  ltr: jC,
  shouldFlip: !0
}, Vh = {
  ltr: HC,
  shouldFlip: !0
}, Ns = {
  ltr: qC,
  shouldFlip: !0
}, Sb = GC, Eh = XC, Lh = WC, Ah = KC, yb = YC, Cb = JC, No = ZC, Bc = QC, Pc = eb, dd = tb, bb = nb, kb = {
  ltr: ob,
  shouldFlip: !0
}, Dh = sb, xb = {
  langCodeMap: {
    ar: kh
  },
  default: ab
}, $b = {
  langCodeMap: {
    ar: kh
  },
  default: ib
}, Th = rb, Fc = {
  ltr: lb,
  shouldFlip: !0
}, Vb = cb, Ws = {
  ltr: ub,
  shouldFlip: !0
}, Mc = {
  ltr: db,
  shouldFlip: !0
}, Eb = {
  ltr: gb,
  shouldFlip: !0
}, Bh = pb, Lb = mb, Ab = hb, Db = fb, Ph = {
  ltr: wb,
  shouldFlip: !0
}, Tb = _b, Fh = vb;
const or = window.Vue.unref, Bb = window.Vue.resolveDirective, so = window.Vue.createElementVNode, ha = window.Vue.withDirectives, Pb = window.Vue.withCtx, Fb = window.Vue.openBlock, Mb = window.Vue.createBlock, Nb = { class: "complementary" }, Ub = { class: "complementary mt-4" }, Ib = { class: "complementary" }, Rb = ["href"], zb = window.Codex.CdxMessage, Ob = "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation", jb = {
  __name: "CXDashboardBanner",
  setup(e) {
    const t = hc("Special:ContentTranslation", {
      "cx-dashboard": "desktop"
    });
    return (n, o) => {
      const s = Bb("i18n");
      return Fb(), Mb(or(zb), {
        icon: or(Ph),
        class: "cx-dashboard-banner pa-4",
        "allow-user-dismiss": !0
      }, {
        default: Pb(() => [
          ha(so("h5", null, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-title"]
          ]),
          ha(so("p", Nb, null, 512), [
            [s, void 0, "cx-sx-dashboard-banner-description"]
          ]),
          so("p", Ub, [
            ha(so("a", {
              target: "_blank",
              href: Ob
            }, null, 512), [
              [s, void 0, "cx-sx-dashboard-banner-learn-more"]
            ])
          ]),
          so("p", Ib, [
            ha(so("a", { href: or(t) }, null, 8, Rb), [
              [s, void 0, "cx-sx-dashboard-banner-access-previous"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["icon"]);
    };
  }
}, Hb = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, i)), g = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, qb = (e) => {
  const t = Hb(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const gt = window.Vue.unref, ao = window.Vue.createVNode, Xt = window.Vue.createElementVNode, gd = window.Vue.renderSlot, pd = window.Vue.withModifiers, sr = window.Vue.toDisplayString, ar = window.Vue.withCtx, Gb = window.Vue.openBlock, Xb = window.Vue.createElementBlock, Wb = window.Vue.createCommentVNode, Kb = { class: "col shrink pe-4" }, Yb = { class: "col" }, Jb = { class: "cx-translation__details column justify-between ma-0" }, Zb = { class: "row ma-0" }, Qb = { class: "col grow" }, ek = { class: "col shrink ps-2" }, tk = ["dir", "textContent"], nk = ["dir", "textContent"], ok = ["textContent"], sk = window.Vuex.useStore, ak = window.Vue.computed, Mh = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: fi,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = sk(), s = (c, d) => {
      const g = o.getters["mediawiki/getPage"](c, d);
      return g == null ? void 0 : g.thumbnail;
    }, a = pe(), i = ak(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, d = qb(n.translation.startTimestamp);
      return a.i18n(
        c[d.postfix],
        d.value
      );
    });
    return (c, d) => e.translation ? (Gb(), Xb("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: d[1] || (d[1] = pd((g) => c.$emit("click"), ["stop"]))
    }, [
      Xt("div", Kb, [
        ao(gt(mc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      Xt("div", Yb, [
        Xt("div", Jb, [
          Xt("div", Zb, [
            Xt("div", Qb, [
              gd(c.$slots, "title")
            ]),
            Xt("div", ek, [
              ao(gt(Pe), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: d[0] || (d[0] = pd((g) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          gd(c.$slots, "mid-content"),
          ao(gt(P), { class: "cx-translation__footer ma-0" }, {
            default: ar(() => [
              ao(gt(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: ar(() => [
                  Xt("span", {
                    class: "mw-ui-autonym",
                    dir: gt(I.getDir)(e.translation.sourceLanguage),
                    textContent: sr(gt(I.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, tk),
                  ao(gt(Pe), {
                    icon: gt(e0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  Xt("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: gt(I.getDir)(e.translation.targetLanguage),
                    textContent: sr(gt(I.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, nk)
                ]),
                _: 1
              }),
              ao(gt(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: ar(() => [
                  Xt("span", {
                    textContent: sr(i.value)
                  }, null, 8, ok)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Wb("", !0);
  }
};
const Xo = window.Vue.unref, md = window.Vue.toDisplayString, ik = window.Vue.normalizeClass, rk = window.Vue.createElementVNode, ir = window.Vue.openBlock, lk = window.Vue.createElementBlock, hd = window.Vue.createCommentVNode, fd = window.Vue.createVNode, fa = window.Vue.withCtx, wd = window.Vue.createBlock, ck = ["lang", "textContent"], uk = ["lang", "textContent"], dk = window.Vue.computed, gk = window.Vue.inject, pk = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: fc,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = gk("colors").gray200, s = dk(
      () => {
        var d;
        return ((d = t.translation.progress) == null ? void 0 : d.any) * 100 || 0;
      }
    ), a = ke(), { setTranslationURLParams: i } = B(), c = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (d, g) => (ir(), wd(Mh, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Xo(vm),
      onActionIconClicked: g[0] || (g[0] = (r) => d.$emit("delete-translation")),
      onClick: c
    }, {
      title: fa(() => [
        rk("h5", {
          class: ik(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: md(e.translation.sourceTitle)
        }, null, 10, ck),
        e.translation.isLeadSectionTranslation ? hd("", !0) : (ir(), lk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: md(e.translation.sourceSectionTitle)
        }, null, 8, uk))
      ]),
      "mid-content": fa(() => [
        e.translation.progress ? (ir(), wd(Xo(P), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: fa(() => [
            fd(Xo(b), null, {
              default: fa(() => [
                fd(Xo(bm), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Xo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : hd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, mk = window.Vuex.useStore, Nh = [], hk = (e, t, n) => Nh.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), fk = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Nh.push(o);
}, wk = () => {
  const e = mk();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !hk(t, n, o) && (s = yield ie.fetchSectionSuggestion(
      t,
      o,
      n
    ), fk(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Uh = "cx-translation-session-position-", Ih = () => Uh + mw.user.sessionId(), Rh = () => {
  const e = Ih();
  let t = mw.storage.get(e);
  return t == null && (t = 0), parseInt(t);
}, _k = function() {
  const e = Rh();
  Object.keys(mw.storage.store).filter((n) => n.startsWith(Uh)).forEach((n) => mw.storage.remove(n));
  const t = Ih();
  mw.storage.set(t, e + 1);
};
let lc = null;
function vk(e) {
  if (lc)
    return Promise.resolve(lc);
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
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), c = Rh(), d = {
    $schema: "/analytics/mediawiki/content_translation_event/1.8.0",
    wiki_db: n,
    user_name: i,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: c
  };
  let g;
  return a ? g = Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, d, e))
  ) : g = vk(i).then((r) => {
    lc = r, mw.eventLog.submit(
      s,
      Object.assign({}, d, e, {
        user_global_edit_count: r,
        user_global_edit_count_bucket: Sk(r)
      })
    );
  }), g.then(() => {
    _k();
  });
}
const Ye = () => (e) => (e.access_method || (e.access_method = un ? "desktop" : "mobile web"), yk(e)), zh = window.Vue.ref, Oh = zh(null), cc = zh(null), Ck = (e) => {
  Oh.value = e;
}, bk = (e) => {
  cc.value = e;
}, jh = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = Ye();
  return {
    logDashboardTranslationStartEvent: () => {
      const i = {
        event_type: "dashboard_translation_start",
        event_source: Oh.value,
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
      return cc.value && (i.event_context = cc.value), o.value ? (i.translation_source_section = o.value, i.translation_type = "section") : i.translation_type = "article", s(i);
    },
    setStartTranslationEventSource: Ck,
    setStartTranslationEventContext: bk
  };
}, kk = window.Vuex.useStore, Ks = () => {
  kk();
  const e = ke(), t = Ym(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = jh();
  return (a, i, c, d, g = null, r = !0) => C(void 0, null, function* () {
    const l = yield t(
      i,
      c,
      a
    );
    l && (n(l), o(d), s(g), r && e.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const wa = window.Vue.withModifiers, rr = window.Vue.toDisplayString, lr = window.Vue.createElementVNode, et = window.Vue.unref, _a = window.Vue.openBlock, _d = window.Vue.createBlock;
window.Vue.createCommentVNode;
const wn = window.Vue.createVNode, Mn = window.Vue.withCtx, vd = window.Vue.createElementBlock, xk = ["lang", "href", "textContent"], $k = {
  key: 1,
  class: "flex"
}, Vk = { key: 2 }, Sd = window.Vue.computed, yd = window.Vue.ref, cr = window.Codex.CdxButton, ur = window.Codex.CdxIcon, Ek = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Dc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = yd(!0), o = yd(null), s = Sd(() => {
      var h;
      return (h = o.value) == null ? void 0 : h.missingSections;
    }), a = Sd(
      () => s.value && Object.keys(s.value)[0]
    );
    wk()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((h) => o.value = h).catch((h) => console.log(h)).finally(() => n.value = !1), ke();
    const {
      setTranslationURLParams: c,
      setSectionURLParam: d,
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: r
    } = B(), l = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Ks(), p = gS(), m = (h) => {
      p(t.translation), u(
        t.translation.sourceTitle,
        g.value,
        r.value,
        "continue_published"
      ), h && d(h);
    };
    return (h, f) => (_a(), _d(Mh, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: l
    }, {
      title: Mn(() => [
        lr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: f[0] || (f[0] = wa(() => {
          }, ["stop"])),
          textContent: rr(e.translation.sourceTitle)
        }, null, 8, xk)
      ]),
      "mid-content": Mn(() => [
        wn(et(P), { class: "ma-0" }, {
          default: Mn(() => [
            wn(et(b), null, {
              default: Mn(() => [
                n.value ? (_a(), _d(et(Xe), { key: 0 })) : s.value ? (_a(), vd("div", $k, [
                  wn(et(cr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[1] || (f[1] = wa((_) => m(a.value), ["stop"]))
                  }, {
                    default: Mn(() => [
                      wn(et(ur), {
                        class: "me-1",
                        icon: et(rc)
                      }, null, 8, ["icon"]),
                      lr("span", null, rr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  wn(et(cr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": h.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: f[2] || (f[2] = wa((_) => m(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      wn(et(ur), { icon: et(Pc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (_a(), vd("div", Vk, [
                  wn(et(cr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f[3] || (f[3] = wa((_) => m(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      wn(et(ur), {
                        class: "me-1",
                        icon: et(rc)
                      }, null, 8, ["icon"]),
                      lr("span", null, rr(h.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Lk = window.Vuex.useStore, Ak = () => {
  const { commit: e } = Lk(), t = Ye();
  return (n) => C(void 0, null, function* () {
    n.sectionTranslationId ? (yield lt.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    ) : (yield lt.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId), t({
      event_type: "dashboard_translation_discard",
      translation_id: n.sectionTranslationId,
      translation_source_language: n.sourceLanguage,
      translation_source_title: n.sourceTitle,
      translation_source_section: n.sourceSectionTitle,
      translation_target_language: n.targetLanguage,
      translation_target_title: n.targetTitle,
      translation_target_section: n.targetSectionTitle
    });
  });
};
const Dk = window.Vue.resolveDirective, dr = window.Vue.createElementVNode, Tk = window.Vue.withDirectives, gr = window.Vue.unref, Cd = window.Vue.createVNode, bd = window.Vue.withCtx, Bk = window.Vue.openBlock, Pk = window.Vue.createBlock, Fk = { class: "pa-4" }, Mk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Nk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: fi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Ak(), i = () => {
      a(n.translation), s();
    };
    return (c, d) => {
      const g = Dk("i18n");
      return Bk(), Pk(gr(ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: bd(() => [
          dr("div", Mk, [
            Cd(gr(Te), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Cd(gr(Te), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: i
            }, null, 8, ["label"])
          ])
        ]),
        default: bd(() => [
          dr("div", Fk, [
            Tk(dr("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Uk(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Ik(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function kd(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(I.sortByAutonym) : (yield Uk(e, t, n)).sort(I.sortByAutonym);
  });
}
function Ik(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Rk() {
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
const Ok = window.Vue.computed;
function jk(e, t) {
  const n = Ok(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = I.getAutonym(t.value[s]);
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
const pr = window.Vue.ref, xd = window.Vue.watch, Hk = window.Vue.computed;
function qk(e, t, n) {
  const o = pr(""), s = pr(-1), a = pr(null), i = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = Hk(
    () => e.value ? t.value : [...n, ...t.value]
  ), d = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return xd(e, () => {
    s.value = -1;
  }), xd(s, () => C(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: i, prev: d, langSelectorContainer: a, selectedLanguage: o };
}
function Nc(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, c = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const va = window.Vue.renderSlot, Se = window.Vue.unref, Gk = window.Vue.isRef, $d = window.Vue.createVNode, Wo = window.Vue.withModifiers, Ko = window.Vue.withKeys, _n = window.Vue.createElementVNode, Xk = window.Vue.resolveDirective, Sa = window.Vue.withDirectives, mr = window.Vue.renderList, hr = window.Vue.Fragment, Wt = window.Vue.openBlock, Kt = window.Vue.createElementBlock, Vd = window.Vue.toDisplayString, ya = window.Vue.normalizeClass, fr = window.Vue.createCommentVNode, Wk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Kk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Yk = { class: "results px-3 pt-4" }, Jk = { class: "results-header ps-8 pb-2" }, Zk = { class: "results-languages--suggestions pa-0 ma-0" }, Qk = ["lang", "dir", "aria-selected", "onClick", "textContent"], ex = { class: "results px-3 pt-4" }, tx = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, nx = ["lang", "dir", "aria-selected", "onClick", "textContent"], ox = ["aria-selected"], sx = { class: "no-results px-3 py-4" }, ax = { class: "ps-8" }, wr = window.Vue.ref, ix = window.Vue.watch, rx = window.Vue.onMounted, Ed = window.Vue.computed, Hh = {
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
      default: Rk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = wr(null), a = wr(""), i = wr([]), c = Ed(
      () => zk(i.value)
    ), d = Ed(() => {
      const S = i.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), g = (S) => o("select", S), r = () => o("close"), { autocompletion: l, onTabSelect: u } = jk(
      a,
      i
    ), { next: p, prev: m, langSelectorContainer: h, selectedLanguage: f } = qk(a, i, n.suggestions), _ = () => {
      if (a.value && n.languages.includes(a.value)) {
        g(a.value);
        return;
      }
      if (f.value) {
        g(f.value);
        return;
      }
      if (i.value.length === 1) {
        g(i.value[0]);
        return;
      }
    };
    return ix(a, Nc(() => C(this, null, function* () {
      i.value = yield kd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), rx(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), i.value = yield kd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, y) => {
      const k = Xk("i18n");
      return Wt(), Kt("div", {
        ref_key: "langSelectorContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        va(S.$slots, "search", {}, () => [
          _n("div", Wk, [
            $d(Se(Yl), {
              value: Se(l),
              "onUpdate:value": y[0] || (y[0] = (x) => Gk(l) ? l.value = x : null),
              icon: Se(cu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            $d(Se(Yl), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (x) => a.value = x),
              class: "mw-ui-language-selector__search pa-4",
              icon: Se(cu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Ko(Wo(_, ["prevent"]), ["enter"]),
                Ko(Wo(Se(p), ["stop", "prevent"]), ["down"]),
                Ko(Wo(Se(m), ["stop", "prevent"]), ["up"]),
                Ko(Wo(r, ["prevent"]), ["esc"]),
                Ko(Wo(Se(u), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        _n("section", Kk, [
          e.suggestions.length && !a.value ? va(S.$slots, "suggestions", { key: 0 }, () => [
            _n("section", Yk, [
              Sa(_n("p", Jk, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              _n("ul", Zk, [
                (Wt(!0), Kt(hr, null, mr(e.suggestions, (x) => (Wt(), Kt("li", {
                  key: x,
                  class: ya(["language ma-0", x === Se(f) ? "language--selected" : ""]),
                  lang: x,
                  dir: Se(I.getDir)(x),
                  "aria-selected": x === Se(f) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (T) => g(x),
                  textContent: Vd(Se(I.getAutonym)(x))
                }, null, 10, Qk))), 128))
              ])
            ])
          ]) : fr("", !0),
          c.value.length ? va(S.$slots, "search", { key: 1 }, () => [
            _n("section", ex, [
              e.suggestions.length && !a.value ? Sa((Wt(), Kt("p", tx, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : fr("", !0),
              (Wt(!0), Kt(hr, null, mr(c.value, (x, T) => (Wt(), Kt("ul", {
                key: T,
                class: ya(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (Wt(!0), Kt(hr, null, mr(x, (V) => (Wt(), Kt("li", {
                  key: V,
                  class: ya(["language ma-0", V === Se(f) ? "language--selected" : ""]),
                  lang: V,
                  dir: Se(I.getDir)(V),
                  role: "option",
                  "aria-selected": V === Se(f) || null,
                  tabindex: "-1",
                  onClick: (F) => g(V),
                  textContent: Vd(Se(I.getAutonym)(V))
                }, null, 10, nx))), 128)),
                e.allOptionEnabled && !a.value ? Sa((Wt(), Kt("li", {
                  key: 0,
                  class: ya(["language ma-0", Se(f) === "all" ? "language--selected" : ""]),
                  role: "option",
                  "aria-selected": Se(f) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (V) => g("all"))
                }, null, 10, ox)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : fr("", !0)
              ], 2))), 128))
            ])
          ]) : va(S.$slots, "noresults", { key: 2 }, () => [
            _n("section", sx, [
              Sa(_n("h3", ax, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const lx = window.Vue.resolveDirective, Ld = window.Vue.withDirectives, Yo = window.Vue.openBlock, Jo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ye = window.Vue.unref, Ad = window.Vue.toDisplayString, pt = window.Vue.createVNode, Dd = window.Vue.withModifiers, Nn = window.Vue.withCtx, cx = window.Vue.normalizeClass, ux = {
  key: 0,
  class: "mw-ui-autonym"
}, dx = ["lang", "dir", "textContent"], gx = {
  key: 0,
  class: "mw-ui-autonym"
}, px = ["lang", "dir", "textContent"], Zo = window.Vue.computed, mx = window.Vue.inject, hx = window.Vue.ref, Td = window.Codex.CdxButton, _r = window.Codex.CdxIcon, gi = {
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
    const n = e, o = t, s = mx("breakpoints"), a = Zo(() => s.value.mobile), i = hx(null), c = Zo(() => !!i.value), d = () => i.value = "source", g = () => i.value = "target", r = () => i.value = null, l = Zo(() => {
      if (!c.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[f];
    }), u = (h) => {
      const _ = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(_, h);
    }, p = Zo(
      () => n.selectedSourceLanguage === "all"
    ), m = Zo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const _ = lx("i18n");
      return Yo(), Jo("div", {
        class: cx(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        pt(ye(P), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Nn(() => [
            pt(ye(b), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Nn(() => [
                pt(ye(Td), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Dd(d, ["stop"])
                }, {
                  default: Nn(() => [
                    p.value ? Ld((Yo(), Jo("span", ux, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Yo(), Jo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: ye(I.getDir)(e.selectedSourceLanguage),
                      textContent: Ad(ye(I.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, dx)),
                    pt(ye(_r), {
                      size: "x-small",
                      icon: ye(dd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            pt(ye(b), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Nn(() => [
                pt(ye(_r), { icon: ye($h) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            pt(ye(b), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Nn(() => [
                pt(ye(Td), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Dd(g, ["stop"])
                }, {
                  default: Nn(() => [
                    m.value ? Ld((Yo(), Jo("span", gx, null, 512)), [
                      [_, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Yo(), Jo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: ye(I.getDir)(e.selectedTargetLanguage),
                      textContent: Ad(ye(I.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, px)),
                    pt(ye(_r), {
                      size: "x-small",
                      icon: ye(dd)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            }, 8, ["cols"])
          ]),
          _: 1
        }),
        pt(ye(ct), {
          value: c.value,
          "onUpdate:value": f[0] || (f[0] = (w) => c.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: r
        }, {
          default: Nn(() => [
            pt(ye(Hh), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: l.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: u,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const Bd = window.Vue.unref, fx = window.Vue.createVNode, Ca = window.Vue.createElementVNode, Pd = window.Vue.toDisplayString, wx = window.Vue.openBlock, _x = window.Vue.createElementBlock, vx = { class: "cx-list-empty-placeholder pa-4" }, Sx = { class: "cx-list-empty-placeholder__icon-container" }, yx = { class: "cx-list-empty-placeholder__icon" }, Cx = ["textContent"], bx = ["textContent"], kx = window.Codex.CdxIcon, qh = {
  __name: "CXListEmptyPlaceholder",
  props: {
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (wx(), _x("div", vx, [
      Ca("div", Sx, [
        Ca("div", yx, [
          fx(Bd(kx), { icon: Bd(Th) }, null, 8, ["icon"])
        ])
      ]),
      Ca("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Pd(e.title)
      }, null, 8, Cx),
      Ca("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Pd(e.description)
      }, null, 8, bx)
    ]));
  }
};
const xx = window.Vue.toDisplayString, vr = window.Vue.normalizeClass, Fd = window.Vue.createElementVNode, Lt = window.Vue.openBlock, io = window.Vue.createBlock, ba = window.Vue.createCommentVNode, Md = window.Vue.unref, Nd = window.Vue.renderList, Ud = window.Vue.Fragment, ka = window.Vue.createElementBlock, $x = window.Vue.createVNode, Id = window.Vue.withCtx, Vx = ["textContent"], Ex = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Lx = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, xa = window.Vue.ref, mt = window.Vue.computed, Ax = window.Vue.inject, Dx = window.Vuex.useStore, Rd = {
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
    const t = e, n = xa("all"), o = xa("all"), s = Dx(), a = mt(
      () => s.state.translator.translationsLoaded[t.translationStatus]
    ), { enabledTargetLanguages: i } = Po(), c = xa(!1), d = xa(null), g = mt(
      () => t.translationStatus === "draft"
    ), r = mt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = mt(
      () => n.value === "all"
    ), u = mt(
      () => o.value === "all"
    ), p = mt(
      () => r.value.filter(
        (k) => (l.value || k.sourceLanguage === n.value) && (u.value || k.targetLanguage === o.value)
      ).sort((k, x) => k.lastUpdatedTimestamp < x.lastUpdatedTimestamp)
    ), m = mt(() => {
      let k = r.value.map(
        (x) => x.targetLanguage
      );
      return i.value && (k = k.filter(
        (x) => i.value.includes(x)
      )), [...new Set(k)];
    }), h = mt(() => {
      const k = r.value.map(
        (x) => x.sourceLanguage
      );
      return [...new Set(k)];
    }), f = (k) => {
      d.value = k, c.value = !0;
    }, _ = mt(() => t.activeStatus === t.translationStatus), w = Ax("breakpoints"), S = mt(() => w.value.mobile), y = mt(
      () => S.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (k, x) => _.value ? (Lt(), io(Md(Ge), {
      key: 0,
      class: vr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Id(() => [
        Fd("div", {
          class: vr(["cx-translation-list__header", y.value])
        }, [
          Fd("h3", {
            class: vr(["px-4 mw-ui-card__title mb-0", { "pb-4": S.value }]),
            textContent: xx(k.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Vx),
          p.value.length ? (Lt(), io(gi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": x[0] || (x[0] = (T) => n.value = T),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": x[1] || (x[1] = (T) => o.value = T),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ba("", !0)
        ], 2)
      ]),
      default: Id(() => [
        a.value && !p.value.length ? (Lt(), io(qh, {
          key: 0,
          title: k.$i18n("cx-sx-translation-list-empty-title"),
          description: k.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ba("", !0),
        a.value ? ba("", !0) : (Lt(), io(Md(Xe), { key: 1 })),
        g.value ? (Lt(), ka("div", Ex, [
          (Lt(!0), ka(Ud, null, Nd(p.value, (T) => (Lt(), io(pk, {
            key: `${e.translationStatus}-${T.key}`,
            translation: T,
            onDeleteTranslation: (V) => f(T)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Lt(), ka("div", Lx, [
          (Lt(!0), ka(Ud, null, Nd(p.value, (T) => (Lt(), io(Ek, {
            key: `${e.translationStatus}-${T.key}`,
            translation: T,
            onDeleteTranslation: (V) => f(T)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])),
        $x(Nk, {
          modelValue: c.value,
          "onUpdate:modelValue": x[2] || (x[2] = (T) => c.value = T),
          translation: d.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ba("", !0);
  }
}, Tx = window.Vue.computed, Bx = window.Vuex.useStore, Je = () => {
  const e = Bx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B();
  return { sectionSuggestion: Tx(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, Px = window.Vuex.useStore, Fx = window.Vue.computed, Ot = () => {
  const e = Px(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: Fx(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (i) => i.status === "draft" && i.sourceTitle === s.value && i.sectionTitleMatches(o.value) && i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ) };
}, zd = window.Vue.computed, Mx = window.Vuex.useStore, Ze = () => {
  const e = Mx(), { sectionSuggestion: t } = Je(), { currentTranslation: n } = Ot(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = zd(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = zd(() => {
    var g, r;
    const d = ((g = t.value) == null ? void 0 : g.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      d
    );
  });
  return { currentSourcePage: i, currentTargetPage: c };
}, Nx = window.Vue.ref, Ux = window.Vue.watchEffect, Ix = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, a = t.missingSections, c = (yield ie.fetchSuggestionSourceSections(
    n,
    o
  )).sections.filter((d) => d.level === "2").reduce((d, g, r, l) => {
    const u = r < l.length - 1 ? l[r + 1].byteoffset : s;
    return d[g.line] = u - g.byteoffset, d;
  }, {});
  return Object.keys(c).filter((d) => a[d]).reduce((d, g) => d + c[g], 0);
}), Sr = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Rx = (e) => {
  const t = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    Math.round(t * 2) / 2,
    e
  ];
}, zx = (e, t) => {
  const n = e >= 60 ? e / 60 : 0;
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    Math.round(n * 2) / 2,
    e,
    t
  ];
}, Gh = () => {
  const { currentSourcePage: e } = Ze(), { sectionSuggestion: t } = Je(), n = Nx(null);
  return Ux(() => {
    if (t.value)
      Ix(
        e.value,
        t.value
      ).then((o) => {
        n.value = zx(
          Sr(o),
          Object.keys(t.value.missingSections).length
        );
      });
    else if (e.value) {
      const o = Sr(e.value.articleSize);
      n.value = Rx(o);
    }
  }), { translationSizeMessageArgs: n, bytesToMinutes: Sr };
};
const yr = window.Vue.toDisplayString, Cr = window.Vue.openBlock, Od = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const uc = window.Vue.createElementVNode, Ox = window.Vue.unref, jx = window.Vue.withCtx, Hx = window.Vue.createBlock, qx = {
  key: 0,
  class: "cdx-info-chip__text"
}, Gx = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Xx = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Wx = /* @__PURE__ */ uc("span", null, "/", -1), Kx = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, Yx = window.Codex.CdxInfoChip, br = window.Vue.computed, pi = {
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
    const t = e, n = br(() => t.content.lastIndexOf("/")), o = br(() => t.content.slice(0, n.value)), s = br(() => t.content.slice(n.value + 1));
    return (a, i) => (Cr(), Hx(Ox(Yx), {
      icon: e.icon,
      class: "custom-info-chip"
    }, {
      default: jx(() => [
        n.value === -1 ? (Cr(), Od("div", qx, yr(e.content), 1)) : (Cr(), Od("div", Gx, [
          uc("span", Xx, yr(o.value), 1),
          Wx,
          uc("span", Kx, yr(s.value), 1)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ne = window.Vue.unref, ht = window.Vue.createVNode, vn = window.Vue.createElementVNode, $a = window.Vue.toDisplayString, tt = window.Vue.withCtx, Jx = window.Vue.resolveDirective, kr = window.Vue.withDirectives, Un = window.Vue.openBlock, ro = window.Vue.createBlock, lo = window.Vue.createCommentVNode, jd = window.Vue.withModifiers, Zx = window.Vue.createElementBlock, Qx = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, e2 = { class: "col shrink pe-4" }, t2 = ["lang", "dir", "textContent"], n2 = ["lang", "dir", "textContent"], o2 = ["textContent"], s2 = ["textContent"], xr = window.Codex.CdxIcon, ft = window.Vue.computed, a2 = window.Vue.inject, i2 = window.Vuex.useStore, dc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Mo, Tn, Eo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = i2(), { bytesToMinutes: o } = Gh(), s = ft(() => t.suggestion), a = ft(
      () => s.value.sourceTitle || s.value.title
    ), i = ft(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        a.value
      )
    ), c = ft(
      () => {
        var w;
        return (w = s.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), d = ft(() => {
      var w;
      return (w = i.value) == null ? void 0 : w.description;
    }), g = ft(
      () => s.value instanceof Tn
    ), r = ft(
      () => s.value instanceof Eo
    ), { sourceLanguageAutonym: l, targetLanguageAutonym: u } = ue(n), p = ft(
      () => r.value ? Eh : Lh
    ), m = a2("colors"), h = ft(
      () => r.value ? m.blue600 : "currentColor"
    ), f = ft(() => {
      var w;
      return o((w = i.value) == null ? void 0 : w.articleSize) < 15;
    }), _ = ft(
      () => s.value instanceof qm || s.value instanceof Gm
    );
    return (w, S) => {
      const y = Jx("i18n");
      return s.value ? (Un(), Zx("div", Qx, [
        vn("div", e2, [
          ht(ne(mc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: i.value && i.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        ht(ne(P), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: tt(() => [
            ht(ne(P), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: tt(() => [
                ht(ne(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: tt(() => [
                    vn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ne(I.getDir)(s.value.sourceLanguage),
                      textContent: $a(a.value)
                    }, null, 8, t2)
                  ]),
                  _: 1
                }),
                ht(ne(b), { shrink: "" }, {
                  default: tt(() => [
                    vn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ne(I.getDir)(s.value.sourceLanguage),
                      textContent: $a(d.value)
                    }, null, 8, n2)
                  ]),
                  _: 1
                }),
                f.value && !g.value && !_.value ? (Un(), ro(ne(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: tt(() => [
                    kr(vn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : lo("", !0),
                g.value ? (Un(), ro(ne(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: tt(() => [
                    kr(vn("small", null, null, 512), [
                      [y, [c.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : r.value ? (Un(), ro(ne(b), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: tt(() => [
                    ht(ne(P), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: tt(() => [
                        ht(ne(b), { grow: "" }, {
                          default: tt(() => [
                            vn("small", {
                              textContent: $a(ne(l))
                            }, null, 8, o2),
                            ht(ne(xr), {
                              icon: ne($h),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            vn("small", {
                              textContent: $a(ne(u))
                            }, null, 8, s2)
                          ]),
                          _: 1
                        }),
                        c.value ? (Un(), ro(ne(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: tt(() => [
                            kr(vn("small", null, null, 512), [
                              [y, [
                                c.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : lo("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : lo("", !0),
                _.value ? (Un(), ro(ne(b), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: tt(() => [
                    ht(pi, {
                      icon: ne(Ns),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : lo("", !0)
              ]),
              _: 1
            }),
            ht(ne(b), { shrink: "" }, {
              default: tt(() => [
                r.value ? lo("", !0) : (Un(), ro(ne(xr), {
                  key: 0,
                  icon: ne(No),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: S[0] || (S[0] = jd((k) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                ht(ne(xr), {
                  class: "cx-suggestion__favorite-button",
                  icon: p.value,
                  "icon-color": h.value,
                  onClick: S[1] || (S[1] = jd((k) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : lo("", !0);
    };
  }
}, r2 = "suggestion_filter_topic_area", l2 = "suggestion_filter_search_result_seed", c2 = "suggestion_filter_collections", u2 = "suggestion_filter_previous_edits", d2 = "suggestion_filter_popular_articles", Xh = (e) => {
  if (e.type === We)
    return r2;
  if (e.type === rt)
    return l2;
  if (e.id === fe || e.type === fe)
    return c2;
  if (e.id === Vt)
    return u2;
  if (e.id === zt)
    return d2;
}, gc = (e) => {
  if (e.type === We || e.type === fe || e.type === rt)
    return e.id;
  if (e.id === fe)
    return "all-collections";
}, g2 = window.Vue.computed, Hd = window.Vue.ref, qd = window.Vue.watch, Wh = (e, t) => {
  const o = Hd([]), s = Hd(!1), a = g2(
    () => o.value.slice(0, 4)
  ), i = Nc(() => C(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield to.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), c = () => {
    s.value = !0, o.value = [], i();
  };
  return qd(t, c), qd(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
}, $r = window.Vue.ref, Gd = window.Vue.watch, p2 = mw.loader.require("ext.cx.articletopics"), m2 = p2.flatMap((e) => e.topics), h2 = () => {
  const e = $r(""), t = $r(!1), n = $r({ topics: [], areas: [] }), o = pe(), { pageCollections: s } = $c(), { sourceLanguageURLParameter: a } = B(), i = (g) => (g = g.toLowerCase(), m2.filter(
    (r) => r.label.toLowerCase().includes(g)
  )), c = (g) => (g = g.toLowerCase(), s.value.filter(
    (r) => r.name.toLowerCase().includes(g)
  )), { searchResultsSlice: d } = Wh(a, e);
  return Gd(d, () => {
    n.value.topics = d.value.map((g) => {
      var r;
      return {
        label: g.title,
        value: g.title,
        description: g.description,
        thumbnail: {
          url: (r = g.thumbnail) == null ? void 0 : r.source
        }
      };
    });
  }), Gd(e, () => C(void 0, null, function* () {
    t.value = !0, n.value.areas = [
      ...c(e.value).map((g) => ({
        label: g.name,
        value: g.name,
        description: g.description,
        icon: Ns,
        filterType: fe,
        filterId: g.name
      })),
      ...i(e.value).map((g) => ({
        label: g.label,
        value: g.label,
        description: o.i18n(
          "cx-sx-suggestions-filter-search-results-topics-default-description"
        ),
        icon: Ns,
        filterType: We,
        filterId: g.topicId
      }))
    ], t.value = !1;
  })), { searchInput: e, searchLoading: t, searchResults: n };
};
const oe = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.withCtx, f2 = window.Vue.resolveDirective, At = window.Vue.createElementVNode, Qo = window.Vue.withDirectives, Xd = window.Vue.toDisplayString, w2 = window.Vue.createTextVNode, _2 = window.Vue.vShow, v2 = window.Vue.isRef, Wd = window.Vue.renderList, Kd = window.Vue.Fragment, Yt = window.Vue.openBlock, Rn = window.Vue.createElementBlock, S2 = window.Vue.normalizeClass, Yd = window.Vue.createBlock, Jd = window.Vue.createCommentVNode, y2 = { class: "sx-suggestions-filters" }, C2 = { class: "mb-0" }, b2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, k2 = { class: "mb-3" }, x2 = { class: "px-4 pb-4 pt-7" }, $2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, V2 = { class: "sx-suggestions-filters__group-label mb-3" }, E2 = { class: "sx-suggestions-filters__group-filters mb-3" }, L2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, A2 = { key: 0 }, D2 = { key: 1 }, Vr = window.Vue.ref, Zd = window.Vue.computed, T2 = window.Vue.inject, Qd = window.Codex.CdxButton, B2 = window.Codex.CdxIcon, P2 = window.Codex.CdxTextInput, eg = window.Codex.CdxMenu, F2 = {
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
      [Vt]: Fh,
      [zt]: Dh,
      [fe]: Ns,
      [We]: null,
      [rt]: null
    }, { allFilters: s, isFilterSelected: a, selectFilter: i, findSelectedFilter: c } = Vc(), d = Ye(), g = () => {
      m(), n("update:modelValue", !1);
    }, r = () => {
      d({ event_type: "suggestion_filters_close" }), g();
    }, l = () => {
      p.value && (d({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: gc(
          p.value
        )
      }), i(p.value)), g();
    }, u = Vr(!1), p = Vr(null), m = () => {
      p.value = null;
    }, h = (N) => {
      const M = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: Xh(N),
        event_context: gc(N)
      };
      d(M), p.value = N, u.value = !0;
    }, f = (N) => p.value ? p.value.id === N.id && p.value.type === N.type : a(N), _ = T2("breakpoints"), w = Zd(() => _.value.mobile), { getFilterProvider: S } = Ec(), { searchInput: y, searchResults: k } = h2(), x = Zd(
      () => p.value || c()
    ), T = Vr(null), V = (N) => {
      h({
        type: rt,
        id: N.label,
        label: N.label
      }), y.value = "";
    }, F = (N) => {
      h({
        type: N.filterType,
        id: N.filterId,
        label: N.label
      }), y.value = "";
    };
    return (N, M) => {
      const X = f2("i18n");
      return Yt(), Yd(oe(ct), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: w.value,
        header: !1
      }, {
        default: In(() => [
          At("section", y2, [
            wt(oe(P), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: In(() => [
                wt(oe(b), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: In(() => [
                    wt(oe(Qd), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": N.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: r
                    }, {
                      default: In(() => [
                        wt(oe(B2), { icon: oe(No) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                wt(oe(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: In(() => [
                    Qo(At("h5", C2, null, 512), [
                      [X, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                wt(oe(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: In(() => [
                    Qo(wt(oe(Qd), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: l
                    }, {
                      default: In(() => [
                        w2(Xd(N.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [_2, u.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            At("div", b2, [
              Qo(At("h5", k2, null, 512), [
                [X, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              At("div", null, [
                wt(pi, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: x.value.label,
                  icon: o[oe(S)(x.value)]
                }, null, 8, ["content", "icon"])
              ])
            ]),
            At("div", x2, [
              wt(oe(P2), {
                modelValue: oe(y),
                "onUpdate:modelValue": M[0] || (M[0] = (W) => v2(y) ? y.value = W : null),
                placeholder: N.$i18n("cx-sx-suggestions-filter-search-input-placeholder"),
                "input-type": "search",
                "start-icon": oe(Ab),
                clearable: !!oe(y)
              }, null, 8, ["modelValue", "placeholder", "start-icon", "clearable"])
            ]),
            oe(y) ? (Yt(), Rn("div", L2, [
              oe(k).topics.length ? (Yt(), Rn("div", A2, [
                Qo(At("h5", null, null, 512), [
                  [X, void 0, "cx-sx-suggestions-filter-search-results-topics-label"]
                ]),
                wt(oe(eg), {
                  selected: T.value,
                  "onUpdate:selected": M[1] || (M[1] = (W) => T.value = W),
                  expanded: !0,
                  "menu-items": oe(k).topics,
                  "show-thumbnail": "",
                  onMenuItemClick: V
                }, null, 8, ["selected", "menu-items"])
              ])) : Jd("", !0),
              oe(k).areas.length ? (Yt(), Rn("div", D2, [
                Qo(At("h5", null, null, 512), [
                  [X, void 0, "cx-sx-suggestions-filter-search-results-areas-label"]
                ]),
                wt(oe(eg), {
                  selected: T.value,
                  "onUpdate:selected": M[2] || (M[2] = (W) => T.value = W),
                  expanded: !0,
                  "menu-items": oe(k).areas,
                  onMenuItemClick: F
                }, null, 8, ["selected", "menu-items"])
              ])) : Jd("", !0)
            ])) : (Yt(), Rn("div", $2, [
              (Yt(!0), Rn(Kd, null, Wd(oe(s), (W) => (Yt(), Rn("div", {
                key: W.id,
                class: "sx-suggestions-filters__group"
              }, [
                At("div", V2, Xd(W.label), 1),
                At("div", E2, [
                  (Yt(!0), Rn(Kd, null, Wd(W.filters, (re) => (Yt(), Yd(pi, {
                    key: re.id,
                    class: S2(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
                      "sx-suggestions-filters__filter--active": f(re)
                    }]),
                    icon: o[oe(S)(re)],
                    content: re.label,
                    onClick: (O) => h(re)
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
const Er = window.Vue.unref, Va = window.Vue.openBlock, tg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const M2 = window.Vue.renderList, N2 = window.Vue.Fragment, ng = window.Vue.createElementBlock, U2 = window.Vue.normalizeClass, I2 = window.Vue.createVNode, R2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, og = window.Vue.ref, z2 = window.Vue.computed, sg = window.Vue.watch, O2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = pe(), n = Ye(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: i
    } = Vc(), c = og(!1), d = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), c.value = !0;
    }, g = (h) => {
      const f = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: Xh(h),
        event_context: gc(h)
      };
      n(f), s(h);
    }, r = {
      [Vt]: Fh,
      [zt]: Dh,
      [fe]: Ns,
      [We]: null
    }, { getFilterProvider: l } = Ec(), u = (h) => ({
      id: h.id,
      type: h.type,
      icon: r[l(h)],
      label: h.label,
      action: g
    }), p = og(o());
    sg(c, (h) => {
      h || (p.value = o());
    }), sg(i, (h) => {
      h || (p.value = o());
    });
    const m = z2(() => [
      ...p.value.map(u),
      {
        id: "more",
        icon: Pc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: d
      }
    ]);
    return (h, f) => Er(i) ? (Va(), tg(Er(Xe), { key: 0 })) : (Va(), ng("div", R2, [
      (Va(!0), ng(N2, null, M2(m.value, (_) => (Va(), tg(pi, {
        key: _.label,
        class: U2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": Er(a)(_) }]),
        icon: _.icon,
        content: _.label,
        onClick: (w) => _.action(_)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      I2(F2, {
        modelValue: c.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => c.value = _)
      }, null, 8, ["modelValue"])
    ]));
  }
}, j2 = window.Vue.computed, H2 = () => {
  const { supportedLanguageCodes: e, enabledTargetLanguages: t } = Po(), n = j2(() => t.value || e.value);
  return {
    supportedLanguageCodes: e,
    availableTargetLanguages: n
  };
}, co = window.Vue.computed, ag = window.Vue.ref, q2 = window.Vue.watch, G2 = window.Vuex.useStore, X2 = () => {
  const e = G2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = bc(), i = Ye(), c = co(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), d = co(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = ag(0), r = ag(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, u = 4, p = co(
    () => a(g.value)
  ), m = co(
    () => s(r.value)
  ), h = () => {
    k(), F(), x(), N();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: _
  } = Lc(), w = (M) => M.length === l, S = co(
    () => w(m.value)
  ), y = co(
    () => w(p.value)
  ), k = () => {
    const M = (g.value + 1) % u, X = w(
      a(M)
    );
    (!y.value || !X) && f();
  }, x = () => {
    const M = (r.value + 1) % u, X = w(
      s(M)
    );
    (!S.value || !X) && _();
  }, T = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", M), k();
  }, V = (M) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", M), x();
  }, F = () => g.value = (g.value + 1) % u, N = () => r.value = (r.value + 1) % u;
  return q2(
    o,
    () => {
      r.value = 0, x(), g.value = 0, k();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: V,
    discardSectionSuggestion: T,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: d,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: S,
    isCurrentSectionSuggestionsSliceFull: y
  };
}, W2 = window.Vuex.useStore, Uc = () => {
  const e = W2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Lc(), o = (g, r, l) => e.state.suggestions.pageSuggestions.find(
    (u) => u.sourceLanguage === g && u.targetLanguage === r && u.sourceTitle === l
  ), s = (g) => C(void 0, null, function* () {
    const { sourceTitle: r, sourceLanguage: l, targetLanguage: u } = g;
    yield ie.markFavorite(r, l, u);
    const p = new Eo({
      title: r,
      sourceLanguage: l,
      targetLanguage: u
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
    markFavoriteSuggestion: (g, r, l) => C(void 0, null, function* () {
      const u = o(
        r,
        l,
        g
      );
      u && (e.commit(
        "suggestions/removePageSuggestionFromList",
        u
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](r, l, g);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield ie.markFavorite(
        g,
        r,
        l
      );
      const m = new Eo({
        title: g,
        sourceLanguage: r,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), ie.unmarkFavorite(g))
  };
}, K2 = "suggestion_no_seed", Y2 = "suggestion_recent_edit", J2 = "suggestion_topic_area", Z2 = "suggestion_search_result_seed", Q2 = "suggestion_featured", e8 = "suggestion_collections", t8 = () => {
  const { currentSuggestionFilters: e } = B(), { defaultSeedsFetched: t } = xc();
  return () => {
    const { type: n, id: o } = e.value;
    if (o === Vt)
      return t.value ? K2 : Y2;
    if (n === We)
      return J2;
    if (n === rt)
      return Z2;
    if (o === zt)
      return Q2;
    if (o === fe || n === fe)
      return e8;
    throw new Error("Event source cannot be empty");
  };
};
const ig = window.Vue.normalizeClass, n8 = window.Vue.resolveDirective, es = window.Vue.createElementVNode, Ea = window.Vue.withDirectives, ce = window.Vue.unref, Re = window.Vue.openBlock, Dt = window.Vue.createBlock, Sn = window.Vue.createCommentVNode, Lr = window.Vue.createVNode, ts = window.Vue.withCtx, rg = window.Vue.renderList, lg = window.Vue.Fragment, Ar = window.Vue.createElementBlock, o8 = window.Vue.toDisplayString, s8 = window.Vue.createTextVNode, a8 = window.Vue.vShow, i8 = { class: "cx-suggestion-list" }, r8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, l8 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, c8 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Tt = window.Vue.computed, u8 = window.Vue.inject, d8 = window.Vue.ref, g8 = window.Codex.CdxButton, p8 = window.Codex.CdxIcon, m8 = window.Vuex.useStore, h8 = {
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
    } = B(), { supportedLanguageCodes: s, availableTargetLanguages: a } = H2(), i = Jm(), c = (Q) => i(Q, n.value), d = (Q) => i(t.value, Q), g = t8(), r = Ks(), l = (Q) => {
      r(
        Q.sourceTitle,
        Q.sourceLanguage,
        Q.targetLanguage,
        g(),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: u,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: _,
      sectionSuggestionsLoading: w,
      isCurrentPageSuggestionsSliceFull: S,
      isCurrentSectionSuggestionsSliceFull: y
    } = X2(), k = d8(null), x = Ye(), T = () => {
      x({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), k.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: V, markFavoritePageSuggestion: F } = Uc(), N = u8("breakpoints"), M = Tt(() => N.value.mobile), X = Tt(
      () => M.value ? null : "pb-2 flex justify-between items-center"
    ), W = m8(), re = Tt(
      () => W.state.suggestions.isPageSuggestionsFetchPending
    ), O = Tt(
      () => W.state.suggestions.isSectionSuggestionsFetchPending
    ), Z = Tt(
      () => re.value || _.value && !S.value
    ), Ve = Tt(
      () => O.value || w.value && !y.value
    ), te = Tt(
      () => re.value || _.value || u.value.length > 0
    ), mn = Tt(
      () => O.value || w.value || p.value.length > 0
    ), Et = Tt(
      () => !te.value && !mn.value
    ), ut = Tt(
      () => !w.value && !_.value && !re.value && !O.value && !Et.value
    );
    return (Q, jt) => {
      const Ie = n8("i18n");
      return Ea((Re(), Ar("div", i8, [
        Lr(ce(Ge), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: ts(() => [
            es("div", {
              class: ig(["cx-suggestion-list__header-card__header px-4", X.value])
            }, [
              Ea(es("h3", {
                class: ig(["mw-ui-card__title mb-0", { "py-3": M.value }])
              }, null, 2), [
                [Ie, void 0, "cx-suggestionlist-title"]
              ]),
              M.value ? Sn("", !0) : (Re(), Dt(gi, {
                key: 0,
                "source-languages": ce(s),
                "target-languages": ce(a),
                "selected-source-language": ce(t),
                "selected-target-language": ce(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": d
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Lr(O2)
          ]),
          default: ts(() => [
            M.value ? (Re(), Dt(gi, {
              key: 0,
              "source-languages": ce(s),
              "target-languages": ce(a),
              "selected-source-language": ce(t),
              "selected-target-language": ce(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": d
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Sn("", !0)
          ]),
          _: 1
        }),
        te.value ? (Re(), Dt(ce(Ge), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: k,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: ts(() => [
            Ea(es("h5", r8, null, 512), [
              [Ie, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Re(!0), Ar(lg, null, rg(ce(u), (we, Ee) => (Re(), Dt(dc, {
              key: `page-suggestion-${Ee}`,
              suggestion: we,
              onClose: (v) => ce(m)(we),
              onClick: (v) => l(we),
              onBookmark: (v) => ce(F)(we)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Z.value ? (Re(), Dt(ce(Xe), { key: 0 })) : Sn("", !0)
          ]),
          _: 1
        }, 512)) : Sn("", !0),
        mn.value ? (Re(), Dt(ce(Ge), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: ts(() => [
            Ea(es("h5", l8, null, 512), [
              [Ie, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Re(!0), Ar(lg, null, rg(ce(p), (we, Ee) => (Re(), Dt(dc, {
              key: `section-suggestion-${Ee}`,
              class: "ma-0",
              suggestion: we,
              onClose: (v) => ce(h)(we),
              onClick: (v) => l(we),
              onBookmark: (v) => ce(V)(we)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Ve.value ? (Re(), Dt(ce(Xe), { key: 0 })) : Sn("", !0)
          ]),
          _: 1
        })) : Sn("", !0),
        Et.value ? (Re(), Dt(qh, {
          key: 2,
          title: Q.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Q.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : Sn("", !0),
        es("div", c8, [
          ut.value ? (Re(), Dt(ce(g8), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: T
          }, {
            default: ts(() => [
              Lr(ce(p8), {
                class: "me-1",
                icon: ce(Bh)
              }, null, 8, ["icon"]),
              s8(" " + o8(Q.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Sn("", !0)
        ])
      ], 512)), [
        [a8, e.active]
      ]);
    };
  }
}, f8 = window.Vue.resolveDirective, w8 = window.Vue.createElementVNode, _8 = window.Vue.withDirectives, v8 = window.Vue.renderList, S8 = window.Vue.Fragment, Dr = window.Vue.openBlock, y8 = window.Vue.createElementBlock, cg = window.Vue.unref, ug = window.Vue.createBlock, dg = window.Vue.withCtx, C8 = window.Vue.createCommentVNode, b8 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, k8 = window.Vue.computed, x8 = window.Vuex.useStore, $8 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = x8(), n = k8(() => t.state.suggestions.favorites || []), o = Ks(), s = (i) => o(
      i.title,
      i.sourceLanguage,
      i.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Uc();
    return (i, c) => {
      const d = f8("i18n");
      return n.value.length ? (Dr(), ug(cg(Ge), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: dg(() => [
          _8(w8("h3", b8, null, 512), [
            [d, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: dg(() => [
          (Dr(!0), y8(S8, null, v8(n.value, (g, r) => (Dr(), ug(dc, {
            key: `favorite-${r}`,
            suggestion: g,
            onClick: (l) => s(g),
            onBookmark: (l) => cg(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : C8("", !0);
    };
  }
};
const V8 = window.Vue.resolveDirective, ns = window.Vue.createElementVNode, E8 = window.Vue.withDirectives, L8 = window.Vue.renderList, A8 = window.Vue.Fragment, gg = window.Vue.openBlock, pg = window.Vue.createElementBlock, D8 = window.Vue.unref, T8 = window.Vue.createVNode, B8 = window.Vue.toDisplayString, P8 = { class: "cx-help-panel pa-4" }, F8 = { class: "cx-help-panel__item-list mt-6 ps-2" }, M8 = ["href", "target"], N8 = ["textContent"], U8 = window.Codex.CdxIcon, I8 = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = pe(), n = [
      {
        icon: $b,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: Ah,
        label: t.i18n("cx-sx-dashboard-help-panel-stats-label"),
        href: mw.util.getUrl("Special:ContentTranslationStats"),
        target: "_blank"
      },
      {
        icon: kb,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return un && n.push({
      icon: Ph,
      label: t.i18n("cx-sx-dashboard-banner-access-previous"),
      href: hc("Special:ContentTranslation", { "cx-dashboard": "desktop" }),
      target: "_self"
    }), (o, s) => {
      const a = V8("i18n");
      return gg(), pg("div", P8, [
        E8(ns("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        ns("ul", F8, [
          (gg(), pg(A8, null, L8(n, (i, c) => ns("li", {
            key: c,
            class: "mt-4"
          }, [
            ns("a", {
              href: i.href,
              target: i.target
            }, [
              T8(D8(U8), {
                class: "me-2",
                icon: i.icon
              }, null, 8, ["icon"]),
              ns("span", {
                textContent: B8(i.label)
              }, null, 8, N8)
            ], 8, M8)
          ])), 64))
        ])
      ]);
    };
  }
};
const R8 = window.Vue.resolveDirective, uo = window.Vue.createElementVNode, Tr = window.Vue.withDirectives, mg = window.Vue.toDisplayString, Br = window.Vue.unref, Pr = window.Vue.withCtx, Fr = window.Vue.createVNode, z8 = window.Vue.openBlock, O8 = window.Vue.createElementBlock, j8 = { class: "cx-stats-panel pa-4" }, H8 = ["textContent"], q8 = { class: "cx-stats-panel__monthly-stats-label" }, G8 = ["textContent"], X8 = { class: "cx-stats-panel__total-stats-label" }, W8 = window.Vue.ref, hg = window.Vue.computed, K8 = window.Vue.watch, Y8 = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = hg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.count) || 0;
    }), s = hg(() => {
      var i, c;
      return ((c = (i = t.stats) == null ? void 0 : i[n]) == null ? void 0 : c.delta) || 0;
    }), a = W8(null);
    return K8(
      () => t.stats,
      () => {
        const i = t.stats, c = a.value.getContext("2d"), d = Object.keys(t.stats || {}).sort(), g = d.reduce(
          (y, k) => Math.max(y, i[k].delta),
          0
        ), r = d.map((y) => i[y].delta), l = a.value.getBoundingClientRect().width, u = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = u;
        const p = 4, m = 6, h = 50, f = (h - p) / g;
        let _ = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), S = r.slice(
          Math.max(r.length - w, 0)
        );
        S.forEach((y, k) => {
          k === S.length - 1 && (c.fillStyle = "#36c");
          const x = h - y * f;
          c.fillRect(_, x, m, y * f), _ += m + p;
        });
      }
    ), (i, c) => {
      const d = R8("i18n");
      return z8(), O8("div", j8, [
        Tr(uo("h5", null, null, 512), [
          [d, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Fr(Br(P), null, {
          default: Pr(() => [
            Fr(Br(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: Pr(() => [
                uo("h3", {
                  textContent: mg(s.value)
                }, null, 8, H8),
                Tr(uo("h5", q8, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Fr(Br(b), { class: "cx-stats-panel__total-stats" }, {
              default: Pr(() => [
                uo("h3", {
                  textContent: mg(o.value)
                }, null, 8, G8),
                Tr(uo("h5", X8, null, 512), [
                  [d, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        uo("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Kh = () => {
  const e = Ye();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const J8 = window.Vue.renderSlot, Z8 = window.Vue.unref, Q8 = window.Vue.createVNode, e$ = window.Vue.createElementVNode, t$ = window.Vue.openBlock, n$ = window.Vue.createElementBlock, o$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, s$ = { class: "col-12 ma-0 pa-0" }, a$ = {
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
    const n = t, o = Kh(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, i) => (t$(), n$("footer", o$, [
      e$("div", s$, [
        J8(a.$slots, "default", {}, () => [
          Q8(Z8(Us), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, i$ = window.Vuex.useStore, Vi = () => {
  const e = i$(), t = Hs(), n = (s) => C(void 0, null, function* () {
    let a = yield lt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const i = {};
    for (const c of a) {
      const d = c.sourceLanguage;
      i[d] = i[d] || [], i[d].push(c);
    }
    e.commit("translator/setTranslationsLoaded", { status: s, value: !0 });
    for (const [c, d] of Object.entries(i))
      t(
        c,
        d.map((g) => g.sourceTitle)
      ), d.forEach((g) => {
        const { targetLanguage: r, targetTitle: l } = g, u = !!e.getters["mediawiki/getPage"](
          r,
          l
        );
        l && !u && e.commit(
          "mediawiki/addPage",
          new Fo({ title: l, pagelanguage: r })
        );
      });
  });
  return { fetchTranslationsByStatus: n, fetchAllTranslations: () => e.state.translator.translations.length ? Promise.resolve() : Promise.all([
    n("published"),
    n("draft")
  ]).catch((s) => {
    mw.log.error("[CX] Error while fetching translations", s);
  }) };
}, r$ = window.Vuex.useStore, l$ = () => {
  const e = r$(), t = Hs();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield ie.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), ie.fetchSectionSuggestion(
        s.sourceLanguage,
        s.title,
        s.targetLanguage
      ).then(
        (a) => s.missingSectionsCount = (a == null ? void 0 : a.missingSectionsCount) || 0
      ), o[s.sourceLanguage] = [
        ...o[s.sourceLanguage] || [],
        s
      ];
    for (const [s, a] of Object.entries(
      o
    ))
      t(
        s,
        a.map((i) => i.title)
      );
  });
}, c$ = window.Vuex.useStore, Yh = () => {
  const e = c$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: i } = Am(), { previousRoute: c } = ue(e), d = Ye(), g = () => {
    const u = {
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
    return u[p];
  }, r = () => {
    if (n.value)
      return g() || "direct_preselect";
    const p = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[c.value];
    return p || (i(o.value) ? g() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    const u = r(), p = {
      event_type: "dashboard_open",
      event_source: u,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return u === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), d(p);
  }, getEventSource: r };
}, u$ = window.Vue.watch, d$ = () => {
  const { fetchAllTranslations: e } = Vi(), t = Ac(), n = l$(), { fetchPageCollections: o } = $c(), { logDashboardOpenEvent: s } = Yh(), { applicationLanguagesInitialized: a } = Zm();
  return () => C(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (i) {
      mw.log.error("[CX] Error while fetching favorite suggestions", i);
    }
    yield e(), u$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, fg = window.Vue.computed, g$ = window.Vue.ref, p$ = window.Vue.watch, m$ = window.Vue.watchEffect, h$ = window.Vuex.useStore, f$ = ["suggestions", "draft", "published"], w$ = () => {
  const e = h$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), o = g$(null);
  if (f$.includes(t.value))
    o.value = t.value;
  else {
    const s = fg(
      () => e.state.translator.translationsLoaded.draft
    ), a = fg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    s.value ? o.value = a.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", p$(s, (i) => {
      i && (o.value = a.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return m$(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, _$ = window.Vue.computed, v$ = () => {
  const e = pe();
  return _$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: Kw,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: hi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: Ww,
        type: "text"
      }
    }
  ]);
};
const se = window.Vue.unref, Ce = window.Vue.createVNode, S$ = window.Vue.toDisplayString, y$ = window.Vue.createTextVNode, _t = window.Vue.withCtx, La = window.Vue.openBlock, Mr = window.Vue.createBlock, Nr = window.Vue.createCommentVNode, C$ = window.Vue.vShow, b$ = window.Vue.withDirectives, k$ = window.Vue.isRef, x$ = window.Vue.createElementBlock, wg = window.Vue.computed, $$ = window.Vuex.useStore, V$ = window.Codex.CdxButton, E$ = window.Codex.CdxIcon, L$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = ke(), n = Ye(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    d$()();
    const a = $$();
    a.dispatch("translator/fetchTranslatorStats");
    const i = wg(() => a.state.translator.translatorStats), c = wg(() => a.state.application.bannerDismissed), d = () => {
      a.commit("application/dismissBanner");
    }, g = w$(), r = v$(), l = Kh(), u = (p) => {
      l(p), g.value = p;
    };
    return (p, m) => (La(), x$("div", null, [
      Ce(se(P), { class: "ma-0 py-4" }, {
        default: _t(() => [
          Ce(se(V$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: _t(() => [
              Ce(se(E$), {
                class: "me-1",
                icon: se(rc)
              }, null, 8, ["icon"]),
              y$(" " + S$(p.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      se(un) && !c.value ? (La(), Mr(se(P), {
        key: 0,
        class: "ma-0",
        align: "start"
      }, {
        default: _t(() => [
          Ce(se(b), { class: "col-12 col-tablet-9 col-offset-tablet-3 col-desktop-7 col-offset-desktop-2" }, {
            default: _t(() => [
              Ce(jb, {
                class: "mb-4",
                onUserDismissed: m[0] || (m[0] = (h) => d())
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : Nr("", !0),
      Ce(se(P), {
        class: "ma-0",
        align: "start"
      }, {
        default: _t(() => [
          p.$mwui.breakpoint.tabletAndUp ? (La(), Mr(se(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _t(() => [
              Ce(se(Us), {
                id: "dashboard-list-selector--desktop",
                items: se(r),
                active: se(g),
                onSelect: u
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Nr("", !0),
          Ce(se(b), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _t(() => [
              b$(Ce($8, null, null, 512), [
                [C$, se(g) === "suggestions"]
              ]),
              Ce(h8, {
                active: se(g) === "suggestions"
              }, null, 8, ["active"]),
              Ce(Rd, {
                "translation-status": "draft",
                "active-status": se(g)
              }, null, 8, ["active-status"]),
              Ce(Rd, {
                "translation-status": "published",
                "active-status": se(g)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ce(se(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: _t(() => [
              Ce(se(P), {
                class: "ma-0",
                align: "start"
              }, {
                default: _t(() => [
                  Ce(se(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: _t(() => [
                      Ce(Y8, { stats: i.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ce(se(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: _t(() => [
                      Ce(I8)
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
      p.$mwui.breakpoint.mobile ? (La(), Mr(a$, {
        key: 1,
        active: se(g),
        "onUpdate:active": m[1] || (m[1] = (h) => k$(g) ? g.value = h : null),
        items: se(r)
      }, null, 8, ["active", "items"])) : Nr("", !0)
    ]));
  }
}, A$ = {
  name: "DashboardView",
  components: { CxDashboard: L$ }
}, D$ = window.Vue.resolveComponent, T$ = window.Vue.createVNode, B$ = window.Vue.openBlock, P$ = window.Vue.createElementBlock, F$ = { class: "cx-translation-dashboard" };
function M$(e, t, n, o, s, a) {
  const i = D$("cx-dashboard");
  return B$(), P$("main", F$, [
    T$(i, { class: "mb-4 pb-12" })
  ]);
}
const _g = /* @__PURE__ */ J(A$, [["render", M$]]), go = window.Vue.computed, N$ = () => {
  const { sectionSuggestion: e } = Je(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Ot(), o = go(
    () => {
      var u, p, m;
      return (m = (p = (u = e.value) == null ? void 0 : u.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = go(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.missingSectionsCount;
    }
  ), a = go(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.presentSectionsCount;
    }
  ), { targetPageExists: i, getCurrentTitleByLanguage: c } = pn(), d = go(() => i ? q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), g = (u) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : u ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", r = go(() => {
    let u;
    return s.value > 1 ? u = [
      "cx-sx-existing-translation-additional-info",
      `"${o.value}"`,
      s.value - 1
    ] : s.value === 1 && a.value > 0 ? u = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${o.value}"`
    ] : s.value === 1 && a.value === 0 ? u = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${o.value}"`
    ] : a.value > 0 ? u = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ] : u = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ], u;
  }), l = go(
    () => {
      var u;
      return !i.value || ((u = e.value) == null ? void 0 : u.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: r,
    getActionButtonLabel: g,
    isProgressiveButton: l,
    targetArticlePath: d
  };
};
function U$(e) {
  return e.$el = $(e), e;
}
function I$(e, t, n, o) {
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
function R$() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function z$(e, t) {
  return C(this, null, function* () {
    yield Ic(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = U$(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const O$ = window.Vue.computed, j$ = window.Vue.onMounted, H$ = window.Vue.ref;
function q$(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const G$ = {
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
    const n = H$(null);
    let o = null;
    const s = O$(() => o.getHtml()), a = () => {
      o.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, d = {
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
    return j$(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = q$;
      const r = yield z$(d, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = I$(
        r,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = R$, o.focus();
    })), { sxeditor: n };
  }
}, pc = window.Vue.createElementVNode, X$ = window.Vue.openBlock, W$ = window.Vue.createElementBlock, K$ = ["lang", "dir"], Y$ = /* @__PURE__ */ pc("div", { class: "overlay-header header initial-header" }, [
  /* @__PURE__ */ pc("div", { class: "toolbar" })
], -1), J$ = ["lang", "dir"];
function Z$(e, t, n, o, s, a) {
  return X$(), W$("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    Y$,
    pc("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, J$)
  ], 8, K$);
}
const Q$ = /* @__PURE__ */ J(G$, [["render", Z$]]);
function Ic() {
  return mw.loader.using("mw.cx3.ve");
}
const e4 = window.Vuex.useStore, Jh = () => {
  const e = e4();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Ic(), new Promise((s) => {
      setTimeout(() => {
        const a = Om.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, t4 = window.Vuex.useStore, Rc = () => {
  const e = t4();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield to.fetchPageContent(
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
}, n4 = window.Vuex.useStore, Ei = () => {
  const e = n4(), { currentSourcePage: t } = Ze(), n = Jh(), o = Rc(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c
  } = B(), d = (l, u) => C(void 0, null, function* () {
    l() || (e.commit("application/increaseTranslationDataLoadingCounter"), yield o(
      a.value,
      i.value,
      c.value
    ), un || (yield n(
      a.value,
      c.value
    )), e.commit("application/decreaseTranslationDataLoadingCounter")), u();
  });
  return {
    selectPageSectionByIndex: (l) => {
      const u = () => {
        var m;
        return (m = t.value.sections) == null ? void 0 : m[l];
      };
      return d(u, () => {
        const m = u();
        l === 0 ? m.originalTitle = t.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (l) => d(() => t.value.getSectionByTitle(l), () => {
      s(l);
    })
  };
}, o4 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s && Vm(s) ? lt.parseTemplateWikitext(
    xm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Zh = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => eo(a)
  );
  return s ? lt.parseTemplateWikitext(
    xm(s),
    n,
    t
  ) : Promise.resolve(null);
}, s4 = (e, t, n, o) => C(void 0, null, function* () {
  var c, d, g;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((d = t.mt) == null ? void 0 : d.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, i = yield Zh(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), a4 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, i4 = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return s4(e, t, n, o);
  a4(e, t);
}), r4 = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const d = o.find(
          (r) => r.subSectionId === c.id
        );
        if (!d)
          continue;
        const g = i4(
          c,
          d,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, l4 = { restoreCorporaDraft: r4 }, zc = () => (e, t, n, o = {}) => {
  q.setCXToken(e, t, n), location.href = q.getCXUrl(
    n,
    null,
    e,
    t,
    o
  );
}, os = window.Vue.computed, c4 = window.Vuex.useStore, K = () => {
  const e = c4(), { currentSourcePage: t, currentTargetPage: n } = Ze(), { currentMTProvider: o } = ue(e), { sectionURLParameter: s } = B(), a = os(() => {
    var r, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (r = t.value) == null ? void 0 : r.leadSection;
  }), i = os(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.isTitleSelected;
    }
  ), c = os(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.selectedContentTranslationUnit;
    }
  ), d = os(
    () => {
      var r;
      return (r = a.value) == null ? void 0 : r.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = os(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: i,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: d,
    targetPageTitleForPublishing: g
  };
}, u4 = window.Vuex.useStore, Oc = () => {
  const e = Ye(), t = u4(), n = ke(), { currentSourcePage: o } = Ze(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = dS(), c = Jh(), d = zc(), g = Rc(), { sourceSection: r } = K();
  return (l) => C(void 0, null, function* () {
    t.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: u,
      targetLanguage: p,
      sourceTitle: m,
      targetTitle: h,
      pageRevision: f,
      isLeadSectionTranslation: _
    } = l;
    if (un) {
      const y = {};
      _ || (y.sourcesection = l.sourceSectionTitle), d(
        s.value,
        a.value,
        m,
        y
      );
      return;
    }
    q.unsetCXToken(
      u,
      p,
      m
    );
    const { setTranslationURLParams: w } = B();
    w(l), n.push({ name: "sx-sentence-selector", query: { force: !0 } }), (s.value !== u || a.value !== p) && i(l), e({
      event_type: "dashboard_translation_continue",
      translation_id: l.sectionTranslationId,
      translation_source_language: s.value,
      translation_source_title: m,
      translation_source_section: l.sourceSectionTitle,
      translation_target_language: a.value,
      translation_target_title: h,
      translation_target_section: l.targetSectionTitle,
      translation_type: _ ? "article" : "section"
    }), yield g(
      s.value,
      a.value,
      m,
      f
    ), yield c(s.value, m), l.restored || (yield lt.fetchTranslationUnits(l.translationId).then(
      (y) => l4.restoreCorporaDraft(
        o.value,
        h,
        a,
        y
      )
    ).then(() => l.restored = !0));
    let S;
    _ ? (r.value.originalTitle = m, S = h) : S = l.targetSectionTitle, r.value.translatedTitle = S, t.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, d4 = () => new URLSearchParams(location.search).get("force-quick-tutorial"), g4 = window.Vuex.useStore, jc = () => {
  const { logDashboardTranslationStartEvent: e } = jh(), t = zc(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s,
    sectionURLParameter: a
  } = B(), i = g4(), c = ke(), { selectPageSectionByIndex: d } = Ei();
  return () => {
    e(), un ? t(
      n.value,
      o.value,
      s.value,
      a.value ? { sourcesection: a.value } : {}
    ) : (a.value || d(0), d4() || !i.getters["translator/userHasSectionTranslations"] ? c.push({ name: "sx-quick-tutorial", query: { force: !0 } }) : c.push({ name: "sx-sentence-selector", query: { force: !0 } }));
  };
}, p4 = window.Vue.ref, m4 = () => {
  const e = ke(), t = jc(), { sectionURLParameter: n } = B(), { targetPageExists: o } = pn(), { selectPageSectionByTitle: s } = Ei(), a = () => C(void 0, null, function* () {
    yield s(n.value), e.push({ name: "sx-content-comparator", query: { force: !0 } });
  }), i = Oc(), c = p4(!1), { currentTranslation: d } = Ot();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !un ? c.value = !0 : i(d.value) : n.value ? a() : o.value ? e.push({ name: "sx-section-selector" }) : t();
    },
    translationConfirmationDialogOn: c
  };
};
const h4 = window.Vue.resolveDirective, vg = window.Vue.createElementVNode, Sg = window.Vue.withDirectives, f4 = window.Vue.unref, w4 = window.Vue.withCtx, _4 = window.Vue.openBlock, v4 = window.Vue.createBlock, S4 = {
  href: "",
  target: "_blank"
}, y4 = window.Codex.CdxDialog, C4 = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = pe(), i = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, c = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function d() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (g, r) => {
      const l = h4("i18n");
      return _4(), v4(f4(y4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "close-button-label": g.$i18n("cx-unreviewed-translation-dialog-close-button-aria-label"),
        "primary-action": i,
        "default-action": c,
        "onUpdate:open": r[0] || (r[0] = (u) => s(u)),
        onPrimary: d,
        onDefault: r[1] || (r[1] = (u) => s(!1))
      }, {
        default: w4(() => [
          Sg(vg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Sg(vg("a", S4, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title", "close-button-label"]);
    };
  }
};
const me = window.Vue.unref, b4 = window.Vue.resolveDirective, ss = window.Vue.createElementVNode, yg = window.Vue.withDirectives, as = window.Vue.toDisplayString, is = window.Vue.openBlock, Ur = window.Vue.createElementBlock, Ir = window.Vue.createCommentVNode, nt = window.Vue.createVNode, vt = window.Vue.withCtx, Rr = window.Vue.createTextVNode, k4 = window.Vue.withModifiers, Cg = window.Vue.createBlock, x4 = window.Vue.Fragment, $4 = { class: "sx-translation-confirmer-body pb-4" }, V4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, E4 = ["textContent"], L4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, A4 = ["href"], D4 = ["textContent"], Aa = window.Vue.computed, T4 = window.Vue.inject, bg = window.Vue.ref, B4 = window.Vue.watchEffect, P4 = window.Vuex.useStore, zr = window.Codex.CdxButton, F4 = window.Codex.CdxIcon, M4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = ke(), o = P4();
    T4("colors");
    const { sectionSuggestion: s } = Je(), { targetLanguageAutonym: a } = ue(o), { sectionURLParameter: i } = B(), c = jc(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: g } = m4(), r = bg(!1), l = bg(null), u = () => C(this, null, function* () {
      let M = !0;
      try {
        M = yield lt.checkUnreviewedTranslations();
      } catch (X) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          X
        );
      }
      M !== !0 && (r.value = !0, l.value = M.targetUrl);
    }), p = () => C(this, null, function* () {
      yield u(), !r.value && c();
    }), m = () => C(this, null, function* () {
      yield u(), !r.value && d();
    }), h = t;
    B4(() => {
      g.value && (h("open-translation-confirmation-dialog"), g.value = !1);
    });
    const {
      actionInformationMessageArgs: f,
      getActionButtonLabel: _,
      isProgressiveButton: w,
      targetArticlePath: S
    } = N$(), y = pe(), k = Aa(
      () => y.i18n(_(!!i.value))
    ), x = Aa(
      () => y.i18n(...f.value)
    ), T = () => C(this, null, function* () {
      yield u(), !r.value && n.push({ name: "sx-section-selector" });
    }), V = Aa(() => {
      var M, X;
      return i.value && !!((X = (M = s.value) == null ? void 0 : M.sourceSections) != null && X.length);
    }), { targetPageExists: F } = pn(), N = Aa(() => !i.value && F.value && un);
    return (M, X) => {
      const W = b4("i18n");
      return is(), Ur(x4, null, [
        ss("section", $4, [
          me(i) ? (is(), Ur("section", V4, [
            yg(ss("h6", null, null, 512), [
              [W, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ss("h5", {
              class: "ma-0",
              textContent: as(me(i))
            }, null, 8, E4)
          ])) : me(F) ? (is(), Ur("section", L4, [
            nt(me(P), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: vt(() => [
                yg(nt(me(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [W, [me(a)], "cx-sx-existing-translation-status"]
                ]),
                nt(me(b), { shrink: "" }, {
                  default: vt(() => [
                    ss("a", {
                      href: me(S),
                      target: "_blank"
                    }, [
                      nt(me(F4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: me(Fc)
                      }, null, 8, ["icon"])
                    ], 8, A4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            nt(me(P), { class: "ma-0" }, {
              default: vt(() => [
                nt(me(b), null, {
                  default: vt(() => [
                    ss("span", {
                      textContent: as(x.value)
                    }, null, 8, D4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Ir("", !0),
          nt(me(P), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: vt(() => [
              V.value ? (is(), Cg(me(b), {
                key: 0,
                shrink: "",
                class: "me-4"
              }, {
                default: vt(() => [
                  nt(me(zr), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: k4(T, ["stop"])
                  }, {
                    default: vt(() => [
                      Rr(as(M.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Ir("", !0),
              N.value ? (is(), Cg(me(b), {
                key: 1,
                shrink: "",
                class: "me-4"
              }, {
                default: vt(() => [
                  nt(me(zr), {
                    size: "large",
                    onClick: p
                  }, {
                    default: vt(() => [
                      Rr(as(M.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Ir("", !0),
              nt(me(b), { shrink: "" }, {
                default: vt(() => [
                  nt(me(zr), {
                    weight: "primary",
                    size: "large",
                    action: me(w) ? "progressive" : "default",
                    onClick: m
                  }, {
                    default: vt(() => [
                      Rr(as(k.value), 1)
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
        nt(C4, {
          modelValue: r.value,
          "onUpdate:modelValue": X[0] || (X[0] = (re) => r.value = re),
          "target-url": l.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const kg = window.Vue.unref, N4 = window.Vue.openBlock, U4 = window.Vue.createBlock, xg = window.Vue.computed, Qh = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t, enabledTargetLanguages: n } = Po(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s
    } = B(), { currentLanguageTitleGroup: a } = pn(), i = xg(
      () => {
        var l;
        return ((l = a.value) == null ? void 0 : l.titles.map((u) => u.lang)) || [];
      }
    ), c = xg(
      () => n.value || t.value
    ), d = pS(), g = (l) => d(l, s.value), r = (l) => d(o.value, l);
    return (l, u) => (N4(), U4(gi, {
      class: "sx-article-language-selector",
      "source-languages": i.value,
      "target-languages": c.value,
      "selected-source-language": kg(o),
      "selected-target-language": kg(s),
      "onUpdate:selectedSourceLanguage": g,
      "onUpdate:selectedTargetLanguage": r
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
};
const Le = window.Vue.unref, Or = window.Vue.toDisplayString, Jt = window.Vue.createElementVNode, Bt = window.Vue.createVNode, po = window.Vue.withCtx, I4 = window.Vue.resolveDirective, R4 = window.Vue.withDirectives, z4 = window.Vue.normalizeClass, O4 = window.Vue.openBlock, j4 = window.Vue.createBlock, H4 = ["textContent"], q4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, G4 = ["textContent"], X4 = { class: "pe-3" }, W4 = ["textContent"], K4 = window.Codex.CdxButton, rs = window.Codex.CdxIcon, Zt = window.Vue.computed, Y4 = window.Vuex.useStore, J4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = Y4(), n = pe(), { currentSourcePage: o } = Ze(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i
    } = B(), c = Zt(() => t.state.suggestions.favorites || []), d = Zt(
      () => c.value.some(
        (x) => i.value === x.title && s.value === x.sourceLanguage && a.value === x.targetLanguage
      )
    ), { markFavoriteSuggestion: g, removeFavoriteSuggestion: r } = Uc(), { translationSizeMessageArgs: l } = Gh(), u = () => g(
      i.value,
      s.value,
      a.value
    ), p = () => r(
      new Eo({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Zt(
      () => d.value ? Eh : Lh
    ), h = Zt(
      () => d.value ? p : u
    ), f = Zt(
      () => q.getPageUrl(s.value || "", i.value || "")
    ), _ = Zt(() => {
      var x;
      return (x = o.value) == null ? void 0 : x.langLinksCount;
    }), w = (x) => {
      const T = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let V = 0; V < T.length; V++)
        if (x >= T[V].value)
          return (x / T[V].value).toFixed(1).replace(/\.0$/, "") + T[V].suffix;
      return x.toString();
    }, S = Zt(() => {
      var T;
      const x = Object.values(((T = o.value) == null ? void 0 : T.pageviews) || {}).reduce(
        (V, F) => V + F,
        0
      );
      return w(x);
    }), y = Zt(() => l.value ? n.i18n(...l.value) : ""), k = Zt(() => l.value ? l.value[2] < 15 : !1);
    return (x, T) => {
      const V = I4("i18n");
      return O4(), j4(Le(P), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: po(() => [
          Bt(Le(b), null, {
            default: po(() => [
              Bt(Le(P), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: po(() => [
                  Bt(Le(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: po(() => [
                      Jt("h5", {
                        class: "ma-0 me-1",
                        textContent: Or(Le(i))
                      }, null, 8, H4),
                      Bt(Le(rs), {
                        size: "x-small",
                        icon: Le(Fc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Bt(Le(b), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: po(() => [
                      Bt(Le(K4), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": x.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: po(() => [
                          Bt(Le(rs), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Jt("div", q4, [
                Jt("div", null, [
                  Jt("span", null, [
                    Bt(Le(rs), {
                      icon: Le(Th),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Jt("span", {
                      class: "pe-3",
                      textContent: Or(_.value)
                    }, null, 8, G4)
                  ]),
                  Jt("span", null, [
                    Bt(Le(rs), {
                      icon: Le(Ah),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    R4(Jt("span", X4, null, 512), [
                      [V, [S.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Jt("span", {
                  class: z4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": k.value
                  }])
                }, [
                  Bt(Le(rs), {
                    icon: Le(Cb),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Jt("span", {
                    textContent: Or(y.value)
                  }, null, 8, W4)
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
const Z4 = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, Da = window.Vue.withDirectives, Q4 = window.Vue.toDisplayString, eV = window.Vue.createTextVNode, jr = window.Vue.unref, Hr = window.Vue.withCtx, qr = window.Vue.openBlock, Gr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const tV = { class: "pa-4" }, nV = { class: "flex pt-2" }, oV = window.Codex.CdxButton, sV = window.Vue.ref, aV = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Oc(), a = sV(!1), { currentTranslation: i } = Ot(), c = () => C(this, null, function* () {
      a.value = !0;
      let d = !1;
      try {
        d = yield lt.splitTranslation(
          i.value.translationId
        );
      } catch (g) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          g
        );
      }
      a.value = !1, d && (s(i.value), o());
    });
    return (d, g) => {
      const r = Z4("i18n");
      return qr(), Gr(jr(ct), {
        value: e.modelValue,
        persistent: a.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: Hr(() => [
          zn("div", nV, [
            a.value ? (qr(), Gr(jr(Xe), { key: 1 })) : (qr(), Gr(jr(oV), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: Hr(() => [
                eV(Q4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Hr(() => [
          zn("div", tV, [
            Da(zn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Da(zn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            zn("p", null, [
              Da(zn("strong", null, null, 512), [
                [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Da(zn("p", null, null, 512), [
              [r, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, iV = window.Vuex.useStore;
let Ta = [];
const ef = () => {
  const e = iV();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ta.includes(o) ? Promise.resolve() : (Ta.push(o), to.fetchLanguageTitles(t, n).then((s) => {
      Ta = Ta.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, rV = window.Vue.ref, mo = rV(null), tf = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    mo.value || (yield ki.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, mo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        mo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = mo.value) == null ? void 0 : n.refreshAt) <= t ? (mo.value = null, e()) : (o = mo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const $g = window.Vue.resolveDirective, Ba = window.Vue.createElementVNode, Vg = window.Vue.withDirectives, yn = window.Vue.unref, Pa = window.Vue.withCtx, Qt = window.Vue.createVNode, Xr = window.Vue.openBlock, Eg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const lV = window.Vue.createBlock, cV = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, uV = { class: "mb-0" }, dV = { class: "sx-translation-confirmer__article-image flex justify-center" }, gV = ["src"], pV = { class: "ma-3" }, Lg = window.Vue.computed, mV = window.Vue.inject, hV = window.Vue.onBeforeUnmount, fV = window.Vue.ref, wV = window.Vuex.useStore, _V = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = wV(), { currentSourcePage: n } = Ze(), { previousRoute: o } = ue(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: c,
      clearTranslationURLParameters: d
    } = B(), g = mV("breakpoints"), r = Lg(() => g.value.nextBreakpoint), l = Lg(
      () => {
        var S;
        return (S = n.value) == null ? void 0 : S.getImage(r.value);
      }
    ), { fetchTranslationsByStatus: u } = Vi(), p = ef();
    u("draft"), p(s.value, i.value), Ic(), tf()(), Km()(a.value);
    const f = ke(), _ = () => {
      o.value ? f.push({ name: o.value }) : f.push({ name: "dashboard" });
    };
    hV(() => {
      const S = f.currentRoute.value.name;
      (S === "dashboard" || S === "sx-article-search") && d();
    });
    const w = fV(!1);
    return (S, y) => {
      const k = $g("i18n"), x = $g("i18n-html");
      return Xr(), Eg("section", cV, [
        Qt(yn(P), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Pa(() => [
            Qt(yn(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Pa(() => [
                Vg(Ba("h5", uV, null, 512), [
                  [k, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Qt(yn(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Pa(() => [
                Qt(yn(Te), {
                  class: "pa-0",
                  type: "icon",
                  icon: yn(Is),
                  "icon-size": 20,
                  onClick: _
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ba("div", dV, [
          l.value ? (Xr(), Eg("img", {
            key: 0,
            src: l.value
          }, null, 8, gV)) : (Xr(), lV(yn(Pe), {
            key: 1,
            size: "120",
            icon: yn(Cm),
            "icon-color": S.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Qt(J4),
        Qt(Qh),
        Qt(M4, {
          onOpenTranslationConfirmationDialog: y[0] || (y[0] = (T) => w.value = !0)
        }),
        Qt(yn(P), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Pa(() => [
            Ba("p", pV, [
              Vg(Ba("small", null, null, 512), [
                [x, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Qt(aV, {
          modelValue: w.value,
          "onUpdate:modelValue": y[1] || (y[1] = (T) => w.value = T)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const vV = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: _V
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, SV = window.Vue.resolveComponent, yV = window.Vue.createVNode, CV = window.Vue.normalizeClass, bV = window.Vue.openBlock, kV = window.Vue.createElementBlock;
function xV(e, t, n, o, s, a) {
  const i = SV("sx-translation-confirmer");
  return bV(), kV("main", {
    class: CV(["sx-translation-confirmer-view", a.classes])
  }, [
    yV(i)
  ], 2);
}
const $V = /* @__PURE__ */ J(vV, [["render", xV]]);
const VV = window.Vue.toDisplayString, Ag = window.Vue.unref, EV = window.Vue.createVNode, LV = window.Vue.createTextVNode, AV = window.Vue.createElementVNode, DV = window.Vue.openBlock, TV = window.Vue.createElementBlock, BV = { class: "sx-section-selector-view-article-item ma-0" }, PV = ["href"], FV = window.Codex.CdxIcon, MV = {
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
    return (t, n) => (DV(), TV("li", BV, [
      AV("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        LV(VV(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        EV(Ag(FV), {
          size: "x-small",
          icon: Ag(Fc)
        }, null, 8, ["icon"])
      ], 8, PV)
    ]));
  }
};
const NV = window.Vue.resolveDirective, Fa = window.Vue.createElementVNode, Wr = window.Vue.withDirectives, On = window.Vue.unref, UV = window.Vue.toDisplayString, Ma = window.Vue.withCtx, ls = window.Vue.createVNode, IV = window.Vue.openBlock, RV = window.Vue.createElementBlock, zV = { class: "sx-section-selector__header pa-4" }, OV = { class: "sx-section-selector__header-text ma-0" }, jV = ["textContent"], HV = { class: "pt-0 ma-0" }, qV = { class: "ma-0" }, GV = window.Codex.CdxButton, XV = window.Codex.CdxIcon, WV = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Je();
    return (n, o) => {
      const s = NV("i18n");
      return IV(), RV("div", zV, [
        ls(On(P), { class: "ma-0 pb-3" }, {
          default: Ma(() => [
            ls(On(b), null, {
              default: Ma(() => {
                var a;
                return [
                  Wr(Fa("h6", OV, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Fa("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: UV((a = On(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, jV)
                ];
              }),
              _: 1
            }),
            ls(On(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ma(() => [
                ls(On(GV), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ma(() => [
                    ls(On(XV), { icon: On(No) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Wr(Fa("h4", HV, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Wr(Fa("p", qV, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, KV = window.Vue.renderList, YV = window.Vue.Fragment, Kr = window.Vue.openBlock, Dg = window.Vue.createElementBlock, JV = window.Vue.renderSlot, Na = window.Vue.unref, Tg = window.Vue.createVNode, Bg = window.Vue.withCtx, ZV = window.Vue.createBlock, QV = { class: "sx-section-selector__sections-list ma-0 pa-0" }, e3 = window.Codex.CdxButton, t3 = window.Codex.CdxIcon, nf = {
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
    return (t, n) => (Kr(), Dg("ul", QV, [
      (Kr(!0), Dg(YV, null, KV(e.sections, (o) => (Kr(), ZV(Na(P), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Bg(() => [
          Tg(Na(e3), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Bg(() => [
              JV(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              Tg(Na(t3), { icon: Na(Ws) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, n3 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const o3 = window.Vue.resolveDirective, Ua = window.Vue.createElementVNode, Yr = window.Vue.withDirectives, St = window.Vue.unref, Pg = window.Vue.toDisplayString, ho = window.Vue.withCtx, Jr = window.Vue.openBlock, Fg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cs = window.Vue.createVNode, s3 = window.Vue.createTextVNode, a3 = window.Vue.createElementBlock, i3 = { class: "sx-section-selector__missing-sections py-2" }, r3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, l3 = ["lang", "dir", "textContent"], Mg = window.Vue.computed, c3 = window.Codex.CdxButton, u3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Je(), n = Mg(
      () => {
        var s;
        return I.getAutonym((s = t.value) == null ? void 0 : s.targetLanguage);
      }
    ), o = Mg(
      () => {
        var s;
        return Object.keys(((s = t.value) == null ? void 0 : s.missingSections) || {}).length === 0;
      }
    );
    return (s, a) => {
      const i = o3("i18n");
      return Jr(), a3("section", i3, [
        Yr(Ua("h4", r3, null, 512), [
          [i, [
            n.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (Jr(), Fg(St(P), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: ho(() => [
            cs(St(b), {
              class: "py-6 justify-center",
              innerHTML: St(n3)
            }, null, 8, ["innerHTML"]),
            cs(St(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: ho(() => [
                Yr(Ua("h6", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            cs(St(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: ho(() => [
                Yr(Ua("p", null, null, 512), [
                  [i, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            cs(St(b), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: ho(() => [
                cs(St(c3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: a[1] || (a[1] = (c) => s.$emit("close"))
                }, {
                  default: ho(() => [
                    s3(Pg(s.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Jr(), Fg(nf, {
          key: 0,
          sections: St(t).orderedMissingSections,
          onSelectSection: a[0] || (a[0] = (c) => s.$emit("select-section", c))
        }, {
          default: ho(({ sourceSection: c }) => {
            var d, g;
            return [
              Ua("h5", {
                class: "ma-0",
                lang: (d = St(t)) == null ? void 0 : d.sourceLanguage,
                dir: St(I.getDir)((g = St(t)) == null ? void 0 : g.sourceLanguage),
                textContent: Pg(c)
              }, null, 8, l3)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const d3 = window.Vue.resolveDirective, Ia = window.Vue.createElementVNode, g3 = window.Vue.withDirectives, jn = window.Vue.unref, Ng = window.Vue.toDisplayString, p3 = window.Vue.withCtx, m3 = window.Vue.createVNode, h3 = window.Vue.openBlock, f3 = window.Vue.createElementBlock, w3 = { class: "sx-section-selector__present-sections py-2" }, _3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, v3 = { class: "sx-section-selector__present-section-button-content" }, S3 = ["lang", "dir", "textContent"], y3 = ["lang", "dir", "textContent"], C3 = window.Vue.computed, b3 = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Je(), n = C3(
      () => {
        var o;
        return I.getAutonym((o = t.value) == null ? void 0 : o.targetLanguage);
      }
    );
    return (o, s) => {
      var i;
      const a = d3("i18n");
      return h3(), f3("section", w3, [
        g3(Ia("h4", _3, null, 512), [
          [a, [
            n.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        m3(nf, {
          sections: ((i = jn(t)) == null ? void 0 : i.orderedPresentSections) || [],
          onSelectSection: s[0] || (s[0] = (c) => o.$emit("select-section", c))
        }, {
          default: p3(({ sourceSection: c, targetSection: d }) => {
            var g, r, l, u;
            return [
              Ia("div", v3, [
                Ia("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (g = jn(t)) == null ? void 0 : g.sourceLanguage,
                  dir: jn(I.getDir)((r = jn(t)) == null ? void 0 : r.sourceLanguage),
                  textContent: Ng(c)
                }, null, 8, S3),
                Ia("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (l = jn(t)) == null ? void 0 : l.targetLanguage,
                  dir: jn(I.getDir)((u = jn(t)) == null ? void 0 : u.targetLanguage),
                  textContent: Ng(d)
                }, null, 8, y3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const en = window.Vue.createVNode, Cn = window.Vue.unref, k3 = window.Vue.resolveDirective, Pt = window.Vue.createElementVNode, us = window.Vue.withDirectives, x3 = window.Vue.renderList, $3 = window.Vue.Fragment, Zr = window.Vue.openBlock, Ug = window.Vue.createElementBlock, V3 = window.Vue.createBlock, Ig = window.Vue.toDisplayString, Rg = window.Vue.createTextVNode, Qr = window.Vue.withCtx, E3 = { class: "sx-section-selector" }, L3 = { class: "sx-section-selector__body" }, A3 = { class: "py-2" }, D3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, T3 = { class: "ma-0 pa-0" }, B3 = { class: "sx-section-selector__additional-consideration-title" }, P3 = { href: "#" }, F3 = { class: "sx-section-selector__additional-consideration-title" }, M3 = { href: "#" }, el = window.Vue.computed, N3 = window.Vuex.useStore, U3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = N3(), { sectionSuggestion: n } = Je(), {
      sourceLanguage: o,
      targetLanguage: s,
      sourceLanguageAutonym: a,
      targetLanguageAutonym: i
    } = ue(t), c = el(
      () => {
        var w;
        return q.getPageUrl(o.value, (w = n.value) == null ? void 0 : w.sourceTitle);
      }
    ), d = el(
      () => {
        var w;
        return q.getPageUrl(s.value, (w = n.value) == null ? void 0 : w.targetTitle);
      }
    ), g = el(() => [
      { path: c.value, autonym: a.value },
      { path: d.value, autonym: i.value }
    ]), r = ke(), { clearTranslationURLParameters: l, setSectionURLParam: u } = B(), p = () => {
      l(), r.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ot(), h = Oc(), { selectPageSectionByTitle: f } = Ei(), _ = (w) => {
      u(w), m.value ? h(m.value) : (f(w), r.push({ name: "sx-content-comparator" }));
    };
    return (w, S) => {
      const y = k3("i18n");
      return Zr(), Ug("section", E3, [
        en(WV, { onClose: p }),
        Pt("section", L3, [
          en(Qh),
          en(u3, {
            onSelectSection: _,
            onClose: p
          }),
          en(b3, { onSelectSection: _ }),
          Pt("section", A3, [
            us(Pt("h4", D3, null, 512), [
              [y, [
                Cn(i)
              ], "cx-sx-section-selector-more-details-title"]
            ]),
            Pt("ul", T3, [
              (Zr(!0), Ug($3, null, x3(g.value, (k, x) => (Zr(), V3(MV, {
                key: `view-article-item-${x}`,
                path: k.path,
                autonym: k.autonym
              }, null, 8, ["path", "autonym"]))), 128))
            ])
          ]),
          en(Cn(P), { class: "sx-section-selector__additional-considerations ma-0" }, {
            default: Qr(() => [
              en(Cn(b), {
                cols: "12",
                tablet: "6",
                class: "px-4 pt-5 pb-4"
              }, {
                default: Qr(() => [
                  Pt("h6", B3, [
                    en(Cn(Pe), {
                      icon: Cn(o0),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Rg(" " + Ig(w.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                  ]),
                  us(Pt("p", null, null, 512), [
                    [y, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                  ]),
                  us(Pt("a", P3, null, 512), [
                    [y, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                  ])
                ]),
                _: 1
              }),
              en(Cn(b), {
                cols: "12",
                tablet: "6",
                class: "px-4 py-5"
              }, {
                default: Qr(() => [
                  Pt("h6", F3, [
                    en(Cn(Pe), {
                      icon: Cn(n0),
                      class: "pe-2"
                    }, null, 8, ["icon"]),
                    Rg(" " + Ig(w.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                  ]),
                  us(Pt("p", null, null, 512), [
                    [y, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                  ]),
                  us(Pt("a", M3, null, 512), [
                    [y, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
const I3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: U3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, R3 = window.Vue.resolveComponent, z3 = window.Vue.createVNode, O3 = window.Vue.normalizeClass, j3 = window.Vue.openBlock, H3 = window.Vue.createElementBlock;
function q3(e, t, n, o, s, a) {
  const i = R3("sx-section-selector");
  return j3(), H3("main", {
    class: O3(["sx-section-selector-view", a.classes])
  }, [
    z3(i)
  ], 2);
}
const G3 = /* @__PURE__ */ J(I3, [["render", q3]]), tl = window.Vue.computed, X3 = (e) => {
  const {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = tl(
    () => I.getAutonym(t.value)
  ), s = tl(
    () => I.getAutonym(n.value)
  ), a = pe();
  return tl(() => {
    const i = {
      value: "source_section",
      props: {
        label: a.i18n(
          "cx-sx-content-comparator-source-selector-title",
          o.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let c;
    switch (!0) {
      case e.isMappedSection:
        c = {
          value: "target_section",
          props: {
            label: a.i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              s.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        c = {
          value: "target_article",
          props: {
            label: a.i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              s.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }
    return [i, c];
  });
};
const zg = window.Vue.unref, W3 = window.Vue.createVNode, K3 = window.Vue.openBlock, Y3 = window.Vue.createElementBlock, J3 = { class: "sx-content-comparator__source-target-selector" }, Z3 = window.Vue.watch, Q3 = {
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
    const n = e, o = t, s = (i) => o("update:selection", i), a = X3(n);
    return Z3(
      () => n.isMappedSection,
      () => {
        a.value.map((i) => i.value).includes(n.selection) || s(a.value[0].value);
      }
    ), (i, c) => (K3(), Y3("div", J3, [
      W3(zg(Us), {
        items: zg(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Hn = window.Vue.computed, e5 = window.Vue.ref, Hc = () => {
  const e = e5([]), { currentTargetPage: t } = Ze(), { sectionSuggestion: n } = Je(), { sectionURLParameter: o } = B(), s = Hn(
    () => n.value.missingSections[o.value] || n.value.presentSections[o.value] || ""
  ), a = Hn(
    () => {
      var u;
      return (((u = i.value) == null ? void 0 : u.title) || "").replace(/ /g, "_");
    }
  ), i = Hn(
    () => {
      var u;
      return (u = t.value) == null ? void 0 : u.getSectionByTitle(s.value);
    }
  ), { sourceSection: c } = K(), d = Hn(() => {
    var u;
    return (u = c.value) == null ? void 0 : u.html;
  }), g = Hn(() => {
    var u;
    return (u = i.value) == null ? void 0 : u.html;
  }), r = Hn(
    () => {
      var u;
      return (u = n.value) == null ? void 0 : u.missingSections.hasOwnProperty(o.value);
    }
  ), l = Hn(
    () => !r.value && !e.value.includes(s.value)
  );
  return {
    activeSectionTargetTitle: s,
    discardedSections: e,
    isCurrentSectionMapped: l,
    sourceSectionContent: d,
    targetSectionAnchor: a,
    targetSectionContent: g
  };
};
const Ra = window.Vue.createVNode, t5 = window.Vue.toDisplayString, n5 = window.Vue.createElementVNode, bn = window.Vue.unref, za = window.Vue.withCtx, nl = window.Vue.openBlock, ol = window.Vue.createBlock;
window.Vue.createCommentVNode;
const o5 = window.Vue.normalizeClass, s5 = ["lang", "dir", "textContent"], Og = window.Vue.ref, sl = window.Vue.computed, a5 = window.Vue.onMounted, i5 = {
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
    const n = e, o = t, s = Og(!1), { sectionSuggestion: a } = Je(), { sectionURLParameter: i } = B(), c = sl(
      () => (i.value || "").replace(/ /g, "_")
    ), d = (m) => o("update:sourceVsTargetSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: r } = Hc(), l = sl(() => {
      switch (n.sourceVsTargetSelection) {
        case "source_section":
          return {
            title: i.value,
            path: `${q.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${c.value}`,
            lang: a.value.sourceLanguage,
            dir: I.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: u.value,
            lang: a.value.targetLanguage,
            dir: I.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: g.value,
            path: `${u.value}#${r.value}`
          };
      }
    }), u = sl(
      () => q.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = Og(null);
    return a5(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (nl(), ol(bn(P), {
      ref_key: "contentHeader",
      ref: p,
      class: o5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: za(() => [
        Ra(Q3, {
          "is-mapped-section": e.isMappedSection,
          selection: e.sourceVsTargetSelection,
          "onUpdate:selection": d
        }, null, 8, ["is-mapped-section", "selection"]),
        Ra(bn(P), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: za(() => [
            Ra(bn(b), null, {
              default: za(() => [
                n5("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: t5(l.value.title)
                }, null, 8, s5)
              ]),
              _: 1
            }),
            Ra(bn(b), { shrink: "" }, {
              default: za(() => [
                s.value ? (nl(), ol(bn(Te), {
                  key: 0,
                  icon: bn(hi),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (nl(), ol(bn(Te), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: bn(Sm),
                  type: "icon",
                  href: l.value.path,
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
}, Oa = window.Vue.unref, jg = window.Vue.createVNode, r5 = window.Vue.openBlock, l5 = window.Vue.createElementBlock, c5 = { class: "sx-content-comparator__header-navigation flex items-center" }, u5 = window.Vue.computed, d5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = u5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Ei(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[c];
      s(d);
    }, i = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[c];
      s(d);
    };
    return (c, d) => (r5(), l5("div", c5, [
      jg(Oa(Te), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Oa(Zw),
        onClick: a
      }, null, 8, ["icon"]),
      jg(Oa(Te), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Oa(Jw),
        onClick: i
      }, null, 8, ["icon"])
    ]));
  }
};
const Hg = window.Vue.toDisplayString, g5 = window.Vue.resolveDirective, al = window.Vue.withDirectives, fo = window.Vue.openBlock, ja = window.Vue.createElementBlock, p5 = window.Vue.createCommentVNode, m5 = window.Vue.createTextVNode, qg = window.Vue.createElementVNode, h5 = window.Vue.normalizeClass, qn = window.Vue.unref, il = window.Vue.withCtx, rl = window.Vue.createVNode, Gg = window.Vue.createBlock, f5 = { class: "sx-content-comparator-header__mapped-section" }, w5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, _5 = { key: 0 }, v5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, S5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Xg = window.Vue.computed, y5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  props: {
    suggestion: {
      type: Tn,
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
    const n = pe(), o = e, s = t, a = Xg(
      () => o.discardedSections.includes(o.targetSectionTitle)
    ), i = Xg(
      () => n.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        I.getAutonym(o.suggestion.targetLanguage)
      )
    ), c = () => {
      a.value || s("update:discardedSections", [
        ...o.discardedSections,
        o.targetSectionTitle
      ]);
    }, d = () => {
      a.value && s(
        "update:discardedSections",
        o.discardedSections.filter(
          (g) => g !== o.targetSectionTitle
        )
      );
    };
    return (g, r) => {
      const l = g5("i18n");
      return fo(), ja("div", f5, [
        rl(qn(P), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: il(() => [
            rl(qn(b), { grow: "" }, {
              default: il(() => [
                qg("h6", w5, [
                  m5(Hg(i.value) + " ", 1),
                  a.value ? al((fo(), ja("span", _5, null, 512)), [
                    [l, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : p5("", !0)
                ]),
                qg("h6", {
                  class: h5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": a.value
                  }])
                }, Hg(e.targetSectionTitle), 3)
              ]),
              _: 1
            }),
            rl(qn(b), { shrink: "" }, {
              default: il(() => [
                a.value ? (fo(), Gg(qn(Te), {
                  key: 1,
                  class: "pa-0",
                  icon: qn(i0),
                  type: "icon",
                  onClick: d
                }, null, 8, ["icon"])) : (fo(), Gg(qn(Te), {
                  key: 0,
                  class: "pa-0",
                  icon: qn(vm),
                  type: "icon",
                  onClick: c
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        a.value ? al((fo(), ja("p", S5, null, 512)), [
          [l, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : al((fo(), ja("p", v5, null, 512)), [
          [l, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const _e = window.Vue.unref, wo = window.Vue.createVNode, Wg = window.Vue.toDisplayString, ln = window.Vue.createElementVNode, C5 = window.Vue.normalizeClass, ll = window.Vue.withCtx, b5 = window.Vue.resolveDirective, Kg = window.Vue.withDirectives, cl = window.Vue.openBlock, Yg = window.Vue.createBlock, Jg = window.Vue.createCommentVNode, k5 = window.Vue.createElementBlock, x5 = { class: "sx-content-comparator__header pa-4" }, $5 = { class: "row my-1 py-2 mx-0" }, V5 = { class: "sx-content-comparator-header__titles grow" }, E5 = ["lang", "dir"], L5 = ["lang", "dir"], A5 = { class: "py-2 mb-1" }, D5 = /* @__PURE__ */ ln("br", null, null, -1), ds = window.Vue.computed, T5 = window.Vue.inject, B5 = {
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
    const { sectionURLParameter: t } = B(), { sourceSection: n } = K(), { sectionSuggestion: o } = Je(), s = ds(
      () => {
        var l;
        return (l = o.value) == null ? void 0 : l.missingSections.hasOwnProperty(t.value);
      }
    ), a = ds(
      () => {
        var l;
        return (l = o.value) == null ? void 0 : l.presentSections.hasOwnProperty(t.value);
      }
    ), { activeSectionTargetTitle: i } = Hc(), c = ds(() => {
      var l;
      return (l = n.value) == null ? void 0 : l.html;
    }), d = ds(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), g = T5("breakpoints"), r = ds(() => g.value.mobile);
    return (l, u) => {
      const p = b5("i18n");
      return cl(), k5("div", x5, [
        wo(_e(Te), {
          class: "py-2 pa-0",
          icon: _e(Qw),
          label: l.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: u[0] || (u[0] = (m) => l.$emit("close"))
        }, null, 8, ["icon", "label"]),
        ln("div", $5, [
          ln("div", {
            class: C5(["flex grow", r.value ? "col-12" : "me-6"])
          }, [
            ln("div", V5, [
              ln("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: _e(o).sourceLanguage,
                dir: _e(I.getDir)(_e(o).sourceLanguage)
              }, Wg(_e(o).sourceTitle), 9, E5),
              ln("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: _e(o).sourceLanguage,
                dir: _e(I.getDir)(_e(o).sourceLanguage)
              }, Wg(_e(t)), 9, L5)
            ]),
            wo(d5, { "section-source-titles": d.value }, null, 8, ["section-source-titles"])
          ], 2),
          ln("div", A5, [
            wo(_e(Te), {
              icon: _e(hi),
              progressive: "",
              label: l.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !c.value,
              onClick: u[1] || (u[1] = (m) => l.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (cl(), Yg(_e(P), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: ll(() => [
            wo(_e(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: ll(() => [
                wo(_e(Pe), { icon: _e(s0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            wo(_e(b), { class: "ma-0" }, {
              default: ll(() => [
                Kg(ln("strong", null, null, 512), [
                  [p, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                D5,
                Kg(ln("span", null, null, 512), [
                  [p, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Jg("", !0),
        a.value ? (cl(), Yg(y5, {
          key: 1,
          suggestion: _e(o),
          "target-section-title": _e(i),
          "discarded-sections": e.discardedSections,
          "onUpdate:discardedSections": u[2] || (u[2] = (m) => l.$emit("update:discardedSections", m))
        }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : Jg("", !0)
      ]);
    };
  }
};
const Zg = window.Vue.toDisplayString, P5 = window.Vue.createElementVNode, Qg = window.Vue.openBlock, ep = window.Vue.createElementBlock, F5 = window.Vue.createCommentVNode, M5 = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, N5 = ["textContent"], U5 = ["textContent"], of = {
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
    return (t, n) => (Qg(), ep("section", M5, [
      P5("h5", {
        textContent: Zg(e.placeholderTitle)
      }, null, 8, N5),
      e.placeholderSubtitle ? (Qg(), ep("p", {
        key: 0,
        textContent: Zg(e.placeholderSubtitle)
      }, null, 8, U5)) : F5("", !0)
    ]));
  }
}, I5 = window.Vue.computed, R5 = window.Vue.createApp, z5 = window.Vuex.useStore, O5 = () => {
  const e = z5(), { sectionSuggestion: t } = Je(), { currentTargetPage: n } = Ze(), o = pe(), s = () => R5(
    of,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), i = (c) => {
    const d = c.getElementsByTagName("base");
    Array.from(d).forEach(
      (g) => g.parentNode.removeChild(g)
    );
  };
  return I5(() => {
    var r;
    const c = document.createElement("div");
    c.innerHTML = (r = n.value) == null ? void 0 : r.content, i(c);
    const d = s(), g = a(
      t.value
    );
    if (g) {
      const l = Array.from(
        c.querySelectorAll("h2")
      ).filter((u) => u.textContent.match(g));
      if (l && l.length) {
        const u = l[0].parentNode;
        u.parentNode.insertBefore(
          d,
          u
        );
      }
    } else
      c.appendChild(d);
    return c.innerHTML;
  });
};
const $e = window.Vue.unref, j5 = window.Vue.isRef, ul = window.Vue.createVNode, _o = window.Vue.openBlock, tp = window.Vue.createBlock, np = window.Vue.createCommentVNode, Ha = window.Vue.createElementVNode, dl = window.Vue.Fragment, qa = window.Vue.createElementBlock, H5 = { class: "sx-content-comparator" }, q5 = { class: "sx-content-comparator__source-content" }, G5 = ["lang", "dir", "innerHTML"], X5 = ["lang", "dir", "innerHTML"], W5 = ["innerHTML"], K5 = window.Vue.ref, Y5 = window.Vue.computed, J5 = window.Vue.watch, Z5 = window.Vuex.useStore, Q5 = {
  __name: "SXContentComparator",
  setup(e) {
    Z5();
    const t = ke(), n = K5("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = jc(), {
      sourceLanguageURLParameter: a,
      targetLanguageURLParameter: i,
      pageURLParameter: c,
      sectionURLParameter: d
    } = B(), {
      activeSectionTargetTitle: g,
      discardedSections: r,
      isCurrentSectionMapped: l,
      sourceSectionContent: u,
      targetSectionContent: p
    } = Hc(), m = O5(), { sectionSuggestion: h } = Je(), f = Y5(() => h.value.targetTitle), _ = Rc();
    return J5(
      f,
      () => _(
        i.value,
        a.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, S) => (_o(), qa("section", H5, [
      ul(B5, {
        "discarded-sections": $e(r),
        "onUpdate:discardedSections": S[0] || (S[0] = (y) => j5(r) ? r.value = y : null),
        onTranslationButtonClicked: $e(s),
        onClose: o
      }, null, 8, ["discarded-sections", "onTranslationButtonClicked"]),
      ul(i5, {
        "source-vs-target-selection": n.value,
        "onUpdate:sourceVsTargetSelection": S[1] || (S[1] = (y) => n.value = y),
        "is-mapped-section": $e(l),
        onTranslationButtonClicked: $e(s)
      }, null, 8, ["source-vs-target-selection", "is-mapped-section", "onTranslationButtonClicked"]),
      Ha("section", q5, [
        n.value === "source_section" ? (_o(), qa(dl, { key: 0 }, [
          $e(u) ? np("", !0) : (_o(), tp($e(Xe), { key: 0 })),
          Ha("section", {
            lang: $e(a),
            dir: $e(I.getDir)($e(a)),
            class: "pt-2 px-4",
            innerHTML: $e(u)
          }, null, 8, G5)
        ], 64)) : n.value === "target_article" ? (_o(), qa(dl, { key: 1 }, [
          $e(m) ? np("", !0) : (_o(), tp($e(Xe), { key: 0 })),
          Ha("article", {
            lang: $e(i),
            dir: $e(I.getDir)($e(i)),
            class: "px-4",
            innerHTML: $e(m)
          }, null, 8, X5)
        ], 64)) : (_o(), qa(dl, { key: 2 }, [
          Ha("section", {
            class: "pa-4",
            innerHTML: $e(p)
          }, null, 8, W5),
          ul(of, {
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
const eE = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: Q5
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
  const i = tE("sx-content-comparator");
  return sE(), aE("main", {
    class: oE(["sx-content-comparator-view", a.classes])
  }, [
    nE(i)
  ], 2);
}
const rE = /* @__PURE__ */ J(eE, [["render", iE]]);
const lE = window.Vue.resolveDirective, gs = window.Vue.createElementVNode, op = window.Vue.withDirectives, Ga = window.Vue.unref, gl = window.Vue.createVNode, sp = window.Vue.toDisplayString, ap = window.Vue.createTextVNode, ps = window.Vue.withCtx, cE = window.Vue.openBlock, uE = window.Vue.createBlock, dE = { class: "mw-ui-dialog__header px-4 py-3" }, gE = { class: "mw-ui-dialog__header-title" }, pE = { class: "pa-4" }, mE = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, ip = window.Codex.CdxButton, hE = {
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
      const d = lE("i18n");
      return cE(), uE(Ga(ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ps(() => [
          gs("div", dE, [
            op(gs("span", gE, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ps(() => [
          gs("div", mE, [
            gl(Ga(ip), {
              weight: "quiet",
              onClick: s
            }, {
              default: ps(() => [
                ap(sp(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            gl(Ga(ip), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ps(() => [
                ap(sp(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ps(() => [
          gl(Ga(mi)),
          gs("div", pE, [
            op(gs("span", null, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, fE = window.Vuex.useStore, qc = () => {
  const e = fE(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = pn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = tf(), i = (r, l, u) => {
    if (r === 0) {
      t.value.proposedTitleTranslations[l] = u;
      return;
    }
    const p = t.value.getContentTranslationUnitById(r);
    p instanceof qe ? p.blockTemplateProposedTranslations[l] = u : p instanceof An && p.addProposedTranslation(l, u);
  }, c = (r, l) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, r))
      return "";
    try {
      const p = yield a();
      return yield lt.fetchSegmentTranslation(
        o.value,
        s.value,
        r,
        l,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), d = (r, l) => C(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      r,
      l
    ))
      return;
    let u = t.value.getOriginalContentByTranslationUnitId(r);
    const p = t.value.getContentTranslationUnitById(r);
    let m;
    if (e.commit("application/addMtRequestsPending", r), m = yield c(l, u), !m) {
      e.commit("application/removeMtRequestsPending", r);
      return;
    }
    p instanceof qe && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield o4(
      m,
      n(s.value, o.value),
      s.value
    )) || ""), i(
      r,
      l,
      m
    ), e.commit("application/removeMtRequestsPending", r);
  });
  return {
    translateTranslationUnitById: d,
    translateSelectedTranslationUnitForAllProviders: () => {
      const r = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: l } = t.value;
      r.forEach(
        (u) => d(l, u)
      );
    }
  };
}, wE = window.Vuex.useStore, _E = () => {
  const { sourceSection: e } = K(), t = wE(), { translateTranslationUnitById: n } = qc();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
const vE = window.Vue.resolveDirective, at = window.Vue.createElementVNode, Xa = window.Vue.withDirectives, ze = window.Vue.unref, pl = window.Vue.createVNode, kn = window.Vue.withCtx, SE = window.Vue.renderList, yE = window.Vue.Fragment, ml = window.Vue.openBlock, CE = window.Vue.createElementBlock, bE = window.Vue.toDisplayString, rp = window.Vue.createBlock, kE = window.Vue.createCommentVNode, xE = { class: "mw-ui-dialog__header pa-4" }, $E = { class: "row ma-0 py-2" }, VE = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, EE = { class: "mb-0" }, LE = { class: "col shrink justify-center" }, AE = { class: "pb-2 mb-0" }, DE = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, TE = ["dir", "lang", "innerHTML"], BE = ["textContent"], PE = ["innerHTML"], FE = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, ME = /* @__PURE__ */ at("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), hl = window.Vue.computed, NE = window.Vuex.useStore, UE = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = Y.EMPTY_TEXT_PROVIDER_KEY, s = Y.ORIGINAL_TEXT_PROVIDER_KEY, a = NE(), {
      sourceSection: i,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: d
    } = K(), {
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: r
    } = B(), l = hl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        r.value
      )
    ), u = hl(() => {
      const w = [s, o];
      return l.value.filter(
        (S) => !w.includes(S)
      );
    }), p = hl(
      () => c.value ? i.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = _E(), h = (w) => {
      m(w), _();
    }, f = Y.getMTProviderLabel, _ = () => n("update:active", !1);
    return (w, S) => {
      const y = vE("i18n");
      return e.active ? (ml(), rp(ze(ct), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: kn(() => [
          at("div", xE, [
            at("div", $E, [
              at("div", VE, [
                Xa(at("h4", EE, null, 512), [
                  [y, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              at("div", LE, [
                pl(ze(Te), {
                  type: "icon",
                  icon: ze(Is),
                  class: "pa-0",
                  onClick: _
                }, null, 8, ["icon"])
              ])
            ]),
            Xa(at("h6", AE, null, 512), [
              [y, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: kn(() => [
          pl(ze(Ge), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (k) => h(ze(s)))
          }, {
            header: kn(() => [
              Xa(at("h5", DE, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: kn(() => [
              at("p", {
                dir: ze(I.getDir)(ze(g)),
                lang: ze(g),
                innerHTML: p.value[ze(s)]
              }, null, 8, TE)
            ]),
            _: 1
          }),
          (ml(!0), CE(yE, null, SE(u.value, (k) => (ml(), rp(ze(Ge), {
            key: k,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (x) => h(k)
          }, {
            header: kn(() => [
              at("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: bE(ze(f)(k))
              }, null, 8, BE)
            ]),
            default: kn(() => [
              at("p", {
                innerHTML: p.value[k]
              }, null, 8, PE)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          pl(ze(Ge), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (k) => h(ze(o)))
          }, {
            header: kn(() => [
              Xa(at("h5", FE, null, 512), [
                [y, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: kn(() => [
              ME
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : kE("", !0);
    };
  }
}, IE = window.Vuex.useStore, Uo = () => {
  const { sourceSection: e } = K(), t = IE(), { translateTranslationUnitById: n } = qc(), { currentMTProvider: o } = ue(t), s = (c) => C(void 0, null, function* () {
    e.value.selectTranslationUnitById(c), yield n(c, o.value);
    const { followingTranslationUnit: d } = e.value;
    d && (yield n(
      d.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: c } = e.value;
      return c ? s(c.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: c, contentTranslationUnits: d } = e.value, g = c - 1;
      let r = 0;
      return g > -1 && (r = d[g].id), s(r);
    },
    selectTranslationUnitById: s
  };
};
const RE = window.Vue.toDisplayString, fl = window.Vue.createElementVNode, wl = window.Vue.unref, zE = window.Vue.createVNode, OE = window.Vue.normalizeClass, jE = window.Vue.withCtx, HE = window.Vue.openBlock, qE = window.Vue.createBlock, GE = ["href"], XE = ["textContent"], WE = ["innerHTML"], vo = window.Vue.computed, KE = window.Vuex.useStore, lp = "sx-sentence-selector__section-title", YE = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const t = KE(), { sourceSection: n, isSectionTitleSelected: o } = K(), { currentSourcePage: s } = Ze(), { sourceLanguage: a } = ue(t), i = vo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.title;
    }), c = vo(
      () => {
        var m;
        return ((m = n.value) == null ? void 0 : m.title) || i.value;
      }
    ), d = vo(
      () => q.getPageUrl(a.value, i.value)
    ), g = vo(
      () => {
        var m;
        return !!((m = n.value) != null && m.translatedTitle);
      }
    ), r = vo(
      () => g.value ? "translated" : "selected"
    ), l = vo(() => {
      const m = [lp];
      return o.value && m.push(`${lp}--${r.value}`), m;
    }), { selectTranslationUnitById: u } = Uo(), p = () => u(0);
    return (m, h) => (HE(), qE(wl(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: jE(() => [
        fl("a", {
          href: d.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          fl("strong", {
            textContent: RE(i.value)
          }, null, 8, XE),
          zE(wl(Pe), {
            icon: wl(Sm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, GE),
        fl("h2", {
          class: OE(["pa-0 ma-0", l.value]),
          onClick: p,
          innerHTML: c.value
        }, null, 10, WE)
      ]),
      _: 1
    }));
  }
};
const Ft = window.Vue.unref, ms = window.Vue.createVNode, Wa = window.Vue.withCtx, cp = window.Vue.toDisplayString, up = window.Vue.createTextVNode, JE = window.Vue.openBlock, ZE = window.Vue.createBlock, QE = window.Vue.computed, _l = window.Codex.CdxButton, dp = window.Codex.CdxIcon, sf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = K(), s = QE(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, i) => (JE(), ZE(Ft(P), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Wa(() => [
        ms(Ft(_l), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Ft(n),
          onClick: i[0] || (i[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: Wa(() => [
            ms(Ft(dp), {
              class: "me-1",
              icon: Ft(Mc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ms(Ft(_l), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Ft(o),
          onClick: i[1] || (i[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: Wa(() => [
            up(cp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ms(Ft(_l), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: i[2] || (i[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: Wa(() => [
            up(cp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ms(Ft(dp), {
              class: "ms-1",
              size: "small",
              icon: Ft(Ws)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Gn = window.Vue.unref, eL = window.Vue.toDisplayString, hs = window.Vue.createVNode, Ka = window.Vue.withCtx, tL = window.Vue.openBlock, nL = window.Vue.createBlock, vl = window.Vue.computed, oL = window.Vuex.useStore, sL = window.Codex.CdxButton, aL = window.Codex.CdxIcon, iL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = oL(), n = vl(() => t.state.application.currentMTProvider), o = pe(), s = vl(() => ({
      [Y.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [Y.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = vl(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        Y.getMTProviderLabel(n.value)
      )
    );
    return (i, c) => (tL(), nL(Gn(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ka(() => [
        hs(Gn(P), { class: "ma-0 ps-5 pb-4" }, {
          default: Ka(() => [
            hs(Gn(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: eL(a.value)
            }, null, 8, ["textContent"]),
            hs(Gn(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ka(() => [
                hs(Gn(sL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (d) => i.$emit("configure-options"))
                }, {
                  default: Ka(() => [
                    hs(Gn(aL), {
                      class: "pa-0",
                      icon: Gn(Pc)
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
const yt = window.Vue.unref, xn = window.Vue.createVNode, rL = window.Vue.resolveDirective, gp = window.Vue.createElementVNode, lL = window.Vue.withDirectives, pp = window.Vue.toDisplayString, mp = window.Vue.createTextVNode, fs = window.Vue.withCtx, cL = window.Vue.openBlock, uL = window.Vue.createElementBlock, dL = { class: "mt-retry-body pb-5" }, gL = { class: "retry-body__message" }, hp = window.Codex.CdxButton, Sl = window.Codex.CdxIcon, pL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = rL("i18n");
      return cL(), uL("div", dL, [
        gp("div", gL, [
          xn(yt(Sl), {
            class: "me-2",
            icon: yt(xh)
          }, null, 8, ["icon"]),
          lL(gp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        xn(yt(P), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: fs(() => [
            xn(yt(b), { cols: "6" }, {
              default: fs(() => [
                xn(yt(hp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: fs(() => [
                    xn(yt(Sl), {
                      class: "me-1",
                      icon: yt(Bh)
                    }, null, 8, ["icon"]),
                    mp(" " + pp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            xn(yt(b), { cols: "6" }, {
              default: fs(() => [
                xn(yt(hp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: fs(() => [
                    xn(yt(Sl), {
                      class: "me-1",
                      icon: yt(Vb)
                    }, null, 8, ["icon"]),
                    mp(" " + pp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const So = window.Vue.createVNode, Oe = window.Vue.unref, ws = window.Vue.openBlock, mL = window.Vue.createElementBlock, hL = window.Vue.createCommentVNode, Ya = window.Vue.createBlock, fL = window.Vue.normalizeClass, wL = window.Vue.normalizeStyle, _s = window.Vue.withCtx, _L = window.Vue.toDisplayString, vL = window.Vue.createTextVNode, SL = window.Vue.normalizeProps, yL = window.Vue.guardReactiveProps, CL = ["lang", "dir", "innerHTML"], yl = window.Vue.ref, bL = window.Vue.onMounted, kL = window.Vue.onBeforeUnmount, Cl = window.Vue.computed, xL = window.Vue.nextTick, $L = window.Vuex.useStore, VL = window.Codex.CdxButton, EL = window.Codex.CdxIcon, LL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = yl(0), n = yl(null), o = yl(null), s = $L(), { currentMTProvider: a } = ue(s), { targetLanguageURLParameter: i } = B(), { sourceSection: c, currentProposedTranslation: d } = K(), g = Cl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), r = Cl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = Cl(
      () => !!d.value || a.value === Y.EMPTY_TEXT_PROVIDER_KEY
    ), u = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    bL(() => C(this, null, function* () {
      yield xL(), u(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), kL(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => u());
    return (m, h) => (ws(), Ya(Oe(Ge), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: _s(() => [
        So(Oe(P), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: _s(() => [
            So(iL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            So(Oe(b), {
              class: fL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && g.value
              }]),
              style: wL(l.value ? r.value : null)
            }, {
              default: _s(() => [
                l.value ? (ws(), mL("section", {
                  key: 0,
                  lang: Oe(i),
                  dir: Oe(I.getDir)(Oe(i)),
                  innerHTML: Oe(d)
                }, null, 8, CL)) : g.value ? (ws(), Ya(Oe(Xe), { key: 1 })) : (ws(), Ya(pL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            So(Oe(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: _s(() => [
                l.value || g.value ? (ws(), Ya(Oe(VL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", Oe(d)))
                }, {
                  default: _s(() => [
                    So(Oe(EL), {
                      class: "me-1",
                      icon: Oe(Bc)
                    }, null, 8, ["icon"]),
                    vL(" " + _L(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : hL("", !0),
                So(sf, SL(yL(m.$attrs)), null, 16)
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
}, AL = window.Vue.computed, DL = (e) => AL(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const i = ["untranslated", "translated", "selected"].map(
      (d) => `${t}--${d}`
    );
    s.classList.remove(...i), a.selected && s.classList.add(`${t}--selected`);
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const TL = window.Vue.unref, BL = window.Vue.normalizeClass, PL = window.Vue.openBlock, FL = window.Vue.createElementBlock, ML = ["innerHTML"], NL = window.Vue.onMounted, UL = window.Vue.ref, IL = window.Vue.computed, RL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: qe,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = UL(null), a = DL(n.subSection);
    NL(() => {
      s.value.addEventListener("click", (g) => {
        let r;
        if (n.subSection.isBlockTemplate)
          r = n.subSection;
        else {
          const l = g.composedPath().find(
            (u) => u instanceof Element && u.classList.contains("cx-segment")
          );
          if (!l)
            return;
          r = n.subSection.getSentenceById(
            l.dataset.segmentid
          );
        }
        c(r);
      });
    });
    const { selectTranslationUnitById: i } = Uo(), c = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      i(g.id);
    }, d = IL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, r) => (PL(), FL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: BL(["sx-sentence-selector__subsection", d.value]),
      innerHTML: TL(a)
    }, null, 10, ML));
  }
};
const fp = window.Vue.unref, wp = window.Vue.createVNode, _p = window.Vue.normalizeStyle, zL = window.Vue.openBlock, OL = window.Vue.createElementBlock, vp = window.Vue.computed, af = {
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
    const t = e, n = vp(() => ({ "--size": t.size })), o = vp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? ym : ci
    );
    return (s, a) => (zL(), OL("div", {
      class: "block-template-status-indicator",
      style: _p(n.value)
    }, [
      wp(fp(H1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      wp(fp(Pe), {
        icon: o.value,
        size: e.size / 2,
        style: _p({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
}, vs = window.Vue.openBlock, Ja = window.Vue.createBlock;
window.Vue.createCommentVNode;
const tn = window.Vue.unref, yo = window.Vue.withCtx, Ss = window.Vue.createVNode, bl = window.Vue.toDisplayString, kl = window.Vue.createElementVNode, jL = window.Vue.renderList, HL = window.Vue.Fragment, qL = window.Vue.createElementBlock, GL = { class: "pa-4" }, XL = ["textContent"], WL = ["textContent"], KL = window.Vuex.useStore, Za = window.Vue.computed, YL = {
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
    const t = e, { targetLanguageAutonym: n } = ue(KL()), o = Za(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = pe(), a = Za(() => {
      let d;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? d = "cx-sx-block-template-mapping-status-title-partially-template" : d = "cx-sx-block-template-mapping-status-title-fully-template" : d = "cx-sx-block-template-mapping-status-title-unadapted-template" : d = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(d);
    }), i = Za(() => {
      let d;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? d = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? d = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : d = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(d);
    }), c = Za(() => {
      let d = [];
      if (!t.targetTemplateExists)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: u0,
          color: it.gray500
        });
      else if (!t.isTemplateAdapted)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Is,
          color: it.gray500
        });
      else if (o.value < 100)
        d.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: ci,
          color: it.blue600
        });
      else {
        let g;
        t.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : g = s.i18n("cx-sx-block-template-no-source-params-text"), d.push({
          text: g,
          icon: ci,
          color: it.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: hi,
        color: it.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && d.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: Gw,
        color: it.gray500
      }), d;
    });
    return (d, g) => (vs(), Ja(tn(ct), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: d.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (r) => d.$emit("update:active", r))
    }, {
      header: yo(() => [
        Ss(tn(P), {
          justify: "center",
          class: "mt-4"
        }, {
          default: yo(() => [
            Ss(tn(b), { shrink: "" }, {
              default: yo(() => [
                e.targetTemplateExists ? (vs(), Ja(af, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (vs(), Ja(tn(Pe), {
                  key: 1,
                  icon: tn(Xw)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: yo(() => [
        kl("div", GL, [
          kl("h3", {
            textContent: bl(a.value)
          }, null, 8, XL),
          kl("p", {
            class: "mt-6 text-small",
            textContent: bl(i.value)
          }, null, 8, WL),
          (vs(!0), qL(HL, null, jL(c.value, (r, l) => (vs(), Ja(tn(P), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: yo(() => [
              Ss(tn(b), { shrink: "" }, {
                default: yo(() => [
                  Ss(tn(Pe), {
                    class: "me-2",
                    icon: r.icon,
                    "icon-color": r.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Ss(tn(b), {
                textContent: bl(r.text)
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
const be = window.Vue.unref, Ae = window.Vue.createVNode, Mt = window.Vue.withCtx, xl = window.Vue.toDisplayString, Sp = window.Vue.createTextVNode, JL = window.Vue.resolveDirective, yp = window.Vue.withDirectives, Cp = window.Vue.createElementVNode, ZL = window.Vue.normalizeClass, Qa = window.Vue.openBlock, bp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const kp = window.Vue.createBlock, QL = window.Vue.normalizeProps, eA = window.Vue.guardReactiveProps, tA = { class: "block-template-adaptation-card__container pa-4" }, nA = ["textContent"], oA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Me = window.Vue.computed, sA = window.Vue.ref, aA = window.Vuex.useStore, xp = window.Codex.CdxButton, $p = window.Codex.CdxIcon, iA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = aA(), { targetLanguageAutonym: n, currentMTProvider: o } = ue(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = K(), i = Me(() => {
      var F;
      return ((F = s.value) == null ? void 0 : F.blockTemplateTranslatedContent) || a.value;
    }), c = Me(
      () => {
        var V;
        return (V = s.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = Me(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          s.value.id
        ));
      }
    ), g = pe(), r = Me(
      // Strip HTML comments and return
      () => {
        var V, F;
        return ((F = (V = s.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : F.replace(
          /<\!--.*?-->/g,
          ""
        )) || g.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), l = Me(
      () => {
        var V, F;
        return (F = (V = s.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : F[o.value];
      }
    ), u = Me(
      () => {
        var V, F;
        return ((V = l.value) == null ? void 0 : V.adapted) || !!((F = l.value) != null && F.partial);
      }
    ), p = Me(() => l.value ? "block-template-adaptation-card__body--" + (u.value ? "success" : "warning") : null), m = Me(() => l.value ? u.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), h = Me(
      () => {
        var V;
        return Object.keys(((V = s.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), f = Me(() => {
      var F;
      const V = (F = s.value) == null ? void 0 : F.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(V || {});
    }), _ = Me(() => f.value.length), w = Me(() => {
      const V = x.value;
      return h.value + V === 0 ? 100 : _.value / (h.value + V) * 100 || 0;
    }), S = sA(!1), y = () => {
      S.value = !0;
    }, k = (V) => V.filter((F) => !f.value.includes(F)), x = Me(() => {
      var F;
      const V = ((F = l.value) == null ? void 0 : F.mandatoryTargetParams) || [];
      return k(V).length;
    }), T = Me(() => {
      var F;
      const V = ((F = l.value) == null ? void 0 : F.optionalTargetParams) || [];
      return k(V).length;
    });
    return (V, F) => {
      const N = JL("i18n");
      return Qa(), kp(be(Ge), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Mt(() => [
          Cp("div", tA, [
            Ae(be(P), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Mt(() => [
                Ae(be(b), { shrink: "" }, {
                  default: Mt(() => [
                    Ae(be($p), {
                      icon: be(Eb),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                Ae(be(b), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Mt(() => [
                    Sp(xl(r.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Qa(), bp("div", {
              key: 0,
              class: ZL(["pa-4 mb-4", p.value])
            }, [
              Ae(be(P), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Mt(() => [
                  yp(Ae(be(b), { tag: "h5" }, null, 512), [
                    [N, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  Ae(be(b), { shrink: "" }, {
                    default: Mt(() => [
                      Ae(af, {
                        percentage: w.value,
                        size: 20,
                        "is-template-adapted": u.value,
                        "stroke-width": 2,
                        onClick: y
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Cp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: xl(c.value)
              }, null, 8, nA),
              Ae(be(xp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: F[0] || (F[0] = (M) => V.$emit("edit-translation", i.value))
              }, {
                default: Mt(() => [
                  Sp(xl(m.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Qa(), bp("div", oA, [
              Ae(be(P), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Mt(() => [
                  yp(Ae(be(b), { tag: "h5" }, null, 512), [
                    [N, [
                      be(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  Ae(be(b), { shrink: "" }, {
                    default: Mt(() => [
                      Ae(be(xp), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Mt(() => [
                          Ae(be($p), {
                            icon: be(xb),
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
            ])) : (Qa(), kp(be(Xe), { key: 2 }))
          ]),
          Ae(sf, QL(eA(V.$attrs)), null, 16),
          Ae(YL, {
            active: S.value,
            "onUpdate:active": F[1] || (F[1] = (M) => S.value = M),
            "source-params-count": h.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": x.value,
            "optional-missing-params-count": T.value,
            "is-template-adapted": u.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const rA = window.Vue.unref, lA = window.Vue.createVNode, cA = window.Vue.openBlock, uA = window.Vue.createElementBlock, dA = { class: "translated-segment-card-header" }, gA = window.Vue.computed, pA = {
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
    const n = t, { isSectionTitleSelected: o } = K(), s = pe(), a = gA(() => [
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
    ]), i = (c) => n("update:selection", c);
    return (c, d) => (cA(), uA("div", dA, [
      lA(rA(Us), {
        items: a.value,
        active: e.selection,
        onSelect: i
      }, null, 8, ["items", "active"])
    ]));
  }
};
const $n = window.Vue.unref, ei = window.Vue.createVNode, $l = window.Vue.withCtx, mA = window.Vue.openBlock, hA = window.Vue.createBlock, fA = window.Vue.computed, Vp = window.Codex.CdxButton, Ep = window.Codex.CdxIcon, wA = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "skip-translation"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = K(), o = fA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (mA(), hA($n(P), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: $l(() => [
        ei($n(Vp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: $n(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: $l(() => [
            ei($n(Ep), { icon: $n(Mc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ei($n(Vp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (i) => s.$emit("skip-translation"))
        }, {
          default: $l(() => [
            ei($n(Ep), { icon: $n(Ws) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
};
const _A = window.Vue.useCssVars, De = window.Vue.createVNode, Lp = window.Vue.resolveDirective, vA = window.Vue.createElementVNode, Vl = window.Vue.withDirectives, ge = window.Vue.unref, SA = window.Vue.normalizeStyle, ti = window.Vue.openBlock, Ap = window.Vue.createElementBlock, yA = window.Vue.createCommentVNode, CA = window.Vue.normalizeClass, ot = window.Vue.withCtx, bA = window.Vue.toDisplayString, kA = window.Vue.createTextVNode, Dp = window.Vue.createBlock, xA = window.Vue.normalizeProps, $A = window.Vue.guardReactiveProps, nn = window.Vue.computed, VA = window.Vue.ref, EA = window.Vue.inject, LA = window.Vuex.useStore, AA = window.Codex.CdxButton, El = window.Codex.CdxIcon, DA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    _A((w) => ({
      "4929555c": _.value
    }));
    const t = VA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = K(), { targetLanguage: a } = ue(LA()), i = nn(() => t.value === "sentence"), c = nn(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (S) => {
            var y;
            return S.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), d = nn(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), g = EA("colors"), r = g.gray200, l = g.red600, u = nn(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : c.value.translatedContent), p = nn(
      () => Rt.calculateScore(
        u.value,
        d.value,
        a.value
      )
    ), m = nn(
      () => Rt.getScoreStatus(p.value)
    ), h = nn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = nn(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), _ = nn(
      () => f.value[m.value]
    );
    return (w, S) => {
      const y = Lp("i18n"), k = Lp("i18n-html");
      return ti(), Dp(ge(Ge), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ot(() => [
          De(ge(P), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ot(() => [
              De(pA, {
                selection: t.value,
                "onUpdate:selection": S[0] || (S[0] = (x) => t.value = x)
              }, null, 8, ["selection"]),
              De(ge(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ot(() => [
                  De(ge(P), { class: "ma-0" }, {
                    default: ot(() => [
                      De(ge(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ot(() => [
                          Vl(vA("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Vl((ti(), Ap("p", {
                            key: 0,
                            style: SA({ color: ge(l) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Vl((ti(), Ap("p", {
                            key: 1,
                            class: CA(h.value)
                          }, null, 2)), [
                            [k, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      De(ge(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ot(() => [
                          De(ge(P), { class: "ma-0 ms-2" }, {
                            default: ot(() => [
                              De(ge(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ot(() => [
                                  De(ge(El), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ge(Tb)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              De(ge(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ot(() => [
                                  De(ge(bm), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: _.value,
                                    background: ge(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              De(ge(b), { shrink: "" }, {
                                default: ot(() => [
                                  De(ge(El), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ge(Lb)
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
                  i.value ? (ti(), Dp(ge(AA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: S[1] || (S[1] = (x) => w.$emit("edit-translation", u.value))
                  }, {
                    default: ot(() => [
                      De(ge(El), {
                        class: "me-1",
                        icon: ge(Bc)
                      }, null, 8, ["icon"]),
                      kA(" " + bA(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : yA("", !0)
                ]),
                _: 1
              }),
              De(ge(b), { class: "translated-segment-card__actions" }, {
                default: ot(() => [
                  De(wA, xA($A(w.$attrs)), null, 16)
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
}, TA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = K(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Uo(), { currentTranslation: s } = Ot();
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
}, rf = window.Vuex.useStore, BA = () => {
  const e = rf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = yield ki.fetchSupportedMTProviders(
      t.value,
      n.value
    );
    e.commit("mediawiki/addMtProviderGroup", o);
  });
}, PA = () => {
  const e = rf(), { currentMTProvider: t } = ue(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = BA();
  return () => C(void 0, null, function* () {
    e.commit("application/increaseTranslationDataLoadingCounter"), yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = Y.getStorageKey(
        n.value,
        o.value
      ), c = mw.storage.get(i) || a[0];
      e.commit("application/setCurrentMTProvider", c);
    }
    e.commit("application/decreaseTranslationDataLoadingCounter");
  });
}, FA = window.Vue.computed, MA = (e) => {
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
}, NA = () => {
  const { selectedContentTranslationUnit: e } = K(), t = FA(
    () => e.value instanceof qe
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && MA(o);
  };
}, UA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (c) => !Y.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, IA = window.Vue.computed, lf = () => {
  const { currentTranslation: e } = Ot(), { currentSourcePage: t } = Ze();
  return IA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, RA = window.Vuex.useStore, Gc = () => {
  const e = RA(), { sourceSection: t, targetPageTitleForPublishing: n } = K(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), i = lf();
  return () => {
    const c = n.value, d = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${i.value}_${t.value.id}`, r = t.value.getParallelCorporaUnits(g);
    r.forEach(
      (p) => UA(p, d)
    );
    const l = t.value.getTranslationProgress(a), u = e.getters["application/isSandboxTarget"];
    return lt.saveTranslation({
      sourceTitle: o.value,
      targetTitle: c,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: i.value,
      units: r.map((p) => p.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: g,
      isSandbox: u,
      progress: l
    });
  };
}, zA = window.Vue.effectScope, OA = window.Vue.onScopeDispose, jA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = zA(!0), n = o.run(() => e(...a))), OA(s), n);
}, HA = window.Vuex.useStore;
let Ll;
const qA = () => {
  const e = HA(), t = Gc();
  let n = 1e3, o = 0;
  return Ll = Nc(() => t().then((a) => {
    a instanceof Ao ? (n *= o + 1, o++, setTimeout(Ll, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Bo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Ll;
}, cf = jA(qA), GA = window.Vuex.useStore, XA = () => {
  const e = GA(), t = cf(), { currentMTProvider: n } = ue(e), { sourceSection: o, currentProposedTranslation: s } = K(), { selectNextTranslationUnit: a } = Uo();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, WA = window.Vuex.useStore, KA = () => {
  const e = WA(), t = cf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, YA = window.Vuex.useStore, JA = window.Vue.computed, uf = () => {
  const e = YA(), t = ke(), { currentTranslation: n } = Ot(), { currentMTProvider: o, previousRoute: s } = ue(e), { currentTargetPage: a } = Ze(), {
    sourceLanguageURLParameter: i,
    targetLanguageURLParameter: c,
    pageURLParameter: d,
    sectionURLParameter: g
  } = B(), r = Ye(), l = JA(() => {
    var _;
    const f = {
      translation_source_language: i.value,
      translation_target_language: c.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: d.value
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
    return o.value && (f.translation_provider = Y.getProviderForInstrumentation(o.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      var y;
      const f = t.currentRoute.value.meta.workflowStep, w = t.getRoutes().find(
        (k) => k.name === s.value
      ), S = ((y = w == null ? void 0 : w.meta) == null ? void 0 : y.workflowStep) || 0;
      return f > S ? r(de({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => r(de({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => r(de({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => r(de({
      event_type: "editor_segment_add"
    }, l.value))
  };
};
const ae = window.Vue.unref, st = window.Vue.createVNode, on = window.Vue.withCtx, ZA = window.Vue.resolveDirective, Tp = window.Vue.createElementVNode, QA = window.Vue.withDirectives, eD = window.Vue.toDisplayString, tD = window.Vue.createTextVNode, nD = window.Vue.renderList, oD = window.Vue.Fragment, Vn = window.Vue.openBlock, Bp = window.Vue.createElementBlock, Co = window.Vue.createBlock;
window.Vue.createCommentVNode;
const sD = window.Vue.normalizeClass, aD = window.Vue.normalizeStyle, iD = { class: "sx-sentence-selector__header-title mb-0" }, rD = { class: "sx-sentence-selector__section-contents px-4" }, bo = window.Vue.computed, lD = window.Vue.nextTick, cD = window.Vue.onMounted, ni = window.Vue.ref, Pp = window.Vue.watch, uD = window.Vuex.useStore, Fp = window.Codex.CdxButton, dD = window.Codex.CdxIcon, gD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ni(!1), n = ni(!1), o = ni("100%"), s = uD(), { currentMTProvider: a } = ue(s), {
      sourceLanguageURLParameter: i,
      targetLanguageURLParameter: c
    } = B(), { sourceSection: d, selectedContentTranslationUnit: g } = K(), r = bo(
      () => s.state.application.translationDataLoadingCounter === 0
    ), l = bo(
      () => {
        var v;
        return (v = d.value) == null ? void 0 : v.isSelectedTranslationUnitTranslated;
      }
    ), u = bo(() => {
      var v;
      return (v = d.value) == null ? void 0 : v.subSections;
    }), p = bo(
      () => {
        var v;
        return (v = d.value) == null ? void 0 : v.selectedTranslationUnitOriginalContent;
      }
    ), m = bo(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: h,
      logEditorCloseEvent: f,
      logEditorCloseWarnEvent: _,
      logEditorSegmentAddEvent: w
    } = uf(), S = TA();
    PA()().then(h);
    const k = NA();
    cD(() => {
      Pp(
        r,
        () => C(this, null, function* () {
          r.value && (yield lD(), S(), k());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    }), Pp(g, k);
    const {
      selectNextTranslationUnit: x,
      selectPreviousTranslationUnit: T
    } = Uo(), V = XA(), F = () => {
      w(), V();
    }, N = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, M = ke(), X = () => {
      const { autoSavePending: v } = s.state.application;
      if (v) {
        Ee.value = !0, _();
        return;
      }
      Ve();
    }, { fetchTranslationsByStatus: W } = Vi(), re = KA(), { clearTranslationURLParameters: O } = B(), { currentTranslation: Z } = Ot(), Ve = () => C(this, null, function* () {
      W("draft"), Z.value && (d.value.reset(), Z.value.restored = !1), f(), O(), re(), yield M.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: te,
      translateSelectedTranslationUnitForAllProviders: mn
    } = qc(), Et = () => {
      we.value || (t.value = !0, mn());
    }, { getCurrentTitleByLanguage: ut } = pn(), Q = (v, L) => {
      M.push({
        name: "sx-editor",
        state: {
          content: v,
          originalContent: p.value,
          title: ut(
            c.value,
            i.value
          ),
          isInitialEdit: L || null
        }
      });
    }, jt = () => M.push({ name: "sx-publisher" }), Ie = () => C(this, null, function* () {
      g.value ? yield te(
        g.value.id,
        a.value
      ) : yield te(0, a.value);
    }), we = bo(
      () => g.value instanceof qe
    ), Ee = ni(!1);
    return (v, L) => {
      const A = ZA("i18n");
      return Vn(), Bp("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: aD(m.value)
      }, [
        st(ae(P), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: on(() => [
            st(ae(b), { shrink: "" }, {
              default: on(() => [
                st(ae(Fp), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": v.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: X
                }, {
                  default: on(() => [
                    st(ae(dD), { icon: ae(Vh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            st(ae(b), {
              grow: "",
              class: "px-1"
            }, {
              default: on(() => [
                QA(Tp("h4", iD, null, 512), [
                  [A, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            st(ae(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: on(() => [
                st(ae(Fp), {
                  disabled: !(ae(d) && ae(d).isTranslated),
                  onClick: jt
                }, {
                  default: on(() => [
                    tD(eD(v.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? (Vn(), Co(ae(P), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: on(() => [
            st(ae(b), {
              dir: ae(I.getDir)(ae(i)),
              lang: ae(i),
              class: "sx-sentence-selector__section"
            }, {
              default: on(() => [
                st(YE),
                Tp("div", rD, [
                  (Vn(!0), Bp(oD, null, nD(u.value, (D) => (Vn(), Co(RL, {
                    id: D.id,
                    key: `sub-section-${D.id}`,
                    "sub-section": D,
                    onBounceTranslation: N
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !we.value && l.value ? (Vn(), Co(DA, {
              key: 0,
              onEditTranslation: L[0] || (L[0] = (D) => Q(D, !1)),
              onSkipTranslation: ae(x),
              onSelectPreviousSegment: ae(T)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : we.value ? (Vn(), Co(iA, {
              key: 2,
              onEditTranslation: Q,
              onApplyTranslation: F,
              onSkipTranslation: ae(x),
              onSelectPreviousSegment: ae(T)
            }, null, 8, ["onSkipTranslation", "onSelectPreviousSegment"])) : (Vn(), Co(LL, {
              key: 1,
              class: sD({ "mb-0": !n.value }),
              onConfigureOptions: Et,
              onEditTranslation: L[1] || (L[1] = (D) => Q(D, !0)),
              onApplyTranslation: F,
              onSkipTranslation: ae(x),
              onSelectPreviousSegment: ae(T),
              onRetryTranslation: Ie
            }, null, 8, ["class", "onSkipTranslation", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Vn(), Co(ae(P), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: on(() => [
            st(ae(Xe), { class: "mt-0" })
          ]),
          _: 1
        })),
        st(UE, {
          active: t.value,
          "onUpdate:active": L[2] || (L[2] = (D) => t.value = D)
        }, null, 8, ["active"]),
        st(hE, {
          modelValue: Ee.value,
          "onUpdate:modelValue": L[3] || (L[3] = (D) => Ee.value = D),
          onDiscardTranslation: Ve
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const pD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: gD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, mD = window.Vue.resolveComponent, hD = window.Vue.createVNode, fD = window.Vue.normalizeClass, wD = window.Vue.openBlock, _D = window.Vue.createElementBlock;
function vD(e, t, n, o, s, a) {
  const i = mD("sx-sentence-selector");
  return wD(), _D("main", {
    class: fD(["sx-sentence-selector-view", a.classes])
  }, [
    hD(i)
  ], 2);
}
const SD = /* @__PURE__ */ J(pD, [["render", vD]]), yD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, CD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const bD = window.Vue.resolveDirective, oi = window.Vue.withDirectives, Ct = window.Vue.openBlock, sn = window.Vue.createElementBlock, si = window.Vue.createCommentVNode, ai = window.Vue.Transition, Xn = window.Vue.withCtx, ko = window.Vue.createVNode, ys = window.Vue.createElementVNode, Wn = window.Vue.unref, kD = window.Vue.renderList, xD = window.Vue.Fragment, $D = window.Vue.normalizeClass, Mp = window.Vue.createBlock, VD = window.Vue.toDisplayString, ED = window.Vue.createTextVNode, LD = { class: "sx-quick-tutorial" }, AD = { class: "sx-quick-tutorial__main-point py-9 px-6" }, DD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, TD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, BD = { class: "sx-quick-tutorial__illustration" }, PD = ["innerHTML"], FD = ["innerHTML"], MD = { class: "sx-quick-tutorial__step-indicator py-3" }, ND = ["onClick"], UD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, ID = {
  key: "secondary-point-1",
  class: "ma-0"
}, RD = {
  key: "secondary-point-2",
  class: "ma-0"
}, zD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Np = window.Vue.ref, Up = window.Codex.CdxButton, OD = window.Codex.CdxIcon, jD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Np(2), n = Np(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (u) => u === n.value, a = ke(), i = zc(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d,
      pageURLParameter: g,
      sectionURLParameter: r
    } = B(), l = () => {
      if (un) {
        const u = { sourcesection: r.value };
        i(
          c.value,
          d.value,
          g.value,
          u
        );
      } else
        a.push({ name: "sx-sentence-selector" });
    };
    return (u, p) => {
      const m = bD("i18n");
      return Ct(), sn("section", LD, [
        ko(Wn(P), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Xn(() => [
            ys("section", AD, [
              ko(ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? oi((Ct(), sn("h2", DD, null, 512)), [
                    [m, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? oi((Ct(), sn("h2", TD, null, 512)), [
                    [m, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : si("", !0)
                ]),
                _: 1
              })
            ]),
            ys("section", BD, [
              ko(ai, { name: "mw-ui-animation-slide-start" }, {
                default: Xn(() => [
                  s(1) ? (Ct(), sn("div", {
                    key: "illustration-1",
                    innerHTML: Wn(CD)
                  }, null, 8, PD)) : s(2) ? (Ct(), sn("div", {
                    key: "illustration-2",
                    innerHTML: Wn(yD)
                  }, null, 8, FD)) : si("", !0)
                ]),
                _: 1
              })
            ]),
            ys("div", MD, [
              (Ct(!0), sn(xD, null, kD(t.value, (h) => (Ct(), sn("span", {
                key: `dot-${h}`,
                class: $D(["dot mx-1", { "dot-active": s(h) }]),
                role: "button",
                onClick: (f) => n.value = h
              }, null, 10, ND))), 128))
            ]),
            ys("section", UD, [
              ko(ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? oi((Ct(), sn("h3", ID, null, 512)), [
                    [m, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? oi((Ct(), sn("h3", RD, null, 512)), [
                    [m, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : si("", !0)
                ]),
                _: 1
              })
            ]),
            ys("div", zD, [
              ko(ai, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Xn(() => [
                  s(1) ? (Ct(), Mp(Wn(Up), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": u.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Xn(() => [
                      ko(Wn(OD), { icon: Wn(Ws) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Ct(), Mp(Wn(Up), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: l
                  }, {
                    default: Xn(() => [
                      ED(VD(u.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  })) : si("", !0)
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
const HD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: jD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, qD = window.Vue.resolveComponent, GD = window.Vue.createVNode, XD = window.Vue.normalizeClass, WD = window.Vue.openBlock, KD = window.Vue.createElementBlock;
function YD(e, t, n, o, s, a) {
  const i = qD("sx-quick-tutorial");
  return WD(), KD("main", {
    class: XD(["sx-quick-tutorial-view", a.classes])
  }, [
    GD(i)
  ], 2);
}
const JD = /* @__PURE__ */ J(HD, [["render", YD]]);
const ZD = window.Vue.resolveDirective, Ip = window.Vue.createElementVNode, QD = window.Vue.withDirectives, eT = window.Vue.unref, tT = window.Vue.withCtx, nT = window.Vue.createVNode, oT = window.Vue.openBlock, sT = window.Vue.createElementBlock, aT = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, iT = { class: "sx-editor__original-content-panel__header mb-2" }, rT = ["lang", "dir", "innerHTML"], Rp = window.Vue.ref, lT = window.Vue.onMounted, cT = {
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
    const t = e, n = (i, c) => {
      const d = i.getElementsByTagName("a");
      for (const g of d)
        g.href = q.getPageUrl(c, g.title), g.target = "_blank";
    }, o = Rp(null), s = Rp(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return lT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (i, c) => {
      const d = ZD("i18n");
      return oT(), sT("section", aT, [
        QD(Ip("h5", iT, null, 512), [
          [d, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        nT(eT(M1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: tT(() => [
            Ip("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, rT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, uT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const dT = window.Vue.unref, Cs = window.Vue.createElementVNode, zp = window.Vue.resolveDirective, Al = window.Vue.withDirectives, gT = window.Vue.normalizeClass, pT = window.Vue.openBlock, mT = window.Vue.createElementBlock, hT = window.Vue.createCommentVNode, fT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, wT = { class: "sx-editor__feedback-overlay-content px-4" }, _T = ["innerHTML"], vT = { class: "sx-editor__feedback-overlay-content__title" }, ST = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Dl = window.Vue.computed, yT = {
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
    const t = e, { targetLanguageURLParameter: n } = B(), o = Dl(
      () => Rt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Dl(() => {
      const i = Rt.getScoreStatus(o.value);
      return i === "failure" ? o.value === 0 ? "failure" : "warning" : i;
    }), a = Dl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (i, c) => {
      const d = zp("i18n"), g = zp("i18n-html");
      return e.showFeedback ? (pT(), mT("div", fT, [
        Cs("div", wT, [
          Cs("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: dT(uT)
          }, null, 8, _T),
          Al(Cs("h2", vT, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Al(Cs("p", ST, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Al(Cs("p", {
            class: gT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : hT("", !0);
    };
  }
}, CT = window.Vuex.useStore, bT = () => {
  const e = CT(), t = Gc(), { selectNextTranslationUnit: n } = Uo(), { sourceSection: o, selectedContentTranslationUnit: s } = K(), { getCurrentTitleByLanguage: a } = pn();
  return (i) => C(void 0, null, function* () {
    const c = document.createElement("div");
    c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), i = c.innerHTML;
    const { sourceLanguage: d, targetLanguage: g, currentMTProvider: r } = e.state.application;
    s.value instanceof qe && (i = (yield Zh(
      i,
      a(g, d),
      g
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      r
    ), t(), n();
  });
};
const je = window.Vue.unref, Tl = window.Vue.openBlock, Bl = window.Vue.createBlock, Op = window.Vue.createCommentVNode, jp = window.Vue.createVNode, kT = window.Vue.createElementVNode, xT = window.Vue.withCtx, $T = { class: "sx-editor__editing-surface-container grow" }, Pl = window.Vue.ref, VT = window.Vue.computed, ET = window.Vuex.useStore, LT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Pl(!1), o = ke(), s = ET(), a = () => n.value = !0, i = () => o.replace({ name: t.fromRoute }), { isFinalEdit: c, isInitialEdit: d, content: g, originalContent: r, title: l } = history.state, u = Pl(null), p = Pl(!1), { logEditorSegmentAddEvent: m } = uf(), { targetLanguage: h, sourceLanguage: f } = ue(s), { sourceSection: _ } = K(), w = VT(
      () => Rt.calculateScore(
        u.value,
        g,
        h.value
      )
    ), S = bT(), y = (k) => C(this, null, function* () {
      u.value = k, p.value = !0;
      const x = new Promise((V) => setTimeout(V, 2e3));
      let T = Promise.resolve();
      c ? _.value.editedTranslation = k : (w.value === 0 && d && m(), T = S(k)), yield Promise.all([x, T]), p.value = !1, i();
    });
    return (k, x) => (Tl(), Bl(je(P), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: xT(() => [
        je(r) ? (Tl(), Bl(cT, {
          key: 0,
          language: je(f),
          dir: je(I.getDir)(je(f)),
          "original-content": je(r)
        }, null, 8, ["language", "dir", "original-content"])) : Op("", !0),
        n.value ? Op("", !0) : (Tl(), Bl(je(Xe), { key: 1 })),
        kT("div", $T, [
          jp(yT, {
            "edited-translation": u.value,
            "show-feedback": p.value,
            "proposed-translation": je(g)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          jp(Q$, {
            content: je(g),
            language: je(h),
            dir: je(I.getDir)(je(h)),
            title: je(l),
            onReady: a,
            onClose: i,
            onEditCompleted: y
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const AT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: LT
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
}, DT = window.Vue.resolveComponent, TT = window.Vue.createVNode, BT = window.Vue.normalizeClass, PT = window.Vue.openBlock, FT = window.Vue.createElementBlock;
function MT(e, t, n, o, s, a) {
  const i = DT("sx-editor");
  return PT(), FT("main", {
    class: BT(["sx-editor-view", a.classes])
  }, [
    TT(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const NT = /* @__PURE__ */ J(AT, [["render", MT]]);
const Nt = window.Vue.unref, Kn = window.Vue.createVNode, bs = window.Vue.withCtx, UT = window.Vue.resolveDirective, IT = window.Vue.withDirectives, RT = window.Vue.openBlock, zT = window.Vue.createBlock, Hp = window.Codex.CdxButton, qp = window.Codex.CdxIcon, OT = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = ke(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = UT("i18n");
      return RT(), zT(Nt(P), { class: "ma-0 sx-publisher__header" }, {
        default: bs(() => [
          Kn(Nt(b), {
            shrink: "",
            class: "me-2"
          }, {
            default: bs(() => [
              Kn(Nt(Hp), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: bs(() => [
                  Kn(Nt(qp), { icon: Nt(No) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          IT(Kn(Nt(b), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Kn(Nt(b), { shrink: "" }, {
            default: bs(() => [
              Kn(Nt(Hp), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: bs(() => [
                  Kn(Nt(qp), { icon: Nt(yb) }, null, 8, ["icon"])
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
}, jT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, HT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Gp = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Fl = window.Vue.createElementVNode, Xp = window.Vue.toDisplayString, Ml = window.Vue.unref, Nl = window.Vue.withCtx, Wp = window.Vue.createVNode, qT = window.Vue.openBlock, GT = window.Vue.createBlock, XT = window.Vue.createCommentVNode, WT = ["innerHTML"], KT = ["textContent"], YT = ["textContent"], Ul = window.Vue.computed, JT = {
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
    const t = pe(), n = e, o = {
      pending: {
        svg: jT,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: HT,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Gp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Gp,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Ul(() => o[n.status].svg), a = Ul(() => o[n.status].title), i = Ul(() => o[n.status].subtitle);
    return (c, d) => e.active ? (qT(), GT(Ml(ct), {
      key: 0,
      "overlay-opacity": "high",
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Nl(() => [
        Wp(Ml(P), { class: "ma-4" }, {
          default: Nl(() => [
            Wp(Ml(b), null, {
              default: Nl(() => [
                Fl("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, WT),
                Fl("h2", {
                  textContent: Xp(a.value)
                }, null, 8, KT),
                Fl("p", {
                  class: "ma-0",
                  textContent: Xp(i.value)
                }, null, 8, YT)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : XT("", !0);
  }
};
const He = window.Vue.unref, bt = window.Vue.createVNode, an = window.Vue.withCtx, ZT = window.Vue.resolveDirective, QT = window.Vue.withDirectives, Kp = window.Vue.toDisplayString, e6 = window.Vue.createTextVNode, Il = window.Vue.openBlock, Yp = window.Vue.createElementBlock, t6 = window.Vue.createCommentVNode, df = window.Vue.createElementVNode, n6 = window.Vue.createBlock, o6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, s6 = ["src"], a6 = ["textContent"], i6 = /* @__PURE__ */ df("p", { class: "mt-0" }, null, -1), r6 = window.Vue.computed, l6 = window.Vue.inject, c6 = window.Vue.ref, Jp = window.Codex.CdxButton, u6 = window.Codex.CdxIcon, d6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Qm,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = c6(""), s = () => n("close"), a = () => n("publish", o.value), i = l6("breakpoints"), c = r6(() => i.value.mobile);
    return (d, g) => {
      const r = ZT("i18n");
      return e.active && e.captchaDetails ? (Il(), n6(He(ct), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: an(() => [
          bt(He(P), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: an(() => [
              bt(He(b), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: an(() => [
                  bt(He(Jp), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": d.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: an(() => [
                      bt(He(u6), { icon: He(No) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              QT(bt(He(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              bt(He(b), {
                shrink: "",
                class: "justify-center"
              }, {
                default: an(() => [
                  bt(He(Jp), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: an(() => [
                      e6(Kp(d.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          bt(He(mi))
        ]),
        default: an(() => [
          df("div", o6, [
            e.captchaDetails.type === "image" ? (Il(), Yp("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, s6)) : (Il(), Yp("p", {
              key: 1,
              textContent: Kp(e.captchaDetails.question)
            }, null, 8, a6)),
            i6,
            bt(He(P), { class: "ma-0" }, {
              default: an(() => [
                bt(He(b), null, {
                  default: an(() => [
                    bt(He(Yl), {
                      value: o.value,
                      "onUpdate:value": g[0] || (g[0] = (l) => o.value = l),
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
      }, 8, ["fullscreen"])) : t6("", !0);
    };
  }
};
const Yn = window.Vue.unref, ks = window.Vue.createVNode, ii = window.Vue.withCtx, Jn = window.Vue.createElementVNode, g6 = window.Vue.resolveDirective, p6 = window.Vue.withDirectives, m6 = window.Vue.renderList, Zp = window.Vue.Fragment, Rl = window.Vue.openBlock, Qp = window.Vue.createElementBlock, h6 = window.Vue.toDisplayString, f6 = window.Vue.normalizeClass, w6 = window.Vue.createBlock, _6 = { class: "mw-ui-dialog__header" }, v6 = { class: "row ma-0 px-4 py-3" }, S6 = { class: "col shrink justify-center" }, y6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, C6 = { class: "mb-0" }, b6 = { class: "pa-4" }, k6 = ["textContent"], x6 = window.Vuex.useStore, xs = window.Vue.computed, $6 = window.Codex.CdxButton, V6 = window.Codex.CdxIcon, E6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = x6(), s = xs(() => o.state.application.publishTarget), a = xs(() => o.state.translator.isAnon), i = pe(), { sourceSection: c } = K(), d = xs(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-label") : i.i18n("cx-sx-publisher-new-section-option-label")
    ), g = xs(
      () => c.value.isLeadSection ? i.i18n("cx-sx-publisher-lead-section-option-details") : i.i18n("cx-sx-publisher-new-section-option-details")
    ), r = xs(() => [
      {
        label: d.value,
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
    ]), l = (m) => m === r.value.length - 1 ? "mb-1" : "mb-4", u = () => n("update:active", !1), p = (m) => {
      const h = m.target.value;
      o.commit("application/setPublishTarget", h), u();
    };
    return (m, h) => {
      const f = g6("i18n");
      return Rl(), w6(Yn(ct), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[0] || (h[0] = (_) => m.$emit("update:active", _)),
        onClose: u
      }, {
        header: ii(() => [
          Jn("div", _6, [
            Jn("div", v6, [
              Jn("div", S6, [
                ks(Yn($6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: u
                }, {
                  default: ii(() => [
                    ks(Yn(V6), { icon: Yn(Vh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Jn("div", y6, [
                p6(Jn("h4", C6, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ks(Yn(mi))
          ])
        ]),
        default: ii(() => [
          Jn("div", b6, [
            ks(Yn(g1), {
              value: s.value,
              name: "publish-options",
              onInput: p
            }, {
              default: ii(() => [
                (Rl(!0), Qp(Zp, null, m6(r.value, (_, w) => (Rl(), Qp(Zp, {
                  key: _.label
                }, [
                  ks(Yn(Jl), {
                    class: "pa-0 my-1",
                    label: _.label,
                    "input-value": _.value,
                    disabled: _.disabled
                  }, null, 8, ["label", "input-value", "disabled"]),
                  Jn("p", {
                    class: f6(["complementary ms-7 mt-0", l(w)]),
                    textContent: h6(_.details)
                  }, null, 10, k6)
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
const kt = window.Vue.unref, Zn = window.Vue.createVNode, L6 = window.Vue.resolveDirective, em = window.Vue.withDirectives, ri = window.Vue.openBlock, tm = window.Vue.createElementBlock, A6 = window.Vue.createCommentVNode, nm = window.Vue.toDisplayString, zl = window.Vue.createElementVNode, xo = window.Vue.withCtx, om = window.Vue.createBlock, D6 = window.Vue.Fragment, T6 = window.Vue.normalizeClass, B6 = { class: "sx-publisher__review-info__content" }, P6 = {
  key: 0,
  class: "complementary ma-0"
}, F6 = ["textContent"], M6 = ["textContent"], En = window.Vue.computed, sm = window.Vue.ref, N6 = window.Vue.watch, am = window.Codex.CdxButton, Ol = window.Codex.CdxIcon, U6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = sm(0), o = sm(null);
    N6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const _ = h.querySelector("a");
        _ && _.setAttribute("target", "_blank");
      }
    });
    const s = En(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = En(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), i = En(() => {
      switch (a.value) {
        case "warning":
          return xh;
        case "error":
          return Sb;
        default:
          return bb;
      }
    }), c = En(() => a.value === "default"), d = En(
      () => c.value ? "notice" : a.value
    ), g = En(
      () => `sx-publisher__review-info--${d.value}`
    ), r = pe(), l = En(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), u = En(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.title) || r.i18n("cx-sx-publisher-review-info-error");
      }
    ), p = () => {
      const h = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + h) % h;
    }, m = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (h, f) => {
      const _ = L6("i18n-html");
      return ri(), om(kt(N0), {
        type: d.value,
        class: T6(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: c.value
      }, {
        icon: xo(() => [
          Zn(kt(Ol), {
            icon: i.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: xo(() => [
          zl("div", B6, [
            a.value === "default" ? em((ri(), tm("p", P6, null, 512)), [
              [_, void 0, "cx-sx-publisher-review-info"]
            ]) : (ri(), tm(D6, { key: 1 }, [
              zl("h5", {
                textContent: nm(u.value)
              }, null, 8, F6),
              zl("p", {
                textContent: nm(l.value)
              }, null, 8, M6),
              Zn(kt(P), {
                justify: "between",
                class: "ma-0"
              }, {
                default: xo(() => [
                  em(Zn(kt(b), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [_, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (ri(), om(kt(b), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: xo(() => [
                      Zn(kt(am), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: xo(() => [
                          Zn(kt(Ol), { icon: kt(Mc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      Zn(kt(am), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: xo(() => [
                          Zn(kt(Ol), { icon: kt(Ws) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : A6("", !0)
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
}, I6 = (e) => {
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
}, R6 = window.Vuex.useStore, z6 = window.Vue.computed, O6 = () => {
  const e = R6(), { currentTranslation: t } = Ot(), { currentMTProvider: n, previousRoute: o } = ue(e), { currentTargetPage: s } = Ze(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c,
    sectionURLParameter: d
  } = B(), { sourceSection: g } = K(), r = Ye(), l = z6(() => {
    var f;
    const h = {
      translation_source_language: a.value,
      translation_target_language: i.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: c.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      translation_target_exists: !!s.value
    };
    if (d.value ? (h.translation_source_section = d.value, h.translation_type = "section") : h.translation_type = "article", t.value) {
      h.translation_id = t.value.translationId, h.translation_target_title = t.value.targetTitle;
      const _ = t.value.targetSectionTitle;
      _ && (h.translation_target_section = _);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = Y.getProviderForInstrumentation(n.value)), h.human_modification_rate = Rt.getMTScoreForPageSection(
      g.value,
      i.value
    ) / 100, h.human_modification_threshold = Rt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => r(de({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => r(de({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => r(de({
      event_type: "publish_failure"
    }, l.value))
  };
}, im = window.Vue.ref, j6 = window.Vuex.useStore, H6 = () => {
  const e = j6(), { pageURLParameter: t } = B(), { sourceSection: n, targetPageTitleForPublishing: o } = K(), s = lf(), a = im(!1), i = im("pending"), c = () => a.value = !1, d = Gc(), {
    logPublishAttemptEvent: g,
    logPublishSuccessEvent: r,
    logPublishFailureEvent: l
  } = O6(), u = (m, h) => C(void 0, null, function* () {
    g();
    const f = yield d();
    if (f instanceof Ao)
      return l(), { publishFeedbackMessage: f, targetUrl: null };
    const _ = f, {
      /** @type {PageSection} */
      sourceLanguage: w,
      targetLanguage: S
    } = e.state.application, y = o.value, k = e.getters["application/isSandboxTarget"], x = {
      html: I6(n.value.translationHtml),
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
    const T = yield lt.publishTranslation(
      x
    );
    return T.publishFeedbackMessage === null ? r(T.pageId, T.revisionId) : l(), T;
  });
  return {
    closePublishDialog: c,
    doPublish: (m = null, h = null) => C(void 0, null, function* () {
      i.value = "pending", a.value = !0;
      let f;
      try {
        f = yield u(
          h == null ? void 0 : h.id,
          m
        );
      } catch (_) {
        if (_ instanceof Bo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw _;
      }
      return f;
    }),
    isPublishDialogActive: a,
    publishStatus: i
  };
}, q6 = window.Vue.computed, G6 = () => {
  const e = ke(), { sourceSection: t } = K(), { getCurrentTitleByLanguage: n } = pn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = q6(
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
}, X6 = window.Vuex.useStore, W6 = () => {
  const e = X6(), { targetLanguage: t } = ue(e), { sourceSection: n } = K();
  return () => {
    const o = Rt.getMTScoreForPageSection(
      n.value,
      t.value
    ), s = Rt.getScoreStatus(o);
    if (s === "success")
      return null;
    const a = 100 - o, i = s === "failure" ? "error" : "warning";
    let c, d;
    return i === "warning" ? (c = mw.message("cx-sx-publisher-mt-abuse-message-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (c = mw.message("cx-sx-publisher-mt-abuse-error-title", a).plain(), d = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Ao({
      title: c,
      text: d,
      status: i,
      type: "mt"
    });
  };
}, K6 = window.Vue.ref, Y6 = window.Vue.computed, J6 = () => {
  const e = W6(), t = K6([]), n = Y6(
    () => t.value.some((i) => i.isError)
  );
  return {
    addPublishFeedbackMessage: (i) => {
      t.value.push(i), t.value.sort((c, d) => +d.isError - +c.isError);
    },
    clearPublishFeedbackMessages: () => {
      t.value = [];
    },
    publishFeedbackMessages: t,
    isPublishingDisabled: n,
    initializePublishFeedbackMessages: () => {
      const i = e();
      i && t.value.push(i);
    }
  };
}, Z6 = window.Vuex.useStore, Q6 = () => {
  const e = Z6(), { currentSourcePage: t } = Ze(), { sourceLanguage: n, targetLanguage: o } = ue(e), { sourceSection: s, targetPageTitleForPublishing: a } = K();
  return (i) => C(void 0, null, function* () {
    const c = a.value, d = e.getters["application/isSandboxTarget"], g = t.value.title, r = new mw.Title(g), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !d && r.getNamespaceId() !== l.user)
      try {
        yield ki.addWikibaseLink(
          n.value,
          o.value,
          g,
          c
        );
      } catch (u) {
        mw.log.error("Error while adding wikibase link", u);
      }
    if (!i) {
      const u = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(u), new Error(u);
    }
    location.href = i;
  });
}, rm = window.Vue.ref, e9 = () => {
  const e = rm(!1), t = rm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const he = window.Vue.unref, Ne = window.Vue.createVNode, t9 = window.Vue.resolveDirective, $s = window.Vue.createElementVNode, n9 = window.Vue.withDirectives, $o = window.Vue.withCtx, o9 = window.Vue.openBlock, s9 = window.Vue.createElementBlock, a9 = { class: "sx-publisher" }, i9 = { class: "sx-publisher__publish-panel pa-4" }, r9 = { class: "mb-2" }, l9 = ["innerHTML"], c9 = { class: "sx-publisher__section-preview pa-5" }, u9 = ["innerHTML"], lm = window.Vue.computed, d9 = window.Vue.onMounted, g9 = window.Vue.ref, p9 = window.Vue.watch, m9 = window.Vuex.useStore, cm = window.Codex.CdxButton, um = window.Codex.CdxIcon, h9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = m9(), { sourceSection: n } = K(), o = lm(() => {
      var V;
      return (V = n.value) == null ? void 0 : V.title;
    }), s = pe(), a = lm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: i,
      captchaDialogOn: c,
      handleCaptchaError: d,
      onCaptchaDialogClose: g
    } = e9(), {
      publishFeedbackMessages: r,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: u,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = J6(), h = Q6(), { doPublish: f, isPublishDialogActive: _, publishStatus: w, closePublishDialog: S } = H6(), y = (V = null) => C(this, null, function* () {
      if (l.value)
        return;
      const F = yield f(V, i);
      if (!F)
        return;
      const { publishFeedbackMessage: N, targetUrl: M } = F;
      if (d(N)) {
        S();
        return;
      } else
        N && u(N);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          S();
          return;
        }
        h(M);
      }, 1e3);
    });
    d9(() => m());
    const k = G6(), x = g9(!1), T = () => x.value = !0;
    return p9(x, (V) => {
      V || (p(), m());
    }), (V, F) => {
      const N = t9("i18n");
      return o9(), s9("section", a9, [
        Ne(OT, {
          "is-publishing-disabled": he(l),
          onPublishTranslation: y
        }, null, 8, ["is-publishing-disabled"]),
        $s("div", i9, [
          n9($s("h5", r9, null, 512), [
            [N, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          $s("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, l9),
          Ne(he(P), {
            justify: "end",
            class: "ma-0"
          }, {
            default: $o(() => [
              Ne(he(b), { shrink: "" }, {
                default: $o(() => [
                  Ne(he(cm), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: T
                  }, {
                    default: $o(() => [
                      Ne(he(um), { icon: he(Db) }, null, 8, ["icon"])
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
        Ne(U6, { "publish-feedback-messages": he(r) }, null, 8, ["publish-feedback-messages"]),
        $s("section", c9, [
          Ne(he(P), { class: "pb-5 ma-0" }, {
            default: $o(() => [
              Ne(he(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ne(he(b), { shrink: "" }, {
                default: $o(() => [
                  Ne(he(cm), {
                    weight: "quiet",
                    "aria-label": V.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: he(k)
                  }, {
                    default: $o(() => [
                      Ne(he(um), { icon: he(Bc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          $s("div", {
            innerHTML: he(n).translationHtml
          }, null, 8, u9)
        ]),
        Ne(E6, {
          active: x.value,
          "onUpdate:active": F[0] || (F[0] = (M) => x.value = M)
        }, null, 8, ["active"]),
        Ne(d6, {
          active: he(c),
          "captcha-details": he(i),
          onClose: he(g),
          onPublish: F[1] || (F[1] = (M) => y(M))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ne(JT, {
          active: he(_),
          status: he(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const f9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: h9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, w9 = window.Vue.resolveComponent, _9 = window.Vue.createVNode, v9 = window.Vue.normalizeClass, S9 = window.Vue.openBlock, y9 = window.Vue.createElementBlock;
function C9(e, t, n, o, s, a) {
  const i = w9("sx-publisher");
  return S9(), y9("main", {
    class: v9(["sx-publisher-view", a.classes])
  }, [
    _9(i)
  ], 2);
}
const b9 = /* @__PURE__ */ J(f9, [["render", C9]]);
const xt = window.Vue.unref, Ln = window.Vue.createVNode, Qn = window.Vue.withCtx, jl = window.Vue.toDisplayString, Hl = window.Vue.createElementVNode, k9 = window.Vue.openBlock, x9 = window.Vue.createBlock, $9 = ["textContent"], V9 = ["textContent"], E9 = ["textContent"], gf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Fo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (k9(), x9(xt(P), {
      class: "cx-search-suggestion pt-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: xt(I.getDir)(e.suggestion.language)
    }, {
      default: Qn(() => [
        Ln(xt(b), { shrink: "" }, {
          default: Qn(() => [
            Ln(xt(mc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Ln(xt(b), { class: "ms-4" }, {
          default: Qn(() => [
            Ln(xt(P), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Qn(() => [
                Ln(xt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    Hl("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: jl(e.suggestion.title)
                    }, null, 8, $9)
                  ]),
                  _: 1
                }),
                Ln(xt(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Qn(() => [
                    Hl("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: jl(e.suggestion.description)
                    }, null, 8, V9)
                  ]),
                  _: 1
                }),
                Ln(xt(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Qn(() => [
                    Ln(xt(Pe), {
                      icon: xt(t0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Hl("small", {
                      textContent: jl(e.suggestion.langLinksCount)
                    }, null, 8, E9)
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
const Vs = window.Vue.unref, Es = window.Vue.openBlock, ql = window.Vue.createBlock, L9 = window.Vue.createCommentVNode, A9 = window.Vue.resolveDirective, D9 = window.Vue.withDirectives, dm = window.Vue.createElementBlock, T9 = window.Vue.renderList, B9 = window.Vue.Fragment, P9 = window.Vue.withCtx, F9 = {
  key: 1,
  class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
}, gm = window.Vue.computed, M9 = {
  __name: "SearchResultsCard",
  props: {
    searchInput: {
      type: String,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguageURLParameter: t } = B(), n = gm(() => I.getAutonym(t.value)), o = e, s = gm(() => o.searchInput), { searchResultsLoading: a, searchResultsSlice: i } = Wh(
      t,
      s
    );
    return (c, d) => {
      const g = A9("i18n");
      return Es(), ql(Vs(Ge), { class: "sx-article-search__results mb-0 pa-4" }, {
        default: P9(() => [
          Vs(a) ? (Es(), ql(Vs(Xe), { key: 0 })) : Vs(i).length === 0 ? D9((Es(), dm("p", F9, null, 512)), [
            [g, [
              s.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : L9("", !0),
          (Es(!0), dm(B9, null, T9(Vs(i), (r) => (Es(), ql(gf, {
            key: r.pageid,
            suggestion: r,
            onClick: (l) => c.$emit("suggestion-clicked", r)
          }, null, 8, ["suggestion", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const N9 = window.Vue.toDisplayString, U9 = window.Vue.createElementVNode, I9 = window.Vue.renderList, R9 = window.Vue.Fragment, Gl = window.Vue.openBlock, z9 = window.Vue.createElementBlock, pm = window.Vue.createBlock, O9 = window.Vue.unref, mm = window.Vue.withCtx, j9 = ["textContent"], hm = {
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
    return (t, n) => (Gl(), pm(O9(Ge), { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: mm(() => [
        U9("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: N9(e.cardTitle)
        }, null, 8, j9)
      ]),
      default: mm(() => [
        (Gl(!0), z9(R9, null, I9(e.suggestions, (o) => (Gl(), pm(gf, {
          key: o.pageid,
          suggestion: o,
          onClick: (s) => t.$emit("suggestion-clicked", o)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, H9 = window.Vue.computed, q9 = (e, t) => H9(() => {
  const o = {
    value: "other",
    props: {
      icon: a0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, s = [
    e.value,
    ...t.value.slice(0, 2)
  ];
  return [...s.filter(
    (i, c) => s.findIndex((d) => d === i) === c
  ).map((i) => ({
    value: i,
    props: {
      label: I.getAutonym(i),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), G9 = window.Vue.computed, X9 = () => {
  const { supportedLanguageCodes: e } = Po(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return { getSuggestedSourceLanguages: (s) => G9(() => {
    const a = (navigator.language || "").split("-")[0], i = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((d) => d.split("-")[0]), c = [
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      a,
      ...s.value,
      ...i
    ];
    return [...new Set(c)].filter(
      (d) => d !== t.value && d !== n.value && e.value.includes(d)
    );
  }) };
};
const W9 = window.Vue.resolveDirective, K9 = window.Vue.createElementVNode, Xl = window.Vue.withDirectives, Ue = window.Vue.unref, Ls = window.Vue.withCtx, Ut = window.Vue.createVNode, As = window.Vue.openBlock, fm = window.Vue.createBlock, Y9 = window.Vue.createCommentVNode, Wl = window.Vue.createElementBlock, J9 = window.Vue.Fragment, Z9 = window.Vue.vShow, Q9 = { class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto" }, eB = { class: "mb-0" }, tB = {
  key: 2,
  class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
}, Vo = window.Vue.ref, nB = window.Vue.onMounted, wm = window.Vue.computed, _m = window.Vue.watch, oB = window.Vue.inject, sB = window.Vuex.useStore, aB = window.Codex.CdxButton, iB = window.Codex.CdxIcon, rB = window.Codex.CdxSearchInput, lB = 3, cB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Vo(""), n = Vo(!1), o = Vo(null), s = Vo(!1), a = Vo([]), i = sB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d
    } = B(), { supportedLanguageCodes: g } = Po(), { getSuggestedSourceLanguages: r } = X9(), l = r(a), u = q9(
      c,
      l
    ), p = ke(), { fetchAllTranslations: m } = Vi();
    nB(() => C(this, null, function* () {
      var O;
      m();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("uls-previous-languages"))
        );
      } catch (Z) {
      }
      (O = o.value) == null || O.focus();
    }));
    const h = () => {
      p.push({ name: "dashboard" });
    }, f = Jm(), _ = (O) => f(O, d.value), w = (O) => {
      if (O === "other") {
        s.value = !0;
        return;
      }
      _(O);
    };
    _m(c, () => i.dispatch("mediawiki/fetchNearbyPages"), {
      immediate: !0
    });
    const S = Ye();
    _m(t, () => {
      n.value || (n.value = !0, S({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: d.value
      }));
    });
    const y = () => {
      s.value = !1;
    }, k = (O) => {
      s.value = !1, a.value.push(c.value), w(O);
    }, { fetchPreviousEditsInSource: x, previousEditsInSource: T } = xc(), V = Vo([]);
    (() => x().then(() => T.value.length > 0 ? to.fetchPages(
      c.value,
      T.value
    ) : []).then((O) => {
      O = O.slice(0, lB), O = O.sort(
        (Z, Ve) => T.value.indexOf(Z.title) - T.value.indexOf(Ve.title)
      ), V.value = O;
    }))();
    const N = wm(() => i.getters["mediawiki/getNearbyPages"]), M = oB("breakpoints"), X = wm(() => M.value.tabletAndDown), W = Ks(), re = (O, Z) => W(
      O.title,
      c.value,
      d.value,
      Z
    );
    return (O, Z) => {
      const Ve = W9("i18n");
      return As(), Wl("section", Q9, [
        Ut(Ue(P), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ls(() => [
            Ut(Ue(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ls(() => [
                Xl(K9("h5", eB, null, 512), [
                  [Ve, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Ut(Ue(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ls(() => [
                Ut(Ue(aB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": O.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: h
                }, {
                  default: Ls(() => [
                    Ut(Ue(iB), { icon: Ue(No) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ut(Ue(rB), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": Z[0] || (Z[0] = (te) => t.value = te),
          class: "sx-article-search__search-input",
          placeholder: O.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Ut(Ue(Us), {
          class: "sx-article-search__language-button-group",
          items: Ue(u),
          active: Ue(c),
          onSelect: w
        }, null, 8, ["items", "active"]),
        t.value ? Y9("", !0) : (As(), Wl(J9, { key: 0 }, [
          V.value && V.value.length ? (As(), fm(hm, {
            key: 0,
            "card-title": O.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: V.value,
            onSuggestionClicked: Z[1] || (Z[1] = (te) => re(te, "suggestion_recent_edit"))
          }, null, 8, ["card-title", "suggestions"])) : N.value && N.value.length ? (As(), fm(hm, {
            key: 1,
            "card-title": O.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: N.value,
            onSuggestionClicked: Z[2] || (Z[2] = (te) => re(te, "suggestion_nearby"))
          }, null, 8, ["card-title", "suggestions"])) : Xl((As(), Wl("p", tB, null, 512)), [
            [Ve, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Xl(Ut(M9, {
          "search-input": t.value,
          onSuggestionClicked: Z[3] || (Z[3] = (te) => re(te, "search_result"))
        }, null, 8, ["search-input"]), [
          [Z9, !!t.value]
        ]),
        Ut(Ue(ct), {
          value: s.value,
          "onUpdate:value": Z[4] || (Z[4] = (te) => s.value = te),
          class: "sx-article-search-language-selector",
          fullscreen: X.value,
          header: X.value,
          title: O.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: y
        }, {
          default: Ls(() => [
            Ut(Ue(Hh), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: Ue(g),
              suggestions: Ue(l),
              placeholder: O.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: k,
              onClose: y
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ]);
    };
  }
};
const uB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: cB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, dB = window.Vue.resolveComponent, gB = window.Vue.createVNode, pB = window.Vue.normalizeClass, mB = window.Vue.openBlock, hB = window.Vue.createElementBlock;
function fB(e, t, n, o, s, a) {
  const i = dB("sx-article-search");
  return mB(), hB("main", {
    class: pB(["sx-article-search-view", a.classes])
  }, [
    gB(i)
  ], 2);
}
const wB = /* @__PURE__ */ J(uB, [["render", fB]]), _B = () => {
  const e = Ks(), t = ef(), { logDashboardOpenEvent: n, getEventSource: o } = Yh(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i
  } = B();
  return () => C(void 0, null, function* () {
    return t(s.value, i.value).then(
      () => n()
    ), e(
      i.value,
      s.value,
      a.value,
      o(),
      null,
      !1
    );
  });
}, vB = window.Vuex.useStore, pf = [
  {
    path: "",
    name: "dashboard",
    component: _g,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: wB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: $V,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: G3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: rE,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: JD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: SD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: NT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: b9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: _g,
    meta: { workflowStep: 0 }
  }
], Xc = IC({
  history: Uy(),
  routes: pf
});
Xc.beforeEach((e, t, n) => {
  const o = vB(), s = _B(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: c
  } = B();
  if (o.commit("application/setPreviousRoute", t.name), mw.user.isAnon() || km.assertUser().catch((u) => {
    u instanceof Bo && o.commit("application/setIsLoginDialogOn", !0);
  }), e.query.force) {
    n();
    return;
  }
  const d = !!(a.value && i.value && c.value);
  if (!t.name && d) {
    s(), e.name === "sx-translation-confirmer" ? n() : n({ name: "sx-translation-confirmer" });
    return;
  }
  const g = t.meta.workflowStep, r = e.meta.workflowStep;
  if (isNaN(g) && r >= 1) {
    n({ name: "dashboard" });
    return;
  }
  if (Math.ceil(r) - Math.floor(g) > 1) {
    const u = Math.ceil(r) - 1, p = pf.find(
      (m) => m.meta.workflowStep === u
    );
    n({ name: p.name });
    return;
  }
  n();
});
Xc.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const SB = window.Vue.createApp, yB = mw.config.get("wgUserLanguage"), CB = "en", bB = mw.messages.values || {}, Io = SB(CS);
Io.use(Xc);
Io.use(iy);
Io.use(W1);
Io.use(X1);
const kB = x_({
  locale: yB,
  finalFallback: CB,
  messages: bB,
  wikilinks: !0
});
Io.use(kB);
Io.mount("#contenttranslation");
